;(window.webpackJsonp = window.webpackJsonp || []).push([
    [12, 9],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return j
            }),
                n.d(t, 'o', function() {
                    return S
                }),
                n.d(t, 'j', function() {
                    return w
                }),
                n.d(t, 'm', function() {
                    return C
                }),
                n.d(t, 'd', function() {
                    return k
                }),
                n.d(t, 'e', function() {
                    return F
                }),
                n.d(t, 'b', function() {
                    return D
                }),
                n.d(t, 'a', function() {
                    return P
                }),
                n.d(t, 'c', function() {
                    return x
                }),
                n.d(t, 'n', function() {
                    return T
                }),
                n.d(t, 'g', function() {
                    return A
                }),
                n.d(t, 'f', function() {
                    return N
                }),
                n.d(t, 'l', function() {
                    return _
                }),
                n.d(t, 'i', function() {
                    return L
                }),
                n.d(t, 'h', function() {
                    return M
                }),
                n.d(t, 'k', function() {
                    return V
                })
            var r = n(42),
                a = n.n(r),
                i = n(6),
                o = n.n(i),
                s = (n(129), n(75)),
                c = n(12),
                l = n.n(c),
                u = n(96),
                p = n.n(u),
                d = n(0),
                f = n.n(d),
                h = n(16),
                m = n(23),
                v = n(1),
                g = n.n(v)
            function y(e) {
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
                    i = !0,
                    o = !1
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next()
                        return (i = e.done), e
                    },
                    e: function(e) {
                        ;(o = !0), (a = e)
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
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
            function O(e, t) {
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
            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? O(Object(n), !0).forEach(function(t) {
                              o()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : O(Object(n)).forEach(function(t) {
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
            var S = function(e) {
                    return Object.entries(e)
                        .filter(function(e) {
                            var t = l()(e, 2)
                            t[0]
                            return t[1]
                        })
                        .map(function(e) {
                            var t = l()(e, 2),
                                n = t[0],
                                r = t[1]
                            return ''.concat(n, '=').concat(
                                (function(e) {
                                    return e._isAMomentObject
                                        ? encodeURIComponent(e.format('YYYY-MM-DD'))
                                        : ((e = 'object' === p()(e) ? JSON.stringify(e) : e), encodeURIComponent(e))
                                })(r)
                            )
                        })
                        .join('&')
                },
                w = function() {
                    return '' != window.location.search
                        ? window.location.search
                              .slice(1)
                              .split('&')
                              .reduce(function(e, t) {
                                  return (e[(t = t.split('='))[0]] = decodeURIComponent(t[1])), e
                              }, {})
                        : {}
                },
                C = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                k = function() {
                    return f.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        f.a.createElement('div', null),
                        f.a.createElement(s.a, null)
                    )
                },
                F = function(e) {
                    var t = e.colSpan,
                        n = void 0 === t ? 1 : t,
                        r = e.asOverlay,
                        a = void 0 !== r && r
                    return f.a.createElement(
                        'tr',
                        { className: a ? 'loading-overlay over-table' : '' },
                        f.a.createElement(
                            'td',
                            { colSpan: n, style: { padding: 50, textAlign: 'center' } },
                            f.a.createElement(s.a, null)
                        )
                    )
                },
                D = function(e) {
                    return f.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: E({}, e.style) }),
                        f.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function P(e) {
                return f.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && f.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var x = function(e) {
                return f.a.createElement(
                    'a',
                    {
                        href: '#',
                        onClick: function(t) {
                            t.preventDefault(),
                                (function t(n) {
                                    h.a
                                        .update(
                                            'api/' + e.endpoint + '/' + e.object.id,
                                            E(E({}, e.object), {}, { deleted: !n })
                                        )
                                        .then(function() {
                                            e.callback()
                                            var r = f.a.createElement(
                                                'div',
                                                null,
                                                n
                                                    ? f.a.createElement('span', null, 'Delete un-done')
                                                    : f.a.createElement(
                                                          'span',
                                                          null,
                                                          '"',
                                                          f.a.createElement('strong', null, e.object.name),
                                                          '" deleted.',
                                                          ' ',
                                                          f.a.createElement(
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
                                            Object(m.c)(r, { toastId: 'delete-item-' + e.object.id })
                                        })
                                })()
                        },
                        className: e.className,
                        style: e.style,
                    },
                    e.children
                )
            }
            x.propTypes = {
                endpoint: g.a.string.isRequired,
                object: g.a.shape({ name: g.a.string.isRequired, id: g.a.number.isRequired }).isRequired,
                className: g.a.string,
                style: g.a.object,
            }
            var T = {
                    control: function(e) {
                        return E(E({}, e), {}, { height: 31, minHeight: 31 })
                    },
                    indicatorsContainer: function(e) {
                        return E(E({}, e), {}, { height: 31 })
                    },
                    input: function(e) {
                        return E(E({}, e), {}, { paddingBottom: 0, paddingTop: 0, margin: 0, opacity: 1 })
                    },
                    valueContainer: function(e) {
                        return E(E({}, e), {}, { padding: '0 8px', marginTop: -2 })
                    },
                    option: function(e) {
                        return E(E({}, e), {}, { padding: '2px 15px' })
                    },
                },
                A = function(e, t, n) {
                    var r
                    return function() {
                        var a = this,
                            i = arguments,
                            o = function() {
                                ;(r = null), n || e.apply(a, i)
                            },
                            s = n && !r
                        clearTimeout(r), (r = setTimeout(o, t)), s && e.apply(a, i)
                    }
                },
                N = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                _ = {
                    exact: '= equals',
                    is_not: "≠ doesn't equal",
                    icontains: '∋ contains',
                    not_icontains: "∌ doesn't contain",
                    gt: '> greater than',
                    lt: '< lower than',
                },
                R = Object.entries(_).reverse(),
                L = function(e) {
                    var t,
                        n = y(R)
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = l()(t.value, 2),
                                a = r[0],
                                i = r[1]
                            if (e.includes(a)) return e.replace('__' + a, '') + ' '.concat(i.split(' ')[0], ' ')
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return e + ' '.concat(_.exact.split(' ')[0], ' ')
                },
                M = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        h.a.delete('api/person/' + e.id).then(function() {
                            Object(m.c)('Person succesfully deleted.'), t && t()
                        })
                },
                V = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        317: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return b
            }),
                n.d(t, 'd', function() {
                    return O
                }),
                n.d(t, 'c', function() {
                    return E
                }),
                n.d(t, 'b', function() {
                    return j
                }),
                n.d(t, 'e', function() {
                    return k
                })
            var r = n(29),
                a = n.n(r),
                i = n(53),
                o = n.n(i),
                s = n(67),
                c = n.n(s),
                l = n(6),
                u = n.n(l),
                p = n(9),
                d = n(16),
                f = n(127),
                h = n(322),
                m = n(26),
                v = n(28)
            function g(e, t) {
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
            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? g(Object(n), !0).forEach(function(t) {
                              u()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : g(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var b = { ACTIONS: 'actions', EVENTS: 'events', NEW_ENTITY: 'new_entity' },
                O = {
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
                E = {
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
                j = { FILTERS: 'FILTERS', SESSIONS: 'SESSIONS' }
            function S(e) {
                return y(
                    y({}, e),
                    {},
                    {
                        interval: C(e),
                        display: e.session && 'dist' === e.session ? 'ActionsTable' : e.display,
                        actions: Array.isArray(e.actions) ? e.actions : void 0,
                        events: Array.isArray(e.events) ? e.events : void 0,
                        properties: e.properties || {},
                    }
                )
            }
            function w(e) {
                e.people_day, e.people_action, e.stickiness_days
                return c()(e, ['people_day', 'people_action', 'stickiness_days'])
            }
            function C(e) {
                var t = e.date_from,
                    n = e.interval
                if (!n) return 'day'
                var r = O[t] && 'minute' === n,
                    a = E[t] && 'hour' === n
                return r ? 'hour' : a ? 'day' : n
            }
            var k = Object(p.kea)({
                key: function(e) {
                    return e.dashboardItemId || 'all_trends'
                },
                connect: { values: [m.a, ['eventNames'], h.a, ['actions']] },
                loaders: function(e) {
                    var t,
                        n = e.values
                    return {
                        results: {
                            loadResults:
                                ((t = o()(
                                    a.a.mark(function e() {
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (n.activeView !== j.SESSIONS) {
                                                            e.next = 4
                                                            break
                                                        }
                                                        return (
                                                            (e.next = 3),
                                                            d.a.get('api/event/sessions/?' + Object(f.o)(w(n.filters)))
                                                        )
                                                    case 3:
                                                        return e.abrupt('return', e.sent)
                                                    case 4:
                                                        return (
                                                            (e.next = 6),
                                                            d.a.get('api/action/trends/?' + Object(f.o)(w(n.filters)))
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
                                      return S(v.router.selectors.searchParams(e))
                                  },
                            u()({}, r.setFilters, function(e, t) {
                                var n = t.filters
                                return S(y(y({}, t.mergeFilters ? e : {}), n))
                            }),
                        ],
                        people: [
                            null,
                            ((t = {}),
                            u()(t, r.setFilters, function() {
                                return null
                            }),
                            u()(t, r.setPeople, function(e, t) {
                                return t
                            }),
                            t),
                        ],
                        cachedUrls: [
                            {},
                            u()({}, r.setCachedUrl, function(e, t) {
                                var n = t.type,
                                    r = t.url
                                return y(y({}, e), {}, u()({}, n, r))
                            }),
                        ],
                        showingPeople: [
                            !1,
                            ((n = {}),
                            u()(n, r.loadPeople, function() {
                                return !0
                            }),
                            u()(n, r.setShowingPeople, function(e, t) {
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
                                return e.session ? j.SESSIONS : j.FILTERS
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
                        i = e.actions,
                        s = e.values
                    return (
                        (t = {}),
                        u()(
                            t,
                            i.setDisplay,
                            ((r = o()(
                                a.a.mark(function e(t) {
                                    var n
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(n = t.display), i.setFilters({ display: n })
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
                        u()(
                            t,
                            i.loadPeople,
                            ((n = o()(
                                a.a.mark(function e(t, n) {
                                    var r, o, c, l, p, h, m, v
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (c = t.action),
                                                        (l = t.day),
                                                        (p = t.breakdown_value),
                                                        (h = w(
                                                            y(y({}, s.filters), {}, { entityId: c.id, type: c.type })
                                                        )),
                                                        'Stickiness' === s.filters.shown_as
                                                            ? (h.stickiness_days = l)
                                                            : ((h.date_from = l), (h.date_to = l)),
                                                        p &&
                                                            (h.properties = y(
                                                                y({}, h.properties),
                                                                {},
                                                                u()({}, h.breakdown, p)
                                                            )),
                                                        (m = Object(f.o)(h)),
                                                        i.setPeople(null, null, c, l, p),
                                                        (e.next = 8),
                                                        d.a.get('api/action/people/?include_last_event=1&'.concat(m))
                                                    )
                                                case 8:
                                                    ;(v = e.sent),
                                                        n(),
                                                        i.setPeople(
                                                            null === (r = v[0]) || void 0 === r ? void 0 : r.people,
                                                            null === (o = v[0]) || void 0 === o ? void 0 : o.count,
                                                            c,
                                                            l,
                                                            p
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
                        u()(t, n.setFilters, function(e) {
                            var t = e.fromUrl
                            if (!a.dashboardItemId) return t ? void 0 : ['/trends', r.filters]
                        }),
                        u()(t, n.setActiveView, function(e) {
                            var t = e.type
                            if (!a.dashboardItemId) {
                                n.setCachedUrl(r.activeView, window.location.pathname + window.location.search)
                                var i = r.cachedUrls[t]
                                return i || ['/trends', t === j.SESSIONS ? { session: 'avg' } : {}]
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
                                var i = S(a)
                                if (0 === Object.keys(a).length && n.eventNames && n.eventNames[0]) {
                                    var o = n.eventNames.includes('$pageview')
                                        ? '$pageview'
                                        : n.eventNames.includes('$screen')
                                        ? '$screen'
                                        : n.eventNames[0]
                                    i[b.EVENTS] = [{ id: o, name: o, type: b.EVENTS, order: 0 }]
                                }
                                Object(f.k)(i, n.filters) || t.setFilters(i, !1, !0)
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
                return u
            })
            var r = n(29),
                a = n.n(r),
                i = n(53),
                o = n.n(i),
                s = n(9),
                c = n(16),
                l = function(e, t) {
                    return (
                        e.steps.filter(function(e) {
                            return e.event == t
                        }).length > 0
                    )
                },
                u = Object(s.kea)({
                    loaders: function() {
                        return {
                            actions: {
                                __default: [],
                                loadActions:
                                    ((e = o()(
                                        a.a.mark(function e() {
                                            var t
                                            return a.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), c.a.get('api/action')
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
                                            l(e, '$autocapture') && t[0].options.push(n),
                                                l(e, '$pageview') && t[2].options.push(n),
                                                l(e, '$autocapture') || l(e, '$pageview') || t[1].options.push(n)
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
        323: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return K
            })
            n(357)
            var r = n(358),
                a = (n(388), n(393)),
                i = (n(128), n(40)),
                o = n(12),
                s = n.n(o),
                c = n(0),
                l = n.n(c),
                u = n(179),
                p = n(127),
                d = n(17),
                f = n.n(d),
                h = n(18),
                m = n.n(h),
                v = n(7),
                g = n.n(v),
                y = n(21),
                b = n.n(y),
                O = n(22),
                E = n.n(O),
                j = n(13),
                S = n.n(j),
                w = n(16),
                C = n(392),
                k = n(1),
                F = n.n(k)
            function D(e) {
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
                        r = S()(e)
                    if (t) {
                        var a = S()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return E()(this, n)
                }
            }
            var P = (function(e) {
                b()(n, e)
                var t = D(n)
                function n(e) {
                    var r
                    return (
                        f()(this, n),
                        ((r = t.call(this, e)).state = { input: e.value }),
                        (r.loadPropertyValues = Object(p.g)(r.loadPropertyValues.bind(g()(r)), 250)),
                        (r.ref = l.a.createRef()),
                        r
                    )
                }
                return (
                    m()(n, [
                        {
                            key: 'loadPropertyValues',
                            value: function(e, t) {
                                var n = this.props.propertyKey.split('__')[0]
                                w.a
                                    .get('api/' + this.props.endpoint + '/values/?key=' + n + (e ? '&value=' + e : ''))
                                    .then(function(e) {
                                        return t(
                                            e.map(function(e) {
                                                return { label: e.name ? e.name : '(empty)', value: e.name }
                                            })
                                        )
                                    })
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.propertyKey,
                                    r = t.onSet,
                                    a = t.value,
                                    i = this.state,
                                    o = i.isEditing
                                i.input
                                return l.a.createElement(
                                    'span',
                                    { ref: this.ref, className: 'property-value' },
                                    l.a.createElement(C.a, {
                                        loadOptions: this.loadPropertyValues,
                                        defaultOptions: !0,
                                        cacheOptions: !0,
                                        formatCreateLabel: function(e) {
                                            return 'Specify: ' + e
                                        },
                                        allowCreateWhileLoading: !0,
                                        createOptionPosition: 'first',
                                        key: n,
                                        placeholder: 'Property value',
                                        style: { width: 200 },
                                        value: { label: a, value: a },
                                        onChange: function(t) {
                                            r(n, t.value), e.setState({ input: t.value }), e.select.blur()
                                        },
                                        autoFocus: !a,
                                        styles: p.n,
                                        ref: function(t) {
                                            e.select = t
                                        },
                                        inputValue: o ? this.state.input : '',
                                        onFocus: function() {
                                            return e.setState({ isEditing: !0 })
                                        },
                                        onInputChange: function(t, n) {
                                            return 'input-change' === n.action
                                                ? (e.setState({ input: t }), t)
                                                : e.state.input
                                        },
                                    })
                                )
                            },
                        },
                    ]),
                    n
                )
            })(c.Component)
            P.propTypes = { propertyKey: F.a.string.isRequired, value: F.a.any.isRequired, onSet: F.a.func.isRequired }
            var x = n(9),
                T = Object.entries(p.l).map(function(e) {
                    var t = s()(e, 2),
                        n = t[0]
                    return { label: t[1], value: n }
                })
            function A(e) {
                var t = e.index,
                    n = e.endpoint,
                    r = e.onComplete,
                    a = e.logic,
                    i = Object(x.useValues)(a),
                    o = i.properties,
                    s = i.filters,
                    c = Object(x.useActions)(a),
                    d = c.setFilter,
                    f = (c.remove, s[t]),
                    h = Object.keys(f)[0] ? Object.keys(f)[0].split('__') : [],
                    m = Object.values(f)[0]
                return l.a.createElement(
                    'div',
                    { className: 'row', style: { margin: '0.5rem -15px', minWidth: h[0] ? 700 : 200 } },
                    o &&
                        l.a.createElement(
                            'div',
                            { className: h[0] ? 'col-4' : 'col' },
                            l.a.createElement(u.a, {
                                options: o,
                                value: [{ label: h[0], value: h[0] }],
                                isLoading: !o,
                                placeholder: 'Property key',
                                onChange: function(e) {
                                    return d(t, e.value + (h[1] ? '__' + h[1] : ''), e.value !== h[0] ? '' : m)
                                },
                                styles: p.n,
                                autoFocus: !h[0],
                                openMenuOnFocus: !0,
                            })
                        ),
                    h[0] &&
                        l.a.createElement(
                            'div',
                            { className: 'col-3 pl-0' },
                            l.a.createElement(u.a, {
                                options: T,
                                style: { width: 200 },
                                value: [{ label: p.l[h[1]] || '= equals', value: h[1] }],
                                placeholder: 'Property key',
                                onChange: function(e) {
                                    return d(t, h[0] + '__' + e.value, m)
                                },
                                styles: p.n,
                            })
                        ),
                    h[0] &&
                        l.a.createElement(
                            'div',
                            { className: 'col-5 pl-0' },
                            l.a.createElement(P, {
                                endpoint: n,
                                key: Object.keys(f)[0],
                                propertyKey: Object.keys(f)[0],
                                value: m,
                                onSet: function(e, n) {
                                    r(), d(t, e, n)
                                },
                            }),
                            ('gt' === h[1] || 'lt' === h[1]) &&
                                isNaN(m) &&
                                l.a.createElement(
                                    'p',
                                    { className: 'text-danger' },
                                    'Value needs to be a number. Try "equals" or "contains" instead.'
                                )
                        )
                )
            }
            var N = n(67),
                _ = n.n(N),
                R = n(311),
                L = n.n(R),
                M = n(6),
                V = n.n(M),
                I = n(29),
                $ = n.n(I),
                W = n(53),
                Y = n.n(W),
                z = n(26),
                q = n(28)
            function H(e, t) {
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
            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? H(Object(n), !0).forEach(function(t) {
                              V()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : H(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var G = Object(x.kea)({
                key: function(e) {
                    return e.pageKey
                },
                actions: function() {
                    return {
                        loadEventProperties: !0,
                        setProperties: function(e) {
                            return { properties: e }
                        },
                        update: function(e) {
                            return { filters: e }
                        },
                        setFilter: function(e, t, n) {
                            return { index: e, key: t, value: n }
                        },
                        setFilters: function(e) {
                            return { filters: e }
                        },
                        newFilter: !0,
                        remove: function(e) {
                            return { index: e }
                        },
                    }
                },
                loaders: function() {
                    return {
                        properties: {
                            loadPeopleProperties:
                                ((e = Y()(
                                    $.a.mark(function e() {
                                        return $.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), w.a.get('api/person/properties')
                                                    case 2:
                                                        return e.abrupt(
                                                            'return',
                                                            e.sent.map(function(e) {
                                                                return { label: e.name, value: e.name }
                                                            })
                                                        )
                                                    case 3:
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
                reducers: function(e) {
                    var t,
                        n,
                        r = e.actions,
                        a = e.props
                    return {
                        properties: [
                            [],
                            ((t = {}),
                            V()(t, r.loadPeoplePropertiesSuccess, function(e, t) {
                                return t.properties
                            }),
                            V()(t, r.setProperties, function(e, t) {
                                return t.properties
                            }),
                            t),
                        ],
                        filters: [
                            a.propertyFilters
                                ? Object.entries(a.propertyFilters).map(function(e) {
                                      var t = s()(e, 2),
                                          n = t[0],
                                          r = t[1]
                                      return V()({}, n, r)
                                  })
                                : [],
                            ((n = {}),
                            V()(n, r.setFilter, function(e, t) {
                                var n = t.index,
                                    r = t.key,
                                    a = t.value,
                                    i = L()(e)
                                return (i[n] = V()({}, r, a)), i
                            }),
                            V()(n, r.setFilters, function(e, t) {
                                return t.filters
                            }),
                            V()(n, r.newFilter, function(e) {
                                return [].concat(L()(e), [{}])
                            }),
                            V()(n, r.remove, function(e, t) {
                                var n = t.index,
                                    r = e.filter(function(e, t) {
                                        return t !== n
                                    })
                                return 0 === r.length
                                    ? [{}]
                                    : 0 !== Object.keys(r[r.length - 1]).length
                                    ? [].concat(L()(r), [{}])
                                    : r
                            }),
                            n),
                        ],
                    }
                },
                listeners: function(e) {
                    var t,
                        n = e.actions,
                        r = e.props,
                        a = e.values
                    return (
                        (t = {}),
                        V()(t, n.setFilter, function(e) {
                            return e.value && n.update()
                        }),
                        V()(t, n.remove, function() {
                            return n.update()
                        }),
                        V()(t, n.update, function() {
                            if (r.onChange) {
                                if (0 === a.filters.length) return n.newFilter(), r.onChange({})
                                0 !== Object.keys(a.filters[a.filters.length - 1]).length && n.newFilter()
                                var e = a.filters.reduce(function(e, t) {
                                    return U(U({}, e), t)
                                })
                                r.onChange(e)
                            } else {
                                var t = a.filters,
                                    i = q.router.values.searchParams,
                                    o = (i.properties, _()(i, ['properties'])),
                                    s = q.router.values.location.pathname
                                t.filter(function(e) {
                                    return Object.keys(e).length > 0
                                }).length > 0 &&
                                    (o.properties = t.reduce(function(e, t) {
                                        return U(U({}, e), t)
                                    })),
                                    Object(p.k)(q.router.values.searchParams, o) || q.router.actions.push(s, o)
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
                        '*': function(e, a) {
                            var i = a.properties
                            if (!r.onChange) {
                                var o
                                try {
                                    o = n.filters
                                } catch (e) {
                                    return
                                }
                                if (!Object(p.k)(i || {}, o)) {
                                    var c = Object.entries(i || {}).map(function(e) {
                                        var t = s()(e, 2),
                                            n = t[0],
                                            r = t[1]
                                        return V()({}, n, r)
                                    })
                                    t.setFilters([].concat(L()(c), [{}]))
                                }
                            }
                        },
                    }
                },
                events: function(e) {
                    var t = e.actions,
                        n = e.props
                    return {
                        afterMount: function() {
                            t.newFilter(),
                                'person' === n.endpoint
                                    ? t.loadPeopleProperties()
                                    : t.setProperties(z.a.values.eventProperties)
                        },
                    }
                },
                path: function(e) {
                    return ['lib', 'components', 'PropertyFilters', 'propertyFilterLogic', e]
                },
            })
            function B(e) {
                var t = e.endpoint,
                    n = e.item,
                    o = e.index,
                    u = e.filters,
                    d = e.logic,
                    f = Object(x.useActions)(d).remove,
                    h = Object(c.useState)(!1),
                    m = s()(h, 2),
                    v = m[0],
                    g = m[1]
                return l.a.createElement(
                    r.a,
                    { align: 'middle', className: 'mt-2 mb-2' },
                    l.a.createElement(
                        a.a,
                        {
                            trigger: 'click',
                            onVisibleChange: function(e) {
                                !e && Object.keys(n).length >= 0 && !n[Object.keys(n)[0]] && f(o), g(e)
                            },
                            defaultVisible: !1,
                            visible: v,
                            placement: 'bottomLeft',
                            content: l.a.createElement(A, {
                                key: o,
                                index: o,
                                endpoint: t || 'event',
                                onComplete: function() {
                                    return g(!1)
                                },
                                logic: d,
                            }),
                        },
                        0 !== Object.keys(n).length
                            ? l.a.createElement(
                                  i.a,
                                  { type: 'primary', shape: 'round', style: { maxWidth: '85%' } },
                                  l.a.createElement(
                                      'span',
                                      { style: { width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' } },
                                      Object(p.i)(Object.keys(n)[0]) + n[Object.keys(n)[0]]
                                  )
                              )
                            : l.a.createElement(i.a, { type: 'default', shape: 'round' }, 'New Filter')
                    ),
                    o !== u.length - 1 &&
                        l.a.createElement(p.b, {
                            className: 'ml-1',
                            onClick: function() {
                                f(o)
                            },
                            style: { cursor: 'pointer', float: 'none' },
                        })
                )
            }
            function K(e) {
                var t = e.endpoint,
                    n = e.propertyFilters,
                    r = e.className,
                    a = e.style,
                    i = e.onChange,
                    o = e.pageKey,
                    s = G({ propertyFilters: n, endpoint: t, onChange: i, pageKey: o }),
                    c = Object(x.useValues)(s).filters
                return l.a.createElement(
                    'div',
                    {
                        className: r || 'col-8',
                        style: { padding: 0, marginBottom: '2rem', display: 'inline', style: a },
                    },
                    l.a.createElement(
                        'div',
                        { className: 'column' },
                        c &&
                            c.map(function(e, n) {
                                return l.a.createElement(B, {
                                    key: n === c.length - 1 ? n : ''.concat(n, '_').concat(Object.keys(e)[0]),
                                    logic: s,
                                    item: e,
                                    index: n,
                                    filters: c,
                                    endpoint: t,
                                })
                            })
                    )
                )
            }
        },
        372: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return _
            })
            n(128)
            var r = n(40),
                a = (n(505), n(499)),
                i = (n(334), n(329)),
                o = n(311),
                s = n.n(o),
                c = n(12),
                l = n.n(c),
                u = n(17),
                p = n.n(u),
                d = n(18),
                f = n.n(d),
                h = n(7),
                m = n.n(h),
                v = n(21),
                g = n.n(v),
                y = n(22),
                b = n.n(y),
                O = n(13),
                E = n.n(O),
                j = n(6),
                S = n.n(j),
                w = n(0),
                C = n.n(w),
                k = n(1),
                F = n.n(k),
                D = n(318)
            function P(e, t) {
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
                        ? P(Object(n), !0).forEach(function(t) {
                              S()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : P(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function T(e) {
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
                        r = E()(e)
                    if (t) {
                        var a = E()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return b()(this, n)
                }
            }
            var A = {
                    Today: ['dStart'],
                    Yesterday: ['-1d', 'dStart'],
                    'Last week': ['-7d'],
                    'Last 2 weeks': ['-14d'],
                    'Last 30 days': ['-30d'],
                    'Last 90 days': ['-90d'],
                    'This month': ['mStart'],
                    'Previous month': ['-1mStart', '-1mEnd'],
                    'Year to date': ['yStart'],
                    'All time': ['all'],
                },
                N = /([0-9]{4}-[0-9]{2}-[0-9]{2})/,
                _ = (function(e) {
                    g()(n, e)
                    var t = T(n)
                    function n(e) {
                        var r
                        return (
                            p()(this, n),
                            (r = t.call(this, e)),
                            S()(m()(r), 'onClickOutside', function() {
                                r.setState({ open: !1, dateRangeOpen: !1 })
                            }),
                            S()(m()(r), 'setDate', function(e, t) {
                                r.props.onChange(e, t)
                            }),
                            S()(m()(r), 'onChange', function(e) {
                                'Date range' === e
                                    ? r.state.open && r.setState({ dateRangeOpen: !0, open: !1 })
                                    : r.setDate(A[e][0], A[e][1])
                            }),
                            S()(m()(r), 'onBlur', function() {
                                r.state.dateRangeOpen || r.setState({ open: !1, dateRangeOpen: !1 })
                            }),
                            S()(m()(r), 'onClick', function() {
                                r.state.dateRangeOpen || r.setState({ open: !r.state.open })
                            }),
                            S()(m()(r), 'dropdownOnClick', function(e) {
                                e.preventDefault(),
                                    r.setState({ dateRangeOpen: !1, open: !0 }),
                                    document.getElementById('daterange_selector').focus()
                            }),
                            S()(m()(r), 'onDateFromChange', function(e) {
                                return r.setState({ rangeDateFrom: e })
                            }),
                            S()(m()(r), 'onDateToChange', function(e) {
                                return r.setState({ rangeDateTo: e })
                            }),
                            S()(m()(r), 'onApplyClick', function() {
                                r.setState({ dateRangeOpen: !1, open: !1 }),
                                    r.props.onChange(
                                        Object(D.default)(r.state.rangeDateFrom).format('YYYY-MM-DD'),
                                        Object(D.default)(r.state.rangeDateTo).format('YYYY-MM-DD')
                                    )
                            }),
                            (r.state = {
                                rangeDateFrom: N.test(e.dateFrom) && Object(D.default)(e.dateFrom).toDate(),
                                rangeDateTo: N.test(e.dateTo) && Object(D.default)(e.dateTo).toDate(),
                                dateRangeOpen: !1,
                                open: !1,
                            }),
                            r
                        )
                    }
                    return (
                        f()(n, [
                            {
                                key: 'dateFilterToText',
                                value: function(e, t) {
                                    if (N.test(e)) return ''.concat(e, ' - ').concat(t)
                                    if (D.default.isMoment(e))
                                        return ''.concat(e.format('YYYY-MM-DD'), ' - ').concat(t.format('YYYY-MM-DD'))
                                    var n = 'Last 7 days'
                                    return (
                                        Object.entries(A).map(function(r) {
                                            var a = l()(r, 2),
                                                i = a[0],
                                                o = a[1]
                                            o[0] === e && o[1] === t && (n = i)
                                        })[0],
                                        n
                                    )
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.state,
                                        n = t.rangeDateFrom,
                                        r = t.rangeDateTo
                                    return C.a.createElement(
                                        i.a,
                                        {
                                            bordered: !1,
                                            id: 'daterange_selector',
                                            value: this.dateFilterToText(this.props.dateFrom, this.props.dateTo),
                                            onChange: this.onChange,
                                            style: x({ marginRight: 4 }, this.props.style),
                                            open: this.state.open || this.state.dateRangeOpen,
                                            onBlur: this.onBlur,
                                            onClick: this.onClick,
                                            listHeight: 400,
                                            dropdownMatchSelectWidth: !1,
                                            dropdownRender: function(t) {
                                                return e.state.dateRangeOpen
                                                    ? C.a.createElement(R, {
                                                          onClick: e.dropdownOnClick,
                                                          onDateFromChange: e.onDateFromChange,
                                                          onDateToChange: e.onDateToChange,
                                                          onApplyClick: e.onApplyClick,
                                                          onClickOutside: e.onClickOutside,
                                                          rangeDateFrom: n,
                                                          rangeDateTo: r,
                                                      })
                                                    : e.state.open
                                                    ? t
                                                    : void 0
                                            },
                                        },
                                        [].concat(
                                            s()(
                                                Object.entries(A).map(function(e) {
                                                    var t = l()(e, 2),
                                                        n = t[0]
                                                    t[1]
                                                    return C.a.createElement(i.a.Option, { key: n, value: n }, n)
                                                })
                                            ),
                                            [
                                                C.a.createElement(
                                                    i.a.Option,
                                                    { key: 'Date range', value: 'Date range' },
                                                    'Date range'
                                                ),
                                            ]
                                        )
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(w.Component)
            function R(e) {
                var t = Object(w.useRef)(),
                    n = Object(w.useState)(!1),
                    i = l()(n, 2),
                    o = i[0],
                    s = i[1],
                    c = function(n) {
                        t.current.contains(n.target) || o || e.onClickOutside()
                    }
                return (
                    Object(w.useEffect)(
                        function() {
                            return (
                                document.addEventListener('mousedown', c),
                                function() {
                                    document.removeEventListener('mousedown', c)
                                }
                            )
                        },
                        [o]
                    ),
                    C.a.createElement(
                        'div',
                        { className: 'dropdown', ref: t },
                        C.a.createElement(
                            'a',
                            {
                                style: { margin: '0 1rem', color: 'rgba(0, 0, 0, 0.2)', fontWeight: 700 },
                                href: '#',
                                onClick: e.onClick,
                            },
                            '<'
                        ),
                        C.a.createElement('hr', { style: { margin: '0.5rem 0' } }),
                        C.a.createElement(
                            'div',
                            { style: { padding: '0 1rem' } },
                            C.a.createElement('label', { className: 'secondary' }, 'From date'),
                            C.a.createElement('br', null),
                            C.a.createElement(a.a, {
                                popupStyle: { zIndex: 999999 },
                                onOpenChange: function(e) {
                                    s(e)
                                },
                                defaultValue: e.rangeDateFrom
                                    ? D.default.isMoment(e.rangeDateFrom)
                                        ? e.rangeDateFrom
                                        : Object(D.default)(e.rangeDateFrom)
                                    : null,
                                onChange: e.onDateFromChange,
                            }),
                            C.a.createElement('br', null),
                            C.a.createElement('br', null),
                            C.a.createElement('label', { className: 'secondary' }, 'To date'),
                            C.a.createElement('br', null),
                            C.a.createElement(a.a, {
                                popupStyle: { zIndex: 999999 },
                                onOpenChange: function(e) {
                                    return s(e)
                                },
                                defaultValue: e.rangeDateTo
                                    ? D.default.isMoment(e.rangeDateTo)
                                        ? e.rangeDateTo
                                        : Object(D.default)(e.rangeDateTo)
                                    : null,
                                onChange: e.onDateToChange,
                            }),
                            C.a.createElement('br', null),
                            C.a.createElement(
                                r.a,
                                {
                                    type: 'default',
                                    disabled: !e.rangeDateTo || !e.rangeDateFrom,
                                    style: { marginTop: '1rem', marginBottom: '1rem' },
                                    onClick: e.onApplyClick,
                                },
                                'Apply filter'
                            )
                        )
                    )
                )
            }
            S()(_, 'propTypes', { onChange: F.a.func.isRequired })
        },
        373: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return v
            })
            var r = n(311),
                a = n.n(r),
                i = n(6),
                o = n.n(i),
                s = n(29),
                c = n.n(s),
                l = n(53),
                u = n.n(l),
                p = n(9),
                d = n(16),
                f = n(23)
            function h(e, t) {
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
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? h(Object(n), !0).forEach(function(t) {
                              o()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : h(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var v = Object(p.kea)({
                key: function(e) {
                    return e.id || 'new'
                },
                actions: function() {
                    return {
                        setFunnel: function(e, t) {
                            return { funnel: e, update: t }
                        },
                    }
                },
                loaders: function(e) {
                    var t,
                        n,
                        r,
                        a,
                        i,
                        o = e.props
                    return {
                        funnel: [
                            { filters: {} },
                            {
                                loadFunnel:
                                    ((i = u()(
                                        c.a.mark(function e() {
                                            var t,
                                                n = arguments
                                            return c.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t = n.length > 0 && void 0 !== n[0] ? n[0] : o.id),
                                                                (e.next = 3),
                                                                d.a.get('api/funnel/' + t + '/?exclude_count=1')
                                                            )
                                                        case 3:
                                                            return e.abrupt('return', e.sent)
                                                        case 4:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                            }, e)
                                        })
                                    )),
                                    function() {
                                        return i.apply(this, arguments)
                                    }),
                                updateFunnel:
                                    ((a = u()(
                                        c.a.mark(function e(t) {
                                            return c.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), d.a.update('api/funnel/' + t.id, t)
                                                        case 2:
                                                            return e.abrupt('return', e.sent)
                                                        case 3:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                            }, e)
                                        })
                                    )),
                                    function(e) {
                                        return a.apply(this, arguments)
                                    }),
                                createFunnel:
                                    ((r = u()(
                                        c.a.mark(function e(t) {
                                            return c.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), d.a.create('api/funnel', t)
                                                        case 2:
                                                            return e.abrupt('return', e.sent)
                                                        case 3:
                                                        case 'end':
                                                            return e.stop()
                                                    }
                                            }, e)
                                        })
                                    )),
                                    function(e) {
                                        return r.apply(this, arguments)
                                    }),
                            },
                        ],
                        stepsWithCount: {
                            loadStepsWithCount:
                                ((n = u()(
                                    c.a.mark(function e() {
                                        var t,
                                            n = arguments
                                        return c.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = n.length > 0 && void 0 !== n[0] ? n[0] : o.id),
                                                            (e.next = 3),
                                                            d.a.get('api/funnel/' + t)
                                                        )
                                                    case 3:
                                                        return e.abrupt('return', e.sent.steps)
                                                    case 4:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )),
                                function() {
                                    return n.apply(this, arguments)
                                }),
                        },
                        people: {
                            loadPeople:
                                ((t = u()(
                                    c.a.mark(function e(t) {
                                        return c.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            d.a.get('api/person/?id=' + t[0].people.join(','))
                                                        )
                                                    case 2:
                                                        return e.abrupt('return', e.sent.results)
                                                    case 3:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )),
                                function(e) {
                                    return t.apply(this, arguments)
                                }),
                        },
                    }
                },
                reducers: function() {
                    return {
                        funnel: {
                            setFunnel: function(e, t) {
                                var n = t.funnel
                                return m(m(m({}, e), n), {}, { filters: m(m({}, e.filters), n.filters) })
                            },
                        },
                    }
                },
                selectors: function(e) {
                    var t = e.selectors
                    return {
                        peopleSorted: [
                            function() {
                                return [t.stepsWithCount, t.people]
                            },
                            function(e, t) {
                                if (!t) return null
                                var n = function(t) {
                                    return e.reduce(function(e, n) {
                                        return n.people.indexOf(t.id) > -1 ? e + 1 : e
                                    }, 0)
                                }
                                return t.sort(function(e, t) {
                                    return n(t) - n(e)
                                })
                            },
                        ],
                        isStepsEmpty: [
                            function() {
                                return [t.funnel]
                            },
                            function(e) {
                                return (
                                    e &&
                                    0 === [].concat(a()(e.filters.actions || []), a()(e.filters.events || [])).length
                                )
                            },
                        ],
                    }
                },
                listeners: function(e) {
                    var t,
                        n,
                        r = e.actions,
                        a = e.values
                    return {
                        loadStepsWithCountSuccess:
                            ((n = u()(
                                c.a.mark(function e() {
                                    return c.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    r.loadPeople(a.stepsWithCount)
                                                case 1:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function() {
                                return n.apply(this, arguments)
                            }),
                        setFunnel: function(e) {
                            e.update && r.updateFunnel(a.funnel)
                        },
                        updateFunnelSuccess:
                            ((t = u()(
                                c.a.mark(function e(t) {
                                    var n
                                    return c.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(n = t.funnel),
                                                        r.loadStepsWithCount(n.id),
                                                        Object(f.c)('Funnel saved!')
                                                case 3:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function(e) {
                                return t.apply(this, arguments)
                            }),
                        createFunnelSuccess: function(e) {
                            var t = e.funnel
                            r.loadStepsWithCount(t.id), Object(f.c)('Funnel saved!')
                        },
                    }
                },
                actionToUrl: function() {
                    return {
                        createFunnelSuccess: function(e) {
                            var t = e.funnel
                            return '/funnel/'.concat(t.id)
                        },
                    }
                },
                events: function(e) {
                    var t = e.actions,
                        n = e.key
                    return {
                        afterMount: function() {
                            'new' !== n && (t.loadFunnel(), t.loadStepsWithCount())
                        },
                    }
                },
                path: function(e) {
                    return ['scenes', 'funnels', 'funnelLogic', e]
                },
            })
        },
        377: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return X
            })
            n(128)
            var r = n(40),
                a = n(0),
                i = n.n(a),
                o = n(9),
                s = n(6),
                c = n.n(s),
                l = n(311),
                u = n.n(l),
                p = n(322),
                d = n(317),
                f = n(26)
            function h(e, t) {
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
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? h(Object(n), !0).forEach(function(t) {
                              c()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : h(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function v(e) {
                return []
                    .concat(u()(e[d.a.ACTIONS] || []), u()(e[d.a.EVENTS] || []), u()(e[d.a.NEW_ENTITY] || []))
                    .sort(function(e, t) {
                        return e.order - t.order
                    })
                    .map(function(e, t) {
                        return m(m({}, e), {}, { order: t })
                    })
            }
            function g(e) {
                var t,
                    n = e.map(function(e, t) {
                        return m(m({}, e), {}, { order: t })
                    })
                return (
                    (t = {}),
                    c()(
                        t,
                        d.a.ACTIONS,
                        n.filter(function(e) {
                            return e.type === d.a.ACTIONS
                        })
                    ),
                    c()(
                        t,
                        d.a.EVENTS,
                        n.filter(function(e) {
                            return e.type === d.a.EVENTS
                        })
                    ),
                    c()(
                        t,
                        d.a.NEW_ENTITY,
                        n.filter(function(e) {
                            return e.type === d.a.NEW_ENTITY
                        })
                    ),
                    t
                )
            }
            var y = Object(o.kea)({
                    key: function(e) {
                        return e.typeKey
                    },
                    connect: { values: [f.a, ['eventNames'], p.a, ['actions']] },
                    actions: function() {
                        return {
                            selectFilter: function(e) {
                                return { filter: e }
                            },
                            updateFilterMath: function(e) {
                                return { type: e.type, value: e.value, math: e.math, index: e.index }
                            },
                            updateFilter: function(e) {
                                return { type: e.type, index: e.index, value: e.value }
                            },
                            removeLocalFilter: function(e) {
                                return { value: e.value, type: e.type, index: e.index }
                            },
                            addFilter: !0,
                            updateFilterProperty: function(e) {
                                return { properties: e.properties, index: e.index }
                            },
                            setFilters: function(e) {
                                return { filters: e }
                            },
                            setLocalFilters: function(e) {
                                return { filters: e }
                            },
                        }
                    },
                    reducers: function(e) {
                        return {
                            selectedFilter: [
                                null,
                                {
                                    selectFilter: function(e, t) {
                                        return t.filter
                                    },
                                },
                            ],
                            localFilters: [
                                v(e.props.filters),
                                {
                                    setLocalFilters: function(e, t) {
                                        return v(t.filters)
                                    },
                                },
                            ],
                        }
                    },
                    selectors: function(e) {
                        var t = e.selectors
                        return {
                            entities: [
                                function() {
                                    return [t.eventNames, t.actions]
                                },
                                function(e, t) {
                                    var n
                                    return (
                                        (n = {}),
                                        c()(n, d.a.ACTIONS, t),
                                        c()(
                                            n,
                                            d.a.EVENTS,
                                            e.map(function(e) {
                                                return { id: e, name: e }
                                            })
                                        ),
                                        n
                                    )
                                },
                            ],
                            filters: [
                                function() {
                                    return [t.localFilters]
                                },
                                function(e) {
                                    return g(e)
                                },
                            ],
                        }
                    },
                    listeners: function(e) {
                        var t = e.actions,
                            n = e.values,
                            r = e.props
                        return {
                            updateFilter: function(e) {
                                var r = e.type,
                                    a = e.index,
                                    i = e.value
                                t.setFilters(
                                    n.localFilters.map(function(e, t) {
                                        return t === a ? m(m({}, e), {}, { id: i, type: r }) : e
                                    })
                                ),
                                    t.selectFilter(null)
                            },
                            updateFilterProperty: function(e) {
                                var r = e.properties,
                                    a = e.index
                                t.setFilters(
                                    n.localFilters.map(function(e, t) {
                                        return t === a ? m(m({}, e), {}, { properties: r }) : e
                                    })
                                )
                            },
                            updateFilterMath: function(e) {
                                var r = e.math,
                                    a = e.index
                                t.setFilters(
                                    n.localFilters.map(function(e, t) {
                                        return t === a ? m(m({}, e), {}, { math: r }) : e
                                    })
                                )
                            },
                            removeLocalFilter: function(e) {
                                var r = e.index
                                t.setFilters(
                                    n.localFilters.filter(function(e, t) {
                                        return t !== r
                                    })
                                )
                            },
                            addFilter: function() {
                                t.setFilters(
                                    [].concat(u()(n.localFilters), [
                                        { id: null, type: d.a.NEW_ENTITY, order: n.localFilters.length },
                                    ])
                                )
                            },
                            setFilters: function(e) {
                                var t = e.filters
                                r.setFilters(g(t))
                            },
                        }
                    },
                    path: function(e) {
                        return ['scenes', 'trends', 'ActionFilter', 'entityFilterLogic', e]
                    },
                }),
                b = (n(180), n(112)),
                O = n(12),
                E = n.n(O),
                j = n(127),
                S = n(184),
                w = n(17),
                C = n.n(w),
                k = n(18),
                F = n.n(k),
                D = n(7),
                P = n.n(D),
                x = n(21),
                T = n.n(x),
                A = n(22),
                N = n.n(A),
                _ = n(13),
                R = n.n(_),
                L = n(8),
                M = n(179)
            function V(e) {
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
                        r = R()(e)
                    if (t) {
                        var a = R()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return N()(this, n)
                }
            }
            var I = (function(e) {
                    T()(n, e)
                    var t = V(n)
                    function n() {
                        var e
                        C()(this, n)
                        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
                        return (e = t.call.apply(t, [this].concat(a))), c()(P()(e), 'infoDiv', i.a.createRef()), e
                    }
                    return (
                        F()(n, [
                            {
                                key: 'componentDidMount',
                                value: function(e) {
                                    if (this.infoDiv.current) {
                                        var t = this.props.boundingRect
                                        ;(this.infoDiv.current.style.top = t.top - t.height / 2 + 'px'),
                                            (this.infoDiv.current.style.left = t.left + t.width + 'px'),
                                            (this.infoDiv.current.style.opacity = 1)
                                    }
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function() {
                                    this.componentDidMount()
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.entity,
                                        n = e.isOpen
                                    return t
                                        ? i.a.createElement(
                                              'div',
                                              {
                                                  className: 'select-box-info',
                                                  ref: this.infoDiv,
                                                  style: { opacity: n ? 1 : 0 },
                                              },
                                              i.a.createElement('div', { style: { marginBottom: '0.5rem' } }, t.name),
                                              t.steps &&
                                                  t.steps.map(function(e, n) {
                                                      return i.a.createElement(
                                                          'div',
                                                          { key: e.id },
                                                          i.a.createElement(
                                                              j.a,
                                                              { key: e.id, style: { marginBottom: 0 } },
                                                              i.a.createElement(
                                                                  'div',
                                                                  { className: 'card-body' },
                                                                  i.a.createElement(
                                                                      'strong',
                                                                      null,
                                                                      e.event && '$' == e.event[0]
                                                                          ? e.event[1].toUpperCase() + e.event.slice(2)
                                                                          : e.event
                                                                  ),
                                                                  i.a.createElement(
                                                                      'ul',
                                                                      { style: { listStyle: 'none' } },
                                                                      e.selector &&
                                                                          i.a.createElement(
                                                                              'li',
                                                                              null,
                                                                              'CSS selector matches',
                                                                              i.a.createElement('pre', null, e.selector)
                                                                          ),
                                                                      e.tag_name &&
                                                                          i.a.createElement(
                                                                              'li',
                                                                              null,
                                                                              'Tag name matches ',
                                                                              i.a.createElement('pre', null, e.tag_name)
                                                                          ),
                                                                      e.text &&
                                                                          i.a.createElement(
                                                                              'li',
                                                                              null,
                                                                              'Text matches ',
                                                                              i.a.createElement('pre', null, e.text)
                                                                          ),
                                                                      e.href &&
                                                                          i.a.createElement(
                                                                              'li',
                                                                              null,
                                                                              'Link HREF matches ',
                                                                              i.a.createElement('pre', null, e.href)
                                                                          ),
                                                                      e.url &&
                                                                          i.a.createElement(
                                                                              'li',
                                                                              null,
                                                                              'URL ',
                                                                              'contains' == e.url_matching
                                                                                  ? 'contains'
                                                                                  : 'matches',
                                                                              ' ',
                                                                              i.a.createElement('pre', null, e.url)
                                                                          )
                                                                  )
                                                              )
                                                          ),
                                                          n < t.steps.length - 1 &&
                                                              i.a.createElement(
                                                                  'div',
                                                                  {
                                                                      className: 'secondary',
                                                                      style: { textAlign: 'center', margin: '1rem' },
                                                                  },
                                                                  'OR'
                                                              )
                                                      )
                                                  })
                                          )
                                        : null
                                },
                            },
                        ]),
                        n
                    )
                })(a.Component),
                $ = n(1),
                W = n.n($)
            function Y(e) {
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
                        r = R()(e)
                    if (t) {
                        var a = R()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return N()(this, n)
                }
            }
            var z = (function(e) {
                    T()(n, e)
                    var t = Y(n)
                    function n() {
                        return C()(this, n), t.apply(this, arguments)
                    }
                    return (
                        F()(n, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.entityType,
                                        n = e.chooseEntityType,
                                        r = e.allTypes
                                    return i.a.createElement(
                                        'div',
                                        {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                height: '25px',
                                                borderBottom: '1px solid #cccccc',
                                            },
                                        },
                                        r.map(function(e, a) {
                                            return i.a.createElement(
                                                'div',
                                                {
                                                    key: a,
                                                    style: {
                                                        backgroundColor: t == e ? '#eeeeee' : 'white',
                                                        flex: 1,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        borderTopLeftRadius: 0 == a ? '5px' : '0px',
                                                        borderTopRightRadius: a == r.length - 1 ? '5px' : '0px',
                                                        cursor: 'pointer',
                                                    },
                                                    onClick: function() {
                                                        return n(e)
                                                    },
                                                },
                                                Object(j.f)(e)
                                            )
                                        })
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(a.Component),
                q = n(27)
            function H(e) {
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
                        r = R()(e)
                    if (t) {
                        var a = R()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return N()(this, n)
                }
            }
            function U(e) {
                var t = Object(a.useState)(
                        (function(e) {
                            return e.selected
                                ? e.selected
                                : Array.isArray(e.children)
                                ? e.children[0].props.title
                                : e.children.props.title
                        })(e)
                    ),
                    n = E()(t, 2),
                    r = n[0],
                    o = n[1],
                    s = Object(a.useState)(
                        Array.isArray(e.children)
                            ? e.children.map(function(e) {
                                  return e.props.title
                              })
                            : [e.children.props.title]
                    ),
                    c = E()(s, 1)[0]
                return i.a.createElement(
                    'div',
                    { className: 'select-box', style: { padding: 0 } },
                    c.length > 1 && i.a.createElement(z, { entityType: r, allTypes: c, chooseEntityType: o }),
                    Array.isArray(e.children)
                        ? e.children.map(function(e) {
                              if (e.props.title === r) return e
                          })
                        : e.children
                )
            }
            var G = (function(e) {
                T()(n, e)
                var t = H(n)
                function n() {
                    var e
                    C()(this, n)
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
                    return (
                        (e = t.call.apply(t, [this].concat(a))),
                        c()(P()(e), 'state', { infoOpen: !1 }),
                        c()(P()(e), 'Option', function(t) {
                            return i.a.createElement(
                                'div',
                                {
                                    onMouseOver: function(n) {
                                        return e.setState({
                                            infoOpen: !0,
                                            infoBoundingRect: n.target.getBoundingClientRect(),
                                            infoActionId: t.value,
                                        })
                                    },
                                    onMouseOut: function(t) {
                                        e.setState({ infoOpen: !1 })
                                    },
                                },
                                i.a.createElement(L.z.Option, t)
                            )
                        }),
                        e
                    )
                }
                return (
                    F()(n, [
                        {
                            key: 'render',
                            value: function() {
                                var e = this
                                return i.a.createElement(
                                    'div',
                                    { style: { padding: '1rem', height: '90%', width: '100%' } },
                                    this.props.redirect,
                                    this.state.infoOpen &&
                                        i.a.createElement(I, {
                                            isOpen: this.state.infoOpen,
                                            boundingRect: this.state.infoBoundingRect,
                                            entity: this.props.onHover(this.state.infoActionId),
                                        }),
                                    i.a.createElement(M.a, {
                                        onBlur: function(t) {
                                            ;(t.relatedTarget && 'A' == t.relatedTarget.tagName) ||
                                                e.setState({ infoOpen: !1 })
                                        },
                                        onChange: this.props.onSelect,
                                        defaultMenuIsOpen: this.props.defaultMenuIsOpen,
                                        autoFocus: !0,
                                        value: this.props.active,
                                        className: 'select-box-select',
                                        styles: j.n,
                                        components: { Option: this.Option },
                                        options: this.props.options,
                                    }),
                                    this.props.message
                                )
                            },
                        },
                    ]),
                    n
                )
            })(a.Component)
            function B(e) {
                var t = e.onClickOutside,
                    n = e.logic,
                    r = Object(a.useRef)(),
                    s = Object(o.useValues)(n).selectedFilter,
                    c = Object(o.useValues)(f.a).eventNamesGrouped,
                    l = Object(o.useValues)(p.a).actionsGrouped,
                    u = function(e) {
                        r.current.contains(e.target) || (t && t(e))
                    }
                return (
                    Object(a.useEffect)(function() {
                        return (
                            document.addEventListener('mousedown', u),
                            function() {
                                document.removeEventListener('mousedown', u)
                            }
                        )
                    }, []),
                    i.a.createElement(
                        'div',
                        { ref: r, className: 'action-filter-dropdown' },
                        i.a.createElement(
                            U,
                            { selected: s.type && s.type !== d.a.NEW_ENTITY ? s.type : null },
                            i.a.createElement(K, {
                                title: 'actions',
                                entityType: d.a.ACTIONS,
                                options: l,
                                panelIndex: 0,
                                logic: n,
                            }),
                            i.a.createElement(K, {
                                title: 'events',
                                entityType: d.a.EVENTS,
                                options: c,
                                panelIndex: 1,
                                logic: n,
                            })
                        )
                    )
                )
            }
            function K(e) {
                var t = e.entityType,
                    n = e.panelIndex,
                    r = e.options,
                    a = e.logic,
                    s = Object(o.useValues)(a),
                    c = s.entities,
                    l = s.selectedFilter,
                    u = s.filters,
                    p = Object(o.useActions)(a).updateFilter
                return i.a.createElement(G, {
                    key: n,
                    title: t,
                    options: r,
                    defaultMenuIsOpen: !0,
                    onSelect: function(e) {
                        return p({ type: t, value: e.value, index: l.index })
                    },
                    onHover: function(e) {
                        return c[t].filter(function(t) {
                            return t.id === e
                        })[0]
                    },
                    active: null,
                    redirect: (function() {
                        if (l && l.type === d.a.ACTIONS && t === d.a.ACTIONS) {
                            var e = c[l.type].filter(function(e) {
                                return e.id === l.filter.id
                            })[0]
                            return i.a.createElement(
                                'a',
                                { href: '/action/' + l.filter.id, target: '_blank' },
                                'Edit "',
                                e.name,
                                '" ',
                                i.a.createElement('i', { className: 'fi flaticon-export' })
                            )
                        }
                        return null
                    })(),
                    message:
                        t !== d.a.ACTIONS || u[d.a.ACTIONS]
                            ? null
                            : i.a.createElement(
                                  'div',
                                  {
                                      style: {
                                          height: '100%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                      },
                                  },
                                  i.a.createElement('p', null, "You don't have any actions defined yet. "),
                                  i.a.createElement(q.a, { to: '/action' }, 'Click here to define an action.')
                              ),
                })
            }
            G.propTypes = {
                options: W.a.array.isRequired,
                defaultMenuIsOpen: W.a.bool.isRequired,
                onSelect: W.a.func.isRequired,
                title: W.a.string.isRequired,
                onHover: W.a.func.isRequired,
            }
            var J = n(323)
            function Z(e) {
                var t,
                    n,
                    r,
                    s = e.logic,
                    c = e.filter,
                    l = e.index,
                    u = Object(a.useRef)(),
                    p = Object(o.useValues)(s),
                    h = p.selectedFilter,
                    m = p.entities,
                    v = Object(o.useActions)(s),
                    g = v.selectFilter,
                    y = v.updateFilterMath,
                    b = v.removeLocalFilter,
                    O = v.updateFilterProperty,
                    S = Object(o.useValues)(f.a).eventProperties,
                    w = Object(a.useState)(!1),
                    C = E()(w, 2),
                    k = C[0],
                    F = C[1],
                    D = c.math
                return (
                    c.type === d.a.NEW_ENTITY
                        ? ((n = null), (r = null))
                        : ((n =
                              (t =
                                  m[c.type].filter(function(e) {
                                      return e.id === c.id
                                  })[0] || {}).name || c.name),
                          (r = t.id || c.id)),
                    i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(
                            'button',
                            {
                                ref: u,
                                className: 'filter-action',
                                type: 'button',
                                onClick: function() {
                                    h && h.type === c.type && h.index === l
                                        ? g(null)
                                        : g({ filter: c, type: c.type, index: l })
                                },
                                style: {
                                    border: 0,
                                    padding: 0,
                                    fontWeight: 500,
                                    borderBottom: '1.5px dotted var(--blue)',
                                },
                            },
                            n || 'Select action'
                        ),
                        i.a.createElement(Q, {
                            math: D,
                            index: l,
                            onMathSelect: function(e, t) {
                                y({ math: t, value: c.id, type: c.type, index: l })
                            },
                        }),
                        i.a.createElement(
                            'div',
                            {
                                className: 'btn btn-sm btn-light',
                                onClick: function() {
                                    return F(!k)
                                },
                            },
                            (function(e, t) {
                                return e
                                    ? 'Hide Filters'
                                    : t.properties && Object.keys(t.properties).length > 0
                                    ? Object.keys(t.properties).length +
                                      ' Filter' +
                                      (1 === Object.keys(t.properties).length ? '' : 's')
                                    : 'Add Filters'
                            })(k, c)
                        ),
                        i.a.createElement(j.b, {
                            onClick: function() {
                                b({ value: c.id, type: c.type, index: l })
                            },
                            style: { float: 'none', marginLeft: 8, position: 'absolute', marginTop: 3 },
                        }),
                        k &&
                            i.a.createElement(
                                'div',
                                { className: 'ml-4' },
                                i.a.createElement(J.a, {
                                    pageKey: ''.concat(l, '-').concat(r, '-filter'),
                                    properties: S,
                                    propertyFilters: c.properties,
                                    onChange: function(e) {
                                        return O({ properties: e, index: l })
                                    },
                                    style: { marginBottom: 0 },
                                })
                            ),
                        h &&
                            h.type === c.type &&
                            h.index === l &&
                            i.a.createElement(B, {
                                logic: s,
                                onClickOutside: function(e) {
                                    u.current.contains(e.target) || g(null)
                                },
                            })
                    )
                )
            }
            function Q(e) {
                var t = ['Total', 'DAU']
                return i.a.createElement(
                    S.a,
                    {
                        title:
                            t[
                                t
                                    .map(function(e) {
                                        return e.toLowerCase()
                                    })
                                    .indexOf(e.math)
                            ] || 'Total',
                        buttonClassName: 'btn btn-sm btn-light',
                        style: { marginLeft: 32, marginRight: 16 },
                    },
                    i.a.createElement(
                        b.a,
                        {
                            placement: 'right',
                            title:
                                'Total shows total event volume. If a user performs an event 3 times on one day it counts as 3.',
                        },
                        i.a.createElement(
                            'a',
                            {
                                href: '#',
                                className: 'dropdown-item',
                                onClick: function() {
                                    return e.onMathSelect(e.index, 'total')
                                },
                            },
                            'Total'
                        )
                    ),
                    i.a.createElement(
                        b.a,
                        {
                            placement: 'right',
                            title:
                                'Daily Active Users. Selecting DAU will mean a user performing an event 3 times on one day counts as 1.',
                        },
                        i.a.createElement(
                            'a',
                            {
                                href: '#',
                                className: 'dropdown-item',
                                onClick: function() {
                                    return e.onMathSelect(e.index, 'dau')
                                },
                            },
                            'DAU'
                        )
                    )
                )
            }
            function X(e) {
                var t = e.setFilters,
                    n = e.filters,
                    s = e.typeKey,
                    c = y({ setFilters: t, filters: n, typeKey: s }),
                    l = Object(o.useValues)(c).localFilters,
                    u = Object(o.useActions)(c),
                    p = u.addFilter,
                    d = u.setLocalFilters
                return (
                    Object(a.useEffect)(
                        function() {
                            d(n)
                        },
                        [n]
                    ),
                    i.a.createElement(
                        'div',
                        null,
                        l &&
                            l.map(function(e, t) {
                                return i.a.createElement(Z, { logic: c, filter: e, index: t, key: t })
                            }),
                        i.a.createElement(
                            r.a,
                            {
                                type: 'primary',
                                onClick: function() {
                                    return p()
                                },
                                style: { marginTop: '0.5rem' },
                            },
                            'Add action/event'
                        )
                    )
                )
            }
        },
        394: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return F
            })
            var r = n(17),
                a = n.n(r),
                i = n(18),
                o = n.n(i),
                s = n(7),
                c = n.n(s),
                l = n(21),
                u = n.n(l),
                p = n(22),
                d = n.n(p),
                f = n(13),
                h = n.n(f),
                m = n(6),
                v = n.n(m),
                g = n(0),
                y = n.n(g),
                b = n(16),
                O = n(395),
                E = n.n(O),
                j = n(27),
                S = n(127),
                w = n(1),
                C = n.n(w)
            function k(e) {
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
                    return d()(this, n)
                }
            }
            var F = (function(e) {
                u()(n, e)
                var t = k(n)
                function n(e) {
                    var r
                    return (
                        a()(this, n),
                        (r = t.call(this, e)),
                        v()(c()(r), 'container', y.a.createRef()),
                        v()(c()(r), 'graphContainer', y.a.createRef()),
                        (r.state = { funnel: e.funnel }),
                        (r.buildChart = r.buildChart.bind(c()(r))),
                        e.funnel || r.fetchFunnel.call(c()(r)),
                        r
                    )
                }
                return (
                    o()(n, [
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
                                b.a.get('api/funnel/' + this.props.filters.funnel_id).then(function(t) {
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
                                    var e = new E.a({
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
                                        ? y.a.createElement('div', {
                                              ref: this.container,
                                              className: 'svg-funnel-js',
                                              style: { height: '100%', width: '100%' },
                                          })
                                        : y.a.createElement(
                                              'p',
                                              { style: { margin: '1rem' } },
                                              "This funnel doesn't have any steps.",
                                              ' ',
                                              y.a.createElement(
                                                  j.a,
                                                  { to: '/funnel/' + e.id },
                                                  'Click here to add some steps.'
                                              )
                                          )
                                    : y.a.createElement(S.d, null)
                            },
                        },
                    ]),
                    n
                )
            })(g.Component)
            F.propTypes = { funnel: C.a.object, filters: C.a.shape({ funnel_id: C.a.number }) }
        },
        395: function(e, t, n) {
            e.exports = n(503).default
        },
        496: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return D
            })
            n(128)
            var r = n(40),
                a = n(6),
                i = n.n(a),
                o = n(17),
                s = n.n(o),
                c = n(18),
                l = n.n(c),
                u = n(7),
                p = n.n(u),
                d = n(21),
                f = n.n(d),
                h = n(22),
                m = n.n(h),
                v = n(13),
                g = n.n(v),
                y = n(0),
                b = n.n(y),
                O = n(16),
                E = n(69),
                j = n(23),
                S = n(27)
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
            function C(e) {
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
            function k(e) {
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
                        r = g()(e)
                    if (t) {
                        var a = g()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return m()(this, n)
                }
            }
            function F(e) {
                return e && e._isAMomentObject ? e.format('YYYY-MM-DD') : e
            }
            var D = (function(e) {
                f()(n, e)
                var t = k(n)
                function n(e) {
                    var r
                    return (
                        s()(this, n),
                        ((r = t.call(this, e)).state = {}),
                        (r.Modal = r.Modal.bind(p()(r))),
                        (r.save = r.save.bind(p()(r))),
                        r
                    )
                }
                return (
                    l()(n, [
                        {
                            key: 'Toast',
                            value: function(e) {
                                e.closeToast
                                return b.a.createElement(
                                    'div',
                                    null,
                                    'Panel added to dashboard. ',
                                    b.a.createElement(S.a, { to: '/dashboard' }, 'Click here to see it.')
                                )
                            },
                        },
                        {
                            key: 'save',
                            value: function(e) {
                                var t = this,
                                    n = this.props.filters
                                e.preventDefault(),
                                    O.a
                                        .create('api/dashboard', {
                                            filters: C(
                                                C({}, n),
                                                {},
                                                { date_from: F(n.date_from), date_to: F(n.date_to) }
                                            ),
                                            type: this.props.type,
                                            name: e.target.name.value,
                                        })
                                        .then(function() {
                                            Object(j.c)(t.Toast), t.setState({ openModal: !1 })
                                        })
                            },
                        },
                        {
                            key: 'Modal',
                            value: function() {
                                var e = this
                                return b.a.createElement(
                                    E.a,
                                    {
                                        title: 'Add graph to dashboard',
                                        onDismiss: function() {
                                            return e.setState({ openModal: !1 })
                                        },
                                    },
                                    b.a.createElement(
                                        'form',
                                        { onSubmit: this.save },
                                        b.a.createElement('label', null, 'Panel name on dashboard'),
                                        b.a.createElement('input', {
                                            name: 'name',
                                            autoFocus: !0,
                                            required: !0,
                                            type: 'text',
                                            className: 'form-control',
                                            placeholder: 'Users who did x',
                                            defaultValue: this.props.name,
                                        }),
                                        b.a.createElement('br', null),
                                        b.a.createElement(
                                            'button',
                                            { type: 'submit', className: 'btn btn-success' },
                                            'Add panel to dashboard'
                                        )
                                    )
                                )
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this
                                return b.a.createElement(
                                    'span',
                                    { className: 'save-to-dashboard' },
                                    this.state.openModal && b.a.createElement(this.Modal, null),
                                    b.a.createElement(
                                        r.a,
                                        {
                                            onClick: function() {
                                                return e.setState({ openModal: !0 })
                                            },
                                            type: 'primary',
                                        },
                                        'Add to dashboard'
                                    )
                                )
                            },
                        },
                    ]),
                    n
                )
            })(y.Component)
        },
        503: function(e, t, n) {
            'use strict'
            n.r(t)
            const r = e => Math.round(10 * e) / 10,
                a = e =>
                    Number(e)
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                i = (e, t, n, a) => ` C${r((n + e) / 2)},${t} ${r((n + e) / 2)},${a} ${n},${a}`,
                o = (e, t, n, a) => ` C${e},${r((a + t) / 2)} ${n},${r((a + t) / 2)} ${n},${a}`,
                s = (e, t, n, r) => {
                    let a = `M${t[0]},${n[0]}`
                    for (let e = 0; e < t.length - 1; e++) a += i(t[e], n[e], t[e + 1], n[e + 1])
                    a += ` L${[...t].pop()},${[...r].pop()}`
                    for (let e = t.length - 1; e > 0; e--) a += i(t[e], r[e], t[e - 1], r[e - 1])
                    return (a += ' Z'), a
                },
                c = (e, t, n, r) => {
                    let a = `M${t[0]},${r[0]}`
                    for (let e = 0; e < t.length - 1; e++) a += o(t[e], r[e], t[e + 1], r[e + 1])
                    a += ` L${[...n].pop()},${[...r].pop()}`
                    for (let e = t.length - 1; e > 0; e--) a += o(n[e], r[e], n[e - 1], r[e - 1])
                    return (a += ' Z'), a
                },
                l = (e, t) => {
                    'object' == typeof t &&
                        Object.keys(t).forEach(n => {
                            e.setAttribute(n, t[n])
                        })
                },
                u = (e, ...t) => {
                    t.forEach(t => {
                        e.removeAttribute(t)
                    })
                },
                p = (e, t, n) => {
                    const r = document.createElementNS('http://www.w3.org/2000/svg', e)
                    return 'object' == typeof n && l(r, n), void 0 !== t && t.appendChild(r), r
                },
                d = [
                    '#FF4589',
                    '#FF5050',
                    '#05DF9D',
                    '#4FF2FD',
                    '#2D9CDB',
                    '#A0BBFF',
                    '#FFD76F',
                    '#F2C94C',
                    '#FF9A9A',
                    '#FFB178',
                ],
                f = e => {
                    const t = [...d],
                        n = []
                    for (let r = 0; r < e; r++) {
                        const e = Math.abs(Math.round(Math.random() * (t.length - 1)))
                        n.push(t[e]), t.splice(e, 1)
                    }
                    return n
                }
            var h = e =>
                Math.random()
                    .toString(36)
                    .replace('0.', e || '')
            class m {
                constructor(e) {
                    ;(this.containerSelector = e.container),
                        (this.gradientDirection =
                            e.gradientDirection && 'vertical' === e.gradientDirection ? 'vertical' : 'horizontal'),
                        (this.direction = e.direction && 'vertical' === e.direction ? 'vertical' : 'horizontal'),
                        (this.labels = m.getLabels(e)),
                        (this.subLabels = m.getSubLabels(e)),
                        (this.values = m.getValues(e)),
                        (this.percentages = this.createPercentages()),
                        (this.colors = e.data.colors || f(this.is2d() ? this.getSubDataSize() : 2)),
                        (this.displayPercent = e.displayPercent || !1),
                        (this.data = e.data),
                        (this.height = e.height),
                        (this.width = e.width),
                        (this.subLabelValue = e.subLabelValue || 'percent')
                }
                getMainAxisPoints() {
                    const e = this.getDataSize(),
                        t = [],
                        n = this.isVertical() ? this.getHeight() : this.getWidth()
                    for (let a = 0; a <= e; a++) t.push(r((n * a) / e))
                    return t
                }
                getCrossAxisPoints() {
                    const e = [],
                        t = this.getFullDimension(),
                        n = t / 2
                    if (this.is2d()) {
                        const a = this.getValues2d(),
                            i = Math.max(...a)
                        a.push([...a].pop()), e.push(a.map(e => r(((i - e) / i) * n)))
                        const o = this.getPercentages2d(),
                            s = e[0]
                        for (let n = 1; n < this.getSubDataSize(); n++) {
                            const a = e[n - 1],
                                i = []
                            for (let e = 0; e < this.getDataSize(); e++)
                                i.push(r(a[e] + (t - 2 * s[e]) * (o[e][n - 1] / 100)))
                            i.push([...i].pop()), e.push(i)
                        }
                        e.push(s.map(e => t - e))
                    } else {
                        const a = Math.max(...this.values),
                            i = [...this.values].concat([...this.values].pop())
                        e.push(i.map(e => r(((a - e) / a) * n))), e.push(e[0].map(e => t - e))
                    }
                    return e
                }
                getGraphType() {
                    return this.values && this.values[0] instanceof Array ? '2d' : 'normal'
                }
                is2d() {
                    return '2d' === this.getGraphType()
                }
                isVertical() {
                    return 'vertical' === this.direction
                }
                getDataSize() {
                    return this.values.length
                }
                getSubDataSize() {
                    return this.values[0].length
                }
                getFullDimension() {
                    return this.isVertical() ? this.getWidth() : this.getHeight()
                }
                static getSubLabels(e) {
                    if (!e.data) throw new Error('Data is missing')
                    const { data: t } = e
                    return void 0 === t.subLabels ? [] : t.subLabels
                }
                static getLabels(e) {
                    if (!e.data) throw new Error('Data is missing')
                    const { data: t } = e
                    return void 0 === t.labels ? [] : t.labels
                }
                addLabels() {
                    const e = document.createElement('div')
                    e.setAttribute('class', 'svg-funnel-js__labels'),
                        this.percentages.forEach((t, n) => {
                            const r = document.createElement('div')
                            r.setAttribute('class', 'svg-funnel-js__label label-' + (n + 1))
                            const i = document.createElement('div')
                            i.setAttribute('class', 'label__title'), (i.textContent = this.labels[n] || '')
                            const o = document.createElement('div')
                            o.setAttribute('class', 'label__value')
                            const s = this.is2d() ? this.getValues2d()[n] : this.values[n]
                            o.textContent = a(s)
                            const c = document.createElement('div')
                            if (
                                (c.setAttribute('class', 'label__percentage'),
                                (c.textContent = t.toString() + '%'),
                                r.appendChild(o),
                                r.appendChild(i),
                                this.displayPercent && r.appendChild(c),
                                this.is2d())
                            ) {
                                const e = document.createElement('div')
                                e.setAttribute('class', 'label__segment-percentages')
                                let t = '<ul class="segment-percentage__list">'
                                const i = this.getPercentages2d()
                                this.subLabels.forEach((e, r) => {
                                    const o = 'percent' === this.subLabelValue ? i[n][r] + '%' : a(this.values[n][r])
                                    t += `<li>${this.subLabels[r]}:\n    <span class="percentage__list-label">${o}</span>\n </li>`
                                }),
                                    (t += '</ul>'),
                                    (e.innerHTML = t),
                                    r.appendChild(e)
                            }
                            e.appendChild(r)
                        }),
                        this.container.appendChild(e)
                }
                addSubLabels() {
                    if (this.subLabels) {
                        const e = document.createElement('div')
                        e.setAttribute('class', 'svg-funnel-js__subLabels')
                        let t = ''
                        this.subLabels.forEach((e, n) => {
                            t += `<div class="svg-funnel-js__subLabel svg-funnel-js__subLabel-${n +
                                1}">\n    <div class="svg-funnel-js__subLabel--color"\n        style="${((
                                e,
                                t = 'horizontal'
                            ) =>
                                'string' == typeof e
                                    ? 'background-color: ' + e
                                    : 1 === e.length
                                    ? 'background-color: ' + e[0]
                                    : `background-image: linear-gradient(${
                                          'horizontal' === t ? 'to right, ' : ''
                                      }${e.join(', ')})`)(
                                this.colors[n],
                                this.gradientDirection
                            )}"></div>\n    <div class="svg-funnel-js__subLabel--title">${e}</div>\n</div>`
                        }),
                            (e.innerHTML = t),
                            this.container.appendChild(e)
                    }
                }
                createContainer() {
                    if (!this.containerSelector) throw new Error('Container is missing')
                    if ('string' == typeof this.containerSelector) {
                        if (((this.container = document.querySelector(this.containerSelector)), !this.container))
                            throw new Error(`Container cannot be found (selector: ${this.containerSelector}).`)
                    } else {
                        if (!(this.container instanceof HTMLElement))
                            throw new Error('Container must either be a selector string or an HTMLElement.')
                        this.container = this.containerSelector
                    }
                    this.container.classList.add('svg-funnel-js'),
                        (this.graphContainer = document.createElement('div')),
                        this.graphContainer.classList.add('svg-funnel-js__container'),
                        this.container.appendChild(this.graphContainer),
                        'vertical' === this.direction && this.container.classList.add('svg-funnel-js--vertical')
                }
                setValues(e) {
                    return (this.values = e), this
                }
                setDirection(e) {
                    return (this.direction = e), this
                }
                setHeight(e) {
                    return (this.height = e), this
                }
                setWidth(e) {
                    return (this.width = e), this
                }
                static getValues(e) {
                    if (!e.data) return []
                    const { data: t } = e
                    return 'object' == typeof t ? t.values : []
                }
                getValues2d() {
                    const e = []
                    return (
                        this.values.forEach(t => {
                            e.push(t.reduce((e, t) => e + t, 0))
                        }),
                        e
                    )
                }
                getPercentages2d() {
                    const e = []
                    return (
                        this.values.forEach(t => {
                            const n = t.reduce((e, t) => e + t, 0)
                            e.push(t.map(e => (0 === n ? 0 : r((100 * e) / n))))
                        }),
                        e
                    )
                }
                createPercentages() {
                    let e = []
                    e = this.is2d() ? this.getValues2d() : [...this.values]
                    const t = Math.max(...e)
                    return e.map(e => (0 === e ? 0 : r((100 * e) / t)))
                }
                applyGradient(e, t, n, r) {
                    const a = null === e.querySelector('defs') ? p('defs', e) : e.querySelector('defs'),
                        i = h(`funnelGradient-${r}-`),
                        o = p('linearGradient', a, { id: i })
                    'vertical' === this.gradientDirection && l(o, { x1: '0', x2: '0', y1: '0', y2: '1' })
                    const s = n.length
                    for (let e = 0; e < s; e++)
                        p('stop', o, { 'stop-color': n[e], offset: Math.round((100 * e) / (s - 1)) + '%' })
                    l(t, { fill: `url("#${i}")`, stroke: `url("#${i}")` })
                }
                makeSVG() {
                    const e = p('svg', this.graphContainer, { width: this.getWidth(), height: this.getHeight() }),
                        t = this.getCrossAxisPoints().length - 1
                    for (let n = 0; n < t; n++) {
                        const t = p('path', e),
                            r = this.is2d() ? this.colors[n] : this.colors,
                            a = 'string' == typeof r || 1 === r.length ? 'solid' : 'gradient'
                        'solid' === a
                            ? l(t, { fill: r, stroke: r })
                            : 'gradient' === a && this.applyGradient(e, t, r, n + 1),
                            e.appendChild(t)
                    }
                    this.graphContainer.appendChild(e)
                }
                getSVG() {
                    const e = this.container.querySelector('svg')
                    if (!e) throw new Error('No SVG found inside of the container')
                    return e
                }
                getWidth() {
                    return this.width || this.graphContainer.clientWidth
                }
                getHeight() {
                    return this.height || this.graphContainer.clientHeight
                }
                getPathDefinitions() {
                    const e = this.getCrossAxisPoints().length - 1,
                        t = []
                    for (let n = 0; n < e; n++)
                        if (this.isVertical()) {
                            const e = this.getCrossAxisPoints()[n],
                                r = this.getCrossAxisPoints()[n + 1],
                                a = this.getMainAxisPoints(),
                                i = c(0, e, r, a)
                            t.push(i)
                        } else {
                            const e = this.getMainAxisPoints(),
                                r = this.getCrossAxisPoints()[n],
                                a = this.getCrossAxisPoints()[n + 1],
                                i = s(0, e, r, a)
                            t.push(i)
                        }
                    return t
                }
                getPathMedian(e) {
                    if (this.isVertical()) {
                        const t = this.getCrossAxisPoints()[e],
                            n = this.getCrossAxisPoints()[e + 1],
                            r = this.getMainAxisPoints(),
                            a = [],
                            i = []
                        return (
                            t.forEach((e, t) => {
                                const r = (e + n[t]) / 2
                                a.push(r - 1), i.push(r + 1)
                            }),
                            c(0, a, i, r)
                        )
                    }
                    const t = this.getMainAxisPoints(),
                        n = this.getCrossAxisPoints()[e],
                        r = this.getCrossAxisPoints()[e + 1],
                        a = [],
                        i = []
                    return (
                        n.forEach((e, t) => {
                            const n = (e + r[t]) / 2
                            a.push(n - 1), i.push(n + 1)
                        }),
                        s(0, t, a, i)
                    )
                }
                drawPaths() {
                    const e = this.getSVG().querySelectorAll('path')
                    this.getPathDefinitions().forEach((t, n) => {
                        e[n].setAttribute('d', t)
                    })
                }
                draw() {
                    this.createContainer(),
                        this.makeSVG(),
                        this.addLabels(),
                        this.is2d() && this.addSubLabels(),
                        this.drawPaths()
                }
                makeVertical() {
                    if ('vertical' === this.direction) return !0
                    ;(this.direction = 'vertical'), this.container.classList.add('svg-funnel-js--vertical')
                    const e = this.getSVG(),
                        t = this.getHeight(),
                        n = this.getWidth()
                    return l(e, { height: t, width: n }), this.drawPaths(), !0
                }
                makeHorizontal() {
                    if ('horizontal' === this.direction) return !0
                    ;(this.direction = 'horizontal'), this.container.classList.remove('svg-funnel-js--vertical')
                    const e = this.getSVG(),
                        t = this.getHeight(),
                        n = this.getWidth()
                    return l(e, { height: t, width: n }), this.drawPaths(), !0
                }
                toggleDirection() {
                    'horizontal' === this.direction ? this.makeVertical() : this.makeHorizontal()
                }
                gradientMakeVertical() {
                    if ('vertical' === this.gradientDirection) return !0
                    this.gradientDirection = 'vertical'
                    const e = this.graphContainer.querySelectorAll('linearGradient')
                    for (let t = 0; t < e.length; t++) l(e[t], { x1: '0', x2: '0', y1: '0', y2: '1' })
                    return !0
                }
                gradientMakeHorizontal() {
                    if ('horizontal' === this.gradientDirection) return !0
                    this.gradientDirection = 'horizontal'
                    const e = this.graphContainer.querySelectorAll('linearGradient')
                    for (let t = 0; t < e.length; t++) u(e[t], 'x1', 'x2', 'y1', 'y2')
                    return !0
                }
                gradientToggleDirection() {
                    'horizontal' === this.gradientDirection
                        ? this.gradientMakeVertical()
                        : this.gradientMakeHorizontal()
                }
                updateWidth(e) {
                    this.width = e
                    const t = this.getSVG(),
                        n = this.getWidth()
                    return l(t, { width: n }), this.drawPaths(), !0
                }
                updateHeight(e) {
                    this.height = e
                    const t = this.getSVG(),
                        n = this.getHeight()
                    return l(t, { height: n }), this.drawPaths(), !0
                }
                updateData(e) {
                    const t = this.container.querySelector('.svg-funnel-js__labels'),
                        n = this.container.querySelector('.svg-funnel-js__subLabels')
                    t && t.remove(),
                        n && n.remove(),
                        (this.labels = []),
                        (this.colors = f(this.is2d() ? this.getSubDataSize() : 2)),
                        (this.values = []),
                        (this.percentages = []),
                        void 0 !== e.labels && (this.labels = m.getLabels({ data: e })),
                        void 0 !== e.colors && (this.colors = e.colors || f(this.is2d() ? this.getSubDataSize() : 2)),
                        void 0 !== e.values &&
                            (Object.prototype.toString.call(e.values[0]) !==
                            Object.prototype.toString.call(this.values[0])
                                ? (this.container.querySelector('svg').remove(),
                                  (this.values = m.getValues({ data: e })),
                                  this.makeSVG())
                                : (this.values = m.getValues({ data: e })),
                            this.drawPaths()),
                        (this.percentages = this.createPercentages()),
                        this.addLabels(),
                        void 0 !== e.subLabels && ((this.subLabels = m.getSubLabels({ data: e })), this.addSubLabels())
                }
                update(e) {
                    void 0 !== e.displayPercent &&
                        this.displayPercent !== e.displayPercent &&
                        (!0 === this.displayPercent
                            ? this.container.querySelectorAll('.label__percentage').forEach(e => {
                                  e.remove()
                              })
                            : this.container.querySelectorAll('.svg-funnel-js__label').forEach((e, t) => {
                                  const n = this.percentages[t],
                                      r = document.createElement('div')
                                  r.setAttribute('class', 'label__percentage'),
                                      100 !== n && ((r.textContent = n.toString() + '%'), e.appendChild(r))
                              })),
                        void 0 !== e.height && this.updateHeight(e.height),
                        void 0 !== e.width && this.updateWidth(e.width),
                        void 0 !== e.gradientDirection &&
                            ('vertical' === e.gradientDirection
                                ? this.gradientMakeVertical()
                                : 'horizontal' === e.gradientDirection && this.gradientMakeHorizontal()),
                        void 0 !== e.direction &&
                            ('vertical' === e.direction
                                ? this.makeVertical()
                                : 'horizontal' === e.direction && this.makeHorizontal()),
                        void 0 !== e.data && this.updateData(e.data)
                }
            }
            t.default = m
        },
        518: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'EditFunnel', function() {
                    return h
                })
            n(128)
            var r = n(40),
                a = n(0),
                i = n.n(a),
                o = n(127),
                s = n(27),
                c = n(322),
                l = n(9),
                u = n(373),
                p = n(377),
                d = n(323),
                f = n(26)
            function h(e) {
                var t = e.funnelId,
                    n = Object(l.useValues)(Object(u.a)({ id: t })),
                    a = n.funnel,
                    h = n.isStepsEmpty,
                    m = Object(l.useActions)(Object(u.a)({ id: t })),
                    v = m.setFunnel,
                    g = m.updateFunnel,
                    y = m.createFunnel,
                    b = Object(l.useValues)(Object(c.a)()),
                    O = b.actions,
                    E = b.actionsLoading,
                    j = Object(l.useValues)(f.a).eventProperties
                return i.a.createElement(
                    'form',
                    {
                        onSubmit: function(e) {
                            e.preventDefault(), a.id ? g(a) : y(a)
                        },
                    },
                    i.a.createElement(
                        o.a,
                        null,
                        i.a.createElement(
                            'div',
                            { className: 'card-body' },
                            i.a.createElement('input', {
                                required: !0,
                                placeholder: 'User drop off through signup',
                                type: 'text',
                                autoFocus: !0,
                                onChange: function(e) {
                                    return v({ name: e.target.value })
                                },
                                value: a.name || '',
                                className: 'form-control',
                            }),
                            !E &&
                                0 === O.length &&
                                i.a.createElement(
                                    'div',
                                    { className: 'alert alert-warning', style: { marginTop: '1rem' } },
                                    "You don't have any actions set up. ",
                                    i.a.createElement(s.a, { to: '/actions' }, 'Click here to set up an action')
                                ),
                            i.a.createElement('br', null),
                            i.a.createElement(p.a, {
                                filters: a.filters,
                                setFilters: function(e) {
                                    return v({ filters: e }, !1)
                                },
                                typeKey: 'EditFunnel-'.concat(a.id || 'new'),
                            }),
                            i.a.createElement('br', null),
                            i.a.createElement('hr', null),
                            i.a.createElement('h4', { className: 'secondary mt-3' }, 'Filters'),
                            i.a.createElement(d.a, {
                                pageKey: 'EditFunnel-'.concat(a.id || 'new'),
                                properties: j,
                                propertyFilters: a.filters.properties || [],
                                onChange: function(e) {
                                    return v({ filters: { properties: e } })
                                },
                                style: { marginBottom: 0 },
                            }),
                            i.a.createElement('hr', null),
                            i.a.createElement(
                                r.a,
                                { type: 'primary mt-3', htmlType: 'submit', disabled: h },
                                'Save funnel'
                            ),
                            i.a.createElement('br', null),
                            h && i.a.createElement('small', null, 'Add some actions/events to save the funnel')
                        )
                    )
                )
            }
        },
        567: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Funnel', function() {
                    return m
                })
            var r = n(0),
                a = n.n(r),
                i = n(127),
                o = n(496),
                s = n(372),
                c = n(518),
                l = n(394),
                u = n(9),
                p = n(373),
                d = n(27),
                f = n(317)
            function h(e) {
                var t = e.id,
                    n = Object(u.useValues)(Object(p.a)({ id: t })),
                    r = n.stepsWithCount,
                    o = n.peopleSorted,
                    s = n.peopleLoading
                return a.a.createElement(
                    i.a,
                    { title: 'Per user' },
                    s && a.a.createElement(i.d, null),
                    a.a.createElement(
                        'table',
                        { className: 'table table-bordered table-fixed' },
                        a.a.createElement(
                            'tbody',
                            null,
                            a.a.createElement(
                                'tr',
                                null,
                                a.a.createElement('th', null),
                                r &&
                                    r.map(function(e, t) {
                                        return a.a.createElement(
                                            'th',
                                            { key: t },
                                            e.type === f.a.ACTIONS
                                                ? a.a.createElement(d.a, { to: '/action/' + e.action_id }, e.name)
                                                : e.name
                                        )
                                    })
                            ),
                            a.a.createElement(
                                'tr',
                                null,
                                a.a.createElement('td', null),
                                r &&
                                    r.map(function(e, t) {
                                        return a.a.createElement(
                                            'td',
                                            { key: t },
                                            e.count,
                                            '  (',
                                            Object(i.m)(e.count / r[0].count),
                                            ')'
                                        )
                                    })
                            ),
                            o &&
                                o.map(function(e) {
                                    return a.a.createElement(
                                        'tr',
                                        { key: e.id },
                                        a.a.createElement(
                                            'td',
                                            { className: 'text-overflow' },
                                            a.a.createElement(d.a, { to: '/person_by_id/'.concat(e.id) }, e.name)
                                        ),
                                        r.map(function(t, n) {
                                            return a.a.createElement('td', {
                                                key: n,
                                                className:
                                                    t.people.indexOf(e.id) > -1 ? 'funnel-success' : 'funnel-dropped',
                                            })
                                        })
                                    )
                                })
                        )
                    )
                )
            }
            function m(e) {
                var t = e.id,
                    n = Object(u.useValues)(Object(p.a)({ id: t })),
                    r = n.funnel,
                    d = n.funnelLoading,
                    f = n.stepsWithCount,
                    m = n.stepsWithCountLoading,
                    v = Object(u.useActions)(Object(p.a)({ id: t })).setFunnel
                return !r && d
                    ? a.a.createElement(i.d, null)
                    : a.a.createElement(
                          'div',
                          { className: 'funnel' },
                          r.id
                              ? a.a.createElement('h1', null, 'Funnel: ', r.name)
                              : a.a.createElement('h1', null, 'New funnel'),
                          a.a.createElement(c.EditFunnel, { funnelId: t }),
                          r.id &&
                              a.a.createElement(
                                  i.a,
                                  {
                                      title: a.a.createElement(
                                          'span',
                                          null,
                                          a.a.createElement(
                                              'span',
                                              { className: 'float-right' },
                                              a.a.createElement(s.a, {
                                                  onChange: function(e, t) {
                                                      return v({ filters: { date_from: e, date_to: t } }, !0)
                                                  },
                                                  dateFrom: r.filters.date_from,
                                                  dateTo: r.filters.date_to,
                                              }),
                                              a.a.createElement(o.a, {
                                                  filters: { funnel_id: r.id },
                                                  type: 'FunnelViz',
                                                  name: r.name,
                                              })
                                          ),
                                          'Graph'
                                      ),
                                  },
                                  a.a.createElement(
                                      'div',
                                      { style: { height: 300 } },
                                      m && a.a.createElement(i.d, null),
                                      f && f[0] && f[0].count > -1 && a.a.createElement(l.a, { funnel: { steps: f } })
                                  )
                              ),
                          r.id && a.a.createElement(h, { id: t })
                      )
            }
        },
    },
])
//# sourceMappingURL=funnel.js.map
