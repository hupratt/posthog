;(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return D
            }),
                n.d(t, 'o', function() {
                    return w
                }),
                n.d(t, 'j', function() {
                    return E
                }),
                n.d(t, 'm', function() {
                    return k
                }),
                n.d(t, 'd', function() {
                    return S
                }),
                n.d(t, 'e', function() {
                    return C
                }),
                n.d(t, 'b', function() {
                    return x
                }),
                n.d(t, 'a', function() {
                    return T
                }),
                n.d(t, 'c', function() {
                    return P
                }),
                n.d(t, 'n', function() {
                    return R
                }),
                n.d(t, 'g', function() {
                    return A
                }),
                n.d(t, 'f', function() {
                    return L
                }),
                n.d(t, 'l', function() {
                    return F
                }),
                n.d(t, 'i', function() {
                    return M
                }),
                n.d(t, 'h', function() {
                    return N
                }),
                n.d(t, 'k', function() {
                    return I
                })
            var r = n(42),
                a = n.n(r),
                o = n(6),
                c = n.n(o),
                i = (n(129), n(75)),
                u = n(12),
                l = n.n(u),
                s = n(96),
                d = n.n(s),
                f = n(0),
                p = n.n(f),
                m = n(16),
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
                    o = !0,
                    c = !1
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next()
                        return (o = e.done), e
                    },
                    e: function(e) {
                        ;(c = !0), (a = e)
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (c) throw a
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
            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? O(Object(n), !0).forEach(function(t) {
                              c()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : O(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function D() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                    return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
                })
            }
            var w = function(e) {
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
                                        : ((e = 'object' === d()(e) ? JSON.stringify(e) : e), encodeURIComponent(e))
                                })(r)
                            )
                        })
                        .join('&')
                },
                E = function() {
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
                S = function() {
                    return p.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        p.a.createElement('div', null),
                        p.a.createElement(i.a, null)
                    )
                },
                C = function(e) {
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
                x = function(e) {
                    return p.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: j({}, e.style) }),
                        p.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function T(e) {
                return p.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && p.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var P = function(e) {
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
                                            j(j({}, e.object), {}, { deleted: !n })
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
            P.propTypes = {
                endpoint: g.a.string.isRequired,
                object: g.a.shape({ name: g.a.string.isRequired, id: g.a.number.isRequired }).isRequired,
                className: g.a.string,
                style: g.a.object,
            }
            var R = {
                    control: function(e) {
                        return j(j({}, e), {}, { height: 31, minHeight: 31 })
                    },
                    indicatorsContainer: function(e) {
                        return j(j({}, e), {}, { height: 31 })
                    },
                    input: function(e) {
                        return j(j({}, e), {}, { paddingBottom: 0, paddingTop: 0, margin: 0, opacity: 1 })
                    },
                    valueContainer: function(e) {
                        return j(j({}, e), {}, { padding: '0 8px', marginTop: -2 })
                    },
                    option: function(e) {
                        return j(j({}, e), {}, { padding: '2px 15px' })
                    },
                },
                A = function(e, t, n) {
                    var r
                    return function() {
                        var a = this,
                            o = arguments,
                            c = function() {
                                ;(r = null), n || e.apply(a, o)
                            },
                            i = n && !r
                        clearTimeout(r), (r = setTimeout(c, t)), i && e.apply(a, o)
                    }
                },
                L = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                F = {
                    exact: '= equals',
                    is_not: "≠ doesn't equal",
                    icontains: '∋ contains',
                    not_icontains: "∌ doesn't contain",
                    gt: '> greater than',
                    lt: '< lower than',
                },
                Y = Object.entries(F).reverse(),
                M = function(e) {
                    var t,
                        n = v(Y)
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = l()(t.value, 2),
                                a = r[0],
                                o = r[1]
                            if (e.includes(a)) return e.replace('__' + a, '') + ' '.concat(o.split(' ')[0], ' ')
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return e + ' '.concat(F.exact.split(' ')[0], ' ')
                },
                N = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        m.a.delete('api/person/' + e.id).then(function() {
                            Object(h.c)('Person succesfully deleted.'), t && t()
                        })
                },
                I = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        311: function(e, t, n) {
            var r = n(346),
                a = n(347),
                o = n(133),
                c = n(348)
            e.exports = function(e) {
                return r(e) || a(e) || o(e) || c()
            }
        },
        346: function(e, t, n) {
            var r = n(134)
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
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
        372: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return F
            })
            n(128)
            var r = n(40),
                a = (n(505), n(499)),
                o = (n(334), n(329)),
                c = n(311),
                i = n.n(c),
                u = n(12),
                l = n.n(u),
                s = n(17),
                d = n.n(s),
                f = n(18),
                p = n.n(f),
                m = n(7),
                h = n.n(m),
                y = n(21),
                g = n.n(y),
                v = n(22),
                b = n.n(v),
                O = n(13),
                j = n.n(O),
                D = n(6),
                w = n.n(D),
                E = n(0),
                k = n.n(E),
                S = n(1),
                C = n.n(S),
                x = n(318)
            function T(e, t) {
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
            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? T(Object(n), !0).forEach(function(t) {
                              w()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : T(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function R(e) {
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
                        r = j()(e)
                    if (t) {
                        var a = j()(this).constructor
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
                L = /([0-9]{4}-[0-9]{2}-[0-9]{2})/,
                F = (function(e) {
                    g()(n, e)
                    var t = R(n)
                    function n(e) {
                        var r
                        return (
                            d()(this, n),
                            (r = t.call(this, e)),
                            w()(h()(r), 'onClickOutside', function() {
                                r.setState({ open: !1, dateRangeOpen: !1 })
                            }),
                            w()(h()(r), 'setDate', function(e, t) {
                                r.props.onChange(e, t)
                            }),
                            w()(h()(r), 'onChange', function(e) {
                                'Date range' === e
                                    ? r.state.open && r.setState({ dateRangeOpen: !0, open: !1 })
                                    : r.setDate(A[e][0], A[e][1])
                            }),
                            w()(h()(r), 'onBlur', function() {
                                r.state.dateRangeOpen || r.setState({ open: !1, dateRangeOpen: !1 })
                            }),
                            w()(h()(r), 'onClick', function() {
                                r.state.dateRangeOpen || r.setState({ open: !r.state.open })
                            }),
                            w()(h()(r), 'dropdownOnClick', function(e) {
                                e.preventDefault(),
                                    r.setState({ dateRangeOpen: !1, open: !0 }),
                                    document.getElementById('daterange_selector').focus()
                            }),
                            w()(h()(r), 'onDateFromChange', function(e) {
                                return r.setState({ rangeDateFrom: e })
                            }),
                            w()(h()(r), 'onDateToChange', function(e) {
                                return r.setState({ rangeDateTo: e })
                            }),
                            w()(h()(r), 'onApplyClick', function() {
                                r.setState({ dateRangeOpen: !1, open: !1 }),
                                    r.props.onChange(
                                        Object(x.default)(r.state.rangeDateFrom).format('YYYY-MM-DD'),
                                        Object(x.default)(r.state.rangeDateTo).format('YYYY-MM-DD')
                                    )
                            }),
                            (r.state = {
                                rangeDateFrom: L.test(e.dateFrom) && Object(x.default)(e.dateFrom).toDate(),
                                rangeDateTo: L.test(e.dateTo) && Object(x.default)(e.dateTo).toDate(),
                                dateRangeOpen: !1,
                                open: !1,
                            }),
                            r
                        )
                    }
                    return (
                        p()(n, [
                            {
                                key: 'dateFilterToText',
                                value: function(e, t) {
                                    if (L.test(e)) return ''.concat(e, ' - ').concat(t)
                                    if (x.default.isMoment(e))
                                        return ''.concat(e.format('YYYY-MM-DD'), ' - ').concat(t.format('YYYY-MM-DD'))
                                    var n = 'Last 7 days'
                                    return (
                                        Object.entries(A).map(function(r) {
                                            var a = l()(r, 2),
                                                o = a[0],
                                                c = a[1]
                                            c[0] === e && c[1] === t && (n = o)
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
                                    return k.a.createElement(
                                        o.a,
                                        {
                                            bordered: !1,
                                            id: 'daterange_selector',
                                            value: this.dateFilterToText(this.props.dateFrom, this.props.dateTo),
                                            onChange: this.onChange,
                                            style: P({ marginRight: 4 }, this.props.style),
                                            open: this.state.open || this.state.dateRangeOpen,
                                            onBlur: this.onBlur,
                                            onClick: this.onClick,
                                            listHeight: 400,
                                            dropdownMatchSelectWidth: !1,
                                            dropdownRender: function(t) {
                                                return e.state.dateRangeOpen
                                                    ? k.a.createElement(Y, {
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
                                            i()(
                                                Object.entries(A).map(function(e) {
                                                    var t = l()(e, 2),
                                                        n = t[0]
                                                    t[1]
                                                    return k.a.createElement(o.a.Option, { key: n, value: n }, n)
                                                })
                                            ),
                                            [
                                                k.a.createElement(
                                                    o.a.Option,
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
                })(E.Component)
            function Y(e) {
                var t = Object(E.useRef)(),
                    n = Object(E.useState)(!1),
                    o = l()(n, 2),
                    c = o[0],
                    i = o[1],
                    u = function(n) {
                        t.current.contains(n.target) || c || e.onClickOutside()
                    }
                return (
                    Object(E.useEffect)(
                        function() {
                            return (
                                document.addEventListener('mousedown', u),
                                function() {
                                    document.removeEventListener('mousedown', u)
                                }
                            )
                        },
                        [c]
                    ),
                    k.a.createElement(
                        'div',
                        { className: 'dropdown', ref: t },
                        k.a.createElement(
                            'a',
                            {
                                style: { margin: '0 1rem', color: 'rgba(0, 0, 0, 0.2)', fontWeight: 700 },
                                href: '#',
                                onClick: e.onClick,
                            },
                            '<'
                        ),
                        k.a.createElement('hr', { style: { margin: '0.5rem 0' } }),
                        k.a.createElement(
                            'div',
                            { style: { padding: '0 1rem' } },
                            k.a.createElement('label', { className: 'secondary' }, 'From date'),
                            k.a.createElement('br', null),
                            k.a.createElement(a.a, {
                                popupStyle: { zIndex: 999999 },
                                onOpenChange: function(e) {
                                    i(e)
                                },
                                defaultValue: e.rangeDateFrom
                                    ? x.default.isMoment(e.rangeDateFrom)
                                        ? e.rangeDateFrom
                                        : Object(x.default)(e.rangeDateFrom)
                                    : null,
                                onChange: e.onDateFromChange,
                            }),
                            k.a.createElement('br', null),
                            k.a.createElement('br', null),
                            k.a.createElement('label', { className: 'secondary' }, 'To date'),
                            k.a.createElement('br', null),
                            k.a.createElement(a.a, {
                                popupStyle: { zIndex: 999999 },
                                onOpenChange: function(e) {
                                    return i(e)
                                },
                                defaultValue: e.rangeDateTo
                                    ? x.default.isMoment(e.rangeDateTo)
                                        ? e.rangeDateTo
                                        : Object(x.default)(e.rangeDateTo)
                                    : null,
                                onChange: e.onDateToChange,
                            }),
                            k.a.createElement('br', null),
                            k.a.createElement(
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
            w()(F, 'propTypes', { onChange: C.a.func.isRequired })
        },
        560: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Paths', function() {
                    return A
                })
            n(129)
            var r = n(75),
                a = n(311),
                o = n.n(a),
                c = n(17),
                i = n.n(c),
                u = n(18),
                l = n.n(u),
                s = n(7),
                d = n.n(s),
                f = n(21),
                p = n.n(f),
                m = n(22),
                h = n.n(m),
                y = n(13),
                g = n.n(y),
                v = n(6),
                b = n.n(v),
                O = n(0),
                j = n.n(O),
                D = n(16),
                w = n(127),
                E = n(372)
            function k(e, t) {
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
            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? k(Object(n), !0).forEach(function(t) {
                              b()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : k(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function C(e) {
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (e = (function(e, t) {
                            if (!e) return
                            if ('string' == typeof e) return x(e, t)
                            var n = Object.prototype.toString.call(e).slice(8, -1)
                            'Object' === n && e.constructor && (n = e.constructor.name)
                            if ('Map' === n || 'Set' === n) return Array.from(e)
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
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
                    c = !1
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next()
                        return (o = e.done), e
                    },
                    e: function(e) {
                        ;(c = !0), (a = e)
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (c) throw a
                        }
                    },
                }
            }
            function x(e, t) {
                ;(null == t || t > e.length) && (t = e.length)
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
                return r
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
                        r = g()(e)
                    if (t) {
                        var a = g()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return h()(this, n)
                }
            }
            var P = function(e) {
                return e.replace(/(^[0-9]+_\w+:|^)\/\//, '')
            }
            function R() {
                return j.a.createElement(
                    'div',
                    { style: { padding: '1rem' } },
                    "We don't have enough data to show anything here. You might need to send us some frontend (JS) events, as we use the ",
                    j.a.createElement('pre', { style: { display: 'inline' } }, '$current_url'),
                    ' property to calculate paths.'
                )
            }
            var A = (function(e) {
                p()(a, e)
                var t = T(a)
                function a(e) {
                    var r
                    return (
                        i()(this, a),
                        (r = t.call(this, e)),
                        b()(d()(r), 'renderPaths', function() {
                            var e = r.state.paths
                            if (r.state.d3Loaded && r.state.sankeyLoaded) {
                                if (
                                    (document.querySelectorAll('.paths svg').forEach(function(e) {
                                        return e.parentNode.removeChild(e)
                                    }),
                                    e && 0 !== e.nodes.length)
                                ) {
                                    r.setState({ rendered: !0 })
                                    var t = r.canvas.current.offsetWidth,
                                        n = r.canvas.current.offsetHeight,
                                        a = r.d3
                                            .select(r.canvas.current)
                                            .append('svg')
                                            .style('background', '#fff')
                                            .style('width', t)
                                            .style('height', n),
                                        o = new r.sankey.sankey()
                                            .nodeId(function(e) {
                                                return e.name
                                            })
                                            .nodeAlign(r.sankey.sankeyLeft)
                                            .nodeSort(null)
                                            .nodeWidth(15)
                                            .size([t, n])({
                                            nodes: e.nodes.map(function(e) {
                                                return Object.assign({}, e)
                                            }),
                                            links: e.links.map(function(e) {
                                                return Object.assign({}, e)
                                            }),
                                        }),
                                        c = o.nodes,
                                        i = o.links
                                    a.append('g')
                                        .selectAll('rect')
                                        .data(c)
                                        .join('rect')
                                        .attr('x', function(e) {
                                            return e.x0 + 1
                                        })
                                        .attr('y', function(e) {
                                            return e.y0
                                        })
                                        .attr('height', function(e) {
                                            return e.y1 - e.y0
                                        })
                                        .attr('width', function(e) {
                                            return e.x1 - e.x0 - 2
                                        })
                                        .attr('fill', function(e) {
                                            var t,
                                                n,
                                                a = C(e.sourceLinks)
                                            try {
                                                for (a.s(); !(n = a.n()).done; ) {
                                                    var o = n.value
                                                    void 0 === t ? (t = o.color) : t !== o.color && (t = null)
                                                }
                                            } catch (e) {
                                                a.e(e)
                                            } finally {
                                                a.f()
                                            }
                                            if (void 0 === t) {
                                                var c,
                                                    i = C(e.targetLinks)
                                                try {
                                                    for (i.s(); !(c = i.n()).done; ) {
                                                        var u = c.value
                                                        void 0 === t ? (t = u.color) : t !== u.color && (t = null)
                                                    }
                                                } catch (e) {
                                                    i.e(e)
                                                } finally {
                                                    i.f()
                                                }
                                            }
                                            return (r.d3.color(t) || r.d3.color('#dddddd')).darker(0.5)
                                        })
                                        .attr('opacity', 0.5)
                                        .append('title')
                                        .text(function(e) {
                                            return ''.concat(P(e.name), '\n').concat(e.value.toLocaleString())
                                        })
                                    var u = a
                                        .append('defs')
                                        .append('linearGradient')
                                        .attr('id', 'dropoff-gradient')
                                        .attr('gradientTransform', 'rotate(90)')
                                    u
                                        .append('stop')
                                        .attr('offset', '0%')
                                        .attr('stop-color', 'rgba(220,53,69,0.7)'),
                                        u
                                            .append('stop')
                                            .attr('offset', '100%')
                                            .attr('stop-color', '#ffffff')
                                    var l = a
                                        .append('g')
                                        .attr('fill', 'none')
                                        .selectAll('g')
                                        .data(i)
                                        .join('g')
                                        .attr('stroke', function(e) {
                                            return 'var(--blue)'
                                        })
                                        .attr('opacity', 0.3)
                                        .style('mix-blend-mode', 'multiply')
                                    l
                                        .append('path')
                                        .attr('d', r.sankey.sankeyLinkHorizontal())
                                        .attr('stroke-width', function(e) {
                                            return Math.max(1, e.width)
                                        }),
                                        l
                                            .append('g')
                                            .append('path')
                                            .attr('d', function(e, t, n) {
                                                if (0 != e.source.layer) {
                                                    var r,
                                                        a,
                                                        o,
                                                        c,
                                                        i,
                                                        u,
                                                        l =
                                                            e.source.y1 -
                                                            e.source.y0 -
                                                            e.source.sourceLinks.reduce(function(e, t) {
                                                                return e + t.width
                                                            }, 0)
                                                    return (
                                                        (r = 0),
                                                        (a = 0),
                                                        (o = 30),
                                                        (c = l),
                                                        (i = Math.min(25, l)),
                                                        (u = 'M' + (r + i) + ',' + a),
                                                        (u += 'h' + (o - 2 * i)),
                                                        !0
                                                            ? (u += 'a' + i + ',' + i + ' 0 0 1 ' + i + ',' + i)
                                                            : ((u += 'h' + i), (u += 'v' + i)),
                                                        (u += 'v' + (c - 2 * i)),
                                                        !1
                                                            ? (u += 'a' + i + ',' + i + ' 0 0 1 ' + -i + ',' + i)
                                                            : ((u += 'v' + i), (u += 'h' + -i)),
                                                        (u += 'h' + (2 * i - o)),
                                                        !1
                                                            ? (u += 'a' + i + ',' + i + ' 0 0 1 ' + -i + ',' + -i)
                                                            : ((u += 'h' + -i), (u += 'v' + -i)),
                                                        (u += 'v' + (2 * i - c)),
                                                        !1
                                                            ? (u += 'a' + i + ',' + i + ' 0 0 1 ' + i + ',' + -i)
                                                            : ((u += 'v' + -i), (u += 'h' + i)),
                                                        (u += 'z')
                                                    )
                                                }
                                            })
                                            .attr('fill', 'url(#dropoff-gradient)')
                                            .attr('stroke-width', 0)
                                            .attr('transform', function(e) {
                                                return (
                                                    'translate(' +
                                                    Math.round(e.source.x1) +
                                                    ',' +
                                                    Math.round(
                                                        e.source.y0 +
                                                            e.source.sourceLinks.reduce(function(e, t) {
                                                                return e + t.width
                                                            }, 0)
                                                    ) +
                                                    ')'
                                                )
                                            })
                                            .append('tspan')
                                            .text(function(e) {
                                                return (
                                                    e.value -
                                                    e.source.sourceLinks.reduce(function(e, t) {
                                                        return e + t.value
                                                    }, 0)
                                                )
                                            }),
                                        l.append('title').text(function(e) {
                                            return ''
                                                .concat(e.source.name, ' → ')
                                                .concat(e.target.name, '\n')
                                                .concat(e.value.toLocaleString())
                                        })
                                    var s = a
                                        .append('g')
                                        .style('font-size', '12px')
                                        .selectAll('text')
                                        .data(c)
                                        .join('text')
                                        .attr('x', function(e) {
                                            return e.x0 < t / 2 ? e.x1 + 6 : e.x0 - 6
                                        })
                                        .attr('y', function(e) {
                                            return (e.y1 + e.y0) / 2
                                        })
                                        .attr('dy', '0.35em')
                                        .attr('text-anchor', function(e) {
                                            return e.x0 < t / 2 ? 'start' : 'end'
                                        })
                                        .attr('display', function(e) {
                                            return e.value > 0 ? 'inherit' : 'none'
                                        })
                                        .text(function(e) {
                                            return e.name.length > 35
                                                ? P(e.name).substring(0, 6) + '...' + P(e.name).slice(-15)
                                                : P(e.name)
                                        })
                                    return (
                                        s
                                            .append('tspan')
                                            .attr('fill-opacity', 0.7)
                                            .text(function(e) {
                                                return ' '.concat(e.value.toLocaleString())
                                            }),
                                        s.append('title').text(function(e) {
                                            return P(e.name)
                                        }),
                                        s.node()
                                    )
                                }
                                r.setState({ rendered: !0 })
                            }
                        }),
                        b()(d()(r), 'fetchPaths', function() {
                            var e = Object(w.o)(r.state.filter)
                            D.a.get('api/paths'.concat(e ? '/?'.concat(e) : '')).then(function(e) {
                                r.setState(
                                    {
                                        paths: {
                                            nodes: [].concat(
                                                o()(
                                                    e.map(function(e) {
                                                        return { name: e.source }
                                                    })
                                                ),
                                                o()(
                                                    e.map(function(e) {
                                                        return { name: e.target }
                                                    })
                                                )
                                            ),
                                            links: e,
                                        },
                                        dataLoaded: !0,
                                    },
                                    r.renderPaths
                                )
                            })
                        }),
                        b()(d()(r), 'updateFilter', function(e) {
                            r.setState(
                                { filter: S(S({}, r.state.filter), e), rendered: !1, dataLoaded: !1 },
                                r.fetchPaths
                            )
                        }),
                        (r.state = {
                            filter: { dateFrom: null, dateTo: null },
                            paths: { nodes: [], links: [] },
                            d3Loaded: !1,
                            sankeyLoaded: !1,
                        }),
                        (r.fetchPaths = r.fetchPaths.bind(d()(r))),
                        (r.canvas = j.a.createRef()),
                        r.fetchPaths(),
                        n
                            .e(23)
                            .then(n.bind(null, 552))
                            .then(function(e) {
                                ;(r.d3 = e), r.setState({ d3Loaded: !0 })
                            }),
                        n
                            .e(24)
                            .then(n.bind(null, 553))
                            .then(function(e) {
                                ;(r.sankey = e), r.setState({ sankeyLoaded: !0 })
                            }),
                        r
                    )
                }
                return (
                    l()(a, [
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.paths,
                                    a = t.filter,
                                    o = t.dataLoaded
                                return j.a.createElement(
                                    'div',
                                    null,
                                    j.a.createElement('h1', null, 'Paths'),
                                    j.a.createElement(
                                        w.a,
                                        {
                                            title: j.a.createElement(
                                                'span',
                                                null,
                                                j.a.createElement(
                                                    'span',
                                                    { className: 'float-right' },
                                                    j.a.createElement(E.a, {
                                                        onChange: function(t, n) {
                                                            return e.updateFilter({ date_from: t, date_to: n })
                                                        },
                                                        dateFrom: a.date_from,
                                                        dateTo: a.date_to,
                                                    })
                                                )
                                            ),
                                        },
                                        j.a.createElement(
                                            'div',
                                            { ref: this.canvas, className: 'paths', style: { height: '90vh' } },
                                            o && n && 0 === n.nodes.length
                                                ? j.a.createElement(R, null)
                                                : !o &&
                                                      j.a.createElement(
                                                          'div',
                                                          { style: { paddingTop: '14rem', textAlign: 'center' } },
                                                          j.a.createElement('div', null),
                                                          j.a.createElement(r.a, null),
                                                          j.a.createElement('br', null),
                                                          j.a.createElement('br', null),
                                                          '(This might take a while)'
                                                      )
                                        )
                                    )
                                )
                            },
                        },
                    ]),
                    a
                )
            })(O.Component)
        },
    },
])
//# sourceMappingURL=paths.js.map
