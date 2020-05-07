;(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        332: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return i
            })
            var r = n(96),
                a = n.n(r),
                c = n(0),
                o = n.n(c)
            function i(e) {
                var t = e.value
                return o.a.createElement(
                    o.a.Fragment,
                    null,
                    'object' === a()(t) ? JSON.stringify(t) : t && t.replace(/(^\w+:|^)\/\//, '')
                )
            }
        },
        333: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return y
            })
            var r = n(29),
                a = n.n(r),
                c = n(53),
                o = n.n(c),
                i = n(311),
                s = n.n(i),
                u = n(6),
                l = n.n(u),
                p = n(9),
                f = n(127),
                v = n(28),
                m = n(16)
            function d(e, t) {
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
                        ? d(Object(n), !0).forEach(function(t) {
                              l()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : d(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var y = Object(p.kea)({
                key: function(e) {
                    return (
                        (e.fixedFilters ? JSON.stringify(e.fixedFilters) : 'all') +
                        '-' +
                        (e.apiUrl || 'events') +
                        (e.live ? '-live' : '')
                    )
                },
                actions: function() {
                    return {
                        setProperties: function(e) {
                            return { properties: e }
                        },
                        updateProperty: function(e, t) {
                            return { key: e, value: t }
                        },
                        fetchEvents: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                            return { nextParams: e }
                        },
                        fetchEventsSuccess: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            return { events: e, hasNext: t, isNext: n }
                        },
                        fetchNextEvents: !0,
                        flipSort: !0,
                        pollEvents: !0,
                        pollEventsSuccess: function(e) {
                            return { events: e }
                        },
                        prependNewEvents: function(e) {
                            return { events: e }
                        },
                        setSelectedEvent: function(e) {
                            return { selectedEvent: e }
                        },
                        setPollTimeout: function(e) {
                            return { pollTimeout: e }
                        },
                        setDelayedLoading: !0,
                    }
                },
                reducers: function() {
                    return {
                        initialPathname: [
                            function(e) {
                                return v.router.selectors.location(e).pathname
                            },
                            {
                                noop: function(e) {
                                    return e
                                },
                            },
                        ],
                        properties: [
                            {},
                            {
                                setProperties: function(e, t) {
                                    return t.properties
                                },
                                updateProperty: function(e, t) {
                                    var n = t.key,
                                        r = t.value
                                    return E(E({}, e), {}, l()({}, n, r))
                                },
                            },
                        ],
                        isLoading: [
                            !1,
                            {
                                fetchEvents: function(e, t) {
                                    return t.nextParams ? e : e || null
                                },
                                setDelayedLoading: function() {
                                    return !0
                                },
                                fetchEventsSuccess: function() {
                                    return !1
                                },
                            },
                        ],
                        isLoadingNext: [
                            !1,
                            {
                                fetchNextEvents: function() {
                                    return !0
                                },
                                fetchEventsSuccess: function() {
                                    return !1
                                },
                            },
                        ],
                        events: [
                            [],
                            {
                                fetchEventsSuccess: function(e, t) {
                                    var n = t.events
                                    return t.isNext ? [].concat(s()(e), s()(n)) : n
                                },
                                prependNewEvents: function(e, t) {
                                    var n = t.events
                                    return [].concat(s()(n), s()(e))
                                },
                            },
                        ],
                        hasNext: [
                            !1,
                            {
                                fetchEvents: function() {
                                    return !1
                                },
                                fetchNextEvents: function() {
                                    return !1
                                },
                                fetchEventsSuccess: function(e, t) {
                                    return t.hasNext
                                },
                            },
                        ],
                        orderBy: [
                            '-timestamp',
                            {
                                flipSort: function(e) {
                                    return 'timestamp' === e ? '-timestamp' : 'timestamp'
                                },
                            },
                        ],
                        selectedEvent: [
                            null,
                            {
                                setSelectedEvent: function(e, t) {
                                    return t.selectedEvent
                                },
                            },
                        ],
                        newEvents: [
                            [],
                            {
                                pollEventsSuccess: function(e, t) {
                                    return t.events
                                },
                                prependNewEvents: function() {
                                    return []
                                },
                            },
                        ],
                        highlightEvents: [
                            {},
                            {
                                pollEventsSuccess: function() {
                                    return {}
                                },
                                prependNewEvents: function(e, t) {
                                    var n = t.events,
                                        r = {}
                                    return (
                                        n.forEach(function(e) {
                                            r[e.id] = !0
                                        }),
                                        r
                                    )
                                },
                            },
                        ],
                        pollTimeout: [
                            null,
                            {
                                setPollTimeout: function(e, t) {
                                    return t.pollTimeout
                                },
                            },
                        ],
                    }
                },
                selectors: function(e) {
                    var t = e.selectors
                    return {
                        propertiesForUrl: [
                            function() {
                                return [t.properties]
                            },
                            function(e) {
                                return Object.keys(e).length > 0 ? { properties: e } : ''
                            },
                        ],
                    }
                },
                events: function(e) {
                    var t = e.actions,
                        n = e.values
                    return {
                        afterMount: [t.fetchEvents],
                        beforeUnmount: function() {
                            clearTimeout(n.pollTimeout)
                        },
                    }
                },
                actionToUrl: function(e) {
                    var t = e.values
                    return {
                        setProperties: function() {
                            return [v.router.values.location.pathname, t.propertiesForUrl]
                        },
                        updateProperty: function() {
                            return [v.router.values.location.pathname, t.propertiesForUrl]
                        },
                    }
                },
                urlToAction: function(e) {
                    var t = e.actions,
                        n = e.values
                    return {
                        '*': function(e, r) {
                            try {
                                if (v.router.values.location.pathname !== n.initialPathname) return
                            } catch (e) {
                                return
                            }
                            Object(f.k)(r.properties || {}, n.properties) || t.setProperties(r.properties || {})
                        },
                    }
                },
                listeners: function(e) {
                    var t,
                        n,
                        r = e.actions,
                        c = e.values,
                        i = e.props
                    return {
                        setProperties: function() {
                            r.fetchEvents()
                        },
                        updateProperty: function() {
                            r.fetchEvents()
                        },
                        flipSort: function() {
                            r.fetchEvents()
                        },
                        fetchNextEvents:
                            ((n = o()(
                                a.a.mark(function e() {
                                    var t, n
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(t = c.events),
                                                        (n = c.orderBy),
                                                        r.fetchEvents(
                                                            l()(
                                                                {},
                                                                'timestamp' === n ? 'after' : 'before',
                                                                t[t.length - 1].timestamp
                                                            )
                                                        )
                                                case 2:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function() {
                                return n.apply(this, arguments)
                            }),
                        fetchEvents: [
                            (function() {
                                var e = o()(
                                    a.a.mark(function e(t, n) {
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!(c.events.length > 0)) {
                                                            e.next = 3
                                                            break
                                                        }
                                                        return (e.next = 3), n(500)
                                                    case 3:
                                                        null === c.isLoading && r.setDelayedLoading()
                                                    case 4:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            })(),
                            (function() {
                                var e = o()(
                                    a.a.mark(function e(t, n) {
                                        var o, s, u
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (o = t.nextParams),
                                                            clearTimeout(c.pollTimeout),
                                                            (s = Object(f.o)(
                                                                E(
                                                                    E(
                                                                        E(
                                                                            { properties: c.properties },
                                                                            i.fixedFilters || {}
                                                                        ),
                                                                        o || {}
                                                                    ),
                                                                    {},
                                                                    { orderBy: [c.orderBy] }
                                                                )
                                                            )),
                                                            (e.next = 5),
                                                            m.a.get(''.concat(i.apiUrl || 'api/event/', '?').concat(s))
                                                        )
                                                    case 5:
                                                        ;(u = e.sent),
                                                            n(),
                                                            r.fetchEventsSuccess(u.results, u.next, !!o),
                                                            r.setPollTimeout(setTimeout(r.pollEvents, 5e3))
                                                    case 9:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            })(),
                        ],
                        pollEvents:
                            ((t = o()(
                                a.a.mark(function e(t, n) {
                                    var o, s, u
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ('-timestamp' === c.orderBy) {
                                                        e.next = 2
                                                        break
                                                    }
                                                    return e.abrupt('return')
                                                case 2:
                                                    return (
                                                        (o = E(
                                                            E({ properties: c.properties }, i.fixedFilters || {}),
                                                            {},
                                                            { orderBy: [c.orderBy] }
                                                        )),
                                                        (s = c.events[0]) &&
                                                            (o.after = s.timestamp || s.event.timestamp),
                                                        (e.next = 7),
                                                        m.a.get(
                                                            ''
                                                                .concat(i.apiUrl || 'api/event/', '?')
                                                                .concat(Object(f.o)(o))
                                                        )
                                                    )
                                                case 7:
                                                    ;(u = e.sent),
                                                        n(),
                                                        i.live
                                                            ? r.prependNewEvents(u.results)
                                                            : r.pollEventsSuccess(u.results),
                                                        r.setPollTimeout(setTimeout(r.pollEvents, 5e3))
                                                case 11:
                                                case 'end':
                                                    return e.stop()
                                            }
                                    }, e)
                                })
                            )),
                            function(e, n) {
                                return t.apply(this, arguments)
                            }),
                    }
                },
                path: function(e) {
                    return ['scenes', 'events', 'eventsTableLogic', e]
                },
            })
        },
        350: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return m
            })
            var r = n(6),
                a = n.n(r),
                c = n(0),
                o = n.n(c),
                i = n(28),
                s = n(1),
                u = n.n(s),
                l = n(332),
                p = n(27)
            function f(e, t) {
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
            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? f(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : f(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function m(e) {
                var t = e.property,
                    n = e.value,
                    r = e.filters,
                    c = e.onClick,
                    s = Object(i.combineUrl)(
                        window.location.pathname,
                        v(v({}, r), {}, { properties: v(v({}, r.properties), {}, a()({}, t, n)) })
                    ).url
                return o.a.createElement(
                    p.a,
                    {
                        to: s,
                        onClick: function(e) {
                            c && c(t, n)
                        },
                    },
                    o.a.createElement(l.a, { value: n })
                )
            }
            m.propTypes = {
                property: u.a.string.isRequired,
                value: u.a.string,
                filters: u.a.object.isRequired,
                onClick: u.a.func,
            }
        },
        354: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return h
            })
            var r = n(6),
                a = n.n(r),
                c = n(12),
                o = n.n(c),
                i = n(0),
                s = n.n(i),
                u = n(344),
                l = n(318),
                p = n(311),
                f = n.n(p)
            function v(e, t) {
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
                        ? v(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : v(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function d(e) {
                return Array(e)
                    .fill('')
                    .map(function(e, t) {
                        return s.a.createElement('span', { key: t }, '    ')
                    })
            }
            function E(e) {
                var t = e.event,
                    n = f()(t.elements).reverse()
                return s.a.createElement(
                    'div',
                    null,
                    n.map(function(e, t) {
                        return s.a.createElement(
                            'pre',
                            {
                                className: 'code',
                                style: m(
                                    { margin: 0, padding: 0, borderRadius: 0 },
                                    t === n.length - 1 ? { backgroundColor: 'var(--blue)' } : {}
                                ),
                            },
                            d(t),
                            '<',
                            e.tag_name,
                            e.attr_id && ' id="' + e.attr_id + '"',
                            Object.entries(e.attributes).map(function(e) {
                                var t = o()(e, 2),
                                    n = t[0],
                                    r = t[1]
                                return s.a.createElement('span', null, ' ', n.replace('attr__', ''), '="', r, '"')
                            }),
                            '>',
                            e.text,
                            t === n.length - 1 && s.a.createElement('span', null, '</', e.tag_name, '>')
                        )
                    }),
                    f()(n)
                        .reverse()
                        .slice(1)
                        .map(function(e, t) {
                            return s.a.createElement(
                                'pre',
                                { className: 'code', key: t, style: { margin: 0, padding: 0, borderRadius: 0 } },
                                d(n.length - t - 2),
                                '</',
                                e.tag_name,
                                '>'
                            )
                        })
                )
            }
            function y(e, t) {
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
                        ? y(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : y(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function h(e) {
                var t = e.event,
                    n = Object(i.useState)('properties'),
                    r = o()(n, 2),
                    a = r[0],
                    c = r[1]
                return s.a.createElement(
                    'div',
                    { className: 'row' },
                    s.a.createElement(
                        'div',
                        { className: 'col-2' },
                        s.a.createElement(
                            'div',
                            {
                                className: 'nav flex-column nav-pills',
                                id: 'v-pills-tab',
                                role: 'tablist',
                                'aria-orientation': 'vertical',
                            },
                            s.a.createElement(
                                'a',
                                {
                                    className: 'cursor-pointer nav-link ' + ('properties' === a && 'active'),
                                    onClick: function() {
                                        return c('properties')
                                    },
                                },
                                'Properties'
                            ),
                            t.elements.length > 0 &&
                                s.a.createElement(
                                    'a',
                                    {
                                        className: 'cursor-pointer nav-link ' + ('elements' === a && 'active'),
                                        onClick: function() {
                                            return c('elements')
                                        },
                                    },
                                    'Elements'
                                )
                        )
                    ),
                    s.a.createElement(
                        'div',
                        { className: 'col-10' },
                        'properties' === a
                            ? s.a.createElement(
                                  'div',
                                  {
                                      className: 'd-flex flex-wrap flex-column',
                                      style: { maxWidth: '100%', overflow: 'scroll' },
                                  },
                                  s.a.createElement(u.a, {
                                      properties: b(
                                          { Timestamp: Object(l.default)(t.timestamp).toISOString() },
                                          t.properties
                                      ),
                                  })
                              )
                            : s.a.createElement(E, { event: t })
                    )
                )
            }
        },
        568: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'logic', function() {
                    return x
                }),
                n.d(t, 'LiveActions', function() {
                    return S
                })
            var r = n(17),
                a = n.n(r),
                c = n(18),
                o = n.n(c),
                i = n(21),
                s = n.n(i),
                u = n(22),
                l = n.n(u),
                p = n(13),
                f = n.n(p),
                v = n(0),
                m = n.n(v),
                d = n(318),
                E = n(127),
                y = n(27),
                b = n(323),
                h = n(350),
                O = n(354),
                g = n(333),
                j = n(9)
            function w(e) {
                var t = e.fixedFilters,
                    n = Object(g.a)({ fixedFilters: t, apiUrl: 'api/event/actions/', live: !0 }),
                    r = Object(j.useValues)(n),
                    a = r.properties,
                    c = r.events,
                    o = r.isLoading,
                    i = r.selectedEvent,
                    s = r.highlightEvents,
                    u = Object(j.useActions)(n).setSelectedEvent,
                    l = ['$current_url']
                return m.a.createElement(
                    'div',
                    { className: 'events' },
                    m.a.createElement(b.a, { pageKey: 'LiveActionsTable', propertyFilters: a }),
                    m.a.createElement(
                        'table',
                        { className: 'table', style: { position: 'relative' } },
                        m.a.createElement(
                            'tbody',
                            null,
                            m.a.createElement(
                                'tr',
                                null,
                                m.a.createElement('th', { scope: 'col' }, 'Action ID'),
                                m.a.createElement('th', { scope: 'col' }, 'User'),
                                m.a.createElement('th', { scope: 'col' }, 'Path'),
                                m.a.createElement('th', { scope: 'col' }, 'Date'),
                                m.a.createElement('th', { scope: 'col' }, 'Browser')
                            ),
                            o && m.a.createElement(E.e, { colSpan: 5, asOverlay: c.length > 0 }),
                            c &&
                                0 === c.length &&
                                m.a.createElement(
                                    'tr',
                                    null,
                                    m.a.createElement(
                                        'td',
                                        { colSpan: '5' },
                                        "We didn't find any events matching any actions. You can either",
                                        ' ',
                                        m.a.createElement(y.a, { to: '/actions' }, 'set up some actions'),
                                        ' or',
                                        ' ',
                                        m.a.createElement(y.a, { to: '/setup' }, 'integrate PostHog in your app'),
                                        '.'
                                    )
                                ),
                            c &&
                                c.map(function(e, t) {
                                    return m.a.createElement(
                                        v.Fragment,
                                        { key: e.id },
                                        t > 0 &&
                                            !Object(d.default)(e.event.timestamp).isSame(
                                                c[t - 1].event.timestamp,
                                                'day'
                                            ) &&
                                            m.a.createElement(
                                                'tr',
                                                null,
                                                m.a.createElement(
                                                    'td',
                                                    { colSpan: '5', className: 'event-day-separator' },
                                                    Object(d.default)(e.event.timestamp).format('LL')
                                                )
                                            ),
                                        m.a.createElement(
                                            'tr',
                                            {
                                                className:
                                                    'cursor-pointer event-row' + (s[e.id] ? ' event-row-new' : ''),
                                                onClick: function() {
                                                    return u(i === e.id ? null : e.id)
                                                },
                                            },
                                            m.a.createElement('td', null, e.action.name),
                                            m.a.createElement(
                                                'td',
                                                null,
                                                m.a.createElement(
                                                    y.a,
                                                    { to: '/person/'.concat(e.event.distinct_id) },
                                                    e.event.person
                                                )
                                            ),
                                            l.map(function(t) {
                                                return m.a.createElement(
                                                    'td',
                                                    { key: t, title: e.event.properties[t] },
                                                    m.a.createElement(h.a, {
                                                        property: t,
                                                        value: e.event.properties[t],
                                                        filters: { properties: a },
                                                    })
                                                )
                                            }),
                                            m.a.createElement(
                                                'td',
                                                null,
                                                Object(d.default)(e.event.timestamp).fromNow()
                                            ),
                                            m.a.createElement(
                                                'td',
                                                null,
                                                e.event.properties.$browser,
                                                ' ',
                                                e.event.properties.$browser_version,
                                                ' -',
                                                ' ',
                                                e.event.properties.$os
                                            )
                                        ),
                                        i === e.id &&
                                            m.a.createElement(
                                                'tr',
                                                null,
                                                m.a.createElement(
                                                    'td',
                                                    { colSpan: '4' },
                                                    m.a.createElement(O.a, { event: e.event })
                                                )
                                            )
                                    )
                                })
                        )
                    )
                )
            }
            function P(e) {
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
                        r = f()(e)
                    if (t) {
                        var a = f()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return l()(this, n)
                }
            }
            var x = Object(j.connect)(function() {
                    return [Object(g.a)({ fixedFilters: void 0, apiUrl: 'api/event/actions/', live: !0 })]
                }),
                S = (function(e) {
                    s()(n, e)
                    var t = P(n)
                    function n() {
                        return a()(this, n), t.apply(this, arguments)
                    }
                    return (
                        o()(n, [
                            {
                                key: 'render',
                                value: function() {
                                    return m.a.createElement(w, this.props)
                                },
                            },
                        ]),
                        n
                    )
                })(v.Component)
        },
    },
])
//# sourceMappingURL=liveActions.js.map
