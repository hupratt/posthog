;(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
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
                    return A
                }),
                n.d(t, 'm', function() {
                    return S
                }),
                n.d(t, 'd', function() {
                    return N
                }),
                n.d(t, 'e', function() {
                    return R
                }),
                n.d(t, 'b', function() {
                    return k
                }),
                n.d(t, 'a', function() {
                    return D
                }),
                n.d(t, 'c', function() {
                    return P
                }),
                n.d(t, 'n', function() {
                    return x
                }),
                n.d(t, 'g', function() {
                    return C
                }),
                n.d(t, 'f', function() {
                    return T
                }),
                n.d(t, 'l', function() {
                    return I
                }),
                n.d(t, 'i', function() {
                    return _
                }),
                n.d(t, 'h', function() {
                    return q
                }),
                n.d(t, 'k', function() {
                    return J
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
                v = n.n(y)
            function g(e) {
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
                A = function() {
                    return '' != window.location.search
                        ? window.location.search
                              .slice(1)
                              .split('&')
                              .reduce(function(e, t) {
                                  return (e[(t = t.split('='))[0]] = decodeURIComponent(t[1])), e
                              }, {})
                        : {}
                },
                S = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                N = function() {
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
                k = function(e) {
                    return m.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: w({}, e.style) }),
                        m.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function D(e) {
                return m.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && m.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var P = function(e) {
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
            P.propTypes = {
                endpoint: v.a.string.isRequired,
                object: v.a.shape({ name: v.a.string.isRequired, id: v.a.number.isRequired }).isRequired,
                className: v.a.string,
                style: v.a.object,
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
                C = function(e, t, n) {
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
                T = function(e) {
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
                U = Object.entries(I).reverse(),
                _ = function(e) {
                    var t,
                        n = g(U)
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
                q = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        p.a.delete('api/person/' + e.id).then(function() {
                            Object(h.c)('Person succesfully deleted.'), t && t()
                        })
                },
                J = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        569: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Actions', function() {
                    return O
                })
            var r = n(17),
                a = n.n(r),
                c = n(18),
                o = n.n(c),
                i = n(21),
                l = n.n(i),
                u = n(22),
                s = n.n(u),
                f = n(13),
                d = n.n(f),
                m = n(0),
                p = n.n(m),
                h = n(7),
                y = n.n(h),
                v = n(16),
                g = n(27),
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
                        r = d()(e)
                    if (t) {
                        var a = d()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return s()(this, n)
                }
            }
            var w = (function(e) {
                l()(n, e)
                var t = E(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        ((r = t.call(this, e)).state = { actions: [], newEvents: [], loading: !0 }),
                        (r.fetchActions = r.fetchActions.bind(y()(r))),
                        r.fetchActions(),
                        r
                    )
                }
                return (
                    o()(n, [
                        {
                            key: 'fetchActions',
                            value: function() {
                                var e = this
                                clearTimeout(this.poller),
                                    this.state.loading || this.setState({ loading: !0 }),
                                    v.a.get('api/action/?include_count=1').then(function(t) {
                                        e.setState({ actions: t.results, loading: !1 })
                                    })
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.actions,
                                    r = t.loading
                                return p.a.createElement(
                                    'div',
                                    null,
                                    p.a.createElement(
                                        'div',
                                        { className: 'btn-group float-right' },
                                        p.a.createElement(
                                            g.a,
                                            { to: '/action', className: 'btn btn-success' },
                                            p.a.createElement('i', { className: 'fi flaticon-add' }),
                                            '  New action'
                                        )
                                    ),
                                    p.a.createElement('h1', null, 'Actions'),
                                    p.a.createElement(
                                        'p',
                                        { style: { maxWidth: 600 } },
                                        p.a.createElement(
                                            'i',
                                            null,
                                            "Actions are PostHog’s way of easily cleaning up a large amount of Event data. Actions consist of one or more events that you have decided to put into a manually-labelled bucket. They're used in Funnels, Live actions and Trends.",
                                            p.a.createElement('br', null),
                                            p.a.createElement('br', null),
                                            p.a.createElement(
                                                'a',
                                                {
                                                    href: 'https://github.com/PostHog/posthog/wiki/Actions',
                                                    target: '_blank',
                                                },
                                                'See documentation'
                                            )
                                        )
                                    ),
                                    p.a.createElement(
                                        'table',
                                        { className: 'table', style: { position: 'relative' } },
                                        p.a.createElement(
                                            'thead',
                                            null,
                                            p.a.createElement(
                                                'tr',
                                                null,
                                                p.a.createElement('th', { scope: 'col' }, 'Action ID'),
                                                p.a.createElement('th', { scope: 'col' }, 'Volume'),
                                                p.a.createElement('th', { scope: 'col' }, 'Type'),
                                                p.a.createElement('th', null)
                                            )
                                        ),
                                        p.a.createElement(
                                            'tbody',
                                            null,
                                            r && p.a.createElement(b.e, { colSpan: 4, asOverlay: n.length > 0 }),
                                            n &&
                                                0 === n.length &&
                                                p.a.createElement(
                                                    'tr',
                                                    null,
                                                    p.a.createElement('td', null, "You don't have any actions yet.")
                                                ),
                                            n &&
                                                n.map(function(t) {
                                                    return p.a.createElement(
                                                        'tr',
                                                        { key: t.id },
                                                        p.a.createElement(
                                                            'td',
                                                            null,
                                                            p.a.createElement(g.a, { to: '/action/' + t.id }, t.name)
                                                        ),
                                                        p.a.createElement('td', null, t.count),
                                                        p.a.createElement(
                                                            'td',
                                                            null,
                                                            t.steps.map(function(e) {
                                                                return p.a.createElement(
                                                                    'div',
                                                                    { key: e.id },
                                                                    (function() {
                                                                        switch (e.event) {
                                                                            case '$autocapture':
                                                                                return 'Autocapture'
                                                                            case '$pageview':
                                                                                return 'URL matches ' + e.url
                                                                            default:
                                                                                return 'Event: ' + e.event
                                                                        }
                                                                    })()
                                                                )
                                                            })
                                                        ),
                                                        p.a.createElement(
                                                            'td',
                                                            { style: { fontSize: 16 } },
                                                            p.a.createElement(
                                                                g.a,
                                                                { to: '/action/' + t.id },
                                                                p.a.createElement('i', {
                                                                    className: 'fi flaticon-edit',
                                                                })
                                                            ),
                                                            p.a.createElement(
                                                                b.c,
                                                                {
                                                                    endpoint: 'action',
                                                                    object: t,
                                                                    className: 'text-danger',
                                                                    style: { marginLeft: 8 },
                                                                    callback: e.fetchActions,
                                                                },
                                                                p.a.createElement('i', {
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
            })(m.Component)
            function j(e) {
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
                        r = d()(e)
                    if (t) {
                        var a = d()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return s()(this, n)
                }
            }
            var O = (function(e) {
                l()(n, e)
                var t = j(n)
                function n(e) {
                    return a()(this, n), t.call(this, e)
                }
                return (
                    o()(n, [
                        {
                            key: 'render',
                            value: function() {
                                return p.a.createElement(w, this.props)
                            },
                        },
                    ]),
                    n
                )
            })(m.Component)
        },
    },
])
//# sourceMappingURL=actions.js.map
