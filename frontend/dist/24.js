;(window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
        313: function(n, t, r) {
            'use strict'
            r.d(t, 'b', function() {
                return c
            }),
                r.d(t, 'd', function() {
                    return i
                }),
                r.d(t, 'c', function() {
                    return f
                }),
                r.d(t, 'a', function() {
                    return e
                }),
                r.d(t, 'e', function() {
                    return o
                }),
                r.d(t, 'f', function() {
                    return l
                }),
                r.d(t, 'g', function() {
                    return h
                }),
                r.d(t, 'h', function() {
                    return y
                }),
                r.d(t, 'i', function() {
                    return v
                }),
                r.d(t, 'j', function() {
                    return T
                }),
                r.d(t, 'w', function() {
                    return S
                }),
                r.d(t, 'x', function() {
                    return q
                }),
                r.d(t, 'y', function() {
                    return O
                }),
                r.d(t, 'k', function() {
                    return C
                }),
                r.d(t, 'l', function() {
                    return E
                }),
                r.d(t, 'm', function() {
                    return P
                }),
                r.d(t, 'n', function() {
                    return I
                }),
                r.d(t, 'o', function() {
                    return J
                }),
                r.d(t, 'p', function() {
                    return s
                }),
                r.d(t, 'q', function() {
                    return V
                }),
                r.d(t, 'r', function() {
                    return z
                }),
                r.d(t, 's', function() {
                    return x
                }),
                r.d(t, 't', function() {
                    return Z
                }),
                r.d(t, 'u', function() {
                    return B
                }),
                r.d(t, 'v', function() {
                    return D
                }),
                r.d(t, 'B', function() {
                    return N
                }),
                r.d(t, 'z', function() {
                    return j
                }),
                r.d(t, 'A', function() {
                    return m
                }),
                r.d(t, 'C', function() {
                    return F
                }),
                r.d(t, 'D', function() {
                    return g
                }),
                r.d(t, 'E', function() {
                    return Q
                })
            var e = function(n, t) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                o = function(n) {
                    var t
                    return (
                        1 === n.length &&
                            ((t = n),
                            (n = function(n, r) {
                                return e(t(n), r)
                            })),
                        {
                            left: function(t, r, e, o) {
                                for (null == e && (e = 0), null == o && (o = t.length); e < o; ) {
                                    var u = (e + o) >>> 1
                                    n(t[u], r) < 0 ? (e = u + 1) : (o = u)
                                }
                                return e
                            },
                            right: function(t, r, e, o) {
                                for (null == e && (e = 0), null == o && (o = t.length); e < o; ) {
                                    var u = (e + o) >>> 1
                                    n(t[u], r) > 0 ? (o = u) : (e = u + 1)
                                }
                                return e
                            },
                        }
                    )
                }
            var u = o(e),
                i = u.right,
                f = u.left,
                c = i,
                s = function(n, t) {
                    null == t && (t = a)
                    for (var r = 0, e = n.length - 1, o = n[0], u = new Array(e < 0 ? 0 : e); r < e; )
                        u[r] = t(o, (o = n[++r]))
                    return u
                }
            function a(n, t) {
                return [n, t]
            }
            var l = function(n, t, r) {
                    var e,
                        o,
                        u,
                        i,
                        f = n.length,
                        c = t.length,
                        s = new Array(f * c)
                    for (null == r && (r = a), e = u = 0; e < f; ++e)
                        for (i = n[e], o = 0; o < c; ++o, ++u) s[u] = r(i, t[o])
                    return s
                },
                h = function(n, t) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                d = function(n) {
                    return null === n ? NaN : +n
                },
                g = function(n, t) {
                    var r,
                        e,
                        o = n.length,
                        u = 0,
                        i = -1,
                        f = 0,
                        c = 0
                    if (null == t) for (; ++i < o; ) isNaN((r = d(n[i]))) || (c += (e = r - f) * (r - (f += e / ++u)))
                    else for (; ++i < o; ) isNaN((r = d(t(n[i], i, n)))) || (c += (e = r - f) * (r - (f += e / ++u)))
                    if (u > 1) return c / (u - 1)
                },
                y = function(n, t) {
                    var r = g(n, t)
                    return r ? Math.sqrt(r) : r
                },
                v = function(n, t) {
                    var r,
                        e,
                        o,
                        u = n.length,
                        i = -1
                    if (null == t) {
                        for (; ++i < u; )
                            if (null != (r = n[i]) && r >= r)
                                for (e = o = r; ++i < u; ) null != (r = n[i]) && (e > r && (e = r), o < r && (o = r))
                    } else
                        for (; ++i < u; )
                            if (null != (r = t(n[i], i, n)) && r >= r)
                                for (e = o = r; ++i < u; )
                                    null != (r = t(n[i], i, n)) && (e > r && (e = r), o < r && (o = r))
                    return [e, o]
                },
                p = Array.prototype,
                M = p.slice,
                _ = p.map,
                k = function(n) {
                    return function() {
                        return n
                    }
                },
                w = function(n) {
                    return n
                },
                x = function(n, t, r) {
                    ;(n = +n), (t = +t), (r = (o = arguments.length) < 2 ? ((t = n), (n = 0), 1) : o < 3 ? 1 : +r)
                    for (var e = -1, o = 0 | Math.max(0, Math.ceil((t - n) / r)), u = new Array(o); ++e < o; )
                        u[e] = n + e * r
                    return u
                },
                L = Math.sqrt(50),
                b = Math.sqrt(10),
                A = Math.sqrt(2),
                N = function(n, t, r) {
                    var e,
                        o,
                        u,
                        i,
                        f = -1
                    if (((r = +r), (n = +n) === (t = +t) && r > 0)) return [n]
                    if (((e = t < n) && ((o = n), (n = t), (t = o)), 0 === (i = j(n, t, r)) || !isFinite(i))) return []
                    if (i > 0)
                        for (
                            n = Math.ceil(n / i), t = Math.floor(t / i), u = new Array((o = Math.ceil(t - n + 1)));
                            ++f < o;

                        )
                            u[f] = (n + f) * i
                    else
                        for (
                            n = Math.floor(n * i), t = Math.ceil(t * i), u = new Array((o = Math.ceil(n - t + 1)));
                            ++f < o;

                        )
                            u[f] = (n - f) / i
                    return e && u.reverse(), u
                }
            function j(n, t, r) {
                var e = (t - n) / Math.max(0, r),
                    o = Math.floor(Math.log(e) / Math.LN10),
                    u = e / Math.pow(10, o)
                return o >= 0
                    ? (u >= L ? 10 : u >= b ? 5 : u >= A ? 2 : 1) * Math.pow(10, o)
                    : -Math.pow(10, -o) / (u >= L ? 10 : u >= b ? 5 : u >= A ? 2 : 1)
            }
            function m(n, t, r) {
                var e = Math.abs(t - n) / Math.max(0, r),
                    o = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)),
                    u = e / o
                return u >= L ? (o *= 10) : u >= b ? (o *= 5) : u >= A && (o *= 2), t < n ? -o : o
            }
            var O = function(n) {
                    return Math.ceil(Math.log(n.length) / Math.LN2) + 1
                },
                T = function() {
                    var n = w,
                        t = v,
                        r = O
                    function e(e) {
                        var o,
                            u,
                            i = e.length,
                            f = new Array(i)
                        for (o = 0; o < i; ++o) f[o] = n(e[o], o, e)
                        var s = t(f),
                            a = s[0],
                            l = s[1],
                            h = r(f, a, l)
                        Array.isArray(h) || ((h = m(a, l, h)), (h = x(Math.ceil(a / h) * h, l, h)))
                        for (var d = h.length; h[0] <= a; ) h.shift(), --d
                        for (; h[d - 1] > l; ) h.pop(), --d
                        var g,
                            y = new Array(d + 1)
                        for (o = 0; o <= d; ++o) ((g = y[o] = []).x0 = o > 0 ? h[o - 1] : a), (g.x1 = o < d ? h[o] : l)
                        for (o = 0; o < i; ++o) a <= (u = f[o]) && u <= l && y[c(h, u, 0, d)].push(e[o])
                        return y
                    }
                    return (
                        (e.value = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : k(t)), e) : n
                        }),
                        (e.domain = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : k([n[0], n[1]])), e) : t
                        }),
                        (e.thresholds = function(n) {
                            return arguments.length
                                ? ((r = 'function' == typeof n ? n : Array.isArray(n) ? k(M.call(n)) : k(n)), e)
                                : r
                        }),
                        e
                    )
                },
                z = function(n, t, r) {
                    if ((null == r && (r = d), (e = n.length))) {
                        if ((t = +t) <= 0 || e < 2) return +r(n[0], 0, n)
                        if (t >= 1) return +r(n[e - 1], e - 1, n)
                        var e,
                            o = (e - 1) * t,
                            u = Math.floor(o),
                            i = +r(n[u], u, n)
                        return i + (+r(n[u + 1], u + 1, n) - i) * (o - u)
                    }
                },
                S = function(n, t, r) {
                    return (
                        (n = _.call(n, d).sort(e)),
                        Math.ceil((r - t) / (2 * (z(n, 0.75) - z(n, 0.25)) * Math.pow(n.length, -1 / 3)))
                    )
                },
                q = function(n, t, r) {
                    return Math.ceil((r - t) / (3.5 * y(n) * Math.pow(n.length, -1 / 3)))
                },
                C = function(n, t) {
                    var r,
                        e,
                        o = n.length,
                        u = -1
                    if (null == t) {
                        for (; ++u < o; )
                            if (null != (r = n[u]) && r >= r)
                                for (e = r; ++u < o; ) null != (r = n[u]) && r > e && (e = r)
                    } else
                        for (; ++u < o; )
                            if (null != (r = t(n[u], u, n)) && r >= r)
                                for (e = r; ++u < o; ) null != (r = t(n[u], u, n)) && r > e && (e = r)
                    return e
                },
                E = function(n, t) {
                    var r,
                        e = n.length,
                        o = e,
                        u = -1,
                        i = 0
                    if (null == t) for (; ++u < e; ) isNaN((r = d(n[u]))) ? --o : (i += r)
                    else for (; ++u < e; ) isNaN((r = d(t(n[u], u, n)))) ? --o : (i += r)
                    if (o) return i / o
                },
                P = function(n, t) {
                    var r,
                        o = n.length,
                        u = -1,
                        i = []
                    if (null == t) for (; ++u < o; ) isNaN((r = d(n[u]))) || i.push(r)
                    else for (; ++u < o; ) isNaN((r = d(t(n[u], u, n)))) || i.push(r)
                    return z(i.sort(e), 0.5)
                },
                I = function(n) {
                    for (var t, r, e, o = n.length, u = -1, i = 0; ++u < o; ) i += n[u].length
                    for (r = new Array(i); --o >= 0; ) for (t = (e = n[o]).length; --t >= 0; ) r[--i] = e[t]
                    return r
                },
                J = function(n, t) {
                    var r,
                        e,
                        o = n.length,
                        u = -1
                    if (null == t) {
                        for (; ++u < o; )
                            if (null != (r = n[u]) && r >= r)
                                for (e = r; ++u < o; ) null != (r = n[u]) && e > r && (e = r)
                    } else
                        for (; ++u < o; )
                            if (null != (r = t(n[u], u, n)) && r >= r)
                                for (e = r; ++u < o; ) null != (r = t(n[u], u, n)) && e > r && (e = r)
                    return e
                },
                V = function(n, t) {
                    for (var r = t.length, e = new Array(r); r--; ) e[r] = n[t[r]]
                    return e
                },
                Z = function(n, t) {
                    if ((r = n.length)) {
                        var r,
                            o,
                            u = 0,
                            i = 0,
                            f = n[i]
                        for (null == t && (t = e); ++u < r; )
                            (t((o = n[u]), f) < 0 || 0 !== t(f, f)) && ((f = o), (i = u))
                        return 0 === t(f, f) ? i : void 0
                    }
                },
                B = function(n, t, r) {
                    for (var e, o, u = (null == r ? n.length : r) - (t = null == t ? 0 : +t); u; )
                        (o = (Math.random() * u--) | 0), (e = n[u + t]), (n[u + t] = n[o + t]), (n[o + t] = e)
                    return n
                },
                D = function(n, t) {
                    var r,
                        e = n.length,
                        o = -1,
                        u = 0
                    if (null == t) for (; ++o < e; ) (r = +n[o]) && (u += r)
                    else for (; ++o < e; ) (r = +t(n[o], o, n)) && (u += r)
                    return u
                },
                F = function(n) {
                    if (!(o = n.length)) return []
                    for (var t = -1, r = J(n, H), e = new Array(r); ++t < r; )
                        for (var o, u = -1, i = (e[t] = new Array(o)); ++u < o; ) i[u] = n[u][t]
                    return e
                }
            function H(n) {
                return n.length
            }
            var Q = function() {
                return F(arguments)
            }
        },
        341: function(n, t, r) {
            'use strict'
            t.a = function(n) {
                return function() {
                    return n
                }
            }
        },
        374: function(n, t, r) {
            'use strict'
            function e(n) {
                return n[0]
            }
            function o(n) {
                return n[1]
            }
            r.d(t, 'a', function() {
                return e
            }),
                r.d(t, 'b', function() {
                    return o
                })
        },
        375: function(n, t, r) {
            'use strict'
            t.a = function(n, t) {
                return [(t = +t) * Math.cos((n -= Math.PI / 2)), t * Math.sin(n)]
            }
        },
        376: function(n, t, r) {
            'use strict'
            r.d(t, 'a', function() {
                return g
            }),
                r.d(t, 'c', function() {
                    return y
                }),
                r.d(t, 'b', function() {
                    return v
                })
            var e = r(497),
                o = r(391),
                u = r(341),
                i = r(374),
                f = r(375)
            function c(n) {
                return n.source
            }
            function s(n) {
                return n.target
            }
            function a(n) {
                var t = c,
                    r = s,
                    f = i.a,
                    a = i.b,
                    l = null
                function h() {
                    var u,
                        i = o.a.call(arguments),
                        c = t.apply(this, i),
                        s = r.apply(this, i)
                    if (
                        (l || (l = u = Object(e.a)()),
                        n(
                            l,
                            +f.apply(this, ((i[0] = c), i)),
                            +a.apply(this, i),
                            +f.apply(this, ((i[0] = s), i)),
                            +a.apply(this, i)
                        ),
                        u)
                    )
                        return (l = null), u + '' || null
                }
                return (
                    (h.source = function(n) {
                        return arguments.length ? ((t = n), h) : t
                    }),
                    (h.target = function(n) {
                        return arguments.length ? ((r = n), h) : r
                    }),
                    (h.x = function(n) {
                        return arguments.length ? ((f = 'function' == typeof n ? n : Object(u.a)(+n)), h) : f
                    }),
                    (h.y = function(n) {
                        return arguments.length ? ((a = 'function' == typeof n ? n : Object(u.a)(+n)), h) : a
                    }),
                    (h.context = function(n) {
                        return arguments.length ? ((l = null == n ? null : n), h) : l
                    }),
                    h
                )
            }
            function l(n, t, r, e, o) {
                n.moveTo(t, r), n.bezierCurveTo((t = (t + e) / 2), r, t, o, e, o)
            }
            function h(n, t, r, e, o) {
                n.moveTo(t, r), n.bezierCurveTo(t, (r = (r + o) / 2), e, r, e, o)
            }
            function d(n, t, r, e, o) {
                var u = Object(f.a)(t, r),
                    i = Object(f.a)(t, (r = (r + o) / 2)),
                    c = Object(f.a)(e, r),
                    s = Object(f.a)(e, o)
                n.moveTo(u[0], u[1]), n.bezierCurveTo(i[0], i[1], c[0], c[1], s[0], s[1])
            }
            function g() {
                return a(l)
            }
            function y() {
                return a(h)
            }
            function v() {
                var n = a(d)
                return (n.angle = n.x), delete n.x, (n.radius = n.y), delete n.y, n
            }
        },
        391: function(n, t, r) {
            'use strict'
            r.d(t, 'a', function() {
                return e
            })
            var e = Array.prototype.slice
        },
        497: function(n, t, r) {
            'use strict'
            var e = Math.PI,
                o = 2 * e,
                u = o - 1e-6
            function i() {
                ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '')
            }
            function f() {
                return new i()
            }
            ;(i.prototype = f.prototype = {
                constructor: i,
                moveTo: function(n, t) {
                    this._ += 'M' + (this._x0 = this._x1 = +n) + ',' + (this._y0 = this._y1 = +t)
                },
                closePath: function() {
                    null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'))
                },
                lineTo: function(n, t) {
                    this._ += 'L' + (this._x1 = +n) + ',' + (this._y1 = +t)
                },
                quadraticCurveTo: function(n, t, r, e) {
                    this._ += 'Q' + +n + ',' + +t + ',' + (this._x1 = +r) + ',' + (this._y1 = +e)
                },
                bezierCurveTo: function(n, t, r, e, o, u) {
                    this._ += 'C' + +n + ',' + +t + ',' + +r + ',' + +e + ',' + (this._x1 = +o) + ',' + (this._y1 = +u)
                },
                arcTo: function(n, t, r, o, u) {
                    ;(n = +n), (t = +t), (r = +r), (o = +o), (u = +u)
                    var i = this._x1,
                        f = this._y1,
                        c = r - n,
                        s = o - t,
                        a = i - n,
                        l = f - t,
                        h = a * a + l * l
                    if (u < 0) throw new Error('negative radius: ' + u)
                    if (null === this._x1) this._ += 'M' + (this._x1 = n) + ',' + (this._y1 = t)
                    else if (h > 1e-6)
                        if (Math.abs(l * c - s * a) > 1e-6 && u) {
                            var d = r - i,
                                g = o - f,
                                y = c * c + s * s,
                                v = d * d + g * g,
                                p = Math.sqrt(y),
                                M = Math.sqrt(h),
                                _ = u * Math.tan((e - Math.acos((y + h - v) / (2 * p * M))) / 2),
                                k = _ / M,
                                w = _ / p
                            Math.abs(k - 1) > 1e-6 && (this._ += 'L' + (n + k * a) + ',' + (t + k * l)),
                                (this._ +=
                                    'A' +
                                    u +
                                    ',' +
                                    u +
                                    ',0,0,' +
                                    +(l * d > a * g) +
                                    ',' +
                                    (this._x1 = n + w * c) +
                                    ',' +
                                    (this._y1 = t + w * s))
                        } else this._ += 'L' + (this._x1 = n) + ',' + (this._y1 = t)
                    else;
                },
                arc: function(n, t, r, i, f, c) {
                    ;(n = +n), (t = +t), (c = !!c)
                    var s = (r = +r) * Math.cos(i),
                        a = r * Math.sin(i),
                        l = n + s,
                        h = t + a,
                        d = 1 ^ c,
                        g = c ? i - f : f - i
                    if (r < 0) throw new Error('negative radius: ' + r)
                    null === this._x1
                        ? (this._ += 'M' + l + ',' + h)
                        : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) &&
                          (this._ += 'L' + l + ',' + h),
                        r &&
                            (g < 0 && (g = (g % o) + o),
                            g > u
                                ? (this._ +=
                                      'A' +
                                      r +
                                      ',' +
                                      r +
                                      ',0,1,' +
                                      d +
                                      ',' +
                                      (n - s) +
                                      ',' +
                                      (t - a) +
                                      'A' +
                                      r +
                                      ',' +
                                      r +
                                      ',0,1,' +
                                      d +
                                      ',' +
                                      (this._x1 = l) +
                                      ',' +
                                      (this._y1 = h))
                                : g > 1e-6 &&
                                  (this._ +=
                                      'A' +
                                      r +
                                      ',' +
                                      r +
                                      ',0,' +
                                      +(g >= e) +
                                      ',' +
                                      d +
                                      ',' +
                                      (this._x1 = n + r * Math.cos(f)) +
                                      ',' +
                                      (this._y1 = t + r * Math.sin(f))))
                },
                rect: function(n, t, r, e) {
                    this._ +=
                        'M' +
                        (this._x0 = this._x1 = +n) +
                        ',' +
                        (this._y0 = this._y1 = +t) +
                        'h' +
                        +r +
                        'v' +
                        +e +
                        'h' +
                        -r +
                        'Z'
                },
                toString: function() {
                    return this._
                },
            }),
                (t.a = f)
        },
        553: function(n, t, r) {
            'use strict'
            r.r(t),
                r.d(t, 'sankey', function() {
                    return _
                }),
                r.d(t, 'sankeyCenter', function() {
                    return c
                }),
                r.d(t, 'sankeyLeft', function() {
                    return u
                }),
                r.d(t, 'sankeyRight', function() {
                    return i
                }),
                r.d(t, 'sankeyJustify', function() {
                    return f
                }),
                r.d(t, 'sankeyLinkHorizontal', function() {
                    return L
                })
            var e = r(313)
            function o(n) {
                return n.target.depth
            }
            function u(n) {
                return n.depth
            }
            function i(n, t) {
                return t - 1 - n.height
            }
            function f(n, t) {
                return n.sourceLinks.length ? n.depth : t - 1
            }
            function c(n) {
                return n.targetLinks.length ? n.depth : n.sourceLinks.length ? Object(e.o)(n.sourceLinks, o) - 1 : 0
            }
            function s(n) {
                return function() {
                    return n
                }
            }
            function a(n, t) {
                return h(n.source, t.source) || n.index - t.index
            }
            function l(n, t) {
                return h(n.target, t.target) || n.index - t.index
            }
            function h(n, t) {
                return n.y0 - t.y0
            }
            function d(n) {
                return n.value
            }
            function g(n) {
                return n.index
            }
            function y(n) {
                return n.nodes
            }
            function v(n) {
                return n.links
            }
            function p(n, t) {
                const r = n.get(t)
                if (!r) throw new Error('missing: ' + t)
                return r
            }
            function M({ nodes: n }) {
                for (const t of n) {
                    let n = t.y0,
                        r = n
                    for (const r of t.sourceLinks) (r.y0 = n + r.width / 2), (n += r.width)
                    for (const n of t.targetLinks) (n.y1 = r + n.width / 2), (r += n.width)
                }
            }
            function _() {
                let n,
                    t,
                    r,
                    o = 0,
                    u = 0,
                    i = 1,
                    c = 1,
                    _ = 24,
                    k = 8,
                    w = g,
                    x = f,
                    L = y,
                    b = v,
                    A = 6
                function N() {
                    const n = { nodes: L.apply(null, arguments), links: b.apply(null, arguments) }
                    return j(n), m(n), O(n), T(n), z(n), M(n), n
                }
                function j({ nodes: n, links: t }) {
                    for (const [t, r] of n.entries()) (r.index = t), (r.sourceLinks = []), (r.targetLinks = [])
                    const e = new Map(n.map((t, r) => [w(t, r, n), t]))
                    for (const [n, r] of t.entries()) {
                        r.index = n
                        let { source: t, target: o } = r
                        'object' != typeof t && (t = r.source = p(e, t)),
                            'object' != typeof o && (o = r.target = p(e, o)),
                            t.sourceLinks.push(r),
                            o.targetLinks.push(r)
                    }
                    if (null != r) for (const { sourceLinks: t, targetLinks: e } of n) t.sort(r), e.sort(r)
                }
                function m({ nodes: n }) {
                    for (const t of n)
                        t.value =
                            void 0 === t.fixedValue
                                ? Math.max(Object(e.v)(t.sourceLinks, d), Object(e.v)(t.targetLinks, d))
                                : t.fixedValue
                }
                function O({ nodes: n }) {
                    const t = n.length
                    let r = new Set(n),
                        e = new Set(),
                        o = 0
                    for (; r.size; ) {
                        for (const n of r) {
                            n.depth = o
                            for (const { target: t } of n.sourceLinks) e.add(t)
                        }
                        if (++o > t) throw new Error('circular link')
                        ;(r = e), (e = new Set())
                    }
                }
                function T({ nodes: n }) {
                    const t = n.length
                    let r = new Set(n),
                        e = new Set(),
                        o = 0
                    for (; r.size; ) {
                        for (const n of r) {
                            n.height = o
                            for (const { source: t } of n.targetLinks) e.add(t)
                        }
                        if (++o > t) throw new Error('circular link')
                        ;(r = e), (e = new Set())
                    }
                }
                function z(r) {
                    const f = (function({ nodes: n }) {
                        const r = Object(e.k)(n, n => n.depth) + 1,
                            u = (i - o - _) / (r - 1),
                            f = new Array(r)
                        for (const t of n) {
                            const n = Math.max(0, Math.min(r - 1, Math.floor(x.call(null, t, r))))
                            ;(t.layer = n), (t.x0 = o + n * u), (t.x1 = t.x0 + _), f[n] ? f[n].push(t) : (f[n] = [t])
                        }
                        if (t) for (const n of f) n.sort(t)
                        return f
                    })(r)
                    ;(n = Math.min(k, (c - u) / (Object(e.k)(f, n => n.length) - 1))),
                        (function(t) {
                            const r = Object(e.o)(t, t => (c - u - (t.length - 1) * n) / Object(e.v)(t, d))
                            for (const e of t) {
                                let t = u
                                for (const o of e) {
                                    ;(o.y0 = t), (o.y1 = t + o.value * r), (t = o.y1 + n)
                                    for (const n of o.sourceLinks) n.width = n.value * r
                                }
                                t = (c - t + n) / (e.length + 1)
                                for (let n = 0; n < e.length; ++n) {
                                    const r = e[n]
                                    ;(r.y0 += t * (n + 1)), (r.y1 += t * (n + 1))
                                }
                                J(e)
                            }
                        })(f)
                    for (let n = 0; n < A; ++n) {
                        const t = Math.pow(0.99, n),
                            r = Math.max(1 - t, (n + 1) / A)
                        q(f, t, r), S(f, t, r)
                    }
                }
                function S(n, r, e) {
                    for (let o = 1, u = n.length; o < u; ++o) {
                        const u = n[o]
                        for (const n of u) {
                            let t = 0,
                                e = 0
                            for (const { source: r, value: o } of n.targetLinks) {
                                let u = o * (n.layer - r.layer)
                                ;(t += V(r, n) * u), (e += u)
                            }
                            if (!(e > 0)) continue
                            let o = (t / e - n.y0) * r
                            ;(n.y0 += o), (n.y1 += o), I(n)
                        }
                        void 0 === t && u.sort(h), C(u, e)
                    }
                }
                function q(n, r, e) {
                    for (let o = n.length - 2; o >= 0; --o) {
                        const u = n[o]
                        for (const n of u) {
                            let t = 0,
                                e = 0
                            for (const { target: r, value: o } of n.sourceLinks) {
                                let u = o * (r.layer - n.layer)
                                ;(t += Z(n, r) * u), (e += u)
                            }
                            if (!(e > 0)) continue
                            let o = (t / e - n.y0) * r
                            ;(n.y0 += o), (n.y1 += o), I(n)
                        }
                        void 0 === t && u.sort(h), C(u, e)
                    }
                }
                function C(t, r) {
                    const e = t.length >> 1,
                        o = t[e]
                    P(t, o.y0 - n, e - 1, r), E(t, o.y1 + n, e + 1, r), P(t, c, t.length - 1, r), E(t, u, 0, r)
                }
                function E(t, r, e, o) {
                    for (; e < t.length; ++e) {
                        const u = t[e],
                            i = (r - u.y0) * o
                        i > 1e-6 && ((u.y0 += i), (u.y1 += i)), (r = u.y1 + n)
                    }
                }
                function P(t, r, e, o) {
                    for (; e >= 0; --e) {
                        const u = t[e],
                            i = (u.y1 - r) * o
                        i > 1e-6 && ((u.y0 -= i), (u.y1 -= i)), (r = u.y0 - n)
                    }
                }
                function I({ sourceLinks: n, targetLinks: t }) {
                    if (void 0 === r) {
                        for (const {
                            source: { sourceLinks: n },
                        } of t)
                            n.sort(l)
                        for (const {
                            target: { targetLinks: t },
                        } of n)
                            t.sort(a)
                    }
                }
                function J(n) {
                    if (void 0 === r) for (const { sourceLinks: t, targetLinks: r } of n) t.sort(l), r.sort(a)
                }
                function V(t, r) {
                    let e = t.y0 - ((t.sourceLinks.length - 1) * n) / 2
                    for (const { target: o, width: u } of t.sourceLinks) {
                        if (o === r) break
                        e += u + n
                    }
                    for (const { source: n, width: o } of r.targetLinks) {
                        if (n === t) break
                        e -= o
                    }
                    return e
                }
                function Z(t, r) {
                    let e = r.y0 - ((r.targetLinks.length - 1) * n) / 2
                    for (const { source: o, width: u } of r.targetLinks) {
                        if (o === t) break
                        e += u + n
                    }
                    for (const { target: n, width: o } of t.sourceLinks) {
                        if (n === r) break
                        e -= o
                    }
                    return e
                }
                return (
                    (N.update = function(n) {
                        return M(n), n
                    }),
                    (N.nodeId = function(n) {
                        return arguments.length ? ((w = 'function' == typeof n ? n : s(n)), N) : w
                    }),
                    (N.nodeAlign = function(n) {
                        return arguments.length ? ((x = 'function' == typeof n ? n : s(n)), N) : x
                    }),
                    (N.nodeSort = function(n) {
                        return arguments.length ? ((t = n), N) : t
                    }),
                    (N.nodeWidth = function(n) {
                        return arguments.length ? ((_ = +n), N) : _
                    }),
                    (N.nodePadding = function(t) {
                        return arguments.length ? ((k = n = +t), N) : k
                    }),
                    (N.nodes = function(n) {
                        return arguments.length ? ((L = 'function' == typeof n ? n : s(n)), N) : L
                    }),
                    (N.links = function(n) {
                        return arguments.length ? ((b = 'function' == typeof n ? n : s(n)), N) : b
                    }),
                    (N.linkSort = function(n) {
                        return arguments.length ? ((r = n), N) : r
                    }),
                    (N.size = function(n) {
                        return arguments.length ? ((o = u = 0), (i = +n[0]), (c = +n[1]), N) : [i - o, c - u]
                    }),
                    (N.extent = function(n) {
                        return arguments.length
                            ? ((o = +n[0][0]), (i = +n[1][0]), (u = +n[0][1]), (c = +n[1][1]), N)
                            : [
                                  [o, u],
                                  [i, c],
                              ]
                    }),
                    (N.iterations = function(n) {
                        return arguments.length ? ((A = +n), N) : A
                    }),
                    N
                )
            }
            var k = r(376)
            function w(n) {
                return [n.source.x1, n.y0]
            }
            function x(n) {
                return [n.target.x0, n.y1]
            }
            var L = function() {
                return Object(k.a)()
                    .source(w)
                    .target(x)
            }
        },
    },
])
//# sourceMappingURL=24.js.map
