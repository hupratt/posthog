;(window.webpackJsonp = window.webpackJsonp || []).push([
    [8],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return E
            }),
                n.d(t, 'o', function() {
                    return S
                }),
                n.d(t, 'j', function() {
                    return j
                }),
                n.d(t, 'm', function() {
                    return k
                }),
                n.d(t, 'd', function() {
                    return C
                }),
                n.d(t, 'e', function() {
                    return D
                }),
                n.d(t, 'b', function() {
                    return R
                }),
                n.d(t, 'a', function() {
                    return P
                }),
                n.d(t, 'c', function() {
                    return _
                }),
                n.d(t, 'n', function() {
                    return x
                }),
                n.d(t, 'g', function() {
                    return A
                }),
                n.d(t, 'f', function() {
                    return N
                }),
                n.d(t, 'l', function() {
                    return I
                }),
                n.d(t, 'i', function() {
                    return U
                }),
                n.d(t, 'h', function() {
                    return L
                }),
                n.d(t, 'k', function() {
                    return F
                })
            var r = n(42),
                a = n.n(r),
                o = n(6),
                i = n.n(o),
                c = (n(129), n(75)),
                s = n(12),
                u = n.n(s),
                l = n(96),
                f = n.n(l),
                p = n(0),
                d = n.n(p),
                h = n(16),
                v = n(23),
                y = n(1),
                m = n.n(y)
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
                    o = !0,
                    i = !1
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next()
                        return (o = e.done), e
                    },
                    e: function(e) {
                        ;(i = !0), (a = e)
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (i) throw a
                        }
                    },
                }
            }
            function g(e, t) {
                ;(null == t || t > e.length) && (t = e.length)
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
                return r
            }
            function w(e, t) {
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
                        ? w(Object(n), !0).forEach(function(t) {
                              i()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : w(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function E() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                    return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
                })
            }
            var S = function(e) {
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
                j = function() {
                    return '' != window.location.search
                        ? window.location.search
                              .slice(1)
                              .split('&')
                              .reduce(function(e, t) {
                                  return (e[(t = t.split('='))[0]] = decodeURIComponent(t[1])), e
                              }, {})
                        : {}
                },
                k = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                C = function() {
                    return d.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        d.a.createElement('div', null),
                        d.a.createElement(c.a, null)
                    )
                },
                D = function(e) {
                    var t = e.colSpan,
                        n = void 0 === t ? 1 : t,
                        r = e.asOverlay,
                        a = void 0 !== r && r
                    return d.a.createElement(
                        'tr',
                        { className: a ? 'loading-overlay over-table' : '' },
                        d.a.createElement(
                            'td',
                            { colSpan: n, style: { padding: 50, textAlign: 'center' } },
                            d.a.createElement(c.a, null)
                        )
                    )
                },
                R = function(e) {
                    return d.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: O({}, e.style) }),
                        d.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function P(e) {
                return d.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && d.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var _ = function(e) {
                return d.a.createElement(
                    'a',
                    {
                        href: '#',
                        onClick: function(t) {
                            t.preventDefault(),
                                (function t(n) {
                                    h.a
                                        .update(
                                            'api/' + e.endpoint + '/' + e.object.id,
                                            O(O({}, e.object), {}, { deleted: !n })
                                        )
                                        .then(function() {
                                            e.callback()
                                            var r = d.a.createElement(
                                                'div',
                                                null,
                                                n
                                                    ? d.a.createElement('span', null, 'Delete un-done')
                                                    : d.a.createElement(
                                                          'span',
                                                          null,
                                                          '"',
                                                          d.a.createElement('strong', null, e.object.name),
                                                          '" deleted.',
                                                          ' ',
                                                          d.a.createElement(
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
                                            Object(v.c)(r, { toastId: 'delete-item-' + e.object.id })
                                        })
                                })()
                        },
                        className: e.className,
                        style: e.style,
                    },
                    e.children
                )
            }
            _.propTypes = {
                endpoint: m.a.string.isRequired,
                object: m.a.shape({ name: m.a.string.isRequired, id: m.a.number.isRequired }).isRequired,
                className: m.a.string,
                style: m.a.object,
            }
            var x = {
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
                A = function(e, t, n) {
                    var r
                    return function() {
                        var a = this,
                            o = arguments,
                            i = function() {
                                ;(r = null), n || e.apply(a, o)
                            },
                            c = n && !r
                        clearTimeout(r), (r = setTimeout(i, t)), c && e.apply(a, o)
                    }
                },
                N = function(e) {
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
                U = function(e) {
                    var t,
                        n = b(T)
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = u()(t.value, 2),
                                a = r[0],
                                o = r[1]
                            if (e.includes(a)) return e.replace('__' + a, '') + ' '.concat(o.split(' ')[0], ' ')
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return e + ' '.concat(I.exact.split(' ')[0], ' ')
                },
                L = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        h.a.delete('api/person/' + e.id).then(function() {
                            Object(v.c)('Person succesfully deleted.'), t && t()
                        })
                },
                F = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        317: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return g
            }),
                n.d(t, 'd', function() {
                    return w
                }),
                n.d(t, 'c', function() {
                    return O
                }),
                n.d(t, 'b', function() {
                    return E
                }),
                n.d(t, 'e', function() {
                    return C
                })
            var r = n(29),
                a = n.n(r),
                o = n(53),
                i = n.n(o),
                c = n(67),
                s = n.n(c),
                u = n(6),
                l = n.n(u),
                f = n(9),
                p = n(16),
                d = n(127),
                h = n(322),
                v = n(26),
                y = n(28)
            function m(e, t) {
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
            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? m(Object(n), !0).forEach(function(t) {
                              l()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : m(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var g = { ACTIONS: 'actions', EVENTS: 'events', NEW_ENTITY: 'new_entity' },
                w = {
                    dStart: !1,
                    '-1d': !1,
                    '-7d': !0,
                    '-14d': !0,
                    '-30d': !0,
                    '-90d': !0,
                    mStart: !0,
                    '-1mStart': !0,
                    yStart: !0,
                    all: !0,
                },
                O = {
                    dStart: !1,
                    '-1d': !1,
                    '-7d': !1,
                    '-14d': !1,
                    '-30d': !1,
                    '-90d': !0,
                    mStart: !1,
                    '-1mStart': !1,
                    yStart: !0,
                    all: !0,
                },
                E = { FILTERS: 'FILTERS', SESSIONS: 'SESSIONS' }
            function S(e) {
                return b(
                    b({}, e),
                    {},
                    {
                        interval: k(e),
                        display: e.session && 'dist' === e.session ? 'ActionsTable' : e.display,
                        actions: Array.isArray(e.actions) ? e.actions : void 0,
                        events: Array.isArray(e.events) ? e.events : void 0,
                        properties: e.properties || {},
                    }
                )
            }
            function j(e) {
                e.people_day, e.people_action, e.stickiness_days
                return s()(e, ['people_day', 'people_action', 'stickiness_days'])
            }
            function k(e) {
                var t = e.date_from,
                    n = e.interval
                if (!n) return 'day'
                var r = w[t] && 'minute' === n,
                    a = O[t] && 'hour' === n
                return r ? 'hour' : a ? 'day' : n
            }
            var C = Object(f.kea)({
                key: function(e) {
                    return e.dashboardItemId || 'all_trends'
                },
                connect: { values: [v.a, ['eventNames'], h.a, ['actions']] },
                loaders: function(e) {
                    var t,
                        n = e.values
                    return {
                        results: {
                            loadResults:
                                ((t = i()(
                                    a.a.mark(function e() {
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (n.activeView !== E.SESSIONS) {
                                                            e.next = 4
                                                            break
                                                        }
                                                        return (
                                                            (e.next = 3),
                                                            p.a.get('api/event/sessions/?' + Object(d.o)(j(n.filters)))
                                                        )
                                                    case 3:
                                                        return e.abrupt('return', e.sent)
                                                    case 4:
                                                        return (
                                                            (e.next = 6),
                                                            p.a.get('api/action/trends/?' + Object(d.o)(j(n.filters)))
                                                        )
                                                    case 6:
                                                        return e.abrupt('return', e.sent)
                                                    case 7:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )),
                                function() {
                                    return t.apply(this, arguments)
                                }),
                        },
                    }
                },
                actions: function() {
                    return {
                        setFilters: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            return { filters: e, mergeFilters: t, fromUrl: n }
                        },
                        setDisplay: function(e) {
                            return { display: e }
                        },
                        loadPeople: function(e, t, n) {
                            return { action: e, day: t, breakdown_value: n }
                        },
                        setShowingPeople: function(e) {
                            return { isShowing: e }
                        },
                        setPeople: function(e, t, n, r, a) {
                            return { people: e, count: t, action: n, day: r, breakdown_value: a }
                        },
                        setActiveView: function(e) {
                            return { type: e }
                        },
                        setCachedUrl: function(e, t) {
                            return { type: e, url: t }
                        },
                    }
                },
                reducers: function(e) {
                    var t,
                        n,
                        r = e.actions,
                        a = e.props
                    return {
                        filters: [
                            a.dashboardItemId
                                ? a.filters
                                : function(e) {
                                      return S(y.router.selectors.searchParams(e))
                                  },
                            l()({}, r.setFilters, function(e, t) {
                                var n = t.filters
                                return S(b(b({}, t.mergeFilters ? e : {}), n))
                            }),
                        ],
                        people: [
                            null,
                            ((t = {}),
                            l()(t, r.setFilters, function() {
                                return null
                            }),
                            l()(t, r.setPeople, function(e, t) {
                                return t
                            }),
                            t),
                        ],
                        cachedUrls: [
                            {},
                            l()({}, r.setCachedUrl, function(e, t) {
                                var n = t.type,
                                    r = t.url
                                return b(b({}, e), {}, l()({}, n, r))
                            }),
                        ],
                        showingPeople: [
                            !1,
                            ((n = {}),
                            l()(n, r.loadPeople, function() {
                                return !0
                            }),
                            l()(n, r.setShowingPeople, function(e, t) {
                                return t.isShowing
                            }),
                            n),
                        ],
                    }
                },
                selectors: function(e) {
                    var t = e.selectors
                    return {
                        activeView: [
                            function() {
                                return [t.filters]
                            },
                            function(e) {
                                return e.session ? E.SESSIONS : E.FILTERS
                            },
                        ],
                        peopleAction: [
                            function() {
                                return [t.filters, t.actions]
                            },
                            function(e, t) {
                                return e.people_action
                                    ? t.find(function(t) {
                                          return t.id === parseInt(e.people_action)
                                      })
                                    : null
                            },
                        ],
                        peopleDay: [
                            function() {
                                return [t.filters]
                            },
                            function(e) {
                                return e.people_day
                            },
                        ],
                    }
                },
                listeners: function(e) {
                    var t,
                        n,
                        r,
                        o = e.actions,
                        c = e.values
                    return (
                        (t = {}),
                        l()(
                            t,
                            o.setDisplay,
                            ((r = i()(
                                a.a.mark(function e(t) {
                                    var n
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(n = t.display), o.setFilters({ display: n })
                                                case 2:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function(e) {
                                return r.apply(this, arguments)
                            })
                        ),
                        l()(
                            t,
                            o.loadPeople,
                            ((n = i()(
                                a.a.mark(function e(t, n) {
                                    var r, i, s, u, f, h, v, y
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (s = t.action),
                                                        (u = t.day),
                                                        (f = t.breakdown_value),
                                                        (h = j(
                                                            b(b({}, c.filters), {}, { entityId: s.id, type: s.type })
                                                        )),
                                                        'Stickiness' === c.filters.shown_as
                                                            ? (h.stickiness_days = u)
                                                            : ((h.date_from = u), (h.date_to = u)),
                                                        f &&
                                                            (h.properties = b(
                                                                b({}, h.properties),
                                                                {},
                                                                l()({}, h.breakdown, f)
                                                            )),
                                                        (v = Object(d.o)(h)),
                                                        o.setPeople(null, null, s, u, f),
                                                        (e.next = 8),
                                                        p.a.get('api/action/people/?include_last_event=1&'.concat(v))
                                                    )
                                                case 8:
                                                    ;(y = e.sent),
                                                        n(),
                                                        o.setPeople(
                                                            null === (r = y[0]) || void 0 === r ? void 0 : r.people,
                                                            null === (i = y[0]) || void 0 === i ? void 0 : i.count,
                                                            s,
                                                            u,
                                                            f
                                                        )
                                                case 11:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function(e, t) {
                                return n.apply(this, arguments)
                            })
                        ),
                        t
                    )
                },
                actionToUrl: function(e) {
                    var t,
                        n = e.actions,
                        r = e.values,
                        a = e.props
                    return (
                        (t = {}),
                        l()(t, n.setFilters, function(e) {
                            var t = e.fromUrl
                            if (!a.dashboardItemId) return t ? void 0 : ['/trends', r.filters]
                        }),
                        l()(t, n.setActiveView, function(e) {
                            var t = e.type
                            if (!a.dashboardItemId) {
                                n.setCachedUrl(r.activeView, window.location.pathname + window.location.search)
                                var o = r.cachedUrls[t]
                                return o || ['/trends', t === E.SESSIONS ? { session: 'avg' } : {}]
                            }
                        }),
                        t
                    )
                },
                urlToAction: function(e) {
                    var t = e.actions,
                        n = e.values,
                        r = e.props
                    return {
                        '/trends': function(e, a) {
                            if (!r.dashboardItemId) {
                                var o = S(a)
                                if (0 === Object.keys(a).length && n.eventNames && n.eventNames[0]) {
                                    var i = n.eventNames.includes('$pageview')
                                        ? '$pageview'
                                        : n.eventNames.includes('$screen')
                                        ? '$screen'
                                        : n.eventNames[0]
                                    o[g.EVENTS] = [{ id: i, name: i, type: g.EVENTS, order: 0 }]
                                }
                                Object(d.k)(o, n.filters) || t.setFilters(o, !1, !0)
                            }
                        },
                    }
                },
                path: function(e) {
                    return ['scenes', 'trends', 'trendsLogic', e]
                },
            })
        },
        322: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return l
            })
            var r = n(29),
                a = n.n(r),
                o = n(53),
                i = n.n(o),
                c = n(9),
                s = n(16),
                u = function(e, t) {
                    return (
                        e.steps.filter(function(e) {
                            return e.event == t
                        }).length > 0
                    )
                },
                l = Object(c.kea)({
                    loaders: function() {
                        return {
                            actions: {
                                __default: [],
                                loadActions:
                                    ((e = i()(
                                        a.a.mark(function e() {
                                            var t
                                            return a.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), s.a.get('api/action')
                                                        case 2:
                                                            return (t = e.sent), e.abrupt('return', t.results)
                                                        case 4:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                            }, e)
                                        })
                                    )),
                                    function() {
                                        return e.apply(this, arguments)
                                    }),
                            },
                        }
                        var e
                    },
                    selectors: function(e) {
                        var t = e.selectors
                        return {
                            actionsGrouped: [
                                function() {
                                    return [t.actions]
                                },
                                function(e) {
                                    var t = [
                                        { label: 'Autocapture', options: [] },
                                        { label: 'Event', options: [] },
                                        { label: 'Pageview', options: [] },
                                    ]
                                    return (
                                        e.forEach(function(e) {
                                            var n = { label: e.name, value: e.id }
                                            u(e, '$autocapture') && t[0].options.push(n),
                                                u(e, '$pageview') && t[2].options.push(n),
                                                u(e, '$autocapture') || u(e, '$pageview') || t[1].options.push(n)
                                        }),
                                        t
                                    )
                                },
                            ],
                        }
                    },
                    events: function(e) {
                        return { afterMount: e.actions.loadActions }
                    },
                    path: function() {
                        return ['models', 'actionsModel']
                    },
                })
        },
        359: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return N
            })
            var r = n(12),
                a = n.n(r),
                o = n(311),
                i = n.n(o),
                c = n(17),
                s = n.n(c),
                u = n(18),
                l = n.n(u),
                f = n(7),
                p = n.n(f),
                d = n(21),
                h = n.n(d),
                v = n(22),
                y = n.n(v),
                m = n(13),
                b = n.n(m),
                g = n(6),
                w = n.n(g),
                O = n(0),
                E = n.n(O),
                S = n(397),
                j = n.n(S),
                k = n(1),
                C = n.n(k),
                D = n(127),
                R = n(401),
                P = n.n(R)
            function _(e, t) {
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
            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? _(Object(n), !0).forEach(function(t) {
                              w()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : _(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function A(e) {
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
                        r = b()(e)
                    if (t) {
                        var a = b()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return y()(this, n)
                }
            }
            j.a.defaults.global.legend.display = !1
            var N = (function(e) {
                h()(n, e)
                var t = A(n)
                function n() {
                    var e
                    s()(this, n)
                    for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
                    return (
                        (e = t.call.apply(t, [this].concat(o))),
                        w()(p()(e), 'chartRef', E.a.createRef()),
                        w()(p()(e), 'processDataset', function(t, n) {
                            var r = ['blue', 'orange', 'green', 'red', 'purple', 'gray'],
                                a = function(e) {
                                    return getComputedStyle(document.body).getPropertyValue('--' + e)
                                }
                            return x(
                                {
                                    borderColor: a(r[n]),
                                    backgroundColor: ('bar' == e.props.type || 'doughnut' == e.props.type) && a(r[n]),
                                    fill: !1,
                                    borderWidth: 1,
                                    pointHitRadius: 8,
                                },
                                t
                            )
                        }),
                        w()(p()(e), 'buildChart', function() {
                            var t = e.chartRef.current.getContext('2d'),
                                n = e.props,
                                r = n.datasets,
                                o = n.labels
                            n.options
                            void 0 !== e.myLineChart && e.myLineChart.destroy()
                            var c = p()(e)
                            ;(r =
                                e.props.type && 'line' != e.props.type
                                    ? r.map(function(t, n) {
                                          return e.processDataset(t, n)
                                      })
                                    : [].concat(
                                          i()(
                                              r.map(function(t, n) {
                                                  var r = Object.assign({}, t),
                                                      a = i()(t.data),
                                                      o = i()(t.labels),
                                                      c = i()(t.days)
                                                  return (
                                                      a.pop(),
                                                      o.pop(),
                                                      c.pop(),
                                                      (r.data = a),
                                                      (r.labels = o),
                                                      (r.days = c),
                                                      e.processDataset(r, n)
                                                  )
                                              })
                                          ),
                                          i()(
                                              r.map(function(t, n) {
                                                  var r = Object.assign({}, t),
                                                      a = r.data.length
                                                  return (
                                                      (r.dotted = !0),
                                                      (r.borderDash = [10, 10]),
                                                      (r.data =
                                                          r.data.length > 2
                                                              ? r.data.map(function(e, t) {
                                                                    return t == a - 1 || t == a - 2 ? e : null
                                                                })
                                                              : r.data),
                                                      e.processDataset(r, n)
                                                  )
                                              })
                                          )
                                      )),
                                (e.myLineChart = new j.a(t, {
                                    type: e.props.type || 'line',
                                    data: { labels: o, datasets: r },
                                    options:
                                        'doughnut' !== e.props.type
                                            ? {
                                                  responsive: !0,
                                                  maintainAspectRatio: !1,
                                                  scaleShowHorizontalLines: !1,
                                                  tooltips: {
                                                      enabled: !0,
                                                      intersect: !1,
                                                      mode: 'nearest',
                                                      bodySpacing: 5,
                                                      yPadding: 10,
                                                      xPadding: 10,
                                                      caretPadding: 0,
                                                      displayColors: !1,
                                                      backgroundColor: '#1dc9b7',
                                                      titleFontColor: '#ffffff',
                                                      labelFontSize: 23,
                                                      cornerRadius: 4,
                                                      fontSize: 16,
                                                      footerSpacing: 0,
                                                      titleSpacing: 0,
                                                      callbacks: {
                                                          label: function(e, t) {
                                                              var n = t.datasets[e.datasetIndex]
                                                              if (n.dotted && e.index != n.data.length - 1) return null
                                                              var r = n.chartLabel || n.label || ''
                                                              return (
                                                                  n.action.properties &&
                                                                      !P.a.isEmpty(n.action.properties) &&
                                                                      ((r += ' ('),
                                                                      Object.entries(n.action.properties).forEach(
                                                                          function(e, t) {
                                                                              var n = a()(e, 2),
                                                                                  o = n[0],
                                                                                  i = n[1]
                                                                              t > 0 && (r += ', '),
                                                                                  (r +=
                                                                                      Object(D.i)(o).split(' ')[1] +
                                                                                      ' ' +
                                                                                      i)
                                                                          }
                                                                      ),
                                                                      (r += ')')),
                                                                  r + ' - ' + e.yLabel.toLocaleString()
                                                              )
                                                          },
                                                      },
                                                  },
                                                  hover: {
                                                      mode: 'nearest',
                                                      onHover: function(e) {
                                                          c.props.onClick &&
                                                              (this.getElementAtEvent(e).length
                                                                  ? (e.target.style.cursor = 'pointer')
                                                                  : (e.target.style.cursor = 'default'))
                                                      },
                                                  },
                                                  scales: {
                                                      xAxes: [
                                                          {
                                                              display: !0,
                                                              gridLines: { lineWidth: 0 },
                                                              ticks: { autoSkip: !0, beginAtZero: !0, min: 0 },
                                                          },
                                                      ],
                                                      yAxes: [
                                                          {
                                                              display: !0,
                                                              ticks: { autoSkip: !0, beginAtZero: !0, min: 0 },
                                                          },
                                                      ],
                                                  },
                                                  onClick: function(t, n) {
                                                      var o = a()(n, 1)[0]
                                                      if (o && e.props.onClick) {
                                                          var i = r[o._datasetIndex]
                                                          e.props.onClick({
                                                              point: o,
                                                              dataset: i,
                                                              index: o._index,
                                                              label:
                                                                  void 0 !== o._index && i.labels
                                                                      ? i.labels[o._index]
                                                                      : void 0,
                                                              day:
                                                                  void 0 !== o._index && i.days
                                                                      ? i.days[o._index]
                                                                      : void 0,
                                                              value:
                                                                  void 0 !== o._index && i.data
                                                                      ? i.data[o._index]
                                                                      : void 0,
                                                          })
                                                      }
                                                  },
                                              }
                                            : { responsive: !0, maintainAspectRatio: !1, hover: { mode: 'index' } },
                                }))
                        }),
                        e
                    )
                }
                return (
                    l()(n, [
                        {
                            key: 'componentDidMount',
                            value: function() {
                                this.buildChart()
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function(e) {
                                e.datasets !== this.props.datasets && this.buildChart()
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                return E.a.createElement(
                                    'div',
                                    { className: 'graph-container' },
                                    E.a.createElement('canvas', { ref: this.chartRef })
                                )
                            },
                        },
                    ]),
                    n
                )
            })(O.Component)
            N.propTypes = {
                datasets: C.a.arrayOf(C.a.shape({ label: C.a.string, count: C.a.number })).isRequired,
                labels: C.a.array.isRequired,
                options: C.a.object,
                type: C.a.string,
                onClick: C.a.func,
            }
        },
        394: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return D
            })
            var r = n(17),
                a = n.n(r),
                o = n(18),
                i = n.n(o),
                c = n(7),
                s = n.n(c),
                u = n(21),
                l = n.n(u),
                f = n(22),
                p = n.n(f),
                d = n(13),
                h = n.n(d),
                v = n(6),
                y = n.n(v),
                m = n(0),
                b = n.n(m),
                g = n(16),
                w = n(395),
                O = n.n(w),
                E = n(27),
                S = n(127),
                j = n(1),
                k = n.n(j)
            function C(e) {
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
            var D = (function(e) {
                l()(n, e)
                var t = C(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        (r = t.call(this, e)),
                        y()(s()(r), 'container', b.a.createRef()),
                        y()(s()(r), 'graphContainer', b.a.createRef()),
                        (r.state = { funnel: e.funnel }),
                        (r.buildChart = r.buildChart.bind(s()(r))),
                        e.funnel || r.fetchFunnel.call(s()(r)),
                        r
                    )
                }
                return (
                    i()(n, [
                        {
                            key: 'componentDidMount',
                            value: function() {
                                this.props.funnel && this.buildChart(),
                                    window.addEventListener('resize', this.buildChart)
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function() {
                                window.removeEventListener('resize', this.buildChart)
                            },
                        },
                        {
                            key: 'fetchFunnel',
                            value: function() {
                                var e = this
                                g.a.get('api/funnel/' + this.props.filters.funnel_id).then(function(t) {
                                    return e.setState({ funnel: t }, e.buildChart)
                                })
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function(e) {
                                e.funnel !== this.props.funnel &&
                                    this.state.funnel &&
                                    this.setState({ funnel: this.props.funnel }, this.buildChart)
                            },
                        },
                        {
                            key: 'buildChart',
                            value: function() {
                                if (this.state.funnel && 0 != this.state.funnel.steps.length) {
                                    this.container.current && (this.container.current.innerHTML = '')
                                    var e = new O.a({
                                        container: '.funnel-graph',
                                        data: {
                                            labels: this.state.funnel.steps.map(function(e) {
                                                return ''.concat(e.name, ' (').concat(e.count, ')')
                                            }),
                                            values: this.state.funnel.steps.map(function(e) {
                                                return e.count
                                            }),
                                            colors: ['#66b0ff', 'var(--blue)'],
                                        },
                                        displayPercent: !0,
                                    })
                                    ;(e.createContainer = function() {}),
                                        (e.container = this.container.current),
                                        (e.graphContainer = document.createElement('div')),
                                        e.graphContainer.classList.add('svg-funnel-js__container'),
                                        e.container.appendChild(e.graphContainer),
                                        e.draw()
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this.state.funnel
                                return e
                                    ? e.steps.length > 0
                                        ? b.a.createElement('div', {
                                              ref: this.container,
                                              className: 'svg-funnel-js',
                                              style: { height: '100%', width: '100%' },
                                          })
                                        : b.a.createElement(
                                              'p',
                                              { style: { margin: '1rem' } },
                                              "This funnel doesn't have any steps.",
                                              ' ',
                                              b.a.createElement(
                                                  E.a,
                                                  { to: '/funnel/' + e.id },
                                                  'Click here to add some steps.'
                                              )
                                          )
                                    : b.a.createElement(S.d, null)
                            },
                        },
                    ]),
                    n
                )
            })(m.Component)
            D.propTypes = { funnel: k.a.object, filters: k.a.shape({ funnel_id: k.a.number }) }
        },
        396: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return f
            })
            var r = n(67),
                a = n.n(r),
                o = n(0),
                i = n.n(o),
                c = n(127),
                s = n(359),
                u = n(9),
                l = n(317)
            function f(e) {
                var t = e.dashboardItemId,
                    n = void 0 === t ? null : t,
                    r = e.filters,
                    f = Object(u.useValues)(Object(l.e)({ dashboardItemId: n, filters: r })),
                    p = f.filters,
                    d = f.results,
                    h = Object(u.useActions)(Object(l.e)({ dashboardItemId: n, filters: r })),
                    v = h.loadResults,
                    y = h.loadPeople,
                    m = (p.people_action, p.people_day, a()(p, ['people_action', 'people_day']))
                return (
                    Object(o.useEffect)(
                        function() {
                            v()
                        },
                        [Object(c.o)(m)]
                    ),
                    d
                        ? p.session ||
                          d.reduce(function(e, t) {
                              return e + t.count
                          }, 0) > 0
                            ? i.a.createElement(s.a, {
                                  type: 'line',
                                  datasets: d,
                                  labels: d[0].labels,
                                  onClick: n
                                      ? null
                                      : function(e) {
                                            var t = e.dataset,
                                                n = e.day
                                            y(t.action || 'session', n, t.breakdown_value)
                                        },
                              })
                            : i.a.createElement(
                                  'p',
                                  { style: { textAlign: 'center', paddingTop: '4rem' } },
                                  "We couldn't find any matching events. Try changing dates or pick another action or event."
                              )
                        : i.a.createElement(c.d, null)
                )
            }
        },
        402: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return E
            })
            var r = n(17),
                a = n.n(r),
                o = n(18),
                i = n.n(o),
                c = n(7),
                s = n.n(c),
                u = n(21),
                l = n.n(u),
                f = n(22),
                p = n.n(f),
                d = n(13),
                h = n.n(d),
                v = n(0),
                y = n.n(v),
                m = n(16),
                b = n(127),
                g = n(1),
                w = n.n(g)
            function O(e) {
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
            var E = (function(e) {
                l()(n, e)
                var t = O(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        ((r = t.call(this, e)).state = {}),
                        (r.fetchGraph = r.fetchGraph.bind(s()(r))),
                        r.fetchGraph(),
                        r
                    )
                }
                return (
                    i()(n, [
                        {
                            key: 'fetchGraph',
                            value: function() {
                                var e = this,
                                    t = 'api/action/trends/?'
                                this.props.filters.session && (t = 'api/event/sessions/?'),
                                    m.a.get(t + Object(b.o)(this.props.filters)).then(function(t) {
                                        e.props.filters.session ||
                                            (t = t.sort(function(e, t) {
                                                return t.count - e.count
                                            })),
                                            e.setState({ data: t }),
                                            e.props.onData && e.props.onData(t)
                                    })
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function(e) {
                                e.filters !== this.props.filters && this.fetchGraph()
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this.state.data,
                                    t = this.props.filters
                                return e
                                    ? e[0] && (t.session || e[0].labels)
                                        ? y.a.createElement(
                                              'table',
                                              { className: 'table' },
                                              y.a.createElement(
                                                  'tbody',
                                                  null,
                                                  y.a.createElement(
                                                      'tr',
                                                      null,
                                                      y.a.createElement(
                                                          'th',
                                                          { style: { width: 100 } },
                                                          t.session ? 'Session Attribute' : 'Action'
                                                      ),
                                                      y.a.createElement(
                                                          'th',
                                                          { style: { width: 50 } },
                                                          t.session ? 'Value' : 'Count'
                                                      )
                                                  ),
                                                  e.map(function(e) {
                                                      return y.a.createElement(
                                                          'tr',
                                                          { key: e.label },
                                                          y.a.createElement('td', null, e.label),
                                                          y.a.createElement('td', null, e.count)
                                                      )
                                                  })
                                              )
                                          )
                                        : y.a.createElement(
                                              'p',
                                              { style: { textAlign: 'center', marginTop: '4rem' } },
                                              "We couldn't find any matching actions."
                                          )
                                    : y.a.createElement(b.d, null)
                            },
                        },
                    ]),
                    n
                )
            })(v.Component)
            E.propTypes = { filters: w.a.object.isRequired, onData: w.a.func }
        },
        403: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return E
            })
            var r = n(17),
                a = n.n(r),
                o = n(18),
                i = n.n(o),
                c = n(7),
                s = n.n(c),
                u = n(21),
                l = n.n(u),
                f = n(22),
                p = n.n(f),
                d = n(13),
                h = n.n(d),
                v = n(0),
                y = n.n(v),
                m = n(16),
                b = n(127),
                g = n(359)
            function w(e) {
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
            var O = [
                    'blue',
                    'yellow',
                    'green',
                    'red',
                    'purple',
                    'gray',
                    'indigo',
                    'pink',
                    'orange',
                    'teal',
                    'cyan',
                    'gray-dark',
                ],
                E = (function(e) {
                    l()(n, e)
                    var t = w(n)
                    function n(e) {
                        var r
                        return (
                            a()(this, n),
                            ((r = t.call(this, e)).state = {}),
                            (r.fetchGraph = r.fetchGraph.bind(s()(r))),
                            r.fetchGraph(),
                            r
                        )
                    }
                    return (
                        i()(n, [
                            {
                                key: 'fetchGraph',
                                value: function() {
                                    var e = this
                                    m.a.get('api/action/trends/?' + Object(b.o)(this.props.filters)).then(function(t) {
                                        t = t.sort(function(e, t) {
                                            return t.count - e.count
                                        })
                                        var n = O.map(function(e) {
                                            return (t = e), getComputedStyle(document.body).getPropertyValue('--' + t)
                                            var t
                                        })
                                        e.setState({
                                            data: [
                                                {
                                                    labels: t.map(function(e) {
                                                        return e.label
                                                    }),
                                                    data: t.map(function(e) {
                                                        return (
                                                            e.data &&
                                                            e.data.reduce(function(e, t) {
                                                                return e + t
                                                            }, 0)
                                                        )
                                                    }),
                                                    backgroundColor: n,
                                                    hoverBackgroundColor: n,
                                                    hoverBorderColor: n,
                                                    borderColor: n,
                                                    hoverBorderWidth: 10,
                                                    borderWidth: 1,
                                                },
                                            ],
                                            total: t.reduce(function(e, t) {
                                                return e + t.count
                                            }, 0),
                                        }),
                                            e.props.onData && e.props.onData(t)
                                    })
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function(e) {
                                    e.filters !== this.props.filters && this.fetchGraph()
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.state,
                                        t = e.data,
                                        n = e.total
                                    return t
                                        ? t[0] && t[0].labels
                                            ? y.a.createElement(
                                                  'div',
                                                  { style: { position: 'absolute', width: '100%', height: '100%' } },
                                                  y.a.createElement(
                                                      'h1',
                                                      {
                                                          style: {
                                                              position: 'absolute',
                                                              margin: '0 auto',
                                                              left: '50%',
                                                              top: '50%',
                                                              fontSize: '3rem',
                                                          },
                                                      },
                                                      y.a.createElement(
                                                          'div',
                                                          { style: { marginLeft: '-50%', marginTop: -30 } },
                                                          n
                                                      )
                                                  ),
                                                  y.a.createElement(g.a, {
                                                      type: 'doughnut',
                                                      datasets: t,
                                                      labels: t[0].labels,
                                                  })
                                              )
                                            : y.a.createElement(
                                                  'p',
                                                  { style: { textAlign: 'center', marginTop: '4rem' } },
                                                  "We couldn't find any matching actions."
                                              )
                                        : y.a.createElement(b.d, null)
                                },
                            },
                        ]),
                        n
                    )
                })(v.Component)
        },
        555: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Dashboard', function() {
                    return D
                })
            var r = n(17),
                a = n.n(r),
                o = n(18),
                i = n.n(o),
                c = n(7),
                s = n.n(c),
                u = n(21),
                l = n.n(u),
                f = n(22),
                p = n.n(f),
                d = n(13),
                h = n.n(d),
                v = n(0),
                y = n.n(v),
                m = n(28),
                b = n(16),
                g = n(27),
                w = n(127),
                O = n(394),
                E = n(396),
                S = n(402),
                j = n(403),
                k = n(184)
            function C(e) {
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
            var D = (function(e) {
                l()(n, e)
                var t = C(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        ((r = t.call(this, e)).state = {}),
                        (r.fetchDashboard = r.fetchDashboard.bind(s()(r))),
                        r.fetchDashboard(),
                        r
                    )
                }
                return (
                    i()(n, [
                        {
                            key: 'fetchDashboard',
                            value: function() {
                                var e = this
                                b.a.get('api/dashboard').then(function(t) {
                                    return e.setState({ items: t.results })
                                })
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.state.items,
                                    n = {
                                        ActionsLineGraph: {
                                            element: E.a,
                                            link: function(e) {
                                                return Object(m.combineUrl)('/trends', e).url
                                            },
                                        },
                                        ActionsTable: {
                                            element: S.a,
                                            link: function(e) {
                                                return Object(m.combineUrl)('/trends', e).url
                                            },
                                        },
                                        ActionsPie: {
                                            element: j.a,
                                            link: function(e) {
                                                return Object(m.combineUrl)('/trends', e).url
                                            },
                                        },
                                        FunnelViz: {
                                            element: O.a,
                                            link: function(e) {
                                                return '/funnel/'.concat(e.funnel_id)
                                            },
                                        },
                                    }
                                return y.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    t &&
                                        t.length > 0 &&
                                        t.map(function(t) {
                                            var r = n[t.type].element
                                            return (
                                                (r = y.a.createElement(r, {
                                                    dashboardItemId: t.id,
                                                    filters: t.filters,
                                                })),
                                                y.a.createElement(
                                                    'div',
                                                    { className: 'col-6', key: t.id },
                                                    y.a.createElement(
                                                        'div',
                                                        { className: 'card' },
                                                        y.a.createElement(
                                                            'h5',
                                                            { className: 'card-header' },
                                                            y.a.createElement(
                                                                k.a,
                                                                {
                                                                    className: 'float-right',
                                                                    buttonStyle: {
                                                                        lineHeight: '1rem',
                                                                        color: 'var(--gray)',
                                                                        fontSize: '2rem',
                                                                    },
                                                                },
                                                                y.a.createElement(
                                                                    g.a,
                                                                    {
                                                                        className: 'dropdown-item',
                                                                        to: n[t.type].link(t.filters),
                                                                    },
                                                                    'View graph'
                                                                ),
                                                                y.a.createElement(
                                                                    w.c,
                                                                    {
                                                                        object: t,
                                                                        className: 'text-danger dropdown-item',
                                                                        endpoint: 'dashboard',
                                                                        callback: e.fetchDashboard,
                                                                    },
                                                                    'Delete panel'
                                                                )
                                                            ),
                                                            y.a.createElement(
                                                                g.a,
                                                                { to: n[t.type].link(t.filters) },
                                                                t.name
                                                            )
                                                        ),
                                                        y.a.createElement(
                                                            'div',
                                                            {
                                                                style: {
                                                                    overflowY: 'scroll',
                                                                    height: '25vh',
                                                                    maxHeight: '30vh',
                                                                    position: 'relative',
                                                                },
                                                            },
                                                            r || y.a.createElement(w.d, null)
                                                        )
                                                    )
                                                )
                                            )
                                        }),
                                    t &&
                                        this.props.user.has_events &&
                                        0 === t.length &&
                                        y.a.createElement(
                                            'p',
                                            null,
                                            "You don't have any panels set up. ",
                                            y.a.createElement(g.a, { to: '/trends' }, 'Click here to create one.')
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
//# sourceMappingURL=dashboard.js.map
