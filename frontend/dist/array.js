parcelRequire = (function(e, r, t, n) {
    var i,
        o = 'function' == typeof parcelRequire && parcelRequire,
        u = 'function' == typeof require && require
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = 'function' == typeof parcelRequire && parcelRequire
                if (!n && i) return i(t, !0)
                if (o) return o(t, !0)
                if (u && 'string' == typeof t) return u(t)
                var c = new Error("Cannot find module '" + t + "'")
                throw ((c.code = 'MODULE_NOT_FOUND'), c)
            }
            ;(p.resolve = function(r) {
                return e[t][1][r] || r
            }),
                (p.cache = {})
            var l = (r[t] = new f.Module(t))
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports
        function p(e) {
            return f(p.resolve(e))
        }
    }
    ;(f.isParcelRequire = !0),
        (f.Module = function(e) {
            ;(this.id = e), (this.bundle = f), (this.exports = {})
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function(r, t) {
            e[r] = [
                function(e, r) {
                    r.exports = t
                },
                {},
            ]
        })
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1])
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = l)
            : 'function' == typeof define && define.amd
            ? define(function() {
                  return l
              })
            : n && (this[n] = l)
    }
    if (((parcelRequire = f), i)) throw i
    return f
})(
    {
        itQ5: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0)
                var e = { DEBUG: !1, LIB_VERSION: '1.0.0' },
                    t = e
                exports.default = t
            },
            {},
        ],
        FOZT: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.navigator = exports.document = exports.window = exports.console = exports.userAgent = exports._ = void 0)
                var e,
                    r = t(require('./config'))
                function t(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                function n(e) {
                    return (n =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function(e) {
                                  return typeof e
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              })(e)
                }
                if (((exports.window = e), 'undefined' == typeof window)) {
                    var o = { hostname: '' }
                    exports.window = e = {
                        navigator: { userAgent: '' },
                        document: { location: o, referrer: '' },
                        screen: { width: 0, height: 0 },
                        location: o,
                    }
                } else exports.window = e = window
                var i = Array.prototype,
                    a = Function.prototype,
                    c = Object.prototype,
                    u = i.slice,
                    s = c.toString,
                    l = c.hasOwnProperty,
                    f = e.console,
                    d = e.navigator,
                    p = e.document,
                    g = e.opera,
                    h = e.screen,
                    m = d.userAgent
                ;(exports.userAgent = m), (exports.document = p), (exports.navigator = d)
                var y = a.bind,
                    v = i.forEach,
                    b = i.indexOf,
                    w = Array.isArray,
                    S = {},
                    x = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                    O = {
                        trim: function(e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                        },
                    }
                exports._ = O
                var A = {
                    log: function() {
                        if (r.default.DEBUG && !O.isUndefined(f) && f)
                            try {
                                f.log.apply(f, arguments)
                            } catch (e) {
                                O.each(arguments, function(e) {
                                    f.log(e)
                                })
                            }
                    },
                    error: function() {
                        if (r.default.DEBUG && !O.isUndefined(f) && f) {
                            var e = ['PostHog error:'].concat(O.toArray(arguments))
                            try {
                                f.error.apply(f, e)
                            } catch (t) {
                                O.each(e, function(e) {
                                    f.error(e)
                                })
                            }
                        }
                    },
                    critical: function() {
                        if (!O.isUndefined(f) && f) {
                            var e = ['PostHog error:'].concat(O.toArray(arguments))
                            try {
                                f.error.apply(f, e)
                            } catch (r) {
                                O.each(e, function(e) {
                                    f.error(e)
                                })
                            }
                        }
                    },
                }
                ;(exports.console = A),
                    (O.bind = function(e, r) {
                        var t, n
                        if (y && e.bind === y) return y.apply(e, u.call(arguments, 1))
                        if (!O.isFunction(e)) throw new TypeError()
                        return (
                            (t = u.call(arguments, 2)),
                            (n = function() {
                                if (!(this instanceof n)) return e.apply(r, t.concat(u.call(arguments)))
                                var o = {}
                                o.prototype = e.prototype
                                var i = new o()
                                o.prototype = null
                                var a = e.apply(i, t.concat(u.call(arguments)))
                                return Object(a) === a ? a : i
                            })
                        )
                    }),
                    (O.bind_instance_methods = function(e) {
                        for (var r in e) 'function' == typeof e[r] && (e[r] = O.bind(e[r], e))
                    }),
                    (O.each = function(e, r, t) {
                        if (null != e)
                            if (v && e.forEach === v) e.forEach(r, t)
                            else if (e.length === +e.length) {
                                for (var n = 0, o = e.length; n < o; n++)
                                    if (n in e && r.call(t, e[n], n, e) === S) return
                            } else for (var i in e) if (l.call(e, i) && r.call(t, e[i], i, e) === S) return
                    }),
                    (O.escapeHTML = function(e) {
                        var r = e
                        return (
                            r &&
                                O.isString(r) &&
                                (r = r
                                    .replace(/&/g, '&amp;')
                                    .replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/"/g, '&quot;')
                                    .replace(/'/g, '&#039;')),
                            r
                        )
                    }),
                    (O.extend = function(e) {
                        return (
                            O.each(u.call(arguments, 1), function(r) {
                                for (var t in r) void 0 !== r[t] && (e[t] = r[t])
                            }),
                            e
                        )
                    }),
                    (O.isArray =
                        w ||
                        function(e) {
                            return '[object Array]' === s.call(e)
                        }),
                    (O.isFunction = function(e) {
                        try {
                            return /^\s*\bfunction\b/.test(e)
                        } catch (r) {
                            return !1
                        }
                    }),
                    (O.isArguments = function(e) {
                        return !(!e || !l.call(e, 'callee'))
                    }),
                    (O.toArray = function(e) {
                        return e
                            ? e.toArray
                                ? e.toArray()
                                : O.isArray(e)
                                ? u.call(e)
                                : O.isArguments(e)
                                ? u.call(e)
                                : O.values(e)
                            : []
                    }),
                    (O.keys = function(e) {
                        var r = []
                        return null === e
                            ? r
                            : (O.each(e, function(e, t) {
                                  r[r.length] = t
                              }),
                              r)
                    }),
                    (O.values = function(e) {
                        var r = []
                        return null === e
                            ? r
                            : (O.each(e, function(e) {
                                  r[r.length] = e
                              }),
                              r)
                    }),
                    (O.identity = function(e) {
                        return e
                    }),
                    (O.include = function(e, r) {
                        var t = !1
                        return null === e
                            ? t
                            : b && e.indexOf === b
                            ? -1 != e.indexOf(r)
                            : (O.each(e, function(e) {
                                  if (t || (t = e === r)) return S
                              }),
                              t)
                    }),
                    (O.includes = function(e, r) {
                        return -1 !== e.indexOf(r)
                    }),
                    (O.inherit = function(e, r) {
                        return (e.prototype = new r()), (e.prototype.constructor = e), (e.superclass = r.prototype), e
                    }),
                    (O.isObject = function(e) {
                        return e === Object(e) && !O.isArray(e)
                    }),
                    (O.isEmptyObject = function(e) {
                        if (O.isObject(e)) {
                            for (var r in e) if (l.call(e, r)) return !1
                            return !0
                        }
                        return !1
                    }),
                    (O.isUndefined = function(e) {
                        return void 0 === e
                    }),
                    (O.isString = function(e) {
                        return '[object String]' == s.call(e)
                    }),
                    (O.isDate = function(e) {
                        return '[object Date]' == s.call(e)
                    }),
                    (O.isNumber = function(e) {
                        return '[object Number]' == s.call(e)
                    }),
                    (O.isElement = function(e) {
                        return !(!e || 1 !== e.nodeType)
                    }),
                    (O.encodeDates = function(e) {
                        return (
                            O.each(e, function(r, t) {
                                O.isDate(r) ? (e[t] = O.formatDate(r)) : O.isObject(r) && (e[t] = O.encodeDates(r))
                            }),
                            e
                        )
                    }),
                    (O.timestamp = function() {
                        return (
                            (Date.now =
                                Date.now ||
                                function() {
                                    return +new Date()
                                }),
                            Date.now()
                        )
                    }),
                    (O.formatDate = function(e) {
                        function r(e) {
                            return e < 10 ? '0' + e : e
                        }
                        return (
                            e.getUTCFullYear() +
                            '-' +
                            r(e.getUTCMonth() + 1) +
                            '-' +
                            r(e.getUTCDate()) +
                            'T' +
                            r(e.getUTCHours()) +
                            ':' +
                            r(e.getUTCMinutes()) +
                            ':' +
                            r(e.getUTCSeconds())
                        )
                    }),
                    (O.safewrap = function(e) {
                        return function() {
                            try {
                                return e.apply(this, arguments)
                            } catch (t) {
                                A.critical(
                                    'Implementation error. Please turn on debug and contact support@posthog.com.'
                                ),
                                    r.default.DEBUG && A.critical(t)
                            }
                        }
                    }),
                    (O.safewrap_class = function(e, r) {
                        for (var t = 0; t < r.length; t++) e.prototype[r[t]] = O.safewrap(e.prototype[r[t]])
                    }),
                    (O.safewrap_instance_methods = function(e) {
                        for (var r in e) 'function' == typeof e[r] && (e[r] = O.safewrap(e[r]))
                    }),
                    (O.strip_empty_properties = function(e) {
                        var r = {}
                        return (
                            O.each(e, function(e, t) {
                                O.isString(e) && e.length > 0 && (r[t] = e)
                            }),
                            r
                        )
                    }),
                    (O.truncate = function(e, r) {
                        var t
                        return (
                            'string' == typeof e
                                ? (t = e.slice(0, r))
                                : O.isArray(e)
                                ? ((t = []),
                                  O.each(e, function(e) {
                                      t.push(O.truncate(e, r))
                                  }))
                                : O.isObject(e)
                                ? ((t = {}),
                                  O.each(e, function(e, n) {
                                      t[n] = O.truncate(e, r)
                                  }))
                                : (t = e),
                            t
                        )
                    }),
                    (O.JSONEncode = function(e) {
                        var r = function(e) {
                            var r = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                t = {
                                    '\b': '\\b',
                                    '\t': '\\t',
                                    '\n': '\\n',
                                    '\f': '\\f',
                                    '\r': '\\r',
                                    '"': '\\"',
                                    '\\': '\\\\',
                                }
                            return (
                                (r.lastIndex = 0),
                                r.test(e)
                                    ? '"' +
                                      e.replace(r, function(e) {
                                          var r = t[e]
                                          return 'string' == typeof r
                                              ? r
                                              : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4)
                                      }) +
                                      '"'
                                    : '"' + e + '"'
                            )
                        }
                        return (function e(t, o) {
                            var i = '',
                                a = 0,
                                c = '',
                                u = '',
                                f = 0,
                                d = i,
                                p = [],
                                g = o[t]
                            switch (
                                (g && 'object' === n(g) && 'function' == typeof g.toJSON && (g = g.toJSON(t)), n(g))
                            ) {
                                case 'string':
                                    return r(g)
                                case 'number':
                                    return isFinite(g) ? String(g) : 'null'
                                case 'boolean':
                                case 'null':
                                    return String(g)
                                case 'object':
                                    if (!g) return 'null'
                                    if (((i += '    '), (p = []), '[object Array]' === s.apply(g))) {
                                        for (f = g.length, a = 0; a < f; a += 1) p[a] = e(a, g) || 'null'
                                        return (
                                            (u =
                                                0 === p.length
                                                    ? '[]'
                                                    : i
                                                    ? '[\n' + i + p.join(',\n' + i) + '\n' + d + ']'
                                                    : '[' + p.join(',') + ']'),
                                            (i = d),
                                            u
                                        )
                                    }
                                    for (c in g) l.call(g, c) && (u = e(c, g)) && p.push(r(c) + (i ? ': ' : ':') + u)
                                    return (
                                        (u =
                                            0 === p.length
                                                ? '{}'
                                                : i
                                                ? '{' + p.join(',') + d + '}'
                                                : '{' + p.join(',') + '}'),
                                        (i = d),
                                        u
                                    )
                            }
                        })('', { '': e })
                    }),
                    (O.JSONDecode = (function() {
                        var e,
                            r,
                            t,
                            n,
                            o = { '"': '"', '\\': '\\', '/': '/', b: '\b', f: '\f', n: '\n', r: '\r', t: '\t' },
                            i = function(r) {
                                var n = new SyntaxError(r)
                                throw ((n.at = e), (n.text = t), n)
                            },
                            a = function(n) {
                                return (
                                    n && n !== r && i("Expected '" + n + "' instead of '" + r + "'"),
                                    (r = t.charAt(e)),
                                    (e += 1),
                                    r
                                )
                            },
                            c = function() {
                                var e,
                                    t = ''
                                for ('-' === r && ((t = '-'), a('-')); r >= '0' && r <= '9'; ) (t += r), a()
                                if ('.' === r) for (t += '.'; a() && r >= '0' && r <= '9'; ) t += r
                                if ('e' === r || 'E' === r)
                                    for (
                                        t += r, a(), ('-' !== r && '+' !== r) || ((t += r), a());
                                        r >= '0' && r <= '9';

                                    )
                                        (t += r), a()
                                if (((e = +t), isFinite(e))) return e
                                i('Bad number')
                            },
                            u = function() {
                                var e,
                                    t,
                                    n,
                                    c = ''
                                if ('"' === r)
                                    for (; a(); ) {
                                        if ('"' === r) return a(), c
                                        if ('\\' === r)
                                            if ((a(), 'u' === r)) {
                                                for (
                                                    n = 0, t = 0;
                                                    t < 4 && ((e = parseInt(a(), 16)), isFinite(e));
                                                    t += 1
                                                )
                                                    n = 16 * n + e
                                                c += String.fromCharCode(n)
                                            } else {
                                                if ('string' != typeof o[r]) break
                                                c += o[r]
                                            }
                                        else c += r
                                    }
                                i('Bad string')
                            },
                            s = function() {
                                for (; r && r <= ' '; ) a()
                            },
                            l = function() {
                                var e = []
                                if ('[' === r) {
                                    if ((a('['), s(), ']' === r)) return a(']'), e
                                    for (; r; ) {
                                        if ((e.push(n()), s(), ']' === r)) return a(']'), e
                                        a(','), s()
                                    }
                                }
                                i('Bad array')
                            },
                            f = function() {
                                var e,
                                    t = {}
                                if ('{' === r) {
                                    if ((a('{'), s(), '}' === r)) return a('}'), t
                                    for (; r; ) {
                                        if (
                                            ((e = u()),
                                            s(),
                                            a(':'),
                                            Object.hasOwnProperty.call(t, e) && i('Duplicate key "' + e + '"'),
                                            (t[e] = n()),
                                            s(),
                                            '}' === r)
                                        )
                                            return a('}'), t
                                        a(','), s()
                                    }
                                }
                                i('Bad object')
                            }
                        return (
                            (n = function() {
                                switch ((s(), r)) {
                                    case '{':
                                        return f()
                                    case '[':
                                        return l()
                                    case '"':
                                        return u()
                                    case '-':
                                        return c()
                                    default:
                                        return r >= '0' && r <= '9'
                                            ? c()
                                            : (function() {
                                                  switch (r) {
                                                      case 't':
                                                          return a('t'), a('r'), a('u'), a('e'), !0
                                                      case 'f':
                                                          return a('f'), a('a'), a('l'), a('s'), a('e'), !1
                                                      case 'n':
                                                          return a('n'), a('u'), a('l'), a('l'), null
                                                  }
                                                  i('Unexpected "' + r + '"')
                                              })()
                                }
                            }),
                            function(o) {
                                var a
                                return (t = o), (e = 0), (r = ' '), (a = n()), s(), r && i('Syntax error'), a
                            }
                        )
                    })()),
                    (O.base64Encode = function(e) {
                        var r,
                            t,
                            n,
                            o,
                            i,
                            a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                            c = 0,
                            u = 0,
                            s = '',
                            l = []
                        if (!e) return e
                        e = O.utf8Encode(e)
                        do {
                            ;(r =
                                ((i = (e.charCodeAt(c++) << 16) | (e.charCodeAt(c++) << 8) | e.charCodeAt(c++)) >> 18) &
                                63),
                                (t = (i >> 12) & 63),
                                (n = (i >> 6) & 63),
                                (o = 63 & i),
                                (l[u++] = a.charAt(r) + a.charAt(t) + a.charAt(n) + a.charAt(o))
                        } while (c < e.length)
                        switch (((s = l.join('')), e.length % 3)) {
                            case 1:
                                s = s.slice(0, -2) + '=='
                                break
                            case 2:
                                s = s.slice(0, -1) + '='
                        }
                        return s
                    }),
                    (O.utf8Encode = function(e) {
                        var r,
                            t,
                            n,
                            o,
                            i = ''
                        for (
                            r = t = 0, n = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, o = 0;
                            o < n;
                            o++
                        ) {
                            var a = e.charCodeAt(o),
                                c = null
                            a < 128
                                ? t++
                                : (c =
                                      a > 127 && a < 2048
                                          ? String.fromCharCode((a >> 6) | 192, (63 & a) | 128)
                                          : String.fromCharCode(
                                                (a >> 12) | 224,
                                                ((a >> 6) & 63) | 128,
                                                (63 & a) | 128
                                            )),
                                null !== c && (t > r && (i += e.substring(r, t)), (i += c), (r = t = o + 1))
                        }
                        return t > r && (i += e.substring(r, e.length)), i
                    }),
                    (O.UUID = (function() {
                        var e = function() {
                            for (var e = 1 * new Date(), r = 0; e == 1 * new Date(); ) r++
                            return e.toString(16) + r.toString(16)
                        }
                        return function() {
                            var r = (h.height * h.width).toString(16)
                            return (
                                e() +
                                '-' +
                                Math.random()
                                    .toString(16)
                                    .replace('.', '') +
                                '-' +
                                (function() {
                                    var e,
                                        r,
                                        t = m,
                                        n = [],
                                        o = 0
                                    function i(e, r) {
                                        var t,
                                            o = 0
                                        for (t = 0; t < r.length; t++) o |= n[t] << (8 * t)
                                        return e ^ o
                                    }
                                    for (e = 0; e < t.length; e++)
                                        (r = t.charCodeAt(e)),
                                            n.unshift(255 & r),
                                            n.length >= 4 && ((o = i(o, n)), (n = []))
                                    return n.length > 0 && (o = i(o, n)), o.toString(16)
                                })() +
                                '-' +
                                r +
                                '-' +
                                e()
                            )
                        }
                    })()),
                    (O.isBlockedUA = function(e) {
                        return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(e)
                    }),
                    (O.HTTPBuildQuery = function(e, r) {
                        var t,
                            n,
                            o = []
                        return (
                            O.isUndefined(r) && (r = '&'),
                            O.each(e, function(e, r) {
                                ;(t = encodeURIComponent(e.toString())),
                                    (n = encodeURIComponent(r)),
                                    (o[o.length] = n + '=' + t)
                            }),
                            o.join(r)
                        )
                    }),
                    (O.getQueryParam = function(e, r) {
                        r = r.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
                        var t = new RegExp('[\\?&]' + r + '=([^&#]*)').exec(e)
                        if (null === t || (t && 'string' != typeof t[1] && t[1].length)) return ''
                        var n = t[1]
                        try {
                            n = decodeURIComponent(n)
                        } catch (o) {
                            A.error('Skipping decoding for malformed query param: ' + n)
                        }
                        return n.replace(/\+/g, ' ')
                    }),
                    (O.getHashParam = function(e, r) {
                        var t = e.match(new RegExp(r + '=([^&]*)'))
                        return t ? t[1] : null
                    }),
                    (O.cookie = {
                        get: function(e) {
                            try {
                                for (var r = e + '=', t = p.cookie.split(';'), n = 0; n < t.length; n++) {
                                    for (var o = t[n]; ' ' == o.charAt(0); ) o = o.substring(1, o.length)
                                    if (0 === o.indexOf(r)) return decodeURIComponent(o.substring(r.length, o.length))
                                }
                            } catch (i) {}
                            return null
                        },
                        parse: function(e) {
                            var r
                            try {
                                r = O.JSONDecode(O.cookie.get(e)) || {}
                            } catch (t) {}
                            return r
                        },
                        set_seconds: function(e, r, t, n, o) {
                            try {
                                var i = '',
                                    a = '',
                                    c = ''
                                if (n) {
                                    var u = p.location.hostname.match(x),
                                        s = u ? u[0] : ''
                                    i = s ? '; domain=.' + s : ''
                                }
                                if (t) {
                                    var l = new Date()
                                    l.setTime(l.getTime() + 1e3 * t), (a = '; expires=' + l.toGMTString())
                                }
                                o && (c = '; secure'),
                                    (p.cookie = e + '=' + encodeURIComponent(r) + a + '; path=/' + i + c)
                            } catch (f) {
                                return
                            }
                        },
                        set: function(e, r, t, n, o) {
                            try {
                                var i = '',
                                    a = '',
                                    c = ''
                                if (n) {
                                    var u = p.location.hostname.match(x),
                                        s = u ? u[0] : ''
                                    i = s ? '; domain=.' + s : ''
                                }
                                if (t) {
                                    var l = new Date()
                                    l.setTime(l.getTime() + 24 * t * 60 * 60 * 1e3),
                                        (a = '; expires=' + l.toGMTString())
                                }
                                o && (c = '; secure')
                                var f = e + '=' + encodeURIComponent(r) + a + '; path=/' + i + c
                                return (p.cookie = f), f
                            } catch (d) {
                                return
                            }
                        },
                        remove: function(e, r) {
                            try {
                                O.cookie.set(e, '', -1, r)
                            } catch (t) {
                                return
                            }
                        },
                    })
                var B = null
                ;(O.localStorage = {
                    is_supported: function() {
                        if (null !== B) return B
                        var e = !0
                        try {
                            var r = '__mplssupport__'
                            O.localStorage.set(r, 'xyz'),
                                'xyz' !== O.localStorage.get(r) && (e = !1),
                                O.localStorage.remove(r)
                        } catch (t) {
                            e = !1
                        }
                        return e || A.error('localStorage unsupported; falling back to cookie store'), (B = e), e
                    },
                    error: function(e) {
                        A.error('localStorage error: ' + e)
                    },
                    get: function(e) {
                        try {
                            return window.localStorage.getItem(e)
                        } catch (r) {
                            O.localStorage.error(r)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return O.JSONDecode(O.localStorage.get(e)) || {}
                        } catch (r) {}
                        return null
                    },
                    set: function(e, r) {
                        try {
                            window.localStorage.setItem(e, r)
                        } catch (t) {
                            O.localStorage.error(t)
                        }
                    },
                    remove: function(e) {
                        try {
                            window.localStorage.removeItem(e)
                        } catch (r) {
                            O.localStorage.error(r)
                        }
                    },
                }),
                    (O.register_event = (function() {
                        function e(r) {
                            return (
                                r && ((r.preventDefault = e.preventDefault), (r.stopPropagation = e.stopPropagation)), r
                            )
                        }
                        return (
                            (e.preventDefault = function() {
                                this.returnValue = !1
                            }),
                            (e.stopPropagation = function() {
                                this.cancelBubble = !0
                            }),
                            function(r, t, n, o, i) {
                                if (r)
                                    if (r.addEventListener && !o) r.addEventListener(t, n, !!i)
                                    else {
                                        var a = 'on' + t,
                                            c = r[a]
                                        r[a] = (function(r, t, n) {
                                            return function(o) {
                                                if ((o = o || e(window.event))) {
                                                    var i,
                                                        a,
                                                        c = !0
                                                    return (
                                                        O.isFunction(n) && (i = n(o)),
                                                        (a = t.call(r, o)),
                                                        (!1 !== i && !1 !== a) || (c = !1),
                                                        c
                                                    )
                                                }
                                            }
                                        })(r, n, c)
                                    }
                                else A.error('No valid element provided to register_event')
                            }
                        )
                    })())
                var E = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$')
                ;(O.dom_query = (function() {
                    function e(e) {
                        return e.all ? e.all : e.getElementsByTagName('*')
                    }
                    var r = /[\t\r\n]/g
                    function t(e, t) {
                        var n = ' ' + t + ' '
                        return (' ' + e.className + ' ').replace(r, ' ').indexOf(n) >= 0
                    }
                    return function(r) {
                        return O.isElement(r)
                            ? [r]
                            : O.isObject(r) && !O.isUndefined(r.length)
                            ? r
                            : function(r) {
                                  if (!p.getElementsByTagName) return []
                                  var n,
                                      o,
                                      i,
                                      a,
                                      c,
                                      u,
                                      s,
                                      l,
                                      f,
                                      d,
                                      g = r.split(' '),
                                      h = [p]
                                  for (u = 0; u < g.length; u++)
                                      if ((n = g[u].replace(/^\s+/, '').replace(/\s+$/, '')).indexOf('#') > -1) {
                                          i = (o = n.split('#'))[0]
                                          var m = o[1],
                                              y = p.getElementById(m)
                                          if (!y || (i && y.nodeName.toLowerCase() != i)) return []
                                          h = [y]
                                      } else if (n.indexOf('.') > -1) {
                                          i = (o = n.split('.'))[0]
                                          var v = o[1]
                                          for (i || (i = '*'), a = [], c = 0, s = 0; s < h.length; s++)
                                              for (
                                                  f = '*' == i ? e(h[s]) : h[s].getElementsByTagName(i), l = 0;
                                                  l < f.length;
                                                  l++
                                              )
                                                  a[c++] = f[l]
                                          for (h = [], d = 0, s = 0; s < a.length; s++)
                                              a[s].className &&
                                                  O.isString(a[s].className) &&
                                                  t(a[s], v) &&
                                                  (h[d++] = a[s])
                                      } else {
                                          var b = n.match(E)
                                          if (b) {
                                              i = b[1]
                                              var w,
                                                  S = b[2],
                                                  x = b[3],
                                                  A = b[4]
                                              for (i || (i = '*'), a = [], c = 0, s = 0; s < h.length; s++)
                                                  for (
                                                      f = '*' == i ? e(h[s]) : h[s].getElementsByTagName(i), l = 0;
                                                      l < f.length;
                                                      l++
                                                  )
                                                      a[c++] = f[l]
                                              switch (((h = []), (d = 0), x)) {
                                                  case '=':
                                                      w = function(e) {
                                                          return e.getAttribute(S) == A
                                                      }
                                                      break
                                                  case '~':
                                                      w = function(e) {
                                                          return e.getAttribute(S).match(new RegExp('\\b' + A + '\\b'))
                                                      }
                                                      break
                                                  case '|':
                                                      w = function(e) {
                                                          return e.getAttribute(S).match(new RegExp('^' + A + '-?'))
                                                      }
                                                      break
                                                  case '^':
                                                      w = function(e) {
                                                          return 0 === e.getAttribute(S).indexOf(A)
                                                      }
                                                      break
                                                  case '$':
                                                      w = function(e) {
                                                          return (
                                                              e.getAttribute(S).lastIndexOf(A) ==
                                                              e.getAttribute(S).length - A.length
                                                          )
                                                      }
                                                      break
                                                  case '*':
                                                      w = function(e) {
                                                          return e.getAttribute(S).indexOf(A) > -1
                                                      }
                                                      break
                                                  default:
                                                      w = function(e) {
                                                          return e.getAttribute(S)
                                                      }
                                              }
                                              for (h = [], d = 0, s = 0; s < a.length; s++) w(a[s]) && (h[d++] = a[s])
                                          } else {
                                              for (i = n, a = [], c = 0, s = 0; s < h.length; s++)
                                                  for (f = h[s].getElementsByTagName(i), l = 0; l < f.length; l++)
                                                      a[c++] = f[l]
                                              h = a
                                          }
                                      }
                                  return h
                              }.call(this, r)
                    }
                })()),
                    (O.info = {
                        campaignParams: function() {
                            var e = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
                                r = '',
                                t = {}
                            return (
                                O.each(e, function(e) {
                                    ;(r = O.getQueryParam(p.URL, e)).length && (t[e] = r)
                                }),
                                t
                            )
                        },
                        searchEngine: function(e) {
                            return 0 === e.search('https?://(.*)google.([^/?]*)')
                                ? 'google'
                                : 0 === e.search('https?://(.*)bing.com')
                                ? 'bing'
                                : 0 === e.search('https?://(.*)yahoo.com')
                                ? 'yahoo'
                                : 0 === e.search('https?://(.*)duckduckgo.com')
                                ? 'duckduckgo'
                                : null
                        },
                        searchInfo: function(e) {
                            var r = O.info.searchEngine(e),
                                t = 'yahoo' != r ? 'q' : 'p',
                                n = {}
                            if (null !== r) {
                                n.$search_engine = r
                                var o = O.getQueryParam(e, t)
                                o.length && (n.ph_keyword = o)
                            }
                            return n
                        },
                        browser: function(e, r, t) {
                            return (
                                (r = r || ''),
                                t || O.includes(e, ' OPR/')
                                    ? O.includes(e, 'Mini')
                                        ? 'Opera Mini'
                                        : 'Opera'
                                    : /(BlackBerry|PlayBook|BB10)/i.test(e)
                                    ? 'BlackBerry'
                                    : O.includes(e, 'IEMobile') || O.includes(e, 'WPDesktop')
                                    ? 'Internet Explorer Mobile'
                                    : O.includes(e, 'SamsungBrowser/')
                                    ? 'Samsung Internet'
                                    : O.includes(e, 'Edge') || O.includes(e, 'Edg/')
                                    ? 'Microsoft Edge'
                                    : O.includes(e, 'FBIOS')
                                    ? 'Facebook Mobile'
                                    : O.includes(e, 'Chrome')
                                    ? 'Chrome'
                                    : O.includes(e, 'CriOS')
                                    ? 'Chrome iOS'
                                    : O.includes(e, 'UCWEB') || O.includes(e, 'UCBrowser')
                                    ? 'UC Browser'
                                    : O.includes(e, 'FxiOS')
                                    ? 'Firefox iOS'
                                    : O.includes(r, 'Apple')
                                    ? O.includes(e, 'Mobile')
                                        ? 'Mobile Safari'
                                        : 'Safari'
                                    : O.includes(e, 'Android')
                                    ? 'Android Mobile'
                                    : O.includes(e, 'Konqueror')
                                    ? 'Konqueror'
                                    : O.includes(e, 'Firefox')
                                    ? 'Firefox'
                                    : O.includes(e, 'MSIE') || O.includes(e, 'Trident/')
                                    ? 'Internet Explorer'
                                    : O.includes(e, 'Gecko')
                                    ? 'Mozilla'
                                    : ''
                            )
                        },
                        browserVersion: function(e, r, t) {
                            var n = {
                                'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
                                'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
                                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                                'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
                                'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                                Safari: /Version\/(\d+(\.\d+)?)/,
                                'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
                                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                                'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
                                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                                'Android Mobile': /android\s(\d+(\.\d+)?)/,
                                'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
                                'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
                                Mozilla: /rv:(\d+(\.\d+)?)/,
                            }[O.info.browser(e, r, t)]
                            if (void 0 === n) return null
                            var o = e.match(n)
                            return o ? parseFloat(o[o.length - 2]) : null
                        },
                        os: function() {
                            var e = m
                            return /Windows/i.test(e)
                                ? /Phone/.test(e) || /WPDesktop/.test(e)
                                    ? 'Windows Phone'
                                    : 'Windows'
                                : /(iPhone|iPad|iPod)/.test(e)
                                ? 'iOS'
                                : /Android/.test(e)
                                ? 'Android'
                                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                                ? 'BlackBerry'
                                : /Mac/i.test(e)
                                ? 'Mac OS X'
                                : /Linux/.test(e)
                                ? 'Linux'
                                : /CrOS/.test(e)
                                ? 'Chrome OS'
                                : ''
                        },
                        device: function(e) {
                            return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
                                ? 'Windows Phone'
                                : /iPad/.test(e)
                                ? 'iPad'
                                : /iPod/.test(e)
                                ? 'iPod Touch'
                                : /iPhone/.test(e)
                                ? 'iPhone'
                                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                                ? 'BlackBerry'
                                : /Android/.test(e)
                                ? 'Android'
                                : ''
                        },
                        referringDomain: function(e) {
                            var r = e.split('/')
                            return r.length >= 3 ? r[2] : ''
                        },
                        properties: function() {
                            return O.extend(
                                O.strip_empty_properties({
                                    $os: O.info.os(),
                                    $browser: O.info.browser(m, d.vendor, g),
                                    $referrer: p.referrer,
                                    $referring_domain: O.info.referringDomain(p.referrer),
                                    $device: O.info.device(m),
                                }),
                                {
                                    $current_url: e.location.href,
                                    $browser_version: O.info.browserVersion(m, d.vendor, g),
                                    $screen_height: h.height,
                                    $screen_width: h.width,
                                    $lib: 'web',
                                    $lib_version: r.default.LIB_VERSION,
                                    $insert_id:
                                        Math.random()
                                            .toString(36)
                                            .substring(2, 10) +
                                        Math.random()
                                            .toString(36)
                                            .substring(2, 10),
                                    $time: O.timestamp() / 1e3,
                                }
                            )
                        },
                        people_properties: function() {
                            return O.extend(
                                O.strip_empty_properties({
                                    $os: O.info.os(),
                                    $browser: O.info.browser(m, d.vendor, g),
                                }),
                                { $browser_version: O.info.browserVersion(m, d.vendor, g) }
                            )
                        },
                    }),
                    (O.toArray = O.toArray),
                    (O.isObject = O.isObject),
                    (O.JSONEncode = O.JSONEncode),
                    (O.JSONDecode = O.JSONDecode),
                    (O.isBlockedUA = O.isBlockedUA),
                    (O.isEmptyObject = O.isEmptyObject),
                    (O.info = O.info),
                    (O.info.device = O.info.device),
                    (O.info.browser = O.info.browser),
                    (O.info.browserVersion = O.info.browserVersion),
                    (O.info.properties = O.info.properties)
            },
            { './config': 'itQ5' },
        ],
        RYfg: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.getClassName = r),
                    (exports.getSafeText = n),
                    (exports.isElementNode = s),
                    (exports.isTag = o),
                    (exports.isTextNode = c),
                    (exports.shouldCaptureDomEvent = u),
                    (exports.shouldCaptureElement = a),
                    (exports.shouldCaptureValue = p),
                    (exports.usefulElements = void 0)
                var e = require('./utils')
                function t(e) {
                    return (t =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function(e) {
                                  return typeof e
                              }
                            : function(e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              })(e)
                }
                function r(e) {
                    switch (t(e.className)) {
                        case 'string':
                            return e.className
                        case 'object':
                            return e.className.baseVal || e.getAttribute('class') || ''
                        default:
                            return ''
                    }
                }
                function n(t) {
                    var r = ''
                    return (
                        a(t) &&
                            t.childNodes &&
                            t.childNodes.length &&
                            e._.each(t.childNodes, function(t) {
                                c(t) &&
                                    t.textContent &&
                                    (r += e._.trim(t.textContent)
                                        .split(/(\s+)/)
                                        .filter(p)
                                        .join('')
                                        .replace(/[\r\n]/g, ' ')
                                        .replace(/[ ]+/g, ' ')
                                        .substring(0, 255))
                            }),
                        e._.trim(r)
                    )
                }
                function s(e) {
                    return e && 1 === e.nodeType
                }
                function o(e, t) {
                    return e && e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
                }
                function c(e) {
                    return e && 3 === e.nodeType
                }
                var i = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
                function u(e, t) {
                    if (!e || o(e, 'html') || !s(e)) return !1
                    for (var r = !1, n = [e], c = e; c.parentNode && !o(c, 'body'); )
                        i.indexOf(c.parentNode.tagName.toLowerCase()) > -1 && (r = !0),
                            n.push(c.parentNode),
                            (c = c.parentNode)
                    var u = e.tagName.toLowerCase()
                    switch (u) {
                        case 'html':
                            return !1
                        case 'form':
                            return 'submit' === t.type
                        case 'input':
                            return 'change' === t.type || 'click' === t.type
                        case 'select':
                        case 'textarea':
                            return 'change' === t.type || 'click' === t.type
                        default:
                            return r
                                ? 'click' == t.type
                                : 'click' === t.type &&
                                      (i.indexOf(u) > -1 || 'true' === e.getAttribute('contenteditable'))
                    }
                }
                function a(t) {
                    for (var n = t; n.parentNode && !o(n, 'body'); n = n.parentNode) {
                        var s = r(n).split(' ')
                        if (e._.includes(s, 'ph-sensitive') || e._.includes(s, 'ph-no-capture')) return !1
                    }
                    if (e._.includes(r(t).split(' '), 'ph-include')) return !0
                    if (
                        (o(t, 'input') && 'button' != t.type) ||
                        o(t, 'select') ||
                        o(t, 'textarea') ||
                        'true' === t.getAttribute('contenteditable')
                    )
                        return !1
                    var c = t.type || ''
                    if ('string' == typeof c)
                        switch (c.toLowerCase()) {
                            case 'hidden':
                            case 'password':
                                return !1
                        }
                    var i = t.name || t.id || ''
                    if ('string' == typeof i) {
                        if (
                            /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
                                i.replace(/[^a-zA-Z0-9]/g, '')
                            )
                        )
                            return !1
                    }
                    return !0
                }
                function p(t) {
                    if (null === t || e._.isUndefined(t)) return !1
                    if ('string' == typeof t) {
                        t = e._.trim(t)
                        if (
                            /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                                (t || '').replace(/[- ]/g, '')
                            )
                        )
                            return !1
                        if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(t)) return !1
                    }
                    return !0
                }
                exports.usefulElements = i
            },
            { './utils': 'FOZT' },
        ],
        gR3r: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.autocapture = void 0)
                var e = require('./utils'),
                    t = require('./autocapture-utils'),
                    o = {
                        _initializedTokens: [],
                        _previousElementSibling: function(e) {
                            if (e.previousElementSibling) return e.previousElementSibling
                            do {
                                e = e.previousSibling
                            } while (e && !(0, t.isElementNode)(e))
                            return e
                        },
                        _loadScript: function(e, t) {
                            var o = document.createElement('script')
                            ;(o.type = 'text/javascript'), (o.src = e), (o.onload = t)
                            var n = document.getElementsByTagName('script')
                            n.length > 0 ? n[0].parentNode.insertBefore(o, n[0]) : document.body.appendChild(o)
                        },
                        _getPropertiesFromElement: function(o) {
                            var n = o.tagName.toLowerCase(),
                                r = { tag_name: n }
                            t.usefulElements.indexOf(n) > -1 && (r.$el_text = (0, t.getSafeText)(o))
                            var i = (0, t.getClassName)(o)
                            i.length > 0 && (r.classes = i.split(' ')),
                                (0, t.shouldCaptureElement)(o) &&
                                    e._.each(o.attributes, function(e) {
                                        ;(0, t.shouldCaptureValue)(e.value) && (r['attr__' + e.name] = e.value)
                                    })
                            for (var a = 1, s = 1, c = o; (c = this._previousElementSibling(c)); )
                                a++, c.tagName === o.tagName && s++
                            return (r.nth_child = a), (r.nth_of_type = s), r
                        },
                        _getDefaultProperties: function(e) {
                            return {
                                $event_type: e,
                                $ce_version: 1,
                                $host: window.location.host,
                                $pathname: window.location.pathname,
                            }
                        },
                        _extractCustomPropertyValue: function(o) {
                            var n = []
                            return (
                                e._.each(document.querySelectorAll(o.css_selector), function(e) {
                                    var o
                                    ;['input', 'select'].indexOf(e.tagName.toLowerCase()) > -1
                                        ? (o = e.value)
                                        : e.textContent && (o = e.textContent),
                                        (0, t.shouldCaptureValue)(o) && n.push(o)
                                }),
                                n.join(', ')
                            )
                        },
                        _getCustomProperties: function(o) {
                            var n = {}
                            return (
                                e._.each(
                                    this._customProperties,
                                    function(r) {
                                        e._.each(
                                            r.event_selectors,
                                            function(i) {
                                                var a = document.querySelectorAll(i)
                                                e._.each(
                                                    a,
                                                    function(i) {
                                                        e._.includes(o, i) &&
                                                            (0, t.shouldCaptureElement)(i) &&
                                                            (n[r.name] = this._extractCustomPropertyValue(r))
                                                    },
                                                    this
                                                )
                                            },
                                            this
                                        )
                                    },
                                    this
                                ),
                                n
                            )
                        },
                        _getEventTarget: function(e) {
                            return void 0 === e.target ? e.srcElement : e.target
                        },
                        _captureEvent: function(o, n) {
                            var r = this._getEventTarget(o)
                            if (((0, t.isTextNode)(r) && (r = r.parentNode), (0, t.shouldCaptureDomEvent)(r, o))) {
                                for (var i = [r], a = r; a.parentNode && !(0, t.isTag)(a, 'body'); )
                                    i.push(a.parentNode), (a = a.parentNode)
                                var s,
                                    c = [],
                                    d = !1
                                if (
                                    (e._.each(
                                        i,
                                        function(o) {
                                            var n = (0, t.shouldCaptureElement)(o)
                                            'a' === o.tagName.toLowerCase() &&
                                                ((s = o.getAttribute('href')),
                                                (s = n && (0, t.shouldCaptureValue)(s) && s))
                                            var r = (0, t.getClassName)(o).split(' ')
                                            e._.includes(r, 'ph-no-capture') && (d = !0),
                                                c.push(this._getPropertiesFromElement(o))
                                        },
                                        this
                                    ),
                                    (c[0].$el_text = (0, t.getSafeText)(r)),
                                    d)
                                )
                                    return !1
                                var u = (0, t.getSafeText)(r)
                                u && u.length && u
                                var l = e._.extend(
                                    this._getDefaultProperties(o.type),
                                    { $elements: c },
                                    this._getCustomProperties(i)
                                )
                                return n.capture('$autocapture', l), !0
                            }
                        },
                        _navigate: function(e) {
                            window.location.href = e
                        },
                        _addDomEventHandlers: function(t) {
                            var o = e._.bind(function(e) {
                                ;(e = e || window.event), this._captureEvent(e, t)
                            }, this)
                            e._.register_event(document, 'submit', o, !1, !0),
                                e._.register_event(document, 'change', o, !1, !0),
                                e._.register_event(document, 'click', o, !1, !0)
                        },
                        _customProperties: {},
                        init: function(t) {
                            if (document && document.body) {
                                var o = t.get_config('token')
                                if (this._initializedTokens.indexOf(o) > -1)
                                    console.log('autocapture already initialized for token "' + o + '"')
                                else if ((this._initializedTokens.push(o), !this._maybeLoadEditor(t))) {
                                    var n = e._.bind(function(e) {
                                        e && e.config && !0 === e.config.enable_collect_everything
                                            ? (e.custom_properties && (this._customProperties = e.custom_properties),
                                              this._addDomEventHandlers(t))
                                            : (t.__autocapture_enabled = !1)
                                    }, this)
                                    t._send_request(
                                        t.get_config('api_host') + '/decide/',
                                        { verbose: !0, version: '1', lib: 'web', token: o },
                                        { method: 'GET' },
                                        t._prepare_callback(n)
                                    )
                                }
                            } else {
                                console.log('document not ready yet, trying again in 500 milliseconds...')
                                var r = this
                                setTimeout(function() {
                                    r.init(t)
                                }, 500)
                            }
                        },
                        _editorParamsFromHash: function(t, o) {
                            var n
                            try {
                                var r = e._.getHashParam(o, 'state')
                                r = JSON.parse(decodeURIComponent(r))
                                var i = e._.getHashParam(o, 'expires_in')
                                ;(n = {
                                    accessToken: e._.getHashParam(o, 'access_token'),
                                    accessTokenExpiresAt: new Date().getTime() + 1e3 * Number(i),
                                    actionId: r.actionId,
                                    projectToken: r.token,
                                    apiURL: r.apiURL,
                                    temporaryToken: r.temporaryToken,
                                }),
                                    window.sessionStorage.setItem('editorParams', JSON.stringify(n)),
                                    window.sessionStorage.setItem('editorActionId', n.actionId),
                                    r.desiredHash
                                        ? (window.location.hash = r.desiredHash)
                                        : window.history
                                        ? history.replaceState(
                                              '',
                                              document.title,
                                              window.location.pathname + window.location.search
                                          )
                                        : (window.location.hash = '')
                            } catch (a) {
                                console.error('Unable to parse data from hash', a)
                            }
                            return n
                        },
                        _maybeLoadEditor: function(t) {
                            try {
                                var o = !1
                                if (e._.getHashParam(window.location.hash, 'state')) {
                                    var n = e._.getHashParam(window.location.hash, 'state')
                                    o = 'mpeditor' === (n = JSON.parse(decodeURIComponent(n))).action
                                }
                                var r,
                                    i = !!window.sessionStorage.getItem('_mpcehash')
                                return (
                                    o
                                        ? (r = this._editorParamsFromHash(t, window.location.hash))
                                        : i
                                        ? ((r = this._editorParamsFromHash(
                                              t,
                                              window.sessionStorage.getItem('_mpcehash')
                                          )),
                                          window.sessionStorage.removeItem('_mpcehash'))
                                        : (r = JSON.parse(window.sessionStorage.getItem('editorParams') || '{}')),
                                    !(!r.projectToken || t.get_config('token') !== r.projectToken) &&
                                        (this._loadEditor(t, r), !0)
                                )
                            } catch (a) {
                                return !1
                            }
                        },
                        _loadEditor: function(t, o) {
                            var n = this
                            if (!window._mpEditorLoaded) {
                                window._mpEditorLoaded = !0
                                var r = t.get_config('api_host') + '/static/editor.js?_ts=' + new Date().getTime()
                                return (
                                    this._loadScript(r, function() {
                                        window.ph_load_editor(o)
                                    }),
                                    e._.register_event(window, 'turbolinks:load', function() {
                                        ;(window._mpEditorLoaded = !1), n._loadEditor(t, o)
                                    }),
                                    !0
                                )
                            }
                            return !1
                        },
                        enabledForProject: function(t, o, n) {
                            ;(o = e._.isUndefined(o) ? 10 : o), (n = e._.isUndefined(n) ? 10 : n)
                            for (var r = 0, i = 0; i < t.length; i++) r += t.charCodeAt(i)
                            return r % o < n
                        },
                        isBrowserSupported: function() {
                            return e._.isFunction(document.querySelectorAll)
                        },
                    }
                ;(exports.autocapture = o), e._.bind_instance_methods(o), e._.safewrap_instance_methods(o)
            },
            { './utils': 'FOZT', './autocapture-utils': 'RYfg' },
        ],
        OjnC: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.LinkCapture = exports.FormCapture = void 0)
                var e = require('./utils'),
                    t = function() {}
                ;(t.prototype.create_properties = function() {}),
                    (t.prototype.event_handler = function() {}),
                    (t.prototype.after_capture_handler = function() {}),
                    (t.prototype.init = function(e) {
                        return (this.mp = e), this
                    }),
                    (t.prototype.capture = function(t, r, n, o) {
                        var i = this,
                            p = e._.dom_query(t)
                        if (0 !== p.length)
                            return (
                                e._.each(
                                    p,
                                    function(t) {
                                        e._.register_event(t, this.override_event, function(e) {
                                            var t = {},
                                                p = i.create_properties(n, this),
                                                a = i.mp.get_config('capture_links_timeout')
                                            i.event_handler(e, this, t),
                                                window.setTimeout(i.capture_callback(o, p, t, !0), a),
                                                i.mp.capture(r, p, i.capture_callback(o, p, t))
                                        })
                                    },
                                    this
                                ),
                                !0
                            )
                        e.console.error('The DOM query (' + t + ') returned 0 elements')
                    }),
                    (t.prototype.capture_callback = function(e, t, r, n) {
                        n = n || !1
                        var o = this
                        return function() {
                            r.callback_fired ||
                                ((r.callback_fired = !0), (e && !1 === e(n, t)) || o.after_capture_handler(t, r, n))
                        }
                    }),
                    (t.prototype.create_properties = function(t, r) {
                        return 'function' == typeof t ? t(r) : e._.extend({}, t)
                    })
                var r = function() {
                    this.override_event = 'click'
                }
                ;(exports.LinkCapture = r),
                    e._.inherit(r, t),
                    (r.prototype.create_properties = function(e, t) {
                        var n = r.superclass.create_properties.apply(this, arguments)
                        return t.href && (n.url = t.href), n
                    }),
                    (r.prototype.event_handler = function(e, t, r) {
                        ;(r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || '_blank' === t.target),
                            (r.href = t.href),
                            r.new_tab || e.preventDefault()
                    }),
                    (r.prototype.after_capture_handler = function(e, t) {
                        t.new_tab ||
                            setTimeout(function() {
                                window.location = t.href
                            }, 0)
                    })
                var n = function() {
                    this.override_event = 'submit'
                }
                ;(exports.FormCapture = n),
                    e._.inherit(n, t),
                    (n.prototype.event_handler = function(e, t, r) {
                        ;(r.element = t), e.preventDefault()
                    }),
                    (n.prototype.after_capture_handler = function(e, t) {
                        setTimeout(function() {
                            t.element.submit()
                        }, 0)
                    })
            },
            { './utils': 'FOZT' },
        ],
        rxSh: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.optIn = o),
                    (exports.optOut = n),
                    (exports.hasOptedIn = r),
                    (exports.hasOptedOut = i),
                    (exports.addOptOutCheckPostHogLib = u),
                    (exports.addOptOutCheckPostHogPeople = c),
                    (exports.addOptOutCheckPostHogGroup = p),
                    (exports.clearOptInOut = s)
                var t = require('./utils'),
                    e = '__ph_opt_in_out_'
                function o(t, e) {
                    d(!0, t, e)
                }
                function n(t, e) {
                    d(!1, t, e)
                }
                function r(t, e) {
                    return '1' === l(t, e)
                }
                function i(t, e) {
                    return !!_(e) || '0' === l(t, e)
                }
                function u(t) {
                    return g(t, function(t) {
                        return this.get_config(t)
                    })
                }
                function c(t) {
                    return g(t, function(t) {
                        return this._get_config(t)
                    })
                }
                function p(t) {
                    return g(t, function(t) {
                        return this._get_config(t)
                    })
                }
                function s(t, e) {
                    a((e = e || {})).remove(f(t, e), !!e.crossSubdomainCookie)
                }
                function a(e) {
                    return 'localStorage' === (e = e || {}).persistenceType ? t._.localStorage : t._.cookie
                }
                function f(t, o) {
                    return ((o = o || {}).persistencePrefix || e) + t
                }
                function l(t, e) {
                    return a(e).get(f(t, e))
                }
                function _(e) {
                    var o = (e && e.window) || t.window,
                        n = o.navigator || {},
                        r = !1
                    return (
                        t._.each([n.doNotCapture, n.msDoNotCapture, o.doNotCapture], function(e) {
                            t._.includes([!0, 1, '1', 'yes'], e) && (r = !0)
                        }),
                        r
                    )
                }
                function d(e, o, n) {
                    t._.isString(o) && o.length
                        ? (a((n = n || {})).set(
                              f(o, n),
                              e ? 1 : 0,
                              t._.isNumber(n.cookieExpiration) ? n.cookieExpiration : null,
                              !!n.crossSubdomainCookie,
                              !!n.secureCookie
                          ),
                          n.capture && e && n.capture(n.captureEventName || '$opt_in', n.captureProperties))
                        : console.error('gdpr.' + (e ? 'optIn' : 'optOut') + ' called with an invalid token')
                }
                function g(t, e) {
                    return function() {
                        var o = !1
                        try {
                            var n = e.call(this, 'token'),
                                r = e.call(this, 'opt_out_captureing_persistence_type'),
                                u = e.call(this, 'opt_out_captureing_cookie_prefix'),
                                c = e.call(this, 'window')
                            n && (o = i(n, { persistenceType: r, persistencePrefix: u, window: c }))
                        } catch (s) {
                            console.error('Unexpected error when checking captureing opt-out status: ' + s)
                        }
                        if (!o) return t.apply(this, arguments)
                        var p = arguments[arguments.length - 1]
                        'function' == typeof p && p(0)
                    }
                }
            },
            { './utils': 'FOZT' },
        ],
        os8r: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.apiActions = exports.SET_ONCE_ACTION = exports.SET_ACTION = void 0)
                var e = require('./utils'),
                    t = '$set'
                exports.SET_ACTION = t
                var r = '$set_once'
                exports.SET_ONCE_ACTION = r
                var s = {
                    set_action: function(r, s) {
                        var i = {},
                            o = {}
                        return (
                            e._.isObject(r)
                                ? e._.each(
                                      r,
                                      function(e, t) {
                                          this._is_reserved_property(t) || (o[t] = e)
                                      },
                                      this
                                  )
                                : (o[r] = s),
                            (i[t] = o),
                            i
                        )
                    },
                    set_once_action: function(t, s) {
                        var i = {},
                            o = {}
                        return (
                            e._.isObject(t)
                                ? e._.each(
                                      t,
                                      function(e, t) {
                                          this._is_reserved_property(t) || (o[t] = e)
                                      },
                                      this
                                  )
                                : (o[t] = s),
                            (i[r] = o),
                            i
                        )
                    },
                }
                exports.apiActions = s
            },
            { './utils': 'FOZT' },
        ],
        ecEG: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.PostHogPeople = void 0)
                var e = require('./gdpr-utils'),
                    t = require('./api-actions'),
                    o = require('./utils'),
                    _ = function() {}
                ;(exports.PostHogPeople = _),
                    o._.extend(_.prototype, t.apiActions),
                    (_.prototype._init = function(e) {
                        this._posthog = e
                    }),
                    (_.prototype.set = (0, e.addOptOutCheckPostHogPeople)(function(e, _, s) {
                        var i = this.set_action(e, _)
                        return (
                            o._.isObject(e) && (s = _),
                            this._get_config('save_referrer') &&
                                this._posthog.persistence.update_referrer_info(document.referrer),
                            (i[t.SET_ACTION] = o._.extend(
                                {},
                                o._.info.people_properties(),
                                this._posthog.persistence.get_referrer_info(),
                                i[t.SET_ACTION]
                            )),
                            this._send_request(i, s)
                        )
                    })),
                    (_.prototype.set_once = (0, e.addOptOutCheckPostHogPeople)(function(e, t, _) {
                        var s = this.set_once_action(e, t)
                        return o._.isObject(e) && (_ = t), this._send_request(s, _)
                    })),
                    (_.prototype.toString = function() {
                        return this._posthog.toString() + '.people'
                    }),
                    (_.prototype._send_request = function(e, t) {
                        ;(e.$token = this._get_config('token')), (e.$distinct_id = this._posthog.get_distinct_id())
                        var _ = this._posthog.get_property('$device_id'),
                            s = this._posthog.get_property('$user_id'),
                            i = this._posthog.get_property('$had_persisted_distinct_id')
                        _ && (e.$device_id = _), s && (e.$user_id = s), i && (e.$had_persisted_distinct_id = i)
                        var r = o._.encodeDates(e),
                            n = o._.truncate(r, 255),
                            p = o._.JSONEncode(r),
                            d = o._.base64Encode(p)
                        return this._identify_called()
                            ? (o.console.log('POSTHOG PEOPLE REQUEST:'),
                              o.console.log(n),
                              this._posthog._send_request(
                                  this._get_config('api_host') + '/engage/',
                                  { data: d },
                                  this._posthog._prepare_callback(t, n)
                              ),
                              n)
                            : (this._enqueue(e),
                              o._.isUndefined(t) ||
                                  (this._get_config('verbose') ? t({ status: -1, error: null }) : t(-1)),
                              n)
                    }),
                    (_.prototype._get_config = function(e) {
                        return this._posthog.get_config(e)
                    }),
                    (_.prototype._identify_called = function() {
                        return !0 === this._posthog._flags.identify_called
                    }),
                    (_.prototype._enqueue = function(e) {
                        t.SET_ACTION in e
                            ? this._posthog.persistence._add_to_people_queue(t.SET_ACTION, e)
                            : t.SET_ONCE_ACTION in e
                            ? this._posthog.persistence._add_to_people_queue(t.SET_ONCE_ACTION, e)
                            : o.console.error('Invalid call to _enqueue():', e)
                    }),
                    (_.prototype._flush_one_queue = function(e, t, _, s) {
                        var i = this,
                            r = o._.extend({}, this._posthog.persistence._get_queue(e)),
                            n = r
                        o._.isUndefined(r) ||
                            !o._.isObject(r) ||
                            o._.isEmptyObject(r) ||
                            (i._posthog.persistence._pop_from_people_queue(e, r),
                            s && (n = s(r)),
                            t.call(i, n, function(t, s) {
                                0 === t && i._posthog.persistence._add_to_people_queue(e, r),
                                    o._.isUndefined(_) || _(t, s)
                            }))
                    }),
                    (_.prototype._flush = function(e, o) {
                        this._flush_one_queue(t.SET_ACTION, this.set, e),
                            this._flush_one_queue(t.SET_ONCE_ACTION, this.set_once, o)
                    }),
                    (_.prototype._is_reserved_property = function(e) {
                        return (
                            '$distinct_id' === e ||
                            '$token' === e ||
                            '$device_id' === e ||
                            '$user_id' === e ||
                            '$had_persisted_distinct_id' === e
                        )
                    }),
                    (_.prototype.set = _.prototype.set),
                    (_.prototype.set_once = _.prototype.set_once),
                    (_.prototype.toString = _.prototype.toString)
            },
            { './gdpr-utils': 'rxSh', './api-actions': 'os8r', './utils': 'FOZT' },
        ],
        MAdm: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.EVENT_TIMERS_KEY = exports.CAMPAIGN_IDS_KEY = exports.ALIAS_ID_KEY = exports.PEOPLE_DISTINCT_ID_KEY = exports.SET_ONCE_QUEUE_KEY = exports.SET_QUEUE_KEY = exports.PostHogPersistence = void 0)
                var e = require('./api-actions'),
                    t = i(require('./config')),
                    s = require('./utils')
                function i(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                var o = '__mps'
                exports.SET_QUEUE_KEY = o
                var r = '__mpso'
                exports.SET_ONCE_QUEUE_KEY = r
                var _ = '__mpus',
                    p = '__mpa',
                    n = '__mpap',
                    a = '__mpr',
                    c = '__mpu',
                    h = '$people_distinct_id'
                exports.PEOPLE_DISTINCT_ID_KEY = h
                var u = '__alias'
                exports.ALIAS_ID_KEY = u
                var d = '__cmpns'
                exports.CAMPAIGN_IDS_KEY = d
                var f = '__timers'
                exports.EVENT_TIMERS_KEY = f
                var m = [o, r, _, p, n, a, c, h, u, d, f],
                    g = function(e) {
                        ;(this.props = {}),
                            (this.campaign_params_saved = !1),
                            e.persistence_name
                                ? (this.name = 'ph_' + e.persistence_name)
                                : (this.name = 'ph_' + e.token + '_posthog')
                        var t = e.persistence
                        'cookie' !== t &&
                            'localStorage' !== t &&
                            (s.console.critical('Unknown persistence type ' + t + '; falling back to cookie'),
                            (t = e.persistence = 'cookie')),
                            'localStorage' === t && s._.localStorage.is_supported()
                                ? (this.storage = s._.localStorage)
                                : (this.storage = s._.cookie),
                            this.load(),
                            this.update_config(e),
                            this.upgrade(e),
                            this.save()
                    }
                ;(exports.PostHogPersistence = g),
                    (g.prototype.properties = function() {
                        var e = {}
                        return (
                            s._.each(this.props, function(t, i) {
                                s._.include(m, i) || (e[i] = t)
                            }),
                            e
                        )
                    }),
                    (g.prototype.load = function() {
                        if (!this.disabled) {
                            var e = this.storage.parse(this.name)
                            e && (this.props = s._.extend({}, e))
                        }
                    }),
                    (g.prototype.upgrade = function(e) {
                        var t,
                            i,
                            o = e.upgrade
                        o &&
                            ((t = 'ph_super_properties'),
                            'string' == typeof o && (t = o),
                            (i = this.storage.parse(t)),
                            this.storage.remove(t),
                            this.storage.remove(t, !0),
                            i && (this.props = s._.extend(this.props, i.all, i.events))),
                            e.cookie_name ||
                                'posthog' === e.name ||
                                ((t = 'ph_' + e.token + '_' + e.name),
                                (i = this.storage.parse(t)) &&
                                    (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(i))),
                            this.storage === s._.localStorage &&
                                ((i = s._.cookie.parse(this.name)),
                                s._.cookie.remove(this.name),
                                s._.cookie.remove(this.name, !0),
                                i && this.register_once(i))
                    }),
                    (g.prototype.save = function() {
                        this.disabled ||
                            (this._expire_notification_campaigns(),
                            this.storage.set(
                                this.name,
                                s._.JSONEncode(this.props),
                                this.expire_days,
                                this.cross_subdomain,
                                this.secure
                            ))
                    }),
                    (g.prototype.remove = function() {
                        this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                    }),
                    (g.prototype.clear = function() {
                        this.remove(), (this.props = {})
                    }),
                    (g.prototype.register_once = function(e, t, i) {
                        return (
                            !!s._.isObject(e) &&
                            (void 0 === t && (t = 'None'),
                            (this.expire_days = void 0 === i ? this.default_expiry : i),
                            s._.each(
                                e,
                                function(e, s) {
                                    ;(this.props.hasOwnProperty(s) && this.props[s] !== t) || (this.props[s] = e)
                                },
                                this
                            ),
                            this.save(),
                            !0)
                        )
                    }),
                    (g.prototype.register = function(e, t) {
                        return (
                            !!s._.isObject(e) &&
                            ((this.expire_days = void 0 === t ? this.default_expiry : t),
                            s._.extend(this.props, e),
                            this.save(),
                            !0)
                        )
                    }),
                    (g.prototype.unregister = function(e) {
                        e in this.props && (delete this.props[e], this.save())
                    }),
                    (g.prototype._expire_notification_campaigns = s._.safewrap(function() {
                        var e = this.props[d],
                            i = t.default.DEBUG ? 6e4 : 36e5
                        if (e) {
                            for (var o in e) 1 * new Date() - e[o] > i && delete e[o]
                            s._.isEmptyObject(e) && delete this.props[d]
                        }
                    })),
                    (g.prototype.update_campaign_params = function() {
                        this.campaign_params_saved ||
                            (this.register_once(s._.info.campaignParams()), (this.campaign_params_saved = !0))
                    }),
                    (g.prototype.update_search_keyword = function(e) {
                        this.register(s._.info.searchInfo(e))
                    }),
                    (g.prototype.update_referrer_info = function(e) {
                        this.register_once(
                            {
                                $initial_referrer: e || '$direct',
                                $initial_referring_domain: s._.info.referringDomain(e) || '$direct',
                            },
                            ''
                        )
                    }),
                    (g.prototype.get_referrer_info = function() {
                        return s._.strip_empty_properties({
                            $initial_referrer: this.props.$initial_referrer,
                            $initial_referring_domain: this.props.$initial_referring_domain,
                        })
                    }),
                    (g.prototype.safe_merge = function(e) {
                        return (
                            s._.each(this.props, function(t, s) {
                                s in e || (e[s] = t)
                            }),
                            e
                        )
                    }),
                    (g.prototype.update_config = function(e) {
                        ;(this.default_expiry = this.expire_days = e.cookie_expiration),
                            this.set_disabled(e.disable_persistence),
                            this.set_cross_subdomain(e.cross_subdomain_cookie),
                            this.set_secure(e.secure_cookie)
                    }),
                    (g.prototype.set_disabled = function(e) {
                        ;(this.disabled = e), this.disabled ? this.remove() : this.save()
                    }),
                    (g.prototype.set_cross_subdomain = function(e) {
                        e !== this.cross_subdomain && ((this.cross_subdomain = e), this.remove(), this.save())
                    }),
                    (g.prototype.get_cross_subdomain = function() {
                        return this.cross_subdomain
                    }),
                    (g.prototype.set_secure = function(e) {
                        e !== this.secure && ((this.secure = !!e), this.remove(), this.save())
                    }),
                    (g.prototype._add_to_people_queue = function(t, i) {
                        var _ = this._get_queue_key(t),
                            p = i[t],
                            n = this._get_or_create_queue(e.SET_ACTION),
                            a = this._get_or_create_queue(e.SET_ONCE_ACTION)
                        _ === o
                            ? s._.extend(n, p)
                            : _ === r &&
                              s._.each(p, function(e, t) {
                                  t in a || (a[t] = e)
                              }),
                            s.console.log('POSTHOG PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):'),
                            s.console.log(i),
                            this.save()
                    }),
                    (g.prototype._pop_from_people_queue = function(e, t) {
                        var i = this._get_queue(e)
                        s._.isUndefined(i) ||
                            (s._.each(
                                t,
                                function(e, t) {
                                    delete i[t]
                                },
                                this
                            ),
                            this.save())
                    }),
                    (g.prototype._get_queue_key = function(t) {
                        return t === e.SET_ACTION
                            ? o
                            : t === e.SET_ONCE_ACTION
                            ? r
                            : void s.console.error('Invalid queue:', t)
                    }),
                    (g.prototype._get_queue = function(e) {
                        return this.props[this._get_queue_key(e)]
                    }),
                    (g.prototype._get_or_create_queue = function(e, t) {
                        var i = this._get_queue_key(e)
                        return (t = s._.isUndefined(t) ? {} : t), this.props[i] || (this.props[i] = t)
                    }),
                    (g.prototype.set_event_timer = function(e, t) {
                        var s = this.props[f] || {}
                        ;(s[e] = t), (this.props[f] = s), this.save()
                    }),
                    (g.prototype.remove_event_timer = function(e) {
                        var t = (this.props[f] || {})[e]
                        return s._.isUndefined(t) || (delete this.props[f][e], this.save()), t
                    })
            },
            { './api-actions': 'os8r', './config': 'itQ5', './utils': 'FOZT' },
        ],
        ok3T: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.init_from_snippet = S),
                    (exports.init_as_module = A)
                var e,
                    t,
                    o = c(require('./config')),
                    i = require('./utils'),
                    r = require('./autocapture'),
                    n = require('./dom-capture'),
                    _ = require('./posthog-people'),
                    s = require('./posthog-persistence'),
                    p = require('./gdpr-utils')
                function c(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                var a = 0,
                    u = 1,
                    d = function() {},
                    l = {},
                    g = 'posthog',
                    h = i.window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
                    f = !h && -1 === i.userAgent.indexOf('MSIE') && -1 === i.userAgent.indexOf('Mozilla'),
                    y = i.window.navigator.sendBeacon
                y && (y = i._.bind(y, i.navigator))
                var v = {
                        api_host: 'https://t.posthog.com',
                        api_method: 'POST',
                        api_transport: 'XHR',
                        autocapture: !0,
                        cdn: 'https://cdn.posthog.com',
                        cross_subdomain_cookie: -1 === i.document.location.hostname.indexOf('herokuapp.com'),
                        persistence: 'cookie',
                        persistence_name: '',
                        cookie_name: '',
                        loaded: function() {},
                        store_google: !0,
                        save_referrer: !0,
                        test: !1,
                        verbose: !1,
                        img: !1,
                        capture_pageview: !0,
                        debug: !1,
                        capture_links_timeout: 300,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_persistence: !1,
                        disable_cookie: !1,
                        secure_cookie: !1,
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_capturing_persistence_type: 'localStorage',
                        opt_out_capturing_cookie_prefix: null,
                        property_blacklist: [],
                        xhr_headers: {},
                        inapp_protocol: '//',
                        inapp_link_new_window: !1,
                        request_batching: !0,
                    },
                    m = !1,
                    b = function() {},
                    k = function(n, s, p) {
                        var c,
                            u = p === g ? t : t[p]
                        if (u && e === a) c = u
                        else {
                            if (u && !i._.isArray(u)) return void i.console.error('You have already initialized ' + p)
                            c = new b()
                        }
                        if (
                            ((c._cached_groups = {}),
                            (c._user_decide_check_complete = !1),
                            (c._events_captureed_before_user_decide_check_complete = []),
                            c._init(n, s, p),
                            (c.people = new _.PostHogPeople()),
                            c.people._init(c),
                            (o.default.DEBUG = o.default.DEBUG || c.get_config('debug')),
                            (c.__autocapture_enabled = c.get_config('autocapture')),
                            c.get_config('autocapture'))
                        ) {
                            r.autocapture.enabledForProject(c.get_config('token'), 100, 100)
                                ? r.autocapture.isBrowserSupported()
                                    ? r.autocapture.init(c)
                                    : ((c.__autocapture_enabled = !1),
                                      i.console.log(
                                          'Disabling Automatic Event Collection because this browser is not supported'
                                      ))
                                : ((c.__autocapture_enabled = !1),
                                  i.console.log('Not in active bucket: disabling Automatic Event Collection.'))
                        }
                        return (
                            !i._.isUndefined(u) &&
                                i._.isArray(u) &&
                                (c._execute_array.call(c.people, u.people), c._execute_array(u)),
                            c
                        )
                    }
                function w(e) {
                    i.window.console.warn(
                        'WARNING! posthog.' +
                            e +
                            ' is deprecated and will be removed soon! Please use posthog.' +
                            e.split('captureing').join('capturing') +
                            ' instead (without the "e")!'
                    )
                }
                ;(b.prototype.init = function(e, o, r) {
                    if (i._.isUndefined(r)) i.console.error('You must name your new library: init(token, config, name)')
                    else {
                        if (r !== g) {
                            var n = k(e, o, r)
                            return (t[r] = n), n._loaded(), n
                        }
                        i.console.error(
                            'You must initialize the main posthog object right after you include the PostHog js snippet'
                        )
                    }
                }),
                    (b.prototype._init = function(e, t, o) {
                        ;(this.__loaded = !0),
                            (this.config = {}),
                            (this._triggered_notifs = []),
                            this.set_config(
                                i._.extend({}, v, t, {
                                    name: o,
                                    token: e,
                                    callback_fn: (o === g ? o : g + '.' + o) + '._jsc',
                                })
                            ),
                            (this._jsc = function() {}),
                            (this._event_queue = []),
                            (this._empty_queue_count = 0),
                            (this._should_poll = !0),
                            (this._poller = function() {}),
                            (this.__dom_loaded_queue = []),
                            (this.__request_queue = []),
                            (this.__disabled_events = []),
                            (this._flags = { disable_all_events: !1, identify_called: !1 }),
                            (this.persistence = this.cookie = new s.PostHogPersistence(this.config)),
                            this._gdpr_init()
                        var r = i._.UUID()
                        this.get_distinct_id() || this.register_once({ distinct_id: r, $device_id: r }, ''),
                            i.window.addEventListener('unload', this._handle_unload.bind(this))
                    }),
                    (b.prototype._loaded = function() {
                        this.get_config('loaded')(this), this.get_config('capture_pageview') && this.capture_pageview()
                    }),
                    (b.prototype._dom_loaded = function() {
                        i._.each(
                            this.__dom_loaded_queue,
                            function(e) {
                                this._capture_dom.apply(this, e)
                            },
                            this
                        ),
                            this.has_opted_out_capturing() ||
                                (i._.each(
                                    this.__request_queue,
                                    function(e) {
                                        this._send_request.apply(this, e)
                                    },
                                    this
                                ),
                                this.get_config('request_batching') && this._event_queue_poll()),
                            delete this.__dom_loaded_queue,
                            delete this.__request_queue
                    }),
                    (b.prototype._capture_dom = function(e, t) {
                        if (this.get_config('img'))
                            return i.console.error("You can't use DOM capturing functions with img = true."), !1
                        if (!m) return this.__dom_loaded_queue.push([e, t]), !1
                        var o = new e().init(this)
                        return o.capture.apply(o, t)
                    }),
                    (b.prototype._prepare_callback = function(e, t) {
                        if (i._.isUndefined(e)) return null
                        if (h) {
                            return function(o) {
                                e(o, t)
                            }
                        }
                        var o = this._jsc,
                            r = '' + Math.floor(1e8 * Math.random()),
                            n = this.get_config('callback_fn') + '[' + r + ']'
                        return (
                            (o[r] = function(i) {
                                delete o[r], e(i, t)
                            }),
                            n
                        )
                    }),
                    (b.prototype._event_enqueue = function(e, t, o, i) {
                        this._event_queue.push({ url: e, data: t, options: o, callback: i }),
                            this._should_poll || ((this._should_poll = !0), this._event_queue_poll())
                    }),
                    (b.prototype._format_event_queue_data = function() {
                        var e = {}
                        return (
                            i._.each(this._event_queue, function(t) {
                                var o = t.url,
                                    i = t.data
                                void 0 === e[o] && (e[o] = []), e[o].push(i)
                            }),
                            e
                        )
                    }),
                    (b.prototype._event_queue_poll = function() {
                        var e = this
                        this._poller = setTimeout(function() {
                            if (e._event_queue.length > 0) {
                                var t = e._format_event_queue_data(),
                                    o = function(o) {
                                        var r = t[o]
                                        i._.each(r, function(e, t) {
                                            ;(r[t].offset = Math.abs(r[t].timestamp - new Date())),
                                                delete r[t].timestamp,
                                                i.console.log(r[t])
                                        }),
                                            (n = i._.JSONEncode(r)),
                                            (_ = i._.base64Encode(n)),
                                            e._send_request(o, { data: _ }, l, d)
                                    }
                                for (var r in t) {
                                    var n, _
                                    o(r)
                                }
                                e._event_queue.length = 0
                            } else e._empty_queue_count++
                            e._empty_queue_count > 4 && ((e._should_poll = !1), (e._empty_queue_count = 0)),
                                e._should_poll && e._event_queue_poll()
                        }, 3e3)
                    }),
                    (b.prototype._handle_unload = function() {
                        if (this.get_config('request_batching')) {
                            clearInterval(this._poller), this.capture('$pageleave')
                            var e = {}
                            for (var t in (this._event_queue.length > 0 && (e = this._format_event_queue_data()),
                            (this._event_queue.length = 0),
                            e)) {
                                var o = i._.base64Encode(i._.JSONEncode(e[t]))
                                this._send_request(t, { data: o }, { transport: 'sendbeacon' }, d)
                            }
                        } else this.capture('$pageleave', null, { transport: 'sendbeacon' })
                    }),
                    (b.prototype._send_request = function(e, t, o, r) {
                        if (f) this.__request_queue.push(arguments)
                        else {
                            var n = {
                                    method: this.get_config('api_method'),
                                    transport: this.get_config('api_transport'),
                                },
                                _ = null
                            r || (!i._.isFunction(o) && 'string' != typeof o) || ((r = o), (o = null)),
                                (o = i._.extend(n, o || {})),
                                h || (o.method = 'GET')
                            var s = y && 'sendbeacon' === o.transport.toLowerCase(),
                                p = s || 'POST' === o.method,
                                c = this.get_config('verbose')
                            t.verbose && (c = !0),
                                this.get_config('test') && (t.test = 1),
                                c && (t.verbose = 1),
                                this.get_config('img') && (t.img = 1),
                                h ||
                                    (r
                                        ? (t.callback = r)
                                        : (c || this.get_config('test')) && (t.callback = '(function(){})'))
                            var a = {}
                            if (
                                ((a.ip = this.get_config('ip') ? 1 : 0),
                                (a._ = new Date().getTime().toString()),
                                p && ((_ = Array.isArray(t) ? 'data=' + t : 'data=' + t.data), delete t.data),
                                (e += '?' + i._.HTTPBuildQuery(a)),
                                'img' in t)
                            ) {
                                var u = i.document.createElement('img')
                                ;(u.src = e), i.document.body.appendChild(u)
                            } else if (s) {
                                var d = new Blob([_], { type: 'application/x-www-form-urlencoded' })
                                y(e, d)
                            } else if (h)
                                try {
                                    var l = new XMLHttpRequest()
                                    l.open(o.method, e, !0)
                                    var g = this.get_config('xhr_headers')
                                    p && (g['Content-Type'] = 'application/x-www-form-urlencoded'),
                                        i._.each(g, function(e, t) {
                                            l.setRequestHeader(t, e)
                                        }),
                                        (l.withCredentials = !0),
                                        (l.onreadystatechange = function() {
                                            if (4 === l.readyState)
                                                if (200 === l.status) {
                                                    if (r)
                                                        if (c) {
                                                            var e
                                                            try {
                                                                e = i._.JSONDecode(l.responseText)
                                                            } catch (o) {
                                                                return void i.console.error(o)
                                                            }
                                                            r(e)
                                                        } else r(Number(l.responseText))
                                                } else {
                                                    var t = 'Bad HTTP status: ' + l.status + ' ' + l.statusText
                                                    i.console.error(t), r && r(c ? { status: 0, error: t } : 0)
                                                }
                                        }),
                                        l.send(_)
                                } catch (b) {
                                    i.console.error(b)
                                }
                            else {
                                var v = i.document.createElement('script')
                                ;(v.type = 'text/javascript'), (v.async = !0), (v.defer = !0), (v.src = e)
                                var m = i.document.getElementsByTagName('script')[0]
                                m.parentNode.insertBefore(v, m)
                            }
                        }
                    }),
                    (b.prototype._execute_array = function(e) {
                        var t,
                            o = [],
                            r = [],
                            n = []
                        i._.each(
                            e,
                            function(e) {
                                e &&
                                    ((t = e[0]),
                                    i._.isArray(t)
                                        ? n.push(e)
                                        : 'function' == typeof e
                                        ? e.call(this)
                                        : i._.isArray(e) && 'alias' === t
                                        ? o.push(e)
                                        : i._.isArray(e) && -1 !== t.indexOf('capture') && 'function' == typeof this[t]
                                        ? n.push(e)
                                        : r.push(e))
                            },
                            this
                        )
                        var _ = function(e, t) {
                            i._.each(
                                e,
                                function(e) {
                                    if (i._.isArray(e[0])) {
                                        var o = t
                                        i._.each(e, function(e) {
                                            o = o[e[0]].apply(o, e.slice(1))
                                        })
                                    } else this[e[0]].apply(this, e.slice(1))
                                },
                                t
                            )
                        }
                        _(o, this), _(r, this), _(n, this)
                    }),
                    (b.prototype.push = function(e) {
                        this._execute_array([e])
                    }),
                    (b.prototype.capture = (0, p.addOptOutCheckPostHogLib)(function(e, t, o, r) {
                        r || 'function' != typeof o || ((r = o), (o = null))
                        var n = (o = o || l).transport
                        if ((n && (o.transport = n), 'function' != typeof r && (r = d), i._.isUndefined(e)))
                            i.console.error('No event name provided to posthog.capture')
                        else {
                            if (!this._event_is_disabled(e)) {
                                ;(t = t || {}).token = this.get_config('token')
                                var _ = this.persistence.remove_event_timer(e)
                                if (!i._.isUndefined(_)) {
                                    var s = new Date().getTime() - _
                                    t.$duration = parseFloat((s / 1e3).toFixed(3))
                                }
                                this.persistence.update_search_keyword(i.document.referrer),
                                    this.get_config('store_google') && this.persistence.update_campaign_params(),
                                    this.get_config('save_referrer') &&
                                        this.persistence.update_referrer_info(i.document.referrer),
                                    (t = i._.extend({}, i._.info.properties(), this.persistence.properties(), t))
                                var p = this.get_config('property_blacklist')
                                i._.isArray(p)
                                    ? i._.each(p, function(e) {
                                          delete t[e]
                                      })
                                    : i.console.error('Invalid value for property_blacklist config: ' + p)
                                var c = { event: e, properties: t },
                                    a = i._.truncate(c, 255),
                                    u = i._.JSONEncode(a),
                                    g = i._.base64Encode(u),
                                    h = this.get_config('api_host') + '/e/',
                                    f = this._prepare_callback(r, a),
                                    y = r !== d || o !== l
                                return (
                                    !this.get_config('request_batching') || y
                                        ? this._send_request(h, { data: g }, o, f)
                                        : ((c.timestamp = new Date()), this._event_enqueue(h, c, o, f)),
                                    a
                                )
                            }
                            r(0)
                        }
                    })),
                    (b.prototype._create_map_key = function(e, t) {
                        return e + '_' + JSON.stringify(t)
                    }),
                    (b.prototype._remove_group_from_cache = function(e, t) {
                        delete this._cached_groups[this._create_map_key(e, t)]
                    }),
                    (b.prototype.capture_pageview = function(e) {
                        i._.isUndefined(e) && (e = i.document.location.href), this.capture('$pageview')
                    }),
                    (b.prototype.capture_links = function() {
                        return this._capture_dom.call(this, n.LinkCapture, arguments)
                    }),
                    (b.prototype.capture_forms = function() {
                        return this._capture_dom.call(this, FormCaptureer, arguments)
                    }),
                    (b.prototype.register = function(e, t) {
                        this.persistence.register(e, t)
                    }),
                    (b.prototype.register_once = function(e, t, o) {
                        this.persistence.register_once(e, t, o)
                    }),
                    (b.prototype.unregister = function(e) {
                        this.persistence.unregister(e)
                    }),
                    (b.prototype._register_single = function(e, t) {
                        var o = {}
                        ;(o[e] = t), this.register(o)
                    }),
                    (b.prototype.identify = function(e, t, o) {
                        var i = this.get_distinct_id()
                        if ((this.register({ $user_id: e }), !this.get_property('$device_id'))) {
                            var r = i
                            this.register_once({ $had_persisted_distinct_id: !0, $device_id: r }, '')
                        }
                        e !== i &&
                            e !== this.get_property(s.ALIAS_ID_KEY) &&
                            (this.unregister(s.ALIAS_ID_KEY), this.register({ distinct_id: e })),
                            (this._flags.identify_called = !0),
                            this.people._flush(t, o),
                            e !== i && this.capture('$identify', { distinct_id: e, $anon_distinct_id: i })
                    }),
                    (b.prototype.reset = function(e) {
                        var t = this.get_property('$device_id')
                        this.persistence.clear(), (this._flags.identify_called = !1)
                        var o = i._.UUID()
                        this.register_once({ distinct_id: o, $device_id: e ? o : t }, '')
                    }),
                    (b.prototype.get_distinct_id = function() {
                        return this.get_property('distinct_id')
                    }),
                    (b.prototype.alias = function(e, t) {
                        if (e === this.get_property(s.PEOPLE_DISTINCT_ID_KEY))
                            return (
                                i.console.critical('Attempting to create alias for existing People user - aborting.'),
                                -2
                            )
                        var o = this
                        return (
                            i._.isUndefined(t) && (t = this.get_distinct_id()),
                            e !== t
                                ? (this._register_single(s.ALIAS_ID_KEY, e),
                                  this.capture('$create_alias', { alias: e, distinct_id: t }, function() {
                                      o.identify(e)
                                  }))
                                : (i.console.error('alias matches current distinct_id - skipping api call.'),
                                  this.identify(e),
                                  -1)
                        )
                    }),
                    (b.prototype.set_config = function(e) {
                        i._.isObject(e) &&
                            (i._.extend(this.config, e),
                            this.get_config('persistence_name') ||
                                (this.config.persistence_name = this.config.cookie_name),
                            this.get_config('disable_persistence') ||
                                (this.config.disable_persistence = this.config.disable_cookie),
                            this.persistence && this.persistence.update_config(this.config),
                            (o.default.DEBUG = o.default.DEBUG || this.get_config('debug')))
                    }),
                    (b.prototype.get_config = function(e) {
                        return this.config[e]
                    }),
                    (b.prototype.get_property = function(e) {
                        return this.persistence.props[e]
                    }),
                    (b.prototype.toString = function() {
                        var e = this.get_config('name')
                        return e !== g && (e = g + '.' + e), e
                    }),
                    (b.prototype._event_is_disabled = function(e) {
                        return (
                            i._.isBlockedUA(i.userAgent) ||
                            this._flags.disable_all_events ||
                            i._.include(this.__disabled_events, e)
                        )
                    }),
                    (b.prototype._gdpr_init = function() {
                        'localStorage' === this.get_config('opt_out_capturing_persistence_type') &&
                            i._.localStorage.is_supported() &&
                            (!this.has_opted_in_capturing() &&
                                this.has_opted_in_capturing({ persistence_type: 'cookie' }) &&
                                this.opt_in_capturing({ enable_persistence: !1 }),
                            !this.has_opted_out_capturing() &&
                                this.has_opted_out_capturing({ persistence_type: 'cookie' }) &&
                                this.opt_out_capturing({ clear_persistence: !1 }),
                            this.clear_opt_in_out_capturing({ persistence_type: 'cookie', enable_persistence: !1 })),
                            this.has_opted_out_capturing()
                                ? this._gdpr_update_persistence({ clear_persistence: !0 })
                                : this.has_opted_in_capturing() ||
                                  (!this.get_config('opt_out_capturing_by_default') && !i._.cookie.get('ph_optout')) ||
                                  (i._.cookie.remove('ph_optout'),
                                  this.opt_out_capturing({
                                      clear_persistence: this.get_config('opt_out_persistence_by_default'),
                                  }))
                    }),
                    (b.prototype._gdpr_update_persistence = function(e) {
                        var t
                        if (e && e.clear_persistence) t = !0
                        else {
                            if (!e || !e.enable_persistence) return
                            t = !1
                        }
                        this.get_config('disable_persistence') ||
                            this.persistence.disabled === t ||
                            this.persistence.set_disabled(t)
                    }),
                    (b.prototype._gdpr_call_func = function(e, t) {
                        return (
                            (t = i._.extend(
                                {
                                    capture: i._.bind(this.capture, this),
                                    persistence_type: this.get_config('opt_out_capturing_persistence_type'),
                                    cookie_prefix: this.get_config('opt_out_capturing_cookie_prefix'),
                                    cookie_expiration: this.get_config('cookie_expiration'),
                                    cross_subdomain_cookie: this.get_config('cross_subdomain_cookie'),
                                    secure_cookie: this.get_config('secure_cookie'),
                                },
                                t
                            )),
                            i._.localStorage.is_supported() || (t.persistence_type = 'cookie'),
                            e(this.get_config('token'), {
                                capture: t.capture,
                                captureEventName: t.capture_event_name,
                                captureProperties: t.capture_properties,
                                persistenceType: t.persistence_type,
                                persistencePrefix: t.cookie_prefix,
                                cookieExpiration: t.cookie_expiration,
                                crossSubdomainCookie: t.cross_subdomain_cookie,
                                secureCookie: t.secure_cookie,
                            })
                        )
                    }),
                    (b.prototype.opt_in_capturing = function(e) {
                        ;(e = i._.extend({ enable_persistence: !0 }, e)),
                            this._gdpr_call_func(p.optIn, e),
                            this._gdpr_update_persistence(e)
                    }),
                    (b.prototype.opt_in_captureing = function(e) {
                        w('opt_in_captureing'), this.opt_in_capturing(e)
                    }),
                    (b.prototype.opt_out_capturing = function(e) {
                        ;(e = i._.extend({ clear_persistence: !0, delete_user: !0 }, e)).delete_user &&
                            this.people &&
                            this.people._identify_called() &&
                            (this.people.delete_user(), this.people.clear_charges()),
                            this._gdpr_call_func(p.optOut, e),
                            this._gdpr_update_persistence(e)
                    }),
                    (b.prototype.opt_out_captureing = function(e) {
                        w('opt_out_captureing'), this.opt_out_capturing(e)
                    }),
                    (b.prototype.has_opted_in_capturing = function(e) {
                        return this._gdpr_call_func(p.hasOptedIn, e)
                    }),
                    (b.prototype.has_opted_in_captureing = function(e) {
                        return w('has_opted_in_captureing'), this.has_opted_in_capturing(e)
                    }),
                    (b.prototype.has_opted_out_capturing = function(e) {
                        return this._gdpr_call_func(p.hasOptedOut, e)
                    }),
                    (b.prototype.has_opted_out_captureing = function(e) {
                        return w('has_opted_out_captureing'), this.has_opted_out_capturing(e)
                    }),
                    (b.prototype.clear_opt_in_out_capturing = function(e) {
                        ;(e = i._.extend({ enable_persistence: !0 }, e)),
                            this._gdpr_call_func(p.clearOptInOut, e),
                            this._gdpr_update_persistence(e)
                    }),
                    (b.prototype.clear_opt_in_out_captureing = function(e) {
                        w('clear_opt_in_out_captureing'), this.clear_opt_in_out_capturing(e)
                    }),
                    (b.prototype.init = b.prototype.init),
                    (b.prototype.reset = b.prototype.reset),
                    (b.prototype.capture = b.prototype.capture),
                    (b.prototype.capture_links = b.prototype.capture_links),
                    (b.prototype.capture_forms = b.prototype.capture_forms),
                    (b.prototype.capture_pageview = b.prototype.capture_pageview),
                    (b.prototype.register = b.prototype.register),
                    (b.prototype.register_once = b.prototype.register_once),
                    (b.prototype.unregister = b.prototype.unregister),
                    (b.prototype.identify = b.prototype.identify),
                    (b.prototype.alias = b.prototype.alias),
                    (b.prototype.set_config = b.prototype.set_config),
                    (b.prototype.get_config = b.prototype.get_config),
                    (b.prototype.get_property = b.prototype.get_property),
                    (b.prototype.get_distinct_id = b.prototype.get_distinct_id),
                    (b.prototype.toString = b.prototype.toString),
                    (b.prototype.opt_out_captureing = b.prototype.opt_out_captureing),
                    (b.prototype.opt_in_captureing = b.prototype.opt_in_captureing),
                    (b.prototype.has_opted_out_captureing = b.prototype.has_opted_out_captureing),
                    (b.prototype.has_opted_in_captureing = b.prototype.has_opted_in_captureing),
                    (b.prototype.clear_opt_in_out_captureing = b.prototype.clear_opt_in_out_captureing),
                    (b.prototype.opt_out_capturing = b.prototype.opt_out_capturing),
                    (b.prototype.opt_in_capturing = b.prototype.opt_in_capturing),
                    (b.prototype.has_opted_out_capturing = b.prototype.has_opted_out_capturing),
                    (b.prototype.has_opted_in_capturing = b.prototype.has_opted_in_capturing),
                    (b.prototype.clear_opt_in_out_capturing = b.prototype.clear_opt_in_out_capturing),
                    (s.PostHogPersistence.prototype.properties = s.PostHogPersistence.prototype.properties),
                    (s.PostHogPersistence.prototype.update_search_keyword =
                        s.PostHogPersistence.prototype.update_search_keyword),
                    (s.PostHogPersistence.prototype.update_referrer_info =
                        s.PostHogPersistence.prototype.update_referrer_info),
                    (s.PostHogPersistence.prototype.get_cross_subdomain =
                        s.PostHogPersistence.prototype.get_cross_subdomain),
                    (s.PostHogPersistence.prototype.clear = s.PostHogPersistence.prototype.clear),
                    i._.safewrap_class(b, ['identify'])
                var q = {},
                    x = function() {
                        i._.each(q, function(e, o) {
                            o !== g && (t[o] = e)
                        }),
                            (t._ = i._)
                    },
                    P = function() {
                        t.init = function(o, r, n) {
                            if (n) return t[n] || ((t[n] = q[n] = k(o, r, n)), t[n]._loaded()), t[n]
                            var _ = t
                            q[g] ? (_ = q[g]) : o && ((_ = k(o, r, g))._loaded(), (q[g] = _)),
                                (t = _),
                                e === u && (i.window[g] = t),
                                x()
                        }
                    },
                    E = function() {
                        function e() {
                            e.done ||
                                ((e.done = !0),
                                (m = !0),
                                (f = !1),
                                i._.each(q, function(e) {
                                    e._dom_loaded()
                                }))
                        }
                        if (i.document.addEventListener)
                            'complete' === i.document.readyState
                                ? e()
                                : i.document.addEventListener('DOMContentLoaded', e, !1)
                        else if (i.document.attachEvent) {
                            i.document.attachEvent('onreadystatechange', e)
                            var t = !1
                            try {
                                t = null === i.window.frameElement
                            } catch (o) {}
                            i.document.documentElement.doScroll &&
                                t &&
                                (function t() {
                                    try {
                                        i.document.documentElement.doScroll('left')
                                    } catch (o) {
                                        return void setTimeout(t, 1)
                                    }
                                    e()
                                })()
                        }
                        i._.register_event(i.window, 'load', e, !0)
                    }
                function S() {
                    ;(e = u),
                        i._.isUndefined(i.window.posthog) && (i.window.posthog = []),
                        (t = i.window.posthog).__loaded || (t.config && t.persistence)
                            ? i.console.error('PostHog library has already been downloaded at least once.')
                            : (i._.each(t._i, function(e) {
                                  e && i._.isArray(e) && (q[e[e.length - 1]] = k.apply(this, e))
                              }),
                              P(),
                              t.init(),
                              i._.each(q, function(e) {
                                  e._loaded()
                              }),
                              E())
                }
                function A() {
                    return (e = a), (t = new b()), P(), t.init(), E(), t
                }
            },
            {
                './config': 'itQ5',
                './utils': 'FOZT',
                './autocapture': 'gR3r',
                './dom-capture': 'OjnC',
                './posthog-people': 'ecEG',
                './posthog-persistence': 'MAdm',
                './gdpr-utils': 'rxSh',
            },
        ],
        e2xX: [
            function(require, module, exports) {
                'use strict'
                var r = require('./posthog-core')
                ;(0, r.init_from_snippet)()
            },
            { './posthog-core': 'ok3T' },
        ],
    },
    {},
    ['e2xX'],
    null
)
