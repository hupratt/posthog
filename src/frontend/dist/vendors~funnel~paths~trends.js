(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~funnel~paths~trends"],{

/***/ "./node_modules/antd/es/date-picker/PickerButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/PickerButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PickerButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./node_modules/antd/es/button/index.js");



function PickerButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: "small",
    type: "primary"
  }, props));
}

/***/ }),

/***/ "./node_modules/antd/es/date-picker/PickerTag.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/date-picker/PickerTag.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PickerTag; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag */ "./node_modules/antd/es/tag/index.js");



function PickerTag(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tag__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "blue"
  }, props));
}

/***/ }),

/***/ "./node_modules/antd/es/date-picker/generatePicker/generateRangePicker.js":
/*!********************************************************************************!*\
  !*** ./node_modules/antd/es/date-picker/generatePicker/generateRangePicker.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateRangePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_es_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/CalendarOutlined */ "./node_modules/@ant-design/icons/es/icons/CalendarOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/es/icons/ClockCircleOutlined */ "./node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_SwapRightOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/es/icons/SwapRightOutlined */ "./node_modules/@ant-design/icons/es/icons/SwapRightOutlined.js");
/* harmony import */ var rc_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-picker */ "./node_modules/rc-picker/es/index.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../locale/en_US */ "./node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../locale-provider/LocaleReceiver */ "./node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util */ "./node_modules/antd/es/date-picker/util.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! . */ "./node_modules/antd/es/date-picker/generatePicker/index.js");







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














function generateRangePicker(generateConfig) {
  var RangePicker = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RangePicker, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(RangePicker);

    function RangePicker() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RangePicker);

      _this = _super.apply(this, arguments);
      _this.pickerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createRef"]();

      _this.focus = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.focus();
        }
      };

      _this.blur = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.blur();
        }
      };

      _this.renderPicker = function (contextLocale) {
        var locale = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, contextLocale), _this.props.locale);

        var _this$context = _this.context,
            getPrefixCls = _this$context.getPrefixCls,
            direction = _this$context.direction,
            getPopupContainer = _this$context.getPopupContainer;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            customGetPopupContainer = _a.getPopupContainer,
            className = _a.className,
            customizeSize = _a.size,
            _a$bordered = _a.bordered,
            bordered = _a$bordered === void 0 ? true : _a$bordered,
            placeholder = _a.placeholder,
            restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

        var _this$props = _this.props,
            format = _this$props.format,
            showTime = _this$props.showTime,
            picker = _this$props.picker;
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var additionalOverrideProps = {};
        additionalOverrideProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, additionalOverrideProps), showTime ? Object(___WEBPACK_IMPORTED_MODULE_18__["getTimeProps"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? Object(___WEBPACK_IMPORTED_MODULE_18__["getTimeProps"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          format: format
        }, _this.props), {
          picker: picker
        })) : {});
        var rootPrefixCls = getPrefixCls();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, null, function (size) {
          var _classNames;

          var mergedSize = customizeSize || size;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_picker__WEBPACK_IMPORTED_MODULE_12__["RangePicker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            separator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              "aria-label": "to",
              className: "".concat(prefixCls, "-separator")
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_SwapRightOutlined__WEBPACK_IMPORTED_MODULE_11__["default"], null)),
            ref: _this.pickerRef,
            placeholder: Object(_util__WEBPACK_IMPORTED_MODULE_17__["getRangePlaceholder"])(picker, locale, placeholder),
            suffixIcon: picker === 'time' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_9__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            clearIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_10__["default"], null),
            allowClear: true,
            transitionName: "".concat(rootPrefixCls, "-slide-up")
          }, restProps, additionalOverrideProps, {
            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className),
            locale: locale.lang,
            prefixCls: prefixCls,
            getPopupContainer: customGetPopupContainer || getPopupContainer,
            generateConfig: generateConfig,
            prevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              className: "".concat(prefixCls, "-prev-icon")
            }),
            nextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              className: "".concat(prefixCls, "-next-icon")
            }),
            superPrevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              className: "".concat(prefixCls, "-super-prev-icon")
            }),
            superNextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              className: "".concat(prefixCls, "-super-next-icon")
            }),
            components: ___WEBPACK_IMPORTED_MODULE_18__["Components"],
            direction: direction
          }));
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RangePicker, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_16__["default"], {
          componentName: "DatePicker",
          defaultLocale: _locale_en_US__WEBPACK_IMPORTED_MODULE_13__["default"]
        }, this.renderPicker);
      }
    }]);

    return RangePicker;
  }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

  RangePicker.contextType = _config_provider__WEBPACK_IMPORTED_MODULE_14__["ConfigContext"];
  return RangePicker;
}

/***/ }),

/***/ "./node_modules/antd/es/date-picker/generatePicker/generateSinglePicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/antd/es/date-picker/generatePicker/generateSinglePicker.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generatePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_es_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/CalendarOutlined */ "./node_modules/@ant-design/icons/es/icons/CalendarOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/es/icons/ClockCircleOutlined */ "./node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var rc_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-picker */ "./node_modules/rc-picker/es/index.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../locale/en_US */ "./node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util */ "./node_modules/antd/es/date-picker/util.js");
/* harmony import */ var _util_devWarning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_util/devWarning */ "./node_modules/antd/es/_util/devWarning.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../locale-provider/LocaleReceiver */ "./node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! . */ "./node_modules/antd/es/date-picker/generatePicker/index.js");







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














function generatePicker(generateConfig) {
  function getPicker(picker, displayName) {
    var Picker = /*#__PURE__*/function (_React$Component) {
      Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Picker, _React$Component);

      var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(Picker);

      function Picker(props) {
        var _this;

        Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Picker);

        _this = _super.call(this, props);
        _this.pickerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createRef"]();

        _this.focus = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.focus();
          }
        };

        _this.blur = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.blur();
          }
        };

        _this.renderPicker = function (contextLocale) {
          var locale = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, contextLocale), _this.props.locale);

          var _this$context = _this.context,
              getPrefixCls = _this$context.getPrefixCls,
              direction = _this$context.direction,
              getPopupContainer = _this$context.getPopupContainer;

          var _a = _this.props,
              customizePrefixCls = _a.prefixCls,
              customizeGetPopupContainer = _a.getPopupContainer,
              className = _a.className,
              customizeSize = _a.size,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? true : _a$bordered,
              placeholder = _a.placeholder,
              restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

          var _this$props = _this.props,
              format = _this$props.format,
              showTime = _this$props.showTime;
          var prefixCls = getPrefixCls('picker', customizePrefixCls);
          var additionalProps = {
            showToday: true
          };
          var additionalOverrideProps = {};

          if (picker) {
            additionalOverrideProps.picker = picker;
          }

          var mergedPicker = picker || _this.props.picker;
          additionalOverrideProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, additionalOverrideProps), showTime ? Object(___WEBPACK_IMPORTED_MODULE_18__["getTimeProps"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            format: format,
            picker: mergedPicker
          }, showTime)) : {}), mergedPicker === 'time' ? Object(___WEBPACK_IMPORTED_MODULE_18__["getTimeProps"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            format: format
          }, _this.props), {
            picker: mergedPicker
          })) : {});
          var rootPrefixCls = getPrefixCls();
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_17__["default"].Consumer, null, function (size) {
            var _classNames;

            var mergedSize = customizeSize || size;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_picker__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
              ref: _this.pickerRef,
              placeholder: Object(_util__WEBPACK_IMPORTED_MODULE_13__["getPlaceholder"])(mergedPicker, locale, placeholder),
              suffixIcon: mergedPicker === 'time' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_9__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_CalendarOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null),
              clearIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_10__["default"], null),
              allowClear: true,
              transitionName: "".concat(rootPrefixCls, "-slide-up")
            }, additionalProps, restProps, additionalOverrideProps, {
              locale: locale.lang,
              className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className),
              prefixCls: prefixCls,
              getPopupContainer: customizeGetPopupContainer || getPopupContainer,
              generateConfig: generateConfig,
              prevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
                className: "".concat(prefixCls, "-prev-icon")
              }),
              nextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
                className: "".concat(prefixCls, "-next-icon")
              }),
              superPrevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
                className: "".concat(prefixCls, "-super-prev-icon")
              }),
              superNextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
                className: "".concat(prefixCls, "-super-next-icon")
              }),
              components: ___WEBPACK_IMPORTED_MODULE_18__["Components"],
              direction: direction
            }));
          });
        };

        Object(_util_devWarning__WEBPACK_IMPORTED_MODULE_14__["default"])(picker !== 'quarter', displayName, "DatePicker.".concat(displayName, " is legacy usage. Please use DatePicker[picker='").concat(picker, "'] directly."));
        return _this;
      }

      Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Picker, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_16__["default"], {
            componentName: "DatePicker",
            defaultLocale: _locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"]
          }, this.renderPicker);
        }
      }]);

      return Picker;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

    Picker.contextType = _config_provider__WEBPACK_IMPORTED_MODULE_15__["ConfigContext"];

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker;
  }

  var DatePicker = getPicker();
  var WeekPicker = getPicker('week', 'WeekPicker');
  var MonthPicker = getPicker('month', 'MonthPicker');
  var YearPicker = getPicker('year', 'YearPicker');
  var TimePicker = getPicker('time', 'TimePicker');
  var QuarterPicker = getPicker('quarter', 'QuarterPicker');
  return {
    DatePicker: DatePicker,
    WeekPicker: WeekPicker,
    MonthPicker: MonthPicker,
    YearPicker: YearPicker,
    TimePicker: TimePicker,
    QuarterPicker: QuarterPicker
  };
}

/***/ }),

/***/ "./node_modules/antd/es/date-picker/generatePicker/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/antd/es/date-picker/generatePicker/index.js ***!
  \******************************************************************/
/*! exports provided: Components, getTimeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeProps", function() { return getTimeProps; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _PickerButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PickerButton */ "./node_modules/antd/es/date-picker/PickerButton.js");
/* harmony import */ var _PickerTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PickerTag */ "./node_modules/antd/es/date-picker/PickerTag.js");
/* harmony import */ var _generateSinglePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateSinglePicker */ "./node_modules/antd/es/date-picker/generatePicker/generateSinglePicker.js");
/* harmony import */ var _generateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateRangePicker */ "./node_modules/antd/es/date-picker/generatePicker/generateRangePicker.js");





var Components = {
  button: _PickerButton__WEBPACK_IMPORTED_MODULE_1__["default"],
  rangeItem: _PickerTag__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function toArray(list) {
  if (!list) {
    return [];
  }

  return Array.isArray(list) ? list : [list];
}

function getTimeProps(props) {
  var format = props.format,
      picker = props.picker,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      use12Hours = props.use12Hours;
  var firstFormat = toArray(format)[0];

  var showTimeObj = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }

    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }

    if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
      showTimeObj.showHour = false;
    }

    if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }

  return {
    showTime: showTimeObj
  };
}

function generatePicker(generateConfig) {
  // =========================== Picker ===========================
  var _generateSinglePicker = Object(_generateSinglePicker__WEBPACK_IMPORTED_MODULE_3__["default"])(generateConfig),
      DatePicker = _generateSinglePicker.DatePicker,
      WeekPicker = _generateSinglePicker.WeekPicker,
      MonthPicker = _generateSinglePicker.MonthPicker,
      YearPicker = _generateSinglePicker.YearPicker,
      TimePicker = _generateSinglePicker.TimePicker,
      QuarterPicker = _generateSinglePicker.QuarterPicker; // ======================== Range Picker ========================


  var RangePicker = Object(_generateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"])(generateConfig);
  var MergedDatePicker = DatePicker;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;
  return MergedDatePicker;
}

/* harmony default export */ __webpack_exports__["default"] = (generatePicker);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/date-picker/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_picker_es_generate_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-picker/es/generate/moment */ "./node_modules/rc-picker/es/generate/moment.js");
/* harmony import */ var _generatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePicker */ "./node_modules/antd/es/date-picker/generatePicker/index.js");


var DatePicker = Object(_generatePicker__WEBPACK_IMPORTED_MODULE_1__["default"])(rc_picker_es_generate_moment__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/style/css.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/date-picker/style/css.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/date-picker/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tag_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/style/css */ "./node_modules/antd/es/tag/style/css.js");
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/es/button/style/css.js");
 // style dependencies




/***/ }),

/***/ "./node_modules/antd/es/date-picker/style/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/date-picker/util.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/date-picker/util.js ***!
  \**************************************************/
/*! exports provided: getPlaceholder, getRangePlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceholder", function() { return getPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangePlaceholder", function() { return getRangePlaceholder; });
function getPlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }

  if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }

  return locale.lang.placeholder;
}
function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }

  return locale.lang.rangePlaceholder;
}

/***/ }),

/***/ "./node_modules/antd/es/tag/CheckableTag.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/tag/CheckableTag.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");



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





var CheckableTag = function CheckableTag(_a) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      checked = _a.checked,
      onChange = _a.onChange,
      onClick = _a.onClick,
      restProps = __rest(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_4__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-checkable"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckableTag);

/***/ }),

/***/ "./node_modules/antd/es/tag/index.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/es/tag/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/omit */ "./node_modules/rc-util/es/omit.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _CheckableTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckableTag */ "./node_modules/antd/es/tag/CheckableTag.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/es/_util/colors.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/antd/es/_util/wave.js");




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









var PresetColorRegex = new RegExp("^(".concat(_util_colors__WEBPACK_IMPORTED_MODULE_9__["PresetColorTypes"].join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_util_colors__WEBPACK_IMPORTED_MODULE_9__["PresetStatusColorTypes"].join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_8__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);

  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-hidden"), !visible), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = Object(rc_util_es_omit__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, iconNode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", null, children)) : children;
  var tagNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_util_wave__WEBPACK_IMPORTED_MODULE_10__["default"], null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = _CheckableTag__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./node_modules/antd/es/tag/style/css.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/tag/style/css.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/tag/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/tag/style/index.css":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/tag/style/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-picker/es/PanelContext.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/PanelContext.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PanelContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
/* harmony default export */ __webpack_exports__["default"] = (PanelContext);

/***/ }),

/***/ "./node_modules/rc-picker/es/Picker.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-picker/es/Picker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _PickerPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PickerPanel */ "./node_modules/rc-picker/es/PickerPanel.js");
/* harmony import */ var _PickerTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PickerTrigger */ "./node_modules/rc-picker/es/PickerTrigger.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");
/* harmony import */ var _hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/usePickerInput */ "./node_modules/rc-picker/es/hooks/usePickerInput.js");
/* harmony import */ var _hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hooks/useTextValueMapping */ "./node_modules/rc-picker/es/hooks/useTextValueMapping.js");
/* harmony import */ var _hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useValueTexts */ "./node_modules/rc-picker/es/hooks/useValueTexts.js");
/* harmony import */ var _hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useHoverValue */ "./node_modules/rc-picker/es/hooks/useHoverValue.js");









/**
 * Removed:
 *  - getCalendarContainer: use `getPopupContainer` instead
 *  - onOk
 *
 * New Feature:
 *  - picker
 *  - allowEmpty
 *  - selectable
 *
 * Tips: Should add faq about `datetime` mode with `defaultValue`
 */















function InnerPicker(props) {
  var _classNames2;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      id = props.id,
      tabIndex = props.tabIndex,
      style = props.style,
      className = props.className,
      dropdownClassName = props.dropdownClassName,
      dropdownAlign = props.dropdownAlign,
      popupStyle = props.popupStyle,
      transitionName = props.transitionName,
      generateConfig = props.generateConfig,
      locale = props.locale,
      inputReadOnly = props.inputReadOnly,
      allowClear = props.allowClear,
      autoFocus = props.autoFocus,
      showTime = props.showTime,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      format = props.format,
      use12Hours = props.use12Hours,
      value = props.value,
      defaultValue = props.defaultValue,
      open = props.open,
      defaultOpen = props.defaultOpen,
      defaultOpenValue = props.defaultOpenValue,
      suffixIcon = props.suffixIcon,
      clearIcon = props.clearIcon,
      disabled = props.disabled,
      disabledDate = props.disabledDate,
      placeholder = props.placeholder,
      getPopupContainer = props.getPopupContainer,
      pickerRef = props.pickerRef,
      panelRender = props.panelRender,
      onChange = props.onChange,
      onOpenChange = props.onOpenChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onMouseDown = props.onMouseDown,
      onMouseUp = props.onMouseUp,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onContextMenu = props.onContextMenu,
      onClick = props.onClick,
      _onKeyDown = props.onKeyDown,
      _onSelect = props.onSelect,
      direction = props.direction,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var inputRef = react__WEBPACK_IMPORTED_MODULE_8__["useRef"](null);
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time'; // ============================= State =============================

  var formatList = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_15__["toArray"])(Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["getDefaultFormat"])(format, picker, showTime, use12Hours)); // Panel ref

  var panelDivRef = react__WEBPACK_IMPORTED_MODULE_8__["useRef"](null);
  var inputDivRef = react__WEBPACK_IMPORTED_MODULE_8__["useRef"](null); // Real value

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_11__["default"])(null, {
    value: value,
    defaultValue: defaultValue
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setInnerValue = _useMergedState2[1]; // Selected value


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8__["useState"](mergedValue),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState, 2),
      selectedValue = _React$useState2[0],
      setSelectedValue = _React$useState2[1]; // Operation ref


  var operationRef = react__WEBPACK_IMPORTED_MODULE_8__["useRef"](null); // Open

  var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_11__["default"])(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return disabled ? false : postOpen;
    },
    onChange: function onChange(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }

      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }),
      _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useMergedState3, 2),
      mergedOpen = _useMergedState4[0],
      triggerInnerOpen = _useMergedState4[1]; // ============================= Text ==============================


  var _useValueTexts = Object(_hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_20__["default"])(selectedValue, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useValueTexts2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useValueTexts, 2),
      valueTexts = _useValueTexts2[0],
      firstValueText = _useValueTexts2[1];

  var _useTextValueMapping = Object(_hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_19__["default"])({
    valueTexts: valueTexts,
    onTextChange: function onTextChange(newText) {
      var inputDate = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_14__["parseValue"])(newText, {
        locale: locale,
        formatList: formatList,
        generateConfig: generateConfig
      });

      if (inputDate && (!disabledDate || !disabledDate(inputDate))) {
        setSelectedValue(inputDate);
      }
    }
  }),
      _useTextValueMapping2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useTextValueMapping, 3),
      text = _useTextValueMapping2[0],
      triggerTextChange = _useTextValueMapping2[1],
      resetText = _useTextValueMapping2[2]; // ============================ Trigger ============================


  var triggerChange = function triggerChange(newValue) {
    setSelectedValue(newValue);
    setInnerValue(newValue);

    if (onChange && !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_14__["isEqual"])(generateConfig, mergedValue, newValue)) {
      onChange(newValue, newValue ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(newValue, {
        generateConfig: generateConfig,
        locale: locale,
        format: formatList[0]
      }) : '');
    }
  };

  var triggerOpen = function triggerOpen(newOpen) {
    if (disabled && newOpen) {
      return;
    }

    triggerInnerOpen(newOpen);
  };

  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_10__["default"])(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  };

  var onInternalMouseUp = function onInternalMouseUp() {
    if (onMouseUp) {
      onMouseUp.apply(void 0, arguments);
    }

    if (inputRef.current) {
      inputRef.current.focus();
      triggerOpen(true);
    }
  }; // ============================= Input =============================


  var _usePickerInput = Object(_hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_18__["default"])({
    blurToCancel: needConfirmButton,
    open: mergedOpen,
    value: text,
    triggerOpen: triggerOpen,
    forwardKeyDown: forwardKeyDown,
    isClickOutside: function isClickOutside(target) {
      return !Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["elementsContains"])([panelDivRef.current, inputDivRef.current], target);
    },
    onSubmit: function onSubmit() {
      if (disabledDate && disabledDate(selectedValue)) {
        return false;
      }

      triggerChange(selectedValue);
      triggerOpen(false);
      resetText();
      return true;
    },
    onCancel: function onCancel() {
      triggerOpen(false);
      setSelectedValue(mergedValue);
      resetText();
    },
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    },
    onFocus: onFocus,
    onBlur: onBlur
  }),
      _usePickerInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_usePickerInput, 2),
      inputProps = _usePickerInput2[0],
      _usePickerInput2$ = _usePickerInput2[1],
      focused = _usePickerInput2$.focused,
      typing = _usePickerInput2$.typing; // ============================= Sync ==============================
  // Close should sync back with text value


  react__WEBPACK_IMPORTED_MODULE_8__["useEffect"](function () {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);

      if (!valueTexts.length || valueTexts[0] === '') {
        triggerTextChange('');
      } else if (firstValueText !== text) {
        resetText();
      }
    }
  }, [mergedOpen, valueTexts]); // Change picker should sync back with text value

  react__WEBPACK_IMPORTED_MODULE_8__["useEffect"](function () {
    if (!mergedOpen) {
      resetText();
    }
  }, [picker]); // Sync innerValue with control mode

  react__WEBPACK_IMPORTED_MODULE_8__["useEffect"](function () {
    // Sync select value
    setSelectedValue(mergedValue);
  }, [mergedValue]); // ============================ Private ============================

  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      blur: function blur() {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    };
  }

  var _useHoverValue = Object(_hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_21__["default"])(text, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useHoverValue, 3),
      hoverValue = _useHoverValue2[0],
      onEnter = _useHoverValue2[1],
      onLeave = _useHoverValue2[2]; // ============================= Panel =============================


  var panelProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, props), {}, {
    className: undefined,
    style: undefined,
    pickerValue: undefined,
    onPickerValueChange: undefined,
    onChange: null
  });

  var panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_PickerPanel__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, panelProps, {
    generateConfig: generateConfig,
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, "".concat(prefixCls, "-panel-focused"), !typing)),
    value: selectedValue,
    locale: locale,
    tabIndex: -1,
    onSelect: function onSelect(date) {
      _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
      setSelectedValue(date);
    },
    direction: direction,
    onPanelChange: function onPanelChange(viewDate, mode) {
      var onPanelChange = props.onPanelChange;
      onLeave(true);
      onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(viewDate, mode);
    }
  }));

  if (panelRender) {
    panelNode = panelRender(panelNode);
  }

  var panel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
    className: "".concat(prefixCls, "-panel-container"),
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }, panelNode);
  var suffixNode;

  if (suffixIcon) {
    suffixNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }

  var clearNode;

  if (allowClear && mergedValue && !disabled) {
    clearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        triggerChange(null);
        triggerOpen(false);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  } // ============================ Warning ============================


  if (true) {
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_10__["default"])(!defaultOpenValue, '`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.');
  } // ============================ Return =============================


  var onContextSelect = function onContextSelect(date, type) {
    if (type === 'submit' || type !== 'key' && !needConfirmButton) {
      // triggerChange will also update selected values
      triggerChange(date);
      triggerOpen(false);
    }
  };

  var popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_PanelContext__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
    value: {
      operationRef: operationRef,
      hideHeader: picker === 'time',
      panelRef: panelDivRef,
      onSelect: onContextSelect,
      open: mergedOpen,
      defaultOpenValue: defaultOpenValue,
      onDateMouseEnter: onEnter,
      onDateMouseLeave: onLeave
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_PickerTrigger__WEBPACK_IMPORTED_MODULE_13__["default"], {
    visible: mergedOpen,
    popupElement: panel,
    popupStyle: popupStyle,
    prefixCls: prefixCls,
    dropdownClassName: dropdownClassName,
    dropdownAlign: dropdownAlign,
    getPopupContainer: getPopupContainer,
    transitionName: transitionName,
    popupPlacement: popupPlacement,
    direction: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_classNames2, "".concat(prefixCls, "-focused"), focused), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
    style: style,
    onMouseDown: onMouseDown,
    onMouseUp: onInternalMouseUp,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onContextMenu: onContextMenu,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("".concat(prefixCls, "-input"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue)),
    ref: inputDivRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id,
    tabIndex: tabIndex,
    disabled: disabled,
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !typing,
    value: hoverValue || text,
    onChange: function onChange(e) {
      triggerTextChange(e.target.value);
    },
    autoFocus: autoFocus,
    placeholder: placeholder,
    ref: inputRef,
    title: text
  }, inputProps, {
    size: Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["getInputSize"])(picker, formatList[0], generateConfig)
  }, Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_15__["default"])(props), {
    autoComplete: autoComplete
  })), suffixNode, clearNode))));
} // Wrap with class component to enable pass generic with instance method


var Picker = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Picker, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Picker);

  function Picker() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Picker);

    _this = _super.apply(this, arguments);
    _this.pickerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createRef"]();

    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Picker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__["createElement"](InnerPicker, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./node_modules/rc-picker/es/PickerPanel.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-picker/es/PickerPanel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _panels_TimePanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panels/TimePanel */ "./node_modules/rc-picker/es/panels/TimePanel/index.js");
/* harmony import */ var _panels_DatetimePanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panels/DatetimePanel */ "./node_modules/rc-picker/es/panels/DatetimePanel/index.js");
/* harmony import */ var _panels_DatePanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panels/DatePanel */ "./node_modules/rc-picker/es/panels/DatePanel/index.js");
/* harmony import */ var _panels_WeekPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panels/WeekPanel */ "./node_modules/rc-picker/es/panels/WeekPanel/index.js");
/* harmony import */ var _panels_MonthPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panels/MonthPanel */ "./node_modules/rc-picker/es/panels/MonthPanel/index.js");
/* harmony import */ var _panels_QuarterPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panels/QuarterPanel */ "./node_modules/rc-picker/es/panels/QuarterPanel/index.js");
/* harmony import */ var _panels_YearPanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panels/YearPanel */ "./node_modules/rc-picker/es/panels/YearPanel/index.js");
/* harmony import */ var _panels_DecadePanel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./panels/DecadePanel */ "./node_modules/rc-picker/es/panels/DecadePanel/index.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/getExtraFooter */ "./node_modules/rc-picker/es/utils/getExtraFooter.js");
/* harmony import */ var _utils_getRanges__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/getRanges */ "./node_modules/rc-picker/es/utils/getRanges.js");
/* harmony import */ var _utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/timeUtil */ "./node_modules/rc-picker/es/utils/timeUtil.js");






/**
 * Logic:
 *  When `mode` === `picker`,
 *  click will trigger `onSelect` (if value changed trigger `onChange` also).
 *  Panel change will not trigger `onSelect` but trigger `onPanelChange`
 */





















function PickerPanel(props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      className = props.className,
      style = props.style,
      locale = props.locale,
      generateConfig = props.generateConfig,
      value = props.value,
      defaultValue = props.defaultValue,
      pickerValue = props.pickerValue,
      defaultPickerValue = props.defaultPickerValue,
      disabledDate = props.disabledDate,
      mode = props.mode,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      showNow = props.showNow,
      showTime = props.showTime,
      showToday = props.showToday,
      renderExtraFooter = props.renderExtraFooter,
      hideHeader = props.hideHeader,
      onSelect = props.onSelect,
      onChange = props.onChange,
      onPanelChange = props.onPanelChange,
      onMouseDown = props.onMouseDown,
      onPickerValueChange = props.onPickerValueChange,
      _onOk = props.onOk,
      components = props.components,
      direction = props.direction,
      _props$hourStep = props.hourStep,
      hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
      _props$minuteStep = props.minuteStep,
      minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
      _props$secondStep = props.secondStep,
      secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep;
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time';
  var isHourStepValid = 24 % hourStep === 0;
  var isMinuteStepValid = 60 % minuteStep === 0;
  var isSecondStepValid = 60 % secondStep === 0;

  if (true) {
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!value || generateConfig.isValidate(value), 'Invalidate date pass to `value`.');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!value || generateConfig.isValidate(value), 'Invalidate date pass to `defaultValue`.');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(isHourStepValid, "`hourStep` ".concat(hourStep, " is invalid. It should be a factor of 24."));
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(isMinuteStepValid, "`minuteStep` ".concat(minuteStep, " is invalid. It should be a factor of 60."));
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(isSecondStepValid, "`secondStep` ".concat(secondStep, " is invalid. It should be a factor of 60."));
  } // ============================ State =============================


  var panelContext = react__WEBPACK_IMPORTED_MODULE_5__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_19__["default"]);
  var operationRef = panelContext.operationRef,
      panelDivRef = panelContext.panelRef,
      onContextSelect = panelContext.onSelect,
      hideRanges = panelContext.hideRanges,
      defaultOpenValue = panelContext.defaultOpenValue;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_5__["useContext"](_RangeContext__WEBPACK_IMPORTED_MODULE_21__["default"]),
      inRange = _React$useContext.inRange,
      panelPosition = _React$useContext.panelPosition,
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var panelRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"]({}); // Handle init logic

  var initRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](true); // Value

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(null, {
    value: value,
    defaultValue: defaultValue,
    postState: function postState(val) {
      if (!val && defaultOpenValue && picker === 'time') {
        return defaultOpenValue;
      }

      return val;
    }
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setInnerValue = _useMergedState2[1]; // View date control


  var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(null, {
    value: pickerValue,
    defaultValue: defaultPickerValue || mergedValue,
    postState: function postState(date) {
      var now = generateConfig.getNow();
      if (!date) return now; // When value is null and set showTime

      if (!mergedValue && showTime) {
        if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(showTime) === 'object') {
          return Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__["setDateTime"])(generateConfig, date, showTime.defaultValue || now);
        }

        if (defaultValue) {
          return Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__["setDateTime"])(generateConfig, date, defaultValue);
        }

        return Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__["setDateTime"])(generateConfig, date, now);
      }

      return date;
    }
  }),
      _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMergedState3, 2),
      viewDate = _useMergedState4[0],
      setInnerViewDate = _useMergedState4[1];

  var setViewDate = function setViewDate(date) {
    setInnerViewDate(date);

    if (onPickerValueChange) {
      onPickerValueChange(date);
    }
  }; // Panel control


  var getInternalNextMode = function getInternalNextMode(nextMode) {
    var getNextMode = _utils_uiUtil__WEBPACK_IMPORTED_MODULE_20__["PickerModeMap"][picker];

    if (getNextMode) {
      return getNextMode(nextMode);
    }

    return nextMode;
  }; // Save panel is changed from which panel


  var _useMergedState5 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    if (picker === 'time') {
      return 'time';
    }

    return getInternalNextMode('date');
  }, {
    value: mode
  }),
      _useMergedState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMergedState5, 2),
      mergedMode = _useMergedState6[0],
      setInnerMode = _useMergedState6[1];

  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    setInnerMode(picker);
  }, [picker]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](function () {
    return mergedMode;
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      sourceMode = _React$useState2[0],
      setSourceMode = _React$useState2[1];

  var onInternalPanelChange = function onInternalPanelChange(newMode, viewValue) {
    var nextMode = getInternalNextMode(newMode || mergedMode);
    setSourceMode(mergedMode);
    setInnerMode(nextMode);

    if (onPanelChange && (mergedMode !== nextMode || Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_18__["isEqual"])(generateConfig, viewDate, viewDate))) {
      onPanelChange(viewValue, nextMode);
    }
  };

  var triggerSelect = function triggerSelect(date, type) {
    var forceTriggerSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (mergedMode === picker || forceTriggerSelect) {
      setInnerValue(date);

      if (onSelect) {
        onSelect(date);
      }

      if (onContextSelect) {
        onContextSelect(date, type);
      }

      if (onChange && !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_18__["isEqual"])(generateConfig, date, mergedValue) && !(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date))) {
        onChange(date);
      }
    }
  }; // ========================= Interactive ==========================


  var onInternalKeyDown = function onInternalKeyDown(e) {
    if (panelRef.current && panelRef.current.onKeyDown) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].LEFT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].RIGHT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].UP, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].PAGE_UP, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].PAGE_DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].ENTER].includes(e.which)) {
        e.preventDefault();
      }

      return panelRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(false, 'Panel not correct handle keyDown event. Please help to fire issue about this.');
      return false;
    }
    /* eslint-enable no-lone-blocks */
  };

  var onInternalBlur = function onInternalBlur(e) {
    if (panelRef.current && panelRef.current.onBlur) {
      panelRef.current.onBlur(e);
    }
  };

  if (operationRef && panelPosition !== 'right') {
    operationRef.current = {
      onKeyDown: onInternalKeyDown,
      onClose: function onClose() {
        if (panelRef.current && panelRef.current.onClose) {
          panelRef.current.onClose();
        }
      }
    };
  } // ============================ Effect ============================


  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (value && !initRef.current) {
      setInnerViewDate(value);
    }
  }, [value]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    initRef.current = false;
  }, []); // ============================ Panels ============================

  var panelNode;

  var pickerProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props), {}, {
    operationRef: panelRef,
    prefixCls: prefixCls,
    viewDate: viewDate,
    value: mergedValue,
    onViewDateChange: setViewDate,
    sourceMode: sourceMode,
    onPanelChange: onInternalPanelChange,
    disabledDate: disabledDate
  });

  delete pickerProps.onChange;
  delete pickerProps.onSelect;

  switch (mergedMode) {
    case 'decade':
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_DecadePanel__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'year':
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_YearPanel__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'month':
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_MonthPanel__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'quarter':
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_QuarterPanel__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'week':
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_WeekPanel__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'time':
      delete pickerProps.showTime;
      panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_TimePanel__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(showTime) === 'object' ? showTime : null, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    default:
      if (showTime) {
        panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_DatetimePanel__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      } else {
        panelNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_panels_DatePanel__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      }

  } // ============================ Footer ============================


  var extraFooter;
  var rangesNode;

  var onNow = function onNow() {
    var now = generateConfig.getNow();
    var lowerBoundTime = Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__["getLowerBoundTime"])(generateConfig.getHour(now), generateConfig.getMinute(now), generateConfig.getSecond(now), isHourStepValid ? hourStep : 1, isMinuteStepValid ? minuteStep : 1, isSecondStepValid ? secondStep : 1);
    var adjustedNow = Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_24__["setTime"])(generateConfig, now, lowerBoundTime[0], // hour
    lowerBoundTime[1], // minute
    lowerBoundTime[2]);
    triggerSelect(adjustedNow, 'submit');
  };

  if (!hideRanges) {
    extraFooter = Object(_utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_22__["default"])(prefixCls, mergedMode, renderExtraFooter);
    rangesNode = Object(_utils_getRanges__WEBPACK_IMPORTED_MODULE_23__["default"])({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !mergedValue || disabledDate && disabledDate(mergedValue),
      locale: locale,
      showNow: showNow,
      onNow: needConfirmButton && onNow,
      onOk: function onOk() {
        if (mergedValue) {
          triggerSelect(mergedValue, 'submit', true);

          if (_onOk) {
            _onOk(mergedValue);
          }
        }
      }
    });
  }

  var todayNode;

  if (showToday && mergedMode === 'date' && picker === 'date' && !showTime) {
    var now = generateConfig.getNow();
    var todayCls = "".concat(prefixCls, "-today-btn");
    var disabled = disabledDate && disabledDate(now);
    todayNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(todayCls, disabled && "".concat(todayCls, "-disabled")),
      "aria-disabled": disabled,
      onClick: function onClick() {
        if (!disabled) {
          triggerSelect(now, 'mouse', true);
        }
      }
    }, locale.today);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_PanelContext__WEBPACK_IMPORTED_MODULE_19__["default"].Provider, {
    value: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, panelContext), {}, {
      mode: mergedMode,
      hideHeader: 'hideHeader' in props ? hideHeader : panelContext.hideHeader,
      hidePrevBtn: inRange && panelPosition === 'right',
      hideNextBtn: inRange && panelPosition === 'left'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    tabIndex: tabIndex,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-panel"), className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue[0] && rangedValue[1]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === 'rtl'), _classNames)),
    style: style,
    onKeyDown: onInternalKeyDown,
    onBlur: onInternalBlur,
    onMouseDown: onMouseDown,
    ref: panelDivRef
  }, panelNode, extraFooter || rangesNode || todayNode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: "".concat(prefixCls, "-footer")
  }, extraFooter, rangesNode, todayNode) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (PickerPanel);
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-picker/es/PickerTrigger.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/es/PickerTrigger.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");




var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

function PickerTrigger(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      popupElement = _ref.popupElement,
      popupStyle = _ref.popupStyle,
      visible = _ref.visible,
      dropdownClassName = _ref.dropdownClassName,
      dropdownAlign = _ref.dropdownAlign,
      transitionName = _ref.transitionName,
      getPopupContainer = _ref.getPopupContainer,
      children = _ref.children,
      range = _ref.range,
      popupPlacement = _ref.popupPlacement,
      direction = _ref.direction;
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");

  var getPopupPlacement = function getPopupPlacement() {
    if (popupPlacement !== undefined) {
      return popupPlacement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showAction: [],
    hideAction: [],
    popupPlacement: getPopupPlacement(),
    builtinPlacements: BUILT_IN_PLACEMENTS,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: transitionName,
    popup: popupElement,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(dropdownPrefixCls, "-range"), range), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === 'rtl'), _classNames)),
    popupStyle: popupStyle,
    getPopupContainer: getPopupContainer
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (PickerTrigger);

/***/ }),

/***/ "./node_modules/rc-picker/es/RangeContext.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/RangeContext.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RangeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
/* harmony default export */ __webpack_exports__["default"] = (RangeContext);

/***/ }),

/***/ "./node_modules/rc-picker/es/RangePicker.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-picker/es/RangePicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _PickerTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PickerTrigger */ "./node_modules/rc-picker/es/PickerTrigger.js");
/* harmony import */ var _PickerPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PickerPanel */ "./node_modules/rc-picker/es/PickerPanel.js");
/* harmony import */ var _hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hooks/usePickerInput */ "./node_modules/rc-picker/es/hooks/usePickerInput.js");
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useValueTexts */ "./node_modules/rc-picker/es/hooks/useValueTexts.js");
/* harmony import */ var _hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useTextValueMapping */ "./node_modules/rc-picker/es/hooks/useTextValueMapping.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _hooks_useRangeDisabled__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hooks/useRangeDisabled */ "./node_modules/rc-picker/es/hooks/useRangeDisabled.js");
/* harmony import */ var _utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/getExtraFooter */ "./node_modules/rc-picker/es/utils/getExtraFooter.js");
/* harmony import */ var _utils_getRanges__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/getRanges */ "./node_modules/rc-picker/es/utils/getRanges.js");
/* harmony import */ var _hooks_useRangeViewDates__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hooks/useRangeViewDates */ "./node_modules/rc-picker/es/hooks/useRangeViewDates.js");
/* harmony import */ var _hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hooks/useHoverValue */ "./node_modules/rc-picker/es/hooks/useHoverValue.js");






























function reorderValues(values, generateConfig) {
  if (values && values[0] && values[1] && generateConfig.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }

  return values;
}

function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }

  if (allowEmpty && allowEmpty[index]) {
    return true;
  }

  if (disabled[(index + 1) % 2]) {
    return true;
  }

  return false;
}

function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      id = props.id,
      style = props.style,
      className = props.className,
      popupStyle = props.popupStyle,
      dropdownClassName = props.dropdownClassName,
      transitionName = props.transitionName,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      generateConfig = props.generateConfig,
      locale = props.locale,
      placeholder = props.placeholder,
      autoFocus = props.autoFocus,
      disabled = props.disabled,
      format = props.format,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      showTime = props.showTime,
      use12Hours = props.use12Hours,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '~' : _props$separator,
      value = props.value,
      defaultValue = props.defaultValue,
      defaultPickerValue = props.defaultPickerValue,
      open = props.open,
      defaultOpen = props.defaultOpen,
      disabledDate = props.disabledDate,
      _disabledTime = props.disabledTime,
      dateRender = props.dateRender,
      panelRender = props.panelRender,
      ranges = props.ranges,
      allowEmpty = props.allowEmpty,
      allowClear = props.allowClear,
      suffixIcon = props.suffixIcon,
      clearIcon = props.clearIcon,
      pickerRef = props.pickerRef,
      inputReadOnly = props.inputReadOnly,
      mode = props.mode,
      renderExtraFooter = props.renderExtraFooter,
      onChange = props.onChange,
      onOpenChange = props.onOpenChange,
      onPanelChange = props.onPanelChange,
      onCalendarChange = props.onCalendarChange,
      _onFocus = props.onFocus,
      onBlur = props.onBlur,
      _onOk = props.onOk,
      _onKeyDown = props.onKeyDown,
      components = props.components,
      order = props.order,
      direction = props.direction,
      activePickerIndex = props.activePickerIndex,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time'; // We record opened status here in case repeat open with picker

  var openRecordsRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])({});
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var panelDivRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var startInputDivRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var endInputDivRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var separatorRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var startInputRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var endInputRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null); // ============================= Misc ==============================

  var formatList = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["toArray"])(Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["getDefaultFormat"])(format, picker, showTime, use12Hours)); // Active picker

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__["default"])(0, {
    value: activePickerIndex
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMergedState, 2),
      mergedActivePickerIndex = _useMergedState2[0],
      setMergedActivePickerIndex = _useMergedState2[1]; // Operation ref


  var operationRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var mergedDisabled = react__WEBPACK_IMPORTED_MODULE_9__["useMemo"](function () {
    if (Array.isArray(disabled)) {
      return disabled;
    }

    return [disabled || false, disabled || false];
  }, [disabled]); // ============================= Value =============================

  var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__["default"])(null, {
    value: value,
    defaultValue: defaultValue,
    postState: function postState(values) {
      return picker === 'time' && !order ? values : reorderValues(values, generateConfig);
    }
  }),
      _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMergedState3, 2),
      mergedValue = _useMergedState4[0],
      setInnerValue = _useMergedState4[1]; // =========================== View Date ===========================
  // Config view panel


  var _useRangeViewDates = Object(_hooks_useRangeViewDates__WEBPACK_IMPORTED_MODULE_26__["default"])({
    values: mergedValue,
    picker: picker,
    defaultDates: defaultPickerValue,
    generateConfig: generateConfig
  }),
      _useRangeViewDates2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useRangeViewDates, 2),
      getViewDate = _useRangeViewDates2[0],
      setViewDate = _useRangeViewDates2[1]; // ========================= Select Values =========================


  var _useMergedState5 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__["default"])(mergedValue, {
    postState: function postState(values) {
      var postValues = values;

      if (mergedDisabled[0] && mergedDisabled[1]) {
        return postValues;
      } // Fill disabled unit


      for (var i = 0; i < 2; i += 1) {
        if (mergedDisabled[i] && !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(postValues, i) && !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(allowEmpty, i)) {
          postValues = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(postValues, generateConfig.getNow(), i);
        }
      }

      return postValues;
    }
  }),
      _useMergedState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMergedState5, 2),
      selectedValue = _useMergedState6[0],
      setSelectedValue = _useMergedState6[1]; // ============================= Modes =============================


  var _useMergedState7 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__["default"])([picker, picker], {
    value: mode
  }),
      _useMergedState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMergedState7, 2),
      mergedModes = _useMergedState8[0],
      setInnerModes = _useMergedState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setInnerModes([picker, picker]);
  }, [picker]);

  var triggerModesChange = function triggerModesChange(modes, values) {
    setInnerModes(modes);

    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  }; // ========================= Disable Date ==========================


  var _useRangeDisabled = Object(_hooks_useRangeDisabled__WEBPACK_IMPORTED_MODULE_23__["default"])({
    picker: picker,
    selectedValue: selectedValue,
    locale: locale,
    disabled: mergedDisabled,
    disabledDate: disabledDate,
    generateConfig: generateConfig
  }, openRecordsRef.current[1], openRecordsRef.current[0]),
      _useRangeDisabled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useRangeDisabled, 2),
      disabledStartDate = _useRangeDisabled2[0],
      disabledEndDate = _useRangeDisabled2[1]; // ============================= Open ==============================


  var _useMergedState9 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_12__["default"])(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
    },
    onChange: function onChange(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }

      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }),
      _useMergedState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useMergedState9, 2),
      mergedOpen = _useMergedState10[0],
      triggerInnerOpen = _useMergedState10[1];

  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1; // ============================= Popup =============================
  // Popup min width

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
      popupMinWidth = _useState2[0],
      setPopupMinWidth = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (!mergedOpen && containerRef.current) {
      setPopupMinWidth(containerRef.current.offsetWidth);
    }
  }, [mergedOpen]); // ============================ Trigger ============================

  var triggerRef = react__WEBPACK_IMPORTED_MODULE_9__["useRef"]();

  function _triggerOpen(newOpen, index) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index] = true;
      setMergedActivePickerIndex(index);
      triggerInnerOpen(newOpen); // Open to reset view date

      if (!mergedOpen) {
        setViewDate(null, index);
      }
    } else if (mergedActivePickerIndex === index) {
      triggerInnerOpen(newOpen); // Clean up async
      // This makes ref not quick refresh in case user open another input with blur trigger

      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function () {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }

  function triggerOpenAndFocus(index) {
    _triggerOpen(true, index); // Use setTimeout to make sure panel DOM exists


    setTimeout(function () {
      var inputRef = [startInputRef, endInputRef][index];

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }

  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(values, 0);
    var endValue = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(values, 1); // >>>>> Format start & end values

    if (startValue && endValue && generateConfig.isAfter(startValue, endValue)) {
      if ( // WeekPicker only compare week
      picker === 'week' && !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["isSameWeek"])(generateConfig, locale.locale, startValue, endValue) || // QuotaPicker only compare week
      picker === 'quarter' && !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["isSameQuarter"])(generateConfig, startValue, endValue) || // Other non-TimePicker compare date
      picker !== 'week' && picker !== 'quarter' && picker !== 'time' && !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["isSameDate"])(generateConfig, startValue, endValue)) {
        // Clean up end date when start date is after end date
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        } // Clean up cache since invalidate


        openRecordsRef.current = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, sourceIndex, true);
      } else if (picker !== 'time' || order !== false) {
        // Reorder when in same date
        values = reorderValues(values, generateConfig);
      }
    }

    setSelectedValue(values);
    var startStr = values && values[0] ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["formatValue"])(values[0], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';
    var endStr = values && values[1] ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["formatValue"])(values[1], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';

    if (onCalendarChange) {
      var info = {
        range: sourceIndex === 0 ? 'start' : 'end'
      };
      onCalendarChange(values, [startStr, endStr], info);
    } // >>>>> Trigger `onChange` event


    var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled, allowEmpty);
    var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled, allowEmpty);
    var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;

    if (canTrigger) {
      // Trigger onChange only when value is validate
      setInnerValue(values);

      if (onChange && (!Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["isEqual"])(generateConfig, Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(mergedValue, 0), startValue) || !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["isEqual"])(generateConfig, Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(mergedValue, 1), endValue))) {
        onChange(values, [startStr, endStr]);
      }
    } // >>>>> Open picker when
    // Always open another picker if possible


    var nextOpenIndex = null;

    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }

    if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex && (!openRecordsRef.current[nextOpenIndex] || !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(values, nextOpenIndex)) && Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(values, sourceIndex)) {
      // Delay to focus to avoid input blur trigger expired selectedValues
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }

  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_11__["default"])(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  }; // ============================= Text ==============================


  var sharedTextHooksProps = {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  };

  var _useValueTexts = Object(_hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_20__["default"])(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, 0), sharedTextHooksProps),
      _useValueTexts2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useValueTexts, 2),
      startValueTexts = _useValueTexts2[0],
      firstStartValueText = _useValueTexts2[1];

  var _useValueTexts3 = Object(_hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_20__["default"])(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, 1), sharedTextHooksProps),
      _useValueTexts4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useValueTexts3, 2),
      endValueTexts = _useValueTexts4[0],
      firstEndValueText = _useValueTexts4[1];

  var _onTextChange = function onTextChange(newText, index) {
    var inputDate = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["parseValue"])(newText, {
      locale: locale,
      formatList: formatList,
      generateConfig: generateConfig
    });
    var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;

    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(selectedValue, inputDate, index));
      setViewDate(inputDate, index);
    }
  };

  var _useTextValueMapping = Object(_hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_21__["default"])({
    valueTexts: startValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 0);
    }
  }),
      _useTextValueMapping2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useTextValueMapping, 3),
      startText = _useTextValueMapping2[0],
      triggerStartTextChange = _useTextValueMapping2[1],
      resetStartText = _useTextValueMapping2[2];

  var _useTextValueMapping3 = Object(_hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_21__["default"])({
    valueTexts: endValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 1);
    }
  }),
      _useTextValueMapping4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useTextValueMapping3, 3),
      endText = _useTextValueMapping4[0],
      triggerEndTextChange = _useTextValueMapping4[1],
      resetEndText = _useTextValueMapping4[2];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
      rangeHoverValue = _useState4[0],
      setRangeHoverValue = _useState4[1]; // ========================== Hover Range ==========================


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
      hoverRangedValue = _useState6[0],
      setHoverRangedValue = _useState6[1];

  var _useHoverValue = Object(_hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_27__["default"])(startText, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useHoverValue, 3),
      startHoverValue = _useHoverValue2[0],
      onStartEnter = _useHoverValue2[1],
      onStartLeave = _useHoverValue2[2];

  var _useHoverValue3 = Object(_hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_27__["default"])(endText, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useHoverValue3, 3),
      endHoverValue = _useHoverValue4[0],
      onEndEnter = _useHoverValue4[1],
      onEndLeave = _useHoverValue4[2];

  var onDateMouseEnter = function onDateMouseEnter(date) {
    setHoverRangedValue(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(selectedValue, date, mergedActivePickerIndex));

    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };

  var onDateMouseLeave = function onDateMouseLeave() {
    setHoverRangedValue(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(selectedValue, null, mergedActivePickerIndex));

    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  }; // ============================= Input =============================


  var getSharedInputHookProps = function getSharedInputHookProps(index, resetText) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown: forwardKeyDown,
      onBlur: onBlur,
      isClickOutside: function isClickOutside(target) {
        return !Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["elementsContains"])([panelDivRef.current, startInputDivRef.current, endInputDivRef.current], target);
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index);

        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index);
      },
      onSubmit: function onSubmit() {
        triggerChange(selectedValue, index);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index);

        setSelectedValue(mergedValue);
        resetText();
      }
    };
  };

  var _usePickerInput = Object(_hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, getSharedInputHookProps(0, resetStartText)), {}, {
    open: startOpen,
    value: startText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })),
      _usePickerInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_usePickerInput, 2),
      startInputProps = _usePickerInput2[0],
      _usePickerInput2$ = _usePickerInput2[1],
      startFocused = _usePickerInput2$.focused,
      startTyping = _usePickerInput2$.typing;

  var _usePickerInput3 = Object(_hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, getSharedInputHookProps(1, resetEndText)), {}, {
    open: endOpen,
    value: endText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })),
      _usePickerInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_usePickerInput3, 2),
      endInputProps = _usePickerInput4[0],
      _usePickerInput4$ = _usePickerInput4[1],
      endFocused = _usePickerInput4$.focused,
      endTyping = _usePickerInput4$.typing; // ========================== Click Picker ==========================


  var onPickerClick = function onPickerClick(e) {
    // When click inside the picker & outside the picker's input elements
    // the panel should still be opened
    if (!mergedOpen && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };

  var onPickerMouseDown = function onPickerMouseDown(e) {
    // shouldn't affect input elements if picker is active
    if (mergedOpen && (startFocused || endFocused) && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      e.preventDefault();
    }
  }; // ============================= Sync ==============================
  // Close should sync back with text value


  var startStr = mergedValue && mergedValue[0] ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["formatValue"])(mergedValue[0], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  var endStr = mergedValue && mergedValue[1] ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["formatValue"])(mergedValue[1], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);

      if (!startValueTexts.length || startValueTexts[0] === '') {
        triggerStartTextChange('');
      } else if (firstStartValueText !== startText) {
        resetStartText();
      }

      if (!endValueTexts.length || endValueTexts[0] === '') {
        triggerEndTextChange('');
      } else if (firstEndValueText !== endText) {
        resetEndText();
      }
    }
  }, [mergedOpen, startValueTexts, endValueTexts]); // Sync innerValue with control mode

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setSelectedValue(mergedValue);
  }, [startStr, endStr]); // ============================ Warning ============================

  if (true) {
    if (value && Array.isArray(disabled) && (Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(disabled, 0) && !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(value, 0) || Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(disabled, 1) && !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(value, 1))) {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_11__["default"])(false, '`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.');
    }
  } // ============================ Private ============================


  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }

        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      }
    };
  } // ============================ Ranges =============================


  var rangeLabels = Object.keys(ranges || {});
  var rangeList = rangeLabels.map(function (label) {
    var range = ranges[label];
    var newValues = typeof range === 'function' ? range() : range;
    return {
      label: label,
      onClick: function onClick() {
        triggerChange(newValues, null);

        _triggerOpen(false, mergedActivePickerIndex);
      },
      onMouseEnter: function onMouseEnter() {
        setRangeHoverValue(newValues);
      },
      onMouseLeave: function onMouseLeave() {
        setRangeHoverValue(null);
      }
    };
  }); // ============================= Panel =============================

  function renderPanel() {
    var panelPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var panelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var panelHoverRangedValue = null;

    if (mergedOpen && hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1] && generateConfig.isAfter(hoverRangedValue[1], hoverRangedValue[0])) {
      panelHoverRangedValue = hoverRangedValue;
    }

    var panelShowTime = showTime;

    if (showTime && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(showTime) === 'object' && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, showTime), {}, {
        defaultValue: Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(timeDefaultValues, mergedActivePickerIndex) || undefined
      });
    }

    var panelDateRender = null;

    if (dateRender) {
      panelDateRender = function panelDateRender(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? 'end' : 'start'
        });
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_RangeContext__WEBPACK_IMPORTED_MODULE_22__["default"].Provider, {
      value: {
        inRange: true,
        panelPosition: panelPosition,
        rangedValue: rangeHoverValue || selectedValue,
        hoverRangedValue: panelHoverRangedValue
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_PickerPanel__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props, panelProps, {
      dateRender: panelDateRender,
      showTime: panelShowTime,
      mode: mergedModes[mergedActivePickerIndex],
      generateConfig: generateConfig,
      style: undefined,
      direction: direction,
      disabledDate: mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
      disabledTime: function disabledTime(date) {
        if (_disabledTime) {
          return _disabledTime(date, mergedActivePickerIndex === 0 ? 'start' : 'end');
        }

        return false;
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex === 0 ? !startTyping : !endTyping)),
      value: Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, mergedActivePickerIndex),
      locale: locale,
      tabIndex: -1,
      onPanelChange: function onPanelChange(date, newMode) {
        // clear hover value when panel change
        if (mergedActivePickerIndex === 0) {
          onStartLeave(true);
        }

        if (mergedActivePickerIndex === 1) {
          onEndLeave(true);
        }

        triggerModesChange(Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(mergedModes, newMode, mergedActivePickerIndex), Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(selectedValue, date, mergedActivePickerIndex));
        var viewDate = date;

        if (panelPosition === 'right' && mergedModes[mergedActivePickerIndex] === newMode) {
          viewDate = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["getClosingViewDate"])(viewDate, newMode, generateConfig, -1);
        }

        setViewDate(viewDate, mergedActivePickerIndex);
      },
      onOk: null,
      onSelect: undefined,
      onChange: undefined,
      defaultValue: mergedActivePickerIndex === 0 ? Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, 1) : Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, 0),
      defaultPickerValue: undefined
    })));
  }

  var arrowLeft = 0;
  var panelLeft = 0;

  if (mergedActivePickerIndex && startInputDivRef.current && separatorRef.current && panelDivRef.current) {
    // Arrow offset
    arrowLeft = startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;

    if (panelDivRef.current.offsetWidth && arrowLeft > panelDivRef.current.offsetWidth) {
      panelLeft = arrowLeft;
    }
  }

  var arrowPositionStyle = direction === 'rtl' ? {
    right: arrowLeft
  } : {
    left: arrowLeft
  };

  function renderPanels() {
    var panels;
    var extraNode = Object(_utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_24__["default"])(prefixCls, mergedModes[mergedActivePickerIndex], renderExtraFooter);
    var rangesNode = Object(_utils_getRanges__WEBPACK_IMPORTED_MODULE_25__["default"])({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, mergedActivePickerIndex) || disabledDate && disabledDate(selectedValue[mergedActivePickerIndex]),
      locale: locale,
      rangeList: rangeList,
      onOk: function onOk() {
        if (Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(selectedValue, mergedActivePickerIndex)) {
          // triggerChangeOld(selectedValue);
          triggerChange(selectedValue, mergedActivePickerIndex);

          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      }
    });

    if (picker !== 'time' && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["getClosingViewDate"])(viewDate, picker, generateConfig);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        }
      });
      var rightPanel = renderPanel('right', {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_19__["getClosingViewDate"])(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex);
        }
      });

      if (direction === 'rtl') {
        panels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, rightPanel, showDoublePanel && leftPanel);
      } else {
        panels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, leftPanel, showDoublePanel && rightPanel);
      }
    } else {
      panels = renderPanel();
    }

    var mergedNodes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
      className: "".concat(prefixCls, "-panels")
    }, panels), (extraNode || rangesNode) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
      className: "".concat(prefixCls, "-footer")
    }, extraNode, rangesNode));

    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
      className: "".concat(prefixCls, "-panel-container"),
      style: {
        marginLeft: panelLeft
      },
      ref: panelDivRef,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
      }
    }, mergedNodes);
  }

  var rangePanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
    style: {
      minWidth: popupMinWidth
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "".concat(prefixCls, "-range-arrow"),
    style: arrowPositionStyle
  }), renderPanels()); // ============================= Icons =============================

  var suffixNode;

  if (suffixIcon) {
    suffixNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }

  var clearNode;

  if (allowClear && (Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(mergedValue, 0) && !mergedDisabled[0] || Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(mergedValue, 1) && !mergedDisabled[1])) {
    clearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        var values = mergedValue;

        if (!mergedDisabled[0]) {
          values = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(values, null, 0);
        }

        if (!mergedDisabled[1]) {
          values = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(values, null, 1);
        }

        triggerChange(values, null);

        _triggerOpen(false, mergedActivePickerIndex);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  }

  var inputSharedProps = {
    size: Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_17__["getInputSize"])(picker, formatList[0], generateConfig)
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;

  if (startInputDivRef.current && endInputDivRef.current && separatorRef.current) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }

  var activeBarPositionStyle = direction === 'rtl' ? {
    right: activeBarLeft
  } : {
    left: activeBarLeft
  }; // ============================ Return =============================

  var onContextSelect = function onContextSelect(date, type) {
    var values = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["updateValues"])(selectedValue, date, mergedActivePickerIndex);

    if (type === 'submit' || type !== 'key' && !needConfirmButton) {
      // triggerChange will also update selected values
      triggerChange(values, mergedActivePickerIndex); // clear hover value style

      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_PanelContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
    value: {
      operationRef: operationRef,
      hideHeader: picker === 'time',
      onDateMouseEnter: onDateMouseEnter,
      onDateMouseLeave: onDateMouseLeave,
      hideRanges: true,
      onSelect: onContextSelect,
      open: mergedOpen
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_PickerTrigger__WEBPACK_IMPORTED_MODULE_13__["default"], {
    visible: mergedOpen,
    popupElement: rangePanel,
    popupStyle: popupStyle,
    prefixCls: prefixCls,
    dropdownClassName: dropdownClassName,
    dropdownAlign: dropdownAlign,
    getPopupContainer: getPopupContainer,
    transitionName: transitionName,
    range: true,
    direction: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, "".concat(prefixCls, "-range"), className, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled[0] && mergedDisabled[1]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex === 0 ? startFocused : endFocused), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
    style: style,
    onClick: onPickerClick,
    onMouseDown: onPickerMouseDown
  }, Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["default"])(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(prefixCls, "-input"), (_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue), _classNames3)),
    ref: startInputDivRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: id,
    disabled: mergedDisabled[0],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !startTyping,
    value: startHoverValue || startText,
    onChange: function onChange(e) {
      triggerStartTextChange(e.target.value);
    },
    autoFocus: autoFocus,
    placeholder: Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(placeholder, 0) || '',
    ref: startInputRef
  }, startInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "".concat(prefixCls, "-range-separator"),
    ref: separatorRef
  }, separator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(prefixCls, "-input"), (_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue), _classNames4)),
    ref: endInputDivRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    disabled: mergedDisabled[1],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !endTyping,
    value: endHoverValue || endText,
    onChange: function onChange(e) {
      triggerEndTextChange(e.target.value);
    },
    placeholder: Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_16__["getValue"])(placeholder, 1) || '',
    ref: endInputRef
  }, endInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "".concat(prefixCls, "-active-bar"),
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, activeBarPositionStyle), {}, {
      width: activeBarWidth,
      position: 'absolute'
    })
  }), suffixNode, clearNode)));
} // Wrap with class component to enable pass generic with instance method


var RangePicker = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RangePicker, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(RangePicker);

  function RangePicker() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RangePicker);

    _this = _super.apply(this, arguments);
    _this.pickerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createRef"]();

    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RangePicker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"](InnerRangePicker, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);

  return RangePicker;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RangePicker);

/***/ }),

/***/ "./node_modules/rc-picker/es/generate/moment.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-picker/es/generate/moment.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");


var generateConfig = {
  // get
  getNow: function getNow() {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()();
  },
  getFixedDate: function getFixedDate(string) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(string, 'YYYY-MM-DD');
  },
  getEndDate: function getEndDate(date) {
    var clone = date.clone();
    return clone.endOf('month');
  },
  getWeekDay: function getWeekDay(date) {
    var clone = date.clone().locale('en_US');
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  // set
  addYear: function addYear(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'year');
  },
  addMonth: function addMonth(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'month');
  },
  addDate: function addDate(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'day');
  },
  setYear: function setYear(date, year) {
    var clone = date.clone();
    return clone.year(year);
  },
  setMonth: function setMonth(date, month) {
    var clone = date.clone();
    return clone.month(month);
  },
  setDate: function setDate(date, num) {
    var clone = date.clone();
    return clone.date(num);
  },
  setHour: function setHour(date, hour) {
    var clone = date.clone();
    return clone.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    var clone = date.clone();
    return clone.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    var clone = date.clone();
    return clone.second(second);
  },
  // Compare
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      var date = moment__WEBPACK_IMPORTED_MODULE_0___default()().locale(locale);
      return date.localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function getWeekFirstDate(locale, date) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.weekday(0);
    },
    getWeek: function getWeek(locale, date) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      var date = moment__WEBPACK_IMPORTED_MODULE_0___default()().locale(locale);
      return date.localeData().weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      var date = moment__WEBPACK_IMPORTED_MODULE_0___default()().locale(locale);
      return date.localeData().monthsShort();
    },
    format: function format(locale, date, _format) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.format(_format);
    },
    parse: function parse(locale, text, formats) {
      var fallbackFormatList = [];

      for (var i = 0; i < formats.length; i += 1) {
        var format = formats[i];
        var formatText = text;

        if (format.includes('wo') || format.includes('Wo')) {
          format = format.replace(/wo/g, 'w').replace(/Wo/g, 'W');
          var matchFormat = format.match(/[-YyMmDdHhSsWwGg]+/g);
          var matchText = formatText.match(/[-\d]+/g);

          if (matchFormat && matchText) {
            format = matchFormat.join('');
            formatText = matchText.join('');
          } else {
            fallbackFormatList.push(format.replace(/o/g, ''));
          }
        }

        var date = moment__WEBPACK_IMPORTED_MODULE_0___default()(formatText, format, locale, true);

        if (date.isValid()) {
          return date;
        }
      } // Fallback to fuzzy matching, this should always not reach match or need fire a issue


      for (var _i = 0; _i < fallbackFormatList.length; _i += 1) {
        var _date = moment__WEBPACK_IMPORTED_MODULE_0___default()(text, fallbackFormatList[_i], locale, false);
        /* istanbul ignore next */


        if (_date.isValid()) {
          Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__["noteOnce"])(false, 'Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this.');
          return _date;
        }
      }

      return null;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (generateConfig);

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useCellClassName.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useCellClassName.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCellClassName; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");



function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls,
      generateConfig = _ref.generateConfig,
      rangedValue = _ref.rangedValue,
      hoverRangedValue = _ref.hoverRangedValue,
      isInView = _ref.isInView,
      isSameCell = _ref.isSameCell,
      offsetCell = _ref.offsetCell,
      today = _ref.today,
      value = _ref.value;

  function getClassName(currentDate) {
    var _ref2;

    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(rangedValue, 0);
    var rangeEnd = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(rangedValue, 1);
    var hoverStart = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(hoverRangedValue, 0);
    var hoverEnd = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(hoverRangedValue, 1);
    var isRangeHovered = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_1__["isInRange"])(generateConfig, hoverStart, hoverEnd, currentDate);

    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }

    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }

    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return _ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-in-view"), isInView(currentDate)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-in-range"), Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_1__["isInRange"])(generateConfig, rangeStart, rangeEnd, currentDate)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-start"), isRangeStart(currentDate)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-end"), isRangeEnd(currentDate)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-start-single"), isRangeStart(currentDate) && !rangeEnd), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-end-single"), isRangeEnd(currentDate) && !rangeStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-start-near-hover"), isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_1__["isInRange"])(generateConfig, hoverStart, hoverEnd, prevDate))), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-end-near-hover"), isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_1__["isInRange"])(generateConfig, hoverStart, hoverEnd, nextDate))), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover"), isRangeHovered), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-start"), isHoverStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-end"), isHoverEnd), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start"), isHoverEdgeStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end"), isHoverEdgeEnd), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start-near-range"), isHoverEdgeStart && isSameCell(prevDate, rangeEnd)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end-near-range"), isHoverEdgeEnd && isSameCell(nextDate, rangeStart)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-today"), isSameCell(today, currentDate)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "".concat(cellPrefixCls, "-selected"), isSameCell(value, currentDate)), _ref2;
  }

  return getClassName;
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useHoverValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useHoverValue.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHoverValue; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useValueTexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useValueTexts */ "./node_modules/rc-picker/es/hooks/useValueTexts.js");



function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
      generateConfig = _ref.generateConfig,
      locale = _ref.locale;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      internalSetValue = _useState2[1];

  var raf = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    cancelAnimationFrame(raf.current);

    if (immediately) {
      internalSetValue(val);
      return;
    }

    raf.current = requestAnimationFrame(function () {
      internalSetValue(val);
    });
  }

  var _useValueTexts = Object(_useValueTexts__WEBPACK_IMPORTED_MODULE_2__["default"])(value, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useValueTexts2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useValueTexts, 2),
      firstText = _useValueTexts2[1];

  function onEnter(date) {
    setValue(date);
  }

  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onLeave(true);
  }, [valueText]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return cancelAnimationFrame(raf.current);
    };
  }, []);
  return [firstText, onEnter, onLeave];
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/usePickerInput.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/usePickerInput.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePickerInput; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");




function usePickerInput(_ref) {
  var open = _ref.open,
      value = _ref.value,
      isClickOutside = _ref.isClickOutside,
      triggerOpen = _ref.triggerOpen,
      forwardKeyDown = _ref.forwardKeyDown,
      _onKeyDown = _ref.onKeyDown,
      blurToCancel = _ref.blurToCancel,
      onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      typing = _useState2[0],
      setTyping = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];
  /**
   * We will prevent blur to handle open event when user click outside,
   * since this will repeat trigger `onOpenChange` event.
   */


  var preventBlurRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var valueChangedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var preventDefaultRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var inputProps = {
    onMouseDown: function onMouseDown() {
      setTyping(true);
      triggerOpen(true);
    },
    onKeyDown: function onKeyDown(e) {
      var preventDefault = function preventDefault() {
        preventDefaultRef.current = true;
      };

      _onKeyDown(e, preventDefault);

      if (preventDefaultRef.current) return;

      switch (e.which) {
        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER:
          {
            if (!open) {
              triggerOpen(true);
            } else if (onSubmit() !== false) {
              setTyping(true);
            }

            e.preventDefault();
            return;
          }

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].TAB:
          {
            if (typing && open && !e.shiftKey) {
              setTyping(false);
              e.preventDefault();
            } else if (!typing && open) {
              if (!forwardKeyDown(e) && e.shiftKey) {
                setTyping(true);
                e.preventDefault();
              }
            }

            return;
          }

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ESC:
          {
            setTyping(true);
            onCancel();
            return;
          }
      }

      if (!open && ![rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing) {
        // Let popup panel handle keyboard
        forwardKeyDown(e);
      }
    },
    onFocus: function onFocus(e) {
      setTyping(true);
      setFocused(true);

      if (_onFocus) {
        _onFocus(e);
      }
    },
    onBlur: function onBlur(e) {
      if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
        preventBlurRef.current = false;
        return;
      }

      if (blurToCancel) {
        setTimeout(function () {
          var _document = document,
              activeElement = _document.activeElement;

          while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }

          if (isClickOutside(activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open) {
        triggerOpen(false);

        if (valueChangedRef.current) {
          onSubmit();
        }
      }

      setFocused(false);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }; // check if value changed

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    valueChangedRef.current = false;
  }, [open]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    valueChangedRef.current = true;
  }, [value]); // Global click handler

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__["addGlobalMouseDownEvent"])(function (e) {
      var target = Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__["getTargetFromEvent"])(e);

      if (open) {
        var clickedOutside = isClickOutside(target);

        if (!clickedOutside) {
          preventBlurRef.current = true; // Always set back in case `onBlur` prevented by user

          requestAnimationFrame(function () {
            preventBlurRef.current = false;
          });
        } else if (!focused || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  return [inputProps, {
    focused: focused,
    typing: typing
  }];
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useRangeDisabled.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useRangeDisabled.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRangeDisabled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");



function useRangeDisabled(_ref, disabledStart, disabledEnd) {
  var picker = _ref.picker,
      locale = _ref.locale,
      selectedValue = _ref.selectedValue,
      disabledDate = _ref.disabledDate,
      disabled = _ref.disabled,
      generateConfig = _ref.generateConfig;
  var startDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_1__["getValue"])(selectedValue, 0);
  var endDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_1__["getValue"])(selectedValue, 1);

  function weekFirstDate(date) {
    return generateConfig.locale.getWeekFirstDate(locale.locale, date);
  }

  function monthNumber(date) {
    var year = generateConfig.getYear(date);
    var month = generateConfig.getMonth(date);
    return year * 100 + month;
  }

  function quarterNumber(date) {
    var year = generateConfig.getYear(date);
    var quarter = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["getQuarter"])(generateConfig, date);
    return year * 10 + quarter;
  }

  var disabledStartDate = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    } // Disabled range


    if (disabled[1] && endDate) {
      return !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameDate"])(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
    } // Disabled part


    if (disabledStart && endDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) > quarterNumber(endDate);

        case 'month':
          return monthNumber(date) > monthNumber(endDate);

        case 'week':
          return weekFirstDate(date) > weekFirstDate(endDate);

        default:
          return !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameDate"])(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
      }
    }

    return false;
  }, [disabledDate, disabled[1], endDate, disabledStart]);
  var disabledEndDate = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    } // Disabled range


    if (disabled[0] && startDate) {
      return !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameDate"])(generateConfig, date, endDate) && generateConfig.isAfter(startDate, date);
    } // Disabled part


    if (disabledEnd && startDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) < quarterNumber(startDate);

        case 'month':
          return monthNumber(date) < monthNumber(startDate);

        case 'week':
          return weekFirstDate(date) < weekFirstDate(startDate);

        default:
          return !Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameDate"])(generateConfig, date, startDate) && generateConfig.isAfter(startDate, date);
      }
    }

    return false;
  }, [disabledDate, disabled[0], startDate, disabledEnd]);
  return [disabledStartDate, disabledEndDate];
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useRangeViewDates.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useRangeViewDates.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRangeViewDates; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");





function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["getClosingViewDate"])(startDate, picker, generateConfig, 1);

  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return 'same';
    }

    if (compareFunc(startNext, endDate)) {
      return 'closing';
    }

    return 'far';
  }

  switch (picker) {
    case 'year':
      return getDistance(function (start, end) {
        return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["isSameDecade"])(generateConfig, start, end);
      });

    case 'quarter':
    case 'month':
      return getDistance(function (start, end) {
        return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["isSameYear"])(generateConfig, start, end);
      });

    default:
      return getDistance(function (start, end) {
        return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(generateConfig, start, end);
      });
  }
}

function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(values, 0);
  var endDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(values, 1);

  if (index === 0) {
    return startDate;
  }

  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig);

    switch (distance) {
      case 'same':
        return startDate;

      case 'closing':
        return startDate;

      default:
        return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["getClosingViewDate"])(endDate, picker, generateConfig, -1);
    }
  }

  return startDate;
}

function useRangeViewDates(_ref) {
  var values = _ref.values,
      picker = _ref.picker,
      defaultDates = _ref.defaultDates,
      generateConfig = _ref.generateConfig;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    return [Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(defaultDates, 0), Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(defaultDates, 1)];
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      defaultViewDates = _React$useState2[0],
      setDefaultViewDates = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      viewDates = _React$useState4[0],
      setInternalViewDates = _React$useState4[1];

  var startDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(values, 0);
  var endDate = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(values, 1);

  function getViewDate(index) {
    // If set default view date, use it
    if (defaultViewDates[index]) {
      return defaultViewDates[index];
    }

    return Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(viewDates, index) || getRangeViewDate(values, index, picker, generateConfig) || startDate || endDate || generateConfig.getNow();
  }

  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["updateValues"])(viewDates, viewDate, index); // Set view date will clean up default one

      setDefaultViewDates( // Should always be an array
      Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["updateValues"])(defaultViewDates, null, index) || [null, null]); // Reset another one when not have value

      var anotherIndex = (index + 1) % 2;

      if (!Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["getValue"])(values, anotherIndex)) {
        newViewDates = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_2__["updateValues"])(newViewDates, viewDate, anotherIndex);
      }

      setInternalViewDates(newViewDates);
    } else if (startDate || endDate) {
      // Reset all when has values when `viewDate` is `null` which means from open trigger
      setInternalViewDates(null);
    }
  }

  return [getViewDate, setViewDate];
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useTextValueMapping.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useTextValueMapping.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTextValueMapping; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
      onTextChange = _ref.onTextChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      text = _React$useState2[0],
      setInnerText = _React$useState2[1];

  var valueTextsRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]([]);
  valueTextsRef.current = valueTexts;

  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }

  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (valueTexts.every(function (valText) {
      return valText !== text;
    })) {
      resetText();
    }
  }, [valueTexts.join('||')]);
  return [text, triggerTextChange, resetText];
}

/***/ }),

/***/ "./node_modules/rc-picker/es/hooks/useValueTexts.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-picker/es/hooks/useValueTexts.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useValueTexts; });
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "./node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");



function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
      generateConfig = _ref.generateConfig,
      locale = _ref.locale;
  return Object(rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!value) {
      return [[''], ''];
    } // We will convert data format back to first format


    var firstValueText = '';
    var fullValueTexts = [];

    for (var i = 0; i < formatList.length; i += 1) {
      var format = formatList[i];
      var formatStr = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(value, {
        generateConfig: generateConfig,
        locale: locale,
        format: format
      });
      fullValueTexts.push(formatStr);

      if (i === 0) {
        firstValueText = formatStr;
      }
    }

    return [fullValueTexts, firstValueText];
  }, [value, formatList], function (prev, next) {
    return prev[0] !== next[0] || !shallowequal__WEBPACK_IMPORTED_MODULE_0___default()(prev[1], next[1]);
  });
}

/***/ }),

/***/ "./node_modules/rc-picker/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-picker/es/index.js ***!
  \********************************************/
/*! exports provided: PickerPanel, RangePicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker */ "./node_modules/rc-picker/es/Picker.js");
/* harmony import */ var _PickerPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PickerPanel */ "./node_modules/rc-picker/es/PickerPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerPanel", function() { return _PickerPanel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangePicker */ "./node_modules/rc-picker/es/RangePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangePicker", function() { return _RangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Picker__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DatePanel/DateBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DatePanel/DateBody.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useCellClassName */ "./node_modules/rc-picker/es/hooks/useCellClassName.js");
/* harmony import */ var _PanelBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PanelBody */ "./node_modules/rc-picker/es/panels/PanelBody.js");







function DateBody(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      prefixColumn = props.prefixColumn,
      locale = props.locale,
      rowCount = props.rowCount,
      viewDate = props.viewDate,
      value = props.value,
      dateRender = props.dateRender;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_RangeContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var baseDate = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["getWeekStartDate"])(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow(); // ============================== Header ==============================

  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);

  if (prefixColumn) {
    headerCells.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
      key: "empty",
      "aria-label": "empty cell"
    }));
  }

  for (var i = 0; i < _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["WEEK_DAY_COUNT"]; i += 1) {
    headerCells.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
      key: i
    }, weekDaysLocale[(i + weekFirstDay) % _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["WEEK_DAY_COUNT"]]));
  } // =============================== Body ===============================


  var getCellClassName = Object(_hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__["default"])({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameDate"])(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    }
  });
  var getCellNode = dateRender ? function (date) {
    return dateRender(date, today);
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PanelBody__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    rowNum: rowCount,
    colNum: _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["WEEK_DAY_COUNT"],
    baseDate: baseDate,
    getCellNode: getCellNode,
    getCellText: generateConfig.getDate,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addDate,
    titleCell: function titleCell(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(date, {
        locale: locale,
        format: 'YYYY-MM-DD',
        generateConfig: generateConfig
      });
    },
    headerCells: headerCells
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DateBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DatePanel/DateHeader.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DatePanel/DateHeader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");






function DateHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextMonth = props.onNextMonth,
      onPrevMonth = props.onPrevMonth,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick,
      onMonthClick = props.onMonthClick;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig.getMonth(viewDate); // =================== Month & Year ===================

  var yearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    key: "year",
    onClick: onYearClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-year-btn")
  }, Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["formatValue"])(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  }));
  var monthNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    key: "month",
    onClick: onMonthClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-month-btn")
  }, locale.monthFormat ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["formatValue"])(viewDate, {
    locale: locale,
    format: locale.monthFormat,
    generateConfig: generateConfig
  }) : monthsLocale[month]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onPrev: onPrevMonth,
    onNext: onNextMonth,
    onSuperNext: onNextYear
  }), monthYearNodes);
}

/* harmony default export */ __webpack_exports__["default"] = (DateHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DatePanel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DatePanel/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DateBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateBody */ "./node_modules/rc-picker/es/panels/DatePanel/DateBody.js");
/* harmony import */ var _DateHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateHeader */ "./node_modules/rc-picker/es/panels/DatePanel/DateHeader.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");









var DATE_ROW_COUNT = 6;

function DatePanel(props) {
  var prefixCls = props.prefixCls,
      _props$panelName = props.panelName,
      panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
      keyboardConfig = props.keyboardConfig,
      active = props.active,
      operationRef = props.operationRef,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onViewDateChange = props.onViewDateChange,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_8__["createKeyDownHandler"])(event, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff * _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["WEEK_DAY_COUNT"]), 'key');
        },
        onPageUpDown: function onPageUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        }
      }, keyboardConfig));
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onMonthChange = function onMonthChange(diff) {
    var newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelPrefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(panelPrefixCls, "-active"), active))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_DateHeader__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    value: value,
    viewDate: viewDate // View Operation
    ,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onPrevMonth: function onPrevMonth() {
      onMonthChange(-1);
    },
    onNextMonth: function onNextMonth() {
      onMonthChange(1);
    },
    onMonthClick: function onMonthClick() {
      onPanelChange('month', viewDate);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_DateBody__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onSelect: function onSelect(date) {
      return _onSelect(date, 'mouse');
    },
    prefixCls: prefixCls,
    value: value,
    viewDate: viewDate,
    rowCount: DATE_ROW_COUNT
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DatePanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DatetimePanel/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DatetimePanel/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _DatePanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DatePanel */ "./node_modules/rc-picker/es/panels/DatePanel/index.js");
/* harmony import */ var _TimePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TimePanel */ "./node_modules/rc-picker/es/panels/TimePanel/index.js");
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _utils_timeUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/timeUtil */ "./node_modules/rc-picker/es/utils/timeUtil.js");












var ACTIVE_PANEL = Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_10__["tuple"])('date', 'time');

function DatetimePanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      generateConfig = props.generateConfig,
      value = props.value,
      defaultValue = props.defaultValue,
      disabledTime = props.disabledTime,
      showTime = props.showTime,
      onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      activePanel = _React$useState2[0],
      setActivePanel = _React$useState2[1];

  var dateOperationRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"]({});
  var timeOperationRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"]({});
  var timeProps = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(showTime) === 'object' ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, showTime) : {}; // ======================= Keyboard =======================

  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }

  var onBlur = function onBlur(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }

    setActivePanel(null);
  };

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      // Switch active panel
      if (event.which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);

        if (nextActivePanel) {
          event.preventDefault();
        }

        return true;
      } // Operate on current active panel


      if (activePanel) {
        var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;

        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }

        return true;
      } // Switch first active panel if operate without panel


      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].LEFT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].RIGHT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].UP, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].DOWN].includes(event.which)) {
        setActivePanel('date');
        return true;
      }

      return false;
    },
    onBlur: onBlur,
    onClose: onBlur
  }; // ======================== Events ========================

  var onInternalSelect = function onInternalSelect(date, source) {
    var selectedDate = date;

    if (source === 'date' && !value && timeProps.defaultValue) {
      // Date with time defaultValue
      selectedDate = generateConfig.setHour(selectedDate, generateConfig.getHour(timeProps.defaultValue));
      selectedDate = generateConfig.setMinute(selectedDate, generateConfig.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig.setSecond(selectedDate, generateConfig.getSecond(timeProps.defaultValue));
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
      selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
      selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
    }

    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  }; // ======================== Render ========================


  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(panelPrefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(panelPrefixCls, "-active"), activePanel))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_DatePanel__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    operationRef: dateOperationRef,
    active: activePanel === 'date',
    onSelect: function onSelect(date) {
      onInternalSelect(Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_11__["setDateTime"])(generateConfig, date, showTime && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(showTime) === 'object' ? showTime.defaultValue : null), 'date');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TimePanel__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    format: undefined
  }, timeProps, disabledTimes, {
    defaultValue: undefined,
    operationRef: timeOperationRef,
    active: activePanel === 'time',
    onSelect: function onSelect(date) {
      onInternalSelect(date, 'time');
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DatetimePanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DecadePanel/DecadeBody.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DecadePanel/DecadeBody.js ***!
  \********************************************************************/
/*! exports provided: DECADE_COL_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECADE_COL_COUNT", function() { return DECADE_COL_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./node_modules/rc-picker/es/panels/DecadePanel/index.js");
/* harmony import */ var _PanelBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PanelBody */ "./node_modules/rc-picker/es/panels/PanelBody.js");





var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;

function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = ___WEBPACK_IMPORTED_MODULE_3__["DECADE_UNIT_DIFF"] - 1;
  var prefixCls = props.prefixCls,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / ___WEBPACK_IMPORTED_MODULE_3__["DECADE_UNIT_DIFF"]) * ___WEBPACK_IMPORTED_MODULE_3__["DECADE_UNIT_DIFF"];
  var startDecadeYear = Math.floor(yearNumber / ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"]) * ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"];
  var endDecadeYear = startDecadeYear + ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"] - 1;
  var baseDecadeYear = generateConfig.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * ___WEBPACK_IMPORTED_MODULE_3__["DECADE_UNIT_DIFF"] - ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"]) / 2));

  var getCellClassName = function getCellClassName(date) {
    var _ref;

    var startDecadeNumber = generateConfig.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return _ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PanelBody__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    rowNum: DECADE_ROW_COUNT,
    colNum: DECADE_COL_COUNT,
    baseDate: baseDecadeYear,
    getCellText: function getCellText(date) {
      var startDecadeNumber = generateConfig.getYear(date);
      return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
    },
    getCellClassName: getCellClassName,
    getCellDate: function getCellDate(date, offset) {
      return generateConfig.addYear(date, offset * ___WEBPACK_IMPORTED_MODULE_3__["DECADE_UNIT_DIFF"]);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DecadeBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DecadePanel/DecadeHeader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DecadePanel/DecadeHeader.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./node_modules/rc-picker/es/panels/DecadePanel/index.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");






function DecadeHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      onPrevDecades = props.onPrevDecades,
      onNextDecades = props.onNextDecades;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"]) * ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"];
  var endYear = startYear + ___WEBPACK_IMPORTED_MODULE_3__["DECADE_DISTANCE_COUNT"] - 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecades,
    onSuperNext: onNextDecades
  }), startYear, "-", endYear);
}

/* harmony default export */ __webpack_exports__["default"] = (DecadeHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/DecadePanel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/DecadePanel/index.js ***!
  \***************************************************************/
/*! exports provided: DECADE_UNIT_DIFF, DECADE_DISTANCE_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECADE_UNIT_DIFF", function() { return DECADE_UNIT_DIFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECADE_DISTANCE_COUNT", function() { return DECADE_DISTANCE_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DecadeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecadeHeader */ "./node_modules/rc-picker/es/panels/DecadePanel/DecadeHeader.js");
/* harmony import */ var _DecadeBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DecadeBody */ "./node_modules/rc-picker/es/panels/DecadePanel/DecadeBody.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");





var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;

function DecadePanel(props) {
  var prefixCls = props.prefixCls,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      operationRef = props.operationRef,
      onSelect = props.onSelect,
      onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__["createKeyDownHandler"])(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF * _DecadeBody__WEBPACK_IMPORTED_MODULE_3__["DECADE_COL_COUNT"]), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onDecadesChange = function onDecadesChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onInternalSelect = function onInternalSelect(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DecadeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onPrevDecades: function onPrevDecades() {
      onDecadesChange(-1);
    },
    onNextDecades: function onNextDecades() {
      onDecadesChange(1);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DecadeBody__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onSelect: onInternalSelect
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DecadePanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/Header.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/Header.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");


var HIDDEN_STYLE = {
  visibility: 'hidden'
};

function Header(_ref) {
  var prefixCls = _ref.prefixCls,
      _ref$prevIcon = _ref.prevIcon,
      prevIcon = _ref$prevIcon === void 0 ? "\u2039" : _ref$prevIcon,
      _ref$nextIcon = _ref.nextIcon,
      nextIcon = _ref$nextIcon === void 0 ? "\u203A" : _ref$nextIcon,
      _ref$superPrevIcon = _ref.superPrevIcon,
      superPrevIcon = _ref$superPrevIcon === void 0 ? "\xAB" : _ref$superPrevIcon,
      _ref$superNextIcon = _ref.superNextIcon,
      superNextIcon = _ref$superNextIcon === void 0 ? "\xBB" : _ref$superNextIcon,
      onSuperPrev = _ref.onSuperPrev,
      onSuperNext = _ref.onSuperNext,
      onPrev = _ref.onPrev,
      onNext = _ref.onNext,
      children = _ref.children;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      hideNextBtn = _React$useContext.hideNextBtn,
      hidePrevBtn = _React$useContext.hidePrevBtn;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: prefixCls
  }, onSuperPrev && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "button",
    onClick: onSuperPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, superPrevIcon), onPrev && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "button",
    onClick: onPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, prevIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(prefixCls, "-view")
  }, children), onNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "button",
    onClick: onNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, nextIcon), onSuperNext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "button",
    onClick: onSuperNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, superNextIcon));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/MonthPanel/MonthBody.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/MonthPanel/MonthBody.js ***!
  \******************************************************************/
/*! exports provided: MONTH_COL_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_COL_COUNT", function() { return MONTH_COL_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useCellClassName */ "./node_modules/rc-picker/es/hooks/useCellClassName.js");
/* harmony import */ var _PanelBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PanelBody */ "./node_modules/rc-picker/es/panels/PanelBody.js");






var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;

function MonthBody(props) {
  var prefixCls = props.prefixCls,
      locale = props.locale,
      value = props.value,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig,
      monthCellRender = props.monthCellRender;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_RangeContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = Object(_hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__["default"])({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = monthCellRender ? function (date) {
    return monthCellRender(date, locale);
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PanelBody__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    rowNum: MONTH_ROW_COUNT,
    colNum: MONTH_COL_COUNT,
    baseDate: baseMonth,
    getCellNode: getCellNode,
    getCellText: function getCellText(date) {
      return locale.monthFormat ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(date, {
        locale: locale,
        format: locale.monthFormat,
        generateConfig: generateConfig
      }) : monthsLocale[generateConfig.getMonth(date)];
    },
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addMonth,
    titleCell: function titleCell(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(date, {
        locale: locale,
        format: 'YYYY-MM',
        generateConfig: generateConfig
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MonthBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/MonthPanel/MonthHeader.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/MonthPanel/MonthHeader.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");






function MonthHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["formatValue"])(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MonthHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/MonthPanel/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/MonthPanel/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MonthHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonthHeader */ "./node_modules/rc-picker/es/panels/MonthPanel/MonthHeader.js");
/* harmony import */ var _MonthBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthBody */ "./node_modules/rc-picker/es/panels/MonthPanel/MonthBody.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");






function MonthPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-month-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__["createKeyDownHandler"])(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * _MonthBody__WEBPACK_IMPORTED_MODULE_3__["MONTH_COL_COUNT"]), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('date', value || viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MonthHeader__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MonthBody__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, 'mouse');

      onPanelChange('date', date);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MonthPanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/PanelBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/PanelBody.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelBody; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_timeUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/timeUtil */ "./node_modules/rc-picker/es/utils/timeUtil.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");







function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls,
      disabledDate = _ref.disabledDate,
      onSelect = _ref.onSelect,
      picker = _ref.picker,
      rowNum = _ref.rowNum,
      colNum = _ref.colNum,
      prefixColumn = _ref.prefixColumn,
      rowClassName = _ref.rowClassName,
      baseDate = _ref.baseDate,
      getCellClassName = _ref.getCellClassName,
      getCellText = _ref.getCellText,
      getCellNode = _ref.getCellNode,
      getCellDate = _ref.getCellDate,
      generateConfig = _ref.generateConfig,
      titleCell = _ref.titleCell,
      headerCells = _ref.headerCells;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      onDateMouseEnter = _React$useContext.onDateMouseEnter,
      onDateMouseLeave = _React$useContext.onDateMouseLeave,
      mode = _React$useContext.mode;

  var cellPrefixCls = "".concat(prefixCls, "-cell"); // =============================== Body ===============================

  var rows = [];

  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;

    var _loop = function _loop(j) {
      var _objectSpread2;

      var offset = i * colNum + j;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_6__["getCellDateDisabled"])({
        cellDate: currentDate,
        mode: mode,
        disabledDate: disabledDate,
        generateConfig: generateConfig
      });

      if (j === 0) {
        rowStartDate = currentDate;

        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }

      var title = titleCell && titleCell(currentDate);
      row.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("td", {
        key: j,
        title: title,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(cellPrefixCls, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "".concat(cellPrefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === 'year' && Number(title) % 10 === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "".concat(cellPrefixCls, "-end"), title === Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_5__["getLastDay"])(generateConfig, currentDate) || picker === 'year' && Number(title) % 10 === 9), _objectSpread2), getCellClassName(currentDate))),
        onClick: function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        onMouseEnter: function onMouseEnter() {
          if (!disabled && onDateMouseEnter) {
            onDateMouseEnter(currentDate);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!disabled && onDateMouseLeave) {
            onDateMouseLeave(currentDate);
          }
        }
      }, getCellNode ? getCellNode(currentDate) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "".concat(cellPrefixCls, "-inner")
      }, getCellText(currentDate))));
    };

    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }

    rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("tr", {
      key: i,
      className: rowClassName && rowClassName(rowStartDate)
    }, row));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "".concat(prefixCls, "-body")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("table", {
    className: "".concat(prefixCls, "-content")
  }, headerCells && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("tr", null, headerCells)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("tbody", null, rows)));
}

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/QuarterPanel/QuarterBody.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/QuarterPanel/QuarterBody.js ***!
  \**********************************************************************/
/*! exports provided: QUARTER_COL_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUARTER_COL_COUNT", function() { return QUARTER_COL_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useCellClassName */ "./node_modules/rc-picker/es/hooks/useCellClassName.js");
/* harmony import */ var _PanelBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PanelBody */ "./node_modules/rc-picker/es/panels/PanelBody.js");






var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;

function QuarterBody(props) {
  var prefixCls = props.prefixCls,
      locale = props.locale,
      value = props.value,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_RangeContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = Object(_hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_4__["default"])({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["isSameQuarter"])(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig.setDate(generateConfig.setMonth(viewDate, 0), 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PanelBody__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    rowNum: QUARTER_ROW_COUNT,
    colNum: QUARTER_COL_COUNT,
    baseDate: baseQuarter,
    getCellText: function getCellText(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(date, {
        locale: locale,
        format: locale.quarterFormat || '[Q]Q',
        generateConfig: generateConfig
      });
    },
    getCellClassName: getCellClassName,
    getCellDate: function getCellDate(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    },
    titleCell: function titleCell(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_2__["formatValue"])(date, {
        locale: locale,
        format: 'YYYY-[Q]Q',
        generateConfig: generateConfig
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QuarterBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/QuarterPanel/QuarterHeader.js":
/*!************************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/QuarterPanel/QuarterHeader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");






function QuarterHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["formatValue"])(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (QuarterHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/QuarterPanel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/QuarterPanel/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuarterHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuarterHeader */ "./node_modules/rc-picker/es/panels/QuarterPanel/QuarterHeader.js");
/* harmony import */ var _QuarterBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuarterBody */ "./node_modules/rc-picker/es/panels/QuarterPanel/QuarterBody.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");






function QuarterPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-quarter-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__["createKeyDownHandler"])(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * 3), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        }
      });
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_QuarterHeader__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_QuarterBody__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, 'mouse');
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (QuarterPanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/TimePanel/TimeBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/TimePanel/TimeBody.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "./node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var _TimeUnitColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimeUnitColumn */ "./node_modules/rc-picker/es/panels/TimePanel/TimeUnitColumn.js");
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/miscUtil */ "./node_modules/rc-picker/es/utils/miscUtil.js");
/* harmony import */ var _utils_timeUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/timeUtil */ "./node_modules/rc-picker/es/utils/timeUtil.js");








function shouldUnitsUpdate(prevUnits, nextUnits) {
  if (prevUnits.length !== nextUnits.length) return true; // if any unit's disabled status is different, the units should be re-evaluted

  for (var i = 0; i < prevUnits.length; i += 1) {
    if (prevUnits[i].disabled !== nextUnits[i].disabled) return true;
  }

  return false;
}

function generateUnits(start, end, step, disabledUnits) {
  var units = [];

  for (var i = start; i <= end; i += step) {
    units.push({
      label: Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_5__["leftPad"])(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }

  return units;
}

function TimeBody(props) {
  var generateConfig = props.generateConfig,
      prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      activeColumnIndex = props.activeColumnIndex,
      value = props.value,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      use12Hours = props.use12Hours,
      _props$hourStep = props.hourStep,
      hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
      _props$minuteStep = props.minuteStep,
      minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
      _props$secondStep = props.secondStep,
      secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep,
      disabledHours = props.disabledHours,
      disabledMinutes = props.disabledMinutes,
      disabledSeconds = props.disabledSeconds,
      hideDisabledOptions = props.hideDisabledOptions,
      onSelect = props.onSelect;
  var columns = [];
  var contentPrefixCls = "".concat(prefixCls, "-content");
  var columnPrefixCls = "".concat(prefixCls, "-time-panel");
  var isPM;
  var originHour = value ? generateConfig.getHour(value) : -1;
  var hour = originHour;
  var minute = value ? generateConfig.getMinute(value) : -1;
  var second = value ? generateConfig.getSecond(value) : -1;

  var setTime = function setTime(isNewPM, newHour, newMinute, newSecond) {
    var newDate = value || generateConfig.getNow();
    var mergedHour = Math.max(0, newHour);
    var mergedMinute = Math.max(0, newMinute);
    var mergedSecond = Math.max(0, newSecond);
    newDate = Object(_utils_timeUtil__WEBPACK_IMPORTED_MODULE_6__["setTime"])(generateConfig, newDate, !use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
    return newDate;
  }; // ========================= Unit =========================


  var rawHours = generateUnits(0, 23, hourStep, disabledHours && disabledHours());
  var memorizedRawHours = Object(rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    return rawHours;
  }, rawHours, shouldUnitsUpdate); // Should additional logic to handle 12 hours

  if (use12Hours) {
    isPM = hour >= 12; // -1 means should display AM

    hour %= 12;
  }

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    if (!use12Hours) {
      return [false, false];
    }

    var AMPMDisabled = [true, true];
    memorizedRawHours.forEach(function (_ref) {
      var disabled = _ref.disabled,
          hourValue = _ref.value;
      if (disabled) return;

      if (hourValue >= 12) {
        AMPMDisabled[1] = false;
      } else {
        AMPMDisabled[0] = false;
      }
    });
    return AMPMDisabled;
  }, [use12Hours, memorizedRawHours]),
      _React$useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useMemo, 2),
      AMDisabled = _React$useMemo2[0],
      PMDisabled = _React$useMemo2[1];

  var hours = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    if (!use12Hours) return memorizedRawHours;
    return memorizedRawHours.filter(isPM ? function (hourMeta) {
      return hourMeta.value >= 12;
    } : function (hourMeta) {
      return hourMeta.value < 12;
    }).map(function (hourMeta) {
      var hourValue = hourMeta.value % 12;
      var hourLabel = hourValue === 0 ? '12' : Object(_utils_miscUtil__WEBPACK_IMPORTED_MODULE_5__["leftPad"])(hourValue, 2);
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hourMeta), {}, {
        label: hourLabel,
        value: hourValue
      });
    });
  }, [use12Hours, isPM, memorizedRawHours]);
  var minutes = generateUnits(0, 59, minuteStep, disabledMinutes && disabledMinutes(originHour));
  var seconds = generateUnits(0, 59, secondStep, disabledSeconds && disabledSeconds(originHour, minute)); // ====================== Operations ======================

  operationRef.current = {
    onUpDown: function onUpDown(diff) {
      var column = columns[activeColumnIndex];

      if (column) {
        var valueIndex = column.units.findIndex(function (unit) {
          return unit.value === column.value;
        });
        var unitLen = column.units.length;

        for (var i = 1; i < unitLen; i += 1) {
          var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];

          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    }
  }; // ======================== Render ========================

  function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
    if (condition !== false) {
      columns.push({
        node: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units: units,
          hideDisabledOptions: hideDisabledOptions
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units: units
      });
    }
  } // Hour


  addColumnNode(showHour, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimeUnitColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "hour"
  }), hour, hours, function (num) {
    onSelect(setTime(isPM, num, minute, second), 'mouse');
  }); // Minute

  addColumnNode(showMinute, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimeUnitColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "minute"
  }), minute, minutes, function (num) {
    onSelect(setTime(isPM, hour, num, second), 'mouse');
  }); // Second

  addColumnNode(showSecond, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimeUnitColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "second"
  }), second, seconds, function (num) {
    onSelect(setTime(isPM, hour, minute, num), 'mouse');
  }); // 12 Hours

  var PMIndex = -1;

  if (typeof isPM === 'boolean') {
    PMIndex = isPM ? 1 : 0;
  }

  addColumnNode(use12Hours === true, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimeUnitColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "12hours"
  }), PMIndex, [{
    label: 'AM',
    value: 0,
    disabled: AMDisabled
  }, {
    label: 'PM',
    value: 1,
    disabled: PMDisabled
  }], function (num) {
    onSelect(setTime(!!num, hour, minute, second), 'mouse');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: contentPrefixCls
  }, columns.map(function (_ref2) {
    var node = _ref2.node;
    return node;
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TimeBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/TimePanel/TimeHeader.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/TimePanel/TimeHeader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");





function TimeHeader(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      value = props.value,
      format = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prefixCls: headerPrefixCls
  }, value ? Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_3__["formatValue"])(value, {
    locale: locale,
    format: format,
    generateConfig: generateConfig
  }) : "\xA0");
}

/* harmony default export */ __webpack_exports__["default"] = (TimeHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/TimePanel/TimeUnitColumn.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/TimePanel/TimeUnitColumn.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");







function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
      units = props.units,
      onSelect = props.onSelect,
      value = props.value,
      active = props.active,
      hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = "".concat(prefixCls, "-cell");

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      open = _React$useContext.open;

  var ulRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var liRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map());
  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // `useLayoutEffect` here to avoid blink by duration is 0

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    var li = liRefs.current.get(value);

    if (li && open !== false) {
      Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])(ulRef.current, li.offsetTop, 120);
    }
  }, [value]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (open) {
      var li = liRefs.current.get(value);

      if (li) {
        scrollRef.current = Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__["waitElementReady"])(li, function () {
          Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])(ulRef.current, li.offsetTop, 0);
        });
      }
    }

    return function () {
      var _scrollRef$current;

      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.call(scrollRef);
    };
  }, [open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-column"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-column-active"), active)),
    ref: ulRef,
    style: {
      position: 'relative'
    }
  }, units.map(function (unit) {
    var _classNames2;

    if (hideDisabledOptions && unit.disabled) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      key: unit.value,
      ref: function ref(element) {
        liRefs.current.set(unit.value, element);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(cellPrefixCls, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
      onClick: function onClick() {
        if (unit.disabled) {
          return;
        }

        onSelect(unit.value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "".concat(cellPrefixCls, "-inner")
    }, unit.label));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TimeUnitColumn);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/TimePanel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/TimePanel/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TimeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimeHeader */ "./node_modules/rc-picker/es/panels/TimePanel/TimeHeader.js");
/* harmony import */ var _TimeBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimeBody */ "./node_modules/rc-picker/es/panels/TimePanel/TimeBody.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");









var countBoolean = function countBoolean(boolList) {
  return boolList.filter(function (bool) {
    return bool !== false;
  }).length;
};

function TimePanel(props) {
  var generateConfig = props.generateConfig,
      _props$format = props.format,
      format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
      prefixCls = props.prefixCls,
      active = props.active,
      operationRef = props.operationRef,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      _props$use12Hours = props.use12Hours,
      use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
      onSelect = props.onSelect,
      value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](); // ======================= Keyboard =======================

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](-1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      activeColumnIndex = _React$useState2[0],
      setActiveColumnIndex = _React$useState2[1];

  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__["createKeyDownHandler"])(event, {
        onLeftRight: function onLeftRight(diff) {
          setActiveColumnIndex((activeColumnIndex + diff + columnsCount) % columnsCount);
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          setActiveColumnIndex(-1);
        }
      });
    },
    onBlur: function onBlur() {
      setActiveColumnIndex(-1);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelPrefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(panelPrefixCls, "-active"), active))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TimeHeader__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    format: format,
    prefixCls: prefixCls
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TimeBody__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    activeColumnIndex: activeColumnIndex,
    operationRef: bodyOperationRef
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TimePanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/WeekPanel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/WeekPanel/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DatePanel */ "./node_modules/rc-picker/es/panels/DatePanel/index.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");







function WeekPanel(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      value = props.value; // Render additional column

  var cellPrefixCls = "".concat(prefixCls, "-cell");

  var prefixColumn = function prefixColumn(date) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("td", {
      key: "week",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, generateConfig.locale.getWeek(locale.locale, date));
  }; // Add row className


  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");

  var rowClassName = function rowClassName(date) {
    return classnames__WEBPACK_IMPORTED_MODULE_3___default()(rowPrefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(rowPrefixCls, "-selected"), Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_5__["isSameWeek"])(generateConfig, locale.locale, value, date)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_DatePanel__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    panelName: "week",
    prefixColumn: prefixColumn,
    rowClassName: rowClassName,
    keyboardConfig: {
      onLeftRight: null
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WeekPanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/YearPanel/YearBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/YearPanel/YearBody.js ***!
  \****************************************************************/
/*! exports provided: YEAR_COL_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_COL_COUNT", function() { return YEAR_COL_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./node_modules/rc-picker/es/panels/YearPanel/index.js");
/* harmony import */ var _hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useCellClassName */ "./node_modules/rc-picker/es/hooks/useCellClassName.js");
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dateUtil */ "./node_modules/rc-picker/es/utils/dateUtil.js");
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RangeContext */ "./node_modules/rc-picker/es/RangeContext.js");
/* harmony import */ var _PanelBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PanelBody */ "./node_modules/rc-picker/es/panels/PanelBody.js");







var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;

function YearBody(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      viewDate = props.viewDate,
      locale = props.locale,
      generateConfig = props.generateConfig;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_RangeContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var yearPrefixCls = "".concat(prefixCls, "-cell"); // =============================== Year ===============================

  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / ___WEBPACK_IMPORTED_MODULE_2__["YEAR_DECADE_COUNT"]) * ___WEBPACK_IMPORTED_MODULE_2__["YEAR_DECADE_COUNT"];
  var endYear = startYear + ___WEBPACK_IMPORTED_MODULE_2__["YEAR_DECADE_COUNT"] - 1;
  var baseYear = generateConfig.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - ___WEBPACK_IMPORTED_MODULE_2__["YEAR_DECADE_COUNT"]) / 2));

  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };

  var getCellClassName = Object(_hooks_useCellClassName__WEBPACK_IMPORTED_MODULE_3__["default"])({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["isSameYear"])(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PanelBody__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    rowNum: YEAR_ROW_COUNT,
    colNum: YEAR_COL_COUNT,
    baseDate: baseYear,
    getCellText: generateConfig.getYear,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addYear,
    titleCell: function titleCell(date) {
      return Object(_utils_dateUtil__WEBPACK_IMPORTED_MODULE_4__["formatValue"])(date, {
        locale: locale,
        format: 'YYYY',
        generateConfig: generateConfig
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (YearBody);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/YearPanel/YearHeader.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/YearPanel/YearHeader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./node_modules/rc-picker/es/panels/Header.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./node_modules/rc-picker/es/panels/YearPanel/index.js");
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PanelContext */ "./node_modules/rc-picker/es/PanelContext.js");






function YearHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      onPrevDecade = props.onPrevDecade,
      onNextDecade = props.onNextDecade,
      onDecadeClick = props.onDecadeClick;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_PanelContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / ___WEBPACK_IMPORTED_MODULE_3__["YEAR_DECADE_COUNT"]) * ___WEBPACK_IMPORTED_MODULE_3__["YEAR_DECADE_COUNT"];
  var endYear = startYear + ___WEBPACK_IMPORTED_MODULE_3__["YEAR_DECADE_COUNT"] - 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecade,
    onSuperNext: onNextDecade
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    onClick: onDecadeClick,
    className: "".concat(prefixCls, "-decade-btn")
  }, startYear, "-", endYear));
}

/* harmony default export */ __webpack_exports__["default"] = (YearHeader);

/***/ }),

/***/ "./node_modules/rc-picker/es/panels/YearPanel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-picker/es/panels/YearPanel/index.js ***!
  \*************************************************************/
/*! exports provided: YEAR_DECADE_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_DECADE_COUNT", function() { return YEAR_DECADE_COUNT; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _YearHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YearHeader */ "./node_modules/rc-picker/es/panels/YearPanel/YearHeader.js");
/* harmony import */ var _YearBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearBody */ "./node_modules/rc-picker/es/panels/YearPanel/YearBody.js");
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/uiUtil */ "./node_modules/rc-picker/es/utils/uiUtil.js");





var YEAR_DECADE_COUNT = 10;

function YearPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      sourceMode = props.sourceMode,
      _onSelect = props.onSelect,
      onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return Object(_utils_uiUtil__WEBPACK_IMPORTED_MODULE_4__["createKeyDownHandler"])(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * _YearBody__WEBPACK_IMPORTED_MODULE_3__["YEAR_COL_COUNT"]), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onDecadeChange = function onDecadeChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_YearHeader__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onPrevDecade: function onPrevDecade() {
      onDecadeChange(-1);
    },
    onNextDecade: function onNextDecade() {
      onDecadeChange(1);
    },
    onDecadeClick: function onDecadeClick() {
      onPanelChange('decade', viewDate);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_YearBody__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);

      _onSelect(date, 'mouse');
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (YearPanel);

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/dateUtil.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/dateUtil.js ***!
  \*****************************************************/
/*! exports provided: WEEK_DAY_COUNT, isNullEqual, isSameDecade, isSameYear, getQuarter, isSameQuarter, isSameMonth, isSameDate, isSameTime, isSameWeek, isEqual, isInRange, getWeekStartDate, getClosingViewDate, formatValue, parseValue, getCellDateDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_DAY_COUNT", function() { return WEEK_DAY_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullEqual", function() { return isNullEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDecade", function() { return isSameDecade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return isSameYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuarter", function() { return getQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameQuarter", function() { return isSameQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDate", function() { return isSameDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameTime", function() { return isSameTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameWeek", function() { return isSameWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInRange", function() { return isInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekStartDate", function() { return getWeekStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosingViewDate", function() { return getClosingViewDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellDateDisabled", function() { return getCellDateDisabled; });
/* harmony import */ var _panels_DecadePanel_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../panels/DecadePanel/index */ "./node_modules/rc-picker/es/panels/DecadePanel/index.js");

var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }

  if (!value1 || !value2) {
    return false;
  }

  return undefined;
}
function isSameDecade(generateConfig, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  var num1 = Math.floor(generateConfig.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig, year1, year2) {
  var equal = isNullEqual(year1, year2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(year1) === generateConfig.getYear(year2);
}
function getQuarter(generateConfig, date) {
  var quota = Math.floor(generateConfig.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return isSameYear(generateConfig, quarter1, quarter2) && getQuarter(generateConfig, quarter1) === getQuarter(generateConfig, quarter2);
}
function isSameMonth(generateConfig, month1, month2) {
  var equal = isNullEqual(month1, month2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return isSameYear(generateConfig, month1, month2) && generateConfig.getMonth(month1) === generateConfig.getMonth(month2);
}
function isSameDate(generateConfig, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(date1) === generateConfig.getYear(date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
}
function isSameTime(generateConfig, time1, time2) {
  var equal = isNullEqual(time1, time2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getHour(time1) === generateConfig.getHour(time2) && generateConfig.getMinute(time1) === generateConfig.getMinute(time2) && generateConfig.getSecond(time1) === generateConfig.getSecond(time2);
}
function isSameWeek(generateConfig, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.locale.getWeek(locale, date1) === generateConfig.locale.getWeek(locale, date2);
}
function isEqual(generateConfig, value1, value2) {
  return isSameDate(generateConfig, value1, value2) && isSameTime(generateConfig, value1, value2);
}
/** Between in date but not equal of date */

function isInRange(generateConfig, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }

  return !isSameDate(generateConfig, startDate, current) && !isSameDate(generateConfig, endDate, current) && generateConfig.isAfter(current, startDate) && generateConfig.isAfter(endDate, current);
}
function getWeekStartDate(locale, generateConfig, value) {
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig.setDate(value, 1);
  var startDateWeekDay = generateConfig.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig.addDate(monthStartDate, weekFirstDay - startDateWeekDay);

  if (generateConfig.getMonth(alignStartDate) === generateConfig.getMonth(value) && generateConfig.getDate(alignStartDate) > 1) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }

  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  switch (picker) {
    case 'year':
      return generateConfig.addYear(viewDate, offset * 10);

    case 'quarter':
    case 'month':
      return generateConfig.addYear(viewDate, offset);

    default:
      return generateConfig.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  var generateConfig = _ref.generateConfig,
      locale = _ref.locale,
      format = _ref.format;
  return typeof format === 'function' ? format(value) : generateConfig.locale.format(locale.locale, value, format);
}
function parseValue(value, _ref2) {
  var generateConfig = _ref2.generateConfig,
      locale = _ref2.locale,
      formatList = _ref2.formatList;

  if (!value || typeof formatList[0] === 'function') {
    return null;
  }

  return generateConfig.locale.parse(locale.locale, value, formatList);
} // eslint-disable-next-line consistent-return

function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate,
      mode = _ref3.mode,
      disabledDate = _ref3.disabledDate,
      generateConfig = _ref3.generateConfig;
  if (!disabledDate) return false; // Whether cellDate is disabled in range

  var getDisabledFromRange = function getDisabledFromRange(currentMode, start, end) {
    var current = start;

    while (current <= end) {
      var date = void 0;

      switch (currentMode) {
        case 'date':
          {
            date = generateConfig.setDate(cellDate, current);

            if (!disabledDate(date)) {
              return false;
            }

            break;
          }

        case 'month':
          {
            date = generateConfig.setMonth(cellDate, current);

            if (!getCellDateDisabled({
              cellDate: date,
              mode: 'month',
              generateConfig: generateConfig,
              disabledDate: disabledDate
            })) {
              return false;
            }

            break;
          }

        case 'year':
          {
            date = generateConfig.setYear(cellDate, current);

            if (!getCellDateDisabled({
              cellDate: date,
              mode: 'year',
              generateConfig: generateConfig,
              disabledDate: disabledDate
            })) {
              return false;
            }

            break;
          }
      }

      current += 1;
    }

    return true;
  };

  switch (mode) {
    case 'date':
    case 'week':
      {
        return disabledDate(cellDate);
      }

    case 'month':
      {
        var startDate = 1;
        var endDate = generateConfig.getDate(generateConfig.getEndDate(cellDate));
        return getDisabledFromRange('date', startDate, endDate);
      }

    case 'quarter':
      {
        var startMonth = Math.floor(generateConfig.getMonth(cellDate) / 3) * 3;
        var endMonth = startMonth + 2;
        return getDisabledFromRange('month', startMonth, endMonth);
      }

    case 'year':
      {
        return getDisabledFromRange('month', 0, 11);
      }

    case 'decade':
      {
        var year = generateConfig.getYear(cellDate);
        var startYear = Math.floor(year / _panels_DecadePanel_index__WEBPACK_IMPORTED_MODULE_0__["DECADE_UNIT_DIFF"]) * _panels_DecadePanel_index__WEBPACK_IMPORTED_MODULE_0__["DECADE_UNIT_DIFF"];
        var endYear = startYear + _panels_DecadePanel_index__WEBPACK_IMPORTED_MODULE_0__["DECADE_UNIT_DIFF"] - 1;
        return getDisabledFromRange('year', startYear, endYear);
      }
  }
}

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/getExtraFooter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/getExtraFooter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getExtraFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(prefixCls, "-footer-extra")
  }, renderExtraFooter(mode));
}

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/getRanges.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/getRanges.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRanges; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
      _ref$rangeList = _ref.rangeList,
      rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components,
      needConfirmButton = _ref.needConfirmButton,
      onNow = _ref.onNow,
      onOk = _ref.onOk,
      okDisabled = _ref.okDisabled,
      showNow = _ref.showNow,
      locale = _ref.locale;
  var presetNode;
  var okNode;

  if (rangeList.length) {
    var Item = components.rangeItem || 'span';
    presetNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, rangeList.map(function (_ref2) {
      var label = _ref2.label,
          onClick = _ref2.onClick,
          onMouseEnter = _ref2.onMouseEnter,
          onMouseLeave = _ref2.onMouseLeave;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        key: label,
        className: "".concat(prefixCls, "-preset")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, {
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      }, label));
    }));
  }

  if (needConfirmButton) {
    var Button = components.button || 'button';

    if (onNow && !presetNode && showNow !== false) {
      presetNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "".concat(prefixCls, "-now")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        className: "".concat(prefixCls, "-now-btn"),
        onClick: onNow
      }, locale.now));
    }

    okNode = needConfirmButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      className: "".concat(prefixCls, "-ok")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, {
      disabled: okDisabled,
      onClick: onOk
    }, locale.ok));
  }

  if (!presetNode && !okNode) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "".concat(prefixCls, "-ranges")
  }, presetNode, okNode);
}

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/miscUtil.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/miscUtil.js ***!
  \*****************************************************/
/*! exports provided: leftPad, tuple, toArray, default, getValue, updateValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return leftPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDataOrAriaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateValues", function() { return updateValues; });
function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var current = String(str);

  while (current.length < length) {
    current = "".concat(fill).concat(str);
  }

  return current;
}
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
function toArray(val) {
  if (val === null || val === undefined) {
    return [];
  }

  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function (key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role' || key === 'name') && key.substr(0, 7) !== 'data-__') {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index) {
  return values ? values[index] : null;
}
function updateValues(values, value, index) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] = typeof value === 'function' ? value(newValues[index]) : value;

  if (!newValues[0] && !newValues[1]) {
    return null;
  }

  return newValues;
}

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/timeUtil.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/timeUtil.js ***!
  \*****************************************************/
/*! exports provided: setTime, setDateTime, getLowerBoundTime, getLastDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTime", function() { return setTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDateTime", function() { return setDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowerBoundTime", function() { return getLowerBoundTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastDay", function() { return getLastDay; });
function setTime(generateConfig, date, hour, minute, second) {
  var nextTime = generateConfig.setHour(date, hour);
  nextTime = generateConfig.setMinute(nextTime, minute);
  nextTime = generateConfig.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }

  var newDate = date;
  newDate = generateConfig.setHour(newDate, generateConfig.getHour(defaultDate));
  newDate = generateConfig.setMinute(newDate, generateConfig.getMinute(defaultDate));
  newDate = generateConfig.setSecond(newDate, generateConfig.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;

  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }

  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;

  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }

  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig, date) {
  var year = generateConfig.getYear(date);
  var month = generateConfig.getMonth(date) + 1;
  var endDate = generateConfig.getEndDate(generateConfig.getFixedDate("".concat(year, "-").concat(month, "-01")));
  var lastDay = generateConfig.getDate(endDate);
  var monthShow = month < 10 ? "0".concat(month) : "".concat(month);
  return "".concat(year, "-").concat(monthShow, "-").concat(lastDay);
}

/***/ }),

/***/ "./node_modules/rc-picker/es/utils/uiUtil.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/utils/uiUtil.js ***!
  \***************************************************/
/*! exports provided: waitElementReady, scrollTo, createKeyDownHandler, getDefaultFormat, getInputSize, addGlobalMouseDownEvent, getTargetFromEvent, PickerModeMap, elementsContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitElementReady", function() { return waitElementReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKeyDownHandler", function() { return createKeyDownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultFormat", function() { return getDefaultFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputSize", function() { return getInputSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalMouseDownEvent", function() { return addGlobalMouseDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetFromEvent", function() { return getTargetFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerModeMap", function() { return PickerModeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsContains", function() { return elementsContains; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "./node_modules/rc-util/es/Dom/isVisible.js");




var scrollIds = new Map();
/** Trigger when element is visible in view */

function waitElementReady(element, callback) {
  var id;

  function tryOrNextFrame() {
    if (Object(rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(element)) {
      callback();
    } else {
      id = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        tryOrNextFrame();
      });
    }
  }

  tryOrNextFrame();
  return function () {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(id);
  };
}
/* eslint-disable no-param-reassign */

function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element));
  } // jump to target if duration zero


  if (duration <= 0) {
    scrollIds.set(element, requestAnimationFrame(function () {
      element.scrollTop = to;
    }));
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  scrollIds.set(element, requestAnimationFrame(function () {
    element.scrollTop += perTick;

    if (element.scrollTop !== to) {
      scrollTo(element, to, duration - 10);
    }
  }));
}
function createKeyDownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight,
      onCtrlLeftRight = _ref.onCtrlLeftRight,
      onUpDown = _ref.onUpDown,
      onPageUpDown = _ref.onPageUpDown,
      onEnter = _ref.onEnter;
  var which = event.which,
      ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;

  switch (which) {
    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      /* istanbul ignore next */


      break;
  }

  return false;
} // ===================== Format =====================

function getDefaultFormat(format, picker, showTime, use12Hours) {
  var mergedFormat = format;

  if (!mergedFormat) {
    switch (picker) {
      case 'time':
        mergedFormat = use12Hours ? 'hh:mm:ss a' : 'HH:mm:ss';
        break;

      case 'week':
        mergedFormat = 'gggg-wo';
        break;

      case 'month':
        mergedFormat = 'YYYY-MM';
        break;

      case 'quarter':
        mergedFormat = 'YYYY-[Q]Q';
        break;

      case 'year':
        mergedFormat = 'YYYY';
        break;

      default:
        mergedFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
  }

  return mergedFormat;
}
function getInputSize(picker, format, generateConfig) {
  var defaultSize = picker === 'time' ? 8 : 10;
  var length = typeof format === 'function' ? format(generateConfig.getNow()).length : format.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = new Set();
function addGlobalMouseDownEvent(callback) {
  if (!globalClickFunc && typeof window !== 'undefined' && window.addEventListener) {
    globalClickFunc = function globalClickFunc(e) {
      // Clone a new list to avoid repeat trigger events
      Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(clickCallbacks).forEach(function (queueFunc) {
        queueFunc(e);
      });
    };

    window.addEventListener('mousedown', globalClickFunc);
  }

  clickCallbacks.add(callback);
  return function () {
    clickCallbacks.delete(callback);

    if (clickCallbacks.size === 0) {
      window.removeEventListener('mousedown', globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var target = e.target; // get target if in shadow dom

  if (e.composed && target.shadowRoot) {
    var _e$composedPath;

    return ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)[0]) || target;
  }

  return target;
} // ====================== Mode ======================

var getYearNextMode = function getYearNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'year';
  }

  return next;
};

var getMonthNextMode = function getMonthNextMode(next) {
  if (next === 'date') {
    return 'month';
  }

  return next;
};

var getQuarterNextMode = function getQuarterNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'quarter';
  }

  return next;
};

var getWeekNextMode = function getWeekNextMode(next) {
  if (next === 'date') {
    return 'week';
  }

  return next;
};

var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some(function (ele) {
    return ele && ele.contains(target);
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kYXRlLXBpY2tlci9QaWNrZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvUGlja2VyVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL2dlbmVyYXRlUGlja2VyL2dlbmVyYXRlUmFuZ2VQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvZ2VuZXJhdGVQaWNrZXIvZ2VuZXJhdGVTaW5nbGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvZ2VuZXJhdGVQaWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGF0ZS1waWNrZXIvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL3N0eWxlL2luZGV4LmNzcz9jMjhlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFnL0NoZWNrYWJsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFnL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWcvc3R5bGUvaW5kZXguY3NzPzk0Y2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9QYW5lbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9QaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9QaWNrZXJQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL1BpY2tlclRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9SYW5nZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9SYW5nZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL2dlbmVyYXRlL21vbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL2hvb2tzL3VzZUNlbGxDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9ob29rcy91c2VIb3ZlclZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvaG9va3MvdXNlUGlja2VySW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9ob29rcy91c2VSYW5nZURpc2FibGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvaG9va3MvdXNlUmFuZ2VWaWV3RGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9ob29rcy91c2VUZXh0VmFsdWVNYXBwaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvaG9va3MvdXNlVmFsdWVUZXh0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvcGFuZWxzL0RhdGVQYW5lbC9EYXRlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9EYXRlUGFuZWwvRGF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9EYXRlUGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvRGF0ZXRpbWVQYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9EZWNhZGVQYW5lbC9EZWNhZGVCb2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvcGFuZWxzL0RlY2FkZVBhbmVsL0RlY2FkZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9EZWNhZGVQYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvTW9udGhQYW5lbC9Nb250aEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvTW9udGhQYW5lbC9Nb250aEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9Nb250aFBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvcGFuZWxzL1BhbmVsQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9RdWFydGVyUGFuZWwvUXVhcnRlckJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvUXVhcnRlclBhbmVsL1F1YXJ0ZXJIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvUXVhcnRlclBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvcGFuZWxzL1RpbWVQYW5lbC9UaW1lQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9UaW1lUGFuZWwvVGltZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9UaW1lUGFuZWwvVGltZVVuaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvVGltZVBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvcGFuZWxzL1dlZWtQYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3BhbmVscy9ZZWFyUGFuZWwvWWVhckJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvWWVhclBhbmVsL1llYXJIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy9wYW5lbHMvWWVhclBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvdXRpbHMvZGF0ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy91dGlscy9nZXRFeHRyYUZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3V0aWxzL2dldFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL3V0aWxzL21pc2NVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvZXMvdXRpbHMvdGltZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9lcy91dGlscy91aVV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMzQjtBQUNBO0FBQ2hCO0FBQ2Ysc0JBQXNCLG1EQUFtQixDQUFDLCtDQUFNLEVBQUUsa0ZBQVE7QUFDMUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDM0I7QUFDTjtBQUNWO0FBQ2Ysc0JBQXNCLG1EQUFtQixDQUFDLDRDQUFHLEVBQUUsa0ZBQVE7QUFDdkQ7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNkO0FBQ2M7QUFDTjtBQUNOO0FBQ007O0FBRWxFLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJIQUEySCxjQUFjO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjtBQUNLO0FBQ3VDO0FBQ007QUFDSjtBQUNBO0FBQ3BCO0FBQ3RCO0FBQ21CO0FBQ007QUFDTTtBQUNwQjtBQUNEO0FBQzlCO0FBQ2Y7QUFDQSxJQUFJLG1GQUFTOztBQUViLGlCQUFpQixzRkFBWTs7QUFFN0I7QUFDQTs7QUFFQSxNQUFNLHlGQUFlOztBQUVyQjtBQUNBLHFDQUFxQywrQ0FBZTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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bURBQW1CLENBQUMsaURBQVEsRUFBRSxrRkFBUSxHQUFHO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQ25FeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDeEQ7QUFDQTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUywwREFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxTQUFTLDBEQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLFNBQVMsMERBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsU0FBUywwREFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxTQUFTLDBEQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLFNBQVMsMERBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsU0FBUywwREFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0RkFBa0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILEMiLCJmaWxlIjoidmVuZG9yc35mdW5uZWx+cGF0aHN+dHJlbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNrZXJCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0eXBlOiBcInByaW1hcnlcIlxuICB9LCBwcm9wcykpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhZyBmcm9tICcuLi90YWcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGlja2VyVGFnKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICBjb2xvcjogXCJibHVlXCJcbiAgfSwgcHJvcHMpKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ2FsZW5kYXJPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2FsZW5kYXJPdXRsaW5lZFwiO1xuaW1wb3J0IENsb2NrQ2lyY2xlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb2NrQ2lyY2xlT3V0bGluZWRcIjtcbmltcG9ydCBDbG9zZUNpcmNsZUZpbGxlZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIjtcbmltcG9ydCBTd2FwUmlnaHRPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvU3dhcFJpZ2h0T3V0bGluZWRcIjtcbmltcG9ydCB7IFJhbmdlUGlja2VyIGFzIFJDUmFuZ2VQaWNrZXIgfSBmcm9tICdyYy1waWNrZXInO1xuaW1wb3J0IGVuVVMgZnJvbSAnLi4vbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IFNpemVDb250ZXh0IGZyb20gJy4uLy4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dCc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCB7IGdldFJhbmdlUGxhY2Vob2xkZXIgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldFRpbWVQcm9wcywgQ29tcG9uZW50cyB9IGZyb20gJy4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5nZVBpY2tlcihnZW5lcmF0ZUNvbmZpZykge1xuICB2YXIgUmFuZ2VQaWNrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmFuZ2VQaWNrZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSYW5nZVBpY2tlcik7XG5cbiAgICBmdW5jdGlvbiBSYW5nZVBpY2tlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhbmdlUGlja2VyKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIF90aGlzLnBpY2tlclJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVuZGVyUGlja2VyID0gZnVuY3Rpb24gKGNvbnRleHRMb2NhbGUpIHtcbiAgICAgICAgdmFyIGxvY2FsZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBjb250ZXh0TG9jYWxlKSwgX3RoaXMucHJvcHMubG9jYWxlKTtcblxuICAgICAgICB2YXIgX3RoaXMkY29udGV4dCA9IF90aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBnZXRQcmVmaXhDbHMgPSBfdGhpcyRjb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJGNvbnRleHQuZGlyZWN0aW9uLFxuICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfdGhpcyRjb250ZXh0LmdldFBvcHVwQ29udGFpbmVyO1xuXG4gICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgY3VzdG9tR2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGN1c3RvbWl6ZVNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgICAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRib3JkZXJlZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcImJvcmRlcmVkXCIsIFwicGxhY2Vob2xkZXJcIl0pO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMuZm9ybWF0LFxuICAgICAgICAgICAgc2hvd1RpbWUgPSBfdGhpcyRwcm9wcy5zaG93VGltZSxcbiAgICAgICAgICAgIHBpY2tlciA9IF90aGlzJHByb3BzLnBpY2tlcjtcbiAgICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncGlja2VyJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgICAgdmFyIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzID0ge307XG4gICAgICAgIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzID0gX2V4dGVuZHMoX2V4dGVuZHMoX2V4dGVuZHMoe30sIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzKSwgc2hvd1RpbWUgPyBnZXRUaW1lUHJvcHMoX2V4dGVuZHMoe1xuICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgIHBpY2tlcjogcGlja2VyXG4gICAgICAgIH0sIHNob3dUaW1lKSkgOiB7fSksIHBpY2tlciA9PT0gJ3RpbWUnID8gZ2V0VGltZVByb3BzKF9leHRlbmRzKF9leHRlbmRzKHtcbiAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFxuICAgICAgICB9LCBfdGhpcy5wcm9wcyksIHtcbiAgICAgICAgICBwaWNrZXI6IHBpY2tlclxuICAgICAgICB9KSkgOiB7fSk7XG4gICAgICAgIHZhciByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICB2YXIgbWVyZ2VkU2l6ZSA9IGN1c3RvbWl6ZVNpemUgfHwgc2l6ZTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUkNSYW5nZVBpY2tlciwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc2VwYXJhdG9yOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJ0b1wiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VwYXJhdG9yXCIpXG4gICAgICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTd2FwUmlnaHRPdXRsaW5lZCwgbnVsbCkpLFxuICAgICAgICAgICAgcmVmOiBfdGhpcy5waWNrZXJSZWYsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogZ2V0UmFuZ2VQbGFjZWhvbGRlcihwaWNrZXIsIGxvY2FsZSwgcGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgc3VmZml4SWNvbjogcGlja2VyID09PSAndGltZScgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9ja0NpcmNsZU91dGxpbmVkLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFyT3V0bGluZWQsIG51bGwpLFxuICAgICAgICAgICAgY2xlYXJJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zZUNpcmNsZUZpbGxlZCwgbnVsbCksXG4gICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLXNsaWRlLXVwXCIpXG4gICAgICAgICAgfSwgcmVzdFByb3BzLCBhZGRpdGlvbmFsT3ZlcnJpZGVQcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWRTaXplKSwgbWVyZ2VkU2l6ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJsZXNzXCIpLCAhYm9yZGVyZWQpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSksXG4gICAgICAgICAgICBsb2NhbGU6IGxvY2FsZS5sYW5nLFxuICAgICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogY3VzdG9tR2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgICAgICAgICBwcmV2SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByZXYtaWNvblwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXh0SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5leHQtaWNvblwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclByZXZJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VwZXItcHJldi1pY29uXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1cGVyTmV4dEljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1uZXh0LWljb25cIilcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29tcG9uZW50czogQ29tcG9uZW50cyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFuZ2VQaWNrZXIsIFt7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYWxlUmVjZWl2ZXIsIHtcbiAgICAgICAgICBjb21wb25lbnROYW1lOiBcIkRhdGVQaWNrZXJcIixcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlOiBlblVTXG4gICAgICAgIH0sIHRoaXMucmVuZGVyUGlja2VyKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmFuZ2VQaWNrZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBSYW5nZVBpY2tlci5jb250ZXh0VHlwZSA9IENvbmZpZ0NvbnRleHQ7XG4gIHJldHVybiBSYW5nZVBpY2tlcjtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ2FsZW5kYXJPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2FsZW5kYXJPdXRsaW5lZFwiO1xuaW1wb3J0IENsb2NrQ2lyY2xlT3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL0Nsb2NrQ2lyY2xlT3V0bGluZWRcIjtcbmltcG9ydCBDbG9zZUNpcmNsZUZpbGxlZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIjtcbmltcG9ydCBSQ1BpY2tlciBmcm9tICdyYy1waWNrZXInO1xuaW1wb3J0IGVuVVMgZnJvbSAnLi4vbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IGdldFBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgZGV2V2FybmluZyBmcm9tICcuLi8uLi9fdXRpbC9kZXZXYXJuaW5nJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uLy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgU2l6ZUNvbnRleHQgZnJvbSAnLi4vLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0JztcbmltcG9ydCB7IGdldFRpbWVQcm9wcywgQ29tcG9uZW50cyB9IGZyb20gJy4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQaWNrZXIoZ2VuZXJhdGVDb25maWcpIHtcbiAgZnVuY3Rpb24gZ2V0UGlja2VyKHBpY2tlciwgZGlzcGxheU5hbWUpIHtcbiAgICB2YXIgUGlja2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoUGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQaWNrZXIpO1xuXG4gICAgICBmdW5jdGlvbiBQaWNrZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaWNrZXIpO1xuXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICBfdGhpcy5waWNrZXJSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAgICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnBpY2tlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBfdGhpcy5waWNrZXJSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5ibHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgX3RoaXMucGlja2VyUmVmLmN1cnJlbnQuYmx1cigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5yZW5kZXJQaWNrZXIgPSBmdW5jdGlvbiAoY29udGV4dExvY2FsZSkge1xuICAgICAgICAgIHZhciBsb2NhbGUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgY29udGV4dExvY2FsZSksIF90aGlzLnByb3BzLmxvY2FsZSk7XG5cbiAgICAgICAgICB2YXIgX3RoaXMkY29udGV4dCA9IF90aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgIGdldFByZWZpeENscyA9IF90aGlzJGNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRjb250ZXh0LmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfdGhpcyRjb250ZXh0LmdldFBvcHVwQ29udGFpbmVyO1xuXG4gICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgY3VzdG9taXplR2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjdXN0b21pemVTaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgICAgICAgICAgYm9yZGVyZWQgPSBfYSRib3JkZXJlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hJGJvcmRlcmVkLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IF9hLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcImJvcmRlcmVkXCIsIFwicGxhY2Vob2xkZXJcIl0pO1xuXG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgIGZvcm1hdCA9IF90aGlzJHByb3BzLmZvcm1hdCxcbiAgICAgICAgICAgICAgc2hvd1RpbWUgPSBfdGhpcyRwcm9wcy5zaG93VGltZTtcbiAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwaWNrZXInLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICAgIHZhciBhZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgICBzaG93VG9kYXk6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBhZGRpdGlvbmFsT3ZlcnJpZGVQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgaWYgKHBpY2tlcikge1xuICAgICAgICAgICAgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMucGlja2VyID0gcGlja2VyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtZXJnZWRQaWNrZXIgPSBwaWNrZXIgfHwgX3RoaXMucHJvcHMucGlja2VyO1xuICAgICAgICAgIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzID0gX2V4dGVuZHMoX2V4dGVuZHMoX2V4dGVuZHMoe30sIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzKSwgc2hvd1RpbWUgPyBnZXRUaW1lUHJvcHMoX2V4dGVuZHMoe1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICBwaWNrZXI6IG1lcmdlZFBpY2tlclxuICAgICAgICAgIH0sIHNob3dUaW1lKSkgOiB7fSksIG1lcmdlZFBpY2tlciA9PT0gJ3RpbWUnID8gZ2V0VGltZVByb3BzKF9leHRlbmRzKF9leHRlbmRzKHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSwgX3RoaXMucHJvcHMpLCB7XG4gICAgICAgICAgICBwaWNrZXI6IG1lcmdlZFBpY2tlclxuICAgICAgICAgIH0pKSA6IHt9KTtcbiAgICAgICAgICB2YXIgcm9vdFByZWZpeENscyA9IGdldFByZWZpeENscygpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIG1lcmdlZFNpemUgPSBjdXN0b21pemVTaXplIHx8IHNpemU7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUkNQaWNrZXIsIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgcmVmOiBfdGhpcy5waWNrZXJSZWYsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBnZXRQbGFjZWhvbGRlcihtZXJnZWRQaWNrZXIsIGxvY2FsZSwgcGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgICBzdWZmaXhJY29uOiBtZXJnZWRQaWNrZXIgPT09ICd0aW1lJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb2NrQ2lyY2xlT3V0bGluZWQsIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXJPdXRsaW5lZCwgbnVsbCksXG4gICAgICAgICAgICAgIGNsZWFySWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2VDaXJjbGVGaWxsZWQsIG51bGwpLFxuICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItc2xpZGUtdXBcIilcbiAgICAgICAgICAgIH0sIGFkZGl0aW9uYWxQcm9wcywgcmVzdFByb3BzLCBhZGRpdGlvbmFsT3ZlcnJpZGVQcm9wcywge1xuICAgICAgICAgICAgICBsb2NhbGU6IGxvY2FsZS5sYW5nLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KG1lcmdlZFNpemUpLCBtZXJnZWRTaXplKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJvcmRlcmxlc3NcIiksICFib3JkZXJlZCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKSxcbiAgICAgICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBjdXN0b21pemVHZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgICAgICAgICAgICBwcmV2SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHJldi1pY29uXCIpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXh0SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmV4dC1pY29uXCIpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzdXBlclByZXZJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1wcmV2LWljb25cIilcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHN1cGVyTmV4dEljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1cGVyLW5leHQtaWNvblwiKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29tcG9uZW50czogQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBkZXZXYXJuaW5nKHBpY2tlciAhPT0gJ3F1YXJ0ZXInLCBkaXNwbGF5TmFtZSwgXCJEYXRlUGlja2VyLlwiLmNvbmNhdChkaXNwbGF5TmFtZSwgXCIgaXMgbGVnYWN5IHVzYWdlLiBQbGVhc2UgdXNlIERhdGVQaWNrZXJbcGlja2VyPSdcIikuY29uY2F0KHBpY2tlciwgXCInXSBkaXJlY3RseS5cIikpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhQaWNrZXIsIFt7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYWxlUmVjZWl2ZXIsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IFwiRGF0ZVBpY2tlclwiLFxuICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogZW5VU1xuICAgICAgICAgIH0sIHRoaXMucmVuZGVyUGlja2VyKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gUGlja2VyO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIFBpY2tlci5jb250ZXh0VHlwZSA9IENvbmZpZ0NvbnRleHQ7XG5cbiAgICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICAgIFBpY2tlci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBQaWNrZXI7XG4gIH1cblxuICB2YXIgRGF0ZVBpY2tlciA9IGdldFBpY2tlcigpO1xuICB2YXIgV2Vla1BpY2tlciA9IGdldFBpY2tlcignd2VlaycsICdXZWVrUGlja2VyJyk7XG4gIHZhciBNb250aFBpY2tlciA9IGdldFBpY2tlcignbW9udGgnLCAnTW9udGhQaWNrZXInKTtcbiAgdmFyIFllYXJQaWNrZXIgPSBnZXRQaWNrZXIoJ3llYXInLCAnWWVhclBpY2tlcicpO1xuICB2YXIgVGltZVBpY2tlciA9IGdldFBpY2tlcigndGltZScsICdUaW1lUGlja2VyJyk7XG4gIHZhciBRdWFydGVyUGlja2VyID0gZ2V0UGlja2VyKCdxdWFydGVyJywgJ1F1YXJ0ZXJQaWNrZXInKTtcbiAgcmV0dXJuIHtcbiAgICBEYXRlUGlja2VyOiBEYXRlUGlja2VyLFxuICAgIFdlZWtQaWNrZXI6IFdlZWtQaWNrZXIsXG4gICAgTW9udGhQaWNrZXI6IE1vbnRoUGlja2VyLFxuICAgIFllYXJQaWNrZXI6IFllYXJQaWNrZXIsXG4gICAgVGltZVBpY2tlcjogVGltZVBpY2tlcixcbiAgICBRdWFydGVyUGlja2VyOiBRdWFydGVyUGlja2VyXG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUGlja2VyQnV0dG9uIGZyb20gJy4uL1BpY2tlckJ1dHRvbic7XG5pbXBvcnQgUGlja2VyVGFnIGZyb20gJy4uL1BpY2tlclRhZyc7XG5pbXBvcnQgZ2VuZXJhdGVTaW5nbGVQaWNrZXIgZnJvbSAnLi9nZW5lcmF0ZVNpbmdsZVBpY2tlcic7XG5pbXBvcnQgZ2VuZXJhdGVSYW5nZVBpY2tlciBmcm9tICcuL2dlbmVyYXRlUmFuZ2VQaWNrZXInO1xuZXhwb3J0IHZhciBDb21wb25lbnRzID0ge1xuICBidXR0b246IFBpY2tlckJ1dHRvbixcbiAgcmFuZ2VJdGVtOiBQaWNrZXJUYWdcbn07XG5cbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCkge1xuICBpZiAoIWxpc3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShsaXN0KSA/IGxpc3QgOiBbbGlzdF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lUHJvcHMocHJvcHMpIHtcbiAgdmFyIGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgIHBpY2tlciA9IHByb3BzLnBpY2tlcixcbiAgICAgIHNob3dIb3VyID0gcHJvcHMuc2hvd0hvdXIsXG4gICAgICBzaG93TWludXRlID0gcHJvcHMuc2hvd01pbnV0ZSxcbiAgICAgIHNob3dTZWNvbmQgPSBwcm9wcy5zaG93U2Vjb25kLFxuICAgICAgdXNlMTJIb3VycyA9IHByb3BzLnVzZTEySG91cnM7XG4gIHZhciBmaXJzdEZvcm1hdCA9IHRvQXJyYXkoZm9ybWF0KVswXTtcblxuICB2YXIgc2hvd1RpbWVPYmogPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXG4gIGlmIChmaXJzdEZvcm1hdCAmJiB0eXBlb2YgZmlyc3RGb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKCFmaXJzdEZvcm1hdC5pbmNsdWRlcygncycpICYmIHNob3dTZWNvbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2hvd1RpbWVPYmouc2hvd1NlY29uZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmlyc3RGb3JtYXQuaW5jbHVkZXMoJ20nKSAmJiBzaG93TWludXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNob3dUaW1lT2JqLnNob3dNaW51dGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpcnN0Rm9ybWF0LmluY2x1ZGVzKCdIJykgJiYgIWZpcnN0Rm9ybWF0LmluY2x1ZGVzKCdoJykgJiYgc2hvd0hvdXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2hvd1RpbWVPYmouc2hvd0hvdXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoKGZpcnN0Rm9ybWF0LmluY2x1ZGVzKCdhJykgfHwgZmlyc3RGb3JtYXQuaW5jbHVkZXMoJ0EnKSkgJiYgdXNlMTJIb3VycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzaG93VGltZU9iai51c2UxMkhvdXJzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGlja2VyID09PSAndGltZScpIHtcbiAgICByZXR1cm4gc2hvd1RpbWVPYmo7XG4gIH1cblxuICBpZiAodHlwZW9mIGZpcnN0Rm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZm9ybWF0IG9mIHNob3dUaW1lIHNob3VsZCB1c2UgZGVmYXVsdCB3aGVuIGZvcm1hdCBpcyBjdXN0b20gZm9ybWF0IGZ1bmN0aW9uXG4gICAgZGVsZXRlIHNob3dUaW1lT2JqLmZvcm1hdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd1RpbWU6IHNob3dUaW1lT2JqXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGlja2VyKGdlbmVyYXRlQ29uZmlnKSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBQaWNrZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIgPSBnZW5lcmF0ZVNpbmdsZVBpY2tlcihnZW5lcmF0ZUNvbmZpZyksXG4gICAgICBEYXRlUGlja2VyID0gX2dlbmVyYXRlU2luZ2xlUGlja2VyLkRhdGVQaWNrZXIsXG4gICAgICBXZWVrUGlja2VyID0gX2dlbmVyYXRlU2luZ2xlUGlja2VyLldlZWtQaWNrZXIsXG4gICAgICBNb250aFBpY2tlciA9IF9nZW5lcmF0ZVNpbmdsZVBpY2tlci5Nb250aFBpY2tlcixcbiAgICAgIFllYXJQaWNrZXIgPSBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIuWWVhclBpY2tlcixcbiAgICAgIFRpbWVQaWNrZXIgPSBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIuVGltZVBpY2tlcixcbiAgICAgIFF1YXJ0ZXJQaWNrZXIgPSBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIuUXVhcnRlclBpY2tlcjsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IFJhbmdlIFBpY2tlciA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBSYW5nZVBpY2tlciA9IGdlbmVyYXRlUmFuZ2VQaWNrZXIoZ2VuZXJhdGVDb25maWcpO1xuICB2YXIgTWVyZ2VkRGF0ZVBpY2tlciA9IERhdGVQaWNrZXI7XG4gIE1lcmdlZERhdGVQaWNrZXIuV2Vla1BpY2tlciA9IFdlZWtQaWNrZXI7XG4gIE1lcmdlZERhdGVQaWNrZXIuTW9udGhQaWNrZXIgPSBNb250aFBpY2tlcjtcbiAgTWVyZ2VkRGF0ZVBpY2tlci5ZZWFyUGlja2VyID0gWWVhclBpY2tlcjtcbiAgTWVyZ2VkRGF0ZVBpY2tlci5SYW5nZVBpY2tlciA9IFJhbmdlUGlja2VyO1xuICBNZXJnZWREYXRlUGlja2VyLlRpbWVQaWNrZXIgPSBUaW1lUGlja2VyO1xuICBNZXJnZWREYXRlUGlja2VyLlF1YXJ0ZXJQaWNrZXIgPSBRdWFydGVyUGlja2VyO1xuICByZXR1cm4gTWVyZ2VkRGF0ZVBpY2tlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQaWNrZXI7IiwiaW1wb3J0IG1vbWVudEdlbmVyYXRlQ29uZmlnIGZyb20gXCJyYy1waWNrZXIvZXMvZ2VuZXJhdGUvbW9tZW50XCI7XG5pbXBvcnQgZ2VuZXJhdGVQaWNrZXIgZnJvbSAnLi9nZW5lcmF0ZVBpY2tlcic7XG52YXIgRGF0ZVBpY2tlciA9IGdlbmVyYXRlUGlja2VyKG1vbWVudEdlbmVyYXRlQ29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXI7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7IC8vIHN0eWxlIGRlcGVuZGVuY2llc1xuXG5pbXBvcnQgJy4uLy4uL3RhZy9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9idXR0b24vc3R5bGUvY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIocGlja2VyLCBsb2NhbGUsIGN1c3RvbWl6ZVBsYWNlaG9sZGVyKSB7XG4gIGlmIChjdXN0b21pemVQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGN1c3RvbWl6ZVBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ3llYXInICYmIGxvY2FsZS5sYW5nLnllYXJQbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBsb2NhbGUubGFuZy55ZWFyUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAncXVhcnRlcicgJiYgbG9jYWxlLmxhbmcucXVhcnRlclBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnF1YXJ0ZXJQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChwaWNrZXIgPT09ICdtb250aCcgJiYgbG9jYWxlLmxhbmcubW9udGhQbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBsb2NhbGUubGFuZy5tb250aFBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ3dlZWsnICYmIGxvY2FsZS5sYW5nLndlZWtQbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBsb2NhbGUubGFuZy53ZWVrUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAndGltZScgJiYgbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucGxhY2Vob2xkZXI7XG4gIH1cblxuICByZXR1cm4gbG9jYWxlLmxhbmcucGxhY2Vob2xkZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2VQbGFjZWhvbGRlcihwaWNrZXIsIGxvY2FsZSwgY3VzdG9taXplUGxhY2Vob2xkZXIpIHtcbiAgaWYgKGN1c3RvbWl6ZVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3VzdG9taXplUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAneWVhcicgJiYgbG9jYWxlLmxhbmcueWVhclBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnJhbmdlWWVhclBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ21vbnRoJyAmJiBsb2NhbGUubGFuZy5tb250aFBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnJhbmdlTW9udGhQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChwaWNrZXIgPT09ICd3ZWVrJyAmJiBsb2NhbGUubGFuZy53ZWVrUGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLmxhbmcucmFuZ2VXZWVrUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAndGltZScgJiYgbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucmFuZ2VQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbnZhciBDaGVja2FibGVUYWcgPSBmdW5jdGlvbiBDaGVja2FibGVUYWcoX2EpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjaGVja2VkID0gX2EuY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsXG4gICAgICBvbkNsaWNrID0gX2Eub25DbGljayxcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hlY2tlZFwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbGlja1wiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKCFjaGVja2VkKTtcbiAgICBvbkNsaWNrID09PSBudWxsIHx8IG9uQ2xpY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2xpY2soZSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndGFnJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrYWJsZVwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaGVja2FibGUtY2hlY2tlZFwiKSwgY2hlY2tlZCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2tcbiAgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2thYmxlVGFnOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tIFwicmMtdXRpbC9lcy9vbWl0XCI7XG5pbXBvcnQgQ2xvc2VPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvQ2xvc2VPdXRsaW5lZFwiO1xuaW1wb3J0IENoZWNrYWJsZVRhZyBmcm9tICcuL0NoZWNrYWJsZVRhZyc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCB7IFByZXNldENvbG9yVHlwZXMsIFByZXNldFN0YXR1c0NvbG9yVHlwZXMgfSBmcm9tICcuLi9fdXRpbC9jb2xvcnMnO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi4vX3V0aWwvd2F2ZSc7XG52YXIgUHJlc2V0Q29sb3JSZWdleCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChQcmVzZXRDb2xvclR5cGVzLmpvaW4oJ3wnKSwgXCIpKC1pbnZlcnNlKT8kXCIpKTtcbnZhciBQcmVzZXRTdGF0dXNDb2xvclJlZ2V4ID0gbmV3IFJlZ0V4cChcIl4oXCIuY29uY2F0KFByZXNldFN0YXR1c0NvbG9yVHlwZXMuam9pbignfCcpLCBcIikkXCIpKTtcblxudmFyIEludGVybmFsVGFnID0gZnVuY3Rpb24gSW50ZXJuYWxUYWcoX2EsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICBjb2xvciA9IF9hLmNvbG9yLFxuICAgICAgb25DbG9zZSA9IF9hLm9uQ2xvc2UsXG4gICAgICBjbG9zZUljb24gPSBfYS5jbG9zZUljb24sXG4gICAgICBfYSRjbG9zYWJsZSA9IF9hLmNsb3NhYmxlLFxuICAgICAgY2xvc2FibGUgPSBfYSRjbG9zYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSRjbG9zYWJsZSxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwiaWNvblwiLCBcImNvbG9yXCIsIFwib25DbG9zZVwiLCBcImNsb3NlSWNvblwiLCBcImNsb3NhYmxlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh0cnVlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgdmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgIHNldFZpc2libGUocHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9LCBbcHJvcHMudmlzaWJsZV0pO1xuXG4gIHZhciBpc1ByZXNldENvbG9yID0gZnVuY3Rpb24gaXNQcmVzZXRDb2xvcigpIHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByZXNldENvbG9yUmVnZXgudGVzdChjb2xvcikgfHwgUHJlc2V0U3RhdHVzQ29sb3JSZWdleC50ZXN0KGNvbG9yKTtcbiAgfTtcblxuICB2YXIgdGFnU3R5bGUgPSBfZXh0ZW5kcyh7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciAmJiAhaXNQcmVzZXRDb2xvcigpID8gY29sb3IgOiB1bmRlZmluZWRcbiAgfSwgc3R5bGUpO1xuXG4gIHZhciBwcmVzZXRDb2xvciA9IGlzUHJlc2V0Q29sb3IoKTtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndGFnJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIHRhZ0NsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoY29sb3IpLCBwcmVzZXRDb2xvciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYXMtY29sb3JcIiksIGNvbG9yICYmICFwcmVzZXRDb2xvciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRkZW5cIiksICF2aXNpYmxlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcblxuICB2YXIgaGFuZGxlQ2xvc2VDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25DbG9zZSA9PT0gbnVsbCB8fCBvbkNsb3NlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNsb3NlKGUpO1xuXG4gICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykpIHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVuZGVyQ2xvc2VJY29uID0gZnVuY3Rpb24gcmVuZGVyQ2xvc2VJY29uKCkge1xuICAgIGlmIChjbG9zYWJsZSkge1xuICAgICAgcmV0dXJuIGNsb3NlSWNvbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbG9zZUNsaWNrXG4gICAgICB9LCBjbG9zZUljb24pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2VPdXRsaW5lZCwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xvc2UtaWNvblwiKSxcbiAgICAgICAgb25DbGljazogaGFuZGxlQ2xvc2VDbGlja1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFyIGlzTmVlZFdhdmUgPSAnb25DbGljaycgaW4gcHJvcHMgfHwgY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gJ2EnO1xuICB2YXIgdGFnUHJvcHMgPSBvbWl0KHByb3BzLCBbJ3Zpc2libGUnXSk7XG4gIHZhciBpY29uTm9kZSA9IGljb24gfHwgbnVsbDtcbiAgdmFyIGtpZHMgPSBpY29uTm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpY29uTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSkgOiBjaGlsZHJlbjtcbiAgdmFyIHRhZ05vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe30sIHRhZ1Byb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiB0YWdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHRhZ1N0eWxlXG4gIH0pLCBraWRzLCByZW5kZXJDbG9zZUljb24oKSk7XG4gIHJldHVybiBpc05lZWRXYXZlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2F2ZSwgbnVsbCwgdGFnTm9kZSkgOiB0YWdOb2RlO1xufTtcblxudmFyIFRhZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsVGFnKTtcblRhZy5kaXNwbGF5TmFtZSA9ICdUYWcnO1xuVGFnLkNoZWNrYWJsZVRhZyA9IENoZWNrYWJsZVRhZztcbmV4cG9ydCBkZWZhdWx0IFRhZzsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgUGFuZWxDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGRlZmF1bHQgUGFuZWxDb250ZXh0OyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5cbi8qKlxuICogUmVtb3ZlZDpcbiAqICAtIGdldENhbGVuZGFyQ29udGFpbmVyOiB1c2UgYGdldFBvcHVwQ29udGFpbmVyYCBpbnN0ZWFkXG4gKiAgLSBvbk9rXG4gKlxuICogTmV3IEZlYXR1cmU6XG4gKiAgLSBwaWNrZXJcbiAqICAtIGFsbG93RW1wdHlcbiAqICAtIHNlbGVjdGFibGVcbiAqXG4gKiBUaXBzOiBTaG91bGQgYWRkIGZhcSBhYm91dCBgZGF0ZXRpbWVgIG1vZGUgd2l0aCBgZGVmYXVsdFZhbHVlYFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCB1c2VNZXJnZWRTdGF0ZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZXJnZWRTdGF0ZVwiO1xuaW1wb3J0IFBpY2tlclBhbmVsIGZyb20gJy4vUGlja2VyUGFuZWwnO1xuaW1wb3J0IFBpY2tlclRyaWdnZXIgZnJvbSAnLi9QaWNrZXJUcmlnZ2VyJztcbmltcG9ydCB7IGZvcm1hdFZhbHVlLCBpc0VxdWFsLCBwYXJzZVZhbHVlIH0gZnJvbSAnLi91dGlscy9kYXRlVXRpbCc7XG5pbXBvcnQgZ2V0RGF0YU9yQXJpYVByb3BzLCB7IHRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL21pc2NVdGlsJztcbmltcG9ydCBQYW5lbENvbnRleHQgZnJvbSAnLi9QYW5lbENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEZvcm1hdCwgZ2V0SW5wdXRTaXplLCBlbGVtZW50c0NvbnRhaW5zIH0gZnJvbSAnLi91dGlscy91aVV0aWwnO1xuaW1wb3J0IHVzZVBpY2tlcklucHV0IGZyb20gJy4vaG9va3MvdXNlUGlja2VySW5wdXQnO1xuaW1wb3J0IHVzZVRleHRWYWx1ZU1hcHBpbmcgZnJvbSAnLi9ob29rcy91c2VUZXh0VmFsdWVNYXBwaW5nJztcbmltcG9ydCB1c2VWYWx1ZVRleHRzIGZyb20gJy4vaG9va3MvdXNlVmFsdWVUZXh0cyc7XG5pbXBvcnQgdXNlSG92ZXJWYWx1ZSBmcm9tICcuL2hvb2tzL3VzZUhvdmVyVmFsdWUnO1xuXG5mdW5jdGlvbiBJbm5lclBpY2tlcihwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gIHZhciBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXBpY2tlcicgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIHRhYkluZGV4ID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgcG9wdXBTdHlsZSA9IHByb3BzLnBvcHVwU3R5bGUsXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgIGlucHV0UmVhZE9ubHkgPSBwcm9wcy5pbnB1dFJlYWRPbmx5LFxuICAgICAgYWxsb3dDbGVhciA9IHByb3BzLmFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBzaG93VGltZSA9IHByb3BzLnNob3dUaW1lLFxuICAgICAgX3Byb3BzJHBpY2tlciA9IHByb3BzLnBpY2tlcixcbiAgICAgIHBpY2tlciA9IF9wcm9wcyRwaWNrZXIgPT09IHZvaWQgMCA/ICdkYXRlJyA6IF9wcm9wcyRwaWNrZXIsXG4gICAgICBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICB1c2UxMkhvdXJzID0gcHJvcHMudXNlMTJIb3VycyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIGRlZmF1bHRPcGVuID0gcHJvcHMuZGVmYXVsdE9wZW4sXG4gICAgICBkZWZhdWx0T3BlblZhbHVlID0gcHJvcHMuZGVmYXVsdE9wZW5WYWx1ZSxcbiAgICAgIHN1ZmZpeEljb24gPSBwcm9wcy5zdWZmaXhJY29uLFxuICAgICAgY2xlYXJJY29uID0gcHJvcHMuY2xlYXJJY29uLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkRGF0ZSA9IHByb3BzLmRpc2FibGVkRGF0ZSxcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgcGlja2VyUmVmID0gcHJvcHMucGlja2VyUmVmLFxuICAgICAgcGFuZWxSZW5kZXIgPSBwcm9wcy5wYW5lbFJlbmRlcixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbk9wZW5DaGFuZ2UgPSBwcm9wcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvbk1vdXNlVXAgPSBwcm9wcy5vbk1vdXNlVXAsXG4gICAgICBvbk1vdXNlRW50ZXIgPSBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbkNvbnRleHRNZW51ID0gcHJvcHMub25Db250ZXh0TWVudSxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgX29uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIF9vblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgX3Byb3BzJGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSxcbiAgICAgIGF1dG9Db21wbGV0ZSA9IF9wcm9wcyRhdXRvQ29tcGxldGUgPT09IHZvaWQgMCA/ICdvZmYnIDogX3Byb3BzJGF1dG9Db21wbGV0ZTtcbiAgdmFyIGlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbmVlZENvbmZpcm1CdXR0b24gPSBwaWNrZXIgPT09ICdkYXRlJyAmJiAhIXNob3dUaW1lIHx8IHBpY2tlciA9PT0gJ3RpbWUnOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdGF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBmb3JtYXRMaXN0ID0gdG9BcnJheShnZXREZWZhdWx0Rm9ybWF0KGZvcm1hdCwgcGlja2VyLCBzaG93VGltZSwgdXNlMTJIb3VycykpOyAvLyBQYW5lbCByZWZcblxuICB2YXIgcGFuZWxEaXZSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBpbnB1dERpdlJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gUmVhbCB2YWx1ZVxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSB1c2VNZXJnZWRTdGF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlXG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgICBtZXJnZWRWYWx1ZSA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgICBzZXRJbm5lclZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlsxXTsgLy8gU2VsZWN0ZWQgdmFsdWVcblxuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShtZXJnZWRWYWx1ZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHNlbGVjdGVkVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07IC8vIE9wZXJhdGlvbiByZWZcblxuXG4gIHZhciBvcGVyYXRpb25SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7IC8vIE9wZW5cblxuICB2YXIgX3VzZU1lcmdlZFN0YXRlMyA9IHVzZU1lcmdlZFN0YXRlKGZhbHNlLCB7XG4gICAgdmFsdWU6IG9wZW4sXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0T3BlbixcbiAgICBwb3N0U3RhdGU6IGZ1bmN0aW9uIHBvc3RTdGF0ZShwb3N0T3Blbikge1xuICAgICAgcmV0dXJuIGRpc2FibGVkID8gZmFsc2UgOiBwb3N0T3BlbjtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdPcGVuKSB7XG4gICAgICBpZiAob25PcGVuQ2hhbmdlKSB7XG4gICAgICAgIG9uT3BlbkNoYW5nZShuZXdPcGVuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFuZXdPcGVuICYmIG9wZXJhdGlvblJlZi5jdXJyZW50ICYmIG9wZXJhdGlvblJlZi5jdXJyZW50Lm9uQ2xvc2UpIHtcbiAgICAgICAgb3BlcmF0aW9uUmVmLmN1cnJlbnQub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlMywgMiksXG4gICAgICBtZXJnZWRPcGVuID0gX3VzZU1lcmdlZFN0YXRlNFswXSxcbiAgICAgIHRyaWdnZXJJbm5lck9wZW4gPSBfdXNlTWVyZ2VkU3RhdGU0WzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUZXh0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF91c2VWYWx1ZVRleHRzID0gdXNlVmFsdWVUZXh0cyhzZWxlY3RlZFZhbHVlLCB7XG4gICAgZm9ybWF0TGlzdDogZm9ybWF0TGlzdCxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgbG9jYWxlOiBsb2NhbGVcbiAgfSksXG4gICAgICBfdXNlVmFsdWVUZXh0czIgPSBfc2xpY2VkVG9BcnJheShfdXNlVmFsdWVUZXh0cywgMiksXG4gICAgICB2YWx1ZVRleHRzID0gX3VzZVZhbHVlVGV4dHMyWzBdLFxuICAgICAgZmlyc3RWYWx1ZVRleHQgPSBfdXNlVmFsdWVUZXh0czJbMV07XG5cbiAgdmFyIF91c2VUZXh0VmFsdWVNYXBwaW5nID0gdXNlVGV4dFZhbHVlTWFwcGluZyh7XG4gICAgdmFsdWVUZXh0czogdmFsdWVUZXh0cyxcbiAgICBvblRleHRDaGFuZ2U6IGZ1bmN0aW9uIG9uVGV4dENoYW5nZShuZXdUZXh0KSB7XG4gICAgICB2YXIgaW5wdXREYXRlID0gcGFyc2VWYWx1ZShuZXdUZXh0LCB7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBmb3JtYXRMaXN0OiBmb3JtYXRMaXN0LFxuICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5wdXREYXRlICYmICghZGlzYWJsZWREYXRlIHx8ICFkaXNhYmxlZERhdGUoaW5wdXREYXRlKSkpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZShpbnB1dERhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSksXG4gICAgICBfdXNlVGV4dFZhbHVlTWFwcGluZzIgPSBfc2xpY2VkVG9BcnJheShfdXNlVGV4dFZhbHVlTWFwcGluZywgMyksXG4gICAgICB0ZXh0ID0gX3VzZVRleHRWYWx1ZU1hcHBpbmcyWzBdLFxuICAgICAgdHJpZ2dlclRleHRDaGFuZ2UgPSBfdXNlVGV4dFZhbHVlTWFwcGluZzJbMV0sXG4gICAgICByZXNldFRleHQgPSBfdXNlVGV4dFZhbHVlTWFwcGluZzJbMl07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVHJpZ2dlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgdHJpZ2dlckNoYW5nZSA9IGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2UobmV3VmFsdWUpIHtcbiAgICBzZXRTZWxlY3RlZFZhbHVlKG5ld1ZhbHVlKTtcbiAgICBzZXRJbm5lclZhbHVlKG5ld1ZhbHVlKTtcblxuICAgIGlmIChvbkNoYW5nZSAmJiAhaXNFcXVhbChnZW5lcmF0ZUNvbmZpZywgbWVyZ2VkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgb25DaGFuZ2UobmV3VmFsdWUsIG5ld1ZhbHVlID8gZm9ybWF0VmFsdWUobmV3VmFsdWUsIHtcbiAgICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgZm9ybWF0OiBmb3JtYXRMaXN0WzBdXG4gICAgICB9KSA6ICcnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJPcGVuID0gZnVuY3Rpb24gdHJpZ2dlck9wZW4obmV3T3Blbikge1xuICAgIGlmIChkaXNhYmxlZCAmJiBuZXdPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJpZ2dlcklubmVyT3BlbihuZXdPcGVuKTtcbiAgfTtcblxuICB2YXIgZm9yd2FyZEtleURvd24gPSBmdW5jdGlvbiBmb3J3YXJkS2V5RG93bihlKSB7XG4gICAgaWYgKG1lcmdlZE9wZW4gJiYgb3BlcmF0aW9uUmVmLmN1cnJlbnQgJiYgb3BlcmF0aW9uUmVmLmN1cnJlbnQub25LZXlEb3duKSB7XG4gICAgICAvLyBMZXQgcG9wdXAgcGFuZWwgaGFuZGxlIGtleWJvYXJkXG4gICAgICByZXR1cm4gb3BlcmF0aW9uUmVmLmN1cnJlbnQub25LZXlEb3duKGUpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9uZS1ibG9ja3MgKi9cblxuXG4gICAge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ1BpY2tlciBub3QgY29ycmVjdCBmb3J3YXJkIEtleURvd24gb3BlcmF0aW9uLiBQbGVhc2UgaGVscCB0byBmaXJlIGlzc3VlIGFib3V0IHRoaXMuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbkludGVybmFsTW91c2VVcCA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxNb3VzZVVwKCkge1xuICAgIGlmIChvbk1vdXNlVXApIHtcbiAgICAgIG9uTW91c2VVcC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIHRyaWdnZXJPcGVuKHRydWUpO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5wdXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlUGlja2VySW5wdXQgPSB1c2VQaWNrZXJJbnB1dCh7XG4gICAgYmx1clRvQ2FuY2VsOiBuZWVkQ29uZmlybUJ1dHRvbixcbiAgICBvcGVuOiBtZXJnZWRPcGVuLFxuICAgIHZhbHVlOiB0ZXh0LFxuICAgIHRyaWdnZXJPcGVuOiB0cmlnZ2VyT3BlbixcbiAgICBmb3J3YXJkS2V5RG93bjogZm9yd2FyZEtleURvd24sXG4gICAgaXNDbGlja091dHNpZGU6IGZ1bmN0aW9uIGlzQ2xpY2tPdXRzaWRlKHRhcmdldCkge1xuICAgICAgcmV0dXJuICFlbGVtZW50c0NvbnRhaW5zKFtwYW5lbERpdlJlZi5jdXJyZW50LCBpbnB1dERpdlJlZi5jdXJyZW50XSwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIG9uU3VibWl0OiBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcbiAgICAgIGlmIChkaXNhYmxlZERhdGUgJiYgZGlzYWJsZWREYXRlKHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdHJpZ2dlckNoYW5nZShzZWxlY3RlZFZhbHVlKTtcbiAgICAgIHRyaWdnZXJPcGVuKGZhbHNlKTtcbiAgICAgIHJlc2V0VGV4dCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvbkNhbmNlbDogZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgICB0cmlnZ2VyT3BlbihmYWxzZSk7XG4gICAgICBzZXRTZWxlY3RlZFZhbHVlKG1lcmdlZFZhbHVlKTtcbiAgICAgIHJlc2V0VGV4dCgpO1xuICAgIH0sXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSwgcHJldmVudERlZmF1bHQpIHtcbiAgICAgIF9vbktleURvd24gPT09IG51bGwgfHwgX29uS2V5RG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29uS2V5RG93bihlLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgIG9uQmx1cjogb25CbHVyXG4gIH0pLFxuICAgICAgX3VzZVBpY2tlcklucHV0MiA9IF9zbGljZWRUb0FycmF5KF91c2VQaWNrZXJJbnB1dCwgMiksXG4gICAgICBpbnB1dFByb3BzID0gX3VzZVBpY2tlcklucHV0MlswXSxcbiAgICAgIF91c2VQaWNrZXJJbnB1dDIkID0gX3VzZVBpY2tlcklucHV0MlsxXSxcbiAgICAgIGZvY3VzZWQgPSBfdXNlUGlja2VySW5wdXQyJC5mb2N1c2VkLFxuICAgICAgdHlwaW5nID0gX3VzZVBpY2tlcklucHV0MiQudHlwaW5nOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTeW5jID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBDbG9zZSBzaG91bGQgc3luYyBiYWNrIHdpdGggdGV4dCB2YWx1ZVxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1lcmdlZE9wZW4pIHtcbiAgICAgIHNldFNlbGVjdGVkVmFsdWUobWVyZ2VkVmFsdWUpO1xuXG4gICAgICBpZiAoIXZhbHVlVGV4dHMubGVuZ3RoIHx8IHZhbHVlVGV4dHNbMF0gPT09ICcnKSB7XG4gICAgICAgIHRyaWdnZXJUZXh0Q2hhbmdlKCcnKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RWYWx1ZVRleHQgIT09IHRleHQpIHtcbiAgICAgICAgcmVzZXRUZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbWVyZ2VkT3BlbiwgdmFsdWVUZXh0c10pOyAvLyBDaGFuZ2UgcGlja2VyIHNob3VsZCBzeW5jIGJhY2sgd2l0aCB0ZXh0IHZhbHVlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1lcmdlZE9wZW4pIHtcbiAgICAgIHJlc2V0VGV4dCgpO1xuICAgIH1cbiAgfSwgW3BpY2tlcl0pOyAvLyBTeW5jIGlubmVyVmFsdWUgd2l0aCBjb250cm9sIG1vZGVcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bmMgc2VsZWN0IHZhbHVlXG4gICAgc2V0U2VsZWN0ZWRWYWx1ZShtZXJnZWRWYWx1ZSk7XG4gIH0sIFttZXJnZWRWYWx1ZV0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFByaXZhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGlmIChwaWNrZXJSZWYpIHtcbiAgICBwaWNrZXJSZWYuY3VycmVudCA9IHtcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBibHVyOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfdXNlSG92ZXJWYWx1ZSA9IHVzZUhvdmVyVmFsdWUodGV4dCwge1xuICAgIGZvcm1hdExpc3Q6IGZvcm1hdExpc3QsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgIGxvY2FsZTogbG9jYWxlXG4gIH0pLFxuICAgICAgX3VzZUhvdmVyVmFsdWUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUhvdmVyVmFsdWUsIDMpLFxuICAgICAgaG92ZXJWYWx1ZSA9IF91c2VIb3ZlclZhbHVlMlswXSxcbiAgICAgIG9uRW50ZXIgPSBfdXNlSG92ZXJWYWx1ZTJbMV0sXG4gICAgICBvbkxlYXZlID0gX3VzZUhvdmVyVmFsdWUyWzJdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBQYW5lbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHBhbmVsUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgIHBpY2tlclZhbHVlOiB1bmRlZmluZWQsXG4gICAgb25QaWNrZXJWYWx1ZUNoYW5nZTogdW5kZWZpbmVkLFxuICAgIG9uQ2hhbmdlOiBudWxsXG4gIH0pO1xuXG4gIHZhciBwYW5lbE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQaWNrZXJQYW5lbCwgX2V4dGVuZHMoe30sIHBhbmVsUHJvcHMsIHtcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYW5lbC1mb2N1c2VkXCIpLCAhdHlwaW5nKSksXG4gICAgdmFsdWU6IHNlbGVjdGVkVmFsdWUsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlKSB7XG4gICAgICBfb25TZWxlY3QgPT09IG51bGwgfHwgX29uU2VsZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb25TZWxlY3QoZGF0ZSk7XG4gICAgICBzZXRTZWxlY3RlZFZhbHVlKGRhdGUpO1xuICAgIH0sXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgb25QYW5lbENoYW5nZTogZnVuY3Rpb24gb25QYW5lbENoYW5nZSh2aWV3RGF0ZSwgbW9kZSkge1xuICAgICAgdmFyIG9uUGFuZWxDaGFuZ2UgPSBwcm9wcy5vblBhbmVsQ2hhbmdlO1xuICAgICAgb25MZWF2ZSh0cnVlKTtcbiAgICAgIG9uUGFuZWxDaGFuZ2UgPT09IG51bGwgfHwgb25QYW5lbENoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QYW5lbENoYW5nZSh2aWV3RGF0ZSwgbW9kZSk7XG4gICAgfVxuICB9KSk7XG5cbiAgaWYgKHBhbmVsUmVuZGVyKSB7XG4gICAgcGFuZWxOb2RlID0gcGFuZWxSZW5kZXIocGFuZWxOb2RlKTtcbiAgfVxuXG4gIHZhciBwYW5lbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGFuZWwtY29udGFpbmVyXCIpLFxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCBwYW5lbE5vZGUpO1xuICB2YXIgc3VmZml4Tm9kZTtcblxuICBpZiAoc3VmZml4SWNvbikge1xuICAgIHN1ZmZpeE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1ZmZpeFwiKVxuICAgIH0sIHN1ZmZpeEljb24pO1xuICB9XG5cbiAgdmFyIGNsZWFyTm9kZTtcblxuICBpZiAoYWxsb3dDbGVhciAmJiBtZXJnZWRWYWx1ZSAmJiAhZGlzYWJsZWQpIHtcbiAgICBjbGVhck5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VVcDogZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0cmlnZ2VyQ2hhbmdlKG51bGwpO1xuICAgICAgICB0cmlnZ2VyT3BlbihmYWxzZSk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyXCIpXG4gICAgfSwgY2xlYXJJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItYnRuXCIpXG4gICAgfSkpO1xuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gV2FybmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm5pbmcoIWRlZmF1bHRPcGVuVmFsdWUsICdgZGVmYXVsdE9wZW5WYWx1ZWAgbWF5IGNvbmZ1c2UgdXNlciBmb3IgdGhlIGN1cnJlbnQgdmFsdWUgc3RhdHVzLiBQbGVhc2UgdXNlIGBkZWZhdWx0VmFsdWVgIGluc3RlYWQuJyk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZXR1cm4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBvbkNvbnRleHRTZWxlY3QgPSBmdW5jdGlvbiBvbkNvbnRleHRTZWxlY3QoZGF0ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0JyB8fCB0eXBlICE9PSAna2V5JyAmJiAhbmVlZENvbmZpcm1CdXR0b24pIHtcbiAgICAgIC8vIHRyaWdnZXJDaGFuZ2Ugd2lsbCBhbHNvIHVwZGF0ZSBzZWxlY3RlZCB2YWx1ZXNcbiAgICAgIHRyaWdnZXJDaGFuZ2UoZGF0ZSk7XG4gICAgICB0cmlnZ2VyT3BlbihmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwb3B1cFBsYWNlbWVudCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnYm90dG9tUmlnaHQnIDogJ2JvdHRvbUxlZnQnO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIG9wZXJhdGlvblJlZjogb3BlcmF0aW9uUmVmLFxuICAgICAgaGlkZUhlYWRlcjogcGlja2VyID09PSAndGltZScsXG4gICAgICBwYW5lbFJlZjogcGFuZWxEaXZSZWYsXG4gICAgICBvblNlbGVjdDogb25Db250ZXh0U2VsZWN0LFxuICAgICAgb3BlbjogbWVyZ2VkT3BlbixcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IGRlZmF1bHRPcGVuVmFsdWUsXG4gICAgICBvbkRhdGVNb3VzZUVudGVyOiBvbkVudGVyLFxuICAgICAgb25EYXRlTW91c2VMZWF2ZTogb25MZWF2ZVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGlja2VyVHJpZ2dlciwge1xuICAgIHZpc2libGU6IG1lcmdlZE9wZW4sXG4gICAgcG9wdXBFbGVtZW50OiBwYW5lbCxcbiAgICBwb3B1cFN0eWxlOiBwb3B1cFN0eWxlLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBkcm9wZG93bkNsYXNzTmFtZSxcbiAgICBkcm9wZG93bkFsaWduOiBkcm9wZG93bkFsaWduLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lcixcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXBQbGFjZW1lbnQ6IHBvcHVwUGxhY2VtZW50LFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvY3VzZWRcIiksIGZvY3VzZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzMikpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgb25Nb3VzZVVwOiBvbkludGVybmFsTW91c2VVcCxcbiAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICBvbkNvbnRleHRNZW51OiBvbkNvbnRleHRNZW51LFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlucHV0XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5wdXQtcGxhY2Vob2xkZXJcIiksICEhaG92ZXJWYWx1ZSkpLFxuICAgIHJlZjogaW5wdXREaXZSZWZcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgaWQ6IGlkLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgcmVhZE9ubHk6IGlucHV0UmVhZE9ubHkgfHwgdHlwZW9mIGZvcm1hdExpc3RbMF0gPT09ICdmdW5jdGlvbicgfHwgIXR5cGluZyxcbiAgICB2YWx1ZTogaG92ZXJWYWx1ZSB8fCB0ZXh0LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICB0cmlnZ2VyVGV4dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICB0aXRsZTogdGV4dFxuICB9LCBpbnB1dFByb3BzLCB7XG4gICAgc2l6ZTogZ2V0SW5wdXRTaXplKHBpY2tlciwgZm9ybWF0TGlzdFswXSwgZ2VuZXJhdGVDb25maWcpXG4gIH0sIGdldERhdGFPckFyaWFQcm9wcyhwcm9wcyksIHtcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZVxuICB9KSksIHN1ZmZpeE5vZGUsIGNsZWFyTm9kZSkpKSk7XG59IC8vIFdyYXAgd2l0aCBjbGFzcyBjb21wb25lbnQgdG8gZW5hYmxlIHBhc3MgZ2VuZXJpYyB3aXRoIGluc3RhbmNlIG1ldGhvZFxuXG5cbnZhciBQaWNrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBpY2tlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQaWNrZXIpO1xuXG4gIGZ1bmN0aW9uIFBpY2tlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGlja2VyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMucGlja2VyUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucGlja2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgX3RoaXMucGlja2VyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICBfdGhpcy5waWNrZXJSZWYuY3VycmVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQaWNrZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5uZXJQaWNrZXIsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHBpY2tlclJlZjogdGhpcy5waWNrZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGlja2VyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQaWNrZXI7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG4vKipcbiAqIExvZ2ljOlxuICogIFdoZW4gYG1vZGVgID09PSBgcGlja2VyYCxcbiAqICBjbGljayB3aWxsIHRyaWdnZXIgYG9uU2VsZWN0YCAoaWYgdmFsdWUgY2hhbmdlZCB0cmlnZ2VyIGBvbkNoYW5nZWAgYWxzbykuXG4gKiAgUGFuZWwgY2hhbmdlIHdpbGwgbm90IHRyaWdnZXIgYG9uU2VsZWN0YCBidXQgdHJpZ2dlciBgb25QYW5lbENoYW5nZWBcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgdXNlTWVyZ2VkU3RhdGUgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVyZ2VkU3RhdGVcIjtcbmltcG9ydCBUaW1lUGFuZWwgZnJvbSAnLi9wYW5lbHMvVGltZVBhbmVsJztcbmltcG9ydCBEYXRldGltZVBhbmVsIGZyb20gJy4vcGFuZWxzL0RhdGV0aW1lUGFuZWwnO1xuaW1wb3J0IERhdGVQYW5lbCBmcm9tICcuL3BhbmVscy9EYXRlUGFuZWwnO1xuaW1wb3J0IFdlZWtQYW5lbCBmcm9tICcuL3BhbmVscy9XZWVrUGFuZWwnO1xuaW1wb3J0IE1vbnRoUGFuZWwgZnJvbSAnLi9wYW5lbHMvTW9udGhQYW5lbCc7XG5pbXBvcnQgUXVhcnRlclBhbmVsIGZyb20gJy4vcGFuZWxzL1F1YXJ0ZXJQYW5lbCc7XG5pbXBvcnQgWWVhclBhbmVsIGZyb20gJy4vcGFuZWxzL1llYXJQYW5lbCc7XG5pbXBvcnQgRGVjYWRlUGFuZWwgZnJvbSAnLi9wYW5lbHMvRGVjYWRlUGFuZWwnO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJy4vdXRpbHMvZGF0ZVV0aWwnO1xuaW1wb3J0IFBhbmVsQ29udGV4dCBmcm9tICcuL1BhbmVsQ29udGV4dCc7XG5pbXBvcnQgeyBQaWNrZXJNb2RlTWFwIH0gZnJvbSAnLi91dGlscy91aVV0aWwnO1xuaW1wb3J0IFJhbmdlQ29udGV4dCBmcm9tICcuL1JhbmdlQ29udGV4dCc7XG5pbXBvcnQgZ2V0RXh0cmFGb290ZXIgZnJvbSAnLi91dGlscy9nZXRFeHRyYUZvb3Rlcic7XG5pbXBvcnQgZ2V0UmFuZ2VzIGZyb20gJy4vdXRpbHMvZ2V0UmFuZ2VzJztcbmltcG9ydCB7IGdldExvd2VyQm91bmRUaW1lLCBzZXREYXRlVGltZSwgc2V0VGltZSB9IGZyb20gJy4vdXRpbHMvdGltZVV0aWwnO1xuXG5mdW5jdGlvbiBQaWNrZXJQYW5lbChwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtcGlja2VyJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBwaWNrZXJWYWx1ZSA9IHByb3BzLnBpY2tlclZhbHVlLFxuICAgICAgZGVmYXVsdFBpY2tlclZhbHVlID0gcHJvcHMuZGVmYXVsdFBpY2tlclZhbHVlLFxuICAgICAgZGlzYWJsZWREYXRlID0gcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICBfcHJvcHMkcGlja2VyID0gcHJvcHMucGlja2VyLFxuICAgICAgcGlja2VyID0gX3Byb3BzJHBpY2tlciA9PT0gdm9pZCAwID8gJ2RhdGUnIDogX3Byb3BzJHBpY2tlcixcbiAgICAgIF9wcm9wcyR0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgdGFiSW5kZXggPSBfcHJvcHMkdGFiSW5kZXggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkdGFiSW5kZXgsXG4gICAgICBzaG93Tm93ID0gcHJvcHMuc2hvd05vdyxcbiAgICAgIHNob3dUaW1lID0gcHJvcHMuc2hvd1RpbWUsXG4gICAgICBzaG93VG9kYXkgPSBwcm9wcy5zaG93VG9kYXksXG4gICAgICByZW5kZXJFeHRyYUZvb3RlciA9IHByb3BzLnJlbmRlckV4dHJhRm9vdGVyLFxuICAgICAgaGlkZUhlYWRlciA9IHByb3BzLmhpZGVIZWFkZXIsXG4gICAgICBvblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uUGFuZWxDaGFuZ2UgPSBwcm9wcy5vblBhbmVsQ2hhbmdlLFxuICAgICAgb25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bixcbiAgICAgIG9uUGlja2VyVmFsdWVDaGFuZ2UgPSBwcm9wcy5vblBpY2tlclZhbHVlQ2hhbmdlLFxuICAgICAgX29uT2sgPSBwcm9wcy5vbk9rLFxuICAgICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBfcHJvcHMkaG91clN0ZXAgPSBwcm9wcy5ob3VyU3RlcCxcbiAgICAgIGhvdXJTdGVwID0gX3Byb3BzJGhvdXJTdGVwID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGhvdXJTdGVwLFxuICAgICAgX3Byb3BzJG1pbnV0ZVN0ZXAgPSBwcm9wcy5taW51dGVTdGVwLFxuICAgICAgbWludXRlU3RlcCA9IF9wcm9wcyRtaW51dGVTdGVwID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJG1pbnV0ZVN0ZXAsXG4gICAgICBfcHJvcHMkc2Vjb25kU3RlcCA9IHByb3BzLnNlY29uZFN0ZXAsXG4gICAgICBzZWNvbmRTdGVwID0gX3Byb3BzJHNlY29uZFN0ZXAgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkc2Vjb25kU3RlcDtcbiAgdmFyIG5lZWRDb25maXJtQnV0dG9uID0gcGlja2VyID09PSAnZGF0ZScgJiYgISFzaG93VGltZSB8fCBwaWNrZXIgPT09ICd0aW1lJztcbiAgdmFyIGlzSG91clN0ZXBWYWxpZCA9IDI0ICUgaG91clN0ZXAgPT09IDA7XG4gIHZhciBpc01pbnV0ZVN0ZXBWYWxpZCA9IDYwICUgbWludXRlU3RlcCA9PT0gMDtcbiAgdmFyIGlzU2Vjb25kU3RlcFZhbGlkID0gNjAgJSBzZWNvbmRTdGVwID09PSAwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybmluZyghdmFsdWUgfHwgZ2VuZXJhdGVDb25maWcuaXNWYWxpZGF0ZSh2YWx1ZSksICdJbnZhbGlkYXRlIGRhdGUgcGFzcyB0byBgdmFsdWVgLicpO1xuICAgIHdhcm5pbmcoIXZhbHVlIHx8IGdlbmVyYXRlQ29uZmlnLmlzVmFsaWRhdGUodmFsdWUpLCAnSW52YWxpZGF0ZSBkYXRlIHBhc3MgdG8gYGRlZmF1bHRWYWx1ZWAuJyk7XG4gICAgd2FybmluZyhpc0hvdXJTdGVwVmFsaWQsIFwiYGhvdXJTdGVwYCBcIi5jb25jYXQoaG91clN0ZXAsIFwiIGlzIGludmFsaWQuIEl0IHNob3VsZCBiZSBhIGZhY3RvciBvZiAyNC5cIikpO1xuICAgIHdhcm5pbmcoaXNNaW51dGVTdGVwVmFsaWQsIFwiYG1pbnV0ZVN0ZXBgIFwiLmNvbmNhdChtaW51dGVTdGVwLCBcIiBpcyBpbnZhbGlkLiBJdCBzaG91bGQgYmUgYSBmYWN0b3Igb2YgNjAuXCIpKTtcbiAgICB3YXJuaW5nKGlzU2Vjb25kU3RlcFZhbGlkLCBcImBzZWNvbmRTdGVwYCBcIi5jb25jYXQoc2Vjb25kU3RlcCwgXCIgaXMgaW52YWxpZC4gSXQgc2hvdWxkIGJlIGEgZmFjdG9yIG9mIDYwLlwiKSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdGF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHBhbmVsQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFuZWxDb250ZXh0KTtcbiAgdmFyIG9wZXJhdGlvblJlZiA9IHBhbmVsQ29udGV4dC5vcGVyYXRpb25SZWYsXG4gICAgICBwYW5lbERpdlJlZiA9IHBhbmVsQ29udGV4dC5wYW5lbFJlZixcbiAgICAgIG9uQ29udGV4dFNlbGVjdCA9IHBhbmVsQ29udGV4dC5vblNlbGVjdCxcbiAgICAgIGhpZGVSYW5nZXMgPSBwYW5lbENvbnRleHQuaGlkZVJhbmdlcyxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWUgPSBwYW5lbENvbnRleHQuZGVmYXVsdE9wZW5WYWx1ZTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFJhbmdlQ29udGV4dCksXG4gICAgICBpblJhbmdlID0gX1JlYWN0JHVzZUNvbnRleHQuaW5SYW5nZSxcbiAgICAgIHBhbmVsUG9zaXRpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5wYW5lbFBvc2l0aW9uLFxuICAgICAgcmFuZ2VkVmFsdWUgPSBfUmVhY3QkdXNlQ29udGV4dC5yYW5nZWRWYWx1ZSxcbiAgICAgIGhvdmVyUmFuZ2VkVmFsdWUgPSBfUmVhY3QkdXNlQ29udGV4dC5ob3ZlclJhbmdlZFZhbHVlO1xuXG4gIHZhciBwYW5lbFJlZiA9IFJlYWN0LnVzZVJlZih7fSk7IC8vIEhhbmRsZSBpbml0IGxvZ2ljXG5cbiAgdmFyIGluaXRSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7IC8vIFZhbHVlXG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZSA9IHVzZU1lcmdlZFN0YXRlKG51bGwsIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgcG9zdFN0YXRlOiBmdW5jdGlvbiBwb3N0U3RhdGUodmFsKSB7XG4gICAgICBpZiAoIXZhbCAmJiBkZWZhdWx0T3BlblZhbHVlICYmIHBpY2tlciA9PT0gJ3RpbWUnKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0T3BlblZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIG1lcmdlZFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICAgIHNldElubmVyVmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdOyAvLyBWaWV3IGRhdGUgY29udHJvbFxuXG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZTMgPSB1c2VNZXJnZWRTdGF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHBpY2tlclZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBpY2tlclZhbHVlIHx8IG1lcmdlZFZhbHVlLFxuICAgIHBvc3RTdGF0ZTogZnVuY3Rpb24gcG9zdFN0YXRlKGRhdGUpIHtcbiAgICAgIHZhciBub3cgPSBnZW5lcmF0ZUNvbmZpZy5nZXROb3coKTtcbiAgICAgIGlmICghZGF0ZSkgcmV0dXJuIG5vdzsgLy8gV2hlbiB2YWx1ZSBpcyBudWxsIGFuZCBzZXQgc2hvd1RpbWVcblxuICAgICAgaWYgKCFtZXJnZWRWYWx1ZSAmJiBzaG93VGltZSkge1xuICAgICAgICBpZiAoX3R5cGVvZihzaG93VGltZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIHNldERhdGVUaW1lKGdlbmVyYXRlQ29uZmlnLCBkYXRlLCBzaG93VGltZS5kZWZhdWx0VmFsdWUgfHwgbm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0RGF0ZVRpbWUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0RGF0ZVRpbWUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIG5vdyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlMywgMiksXG4gICAgICB2aWV3RGF0ZSA9IF91c2VNZXJnZWRTdGF0ZTRbMF0sXG4gICAgICBzZXRJbm5lclZpZXdEYXRlID0gX3VzZU1lcmdlZFN0YXRlNFsxXTtcblxuICB2YXIgc2V0Vmlld0RhdGUgPSBmdW5jdGlvbiBzZXRWaWV3RGF0ZShkYXRlKSB7XG4gICAgc2V0SW5uZXJWaWV3RGF0ZShkYXRlKTtcblxuICAgIGlmIChvblBpY2tlclZhbHVlQ2hhbmdlKSB7XG4gICAgICBvblBpY2tlclZhbHVlQ2hhbmdlKGRhdGUpO1xuICAgIH1cbiAgfTsgLy8gUGFuZWwgY29udHJvbFxuXG5cbiAgdmFyIGdldEludGVybmFsTmV4dE1vZGUgPSBmdW5jdGlvbiBnZXRJbnRlcm5hbE5leHRNb2RlKG5leHRNb2RlKSB7XG4gICAgdmFyIGdldE5leHRNb2RlID0gUGlja2VyTW9kZU1hcFtwaWNrZXJdO1xuXG4gICAgaWYgKGdldE5leHRNb2RlKSB7XG4gICAgICByZXR1cm4gZ2V0TmV4dE1vZGUobmV4dE1vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0TW9kZTtcbiAgfTsgLy8gU2F2ZSBwYW5lbCBpcyBjaGFuZ2VkIGZyb20gd2hpY2ggcGFuZWxcblxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGU1ID0gdXNlTWVyZ2VkU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwaWNrZXIgPT09ICd0aW1lJykge1xuICAgICAgcmV0dXJuICd0aW1lJztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxOZXh0TW9kZSgnZGF0ZScpO1xuICB9LCB7XG4gICAgdmFsdWU6IG1vZGVcbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlNSwgMiksXG4gICAgICBtZXJnZWRNb2RlID0gX3VzZU1lcmdlZFN0YXRlNlswXSxcbiAgICAgIHNldElubmVyTW9kZSA9IF91c2VNZXJnZWRTdGF0ZTZbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbm5lck1vZGUocGlja2VyKTtcbiAgfSwgW3BpY2tlcl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lcmdlZE1vZGU7XG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBzb3VyY2VNb2RlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFNvdXJjZU1vZGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBvbkludGVybmFsUGFuZWxDaGFuZ2UgPSBmdW5jdGlvbiBvbkludGVybmFsUGFuZWxDaGFuZ2UobmV3TW9kZSwgdmlld1ZhbHVlKSB7XG4gICAgdmFyIG5leHRNb2RlID0gZ2V0SW50ZXJuYWxOZXh0TW9kZShuZXdNb2RlIHx8IG1lcmdlZE1vZGUpO1xuICAgIHNldFNvdXJjZU1vZGUobWVyZ2VkTW9kZSk7XG4gICAgc2V0SW5uZXJNb2RlKG5leHRNb2RlKTtcblxuICAgIGlmIChvblBhbmVsQ2hhbmdlICYmIChtZXJnZWRNb2RlICE9PSBuZXh0TW9kZSB8fCBpc0VxdWFsKGdlbmVyYXRlQ29uZmlnLCB2aWV3RGF0ZSwgdmlld0RhdGUpKSkge1xuICAgICAgb25QYW5lbENoYW5nZSh2aWV3VmFsdWUsIG5leHRNb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJTZWxlY3QgPSBmdW5jdGlvbiB0cmlnZ2VyU2VsZWN0KGRhdGUsIHR5cGUpIHtcbiAgICB2YXIgZm9yY2VUcmlnZ2VyU2VsZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgIGlmIChtZXJnZWRNb2RlID09PSBwaWNrZXIgfHwgZm9yY2VUcmlnZ2VyU2VsZWN0KSB7XG4gICAgICBzZXRJbm5lclZhbHVlKGRhdGUpO1xuXG4gICAgICBpZiAob25TZWxlY3QpIHtcbiAgICAgICAgb25TZWxlY3QoZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNvbnRleHRTZWxlY3QpIHtcbiAgICAgICAgb25Db250ZXh0U2VsZWN0KGRhdGUsIHR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DaGFuZ2UgJiYgIWlzRXF1YWwoZ2VuZXJhdGVDb25maWcsIGRhdGUsIG1lcmdlZFZhbHVlKSAmJiAhKGRpc2FibGVkRGF0ZSA9PT0gbnVsbCB8fCBkaXNhYmxlZERhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpc2FibGVkRGF0ZShkYXRlKSkpIHtcbiAgICAgICAgb25DaGFuZ2UoZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEludGVyYWN0aXZlID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgb25JbnRlcm5hbEtleURvd24gPSBmdW5jdGlvbiBvbkludGVybmFsS2V5RG93bihlKSB7XG4gICAgaWYgKHBhbmVsUmVmLmN1cnJlbnQgJiYgcGFuZWxSZWYuY3VycmVudC5vbktleURvd24pIHtcbiAgICAgIGlmIChbS2V5Q29kZS5MRUZULCBLZXlDb2RlLlJJR0hULCBLZXlDb2RlLlVQLCBLZXlDb2RlLkRPV04sIEtleUNvZGUuUEFHRV9VUCwgS2V5Q29kZS5QQUdFX0RPV04sIEtleUNvZGUuRU5URVJdLmluY2x1ZGVzKGUud2hpY2gpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhbmVsUmVmLmN1cnJlbnQub25LZXlEb3duKGUpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9uZS1ibG9ja3MgKi9cblxuXG4gICAge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ1BhbmVsIG5vdCBjb3JyZWN0IGhhbmRsZSBrZXlEb3duIGV2ZW50LiBQbGVhc2UgaGVscCB0byBmaXJlIGlzc3VlIGFib3V0IHRoaXMuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9uZS1ibG9ja3MgKi9cbiAgfTtcblxuICB2YXIgb25JbnRlcm5hbEJsdXIgPSBmdW5jdGlvbiBvbkludGVybmFsQmx1cihlKSB7XG4gICAgaWYgKHBhbmVsUmVmLmN1cnJlbnQgJiYgcGFuZWxSZWYuY3VycmVudC5vbkJsdXIpIHtcbiAgICAgIHBhbmVsUmVmLmN1cnJlbnQub25CbHVyKGUpO1xuICAgIH1cbiAgfTtcblxuICBpZiAob3BlcmF0aW9uUmVmICYmIHBhbmVsUG9zaXRpb24gIT09ICdyaWdodCcpIHtcbiAgICBvcGVyYXRpb25SZWYuY3VycmVudCA9IHtcbiAgICAgIG9uS2V5RG93bjogb25JbnRlcm5hbEtleURvd24sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge1xuICAgICAgICBpZiAocGFuZWxSZWYuY3VycmVudCAmJiBwYW5lbFJlZi5jdXJyZW50Lm9uQ2xvc2UpIHtcbiAgICAgICAgICBwYW5lbFJlZi5jdXJyZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsdWUgJiYgIWluaXRSZWYuY3VycmVudCkge1xuICAgICAgc2V0SW5uZXJWaWV3RGF0ZSh2YWx1ZSk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbml0UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFBhbmVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIHBhbmVsTm9kZTtcblxuICB2YXIgcGlja2VyUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBvcGVyYXRpb25SZWY6IHBhbmVsUmVmLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHZpZXdEYXRlOiB2aWV3RGF0ZSxcbiAgICB2YWx1ZTogbWVyZ2VkVmFsdWUsXG4gICAgb25WaWV3RGF0ZUNoYW5nZTogc2V0Vmlld0RhdGUsXG4gICAgc291cmNlTW9kZTogc291cmNlTW9kZSxcbiAgICBvblBhbmVsQ2hhbmdlOiBvbkludGVybmFsUGFuZWxDaGFuZ2UsXG4gICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGVcbiAgfSk7XG5cbiAgZGVsZXRlIHBpY2tlclByb3BzLm9uQ2hhbmdlO1xuICBkZWxldGUgcGlja2VyUHJvcHMub25TZWxlY3Q7XG5cbiAgc3dpdGNoIChtZXJnZWRNb2RlKSB7XG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHBhbmVsTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlY2FkZVBhbmVsLCBfZXh0ZW5kcyh7fSwgcGlja2VyUHJvcHMsIHtcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGRhdGUsIHR5cGUpIHtcbiAgICAgICAgICBzZXRWaWV3RGF0ZShkYXRlKTtcbiAgICAgICAgICB0cmlnZ2VyU2VsZWN0KGRhdGUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcGFuZWxOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoWWVhclBhbmVsLCBfZXh0ZW5kcyh7fSwgcGlja2VyUHJvcHMsIHtcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGRhdGUsIHR5cGUpIHtcbiAgICAgICAgICBzZXRWaWV3RGF0ZShkYXRlKTtcbiAgICAgICAgICB0cmlnZ2VyU2VsZWN0KGRhdGUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHBhbmVsTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vbnRoUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZGF0ZSwgdHlwZSkge1xuICAgICAgICAgIHNldFZpZXdEYXRlKGRhdGUpO1xuICAgICAgICAgIHRyaWdnZXJTZWxlY3QoZGF0ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncXVhcnRlcic6XG4gICAgICBwYW5lbE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChRdWFydGVyUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZGF0ZSwgdHlwZSkge1xuICAgICAgICAgIHNldFZpZXdEYXRlKGRhdGUpO1xuICAgICAgICAgIHRyaWdnZXJTZWxlY3QoZGF0ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICBwYW5lbE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXZWVrUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZGF0ZSwgdHlwZSkge1xuICAgICAgICAgIHNldFZpZXdEYXRlKGRhdGUpO1xuICAgICAgICAgIHRyaWdnZXJTZWxlY3QoZGF0ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGltZSc6XG4gICAgICBkZWxldGUgcGlja2VyUHJvcHMuc2hvd1RpbWU7XG4gICAgICBwYW5lbE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywgX3R5cGVvZihzaG93VGltZSkgPT09ICdvYmplY3QnID8gc2hvd1RpbWUgOiBudWxsLCB7XG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlLCB0eXBlKSB7XG4gICAgICAgICAgc2V0Vmlld0RhdGUoZGF0ZSk7XG4gICAgICAgICAgdHJpZ2dlclNlbGVjdChkYXRlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNob3dUaW1lKSB7XG4gICAgICAgIHBhbmVsTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGV0aW1lUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlLCB0eXBlKSB7XG4gICAgICAgICAgICBzZXRWaWV3RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIHRyaWdnZXJTZWxlY3QoZGF0ZSwgdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGFuZWwsIF9leHRlbmRzKHt9LCBwaWNrZXJQcm9wcywge1xuICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlLCB0eXBlKSB7XG4gICAgICAgICAgICBzZXRWaWV3RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIHRyaWdnZXJTZWxlY3QoZGF0ZSwgdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgZXh0cmFGb290ZXI7XG4gIHZhciByYW5nZXNOb2RlO1xuXG4gIHZhciBvbk5vdyA9IGZ1bmN0aW9uIG9uTm93KCkge1xuICAgIHZhciBub3cgPSBnZW5lcmF0ZUNvbmZpZy5nZXROb3coKTtcbiAgICB2YXIgbG93ZXJCb3VuZFRpbWUgPSBnZXRMb3dlckJvdW5kVGltZShnZW5lcmF0ZUNvbmZpZy5nZXRIb3VyKG5vdyksIGdlbmVyYXRlQ29uZmlnLmdldE1pbnV0ZShub3cpLCBnZW5lcmF0ZUNvbmZpZy5nZXRTZWNvbmQobm93KSwgaXNIb3VyU3RlcFZhbGlkID8gaG91clN0ZXAgOiAxLCBpc01pbnV0ZVN0ZXBWYWxpZCA/IG1pbnV0ZVN0ZXAgOiAxLCBpc1NlY29uZFN0ZXBWYWxpZCA/IHNlY29uZFN0ZXAgOiAxKTtcbiAgICB2YXIgYWRqdXN0ZWROb3cgPSBzZXRUaW1lKGdlbmVyYXRlQ29uZmlnLCBub3csIGxvd2VyQm91bmRUaW1lWzBdLCAvLyBob3VyXG4gICAgbG93ZXJCb3VuZFRpbWVbMV0sIC8vIG1pbnV0ZVxuICAgIGxvd2VyQm91bmRUaW1lWzJdKTtcbiAgICB0cmlnZ2VyU2VsZWN0KGFkanVzdGVkTm93LCAnc3VibWl0Jyk7XG4gIH07XG5cbiAgaWYgKCFoaWRlUmFuZ2VzKSB7XG4gICAgZXh0cmFGb290ZXIgPSBnZXRFeHRyYUZvb3RlcihwcmVmaXhDbHMsIG1lcmdlZE1vZGUsIHJlbmRlckV4dHJhRm9vdGVyKTtcbiAgICByYW5nZXNOb2RlID0gZ2V0UmFuZ2VzKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgIG5lZWRDb25maXJtQnV0dG9uOiBuZWVkQ29uZmlybUJ1dHRvbixcbiAgICAgIG9rRGlzYWJsZWQ6ICFtZXJnZWRWYWx1ZSB8fCBkaXNhYmxlZERhdGUgJiYgZGlzYWJsZWREYXRlKG1lcmdlZFZhbHVlKSxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgc2hvd05vdzogc2hvd05vdyxcbiAgICAgIG9uTm93OiBuZWVkQ29uZmlybUJ1dHRvbiAmJiBvbk5vdyxcbiAgICAgIG9uT2s6IGZ1bmN0aW9uIG9uT2soKSB7XG4gICAgICAgIGlmIChtZXJnZWRWYWx1ZSkge1xuICAgICAgICAgIHRyaWdnZXJTZWxlY3QobWVyZ2VkVmFsdWUsICdzdWJtaXQnLCB0cnVlKTtcblxuICAgICAgICAgIGlmIChfb25Paykge1xuICAgICAgICAgICAgX29uT2sobWVyZ2VkVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHRvZGF5Tm9kZTtcblxuICBpZiAoc2hvd1RvZGF5ICYmIG1lcmdlZE1vZGUgPT09ICdkYXRlJyAmJiBwaWNrZXIgPT09ICdkYXRlJyAmJiAhc2hvd1RpbWUpIHtcbiAgICB2YXIgbm93ID0gZ2VuZXJhdGVDb25maWcuZ2V0Tm93KCk7XG4gICAgdmFyIHRvZGF5Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10b2RheS1idG5cIik7XG4gICAgdmFyIGRpc2FibGVkID0gZGlzYWJsZWREYXRlICYmIGRpc2FibGVkRGF0ZShub3cpO1xuICAgIHRvZGF5Tm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXModG9kYXlDbHMsIGRpc2FibGVkICYmIFwiXCIuY29uY2F0KHRvZGF5Q2xzLCBcIi1kaXNhYmxlZFwiKSksXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgdHJpZ2dlclNlbGVjdChub3csICdtb3VzZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgbG9jYWxlLnRvZGF5KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYW5lbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwYW5lbENvbnRleHQpLCB7fSwge1xuICAgICAgbW9kZTogbWVyZ2VkTW9kZSxcbiAgICAgIGhpZGVIZWFkZXI6ICdoaWRlSGVhZGVyJyBpbiBwcm9wcyA/IGhpZGVIZWFkZXIgOiBwYW5lbENvbnRleHQuaGlkZUhlYWRlcixcbiAgICAgIGhpZGVQcmV2QnRuOiBpblJhbmdlICYmIHBhbmVsUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICBoaWRlTmV4dEJ0bjogaW5SYW5nZSAmJiBwYW5lbFBvc2l0aW9uID09PSAnbGVmdCdcbiAgICB9KVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhbmVsXCIpLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGFuZWwtaGFzLXJhbmdlXCIpLCByYW5nZWRWYWx1ZSAmJiByYW5nZWRWYWx1ZVswXSAmJiByYW5nZWRWYWx1ZVsxXSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYW5lbC1oYXMtcmFuZ2UtaG92ZXJcIiksIGhvdmVyUmFuZ2VkVmFsdWUgJiYgaG92ZXJSYW5nZWRWYWx1ZVswXSAmJiBob3ZlclJhbmdlZFZhbHVlWzFdKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhbmVsLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSksXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIG9uS2V5RG93bjogb25JbnRlcm5hbEtleURvd24sXG4gICAgb25CbHVyOiBvbkludGVybmFsQmx1cixcbiAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgcmVmOiBwYW5lbERpdlJlZlxuICB9LCBwYW5lbE5vZGUsIGV4dHJhRm9vdGVyIHx8IHJhbmdlc05vZGUgfHwgdG9kYXlOb2RlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1mb290ZXJcIilcbiAgfSwgZXh0cmFGb290ZXIsIHJhbmdlc05vZGUsIHRvZGF5Tm9kZSkgOiBudWxsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpY2tlclBhbmVsO1xuLyogZXNsaW50LWVuYWJsZSAqLyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xudmFyIEJVSUxUX0lOX1BMQUNFTUVOVFMgPSB7XG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICBvdmVyZmxvdzoge1xuICAgICAgYWRqdXN0WDogMSxcbiAgICAgIGFkanVzdFk6IDFcbiAgICB9XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgb3ZlcmZsb3c6IHtcbiAgICAgIGFkanVzdFg6IDEsXG4gICAgICBhZGp1c3RZOiAxXG4gICAgfVxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIG92ZXJmbG93OiB7XG4gICAgICBhZGp1c3RYOiAwLFxuICAgICAgYWRqdXN0WTogMVxuICAgIH1cbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgb3ZlcmZsb3c6IHtcbiAgICAgIGFkanVzdFg6IDAsXG4gICAgICBhZGp1c3RZOiAxXG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBQaWNrZXJUcmlnZ2VyKF9yZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHBvcHVwRWxlbWVudCA9IF9yZWYucG9wdXBFbGVtZW50LFxuICAgICAgcG9wdXBTdHlsZSA9IF9yZWYucG9wdXBTdHlsZSxcbiAgICAgIHZpc2libGUgPSBfcmVmLnZpc2libGUsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IF9yZWYuZHJvcGRvd25DbGFzc05hbWUsXG4gICAgICBkcm9wZG93bkFsaWduID0gX3JlZi5kcm9wZG93bkFsaWduLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcmVmLnRyYW5zaXRpb25OYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfcmVmLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgcmFuZ2UgPSBfcmVmLnJhbmdlLFxuICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfcmVmLnBvcHVwUGxhY2VtZW50LFxuICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG4gIHZhciBkcm9wZG93blByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJvcGRvd25cIik7XG5cbiAgdmFyIGdldFBvcHVwUGxhY2VtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBQbGFjZW1lbnQoKSB7XG4gICAgaWYgKHBvcHVwUGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwb3B1cFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSAncnRsJyA/ICdib3R0b21SaWdodCcgOiAnYm90dG9tTGVmdCc7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIHtcbiAgICBzaG93QWN0aW9uOiBbXSxcbiAgICBoaWRlQWN0aW9uOiBbXSxcbiAgICBwb3B1cFBsYWNlbWVudDogZ2V0UG9wdXBQbGFjZW1lbnQoKSxcbiAgICBidWlsdGluUGxhY2VtZW50czogQlVJTFRfSU5fUExBQ0VNRU5UUyxcbiAgICBwcmVmaXhDbHM6IGRyb3Bkb3duUHJlZml4Q2xzLFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHBvcHVwOiBwb3B1cEVsZW1lbnQsXG4gICAgcG9wdXBBbGlnbjogZHJvcGRvd25BbGlnbixcbiAgICBwb3B1cFZpc2libGU6IHZpc2libGUsXG4gICAgcG9wdXBDbGFzc05hbWU6IGNsYXNzTmFtZXMoZHJvcGRvd25DbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi1yYW5nZVwiKSwgcmFuZ2UpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcykpLFxuICAgIHBvcHVwU3R5bGU6IHBvcHVwU3R5bGUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGlja2VyVHJpZ2dlcjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgUmFuZ2VDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGRlZmF1bHQgUmFuZ2VDb250ZXh0OyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCB1c2VNZXJnZWRTdGF0ZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZXJnZWRTdGF0ZVwiO1xuaW1wb3J0IFBpY2tlclRyaWdnZXIgZnJvbSAnLi9QaWNrZXJUcmlnZ2VyJztcbmltcG9ydCBQaWNrZXJQYW5lbCBmcm9tICcuL1BpY2tlclBhbmVsJztcbmltcG9ydCB1c2VQaWNrZXJJbnB1dCBmcm9tICcuL2hvb2tzL3VzZVBpY2tlcklucHV0JztcbmltcG9ydCBnZXREYXRhT3JBcmlhUHJvcHMsIHsgdG9BcnJheSwgZ2V0VmFsdWUsIHVwZGF0ZVZhbHVlcyB9IGZyb20gJy4vdXRpbHMvbWlzY1V0aWwnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEZvcm1hdCwgZ2V0SW5wdXRTaXplLCBlbGVtZW50c0NvbnRhaW5zIH0gZnJvbSAnLi91dGlscy91aVV0aWwnO1xuaW1wb3J0IFBhbmVsQ29udGV4dCBmcm9tICcuL1BhbmVsQ29udGV4dCc7XG5pbXBvcnQgeyBpc0VxdWFsLCBnZXRDbG9zaW5nVmlld0RhdGUsIGlzU2FtZURhdGUsIGlzU2FtZVdlZWssIGlzU2FtZVF1YXJ0ZXIsIGZvcm1hdFZhbHVlLCBwYXJzZVZhbHVlIH0gZnJvbSAnLi91dGlscy9kYXRlVXRpbCc7XG5pbXBvcnQgdXNlVmFsdWVUZXh0cyBmcm9tICcuL2hvb2tzL3VzZVZhbHVlVGV4dHMnO1xuaW1wb3J0IHVzZVRleHRWYWx1ZU1hcHBpbmcgZnJvbSAnLi9ob29rcy91c2VUZXh0VmFsdWVNYXBwaW5nJztcbmltcG9ydCBSYW5nZUNvbnRleHQgZnJvbSAnLi9SYW5nZUNvbnRleHQnO1xuaW1wb3J0IHVzZVJhbmdlRGlzYWJsZWQgZnJvbSAnLi9ob29rcy91c2VSYW5nZURpc2FibGVkJztcbmltcG9ydCBnZXRFeHRyYUZvb3RlciBmcm9tICcuL3V0aWxzL2dldEV4dHJhRm9vdGVyJztcbmltcG9ydCBnZXRSYW5nZXMgZnJvbSAnLi91dGlscy9nZXRSYW5nZXMnO1xuaW1wb3J0IHVzZVJhbmdlVmlld0RhdGVzIGZyb20gJy4vaG9va3MvdXNlUmFuZ2VWaWV3RGF0ZXMnO1xuaW1wb3J0IHVzZUhvdmVyVmFsdWUgZnJvbSAnLi9ob29rcy91c2VIb3ZlclZhbHVlJztcblxuZnVuY3Rpb24gcmVvcmRlclZhbHVlcyh2YWx1ZXMsIGdlbmVyYXRlQ29uZmlnKSB7XG4gIGlmICh2YWx1ZXMgJiYgdmFsdWVzWzBdICYmIHZhbHVlc1sxXSAmJiBnZW5lcmF0ZUNvbmZpZy5pc0FmdGVyKHZhbHVlc1swXSwgdmFsdWVzWzFdKSkge1xuICAgIHJldHVybiBbdmFsdWVzWzFdLCB2YWx1ZXNbMF1dO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZnVuY3Rpb24gY2FuVmFsdWVUcmlnZ2VyKHZhbHVlLCBpbmRleCwgZGlzYWJsZWQsIGFsbG93RW1wdHkpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYWxsb3dFbXB0eSAmJiBhbGxvd0VtcHR5W2luZGV4XSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpc2FibGVkWyhpbmRleCArIDEpICUgMl0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gSW5uZXJSYW5nZVBpY2tlcihwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXMyLCBfY2xhc3NOYW1lczMsIF9jbGFzc05hbWVzNDtcblxuICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy1waWNrZXInIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgcG9wdXBTdHlsZSA9IHByb3BzLnBvcHVwU3R5bGUsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IHByb3BzLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBwbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgIF9wcm9wcyRwaWNrZXIgPSBwcm9wcy5waWNrZXIsXG4gICAgICBwaWNrZXIgPSBfcHJvcHMkcGlja2VyID09PSB2b2lkIDAgPyAnZGF0ZScgOiBfcHJvcHMkcGlja2VyLFxuICAgICAgc2hvd1RpbWUgPSBwcm9wcy5zaG93VGltZSxcbiAgICAgIHVzZTEySG91cnMgPSBwcm9wcy51c2UxMkhvdXJzLFxuICAgICAgX3Byb3BzJHNlcGFyYXRvciA9IHByb3BzLnNlcGFyYXRvcixcbiAgICAgIHNlcGFyYXRvciA9IF9wcm9wcyRzZXBhcmF0b3IgPT09IHZvaWQgMCA/ICd+JyA6IF9wcm9wcyRzZXBhcmF0b3IsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFBpY2tlclZhbHVlID0gcHJvcHMuZGVmYXVsdFBpY2tlclZhbHVlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBkZWZhdWx0T3BlbiA9IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgZGlzYWJsZWREYXRlID0gcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgX2Rpc2FibGVkVGltZSA9IHByb3BzLmRpc2FibGVkVGltZSxcbiAgICAgIGRhdGVSZW5kZXIgPSBwcm9wcy5kYXRlUmVuZGVyLFxuICAgICAgcGFuZWxSZW5kZXIgPSBwcm9wcy5wYW5lbFJlbmRlcixcbiAgICAgIHJhbmdlcyA9IHByb3BzLnJhbmdlcyxcbiAgICAgIGFsbG93RW1wdHkgPSBwcm9wcy5hbGxvd0VtcHR5LFxuICAgICAgYWxsb3dDbGVhciA9IHByb3BzLmFsbG93Q2xlYXIsXG4gICAgICBzdWZmaXhJY29uID0gcHJvcHMuc3VmZml4SWNvbixcbiAgICAgIGNsZWFySWNvbiA9IHByb3BzLmNsZWFySWNvbixcbiAgICAgIHBpY2tlclJlZiA9IHByb3BzLnBpY2tlclJlZixcbiAgICAgIGlucHV0UmVhZE9ubHkgPSBwcm9wcy5pbnB1dFJlYWRPbmx5LFxuICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICByZW5kZXJFeHRyYUZvb3RlciA9IHByb3BzLnJlbmRlckV4dHJhRm9vdGVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uT3BlbkNoYW5nZSA9IHByb3BzLm9uT3BlbkNoYW5nZSxcbiAgICAgIG9uUGFuZWxDaGFuZ2UgPSBwcm9wcy5vblBhbmVsQ2hhbmdlLFxuICAgICAgb25DYWxlbmRhckNoYW5nZSA9IHByb3BzLm9uQ2FsZW5kYXJDaGFuZ2UsXG4gICAgICBfb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBfb25PayA9IHByb3BzLm9uT2ssXG4gICAgICBfb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgYWN0aXZlUGlja2VySW5kZXggPSBwcm9wcy5hY3RpdmVQaWNrZXJJbmRleCxcbiAgICAgIF9wcm9wcyRhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUsXG4gICAgICBhdXRvQ29tcGxldGUgPSBfcHJvcHMkYXV0b0NvbXBsZXRlID09PSB2b2lkIDAgPyAnb2ZmJyA6IF9wcm9wcyRhdXRvQ29tcGxldGU7XG4gIHZhciBuZWVkQ29uZmlybUJ1dHRvbiA9IHBpY2tlciA9PT0gJ2RhdGUnICYmICEhc2hvd1RpbWUgfHwgcGlja2VyID09PSAndGltZSc7IC8vIFdlIHJlY29yZCBvcGVuZWQgc3RhdHVzIGhlcmUgaW4gY2FzZSByZXBlYXQgb3BlbiB3aXRoIHBpY2tlclxuXG4gIHZhciBvcGVuUmVjb3Jkc1JlZiA9IHVzZVJlZih7fSk7XG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBwYW5lbERpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHN0YXJ0SW5wdXREaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBlbmRJbnB1dERpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHNlcGFyYXRvclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHN0YXJ0SW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBlbmRJbnB1dFJlZiA9IHVzZVJlZihudWxsKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTWlzYyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgZm9ybWF0TGlzdCA9IHRvQXJyYXkoZ2V0RGVmYXVsdEZvcm1hdChmb3JtYXQsIHBpY2tlciwgc2hvd1RpbWUsIHVzZTEySG91cnMpKTsgLy8gQWN0aXZlIHBpY2tlclxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSB1c2VNZXJnZWRTdGF0ZSgwLCB7XG4gICAgdmFsdWU6IGFjdGl2ZVBpY2tlckluZGV4XG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgICBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgICBzZXRNZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9IF91c2VNZXJnZWRTdGF0ZTJbMV07IC8vIE9wZXJhdGlvbiByZWZcblxuXG4gIHZhciBvcGVyYXRpb25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBtZXJnZWREaXNhYmxlZCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc2FibGVkKSkge1xuICAgICAgcmV0dXJuIGRpc2FibGVkO1xuICAgIH1cblxuICAgIHJldHVybiBbZGlzYWJsZWQgfHwgZmFsc2UsIGRpc2FibGVkIHx8IGZhbHNlXTtcbiAgfSwgW2Rpc2FibGVkXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFZhbHVlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZTMgPSB1c2VNZXJnZWRTdGF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIHBvc3RTdGF0ZTogZnVuY3Rpb24gcG9zdFN0YXRlKHZhbHVlcykge1xuICAgICAgcmV0dXJuIHBpY2tlciA9PT0gJ3RpbWUnICYmICFvcmRlciA/IHZhbHVlcyA6IHJlb3JkZXJWYWx1ZXModmFsdWVzLCBnZW5lcmF0ZUNvbmZpZyk7XG4gICAgfVxuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVyZ2VkU3RhdGUzLCAyKSxcbiAgICAgIG1lcmdlZFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlNFswXSxcbiAgICAgIHNldElubmVyVmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGU0WzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVmlldyBEYXRlID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBDb25maWcgdmlldyBwYW5lbFxuXG5cbiAgdmFyIF91c2VSYW5nZVZpZXdEYXRlcyA9IHVzZVJhbmdlVmlld0RhdGVzKHtcbiAgICB2YWx1ZXM6IG1lcmdlZFZhbHVlLFxuICAgIHBpY2tlcjogcGlja2VyLFxuICAgIGRlZmF1bHREYXRlczogZGVmYXVsdFBpY2tlclZhbHVlLFxuICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICB9KSxcbiAgICAgIF91c2VSYW5nZVZpZXdEYXRlczIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmFuZ2VWaWV3RGF0ZXMsIDIpLFxuICAgICAgZ2V0Vmlld0RhdGUgPSBfdXNlUmFuZ2VWaWV3RGF0ZXMyWzBdLFxuICAgICAgc2V0Vmlld0RhdGUgPSBfdXNlUmFuZ2VWaWV3RGF0ZXMyWzFdOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFNlbGVjdCBWYWx1ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZTUgPSB1c2VNZXJnZWRTdGF0ZShtZXJnZWRWYWx1ZSwge1xuICAgIHBvc3RTdGF0ZTogZnVuY3Rpb24gcG9zdFN0YXRlKHZhbHVlcykge1xuICAgICAgdmFyIHBvc3RWYWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICAgIGlmIChtZXJnZWREaXNhYmxlZFswXSAmJiBtZXJnZWREaXNhYmxlZFsxXSkge1xuICAgICAgICByZXR1cm4gcG9zdFZhbHVlcztcbiAgICAgIH0gLy8gRmlsbCBkaXNhYmxlZCB1bml0XG5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG1lcmdlZERpc2FibGVkW2ldICYmICFnZXRWYWx1ZShwb3N0VmFsdWVzLCBpKSAmJiAhZ2V0VmFsdWUoYWxsb3dFbXB0eSwgaSkpIHtcbiAgICAgICAgICBwb3N0VmFsdWVzID0gdXBkYXRlVmFsdWVzKHBvc3RWYWx1ZXMsIGdlbmVyYXRlQ29uZmlnLmdldE5vdygpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9zdFZhbHVlcztcbiAgICB9XG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZTUsIDIpLFxuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IF91c2VNZXJnZWRTdGF0ZTZbMF0sXG4gICAgICBzZXRTZWxlY3RlZFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlNlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGU3ID0gdXNlTWVyZ2VkU3RhdGUoW3BpY2tlciwgcGlja2VyXSwge1xuICAgIHZhbHVlOiBtb2RlXG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZTcsIDIpLFxuICAgICAgbWVyZ2VkTW9kZXMgPSBfdXNlTWVyZ2VkU3RhdGU4WzBdLFxuICAgICAgc2V0SW5uZXJNb2RlcyA9IF91c2VNZXJnZWRTdGF0ZThbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbm5lck1vZGVzKFtwaWNrZXIsIHBpY2tlcl0pO1xuICB9LCBbcGlja2VyXSk7XG5cbiAgdmFyIHRyaWdnZXJNb2Rlc0NoYW5nZSA9IGZ1bmN0aW9uIHRyaWdnZXJNb2Rlc0NoYW5nZShtb2RlcywgdmFsdWVzKSB7XG4gICAgc2V0SW5uZXJNb2Rlcyhtb2Rlcyk7XG5cbiAgICBpZiAob25QYW5lbENoYW5nZSkge1xuICAgICAgb25QYW5lbENoYW5nZSh2YWx1ZXMsIG1vZGVzKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRGlzYWJsZSBEYXRlID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3VzZVJhbmdlRGlzYWJsZWQgPSB1c2VSYW5nZURpc2FibGVkKHtcbiAgICBwaWNrZXI6IHBpY2tlcixcbiAgICBzZWxlY3RlZFZhbHVlOiBzZWxlY3RlZFZhbHVlLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGRpc2FibGVkOiBtZXJnZWREaXNhYmxlZCxcbiAgICBkaXNhYmxlZERhdGU6IGRpc2FibGVkRGF0ZSxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgfSwgb3BlblJlY29yZHNSZWYuY3VycmVudFsxXSwgb3BlblJlY29yZHNSZWYuY3VycmVudFswXSksXG4gICAgICBfdXNlUmFuZ2VEaXNhYmxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmFuZ2VEaXNhYmxlZCwgMiksXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF0ZSA9IF91c2VSYW5nZURpc2FibGVkMlswXSxcbiAgICAgIGRpc2FibGVkRW5kRGF0ZSA9IF91c2VSYW5nZURpc2FibGVkMlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gT3BlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGU5ID0gdXNlTWVyZ2VkU3RhdGUoZmFsc2UsIHtcbiAgICB2YWx1ZTogb3BlbixcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRPcGVuLFxuICAgIHBvc3RTdGF0ZTogZnVuY3Rpb24gcG9zdFN0YXRlKHBvc3RPcGVuKSB7XG4gICAgICByZXR1cm4gbWVyZ2VkRGlzYWJsZWRbbWVyZ2VkQWN0aXZlUGlja2VySW5kZXhdID8gZmFsc2UgOiBwb3N0T3BlbjtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdPcGVuKSB7XG4gICAgICBpZiAob25PcGVuQ2hhbmdlKSB7XG4gICAgICAgIG9uT3BlbkNoYW5nZShuZXdPcGVuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFuZXdPcGVuICYmIG9wZXJhdGlvblJlZi5jdXJyZW50ICYmIG9wZXJhdGlvblJlZi5jdXJyZW50Lm9uQ2xvc2UpIHtcbiAgICAgICAgb3BlcmF0aW9uUmVmLmN1cnJlbnQub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSksXG4gICAgICBfdXNlTWVyZ2VkU3RhdGUxMCA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZTksIDIpLFxuICAgICAgbWVyZ2VkT3BlbiA9IF91c2VNZXJnZWRTdGF0ZTEwWzBdLFxuICAgICAgdHJpZ2dlcklubmVyT3BlbiA9IF91c2VNZXJnZWRTdGF0ZTEwWzFdO1xuXG4gIHZhciBzdGFydE9wZW4gPSBtZXJnZWRPcGVuICYmIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4ID09PSAwO1xuICB2YXIgZW5kT3BlbiA9IG1lcmdlZE9wZW4gJiYgbWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDE7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFBvcHVwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFBvcHVwIG1pbiB3aWR0aFxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgwKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgcG9wdXBNaW5XaWR0aCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQb3B1cE1pbldpZHRoID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbWVyZ2VkT3BlbiAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgc2V0UG9wdXBNaW5XaWR0aChjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aCk7XG4gICAgfVxuICB9LCBbbWVyZ2VkT3Blbl0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFRyaWdnZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciB0cmlnZ2VyUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gX3RyaWdnZXJPcGVuKG5ld09wZW4sIGluZGV4KSB7XG4gICAgaWYgKG5ld09wZW4pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0cmlnZ2VyUmVmLmN1cnJlbnQpO1xuICAgICAgb3BlblJlY29yZHNSZWYuY3VycmVudFtpbmRleF0gPSB0cnVlO1xuICAgICAgc2V0TWVyZ2VkQWN0aXZlUGlja2VySW5kZXgoaW5kZXgpO1xuICAgICAgdHJpZ2dlcklubmVyT3BlbihuZXdPcGVuKTsgLy8gT3BlbiB0byByZXNldCB2aWV3IGRhdGVcblxuICAgICAgaWYgKCFtZXJnZWRPcGVuKSB7XG4gICAgICAgIHNldFZpZXdEYXRlKG51bGwsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4ID09PSBpbmRleCkge1xuICAgICAgdHJpZ2dlcklubmVyT3BlbihuZXdPcGVuKTsgLy8gQ2xlYW4gdXAgYXN5bmNcbiAgICAgIC8vIFRoaXMgbWFrZXMgcmVmIG5vdCBxdWljayByZWZyZXNoIGluIGNhc2UgdXNlciBvcGVuIGFub3RoZXIgaW5wdXQgd2l0aCBibHVyIHRyaWdnZXJcblxuICAgICAgdmFyIG9wZW5SZWNvcmRzID0gb3BlblJlY29yZHNSZWYuY3VycmVudDtcbiAgICAgIHRyaWdnZXJSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3BlblJlY29yZHMgPT09IG9wZW5SZWNvcmRzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvcGVuUmVjb3Jkc1JlZi5jdXJyZW50ID0ge307XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJPcGVuQW5kRm9jdXMoaW5kZXgpIHtcbiAgICBfdHJpZ2dlck9wZW4odHJ1ZSwgaW5kZXgpOyAvLyBVc2Ugc2V0VGltZW91dCB0byBtYWtlIHN1cmUgcGFuZWwgRE9NIGV4aXN0c1xuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dFJlZiA9IFtzdGFydElucHV0UmVmLCBlbmRJbnB1dFJlZl1baW5kZXhdO1xuXG4gICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKG5ld1ZhbHVlLCBzb3VyY2VJbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSBuZXdWYWx1ZTtcbiAgICB2YXIgc3RhcnRWYWx1ZSA9IGdldFZhbHVlKHZhbHVlcywgMCk7XG4gICAgdmFyIGVuZFZhbHVlID0gZ2V0VmFsdWUodmFsdWVzLCAxKTsgLy8gPj4+Pj4gRm9ybWF0IHN0YXJ0ICYgZW5kIHZhbHVlc1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgJiYgZW5kVmFsdWUgJiYgZ2VuZXJhdGVDb25maWcuaXNBZnRlcihzdGFydFZhbHVlLCBlbmRWYWx1ZSkpIHtcbiAgICAgIGlmICggLy8gV2Vla1BpY2tlciBvbmx5IGNvbXBhcmUgd2Vla1xuICAgICAgcGlja2VyID09PSAnd2VlaycgJiYgIWlzU2FtZVdlZWsoZ2VuZXJhdGVDb25maWcsIGxvY2FsZS5sb2NhbGUsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKSB8fCAvLyBRdW90YVBpY2tlciBvbmx5IGNvbXBhcmUgd2Vla1xuICAgICAgcGlja2VyID09PSAncXVhcnRlcicgJiYgIWlzU2FtZVF1YXJ0ZXIoZ2VuZXJhdGVDb25maWcsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKSB8fCAvLyBPdGhlciBub24tVGltZVBpY2tlciBjb21wYXJlIGRhdGVcbiAgICAgIHBpY2tlciAhPT0gJ3dlZWsnICYmIHBpY2tlciAhPT0gJ3F1YXJ0ZXInICYmIHBpY2tlciAhPT0gJ3RpbWUnICYmICFpc1NhbWVEYXRlKGdlbmVyYXRlQ29uZmlnLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSkpIHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgZW5kIGRhdGUgd2hlbiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlXG4gICAgICAgIGlmIChzb3VyY2VJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHZhbHVlcyA9IFtzdGFydFZhbHVlLCBudWxsXTtcbiAgICAgICAgICBlbmRWYWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgdmFsdWVzID0gW251bGwsIGVuZFZhbHVlXTtcbiAgICAgICAgfSAvLyBDbGVhbiB1cCBjYWNoZSBzaW5jZSBpbnZhbGlkYXRlXG5cblxuICAgICAgICBvcGVuUmVjb3Jkc1JlZi5jdXJyZW50ID0gX2RlZmluZVByb3BlcnR5KHt9LCBzb3VyY2VJbmRleCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHBpY2tlciAhPT0gJ3RpbWUnIHx8IG9yZGVyICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBSZW9yZGVyIHdoZW4gaW4gc2FtZSBkYXRlXG4gICAgICAgIHZhbHVlcyA9IHJlb3JkZXJWYWx1ZXModmFsdWVzLCBnZW5lcmF0ZUNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZXMpO1xuICAgIHZhciBzdGFydFN0ciA9IHZhbHVlcyAmJiB2YWx1ZXNbMF0gPyBmb3JtYXRWYWx1ZSh2YWx1ZXNbMF0sIHtcbiAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgZm9ybWF0OiBmb3JtYXRMaXN0WzBdXG4gICAgfSkgOiAnJztcbiAgICB2YXIgZW5kU3RyID0gdmFsdWVzICYmIHZhbHVlc1sxXSA/IGZvcm1hdFZhbHVlKHZhbHVlc1sxXSwge1xuICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBmb3JtYXQ6IGZvcm1hdExpc3RbMF1cbiAgICB9KSA6ICcnO1xuXG4gICAgaWYgKG9uQ2FsZW5kYXJDaGFuZ2UpIHtcbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICByYW5nZTogc291cmNlSW5kZXggPT09IDAgPyAnc3RhcnQnIDogJ2VuZCdcbiAgICAgIH07XG4gICAgICBvbkNhbGVuZGFyQ2hhbmdlKHZhbHVlcywgW3N0YXJ0U3RyLCBlbmRTdHJdLCBpbmZvKTtcbiAgICB9IC8vID4+Pj4+IFRyaWdnZXIgYG9uQ2hhbmdlYCBldmVudFxuXG5cbiAgICB2YXIgY2FuU3RhcnRWYWx1ZVRyaWdnZXIgPSBjYW5WYWx1ZVRyaWdnZXIoc3RhcnRWYWx1ZSwgMCwgbWVyZ2VkRGlzYWJsZWQsIGFsbG93RW1wdHkpO1xuICAgIHZhciBjYW5FbmRWYWx1ZVRyaWdnZXIgPSBjYW5WYWx1ZVRyaWdnZXIoZW5kVmFsdWUsIDEsIG1lcmdlZERpc2FibGVkLCBhbGxvd0VtcHR5KTtcbiAgICB2YXIgY2FuVHJpZ2dlciA9IHZhbHVlcyA9PT0gbnVsbCB8fCBjYW5TdGFydFZhbHVlVHJpZ2dlciAmJiBjYW5FbmRWYWx1ZVRyaWdnZXI7XG5cbiAgICBpZiAoY2FuVHJpZ2dlcikge1xuICAgICAgLy8gVHJpZ2dlciBvbkNoYW5nZSBvbmx5IHdoZW4gdmFsdWUgaXMgdmFsaWRhdGVcbiAgICAgIHNldElubmVyVmFsdWUodmFsdWVzKTtcblxuICAgICAgaWYgKG9uQ2hhbmdlICYmICghaXNFcXVhbChnZW5lcmF0ZUNvbmZpZywgZ2V0VmFsdWUobWVyZ2VkVmFsdWUsIDApLCBzdGFydFZhbHVlKSB8fCAhaXNFcXVhbChnZW5lcmF0ZUNvbmZpZywgZ2V0VmFsdWUobWVyZ2VkVmFsdWUsIDEpLCBlbmRWYWx1ZSkpKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlcywgW3N0YXJ0U3RyLCBlbmRTdHJdKTtcbiAgICAgIH1cbiAgICB9IC8vID4+Pj4+IE9wZW4gcGlja2VyIHdoZW5cbiAgICAvLyBBbHdheXMgb3BlbiBhbm90aGVyIHBpY2tlciBpZiBwb3NzaWJsZVxuXG5cbiAgICB2YXIgbmV4dE9wZW5JbmRleCA9IG51bGw7XG5cbiAgICBpZiAoc291cmNlSW5kZXggPT09IDAgJiYgIW1lcmdlZERpc2FibGVkWzFdKSB7XG4gICAgICBuZXh0T3BlbkluZGV4ID0gMTtcbiAgICB9IGVsc2UgaWYgKHNvdXJjZUluZGV4ID09PSAxICYmICFtZXJnZWREaXNhYmxlZFswXSkge1xuICAgICAgbmV4dE9wZW5JbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG5leHRPcGVuSW5kZXggIT09IG51bGwgJiYgbmV4dE9wZW5JbmRleCAhPT0gbWVyZ2VkQWN0aXZlUGlja2VySW5kZXggJiYgKCFvcGVuUmVjb3Jkc1JlZi5jdXJyZW50W25leHRPcGVuSW5kZXhdIHx8ICFnZXRWYWx1ZSh2YWx1ZXMsIG5leHRPcGVuSW5kZXgpKSAmJiBnZXRWYWx1ZSh2YWx1ZXMsIHNvdXJjZUluZGV4KSkge1xuICAgICAgLy8gRGVsYXkgdG8gZm9jdXMgdG8gYXZvaWQgaW5wdXQgYmx1ciB0cmlnZ2VyIGV4cGlyZWQgc2VsZWN0ZWRWYWx1ZXNcbiAgICAgIHRyaWdnZXJPcGVuQW5kRm9jdXMobmV4dE9wZW5JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90cmlnZ2VyT3BlbihmYWxzZSwgc291cmNlSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmb3J3YXJkS2V5RG93biA9IGZ1bmN0aW9uIGZvcndhcmRLZXlEb3duKGUpIHtcbiAgICBpZiAobWVyZ2VkT3BlbiAmJiBvcGVyYXRpb25SZWYuY3VycmVudCAmJiBvcGVyYXRpb25SZWYuY3VycmVudC5vbktleURvd24pIHtcbiAgICAgIC8vIExldCBwb3B1cCBwYW5lbCBoYW5kbGUga2V5Ym9hcmRcbiAgICAgIHJldHVybiBvcGVyYXRpb25SZWYuY3VycmVudC5vbktleURvd24oZSk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb25lLWJsb2NrcyAqL1xuXG5cbiAgICB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnUGlja2VyIG5vdCBjb3JyZWN0IGZvcndhcmQgS2V5RG93biBvcGVyYXRpb24uIFBsZWFzZSBoZWxwIHRvIGZpcmUgaXNzdWUgYWJvdXQgdGhpcy4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFRleHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgc2hhcmVkVGV4dEhvb2tzUHJvcHMgPSB7XG4gICAgZm9ybWF0TGlzdDogZm9ybWF0TGlzdCxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgbG9jYWxlOiBsb2NhbGVcbiAgfTtcblxuICB2YXIgX3VzZVZhbHVlVGV4dHMgPSB1c2VWYWx1ZVRleHRzKGdldFZhbHVlKHNlbGVjdGVkVmFsdWUsIDApLCBzaGFyZWRUZXh0SG9va3NQcm9wcyksXG4gICAgICBfdXNlVmFsdWVUZXh0czIgPSBfc2xpY2VkVG9BcnJheShfdXNlVmFsdWVUZXh0cywgMiksXG4gICAgICBzdGFydFZhbHVlVGV4dHMgPSBfdXNlVmFsdWVUZXh0czJbMF0sXG4gICAgICBmaXJzdFN0YXJ0VmFsdWVUZXh0ID0gX3VzZVZhbHVlVGV4dHMyWzFdO1xuXG4gIHZhciBfdXNlVmFsdWVUZXh0czMgPSB1c2VWYWx1ZVRleHRzKGdldFZhbHVlKHNlbGVjdGVkVmFsdWUsIDEpLCBzaGFyZWRUZXh0SG9va3NQcm9wcyksXG4gICAgICBfdXNlVmFsdWVUZXh0czQgPSBfc2xpY2VkVG9BcnJheShfdXNlVmFsdWVUZXh0czMsIDIpLFxuICAgICAgZW5kVmFsdWVUZXh0cyA9IF91c2VWYWx1ZVRleHRzNFswXSxcbiAgICAgIGZpcnN0RW5kVmFsdWVUZXh0ID0gX3VzZVZhbHVlVGV4dHM0WzFdO1xuXG4gIHZhciBfb25UZXh0Q2hhbmdlID0gZnVuY3Rpb24gb25UZXh0Q2hhbmdlKG5ld1RleHQsIGluZGV4KSB7XG4gICAgdmFyIGlucHV0RGF0ZSA9IHBhcnNlVmFsdWUobmV3VGV4dCwge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBmb3JtYXRMaXN0OiBmb3JtYXRMaXN0LFxuICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnXG4gICAgfSk7XG4gICAgdmFyIGRpc2FibGVkRnVuYyA9IGluZGV4ID09PSAwID8gZGlzYWJsZWRTdGFydERhdGUgOiBkaXNhYmxlZEVuZERhdGU7XG5cbiAgICBpZiAoaW5wdXREYXRlICYmICFkaXNhYmxlZEZ1bmMoaW5wdXREYXRlKSkge1xuICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh1cGRhdGVWYWx1ZXMoc2VsZWN0ZWRWYWx1ZSwgaW5wdXREYXRlLCBpbmRleCkpO1xuICAgICAgc2V0Vmlld0RhdGUoaW5wdXREYXRlLCBpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfdXNlVGV4dFZhbHVlTWFwcGluZyA9IHVzZVRleHRWYWx1ZU1hcHBpbmcoe1xuICAgIHZhbHVlVGV4dHM6IHN0YXJ0VmFsdWVUZXh0cyxcbiAgICBvblRleHRDaGFuZ2U6IGZ1bmN0aW9uIG9uVGV4dENoYW5nZShuZXdUZXh0KSB7XG4gICAgICByZXR1cm4gX29uVGV4dENoYW5nZShuZXdUZXh0LCAwKTtcbiAgICB9XG4gIH0pLFxuICAgICAgX3VzZVRleHRWYWx1ZU1hcHBpbmcyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVRleHRWYWx1ZU1hcHBpbmcsIDMpLFxuICAgICAgc3RhcnRUZXh0ID0gX3VzZVRleHRWYWx1ZU1hcHBpbmcyWzBdLFxuICAgICAgdHJpZ2dlclN0YXJ0VGV4dENoYW5nZSA9IF91c2VUZXh0VmFsdWVNYXBwaW5nMlsxXSxcbiAgICAgIHJlc2V0U3RhcnRUZXh0ID0gX3VzZVRleHRWYWx1ZU1hcHBpbmcyWzJdO1xuXG4gIHZhciBfdXNlVGV4dFZhbHVlTWFwcGluZzMgPSB1c2VUZXh0VmFsdWVNYXBwaW5nKHtcbiAgICB2YWx1ZVRleHRzOiBlbmRWYWx1ZVRleHRzLFxuICAgIG9uVGV4dENoYW5nZTogZnVuY3Rpb24gb25UZXh0Q2hhbmdlKG5ld1RleHQpIHtcbiAgICAgIHJldHVybiBfb25UZXh0Q2hhbmdlKG5ld1RleHQsIDEpO1xuICAgIH1cbiAgfSksXG4gICAgICBfdXNlVGV4dFZhbHVlTWFwcGluZzQgPSBfc2xpY2VkVG9BcnJheShfdXNlVGV4dFZhbHVlTWFwcGluZzMsIDMpLFxuICAgICAgZW5kVGV4dCA9IF91c2VUZXh0VmFsdWVNYXBwaW5nNFswXSxcbiAgICAgIHRyaWdnZXJFbmRUZXh0Q2hhbmdlID0gX3VzZVRleHRWYWx1ZU1hcHBpbmc0WzFdLFxuICAgICAgcmVzZXRFbmRUZXh0ID0gX3VzZVRleHRWYWx1ZU1hcHBpbmc0WzJdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICByYW5nZUhvdmVyVmFsdWUgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0UmFuZ2VIb3ZlclZhbHVlID0gX3VzZVN0YXRlNFsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gSG92ZXIgUmFuZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBob3ZlclJhbmdlZFZhbHVlID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldEhvdmVyUmFuZ2VkVmFsdWUgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBfdXNlSG92ZXJWYWx1ZSA9IHVzZUhvdmVyVmFsdWUoc3RhcnRUZXh0LCB7XG4gICAgZm9ybWF0TGlzdDogZm9ybWF0TGlzdCxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgbG9jYWxlOiBsb2NhbGVcbiAgfSksXG4gICAgICBfdXNlSG92ZXJWYWx1ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlSG92ZXJWYWx1ZSwgMyksXG4gICAgICBzdGFydEhvdmVyVmFsdWUgPSBfdXNlSG92ZXJWYWx1ZTJbMF0sXG4gICAgICBvblN0YXJ0RW50ZXIgPSBfdXNlSG92ZXJWYWx1ZTJbMV0sXG4gICAgICBvblN0YXJ0TGVhdmUgPSBfdXNlSG92ZXJWYWx1ZTJbMl07XG5cbiAgdmFyIF91c2VIb3ZlclZhbHVlMyA9IHVzZUhvdmVyVmFsdWUoZW5kVGV4dCwge1xuICAgIGZvcm1hdExpc3Q6IGZvcm1hdExpc3QsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgIGxvY2FsZTogbG9jYWxlXG4gIH0pLFxuICAgICAgX3VzZUhvdmVyVmFsdWU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUhvdmVyVmFsdWUzLCAzKSxcbiAgICAgIGVuZEhvdmVyVmFsdWUgPSBfdXNlSG92ZXJWYWx1ZTRbMF0sXG4gICAgICBvbkVuZEVudGVyID0gX3VzZUhvdmVyVmFsdWU0WzFdLFxuICAgICAgb25FbmRMZWF2ZSA9IF91c2VIb3ZlclZhbHVlNFsyXTtcblxuICB2YXIgb25EYXRlTW91c2VFbnRlciA9IGZ1bmN0aW9uIG9uRGF0ZU1vdXNlRW50ZXIoZGF0ZSkge1xuICAgIHNldEhvdmVyUmFuZ2VkVmFsdWUodXBkYXRlVmFsdWVzKHNlbGVjdGVkVmFsdWUsIGRhdGUsIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KSk7XG5cbiAgICBpZiAobWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDApIHtcbiAgICAgIG9uU3RhcnRFbnRlcihkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25FbmRFbnRlcihkYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uRGF0ZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiBvbkRhdGVNb3VzZUxlYXZlKCkge1xuICAgIHNldEhvdmVyUmFuZ2VkVmFsdWUodXBkYXRlVmFsdWVzKHNlbGVjdGVkVmFsdWUsIG51bGwsIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KSk7XG5cbiAgICBpZiAobWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDApIHtcbiAgICAgIG9uU3RhcnRMZWF2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkVuZExlYXZlKCk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJbnB1dCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIGdldFNoYXJlZElucHV0SG9va1Byb3BzID0gZnVuY3Rpb24gZ2V0U2hhcmVkSW5wdXRIb29rUHJvcHMoaW5kZXgsIHJlc2V0VGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBibHVyVG9DYW5jZWw6IG5lZWRDb25maXJtQnV0dG9uLFxuICAgICAgZm9yd2FyZEtleURvd246IGZvcndhcmRLZXlEb3duLFxuICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICBpc0NsaWNrT3V0c2lkZTogZnVuY3Rpb24gaXNDbGlja091dHNpZGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiAhZWxlbWVudHNDb250YWlucyhbcGFuZWxEaXZSZWYuY3VycmVudCwgc3RhcnRJbnB1dERpdlJlZi5jdXJyZW50LCBlbmRJbnB1dERpdlJlZi5jdXJyZW50XSwgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgICAgc2V0TWVyZ2VkQWN0aXZlUGlja2VySW5kZXgoaW5kZXgpO1xuXG4gICAgICAgIGlmIChfb25Gb2N1cykge1xuICAgICAgICAgIF9vbkZvY3VzKGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHJpZ2dlck9wZW46IGZ1bmN0aW9uIHRyaWdnZXJPcGVuKG5ld09wZW4pIHtcbiAgICAgICAgX3RyaWdnZXJPcGVuKG5ld09wZW4sIGluZGV4KTtcbiAgICAgIH0sXG4gICAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoKSB7XG4gICAgICAgIHRyaWdnZXJDaGFuZ2Uoc2VsZWN0ZWRWYWx1ZSwgaW5kZXgpO1xuICAgICAgICByZXNldFRleHQoKTtcbiAgICAgIH0sXG4gICAgICBvbkNhbmNlbDogZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgICAgIF90cmlnZ2VyT3BlbihmYWxzZSwgaW5kZXgpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUobWVyZ2VkVmFsdWUpO1xuICAgICAgICByZXNldFRleHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBfdXNlUGlja2VySW5wdXQgPSB1c2VQaWNrZXJJbnB1dChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGdldFNoYXJlZElucHV0SG9va1Byb3BzKDAsIHJlc2V0U3RhcnRUZXh0KSksIHt9LCB7XG4gICAgb3Blbjogc3RhcnRPcGVuLFxuICAgIHZhbHVlOiBzdGFydFRleHQsXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSwgcHJldmVudERlZmF1bHQpIHtcbiAgICAgIF9vbktleURvd24gPT09IG51bGwgfHwgX29uS2V5RG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29uS2V5RG93bihlLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICB9KSksXG4gICAgICBfdXNlUGlja2VySW5wdXQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVBpY2tlcklucHV0LCAyKSxcbiAgICAgIHN0YXJ0SW5wdXRQcm9wcyA9IF91c2VQaWNrZXJJbnB1dDJbMF0sXG4gICAgICBfdXNlUGlja2VySW5wdXQyJCA9IF91c2VQaWNrZXJJbnB1dDJbMV0sXG4gICAgICBzdGFydEZvY3VzZWQgPSBfdXNlUGlja2VySW5wdXQyJC5mb2N1c2VkLFxuICAgICAgc3RhcnRUeXBpbmcgPSBfdXNlUGlja2VySW5wdXQyJC50eXBpbmc7XG5cbiAgdmFyIF91c2VQaWNrZXJJbnB1dDMgPSB1c2VQaWNrZXJJbnB1dChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGdldFNoYXJlZElucHV0SG9va1Byb3BzKDEsIHJlc2V0RW5kVGV4dCkpLCB7fSwge1xuICAgIG9wZW46IGVuZE9wZW4sXG4gICAgdmFsdWU6IGVuZFRleHQsXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSwgcHJldmVudERlZmF1bHQpIHtcbiAgICAgIF9vbktleURvd24gPT09IG51bGwgfHwgX29uS2V5RG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29uS2V5RG93bihlLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICB9KSksXG4gICAgICBfdXNlUGlja2VySW5wdXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVBpY2tlcklucHV0MywgMiksXG4gICAgICBlbmRJbnB1dFByb3BzID0gX3VzZVBpY2tlcklucHV0NFswXSxcbiAgICAgIF91c2VQaWNrZXJJbnB1dDQkID0gX3VzZVBpY2tlcklucHV0NFsxXSxcbiAgICAgIGVuZEZvY3VzZWQgPSBfdXNlUGlja2VySW5wdXQ0JC5mb2N1c2VkLFxuICAgICAgZW5kVHlwaW5nID0gX3VzZVBpY2tlcklucHV0NCQudHlwaW5nOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBDbGljayBQaWNrZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBvblBpY2tlckNsaWNrID0gZnVuY3Rpb24gb25QaWNrZXJDbGljayhlKSB7XG4gICAgLy8gV2hlbiBjbGljayBpbnNpZGUgdGhlIHBpY2tlciAmIG91dHNpZGUgdGhlIHBpY2tlcidzIGlucHV0IGVsZW1lbnRzXG4gICAgLy8gdGhlIHBhbmVsIHNob3VsZCBzdGlsbCBiZSBvcGVuZWRcbiAgICBpZiAoIW1lcmdlZE9wZW4gJiYgIXN0YXJ0SW5wdXRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkgJiYgIWVuZElucHV0UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBpZiAoIW1lcmdlZERpc2FibGVkWzBdKSB7XG4gICAgICAgIHRyaWdnZXJPcGVuQW5kRm9jdXMoMCk7XG4gICAgICB9IGVsc2UgaWYgKCFtZXJnZWREaXNhYmxlZFsxXSkge1xuICAgICAgICB0cmlnZ2VyT3BlbkFuZEZvY3VzKDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgb25QaWNrZXJNb3VzZURvd24gPSBmdW5jdGlvbiBvblBpY2tlck1vdXNlRG93bihlKSB7XG4gICAgLy8gc2hvdWxkbid0IGFmZmVjdCBpbnB1dCBlbGVtZW50cyBpZiBwaWNrZXIgaXMgYWN0aXZlXG4gICAgaWYgKG1lcmdlZE9wZW4gJiYgKHN0YXJ0Rm9jdXNlZCB8fCBlbmRGb2N1c2VkKSAmJiAhc3RhcnRJbnB1dFJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhZW5kSW5wdXRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN5bmMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIENsb3NlIHNob3VsZCBzeW5jIGJhY2sgd2l0aCB0ZXh0IHZhbHVlXG5cblxuICB2YXIgc3RhcnRTdHIgPSBtZXJnZWRWYWx1ZSAmJiBtZXJnZWRWYWx1ZVswXSA/IGZvcm1hdFZhbHVlKG1lcmdlZFZhbHVlWzBdLCB7XG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZm9ybWF0OiAnWVlZWU1NRERISG1tc3MnLFxuICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICB9KSA6ICcnO1xuICB2YXIgZW5kU3RyID0gbWVyZ2VkVmFsdWUgJiYgbWVyZ2VkVmFsdWVbMV0gPyBmb3JtYXRWYWx1ZShtZXJnZWRWYWx1ZVsxXSwge1xuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGZvcm1hdDogJ1lZWVlNTURESEhtbXNzJyxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgfSkgOiAnJztcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1lcmdlZE9wZW4pIHtcbiAgICAgIHNldFNlbGVjdGVkVmFsdWUobWVyZ2VkVmFsdWUpO1xuXG4gICAgICBpZiAoIXN0YXJ0VmFsdWVUZXh0cy5sZW5ndGggfHwgc3RhcnRWYWx1ZVRleHRzWzBdID09PSAnJykge1xuICAgICAgICB0cmlnZ2VyU3RhcnRUZXh0Q2hhbmdlKCcnKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RTdGFydFZhbHVlVGV4dCAhPT0gc3RhcnRUZXh0KSB7XG4gICAgICAgIHJlc2V0U3RhcnRUZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZW5kVmFsdWVUZXh0cy5sZW5ndGggfHwgZW5kVmFsdWVUZXh0c1swXSA9PT0gJycpIHtcbiAgICAgICAgdHJpZ2dlckVuZFRleHRDaGFuZ2UoJycpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEVuZFZhbHVlVGV4dCAhPT0gZW5kVGV4dCkge1xuICAgICAgICByZXNldEVuZFRleHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFttZXJnZWRPcGVuLCBzdGFydFZhbHVlVGV4dHMsIGVuZFZhbHVlVGV4dHNdKTsgLy8gU3luYyBpbm5lclZhbHVlIHdpdGggY29udHJvbCBtb2RlXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTZWxlY3RlZFZhbHVlKG1lcmdlZFZhbHVlKTtcbiAgfSwgW3N0YXJ0U3RyLCBlbmRTdHJdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXYXJuaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KGRpc2FibGVkKSAmJiAoZ2V0VmFsdWUoZGlzYWJsZWQsIDApICYmICFnZXRWYWx1ZSh2YWx1ZSwgMCkgfHwgZ2V0VmFsdWUoZGlzYWJsZWQsIDEpICYmICFnZXRWYWx1ZSh2YWx1ZSwgMSkpKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnYGRpc2FibGVkYCBzaG91bGQgbm90IHNldCB3aXRoIGVtcHR5IGB2YWx1ZWAuIFlvdSBzaG91bGQgc2V0IGBhbGxvd0VtcHR5YCBvciBgdmFsdWVgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUHJpdmF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBpZiAocGlja2VyUmVmKSB7XG4gICAgcGlja2VyUmVmLmN1cnJlbnQgPSB7XG4gICAgICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIGlmIChzdGFydElucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBzdGFydElucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIGlmIChzdGFydElucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBzdGFydElucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZElucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBlbmRJbnB1dFJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSYW5nZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciByYW5nZUxhYmVscyA9IE9iamVjdC5rZXlzKHJhbmdlcyB8fCB7fSk7XG4gIHZhciByYW5nZUxpc3QgPSByYW5nZUxhYmVscy5tYXAoZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgdmFyIHJhbmdlID0gcmFuZ2VzW2xhYmVsXTtcbiAgICB2YXIgbmV3VmFsdWVzID0gdHlwZW9mIHJhbmdlID09PSAnZnVuY3Rpb24nID8gcmFuZ2UoKSA6IHJhbmdlO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICB0cmlnZ2VyQ2hhbmdlKG5ld1ZhbHVlcywgbnVsbCk7XG5cbiAgICAgICAgX3RyaWdnZXJPcGVuKGZhbHNlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHNldFJhbmdlSG92ZXJWYWx1ZShuZXdWYWx1ZXMpO1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICBzZXRSYW5nZUhvdmVyVmFsdWUobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFBhbmVsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFuZWwoKSB7XG4gICAgdmFyIHBhbmVsUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIHZhciBwYW5lbFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgcGFuZWxIb3ZlclJhbmdlZFZhbHVlID0gbnVsbDtcblxuICAgIGlmIChtZXJnZWRPcGVuICYmIGhvdmVyUmFuZ2VkVmFsdWUgJiYgaG92ZXJSYW5nZWRWYWx1ZVswXSAmJiBob3ZlclJhbmdlZFZhbHVlWzFdICYmIGdlbmVyYXRlQ29uZmlnLmlzQWZ0ZXIoaG92ZXJSYW5nZWRWYWx1ZVsxXSwgaG92ZXJSYW5nZWRWYWx1ZVswXSkpIHtcbiAgICAgIHBhbmVsSG92ZXJSYW5nZWRWYWx1ZSA9IGhvdmVyUmFuZ2VkVmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHBhbmVsU2hvd1RpbWUgPSBzaG93VGltZTtcblxuICAgIGlmIChzaG93VGltZSAmJiBfdHlwZW9mKHNob3dUaW1lKSA9PT0gJ29iamVjdCcgJiYgc2hvd1RpbWUuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB2YXIgdGltZURlZmF1bHRWYWx1ZXMgPSBzaG93VGltZS5kZWZhdWx0VmFsdWU7XG4gICAgICBwYW5lbFNob3dUaW1lID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzaG93VGltZSksIHt9LCB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZ2V0VmFsdWUodGltZURlZmF1bHRWYWx1ZXMsIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KSB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwYW5lbERhdGVSZW5kZXIgPSBudWxsO1xuXG4gICAgaWYgKGRhdGVSZW5kZXIpIHtcbiAgICAgIHBhbmVsRGF0ZVJlbmRlciA9IGZ1bmN0aW9uIHBhbmVsRGF0ZVJlbmRlcihkYXRlLCB0b2RheSkge1xuICAgICAgICByZXR1cm4gZGF0ZVJlbmRlcihkYXRlLCB0b2RheSwge1xuICAgICAgICAgIHJhbmdlOiBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA/ICdlbmQnIDogJ3N0YXJ0J1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJhbmdlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaW5SYW5nZTogdHJ1ZSxcbiAgICAgICAgcGFuZWxQb3NpdGlvbjogcGFuZWxQb3NpdGlvbixcbiAgICAgICAgcmFuZ2VkVmFsdWU6IHJhbmdlSG92ZXJWYWx1ZSB8fCBzZWxlY3RlZFZhbHVlLFxuICAgICAgICBob3ZlclJhbmdlZFZhbHVlOiBwYW5lbEhvdmVyUmFuZ2VkVmFsdWVcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQaWNrZXJQYW5lbCwgX2V4dGVuZHMoe30sIHByb3BzLCBwYW5lbFByb3BzLCB7XG4gICAgICBkYXRlUmVuZGVyOiBwYW5lbERhdGVSZW5kZXIsXG4gICAgICBzaG93VGltZTogcGFuZWxTaG93VGltZSxcbiAgICAgIG1vZGU6IG1lcmdlZE1vZGVzW21lcmdlZEFjdGl2ZVBpY2tlckluZGV4XSxcbiAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIGRpc2FibGVkRGF0ZTogbWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDAgPyBkaXNhYmxlZFN0YXJ0RGF0ZSA6IGRpc2FibGVkRW5kRGF0ZSxcbiAgICAgIGRpc2FibGVkVGltZTogZnVuY3Rpb24gZGlzYWJsZWRUaW1lKGRhdGUpIHtcbiAgICAgICAgaWYgKF9kaXNhYmxlZFRpbWUpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc2FibGVkVGltZShkYXRlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCA/ICdzdGFydCcgOiAnZW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYW5lbC1mb2N1c2VkXCIpLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCA/ICFzdGFydFR5cGluZyA6ICFlbmRUeXBpbmcpKSxcbiAgICAgIHZhbHVlOiBnZXRWYWx1ZShzZWxlY3RlZFZhbHVlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCksXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgIG9uUGFuZWxDaGFuZ2U6IGZ1bmN0aW9uIG9uUGFuZWxDaGFuZ2UoZGF0ZSwgbmV3TW9kZSkge1xuICAgICAgICAvLyBjbGVhciBob3ZlciB2YWx1ZSB3aGVuIHBhbmVsIGNoYW5nZVxuICAgICAgICBpZiAobWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDApIHtcbiAgICAgICAgICBvblN0YXJ0TGVhdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDEpIHtcbiAgICAgICAgICBvbkVuZExlYXZlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlck1vZGVzQ2hhbmdlKHVwZGF0ZVZhbHVlcyhtZXJnZWRNb2RlcywgbmV3TW9kZSwgbWVyZ2VkQWN0aXZlUGlja2VySW5kZXgpLCB1cGRhdGVWYWx1ZXMoc2VsZWN0ZWRWYWx1ZSwgZGF0ZSwgbWVyZ2VkQWN0aXZlUGlja2VySW5kZXgpKTtcbiAgICAgICAgdmFyIHZpZXdEYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAocGFuZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyAmJiBtZXJnZWRNb2Rlc1ttZXJnZWRBY3RpdmVQaWNrZXJJbmRleF0gPT09IG5ld01vZGUpIHtcbiAgICAgICAgICB2aWV3RGF0ZSA9IGdldENsb3NpbmdWaWV3RGF0ZSh2aWV3RGF0ZSwgbmV3TW9kZSwgZ2VuZXJhdGVDb25maWcsIC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFZpZXdEYXRlKHZpZXdEYXRlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCk7XG4gICAgICB9LFxuICAgICAgb25PazogbnVsbCxcbiAgICAgIG9uU2VsZWN0OiB1bmRlZmluZWQsXG4gICAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICAgICAgZGVmYXVsdFZhbHVlOiBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCA/IGdldFZhbHVlKHNlbGVjdGVkVmFsdWUsIDEpIDogZ2V0VmFsdWUoc2VsZWN0ZWRWYWx1ZSwgMCksXG4gICAgICBkZWZhdWx0UGlja2VyVmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pKSk7XG4gIH1cblxuICB2YXIgYXJyb3dMZWZ0ID0gMDtcbiAgdmFyIHBhbmVsTGVmdCA9IDA7XG5cbiAgaWYgKG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4ICYmIHN0YXJ0SW5wdXREaXZSZWYuY3VycmVudCAmJiBzZXBhcmF0b3JSZWYuY3VycmVudCAmJiBwYW5lbERpdlJlZi5jdXJyZW50KSB7XG4gICAgLy8gQXJyb3cgb2Zmc2V0XG4gICAgYXJyb3dMZWZ0ID0gc3RhcnRJbnB1dERpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoICsgc2VwYXJhdG9yUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAocGFuZWxEaXZSZWYuY3VycmVudC5vZmZzZXRXaWR0aCAmJiBhcnJvd0xlZnQgPiBwYW5lbERpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoKSB7XG4gICAgICBwYW5lbExlZnQgPSBhcnJvd0xlZnQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFycm93UG9zaXRpb25TdHlsZSA9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyB7XG4gICAgcmlnaHQ6IGFycm93TGVmdFxuICB9IDoge1xuICAgIGxlZnQ6IGFycm93TGVmdFxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbmRlclBhbmVscygpIHtcbiAgICB2YXIgcGFuZWxzO1xuICAgIHZhciBleHRyYU5vZGUgPSBnZXRFeHRyYUZvb3RlcihwcmVmaXhDbHMsIG1lcmdlZE1vZGVzW21lcmdlZEFjdGl2ZVBpY2tlckluZGV4XSwgcmVuZGVyRXh0cmFGb290ZXIpO1xuICAgIHZhciByYW5nZXNOb2RlID0gZ2V0UmFuZ2VzKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgIG5lZWRDb25maXJtQnV0dG9uOiBuZWVkQ29uZmlybUJ1dHRvbixcbiAgICAgIG9rRGlzYWJsZWQ6ICFnZXRWYWx1ZShzZWxlY3RlZFZhbHVlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCkgfHwgZGlzYWJsZWREYXRlICYmIGRpc2FibGVkRGF0ZShzZWxlY3RlZFZhbHVlW21lcmdlZEFjdGl2ZVBpY2tlckluZGV4XSksXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHJhbmdlTGlzdDogcmFuZ2VMaXN0LFxuICAgICAgb25PazogZnVuY3Rpb24gb25PaygpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKHNlbGVjdGVkVmFsdWUsIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KSkge1xuICAgICAgICAgIC8vIHRyaWdnZXJDaGFuZ2VPbGQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZShzZWxlY3RlZFZhbHVlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCk7XG5cbiAgICAgICAgICBpZiAoX29uT2spIHtcbiAgICAgICAgICAgIF9vbk9rKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBpY2tlciAhPT0gJ3RpbWUnICYmICFzaG93VGltZSkge1xuICAgICAgdmFyIHZpZXdEYXRlID0gZ2V0Vmlld0RhdGUobWVyZ2VkQWN0aXZlUGlja2VySW5kZXgpO1xuICAgICAgdmFyIG5leHRWaWV3RGF0ZSA9IGdldENsb3NpbmdWaWV3RGF0ZSh2aWV3RGF0ZSwgcGlja2VyLCBnZW5lcmF0ZUNvbmZpZyk7XG4gICAgICB2YXIgY3VycmVudE1vZGUgPSBtZXJnZWRNb2Rlc1ttZXJnZWRBY3RpdmVQaWNrZXJJbmRleF07XG4gICAgICB2YXIgc2hvd0RvdWJsZVBhbmVsID0gY3VycmVudE1vZGUgPT09IHBpY2tlcjtcbiAgICAgIHZhciBsZWZ0UGFuZWwgPSByZW5kZXJQYW5lbChzaG93RG91YmxlUGFuZWwgPyAnbGVmdCcgOiBmYWxzZSwge1xuICAgICAgICBwaWNrZXJWYWx1ZTogdmlld0RhdGUsXG4gICAgICAgIG9uUGlja2VyVmFsdWVDaGFuZ2U6IGZ1bmN0aW9uIG9uUGlja2VyVmFsdWVDaGFuZ2UobmV3Vmlld0RhdGUpIHtcbiAgICAgICAgICBzZXRWaWV3RGF0ZShuZXdWaWV3RGF0ZSwgbWVyZ2VkQWN0aXZlUGlja2VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciByaWdodFBhbmVsID0gcmVuZGVyUGFuZWwoJ3JpZ2h0Jywge1xuICAgICAgICBwaWNrZXJWYWx1ZTogbmV4dFZpZXdEYXRlLFxuICAgICAgICBvblBpY2tlclZhbHVlQ2hhbmdlOiBmdW5jdGlvbiBvblBpY2tlclZhbHVlQ2hhbmdlKG5ld1ZpZXdEYXRlKSB7XG4gICAgICAgICAgc2V0Vmlld0RhdGUoZ2V0Q2xvc2luZ1ZpZXdEYXRlKG5ld1ZpZXdEYXRlLCBwaWNrZXIsIGdlbmVyYXRlQ29uZmlnLCAtMSksIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgIHBhbmVscyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCByaWdodFBhbmVsLCBzaG93RG91YmxlUGFuZWwgJiYgbGVmdFBhbmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVscyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBsZWZ0UGFuZWwsIHNob3dEb3VibGVQYW5lbCAmJiByaWdodFBhbmVsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWxzID0gcmVuZGVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VkTm9kZXMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhbmVsc1wiKVxuICAgIH0sIHBhbmVscyksIChleHRyYU5vZGUgfHwgcmFuZ2VzTm9kZSkgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICAgIH0sIGV4dHJhTm9kZSwgcmFuZ2VzTm9kZSkpO1xuXG4gICAgaWYgKHBhbmVsUmVuZGVyKSB7XG4gICAgICBtZXJnZWROb2RlcyA9IHBhbmVsUmVuZGVyKG1lcmdlZE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhbmVsLWNvbnRhaW5lclwiKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhbmVsTGVmdFxuICAgICAgfSxcbiAgICAgIHJlZjogcGFuZWxEaXZSZWYsXG4gICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSwgbWVyZ2VkTm9kZXMpO1xuICB9XG5cbiAgdmFyIHJhbmdlUGFuZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmFuZ2Utd3JhcHBlclwiKSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBpY2tlciwgXCItcmFuZ2Utd3JhcHBlclwiKSksXG4gICAgc3R5bGU6IHtcbiAgICAgIG1pbldpZHRoOiBwb3B1cE1pbldpZHRoXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJhbmdlLWFycm93XCIpLFxuICAgIHN0eWxlOiBhcnJvd1Bvc2l0aW9uU3R5bGVcbiAgfSksIHJlbmRlclBhbmVscygpKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSWNvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgc3VmZml4Tm9kZTtcblxuICBpZiAoc3VmZml4SWNvbikge1xuICAgIHN1ZmZpeE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1ZmZpeFwiKVxuICAgIH0sIHN1ZmZpeEljb24pO1xuICB9XG5cbiAgdmFyIGNsZWFyTm9kZTtcblxuICBpZiAoYWxsb3dDbGVhciAmJiAoZ2V0VmFsdWUobWVyZ2VkVmFsdWUsIDApICYmICFtZXJnZWREaXNhYmxlZFswXSB8fCBnZXRWYWx1ZShtZXJnZWRWYWx1ZSwgMSkgJiYgIW1lcmdlZERpc2FibGVkWzFdKSkge1xuICAgIGNsZWFyTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZVVwOiBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBtZXJnZWRWYWx1ZTtcblxuICAgICAgICBpZiAoIW1lcmdlZERpc2FibGVkWzBdKSB7XG4gICAgICAgICAgdmFsdWVzID0gdXBkYXRlVmFsdWVzKHZhbHVlcywgbnVsbCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lcmdlZERpc2FibGVkWzFdKSB7XG4gICAgICAgICAgdmFsdWVzID0gdXBkYXRlVmFsdWVzKHZhbHVlcywgbnVsbCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2VyQ2hhbmdlKHZhbHVlcywgbnVsbCk7XG5cbiAgICAgICAgX3RyaWdnZXJPcGVuKGZhbHNlLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyXCIpXG4gICAgfSwgY2xlYXJJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItYnRuXCIpXG4gICAgfSkpO1xuICB9XG5cbiAgdmFyIGlucHV0U2hhcmVkUHJvcHMgPSB7XG4gICAgc2l6ZTogZ2V0SW5wdXRTaXplKHBpY2tlciwgZm9ybWF0TGlzdFswXSwgZ2VuZXJhdGVDb25maWcpXG4gIH07XG4gIHZhciBhY3RpdmVCYXJMZWZ0ID0gMDtcbiAgdmFyIGFjdGl2ZUJhcldpZHRoID0gMDtcblxuICBpZiAoc3RhcnRJbnB1dERpdlJlZi5jdXJyZW50ICYmIGVuZElucHV0RGl2UmVmLmN1cnJlbnQgJiYgc2VwYXJhdG9yUmVmLmN1cnJlbnQpIHtcbiAgICBpZiAobWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDApIHtcbiAgICAgIGFjdGl2ZUJhcldpZHRoID0gc3RhcnRJbnB1dERpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVCYXJMZWZ0ID0gYXJyb3dMZWZ0O1xuICAgICAgYWN0aXZlQmFyV2lkdGggPSBlbmRJbnB1dERpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhY3RpdmVCYXJQb3NpdGlvblN0eWxlID0gZGlyZWN0aW9uID09PSAncnRsJyA/IHtcbiAgICByaWdodDogYWN0aXZlQmFyTGVmdFxuICB9IDoge1xuICAgIGxlZnQ6IGFjdGl2ZUJhckxlZnRcbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZXR1cm4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb25Db250ZXh0U2VsZWN0ID0gZnVuY3Rpb24gb25Db250ZXh0U2VsZWN0KGRhdGUsIHR5cGUpIHtcbiAgICB2YXIgdmFsdWVzID0gdXBkYXRlVmFsdWVzKHNlbGVjdGVkVmFsdWUsIGRhdGUsIG1lcmdlZEFjdGl2ZVBpY2tlckluZGV4KTtcblxuICAgIGlmICh0eXBlID09PSAnc3VibWl0JyB8fCB0eXBlICE9PSAna2V5JyAmJiAhbmVlZENvbmZpcm1CdXR0b24pIHtcbiAgICAgIC8vIHRyaWdnZXJDaGFuZ2Ugd2lsbCBhbHNvIHVwZGF0ZSBzZWxlY3RlZCB2YWx1ZXNcbiAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWVzLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCk7IC8vIGNsZWFyIGhvdmVyIHZhbHVlIHN0eWxlXG5cbiAgICAgIGlmIChtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCkge1xuICAgICAgICBvblN0YXJ0TGVhdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRW5kTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIG9wZXJhdGlvblJlZjogb3BlcmF0aW9uUmVmLFxuICAgICAgaGlkZUhlYWRlcjogcGlja2VyID09PSAndGltZScsXG4gICAgICBvbkRhdGVNb3VzZUVudGVyOiBvbkRhdGVNb3VzZUVudGVyLFxuICAgICAgb25EYXRlTW91c2VMZWF2ZTogb25EYXRlTW91c2VMZWF2ZSxcbiAgICAgIGhpZGVSYW5nZXM6IHRydWUsXG4gICAgICBvblNlbGVjdDogb25Db250ZXh0U2VsZWN0LFxuICAgICAgb3BlbjogbWVyZ2VkT3BlblxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGlja2VyVHJpZ2dlciwge1xuICAgIHZpc2libGU6IG1lcmdlZE9wZW4sXG4gICAgcG9wdXBFbGVtZW50OiByYW5nZVBhbmVsLFxuICAgIHBvcHVwU3R5bGU6IHBvcHVwU3R5bGUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZHJvcGRvd25DbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgIGRyb3Bkb3duQWxpZ246IGRyb3Bkb3duQWxpZ24sXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICByYW5nZTogdHJ1ZSxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yYW5nZVwiKSwgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIG1lcmdlZERpc2FibGVkWzBdICYmIG1lcmdlZERpc2FibGVkWzFdKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1mb2N1c2VkXCIpLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCA/IHN0YXJ0Rm9jdXNlZCA6IGVuZEZvY3VzZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzMikpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBvbkNsaWNrOiBvblBpY2tlckNsaWNrLFxuICAgIG9uTW91c2VEb3duOiBvblBpY2tlck1vdXNlRG93blxuICB9LCBnZXREYXRhT3JBcmlhUHJvcHMocHJvcHMpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlucHV0XCIpLCAoX2NsYXNzTmFtZXMzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5wdXQtYWN0aXZlXCIpLCBtZXJnZWRBY3RpdmVQaWNrZXJJbmRleCA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5wdXQtcGxhY2Vob2xkZXJcIiksICEhc3RhcnRIb3ZlclZhbHVlKSwgX2NsYXNzTmFtZXMzKSksXG4gICAgcmVmOiBzdGFydElucHV0RGl2UmVmXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIGlkOiBpZCxcbiAgICBkaXNhYmxlZDogbWVyZ2VkRGlzYWJsZWRbMF0sXG4gICAgcmVhZE9ubHk6IGlucHV0UmVhZE9ubHkgfHwgdHlwZW9mIGZvcm1hdExpc3RbMF0gPT09ICdmdW5jdGlvbicgfHwgIXN0YXJ0VHlwaW5nLFxuICAgIHZhbHVlOiBzdGFydEhvdmVyVmFsdWUgfHwgc3RhcnRUZXh0LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICB0cmlnZ2VyU3RhcnRUZXh0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIHBsYWNlaG9sZGVyOiBnZXRWYWx1ZShwbGFjZWhvbGRlciwgMCkgfHwgJycsXG4gICAgcmVmOiBzdGFydElucHV0UmVmXG4gIH0sIHN0YXJ0SW5wdXRQcm9wcywgaW5wdXRTaGFyZWRQcm9wcywge1xuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlXG4gIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmFuZ2Utc2VwYXJhdG9yXCIpLFxuICAgIHJlZjogc2VwYXJhdG9yUmVmXG4gIH0sIHNlcGFyYXRvciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbnB1dFwiKSwgKF9jbGFzc05hbWVzNCA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXM0LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlucHV0LWFjdGl2ZVwiKSwgbWVyZ2VkQWN0aXZlUGlja2VySW5kZXggPT09IDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXM0LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlucHV0LXBsYWNlaG9sZGVyXCIpLCAhIWVuZEhvdmVyVmFsdWUpLCBfY2xhc3NOYW1lczQpKSxcbiAgICByZWY6IGVuZElucHV0RGl2UmVmXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIGRpc2FibGVkOiBtZXJnZWREaXNhYmxlZFsxXSxcbiAgICByZWFkT25seTogaW5wdXRSZWFkT25seSB8fCB0eXBlb2YgZm9ybWF0TGlzdFswXSA9PT0gJ2Z1bmN0aW9uJyB8fCAhZW5kVHlwaW5nLFxuICAgIHZhbHVlOiBlbmRIb3ZlclZhbHVlIHx8IGVuZFRleHQsXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHRyaWdnZXJFbmRUZXh0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiBnZXRWYWx1ZShwbGFjZWhvbGRlciwgMSkgfHwgJycsXG4gICAgcmVmOiBlbmRJbnB1dFJlZlxuICB9LCBlbmRJbnB1dFByb3BzLCBpbnB1dFNoYXJlZFByb3BzLCB7XG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGVcbiAgfSkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hY3RpdmUtYmFyXCIpLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFjdGl2ZUJhclBvc2l0aW9uU3R5bGUpLCB7fSwge1xuICAgICAgd2lkdGg6IGFjdGl2ZUJhcldpZHRoLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KVxuICB9KSwgc3VmZml4Tm9kZSwgY2xlYXJOb2RlKSkpO1xufSAvLyBXcmFwIHdpdGggY2xhc3MgY29tcG9uZW50IHRvIGVuYWJsZSBwYXNzIGdlbmVyaWMgd2l0aCBpbnN0YW5jZSBtZXRob2RcblxuXG52YXIgUmFuZ2VQaWNrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJhbmdlUGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFJhbmdlUGlja2VyKTtcblxuICBmdW5jdGlvbiBSYW5nZVBpY2tlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZ2VQaWNrZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5waWNrZXJSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBfdGhpcy5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICBfdGhpcy5waWNrZXJSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5ibHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnBpY2tlclJlZi5jdXJyZW50KSB7XG4gICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJhbmdlUGlja2VyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElubmVyUmFuZ2VQaWNrZXIsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHBpY2tlclJlZjogdGhpcy5waWNrZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmFuZ2VQaWNrZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlUGlja2VyOyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IG5vdGVPbmNlIH0gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xudmFyIGdlbmVyYXRlQ29uZmlnID0ge1xuICAvLyBnZXRcbiAgZ2V0Tm93OiBmdW5jdGlvbiBnZXROb3coKSB7XG4gICAgcmV0dXJuIG1vbWVudCgpO1xuICB9LFxuICBnZXRGaXhlZERhdGU6IGZ1bmN0aW9uIGdldEZpeGVkRGF0ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gbW9tZW50KHN0cmluZywgJ1lZWVktTU0tREQnKTtcbiAgfSxcbiAgZ2V0RW5kRGF0ZTogZnVuY3Rpb24gZ2V0RW5kRGF0ZShkYXRlKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5lbmRPZignbW9udGgnKTtcbiAgfSxcbiAgZ2V0V2Vla0RheTogZnVuY3Rpb24gZ2V0V2Vla0RheShkYXRlKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpLmxvY2FsZSgnZW5fVVMnKTtcbiAgICByZXR1cm4gY2xvbmUud2Vla2RheSgpICsgY2xvbmUubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCk7XG4gIH0sXG4gIGdldFllYXI6IGZ1bmN0aW9uIGdldFllYXIoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnllYXIoKTtcbiAgfSxcbiAgZ2V0TW9udGg6IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5tb250aCgpO1xuICB9LFxuICBnZXREYXRlOiBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5kYXRlKCk7XG4gIH0sXG4gIGdldEhvdXI6IGZ1bmN0aW9uIGdldEhvdXIoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmhvdXIoKTtcbiAgfSxcbiAgZ2V0TWludXRlOiBmdW5jdGlvbiBnZXRNaW51dGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLm1pbnV0ZSgpO1xuICB9LFxuICBnZXRTZWNvbmQ6IGZ1bmN0aW9uIGdldFNlY29uZChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuc2Vjb25kKCk7XG4gIH0sXG4gIC8vIHNldFxuICBhZGRZZWFyOiBmdW5jdGlvbiBhZGRZZWFyKGRhdGUsIGRpZmYpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLmFkZChkaWZmLCAneWVhcicpO1xuICB9LFxuICBhZGRNb250aDogZnVuY3Rpb24gYWRkTW9udGgoZGF0ZSwgZGlmZikge1xuICAgIHZhciBjbG9uZSA9IGRhdGUuY2xvbmUoKTtcbiAgICByZXR1cm4gY2xvbmUuYWRkKGRpZmYsICdtb250aCcpO1xuICB9LFxuICBhZGREYXRlOiBmdW5jdGlvbiBhZGREYXRlKGRhdGUsIGRpZmYpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLmFkZChkaWZmLCAnZGF5Jyk7XG4gIH0sXG4gIHNldFllYXI6IGZ1bmN0aW9uIHNldFllYXIoZGF0ZSwgeWVhcikge1xuICAgIHZhciBjbG9uZSA9IGRhdGUuY2xvbmUoKTtcbiAgICByZXR1cm4gY2xvbmUueWVhcih5ZWFyKTtcbiAgfSxcbiAgc2V0TW9udGg6IGZ1bmN0aW9uIHNldE1vbnRoKGRhdGUsIG1vbnRoKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5tb250aChtb250aCk7XG4gIH0sXG4gIHNldERhdGU6IGZ1bmN0aW9uIHNldERhdGUoZGF0ZSwgbnVtKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5kYXRlKG51bSk7XG4gIH0sXG4gIHNldEhvdXI6IGZ1bmN0aW9uIHNldEhvdXIoZGF0ZSwgaG91cikge1xuICAgIHZhciBjbG9uZSA9IGRhdGUuY2xvbmUoKTtcbiAgICByZXR1cm4gY2xvbmUuaG91cihob3VyKTtcbiAgfSxcbiAgc2V0TWludXRlOiBmdW5jdGlvbiBzZXRNaW51dGUoZGF0ZSwgbWludXRlKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5taW51dGUobWludXRlKTtcbiAgfSxcbiAgc2V0U2Vjb25kOiBmdW5jdGlvbiBzZXRTZWNvbmQoZGF0ZSwgc2Vjb25kKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5zZWNvbmQoc2Vjb25kKTtcbiAgfSxcbiAgLy8gQ29tcGFyZVxuICBpc0FmdGVyOiBmdW5jdGlvbiBpc0FmdGVyKGRhdGUxLCBkYXRlMikge1xuICAgIHJldHVybiBkYXRlMS5pc0FmdGVyKGRhdGUyKTtcbiAgfSxcbiAgaXNWYWxpZGF0ZTogZnVuY3Rpb24gaXNWYWxpZGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuaXNWYWxpZCgpO1xuICB9LFxuICBsb2NhbGU6IHtcbiAgICBnZXRXZWVrRmlyc3REYXk6IGZ1bmN0aW9uIGdldFdlZWtGaXJzdERheShsb2NhbGUpIHtcbiAgICAgIHZhciBkYXRlID0gbW9tZW50KCkubG9jYWxlKGxvY2FsZSk7XG4gICAgICByZXR1cm4gZGF0ZS5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKTtcbiAgICB9LFxuICAgIGdldFdlZWtGaXJzdERhdGU6IGZ1bmN0aW9uIGdldFdlZWtGaXJzdERhdGUobG9jYWxlLCBkYXRlKSB7XG4gICAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2xvbmUubG9jYWxlKGxvY2FsZSk7XG4gICAgICByZXR1cm4gcmVzdWx0LndlZWtkYXkoMCk7XG4gICAgfSxcbiAgICBnZXRXZWVrOiBmdW5jdGlvbiBnZXRXZWVrKGxvY2FsZSwgZGF0ZSkge1xuICAgICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGNsb25lLmxvY2FsZShsb2NhbGUpO1xuICAgICAgcmV0dXJuIHJlc3VsdC53ZWVrKCk7XG4gICAgfSxcbiAgICBnZXRTaG9ydFdlZWtEYXlzOiBmdW5jdGlvbiBnZXRTaG9ydFdlZWtEYXlzKGxvY2FsZSkge1xuICAgICAgdmFyIGRhdGUgPSBtb21lbnQoKS5sb2NhbGUobG9jYWxlKTtcbiAgICAgIHJldHVybiBkYXRlLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbigpO1xuICAgIH0sXG4gICAgZ2V0U2hvcnRNb250aHM6IGZ1bmN0aW9uIGdldFNob3J0TW9udGhzKGxvY2FsZSkge1xuICAgICAgdmFyIGRhdGUgPSBtb21lbnQoKS5sb2NhbGUobG9jYWxlKTtcbiAgICAgIHJldHVybiBkYXRlLmxvY2FsZURhdGEoKS5tb250aHNTaG9ydCgpO1xuICAgIH0sXG4gICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQobG9jYWxlLCBkYXRlLCBfZm9ybWF0KSB7XG4gICAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2xvbmUubG9jYWxlKGxvY2FsZSk7XG4gICAgICByZXR1cm4gcmVzdWx0LmZvcm1hdChfZm9ybWF0KTtcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShsb2NhbGUsIHRleHQsIGZvcm1hdHMpIHtcbiAgICAgIHZhciBmYWxsYmFja0Zvcm1hdExpc3QgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzW2ldO1xuICAgICAgICB2YXIgZm9ybWF0VGV4dCA9IHRleHQ7XG5cbiAgICAgICAgaWYgKGZvcm1hdC5pbmNsdWRlcygnd28nKSB8fCBmb3JtYXQuaW5jbHVkZXMoJ1dvJykpIHtcbiAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvd28vZywgJ3cnKS5yZXBsYWNlKC9Xby9nLCAnVycpO1xuICAgICAgICAgIHZhciBtYXRjaEZvcm1hdCA9IGZvcm1hdC5tYXRjaCgvWy1ZeU1tRGRIaFNzV3dHZ10rL2cpO1xuICAgICAgICAgIHZhciBtYXRjaFRleHQgPSBmb3JtYXRUZXh0Lm1hdGNoKC9bLVxcZF0rL2cpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoRm9ybWF0ICYmIG1hdGNoVGV4dCkge1xuICAgICAgICAgICAgZm9ybWF0ID0gbWF0Y2hGb3JtYXQuam9pbignJyk7XG4gICAgICAgICAgICBmb3JtYXRUZXh0ID0gbWF0Y2hUZXh0LmpvaW4oJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWxsYmFja0Zvcm1hdExpc3QucHVzaChmb3JtYXQucmVwbGFjZSgvby9nLCAnJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRlID0gbW9tZW50KGZvcm1hdFRleHQsIGZvcm1hdCwgbG9jYWxlLCB0cnVlKTtcblxuICAgICAgICBpZiAoZGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBGYWxsYmFjayB0byBmdXp6eSBtYXRjaGluZywgdGhpcyBzaG91bGQgYWx3YXlzIG5vdCByZWFjaCBtYXRjaCBvciBuZWVkIGZpcmUgYSBpc3N1ZVxuXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmYWxsYmFja0Zvcm1hdExpc3QubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBfZGF0ZSA9IG1vbWVudCh0ZXh0LCBmYWxsYmFja0Zvcm1hdExpc3RbX2ldLCBsb2NhbGUsIGZhbHNlKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICAgIGlmIChfZGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICBub3RlT25jZShmYWxzZSwgJ05vdCBtYXRjaCBhbnkgZm9ybWF0IHN0cmljdGx5IGFuZCBmYWxsYmFjayB0byBmdXp6eSBtYXRjaC4gUGxlYXNlIGhlbHAgdG8gZmlyZSBhIGlzc3VlIGFib3V0IHRoaXMuJyk7XG4gICAgICAgICAgcmV0dXJuIF9kYXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29uZmlnOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBpc0luUmFuZ2UgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbCc7XG5pbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL21pc2NVdGlsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNlbGxDbGFzc05hbWUoX3JlZikge1xuICB2YXIgY2VsbFByZWZpeENscyA9IF9yZWYuY2VsbFByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gX3JlZi5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHJhbmdlZFZhbHVlID0gX3JlZi5yYW5nZWRWYWx1ZSxcbiAgICAgIGhvdmVyUmFuZ2VkVmFsdWUgPSBfcmVmLmhvdmVyUmFuZ2VkVmFsdWUsXG4gICAgICBpc0luVmlldyA9IF9yZWYuaXNJblZpZXcsXG4gICAgICBpc1NhbWVDZWxsID0gX3JlZi5pc1NhbWVDZWxsLFxuICAgICAgb2Zmc2V0Q2VsbCA9IF9yZWYub2Zmc2V0Q2VsbCxcbiAgICAgIHRvZGF5ID0gX3JlZi50b2RheSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZTtcblxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUoY3VycmVudERhdGUpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgcHJldkRhdGUgPSBvZmZzZXRDZWxsKGN1cnJlbnREYXRlLCAtMSk7XG4gICAgdmFyIG5leHREYXRlID0gb2Zmc2V0Q2VsbChjdXJyZW50RGF0ZSwgMSk7XG4gICAgdmFyIHJhbmdlU3RhcnQgPSBnZXRWYWx1ZShyYW5nZWRWYWx1ZSwgMCk7XG4gICAgdmFyIHJhbmdlRW5kID0gZ2V0VmFsdWUocmFuZ2VkVmFsdWUsIDEpO1xuICAgIHZhciBob3ZlclN0YXJ0ID0gZ2V0VmFsdWUoaG92ZXJSYW5nZWRWYWx1ZSwgMCk7XG4gICAgdmFyIGhvdmVyRW5kID0gZ2V0VmFsdWUoaG92ZXJSYW5nZWRWYWx1ZSwgMSk7XG4gICAgdmFyIGlzUmFuZ2VIb3ZlcmVkID0gaXNJblJhbmdlKGdlbmVyYXRlQ29uZmlnLCBob3ZlclN0YXJ0LCBob3ZlckVuZCwgY3VycmVudERhdGUpO1xuXG4gICAgZnVuY3Rpb24gaXNSYW5nZVN0YXJ0KGRhdGUpIHtcbiAgICAgIHJldHVybiBpc1NhbWVDZWxsKHJhbmdlU3RhcnQsIGRhdGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUmFuZ2VFbmQoZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzU2FtZUNlbGwocmFuZ2VFbmQsIGRhdGUpO1xuICAgIH1cblxuICAgIHZhciBpc0hvdmVyU3RhcnQgPSBpc1NhbWVDZWxsKGhvdmVyU3RhcnQsIGN1cnJlbnREYXRlKTtcbiAgICB2YXIgaXNIb3ZlckVuZCA9IGlzU2FtZUNlbGwoaG92ZXJFbmQsIGN1cnJlbnREYXRlKTtcbiAgICB2YXIgaXNIb3ZlckVkZ2VTdGFydCA9IChpc1JhbmdlSG92ZXJlZCB8fCBpc0hvdmVyRW5kKSAmJiAoIWlzSW5WaWV3KHByZXZEYXRlKSB8fCBpc1JhbmdlRW5kKHByZXZEYXRlKSk7XG4gICAgdmFyIGlzSG92ZXJFZGdlRW5kID0gKGlzUmFuZ2VIb3ZlcmVkIHx8IGlzSG92ZXJTdGFydCkgJiYgKCFpc0luVmlldyhuZXh0RGF0ZSkgfHwgaXNSYW5nZVN0YXJ0KG5leHREYXRlKSk7XG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItaW4tdmlld1wiKSwgaXNJblZpZXcoY3VycmVudERhdGUpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1pbi1yYW5nZVwiKSwgaXNJblJhbmdlKGdlbmVyYXRlQ29uZmlnLCByYW5nZVN0YXJ0LCByYW5nZUVuZCwgY3VycmVudERhdGUpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1yYW5nZS1zdGFydFwiKSwgaXNSYW5nZVN0YXJ0KGN1cnJlbnREYXRlKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItcmFuZ2UtZW5kXCIpLCBpc1JhbmdlRW5kKGN1cnJlbnREYXRlKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItcmFuZ2Utc3RhcnQtc2luZ2xlXCIpLCBpc1JhbmdlU3RhcnQoY3VycmVudERhdGUpICYmICFyYW5nZUVuZCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItcmFuZ2UtZW5kLXNpbmdsZVwiKSwgaXNSYW5nZUVuZChjdXJyZW50RGF0ZSkgJiYgIXJhbmdlU3RhcnQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXJhbmdlLXN0YXJ0LW5lYXItaG92ZXJcIiksIGlzUmFuZ2VTdGFydChjdXJyZW50RGF0ZSkgJiYgKGlzU2FtZUNlbGwocHJldkRhdGUsIGhvdmVyU3RhcnQpIHx8IGlzSW5SYW5nZShnZW5lcmF0ZUNvbmZpZywgaG92ZXJTdGFydCwgaG92ZXJFbmQsIHByZXZEYXRlKSkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXJhbmdlLWVuZC1uZWFyLWhvdmVyXCIpLCBpc1JhbmdlRW5kKGN1cnJlbnREYXRlKSAmJiAoaXNTYW1lQ2VsbChuZXh0RGF0ZSwgaG92ZXJFbmQpIHx8IGlzSW5SYW5nZShnZW5lcmF0ZUNvbmZpZywgaG92ZXJTdGFydCwgaG92ZXJFbmQsIG5leHREYXRlKSkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXJhbmdlLWhvdmVyXCIpLCBpc1JhbmdlSG92ZXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItcmFuZ2UtaG92ZXItc3RhcnRcIiksIGlzSG92ZXJTdGFydCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItcmFuZ2UtaG92ZXItZW5kXCIpLCBpc0hvdmVyRW5kKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1yYW5nZS1ob3Zlci1lZGdlLXN0YXJ0XCIpLCBpc0hvdmVyRWRnZVN0YXJ0KSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1yYW5nZS1ob3Zlci1lZGdlLWVuZFwiKSwgaXNIb3ZlckVkZ2VFbmQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXJhbmdlLWhvdmVyLWVkZ2Utc3RhcnQtbmVhci1yYW5nZVwiKSwgaXNIb3ZlckVkZ2VTdGFydCAmJiBpc1NhbWVDZWxsKHByZXZEYXRlLCByYW5nZUVuZCkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXJhbmdlLWhvdmVyLWVkZ2UtZW5kLW5lYXItcmFuZ2VcIiksIGlzSG92ZXJFZGdlRW5kICYmIGlzU2FtZUNlbGwobmV4dERhdGUsIHJhbmdlU3RhcnQpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi10b2RheVwiKSwgaXNTYW1lQ2VsbCh0b2RheSwgY3VycmVudERhdGUpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1zZWxlY3RlZFwiKSwgaXNTYW1lQ2VsbCh2YWx1ZSwgY3VycmVudERhdGUpKSwgX3JlZjI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xhc3NOYW1lO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVZhbHVlVGV4dHMgZnJvbSAnLi91c2VWYWx1ZVRleHRzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvdmVyVmFsdWUodmFsdWVUZXh0LCBfcmVmKSB7XG4gIHZhciBmb3JtYXRMaXN0ID0gX3JlZi5mb3JtYXRMaXN0LFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBfcmVmLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBpbnRlcm5hbFNldFZhbHVlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgcmFmID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNldFZhbHVlKHZhbCkge1xuICAgIHZhciBpbW1lZGlhdGVseSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmLmN1cnJlbnQpO1xuXG4gICAgaWYgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpbnRlcm5hbFNldFZhbHVlKHZhbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmFmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgaW50ZXJuYWxTZXRWYWx1ZSh2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF91c2VWYWx1ZVRleHRzID0gdXNlVmFsdWVUZXh0cyh2YWx1ZSwge1xuICAgIGZvcm1hdExpc3Q6IGZvcm1hdExpc3QsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgIGxvY2FsZTogbG9jYWxlXG4gIH0pLFxuICAgICAgX3VzZVZhbHVlVGV4dHMyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVZhbHVlVGV4dHMsIDIpLFxuICAgICAgZmlyc3RUZXh0ID0gX3VzZVZhbHVlVGV4dHMyWzFdO1xuXG4gIGZ1bmN0aW9uIG9uRW50ZXIoZGF0ZSkge1xuICAgIHNldFZhbHVlKGRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25MZWF2ZSgpIHtcbiAgICB2YXIgaW1tZWRpYXRlbHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIHNldFZhbHVlKG51bGwsIGltbWVkaWF0ZWx5KTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgb25MZWF2ZSh0cnVlKTtcbiAgfSwgW3ZhbHVlVGV4dF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtmaXJzdFRleHQsIG9uRW50ZXIsIG9uTGVhdmVdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IHsgYWRkR2xvYmFsTW91c2VEb3duRXZlbnQsIGdldFRhcmdldEZyb21FdmVudCB9IGZyb20gJy4uL3V0aWxzL3VpVXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQaWNrZXJJbnB1dChfcmVmKSB7XG4gIHZhciBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaXNDbGlja091dHNpZGUgPSBfcmVmLmlzQ2xpY2tPdXRzaWRlLFxuICAgICAgdHJpZ2dlck9wZW4gPSBfcmVmLnRyaWdnZXJPcGVuLFxuICAgICAgZm9yd2FyZEtleURvd24gPSBfcmVmLmZvcndhcmRLZXlEb3duLFxuICAgICAgX29uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgYmx1clRvQ2FuY2VsID0gX3JlZi5ibHVyVG9DYW5jZWwsXG4gICAgICBvblN1Ym1pdCA9IF9yZWYub25TdWJtaXQsXG4gICAgICBvbkNhbmNlbCA9IF9yZWYub25DYW5jZWwsXG4gICAgICBfb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcbiAgICAgIF9vbkJsdXIgPSBfcmVmLm9uQmx1cjtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB0eXBpbmcgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VHlwaW5nID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGZvY3VzZWQgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF91c2VTdGF0ZTRbMV07XG4gIC8qKlxuICAgKiBXZSB3aWxsIHByZXZlbnQgYmx1ciB0byBoYW5kbGUgb3BlbiBldmVudCB3aGVuIHVzZXIgY2xpY2sgb3V0c2lkZSxcbiAgICogc2luY2UgdGhpcyB3aWxsIHJlcGVhdCB0cmlnZ2VyIGBvbk9wZW5DaGFuZ2VgIGV2ZW50LlxuICAgKi9cblxuXG4gIHZhciBwcmV2ZW50Qmx1clJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciB2YWx1ZUNoYW5nZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgcHJldmVudERlZmF1bHRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgaW5wdXRQcm9wcyA9IHtcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oKSB7XG4gICAgICBzZXRUeXBpbmcodHJ1ZSk7XG4gICAgICB0cmlnZ2VyT3Blbih0cnVlKTtcbiAgICB9LFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIF9vbktleURvd24oZSwgcHJldmVudERlZmF1bHQpO1xuXG4gICAgICBpZiAocHJldmVudERlZmF1bHRSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgICAgY2FzZSBLZXlDb2RlLkVOVEVSOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgICAgICB0cmlnZ2VyT3Blbih0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob25TdWJtaXQoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2V0VHlwaW5nKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgS2V5Q29kZS5UQUI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGluZyAmJiBvcGVuICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgIHNldFR5cGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXR5cGluZyAmJiBvcGVuKSB7XG4gICAgICAgICAgICAgIGlmICghZm9yd2FyZEtleURvd24oZSkgJiYgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHNldFR5cGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNldFR5cGluZyh0cnVlKTtcbiAgICAgICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW9wZW4gJiYgIVtLZXlDb2RlLlNISUZUXS5pbmNsdWRlcyhlLndoaWNoKSkge1xuICAgICAgICB0cmlnZ2VyT3Blbih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIXR5cGluZykge1xuICAgICAgICAvLyBMZXQgcG9wdXAgcGFuZWwgaGFuZGxlIGtleWJvYXJkXG4gICAgICAgIGZvcndhcmRLZXlEb3duKGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICBzZXRUeXBpbmcodHJ1ZSk7XG4gICAgICBzZXRGb2N1c2VkKHRydWUpO1xuXG4gICAgICBpZiAoX29uRm9jdXMpIHtcbiAgICAgICAgX29uRm9jdXMoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICBpZiAocHJldmVudEJsdXJSZWYuY3VycmVudCB8fCAhaXNDbGlja091dHNpZGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcHJldmVudEJsdXJSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChibHVyVG9DYW5jZWwpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNDbGlja091dHNpZGUoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0gZWxzZSBpZiAob3Blbikge1xuICAgICAgICB0cmlnZ2VyT3BlbihmYWxzZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlQ2hhbmdlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgb25TdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRGb2N1c2VkKGZhbHNlKTtcblxuICAgICAgaWYgKF9vbkJsdXIpIHtcbiAgICAgICAgX29uQmx1cihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIGNoZWNrIGlmIHZhbHVlIGNoYW5nZWRcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhbHVlQ2hhbmdlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtvcGVuXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFsdWVDaGFuZ2VkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbdmFsdWVdKTsgLy8gR2xvYmFsIGNsaWNrIGhhbmRsZXJcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhZGRHbG9iYWxNb3VzZURvd25FdmVudChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldEZyb21FdmVudChlKTtcblxuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgdmFyIGNsaWNrZWRPdXRzaWRlID0gaXNDbGlja091dHNpZGUodGFyZ2V0KTtcblxuICAgICAgICBpZiAoIWNsaWNrZWRPdXRzaWRlKSB7XG4gICAgICAgICAgcHJldmVudEJsdXJSZWYuY3VycmVudCA9IHRydWU7IC8vIEFsd2F5cyBzZXQgYmFjayBpbiBjYXNlIGBvbkJsdXJgIHByZXZlbnRlZCBieSB1c2VyXG5cbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJldmVudEJsdXJSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb2N1c2VkIHx8IGNsaWNrZWRPdXRzaWRlKSB7XG4gICAgICAgICAgdHJpZ2dlck9wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gW2lucHV0UHJvcHMsIHtcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIHR5cGluZzogdHlwaW5nXG4gIH1dO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSAnLi4vdXRpbHMvbWlzY1V0aWwnO1xuaW1wb3J0IHsgaXNTYW1lRGF0ZSwgZ2V0UXVhcnRlciB9IGZyb20gJy4uL3V0aWxzL2RhdGVVdGlsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJhbmdlRGlzYWJsZWQoX3JlZiwgZGlzYWJsZWRTdGFydCwgZGlzYWJsZWRFbmQpIHtcbiAgdmFyIHBpY2tlciA9IF9yZWYucGlja2VyLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBzZWxlY3RlZFZhbHVlID0gX3JlZi5zZWxlY3RlZFZhbHVlLFxuICAgICAgZGlzYWJsZWREYXRlID0gX3JlZi5kaXNhYmxlZERhdGUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IF9yZWYuZ2VuZXJhdGVDb25maWc7XG4gIHZhciBzdGFydERhdGUgPSBnZXRWYWx1ZShzZWxlY3RlZFZhbHVlLCAwKTtcbiAgdmFyIGVuZERhdGUgPSBnZXRWYWx1ZShzZWxlY3RlZFZhbHVlLCAxKTtcblxuICBmdW5jdGlvbiB3ZWVrRmlyc3REYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFdlZWtGaXJzdERhdGUobG9jYWxlLmxvY2FsZSwgZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBtb250aE51bWJlcihkYXRlKSB7XG4gICAgdmFyIHllYXIgPSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKGRhdGUpO1xuICAgIHZhciBtb250aCA9IGdlbmVyYXRlQ29uZmlnLmdldE1vbnRoKGRhdGUpO1xuICAgIHJldHVybiB5ZWFyICogMTAwICsgbW9udGg7XG4gIH1cblxuICBmdW5jdGlvbiBxdWFydGVyTnVtYmVyKGRhdGUpIHtcbiAgICB2YXIgeWVhciA9IGdlbmVyYXRlQ29uZmlnLmdldFllYXIoZGF0ZSk7XG4gICAgdmFyIHF1YXJ0ZXIgPSBnZXRRdWFydGVyKGdlbmVyYXRlQ29uZmlnLCBkYXRlKTtcbiAgICByZXR1cm4geWVhciAqIDEwICsgcXVhcnRlcjtcbiAgfVxuXG4gIHZhciBkaXNhYmxlZFN0YXJ0RGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgaWYgKGRpc2FibGVkRGF0ZSAmJiBkaXNhYmxlZERhdGUoZGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gRGlzYWJsZWQgcmFuZ2VcblxuXG4gICAgaWYgKGRpc2FibGVkWzFdICYmIGVuZERhdGUpIHtcbiAgICAgIHJldHVybiAhaXNTYW1lRGF0ZShnZW5lcmF0ZUNvbmZpZywgZGF0ZSwgZW5kRGF0ZSkgJiYgZ2VuZXJhdGVDb25maWcuaXNBZnRlcihkYXRlLCBlbmREYXRlKTtcbiAgICB9IC8vIERpc2FibGVkIHBhcnRcblxuXG4gICAgaWYgKGRpc2FibGVkU3RhcnQgJiYgZW5kRGF0ZSkge1xuICAgICAgc3dpdGNoIChwaWNrZXIpIHtcbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgcmV0dXJuIHF1YXJ0ZXJOdW1iZXIoZGF0ZSkgPiBxdWFydGVyTnVtYmVyKGVuZERhdGUpO1xuXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gbW9udGhOdW1iZXIoZGF0ZSkgPiBtb250aE51bWJlcihlbmREYXRlKTtcblxuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICByZXR1cm4gd2Vla0ZpcnN0RGF0ZShkYXRlKSA+IHdlZWtGaXJzdERhdGUoZW5kRGF0ZSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gIWlzU2FtZURhdGUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIGVuZERhdGUpICYmIGdlbmVyYXRlQ29uZmlnLmlzQWZ0ZXIoZGF0ZSwgZW5kRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LCBbZGlzYWJsZWREYXRlLCBkaXNhYmxlZFsxXSwgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydF0pO1xuICB2YXIgZGlzYWJsZWRFbmREYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBpZiAoZGlzYWJsZWREYXRlICYmIGRpc2FibGVkRGF0ZShkYXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBEaXNhYmxlZCByYW5nZVxuXG5cbiAgICBpZiAoZGlzYWJsZWRbMF0gJiYgc3RhcnREYXRlKSB7XG4gICAgICByZXR1cm4gIWlzU2FtZURhdGUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIGVuZERhdGUpICYmIGdlbmVyYXRlQ29uZmlnLmlzQWZ0ZXIoc3RhcnREYXRlLCBkYXRlKTtcbiAgICB9IC8vIERpc2FibGVkIHBhcnRcblxuXG4gICAgaWYgKGRpc2FibGVkRW5kICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgc3dpdGNoIChwaWNrZXIpIHtcbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgcmV0dXJuIHF1YXJ0ZXJOdW1iZXIoZGF0ZSkgPCBxdWFydGVyTnVtYmVyKHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHJldHVybiBtb250aE51bWJlcihkYXRlKSA8IG1vbnRoTnVtYmVyKHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgcmV0dXJuIHdlZWtGaXJzdERhdGUoZGF0ZSkgPCB3ZWVrRmlyc3REYXRlKHN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gIWlzU2FtZURhdGUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIHN0YXJ0RGF0ZSkgJiYgZ2VuZXJhdGVDb25maWcuaXNBZnRlcihzdGFydERhdGUsIGRhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgW2Rpc2FibGVkRGF0ZSwgZGlzYWJsZWRbMF0sIHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmRdKTtcbiAgcmV0dXJuIFtkaXNhYmxlZFN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXRlXTtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFZhbHVlLCB1cGRhdGVWYWx1ZXMgfSBmcm9tICcuLi91dGlscy9taXNjVXRpbCc7XG5pbXBvcnQgeyBnZXRDbG9zaW5nVmlld0RhdGUsIGlzU2FtZVllYXIsIGlzU2FtZU1vbnRoLCBpc1NhbWVEZWNhZGUgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbCc7XG5cbmZ1bmN0aW9uIGdldFN0YXJ0RW5kRGlzdGFuY2Uoc3RhcnREYXRlLCBlbmREYXRlLCBwaWNrZXIsIGdlbmVyYXRlQ29uZmlnKSB7XG4gIHZhciBzdGFydE5leHQgPSBnZXRDbG9zaW5nVmlld0RhdGUoc3RhcnREYXRlLCBwaWNrZXIsIGdlbmVyYXRlQ29uZmlnLCAxKTtcblxuICBmdW5jdGlvbiBnZXREaXN0YW5jZShjb21wYXJlRnVuYykge1xuICAgIGlmIChjb21wYXJlRnVuYyhzdGFydERhdGUsIGVuZERhdGUpKSB7XG4gICAgICByZXR1cm4gJ3NhbWUnO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlRnVuYyhzdGFydE5leHQsIGVuZERhdGUpKSB7XG4gICAgICByZXR1cm4gJ2Nsb3NpbmcnO1xuICAgIH1cblxuICAgIHJldHVybiAnZmFyJztcbiAgfVxuXG4gIHN3aXRjaCAocGlja2VyKSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gZ2V0RGlzdGFuY2UoZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIGlzU2FtZURlY2FkZShnZW5lcmF0ZUNvbmZpZywgc3RhcnQsIGVuZCk7XG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBnZXREaXN0YW5jZShmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gaXNTYW1lWWVhcihnZW5lcmF0ZUNvbmZpZywgc3RhcnQsIGVuZCk7XG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2V0RGlzdGFuY2UoZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIGlzU2FtZU1vbnRoKGdlbmVyYXRlQ29uZmlnLCBzdGFydCwgZW5kKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJhbmdlVmlld0RhdGUodmFsdWVzLCBpbmRleCwgcGlja2VyLCBnZW5lcmF0ZUNvbmZpZykge1xuICB2YXIgc3RhcnREYXRlID0gZ2V0VmFsdWUodmFsdWVzLCAwKTtcbiAgdmFyIGVuZERhdGUgPSBnZXRWYWx1ZSh2YWx1ZXMsIDEpO1xuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHJldHVybiBzdGFydERhdGU7XG4gIH1cblxuICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICB2YXIgZGlzdGFuY2UgPSBnZXRTdGFydEVuZERpc3RhbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcGlja2VyLCBnZW5lcmF0ZUNvbmZpZyk7XG5cbiAgICBzd2l0Y2ggKGRpc3RhbmNlKSB7XG4gICAgICBjYXNlICdzYW1lJzpcbiAgICAgICAgcmV0dXJuIHN0YXJ0RGF0ZTtcblxuICAgICAgY2FzZSAnY2xvc2luZyc6XG4gICAgICAgIHJldHVybiBzdGFydERhdGU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRDbG9zaW5nVmlld0RhdGUoZW5kRGF0ZSwgcGlja2VyLCBnZW5lcmF0ZUNvbmZpZywgLTEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGFydERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJhbmdlVmlld0RhdGVzKF9yZWYpIHtcbiAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzLFxuICAgICAgcGlja2VyID0gX3JlZi5waWNrZXIsXG4gICAgICBkZWZhdWx0RGF0ZXMgPSBfcmVmLmRlZmF1bHREYXRlcyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gX3JlZi5nZW5lcmF0ZUNvbmZpZztcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbZ2V0VmFsdWUoZGVmYXVsdERhdGVzLCAwKSwgZ2V0VmFsdWUoZGVmYXVsdERhdGVzLCAxKV07XG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBkZWZhdWx0Vmlld0RhdGVzID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldERlZmF1bHRWaWV3RGF0ZXMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgICB2aWV3RGF0ZXMgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0SW50ZXJuYWxWaWV3RGF0ZXMgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBzdGFydERhdGUgPSBnZXRWYWx1ZSh2YWx1ZXMsIDApO1xuICB2YXIgZW5kRGF0ZSA9IGdldFZhbHVlKHZhbHVlcywgMSk7XG5cbiAgZnVuY3Rpb24gZ2V0Vmlld0RhdGUoaW5kZXgpIHtcbiAgICAvLyBJZiBzZXQgZGVmYXVsdCB2aWV3IGRhdGUsIHVzZSBpdFxuICAgIGlmIChkZWZhdWx0Vmlld0RhdGVzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWaWV3RGF0ZXNbaW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZSh2aWV3RGF0ZXMsIGluZGV4KSB8fCBnZXRSYW5nZVZpZXdEYXRlKHZhbHVlcywgaW5kZXgsIHBpY2tlciwgZ2VuZXJhdGVDb25maWcpIHx8IHN0YXJ0RGF0ZSB8fCBlbmREYXRlIHx8IGdlbmVyYXRlQ29uZmlnLmdldE5vdygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Vmlld0RhdGUodmlld0RhdGUsIGluZGV4KSB7XG4gICAgaWYgKHZpZXdEYXRlKSB7XG4gICAgICB2YXIgbmV3Vmlld0RhdGVzID0gdXBkYXRlVmFsdWVzKHZpZXdEYXRlcywgdmlld0RhdGUsIGluZGV4KTsgLy8gU2V0IHZpZXcgZGF0ZSB3aWxsIGNsZWFuIHVwIGRlZmF1bHQgb25lXG5cbiAgICAgIHNldERlZmF1bHRWaWV3RGF0ZXMoIC8vIFNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXlcbiAgICAgIHVwZGF0ZVZhbHVlcyhkZWZhdWx0Vmlld0RhdGVzLCBudWxsLCBpbmRleCkgfHwgW251bGwsIG51bGxdKTsgLy8gUmVzZXQgYW5vdGhlciBvbmUgd2hlbiBub3QgaGF2ZSB2YWx1ZVxuXG4gICAgICB2YXIgYW5vdGhlckluZGV4ID0gKGluZGV4ICsgMSkgJSAyO1xuXG4gICAgICBpZiAoIWdldFZhbHVlKHZhbHVlcywgYW5vdGhlckluZGV4KSkge1xuICAgICAgICBuZXdWaWV3RGF0ZXMgPSB1cGRhdGVWYWx1ZXMobmV3Vmlld0RhdGVzLCB2aWV3RGF0ZSwgYW5vdGhlckluZGV4KTtcbiAgICAgIH1cblxuICAgICAgc2V0SW50ZXJuYWxWaWV3RGF0ZXMobmV3Vmlld0RhdGVzKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XG4gICAgICAvLyBSZXNldCBhbGwgd2hlbiBoYXMgdmFsdWVzIHdoZW4gYHZpZXdEYXRlYCBpcyBgbnVsbGAgd2hpY2ggbWVhbnMgZnJvbSBvcGVuIHRyaWdnZXJcbiAgICAgIHNldEludGVybmFsVmlld0RhdGVzKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbZ2V0Vmlld0RhdGUsIHNldFZpZXdEYXRlXTtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRleHRWYWx1ZU1hcHBpbmcoX3JlZikge1xuICB2YXIgdmFsdWVUZXh0cyA9IF9yZWYudmFsdWVUZXh0cyxcbiAgICAgIG9uVGV4dENoYW5nZSA9IF9yZWYub25UZXh0Q2hhbmdlO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgnJyksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHRleHQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5uZXJUZXh0ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgdmFsdWVUZXh0c1JlZiA9IFJlYWN0LnVzZVJlZihbXSk7XG4gIHZhbHVlVGV4dHNSZWYuY3VycmVudCA9IHZhbHVlVGV4dHM7XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclRleHRDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRJbm5lclRleHQodmFsdWUpO1xuICAgIG9uVGV4dENoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRleHQoKSB7XG4gICAgc2V0SW5uZXJUZXh0KHZhbHVlVGV4dHNSZWYuY3VycmVudFswXSk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWx1ZVRleHRzLmV2ZXJ5KGZ1bmN0aW9uICh2YWxUZXh0KSB7XG4gICAgICByZXR1cm4gdmFsVGV4dCAhPT0gdGV4dDtcbiAgICB9KSkge1xuICAgICAgcmVzZXRUZXh0KCk7XG4gICAgfVxuICB9LCBbdmFsdWVUZXh0cy5qb2luKCd8fCcpXSk7XG4gIHJldHVybiBbdGV4dCwgdHJpZ2dlclRleHRDaGFuZ2UsIHJlc2V0VGV4dF07XG59IiwiaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IHVzZU1lbW8gZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVtb1wiO1xuaW1wb3J0IHsgZm9ybWF0VmFsdWUgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VWYWx1ZVRleHRzKHZhbHVlLCBfcmVmKSB7XG4gIHZhciBmb3JtYXRMaXN0ID0gX3JlZi5mb3JtYXRMaXN0LFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBfcmVmLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gW1snJ10sICcnXTtcbiAgICB9IC8vIFdlIHdpbGwgY29udmVydCBkYXRhIGZvcm1hdCBiYWNrIHRvIGZpcnN0IGZvcm1hdFxuXG5cbiAgICB2YXIgZmlyc3RWYWx1ZVRleHQgPSAnJztcbiAgICB2YXIgZnVsbFZhbHVlVGV4dHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0TGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGZvcm1hdCA9IGZvcm1hdExpc3RbaV07XG4gICAgICB2YXIgZm9ybWF0U3RyID0gZm9ybWF0VmFsdWUodmFsdWUsIHtcbiAgICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICAgIH0pO1xuICAgICAgZnVsbFZhbHVlVGV4dHMucHVzaChmb3JtYXRTdHIpO1xuXG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBmaXJzdFZhbHVlVGV4dCA9IGZvcm1hdFN0cjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW2Z1bGxWYWx1ZVRleHRzLCBmaXJzdFZhbHVlVGV4dF07XG4gIH0sIFt2YWx1ZSwgZm9ybWF0TGlzdF0sIGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXZbMF0gIT09IG5leHRbMF0gfHwgIXNoYWxsb3dFcXVhbChwcmV2WzFdLCBuZXh0WzFdKTtcbiAgfSk7XG59IiwiaW1wb3J0IFBpY2tlciBmcm9tICcuL1BpY2tlcic7XG5pbXBvcnQgUGlja2VyUGFuZWwgZnJvbSAnLi9QaWNrZXJQYW5lbCc7XG5pbXBvcnQgUmFuZ2VQaWNrZXIgZnJvbSAnLi9SYW5nZVBpY2tlcic7XG5leHBvcnQgeyBQaWNrZXJQYW5lbCwgUmFuZ2VQaWNrZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFBpY2tlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdFRUtfREFZX0NPVU5ULCBnZXRXZWVrU3RhcnREYXRlLCBpc1NhbWVEYXRlLCBpc1NhbWVNb250aCwgZm9ybWF0VmFsdWUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlVXRpbCc7XG5pbXBvcnQgUmFuZ2VDb250ZXh0IGZyb20gJy4uLy4uL1JhbmdlQ29udGV4dCc7XG5pbXBvcnQgdXNlQ2VsbENsYXNzTmFtZSBmcm9tICcuLi8uLi9ob29rcy91c2VDZWxsQ2xhc3NOYW1lJztcbmltcG9ydCBQYW5lbEJvZHkgZnJvbSAnLi4vUGFuZWxCb2R5JztcblxuZnVuY3Rpb24gRGF0ZUJvZHkocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBwcmVmaXhDb2x1bW4gPSBwcm9wcy5wcmVmaXhDb2x1bW4sXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICByb3dDb3VudCA9IHByb3BzLnJvd0NvdW50LFxuICAgICAgdmlld0RhdGUgPSBwcm9wcy52aWV3RGF0ZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBkYXRlUmVuZGVyID0gcHJvcHMuZGF0ZVJlbmRlcjtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFJhbmdlQ29udGV4dCksXG4gICAgICByYW5nZWRWYWx1ZSA9IF9SZWFjdCR1c2VDb250ZXh0LnJhbmdlZFZhbHVlLFxuICAgICAgaG92ZXJSYW5nZWRWYWx1ZSA9IF9SZWFjdCR1c2VDb250ZXh0LmhvdmVyUmFuZ2VkVmFsdWU7XG5cbiAgdmFyIGJhc2VEYXRlID0gZ2V0V2Vla1N0YXJ0RGF0ZShsb2NhbGUubG9jYWxlLCBnZW5lcmF0ZUNvbmZpZywgdmlld0RhdGUpO1xuICB2YXIgY2VsbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTtcbiAgdmFyIHdlZWtGaXJzdERheSA9IGdlbmVyYXRlQ29uZmlnLmxvY2FsZS5nZXRXZWVrRmlyc3REYXkobG9jYWxlLmxvY2FsZSk7XG4gIHZhciB0b2RheSA9IGdlbmVyYXRlQ29uZmlnLmdldE5vdygpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBoZWFkZXJDZWxscyA9IFtdO1xuICB2YXIgd2Vla0RheXNMb2NhbGUgPSBsb2NhbGUuc2hvcnRXZWVrRGF5cyB8fCAoZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFNob3J0V2Vla0RheXMgPyBnZW5lcmF0ZUNvbmZpZy5sb2NhbGUuZ2V0U2hvcnRXZWVrRGF5cyhsb2NhbGUubG9jYWxlKSA6IFtdKTtcblxuICBpZiAocHJlZml4Q29sdW1uKSB7XG4gICAgaGVhZGVyQ2VsbHMucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7XG4gICAgICBrZXk6IFwiZW1wdHlcIixcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcImVtcHR5IGNlbGxcIlxuICAgIH0pKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgV0VFS19EQVlfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGhlYWRlckNlbGxzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwge1xuICAgICAga2V5OiBpXG4gICAgfSwgd2Vla0RheXNMb2NhbGVbKGkgKyB3ZWVrRmlyc3REYXkpICUgV0VFS19EQVlfQ09VTlRdKSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2R5ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBnZXRDZWxsQ2xhc3NOYW1lID0gdXNlQ2VsbENsYXNzTmFtZSh7XG4gICAgY2VsbFByZWZpeENsczogY2VsbFByZWZpeENscyxcbiAgICB0b2RheTogdG9kYXksXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICByYW5nZWRWYWx1ZTogcHJlZml4Q29sdW1uID8gbnVsbCA6IHJhbmdlZFZhbHVlLFxuICAgIGhvdmVyUmFuZ2VkVmFsdWU6IHByZWZpeENvbHVtbiA/IG51bGwgOiBob3ZlclJhbmdlZFZhbHVlLFxuICAgIGlzU2FtZUNlbGw6IGZ1bmN0aW9uIGlzU2FtZUNlbGwoY3VycmVudCwgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gaXNTYW1lRGF0ZShnZW5lcmF0ZUNvbmZpZywgY3VycmVudCwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGlzSW5WaWV3OiBmdW5jdGlvbiBpc0luVmlldyhkYXRlKSB7XG4gICAgICByZXR1cm4gaXNTYW1lTW9udGgoZ2VuZXJhdGVDb25maWcsIGRhdGUsIHZpZXdEYXRlKTtcbiAgICB9LFxuICAgIG9mZnNldENlbGw6IGZ1bmN0aW9uIG9mZnNldENlbGwoZGF0ZSwgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVDb25maWcuYWRkRGF0ZShkYXRlLCBvZmZzZXQpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBnZXRDZWxsTm9kZSA9IGRhdGVSZW5kZXIgPyBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlUmVuZGVyKGRhdGUsIHRvZGF5KTtcbiAgfSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcm93TnVtOiByb3dDb3VudCxcbiAgICBjb2xOdW06IFdFRUtfREFZX0NPVU5ULFxuICAgIGJhc2VEYXRlOiBiYXNlRGF0ZSxcbiAgICBnZXRDZWxsTm9kZTogZ2V0Q2VsbE5vZGUsXG4gICAgZ2V0Q2VsbFRleHQ6IGdlbmVyYXRlQ29uZmlnLmdldERhdGUsXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogZ2V0Q2VsbENsYXNzTmFtZSxcbiAgICBnZXRDZWxsRGF0ZTogZ2VuZXJhdGVDb25maWcuYWRkRGF0ZSxcbiAgICB0aXRsZUNlbGw6IGZ1bmN0aW9uIHRpdGxlQ2VsbChkYXRlKSB7XG4gICAgICByZXR1cm4gZm9ybWF0VmFsdWUoZGF0ZSwge1xuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBoZWFkZXJDZWxsczogaGVhZGVyQ2VsbHNcbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlQm9keTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBQYW5lbENvbnRleHQgZnJvbSAnLi4vLi4vUGFuZWxDb250ZXh0JztcbmltcG9ydCB7IGZvcm1hdFZhbHVlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZVV0aWwnO1xuXG5mdW5jdGlvbiBEYXRlSGVhZGVyKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgdmlld0RhdGUgPSBwcm9wcy52aWV3RGF0ZSxcbiAgICAgIG9uTmV4dE1vbnRoID0gcHJvcHMub25OZXh0TW9udGgsXG4gICAgICBvblByZXZNb250aCA9IHByb3BzLm9uUHJldk1vbnRoLFxuICAgICAgb25OZXh0WWVhciA9IHByb3BzLm9uTmV4dFllYXIsXG4gICAgICBvblByZXZZZWFyID0gcHJvcHMub25QcmV2WWVhcixcbiAgICAgIG9uWWVhckNsaWNrID0gcHJvcHMub25ZZWFyQ2xpY2ssXG4gICAgICBvbk1vbnRoQ2xpY2sgPSBwcm9wcy5vbk1vbnRoQ2xpY2s7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYW5lbENvbnRleHQpLFxuICAgICAgaGlkZUhlYWRlciA9IF9SZWFjdCR1c2VDb250ZXh0LmhpZGVIZWFkZXI7XG5cbiAgaWYgKGhpZGVIZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoZWFkZXJQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKTtcbiAgdmFyIG1vbnRoc0xvY2FsZSA9IGxvY2FsZS5zaG9ydE1vbnRocyB8fCAoZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFNob3J0TW9udGhzID8gZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFNob3J0TW9udGhzKGxvY2FsZS5sb2NhbGUpIDogW10pO1xuICB2YXIgbW9udGggPSBnZW5lcmF0ZUNvbmZpZy5nZXRNb250aCh2aWV3RGF0ZSk7IC8vID09PT09PT09PT09PT09PT09PT0gTW9udGggJiBZZWFyID09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgeWVhck5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBrZXk6IFwieWVhclwiLFxuICAgIG9uQ2xpY2s6IG9uWWVhckNsaWNrLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCIteWVhci1idG5cIilcbiAgfSwgZm9ybWF0VmFsdWUodmlld0RhdGUsIHtcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBmb3JtYXQ6IGxvY2FsZS55ZWFyRm9ybWF0LFxuICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICB9KSk7XG4gIHZhciBtb250aE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBrZXk6IFwibW9udGhcIixcbiAgICBvbkNsaWNrOiBvbk1vbnRoQ2xpY2ssXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tb250aC1idG5cIilcbiAgfSwgbG9jYWxlLm1vbnRoRm9ybWF0ID8gZm9ybWF0VmFsdWUodmlld0RhdGUsIHtcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBmb3JtYXQ6IGxvY2FsZS5tb250aEZvcm1hdCxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgfSkgOiBtb250aHNMb2NhbGVbbW9udGhdKTtcbiAgdmFyIG1vbnRoWWVhck5vZGVzID0gbG9jYWxlLm1vbnRoQmVmb3JlWWVhciA/IFttb250aE5vZGUsIHllYXJOb2RlXSA6IFt5ZWFyTm9kZSwgbW9udGhOb2RlXTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBoZWFkZXJQcmVmaXhDbHMsXG4gICAgb25TdXBlclByZXY6IG9uUHJldlllYXIsXG4gICAgb25QcmV2OiBvblByZXZNb250aCxcbiAgICBvbk5leHQ6IG9uTmV4dE1vbnRoLFxuICAgIG9uU3VwZXJOZXh0OiBvbk5leHRZZWFyXG4gIH0pLCBtb250aFllYXJOb2Rlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVIZWFkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERhdGVCb2R5IGZyb20gJy4vRGF0ZUJvZHknO1xuaW1wb3J0IERhdGVIZWFkZXIgZnJvbSAnLi9EYXRlSGVhZGVyJztcbmltcG9ydCB7IFdFRUtfREFZX0NPVU5UIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZVV0aWwnO1xuaW1wb3J0IHsgY3JlYXRlS2V5RG93bkhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy91aVV0aWwnO1xudmFyIERBVEVfUk9XX0NPVU5UID0gNjtcblxuZnVuY3Rpb24gRGF0ZVBhbmVsKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBfcHJvcHMkcGFuZWxOYW1lID0gcHJvcHMucGFuZWxOYW1lLFxuICAgICAgcGFuZWxOYW1lID0gX3Byb3BzJHBhbmVsTmFtZSA9PT0gdm9pZCAwID8gJ2RhdGUnIDogX3Byb3BzJHBhbmVsTmFtZSxcbiAgICAgIGtleWJvYXJkQ29uZmlnID0gcHJvcHMua2V5Ym9hcmRDb25maWcsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBvcGVyYXRpb25SZWYgPSBwcm9wcy5vcGVyYXRpb25SZWYsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZpZXdEYXRlID0gcHJvcHMudmlld0RhdGUsXG4gICAgICBvblZpZXdEYXRlQ2hhbmdlID0gcHJvcHMub25WaWV3RGF0ZUNoYW5nZSxcbiAgICAgIG9uUGFuZWxDaGFuZ2UgPSBwcm9wcy5vblBhbmVsQ2hhbmdlLFxuICAgICAgX29uU2VsZWN0ID0gcHJvcHMub25TZWxlY3Q7XG4gIHZhciBwYW5lbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChwYW5lbE5hbWUsIFwiLXBhbmVsXCIpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIG9wZXJhdGlvblJlZi5jdXJyZW50ID0ge1xuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlS2V5RG93bkhhbmRsZXIoZXZlbnQsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBvbkxlZnRSaWdodDogZnVuY3Rpb24gb25MZWZ0UmlnaHQoZGlmZikge1xuICAgICAgICAgIF9vblNlbGVjdChnZW5lcmF0ZUNvbmZpZy5hZGREYXRlKHZhbHVlIHx8IHZpZXdEYXRlLCBkaWZmKSwgJ2tleScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkN0cmxMZWZ0UmlnaHQ6IGZ1bmN0aW9uIG9uQ3RybExlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYpLCAna2V5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBEb3duOiBmdW5jdGlvbiBvblVwRG93bihkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZERhdGUodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYgKiBXRUVLX0RBWV9DT1VOVCksICdrZXknKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25QYWdlVXBEb3duOiBmdW5jdGlvbiBvblBhZ2VVcERvd24oZGlmZikge1xuICAgICAgICAgIF9vblNlbGVjdChnZW5lcmF0ZUNvbmZpZy5hZGRNb250aCh2YWx1ZSB8fCB2aWV3RGF0ZSwgZGlmZiksICdrZXknKTtcbiAgICAgICAgfVxuICAgICAgfSwga2V5Ym9hcmRDb25maWcpKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09IFZpZXcgT3BlcmF0aW9uID09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9uWWVhckNoYW5nZSA9IGZ1bmN0aW9uIG9uWWVhckNoYW5nZShkaWZmKSB7XG4gICAgdmFyIG5ld0RhdGUgPSBnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKHZpZXdEYXRlLCBkaWZmKTtcbiAgICBvblZpZXdEYXRlQ2hhbmdlKG5ld0RhdGUpO1xuICAgIG9uUGFuZWxDaGFuZ2UobnVsbCwgbmV3RGF0ZSk7XG4gIH07XG5cbiAgdmFyIG9uTW9udGhDaGFuZ2UgPSBmdW5jdGlvbiBvbk1vbnRoQ2hhbmdlKGRpZmYpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLmFkZE1vbnRoKHZpZXdEYXRlLCBkaWZmKTtcbiAgICBvblZpZXdEYXRlQ2hhbmdlKG5ld0RhdGUpO1xuICAgIG9uUGFuZWxDaGFuZ2UobnVsbCwgbmV3RGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocGFuZWxQcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocGFuZWxQcmVmaXhDbHMsIFwiLWFjdGl2ZVwiKSwgYWN0aXZlKSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIHZpZXdEYXRlOiB2aWV3RGF0ZSAvLyBWaWV3IE9wZXJhdGlvblxuICAgICxcbiAgICBvblByZXZZZWFyOiBmdW5jdGlvbiBvblByZXZZZWFyKCkge1xuICAgICAgb25ZZWFyQ2hhbmdlKC0xKTtcbiAgICB9LFxuICAgIG9uTmV4dFllYXI6IGZ1bmN0aW9uIG9uTmV4dFllYXIoKSB7XG4gICAgICBvblllYXJDaGFuZ2UoMSk7XG4gICAgfSxcbiAgICBvblByZXZNb250aDogZnVuY3Rpb24gb25QcmV2TW9udGgoKSB7XG4gICAgICBvbk1vbnRoQ2hhbmdlKC0xKTtcbiAgICB9LFxuICAgIG9uTmV4dE1vbnRoOiBmdW5jdGlvbiBvbk5leHRNb250aCgpIHtcbiAgICAgIG9uTW9udGhDaGFuZ2UoMSk7XG4gICAgfSxcbiAgICBvbk1vbnRoQ2xpY2s6IGZ1bmN0aW9uIG9uTW9udGhDbGljaygpIHtcbiAgICAgIG9uUGFuZWxDaGFuZ2UoJ21vbnRoJywgdmlld0RhdGUpO1xuICAgIH0sXG4gICAgb25ZZWFyQ2xpY2s6IGZ1bmN0aW9uIG9uWWVhckNsaWNrKCkge1xuICAgICAgb25QYW5lbENoYW5nZSgneWVhcicsIHZpZXdEYXRlKTtcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUJvZHksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlKSB7XG4gICAgICByZXR1cm4gX29uU2VsZWN0KGRhdGUsICdtb3VzZScpO1xuICAgIH0sXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIHZpZXdEYXRlOiB2aWV3RGF0ZSxcbiAgICByb3dDb3VudDogREFURV9ST1dfQ09VTlRcbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVBhbmVsOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IERhdGVQYW5lbCBmcm9tICcuLi9EYXRlUGFuZWwnO1xuaW1wb3J0IFRpbWVQYW5lbCBmcm9tICcuLi9UaW1lUGFuZWwnO1xuaW1wb3J0IHsgdHVwbGUgfSBmcm9tICcuLi8uLi91dGlscy9taXNjVXRpbCc7XG5pbXBvcnQgeyBzZXREYXRlVGltZSBhcyBzZXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZVV0aWwnO1xudmFyIEFDVElWRV9QQU5FTCA9IHR1cGxlKCdkYXRlJywgJ3RpbWUnKTtcblxuZnVuY3Rpb24gRGF0ZXRpbWVQYW5lbChwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgb3BlcmF0aW9uUmVmID0gcHJvcHMub3BlcmF0aW9uUmVmLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZFRpbWUgPSBwcm9wcy5kaXNhYmxlZFRpbWUsXG4gICAgICBzaG93VGltZSA9IHByb3BzLnNob3dUaW1lLFxuICAgICAgb25TZWxlY3QgPSBwcm9wcy5vblNlbGVjdDtcbiAgdmFyIHBhbmVsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kYXRldGltZS1wYW5lbFwiKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGFjdGl2ZVBhbmVsID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEFjdGl2ZVBhbmVsID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgZGF0ZU9wZXJhdGlvblJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciB0aW1lT3BlcmF0aW9uUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIHRpbWVQcm9wcyA9IF90eXBlb2Yoc2hvd1RpbWUpID09PSAnb2JqZWN0JyA/IF9vYmplY3RTcHJlYWQoe30sIHNob3dUaW1lKSA6IHt9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGdldE5leHRBY3RpdmUob2Zmc2V0KSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gQUNUSVZFX1BBTkVMLmluZGV4T2YoYWN0aXZlUGFuZWwpICsgb2Zmc2V0O1xuICAgIHZhciBuZXh0QWN0aXZlUGFuZWwgPSBBQ1RJVkVfUEFORUxbYWN0aXZlSW5kZXhdIHx8IG51bGw7XG4gICAgcmV0dXJuIG5leHRBY3RpdmVQYW5lbDtcbiAgfVxuXG4gIHZhciBvbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgIGlmICh0aW1lT3BlcmF0aW9uUmVmLmN1cnJlbnQub25CbHVyKSB7XG4gICAgICB0aW1lT3BlcmF0aW9uUmVmLmN1cnJlbnQub25CbHVyKGUpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVBhbmVsKG51bGwpO1xuICB9O1xuXG4gIG9wZXJhdGlvblJlZi5jdXJyZW50ID0ge1xuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAvLyBTd2l0Y2ggYWN0aXZlIHBhbmVsXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleUNvZGUuVEFCKSB7XG4gICAgICAgIHZhciBuZXh0QWN0aXZlUGFuZWwgPSBnZXROZXh0QWN0aXZlKGV2ZW50LnNoaWZ0S2V5ID8gLTEgOiAxKTtcbiAgICAgICAgc2V0QWN0aXZlUGFuZWwobmV4dEFjdGl2ZVBhbmVsKTtcblxuICAgICAgICBpZiAobmV4dEFjdGl2ZVBhbmVsKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBPcGVyYXRlIG9uIGN1cnJlbnQgYWN0aXZlIHBhbmVsXG5cblxuICAgICAgaWYgKGFjdGl2ZVBhbmVsKSB7XG4gICAgICAgIHZhciByZWYgPSBhY3RpdmVQYW5lbCA9PT0gJ2RhdGUnID8gZGF0ZU9wZXJhdGlvblJlZiA6IHRpbWVPcGVyYXRpb25SZWY7XG5cbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50Lm9uS2V5RG93bikge1xuICAgICAgICAgIHJlZi5jdXJyZW50Lm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gU3dpdGNoIGZpcnN0IGFjdGl2ZSBwYW5lbCBpZiBvcGVyYXRlIHdpdGhvdXQgcGFuZWxcblxuXG4gICAgICBpZiAoW0tleUNvZGUuTEVGVCwgS2V5Q29kZS5SSUdIVCwgS2V5Q29kZS5VUCwgS2V5Q29kZS5ET1dOXS5pbmNsdWRlcyhldmVudC53aGljaCkpIHtcbiAgICAgICAgc2V0QWN0aXZlUGFuZWwoJ2RhdGUnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIG9uQ2xvc2U6IG9uQmx1clxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRXZlbnRzID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbkludGVybmFsU2VsZWN0ID0gZnVuY3Rpb24gb25JbnRlcm5hbFNlbGVjdChkYXRlLCBzb3VyY2UpIHtcbiAgICB2YXIgc2VsZWN0ZWREYXRlID0gZGF0ZTtcblxuICAgIGlmIChzb3VyY2UgPT09ICdkYXRlJyAmJiAhdmFsdWUgJiYgdGltZVByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgLy8gRGF0ZSB3aXRoIHRpbWUgZGVmYXVsdFZhbHVlXG4gICAgICBzZWxlY3RlZERhdGUgPSBnZW5lcmF0ZUNvbmZpZy5zZXRIb3VyKHNlbGVjdGVkRGF0ZSwgZ2VuZXJhdGVDb25maWcuZ2V0SG91cih0aW1lUHJvcHMuZGVmYXVsdFZhbHVlKSk7XG4gICAgICBzZWxlY3RlZERhdGUgPSBnZW5lcmF0ZUNvbmZpZy5zZXRNaW51dGUoc2VsZWN0ZWREYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXRNaW51dGUodGltZVByb3BzLmRlZmF1bHRWYWx1ZSkpO1xuICAgICAgc2VsZWN0ZWREYXRlID0gZ2VuZXJhdGVDb25maWcuc2V0U2Vjb25kKHNlbGVjdGVkRGF0ZSwgZ2VuZXJhdGVDb25maWcuZ2V0U2Vjb25kKHRpbWVQcm9wcy5kZWZhdWx0VmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3RpbWUnICYmICF2YWx1ZSAmJiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkRGF0ZSA9IGdlbmVyYXRlQ29uZmlnLnNldFllYXIoc2VsZWN0ZWREYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKGRlZmF1bHRWYWx1ZSkpO1xuICAgICAgc2VsZWN0ZWREYXRlID0gZ2VuZXJhdGVDb25maWcuc2V0TW9udGgoc2VsZWN0ZWREYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXRNb250aChkZWZhdWx0VmFsdWUpKTtcbiAgICAgIHNlbGVjdGVkRGF0ZSA9IGdlbmVyYXRlQ29uZmlnLnNldERhdGUoc2VsZWN0ZWREYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXREYXRlKGRlZmF1bHRWYWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgb25TZWxlY3Qoc2VsZWN0ZWREYXRlLCAnbW91c2UnKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgZGlzYWJsZWRUaW1lcyA9IGRpc2FibGVkVGltZSA/IGRpc2FibGVkVGltZSh2YWx1ZSB8fCBudWxsKSA6IHt9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwYW5lbFByZWZpeENscywgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwYW5lbFByZWZpeENscywgXCItYWN0aXZlXCIpLCBhY3RpdmVQYW5lbCkpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQYW5lbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgb3BlcmF0aW9uUmVmOiBkYXRlT3BlcmF0aW9uUmVmLFxuICAgIGFjdGl2ZTogYWN0aXZlUGFuZWwgPT09ICdkYXRlJyxcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZGF0ZSkge1xuICAgICAgb25JbnRlcm5hbFNlbGVjdChzZXRUaW1lKGdlbmVyYXRlQ29uZmlnLCBkYXRlLCBzaG93VGltZSAmJiBfdHlwZW9mKHNob3dUaW1lKSA9PT0gJ29iamVjdCcgPyBzaG93VGltZS5kZWZhdWx0VmFsdWUgOiBudWxsKSwgJ2RhdGUnKTtcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGltZVBhbmVsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmb3JtYXQ6IHVuZGVmaW5lZFxuICB9LCB0aW1lUHJvcHMsIGRpc2FibGVkVGltZXMsIHtcbiAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICBvcGVyYXRpb25SZWY6IHRpbWVPcGVyYXRpb25SZWYsXG4gICAgYWN0aXZlOiBhY3RpdmVQYW5lbCA9PT0gJ3RpbWUnLFxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlKSB7XG4gICAgICBvbkludGVybmFsU2VsZWN0KGRhdGUsICd0aW1lJyk7XG4gICAgfVxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRldGltZVBhbmVsOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFQ0FERV9ESVNUQU5DRV9DT1VOVCwgREVDQURFX1VOSVRfRElGRiB9IGZyb20gJy4nO1xuaW1wb3J0IFBhbmVsQm9keSBmcm9tICcuLi9QYW5lbEJvZHknO1xuZXhwb3J0IHZhciBERUNBREVfQ09MX0NPVU5UID0gMztcbnZhciBERUNBREVfUk9XX0NPVU5UID0gNDtcblxuZnVuY3Rpb24gRGVjYWRlQm9keShwcm9wcykge1xuICB2YXIgREVDQURFX1VOSVRfRElGRl9ERVMgPSBERUNBREVfVU5JVF9ESUZGIC0gMTtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHZpZXdEYXRlID0gcHJvcHMudmlld0RhdGUsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnO1xuICB2YXIgY2VsbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTtcbiAgdmFyIHllYXJOdW1iZXIgPSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKHZpZXdEYXRlKTtcbiAgdmFyIGRlY2FkZVllYXJOdW1iZXIgPSBNYXRoLmZsb29yKHllYXJOdW1iZXIgLyBERUNBREVfVU5JVF9ESUZGKSAqIERFQ0FERV9VTklUX0RJRkY7XG4gIHZhciBzdGFydERlY2FkZVllYXIgPSBNYXRoLmZsb29yKHllYXJOdW1iZXIgLyBERUNBREVfRElTVEFOQ0VfQ09VTlQpICogREVDQURFX0RJU1RBTkNFX0NPVU5UO1xuICB2YXIgZW5kRGVjYWRlWWVhciA9IHN0YXJ0RGVjYWRlWWVhciArIERFQ0FERV9ESVNUQU5DRV9DT1VOVCAtIDE7XG4gIHZhciBiYXNlRGVjYWRlWWVhciA9IGdlbmVyYXRlQ29uZmlnLnNldFllYXIodmlld0RhdGUsIHN0YXJ0RGVjYWRlWWVhciAtIE1hdGguY2VpbCgoREVDQURFX0NPTF9DT1VOVCAqIERFQ0FERV9ST1dfQ09VTlQgKiBERUNBREVfVU5JVF9ESUZGIC0gREVDQURFX0RJU1RBTkNFX0NPVU5UKSAvIDIpKTtcblxuICB2YXIgZ2V0Q2VsbENsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldENlbGxDbGFzc05hbWUoZGF0ZSkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIHN0YXJ0RGVjYWRlTnVtYmVyID0gZ2VuZXJhdGVDb25maWcuZ2V0WWVhcihkYXRlKTtcbiAgICB2YXIgZW5kRGVjYWRlTnVtYmVyID0gc3RhcnREZWNhZGVOdW1iZXIgKyBERUNBREVfVU5JVF9ESUZGX0RFUztcbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItaW4tdmlld1wiKSwgc3RhcnREZWNhZGVZZWFyIDw9IHN0YXJ0RGVjYWRlTnVtYmVyICYmIGVuZERlY2FkZU51bWJlciA8PSBlbmREZWNhZGVZZWFyKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXNlbGVjdGVkXCIpLCBzdGFydERlY2FkZU51bWJlciA9PT0gZGVjYWRlWWVhck51bWJlciksIF9yZWY7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcm93TnVtOiBERUNBREVfUk9XX0NPVU5ULFxuICAgIGNvbE51bTogREVDQURFX0NPTF9DT1VOVCxcbiAgICBiYXNlRGF0ZTogYmFzZURlY2FkZVllYXIsXG4gICAgZ2V0Q2VsbFRleHQ6IGZ1bmN0aW9uIGdldENlbGxUZXh0KGRhdGUpIHtcbiAgICAgIHZhciBzdGFydERlY2FkZU51bWJlciA9IGdlbmVyYXRlQ29uZmlnLmdldFllYXIoZGF0ZSk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoc3RhcnREZWNhZGVOdW1iZXIsIFwiLVwiKS5jb25jYXQoc3RhcnREZWNhZGVOdW1iZXIgKyBERUNBREVfVU5JVF9ESUZGX0RFUyk7XG4gICAgfSxcbiAgICBnZXRDZWxsQ2xhc3NOYW1lOiBnZXRDZWxsQ2xhc3NOYW1lLFxuICAgIGdldENlbGxEYXRlOiBmdW5jdGlvbiBnZXRDZWxsRGF0ZShkYXRlLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKGRhdGUsIG9mZnNldCAqIERFQ0FERV9VTklUX0RJRkYpO1xuICAgIH1cbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNhZGVCb2R5OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IHsgREVDQURFX0RJU1RBTkNFX0NPVU5UIH0gZnJvbSAnLic7XG5pbXBvcnQgUGFuZWxDb250ZXh0IGZyb20gJy4uLy4uL1BhbmVsQ29udGV4dCc7XG5cbmZ1bmN0aW9uIERlY2FkZUhlYWRlcihwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHZpZXdEYXRlID0gcHJvcHMudmlld0RhdGUsXG4gICAgICBvblByZXZEZWNhZGVzID0gcHJvcHMub25QcmV2RGVjYWRlcyxcbiAgICAgIG9uTmV4dERlY2FkZXMgPSBwcm9wcy5vbk5leHREZWNhZGVzO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFuZWxDb250ZXh0KSxcbiAgICAgIGhpZGVIZWFkZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5oaWRlSGVhZGVyO1xuXG4gIGlmIChoaWRlSGVhZGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaGVhZGVyUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIik7XG4gIHZhciB5ZWFyTnVtYmVyID0gZ2VuZXJhdGVDb25maWcuZ2V0WWVhcih2aWV3RGF0ZSk7XG4gIHZhciBzdGFydFllYXIgPSBNYXRoLmZsb29yKHllYXJOdW1iZXIgLyBERUNBREVfRElTVEFOQ0VfQ09VTlQpICogREVDQURFX0RJU1RBTkNFX0NPVU5UO1xuICB2YXIgZW5kWWVhciA9IHN0YXJ0WWVhciArIERFQ0FERV9ESVNUQU5DRV9DT1VOVCAtIDE7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogaGVhZGVyUHJlZml4Q2xzLFxuICAgIG9uU3VwZXJQcmV2OiBvblByZXZEZWNhZGVzLFxuICAgIG9uU3VwZXJOZXh0OiBvbk5leHREZWNhZGVzXG4gIH0pLCBzdGFydFllYXIsIFwiLVwiLCBlbmRZZWFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjYWRlSGVhZGVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlY2FkZUhlYWRlciBmcm9tICcuL0RlY2FkZUhlYWRlcic7XG5pbXBvcnQgRGVjYWRlQm9keSwgeyBERUNBREVfQ09MX0NPVU5UIH0gZnJvbSAnLi9EZWNhZGVCb2R5JztcbmltcG9ydCB7IGNyZWF0ZUtleURvd25IYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdWlVdGlsJztcbmV4cG9ydCB2YXIgREVDQURFX1VOSVRfRElGRiA9IDEwO1xuZXhwb3J0IHZhciBERUNBREVfRElTVEFOQ0VfQ09VTlQgPSBERUNBREVfVU5JVF9ESUZGICogMTA7XG5cbmZ1bmN0aW9uIERlY2FkZVBhbmVsKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBvblZpZXdEYXRlQ2hhbmdlID0gcHJvcHMub25WaWV3RGF0ZUNoYW5nZSxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb3BlcmF0aW9uUmVmID0gcHJvcHMub3BlcmF0aW9uUmVmLFxuICAgICAgb25TZWxlY3QgPSBwcm9wcy5vblNlbGVjdCxcbiAgICAgIG9uUGFuZWxDaGFuZ2UgPSBwcm9wcy5vblBhbmVsQ2hhbmdlO1xuICB2YXIgcGFuZWxQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRlY2FkZS1wYW5lbFwiKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gS2V5Ym9hcmQgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBvcGVyYXRpb25SZWYuY3VycmVudCA9IHtcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUtleURvd25IYW5kbGVyKGV2ZW50LCB7XG4gICAgICAgIG9uTGVmdFJpZ2h0OiBmdW5jdGlvbiBvbkxlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgb25TZWxlY3QoZ2VuZXJhdGVDb25maWcuYWRkWWVhcih2aWV3RGF0ZSwgZGlmZiAqIERFQ0FERV9VTklUX0RJRkYpLCAna2V5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ3RybExlZnRSaWdodDogZnVuY3Rpb24gb25DdHJsTGVmdFJpZ2h0KGRpZmYpIHtcbiAgICAgICAgICBvblNlbGVjdChnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKHZpZXdEYXRlLCBkaWZmICogREVDQURFX0RJU1RBTkNFX0NPVU5UKSwgJ2tleScpO1xuICAgICAgICB9LFxuICAgICAgICBvblVwRG93bjogZnVuY3Rpb24gb25VcERvd24oZGlmZikge1xuICAgICAgICAgIG9uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmlld0RhdGUsIGRpZmYgKiBERUNBREVfVU5JVF9ESUZGICogREVDQURFX0NPTF9DT1VOVCksICdrZXknKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcigpIHtcbiAgICAgICAgICBvblBhbmVsQ2hhbmdlKCd5ZWFyJywgdmlld0RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09IFZpZXcgT3BlcmF0aW9uID09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9uRGVjYWRlc0NoYW5nZSA9IGZ1bmN0aW9uIG9uRGVjYWRlc0NoYW5nZShkaWZmKSB7XG4gICAgdmFyIG5ld0RhdGUgPSBnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKHZpZXdEYXRlLCBkaWZmICogREVDQURFX0RJU1RBTkNFX0NPVU5UKTtcbiAgICBvblZpZXdEYXRlQ2hhbmdlKG5ld0RhdGUpO1xuICAgIG9uUGFuZWxDaGFuZ2UobnVsbCwgbmV3RGF0ZSk7XG4gIH07XG5cbiAgdmFyIG9uSW50ZXJuYWxTZWxlY3QgPSBmdW5jdGlvbiBvbkludGVybmFsU2VsZWN0KGRhdGUpIHtcbiAgICBvblNlbGVjdChkYXRlLCAnbW91c2UnKTtcbiAgICBvblBhbmVsQ2hhbmdlKCd5ZWFyJywgZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHBhbmVsUHJlZml4Q2xzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlY2FkZUhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb25QcmV2RGVjYWRlczogZnVuY3Rpb24gb25QcmV2RGVjYWRlcygpIHtcbiAgICAgIG9uRGVjYWRlc0NoYW5nZSgtMSk7XG4gICAgfSxcbiAgICBvbk5leHREZWNhZGVzOiBmdW5jdGlvbiBvbk5leHREZWNhZGVzKCkge1xuICAgICAgb25EZWNhZGVzQ2hhbmdlKDEpO1xuICAgIH1cbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWNhZGVCb2R5LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBvblNlbGVjdDogb25JbnRlcm5hbFNlbGVjdFxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNhZGVQYW5lbDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFuZWxDb250ZXh0IGZyb20gJy4uL1BhbmVsQ29udGV4dCc7XG52YXIgSElEREVOX1NUWUxFID0ge1xuICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xufTtcblxuZnVuY3Rpb24gSGVhZGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgX3JlZiRwcmV2SWNvbiA9IF9yZWYucHJldkljb24sXG4gICAgICBwcmV2SWNvbiA9IF9yZWYkcHJldkljb24gPT09IHZvaWQgMCA/IFwiXFx1MjAzOVwiIDogX3JlZiRwcmV2SWNvbixcbiAgICAgIF9yZWYkbmV4dEljb24gPSBfcmVmLm5leHRJY29uLFxuICAgICAgbmV4dEljb24gPSBfcmVmJG5leHRJY29uID09PSB2b2lkIDAgPyBcIlxcdTIwM0FcIiA6IF9yZWYkbmV4dEljb24sXG4gICAgICBfcmVmJHN1cGVyUHJldkljb24gPSBfcmVmLnN1cGVyUHJldkljb24sXG4gICAgICBzdXBlclByZXZJY29uID0gX3JlZiRzdXBlclByZXZJY29uID09PSB2b2lkIDAgPyBcIlxceEFCXCIgOiBfcmVmJHN1cGVyUHJldkljb24sXG4gICAgICBfcmVmJHN1cGVyTmV4dEljb24gPSBfcmVmLnN1cGVyTmV4dEljb24sXG4gICAgICBzdXBlck5leHRJY29uID0gX3JlZiRzdXBlck5leHRJY29uID09PSB2b2lkIDAgPyBcIlxceEJCXCIgOiBfcmVmJHN1cGVyTmV4dEljb24sXG4gICAgICBvblN1cGVyUHJldiA9IF9yZWYub25TdXBlclByZXYsXG4gICAgICBvblN1cGVyTmV4dCA9IF9yZWYub25TdXBlck5leHQsXG4gICAgICBvblByZXYgPSBfcmVmLm9uUHJldixcbiAgICAgIG9uTmV4dCA9IF9yZWYub25OZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFuZWxDb250ZXh0KSxcbiAgICAgIGhpZGVOZXh0QnRuID0gX1JlYWN0JHVzZUNvbnRleHQuaGlkZU5leHRCdG4sXG4gICAgICBoaWRlUHJldkJ0biA9IF9SZWFjdCR1c2VDb250ZXh0LmhpZGVQcmV2QnRuO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHNcbiAgfSwgb25TdXBlclByZXYgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgb25DbGljazogb25TdXBlclByZXYsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1wcmV2LWJ0blwiKSxcbiAgICBzdHlsZTogaGlkZVByZXZCdG4gPyBISURERU5fU1RZTEUgOiB7fVxuICB9LCBzdXBlclByZXZJY29uKSwgb25QcmV2ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IG9uUHJldixcbiAgICB0YWJJbmRleDogLTEsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByZXYtYnRuXCIpLFxuICAgIHN0eWxlOiBoaWRlUHJldkJ0biA/IEhJRERFTl9TVFlMRSA6IHt9XG4gIH0sIHByZXZJY29uKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi12aWV3XCIpXG4gIH0sIGNoaWxkcmVuKSwgb25OZXh0ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IG9uTmV4dCxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5leHQtYnRuXCIpLFxuICAgIHN0eWxlOiBoaWRlTmV4dEJ0biA/IEhJRERFTl9TVFlMRSA6IHt9XG4gIH0sIG5leHRJY29uKSwgb25TdXBlck5leHQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgb25DbGljazogb25TdXBlck5leHQsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1uZXh0LWJ0blwiKSxcbiAgICBzdHlsZTogaGlkZU5leHRCdG4gPyBISURERU5fU1RZTEUgOiB7fVxuICB9LCBzdXBlck5leHRJY29uKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdFZhbHVlLCBpc1NhbWVNb250aCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGVVdGlsJztcbmltcG9ydCBSYW5nZUNvbnRleHQgZnJvbSAnLi4vLi4vUmFuZ2VDb250ZXh0JztcbmltcG9ydCB1c2VDZWxsQ2xhc3NOYW1lIGZyb20gJy4uLy4uL2hvb2tzL3VzZUNlbGxDbGFzc05hbWUnO1xuaW1wb3J0IFBhbmVsQm9keSBmcm9tICcuLi9QYW5lbEJvZHknO1xuZXhwb3J0IHZhciBNT05USF9DT0xfQ09VTlQgPSAzO1xudmFyIE1PTlRIX1JPV19DT1VOVCA9IDQ7XG5cbmZ1bmN0aW9uIE1vbnRoQm9keShwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZpZXdEYXRlID0gcHJvcHMudmlld0RhdGUsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgbW9udGhDZWxsUmVuZGVyID0gcHJvcHMubW9udGhDZWxsUmVuZGVyO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUmFuZ2VDb250ZXh0KSxcbiAgICAgIHJhbmdlZFZhbHVlID0gX1JlYWN0JHVzZUNvbnRleHQucmFuZ2VkVmFsdWUsXG4gICAgICBob3ZlclJhbmdlZFZhbHVlID0gX1JlYWN0JHVzZUNvbnRleHQuaG92ZXJSYW5nZWRWYWx1ZTtcblxuICB2YXIgY2VsbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTtcbiAgdmFyIGdldENlbGxDbGFzc05hbWUgPSB1c2VDZWxsQ2xhc3NOYW1lKHtcbiAgICBjZWxsUHJlZml4Q2xzOiBjZWxsUHJlZml4Q2xzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgcmFuZ2VkVmFsdWU6IHJhbmdlZFZhbHVlLFxuICAgIGhvdmVyUmFuZ2VkVmFsdWU6IGhvdmVyUmFuZ2VkVmFsdWUsXG4gICAgaXNTYW1lQ2VsbDogZnVuY3Rpb24gaXNTYW1lQ2VsbChjdXJyZW50LCB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBpc1NhbWVNb250aChnZW5lcmF0ZUNvbmZpZywgY3VycmVudCwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGlzSW5WaWV3OiBmdW5jdGlvbiBpc0luVmlldygpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgb2Zmc2V0Q2VsbDogZnVuY3Rpb24gb2Zmc2V0Q2VsbChkYXRlLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5hZGRNb250aChkYXRlLCBvZmZzZXQpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBtb250aHNMb2NhbGUgPSBsb2NhbGUuc2hvcnRNb250aHMgfHwgKGdlbmVyYXRlQ29uZmlnLmxvY2FsZS5nZXRTaG9ydE1vbnRocyA/IGdlbmVyYXRlQ29uZmlnLmxvY2FsZS5nZXRTaG9ydE1vbnRocyhsb2NhbGUubG9jYWxlKSA6IFtdKTtcbiAgdmFyIGJhc2VNb250aCA9IGdlbmVyYXRlQ29uZmlnLnNldE1vbnRoKHZpZXdEYXRlLCAwKTtcbiAgdmFyIGdldENlbGxOb2RlID0gbW9udGhDZWxsUmVuZGVyID8gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gbW9udGhDZWxsUmVuZGVyKGRhdGUsIGxvY2FsZSk7XG4gIH0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJvd051bTogTU9OVEhfUk9XX0NPVU5ULFxuICAgIGNvbE51bTogTU9OVEhfQ09MX0NPVU5ULFxuICAgIGJhc2VEYXRlOiBiYXNlTW9udGgsXG4gICAgZ2V0Q2VsbE5vZGU6IGdldENlbGxOb2RlLFxuICAgIGdldENlbGxUZXh0OiBmdW5jdGlvbiBnZXRDZWxsVGV4dChkYXRlKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLm1vbnRoRm9ybWF0ID8gZm9ybWF0VmFsdWUoZGF0ZSwge1xuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgZm9ybWF0OiBsb2NhbGUubW9udGhGb3JtYXQsXG4gICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICAgICAgfSkgOiBtb250aHNMb2NhbGVbZ2VuZXJhdGVDb25maWcuZ2V0TW9udGgoZGF0ZSldO1xuICAgIH0sXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogZ2V0Q2VsbENsYXNzTmFtZSxcbiAgICBnZXRDZWxsRGF0ZTogZ2VuZXJhdGVDb25maWcuYWRkTW9udGgsXG4gICAgdGl0bGVDZWxsOiBmdW5jdGlvbiB0aXRsZUNlbGwoZGF0ZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKGRhdGUsIHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIGZvcm1hdDogJ1lZWVktTU0nLFxuICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aEJvZHk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgUGFuZWxDb250ZXh0IGZyb20gJy4uLy4uL1BhbmVsQ29udGV4dCc7XG5pbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGVVdGlsJztcblxuZnVuY3Rpb24gTW9udGhIZWFkZXIocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb25OZXh0WWVhciA9IHByb3BzLm9uTmV4dFllYXIsXG4gICAgICBvblByZXZZZWFyID0gcHJvcHMub25QcmV2WWVhcixcbiAgICAgIG9uWWVhckNsaWNrID0gcHJvcHMub25ZZWFyQ2xpY2s7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYW5lbENvbnRleHQpLFxuICAgICAgaGlkZUhlYWRlciA9IF9SZWFjdCR1c2VDb250ZXh0LmhpZGVIZWFkZXI7XG5cbiAgaWYgKGhpZGVIZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoZWFkZXJQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBoZWFkZXJQcmVmaXhDbHMsXG4gICAgb25TdXBlclByZXY6IG9uUHJldlllYXIsXG4gICAgb25TdXBlck5leHQ6IG9uTmV4dFllYXJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IG9uWWVhckNsaWNrLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi15ZWFyLWJ0blwiKVxuICB9LCBmb3JtYXRWYWx1ZSh2aWV3RGF0ZSwge1xuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGZvcm1hdDogbG9jYWxlLnllYXJGb3JtYXQsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoSGVhZGVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbnRoSGVhZGVyIGZyb20gJy4vTW9udGhIZWFkZXInO1xuaW1wb3J0IE1vbnRoQm9keSwgeyBNT05USF9DT0xfQ09VTlQgfSBmcm9tICcuL01vbnRoQm9keSc7XG5pbXBvcnQgeyBjcmVhdGVLZXlEb3duSGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3VpVXRpbCc7XG5cbmZ1bmN0aW9uIE1vbnRoUGFuZWwocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG9wZXJhdGlvblJlZiA9IHByb3BzLm9wZXJhdGlvblJlZixcbiAgICAgIG9uVmlld0RhdGVDaGFuZ2UgPSBwcm9wcy5vblZpZXdEYXRlQ2hhbmdlLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb25QYW5lbENoYW5nZSA9IHByb3BzLm9uUGFuZWxDaGFuZ2UsXG4gICAgICBfb25TZWxlY3QgPSBwcm9wcy5vblNlbGVjdDtcbiAgdmFyIHBhbmVsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tb250aC1wYW5lbFwiKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gS2V5Ym9hcmQgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBvcGVyYXRpb25SZWYuY3VycmVudCA9IHtcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUtleURvd25IYW5kbGVyKGV2ZW50LCB7XG4gICAgICAgIG9uTGVmdFJpZ2h0OiBmdW5jdGlvbiBvbkxlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZE1vbnRoKHZhbHVlIHx8IHZpZXdEYXRlLCBkaWZmKSwgJ2tleScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkN0cmxMZWZ0UmlnaHQ6IGZ1bmN0aW9uIG9uQ3RybExlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYpLCAna2V5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBEb3duOiBmdW5jdGlvbiBvblVwRG93bihkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZE1vbnRoKHZhbHVlIHx8IHZpZXdEYXRlLCBkaWZmICogTU9OVEhfQ09MX0NPVU5UKSwgJ2tleScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKCkge1xuICAgICAgICAgIG9uUGFuZWxDaGFuZ2UoJ2RhdGUnLCB2YWx1ZSB8fCB2aWV3RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT0gVmlldyBPcGVyYXRpb24gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb25ZZWFyQ2hhbmdlID0gZnVuY3Rpb24gb25ZZWFyQ2hhbmdlKGRpZmYpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmlld0RhdGUsIGRpZmYpO1xuICAgIG9uVmlld0RhdGVDaGFuZ2UobmV3RGF0ZSk7XG4gICAgb25QYW5lbENoYW5nZShudWxsLCBuZXdEYXRlKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogcGFuZWxQcmVmaXhDbHNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9udGhIZWFkZXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIG9uUHJldlllYXI6IGZ1bmN0aW9uIG9uUHJldlllYXIoKSB7XG4gICAgICBvblllYXJDaGFuZ2UoLTEpO1xuICAgIH0sXG4gICAgb25OZXh0WWVhcjogZnVuY3Rpb24gb25OZXh0WWVhcigpIHtcbiAgICAgIG9uWWVhckNoYW5nZSgxKTtcbiAgICB9LFxuICAgIG9uWWVhckNsaWNrOiBmdW5jdGlvbiBvblllYXJDbGljaygpIHtcbiAgICAgIG9uUGFuZWxDaGFuZ2UoJ3llYXInLCB2aWV3RGF0ZSk7XG4gICAgfVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vbnRoQm9keSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGRhdGUpIHtcbiAgICAgIF9vblNlbGVjdChkYXRlLCAnbW91c2UnKTtcblxuICAgICAgb25QYW5lbENoYW5nZSgnZGF0ZScsIGRhdGUpO1xuICAgIH1cbiAgfSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhQYW5lbDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFBhbmVsQ29udGV4dCBmcm9tICcuLi9QYW5lbENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0TGFzdERheSB9IGZyb20gJy4uL3V0aWxzL3RpbWVVdGlsJztcbmltcG9ydCB7IGdldENlbGxEYXRlRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbEJvZHkoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBkaXNhYmxlZERhdGUgPSBfcmVmLmRpc2FibGVkRGF0ZSxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIHBpY2tlciA9IF9yZWYucGlja2VyLFxuICAgICAgcm93TnVtID0gX3JlZi5yb3dOdW0sXG4gICAgICBjb2xOdW0gPSBfcmVmLmNvbE51bSxcbiAgICAgIHByZWZpeENvbHVtbiA9IF9yZWYucHJlZml4Q29sdW1uLFxuICAgICAgcm93Q2xhc3NOYW1lID0gX3JlZi5yb3dDbGFzc05hbWUsXG4gICAgICBiYXNlRGF0ZSA9IF9yZWYuYmFzZURhdGUsXG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lID0gX3JlZi5nZXRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0Q2VsbFRleHQgPSBfcmVmLmdldENlbGxUZXh0LFxuICAgICAgZ2V0Q2VsbE5vZGUgPSBfcmVmLmdldENlbGxOb2RlLFxuICAgICAgZ2V0Q2VsbERhdGUgPSBfcmVmLmdldENlbGxEYXRlLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBfcmVmLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgdGl0bGVDZWxsID0gX3JlZi50aXRsZUNlbGwsXG4gICAgICBoZWFkZXJDZWxscyA9IF9yZWYuaGVhZGVyQ2VsbHM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYW5lbENvbnRleHQpLFxuICAgICAgb25EYXRlTW91c2VFbnRlciA9IF9SZWFjdCR1c2VDb250ZXh0Lm9uRGF0ZU1vdXNlRW50ZXIsXG4gICAgICBvbkRhdGVNb3VzZUxlYXZlID0gX1JlYWN0JHVzZUNvbnRleHQub25EYXRlTW91c2VMZWF2ZSxcbiAgICAgIG1vZGUgPSBfUmVhY3QkdXNlQ29udGV4dC5tb2RlO1xuXG4gIHZhciBjZWxsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jZWxsXCIpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvZHkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciByb3dzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dOdW07IGkgKz0gMSkge1xuICAgIHZhciByb3cgPSBbXTtcbiAgICB2YXIgcm93U3RhcnREYXRlID0gdm9pZCAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoaikge1xuICAgICAgdmFyIF9vYmplY3RTcHJlYWQyO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gaSAqIGNvbE51bSArIGo7XG4gICAgICB2YXIgY3VycmVudERhdGUgPSBnZXRDZWxsRGF0ZShiYXNlRGF0ZSwgb2Zmc2V0KTtcbiAgICAgIHZhciBkaXNhYmxlZCA9IGdldENlbGxEYXRlRGlzYWJsZWQoe1xuICAgICAgICBjZWxsRGF0ZTogY3VycmVudERhdGUsXG4gICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgIGRpc2FibGVkRGF0ZTogZGlzYWJsZWREYXRlLFxuICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICByb3dTdGFydERhdGUgPSBjdXJyZW50RGF0ZTtcblxuICAgICAgICBpZiAocHJlZml4Q29sdW1uKSB7XG4gICAgICAgICAgcm93LnB1c2gocHJlZml4Q29sdW1uKHJvd1N0YXJ0RGF0ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0aXRsZSA9IHRpdGxlQ2VsbCAmJiB0aXRsZUNlbGwoY3VycmVudERhdGUpO1xuICAgICAgcm93LnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwge1xuICAgICAgICBrZXk6IGosXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNlbGxQcmVmaXhDbHMsIF9vYmplY3RTcHJlYWQoKF9vYmplY3RTcHJlYWQyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcIlwiLmNvbmNhdChjZWxsUHJlZml4Q2xzLCBcIi1zdGFydFwiKSwgZ2V0Q2VsbFRleHQoY3VycmVudERhdGUpID09PSAxIHx8IHBpY2tlciA9PT0gJ3llYXInICYmIE51bWJlcih0aXRsZSkgJSAxMCA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItZW5kXCIpLCB0aXRsZSA9PT0gZ2V0TGFzdERheShnZW5lcmF0ZUNvbmZpZywgY3VycmVudERhdGUpIHx8IHBpY2tlciA9PT0gJ3llYXInICYmIE51bWJlcih0aXRsZSkgJSAxMCA9PT0gOSksIF9vYmplY3RTcHJlYWQyKSwgZ2V0Q2VsbENsYXNzTmFtZShjdXJyZW50RGF0ZSkpKSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICBvblNlbGVjdChjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgICBpZiAoIWRpc2FibGVkICYmIG9uRGF0ZU1vdXNlRW50ZXIpIHtcbiAgICAgICAgICAgIG9uRGF0ZU1vdXNlRW50ZXIoY3VycmVudERhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiBvbkRhdGVNb3VzZUxlYXZlKSB7XG4gICAgICAgICAgICBvbkRhdGVNb3VzZUxlYXZlKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGdldENlbGxOb2RlID8gZ2V0Q2VsbE5vZGUoY3VycmVudERhdGUpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLWlubmVyXCIpXG4gICAgICB9LCBnZXRDZWxsVGV4dChjdXJyZW50RGF0ZSkpKSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29sTnVtOyBqICs9IDEpIHtcbiAgICAgIF9sb29wKGopO1xuICAgIH1cblxuICAgIHJvd3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7XG4gICAgICBrZXk6IGksXG4gICAgICBjbGFzc05hbWU6IHJvd0NsYXNzTmFtZSAmJiByb3dDbGFzc05hbWUocm93U3RhcnREYXRlKVxuICAgIH0sIHJvdykpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYm9keVwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKVxuICB9LCBoZWFkZXJDZWxscyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgaGVhZGVyQ2VsbHMpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCByb3dzKSkpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0VmFsdWUsIGlzU2FtZVF1YXJ0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlVXRpbCc7XG5pbXBvcnQgUmFuZ2VDb250ZXh0IGZyb20gJy4uLy4uL1JhbmdlQ29udGV4dCc7XG5pbXBvcnQgdXNlQ2VsbENsYXNzTmFtZSBmcm9tICcuLi8uLi9ob29rcy91c2VDZWxsQ2xhc3NOYW1lJztcbmltcG9ydCBQYW5lbEJvZHkgZnJvbSAnLi4vUGFuZWxCb2R5JztcbmV4cG9ydCB2YXIgUVVBUlRFUl9DT0xfQ09VTlQgPSA0O1xudmFyIFFVQVJURVJfUk9XX0NPVU5UID0gMTtcblxuZnVuY3Rpb24gUXVhcnRlckJvZHkocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFJhbmdlQ29udGV4dCksXG4gICAgICByYW5nZWRWYWx1ZSA9IF9SZWFjdCR1c2VDb250ZXh0LnJhbmdlZFZhbHVlLFxuICAgICAgaG92ZXJSYW5nZWRWYWx1ZSA9IF9SZWFjdCR1c2VDb250ZXh0LmhvdmVyUmFuZ2VkVmFsdWU7XG5cbiAgdmFyIGNlbGxQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNlbGxcIik7XG4gIHZhciBnZXRDZWxsQ2xhc3NOYW1lID0gdXNlQ2VsbENsYXNzTmFtZSh7XG4gICAgY2VsbFByZWZpeENsczogY2VsbFByZWZpeENscyxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgIHJhbmdlZFZhbHVlOiByYW5nZWRWYWx1ZSxcbiAgICBob3ZlclJhbmdlZFZhbHVlOiBob3ZlclJhbmdlZFZhbHVlLFxuICAgIGlzU2FtZUNlbGw6IGZ1bmN0aW9uIGlzU2FtZUNlbGwoY3VycmVudCwgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gaXNTYW1lUXVhcnRlcihnZW5lcmF0ZUNvbmZpZywgY3VycmVudCwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGlzSW5WaWV3OiBmdW5jdGlvbiBpc0luVmlldygpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgb2Zmc2V0Q2VsbDogZnVuY3Rpb24gb2Zmc2V0Q2VsbChkYXRlLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5hZGRNb250aChkYXRlLCBvZmZzZXQgKiAzKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgYmFzZVF1YXJ0ZXIgPSBnZW5lcmF0ZUNvbmZpZy5zZXREYXRlKGdlbmVyYXRlQ29uZmlnLnNldE1vbnRoKHZpZXdEYXRlLCAwKSwgMSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJvd051bTogUVVBUlRFUl9ST1dfQ09VTlQsXG4gICAgY29sTnVtOiBRVUFSVEVSX0NPTF9DT1VOVCxcbiAgICBiYXNlRGF0ZTogYmFzZVF1YXJ0ZXIsXG4gICAgZ2V0Q2VsbFRleHQ6IGZ1bmN0aW9uIGdldENlbGxUZXh0KGRhdGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXRWYWx1ZShkYXRlLCB7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBmb3JtYXQ6IGxvY2FsZS5xdWFydGVyRm9ybWF0IHx8ICdbUV1RJyxcbiAgICAgICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldENlbGxDbGFzc05hbWU6IGdldENlbGxDbGFzc05hbWUsXG4gICAgZ2V0Q2VsbERhdGU6IGZ1bmN0aW9uIGdldENlbGxEYXRlKGRhdGUsIG9mZnNldCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlQ29uZmlnLmFkZE1vbnRoKGRhdGUsIG9mZnNldCAqIDMpO1xuICAgIH0sXG4gICAgdGl0bGVDZWxsOiBmdW5jdGlvbiB0aXRsZUNlbGwoZGF0ZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKGRhdGUsIHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIGZvcm1hdDogJ1lZWVktW1FdUScsXG4gICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZ1xuICAgICAgfSk7XG4gICAgfVxuICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1YXJ0ZXJCb2R5OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IFBhbmVsQ29udGV4dCBmcm9tICcuLi8uLi9QYW5lbENvbnRleHQnO1xuaW1wb3J0IHsgZm9ybWF0VmFsdWUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlVXRpbCc7XG5cbmZ1bmN0aW9uIFF1YXJ0ZXJIZWFkZXIocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb25OZXh0WWVhciA9IHByb3BzLm9uTmV4dFllYXIsXG4gICAgICBvblByZXZZZWFyID0gcHJvcHMub25QcmV2WWVhcixcbiAgICAgIG9uWWVhckNsaWNrID0gcHJvcHMub25ZZWFyQ2xpY2s7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYW5lbENvbnRleHQpLFxuICAgICAgaGlkZUhlYWRlciA9IF9SZWFjdCR1c2VDb250ZXh0LmhpZGVIZWFkZXI7XG5cbiAgaWYgKGhpZGVIZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoZWFkZXJQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBoZWFkZXJQcmVmaXhDbHMsXG4gICAgb25TdXBlclByZXY6IG9uUHJldlllYXIsXG4gICAgb25TdXBlck5leHQ6IG9uTmV4dFllYXJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IG9uWWVhckNsaWNrLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi15ZWFyLWJ0blwiKVxuICB9LCBmb3JtYXRWYWx1ZSh2aWV3RGF0ZSwge1xuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGZvcm1hdDogbG9jYWxlLnllYXJGb3JtYXQsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnXG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1YXJ0ZXJIZWFkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVhcnRlckhlYWRlciBmcm9tICcuL1F1YXJ0ZXJIZWFkZXInO1xuaW1wb3J0IFF1YXJ0ZXJCb2R5IGZyb20gJy4vUXVhcnRlckJvZHknO1xuaW1wb3J0IHsgY3JlYXRlS2V5RG93bkhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy91aVV0aWwnO1xuXG5mdW5jdGlvbiBRdWFydGVyUGFuZWwocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG9wZXJhdGlvblJlZiA9IHByb3BzLm9wZXJhdGlvblJlZixcbiAgICAgIG9uVmlld0RhdGVDaGFuZ2UgPSBwcm9wcy5vblZpZXdEYXRlQ2hhbmdlLFxuICAgICAgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb25QYW5lbENoYW5nZSA9IHByb3BzLm9uUGFuZWxDaGFuZ2UsXG4gICAgICBfb25TZWxlY3QgPSBwcm9wcy5vblNlbGVjdDtcbiAgdmFyIHBhbmVsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1xdWFydGVyLXBhbmVsXCIpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIG9wZXJhdGlvblJlZi5jdXJyZW50ID0ge1xuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlS2V5RG93bkhhbmRsZXIoZXZlbnQsIHtcbiAgICAgICAgb25MZWZ0UmlnaHQ6IGZ1bmN0aW9uIG9uTGVmdFJpZ2h0KGRpZmYpIHtcbiAgICAgICAgICBfb25TZWxlY3QoZ2VuZXJhdGVDb25maWcuYWRkTW9udGgodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYgKiAzKSwgJ2tleScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkN0cmxMZWZ0UmlnaHQ6IGZ1bmN0aW9uIG9uQ3RybExlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYpLCAna2V5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBEb3duOiBmdW5jdGlvbiBvblVwRG93bihkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYpLCAna2V5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT0gVmlldyBPcGVyYXRpb24gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb25ZZWFyQ2hhbmdlID0gZnVuY3Rpb24gb25ZZWFyQ2hhbmdlKGRpZmYpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmlld0RhdGUsIGRpZmYpO1xuICAgIG9uVmlld0RhdGVDaGFuZ2UobmV3RGF0ZSk7XG4gICAgb25QYW5lbENoYW5nZShudWxsLCBuZXdEYXRlKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogcGFuZWxQcmVmaXhDbHNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVhcnRlckhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb25QcmV2WWVhcjogZnVuY3Rpb24gb25QcmV2WWVhcigpIHtcbiAgICAgIG9uWWVhckNoYW5nZSgtMSk7XG4gICAgfSxcbiAgICBvbk5leHRZZWFyOiBmdW5jdGlvbiBvbk5leHRZZWFyKCkge1xuICAgICAgb25ZZWFyQ2hhbmdlKDEpO1xuICAgIH0sXG4gICAgb25ZZWFyQ2xpY2s6IGZ1bmN0aW9uIG9uWWVhckNsaWNrKCkge1xuICAgICAgb25QYW5lbENoYW5nZSgneWVhcicsIHZpZXdEYXRlKTtcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVhcnRlckJvZHksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChkYXRlKSB7XG4gICAgICBfb25TZWxlY3QoZGF0ZSwgJ21vdXNlJyk7XG4gICAgfVxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdWFydGVyUGFuZWw7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU1lbW8gZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVtb1wiO1xuaW1wb3J0IFRpbWVVbml0Q29sdW1uIGZyb20gJy4vVGltZVVuaXRDb2x1bW4nO1xuaW1wb3J0IHsgbGVmdFBhZCB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2NVdGlsJztcbmltcG9ydCB7IHNldFRpbWUgYXMgdXRpbFNldFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy90aW1lVXRpbCc7XG5cbmZ1bmN0aW9uIHNob3VsZFVuaXRzVXBkYXRlKHByZXZVbml0cywgbmV4dFVuaXRzKSB7XG4gIGlmIChwcmV2VW5pdHMubGVuZ3RoICE9PSBuZXh0VW5pdHMubGVuZ3RoKSByZXR1cm4gdHJ1ZTsgLy8gaWYgYW55IHVuaXQncyBkaXNhYmxlZCBzdGF0dXMgaXMgZGlmZmVyZW50LCB0aGUgdW5pdHMgc2hvdWxkIGJlIHJlLWV2YWx1dGVkXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2VW5pdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJldlVuaXRzW2ldLmRpc2FibGVkICE9PSBuZXh0VW5pdHNbaV0uZGlzYWJsZWQpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXRzKHN0YXJ0LCBlbmQsIHN0ZXAsIGRpc2FibGVkVW5pdHMpIHtcbiAgdmFyIHVuaXRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSBzdGVwKSB7XG4gICAgdW5pdHMucHVzaCh7XG4gICAgICBsYWJlbDogbGVmdFBhZChpLCAyKSxcbiAgICAgIHZhbHVlOiBpLFxuICAgICAgZGlzYWJsZWQ6IChkaXNhYmxlZFVuaXRzIHx8IFtdKS5pbmNsdWRlcyhpKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHVuaXRzO1xufVxuXG5mdW5jdGlvbiBUaW1lQm9keShwcm9wcykge1xuICB2YXIgZ2VuZXJhdGVDb25maWcgPSBwcm9wcy5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG9wZXJhdGlvblJlZiA9IHByb3BzLm9wZXJhdGlvblJlZixcbiAgICAgIGFjdGl2ZUNvbHVtbkluZGV4ID0gcHJvcHMuYWN0aXZlQ29sdW1uSW5kZXgsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgc2hvd0hvdXIgPSBwcm9wcy5zaG93SG91cixcbiAgICAgIHNob3dNaW51dGUgPSBwcm9wcy5zaG93TWludXRlLFxuICAgICAgc2hvd1NlY29uZCA9IHByb3BzLnNob3dTZWNvbmQsXG4gICAgICB1c2UxMkhvdXJzID0gcHJvcHMudXNlMTJIb3VycyxcbiAgICAgIF9wcm9wcyRob3VyU3RlcCA9IHByb3BzLmhvdXJTdGVwLFxuICAgICAgaG91clN0ZXAgPSBfcHJvcHMkaG91clN0ZXAgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkaG91clN0ZXAsXG4gICAgICBfcHJvcHMkbWludXRlU3RlcCA9IHByb3BzLm1pbnV0ZVN0ZXAsXG4gICAgICBtaW51dGVTdGVwID0gX3Byb3BzJG1pbnV0ZVN0ZXAgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkbWludXRlU3RlcCxcbiAgICAgIF9wcm9wcyRzZWNvbmRTdGVwID0gcHJvcHMuc2Vjb25kU3RlcCxcbiAgICAgIHNlY29uZFN0ZXAgPSBfcHJvcHMkc2Vjb25kU3RlcCA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRzZWNvbmRTdGVwLFxuICAgICAgZGlzYWJsZWRIb3VycyA9IHByb3BzLmRpc2FibGVkSG91cnMsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXMgPSBwcm9wcy5kaXNhYmxlZE1pbnV0ZXMsXG4gICAgICBkaXNhYmxlZFNlY29uZHMgPSBwcm9wcy5kaXNhYmxlZFNlY29uZHMsXG4gICAgICBoaWRlRGlzYWJsZWRPcHRpb25zID0gcHJvcHMuaGlkZURpc2FibGVkT3B0aW9ucyxcbiAgICAgIG9uU2VsZWN0ID0gcHJvcHMub25TZWxlY3Q7XG4gIHZhciBjb2x1bW5zID0gW107XG4gIHZhciBjb250ZW50UHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpO1xuICB2YXIgY29sdW1uUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aW1lLXBhbmVsXCIpO1xuICB2YXIgaXNQTTtcbiAgdmFyIG9yaWdpbkhvdXIgPSB2YWx1ZSA/IGdlbmVyYXRlQ29uZmlnLmdldEhvdXIodmFsdWUpIDogLTE7XG4gIHZhciBob3VyID0gb3JpZ2luSG91cjtcbiAgdmFyIG1pbnV0ZSA9IHZhbHVlID8gZ2VuZXJhdGVDb25maWcuZ2V0TWludXRlKHZhbHVlKSA6IC0xO1xuICB2YXIgc2Vjb25kID0gdmFsdWUgPyBnZW5lcmF0ZUNvbmZpZy5nZXRTZWNvbmQodmFsdWUpIDogLTE7XG5cbiAgdmFyIHNldFRpbWUgPSBmdW5jdGlvbiBzZXRUaW1lKGlzTmV3UE0sIG5ld0hvdXIsIG5ld01pbnV0ZSwgbmV3U2Vjb25kKSB7XG4gICAgdmFyIG5ld0RhdGUgPSB2YWx1ZSB8fCBnZW5lcmF0ZUNvbmZpZy5nZXROb3coKTtcbiAgICB2YXIgbWVyZ2VkSG91ciA9IE1hdGgubWF4KDAsIG5ld0hvdXIpO1xuICAgIHZhciBtZXJnZWRNaW51dGUgPSBNYXRoLm1heCgwLCBuZXdNaW51dGUpO1xuICAgIHZhciBtZXJnZWRTZWNvbmQgPSBNYXRoLm1heCgwLCBuZXdTZWNvbmQpO1xuICAgIG5ld0RhdGUgPSB1dGlsU2V0VGltZShnZW5lcmF0ZUNvbmZpZywgbmV3RGF0ZSwgIXVzZTEySG91cnMgfHwgIWlzTmV3UE0gPyBtZXJnZWRIb3VyIDogbWVyZ2VkSG91ciArIDEyLCBtZXJnZWRNaW51dGUsIG1lcmdlZFNlY29uZCk7XG4gICAgcmV0dXJuIG5ld0RhdGU7XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gVW5pdCA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgcmF3SG91cnMgPSBnZW5lcmF0ZVVuaXRzKDAsIDIzLCBob3VyU3RlcCwgZGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzKCkpO1xuICB2YXIgbWVtb3JpemVkUmF3SG91cnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmF3SG91cnM7XG4gIH0sIHJhd0hvdXJzLCBzaG91bGRVbml0c1VwZGF0ZSk7IC8vIFNob3VsZCBhZGRpdGlvbmFsIGxvZ2ljIHRvIGhhbmRsZSAxMiBob3Vyc1xuXG4gIGlmICh1c2UxMkhvdXJzKSB7XG4gICAgaXNQTSA9IGhvdXIgPj0gMTI7IC8vIC0xIG1lYW5zIHNob3VsZCBkaXNwbGF5IEFNXG5cbiAgICBob3VyICU9IDEyO1xuICB9XG5cbiAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF1c2UxMkhvdXJzKSB7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBmYWxzZV07XG4gICAgfVxuXG4gICAgdmFyIEFNUE1EaXNhYmxlZCA9IFt0cnVlLCB0cnVlXTtcbiAgICBtZW1vcml6ZWRSYXdIb3Vycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgICAgIGhvdXJWYWx1ZSA9IF9yZWYudmFsdWU7XG4gICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgaWYgKGhvdXJWYWx1ZSA+PSAxMikge1xuICAgICAgICBBTVBNRGlzYWJsZWRbMV0gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFNUE1EaXNhYmxlZFswXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBBTVBNRGlzYWJsZWQ7XG4gIH0sIFt1c2UxMkhvdXJzLCBtZW1vcml6ZWRSYXdIb3Vyc10pLFxuICAgICAgX1JlYWN0JHVzZU1lbW8yID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZU1lbW8sIDIpLFxuICAgICAgQU1EaXNhYmxlZCA9IF9SZWFjdCR1c2VNZW1vMlswXSxcbiAgICAgIFBNRGlzYWJsZWQgPSBfUmVhY3QkdXNlTWVtbzJbMV07XG5cbiAgdmFyIGhvdXJzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF1c2UxMkhvdXJzKSByZXR1cm4gbWVtb3JpemVkUmF3SG91cnM7XG4gICAgcmV0dXJuIG1lbW9yaXplZFJhd0hvdXJzLmZpbHRlcihpc1BNID8gZnVuY3Rpb24gKGhvdXJNZXRhKSB7XG4gICAgICByZXR1cm4gaG91ck1ldGEudmFsdWUgPj0gMTI7XG4gICAgfSA6IGZ1bmN0aW9uIChob3VyTWV0YSkge1xuICAgICAgcmV0dXJuIGhvdXJNZXRhLnZhbHVlIDwgMTI7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChob3VyTWV0YSkge1xuICAgICAgdmFyIGhvdXJWYWx1ZSA9IGhvdXJNZXRhLnZhbHVlICUgMTI7XG4gICAgICB2YXIgaG91ckxhYmVsID0gaG91clZhbHVlID09PSAwID8gJzEyJyA6IGxlZnRQYWQoaG91clZhbHVlLCAyKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGhvdXJNZXRhKSwge30sIHtcbiAgICAgICAgbGFiZWw6IGhvdXJMYWJlbCxcbiAgICAgICAgdmFsdWU6IGhvdXJWYWx1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFt1c2UxMkhvdXJzLCBpc1BNLCBtZW1vcml6ZWRSYXdIb3Vyc10pO1xuICB2YXIgbWludXRlcyA9IGdlbmVyYXRlVW5pdHMoMCwgNTksIG1pbnV0ZVN0ZXAsIGRpc2FibGVkTWludXRlcyAmJiBkaXNhYmxlZE1pbnV0ZXMob3JpZ2luSG91cikpO1xuICB2YXIgc2Vjb25kcyA9IGdlbmVyYXRlVW5pdHMoMCwgNTksIHNlY29uZFN0ZXAsIGRpc2FibGVkU2Vjb25kcyAmJiBkaXNhYmxlZFNlY29uZHMob3JpZ2luSG91ciwgbWludXRlKSk7IC8vID09PT09PT09PT09PT09PT09PT09PT0gT3BlcmF0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgb3BlcmF0aW9uUmVmLmN1cnJlbnQgPSB7XG4gICAgb25VcERvd246IGZ1bmN0aW9uIG9uVXBEb3duKGRpZmYpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2FjdGl2ZUNvbHVtbkluZGV4XTtcblxuICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICB2YXIgdmFsdWVJbmRleCA9IGNvbHVtbi51bml0cy5maW5kSW5kZXgoZnVuY3Rpb24gKHVuaXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5pdC52YWx1ZSA9PT0gY29sdW1uLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHVuaXRMZW4gPSBjb2x1bW4udW5pdHMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdW5pdExlbjsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIG5leHRVbml0ID0gY29sdW1uLnVuaXRzWyh2YWx1ZUluZGV4ICsgZGlmZiAqIGkgKyB1bml0TGVuKSAlIHVuaXRMZW5dO1xuXG4gICAgICAgICAgaWYgKG5leHRVbml0LmRpc2FibGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb2x1bW4ub25TZWxlY3QobmV4dFVuaXQudmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGFkZENvbHVtbk5vZGUoY29uZGl0aW9uLCBub2RlLCBjb2x1bW5WYWx1ZSwgdW5pdHMsIG9uQ29sdW1uU2VsZWN0KSB7XG4gICAgaWYgKGNvbmRpdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIG5vZGU6IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwge1xuICAgICAgICAgIHByZWZpeENsczogY29sdW1uUHJlZml4Q2xzLFxuICAgICAgICAgIHZhbHVlOiBjb2x1bW5WYWx1ZSxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZUNvbHVtbkluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCxcbiAgICAgICAgICBvblNlbGVjdDogb25Db2x1bW5TZWxlY3QsXG4gICAgICAgICAgdW5pdHM6IHVuaXRzLFxuICAgICAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IGhpZGVEaXNhYmxlZE9wdGlvbnNcbiAgICAgICAgfSksXG4gICAgICAgIG9uU2VsZWN0OiBvbkNvbHVtblNlbGVjdCxcbiAgICAgICAgdmFsdWU6IGNvbHVtblZhbHVlLFxuICAgICAgICB1bml0czogdW5pdHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyBIb3VyXG5cblxuICBhZGRDb2x1bW5Ob2RlKHNob3dIb3VyLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lVW5pdENvbHVtbiwge1xuICAgIGtleTogXCJob3VyXCJcbiAgfSksIGhvdXIsIGhvdXJzLCBmdW5jdGlvbiAobnVtKSB7XG4gICAgb25TZWxlY3Qoc2V0VGltZShpc1BNLCBudW0sIG1pbnV0ZSwgc2Vjb25kKSwgJ21vdXNlJyk7XG4gIH0pOyAvLyBNaW51dGVcblxuICBhZGRDb2x1bW5Ob2RlKHNob3dNaW51dGUsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbWVVbml0Q29sdW1uLCB7XG4gICAga2V5OiBcIm1pbnV0ZVwiXG4gIH0pLCBtaW51dGUsIG1pbnV0ZXMsIGZ1bmN0aW9uIChudW0pIHtcbiAgICBvblNlbGVjdChzZXRUaW1lKGlzUE0sIGhvdXIsIG51bSwgc2Vjb25kKSwgJ21vdXNlJyk7XG4gIH0pOyAvLyBTZWNvbmRcblxuICBhZGRDb2x1bW5Ob2RlKHNob3dTZWNvbmQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbWVVbml0Q29sdW1uLCB7XG4gICAga2V5OiBcInNlY29uZFwiXG4gIH0pLCBzZWNvbmQsIHNlY29uZHMsIGZ1bmN0aW9uIChudW0pIHtcbiAgICBvblNlbGVjdChzZXRUaW1lKGlzUE0sIGhvdXIsIG1pbnV0ZSwgbnVtKSwgJ21vdXNlJyk7XG4gIH0pOyAvLyAxMiBIb3Vyc1xuXG4gIHZhciBQTUluZGV4ID0gLTE7XG5cbiAgaWYgKHR5cGVvZiBpc1BNID09PSAnYm9vbGVhbicpIHtcbiAgICBQTUluZGV4ID0gaXNQTSA/IDEgOiAwO1xuICB9XG5cbiAgYWRkQ29sdW1uTm9kZSh1c2UxMkhvdXJzID09PSB0cnVlLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lVW5pdENvbHVtbiwge1xuICAgIGtleTogXCIxMmhvdXJzXCJcbiAgfSksIFBNSW5kZXgsIFt7XG4gICAgbGFiZWw6ICdBTScsXG4gICAgdmFsdWU6IDAsXG4gICAgZGlzYWJsZWQ6IEFNRGlzYWJsZWRcbiAgfSwge1xuICAgIGxhYmVsOiAnUE0nLFxuICAgIHZhbHVlOiAxLFxuICAgIGRpc2FibGVkOiBQTURpc2FibGVkXG4gIH1dLCBmdW5jdGlvbiAobnVtKSB7XG4gICAgb25TZWxlY3Qoc2V0VGltZSghIW51bSwgaG91ciwgbWludXRlLCBzZWNvbmQpLCAnbW91c2UnKTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzXG4gIH0sIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBub2RlID0gX3JlZjIubm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lQm9keTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgUGFuZWxDb250ZXh0IGZyb20gJy4uLy4uL1BhbmVsQ29udGV4dCc7XG5pbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGVVdGlsJztcblxuZnVuY3Rpb24gVGltZUhlYWRlcihwcm9wcykge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFBhbmVsQ29udGV4dCksXG4gICAgICBoaWRlSGVhZGVyID0gX1JlYWN0JHVzZUNvbnRleHQuaGlkZUhlYWRlcjtcblxuICBpZiAoaGlkZUhlYWRlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuICB2YXIgaGVhZGVyUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHtcbiAgICBwcmVmaXhDbHM6IGhlYWRlclByZWZpeENsc1xuICB9LCB2YWx1ZSA/IGZvcm1hdFZhbHVlKHZhbHVlLCB7XG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnXG4gIH0pIDogXCJcXHhBMFwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZUhlYWRlcjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHNjcm9sbFRvLCB3YWl0RWxlbWVudFJlYWR5IH0gZnJvbSAnLi4vLi4vdXRpbHMvdWlVdGlsJztcbmltcG9ydCBQYW5lbENvbnRleHQgZnJvbSAnLi4vLi4vUGFuZWxDb250ZXh0JztcblxuZnVuY3Rpb24gVGltZVVuaXRDb2x1bW4ocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHVuaXRzID0gcHJvcHMudW5pdHMsXG4gICAgICBvblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnMgPSBwcm9wcy5oaWRlRGlzYWJsZWRPcHRpb25zO1xuICB2YXIgY2VsbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFBhbmVsQ29udGV4dCksXG4gICAgICBvcGVuID0gX1JlYWN0JHVzZUNvbnRleHQub3BlbjtcblxuICB2YXIgdWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBsaVJlZnMgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgdmFyIHNjcm9sbFJlZiA9IHVzZVJlZigpOyAvLyBgdXNlTGF5b3V0RWZmZWN0YCBoZXJlIHRvIGF2b2lkIGJsaW5rIGJ5IGR1cmF0aW9uIGlzIDBcblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaSA9IGxpUmVmcy5jdXJyZW50LmdldCh2YWx1ZSk7XG5cbiAgICBpZiAobGkgJiYgb3BlbiAhPT0gZmFsc2UpIHtcbiAgICAgIHNjcm9sbFRvKHVsUmVmLmN1cnJlbnQsIGxpLm9mZnNldFRvcCwgMTIwKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICB2YXIgbGkgPSBsaVJlZnMuY3VycmVudC5nZXQodmFsdWUpO1xuXG4gICAgICBpZiAobGkpIHtcbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQgPSB3YWl0RWxlbWVudFJlYWR5KGxpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2Nyb2xsVG8odWxSZWYuY3VycmVudCwgbGkub2Zmc2V0VG9wLCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfc2Nyb2xsUmVmJGN1cnJlbnQ7XG5cbiAgICAgIChfc2Nyb2xsUmVmJGN1cnJlbnQgPSBzY3JvbGxSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3Njcm9sbFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc2Nyb2xsUmVmJGN1cnJlbnQuY2FsbChzY3JvbGxSZWYpO1xuICAgIH07XG4gIH0sIFtvcGVuXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb2x1bW5cIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb2x1bW4tYWN0aXZlXCIpLCBhY3RpdmUpKSxcbiAgICByZWY6IHVsUmVmLFxuICAgIHN0eWxlOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH1cbiAgfSwgdW5pdHMubWFwKGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgIGlmIChoaWRlRGlzYWJsZWRPcHRpb25zICYmIHVuaXQuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgIGtleTogdW5pdC52YWx1ZSxcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW1lbnQpIHtcbiAgICAgICAgbGlSZWZzLmN1cnJlbnQuc2V0KHVuaXQudmFsdWUsIGVsZW1lbnQpO1xuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjZWxsUHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCB1bml0LmRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItc2VsZWN0ZWRcIiksIHZhbHVlID09PSB1bml0LnZhbHVlKSwgX2NsYXNzTmFtZXMyKSksXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICBpZiAodW5pdC5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2VsZWN0KHVuaXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2VsbFByZWZpeENscywgXCItaW5uZXJcIilcbiAgICB9LCB1bml0LmxhYmVsKSk7XG4gIH0pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVVuaXRDb2x1bW47IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lSGVhZGVyIGZyb20gJy4vVGltZUhlYWRlcic7XG5pbXBvcnQgVGltZUJvZHkgZnJvbSAnLi9UaW1lQm9keSc7XG5pbXBvcnQgeyBjcmVhdGVLZXlEb3duSGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3VpVXRpbCc7XG5cbnZhciBjb3VudEJvb2xlYW4gPSBmdW5jdGlvbiBjb3VudEJvb2xlYW4oYm9vbExpc3QpIHtcbiAgcmV0dXJuIGJvb2xMaXN0LmZpbHRlcihmdW5jdGlvbiAoYm9vbCkge1xuICAgIHJldHVybiBib29sICE9PSBmYWxzZTtcbiAgfSkubGVuZ3RoO1xufTtcblxuZnVuY3Rpb24gVGltZVBhbmVsKHByb3BzKSB7XG4gIHZhciBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgX3Byb3BzJGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgIGZvcm1hdCA9IF9wcm9wcyRmb3JtYXQgPT09IHZvaWQgMCA/ICdISDptbTpzcycgOiBfcHJvcHMkZm9ybWF0LFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgb3BlcmF0aW9uUmVmID0gcHJvcHMub3BlcmF0aW9uUmVmLFxuICAgICAgc2hvd0hvdXIgPSBwcm9wcy5zaG93SG91cixcbiAgICAgIHNob3dNaW51dGUgPSBwcm9wcy5zaG93TWludXRlLFxuICAgICAgc2hvd1NlY29uZCA9IHByb3BzLnNob3dTZWNvbmQsXG4gICAgICBfcHJvcHMkdXNlMTJIb3VycyA9IHByb3BzLnVzZTEySG91cnMsXG4gICAgICB1c2UxMkhvdXJzID0gX3Byb3BzJHVzZTEySG91cnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHVzZTEySG91cnMsXG4gICAgICBvblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgdmFyIHBhbmVsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aW1lLXBhbmVsXCIpO1xuICB2YXIgYm9keU9wZXJhdGlvblJlZiA9IFJlYWN0LnVzZVJlZigpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgtMSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGFjdGl2ZUNvbHVtbkluZGV4ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEFjdGl2ZUNvbHVtbkluZGV4ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgY29sdW1uc0NvdW50ID0gY291bnRCb29sZWFuKFtzaG93SG91ciwgc2hvd01pbnV0ZSwgc2hvd1NlY29uZCwgdXNlMTJIb3Vyc10pO1xuICBvcGVyYXRpb25SZWYuY3VycmVudCA9IHtcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUtleURvd25IYW5kbGVyKGV2ZW50LCB7XG4gICAgICAgIG9uTGVmdFJpZ2h0OiBmdW5jdGlvbiBvbkxlZnRSaWdodChkaWZmKSB7XG4gICAgICAgICAgc2V0QWN0aXZlQ29sdW1uSW5kZXgoKGFjdGl2ZUNvbHVtbkluZGV4ICsgZGlmZiArIGNvbHVtbnNDb3VudCkgJSBjb2x1bW5zQ291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBvblVwRG93bjogZnVuY3Rpb24gb25VcERvd24oZGlmZikge1xuICAgICAgICAgIGlmIChhY3RpdmVDb2x1bW5JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUNvbHVtbkluZGV4KDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYm9keU9wZXJhdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBib2R5T3BlcmF0aW9uUmVmLmN1cnJlbnQub25VcERvd24oZGlmZik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKCkge1xuICAgICAgICAgIG9uU2VsZWN0KHZhbHVlIHx8IGdlbmVyYXRlQ29uZmlnLmdldE5vdygpLCAna2V5Jyk7XG4gICAgICAgICAgc2V0QWN0aXZlQ29sdW1uSW5kZXgoLTEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0QWN0aXZlQ29sdW1uSW5kZXgoLTEpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocGFuZWxQcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocGFuZWxQcmVmaXhDbHMsIFwiLWFjdGl2ZVwiKSwgYWN0aXZlKSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGltZUhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lQm9keSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgYWN0aXZlQ29sdW1uSW5kZXg6IGFjdGl2ZUNvbHVtbkluZGV4LFxuICAgIG9wZXJhdGlvblJlZjogYm9keU9wZXJhdGlvblJlZlxuICB9KSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGFuZWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRGF0ZVBhbmVsIGZyb20gJy4uL0RhdGVQYW5lbCc7XG5pbXBvcnQgeyBpc1NhbWVXZWVrIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZVV0aWwnO1xuXG5mdW5jdGlvbiBXZWVrUGFuZWwocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlOyAvLyBSZW5kZXIgYWRkaXRpb25hbCBjb2x1bW5cblxuICB2YXIgY2VsbFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTtcblxuICB2YXIgcHJlZml4Q29sdW1uID0gZnVuY3Rpb24gcHJlZml4Q29sdW1uKGRhdGUpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7XG4gICAgICBrZXk6IFwid2Vla1wiLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNlbGxQcmVmaXhDbHMsIFwiXCIuY29uY2F0KGNlbGxQcmVmaXhDbHMsIFwiLXdlZWtcIikpXG4gICAgfSwgZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFdlZWsobG9jYWxlLmxvY2FsZSwgZGF0ZSkpO1xuICB9OyAvLyBBZGQgcm93IGNsYXNzTmFtZVxuXG5cbiAgdmFyIHJvd1ByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2Vlay1wYW5lbC1yb3dcIik7XG5cbiAgdmFyIHJvd0NsYXNzTmFtZSA9IGZ1bmN0aW9uIHJvd0NsYXNzTmFtZShkYXRlKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMocm93UHJlZml4Q2xzLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHJvd1ByZWZpeENscywgXCItc2VsZWN0ZWRcIiksIGlzU2FtZVdlZWsoZ2VuZXJhdGVDb25maWcsIGxvY2FsZS5sb2NhbGUsIHZhbHVlLCBkYXRlKSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGFuZWwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHBhbmVsTmFtZTogXCJ3ZWVrXCIsXG4gICAgcHJlZml4Q29sdW1uOiBwcmVmaXhDb2x1bW4sXG4gICAgcm93Q2xhc3NOYW1lOiByb3dDbGFzc05hbWUsXG4gICAga2V5Ym9hcmRDb25maWc6IHtcbiAgICAgIG9uTGVmdFJpZ2h0OiBudWxsXG4gICAgfVxuICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWtQYW5lbDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFlFQVJfREVDQURFX0NPVU5UIH0gZnJvbSAnLic7XG5pbXBvcnQgdXNlQ2VsbENsYXNzTmFtZSBmcm9tICcuLi8uLi9ob29rcy91c2VDZWxsQ2xhc3NOYW1lJztcbmltcG9ydCB7IGZvcm1hdFZhbHVlLCBpc1NhbWVZZWFyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZVV0aWwnO1xuaW1wb3J0IFJhbmdlQ29udGV4dCBmcm9tICcuLi8uLi9SYW5nZUNvbnRleHQnO1xuaW1wb3J0IFBhbmVsQm9keSBmcm9tICcuLi9QYW5lbEJvZHknO1xuZXhwb3J0IHZhciBZRUFSX0NPTF9DT1VOVCA9IDM7XG52YXIgWUVBUl9ST1dfQ09VTlQgPSA0O1xuXG5mdW5jdGlvbiBZZWFyQm9keShwcm9wcykge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZpZXdEYXRlID0gcHJvcHMudmlld0RhdGUsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBnZW5lcmF0ZUNvbmZpZyA9IHByb3BzLmdlbmVyYXRlQ29uZmlnO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUmFuZ2VDb250ZXh0KSxcbiAgICAgIHJhbmdlZFZhbHVlID0gX1JlYWN0JHVzZUNvbnRleHQucmFuZ2VkVmFsdWUsXG4gICAgICBob3ZlclJhbmdlZFZhbHVlID0gX1JlYWN0JHVzZUNvbnRleHQuaG92ZXJSYW5nZWRWYWx1ZTtcblxuICB2YXIgeWVhclByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VsbFwiKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBZZWFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgeWVhck51bWJlciA9IGdlbmVyYXRlQ29uZmlnLmdldFllYXIodmlld0RhdGUpO1xuICB2YXIgc3RhcnRZZWFyID0gTWF0aC5mbG9vcih5ZWFyTnVtYmVyIC8gWUVBUl9ERUNBREVfQ09VTlQpICogWUVBUl9ERUNBREVfQ09VTlQ7XG4gIHZhciBlbmRZZWFyID0gc3RhcnRZZWFyICsgWUVBUl9ERUNBREVfQ09VTlQgLSAxO1xuICB2YXIgYmFzZVllYXIgPSBnZW5lcmF0ZUNvbmZpZy5zZXRZZWFyKHZpZXdEYXRlLCBzdGFydFllYXIgLSBNYXRoLmNlaWwoKFlFQVJfQ09MX0NPVU5UICogWUVBUl9ST1dfQ09VTlQgLSBZRUFSX0RFQ0FERV9DT1VOVCkgLyAyKSk7XG5cbiAgdmFyIGlzSW5WaWV3ID0gZnVuY3Rpb24gaXNJblZpZXcoZGF0ZSkge1xuICAgIHZhciBjdXJyZW50WWVhck51bWJlciA9IGdlbmVyYXRlQ29uZmlnLmdldFllYXIoZGF0ZSk7XG4gICAgcmV0dXJuIHN0YXJ0WWVhciA8PSBjdXJyZW50WWVhck51bWJlciAmJiBjdXJyZW50WWVhck51bWJlciA8PSBlbmRZZWFyO1xuICB9O1xuXG4gIHZhciBnZXRDZWxsQ2xhc3NOYW1lID0gdXNlQ2VsbENsYXNzTmFtZSh7XG4gICAgY2VsbFByZWZpeENsczogeWVhclByZWZpeENscyxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZ2VuZXJhdGVDb25maWc6IGdlbmVyYXRlQ29uZmlnLFxuICAgIHJhbmdlZFZhbHVlOiByYW5nZWRWYWx1ZSxcbiAgICBob3ZlclJhbmdlZFZhbHVlOiBob3ZlclJhbmdlZFZhbHVlLFxuICAgIGlzU2FtZUNlbGw6IGZ1bmN0aW9uIGlzU2FtZUNlbGwoY3VycmVudCwgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gaXNTYW1lWWVhcihnZW5lcmF0ZUNvbmZpZywgY3VycmVudCwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGlzSW5WaWV3OiBpc0luVmlldyxcbiAgICBvZmZzZXRDZWxsOiBmdW5jdGlvbiBvZmZzZXRDZWxsKGRhdGUsIG9mZnNldCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlQ29uZmlnLmFkZFllYXIoZGF0ZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWxCb2R5LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByb3dOdW06IFlFQVJfUk9XX0NPVU5ULFxuICAgIGNvbE51bTogWUVBUl9DT0xfQ09VTlQsXG4gICAgYmFzZURhdGU6IGJhc2VZZWFyLFxuICAgIGdldENlbGxUZXh0OiBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyLFxuICAgIGdldENlbGxDbGFzc05hbWU6IGdldENlbGxDbGFzc05hbWUsXG4gICAgZ2V0Q2VsbERhdGU6IGdlbmVyYXRlQ29uZmlnLmFkZFllYXIsXG4gICAgdGl0bGVDZWxsOiBmdW5jdGlvbiB0aXRsZUNlbGwoZGF0ZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKGRhdGUsIHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIGZvcm1hdDogJ1lZWVknLFxuICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyQm9keTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCB7IFlFQVJfREVDQURFX0NPVU5UIH0gZnJvbSAnLic7XG5pbXBvcnQgUGFuZWxDb250ZXh0IGZyb20gJy4uLy4uL1BhbmVsQ29udGV4dCc7XG5cbmZ1bmN0aW9uIFllYXJIZWFkZXIocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICB2aWV3RGF0ZSA9IHByb3BzLnZpZXdEYXRlLFxuICAgICAgb25QcmV2RGVjYWRlID0gcHJvcHMub25QcmV2RGVjYWRlLFxuICAgICAgb25OZXh0RGVjYWRlID0gcHJvcHMub25OZXh0RGVjYWRlLFxuICAgICAgb25EZWNhZGVDbGljayA9IHByb3BzLm9uRGVjYWRlQ2xpY2s7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYW5lbENvbnRleHQpLFxuICAgICAgaGlkZUhlYWRlciA9IF9SZWFjdCR1c2VDb250ZXh0LmhpZGVIZWFkZXI7XG5cbiAgaWYgKGhpZGVIZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBoZWFkZXJQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlclwiKTtcbiAgdmFyIHllYXJOdW1iZXIgPSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKHZpZXdEYXRlKTtcbiAgdmFyIHN0YXJ0WWVhciA9IE1hdGguZmxvb3IoeWVhck51bWJlciAvIFlFQVJfREVDQURFX0NPVU5UKSAqIFlFQVJfREVDQURFX0NPVU5UO1xuICB2YXIgZW5kWWVhciA9IHN0YXJ0WWVhciArIFlFQVJfREVDQURFX0NPVU5UIC0gMTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBoZWFkZXJQcmVmaXhDbHMsXG4gICAgb25TdXBlclByZXY6IG9uUHJldkRlY2FkZSxcbiAgICBvblN1cGVyTmV4dDogb25OZXh0RGVjYWRlXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBvbkNsaWNrOiBvbkRlY2FkZUNsaWNrLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZWNhZGUtYnRuXCIpXG4gIH0sIHN0YXJ0WWVhciwgXCItXCIsIGVuZFllYXIpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhckhlYWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZZWFySGVhZGVyIGZyb20gJy4vWWVhckhlYWRlcic7XG5pbXBvcnQgWWVhckJvZHksIHsgWUVBUl9DT0xfQ09VTlQgfSBmcm9tICcuL1llYXJCb2R5JztcbmltcG9ydCB7IGNyZWF0ZUtleURvd25IYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdWlVdGlsJztcbmV4cG9ydCB2YXIgWUVBUl9ERUNBREVfQ09VTlQgPSAxMDtcblxuZnVuY3Rpb24gWWVhclBhbmVsKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBvcGVyYXRpb25SZWYgPSBwcm9wcy5vcGVyYXRpb25SZWYsXG4gICAgICBvblZpZXdEYXRlQ2hhbmdlID0gcHJvcHMub25WaWV3RGF0ZUNoYW5nZSxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gcHJvcHMuZ2VuZXJhdGVDb25maWcsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgdmlld0RhdGUgPSBwcm9wcy52aWV3RGF0ZSxcbiAgICAgIHNvdXJjZU1vZGUgPSBwcm9wcy5zb3VyY2VNb2RlLFxuICAgICAgX29uU2VsZWN0ID0gcHJvcHMub25TZWxlY3QsXG4gICAgICBvblBhbmVsQ2hhbmdlID0gcHJvcHMub25QYW5lbENoYW5nZTtcbiAgdmFyIHBhbmVsUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi15ZWFyLXBhbmVsXCIpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIG9wZXJhdGlvblJlZi5jdXJyZW50ID0ge1xuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlS2V5RG93bkhhbmRsZXIoZXZlbnQsIHtcbiAgICAgICAgb25MZWZ0UmlnaHQ6IGZ1bmN0aW9uIG9uTGVmdFJpZ2h0KGRpZmYpIHtcbiAgICAgICAgICBfb25TZWxlY3QoZ2VuZXJhdGVDb25maWcuYWRkWWVhcih2YWx1ZSB8fCB2aWV3RGF0ZSwgZGlmZiksICdrZXknKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DdHJsTGVmdFJpZ2h0OiBmdW5jdGlvbiBvbkN0cmxMZWZ0UmlnaHQoZGlmZikge1xuICAgICAgICAgIF9vblNlbGVjdChnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKHZhbHVlIHx8IHZpZXdEYXRlLCBkaWZmICogWUVBUl9ERUNBREVfQ09VTlQpLCAna2V5Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBEb3duOiBmdW5jdGlvbiBvblVwRG93bihkaWZmKSB7XG4gICAgICAgICAgX29uU2VsZWN0KGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmFsdWUgfHwgdmlld0RhdGUsIGRpZmYgKiBZRUFSX0NPTF9DT1VOVCksICdrZXknKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcigpIHtcbiAgICAgICAgICBvblBhbmVsQ2hhbmdlKHNvdXJjZU1vZGUgPT09ICdkYXRlJyA/ICdkYXRlJyA6ICdtb250aCcsIHZhbHVlIHx8IHZpZXdEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PSBWaWV3IE9wZXJhdGlvbiA9PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbkRlY2FkZUNoYW5nZSA9IGZ1bmN0aW9uIG9uRGVjYWRlQ2hhbmdlKGRpZmYpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLmFkZFllYXIodmlld0RhdGUsIGRpZmYgKiAxMCk7XG4gICAgb25WaWV3RGF0ZUNoYW5nZShuZXdEYXRlKTtcbiAgICBvblBhbmVsQ2hhbmdlKG51bGwsIG5ld0RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBwYW5lbFByZWZpeENsc1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChZZWFySGVhZGVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBvblByZXZEZWNhZGU6IGZ1bmN0aW9uIG9uUHJldkRlY2FkZSgpIHtcbiAgICAgIG9uRGVjYWRlQ2hhbmdlKC0xKTtcbiAgICB9LFxuICAgIG9uTmV4dERlY2FkZTogZnVuY3Rpb24gb25OZXh0RGVjYWRlKCkge1xuICAgICAgb25EZWNhZGVDaGFuZ2UoMSk7XG4gICAgfSxcbiAgICBvbkRlY2FkZUNsaWNrOiBmdW5jdGlvbiBvbkRlY2FkZUNsaWNrKCkge1xuICAgICAgb25QYW5lbENoYW5nZSgnZGVjYWRlJywgdmlld0RhdGUpO1xuICAgIH1cbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChZZWFyQm9keSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KGRhdGUpIHtcbiAgICAgIG9uUGFuZWxDaGFuZ2Uoc291cmNlTW9kZSA9PT0gJ2RhdGUnID8gJ2RhdGUnIDogJ21vbnRoJywgZGF0ZSk7XG5cbiAgICAgIF9vblNlbGVjdChkYXRlLCAnbW91c2UnKTtcbiAgICB9XG4gIH0pKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJQYW5lbDsiLCJpbXBvcnQgeyBERUNBREVfVU5JVF9ESUZGIH0gZnJvbSAnLi4vcGFuZWxzL0RlY2FkZVBhbmVsL2luZGV4JztcbmV4cG9ydCB2YXIgV0VFS19EQVlfQ09VTlQgPSA3O1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbEVxdWFsKHZhbHVlMSwgdmFsdWUyKSB7XG4gIGlmICghdmFsdWUxICYmICF2YWx1ZTIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghdmFsdWUxIHx8ICF2YWx1ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURlY2FkZShnZW5lcmF0ZUNvbmZpZywgZGVjYWRlMSwgZGVjYWRlMikge1xuICB2YXIgZXF1YWwgPSBpc051bGxFcXVhbChkZWNhZGUxLCBkZWNhZGUyKTtcblxuICBpZiAodHlwZW9mIGVxdWFsID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2YXIgbnVtMSA9IE1hdGguZmxvb3IoZ2VuZXJhdGVDb25maWcuZ2V0WWVhcihkZWNhZGUxKSAvIDEwKTtcbiAgdmFyIG51bTIgPSBNYXRoLmZsb29yKGdlbmVyYXRlQ29uZmlnLmdldFllYXIoZGVjYWRlMikgLyAxMCk7XG4gIHJldHVybiBudW0xID09PSBudW0yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVllYXIoZ2VuZXJhdGVDb25maWcsIHllYXIxLCB5ZWFyMikge1xuICB2YXIgZXF1YWwgPSBpc051bGxFcXVhbCh5ZWFyMSwgeWVhcjIpO1xuXG4gIGlmICh0eXBlb2YgZXF1YWwgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKHllYXIxKSA9PT0gZ2VuZXJhdGVDb25maWcuZ2V0WWVhcih5ZWFyMik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhcnRlcihnZW5lcmF0ZUNvbmZpZywgZGF0ZSkge1xuICB2YXIgcXVvdGEgPSBNYXRoLmZsb29yKGdlbmVyYXRlQ29uZmlnLmdldE1vbnRoKGRhdGUpIC8gMyk7XG4gIHJldHVybiBxdW90YSArIDE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lUXVhcnRlcihnZW5lcmF0ZUNvbmZpZywgcXVhcnRlcjEsIHF1YXJ0ZXIyKSB7XG4gIHZhciBlcXVhbCA9IGlzTnVsbEVxdWFsKHF1YXJ0ZXIxLCBxdWFydGVyMik7XG5cbiAgaWYgKHR5cGVvZiBlcXVhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgcmV0dXJuIGlzU2FtZVllYXIoZ2VuZXJhdGVDb25maWcsIHF1YXJ0ZXIxLCBxdWFydGVyMikgJiYgZ2V0UXVhcnRlcihnZW5lcmF0ZUNvbmZpZywgcXVhcnRlcjEpID09PSBnZXRRdWFydGVyKGdlbmVyYXRlQ29uZmlnLCBxdWFydGVyMik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZ2VuZXJhdGVDb25maWcsIG1vbnRoMSwgbW9udGgyKSB7XG4gIHZhciBlcXVhbCA9IGlzTnVsbEVxdWFsKG1vbnRoMSwgbW9udGgyKTtcblxuICBpZiAodHlwZW9mIGVxdWFsID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICByZXR1cm4gaXNTYW1lWWVhcihnZW5lcmF0ZUNvbmZpZywgbW9udGgxLCBtb250aDIpICYmIGdlbmVyYXRlQ29uZmlnLmdldE1vbnRoKG1vbnRoMSkgPT09IGdlbmVyYXRlQ29uZmlnLmdldE1vbnRoKG1vbnRoMik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF0ZShnZW5lcmF0ZUNvbmZpZywgZGF0ZTEsIGRhdGUyKSB7XG4gIHZhciBlcXVhbCA9IGlzTnVsbEVxdWFsKGRhdGUxLCBkYXRlMik7XG5cbiAgaWYgKHR5cGVvZiBlcXVhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRlQ29uZmlnLmdldFllYXIoZGF0ZTEpID09PSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKGRhdGUyKSAmJiBnZW5lcmF0ZUNvbmZpZy5nZXRNb250aChkYXRlMSkgPT09IGdlbmVyYXRlQ29uZmlnLmdldE1vbnRoKGRhdGUyKSAmJiBnZW5lcmF0ZUNvbmZpZy5nZXREYXRlKGRhdGUxKSA9PT0gZ2VuZXJhdGVDb25maWcuZ2V0RGF0ZShkYXRlMik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lVGltZShnZW5lcmF0ZUNvbmZpZywgdGltZTEsIHRpbWUyKSB7XG4gIHZhciBlcXVhbCA9IGlzTnVsbEVxdWFsKHRpbWUxLCB0aW1lMik7XG5cbiAgaWYgKHR5cGVvZiBlcXVhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRlQ29uZmlnLmdldEhvdXIodGltZTEpID09PSBnZW5lcmF0ZUNvbmZpZy5nZXRIb3VyKHRpbWUyKSAmJiBnZW5lcmF0ZUNvbmZpZy5nZXRNaW51dGUodGltZTEpID09PSBnZW5lcmF0ZUNvbmZpZy5nZXRNaW51dGUodGltZTIpICYmIGdlbmVyYXRlQ29uZmlnLmdldFNlY29uZCh0aW1lMSkgPT09IGdlbmVyYXRlQ29uZmlnLmdldFNlY29uZCh0aW1lMik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lV2VlayhnZW5lcmF0ZUNvbmZpZywgbG9jYWxlLCBkYXRlMSwgZGF0ZTIpIHtcbiAgdmFyIGVxdWFsID0gaXNOdWxsRXF1YWwoZGF0ZTEsIGRhdGUyKTtcblxuICBpZiAodHlwZW9mIGVxdWFsID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdGVDb25maWcubG9jYWxlLmdldFdlZWsobG9jYWxlLCBkYXRlMSkgPT09IGdlbmVyYXRlQ29uZmlnLmxvY2FsZS5nZXRXZWVrKGxvY2FsZSwgZGF0ZTIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwoZ2VuZXJhdGVDb25maWcsIHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiBpc1NhbWVEYXRlKGdlbmVyYXRlQ29uZmlnLCB2YWx1ZTEsIHZhbHVlMikgJiYgaXNTYW1lVGltZShnZW5lcmF0ZUNvbmZpZywgdmFsdWUxLCB2YWx1ZTIpO1xufVxuLyoqIEJldHdlZW4gaW4gZGF0ZSBidXQgbm90IGVxdWFsIG9mIGRhdGUgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZShnZW5lcmF0ZUNvbmZpZywgc3RhcnREYXRlLCBlbmREYXRlLCBjdXJyZW50KSB7XG4gIGlmICghc3RhcnREYXRlIHx8ICFlbmREYXRlIHx8ICFjdXJyZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICFpc1NhbWVEYXRlKGdlbmVyYXRlQ29uZmlnLCBzdGFydERhdGUsIGN1cnJlbnQpICYmICFpc1NhbWVEYXRlKGdlbmVyYXRlQ29uZmlnLCBlbmREYXRlLCBjdXJyZW50KSAmJiBnZW5lcmF0ZUNvbmZpZy5pc0FmdGVyKGN1cnJlbnQsIHN0YXJ0RGF0ZSkgJiYgZ2VuZXJhdGVDb25maWcuaXNBZnRlcihlbmREYXRlLCBjdXJyZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrU3RhcnREYXRlKGxvY2FsZSwgZ2VuZXJhdGVDb25maWcsIHZhbHVlKSB7XG4gIHZhciB3ZWVrRmlyc3REYXkgPSBnZW5lcmF0ZUNvbmZpZy5sb2NhbGUuZ2V0V2Vla0ZpcnN0RGF5KGxvY2FsZSk7XG4gIHZhciBtb250aFN0YXJ0RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLnNldERhdGUodmFsdWUsIDEpO1xuICB2YXIgc3RhcnREYXRlV2Vla0RheSA9IGdlbmVyYXRlQ29uZmlnLmdldFdlZWtEYXkobW9udGhTdGFydERhdGUpO1xuICB2YXIgYWxpZ25TdGFydERhdGUgPSBnZW5lcmF0ZUNvbmZpZy5hZGREYXRlKG1vbnRoU3RhcnREYXRlLCB3ZWVrRmlyc3REYXkgLSBzdGFydERhdGVXZWVrRGF5KTtcblxuICBpZiAoZ2VuZXJhdGVDb25maWcuZ2V0TW9udGgoYWxpZ25TdGFydERhdGUpID09PSBnZW5lcmF0ZUNvbmZpZy5nZXRNb250aCh2YWx1ZSkgJiYgZ2VuZXJhdGVDb25maWcuZ2V0RGF0ZShhbGlnblN0YXJ0RGF0ZSkgPiAxKSB7XG4gICAgYWxpZ25TdGFydERhdGUgPSBnZW5lcmF0ZUNvbmZpZy5hZGREYXRlKGFsaWduU3RhcnREYXRlLCAtNyk7XG4gIH1cblxuICByZXR1cm4gYWxpZ25TdGFydERhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2luZ1ZpZXdEYXRlKHZpZXdEYXRlLCBwaWNrZXIsIGdlbmVyYXRlQ29uZmlnKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDE7XG5cbiAgc3dpdGNoIChwaWNrZXIpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5hZGRZZWFyKHZpZXdEYXRlLCBvZmZzZXQgKiAxMCk7XG5cbiAgICBjYXNlICdxdWFydGVyJzpcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gZ2VuZXJhdGVDb25maWcuYWRkWWVhcih2aWV3RGF0ZSwgb2Zmc2V0KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2VuZXJhdGVDb25maWcuYWRkTW9udGgodmlld0RhdGUsIG9mZnNldCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwgX3JlZikge1xuICB2YXIgZ2VuZXJhdGVDb25maWcgPSBfcmVmLmdlbmVyYXRlQ29uZmlnLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBmb3JtYXQgPSBfcmVmLmZvcm1hdDtcbiAgcmV0dXJuIHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicgPyBmb3JtYXQodmFsdWUpIDogZ2VuZXJhdGVDb25maWcubG9jYWxlLmZvcm1hdChsb2NhbGUubG9jYWxlLCB2YWx1ZSwgZm9ybWF0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlLCBfcmVmMikge1xuICB2YXIgZ2VuZXJhdGVDb25maWcgPSBfcmVmMi5nZW5lcmF0ZUNvbmZpZyxcbiAgICAgIGxvY2FsZSA9IF9yZWYyLmxvY2FsZSxcbiAgICAgIGZvcm1hdExpc3QgPSBfcmVmMi5mb3JtYXRMaXN0O1xuXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIGZvcm1hdExpc3RbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0ZUNvbmZpZy5sb2NhbGUucGFyc2UobG9jYWxlLmxvY2FsZSwgdmFsdWUsIGZvcm1hdExpc3QpO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxEYXRlRGlzYWJsZWQoX3JlZjMpIHtcbiAgdmFyIGNlbGxEYXRlID0gX3JlZjMuY2VsbERhdGUsXG4gICAgICBtb2RlID0gX3JlZjMubW9kZSxcbiAgICAgIGRpc2FibGVkRGF0ZSA9IF9yZWYzLmRpc2FibGVkRGF0ZSxcbiAgICAgIGdlbmVyYXRlQ29uZmlnID0gX3JlZjMuZ2VuZXJhdGVDb25maWc7XG4gIGlmICghZGlzYWJsZWREYXRlKSByZXR1cm4gZmFsc2U7IC8vIFdoZXRoZXIgY2VsbERhdGUgaXMgZGlzYWJsZWQgaW4gcmFuZ2VcblxuICB2YXIgZ2V0RGlzYWJsZWRGcm9tUmFuZ2UgPSBmdW5jdGlvbiBnZXREaXNhYmxlZEZyb21SYW5nZShjdXJyZW50TW9kZSwgc3RhcnQsIGVuZCkge1xuICAgIHZhciBjdXJyZW50ID0gc3RhcnQ7XG5cbiAgICB3aGlsZSAoY3VycmVudCA8PSBlbmQpIHtcbiAgICAgIHZhciBkYXRlID0gdm9pZCAwO1xuXG4gICAgICBzd2l0Y2ggKGN1cnJlbnRNb2RlKSB7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGUgPSBnZW5lcmF0ZUNvbmZpZy5zZXREYXRlKGNlbGxEYXRlLCBjdXJyZW50KTtcblxuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGUgPSBnZW5lcmF0ZUNvbmZpZy5zZXRNb250aChjZWxsRGF0ZSwgY3VycmVudCk7XG5cbiAgICAgICAgICAgIGlmICghZ2V0Q2VsbERhdGVEaXNhYmxlZCh7XG4gICAgICAgICAgICAgIGNlbGxEYXRlOiBkYXRlLFxuICAgICAgICAgICAgICBtb2RlOiAnbW9udGgnLFxuICAgICAgICAgICAgICBnZW5lcmF0ZUNvbmZpZzogZ2VuZXJhdGVDb25maWcsXG4gICAgICAgICAgICAgIGRpc2FibGVkRGF0ZTogZGlzYWJsZWREYXRlXG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRlID0gZ2VuZXJhdGVDb25maWcuc2V0WWVhcihjZWxsRGF0ZSwgY3VycmVudCk7XG5cbiAgICAgICAgICAgIGlmICghZ2V0Q2VsbERhdGVEaXNhYmxlZCh7XG4gICAgICAgICAgICAgIGNlbGxEYXRlOiBkYXRlLFxuICAgICAgICAgICAgICBtb2RlOiAneWVhcicsXG4gICAgICAgICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICAgICAgICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGVcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50ICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBkaXNhYmxlZERhdGUoY2VsbERhdGUpO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAge1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gMTtcbiAgICAgICAgdmFyIGVuZERhdGUgPSBnZW5lcmF0ZUNvbmZpZy5nZXREYXRlKGdlbmVyYXRlQ29uZmlnLmdldEVuZERhdGUoY2VsbERhdGUpKTtcbiAgICAgICAgcmV0dXJuIGdldERpc2FibGVkRnJvbVJhbmdlKCdkYXRlJywgc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAge1xuICAgICAgICB2YXIgc3RhcnRNb250aCA9IE1hdGguZmxvb3IoZ2VuZXJhdGVDb25maWcuZ2V0TW9udGgoY2VsbERhdGUpIC8gMykgKiAzO1xuICAgICAgICB2YXIgZW5kTW9udGggPSBzdGFydE1vbnRoICsgMjtcbiAgICAgICAgcmV0dXJuIGdldERpc2FibGVkRnJvbVJhbmdlKCdtb250aCcsIHN0YXJ0TW9udGgsIGVuZE1vbnRoKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3llYXInOlxuICAgICAge1xuICAgICAgICByZXR1cm4gZ2V0RGlzYWJsZWRGcm9tUmFuZ2UoJ21vbnRoJywgMCwgMTEpO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZGVjYWRlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHllYXIgPSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKGNlbGxEYXRlKTtcbiAgICAgICAgdmFyIHN0YXJ0WWVhciA9IE1hdGguZmxvb3IoeWVhciAvIERFQ0FERV9VTklUX0RJRkYpICogREVDQURFX1VOSVRfRElGRjtcbiAgICAgICAgdmFyIGVuZFllYXIgPSBzdGFydFllYXIgKyBERUNBREVfVU5JVF9ESUZGIC0gMTtcbiAgICAgICAgcmV0dXJuIGdldERpc2FibGVkRnJvbVJhbmdlKCd5ZWFyJywgc3RhcnRZZWFyLCBlbmRZZWFyKTtcbiAgICAgIH1cbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEV4dHJhRm9vdGVyKHByZWZpeENscywgbW9kZSwgcmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgaWYgKCFyZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyLWV4dHJhXCIpXG4gIH0sIHJlbmRlckV4dHJhRm9vdGVyKG1vZGUpKTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5nZXMoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBfcmVmJHJhbmdlTGlzdCA9IF9yZWYucmFuZ2VMaXN0LFxuICAgICAgcmFuZ2VMaXN0ID0gX3JlZiRyYW5nZUxpc3QgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyYW5nZUxpc3QsXG4gICAgICBfcmVmJGNvbXBvbmVudHMgPSBfcmVmLmNvbXBvbmVudHMsXG4gICAgICBjb21wb25lbnRzID0gX3JlZiRjb21wb25lbnRzID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkY29tcG9uZW50cyxcbiAgICAgIG5lZWRDb25maXJtQnV0dG9uID0gX3JlZi5uZWVkQ29uZmlybUJ1dHRvbixcbiAgICAgIG9uTm93ID0gX3JlZi5vbk5vdyxcbiAgICAgIG9uT2sgPSBfcmVmLm9uT2ssXG4gICAgICBva0Rpc2FibGVkID0gX3JlZi5va0Rpc2FibGVkLFxuICAgICAgc2hvd05vdyA9IF9yZWYuc2hvd05vdyxcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuICB2YXIgcHJlc2V0Tm9kZTtcbiAgdmFyIG9rTm9kZTtcblxuICBpZiAocmFuZ2VMaXN0Lmxlbmd0aCkge1xuICAgIHZhciBJdGVtID0gY29tcG9uZW50cy5yYW5nZUl0ZW0gfHwgJ3NwYW4nO1xuICAgIHByZXNldE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcmFuZ2VMaXN0Lm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBsYWJlbCA9IF9yZWYyLmxhYmVsLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfcmVmMi5vbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF9yZWYyLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcmVmMi5vbk1vdXNlTGVhdmU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgIGtleTogbGFiZWwsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wcmVzZXRcIilcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlXG4gICAgICB9LCBsYWJlbCkpO1xuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChuZWVkQ29uZmlybUJ1dHRvbikge1xuICAgIHZhciBCdXR0b24gPSBjb21wb25lbnRzLmJ1dHRvbiB8fCAnYnV0dG9uJztcblxuICAgIGlmIChvbk5vdyAmJiAhcHJlc2V0Tm9kZSAmJiBzaG93Tm93ICE9PSBmYWxzZSkge1xuICAgICAgcHJlc2V0Tm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm93XCIpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm93LWJ0blwiKSxcbiAgICAgICAgb25DbGljazogb25Ob3dcbiAgICAgIH0sIGxvY2FsZS5ub3cpKTtcbiAgICB9XG5cbiAgICBva05vZGUgPSBuZWVkQ29uZmlybUJ1dHRvbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1va1wiKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgZGlzYWJsZWQ6IG9rRGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiBvbk9rXG4gICAgfSwgbG9jYWxlLm9rKSk7XG4gIH1cblxuICBpZiAoIXByZXNldE5vZGUgJiYgIW9rTm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yYW5nZXNcIilcbiAgfSwgcHJlc2V0Tm9kZSwgb2tOb2RlKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gbGVmdFBhZChzdHIsIGxlbmd0aCkge1xuICB2YXIgZmlsbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJzAnO1xuICB2YXIgY3VycmVudCA9IFN0cmluZyhzdHIpO1xuXG4gIHdoaWxlIChjdXJyZW50Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgIGN1cnJlbnQgPSBcIlwiLmNvbmNhdChmaWxsKS5jb25jYXQoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50O1xufVxuZXhwb3J0IHZhciB0dXBsZSA9IGZ1bmN0aW9uIHR1cGxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkodmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRhT3JBcmlhUHJvcHMocHJvcHMpIHtcbiAgdmFyIHJldFByb3BzID0ge307XG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoKGtleS5zdWJzdHIoMCwgNSkgPT09ICdkYXRhLScgfHwga2V5LnN1YnN0cigwLCA1KSA9PT0gJ2FyaWEtJyB8fCBrZXkgPT09ICdyb2xlJyB8fCBrZXkgPT09ICduYW1lJykgJiYga2V5LnN1YnN0cigwLCA3KSAhPT0gJ2RhdGEtX18nKSB7XG4gICAgICByZXRQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0UHJvcHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWVzLCBpbmRleCkge1xuICByZXR1cm4gdmFsdWVzID8gdmFsdWVzW2luZGV4XSA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmFsdWVzKHZhbHVlcywgdmFsdWUsIGluZGV4KSB7XG4gIHZhciBuZXdWYWx1ZXMgPSBbZ2V0VmFsdWUodmFsdWVzLCAwKSwgZ2V0VmFsdWUodmFsdWVzLCAxKV07XG4gIG5ld1ZhbHVlc1tpbmRleF0gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShuZXdWYWx1ZXNbaW5kZXhdKSA6IHZhbHVlO1xuXG4gIGlmICghbmV3VmFsdWVzWzBdICYmICFuZXdWYWx1ZXNbMV0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUoZ2VuZXJhdGVDb25maWcsIGRhdGUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG4gIHZhciBuZXh0VGltZSA9IGdlbmVyYXRlQ29uZmlnLnNldEhvdXIoZGF0ZSwgaG91cik7XG4gIG5leHRUaW1lID0gZ2VuZXJhdGVDb25maWcuc2V0TWludXRlKG5leHRUaW1lLCBtaW51dGUpO1xuICBuZXh0VGltZSA9IGdlbmVyYXRlQ29uZmlnLnNldFNlY29uZChuZXh0VGltZSwgc2Vjb25kKTtcbiAgcmV0dXJuIG5leHRUaW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVUaW1lKGdlbmVyYXRlQ29uZmlnLCBkYXRlLCBkZWZhdWx0RGF0ZSkge1xuICBpZiAoIWRlZmF1bHREYXRlKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICB2YXIgbmV3RGF0ZSA9IGRhdGU7XG4gIG5ld0RhdGUgPSBnZW5lcmF0ZUNvbmZpZy5zZXRIb3VyKG5ld0RhdGUsIGdlbmVyYXRlQ29uZmlnLmdldEhvdXIoZGVmYXVsdERhdGUpKTtcbiAgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLnNldE1pbnV0ZShuZXdEYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXRNaW51dGUoZGVmYXVsdERhdGUpKTtcbiAgbmV3RGF0ZSA9IGdlbmVyYXRlQ29uZmlnLnNldFNlY29uZChuZXdEYXRlLCBnZW5lcmF0ZUNvbmZpZy5nZXRTZWNvbmQoZGVmYXVsdERhdGUpKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG93ZXJCb3VuZFRpbWUoaG91ciwgbWludXRlLCBzZWNvbmQsIGhvdXJTdGVwLCBtaW51dGVTdGVwLCBzZWNvbmRTdGVwKSB7XG4gIHZhciBsb3dlckJvdW5kSG91ciA9IE1hdGguZmxvb3IoaG91ciAvIGhvdXJTdGVwKSAqIGhvdXJTdGVwO1xuXG4gIGlmIChsb3dlckJvdW5kSG91ciA8IGhvdXIpIHtcbiAgICByZXR1cm4gW2xvd2VyQm91bmRIb3VyLCA2MCAtIG1pbnV0ZVN0ZXAsIDYwIC0gc2Vjb25kU3RlcF07XG4gIH1cblxuICB2YXIgbG93ZXJCb3VuZE1pbnV0ZSA9IE1hdGguZmxvb3IobWludXRlIC8gbWludXRlU3RlcCkgKiBtaW51dGVTdGVwO1xuXG4gIGlmIChsb3dlckJvdW5kTWludXRlIDwgbWludXRlKSB7XG4gICAgcmV0dXJuIFtsb3dlckJvdW5kSG91ciwgbG93ZXJCb3VuZE1pbnV0ZSwgNjAgLSBzZWNvbmRTdGVwXTtcbiAgfVxuXG4gIHZhciBsb3dlckJvdW5kU2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQgLyBzZWNvbmRTdGVwKSAqIHNlY29uZFN0ZXA7XG4gIHJldHVybiBbbG93ZXJCb3VuZEhvdXIsIGxvd2VyQm91bmRNaW51dGUsIGxvd2VyQm91bmRTZWNvbmRdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3REYXkoZ2VuZXJhdGVDb25maWcsIGRhdGUpIHtcbiAgdmFyIHllYXIgPSBnZW5lcmF0ZUNvbmZpZy5nZXRZZWFyKGRhdGUpO1xuICB2YXIgbW9udGggPSBnZW5lcmF0ZUNvbmZpZy5nZXRNb250aChkYXRlKSArIDE7XG4gIHZhciBlbmREYXRlID0gZ2VuZXJhdGVDb25maWcuZ2V0RW5kRGF0ZShnZW5lcmF0ZUNvbmZpZy5nZXRGaXhlZERhdGUoXCJcIi5jb25jYXQoeWVhciwgXCItXCIpLmNvbmNhdChtb250aCwgXCItMDFcIikpKTtcbiAgdmFyIGxhc3REYXkgPSBnZW5lcmF0ZUNvbmZpZy5nZXREYXRlKGVuZERhdGUpO1xuICB2YXIgbW9udGhTaG93ID0gbW9udGggPCAxMCA/IFwiMFwiLmNvbmNhdChtb250aCkgOiBcIlwiLmNvbmNhdChtb250aCk7XG4gIHJldHVybiBcIlwiLmNvbmNhdCh5ZWFyLCBcIi1cIikuY29uY2F0KG1vbnRoU2hvdywgXCItXCIpLmNvbmNhdChsYXN0RGF5KTtcbn0iLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmltcG9ydCBpc1Zpc2libGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZVwiO1xudmFyIHNjcm9sbElkcyA9IG5ldyBNYXAoKTtcbi8qKiBUcmlnZ2VyIHdoZW4gZWxlbWVudCBpcyB2aXNpYmxlIGluIHZpZXcgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRFbGVtZW50UmVhZHkoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgdmFyIGlkO1xuXG4gIGZ1bmN0aW9uIHRyeU9yTmV4dEZyYW1lKCkge1xuICAgIGlmIChpc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5T3JOZXh0RnJhbWUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRyeU9yTmV4dEZyYW1lKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmFmLmNhbmNlbChpZCk7XG4gIH07XG59XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uKSB7XG4gIGlmIChzY3JvbGxJZHMuZ2V0KGVsZW1lbnQpKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2Nyb2xsSWRzLmdldChlbGVtZW50KSk7XG4gIH0gLy8ganVtcCB0byB0YXJnZXQgaWYgZHVyYXRpb24gemVyb1xuXG5cbiAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICBzY3JvbGxJZHMuc2V0KGVsZW1lbnQsIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xuICAgIH0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gIHZhciBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG4gIHNjcm9sbElkcy5zZXQoZWxlbWVudCwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCArPSBwZXJUaWNrO1xuXG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wICE9PSB0bykge1xuICAgICAgc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xuICAgIH1cbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleURvd25IYW5kbGVyKGV2ZW50LCBfcmVmKSB7XG4gIHZhciBvbkxlZnRSaWdodCA9IF9yZWYub25MZWZ0UmlnaHQsXG4gICAgICBvbkN0cmxMZWZ0UmlnaHQgPSBfcmVmLm9uQ3RybExlZnRSaWdodCxcbiAgICAgIG9uVXBEb3duID0gX3JlZi5vblVwRG93bixcbiAgICAgIG9uUGFnZVVwRG93biA9IF9yZWYub25QYWdlVXBEb3duLFxuICAgICAgb25FbnRlciA9IF9yZWYub25FbnRlcjtcbiAgdmFyIHdoaWNoID0gZXZlbnQud2hpY2gsXG4gICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSxcbiAgICAgIG1ldGFLZXkgPSBldmVudC5tZXRhS2V5O1xuXG4gIHN3aXRjaCAod2hpY2gpIHtcbiAgICBjYXNlIEtleUNvZGUuTEVGVDpcbiAgICAgIGlmIChjdHJsS2V5IHx8IG1ldGFLZXkpIHtcbiAgICAgICAgaWYgKG9uQ3RybExlZnRSaWdodCkge1xuICAgICAgICAgIG9uQ3RybExlZnRSaWdodCgtMSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob25MZWZ0UmlnaHQpIHtcbiAgICAgICAgb25MZWZ0UmlnaHQoLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEtleUNvZGUuUklHSFQ6XG4gICAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG4gICAgICAgIGlmIChvbkN0cmxMZWZ0UmlnaHQpIHtcbiAgICAgICAgICBvbkN0cmxMZWZ0UmlnaHQoMSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob25MZWZ0UmlnaHQpIHtcbiAgICAgICAgb25MZWZ0UmlnaHQoMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgS2V5Q29kZS5VUDpcbiAgICAgIGlmIChvblVwRG93bikge1xuICAgICAgICBvblVwRG93bigtMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgICAgaWYgKG9uVXBEb3duKSB7XG4gICAgICAgIG9uVXBEb3duKDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICAgIGlmIChvblBhZ2VVcERvd24pIHtcbiAgICAgICAgb25QYWdlVXBEb3duKC0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfRE9XTjpcbiAgICAgIGlmIChvblBhZ2VVcERvd24pIHtcbiAgICAgICAgb25QYWdlVXBEb3duKDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEtleUNvZGUuRU5URVI6XG4gICAgICBpZiAob25FbnRlcikge1xuICAgICAgICBvbkVudGVyKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09IEZvcm1hdCA9PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoZm9ybWF0LCBwaWNrZXIsIHNob3dUaW1lLCB1c2UxMkhvdXJzKSB7XG4gIHZhciBtZXJnZWRGb3JtYXQgPSBmb3JtYXQ7XG5cbiAgaWYgKCFtZXJnZWRGb3JtYXQpIHtcbiAgICBzd2l0Y2ggKHBpY2tlcikge1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIG1lcmdlZEZvcm1hdCA9IHVzZTEySG91cnMgPyAnaGg6bW06c3MgYScgOiAnSEg6bW06c3MnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIG1lcmdlZEZvcm1hdCA9ICdnZ2dnLXdvJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgbWVyZ2VkRm9ybWF0ID0gJ1lZWVktTU0nO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgIG1lcmdlZEZvcm1hdCA9ICdZWVlZLVtRXVEnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIG1lcmdlZEZvcm1hdCA9ICdZWVlZJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1lcmdlZEZvcm1hdCA9IHNob3dUaW1lID8gJ1lZWVktTU0tREQgSEg6bW06c3MnIDogJ1lZWVktTU0tREQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWRGb3JtYXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRTaXplKHBpY2tlciwgZm9ybWF0LCBnZW5lcmF0ZUNvbmZpZykge1xuICB2YXIgZGVmYXVsdFNpemUgPSBwaWNrZXIgPT09ICd0aW1lJyA/IDggOiAxMDtcbiAgdmFyIGxlbmd0aCA9IHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicgPyBmb3JtYXQoZ2VuZXJhdGVDb25maWcuZ2V0Tm93KCkpLmxlbmd0aCA6IGZvcm1hdC5sZW5ndGg7XG4gIHJldHVybiBNYXRoLm1heChkZWZhdWx0U2l6ZSwgbGVuZ3RoKSArIDI7XG59XG52YXIgZ2xvYmFsQ2xpY2tGdW5jID0gbnVsbDtcbnZhciBjbGlja0NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRHbG9iYWxNb3VzZURvd25FdmVudChjYWxsYmFjaykge1xuICBpZiAoIWdsb2JhbENsaWNrRnVuYyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGdsb2JhbENsaWNrRnVuYyA9IGZ1bmN0aW9uIGdsb2JhbENsaWNrRnVuYyhlKSB7XG4gICAgICAvLyBDbG9uZSBhIG5ldyBsaXN0IHRvIGF2b2lkIHJlcGVhdCB0cmlnZ2VyIGV2ZW50c1xuICAgICAgX3RvQ29uc3VtYWJsZUFycmF5KGNsaWNrQ2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWV1ZUZ1bmMpIHtcbiAgICAgICAgcXVldWVGdW5jKGUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnbG9iYWxDbGlja0Z1bmMpO1xuICB9XG5cbiAgY2xpY2tDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjbGlja0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuXG4gICAgaWYgKGNsaWNrQ2FsbGJhY2tzLnNpemUgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnbG9iYWxDbGlja0Z1bmMpO1xuICAgICAgZ2xvYmFsQ2xpY2tGdW5jID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0RnJvbUV2ZW50KGUpIHtcbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0OyAvLyBnZXQgdGFyZ2V0IGlmIGluIHNoYWRvdyBkb21cblxuICBpZiAoZS5jb21wb3NlZCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgIHZhciBfZSRjb21wb3NlZFBhdGg7XG5cbiAgICByZXR1cm4gKChfZSRjb21wb3NlZFBhdGggPSBlLmNvbXBvc2VkUGF0aCkgPT09IG51bGwgfHwgX2UkY29tcG9zZWRQYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZSRjb21wb3NlZFBhdGguY2FsbChlKVswXSkgfHwgdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PSBNb2RlID09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGdldFllYXJOZXh0TW9kZSA9IGZ1bmN0aW9uIGdldFllYXJOZXh0TW9kZShuZXh0KSB7XG4gIGlmIChuZXh0ID09PSAnbW9udGgnIHx8IG5leHQgPT09ICdkYXRlJykge1xuICAgIHJldHVybiAneWVhcic7XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBnZXRNb250aE5leHRNb2RlID0gZnVuY3Rpb24gZ2V0TW9udGhOZXh0TW9kZShuZXh0KSB7XG4gIGlmIChuZXh0ID09PSAnZGF0ZScpIHtcbiAgICByZXR1cm4gJ21vbnRoJztcbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIGdldFF1YXJ0ZXJOZXh0TW9kZSA9IGZ1bmN0aW9uIGdldFF1YXJ0ZXJOZXh0TW9kZShuZXh0KSB7XG4gIGlmIChuZXh0ID09PSAnbW9udGgnIHx8IG5leHQgPT09ICdkYXRlJykge1xuICAgIHJldHVybiAncXVhcnRlcic7XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBnZXRXZWVrTmV4dE1vZGUgPSBmdW5jdGlvbiBnZXRXZWVrTmV4dE1vZGUobmV4dCkge1xuICBpZiAobmV4dCA9PT0gJ2RhdGUnKSB7XG4gICAgcmV0dXJuICd3ZWVrJztcbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcblxuZXhwb3J0IHZhciBQaWNrZXJNb2RlTWFwID0ge1xuICB5ZWFyOiBnZXRZZWFyTmV4dE1vZGUsXG4gIG1vbnRoOiBnZXRNb250aE5leHRNb2RlLFxuICBxdWFydGVyOiBnZXRRdWFydGVyTmV4dE1vZGUsXG4gIHdlZWs6IGdldFdlZWtOZXh0TW9kZSxcbiAgdGltZTogbnVsbCxcbiAgZGF0ZTogbnVsbFxufTtcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0NvbnRhaW5zKGVsZW1lbnRzLCB0YXJnZXQpIHtcbiAgcmV0dXJuIGVsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGVsZSkge1xuICAgIHJldHVybiBlbGUgJiYgZWxlLmNvbnRhaW5zKHRhcmdldCk7XG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=