(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~action~editFunnel~events~funnel~liveActions~people~person~trends"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: CacheProvider, ThemeContext, withEmotionCache, css, ClassNames, Global, createElement, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-57a3a7a3.browser.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"]; });

/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"]; });












var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["E"];
  createElementArgArray[1] = Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles(theme)]);
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, context) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js ***!
  \*********************************************************************************/
/*! exports provided: C, E, T, c, h, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");






var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/antd/es/_util/getRenderPropValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/_util/getRenderPropValue.js ***!
  \**********************************************************/
/*! exports provided: getRenderPropValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderPropValue", function() { return getRenderPropValue; });
var getRenderPropValue = function getRenderPropValue(propValue) {
  if (!propValue) {
    return null;
  }

  var isRenderFunction = typeof propValue === 'function';

  if (isRenderFunction) {
    return propValue();
  }

  return propValue;
};

/***/ }),

/***/ "./node_modules/antd/es/_util/responsiveObserve.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd/es/_util/responsiveObserve.js ***!
  \*********************************************************/
/*! exports provided: responsiveArray, responsiveMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveArray", function() { return responsiveArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveMap", function() { return responsiveMap; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, screens), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (responsiveObserve);

/***/ }),

/***/ "./node_modules/antd/es/grid/RowContext.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/es/grid/RowContext.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RowContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (RowContext);

/***/ }),

/***/ "./node_modules/antd/es/grid/col.js":
/*!******************************************!*\
  !*** ./node_modules/antd/es/grid/col.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/es/grid/RowContext.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");




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






function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  var _classNames;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_RowContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap,
      supportFlexGap = _React$useContext2.supportFlexGap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sizeClassObj), (_extends2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {}; // Horizontal gutter use padding

  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  } // Vertical gutter use padding when gap not support


  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (flex === 'auto' && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/antd/es/grid/hooks/useBreakpoint.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/grid/hooks/useBreakpoint.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/responsiveObserve */ "./node_modules/antd/es/_util/responsiveObserve.js");




function useBreakpoint() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });
    return function () {
      return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__["default"].unsubscribe(token);
    };
  }, []);
  return screens;
}

/* harmony default export */ __webpack_exports__["default"] = (useBreakpoint);

/***/ }),

/***/ "./node_modules/antd/es/grid/hooks/useFlexGapSupport.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/es/grid/hooks/useFlexGapSupport.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_styleChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/styleChecker */ "./node_modules/antd/es/_util/styleChecker.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      flexible = _React$useState2[0],
      setFlexible = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    setFlexible(Object(_util_styleChecker__WEBPACK_IMPORTED_MODULE_2__["detectFlexGapSupported"])());
  }, []);
  return flexible;
});

/***/ }),

/***/ "./node_modules/antd/es/grid/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/es/grid/index.js ***!
  \********************************************/
/*! exports provided: Row, Col, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./node_modules/antd/es/grid/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col */ "./node_modules/antd/es/grid/col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useBreakpoint */ "./node_modules/antd/es/grid/hooks/useBreakpoint.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  useBreakpoint: _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/antd/es/grid/row.js":
/*!******************************************!*\
  !*** ./node_modules/antd/es/grid/row.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/es/grid/RowContext.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/es/_util/type.js");
/* harmony import */ var _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/es/_util/responsiveObserve.js");
/* harmony import */ var _hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useFlexGapSupport */ "./node_modules/antd/es/grid/hooks/useFlexGapSupport.js");





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








var RowAligns = Object(_util_type__WEBPACK_IMPORTED_MODULE_8__["tuple"])('top', 'middle', 'bottom', 'stretch');
var RowJustify = Object(_util_type__WEBPACK_IMPORTED_MODULE_8__["tuple"])('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var supportFlexGap = Object(_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var gutterRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](gutter); // ================================== Effect ==================================

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    var token = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["default"].subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter[0]) === 'object' || Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["default"].unsubscribe(token);
    };
  }, []); // ================================== Render ==================================

  var getGutter = function getGutter() {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(g) === 'object') {
        for (var i = 0; i < _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["responsiveArray"].length; i++) {
          var breakpoint = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_9__["responsiveArray"][i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(justify), justify), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(align), align), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // Add gutter related style

  var rowStyle = {};
  var horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gutters, 2);

    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  var rowContext = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return {
      gutter: gutters,
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutters, wrap, supportFlexGap]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_RowContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: rowContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
    className: classes,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rowStyle), style),
    ref: ref
  }), children));
});
Row.displayName = 'Row';
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./node_modules/antd/es/grid/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/grid/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/grid/style/index.css":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/grid/style/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/popover/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/popover/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/getRenderPropValue */ "./node_modules/antd/es/_util/getRenderPropValue.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/motion */ "./node_modules/antd/es/_util/motion.js");


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






var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      title = _a.title,
      content = _a.content,
      otherProps = __rest(_a, ["prefixCls", "title", "content"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_3__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var getOverlay = function getOverlay(prefixCls) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "".concat(prefixCls, "-title")
    }, Object(_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_4__["getRenderPropValue"])(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, Object(_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_4__["getRenderPropValue"])(content)));
  };

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    prefixCls: prefixCls,
    ref: ref,
    overlay: getOverlay(prefixCls),
    transitionName: Object(_util_motion__WEBPACK_IMPORTED_MODULE_5__["getTransitionName"])(rootPrefixCls, 'zoom-big', otherProps.transitionName)
  }));
});
Popover.displayName = 'Popover';
Popover.defaultProps = {
  placement: 'top',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./node_modules/antd/es/popover/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/popover/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/popover/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);

 // style dependencies
// deps-lint-skip: tooltip

/***/ }),

/***/ "./node_modules/antd/es/popover/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/popover/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/row/index.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/es/row/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Row"]);

/***/ }),

/***/ "./node_modules/antd/es/row/style/css.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/row/style/css.js ***!
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

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	_createClass(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dist/index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony import */ var _dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/Select-e1cf49ae.browser.esm.js */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dist/stateManager-2f2b6f5b.browser.esm.js */ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js");
/* harmony import */ var _async_dist_react_select_browser_esm_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../async/dist/react-select.browser.esm.js */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var _creatable_dist_react_select_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../creatable/dist/react-select.browser.esm.js */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");

























var SelectCreatable = Object(_creatable_dist_react_select_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__["makeCreatableSelect"])(_dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["S"]);
var SelectCreatableState = Object(_dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__["m"])(SelectCreatable);
var AsyncCreatable = Object(_async_dist_react_select_browser_esm_js__WEBPACK_IMPORTED_MODULE_22__["makeAsyncSelect"])(SelectCreatableState);

/* harmony default export */ __webpack_exports__["default"] = (AsyncCreatable);


/***/ }),

/***/ "./node_modules/react-select/async/dist/react-select.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-select/async/dist/react-select.browser.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, defaultProps, makeAsyncSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dist/index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony import */ var _dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/Select-e1cf49ae.browser.esm.js */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dist/stateManager-2f2b6f5b.browser.esm.js */ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js");























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null,
  isLoading: false
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Async, _Component);

    var _super = _createSuper(Async);

    function Async(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Async);

      _this = _super.call(this);
      _this.select = void 0;
      _this.lastRequest = void 0;
      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = Object(_dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["G"])(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            isLoadingProp = _this$props2.isLoading,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["loadOptions", "isLoading"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading || isLoadingProp,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_11__["Component"]), _class.defaultProps = defaultProps, _temp;
};
var SelectState = Object(_dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__["m"])(_dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["S"]);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ __webpack_exports__["default"] = (Async);



/***/ }),

/***/ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-select/creatable/dist/react-select.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, defaultProps, makeCreatableSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreatableSelect", function() { return makeCreatableSelect; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dist/index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony import */ var _dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/Select-e1cf49ae.browser.esm.js */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dist/stateManager-2f2b6f5b.browser.esm.js */ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js");























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Creatable, _Component);

    var _super = _createSuper(Creatable);

    function Creatable(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Creatable);

      _this = _super.call(this, props);
      _this.select = void 0;

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value,
            name = _this$props.name;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option',
              name: name
            };

            if (isMulti) {
              onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["C"])(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Creatable, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, Object(_dist_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["C"])(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(options)) : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var options = this.state.options;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_11__["Component"]), _class.defaultProps = defaultProps, _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(_dist_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["S"]);
var Creatable = Object(_dist_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__["m"])(SelectCreatable);

/* harmony default export */ __webpack_exports__["default"] = (Creatable);



/***/ }),

/***/ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");


















var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICB6SW5kZXg6IDk5OTksXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: _ref
  }, props));
};

function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_16__["default"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NodeResolver = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NodeResolver, _Component);

  var _super = _createSuper(NodeResolver);

  function NodeResolver() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NodeResolver);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_14__["findDOMNode"])(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollLock, _Component);

  var _super = _createSuper$1(ScrollLock);

  function ScrollLock() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollBlock, _PureComponent);

  var _super = _createSuper$2(ScrollBlock);

  function ScrollBlock() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["jsx"])(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollCaptor = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ScrollCaptor, _Component);

  var _super = _createSuper$3(ScrollCaptor);

  function ScrollCaptor() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["isEnabled"]);

  return isEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled,
      tabSelectsValue = context.tabSelectsValue;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultStyles = {
  clearIndicator: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["c"],
  container: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["a"],
  control: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["b"],
  dropdownIndicator: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["d"],
  group: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["g"],
  groupHeading: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["e"],
  indicatorsContainer: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["i"],
  indicatorSeparator: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["f"],
  input: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["h"],
  loadingIndicator: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["l"],
  loadingMessage: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["j"],
  menu: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["m"],
  menuList: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["k"],
  menuPortal: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["n"],
  multiValue: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["o"],
  multiValueLabel: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["p"],
  multiValueRemove: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["q"],
  noOptionsMessage: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["r"],
  option: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["s"],
  placeholder: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["t"],
  singleValue: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["u"],
  valueContainer: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread$1({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["w"])(),
  captureMenuScroll: !Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["w"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["x"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Select, _Component);

  var _super = _createSuper$4(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["y"])({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread$2(_objectSpread$2({}, actionMeta), {}, {
        name: name
      }));
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      _this.onChange(null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["z"].apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread$2(_objectSpread$2({}, context), {}, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["A"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = "".concat(_this.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.cacheComponents, _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["B"]).bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["C"])(_value);

    _this.buildMenuOptions = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref6, 2),
          newProps = _ref7[0],
          newSelectValue = _ref7[1];

      var _ref8 = lastArgs,
          _ref9 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, 2),
          lastProps = _ref9[0],
          lastSelectValue = _ref9[1];

      return newSelectValue === lastSelectValue && newProps.inputValue === lastProps.inputValue && newProps.options === lastProps.options;
    }).bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["C"])(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["D"])(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var menuOptions = this.buildMenuOptions(this.props, selectValue);
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          tabSelectsValue = _this$props11.tabSelectsValue;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.setState({
        menuOptions: menuOptions,
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      }, function () {
        _this2.onMenuOpen();

        _this2.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props12 = this.props,
          isMulti = _this$props12.isMulti,
          isSearchable = _this$props12.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var _this$props13 = this.props,
          pageSize = _this$props13.pageSize,
          tabSelectsValue = _this$props13.tabSelectsValue;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus]),
          tabSelectsValue: tabSelectsValue
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread$2(_objectSpread$2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props14 = this.props,
          isClearable = _this$props14.isClearable,
          isMulti = _this$props14.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this3 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this3.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "constructAriaLiveMessage",
    // ==============================
    // Renderers
    // ==============================
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props15 = this.props,
          options = _this$props15.options,
          menuIsOpen = _this$props15.menuIsOpen,
          inputValue = _this$props15.inputValue,
          screenReaderStatus = _this$props15.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isSearchable = _this$props16.isSearchable,
          inputId = _this$props16.inputId,
          inputValue = _this$props16.inputValue,
          tabIndex = _this$props16.tabIndex,
          form = _this$props16.form;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DummyInput, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["E"],
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          controlShouldRenderValue = _this$props17.controlShouldRenderValue,
          isDisabled = _this$props17.isDisabled,
          isMulti = _this$props17.isMulti,
          inputValue = _this$props17.inputValue,
          placeholder = _this$props17.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this4.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props18 = this.props,
          isDisabled = _this$props18.isDisabled,
          isLoading = _this$props18.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props19 = this.props,
          isDisabled = _this$props19.isDisabled,
          isLoading = _this$props19.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props20 = this.props,
          captureMenuScroll = _this$props20.captureMenuScroll,
          inputValue = _this$props20.inputValue,
          isLoading = _this$props20.isLoading,
          loadingMessage = _this$props20.loadingMessage,
          minMenuHeight = _this$props20.minMenuHeight,
          maxMenuHeight = _this$props20.maxMenuHeight,
          menuIsOpen = _this$props20.menuIsOpen,
          menuPlacement = _this$props20.menuPlacement,
          menuPosition = _this$props20.menuPosition,
          menuPortalTarget = _this$props20.menuPortalTarget,
          menuShouldBlockScroll = _this$props20.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props20.menuShouldScrollIntoView,
          noOptionsMessage = _this$props20.noOptionsMessage,
          onMenuScrollToTop = _this$props20.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props20.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_15__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps), function (_ref10) {
        var ref = _ref10.ref,
            _ref10$placerProps = _ref10.placerProps,
            placement = _ref10$placerProps.placement,
            maxHeight = _ref10$placerProps.maxHeight;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props21 = this.props,
          delimiter = _this$props21.delimiter,
          isDisabled = _this$props21.isDisabled,
          isMulti = _this$props21.isMulti,
          name = _this$props21.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, input);
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value2
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(A11yText, {
        "aria-live": "polite"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props22 = this.props,
          className = _this$props22.className,
          id = _this$props22.id,
          isDisabled = _this$props22.isDisabled,
          menuIsOpen = _this$props22.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/index-75b02bac.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: A, B, C, D, E, F, G, M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return classNames; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_14__);
















// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createContext"])({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread(_objectSpread({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_10__["createPortal"])(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(a) == 'object' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
    css: /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_12__["default"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('groupHeading', _objectSpread$1({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: getStyles('input', _objectSpread$2({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Container, {
      data: data,
      innerProps: _objectSpread$3(_objectSpread$3({}, innerProps), {}, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Remove, {
      data: data,
      innerProps: _objectSpread$3({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread$4(_objectSpread$4({}, components), props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index-75b02bac.browser.esm.js */ "./node_modules/react-select/dist/index-75b02bac.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_75b02bac_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__["F"]; });

/* harmony import */ var _Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Select-e1cf49ae.browser.esm.js */ "./node_modules/react-select/dist/Select-e1cf49ae.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stateManager-2f2b6f5b.browser.esm.js */ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");

























function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NonceProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NonceProvider, _Component);

  var _super = _createSuper(NonceProvider);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_22__["default"])({
        nonce: nonce
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var index = Object(_stateManager_2f2b6f5b_browser_esm_js__WEBPACK_IMPORTED_MODULE_21__["m"])(_Select_e1cf49ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StateManager, _Component);

    var _super = _createSuper(StateManager);

    function StateManager() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2NhY2hlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvY29yZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY29yZS9kaXN0L2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY3NzL2Rpc3QvY3NzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvaGFzaC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L3NlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9zaGVldC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGlzL2Rpc3Qvc3R5bGlzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L3V0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvZ2V0UmVuZGVyUHJvcFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvUm93Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ncmlkL2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ncmlkL2hvb2tzL3VzZUJyZWFrcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZ3JpZC9ob29rcy91c2VGbGV4R2FwU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ncmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvcm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvc3R5bGUvaW5kZXguY3NzPzNkMjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcG9wb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wb3BvdmVyL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wb3BvdmVyL3N0eWxlL2luZGV4LmNzcz9hZjE2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9yb3cvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtYXV0b3NpemUvbGliL0F1dG9zaXplSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9hc3luYy1jcmVhdGFibGUvZGlzdC9yZWFjdC1zZWxlY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9hc3luYy9kaXN0L3JlYWN0LXNlbGVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2NyZWF0YWJsZS9kaXN0L3JlYWN0LXNlbGVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvU2VsZWN0LWUxY2Y0OWFlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9pbmRleC03NWIwMmJhYy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9zdGF0ZU1hbmFnZXItMmYyYjZmNWIuYnJvd3Nlci5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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OUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQix5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0YscUNBQXFDLHlDQUF5QztBQUNoSzs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaU1BQWlNO0FBQ2pNOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCw2REFBNkQsT0FBTztBQUNwSDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFO0FBQzdCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0bUIxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakQ1QjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7O0FDdkM3QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZjNCO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdFO0FBQ2Q7QUFDbkQ7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FB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Q0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Es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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQSwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFLLDJCQUEyQixrRkFBUTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLLHNCQUFzQixrRkFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELDZDQUFLLDRCQUE0QixrRkFBUSxHQUFHO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQUssMkJBQTJCLGtGQUFRLEdBQUc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsNkNBQUssNEJBQTRCLGtGQUFRLEdBQUc7QUFDdEU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLLCtCQUErQixrRkFBUSxHQUFHO0FBQ3pFO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLLGlDQUFpQyxrRkFBUSxHQUFHO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUssbUNBQW1DLGtGQUFRLEdBQUc7QUFDN0U7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUssa0NBQWtDLGtGQUFRLEdBQUc7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFLLHVCQUF1QixrRkFBUSxHQUFHO0FBQ25FO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtHQUF3Qjs7QUFFaEQ7QUFDQSxnQ0FBZ0MsNkNBQUssc0JBQXNCLGtGQUFRLEdBQUc7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsNkNBQUs7QUFDbkMsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsOEJBQThCLDZDQUFLO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZDQUFLLGVBQWUsaUVBQVUsRUFBRSxrRkFBUSxHQUFHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFLLHFCQUFxQixrRkFBUSxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTLGdCQUFnQiw2Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWUsNkNBQUs7QUFDN0I7QUFDQSxTQUFTLGVBQWUsNkNBQUsseUJBQXlCLGtGQUFRLEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRTtBQUNUO0FBQ0E7O0FBRUEseUVBQXlFLDZDQUFLLDJCQUEyQixrRkFBUSxHQUFHO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCw4QkFBOEIsNkNBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLGdDQUFnQyw2Q0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLGlCQUFpQiw2Q0FBSztBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYLDhCQUE4Qiw2Q0FBSztBQUNuQztBQUNBLE9BQU87QUFDUDs7QUFFQSw0QkFBNEIsNkNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLO0FBQy9CO0FBQ0EsT0FBTyxlQUFlLDZDQUFLO0FBQzNCO0FBQ0EsT0FBTyxzREFBc0QsNkNBQUs7QUFDbEU7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBSyxnQ0FBZ0Msa0ZBQVEsR0FBRztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTyx5Q0FBeUMsNkNBQUssd0JBQXdCLGtGQUFRLEdBQUc7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnQkFBZ0IsNkNBQUssK0JBQStCLGtGQUFRLEdBQUc7QUFDdEU7QUFDQSxPQUFPLHNFQUFzRSw2Q0FBSyxvQ0FBb0Msa0ZBQVEsR0FBRztBQUNqSTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsZ0RBQVM7O0FBRVg7O0FBRWtHOzs7Ozs7Ozs7Ozs7O0FDaHlGbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUNoQztBQUNjO0FBQ0E7QUFDTjtBQUNOO0FBQ2tDO0FBQ3RCO0FBQ3ZCO0FBQ1U7QUFDbEI7QUFDZTtBQUN4QjtBQUNzRDtBQUNyQzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGtGQUFPO0FBQ2I7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2Qzs7QUFFQSw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELENBQUMseUZBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLGlEQUFpRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVwaEIsZ0NBQWdDLDZEQUE2RCx5Q0FBeUMsYUFBYSx5RkFBZSxrQkFBa0IsaUNBQWlDLGlCQUFpQix5RkFBZSxtQkFBbUIseURBQXlELEVBQUUsT0FBTyx1Q0FBdUMsRUFBRSxRQUFRLG9HQUEwQixlQUFlLEdBQUc7O0FBRXZhLHNDQUFzQyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHdFQUF3RSxHQUFHLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRTtBQUNsVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUUseUZBQWUsNENBQTRDLHlGQUFlLDZDQUE2Qyx5RkFBZSx1Q0FBdUMseUZBQWUseUZBQXlGLHlGQUFlLDZDQUE2Qyx5RkFBZSwwQ0FBMEMseUZBQWUsaUNBQWlDLHlGQUFlLDBCQUEwQix5RkFBZTtBQUN2ZjtBQUNBLDBDQUEwQywyREFBYTtBQUN2RDtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBLEVBQUUsbUZBQVM7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHlGQUFlOztBQUVuQix1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrQkFBa0I7QUFDN0Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLEVBQUUsc0ZBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLCtDQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFFBQVEsa0ZBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxRQUFRLGtGQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFFBQVEsa0ZBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxRQUFRLGtGQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVM7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHlGQUFlOztBQUVuQiwwRUFBMEUsZUFBZTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxzRkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLHdCQUF3Qix5REFBRztBQUMzQjtBQUNBLE9BQU87QUFDUCxhQUFhLHlEQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCLCtEQUFZO0FBQzdDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrRkFBTyxtQkFBbUIsa0ZBQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFdBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSxvQkFBb0IsV0FBVztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxRQUFRLGtGQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRztBQUNaO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxhQUFhLGlHQUFzQixzQkFBc0IsWUFBWSxFQUFFLFNBQVMsWUFBWSxFQUFFOztBQUU5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsME9BQTBPOztBQUV2UixZQUFZLE1BQXFDLEdBQUcsU0FHbkQ7QUFDRDtBQUNBLGdDQUFnQyxrQkFBa0IsY0FBYyxvQkFBb0IsZUFBZTtBQUNuRyxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtHQUF3Qjs7QUFFdEMsU0FBUyx5REFBRyxRQUFRLGtGQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLFNBQVMseURBQUcsTUFBTSxrRkFBUTtBQUMxQjtBQUNBLEdBQUcsVUFBVSx5REFBRztBQUNoQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyx5REFBRyxNQUFNLGtGQUFRO0FBQzFCO0FBQ0EsR0FBRyxVQUFVLHlEQUFHO0FBQ2hCO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxRQUFRLGtGQUFRLEdBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxlQUFlLHlEQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFFBQVEsa0ZBQVEsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLGVBQWUseURBQUc7QUFDckIsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFNBQVMsa0ZBQVEsR0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBOztBQUVBLDJCQUEyQiwrREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQUc7QUFDWixzQkFBc0IsNkRBQUk7QUFDMUIsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFLE1BQXFDLEdBQUcsU0FBRSwrQ0FBK0MsY0FBYztBQUM5RyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxRQUFRLGtGQUFRLEdBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxHQUFHLHlEQUFHO0FBQ1Q7QUFDQTtBQUNBLEdBQUcsR0FBRyx5REFBRztBQUNUO0FBQ0E7QUFDQSxHQUFHLEdBQUcseURBQUc7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFFBQVEsa0ZBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLDRDQUE0QyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsZ0VBQWdFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUVyVixrQ0FBa0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHlEQUF5RCxDQUFDLHlGQUFlLDJCQUEyQixFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxtREFBbUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTtBQUMxaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsRUFBRSx5REFBRyxVQUFVLGtGQUFRLEdBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFdBQVcseURBQUc7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtHQUF3Qjs7QUFFM0MsU0FBUyx5REFBRyxRQUFRLGtGQUFRO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXJWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELENBQUMseUZBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrR0FBd0I7O0FBRXRDLFNBQVMseURBQUc7QUFDWjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsRUFBRSx5REFBRyxDQUFDLDREQUFhLEVBQUUsa0ZBQVE7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXJWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELENBQUMseUZBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5REFBRyxnQ0FBZ0MseURBQUc7QUFDL0M7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQUcsQ0FBQyx3REFBVTtBQUN2QjtBQUNBO0FBQ0EsV0FBVyx5REFBRztBQUNkO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSyxFQUFFLHlEQUFHO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSyxhQUFhLHlEQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQUcsUUFBUSxrRkFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFHLFFBQVEsa0ZBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQUcsUUFBUSxrRkFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXJWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELENBQUMseUZBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFaXNCOzs7Ozs7Ozs7Ozs7O0FDNThDanNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDaEI7QUFDTTtBQUNJO0FBQ0g7QUFDeUI7QUFDTjtBQUNaO0FBQ007QUFDa0M7QUFDdEI7QUFDL0I7QUFDSjtBQUNTO0FBQzNCO0FBQ29CO0FBQzJCO0FBQ0g7QUFDMkM7QUFDcEY7QUFDZ0M7QUFDeEI7QUFDNEM7QUFDakM7O0FBRXpDLGdDQUFnQyw2REFBNkQseUNBQXlDLGFBQWEsMEZBQWUsa0JBQWtCLGlDQUFpQyxpQkFBaUIsMEZBQWUsbUJBQW1CLHlEQUF5RCxFQUFFLE9BQU8sdUNBQXVDLEVBQUUsUUFBUSxvR0FBMEIsZUFBZSxHQUFHOztBQUV2YSxzQ0FBc0Msd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx3RUFBd0UsR0FBRyxhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUU7O0FBRWxVO0FBQ0EsRUFBRSxtRkFBUzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBLElBQUkseUZBQWU7O0FBRW5COztBQUVBO0FBQ0EsYUFBYSwrREFBVztBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQSwrQkFBK0IsNERBQVU7QUFDekM7QUFDQTs7QUFFQSxFQUFFLHNGQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLLGVBQWUsNERBQWE7QUFDM0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLGdEQUFTOztBQUVYLFlBQVksZ0ZBQVcsQ0FBQyxrRUFBTTs7QUFFZixvRUFBSyxFQUFDO0FBQ0k7Ozs7Ozs7Ozs7Ozs7QUNuRXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDaEM7QUFDYztBQUNOO0FBQ047QUFDa0M7QUFDdEI7QUFDL0I7O0FBRXpDLGdDQUFnQyw2REFBNkQseUNBQXlDLGFBQWEseUZBQWUsa0JBQWtCLGlDQUFpQyxpQkFBaUIseUZBQWUsbUJBQW1CLHlEQUF5RCxFQUFFLE9BQU8sdUNBQXVDLEVBQUUsUUFBUSxvR0FBMEIsZUFBZSxHQUFHOztBQUV2YSxzQ0FBc0Msd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx3RUFBd0UsR0FBRyxhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUU7QUFDbFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtRkFBUzs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLE1BQU0seUZBQWU7O0FBRXJCLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBLElBQUksc0ZBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0dBQW9HLGVBQWU7QUFDbkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtHQUF3Qjs7QUFFNUMsNEJBQTRCLDRDQUFLLGdDQUFnQyxrRkFBUSxHQUFHO0FBQzVFO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRyxDQUFDLCtDQUFTO0FBQ2I7O0FBRTRCIiwiZmlsZSI6InZlbmRvcnN+YWN0aW9ufmVkaXRGdW5uZWx+ZXZlbnRzfmZ1bm5lbH5saXZlQWN0aW9uc35wZW9wbGV+cGVyc29ufnRyZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWw7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBTdHlsaXMgZnJvbSAnQGVtb3Rpb24vc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMvdHJlZS9tYXN0ZXIvcGx1Z2lucy9ydWxlLXNoZWV0XG4vLyBpbmxpbmVkIHRvIGF2b2lkIHVtZCB3cmFwcGVyIGFuZCBwZWVyRGVwIHdhcm5pbmdzL2luc3RhbGxpbmcgc3R5bGlzXG4vLyBzaW5jZSB3ZSB1c2Ugc3R5bGlzIGFmdGVyIGNsb3N1cmUgY29tcGlsZXJcbnZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xudmFyIG5lZWRsZSA9IGRlbGltaXRlciArICd9JztcblxuZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICBpZiAoYmxvY2spIHtcbiAgICBTaGVldC5jdXJyZW50Lmluc2VydChibG9jayArICd9Jyk7XG4gIH1cbn1cblxudmFyIFNoZWV0ID0ge1xuICBjdXJyZW50OiBudWxsXG59O1xudmFyIHJ1bGVTaGVldCA9IGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gIHN3aXRjaCAoY29udGV4dCkge1xuICAgIC8vIHByb3BlcnR5XG4gICAgY2FzZSAxOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKGNvbnRlbnQuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEBpbXBvcnRcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoY29udGVudCArICc7Jyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgbFxuXG4gICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgICAgICAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgICAgICAgICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gc2VsZWN0b3JcblxuICAgIGNhc2UgMjpcbiAgICAgIHtcbiAgICAgICAgaWYgKG5zID09PSAwKSByZXR1cm4gY29udGVudCArIGRlbGltaXRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gYXQtcnVsZVxuXG4gICAgY2FzZSAzOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKG5zKSB7XG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoc2VsZWN0b3JzWzBdICsgY29udGVudCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBjYXNlIC0yOlxuICAgICAge1xuICAgICAgICBjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KTtcbiAgICAgIH1cbiAgfVxufTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleSB8fCAnY3NzJztcbiAgdmFyIHN0eWxpc09wdGlvbnM7XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdHlsaXNPcHRpb25zID0ge1xuICAgICAgcHJlZml4OiBvcHRpb25zLnByZWZpeFxuICAgIH07XG4gIH1cblxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhzdHlsaXNPcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvbi1cIiArIGtleSk7IC8vICRGbG93Rml4TWVcblxuICAgICAgYXR0cmliLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAge1xuICAgIHN0eWxpcy51c2Uob3B0aW9ucy5zdHlsaXNQbHVnaW5zKShydWxlU2hlZXQpO1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICB2YXIgbmFtZSA9IHNlcmlhbGl6ZWQubmFtZTtcbiAgICAgIFNoZWV0LmN1cnJlbnQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwID0gc2VyaWFsaXplZC5tYXA7XG4gICAgICAgIFNoZWV0LmN1cnJlbnQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBtYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yLCBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtuYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmY3MzcxYTRjZDdlNjAwOWVmNjFkMGFcbiAgICB2YXIgY29tbWVudFN0YXJ0ID0gL1xcL1xcKi9nO1xuICAgIHZhciBjb21tZW50RW5kID0gL1xcKlxcLy9nO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdoaWxlIChjb21tZW50U3RhcnQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICBjb21tZW50RW5kLmxhc3RJbmRleCA9IGNvbW1lbnRTdGFydC5sYXN0SW5kZXg7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSBjb21tZW50RW5kLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBzdHlsZXMgaGF2ZSBhbiB1bnRlcm1pbmF0ZWQgY29tbWVudCAoXCIvKlwiIHdpdGhvdXQgY29ycmVzcG9uZGluZyBcIiovXCIpLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmbGFnID0gJ2Vtb3Rpb24tZGlzYWJsZS1zZXJ2ZXItcmVuZGVyaW5nLXVuc2FmZS1zZWxlY3Rvci13YXJuaW5nLXBsZWFzZS1kby1ub3QtdXNlLXRoaXMtdGhlLXdhcm5pbmctZXhpc3RzLWZvci1hLXJlYXNvbic7XG4gICAgICAgICAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGNvbnRlbnQubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmVSZWdFeHAgPSBuZXcgUmVnRXhwKHVuc2FmZVBzZXVkb0NsYXNzICsgXCIuKlxcXFwvXFxcXCogXCIgKyBmbGFnICsgXCIgXFxcXCpcXFxcL1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlID0gaWdub3JlUmVnRXhwLnRlc3QoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3MgJiYgIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeVxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBjc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlO1xudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlcyh0aGVtZSldKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbm5lckdsb2JhbCwge1xuICAgICAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgICAgICBjYWNoZTogY2FjaGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGNhY2hlOiBjYWNoZVxuICB9KTtcbn0pO1xuXG4vLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xudmFyIElubmVyR2xvYmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyR2xvYmFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lckdsb2JhbChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJHbG9iYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCItZ2xvYmFsXCIsXG4gICAgICBub25jZTogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5jb250YWluZXJcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsgdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIj1cXFwiXCIgKyB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGVldC50YWdzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gdGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlcmlhbGl6ZWQubmFtZSAhPT0gdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMkMSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKHRoaXMucHJvcHMuY2FjaGUsIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGVldC50YWdzW3RoaXMuc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5jYWNoZS5pbnNlcnQoXCJcIiwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLCB0aGlzLnNoZWV0LCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSW5uZXJHbG9iYWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgQ2xhc3NOYW1lcyA9IHdpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY29udGV4dC5yZWdpc3RlcmVkKTtcblxuICAgICAge1xuICAgICAgICBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dC5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgICB9O1xuXG4gICAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2UoY29udGV4dC5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgY3g6IGN4LFxuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfTtcbiAgICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gICAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVsZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwganN4LCBrZXlmcmFtZXMgfTtcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gY3JlYXRlQ2FjaGUoKSA6IG51bGwpO1xudmFyIFRoZW1lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHt9KTtcbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEVtb3Rpb25DYWNoZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICAgIH0pO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbn07XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9jc3MnIGxpa2UgdGhpczogY3NzYFwiICsgcHJvcHMuY3NzICsgXCJgXCIpO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIHN0aWxsIHdvcmtzIHdpdGggYWxsIG9mIHRob3NlIGRpZmZlcmVudCBKU1ggZnVuY3Rpb25zXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXokXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXokXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2FjaGUsIHByb3BzLCB0aGVtZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gdGhlbWUgPT09IG51bGwgPyBwcm9wcy5jc3MgOiBwcm9wcy5jc3ModGhlbWUpOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgdHlwZSA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHZhciBsYWJlbEZyb21TdGFjayA9IHByb3BzW2xhYmVsUHJvcE5hbWVdO1xuXG4gICAgaWYgKGxhYmVsRnJvbVN0YWNrKSB7XG4gICAgICBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzZXJpYWxpemVkLCAnbGFiZWw6JyArIGxhYmVsRnJvbVN0YWNrICsgJzsnXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJ1bGVzID0gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpO1xuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpICYmIGtleSAhPT0gJ2NzcycgJiYga2V5ICE9PSB0eXBlUHJvcE5hbWUgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgfHwga2V5ICE9PSBsYWJlbFByb3BOYW1lKSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHMucmVmID0gcmVmO1xuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHZhciBlbGUgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudCh0eXBlLCBuZXdQcm9wcyk7XG5cbiAgcmV0dXJuIGVsZTtcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgaWYgKHR5cGVvZiBwcm9wcy5jc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCB0aGVtZSwgcmVmKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCBudWxsLCByZWYpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cjI7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IGhhc2hTdHJpbmcgZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IG1lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGNvbnRlbnRWYWx1ZVBhdHRlcm4gPSAvKGF0dHJ8Y2FsY3xjb3VudGVycz98dXJsKVxcKC87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdjb3VudGVyJywgJ29wZW4tcXVvdGUnLCAnY2xvc2UtcXVvdGUnLCAnbm8tb3Blbi1xdW90ZScsICduby1jbG9zZS1xdW90ZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSB0cnVlO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uLCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGJhYmVsLXBsdWdpbi1lbW90aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCwgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gJiYgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgJiYgY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgaXMgbm90IHJlY29tbWVuZGVkIGFuZCB3aWxsIGNhdXNlIHByb2JsZW1zIHdpdGggY29tcG9zaXRpb24uXFxuJyArICdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgd2lsbCBiZSBjb21wbGV0ZWx5IHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIG1ham9yIHZlcnNpb24gb2YgRW1vdGlvbicpO1xuICAgIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgJiYgIWNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyo7L2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy87XG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXG4vLyBrZXlmcmFtZXMgYXJlIHN0b3JlZCBvbiB0aGUgU2VyaWFsaXplZFN0eWxlcyBvYmplY3QgYXMgYSBsaW5rZWQgbGlzdFxuXG5cbnZhciBjdXJzb3I7XG52YXIgc2VyaWFsaXplU3R5bGVzID0gZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSwgc3R5bGVzLmNoYXJDb2RlQXQoc3R5bGVzLmxlbmd0aCAtIDEpID09PSA0Nik7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcbiAgICAvLyBpdCdzIDEgaW4gZGV2IGJlY2F1c2Ugd2UgaW5zZXJ0IHNvdXJjZSBtYXBzIHRoYXQgbWFwIGEgc2luZ2xlIHJ1bGUgdG8gYSBsb2NhdGlvblxuICAgIC8vIGFuZCB5b3UgY2FuIG9ubHkgaGF2ZSBvbmUgc291cmNlIG1hcCBwZXIgc3R5bGUgdGFnXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XG4gICAgICB2YXIgX3RhZyA9IGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKTtcblxuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKHRoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYmVmb3JlID0gdGhpcy5iZWZvcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoX3RhZywgYmVmb3JlKTtcbiAgICAgIHRoaXMudGFncy5wdXNoKF90YWcpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSByZWFsbHkgaG90IHBhdGhcbiAgICAgICAgLy8gd2UgY2hlY2sgdGhlIHNlY29uZCBjaGFyYWN0ZXIgZmlyc3QgYmVjYXVzZSBoYXZpbmcgXCJpXCJcbiAgICAgICAgLy8gYXMgdGhlIHNlY29uZCBjaGFyYWN0ZXIgd2lsbCBoYXBwZW4gbGVzcyBvZnRlbiB0aGFuXG4gICAgICAgIC8vIGhhdmluZyBcIkBcIiBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNSAmJiBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0OyAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICAgIC8vIHRoZSBiaWcgZHJhd2JhY2sgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAvLyB3ZSBuZWVkIHRvIGluc2VydCBAaW1wb3J0IHJ1bGVzIGJlZm9yZSBhbnl0aGluZyBlbHNlXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGVyZSB3aWxsIGJlIGFuIGVycm9yXG4gICAgICAgIC8vIHRlY2huaWNhbGx5IHRoaXMgbWVhbnMgdGhhdCB0aGUgQGltcG9ydCBydWxlcyB3aWxsXG4gICAgICAgIC8vIF91c3VhbGx5Xyhub3QgYWx3YXlzIHNpbmNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIHN0eWxlIHRhZ3MpXG4gICAgICAgIC8vIGJlIHRoZSBmaXJzdCBvbmVzIGluIHByb2QgYW5kIGdlbmVyYWxseSBsYXRlciBpbiBkZXZcbiAgICAgICAgLy8gdGhpcyBzaG91bGRuJ3QgcmVhbGx5IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZCB0aG91Z2hcbiAgICAgICAgLy8gQGltcG9ydCBpcyBnZW5lcmFsbHkgb25seSB1c2VkIGZvciBmb250IGZhY2VzIGZyb20gZ29vZ2xlIGZvbnRzIGFuZCBldGMuXG4gICAgICAgIC8vIHNvIHdoaWxlIHRoaXMgY291bGQgYmUgdGVjaG5pY2FsbHkgY29ycmVjdCB0aGVuIGl0IHdvdWxkIGJlIHNsb3dlciBhbmQgbGFyZ2VyXG4gICAgICAgIC8vIGZvciBhIHRpbnkgYml0IG9mIGNvcnJlY3RuZXNzIHRoYXQgd29uJ3QgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkXG4gICAgICAgIGlzSW1wb3J0UnVsZSA/IDAgOiBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgJiYgY2FjaGUuY29tcGF0ICE9PSB1bmRlZmluZWQpICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIG1heWJlU3R5bGVzID0gY2FjaGUuaW5zZXJ0KFwiLlwiICsgY2xhc3NOYW1lLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH07XG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xuIiwiZXhwb3J0IHZhciBnZXRSZW5kZXJQcm9wVmFsdWUgPSBmdW5jdGlvbiBnZXRSZW5kZXJQcm9wVmFsdWUocHJvcFZhbHVlKSB7XG4gIGlmICghcHJvcFZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaXNSZW5kZXJGdW5jdGlvbiA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICdmdW5jdGlvbic7XG5cbiAgaWYgKGlzUmVuZGVyRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlKCk7XG4gIH1cblxuICByZXR1cm4gcHJvcFZhbHVlO1xufTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgdmFyIHJlc3BvbnNpdmVBcnJheSA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5leHBvcnQgdmFyIHJlc3BvbnNpdmVNYXAgPSB7XG4gIHhzOiAnKG1heC13aWR0aDogNTc1cHgpJyxcbiAgc206ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgeGw6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG52YXIgc3Vic2NyaWJlcnMgPSBuZXcgTWFwKCk7XG52YXIgc3ViVWlkID0gLTE7XG52YXIgc2NyZWVucyA9IHt9O1xudmFyIHJlc3BvbnNpdmVPYnNlcnZlID0ge1xuICBtYXRjaEhhbmRsZXJzOiB7fSxcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBvaW50TWFwKSB7XG4gICAgc2NyZWVucyA9IHBvaW50TWFwO1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgIHJldHVybiBmdW5jKHNjcmVlbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdWJzY3JpYmVycy5zaXplID49IDE7XG4gIH0sXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGZ1bmMpIHtcbiAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMucmVnaXN0ZXIoKTtcbiAgICBzdWJVaWQgKz0gMTtcbiAgICBzdWJzY3JpYmVycy5zZXQoc3ViVWlkLCBmdW5jKTtcbiAgICBmdW5jKHNjcmVlbnMpO1xuICAgIHJldHVybiBzdWJVaWQ7XG4gIH0sXG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSh0b2tlbikge1xuICAgIHN1YnNjcmliZXJzW1wiZGVsZXRlXCJdKHRva2VuKTtcbiAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMudW5yZWdpc3RlcigpO1xuICB9LFxuICB1bnJlZ2lzdGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICB2YXIgaGFuZGxlciA9IF90aGlzLm1hdGNoSGFuZGxlcnNbbWF0Y2hNZWRpYVF1ZXJ5XTtcbiAgICAgIGhhbmRsZXIgPT09IG51bGwgfHwgaGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlci5tcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlciA9PT0gbnVsbCB8fCBoYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyLmxpc3RlbmVyKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpYmVycy5jbGVhcigpO1xuICB9LFxuICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG5cbiAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKF9yZWYpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBfcmVmLm1hdGNoZXM7XG5cbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKF9leHRlbmRzKF9leHRlbmRzKHt9LCBzY3JlZW5zKSwgX2RlZmluZVByb3BlcnR5KHt9LCBzY3JlZW4sIG1hdGNoZXMpKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEobWF0Y2hNZWRpYVF1ZXJ5KTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICBfdGhpczIubWF0Y2hIYW5kbGVyc1ttYXRjaE1lZGlhUXVlcnldID0ge1xuICAgICAgICBtcWw6IG1xbCxcbiAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyXG4gICAgICB9O1xuICAgICAgbGlzdGVuZXIobXFsKTtcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHJlc3BvbnNpdmVPYnNlcnZlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG52YXIgUm93Q29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBkZWZhdWx0IFJvd0NvbnRleHQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUm93Q29udGV4dCBmcm9tICcuL1Jvd0NvbnRleHQnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbmZ1bmN0aW9uIHBhcnNlRmxleChmbGV4KSB7XG4gIGlmICh0eXBlb2YgZmxleCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZmxleCwgXCIgXCIpLmNvbmNhdChmbGV4LCBcIiBhdXRvXCIpO1xuICB9XG5cbiAgaWYgKC9eXFxkKyhcXC5cXGQrKT8ocHh8ZW18cmVtfCUpJC8udGVzdChmbGV4KSkge1xuICAgIHJldHVybiBcIjAgMCBcIi5jb25jYXQoZmxleCk7XG4gIH1cblxuICByZXR1cm4gZmxleDtcbn1cblxudmFyIHNpemVzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciBDb2wgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQyID0gUmVhY3QudXNlQ29udGV4dChSb3dDb250ZXh0KSxcbiAgICAgIGd1dHRlciA9IF9SZWFjdCR1c2VDb250ZXh0Mi5ndXR0ZXIsXG4gICAgICB3cmFwID0gX1JlYWN0JHVzZUNvbnRleHQyLndyYXAsXG4gICAgICBzdXBwb3J0RmxleEdhcCA9IF9SZWFjdCR1c2VDb250ZXh0Mi5zdXBwb3J0RmxleEdhcDtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgc3BhbiA9IHByb3BzLnNwYW4sXG4gICAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0LFxuICAgICAgcHVzaCA9IHByb3BzLnB1c2gsXG4gICAgICBwdWxsID0gcHJvcHMucHVsbCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBmbGV4ID0gcHJvcHMuZmxleCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNwYW5cIiwgXCJvcmRlclwiLCBcIm9mZnNldFwiLCBcInB1c2hcIiwgXCJwdWxsXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJmbGV4XCIsIFwic3R5bGVcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NvbCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBzaXplQ2xhc3NPYmogPSB7fTtcbiAgc2l6ZXMuZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgc2l6ZVByb3BzID0ge307XG4gICAgdmFyIHByb3BTaXplID0gcHJvcHNbc2l6ZV07XG5cbiAgICBpZiAodHlwZW9mIHByb3BTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgc2l6ZVByb3BzLnNwYW4gPSBwcm9wU2l6ZTtcbiAgICB9IGVsc2UgaWYgKF90eXBlb2YocHJvcFNpemUpID09PSAnb2JqZWN0Jykge1xuICAgICAgc2l6ZVByb3BzID0gcHJvcFNpemUgfHwge307XG4gICAgfVxuXG4gICAgZGVsZXRlIG90aGVyc1tzaXplXTtcbiAgICBzaXplQ2xhc3NPYmogPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgc2l6ZUNsYXNzT2JqKSwgKF9leHRlbmRzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItXCIpLmNvbmNhdChzaXplUHJvcHMuc3BhbiksIHNpemVQcm9wcy5zcGFuICE9PSB1bmRlZmluZWQpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItb3JkZXItXCIpLmNvbmNhdChzaXplUHJvcHMub3JkZXIpLCBzaXplUHJvcHMub3JkZXIgfHwgc2l6ZVByb3BzLm9yZGVyID09PSAwKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLW9mZnNldC1cIikuY29uY2F0KHNpemVQcm9wcy5vZmZzZXQpLCBzaXplUHJvcHMub2Zmc2V0IHx8IHNpemVQcm9wcy5vZmZzZXQgPT09IDApLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItcHVzaC1cIikuY29uY2F0KHNpemVQcm9wcy5wdXNoKSwgc2l6ZVByb3BzLnB1c2ggfHwgc2l6ZVByb3BzLnB1c2ggPT09IDApLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItcHVsbC1cIikuY29uY2F0KHNpemVQcm9wcy5wdWxsKSwgc2l6ZVByb3BzLnB1bGwgfHwgc2l6ZVByb3BzLnB1bGwgPT09IDApLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9leHRlbmRzMikpO1xuICB9KTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNwYW4pLCBzcGFuICE9PSB1bmRlZmluZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3JkZXItXCIpLmNvbmNhdChvcmRlciksIG9yZGVyKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9mZnNldC1cIikuY29uY2F0KG9mZnNldCksIG9mZnNldCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wdXNoLVwiKS5jb25jYXQocHVzaCksIHB1c2gpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHVsbC1cIikuY29uY2F0KHB1bGwpLCBwdWxsKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUsIHNpemVDbGFzc09iaik7XG4gIHZhciBtZXJnZWRTdHlsZSA9IHt9OyAvLyBIb3Jpem9udGFsIGd1dHRlciB1c2UgcGFkZGluZ1xuXG4gIGlmIChndXR0ZXIgJiYgZ3V0dGVyWzBdID4gMCkge1xuICAgIHZhciBob3Jpem9udGFsR3V0dGVyID0gZ3V0dGVyWzBdIC8gMjtcbiAgICBtZXJnZWRTdHlsZS5wYWRkaW5nTGVmdCA9IGhvcml6b250YWxHdXR0ZXI7XG4gICAgbWVyZ2VkU3R5bGUucGFkZGluZ1JpZ2h0ID0gaG9yaXpvbnRhbEd1dHRlcjtcbiAgfSAvLyBWZXJ0aWNhbCBndXR0ZXIgdXNlIHBhZGRpbmcgd2hlbiBnYXAgbm90IHN1cHBvcnRcblxuXG4gIGlmIChndXR0ZXIgJiYgZ3V0dGVyWzFdID4gMCAmJiAhc3VwcG9ydEZsZXhHYXApIHtcbiAgICB2YXIgdmVydGljYWxHdXR0ZXIgPSBndXR0ZXJbMV0gLyAyO1xuICAgIG1lcmdlZFN0eWxlLnBhZGRpbmdUb3AgPSB2ZXJ0aWNhbEd1dHRlcjtcbiAgICBtZXJnZWRTdHlsZS5wYWRkaW5nQm90dG9tID0gdmVydGljYWxHdXR0ZXI7XG4gIH1cblxuICBpZiAoZmxleCkge1xuICAgIG1lcmdlZFN0eWxlLmZsZXggPSBwYXJzZUZsZXgoZmxleCk7IC8vIEhhY2sgZm9yIEZpcmVmb3ggdG8gYXZvaWQgc2l6ZSBpc3N1ZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8yMDAyMyNpc3N1ZWNvbW1lbnQtNTY0Mzg5NTUzXG5cbiAgICBpZiAoZmxleCA9PT0gJ2F1dG8nICYmIHdyYXAgPT09IGZhbHNlICYmICFtZXJnZWRTdHlsZS5taW5XaWR0aCkge1xuICAgICAgbWVyZ2VkU3R5bGUubWluV2lkdGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKF9leHRlbmRzKHt9LCBtZXJnZWRTdHlsZSksIHN0eWxlKSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSksIGNoaWxkcmVuKTtcbn0pO1xuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG5leHBvcnQgZGVmYXVsdCBDb2w7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3BvbnNpdmVPYnNlcnZlIGZyb20gJy4uLy4uL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlJztcblxuZnVuY3Rpb24gdXNlQnJlYWtwb2ludCgpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHt9KSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc2NyZWVucyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTY3JlZW5zID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbiA9IFJlc3BvbnNpdmVPYnNlcnZlLnN1YnNjcmliZShmdW5jdGlvbiAoc3VwcG9ydFNjcmVlbnMpIHtcbiAgICAgIHNldFNjcmVlbnMoc3VwcG9ydFNjcmVlbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2l2ZU9ic2VydmUudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHNjcmVlbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUJyZWFrcG9pbnQ7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZXRlY3RGbGV4R2FwU3VwcG9ydGVkIH0gZnJvbSAnLi4vLi4vX3V0aWwvc3R5bGVDaGVja2VyJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGZsZXhpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEZsZXhpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldEZsZXhpYmxlKGRldGVjdEZsZXhHYXBTdXBwb3J0ZWQoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGZsZXhpYmxlO1xufSk7IiwiaW1wb3J0IFJvdyBmcm9tICcuL3Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJy4vY29sJztcbmltcG9ydCB1c2VCcmVha3BvaW50IGZyb20gJy4vaG9va3MvdXNlQnJlYWtwb2ludCc7XG5leHBvcnQgeyBSb3csIENvbCB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICB1c2VCcmVha3BvaW50OiB1c2VCcmVha3BvaW50XG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBSb3dDb250ZXh0IGZyb20gJy4vUm93Q29udGV4dCc7XG5pbXBvcnQgeyB0dXBsZSB9IGZyb20gJy4uL191dGlsL3R5cGUnO1xuaW1wb3J0IFJlc3BvbnNpdmVPYnNlcnZlLCB7IHJlc3BvbnNpdmVBcnJheSB9IGZyb20gJy4uL191dGlsL3Jlc3BvbnNpdmVPYnNlcnZlJztcbmltcG9ydCB1c2VGbGV4R2FwU3VwcG9ydCBmcm9tICcuL2hvb2tzL3VzZUZsZXhHYXBTdXBwb3J0JztcbnZhciBSb3dBbGlnbnMgPSB0dXBsZSgndG9wJywgJ21pZGRsZScsICdib3R0b20nLCAnc3RyZXRjaCcpO1xudmFyIFJvd0p1c3RpZnkgPSB0dXBsZSgnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzcGFjZS1hcm91bmQnLCAnc3BhY2UtYmV0d2VlbicpO1xudmFyIFJvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAganVzdGlmeSA9IHByb3BzLmp1c3RpZnksXG4gICAgICBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZ3V0dGVyID0gcHJvcHMuZ3V0dGVyLFxuICAgICAgZ3V0dGVyID0gX3Byb3BzJGd1dHRlciA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRndXR0ZXIsXG4gICAgICB3cmFwID0gcHJvcHMud3JhcCxcbiAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwianVzdGlmeVwiLCBcImFsaWduXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJjaGlsZHJlblwiLCBcImd1dHRlclwiLCBcIndyYXBcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB4czogdHJ1ZSxcbiAgICBzbTogdHJ1ZSxcbiAgICBtZDogdHJ1ZSxcbiAgICBsZzogdHJ1ZSxcbiAgICB4bDogdHJ1ZSxcbiAgICB4eGw6IHRydWVcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHNjcmVlbnMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2NyZWVucyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHN1cHBvcnRGbGV4R2FwID0gdXNlRmxleEdhcFN1cHBvcnQoKTtcbiAgdmFyIGd1dHRlclJlZiA9IFJlYWN0LnVzZVJlZihndXR0ZXIpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9rZW4gPSBSZXNwb25zaXZlT2JzZXJ2ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgdmFyIGN1cnJlbnRHdXR0ZXIgPSBndXR0ZXJSZWYuY3VycmVudCB8fCAwO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3VycmVudEd1dHRlcikgJiYgX3R5cGVvZihjdXJyZW50R3V0dGVyKSA9PT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50R3V0dGVyKSAmJiAoX3R5cGVvZihjdXJyZW50R3V0dGVyWzBdKSA9PT0gJ29iamVjdCcgfHwgX3R5cGVvZihjdXJyZW50R3V0dGVyWzFdKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgIHNldFNjcmVlbnMoc2NyZWVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFJlc3BvbnNpdmVPYnNlcnZlLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgZ2V0R3V0dGVyID0gZnVuY3Rpb24gZ2V0R3V0dGVyKCkge1xuICAgIHZhciByZXN1bHRzID0gWzAsIDBdO1xuICAgIHZhciBub3JtYWxpemVkR3V0dGVyID0gQXJyYXkuaXNBcnJheShndXR0ZXIpID8gZ3V0dGVyIDogW2d1dHRlciwgMF07XG4gICAgbm9ybWFsaXplZEd1dHRlci5mb3JFYWNoKGZ1bmN0aW9uIChnLCBpbmRleCkge1xuICAgICAgaWYgKF90eXBlb2YoZykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2l2ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSByZXNwb25zaXZlQXJyYXlbaV07XG5cbiAgICAgICAgICBpZiAoc2NyZWVuc1ticmVha3BvaW50XSAmJiBnW2JyZWFrcG9pbnRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gZ1ticmVha3BvaW50XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSBnIHx8IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncm93JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGd1dHRlcnMgPSBnZXRHdXR0ZXIoKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uby13cmFwXCIpLCB3cmFwID09PSBmYWxzZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGp1c3RpZnkpLCBqdXN0aWZ5KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYWxpZ24pLCBhbGlnbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7IC8vIEFkZCBndXR0ZXIgcmVsYXRlZCBzdHlsZVxuXG4gIHZhciByb3dTdHlsZSA9IHt9O1xuICB2YXIgaG9yaXpvbnRhbEd1dHRlciA9IGd1dHRlcnNbMF0gPiAwID8gZ3V0dGVyc1swXSAvIC0yIDogdW5kZWZpbmVkO1xuICB2YXIgdmVydGljYWxHdXR0ZXIgPSBndXR0ZXJzWzFdID4gMCA/IGd1dHRlcnNbMV0gLyAtMiA6IHVuZGVmaW5lZDtcblxuICBpZiAoaG9yaXpvbnRhbEd1dHRlcikge1xuICAgIHJvd1N0eWxlLm1hcmdpbkxlZnQgPSBob3Jpem9udGFsR3V0dGVyO1xuICAgIHJvd1N0eWxlLm1hcmdpblJpZ2h0ID0gaG9yaXpvbnRhbEd1dHRlcjtcbiAgfVxuXG4gIGlmIChzdXBwb3J0RmxleEdhcCkge1xuICAgIC8vIFNldCBnYXAgZGlyZWN0IGlmIGZsZXggZ2FwIHN1cHBvcnRcbiAgICB2YXIgX2d1dHRlcnMgPSBfc2xpY2VkVG9BcnJheShndXR0ZXJzLCAyKTtcblxuICAgIHJvd1N0eWxlLnJvd0dhcCA9IF9ndXR0ZXJzWzFdO1xuICB9IGVsc2UgaWYgKHZlcnRpY2FsR3V0dGVyKSB7XG4gICAgcm93U3R5bGUubWFyZ2luVG9wID0gdmVydGljYWxHdXR0ZXI7XG4gICAgcm93U3R5bGUubWFyZ2luQm90dG9tID0gdmVydGljYWxHdXR0ZXI7XG4gIH1cblxuICB2YXIgcm93Q29udGV4dCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBndXR0ZXI6IGd1dHRlcnMsXG4gICAgICB3cmFwOiB3cmFwLFxuICAgICAgc3VwcG9ydEZsZXhHYXA6IHN1cHBvcnRGbGV4R2FwXG4gICAgfTtcbiAgfSwgW2d1dHRlcnMsIHdyYXAsIHN1cHBvcnRGbGV4R2FwXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3dDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJvd0NvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBzdHlsZTogX2V4dGVuZHMoX2V4dGVuZHMoe30sIHJvd1N0eWxlKSwgc3R5bGUpLFxuICAgIHJlZjogcmVmXG4gIH0pLCBjaGlsZHJlbikpO1xufSk7XG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcbmV4cG9ydCBkZWZhdWx0IFJvdzsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgeyBnZXRSZW5kZXJQcm9wVmFsdWUgfSBmcm9tICcuLi9fdXRpbC9nZXRSZW5kZXJQcm9wVmFsdWUnO1xuaW1wb3J0IHsgZ2V0VHJhbnNpdGlvbk5hbWUgfSBmcm9tICcuLi9fdXRpbC9tb3Rpb24nO1xudmFyIFBvcG92ZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgIGNvbnRlbnQgPSBfYS5jb250ZW50LFxuICAgICAgb3RoZXJQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwidGl0bGVcIiwgXCJjb250ZW50XCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBnZXRPdmVybGF5ID0gZnVuY3Rpb24gZ2V0T3ZlcmxheShwcmVmaXhDbHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aXRsZVwiKVxuICAgIH0sIGdldFJlbmRlclByb3BWYWx1ZSh0aXRsZSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXItY29udGVudFwiKVxuICAgIH0sIGdldFJlbmRlclByb3BWYWx1ZShjb250ZW50KSkpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3BvcG92ZXInLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgcm9vdFByZWZpeENscyA9IGdldFByZWZpeENscygpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICByZWY6IHJlZixcbiAgICBvdmVybGF5OiBnZXRPdmVybGF5KHByZWZpeENscyksXG4gICAgdHJhbnNpdGlvbk5hbWU6IGdldFRyYW5zaXRpb25OYW1lKHJvb3RQcmVmaXhDbHMsICd6b29tLWJpZycsIG90aGVyUHJvcHMudHJhbnNpdGlvbk5hbWUpXG4gIH0pKTtcbn0pO1xuUG9wb3Zlci5kaXNwbGF5TmFtZSA9ICdQb3BvdmVyJztcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB0cmlnZ2VyOiAnaG92ZXInLFxuICBtb3VzZUVudGVyRGVsYXk6IDAuMSxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIG92ZXJsYXlTdHlsZToge31cbn07XG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyAvLyBzdHlsZSBkZXBlbmRlbmNpZXNcbi8vIGRlcHMtbGludC1za2lwOiB0b29sdGlwIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vZ3JpZCc7XG5leHBvcnQgZGVmYXVsdCBSb3c7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnOyAvLyBzdHlsZSBkZXBlbmRlbmNpZXNcbi8vIGRlcHMtbGludC1za2lwOiBncmlkXG5cbmltcG9ydCAnLi4vLi4vZ3JpZC9zdHlsZS9jc3MnOyIsInZhciBzYWZlSXNOYU4gPSBOdW1iZXIuaXNOYU4gfHxcbiAgICBmdW5jdGlvbiBwb255ZmlsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgfTtcbmZ1bmN0aW9uIGlzRXF1YWwoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2FmZUlzTmFOKGZpcnN0KSAmJiBzYWZlSXNOYU4oc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKG5ld0lucHV0c1tpXSwgbGFzdElucHV0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGxhc3RUaGlzO1xuICAgIHZhciBsYXN0QXJncyA9IFtdO1xuICAgIHZhciBsYXN0UmVzdWx0O1xuICAgIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICAgICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHNpemVyU3R5bGUgPSB7XG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHR0b3A6IDAsXG5cdGxlZnQ6IDAsXG5cdHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuXHRoZWlnaHQ6IDAsXG5cdG92ZXJmbG93OiAnc2Nyb2xsJyxcblx0d2hpdGVTcGFjZTogJ3ByZSdcbn07XG5cbnZhciBJTlBVVF9QUk9QU19CTEFDS0xJU1QgPSBbJ2V4dHJhV2lkdGgnLCAnaW5qZWN0U3R5bGVzJywgJ2lucHV0Q2xhc3NOYW1lJywgJ2lucHV0UmVmJywgJ2lucHV0U3R5bGUnLCAnbWluV2lkdGgnLCAnb25BdXRvc2l6ZScsICdwbGFjZWhvbGRlcklzTWluV2lkdGgnXTtcblxudmFyIGNsZWFuSW5wdXRQcm9wcyA9IGZ1bmN0aW9uIGNsZWFuSW5wdXRQcm9wcyhpbnB1dFByb3BzKSB7XG5cdElOUFVUX1BST1BTX0JMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuXHRcdHJldHVybiBkZWxldGUgaW5wdXRQcm9wc1tmaWVsZF07XG5cdH0pO1xuXHRyZXR1cm4gaW5wdXRQcm9wcztcbn07XG5cbnZhciBjb3B5U3R5bGVzID0gZnVuY3Rpb24gY29weVN0eWxlcyhzdHlsZXMsIG5vZGUpIHtcblx0bm9kZS5zdHlsZS5mb250U2l6ZSA9IHN0eWxlcy5mb250U2l6ZTtcblx0bm9kZS5zdHlsZS5mb250RmFtaWx5ID0gc3R5bGVzLmZvbnRGYW1pbHk7XG5cdG5vZGUuc3R5bGUuZm9udFdlaWdodCA9IHN0eWxlcy5mb250V2VpZ2h0O1xuXHRub2RlLnN0eWxlLmZvbnRTdHlsZSA9IHN0eWxlcy5mb250U3R5bGU7XG5cdG5vZGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IHN0eWxlcy5sZXR0ZXJTcGFjaW5nO1xuXHRub2RlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBzdHlsZXMudGV4dFRyYW5zZm9ybTtcbn07XG5cbnZhciBpc0lFID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciA/IC9NU0lFIHxUcmlkZW50XFwvfEVkZ2VcXC8vLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIDogZmFsc2U7XG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcblx0Ly8gd2Ugb25seSBuZWVkIGFuIGF1dG8tZ2VuZXJhdGVkIElEIGZvciBzdHlsZXNoZWV0IGluamVjdGlvbiwgd2hpY2ggaXMgb25seVxuXHQvLyB1c2VkIGZvciBJRS4gc28gaWYgdGhlIGJyb3dzZXIgaXMgbm90IElFLCB0aGlzIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkLlxuXHRyZXR1cm4gaXNJRSA/ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikgOiB1bmRlZmluZWQ7XG59O1xuXG52YXIgQXV0b3NpemVJbnB1dCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhBdXRvc2l6ZUlucHV0LCBfQ29tcG9uZW50KTtcblxuXHRfY3JlYXRlQ2xhc3MoQXV0b3NpemVJbnB1dCwgbnVsbCwgW3tcblx0XHRrZXk6ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG5cdFx0XHR2YXIgaWQgPSBwcm9wcy5pZDtcblxuXHRcdFx0cmV0dXJuIGlkICE9PSBzdGF0ZS5wcmV2SWQgPyB7IGlucHV0SWQ6IGlkIHx8IGdlbmVyYXRlSWQoKSwgcHJldklkOiBpZCB9IDogbnVsbDtcblx0XHR9XG5cdH1dKTtcblxuXHRmdW5jdGlvbiBBdXRvc2l6ZUlucHV0KHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dG9zaXplSW5wdXQpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dG9zaXplSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdXRvc2l6ZUlucHV0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaW5wdXRSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLmlucHV0ID0gZWw7XG5cdFx0XHRpZiAodHlwZW9mIF90aGlzLnByb3BzLmlucHV0UmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdF90aGlzLnByb3BzLmlucHV0UmVmKGVsKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuc2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFdpZHRoOiBwcm9wcy5taW5XaWR0aCxcblx0XHRcdGlucHV0SWQ6IHByb3BzLmlkIHx8IGdlbmVyYXRlSWQoKSxcblx0XHRcdHByZXZJZDogcHJvcHMuaWRcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBdXRvc2l6ZUlucHV0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5jb3B5SW5wdXRTdHlsZXMoKTtcblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0aWYgKHByZXZTdGF0ZS5pbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b3NpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQXV0b3NpemUodGhpcy5zdGF0ZS5pbnB1dFdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvcHlJbnB1dFN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvcHlJbnB1dFN0eWxlcygpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW5wdXRTdHlsZXMgPSB0aGlzLmlucHV0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5wdXQpO1xuXHRcdFx0aWYgKCFpbnB1dFN0eWxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnNpemVyKTtcblx0XHRcdGlmICh0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpIHtcblx0XHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5wbGFjZUhvbGRlclNpemVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGVJbnB1dFdpZHRoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aCgpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF0aGlzLnNpemVyIHx8IHR5cGVvZiB0aGlzLnNpemVyLnNjcm9sbFdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgbmV3SW5wdXRXaWR0aCA9IHZvaWQgMDtcblx0XHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmICghdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gTWF0aC5tYXgodGhpcy5zaXplci5zY3JvbGxXaWR0aCwgdGhpcy5wbGFjZUhvbGRlclNpemVyLnNjcm9sbFdpZHRoKSArIDI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5zaXplci5zY3JvbGxXaWR0aCArIDI7XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZXh0cmFXaWR0aCB0byB0aGUgZGV0ZWN0ZWQgd2lkdGguIGZvciBudW1iZXIgdHlwZXMsIHRoaXMgZGVmYXVsdHMgdG8gMTYgdG8gYWxsb3cgZm9yIHRoZSBzdGVwcGVyIFVJXG5cdFx0XHR2YXIgZXh0cmFXaWR0aCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgdGhpcy5wcm9wcy5leHRyYVdpZHRoID09PSB1bmRlZmluZWQgPyAxNiA6IHBhcnNlSW50KHRoaXMucHJvcHMuZXh0cmFXaWR0aCkgfHwgMDtcblx0XHRcdG5ld0lucHV0V2lkdGggKz0gZXh0cmFXaWR0aDtcblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoIDwgdGhpcy5wcm9wcy5taW5XaWR0aCkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5wcm9wcy5taW5XaWR0aDtcblx0XHRcdH1cblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRXaWR0aDogbmV3SW5wdXRXaWR0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldElucHV0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5wdXQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdibHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcblx0XHRcdHRoaXMuaW5wdXQuYmx1cigpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyU3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgaW5qZWN0cyBzdHlsZXMgdG8gaGlkZSBJRSdzIGNsZWFyIGluZGljYXRvciwgd2hpY2ggbWVzc2VzXG5cdFx0XHQvLyB3aXRoIGlucHV0IHNpemUgZGV0ZWN0aW9uLiB0aGUgc3R5bGVzaGVldCBpcyBvbmx5IGluamVjdGVkIHdoZW4gdGhlXG5cdFx0XHQvLyBicm93c2VyIGlzIElFLCBhbmQgY2FuIGFsc28gYmUgZGlzYWJsZWQgYnkgdGhlIGBpbmplY3RTdHlsZXNgIHByb3AuXG5cdFx0XHR2YXIgaW5qZWN0U3R5bGVzID0gdGhpcy5wcm9wcy5pbmplY3RTdHlsZXM7XG5cblx0XHRcdHJldHVybiBpc0lFICYmIGluamVjdFN0eWxlcyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcblx0XHRcdFx0XHRfX2h0bWw6ICdpbnB1dCMnICsgdGhpcy5zdGF0ZS5pbnB1dElkICsgJzo6LW1zLWNsZWFyIHtkaXNwbGF5OiBub25lO30nXG5cdFx0XHRcdH0gfSkgOiBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBzaXplclZhbHVlID0gW3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlLCB0aGlzLnByb3BzLnZhbHVlLCAnJ10ucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcblx0XHRcdFx0aWYgKHByZXZpb3VzVmFsdWUgIT09IG51bGwgJiYgcHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRWYWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgd3JhcHBlclN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuc3R5bGUpO1xuXHRcdFx0aWYgKCF3cmFwcGVyU3R5bGUuZGlzcGxheSkgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuXHRcdFx0dmFyIGlucHV0U3R5bGUgPSBfZXh0ZW5kcyh7XG5cdFx0XHRcdGJveFNpemluZzogJ2NvbnRlbnQtYm94Jyxcblx0XHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCArICdweCdcblx0XHRcdH0sIHRoaXMucHJvcHMuaW5wdXRTdHlsZSk7XG5cblx0XHRcdHZhciBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtdKTtcblxuXHRcdFx0Y2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpO1xuXHRcdFx0aW5wdXRQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lO1xuXHRcdFx0aW5wdXRQcm9wcy5pZCA9IHRoaXMuc3RhdGUuaW5wdXRJZDtcblx0XHRcdGlucHV0UHJvcHMuc3R5bGUgPSBpbnB1dFN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB3cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJTdHlsZXMoKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHsgcmVmOiB0aGlzLmlucHV0UmVmIH0pKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMuc2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0c2l6ZXJWYWx1ZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMucGxhY2VIb2xkZXJTaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHRcdCkgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBdXRvc2l6ZUlucHV0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b3NpemVJbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0ZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gZGVmYXVsdCBmaWVsZCB2YWx1ZVxuXHRleHRyYVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gYWRkaXRpb25hbCB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBpZCB0byB1c2UgZm9yIHRoZSBpbnB1dCwgY2FuIGJlIHNldCBmb3IgY29uc2lzdGVudCBzbmFwc2hvdHNcblx0aW5qZWN0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGluamVjdCB0aGUgY3VzdG9tIHN0eWxlc2hlZXQgdG8gaGlkZSBjbGVhciBVSSwgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRpbnB1dENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmVmIGNhbGxiYWNrIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0bWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBtaW5pbXVtIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRvbkF1dG9zaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQXV0b3NpemUgaGFuZGxlcjogZnVuY3Rpb24obmV3V2lkdGgpIHt9XG5cdG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7fVxuXHRwbGFjZWhvbGRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBsYWNlaG9sZGVyIHRleHRcblx0cGxhY2Vob2xkZXJJc01pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRvbid0IGNvbGxhcHNlIHNpemUgdG8gbGVzcyB0aGFuIHRoZSBwbGFjZWhvbGRlclxuXHRzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSAvLyBmaWVsZCB2YWx1ZVxufTtcbkF1dG9zaXplSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRtaW5XaWR0aDogMSxcblx0aW5qZWN0U3R5bGVzOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdXRvc2l6ZUlucHV0OyIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAncmVhY3QnO1xuaW1wb3J0ICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgJy4uLy4uL2Rpc3QvaW5kZXgtNzViMDJiYWMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTZWxlY3QgfSBmcm9tICcuLi8uLi9kaXN0L1NlbGVjdC1lMWNmNDlhZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuaW1wb3J0IHsgbSBhcyBtYW5hZ2VTdGF0ZSB9IGZyb20gJy4uLy4uL2Rpc3Qvc3RhdGVNYW5hZ2VyLTJmMmI2ZjViLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IG1ha2VBc3luY1NlbGVjdCB9IGZyb20gJy4uLy4uL2FzeW5jL2Rpc3QvcmVhY3Qtc2VsZWN0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IG1ha2VDcmVhdGFibGVTZWxlY3QgfSBmcm9tICcuLi8uLi9jcmVhdGFibGUvZGlzdC9yZWFjdC1zZWxlY3QuYnJvd3Nlci5lc20uanMnO1xuXG52YXIgU2VsZWN0Q3JlYXRhYmxlID0gbWFrZUNyZWF0YWJsZVNlbGVjdChTZWxlY3QpO1xudmFyIFNlbGVjdENyZWF0YWJsZVN0YXRlID0gbWFuYWdlU3RhdGUoU2VsZWN0Q3JlYXRhYmxlKTtcbnZhciBBc3luY0NyZWF0YWJsZSA9IG1ha2VBc3luY1NlbGVjdChTZWxlY3RDcmVhdGFibGVTdGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzeW5jQ3JlYXRhYmxlO1xuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgeyBHIGFzIGhhbmRsZUlucHV0Q2hhbmdlIH0gZnJvbSAnLi4vLi4vZGlzdC9pbmRleC03NWIwMmJhYy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4uLy4uL2Rpc3QvU2VsZWN0LWUxY2Y0OWFlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwnO1xuaW1wb3J0ICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5pbXBvcnQgeyBtIGFzIG1hbmFnZVN0YXRlIH0gZnJvbSAnLi4vLi4vZGlzdC9zdGF0ZU1hbmFnZXItMmYyYjZmNWIuYnJvd3Nlci5lc20uanMnO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjYWNoZU9wdGlvbnM6IGZhbHNlLFxuICBkZWZhdWx0T3B0aW9uczogZmFsc2UsXG4gIGZpbHRlck9wdGlvbjogbnVsbCxcbiAgaXNMb2FkaW5nOiBmYWxzZVxufTtcbnZhciBtYWtlQXN5bmNTZWxlY3QgPSBmdW5jdGlvbiBtYWtlQXN5bmNTZWxlY3QoU2VsZWN0Q29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBc3luYywgX0NvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFzeW5jKTtcblxuICAgIGZ1bmN0aW9uIEFzeW5jKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBc3luYyk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICBfdGhpcy5zZWxlY3QgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5sYXN0UmVxdWVzdCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzLm9wdGlvbnNDYWNoZSA9IHt9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNhY2hlT3B0aW9ucyA9IF90aGlzJHByb3BzLmNhY2hlT3B0aW9ucyxcbiAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbklucHV0Q2hhbmdlOyAvLyBUT0RPXG5cbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBoYW5kbGVJbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSk7XG5cbiAgICAgICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgZGVsZXRlIF90aGlzLmxhc3RSZXF1ZXN0O1xuXG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGxvYWRlZE9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NFbXB0eU9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FjaGVPcHRpb25zICYmIF90aGlzLm9wdGlvbnNDYWNoZVtpbnB1dFZhbHVlXSkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgbG9hZGVkT3B0aW9uczogX3RoaXMub3B0aW9uc0NhY2hlW2lucHV0VmFsdWVdLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NFbXB0eU9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlcXVlc3QgPSBfdGhpcy5sYXN0UmVxdWVzdCA9IHt9O1xuXG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NFbXB0eU9wdGlvbnM6ICFfdGhpcy5zdGF0ZS5sb2FkZWRJbnB1dFZhbHVlXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpcy5tb3VudGVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zQ2FjaGVbaW5wdXRWYWx1ZV0gPSBvcHRpb25zO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHJlcXVlc3QgIT09IF90aGlzLmxhc3RSZXF1ZXN0KSByZXR1cm47XG4gICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5sYXN0UmVxdWVzdDtcblxuICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgIGxvYWRlZE9wdGlvbnM6IG9wdGlvbnMgfHwgW10sXG4gICAgICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBBcnJheS5pc0FycmF5KHByb3BzLmRlZmF1bHRPcHRpb25zKSA/IHByb3BzLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkLFxuICAgICAgICBpbnB1dFZhbHVlOiB0eXBlb2YgcHJvcHMuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5pbnB1dFZhbHVlIDogJycsXG4gICAgICAgIGlzTG9hZGluZzogcHJvcHMuZGVmYXVsdE9wdGlvbnMgPT09IHRydWUsXG4gICAgICAgIGxvYWRlZE9wdGlvbnM6IFtdLFxuICAgICAgICBwYXNzRW1wdHlPcHRpb25zOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXN5bmMsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0gdGhpcy5wcm9wcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cbiAgICAgICAgaWYgKGRlZmF1bHRPcHRpb25zID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFfdGhpczIubW91bnRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGlzTG9hZGluZyA9ICEhX3RoaXMyLmxhc3RSZXF1ZXN0O1xuXG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9ucyB8fCBbXSxcbiAgICAgICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjYWNoZU9wdGlvbnMgcHJvcCBjaGFuZ2VzLCBjbGVhciB0aGUgY2FjaGVcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jYWNoZU9wdGlvbnMgIT09IHRoaXMucHJvcHMuY2FjaGVPcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zQ2FjaGUgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuZGVmYXVsdE9wdGlvbnMgIT09IHRoaXMucHJvcHMuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBBcnJheS5pc0FycmF5KG5leHRQcm9wcy5kZWZhdWx0T3B0aW9ucykgPyBuZXh0UHJvcHMuZGVmYXVsdE9wdGlvbnMgOiB1bmRlZmluZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibG9hZE9wdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgbG9hZE9wdGlvbnMgPSB0aGlzLnByb3BzLmxvYWRPcHRpb25zO1xuICAgICAgICBpZiAoIWxvYWRPcHRpb25zKSByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgdmFyIGxvYWRlciA9IGxvYWRPcHRpb25zKGlucHV0VmFsdWUsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAobG9hZGVyICYmIHR5cGVvZiBsb2FkZXIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxvYWRlci50aGVuKGNhbGxiYWNrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbG9hZE9wdGlvbnMgPSBfdGhpcyRwcm9wczIubG9hZE9wdGlvbnMsXG4gICAgICAgICAgICBpc0xvYWRpbmdQcm9wID0gX3RoaXMkcHJvcHMyLmlzTG9hZGluZyxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1wibG9hZE9wdGlvbnNcIiwgXCJpc0xvYWRpbmdcIl0pO1xuXG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF90aGlzJHN0YXRlLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHN0YXRlLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRzdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlID0gX3RoaXMkc3RhdGUubG9hZGVkSW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGxvYWRlZE9wdGlvbnMgPSBfdGhpcyRzdGF0ZS5sb2FkZWRPcHRpb25zLFxuICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9ucyA9IF90aGlzJHN0YXRlLnBhc3NFbXB0eU9wdGlvbnM7XG4gICAgICAgIHZhciBvcHRpb25zID0gcGFzc0VtcHR5T3B0aW9ucyA/IFtdIDogaW5wdXRWYWx1ZSAmJiBsb2FkZWRJbnB1dFZhbHVlID8gbG9hZGVkT3B0aW9ucyA6IGRlZmF1bHRPcHRpb25zIHx8IFtdO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICBfdGhpczMuc2VsZWN0ID0gX3JlZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcgfHwgaXNMb2FkaW5nUHJvcCxcbiAgICAgICAgICBvbklucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXN5bmM7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcywgX3RlbXA7XG59O1xudmFyIFNlbGVjdFN0YXRlID0gbWFuYWdlU3RhdGUoU2VsZWN0KTtcbnZhciBBc3luYyA9IG1ha2VBc3luY1NlbGVjdChTZWxlY3RTdGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzeW5jO1xuZXhwb3J0IHsgZGVmYXVsdFByb3BzLCBtYWtlQXN5bmNTZWxlY3QgfTtcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ21lbW9pemUtb25lJztcbmltcG9ydCAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCB7IEMgYXMgY2xlYW5WYWx1ZSB9IGZyb20gJy4uLy4uL2Rpc3QvaW5kZXgtNzViMDJiYWMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTZWxlY3QgfSBmcm9tICcuLi8uLi9kaXN0L1NlbGVjdC1lMWNmNDlhZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuaW1wb3J0IHsgbSBhcyBtYW5hZ2VTdGF0ZSB9IGZyb20gJy4uLy4uL2Rpc3Qvc3RhdGVNYW5hZ2VyLTJmMmI2ZjViLmJyb3dzZXIuZXNtLmpzJztcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGNvbXBhcmVPcHRpb24gPSBmdW5jdGlvbiBjb21wYXJlT3B0aW9uKCkge1xuICB2YXIgaW5wdXRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gIHZhciBvcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGNhbmRpZGF0ZSA9IFN0cmluZyhpbnB1dFZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgb3B0aW9uVmFsdWUgPSBTdHJpbmcob3B0aW9uLnZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgb3B0aW9uTGFiZWwgPSBTdHJpbmcob3B0aW9uLmxhYmVsKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gb3B0aW9uVmFsdWUgPT09IGNhbmRpZGF0ZSB8fCBvcHRpb25MYWJlbCA9PT0gY2FuZGlkYXRlO1xufTtcblxudmFyIGJ1aWx0aW5zID0ge1xuICBmb3JtYXRDcmVhdGVMYWJlbDogZnVuY3Rpb24gZm9ybWF0Q3JlYXRlTGFiZWwoaW5wdXRWYWx1ZSkge1xuICAgIHJldHVybiBcIkNyZWF0ZSBcXFwiXCIuY29uY2F0KGlucHV0VmFsdWUsIFwiXFxcIlwiKTtcbiAgfSxcbiAgaXNWYWxpZE5ld09wdGlvbjogZnVuY3Rpb24gaXNWYWxpZE5ld09wdGlvbihpbnB1dFZhbHVlLCBzZWxlY3RWYWx1ZSwgc2VsZWN0T3B0aW9ucykge1xuICAgIHJldHVybiAhKCFpbnB1dFZhbHVlIHx8IHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb24oaW5wdXRWYWx1ZSwgb3B0aW9uKTtcbiAgICB9KSB8fCBzZWxlY3RPcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb24oaW5wdXRWYWx1ZSwgb3B0aW9uKTtcbiAgICB9KSk7XG4gIH0sXG4gIGdldE5ld09wdGlvbkRhdGE6IGZ1bmN0aW9uIGdldE5ld09wdGlvbkRhdGEoaW5wdXRWYWx1ZSwgb3B0aW9uTGFiZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IG9wdGlvbkxhYmVsLFxuICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICBfX2lzTmV3X186IHRydWVcbiAgICB9O1xuICB9XG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe1xuICBhbGxvd0NyZWF0ZVdoaWxlTG9hZGluZzogZmFsc2UsXG4gIGNyZWF0ZU9wdGlvblBvc2l0aW9uOiAnbGFzdCdcbn0sIGJ1aWx0aW5zKTtcbnZhciBtYWtlQ3JlYXRhYmxlU2VsZWN0ID0gZnVuY3Rpb24gbWFrZUNyZWF0YWJsZVNlbGVjdChTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENyZWF0YWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENyZWF0YWJsZSk7XG5cbiAgICBmdW5jdGlvbiBDcmVhdGFibGUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyZWF0YWJsZSk7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgX3RoaXMuc2VsZWN0ID0gdm9pZCAwO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldE5ld09wdGlvbkRhdGEgPSBfdGhpcyRwcm9wcy5nZXROZXdPcHRpb25EYXRhLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgICBvbkNyZWF0ZU9wdGlvbiA9IF90aGlzJHByb3BzLm9uQ3JlYXRlT3B0aW9uLFxuICAgICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wcy5uYW1lO1xuXG4gICAgICAgIGlmIChhY3Rpb25NZXRhLmFjdGlvbiAhPT0gJ3NlbGVjdC1vcHRpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdPcHRpb24gPSBfdGhpcy5zdGF0ZS5uZXdPcHRpb247XG4gICAgICAgIHZhciB2YWx1ZUFycmF5ID0gQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkgPyBuZXdWYWx1ZSA6IFtuZXdWYWx1ZV07XG5cbiAgICAgICAgaWYgKHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXSA9PT0gbmV3T3B0aW9uKSB7XG4gICAgICAgICAgaWYgKG9uQ3JlYXRlT3B0aW9uKSBvbkNyZWF0ZU9wdGlvbihpbnB1dFZhbHVlKTtlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb25EYXRhID0gZ2V0TmV3T3B0aW9uRGF0YShpbnB1dFZhbHVlLCBpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBuZXdBY3Rpb25NZXRhID0ge1xuICAgICAgICAgICAgICBhY3Rpb246ICdjcmVhdGUtb3B0aW9uJyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGVhblZhbHVlKHZhbHVlKSksIFtuZXdPcHRpb25EYXRhXSksIG5ld0FjdGlvbk1ldGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobmV3T3B0aW9uRGF0YSwgbmV3QWN0aW9uTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyB8fCBbXTtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBuZXdPcHRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ3JlYXRhYmxlLCBbe1xuICAgICAga2V5OiBcIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHZhciBhbGxvd0NyZWF0ZVdoaWxlTG9hZGluZyA9IG5leHRQcm9wcy5hbGxvd0NyZWF0ZVdoaWxlTG9hZGluZyxcbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvblBvc2l0aW9uID0gbmV4dFByb3BzLmNyZWF0ZU9wdGlvblBvc2l0aW9uLFxuICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWwgPSBuZXh0UHJvcHMuZm9ybWF0Q3JlYXRlTGFiZWwsXG4gICAgICAgICAgICBnZXROZXdPcHRpb25EYXRhID0gbmV4dFByb3BzLmdldE5ld09wdGlvbkRhdGEsXG4gICAgICAgICAgICBpbnB1dFZhbHVlID0gbmV4dFByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBpc0xvYWRpbmcgPSBuZXh0UHJvcHMuaXNMb2FkaW5nLFxuICAgICAgICAgICAgaXNWYWxpZE5ld09wdGlvbiA9IG5leHRQcm9wcy5pc1ZhbGlkTmV3T3B0aW9uLFxuICAgICAgICAgICAgdmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBvcHRpb25zID0gbmV4dFByb3BzLm9wdGlvbnMgfHwgW107XG4gICAgICAgIHZhciBuZXdPcHRpb24gPSB0aGlzLnN0YXRlLm5ld09wdGlvbjtcblxuICAgICAgICBpZiAoaXNWYWxpZE5ld09wdGlvbihpbnB1dFZhbHVlLCBjbGVhblZhbHVlKHZhbHVlKSwgb3B0aW9ucykpIHtcbiAgICAgICAgICBuZXdPcHRpb24gPSBnZXROZXdPcHRpb25EYXRhKGlucHV0VmFsdWUsIGZvcm1hdENyZWF0ZUxhYmVsKGlucHV0VmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBuZXdPcHRpb246IG5ld09wdGlvbixcbiAgICAgICAgICBvcHRpb25zOiAoYWxsb3dDcmVhdGVXaGlsZUxvYWRpbmcgfHwgIWlzTG9hZGluZykgJiYgbmV3T3B0aW9uID8gY3JlYXRlT3B0aW9uUG9zaXRpb24gPT09ICdmaXJzdCcgPyBbbmV3T3B0aW9uXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9wdGlvbnMpKSA6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob3B0aW9ucyksIFtuZXdPcHRpb25dKSA6IG9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgX3RoaXMyLnNlbGVjdCA9IF9yZWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ3JlYXRhYmxlO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMsIF90ZW1wO1xufTsgLy8gVE9ETzogZG8gdGhpcyBpbiBwYWNrYWdlIGVudHJ5cG9pbnRcblxudmFyIFNlbGVjdENyZWF0YWJsZSA9IG1ha2VDcmVhdGFibGVTZWxlY3QoU2VsZWN0KTtcbnZhciBDcmVhdGFibGUgPSBtYW5hZ2VTdGF0ZShTZWxlY3RDcmVhdGFibGUpO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGFibGU7XG5leHBvcnQgeyBkZWZhdWx0UHJvcHMsIG1ha2VDcmVhdGFibGVTZWxlY3QgfTtcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGMgYXMgY2xlYXJJbmRpY2F0b3JDU1MsIGEgYXMgY29udGFpbmVyQ1NTLCBiIGFzIGNzcywgZCBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgZSBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgZiBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGggYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgaiBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbSBhcyBtZW51Q1NTLCBrIGFzIG1lbnVMaXN0Q1NTLCBuIGFzIG1lbnVQb3J0YWxDU1MsIG8gYXMgbXVsdGlWYWx1ZUNTUywgcCBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHEgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgciBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCBzIGFzIG9wdGlvbkNTUywgdCBhcyBwbGFjZWhvbGRlckNTUywgdSBhcyBjc3MkMSwgdiBhcyB2YWx1ZUNvbnRhaW5lckNTUywgdyBhcyBpc1RvdWNoQ2FwYWJsZSwgeCBhcyBpc01vYmlsZURldmljZSwgeSBhcyBkZWZhdWx0Q29tcG9uZW50cywgeiBhcyBjbGFzc05hbWVzLCBBIGFzIGlzRG9jdW1lbnRFbGVtZW50LCBCIGFzIGV4cG9ydGVkRXF1YWwsIEMgYXMgY2xlYW5WYWx1ZSwgRCBhcyBzY3JvbGxJbnRvVmlldywgRSBhcyBub29wLCBNIGFzIE1lbnVQbGFjZXIgfSBmcm9tICcuL2luZGV4LTc1YjAyYmFjLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBfY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbnZhciBkaWFjcml0aWNzID0gW3tcbiAgYmFzZTogJ0EnLFxuICBsZXR0ZXJzOiBcIkFcXHUyNEI2XFx1RkYyMVxceEMwXFx4QzFcXHhDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHhDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx4QzRcXHUwMURFXFx1MUVBMlxceEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZcIlxufSwge1xuICBiYXNlOiAnQUEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzJcIlxufSwge1xuICBiYXNlOiAnQUUnLFxuICBsZXR0ZXJzOiBcIlxceEM2XFx1MDFGQ1xcdTAxRTJcIlxufSwge1xuICBiYXNlOiAnQU8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzRcIlxufSwge1xuICBiYXNlOiAnQVUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzZcIlxufSwge1xuICBiYXNlOiAnQVYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzhcXHVBNzNBXCJcbn0sIHtcbiAgYmFzZTogJ0FZJyxcbiAgbGV0dGVyczogXCJcXHVBNzNDXCJcbn0sIHtcbiAgYmFzZTogJ0InLFxuICBsZXR0ZXJzOiBcIkJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MVwiXG59LCB7XG4gIGJhc2U6ICdDJyxcbiAgbGV0dGVyczogXCJDXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx4QzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXCJcbn0sIHtcbiAgYmFzZTogJ0QnLFxuICBsZXR0ZXJzOiBcIkRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XCJcbn0sIHtcbiAgYmFzZTogJ0RaJyxcbiAgbGV0dGVyczogXCJcXHUwMUYxXFx1MDFDNFwiXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMlxcdTAxQzVcIlxufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IFwiRVxcdTI0QkFcXHVGRjI1XFx4QzhcXHhDOVxceENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxceENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVwiXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogXCJGXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIlxufSwge1xuICBiYXNlOiAnRycsXG4gIGxldHRlcnM6IFwiR1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXCJcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiBcIkhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCJcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiBcIklcXHUyNEJFXFx1RkYyOVxceENDXFx4Q0RcXHhDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHhDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N1wiXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogXCJKXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFwiXG59LCB7XG4gIGJhc2U6ICdLJyxcbiAgbGV0dGVyczogXCJLXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwiXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogXCJMXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIlxufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzdcIlxufSwge1xuICBiYXNlOiAnTGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzhcIlxufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IFwiTVxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNcIlxufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IFwiTlxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRcIlxufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0FcIlxufSwge1xuICBiYXNlOiAnTmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0JcIlxufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IFwiT1xcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IFwiXFx1MDFBMlwiXG59LCB7XG4gIGJhc2U6ICdPTycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RVwiXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IFwiXFx1MDIyMlwiXG59LCB7XG4gIGJhc2U6ICdQJyxcbiAgbGV0dGVyczogXCJQXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJcbn0sIHtcbiAgYmFzZTogJ1EnLFxuICBsZXR0ZXJzOiBcIlFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwiXG59LCB7XG4gIGJhc2U6ICdSJyxcbiAgbGV0dGVyczogXCJSXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4MlwiXG59LCB7XG4gIGJhc2U6ICdTJyxcbiAgbGV0dGVyczogXCJTXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NFwiXG59LCB7XG4gIGJhc2U6ICdUJyxcbiAgbGV0dGVyczogXCJUXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIlxufSwge1xuICBiYXNlOiAnVFonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjhcIlxufSwge1xuICBiYXNlOiAnVScsXG4gIGxldHRlcnM6IFwiVVxcdTI0Q0FcXHVGRjM1XFx4RDlcXHhEQVxceERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHhEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRcIlxufSwge1xuICBiYXNlOiAnVicsXG4gIGxldHRlcnM6IFwiVlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVcIlxufSwge1xuICBiYXNlOiAnVlknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjBcIlxufSwge1xuICBiYXNlOiAnVycsXG4gIGxldHRlcnM6IFwiV1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwiXG59LCB7XG4gIGJhc2U6ICdYJyxcbiAgbGV0dGVyczogXCJYXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wiXG59LCB7XG4gIGJhc2U6ICdZJyxcbiAgbGV0dGVyczogXCJZXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJcbn0sIHtcbiAgYmFzZTogJ1onLFxuICBsZXR0ZXJzOiBcIlpcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJcbn0sIHtcbiAgYmFzZTogJ2EnLFxuICBsZXR0ZXJzOiBcImFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHhFMFxceEUxXFx4RTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx4RTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxceEU0XFx1MDFERlxcdTFFQTNcXHhFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXCJcbn0sIHtcbiAgYmFzZTogJ2FhJyxcbiAgbGV0dGVyczogXCJcXHVBNzMzXCJcbn0sIHtcbiAgYmFzZTogJ2FlJyxcbiAgbGV0dGVyczogXCJcXHhFNlxcdTAxRkRcXHUwMUUzXCJcbn0sIHtcbiAgYmFzZTogJ2FvJyxcbiAgbGV0dGVyczogXCJcXHVBNzM1XCJcbn0sIHtcbiAgYmFzZTogJ2F1JyxcbiAgbGV0dGVyczogXCJcXHVBNzM3XCJcbn0sIHtcbiAgYmFzZTogJ2F2JyxcbiAgbGV0dGVyczogXCJcXHVBNzM5XFx1QTczQlwiXG59LCB7XG4gIGJhc2U6ICdheScsXG4gIGxldHRlcnM6IFwiXFx1QTczRFwiXG59LCB7XG4gIGJhc2U6ICdiJyxcbiAgbGV0dGVyczogXCJiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcIlxufSwge1xuICBiYXNlOiAnYycsXG4gIGxldHRlcnM6IFwiY1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxceEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRcIlxufSwge1xuICBiYXNlOiAnZCcsXG4gIGxldHRlcnM6IFwiZFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FcIlxufSwge1xuICBiYXNlOiAnZHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjNcXHUwMUM2XCJcbn0sIHtcbiAgYmFzZTogJ2UnLFxuICBsZXR0ZXJzOiBcImVcXHUyNEQ0XFx1RkY0NVxceEU4XFx4RTlcXHhFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHhFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXCJcbn0sIHtcbiAgYmFzZTogJ2YnLFxuICBsZXR0ZXJzOiBcImZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q1wiXG59LCB7XG4gIGJhc2U6ICdnJyxcbiAgbGV0dGVyczogXCJnXFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZcIlxufSwge1xuICBiYXNlOiAnaCcsXG4gIGxldHRlcnM6IFwiaFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XCJcbn0sIHtcbiAgYmFzZTogJ2h2JyxcbiAgbGV0dGVyczogXCJcXHUwMTk1XCJcbn0sIHtcbiAgYmFzZTogJ2knLFxuICBsZXR0ZXJzOiBcImlcXHUyNEQ4XFx1RkY0OVxceEVDXFx4RURcXHhFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxceEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMVwiXG59LCB7XG4gIGJhc2U6ICdqJyxcbiAgbGV0dGVyczogXCJqXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIlxufSwge1xuICBiYXNlOiAnaycsXG4gIGxldHRlcnM6IFwia1xcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIlxufSwge1xuICBiYXNlOiAnbCcsXG4gIGxldHRlcnM6IFwibFxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1wiXG59LCB7XG4gIGJhc2U6ICdsaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOVwiXG59LCB7XG4gIGJhc2U6ICdtJyxcbiAgbGV0dGVyczogXCJtXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2RlwiXG59LCB7XG4gIGJhc2U6ICduJyxcbiAgbGV0dGVyczogXCJuXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxceEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVcIlxufSwge1xuICBiYXNlOiAnbmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0NcIlxufSwge1xuICBiYXNlOiAnbycsXG4gIGxldHRlcnM6IFwib1xcdTI0REVcXHVGRjRGXFx4RjJcXHhGM1xceEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxceEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx4RjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx4RjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NVwiXG59LCB7XG4gIGJhc2U6ICdvaScsXG4gIGxldHRlcnM6IFwiXFx1MDFBM1wiXG59LCB7XG4gIGJhc2U6ICdvdScsXG4gIGxldHRlcnM6IFwiXFx1MDIyM1wiXG59LCB7XG4gIGJhc2U6ICdvbycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RlwiXG59LCB7XG4gIGJhc2U6ICdwJyxcbiAgbGV0dGVyczogXCJwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XCJcbn0sIHtcbiAgYmFzZTogJ3EnLFxuICBsZXR0ZXJzOiBcInFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OVwiXG59LCB7XG4gIGJhc2U6ICdyJyxcbiAgbGV0dGVyczogXCJyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M1wiXG59LCB7XG4gIGJhc2U6ICdzJyxcbiAgbGV0dGVyczogXCJzXFx1MjRFMlxcdUZGNTNcXHhERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXCJcbn0sIHtcbiAgYmFzZTogJ3QnLFxuICBsZXR0ZXJzOiBcInRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIlxufSwge1xuICBiYXNlOiAndHonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjlcIlxufSwge1xuICBiYXNlOiAndScsXG4gIGxldHRlcnM6IFwidVxcdTI0RTRcXHVGRjU1XFx4RjlcXHhGQVxceEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHhGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODlcIlxufSwge1xuICBiYXNlOiAndicsXG4gIGxldHRlcnM6IFwidlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENcIlxufSwge1xuICBiYXNlOiAndnknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjFcIlxufSwge1xuICBiYXNlOiAndycsXG4gIGxldHRlcnM6IFwid1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIlxufSwge1xuICBiYXNlOiAneCcsXG4gIGxldHRlcnM6IFwieFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIlxufSwge1xuICBiYXNlOiAneScsXG4gIGxldHRlcnM6IFwieVxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJcbn0sIHtcbiAgYmFzZTogJ3onLFxuICBsZXR0ZXJzOiBcInpcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJcbn1dO1xudmFyIGFueURpYWNyaXRpYyA9IG5ldyBSZWdFeHAoJ1snICsgZGlhY3JpdGljcy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQubGV0dGVycztcbn0pLmpvaW4oJycpICsgJ10nLCAnZycpO1xudmFyIGRpYWNyaXRpY1RvQmFzZSA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBkaWFjcml0aWMubGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgIGRpYWNyaXRpY1RvQmFzZVtkaWFjcml0aWMubGV0dGVyc1tqXV0gPSBkaWFjcml0aWMuYmFzZTtcbiAgfVxufVxuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoYW55RGlhY3JpdGljLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZGlhY3JpdGljVG9CYXNlW21hdGNoXTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG9wdGlvbi5sYWJlbCwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUpO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb24sIHJhd0lucHV0KSB7XG4gICAgdmFyIF9pZ25vcmVDYXNlJGlnbm9yZUFjYyA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICBzdHJpbmdpZnk6IGRlZmF1bHRTdHJpbmdpZnksXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgICBzdHJpbmdpZnkgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2Muc3RyaW5naWZ5LFxuICAgICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG5cbiAgICB2YXIgaW5wdXQgPSB0cmltID8gdHJpbVN0cmluZyhyYXdJbnB1dCkgOiByYXdJbnB1dDtcbiAgICB2YXIgY2FuZGlkYXRlID0gdHJpbSA/IHRyaW1TdHJpbmcoc3RyaW5naWZ5KG9wdGlvbikpIDogc3RyaW5naWZ5KG9wdGlvbik7XG5cbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gc3RyaXBEaWFjcml0aWNzKGlucHV0KTtcbiAgICAgIGNhbmRpZGF0ZSA9IHN0cmlwRGlhY3JpdGljcyhjYW5kaWRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaEZyb20gPT09ICdzdGFydCcgPyBjYW5kaWRhdGUuc3Vic3RyKDAsIGlucHV0Lmxlbmd0aCkgPT09IGlucHV0IDogY2FuZGlkYXRlLmluZGV4T2YoaW5wdXQpID4gLTE7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG5cbnZhciBfcmVmID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFsYWFvMjEtYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtcIlxufSA6IHtcbiAgbmFtZTogXCIxbGFhbzIxLWExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXA7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa0V4TVhsVVpYaDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVZGSklpd2labWxzWlNJNklrRXhNWGxVWlhoMExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1FHWnNiM2RjYmk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnZEhsd1pTQkZiR1Z0Wlc1MFEyOXVabWxuSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnYW5ONElIMGdabkp2YlNBblFHVnRiM1JwYjI0dlkyOXlaU2M3WEc1Y2JpOHZJRUZ6YzJsemRHbDJaU0IwWlhoMElIUnZJR1JsYzJOeWFXSmxJSFpwYzNWaGJDQmxiR1Z0Wlc1MGN5NGdTR2xrWkdWdUlHWnZjaUJ6YVdkb2RHVmtJSFZ6WlhKekxseHVZMjl1YzNRZ1FURXhlVlJsZUhRZ1BTQW9jSEp2Y0hNNklFVnNaVzFsYm5SRGIyNW1hV2M4SjNOd1lXNG5QaWtnUFQ0Z0tGeHVJQ0E4YzNCaGJseHVJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdiR0ZpWld3NklDZGhNVEY1VkdWNGRDY3NYRzRnSUNBZ0lDQjZTVzVrWlhnNklEazVPVGtzWEc0Z0lDQWdJQ0JpYjNKa1pYSTZJREFzWEc0Z0lDQWdJQ0JqYkdsd09pQW5jbVZqZENneGNIZ3NJREZ3ZUN3Z01YQjRMQ0F4Y0hncEp5eGNiaUFnSUNBZ0lHaGxhV2RvZERvZ01TeGNiaUFnSUNBZ0lIZHBaSFJvT2lBeExGeHVJQ0FnSUNBZ2NHOXphWFJwYjI0NklDZGhZbk52YkhWMFpTY3NYRzRnSUNBZ0lDQnZkbVZ5Wm14dmR6b2dKMmhwWkdSbGJpY3NYRzRnSUNBZ0lDQndZV1JrYVc1bk9pQXdMRnh1SUNBZ0lDQWdkMmhwZEdWVGNHRmpaVG9nSjI1dmQzSmhjQ2NzWEc0Z0lDQWdmWDFjYmlBZ0lDQjdMaTR1Y0hKdmNITjlYRzRnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCTVRGNVZHVjRkRHRjYmlKZGZRPT0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBEdW1teUlucHV0KF9yZWYpIHtcbiAgdmFyIGluUHJvcCA9IF9yZWYuaW4sXG4gICAgICBvdXQgPSBfcmVmLm91dCxcbiAgICAgIG9uRXhpdGVkID0gX3JlZi5vbkV4aXRlZCxcbiAgICAgIGFwcGVhciA9IF9yZWYuYXBwZWFyLFxuICAgICAgZW50ZXIgPSBfcmVmLmVudGVyLFxuICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIGVtb3Rpb24gPSBfcmVmLmVtb3Rpb24sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpblwiLCBcIm91dFwiLCBcIm9uRXhpdGVkXCIsIFwiYXBwZWFyXCIsIFwiZW50ZXJcIiwgXCJleGl0XCIsIFwiaW5uZXJSZWZcIiwgXCJlbW90aW9uXCJdKTtcblxuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9fY3NzKHtcbiAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICB3aWR0aDogMSxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICBsZWZ0OiAtMTAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtSMWJXMTVTVzV3ZFhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJiVUpOSWl3aVptbHNaU0k2SWtSMWJXMTVTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5amIzSmxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnUkhWdGJYbEpibkIxZENoN1hHNGdJR2x1T2lCcGJsQnliM0FzWEc0Z0lHOTFkQ3hjYmlBZ2IyNUZlR2wwWldRc1hHNGdJR0Z3Y0dWaGNpeGNiaUFnWlc1MFpYSXNYRzRnSUdWNGFYUXNYRzRnSUdsdWJtVnlVbVZtTEZ4dUlDQmxiVzkwYVc5dUxGeHVJQ0F1TGk1d2NtOXdjMXh1ZlRvZ1lXNTVLU0I3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdsdWNIVjBYRzRnSUNBZ0lDQnlaV1k5ZTJsdWJtVnlVbVZtZlZ4dUlDQWdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdDdYRzRnSUNBZ0lDQWdJR3hoWW1Wc09pQW5aSFZ0YlhsSmJuQjFkQ2NzWEc0Z0lDQWdJQ0FnSUM4dklHZGxkQ0J5YVdRZ2IyWWdZVzU1SUdSbFptRjFiSFFnYzNSNWJHVnpYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SURBc1hHNGdJQ0FnSUNBZ0lHSnZjbVJsY2pvZ01DeGNiaUFnSUNBZ0lDQWdabTl1ZEZOcGVtVTZJQ2RwYm1obGNtbDBKeXhjYmlBZ0lDQWdJQ0FnYjNWMGJHbHVaVG9nTUN4Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lDQWdMeThnYVcxd2IzSjBZVzUwSVNCM2FYUm9iM1YwSUdCM2FXUjBhR0FnWW5KdmQzTmxjbk1nZDI5dUozUWdZV3hzYjNjZ1ptOWpkWE5jYmlBZ0lDQWdJQ0FnZDJsa2RHZzZJREVzWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdjbVZ0YjNabElHTjFjbk52Y2lCdmJpQmtaWE5yZEc5d1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lBbmRISmhibk53WVhKbGJuUW5MRnh1WEc0Z0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCamRYSnpiM0lnYjI0Z2JXOWlhV3hsSUhkb2FXeHpkQ0J0WVdsdWRHRnBibWx1WnlCY0luTmpjbTlzYkNCcGJuUnZJSFpwWlhkY0lpQmlaV2hoZG1sdmRYSmNiaUFnSUNBZ0lDQWdiR1ZtZERvZ0xURXdNQ3hjYmlBZ0lDQWdJQ0FnYjNCaFkybDBlVG9nTUN4Y2JpQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklDZHlaV3hoZEdsMlpTY3NYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nSjNOallXeGxLREFwSnl4Y2JpQWdJQ0FnSUgxOVhHNGdJQ0FnTHo1Y2JpQWdLVHRjYm4xY2JpSmRmUT09ICovXCIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG52YXIgTm9kZVJlc29sdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb2RlUmVzb2x2ZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTm9kZVJlc29sdmVyKTtcblxuICBmdW5jdGlvbiBOb2RlUmVzb2x2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVSZXNvbHZlcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTm9kZVJlc29sdmVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYoZmluZERPTU5vZGUodGhpcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm9kZVJlc29sdmVyO1xufShDb21wb25lbnQpO1xuXG52YXIgU1RZTEVfS0VZUyA9IFsnYm94U2l6aW5nJywgJ2hlaWdodCcsICdvdmVyZmxvdycsICdwYWRkaW5nUmlnaHQnLCAncG9zaXRpb24nXTtcbnZhciBMT0NLX1NUWUxFUyA9IHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIC8vIGFjY291bnQgZm9yIHBvc3NpYmxlIGRlY2xhcmF0aW9uIGB3aWR0aDogMTAwJTtgIG9uIGJvZHlcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIHByZXZlbnRUb3VjaE1vdmUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5mdW5jdGlvbiBwcmV2ZW50SW5lcnRpYVNjcm9sbCgpIHtcbiAgdmFyIHRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICB2YXIgdG90YWxTY3JvbGwgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0b3AgKyB0aGlzLm9mZnNldEhlaWdodDtcblxuICBpZiAodG9wID09PSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSAxO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPT09IHRvdGFsU2Nyb2xsKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0b3AgLSAxO1xuICB9XG59IC8vIGBvbnRvdWNoc3RhcnRgIGNoZWNrIHdvcmtzIG9uIG1vc3QgYnJvd3NlcnNcbi8vIGBtYXhUb3VjaFBvaW50c2Agd29ya3Mgb24gSUUxMC8xMSBhbmQgU3VyZmFjZVxuXG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxudmFyIGNhblVzZURPTSA9ICEhKCB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcblxudmFyIFNjcm9sbExvY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNjcm9sbExvY2ssIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMShTY3JvbGxMb2NrKTtcblxuICBmdW5jdGlvbiBTY3JvbGxMb2NrKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxMb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgX3RoaXMub3JpZ2luYWxTdHlsZXMgPSB7fTtcbiAgICBfdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2Nyb2xsTG9jaywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfdGhpcyRwcm9wcy5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldCA9IF90aGlzJHByb3BzLnRvdWNoU2Nyb2xsVGFyZ2V0O1xuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMpIHtcbiAgICAgICAgLy8gc3RvcmUgYW55IHN0eWxlcyBhbHJlYWR5IGFwcGxpZWQgdG8gdGhlIGJvZHlcbiAgICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgICBfdGhpczIub3JpZ2luYWxTdHlsZXNba2V5XSA9IHZhbDtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuXG5cbiAgICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VJbnQodGhpcy5vcmlnaW5hbFN0eWxlcy5wYWRkaW5nUmlnaHQsIDEwKSB8fCAwO1xuICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA6IDA7XG4gICAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgICAgT2JqZWN0LmtleXMoTE9DS19TVFlMRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciB2YWwgPSBMT0NLX1NUWUxFU1trZXldO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoYWRqdXN0ZWRQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgICB9XG4gICAgICB9IC8vIGFjY291bnQgZm9yIHRvdWNoIGRldmljZXNcblxuXG4gICAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgICAvLyBNb2JpbGUgU2FmYXJpIGlnbm9yZXMgeyBvdmVyZmxvdzogaGlkZGVuIH0gZGVjbGFyYXRpb24gb24gdGhlIGJvZHkuXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7IC8vIEFsbG93IHNjcm9sbCBvbiBwcm92aWRlZCB0YXJnZXRcblxuICAgICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cblxuICAgICAgYWN0aXZlU2Nyb2xsTG9ja3MgKz0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjY291bnRGb3JTY3JvbGxiYXJzID0gX3RoaXMkcHJvcHMyLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRvdWNoU2Nyb2xsVGFyZ2V0O1xuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlOyAvLyBzYWZlbHkgZGVjcmVtZW50IGFjdGl2ZSBzY3JvbGwgbG9ja3NcblxuICAgICAgYWN0aXZlU2Nyb2xsTG9ja3MgPSBNYXRoLm1heChhY3RpdmVTY3JvbGxMb2NrcyAtIDEsIDApOyAvLyByZWFwcGx5IG9yaWdpbmFsIGJvZHkgc3R5bGVzLCBpZiBhbnlcblxuICAgICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgICBTVFlMRV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciB2YWwgPSBfdGhpczMub3JpZ2luYWxTdHlsZXNba2V5XTtcblxuICAgICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyByZW1vdmUgdG91Y2ggbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsTG9jaztcbn0oQ29tcG9uZW50KTtcblxuU2Nyb2xsTG9jay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY291bnRGb3JTY3JvbGxiYXJzOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG52YXIgX3JlZiQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFkc2JwY3BcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO1wiXG59IDoge1xuICBuYW1lOiBcIjFkc2JwY3BcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxOamNtOXNiRUpzYjJOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVFpFVlNJc0ltWnBiR1VpT2lKVFkzSnZiR3hDYkc5amF5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFQm1iRzkzWEc0dktpb2dRR3B6ZUNCcWMzZ2dLaTljYm1sdGNHOXlkQ0I3SUZCMWNtVkRiMjF3YjI1bGJuUXNJSFI1Y0dVZ1JXeGxiV1Z1ZENCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUdwemVDQjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwyTnZjbVVuTzF4dWFXMXdiM0owSUU1dlpHVlNaWE52YkhabGNpQm1jbTl0SUNjdUwwNXZaR1ZTWlhOdmJIWmxjaWM3WEc1cGJYQnZjblFnVTJOeWIyeHNURzlqYXlCbWNtOXRJQ2N1TDFOamNtOXNiRXh2WTJzdmFXNWtaWGduTzF4dVhHNTBlWEJsSUZCeWIzQnpJRDBnZTF4dUlDQmphR2xzWkhKbGJqb2dSV3hsYldWdWREd3FQaXhjYmlBZ2FYTkZibUZpYkdWa09pQmliMjlzWldGdUxGeHVmVHRjYm5SNWNHVWdVM1JoZEdVZ1BTQjdYRzRnSUhSdmRXTm9VMk55YjJ4c1ZHRnlaMlYwT2lCSVZFMU1SV3hsYldWdWRDQjhJRzUxYkd3c1hHNTlPMXh1WEc0dkx5Qk9UMVJGT2x4dUx5OGdWMlVnYzJodmRXeGtiaWQwSUc1bFpXUWdkR2hwY3lCaFpuUmxjaUIxY0dSaGRHbHVaeUIwYnlCU1pXRmpkQ0IyTVRZdU15NHdMQ0IzYUdsamFDQnBiblJ5YjJSMVkyVnpPbHh1THk4Z0xTQmpjbVZoZEdWU1pXWW9LU0JvZEhSd2N6b3ZMM0psWVdOMGFuTXViM0puTDJSdlkzTXZjbVZoWTNRdFlYQnBMbWgwYld3amNtVmhZM1JqY21WaGRHVnlaV1pjYmk4dklDMGdabTl5ZDJGeVpGSmxaaWdwSUdoMGRIQnpPaTh2Y21WaFkzUnFjeTV2Y21jdlpHOWpjeTl5WldGamRDMWhjR2t1YUhSdGJDTnlaV0ZqZEdadmNuZGhjbVJ5WldaY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVTJOeWIyeHNRbXh2WTJzZ1pYaDBaVzVrY3lCUWRYSmxRMjl0Y0c5dVpXNTBQRkJ5YjNCekxDQlRkR0YwWlQ0Z2UxeHVJQ0J6ZEdGMFpTQTlJSHNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE2SUc1MWJHd2dmVHRjYmx4dUlDQXZMeUJ0ZFhOMElHSmxJR2x1SUhOMFlYUmxJSFJ2SUhSeWFXZG5aWElnWVNCeVpTMXlaVzVrWlhJc0lHOXViSGtnY25WdWN5QnZibU5sSUhCbGNpQnBibk4wWVc1alpWeHVJQ0JuWlhSVFkzSnZiR3hVWVhKblpYUWdQU0FvY21WbU9pQklWRTFNUld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHlaV1lnUFQwOUlIUm9hWE11YzNSaGRHVXVkRzkxWTJoVFkzSnZiR3hVWVhKblpYUXBJSEpsZEhWeWJqdGNiaUFnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE2SUhKbFppQjlLVHRjYmlBZ2ZUdGNibHh1SUNBdkx5QjBhR2x6SUhkcGJHd2dZMnh2YzJVZ2RHaGxJRzFsYm5VZ2QyaGxiaUJoSUhWelpYSWdZMnhwWTJ0eklHOTFkSE5wWkdWY2JpQWdZbXgxY2xObGJHVmpkRWx1Y0hWMElEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaGtiMk4xYldWdWRDNWhZM1JwZG1WRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aFkzUnBkbVZGYkdWdFpXNTBMbUpzZFhJb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1kyaHBiR1J5Wlc0c0lHbHpSVzVoWW14bFpDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQjdJSFJ2ZFdOb1UyTnliMnhzVkdGeVoyVjBJSDBnUFNCMGFHbHpMbk4wWVhSbE8xeHVYRzRnSUNBZ0x5OGdZbUZwYkNCbFlYSnNlU0JwWmlCdWIzUWdaVzVoWW14bFpGeHVJQ0FnSUdsbUlDZ2hhWE5GYm1GaWJHVmtLU0J5WlhSMWNtNGdZMmhwYkdSeVpXNDdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQXFJRVJwZGx4dUlDQWdJQ0FxSUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ0FnSUNBcUlHSnNiMk5yY3lCelkzSnZiR3hwYm1jZ2IyNGdibTl1TFdKdlpIa2daV3hsYldWdWRITWdZbVZvYVc1a0lIUm9aU0J0Wlc1MVhHNWNiaUFnSUNBZ0tpQk9iMlJsVW1WemIyeDJaWEpjYmlBZ0lDQWdLaUF0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdJQ0FnS2lCM1pTQnVaV1ZrSUdFZ2NtVm1aWEpsYm1ObElIUnZJSFJvWlNCelkzSnZiR3hoWW14bElHVnNaVzFsYm5RZ2RHOGdYQ0oxYm14dlkydGNJaUJ6WTNKdmJHd2diMjVjYmlBZ0lDQWdLaUJ0YjJKcGJHVWdaR1YyYVdObGMxeHVYRzRnSUNBZ0lDb2dVMk55YjJ4c1RHOWphMXh1SUNBZ0lDQXFJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJQ0FxSUdGamRIVmhiR3g1SUdSdlpYTWdkR2hsSUhOamNtOXNiQ0JzYjJOcmFXNW5YRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUR4a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnZia05zYVdOclBYdDBhR2x6TG1Kc2RYSlRaV3hsWTNSSmJuQjFkSDFjYmlBZ0lDQWdJQ0FnSUNCamMzTTllM3NnY0c5emFYUnBiMjQ2SUNkbWFYaGxaQ2NzSUd4bFpuUTZJREFzSUdKdmRIUnZiVG9nTUN3Z2NtbG5hSFE2SURBc0lIUnZjRG9nTUNCOWZWeHVJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0E4VG05a1pWSmxjMjlzZG1WeUlHbHVibVZ5VW1WbVBYdDBhR2x6TG1kbGRGTmpjbTlzYkZSaGNtZGxkSDArZTJOb2FXeGtjbVZ1ZlR3dlRtOWtaVkpsYzI5c2RtVnlQbHh1SUNBZ0lDQWdJQ0I3ZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFFnUHlBb1hHNGdJQ0FnSUNBZ0lDQWdQRk5qY205c2JFeHZZMnNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE5ZTNSdmRXTm9VMk55YjJ4c1ZHRnlaMlYwZlNBdlBseHVJQ0FnSUNBZ0lDQXBJRG9nYm5Wc2JIMWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc0Z0lIMWNibjFjYmlKZGZRPT0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDFcbn07XG5cbi8vIE5PVEU6XG4vLyBXZSBzaG91bGRuJ3QgbmVlZCB0aGlzIGFmdGVyIHVwZGF0aW5nIHRvIFJlYWN0IHYxNi4zLjAsIHdoaWNoIGludHJvZHVjZXM6XG4vLyAtIGNyZWF0ZVJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNyZWF0ZXJlZlxuLy8gLSBmb3J3YXJkUmVmKCkgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Zm9yd2FyZHJlZlxudmFyIFNjcm9sbEJsb2NrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2Nyb2xsQmxvY2ssIF9QdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDIoU2Nyb2xsQmxvY2spO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbEJsb2NrKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxCbG9jayk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gX3RoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldDogcmVmXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYmx1clNlbGVjdElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JvbGxCbG9jaywgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBpc0VuYWJsZWQgPSBfdGhpcyRwcm9wcy5pc0VuYWJsZWQ7XG4gICAgICB2YXIgdG91Y2hTY3JvbGxUYXJnZXQgPSB0aGlzLnN0YXRlLnRvdWNoU2Nyb2xsVGFyZ2V0OyAvLyBiYWlsIGVhcmx5IGlmIG5vdCBlbmFibGVkXG5cbiAgICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICAvKlxuICAgICAgICogRGl2XG4gICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG4gICAgICAgICogTm9kZVJlc29sdmVyXG4gICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAqIHdlIG5lZWQgYSByZWZlcmVuY2UgdG8gdGhlIHNjcm9sbGFibGUgZWxlbWVudCB0byBcInVubG9ja1wiIHNjcm9sbCBvblxuICAgICAgICogbW9iaWxlIGRldmljZXNcbiAgICAgICAgKiBTY3JvbGxMb2NrXG4gICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICAgKi9cblxuICAgICAgcmV0dXJuIGpzeChcImRpdlwiLCBudWxsLCBqc3goXCJkaXZcIiwge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLmJsdXJTZWxlY3RJbnB1dCxcbiAgICAgICAgY3NzOiBfcmVmJDFcbiAgICAgIH0pLCBqc3goTm9kZVJlc29sdmVyLCB7XG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldFNjcm9sbFRhcmdldFxuICAgICAgfSwgY2hpbGRyZW4pLCB0b3VjaFNjcm9sbFRhcmdldCA/IGpzeChTY3JvbGxMb2NrLCB7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0OiB0b3VjaFNjcm9sbFRhcmdldFxuICAgICAgfSkgOiBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsQmxvY2s7XG59KFB1cmVDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMyhEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQzKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQzKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbnZhciBTY3JvbGxDYXB0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNjcm9sbENhcHRvciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQzKFNjcm9sbENhcHRvcik7XG5cbiAgZnVuY3Rpb24gU2Nyb2xsQ2FwdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxDYXB0b3IpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICBfdGhpcy5pc0JvdHRvbSA9IGZhbHNlO1xuICAgIF90aGlzLmlzVG9wID0gZmFsc2U7XG4gICAgX3RoaXMuc2Nyb2xsVGFyZ2V0ID0gdm9pZCAwO1xuICAgIF90aGlzLnRvdWNoU3RhcnQgPSB2b2lkIDA7XG5cbiAgICBfdGhpcy5jYW5jZWxTY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXZlbnREZWx0YSA9IGZ1bmN0aW9uIChldmVudCwgZGVsdGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQm90dG9tQXJyaXZlID0gX3RoaXMkcHJvcHMub25Cb3R0b21BcnJpdmUsXG4gICAgICAgICAgb25Cb3R0b21MZWF2ZSA9IF90aGlzJHByb3BzLm9uQm90dG9tTGVhdmUsXG4gICAgICAgICAgb25Ub3BBcnJpdmUgPSBfdGhpcyRwcm9wcy5vblRvcEFycml2ZSxcbiAgICAgICAgICBvblRvcExlYXZlID0gX3RoaXMkcHJvcHMub25Ub3BMZWF2ZTtcbiAgICAgIHZhciBfdGhpcyRzY3JvbGxUYXJnZXQgPSBfdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGhpcyRzY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90aGlzJHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3RoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICAgIHZhciBhdmFpbGFibGVTY3JvbGwgPSBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgLSBzY3JvbGxUb3A7XG4gICAgICB2YXIgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gZmFsc2U7IC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcblxuICAgICAgaWYgKGF2YWlsYWJsZVNjcm9sbCA+IGRlbHRhICYmIF90aGlzLmlzQm90dG9tKSB7XG4gICAgICAgIGlmIChvbkJvdHRvbUxlYXZlKSBvbkJvdHRvbUxlYXZlKGV2ZW50KTtcbiAgICAgICAgX3RoaXMuaXNCb3R0b20gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBfdGhpcy5pc1RvcCkge1xuICAgICAgICBpZiAob25Ub3BMZWF2ZSkgb25Ub3BMZWF2ZShldmVudCk7XG4gICAgICAgIF90aGlzLmlzVG9wID0gZmFsc2U7XG4gICAgICB9IC8vIGJvdHRvbSBsaW1pdFxuXG5cbiAgICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgZGVsdGEgPiBhdmFpbGFibGVTY3JvbGwpIHtcbiAgICAgICAgaWYgKG9uQm90dG9tQXJyaXZlICYmICFfdGhpcy5pc0JvdHRvbSkge1xuICAgICAgICAgIG9uQm90dG9tQXJyaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzQm90dG9tID0gdHJ1ZTsgLy8gdG9wIGxpbWl0XG4gICAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIGlmIChvblRvcEFycml2ZSAmJiAhX3RoaXMuaXNUb3ApIHtcbiAgICAgICAgICBvblRvcEFycml2ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaXNUb3AgPSB0cnVlO1xuICAgICAgfSAvLyBjYW5jZWwgc2Nyb2xsXG5cblxuICAgICAgaWYgKHNob3VsZENhbmNlbFNjcm9sbCkge1xuICAgICAgICBfdGhpcy5jYW5jZWxTY3JvbGwoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5oYW5kbGVFdmVudERlbHRhKGV2ZW50LCBldmVudC5kZWx0YVkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgICAgX3RoaXMudG91Y2hTdGFydCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgZGVsdGFZID0gX3RoaXMudG91Y2hTdGFydCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG5cbiAgICAgIF90aGlzLmhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGRlbHRhWSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnNjcm9sbFRhcmdldCA9IHJlZjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNjcm9sbENhcHRvciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKHRoaXMuc2Nyb2xsVGFyZ2V0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydExpc3RlbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydExpc3RlbmluZyhlbCkge1xuICAgICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBhdHRhY2ggdG9cbiAgICAgIGlmICghZWwpIHJldHVybjsgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuXG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZWwpIHtcbiAgICAgIGlmICghZWwpIHJldHVybjsgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuXG4gICAgICBpZiAodHlwZW9mIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vZGVSZXNvbHZlciwge1xuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRTY3JvbGxUYXJnZXRcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTY3JvbGxDYXB0b3I7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIFNjcm9sbENhcHRvclN3aXRjaChfcmVmKSB7XG4gIHZhciBfcmVmJGlzRW5hYmxlZCA9IF9yZWYuaXNFbmFibGVkLFxuICAgICAgaXNFbmFibGVkID0gX3JlZiRpc0VuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGlzRW5hYmxlZCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImlzRW5hYmxlZFwiXSk7XG5cbiAgcmV0dXJuIGlzRW5hYmxlZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbENhcHRvciwgcHJvcHMpIDogcHJvcHMuY2hpbGRyZW47XG59XG5cbnZhciBpbnN0cnVjdGlvbnNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlKGV2ZW50KSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGlzU2VhcmNoYWJsZSA9IGNvbnRleHQuaXNTZWFyY2hhYmxlLFxuICAgICAgaXNNdWx0aSA9IGNvbnRleHQuaXNNdWx0aSxcbiAgICAgIGxhYmVsID0gY29udGV4dC5sYWJlbCxcbiAgICAgIGlzRGlzYWJsZWQgPSBjb250ZXh0LmlzRGlzYWJsZWQsXG4gICAgICB0YWJTZWxlY3RzVmFsdWUgPSBjb250ZXh0LnRhYlNlbGVjdHNWYWx1ZTtcblxuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSAnbWVudSc6XG4gICAgICByZXR1cm4gXCJVc2UgVXAgYW5kIERvd24gdG8gY2hvb3NlIG9wdGlvbnNcIi5jb25jYXQoaXNEaXNhYmxlZCA/ICcnIDogJywgcHJlc3MgRW50ZXIgdG8gc2VsZWN0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24nLCBcIiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnVcIikuY29uY2F0KHRhYlNlbGVjdHNWYWx1ZSA/ICcsIHByZXNzIFRhYiB0byBzZWxlY3QgdGhlIG9wdGlvbiBhbmQgZXhpdCB0aGUgbWVudScgOiAnJywgXCIuXCIpO1xuXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGxhYmVsID8gbGFiZWwgOiAnU2VsZWN0JywgXCIgaXMgZm9jdXNlZCBcIikuY29uY2F0KGlzU2VhcmNoYWJsZSA/ICcsdHlwZSB0byByZWZpbmUgbGlzdCcgOiAnJywgXCIsIHByZXNzIERvd24gdG8gb3BlbiB0aGUgbWVudSwgXCIpLmNvbmNhdChpc011bHRpID8gJyBwcmVzcyBsZWZ0IHRvIGZvY3VzIHNlbGVjdGVkIHZhbHVlcycgOiAnJyk7XG5cbiAgICBjYXNlICd2YWx1ZSc6XG4gICAgICByZXR1cm4gJ1VzZSBsZWZ0IGFuZCByaWdodCB0byB0b2dnbGUgYmV0d2VlbiBmb2N1c2VkIHZhbHVlcywgcHJlc3MgQmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUnO1xuICB9XG59O1xudmFyIHZhbHVlRXZlbnRBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0LnZhbHVlLFxuICAgICAgaXNEaXNhYmxlZCA9IGNvbnRleHQuaXNEaXNhYmxlZDtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdkZXNlbGVjdC1vcHRpb24nOlxuICAgIGNhc2UgJ3BvcC12YWx1ZSc6XG4gICAgY2FzZSAncmVtb3ZlLXZhbHVlJzpcbiAgICAgIHJldHVybiBcIm9wdGlvbiBcIi5jb25jYXQodmFsdWUsIFwiLCBkZXNlbGVjdGVkLlwiKTtcblxuICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgcmV0dXJuIGlzRGlzYWJsZWQgPyBcIm9wdGlvbiBcIi5jb25jYXQodmFsdWUsIFwiIGlzIGRpc2FibGVkLiBTZWxlY3QgYW5vdGhlciBvcHRpb24uXCIpIDogXCJvcHRpb24gXCIuY29uY2F0KHZhbHVlLCBcIiwgc2VsZWN0ZWQuXCIpO1xuICB9XG59O1xudmFyIHZhbHVlRm9jdXNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRm9jdXNBcmlhTWVzc2FnZShfcmVmKSB7XG4gIHZhciBmb2N1c2VkVmFsdWUgPSBfcmVmLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gX3JlZi5nZXRPcHRpb25MYWJlbCxcbiAgICAgIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZTtcbiAgcmV0dXJuIFwidmFsdWUgXCIuY29uY2F0KGdldE9wdGlvbkxhYmVsKGZvY3VzZWRWYWx1ZSksIFwiIGZvY3VzZWQsIFwiKS5jb25jYXQoc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpICsgMSwgXCIgb2YgXCIpLmNvbmNhdChzZWxlY3RWYWx1ZS5sZW5ndGgsIFwiLlwiKTtcbn07XG52YXIgb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIG9wdGlvbkZvY3VzQXJpYU1lc3NhZ2UoX3JlZjIpIHtcbiAgdmFyIGZvY3VzZWRPcHRpb24gPSBfcmVmMi5mb2N1c2VkT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmMi5nZXRPcHRpb25MYWJlbCxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICByZXR1cm4gXCJvcHRpb24gXCIuY29uY2F0KGdldE9wdGlvbkxhYmVsKGZvY3VzZWRPcHRpb24pLCBcIiBmb2N1c2VkXCIpLmNvbmNhdChmb2N1c2VkT3B0aW9uLmlzRGlzYWJsZWQgPyAnIGRpc2FibGVkJyA6ICcnLCBcIiwgXCIpLmNvbmNhdChvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbikgKyAxLCBcIiBvZiBcIikuY29uY2F0KG9wdGlvbnMubGVuZ3RoLCBcIi5cIik7XG59O1xudmFyIHJlc3VsdHNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc3VsdHNBcmlhTWVzc2FnZShfcmVmMykge1xuICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYzLmlucHV0VmFsdWUsXG4gICAgICBzY3JlZW5SZWFkZXJNZXNzYWdlID0gX3JlZjMuc2NyZWVuUmVhZGVyTWVzc2FnZTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHNjcmVlblJlYWRlck1lc3NhZ2UpLmNvbmNhdChpbnB1dFZhbHVlID8gJyBmb3Igc2VhcmNoIHRlcm0gJyArIGlucHV0VmFsdWUgOiAnJywgXCIuXCIpO1xufTtcblxudmFyIGZvcm1hdEdyb3VwTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbn07XG52YXIgaXNPcHRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gIHJldHVybiAhIW9wdGlvbi5pc0Rpc2FibGVkO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBjbGVhckluZGljYXRvcjogY2xlYXJJbmRpY2F0b3JDU1MsXG4gIGNvbnRhaW5lcjogY29udGFpbmVyQ1NTLFxuICBjb250cm9sOiBjc3MsXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBkcm9wZG93bkluZGljYXRvckNTUyxcbiAgZ3JvdXA6IGdyb3VwQ1NTLFxuICBncm91cEhlYWRpbmc6IGdyb3VwSGVhZGluZ0NTUyxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogaW5kaWNhdG9yc0NvbnRhaW5lckNTUyxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsXG4gIGlucHV0OiBpbnB1dENTUyxcbiAgbG9hZGluZ0luZGljYXRvcjogbG9hZGluZ0luZGljYXRvckNTUyxcbiAgbG9hZGluZ01lc3NhZ2U6IGxvYWRpbmdNZXNzYWdlQ1NTLFxuICBtZW51OiBtZW51Q1NTLFxuICBtZW51TGlzdDogbWVudUxpc3RDU1MsXG4gIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDU1MsXG4gIG11bHRpVmFsdWU6IG11bHRpVmFsdWVDU1MsXG4gIG11bHRpVmFsdWVMYWJlbDogbXVsdGlWYWx1ZUxhYmVsQ1NTLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBtdWx0aVZhbHVlUmVtb3ZlQ1NTLFxuICBub09wdGlvbnNNZXNzYWdlOiBub09wdGlvbnNNZXNzYWdlQ1NTLFxuICBvcHRpb246IG9wdGlvbkNTUyxcbiAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ1NTLFxuICBzaW5nbGVWYWx1ZTogY3NzJDEsXG4gIHZhbHVlQ29udGFpbmVyOiB2YWx1ZUNvbnRhaW5lckNTU1xufTsgLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBpbml0aWFsaXplIHdpdGggc291cmNlIHN0eWxlc1xuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZCQxKHt9LCBzb3VyY2UpOyAvLyBtYXNzYWdlIGluIHRhcmdldCBzdHlsZXNcblxuXG4gIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IGZ1bmN0aW9uIChyc0NzcywgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldKHNvdXJjZVtrZXldKHJzQ3NzLCBwcm9wcyksIHByb3BzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc1trZXldID0gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIGNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuICBkYW5nZXI6ICcjREUzNTBCJyxcbiAgZGFuZ2VyTGlnaHQ6ICcjRkZCREFEJyxcbiAgbmV1dHJhbDA6ICdoc2woMCwgMCUsIDEwMCUpJyxcbiAgbmV1dHJhbDU6ICdoc2woMCwgMCUsIDk1JSknLFxuICBuZXV0cmFsMTA6ICdoc2woMCwgMCUsIDkwJSknLFxuICBuZXV0cmFsMjA6ICdoc2woMCwgMCUsIDgwJSknLFxuICBuZXV0cmFsMzA6ICdoc2woMCwgMCUsIDcwJSknLFxuICBuZXV0cmFsNDA6ICdoc2woMCwgMCUsIDYwJSknLFxuICBuZXV0cmFsNTA6ICdoc2woMCwgMCUsIDUwJSknLFxuICBuZXV0cmFsNjA6ICdoc2woMCwgMCUsIDQwJSknLFxuICBuZXV0cmFsNzA6ICdoc2woMCwgMCUsIDMwJSknLFxuICBuZXV0cmFsODA6ICdoc2woMCwgMCUsIDIwJSknLFxuICBuZXV0cmFsOTA6ICdoc2woMCwgMCUsIDEwJSknXG59O1xudmFyIGJvcmRlclJhZGl1cyA9IDQ7IC8vIFVzZWQgdG8gY2FsY3VsYXRlIGNvbnNpc3RlbnQgbWFyZ2luL3BhZGRpbmcgb24gZWxlbWVudHNcblxudmFyIGJhc2VVbml0ID0gNDsgLy8gVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb250cm9sXG5cbnZhciBjb250cm9sSGVpZ2h0ID0gMzg7IC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgY29udHJvbCBhbmQgbWVudSAqL1xuXG52YXIgbWVudUd1dHRlciA9IGJhc2VVbml0ICogMjtcbnZhciBzcGFjaW5nID0ge1xuICBiYXNlVW5pdDogYmFzZVVuaXQsXG4gIGNvbnRyb2xIZWlnaHQ6IGNvbnRyb2xIZWlnaHQsXG4gIG1lbnVHdXR0ZXI6IG1lbnVHdXR0ZXJcbn07XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNpbmc6IHNwYWNpbmdcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMihvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciQ0KERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDQoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDQoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6IGlzVG91Y2hDYXBhYmxlKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhaXNUb3VjaENhcGFibGUoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwsXG4gIGdldE9wdGlvblZhbHVlOiBnZXRPcHRpb25WYWx1ZSxcbiAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzTXVsdGk6IGZhbHNlLFxuICBpc1J0bDogZmFsc2UsXG4gIGlzU2VhcmNoYWJsZTogdHJ1ZSxcbiAgaXNPcHRpb25EaXNhYmxlZDogaXNPcHRpb25EaXNhYmxlZCxcbiAgbG9hZGluZ01lc3NhZ2U6IGZ1bmN0aW9uIGxvYWRpbmdNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gIH0sXG4gIG1heE1lbnVIZWlnaHQ6IDMwMCxcbiAgbWluTWVudUhlaWdodDogMTQwLFxuICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgbWVudVBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1lbnVQb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbWVudVNob3VsZEJsb2NrU2Nyb2xsOiBmYWxzZSxcbiAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiAhaXNNb2JpbGVEZXZpY2UoKSxcbiAgbm9PcHRpb25zTWVzc2FnZTogZnVuY3Rpb24gbm9PcHRpb25zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ05vIG9wdGlvbnMnO1xuICB9LFxuICBvcGVuTWVudU9uRm9jdXM6IGZhbHNlLFxuICBvcGVuTWVudU9uQ2xpY2s6IHRydWUsXG4gIG9wdGlvbnM6IFtdLFxuICBwYWdlU2l6ZTogNSxcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuICBzY3JlZW5SZWFkZXJTdGF0dXM6IGZ1bmN0aW9uIHNjcmVlblJlYWRlclN0YXR1cyhfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoY291bnQsIFwiIHJlc3VsdFwiKS5jb25jYXQoY291bnQgIT09IDEgPyAncycgOiAnJywgXCIgYXZhaWxhYmxlXCIpO1xuICB9LFxuICBzdHlsZXM6IHt9LFxuICB0YWJJbmRleDogJzAnLFxuICB0YWJTZWxlY3RzVmFsdWU6IHRydWVcbn07XG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBTZWxlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQ0KFNlbGVjdCk7XG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVE9ET1xuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIFNlbGVjdChfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFyaWFMaXZlU2VsZWN0aW9uOiAnJyxcbiAgICAgIGFyaWFMaXZlQ29udGV4dDogJycsXG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgbWVudU9wdGlvbnM6IHtcbiAgICAgICAgcmVuZGVyOiBbXSxcbiAgICAgICAgZm9jdXNhYmxlOiBbXVxuICAgICAgfSxcbiAgICAgIHNlbGVjdFZhbHVlOiBbXVxuICAgIH07XG4gICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSBmYWxzZTtcbiAgICBfdGhpcy5jb21tb25Qcm9wcyA9IHZvaWQgMDtcbiAgICBfdGhpcy5jb21wb25lbnRzID0gdm9pZCAwO1xuICAgIF90aGlzLmhhc0dyb3VwcyA9IGZhbHNlO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSAwO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IHZvaWQgMDtcbiAgICBfdGhpcy5pbnN0YW5jZVByZWZpeCA9ICcnO1xuICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgX3RoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IHZvaWQgMDtcbiAgICBfdGhpcy5jb250cm9sUmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldENvbnRyb2xSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5jb250cm9sUmVmID0gcmVmO1xuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1c2VkT3B0aW9uUmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldEZvY3VzZWRPcHRpb25SZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5mb2N1c2VkT3B0aW9uUmVmID0gcmVmO1xuICAgIH07XG5cbiAgICBfdGhpcy5tZW51TGlzdFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRNZW51TGlzdFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLm1lbnVMaXN0UmVmID0gcmVmO1xuICAgIH07XG5cbiAgICBfdGhpcy5pbnB1dFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRJbnB1dFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmlucHV0UmVmID0gcmVmO1xuICAgIH07XG5cbiAgICBfdGhpcy5jYWNoZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgX3RoaXMuY29tcG9uZW50cyA9IGRlZmF1bHRDb21wb25lbnRzKHtcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50c1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXNJbnB1dDtcbiAgICBfdGhpcy5ibHVyID0gX3RoaXMuYmx1cklucHV0O1xuXG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWU7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgYWN0aW9uTWV0YSksIHt9LCB7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzZXQtdmFsdWUnO1xuICAgICAgdmFyIG9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMyLmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aTtcblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdzZXQtdmFsdWUnXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNsb3NlTWVudU9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9ICFpc011bHRpO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IC8vIHdoZW4gdGhlIHNlbGVjdCB2YWx1ZSBzaG91bGQgY2hhbmdlLCB3ZSBzaG91bGQgcmVzZXQgZm9jdXNlZFZhbHVlXG5cblxuICAgICAgX3RoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSB0cnVlO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZWxlY3RPcHRpb24gPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBibHVySW5wdXRPblNlbGVjdCA9IF90aGlzJHByb3BzMy5ibHVySW5wdXRPblNlbGVjdCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpcy5nZXRPcHRpb25WYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgICAgIH0pLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBldmVudDogJ2Rlc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIV90aGlzLmlzT3B0aW9uRGlzYWJsZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWUoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzZWxlY3RWYWx1ZSksIFtuZXdWYWx1ZV0pLCAnc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICAgIGV2ZW50OiAnc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbm5vdW5jZSB0aGF0IG9wdGlvbiBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICAgIGV2ZW50OiAnc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpLFxuICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIV90aGlzLmlzT3B0aW9uRGlzYWJsZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlLCAnc2VsZWN0LW9wdGlvbicpO1xuXG4gICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYW5ub3VuY2UgdGhhdCBvcHRpb24gaXMgZGlzYWJsZWRcbiAgICAgICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgIGV2ZW50OiAnc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSksXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYmx1cklucHV0T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuYmx1cklucHV0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbW92ZVZhbHVlID0gZnVuY3Rpb24gKHJlbW92ZWRWYWx1ZSkge1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpcy5nZXRPcHRpb25WYWx1ZShyZW1vdmVkVmFsdWUpO1xuXG4gICAgICB2YXIgbmV3VmFsdWUgPSBzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUubGVuZ3RoID8gbmV3VmFsdWUgOiBudWxsLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlbW92ZS12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogcmVtb3ZlZFZhbHVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgIGV2ZW50OiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIHZhbHVlOiByZW1vdmVkVmFsdWUgPyBfdGhpcy5nZXRPcHRpb25MYWJlbChyZW1vdmVkVmFsdWUpIDogJydcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKG51bGwsIHtcbiAgICAgICAgYWN0aW9uOiAnY2xlYXInXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gc2VsZWN0VmFsdWUuc2xpY2UoMCwgc2VsZWN0VmFsdWUubGVuZ3RoIC0gMSk7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICBldmVudDogJ3BvcC12YWx1ZScsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogbGFzdFNlbGVjdGVkVmFsdWUgPyBfdGhpcy5nZXRPcHRpb25MYWJlbChsYXN0U2VsZWN0ZWRWYWx1ZSkgOiAnJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUubGVuZ3RoID8gbmV3VmFsdWUgOiBudWxsLCB7XG4gICAgICAgIGFjdGlvbjogJ3BvcC12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuYXBwbHkodm9pZCAwLCBbX3RoaXMucHJvcHMuY2xhc3NOYW1lUHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZShkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzKTtcbiAgICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xuICAgICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRBY3RpdmVEZXNjZW5kZW50SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudUlzT3BlbiA9IF90aGlzLnByb3BzLm1lbnVJc09wZW47XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBtZW51T3B0aW9ucyA9IF90aGlzJHN0YXRlLm1lbnVPcHRpb25zLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uIHx8ICFtZW51SXNPcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIGluZGV4ID0gbWVudU9wdGlvbnMuZm9jdXNhYmxlLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICB2YXIgb3B0aW9uID0gbWVudU9wdGlvbnMucmVuZGVyW2luZGV4XTtcbiAgICAgIHJldHVybiBvcHRpb24gJiYgb3B0aW9uLmtleTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGV2ZW50ID0gX3JlZjIuZXZlbnQsXG4gICAgICAgICAgY29udGV4dCA9IF9yZWYyLmNvbnRleHQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUxpdmVTZWxlY3Rpb246IHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dClcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGV2ZW50ID0gX3JlZjMuZXZlbnQsXG4gICAgICAgICAgY29udGV4dCA9IF9yZWYzLmNvbnRleHQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUxpdmVDb250ZXh0OiBpbnN0cnVjdGlvbnNBcmlhTWVzc2FnZShldmVudCwgX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgY29udGV4dCksIHt9LCB7XG4gICAgICAgICAgbGFiZWw6IF90aGlzLnByb3BzWydhcmlhLWxhYmVsJ11cbiAgICAgICAgfSkpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25NZW51TW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBvcGVuTWVudU9uQ2xpY2sgPSBfdGhpcy5wcm9wcy5vcGVuTWVudU9uQ2xpY2s7XG5cbiAgICAgIGlmICghX3RoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9IGVsc2UgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGlnbm9yZSBtb3VzZSBldmVudHMgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczQuaXNNdWx0aSxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM0Lm1lbnVJc09wZW47XG5cbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcblxuICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgX3RoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gIWlzTXVsdGk7XG5cbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGlnbm9yZSBtb3VzZSBldmVudHMgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uU2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzRG9jdW1lbnRFbGVtZW50KGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwoZXZlbnQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pc0NvbXBvc2luZyA9IHRydWU7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgIHZhciB0b3VjaGVzID0gX3JlZjQudG91Y2hlcztcbiAgICAgIHZhciB0b3VjaCA9IHRvdWNoZXMgJiYgdG91Y2hlcy5pdGVtKDApO1xuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gdG91Y2guY2xpZW50WTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWY1LnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXMuaW5pdGlhbFRvdWNoWCk7XG4gICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnModG91Y2guY2xpZW50WSAtIF90aGlzLmluaXRpYWxUb3VjaFkpO1xuICAgICAgdmFyIG1vdmVUaHJlc2hvbGQgPSA1O1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBkZWx0YVggPiBtb3ZlVGhyZXNob2xkIHx8IGRlbHRhWSA+IG1vdmVUaHJlc2hvbGQ7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuOyAvLyBjbG9zZSB0aGUgbWVudSBpZiB0aGUgdXNlciB0YXBzIG91dHNpZGVcbiAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIG9uIGV2ZW50LnRhcmdldCBoZXJlIGluc3RlYWQgb2YgZXZlbnQuY3VycmVudFRhcmdldCwgYmVjYXVzZSB3ZSB3YW50IHRvIGFzc2VydCBpbmZvcm1hdGlvblxuICAgICAgLy8gb24gZXZlbnRzIG9uIGNoaWxkIGVsZW1lbnRzLCBub3QgdGhlIGRvY3VtZW50ICh3aGljaCB3ZSd2ZSBhdHRhY2hlZCB0aGlzIGhhbmRsZXIgdG8pLlxuXG4gICAgICBpZiAoX3RoaXMuY29udHJvbFJlZiAmJiAhX3RoaXMuY29udHJvbFJlZi5jb250YWlucyhldmVudC50YXJnZXQpICYmIF90aGlzLm1lbnVMaXN0UmVmICYmICFfdGhpcy5tZW51TGlzdFJlZi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfSAvLyByZXNldCBtb3ZlIHZhcnNcblxuXG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hYID0gMDtcbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRyb2xUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgIF90aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBfdGhpcy5vbk1lbnVPcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzNS5pc1NlYXJjaGFibGUsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNS5pc011bHRpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpOiBpc011bHRpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5vcGVuQWZ0ZXJGb2N1cyB8fCBfdGhpcy5wcm9wcy5vcGVuTWVudU9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWVudUxpc3RSZWYgJiYgX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgX3RoaXMuaW5wdXRSZWYuZm9jdXMoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdpbnB1dC1ibHVyJ1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICBpZiAoX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciB8fCBfdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBoaWRlU2VsZWN0ZWRPcHRpb25zID0gX3RoaXMkcHJvcHM2LmhpZGVTZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNi5pc011bHRpO1xuICAgICAgaWYgKGhpZGVTZWxlY3RlZE9wdGlvbnMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG4gICAgICByZXR1cm4gaGlkZVNlbGVjdGVkT3B0aW9ucztcbiAgICB9O1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNy5pc011bHRpLFxuICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNy5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgICAgZXNjYXBlQ2xlYXJzVmFsdWUgPSBfdGhpcyRwcm9wczcuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzNy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM3LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczcuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM3Lm1lbnVJc09wZW4sXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM3Lm9uS2V5RG93bixcbiAgICAgICAgICB0YWJTZWxlY3RzVmFsdWUgPSBfdGhpcyRwcm9wczcudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyA9IF90aGlzJHByb3BzNy5vcGVuTWVudU9uRm9jdXM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlMi5mb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMi5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTIuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAodHlwZW9mIG9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbktleURvd24oZXZlbnQpO1xuXG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG5cblxuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ3ByZXZpb3VzJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgnbmV4dCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlVmFsdWUoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFiYWNrc3BhY2VSZW1vdmVzVmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgICAgX3RoaXMucG9wVmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIW1lbnVJc09wZW4gfHwgIXRhYlNlbGVjdHNWYWx1ZSB8fCAhZm9jdXNlZE9wdGlvbiB8fCAvLyBkb24ndCBjYXB0dXJlIHRoZSBldmVudCBpZiB0aGUgbWVudSBvcGVucyBvbiBmb2N1cyBhbmQgdGhlIGZvY3VzZWRcbiAgICAgICAgICAvLyBvcHRpb24gaXMgYWxyZWFkeSBzZWxlY3RlZDsgaXQgYnJlYWtzIHRoZSBmbG93IG9mIG5hdmlnYXRpb25cbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gYW4gSW5wdXQgTWV0aG9kIEVkaXRvcihJTUUpXG4gICAgICAgICAgICAvLyByZWYuIGh0dHBzOi8vd3d3LnczLm9yZy9UUi91aWV2ZW50cy8jZGV0ZXJtaW5lLWtleWRvd24ta2V5dXAta2V5Q29kZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2xlYXJhYmxlICYmIGVzY2FwZUNsZWFyc1ZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgLy8gc3BhY2VcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCd1cCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnbGFzdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdkb3duJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZXVwJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2ZpcnN0Jyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2xhc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5idWlsZE1lbnVPcHRpb25zID0gZnVuY3Rpb24gKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgdmFyIF9wcm9wcyRpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWUsXG4gICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG5cbiAgICAgIHZhciB0b09wdGlvbiA9IGZ1bmN0aW9uIHRvT3B0aW9uKG9wdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBfdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuXG4gICAgICAgIHZhciBpc1NlbGVjdGVkID0gX3RoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcblxuICAgICAgICB2YXIgbGFiZWwgPSBfdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG5cbiAgICAgICAgaWYgKF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMoKSAmJiBpc1NlbGVjdGVkIHx8ICFfdGhpcy5maWx0ZXJPcHRpb24oe1xuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZGF0YTogb3B0aW9uXG4gICAgICAgIH0sIGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbk9wdGlvbkhvdmVyKG9wdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblNlbGVjdCA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3B0aW9uSWQgPSBcIlwiLmNvbmNhdChfdGhpcy5nZXRFbGVtZW50SWQoJ29wdGlvbicpLCBcIi1cIikuY29uY2F0KGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdCxcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IG9wdGlvbixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogJ29wdGlvbicsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gb3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChpdGVtLm9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBUT0RPIG5lZWRzIGEgdGlkaWVyIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgaWYgKCFfdGhpcy5oYXNHcm91cHMpIF90aGlzLmhhc0dyb3VwcyA9IHRydWU7XG4gICAgICAgICAgdmFyIGl0ZW1zID0gaXRlbS5vcHRpb25zO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSB0b09wdGlvbihjaGlsZCwgXCJcIi5jb25jYXQoaXRlbUluZGV4LCBcIi1cIikuY29uY2F0KGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb24pIGFjYy5mb2N1c2FibGUucHVzaChjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBncm91cElkID0gXCJcIi5jb25jYXQoX3RoaXMuZ2V0RWxlbWVudElkKCdncm91cCcpLCBcIi1cIikuY29uY2F0KGl0ZW1JbmRleCk7XG4gICAgICAgICAgICBhY2MucmVuZGVyLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGNoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IHRvT3B0aW9uKGl0ZW0sIFwiXCIuY29uY2F0KGl0ZW1JbmRleCkpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgYWNjLnJlbmRlci5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICBhY2MuZm9jdXNhYmxlLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHtcbiAgICAgICAgcmVuZGVyOiBbXSxcbiAgICAgICAgZm9jdXNhYmxlOiBbXVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBfdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzID0gbWVtb2l6ZU9uZShfdGhpcy5jYWNoZUNvbXBvbmVudHMsIGV4cG9ydGVkRXF1YWwpLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzKF9wcm9wcy5jb21wb25lbnRzKTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcblxuICAgIHZhciBfc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKF92YWx1ZSk7XG5cbiAgICBfdGhpcy5idWlsZE1lbnVPcHRpb25zID0gbWVtb2l6ZU9uZShfdGhpcy5idWlsZE1lbnVPcHRpb25zLCBmdW5jdGlvbiAobmV3QXJncywgbGFzdEFyZ3MpIHtcbiAgICAgIHZhciBfcmVmNiA9IG5ld0FyZ3MsXG4gICAgICAgICAgX3JlZjcgPSBfc2xpY2VkVG9BcnJheShfcmVmNiwgMiksXG4gICAgICAgICAgbmV3UHJvcHMgPSBfcmVmN1swXSxcbiAgICAgICAgICBuZXdTZWxlY3RWYWx1ZSA9IF9yZWY3WzFdO1xuXG4gICAgICB2YXIgX3JlZjggPSBsYXN0QXJncyxcbiAgICAgICAgICBfcmVmOSA9IF9zbGljZWRUb0FycmF5KF9yZWY4LCAyKSxcbiAgICAgICAgICBsYXN0UHJvcHMgPSBfcmVmOVswXSxcbiAgICAgICAgICBsYXN0U2VsZWN0VmFsdWUgPSBfcmVmOVsxXTtcblxuICAgICAgcmV0dXJuIG5ld1NlbGVjdFZhbHVlID09PSBsYXN0U2VsZWN0VmFsdWUgJiYgbmV3UHJvcHMuaW5wdXRWYWx1ZSA9PT0gbGFzdFByb3BzLmlucHV0VmFsdWUgJiYgbmV3UHJvcHMub3B0aW9ucyA9PT0gbGFzdFByb3BzLm9wdGlvbnM7XG4gICAgfSkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICB2YXIgX21lbnVPcHRpb25zID0gX3Byb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZE1lbnVPcHRpb25zKF9wcm9wcywgX3NlbGVjdFZhbHVlKSA6IHtcbiAgICAgIHJlbmRlcjogW10sXG4gICAgICBmb2N1c2FibGU6IFtdXG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlLm1lbnVPcHRpb25zID0gX21lbnVPcHRpb25zO1xuICAgIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlID0gX3NlbGVjdFZhbHVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBhbGwgc2Nyb2xsIGV2ZW50cywgYW5kIGZpbHRlciB0aGVtIG91dCBpbnNpZGUgb2YgJ29uU2Nyb2xsJ1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wczgub3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzOC52YWx1ZSxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM4Lm1lbnVJc09wZW4sXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzOC5pbnB1dFZhbHVlOyAvLyByZS1jYWNoZSBjdXN0b20gY29tcG9uZW50c1xuXG4gICAgICB0aGlzLmNhY2hlQ29tcG9uZW50cyhuZXh0UHJvcHMuY29tcG9uZW50cyk7IC8vIHJlYnVpbGQgdGhlIG1lbnUgb3B0aW9uc1xuXG4gICAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB2YWx1ZSB8fCBuZXh0UHJvcHMub3B0aW9ucyAhPT0gb3B0aW9ucyB8fCBuZXh0UHJvcHMubWVudUlzT3BlbiAhPT0gbWVudUlzT3BlbiB8fCBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZSkge1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICAgIHZhciBtZW51T3B0aW9ucyA9IG5leHRQcm9wcy5tZW51SXNPcGVuID8gdGhpcy5idWlsZE1lbnVPcHRpb25zKG5leHRQcm9wcywgc2VsZWN0VmFsdWUpIDoge1xuICAgICAgICAgIHJlbmRlcjogW10sXG4gICAgICAgICAgZm9jdXNhYmxlOiBbXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZm9jdXNlZFZhbHVlID0gdGhpcy5nZXROZXh0Rm9jdXNlZFZhbHVlKHNlbGVjdFZhbHVlKTtcbiAgICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLmdldE5leHRGb2N1c2VkT3B0aW9uKG1lbnVPcHRpb25zLmZvY3VzYWJsZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lbnVPcHRpb25zOiBtZW51T3B0aW9ucyxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkVmFsdWU6IGZvY3VzZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG5cblxuICAgICAgaWYgKHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRJc0hpZGRlbjogdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczkuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM5Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICggLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSBkaXNhYmxlZCB3aGlsZSBmb2N1c2VkXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgICAgfSwgdGhpcy5vbk1lbnVDbG9zZSk7XG4gICAgICB9IC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmICh0aGlzLm1lbnVMaXN0UmVmICYmIHRoaXMuZm9jdXNlZE9wdGlvblJlZiAmJiB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlKSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3KHRoaXMubWVudUxpc3RSZWYsIHRoaXMuZm9jdXNlZE9wdGlvblJlZik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nVG9Ub3VjaCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudU9wZW5cIixcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudUNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzMTAuaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEwLmlzTXVsdGk7XG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpOiBpc011bHRpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25JbnB1dENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTWV0aG9kc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuYmx1cigpO1xuICAgIH0gLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG5cbiAgfSwge1xuICAgIGtleTogXCJvcGVuTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTWVudShmb2N1c09wdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUzLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlMy5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgbWVudU9wdGlvbnMgPSB0aGlzLmJ1aWxkTWVudU9wdGlvbnModGhpcy5wcm9wcywgc2VsZWN0VmFsdWUpO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczExLmlzTXVsdGksXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHMxMS50YWJTZWxlY3RzVmFsdWU7XG4gICAgICB2YXIgb3BlbkF0SW5kZXggPSBmb2N1c09wdGlvbiA9PT0gJ2ZpcnN0JyA/IDAgOiBtZW51T3B0aW9ucy5mb2N1c2FibGUubGVuZ3RoIC0gMTtcblxuICAgICAgaWYgKCFpc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gbWVudU9wdGlvbnMuZm9jdXNhYmxlLmluZGV4T2Yoc2VsZWN0VmFsdWVbMF0pO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICBvcGVuQXRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gb25seSBzY3JvbGwgaWYgdGhlIG1lbnUgaXNuJ3QgYWxyZWFkeSBvcGVuXG5cblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9ICEoaXNGb2N1c2VkICYmIHRoaXMubWVudUxpc3RSZWYpO1xuICAgICAgdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZW51T3B0aW9uczogbWVudU9wdGlvbnMsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbWVudU9wdGlvbnMuZm9jdXNhYmxlW29wZW5BdEluZGV4XVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIub25NZW51T3BlbigpO1xuXG4gICAgICAgIF90aGlzMi5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgICAgZXZlbnQ6ICdtZW51JyxcbiAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ZhbHVlKGRpcmVjdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEyLmlzTXVsdGksXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3RoaXMkcHJvcHMxMi5pc1NlYXJjaGFibGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNC5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTQuZm9jdXNlZFZhbHVlOyAvLyBPbmx5IG11bHRpc2VsZWN0cyBzdXBwb3J0IHZhbHVlIGZvY3VzaW5nXG5cbiAgICAgIGlmICghaXNNdWx0aSkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG51bGxcbiAgICAgIH0pO1xuICAgICAgdmFyIGZvY3VzZWRJbmRleCA9IHNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgICAgaWYgKCFmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICAgIGV2ZW50OiAndmFsdWUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdEluZGV4ID0gc2VsZWN0VmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjeWNsZSBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kXG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBmb2N1c2VkLCBmb2N1cyB0aGUgbGFzdCB2YWx1ZSBmaXJzdFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gbGFzdEluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0Rm9jdXMgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICAgIGV2ZW50OiAnaW5wdXQnLFxuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICAgICAgaXNNdWx0aTogaXNNdWx0aVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuOiBuZXh0Rm9jdXMgIT09IC0xLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IHNlbGVjdFZhbHVlW25leHRGb2N1c11cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c09wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbigpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdmaXJzdCc7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcGFnZVNpemUgPSBfdGhpcyRwcm9wczEzLnBhZ2VTaXplLFxuICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IF90aGlzJHByb3BzMTMudGFiU2VsZWN0c1ZhbHVlO1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlNS5mb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIG1lbnVPcHRpb25zID0gX3RoaXMkc3RhdGU1Lm1lbnVPcHRpb25zO1xuICAgICAgdmFyIG9wdGlvbnMgPSBtZW51T3B0aW9ucy5mb2N1c2FibGU7XG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICB2YXIgbmV4dEZvY3VzID0gMDsgLy8gaGFuZGxlcyAnZmlyc3QnXG5cbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgIGlmICghZm9jdXNlZE9wdGlvbikge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgICAgZXZlbnQ6ICdtZW51JyxcbiAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ID4gMCA/IGZvY3VzZWRJbmRleCAtIDEgOiBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdldXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzIDwgMCkgbmV4dEZvY3VzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzID4gb3B0aW9ucy5sZW5ndGggLSAxKSBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogb3B0aW9uc1tuZXh0Rm9jdXNdLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgIGV2ZW50OiAnbWVudScsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbnNbbmV4dEZvY3VzXSksXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlOiB0YWJTZWxlY3RzVmFsdWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRoZW1lXCIsXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gR2V0dGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCB0aGVtZSBpZiB0aGVyZSBhcmUgbm8gY3VzdG9taXphdGlvbnMuXG4gICAgICBpZiAoIXRoaXMucHJvcHMudGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICAgIH0gLy8gSWYgdGhlIHRoZW1lIHByb3AgaXMgYSBmdW5jdGlvbiwgYXNzdW1lIHRoZSBmdW5jdGlvblxuICAgICAgLy8ga25vd3MgaG93IHRvIG1lcmdlIHRoZSBwYXNzZWQtaW4gZGVmYXVsdCB0aGVtZSB3aXRoXG4gICAgICAvLyBpdHMgb3duIG1vZGlmaWNhdGlvbnMuXG5cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRoZW1lKGRlZmF1bHRUaGVtZSk7XG4gICAgICB9IC8vIE90aGVyd2lzZSwgaWYgYSBwbGFpbiB0aGVtZSBvYmplY3Qgd2FzIHBhc3NlZCBpbixcbiAgICAgIC8vIG92ZXJsYXkgaXQgd2l0aCB0aGUgZGVmYXVsdCB0aGVtZS5cblxuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgZGVmYXVsdFRoZW1lKSwgdGhpcy5wcm9wcy50aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbW1vblByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbW1vblByb3BzKCkge1xuICAgICAgdmFyIGNsZWFyVmFsdWUgPSB0aGlzLmNsZWFyVmFsdWUsXG4gICAgICAgICAgY3ggPSB0aGlzLmN4LFxuICAgICAgICAgIGdldFN0eWxlcyA9IHRoaXMuZ2V0U3R5bGVzLFxuICAgICAgICAgIGdldFZhbHVlID0gdGhpcy5nZXRWYWx1ZSxcbiAgICAgICAgICBzZXRWYWx1ZSA9IHRoaXMuc2V0VmFsdWUsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgaGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjeDogY3gsXG4gICAgICAgIGNsZWFyVmFsdWU6IGNsZWFyVmFsdWUsXG4gICAgICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgICAgICBnZXRWYWx1ZTogZ2V0VmFsdWUsXG4gICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZSxcbiAgICAgICAgaXNNdWx0aTogaXNNdWx0aSxcbiAgICAgICAgaXNSdGw6IGlzUnRsLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBzZWxlY3RPcHRpb246IHNlbGVjdE9wdGlvbixcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlLFxuICAgICAgICBzZWxlY3RQcm9wczogcHJvcHMsXG4gICAgICAgIHRoZW1lOiB0aGlzLmdldFRoZW1lKClcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE5leHRGb2N1c2VkVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRWYWx1ZShuZXh0U2VsZWN0VmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNi5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgbGFzdFNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU2LnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGxhc3RGb2N1c2VkSW5kZXggPSBsYXN0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuXG4gICAgICBpZiAobGFzdEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgICAgICBpZiAobmV4dEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgLy8gdGhlIGZvY3VzZWQgdmFsdWUgaXMgc3RpbGwgaW4gdGhlIHNlbGVjdFZhbHVlLCByZXR1cm4gaXRcbiAgICAgICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RGb2N1c2VkSW5kZXggPCBuZXh0U2VsZWN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdGhlIGZvY3VzZWRWYWx1ZSBpcyBub3QgcHJlc2VudCBpbiB0aGUgbmV4dCBzZWxlY3RWYWx1ZSBhcnJheSBieVxuICAgICAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgICAgICByZXR1cm4gbmV4dFNlbGVjdFZhbHVlW2xhc3RGb2N1c2VkSW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXROZXh0Rm9jdXNlZE9wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXh0Rm9jdXNlZE9wdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgbGFzdEZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgICByZXR1cm4gbGFzdEZvY3VzZWRPcHRpb24gJiYgb3B0aW9ucy5pbmRleE9mKGxhc3RGb2N1c2VkT3B0aW9uKSA+IC0xID8gbGFzdEZvY3VzZWRPcHRpb24gOiBvcHRpb25zWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICByZXR1cm4gc2VsZWN0VmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5zdGF0ZS5tZW51T3B0aW9ucy5yZW5kZXIubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb3VudE9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnRPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVudU9wdGlvbnMuZm9jdXNhYmxlLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDbGVhcmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczE0LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczE0LmlzTXVsdGk7IC8vIHNpbmdsZSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIE5PVCBjbGVhcmFibGVcbiAgICAgIC8vIG11bHRpIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgY2xlYXJhYmxlXG5cbiAgICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25EaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5pc09wdGlvbkRpc2FibGVkID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIDogZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzT3B0aW9uU2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHNlbGVjdFZhbHVlLmluZGV4T2Yob3B0aW9uKSA+IC0xKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmlzT3B0aW9uU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbmRpZGF0ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5zb21lKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuZ2V0T3B0aW9uVmFsdWUoaSkgPT09IGNhbmRpZGF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSA6IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE9wdGlvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0R3JvdXBMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNb3VzZSBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVG91Y2ggSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvVG91Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2VcIixcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZW5kZXJlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uc3RydWN0QXJpYUxpdmVNZXNzYWdlKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlNyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYXJpYUxpdmVDb250ZXh0ID0gX3RoaXMkc3RhdGU3LmFyaWFMaXZlQ29udGV4dCxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTcuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTcuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcHRpb25zID0gX3RoaXMkcHJvcHMxNS5vcHRpb25zLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczE1Lm1lbnVJc09wZW4sXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTUuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBfdGhpcyRwcm9wczE1LnNjcmVlblJlYWRlclN0YXR1czsgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSBpbiB0aGUgc2VsZWN0LlxuXG4gICAgICB2YXIgZm9jdXNlZFZhbHVlTXNnID0gZm9jdXNlZFZhbHVlID8gdmFsdWVGb2N1c0FyaWFNZXNzYWdlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgIH0pIDogJyc7IC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgY3VycmVudGx5IGZvY3VzZWQgb3B0aW9uIGluIHRoZSBzZWxlY3QuXG5cbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uTXNnID0gZm9jdXNlZE9wdGlvbiAmJiBtZW51SXNPcGVuID8gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KSA6ICcnOyAvLyBBbiBhcmlhIGxpdmUgbWVzc2FnZSByZXByZXNlbnRpbmcgdGhlIHNldCBvZiBmb2N1c2FibGUgcmVzdWx0cyBhbmQgY3VycmVudCBzZWFyY2h0ZXJtL2lucHV0dmFsdWUuXG5cbiAgICAgIHZhciByZXN1bHRzTXNnID0gcmVzdWx0c0FyaWFNZXNzYWdlKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgc2NyZWVuUmVhZGVyTWVzc2FnZTogc2NyZWVuUmVhZGVyU3RhdHVzKHtcbiAgICAgICAgICBjb3VudDogdGhpcy5jb3VudE9wdGlvbnMoKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoZm9jdXNlZFZhbHVlTXNnLCBcIiBcIikuY29uY2F0KGZvY3VzZWRPcHRpb25Nc2csIFwiIFwiKS5jb25jYXQocmVzdWx0c01zZywgXCIgXCIpLmNvbmNhdChhcmlhTGl2ZUNvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNi5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzMTYuaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlucHV0SWQgPSBfdGhpcyRwcm9wczE2LmlucHV0SWQsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTYuaW5wdXRWYWx1ZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzMTYudGFiSW5kZXgsXG4gICAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzMTYuZm9ybTtcbiAgICAgIHZhciBJbnB1dCA9IHRoaXMuY29tcG9uZW50cy5JbnB1dDtcbiAgICAgIHZhciBpbnB1dElzSGlkZGVuID0gdGhpcy5zdGF0ZS5pbnB1dElzSGlkZGVuO1xuICAgICAgdmFyIGlkID0gaW5wdXRJZCB8fCB0aGlzLmdldEVsZW1lbnRJZCgnaW5wdXQnKTsgLy8gYXJpYSBhdHRyaWJ1dGVzIG1ha2VzIHRoZSBKU1ggXCJub2lzeVwiLCBzZXBhcmF0ZWQgZm9yIGNsYXJpdHlcblxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0ge1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J11cbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHVtbXlJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyxcbiAgICAgICAgICBjeCA9IF90aGlzJGNvbW1vblByb3BzLmN4LFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkY29tbW9uUHJvcHMudGhlbWUsXG4gICAgICAgICAgc2VsZWN0UHJvcHMgPSBfdGhpcyRjb21tb25Qcm9wcy5zZWxlY3RQcm9wcztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgYXV0b0NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgZ2V0U3R5bGVzOiB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNIaWRkZW46IGlucHV0SXNIaWRkZW4sXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgICBNdWx0aVZhbHVlID0gX3RoaXMkY29tcG9uZW50cy5NdWx0aVZhbHVlLFxuICAgICAgICAgIE11bHRpVmFsdWVDb250YWluZXIgPSBfdGhpcyRjb21wb25lbnRzLk11bHRpVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgTXVsdGlWYWx1ZUxhYmVsID0gX3RoaXMkY29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSA9IF90aGlzJGNvbXBvbmVudHMuTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgICBTaW5nbGVWYWx1ZSA9IF90aGlzJGNvbXBvbmVudHMuU2luZ2xlVmFsdWUsXG4gICAgICAgICAgUGxhY2Vob2xkZXIgPSBfdGhpcyRjb21wb25lbnRzLlBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczE3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfdGhpcyRwcm9wczE3LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczE3LmlzTXVsdGksXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTcuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMTcucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU4ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlOC5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTguZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlOC5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlcyA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBpc09wdGlvbkZvY3VzZWQgPSBvcHQgPT09IGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChfdGhpczQuZ2V0T3B0aW9uVmFsdWUob3B0KSkuY29uY2F0KGluZGV4KSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZVByb3BzOiB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IG9wdFxuICAgICAgICAgIH0pLCBfdGhpczQuZm9ybWF0T3B0aW9uTGFiZWwob3B0LCAndmFsdWUnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0VmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbmdsZVZhbHVlID0gc2VsZWN0VmFsdWVbMF07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlVmFsdWUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBkYXRhOiBzaW5nbGVWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMuZm9ybWF0T3B0aW9uTGFiZWwoc2luZ2xlVmFsdWUsICd2YWx1ZScpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2xlYXJJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgQ2xlYXJJbmRpY2F0b3IgPSB0aGlzLmNvbXBvbmVudHMuQ2xlYXJJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE4LmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxOC5pc0xvYWRpbmc7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhckluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxvYWRpbmdJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZ0luZGljYXRvcigpIHtcbiAgICAgIHZhciBMb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE5LmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxOS5pc0xvYWRpbmc7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICBpZiAoIUxvYWRpbmdJbmRpY2F0b3IgfHwgIWlzTG9hZGluZykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGNvbXBvbmVudHMyID0gdGhpcy5jb21wb25lbnRzLFxuICAgICAgICAgIERyb3Bkb3duSW5kaWNhdG9yID0gX3RoaXMkY29tcG9uZW50czIuRHJvcGRvd25JbmRpY2F0b3IsXG4gICAgICAgICAgSW5kaWNhdG9yU2VwYXJhdG9yID0gX3RoaXMkY29tcG9uZW50czIuSW5kaWNhdG9yU2VwYXJhdG9yOyAvLyBzZXBhcmF0b3IgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIGRyb3Bkb3duIGluZGljYXRvclxuXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckRyb3Bkb3duSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIERyb3Bkb3duSW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkRyb3Bkb3duSW5kaWNhdG9yO1xuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkY29tcG9uZW50czMgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgICAgR3JvdXAgPSBfdGhpcyRjb21wb25lbnRzMy5Hcm91cCxcbiAgICAgICAgICBHcm91cEhlYWRpbmcgPSBfdGhpcyRjb21wb25lbnRzMy5Hcm91cEhlYWRpbmcsXG4gICAgICAgICAgTWVudSA9IF90aGlzJGNvbXBvbmVudHMzLk1lbnUsXG4gICAgICAgICAgTWVudUxpc3QgPSBfdGhpcyRjb21wb25lbnRzMy5NZW51TGlzdCxcbiAgICAgICAgICBNZW51UG9ydGFsID0gX3RoaXMkY29tcG9uZW50czMuTWVudVBvcnRhbCxcbiAgICAgICAgICBMb2FkaW5nTWVzc2FnZSA9IF90aGlzJGNvbXBvbmVudHMzLkxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIE5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRjb21wb25lbnRzMy5Ob09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIE9wdGlvbiA9IF90aGlzJGNvbXBvbmVudHMzLk9wdGlvbjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU5ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU5LmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgbWVudU9wdGlvbnMgPSBfdGhpcyRzdGF0ZTkubWVudU9wdGlvbnM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2FwdHVyZU1lbnVTY3JvbGwgPSBfdGhpcyRwcm9wczIwLmNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczIwLmlucHV0VmFsdWUsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMyMC5pc0xvYWRpbmcsXG4gICAgICAgICAgbG9hZGluZ01lc3NhZ2UgPSBfdGhpcyRwcm9wczIwLmxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczIwLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzMjAubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMyMC5tZW51SXNPcGVuLFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczIwLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMyMC5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVBvcnRhbFRhcmdldCA9IF90aGlzJHByb3BzMjAubWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczIwLm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wczIwLm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgICBub09wdGlvbnNNZXNzYWdlID0gX3RoaXMkcHJvcHMyMC5ub09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMyMC5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF90aGlzJHByb3BzMjAub25NZW51U2Nyb2xsVG9Cb3R0b207XG4gICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybiBudWxsOyAvLyBUT0RPOiBJbnRlcm5hbCBPcHRpb24gVHlwZSBoZXJlXG5cbiAgICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlLCB0aGUgbWVudSBvcHRpb25zIGluIHN0YXRlIGFyZW4ndCBjaGFuZ2VkIHdoZW4gdGhlXG4gICAgICAgIC8vIGZvY3VzZWQgb3B0aW9uIGNoYW5nZXMgc28gd2UgY2FsY3VsYXRlIGFkZGl0aW9uYWwgcHJvcHMgYmFzZWQgb24gdGhhdFxuICAgICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gcHJvcHMuZGF0YTtcbiAgICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpc0ZvY3VzZWQgPyBfdGhpczUuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBwcm9wcywge1xuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICAgIH0pLCBfdGhpczUuZm9ybWF0T3B0aW9uTGFiZWwocHJvcHMuZGF0YSwgJ21lbnUnKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWVudVVJO1xuXG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gbWVudU9wdGlvbnMucmVuZGVyLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGdyb3VwID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGl0ZW0sIFtcInR5cGVcIl0pO1xuXG4gICAgICAgICAgICB2YXIgaGVhZGluZ0lkID0gXCJcIi5jb25jYXQoaXRlbS5rZXksIFwiLWhlYWRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXAsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgZ3JvdXAsIHtcbiAgICAgICAgICAgICAgSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICAgICAgICAgICAgICBoZWFkaW5nUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBpZDogaGVhZGluZ0lkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW0uZGF0YVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbDogX3RoaXM1LmZvcm1hdEdyb3VwTGFiZWwoaXRlbS5kYXRhKVxuICAgICAgICAgICAgfSksIGl0ZW0ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKG9wdGlvbik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTG9hZGluZykge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGxvYWRpbmdNZXNzYWdlKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdNZXNzYWdlLCBjb21tb25Qcm9wcywgbWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX21lc3NhZ2UgPSBub09wdGlvbnNNZXNzYWdlKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vT3B0aW9uc01lc3NhZ2UsIGNvbW1vblByb3BzLCBfbWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlld1xuICAgICAgfTtcbiAgICAgIHZhciBtZW51RWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQbGFjZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzKSwgZnVuY3Rpb24gKF9yZWYxMCkge1xuICAgICAgICB2YXIgcmVmID0gX3JlZjEwLnJlZixcbiAgICAgICAgICAgIF9yZWYxMCRwbGFjZXJQcm9wcyA9IF9yZWYxMC5wbGFjZXJQcm9wcyxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF9yZWYxMCRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmMTAkcGxhY2VyUHJvcHMubWF4SGVpZ2h0O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMsIHtcbiAgICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBfdGhpczUub25NZW51TW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZU1vdmU6IF90aGlzNS5vbk1lbnVNb3VzZU1vdmVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxDYXB0b3JTd2l0Y2gsIHtcbiAgICAgICAgICBpc0VuYWJsZWQ6IGNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIG9uVG9wQXJyaXZlOiBvbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbkJvdHRvbUFycml2ZTogb25NZW51U2Nyb2xsVG9Cb3R0b21cbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQmxvY2ssIHtcbiAgICAgICAgICBpc0VuYWJsZWQ6IG1lbnVTaG91bGRCbG9ja1Njcm9sbFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgaW5uZXJSZWY6IF90aGlzNS5nZXRNZW51TGlzdFJlZixcbiAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9KSwgbWVudVVJKSkpKTtcbiAgICAgIH0pOyAvLyBwb3NpdGlvbmluZyBiZWhhdmlvdXIgaXMgYWxtb3N0IGlkZW50aWNhbCBmb3IgcG9ydGFsbGVkIGFuZCBmaXhlZCxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG5cbiAgICAgIHJldHVybiBtZW51UG9ydGFsVGFyZ2V0IHx8IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQb3J0YWwsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhcHBlbmRUbzogbWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IHRoaXMuY29udHJvbFJlZixcbiAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb25cbiAgICAgIH0pLCBtZW51RWxlbWVudCkgOiBtZW51RWxlbWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRm9ybUZpZWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1GaWVsZCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGVsaW1pdGVyID0gX3RoaXMkcHJvcHMyMS5kZWxpbWl0ZXIsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMjEuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMyMS5pc011bHRpLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczIxLm5hbWU7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKGRlbGltaXRlcikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM2LmdldE9wdGlvblZhbHVlKG9wdCk7XG4gICAgICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGlucHV0ID0gc2VsZWN0VmFsdWUubGVuZ3RoID4gMCA/IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJpLVwiLmNvbmNhdChpKSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzNi5nZXRPcHRpb25WYWx1ZShvcHQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3ZhbHVlMiA9IHNlbGVjdFZhbHVlWzBdID8gdGhpcy5nZXRPcHRpb25WYWx1ZShzZWxlY3RWYWx1ZVswXSkgOiAnJztcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgIHZhbHVlOiBfdmFsdWUyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMaXZlUmVnaW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxpdmVSZWdpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBMTF5VGV4dCwge1xuICAgICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBpZDogXCJhcmlhLXNlbGVjdGlvbi1ldmVudFwiXG4gICAgICB9LCBcIlxceEEwXCIsIHRoaXMuc3RhdGUuYXJpYUxpdmVTZWxlY3Rpb24pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBpZDogXCJhcmlhLWNvbnRleHRcIlxuICAgICAgfSwgXCJcXHhBMFwiLCB0aGlzLmNvbnN0cnVjdEFyaWFMaXZlTWVzc2FnZSgpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkY29tcG9uZW50czQgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgICAgQ29udHJvbCA9IF90aGlzJGNvbXBvbmVudHM0LkNvbnRyb2wsXG4gICAgICAgICAgSW5kaWNhdG9yc0NvbnRhaW5lciA9IF90aGlzJGNvbXBvbmVudHM0LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgICAgU2VsZWN0Q29udGFpbmVyID0gX3RoaXMkY29tcG9uZW50czQuU2VsZWN0Q29udGFpbmVyLFxuICAgICAgICAgIFZhbHVlQ29udGFpbmVyID0gX3RoaXMkY29tcG9uZW50czQuVmFsdWVDb250YWluZXI7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyMi5jbGFzc05hbWUsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wczIyLmlkLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczIyLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMjIubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHMgPSB0aGlzLmdldENvbW1vblByb3BzKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSksIHRoaXMucmVuZGVyTGl2ZVJlZ2lvbigpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9sLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0Q29udHJvbFJlZixcbiAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udHJvbE1vdXNlRG93bixcbiAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ29udHJvbFRvdWNoRW5kXG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSwgdGhpcy5yZW5kZXJJbnB1dCgpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yc0NvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckNsZWFySW5kaWNhdG9yKCksIHRoaXMucmVuZGVyTG9hZGluZ0luZGljYXRvcigpLCB0aGlzLnJlbmRlckluZGljYXRvclNlcGFyYXRvcigpLCB0aGlzLnJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkpKSwgdGhpcy5yZW5kZXJNZW51KCksIHRoaXMucmVuZGVyRm9ybUZpZWxkKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KENvbXBvbmVudCk7XG5cblNlbGVjdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IFNlbGVjdCBhcyBTLCBkZWZhdWx0VGhlbWUgYXMgYSwgY3JlYXRlRmlsdGVyIGFzIGMsIGRlZmF1bHRQcm9wcyBhcyBkLCBtZXJnZVN0eWxlcyBhcyBtIH07XG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgQ2xhc3NOYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZic7XG5pbXBvcnQgX2NzcyBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCBBdXRvc2l6ZUlucHV0IGZyb20gJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOTyBPUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbi8vIENsYXNzIE5hbWUgUHJlZml4ZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgY29tcG9uZW50IHN0YXRlIGZvciBzdHlsaW5nIHdpdGggY2xhc3MgbmFtZXMuXG5cbiBFeHBlY3RzIGFuIGFycmF5IG9mIHN0cmluZ3MgT1IgYSBzdHJpbmcvb2JqZWN0IHBhaXI6XG4gLSBjbGFzc05hbWUoWydjb21wJywgJ2NvbXAtYXJnJywgJ2NvbXAtYXJnLTInXSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLWFyZyByZWFjdC1zZWxlY3RfX2NvbXAtYXJnLTInXG4gLSBjbGFzc05hbWUoJ2NvbXAnLCB7IHNvbWU6IHRydWUsIHN0YXRlOiBmYWxzZSB9KVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtLXNvbWUnXG4qL1xuXG5mdW5jdGlvbiBhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIG5hbWUpIHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfSBlbHNlIGlmIChuYW1lWzBdID09PSAnLScpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgbmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ19fJyArIG5hbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIHN0YXRlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGFyciA9IFtjbGFzc05hbWVdO1xuXG4gIGlmIChzdGF0ZSAmJiBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHN0YXRlW2tleV0pIHtcbiAgICAgICAgYXJyLnB1c2goXCJcIi5jb25jYXQoYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBrZXkpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpKS50cmltKCk7XG4gIH0pLmpvaW4oJyAnKTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHJldHVybiBbdmFsdWVdO1xuICByZXR1cm4gW107XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhhbmRsZSBJbnB1dCBDaGFuZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhLCBvbklucHV0Q2hhbmdlKSB7XG4gIGlmIChvbklucHV0Q2hhbmdlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGlucHV0VmFsdWU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Nyb2xsIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudChlbCkge1xuICByZXR1cm4gW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgd2luZG93XS5pbmRleE9mKGVsKSA+IC0xO1xufSAvLyBOb3JtYWxpemVkIFNjcm9sbCBUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xufVxuZnVuY3Rpb24gc2Nyb2xsVG8oZWwsIHRvcCkge1xuICAvLyB3aXRoIGEgc2Nyb2xsIGRpc3RhbmNlLCB3ZSBwZXJmb3JtIHNjcm9sbCBvbiB0aGUgZWxlbWVudFxuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHRvcCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWwuc2Nyb2xsVG9wID0gdG9wO1xufSAvLyBHZXQgU2Nyb2xsIFBhcmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciBleGNsdWRlU3RhdGljUGFyZW50ID0gc3R5bGUucG9zaXRpb24gPT09ICdhYnNvbHV0ZSc7XG4gIHZhciBvdmVyZmxvd1J4ID0gLyhhdXRvfHNjcm9sbCkvO1xuICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vIHN1Y2sgaXQsIGZsb3cuLi5cblxuICBpZiAoc3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHJldHVybiBkb2NFbDtcblxuICBmb3IgKHZhciBwYXJlbnQgPSBlbGVtZW50OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDspIHtcbiAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcblxuICAgIGlmIChleGNsdWRlU3RhdGljUGFyZW50ICYmIHN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93UngudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSArIHN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvY0VsO1xufSAvLyBBbmltYXRlZCBTY3JvbGwgVG9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAgQHBhcmFtIHQ6IHRpbWUgKGVsYXBzZWQpXG4gIEBwYXJhbSBiOiBpbml0aWFsIHZhbHVlXG4gIEBwYXJhbSBjOiBhbW91bnQgb2YgY2hhbmdlXG4gIEBwYXJhbSBkOiBkdXJhdGlvblxuKi9cblxuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVkU2Nyb2xsVG8oZWxlbWVudCwgdG8pIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAyMDA7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbm9vcDtcbiAgdmFyIHN0YXJ0ID0gZ2V0U2Nyb2xsVG9wKGVsZW1lbnQpO1xuICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgdmFyIGluY3JlbWVudCA9IDEwO1xuICB2YXIgY3VycmVudFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgY3VycmVudFRpbWUgKz0gaW5jcmVtZW50O1xuICAgIHZhciB2YWwgPSBlYXNlT3V0Q3ViaWMoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICBzY3JvbGxUbyhlbGVtZW50LCB2YWwpO1xuXG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVTY3JvbGwoKTtcbn0gLy8gU2Nyb2xsIEludG8gVmlld1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG1lbnVFbCwgZm9jdXNlZEVsKSB7XG4gIHZhciBtZW51UmVjdCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgb3ZlclNjcm9sbCA9IGZvY3VzZWRFbC5vZmZzZXRIZWlnaHQgLyAzO1xuXG4gIGlmIChmb2N1c2VkUmVjdC5ib3R0b20gKyBvdmVyU2Nyb2xsID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1pbihmb2N1c2VkRWwub2Zmc2V0VG9wICsgZm9jdXNlZEVsLmNsaWVudEhlaWdodCAtIG1lbnVFbC5vZmZzZXRIZWlnaHQgKyBvdmVyU2Nyb2xsLCBtZW51RWwuc2Nyb2xsSGVpZ2h0KSk7XG4gIH0gZWxzZSBpZiAoZm9jdXNlZFJlY3QudG9wIC0gb3ZlclNjcm9sbCA8IG1lbnVSZWN0LnRvcCkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5tYXgoZm9jdXNlZEVsLm9mZnNldFRvcCAtIG92ZXJTY3JvbGwsIDApKTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdldCBib3VuZGluZyBjbGllbnQgb2JqZWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGNhbm5vdCBnZXQga2V5cyB1c2luZyBhcnJheSBub3RhdGlvbiB3aXRoIERPTVJlY3RcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRPYmooZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LndpZHRoXG4gIH07XG59XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBnZXRNZW51UGxhY2VtZW50KF9yZWYpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWYubWF4SGVpZ2h0LFxuICAgICAgbWVudUVsID0gX3JlZi5tZW51RWwsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmLm1pbkhlaWdodCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgc2hvdWxkU2Nyb2xsID0gX3JlZi5zaG91bGRTY3JvbGwsXG4gICAgICBpc0ZpeGVkUG9zaXRpb24gPSBfcmVmLmlzRml4ZWRQb3NpdGlvbixcbiAgICAgIHRoZW1lID0gX3JlZi50aGVtZTtcbiAgdmFyIHNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nO1xuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KG1lbnVFbCk7XG4gIHZhciBkZWZhdWx0U3RhdGUgPSB7XG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICB9OyAvLyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmV0dXJuIGRlZmF1bHQgc3RhdGVcblxuICBpZiAoIW1lbnVFbCB8fCAhbWVudUVsLm9mZnNldFBhcmVudCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTsgLy8gd2UgY2FuJ3QgdHJ1c3QgYHNjcm9sbFBhcmVudC5zY3JvbGxIZWlnaHRgIC0tPiBpdCBtYXkgaW5jcmVhc2Ugd2hlblxuICAvLyB0aGUgbWVudSBpcyByZW5kZXJlZFxuXG4gIHZhciBfc2Nyb2xsUGFyZW50JGdldEJvdW4gPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsUGFyZW50JGdldEJvdW4uaGVpZ2h0O1xuXG4gIHZhciBfbWVudUVsJGdldEJvdW5kaW5nQ2wgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBtZW51Qm90dG9tID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmJvdHRvbSxcbiAgICAgIG1lbnVIZWlnaHQgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuaGVpZ2h0LFxuICAgICAgbWVudVRvcCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC50b3A7XG5cbiAgdmFyIF9tZW51RWwkb2Zmc2V0UGFyZW50JCA9IG1lbnVFbC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXJUb3AgPSBfbWVudUVsJG9mZnNldFBhcmVudCQudG9wO1xuXG4gIHZhciB2aWV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKHNjcm9sbFBhcmVudCk7XG4gIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luQm90dG9tLCAxMCk7XG4gIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luVG9wLCAxMCk7XG4gIHZhciB2aWV3U3BhY2VBYm92ZSA9IGNvbnRhaW5lclRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHZpZXdTcGFjZUJlbG93ID0gdmlld0hlaWdodCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUFib3ZlID0gdmlld1NwYWNlQWJvdmUgKyBzY3JvbGxUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUJlbG93ID0gc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbERvd24gPSBtZW51Qm90dG9tIC0gdmlld0hlaWdodCArIHNjcm9sbFRvcCArIG1hcmdpbkJvdHRvbTtcbiAgdmFyIHNjcm9sbFVwID0gc2Nyb2xsVG9wICsgbWVudVRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHNjcm9sbER1cmF0aW9uID0gMTYwO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAnYXV0byc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQmVsb3cgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG5cblxuICAgICAgaWYgKHNjcm9sbFNwYWNlQmVsb3cgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuXG5cbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQmVsb3cgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH0gLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cblxuXG4gICAgICAgIHZhciBjb25zdHJhaW5lZEhlaWdodCA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tIDogc2Nyb2xsU3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gNC4gRm9ya2VkIGJldmlvdXIgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgYmVsb3dcbiAgICAgIC8vIEFVVE86IGZsaXAgdGhlIG1lbnUsIHJlbmRlciBhYm92ZVxuXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdhdXRvJyB8fCBpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gYmUgY29uc3RyYWluZWQgYWZ0ZXIgZmxpcHBpbmdcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgdmFyIHNwYWNlQWJvdmUgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSA6IHNjcm9sbFNwYWNlQWJvdmU7XG5cbiAgICAgICAgaWYgKHNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gTWF0aC5taW4oc3BhY2VBYm92ZSAtIG1hcmdpbkJvdHRvbSAtIHNwYWNpbmcuY29udHJvbEhlaWdodCwgbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyBCT1RUT006IGFsbG93IGJyb3dzZXIgdG8gaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIGFuZCBpbW1lZGlhdGVseSBzZXQgc2Nyb2xsXG5cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9wJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQWJvdmUgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG5cblxuICAgICAgaWYgKHNjcm9sbFNwYWNlQWJvdmUgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcblxuXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQyID0gbWF4SGVpZ2h0OyAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuXG4gICAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQyID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgLSBtYXJnaW5Ub3AgOiBzY3JvbGxTcGFjZUFib3ZlIC0gbWFyZ2luVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0MlxuICAgICAgICB9O1xuICAgICAgfSAvLyA0LiBub3QgZW5vdWdoIHNwYWNlLCB0aGUgYnJvd3NlciBXSUxMIE5PVCBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgd2hlblxuICAgICAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnQgcmVuZGVyZWQgYWJvdmUgdGhlIHZpZXdwb3J0IChvbmx5IGJlbG93KS5cbiAgICAgIC8vIEZsaXAgdGhlIG1lbnUsIHJlbmRlciBiZWxvd1xuXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxhY2VtZW50IHByb3ZpZGVkIFxcXCJcIi5jb25jYXQocGxhY2VtZW50LCBcIlxcXCIuXCIpKTtcbiAgfSAvLyBmdWxmaWwgY29udHJhY3Qgd2l0aCBmbG93OiBpbXBsaWNpdCByZXR1cm4gdmFsdWUgb2YgdW5kZWZpbmVkXG5cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlO1xufSAvLyBNZW51IENvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCkge1xuICB2YXIgcGxhY2VtZW50VG9DU1NQcm9wID0ge1xuICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgdG9wOiAnYm90dG9tJ1xuICB9O1xuICByZXR1cm4gcGxhY2VtZW50ID8gcGxhY2VtZW50VG9DU1NQcm9wW3BsYWNlbWVudF0gOiAnYm90dG9tJztcbn1cblxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xuXG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYzO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfcmVmMyA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcImJhY2tncm91bmRDb2xvclwiLCBjb2xvcnMubmV1dHJhbDApLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFwiYm9yZGVyUmFkaXVzXCIsIGJvcmRlclJhZGl1cyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgXCJib3hTaGFkb3dcIiwgJzAgMCAwIDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSwgMCA0cHggMTFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKScpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFwibWFyZ2luQm90dG9tXCIsIHNwYWNpbmcubWVudUd1dHRlciksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgXCJtYXJnaW5Ub3BcIiwgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcInBvc2l0aW9uXCIsICdhYnNvbHV0ZScpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFwid2lkdGhcIiwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcInpJbmRleFwiLCAxKSwgX3JlZjM7XG59O1xudmFyIFBvcnRhbFBsYWNlbWVudENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogbnVsbFxufSk7IC8vIE5PVEU6IGludGVybmFsIG9ubHlcblxudmFyIE1lbnVQbGFjZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVQbGFjZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudVBsYWNlcik7XG5cbiAgZnVuY3Rpb24gTWVudVBsYWNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVBsYWNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5wcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLmdldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcbiAgICAgIGlmICghcmVmKSByZXR1cm47IC8vIERPIE5PVCBzY3JvbGwgaWYgcG9zaXRpb24gaXMgZml4ZWRcblxuICAgICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgIWlzRml4ZWRQb3NpdGlvbjtcbiAgICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVFbDogcmVmLFxuICAgICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgc2hvdWxkU2Nyb2xsOiBzaG91bGRTY3JvbGwsXG4gICAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGdldFBvcnRhbFBsYWNlbWVudCA9IF90aGlzLmNvbnRleHQuZ2V0UG9ydGFsUGxhY2VtZW50O1xuICAgICAgaWYgKGdldFBvcnRhbFBsYWNlbWVudCkgZ2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRVcGRhdGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudVBsYWNlbWVudCA9IF90aGlzLnByb3BzLm1lbnVQbGFjZW1lbnQ7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3RoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwge30sIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIG1heEhlaWdodDogX3RoaXMuc3RhdGUubWF4SGVpZ2h0XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lbnVQbGFjZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgcmVmOiB0aGlzLmdldFBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VyUHJvcHM6IHRoaXMuZ2V0VXBkYXRlZFByb3BzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51UGxhY2VyO1xufShDb21wb25lbnQpO1xuTWVudVBsYWNlci5jb250ZXh0VHlwZSA9IFBvcnRhbFBsYWNlbWVudENvbnRleHQ7XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gTWVudShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51JywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgbWVudTogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcywge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSksIGNoaWxkcmVuKTtcbn07XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBmdW5jdGlvbiBtZW51TGlzdENTUyhfcmVmNCkge1xuICB2YXIgbWF4SGVpZ2h0ID0gX3JlZjQubWF4SGVpZ2h0LFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNC50aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIHBhZGRpbmdCb3R0b206IGJhc2VVbml0LFxuICAgIHBhZGRpbmdUb3A6IGJhc2VVbml0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIHJlcXVpcmVkIGZvciBvZmZzZXRbSGVpZ2h0LCBUb3BdID4ga2V5Ym9hcmQgc2Nyb2xsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfTtcbn07XG52YXIgTWVudUxpc3QgPSBmdW5jdGlvbiBNZW51TGlzdChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnVMaXN0JywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbGlzdCc6IHRydWUsXG4gICAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNSkge1xuICB2YXIgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChiYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChiYXNlVW5pdCAqIDMsIFwicHhcIiksXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9O1xufTtcblxudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgTm9PcHRpb25zTWVzc2FnZSA9IGZ1bmN0aW9uIE5vT3B0aW9uc01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdub09wdGlvbnNNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbm8tb3B0aW9ucyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTm9PcHRpb25zTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAnTm8gb3B0aW9ucydcbn07XG52YXIgTG9hZGluZ01lc3NhZ2UgPSBmdW5jdGlvbiBMb2FkaW5nTWVzc2FnZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2xvYWRpbmdNZXNzYWdlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICdtZW51LW5vdGljZS0tbG9hZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuTG9hZGluZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY2KSB7XG4gIHZhciByZWN0ID0gX3JlZjYucmVjdCxcbiAgICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjYucG9zaXRpb247XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0b3A6IG9mZnNldCxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICB6SW5kZXg6IDFcbiAgfTtcbn07XG52YXIgTWVudVBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE1lbnVQb3J0YWwsIF9Db21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihNZW51UG9ydGFsKTtcblxuICBmdW5jdGlvbiBNZW51UG9ydGFsKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVBvcnRhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfc3VwZXIyLmNhbGwuYXBwbHkoX3N1cGVyMiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzMi5nZXRQb3J0YWxQbGFjZW1lbnQgPSBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfcmVmNy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgaW5pdGlhbFBsYWNlbWVudCA9IGNvZXJjZVBsYWNlbWVudChfdGhpczIucHJvcHMubWVudVBsYWNlbWVudCk7IC8vIGF2b2lkIHJlLXJlbmRlcnMgaWYgdGhlIHBsYWNlbWVudCBoYXMgbm90IGNoYW5nZWRcblxuICAgICAgaWYgKHBsYWNlbWVudCAhPT0gaW5pdGlhbFBsYWNlbWVudCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lbnVQb3J0YWwsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBlbmRUbyA9IF90aGlzJHByb3BzMi5hcHBlbmRUbyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBjb250cm9sRWxlbWVudCA9IF90aGlzJHByb3BzMi5jb250cm9sRWxlbWVudCxcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgcG9zaXRpb24gPSBfdGhpcyRwcm9wczIubWVudVBvc2l0aW9uLFxuICAgICAgICAgIGdldFN0eWxlcyA9IF90aGlzJHByb3BzMi5nZXRTdHlsZXM7XG4gICAgICB2YXIgaXNGaXhlZCA9IHBvc2l0aW9uID09PSAnZml4ZWQnOyAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG5cbiAgICAgIGlmICghYXBwZW5kVG8gJiYgIWlzRml4ZWQgfHwgIWNvbnRyb2xFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdGhpcy5zdGF0ZS5wbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpO1xuICAgICAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudE9iaihjb250cm9sRWxlbWVudCk7XG4gICAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBpc0ZpeGVkID8gMCA6IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIHZhciBvZmZzZXQgPSByZWN0W3BsYWNlbWVudF0gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgcmVjdDogcmVjdFxuICAgICAgfTsgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcblxuICAgICAgdmFyIG1lbnVXcmFwcGVyID0ganN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiBnZXRTdHlsZXMoJ21lbnVQb3J0YWwnLCBzdGF0ZSlcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIHJldHVybiBqc3goUG9ydGFsUGxhY2VtZW50Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGdldFBvcnRhbFBsYWNlbWVudDogdGhpcy5nZXRQb3J0YWxQbGFjZW1lbnRcbiAgICAgICAgfVxuICAgICAgfSwgYXBwZW5kVG8gPyAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKG1lbnVXcmFwcGVyLCBhcHBlbmRUbykgOiBtZW51V3JhcHBlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVQb3J0YWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIF90eXBlb2YoYSkgPT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PSAnb2JqZWN0Jykge1xuICAgIHZhciBhcnJBID0gaXNBcnJheShhKSxcbiAgICAgICAgYXJyQiA9IGlzQXJyYXkoYiksXG4gICAgICAgIGksXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcbiAgICAvLyBDdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0XG5cblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyLlxuICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgLy8gYW5kIGlzIG5vdCBuZWVkZWQgd2hlbiBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBhIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufSAvLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cblxuZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG5cblxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbnZhciBjb250YWluZXJDU1MgPSBmdW5jdGlvbiBjb250YWluZXJDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzUnRsID0gX3JlZi5pc1J0bDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRhaW5lcicsXG4gICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdydGwnIDogbnVsbCxcbiAgICBwb2ludGVyRXZlbnRzOiBpc0Rpc2FibGVkID8gJ25vbmUnIDogbnVsbCxcbiAgICAvLyBjYW5jZWwgbW91c2UgZXZlbnRzIHdoZW4gZGlzYWJsZWRcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9O1xufTtcbnZhciBTZWxlY3RDb250YWluZXIgPSBmdW5jdGlvbiBTZWxlY3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdjb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnLS1pcy1ydGwnOiBpc1J0bFxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmFsdWUgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIHZhbHVlQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gdmFsdWVDb250YWluZXJDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAvIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweFwiKSxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfTtcbn07XG52YXIgVmFsdWVDb250YWluZXIgPSBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGhhc1ZhbHVlID0gcHJvcHMuaGFzVmFsdWU7XG4gIHJldHVybiBqc3goXCJkaXZcIiwge1xuICAgIGNzczogZ2V0U3R5bGVzKCd2YWx1ZUNvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taGFzLXZhbHVlJzogaGFzVmFsdWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5kaWNhdG9yIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yc0NvbnRhaW5lckNTUygpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMFxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JzQ29udGFpbmVyID0gZnVuY3Rpb24gSW5kaWNhdG9yc0NvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwge1xuICAgIGNzczogZ2V0U3R5bGVzKCdpbmRpY2F0b3JzQ29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yczogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG5cbnZhciBfcmVmMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCIxOWJxaDJyXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjA7XCJcbn0gOiB7XG4gIG5hbWU6IFwiMTlicWgyclwiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHbGpZWFJ2Y25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJhMEpKSWl3aVptbHNaU0k2SW1sdVpHbGpZWFJ2Y25NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUIwZVhCbElFNXZaR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnc0lHdGxlV1p5WVcxbGN5QjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwyTnZjbVVuTzF4dVhHNXBiWEJ2Y25RZ2RIbHdaU0I3SUVOdmJXMXZibEJ5YjNCekxDQlVhR1Z0WlNCOUlHWnliMjBnSnk0dUwzUjVjR1Z6Snp0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJFY205d1pHOTNiaUFtSUVOc1pXRnlJRWxqYjI1elhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ1UzWm5JRDBnS0hzZ2MybDZaU3dnTGk0dWNISnZjSE1nZlRvZ2V5QnphWHBsT2lCdWRXMWlaWElnZlNrZ1BUNGdLRnh1SUNBOGMzWm5YRzRnSUNBZ2FHVnBaMmgwUFh0emFYcGxmVnh1SUNBZ0lIZHBaSFJvUFh0emFYcGxmVnh1SUNBZ0lIWnBaWGRDYjNnOVhDSXdJREFnTWpBZ01qQmNJbHh1SUNBZ0lHRnlhV0V0YUdsa1pHVnVQVndpZEhKMVpWd2lYRzRnSUNBZ1ptOWpkWE5oWW14bFBWd2labUZzYzJWY0lseHVJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dKMmx1YkdsdVpTMWliRzlqYXljc1hHNGdJQ0FnSUNCbWFXeHNPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lHeHBibVZJWldsbmFIUTZJREVzWEc0Z0lDQWdJQ0J6ZEhKdmEyVTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ2MzUnliMnRsVjJsa2RHZzZJREFzWEc0Z0lDQWdmWDFjYmlBZ0lDQjdMaTR1Y0hKdmNITjlYRzRnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJoYm5rcElEMCtJQ2hjYmlBZ1BGTjJaeUJ6YVhwbFBYc3lNSDBnZXk0dUxuQnliM0J6ZlQ1Y2JpQWdJQ0E4Y0dGMGFDQmtQVndpVFRFMExqTTBPQ0F4TkM0NE5EbGpMVEF1TkRZNUlEQXVORFk1TFRFdU1qSTVJREF1TkRZNUxURXVOamszSURCc0xUSXVOalV4TFRNdU1ETXdMVEl1TmpVeElETXVNREk1WXkwd0xqUTJPU0F3TGpRMk9TMHhMakl5T1NBd0xqUTJPUzB4TGpZNU55QXdMVEF1TkRZNUxUQXVORFk1TFRBdU5EWTVMVEV1TWpJNUlEQXRNUzQyT1Rkc01pNDNOVGd0TXk0eE5TMHlMamMxT1MwekxqRTFNbU10TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qZ2dNQzB4TGpZNU4zTXhMakl5T0Mwd0xqUTJPU0F4TGpZNU55QXdiREl1TmpVeUlETXVNRE14SURJdU5qVXhMVE11TURNeFl6QXVORFk1TFRBdU5EWTVJREV1TWpJNExUQXVORFk1SURFdU5qazNJREJ6TUM0ME5qa2dNUzR5TWprZ01DQXhMalk1TjJ3dE1pNDNOVGdnTXk0eE5USWdNaTQzTlRnZ015NHhOV013TGpRMk9TQXdMalEyT1NBd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprNGVsd2lJQzgrWEc0Z0lEd3ZVM1puUGx4dUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCRWIzZHVRMmhsZG5KdmJpQTlJQ2h3Y205d2N6b2dZVzU1S1NBOVBpQW9YRzRnSUR4VGRtY2djMmw2WlQxN01qQjlJSHN1TGk1d2NtOXdjMzArWEc0Z0lDQWdQSEJoZEdnZ1pEMWNJazAwTGpVeE5pQTNMalUwT0dNd0xqUXpOaTB3TGpRME5pQXhMakEwTXkwd0xqUTRNU0F4TGpVM05pQXdiRE11T1RBNElETXVOelEzSURNdU9UQTRMVE11TnpRM1l6QXVOVE16TFRBdU5EZ3hJREV1TVRReExUQXVORFEySURFdU5UYzBJREFnTUM0ME16WWdNQzQwTkRVZ01DNDBNRGdnTVM0eE9UY2dNQ0F4TGpZeE5TMHdMalF3TmlBd0xqUXhPQzAwTGpZNU5TQTBMalV3TWkwMExqWTVOU0EwTGpVd01pMHdMakl4TnlBd0xqSXlNeTB3TGpVd01pQXdMak16TlMwd0xqYzROeUF3TGpNek5YTXRNQzQxTnkwd0xqRXhNaTB3TGpjNE9TMHdMak16TldNd0lEQXROQzR5T0RjdE5DNHdPRFF0TkM0Mk9UVXROQzQxTURKekxUQXVORE0yTFRFdU1UY2dNQzB4TGpZeE5YcGNJaUF2UGx4dUlDQThMMU4yWno1Y2JpazdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1JISnZjR1J2ZDI0Z0ppQkRiR1ZoY2lCQ2RYUjBiMjV6WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVpYaHdiM0owSUhSNWNHVWdTVzVrYVdOaGRHOXlVSEp2Y0hNZ1BTQkRiMjF0YjI1UWNtOXdjeUFtSUh0Y2JpQWdMeW9xSUZSb1pTQmphR2xzWkhKbGJpQjBieUJpWlNCeVpXNWtaWEpsWkNCcGJuTnBaR1VnZEdobElHbHVaR2xqWVhSdmNpNGdLaTljYmlBZ1kyaHBiR1J5Wlc0NklFNXZaR1VzWEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nWVc1NUxGeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVMRnh1SUNBdktpb2dWMmhsZEdobGNpQjBhR1VnZEdWNGRDQnBjeUJ5YVdkb2RDQjBieUJzWldaMElDb3ZYRzRnSUdselVuUnNPaUJpYjI5c1pXRnVMRnh1ZlR0Y2JseHVZMjl1YzNRZ1ltRnpaVU5UVXlBOUlDaDdYRzRnSUdselJtOWpkWE5sWkN4Y2JpQWdkR2hsYldVNklIdGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ1kyOXNiM0p6TEZ4dUlDQjlMRnh1ZlRvZ1NXNWthV05oZEc5eVVISnZjSE1wSUQwK0lDaDdYRzRnSUd4aFltVnNPaUFuYVc1a2FXTmhkRzl5UTI5dWRHRnBibVZ5Snl4Y2JpQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIQmhaR1JwYm1jNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2RISmhibk5wZEdsdmJqb2dKMk52Ykc5eUlERTFNRzF6Snl4Y2JseHVJQ0FuT21odmRtVnlKem9nZTF4dUlDQWdJR052Ykc5eU9pQnBjMFp2WTNWelpXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJEZ3dJRG9nWTI5c2IzSnpMbTVsZFhSeVlXdzBNQ3hjYmlBZ2ZTeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMlJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlKeXdnY0hKdmNITXBmVnh1SUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHRqZUNoY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FuWkhKdmNHUnZkMjR0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThSRzkzYmtOb1pYWnliMjRnTHo1OVhHNGdJQ0FnUEM5a2FYWStYRzRnSUNrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhsWVhKSmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFTnNaV0Z5U1c1a2FXTmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMk5zWldGeVNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5ZMnhsWVhJdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZMnhoYzNOT1lXMWxYRzRnSUNBZ0lDQXBmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4UTNKdmMzTkpZMjl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QlRaWEJoY21GMGIzSmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzUwZVhCbElGTmxjR0Z5WVhSdmNsTjBZWFJsSUQwZ2V5QnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVJSDA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQW9lMXh1SUNCcGMwUnBjMkZpYkdWa0xGeHVJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQmpiMnh2Y25Nc1hHNGdJSDBzWEc1OU9pQkRiMjF0YjI1UWNtOXdjeUFtSUZObGNHRnlZWFJ2Y2xOMFlYUmxLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzWEc0Z0lHRnNhV2R1VTJWc1pqb2dKM04wY21WMFkyZ25MRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdselJHbHpZV0pzWldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRFd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3eU1DeGNiaUFnYldGeVoybHVRbTkwZEc5dE9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lHMWhjbWRwYmxSdmNEb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjNhV1IwYURvZ01TeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeUI5SUQwZ2NISnZjSE03WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb2V5QW5hVzVrYVdOaGRHOXlMWE5sY0dGeVlYUnZjaWM2SUhSeWRXVWdmU3dnWTJ4aGMzTk9ZVzFsS1gxY2JpQWdJQ0F2UGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJNYjJGa2FXNW5YRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk1nUFNCclpYbG1jbUZ0WlhOZ1hHNGdJREFsTENBNE1DVXNJREV3TUNVZ2V5QnZjR0ZqYVhSNU9pQXdPeUI5WEc0Z0lEUXdKU0I3SUc5d1lXTnBkSGs2SURFN0lIMWNibUE3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYjJGa2FXNW5TVzVrYVdOaGRHOXlRMU5USUQwZ0tIdGNiaUFnYVhOR2IyTjFjMlZrTEZ4dUlDQnphWHBsTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQnpjR0ZqYVc1bk9pQjdJR0poYzJWVmJtbDBJSDBzWEc0Z0lIMHNYRzU5T2lCN1hHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhiaXhjYmlBZ2MybDZaVG9nYm5WdFltVnlMRnh1SUNCMGFHVnRaVG9nVkdobGJXVXNYRzU5S1NBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3Mk1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUdScGMzQnNZWGs2SUNkbWJHVjRKeXhjYmlBZ2NHRmtaR2x1WnpvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCMGNtRnVjMmwwYVc5dU9pQW5ZMjlzYjNJZ01UVXdiWE1uTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2RqWlc1MFpYSW5MRnh1SUNCbWIyNTBVMmw2WlRvZ2MybDZaU3hjYmlBZ2JHbHVaVWhsYVdkb2REb2dNU3hjYmlBZ2JXRnlaMmx1VW1sbmFIUTZJSE5wZW1Vc1hHNGdJSFJsZUhSQmJHbG5iam9nSjJObGJuUmxjaWNzWEc0Z0lIWmxjblJwWTJGc1FXeHBaMjQ2SUNkdGFXUmtiR1VuTEZ4dWZTazdYRzVjYm5SNWNHVWdSRzkwVUhKdmNITWdQU0I3SUdSbGJHRjVPaUJ1ZFcxaVpYSXNJRzltWm5ObGREb2dZbTl2YkdWaGJpQjlPMXh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1JHOTBVSEp2Y0hNcElEMCtJQ2hjYmlBZ1BITndZVzVjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ1lDUjdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk45SURGeklHVmhjMlV0YVc0dGIzVjBJQ1I3WkdWc1lYbDliWE1nYVc1bWFXNXBkR1U3WUN4Y2JpQWdJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQmliM0prWlhKU1lXUnBkWE02SUNjeFpXMG5MRnh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dKMmx1YkdsdVpTMWliRzlqYXljc1hHNGdJQ0FnSUNCdFlYSm5hVzVNWldaME9pQnZabVp6WlhRZ1B5QW5NV1Z0SnlBNklHNTFiR3dzWEc0Z0lDQWdJQ0JvWldsbmFIUTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ2RtVnlkR2xqWVd4QmJHbG5iam9nSjNSdmNDY3NYRzRnSUNBZ0lDQjNhV1IwYURvZ0p6RmxiU2NzWEc0Z0lDQWdmWDFjYmlBZ0x6NWNiaWs3WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRXh2WVdScGJtZEpZMjl1VUhKdmNITWdQU0I3WEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nWVc1NUxGeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVMRnh1SUNBdktpb2dWMmhsZEdobGNpQjBhR1VnZEdWNGRDQnBjeUJ5YVdkb2RDQjBieUJzWldaMElDb3ZYRzRnSUdselVuUnNPaUJpYjI5c1pXRnVMRnh1ZlNBbUlFTnZiVzF2YmxCeWIzQnpJQ1lnZTF4dUlDQWdJQzhxS2lCVFpYUWdjMmw2WlNCdlppQjBhR1VnWTI5dWRHRnBibVZ5TGlBcUwxeHVJQ0FnSUhOcGVtVTZJRzUxYldKbGNpeGNiaUFnZlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JNYjJGa2FXNW5TVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJNYjJGa2FXNW5TV052YmxCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMnhoYzNOT1lXMWxMQ0JqZUN3Z1oyVjBVM1I1YkdWekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDQjlJRDBnY0hKdmNITTdYRzVjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQWdJR056Y3oxN1oyVjBVM1I1YkdWektDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5iRzloWkdsdVp5MXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1ZjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekI5SUc5bVpuTmxkRDE3YVhOU2RHeDlJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TVRZd2ZTQnZabVp6WlhRZ0x6NWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3pNakI5SUc5bVpuTmxkRDE3SVdselVuUnNmU0F2UGx4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNia3h2WVdScGJtZEpibVJwWTJGMGIzSXVaR1ZtWVhWc2RGQnliM0J6SUQwZ2V5QnphWHBsT2lBMElIMDdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzaXplXCJdKTtcblxuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgIGNzczogX3JlZjJcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBDcm9zc0ljb24gPSBmdW5jdGlvbiBDcm9zc0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiXG4gIH0pKTtcbn07XG52YXIgRG93bkNoZXZyb24gPSBmdW5jdGlvbiBEb3duQ2hldnJvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMoe1xuICAgIHNpemU6IDIwXG4gIH0sIHByb3BzKSwganN4KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgYmFzZUNTUyA9IGZ1bmN0aW9uIGJhc2VDU1MoX3JlZjMpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWYzJHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgRHJvcGRvd25JbmRpY2F0b3IgPSBmdW5jdGlvbiBEcm9wZG93bkluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgaW5uZXJQcm9wcywge1xuICAgIGNzczogZ2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCBudWxsKSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmNC5pc0Rpc2FibGVkLFxuICAgICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY0JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgd2lkdGg6IDFcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZnVuY3Rpb24gSW5kaWNhdG9yU2VwYXJhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCgpKTtcbnZhciBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckNTUyhfcmVmNSkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgICAgc2l6ZSA9IF9yZWY1LnNpemUsXG4gICAgICBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiBzaXplLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICB9O1xufTtcblxudmFyIExvYWRpbmdEb3QgPSBmdW5jdGlvbiBMb2FkaW5nRG90KF9yZWY2KSB7XG4gIHZhciBkZWxheSA9IF9yZWY2LmRlbGF5LFxuICAgICAgb2Zmc2V0ID0gX3JlZjYub2Zmc2V0O1xuICByZXR1cm4ganN4KFwic3BhblwiLCB7XG4gICAgY3NzOiAvKiNfX1BVUkVfXyovX2Nzcyh7XG4gICAgICBhbmltYXRpb246IFwiXCIuY29uY2F0KGxvYWRpbmdEb3RBbmltYXRpb25zLCBcIiAxcyBlYXNlLWluLW91dCBcIikuY29uY2F0KGRlbGF5LCBcIm1zIGluZmluaXRlO1wiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbSdcbiAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmMweEpJaXdpWm1sc1pTSTZJbWx1WkdsallYUnZjbk11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJBWm14dmQxeHVMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QjBlWEJsSUU1dlpHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dzSUd0bGVXWnlZVzFsY3lCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDJOdmNtVW5PMXh1WEc1cGJYQnZjblFnZEhsd1pTQjdJRU52YlcxdmJsQnliM0J6TENCVWFHVnRaU0I5SUdaeWIyMGdKeTR1TDNSNWNHVnpKenRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QkVjbTl3Wkc5M2JpQW1JRU5zWldGeUlFbGpiMjV6WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnVTNabklEMGdLSHNnYzJsNlpTd2dMaTR1Y0hKdmNITWdmVG9nZXlCemFYcGxPaUJ1ZFcxaVpYSWdmU2tnUFQ0Z0tGeHVJQ0E4YzNablhHNGdJQ0FnYUdWcFoyaDBQWHR6YVhwbGZWeHVJQ0FnSUhkcFpIUm9QWHR6YVhwbGZWeHVJQ0FnSUhacFpYZENiM2c5WENJd0lEQWdNakFnTWpCY0lseHVJQ0FnSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVhHNGdJQ0FnWm05amRYTmhZbXhsUFZ3aVptRnNjMlZjSWx4dUlDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0JtYVd4c09pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUd4cGJtVklaV2xuYUhRNklERXNYRzRnSUNBZ0lDQnpkSEp2YTJVNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnYzNSeWIydGxWMmxrZEdnNklEQXNYRzRnSUNBZ2ZYMWNiaUFnSUNCN0xpNHVjSEp2Y0hOOVhHNGdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQmhibmtwSUQwK0lDaGNiaUFnUEZOMlp5QnphWHBsUFhzeU1IMGdleTR1TG5CeWIzQnpmVDVjYmlBZ0lDQThjR0YwYUNCa1BWd2lUVEUwTGpNME9DQXhOQzQ0TkRsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREJzTFRJdU5qVXhMVE11TURNd0xUSXVOalV4SURNdU1ESTVZeTB3TGpRMk9TQXdMalEyT1MweExqSXlPU0F3TGpRMk9TMHhMalk1TnlBd0xUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk1SURBdE1TNDJPVGRzTWk0M05UZ3RNeTR4TlMweUxqYzFPUzB6TGpFMU1tTXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWpnZ01DMHhMalk1TjNNeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2JESXVOalV5SURNdU1ETXhJREl1TmpVeExUTXVNRE14WXpBdU5EWTVMVEF1TkRZNUlERXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnpNQzQwTmprZ01TNHlNamtnTUNBeExqWTVOMnd0TWk0M05UZ2dNeTR4TlRJZ01pNDNOVGdnTXk0eE5XTXdMalEyT1NBd0xqUTJPU0F3TGpRMk9TQXhMakl5T1NBd0lERXVOams0ZWx3aUlDOCtYRzRnSUR3dlUzWm5QbHh1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdVEyaGxkbkp2YmlBOUlDaHdjbTl3Y3pvZ1lXNTVLU0E5UGlBb1hHNGdJRHhUZG1jZ2MybDZaVDE3TWpCOUlIc3VMaTV3Y205d2MzMCtYRzRnSUNBZ1BIQmhkR2dnWkQxY0lrMDBMalV4TmlBM0xqVTBPR013TGpRek5pMHdMalEwTmlBeExqQTBNeTB3TGpRNE1TQXhMalUzTmlBd2JETXVPVEE0SURNdU56UTNJRE11T1RBNExUTXVOelEzWXpBdU5UTXpMVEF1TkRneElERXVNVFF4TFRBdU5EUTJJREV1TlRjMElEQWdNQzQwTXpZZ01DNDBORFVnTUM0ME1EZ2dNUzR4T1RjZ01DQXhMall4TlMwd0xqUXdOaUF3TGpReE9DMDBMalk1TlNBMExqVXdNaTAwTGpZNU5TQTBMalV3TWkwd0xqSXhOeUF3TGpJeU15MHdMalV3TWlBd0xqTXpOUzB3TGpjNE55QXdMak16TlhNdE1DNDFOeTB3TGpFeE1pMHdMamM0T1Mwd0xqTXpOV013SURBdE5DNHlPRGN0TkM0d09EUXROQzQyT1RVdE5DNDFNREp6TFRBdU5ETTJMVEV1TVRjZ01DMHhMall4TlhwY0lpQXZQbHh1SUNBOEwxTjJaejVjYmlrN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnUkhKdmNHUnZkMjRnSmlCRGJHVmhjaUJDZFhSMGIyNXpYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1Wlhod2IzSjBJSFI1Y0dVZ1NXNWthV05oZEc5eVVISnZjSE1nUFNCRGIyMXRiMjVRY205d2N5QW1JSHRjYmlBZ0x5b3FJRlJvWlNCamFHbHNaSEpsYmlCMGJ5QmlaU0J5Wlc1a1pYSmxaQ0JwYm5OcFpHVWdkR2hsSUdsdVpHbGpZWFJ2Y2k0Z0tpOWNiaUFnWTJocGJHUnlaVzQ2SUU1dlpHVXNYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmVHRjYmx4dVkyOXVjM1FnWW1GelpVTlRVeUE5SUNoN1hHNGdJR2x6Um05amRYTmxaQ3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnWTI5c2IzSnpMRnh1SUNCOUxGeHVmVG9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUNoN1hHNGdJR3hoWW1Wc09pQW5hVzVrYVdOaGRHOXlRMjl1ZEdGcGJtVnlKeXhjYmlBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmx4dUlDQW5PbWh2ZG1WeUp6b2dlMXh1SUNBZ0lHTnZiRzl5T2lCcGMwWnZZM1Z6WldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRnd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3ME1DeGNiaUFnZlN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaSEp2Y0dSdmQyNUpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRVJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyUnliM0JrYjNkdVNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5aSEp2Y0dSdmQyNHRhVzVrYVdOaGRHOXlKem9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ0FwZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFJHOTNia05vWlhaeWIyNGdMejU5WEc0Z0lDQWdQQzlrYVhZK1hHNGdJQ2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyTnNaV0Z5U1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBblkyeGxZWEl0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThRM0p2YzNOSlkyOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCVFpYQmhjbUYwYjNKY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNTBlWEJsSUZObGNHRnlZWFJ2Y2xOMFlYUmxJRDBnZXlCcGMwUnBjMkZpYkdWa09pQmliMjlzWldGdUlIMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBb2UxeHVJQ0JwYzBScGMyRmliR1ZrTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lIMHNYRzU5T2lCRGIyMXRiMjVRY205d2N5QW1JRk5sY0dGeVlYUnZjbE4wWVhSbEtTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0ozTjBjbVYwWTJnbkxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR2x6UkdsellXSnNaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiREV3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdiV0Z5WjJsdVFtOTBkRzl0T2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUcxaGNtZHBibFJ2Y0RvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCM2FXUjBhRG9nTVN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvZXlBbmFXNWthV05oZEc5eUxYTmxjR0Z5WVhSdmNpYzZJSFJ5ZFdVZ2ZTd2dZMnhoYzNOT1lXMWxLWDFjYmlBZ0lDQXZQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5Qk1iMkZrYVc1blhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTWdQU0JyWlhsbWNtRnRaWE5nWEc0Z0lEQWxMQ0E0TUNVc0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd095QjlYRzRnSURRd0pTQjdJRzl3WVdOcGRIazZJREU3SUgxY2JtQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNiMkZrYVc1blNXNWthV05oZEc5eVExTlRJRDBnS0h0Y2JpQWdhWE5HYjJOMWMyVmtMRnh1SUNCemFYcGxMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJR052Ykc5eWN5eGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUgwc1hHNTlPaUI3WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJpeGNiaUFnYzJsNlpUb2diblZ0WW1WeUxGeHVJQ0IwYUdWdFpUb2dWR2hsYldVc1hHNTlLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3cyTUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1SUNCaGJHbG5ibE5sYkdZNklDZGpaVzUwWlhJbkxGeHVJQ0JtYjI1MFUybDZaVG9nYzJsNlpTeGNiaUFnYkdsdVpVaGxhV2RvZERvZ01TeGNiaUFnYldGeVoybHVVbWxuYUhRNklITnBlbVVzWEc0Z0lIUmxlSFJCYkdsbmJqb2dKMk5sYm5SbGNpY3NYRzRnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2R0YVdSa2JHVW5MRnh1ZlNrN1hHNWNiblI1Y0dVZ1JHOTBVSEp2Y0hNZ1BTQjdJR1JsYkdGNU9pQnVkVzFpWlhJc0lHOW1abk5sZERvZ1ltOXZiR1ZoYmlCOU8xeHVZMjl1YzNRZ1RHOWhaR2x1WjBSdmRDQTlJQ2g3SUdSbGJHRjVMQ0J2Wm1aelpYUWdmVG9nUkc5MFVISnZjSE1wSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR0Z1YVcxaGRHbHZiam9nWUNSN2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTjlJREZ6SUdWaGMyVXRhVzR0YjNWMElDUjdaR1ZzWVhsOWJYTWdhVzVtYVc1cGRHVTdZQ3hjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCaWIzSmtaWEpTWVdScGRYTTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0J0WVhKbmFXNU1aV1owT2lCdlptWnpaWFFnUHlBbk1XVnRKeUE2SUc1MWJHd3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0IwZVhCbElFeHZZV1JwYm1kSlkyOXVVSEp2Y0hNZ1BTQjdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmU0FtSUVOdmJXMXZibEJ5YjNCeklDWWdlMXh1SUNBZ0lDOHFLaUJUWlhRZ2MybDZaU0J2WmlCMGFHVWdZMjl1ZEdGcGJtVnlMaUFxTDF4dUlDQWdJSE5wZW1VNklHNTFiV0psY2l4Y2JpQWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQk1iMkZrYVc1blNXNWthV05oZEc5eUlEMGdLSEJ5YjNCek9pQk1iMkZrYVc1blNXTnZibEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCekxDQnBjMUowYkNCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0Nkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBbmJHOWhaR2x1WnkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ1BseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6QjlJRzltWm5ObGREMTdhWE5TZEd4OUlDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNVFl3ZlNCdlptWnpaWFFnTHo1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzek1qQjlJRzltWm5ObGREMTdJV2x6VW5Sc2ZTQXZQbHh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JreHZZV1JwYm1kSmJtUnBZMkYwYjNJdVpHVm1ZWFZzZEZCeWIzQnpJRDBnZXlCemFYcGxPaUEwSUgwN1hHNGlYWDA9ICovXCIpXG4gIH0pO1xufTtcblxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMCxcbiAgICBvZmZzZXQ6IGlzUnRsXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAxNjAsXG4gICAgb2Zmc2V0OiB0cnVlXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAzMjAsXG4gICAgb2Zmc2V0OiAhaXNSdGxcbiAgfSkpO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiA0XG59O1xuXG52YXIgY3NzID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnMsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250cm9sJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gXCIwIDAgMCAxcHggXCIuY29uY2F0KGNvbG9ycy5wcmltYXJ5KSA6IG51bGwsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5IZWlnaHQ6IHNwYWNpbmcuY29udHJvbEhlaWdodCxcbiAgICBvdXRsaW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEwMG1zJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgQ29udHJvbCA9IGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjc3M6IGdldFN0eWxlcygnY29udHJvbCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGNvbnRyb2w6IHRydWUsXG4gICAgICAnY29udHJvbC0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJ2NvbnRyb2wtLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgICAnY29udHJvbC0tbWVudS1pcy1vcGVuJzogbWVudUlzT3BlblxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgZ3JvdXBDU1MgPSBmdW5jdGlvbiBncm91cENTUyhfcmVmKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgKiAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgKiAyXG4gIH07XG59O1xuXG52YXIgR3JvdXAgPSBmdW5jdGlvbiBHcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBIZWFkaW5nID0gcHJvcHMuSGVhZGluZyxcbiAgICAgIGhlYWRpbmdQcm9wcyA9IHByb3BzLmhlYWRpbmdQcm9wcyxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgZ3JvdXA6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGpzeChIZWFkaW5nLCBfZXh0ZW5kcyh7fSwgaGVhZGluZ1Byb3BzLCB7XG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzLFxuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICBjeDogY3hcbiAgfSksIGxhYmVsKSwganN4KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSk7XG59O1xuXG52YXIgZ3JvdXBIZWFkaW5nQ1NTID0gZnVuY3Rpb24gZ3JvdXBIZWFkaW5nQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2dyb3VwJyxcbiAgICBjb2xvcjogJyM5OTknLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICc3NSUnLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIG1hcmdpbkJvdHRvbTogJzAuMjVlbScsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfTtcbn07XG52YXIgR3JvdXBIZWFkaW5nID0gZnVuY3Rpb24gR3JvdXBIZWFkaW5nKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHMsXG4gICAgICBjbGVhblByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc05hbWVcIiwgXCJjeFwiLCBcImdldFN0eWxlc1wiLCBcInRoZW1lXCIsIFwic2VsZWN0UHJvcHNcIl0pO1xuXG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdncm91cEhlYWRpbmcnLCBfb2JqZWN0U3ByZWFkJDEoe1xuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfSwgY2xlYW5Qcm9wcykpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2dyb3VwLWhlYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBjbGVhblByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIGlucHV0Q1NTID0gZnVuY3Rpb24gaW5wdXRDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwXG4gIH07XG59O1xuXG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2lucHV0JyxcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KF9yZWYyKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBjeCA9IF9yZWYyLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gX3JlZjIuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmMi5pbm5lclJlZixcbiAgICAgIGlzSGlkZGVuID0gX3JlZjIuaXNIaWRkZW4sXG4gICAgICBpc0Rpc2FibGVkID0gX3JlZjIuaXNEaXNhYmxlZCxcbiAgICAgIHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IF9yZWYyLnNlbGVjdFByb3BzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFtcImNsYXNzTmFtZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwiaW5uZXJSZWZcIiwgXCJpc0hpZGRlblwiLCBcImlzRGlzYWJsZWRcIiwgXCJ0aGVtZVwiLCBcInNlbGVjdFByb3BzXCJdKTtcblxuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5wdXQnLCBfb2JqZWN0U3ByZWFkJDIoe1xuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfSwgcHJvcHMpKVxuICB9LCBqc3goQXV0b3NpemVJbnB1dCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5wdXQ6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIGlucHV0UmVmOiBpbm5lclJlZixcbiAgICBpbnB1dFN0eWxlOiBpbnB1dFN0eWxlKGlzSGlkZGVuKSxcbiAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICB9LCBwcm9wcykpKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQzKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgbXVsdGlWYWx1ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ211bHRpVmFsdWUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWluV2lkdGg6IDAgLy8gcmVzb2x2ZXMgZmxleC90ZXh0LW92ZXJmbG93IGJ1Z1xuXG4gIH07XG59O1xudmFyIG11bHRpVmFsdWVMYWJlbENTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVMYWJlbENTUyhfcmVmMikge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICAgIGNyb3BXaXRoRWxsaXBzaXMgPSBfcmVmMi5jcm9wV2l0aEVsbGlwc2lzO1xuICByZXR1cm4ge1xuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBmb250U2l6ZTogJzg1JScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDMsXG4gICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgdGV4dE92ZXJmbG93OiBjcm9wV2l0aEVsbGlwc2lzID8gJ2VsbGlwc2lzJyA6IG51bGwsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn07XG52YXIgbXVsdGlWYWx1ZVJlbW92ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVSZW1vdmVDU1MoX3JlZjMpIHtcbiAgdmFyIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZjMkdGhlbWUuc3BhY2luZyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYzJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycyxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZDtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgJiYgY29sb3JzLmRhbmdlckxpZ2h0LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhbmdlckxpZ2h0LFxuICAgICAgY29sb3I6IGNvbG9ycy5kYW5nZXJcbiAgICB9XG4gIH07XG59O1xudmFyIE11bHRpVmFsdWVHZW5lcmljID0gZnVuY3Rpb24gTXVsdGlWYWx1ZUdlbmVyaWMoX3JlZjQpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgICBpbm5lclByb3BzID0gX3JlZjQuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBpbm5lclByb3BzLCBjaGlsZHJlbik7XG59O1xudmFyIE11bHRpVmFsdWVDb250YWluZXIgPSBNdWx0aVZhbHVlR2VuZXJpYztcbnZhciBNdWx0aVZhbHVlTGFiZWwgPSBNdWx0aVZhbHVlR2VuZXJpYztcbmZ1bmN0aW9uIE11bHRpVmFsdWVSZW1vdmUoX3JlZjUpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgICBpbm5lclByb3BzID0gX3JlZjUuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBpbm5lclByb3BzLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCB7XG4gICAgc2l6ZTogMTRcbiAgfSkpO1xufVxuXG52YXIgTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uIE11bHRpVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICByZW1vdmVQcm9wcyA9IHByb3BzLnJlbW92ZVByb3BzLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgdmFyIENvbnRhaW5lciA9IGNvbXBvbmVudHMuQ29udGFpbmVyLFxuICAgICAgTGFiZWwgPSBjb21wb25lbnRzLkxhYmVsLFxuICAgICAgUmVtb3ZlID0gY29tcG9uZW50cy5SZW1vdmU7XG4gIHJldHVybiBqc3goQ2xhc3NOYW1lcywgbnVsbCwgZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgdmFyIGNzcyA9IF9yZWY2LmNzcyxcbiAgICAgICAgZW1vdGlvbkN4ID0gX3JlZjYuY3g7XG4gICAgcmV0dXJuIGpzeChDb250YWluZXIsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkJDMoX29iamVjdFNwcmVhZCQzKHt9LCBpbm5lclByb3BzKSwge30sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWUnOiB0cnVlLFxuICAgICAgICAgICdtdWx0aS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9KSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0sIGpzeChMYWJlbCwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZUxhYmVsJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9LFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwgY2hpbGRyZW4pLCBqc3goUmVtb3ZlLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZCQzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZVJlbW92ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWVfX3JlbW92ZSc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sIHJlbW92ZVByb3BzKSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5NdWx0aVZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3JvcFdpdGhFbGxpcHNpczogdHJ1ZVxufTtcblxudmFyIG9wdGlvbkNTUyA9IGZ1bmN0aW9uIG9wdGlvbkNTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZi5pc0ZvY3VzZWQsXG4gICAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdvcHRpb24nLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkyNSA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDIwIDogaXNTZWxlY3RlZCA/IGNvbG9ycy5uZXV0cmFsMCA6ICdpbmhlcml0JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMywgXCJweFwiKSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIC8vIHByb3ZpZGUgc29tZSBhZmZvcmRhbmNlIG9uIHRvdWNoIGRldmljZXNcbiAgICAnOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgKGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5wcmltYXJ5NTApXG4gICAgfVxuICB9O1xufTtcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnb3B0aW9uJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgb3B0aW9uOiB0cnVlLFxuICAgICAgJ29wdGlvbi0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJ29wdGlvbi0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAgICdvcHRpb24tLWlzLXNlbGVjdGVkJzogaXNTZWxlY3RlZFxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgcmVmOiBpbm5lclJlZlxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIHBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdwbGFjZWhvbGRlcicsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygncGxhY2Vob2xkZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBwbGFjZWhvbGRlcjogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBjc3MkMSA9IGZ1bmN0aW9uIGNzcyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdzaW5nbGVWYWx1ZScsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDQwIDogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAyLCBcInB4KVwiKSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIFNpbmdsZVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdzaW5nbGVWYWx1ZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdzaW5nbGUtdmFsdWUnOiB0cnVlLFxuICAgICAgJ3NpbmdsZS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQ0KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNChPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBjb21wb25lbnRzID0ge1xuICBDbGVhckluZGljYXRvcjogQ2xlYXJJbmRpY2F0b3IsXG4gIENvbnRyb2w6IENvbnRyb2wsXG4gIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkluZGljYXRvcixcbiAgRG93bkNoZXZyb246IERvd25DaGV2cm9uLFxuICBDcm9zc0ljb246IENyb3NzSWNvbixcbiAgR3JvdXA6IEdyb3VwLFxuICBHcm91cEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgSW5kaWNhdG9yc0NvbnRhaW5lcjogSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgSW5kaWNhdG9yU2VwYXJhdG9yOiBJbmRpY2F0b3JTZXBhcmF0b3IsXG4gIElucHV0OiBJbnB1dCxcbiAgTG9hZGluZ0luZGljYXRvcjogTG9hZGluZ0luZGljYXRvcixcbiAgTWVudTogTWVudSxcbiAgTWVudUxpc3Q6IE1lbnVMaXN0LFxuICBNZW51UG9ydGFsOiBNZW51UG9ydGFsLFxuICBMb2FkaW5nTWVzc2FnZTogTG9hZGluZ01lc3NhZ2UsXG4gIE5vT3B0aW9uc01lc3NhZ2U6IE5vT3B0aW9uc01lc3NhZ2UsXG4gIE11bHRpVmFsdWU6IE11bHRpVmFsdWUsXG4gIE11bHRpVmFsdWVDb250YWluZXI6IE11bHRpVmFsdWVDb250YWluZXIsXG4gIE11bHRpVmFsdWVMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICBNdWx0aVZhbHVlUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlLFxuICBPcHRpb246IE9wdGlvbixcbiAgUGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxuICBTZWxlY3RDb250YWluZXI6IFNlbGVjdENvbnRhaW5lcixcbiAgU2luZ2xlVmFsdWU6IFNpbmdsZVZhbHVlLFxuICBWYWx1ZUNvbnRhaW5lcjogVmFsdWVDb250YWluZXJcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudHMgPSBmdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50cyhwcm9wcykge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNCh7fSwgY29tcG9uZW50cyksIHByb3BzLmNvbXBvbmVudHMpO1xufTtcblxuZXhwb3J0IHsgaXNEb2N1bWVudEVsZW1lbnQgYXMgQSwgZXhwb3J0ZWRFcXVhbCBhcyBCLCBjbGVhblZhbHVlIGFzIEMsIHNjcm9sbEludG9WaWV3IGFzIEQsIG5vb3AgYXMgRSwgY29tcG9uZW50cyBhcyBGLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBHLCBNZW51UGxhY2VyIGFzIE0sIGNvbnRhaW5lckNTUyBhcyBhLCBjc3MgYXMgYiwgY2xlYXJJbmRpY2F0b3JDU1MgYXMgYywgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZCwgZ3JvdXBIZWFkaW5nQ1NTIGFzIGUsIGluZGljYXRvclNlcGFyYXRvckNTUyBhcyBmLCBncm91cENTUyBhcyBnLCBpbnB1dENTUyBhcyBoLCBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIGFzIGksIGxvYWRpbmdNZXNzYWdlQ1NTIGFzIGosIG1lbnVMaXN0Q1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbWVudUNTUyBhcyBtLCBtZW51UG9ydGFsQ1NTIGFzIG4sIG11bHRpVmFsdWVDU1MgYXMgbywgbXVsdGlWYWx1ZUxhYmVsQ1NTIGFzIHAsIG11bHRpVmFsdWVSZW1vdmVDU1MgYXMgcSwgbm9PcHRpb25zTWVzc2FnZUNTUyBhcyByLCBvcHRpb25DU1MgYXMgcywgcGxhY2Vob2xkZXJDU1MgYXMgdCwgY3NzJDEgYXMgdSwgdmFsdWVDb250YWluZXJDU1MgYXMgdiwgaXNUb3VjaENhcGFibGUgYXMgdywgaXNNb2JpbGVEZXZpY2UgYXMgeCwgZGVmYXVsdENvbXBvbmVudHMgYXMgeSwgY2xhc3NOYW1lcyBhcyB6IH07XG4iLCJpbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCAncmVhY3QtZG9tJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuZXhwb3J0IHsgRiBhcyBjb21wb25lbnRzIH0gZnJvbSAnLi9pbmRleC03NWIwMmJhYy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4vU2VsZWN0LWUxY2Y0OWFlLmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IGMgYXMgY3JlYXRlRmlsdGVyLCBhIGFzIGRlZmF1bHRUaGVtZSwgbSBhcyBtZXJnZVN0eWxlcyB9IGZyb20gJy4vU2VsZWN0LWUxY2Y0OWFlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwnO1xuaW1wb3J0ICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5pbXBvcnQgeyBtIGFzIG1hbmFnZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZU1hbmFnZXItMmYyYjZmNWIuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG52YXIgTm9uY2VQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTm9uY2VQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOb25jZVByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBOb25jZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vbmNlUHJvdmlkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiAobm9uY2UpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDYWNoZSh7XG4gICAgICAgIG5vbmNlOiBub25jZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IG1lbW9pemVPbmUoX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTm9uY2VQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBlbW90aW9uQ2FjaGUgPSB0aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSh0aGlzLnByb3BzLm5vbmNlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYWNoZVByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBlbW90aW9uQ2FjaGVcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb25jZVByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG52YXIgaW5kZXggPSBtYW5hZ2VTdGF0ZShTZWxlY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IE5vbmNlUHJvdmlkZXIgfTtcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogJycsXG4gIGRlZmF1bHRNZW51SXNPcGVuOiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsXG59O1xuXG52YXIgbWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN0YXRlTWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN0YXRlTWFuYWdlcik7XG5cbiAgICBmdW5jdGlvbiBTdGF0ZU1hbmFnZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZU1hbmFnZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgICAgX3RoaXMuc2VsZWN0ID0gdm9pZCAwO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLmlucHV0VmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbjogX3RoaXMucHJvcHMubWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMubWVudUlzT3BlbiA6IF90aGlzLnByb3BzLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25DaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgLy8gVE9ETzogZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3ZSBhbGxvdyB0aGUgcHJvcCB0byByZXR1cm4gYSBuZXdcbiAgICAgICAgLy8gdmFsdWUsIGJ1dCBub3cgaW5wdXRWYWx1ZSBpcyBhIGNvbnRyb2xsYWJsZSBwcm9wIHdlIHByb2JhYmx5IHNob3VsZG4ndFxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5jYWxsUHJvcCgnb25JbnB1dENoYW5nZScsIHZhbHVlLCBhY3Rpb25NZXRhKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogbmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1lbnVPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51T3BlbicpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25NZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNhbGxQcm9wKCdvbk1lbnVDbG9zZScpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhdGVNYW5hZ2VyLCBbe1xuICAgICAga2V5OiBcImZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFByb3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzW2tleV0gOiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGxQcm9wXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbFByb3AobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcylbbmFtZV0uYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBkZWZhdWx0SW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMi5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRNZW51SXNPcGVuID0gX3RoaXMkcHJvcHMyLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gX3RoaXMkcHJvcHMyLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1wiZGVmYXVsdElucHV0VmFsdWVcIiwgXCJkZWZhdWx0TWVudUlzT3BlblwiLCBcImRlZmF1bHRWYWx1ZVwiXSk7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgX3RoaXMyLnNlbGVjdCA9IF9yZWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLmdldFByb3AoJ2lucHV0VmFsdWUnKSxcbiAgICAgICAgICBtZW51SXNPcGVuOiB0aGlzLmdldFByb3AoJ21lbnVJc09wZW4nKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICBvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgb25NZW51Q2xvc2U6IHRoaXMub25NZW51Q2xvc2UsXG4gICAgICAgICAgb25NZW51T3BlbjogdGhpcy5vbk1lbnVPcGVuLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldFByb3AoJ3ZhbHVlJylcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGF0ZU1hbmFnZXI7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcywgX3RlbXA7XG59O1xuXG5leHBvcnQgeyBtYW5hZ2VTdGF0ZSBhcyBtIH07XG4iXSwic291cmNlUm9vdCI6IiJ9