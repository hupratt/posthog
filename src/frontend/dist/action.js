(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["action"],{

/***/ "./frontend/src/lib/components/AppEditorLink/AppEditorLink.js":
/*!********************************************************************!*\
  !*** ./frontend/src/lib/components/AppEditorLink/AppEditorLink.js ***!
  \********************************************************************/
/*! exports provided: AppEditorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEditorLink", function() { return AppEditorLink; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _ChooseURLModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChooseURLModal */ "./frontend/src/lib/components/AppEditorLink/ChooseURLModal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./frontend/src/lib/components/AppEditorLink/utils.js");
/* harmony import */ var _scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../scenes/userLogic */ "./frontend/src/scenes/userLogic.js");






function AppEditorLink(_ref) {
  var actionId = _ref.actionId,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_2__["useValues"])(_scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      user = _useValues.user;

  var appUrls = user.team.app_urls;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["appEditorUrl"])(actionId, appUrls && appUrls[0]),
    style: style,
    className: className,
    onClick: function onClick(e) {
      e.preventDefault();
      setModalOpen(true);
    }
  }, children), modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChooseURLModal__WEBPACK_IMPORTED_MODULE_3__["ChooseURLModal"], {
    actionId: actionId,
    dismissModal: function dismissModal() {
      return setModalOpen(false);
    }
  }));
}

/***/ }),

/***/ "./frontend/src/lib/components/AppEditorLink/ChooseURLModal.js":
/*!*********************************************************************!*\
  !*** ./frontend/src/lib/components/AppEditorLink/ChooseURLModal.js ***!
  \*********************************************************************/
/*! exports provided: ChooseURLModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseURLModal", function() { return ChooseURLModal; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./frontend/src/lib/components/Modal.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./frontend/src/lib/api.js");
/* harmony import */ var _scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var _UrlRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UrlRow */ "./frontend/src/lib/components/AppEditorLink/UrlRow.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./frontend/src/lib/components/AppEditorLink/utils.js");








function ChooseURLModal(_ref) {
  var actionId = _ref.actionId,
      dismissModal = _ref.dismissModal;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_2__["useValues"])(_scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      user = _useValues.user;

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_2__["useActions"])(_scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      setUser = _useActions.setUser,
      loadUser = _useActions.loadUser,
      userUpdateRequest = _useActions.userUpdateRequest;

  var appUrls = user.team.app_urls;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_utils__WEBPACK_IMPORTED_MODULE_7__["defaultUrl"]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      newValue = _useState2[0],
      setNewValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      addingNew = _useState4[0],
      setAddingNew = _useState4[1]; // We run this effect so that the URLs are the latest ones from the database.
  // Otherwise if you edit/add an URL, click to it and then click back, you will
  // see state urls (i.e. without the one you just added)


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadUser();
  }, []); // run just once

  function _saveUrl(_ref2) {
    var index = _ref2.index,
        value = _ref2.value,
        callback = _ref2.callback;
    var newUrls = typeof index === 'undefined' ? appUrls.concat([value]) : appUrls.map(function (url, i) {
      return i === index ? value : url;
    });
    var willRedirect = appUrls.length === 0 && typeof index === 'undefined';
    _api__WEBPACK_IMPORTED_MODULE_4__["default"].update('api/user', {
      team: {
        app_urls: newUrls
      }
    }).then(function (user) {
      callback(newUrls); // Do not set the app urls when redirecting.
      // Doing so is bad UX as the screen will flash from the "add first url" dialog to
      // the "here are all the urls" dialog before the user is redirected away

      if (!willRedirect) {
        setUser(user);
      }

      if (!index) {
        setAddingNew(false);
      }
    });
  }

  function _deleteUrl(_ref3) {
    var index = _ref3.index;
    var newUrls = appUrls.filter(function (v, i) {
      return i !== index;
    });
    userUpdateRequest({
      team: {
        app_urls: newUrls
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: actionId ? 'Where do you want to edit this action?' : 'On which domain do you want to create an action?',
    footer: appUrls.length > 0 && !addingNew && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-outline-secondary",
      style: {
        flex: 1
      },
      onClick: function onClick() {
        return setAddingNew(true);
      }
    }, "+ Add Another URL")),
    onDismiss: dismissModal
  }, appUrls.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: newValue,
    onChange: function onChange(e) {
      return setNewValue(e.target.value);
    },
    autoFocus: true,
    style: {
      maxWidth: 400
    },
    type: "url",
    className: "form-control",
    name: "url",
    placeholder: _utils__WEBPACK_IMPORTED_MODULE_7__["defaultUrl"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return _saveUrl({
        value: newValue,
        callback: function callback() {
          window.location.href = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["appEditorUrl"])(actionId, newValue);
        }
      });
    },
    className: "btn btn-success",
    type: "button"
  }, "Save URL & go")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-group"
  }, appUrls.map(function (url, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UrlRow__WEBPACK_IMPORTED_MODULE_6__["UrlRow"], {
      key: "".concat(index, ",").concat(url),
      actionId: actionId,
      url: url,
      saveUrl: function saveUrl(value, callback) {
        return _saveUrl({
          index: index,
          value: value,
          callback: callback
        });
      },
      deleteUrl: function deleteUrl() {
        return _deleteUrl({
          index: index
        });
      }
    });
  }), addingNew ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UrlRow__WEBPACK_IMPORTED_MODULE_6__["UrlRow"], {
    actionId: actionId,
    url: _utils__WEBPACK_IMPORTED_MODULE_7__["defaultUrl"],
    saveUrl: function saveUrl(value, callback) {
      return _saveUrl({
        value: value,
        callback: callback
      });
    },
    deleteUrl: function deleteUrl() {
      return setAddingNew(false);
    }
  }) : null));
}

/***/ }),

/***/ "./frontend/src/lib/components/AppEditorLink/UrlRow.js":
/*!*************************************************************!*\
  !*** ./frontend/src/lib/components/AppEditorLink/UrlRow.js ***!
  \*************************************************************/
/*! exports provided: UrlRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRow", function() { return UrlRow; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./frontend/src/lib/components/AppEditorLink/utils.js");



function UrlRow(_ref) {
  var actionId = _ref.actionId,
      url = _ref.url,
      saveUrl = _ref.saveUrl,
      deleteUrl = _ref.deleteUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(url === _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(url || _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      savedValue = _useState4[0],
      setSavedValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(url || _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      editedValue = _useState6[0],
      setEditedValue = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item"
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "form",
    style: {
      display: 'flex',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: editedValue,
    onChange: function onChange(e) {
      return setEditedValue(e.target.value);
    },
    autoFocus: true,
    style: {
      flex: '1'
    },
    type: "url",
    className: "form-control",
    placeholder: _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginLeft: 5
    },
    onClick: function onClick() {
      if (editedValue === _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]) {
        deleteUrl();
      } else {
        saveUrl(editedValue, function () {
          setIsEditing(false);
          setSavedValue(editedValue);
        });
      }
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-outline-secondary",
    style: {
      marginLeft: 5
    },
    onClick: function onClick() {
      if (url === _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]) {
        deleteUrl();
      } else {
        setIsEditing(false);
        setEditedValue(savedValue || url || _utils__WEBPACK_IMPORTED_MODULE_2__["defaultUrl"]);
      }
    }
  }, "Cancel")) : typeof url === 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "add-new"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setIsEditing(true);
    }
  }, "+ Add Another URL")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      "float": 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "no-style",
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fi flaticon-edit text-primary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "no-style text-danger",
    onClick: deleteUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fi flaticon-basket"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["appEditorUrl"])(actionId, editedValue)
  }, editedValue)));
}

/***/ }),

/***/ "./frontend/src/lib/components/AppEditorLink/utils.js":
/*!************************************************************!*\
  !*** ./frontend/src/lib/components/AppEditorLink/utils.js ***!
  \************************************************************/
/*! exports provided: appEditorUrl, defaultUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEditorUrl", function() { return appEditorUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUrl", function() { return defaultUrl; });
function appEditorUrl(actionId, appUrl) {
  return '/api/user/redirect_to_site/' + (actionId ? '?actionId=' + actionId : '') + (appUrl ? "".concat(actionId ? '&' : '?', "appUrl=").concat(encodeURIComponent(appUrl)) : '');
}
var defaultUrl = 'https://';

/***/ }),

/***/ "./frontend/src/scenes/actions/Action.js":
/*!***********************************************!*\
  !*** ./frontend/src/scenes/actions/Action.js ***!
  \***********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_EventsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/EventsTable */ "./frontend/src/scenes/events/EventsTable.js");
/* harmony import */ var _ActionEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionEdit */ "./frontend/src/scenes/actions/ActionEdit.js");
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea-router */ "./node_modules/kea-router/lib/index.js");
/* harmony import */ var kea_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kea_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");
/* harmony import */ var scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scenes/events/eventsTableLogic */ "./frontend/src/scenes/events/eventsTableLogic.js");







function Action(_ref) {
  var id = _ref.id;
  var fixedFilters = {
    action_id: id
  };

  var _useActions = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useActions"])(kea_router__WEBPACK_IMPORTED_MODULE_4__["router"]),
      push = _useActions.push;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      user = _useValues.user;

  var _useActions2 = Object(kea__WEBPACK_IMPORTED_MODULE_3__["useActions"])(Object(scenes_events_eventsTableLogic__WEBPACK_IMPORTED_MODULE_6__["eventsTableLogic"])({
    fixedFilters: fixedFilters
  })),
      fetchEvents = _useActions2.fetchEvents;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, id ? 'Edit action' : 'New action'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionEdit__WEBPACK_IMPORTED_MODULE_2__["ActionEdit"], {
    apiURL: "",
    actionId: id,
    user: user,
    onSave: function onSave(action) {
      if (!id) {
        push("/action/".concat(action.id));
      }

      fetchEvents();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_EventsTable__WEBPACK_IMPORTED_MODULE_1__["EventsTable"], {
    fixedFilters: fixedFilters,
    filtersEnabled: false
  }));
}

/***/ }),

/***/ "./frontend/src/scenes/actions/ActionEdit.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/actions/ActionEdit.js ***!
  \***************************************************/
/*! exports provided: ActionEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEdit", function() { return ActionEdit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/utils */ "./frontend/src/lib/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_components_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/components/Link */ "./frontend/src/lib/components/Link.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _ActionStep__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ActionStep */ "./frontend/src/scenes/actions/ActionStep.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var ActionEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ActionEdit, _Component);

  var _super = _createSuper(ActionEdit);

  function ActionEdit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActionEdit);

    _this = _super.call(this, props);
    _this.state = {
      action: {
        name: '',
        steps: []
      },
      edited: false,
      focus: true,
      slackEnabled: props.user && props.user.team && props.user.team.slack_incoming_webhook
    };
    _this.params = '?include_count=1' + (props.temporaryToken ? '&temporary_token=' + props.temporaryToken : '');

    _this.fetchAction.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));

    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActionEdit, [{
    key: "fetchAction",
    value: function fetchAction() {
      var _this2 = this;

      if (this.props.actionId) {
        this.state.focus = false;
        return lib_api__WEBPACK_IMPORTED_MODULE_8__["default"].get(this.props.apiURL + 'api/action/' + this.props.actionId + '/' + this.params).then(function (action) {
          return _this2.setState({
            action: action
          });
        });
      } // If it's a new action, add an empty step


      this.state.action = {
        name: '',
        steps: [{
          isNew: Object(lib_utils__WEBPACK_IMPORTED_MODULE_9__["uuid"])()
        }]
      };
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event, createNew) {
      var _this3 = this;

      if (!event.target.form.checkValidity() || !this.state.edited) return;
      var isNew = !this.state.action.id;

      var save = function save(action) {
        _this3.setState({
          error: false,
          saved: true,
          action: _objectSpread(_objectSpread({}, _this3.state.action), {}, {
            id: action.id,
            count: action.count
          }),
          edited: false
        });

        if (_this3.props.onSave) _this3.props.onSave(action, isNew, createNew);
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_12__["toast"])('Action Saved', {
          autoClose: 3000,
          hideProgressBar: true
        });
      };

      var error = function error(detail) {
        if (detail.detail == 'action-exists') _this3.setState({
          saved: false,
          error: 'action-exists',
          error_id: detail.id
        });
      };

      var steps = this.state.action.steps.map(function (step) {
        if (step.event == '$pageview') step.selection = ['url', 'url_matching'];
        if (step.event != '$pageview' && step.event != '$autocapture') step.selection = [];
        if (!step.selection) return step;
        var data = {};
        Object.keys(step).map(function (key) {
          data[key] = key == 'id' || key == 'event' || step.selection.indexOf(key) > -1 ? step[key] : null;
        });
        return data;
      });

      if (this.state.action.id) {
        return lib_api__WEBPACK_IMPORTED_MODULE_8__["default"].update(this.props.apiURL + 'api/action/' + this.state.action.id + '/' + this.params, {
          name: this.state.action.name,
          post_to_slack: this.state.action.post_to_slack,
          steps: steps
        }).then(save)["catch"](error);
      }

      lib_api__WEBPACK_IMPORTED_MODULE_8__["default"].create(this.props.apiURL + 'api/action/' + this.params, {
        name: this.state.action.name,
        post_to_slack: this.state.action.post_to_slack,
        steps: steps
      }).then(save)["catch"](error);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var action = this.state.action;
      var _this$props = this.props,
          isEditor = _this$props.isEditor,
          simmer = _this$props.simmer;
      var addGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "btn btn-outline-success btn-sm",
        onClick: function onClick() {
          action.steps.push({
            isNew: Object(lib_utils__WEBPACK_IMPORTED_MODULE_9__["uuid"])()
          });

          _this4.setState({
            action: action
          });
        }
      }, "Add another match group");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: isEditor ? '' : 'card',
        style: {
          marginTop: isEditor ? 8 : ''
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: isEditor ? '' : 'card-body',
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        autoFocus: this.state.focus,
        required: true,
        className: "form-control",
        placeholder: "For example: user signed up",
        value: action.name,
        onChange: function onChange(e) {
          return _this4.setState({
            action: _objectSpread(_objectSpread({}, action), {}, {
              name: e.target.value
            }),
            edited: e.target.value ? true : false
          });
        }
      }), action.count > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
        className: "text-muted"
      }, "Matches ", action.count, " events")), !isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), action.steps.map(function (step, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          key: index
        }, index > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: 13,
            letterSpacing: 1,
            opacity: 0.7,
            margin: 8
          }
        }, "OR") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ActionStep__WEBPACK_IMPORTED_MODULE_13__["ActionStep"], {
          key: step.id || step.isNew,
          step: step,
          isEditor: isEditor,
          actionId: action.id,
          simmer: simmer,
          onDelete: function onDelete() {
            action.steps = action.steps.filter(function (s) {
              return s.id != step.id;
            });

            _this4.setState({
              action: action
            });
          },
          onChange: function onChange(newStep) {
            action.steps = action.steps.map(function (s) {
              return step.id && s.id == step.id || step.isNew && s.isNew === step.isNew ? _objectSpread({
                id: step.id,
                isNew: step.isNew
              }, newStep) : s;
            });

            _this4.setState({
              action: action,
              edited: true
            });
          }
        }));
      }), !isEditor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: 20,
          marginBottom: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: this.state.slackEnabled ? '' : 'disabled',
        style: {
          marginRight: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        onChange: function onChange(e) {
          _this4.setState({
            action: _objectSpread(_objectSpread({}, action), {}, {
              post_to_slack: e.target.checked
            }),
            edited: true
          });
        },
        checked: !!action.post_to_slack,
        disabled: !this.state.slackEnabled
      }), "\xA0Post to Slack when this action is triggered."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(lib_components_Link__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: "/setup#slack"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", null, "Configure"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text-danger"
      }, "Action with this name already exists.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: this.props.apiURL + 'action/' + this.state.error_id
      }, "Click here to edit.")), isEditor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: 20
        }
      }, addGroup) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: isEditor ? 'btn-group save-buttons' : ''
      }, !isEditor ? addGroup : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        disabled: !this.state.edited,
        onClick: function onClick(e) {
          return _this4.onSubmit(e);
        },
        className: this.state.edited ? 'btn-success btn btn-sm float-right' : 'btn-secondary btn btn-sm float-right'
      }, "Save action"), this.props.isEditor && this.props.showNewActionButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick(e) {
          return _this4.onSubmit(e, true);
        },
        className: "btn btn-secondary btn-sm float-right"
      }, "Save & new action"))));
    }
  }]);

  return ActionEdit;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
ActionEdit.propTypes = {
  isEditor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  simmer: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ }),

/***/ "./frontend/src/scenes/actions/ActionStep.js":
/*!***************************************************!*\
  !*** ./frontend/src/scenes/actions/ActionStep.js ***!
  \***************************************************/
/*! exports provided: ActionStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStep", function() { return ActionStep; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _EventName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventName */ "./frontend/src/scenes/actions/EventName.js");
/* harmony import */ var _lib_components_AppEditorLink_AppEditorLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/components/AppEditorLink/AppEditorLink */ "./frontend/src/lib/components/AppEditorLink/AppEditorLink.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var getSafeText = function getSafeText(el) {
  if (!el.childNodes || !el.childNodes.length) return;
  var elText = '';
  el.childNodes.forEach(function (child) {
    if (child.nodeType !== 3 || !child.textContent) return;
    elText += child.textContent.trim().replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ') // normalize whitespace
    .substring(0, 255);
  });
  return elText;
};

var ActionStep = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ActionStep, _Component);

  var _super = _createSuper(ActionStep);

  function ActionStep(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActionStep);

    _this = _super.call(this, props);
    _this.state = {
      step: props.step,
      selection: Object.keys(props.step).filter(function (key) {
        return key != 'id' && key != 'isNew' && props.step[key];
      })
    };
    _this.onMouseOver = _this.onMouseOver.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.Option = _this.Option.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.sendStep = _this.sendStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.AutocaptureFields = _this.AutocaptureFields.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.TypeSwitcher = _this.TypeSwitcher.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.URLMatching = _this.URLMatching.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.stop = _this.stop.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.box = document.createElement('div');
    document.body.appendChild(_this.box);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActionStep, [{
    key: "drawBox",
    value: function drawBox(element) {
      var rect = element.getBoundingClientRect();
      this.box.style.display = 'block';
      this.box.style.position = 'absolute';
      this.box.style.top = parseInt(rect.top + window.pageYOffset) + 'px';
      this.box.style.left = parseInt(rect.left + window.pageXOffset) + 'px';
      this.box.style.width = parseInt(rect.right - rect.left) + 'px';
      this.box.style.height = parseInt(rect.bottom - rect.top) + 'px';
      this.box.style.background = '#007bff';
      this.box.style.opacity = '0.5';
      this.box.style.zIndex = '9999999999';
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(event) {
      var _this2 = this;

      var el = event.currentTarget;
      this.drawBox(el);
      var query = this.props.simmer(el); // Turn tags into lower cases

      query = query.replace(/(^[A-Z]+| [A-Z]+)/g, function (d) {
        return d.toLowerCase();
      });
      var tagName = el.tagName.toLowerCase();
      var selection = ['selector'];
      if (tagName == 'a') selection = ['href', 'selector'];else if (tagName == 'button') selection = ['text', 'selector'];else if (el.getAttribute('name')) selection = ['name', 'selector'];

      var step = _objectSpread(_objectSpread({}, this.props.step), {}, {
        event: '$autocapture',
        tag_name: tagName,
        href: el.getAttribute('href') || '',
        name: el.getAttribute('name') || '',
        text: getSafeText(el) || '',
        selector: query || '',
        url: window.location.protocol + '//' + window.location.host + window.location.pathname
      });

      this.setState({
        element: el,
        selection: selection
      }, function () {
        return _this2.sendStep(step);
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      // stop selecting if esc key was pressed
      if (event.keyCode == 27) this.stop();
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      document.querySelectorAll('a, button, input, select, textarea, label').forEach(function (element) {
        element.addEventListener('mouseover', _this3.onMouseOver, {
          capture: true
        });
      });
      document.addEventListener('keydown', this.onKeyDown);
      document.body.style.transition = '0.7s box-shadow'; // document.body.style.boxShadow = 'inset 0 0px 13px -2px #dc3545';

      document.body.style.boxShadow = 'inset 0 0px 30px -5px #007bff';
      this.box.addEventListener('click', this.stop);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this4 = this;

      this.box.style.display = 'none';
      document.body.style.boxShadow = 'none';
      document.querySelectorAll('a, button, input, select, textarea, label').forEach(function (element) {
        element.removeEventListener('mouseover', _this4.onMouseOver, {
          capture: true
        });
      });
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "sendStep",
    value: function sendStep(step) {
      step.selection = this.state.selection;
      this.props.onChange(step);
    }
  }, {
    key: "Option",
    value: function Option(props) {
      var _this5 = this;

      var onChange = function onChange(e) {
        _this5.props.step[props.item] = e.target.value;

        if (e.target.value && _this5.state.selection.indexOf(props.item) === -1) {
          _this5.setState({
            selection: _this5.state.selection.concat([props.item])
          }, function () {
            return _this5.sendStep(_this5.props.step);
          });
        } else if (!e.target.value && _this5.state.selection.indexOf(props.item) > -1) {
          _this5.setState({
            selection: _this5.state.selection.filter(function (i) {
              return i !== props.item;
            })
          }, function () {
            return _this5.sendStep(_this5.props.step);
          });
        } else {
          _this5.sendStep(_this5.props.step);
        }
      };

      var selectorError, matches;

      try {
        matches = document.querySelectorAll(props.selector).length;
      } catch (_unused) {
        selectorError = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: 'form-group ' + (this.state.selection.indexOf(props.item) > -1 && 'selected')
      }, props.selector && this.props.isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
        className: 'form-text float-right ' + (selectorError ? 'text-danger' : 'text-muted')
      }, selectorError ? 'Invalid selector' : "Matches ".concat(matches, " elements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        name: "selection",
        checked: this.state.selection.indexOf(props.item) > -1,
        value: props.item,
        onChange: function onChange(e) {
          if (e.target.checked) {
            _this5.state.selection.push(props.item);
          } else {
            _this5.state.selection = _this5.state.selection.filter(function (i) {
              return i !== props.item;
            });
          }

          _this5.setState({
            selection: _this5.state.selection
          }, function () {
            return _this5.sendStep(_this5.props.step);
          });
        }
      }), ' ', props.label, " ", props.extra_options), props.item == 'selector' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        className: "form-control",
        onChange: onChange,
        value: this.props.step[props.item] || ''
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        onChange: onChange,
        value: this.props.step[props.item] || ''
      }));
    }
  }, {
    key: "TypeSwitcher",
    value: function TypeSwitcher() {
      var _this6 = this;

      var _this$props = this.props,
          step = _this$props.step,
          isEditor = _this$props.isEditor;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this6.setState({
            selection: Object.keys(step).filter(function (key) {
              return key != 'id' && key != 'isNew' && step[key];
            })
          }, function () {
            return _this6.sendStep(_objectSpread(_objectSpread({}, step), {}, {
              event: '$autocapture'
            }));
          });
        },
        className: 'btn ' + (step.event == '$autocapture' ? 'btn-secondary' : 'btn-light')
      }, "Frontend element"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this6.sendStep(_objectSpread(_objectSpread({}, step), {}, {
            event: ''
          }));
        },
        className: 'btn ' + (typeof step.event !== 'undefined' && step.event != '$autocapture' && step.event != '$pageview' ? 'btn-secondary' : 'btn-light')
      }, "Custom event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          _this6.setState({
            selection: ['url']
          }, function () {
            return _this6.sendStep(_objectSpread(_objectSpread({}, step), {}, {
              event: '$pageview',
              url: isEditor ? window.location.protocol + '//' + window.location.host + window.location.pathname : step.url
            }));
          });
        },
        className: 'btn ' + (step.event == '$pageview' ? 'btn-secondary' : 'btn-light')
      }, "Page view")), step.event != null && step.event != '$autocapture' && step.event != '$pageview' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: '2rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Event name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EventName__WEBPACK_IMPORTED_MODULE_8__["EventName"], {
        value: step.event,
        onChange: function onChange(item) {
          return _this6.sendStep(_objectSpread(_objectSpread({}, step), {}, {
            event: item.value
          }));
        }
      })));
    }
  }, {
    key: "AutocaptureFields",
    value: function AutocaptureFields(_ref) {
      var step = _ref.step,
          isEditor = _ref.isEditor,
          actionId = _ref.actionId;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, !isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_components_AppEditorLink_AppEditorLink__WEBPACK_IMPORTED_MODULE_9__["AppEditorLink"], {
        actionId: actionId,
        style: {
          margin: '1rem 0'
        },
        className: "btn btn-sm btn-light"
      }, "Select element on site ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fi flaticon-export"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://docs.posthog.com/#/features/actions",
        target: "_blank",
        style: {
          marginLeft: 8
        }
      }, "See documentation."), ' '), (isEditor || step.selector || step.href || step.text) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.Option, {
        item: "href",
        label: "Link href",
        selector: this.state.element && 'a[href="' + this.state.element.getAttribute('href') + '"]'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.Option, {
        item: "text",
        label: "Text"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.Option, {
        item: "selector",
        label: "Selector",
        selector: step.selector
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.Option, {
        item: "url",
        extra_options: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.URLMatching, {
          step: step,
          isEditor: isEditor
        }),
        label: "URL"
      })));
    }
  }, {
    key: "URLMatching",
    value: function URLMatching(_ref2) {
      var _this7 = this;

      var step = _ref2.step,
          isEditor = _ref2.isEditor;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn-group",
        style: {
          margin: isEditor ? '4px 0 0 8px' : '0 0 0 8px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return _this7.sendStep(_objectSpread(_objectSpread({}, step), {}, {
            url_matching: 'contains'
          }));
        },
        type: "button",
        className: 'btn btn-sm ' + (!step.url_matching || step.url_matching == 'contains' ? 'btn-secondary' : 'btn-light')
      }, "contains"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return _this7.sendStep(_objectSpread(_objectSpread({}, step), {}, {
            url_matching: 'exact'
          }));
        },
        type: "button",
        className: 'btn btn-sm ' + (step.url_matching == 'exact' ? 'btn-secondary' : 'btn-light')
      }, "exactly matches"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$props2 = this.props,
          step = _this$props2.step,
          isEditor = _this$props2.isEditor,
          actionId = _this$props2.actionId;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: isEditor ? '' : 'card',
        style: {
          marginBottom: 0,
          background: isEditor ? 'rgba(0,0,0,0.05)' : ''
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: isEditor ? '' : 'card-body'
      }, (!isEditor || step.event === '$autocapture' || !step.event) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        style: {
          margin: isEditor ? '12px 12px 0px 0px' : '-3px 0 0 0'
        },
        type: "button",
        className: "close pull-right",
        "aria-label": "Close",
        onClick: this.props.onDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")), !isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.TypeSwitcher, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: step.event === '$pageview' && !isEditor ? 20 : 8
        }
      }, isEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm btn-secondary",
        style: {
          margin: '10px 0px 10px 12px'
        },
        onClick: function onClick() {
          return _this8.start();
        }
      }, "Inspect element"), step.event === '$autocapture' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.AutocaptureFields, {
        step: step,
        isEditor: isEditor,
        actionId: actionId
      }), step.event === '$pageview' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.Option, {
        item: "url",
        extra_options: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(this.URLMatching, {
          step: step,
          isEditor: isEditor
        }),
        label: "URL"
      }), (!step.url_matching || step.url_matching == 'contains') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
        style: {
          display: 'block',
          marginTop: -12
        }
      }, "Use '%' for wildcard, for example: /user/%/edit")))));
    }
  }]);

  return ActionStep;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
ActionStep.propTypes = {
  isEditor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  step: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  simmer: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ }),

/***/ "./frontend/src/scenes/actions/EventName.js":
/*!**************************************************!*\
  !*** ./frontend/src/scenes/actions/EventName.js ***!
  \**************************************************/
/*! exports provided: EventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventName", function() { return EventName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./frontend/src/lib/api.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kea */ "./node_modules/kea/lib/index.esm.js");
/* harmony import */ var scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scenes/userLogic */ "./frontend/src/scenes/userLogic.js");






function EventName(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _useValues = Object(kea__WEBPACK_IMPORTED_MODULE_4__["useValues"])(scenes_userLogic__WEBPACK_IMPORTED_MODULE_5__["userLogic"]),
      eventNamesGrouped = _useValues.eventNamesGrouped;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: eventNamesGrouped,
    isSearchable: true,
    isClearable: true,
    onChange: onChange,
    disabled: eventNamesGrouped[0].options.length === 0,
    value: value ? {
      label: value,
      value: value
    } : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), eventNamesGrouped[0].options.length === 0 && "You haven't sent any custom events.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://docs.posthog.com/#/integrations",
    target: "_blank"
  }, "See documentation"), ' ', "on how to send custom events in lots of languages.");
}

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvQXBwRWRpdG9yTGluay9BcHBFZGl0b3JMaW5rLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9BcHBFZGl0b3JMaW5rL0Nob29zZVVSTE1vZGFsLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvY29tcG9uZW50cy9BcHBFZGl0b3JMaW5rL1VybFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbGliL2NvbXBvbmVudHMvQXBwRWRpdG9yTGluay91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2NlbmVzL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvYWN0aW9ucy9BY3Rpb25FZGl0LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvYWN0aW9ucy9BY3Rpb25TdGVwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zY2VuZXMvYWN0aW9ucy9FdmVudE5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9ldmVudHMvRXZlbnRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9ldmVudHMvRXZlbnRzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NjZW5lcy9ldmVudHMvTm9JdGVtcy5qcyJdLCJuYW1lcyI6WyJBcHBFZGl0b3JMaW5rIiwiYWN0aW9uSWQiLCJzdHlsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJ1c2VWYWx1ZXMiLCJ1c2VyTG9naWMiLCJ1c2VyIiwiYXBwVXJscyIsInRlYW0iLCJhcHBfdXJscyIsImFwcEVkaXRvclVybCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkNob29zZVVSTE1vZGFsIiwiZGlzbWlzc01vZGFsIiwidXNlQWN0aW9ucyIsInNldFVzZXIiLCJsb2FkVXNlciIsInVzZXJVcGRhdGVSZXF1ZXN0IiwiZGVmYXVsdFVybCIsIm5ld1ZhbHVlIiwic2V0TmV3VmFsdWUiLCJhZGRpbmdOZXciLCJzZXRBZGRpbmdOZXciLCJ1c2VFZmZlY3QiLCJzYXZlVXJsIiwiaW5kZXgiLCJ2YWx1ZSIsImNhbGxiYWNrIiwibmV3VXJscyIsImNvbmNhdCIsIm1hcCIsInVybCIsImkiLCJ3aWxsUmVkaXJlY3QiLCJsZW5ndGgiLCJhcGkiLCJ1cGRhdGUiLCJ0aGVuIiwiZGVsZXRlVXJsIiwiZmlsdGVyIiwidiIsImZsZXgiLCJ0YXJnZXQiLCJtYXhXaWR0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIlVybFJvdyIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInNhdmVkVmFsdWUiLCJzZXRTYXZlZFZhbHVlIiwiZWRpdGVkVmFsdWUiLCJzZXRFZGl0ZWRWYWx1ZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJhcHBVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJBY3Rpb24iLCJpZCIsImZpeGVkRmlsdGVycyIsImFjdGlvbl9pZCIsInJvdXRlciIsInB1c2giLCJldmVudHNUYWJsZUxvZ2ljIiwiZmV0Y2hFdmVudHMiLCJhY3Rpb24iLCJBY3Rpb25FZGl0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJzdGVwcyIsImVkaXRlZCIsImZvY3VzIiwic2xhY2tFbmFibGVkIiwic2xhY2tfaW5jb21pbmdfd2ViaG9vayIsInBhcmFtcyIsInRlbXBvcmFyeVRva2VuIiwiZmV0Y2hBY3Rpb24iLCJjYWxsIiwib25TdWJtaXQiLCJiaW5kIiwiZ2V0IiwiYXBpVVJMIiwic2V0U3RhdGUiLCJpc05ldyIsInV1aWQiLCJldmVudCIsImNyZWF0ZU5ldyIsImZvcm0iLCJjaGVja1ZhbGlkaXR5Iiwic2F2ZSIsImVycm9yIiwic2F2ZWQiLCJjb3VudCIsIm9uU2F2ZSIsInRvYXN0IiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiZGV0YWlsIiwiZXJyb3JfaWQiLCJzdGVwIiwic2VsZWN0aW9uIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpbmRleE9mIiwicG9zdF90b19zbGFjayIsImNyZWF0ZSIsImlzRWRpdG9yIiwic2ltbWVyIiwiYWRkR3JvdXAiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJvcGFjaXR5IiwibWFyZ2luIiwicyIsIm5ld1N0ZXAiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNoZWNrZWQiLCJzaG93TmV3QWN0aW9uQnV0dG9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJnZXRTYWZlVGV4dCIsImVsIiwiY2hpbGROb2RlcyIsImVsVGV4dCIsImZvckVhY2giLCJjaGlsZCIsIm5vZGVUeXBlIiwidGV4dENvbnRlbnQiLCJ0cmltIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIkFjdGlvblN0ZXAiLCJvbk1vdXNlT3ZlciIsIm9uS2V5RG93biIsIk9wdGlvbiIsInNlbmRTdGVwIiwiQXV0b2NhcHR1cmVGaWVsZHMiLCJUeXBlU3dpdGNoZXIiLCJVUkxNYXRjaGluZyIsInN0b3AiLCJib3giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvc2l0aW9uIiwidG9wIiwicGFyc2VJbnQiLCJwYWdlWU9mZnNldCIsImxlZnQiLCJwYWdlWE9mZnNldCIsInJpZ2h0IiwiaGVpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkcmF3Qm94IiwicXVlcnkiLCJkIiwidG9Mb3dlckNhc2UiLCJ0YWdOYW1lIiwiZ2V0QXR0cmlidXRlIiwidGFnX25hbWUiLCJ0ZXh0Iiwic2VsZWN0b3IiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRobmFtZSIsImtleUNvZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlIiwiaXRlbSIsInNlbGVjdG9yRXJyb3IiLCJtYXRjaGVzIiwibGFiZWwiLCJleHRyYV9vcHRpb25zIiwidXJsX21hdGNoaW5nIiwib25EZWxldGUiLCJzdGFydCIsIm9iamVjdCIsIkV2ZW50TmFtZSIsImV2ZW50TmFtZXNHcm91cGVkIiwib3B0aW9ucyIsImV2ZW50TmFtZU1hcCIsInByb3BlcnRpZXMiLCIkZXZlbnRfdHlwZSIsIkV2ZW50Um93IiwiaGlnaGxpZ2h0RXZlbnRzIiwic2VsZWN0ZWRFdmVudCIsInNlYXJjaCIsInNldFNlbGVjdGVkRXZlbnQiLCJmaWx0ZXJzRW5hYmxlZCIsInNob3dMaW5rVG9QZXJzb24iLCJlbGVtZW50cyIsImRpc3RpbmN0X2lkIiwicGVyc29uIiwicGFyYW1SZXF1ZXN0IiwicGFyYW0iLCJtb21lbnQiLCJ0aW1lc3RhbXAiLCJmcm9tTm93IiwiRXZlbnRzVGFibGUiLCJsb2dpYyIsImV2ZW50cyIsImlzTG9hZGluZyIsImhhc05leHQiLCJpc0xvYWRpbmdOZXh0IiwibmV3RXZlbnRzIiwidXBkYXRlUHJvcGVydHkiLCJmZXRjaE5leHRFdmVudHMiLCJmbGlwU29ydCIsInByZXBlbmROZXdFdmVudHMiLCJwZXJzb25faWQiLCJpc1NhbWUiLCJmb3JtYXQiLCJ2aXNpYmlsaXR5IiwiTm9JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGFBQVQsT0FBaUU7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEs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ZUF5REk7QUFDSSxTQUFLLEVBQUU7QUFDSG1KLGdCQUFVLEVBQUVWLE9BQU8sSUFBSUMsYUFBWCxHQUEyQixTQUEzQixHQUF1QyxRQURoRDtBQUVIM0csWUFBTSxFQUFFLGdCQUZMO0FBR0hKLGVBQVMsRUFBRTtBQUhSO0FBRFgsa0JBT0k7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRWtIO0FBQTdDLEtBQ0tILGFBQWEsZ0JBQUcsc0hBQUgsR0FBYyxrQkFEaEMsQ0FQSixDQXpESixlQW9FSTtBQUFLLFNBQUssRUFBRTtBQUFFaEgsZUFBUyxFQUFFO0FBQWI7QUFBWixJQXBFSixDQURKO0FBd0VILEM7Ozs7Ozs7Ozs7OztBQ3pHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVMwSCxPQUFULEdBQW1CO0FBQ3RCLHNCQUNJLG9GQUNJO0FBQUksV0FBTyxFQUFFO0FBQWIsOEVBQzBFLEdBRDFFLGVBRUksMkRBQUMsd0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxnREFGSixDQURKLENBREo7QUFRSCxDIiwiZmlsZSI6ImFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuXG5pbXBvcnQgeyBDaG9vc2VVUkxNb2RhbCB9IGZyb20gJy4vQ2hvb3NlVVJMTW9kYWwnXG5pbXBvcnQgeyBhcHBFZGl0b3JVcmwgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgdXNlckxvZ2ljIH0gZnJvbSAnLi4vLi4vLi4vc2NlbmVzL3VzZXJMb2dpYydcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcEVkaXRvckxpbmsoeyBhY3Rpb25JZCwgc3R5bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZVZhbHVlcyh1c2VyTG9naWMpXG4gICAgY29uc3QgYXBwVXJscyA9IHVzZXIudGVhbS5hcHBfdXJsc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YXBwRWRpdG9yVXJsKGFjdGlvbklkLCBhcHBVcmxzICYmIGFwcFVybHNbMF0pfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge21vZGFsT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPENob29zZVVSTE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbklkPXthY3Rpb25JZH1cbiAgICAgICAgICAgICAgICAgICAgZGlzbWlzc01vZGFsPXsoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWN0aW9ucywgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9Nb2RhbCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpJ1xuaW1wb3J0IHsgdXNlckxvZ2ljIH0gZnJvbSAnLi4vLi4vLi4vc2NlbmVzL3VzZXJMb2dpYydcbmltcG9ydCB7IFVybFJvdyB9IGZyb20gJy4vVXJsUm93J1xuaW1wb3J0IHsgYXBwRWRpdG9yVXJsLCBkZWZhdWx0VXJsIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIENob29zZVVSTE1vZGFsKHsgYWN0aW9uSWQsIGRpc21pc3NNb2RhbCB9KSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB1c2VWYWx1ZXModXNlckxvZ2ljKVxuICAgIGNvbnN0IHsgc2V0VXNlciwgbG9hZFVzZXIsIHVzZXJVcGRhdGVSZXF1ZXN0IH0gPSB1c2VBY3Rpb25zKHVzZXJMb2dpYylcbiAgICBjb25zdCBhcHBVcmxzID0gdXNlci50ZWFtLmFwcF91cmxzXG5cbiAgICBjb25zdCBbbmV3VmFsdWUsIHNldE5ld1ZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRVcmwpXG4gICAgY29uc3QgW2FkZGluZ05ldywgc2V0QWRkaW5nTmV3XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgLy8gV2UgcnVuIHRoaXMgZWZmZWN0IHNvIHRoYXQgdGhlIFVSTHMgYXJlIHRoZSBsYXRlc3Qgb25lcyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgICAvLyBPdGhlcndpc2UgaWYgeW91IGVkaXQvYWRkIGFuIFVSTCwgY2xpY2sgdG8gaXQgYW5kIHRoZW4gY2xpY2sgYmFjaywgeW91IHdpbGxcbiAgICAvLyBzZWUgc3RhdGUgdXJscyAoaS5lLiB3aXRob3V0IHRoZSBvbmUgeW91IGp1c3QgYWRkZWQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZFVzZXIoKVxuICAgIH0sIFtdKSAvLyBydW4ganVzdCBvbmNlXG5cbiAgICBmdW5jdGlvbiBzYXZlVXJsKHsgaW5kZXgsIHZhbHVlLCBjYWxsYmFjayB9KSB7XG4gICAgICAgIGNvbnN0IG5ld1VybHMgPVxuICAgICAgICAgICAgdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgID8gYXBwVXJscy5jb25jYXQoW3ZhbHVlXSlcbiAgICAgICAgICAgICAgICA6IGFwcFVybHMubWFwKCh1cmwsIGkpID0+IChpID09PSBpbmRleCA/IHZhbHVlIDogdXJsKSlcblxuICAgICAgICBjb25zdCB3aWxsUmVkaXJlY3QgPVxuICAgICAgICAgICAgYXBwVXJscy5sZW5ndGggPT09IDAgJiYgdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJ1xuXG4gICAgICAgIGFwaS51cGRhdGUoJ2FwaS91c2VyJywgeyB0ZWFtOiB7IGFwcF91cmxzOiBuZXdVcmxzIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ld1VybHMpXG5cbiAgICAgICAgICAgIC8vIERvIG5vdCBzZXQgdGhlIGFwcCB1cmxzIHdoZW4gcmVkaXJlY3RpbmcuXG4gICAgICAgICAgICAvLyBEb2luZyBzbyBpcyBiYWQgVVggYXMgdGhlIHNjcmVlbiB3aWxsIGZsYXNoIGZyb20gdGhlIFwiYWRkIGZpcnN0IHVybFwiIGRpYWxvZyB0b1xuICAgICAgICAgICAgLy8gdGhlIFwiaGVyZSBhcmUgYWxsIHRoZSB1cmxzXCIgZGlhbG9nIGJlZm9yZSB0aGUgdXNlciBpcyByZWRpcmVjdGVkIGF3YXlcbiAgICAgICAgICAgIGlmICghd2lsbFJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcih1c2VyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICAgICAgICAgIHNldEFkZGluZ05ldyhmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVcmwoeyBpbmRleCB9KSB7XG4gICAgICAgIGNvbnN0IG5ld1VybHMgPSBhcHBVcmxzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgICAgIHVzZXJVcGRhdGVSZXF1ZXN0KHsgdGVhbTogeyBhcHBfdXJsczogbmV3VXJscyB9IH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgYWN0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgPyAnV2hlcmUgZG8geW91IHdhbnQgdG8gZWRpdCB0aGlzIGFjdGlvbj8nXG4gICAgICAgICAgICAgICAgICAgIDogJ09uIHdoaWNoIGRvbWFpbiBkbyB5b3Ugd2FudCB0byBjcmVhdGUgYW4gYWN0aW9uPydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgYXBwVXJscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgIWFkZGluZ05ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkaW5nTmV3KHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgQWRkIEFub3RoZXIgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25EaXNtaXNzPXtkaXNtaXNzTW9kYWx9XG4gICAgICAgID5cbiAgICAgICAgICAgIHthcHBVcmxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5ld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDQwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdFVybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVVybCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXBwRWRpdG9yVXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBVUkwgJiBnb1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAge2FwcFVybHMubWFwKCh1cmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXJsUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpbmRleH0sJHt1cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JZD17YWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVVybD17KHZhbHVlLCBjYWxsYmFjaykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVVybCh7IGluZGV4LCB2YWx1ZSwgY2FsbGJhY2sgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXJsPXsoKSA9PiBkZWxldGVVcmwoeyBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7YWRkaW5nTmV3ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFVybFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbklkPXthY3Rpb25JZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2RlZmF1bHRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVVybD17KHZhbHVlLCBjYWxsYmFjaykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVVybCh7IHZhbHVlLCBjYWxsYmFjayB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcmw9eygpID0+IHNldEFkZGluZ05ldyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgYXBwRWRpdG9yVXJsLCBkZWZhdWx0VXJsIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIFVybFJvdyh7IGFjdGlvbklkLCB1cmwsIHNhdmVVcmwsIGRlbGV0ZVVybCB9KSB7XG4gICAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKHVybCA9PT0gZGVmYXVsdFVybClcbiAgICBjb25zdCBbc2F2ZWRWYWx1ZSwgc2V0U2F2ZWRWYWx1ZV0gPSB1c2VTdGF0ZSh1cmwgfHwgZGVmYXVsdFVybClcbiAgICBjb25zdCBbZWRpdGVkVmFsdWUsIHNldEVkaXRlZFZhbHVlXSA9IHVzZVN0YXRlKHVybCB8fCBkZWZhdWx0VXJsKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvcm1cIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RWRpdGVkVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAnMScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0VXJsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGl0ZWRWYWx1ZSA9PT0gZGVmYXVsdFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcmwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVVcmwoZWRpdGVkVmFsdWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzRWRpdGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVkVmFsdWUoZWRpdGVkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gZGVmYXVsdFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcmwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzRWRpdGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdGVkVmFsdWUoc2F2ZWRWYWx1ZSB8fCB1cmwgfHwgZGVmYXVsdFVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogdHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJhZGQtbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICsgQWRkIEFub3RoZXIgVVJMXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1lZGl0IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1zdHlsZSB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpIGZsYXRpY29uLWJhc2tldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FwcEVkaXRvclVybChhY3Rpb25JZCwgZWRpdGVkVmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0ZWRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICApXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwRWRpdG9yVXJsKGFjdGlvbklkLCBhcHBVcmwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAnL2FwaS91c2VyL3JlZGlyZWN0X3RvX3NpdGUvJyArXG4gICAgICAgIChhY3Rpb25JZCA/ICc/YWN0aW9uSWQ9JyArIGFjdGlvbklkIDogJycpICtcbiAgICAgICAgKGFwcFVybFxuICAgICAgICAgICAgPyBgJHthY3Rpb25JZCA/ICcmJyA6ICc/J31hcHBVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoYXBwVXJsKX1gXG4gICAgICAgICAgICA6ICcnKVxuICAgIClcbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0VXJsID0gJ2h0dHBzOi8vJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXZlbnRzVGFibGUgfSBmcm9tICcuLi9ldmVudHMvRXZlbnRzVGFibGUnXG5pbXBvcnQgeyBBY3Rpb25FZGl0IH0gZnJvbSAnLi9BY3Rpb25FZGl0J1xuaW1wb3J0IHsgdXNlQWN0aW9ucywgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAna2VhLXJvdXRlcidcbmltcG9ydCB7IHVzZXJMb2dpYyB9IGZyb20gJ3NjZW5lcy91c2VyTG9naWMnXG5pbXBvcnQgeyBldmVudHNUYWJsZUxvZ2ljIH0gZnJvbSAnc2NlbmVzL2V2ZW50cy9ldmVudHNUYWJsZUxvZ2ljJ1xuXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uKHsgaWQgfSkge1xuICAgIGNvbnN0IGZpeGVkRmlsdGVycyA9IHsgYWN0aW9uX2lkOiBpZCB9XG5cbiAgICBjb25zdCB7IHB1c2ggfSA9IHVzZUFjdGlvbnMocm91dGVyKVxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcbiAgICBjb25zdCB7IGZldGNoRXZlbnRzIH0gPSB1c2VBY3Rpb25zKGV2ZW50c1RhYmxlTG9naWMoeyBmaXhlZEZpbHRlcnMgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntpZCA/ICdFZGl0IGFjdGlvbicgOiAnTmV3IGFjdGlvbid9PC9oMT5cbiAgICAgICAgICAgIDxBY3Rpb25FZGl0XG4gICAgICAgICAgICAgICAgYXBpVVJMPVwiXCJcbiAgICAgICAgICAgICAgICBhY3Rpb25JZD17aWR9XG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICBvblNhdmU9e2FjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2goYC9hY3Rpb24vJHthY3Rpb24uaWR9YClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmZXRjaEV2ZW50cygpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8aDI+RXZlbnRzPC9oMj5cbiAgICAgICAgICAgIDxFdmVudHNUYWJsZSBmaXhlZEZpbHRlcnM9e2ZpeGVkRmlsdGVyc30gZmlsdGVyc0VuYWJsZWQ9e2ZhbHNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHsgQWN0aW9uU3RlcCB9IGZyb20gJy4vQWN0aW9uU3RlcCdcblxuZXhwb3J0IGNsYXNzIEFjdGlvbkVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHsgbmFtZTogJycsIHN0ZXBzOiBbXSB9LFxuICAgICAgICAgICAgZWRpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgc2xhY2tFbmFibGVkOiBwcm9wcy51c2VyICYmIHByb3BzLnVzZXIudGVhbSAmJiBwcm9wcy51c2VyLnRlYW0uc2xhY2tfaW5jb21pbmdfd2ViaG9vayxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtcyA9ICc/aW5jbHVkZV9jb3VudD0xJyArIChwcm9wcy50ZW1wb3JhcnlUb2tlbiA/ICcmdGVtcG9yYXJ5X3Rva2VuPScgKyBwcm9wcy50ZW1wb3JhcnlUb2tlbiA6ICcnKVxuICAgICAgICB0aGlzLmZldGNoQWN0aW9uLmNhbGwodGhpcylcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cbiAgICBmZXRjaEFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXMgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAgICAgICAgIC5nZXQodGhpcy5wcm9wcy5hcGlVUkwgKyAnYXBpL2FjdGlvbi8nICsgdGhpcy5wcm9wcy5hY3Rpb25JZCArICcvJyArIHRoaXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKGFjdGlvbiA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aW9uIH0pKVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYSBuZXcgYWN0aW9uLCBhZGQgYW4gZW1wdHkgc3RlcFxuICAgICAgICB0aGlzLnN0YXRlLmFjdGlvbiA9IHsgbmFtZTogJycsIHN0ZXBzOiBbeyBpc05ldzogdXVpZCgpIH1dIH1cbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQsIGNyZWF0ZU5ldykge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5mb3JtLmNoZWNrVmFsaWRpdHkoKSB8fCAhdGhpcy5zdGF0ZS5lZGl0ZWQpIHJldHVyblxuICAgICAgICBsZXQgaXNOZXcgPSAhdGhpcy5zdGF0ZS5hY3Rpb24uaWRcbiAgICAgICAgbGV0IHNhdmUgPSBhY3Rpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNhdmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFjdGlvbi5jb3VudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRlZDogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25TYXZlKSB0aGlzLnByb3BzLm9uU2F2ZShhY3Rpb24sIGlzTmV3LCBjcmVhdGVOZXcpXG4gICAgICAgICAgICB0b2FzdCgnQWN0aW9uIFNhdmVkJywgeyBhdXRvQ2xvc2U6IDMwMDAsIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvciA9IGRldGFpbCA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0YWlsLmRldGFpbCA9PSAnYWN0aW9uLWV4aXN0cycpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdhY3Rpb24tZXhpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfaWQ6IGRldGFpbC5pZCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdGVwcyA9IHRoaXMuc3RhdGUuYWN0aW9uLnN0ZXBzLm1hcChzdGVwID0+IHtcbiAgICAgICAgICAgIGlmIChzdGVwLmV2ZW50ID09ICckcGFnZXZpZXcnKSBzdGVwLnNlbGVjdGlvbiA9IFsndXJsJywgJ3VybF9tYXRjaGluZyddXG4gICAgICAgICAgICBpZiAoc3RlcC5ldmVudCAhPSAnJHBhZ2V2aWV3JyAmJiBzdGVwLmV2ZW50ICE9ICckYXV0b2NhcHR1cmUnKSBzdGVwLnNlbGVjdGlvbiA9IFtdXG4gICAgICAgICAgICBpZiAoIXN0ZXAuc2VsZWN0aW9uKSByZXR1cm4gc3RlcFxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RlcCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0ga2V5ID09ICdpZCcgfHwga2V5ID09ICdldmVudCcgfHwgc3RlcC5zZWxlY3Rpb24uaW5kZXhPZihrZXkpID4gLTEgPyBzdGVwW2tleV0gOiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLnByb3BzLmFwaVVSTCArICdhcGkvYWN0aW9uLycgKyB0aGlzLnN0YXRlLmFjdGlvbi5pZCArICcvJyArIHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfdG9fc2xhY2s6IHRoaXMuc3RhdGUuYWN0aW9uLnBvc3RfdG9fc2xhY2ssXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oc2F2ZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IpXG4gICAgICAgIH1cbiAgICAgICAgYXBpLmNyZWF0ZSh0aGlzLnByb3BzLmFwaVVSTCArICdhcGkvYWN0aW9uLycgKyB0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5hY3Rpb24ubmFtZSxcbiAgICAgICAgICAgIHBvc3RfdG9fc2xhY2s6IHRoaXMuc3RhdGUuYWN0aW9uLnBvc3RfdG9fc2xhY2ssXG4gICAgICAgICAgICBzdGVwcyxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHNhdmUpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IHRoaXMuc3RhdGUuYWN0aW9uXG4gICAgICAgIGxldCB7IGlzRWRpdG9yLCBzaW1tZXIgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBhZGRHcm91cCA9IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc21cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0ZXBzLnB1c2goeyBpc05ldzogdXVpZCgpIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIGFub3RoZXIgbWF0Y2ggZ3JvdXBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0VkaXRvciA/ICcnIDogJ2NhcmQnfSBzdHlsZT17eyBtYXJnaW5Ub3A6IGlzRWRpdG9yID8gOCA6ICcnIH19PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17aXNFZGl0b3IgPyAnJyA6ICdjYXJkLWJvZHknfSBvblN1Ym1pdD17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dGhpcy5zdGF0ZS5mb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGb3IgZXhhbXBsZTogdXNlciBzaWduZWQgdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7IC4uLmFjdGlvbiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGVkOiBlLnRhcmdldC52YWx1ZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb24uY291bnQgPiAtMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TWF0Y2hlcyB7YWN0aW9uLmNvdW50fSBldmVudHM8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgeyFpc0VkaXRvciAmJiA8YnIgLz59XG5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5zdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uU3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0ZXAuaWQgfHwgc3RlcC5pc05ld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0b3I9e2lzRWRpdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JZD17YWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1tZXI9e3NpbW1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGVwcyA9IGFjdGlvbi5zdGVwcy5maWx0ZXIocyA9PiBzLmlkICE9IHN0ZXAuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld1N0ZXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0ZXBzID0gYWN0aW9uLnN0ZXBzLm1hcChzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0ZXAuaWQgJiYgcy5pZCA9PSBzdGVwLmlkKSB8fCAoc3RlcC5pc05ldyAmJiBzLmlzTmV3ID09PSBzdGVwLmlzTmV3KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHN0ZXAuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV3OiBzdGVwLmlzTmV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdTdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGVkaXRlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICB7IWlzRWRpdG9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDE1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xhY2tFbmFibGVkID8gJycgOiAnZGlzYWJsZWQnfSBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHsgLi4uYWN0aW9uLCBwb3N0X3RvX3NsYWNrOiBlLnRhcmdldC5jaGVja2VkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhYWN0aW9uLnBvc3RfdG9fc2xhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc2xhY2tFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtQb3N0IHRvIFNsYWNrIHdoZW4gdGhpcyBhY3Rpb24gaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2V0dXAjc2xhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkNvbmZpZ3VyZTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbiB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuYXBpVVJMICsgJ2FjdGlvbi8nICsgdGhpcy5zdGF0ZS5lcnJvcl9pZH0+Q2xpY2sgaGVyZSB0byBlZGl0LjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7aXNFZGl0b3IgPyA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+e2FkZEdyb3VwfTwvZGl2PiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzRWRpdG9yID8gJ2J0bi1ncm91cCBzYXZlLWJ1dHRvbnMnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0VkaXRvciA/IGFkZEdyb3VwIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZWRpdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVkaXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLXN1Y2Nlc3MgYnRuIGJ0bi1zbSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2J0bi1zZWNvbmRhcnkgYnRuIGJ0bi1zbSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0VkaXRvciAmJiB0aGlzLnByb3BzLnNob3dOZXdBY3Rpb25CdXR0b24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vblN1Ym1pdChlLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgJiBuZXcgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbkFjdGlvbkVkaXQucHJvcFR5cGVzID0ge1xuICAgIGlzRWRpdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaW1tZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFdmVudE5hbWUgfSBmcm9tICcuL0V2ZW50TmFtZSdcbmltcG9ydCB7IEFwcEVkaXRvckxpbmsgfSBmcm9tICcuLi8uLi9saWIvY29tcG9uZW50cy9BcHBFZGl0b3JMaW5rL0FwcEVkaXRvckxpbmsnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmxldCBnZXRTYWZlVGV4dCA9IGVsID0+IHtcbiAgICBpZiAoIWVsLmNoaWxkTm9kZXMgfHwgIWVsLmNoaWxkTm9kZXMubGVuZ3RoKSByZXR1cm5cbiAgICBsZXQgZWxUZXh0ID0gJydcbiAgICBlbC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IDMgfHwgIWNoaWxkLnRleHRDb250ZW50KSByZXR1cm5cbiAgICAgICAgZWxUZXh0ICs9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgXSsvZywgJyAnKSAvLyBub3JtYWxpemUgd2hpdGVzcGFjZVxuICAgICAgICAgICAgLnN1YnN0cmluZygwLCAyNTUpXG4gICAgfSlcbiAgICByZXR1cm4gZWxUZXh0XG59XG5leHBvcnQgY2xhc3MgQWN0aW9uU3RlcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwOiBwcm9wcy5zdGVwLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiBPYmplY3Qua2V5cyhwcm9wcy5zdGVwKS5maWx0ZXIoa2V5ID0+IGtleSAhPSAnaWQnICYmIGtleSAhPSAnaXNOZXcnICYmIHByb3BzLnN0ZXBba2V5XSksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk1vdXNlT3ZlciA9IHRoaXMub25Nb3VzZU92ZXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5PcHRpb24gPSB0aGlzLk9wdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2VuZFN0ZXAgPSB0aGlzLnNlbmRTdGVwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5BdXRvY2FwdHVyZUZpZWxkcyA9IHRoaXMuQXV0b2NhcHR1cmVGaWVsZHMuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLlR5cGVTd2l0Y2hlciA9IHRoaXMuVHlwZVN3aXRjaGVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5VUkxNYXRjaGluZyA9IHRoaXMuVVJMTWF0Y2hpbmcuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnN0b3AgPSB0aGlzLnN0b3AuYmluZCh0aGlzKVxuXG4gICAgICAgIHRoaXMuYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJveClcbiAgICB9XG4gICAgZHJhd0JveChlbGVtZW50KSB7XG4gICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0aGlzLmJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB0aGlzLmJveC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgdGhpcy5ib3guc3R5bGUudG9wID0gcGFyc2VJbnQocmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQpICsgJ3B4J1xuICAgICAgICB0aGlzLmJveC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQocmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KSArICdweCdcbiAgICAgICAgdGhpcy5ib3guc3R5bGUud2lkdGggPSBwYXJzZUludChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSArICdweCdcbiAgICAgICAgdGhpcy5ib3guc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVjdC5ib3R0b20gLSByZWN0LnRvcCkgKyAncHgnXG4gICAgICAgIHRoaXMuYm94LnN0eWxlLmJhY2tncm91bmQgPSAnIzAwN2JmZidcbiAgICAgICAgdGhpcy5ib3guc3R5bGUub3BhY2l0eSA9ICcwLjUnXG4gICAgICAgIHRoaXMuYm94LnN0eWxlLnpJbmRleCA9ICc5OTk5OTk5OTk5J1xuICAgIH1cbiAgICBvbk1vdXNlT3ZlcihldmVudCkge1xuICAgICAgICBsZXQgZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIHRoaXMuZHJhd0JveChlbClcbiAgICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5wcm9wcy5zaW1tZXIoZWwpXG4gICAgICAgIC8vIFR1cm4gdGFncyBpbnRvIGxvd2VyIGNhc2VzXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvKF5bQS1aXSt8IFtBLVpdKykvZywgZCA9PiBkLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGxldCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IFsnc2VsZWN0b3InXVxuICAgICAgICBpZiAodGFnTmFtZSA9PSAnYScpIHNlbGVjdGlvbiA9IFsnaHJlZicsICdzZWxlY3RvciddXG4gICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT0gJ2J1dHRvbicpIHNlbGVjdGlvbiA9IFsndGV4dCcsICdzZWxlY3RvciddXG4gICAgICAgIGVsc2UgaWYgKGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpKSBzZWxlY3Rpb24gPSBbJ25hbWUnLCAnc2VsZWN0b3InXVxuICAgICAgICBsZXQgc3RlcCA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3RlcCxcbiAgICAgICAgICAgIGV2ZW50OiAnJGF1dG9jYXB0dXJlJyxcbiAgICAgICAgICAgIHRhZ19uYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgaHJlZjogZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJycsXG4gICAgICAgICAgICBuYW1lOiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnJyxcbiAgICAgICAgICAgIHRleHQ6IGdldFNhZmVUZXh0KGVsKSB8fCAnJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBxdWVyeSB8fCAnJyxcbiAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuc2VuZFN0ZXAoc3RlcClcbiAgICAgICAgKVxuICAgIH1cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgLy8gc3RvcCBzZWxlY3RpbmcgaWYgZXNjIGtleSB3YXMgcHJlc3NlZFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykgdGhpcy5zdG9wKClcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGxhYmVsJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlT3Zlciwge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjdzIGJveC1zaGFkb3cnXG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDAgMHB4IDEzcHggLTJweCAjZGMzNTQ1JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMCAwcHggMzBweCAtNXB4ICMwMDdiZmYnXG4gICAgICAgIHRoaXMuYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdG9wKVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGxhYmVsJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlT3Zlciwge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pXG4gICAgfVxuICAgIHNlbmRTdGVwKHN0ZXApIHtcbiAgICAgICAgc3RlcC5zZWxlY3Rpb24gPSB0aGlzLnN0YXRlLnNlbGVjdGlvblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0ZXApXG4gICAgfVxuICAgIE9wdGlvbihwcm9wcykge1xuICAgICAgICBsZXQgb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RlcFtwcm9wcy5pdGVtXSA9IGUudGFyZ2V0LnZhbHVlXG5cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAmJiB0aGlzLnN0YXRlLnNlbGVjdGlvbi5pbmRleE9mKHByb3BzLml0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb246IHRoaXMuc3RhdGUuc2VsZWN0aW9uLmNvbmNhdChbcHJvcHMuaXRlbV0pIH0sICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFN0ZXAodGhpcy5wcm9wcy5zdGVwKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlICYmIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmluZGV4T2YocHJvcHMuaXRlbSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogdGhpcy5zdGF0ZS5zZWxlY3Rpb24uZmlsdGVyKGkgPT4gaSAhPT0gcHJvcHMuaXRlbSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2VuZFN0ZXAodGhpcy5wcm9wcy5zdGVwKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kU3RlcCh0aGlzLnByb3BzLnN0ZXApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdG9yRXJyb3IsIG1hdGNoZXNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHByb3BzLnNlbGVjdG9yKS5sZW5ndGhcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZWxlY3RvckVycm9yID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgJyArICh0aGlzLnN0YXRlLnNlbGVjdGlvbi5pbmRleE9mKHByb3BzLml0ZW0pID4gLTEgJiYgJ3NlbGVjdGVkJyl9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RvciAmJiB0aGlzLnByb3BzLmlzRWRpdG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17J2Zvcm0tdGV4dCBmbG9hdC1yaWdodCAnICsgKHNlbGVjdG9yRXJyb3IgPyAndGV4dC1kYW5nZXInIDogJ3RleHQtbXV0ZWQnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0b3JFcnJvciA/ICdJbnZhbGlkIHNlbGVjdG9yJyA6IGBNYXRjaGVzICR7bWF0Y2hlc30gZWxlbWVudHNgfVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VsZWN0aW9uLmluZGV4T2YocHJvcHMuaXRlbSkgPiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLnB1c2gocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uLmZpbHRlcihpID0+IGkgIT09IHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb246IHRoaXMuc3RhdGUuc2VsZWN0aW9uIH0sICgpID0+IHRoaXMuc2VuZFN0ZXAodGhpcy5wcm9wcy5zdGVwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+eycgJ31cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfSB7cHJvcHMuZXh0cmFfb3B0aW9uc31cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtID09ICdzZWxlY3RvcicgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLnN0ZXBbcHJvcHMuaXRlbV0gfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuc3RlcFtwcm9wcy5pdGVtXSB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgVHlwZVN3aXRjaGVyKCkge1xuICAgICAgICBsZXQgeyBzdGVwLCBpc0VkaXRvciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBPYmplY3Qua2V5cyhzdGVwKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IGtleSAhPSAnaWQnICYmIGtleSAhPSAnaXNOZXcnICYmIHN0ZXBba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zZW5kU3RlcCh7IC4uLnN0ZXAsIGV2ZW50OiAnJGF1dG9jYXB0dXJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biAnICsgKHN0ZXAuZXZlbnQgPT0gJyRhdXRvY2FwdHVyZScgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLWxpZ2h0Jyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZyb250ZW5kIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZW5kU3RlcCh7IC4uLnN0ZXAsIGV2ZW50OiAnJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J0biAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHN0ZXAuZXZlbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5ldmVudCAhPSAnJGF1dG9jYXB0dXJlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuZXZlbnQgIT0gJyRwYWdldmlldydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYnRuLWxpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0aW9uOiBbJ3VybCddIH0sICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFN0ZXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiAnJHBhZ2V2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXNFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RlcC51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biAnICsgKHN0ZXAuZXZlbnQgPT0gJyRwYWdldmlldycgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLWxpZ2h0Jyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2Ugdmlld1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c3RlcC5ldmVudCAhPSBudWxsICYmIHN0ZXAuZXZlbnQgIT0gJyRhdXRvY2FwdHVyZScgJiYgc3RlcC5ldmVudCAhPSAnJHBhZ2V2aWV3JyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMnJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXZlbnQgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0ZXAuZXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2l0ZW0gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kU3RlcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIEF1dG9jYXB0dXJlRmllbGRzKHsgc3RlcCwgaXNFZGl0b3IsIGFjdGlvbklkIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyFpc0VkaXRvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcEVkaXRvckxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25JZD17YWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgZWxlbWVudCBvbiBzaXRlIDxpIGNsYXNzTmFtZT1cImZpIGZsYXRpY29uLWV4cG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FwcEVkaXRvckxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnBvc3Rob2cuY29tLyMvZmVhdHVyZXMvYWN0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIGRvY3VtZW50YXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyhpc0VkaXRvciB8fCBzdGVwLnNlbGVjdG9yIHx8IHN0ZXAuaHJlZiB8fCBzdGVwLnRleHQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPVwiaHJlZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIGhyZWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yPXt0aGlzLnN0YXRlLmVsZW1lbnQgJiYgJ2FbaHJlZj1cIicgKyB0aGlzLnN0YXRlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgKyAnXCJdJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5PcHRpb24gaXRlbT1cInRleHRcIiBsYWJlbD1cIlRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuT3B0aW9uIGl0ZW09XCJzZWxlY3RvclwiIGxhYmVsPVwiU2VsZWN0b3JcIiBzZWxlY3Rvcj17c3RlcC5zZWxlY3Rvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLk9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhX29wdGlvbnM9ezx0aGlzLlVSTE1hdGNoaW5nIHN0ZXA9e3N0ZXB9IGlzRWRpdG9yPXtpc0VkaXRvcn0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBVUkxNYXRjaGluZyh7IHN0ZXAsIGlzRWRpdG9yIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luOiBpc0VkaXRvciA/ICc0cHggMCAwIDhweCcgOiAnMCAwIDAgOHB4JyB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZFN0ZXAoeyAuLi5zdGVwLCB1cmxfbWF0Y2hpbmc6ICdjb250YWlucycgfSl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2J0biBidG4tc20gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIXN0ZXAudXJsX21hdGNoaW5nIHx8IHN0ZXAudXJsX21hdGNoaW5nID09ICdjb250YWlucycgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLWxpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZFN0ZXAoeyAuLi5zdGVwLCB1cmxfbWF0Y2hpbmc6ICdleGFjdCcgfSl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydidG4gYnRuLXNtICcgKyAoc3RlcC51cmxfbWF0Y2hpbmcgPT0gJ2V4YWN0JyA/ICdidG4tc2Vjb25kYXJ5JyA6ICdidG4tbGlnaHQnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIGV4YWN0bHkgbWF0Y2hlc1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBzdGVwLCBpc0VkaXRvciwgYWN0aW9uSWQgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNFZGl0b3IgPyAnJyA6ICdjYXJkJ31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzRWRpdG9yID8gJ3JnYmEoMCwwLDAsMC4wNSknIDogJycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNFZGl0b3IgPyAnJyA6ICdjYXJkLWJvZHknfT5cbiAgICAgICAgICAgICAgICAgICAgeyghaXNFZGl0b3IgfHwgc3RlcC5ldmVudCA9PT0gJyRhdXRvY2FwdHVyZScgfHwgIXN0ZXAuZXZlbnQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGlzRWRpdG9yID8gJzEycHggMTJweCAwcHggMHB4JyA6ICctM3B4IDAgMCAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlIHB1bGwtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHshaXNFZGl0b3IgJiYgPHRoaXMuVHlwZVN3aXRjaGVyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogc3RlcC5ldmVudCA9PT0gJyRwYWdldmlldycgJiYgIWlzRWRpdG9yID8gMjAgOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRWRpdG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDBweCAxMHB4IDEycHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhcnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3BlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuZXZlbnQgPT09ICckYXV0b2NhcHR1cmUnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhpcy5BdXRvY2FwdHVyZUZpZWxkcyBzdGVwPXtzdGVwfSBpc0VkaXRvcj17aXNFZGl0b3J9IGFjdGlvbklkPXthY3Rpb25JZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5ldmVudCA9PT0gJyRwYWdldmlldycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGlzLk9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYV9vcHRpb25zPXs8dGhpcy5VUkxNYXRjaGluZyBzdGVwPXtzdGVwfSBpc0VkaXRvcj17aXNFZGl0b3J9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFzdGVwLnVybF9tYXRjaGluZyB8fCBzdGVwLnVybF9tYXRjaGluZyA9PSAnY29udGFpbnMnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luVG9wOiAtMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlICclJyBmb3Igd2lsZGNhcmQsIGZvciBleGFtcGxlOiAvdXNlci8lL2VkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuQWN0aW9uU3RlcC5wcm9wVHlwZXMgPSB7XG4gICAgaXNFZGl0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2ltbWVyOiBQcm9wVHlwZXMuZnVuYyxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlVmFsdWVzIH0gZnJvbSAna2VhJ1xuaW1wb3J0IHsgdXNlckxvZ2ljIH0gZnJvbSAnc2NlbmVzL3VzZXJMb2dpYydcblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50TmFtZSh7IHZhbHVlLCBvbkNoYW5nZSB9KSB7XG4gICAgY29uc3QgeyBldmVudE5hbWVzR3JvdXBlZCB9ID0gdXNlVmFsdWVzKHVzZXJMb2dpYylcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtldmVudE5hbWVzR3JvdXBlZH1cbiAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtldmVudE5hbWVzR3JvdXBlZFswXS5vcHRpb25zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgPyB7IGxhYmVsOiB2YWx1ZSwgdmFsdWUgfSA6IG51bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7ZXZlbnROYW1lc0dyb3VwZWRbMF0ub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgXCJZb3UgaGF2ZW4ndCBzZW50IGFueSBjdXN0b20gZXZlbnRzLlwifXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnBvc3Rob2cuY29tLyMvaW50ZWdyYXRpb25zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgU2VlIGRvY3VtZW50YXRpb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgb24gaG93IHRvIHNlbmQgY3VzdG9tIGV2ZW50cyBpbiBsb3RzIG9mIGxhbmd1YWdlcy5cbiAgICAgICAgPC9zcGFuPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvRmlsdGVyUHJvcGVydHlMaW5rJ1xuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0eSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdsaWIvY29tcG9uZW50cy9MaW5rJ1xuXG5jb25zdCBldmVudE5hbWVNYXAgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnByb3BlcnRpZXMuJGV2ZW50X3R5cGUgPT09ICdjbGljaycpIHJldHVybiAnY2xpY2tlZCAnXG4gICAgaWYgKGV2ZW50LnByb3BlcnRpZXMuJGV2ZW50X3R5cGUgPT09ICdjaGFuZ2UnKSByZXR1cm4gJ3R5cGVkIHNvbWV0aGluZyBpbnRvICdcbiAgICBpZiAoZXZlbnQucHJvcGVydGllcy4kZXZlbnRfdHlwZSA9PT0gJ3N1Ym1pdCcpIHJldHVybiAnc3VibWl0dGVkICdcbiAgICByZXR1cm4gZXZlbnQuZXZlbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50Um93KHtcbiAgICBldmVudCxcbiAgICBoaWdobGlnaHRFdmVudHMsXG4gICAgc2VsZWN0ZWRFdmVudCxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIHNlYXJjaCxcbiAgICBzZXRTZWxlY3RlZEV2ZW50LFxuICAgIGZpbHRlcnNFbmFibGVkLFxuICAgIHNob3dMaW5rVG9QZXJzb24sXG59KSB7XG4gICAgbGV0IHBhcmFtcyA9IFsnJGN1cnJlbnRfdXJsJywgJyRsaWInXVxuICAgIHJldHVybiAoXG4gICAgICAgIDx0clxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnY3Vyc29yLXBvaW50ZXIgZXZlbnQtcm93ICcgKyAoaGlnaGxpZ2h0RXZlbnRzW2V2ZW50LmlkXSAmJiAnZXZlbnQtcm93LW5ldycpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRFdmVudChzZWxlY3RlZEV2ZW50ICE9PSBldmVudC5pZCA/IGV2ZW50LmlkIDogZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2V2ZW50TmFtZU1hcChldmVudCl9XG4gICAgICAgICAgICAgICAge2V2ZW50LmVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCwgZGlzcGxheTogJ2lubGluZScgfX0+Jmx0O3tldmVudC5lbGVtZW50c1swXS50YWdfbmFtZX0mZ3Q7PC9wcmU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZXZlbnQuZWxlbWVudHMubGVuZ3RoID4gMCAmJiBldmVudC5lbGVtZW50c1swXS50ZXh0ICYmICcgd2l0aCB0ZXh0IFwiJyArIGV2ZW50LmVsZW1lbnRzWzBdLnRleHQgKyAnXCInfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7c2hvd0xpbmtUb1BlcnNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvcGVyc29uLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGV2ZW50LmRpc3RpbmN0X2lkKX0ke3NlYXJjaH1gfSBjbGFzc05hbWU9XCJwaC1uby1jYXB0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQucGVyc29ufVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucGVyc29uXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICB7cGFyYW1zLm1hcChwYXJhbVJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHBhcmFtUmVxdWVzdFxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnByb3BlcnRpZXNbcGFyYW1dXG5cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0gPT09ICckY3VycmVudF91cmwnICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9ICckc2NyZWVuJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnByb3BlcnRpZXNbcGFyYW1dXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17cGFyYW19IHRpdGxlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyc0VuYWJsZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3BlcnR5TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eT17cGFyYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudC5wcm9wZXJ0aWVzW3BhcmFtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17eyBwcm9wZXJ0aWVzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5IHZhbHVlPXtldmVudC5wcm9wZXJ0aWVzW3BhcmFtXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8dGQ+e21vbWVudChldmVudC50aW1lc3RhbXApLmZyb21Ob3coKX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjdGlvbnMsIHVzZVZhbHVlcyB9IGZyb20gJ2tlYSdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBUYWJsZVJvd0xvYWRpbmcgfSBmcm9tICdsaWIvdXRpbHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUZpbHRlcnMgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Qcm9wZXJ0eUZpbHRlcnMvUHJvcGVydHlGaWx0ZXJzJ1xuXG5pbXBvcnQgeyBFdmVudERldGFpbHMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL0V2ZW50RGV0YWlscydcbmltcG9ydCB7IEV2ZW50Um93IH0gZnJvbSAnc2NlbmVzL2V2ZW50cy9FdmVudFJvdydcbmltcG9ydCB7IE5vSXRlbXMgfSBmcm9tICdzY2VuZXMvZXZlbnRzL05vSXRlbXMnXG5pbXBvcnQgeyBldmVudHNUYWJsZUxvZ2ljIH0gZnJvbSAnc2NlbmVzL2V2ZW50cy9ldmVudHNUYWJsZUxvZ2ljJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICdrZWEtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRzVGFibGUoeyBmaXhlZEZpbHRlcnMsIGZpbHRlcnNFbmFibGVkID0gdHJ1ZSB9KSB7XG4gICAgY29uc3QgbG9naWMgPSBldmVudHNUYWJsZUxvZ2ljKHsgZml4ZWRGaWx0ZXJzIH0pXG4gICAgY29uc3Qge1xuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaXNMb2FkaW5nTmV4dCxcbiAgICAgICAgc2VsZWN0ZWRFdmVudCxcbiAgICAgICAgbmV3RXZlbnRzLFxuICAgICAgICBoaWdobGlnaHRFdmVudHMsXG4gICAgfSA9IHVzZVZhbHVlcyhsb2dpYylcbiAgICBjb25zdCB7IHVwZGF0ZVByb3BlcnR5LCBzZXRTZWxlY3RlZEV2ZW50LCBmZXRjaE5leHRFdmVudHMsIGZsaXBTb3J0LCBwcmVwZW5kTmV3RXZlbnRzIH0gPSB1c2VBY3Rpb25zKGxvZ2ljKVxuICAgIGNvbnN0IHtcbiAgICAgICAgbG9jYXRpb246IHsgc2VhcmNoIH0sXG4gICAgfSA9IHVzZVZhbHVlcyhyb3V0ZXIpXG5cbiAgICBjb25zdCBzaG93TGlua1RvUGVyc29uID0gIWZpeGVkRmlsdGVycz8ucGVyc29uX2lkXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgICAgICAgICAge2ZpbHRlcnNFbmFibGVkID8gPFByb3BlcnR5RmlsdGVycyBwYWdlS2V5PVwiRXZlbnRzVGFibGVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FdmVudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGVyc29uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QYXRoIC8gU2NyZWVuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Tb3VyY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIG9uQ2xpY2s9e2ZsaXBTb3J0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIDxpIGNsYXNzTmFtZT1cImZpIGZsYXRpY29uLXNvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8VGFibGVSb3dMb2FkaW5nIGNvbFNwYW49ezV9IGFzT3ZlcmxheT17ZXZlbnRzLmxlbmd0aCA+IDB9IC8+fVxuICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2V2ZW50LW5ldy1ldmVudHMgJyArIChuZXdFdmVudHMubGVuZ3RoID4gMCA/ICdzaG93JyA6ICdoaWRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmVwZW5kTmV3RXZlbnRzKG5ld0V2ZW50cyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhlcmUgYXJlIHtuZXdFdmVudHMubGVuZ3RofSBuZXcgZXZlbnRzLiBDbGljayBoZXJlIHRvIGxvYWQgdGhlbS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHshZXZlbnRzIHx8IGV2ZW50cy5sZW5ndGggPT09IDAgPyA8Tm9JdGVtcyAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtldmVudHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2V2ZW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID4gMCAmJiAhbW9tZW50KGV2ZW50LnRpbWVzdGFtcCkuaXNTYW1lKGV2ZW50c1tpbmRleCAtIDFdLnRpbWVzdGFtcCwgJ2RheScpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIiBjbGFzc05hbWU9XCJldmVudC1kYXktc2VwYXJhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoZXZlbnQudGltZXN0YW1wKS5mb3JtYXQoJ0xMJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2V2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRFdmVudHM9e2hpZ2hsaWdodEV2ZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRXZlbnQ9e3NlbGVjdGVkRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRFdmVudD17c2V0U2VsZWN0ZWRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17dXBkYXRlUHJvcGVydHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzRW5hYmxlZD17ZmlsdGVyc0VuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlua1RvUGVyc29uPXtzaG93TGlua1RvUGVyc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRFdmVudCA9PT0gZXZlbnQuaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnREZXRhaWxzIGV2ZW50PXtldmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGFzTmV4dCB8fCBpc0xvYWRpbmdOZXh0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzJyZW0gYXV0byA1cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17ZmV0Y2hOZXh0RXZlbnRzfT5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZ05leHQgPyA8U3BpbiAvPiA6ICdMb2FkIG1vcmUgZXZlbnRzJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc1cmVtJyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvTGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIE5vSXRlbXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgIFlvdSBkb24ndCBoYXZlIGFueSBpdGVtcyBoZXJlLiBJZiB5b3UgaGF2ZW4ndCBpbnRlZ3JhdGVkIFBvc3RIb2cgeWV0LHsnICd9XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2V0dXBcIj5jbGljayBoZXJlIHRvIHNldCBQb3N0SG9nIHVwIG9uIHlvdXIgYXBwPC9MaW5rPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9