;(window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return j
            }),
                n.d(t, 'o', function() {
                    return O
                }),
                n.d(t, 'j', function() {
                    return S
                }),
                n.d(t, 'm', function() {
                    return N
                }),
                n.d(t, 'd', function() {
                    return k
                }),
                n.d(t, 'e', function() {
                    return R
                }),
                n.d(t, 'b', function() {
                    return A
                }),
                n.d(t, 'a', function() {
                    return C
                }),
                n.d(t, 'c', function() {
                    return D
                }),
                n.d(t, 'n', function() {
                    return x
                }),
                n.d(t, 'g', function() {
                    return P
                }),
                n.d(t, 'f', function() {
                    return F
                }),
                n.d(t, 'l', function() {
                    return I
                }),
                n.d(t, 'i', function() {
                    return q
                }),
                n.d(t, 'h', function() {
                    return U
                }),
                n.d(t, 'k', function() {
                    return _
                })
            var r = n(42),
                a = n.n(r),
                c = n(6),
                o = n.n(c),
                i = (n(129), n(75)),
                l = n(12),
                u = n.n(l),
                s = n(96),
                f = n.n(s),
                d = n(0),
                m = n.n(d),
                p = n(16),
                h = n(23),
                y = n(1),
                g = n.n(y)
            function v(e) {
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (e = (function(e, t) {
                            if (!e) return
                            if ('string' == typeof e) return b(e, t)
                            var n = Object.prototype.toString.call(e).slice(8, -1)
                            'Object' === n && e.constructor && (n = e.constructor.name)
                            if ('Map' === n || 'Set' === n) return Array.from(e)
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                        })(e))
                    ) {
                        var t = 0,
                            n = function() {}
                        return {
                            s: n,
                            n: function() {
                                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n,
                        }
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    )
                }
                var r,
                    a,
                    c = !0,
                    o = !1
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next()
                        return (c = e.done), e
                    },
                    e: function(e) {
                        ;(o = !0), (a = e)
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (o) throw a
                        }
                    },
                }
            }
            function b(e, t) {
                ;(null == t || t > e.length) && (t = e.length)
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
                return r
            }
            function E(e, t) {
                var n = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e)
                    t &&
                        (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        n.push.apply(n, r)
                }
                return n
            }
            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? E(Object(n), !0).forEach(function(t) {
                              o()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : E(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function j() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                    return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
                })
            }
            var O = function(e) {
                    return Object.entries(e)
                        .filter(function(e) {
                            var t = u()(e, 2)
                            t[0]
                            return t[1]
                        })
                        .map(function(e) {
                            var t = u()(e, 2),
                                n = t[0],
                                r = t[1]
                            return ''.concat(n, '=').concat(
                                (function(e) {
                                    return e._isAMomentObject
                                        ? encodeURIComponent(e.format('YYYY-MM-DD'))
                                        : ((e = 'object' === f()(e) ? JSON.stringify(e) : e), encodeURIComponent(e))
                                })(r)
                            )
                        })
                        .join('&')
                },
                S = function() {
                    return '' != window.location.search
                        ? window.location.search
                              .slice(1)
                              .split('&')
                              .reduce(function(e, t) {
                                  return (e[(t = t.split('='))[0]] = decodeURIComponent(t[1])), e
                              }, {})
                        : {}
                },
                N = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                k = function() {
                    return m.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        m.a.createElement('div', null),
                        m.a.createElement(i.a, null)
                    )
                },
                R = function(e) {
                    var t = e.colSpan,
                        n = void 0 === t ? 1 : t,
                        r = e.asOverlay,
                        a = void 0 !== r && r
                    return m.a.createElement(
                        'tr',
                        { className: a ? 'loading-overlay over-table' : '' },
                        m.a.createElement(
                            'td',
                            { colSpan: n, style: { padding: 50, textAlign: 'center' } },
                            m.a.createElement(i.a, null)
                        )
                    )
                },
                A = function(e) {
                    return m.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: w({}, e.style) }),
                        m.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function C(e) {
                return m.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && m.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var D = function(e) {
                return m.a.createElement(
                    'a',
                    {
                        href: '#',
                        onClick: function(t) {
                            t.preventDefault(),
                                (function t(n) {
                                    p.a
                                        .update(
                                            'api/' + e.endpoint + '/' + e.object.id,
                                            w(w({}, e.object), {}, { deleted: !n })
                                        )
                                        .then(function() {
                                            e.callback()
                                            var r = m.a.createElement(
                                                'div',
                                                null,
                                                n
                                                    ? m.a.createElement('span', null, 'Delete un-done')
                                                    : m.a.createElement(
                                                          'span',
                                                          null,
                                                          '"',
                                                          m.a.createElement('strong', null, e.object.name),
                                                          '" deleted.',
                                                          ' ',
                                                          m.a.createElement(
                                                              'a',
                                                              {
                                                                  href: '#',
                                                                  onClick: function(e) {
                                                                      e.preventDefault(), t(!0)
                                                                  },
                                                              },
                                                              'Click here to undo'
                                                          )
                                                      )
                                            )
                                            Object(h.c)(r, { toastId: 'delete-item-' + e.object.id })
                                        })
                                })()
                        },
                        className: e.className,
                        style: e.style,
                    },
                    e.children
                )
            }
            D.propTypes = {
                endpoint: g.a.string.isRequired,
                object: g.a.shape({ name: g.a.string.isRequired, id: g.a.number.isRequired }).isRequired,
                className: g.a.string,
                style: g.a.object,
            }
            var x = {
                    control: function(e) {
                        return w(w({}, e), {}, { height: 31, minHeight: 31 })
                    },
                    indicatorsContainer: function(e) {
                        return w(w({}, e), {}, { height: 31 })
                    },
                    input: function(e) {
                        return w(w({}, e), {}, { paddingBottom: 0, paddingTop: 0, margin: 0, opacity: 1 })
                    },
                    valueContainer: function(e) {
                        return w(w({}, e), {}, { padding: '0 8px', marginTop: -2 })
                    },
                    option: function(e) {
                        return w(w({}, e), {}, { padding: '2px 15px' })
                    },
                },
                P = function(e, t, n) {
                    var r
                    return function() {
                        var a = this,
                            c = arguments,
                            o = function() {
                                ;(r = null), n || e.apply(a, c)
                            },
                            i = n && !r
                        clearTimeout(r), (r = setTimeout(o, t)), i && e.apply(a, c)
                    }
                },
                F = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                I = {
                    exact: '= equals',
                    is_not: "≠ doesn't equal",
                    icontains: '∋ contains',
                    not_icontains: "∌ doesn't contain",
                    gt: '> greater than',
                    lt: '< lower than',
                },
                T = Object.entries(I).reverse(),
                q = function(e) {
                    var t,
                        n = v(T)
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = u()(t.value, 2),
                                a = r[0],
                                c = r[1]
                            if (e.includes(a)) return e.replace('__' + a, '') + ' '.concat(c.split(' ')[0], ' ')
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return e + ' '.concat(I.exact.split(' ')[0], ' ')
                },
                U = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        p.a.delete('api/person/' + e.id).then(function() {
                            Object(h.c)('Person succesfully deleted.'), t && t()
                        })
                },
                _ = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        559: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Funnels', function() {
                    return w
                })
            var r = n(17),
                a = n.n(r),
                c = n(18),
                o = n.n(c),
                i = n(7),
                l = n.n(i),
                u = n(21),
                s = n.n(u),
                f = n(22),
                d = n.n(f),
                m = n(13),
                p = n.n(m),
                h = n(0),
                y = n.n(h),
                g = n(27),
                v = n(16),
                b = n(127)
            function E(e) {
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
                        r = p()(e)
                    if (t) {
                        var a = p()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return d()(this, n)
                }
            }
            var w = (function(e) {
                s()(n, e)
                var t = E(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        ((r = t.call(this, e)).state = { loading: !0, funnels: [] }),
                        (r.fetchFunnels = r.fetchFunnels.bind(l()(r))),
                        r.fetchFunnels(),
                        r
                    )
                }
                return (
                    o()(n, [
                        {
                            key: 'fetchFunnels',
                            value: function() {
                                var e = this
                                v.a.get('api/funnel').then(function(t) {
                                    e.setState({ funnels: t.results, loading: !1 })
                                })
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this
                                return y.a.createElement(
                                    'div',
                                    null,
                                    y.a.createElement(
                                        g.a,
                                        { to: '/funnel/new', className: 'btn btn-outline-success float-right' },
                                        y.a.createElement('i', { className: 'fi flaticon-add' }),
                                        '  New funnel'
                                    ),
                                    y.a.createElement('h1', null, 'Funnels'),
                                    y.a.createElement(
                                        'p',
                                        { style: { maxWidth: 600 } },
                                        y.a.createElement(
                                            'i',
                                            null,
                                            'If you need your users to carry out a series of actions in a row, funnels are a way of working out where users are dropping off.',
                                            ' ',
                                            y.a.createElement(
                                                'a',
                                                {
                                                    href: 'https://github.com/PostHog/posthog/wiki/Funnels',
                                                    target: '_blank',
                                                },
                                                'See documentation'
                                            )
                                        )
                                    ),
                                    y.a.createElement(
                                        'table',
                                        { className: 'table' },
                                        y.a.createElement(
                                            'thead',
                                            null,
                                            y.a.createElement(
                                                'tr',
                                                null,
                                                y.a.createElement('th', null, 'Funnel name'),
                                                y.a.createElement('th', null, 'Actions')
                                            )
                                        ),
                                        y.a.createElement(
                                            'tbody',
                                            null,
                                            this.state.loading &&
                                                y.a.createElement(b.e, {
                                                    colSpan: 2,
                                                    asOverlay: this.state.funnels.length > 0,
                                                }),
                                            this.state.funnels &&
                                                0 === this.state.funnels.length &&
                                                y.a.createElement(
                                                    'tr',
                                                    null,
                                                    y.a.createElement(
                                                        'td',
                                                        { colSpan: '6' },
                                                        "You haven't created any funnels yet.",
                                                        ' ',
                                                        y.a.createElement(
                                                            g.a,
                                                            { to: '/funnel/new' },
                                                            'Click here to create one!'
                                                        )
                                                    )
                                                ),
                                            this.state.funnels &&
                                                this.state.funnels.map(function(t) {
                                                    return y.a.createElement(
                                                        'tr',
                                                        { key: t.id },
                                                        y.a.createElement(
                                                            'td',
                                                            null,
                                                            y.a.createElement(
                                                                g.a,
                                                                { to: '/funnel/'.concat(t.id) },
                                                                t.name
                                                            )
                                                        ),
                                                        y.a.createElement(
                                                            'td',
                                                            { style: { fontSize: 16 } },
                                                            y.a.createElement(
                                                                g.a,
                                                                { to: '/funnel/'.concat(t.id) },
                                                                y.a.createElement('i', {
                                                                    className: 'fi flaticon-edit',
                                                                })
                                                            ),
                                                            y.a.createElement(
                                                                b.c,
                                                                {
                                                                    endpoint: 'funnel',
                                                                    object: t,
                                                                    className: 'text-danger',
                                                                    style: { marginLeft: 8 },
                                                                    callback: e.fetchFunnels,
                                                                },
                                                                y.a.createElement('i', {
                                                                    className: 'fi flaticon-basket',
                                                                })
                                                            )
                                                        )
                                                    )
                                                })
                                        )
                                    )
                                )
                            },
                        },
                    ]),
                    n
                )
            })(h.Component)
        },
    },
])
//# sourceMappingURL=funnels.js.map
