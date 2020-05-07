;(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return j
            }),
                n.d(t, 'o', function() {
                    return w
                }),
                n.d(t, 'j', function() {
                    return S
                }),
                n.d(t, 'm', function() {
                    return F
                }),
                n.d(t, 'd', function() {
                    return x
                }),
                n.d(t, 'e', function() {
                    return k
                }),
                n.d(t, 'b', function() {
                    return N
                }),
                n.d(t, 'a', function() {
                    return P
                }),
                n.d(t, 'c', function() {
                    return C
                }),
                n.d(t, 'n', function() {
                    return T
                }),
                n.d(t, 'g', function() {
                    return A
                }),
                n.d(t, 'f', function() {
                    return I
                }),
                n.d(t, 'l', function() {
                    return R
                }),
                n.d(t, 'i', function() {
                    return _
                }),
                n.d(t, 'h', function() {
                    return V
                }),
                n.d(t, 'k', function() {
                    return L
                })
            var r = n(42),
                a = n.n(r),
                i = n(6),
                o = n.n(i),
                c = (n(129), n(75)),
                u = n(12),
                s = n.n(u),
                l = n(96),
                p = n.n(l),
                f = n(0),
                d = n.n(f),
                m = n(16),
                y = n(23),
                v = n(1),
                h = n.n(v)
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
            function g(e, t) {
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
            var w = function(e) {
                    return Object.entries(e)
                        .filter(function(e) {
                            var t = s()(e, 2)
                            t[0]
                            return t[1]
                        })
                        .map(function(e) {
                            var t = s()(e, 2),
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
                F = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                x = function() {
                    return d.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        d.a.createElement('div', null),
                        d.a.createElement(c.a, null)
                    )
                },
                k = function(e) {
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
                N = function(e) {
                    return d.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: E({}, e.style) }),
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
            var C = function(e) {
                return d.a.createElement(
                    'a',
                    {
                        href: '#',
                        onClick: function(t) {
                            t.preventDefault(),
                                (function t(n) {
                                    m.a
                                        .update(
                                            'api/' + e.endpoint + '/' + e.object.id,
                                            E(E({}, e.object), {}, { deleted: !n })
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
                                            Object(y.c)(r, { toastId: 'delete-item-' + e.object.id })
                                        })
                                })()
                        },
                        className: e.className,
                        style: e.style,
                    },
                    e.children
                )
            }
            C.propTypes = {
                endpoint: h.a.string.isRequired,
                object: h.a.shape({ name: h.a.string.isRequired, id: h.a.number.isRequired }).isRequired,
                className: h.a.string,
                style: h.a.object,
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
                            c = n && !r
                        clearTimeout(r), (r = setTimeout(o, t)), c && e.apply(a, i)
                    }
                },
                I = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                R = {
                    exact: '= equals',
                    is_not: "≠ doesn't equal",
                    icontains: '∋ contains',
                    not_icontains: "∌ doesn't contain",
                    gt: '> greater than',
                    lt: '< lower than',
                },
                D = Object.entries(R).reverse(),
                _ = function(e) {
                    var t,
                        n = b(D)
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = s()(t.value, 2),
                                a = r[0],
                                i = r[1]
                            if (e.includes(a)) return e.replace('__' + a, '') + ' '.concat(i.split(' ')[0], ' ')
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return e + ' '.concat(R.exact.split(' ')[0], ' ')
                },
                V = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        m.a.delete('api/person/' + e.id).then(function() {
                            Object(y.c)('Person succesfully deleted.'), t && t()
                        })
                },
                L = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        317: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return g
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
                    return x
                })
            var r = n(29),
                a = n.n(r),
                i = n(53),
                o = n.n(i),
                c = n(67),
                u = n.n(c),
                s = n(6),
                l = n.n(s),
                p = n(9),
                f = n(16),
                d = n(127),
                m = n(322),
                y = n(26),
                v = n(28)
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
            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? h(Object(n), !0).forEach(function(t) {
                              l()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : h(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var g = { ACTIONS: 'actions', EVENTS: 'events', NEW_ENTITY: 'new_entity' },
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
            function w(e) {
                return b(
                    b({}, e),
                    {},
                    {
                        interval: F(e),
                        display: e.session && 'dist' === e.session ? 'ActionsTable' : e.display,
                        actions: Array.isArray(e.actions) ? e.actions : void 0,
                        events: Array.isArray(e.events) ? e.events : void 0,
                        properties: e.properties || {},
                    }
                )
            }
            function S(e) {
                e.people_day, e.people_action, e.stickiness_days
                return u()(e, ['people_day', 'people_action', 'stickiness_days'])
            }
            function F(e) {
                var t = e.date_from,
                    n = e.interval
                if (!n) return 'day'
                var r = O[t] && 'minute' === n,
                    a = E[t] && 'hour' === n
                return r ? 'hour' : a ? 'day' : n
            }
            var x = Object(p.kea)({
                key: function(e) {
                    return e.dashboardItemId || 'all_trends'
                },
                connect: { values: [y.a, ['eventNames'], m.a, ['actions']] },
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
                                                            f.a.get('api/event/sessions/?' + Object(d.o)(S(n.filters)))
                                                        )
                                                    case 3:
                                                        return e.abrupt('return', e.sent)
                                                    case 4:
                                                        return (
                                                            (e.next = 6),
                                                            f.a.get('api/action/trends/?' + Object(d.o)(S(n.filters)))
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
                                      return w(v.router.selectors.searchParams(e))
                                  },
                            l()({}, r.setFilters, function(e, t) {
                                var n = t.filters
                                return w(b(b({}, t.mergeFilters ? e : {}), n))
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
                        c = e.values
                    return (
                        (t = {}),
                        l()(
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
                        l()(
                            t,
                            i.loadPeople,
                            ((n = o()(
                                a.a.mark(function e(t, n) {
                                    var r, o, u, s, p, m, y, v
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (u = t.action),
                                                        (s = t.day),
                                                        (p = t.breakdown_value),
                                                        (m = S(
                                                            b(b({}, c.filters), {}, { entityId: u.id, type: u.type })
                                                        )),
                                                        'Stickiness' === c.filters.shown_as
                                                            ? (m.stickiness_days = s)
                                                            : ((m.date_from = s), (m.date_to = s)),
                                                        p &&
                                                            (m.properties = b(
                                                                b({}, m.properties),
                                                                {},
                                                                l()({}, m.breakdown, p)
                                                            )),
                                                        (y = Object(d.o)(m)),
                                                        i.setPeople(null, null, u, s, p),
                                                        (e.next = 8),
                                                        f.a.get('api/action/people/?include_last_event=1&'.concat(y))
                                                    )
                                                case 8:
                                                    ;(v = e.sent),
                                                        n(),
                                                        i.setPeople(
                                                            null === (r = v[0]) || void 0 === r ? void 0 : r.people,
                                                            null === (o = v[0]) || void 0 === o ? void 0 : o.count,
                                                            u,
                                                            s,
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
                        l()(t, n.setFilters, function(e) {
                            var t = e.fromUrl
                            if (!a.dashboardItemId) return t ? void 0 : ['/trends', r.filters]
                        }),
                        l()(t, n.setActiveView, function(e) {
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
                                var i = w(a)
                                if (0 === Object.keys(a).length && n.eventNames && n.eventNames[0]) {
                                    var o = n.eventNames.includes('$pageview')
                                        ? '$pageview'
                                        : n.eventNames.includes('$screen')
                                        ? '$screen'
                                        : n.eventNames[0]
                                    i[g.EVENTS] = [{ id: o, name: o, type: g.EVENTS, order: 0 }]
                                }
                                Object(d.k)(i, n.filters) || t.setFilters(i, !1, !0)
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
                i = n(53),
                o = n.n(i),
                c = n(9),
                u = n(16),
                s = function(e, t) {
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
                                    ((e = o()(
                                        a.a.mark(function e() {
                                            var t
                                            return a.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), u.a.get('api/action')
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
                                            s(e, '$autocapture') && t[0].options.push(n),
                                                s(e, '$pageview') && t[2].options.push(n),
                                                s(e, '$autocapture') || s(e, '$pageview') || t[1].options.push(n)
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
                return G
            })
            n(357)
            var r = n(358),
                a = (n(388), n(393)),
                i = (n(128), n(40)),
                o = n(12),
                c = n.n(o),
                u = n(0),
                s = n.n(u),
                l = n(179),
                p = n(127),
                f = n(17),
                d = n.n(f),
                m = n(18),
                y = n.n(m),
                v = n(7),
                h = n.n(v),
                b = n(21),
                g = n.n(b),
                O = n(22),
                E = n.n(O),
                j = n(13),
                w = n.n(j),
                S = n(16),
                F = n(392),
                x = n(1),
                k = n.n(x)
            function N(e) {
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
                        r = w()(e)
                    if (t) {
                        var a = w()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return E()(this, n)
                }
            }
            var P = (function(e) {
                g()(n, e)
                var t = N(n)
                function n(e) {
                    var r
                    return (
                        d()(this, n),
                        ((r = t.call(this, e)).state = { input: e.value }),
                        (r.loadPropertyValues = Object(p.g)(r.loadPropertyValues.bind(h()(r)), 250)),
                        (r.ref = s.a.createRef()),
                        r
                    )
                }
                return (
                    y()(n, [
                        {
                            key: 'loadPropertyValues',
                            value: function(e, t) {
                                var n = this.props.propertyKey.split('__')[0]
                                S.a
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
                                return s.a.createElement(
                                    'span',
                                    { ref: this.ref, className: 'property-value' },
                                    s.a.createElement(F.a, {
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
            })(u.Component)
            P.propTypes = { propertyKey: k.a.string.isRequired, value: k.a.any.isRequired, onSet: k.a.func.isRequired }
            var C = n(9),
                T = Object.entries(p.l).map(function(e) {
                    var t = c()(e, 2),
                        n = t[0]
                    return { label: t[1], value: n }
                })
            function A(e) {
                var t = e.index,
                    n = e.endpoint,
                    r = e.onComplete,
                    a = e.logic,
                    i = Object(C.useValues)(a),
                    o = i.properties,
                    c = i.filters,
                    u = Object(C.useActions)(a),
                    f = u.setFilter,
                    d = (u.remove, c[t]),
                    m = Object.keys(d)[0] ? Object.keys(d)[0].split('__') : [],
                    y = Object.values(d)[0]
                return s.a.createElement(
                    'div',
                    { className: 'row', style: { margin: '0.5rem -15px', minWidth: m[0] ? 700 : 200 } },
                    o &&
                        s.a.createElement(
                            'div',
                            { className: m[0] ? 'col-4' : 'col' },
                            s.a.createElement(l.a, {
                                options: o,
                                value: [{ label: m[0], value: m[0] }],
                                isLoading: !o,
                                placeholder: 'Property key',
                                onChange: function(e) {
                                    return f(t, e.value + (m[1] ? '__' + m[1] : ''), e.value !== m[0] ? '' : y)
                                },
                                styles: p.n,
                                autoFocus: !m[0],
                                openMenuOnFocus: !0,
                            })
                        ),
                    m[0] &&
                        s.a.createElement(
                            'div',
                            { className: 'col-3 pl-0' },
                            s.a.createElement(l.a, {
                                options: T,
                                style: { width: 200 },
                                value: [{ label: p.l[m[1]] || '= equals', value: m[1] }],
                                placeholder: 'Property key',
                                onChange: function(e) {
                                    return f(t, m[0] + '__' + e.value, y)
                                },
                                styles: p.n,
                            })
                        ),
                    m[0] &&
                        s.a.createElement(
                            'div',
                            { className: 'col-5 pl-0' },
                            s.a.createElement(P, {
                                endpoint: n,
                                key: Object.keys(d)[0],
                                propertyKey: Object.keys(d)[0],
                                value: y,
                                onSet: function(e, n) {
                                    r(), f(t, e, n)
                                },
                            }),
                            ('gt' === m[1] || 'lt' === m[1]) &&
                                isNaN(y) &&
                                s.a.createElement(
                                    'p',
                                    { className: 'text-danger' },
                                    'Value needs to be a number. Try "equals" or "contains" instead.'
                                )
                        )
                )
            }
            var I = n(67),
                R = n.n(I),
                D = n(311),
                _ = n.n(D),
                V = n(6),
                L = n.n(V),
                M = n(29),
                U = n.n(M),
                W = n(53),
                q = n.n(W),
                K = n(26),
                Y = n(28)
            function B(e, t) {
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
            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? B(Object(n), !0).forEach(function(t) {
                              L()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : B(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var H = Object(C.kea)({
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
                                ((e = q()(
                                    U.a.mark(function e() {
                                        return U.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), S.a.get('api/person/properties')
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
                            L()(t, r.loadPeoplePropertiesSuccess, function(e, t) {
                                return t.properties
                            }),
                            L()(t, r.setProperties, function(e, t) {
                                return t.properties
                            }),
                            t),
                        ],
                        filters: [
                            a.propertyFilters
                                ? Object.entries(a.propertyFilters).map(function(e) {
                                      var t = c()(e, 2),
                                          n = t[0],
                                          r = t[1]
                                      return L()({}, n, r)
                                  })
                                : [],
                            ((n = {}),
                            L()(n, r.setFilter, function(e, t) {
                                var n = t.index,
                                    r = t.key,
                                    a = t.value,
                                    i = _()(e)
                                return (i[n] = L()({}, r, a)), i
                            }),
                            L()(n, r.setFilters, function(e, t) {
                                return t.filters
                            }),
                            L()(n, r.newFilter, function(e) {
                                return [].concat(_()(e), [{}])
                            }),
                            L()(n, r.remove, function(e, t) {
                                var n = t.index,
                                    r = e.filter(function(e, t) {
                                        return t !== n
                                    })
                                return 0 === r.length
                                    ? [{}]
                                    : 0 !== Object.keys(r[r.length - 1]).length
                                    ? [].concat(_()(r), [{}])
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
                        L()(t, n.setFilter, function(e) {
                            return e.value && n.update()
                        }),
                        L()(t, n.remove, function() {
                            return n.update()
                        }),
                        L()(t, n.update, function() {
                            if (r.onChange) {
                                if (0 === a.filters.length) return n.newFilter(), r.onChange({})
                                0 !== Object.keys(a.filters[a.filters.length - 1]).length && n.newFilter()
                                var e = a.filters.reduce(function(e, t) {
                                    return $($({}, e), t)
                                })
                                r.onChange(e)
                            } else {
                                var t = a.filters,
                                    i = Y.router.values.searchParams,
                                    o = (i.properties, R()(i, ['properties'])),
                                    c = Y.router.values.location.pathname
                                t.filter(function(e) {
                                    return Object.keys(e).length > 0
                                }).length > 0 &&
                                    (o.properties = t.reduce(function(e, t) {
                                        return $($({}, e), t)
                                    })),
                                    Object(p.k)(Y.router.values.searchParams, o) || Y.router.actions.push(c, o)
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
                                    var u = Object.entries(i || {}).map(function(e) {
                                        var t = c()(e, 2),
                                            n = t[0],
                                            r = t[1]
                                        return L()({}, n, r)
                                    })
                                    t.setFilters([].concat(_()(u), [{}]))
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
                                    : t.setProperties(K.a.values.eventProperties)
                        },
                    }
                },
                path: function(e) {
                    return ['lib', 'components', 'PropertyFilters', 'propertyFilterLogic', e]
                },
            })
            function J(e) {
                var t = e.endpoint,
                    n = e.item,
                    o = e.index,
                    l = e.filters,
                    f = e.logic,
                    d = Object(C.useActions)(f).remove,
                    m = Object(u.useState)(!1),
                    y = c()(m, 2),
                    v = y[0],
                    h = y[1]
                return s.a.createElement(
                    r.a,
                    { align: 'middle', className: 'mt-2 mb-2' },
                    s.a.createElement(
                        a.a,
                        {
                            trigger: 'click',
                            onVisibleChange: function(e) {
                                !e && Object.keys(n).length >= 0 && !n[Object.keys(n)[0]] && d(o), h(e)
                            },
                            defaultVisible: !1,
                            visible: v,
                            placement: 'bottomLeft',
                            content: s.a.createElement(A, {
                                key: o,
                                index: o,
                                endpoint: t || 'event',
                                onComplete: function() {
                                    return h(!1)
                                },
                                logic: f,
                            }),
                        },
                        0 !== Object.keys(n).length
                            ? s.a.createElement(
                                  i.a,
                                  { type: 'primary', shape: 'round', style: { maxWidth: '85%' } },
                                  s.a.createElement(
                                      'span',
                                      { style: { width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' } },
                                      Object(p.i)(Object.keys(n)[0]) + n[Object.keys(n)[0]]
                                  )
                              )
                            : s.a.createElement(i.a, { type: 'default', shape: 'round' }, 'New Filter')
                    ),
                    o !== l.length - 1 &&
                        s.a.createElement(p.b, {
                            className: 'ml-1',
                            onClick: function() {
                                d(o)
                            },
                            style: { cursor: 'pointer', float: 'none' },
                        })
                )
            }
            function G(e) {
                var t = e.endpoint,
                    n = e.propertyFilters,
                    r = e.className,
                    a = e.style,
                    i = e.onChange,
                    o = e.pageKey,
                    c = H({ propertyFilters: n, endpoint: t, onChange: i, pageKey: o }),
                    u = Object(C.useValues)(c).filters
                return s.a.createElement(
                    'div',
                    {
                        className: r || 'col-8',
                        style: { padding: 0, marginBottom: '2rem', display: 'inline', style: a },
                    },
                    s.a.createElement(
                        'div',
                        { className: 'column' },
                        u &&
                            u.map(function(e, n) {
                                return s.a.createElement(J, {
                                    key: n === u.length - 1 ? n : ''.concat(n, '_').concat(Object.keys(e)[0]),
                                    logic: c,
                                    item: e,
                                    index: n,
                                    filters: u,
                                    endpoint: t,
                                })
                            })
                    )
                )
            }
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
                c = n(29),
                u = n.n(c),
                s = n(53),
                l = n.n(s),
                p = n(9),
                f = n(16),
                d = n(23)
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
            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? m(Object(n), !0).forEach(function(t) {
                              o()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : m(Object(n)).forEach(function(t) {
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
                                    ((i = l()(
                                        u.a.mark(function e() {
                                            var t,
                                                n = arguments
                                            return u.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t = n.length > 0 && void 0 !== n[0] ? n[0] : o.id),
                                                                (e.next = 3),
                                                                f.a.get('api/funnel/' + t + '/?exclude_count=1')
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
                                    ((a = l()(
                                        u.a.mark(function e(t) {
                                            return u.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), f.a.update('api/funnel/' + t.id, t)
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
                                    ((r = l()(
                                        u.a.mark(function e(t) {
                                            return u.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), f.a.create('api/funnel', t)
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
                                ((n = l()(
                                    u.a.mark(function e() {
                                        var t,
                                            n = arguments
                                        return u.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = n.length > 0 && void 0 !== n[0] ? n[0] : o.id),
                                                            (e.next = 3),
                                                            f.a.get('api/funnel/' + t)
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
                                ((t = l()(
                                    u.a.mark(function e(t) {
                                        return u.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            f.a.get('api/person/?id=' + t[0].people.join(','))
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
                                return y(y(y({}, e), n), {}, { filters: y(y({}, e.filters), n.filters) })
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
                            ((n = l()(
                                u.a.mark(function e() {
                                    return u.a.wrap(function(e) {
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
                            ((t = l()(
                                u.a.mark(function e(t) {
                                    var n
                                    return u.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(n = t.funnel),
                                                        r.loadStepsWithCount(n.id),
                                                        Object(d.c)('Funnel saved!')
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
                            r.loadStepsWithCount(t.id), Object(d.c)('Funnel saved!')
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
                return Z
            })
            n(128)
            var r = n(40),
                a = n(0),
                i = n.n(a),
                o = n(9),
                c = n(6),
                u = n.n(c),
                s = n(311),
                l = n.n(s),
                p = n(322),
                f = n(317),
                d = n(26)
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
            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? m(Object(n), !0).forEach(function(t) {
                              u()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : m(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function v(e) {
                return []
                    .concat(l()(e[f.a.ACTIONS] || []), l()(e[f.a.EVENTS] || []), l()(e[f.a.NEW_ENTITY] || []))
                    .sort(function(e, t) {
                        return e.order - t.order
                    })
                    .map(function(e, t) {
                        return y(y({}, e), {}, { order: t })
                    })
            }
            function h(e) {
                var t,
                    n = e.map(function(e, t) {
                        return y(y({}, e), {}, { order: t })
                    })
                return (
                    (t = {}),
                    u()(
                        t,
                        f.a.ACTIONS,
                        n.filter(function(e) {
                            return e.type === f.a.ACTIONS
                        })
                    ),
                    u()(
                        t,
                        f.a.EVENTS,
                        n.filter(function(e) {
                            return e.type === f.a.EVENTS
                        })
                    ),
                    u()(
                        t,
                        f.a.NEW_ENTITY,
                        n.filter(function(e) {
                            return e.type === f.a.NEW_ENTITY
                        })
                    ),
                    t
                )
            }
            var b = Object(o.kea)({
                    key: function(e) {
                        return e.typeKey
                    },
                    connect: { values: [d.a, ['eventNames'], p.a, ['actions']] },
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
                                        u()(n, f.a.ACTIONS, t),
                                        u()(
                                            n,
                                            f.a.EVENTS,
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
                                    return h(e)
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
                                        return t === a ? y(y({}, e), {}, { id: i, type: r }) : e
                                    })
                                ),
                                    t.selectFilter(null)
                            },
                            updateFilterProperty: function(e) {
                                var r = e.properties,
                                    a = e.index
                                t.setFilters(
                                    n.localFilters.map(function(e, t) {
                                        return t === a ? y(y({}, e), {}, { properties: r }) : e
                                    })
                                )
                            },
                            updateFilterMath: function(e) {
                                var r = e.math,
                                    a = e.index
                                t.setFilters(
                                    n.localFilters.map(function(e, t) {
                                        return t === a ? y(y({}, e), {}, { math: r }) : e
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
                                    [].concat(l()(n.localFilters), [
                                        { id: null, type: f.a.NEW_ENTITY, order: n.localFilters.length },
                                    ])
                                )
                            },
                            setFilters: function(e) {
                                var t = e.filters
                                r.setFilters(h(t))
                            },
                        }
                    },
                    path: function(e) {
                        return ['scenes', 'trends', 'ActionFilter', 'entityFilterLogic', e]
                    },
                }),
                g = (n(180), n(112)),
                O = n(12),
                E = n.n(O),
                j = n(127),
                w = n(184),
                S = n(17),
                F = n.n(S),
                x = n(18),
                k = n.n(x),
                N = n(7),
                P = n.n(N),
                C = n(21),
                T = n.n(C),
                A = n(22),
                I = n.n(A),
                R = n(13),
                D = n.n(R),
                _ = n(8),
                V = n(179)
            function L(e) {
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
                        r = D()(e)
                    if (t) {
                        var a = D()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return I()(this, n)
                }
            }
            var M = (function(e) {
                    T()(n, e)
                    var t = L(n)
                    function n() {
                        var e
                        F()(this, n)
                        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
                        return (e = t.call.apply(t, [this].concat(a))), u()(P()(e), 'infoDiv', i.a.createRef()), e
                    }
                    return (
                        k()(n, [
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
                U = n(1),
                W = n.n(U)
            function q(e) {
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
                        r = D()(e)
                    if (t) {
                        var a = D()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return I()(this, n)
                }
            }
            var K = (function(e) {
                    T()(n, e)
                    var t = q(n)
                    function n() {
                        return F()(this, n), t.apply(this, arguments)
                    }
                    return (
                        k()(n, [
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
                Y = n(27)
            function B(e) {
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
                        r = D()(e)
                    if (t) {
                        var a = D()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return I()(this, n)
                }
            }
            function $(e) {
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
                    c = Object(a.useState)(
                        Array.isArray(e.children)
                            ? e.children.map(function(e) {
                                  return e.props.title
                              })
                            : [e.children.props.title]
                    ),
                    u = E()(c, 1)[0]
                return i.a.createElement(
                    'div',
                    { className: 'select-box', style: { padding: 0 } },
                    u.length > 1 && i.a.createElement(K, { entityType: r, allTypes: u, chooseEntityType: o }),
                    Array.isArray(e.children)
                        ? e.children.map(function(e) {
                              if (e.props.title === r) return e
                          })
                        : e.children
                )
            }
            var H = (function(e) {
                T()(n, e)
                var t = B(n)
                function n() {
                    var e
                    F()(this, n)
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
                    return (
                        (e = t.call.apply(t, [this].concat(a))),
                        u()(P()(e), 'state', { infoOpen: !1 }),
                        u()(P()(e), 'Option', function(t) {
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
                                i.a.createElement(_.z.Option, t)
                            )
                        }),
                        e
                    )
                }
                return (
                    k()(n, [
                        {
                            key: 'render',
                            value: function() {
                                var e = this
                                return i.a.createElement(
                                    'div',
                                    { style: { padding: '1rem', height: '90%', width: '100%' } },
                                    this.props.redirect,
                                    this.state.infoOpen &&
                                        i.a.createElement(M, {
                                            isOpen: this.state.infoOpen,
                                            boundingRect: this.state.infoBoundingRect,
                                            entity: this.props.onHover(this.state.infoActionId),
                                        }),
                                    i.a.createElement(V.a, {
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
            function J(e) {
                var t = e.onClickOutside,
                    n = e.logic,
                    r = Object(a.useRef)(),
                    c = Object(o.useValues)(n).selectedFilter,
                    u = Object(o.useValues)(d.a).eventNamesGrouped,
                    s = Object(o.useValues)(p.a).actionsGrouped,
                    l = function(e) {
                        r.current.contains(e.target) || (t && t(e))
                    }
                return (
                    Object(a.useEffect)(function() {
                        return (
                            document.addEventListener('mousedown', l),
                            function() {
                                document.removeEventListener('mousedown', l)
                            }
                        )
                    }, []),
                    i.a.createElement(
                        'div',
                        { ref: r, className: 'action-filter-dropdown' },
                        i.a.createElement(
                            $,
                            { selected: c.type && c.type !== f.a.NEW_ENTITY ? c.type : null },
                            i.a.createElement(G, {
                                title: 'actions',
                                entityType: f.a.ACTIONS,
                                options: s,
                                panelIndex: 0,
                                logic: n,
                            }),
                            i.a.createElement(G, {
                                title: 'events',
                                entityType: f.a.EVENTS,
                                options: u,
                                panelIndex: 1,
                                logic: n,
                            })
                        )
                    )
                )
            }
            function G(e) {
                var t = e.entityType,
                    n = e.panelIndex,
                    r = e.options,
                    a = e.logic,
                    c = Object(o.useValues)(a),
                    u = c.entities,
                    s = c.selectedFilter,
                    l = c.filters,
                    p = Object(o.useActions)(a).updateFilter
                return i.a.createElement(H, {
                    key: n,
                    title: t,
                    options: r,
                    defaultMenuIsOpen: !0,
                    onSelect: function(e) {
                        return p({ type: t, value: e.value, index: s.index })
                    },
                    onHover: function(e) {
                        return u[t].filter(function(t) {
                            return t.id === e
                        })[0]
                    },
                    active: null,
                    redirect: (function() {
                        if (s && s.type === f.a.ACTIONS && t === f.a.ACTIONS) {
                            var e = u[s.type].filter(function(e) {
                                return e.id === s.filter.id
                            })[0]
                            return i.a.createElement(
                                'a',
                                { href: '/action/' + s.filter.id, target: '_blank' },
                                'Edit "',
                                e.name,
                                '" ',
                                i.a.createElement('i', { className: 'fi flaticon-export' })
                            )
                        }
                        return null
                    })(),
                    message:
                        t !== f.a.ACTIONS || l[f.a.ACTIONS]
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
                                  i.a.createElement(Y.a, { to: '/action' }, 'Click here to define an action.')
                              ),
                })
            }
            H.propTypes = {
                options: W.a.array.isRequired,
                defaultMenuIsOpen: W.a.bool.isRequired,
                onSelect: W.a.func.isRequired,
                title: W.a.string.isRequired,
                onHover: W.a.func.isRequired,
            }
            var z = n(323)
            function Q(e) {
                var t,
                    n,
                    r,
                    c = e.logic,
                    u = e.filter,
                    s = e.index,
                    l = Object(a.useRef)(),
                    p = Object(o.useValues)(c),
                    m = p.selectedFilter,
                    y = p.entities,
                    v = Object(o.useActions)(c),
                    h = v.selectFilter,
                    b = v.updateFilterMath,
                    g = v.removeLocalFilter,
                    O = v.updateFilterProperty,
                    w = Object(o.useValues)(d.a).eventProperties,
                    S = Object(a.useState)(!1),
                    F = E()(S, 2),
                    x = F[0],
                    k = F[1],
                    N = u.math
                return (
                    u.type === f.a.NEW_ENTITY
                        ? ((n = null), (r = null))
                        : ((n =
                              (t =
                                  y[u.type].filter(function(e) {
                                      return e.id === u.id
                                  })[0] || {}).name || u.name),
                          (r = t.id || u.id)),
                    i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(
                            'button',
                            {
                                ref: l,
                                className: 'filter-action',
                                type: 'button',
                                onClick: function() {
                                    m && m.type === u.type && m.index === s
                                        ? h(null)
                                        : h({ filter: u, type: u.type, index: s })
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
                        i.a.createElement(X, {
                            math: N,
                            index: s,
                            onMathSelect: function(e, t) {
                                b({ math: t, value: u.id, type: u.type, index: s })
                            },
                        }),
                        i.a.createElement(
                            'div',
                            {
                                className: 'btn btn-sm btn-light',
                                onClick: function() {
                                    return k(!x)
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
                            })(x, u)
                        ),
                        i.a.createElement(j.b, {
                            onClick: function() {
                                g({ value: u.id, type: u.type, index: s })
                            },
                            style: { float: 'none', marginLeft: 8, position: 'absolute', marginTop: 3 },
                        }),
                        x &&
                            i.a.createElement(
                                'div',
                                { className: 'ml-4' },
                                i.a.createElement(z.a, {
                                    pageKey: ''.concat(s, '-').concat(r, '-filter'),
                                    properties: w,
                                    propertyFilters: u.properties,
                                    onChange: function(e) {
                                        return O({ properties: e, index: s })
                                    },
                                    style: { marginBottom: 0 },
                                })
                            ),
                        m &&
                            m.type === u.type &&
                            m.index === s &&
                            i.a.createElement(J, {
                                logic: c,
                                onClickOutside: function(e) {
                                    l.current.contains(e.target) || h(null)
                                },
                            })
                    )
                )
            }
            function X(e) {
                var t = ['Total', 'DAU']
                return i.a.createElement(
                    w.a,
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
                        g.a,
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
                        g.a,
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
            function Z(e) {
                var t = e.setFilters,
                    n = e.filters,
                    c = e.typeKey,
                    u = b({ setFilters: t, filters: n, typeKey: c }),
                    s = Object(o.useValues)(u).localFilters,
                    l = Object(o.useActions)(u),
                    p = l.addFilter,
                    f = l.setLocalFilters
                return (
                    Object(a.useEffect)(
                        function() {
                            f(n)
                        },
                        [n]
                    ),
                    i.a.createElement(
                        'div',
                        null,
                        s &&
                            s.map(function(e, t) {
                                return i.a.createElement(Q, { logic: u, filter: e, index: t, key: t })
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
        518: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'EditFunnel', function() {
                    return m
                })
            n(128)
            var r = n(40),
                a = n(0),
                i = n.n(a),
                o = n(127),
                c = n(27),
                u = n(322),
                s = n(9),
                l = n(373),
                p = n(377),
                f = n(323),
                d = n(26)
            function m(e) {
                var t = e.funnelId,
                    n = Object(s.useValues)(Object(l.a)({ id: t })),
                    a = n.funnel,
                    m = n.isStepsEmpty,
                    y = Object(s.useActions)(Object(l.a)({ id: t })),
                    v = y.setFunnel,
                    h = y.updateFunnel,
                    b = y.createFunnel,
                    g = Object(s.useValues)(Object(u.a)()),
                    O = g.actions,
                    E = g.actionsLoading,
                    j = Object(s.useValues)(d.a).eventProperties
                return i.a.createElement(
                    'form',
                    {
                        onSubmit: function(e) {
                            e.preventDefault(), a.id ? h(a) : b(a)
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
                                    i.a.createElement(c.a, { to: '/actions' }, 'Click here to set up an action')
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
                            i.a.createElement(f.a, {
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
                                { type: 'primary mt-3', htmlType: 'submit', disabled: m },
                                'Save funnel'
                            ),
                            i.a.createElement('br', null),
                            m && i.a.createElement('small', null, 'Add some actions/events to save the funnel')
                        )
                    )
                )
            }
        },
    },
])
//# sourceMappingURL=editFunnel.js.map
