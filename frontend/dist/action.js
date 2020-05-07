;(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        191: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return K
            })
            var r = n(6),
                a = n.n(r),
                o = n(17),
                i = n.n(o),
                c = n(18),
                s = n.n(c),
                l = n(7),
                u = n.n(l),
                p = n(21),
                m = n.n(p),
                f = n(22),
                d = n.n(f),
                v = n(13),
                h = n.n(v),
                b = n(0),
                y = n.n(b),
                E = n(16),
                g = n(127),
                O = n(1),
                w = n.n(O),
                x = n(27),
                k = n(23),
                S = n(179),
                j = n(9),
                N = n(26)
            function P(e) {
                var t = e.value,
                    n = e.onChange,
                    r = Object(j.useValues)(N.a).eventNamesGrouped
                return y.a.createElement(
                    'span',
                    null,
                    y.a.createElement(S.a, {
                        options: r,
                        isSearchable: !0,
                        isClearable: !0,
                        onChange: n,
                        disabled: 0 === r[0].options.length,
                        value: t ? { label: t, value: t } : null,
                    }),
                    y.a.createElement('br', null),
                    0 === r[0].options.length && "You haven't sent any custom events.",
                    ' ',
                    y.a.createElement(
                        'a',
                        { href: 'https://docs.posthog.com/#/integrations', target: '_blank' },
                        'See documentation'
                    ),
                    ' ',
                    'on how to send custom events in lots of languages.'
                )
            }
            var C = n(12),
                _ = n.n(C),
                D = n(69)
            function L(e, t) {
                return (
                    '/api/user/redirect_to_site/' +
                    (e ? '?actionId=' + e : '') +
                    (t ? ''.concat(e ? '&' : '?', 'appUrl=').concat(encodeURIComponent(t)) : '')
                )
            }
            function T(e) {
                var t = e.actionId,
                    n = e.url,
                    r = e.saveUrl,
                    a = e.deleteUrl,
                    o = Object(b.useState)('https://' === n),
                    i = _()(o, 2),
                    c = i[0],
                    s = i[1],
                    l = Object(b.useState)(n || 'https://'),
                    u = _()(l, 2),
                    p = u[0],
                    m = u[1],
                    f = Object(b.useState)(n || 'https://'),
                    d = _()(f, 2),
                    v = d[0],
                    h = d[1]
                return y.a.createElement(
                    'li',
                    { className: 'list-group-item' },
                    c
                        ? y.a.createElement(
                              'div',
                              { key: 'form', style: { display: 'flex', width: '100%' } },
                              y.a.createElement('input', {
                                  value: v,
                                  onChange: function(e) {
                                      return h(e.target.value)
                                  },
                                  autoFocus: !0,
                                  style: { flex: '1' },
                                  type: 'url',
                                  className: 'form-control',
                                  placeholder: 'https://',
                              }),
                              y.a.createElement(
                                  'button',
                                  {
                                      className: 'btn btn-primary',
                                      style: { marginLeft: 5 },
                                      onClick: function() {
                                          'https://' === v
                                              ? a()
                                              : r(v, function() {
                                                    s(!1), m(v)
                                                })
                                      },
                                  },
                                  'Save'
                              ),
                              y.a.createElement(
                                  'button',
                                  {
                                      className: 'btn btn-outline-secondary',
                                      style: { marginLeft: 5 },
                                      onClick: function() {
                                          'https://' === n ? a() : (s(!1), h(p || n || 'https://'))
                                      },
                                  },
                                  'Cancel'
                              )
                          )
                        : void 0 === n
                        ? y.a.createElement(
                              'div',
                              { key: 'add-new' },
                              y.a.createElement(
                                  'a',
                                  {
                                      href: '#',
                                      onClick: function(e) {
                                          e.preventDefault(), s(!0)
                                      },
                                  },
                                  '+ Add Another URL'
                              )
                          )
                        : y.a.createElement(
                              'div',
                              { key: 'list' },
                              y.a.createElement(
                                  'div',
                                  { style: { float: 'right' } },
                                  y.a.createElement(
                                      'button',
                                      {
                                          className: 'no-style',
                                          onClick: function() {
                                              return s(!0)
                                          },
                                      },
                                      y.a.createElement('i', { className: 'fi flaticon-edit text-primary' })
                                  ),
                                  y.a.createElement(
                                      'button',
                                      { className: 'no-style text-danger', onClick: a },
                                      y.a.createElement('i', { className: 'fi flaticon-basket' })
                                  )
                              ),
                              y.a.createElement('a', { href: L(t, v) }, v)
                          )
                )
            }
            function U(e) {
                var t = e.actionId,
                    n = e.dismissModal,
                    r = Object(j.useValues)(N.a).user,
                    a = Object(j.useActions)(N.a),
                    o = a.setUser,
                    i = a.loadUser,
                    c = a.userUpdateRequest,
                    s = r.team.app_urls,
                    l = Object(b.useState)('https://'),
                    u = _()(l, 2),
                    p = u[0],
                    m = u[1],
                    f = Object(b.useState)(!1),
                    d = _()(f, 2),
                    v = d[0],
                    h = d[1]
                function g(e) {
                    var t = e.index,
                        n = e.value,
                        r = e.callback,
                        a =
                            void 0 === t
                                ? s.concat([n])
                                : s.map(function(e, r) {
                                      return r === t ? n : e
                                  }),
                        i = 0 === s.length && void 0 === t
                    E.a.update('api/user', { team: { app_urls: a } }).then(function(e) {
                        r(a), i || o(e), t || h(!1)
                    })
                }
                return (
                    Object(b.useEffect)(function() {
                        i()
                    }, []),
                    y.a.createElement(
                        D.a,
                        {
                            title: t
                                ? 'Where do you want to edit this action?'
                                : 'On which domain do you want to create an action?',
                            footer:
                                s.length > 0 &&
                                !v &&
                                y.a.createElement(
                                    'div',
                                    { style: { flex: 1 } },
                                    y.a.createElement(
                                        'button',
                                        {
                                            className: 'btn btn-outline-secondary',
                                            style: { flex: 1 },
                                            onClick: function() {
                                                return h(!0)
                                            },
                                        },
                                        '+ Add Another URL'
                                    )
                                ),
                            onDismiss: n,
                        },
                        0 === s.length
                            ? y.a.createElement(
                                  'div',
                                  null,
                                  y.a.createElement('input', {
                                      value: p,
                                      onChange: function(e) {
                                          return m(e.target.value)
                                      },
                                      autoFocus: !0,
                                      style: { maxWidth: 400 },
                                      type: 'url',
                                      className: 'form-control',
                                      name: 'url',
                                      placeholder: 'https://',
                                  }),
                                  y.a.createElement('br', null),
                                  y.a.createElement(
                                      'button',
                                      {
                                          onClick: function() {
                                              return g({
                                                  value: p,
                                                  callback: function() {
                                                      window.location.href = L(t, p)
                                                  },
                                              })
                                          },
                                          className: 'btn btn-success',
                                          type: 'button',
                                      },
                                      'Save URL & go'
                                  )
                              )
                            : y.a.createElement(
                                  'ul',
                                  { className: 'list-group' },
                                  s.map(function(e, n) {
                                      return y.a.createElement(T, {
                                          key: ''.concat(n, ',').concat(e),
                                          actionId: t,
                                          url: e,
                                          saveUrl: function(e, t) {
                                              return g({ index: n, value: e, callback: t })
                                          },
                                          deleteUrl: function() {
                                              return (function(e) {
                                                  var t = e.index,
                                                      n = s.filter(function(e, n) {
                                                          return n !== t
                                                      })
                                                  c({ team: { app_urls: n } })
                                              })({ index: n })
                                          },
                                      })
                                  }),
                                  v
                                      ? y.a.createElement(T, {
                                            actionId: t,
                                            url: 'https://',
                                            saveUrl: function(e, t) {
                                                return g({ value: e, callback: t })
                                            },
                                            deleteUrl: function() {
                                                return h(!1)
                                            },
                                        })
                                      : null
                              )
                    )
                )
            }
            function R(e) {
                var t = e.actionId,
                    n = e.style,
                    r = e.className,
                    a = e.children,
                    o = Object(b.useState)(!1),
                    i = _()(o, 2),
                    c = i[0],
                    s = i[1],
                    l = Object(j.useValues)(N.a).user.team.app_urls
                return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                        'a',
                        {
                            href: L(t, l && l[0]),
                            style: n,
                            className: r,
                            onClick: function(e) {
                                e.preventDefault(), s(!0)
                            },
                        },
                        a
                    ),
                    c &&
                        y.a.createElement(U, {
                            actionId: t,
                            dismissModal: function() {
                                return s(!1)
                            },
                        })
                )
            }
            function A(e, t) {
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
            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? A(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : A(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function F(e) {
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
            var $ = function(e) {
                    if (e.childNodes && e.childNodes.length) {
                        var t = ''
                        return (
                            e.childNodes.forEach(function(e) {
                                3 === e.nodeType &&
                                    e.textContent &&
                                    (t += e.textContent
                                        .trim()
                                        .replace(/[\r\n]/g, ' ')
                                        .replace(/[ ]+/g, ' ')
                                        .substring(0, 255))
                            }),
                            t
                        )
                    }
                },
                B = (function(e) {
                    m()(n, e)
                    var t = F(n)
                    function n(e) {
                        var r
                        return (
                            i()(this, n),
                            ((r = t.call(this, e)).state = {
                                step: e.step,
                                selection: Object.keys(e.step).filter(function(t) {
                                    return 'id' != t && 'isNew' != t && e.step[t]
                                }),
                            }),
                            (r.onMouseOver = r.onMouseOver.bind(u()(r))),
                            (r.onKeyDown = r.onKeyDown.bind(u()(r))),
                            (r.Option = r.Option.bind(u()(r))),
                            (r.sendStep = r.sendStep.bind(u()(r))),
                            (r.AutocaptureFields = r.AutocaptureFields.bind(u()(r))),
                            (r.TypeSwitcher = r.TypeSwitcher.bind(u()(r))),
                            (r.URLMatching = r.URLMatching.bind(u()(r))),
                            (r.stop = r.stop.bind(u()(r))),
                            (r.box = document.createElement('div')),
                            document.body.appendChild(r.box),
                            r
                        )
                    }
                    return (
                        s()(n, [
                            {
                                key: 'drawBox',
                                value: function(e) {
                                    var t = e.getBoundingClientRect()
                                    ;(this.box.style.display = 'block'),
                                        (this.box.style.position = 'absolute'),
                                        (this.box.style.top = parseInt(t.top + window.pageYOffset) + 'px'),
                                        (this.box.style.left = parseInt(t.left + window.pageXOffset) + 'px'),
                                        (this.box.style.width = parseInt(t.right - t.left) + 'px'),
                                        (this.box.style.height = parseInt(t.bottom - t.top) + 'px'),
                                        (this.box.style.background = '#007bff'),
                                        (this.box.style.opacity = '0.5'),
                                        (this.box.style.zIndex = '9999999999')
                                },
                            },
                            {
                                key: 'onMouseOver',
                                value: function(e) {
                                    var t = this,
                                        n = e.currentTarget
                                    this.drawBox(n)
                                    var r = this.props.simmer(n)
                                    r = r.replace(/(^[A-Z]+| [A-Z]+)/g, function(e) {
                                        return e.toLowerCase()
                                    })
                                    var a = n.tagName.toLowerCase(),
                                        o = ['selector']
                                    'a' == a
                                        ? (o = ['href', 'selector'])
                                        : 'button' == a
                                        ? (o = ['text', 'selector'])
                                        : n.getAttribute('name') && (o = ['name', 'selector'])
                                    var i = I(
                                        I({}, this.props.step),
                                        {},
                                        {
                                            event: '$autocapture',
                                            tag_name: a,
                                            href: n.getAttribute('href') || '',
                                            name: n.getAttribute('name') || '',
                                            text: $(n) || '',
                                            selector: r || '',
                                            url:
                                                window.location.protocol +
                                                '//' +
                                                window.location.host +
                                                window.location.pathname,
                                        }
                                    )
                                    this.setState({ element: n, selection: o }, function() {
                                        return t.sendStep(i)
                                    })
                                },
                            },
                            {
                                key: 'onKeyDown',
                                value: function(e) {
                                    27 == e.keyCode && this.stop()
                                },
                            },
                            {
                                key: 'start',
                                value: function() {
                                    var e = this
                                    document
                                        .querySelectorAll('a, button, input, select, textarea, label')
                                        .forEach(function(t) {
                                            t.addEventListener('mouseover', e.onMouseOver, { capture: !0 })
                                        }),
                                        document.addEventListener('keydown', this.onKeyDown),
                                        (document.body.style.transition = '0.7s box-shadow'),
                                        (document.body.style.boxShadow = 'inset 0 0px 30px -5px #007bff'),
                                        this.box.addEventListener('click', this.stop)
                                },
                            },
                            {
                                key: 'stop',
                                value: function() {
                                    var e = this
                                    ;(this.box.style.display = 'none'),
                                        (document.body.style.boxShadow = 'none'),
                                        document
                                            .querySelectorAll('a, button, input, select, textarea, label')
                                            .forEach(function(t) {
                                                t.removeEventListener('mouseover', e.onMouseOver, { capture: !0 })
                                            }),
                                        document.removeEventListener('keydown', this.onKeyDown)
                                },
                            },
                            {
                                key: 'sendStep',
                                value: function(e) {
                                    ;(e.selection = this.state.selection), this.props.onChange(e)
                                },
                            },
                            {
                                key: 'Option',
                                value: function(e) {
                                    var t,
                                        n,
                                        r = this,
                                        a = function(t) {
                                            ;(r.props.step[e.item] = t.target.value),
                                                t.target.value && -1 === r.state.selection.indexOf(e.item)
                                                    ? r.setState(
                                                          { selection: r.state.selection.concat([e.item]) },
                                                          function() {
                                                              return r.sendStep(r.props.step)
                                                          }
                                                      )
                                                    : !t.target.value && r.state.selection.indexOf(e.item) > -1
                                                    ? r.setState(
                                                          {
                                                              selection: r.state.selection.filter(function(t) {
                                                                  return t !== e.item
                                                              }),
                                                          },
                                                          function() {
                                                              return r.sendStep(r.props.step)
                                                          }
                                                      )
                                                    : r.sendStep(r.props.step)
                                        }
                                    try {
                                        n = document.querySelectorAll(e.selector).length
                                    } catch (e) {
                                        t = !0
                                    }
                                    return y.a.createElement(
                                        'div',
                                        {
                                            className:
                                                'form-group ' +
                                                (this.state.selection.indexOf(e.item) > -1 && 'selected'),
                                        },
                                        e.selector &&
                                            this.props.isEditor &&
                                            y.a.createElement(
                                                'small',
                                                {
                                                    className:
                                                        'form-text float-right ' + (t ? 'text-danger' : 'text-muted'),
                                                },
                                                t ? 'Invalid selector' : 'Matches '.concat(n, ' elements')
                                            ),
                                        y.a.createElement(
                                            'label',
                                            null,
                                            y.a.createElement('input', {
                                                type: 'checkbox',
                                                name: 'selection',
                                                checked: this.state.selection.indexOf(e.item) > -1,
                                                value: e.item,
                                                onChange: function(t) {
                                                    t.target.checked
                                                        ? r.state.selection.push(e.item)
                                                        : (r.state.selection = r.state.selection.filter(function(t) {
                                                              return t !== e.item
                                                          })),
                                                        r.setState({ selection: r.state.selection }, function() {
                                                            return r.sendStep(r.props.step)
                                                        })
                                                },
                                            }),
                                            ' ',
                                            e.label,
                                            ' ',
                                            e.extra_options
                                        ),
                                        'selector' == e.item
                                            ? y.a.createElement('textarea', {
                                                  className: 'form-control',
                                                  onChange: a,
                                                  value: this.props.step[e.item] || '',
                                              })
                                            : y.a.createElement('input', {
                                                  className: 'form-control',
                                                  onChange: a,
                                                  value: this.props.step[e.item] || '',
                                              })
                                    )
                                },
                            },
                            {
                                key: 'TypeSwitcher',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.step,
                                        r = t.isEditor
                                    return y.a.createElement(
                                        'div',
                                        null,
                                        y.a.createElement(
                                            'div',
                                            { className: 'btn-group' },
                                            y.a.createElement(
                                                'button',
                                                {
                                                    type: 'button',
                                                    onClick: function() {
                                                        return e.setState(
                                                            {
                                                                selection: Object.keys(n).filter(function(e) {
                                                                    return 'id' != e && 'isNew' != e && n[e]
                                                                }),
                                                            },
                                                            function() {
                                                                return e.sendStep(
                                                                    I(I({}, n), {}, { event: '$autocapture' })
                                                                )
                                                            }
                                                        )
                                                    },
                                                    className:
                                                        'btn ' +
                                                        ('$autocapture' == n.event ? 'btn-secondary' : 'btn-light'),
                                                },
                                                'Frontend element'
                                            ),
                                            y.a.createElement(
                                                'button',
                                                {
                                                    type: 'button',
                                                    onClick: function() {
                                                        return e.sendStep(I(I({}, n), {}, { event: '' }))
                                                    },
                                                    className:
                                                        'btn ' +
                                                        (void 0 !== n.event &&
                                                        '$autocapture' != n.event &&
                                                        '$pageview' != n.event
                                                            ? 'btn-secondary'
                                                            : 'btn-light'),
                                                },
                                                'Custom event'
                                            ),
                                            y.a.createElement(
                                                'button',
                                                {
                                                    type: 'button',
                                                    onClick: function() {
                                                        e.setState({ selection: ['url'] }, function() {
                                                            return e.sendStep(
                                                                I(
                                                                    I({}, n),
                                                                    {},
                                                                    {
                                                                        event: '$pageview',
                                                                        url: r
                                                                            ? window.location.protocol +
                                                                              '//' +
                                                                              window.location.host +
                                                                              window.location.pathname
                                                                            : n.url,
                                                                    }
                                                                )
                                                            )
                                                        })
                                                    },
                                                    className:
                                                        'btn ' +
                                                        ('$pageview' == n.event ? 'btn-secondary' : 'btn-light'),
                                                },
                                                'Page view'
                                            )
                                        ),
                                        null != n.event &&
                                            '$autocapture' != n.event &&
                                            '$pageview' != n.event &&
                                            y.a.createElement(
                                                'div',
                                                { style: { marginTop: '2rem' } },
                                                y.a.createElement('label', null, 'Event name'),
                                                y.a.createElement(P, {
                                                    value: n.event,
                                                    onChange: function(t) {
                                                        return e.sendStep(I(I({}, n), {}, { event: t.value }))
                                                    },
                                                })
                                            )
                                    )
                                },
                            },
                            {
                                key: 'AutocaptureFields',
                                value: function(e) {
                                    var t = e.step,
                                        n = e.isEditor,
                                        r = e.actionId
                                    return y.a.createElement(
                                        'div',
                                        null,
                                        !n &&
                                            y.a.createElement(
                                                'span',
                                                null,
                                                y.a.createElement(
                                                    R,
                                                    {
                                                        actionId: r,
                                                        style: { margin: '1rem 0' },
                                                        className: 'btn btn-sm btn-light',
                                                    },
                                                    'Select element on site ',
                                                    y.a.createElement('i', { className: 'fi flaticon-export' })
                                                ),
                                                y.a.createElement(
                                                    'a',
                                                    {
                                                        href: 'https://docs.posthog.com/#/features/actions',
                                                        target: '_blank',
                                                        style: { marginLeft: 8 },
                                                    },
                                                    'See documentation.'
                                                ),
                                                ' '
                                            ),
                                        (n || t.selector || t.href || t.text) &&
                                            y.a.createElement(
                                                'span',
                                                null,
                                                y.a.createElement(this.Option, {
                                                    item: 'href',
                                                    label: 'Link href',
                                                    selector:
                                                        this.state.element &&
                                                        'a[href="' + this.state.element.getAttribute('href') + '"]',
                                                }),
                                                y.a.createElement(this.Option, { item: 'text', label: 'Text' }),
                                                y.a.createElement(this.Option, {
                                                    item: 'selector',
                                                    label: 'Selector',
                                                    selector: t.selector,
                                                }),
                                                y.a.createElement(this.Option, {
                                                    item: 'url',
                                                    extra_options: y.a.createElement(this.URLMatching, {
                                                        step: t,
                                                        isEditor: n,
                                                    }),
                                                    label: 'URL',
                                                })
                                            )
                                    )
                                },
                            },
                            {
                                key: 'URLMatching',
                                value: function(e) {
                                    var t = this,
                                        n = e.step,
                                        r = e.isEditor
                                    return y.a.createElement(
                                        'div',
                                        { className: 'btn-group', style: { margin: r ? '4px 0 0 8px' : '0 0 0 8px' } },
                                        y.a.createElement(
                                            'button',
                                            {
                                                onClick: function() {
                                                    return t.sendStep(I(I({}, n), {}, { url_matching: 'contains' }))
                                                },
                                                type: 'button',
                                                className:
                                                    'btn btn-sm ' +
                                                    (n.url_matching && 'contains' != n.url_matching
                                                        ? 'btn-light'
                                                        : 'btn-secondary'),
                                            },
                                            'contains'
                                        ),
                                        y.a.createElement(
                                            'button',
                                            {
                                                onClick: function() {
                                                    return t.sendStep(I(I({}, n), {}, { url_matching: 'exact' }))
                                                },
                                                type: 'button',
                                                className:
                                                    'btn btn-sm ' +
                                                    ('exact' == n.url_matching ? 'btn-secondary' : 'btn-light'),
                                            },
                                            'exactly matches'
                                        )
                                    )
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.step,
                                        r = t.isEditor,
                                        a = t.actionId
                                    return y.a.createElement(
                                        'div',
                                        {
                                            className: r ? '' : 'card',
                                            style: { marginBottom: 0, background: r ? 'rgba(0,0,0,0.05)' : '' },
                                        },
                                        y.a.createElement(
                                            'div',
                                            { className: r ? '' : 'card-body' },
                                            (!r || '$autocapture' === n.event || !n.event) &&
                                                y.a.createElement(
                                                    'button',
                                                    {
                                                        style: { margin: r ? '12px 12px 0px 0px' : '-3px 0 0 0' },
                                                        type: 'button',
                                                        className: 'close pull-right',
                                                        'aria-label': 'Close',
                                                        onClick: this.props.onDelete,
                                                    },
                                                    y.a.createElement('span', { 'aria-hidden': 'true' }, '×')
                                                ),
                                            !r && y.a.createElement(this.TypeSwitcher, null),
                                            y.a.createElement(
                                                'div',
                                                { style: { marginTop: '$pageview' !== n.event || r ? 8 : 20 } },
                                                r &&
                                                    y.a.createElement(
                                                        'button',
                                                        {
                                                            type: 'button',
                                                            className: 'btn btn-sm btn-secondary',
                                                            style: { margin: '10px 0px 10px 12px' },
                                                            onClick: function() {
                                                                return e.start()
                                                            },
                                                        },
                                                        'Inspect element'
                                                    ),
                                                '$autocapture' === n.event &&
                                                    y.a.createElement(this.AutocaptureFields, {
                                                        step: n,
                                                        isEditor: r,
                                                        actionId: a,
                                                    }),
                                                '$pageview' === n.event &&
                                                    y.a.createElement(
                                                        'div',
                                                        null,
                                                        y.a.createElement(this.Option, {
                                                            item: 'url',
                                                            extra_options: y.a.createElement(this.URLMatching, {
                                                                step: n,
                                                                isEditor: r,
                                                            }),
                                                            label: 'URL',
                                                        }),
                                                        (!n.url_matching || 'contains' == n.url_matching) &&
                                                            y.a.createElement(
                                                                'small',
                                                                { style: { display: 'block', marginTop: -12 } },
                                                                "Use '%' for wildcard, for example: /user/%/edit"
                                                            )
                                                    )
                                            )
                                        )
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(b.Component)
            function M(e, t) {
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
            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? M(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : M(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
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
                        r = h()(e)
                    if (t) {
                        var a = h()(this).constructor
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments)
                    return d()(this, n)
                }
            }
            B.propTypes = { isEditor: w.a.bool, step: w.a.object, simmer: w.a.func }
            var K = (function(e) {
                m()(n, e)
                var t = V(n)
                function n(e) {
                    var r
                    return (
                        i()(this, n),
                        ((r = t.call(this, e)).state = {
                            action: { name: '', steps: [] },
                            edited: !1,
                            focus: !0,
                            slackEnabled: e.user && e.user.team && e.user.team.slack_incoming_webhook,
                        }),
                        (r.params =
                            '?include_count=1' + (e.temporaryToken ? '&temporary_token=' + e.temporaryToken : '')),
                        r.fetchAction.call(u()(r)),
                        (r.onSubmit = r.onSubmit.bind(u()(r))),
                        r
                    )
                }
                return (
                    s()(n, [
                        {
                            key: 'fetchAction',
                            value: function() {
                                var e = this
                                if (this.props.actionId)
                                    return (
                                        (this.state.focus = !1),
                                        E.a
                                            .get(
                                                this.props.apiURL +
                                                    'api/action/' +
                                                    this.props.actionId +
                                                    '/' +
                                                    this.params
                                            )
                                            .then(function(t) {
                                                return e.setState({ action: t })
                                            })
                                    )
                                this.state.action = { name: '', steps: [{ isNew: Object(g.p)() }] }
                            },
                        },
                        {
                            key: 'onSubmit',
                            value: function(e, t) {
                                var n = this
                                if (e.target.form.checkValidity() && this.state.edited) {
                                    var r = !this.state.action.id,
                                        a = function(e) {
                                            n.setState({
                                                error: !1,
                                                saved: !0,
                                                action: q(q({}, n.state.action), {}, { id: e.id, count: e.count }),
                                                edited: !1,
                                            }),
                                                n.props.onSave && n.props.onSave(e, r, t),
                                                Object(k.c)('Action Saved', { autoClose: 3e3, hideProgressBar: !0 })
                                        },
                                        o = function(e) {
                                            'action-exists' == e.detail &&
                                                n.setState({ saved: !1, error: 'action-exists', error_id: e.id })
                                        },
                                        i = this.state.action.steps.map(function(e) {
                                            if (
                                                ('$pageview' == e.event && (e.selection = ['url', 'url_matching']),
                                                '$pageview' != e.event &&
                                                    '$autocapture' != e.event &&
                                                    (e.selection = []),
                                                !e.selection)
                                            )
                                                return e
                                            var t = {}
                                            return (
                                                Object.keys(e).map(function(n) {
                                                    t[n] =
                                                        'id' == n || 'event' == n || e.selection.indexOf(n) > -1
                                                            ? e[n]
                                                            : null
                                                }),
                                                t
                                            )
                                        })
                                    if (this.state.action.id)
                                        return E.a
                                            .update(
                                                this.props.apiURL +
                                                    'api/action/' +
                                                    this.state.action.id +
                                                    '/' +
                                                    this.params,
                                                {
                                                    name: this.state.action.name,
                                                    post_to_slack: this.state.action.post_to_slack,
                                                    steps: i,
                                                }
                                            )
                                            .then(a)
                                            .catch(o)
                                    E.a
                                        .create(this.props.apiURL + 'api/action/' + this.params, {
                                            name: this.state.action.name,
                                            post_to_slack: this.state.action.post_to_slack,
                                            steps: i,
                                        })
                                        .then(a)
                                        .catch(o)
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.state.action,
                                    n = this.props,
                                    r = n.isEditor,
                                    a = n.simmer,
                                    o = y.a.createElement(
                                        'button',
                                        {
                                            type: 'button',
                                            className: 'btn btn-outline-success btn-sm',
                                            onClick: function() {
                                                t.steps.push({ isNew: Object(g.p)() }), e.setState({ action: t })
                                            },
                                        },
                                        'Add another match group'
                                    )
                                return y.a.createElement(
                                    'div',
                                    { className: r ? '' : 'card', style: { marginTop: r ? 8 : '' } },
                                    y.a.createElement(
                                        'form',
                                        {
                                            className: r ? '' : 'card-body',
                                            onSubmit: function(e) {
                                                return e.preventDefault()
                                            },
                                        },
                                        y.a.createElement('input', {
                                            autoFocus: this.state.focus,
                                            required: !0,
                                            className: 'form-control',
                                            placeholder: 'For example: user signed up',
                                            value: t.name,
                                            onChange: function(n) {
                                                return e.setState({
                                                    action: q(q({}, t), {}, { name: n.target.value }),
                                                    edited: !!n.target.value,
                                                })
                                            },
                                        }),
                                        t.count > -1 &&
                                            y.a.createElement(
                                                'div',
                                                null,
                                                y.a.createElement(
                                                    'small',
                                                    { className: 'text-muted' },
                                                    'Matches ',
                                                    t.count,
                                                    ' events'
                                                )
                                            ),
                                        !r && y.a.createElement('br', null),
                                        t.steps.map(function(n, o) {
                                            return y.a.createElement(
                                                b.Fragment,
                                                { key: o },
                                                o > 0
                                                    ? y.a.createElement(
                                                          'div',
                                                          {
                                                              style: {
                                                                  textAlign: 'center',
                                                                  fontSize: 13,
                                                                  letterSpacing: 1,
                                                                  opacity: 0.7,
                                                                  margin: 8,
                                                              },
                                                          },
                                                          'OR'
                                                      )
                                                    : null,
                                                y.a.createElement(B, {
                                                    key: n.id || n.isNew,
                                                    step: n,
                                                    isEditor: r,
                                                    actionId: t.id,
                                                    simmer: a,
                                                    onDelete: function() {
                                                        ;(t.steps = t.steps.filter(function(e) {
                                                            return e.id != n.id
                                                        })),
                                                            e.setState({ action: t })
                                                    },
                                                    onChange: function(r) {
                                                        ;(t.steps = t.steps.map(function(e) {
                                                            return (n.id && e.id == n.id) ||
                                                                (n.isNew && e.isNew === n.isNew)
                                                                ? q({ id: n.id, isNew: n.isNew }, r)
                                                                : e
                                                        })),
                                                            e.setState({ action: t, edited: !0 })
                                                    },
                                                })
                                            )
                                        }),
                                        r
                                            ? y.a.createElement('br', null)
                                            : y.a.createElement(
                                                  'div',
                                                  { style: { marginTop: 20, marginBottom: 15 } },
                                                  y.a.createElement(
                                                      'label',
                                                      {
                                                          className: this.state.slackEnabled ? '' : 'disabled',
                                                          style: { marginRight: 5 },
                                                      },
                                                      y.a.createElement('input', {
                                                          type: 'checkbox',
                                                          onChange: function(n) {
                                                              e.setState({
                                                                  action: q(
                                                                      q({}, t),
                                                                      {},
                                                                      { post_to_slack: n.target.checked }
                                                                  ),
                                                                  edited: !0,
                                                              })
                                                          },
                                                          checked: !!t.post_to_slack,
                                                          disabled: !this.state.slackEnabled,
                                                      }),
                                                      ' Post to Slack when this action is triggered.'
                                                  ),
                                                  y.a.createElement(
                                                      x.a,
                                                      { to: '/setup#slack' },
                                                      y.a.createElement('small', null, 'Configure')
                                                  )
                                              ),
                                        this.state.error &&
                                            y.a.createElement(
                                                'p',
                                                { className: 'text-danger' },
                                                'Action with this name already exists.',
                                                ' ',
                                                y.a.createElement(
                                                    'a',
                                                    { href: this.props.apiURL + 'action/' + this.state.error_id },
                                                    'Click here to edit.'
                                                )
                                            ),
                                        r ? y.a.createElement('div', { style: { marginBottom: 20 } }, o) : null,
                                        y.a.createElement(
                                            'div',
                                            { className: r ? 'btn-group save-buttons' : '' },
                                            r ? null : o,
                                            y.a.createElement(
                                                'button',
                                                {
                                                    type: 'submit',
                                                    disabled: !this.state.edited,
                                                    onClick: function(t) {
                                                        return e.onSubmit(t)
                                                    },
                                                    className: this.state.edited
                                                        ? 'btn-success btn btn-sm float-right'
                                                        : 'btn-secondary btn btn-sm float-right',
                                                },
                                                'Save action'
                                            ),
                                            this.props.isEditor &&
                                                this.props.showNewActionButton &&
                                                y.a.createElement(
                                                    'button',
                                                    {
                                                        type: 'submit',
                                                        onClick: function(t) {
                                                            return e.onSubmit(t, !0)
                                                        },
                                                        className: 'btn btn-secondary btn-sm float-right',
                                                    },
                                                    'Save & new action'
                                                )
                                        )
                                    )
                                )
                            },
                        },
                    ]),
                    n
                )
            })(b.Component)
            K.propTypes = { isEditor: w.a.bool, simmer: w.a.func, onSave: w.a.func }
        },
        332: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return c
            })
            var r = n(96),
                a = n.n(r),
                o = n(0),
                i = n.n(o)
            function c(e) {
                var t = e.value
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    'object' === a()(t) ? JSON.stringify(t) : t && t.replace(/(^\w+:|^)\/\//, '')
                )
            }
        },
        333: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return b
            })
            var r = n(29),
                a = n.n(r),
                o = n(53),
                i = n.n(o),
                c = n(311),
                s = n.n(c),
                l = n(6),
                u = n.n(l),
                p = n(9),
                m = n(127),
                f = n(28),
                d = n(16)
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
            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? v(Object(n), !0).forEach(function(t) {
                              u()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : v(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            var b = Object(p.kea)({
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
                                return f.router.selectors.location(e).pathname
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
                                    return h(h({}, e), {}, u()({}, n, r))
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
                            return [f.router.values.location.pathname, t.propertiesForUrl]
                        },
                        updateProperty: function() {
                            return [f.router.values.location.pathname, t.propertiesForUrl]
                        },
                    }
                },
                urlToAction: function(e) {
                    var t = e.actions,
                        n = e.values
                    return {
                        '*': function(e, r) {
                            try {
                                if (f.router.values.location.pathname !== n.initialPathname) return
                            } catch (e) {
                                return
                            }
                            Object(m.k)(r.properties || {}, n.properties) || t.setProperties(r.properties || {})
                        },
                    }
                },
                listeners: function(e) {
                    var t,
                        n,
                        r = e.actions,
                        o = e.values,
                        c = e.props
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
                            ((n = i()(
                                a.a.mark(function e() {
                                    var t, n
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ;(t = o.events),
                                                        (n = o.orderBy),
                                                        r.fetchEvents(
                                                            u()(
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
                                var e = i()(
                                    a.a.mark(function e(t, n) {
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!(o.events.length > 0)) {
                                                            e.next = 3
                                                            break
                                                        }
                                                        return (e.next = 3), n(500)
                                                    case 3:
                                                        null === o.isLoading && r.setDelayedLoading()
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
                                var e = i()(
                                    a.a.mark(function e(t, n) {
                                        var i, s, l
                                        return a.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (i = t.nextParams),
                                                            clearTimeout(o.pollTimeout),
                                                            (s = Object(m.o)(
                                                                h(
                                                                    h(
                                                                        h(
                                                                            { properties: o.properties },
                                                                            c.fixedFilters || {}
                                                                        ),
                                                                        i || {}
                                                                    ),
                                                                    {},
                                                                    { orderBy: [o.orderBy] }
                                                                )
                                                            )),
                                                            (e.next = 5),
                                                            d.a.get(''.concat(c.apiUrl || 'api/event/', '?').concat(s))
                                                        )
                                                    case 5:
                                                        ;(l = e.sent),
                                                            n(),
                                                            r.fetchEventsSuccess(l.results, l.next, !!i),
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
                            ((t = i()(
                                a.a.mark(function e(t, n) {
                                    var i, s, l
                                    return a.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ('-timestamp' === o.orderBy) {
                                                        e.next = 2
                                                        break
                                                    }
                                                    return e.abrupt('return')
                                                case 2:
                                                    return (
                                                        (i = h(
                                                            h({ properties: o.properties }, c.fixedFilters || {}),
                                                            {},
                                                            { orderBy: [o.orderBy] }
                                                        )),
                                                        (s = o.events[0]) &&
                                                            (i.after = s.timestamp || s.event.timestamp),
                                                        (e.next = 7),
                                                        d.a.get(
                                                            ''
                                                                .concat(c.apiUrl || 'api/event/', '?')
                                                                .concat(Object(m.o)(i))
                                                        )
                                                    )
                                                case 7:
                                                    ;(l = e.sent),
                                                        n(),
                                                        c.live
                                                            ? r.prependNewEvents(l.results)
                                                            : r.pollEventsSuccess(l.results),
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
                return d
            })
            var r = n(6),
                a = n.n(r),
                o = n(0),
                i = n.n(o),
                c = n(28),
                s = n(1),
                l = n.n(s),
                u = n(332),
                p = n(27)
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
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? m(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : m(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function d(e) {
                var t = e.property,
                    n = e.value,
                    r = e.filters,
                    o = e.onClick,
                    s = Object(c.combineUrl)(
                        window.location.pathname,
                        f(f({}, r), {}, { properties: f(f({}, r.properties), {}, a()({}, t, n)) })
                    ).url
                return i.a.createElement(
                    p.a,
                    {
                        to: s,
                        onClick: function(e) {
                            o && o(t, n)
                        },
                    },
                    i.a.createElement(u.a, { value: n })
                )
            }
            d.propTypes = {
                property: l.a.string.isRequired,
                value: l.a.string,
                filters: l.a.object.isRequired,
                onClick: l.a.func,
            }
        },
        354: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return E
            })
            var r = n(6),
                a = n.n(r),
                o = n(12),
                i = n.n(o),
                c = n(0),
                s = n.n(c),
                l = n(344),
                u = n(318),
                p = n(311),
                m = n.n(p)
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
            function d(e) {
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
            function v(e) {
                return Array(e)
                    .fill('')
                    .map(function(e, t) {
                        return s.a.createElement('span', { key: t }, '    ')
                    })
            }
            function h(e) {
                var t = e.event,
                    n = m()(t.elements).reverse()
                return s.a.createElement(
                    'div',
                    null,
                    n.map(function(e, t) {
                        return s.a.createElement(
                            'pre',
                            {
                                className: 'code',
                                style: d(
                                    { margin: 0, padding: 0, borderRadius: 0 },
                                    t === n.length - 1 ? { backgroundColor: 'var(--blue)' } : {}
                                ),
                            },
                            v(t),
                            '<',
                            e.tag_name,
                            e.attr_id && ' id="' + e.attr_id + '"',
                            Object.entries(e.attributes).map(function(e) {
                                var t = i()(e, 2),
                                    n = t[0],
                                    r = t[1]
                                return s.a.createElement('span', null, ' ', n.replace('attr__', ''), '="', r, '"')
                            }),
                            '>',
                            e.text,
                            t === n.length - 1 && s.a.createElement('span', null, '</', e.tag_name, '>')
                        )
                    }),
                    m()(n)
                        .reverse()
                        .slice(1)
                        .map(function(e, t) {
                            return s.a.createElement(
                                'pre',
                                { className: 'code', key: t, style: { margin: 0, padding: 0, borderRadius: 0 } },
                                v(n.length - t - 2),
                                '</',
                                e.tag_name,
                                '>'
                            )
                        })
                )
            }
            function b(e, t) {
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
                        ? b(Object(n), !0).forEach(function(t) {
                              a()(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : b(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                }
                return e
            }
            function E(e) {
                var t = e.event,
                    n = Object(c.useState)('properties'),
                    r = i()(n, 2),
                    a = r[0],
                    o = r[1]
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
                                        return o('properties')
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
                                            return o('elements')
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
                                  s.a.createElement(l.a, {
                                      properties: y(
                                          { Timestamp: Object(u.default)(t.timestamp).toISOString() },
                                          t.properties
                                      ),
                                  })
                              )
                            : s.a.createElement(h, { event: t })
                    )
                )
            }
        },
        378: function(e, t, n) {
            'use strict'
            n.d(t, 'a', function() {
                return y
            })
            n(129)
            var r = n(75),
                a = n(0),
                o = n.n(a),
                i = n(9),
                c = n(318),
                s = n(127),
                l = n(323),
                u = n(354),
                p = n(350),
                m = n(332),
                f = n(27)
            function d(e) {
                var t = e.event,
                    n = e.highlightEvents,
                    r = e.selectedEvent,
                    a = e.properties,
                    i = e.search,
                    s = e.setSelectedEvent,
                    l = e.filtersEnabled,
                    u = e.showLinkToPerson
                return o.a.createElement(
                    'tr',
                    {
                        className: 'cursor-pointer event-row ' + (n[t.id] && 'event-row-new'),
                        onClick: function() {
                            return s(r !== t.id && t.id)
                        },
                    },
                    o.a.createElement(
                        'td',
                        null,
                        (function(e) {
                            return 'click' === e.properties.$event_type
                                ? 'clicked '
                                : 'change' === e.properties.$event_type
                                ? 'typed something into '
                                : 'submit' === e.properties.$event_type
                                ? 'submitted '
                                : e.event
                        })(t),
                        t.elements.length > 0 &&
                            o.a.createElement(
                                'pre',
                                { style: { marginBottom: 0, display: 'inline' } },
                                '<',
                                t.elements[0].tag_name,
                                '>'
                            ),
                        t.elements.length > 0 && t.elements[0].text && ' with text "' + t.elements[0].text + '"'
                    ),
                    o.a.createElement(
                        'td',
                        null,
                        u
                            ? o.a.createElement(
                                  f.a,
                                  {
                                      to: '/person/'.concat(encodeURIComponent(t.distinct_id)).concat(i),
                                      className: 'ph-no-capture',
                                  },
                                  t.person
                              )
                            : t.person
                    ),
                    ['$current_url', '$lib'].map(function(e) {
                        var n = e,
                            r = t.properties[n]
                        return (
                            '$current_url' !== n || r || ((n = '$screen'), (r = t.properties[n])),
                            o.a.createElement(
                                'td',
                                { key: n, title: r },
                                l
                                    ? o.a.createElement(p.a, {
                                          property: n,
                                          value: t.properties[n],
                                          filters: { properties: a },
                                      })
                                    : o.a.createElement(m.a, { value: t.properties[n] })
                            )
                        )
                    }),
                    o.a.createElement('td', null, Object(c.default)(t.timestamp).fromNow())
                )
            }
            function v() {
                return o.a.createElement(
                    'tr',
                    null,
                    o.a.createElement(
                        'td',
                        { colSpan: 4 },
                        "You don't have any items here. If you haven't integrated PostHog yet,",
                        ' ',
                        o.a.createElement(f.a, { to: '/setup' }, 'click here to set PostHog up on your app')
                    )
                )
            }
            var h = n(333),
                b = n(28)
            function y(e) {
                var t = e.fixedFilters,
                    n = e.filtersEnabled,
                    a = void 0 === n || n,
                    p = Object(h.a)({ fixedFilters: t }),
                    m = Object(i.useValues)(p),
                    f = m.properties,
                    y = m.events,
                    E = m.isLoading,
                    g = m.hasNext,
                    O = m.isLoadingNext,
                    w = m.selectedEvent,
                    x = m.newEvents,
                    k = m.highlightEvents,
                    S = Object(i.useActions)(p),
                    j = S.updateProperty,
                    N = S.setSelectedEvent,
                    P = S.fetchNextEvents,
                    C = S.flipSort,
                    _ = S.prependNewEvents,
                    D = Object(i.useValues)(b.router).location.search,
                    L = !(null == t ? void 0 : t.person_id)
                return o.a.createElement(
                    'div',
                    { className: 'events' },
                    a ? o.a.createElement(l.a, { pageKey: 'EventsTable' }) : null,
                    o.a.createElement(
                        'table',
                        { className: 'table', style: { position: 'relative' } },
                        o.a.createElement(
                            'thead',
                            null,
                            o.a.createElement(
                                'tr',
                                null,
                                o.a.createElement('th', null, 'Event'),
                                o.a.createElement('th', null, 'Person'),
                                o.a.createElement('th', null, 'Path / Screen'),
                                o.a.createElement('th', null, 'Source'),
                                o.a.createElement(
                                    'th',
                                    { onClick: C },
                                    'When ',
                                    o.a.createElement('i', { className: 'fi flaticon-sort' })
                                )
                            )
                        ),
                        o.a.createElement(
                            'tbody',
                            null,
                            E && o.a.createElement(s.e, { colSpan: 5, asOverlay: y.length > 0 }),
                            o.a.createElement(
                                'tr',
                                {
                                    className: 'event-new-events ' + (x.length > 0 ? 'show' : 'hide'),
                                    onClick: function() {
                                        return _(x)
                                    },
                                },
                                o.a.createElement(
                                    'td',
                                    { colSpan: '5' },
                                    o.a.createElement(
                                        'div',
                                        null,
                                        'There are ',
                                        x.length,
                                        ' new events. Click here to load them.'
                                    )
                                )
                            ),
                            y && 0 !== y.length ? null : o.a.createElement(v, null),
                            y &&
                                y.map(function(e, t) {
                                    return o.a.createElement(
                                        o.a.Fragment,
                                        { key: e.id },
                                        t > 0 &&
                                            !Object(c.default)(e.timestamp).isSame(y[t - 1].timestamp, 'day') &&
                                            o.a.createElement(
                                                'tr',
                                                null,
                                                o.a.createElement(
                                                    'td',
                                                    { colSpan: '5', className: 'event-day-separator' },
                                                    Object(c.default)(e.timestamp).format('LL')
                                                )
                                            ),
                                        o.a.createElement(d, {
                                            event: e,
                                            search: D,
                                            highlightEvents: k,
                                            selectedEvent: w,
                                            properties: f,
                                            setSelectedEvent: N,
                                            setFilter: j,
                                            filtersEnabled: a,
                                            showLinkToPerson: L,
                                        }),
                                        w === e.id &&
                                            o.a.createElement(
                                                'tr',
                                                null,
                                                o.a.createElement(
                                                    'td',
                                                    { colSpan: '5' },
                                                    o.a.createElement(u.a, { event: e })
                                                )
                                            )
                                    )
                                })
                        )
                    ),
                    o.a.createElement(
                        'div',
                        {
                            style: {
                                visibility: g || O ? 'visible' : 'hidden',
                                margin: '2rem auto 5rem',
                                textAlign: 'center',
                            },
                        },
                        o.a.createElement(
                            'button',
                            { className: 'btn btn-primary', onClick: P },
                            O ? o.a.createElement(r.a, null) : 'Load more events'
                        )
                    ),
                    o.a.createElement('div', { style: { marginTop: '5rem' } })
                )
            }
        },
        558: function(e, t, n) {
            'use strict'
            n.r(t),
                n.d(t, 'Action', function() {
                    return p
                })
            var r = n(0),
                a = n.n(r),
                o = n(378),
                i = n(191),
                c = n(9),
                s = n(28),
                l = n(26),
                u = n(333)
            function p(e) {
                var t = e.id,
                    n = { action_id: t },
                    r = Object(c.useActions)(s.router).push,
                    p = Object(c.useValues)(l.a).user,
                    m = Object(c.useActions)(Object(u.a)({ fixedFilters: n })).fetchEvents
                return a.a.createElement(
                    'div',
                    null,
                    a.a.createElement('h1', null, t ? 'Edit action' : 'New action'),
                    a.a.createElement(i.a, {
                        apiURL: '',
                        actionId: t,
                        user: p,
                        onSave: function(e) {
                            t || r('/action/'.concat(e.id)), m()
                        },
                    }),
                    a.a.createElement('br', null),
                    a.a.createElement('br', null),
                    a.a.createElement('h2', null, 'Events'),
                    a.a.createElement(o.a, { fixedFilters: n, filtersEnabled: !1 })
                )
            }
        },
    },
])
//# sourceMappingURL=action.js.map
