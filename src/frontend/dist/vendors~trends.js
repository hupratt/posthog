(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~trends"],{

/***/ "./node_modules/antd/es/col/index.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/es/col/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Col"]);

/***/ }),

/***/ "./node_modules/antd/es/col/style/css.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/col/style/css.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/es/grid/style/css.js");
 // style dependencies
// deps-lint-skip: grid



/***/ }),

/***/ "./node_modules/antd/es/tabs/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/es/tabs/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tabs */ "./node_modules/rc-tabs/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/PlusOutlined */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _util_devWarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/es/_util/devWarning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function Tabs(_a) {
  var type = _a.type,
      className = _a.className,
      propSize = _a.size,
      _onEdit = _a.onEdit,
      hideAdd = _a.hideAdd,
      centered = _a.centered,
      addIcon = _a.addIcon,
      props = __rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]);

  var customizePrefixCls = props.prefixCls,
      _props$moreIcon = props.moreIcon,
      moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], null) : _props$moreIcon;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_9__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
            event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      addIcon: addIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ant_design_icons_es_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_6__["default"], null),
      showAdd: hideAdd !== true
    };
  }

  var rootPrefixCls = getPrefixCls();
  Object(_util_devWarning__WEBPACK_IMPORTED_MODULE_8__["default"])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_10__["default"].Consumer, null, function (contextSize) {
    var _classNames;

    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      direction: direction,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls
    }));
  });
}

Tabs.TabPane = rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"];
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/antd/es/tabs/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/tabs/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/tabs/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/tabs/style/index.css":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/tabs/style/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContext.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabContext.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/AddButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/AddButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      editable = _ref.editable,
      locale = _ref.locale,
      style = _ref.style;

  if (!editable || editable.showAdd === false) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](AddButton));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/OperationNode.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");










function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      tabs = _ref.tabs,
      locale = _ref.locale,
      mobile = _ref.mobile,
      _ref$moreIcon = _ref.moreIcon,
      moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      style = _ref.style,
      className = _ref.className,
      editable = _ref.editable,
      tabBarGutter = _ref.tabBarGutter,
      rtl = _ref.rtl,
      onTabClick = _ref.onTabClick;

  // ======================== Dropdown ========================
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];

  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
          domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, tab.tab);
  }));

  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;

    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];

      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }

  function onKeyDown(e) {
    var which = e.which;

    if (!open) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }

      return;
    }

    switch (which) {
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].UP:
        selectOffset(-1);
        e.preventDefault();
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN:
        selectOffset(1);
        e.preventDefault();
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ESC:
        setOpen(false);
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].SPACE:
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  } // ========================= Effect =========================


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);

    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]); // ========================= Render =========================

  var moreStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rtl ? 'marginLeft' : 'marginRight', tabBarGutter);

  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }

  var overlayClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: open,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: overlayClassName,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_AddButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](OperationNode));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/TabNode.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/TabNode.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");





function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      rtl = _ref.rtl,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      tabBarGutter = _ref.tabBarGutter,
      tabPosition = _ref.tabPosition,
      closable = _ref.closable,
      renderWrapper = _ref.renderWrapper,
      removeAriaLabel = _ref.removeAriaLabel,
      editable = _ref.editable,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus;
  var tabPrefix = "".concat(prefixCls, "-tab");
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return onRemove;
  }, []);
  var nodeStyle = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    nodeStyle[rtl ? 'marginLeft' : 'marginRight'] = tabBarGutter;
  } else {
    nodeStyle.marginBottom = tabBarGutter;
  }

  var removable = editable && closable !== false && !disabled;

  function onInternalClick(e) {
    if (disabled) return;
    onClick(e);
  }

  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }

  var node = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: key,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(tabPrefix, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-with-remove"), removable), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-active"), active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: nodeStyle,
    onClick: onInternalClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab), removable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](TabNode));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var _hooks_useRaf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useRaf */ "./node_modules/rc-tabs/es/hooks/useRaf.js");
/* harmony import */ var _TabNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabNode */ "./node_modules/rc-tabs/es/TabNavList/TabNode.js");
/* harmony import */ var _hooks_useOffsets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useOffsets */ "./node_modules/rc-tabs/es/hooks/useOffsets.js");
/* harmony import */ var _hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useVisibleRange */ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js");
/* harmony import */ var _OperationNode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OperationNode */ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useTouchMove */ "./node_modules/rc-tabs/es/hooks/useTouchMove.js");
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/useRefs */ "./node_modules/rc-tabs/es/hooks/useRefs.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");
/* harmony import */ var _hooks_useSyncState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks/useSyncState */ "./node_modules/rc-tabs/es/hooks/useSyncState.js");





















var ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = extra;

  if (position === 'right') {
    content = assertExtra.right || !assertExtra.left && assertExtra || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: "".concat(prefixCls, "-extra-content")
  }, content) : null;
};

function TabNavList(props, ref) {
  var _classNames;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_5__["useContext"](_TabContext__WEBPACK_IMPORTED_MODULE_14__["default"]),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      animated = props.animated,
      activeKey = props.activeKey,
      rtl = props.rtl,
      extra = props.extra,
      editable = props.editable,
      locale = props.locale,
      tabPosition = props.tabPosition,
      tabBarGutter = props.tabBarGutter,
      children = props.children,
      onTabClick = props.onTabClick,
      onTabScroll = props.onTabScroll;
  var tabsWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var tabListRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var operationsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var innerAddButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useRefs = Object(_hooks_useRefs__WEBPACK_IMPORTED_MODULE_16__["default"])(),
      _useRefs2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useRefs, 2),
      getBtnRef = _useRefs2[0],
      removeBtnRef = _useRefs2[1];

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  var _useSyncState = Object(_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_18__["default"])(0, function (next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'left' : 'right'
      });
    }
  }),
      _useSyncState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];

  var _useSyncState3 = Object(_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_18__["default"])(0, function (next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'top' : 'bottom'
      });
    }
  }),
      _useSyncState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      wrapperContentWidth = _useState6[0],
      setWrapperContentWidth = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      wrapperContentHeight = _useState8[0],
      setWrapperContentHeight = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      wrapperWidth = _useState10[0],
      setWrapperWidth = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
      wrapperHeight = _useState12[0],
      setWrapperHeight = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
      addWidth = _useState14[0],
      setAddWidth = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState15, 2),
      addHeight = _useState16[0],
      setAddHeight = _useState16[1];

  var _useRafState = Object(_hooks_useRaf__WEBPACK_IMPORTED_MODULE_9__["useRafState"])(new Map()),
      _useRafState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];

  var tabOffsets = Object(_hooks_useOffsets__WEBPACK_IMPORTED_MODULE_11__["default"])(tabs, tabSizes, wrapperScrollWidth); // ========================== Util =========================

  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;

  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
  } else {
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }

    if (value > transformMax) {
      return transformMax;
    }

    return value;
  } // ========================= Mobile ========================


  var touchMovingRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState17, 2),
      lockAnimation = _useState18[0],
      setLockAnimation = _useState18[1];

  function doLockAnimation() {
    setLockAnimation(Date.now());
  }

  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }

  Object(_hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_15__["default"])(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      // Skip scroll if place is enough
      if (wrapperWidth >= wrapperScrollWidth) {
        return false;
      }

      doMove(setTransformLeft, offsetX);
    } else {
      if (wrapperHeight >= wrapperScrollHeight) {
        return false;
      }

      doMove(setTransformTop, offsetY);
    }

    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    clearTouchMoving();

    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }

    return clearTouchMoving;
  }, [lockAnimation]); // ========================= Scroll ========================

  function scrollToTab() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };

    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft; // RTL

      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
          newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
        }
      } // LTR
      else if (tabOffset.left < -transformLeft) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
        }

      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;

      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
        _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
      }

      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  } // ========================== Tab ==========================
  // Render tab node & collect tab offset


  var _useVisibleRange = Object(_hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_12__["default"])(tabOffsets, {
    width: wrapperWidth,
    height: wrapperHeight,
    left: transformLeft,
    top: transformTop
  }, {
    width: wrapperContentWidth,
    height: wrapperContentHeight
  }, {
    width: addWidth,
    height: addHeight
  }, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props), {}, {
    tabs: tabs
  })),
      _useVisibleRange2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useVisibleRange, 2),
      visibleStart = _useVisibleRange2[0],
      visibleEnd = _useVisibleRange2[1];

  var tabNodes = tabs.map(function (tab) {
    var key = tab.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TabNode__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id,
      prefixCls: prefixCls,
      key: key,
      rtl: rtl,
      tab: tab,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      tabPosition: tabPosition,
      tabBarGutter: tabBarGutter,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation(); // Focus element will make scrollLeft change which we should reset back

        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }

        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = Object(_hooks_useRaf__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    var _tabsWrapperRef$curre, _tabsWrapperRef$curre2, _innerAddButtonRef$cu, _innerAddButtonRef$cu2, _operationsRef$curren, _operationsRef$curren2, _tabListRef$current, _tabListRef$current2, _operationsRef$curren3;

    // Update wrapper records
    var offsetWidth = ((_tabsWrapperRef$curre = tabsWrapperRef.current) === null || _tabsWrapperRef$curre === void 0 ? void 0 : _tabsWrapperRef$curre.offsetWidth) || 0;
    var offsetHeight = ((_tabsWrapperRef$curre2 = tabsWrapperRef.current) === null || _tabsWrapperRef$curre2 === void 0 ? void 0 : _tabsWrapperRef$curre2.offsetHeight) || 0;
    var newAddWidth = ((_innerAddButtonRef$cu = innerAddButtonRef.current) === null || _innerAddButtonRef$cu === void 0 ? void 0 : _innerAddButtonRef$cu.offsetWidth) || 0;
    var newAddHeight = ((_innerAddButtonRef$cu2 = innerAddButtonRef.current) === null || _innerAddButtonRef$cu2 === void 0 ? void 0 : _innerAddButtonRef$cu2.offsetHeight) || 0;
    var newOperationWidth = ((_operationsRef$curren = operationsRef.current) === null || _operationsRef$curren === void 0 ? void 0 : _operationsRef$curren.offsetWidth) || 0;
    var newOperationHeight = ((_operationsRef$curren2 = operationsRef.current) === null || _operationsRef$curren2 === void 0 ? void 0 : _operationsRef$curren2.offsetHeight) || 0;
    setWrapperWidth(offsetWidth);
    setWrapperHeight(offsetHeight);
    setAddWidth(newAddWidth);
    setAddHeight(newAddHeight);
    var newWrapperScrollWidth = (((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.offsetWidth) || 0) - newAddWidth;
    var newWrapperScrollHeight = (((_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.offsetHeight) || 0) - newAddHeight;
    setWrapperScrollWidth(newWrapperScrollWidth);
    setWrapperScrollHeight(newWrapperScrollHeight);
    var isOperationHidden = (_operationsRef$curren3 = operationsRef.current) === null || _operationsRef$curren3 === void 0 ? void 0 : _operationsRef$curren3.className.includes(operationsHiddenClassName);
    setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
    setWrapperContentHeight(newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)); // Update buttons records

    setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;

        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  }); // ======================== Dropdown =======================

  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startHiddenTabs), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(endHiddenTabs)); // =================== Link & Operations ===================

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState19, 2),
      inkStyle = _useState20[0],
      setInkStyle = _useState20[1];

  var activeTabOffset = tabOffsets.get(activeKey); // Delay set ink style to avoid remove tab blink

  var inkBarRafRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  function cleanInkBarRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_7__["default"].cancel(inkBarRafRef.current);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var newInkStyle = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }

        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    cleanInkBarRaf();
    inkBarRafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]); // ========================= Effect ========================

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    scrollToTab();
  }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]); // Should recalculate when rtl changed

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    onListHolderResize();
  }, [rtl, tabBarGutter, activeKey, tabs.map(function (tab) {
    return tab.key;
  }).join('_')]); // ========================= Render ========================

  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;

  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + wrapperWidth < wrapperScrollWidth;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + wrapperWidth < wrapperScrollWidth;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + wrapperHeight < wrapperScrollHeight;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    ref: ref,
    role: "tablist",
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(wrapPrefix, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_AddButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: {
      visibility: hasDropdown ? 'hidden' : null
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-ink-bar"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_OperationNode__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](TabNavList));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/TabPane.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPane; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function TabPane(_ref) {
  var prefixCls = _ref.prefixCls,
      forceRender = _ref.forceRender,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      active = _ref.active,
      animated = _ref.animated,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      tabKey = _ref.tabKey,
      children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](forceRender),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      visited = _React$useState2[0],
      setVisited = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var mergedStyle = {};

  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mergedStyle), style),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), className)
  }, (active || visited || forceRender) && children);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPanelList; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");




function TabPanelList(_ref) {
  var id = _ref.id,
      activeKey = _ref.activeKey,
      animated = _ref.animated,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_TabContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var tabPaneAnimated = animated.tabPane;
  var activeIndex = tabs.findIndex(function (tab) {
    return tab.key === activeKey;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)),
    style: activeIndex && tabPaneAnimated ? Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      id: id,
      animated: tabPaneAnimated,
      active: tab.key === activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  })));
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/Tabs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _TabNavList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabNavList */ "./node_modules/rc-tabs/es/TabNavList/index.js");
/* harmony import */ var _TabPanelList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabPanelList */ "./node_modules/rc-tabs/es/TabPanelList/index.js");
/* harmony import */ var _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabPanelList/TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TabContext */ "./node_modules/rc-tabs/es/TabContext.js");






// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */
// Used for accessibility

var uuid = 0;

function parseTabList(children) {
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__["default"])(children).map(function (node) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab;
  });
}

function Tabs(_ref, ref) {
  var _classNames;

  var id = _ref.id,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      editable = _ref.editable,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? {
    inkBar: true,
    tabPane: false
  } : _ref$animated,
      _ref$tabPosition = _ref.tabPosition,
      tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
      tabBarGutter = _ref.tabBarGutter,
      tabBarStyle = _ref.tabBarStyle,
      tabBarExtraContent = _ref.tabBarExtraContent,
      locale = _ref.locale,
      moreIcon = _ref.moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      renderTabBar = _ref.renderTabBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onTabScroll = _ref.onTabScroll,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"]);

  var tabs = parseTabList(children);
  var rtl = direction === 'rtl';
  var mergedAnimated;

  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({
      inkBar: true,
      tabPane: false
    }, Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(animated) === 'object' ? animated : {});
  } // ======================== Mobile ========================


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    // Only update on the client side
    setMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }, []); // ====================== Active Key ======================

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // ===================== Accessibility ====================

  var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__["default"])(null, {
    value: id
  }),
      _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];

  var mergedTabPosition = tabPosition;

  if (mobile && !['left', 'right'].includes(tabPosition)) {
    mergedTabPosition = 'top';
  } // Async generate id to avoid ssr mapping failed


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? undefined : uuid));
      uuid += 1;
    }
  }, []); // ======================== Events ========================

  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  } // ======================== Render ========================


  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: mergedTabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;

  var tabNavBarProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  });

  if (renderTabBar) {
    tabNavBar = renderTabBar(tabNavBarProps, _TabNavList__WEBPACK_IMPORTED_MODULE_11__["default"]);
  } else {
    tabNavBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TabNavList__WEBPACK_IMPORTED_MODULE_11__["default"], tabNavBarProps);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TabContext__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, "".concat(prefixCls, "-").concat(mergedTabPosition), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-mobile"), mobile), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-editable"), editable), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TabPanelList__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}

var ForwardTabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"](Tabs);
ForwardTabs.TabPane = _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_13__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ForwardTabs);

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useOffsets.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useOffsets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOffsets; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _tabs$;

    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;

    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key); // Reuse last one when not exist yet

      if (!data) {
        var _tabs;

        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }

      var entity = map.get(key) || Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data); // Right


      entity.right = rightOffset - entity.left - entity.width; // Update entity

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useRaf.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useRaf.js ***!
  \*************************************************/
/*! exports provided: default, useRafState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return useRafState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");



function useRaf(callback) {
  var rafRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var removedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!removedRef.current) {
      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(rafRef.current);
      rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        callback.apply(void 0, args);
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      removedRef.current = true;
      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      forceUpdate = _useState2[1];

  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useRefs.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useRefs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useRefs() {
  var cacheRefs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());
    }

    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useSyncState.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useSyncState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSyncState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useSyncState(defaultState, onChange) {
  var stateRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaultState);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;

    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }

    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useTouchMove.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useTouchMove.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTouchMove; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL); // ================================= Hook =================================

function useTouchMove(ref, onOffset) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      touchPosition = _useState2[0],
      setTouchPosition = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      lastTimestamp = _useState4[0],
      setLastTimestamp = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      lastTimeDiff = _useState6[0],
      setLastTimeDiff = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      lastOffset = _useState8[0],
      setLastOffset = _useState8[1];

  var motionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // ========================= Events =========================
  // >>> Touch events

  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
        screenX = _e$touches$.screenX,
        screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
        screenX = _e$touches$2.screenX,
        screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }

  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null); // Swipe if needed

    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY); // Skip swipe if low distance

      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  } // >>> Wheel event


  var lastWheelDirectionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function onWheel(e) {
    var deltaX = e.deltaX,
        deltaY = e.deltaY; // Convert both to x & y since wheel only happened on PC

    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }

    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  } // ========================= Effect =========================


  var touchEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }

    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }

    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }

    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    }); // No need to clean up since element removed

    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useVisibleRange.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVisibleRange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, containerSize, tabContentNodeSize, addNodeSize, _ref) {
  var tabs = _ref.tabs,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl;
  var unit;
  var position;
  var transformSize;

  if (['top', 'bottom'].includes(tabPosition)) {
    unit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(containerSize.left);
  } else {
    unit = 'height';
    position = 'top';
    transformSize = -containerSize.top;
  }

  var basicSize = containerSize[unit];
  var tabContentSize = tabContentNodeSize[unit];
  var addSize = addNodeSize[unit];
  var mergedBasicSize = basicSize;

  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!tabs.length) {
      return [0, 0];
    }

    var len = tabs.length;
    var endIndex = len;

    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;

      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    var startIndex = 0;

    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;

      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/index.js ***!
  \******************************************/
/*! exports provided: TabPane, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanelList/TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY29sL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvc3R5bGUvaW5kZXguY3NzPzVjNWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L0FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L09wZXJhdGlvbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiTmF2TGlzdC9UYWJOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYk5hdkxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiUGFuZWxMaXN0L1RhYlBhbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiUGFuZWxMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VSYWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlUmVmcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VTeW5jU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlVG91Y2hNb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL2hvb2tzL3VzZVZpc2libGVSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUE4QjtBQUNmLHdHQUFHLEU7Ozs7Ozs7Ozs7OztBQ0RsQjtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUMvQjs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ2M7O0FBRXhFLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJIQUEySCxjQUFjO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjtBQUNXO0FBQ047QUFDdUM7QUFDUjtBQUNFO0FBQ3hCO0FBQ007QUFDTTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsbURBQW1CLENBQUMsbUZBQWdCOztBQUUvRiwwQkFBMEIsZ0RBQWdCLENBQUMsOERBQWE7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwrQkFBK0IsbURBQW1CLENBQUMsZ0ZBQWE7QUFDaEUsdUNBQXVDLG1EQUFtQixDQUFDLCtFQUFZO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsZ0VBQVU7QUFDWixzQkFB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akI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDL0pBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMscURBQU87QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsU0FBUztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ21CO0FBQzFCO0FBQ0osNEdBQUksRSIsImZpbGUiOiJ2ZW5kb3JzfnRyZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGRlZmF1bHQgQ29sOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJzsgLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG4vLyBkZXBzLWxpbnQtc2tpcDogZ3JpZFxuXG5pbXBvcnQgJy4uLy4uL2dyaWQvc3R5bGUvY3NzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmNUYWJzLCB7IFRhYlBhbmUgfSBmcm9tICdyYy10YWJzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEVsbGlwc2lzT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0VsbGlwc2lzT3V0bGluZWRcIjtcbmltcG9ydCBQbHVzT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL1BsdXNPdXRsaW5lZFwiO1xuaW1wb3J0IENsb3NlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb3NlT3V0bGluZWRcIjtcbmltcG9ydCBkZXZXYXJuaW5nIGZyb20gJy4uL191dGlsL2Rldldhcm5pbmcnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgU2l6ZUNvbnRleHQgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0JztcblxuZnVuY3Rpb24gVGFicyhfYSkge1xuICB2YXIgdHlwZSA9IF9hLnR5cGUsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBwcm9wU2l6ZSA9IF9hLnNpemUsXG4gICAgICBfb25FZGl0ID0gX2Eub25FZGl0LFxuICAgICAgaGlkZUFkZCA9IF9hLmhpZGVBZGQsXG4gICAgICBjZW50ZXJlZCA9IF9hLmNlbnRlcmVkLFxuICAgICAgYWRkSWNvbiA9IF9hLmFkZEljb24sXG4gICAgICBwcm9wcyA9IF9fcmVzdChfYSwgW1widHlwZVwiLCBcImNsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJvbkVkaXRcIiwgXCJoaWRlQWRkXCIsIFwiY2VudGVyZWRcIiwgXCJhZGRJY29uXCJdKTtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgX3Byb3BzJG1vcmVJY29uID0gcHJvcHMubW9yZUljb24sXG4gICAgICBtb3JlSWNvbiA9IF9wcm9wcyRtb3JlSWNvbiA9PT0gdm9pZCAwID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxsaXBzaXNPdXRsaW5lZCwgbnVsbCkgOiBfcHJvcHMkbW9yZUljb247XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCd0YWJzJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGVkaXRhYmxlO1xuXG4gIGlmICh0eXBlID09PSAnZWRpdGFibGUtY2FyZCcpIHtcbiAgICBlZGl0YWJsZSA9IHtcbiAgICAgIG9uRWRpdDogZnVuY3Rpb24gb25FZGl0KGVkaXRUeXBlLCBfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgICAgIGV2ZW50ID0gX3JlZi5ldmVudDtcbiAgICAgICAgX29uRWRpdCA9PT0gbnVsbCB8fCBfb25FZGl0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb25FZGl0KGVkaXRUeXBlID09PSAnYWRkJyA/IGV2ZW50IDoga2V5LCBlZGl0VHlwZSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlSWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2VPdXRsaW5lZCwgbnVsbCksXG4gICAgICBhZGRJY29uOiBhZGRJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsdXNPdXRsaW5lZCwgbnVsbCksXG4gICAgICBzaG93QWRkOiBoaWRlQWRkICE9PSB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHZhciByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG4gIGRldldhcm5pbmcoISgnb25QcmV2Q2xpY2snIGluIHByb3BzKSAmJiAhKCdvbk5leHRDbGljaycgaW4gcHJvcHMpLCAnVGFicycsICdgb25QcmV2Q2xpY2tgIGFuZCBgb25OZXh0Q2xpY2tgIGhhcyBiZWVuIHJlbW92ZWQuIFBsZWFzZSB1c2UgYG9uVGFiU2Nyb2xsYCBpbnN0ZWFkLicpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0U2l6ZSkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBzaXplID0gcHJvcFNpemUgIT09IHVuZGVmaW5lZCA/IHByb3BTaXplIDogY29udGV4dFNpemU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJjVGFicywgX2V4dGVuZHMoe1xuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBtb3JlVHJhbnNpdGlvbk5hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLXNsaWRlLXVwXCIpXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSksIHNpemUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2FyZFwiKSwgWydjYXJkJywgJ2VkaXRhYmxlLWNhcmQnXS5pbmNsdWRlcyh0eXBlKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lZGl0YWJsZS1jYXJkXCIpLCB0eXBlID09PSAnZWRpdGFibGUtY2FyZCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VudGVyZWRcIiksIGNlbnRlcmVkKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpLFxuICAgICAgZWRpdGFibGU6IGVkaXRhYmxlLFxuICAgICAgbW9yZUljb246IG1vcmVJY29uLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgICB9KSk7XG4gIH0pO1xufVxuXG5UYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuZXhwb3J0IGRlZmF1bHQgVGFiczsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBBZGRCdXR0b24oX3JlZiwgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIGlmICghZWRpdGFibGUgfHwgZWRpdGFibGUuc2hvd0FkZCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LWFkZFwiKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgXCJhcmlhLWxhYmVsXCI6IChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2NhbGUuYWRkQXJpYUxhYmVsKSB8fCAnQWRkIHRhYicsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgZWRpdGFibGUub25FZGl0KCdhZGQnLCB7XG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBlZGl0YWJsZS5hZGRJY29uIHx8ICcrJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEFkZEJ1dHRvbik7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IE1lbnUsIHsgTWVudUl0ZW0gfSBmcm9tICdyYy1tZW51JztcbmltcG9ydCBEcm9wZG93biBmcm9tICdyYy1kcm9wZG93bic7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4vQWRkQnV0dG9uJztcblxuZnVuY3Rpb24gT3BlcmF0aW9uTm9kZShfcmVmLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgdGFicyA9IF9yZWYudGFicyxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbW9iaWxlID0gX3JlZi5tb2JpbGUsXG4gICAgICBfcmVmJG1vcmVJY29uID0gX3JlZi5tb3JlSWNvbixcbiAgICAgIG1vcmVJY29uID0gX3JlZiRtb3JlSWNvbiA9PT0gdm9pZCAwID8gJ01vcmUnIDogX3JlZiRtb3JlSWNvbixcbiAgICAgIG1vcmVUcmFuc2l0aW9uTmFtZSA9IF9yZWYubW9yZVRyYW5zaXRpb25OYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBlZGl0YWJsZSA9IF9yZWYuZWRpdGFibGUsXG4gICAgICB0YWJCYXJHdXR0ZXIgPSBfcmVmLnRhYkJhckd1dHRlcixcbiAgICAgIHJ0bCA9IF9yZWYucnRsLFxuICAgICAgb25UYWJDbGljayA9IF9yZWYub25UYWJDbGljaztcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRHJvcGRvd24gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIG9wZW4gPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0T3BlbiA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHNlbGVjdGVkS2V5ID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFNlbGVjdGVkS2V5ID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgcG9wdXBJZCA9IFwiXCIuY29uY2F0KGlkLCBcIi1tb3JlLXBvcHVwXCIpO1xuICB2YXIgZHJvcGRvd25QcmVmaXggPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRyb3Bkb3duXCIpO1xuICB2YXIgc2VsZWN0ZWRJdGVtSWQgPSBzZWxlY3RlZEtleSAhPT0gbnVsbCA/IFwiXCIuY29uY2F0KHBvcHVwSWQsIFwiLVwiKS5jb25jYXQoc2VsZWN0ZWRLZXkpIDogbnVsbDtcbiAgdmFyIGRyb3Bkb3duQXJpYUxhYmVsID0gbG9jYWxlID09PSBudWxsIHx8IGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9jYWxlLmRyb3Bkb3duQXJpYUxhYmVsO1xuICB2YXIgbWVudSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKF9yZWYyKSB7XG4gICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxuICAgICAgICAgIGRvbUV2ZW50ID0gX3JlZjIuZG9tRXZlbnQ7XG4gICAgICBvblRhYkNsaWNrKGtleSwgZG9tRXZlbnQpO1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfSxcbiAgICBpZDogcG9wdXBJZCxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogc2VsZWN0ZWRJdGVtSWQsXG4gICAgc2VsZWN0ZWRLZXlzOiBbc2VsZWN0ZWRLZXldLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBkcm9wZG93bkFyaWFMYWJlbCAhPT0gdW5kZWZpbmVkID8gZHJvcGRvd25BcmlhTGFiZWwgOiAnZXhwYW5kZWQgZHJvcGRvd24nXG4gIH0sIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgIGtleTogdGFiLmtleSxcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChwb3B1cElkLCBcIi1cIikuY29uY2F0KHRhYi5rZXkpLFxuICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItcGFuZWwtXCIpLmNvbmNhdCh0YWIua2V5KSxcbiAgICAgIGRpc2FibGVkOiB0YWIuZGlzYWJsZWRcbiAgICB9LCB0YWIudGFiKTtcbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIHNlbGVjdE9mZnNldChvZmZzZXQpIHtcbiAgICB2YXIgZW5hYmxlZFRhYnMgPSB0YWJzLmZpbHRlcihmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gIXRhYi5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGVuYWJsZWRUYWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gdGFiLmtleSA9PT0gc2VsZWN0ZWRLZXk7XG4gICAgfSkgfHwgMDtcbiAgICB2YXIgbGVuID0gZW5hYmxlZFRhYnMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgc2VsZWN0ZWRJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgb2Zmc2V0ICsgbGVuKSAlIGxlbjtcbiAgICAgIHZhciB0YWIgPSBlbmFibGVkVGFic1tzZWxlY3RlZEluZGV4XTtcblxuICAgICAgaWYgKCF0YWIuZGlzYWJsZWQpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRLZXkodGFiLmtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgIHZhciB3aGljaCA9IGUud2hpY2g7XG5cbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIGlmIChbS2V5Q29kZS5ET1dOLCBLZXlDb2RlLlNQQUNFLCBLZXlDb2RlLkVOVEVSXS5pbmNsdWRlcyh3aGljaCkpIHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoICh3aGljaCkge1xuICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgICBzZWxlY3RPZmZzZXQoLTEpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICAgICAgc2VsZWN0T2Zmc2V0KDEpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS2V5Q29kZS5TUEFDRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5FTlRFUjpcbiAgICAgICAgaWYgKHNlbGVjdGVkS2V5ICE9PSBudWxsKSBvblRhYkNsaWNrKHNlbGVjdGVkS2V5LCBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gV2UgdXNlIHF1ZXJ5IGVsZW1lbnQgaGVyZSB0byBhdm9pZCBSZWFjdCBzdHJpY3Qgd2FybmluZ1xuICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RlZEl0ZW1JZCk7XG5cbiAgICBpZiAoZWxlICYmIGVsZS5zY3JvbGxJbnRvVmlldykge1xuICAgICAgZWxlLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEtleV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgc2V0U2VsZWN0ZWRLZXkobnVsbCk7XG4gICAgfVxuICB9LCBbb3Blbl0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1vcmVTdHlsZSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgcnRsID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JywgdGFiQmFyR3V0dGVyKTtcblxuICBpZiAoIXRhYnMubGVuZ3RoKSB7XG4gICAgbW9yZVN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBtb3JlU3R5bGUub3JkZXIgPSAxO1xuICB9XG5cbiAgdmFyIG92ZXJsYXlDbGFzc05hbWUgPSBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoZHJvcGRvd25QcmVmaXgsIFwiLXJ0bFwiKSwgcnRsKSk7XG4gIHZhciBtb3JlTm9kZSA9IG1vYmlsZSA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93biwge1xuICAgIHByZWZpeENsczogZHJvcGRvd25QcmVmaXgsXG4gICAgb3ZlcmxheTogbWVudSxcbiAgICB0cmlnZ2VyOiBbJ2hvdmVyJ10sXG4gICAgdmlzaWJsZTogb3BlbixcbiAgICB0cmFuc2l0aW9uTmFtZTogbW9yZVRyYW5zaXRpb25OYW1lLFxuICAgIG9uVmlzaWJsZUNoYW5nZTogc2V0T3BlbixcbiAgICBvdmVybGF5Q2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtbW9yZVwiKSxcbiAgICBzdHlsZTogbW9yZVN0eWxlLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtY29udHJvbHNcIjogcG9wdXBJZCxcbiAgICBpZDogXCJcIi5jb25jYXQoaWQsIFwiLW1vcmVcIiksXG4gICAgXCJhcmlhLWV4cGFuZGVkXCI6IG9wZW4sXG4gICAgb25LZXlEb3duOiBvbktleURvd25cbiAgfSwgbW9yZUljb24pKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtb3BlcmF0aW9uc1wiKSwgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiByZWZcbiAgfSwgbW9yZU5vZGUsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFkZEJ1dHRvbiwge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGVkaXRhYmxlOiBlZGl0YWJsZVxuICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKE9wZXJhdGlvbk5vZGUpOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcblxuZnVuY3Rpb24gVGFiTm9kZShfcmVmLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgcnRsID0gX3JlZi5ydGwsXG4gICAgICBfcmVmJHRhYiA9IF9yZWYudGFiLFxuICAgICAga2V5ID0gX3JlZiR0YWIua2V5LFxuICAgICAgdGFiID0gX3JlZiR0YWIudGFiLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmJHRhYi5kaXNhYmxlZCxcbiAgICAgIGNsb3NlSWNvbiA9IF9yZWYkdGFiLmNsb3NlSWNvbixcbiAgICAgIHRhYkJhckd1dHRlciA9IF9yZWYudGFiQmFyR3V0dGVyLFxuICAgICAgdGFiUG9zaXRpb24gPSBfcmVmLnRhYlBvc2l0aW9uLFxuICAgICAgY2xvc2FibGUgPSBfcmVmLmNsb3NhYmxlLFxuICAgICAgcmVuZGVyV3JhcHBlciA9IF9yZWYucmVuZGVyV3JhcHBlcixcbiAgICAgIHJlbW92ZUFyaWFMYWJlbCA9IF9yZWYucmVtb3ZlQXJpYUxhYmVsLFxuICAgICAgZWRpdGFibGUgPSBfcmVmLmVkaXRhYmxlLFxuICAgICAgb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIG9uUmVtb3ZlID0gX3JlZi5vblJlbW92ZSxcbiAgICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXM7XG4gIHZhciB0YWJQcmVmaXggPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRhYlwiKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25SZW1vdmU7XG4gIH0sIFtdKTtcbiAgdmFyIG5vZGVTdHlsZSA9IHt9O1xuXG4gIGlmICh0YWJQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGFiUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgbm9kZVN0eWxlW3J0bCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCddID0gdGFiQmFyR3V0dGVyO1xuICB9IGVsc2Uge1xuICAgIG5vZGVTdHlsZS5tYXJnaW5Cb3R0b20gPSB0YWJCYXJHdXR0ZXI7XG4gIH1cblxuICB2YXIgcmVtb3ZhYmxlID0gZWRpdGFibGUgJiYgY2xvc2FibGUgIT09IGZhbHNlICYmICFkaXNhYmxlZDtcblxuICBmdW5jdGlvbiBvbkludGVybmFsQ2xpY2soZSkge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIG9uQ2xpY2soZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlbW92ZVRhYihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZWRpdGFibGUub25FZGl0KCdyZW1vdmUnLCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGV2ZW50OiBldmVudFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIG5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHRhYlByZWZpeCwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQodGFiUHJlZml4LCBcIi13aXRoLXJlbW92ZVwiKSwgcmVtb3ZhYmxlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLWFjdGl2ZVwiKSwgYWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9jbGFzc05hbWVzKSksXG4gICAgc3R5bGU6IG5vZGVTdHlsZSxcbiAgICBvbkNsaWNrOiBvbkludGVybmFsQ2xpY2tcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJvbGU6IFwidGFiXCIsXG4gICAgXCJhcmlhLXNlbGVjdGVkXCI6IGFjdGl2ZSxcbiAgICBpZDogaWQgJiYgXCJcIi5jb25jYXQoaWQsIFwiLXRhYi1cIikuY29uY2F0KGtleSksXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLWJ0blwiKSxcbiAgICBcImFyaWEtY29udHJvbHNcIjogaWQgJiYgXCJcIi5jb25jYXQoaWQsIFwiLXBhbmVsLVwiKS5jb25jYXQoa2V5KSxcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gbnVsbCA6IDAsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25JbnRlcm5hbENsaWNrKGUpO1xuICAgIH0sXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKFtLZXlDb2RlLlNQQUNFLCBLZXlDb2RlLkVOVEVSXS5pbmNsdWRlcyhlLndoaWNoKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uSW50ZXJuYWxDbGljayhlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRm9jdXM6IG9uRm9jdXNcbiAgfSwgdGFiKSwgcmVtb3ZhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiByZW1vdmVBcmlhTGFiZWwgfHwgJ3JlbW92ZScsXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLXJlbW92ZVwiKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblJlbW92ZVRhYihlKTtcbiAgICB9XG4gIH0sIGNsb3NlSWNvbiB8fCBlZGl0YWJsZS5yZW1vdmVJY29uIHx8ICfDlycpKTtcblxuICBpZiAocmVuZGVyV3JhcHBlcikge1xuICAgIG5vZGUgPSByZW5kZXJXcmFwcGVyKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFRhYk5vZGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmMtcmVzaXplLW9ic2VydmVyJztcbmltcG9ydCB1c2VSYWYsIHsgdXNlUmFmU3RhdGUgfSBmcm9tICcuLi9ob29rcy91c2VSYWYnO1xuaW1wb3J0IFRhYk5vZGUgZnJvbSAnLi9UYWJOb2RlJztcbmltcG9ydCB1c2VPZmZzZXRzIGZyb20gJy4uL2hvb2tzL3VzZU9mZnNldHMnO1xuaW1wb3J0IHVzZVZpc2libGVSYW5nZSBmcm9tICcuLi9ob29rcy91c2VWaXNpYmxlUmFuZ2UnO1xuaW1wb3J0IE9wZXJhdGlvbk5vZGUgZnJvbSAnLi9PcGVyYXRpb25Ob2RlJztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4uL1RhYkNvbnRleHQnO1xuaW1wb3J0IHVzZVRvdWNoTW92ZSBmcm9tICcuLi9ob29rcy91c2VUb3VjaE1vdmUnO1xuaW1wb3J0IHVzZVJlZnMgZnJvbSAnLi4vaG9va3MvdXNlUmVmcyc7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gJy4vQWRkQnV0dG9uJztcbmltcG9ydCB1c2VTeW5jU3RhdGUgZnJvbSAnLi4vaG9va3MvdXNlU3luY1N0YXRlJztcblxudmFyIEV4dHJhQ29udGVudCA9IGZ1bmN0aW9uIEV4dHJhQ29udGVudChfcmVmKSB7XG4gIHZhciBwb3NpdGlvbiA9IF9yZWYucG9zaXRpb24sXG4gICAgICBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGV4dHJhID0gX3JlZi5leHRyYTtcbiAgaWYgKCFleHRyYSkgcmV0dXJuIG51bGw7XG4gIHZhciBjb250ZW50O1xuICB2YXIgYXNzZXJ0RXh0cmEgPSBleHRyYTtcblxuICBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICBjb250ZW50ID0gYXNzZXJ0RXh0cmEucmlnaHQgfHwgIWFzc2VydEV4dHJhLmxlZnQgJiYgYXNzZXJ0RXh0cmEgfHwgbnVsbDtcbiAgfVxuXG4gIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgY29udGVudCA9IGFzc2VydEV4dHJhLmxlZnQgfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1leHRyYS1jb250ZW50XCIpXG4gIH0sIGNvbnRlbnQpIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIFRhYk5hdkxpc3QocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJDb250ZXh0KSxcbiAgICAgIHByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LnByZWZpeENscyxcbiAgICAgIHRhYnMgPSBfUmVhY3QkdXNlQ29udGV4dC50YWJzO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGFuaW1hdGVkID0gcHJvcHMuYW5pbWF0ZWQsXG4gICAgICBhY3RpdmVLZXkgPSBwcm9wcy5hY3RpdmVLZXksXG4gICAgICBydGwgPSBwcm9wcy5ydGwsXG4gICAgICBleHRyYSA9IHByb3BzLmV4dHJhLFxuICAgICAgZWRpdGFibGUgPSBwcm9wcy5lZGl0YWJsZSxcbiAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgIHRhYlBvc2l0aW9uID0gcHJvcHMudGFiUG9zaXRpb24sXG4gICAgICB0YWJCYXJHdXR0ZXIgPSBwcm9wcy50YWJCYXJHdXR0ZXIsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb25UYWJDbGljayA9IHByb3BzLm9uVGFiQ2xpY2ssXG4gICAgICBvblRhYlNjcm9sbCA9IHByb3BzLm9uVGFiU2Nyb2xsO1xuICB2YXIgdGFic1dyYXBwZXJSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIHRhYkxpc3RSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIG9wZXJhdGlvbnNSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGlubmVyQWRkQnV0dG9uUmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIF91c2VSZWZzID0gdXNlUmVmcygpLFxuICAgICAgX3VzZVJlZnMyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVJlZnMsIDIpLFxuICAgICAgZ2V0QnRuUmVmID0gX3VzZVJlZnMyWzBdLFxuICAgICAgcmVtb3ZlQnRuUmVmID0gX3VzZVJlZnMyWzFdO1xuXG4gIHZhciB0YWJQb3NpdGlvblRvcE9yQm90dG9tID0gdGFiUG9zaXRpb24gPT09ICd0b3AnIHx8IHRhYlBvc2l0aW9uID09PSAnYm90dG9tJztcblxuICB2YXIgX3VzZVN5bmNTdGF0ZSA9IHVzZVN5bmNTdGF0ZSgwLCBmdW5jdGlvbiAobmV4dCwgcHJldikge1xuICAgIGlmICh0YWJQb3NpdGlvblRvcE9yQm90dG9tICYmIG9uVGFiU2Nyb2xsKSB7XG4gICAgICBvblRhYlNjcm9sbCh7XG4gICAgICAgIGRpcmVjdGlvbjogbmV4dCA+IHByZXYgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLFxuICAgICAgX3VzZVN5bmNTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3luY1N0YXRlLCAyKSxcbiAgICAgIHRyYW5zZm9ybUxlZnQgPSBfdXNlU3luY1N0YXRlMlswXSxcbiAgICAgIHNldFRyYW5zZm9ybUxlZnQgPSBfdXNlU3luY1N0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN5bmNTdGF0ZTMgPSB1c2VTeW5jU3RhdGUoMCwgZnVuY3Rpb24gKG5leHQsIHByZXYpIHtcbiAgICBpZiAoIXRhYlBvc2l0aW9uVG9wT3JCb3R0b20gJiYgb25UYWJTY3JvbGwpIHtcbiAgICAgIG9uVGFiU2Nyb2xsKHtcbiAgICAgICAgZGlyZWN0aW9uOiBuZXh0ID4gcHJldiA/ICd0b3AnIDogJ2JvdHRvbSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksXG4gICAgICBfdXNlU3luY1N0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTeW5jU3RhdGUzLCAyKSxcbiAgICAgIHRyYW5zZm9ybVRvcCA9IF91c2VTeW5jU3RhdGU0WzBdLFxuICAgICAgc2V0VHJhbnNmb3JtVG9wID0gX3VzZVN5bmNTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB3cmFwcGVyU2Nyb2xsV2lkdGggPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0V3JhcHBlclNjcm9sbFdpZHRoID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgd3JhcHBlclNjcm9sbEhlaWdodCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRXcmFwcGVyU2Nyb2xsSGVpZ2h0ID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgd3JhcHBlckNvbnRlbnRXaWR0aCA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRXcmFwcGVyQ29udGVudFdpZHRoID0gX3VzZVN0YXRlNlsxXTtcblxuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgd3JhcHBlckNvbnRlbnRIZWlnaHQgPSBfdXNlU3RhdGU4WzBdLFxuICAgICAgc2V0V3JhcHBlckNvbnRlbnRIZWlnaHQgPSBfdXNlU3RhdGU4WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU5ID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGUxMCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTksIDIpLFxuICAgICAgd3JhcHBlcldpZHRoID0gX3VzZVN0YXRlMTBbMF0sXG4gICAgICBzZXRXcmFwcGVyV2lkdGggPSBfdXNlU3RhdGUxMFsxXTtcblxuICB2YXIgX3VzZVN0YXRlMTEgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTEyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMTEsIDIpLFxuICAgICAgd3JhcHBlckhlaWdodCA9IF91c2VTdGF0ZTEyWzBdLFxuICAgICAgc2V0V3JhcHBlckhlaWdodCA9IF91c2VTdGF0ZTEyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUxMyA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlMTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxMywgMiksXG4gICAgICBhZGRXaWR0aCA9IF91c2VTdGF0ZTE0WzBdLFxuICAgICAgc2V0QWRkV2lkdGggPSBfdXNlU3RhdGUxNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlMTUgPSB1c2VTdGF0ZSgwKSxcbiAgICAgIF91c2VTdGF0ZTE2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMTUsIDIpLFxuICAgICAgYWRkSGVpZ2h0ID0gX3VzZVN0YXRlMTZbMF0sXG4gICAgICBzZXRBZGRIZWlnaHQgPSBfdXNlU3RhdGUxNlsxXTtcblxuICB2YXIgX3VzZVJhZlN0YXRlID0gdXNlUmFmU3RhdGUobmV3IE1hcCgpKSxcbiAgICAgIF91c2VSYWZTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmFmU3RhdGUsIDIpLFxuICAgICAgdGFiU2l6ZXMgPSBfdXNlUmFmU3RhdGUyWzBdLFxuICAgICAgc2V0VGFiU2l6ZXMgPSBfdXNlUmFmU3RhdGUyWzFdO1xuXG4gIHZhciB0YWJPZmZzZXRzID0gdXNlT2Zmc2V0cyh0YWJzLCB0YWJTaXplcywgd3JhcHBlclNjcm9sbFdpZHRoKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gVXRpbCA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9wZXJhdGlvbnNIaWRkZW5DbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5hdi1vcGVyYXRpb25zLWhpZGRlblwiKTtcbiAgdmFyIHRyYW5zZm9ybU1pbiA9IDA7XG4gIHZhciB0cmFuc2Zvcm1NYXggPSAwO1xuXG4gIGlmICghdGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgIHRyYW5zZm9ybU1pbiA9IE1hdGgubWluKDAsIHdyYXBwZXJIZWlnaHQgLSB3cmFwcGVyU2Nyb2xsSGVpZ2h0KTtcbiAgICB0cmFuc2Zvcm1NYXggPSAwO1xuICB9IGVsc2UgaWYgKHJ0bCkge1xuICAgIHRyYW5zZm9ybU1pbiA9IDA7XG4gICAgdHJhbnNmb3JtTWF4ID0gTWF0aC5tYXgoMCwgd3JhcHBlclNjcm9sbFdpZHRoIC0gd3JhcHBlcldpZHRoKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NaW4gPSBNYXRoLm1pbigwLCB3cmFwcGVyV2lkdGggLSB3cmFwcGVyU2Nyb2xsV2lkdGgpO1xuICAgIHRyYW5zZm9ybU1heCA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBhbGlnbkluUmFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPCB0cmFuc2Zvcm1NaW4pIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm1NaW47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID4gdHJhbnNmb3JtTWF4KSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtTWF4O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IE1vYmlsZSA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciB0b3VjaE1vdmluZ1JlZiA9IHVzZVJlZigpO1xuXG4gIHZhciBfdXNlU3RhdGUxNyA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUxOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTE3LCAyKSxcbiAgICAgIGxvY2tBbmltYXRpb24gPSBfdXNlU3RhdGUxOFswXSxcbiAgICAgIHNldExvY2tBbmltYXRpb24gPSBfdXNlU3RhdGUxOFsxXTtcblxuICBmdW5jdGlvbiBkb0xvY2tBbmltYXRpb24oKSB7XG4gICAgc2V0TG9ja0FuaW1hdGlvbihEYXRlLm5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyVG91Y2hNb3ZpbmcoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0b3VjaE1vdmluZ1JlZi5jdXJyZW50KTtcbiAgfVxuXG4gIHVzZVRvdWNoTW92ZSh0YWJzV3JhcHBlclJlZiwgZnVuY3Rpb24gKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICBmdW5jdGlvbiBkb01vdmUoc2V0U3RhdGUsIG9mZnNldCkge1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGFsaWduSW5SYW5nZSh2YWx1ZSArIG9mZnNldCk7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJQb3NpdGlvblRvcE9yQm90dG9tKSB7XG4gICAgICAvLyBTa2lwIHNjcm9sbCBpZiBwbGFjZSBpcyBlbm91Z2hcbiAgICAgIGlmICh3cmFwcGVyV2lkdGggPj0gd3JhcHBlclNjcm9sbFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZG9Nb3ZlKHNldFRyYW5zZm9ybUxlZnQsIG9mZnNldFgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod3JhcHBlckhlaWdodCA+PSB3cmFwcGVyU2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZG9Nb3ZlKHNldFRyYW5zZm9ybVRvcCwgb2Zmc2V0WSk7XG4gICAgfVxuXG4gICAgY2xlYXJUb3VjaE1vdmluZygpO1xuICAgIGRvTG9ja0FuaW1hdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRvdWNoTW92aW5nKCk7XG5cbiAgICBpZiAobG9ja0FuaW1hdGlvbikge1xuICAgICAgdG91Y2hNb3ZpbmdSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9ja0FuaW1hdGlvbigwKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsZWFyVG91Y2hNb3Zpbmc7XG4gIH0sIFtsb2NrQW5pbWF0aW9uXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gU2Nyb2xsID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvVGFiKCkge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGFjdGl2ZUtleTtcbiAgICB2YXIgdGFiT2Zmc2V0ID0gdGFiT2Zmc2V0cy5nZXQoa2V5KSB8fCB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMFxuICAgIH07XG5cbiAgICBpZiAodGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgICAgLy8gPT09PT09PT09PT09IEFsaWduIHdpdGggdG9wICYgYm90dG9tID09PT09PT09PT09PVxuICAgICAgdmFyIG5ld1RyYW5zZm9ybSA9IHRyYW5zZm9ybUxlZnQ7IC8vIFJUTFxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIGlmICh0YWJPZmZzZXQucmlnaHQgPCB0cmFuc2Zvcm1MZWZ0KSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtID0gdGFiT2Zmc2V0LnJpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRhYk9mZnNldC5yaWdodCArIHRhYk9mZnNldC53aWR0aCA+IHRyYW5zZm9ybUxlZnQgKyB3cmFwcGVyV2lkdGgpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSB0YWJPZmZzZXQucmlnaHQgKyB0YWJPZmZzZXQud2lkdGggLSB3cmFwcGVyV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTFRSXG4gICAgICBlbHNlIGlmICh0YWJPZmZzZXQubGVmdCA8IC10cmFuc2Zvcm1MZWZ0KSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtID0gLXRhYk9mZnNldC5sZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKHRhYk9mZnNldC5sZWZ0ICsgdGFiT2Zmc2V0LndpZHRoID4gLXRyYW5zZm9ybUxlZnQgKyB3cmFwcGVyV2lkdGgpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYk9mZnNldC5sZWZ0ICsgdGFiT2Zmc2V0LndpZHRoIC0gd3JhcHBlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICBzZXRUcmFuc2Zvcm1Ub3AoMCk7XG4gICAgICBzZXRUcmFuc2Zvcm1MZWZ0KGFsaWduSW5SYW5nZShuZXdUcmFuc2Zvcm0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gPT09PT09PT09PT09IEFsaWduIHdpdGggbGVmdCAmIHJpZ2h0ID09PT09PT09PT09PVxuICAgICAgdmFyIF9uZXdUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1Ub3A7XG5cbiAgICAgIGlmICh0YWJPZmZzZXQudG9wIDwgLXRyYW5zZm9ybVRvcCkge1xuICAgICAgICBfbmV3VHJhbnNmb3JtID0gLXRhYk9mZnNldC50b3A7XG4gICAgICB9IGVsc2UgaWYgKHRhYk9mZnNldC50b3AgKyB0YWJPZmZzZXQuaGVpZ2h0ID4gLXRyYW5zZm9ybVRvcCArIHdyYXBwZXJIZWlnaHQpIHtcbiAgICAgICAgX25ld1RyYW5zZm9ybSA9IC0odGFiT2Zmc2V0LnRvcCArIHRhYk9mZnNldC5oZWlnaHQgLSB3cmFwcGVySGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgc2V0VHJhbnNmb3JtTGVmdCgwKTtcbiAgICAgIHNldFRyYW5zZm9ybVRvcChhbGlnbkluUmFuZ2UoX25ld1RyYW5zZm9ybSkpO1xuICAgIH1cbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBUYWIgPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUmVuZGVyIHRhYiBub2RlICYgY29sbGVjdCB0YWIgb2Zmc2V0XG5cblxuICB2YXIgX3VzZVZpc2libGVSYW5nZSA9IHVzZVZpc2libGVSYW5nZSh0YWJPZmZzZXRzLCB7XG4gICAgd2lkdGg6IHdyYXBwZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdyYXBwZXJIZWlnaHQsXG4gICAgbGVmdDogdHJhbnNmb3JtTGVmdCxcbiAgICB0b3A6IHRyYW5zZm9ybVRvcFxuICB9LCB7XG4gICAgd2lkdGg6IHdyYXBwZXJDb250ZW50V2lkdGgsXG4gICAgaGVpZ2h0OiB3cmFwcGVyQ29udGVudEhlaWdodFxuICB9LCB7XG4gICAgd2lkdGg6IGFkZFdpZHRoLFxuICAgIGhlaWdodDogYWRkSGVpZ2h0XG4gIH0sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgIHRhYnM6IHRhYnNcbiAgfSkpLFxuICAgICAgX3VzZVZpc2libGVSYW5nZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlVmlzaWJsZVJhbmdlLCAyKSxcbiAgICAgIHZpc2libGVTdGFydCA9IF91c2VWaXNpYmxlUmFuZ2UyWzBdLFxuICAgICAgdmlzaWJsZUVuZCA9IF91c2VWaXNpYmxlUmFuZ2UyWzFdO1xuXG4gIHZhciB0YWJOb2RlcyA9IHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICB2YXIga2V5ID0gdGFiLmtleTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiTm9kZSwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBrZXk6IGtleSxcbiAgICAgIHJ0bDogcnRsLFxuICAgICAgdGFiOiB0YWIsXG4gICAgICBjbG9zYWJsZTogdGFiLmNsb3NhYmxlLFxuICAgICAgZWRpdGFibGU6IGVkaXRhYmxlLFxuICAgICAgYWN0aXZlOiBrZXkgPT09IGFjdGl2ZUtleSxcbiAgICAgIHRhYlBvc2l0aW9uOiB0YWJQb3NpdGlvbixcbiAgICAgIHRhYkJhckd1dHRlcjogdGFiQmFyR3V0dGVyLFxuICAgICAgcmVuZGVyV3JhcHBlcjogY2hpbGRyZW4sXG4gICAgICByZW1vdmVBcmlhTGFiZWw6IGxvY2FsZSA9PT0gbnVsbCB8fCBsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvY2FsZS5yZW1vdmVBcmlhTGFiZWwsXG4gICAgICByZWY6IGdldEJ0blJlZihrZXkpLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIG9uVGFiQ2xpY2soa2V5LCBlKTtcbiAgICAgIH0sXG4gICAgICBvblJlbW92ZTogZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgICAgIHJlbW92ZUJ0blJlZihrZXkpO1xuICAgICAgfSxcbiAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICAgIHNjcm9sbFRvVGFiKGtleSk7XG4gICAgICAgIGRvTG9ja0FuaW1hdGlvbigpOyAvLyBGb2N1cyBlbGVtZW50IHdpbGwgbWFrZSBzY3JvbGxMZWZ0IGNoYW5nZSB3aGljaCB3ZSBzaG91bGQgcmVzZXQgYmFja1xuXG4gICAgICAgIGlmICghcnRsKSB7XG4gICAgICAgICAgdGFic1dyYXBwZXJSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYnNXcmFwcGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHZhciBvbkxpc3RIb2xkZXJSZXNpemUgPSB1c2VSYWYoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGFic1dyYXBwZXJSZWYkY3VycmUsIF90YWJzV3JhcHBlclJlZiRjdXJyZTIsIF9pbm5lckFkZEJ1dHRvblJlZiRjdSwgX2lubmVyQWRkQnV0dG9uUmVmJGN1MiwgX29wZXJhdGlvbnNSZWYkY3VycmVuLCBfb3BlcmF0aW9uc1JlZiRjdXJyZW4yLCBfdGFiTGlzdFJlZiRjdXJyZW50LCBfdGFiTGlzdFJlZiRjdXJyZW50MiwgX29wZXJhdGlvbnNSZWYkY3VycmVuMztcblxuICAgIC8vIFVwZGF0ZSB3cmFwcGVyIHJlY29yZHNcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSAoKF90YWJzV3JhcHBlclJlZiRjdXJyZSA9IHRhYnNXcmFwcGVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90YWJzV3JhcHBlclJlZiRjdXJyZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnNXcmFwcGVyUmVmJGN1cnJlLm9mZnNldFdpZHRoKSB8fCAwO1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSAoKF90YWJzV3JhcHBlclJlZiRjdXJyZTIgPSB0YWJzV3JhcHBlclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGFic1dyYXBwZXJSZWYkY3VycmUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFic1dyYXBwZXJSZWYkY3VycmUyLm9mZnNldEhlaWdodCkgfHwgMDtcbiAgICB2YXIgbmV3QWRkV2lkdGggPSAoKF9pbm5lckFkZEJ1dHRvblJlZiRjdSA9IGlubmVyQWRkQnV0dG9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbm5lckFkZEJ1dHRvblJlZiRjdSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lubmVyQWRkQnV0dG9uUmVmJGN1Lm9mZnNldFdpZHRoKSB8fCAwO1xuICAgIHZhciBuZXdBZGRIZWlnaHQgPSAoKF9pbm5lckFkZEJ1dHRvblJlZiRjdTIgPSBpbm5lckFkZEJ1dHRvblJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5uZXJBZGRCdXR0b25SZWYkY3UyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5uZXJBZGRCdXR0b25SZWYkY3UyLm9mZnNldEhlaWdodCkgfHwgMDtcbiAgICB2YXIgbmV3T3BlcmF0aW9uV2lkdGggPSAoKF9vcGVyYXRpb25zUmVmJGN1cnJlbiA9IG9wZXJhdGlvbnNSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX29wZXJhdGlvbnNSZWYkY3VycmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3BlcmF0aW9uc1JlZiRjdXJyZW4ub2Zmc2V0V2lkdGgpIHx8IDA7XG4gICAgdmFyIG5ld09wZXJhdGlvbkhlaWdodCA9ICgoX29wZXJhdGlvbnNSZWYkY3VycmVuMiA9IG9wZXJhdGlvbnNSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX29wZXJhdGlvbnNSZWYkY3VycmVuMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wZXJhdGlvbnNSZWYkY3VycmVuMi5vZmZzZXRIZWlnaHQpIHx8IDA7XG4gICAgc2V0V3JhcHBlcldpZHRoKG9mZnNldFdpZHRoKTtcbiAgICBzZXRXcmFwcGVySGVpZ2h0KG9mZnNldEhlaWdodCk7XG4gICAgc2V0QWRkV2lkdGgobmV3QWRkV2lkdGgpO1xuICAgIHNldEFkZEhlaWdodChuZXdBZGRIZWlnaHQpO1xuICAgIHZhciBuZXdXcmFwcGVyU2Nyb2xsV2lkdGggPSAoKChfdGFiTGlzdFJlZiRjdXJyZW50ID0gdGFiTGlzdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGFiTGlzdFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFiTGlzdFJlZiRjdXJyZW50Lm9mZnNldFdpZHRoKSB8fCAwKSAtIG5ld0FkZFdpZHRoO1xuICAgIHZhciBuZXdXcmFwcGVyU2Nyb2xsSGVpZ2h0ID0gKCgoX3RhYkxpc3RSZWYkY3VycmVudDIgPSB0YWJMaXN0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90YWJMaXN0UmVmJGN1cnJlbnQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFiTGlzdFJlZiRjdXJyZW50Mi5vZmZzZXRIZWlnaHQpIHx8IDApIC0gbmV3QWRkSGVpZ2h0O1xuICAgIHNldFdyYXBwZXJTY3JvbGxXaWR0aChuZXdXcmFwcGVyU2Nyb2xsV2lkdGgpO1xuICAgIHNldFdyYXBwZXJTY3JvbGxIZWlnaHQobmV3V3JhcHBlclNjcm9sbEhlaWdodCk7XG4gICAgdmFyIGlzT3BlcmF0aW9uSGlkZGVuID0gKF9vcGVyYXRpb25zUmVmJGN1cnJlbjMgPSBvcGVyYXRpb25zUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9vcGVyYXRpb25zUmVmJGN1cnJlbjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcGVyYXRpb25zUmVmJGN1cnJlbjMuY2xhc3NOYW1lLmluY2x1ZGVzKG9wZXJhdGlvbnNIaWRkZW5DbGFzc05hbWUpO1xuICAgIHNldFdyYXBwZXJDb250ZW50V2lkdGgobmV3V3JhcHBlclNjcm9sbFdpZHRoIC0gKGlzT3BlcmF0aW9uSGlkZGVuID8gMCA6IG5ld09wZXJhdGlvbldpZHRoKSk7XG4gICAgc2V0V3JhcHBlckNvbnRlbnRIZWlnaHQobmV3V3JhcHBlclNjcm9sbEhlaWdodCAtIChpc09wZXJhdGlvbkhpZGRlbiA/IDAgOiBuZXdPcGVyYXRpb25IZWlnaHQpKTsgLy8gVXBkYXRlIGJ1dHRvbnMgcmVjb3Jkc1xuXG4gICAgc2V0VGFiU2l6ZXMoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5ld1NpemVzID0gbmV3IE1hcCgpO1xuICAgICAgdGFicy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5O1xuICAgICAgICB2YXIgYnRuTm9kZSA9IGdldEJ0blJlZihrZXkpLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKGJ0bk5vZGUpIHtcbiAgICAgICAgICBuZXdTaXplcy5zZXQoa2V5LCB7XG4gICAgICAgICAgICB3aWR0aDogYnRuTm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYnRuTm9kZS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiBidG5Ob2RlLm9mZnNldExlZnQsXG4gICAgICAgICAgICB0b3A6IGJ0bk5vZGUub2Zmc2V0VG9wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1NpemVzO1xuICAgIH0pO1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IERyb3Bkb3duID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIHN0YXJ0SGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoMCwgdmlzaWJsZVN0YXJ0KTtcbiAgdmFyIGVuZEhpZGRlblRhYnMgPSB0YWJzLnNsaWNlKHZpc2libGVFbmQgKyAxKTtcbiAgdmFyIGhpZGRlblRhYnMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0YXJ0SGlkZGVuVGFicyksIF90b0NvbnN1bWFibGVBcnJheShlbmRIaWRkZW5UYWJzKSk7IC8vID09PT09PT09PT09PT09PT09PT0gTGluayAmIE9wZXJhdGlvbnMgPT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBfdXNlU3RhdGUxOSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyMCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTE5LCAyKSxcbiAgICAgIGlua1N0eWxlID0gX3VzZVN0YXRlMjBbMF0sXG4gICAgICBzZXRJbmtTdHlsZSA9IF91c2VTdGF0ZTIwWzFdO1xuXG4gIHZhciBhY3RpdmVUYWJPZmZzZXQgPSB0YWJPZmZzZXRzLmdldChhY3RpdmVLZXkpOyAvLyBEZWxheSBzZXQgaW5rIHN0eWxlIHRvIGF2b2lkIHJlbW92ZSB0YWIgYmxpbmtcblxuICB2YXIgaW5rQmFyUmFmUmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gY2xlYW5JbmtCYXJSYWYoKSB7XG4gICAgcmFmLmNhbmNlbChpbmtCYXJSYWZSZWYuY3VycmVudCk7XG4gIH1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXdJbmtTdHlsZSA9IHt9O1xuXG4gICAgaWYgKGFjdGl2ZVRhYk9mZnNldCkge1xuICAgICAgaWYgKHRhYlBvc2l0aW9uVG9wT3JCb3R0b20pIHtcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIG5ld0lua1N0eWxlLnJpZ2h0ID0gYWN0aXZlVGFiT2Zmc2V0LnJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0lua1N0eWxlLmxlZnQgPSBhY3RpdmVUYWJPZmZzZXQubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lua1N0eWxlLndpZHRoID0gYWN0aXZlVGFiT2Zmc2V0LndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SW5rU3R5bGUudG9wID0gYWN0aXZlVGFiT2Zmc2V0LnRvcDtcbiAgICAgICAgbmV3SW5rU3R5bGUuaGVpZ2h0ID0gYWN0aXZlVGFiT2Zmc2V0LmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhbklua0JhclJhZigpO1xuICAgIGlua0JhclJhZlJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElua1N0eWxlKG5ld0lua1N0eWxlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYW5JbmtCYXJSYWY7XG4gIH0sIFthY3RpdmVUYWJPZmZzZXQsIHRhYlBvc2l0aW9uVG9wT3JCb3R0b20sIHJ0bF0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNjcm9sbFRvVGFiKCk7XG4gIH0sIFthY3RpdmVLZXksIGFjdGl2ZVRhYk9mZnNldCwgdGFiT2Zmc2V0cywgdGFiUG9zaXRpb25Ub3BPckJvdHRvbV0pOyAvLyBTaG91bGQgcmVjYWxjdWxhdGUgd2hlbiBydGwgY2hhbmdlZFxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgb25MaXN0SG9sZGVyUmVzaXplKCk7XG4gIH0sIFtydGwsIHRhYkJhckd1dHRlciwgYWN0aXZlS2V5LCB0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXk7XG4gIH0pLmpvaW4oJ18nKV0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgaGFzRHJvcGRvd24gPSAhIWhpZGRlblRhYnMubGVuZ3RoO1xuICB2YXIgd3JhcFByZWZpeCA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LXdyYXBcIik7XG4gIHZhciBwaW5nTGVmdDtcbiAgdmFyIHBpbmdSaWdodDtcbiAgdmFyIHBpbmdUb3A7XG4gIHZhciBwaW5nQm90dG9tO1xuXG4gIGlmICh0YWJQb3NpdGlvblRvcE9yQm90dG9tKSB7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgcGluZ1JpZ2h0ID0gdHJhbnNmb3JtTGVmdCA+IDA7XG4gICAgICBwaW5nTGVmdCA9IHRyYW5zZm9ybUxlZnQgKyB3cmFwcGVyV2lkdGggPCB3cmFwcGVyU2Nyb2xsV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpbmdMZWZ0ID0gdHJhbnNmb3JtTGVmdCA8IDA7XG4gICAgICBwaW5nUmlnaHQgPSAtdHJhbnNmb3JtTGVmdCArIHdyYXBwZXJXaWR0aCA8IHdyYXBwZXJTY3JvbGxXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGluZ1RvcCA9IHRyYW5zZm9ybVRvcCA8IDA7XG4gICAgcGluZ0JvdHRvbSA9IC10cmFuc2Zvcm1Ub3AgKyB3cmFwcGVySGVpZ2h0IDwgd3JhcHBlclNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJ0YWJsaXN0XCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2XCIpLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bigpIHtcbiAgICAgIC8vIE5vIG5lZWQgYW5pbWF0aW9uIHdoZW4gdXNlIGtleWJvYXJkXG4gICAgICBkb0xvY2tBbmltYXRpb24oKTtcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV4dHJhQ29udGVudCwge1xuICAgIHBvc2l0aW9uOiBcImxlZnRcIixcbiAgICBleHRyYTogZXh0cmEsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25SZXNpemU6IG9uTGlzdEhvbGRlclJlc2l6ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHdyYXBQcmVmaXgsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctbGVmdFwiKSwgcGluZ0xlZnQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctcmlnaHRcIiksIHBpbmdSaWdodCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQod3JhcFByZWZpeCwgXCItcGluZy10b3BcIiksIHBpbmdUb3ApLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctYm90dG9tXCIpLCBwaW5nQm90dG9tKSwgX2NsYXNzTmFtZXMpKSxcbiAgICByZWY6IHRhYnNXcmFwcGVyUmVmXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25SZXNpemU6IG9uTGlzdEhvbGRlclJlc2l6ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiB0YWJMaXN0UmVmLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtbGlzdFwiKSxcbiAgICBzdHlsZToge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtTGVmdCwgXCJweCwgXCIpLmNvbmNhdCh0cmFuc2Zvcm1Ub3AsIFwicHgpXCIpLFxuICAgICAgdHJhbnNpdGlvbjogbG9ja0FuaW1hdGlvbiA/ICdub25lJyA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSwgdGFiTm9kZXMsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFkZEJ1dHRvbiwge1xuICAgIHJlZjogaW5uZXJBZGRCdXR0b25SZWYsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZWRpdGFibGU6IGVkaXRhYmxlLFxuICAgIHN0eWxlOiB7XG4gICAgICB2aXNpYmlsaXR5OiBoYXNEcm9wZG93biA/ICdoaWRkZW4nIDogbnVsbFxuICAgIH1cbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmstYmFyXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5rLWJhci1hbmltYXRlZFwiKSwgYW5pbWF0ZWQuaW5rQmFyKSksXG4gICAgc3R5bGU6IGlua1N0eWxlXG4gIH0pKSkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3BlcmF0aW9uTm9kZSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiBvcGVyYXRpb25zUmVmLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRhYnM6IGhpZGRlblRhYnMsXG4gICAgY2xhc3NOYW1lOiAhaGFzRHJvcGRvd24gJiYgb3BlcmF0aW9uc0hpZGRlbkNsYXNzTmFtZVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV4dHJhQ29udGVudCwge1xuICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gIH0pKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihUYWJOYXZMaXN0KTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYlBhbmUoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBmb3JjZVJlbmRlciA9IF9yZWYuZm9yY2VSZW5kZXIsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgYW5pbWF0ZWQgPSBfcmVmLmFuaW1hdGVkLFxuICAgICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IF9yZWYuZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgIHRhYktleSA9IF9yZWYudGFiS2V5LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmb3JjZVJlbmRlciksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHZpc2l0ZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VmlzaXRlZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRWaXNpdGVkKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZGVzdHJveUluYWN0aXZlVGFiUGFuZSkge1xuICAgICAgc2V0VmlzaXRlZChmYWxzZSk7XG4gICAgfVxuICB9LCBbYWN0aXZlLCBkZXN0cm95SW5hY3RpdmVUYWJQYW5lXSk7XG4gIHZhciBtZXJnZWRTdHlsZSA9IHt9O1xuXG4gIGlmICghYWN0aXZlKSB7XG4gICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICBtZXJnZWRTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBtZXJnZWRTdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgbWVyZ2VkU3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogaWQgJiYgXCJcIi5jb25jYXQoaWQsIFwiLXBhbmVsLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgdGFiSW5kZXg6IGFjdGl2ZSA/IDAgOiAtMSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItdGFiLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICBcImFyaWEtaGlkZGVuXCI6ICFhY3RpdmUsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkU3R5bGUpLCBzdHlsZSksXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFicGFuZVwiKSwgYWN0aXZlICYmIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFicGFuZS1hY3RpdmVcIiksIGNsYXNzTmFtZSlcbiAgfSwgKGFjdGl2ZSB8fCB2aXNpdGVkIHx8IGZvcmNlUmVuZGVyKSAmJiBjaGlsZHJlbik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi4vVGFiQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJQYW5lbExpc3QoX3JlZikge1xuICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBhbmltYXRlZCA9IF9yZWYuYW5pbWF0ZWQsXG4gICAgICB0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUgPSBfcmVmLmRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJDb250ZXh0KSxcbiAgICAgIHByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LnByZWZpeENscyxcbiAgICAgIHRhYnMgPSBfUmVhY3QkdXNlQ29udGV4dC50YWJzO1xuXG4gIHZhciB0YWJQYW5lQW5pbWF0ZWQgPSBhbmltYXRlZC50YWJQYW5lO1xuICB2YXIgYWN0aXZlSW5kZXggPSB0YWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXkgPT09IGFjdGl2ZUtleTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudC1ob2xkZXJcIikpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnQtXCIpLmNvbmNhdCh0YWJQb3NpdGlvbiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWFuaW1hdGVkXCIpLCB0YWJQYW5lQW5pbWF0ZWQpKSxcbiAgICBzdHlsZTogYWN0aXZlSW5kZXggJiYgdGFiUGFuZUFuaW1hdGVkID8gX2RlZmluZVByb3BlcnR5KHt9LCBydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnLCBcIi1cIi5jb25jYXQoYWN0aXZlSW5kZXgsIFwiMDAlXCIpKSA6IG51bGxcbiAgfSwgdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KHRhYi5ub2RlLCB7XG4gICAgICBrZXk6IHRhYi5rZXksXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHRhYktleTogdGFiLmtleSxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGFuaW1hdGVkOiB0YWJQYW5lQW5pbWF0ZWQsXG4gICAgICBhY3RpdmU6IHRhYi5rZXkgPT09IGFjdGl2ZUtleSxcbiAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU6IGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmVcbiAgICB9KTtcbiAgfSkpKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuLy8gQWNjZXNzaWJpbGl0eSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvUm9sZXMvVGFiX1JvbGVcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwicmMtdXRpbC9lcy9pc01vYmlsZVwiO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG5pbXBvcnQgVGFiTmF2TGlzdCBmcm9tICcuL1RhYk5hdkxpc3QnO1xuaW1wb3J0IFRhYlBhbmVsTGlzdCBmcm9tICcuL1RhYlBhbmVsTGlzdCc7XG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuL1RhYlBhbmVsTGlzdC9UYWJQYW5lJztcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJy4vVGFiQ29udGV4dCc7XG4vKipcbiAqIFNob3VsZCBhZGRlZCBhbnRkOlxuICogLSB0eXBlXG4gKlxuICogUmVtb3ZlZDpcbiAqIC0gb25OZXh0Q2xpY2tcbiAqIC0gb25QcmV2Q2xpY2tcbiAqIC0ga2V5Ym9hcmRcbiAqL1xuLy8gVXNlZCBmb3IgYWNjZXNzaWJpbGl0eVxuXG52YXIgdXVpZCA9IDA7XG5cbmZ1bmN0aW9uIHBhcnNlVGFiTGlzdChjaGlsZHJlbikge1xuICByZXR1cm4gdG9BcnJheShjaGlsZHJlbikubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIHZhciBrZXkgPSBub2RlLmtleSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKG5vZGUua2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgbm9kZS5wcm9wcyksIHt9LCB7XG4gICAgICAgIG5vZGU6IG5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiB0YWI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBUYWJzKF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGlkID0gX3JlZi5pZCxcbiAgICAgIF9yZWYkcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcmVmJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXRhYnMnIDogX3JlZiRwcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBkZWZhdWx0QWN0aXZlS2V5ID0gX3JlZi5kZWZhdWx0QWN0aXZlS2V5LFxuICAgICAgZWRpdGFibGUgPSBfcmVmLmVkaXRhYmxlLFxuICAgICAgX3JlZiRhbmltYXRlZCA9IF9yZWYuYW5pbWF0ZWQsXG4gICAgICBhbmltYXRlZCA9IF9yZWYkYW5pbWF0ZWQgPT09IHZvaWQgMCA/IHtcbiAgICBpbmtCYXI6IHRydWUsXG4gICAgdGFiUGFuZTogZmFsc2VcbiAgfSA6IF9yZWYkYW5pbWF0ZWQsXG4gICAgICBfcmVmJHRhYlBvc2l0aW9uID0gX3JlZi50YWJQb3NpdGlvbixcbiAgICAgIHRhYlBvc2l0aW9uID0gX3JlZiR0YWJQb3NpdGlvbiA9PT0gdm9pZCAwID8gJ3RvcCcgOiBfcmVmJHRhYlBvc2l0aW9uLFxuICAgICAgdGFiQmFyR3V0dGVyID0gX3JlZi50YWJCYXJHdXR0ZXIsXG4gICAgICB0YWJCYXJTdHlsZSA9IF9yZWYudGFiQmFyU3R5bGUsXG4gICAgICB0YWJCYXJFeHRyYUNvbnRlbnQgPSBfcmVmLnRhYkJhckV4dHJhQ29udGVudCxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbW9yZUljb24gPSBfcmVmLm1vcmVJY29uLFxuICAgICAgbW9yZVRyYW5zaXRpb25OYW1lID0gX3JlZi5tb3JlVHJhbnNpdGlvbk5hbWUsXG4gICAgICBkZXN0cm95SW5hY3RpdmVUYWJQYW5lID0gX3JlZi5kZXN0cm95SW5hY3RpdmVUYWJQYW5lLFxuICAgICAgcmVuZGVyVGFiQmFyID0gX3JlZi5yZW5kZXJUYWJCYXIsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvblRhYkNsaWNrID0gX3JlZi5vblRhYkNsaWNrLFxuICAgICAgb25UYWJTY3JvbGwgPSBfcmVmLm9uVGFiU2Nyb2xsLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImlkXCIsIFwicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaXJlY3Rpb25cIiwgXCJhY3RpdmVLZXlcIiwgXCJkZWZhdWx0QWN0aXZlS2V5XCIsIFwiZWRpdGFibGVcIiwgXCJhbmltYXRlZFwiLCBcInRhYlBvc2l0aW9uXCIsIFwidGFiQmFyR3V0dGVyXCIsIFwidGFiQmFyU3R5bGVcIiwgXCJ0YWJCYXJFeHRyYUNvbnRlbnRcIiwgXCJsb2NhbGVcIiwgXCJtb3JlSWNvblwiLCBcIm1vcmVUcmFuc2l0aW9uTmFtZVwiLCBcImRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmVcIiwgXCJyZW5kZXJUYWJCYXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uVGFiQ2xpY2tcIiwgXCJvblRhYlNjcm9sbFwiXSk7XG5cbiAgdmFyIHRhYnMgPSBwYXJzZVRhYkxpc3QoY2hpbGRyZW4pO1xuICB2YXIgcnRsID0gZGlyZWN0aW9uID09PSAncnRsJztcbiAgdmFyIG1lcmdlZEFuaW1hdGVkO1xuXG4gIGlmIChhbmltYXRlZCA9PT0gZmFsc2UpIHtcbiAgICBtZXJnZWRBbmltYXRlZCA9IHtcbiAgICAgIGlua0JhcjogZmFsc2UsXG4gICAgICB0YWJQYW5lOiBmYWxzZVxuICAgIH07XG4gIH0gZWxzZSBpZiAoYW5pbWF0ZWQgPT09IHRydWUpIHtcbiAgICBtZXJnZWRBbmltYXRlZCA9IHtcbiAgICAgIGlua0JhcjogdHJ1ZSxcbiAgICAgIHRhYlBhbmU6IHRydWVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZEFuaW1hdGVkID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBpbmtCYXI6IHRydWUsXG4gICAgICB0YWJQYW5lOiBmYWxzZVxuICAgIH0sIF90eXBlb2YoYW5pbWF0ZWQpID09PSAnb2JqZWN0JyA/IGFuaW1hdGVkIDoge30pO1xuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBNb2JpbGUgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBtb2JpbGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TW9iaWxlID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIE9ubHkgdXBkYXRlIG9uIHRoZSBjbGllbnQgc2lkZVxuICAgIHNldE1vYmlsZShpc01vYmlsZSgpKTtcbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09IEFjdGl2ZSBLZXkgPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSB1c2VNZXJnZWRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90YWJzJDtcblxuICAgIHJldHVybiAoX3RhYnMkID0gdGFic1swXSkgPT09IG51bGwgfHwgX3RhYnMkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFicyQua2V5O1xuICB9LCB7XG4gICAgdmFsdWU6IGFjdGl2ZUtleSxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRBY3RpdmVLZXlcbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIG1lcmdlZEFjdGl2ZUtleSA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgICBzZXRNZXJnZWRBY3RpdmVLZXkgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gdGFiLmtleSA9PT0gbWVyZ2VkQWN0aXZlS2V5O1xuICAgIH0pO1xuICB9KSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGFjdGl2ZUluZGV4ID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldEFjdGl2ZUluZGV4ID0gX3VzZVN0YXRlNFsxXTsgLy8gUmVzZXQgYWN0aXZlIGtleSBpZiBub3QgZXhpc3QgYW55bW9yZVxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSB0YWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgICByZXR1cm4gdGFiLmtleSA9PT0gbWVyZ2VkQWN0aXZlS2V5O1xuICAgIH0pO1xuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGV4ID09PSAtMSkge1xuICAgICAgdmFyIF90YWJzJG5ld0FjdGl2ZUluZGV4O1xuXG4gICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGFjdGl2ZUluZGV4LCB0YWJzLmxlbmd0aCAtIDEpKTtcbiAgICAgIHNldE1lcmdlZEFjdGl2ZUtleSgoX3RhYnMkbmV3QWN0aXZlSW5kZXggPSB0YWJzW25ld0FjdGl2ZUluZGV4XSkgPT09IG51bGwgfHwgX3RhYnMkbmV3QWN0aXZlSW5kZXggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJzJG5ld0FjdGl2ZUluZGV4LmtleSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3QWN0aXZlSW5kZXgpO1xuICB9LCBbdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiB0YWIua2V5O1xuICB9KS5qb2luKCdfJyksIG1lcmdlZEFjdGl2ZUtleSwgYWN0aXZlSW5kZXhdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEFjY2Vzc2liaWxpdHkgPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgX3VzZU1lcmdlZFN0YXRlMyA9IHVzZU1lcmdlZFN0YXRlKG51bGwsIHtcbiAgICB2YWx1ZTogaWRcbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlMywgMiksXG4gICAgICBtZXJnZWRJZCA9IF91c2VNZXJnZWRTdGF0ZTRbMF0sXG4gICAgICBzZXRNZXJnZWRJZCA9IF91c2VNZXJnZWRTdGF0ZTRbMV07XG5cbiAgdmFyIG1lcmdlZFRhYlBvc2l0aW9uID0gdGFiUG9zaXRpb247XG5cbiAgaWYgKG1vYmlsZSAmJiAhWydsZWZ0JywgJ3JpZ2h0J10uaW5jbHVkZXModGFiUG9zaXRpb24pKSB7XG4gICAgbWVyZ2VkVGFiUG9zaXRpb24gPSAndG9wJztcbiAgfSAvLyBBc3luYyBnZW5lcmF0ZSBpZCB0byBhdm9pZCBzc3IgbWFwcGluZyBmYWlsZWRcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgc2V0TWVyZ2VkSWQoXCJyYy10YWJzLVwiLmNvbmNhdChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gJ3Rlc3QnIDogdXVpZCkpO1xuICAgICAgdXVpZCArPSAxO1xuICAgIH1cbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRXZlbnRzID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxUYWJDbGljayhrZXksIGUpIHtcbiAgICBvblRhYkNsaWNrID09PSBudWxsIHx8IG9uVGFiQ2xpY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVGFiQ2xpY2soa2V5LCBlKTtcbiAgICBzZXRNZXJnZWRBY3RpdmVLZXkoa2V5KTtcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2Uoa2V5KTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHNoYXJlZFByb3BzID0ge1xuICAgIGlkOiBtZXJnZWRJZCxcbiAgICBhY3RpdmVLZXk6IG1lcmdlZEFjdGl2ZUtleSxcbiAgICBhbmltYXRlZDogbWVyZ2VkQW5pbWF0ZWQsXG4gICAgdGFiUG9zaXRpb246IG1lcmdlZFRhYlBvc2l0aW9uLFxuICAgIHJ0bDogcnRsLFxuICAgIG1vYmlsZTogbW9iaWxlXG4gIH07XG4gIHZhciB0YWJOYXZCYXI7XG5cbiAgdmFyIHRhYk5hdkJhclByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzaGFyZWRQcm9wcyksIHt9LCB7XG4gICAgZWRpdGFibGU6IGVkaXRhYmxlLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIG1vcmVJY29uOiBtb3JlSWNvbixcbiAgICBtb3JlVHJhbnNpdGlvbk5hbWU6IG1vcmVUcmFuc2l0aW9uTmFtZSxcbiAgICB0YWJCYXJHdXR0ZXI6IHRhYkJhckd1dHRlcixcbiAgICBvblRhYkNsaWNrOiBvbkludGVybmFsVGFiQ2xpY2ssXG4gICAgb25UYWJTY3JvbGw6IG9uVGFiU2Nyb2xsLFxuICAgIGV4dHJhOiB0YWJCYXJFeHRyYUNvbnRlbnQsXG4gICAgc3R5bGU6IHRhYkJhclN0eWxlLFxuICAgIHBhbmVzOiBjaGlsZHJlblxuICB9KTtcblxuICBpZiAocmVuZGVyVGFiQmFyKSB7XG4gICAgdGFiTmF2QmFyID0gcmVuZGVyVGFiQmFyKHRhYk5hdkJhclByb3BzLCBUYWJOYXZMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICB0YWJOYXZCYXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJOYXZMaXN0LCB0YWJOYXZCYXJQcm9wcyk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB7XG4gICAgICB0YWJzOiB0YWJzLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBpZDogaWQsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KG1lcmdlZFRhYlBvc2l0aW9uKSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tb2JpbGVcIiksIG1vYmlsZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lZGl0YWJsZVwiKSwgZWRpdGFibGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBydGwpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSlcbiAgfSwgcmVzdFByb3BzKSwgdGFiTmF2QmFyLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbExpc3QsIF9leHRlbmRzKHtcbiAgICBkZXN0cm95SW5hY3RpdmVUYWJQYW5lOiBkZXN0cm95SW5hY3RpdmVUYWJQYW5lXG4gIH0sIHNoYXJlZFByb3BzLCB7XG4gICAgYW5pbWF0ZWQ6IG1lcmdlZEFuaW1hdGVkXG4gIH0pKSkpO1xufVxuXG52YXIgRm9yd2FyZFRhYnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihUYWJzKTtcbkZvcndhcmRUYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuZXhwb3J0IGRlZmF1bHQgRm9yd2FyZFRhYnM7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPZmZzZXRzKHRhYnMsIHRhYlNpemVzLCBob2xkZXJTY3JvbGxXaWR0aCkge1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90YWJzJDtcblxuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGxhc3RPZmZzZXQgPSB0YWJTaXplcy5nZXQoKF90YWJzJCA9IHRhYnNbMF0pID09PSBudWxsIHx8IF90YWJzJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnMkLmtleSkgfHwgREVGQVVMVF9TSVpFO1xuICAgIHZhciByaWdodE9mZnNldCA9IGxhc3RPZmZzZXQubGVmdCArIGxhc3RPZmZzZXQud2lkdGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBrZXkgPSB0YWJzW2ldLmtleTtcbiAgICAgIHZhciBkYXRhID0gdGFiU2l6ZXMuZ2V0KGtleSk7IC8vIFJldXNlIGxhc3Qgb25lIHdoZW4gbm90IGV4aXN0IHlldFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdmFyIF90YWJzO1xuXG4gICAgICAgIGRhdGEgPSB0YWJTaXplcy5nZXQoKF90YWJzID0gdGFic1tpIC0gMV0pID09PSBudWxsIHx8IF90YWJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFicy5rZXkpIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudGl0eSA9IG1hcC5nZXQoa2V5KSB8fCBfb2JqZWN0U3ByZWFkKHt9LCBkYXRhKTsgLy8gUmlnaHRcblxuXG4gICAgICBlbnRpdHkucmlnaHQgPSByaWdodE9mZnNldCAtIGVudGl0eS5sZWZ0IC0gZW50aXR5LndpZHRoOyAvLyBVcGRhdGUgZW50aXR5XG5cbiAgICAgIG1hcC5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0sIFt0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXk7XG4gIH0pLmpvaW4oJ18nKSwgdGFiU2l6ZXMsIGhvbGRlclNjcm9sbFdpZHRoXSk7XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmFmKGNhbGxiYWNrKSB7XG4gIHZhciByYWZSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIHJlbW92ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghcmVtb3ZlZFJlZi5jdXJyZW50KSB7XG4gICAgICByYWYuY2FuY2VsKHJhZlJlZi5jdXJyZW50KTtcbiAgICAgIHJhZlJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICByYWYuY2FuY2VsKHJhZlJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiB0cmlnZ2VyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJhZlN0YXRlKGRlZmF1bHRTdGF0ZSkge1xuICB2YXIgYmF0Y2hSZWYgPSB1c2VSZWYoW10pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7fSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgc3RhdGUgPSB1c2VSZWYodHlwZW9mIGRlZmF1bHRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRTdGF0ZSgpIDogZGVmYXVsdFN0YXRlKTtcbiAgdmFyIGZsdXNoVXBkYXRlID0gdXNlUmFmKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHN0YXRlLmN1cnJlbnQ7XG4gICAgYmF0Y2hSZWYuY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY3VycmVudCA9IGNhbGxiYWNrKGN1cnJlbnQpO1xuICAgIH0pO1xuICAgIGJhdGNoUmVmLmN1cnJlbnQgPSBbXTtcbiAgICBzdGF0ZS5jdXJyZW50ID0gY3VycmVudDtcbiAgICBmb3JjZVVwZGF0ZSh7fSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIoY2FsbGJhY2spIHtcbiAgICBiYXRjaFJlZi5jdXJyZW50LnB1c2goY2FsbGJhY2spO1xuICAgIGZsdXNoVXBkYXRlKCk7XG4gIH1cblxuICByZXR1cm4gW3N0YXRlLmN1cnJlbnQsIHVwZGF0ZXJdO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlZnMoKSB7XG4gIHZhciBjYWNoZVJlZnMgPSB1c2VSZWYobmV3IE1hcCgpKTtcblxuICBmdW5jdGlvbiBnZXRSZWYoa2V5KSB7XG4gICAgaWYgKCFjYWNoZVJlZnMuY3VycmVudC5oYXMoa2V5KSkge1xuICAgICAgY2FjaGVSZWZzLmN1cnJlbnQuc2V0KGtleSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVSZWZzLmN1cnJlbnQuZ2V0KGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVSZWYoa2V5KSB7XG4gICAgY2FjaGVSZWZzLmN1cnJlbnQuZGVsZXRlKGtleSk7XG4gIH1cblxuICByZXR1cm4gW2dldFJlZiwgcmVtb3ZlUmVmXTtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN5bmNTdGF0ZShkZWZhdWx0U3RhdGUsIG9uQ2hhbmdlKSB7XG4gIHZhciBzdGF0ZVJlZiA9IFJlYWN0LnVzZVJlZihkZWZhdWx0U3RhdGUpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGVyKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKHN0YXRlUmVmLmN1cnJlbnQpIDogdXBkYXRlcjtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gc3RhdGVSZWYuY3VycmVudCkge1xuICAgICAgb25DaGFuZ2UobmV3VmFsdWUsIHN0YXRlUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICBmb3JjZVVwZGF0ZSh7fSk7XG4gIH1cblxuICByZXR1cm4gW3N0YXRlUmVmLmN1cnJlbnQsIHNldFN0YXRlXTtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgTUlOX1NXSVBFX0RJU1RBTkNFID0gMC4xO1xudmFyIFNUT1BfU1dJUEVfRElTVEFOQ0UgPSAwLjAxO1xudmFyIFJFRlJFU0hfSU5URVJWQUwgPSAyMDtcbnZhciBTUEVFRF9PRkZfTVVMVElQTEUgPSBNYXRoLnBvdygwLjk5NSwgUkVGUkVTSF9JTlRFUlZBTCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIb29rID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUb3VjaE1vdmUocmVmLCBvbk9mZnNldCkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgdG91Y2hQb3NpdGlvbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUb3VjaFBvc2l0aW9uID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgbGFzdFRpbWVzdGFtcCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRMYXN0VGltZXN0YW1wID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgbGFzdFRpbWVEaWZmID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldExhc3RUaW1lRGlmZiA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgbGFzdE9mZnNldCA9IF91c2VTdGF0ZThbMF0sXG4gICAgICBzZXRMYXN0T2Zmc2V0ID0gX3VzZVN0YXRlOFsxXTtcblxuICB2YXIgbW90aW9uUmVmID0gdXNlUmVmKCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRXZlbnRzID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPj4+IFRvdWNoIGV2ZW50c1xuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgdmFyIF9lJHRvdWNoZXMkID0gZS50b3VjaGVzWzBdLFxuICAgICAgICBzY3JlZW5YID0gX2UkdG91Y2hlcyQuc2NyZWVuWCxcbiAgICAgICAgc2NyZWVuWSA9IF9lJHRvdWNoZXMkLnNjcmVlblk7XG4gICAgc2V0VG91Y2hQb3NpdGlvbih7XG4gICAgICB4OiBzY3JlZW5YLFxuICAgICAgeTogc2NyZWVuWVxuICAgIH0pO1xuICAgIHdpbmRvdy5jbGVhckludGVydmFsKG1vdGlvblJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoIXRvdWNoUG9zaXRpb24pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIF9lJHRvdWNoZXMkMiA9IGUudG91Y2hlc1swXSxcbiAgICAgICAgc2NyZWVuWCA9IF9lJHRvdWNoZXMkMi5zY3JlZW5YLFxuICAgICAgICBzY3JlZW5ZID0gX2UkdG91Y2hlcyQyLnNjcmVlblk7XG4gICAgc2V0VG91Y2hQb3NpdGlvbih7XG4gICAgICB4OiBzY3JlZW5YLFxuICAgICAgeTogc2NyZWVuWVxuICAgIH0pO1xuICAgIHZhciBvZmZzZXRYID0gc2NyZWVuWCAtIHRvdWNoUG9zaXRpb24ueDtcbiAgICB2YXIgb2Zmc2V0WSA9IHNjcmVlblkgLSB0b3VjaFBvc2l0aW9uLnk7XG4gICAgb25PZmZzZXQob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgc2V0TGFzdFRpbWVzdGFtcChub3cpO1xuICAgIHNldExhc3RUaW1lRGlmZihub3cgLSBsYXN0VGltZXN0YW1wKTtcbiAgICBzZXRMYXN0T2Zmc2V0KHtcbiAgICAgIHg6IG9mZnNldFgsXG4gICAgICB5OiBvZmZzZXRZXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIGlmICghdG91Y2hQb3NpdGlvbikgcmV0dXJuO1xuICAgIHNldFRvdWNoUG9zaXRpb24obnVsbCk7XG4gICAgc2V0TGFzdE9mZnNldChudWxsKTsgLy8gU3dpcGUgaWYgbmVlZGVkXG5cbiAgICBpZiAobGFzdE9mZnNldCkge1xuICAgICAgdmFyIGRpc3RhbmNlWCA9IGxhc3RPZmZzZXQueCAvIGxhc3RUaW1lRGlmZjtcbiAgICAgIHZhciBkaXN0YW5jZVkgPSBsYXN0T2Zmc2V0LnkgLyBsYXN0VGltZURpZmY7XG4gICAgICB2YXIgYWJzWCA9IE1hdGguYWJzKGRpc3RhbmNlWCk7XG4gICAgICB2YXIgYWJzWSA9IE1hdGguYWJzKGRpc3RhbmNlWSk7IC8vIFNraXAgc3dpcGUgaWYgbG93IGRpc3RhbmNlXG5cbiAgICAgIGlmIChNYXRoLm1heChhYnNYLCBhYnNZKSA8IE1JTl9TV0lQRV9ESVNUQU5DRSkgcmV0dXJuO1xuICAgICAgdmFyIGN1cnJlbnRYID0gZGlzdGFuY2VYO1xuICAgICAgdmFyIGN1cnJlbnRZID0gZGlzdGFuY2VZO1xuICAgICAgbW90aW9uUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFgpIDwgU1RPUF9TV0lQRV9ESVNUQU5DRSAmJiBNYXRoLmFicyhjdXJyZW50WSkgPCBTVE9QX1NXSVBFX0RJU1RBTkNFKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW90aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRYICo9IFNQRUVEX09GRl9NVUxUSVBMRTtcbiAgICAgICAgY3VycmVudFkgKj0gU1BFRURfT0ZGX01VTFRJUExFO1xuICAgICAgICBvbk9mZnNldChjdXJyZW50WCAqIFJFRlJFU0hfSU5URVJWQUwsIGN1cnJlbnRZICogUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgICB9LCBSRUZSRVNIX0lOVEVSVkFMKTtcbiAgICB9XG4gIH0gLy8gPj4+IFdoZWVsIGV2ZW50XG5cblxuICB2YXIgbGFzdFdoZWVsRGlyZWN0aW9uUmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gb25XaGVlbChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYLFxuICAgICAgICBkZWx0YVkgPSBlLmRlbHRhWTsgLy8gQ29udmVydCBib3RoIHRvIHggJiB5IHNpbmNlIHdoZWVsIG9ubHkgaGFwcGVuZWQgb24gUENcblxuICAgIHZhciBtaXhlZCA9IDA7XG4gICAgdmFyIGFic1ggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBhYnNZID0gTWF0aC5hYnMoZGVsdGFZKTtcblxuICAgIGlmIChhYnNYID09PSBhYnNZKSB7XG4gICAgICBtaXhlZCA9IGxhc3RXaGVlbERpcmVjdGlvblJlZi5jdXJyZW50ID09PSAneCcgPyBkZWx0YVggOiBkZWx0YVk7XG4gICAgfSBlbHNlIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgbWl4ZWQgPSBkZWx0YVg7XG4gICAgICBsYXN0V2hlZWxEaXJlY3Rpb25SZWYuY3VycmVudCA9ICd4JztcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSBkZWx0YVk7XG4gICAgICBsYXN0V2hlZWxEaXJlY3Rpb25SZWYuY3VycmVudCA9ICd5JztcbiAgICB9XG5cbiAgICBpZiAob25PZmZzZXQoLW1peGVkLCAtbWl4ZWQpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciB0b3VjaEV2ZW50c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgdG91Y2hFdmVudHNSZWYuY3VycmVudCA9IHtcbiAgICBvblRvdWNoU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICBvblRvdWNoTW92ZTogb25Ub3VjaE1vdmUsXG4gICAgb25Ub3VjaEVuZDogb25Ub3VjaEVuZCxcbiAgICBvbldoZWVsOiBvbldoZWVsXG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gb25Qcm94eVRvdWNoU3RhcnQoZSkge1xuICAgICAgdG91Y2hFdmVudHNSZWYuY3VycmVudC5vblRvdWNoU3RhcnQoZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qcm94eVRvdWNoTW92ZShlKSB7XG4gICAgICB0b3VjaEV2ZW50c1JlZi5jdXJyZW50Lm9uVG91Y2hNb3ZlKGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJveHlUb3VjaEVuZChlKSB7XG4gICAgICB0b3VjaEV2ZW50c1JlZi5jdXJyZW50Lm9uVG91Y2hFbmQoZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qcm94eVdoZWVsKGUpIHtcbiAgICAgIHRvdWNoRXZlbnRzUmVmLmN1cnJlbnQub25XaGVlbChlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblByb3h5VG91Y2hNb3ZlLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Qcm94eVRvdWNoRW5kLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pOyAvLyBObyBuZWVkIHRvIGNsZWFuIHVwIHNpbmNlIGVsZW1lbnQgcmVtb3ZlZFxuXG4gICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uUHJveHlUb3VjaFN0YXJ0LCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25Qcm94eVdoZWVsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Qcm94eVRvdWNoTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJveHlUb3VjaEVuZCk7XG4gICAgfTtcbiAgfSwgW10pO1xufSIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVmlzaWJsZVJhbmdlKHRhYk9mZnNldHMsIGNvbnRhaW5lclNpemUsIHRhYkNvbnRlbnROb2RlU2l6ZSwgYWRkTm9kZVNpemUsIF9yZWYpIHtcbiAgdmFyIHRhYnMgPSBfcmVmLnRhYnMsXG4gICAgICB0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgICBydGwgPSBfcmVmLnJ0bDtcbiAgdmFyIHVuaXQ7XG4gIHZhciBwb3NpdGlvbjtcbiAgdmFyIHRyYW5zZm9ybVNpemU7XG5cbiAgaWYgKFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKHRhYlBvc2l0aW9uKSkge1xuICAgIHVuaXQgPSAnd2lkdGgnO1xuICAgIHBvc2l0aW9uID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB0cmFuc2Zvcm1TaXplID0gTWF0aC5hYnMoY29udGFpbmVyU2l6ZS5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gJ2hlaWdodCc7XG4gICAgcG9zaXRpb24gPSAndG9wJztcbiAgICB0cmFuc2Zvcm1TaXplID0gLWNvbnRhaW5lclNpemUudG9wO1xuICB9XG5cbiAgdmFyIGJhc2ljU2l6ZSA9IGNvbnRhaW5lclNpemVbdW5pdF07XG4gIHZhciB0YWJDb250ZW50U2l6ZSA9IHRhYkNvbnRlbnROb2RlU2l6ZVt1bml0XTtcbiAgdmFyIGFkZFNpemUgPSBhZGROb2RlU2l6ZVt1bml0XTtcbiAgdmFyIG1lcmdlZEJhc2ljU2l6ZSA9IGJhc2ljU2l6ZTtcblxuICBpZiAodGFiQ29udGVudFNpemUgKyBhZGRTaXplID4gYmFzaWNTaXplKSB7XG4gICAgbWVyZ2VkQmFzaWNTaXplID0gYmFzaWNTaXplIC0gYWRkU2l6ZTtcbiAgfVxuXG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRhYnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSB0YWJzLmxlbmd0aDtcbiAgICB2YXIgZW5kSW5kZXggPSBsZW47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGFiT2Zmc2V0cy5nZXQodGFic1tpXS5rZXkpIHx8IERFRkFVTFRfU0laRTtcblxuICAgICAgaWYgKG9mZnNldFtwb3NpdGlvbl0gKyBvZmZzZXRbdW5pdF0gPiB0cmFuc2Zvcm1TaXplICsgbWVyZ2VkQmFzaWNTaXplKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaSAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdGFydEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIF9pID0gbGVuIC0gMTsgX2kgPj0gMDsgX2kgLT0gMSkge1xuICAgICAgdmFyIF9vZmZzZXQgPSB0YWJPZmZzZXRzLmdldCh0YWJzW19pXS5rZXkpIHx8IERFRkFVTFRfU0laRTtcblxuICAgICAgaWYgKF9vZmZzZXRbcG9zaXRpb25dIDwgdHJhbnNmb3JtU2l6ZSkge1xuICAgICAgICBzdGFydEluZGV4ID0gX2kgKyAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3N0YXJ0SW5kZXgsIGVuZEluZGV4XTtcbiAgfSwgW3RhYk9mZnNldHMsIHRyYW5zZm9ybVNpemUsIG1lcmdlZEJhc2ljU2l6ZSwgdGFiUG9zaXRpb24sIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiLmtleTtcbiAgfSkuam9pbignXycpLCBydGxdKTtcbn0iLCJpbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi9UYWJQYW5lbExpc3QvVGFiUGFuZSc7XG5leHBvcnQgeyBUYWJQYW5lIH07XG5leHBvcnQgZGVmYXVsdCBUYWJzOyJdLCJzb3VyY2VSb290IjoiIn0=