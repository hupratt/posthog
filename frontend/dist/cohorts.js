;(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return w
            }),
                n.d(t, 'o', function() {
                    return j
                }),
                n.d(t, 'j', function() {
                    return C
                }),
                n.d(t, 'm', function() {
                    return N
                }),
                n.d(t, 'd', function() {
                    return S
                }),
                n.d(t, 'e', function() {
                    return x
                }),
                n.d(t, 'b', function() {
                    return R
                }),
                n.d(t, 'a', function() {
                    return D
                }),
                n.d(t, 'c', function() {
                    return k
                }),
                n.d(t, 'n', function() {
                    return A
                }),
                n.d(t, 'g', function() {
                    return P
                }),
                n.d(t, 'f', function() {
                    return H
                }),
                n.d(t, 'l', function() {
                    return I
                }),
                n.d(t, 'i', function() {
                    return T
                }),
                n.d(t, 'h', function() {
                    return q
                }),
                n.d(t, 'k', function() {
                    return U
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
                p = n.n(d),
                m = n(16),
                h = n(23),
                v = n(1),
                y = n.n(v)
            function b(e) {
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (e = (function(e, t) {
                            if (!e) return
                            if ('string' == typeof e) return g(e, t)
                            var n = Object.prototype.toString.call(e).slice(8, -1)
                            'Object' === n && e.constructor && (n = e.constructor.name)
                            if ('Map' === n || 'Set' === n) return Array.from(e)
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
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
            function g(e, t) {
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
            function O(e) {
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
            function w() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                    return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
                })
            }
            var j = function(e) {
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
                C = function() {
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
                S = function() {
                    return p.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        p.a.createElement('div', null),
                        p.a.createElement(i.a, null)
                    )
                },
                x = function(e) {
                    var t = e.colSpan,
                        n = void 0 === t ? 1 : t,
                        r = e.asOverlay,
                        a = void 0 !== r && r
                    return p.a.createElement(
                        'tr',
                        { className: a ? 'loading-overlay over-table' : '' },
                        p.a.createElement(
                            'td',
                            { colSpan: n, style: { padding: 50, textAlign: 'center' } },
                            p.a.createElement(i.a, null)
                        )
                    )
                },
                R = function(e) {
                    return p.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: O({}, e.style) }),
                        p.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function D(e) {
                return p.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && p.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var k = function(e) {
                return p.a.createElement(
                    'a',
                    {
                        href: '#',
                        onClick: function(t) {
                            t.preventDefault(),
                                (function t(n) {
                                    m.a
                                        .update(
                                            'api/' + e.endpoint + '/' + e.object.id,
                                            O(O({}, e.object), {}, { deleted: !n })
                                        )
                                        .then(function() {
                                            e.callback()
                                            var r = p.a.createElement(
                                                'div',
                                                null,
                                                n
                                                    ? p.a.createElement('span', null, 'Delete un-done')
                                                    : p.a.createElement(
                                                          'span',
                                                          null,
                                                          '"',
                                                          p.a.createElement('strong', null, e.object.name),
                                                          '" deleted.',
                                                          ' ',
                                                          p.a.createElement(
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
            k.propTypes = {
                endpoint: y.a.string.isRequired,
                object: y.a.shape({ name: y.a.string.isRequired, id: y.a.number.isRequired }).isRequired,
                className: y.a.string,
                style: y.a.object,
            }
            var A = {
                    control: function(e) {
                        return O(O({}, e), {}, { height: 31, minHeight: 31 })
                    },
                    indicatorsContainer: function(e) {
                        return O(O({}, e), {}, { height: 31 })
                    },
                    input: function(e) {
                        return O(O({}, e), {}, { paddingBottom: 0, paddingTop: 0, margin: 0, opacity: 1 })
                    },
                    valueContainer: function(e) {
                        return O(O({}, e), {}, { padding: '0 8px', marginTop: -2 })
                    },
                    option: function(e) {
                        return O(O({}, e), {}, { padding: '2px 15px' })
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
                H = function(e) {
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
                M = Object.entries(I).reverse(),
                T = function(e) {
                    var t,
                        n = b(M)
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
                        m.a.delete('api/person/' + e.id).then(function() {
                            Object(h.c)('Person succesfully deleted.'), t && t()
                        })
                },
                U = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        504: function(e, t, n) {
            'use strict'
            var r = n(0),
                a = {
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
                c = n(14),
                o = function(e, t) {
                    return r.createElement(c.a, Object.assign({}, e, { ref: t, icon: a }))
                }
            o.displayName = 'DeleteOutlined'
            t.a = r.forwardRef(o)
        },
        554: function(e, t, n) {
            'use strict'
            var r = n(0),
                a = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d:
                                        'M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z',
                                },
                            },
                        ],
                    },
                    name: 'export',
                    theme: 'outlined',
                },
                c = n(14),
                o = function(e, t) {
                    return r.createElement(c.a, Object.assign({}, e, { ref: t, icon: a }))
                }
            o.displayName = 'ExportOutlined'
            t.a = r.forwardRef(o)
        },
        561: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Cohorts', function() {
                    return C
                })
            n(180)
            var r = n(112),
                a = n(17),
                c = n.n(a),
                o = n(18),
                i = n.n(o),
                l = n(7),
                u = n.n(l),
                s = n(21),
                f = n.n(s),
                d = n(22),
                p = n.n(d),
                m = n(13),
                h = n.n(m),
                v = n(0),
                y = n.n(v),
                b = n(27),
                g = n(127),
                E = n(554),
                O = n(504),
                w = n(16)
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
                        r = h()(e)
                    if (t) {
                        var a = h()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return p()(this, n)
                }
            }
            var C = (function(e) {
                f()(n, e)
                var t = j(n)
                function n(e) {
                    var r
                    return (
                        c()(this, n),
                        ((r = t.call(this, e)).state = { loading: !0, cohorts: [] }),
                        (r.fetchCohorts = r.fetchCohorts.bind(u()(r))),
                        r.fetchCohorts(),
                        r
                    )
                }
                return (
                    i()(n, [
                        {
                            key: 'fetchCohorts',
                            value: function() {
                                var e = this
                                w.a.get('api/cohort').then(function(t) {
                                    return e.setState({ cohorts: t.results, loading: !1 })
                                })
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.cohorts,
                                    a = t.loading
                                return y.a.createElement(
                                    'div',
                                    null,
                                    y.a.createElement('h1', null, 'Cohorts'),
                                    y.a.createElement(
                                        b.a,
                                        { to: '/people?new_cohort=', className: 'btn btn-outline-success btn-sm' },
                                        '+ new cohort'
                                    ),
                                    y.a.createElement('br', null),
                                    y.a.createElement('br', null),
                                    y.a.createElement(
                                        'table',
                                        { className: 'table', style: { position: 'relative' } },
                                        y.a.createElement(
                                            'thead',
                                            null,
                                            y.a.createElement(
                                                'tr',
                                                null,
                                                y.a.createElement('th', null, 'Cohort name'),
                                                y.a.createElement('th', null, 'Actions')
                                            )
                                        ),
                                        y.a.createElement(
                                            'tbody',
                                            null,
                                            a && y.a.createElement(g.e, { colSpan: 2, asOverlay: n.length > 0 }),
                                            n &&
                                                n.map(function(t) {
                                                    return y.a.createElement(
                                                        'tr',
                                                        { key: t.id },
                                                        y.a.createElement(
                                                            'td',
                                                            null,
                                                            y.a.createElement(
                                                                b.a,
                                                                { to: '/people?cohort=' + t.id },
                                                                t.name
                                                            )
                                                        ),
                                                        y.a.createElement(
                                                            'td',
                                                            null,
                                                            y.a.createElement(
                                                                'a',
                                                                { href: '/api/person.csv?cohort=' + t.id },
                                                                y.a.createElement(
                                                                    r.a,
                                                                    {
                                                                        title:
                                                                            'Export all users in this cohort as a .csv file',
                                                                    },
                                                                    y.a.createElement(E.a, null)
                                                                )
                                                            ),
                                                            y.a.createElement(
                                                                g.c,
                                                                {
                                                                    endpoint: 'cohort',
                                                                    object: t,
                                                                    className: 'text-danger',
                                                                    style: { marginLeft: 8 },
                                                                    callback: e.fetchCohorts,
                                                                },
                                                                y.a.createElement(O.a, null)
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
            })(v.Component)
        },
    },
])
//# sourceMappingURL=cohorts.js.map
