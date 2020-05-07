;(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        127: function(e, t, n) {
            'use strict'
            n.d(t, 'p', function() {
                return E
            }),
                n.d(t, 'o', function() {
                    return w
                }),
                n.d(t, 'j', function() {
                    return k
                }),
                n.d(t, 'm', function() {
                    return P
                }),
                n.d(t, 'd', function() {
                    return N
                }),
                n.d(t, 'e', function() {
                    return C
                }),
                n.d(t, 'b', function() {
                    return S
                }),
                n.d(t, 'a', function() {
                    return F
                }),
                n.d(t, 'c', function() {
                    return x
                }),
                n.d(t, 'n', function() {
                    return R
                }),
                n.d(t, 'g', function() {
                    return A
                }),
                n.d(t, 'f', function() {
                    return D
                }),
                n.d(t, 'l', function() {
                    return _
                }),
                n.d(t, 'i', function() {
                    return T
                }),
                n.d(t, 'h', function() {
                    return V
                }),
                n.d(t, 'k', function() {
                    return I
                })
            var r = n(42),
                a = n.n(r),
                o = n(6),
                i = n.n(o),
                c = (n(129), n(75)),
                u = n(12),
                l = n.n(u),
                s = n(96),
                p = n.n(s),
                f = n(0),
                d = n.n(f),
                m = n(16),
                y = n(23),
                v = n(1),
                b = n.n(v)
            function h(e) {
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
                              i()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : O(Object(n)).forEach(function(t) {
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
                                        : ((e = 'object' === p()(e) ? JSON.stringify(e) : e), encodeURIComponent(e))
                                })(r)
                            )
                        })
                        .join('&')
                },
                k = function() {
                    return '' != window.location.search
                        ? window.location.search
                              .slice(1)
                              .split('&')
                              .reduce(function(e, t) {
                                  return (e[(t = t.split('='))[0]] = decodeURIComponent(t[1])), e
                              }, {})
                        : {}
                },
                P = function(e) {
                    return e ? e.toLocaleString(void 0, { style: 'percent', maximumFractionDigits: 2 }) : ''
                },
                N = function() {
                    return d.a.createElement(
                        'div',
                        { className: 'loading-overlay' },
                        d.a.createElement('div', null),
                        d.a.createElement(c.a, null)
                    )
                },
                C = function(e) {
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
                S = function(e) {
                    return d.a.createElement(
                        'span',
                        a()({}, e, { className: 'close cursor-pointer ' + e.className, style: j({}, e.style) }),
                        d.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                    )
                }
            function F(e) {
                return d.a.createElement(
                    'div',
                    a()({}, e, { className: 'card ' + e.className, style: e.style, title: '' }),
                    e.title && d.a.createElement('div', { className: 'card-header' }, e.title),
                    e.children
                )
            }
            var x = function(e) {
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
                                            j(j({}, e.object), {}, { deleted: !n })
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
            x.propTypes = {
                endpoint: b.a.string.isRequired,
                object: b.a.shape({ name: b.a.string.isRequired, id: b.a.number.isRequired }).isRequired,
                className: b.a.string,
                style: b.a.object,
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
                            i = function() {
                                ;(r = null), n || e.apply(a, o)
                            },
                            c = n && !r
                        clearTimeout(r), (r = setTimeout(i, t)), c && e.apply(a, o)
                    }
                },
                D = function(e) {
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
                q = Object.entries(_).reverse(),
                T = function(e) {
                    var t,
                        n = h(q)
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
                    return e + ' '.concat(_.exact.split(' ')[0], ' ')
                },
                V = function(e, t) {
                    window.confirm('Are you sure you want to delete this user? This cannot be undone') &&
                        m.a.delete('api/person/' + e.id).then(function() {
                            Object(y.c)('Person succesfully deleted.'), t && t()
                        })
                },
                I = function(e, t) {
                    return JSON.stringify(e) === JSON.stringify(t)
                }
        },
        323: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return z
            })
            n(357)
            var r = n(358),
                a = (n(388), n(393)),
                o = (n(128), n(40)),
                i = n(12),
                c = n.n(i),
                u = n(0),
                l = n.n(u),
                s = n(179),
                p = n(127),
                f = n(17),
                d = n.n(f),
                m = n(18),
                y = n.n(m),
                v = n(7),
                b = n.n(v),
                h = n(21),
                g = n.n(h),
                O = n(22),
                j = n.n(O),
                E = n(13),
                w = n.n(E),
                k = n(16),
                P = n(392),
                N = n(1),
                C = n.n(N)
            function S(e) {
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
                    return j()(this, n)
                }
            }
            var F = (function(e) {
                g()(n, e)
                var t = S(n)
                function n(e) {
                    var r
                    return (
                        d()(this, n),
                        ((r = t.call(this, e)).state = { input: e.value }),
                        (r.loadPropertyValues = Object(p.g)(r.loadPropertyValues.bind(b()(r)), 250)),
                        (r.ref = l.a.createRef()),
                        r
                    )
                }
                return (
                    y()(n, [
                        {
                            key: 'loadPropertyValues',
                            value: function(e, t) {
                                var n = this.props.propertyKey.split('__')[0]
                                k.a
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
                                    o = this.state,
                                    i = o.isEditing
                                o.input
                                return l.a.createElement(
                                    'span',
                                    { ref: this.ref, className: 'property-value' },
                                    l.a.createElement(P.a, {
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
                                        inputValue: i ? this.state.input : '',
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
            F.propTypes = { propertyKey: C.a.string.isRequired, value: C.a.any.isRequired, onSet: C.a.func.isRequired }
            var x = n(9),
                R = Object.entries(p.l).map(function(e) {
                    var t = c()(e, 2),
                        n = t[0]
                    return { label: t[1], value: n }
                })
            function A(e) {
                var t = e.index,
                    n = e.endpoint,
                    r = e.onComplete,
                    a = e.logic,
                    o = Object(x.useValues)(a),
                    i = o.properties,
                    c = o.filters,
                    u = Object(x.useActions)(a),
                    f = u.setFilter,
                    d = (u.remove, c[t]),
                    m = Object.keys(d)[0] ? Object.keys(d)[0].split('__') : [],
                    y = Object.values(d)[0]
                return l.a.createElement(
                    'div',
                    { className: 'row', style: { margin: '0.5rem -15px', minWidth: m[0] ? 700 : 200 } },
                    i &&
                        l.a.createElement(
                            'div',
                            { className: m[0] ? 'col-4' : 'col' },
                            l.a.createElement(s.a, {
                                options: i,
                                value: [{ label: m[0], value: m[0] }],
                                isLoading: !i,
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
                        l.a.createElement(
                            'div',
                            { className: 'col-3 pl-0' },
                            l.a.createElement(s.a, {
                                options: R,
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
                        l.a.createElement(
                            'div',
                            { className: 'col-5 pl-0' },
                            l.a.createElement(F, {
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
                                l.a.createElement(
                                    'p',
                                    { className: 'text-danger' },
                                    'Value needs to be a number. Try "equals" or "contains" instead.'
                                )
                        )
                )
            }
            var D = n(67),
                _ = n.n(D),
                q = n(311),
                T = n.n(q),
                V = n(6),
                I = n.n(V),
                K = n(29),
                L = n.n(K),
                M = n(53),
                U = n.n(M),
                J = n(26),
                Y = n(28)
            function W(e, t) {
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
            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? W(Object(n), !0).forEach(function(t) {
                              I()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : W(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var H = Object(x.kea)({
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
                                ((e = U()(
                                    L.a.mark(function e() {
                                        return L.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), k.a.get('api/person/properties')
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
                            I()(t, r.loadPeoplePropertiesSuccess, function(e, t) {
                                return t.properties
                            }),
                            I()(t, r.setProperties, function(e, t) {
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
                                      return I()({}, n, r)
                                  })
                                : [],
                            ((n = {}),
                            I()(n, r.setFilter, function(e, t) {
                                var n = t.index,
                                    r = t.key,
                                    a = t.value,
                                    o = T()(e)
                                return (o[n] = I()({}, r, a)), o
                            }),
                            I()(n, r.setFilters, function(e, t) {
                                return t.filters
                            }),
                            I()(n, r.newFilter, function(e) {
                                return [].concat(T()(e), [{}])
                            }),
                            I()(n, r.remove, function(e, t) {
                                var n = t.index,
                                    r = e.filter(function(e, t) {
                                        return t !== n
                                    })
                                return 0 === r.length
                                    ? [{}]
                                    : 0 !== Object.keys(r[r.length - 1]).length
                                    ? [].concat(T()(r), [{}])
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
                        I()(t, n.setFilter, function(e) {
                            return e.value && n.update()
                        }),
                        I()(t, n.remove, function() {
                            return n.update()
                        }),
                        I()(t, n.update, function() {
                            if (r.onChange) {
                                if (0 === a.filters.length) return n.newFilter(), r.onChange({})
                                0 !== Object.keys(a.filters[a.filters.length - 1]).length && n.newFilter()
                                var e = a.filters.reduce(function(e, t) {
                                    return B(B({}, e), t)
                                })
                                r.onChange(e)
                            } else {
                                var t = a.filters,
                                    o = Y.router.values.searchParams,
                                    i = (o.properties, _()(o, ['properties'])),
                                    c = Y.router.values.location.pathname
                                t.filter(function(e) {
                                    return Object.keys(e).length > 0
                                }).length > 0 &&
                                    (i.properties = t.reduce(function(e, t) {
                                        return B(B({}, e), t)
                                    })),
                                    Object(p.k)(Y.router.values.searchParams, i) || Y.router.actions.push(c, i)
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
                            var o = a.properties
                            if (!r.onChange) {
                                var i
                                try {
                                    i = n.filters
                                } catch (e) {
                                    return
                                }
                                if (!Object(p.k)(o || {}, i)) {
                                    var u = Object.entries(o || {}).map(function(e) {
                                        var t = c()(e, 2),
                                            n = t[0],
                                            r = t[1]
                                        return I()({}, n, r)
                                    })
                                    t.setFilters([].concat(T()(u), [{}]))
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
                                    : t.setProperties(J.a.values.eventProperties)
                        },
                    }
                },
                path: function(e) {
                    return ['lib', 'components', 'PropertyFilters', 'propertyFilterLogic', e]
                },
            })
            function $(e) {
                var t = e.endpoint,
                    n = e.item,
                    i = e.index,
                    s = e.filters,
                    f = e.logic,
                    d = Object(x.useActions)(f).remove,
                    m = Object(u.useState)(!1),
                    y = c()(m, 2),
                    v = y[0],
                    b = y[1]
                return l.a.createElement(
                    r.a,
                    { align: 'middle', className: 'mt-2 mb-2' },
                    l.a.createElement(
                        a.a,
                        {
                            trigger: 'click',
                            onVisibleChange: function(e) {
                                !e && Object.keys(n).length >= 0 && !n[Object.keys(n)[0]] && d(i), b(e)
                            },
                            defaultVisible: !1,
                            visible: v,
                            placement: 'bottomLeft',
                            content: l.a.createElement(A, {
                                key: i,
                                index: i,
                                endpoint: t || 'event',
                                onComplete: function() {
                                    return b(!1)
                                },
                                logic: f,
                            }),
                        },
                        0 !== Object.keys(n).length
                            ? l.a.createElement(
                                  o.a,
                                  { type: 'primary', shape: 'round', style: { maxWidth: '85%' } },
                                  l.a.createElement(
                                      'span',
                                      { style: { width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' } },
                                      Object(p.i)(Object.keys(n)[0]) + n[Object.keys(n)[0]]
                                  )
                              )
                            : l.a.createElement(o.a, { type: 'default', shape: 'round' }, 'New Filter')
                    ),
                    i !== s.length - 1 &&
                        l.a.createElement(p.b, {
                            className: 'ml-1',
                            onClick: function() {
                                d(i)
                            },
                            style: { cursor: 'pointer', float: 'none' },
                        })
                )
            }
            function z(e) {
                var t = e.endpoint,
                    n = e.propertyFilters,
                    r = e.className,
                    a = e.style,
                    o = e.onChange,
                    i = e.pageKey,
                    c = H({ propertyFilters: n, endpoint: t, onChange: o, pageKey: i }),
                    u = Object(x.useValues)(c).filters
                return l.a.createElement(
                    'div',
                    {
                        className: r || 'col-8',
                        style: { padding: 0, marginBottom: '2rem', display: 'inline', style: a },
                    },
                    l.a.createElement(
                        'div',
                        { className: 'column' },
                        u &&
                            u.map(function(e, n) {
                                return l.a.createElement($, {
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
        344: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return c
            })
            var r = n(0),
                a = n.n(r),
                o = n(1),
                i = n.n(o)
            function c(e) {
                var t = e.properties
                return Array.isArray(t)
                    ? a.a.createElement(
                          'div',
                          null,
                          t.map(function(e, t) {
                              return a.a.createElement(
                                  'span',
                                  { key: t },
                                  a.a.createElement(c, { properties: e }),
                                  a.a.createElement('br', null)
                              )
                          })
                      )
                    : t instanceof Object
                    ? a.a.createElement(
                          'table',
                          { className: 'table' },
                          a.a.createElement(
                              'tbody',
                              null,
                              Object.keys(t)
                                  .sort()
                                  .map(function(e) {
                                      return a.a.createElement(
                                          'tr',
                                          { key: e },
                                          a.a.createElement('th', null, e),
                                          a.a.createElement('td', null, a.a.createElement(c, { properties: t[e] }))
                                      )
                                  })
                          )
                      )
                    : !0 === t
                    ? 'true'
                    : !1 === t
                    ? 'false'
                    : t || null
            }
            c.propTypes = { properties: i.a.any.isRequired }
        },
    },
])
//# sourceMappingURL=action~events~liveActions~people~person.js.map
