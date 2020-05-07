;(window.webpackJsonp = window.webpackJsonp || []).push([
    [19],
    {
        311: function(e, t, n) {
            var a = n(346),
                r = n(347),
                o = n(133),
                c = n(348)
            e.exports = function(e) {
                return a(e) || r(e) || o(e) || c()
            }
        },
        346: function(e, t, n) {
            var a = n(134)
            e.exports = function(e) {
                if (Array.isArray(e)) return a(e)
            }
        },
        347: function(e, t) {
            e.exports = function(e) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        348: function(e, t) {
            e.exports = function() {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            }
        },
        504: function(e, t, n) {
            'use strict'
            var a = n(0),
                r = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d:
                                        'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z',
                                },
                            },
                        ],
                    },
                    name: 'delete',
                    theme: 'outlined',
                },
                o = n(14),
                c = function(e, t) {
                    return a.createElement(o.a, Object.assign({}, e, { ref: t, icon: r }))
                }
            c.displayName = 'DeleteOutlined'
            t.a = a.forwardRef(c)
        },
        540: function(e, t, n) {},
        541: function(e, t, n) {},
        542: function(e, t, n) {
            e.exports = n(543)
        },
        543: function(e, t, n) {
            'use strict'
            n.r(t)
            var a = n(0),
                r = n.n(a),
                o = n(1),
                c = n.n(o),
                s = n(86)
            function l() {
                return (l =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t]
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
            }
            function u(e, t) {
                if (null == e) return {}
                var n,
                    a,
                    r = (function(e, t) {
                        if (null == e) return {}
                        var n,
                            a,
                            r = {},
                            o = Object.keys(e)
                        for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
                        return r
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    for (a = 0; a < o.length; a++)
                        (n = o[a]),
                            t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
                }
                return r
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n]
                    ;(a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        'value' in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            function d(e) {
                return (d = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e)
                      })(e)
            }
            function p(e, t) {
                return (p =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e
                    })(e, t)
            }
            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return e
            }
            function h(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                        : (e[t] = n),
                    e
                )
            }
            var m = n(2),
                v = (function(e) {
                    function t(e) {
                        var n, a, r
                        !(function(e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                        })(this, t),
                            (a = this),
                            (r = d(t).call(this, e)),
                            (n = !r || ('object' != typeof r && 'function' != typeof r) ? f(a) : r),
                            h(f(f(n)), 'handleClick', function(e) {
                                var t = n.state.checked,
                                    a = n.props.onClick,
                                    r = !t
                                n.setChecked(r, e), a && a(r, e)
                            }),
                            h(f(f(n)), 'handleKeyDown', function(e) {
                                37 === e.keyCode ? n.setChecked(!1, e) : 39 === e.keyCode && n.setChecked(!0, e)
                            }),
                            h(f(f(n)), 'handleMouseUp', function(e) {
                                var t = n.props.onMouseUp
                                n.node && n.node.blur(), t && t(e)
                            }),
                            h(f(f(n)), 'saveNode', function(e) {
                                n.node = e
                            })
                        var o = !1
                        return (o = 'checked' in e ? !!e.checked : !!e.defaultChecked), (n.state = { checked: o }), n
                    }
                    var n, a, o
                    return (
                        (function(e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError('Super expression must either be null or a function')
                            ;(e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, writable: !0, configurable: !0 },
                            })),
                                t && p(e, t)
                        })(t, e),
                        (n = t),
                        (o = [
                            {
                                key: 'getDerivedStateFromProps',
                                value: function(e) {
                                    var t = {},
                                        n = e.checked
                                    return 'checked' in e && (t.checked = !!n), t
                                },
                            },
                        ]),
                        (a = [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props,
                                        t = e.autoFocus,
                                        n = e.disabled
                                    t && !n && this.focus()
                                },
                            },
                            {
                                key: 'setChecked',
                                value: function(e, t) {
                                    var n = this.props,
                                        a = n.disabled,
                                        r = n.onChange
                                    a || ('checked' in this.props || this.setState({ checked: e }), r && r(e, t))
                                },
                            },
                            {
                                key: 'focus',
                                value: function() {
                                    this.node.focus()
                                },
                            },
                            {
                                key: 'blur',
                                value: function() {
                                    this.node.blur()
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e,
                                        t = this.props,
                                        n = t.className,
                                        a = t.prefixCls,
                                        o = t.disabled,
                                        c = t.loadingIcon,
                                        s = t.checkedChildren,
                                        i = t.unCheckedChildren,
                                        d = u(t, [
                                            'className',
                                            'prefixCls',
                                            'disabled',
                                            'loadingIcon',
                                            'checkedChildren',
                                            'unCheckedChildren',
                                        ]),
                                        p = this.state.checked,
                                        f = m(
                                            (h((e = {}), n, !!n),
                                            h(e, a, !0),
                                            h(e, ''.concat(a, '-checked'), p),
                                            h(e, ''.concat(a, '-disabled'), o),
                                            e)
                                        )
                                    return r.a.createElement(
                                        'button',
                                        l({}, d, {
                                            type: 'button',
                                            role: 'switch',
                                            'aria-checked': p,
                                            disabled: o,
                                            className: f,
                                            ref: this.saveNode,
                                            onKeyDown: this.handleKeyDown,
                                            onClick: this.handleClick,
                                            onMouseUp: this.handleMouseUp,
                                        }),
                                        c,
                                        r.a.createElement('span', { className: ''.concat(a, '-inner') }, p ? s : i)
                                    )
                                },
                            },
                        ]) && i(n.prototype, a),
                        o && i(n, o),
                        t
                    )
                })(a.Component)
            ;(v.propTypes = {
                className: c.a.string,
                prefixCls: c.a.string,
                disabled: c.a.bool,
                checkedChildren: c.a.any,
                unCheckedChildren: c.a.any,
                onChange: c.a.func,
                onMouseUp: c.a.func,
                onClick: c.a.func,
                tabIndex: c.a.number,
                checked: c.a.bool,
                defaultChecked: c.a.bool,
                autoFocus: c.a.bool,
                loadingIcon: c.a.node,
            }),
                (v.defaultProps = {
                    prefixCls: 'rc-switch',
                    checkedChildren: null,
                    unCheckedChildren: null,
                    className: '',
                    defaultChecked: !1,
                }),
                Object(s.a)(v),
                (t.default = v)
        },
        563: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Setup', function() {
                    return he
                })
            n(52), n(540)
            var a = n(0),
                r = n.n(a),
                o = n(2),
                c = n.n(o),
                s = n(87)
            function l() {
                return (l =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t]
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
            }
            function u(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                        : (e[t] = n),
                    e
                )
            }
            var i = function(e, t) {
                    var n = {}
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a])
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                        var r = 0
                        for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                            t.indexOf(a[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                                (n[a[r]] = e[a[r]])
                    }
                    return n
                },
                d = function(e) {
                    return a.createElement(s.a, null, function(t) {
                        var n,
                            r = t.getPrefixCls,
                            o = t.direction,
                            s = e.prefixCls,
                            d = e.type,
                            p = void 0 === d ? 'horizontal' : d,
                            f = e.orientation,
                            h = void 0 === f ? 'center' : f,
                            m = e.className,
                            v = e.children,
                            b = e.dashed,
                            y = e.plain,
                            k = i(e, ['prefixCls', 'type', 'orientation', 'className', 'children', 'dashed', 'plain']),
                            g = r('divider', s),
                            E = h.length > 0 ? '-'.concat(h) : h,
                            w = !!v,
                            O = c()(
                                m,
                                g,
                                ''.concat(g, '-').concat(p),
                                (u((n = {}), ''.concat(g, '-with-text'), w),
                                u(n, ''.concat(g, '-with-text').concat(E), w),
                                u(n, ''.concat(g, '-dashed'), !!b),
                                u(n, ''.concat(g, '-plain'), !!y),
                                u(n, ''.concat(g, '-rtl'), 'rtl' === o),
                                n)
                            )
                        return a.createElement(
                            'div',
                            l({ className: O }, k, { role: 'separator' }),
                            v && a.createElement('span', { className: ''.concat(g, '-inner-text') }, v)
                        )
                    })
                },
                p = n(9),
                f = n(200),
                h = n(192),
                m = (n(541), n(542)),
                v = n.n(m),
                b = n(19),
                y = n(91),
                k = n.n(y),
                g = n(188),
                E = n(68),
                w = n(43)
            function O() {
                return (O =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t]
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
            }
            function x(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                        : (e[t] = n),
                    e
                )
            }
            var C = a.forwardRef(function(e, t) {
                var n
                Object(w.a)(
                    'checked' in e || !('value' in e),
                    'Switch',
                    '`value` is not a valid prop, do you mean `checked`?'
                )
                var r = e.prefixCls,
                    o = e.size,
                    l = e.loading,
                    u = e.className,
                    i = void 0 === u ? '' : u,
                    d = e.disabled,
                    p = a.useContext(s.b),
                    f = p.getPrefixCls,
                    h = p.direction,
                    m = a.useContext(E.a),
                    y = f('switch', r),
                    C = l ? a.createElement(k.a, { className: ''.concat(y, '-loading-icon') }) : null,
                    P = c()(
                        i,
                        (x((n = {}), ''.concat(y, '-small'), 'small' === (o || m)),
                        x(n, ''.concat(y, '-loading'), l),
                        x(n, ''.concat(y, '-rtl'), 'rtl' === h),
                        n)
                    )
                return a.createElement(
                    g.a,
                    { insertExtraNode: !0 },
                    a.createElement(
                        v.a,
                        O({}, Object(b.a)(e, ['loading']), {
                            prefixCls: y,
                            className: P,
                            disabled: d || l,
                            ref: t,
                            loadingIcon: C,
                        })
                    )
                )
            })
            C.__ANT_SWITCH = !0
            var P = C,
                j = n(12),
                D = n.n(j),
                S = n(16),
                U = n(26)
            function _() {
                var e = Object(p.useValues)(U.a).user,
                    t = Object(a.useState)(!1),
                    n = D()(t, 2),
                    o = n[0],
                    c = n[1]
                return r.a.createElement(
                    'div',
                    null,
                    'PostHog uses PostHog (unsurprisingly!) to capture information about how people are using the product. We believe that product analytics are the best way to make PostHog more useful for everyone.',
                    r.a.createElement('br', null),
                    r.a.createElement('br', null),
                    "We also understand there are many reasons why people don't want to or aren't allowed to send this usage data. Just tick the box below to opt out of this.",
                    r.a.createElement('br', null),
                    r.a.createElement('br', null),
                    r.a.createElement(P, {
                        onChange: function(e) {
                            S.a.update('api/user', { team: { opt_out_capture: e } }).then(function() {
                                return c(!0)
                            })
                        },
                        defaultChecked: e.team.opt_out_capture,
                    }),
                    r.a.createElement(
                        'label',
                        { style: { marginLeft: '10px' } },
                        'Opt-out of sending usage data to PostHog.'
                    ),
                    o &&
                        r.a.createElement(
                            'p',
                            { className: 'text-success' },
                            'Preference saved. ',
                            r.a.createElement(
                                'a',
                                { href: '/setup' },
                                'Refresh the page for the change to take effect.'
                            )
                        )
                )
            }
            function N() {
                var e = Object(p.useValues)(U.a).user,
                    t = Object(p.useActions)(U.a).userUpdateRequest,
                    n = Object(a.useState)(!1),
                    o = D()(n, 2),
                    c = o[0],
                    s = o[1]
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(P, {
                        onChange: function(n) {
                            t({ user: { email_opt_in: !e.email_opt_in } }), s(!0)
                        },
                        defaultChecked: e.email_opt_in,
                    }),
                    r.a.createElement(
                        'label',
                        { style: { marginLeft: '10px' } },
                        'Receive security and feature updates via email. You can easily unsubscribe at any time.'
                    ),
                    c && r.a.createElement('p', { className: 'text-success' }, 'Preference saved.'),
                    r.a.createElement('br', null),
                    r.a.createElement('br', null)
                )
            }
            n(218)
            var A = n(187),
                W = (n(180), n(112)),
                R = (n(128), n(40)),
                I = n(6),
                H = n.n(I),
                L = n(311),
                T = n.n(L),
                V = n(504),
                M = Object(p.kea)({
                    actions: function() {
                        return {
                            addUrl: !0,
                            removeUrl: function(e) {
                                return { index: e }
                            },
                            updateUrl: function(e, t) {
                                return { index: e, value: t }
                            },
                            saveAppUrls: !0,
                        }
                    },
                    defaults: function() {
                        return {
                            appUrls: function(e) {
                                return U.a.selectors.user(e).team.app_urls || ['https://']
                            },
                        }
                    },
                    reducers: function(e) {
                        var t,
                            n,
                            a = e.actions
                        return {
                            appUrls: [
                                ['https://'],
                                ((t = {}),
                                H()(t, a.addUrl, function(e) {
                                    return e.concat(['https://'])
                                }),
                                H()(t, a.updateUrl, function(e, t) {
                                    var n = t.index,
                                        a = t.value
                                    return Object.assign(T()(e), H()({}, n, a))
                                }),
                                H()(t, a.removeUrl, function(e, t) {
                                    var n = t.index,
                                        a = T()(e)
                                    return a.splice(n, 1), a
                                }),
                                t),
                            ],
                            isSaved: [
                                !1,
                                ((n = {}),
                                H()(n, a.addUrl, function() {
                                    return !1
                                }),
                                H()(n, a.removeUrl, function() {
                                    return !1
                                }),
                                H()(n, a.updateUrl, function() {
                                    return !1
                                }),
                                H()(n, U.a.actions.userUpdateSuccess, function(e, t) {
                                    return 'SetupAppUrls' === t.updateKey || e
                                }),
                                n),
                            ],
                        }
                    },
                    listeners: function(e) {
                        var t = e.actions,
                            n = e.values
                        return H()({}, t.saveAppUrls, function() {
                            U.a.actions.userUpdateRequest({ team: { app_urls: n.appUrls } }, 'SetupAppUrls')
                        })
                    },
                    path: function() {
                        return ['scenes', 'setup', 'SetupAppUrls']
                    },
                })
            function K() {
                var e = Object(p.useValues)(M),
                    t = e.appUrls,
                    n = e.isSaved,
                    a = Object(p.useActions)(M),
                    o = a.addUrl,
                    c = a.removeUrl,
                    s = a.updateUrl,
                    l = a.saveAppUrls
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement('label', null, 'What URLs will you be using PostHog on?'),
                    t.map(function(e, n) {
                        return r.a.createElement(
                            'div',
                            { key: n },
                            r.a.createElement(A.a, {
                                value: e,
                                onChange: function(e) {
                                    return s(n, e.target.value)
                                },
                                autoFocus: 1 === t.count && 'https://' === t[0],
                                type: 'url',
                                placeholder: 'https://',
                                style: { width: '400px' },
                                suffix: r.a.createElement(
                                    W.a,
                                    { title: 'Delete' },
                                    r.a.createElement(R.a, {
                                        onClick: function() {
                                            return c(n)
                                        },
                                        type: 'link',
                                        icon: r.a.createElement(V.a, null),
                                    })
                                ),
                            })
                        )
                    }),
                    0 === t.length && r.a.createElement('br', null),
                    r.a.createElement(
                        'button',
                        {
                            className: 'btn btn-link',
                            type: 'button',
                            onClick: o,
                            style: { padding: '5px 0', margin: '5px 0', textDecoration: 'none' },
                        },
                        '+ Add Another URL'
                    ),
                    r.a.createElement('br', null),
                    r.a.createElement(
                        R.a,
                        {
                            type: 'primary',
                            onClick: function(e) {
                                e.preventDefault(), l()
                            },
                        },
                        'Save URLs'
                    ),
                    n &&
                        r.a.createElement(
                            'span',
                            { className: 'text-success', style: { marginLeft: 10 } },
                            'URLs saved.'
                        )
                )
            }
            var z = n(29),
                F = n.n(z),
                q = n(53),
                B = n.n(q),
                J = Object(p.kea)({
                    actions: function() {
                        return { deleteDemoData: !0, demoDataDeleted: !0 }
                    },
                    reducers: function(e) {
                        var t = e.actions
                        return {
                            isDeleted: [
                                !1,
                                H()({}, t.demoDataDeleted, function() {
                                    return !0
                                }),
                            ],
                        }
                    },
                    listeners: function(e) {
                        var t = e.actions
                        e.values
                        return H()(
                            {},
                            t.deleteDemoData,
                            B()(
                                F.a.mark(function e() {
                                    return F.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), S.a.get('delete_demo_data')
                                                    case 3:
                                                        e.sent, t.demoDataDeleted(), (e.next = 10)
                                                        break
                                                    case 7:
                                                        throw ((e.prev = 7), (e.t0 = e.catch(0)), e.t0)
                                                    case 10:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 7]]
                                    )
                                })
                            )
                        )
                    },
                    path: function() {
                        return ['scenes', 'setup', 'DeleteDemoData']
                    },
                }),
                Y = Object(p.kea)({
                    actions: function() {
                        return { deleteDemoData: !0, demoDataDeleted: !0 }
                    },
                    reducers: function(e) {
                        var t = e.actions
                        return {
                            isDeleted: [
                                !1,
                                H()({}, t.demoDataDeleted, function() {
                                    return !0
                                }),
                            ],
                        }
                    },
                    listeners: function(e) {
                        var t = e.actions
                        e.values
                        return H()(
                            {},
                            t.deleteDemoData,
                            B()(
                                F.a.mark(function e() {
                                    return F.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), S.a.get('delete_all_data')
                                                    case 3:
                                                        e.sent, t.demoDataDeleted(), (e.next = 10)
                                                        break
                                                    case 7:
                                                        throw ((e.prev = 7), (e.t0 = e.catch(0)), e.t0)
                                                    case 10:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 7]]
                                    )
                                })
                            )
                        )
                    },
                    path: function() {
                        return ['scenes', 'setup', 'DeleteDemoData/2']
                    },
                })
            function G() {
                var e = Object(p.useValues)(J).isDeleted,
                    t = Object(p.useActions)(J).deleteDemoData,
                    n = Object(p.useValues)(Y).isDeletedAll,
                    a = Object(p.useActions)(Y).deleteAllData
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(R.a, { type: 'primary', danger: !0, onClick: t }, 'Delete demo data'),
                    r.a.createElement(R.a, { type: 'primary', danger: !0, onClick: a }, 'Delete all data'),
                    e && r.a.createElement('p', { className: 'text-success' }, 'Demo data deleted!'),
                    n && r.a.createElement('p', { className: 'text-success' }, 'All data deleted!')
                )
            }
            var Q = Object(p.kea)({
                actions: function() {
                    return {
                        setEditedWebhook: function(e) {
                            return { webhook: e }
                        },
                        saveWebhook: !0,
                        testAndSaveWebhook: !0,
                        setError: function(e) {
                            return { error: e }
                        },
                    }
                },
                reducers: function(e) {
                    var t,
                        n,
                        a,
                        r = e.actions
                    return {
                        editedWebhook: [
                            function(e) {
                                var t, n
                                return null === (t = U.a.selectors.user(e)) ||
                                    void 0 === t ||
                                    null === (n = t.team) ||
                                    void 0 === n
                                    ? void 0
                                    : n.slack_incoming_webhook
                            },
                            H()({}, r.setEditedWebhook, function(e, t) {
                                return t.webhook
                            }),
                        ],
                        isSaving: [
                            !1,
                            ((t = {}),
                            H()(t, r.saveWebhook, function() {
                                return !0
                            }),
                            H()(t, r.testAndSaveWebhook, function() {
                                return !0
                            }),
                            H()(t, r.setError, function() {
                                return !1
                            }),
                            H()(t, U.a.actions.userUpdateSuccess, function(e, t) {
                                return 'slack' !== t.updateKey && e
                            }),
                            H()(t, U.a.actions.userUpdateFailure, function(e, t) {
                                return 'slack' !== t.updateKey && e
                            }),
                            t),
                        ],
                        isSaved: [
                            !1,
                            ((n = {}),
                            H()(n, r.saveWebhook, function() {
                                return !1
                            }),
                            H()(n, r.testAndSaveWebhook, function() {
                                return !1
                            }),
                            H()(n, U.a.actions.userUpdateSuccess, function(e, t) {
                                return 'slack' === t.updateKey || e
                            }),
                            H()(n, r.setEditedWebhook, function() {
                                return !1
                            }),
                            n),
                        ],
                        error: [
                            null,
                            ((a = {}),
                            H()(a, r.saveWebhook, function() {
                                return null
                            }),
                            H()(a, r.testAndSaveWebhook, function() {
                                return null
                            }),
                            H()(a, r.setError, function(e, t) {
                                return t.error
                            }),
                            H()(a, r.setEditedWebhook, function() {
                                return null
                            }),
                            a),
                        ],
                    }
                },
                listeners: function(e) {
                    var t,
                        n = e.actions,
                        a = e.values
                    return (
                        (t = {}),
                        H()(
                            t,
                            n.testAndSaveWebhook,
                            B()(
                                F.a.mark(function e() {
                                    var t, r
                                    return F.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!(t = a.editedWebhook)) {
                                                            e.next = 14
                                                            break
                                                        }
                                                        return (
                                                            (e.prev = 2),
                                                            (e.next = 5),
                                                            S.a.create('api/user/test_slack_webhook', { webhook: t })
                                                        )
                                                    case 5:
                                                        ;(r = e.sent).success ? n.saveWebhook(t) : n.setError(r.error),
                                                            (e.next = 12)
                                                        break
                                                    case 9:
                                                        ;(e.prev = 9), (e.t0 = e.catch(2)), n.setError(e.t0.message)
                                                    case 12:
                                                        e.next = 15
                                                        break
                                                    case 14:
                                                        n.saveWebhook(t)
                                                    case 15:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        },
                                        e,
                                        null,
                                        [[2, 9]]
                                    )
                                })
                            )
                        ),
                        H()(
                            t,
                            n.saveWebhook,
                            B()(
                                F.a.mark(function e() {
                                    return F.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    U.a.actions.userUpdateRequest(
                                                        { team: { slack_incoming_webhook: a.editedWebhook } },
                                                        'slack'
                                                    )
                                                case 1:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )
                        ),
                        t
                    )
                },
                path: function() {
                    return ['scenes', 'setup', 'SlackIntegration']
                },
            })
            function X() {
                var e = Object(p.useValues)(Q),
                    t = e.isSaved,
                    n = e.isSaving,
                    a = e.error,
                    o = e.editedWebhook,
                    c = Object(p.useActions)(Q),
                    s = c.testAndSaveWebhook,
                    l = c.setEditedWebhook
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                        'label',
                        null,
                        'Enter your Slack webhook URL here.',
                        ' ',
                        r.a.createElement(
                            'a',
                            { href: 'https://docs.posthog.com/#/integrations/slack' },
                            'Read the docs to find out how to get this URL.'
                        )
                    ),
                    r.a.createElement(
                        'div',
                        { style: { marginBottom: 5 } },
                        r.a.createElement(A.a, {
                            value: o,
                            size: 'large',
                            onChange: function(e) {
                                return l(e.target.value)
                            },
                            style: { width: 500 },
                            type: 'url',
                        })
                    ),
                    r.a.createElement(
                        R.a,
                        {
                            type: 'primary',
                            onClick: function(e) {
                                e.preventDefault(), s()
                            },
                        },
                        n ? '...' : o ? 'Test & Save' : 'Save'
                    ),
                    a &&
                        r.a.createElement(
                            'span',
                            { className: 'text-danger', style: { marginLeft: 10 } },
                            'Error: ',
                            a
                        ),
                    t &&
                        r.a.createElement(
                            'span',
                            { className: 'text-success', style: { marginLeft: 10 } },
                            o ? 'All good! You should see a message on Slack!' : 'Slack integration removed!'
                        )
                )
            }
            var Z = n(17),
                $ = n.n(Z),
                ee = n(18),
                te = n.n(ee),
                ne = n(7),
                ae = n.n(ne),
                re = n(21),
                oe = n.n(re),
                ce = n(22),
                se = n.n(ce),
                le = n(13),
                ue = n.n(le),
                ie = n(23)
            function de(e) {
                var t = (function() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ('function' == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                })()
                return function() {
                    var n,
                        a = ue()(e)
                    if (t) {
                        var r = ue()(this).constructor
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments)
                    return se()(this, n)
                }
            }
            var pe = (function(e) {
                oe()(n, e)
                var t = de(n)
                function n(e) {
                    var a
                    return (
                        $()(this, n),
                        (a = t.call(this, e)),
                        H()(ae()(a), 'handleChange', function(e) {
                            a.setState(H()({}, e.target.name, e.target.value))
                        }),
                        H()(
                            ae()(a),
                            'save',
                            (function() {
                                var e = B()(
                                    F.a.mark(function e(t) {
                                        return F.a.wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                t.preventDefault(),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                S.a.update('api/user/change_password', {
                                                                    oldPassword: a.state.oldPassword,
                                                                    newPassword: a.state.newPassword,
                                                                })
                                                            )
                                                        case 4:
                                                            ie.c.success('Password changed'), (e.next = 10)
                                                            break
                                                        case 7:
                                                            ;(e.prev = 7), (e.t0 = e.catch(1)), ie.c.error(e.t0.error)
                                                        case 10:
                                                            return (
                                                                (e.prev = 10),
                                                                a.setState({ oldPassword: '', newPassword: '' }),
                                                                e.finish(10)
                                                            )
                                                        case 13:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                            },
                                            e,
                                            null,
                                            [[1, 7, 10, 13]]
                                        )
                                    })
                                )
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            })()
                        ),
                        (a.state = { oldPassword: '', newPassword: '' }),
                        a
                    )
                }
                return (
                    te()(n, [
                        {
                            key: 'render',
                            value: function() {
                                var e = this
                                return r.a.createElement(
                                    'div',
                                    null,
                                    r.a.createElement('label', null, 'Old Password'),
                                    r.a.createElement('br', null),
                                    r.a.createElement(A.a.Password, {
                                        name: 'oldPassword',
                                        required: !0,
                                        onChange: this.handleChange,
                                        value: this.state.oldPassword,
                                        style: { maxWidth: 400 },
                                    }),
                                    r.a.createElement('br', null),
                                    r.a.createElement('label', null, 'New Password'),
                                    r.a.createElement('br', null),
                                    r.a.createElement(A.a.Password, {
                                        name: 'newPassword',
                                        required: !0,
                                        onChange: this.handleChange,
                                        value: this.state.newPassword,
                                        style: { maxWidth: 400 },
                                    }),
                                    r.a.createElement('br', null),
                                    r.a.createElement('br', null),
                                    r.a.createElement(
                                        R.a,
                                        {
                                            type: 'primary',
                                            onClick: function(t) {
                                                t.preventDefault(), e.save()
                                            },
                                        },
                                        'Change Password'
                                    )
                                )
                            },
                        },
                    ]),
                    n
                )
            })(a.Component)
            var fe = n(28)
            function he() {
                var e,
                    t = Object(p.useValues)(U.a).user,
                    n = Object(p.useValues)(fe.router).location
                return (
                    (e = n.hash),
                    Object(a.useEffect)(
                        function() {
                            e &&
                                document.getElementById(e.substr(1)) &&
                                document.getElementById(e.substr(1)).scrollIntoView({ behavior: 'smooth' })
                        },
                        [e]
                    ),
                    r.a.createElement(
                        'div',
                        null,
                        r.a.createElement('h1', { id: 'urls' }, 'Setup your PostHog account'),
                        r.a.createElement(K, null),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'snippet' }, 'Integrate PostHog'),
                        'To integrate PostHog, copy + paste the following snippet to your website. Ideally, put it just above the',
                        ' ',
                        r.a.createElement('pre', { style: { display: 'inline' } }, '</head>'),
                        ' tag.',
                        ' ',
                        r.a.createElement(
                            'a',
                            { href: 'https://docs.posthog.com/#/integrations/js-integration' },
                            'See docs for instructions on how to identify users.'
                        ),
                        r.a.createElement(f.a, { user: t }),
                        r.a.createElement(
                            'a',
                            { href: 'https://docs.posthog.com/#/integrations' },
                            'Using Python/Ruby/Node/Go/PHP instead?'
                        ),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'apikey' }, 'API key'),
                        'You can use this api key in any of our',
                        r.a.createElement('a', { href: 'https://docs.posthog.com/#/integrations' }, ' libraries'),
                        '.',
                        r.a.createElement('pre', { className: 'code' }, t.team.api_token),
                        "This key is write-only, in that it can only create new events. It can't read any events or any of your other data stored on PostHog.",
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'slack' }, 'Slack Integration'),
                        r.a.createElement(X, null),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'invite' }, 'Invite your team'),
                        r.a.createElement(
                            'div',
                            { className: 'row' },
                            r.a.createElement('div', { className: 'col-lg-6' }, r.a.createElement(h.a, { user: t }))
                        ),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'demodata' }, 'Delete HogFlix demo data'),
                        r.a.createElement(G, null),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'password' }, 'Change Password'),
                        r.a.createElement(pe, null),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', { id: 'optout' }, 'Opt out of capturing'),
                        r.a.createElement(_, null),
                        r.a.createElement(d, null),
                        r.a.createElement('h2', null, 'Security and feature updates'),
                        r.a.createElement(N, null)
                    )
                )
            }
        },
    },
])
//# sourceMappingURL=setup.js.map
