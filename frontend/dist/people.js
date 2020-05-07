;(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        404: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return p
            })
            n(502)
            var a = n(498),
                r = (n(128), n(40)),
                o = n(0),
                c = n.n(o),
                i = (n(16), n(27)),
                s = n(344),
                l = n(504),
                u = n(127)
            function p(e) {
                var t = e.people,
                    n = e.loading,
                    o = e.actions,
                    p = e.onChange,
                    m = [
                        {
                            title: 'Person',
                            dataIndex: 'name',
                            key: 'name',
                            render: function(e, t) {
                                return c.a.createElement(
                                    i.a,
                                    {
                                        to: '/person/' + encodeURIComponent(t.distinct_ids[0]),
                                        className: 'ph-no-capture',
                                    },
                                    t.name
                                )
                            },
                        },
                    ]
                return (
                    o &&
                        m.push({
                            title: 'Actions',
                            render: function(e) {
                                return c.a.createElement(
                                    r.a,
                                    {
                                        danger: !0,
                                        type: 'link',
                                        onClick: function() {
                                            return Object(u.h)(e, p)
                                        },
                                    },
                                    c.a.createElement(l.a, null)
                                )
                            },
                        }),
                    c.a.createElement(a.a, {
                        size: 'small',
                        columns: m,
                        loading: n,
                        rowKey: function(e) {
                            return e.id
                        },
                        pagination: { pageSize: 100, hideOnSinglePage: !0 },
                        expandable: {
                            expandedRowRender: function(e) {
                                var t = e.properties
                                return c.a.createElement(s.a, { properties: t })
                            },
                            rowExpandable: function(e) {
                                var t = e.properties
                                return Object.keys(t).length > 0
                            },
                        },
                        dataSource: t,
                    })
                )
            }
        },
        564: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'People', function() {
                    return U
                })
            n(128)
            var a = n(40),
                r = n(12),
                o = n.n(r),
                c = n(0),
                i = n.n(c),
                s = n(16),
                l = n(127),
                u = n(311),
                p = n.n(u),
                m = n(17),
                h = n.n(m),
                f = n(18),
                d = n.n(f),
                y = n(7),
                g = n.n(y),
                v = n(21),
                b = n.n(v),
                E = n(22),
                C = n.n(E),
                S = n(13),
                k = n.n(S),
                N = n(23),
                x = n(323),
                w = n(179)
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
                        a = k()(e)
                    if (t) {
                        var r = k()(this).constructor
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments)
                    return C()(this, n)
                }
            }
            var O = (function(e) {
                    b()(n, e)
                    var t = R(n)
                    function n(e) {
                        var a
                        return (
                            h()(this, n),
                            ((a = t.call(this, e)).state = {
                                days: 1,
                                selected: e.group.action_id ? 'action' : e.group.properties && 'property',
                            }),
                            (a.DayChoice = a.DayChoice.bind(g()(a))),
                            a
                        )
                    }
                    return (
                        d()(n, [
                            {
                                key: 'DayChoice',
                                value: function(e) {
                                    var t = this
                                    return i.a.createElement(
                                        'button',
                                        {
                                            onClick: function() {
                                                return t.props.onChange({
                                                    action_id: t.props.group.action_id,
                                                    days: e.days,
                                                })
                                            },
                                            type: 'button',
                                            className:
                                                'btn btn-sm ' +
                                                (this.props.group.days == e.days ? 'btn-secondary' : 'btn-light'),
                                        },
                                        e.name
                                    )
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.group,
                                        a = t.index,
                                        r = (t.properties, t.actions),
                                        o = t.onChange,
                                        c = t.onRemove,
                                        s = this.state.selected
                                    return i.a.createElement(
                                        l.a,
                                        { title: !1, style: { margin: 0 } },
                                        i.a.createElement(
                                            'div',
                                            { className: 'card-body' },
                                            a > 0 && i.a.createElement(l.b, { className: 'float-right', onClick: c }),
                                            i.a.createElement(
                                                'div',
                                                { style: { height: 32 } },
                                                'User has',
                                                'action' == s && ' done ',
                                                i.a.createElement(
                                                    'div',
                                                    { className: 'btn-group', style: { margin: '0 8px' } },
                                                    i.a.createElement(
                                                        'button',
                                                        {
                                                            onClick: function() {
                                                                return e.setState({ selected: 'action' })
                                                            },
                                                            type: 'button',
                                                            className:
                                                                'btn btn-sm ' +
                                                                ('action' == s ? 'btn-secondary' : 'btn-light'),
                                                        },
                                                        'action'
                                                    ),
                                                    i.a.createElement(
                                                        'button',
                                                        {
                                                            onClick: function() {
                                                                return e.setState({ selected: 'property' })
                                                            },
                                                            type: 'button',
                                                            className:
                                                                'btn btn-sm ' +
                                                                ('property' == s ? 'btn-secondary' : 'btn-light'),
                                                        },
                                                        'property'
                                                    )
                                                ),
                                                'action' == s &&
                                                    i.a.createElement(
                                                        'span',
                                                        null,
                                                        'in the last',
                                                        i.a.createElement(
                                                            'div',
                                                            { className: 'btn-group', style: { margin: '0 8px' } },
                                                            i.a.createElement(this.DayChoice, { days: 1, name: 'day' }),
                                                            i.a.createElement(this.DayChoice, {
                                                                days: 7,
                                                                name: '7 days',
                                                            }),
                                                            i.a.createElement(this.DayChoice, {
                                                                days: 30,
                                                                name: 'month',
                                                            })
                                                        )
                                                    )
                                            ),
                                            s &&
                                                i.a.createElement(
                                                    'div',
                                                    { style: { marginLeft: '2rem', minHeight: 38 } },
                                                    'property' == s &&
                                                        i.a.createElement(x.a, {
                                                            endpoint: 'person',
                                                            pageKey: 'cohort',
                                                            className: ' ',
                                                            onChange: function(e) {
                                                                return o({ properties: e, days: n.days })
                                                            },
                                                            propertyFilters: n.properties || {},
                                                            style: { margin: '1rem 0 0' },
                                                        }),
                                                    'action' == s &&
                                                        i.a.createElement(
                                                            'div',
                                                            { style: { marginTop: '1rem', width: 350 } },
                                                            i.a.createElement(w.a, {
                                                                options: r,
                                                                placeholder: 'Select action...',
                                                                onChange: function(e) {
                                                                    return o({ action_id: e.value })
                                                                },
                                                                value:
                                                                    r &&
                                                                    r.filter(function(e) {
                                                                        return e.value == n.action_id
                                                                    }),
                                                            })
                                                        )
                                                )
                                        )
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(c.Component),
                j = n(28)
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
                        a = k()(e)
                    if (t) {
                        var r = k()(this).constructor
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments)
                    return C()(this, n)
                }
            }
            var P = (function(e) {
                    b()(n, e)
                    var t = D(n)
                    function n(e) {
                        var a
                        return (
                            h()(this, n),
                            ((a = t.call(this, e)).state = {
                                groups: window.location.search.indexOf('new_cohort') > -1 ? [{}] : [],
                                id: Object(l.j)().cohort,
                                name: '',
                            }),
                            a.fetchProperties.call(g()(a)),
                            a.fetchActions.call(g()(a)),
                            (a.onSave = a.onSave.bind(g()(a))),
                            a.state.id && a.fetchCohort.call(g()(a)),
                            a
                        )
                    }
                    return (
                        d()(n, [
                            {
                                key: 'fetchCohort',
                                value: function() {
                                    var e = this
                                    s.a.get('api/cohort/' + this.state.id).then(function(t) {
                                        return e.setState(t)
                                    })
                                },
                            },
                            {
                                key: 'onSave',
                                value: function(e) {
                                    var t = this
                                    e.preventDefault()
                                    var n = { id: this.state.id, name: this.state.name, groups: this.state.groups },
                                        a = function(e) {
                                            t.props.onChange(e.id),
                                                t.setState({ id: e.id }),
                                                Object(N.c)('Cohort saved.'),
                                                t.actions.push(t.props.location.pathname, { cohort: e.id })
                                        }
                                    if (this.state.id) return s.a.update('api/cohort/' + this.state.id, n).then(a)
                                    s.a.create('api/cohort', n).then(a)
                                },
                            },
                            {
                                key: 'fetchProperties',
                                value: function() {
                                    var e = this
                                    s.a.get('api/person/properties').then(function(t) {
                                        e.setState({
                                            properties: t.map(function(e) {
                                                return { label: e.name, value: e.name }
                                            }),
                                        })
                                    })
                                },
                            },
                            {
                                key: 'fetchActions',
                                value: function() {
                                    var e = this
                                    s.a.get('api/action').then(function(t) {
                                        e.setState({
                                            actions: t.results.map(function(e) {
                                                return { label: e.name, value: e.id }
                                            }),
                                        })
                                    })
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.state,
                                        n = t.groups,
                                        a = t.properties,
                                        r = t.actions,
                                        o = t.name
                                    return 0 === n.length
                                        ? i.a.createElement(
                                              'button',
                                              {
                                                  className: 'btn btn-sm btn-outline-success float-right',
                                                  style: { marginBottom: '1rem', marginLeft: 12 },
                                                  onClick: function() {
                                                      return e.setState({ groups: [{}] })
                                                  },
                                              },
                                              '+ new cohort'
                                          )
                                        : i.a.createElement(
                                              'div',
                                              { style: { maxWidth: 750 } },
                                              i.a.createElement(
                                                  l.a,
                                                  {
                                                      title: i.a.createElement(
                                                          'span',
                                                          null,
                                                          i.a.createElement(l.b, {
                                                              className: 'float-right',
                                                              onClick: function() {
                                                                  e.setState({ groups: [], id: !1 }),
                                                                      e.props.onChange(),
                                                                      e.actions.push(
                                                                          ''.concat(e.props.location.pathname)
                                                                      )
                                                              },
                                                          }),
                                                          o || 'New cohort'
                                                      ),
                                                  },
                                                  i.a.createElement(
                                                      'form',
                                                      { className: 'card-body', onSubmit: this.onSave },
                                                      i.a.createElement('input', {
                                                          style: { marginBottom: '1rem' },
                                                          required: !0,
                                                          className: 'form-control',
                                                          autoFocus: !0,
                                                          placeholder: 'Cohort name...',
                                                          value: o,
                                                          onChange: function(t) {
                                                              return e.setState({ name: t.target.value })
                                                          },
                                                      }),
                                                      n
                                                          .map(function(t, o) {
                                                              return i.a.createElement(O, {
                                                                  key: o,
                                                                  group: t,
                                                                  properties: a,
                                                                  actions: r,
                                                                  index: o,
                                                                  onRemove: function() {
                                                                      n.splice(o, 1), e.setState({ groups: n })
                                                                  },
                                                                  onChange: function(t) {
                                                                      ;(n[o] = t), e.setState({ groups: n })
                                                                  },
                                                              })
                                                          })
                                                          .reduce(function(e, t) {
                                                              return [
                                                                  e,
                                                                  i.a.createElement(
                                                                      'div',
                                                                      {
                                                                          className: 'secondary',
                                                                          style: { textAlign: 'center', margin: 8 },
                                                                      },
                                                                      ' ',
                                                                      'OR',
                                                                      ' '
                                                                  ),
                                                                  t,
                                                              ]
                                                          }),
                                                      i.a.createElement(
                                                          'button',
                                                          {
                                                              className: 'btn btn-outline-success btn-sm',
                                                              style: { marginTop: '1rem' },
                                                              type: 'button',
                                                              onClick: function() {
                                                                  return e.setState({ groups: [].concat(p()(n), [{}]) })
                                                              },
                                                          },
                                                          'New group'
                                                      ),
                                                      i.a.createElement(
                                                          'button',
                                                          {
                                                              className: 'btn btn-success btn-sm float-right',
                                                              style: { marginTop: '1rem' },
                                                          },
                                                          'Save cohort'
                                                      )
                                                  )
                                              )
                                          )
                                },
                            },
                        ]),
                        n
                    )
                })(c.Component),
                T = Object(j.router)(P),
                _ = n(404),
                A = n(554),
                F = n(565),
                K = n(566)
            function U() {
                var e = Object(c.useState)(!0),
                    t = o()(e, 2),
                    n = t[0],
                    r = t[1],
                    u = Object(c.useState)(null),
                    p = o()(u, 2),
                    m = p[0],
                    h = p[1],
                    f = Object(c.useState)(''),
                    d = o()(f, 2),
                    y = d[0],
                    g = d[1],
                    v = Object(c.useState)(Object(l.j)().cohort),
                    b = o()(v, 2),
                    E = b[0],
                    C = b[1],
                    S = Object(c.useState)({}),
                    k = o()(S, 2),
                    N = k[0],
                    x = k[1]
                function w(e) {
                    var t = e.url,
                        n = e.scrollTop,
                        a = e.search
                    r(!0),
                        n &&
                            document
                                .querySelector('section.ant-layout > .content')
                                .parentNode.scrollTo({ top: 0, behavior: 'smooth' }),
                        s.a
                            .get(t || 'api/person/?'.concat(a ? 'search=' + a : '').concat(E ? '&cohort=' + E : ''))
                            .then(function(e) {
                                h(e.results), r(!1), x({ next: e.next, previous: e.previous })
                            })
                }
                Object(c.useEffect)(
                    function() {
                        w({})
                    },
                    [E]
                )
                var R =
                    (m &&
                        m
                            .map(function(e) {
                                return e.properties.email
                            })
                            .filter(function(e) {
                                return e
                            })[0]) ||
                    'example@gmail.com'
                return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement('h1', null, 'Users'),
                    i.a.createElement(T, { onChange: C }),
                    i.a.createElement(
                        a.a,
                        {
                            className: 'float-right',
                            type: 'default',
                            icon: i.a.createElement(A.a, null),
                            href: '/api/person.csv' + (E ? '?cohort=' + E : ''),
                        },
                        'Export'
                    ),
                    i.a.createElement('input', {
                        className: 'form-control',
                        name: 'search',
                        autoFocus: !0,
                        value: y,
                        onChange: function(e) {
                            return g(e.target.value)
                        },
                        onKeyDown: function(e) {
                            return 13 === e.keyCode && w({ search: y })
                        },
                        placeholder: m && 'Try ' + R + ' or has:email',
                        style: { maxWidth: 400 },
                    }),
                    i.a.createElement('br', null),
                    i.a.createElement(_.a, {
                        people: m,
                        loading: n,
                        actions: !0,
                        onChange: function() {
                            return w({ search: y })
                        },
                    }),
                    i.a.createElement(
                        'div',
                        { style: { margin: '3rem auto 10rem', width: 200 } },
                        i.a.createElement(
                            a.a,
                            {
                                type: 'link',
                                disabled: !N.previous,
                                onClick: function() {
                                    return w({ url: N.previous, scrollTop: !0 })
                                },
                            },
                            i.a.createElement(F.a, { style: { verticalAlign: 'initial' } }),
                            ' Previous'
                        ),
                        i.a.createElement(
                            a.a,
                            {
                                type: 'link',
                                disabled: !N.next,
                                onClick: function() {
                                    return w({ url: N.next, scrollTop: !0 })
                                },
                            },
                            'Next ',
                            i.a.createElement(K.a, { style: { verticalAlign: 'initial' } })
                        )
                    )
                )
            }
        },
    },
])
//# sourceMappingURL=people.js.map
