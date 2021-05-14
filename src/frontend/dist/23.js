;(window.webpackJsonp = window.webpackJsonp || []).push([
    [23],
    {
        313: function(n, t, e) {
            'use strict'
            e.d(t, 'b', function() {
                return c
            }),
                e.d(t, 'd', function() {
                    return o
                }),
                e.d(t, 'c', function() {
                    return a
                }),
                e.d(t, 'a', function() {
                    return r
                }),
                e.d(t, 'e', function() {
                    return i
                }),
                e.d(t, 'f', function() {
                    return l
                }),
                e.d(t, 'g', function() {
                    return h
                }),
                e.d(t, 'h', function() {
                    return v
                }),
                e.d(t, 'i', function() {
                    return g
                }),
                e.d(t, 'j', function() {
                    return C
                }),
                e.d(t, 'w', function() {
                    return z
                }),
                e.d(t, 'x', function() {
                    return P
                }),
                e.d(t, 'y', function() {
                    return E
                }),
                e.d(t, 'k', function() {
                    return R
                }),
                e.d(t, 'l', function() {
                    return j
                }),
                e.d(t, 'm', function() {
                    return D
                }),
                e.d(t, 'n', function() {
                    return q
                }),
                e.d(t, 'o', function() {
                    return L
                }),
                e.d(t, 'p', function() {
                    return f
                }),
                e.d(t, 'q', function() {
                    return U
                }),
                e.d(t, 'r', function() {
                    return O
                }),
                e.d(t, 's', function() {
                    return w
                }),
                e.d(t, 't', function() {
                    return B
                }),
                e.d(t, 'u', function() {
                    return Y
                }),
                e.d(t, 'v', function() {
                    return F
                }),
                e.d(t, 'B', function() {
                    return T
                }),
                e.d(t, 'z', function() {
                    return k
                }),
                e.d(t, 'A', function() {
                    return S
                }),
                e.d(t, 'C', function() {
                    return I
                }),
                e.d(t, 'D', function() {
                    return p
                }),
                e.d(t, 'E', function() {
                    return X
                })
            var r = function(n, t) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                i = function(n) {
                    var t
                    return (
                        1 === n.length &&
                            ((t = n),
                            (n = function(n, e) {
                                return r(t(n), e)
                            })),
                        {
                            left: function(t, e, r, i) {
                                for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                                    var u = (r + i) >>> 1
                                    n(t[u], e) < 0 ? (r = u + 1) : (i = u)
                                }
                                return r
                            },
                            right: function(t, e, r, i) {
                                for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
                                    var u = (r + i) >>> 1
                                    n(t[u], e) > 0 ? (i = u) : (r = u + 1)
                                }
                                return r
                            },
                        }
                    )
                }
            var u = i(r),
                o = u.right,
                a = u.left,
                c = o,
                f = function(n, t) {
                    null == t && (t = s)
                    for (var e = 0, r = n.length - 1, i = n[0], u = new Array(r < 0 ? 0 : r); e < r; )
                        u[e] = t(i, (i = n[++e]))
                    return u
                }
            function s(n, t) {
                return [n, t]
            }
            var l = function(n, t, e) {
                    var r,
                        i,
                        u,
                        o,
                        a = n.length,
                        c = t.length,
                        f = new Array(a * c)
                    for (null == e && (e = s), r = u = 0; r < a; ++r)
                        for (o = n[r], i = 0; i < c; ++i, ++u) f[u] = e(o, t[i])
                    return f
                },
                h = function(n, t) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                d = function(n) {
                    return null === n ? NaN : +n
                },
                p = function(n, t) {
                    var e,
                        r,
                        i = n.length,
                        u = 0,
                        o = -1,
                        a = 0,
                        c = 0
                    if (null == t) for (; ++o < i; ) isNaN((e = d(n[o]))) || (c += (r = e - a) * (e - (a += r / ++u)))
                    else for (; ++o < i; ) isNaN((e = d(t(n[o], o, n)))) || (c += (r = e - a) * (e - (a += r / ++u)))
                    if (u > 1) return c / (u - 1)
                },
                v = function(n, t) {
                    var e = p(n, t)
                    return e ? Math.sqrt(e) : e
                },
                g = function(n, t) {
                    var e,
                        r,
                        i,
                        u = n.length,
                        o = -1
                    if (null == t) {
                        for (; ++o < u; )
                            if (null != (e = n[o]) && e >= e)
                                for (r = i = e; ++o < u; ) null != (e = n[o]) && (r > e && (r = e), i < e && (i = e))
                    } else
                        for (; ++o < u; )
                            if (null != (e = t(n[o], o, n)) && e >= e)
                                for (r = i = e; ++o < u; )
                                    null != (e = t(n[o], o, n)) && (r > e && (r = e), i < e && (i = e))
                    return [r, i]
                },
                y = Array.prototype,
                b = y.slice,
                _ = y.map,
                m = function(n) {
                    return function() {
                        return n
                    }
                },
                x = function(n) {
                    return n
                },
                w = function(n, t, e) {
                    ;(n = +n), (t = +t), (e = (i = arguments.length) < 2 ? ((t = n), (n = 0), 1) : i < 3 ? 1 : +e)
                    for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - n) / e)), u = new Array(i); ++r < i; )
                        u[r] = n + r * e
                    return u
                },
                M = Math.sqrt(50),
                N = Math.sqrt(10),
                A = Math.sqrt(2),
                T = function(n, t, e) {
                    var r,
                        i,
                        u,
                        o,
                        a = -1
                    if (((e = +e), (n = +n) === (t = +t) && e > 0)) return [n]
                    if (((r = t < n) && ((i = n), (n = t), (t = i)), 0 === (o = k(n, t, e)) || !isFinite(o))) return []
                    if (o > 0)
                        for (
                            n = Math.ceil(n / o), t = Math.floor(t / o), u = new Array((i = Math.ceil(t - n + 1)));
                            ++a < i;

                        )
                            u[a] = (n + a) * o
                    else
                        for (
                            n = Math.floor(n * o), t = Math.ceil(t * o), u = new Array((i = Math.ceil(n - t + 1)));
                            ++a < i;

                        )
                            u[a] = (n - a) / o
                    return r && u.reverse(), u
                }
            function k(n, t, e) {
                var r = (t - n) / Math.max(0, e),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    u = r / Math.pow(10, i)
                return i >= 0
                    ? (u >= M ? 10 : u >= N ? 5 : u >= A ? 2 : 1) * Math.pow(10, i)
                    : -Math.pow(10, -i) / (u >= M ? 10 : u >= N ? 5 : u >= A ? 2 : 1)
            }
            function S(n, t, e) {
                var r = Math.abs(t - n) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    u = r / i
                return u >= M ? (i *= 10) : u >= N ? (i *= 5) : u >= A && (i *= 2), t < n ? -i : i
            }
            var E = function(n) {
                    return Math.ceil(Math.log(n.length) / Math.LN2) + 1
                },
                C = function() {
                    var n = x,
                        t = g,
                        e = E
                    function r(r) {
                        var i,
                            u,
                            o = r.length,
                            a = new Array(o)
                        for (i = 0; i < o; ++i) a[i] = n(r[i], i, r)
                        var f = t(a),
                            s = f[0],
                            l = f[1],
                            h = e(a, s, l)
                        Array.isArray(h) || ((h = S(s, l, h)), (h = w(Math.ceil(s / h) * h, l, h)))
                        for (var d = h.length; h[0] <= s; ) h.shift(), --d
                        for (; h[d - 1] > l; ) h.pop(), --d
                        var p,
                            v = new Array(d + 1)
                        for (i = 0; i <= d; ++i) ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s), (p.x1 = i < d ? h[i] : l)
                        for (i = 0; i < o; ++i) s <= (u = a[i]) && u <= l && v[c(h, u, 0, d)].push(r[i])
                        return v
                    }
                    return (
                        (r.value = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : m(t)), r) : n
                        }),
                        (r.domain = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : m([n[0], n[1]])), r) : t
                        }),
                        (r.thresholds = function(n) {
                            return arguments.length
                                ? ((e = 'function' == typeof n ? n : Array.isArray(n) ? m(b.call(n)) : m(n)), r)
                                : e
                        }),
                        r
                    )
                },
                O = function(n, t, e) {
                    if ((null == e && (e = d), (r = n.length))) {
                        if ((t = +t) <= 0 || r < 2) return +e(n[0], 0, n)
                        if (t >= 1) return +e(n[r - 1], r - 1, n)
                        var r,
                            i = (r - 1) * t,
                            u = Math.floor(i),
                            o = +e(n[u], u, n)
                        return o + (+e(n[u + 1], u + 1, n) - o) * (i - u)
                    }
                },
                z = function(n, t, e) {
                    return (
                        (n = _.call(n, d).sort(r)),
                        Math.ceil((e - t) / (2 * (O(n, 0.75) - O(n, 0.25)) * Math.pow(n.length, -1 / 3)))
                    )
                },
                P = function(n, t, e) {
                    return Math.ceil((e - t) / (3.5 * v(n) * Math.pow(n.length, -1 / 3)))
                },
                R = function(n, t) {
                    var e,
                        r,
                        i = n.length,
                        u = -1
                    if (null == t) {
                        for (; ++u < i; )
                            if (null != (e = n[u]) && e >= e)
                                for (r = e; ++u < i; ) null != (e = n[u]) && e > r && (r = e)
                    } else
                        for (; ++u < i; )
                            if (null != (e = t(n[u], u, n)) && e >= e)
                                for (r = e; ++u < i; ) null != (e = t(n[u], u, n)) && e > r && (r = e)
                    return r
                },
                j = function(n, t) {
                    var e,
                        r = n.length,
                        i = r,
                        u = -1,
                        o = 0
                    if (null == t) for (; ++u < r; ) isNaN((e = d(n[u]))) ? --i : (o += e)
                    else for (; ++u < r; ) isNaN((e = d(t(n[u], u, n)))) ? --i : (o += e)
                    if (i) return o / i
                },
                D = function(n, t) {
                    var e,
                        i = n.length,
                        u = -1,
                        o = []
                    if (null == t) for (; ++u < i; ) isNaN((e = d(n[u]))) || o.push(e)
                    else for (; ++u < i; ) isNaN((e = d(t(n[u], u, n)))) || o.push(e)
                    return O(o.sort(r), 0.5)
                },
                q = function(n) {
                    for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i; ) o += n[u].length
                    for (e = new Array(o); --i >= 0; ) for (t = (r = n[i]).length; --t >= 0; ) e[--o] = r[t]
                    return e
                },
                L = function(n, t) {
                    var e,
                        r,
                        i = n.length,
                        u = -1
                    if (null == t) {
                        for (; ++u < i; )
                            if (null != (e = n[u]) && e >= e)
                                for (r = e; ++u < i; ) null != (e = n[u]) && r > e && (r = e)
                    } else
                        for (; ++u < i; )
                            if (null != (e = t(n[u], u, n)) && e >= e)
                                for (r = e; ++u < i; ) null != (e = t(n[u], u, n)) && r > e && (r = e)
                    return r
                },
                U = function(n, t) {
                    for (var e = t.length, r = new Array(e); e--; ) r[e] = n[t[e]]
                    return r
                },
                B = function(n, t) {
                    if ((e = n.length)) {
                        var e,
                            i,
                            u = 0,
                            o = 0,
                            a = n[o]
                        for (null == t && (t = r); ++u < e; )
                            (t((i = n[u]), a) < 0 || 0 !== t(a, a)) && ((a = i), (o = u))
                        return 0 === t(a, a) ? o : void 0
                    }
                },
                Y = function(n, t, e) {
                    for (var r, i, u = (null == e ? n.length : e) - (t = null == t ? 0 : +t); u; )
                        (i = (Math.random() * u--) | 0), (r = n[u + t]), (n[u + t] = n[i + t]), (n[i + t] = r)
                    return n
                },
                F = function(n, t) {
                    var e,
                        r = n.length,
                        i = -1,
                        u = 0
                    if (null == t) for (; ++i < r; ) (e = +n[i]) && (u += e)
                    else for (; ++i < r; ) (e = +t(n[i], i, n)) && (u += e)
                    return u
                },
                I = function(n) {
                    if (!(i = n.length)) return []
                    for (var t = -1, e = L(n, H), r = new Array(e); ++t < e; )
                        for (var i, u = -1, o = (r[t] = new Array(i)); ++u < i; ) o[u] = n[u][t]
                    return r
                }
            function H(n) {
                return n.length
            }
            var X = function() {
                return I(arguments)
            }
        },
        340: function(n, t, e) {
            'use strict'
            var r = e(497)
            e.d(t, 'a', function() {
                return r.a
            })
        },
        341: function(n, t, e) {
            'use strict'
            t.a = function(n) {
                return function() {
                    return n
                }
            }
        },
        374: function(n, t, e) {
            'use strict'
            function r(n) {
                return n[0]
            }
            function i(n) {
                return n[1]
            }
            e.d(t, 'a', function() {
                return r
            }),
                e.d(t, 'b', function() {
                    return i
                })
        },
        375: function(n, t, e) {
            'use strict'
            t.a = function(n, t) {
                return [(t = +t) * Math.cos((n -= Math.PI / 2)), t * Math.sin(n)]
            }
        },
        376: function(n, t, e) {
            'use strict'
            e.d(t, 'a', function() {
                return p
            }),
                e.d(t, 'c', function() {
                    return v
                }),
                e.d(t, 'b', function() {
                    return g
                })
            var r = e(497),
                i = e(391),
                u = e(341),
                o = e(374),
                a = e(375)
            function c(n) {
                return n.source
            }
            function f(n) {
                return n.target
            }
            function s(n) {
                var t = c,
                    e = f,
                    a = o.a,
                    s = o.b,
                    l = null
                function h() {
                    var u,
                        o = i.a.call(arguments),
                        c = t.apply(this, o),
                        f = e.apply(this, o)
                    if (
                        (l || (l = u = Object(r.a)()),
                        n(
                            l,
                            +a.apply(this, ((o[0] = c), o)),
                            +s.apply(this, o),
                            +a.apply(this, ((o[0] = f), o)),
                            +s.apply(this, o)
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
                        return arguments.length ? ((e = n), h) : e
                    }),
                    (h.x = function(n) {
                        return arguments.length ? ((a = 'function' == typeof n ? n : Object(u.a)(+n)), h) : a
                    }),
                    (h.y = function(n) {
                        return arguments.length ? ((s = 'function' == typeof n ? n : Object(u.a)(+n)), h) : s
                    }),
                    (h.context = function(n) {
                        return arguments.length ? ((l = null == n ? null : n), h) : l
                    }),
                    h
                )
            }
            function l(n, t, e, r, i) {
                n.moveTo(t, e), n.bezierCurveTo((t = (t + r) / 2), e, t, i, r, i)
            }
            function h(n, t, e, r, i) {
                n.moveTo(t, e), n.bezierCurveTo(t, (e = (e + i) / 2), r, e, r, i)
            }
            function d(n, t, e, r, i) {
                var u = Object(a.a)(t, e),
                    o = Object(a.a)(t, (e = (e + i) / 2)),
                    c = Object(a.a)(r, e),
                    f = Object(a.a)(r, i)
                n.moveTo(u[0], u[1]), n.bezierCurveTo(o[0], o[1], c[0], c[1], f[0], f[1])
            }
            function p() {
                return s(l)
            }
            function v() {
                return s(h)
            }
            function g() {
                var n = s(d)
                return (n.angle = n.x), delete n.x, (n.radius = n.y), delete n.y, n
            }
        },
        391: function(n, t, e) {
            'use strict'
            e.d(t, 'a', function() {
                return r
            })
            var r = Array.prototype.slice
        },
        497: function(n, t, e) {
            'use strict'
            var r = Math.PI,
                i = 2 * r,
                u = i - 1e-6
            function o() {
                ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '')
            }
            function a() {
                return new o()
            }
            ;(o.prototype = a.prototype = {
                constructor: o,
                moveTo: function(n, t) {
                    this._ += 'M' + (this._x0 = this._x1 = +n) + ',' + (this._y0 = this._y1 = +t)
                },
                closePath: function() {
                    null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'))
                },
                lineTo: function(n, t) {
                    this._ += 'L' + (this._x1 = +n) + ',' + (this._y1 = +t)
                },
                quadraticCurveTo: function(n, t, e, r) {
                    this._ += 'Q' + +n + ',' + +t + ',' + (this._x1 = +e) + ',' + (this._y1 = +r)
                },
                bezierCurveTo: function(n, t, e, r, i, u) {
                    this._ += 'C' + +n + ',' + +t + ',' + +e + ',' + +r + ',' + (this._x1 = +i) + ',' + (this._y1 = +u)
                },
                arcTo: function(n, t, e, i, u) {
                    ;(n = +n), (t = +t), (e = +e), (i = +i), (u = +u)
                    var o = this._x1,
                        a = this._y1,
                        c = e - n,
                        f = i - t,
                        s = o - n,
                        l = a - t,
                        h = s * s + l * l
                    if (u < 0) throw new Error('negative radius: ' + u)
                    if (null === this._x1) this._ += 'M' + (this._x1 = n) + ',' + (this._y1 = t)
                    else if (h > 1e-6)
                        if (Math.abs(l * c - f * s) > 1e-6 && u) {
                            var d = e - o,
                                p = i - a,
                                v = c * c + f * f,
                                g = d * d + p * p,
                                y = Math.sqrt(v),
                                b = Math.sqrt(h),
                                _ = u * Math.tan((r - Math.acos((v + h - g) / (2 * y * b))) / 2),
                                m = _ / b,
                                x = _ / y
                            Math.abs(m - 1) > 1e-6 && (this._ += 'L' + (n + m * s) + ',' + (t + m * l)),
                                (this._ +=
                                    'A' +
                                    u +
                                    ',' +
                                    u +
                                    ',0,0,' +
                                    +(l * d > s * p) +
                                    ',' +
                                    (this._x1 = n + x * c) +
                                    ',' +
                                    (this._y1 = t + x * f))
                        } else this._ += 'L' + (this._x1 = n) + ',' + (this._y1 = t)
                    else;
                },
                arc: function(n, t, e, o, a, c) {
                    ;(n = +n), (t = +t), (c = !!c)
                    var f = (e = +e) * Math.cos(o),
                        s = e * Math.sin(o),
                        l = n + f,
                        h = t + s,
                        d = 1 ^ c,
                        p = c ? o - a : a - o
                    if (e < 0) throw new Error('negative radius: ' + e)
                    null === this._x1
                        ? (this._ += 'M' + l + ',' + h)
                        : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) &&
                          (this._ += 'L' + l + ',' + h),
                        e &&
                            (p < 0 && (p = (p % i) + i),
                            p > u
                                ? (this._ +=
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,1,' +
                                      d +
                                      ',' +
                                      (n - f) +
                                      ',' +
                                      (t - s) +
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,1,' +
                                      d +
                                      ',' +
                                      (this._x1 = l) +
                                      ',' +
                                      (this._y1 = h))
                                : p > 1e-6 &&
                                  (this._ +=
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,' +
                                      +(p >= r) +
                                      ',' +
                                      d +
                                      ',' +
                                      (this._x1 = n + e * Math.cos(a)) +
                                      ',' +
                                      (this._y1 = t + e * Math.sin(a))))
                },
                rect: function(n, t, e, r) {
                    this._ +=
                        'M' +
                        (this._x0 = this._x1 = +n) +
                        ',' +
                        (this._y0 = this._y1 = +t) +
                        'h' +
                        +e +
                        'v' +
                        +r +
                        'h' +
                        -e +
                        'Z'
                },
                toString: function() {
                    return this._
                },
            }),
                (t.a = a)
        },
        500: function(n, t, e) {
            'use strict'
            e.d(t, 'a', function() {
                return N
            }),
                e.d(t, 'b', function() {
                    return E
                }),
                e.d(t, 'v', function() {
                    return S
                }),
                e.d(t, 'A', function() {
                    return z
                }),
                e.d(t, 'c', function() {
                    return L
                }),
                e.d(t, 'C', function() {
                    return L
                }),
                e.d(t, 'w', function() {
                    return q
                }),
                e.d(t, 'D', function() {
                    return q
                }),
                e.d(t, 'B', function() {
                    return U.a
                }),
                e.d(t, 'x', function() {
                    return B.a
                }),
                e.d(t, 'z', function() {
                    return B.c
                }),
                e.d(t, 'y', function() {
                    return B.b
                }),
                e.d(t, 'Q', function() {
                    return un
                }),
                e.d(t, 'Y', function() {
                    return rn
                }),
                e.d(t, 'R', function() {
                    return Y
                }),
                e.d(t, 'S', function() {
                    return F
                }),
                e.d(t, 'T', function() {
                    return X
                }),
                e.d(t, 'U', function() {
                    return Z
                }),
                e.d(t, 'V', function() {
                    return W
                }),
                e.d(t, 'W', function() {
                    return J
                }),
                e.d(t, 'X', function() {
                    return en
                }),
                e.d(t, 'e', function() {
                    return ln
                }),
                e.d(t, 'f', function() {
                    return dn
                }),
                e.d(t, 'd', function() {
                    return fn
                }),
                e.d(t, 'g', function() {
                    return vn
                }),
                e.d(t, 'i', function() {
                    return mn
                }),
                e.d(t, 'j', function() {
                    return wn
                }),
                e.d(t, 'h', function() {
                    return bn
                }),
                e.d(t, 'l', function() {
                    return kn
                }),
                e.d(t, 'm', function() {
                    return En
                }),
                e.d(t, 'k', function() {
                    return An
                }),
                e.d(t, 'o', function() {
                    return On
                }),
                e.d(t, 'n', function() {
                    return T
                }),
                e.d(t, 'p', function() {
                    return Un
                }),
                e.d(t, 'q', function() {
                    return Bn
                }),
                e.d(t, 'r', function() {
                    return In
                }),
                e.d(t, 's', function() {
                    return Xn
                }),
                e.d(t, 't', function() {
                    return Gn
                }),
                e.d(t, 'u', function() {
                    return Vn
                }),
                e.d(t, 'E', function() {
                    return Jn
                }),
                e.d(t, 'G', function() {
                    return Kn
                }),
                e.d(t, 'F', function() {
                    return nt
                }),
                e.d(t, 'H', function() {
                    return Wn
                }),
                e.d(t, 'I', function() {
                    return tt
                }),
                e.d(t, 'J', function() {
                    return et
                }),
                e.d(t, 'K', function() {
                    return rt
                }),
                e.d(t, 'L', function() {
                    return ut
                }),
                e.d(t, 'M', function() {
                    return at
                }),
                e.d(t, 'N', function() {
                    return ct
                }),
                e.d(t, 'O', function() {
                    return Zn
                }),
                e.d(t, 'P', function() {
                    return ft
                })
            var r = e(497),
                i = e(341),
                u = Math.abs,
                o = Math.atan2,
                a = Math.cos,
                c = Math.max,
                f = Math.min,
                s = Math.sin,
                l = Math.sqrt,
                h = Math.PI,
                d = h / 2,
                p = 2 * h
            function v(n) {
                return n > 1 ? 0 : n < -1 ? h : Math.acos(n)
            }
            function g(n) {
                return n >= 1 ? d : n <= -1 ? -d : Math.asin(n)
            }
            function y(n) {
                return n.innerRadius
            }
            function b(n) {
                return n.outerRadius
            }
            function _(n) {
                return n.startAngle
            }
            function m(n) {
                return n.endAngle
            }
            function x(n) {
                return n && n.padAngle
            }
            function w(n, t, e, r, i, u, o, a) {
                var c = e - n,
                    f = r - t,
                    s = o - i,
                    l = a - u,
                    h = l * c - s * f
                if (!(h * h < 1e-12)) return [n + (h = (s * (t - u) - l * (n - i)) / h) * c, t + h * f]
            }
            function M(n, t, e, r, i, u, o) {
                var a = n - e,
                    f = t - r,
                    s = (o ? u : -u) / l(a * a + f * f),
                    h = s * f,
                    d = -s * a,
                    p = n + h,
                    v = t + d,
                    g = e + h,
                    y = r + d,
                    b = (p + g) / 2,
                    _ = (v + y) / 2,
                    m = g - p,
                    x = y - v,
                    w = m * m + x * x,
                    M = i - u,
                    N = p * y - g * v,
                    A = (x < 0 ? -1 : 1) * l(c(0, M * M * w - N * N)),
                    T = (N * x - m * A) / w,
                    k = (-N * m - x * A) / w,
                    S = (N * x + m * A) / w,
                    E = (-N * m + x * A) / w,
                    C = T - b,
                    O = k - _,
                    z = S - b,
                    P = E - _
                return (
                    C * C + O * O > z * z + P * P && ((T = S), (k = E)),
                    { cx: T, cy: k, x01: -h, y01: -d, x11: T * (i / M - 1), y11: k * (i / M - 1) }
                )
            }
            var N = function() {
                var n = y,
                    t = b,
                    e = Object(i.a)(0),
                    c = null,
                    N = _,
                    A = m,
                    T = x,
                    k = null
                function S() {
                    var i,
                        y,
                        b = +n.apply(this, arguments),
                        _ = +t.apply(this, arguments),
                        m = N.apply(this, arguments) - d,
                        x = A.apply(this, arguments) - d,
                        S = u(x - m),
                        E = x > m
                    if ((k || (k = i = Object(r.a)()), _ < b && ((y = _), (_ = b), (b = y)), _ > 1e-12))
                        if (S > p - 1e-12)
                            k.moveTo(_ * a(m), _ * s(m)),
                                k.arc(0, 0, _, m, x, !E),
                                b > 1e-12 && (k.moveTo(b * a(x), b * s(x)), k.arc(0, 0, b, x, m, E))
                        else {
                            var C,
                                O,
                                z = m,
                                P = x,
                                R = m,
                                j = x,
                                D = S,
                                q = S,
                                L = T.apply(this, arguments) / 2,
                                U = L > 1e-12 && (c ? +c.apply(this, arguments) : l(b * b + _ * _)),
                                B = f(u(_ - b) / 2, +e.apply(this, arguments)),
                                Y = B,
                                F = B
                            if (U > 1e-12) {
                                var I = g((U / b) * s(L)),
                                    H = g((U / _) * s(L))
                                ;(D -= 2 * I) > 1e-12
                                    ? ((R += I *= E ? 1 : -1), (j -= I))
                                    : ((D = 0), (R = j = (m + x) / 2)),
                                    (q -= 2 * H) > 1e-12
                                        ? ((z += H *= E ? 1 : -1), (P -= H))
                                        : ((q = 0), (z = P = (m + x) / 2))
                            }
                            var X = _ * a(z),
                                V = _ * s(z),
                                G = b * a(j),
                                $ = b * s(j)
                            if (B > 1e-12) {
                                var W,
                                    Z = _ * a(P),
                                    Q = _ * s(P),
                                    J = b * a(R),
                                    K = b * s(R)
                                if (S < h && (W = w(X, V, J, K, Z, Q, G, $))) {
                                    var nn = X - W[0],
                                        tn = V - W[1],
                                        en = Z - W[0],
                                        rn = Q - W[1],
                                        un =
                                            1 /
                                            s(
                                                v((nn * en + tn * rn) / (l(nn * nn + tn * tn) * l(en * en + rn * rn))) /
                                                    2
                                            ),
                                        on = l(W[0] * W[0] + W[1] * W[1])
                                    ;(Y = f(B, (b - on) / (un - 1))), (F = f(B, (_ - on) / (un + 1)))
                                }
                            }
                            q > 1e-12
                                ? F > 1e-12
                                    ? ((C = M(J, K, X, V, _, F, E)),
                                      (O = M(Z, Q, G, $, _, F, E)),
                                      k.moveTo(C.cx + C.x01, C.cy + C.y01),
                                      F < B
                                          ? k.arc(C.cx, C.cy, F, o(C.y01, C.x01), o(O.y01, O.x01), !E)
                                          : (k.arc(C.cx, C.cy, F, o(C.y01, C.x01), o(C.y11, C.x11), !E),
                                            k.arc(
                                                0,
                                                0,
                                                _,
                                                o(C.cy + C.y11, C.cx + C.x11),
                                                o(O.cy + O.y11, O.cx + O.x11),
                                                !E
                                            ),
                                            k.arc(O.cx, O.cy, F, o(O.y11, O.x11), o(O.y01, O.x01), !E)))
                                    : (k.moveTo(X, V), k.arc(0, 0, _, z, P, !E))
                                : k.moveTo(X, V),
                                b > 1e-12 && D > 1e-12
                                    ? Y > 1e-12
                                        ? ((C = M(G, $, Z, Q, b, -Y, E)),
                                          (O = M(X, V, J, K, b, -Y, E)),
                                          k.lineTo(C.cx + C.x01, C.cy + C.y01),
                                          Y < B
                                              ? k.arc(C.cx, C.cy, Y, o(C.y01, C.x01), o(O.y01, O.x01), !E)
                                              : (k.arc(C.cx, C.cy, Y, o(C.y01, C.x01), o(C.y11, C.x11), !E),
                                                k.arc(
                                                    0,
                                                    0,
                                                    b,
                                                    o(C.cy + C.y11, C.cx + C.x11),
                                                    o(O.cy + O.y11, O.cx + O.x11),
                                                    E
                                                ),
                                                k.arc(O.cx, O.cy, Y, o(O.y11, O.x11), o(O.y01, O.x01), !E)))
                                        : k.arc(0, 0, b, j, R, E)
                                    : k.lineTo(G, $)
                        }
                    else k.moveTo(0, 0)
                    if ((k.closePath(), i)) return (k = null), i + '' || null
                }
                return (
                    (S.centroid = function() {
                        var e = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2,
                            r = (+N.apply(this, arguments) + +A.apply(this, arguments)) / 2 - h / 2
                        return [a(r) * e, s(r) * e]
                    }),
                    (S.innerRadius = function(t) {
                        return arguments.length ? ((n = 'function' == typeof t ? t : Object(i.a)(+t)), S) : n
                    }),
                    (S.outerRadius = function(n) {
                        return arguments.length ? ((t = 'function' == typeof n ? n : Object(i.a)(+n)), S) : t
                    }),
                    (S.cornerRadius = function(n) {
                        return arguments.length ? ((e = 'function' == typeof n ? n : Object(i.a)(+n)), S) : e
                    }),
                    (S.padRadius = function(n) {
                        return arguments.length
                            ? ((c = null == n ? null : 'function' == typeof n ? n : Object(i.a)(+n)), S)
                            : c
                    }),
                    (S.startAngle = function(n) {
                        return arguments.length ? ((N = 'function' == typeof n ? n : Object(i.a)(+n)), S) : N
                    }),
                    (S.endAngle = function(n) {
                        return arguments.length ? ((A = 'function' == typeof n ? n : Object(i.a)(+n)), S) : A
                    }),
                    (S.padAngle = function(n) {
                        return arguments.length ? ((T = 'function' == typeof n ? n : Object(i.a)(+n)), S) : T
                    }),
                    (S.context = function(n) {
                        return arguments.length ? ((k = null == n ? null : n), S) : k
                    }),
                    S
                )
            }
            function A(n) {
                this._context = n
            }
            A.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                            break
                        case 1:
                            this._point = 2
                        default:
                            this._context.lineTo(n, t)
                    }
                },
            }
            var T = function(n) {
                    return new A(n)
                },
                k = e(374),
                S = function() {
                    var n = k.a,
                        t = k.b,
                        e = Object(i.a)(!0),
                        u = null,
                        o = T,
                        a = null
                    function c(i) {
                        var c,
                            f,
                            s,
                            l = i.length,
                            h = !1
                        for (null == u && (a = o((s = Object(r.a)()))), c = 0; c <= l; ++c)
                            !(c < l && e((f = i[c]), c, i)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()),
                                h && a.point(+n(f, c, i), +t(f, c, i))
                        if (s) return (a = null), s + '' || null
                    }
                    return (
                        (c.x = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : Object(i.a)(+t)), c) : n
                        }),
                        (c.y = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : Object(i.a)(+n)), c) : t
                        }),
                        (c.defined = function(n) {
                            return arguments.length ? ((e = 'function' == typeof n ? n : Object(i.a)(!!n)), c) : e
                        }),
                        (c.curve = function(n) {
                            return arguments.length ? ((o = n), null != u && (a = o(u)), c) : o
                        }),
                        (c.context = function(n) {
                            return arguments.length ? (null == n ? (u = a = null) : (a = o((u = n))), c) : u
                        }),
                        c
                    )
                },
                E = function() {
                    var n = k.a,
                        t = null,
                        e = Object(i.a)(0),
                        u = k.b,
                        o = Object(i.a)(!0),
                        a = null,
                        c = T,
                        f = null
                    function s(i) {
                        var s,
                            l,
                            h,
                            d,
                            p,
                            v = i.length,
                            g = !1,
                            y = new Array(v),
                            b = new Array(v)
                        for (null == a && (f = c((p = Object(r.a)()))), s = 0; s <= v; ++s) {
                            if (!(s < v && o((d = i[s]), s, i)) === g)
                                if ((g = !g)) (l = s), f.areaStart(), f.lineStart()
                                else {
                                    for (f.lineEnd(), f.lineStart(), h = s - 1; h >= l; --h) f.point(y[h], b[h])
                                    f.lineEnd(), f.areaEnd()
                                }
                            g &&
                                ((y[s] = +n(d, s, i)),
                                (b[s] = +e(d, s, i)),
                                f.point(t ? +t(d, s, i) : y[s], u ? +u(d, s, i) : b[s]))
                        }
                        if (p) return (f = null), p + '' || null
                    }
                    function l() {
                        return S()
                            .defined(o)
                            .curve(c)
                            .context(a)
                    }
                    return (
                        (s.x = function(e) {
                            return arguments.length
                                ? ((n = 'function' == typeof e ? e : Object(i.a)(+e)), (t = null), s)
                                : n
                        }),
                        (s.x0 = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : Object(i.a)(+t)), s) : n
                        }),
                        (s.x1 = function(n) {
                            return arguments.length
                                ? ((t = null == n ? null : 'function' == typeof n ? n : Object(i.a)(+n)), s)
                                : t
                        }),
                        (s.y = function(n) {
                            return arguments.length
                                ? ((e = 'function' == typeof n ? n : Object(i.a)(+n)), (u = null), s)
                                : e
                        }),
                        (s.y0 = function(n) {
                            return arguments.length ? ((e = 'function' == typeof n ? n : Object(i.a)(+n)), s) : e
                        }),
                        (s.y1 = function(n) {
                            return arguments.length
                                ? ((u = null == n ? null : 'function' == typeof n ? n : Object(i.a)(+n)), s)
                                : u
                        }),
                        (s.lineX0 = s.lineY0 = function() {
                            return l()
                                .x(n)
                                .y(e)
                        }),
                        (s.lineY1 = function() {
                            return l()
                                .x(n)
                                .y(u)
                        }),
                        (s.lineX1 = function() {
                            return l()
                                .x(t)
                                .y(e)
                        }),
                        (s.defined = function(n) {
                            return arguments.length ? ((o = 'function' == typeof n ? n : Object(i.a)(!!n)), s) : o
                        }),
                        (s.curve = function(n) {
                            return arguments.length ? ((c = n), null != a && (f = c(a)), s) : c
                        }),
                        (s.context = function(n) {
                            return arguments.length ? (null == n ? (a = f = null) : (f = c((a = n))), s) : a
                        }),
                        s
                    )
                },
                C = function(n, t) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                O = function(n) {
                    return n
                },
                z = function() {
                    var n = O,
                        t = C,
                        e = null,
                        r = Object(i.a)(0),
                        u = Object(i.a)(p),
                        o = Object(i.a)(0)
                    function a(i) {
                        var a,
                            c,
                            f,
                            s,
                            l,
                            h = i.length,
                            d = 0,
                            v = new Array(h),
                            g = new Array(h),
                            y = +r.apply(this, arguments),
                            b = Math.min(p, Math.max(-p, u.apply(this, arguments) - y)),
                            _ = Math.min(Math.abs(b) / h, o.apply(this, arguments)),
                            m = _ * (b < 0 ? -1 : 1)
                        for (a = 0; a < h; ++a) (l = g[(v[a] = a)] = +n(i[a], a, i)) > 0 && (d += l)
                        for (
                            null != t
                                ? v.sort(function(n, e) {
                                      return t(g[n], g[e])
                                  })
                                : null != e &&
                                  v.sort(function(n, t) {
                                      return e(i[n], i[t])
                                  }),
                                a = 0,
                                f = d ? (b - h * m) / d : 0;
                            a < h;
                            ++a, y = s
                        )
                            (c = v[a]),
                                (s = y + ((l = g[c]) > 0 ? l * f : 0) + m),
                                (g[c] = { data: i[c], index: a, value: l, startAngle: y, endAngle: s, padAngle: _ })
                        return g
                    }
                    return (
                        (a.value = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : Object(i.a)(+t)), a) : n
                        }),
                        (a.sortValues = function(n) {
                            return arguments.length ? ((t = n), (e = null), a) : t
                        }),
                        (a.sort = function(n) {
                            return arguments.length ? ((e = n), (t = null), a) : e
                        }),
                        (a.startAngle = function(n) {
                            return arguments.length ? ((r = 'function' == typeof n ? n : Object(i.a)(+n)), a) : r
                        }),
                        (a.endAngle = function(n) {
                            return arguments.length ? ((u = 'function' == typeof n ? n : Object(i.a)(+n)), a) : u
                        }),
                        (a.padAngle = function(n) {
                            return arguments.length ? ((o = 'function' == typeof n ? n : Object(i.a)(+n)), a) : o
                        }),
                        a
                    )
                },
                P = j(T)
            function R(n) {
                this._curve = n
            }
            function j(n) {
                function t(t) {
                    return new R(n(t))
                }
                return (t._curve = n), t
            }
            function D(n) {
                var t = n.curve
                return (
                    (n.angle = n.x),
                    delete n.x,
                    (n.radius = n.y),
                    delete n.y,
                    (n.curve = function(n) {
                        return arguments.length ? t(j(n)) : t()._curve
                    }),
                    n
                )
            }
            R.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(n, t) {
                    this._curve.point(t * Math.sin(n), t * -Math.cos(n))
                },
            }
            var q = function() {
                    return D(S().curve(P))
                },
                L = function() {
                    var n = E().curve(P),
                        t = n.curve,
                        e = n.lineX0,
                        r = n.lineX1,
                        i = n.lineY0,
                        u = n.lineY1
                    return (
                        (n.angle = n.x),
                        delete n.x,
                        (n.startAngle = n.x0),
                        delete n.x0,
                        (n.endAngle = n.x1),
                        delete n.x1,
                        (n.radius = n.y),
                        delete n.y,
                        (n.innerRadius = n.y0),
                        delete n.y0,
                        (n.outerRadius = n.y1),
                        delete n.y1,
                        (n.lineStartAngle = function() {
                            return D(e())
                        }),
                        delete n.lineX0,
                        (n.lineEndAngle = function() {
                            return D(r())
                        }),
                        delete n.lineX1,
                        (n.lineInnerRadius = function() {
                            return D(i())
                        }),
                        delete n.lineY0,
                        (n.lineOuterRadius = function() {
                            return D(u())
                        }),
                        delete n.lineY1,
                        (n.curve = function(n) {
                            return arguments.length ? t(j(n)) : t()._curve
                        }),
                        n
                    )
                },
                U = e(375),
                B = e(376),
                Y = {
                    draw: function(n, t) {
                        var e = Math.sqrt(t / h)
                        n.moveTo(e, 0), n.arc(0, 0, e, 0, p)
                    },
                },
                F = {
                    draw: function(n, t) {
                        var e = Math.sqrt(t / 5) / 2
                        n.moveTo(-3 * e, -e),
                            n.lineTo(-e, -e),
                            n.lineTo(-e, -3 * e),
                            n.lineTo(e, -3 * e),
                            n.lineTo(e, -e),
                            n.lineTo(3 * e, -e),
                            n.lineTo(3 * e, e),
                            n.lineTo(e, e),
                            n.lineTo(e, 3 * e),
                            n.lineTo(-e, 3 * e),
                            n.lineTo(-e, e),
                            n.lineTo(-3 * e, e),
                            n.closePath()
                    },
                },
                I = Math.sqrt(1 / 3),
                H = 2 * I,
                X = {
                    draw: function(n, t) {
                        var e = Math.sqrt(t / H),
                            r = e * I
                        n.moveTo(0, -e), n.lineTo(r, 0), n.lineTo(0, e), n.lineTo(-r, 0), n.closePath()
                    },
                },
                V = Math.sin(h / 10) / Math.sin((7 * h) / 10),
                G = Math.sin(p / 10) * V,
                $ = -Math.cos(p / 10) * V,
                W = {
                    draw: function(n, t) {
                        var e = Math.sqrt(0.8908130915292852 * t),
                            r = G * e,
                            i = $ * e
                        n.moveTo(0, -e), n.lineTo(r, i)
                        for (var u = 1; u < 5; ++u) {
                            var o = (p * u) / 5,
                                a = Math.cos(o),
                                c = Math.sin(o)
                            n.lineTo(c * e, -a * e), n.lineTo(a * r - c * i, c * r + a * i)
                        }
                        n.closePath()
                    },
                },
                Z = {
                    draw: function(n, t) {
                        var e = Math.sqrt(t),
                            r = -e / 2
                        n.rect(r, r, e, e)
                    },
                },
                Q = Math.sqrt(3),
                J = {
                    draw: function(n, t) {
                        var e = -Math.sqrt(t / (3 * Q))
                        n.moveTo(0, 2 * e), n.lineTo(-Q * e, -e), n.lineTo(Q * e, -e), n.closePath()
                    },
                },
                K = Math.sqrt(3) / 2,
                nn = 1 / Math.sqrt(12),
                tn = 3 * (nn / 2 + 1),
                en = {
                    draw: function(n, t) {
                        var e = Math.sqrt(t / tn),
                            r = e / 2,
                            i = e * nn,
                            u = r,
                            o = e * nn + e,
                            a = -u,
                            c = o
                        n.moveTo(r, i),
                            n.lineTo(u, o),
                            n.lineTo(a, c),
                            n.lineTo(-0.5 * r - K * i, K * r + -0.5 * i),
                            n.lineTo(-0.5 * u - K * o, K * u + -0.5 * o),
                            n.lineTo(-0.5 * a - K * c, K * a + -0.5 * c),
                            n.lineTo(-0.5 * r + K * i, -0.5 * i - K * r),
                            n.lineTo(-0.5 * u + K * o, -0.5 * o - K * u),
                            n.lineTo(-0.5 * a + K * c, -0.5 * c - K * a),
                            n.closePath()
                    },
                },
                rn = [Y, F, X, Z, W, J, en],
                un = function() {
                    var n = Object(i.a)(Y),
                        t = Object(i.a)(64),
                        e = null
                    function u() {
                        var i
                        if (
                            (e || (e = i = Object(r.a)()),
                            n.apply(this, arguments).draw(e, +t.apply(this, arguments)),
                            i)
                        )
                            return (e = null), i + '' || null
                    }
                    return (
                        (u.type = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : Object(i.a)(t)), u) : n
                        }),
                        (u.size = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : Object(i.a)(+n)), u) : t
                        }),
                        (u.context = function(n) {
                            return arguments.length ? ((e = null == n ? null : n), u) : e
                        }),
                        u
                    )
                },
                on = function() {}
            function an(n, t, e) {
                n._context.bezierCurveTo(
                    (2 * n._x0 + n._x1) / 3,
                    (2 * n._y0 + n._y1) / 3,
                    (n._x0 + 2 * n._x1) / 3,
                    (n._y0 + 2 * n._y1) / 3,
                    (n._x0 + 4 * n._x1 + t) / 6,
                    (n._y0 + 4 * n._y1 + e) / 6
                )
            }
            function cn(n) {
                this._context = n
            }
            cn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            an(this, this._x1, this._y1)
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6)
                        default:
                            an(this, n, t)
                    }
                    ;(this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t)
                },
            }
            var fn = function(n) {
                return new cn(n)
            }
            function sn(n) {
                this._context = n
            }
            sn.prototype = {
                areaStart: on,
                areaEnd: on,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath()
                            break
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                                this._context.closePath()
                            break
                        case 3:
                            this.point(this._x2, this._y2),
                                this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4)
                    }
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), (this._x2 = n), (this._y2 = t)
                            break
                        case 1:
                            ;(this._point = 2), (this._x3 = n), (this._y3 = t)
                            break
                        case 2:
                            ;(this._point = 3),
                                (this._x4 = n),
                                (this._y4 = t),
                                this._context.moveTo(
                                    (this._x0 + 4 * this._x1 + n) / 6,
                                    (this._y0 + 4 * this._y1 + t) / 6
                                )
                            break
                        default:
                            an(this, n, t)
                    }
                    ;(this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t)
                },
            }
            var ln = function(n) {
                return new sn(n)
            }
            function hn(n) {
                this._context = n
            }
            hn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            this._point = 3
                            var e = (this._x0 + 4 * this._x1 + n) / 6,
                                r = (this._y0 + 4 * this._y1 + t) / 6
                            this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r)
                            break
                        case 3:
                            this._point = 4
                        default:
                            an(this, n, t)
                    }
                    ;(this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t)
                },
            }
            var dn = function(n) {
                return new hn(n)
            }
            function pn(n, t) {
                ;(this._basis = new cn(n)), (this._beta = t)
            }
            pn.prototype = {
                lineStart: function() {
                    ;(this._x = []), (this._y = []), this._basis.lineStart()
                },
                lineEnd: function() {
                    var n = this._x,
                        t = this._y,
                        e = n.length - 1
                    if (e > 0)
                        for (var r, i = n[0], u = t[0], o = n[e] - i, a = t[e] - u, c = -1; ++c <= e; )
                            (r = c / e),
                                this._basis.point(
                                    this._beta * n[c] + (1 - this._beta) * (i + r * o),
                                    this._beta * t[c] + (1 - this._beta) * (u + r * a)
                                )
                    ;(this._x = this._y = null), this._basis.lineEnd()
                },
                point: function(n, t) {
                    this._x.push(+n), this._y.push(+t)
                },
            }
            var vn = (function n(t) {
                function e(n) {
                    return 1 === t ? new cn(n) : new pn(n, t)
                }
                return (
                    (e.beta = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0.85)
            function gn(n, t, e) {
                n._context.bezierCurveTo(
                    n._x1 + n._k * (n._x2 - n._x0),
                    n._y1 + n._k * (n._y2 - n._y0),
                    n._x2 + n._k * (n._x1 - t),
                    n._y2 + n._k * (n._y1 - e),
                    n._x2,
                    n._y2
                )
            }
            function yn(n, t) {
                ;(this._context = n), (this._k = (1 - t) / 6)
            }
            yn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2)
                            break
                        case 3:
                            gn(this, this._x1, this._y1)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                            break
                        case 1:
                            ;(this._point = 2), (this._x1 = n), (this._y1 = t)
                            break
                        case 2:
                            this._point = 3
                        default:
                            gn(this, n, t)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var bn = (function n(t) {
                function e(n) {
                    return new yn(n, t)
                }
                return (
                    (e.tension = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0)
            function _n(n, t) {
                ;(this._context = n), (this._k = (1 - t) / 6)
            }
            _n.prototype = {
                areaStart: on,
                areaEnd: on,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath()
                            break
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath()
                            break
                        case 3:
                            this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4),
                                this.point(this._x5, this._y5)
                    }
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), (this._x3 = n), (this._y3 = t)
                            break
                        case 1:
                            ;(this._point = 2), this._context.moveTo((this._x4 = n), (this._y4 = t))
                            break
                        case 2:
                            ;(this._point = 3), (this._x5 = n), (this._y5 = t)
                            break
                        default:
                            gn(this, n, t)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var mn = (function n(t) {
                function e(n) {
                    return new _n(n, t)
                }
                return (
                    (e.tension = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0)
            function xn(n, t) {
                ;(this._context = n), (this._k = (1 - t) / 6)
            }
            xn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._line
                                    ? this._context.lineTo(this._x2, this._y2)
                                    : this._context.moveTo(this._x2, this._y2)
                            break
                        case 3:
                            this._point = 4
                        default:
                            gn(this, n, t)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var wn = (function n(t) {
                function e(n) {
                    return new xn(n, t)
                }
                return (
                    (e.tension = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0)
            function Mn(n, t, e) {
                var r = n._x1,
                    i = n._y1,
                    u = n._x2,
                    o = n._y2
                if (n._l01_a > 1e-12) {
                    var a = 2 * n._l01_2a + 3 * n._l01_a * n._l12_a + n._l12_2a,
                        c = 3 * n._l01_a * (n._l01_a + n._l12_a)
                    ;(r = (r * a - n._x0 * n._l12_2a + n._x2 * n._l01_2a) / c),
                        (i = (i * a - n._y0 * n._l12_2a + n._y2 * n._l01_2a) / c)
                }
                if (n._l23_a > 1e-12) {
                    var f = 2 * n._l23_2a + 3 * n._l23_a * n._l12_a + n._l12_2a,
                        s = 3 * n._l23_a * (n._l23_a + n._l12_a)
                    ;(u = (u * f + n._x1 * n._l23_2a - t * n._l12_2a) / s),
                        (o = (o * f + n._y1 * n._l23_2a - e * n._l12_2a) / s)
                }
                n._context.bezierCurveTo(r, i, u, o, n._x2, n._y2)
            }
            function Nn(n, t) {
                ;(this._context = n), (this._alpha = t)
            }
            Nn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2)
                            break
                        case 3:
                            this.point(this._x2, this._y2)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    if (((n = +n), (t = +t), this._point)) {
                        var e = this._x2 - n,
                            r = this._y2 - t
                        this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)))
                    }
                    switch (this._point) {
                        case 0:
                            ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            this._point = 3
                        default:
                            Mn(this, n, t)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var An = (function n(t) {
                function e(n) {
                    return t ? new Nn(n, t) : new yn(n, 0)
                }
                return (
                    (e.alpha = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0.5)
            function Tn(n, t) {
                ;(this._context = n), (this._alpha = t)
            }
            Tn.prototype = {
                areaStart: on,
                areaEnd: on,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath()
                            break
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath()
                            break
                        case 3:
                            this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4),
                                this.point(this._x5, this._y5)
                    }
                },
                point: function(n, t) {
                    if (((n = +n), (t = +t), this._point)) {
                        var e = this._x2 - n,
                            r = this._y2 - t
                        this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)))
                    }
                    switch (this._point) {
                        case 0:
                            ;(this._point = 1), (this._x3 = n), (this._y3 = t)
                            break
                        case 1:
                            ;(this._point = 2), this._context.moveTo((this._x4 = n), (this._y4 = t))
                            break
                        case 2:
                            ;(this._point = 3), (this._x5 = n), (this._y5 = t)
                            break
                        default:
                            Mn(this, n, t)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var kn = (function n(t) {
                function e(n) {
                    return t ? new Tn(n, t) : new _n(n, 0)
                }
                return (
                    (e.alpha = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0.5)
            function Sn(n, t) {
                ;(this._context = n), (this._alpha = t)
            }
            Sn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    if (((n = +n), (t = +t), this._point)) {
                        var e = this._x2 - n,
                            r = this._y2 - t
                        this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + r * r, this._alpha)))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._line
                                    ? this._context.lineTo(this._x2, this._y2)
                                    : this._context.moveTo(this._x2, this._y2)
                            break
                        case 3:
                            this._point = 4
                        default:
                            Mn(this, n, t)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = n),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = t)
                },
            }
            var En = (function n(t) {
                function e(n) {
                    return t ? new Sn(n, t) : new xn(n, 0)
                }
                return (
                    (e.alpha = function(t) {
                        return n(+t)
                    }),
                    e
                )
            })(0.5)
            function Cn(n) {
                this._context = n
            }
            Cn.prototype = {
                areaStart: on,
                areaEnd: on,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(n, t) {
                    ;(n = +n),
                        (t = +t),
                        this._point ? this._context.lineTo(n, t) : ((this._point = 1), this._context.moveTo(n, t))
                },
            }
            var On = function(n) {
                return new Cn(n)
            }
            function zn(n) {
                return n < 0 ? -1 : 1
            }
            function Pn(n, t, e) {
                var r = n._x1 - n._x0,
                    i = t - n._x1,
                    u = (n._y1 - n._y0) / (r || (i < 0 && -0)),
                    o = (e - n._y1) / (i || (r < 0 && -0)),
                    a = (u * i + o * r) / (r + i)
                return (zn(u) + zn(o)) * Math.min(Math.abs(u), Math.abs(o), 0.5 * Math.abs(a)) || 0
            }
            function Rn(n, t) {
                var e = n._x1 - n._x0
                return e ? ((3 * (n._y1 - n._y0)) / e - t) / 2 : t
            }
            function jn(n, t, e) {
                var r = n._x0,
                    i = n._y0,
                    u = n._x1,
                    o = n._y1,
                    a = (u - r) / 3
                n._context.bezierCurveTo(r + a, i + a * t, u - a, o - a * e, u, o)
            }
            function Dn(n) {
                this._context = n
            }
            function qn(n) {
                this._context = new Ln(n)
            }
            function Ln(n) {
                this._context = n
            }
            function Un(n) {
                return new Dn(n)
            }
            function Bn(n) {
                return new qn(n)
            }
            function Yn(n) {
                this._context = n
            }
            function Fn(n) {
                var t,
                    e,
                    r = n.length - 1,
                    i = new Array(r),
                    u = new Array(r),
                    o = new Array(r)
                for (i[0] = 0, u[0] = 2, o[0] = n[0] + 2 * n[1], t = 1; t < r - 1; ++t)
                    (i[t] = 1), (u[t] = 4), (o[t] = 4 * n[t] + 2 * n[t + 1])
                for (i[r - 1] = 2, u[r - 1] = 7, o[r - 1] = 8 * n[r - 1] + n[r], t = 1; t < r; ++t)
                    (e = i[t] / u[t - 1]), (u[t] -= e), (o[t] -= e * o[t - 1])
                for (i[r - 1] = o[r - 1] / u[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / u[t]
                for (u[r - 1] = (n[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) u[t] = 2 * n[t + 1] - i[t + 1]
                return [i, u]
            }
            ;(Dn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                            break
                        case 3:
                            jn(this, this._t0, Rn(this, this._t0))
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(n, t) {
                    var e = NaN
                    if (((t = +t), (n = +n) !== this._x1 || t !== this._y1)) {
                        switch (this._point) {
                            case 0:
                                ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                                break
                            case 1:
                                this._point = 2
                                break
                            case 2:
                                ;(this._point = 3), jn(this, Rn(this, (e = Pn(this, n, t))), e)
                                break
                            default:
                                jn(this, this._t0, (e = Pn(this, n, t)))
                        }
                        ;(this._x0 = this._x1), (this._x1 = n), (this._y0 = this._y1), (this._y1 = t), (this._t0 = e)
                    }
                },
            }),
                ((qn.prototype = Object.create(Dn.prototype)).point = function(n, t) {
                    Dn.prototype.point.call(this, t, n)
                }),
                (Ln.prototype = {
                    moveTo: function(n, t) {
                        this._context.moveTo(t, n)
                    },
                    closePath: function() {
                        this._context.closePath()
                    },
                    lineTo: function(n, t) {
                        this._context.lineTo(t, n)
                    },
                    bezierCurveTo: function(n, t, e, r, i, u) {
                        this._context.bezierCurveTo(t, n, r, e, u, i)
                    },
                }),
                (Yn.prototype = {
                    areaStart: function() {
                        this._line = 0
                    },
                    areaEnd: function() {
                        this._line = NaN
                    },
                    lineStart: function() {
                        ;(this._x = []), (this._y = [])
                    },
                    lineEnd: function() {
                        var n = this._x,
                            t = this._y,
                            e = n.length
                        if (e)
                            if (
                                (this._line ? this._context.lineTo(n[0], t[0]) : this._context.moveTo(n[0], t[0]),
                                2 === e)
                            )
                                this._context.lineTo(n[1], t[1])
                            else
                                for (var r = Fn(n), i = Fn(t), u = 0, o = 1; o < e; ++u, ++o)
                                    this._context.bezierCurveTo(r[0][u], i[0][u], r[1][u], i[1][u], n[o], t[o])
                        ;(this._line || (0 !== this._line && 1 === e)) && this._context.closePath(),
                            (this._line = 1 - this._line),
                            (this._x = this._y = null)
                    },
                    point: function(n, t) {
                        this._x.push(+n), this._y.push(+t)
                    },
                })
            var In = function(n) {
                return new Yn(n)
            }
            function Hn(n, t) {
                ;(this._context = n), (this._t = t)
            }
            Hn.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x = this._y = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
                        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
                        this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line))
                },
                point: function(n, t) {
                    switch (((n = +n), (t = +t), this._point)) {
                        case 0:
                            ;(this._point = 1), this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t)
                            break
                        case 1:
                            this._point = 2
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(n, t)
                            else {
                                var e = this._x * (1 - this._t) + n * this._t
                                this._context.lineTo(e, this._y), this._context.lineTo(e, t)
                            }
                    }
                    ;(this._x = n), (this._y = t)
                },
            }
            var Xn = function(n) {
                return new Hn(n, 0.5)
            }
            function Vn(n) {
                return new Hn(n, 0)
            }
            function Gn(n) {
                return new Hn(n, 1)
            }
            var $n = e(391),
                Wn = function(n, t) {
                    if ((i = n.length) > 1)
                        for (var e, r, i, u = 1, o = n[t[0]], a = o.length; u < i; ++u)
                            for (r = o, o = n[t[u]], e = 0; e < a; ++e)
                                o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
                },
                Zn = function(n) {
                    for (var t = n.length, e = new Array(t); --t >= 0; ) e[t] = t
                    return e
                }
            function Qn(n, t) {
                return n[t]
            }
            var Jn = function() {
                    var n = Object(i.a)([]),
                        t = Zn,
                        e = Wn,
                        r = Qn
                    function u(i) {
                        var u,
                            o,
                            a = n.apply(this, arguments),
                            c = i.length,
                            f = a.length,
                            s = new Array(f)
                        for (u = 0; u < f; ++u) {
                            for (var l, h = a[u], d = (s[u] = new Array(c)), p = 0; p < c; ++p)
                                (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p])
                            d.key = h
                        }
                        for (u = 0, o = t(s); u < f; ++u) s[o[u]].index = u
                        return e(s, o), s
                    }
                    return (
                        (u.keys = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : Object(i.a)($n.a.call(t))), u)
                                : n
                        }),
                        (u.value = function(n) {
                            return arguments.length ? ((r = 'function' == typeof n ? n : Object(i.a)(+n)), u) : r
                        }),
                        (u.order = function(n) {
                            return arguments.length
                                ? ((t = null == n ? Zn : 'function' == typeof n ? n : Object(i.a)($n.a.call(n))), u)
                                : t
                        }),
                        (u.offset = function(n) {
                            return arguments.length ? ((e = null == n ? Wn : n), u) : e
                        }),
                        u
                    )
                },
                Kn = function(n, t) {
                    if ((r = n.length) > 0) {
                        for (var e, r, i, u = 0, o = n[0].length; u < o; ++u) {
                            for (i = e = 0; e < r; ++e) i += n[e][u][1] || 0
                            if (i) for (e = 0; e < r; ++e) n[e][u][1] /= i
                        }
                        Wn(n, t)
                    }
                },
                nt = function(n, t) {
                    if ((a = n.length) > 0)
                        for (var e, r, i, u, o, a, c = 0, f = n[t[0]].length; c < f; ++c)
                            for (u = o = 0, e = 0; e < a; ++e)
                                (i = (r = n[t[e]][c])[1] - r[0]) > 0
                                    ? ((r[0] = u), (r[1] = u += i))
                                    : i < 0
                                    ? ((r[1] = o), (r[0] = o += i))
                                    : ((r[0] = 0), (r[1] = i))
                },
                tt = function(n, t) {
                    if ((e = n.length) > 0) {
                        for (var e, r = 0, i = n[t[0]], u = i.length; r < u; ++r) {
                            for (var o = 0, a = 0; o < e; ++o) a += n[o][r][1] || 0
                            i[r][1] += i[r][0] = -a / 2
                        }
                        Wn(n, t)
                    }
                },
                et = function(n, t) {
                    if ((i = n.length) > 0 && (r = (e = n[t[0]]).length) > 0) {
                        for (var e, r, i, u = 0, o = 1; o < r; ++o) {
                            for (var a = 0, c = 0, f = 0; a < i; ++a) {
                                for (
                                    var s = n[t[a]], l = s[o][1] || 0, h = (l - (s[o - 1][1] || 0)) / 2, d = 0;
                                    d < a;
                                    ++d
                                ) {
                                    var p = n[t[d]]
                                    h += (p[o][1] || 0) - (p[o - 1][1] || 0)
                                }
                                ;(c += l), (f += h * l)
                            }
                            ;(e[o - 1][1] += e[o - 1][0] = u), c && (u -= f / c)
                        }
                        ;(e[o - 1][1] += e[o - 1][0] = u), Wn(n, t)
                    }
                },
                rt = function(n) {
                    var t = n.map(it)
                    return Zn(n).sort(function(n, e) {
                        return t[n] - t[e]
                    })
                }
            function it(n) {
                for (var t, e = -1, r = 0, i = n.length, u = -1 / 0; ++e < i; ) (t = +n[e][1]) > u && ((u = t), (r = e))
                return r
            }
            var ut = function(n) {
                var t = n.map(ot)
                return Zn(n).sort(function(n, e) {
                    return t[n] - t[e]
                })
            }
            function ot(n) {
                for (var t, e = 0, r = -1, i = n.length; ++r < i; ) (t = +n[r][1]) && (e += t)
                return e
            }
            var at = function(n) {
                    return ut(n).reverse()
                },
                ct = function(n) {
                    var t,
                        e,
                        r = n.length,
                        i = n.map(ot),
                        u = rt(n),
                        o = 0,
                        a = 0,
                        c = [],
                        f = []
                    for (t = 0; t < r; ++t) (e = u[t]), o < a ? ((o += i[e]), c.push(e)) : ((a += i[e]), f.push(e))
                    return f.reverse().concat(c)
                },
                ft = function(n) {
                    return Zn(n).reverse()
                }
        },
        552: function(n, t, e) {
            'use strict'
            e.r(t),
                e.d(t, 'version', function() {
                    return r
                }),
                e.d(t, 'bisect', function() {
                    return i.b
                }),
                e.d(t, 'bisectRight', function() {
                    return i.d
                }),
                e.d(t, 'bisectLeft', function() {
                    return i.c
                }),
                e.d(t, 'ascending', function() {
                    return i.a
                }),
                e.d(t, 'bisector', function() {
                    return i.e
                }),
                e.d(t, 'cross', function() {
                    return i.f
                }),
                e.d(t, 'descending', function() {
                    return i.g
                }),
                e.d(t, 'deviation', function() {
                    return i.h
                }),
                e.d(t, 'extent', function() {
                    return i.i
                }),
                e.d(t, 'histogram', function() {
                    return i.j
                }),
                e.d(t, 'thresholdFreedmanDiaconis', function() {
                    return i.w
                }),
                e.d(t, 'thresholdScott', function() {
                    return i.x
                }),
                e.d(t, 'thresholdSturges', function() {
                    return i.y
                }),
                e.d(t, 'max', function() {
                    return i.k
                }),
                e.d(t, 'mean', function() {
                    return i.l
                }),
                e.d(t, 'median', function() {
                    return i.m
                }),
                e.d(t, 'merge', function() {
                    return i.n
                }),
                e.d(t, 'min', function() {
                    return i.o
                }),
                e.d(t, 'pairs', function() {
                    return i.p
                }),
                e.d(t, 'permute', function() {
                    return i.q
                }),
                e.d(t, 'quantile', function() {
                    return i.r
                }),
                e.d(t, 'range', function() {
                    return i.s
                }),
                e.d(t, 'scan', function() {
                    return i.t
                }),
                e.d(t, 'shuffle', function() {
                    return i.u
                }),
                e.d(t, 'sum', function() {
                    return i.v
                }),
                e.d(t, 'ticks', function() {
                    return i.B
                }),
                e.d(t, 'tickIncrement', function() {
                    return i.z
                }),
                e.d(t, 'tickStep', function() {
                    return i.A
                }),
                e.d(t, 'transpose', function() {
                    return i.C
                }),
                e.d(t, 'variance', function() {
                    return i.D
                }),
                e.d(t, 'zip', function() {
                    return i.E
                }),
                e.d(t, 'axisTop', function() {
                    return d
                }),
                e.d(t, 'axisRight', function() {
                    return p
                }),
                e.d(t, 'axisBottom', function() {
                    return v
                }),
                e.d(t, 'axisLeft', function() {
                    return g
                }),
                e.d(t, 'brush', function() {
                    return Lr
                }),
                e.d(t, 'brushX', function() {
                    return Dr
                }),
                e.d(t, 'brushY', function() {
                    return qr
                }),
                e.d(t, 'brushSelection', function() {
                    return jr
                }),
                e.d(t, 'chord', function() {
                    return Gr
                }),
                e.d(t, 'ribbon', function() {
                    return ei
                }),
                e.d(t, 'nest', function() {
                    return oi
                }),
                e.d(t, 'set', function() {
                    return pi
                }),
                e.d(t, 'map', function() {
                    return ui
                }),
                e.d(t, 'keys', function() {
                    return vi
                }),
                e.d(t, 'values', function() {
                    return gi
                }),
                e.d(t, 'entries', function() {
                    return yi
                }),
                e.d(t, 'color', function() {
                    return rt
                }),
                e.d(t, 'rgb', function() {
                    return at
                }),
                e.d(t, 'hsl', function() {
                    return pt
                }),
                e.d(t, 'lab', function() {
                    return wi
                }),
                e.d(t, 'hcl', function() {
                    return Ci
                }),
                e.d(t, 'lch', function() {
                    return Ei
                }),
                e.d(t, 'gray', function() {
                    return xi
                }),
                e.d(t, 'cubehelix', function() {
                    return Ui
                }),
                e.d(t, 'contours', function() {
                    return Wi
                }),
                e.d(t, 'contourDensity', function() {
                    return tu
                }),
                e.d(t, 'dispatch', function() {
                    return M
                }),
                e.d(t, 'drag', function() {
                    return cu
                }),
                e.d(t, 'dragDisable', function() {
                    return Un
                }),
                e.d(t, 'dragEnable', function() {
                    return Bn
                }),
                e.d(t, 'dsvFormat', function() {
                    return vu
                }),
                e.d(t, 'csvParse', function() {
                    return yu
                }),
                e.d(t, 'csvParseRows', function() {
                    return bu
                }),
                e.d(t, 'csvFormat', function() {
                    return _u
                }),
                e.d(t, 'csvFormatBody', function() {
                    return mu
                }),
                e.d(t, 'csvFormatRows', function() {
                    return xu
                }),
                e.d(t, 'csvFormatRow', function() {
                    return wu
                }),
                e.d(t, 'csvFormatValue', function() {
                    return Mu
                }),
                e.d(t, 'tsvParse', function() {
                    return Au
                }),
                e.d(t, 'tsvParseRows', function() {
                    return Tu
                }),
                e.d(t, 'tsvFormat', function() {
                    return ku
                }),
                e.d(t, 'tsvFormatBody', function() {
                    return Su
                }),
                e.d(t, 'tsvFormatRows', function() {
                    return Eu
                }),
                e.d(t, 'tsvFormatRow', function() {
                    return Cu
                }),
                e.d(t, 'tsvFormatValue', function() {
                    return Ou
                }),
                e.d(t, 'autoType', function() {
                    return zu
                }),
                e.d(t, 'easeLinear', function() {
                    return Ru
                }),
                e.d(t, 'easeQuad', function() {
                    return qu
                }),
                e.d(t, 'easeQuadIn', function() {
                    return ju
                }),
                e.d(t, 'easeQuadOut', function() {
                    return Du
                }),
                e.d(t, 'easeQuadInOut', function() {
                    return qu
                }),
                e.d(t, 'easeCubic', function() {
                    return ur
                }),
                e.d(t, 'easeCubicIn', function() {
                    return rr
                }),
                e.d(t, 'easeCubicOut', function() {
                    return ir
                }),
                e.d(t, 'easeCubicInOut', function() {
                    return ur
                }),
                e.d(t, 'easePoly', function() {
                    return Bu
                }),
                e.d(t, 'easePolyIn', function() {
                    return Lu
                }),
                e.d(t, 'easePolyOut', function() {
                    return Uu
                }),
                e.d(t, 'easePolyInOut', function() {
                    return Bu
                }),
                e.d(t, 'easeSin', function() {
                    return Xu
                }),
                e.d(t, 'easeSinIn', function() {
                    return Iu
                }),
                e.d(t, 'easeSinOut', function() {
                    return Hu
                }),
                e.d(t, 'easeSinInOut', function() {
                    return Xu
                }),
                e.d(t, 'easeExp', function() {
                    return $u
                }),
                e.d(t, 'easeExpIn', function() {
                    return Vu
                }),
                e.d(t, 'easeExpOut', function() {
                    return Gu
                }),
                e.d(t, 'easeExpInOut', function() {
                    return $u
                }),
                e.d(t, 'easeCircle', function() {
                    return Qu
                }),
                e.d(t, 'easeCircleIn', function() {
                    return Wu
                }),
                e.d(t, 'easeCircleOut', function() {
                    return Zu
                }),
                e.d(t, 'easeCircleInOut', function() {
                    return Qu
                }),
                e.d(t, 'easeBounce', function() {
                    return Ku
                }),
                e.d(t, 'easeBounceIn', function() {
                    return Ju
                }),
                e.d(t, 'easeBounceOut', function() {
                    return Ku
                }),
                e.d(t, 'easeBounceInOut', function() {
                    return no
                }),
                e.d(t, 'easeBack', function() {
                    return ro
                }),
                e.d(t, 'easeBackIn', function() {
                    return to
                }),
                e.d(t, 'easeBackOut', function() {
                    return eo
                }),
                e.d(t, 'easeBackInOut', function() {
                    return ro
                }),
                e.d(t, 'easeElastic', function() {
                    return oo
                }),
                e.d(t, 'easeElasticIn', function() {
                    return uo
                }),
                e.d(t, 'easeElasticOut', function() {
                    return oo
                }),
                e.d(t, 'easeElasticInOut', function() {
                    return ao
                }),
                e.d(t, 'blob', function() {
                    return fo
                }),
                e.d(t, 'buffer', function() {
                    return lo
                }),
                e.d(t, 'dsv', function() {
                    return go
                }),
                e.d(t, 'csv', function() {
                    return yo
                }),
                e.d(t, 'tsv', function() {
                    return bo
                }),
                e.d(t, 'image', function() {
                    return _o
                }),
                e.d(t, 'json', function() {
                    return xo
                }),
                e.d(t, 'text', function() {
                    return po
                }),
                e.d(t, 'xml', function() {
                    return Mo
                }),
                e.d(t, 'html', function() {
                    return No
                }),
                e.d(t, 'svg', function() {
                    return Ao
                }),
                e.d(t, 'forceCenter', function() {
                    return To
                }),
                e.d(t, 'forceCollide', function() {
                    return Uo
                }),
                e.d(t, 'forceLink', function() {
                    return Fo
                }),
                e.d(t, 'forceManyBody', function() {
                    return Go
                }),
                e.d(t, 'forceRadial', function() {
                    return $o
                }),
                e.d(t, 'forceSimulation', function() {
                    return Vo
                }),
                e.d(t, 'forceX', function() {
                    return Wo
                }),
                e.d(t, 'forceY', function() {
                    return Zo
                }),
                e.d(t, 'formatDefaultLocale', function() {
                    return ha
                }),
                e.d(t, 'format', function() {
                    return ia
                }),
                e.d(t, 'formatPrefix', function() {
                    return ua
                }),
                e.d(t, 'formatLocale', function() {
                    return la
                }),
                e.d(t, 'formatSpecifier', function() {
                    return na
                }),
                e.d(t, 'FormatSpecifier', function() {
                    return ta
                }),
                e.d(t, 'precisionFixed', function() {
                    return da
                }),
                e.d(t, 'precisionPrefix', function() {
                    return pa
                }),
                e.d(t, 'precisionRound', function() {
                    return va
                }),
                e.d(t, 'geoArea', function() {
                    return oc
                }),
                e.d(t, 'geoBounds', function() {
                    return Jc
                }),
                e.d(t, 'geoCentroid', function() {
                    return lf
                }),
                e.d(t, 'geoCircle', function() {
                    return wf
                }),
                e.d(t, 'geoClipAntimeridian', function() {
                    return Rf
                }),
                e.d(t, 'geoClipCircle', function() {
                    return jf
                }),
                e.d(t, 'geoClipExtent', function() {
                    return Bf
                }),
                e.d(t, 'geoClipRectangle', function() {
                    return Df
                }),
                e.d(t, 'geoContains', function() {
                    return is
                }),
                e.d(t, 'geoDistance', function() {
                    return Wf
                }),
                e.d(t, 'geoGraticule', function() {
                    return as
                }),
                e.d(t, 'geoGraticule10', function() {
                    return cs
                }),
                e.d(t, 'geoInterpolate', function() {
                    return ds
                }),
                e.d(t, 'geoLength', function() {
                    return Vf
                }),
                e.d(t, 'geoPath', function() {
                    return ll
                }),
                e.d(t, 'geoAlbers', function() {
                    return Cl
                }),
                e.d(t, 'geoAlbersUsa', function() {
                    return Ol
                }),
                e.d(t, 'geoAzimuthalEqualArea', function() {
                    return jl
                }),
                e.d(t, 'geoAzimuthalEqualAreaRaw', function() {
                    return Rl
                }),
                e.d(t, 'geoAzimuthalEquidistant', function() {
                    return ql
                }),
                e.d(t, 'geoAzimuthalEquidistantRaw', function() {
                    return Dl
                }),
                e.d(t, 'geoConicConformal', function() {
                    return Il
                }),
                e.d(t, 'geoConicConformalRaw', function() {
                    return Fl
                }),
                e.d(t, 'geoConicEqualArea', function() {
                    return El
                }),
                e.d(t, 'geoConicEqualAreaRaw', function() {
                    return Sl
                }),
                e.d(t, 'geoConicEquidistant', function() {
                    return Gl
                }),
                e.d(t, 'geoConicEquidistantRaw', function() {
                    return Vl
                }),
                e.d(t, 'geoEqualEarth', function() {
                    return nh
                }),
                e.d(t, 'geoEqualEarthRaw', function() {
                    return Kl
                }),
                e.d(t, 'geoEquirectangular', function() {
                    return Xl
                }),
                e.d(t, 'geoEquirectangularRaw', function() {
                    return Hl
                }),
                e.d(t, 'geoGnomonic', function() {
                    return eh
                }),
                e.d(t, 'geoGnomonicRaw', function() {
                    return th
                }),
                e.d(t, 'geoIdentity', function() {
                    return rh
                }),
                e.d(t, 'geoProjection', function() {
                    return Al
                }),
                e.d(t, 'geoProjectionMutator', function() {
                    return Tl
                }),
                e.d(t, 'geoMercator', function() {
                    return Ul
                }),
                e.d(t, 'geoMercatorRaw', function() {
                    return Ll
                }),
                e.d(t, 'geoNaturalEarth1', function() {
                    return uh
                }),
                e.d(t, 'geoNaturalEarth1Raw', function() {
                    return ih
                }),
                e.d(t, 'geoOrthographic', function() {
                    return ah
                }),
                e.d(t, 'geoOrthographicRaw', function() {
                    return oh
                }),
                e.d(t, 'geoStereographic', function() {
                    return fh
                }),
                e.d(t, 'geoStereographicRaw', function() {
                    return ch
                }),
                e.d(t, 'geoTransverseMercator', function() {
                    return lh
                }),
                e.d(t, 'geoTransverseMercatorRaw', function() {
                    return sh
                }),
                e.d(t, 'geoRotation', function() {
                    return _f
                }),
                e.d(t, 'geoStream', function() {
                    return Ja
                }),
                e.d(t, 'geoTransform', function() {
                    return hl
                }),
                e.d(t, 'cluster', function() {
                    return vh
                }),
                e.d(t, 'hierarchy', function() {
                    return yh
                }),
                e.d(t, 'pack', function() {
                    return Fh
                }),
                e.d(t, 'packSiblings', function() {
                    return Dh
                }),
                e.d(t, 'packEnclose', function() {
                    return Mh
                }),
                e.d(t, 'partition', function() {
                    return $h
                }),
                e.d(t, 'stratify', function() {
                    return Kh
                }),
                e.d(t, 'tree', function() {
                    return od
                }),
                e.d(t, 'treemap', function() {
                    return ld
                }),
                e.d(t, 'treemapBinary', function() {
                    return hd
                }),
                e.d(t, 'treemapDice', function() {
                    return Gh
                }),
                e.d(t, 'treemapSlice', function() {
                    return ad
                }),
                e.d(t, 'treemapSliceDice', function() {
                    return dd
                }),
                e.d(t, 'treemapSquarify', function() {
                    return sd
                }),
                e.d(t, 'treemapResquarify', function() {
                    return pd
                }),
                e.d(t, 'interpolate', function() {
                    return Yt
                }),
                e.d(t, 'interpolateArray', function() {
                    return Ot
                }),
                e.d(t, 'interpolateBasis', function() {
                    return bt
                }),
                e.d(t, 'interpolateBasisClosed', function() {
                    return _t
                }),
                e.d(t, 'interpolateDate', function() {
                    return Pt
                }),
                e.d(t, 'interpolateDiscrete', function() {
                    return vd
                }),
                e.d(t, 'interpolateHue', function() {
                    return gd
                }),
                e.d(t, 'interpolateNumber', function() {
                    return Rt
                }),
                e.d(t, 'interpolateNumberArray', function() {
                    return Et
                }),
                e.d(t, 'interpolateObject', function() {
                    return jt
                }),
                e.d(t, 'interpolateRound', function() {
                    return yd
                }),
                e.d(t, 'interpolateString', function() {
                    return Bt
                }),
                e.d(t, 'interpolateTransformCss', function() {
                    return Ne
                }),
                e.d(t, 'interpolateTransformSvg', function() {
                    return Ae
                }),
                e.d(t, 'interpolateZoom', function() {
                    return md
                }),
                e.d(t, 'interpolateRgb', function() {
                    return At
                }),
                e.d(t, 'interpolateRgbBasis', function() {
                    return kt
                }),
                e.d(t, 'interpolateRgbBasisClosed', function() {
                    return St
                }),
                e.d(t, 'interpolateHsl', function() {
                    return wd
                }),
                e.d(t, 'interpolateHslLong', function() {
                    return Md
                }),
                e.d(t, 'interpolateLab', function() {
                    return Nd
                }),
                e.d(t, 'interpolateHcl', function() {
                    return Td
                }),
                e.d(t, 'interpolateHclLong', function() {
                    return kd
                }),
                e.d(t, 'interpolateCubehelix', function() {
                    return Ed
                }),
                e.d(t, 'interpolateCubehelixLong', function() {
                    return Cd
                }),
                e.d(t, 'piecewise', function() {
                    return Od
                }),
                e.d(t, 'quantize', function() {
                    return zd
                }),
                e.d(t, 'path', function() {
                    return Pd.a
                }),
                e.d(t, 'polygonArea', function() {
                    return Rd
                }),
                e.d(t, 'polygonCentroid', function() {
                    return jd
                }),
                e.d(t, 'polygonHull', function() {
                    return Ld
                }),
                e.d(t, 'polygonContains', function() {
                    return Ud
                }),
                e.d(t, 'polygonLength', function() {
                    return Bd
                }),
                e.d(t, 'quadtree', function() {
                    return Po
                }),
                e.d(t, 'randomUniform', function() {
                    return Fd
                }),
                e.d(t, 'randomNormal', function() {
                    return Id
                }),
                e.d(t, 'randomLogNormal', function() {
                    return Hd
                }),
                e.d(t, 'randomBates', function() {
                    return Vd
                }),
                e.d(t, 'randomIrwinHall', function() {
                    return Xd
                }),
                e.d(t, 'randomExponential', function() {
                    return Gd
                }),
                e.d(t, 'scaleBand', function() {
                    return tp
                }),
                e.d(t, 'scalePoint', function() {
                    return rp
                }),
                e.d(t, 'scaleIdentity', function() {
                    return yp
                }),
                e.d(t, 'scaleLinear', function() {
                    return gp
                }),
                e.d(t, 'scaleLog', function() {
                    return Tp
                }),
                e.d(t, 'scaleSymlog', function() {
                    return Cp
                }),
                e.d(t, 'scaleOrdinal', function() {
                    return np
                }),
                e.d(t, 'scaleImplicit', function() {
                    return Kd
                }),
                e.d(t, 'scalePow', function() {
                    return jp
                }),
                e.d(t, 'scaleSqrt', function() {
                    return Dp
                }),
                e.d(t, 'scaleQuantile', function() {
                    return qp
                }),
                e.d(t, 'scaleQuantize', function() {
                    return Lp
                }),
                e.d(t, 'scaleThreshold', function() {
                    return Up
                }),
                e.d(t, 'scaleTime', function() {
                    return gy
                }),
                e.d(t, 'scaleUtc', function() {
                    return Ty
                }),
                e.d(t, 'scaleSequential', function() {
                    return Ey
                }),
                e.d(t, 'scaleSequentialLog', function() {
                    return Cy
                }),
                e.d(t, 'scaleSequentialPow', function() {
                    return zy
                }),
                e.d(t, 'scaleSequentialSqrt', function() {
                    return Py
                }),
                e.d(t, 'scaleSequentialSymlog', function() {
                    return Oy
                }),
                e.d(t, 'scaleSequentialQuantile', function() {
                    return Ry
                }),
                e.d(t, 'scaleDiverging', function() {
                    return Dy
                }),
                e.d(t, 'scaleDivergingLog', function() {
                    return qy
                }),
                e.d(t, 'scaleDivergingPow', function() {
                    return Uy
                }),
                e.d(t, 'scaleDivergingSqrt', function() {
                    return By
                }),
                e.d(t, 'scaleDivergingSymlog', function() {
                    return Ly
                }),
                e.d(t, 'tickFormat', function() {
                    return pp
                }),
                e.d(t, 'schemeCategory10', function() {
                    return Fy
                }),
                e.d(t, 'schemeAccent', function() {
                    return Iy
                }),
                e.d(t, 'schemeDark2', function() {
                    return Hy
                }),
                e.d(t, 'schemePaired', function() {
                    return Xy
                }),
                e.d(t, 'schemePastel1', function() {
                    return Vy
                }),
                e.d(t, 'schemePastel2', function() {
                    return Gy
                }),
                e.d(t, 'schemeSet1', function() {
                    return $y
                }),
                e.d(t, 'schemeSet2', function() {
                    return Wy
                }),
                e.d(t, 'schemeSet3', function() {
                    return Zy
                }),
                e.d(t, 'schemeTableau10', function() {
                    return Qy
                }),
                e.d(t, 'interpolateBrBG', function() {
                    return nb
                }),
                e.d(t, 'schemeBrBG', function() {
                    return Ky
                }),
                e.d(t, 'interpolatePRGn', function() {
                    return eb
                }),
                e.d(t, 'schemePRGn', function() {
                    return tb
                }),
                e.d(t, 'interpolatePiYG', function() {
                    return ib
                }),
                e.d(t, 'schemePiYG', function() {
                    return rb
                }),
                e.d(t, 'interpolatePuOr', function() {
                    return ob
                }),
                e.d(t, 'schemePuOr', function() {
                    return ub
                }),
                e.d(t, 'interpolateRdBu', function() {
                    return cb
                }),
                e.d(t, 'schemeRdBu', function() {
                    return ab
                }),
                e.d(t, 'interpolateRdGy', function() {
                    return sb
                }),
                e.d(t, 'schemeRdGy', function() {
                    return fb
                }),
                e.d(t, 'interpolateRdYlBu', function() {
                    return hb
                }),
                e.d(t, 'schemeRdYlBu', function() {
                    return lb
                }),
                e.d(t, 'interpolateRdYlGn', function() {
                    return pb
                }),
                e.d(t, 'schemeRdYlGn', function() {
                    return db
                }),
                e.d(t, 'interpolateSpectral', function() {
                    return gb
                }),
                e.d(t, 'schemeSpectral', function() {
                    return vb
                }),
                e.d(t, 'interpolateBuGn', function() {
                    return bb
                }),
                e.d(t, 'schemeBuGn', function() {
                    return yb
                }),
                e.d(t, 'interpolateBuPu', function() {
                    return mb
                }),
                e.d(t, 'schemeBuPu', function() {
                    return _b
                }),
                e.d(t, 'interpolateGnBu', function() {
                    return wb
                }),
                e.d(t, 'schemeGnBu', function() {
                    return xb
                }),
                e.d(t, 'interpolateOrRd', function() {
                    return Nb
                }),
                e.d(t, 'schemeOrRd', function() {
                    return Mb
                }),
                e.d(t, 'interpolatePuBuGn', function() {
                    return Tb
                }),
                e.d(t, 'schemePuBuGn', function() {
                    return Ab
                }),
                e.d(t, 'interpolatePuBu', function() {
                    return Sb
                }),
                e.d(t, 'schemePuBu', function() {
                    return kb
                }),
                e.d(t, 'interpolatePuRd', function() {
                    return Cb
                }),
                e.d(t, 'schemePuRd', function() {
                    return Eb
                }),
                e.d(t, 'interpolateRdPu', function() {
                    return zb
                }),
                e.d(t, 'schemeRdPu', function() {
                    return Ob
                }),
                e.d(t, 'interpolateYlGnBu', function() {
                    return Rb
                }),
                e.d(t, 'schemeYlGnBu', function() {
                    return Pb
                }),
                e.d(t, 'interpolateYlGn', function() {
                    return Db
                }),
                e.d(t, 'schemeYlGn', function() {
                    return jb
                }),
                e.d(t, 'interpolateYlOrBr', function() {
                    return Lb
                }),
                e.d(t, 'schemeYlOrBr', function() {
                    return qb
                }),
                e.d(t, 'interpolateYlOrRd', function() {
                    return Bb
                }),
                e.d(t, 'schemeYlOrRd', function() {
                    return Ub
                }),
                e.d(t, 'interpolateBlues', function() {
                    return Fb
                }),
                e.d(t, 'schemeBlues', function() {
                    return Yb
                }),
                e.d(t, 'interpolateGreens', function() {
                    return Hb
                }),
                e.d(t, 'schemeGreens', function() {
                    return Ib
                }),
                e.d(t, 'interpolateGreys', function() {
                    return Vb
                }),
                e.d(t, 'schemeGreys', function() {
                    return Xb
                }),
                e.d(t, 'interpolatePurples', function() {
                    return $b
                }),
                e.d(t, 'schemePurples', function() {
                    return Gb
                }),
                e.d(t, 'interpolateReds', function() {
                    return Zb
                }),
                e.d(t, 'schemeReds', function() {
                    return Wb
                }),
                e.d(t, 'interpolateOranges', function() {
                    return Jb
                }),
                e.d(t, 'schemeOranges', function() {
                    return Qb
                }),
                e.d(t, 'interpolateCividis', function() {
                    return Kb
                }),
                e.d(t, 'interpolateCubehelixDefault', function() {
                    return n_
                }),
                e.d(t, 'interpolateRainbow', function() {
                    return i_
                }),
                e.d(t, 'interpolateWarm', function() {
                    return t_
                }),
                e.d(t, 'interpolateCool', function() {
                    return e_
                }),
                e.d(t, 'interpolateSinebow', function() {
                    return c_
                }),
                e.d(t, 'interpolateTurbo', function() {
                    return f_
                }),
                e.d(t, 'interpolateViridis', function() {
                    return l_
                }),
                e.d(t, 'interpolateMagma', function() {
                    return h_
                }),
                e.d(t, 'interpolateInferno', function() {
                    return d_
                }),
                e.d(t, 'interpolatePlasma', function() {
                    return p_
                }),
                e.d(t, 'create', function() {
                    return v_
                }),
                e.d(t, 'creator', function() {
                    return gn
                }),
                e.d(t, 'local', function() {
                    return y_
                }),
                e.d(t, 'matcher', function() {
                    return S
                }),
                e.d(t, 'mouse', function() {
                    return Xt
                }),
                e.d(t, 'namespace', function() {
                    return D
                }),
                e.d(t, 'namespaces', function() {
                    return j
                }),
                e.d(t, 'clientPoint', function() {
                    return It
                }),
                e.d(t, 'select', function() {
                    return Dn
                }),
                e.d(t, 'selectAll', function() {
                    return __
                }),
                e.d(t, 'selection', function() {
                    return jn
                }),
                e.d(t, 'selector', function() {
                    return A
                }),
                e.d(t, 'selectorAll', function() {
                    return k
                }),
                e.d(t, 'style', function() {
                    return G
                }),
                e.d(t, 'touch', function() {
                    return Ht
                }),
                e.d(t, 'touches', function() {
                    return m_
                }),
                e.d(t, 'window', function() {
                    return I
                }),
                e.d(t, 'event', function() {
                    return wn
                }),
                e.d(t, 'customEvent', function() {
                    return Sn
                }),
                e.d(t, 'arc', function() {
                    return x_.a
                }),
                e.d(t, 'area', function() {
                    return x_.b
                }),
                e.d(t, 'line', function() {
                    return x_.v
                }),
                e.d(t, 'pie', function() {
                    return x_.A
                }),
                e.d(t, 'areaRadial', function() {
                    return x_.c
                }),
                e.d(t, 'radialArea', function() {
                    return x_.C
                }),
                e.d(t, 'lineRadial', function() {
                    return x_.w
                }),
                e.d(t, 'radialLine', function() {
                    return x_.D
                }),
                e.d(t, 'pointRadial', function() {
                    return x_.B
                }),
                e.d(t, 'linkHorizontal', function() {
                    return x_.x
                }),
                e.d(t, 'linkVertical', function() {
                    return x_.z
                }),
                e.d(t, 'linkRadial', function() {
                    return x_.y
                }),
                e.d(t, 'symbol', function() {
                    return x_.Q
                }),
                e.d(t, 'symbols', function() {
                    return x_.Y
                }),
                e.d(t, 'symbolCircle', function() {
                    return x_.R
                }),
                e.d(t, 'symbolCross', function() {
                    return x_.S
                }),
                e.d(t, 'symbolDiamond', function() {
                    return x_.T
                }),
                e.d(t, 'symbolSquare', function() {
                    return x_.U
                }),
                e.d(t, 'symbolStar', function() {
                    return x_.V
                }),
                e.d(t, 'symbolTriangle', function() {
                    return x_.W
                }),
                e.d(t, 'symbolWye', function() {
                    return x_.X
                }),
                e.d(t, 'curveBasisClosed', function() {
                    return x_.e
                }),
                e.d(t, 'curveBasisOpen', function() {
                    return x_.f
                }),
                e.d(t, 'curveBasis', function() {
                    return x_.d
                }),
                e.d(t, 'curveBundle', function() {
                    return x_.g
                }),
                e.d(t, 'curveCardinalClosed', function() {
                    return x_.i
                }),
                e.d(t, 'curveCardinalOpen', function() {
                    return x_.j
                }),
                e.d(t, 'curveCardinal', function() {
                    return x_.h
                }),
                e.d(t, 'curveCatmullRomClosed', function() {
                    return x_.l
                }),
                e.d(t, 'curveCatmullRomOpen', function() {
                    return x_.m
                }),
                e.d(t, 'curveCatmullRom', function() {
                    return x_.k
                }),
                e.d(t, 'curveLinearClosed', function() {
                    return x_.o
                }),
                e.d(t, 'curveLinear', function() {
                    return x_.n
                }),
                e.d(t, 'curveMonotoneX', function() {
                    return x_.p
                }),
                e.d(t, 'curveMonotoneY', function() {
                    return x_.q
                }),
                e.d(t, 'curveNatural', function() {
                    return x_.r
                }),
                e.d(t, 'curveStep', function() {
                    return x_.s
                }),
                e.d(t, 'curveStepAfter', function() {
                    return x_.t
                }),
                e.d(t, 'curveStepBefore', function() {
                    return x_.u
                }),
                e.d(t, 'stack', function() {
                    return x_.E
                }),
                e.d(t, 'stackOffsetExpand', function() {
                    return x_.G
                }),
                e.d(t, 'stackOffsetDiverging', function() {
                    return x_.F
                }),
                e.d(t, 'stackOffsetNone', function() {
                    return x_.H
                }),
                e.d(t, 'stackOffsetSilhouette', function() {
                    return x_.I
                }),
                e.d(t, 'stackOffsetWiggle', function() {
                    return x_.J
                }),
                e.d(t, 'stackOrderAppearance', function() {
                    return x_.K
                }),
                e.d(t, 'stackOrderAscending', function() {
                    return x_.L
                }),
                e.d(t, 'stackOrderDescending', function() {
                    return x_.M
                }),
                e.d(t, 'stackOrderInsideOut', function() {
                    return x_.N
                }),
                e.d(t, 'stackOrderNone', function() {
                    return x_.O
                }),
                e.d(t, 'stackOrderReverse', function() {
                    return x_.P
                }),
                e.d(t, 'timeInterval', function() {
                    return Fp
                }),
                e.d(t, 'timeMillisecond', function() {
                    return Mv
                }),
                e.d(t, 'timeMilliseconds', function() {
                    return Nv
                }),
                e.d(t, 'utcMillisecond', function() {
                    return Mv
                }),
                e.d(t, 'utcMilliseconds', function() {
                    return Nv
                }),
                e.d(t, 'timeSecond', function() {
                    return mv
                }),
                e.d(t, 'timeSeconds', function() {
                    return xv
                }),
                e.d(t, 'utcSecond', function() {
                    return mv
                }),
                e.d(t, 'utcSeconds', function() {
                    return xv
                }),
                e.d(t, 'timeMinute', function() {
                    return yv
                }),
                e.d(t, 'timeMinutes', function() {
                    return bv
                }),
                e.d(t, 'timeHour', function() {
                    return pv
                }),
                e.d(t, 'timeHours', function() {
                    return vv
                }),
                e.d(t, 'timeDay', function() {
                    return lv
                }),
                e.d(t, 'timeDays', function() {
                    return hv
                }),
                e.d(t, 'timeWeek', function() {
                    return Zp
                }),
                e.d(t, 'timeWeeks', function() {
                    return rv
                }),
                e.d(t, 'timeSunday', function() {
                    return Zp
                }),
                e.d(t, 'timeSundays', function() {
                    return rv
                }),
                e.d(t, 'timeMonday', function() {
                    return Qp
                }),
                e.d(t, 'timeMondays', function() {
                    return iv
                }),
                e.d(t, 'timeTuesday', function() {
                    return Jp
                }),
                e.d(t, 'timeTuesdays', function() {
                    return uv
                }),
                e.d(t, 'timeWednesday', function() {
                    return Kp
                }),
                e.d(t, 'timeWednesdays', function() {
                    return ov
                }),
                e.d(t, 'timeThursday', function() {
                    return nv
                }),
                e.d(t, 'timeThursdays', function() {
                    return av
                }),
                e.d(t, 'timeFriday', function() {
                    return tv
                }),
                e.d(t, 'timeFridays', function() {
                    return cv
                }),
                e.d(t, 'timeSaturday', function() {
                    return ev
                }),
                e.d(t, 'timeSaturdays', function() {
                    return fv
                }),
                e.d(t, 'timeMonth', function() {
                    return Gp
                }),
                e.d(t, 'timeMonths', function() {
                    return $p
                }),
                e.d(t, 'timeYear', function() {
                    return Hp
                }),
                e.d(t, 'timeYears', function() {
                    return Xp
                }),
                e.d(t, 'utcMinute', function() {
                    return Ny
                }),
                e.d(t, 'utcMinutes', function() {
                    return Ay
                }),
                e.d(t, 'utcHour', function() {
                    return xy
                }),
                e.d(t, 'utcHours', function() {
                    return wy
                }),
                e.d(t, 'utcDay', function() {
                    return Yv
                }),
                e.d(t, 'utcDays', function() {
                    return Fv
                }),
                e.d(t, 'utcWeek', function() {
                    return Tv
                }),
                e.d(t, 'utcWeeks', function() {
                    return Pv
                }),
                e.d(t, 'utcSunday', function() {
                    return Tv
                }),
                e.d(t, 'utcSundays', function() {
                    return Pv
                }),
                e.d(t, 'utcMonday', function() {
                    return kv
                }),
                e.d(t, 'utcMondays', function() {
                    return Rv
                }),
                e.d(t, 'utcTuesday', function() {
                    return Sv
                }),
                e.d(t, 'utcTuesdays', function() {
                    return jv
                }),
                e.d(t, 'utcWednesday', function() {
                    return Ev
                }),
                e.d(t, 'utcWednesdays', function() {
                    return Dv
                }),
                e.d(t, 'utcThursday', function() {
                    return Cv
                }),
                e.d(t, 'utcThursdays', function() {
                    return qv
                }),
                e.d(t, 'utcFriday', function() {
                    return Ov
                }),
                e.d(t, 'utcFridays', function() {
                    return Lv
                }),
                e.d(t, 'utcSaturday', function() {
                    return zv
                }),
                e.d(t, 'utcSaturdays', function() {
                    return Uv
                }),
                e.d(t, 'utcMonth', function() {
                    return by
                }),
                e.d(t, 'utcMonths', function() {
                    return _y
                }),
                e.d(t, 'utcYear', function() {
                    return Hv
                }),
                e.d(t, 'utcYears', function() {
                    return Xv
                }),
                e.d(t, 'timeFormatDefaultLocale', function() {
                    return hy
                }),
                e.d(t, 'timeFormat', function() {
                    return Qv
                }),
                e.d(t, 'timeParse', function() {
                    return Jv
                }),
                e.d(t, 'utcFormat', function() {
                    return Kv
                }),
                e.d(t, 'utcParse', function() {
                    return ng
                }),
                e.d(t, 'timeFormatLocale', function() {
                    return Wv
                }),
                e.d(t, 'isoFormat', function() {
                    return w_
                }),
                e.d(t, 'isoParse', function() {
                    return M_
                }),
                e.d(t, 'now', function() {
                    return ne
                }),
                e.d(t, 'timer', function() {
                    return re
                }),
                e.d(t, 'timerFlush', function() {
                    return ie
                }),
                e.d(t, 'timeout', function() {
                    return ce
                }),
                e.d(t, 'interval', function() {
                    return N_
                }),
                e.d(t, 'transition', function() {
                    return nr
                }),
                e.d(t, 'active', function() {
                    return fr
                }),
                e.d(t, 'interrupt', function() {
                    return _e
                }),
                e.d(t, 'voronoi', function() {
                    return fm
                }),
                e.d(t, 'zoom', function() {
                    return Mm
                }),
                e.d(t, 'zoomTransform', function() {
                    return pm
                }),
                e.d(t, 'zoomIdentity', function() {
                    return dm
                })
            var r = '5.16.0',
                i = e(313),
                u = Array.prototype.slice,
                o = function(n) {
                    return n
                }
            function a(n) {
                return 'translate(' + (n + 0.5) + ',0)'
            }
            function c(n) {
                return 'translate(0,' + (n + 0.5) + ')'
            }
            function f(n) {
                return function(t) {
                    return +n(t)
                }
            }
            function s(n) {
                var t = Math.max(0, n.bandwidth() - 1) / 2
                return (
                    n.round() && (t = Math.round(t)),
                    function(e) {
                        return +n(e) + t
                    }
                )
            }
            function l() {
                return !this.__axis
            }
            function h(n, t) {
                var e = [],
                    r = null,
                    i = null,
                    h = 6,
                    d = 6,
                    p = 3,
                    v = 1 === n || 4 === n ? -1 : 1,
                    g = 4 === n || 2 === n ? 'x' : 'y',
                    y = 1 === n || 3 === n ? a : c
                function b(u) {
                    var a = null == r ? (t.ticks ? t.ticks.apply(t, e) : t.domain()) : r,
                        c = null == i ? (t.tickFormat ? t.tickFormat.apply(t, e) : o) : i,
                        b = Math.max(h, 0) + p,
                        _ = t.range(),
                        m = +_[0] + 0.5,
                        x = +_[_.length - 1] + 0.5,
                        w = (t.bandwidth ? s : f)(t.copy()),
                        M = u.selection ? u.selection() : u,
                        N = M.selectAll('.domain').data([null]),
                        A = M.selectAll('.tick')
                            .data(a, t)
                            .order(),
                        T = A.exit(),
                        k = A.enter()
                            .append('g')
                            .attr('class', 'tick'),
                        S = A.select('line'),
                        E = A.select('text')
                    ;(N = N.merge(
                        N.enter()
                            .insert('path', '.tick')
                            .attr('class', 'domain')
                            .attr('stroke', 'currentColor')
                    )),
                        (A = A.merge(k)),
                        (S = S.merge(
                            k
                                .append('line')
                                .attr('stroke', 'currentColor')
                                .attr(g + '2', v * h)
                        )),
                        (E = E.merge(
                            k
                                .append('text')
                                .attr('fill', 'currentColor')
                                .attr(g, v * b)
                                .attr('dy', 1 === n ? '0em' : 3 === n ? '0.71em' : '0.32em')
                        )),
                        u !== M &&
                            ((N = N.transition(u)),
                            (A = A.transition(u)),
                            (S = S.transition(u)),
                            (E = E.transition(u)),
                            (T = T.transition(u)
                                .attr('opacity', 1e-6)
                                .attr('transform', function(n) {
                                    return isFinite((n = w(n))) ? y(n) : this.getAttribute('transform')
                                })),
                            k.attr('opacity', 1e-6).attr('transform', function(n) {
                                var t = this.parentNode.__axis
                                return y(t && isFinite((t = t(n))) ? t : w(n))
                            })),
                        T.remove(),
                        N.attr(
                            'd',
                            4 === n || 2 == n
                                ? d
                                    ? 'M' + v * d + ',' + m + 'H0.5V' + x + 'H' + v * d
                                    : 'M0.5,' + m + 'V' + x
                                : d
                                ? 'M' + m + ',' + v * d + 'V0.5H' + x + 'V' + v * d
                                : 'M' + m + ',0.5H' + x
                        ),
                        A.attr('opacity', 1).attr('transform', function(n) {
                            return y(w(n))
                        }),
                        S.attr(g + '2', v * h),
                        E.attr(g, v * b).text(c),
                        M.filter(l)
                            .attr('fill', 'none')
                            .attr('font-size', 10)
                            .attr('font-family', 'sans-serif')
                            .attr('text-anchor', 2 === n ? 'start' : 4 === n ? 'end' : 'middle'),
                        M.each(function() {
                            this.__axis = w
                        })
                }
                return (
                    (b.scale = function(n) {
                        return arguments.length ? ((t = n), b) : t
                    }),
                    (b.ticks = function() {
                        return (e = u.call(arguments)), b
                    }),
                    (b.tickArguments = function(n) {
                        return arguments.length ? ((e = null == n ? [] : u.call(n)), b) : e.slice()
                    }),
                    (b.tickValues = function(n) {
                        return arguments.length ? ((r = null == n ? null : u.call(n)), b) : r && r.slice()
                    }),
                    (b.tickFormat = function(n) {
                        return arguments.length ? ((i = n), b) : i
                    }),
                    (b.tickSize = function(n) {
                        return arguments.length ? ((h = d = +n), b) : h
                    }),
                    (b.tickSizeInner = function(n) {
                        return arguments.length ? ((h = +n), b) : h
                    }),
                    (b.tickSizeOuter = function(n) {
                        return arguments.length ? ((d = +n), b) : d
                    }),
                    (b.tickPadding = function(n) {
                        return arguments.length ? ((p = +n), b) : p
                    }),
                    b
                )
            }
            function d(n) {
                return h(1, n)
            }
            function p(n) {
                return h(2, n)
            }
            function v(n) {
                return h(3, n)
            }
            function g(n) {
                return h(4, n)
            }
            var y = { value: function() {} }
            function b() {
                for (var n, t = 0, e = arguments.length, r = {}; t < e; ++t) {
                    if (!(n = arguments[t] + '') || n in r || /[\s.]/.test(n)) throw new Error('illegal type: ' + n)
                    r[n] = []
                }
                return new _(r)
            }
            function _(n) {
                this._ = n
            }
            function m(n, t) {
                return n
                    .trim()
                    .split(/^|\s+/)
                    .map(function(n) {
                        var e = '',
                            r = n.indexOf('.')
                        if ((r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))), n && !t.hasOwnProperty(n)))
                            throw new Error('unknown type: ' + n)
                        return { type: n, name: e }
                    })
            }
            function x(n, t) {
                for (var e, r = 0, i = n.length; r < i; ++r) if ((e = n[r]).name === t) return e.value
            }
            function w(n, t, e) {
                for (var r = 0, i = n.length; r < i; ++r)
                    if (n[r].name === t) {
                        ;(n[r] = y), (n = n.slice(0, r).concat(n.slice(r + 1)))
                        break
                    }
                return null != e && n.push({ name: t, value: e }), n
            }
            _.prototype = b.prototype = {
                constructor: _,
                on: function(n, t) {
                    var e,
                        r = this._,
                        i = m(n + '', r),
                        u = -1,
                        o = i.length
                    if (!(arguments.length < 2)) {
                        if (null != t && 'function' != typeof t) throw new Error('invalid callback: ' + t)
                        for (; ++u < o; )
                            if ((e = (n = i[u]).type)) r[e] = w(r[e], n.name, t)
                            else if (null == t) for (e in r) r[e] = w(r[e], n.name, null)
                        return this
                    }
                    for (; ++u < o; ) if ((e = (n = i[u]).type) && (e = x(r[e], n.name))) return e
                },
                copy: function() {
                    var n = {},
                        t = this._
                    for (var e in t) n[e] = t[e].slice()
                    return new _(n)
                },
                call: function(n, t) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), u = 0; u < e; ++u) i[u] = arguments[u + 2]
                    if (!this._.hasOwnProperty(n)) throw new Error('unknown type: ' + n)
                    for (u = 0, e = (r = this._[n]).length; u < e; ++u) r[u].value.apply(t, i)
                },
                apply: function(n, t, e) {
                    if (!this._.hasOwnProperty(n)) throw new Error('unknown type: ' + n)
                    for (var r = this._[n], i = 0, u = r.length; i < u; ++i) r[i].value.apply(t, e)
                },
            }
            var M = b
            function N() {}
            var A = function(n) {
                return null == n
                    ? N
                    : function() {
                          return this.querySelector(n)
                      }
            }
            function T() {
                return []
            }
            var k = function(n) {
                    return null == n
                        ? T
                        : function() {
                              return this.querySelectorAll(n)
                          }
                },
                S = function(n) {
                    return function() {
                        return this.matches(n)
                    }
                },
                E = function(n) {
                    return new Array(n.length)
                }
            function C(n, t) {
                ;(this.ownerDocument = n.ownerDocument),
                    (this.namespaceURI = n.namespaceURI),
                    (this._next = null),
                    (this._parent = n),
                    (this.__data__ = t)
            }
            C.prototype = {
                constructor: C,
                appendChild: function(n) {
                    return this._parent.insertBefore(n, this._next)
                },
                insertBefore: function(n, t) {
                    return this._parent.insertBefore(n, t)
                },
                querySelector: function(n) {
                    return this._parent.querySelector(n)
                },
                querySelectorAll: function(n) {
                    return this._parent.querySelectorAll(n)
                },
            }
            function O(n, t, e, r, i, u) {
                for (var o, a = 0, c = t.length, f = u.length; a < f; ++a)
                    (o = t[a]) ? ((o.__data__ = u[a]), (r[a] = o)) : (e[a] = new C(n, u[a]))
                for (; a < c; ++a) (o = t[a]) && (i[a] = o)
            }
            function z(n, t, e, r, i, u, o) {
                var a,
                    c,
                    f,
                    s = {},
                    l = t.length,
                    h = u.length,
                    d = new Array(l)
                for (a = 0; a < l; ++a)
                    (c = t[a]) && ((d[a] = f = '$' + o.call(c, c.__data__, a, t)), f in s ? (i[a] = c) : (s[f] = c))
                for (a = 0; a < h; ++a)
                    (c = s[(f = '$' + o.call(n, u[a], a, u))])
                        ? ((r[a] = c), (c.__data__ = u[a]), (s[f] = null))
                        : (e[a] = new C(n, u[a]))
                for (a = 0; a < l; ++a) (c = t[a]) && s[d[a]] === c && (i[a] = c)
            }
            function P(n, t) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }
            var R = 'http://www.w3.org/1999/xhtml',
                j = {
                    svg: 'http://www.w3.org/2000/svg',
                    xhtml: R,
                    xlink: 'http://www.w3.org/1999/xlink',
                    xml: 'http://www.w3.org/XML/1998/namespace',
                    xmlns: 'http://www.w3.org/2000/xmlns/',
                },
                D = function(n) {
                    var t = (n += ''),
                        e = t.indexOf(':')
                    return (
                        e >= 0 && 'xmlns' !== (t = n.slice(0, e)) && (n = n.slice(e + 1)),
                        j.hasOwnProperty(t) ? { space: j[t], local: n } : n
                    )
                }
            function q(n) {
                return function() {
                    this.removeAttribute(n)
                }
            }
            function L(n) {
                return function() {
                    this.removeAttributeNS(n.space, n.local)
                }
            }
            function U(n, t) {
                return function() {
                    this.setAttribute(n, t)
                }
            }
            function B(n, t) {
                return function() {
                    this.setAttributeNS(n.space, n.local, t)
                }
            }
            function Y(n, t) {
                return function() {
                    var e = t.apply(this, arguments)
                    null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
                }
            }
            function F(n, t) {
                return function() {
                    var e = t.apply(this, arguments)
                    null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
                }
            }
            var I = function(n) {
                return (n.ownerDocument && n.ownerDocument.defaultView) || (n.document && n) || n.defaultView
            }
            function H(n) {
                return function() {
                    this.style.removeProperty(n)
                }
            }
            function X(n, t, e) {
                return function() {
                    this.style.setProperty(n, t, e)
                }
            }
            function V(n, t, e) {
                return function() {
                    var r = t.apply(this, arguments)
                    null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
                }
            }
            function G(n, t) {
                return (
                    n.style.getPropertyValue(t) ||
                    I(n)
                        .getComputedStyle(n, null)
                        .getPropertyValue(t)
                )
            }
            function $(n) {
                return function() {
                    delete this[n]
                }
            }
            function W(n, t) {
                return function() {
                    this[n] = t
                }
            }
            function Z(n, t) {
                return function() {
                    var e = t.apply(this, arguments)
                    null == e ? delete this[n] : (this[n] = e)
                }
            }
            function Q(n) {
                return n.trim().split(/^|\s+/)
            }
            function J(n) {
                return n.classList || new K(n)
            }
            function K(n) {
                ;(this._node = n), (this._names = Q(n.getAttribute('class') || ''))
            }
            function nn(n, t) {
                for (var e = J(n), r = -1, i = t.length; ++r < i; ) e.add(t[r])
            }
            function tn(n, t) {
                for (var e = J(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r])
            }
            function en(n) {
                return function() {
                    nn(this, n)
                }
            }
            function rn(n) {
                return function() {
                    tn(this, n)
                }
            }
            function un(n, t) {
                return function() {
                    ;(t.apply(this, arguments) ? nn : tn)(this, n)
                }
            }
            K.prototype = {
                add: function(n) {
                    this._names.indexOf(n) < 0 &&
                        (this._names.push(n), this._node.setAttribute('class', this._names.join(' ')))
                },
                remove: function(n) {
                    var t = this._names.indexOf(n)
                    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')))
                },
                contains: function(n) {
                    return this._names.indexOf(n) >= 0
                },
            }
            function on() {
                this.textContent = ''
            }
            function an(n) {
                return function() {
                    this.textContent = n
                }
            }
            function cn(n) {
                return function() {
                    var t = n.apply(this, arguments)
                    this.textContent = null == t ? '' : t
                }
            }
            function fn() {
                this.innerHTML = ''
            }
            function sn(n) {
                return function() {
                    this.innerHTML = n
                }
            }
            function ln(n) {
                return function() {
                    var t = n.apply(this, arguments)
                    this.innerHTML = null == t ? '' : t
                }
            }
            function hn() {
                this.nextSibling && this.parentNode.appendChild(this)
            }
            function dn() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }
            function pn(n) {
                return function() {
                    var t = this.ownerDocument,
                        e = this.namespaceURI
                    return e === R && t.documentElement.namespaceURI === R
                        ? t.createElement(n)
                        : t.createElementNS(e, n)
                }
            }
            function vn(n) {
                return function() {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                }
            }
            var gn = function(n) {
                var t = D(n)
                return (t.local ? vn : pn)(t)
            }
            function yn() {
                return null
            }
            function bn() {
                var n = this.parentNode
                n && n.removeChild(this)
            }
            function _n() {
                var n = this.cloneNode(!1),
                    t = this.parentNode
                return t ? t.insertBefore(n, this.nextSibling) : n
            }
            function mn() {
                var n = this.cloneNode(!0),
                    t = this.parentNode
                return t ? t.insertBefore(n, this.nextSibling) : n
            }
            var xn = {},
                wn = null
            'undefined' != typeof document &&
                ('onmouseenter' in document.documentElement ||
                    (xn = { mouseenter: 'mouseover', mouseleave: 'mouseout' }))
            function Mn(n, t, e) {
                return (
                    (n = Nn(n, t, e)),
                    function(t) {
                        var e = t.relatedTarget
                        ;(e && (e === this || 8 & e.compareDocumentPosition(this))) || n.call(this, t)
                    }
                )
            }
            function Nn(n, t, e) {
                return function(r) {
                    var i = wn
                    wn = r
                    try {
                        n.call(this, this.__data__, t, e)
                    } finally {
                        wn = i
                    }
                }
            }
            function An(n) {
                return n
                    .trim()
                    .split(/^|\s+/)
                    .map(function(n) {
                        var t = '',
                            e = n.indexOf('.')
                        return e >= 0 && ((t = n.slice(e + 1)), (n = n.slice(0, e))), { type: n, name: t }
                    })
            }
            function Tn(n) {
                return function() {
                    var t = this.__on
                    if (t) {
                        for (var e, r = 0, i = -1, u = t.length; r < u; ++r)
                            (e = t[r]),
                                (n.type && e.type !== n.type) || e.name !== n.name
                                    ? (t[++i] = e)
                                    : this.removeEventListener(e.type, e.listener, e.capture)
                        ++i ? (t.length = i) : delete this.__on
                    }
                }
            }
            function kn(n, t, e) {
                var r = xn.hasOwnProperty(n.type) ? Mn : Nn
                return function(i, u, o) {
                    var a,
                        c = this.__on,
                        f = r(t, u, o)
                    if (c)
                        for (var s = 0, l = c.length; s < l; ++s)
                            if ((a = c[s]).type === n.type && a.name === n.name)
                                return (
                                    this.removeEventListener(a.type, a.listener, a.capture),
                                    this.addEventListener(a.type, (a.listener = f), (a.capture = e)),
                                    void (a.value = t)
                                )
                    this.addEventListener(n.type, f, e),
                        (a = { type: n.type, name: n.name, value: t, listener: f, capture: e }),
                        c ? c.push(a) : (this.__on = [a])
                }
            }
            function Sn(n, t, e, r) {
                var i = wn
                ;(n.sourceEvent = wn), (wn = n)
                try {
                    return t.apply(e, r)
                } finally {
                    wn = i
                }
            }
            function En(n, t, e) {
                var r = I(n),
                    i = r.CustomEvent
                'function' == typeof i
                    ? (i = new i(t, e))
                    : ((i = r.document.createEvent('Event')),
                      e ? (i.initEvent(t, e.bubbles, e.cancelable), (i.detail = e.detail)) : i.initEvent(t, !1, !1)),
                    n.dispatchEvent(i)
            }
            function Cn(n, t) {
                return function() {
                    return En(this, n, t)
                }
            }
            function On(n, t) {
                return function() {
                    return En(this, n, t.apply(this, arguments))
                }
            }
            var zn = [null]
            function Pn(n, t) {
                ;(this._groups = n), (this._parents = t)
            }
            function Rn() {
                return new Pn([[document.documentElement]], zn)
            }
            Pn.prototype = Rn.prototype = {
                constructor: Pn,
                select: function(n) {
                    'function' != typeof n && (n = A(n))
                    for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o, a = t[i], c = a.length, f = (r[i] = new Array(c)), s = 0; s < c; ++s)
                            (u = a[s]) &&
                                (o = n.call(u, u.__data__, s, a)) &&
                                ('__data__' in u && (o.__data__ = u.__data__), (f[s] = o))
                    return new Pn(r, this._parents)
                },
                selectAll: function(n) {
                    'function' != typeof n && (n = k(n))
                    for (var t = this._groups, e = t.length, r = [], i = [], u = 0; u < e; ++u)
                        for (var o, a = t[u], c = a.length, f = 0; f < c; ++f)
                            (o = a[f]) && (r.push(n.call(o, o.__data__, f, a)), i.push(o))
                    return new Pn(r, i)
                },
                filter: function(n) {
                    'function' != typeof n && (n = S(n))
                    for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = t[i], a = o.length, c = (r[i] = []), f = 0; f < a; ++f)
                            (u = o[f]) && n.call(u, u.__data__, f, o) && c.push(u)
                    return new Pn(r, this._parents)
                },
                data: function(n, t) {
                    if (!n)
                        return (
                            (p = new Array(this.size())),
                            (s = -1),
                            this.each(function(n) {
                                p[++s] = n
                            }),
                            p
                        )
                    var e,
                        r = t ? z : O,
                        i = this._parents,
                        u = this._groups
                    'function' != typeof n &&
                        ((e = n),
                        (n = function() {
                            return e
                        }))
                    for (var o = u.length, a = new Array(o), c = new Array(o), f = new Array(o), s = 0; s < o; ++s) {
                        var l = i[s],
                            h = u[s],
                            d = h.length,
                            p = n.call(l, l && l.__data__, s, i),
                            v = p.length,
                            g = (c[s] = new Array(v)),
                            y = (a[s] = new Array(v))
                        r(l, h, g, y, (f[s] = new Array(d)), p, t)
                        for (var b, _, m = 0, x = 0; m < v; ++m)
                            if ((b = g[m])) {
                                for (m >= x && (x = m + 1); !(_ = y[x]) && ++x < v; );
                                b._next = _ || null
                            }
                    }
                    return ((a = new Pn(a, i))._enter = c), (a._exit = f), a
                },
                enter: function() {
                    return new Pn(this._enter || this._groups.map(E), this._parents)
                },
                exit: function() {
                    return new Pn(this._exit || this._groups.map(E), this._parents)
                },
                join: function(n, t, e) {
                    var r = this.enter(),
                        i = this,
                        u = this.exit()
                    return (
                        (r = 'function' == typeof n ? n(r) : r.append(n + '')),
                        null != t && (i = t(i)),
                        null == e ? u.remove() : e(u),
                        r && i ? r.merge(i).order() : i
                    )
                },
                merge: function(n) {
                    for (
                        var t = this._groups,
                            e = n._groups,
                            r = t.length,
                            i = e.length,
                            u = Math.min(r, i),
                            o = new Array(r),
                            a = 0;
                        a < u;
                        ++a
                    )
                        for (var c, f = t[a], s = e[a], l = f.length, h = (o[a] = new Array(l)), d = 0; d < l; ++d)
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) o[a] = t[a]
                    return new Pn(o, this._parents)
                },
                order: function() {
                    for (var n = this._groups, t = -1, e = n.length; ++t < e; )
                        for (var r, i = n[t], u = i.length - 1, o = i[u]; --u >= 0; )
                            (r = i[u]) &&
                                (o && 4 ^ r.compareDocumentPosition(o) && o.parentNode.insertBefore(r, o), (o = r))
                    return this
                },
                sort: function(n) {
                    function t(t, e) {
                        return t && e ? n(t.__data__, e.__data__) : !t - !e
                    }
                    n || (n = P)
                    for (var e = this._groups, r = e.length, i = new Array(r), u = 0; u < r; ++u) {
                        for (var o, a = e[u], c = a.length, f = (i[u] = new Array(c)), s = 0; s < c; ++s)
                            (o = a[s]) && (f[s] = o)
                        f.sort(t)
                    }
                    return new Pn(i, this._parents).order()
                },
                call: function() {
                    var n = arguments[0]
                    return (arguments[0] = this), n.apply(null, arguments), this
                },
                nodes: function() {
                    var n = new Array(this.size()),
                        t = -1
                    return (
                        this.each(function() {
                            n[++t] = this
                        }),
                        n
                    )
                },
                node: function() {
                    for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
                        for (var r = n[t], i = 0, u = r.length; i < u; ++i) {
                            var o = r[i]
                            if (o) return o
                        }
                    return null
                },
                size: function() {
                    var n = 0
                    return (
                        this.each(function() {
                            ++n
                        }),
                        n
                    )
                },
                empty: function() {
                    return !this.node()
                },
                each: function(n) {
                    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
                        for (var i, u = t[e], o = 0, a = u.length; o < a; ++o) (i = u[o]) && n.call(i, i.__data__, o, u)
                    return this
                },
                attr: function(n, t) {
                    var e = D(n)
                    if (arguments.length < 2) {
                        var r = this.node()
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each(
                        (null == t ? (e.local ? L : q) : 'function' == typeof t ? (e.local ? F : Y) : e.local ? B : U)(
                            e,
                            t
                        )
                    )
                },
                style: function(n, t, e) {
                    return arguments.length > 1
                        ? this.each((null == t ? H : 'function' == typeof t ? V : X)(n, t, null == e ? '' : e))
                        : G(this.node(), n)
                },
                property: function(n, t) {
                    return arguments.length > 1
                        ? this.each((null == t ? $ : 'function' == typeof t ? Z : W)(n, t))
                        : this.node()[n]
                },
                classed: function(n, t) {
                    var e = Q(n + '')
                    if (arguments.length < 2) {
                        for (var r = J(this.node()), i = -1, u = e.length; ++i < u; ) if (!r.contains(e[i])) return !1
                        return !0
                    }
                    return this.each(('function' == typeof t ? un : t ? en : rn)(e, t))
                },
                text: function(n) {
                    return arguments.length
                        ? this.each(null == n ? on : ('function' == typeof n ? cn : an)(n))
                        : this.node().textContent
                },
                html: function(n) {
                    return arguments.length
                        ? this.each(null == n ? fn : ('function' == typeof n ? ln : sn)(n))
                        : this.node().innerHTML
                },
                raise: function() {
                    return this.each(hn)
                },
                lower: function() {
                    return this.each(dn)
                },
                append: function(n) {
                    var t = 'function' == typeof n ? n : gn(n)
                    return this.select(function() {
                        return this.appendChild(t.apply(this, arguments))
                    })
                },
                insert: function(n, t) {
                    var e = 'function' == typeof n ? n : gn(n),
                        r = null == t ? yn : 'function' == typeof t ? t : A(t)
                    return this.select(function() {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    })
                },
                remove: function() {
                    return this.each(bn)
                },
                clone: function(n) {
                    return this.select(n ? mn : _n)
                },
                datum: function(n) {
                    return arguments.length ? this.property('__data__', n) : this.node().__data__
                },
                on: function(n, t, e) {
                    var r,
                        i,
                        u = An(n + ''),
                        o = u.length
                    if (!(arguments.length < 2)) {
                        for (a = t ? kn : Tn, null == e && (e = !1), r = 0; r < o; ++r) this.each(a(u[r], t, e))
                        return this
                    }
                    var a = this.node().__on
                    if (a)
                        for (var c, f = 0, s = a.length; f < s; ++f)
                            for (r = 0, c = a[f]; r < o; ++r)
                                if ((i = u[r]).type === c.type && i.name === c.name) return c.value
                },
                dispatch: function(n, t) {
                    return this.each(('function' == typeof t ? On : Cn)(n, t))
                },
            }
            var jn = Rn,
                Dn = function(n) {
                    return 'string' == typeof n
                        ? new Pn([[document.querySelector(n)]], [document.documentElement])
                        : new Pn([[n]], zn)
                }
            function qn() {
                wn.stopImmediatePropagation()
            }
            var Ln = function() {
                    wn.preventDefault(), wn.stopImmediatePropagation()
                },
                Un = function(n) {
                    var t = n.document.documentElement,
                        e = Dn(n).on('dragstart.drag', Ln, !0)
                    'onselectstart' in t
                        ? e.on('selectstart.drag', Ln, !0)
                        : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'))
                }
            function Bn(n, t) {
                var e = n.document.documentElement,
                    r = Dn(n).on('dragstart.drag', null)
                t &&
                    (r.on('click.drag', Ln, !0),
                    setTimeout(function() {
                        r.on('click.drag', null)
                    }, 0)),
                    'onselectstart' in e
                        ? r.on('selectstart.drag', null)
                        : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect)
            }
            var Yn = function(n, t, e) {
                ;(n.prototype = t.prototype = e), (e.constructor = n)
            }
            function Fn(n, t) {
                var e = Object.create(n.prototype)
                for (var r in t) e[r] = t[r]
                return e
            }
            function In() {}
            var Hn = '\\s*([+-]?\\d+)\\s*',
                Xn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
                Vn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                Gn = /^#([0-9a-f]{3,8})$/,
                $n = new RegExp('^rgb\\(' + [Hn, Hn, Hn] + '\\)$'),
                Wn = new RegExp('^rgb\\(' + [Vn, Vn, Vn] + '\\)$'),
                Zn = new RegExp('^rgba\\(' + [Hn, Hn, Hn, Xn] + '\\)$'),
                Qn = new RegExp('^rgba\\(' + [Vn, Vn, Vn, Xn] + '\\)$'),
                Jn = new RegExp('^hsl\\(' + [Xn, Vn, Vn] + '\\)$'),
                Kn = new RegExp('^hsla\\(' + [Xn, Vn, Vn, Xn] + '\\)$'),
                nt = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074,
                }
            function tt() {
                return this.rgb().formatHex()
            }
            function et() {
                return this.rgb().formatRgb()
            }
            function rt(n) {
                var t, e
                return (
                    (n = (n + '').trim().toLowerCase()),
                    (t = Gn.exec(n))
                        ? ((e = t[1].length),
                          (t = parseInt(t[1], 16)),
                          6 === e
                              ? it(t)
                              : 3 === e
                              ? new ct(
                                    ((t >> 8) & 15) | ((t >> 4) & 240),
                                    ((t >> 4) & 15) | (240 & t),
                                    ((15 & t) << 4) | (15 & t),
                                    1
                                )
                              : 8 === e
                              ? ut((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
                              : 4 === e
                              ? ut(
                                    ((t >> 12) & 15) | ((t >> 8) & 240),
                                    ((t >> 8) & 15) | ((t >> 4) & 240),
                                    ((t >> 4) & 15) | (240 & t),
                                    (((15 & t) << 4) | (15 & t)) / 255
                                )
                              : null)
                        : (t = $n.exec(n))
                        ? new ct(t[1], t[2], t[3], 1)
                        : (t = Wn.exec(n))
                        ? new ct((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
                        : (t = Zn.exec(n))
                        ? ut(t[1], t[2], t[3], t[4])
                        : (t = Qn.exec(n))
                        ? ut((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
                        : (t = Jn.exec(n))
                        ? ht(t[1], t[2] / 100, t[3] / 100, 1)
                        : (t = Kn.exec(n))
                        ? ht(t[1], t[2] / 100, t[3] / 100, t[4])
                        : nt.hasOwnProperty(n)
                        ? it(nt[n])
                        : 'transparent' === n
                        ? new ct(NaN, NaN, NaN, 0)
                        : null
                )
            }
            function it(n) {
                return new ct((n >> 16) & 255, (n >> 8) & 255, 255 & n, 1)
            }
            function ut(n, t, e, r) {
                return r <= 0 && (n = t = e = NaN), new ct(n, t, e, r)
            }
            function ot(n) {
                return n instanceof In || (n = rt(n)), n ? new ct((n = n.rgb()).r, n.g, n.b, n.opacity) : new ct()
            }
            function at(n, t, e, r) {
                return 1 === arguments.length ? ot(n) : new ct(n, t, e, null == r ? 1 : r)
            }
            function ct(n, t, e, r) {
                ;(this.r = +n), (this.g = +t), (this.b = +e), (this.opacity = +r)
            }
            function ft() {
                return '#' + lt(this.r) + lt(this.g) + lt(this.b)
            }
            function st() {
                var n = this.opacity
                return (
                    (1 === (n = isNaN(n) ? 1 : Math.max(0, Math.min(1, n))) ? 'rgb(' : 'rgba(') +
                    Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                    ', ' +
                    Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                    ', ' +
                    Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                    (1 === n ? ')' : ', ' + n + ')')
                )
            }
            function lt(n) {
                return ((n = Math.max(0, Math.min(255, Math.round(n) || 0))) < 16 ? '0' : '') + n.toString(16)
            }
            function ht(n, t, e, r) {
                return (
                    r <= 0 ? (n = t = e = NaN) : e <= 0 || e >= 1 ? (n = t = NaN) : t <= 0 && (n = NaN),
                    new vt(n, t, e, r)
                )
            }
            function dt(n) {
                if (n instanceof vt) return new vt(n.h, n.s, n.l, n.opacity)
                if ((n instanceof In || (n = rt(n)), !n)) return new vt()
                if (n instanceof vt) return n
                var t = (n = n.rgb()).r / 255,
                    e = n.g / 255,
                    r = n.b / 255,
                    i = Math.min(t, e, r),
                    u = Math.max(t, e, r),
                    o = NaN,
                    a = u - i,
                    c = (u + i) / 2
                return (
                    a
                        ? ((o = t === u ? (e - r) / a + 6 * (e < r) : e === u ? (r - t) / a + 2 : (t - e) / a + 4),
                          (a /= c < 0.5 ? u + i : 2 - u - i),
                          (o *= 60))
                        : (a = c > 0 && c < 1 ? 0 : o),
                    new vt(o, a, c, n.opacity)
                )
            }
            function pt(n, t, e, r) {
                return 1 === arguments.length ? dt(n) : new vt(n, t, e, null == r ? 1 : r)
            }
            function vt(n, t, e, r) {
                ;(this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +r)
            }
            function gt(n, t, e) {
                return (
                    255 * (n < 60 ? t + ((e - t) * n) / 60 : n < 180 ? e : n < 240 ? t + ((e - t) * (240 - n)) / 60 : t)
                )
            }
            function yt(n, t, e, r, i) {
                var u = n * n,
                    o = u * n
                return (
                    ((1 - 3 * n + 3 * u - o) * t + (4 - 6 * u + 3 * o) * e + (1 + 3 * n + 3 * u - 3 * o) * r + o * i) /
                    6
                )
            }
            Yn(In, rt, {
                copy: function(n) {
                    return Object.assign(new this.constructor(), this, n)
                },
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: tt,
                formatHex: tt,
                formatHsl: function() {
                    return dt(this).formatHsl()
                },
                formatRgb: et,
                toString: et,
            }),
                Yn(
                    ct,
                    at,
                    Fn(In, {
                        brighter: function(n) {
                            return (
                                (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
                                new ct(this.r * n, this.g * n, this.b * n, this.opacity)
                            )
                        },
                        darker: function(n) {
                            return (
                                (n = null == n ? 0.7 : Math.pow(0.7, n)),
                                new ct(this.r * n, this.g * n, this.b * n, this.opacity)
                            )
                        },
                        rgb: function() {
                            return this
                        },
                        displayable: function() {
                            return (
                                -0.5 <= this.r &&
                                this.r < 255.5 &&
                                -0.5 <= this.g &&
                                this.g < 255.5 &&
                                -0.5 <= this.b &&
                                this.b < 255.5 &&
                                0 <= this.opacity &&
                                this.opacity <= 1
                            )
                        },
                        hex: ft,
                        formatHex: ft,
                        formatRgb: st,
                        toString: st,
                    })
                ),
                Yn(
                    vt,
                    pt,
                    Fn(In, {
                        brighter: function(n) {
                            return (
                                (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
                                new vt(this.h, this.s, this.l * n, this.opacity)
                            )
                        },
                        darker: function(n) {
                            return (
                                (n = null == n ? 0.7 : Math.pow(0.7, n)),
                                new vt(this.h, this.s, this.l * n, this.opacity)
                            )
                        },
                        rgb: function() {
                            var n = (this.h % 360) + 360 * (this.h < 0),
                                t = isNaN(n) || isNaN(this.s) ? 0 : this.s,
                                e = this.l,
                                r = e + (e < 0.5 ? e : 1 - e) * t,
                                i = 2 * e - r
                            return new ct(
                                gt(n >= 240 ? n - 240 : n + 120, i, r),
                                gt(n, i, r),
                                gt(n < 120 ? n + 240 : n - 120, i, r),
                                this.opacity
                            )
                        },
                        displayable: function() {
                            return (
                                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                                0 <= this.l &&
                                this.l <= 1 &&
                                0 <= this.opacity &&
                                this.opacity <= 1
                            )
                        },
                        formatHsl: function() {
                            var n = this.opacity
                            return (
                                (1 === (n = isNaN(n) ? 1 : Math.max(0, Math.min(1, n))) ? 'hsl(' : 'hsla(') +
                                (this.h || 0) +
                                ', ' +
                                100 * (this.s || 0) +
                                '%, ' +
                                100 * (this.l || 0) +
                                '%' +
                                (1 === n ? ')' : ', ' + n + ')')
                            )
                        },
                    })
                )
            var bt = function(n) {
                    var t = n.length - 1
                    return function(e) {
                        var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), t - 1) : Math.floor(e * t),
                            i = n[r],
                            u = n[r + 1],
                            o = r > 0 ? n[r - 1] : 2 * i - u,
                            a = r < t - 1 ? n[r + 2] : 2 * u - i
                        return yt((e - r / t) * t, o, i, u, a)
                    }
                },
                _t = function(n) {
                    var t = n.length
                    return function(e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * t),
                            i = n[(r + t - 1) % t],
                            u = n[r % t],
                            o = n[(r + 1) % t],
                            a = n[(r + 2) % t]
                        return yt((e - r / t) * t, i, u, o, a)
                    }
                },
                mt = function(n) {
                    return function() {
                        return n
                    }
                }
            function xt(n, t) {
                return function(e) {
                    return n + e * t
                }
            }
            function wt(n, t) {
                var e = t - n
                return e ? xt(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : mt(isNaN(n) ? t : n)
            }
            function Mt(n) {
                return 1 == (n = +n)
                    ? Nt
                    : function(t, e) {
                          return e - t
                              ? (function(n, t, e) {
                                    return (
                                        (n = Math.pow(n, e)),
                                        (t = Math.pow(t, e) - n),
                                        (e = 1 / e),
                                        function(r) {
                                            return Math.pow(n + r * t, e)
                                        }
                                    )
                                })(t, e, n)
                              : mt(isNaN(t) ? e : t)
                      }
            }
            function Nt(n, t) {
                var e = t - n
                return e ? xt(n, e) : mt(isNaN(n) ? t : n)
            }
            var At = (function n(t) {
                var e = Mt(t)
                function r(n, t) {
                    var r = e((n = at(n)).r, (t = at(t)).r),
                        i = e(n.g, t.g),
                        u = e(n.b, t.b),
                        o = Nt(n.opacity, t.opacity)
                    return function(t) {
                        return (n.r = r(t)), (n.g = i(t)), (n.b = u(t)), (n.opacity = o(t)), n + ''
                    }
                }
                return (r.gamma = n), r
            })(1)
            function Tt(n) {
                return function(t) {
                    var e,
                        r,
                        i = t.length,
                        u = new Array(i),
                        o = new Array(i),
                        a = new Array(i)
                    for (e = 0; e < i; ++e) (r = at(t[e])), (u[e] = r.r || 0), (o[e] = r.g || 0), (a[e] = r.b || 0)
                    return (
                        (u = n(u)),
                        (o = n(o)),
                        (a = n(a)),
                        (r.opacity = 1),
                        function(n) {
                            return (r.r = u(n)), (r.g = o(n)), (r.b = a(n)), r + ''
                        }
                    )
                }
            }
            var kt = Tt(bt),
                St = Tt(_t),
                Et = function(n, t) {
                    t || (t = [])
                    var e,
                        r = n ? Math.min(t.length, n.length) : 0,
                        i = t.slice()
                    return function(u) {
                        for (e = 0; e < r; ++e) i[e] = n[e] * (1 - u) + t[e] * u
                        return i
                    }
                }
            function Ct(n) {
                return ArrayBuffer.isView(n) && !(n instanceof DataView)
            }
            var Ot = function(n, t) {
                return (Ct(t) ? Et : zt)(n, t)
            }
            function zt(n, t) {
                var e,
                    r = t ? t.length : 0,
                    i = n ? Math.min(r, n.length) : 0,
                    u = new Array(i),
                    o = new Array(r)
                for (e = 0; e < i; ++e) u[e] = Yt(n[e], t[e])
                for (; e < r; ++e) o[e] = t[e]
                return function(n) {
                    for (e = 0; e < i; ++e) o[e] = u[e](n)
                    return o
                }
            }
            var Pt = function(n, t) {
                    var e = new Date()
                    return (
                        (n = +n),
                        (t = +t),
                        function(r) {
                            return e.setTime(n * (1 - r) + t * r), e
                        }
                    )
                },
                Rt = function(n, t) {
                    return (
                        (n = +n),
                        (t = +t),
                        function(e) {
                            return n * (1 - e) + t * e
                        }
                    )
                },
                jt = function(n, t) {
                    var e,
                        r = {},
                        i = {}
                    for (e in ((null !== n && 'object' == typeof n) || (n = {}),
                    (null !== t && 'object' == typeof t) || (t = {}),
                    t))
                        e in n ? (r[e] = Yt(n[e], t[e])) : (i[e] = t[e])
                    return function(n) {
                        for (e in r) i[e] = r[e](n)
                        return i
                    }
                },
                Dt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                qt = new RegExp(Dt.source, 'g')
            var Lt,
                Ut,
                Bt = function(n, t) {
                    var e,
                        r,
                        i,
                        u = (Dt.lastIndex = qt.lastIndex = 0),
                        o = -1,
                        a = [],
                        c = []
                    for (n += '', t += ''; (e = Dt.exec(n)) && (r = qt.exec(t)); )
                        (i = r.index) > u && ((i = t.slice(u, i)), a[o] ? (a[o] += i) : (a[++o] = i)),
                            (e = e[0]) === (r = r[0])
                                ? a[o]
                                    ? (a[o] += r)
                                    : (a[++o] = r)
                                : ((a[++o] = null), c.push({ i: o, x: Rt(e, r) })),
                            (u = qt.lastIndex)
                    return (
                        u < t.length && ((i = t.slice(u)), a[o] ? (a[o] += i) : (a[++o] = i)),
                        a.length < 2
                            ? c[0]
                                ? (function(n) {
                                      return function(t) {
                                          return n(t) + ''
                                      }
                                  })(c[0].x)
                                : (function(n) {
                                      return function() {
                                          return n
                                      }
                                  })(t)
                            : ((t = c.length),
                              function(n) {
                                  for (var e, r = 0; r < t; ++r) a[(e = c[r]).i] = e.x(n)
                                  return a.join('')
                              })
                    )
                },
                Yt = function(n, t) {
                    var e,
                        r = typeof t
                    return null == t || 'boolean' === r
                        ? mt(t)
                        : ('number' === r
                              ? Rt
                              : 'string' === r
                              ? (e = rt(t))
                                  ? ((t = e), At)
                                  : Bt
                              : t instanceof rt
                              ? At
                              : t instanceof Date
                              ? Pt
                              : Ct(t)
                              ? Et
                              : Array.isArray(t)
                              ? zt
                              : ('function' != typeof t.valueOf && 'function' != typeof t.toString) || isNaN(t)
                              ? jt
                              : Rt)(n, t)
                },
                Ft = function() {
                    for (var n, t = wn; (n = t.sourceEvent); ) t = n
                    return t
                },
                It = function(n, t) {
                    var e = n.ownerSVGElement || n
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint()
                        return (
                            (r.x = t.clientX),
                            (r.y = t.clientY),
                            [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
                        )
                    }
                    var i = n.getBoundingClientRect()
                    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
                },
                Ht = function(n, t, e) {
                    arguments.length < 3 && ((e = t), (t = Ft().changedTouches))
                    for (var r, i = 0, u = t ? t.length : 0; i < u; ++i)
                        if ((r = t[i]).identifier === e) return It(n, r)
                    return null
                },
                Xt = function(n) {
                    var t = Ft()
                    return t.changedTouches && (t = t.changedTouches[0]), It(n, t)
                },
                Vt = 0,
                Gt = 0,
                $t = 0,
                Wt = 0,
                Zt = 0,
                Qt = 0,
                Jt = 'object' == typeof performance && performance.now ? performance : Date,
                Kt =
                    'object' == typeof window && window.requestAnimationFrame
                        ? window.requestAnimationFrame.bind(window)
                        : function(n) {
                              setTimeout(n, 17)
                          }
            function ne() {
                return Zt || (Kt(te), (Zt = Jt.now() + Qt))
            }
            function te() {
                Zt = 0
            }
            function ee() {
                this._call = this._time = this._next = null
            }
            function re(n, t, e) {
                var r = new ee()
                return r.restart(n, t, e), r
            }
            function ie() {
                ne(), ++Vt
                for (var n, t = Lt; t; ) (n = Zt - t._time) >= 0 && t._call.call(null, n), (t = t._next)
                --Vt
            }
            function ue() {
                ;(Zt = (Wt = Jt.now()) + Qt), (Vt = Gt = 0)
                try {
                    ie()
                } finally {
                    ;(Vt = 0),
                        (function() {
                            var n,
                                t,
                                e = Lt,
                                r = 1 / 0
                            for (; e; )
                                e._call
                                    ? (r > e._time && (r = e._time), (n = e), (e = e._next))
                                    : ((t = e._next), (e._next = null), (e = n ? (n._next = t) : (Lt = t)))
                            ;(Ut = n), ae(r)
                        })(),
                        (Zt = 0)
                }
            }
            function oe() {
                var n = Jt.now(),
                    t = n - Wt
                t > 1e3 && ((Qt -= t), (Wt = n))
            }
            function ae(n) {
                Vt ||
                    (Gt && (Gt = clearTimeout(Gt)),
                    n - Zt > 24
                        ? (n < 1 / 0 && (Gt = setTimeout(ue, n - Jt.now() - Qt)), $t && ($t = clearInterval($t)))
                        : ($t || ((Wt = Jt.now()), ($t = setInterval(oe, 1e3))), (Vt = 1), Kt(ue)))
            }
            ee.prototype = re.prototype = {
                constructor: ee,
                restart: function(n, t, e) {
                    if ('function' != typeof n) throw new TypeError('callback is not a function')
                    ;(e = (null == e ? ne() : +e) + (null == t ? 0 : +t)),
                        this._next || Ut === this || (Ut ? (Ut._next = this) : (Lt = this), (Ut = this)),
                        (this._call = n),
                        (this._time = e),
                        ae()
                },
                stop: function() {
                    this._call && ((this._call = null), (this._time = 1 / 0), ae())
                },
            }
            var ce = function(n, t, e) {
                    var r = new ee()
                    return (
                        (t = null == t ? 0 : +t),
                        r.restart(
                            function(e) {
                                r.stop(), n(e + t)
                            },
                            t,
                            e
                        ),
                        r
                    )
                },
                fe = M('start', 'end', 'cancel', 'interrupt'),
                se = [],
                le = function(n, t, e, r, i, u) {
                    var o = n.__transition
                    if (o) {
                        if (e in o) return
                    } else n.__transition = {}
                    !(function(n, t, e) {
                        var r,
                            i = n.__transition
                        function u(c) {
                            var f, s, l, h
                            if (1 !== e.state) return a()
                            for (f in i)
                                if ((h = i[f]).name === e.name) {
                                    if (3 === h.state) return ce(u)
                                    4 === h.state
                                        ? ((h.state = 6),
                                          h.timer.stop(),
                                          h.on.call('interrupt', n, n.__data__, h.index, h.group),
                                          delete i[f])
                                        : +f < t &&
                                          ((h.state = 6),
                                          h.timer.stop(),
                                          h.on.call('cancel', n, n.__data__, h.index, h.group),
                                          delete i[f])
                                }
                            if (
                                (ce(function() {
                                    3 === e.state && ((e.state = 4), e.timer.restart(o, e.delay, e.time), o(c))
                                }),
                                (e.state = 2),
                                e.on.call('start', n, n.__data__, e.index, e.group),
                                2 === e.state)
                            ) {
                                for (e.state = 3, r = new Array((l = e.tween.length)), f = 0, s = -1; f < l; ++f)
                                    (h = e.tween[f].value.call(n, n.__data__, e.index, e.group)) && (r[++s] = h)
                                r.length = s + 1
                            }
                        }
                        function o(t) {
                            for (
                                var i =
                                        t < e.duration
                                            ? e.ease.call(null, t / e.duration)
                                            : (e.timer.restart(a), (e.state = 5), 1),
                                    u = -1,
                                    o = r.length;
                                ++u < o;

                            )
                                r[u].call(n, i)
                            5 === e.state && (e.on.call('end', n, n.__data__, e.index, e.group), a())
                        }
                        function a() {
                            for (var r in ((e.state = 6), e.timer.stop(), delete i[t], i)) return
                            delete n.__transition
                        }
                        ;(i[t] = e),
                            (e.timer = re(
                                function(n) {
                                    ;(e.state = 1), e.timer.restart(u, e.delay, e.time), e.delay <= n && u(n - e.delay)
                                },
                                0,
                                e.time
                            ))
                    })(n, e, {
                        name: t,
                        index: r,
                        group: i,
                        on: fe,
                        tween: se,
                        time: u.time,
                        delay: u.delay,
                        duration: u.duration,
                        ease: u.ease,
                        timer: null,
                        state: 0,
                    })
                }
            function he(n, t) {
                var e = pe(n, t)
                if (e.state > 0) throw new Error('too late; already scheduled')
                return e
            }
            function de(n, t) {
                var e = pe(n, t)
                if (e.state > 3) throw new Error('too late; already running')
                return e
            }
            function pe(n, t) {
                var e = n.__transition
                if (!e || !(e = e[t])) throw new Error('transition not found')
                return e
            }
            var ve,
                ge,
                ye,
                be,
                _e = function(n, t) {
                    var e,
                        r,
                        i,
                        u = n.__transition,
                        o = !0
                    if (u) {
                        for (i in ((t = null == t ? null : t + ''), u))
                            (e = u[i]).name === t
                                ? ((r = e.state > 2 && e.state < 5),
                                  (e.state = 6),
                                  e.timer.stop(),
                                  e.on.call(r ? 'interrupt' : 'cancel', n, n.__data__, e.index, e.group),
                                  delete u[i])
                                : (o = !1)
                        o && delete n.__transition
                    }
                },
                me = 180 / Math.PI,
                xe = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
                we = function(n, t, e, r, i, u) {
                    var o, a, c
                    return (
                        (o = Math.sqrt(n * n + t * t)) && ((n /= o), (t /= o)),
                        (c = n * e + t * r) && ((e -= n * c), (r -= t * c)),
                        (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
                        n * r < t * e && ((n = -n), (t = -t), (c = -c), (o = -o)),
                        {
                            translateX: i,
                            translateY: u,
                            rotate: Math.atan2(t, n) * me,
                            skewX: Math.atan(c) * me,
                            scaleX: o,
                            scaleY: a,
                        }
                    )
                }
            function Me(n, t, e, r) {
                function i(n) {
                    return n.length ? n.pop() + ' ' : ''
                }
                return function(u, o) {
                    var a = [],
                        c = []
                    return (
                        (u = n(u)),
                        (o = n(o)),
                        (function(n, r, i, u, o, a) {
                            if (n !== i || r !== u) {
                                var c = o.push('translate(', null, t, null, e)
                                a.push({ i: c - 4, x: Rt(n, i) }, { i: c - 2, x: Rt(r, u) })
                            } else (i || u) && o.push('translate(' + i + t + u + e)
                        })(u.translateX, u.translateY, o.translateX, o.translateY, a, c),
                        (function(n, t, e, u) {
                            n !== t
                                ? (n - t > 180 ? (t += 360) : t - n > 180 && (n += 360),
                                  u.push({ i: e.push(i(e) + 'rotate(', null, r) - 2, x: Rt(n, t) }))
                                : t && e.push(i(e) + 'rotate(' + t + r)
                        })(u.rotate, o.rotate, a, c),
                        (function(n, t, e, u) {
                            n !== t
                                ? u.push({ i: e.push(i(e) + 'skewX(', null, r) - 2, x: Rt(n, t) })
                                : t && e.push(i(e) + 'skewX(' + t + r)
                        })(u.skewX, o.skewX, a, c),
                        (function(n, t, e, r, u, o) {
                            if (n !== e || t !== r) {
                                var a = u.push(i(u) + 'scale(', null, ',', null, ')')
                                o.push({ i: a - 4, x: Rt(n, e) }, { i: a - 2, x: Rt(t, r) })
                            } else (1 === e && 1 === r) || u.push(i(u) + 'scale(' + e + ',' + r + ')')
                        })(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, c),
                        (u = o = null),
                        function(n) {
                            for (var t, e = -1, r = c.length; ++e < r; ) a[(t = c[e]).i] = t.x(n)
                            return a.join('')
                        }
                    )
                }
            }
            var Ne = Me(
                    function(n) {
                        return 'none' === n
                            ? xe
                            : (ve ||
                                  ((ve = document.createElement('DIV')),
                                  (ge = document.documentElement),
                                  (ye = document.defaultView)),
                              (ve.style.transform = n),
                              (n = ye.getComputedStyle(ge.appendChild(ve), null).getPropertyValue('transform')),
                              ge.removeChild(ve),
                              (n = n.slice(7, -1).split(',')),
                              we(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]))
                    },
                    'px, ',
                    'px)',
                    'deg)'
                ),
                Ae = Me(
                    function(n) {
                        return null == n
                            ? xe
                            : (be || (be = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
                              be.setAttribute('transform', n),
                              (n = be.transform.baseVal.consolidate())
                                  ? ((n = n.matrix), we(n.a, n.b, n.c, n.d, n.e, n.f))
                                  : xe)
                    },
                    ', ',
                    ')',
                    ')'
                )
            function Te(n, t) {
                var e, r
                return function() {
                    var i = de(this, n),
                        u = i.tween
                    if (u !== e)
                        for (var o = 0, a = (r = e = u).length; o < a; ++o)
                            if (r[o].name === t) {
                                ;(r = r.slice()).splice(o, 1)
                                break
                            }
                    i.tween = r
                }
            }
            function ke(n, t, e) {
                var r, i
                if ('function' != typeof e) throw new Error()
                return function() {
                    var u = de(this, n),
                        o = u.tween
                    if (o !== r) {
                        i = (r = o).slice()
                        for (var a = { name: t, value: e }, c = 0, f = i.length; c < f; ++c)
                            if (i[c].name === t) {
                                i[c] = a
                                break
                            }
                        c === f && i.push(a)
                    }
                    u.tween = i
                }
            }
            function Se(n, t, e) {
                var r = n._id
                return (
                    n.each(function() {
                        var n = de(this, r)
                        ;(n.value || (n.value = {}))[t] = e.apply(this, arguments)
                    }),
                    function(n) {
                        return pe(n, r).value[t]
                    }
                )
            }
            var Ee = function(n, t) {
                var e
                return ('number' == typeof t ? Rt : t instanceof rt ? At : (e = rt(t)) ? ((t = e), At) : Bt)(n, t)
            }
            function Ce(n) {
                return function() {
                    this.removeAttribute(n)
                }
            }
            function Oe(n) {
                return function() {
                    this.removeAttributeNS(n.space, n.local)
                }
            }
            function ze(n, t, e) {
                var r,
                    i,
                    u = e + ''
                return function() {
                    var o = this.getAttribute(n)
                    return o === u ? null : o === r ? i : (i = t((r = o), e))
                }
            }
            function Pe(n, t, e) {
                var r,
                    i,
                    u = e + ''
                return function() {
                    var o = this.getAttributeNS(n.space, n.local)
                    return o === u ? null : o === r ? i : (i = t((r = o), e))
                }
            }
            function Re(n, t, e) {
                var r, i, u
                return function() {
                    var o,
                        a,
                        c = e(this)
                    if (null != c)
                        return (o = this.getAttribute(n)) === (a = c + '')
                            ? null
                            : o === r && a === i
                            ? u
                            : ((i = a), (u = t((r = o), c)))
                    this.removeAttribute(n)
                }
            }
            function je(n, t, e) {
                var r, i, u
                return function() {
                    var o,
                        a,
                        c = e(this)
                    if (null != c)
                        return (o = this.getAttributeNS(n.space, n.local)) === (a = c + '')
                            ? null
                            : o === r && a === i
                            ? u
                            : ((i = a), (u = t((r = o), c)))
                    this.removeAttributeNS(n.space, n.local)
                }
            }
            function De(n, t) {
                return function(e) {
                    this.setAttribute(n, t.call(this, e))
                }
            }
            function qe(n, t) {
                return function(e) {
                    this.setAttributeNS(n.space, n.local, t.call(this, e))
                }
            }
            function Le(n, t) {
                var e, r
                function i() {
                    var i = t.apply(this, arguments)
                    return i !== r && (e = (r = i) && qe(n, i)), e
                }
                return (i._value = t), i
            }
            function Ue(n, t) {
                var e, r
                function i() {
                    var i = t.apply(this, arguments)
                    return i !== r && (e = (r = i) && De(n, i)), e
                }
                return (i._value = t), i
            }
            function Be(n, t) {
                return function() {
                    he(this, n).delay = +t.apply(this, arguments)
                }
            }
            function Ye(n, t) {
                return (
                    (t = +t),
                    function() {
                        he(this, n).delay = t
                    }
                )
            }
            function Fe(n, t) {
                return function() {
                    de(this, n).duration = +t.apply(this, arguments)
                }
            }
            function Ie(n, t) {
                return (
                    (t = +t),
                    function() {
                        de(this, n).duration = t
                    }
                )
            }
            function He(n, t) {
                if ('function' != typeof t) throw new Error()
                return function() {
                    de(this, n).ease = t
                }
            }
            function Xe(n, t, e) {
                var r,
                    i,
                    u = (function(n) {
                        return (n + '')
                            .trim()
                            .split(/^|\s+/)
                            .every(function(n) {
                                var t = n.indexOf('.')
                                return t >= 0 && (n = n.slice(0, t)), !n || 'start' === n
                            })
                    })(t)
                        ? he
                        : de
                return function() {
                    var o = u(this, n),
                        a = o.on
                    a !== r && (i = (r = a).copy()).on(t, e), (o.on = i)
                }
            }
            var Ve = jn.prototype.constructor
            function Ge(n) {
                return function() {
                    this.style.removeProperty(n)
                }
            }
            function $e(n, t, e) {
                return function(r) {
                    this.style.setProperty(n, t.call(this, r), e)
                }
            }
            function We(n, t, e) {
                var r, i
                function u() {
                    var u = t.apply(this, arguments)
                    return u !== i && (r = (i = u) && $e(n, u, e)), r
                }
                return (u._value = t), u
            }
            function Ze(n) {
                return function(t) {
                    this.textContent = n.call(this, t)
                }
            }
            function Qe(n) {
                var t, e
                function r() {
                    var r = n.apply(this, arguments)
                    return r !== e && (t = (e = r) && Ze(r)), t
                }
                return (r._value = n), r
            }
            var Je = 0
            function Ke(n, t, e, r) {
                ;(this._groups = n), (this._parents = t), (this._name = e), (this._id = r)
            }
            function nr(n) {
                return jn().transition(n)
            }
            function tr() {
                return ++Je
            }
            var er = jn.prototype
            function rr(n) {
                return n * n * n
            }
            function ir(n) {
                return --n * n * n + 1
            }
            function ur(n) {
                return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2
            }
            Ke.prototype = nr.prototype = {
                constructor: Ke,
                select: function(n) {
                    var t = this._name,
                        e = this._id
                    'function' != typeof n && (n = A(n))
                    for (var r = this._groups, i = r.length, u = new Array(i), o = 0; o < i; ++o)
                        for (var a, c, f = r[o], s = f.length, l = (u[o] = new Array(s)), h = 0; h < s; ++h)
                            (a = f[h]) &&
                                (c = n.call(a, a.__data__, h, f)) &&
                                ('__data__' in a && (c.__data__ = a.__data__),
                                (l[h] = c),
                                le(l[h], t, e, h, l, pe(a, e)))
                    return new Ke(u, this._parents, t, e)
                },
                selectAll: function(n) {
                    var t = this._name,
                        e = this._id
                    'function' != typeof n && (n = k(n))
                    for (var r = this._groups, i = r.length, u = [], o = [], a = 0; a < i; ++a)
                        for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
                            if ((c = f[l])) {
                                for (
                                    var h, d = n.call(c, c.__data__, l, f), p = pe(c, e), v = 0, g = d.length;
                                    v < g;
                                    ++v
                                )
                                    (h = d[v]) && le(h, t, e, v, d, p)
                                u.push(d), o.push(c)
                            }
                    return new Ke(u, o, t, e)
                },
                filter: function(n) {
                    'function' != typeof n && (n = S(n))
                    for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = t[i], a = o.length, c = (r[i] = []), f = 0; f < a; ++f)
                            (u = o[f]) && n.call(u, u.__data__, f, o) && c.push(u)
                    return new Ke(r, this._parents, this._name, this._id)
                },
                merge: function(n) {
                    if (n._id !== this._id) throw new Error()
                    for (
                        var t = this._groups,
                            e = n._groups,
                            r = t.length,
                            i = e.length,
                            u = Math.min(r, i),
                            o = new Array(r),
                            a = 0;
                        a < u;
                        ++a
                    )
                        for (var c, f = t[a], s = e[a], l = f.length, h = (o[a] = new Array(l)), d = 0; d < l; ++d)
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) o[a] = t[a]
                    return new Ke(o, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new Ve(this._groups, this._parents)
                },
                transition: function() {
                    for (var n = this._name, t = this._id, e = tr(), r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            if ((o = a[f])) {
                                var s = pe(o, t)
                                le(o, n, e, f, a, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease,
                                })
                            }
                    return new Ke(r, this._parents, n, e)
                },
                call: er.call,
                nodes: er.nodes,
                node: er.node,
                size: er.size,
                empty: er.empty,
                each: er.each,
                on: function(n, t) {
                    var e = this._id
                    return arguments.length < 2 ? pe(this.node(), e).on.on(n) : this.each(Xe(e, n, t))
                },
                attr: function(n, t) {
                    var e = D(n),
                        r = 'transform' === e ? Ae : Ee
                    return this.attrTween(
                        n,
                        'function' == typeof t
                            ? (e.local ? je : Re)(e, r, Se(this, 'attr.' + n, t))
                            : null == t
                            ? (e.local ? Oe : Ce)(e)
                            : (e.local ? Pe : ze)(e, r, t)
                    )
                },
                attrTween: function(n, t) {
                    var e = 'attr.' + n
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value
                    if (null == t) return this.tween(e, null)
                    if ('function' != typeof t) throw new Error()
                    var r = D(n)
                    return this.tween(e, (r.local ? Le : Ue)(r, t))
                },
                style: function(n, t, e) {
                    var r = 'transform' == (n += '') ? Ne : Ee
                    return null == t
                        ? this.styleTween(
                              n,
                              (function(n, t) {
                                  var e, r, i
                                  return function() {
                                      var u = G(this, n),
                                          o = (this.style.removeProperty(n), G(this, n))
                                      return u === o ? null : u === e && o === r ? i : (i = t((e = u), (r = o)))
                                  }
                              })(n, r)
                          ).on('end.style.' + n, Ge(n))
                        : 'function' == typeof t
                        ? this.styleTween(
                              n,
                              (function(n, t, e) {
                                  var r, i, u
                                  return function() {
                                      var o = G(this, n),
                                          a = e(this),
                                          c = a + ''
                                      return (
                                          null == a && (this.style.removeProperty(n), (c = a = G(this, n))),
                                          o === c ? null : o === r && c === i ? u : ((i = c), (u = t((r = o), a)))
                                      )
                                  }
                              })(n, r, Se(this, 'style.' + n, t))
                          ).each(
                              (function(n, t) {
                                  var e,
                                      r,
                                      i,
                                      u,
                                      o = 'style.' + t,
                                      a = 'end.' + o
                                  return function() {
                                      var c = de(this, n),
                                          f = c.on,
                                          s = null == c.value[o] ? u || (u = Ge(t)) : void 0
                                      ;(f === e && i === s) || (r = (e = f).copy()).on(a, (i = s)), (c.on = r)
                                  }
                              })(this._id, n)
                          )
                        : this.styleTween(
                              n,
                              (function(n, t, e) {
                                  var r,
                                      i,
                                      u = e + ''
                                  return function() {
                                      var o = G(this, n)
                                      return o === u ? null : o === r ? i : (i = t((r = o), e))
                                  }
                              })(n, r, t),
                              e
                          ).on('end.style.' + n, null)
                },
                styleTween: function(n, t, e) {
                    var r = 'style.' + (n += '')
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value
                    if (null == t) return this.tween(r, null)
                    if ('function' != typeof t) throw new Error()
                    return this.tween(r, We(n, t, null == e ? '' : e))
                },
                text: function(n) {
                    return this.tween(
                        'text',
                        'function' == typeof n
                            ? (function(n) {
                                  return function() {
                                      var t = n(this)
                                      this.textContent = null == t ? '' : t
                                  }
                              })(Se(this, 'text', n))
                            : (function(n) {
                                  return function() {
                                      this.textContent = n
                                  }
                              })(null == n ? '' : n + '')
                    )
                },
                textTween: function(n) {
                    var t = 'text'
                    if (arguments.length < 1) return (t = this.tween(t)) && t._value
                    if (null == n) return this.tween(t, null)
                    if ('function' != typeof n) throw new Error()
                    return this.tween(t, Qe(n))
                },
                remove: function() {
                    return this.on(
                        'end.remove',
                        ((n = this._id),
                        function() {
                            var t = this.parentNode
                            for (var e in this.__transition) if (+e !== n) return
                            t && t.removeChild(this)
                        })
                    )
                    var n
                },
                tween: function(n, t) {
                    var e = this._id
                    if (((n += ''), arguments.length < 2)) {
                        for (var r, i = pe(this.node(), e).tween, u = 0, o = i.length; u < o; ++u)
                            if ((r = i[u]).name === n) return r.value
                        return null
                    }
                    return this.each((null == t ? Te : ke)(e, n, t))
                },
                delay: function(n) {
                    var t = this._id
                    return arguments.length
                        ? this.each(('function' == typeof n ? Be : Ye)(t, n))
                        : pe(this.node(), t).delay
                },
                duration: function(n) {
                    var t = this._id
                    return arguments.length
                        ? this.each(('function' == typeof n ? Fe : Ie)(t, n))
                        : pe(this.node(), t).duration
                },
                ease: function(n) {
                    var t = this._id
                    return arguments.length ? this.each(He(t, n)) : pe(this.node(), t).ease
                },
                end: function() {
                    var n,
                        t,
                        e = this,
                        r = e._id,
                        i = e.size()
                    return new Promise(function(u, o) {
                        var a = { value: o },
                            c = {
                                value: function() {
                                    0 == --i && u()
                                },
                            }
                        e.each(function() {
                            var e = de(this, r),
                                i = e.on
                            i !== n && ((t = (n = i).copy())._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)),
                                (e.on = t)
                        })
                    })
                },
            }
            var or = { time: null, delay: 0, duration: 250, ease: ur }
            function ar(n, t) {
                for (var e; !(e = n.__transition) || !(e = e[t]); ) if (!(n = n.parentNode)) return (or.time = ne()), or
                return e
            }
            ;(jn.prototype.interrupt = function(n) {
                return this.each(function() {
                    _e(this, n)
                })
            }),
                (jn.prototype.transition = function(n) {
                    var t, e
                    n instanceof Ke
                        ? ((t = n._id), (n = n._name))
                        : ((t = tr()), ((e = or).time = ne()), (n = null == n ? null : n + ''))
                    for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            (o = a[f]) && le(o, n, t, f, a, e || ar(o, t))
                    return new Ke(r, this._parents, n, t)
                })
            var cr = [null],
                fr = function(n, t) {
                    var e,
                        r,
                        i = n.__transition
                    if (i)
                        for (r in ((t = null == t ? null : t + ''), i))
                            if ((e = i[r]).state > 1 && e.name === t) return new Ke([[n]], cr, t, +r)
                    return null
                },
                sr = function(n) {
                    return function() {
                        return n
                    }
                },
                lr = function(n, t, e) {
                    ;(this.target = n), (this.type = t), (this.selection = e)
                }
            function hr() {
                wn.stopImmediatePropagation()
            }
            var dr = function() {
                    wn.preventDefault(), wn.stopImmediatePropagation()
                },
                pr = { name: 'drag' },
                vr = { name: 'space' },
                gr = { name: 'handle' },
                yr = { name: 'center' }
            function br(n) {
                return [+n[0], +n[1]]
            }
            function _r(n) {
                return [br(n[0]), br(n[1])]
            }
            function mr(n) {
                return function(t) {
                    return Ht(t, wn.touches, n)
                }
            }
            var xr = {
                    name: 'x',
                    handles: ['w', 'e'].map(Er),
                    input: function(n, t) {
                        return null == n
                            ? null
                            : [
                                  [+n[0], t[0][1]],
                                  [+n[1], t[1][1]],
                              ]
                    },
                    output: function(n) {
                        return n && [n[0][0], n[1][0]]
                    },
                },
                wr = {
                    name: 'y',
                    handles: ['n', 's'].map(Er),
                    input: function(n, t) {
                        return null == n
                            ? null
                            : [
                                  [t[0][0], +n[0]],
                                  [t[1][0], +n[1]],
                              ]
                    },
                    output: function(n) {
                        return n && [n[0][1], n[1][1]]
                    },
                },
                Mr = {
                    name: 'xy',
                    handles: ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(Er),
                    input: function(n) {
                        return null == n ? null : _r(n)
                    },
                    output: function(n) {
                        return n
                    },
                },
                Nr = {
                    overlay: 'crosshair',
                    selection: 'move',
                    n: 'ns-resize',
                    e: 'ew-resize',
                    s: 'ns-resize',
                    w: 'ew-resize',
                    nw: 'nwse-resize',
                    ne: 'nesw-resize',
                    se: 'nwse-resize',
                    sw: 'nesw-resize',
                },
                Ar = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
                Tr = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
                kr = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
                Sr = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 }
            function Er(n) {
                return { type: n }
            }
            function Cr() {
                return !wn.ctrlKey && !wn.button
            }
            function Or() {
                var n = this.ownerSVGElement || this
                return n.hasAttribute('viewBox')
                    ? [
                          [(n = n.viewBox.baseVal).x, n.y],
                          [n.x + n.width, n.y + n.height],
                      ]
                    : [
                          [0, 0],
                          [n.width.baseVal.value, n.height.baseVal.value],
                      ]
            }
            function zr() {
                return navigator.maxTouchPoints || 'ontouchstart' in this
            }
            function Pr(n) {
                for (; !n.__brush; ) if (!(n = n.parentNode)) return
                return n.__brush
            }
            function Rr(n) {
                return n[0][0] === n[1][0] || n[0][1] === n[1][1]
            }
            function jr(n) {
                var t = n.__brush
                return t ? t.dim.output(t.selection) : null
            }
            function Dr() {
                return Ur(xr)
            }
            function qr() {
                return Ur(wr)
            }
            var Lr = function() {
                return Ur(Mr)
            }
            function Ur(n) {
                var t,
                    e = Or,
                    r = Cr,
                    i = zr,
                    u = !0,
                    o = M('start', 'brush', 'end'),
                    a = 6
                function c(t) {
                    var e = t
                        .property('__brush', v)
                        .selectAll('.overlay')
                        .data([Er('overlay')])
                    e
                        .enter()
                        .append('rect')
                        .attr('class', 'overlay')
                        .attr('pointer-events', 'all')
                        .attr('cursor', Nr.overlay)
                        .merge(e)
                        .each(function() {
                            var n = Pr(this).extent
                            Dn(this)
                                .attr('x', n[0][0])
                                .attr('y', n[0][1])
                                .attr('width', n[1][0] - n[0][0])
                                .attr('height', n[1][1] - n[0][1])
                        }),
                        t
                            .selectAll('.selection')
                            .data([Er('selection')])
                            .enter()
                            .append('rect')
                            .attr('class', 'selection')
                            .attr('cursor', Nr.selection)
                            .attr('fill', '#777')
                            .attr('fill-opacity', 0.3)
                            .attr('stroke', '#fff')
                            .attr('shape-rendering', 'crispEdges')
                    var r = t.selectAll('.handle').data(n.handles, function(n) {
                        return n.type
                    })
                    r.exit().remove(),
                        r
                            .enter()
                            .append('rect')
                            .attr('class', function(n) {
                                return 'handle handle--' + n.type
                            })
                            .attr('cursor', function(n) {
                                return Nr[n.type]
                            }),
                        t
                            .each(f)
                            .attr('fill', 'none')
                            .attr('pointer-events', 'all')
                            .on('mousedown.brush', h)
                            .filter(i)
                            .on('touchstart.brush', h)
                            .on('touchmove.brush', d)
                            .on('touchend.brush touchcancel.brush', p)
                            .style('touch-action', 'none')
                            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                }
                function f() {
                    var n = Dn(this),
                        t = Pr(this).selection
                    t
                        ? (n
                              .selectAll('.selection')
                              .style('display', null)
                              .attr('x', t[0][0])
                              .attr('y', t[0][1])
                              .attr('width', t[1][0] - t[0][0])
                              .attr('height', t[1][1] - t[0][1]),
                          n
                              .selectAll('.handle')
                              .style('display', null)
                              .attr('x', function(n) {
                                  return 'e' === n.type[n.type.length - 1] ? t[1][0] - a / 2 : t[0][0] - a / 2
                              })
                              .attr('y', function(n) {
                                  return 's' === n.type[0] ? t[1][1] - a / 2 : t[0][1] - a / 2
                              })
                              .attr('width', function(n) {
                                  return 'n' === n.type || 's' === n.type ? t[1][0] - t[0][0] + a : a
                              })
                              .attr('height', function(n) {
                                  return 'e' === n.type || 'w' === n.type ? t[1][1] - t[0][1] + a : a
                              }))
                        : n
                              .selectAll('.selection,.handle')
                              .style('display', 'none')
                              .attr('x', null)
                              .attr('y', null)
                              .attr('width', null)
                              .attr('height', null)
                }
                function s(n, t, e) {
                    return (!e && n.__brush.emitter) || new l(n, t)
                }
                function l(n, t) {
                    ;(this.that = n), (this.args = t), (this.state = n.__brush), (this.active = 0)
                }
                function h() {
                    if ((!t || wn.touches) && r.apply(this, arguments)) {
                        var e,
                            i,
                            o,
                            a,
                            c,
                            l,
                            h,
                            d,
                            p,
                            v,
                            g,
                            y = this,
                            b = wn.target.__data__.type,
                            _ = 'selection' === (u && wn.metaKey ? (b = 'overlay') : b) ? pr : u && wn.altKey ? yr : gr,
                            m = n === wr ? null : kr[b],
                            x = n === xr ? null : Sr[b],
                            w = Pr(y),
                            M = w.extent,
                            N = w.selection,
                            A = M[0][0],
                            T = M[0][1],
                            k = M[1][0],
                            S = M[1][1],
                            E = 0,
                            C = 0,
                            O = m && x && u && wn.shiftKey,
                            z = wn.touches ? mr(wn.changedTouches[0].identifier) : Xt,
                            P = z(y),
                            R = P,
                            j = s(y, arguments, !0).beforestart()
                        'overlay' === b
                            ? (N && (p = !0),
                              (w.selection = N = [
                                  [(e = n === wr ? A : P[0]), (o = n === xr ? T : P[1])],
                                  [(c = n === wr ? k : e), (h = n === xr ? S : o)],
                              ]))
                            : ((e = N[0][0]), (o = N[0][1]), (c = N[1][0]), (h = N[1][1])),
                            (i = e),
                            (a = o),
                            (l = c),
                            (d = h)
                        var D = Dn(y).attr('pointer-events', 'none'),
                            q = D.selectAll('.overlay').attr('cursor', Nr[b])
                        if (wn.touches) (j.moved = U), (j.ended = Y)
                        else {
                            var L = Dn(wn.view)
                                .on('mousemove.brush', U, !0)
                                .on('mouseup.brush', Y, !0)
                            u && L.on('keydown.brush', F, !0).on('keyup.brush', I, !0), Un(wn.view)
                        }
                        hr(), _e(y), f.call(y), j.start()
                    }
                    function U() {
                        var n = z(y)
                        !O || v || g || (Math.abs(n[0] - R[0]) > Math.abs(n[1] - R[1]) ? (g = !0) : (v = !0)),
                            (R = n),
                            (p = !0),
                            dr(),
                            B()
                    }
                    function B() {
                        var n
                        switch (((E = R[0] - P[0]), (C = R[1] - P[1]), _)) {
                            case vr:
                            case pr:
                                m && ((E = Math.max(A - e, Math.min(k - c, E))), (i = e + E), (l = c + E)),
                                    x && ((C = Math.max(T - o, Math.min(S - h, C))), (a = o + C), (d = h + C))
                                break
                            case gr:
                                m < 0
                                    ? ((E = Math.max(A - e, Math.min(k - e, E))), (i = e + E), (l = c))
                                    : m > 0 && ((E = Math.max(A - c, Math.min(k - c, E))), (i = e), (l = c + E)),
                                    x < 0
                                        ? ((C = Math.max(T - o, Math.min(S - o, C))), (a = o + C), (d = h))
                                        : x > 0 && ((C = Math.max(T - h, Math.min(S - h, C))), (a = o), (d = h + C))
                                break
                            case yr:
                                m &&
                                    ((i = Math.max(A, Math.min(k, e - E * m))),
                                    (l = Math.max(A, Math.min(k, c + E * m)))),
                                    x &&
                                        ((a = Math.max(T, Math.min(S, o - C * x))),
                                        (d = Math.max(T, Math.min(S, h + C * x))))
                        }
                        l < i &&
                            ((m *= -1),
                            (n = e),
                            (e = c),
                            (c = n),
                            (n = i),
                            (i = l),
                            (l = n),
                            b in Ar && q.attr('cursor', Nr[(b = Ar[b])])),
                            d < a &&
                                ((x *= -1),
                                (n = o),
                                (o = h),
                                (h = n),
                                (n = a),
                                (a = d),
                                (d = n),
                                b in Tr && q.attr('cursor', Nr[(b = Tr[b])])),
                            w.selection && (N = w.selection),
                            v && ((i = N[0][0]), (l = N[1][0])),
                            g && ((a = N[0][1]), (d = N[1][1])),
                            (N[0][0] === i && N[0][1] === a && N[1][0] === l && N[1][1] === d) ||
                                ((w.selection = [
                                    [i, a],
                                    [l, d],
                                ]),
                                f.call(y),
                                j.brush())
                    }
                    function Y() {
                        if ((hr(), wn.touches)) {
                            if (wn.touches.length) return
                            t && clearTimeout(t),
                                (t = setTimeout(function() {
                                    t = null
                                }, 500))
                        } else Bn(wn.view, p), L.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null)
                        D.attr('pointer-events', 'all'),
                            q.attr('cursor', Nr.overlay),
                            w.selection && (N = w.selection),
                            Rr(N) && ((w.selection = null), f.call(y)),
                            j.end()
                    }
                    function F() {
                        switch (wn.keyCode) {
                            case 16:
                                O = m && x
                                break
                            case 18:
                                _ === gr &&
                                    (m && ((c = l - E * m), (e = i + E * m)),
                                    x && ((h = d - C * x), (o = a + C * x)),
                                    (_ = yr),
                                    B())
                                break
                            case 32:
                                ;(_ !== gr && _ !== yr) ||
                                    (m < 0 ? (c = l - E) : m > 0 && (e = i - E),
                                    x < 0 ? (h = d - C) : x > 0 && (o = a - C),
                                    (_ = vr),
                                    q.attr('cursor', Nr.selection),
                                    B())
                                break
                            default:
                                return
                        }
                        dr()
                    }
                    function I() {
                        switch (wn.keyCode) {
                            case 16:
                                O && ((v = g = O = !1), B())
                                break
                            case 18:
                                _ === yr &&
                                    (m < 0 ? (c = l) : m > 0 && (e = i),
                                    x < 0 ? (h = d) : x > 0 && (o = a),
                                    (_ = gr),
                                    B())
                                break
                            case 32:
                                _ === vr &&
                                    (wn.altKey
                                        ? (m && ((c = l - E * m), (e = i + E * m)),
                                          x && ((h = d - C * x), (o = a + C * x)),
                                          (_ = yr))
                                        : (m < 0 ? (c = l) : m > 0 && (e = i),
                                          x < 0 ? (h = d) : x > 0 && (o = a),
                                          (_ = gr)),
                                    q.attr('cursor', Nr[b]),
                                    B())
                                break
                            default:
                                return
                        }
                        dr()
                    }
                }
                function d() {
                    s(this, arguments).moved()
                }
                function p() {
                    s(this, arguments).ended()
                }
                function v() {
                    var t = this.__brush || { selection: null }
                    return (t.extent = _r(e.apply(this, arguments))), (t.dim = n), t
                }
                return (
                    (c.move = function(t, e) {
                        t.selection
                            ? t
                                  .on('start.brush', function() {
                                      s(this, arguments)
                                          .beforestart()
                                          .start()
                                  })
                                  .on('interrupt.brush end.brush', function() {
                                      s(this, arguments).end()
                                  })
                                  .tween('brush', function() {
                                      var t = this,
                                          r = t.__brush,
                                          i = s(t, arguments),
                                          u = r.selection,
                                          o = n.input('function' == typeof e ? e.apply(this, arguments) : e, r.extent),
                                          a = Yt(u, o)
                                      function c(n) {
                                          ;(r.selection = 1 === n && null === o ? null : a(n)), f.call(t), i.brush()
                                      }
                                      return null !== u && null !== o ? c : c(1)
                                  })
                            : t.each(function() {
                                  var t = this,
                                      r = arguments,
                                      i = t.__brush,
                                      u = n.input('function' == typeof e ? e.apply(t, r) : e, i.extent),
                                      o = s(t, r).beforestart()
                                  _e(t),
                                      (i.selection = null === u ? null : u),
                                      f.call(t),
                                      o
                                          .start()
                                          .brush()
                                          .end()
                              })
                    }),
                    (c.clear = function(n) {
                        c.move(n, null)
                    }),
                    (l.prototype = {
                        beforestart: function() {
                            return 1 == ++this.active && ((this.state.emitter = this), (this.starting = !0)), this
                        },
                        start: function() {
                            return this.starting ? ((this.starting = !1), this.emit('start')) : this.emit('brush'), this
                        },
                        brush: function() {
                            return this.emit('brush'), this
                        },
                        end: function() {
                            return 0 == --this.active && (delete this.state.emitter, this.emit('end')), this
                        },
                        emit: function(t) {
                            Sn(new lr(c, t, n.output(this.state.selection)), o.apply, o, [t, this.that, this.args])
                        },
                    }),
                    (c.extent = function(n) {
                        return arguments.length ? ((e = 'function' == typeof n ? n : sr(_r(n))), c) : e
                    }),
                    (c.filter = function(n) {
                        return arguments.length ? ((r = 'function' == typeof n ? n : sr(!!n)), c) : r
                    }),
                    (c.touchable = function(n) {
                        return arguments.length ? ((i = 'function' == typeof n ? n : sr(!!n)), c) : i
                    }),
                    (c.handleSize = function(n) {
                        return arguments.length ? ((a = +n), c) : a
                    }),
                    (c.keyModifiers = function(n) {
                        return arguments.length ? ((u = !!n), c) : u
                    }),
                    (c.on = function() {
                        var n = o.on.apply(o, arguments)
                        return n === o ? c : n
                    }),
                    c
                )
            }
            var Br = Math.cos,
                Yr = Math.sin,
                Fr = Math.PI,
                Ir = Fr / 2,
                Hr = 2 * Fr,
                Xr = Math.max
            function Vr(n) {
                return function(t, e) {
                    return n(t.source.value + t.target.value, e.source.value + e.target.value)
                }
            }
            var Gr = function() {
                    var n = 0,
                        t = null,
                        e = null,
                        r = null
                    function u(u) {
                        var o,
                            a,
                            c,
                            f,
                            s,
                            l,
                            h = u.length,
                            d = [],
                            p = Object(i.s)(h),
                            v = [],
                            g = [],
                            y = (g.groups = new Array(h)),
                            b = new Array(h * h)
                        for (o = 0, s = -1; ++s < h; ) {
                            for (a = 0, l = -1; ++l < h; ) a += u[s][l]
                            d.push(a), v.push(Object(i.s)(h)), (o += a)
                        }
                        for (
                            t &&
                                p.sort(function(n, e) {
                                    return t(d[n], d[e])
                                }),
                                e &&
                                    v.forEach(function(n, t) {
                                        n.sort(function(n, r) {
                                            return e(u[t][n], u[t][r])
                                        })
                                    }),
                                f = (o = Xr(0, Hr - n * h) / o) ? n : Hr / h,
                                a = 0,
                                s = -1;
                            ++s < h;

                        ) {
                            for (c = a, l = -1; ++l < h; ) {
                                var _ = p[s],
                                    m = v[_][l],
                                    x = u[_][m],
                                    w = a,
                                    M = (a += x * o)
                                b[m * h + _] = { index: _, subindex: m, startAngle: w, endAngle: M, value: x }
                            }
                            ;(y[_] = { index: _, startAngle: c, endAngle: a, value: d[_] }), (a += f)
                        }
                        for (s = -1; ++s < h; )
                            for (l = s - 1; ++l < h; ) {
                                var N = b[l * h + s],
                                    A = b[s * h + l]
                                ;(N.value || A.value) &&
                                    g.push(N.value < A.value ? { source: A, target: N } : { source: N, target: A })
                            }
                        return r ? g.sort(r) : g
                    }
                    return (
                        (u.padAngle = function(t) {
                            return arguments.length ? ((n = Xr(0, t)), u) : n
                        }),
                        (u.sortGroups = function(n) {
                            return arguments.length ? ((t = n), u) : t
                        }),
                        (u.sortSubgroups = function(n) {
                            return arguments.length ? ((e = n), u) : e
                        }),
                        (u.sortChords = function(n) {
                            return arguments.length ? (null == n ? (r = null) : ((r = Vr(n))._ = n), u) : r && r._
                        }),
                        u
                    )
                },
                $r = Array.prototype.slice,
                Wr = function(n) {
                    return function() {
                        return n
                    }
                },
                Zr = e(497)
            function Qr(n) {
                return n.source
            }
            function Jr(n) {
                return n.target
            }
            function Kr(n) {
                return n.radius
            }
            function ni(n) {
                return n.startAngle
            }
            function ti(n) {
                return n.endAngle
            }
            var ei = function() {
                var n = Qr,
                    t = Jr,
                    e = Kr,
                    r = ni,
                    i = ti,
                    u = null
                function o() {
                    var o,
                        a = $r.call(arguments),
                        c = n.apply(this, a),
                        f = t.apply(this, a),
                        s = +e.apply(this, ((a[0] = c), a)),
                        l = r.apply(this, a) - Ir,
                        h = i.apply(this, a) - Ir,
                        d = s * Br(l),
                        p = s * Yr(l),
                        v = +e.apply(this, ((a[0] = f), a)),
                        g = r.apply(this, a) - Ir,
                        y = i.apply(this, a) - Ir
                    if (
                        (u || (u = o = Object(Zr.a)()),
                        u.moveTo(d, p),
                        u.arc(0, 0, s, l, h),
                        (l === g && h === y) || (u.quadraticCurveTo(0, 0, v * Br(g), v * Yr(g)), u.arc(0, 0, v, g, y)),
                        u.quadraticCurveTo(0, 0, d, p),
                        u.closePath(),
                        o)
                    )
                        return (u = null), o + '' || null
                }
                return (
                    (o.radius = function(n) {
                        return arguments.length ? ((e = 'function' == typeof n ? n : Wr(+n)), o) : e
                    }),
                    (o.startAngle = function(n) {
                        return arguments.length ? ((r = 'function' == typeof n ? n : Wr(+n)), o) : r
                    }),
                    (o.endAngle = function(n) {
                        return arguments.length ? ((i = 'function' == typeof n ? n : Wr(+n)), o) : i
                    }),
                    (o.source = function(t) {
                        return arguments.length ? ((n = t), o) : n
                    }),
                    (o.target = function(n) {
                        return arguments.length ? ((t = n), o) : t
                    }),
                    (o.context = function(n) {
                        return arguments.length ? ((u = null == n ? null : n), o) : u
                    }),
                    o
                )
            }
            function ri() {}
            function ii(n, t) {
                var e = new ri()
                if (n instanceof ri)
                    n.each(function(n, t) {
                        e.set(t, n)
                    })
                else if (Array.isArray(n)) {
                    var r,
                        i = -1,
                        u = n.length
                    if (null == t) for (; ++i < u; ) e.set(i, n[i])
                    else for (; ++i < u; ) e.set(t((r = n[i]), i, n), r)
                } else if (n) for (var o in n) e.set(o, n[o])
                return e
            }
            ri.prototype = ii.prototype = {
                constructor: ri,
                has: function(n) {
                    return '$' + n in this
                },
                get: function(n) {
                    return this['$' + n]
                },
                set: function(n, t) {
                    return (this['$' + n] = t), this
                },
                remove: function(n) {
                    var t = '$' + n
                    return t in this && delete this[t]
                },
                clear: function() {
                    for (var n in this) '$' === n[0] && delete this[n]
                },
                keys: function() {
                    var n = []
                    for (var t in this) '$' === t[0] && n.push(t.slice(1))
                    return n
                },
                values: function() {
                    var n = []
                    for (var t in this) '$' === t[0] && n.push(this[t])
                    return n
                },
                entries: function() {
                    var n = []
                    for (var t in this) '$' === t[0] && n.push({ key: t.slice(1), value: this[t] })
                    return n
                },
                size: function() {
                    var n = 0
                    for (var t in this) '$' === t[0] && ++n
                    return n
                },
                empty: function() {
                    for (var n in this) if ('$' === n[0]) return !1
                    return !0
                },
                each: function(n) {
                    for (var t in this) '$' === t[0] && n(this[t], t.slice(1), this)
                },
            }
            var ui = ii,
                oi = function() {
                    var n,
                        t,
                        e,
                        r = [],
                        i = []
                    function u(e, i, o, a) {
                        if (i >= r.length) return null != n && e.sort(n), null != t ? t(e) : e
                        for (var c, f, s, l = -1, h = e.length, d = r[i++], p = ui(), v = o(); ++l < h; )
                            (s = p.get((c = d((f = e[l])) + ''))) ? s.push(f) : p.set(c, [f])
                        return (
                            p.each(function(n, t) {
                                a(v, t, u(n, i, o, a))
                            }),
                            v
                        )
                    }
                    return (e = {
                        object: function(n) {
                            return u(n, 0, ai, ci)
                        },
                        map: function(n) {
                            return u(n, 0, fi, si)
                        },
                        entries: function(n) {
                            return (function n(e, u) {
                                if (++u > r.length) return e
                                var o,
                                    a = i[u - 1]
                                return (
                                    null != t && u >= r.length
                                        ? (o = e.entries())
                                        : ((o = []),
                                          e.each(function(t, e) {
                                              o.push({ key: e, values: n(t, u) })
                                          })),
                                    null != a
                                        ? o.sort(function(n, t) {
                                              return a(n.key, t.key)
                                          })
                                        : o
                                )
                            })(u(n, 0, fi, si), 0)
                        },
                        key: function(n) {
                            return r.push(n), e
                        },
                        sortKeys: function(n) {
                            return (i[r.length - 1] = n), e
                        },
                        sortValues: function(t) {
                            return (n = t), e
                        },
                        rollup: function(n) {
                            return (t = n), e
                        },
                    })
                }
            function ai() {
                return {}
            }
            function ci(n, t, e) {
                n[t] = e
            }
            function fi() {
                return ui()
            }
            function si(n, t, e) {
                n.set(t, e)
            }
            function li() {}
            var hi = ui.prototype
            function di(n, t) {
                var e = new li()
                if (n instanceof li)
                    n.each(function(n) {
                        e.add(n)
                    })
                else if (n) {
                    var r = -1,
                        i = n.length
                    if (null == t) for (; ++r < i; ) e.add(n[r])
                    else for (; ++r < i; ) e.add(t(n[r], r, n))
                }
                return e
            }
            li.prototype = di.prototype = {
                constructor: li,
                has: hi.has,
                add: function(n) {
                    return (this['$' + (n += '')] = n), this
                },
                remove: hi.remove,
                clear: hi.clear,
                values: hi.keys,
                size: hi.size,
                empty: hi.empty,
                each: hi.each,
            }
            var pi = di,
                vi = function(n) {
                    var t = []
                    for (var e in n) t.push(e)
                    return t
                },
                gi = function(n) {
                    var t = []
                    for (var e in n) t.push(n[e])
                    return t
                },
                yi = function(n) {
                    var t = []
                    for (var e in n) t.push({ key: e, value: n[e] })
                    return t
                },
                bi = Math.PI / 180,
                _i = 180 / Math.PI
            function mi(n) {
                if (n instanceof Mi) return new Mi(n.l, n.a, n.b, n.opacity)
                if (n instanceof Oi) return zi(n)
                n instanceof ct || (n = ot(n))
                var t,
                    e,
                    r = ki(n.r),
                    i = ki(n.g),
                    u = ki(n.b),
                    o = Ni((0.2225045 * r + 0.7168786 * i + 0.0606169 * u) / 1)
                return (
                    r === i && i === u
                        ? (t = e = o)
                        : ((t = Ni((0.4360747 * r + 0.3850649 * i + 0.1430804 * u) / 0.96422)),
                          (e = Ni((0.0139322 * r + 0.0971045 * i + 0.7141733 * u) / 0.82521))),
                    new Mi(116 * o - 16, 500 * (t - o), 200 * (o - e), n.opacity)
                )
            }
            function xi(n, t) {
                return new Mi(n, 0, 0, null == t ? 1 : t)
            }
            function wi(n, t, e, r) {
                return 1 === arguments.length ? mi(n) : new Mi(n, t, e, null == r ? 1 : r)
            }
            function Mi(n, t, e, r) {
                ;(this.l = +n), (this.a = +t), (this.b = +e), (this.opacity = +r)
            }
            function Ni(n) {
                return n > (6 / 29) * (6 / 29) * (6 / 29) ? Math.pow(n, 1 / 3) : n / ((6 / 29) * 3 * (6 / 29)) + 4 / 29
            }
            function Ai(n) {
                return n > 6 / 29 ? n * n * n : (6 / 29) * 3 * (6 / 29) * (n - 4 / 29)
            }
            function Ti(n) {
                return 255 * (n <= 0.0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
            }
            function ki(n) {
                return (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
            }
            function Si(n) {
                if (n instanceof Oi) return new Oi(n.h, n.c, n.l, n.opacity)
                if ((n instanceof Mi || (n = mi(n)), 0 === n.a && 0 === n.b))
                    return new Oi(NaN, 0 < n.l && n.l < 100 ? 0 : NaN, n.l, n.opacity)
                var t = Math.atan2(n.b, n.a) * _i
                return new Oi(t < 0 ? t + 360 : t, Math.sqrt(n.a * n.a + n.b * n.b), n.l, n.opacity)
            }
            function Ei(n, t, e, r) {
                return 1 === arguments.length ? Si(n) : new Oi(e, t, n, null == r ? 1 : r)
            }
            function Ci(n, t, e, r) {
                return 1 === arguments.length ? Si(n) : new Oi(n, t, e, null == r ? 1 : r)
            }
            function Oi(n, t, e, r) {
                ;(this.h = +n), (this.c = +t), (this.l = +e), (this.opacity = +r)
            }
            function zi(n) {
                if (isNaN(n.h)) return new Mi(n.l, 0, 0, n.opacity)
                var t = n.h * bi
                return new Mi(n.l, Math.cos(t) * n.c, Math.sin(t) * n.c, n.opacity)
            }
            Yn(
                Mi,
                wi,
                Fn(In, {
                    brighter: function(n) {
                        return new Mi(this.l + 18 * (null == n ? 1 : n), this.a, this.b, this.opacity)
                    },
                    darker: function(n) {
                        return new Mi(this.l - 18 * (null == n ? 1 : n), this.a, this.b, this.opacity)
                    },
                    rgb: function() {
                        var n = (this.l + 16) / 116,
                            t = isNaN(this.a) ? n : n + this.a / 500,
                            e = isNaN(this.b) ? n : n - this.b / 200
                        return new ct(
                            Ti(
                                3.1338561 * (t = 0.96422 * Ai(t)) -
                                    1.6168667 * (n = 1 * Ai(n)) -
                                    0.4906146 * (e = 0.82521 * Ai(e))
                            ),
                            Ti(-0.9787684 * t + 1.9161415 * n + 0.033454 * e),
                            Ti(0.0719453 * t - 0.2289914 * n + 1.4052427 * e),
                            this.opacity
                        )
                    },
                })
            ),
                Yn(
                    Oi,
                    Ci,
                    Fn(In, {
                        brighter: function(n) {
                            return new Oi(this.h, this.c, this.l + 18 * (null == n ? 1 : n), this.opacity)
                        },
                        darker: function(n) {
                            return new Oi(this.h, this.c, this.l - 18 * (null == n ? 1 : n), this.opacity)
                        },
                        rgb: function() {
                            return zi(this).rgb()
                        },
                    })
                )
            var Pi = -0.29227,
                Ri = -0.90649,
                ji = 1.97294 * Ri,
                Di = 3.5172982438,
                qi = -0.6557636667999999
            function Li(n) {
                if (n instanceof Bi) return new Bi(n.h, n.s, n.l, n.opacity)
                n instanceof ct || (n = ot(n))
                var t = n.r / 255,
                    e = n.g / 255,
                    r = n.b / 255,
                    i = (qi * r + ji * t - Di * e) / (qi + ji - Di),
                    u = r - i,
                    o = (1.97294 * (e - i) - Pi * u) / Ri,
                    a = Math.sqrt(o * o + u * u) / (1.97294 * i * (1 - i)),
                    c = a ? Math.atan2(o, u) * _i - 120 : NaN
                return new Bi(c < 0 ? c + 360 : c, a, i, n.opacity)
            }
            function Ui(n, t, e, r) {
                return 1 === arguments.length ? Li(n) : new Bi(n, t, e, null == r ? 1 : r)
            }
            function Bi(n, t, e, r) {
                ;(this.h = +n), (this.s = +t), (this.l = +e), (this.opacity = +r)
            }
            Yn(
                Bi,
                Ui,
                Fn(In, {
                    brighter: function(n) {
                        return (
                            (n = null == n ? 1 / 0.7 : Math.pow(1 / 0.7, n)),
                            new Bi(this.h, this.s, this.l * n, this.opacity)
                        )
                    },
                    darker: function(n) {
                        return (
                            (n = null == n ? 0.7 : Math.pow(0.7, n)), new Bi(this.h, this.s, this.l * n, this.opacity)
                        )
                    },
                    rgb: function() {
                        var n = isNaN(this.h) ? 0 : (this.h + 120) * bi,
                            t = +this.l,
                            e = isNaN(this.s) ? 0 : this.s * t * (1 - t),
                            r = Math.cos(n),
                            i = Math.sin(n)
                        return new ct(
                            255 * (t + e * (-0.14861 * r + 1.78277 * i)),
                            255 * (t + e * (Pi * r + Ri * i)),
                            255 * (t + e * (1.97294 * r)),
                            this.opacity
                        )
                    },
                })
            )
            var Yi = Array.prototype.slice,
                Fi = function(n, t) {
                    return n - t
                },
                Ii = function(n) {
                    return function() {
                        return n
                    }
                },
                Hi = function(n, t) {
                    for (var e, r = -1, i = t.length; ++r < i; ) if ((e = Xi(n, t[r]))) return e
                    return 0
                }
            function Xi(n, t) {
                for (var e = t[0], r = t[1], i = -1, u = 0, o = n.length, a = o - 1; u < o; a = u++) {
                    var c = n[u],
                        f = c[0],
                        s = c[1],
                        l = n[a],
                        h = l[0],
                        d = l[1]
                    if (Vi(c, l, t)) return 0
                    s > r != d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i)
                }
                return i
            }
            function Vi(n, t, e) {
                var r, i, u, o
                return (
                    (function(n, t, e) {
                        return (t[0] - n[0]) * (e[1] - n[1]) == (e[0] - n[0]) * (t[1] - n[1])
                    })(n, t, e) &&
                    ((i = n[(r = +(n[0] === t[0]))]), (u = e[r]), (o = t[r]), (i <= u && u <= o) || (o <= u && u <= i))
                )
            }
            var Gi = function() {},
                $i = [
                    [],
                    [
                        [
                            [1, 1.5],
                            [0.5, 1],
                        ],
                    ],
                    [
                        [
                            [1.5, 1],
                            [1, 1.5],
                        ],
                    ],
                    [
                        [
                            [1.5, 1],
                            [0.5, 1],
                        ],
                    ],
                    [
                        [
                            [1, 0.5],
                            [1.5, 1],
                        ],
                    ],
                    [
                        [
                            [1, 1.5],
                            [0.5, 1],
                        ],
                        [
                            [1, 0.5],
                            [1.5, 1],
                        ],
                    ],
                    [
                        [
                            [1, 0.5],
                            [1, 1.5],
                        ],
                    ],
                    [
                        [
                            [1, 0.5],
                            [0.5, 1],
                        ],
                    ],
                    [
                        [
                            [0.5, 1],
                            [1, 0.5],
                        ],
                    ],
                    [
                        [
                            [1, 1.5],
                            [1, 0.5],
                        ],
                    ],
                    [
                        [
                            [0.5, 1],
                            [1, 0.5],
                        ],
                        [
                            [1.5, 1],
                            [1, 1.5],
                        ],
                    ],
                    [
                        [
                            [1.5, 1],
                            [1, 0.5],
                        ],
                    ],
                    [
                        [
                            [0.5, 1],
                            [1.5, 1],
                        ],
                    ],
                    [
                        [
                            [1, 1.5],
                            [1.5, 1],
                        ],
                    ],
                    [
                        [
                            [0.5, 1],
                            [1, 1.5],
                        ],
                    ],
                    [],
                ],
                Wi = function() {
                    var n = 1,
                        t = 1,
                        e = i.y,
                        r = c
                    function u(n) {
                        var t = e(n)
                        if (Array.isArray(t)) t = t.slice().sort(Fi)
                        else {
                            var r = Object(i.i)(n),
                                u = r[0],
                                a = r[1]
                            ;(t = Object(i.A)(u, a, t)),
                                (t = Object(i.s)(Math.floor(u / t) * t, Math.floor(a / t) * t, t))
                        }
                        return t.map(function(t) {
                            return o(n, t)
                        })
                    }
                    function o(e, i) {
                        var u = [],
                            o = []
                        return (
                            (function(e, r, i) {
                                var u,
                                    o,
                                    c,
                                    f,
                                    s,
                                    l,
                                    h = new Array(),
                                    d = new Array()
                                ;(u = o = -1), (f = e[0] >= r), $i[f << 1].forEach(p)
                                for (; ++u < n - 1; ) (c = f), (f = e[u + 1] >= r), $i[c | (f << 1)].forEach(p)
                                $i[f << 0].forEach(p)
                                for (; ++o < t - 1; ) {
                                    for (
                                        u = -1,
                                            f = e[o * n + n] >= r,
                                            s = e[o * n] >= r,
                                            $i[(f << 1) | (s << 2)].forEach(p);
                                        ++u < n - 1;

                                    )
                                        (c = f),
                                            (f = e[o * n + n + u + 1] >= r),
                                            (l = s),
                                            (s = e[o * n + u + 1] >= r),
                                            $i[c | (f << 1) | (s << 2) | (l << 3)].forEach(p)
                                    $i[f | (s << 3)].forEach(p)
                                }
                                ;(u = -1), (s = e[o * n] >= r), $i[s << 2].forEach(p)
                                for (; ++u < n - 1; )
                                    (l = s), (s = e[o * n + u + 1] >= r), $i[(s << 2) | (l << 3)].forEach(p)
                                function p(n) {
                                    var t,
                                        e,
                                        r = [n[0][0] + u, n[0][1] + o],
                                        c = [n[1][0] + u, n[1][1] + o],
                                        f = a(r),
                                        s = a(c)
                                    ;(t = d[f])
                                        ? (e = h[s])
                                            ? (delete d[t.end],
                                              delete h[e.start],
                                              t === e
                                                  ? (t.ring.push(c), i(t.ring))
                                                  : (h[t.start] = d[e.end] = {
                                                        start: t.start,
                                                        end: e.end,
                                                        ring: t.ring.concat(e.ring),
                                                    }))
                                            : (delete d[t.end], t.ring.push(c), (d[(t.end = s)] = t))
                                        : (t = h[s])
                                        ? (e = d[f])
                                            ? (delete h[t.start],
                                              delete d[e.end],
                                              t === e
                                                  ? (t.ring.push(c), i(t.ring))
                                                  : (h[e.start] = d[t.end] = {
                                                        start: e.start,
                                                        end: t.end,
                                                        ring: e.ring.concat(t.ring),
                                                    }))
                                            : (delete h[t.start], t.ring.unshift(r), (h[(t.start = f)] = t))
                                        : (h[f] = d[s] = { start: f, end: s, ring: [r, c] })
                                }
                                $i[s << 3].forEach(p)
                            })(e, i, function(n) {
                                r(n, e, i),
                                    (function(n) {
                                        for (
                                            var t = 0, e = n.length, r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1];
                                            ++t < e;

                                        )
                                            r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1]
                                        return r
                                    })(n) > 0
                                        ? u.push([n])
                                        : o.push(n)
                            }),
                            o.forEach(function(n) {
                                for (var t, e = 0, r = u.length; e < r; ++e)
                                    if (-1 !== Hi((t = u[e])[0], n)) return void t.push(n)
                            }),
                            { type: 'MultiPolygon', value: i, coordinates: u }
                        )
                    }
                    function a(t) {
                        return 2 * t[0] + t[1] * (n + 1) * 4
                    }
                    function c(e, r, i) {
                        e.forEach(function(e) {
                            var u,
                                o = e[0],
                                a = e[1],
                                c = 0 | o,
                                f = 0 | a,
                                s = r[f * n + c]
                            o > 0 && o < n && c === o && ((u = r[f * n + c - 1]), (e[0] = o + (i - u) / (s - u) - 0.5)),
                                a > 0 &&
                                    a < t &&
                                    f === a &&
                                    ((u = r[(f - 1) * n + c]), (e[1] = a + (i - u) / (s - u) - 0.5))
                        })
                    }
                    return (
                        (u.contour = o),
                        (u.size = function(e) {
                            if (!arguments.length) return [n, t]
                            var r = Math.ceil(e[0]),
                                i = Math.ceil(e[1])
                            if (!(r > 0 && i > 0)) throw new Error('invalid size')
                            return (n = r), (t = i), u
                        }),
                        (u.thresholds = function(n) {
                            return arguments.length
                                ? ((e = 'function' == typeof n ? n : Array.isArray(n) ? Ii(Yi.call(n)) : Ii(n)), u)
                                : e
                        }),
                        (u.smooth = function(n) {
                            return arguments.length ? ((r = n ? c : Gi), u) : r === c
                        }),
                        u
                    )
                }
            function Zi(n, t, e) {
                for (var r = n.width, i = n.height, u = 1 + (e << 1), o = 0; o < i; ++o)
                    for (var a = 0, c = 0; a < r + e; ++a)
                        a < r && (c += n.data[a + o * r]),
                            a >= e &&
                                (a >= u && (c -= n.data[a - u + o * r]),
                                (t.data[a - e + o * r] = c / Math.min(a + 1, r - 1 + u - a, u)))
            }
            function Qi(n, t, e) {
                for (var r = n.width, i = n.height, u = 1 + (e << 1), o = 0; o < r; ++o)
                    for (var a = 0, c = 0; a < i + e; ++a)
                        a < i && (c += n.data[o + a * r]),
                            a >= e &&
                                (a >= u && (c -= n.data[o + (a - u) * r]),
                                (t.data[o + (a - e) * r] = c / Math.min(a + 1, i - 1 + u - a, u)))
            }
            function Ji(n) {
                return n[0]
            }
            function Ki(n) {
                return n[1]
            }
            function nu() {
                return 1
            }
            var tu = function() {
                    var n = Ji,
                        t = Ki,
                        e = nu,
                        r = 960,
                        u = 500,
                        o = 20,
                        a = 2,
                        c = 3 * o,
                        f = (r + 2 * c) >> a,
                        s = (u + 2 * c) >> a,
                        l = Ii(20)
                    function h(r) {
                        var u = new Float32Array(f * s),
                            h = new Float32Array(f * s)
                        r.forEach(function(r, i, o) {
                            var l = (+n(r, i, o) + c) >> a,
                                h = (+t(r, i, o) + c) >> a,
                                d = +e(r, i, o)
                            l >= 0 && l < f && h >= 0 && h < s && (u[l + h * f] += d)
                        }),
                            Zi({ width: f, height: s, data: u }, { width: f, height: s, data: h }, o >> a),
                            Qi({ width: f, height: s, data: h }, { width: f, height: s, data: u }, o >> a),
                            Zi({ width: f, height: s, data: u }, { width: f, height: s, data: h }, o >> a),
                            Qi({ width: f, height: s, data: h }, { width: f, height: s, data: u }, o >> a),
                            Zi({ width: f, height: s, data: u }, { width: f, height: s, data: h }, o >> a),
                            Qi({ width: f, height: s, data: h }, { width: f, height: s, data: u }, o >> a)
                        var p = l(u)
                        if (!Array.isArray(p)) {
                            var v = Object(i.k)(u)
                            ;(p = Object(i.A)(0, v, p)), (p = Object(i.s)(0, Math.floor(v / p) * p, p)).shift()
                        }
                        return Wi()
                            .thresholds(p)
                            .size([f, s])(u)
                            .map(d)
                    }
                    function d(n) {
                        return (n.value *= Math.pow(2, -2 * a)), n.coordinates.forEach(p), n
                    }
                    function p(n) {
                        n.forEach(v)
                    }
                    function v(n) {
                        n.forEach(g)
                    }
                    function g(n) {
                        ;(n[0] = n[0] * Math.pow(2, a) - c), (n[1] = n[1] * Math.pow(2, a) - c)
                    }
                    function y() {
                        return (f = (r + 2 * (c = 3 * o)) >> a), (s = (u + 2 * c) >> a), h
                    }
                    return (
                        (h.x = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : Ii(+t)), h) : n
                        }),
                        (h.y = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : Ii(+n)), h) : t
                        }),
                        (h.weight = function(n) {
                            return arguments.length ? ((e = 'function' == typeof n ? n : Ii(+n)), h) : e
                        }),
                        (h.size = function(n) {
                            if (!arguments.length) return [r, u]
                            var t = Math.ceil(n[0]),
                                e = Math.ceil(n[1])
                            if (!(t >= 0 || t >= 0)) throw new Error('invalid size')
                            return (r = t), (u = e), y()
                        }),
                        (h.cellSize = function(n) {
                            if (!arguments.length) return 1 << a
                            if (!((n = +n) >= 1)) throw new Error('invalid cell size')
                            return (a = Math.floor(Math.log(n) / Math.LN2)), y()
                        }),
                        (h.thresholds = function(n) {
                            return arguments.length
                                ? ((l = 'function' == typeof n ? n : Array.isArray(n) ? Ii(Yi.call(n)) : Ii(n)), h)
                                : l
                        }),
                        (h.bandwidth = function(n) {
                            if (!arguments.length) return Math.sqrt(o * (o + 1))
                            if (!((n = +n) >= 0)) throw new Error('invalid bandwidth')
                            return (o = Math.round((Math.sqrt(4 * n * n + 1) - 1) / 2)), y()
                        }),
                        h
                    )
                },
                eu = function(n) {
                    return function() {
                        return n
                    }
                }
            function ru(n, t, e, r, i, u, o, a, c, f) {
                ;(this.target = n),
                    (this.type = t),
                    (this.subject = e),
                    (this.identifier = r),
                    (this.active = i),
                    (this.x = u),
                    (this.y = o),
                    (this.dx = a),
                    (this.dy = c),
                    (this._ = f)
            }
            function iu() {
                return !wn.ctrlKey && !wn.button
            }
            function uu() {
                return this.parentNode
            }
            function ou(n) {
                return null == n ? { x: wn.x, y: wn.y } : n
            }
            function au() {
                return navigator.maxTouchPoints || 'ontouchstart' in this
            }
            ru.prototype.on = function() {
                var n = this._.on.apply(this._, arguments)
                return n === this._ ? this : n
            }
            var cu = function() {
                    var n,
                        t,
                        e,
                        r,
                        i = iu,
                        u = uu,
                        o = ou,
                        a = au,
                        c = {},
                        f = M('start', 'drag', 'end'),
                        s = 0,
                        l = 0
                    function h(n) {
                        n.on('mousedown.drag', d)
                            .filter(a)
                            .on('touchstart.drag', g)
                            .on('touchmove.drag', y)
                            .on('touchend.drag touchcancel.drag', b)
                            .style('touch-action', 'none')
                            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                    }
                    function d() {
                        if (!r && i.apply(this, arguments)) {
                            var o = _('mouse', u.apply(this, arguments), Xt, this, arguments)
                            o &&
                                (Dn(wn.view)
                                    .on('mousemove.drag', p, !0)
                                    .on('mouseup.drag', v, !0),
                                Un(wn.view),
                                qn(),
                                (e = !1),
                                (n = wn.clientX),
                                (t = wn.clientY),
                                o('start'))
                        }
                    }
                    function p() {
                        if ((Ln(), !e)) {
                            var r = wn.clientX - n,
                                i = wn.clientY - t
                            e = r * r + i * i > l
                        }
                        c.mouse('drag')
                    }
                    function v() {
                        Dn(wn.view).on('mousemove.drag mouseup.drag', null), Bn(wn.view, e), Ln(), c.mouse('end')
                    }
                    function g() {
                        if (i.apply(this, arguments)) {
                            var n,
                                t,
                                e = wn.changedTouches,
                                r = u.apply(this, arguments),
                                o = e.length
                            for (n = 0; n < o; ++n)
                                (t = _(e[n].identifier, r, Ht, this, arguments)) && (qn(), t('start'))
                        }
                    }
                    function y() {
                        var n,
                            t,
                            e = wn.changedTouches,
                            r = e.length
                        for (n = 0; n < r; ++n) (t = c[e[n].identifier]) && (Ln(), t('drag'))
                    }
                    function b() {
                        var n,
                            t,
                            e = wn.changedTouches,
                            i = e.length
                        for (
                            r && clearTimeout(r),
                                r = setTimeout(function() {
                                    r = null
                                }, 500),
                                n = 0;
                            n < i;
                            ++n
                        )
                            (t = c[e[n].identifier]) && (qn(), t('end'))
                    }
                    function _(n, t, e, r, i) {
                        var u,
                            a,
                            l,
                            d = e(t, n),
                            p = f.copy()
                        if (
                            Sn(new ru(h, 'beforestart', u, n, s, d[0], d[1], 0, 0, p), function() {
                                return (
                                    null != (wn.subject = u = o.apply(r, i)) &&
                                    ((a = u.x - d[0] || 0), (l = u.y - d[1] || 0), !0)
                                )
                            })
                        )
                            return function o(f) {
                                var v,
                                    g = d
                                switch (f) {
                                    case 'start':
                                        ;(c[n] = o), (v = s++)
                                        break
                                    case 'end':
                                        delete c[n], --s
                                    case 'drag':
                                        ;(d = e(t, n)), (v = s)
                                }
                                Sn(new ru(h, f, u, n, v, d[0] + a, d[1] + l, d[0] - g[0], d[1] - g[1], p), p.apply, p, [
                                    f,
                                    r,
                                    i,
                                ])
                            }
                    }
                    return (
                        (h.filter = function(n) {
                            return arguments.length ? ((i = 'function' == typeof n ? n : eu(!!n)), h) : i
                        }),
                        (h.container = function(n) {
                            return arguments.length ? ((u = 'function' == typeof n ? n : eu(n)), h) : u
                        }),
                        (h.subject = function(n) {
                            return arguments.length ? ((o = 'function' == typeof n ? n : eu(n)), h) : o
                        }),
                        (h.touchable = function(n) {
                            return arguments.length ? ((a = 'function' == typeof n ? n : eu(!!n)), h) : a
                        }),
                        (h.on = function() {
                            var n = f.on.apply(f, arguments)
                            return n === f ? h : n
                        }),
                        (h.clickDistance = function(n) {
                            return arguments.length ? ((l = (n = +n) * n), h) : Math.sqrt(l)
                        }),
                        h
                    )
                },
                fu = {},
                su = {}
            function lu(n) {
                return new Function(
                    'd',
                    'return {' +
                        n
                            .map(function(n, t) {
                                return JSON.stringify(n) + ': d[' + t + '] || ""'
                            })
                            .join(',') +
                        '}'
                )
            }
            function hu(n) {
                var t = Object.create(null),
                    e = []
                return (
                    n.forEach(function(n) {
                        for (var r in n) r in t || e.push((t[r] = r))
                    }),
                    e
                )
            }
            function du(n, t) {
                var e = n + '',
                    r = e.length
                return r < t ? new Array(t - r + 1).join(0) + e : e
            }
            function pu(n) {
                var t,
                    e = n.getUTCHours(),
                    r = n.getUTCMinutes(),
                    i = n.getUTCSeconds(),
                    u = n.getUTCMilliseconds()
                return isNaN(n)
                    ? 'Invalid Date'
                    : ((t = n.getUTCFullYear()) < 0 ? '-' + du(-t, 6) : t > 9999 ? '+' + du(t, 6) : du(t, 4)) +
                          '-' +
                          du(n.getUTCMonth() + 1, 2) +
                          '-' +
                          du(n.getUTCDate(), 2) +
                          (u
                              ? 'T' + du(e, 2) + ':' + du(r, 2) + ':' + du(i, 2) + '.' + du(u, 3) + 'Z'
                              : i
                              ? 'T' + du(e, 2) + ':' + du(r, 2) + ':' + du(i, 2) + 'Z'
                              : r || e
                              ? 'T' + du(e, 2) + ':' + du(r, 2) + 'Z'
                              : '')
            }
            var vu = function(n) {
                    var t = new RegExp('["' + n + '\n\r]'),
                        e = n.charCodeAt(0)
                    function r(n, t) {
                        var r,
                            i = [],
                            u = n.length,
                            o = 0,
                            a = 0,
                            c = u <= 0,
                            f = !1
                        function s() {
                            if (c) return su
                            if (f) return (f = !1), fu
                            var t,
                                r,
                                i = o
                            if (34 === n.charCodeAt(i)) {
                                for (; (o++ < u && 34 !== n.charCodeAt(o)) || 34 === n.charCodeAt(++o); );
                                return (
                                    (t = o) >= u
                                        ? (c = !0)
                                        : 10 === (r = n.charCodeAt(o++))
                                        ? (f = !0)
                                        : 13 === r && ((f = !0), 10 === n.charCodeAt(o) && ++o),
                                    n.slice(i + 1, t - 1).replace(/""/g, '"')
                                )
                            }
                            for (; o < u; ) {
                                if (10 === (r = n.charCodeAt((t = o++)))) f = !0
                                else if (13 === r) (f = !0), 10 === n.charCodeAt(o) && ++o
                                else if (r !== e) continue
                                return n.slice(i, t)
                            }
                            return (c = !0), n.slice(i, u)
                        }
                        for (10 === n.charCodeAt(u - 1) && --u, 13 === n.charCodeAt(u - 1) && --u; (r = s()) !== su; ) {
                            for (var l = []; r !== fu && r !== su; ) l.push(r), (r = s())
                            ;(t && null == (l = t(l, a++))) || i.push(l)
                        }
                        return i
                    }
                    function i(t, e) {
                        return t.map(function(t) {
                            return e
                                .map(function(n) {
                                    return o(t[n])
                                })
                                .join(n)
                        })
                    }
                    function u(t) {
                        return t.map(o).join(n)
                    }
                    function o(n) {
                        return null == n
                            ? ''
                            : n instanceof Date
                            ? pu(n)
                            : t.test((n += ''))
                            ? '"' + n.replace(/"/g, '""') + '"'
                            : n
                    }
                    return {
                        parse: function(n, t) {
                            var e,
                                i,
                                u = r(n, function(n, r) {
                                    if (e) return e(n, r - 1)
                                    ;(i = n),
                                        (e = t
                                            ? (function(n, t) {
                                                  var e = lu(n)
                                                  return function(r, i) {
                                                      return t(e(r), i, n)
                                                  }
                                              })(n, t)
                                            : lu(n))
                                })
                            return (u.columns = i || []), u
                        },
                        parseRows: r,
                        format: function(t, e) {
                            return null == e && (e = hu(t)), [e.map(o).join(n)].concat(i(t, e)).join('\n')
                        },
                        formatBody: function(n, t) {
                            return null == t && (t = hu(n)), i(n, t).join('\n')
                        },
                        formatRows: function(n) {
                            return n.map(u).join('\n')
                        },
                        formatRow: u,
                        formatValue: o,
                    }
                },
                gu = vu(','),
                yu = gu.parse,
                bu = gu.parseRows,
                _u = gu.format,
                mu = gu.formatBody,
                xu = gu.formatRows,
                wu = gu.formatRow,
                Mu = gu.formatValue,
                Nu = vu('\t'),
                Au = Nu.parse,
                Tu = Nu.parseRows,
                ku = Nu.format,
                Su = Nu.formatBody,
                Eu = Nu.formatRows,
                Cu = Nu.formatRow,
                Ou = Nu.formatValue
            function zu(n) {
                for (var t in n) {
                    var e,
                        r,
                        i = n[t].trim()
                    if (i)
                        if ('true' === i) i = !0
                        else if ('false' === i) i = !1
                        else if ('NaN' === i) i = NaN
                        else if (isNaN((e = +i))) {
                            if (
                                !(r = i.match(
                                    /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
                                ))
                            )
                                continue
                            Pu && r[4] && !r[7] && (i = i.replace(/-/g, '/').replace(/T/, ' ')), (i = new Date(i))
                        } else i = e
                    else i = null
                    n[t] = i
                }
                return n
            }
            var Pu = new Date('2019-01-01T00:00').getHours() || new Date('2019-07-01T00:00').getHours()
            function Ru(n) {
                return +n
            }
            function ju(n) {
                return n * n
            }
            function Du(n) {
                return n * (2 - n)
            }
            function qu(n) {
                return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2
            }
            var Lu = (function n(t) {
                    function e(n) {
                        return Math.pow(n, t)
                    }
                    return (t = +t), (e.exponent = n), e
                })(3),
                Uu = (function n(t) {
                    function e(n) {
                        return 1 - Math.pow(1 - n, t)
                    }
                    return (t = +t), (e.exponent = n), e
                })(3),
                Bu = (function n(t) {
                    function e(n) {
                        return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2
                    }
                    return (t = +t), (e.exponent = n), e
                })(3),
                Yu = Math.PI,
                Fu = Yu / 2
            function Iu(n) {
                return 1 - Math.cos(n * Fu)
            }
            function Hu(n) {
                return Math.sin(n * Fu)
            }
            function Xu(n) {
                return (1 - Math.cos(Yu * n)) / 2
            }
            function Vu(n) {
                return Math.pow(2, 10 * n - 10)
            }
            function Gu(n) {
                return 1 - Math.pow(2, -10 * n)
            }
            function $u(n) {
                return ((n *= 2) <= 1 ? Math.pow(2, 10 * n - 10) : 2 - Math.pow(2, 10 - 10 * n)) / 2
            }
            function Wu(n) {
                return 1 - Math.sqrt(1 - n * n)
            }
            function Zu(n) {
                return Math.sqrt(1 - --n * n)
            }
            function Qu(n) {
                return ((n *= 2) <= 1 ? 1 - Math.sqrt(1 - n * n) : Math.sqrt(1 - (n -= 2) * n) + 1) / 2
            }
            function Ju(n) {
                return 1 - Ku(1 - n)
            }
            function Ku(n) {
                return (n = +n) < 4 / 11
                    ? 7.5625 * n * n
                    : n < 8 / 11
                    ? 7.5625 * (n -= 6 / 11) * n + 3 / 4
                    : n < 10 / 11
                    ? 7.5625 * (n -= 9 / 11) * n + 15 / 16
                    : 7.5625 * (n -= 21 / 22) * n + 63 / 64
            }
            function no(n) {
                return ((n *= 2) <= 1 ? 1 - Ku(1 - n) : Ku(n - 1) + 1) / 2
            }
            var to = (function n(t) {
                    function e(n) {
                        return n * n * ((t + 1) * n - t)
                    }
                    return (t = +t), (e.overshoot = n), e
                })(1.70158),
                eo = (function n(t) {
                    function e(n) {
                        return --n * n * ((t + 1) * n + t) + 1
                    }
                    return (t = +t), (e.overshoot = n), e
                })(1.70158),
                ro = (function n(t) {
                    function e(n) {
                        return ((n *= 2) < 1 ? n * n * ((t + 1) * n - t) : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2
                    }
                    return (t = +t), (e.overshoot = n), e
                })(1.70158),
                io = 2 * Math.PI,
                uo = (function n(t, e) {
                    var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= io)
                    function i(n) {
                        return t * Math.pow(2, 10 * --n) * Math.sin((r - n) / e)
                    }
                    return (
                        (i.amplitude = function(t) {
                            return n(t, e * io)
                        }),
                        (i.period = function(e) {
                            return n(t, e)
                        }),
                        i
                    )
                })(1, 0.3),
                oo = (function n(t, e) {
                    var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= io)
                    function i(n) {
                        return 1 - t * Math.pow(2, -10 * (n = +n)) * Math.sin((n + r) / e)
                    }
                    return (
                        (i.amplitude = function(t) {
                            return n(t, e * io)
                        }),
                        (i.period = function(e) {
                            return n(t, e)
                        }),
                        i
                    )
                })(1, 0.3),
                ao = (function n(t, e) {
                    var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= io)
                    function i(n) {
                        return (
                            ((n = 2 * n - 1) < 0
                                ? t * Math.pow(2, 10 * n) * Math.sin((r - n) / e)
                                : 2 - t * Math.pow(2, -10 * n) * Math.sin((r + n) / e)) / 2
                        )
                    }
                    return (
                        (i.amplitude = function(t) {
                            return n(t, e * io)
                        }),
                        (i.period = function(e) {
                            return n(t, e)
                        }),
                        i
                    )
                })(1, 0.3)
            function co(n) {
                if (!n.ok) throw new Error(n.status + ' ' + n.statusText)
                return n.blob()
            }
            var fo = function(n, t) {
                return fetch(n, t).then(co)
            }
            function so(n) {
                if (!n.ok) throw new Error(n.status + ' ' + n.statusText)
                return n.arrayBuffer()
            }
            var lo = function(n, t) {
                return fetch(n, t).then(so)
            }
            function ho(n) {
                if (!n.ok) throw new Error(n.status + ' ' + n.statusText)
                return n.text()
            }
            var po = function(n, t) {
                return fetch(n, t).then(ho)
            }
            function vo(n) {
                return function(t, e, r) {
                    return (
                        2 === arguments.length && 'function' == typeof e && ((r = e), (e = void 0)),
                        po(t, e).then(function(t) {
                            return n(t, r)
                        })
                    )
                }
            }
            function go(n, t, e, r) {
                3 === arguments.length && 'function' == typeof e && ((r = e), (e = void 0))
                var i = vu(n)
                return po(t, e).then(function(n) {
                    return i.parse(n, r)
                })
            }
            var yo = vo(yu),
                bo = vo(Au),
                _o = function(n, t) {
                    return new Promise(function(e, r) {
                        var i = new Image()
                        for (var u in t) i[u] = t[u]
                        ;(i.onerror = r),
                            (i.onload = function() {
                                e(i)
                            }),
                            (i.src = n)
                    })
                }
            function mo(n) {
                if (!n.ok) throw new Error(n.status + ' ' + n.statusText)
                return n.json()
            }
            var xo = function(n, t) {
                return fetch(n, t).then(mo)
            }
            function wo(n) {
                return function(t, e) {
                    return po(t, e).then(function(t) {
                        return new DOMParser().parseFromString(t, n)
                    })
                }
            }
            var Mo = wo('application/xml'),
                No = wo('text/html'),
                Ao = wo('image/svg+xml'),
                To = function(n, t) {
                    var e
                    function r() {
                        var r,
                            i,
                            u = e.length,
                            o = 0,
                            a = 0
                        for (r = 0; r < u; ++r) (o += (i = e[r]).x), (a += i.y)
                        for (o = o / u - n, a = a / u - t, r = 0; r < u; ++r) ((i = e[r]).x -= o), (i.y -= a)
                    }
                    return (
                        null == n && (n = 0),
                        null == t && (t = 0),
                        (r.initialize = function(n) {
                            e = n
                        }),
                        (r.x = function(t) {
                            return arguments.length ? ((n = +t), r) : n
                        }),
                        (r.y = function(n) {
                            return arguments.length ? ((t = +n), r) : t
                        }),
                        r
                    )
                },
                ko = function(n) {
                    return function() {
                        return n
                    }
                },
                So = function() {
                    return 1e-6 * (Math.random() - 0.5)
                }
            function Eo(n, t, e, r) {
                if (isNaN(t) || isNaN(e)) return n
                var i,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d = n._root,
                    p = { data: r },
                    v = n._x0,
                    g = n._y0,
                    y = n._x1,
                    b = n._y1
                if (!d) return (n._root = p), n
                for (; d.length; )
                    if (
                        ((f = t >= (u = (v + y) / 2)) ? (v = u) : (y = u),
                        (s = e >= (o = (g + b) / 2)) ? (g = o) : (b = o),
                        (i = d),
                        !(d = d[(l = (s << 1) | f)]))
                    )
                        return (i[l] = p), n
                if (((a = +n._x.call(null, d.data)), (c = +n._y.call(null, d.data)), t === a && e === c))
                    return (p.next = d), i ? (i[l] = p) : (n._root = p), n
                do {
                    ;(i = i ? (i[l] = new Array(4)) : (n._root = new Array(4))),
                        (f = t >= (u = (v + y) / 2)) ? (v = u) : (y = u),
                        (s = e >= (o = (g + b) / 2)) ? (g = o) : (b = o)
                } while ((l = (s << 1) | f) == (h = ((c >= o) << 1) | (a >= u)))
                return (i[h] = d), (i[l] = p), n
            }
            var Co = function(n, t, e, r, i) {
                ;(this.node = n), (this.x0 = t), (this.y0 = e), (this.x1 = r), (this.y1 = i)
            }
            function Oo(n) {
                return n[0]
            }
            function zo(n) {
                return n[1]
            }
            function Po(n, t, e) {
                var r = new Ro(null == t ? Oo : t, null == e ? zo : e, NaN, NaN, NaN, NaN)
                return null == n ? r : r.addAll(n)
            }
            function Ro(n, t, e, r, i, u) {
                ;(this._x = n),
                    (this._y = t),
                    (this._x0 = e),
                    (this._y0 = r),
                    (this._x1 = i),
                    (this._y1 = u),
                    (this._root = void 0)
            }
            function jo(n) {
                for (var t = { data: n.data }, e = t; (n = n.next); ) e = e.next = { data: n.data }
                return t
            }
            var Do = (Po.prototype = Ro.prototype)
            function qo(n) {
                return n.x + n.vx
            }
            function Lo(n) {
                return n.y + n.vy
            }
            ;(Do.copy = function() {
                var n,
                    t,
                    e = new Ro(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    r = this._root
                if (!r) return e
                if (!r.length) return (e._root = jo(r)), e
                for (n = [{ source: r, target: (e._root = new Array(4)) }]; (r = n.pop()); )
                    for (var i = 0; i < 4; ++i)
                        (t = r.source[i]) &&
                            (t.length
                                ? n.push({ source: t, target: (r.target[i] = new Array(4)) })
                                : (r.target[i] = jo(t)))
                return e
            }),
                (Do.add = function(n) {
                    var t = +this._x.call(null, n),
                        e = +this._y.call(null, n)
                    return Eo(this.cover(t, e), t, e, n)
                }),
                (Do.addAll = function(n) {
                    var t,
                        e,
                        r,
                        i,
                        u = n.length,
                        o = new Array(u),
                        a = new Array(u),
                        c = 1 / 0,
                        f = 1 / 0,
                        s = -1 / 0,
                        l = -1 / 0
                    for (e = 0; e < u; ++e)
                        isNaN((r = +this._x.call(null, (t = n[e])))) ||
                            isNaN((i = +this._y.call(null, t))) ||
                            ((o[e] = r),
                            (a[e] = i),
                            r < c && (c = r),
                            r > s && (s = r),
                            i < f && (f = i),
                            i > l && (l = i))
                    if (c > s || f > l) return this
                    for (this.cover(c, f).cover(s, l), e = 0; e < u; ++e) Eo(this, o[e], a[e], n[e])
                    return this
                }),
                (Do.cover = function(n, t) {
                    if (isNaN((n = +n)) || isNaN((t = +t))) return this
                    var e = this._x0,
                        r = this._y0,
                        i = this._x1,
                        u = this._y1
                    if (isNaN(e)) (i = (e = Math.floor(n)) + 1), (u = (r = Math.floor(t)) + 1)
                    else {
                        for (var o, a, c = i - e, f = this._root; e > n || n >= i || r > t || t >= u; )
                            switch (
                                ((a = ((t < r) << 1) | (n < e)), ((o = new Array(4))[a] = f), (f = o), (c *= 2), a)
                            ) {
                                case 0:
                                    ;(i = e + c), (u = r + c)
                                    break
                                case 1:
                                    ;(e = i - c), (u = r + c)
                                    break
                                case 2:
                                    ;(i = e + c), (r = u - c)
                                    break
                                case 3:
                                    ;(e = i - c), (r = u - c)
                            }
                        this._root && this._root.length && (this._root = f)
                    }
                    return (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = u), this
                }),
                (Do.data = function() {
                    var n = []
                    return (
                        this.visit(function(t) {
                            if (!t.length)
                                do {
                                    n.push(t.data)
                                } while ((t = t.next))
                        }),
                        n
                    )
                }),
                (Do.extent = function(n) {
                    return arguments.length
                        ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1])
                        : isNaN(this._x0)
                        ? void 0
                        : [
                              [this._x0, this._y0],
                              [this._x1, this._y1],
                          ]
                }),
                (Do.find = function(n, t, e) {
                    var r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s = this._x0,
                        l = this._y0,
                        h = this._x1,
                        d = this._y1,
                        p = [],
                        v = this._root
                    for (
                        v && p.push(new Co(v, s, l, h, d)),
                            null == e ? (e = 1 / 0) : ((s = n - e), (l = t - e), (h = n + e), (d = t + e), (e *= e));
                        (c = p.pop());

                    )
                        if (!(!(v = c.node) || (i = c.x0) > h || (u = c.y0) > d || (o = c.x1) < s || (a = c.y1) < l))
                            if (v.length) {
                                var g = (i + o) / 2,
                                    y = (u + a) / 2
                                p.push(
                                    new Co(v[3], g, y, o, a),
                                    new Co(v[2], i, y, g, a),
                                    new Co(v[1], g, u, o, y),
                                    new Co(v[0], i, u, g, y)
                                ),
                                    (f = ((t >= y) << 1) | (n >= g)) &&
                                        ((c = p[p.length - 1]),
                                        (p[p.length - 1] = p[p.length - 1 - f]),
                                        (p[p.length - 1 - f] = c))
                            } else {
                                var b = n - +this._x.call(null, v.data),
                                    _ = t - +this._y.call(null, v.data),
                                    m = b * b + _ * _
                                if (m < e) {
                                    var x = Math.sqrt((e = m))
                                    ;(s = n - x), (l = t - x), (h = n + x), (d = t + x), (r = v.data)
                                }
                            }
                    return r
                }),
                (Do.remove = function(n) {
                    if (isNaN((u = +this._x.call(null, n))) || isNaN((o = +this._y.call(null, n)))) return this
                    var t,
                        e,
                        r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d = this._root,
                        p = this._x0,
                        v = this._y0,
                        g = this._x1,
                        y = this._y1
                    if (!d) return this
                    if (d.length)
                        for (;;) {
                            if (
                                ((f = u >= (a = (p + g) / 2)) ? (p = a) : (g = a),
                                (s = o >= (c = (v + y) / 2)) ? (v = c) : (y = c),
                                (t = d),
                                !(d = d[(l = (s << 1) | f)]))
                            )
                                return this
                            if (!d.length) break
                            ;(t[(l + 1) & 3] || t[(l + 2) & 3] || t[(l + 3) & 3]) && ((e = t), (h = l))
                        }
                    for (; d.data !== n; ) if (((r = d), !(d = d.next))) return this
                    return (
                        (i = d.next) && delete d.next,
                        r
                            ? (i ? (r.next = i) : delete r.next, this)
                            : t
                            ? (i ? (t[l] = i) : delete t[l],
                              (d = t[0] || t[1] || t[2] || t[3]) &&
                                  d === (t[3] || t[2] || t[1] || t[0]) &&
                                  !d.length &&
                                  (e ? (e[h] = d) : (this._root = d)),
                              this)
                            : ((this._root = i), this)
                    )
                }),
                (Do.removeAll = function(n) {
                    for (var t = 0, e = n.length; t < e; ++t) this.remove(n[t])
                    return this
                }),
                (Do.root = function() {
                    return this._root
                }),
                (Do.size = function() {
                    var n = 0
                    return (
                        this.visit(function(t) {
                            if (!t.length)
                                do {
                                    ++n
                                } while ((t = t.next))
                        }),
                        n
                    )
                }),
                (Do.visit = function(n) {
                    var t,
                        e,
                        r,
                        i,
                        u,
                        o,
                        a = [],
                        c = this._root
                    for (c && a.push(new Co(c, this._x0, this._y0, this._x1, this._y1)); (t = a.pop()); )
                        if (!n((c = t.node), (r = t.x0), (i = t.y0), (u = t.x1), (o = t.y1)) && c.length) {
                            var f = (r + u) / 2,
                                s = (i + o) / 2
                            ;(e = c[3]) && a.push(new Co(e, f, s, u, o)),
                                (e = c[2]) && a.push(new Co(e, r, s, f, o)),
                                (e = c[1]) && a.push(new Co(e, f, i, u, s)),
                                (e = c[0]) && a.push(new Co(e, r, i, f, s))
                        }
                    return this
                }),
                (Do.visitAfter = function(n) {
                    var t,
                        e = [],
                        r = []
                    for (
                        this._root && e.push(new Co(this._root, this._x0, this._y0, this._x1, this._y1));
                        (t = e.pop());

                    ) {
                        var i = t.node
                        if (i.length) {
                            var u,
                                o = t.x0,
                                a = t.y0,
                                c = t.x1,
                                f = t.y1,
                                s = (o + c) / 2,
                                l = (a + f) / 2
                            ;(u = i[0]) && e.push(new Co(u, o, a, s, l)),
                                (u = i[1]) && e.push(new Co(u, s, a, c, l)),
                                (u = i[2]) && e.push(new Co(u, o, l, s, f)),
                                (u = i[3]) && e.push(new Co(u, s, l, c, f))
                        }
                        r.push(t)
                    }
                    for (; (t = r.pop()); ) n(t.node, t.x0, t.y0, t.x1, t.y1)
                    return this
                }),
                (Do.x = function(n) {
                    return arguments.length ? ((this._x = n), this) : this._x
                }),
                (Do.y = function(n) {
                    return arguments.length ? ((this._y = n), this) : this._y
                })
            var Uo = function(n) {
                var t,
                    e,
                    r = 1,
                    i = 1
                function u() {
                    for (var n, u, a, c, f, s, l, h = t.length, d = 0; d < i; ++d)
                        for (u = Po(t, qo, Lo).visitAfter(o), n = 0; n < h; ++n)
                            (a = t[n]), (s = e[a.index]), (l = s * s), (c = a.x + a.vx), (f = a.y + a.vy), u.visit(p)
                    function p(n, t, e, i, u) {
                        var o = n.data,
                            h = n.r,
                            d = s + h
                        if (!o) return t > c + d || i < c - d || e > f + d || u < f - d
                        if (o.index > a.index) {
                            var p = c - o.x - o.vx,
                                v = f - o.y - o.vy,
                                g = p * p + v * v
                            g < d * d &&
                                (0 === p && (g += (p = So()) * p),
                                0 === v && (g += (v = So()) * v),
                                (g = ((d - (g = Math.sqrt(g))) / g) * r),
                                (a.vx += (p *= g) * (d = (h *= h) / (l + h))),
                                (a.vy += (v *= g) * d),
                                (o.vx -= p * (d = 1 - d)),
                                (o.vy -= v * d))
                        }
                    }
                }
                function o(n) {
                    if (n.data) return (n.r = e[n.data.index])
                    for (var t = (n.r = 0); t < 4; ++t) n[t] && n[t].r > n.r && (n.r = n[t].r)
                }
                function a() {
                    if (t) {
                        var r,
                            i,
                            u = t.length
                        for (e = new Array(u), r = 0; r < u; ++r) (i = t[r]), (e[i.index] = +n(i, r, t))
                    }
                }
                return (
                    'function' != typeof n && (n = ko(null == n ? 1 : +n)),
                    (u.initialize = function(n) {
                        ;(t = n), a()
                    }),
                    (u.iterations = function(n) {
                        return arguments.length ? ((i = +n), u) : i
                    }),
                    (u.strength = function(n) {
                        return arguments.length ? ((r = +n), u) : r
                    }),
                    (u.radius = function(t) {
                        return arguments.length ? ((n = 'function' == typeof t ? t : ko(+t)), a(), u) : n
                    }),
                    u
                )
            }
            function Bo(n) {
                return n.index
            }
            function Yo(n, t) {
                var e = n.get(t)
                if (!e) throw new Error('missing: ' + t)
                return e
            }
            var Fo = function(n) {
                var t,
                    e,
                    r,
                    i,
                    u,
                    o = Bo,
                    a = function(n) {
                        return 1 / Math.min(i[n.source.index], i[n.target.index])
                    },
                    c = ko(30),
                    f = 1
                function s(r) {
                    for (var i = 0, o = n.length; i < f; ++i)
                        for (var a, c, s, l, h, d, p, v = 0; v < o; ++v)
                            (c = (a = n[v]).source),
                                (l = (s = a.target).x + s.vx - c.x - c.vx || So()),
                                (h = s.y + s.vy - c.y - c.vy || So()),
                                (l *= d = (((d = Math.sqrt(l * l + h * h)) - e[v]) / d) * r * t[v]),
                                (h *= d),
                                (s.vx -= l * (p = u[v])),
                                (s.vy -= h * p),
                                (c.vx += l * (p = 1 - p)),
                                (c.vy += h * p)
                }
                function l() {
                    if (r) {
                        var a,
                            c,
                            f = r.length,
                            s = n.length,
                            l = ui(r, o)
                        for (a = 0, i = new Array(f); a < s; ++a)
                            ((c = n[a]).index = a),
                                'object' != typeof c.source && (c.source = Yo(l, c.source)),
                                'object' != typeof c.target && (c.target = Yo(l, c.target)),
                                (i[c.source.index] = (i[c.source.index] || 0) + 1),
                                (i[c.target.index] = (i[c.target.index] || 0) + 1)
                        for (a = 0, u = new Array(s); a < s; ++a)
                            (c = n[a]), (u[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]))
                        ;(t = new Array(s)), h(), (e = new Array(s)), d()
                    }
                }
                function h() {
                    if (r) for (var e = 0, i = n.length; e < i; ++e) t[e] = +a(n[e], e, n)
                }
                function d() {
                    if (r) for (var t = 0, i = n.length; t < i; ++t) e[t] = +c(n[t], t, n)
                }
                return (
                    null == n && (n = []),
                    (s.initialize = function(n) {
                        ;(r = n), l()
                    }),
                    (s.links = function(t) {
                        return arguments.length ? ((n = t), l(), s) : n
                    }),
                    (s.id = function(n) {
                        return arguments.length ? ((o = n), s) : o
                    }),
                    (s.iterations = function(n) {
                        return arguments.length ? ((f = +n), s) : f
                    }),
                    (s.strength = function(n) {
                        return arguments.length ? ((a = 'function' == typeof n ? n : ko(+n)), h(), s) : a
                    }),
                    (s.distance = function(n) {
                        return arguments.length ? ((c = 'function' == typeof n ? n : ko(+n)), d(), s) : c
                    }),
                    s
                )
            }
            function Io(n) {
                return n.x
            }
            function Ho(n) {
                return n.y
            }
            var Xo = Math.PI * (3 - Math.sqrt(5)),
                Vo = function(n) {
                    var t,
                        e = 1,
                        r = 0.001,
                        i = 1 - Math.pow(r, 1 / 300),
                        u = 0,
                        o = 0.6,
                        a = ui(),
                        c = re(s),
                        f = M('tick', 'end')
                    function s() {
                        l(), f.call('tick', t), e < r && (c.stop(), f.call('end', t))
                    }
                    function l(r) {
                        var c,
                            f,
                            s = n.length
                        void 0 === r && (r = 1)
                        for (var l = 0; l < r; ++l)
                            for (
                                e += (u - e) * i,
                                    a.each(function(n) {
                                        n(e)
                                    }),
                                    c = 0;
                                c < s;
                                ++c
                            )
                                null == (f = n[c]).fx ? (f.x += f.vx *= o) : ((f.x = f.fx), (f.vx = 0)),
                                    null == f.fy ? (f.y += f.vy *= o) : ((f.y = f.fy), (f.vy = 0))
                        return t
                    }
                    function h() {
                        for (var t, e = 0, r = n.length; e < r; ++e) {
                            if (
                                (((t = n[e]).index = e),
                                null != t.fx && (t.x = t.fx),
                                null != t.fy && (t.y = t.fy),
                                isNaN(t.x) || isNaN(t.y))
                            ) {
                                var i = 10 * Math.sqrt(e),
                                    u = e * Xo
                                ;(t.x = i * Math.cos(u)), (t.y = i * Math.sin(u))
                            }
                            ;(isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0)
                        }
                    }
                    function d(t) {
                        return t.initialize && t.initialize(n), t
                    }
                    return (
                        null == n && (n = []),
                        h(),
                        (t = {
                            tick: l,
                            restart: function() {
                                return c.restart(s), t
                            },
                            stop: function() {
                                return c.stop(), t
                            },
                            nodes: function(e) {
                                return arguments.length ? ((n = e), h(), a.each(d), t) : n
                            },
                            alpha: function(n) {
                                return arguments.length ? ((e = +n), t) : e
                            },
                            alphaMin: function(n) {
                                return arguments.length ? ((r = +n), t) : r
                            },
                            alphaDecay: function(n) {
                                return arguments.length ? ((i = +n), t) : +i
                            },
                            alphaTarget: function(n) {
                                return arguments.length ? ((u = +n), t) : u
                            },
                            velocityDecay: function(n) {
                                return arguments.length ? ((o = 1 - n), t) : 1 - o
                            },
                            force: function(n, e) {
                                return arguments.length > 1 ? (null == e ? a.remove(n) : a.set(n, d(e)), t) : a.get(n)
                            },
                            find: function(t, e, r) {
                                var i,
                                    u,
                                    o,
                                    a,
                                    c,
                                    f = 0,
                                    s = n.length
                                for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                                    (o = (i = t - (a = n[f]).x) * i + (u = e - a.y) * u) < r && ((c = a), (r = o))
                                return c
                            },
                            on: function(n, e) {
                                return arguments.length > 1 ? (f.on(n, e), t) : f.on(n)
                            },
                        })
                    )
                },
                Go = function() {
                    var n,
                        t,
                        e,
                        r,
                        i = ko(-30),
                        u = 1,
                        o = 1 / 0,
                        a = 0.81
                    function c(r) {
                        var i,
                            u = n.length,
                            o = Po(n, Io, Ho).visitAfter(s)
                        for (e = r, i = 0; i < u; ++i) (t = n[i]), o.visit(l)
                    }
                    function f() {
                        if (n) {
                            var t,
                                e,
                                u = n.length
                            for (r = new Array(u), t = 0; t < u; ++t) (e = n[t]), (r[e.index] = +i(e, t, n))
                        }
                    }
                    function s(n) {
                        var t,
                            e,
                            i,
                            u,
                            o,
                            a = 0,
                            c = 0
                        if (n.length) {
                            for (i = u = o = 0; o < 4; ++o)
                                (t = n[o]) &&
                                    (e = Math.abs(t.value)) &&
                                    ((a += t.value), (c += e), (i += e * t.x), (u += e * t.y))
                            ;(n.x = i / c), (n.y = u / c)
                        } else {
                            ;((t = n).x = t.data.x), (t.y = t.data.y)
                            do {
                                a += r[t.data.index]
                            } while ((t = t.next))
                        }
                        n.value = a
                    }
                    function l(n, i, c, f) {
                        if (!n.value) return !0
                        var s = n.x - t.x,
                            l = n.y - t.y,
                            h = f - i,
                            d = s * s + l * l
                        if ((h * h) / a < d)
                            return (
                                d < o &&
                                    (0 === s && (d += (s = So()) * s),
                                    0 === l && (d += (l = So()) * l),
                                    d < u && (d = Math.sqrt(u * d)),
                                    (t.vx += (s * n.value * e) / d),
                                    (t.vy += (l * n.value * e) / d)),
                                !0
                            )
                        if (!(n.length || d >= o)) {
                            ;(n.data !== t || n.next) &&
                                (0 === s && (d += (s = So()) * s),
                                0 === l && (d += (l = So()) * l),
                                d < u && (d = Math.sqrt(u * d)))
                            do {
                                n.data !== t && ((h = (r[n.data.index] * e) / d), (t.vx += s * h), (t.vy += l * h))
                            } while ((n = n.next))
                        }
                    }
                    return (
                        (c.initialize = function(t) {
                            ;(n = t), f()
                        }),
                        (c.strength = function(n) {
                            return arguments.length ? ((i = 'function' == typeof n ? n : ko(+n)), f(), c) : i
                        }),
                        (c.distanceMin = function(n) {
                            return arguments.length ? ((u = n * n), c) : Math.sqrt(u)
                        }),
                        (c.distanceMax = function(n) {
                            return arguments.length ? ((o = n * n), c) : Math.sqrt(o)
                        }),
                        (c.theta = function(n) {
                            return arguments.length ? ((a = n * n), c) : Math.sqrt(a)
                        }),
                        c
                    )
                },
                $o = function(n, t, e) {
                    var r,
                        i,
                        u,
                        o = ko(0.1)
                    function a(n) {
                        for (var o = 0, a = r.length; o < a; ++o) {
                            var c = r[o],
                                f = c.x - t || 1e-6,
                                s = c.y - e || 1e-6,
                                l = Math.sqrt(f * f + s * s),
                                h = ((u[o] - l) * i[o] * n) / l
                            ;(c.vx += f * h), (c.vy += s * h)
                        }
                    }
                    function c() {
                        if (r) {
                            var t,
                                e = r.length
                            for (i = new Array(e), u = new Array(e), t = 0; t < e; ++t)
                                (u[t] = +n(r[t], t, r)), (i[t] = isNaN(u[t]) ? 0 : +o(r[t], t, r))
                        }
                    }
                    return (
                        'function' != typeof n && (n = ko(+n)),
                        null == t && (t = 0),
                        null == e && (e = 0),
                        (a.initialize = function(n) {
                            ;(r = n), c()
                        }),
                        (a.strength = function(n) {
                            return arguments.length ? ((o = 'function' == typeof n ? n : ko(+n)), c(), a) : o
                        }),
                        (a.radius = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : ko(+t)), c(), a) : n
                        }),
                        (a.x = function(n) {
                            return arguments.length ? ((t = +n), a) : t
                        }),
                        (a.y = function(n) {
                            return arguments.length ? ((e = +n), a) : e
                        }),
                        a
                    )
                },
                Wo = function(n) {
                    var t,
                        e,
                        r,
                        i = ko(0.1)
                    function u(n) {
                        for (var i, u = 0, o = t.length; u < o; ++u) (i = t[u]).vx += (r[u] - i.x) * e[u] * n
                    }
                    function o() {
                        if (t) {
                            var u,
                                o = t.length
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u)
                                e[u] = isNaN((r[u] = +n(t[u], u, t))) ? 0 : +i(t[u], u, t)
                        }
                    }
                    return (
                        'function' != typeof n && (n = ko(null == n ? 0 : +n)),
                        (u.initialize = function(n) {
                            ;(t = n), o()
                        }),
                        (u.strength = function(n) {
                            return arguments.length ? ((i = 'function' == typeof n ? n : ko(+n)), o(), u) : i
                        }),
                        (u.x = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : ko(+t)), o(), u) : n
                        }),
                        u
                    )
                },
                Zo = function(n) {
                    var t,
                        e,
                        r,
                        i = ko(0.1)
                    function u(n) {
                        for (var i, u = 0, o = t.length; u < o; ++u) (i = t[u]).vy += (r[u] - i.y) * e[u] * n
                    }
                    function o() {
                        if (t) {
                            var u,
                                o = t.length
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u)
                                e[u] = isNaN((r[u] = +n(t[u], u, t))) ? 0 : +i(t[u], u, t)
                        }
                    }
                    return (
                        'function' != typeof n && (n = ko(null == n ? 0 : +n)),
                        (u.initialize = function(n) {
                            ;(t = n), o()
                        }),
                        (u.strength = function(n) {
                            return arguments.length ? ((i = 'function' == typeof n ? n : ko(+n)), o(), u) : i
                        }),
                        (u.y = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : ko(+t)), o(), u) : n
                        }),
                        u
                    )
                },
                Qo = function(n, t) {
                    if ((e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf('e')) < 0) return null
                    var e,
                        r = n.slice(0, e)
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +n.slice(e + 1)]
                },
                Jo = function(n) {
                    return (n = Qo(Math.abs(n))) ? n[1] : NaN
                },
                Ko = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
            function na(n) {
                if (!(t = Ko.exec(n))) throw new Error('invalid format: ' + n)
                var t
                return new ta({
                    fill: t[1],
                    align: t[2],
                    sign: t[3],
                    symbol: t[4],
                    zero: t[5],
                    width: t[6],
                    comma: t[7],
                    precision: t[8] && t[8].slice(1),
                    trim: t[9],
                    type: t[10],
                })
            }
            function ta(n) {
                ;(this.fill = void 0 === n.fill ? ' ' : n.fill + ''),
                    (this.align = void 0 === n.align ? '>' : n.align + ''),
                    (this.sign = void 0 === n.sign ? '-' : n.sign + ''),
                    (this.symbol = void 0 === n.symbol ? '' : n.symbol + ''),
                    (this.zero = !!n.zero),
                    (this.width = void 0 === n.width ? void 0 : +n.width),
                    (this.comma = !!n.comma),
                    (this.precision = void 0 === n.precision ? void 0 : +n.precision),
                    (this.trim = !!n.trim),
                    (this.type = void 0 === n.type ? '' : n.type + '')
            }
            ;(na.prototype = ta.prototype),
                (ta.prototype.toString = function() {
                    return (
                        this.fill +
                        this.align +
                        this.sign +
                        this.symbol +
                        (this.zero ? '0' : '') +
                        (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
                        (this.comma ? ',' : '') +
                        (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
                        (this.trim ? '~' : '') +
                        this.type
                    )
                })
            var ea,
                ra,
                ia,
                ua,
                oa = function(n, t) {
                    var e = Qo(n, t)
                    if (!e) return n + ''
                    var r = e[0],
                        i = e[1]
                    return i < 0
                        ? '0.' + new Array(-i).join('0') + r
                        : r.length > i + 1
                        ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
                        : r + new Array(i - r.length + 2).join('0')
                },
                aa = {
                    '%': function(n, t) {
                        return (100 * n).toFixed(t)
                    },
                    b: function(n) {
                        return Math.round(n).toString(2)
                    },
                    c: function(n) {
                        return n + ''
                    },
                    d: function(n) {
                        return Math.round(n).toString(10)
                    },
                    e: function(n, t) {
                        return n.toExponential(t)
                    },
                    f: function(n, t) {
                        return n.toFixed(t)
                    },
                    g: function(n, t) {
                        return n.toPrecision(t)
                    },
                    o: function(n) {
                        return Math.round(n).toString(8)
                    },
                    p: function(n, t) {
                        return oa(100 * n, t)
                    },
                    r: oa,
                    s: function(n, t) {
                        var e = Qo(n, t)
                        if (!e) return n + ''
                        var r = e[0],
                            i = e[1],
                            u = i - (ea = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                            o = r.length
                        return u === o
                            ? r
                            : u > o
                            ? r + new Array(u - o + 1).join('0')
                            : u > 0
                            ? r.slice(0, u) + '.' + r.slice(u)
                            : '0.' + new Array(1 - u).join('0') + Qo(n, Math.max(0, t + u - 1))[0]
                    },
                    X: function(n) {
                        return Math.round(n)
                            .toString(16)
                            .toUpperCase()
                    },
                    x: function(n) {
                        return Math.round(n).toString(16)
                    },
                },
                ca = function(n) {
                    return n
                },
                fa = Array.prototype.map,
                sa = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
                la = function(n) {
                    var t,
                        e,
                        r =
                            void 0 === n.grouping || void 0 === n.thousands
                                ? ca
                                : ((t = fa.call(n.grouping, Number)),
                                  (e = n.thousands + ''),
                                  function(n, r) {
                                      for (
                                          var i = n.length, u = [], o = 0, a = t[0], c = 0;
                                          i > 0 &&
                                          a > 0 &&
                                          (c + a + 1 > r && (a = Math.max(1, r - c)),
                                          u.push(n.substring((i -= a), i + a)),
                                          !((c += a + 1) > r));

                                      )
                                          a = t[(o = (o + 1) % t.length)]
                                      return u.reverse().join(e)
                                  }),
                        i = void 0 === n.currency ? '' : n.currency[0] + '',
                        u = void 0 === n.currency ? '' : n.currency[1] + '',
                        o = void 0 === n.decimal ? '.' : n.decimal + '',
                        a =
                            void 0 === n.numerals
                                ? ca
                                : (function(n) {
                                      return function(t) {
                                          return t.replace(/[0-9]/g, function(t) {
                                              return n[+t]
                                          })
                                      }
                                  })(fa.call(n.numerals, String)),
                        c = void 0 === n.percent ? '%' : n.percent + '',
                        f = void 0 === n.minus ? '-' : n.minus + '',
                        s = void 0 === n.nan ? 'NaN' : n.nan + ''
                    function l(n) {
                        var t = (n = na(n)).fill,
                            e = n.align,
                            l = n.sign,
                            h = n.symbol,
                            d = n.zero,
                            p = n.width,
                            v = n.comma,
                            g = n.precision,
                            y = n.trim,
                            b = n.type
                        'n' === b ? ((v = !0), (b = 'g')) : aa[b] || (void 0 === g && (g = 12), (y = !0), (b = 'g')),
                            (d || ('0' === t && '=' === e)) && ((d = !0), (t = '0'), (e = '='))
                        var _ = '$' === h ? i : '#' === h && /[boxX]/.test(b) ? '0' + b.toLowerCase() : '',
                            m = '$' === h ? u : /[%p]/.test(b) ? c : '',
                            x = aa[b],
                            w = /[defgprs%]/.test(b)
                        function M(n) {
                            var i,
                                u,
                                c,
                                h = _,
                                M = m
                            if ('c' === b) (M = x(n) + M), (n = '')
                            else {
                                var N = (n = +n) < 0 || 1 / n < 0
                                if (
                                    ((n = isNaN(n) ? s : x(Math.abs(n), g)),
                                    y &&
                                        (n = (function(n) {
                                            n: for (var t, e = n.length, r = 1, i = -1; r < e; ++r)
                                                switch (n[r]) {
                                                    case '.':
                                                        i = t = r
                                                        break
                                                    case '0':
                                                        0 === i && (i = r), (t = r)
                                                        break
                                                    default:
                                                        if (!+n[r]) break n
                                                        i > 0 && (i = 0)
                                                }
                                            return i > 0 ? n.slice(0, i) + n.slice(t + 1) : n
                                        })(n)),
                                    N && 0 == +n && '+' !== l && (N = !1),
                                    (h = (N ? ('(' === l ? l : f) : '-' === l || '(' === l ? '' : l) + h),
                                    (M = ('s' === b ? sa[8 + ea / 3] : '') + M + (N && '(' === l ? ')' : '')),
                                    w)
                                )
                                    for (i = -1, u = n.length; ++i < u; )
                                        if (48 > (c = n.charCodeAt(i)) || c > 57) {
                                            ;(M = (46 === c ? o + n.slice(i + 1) : n.slice(i)) + M), (n = n.slice(0, i))
                                            break
                                        }
                            }
                            v && !d && (n = r(n, 1 / 0))
                            var A = h.length + n.length + M.length,
                                T = A < p ? new Array(p - A + 1).join(t) : ''
                            switch ((v && d && ((n = r(T + n, T.length ? p - M.length : 1 / 0)), (T = '')), e)) {
                                case '<':
                                    n = h + n + M + T
                                    break
                                case '=':
                                    n = h + T + n + M
                                    break
                                case '^':
                                    n = T.slice(0, (A = T.length >> 1)) + h + n + M + T.slice(A)
                                    break
                                default:
                                    n = T + h + n + M
                            }
                            return a(n)
                        }
                        return (
                            (g =
                                void 0 === g
                                    ? 6
                                    : /[gprs]/.test(b)
                                    ? Math.max(1, Math.min(21, g))
                                    : Math.max(0, Math.min(20, g))),
                            (M.toString = function() {
                                return n + ''
                            }),
                            M
                        )
                    }
                    return {
                        format: l,
                        formatPrefix: function(n, t) {
                            var e = l((((n = na(n)).type = 'f'), n)),
                                r = 3 * Math.max(-8, Math.min(8, Math.floor(Jo(t) / 3))),
                                i = Math.pow(10, -r),
                                u = sa[8 + r / 3]
                            return function(n) {
                                return e(i * n) + u
                            }
                        },
                    }
                }
            function ha(n) {
                return (ra = la(n)), (ia = ra.format), (ua = ra.formatPrefix), ra
            }
            ha({ decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''], minus: '-' })
            var da = function(n) {
                    return Math.max(0, -Jo(Math.abs(n)))
                },
                pa = function(n, t) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Jo(t) / 3))) - Jo(Math.abs(n)))
                },
                va = function(n, t) {
                    return (n = Math.abs(n)), (t = Math.abs(t) - n), Math.max(0, Jo(t) - Jo(n)) + 1
                },
                ga = function() {
                    return new ya()
                }
            function ya() {
                this.reset()
            }
            ya.prototype = {
                constructor: ya,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(n) {
                    _a(ba, n, this.t), _a(this, ba.s, this.s), this.s ? (this.t += ba.t) : (this.s = ba.t)
                },
                valueOf: function() {
                    return this.s
                },
            }
            var ba = new ya()
            function _a(n, t, e) {
                var r = (n.s = t + e),
                    i = r - t,
                    u = r - i
                n.t = t - u + (e - i)
            }
            var ma = Math.PI,
                xa = ma / 2,
                wa = ma / 4,
                Ma = 2 * ma,
                Na = 180 / ma,
                Aa = ma / 180,
                Ta = Math.abs,
                ka = Math.atan,
                Sa = Math.atan2,
                Ea = Math.cos,
                Ca = Math.ceil,
                Oa = Math.exp,
                za = (Math.floor, Math.log),
                Pa = Math.pow,
                Ra = Math.sin,
                ja =
                    Math.sign ||
                    function(n) {
                        return n > 0 ? 1 : n < 0 ? -1 : 0
                    },
                Da = Math.sqrt,
                qa = Math.tan
            function La(n) {
                return n > 1 ? 0 : n < -1 ? ma : Math.acos(n)
            }
            function Ua(n) {
                return n > 1 ? xa : n < -1 ? -xa : Math.asin(n)
            }
            function Ba(n) {
                return (n = Ra(n / 2)) * n
            }
            function Ya() {}
            function Fa(n, t) {
                n && Ha.hasOwnProperty(n.type) && Ha[n.type](n, t)
            }
            var Ia = {
                    Feature: function(n, t) {
                        Fa(n.geometry, t)
                    },
                    FeatureCollection: function(n, t) {
                        for (var e = n.features, r = -1, i = e.length; ++r < i; ) Fa(e[r].geometry, t)
                    },
                },
                Ha = {
                    Sphere: function(n, t) {
                        t.sphere()
                    },
                    Point: function(n, t) {
                        ;(n = n.coordinates), t.point(n[0], n[1], n[2])
                    },
                    MultiPoint: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
                            (n = e[r]), t.point(n[0], n[1], n[2])
                    },
                    LineString: function(n, t) {
                        Xa(n.coordinates, t, 0)
                    },
                    MultiLineString: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; ) Xa(e[r], t, 0)
                    },
                    Polygon: function(n, t) {
                        Va(n.coordinates, t)
                    },
                    MultiPolygon: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; ) Va(e[r], t)
                    },
                    GeometryCollection: function(n, t) {
                        for (var e = n.geometries, r = -1, i = e.length; ++r < i; ) Fa(e[r], t)
                    },
                }
            function Xa(n, t, e) {
                var r,
                    i = -1,
                    u = n.length - e
                for (t.lineStart(); ++i < u; ) (r = n[i]), t.point(r[0], r[1], r[2])
                t.lineEnd()
            }
            function Va(n, t) {
                var e = -1,
                    r = n.length
                for (t.polygonStart(); ++e < r; ) Xa(n[e], t, 1)
                t.polygonEnd()
            }
            var Ga,
                $a,
                Wa,
                Za,
                Qa,
                Ja = function(n, t) {
                    n && Ia.hasOwnProperty(n.type) ? Ia[n.type](n, t) : Fa(n, t)
                },
                Ka = ga(),
                nc = ga(),
                tc = {
                    point: Ya,
                    lineStart: Ya,
                    lineEnd: Ya,
                    polygonStart: function() {
                        Ka.reset(), (tc.lineStart = ec), (tc.lineEnd = rc)
                    },
                    polygonEnd: function() {
                        var n = +Ka
                        nc.add(n < 0 ? Ma + n : n), (this.lineStart = this.lineEnd = this.point = Ya)
                    },
                    sphere: function() {
                        nc.add(Ma)
                    },
                }
            function ec() {
                tc.point = ic
            }
            function rc() {
                uc(Ga, $a)
            }
            function ic(n, t) {
                ;(tc.point = uc), (Ga = n), ($a = t), (Wa = n *= Aa), (Za = Ea((t = (t *= Aa) / 2 + wa))), (Qa = Ra(t))
            }
            function uc(n, t) {
                var e = (n *= Aa) - Wa,
                    r = e >= 0 ? 1 : -1,
                    i = r * e,
                    u = Ea((t = (t *= Aa) / 2 + wa)),
                    o = Ra(t),
                    a = Qa * o,
                    c = Za * u + a * Ea(i),
                    f = a * r * Ra(i)
                Ka.add(Sa(f, c)), (Wa = n), (Za = u), (Qa = o)
            }
            var oc = function(n) {
                return nc.reset(), Ja(n, tc), 2 * nc
            }
            function ac(n) {
                return [Sa(n[1], n[0]), Ua(n[2])]
            }
            function cc(n) {
                var t = n[0],
                    e = n[1],
                    r = Ea(e)
                return [r * Ea(t), r * Ra(t), Ra(e)]
            }
            function fc(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
            }
            function sc(n, t) {
                return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
            }
            function lc(n, t) {
                ;(n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2])
            }
            function hc(n, t) {
                return [n[0] * t, n[1] * t, n[2] * t]
            }
            function dc(n) {
                var t = Da(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])
                ;(n[0] /= t), (n[1] /= t), (n[2] /= t)
            }
            var pc,
                vc,
                gc,
                yc,
                bc,
                _c,
                mc,
                xc,
                wc,
                Mc,
                Nc = ga(),
                Ac = {
                    point: Tc,
                    lineStart: Sc,
                    lineEnd: Ec,
                    polygonStart: function() {
                        ;(Ac.point = Cc), (Ac.lineStart = Oc), (Ac.lineEnd = zc), Nc.reset(), tc.polygonStart()
                    },
                    polygonEnd: function() {
                        tc.polygonEnd(),
                            (Ac.point = Tc),
                            (Ac.lineStart = Sc),
                            (Ac.lineEnd = Ec),
                            Ka < 0
                                ? ((pc = -(gc = 180)), (vc = -(yc = 90)))
                                : Nc > 1e-6
                                ? (yc = 90)
                                : Nc < -1e-6 && (vc = -90),
                            (Mc[0] = pc),
                            (Mc[1] = gc)
                    },
                    sphere: function() {
                        ;(pc = -(gc = 180)), (vc = -(yc = 90))
                    },
                }
            function Tc(n, t) {
                wc.push((Mc = [(pc = n), (gc = n)])), t < vc && (vc = t), t > yc && (yc = t)
            }
            function kc(n, t) {
                var e = cc([n * Aa, t * Aa])
                if (xc) {
                    var r = sc(xc, e),
                        i = sc([r[1], -r[0], 0], r)
                    dc(i), (i = ac(i))
                    var u,
                        o = n - bc,
                        a = o > 0 ? 1 : -1,
                        c = i[0] * Na * a,
                        f = Ta(o) > 180
                    f ^ (a * bc < c && c < a * n)
                        ? (u = i[1] * Na) > yc && (yc = u)
                        : f ^ (a * bc < (c = ((c + 360) % 360) - 180) && c < a * n)
                        ? (u = -i[1] * Na) < vc && (vc = u)
                        : (t < vc && (vc = t), t > yc && (yc = t)),
                        f
                            ? n < bc
                                ? Pc(pc, n) > Pc(pc, gc) && (gc = n)
                                : Pc(n, gc) > Pc(pc, gc) && (pc = n)
                            : gc >= pc
                            ? (n < pc && (pc = n), n > gc && (gc = n))
                            : n > bc
                            ? Pc(pc, n) > Pc(pc, gc) && (gc = n)
                            : Pc(n, gc) > Pc(pc, gc) && (pc = n)
                } else wc.push((Mc = [(pc = n), (gc = n)]))
                t < vc && (vc = t), t > yc && (yc = t), (xc = e), (bc = n)
            }
            function Sc() {
                Ac.point = kc
            }
            function Ec() {
                ;(Mc[0] = pc), (Mc[1] = gc), (Ac.point = Tc), (xc = null)
            }
            function Cc(n, t) {
                if (xc) {
                    var e = n - bc
                    Nc.add(Ta(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else (_c = n), (mc = t)
                tc.point(n, t), kc(n, t)
            }
            function Oc() {
                tc.lineStart()
            }
            function zc() {
                Cc(_c, mc), tc.lineEnd(), Ta(Nc) > 1e-6 && (pc = -(gc = 180)), (Mc[0] = pc), (Mc[1] = gc), (xc = null)
            }
            function Pc(n, t) {
                return (t -= n) < 0 ? t + 360 : t
            }
            function Rc(n, t) {
                return n[0] - t[0]
            }
            function jc(n, t) {
                return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
            }
            var Dc,
                qc,
                Lc,
                Uc,
                Bc,
                Yc,
                Fc,
                Ic,
                Hc,
                Xc,
                Vc,
                Gc,
                $c,
                Wc,
                Zc,
                Qc,
                Jc = function(n) {
                    var t, e, r, i, u, o, a
                    if (((yc = gc = -(pc = vc = 1 / 0)), (wc = []), Ja(n, Ac), (e = wc.length))) {
                        for (wc.sort(Rc), t = 1, u = [(r = wc[0])]; t < e; ++t)
                            jc(r, (i = wc[t])[0]) || jc(r, i[1])
                                ? (Pc(r[0], i[1]) > Pc(r[0], r[1]) && (r[1] = i[1]),
                                  Pc(i[0], r[1]) > Pc(r[0], r[1]) && (r[0] = i[0]))
                                : u.push((r = i))
                        for (o = -1 / 0, t = 0, r = u[(e = u.length - 1)]; t <= e; r = i, ++t)
                            (i = u[t]), (a = Pc(r[1], i[0])) > o && ((o = a), (pc = i[0]), (gc = r[1]))
                    }
                    return (
                        (wc = Mc = null),
                        pc === 1 / 0 || vc === 1 / 0
                            ? [
                                  [NaN, NaN],
                                  [NaN, NaN],
                              ]
                            : [
                                  [pc, vc],
                                  [gc, yc],
                              ]
                    )
                },
                Kc = {
                    sphere: Ya,
                    point: nf,
                    lineStart: ef,
                    lineEnd: of,
                    polygonStart: function() {
                        ;(Kc.lineStart = af), (Kc.lineEnd = cf)
                    },
                    polygonEnd: function() {
                        ;(Kc.lineStart = ef), (Kc.lineEnd = of)
                    },
                }
            function nf(n, t) {
                n *= Aa
                var e = Ea((t *= Aa))
                tf(e * Ea(n), e * Ra(n), Ra(t))
            }
            function tf(n, t, e) {
                ++Dc, (Lc += (n - Lc) / Dc), (Uc += (t - Uc) / Dc), (Bc += (e - Bc) / Dc)
            }
            function ef() {
                Kc.point = rf
            }
            function rf(n, t) {
                n *= Aa
                var e = Ea((t *= Aa))
                ;(Wc = e * Ea(n)), (Zc = e * Ra(n)), (Qc = Ra(t)), (Kc.point = uf), tf(Wc, Zc, Qc)
            }
            function uf(n, t) {
                n *= Aa
                var e = Ea((t *= Aa)),
                    r = e * Ea(n),
                    i = e * Ra(n),
                    u = Ra(t),
                    o = Sa(
                        Da((o = Zc * u - Qc * i) * o + (o = Qc * r - Wc * u) * o + (o = Wc * i - Zc * r) * o),
                        Wc * r + Zc * i + Qc * u
                    )
                ;(qc += o),
                    (Yc += o * (Wc + (Wc = r))),
                    (Fc += o * (Zc + (Zc = i))),
                    (Ic += o * (Qc + (Qc = u))),
                    tf(Wc, Zc, Qc)
            }
            function of() {
                Kc.point = nf
            }
            function af() {
                Kc.point = ff
            }
            function cf() {
                sf(Gc, $c), (Kc.point = nf)
            }
            function ff(n, t) {
                ;(Gc = n), ($c = t), (n *= Aa), (t *= Aa), (Kc.point = sf)
                var e = Ea(t)
                ;(Wc = e * Ea(n)), (Zc = e * Ra(n)), (Qc = Ra(t)), tf(Wc, Zc, Qc)
            }
            function sf(n, t) {
                n *= Aa
                var e = Ea((t *= Aa)),
                    r = e * Ea(n),
                    i = e * Ra(n),
                    u = Ra(t),
                    o = Zc * u - Qc * i,
                    a = Qc * r - Wc * u,
                    c = Wc * i - Zc * r,
                    f = Da(o * o + a * a + c * c),
                    s = Ua(f),
                    l = f && -s / f
                ;(Hc += l * o),
                    (Xc += l * a),
                    (Vc += l * c),
                    (qc += s),
                    (Yc += s * (Wc + (Wc = r))),
                    (Fc += s * (Zc + (Zc = i))),
                    (Ic += s * (Qc + (Qc = u))),
                    tf(Wc, Zc, Qc)
            }
            var lf = function(n) {
                    ;(Dc = qc = Lc = Uc = Bc = Yc = Fc = Ic = Hc = Xc = Vc = 0), Ja(n, Kc)
                    var t = Hc,
                        e = Xc,
                        r = Vc,
                        i = t * t + e * e + r * r
                    return i < 1e-12 &&
                        ((t = Yc),
                        (e = Fc),
                        (r = Ic),
                        qc < 1e-6 && ((t = Lc), (e = Uc), (r = Bc)),
                        (i = t * t + e * e + r * r) < 1e-12)
                        ? [NaN, NaN]
                        : [Sa(e, t) * Na, Ua(r / Da(i)) * Na]
                },
                hf = function(n) {
                    return function() {
                        return n
                    }
                },
                df = function(n, t) {
                    function e(e, r) {
                        return (e = n(e, r)), t(e[0], e[1])
                    }
                    return (
                        n.invert &&
                            t.invert &&
                            (e.invert = function(e, r) {
                                return (e = t.invert(e, r)) && n.invert(e[0], e[1])
                            }),
                        e
                    )
                }
            function pf(n, t) {
                return [Ta(n) > ma ? n + Math.round(-n / Ma) * Ma : n, t]
            }
            function vf(n, t, e) {
                return (n %= Ma) ? (t || e ? df(yf(n), bf(t, e)) : yf(n)) : t || e ? bf(t, e) : pf
            }
            function gf(n) {
                return function(t, e) {
                    return [(t += n) > ma ? t - Ma : t < -ma ? t + Ma : t, e]
                }
            }
            function yf(n) {
                var t = gf(n)
                return (t.invert = gf(-n)), t
            }
            function bf(n, t) {
                var e = Ea(n),
                    r = Ra(n),
                    i = Ea(t),
                    u = Ra(t)
                function o(n, t) {
                    var o = Ea(t),
                        a = Ea(n) * o,
                        c = Ra(n) * o,
                        f = Ra(t),
                        s = f * e + a * r
                    return [Sa(c * i - s * u, a * e - f * r), Ua(s * i + c * u)]
                }
                return (
                    (o.invert = function(n, t) {
                        var o = Ea(t),
                            a = Ea(n) * o,
                            c = Ra(n) * o,
                            f = Ra(t),
                            s = f * i - c * u
                        return [Sa(c * i + f * u, a * e + s * r), Ua(s * e - a * r)]
                    }),
                    o
                )
            }
            pf.invert = pf
            var _f = function(n) {
                function t(t) {
                    return ((t = n(t[0] * Aa, t[1] * Aa))[0] *= Na), (t[1] *= Na), t
                }
                return (
                    (n = vf(n[0] * Aa, n[1] * Aa, n.length > 2 ? n[2] * Aa : 0)),
                    (t.invert = function(t) {
                        return ((t = n.invert(t[0] * Aa, t[1] * Aa))[0] *= Na), (t[1] *= Na), t
                    }),
                    t
                )
            }
            function mf(n, t, e, r, i, u) {
                if (e) {
                    var o = Ea(t),
                        a = Ra(t),
                        c = r * e
                    null == i
                        ? ((i = t + r * Ma), (u = t - c / 2))
                        : ((i = xf(o, i)), (u = xf(o, u)), (r > 0 ? i < u : i > u) && (i += r * Ma))
                    for (var f, s = i; r > 0 ? s > u : s < u; s -= c)
                        (f = ac([o, -a * Ea(s), -a * Ra(s)])), n.point(f[0], f[1])
                }
            }
            function xf(n, t) {
                ;((t = cc(t))[0] -= n), dc(t)
                var e = La(-t[1])
                return ((-t[2] < 0 ? -e : e) + Ma - 1e-6) % Ma
            }
            var wf = function() {
                    var n,
                        t,
                        e = hf([0, 0]),
                        r = hf(90),
                        i = hf(6),
                        u = {
                            point: function(e, r) {
                                n.push((e = t(e, r))), (e[0] *= Na), (e[1] *= Na)
                            },
                        }
                    function o() {
                        var o = e.apply(this, arguments),
                            a = r.apply(this, arguments) * Aa,
                            c = i.apply(this, arguments) * Aa
                        return (
                            (n = []),
                            (t = vf(-o[0] * Aa, -o[1] * Aa, 0).invert),
                            mf(u, a, c, 1),
                            (o = { type: 'Polygon', coordinates: [n] }),
                            (n = t = null),
                            o
                        )
                    }
                    return (
                        (o.center = function(n) {
                            return arguments.length ? ((e = 'function' == typeof n ? n : hf([+n[0], +n[1]])), o) : e
                        }),
                        (o.radius = function(n) {
                            return arguments.length ? ((r = 'function' == typeof n ? n : hf(+n)), o) : r
                        }),
                        (o.precision = function(n) {
                            return arguments.length ? ((i = 'function' == typeof n ? n : hf(+n)), o) : i
                        }),
                        o
                    )
                },
                Mf = function() {
                    var n,
                        t = []
                    return {
                        point: function(t, e) {
                            n.push([t, e])
                        },
                        lineStart: function() {
                            t.push((n = []))
                        },
                        lineEnd: Ya,
                        rejoin: function() {
                            t.length > 1 && t.push(t.pop().concat(t.shift()))
                        },
                        result: function() {
                            var e = t
                            return (t = []), (n = null), e
                        },
                    }
                },
                Nf = function(n, t) {
                    return Ta(n[0] - t[0]) < 1e-6 && Ta(n[1] - t[1]) < 1e-6
                }
            function Af(n, t, e, r) {
                ;(this.x = n), (this.z = t), (this.o = e), (this.e = r), (this.v = !1), (this.n = this.p = null)
            }
            var Tf = function(n, t, e, r, i) {
                var u,
                    o,
                    a = [],
                    c = []
                if (
                    (n.forEach(function(n) {
                        if (!((t = n.length - 1) <= 0)) {
                            var t,
                                e,
                                r = n[0],
                                o = n[t]
                            if (Nf(r, o)) {
                                for (i.lineStart(), u = 0; u < t; ++u) i.point((r = n[u])[0], r[1])
                                i.lineEnd()
                            } else
                                a.push((e = new Af(r, n, null, !0))),
                                    c.push((e.o = new Af(r, null, e, !1))),
                                    a.push((e = new Af(o, n, null, !1))),
                                    c.push((e.o = new Af(o, null, e, !0)))
                        }
                    }),
                    a.length)
                ) {
                    for (c.sort(t), kf(a), kf(c), u = 0, o = c.length; u < o; ++u) c[u].e = e = !e
                    for (var f, s, l = a[0]; ; ) {
                        for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return
                        ;(f = h.z), i.lineStart()
                        do {
                            if (((h.v = h.o.v = !0), h.e)) {
                                if (d) for (u = 0, o = f.length; u < o; ++u) i.point((s = f[u])[0], s[1])
                                else r(h.x, h.n.x, 1, i)
                                h = h.n
                            } else {
                                if (d) for (f = h.p.z, u = f.length - 1; u >= 0; --u) i.point((s = f[u])[0], s[1])
                                else r(h.x, h.p.x, -1, i)
                                h = h.p
                            }
                            ;(f = (h = h.o).z), (d = !d)
                        } while (!h.v)
                        i.lineEnd()
                    }
                }
            }
            function kf(n) {
                if ((t = n.length)) {
                    for (var t, e, r = 0, i = n[0]; ++r < t; ) (i.n = e = n[r]), (e.p = i), (i = e)
                    ;(i.n = e = n[0]), (e.p = i)
                }
            }
            var Sf = ga()
            function Ef(n) {
                return Ta(n[0]) <= ma ? n[0] : ja(n[0]) * (((Ta(n[0]) + ma) % Ma) - ma)
            }
            var Cf = function(n, t) {
                    var e = Ef(t),
                        r = t[1],
                        i = Ra(r),
                        u = [Ra(e), -Ea(e), 0],
                        o = 0,
                        a = 0
                    Sf.reset(), 1 === i ? (r = xa + 1e-6) : -1 === i && (r = -xa - 1e-6)
                    for (var c = 0, f = n.length; c < f; ++c)
                        if ((l = (s = n[c]).length))
                            for (
                                var s, l, h = s[l - 1], d = Ef(h), p = h[1] / 2 + wa, v = Ra(p), g = Ea(p), y = 0;
                                y < l;
                                ++y, d = _, v = x, g = w, h = b
                            ) {
                                var b = s[y],
                                    _ = Ef(b),
                                    m = b[1] / 2 + wa,
                                    x = Ra(m),
                                    w = Ea(m),
                                    M = _ - d,
                                    N = M >= 0 ? 1 : -1,
                                    A = N * M,
                                    T = A > ma,
                                    k = v * x
                                if (
                                    (Sf.add(Sa(k * N * Ra(A), g * w + k * Ea(A))),
                                    (o += T ? M + N * Ma : M),
                                    T ^ (d >= e) ^ (_ >= e))
                                ) {
                                    var S = sc(cc(h), cc(b))
                                    dc(S)
                                    var E = sc(u, S)
                                    dc(E)
                                    var C = (T ^ (M >= 0) ? -1 : 1) * Ua(E[2])
                                    ;(r > C || (r === C && (S[0] || S[1]))) && (a += T ^ (M >= 0) ? 1 : -1)
                                }
                            }
                    return (o < -1e-6 || (o < 1e-6 && Sf < -1e-6)) ^ (1 & a)
                },
                Of = function(n, t, e, r) {
                    return function(u) {
                        var o,
                            a,
                            c,
                            f = t(u),
                            s = Mf(),
                            l = t(s),
                            h = !1,
                            d = {
                                point: p,
                                lineStart: g,
                                lineEnd: y,
                                polygonStart: function() {
                                    ;(d.point = b), (d.lineStart = _), (d.lineEnd = m), (a = []), (o = [])
                                },
                                polygonEnd: function() {
                                    ;(d.point = p), (d.lineStart = g), (d.lineEnd = y), (a = Object(i.n)(a))
                                    var n = Cf(o, r)
                                    a.length
                                        ? (h || (u.polygonStart(), (h = !0)), Tf(a, Pf, n, e, u))
                                        : n &&
                                          (h || (u.polygonStart(), (h = !0)),
                                          u.lineStart(),
                                          e(null, null, 1, u),
                                          u.lineEnd()),
                                        h && (u.polygonEnd(), (h = !1)),
                                        (a = o = null)
                                },
                                sphere: function() {
                                    u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd()
                                },
                            }
                        function p(t, e) {
                            n(t, e) && u.point(t, e)
                        }
                        function v(n, t) {
                            f.point(n, t)
                        }
                        function g() {
                            ;(d.point = v), f.lineStart()
                        }
                        function y() {
                            ;(d.point = p), f.lineEnd()
                        }
                        function b(n, t) {
                            c.push([n, t]), l.point(n, t)
                        }
                        function _() {
                            l.lineStart(), (c = [])
                        }
                        function m() {
                            b(c[0][0], c[0][1]), l.lineEnd()
                            var n,
                                t,
                                e,
                                r,
                                i = l.clean(),
                                f = s.result(),
                                d = f.length
                            if ((c.pop(), o.push(c), (c = null), d))
                                if (1 & i) {
                                    if ((t = (e = f[0]).length - 1) > 0) {
                                        for (h || (u.polygonStart(), (h = !0)), u.lineStart(), n = 0; n < t; ++n)
                                            u.point((r = e[n])[0], r[1])
                                        u.lineEnd()
                                    }
                                } else d > 1 && 2 & i && f.push(f.pop().concat(f.shift())), a.push(f.filter(zf))
                        }
                        return d
                    }
                }
            function zf(n) {
                return n.length > 1
            }
            function Pf(n, t) {
                return (
                    ((n = n.x)[0] < 0 ? n[1] - xa - 1e-6 : xa - n[1]) -
                    ((t = t.x)[0] < 0 ? t[1] - xa - 1e-6 : xa - t[1])
                )
            }
            var Rf = Of(
                function() {
                    return !0
                },
                function(n) {
                    var t,
                        e = NaN,
                        r = NaN,
                        i = NaN
                    return {
                        lineStart: function() {
                            n.lineStart(), (t = 1)
                        },
                        point: function(u, o) {
                            var a = u > 0 ? ma : -ma,
                                c = Ta(u - e)
                            Ta(c - ma) < 1e-6
                                ? (n.point(e, (r = (r + o) / 2 > 0 ? xa : -xa)),
                                  n.point(i, r),
                                  n.lineEnd(),
                                  n.lineStart(),
                                  n.point(a, r),
                                  n.point(u, r),
                                  (t = 0))
                                : i !== a &&
                                  c >= ma &&
                                  (Ta(e - i) < 1e-6 && (e -= 1e-6 * i),
                                  Ta(u - a) < 1e-6 && (u -= 1e-6 * a),
                                  (r = (function(n, t, e, r) {
                                      var i,
                                          u,
                                          o = Ra(n - e)
                                      return Ta(o) > 1e-6
                                          ? ka(
                                                (Ra(t) * (u = Ea(r)) * Ra(e) - Ra(r) * (i = Ea(t)) * Ra(n)) /
                                                    (i * u * o)
                                            )
                                          : (t + r) / 2
                                  })(e, r, u, o)),
                                  n.point(i, r),
                                  n.lineEnd(),
                                  n.lineStart(),
                                  n.point(a, r),
                                  (t = 0)),
                                n.point((e = u), (r = o)),
                                (i = a)
                        },
                        lineEnd: function() {
                            n.lineEnd(), (e = r = NaN)
                        },
                        clean: function() {
                            return 2 - t
                        },
                    }
                },
                function(n, t, e, r) {
                    var i
                    if (null == n)
                        (i = e * xa),
                            r.point(-ma, i),
                            r.point(0, i),
                            r.point(ma, i),
                            r.point(ma, 0),
                            r.point(ma, -i),
                            r.point(0, -i),
                            r.point(-ma, -i),
                            r.point(-ma, 0),
                            r.point(-ma, i)
                    else if (Ta(n[0] - t[0]) > 1e-6) {
                        var u = n[0] < t[0] ? ma : -ma
                        ;(i = (e * u) / 2), r.point(-u, i), r.point(0, i), r.point(u, i)
                    } else r.point(t[0], t[1])
                },
                [-ma, -xa]
            )
            var jf = function(n) {
                var t = Ea(n),
                    e = 6 * Aa,
                    r = t > 0,
                    i = Ta(t) > 1e-6
                function u(n, e) {
                    return Ea(n) * Ea(e) > t
                }
                function o(n, e, r) {
                    var i = [1, 0, 0],
                        u = sc(cc(n), cc(e)),
                        o = fc(u, u),
                        a = u[0],
                        c = o - a * a
                    if (!c) return !r && n
                    var f = (t * o) / c,
                        s = (-t * a) / c,
                        l = sc(i, u),
                        h = hc(i, f)
                    lc(h, hc(u, s))
                    var d = l,
                        p = fc(h, d),
                        v = fc(d, d),
                        g = p * p - v * (fc(h, h) - 1)
                    if (!(g < 0)) {
                        var y = Da(g),
                            b = hc(d, (-p - y) / v)
                        if ((lc(b, h), (b = ac(b)), !r)) return b
                        var _,
                            m = n[0],
                            x = e[0],
                            w = n[1],
                            M = e[1]
                        x < m && ((_ = m), (m = x), (x = _))
                        var N = x - m,
                            A = Ta(N - ma) < 1e-6
                        if (
                            (!A && M < w && ((_ = w), (w = M), (M = _)),
                            A || N < 1e-6
                                ? A
                                    ? (w + M > 0) ^ (b[1] < (Ta(b[0] - m) < 1e-6 ? w : M))
                                    : w <= b[1] && b[1] <= M
                                : (N > ma) ^ (m <= b[0] && b[0] <= x))
                        ) {
                            var T = hc(d, (-p + y) / v)
                            return lc(T, h), [b, ac(T)]
                        }
                    }
                }
                function a(t, e) {
                    var i = r ? n : ma - n,
                        u = 0
                    return t < -i ? (u |= 1) : t > i && (u |= 2), e < -i ? (u |= 4) : e > i && (u |= 8), u
                }
                return Of(
                    u,
                    function(n) {
                        var t, e, c, f, s
                        return {
                            lineStart: function() {
                                ;(f = c = !1), (s = 1)
                            },
                            point: function(l, h) {
                                var d,
                                    p = [l, h],
                                    v = u(l, h),
                                    g = r ? (v ? 0 : a(l, h)) : v ? a(l + (l < 0 ? ma : -ma), h) : 0
                                if (
                                    (!t && (f = c = v) && n.lineStart(),
                                    v !== c &&
                                        (!(d = o(t, p)) || Nf(t, d) || Nf(p, d)) &&
                                        ((p[0] += 1e-6), (p[1] += 1e-6), (v = u(p[0], p[1]))),
                                    v !== c)
                                )
                                    (s = 0),
                                        v
                                            ? (n.lineStart(), (d = o(p, t)), n.point(d[0], d[1]))
                                            : ((d = o(t, p)), n.point(d[0], d[1]), n.lineEnd()),
                                        (t = d)
                                else if (i && t && r ^ v) {
                                    var y
                                    g & e ||
                                        !(y = o(p, t, !0)) ||
                                        ((s = 0),
                                        r
                                            ? (n.lineStart(),
                                              n.point(y[0][0], y[0][1]),
                                              n.point(y[1][0], y[1][1]),
                                              n.lineEnd())
                                            : (n.point(y[1][0], y[1][1]),
                                              n.lineEnd(),
                                              n.lineStart(),
                                              n.point(y[0][0], y[0][1])))
                                }
                                !v || (t && Nf(t, p)) || n.point(p[0], p[1]), (t = p), (c = v), (e = g)
                            },
                            lineEnd: function() {
                                c && n.lineEnd(), (t = null)
                            },
                            clean: function() {
                                return s | ((f && c) << 1)
                            },
                        }
                    },
                    function(t, r, i, u) {
                        mf(u, n, e, i, t, r)
                    },
                    r ? [0, -n] : [-ma, n - ma]
                )
            }
            function Df(n, t, e, r) {
                function u(i, u) {
                    return n <= i && i <= e && t <= u && u <= r
                }
                function o(i, u, o, c) {
                    var s = 0,
                        l = 0
                    if (null == i || (s = a(i, o)) !== (l = a(u, o)) || (f(i, u) < 0) ^ (o > 0))
                        do {
                            c.point(0 === s || 3 === s ? n : e, s > 1 ? r : t)
                        } while ((s = (s + o + 4) % 4) !== l)
                    else c.point(u[0], u[1])
                }
                function a(r, i) {
                    return Ta(r[0] - n) < 1e-6
                        ? i > 0
                            ? 0
                            : 3
                        : Ta(r[0] - e) < 1e-6
                        ? i > 0
                            ? 2
                            : 1
                        : Ta(r[1] - t) < 1e-6
                        ? i > 0
                            ? 1
                            : 0
                        : i > 0
                        ? 3
                        : 2
                }
                function c(n, t) {
                    return f(n.x, t.x)
                }
                function f(n, t) {
                    var e = a(n, 1),
                        r = a(t, 1)
                    return e !== r
                        ? e - r
                        : 0 === e
                        ? t[1] - n[1]
                        : 1 === e
                        ? n[0] - t[0]
                        : 2 === e
                        ? n[1] - t[1]
                        : t[0] - n[0]
                }
                return function(a) {
                    var f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        g,
                        y,
                        b,
                        _,
                        m = a,
                        x = Mf(),
                        w = {
                            point: M,
                            lineStart: function() {
                                ;(w.point = N), s && s.push((l = []))
                                ;(b = !0), (y = !1), (v = g = NaN)
                            },
                            lineEnd: function() {
                                f && (N(h, d), p && y && x.rejoin(), f.push(x.result()))
                                ;(w.point = M), y && m.lineEnd()
                            },
                            polygonStart: function() {
                                ;(m = x), (f = []), (s = []), (_ = !0)
                            },
                            polygonEnd: function() {
                                var t = (function() {
                                        for (var t = 0, e = 0, i = s.length; e < i; ++e)
                                            for (
                                                var u, o, a = s[e], c = 1, f = a.length, l = a[0], h = l[0], d = l[1];
                                                c < f;
                                                ++c
                                            )
                                                (u = h),
                                                    (o = d),
                                                    (l = a[c]),
                                                    (h = l[0]),
                                                    (d = l[1]),
                                                    o <= r
                                                        ? d > r && (h - u) * (r - o) > (d - o) * (n - u) && ++t
                                                        : d <= r && (h - u) * (r - o) < (d - o) * (n - u) && --t
                                        return t
                                    })(),
                                    e = _ && t,
                                    u = (f = Object(i.n)(f)).length
                                ;(e || u) &&
                                    (a.polygonStart(),
                                    e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()),
                                    u && Tf(f, c, t, o, a),
                                    a.polygonEnd())
                                ;(m = a), (f = s = l = null)
                            },
                        }
                    function M(n, t) {
                        u(n, t) && m.point(n, t)
                    }
                    function N(i, o) {
                        var a = u(i, o)
                        if ((s && l.push([i, o]), b))
                            (h = i), (d = o), (p = a), (b = !1), a && (m.lineStart(), m.point(i, o))
                        else if (a && y) m.point(i, o)
                        else {
                            var c = [(v = Math.max(-1e9, Math.min(1e9, v))), (g = Math.max(-1e9, Math.min(1e9, g)))],
                                f = [(i = Math.max(-1e9, Math.min(1e9, i))), (o = Math.max(-1e9, Math.min(1e9, o)))]
                            !(function(n, t, e, r, i, u) {
                                var o,
                                    a = n[0],
                                    c = n[1],
                                    f = 0,
                                    s = 1,
                                    l = t[0] - a,
                                    h = t[1] - c
                                if (((o = e - a), l || !(o > 0))) {
                                    if (((o /= l), l < 0)) {
                                        if (o < f) return
                                        o < s && (s = o)
                                    } else if (l > 0) {
                                        if (o > s) return
                                        o > f && (f = o)
                                    }
                                    if (((o = i - a), l || !(o < 0))) {
                                        if (((o /= l), l < 0)) {
                                            if (o > s) return
                                            o > f && (f = o)
                                        } else if (l > 0) {
                                            if (o < f) return
                                            o < s && (s = o)
                                        }
                                        if (((o = r - c), h || !(o > 0))) {
                                            if (((o /= h), h < 0)) {
                                                if (o < f) return
                                                o < s && (s = o)
                                            } else if (h > 0) {
                                                if (o > s) return
                                                o > f && (f = o)
                                            }
                                            if (((o = u - c), h || !(o < 0))) {
                                                if (((o /= h), h < 0)) {
                                                    if (o > s) return
                                                    o > f && (f = o)
                                                } else if (h > 0) {
                                                    if (o < f) return
                                                    o < s && (s = o)
                                                }
                                                return (
                                                    f > 0 && ((n[0] = a + f * l), (n[1] = c + f * h)),
                                                    s < 1 && ((t[0] = a + s * l), (t[1] = c + s * h)),
                                                    !0
                                                )
                                            }
                                        }
                                    }
                                }
                            })(c, f, n, t, e, r)
                                ? a && (m.lineStart(), m.point(i, o), (_ = !1))
                                : (y || (m.lineStart(), m.point(c[0], c[1])),
                                  m.point(f[0], f[1]),
                                  a || m.lineEnd(),
                                  (_ = !1))
                        }
                        ;(v = i), (g = o), (y = a)
                    }
                    return w
                }
            }
            var qf,
                Lf,
                Uf,
                Bf = function() {
                    var n,
                        t,
                        e,
                        r = 0,
                        i = 0,
                        u = 960,
                        o = 500
                    return (e = {
                        stream: function(e) {
                            return n && t === e ? n : (n = Df(r, i, u, o)((t = e)))
                        },
                        extent: function(a) {
                            return arguments.length
                                ? ((r = +a[0][0]), (i = +a[0][1]), (u = +a[1][0]), (o = +a[1][1]), (n = t = null), e)
                                : [
                                      [r, i],
                                      [u, o],
                                  ]
                        },
                    })
                },
                Yf = ga(),
                Ff = {
                    sphere: Ya,
                    point: Ya,
                    lineStart: function() {
                        ;(Ff.point = Hf), (Ff.lineEnd = If)
                    },
                    lineEnd: Ya,
                    polygonStart: Ya,
                    polygonEnd: Ya,
                }
            function If() {
                Ff.point = Ff.lineEnd = Ya
            }
            function Hf(n, t) {
                ;(qf = n *= Aa), (Lf = Ra((t *= Aa))), (Uf = Ea(t)), (Ff.point = Xf)
            }
            function Xf(n, t) {
                n *= Aa
                var e = Ra((t *= Aa)),
                    r = Ea(t),
                    i = Ta(n - qf),
                    u = Ea(i),
                    o = r * Ra(i),
                    a = Uf * e - Lf * r * u,
                    c = Lf * e + Uf * r * u
                Yf.add(Sa(Da(o * o + a * a), c)), (qf = n), (Lf = e), (Uf = r)
            }
            var Vf = function(n) {
                    return Yf.reset(), Ja(n, Ff), +Yf
                },
                Gf = [null, null],
                $f = { type: 'LineString', coordinates: Gf },
                Wf = function(n, t) {
                    return (Gf[0] = n), (Gf[1] = t), Vf($f)
                },
                Zf = {
                    Feature: function(n, t) {
                        return Jf(n.geometry, t)
                    },
                    FeatureCollection: function(n, t) {
                        for (var e = n.features, r = -1, i = e.length; ++r < i; ) if (Jf(e[r].geometry, t)) return !0
                        return !1
                    },
                },
                Qf = {
                    Sphere: function() {
                        return !0
                    },
                    Point: function(n, t) {
                        return Kf(n.coordinates, t)
                    },
                    MultiPoint: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; ) if (Kf(e[r], t)) return !0
                        return !1
                    },
                    LineString: function(n, t) {
                        return ns(n.coordinates, t)
                    },
                    MultiLineString: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; ) if (ns(e[r], t)) return !0
                        return !1
                    },
                    Polygon: function(n, t) {
                        return ts(n.coordinates, t)
                    },
                    MultiPolygon: function(n, t) {
                        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; ) if (ts(e[r], t)) return !0
                        return !1
                    },
                    GeometryCollection: function(n, t) {
                        for (var e = n.geometries, r = -1, i = e.length; ++r < i; ) if (Jf(e[r], t)) return !0
                        return !1
                    },
                }
            function Jf(n, t) {
                return !(!n || !Qf.hasOwnProperty(n.type)) && Qf[n.type](n, t)
            }
            function Kf(n, t) {
                return 0 === Wf(n, t)
            }
            function ns(n, t) {
                for (var e, r, i, u = 0, o = n.length; u < o; u++) {
                    if (0 === (r = Wf(n[u], t))) return !0
                    if (
                        u > 0 &&
                        (i = Wf(n[u], n[u - 1])) > 0 &&
                        e <= i &&
                        r <= i &&
                        (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < 1e-12 * i
                    )
                        return !0
                    e = r
                }
                return !1
            }
            function ts(n, t) {
                return !!Cf(n.map(es), rs(t))
            }
            function es(n) {
                return (n = n.map(rs)).pop(), n
            }
            function rs(n) {
                return [n[0] * Aa, n[1] * Aa]
            }
            var is = function(n, t) {
                return (n && Zf.hasOwnProperty(n.type) ? Zf[n.type] : Jf)(n, t)
            }
            function us(n, t, e) {
                var r = Object(i.s)(n, t - 1e-6, e).concat(t)
                return function(n) {
                    return r.map(function(t) {
                        return [n, t]
                    })
                }
            }
            function os(n, t, e) {
                var r = Object(i.s)(n, t - 1e-6, e).concat(t)
                return function(n) {
                    return r.map(function(t) {
                        return [t, n]
                    })
                }
            }
            function as() {
                var n,
                    t,
                    e,
                    r,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d = 10,
                    p = d,
                    v = 90,
                    g = 360,
                    y = 2.5
                function b() {
                    return { type: 'MultiLineString', coordinates: _() }
                }
                function _() {
                    return Object(i.s)(Ca(r / v) * v, e, v)
                        .map(l)
                        .concat(Object(i.s)(Ca(c / g) * g, a, g).map(h))
                        .concat(
                            Object(i.s)(Ca(t / d) * d, n, d)
                                .filter(function(n) {
                                    return Ta(n % v) > 1e-6
                                })
                                .map(f)
                        )
                        .concat(
                            Object(i.s)(Ca(o / p) * p, u, p)
                                .filter(function(n) {
                                    return Ta(n % g) > 1e-6
                                })
                                .map(s)
                        )
                }
                return (
                    (b.lines = function() {
                        return _().map(function(n) {
                            return { type: 'LineString', coordinates: n }
                        })
                    }),
                    (b.outline = function() {
                        return {
                            type: 'Polygon',
                            coordinates: [
                                l(r).concat(
                                    h(a).slice(1),
                                    l(e)
                                        .reverse()
                                        .slice(1),
                                    h(c)
                                        .reverse()
                                        .slice(1)
                                ),
                            ],
                        }
                    }),
                    (b.extent = function(n) {
                        return arguments.length ? b.extentMajor(n).extentMinor(n) : b.extentMinor()
                    }),
                    (b.extentMajor = function(n) {
                        return arguments.length
                            ? ((r = +n[0][0]),
                              (e = +n[1][0]),
                              (c = +n[0][1]),
                              (a = +n[1][1]),
                              r > e && ((n = r), (r = e), (e = n)),
                              c > a && ((n = c), (c = a), (a = n)),
                              b.precision(y))
                            : [
                                  [r, c],
                                  [e, a],
                              ]
                    }),
                    (b.extentMinor = function(e) {
                        return arguments.length
                            ? ((t = +e[0][0]),
                              (n = +e[1][0]),
                              (o = +e[0][1]),
                              (u = +e[1][1]),
                              t > n && ((e = t), (t = n), (n = e)),
                              o > u && ((e = o), (o = u), (u = e)),
                              b.precision(y))
                            : [
                                  [t, o],
                                  [n, u],
                              ]
                    }),
                    (b.step = function(n) {
                        return arguments.length ? b.stepMajor(n).stepMinor(n) : b.stepMinor()
                    }),
                    (b.stepMajor = function(n) {
                        return arguments.length ? ((v = +n[0]), (g = +n[1]), b) : [v, g]
                    }),
                    (b.stepMinor = function(n) {
                        return arguments.length ? ((d = +n[0]), (p = +n[1]), b) : [d, p]
                    }),
                    (b.precision = function(i) {
                        return arguments.length
                            ? ((y = +i),
                              (f = us(o, u, 90)),
                              (s = os(t, n, y)),
                              (l = us(c, a, 90)),
                              (h = os(r, e, y)),
                              b)
                            : y
                    }),
                    b
                        .extentMajor([
                            [-180, -89.999999],
                            [180, 89.999999],
                        ])
                        .extentMinor([
                            [-180, -80.000001],
                            [180, 80.000001],
                        ])
                )
            }
            function cs() {
                return as()()
            }
            var fs,
                ss,
                ls,
                hs,
                ds = function(n, t) {
                    var e = n[0] * Aa,
                        r = n[1] * Aa,
                        i = t[0] * Aa,
                        u = t[1] * Aa,
                        o = Ea(r),
                        a = Ra(r),
                        c = Ea(u),
                        f = Ra(u),
                        s = o * Ea(e),
                        l = o * Ra(e),
                        h = c * Ea(i),
                        d = c * Ra(i),
                        p = 2 * Ua(Da(Ba(u - r) + o * c * Ba(i - e))),
                        v = Ra(p),
                        g = p
                            ? function(n) {
                                  var t = Ra((n *= p)) / v,
                                      e = Ra(p - n) / v,
                                      r = e * s + t * h,
                                      i = e * l + t * d,
                                      u = e * a + t * f
                                  return [Sa(i, r) * Na, Sa(u, Da(r * r + i * i)) * Na]
                              }
                            : function() {
                                  return [e * Na, r * Na]
                              }
                    return (g.distance = p), g
                },
                ps = function(n) {
                    return n
                },
                vs = ga(),
                gs = ga(),
                ys = {
                    point: Ya,
                    lineStart: Ya,
                    lineEnd: Ya,
                    polygonStart: function() {
                        ;(ys.lineStart = bs), (ys.lineEnd = xs)
                    },
                    polygonEnd: function() {
                        ;(ys.lineStart = ys.lineEnd = ys.point = Ya), vs.add(Ta(gs)), gs.reset()
                    },
                    result: function() {
                        var n = vs / 2
                        return vs.reset(), n
                    },
                }
            function bs() {
                ys.point = _s
            }
            function _s(n, t) {
                ;(ys.point = ms), (fs = ls = n), (ss = hs = t)
            }
            function ms(n, t) {
                gs.add(hs * n - ls * t), (ls = n), (hs = t)
            }
            function xs() {
                ms(fs, ss)
            }
            var ws = ys,
                Ms = 1 / 0,
                Ns = Ms,
                As = -Ms,
                Ts = As
            var ks,
                Ss,
                Es,
                Cs,
                Os = {
                    point: function(n, t) {
                        n < Ms && (Ms = n)
                        n > As && (As = n)
                        t < Ns && (Ns = t)
                        t > Ts && (Ts = t)
                    },
                    lineStart: Ya,
                    lineEnd: Ya,
                    polygonStart: Ya,
                    polygonEnd: Ya,
                    result: function() {
                        var n = [
                            [Ms, Ns],
                            [As, Ts],
                        ]
                        return (As = Ts = -(Ns = Ms = 1 / 0)), n
                    },
                },
                zs = 0,
                Ps = 0,
                Rs = 0,
                js = 0,
                Ds = 0,
                qs = 0,
                Ls = 0,
                Us = 0,
                Bs = 0,
                Ys = {
                    point: Fs,
                    lineStart: Is,
                    lineEnd: Vs,
                    polygonStart: function() {
                        ;(Ys.lineStart = Gs), (Ys.lineEnd = $s)
                    },
                    polygonEnd: function() {
                        ;(Ys.point = Fs), (Ys.lineStart = Is), (Ys.lineEnd = Vs)
                    },
                    result: function() {
                        var n = Bs ? [Ls / Bs, Us / Bs] : qs ? [js / qs, Ds / qs] : Rs ? [zs / Rs, Ps / Rs] : [NaN, NaN]
                        return (zs = Ps = Rs = js = Ds = qs = Ls = Us = Bs = 0), n
                    },
                }
            function Fs(n, t) {
                ;(zs += n), (Ps += t), ++Rs
            }
            function Is() {
                Ys.point = Hs
            }
            function Hs(n, t) {
                ;(Ys.point = Xs), Fs((Es = n), (Cs = t))
            }
            function Xs(n, t) {
                var e = n - Es,
                    r = t - Cs,
                    i = Da(e * e + r * r)
                ;(js += (i * (Es + n)) / 2), (Ds += (i * (Cs + t)) / 2), (qs += i), Fs((Es = n), (Cs = t))
            }
            function Vs() {
                Ys.point = Fs
            }
            function Gs() {
                Ys.point = Ws
            }
            function $s() {
                Zs(ks, Ss)
            }
            function Ws(n, t) {
                ;(Ys.point = Zs), Fs((ks = Es = n), (Ss = Cs = t))
            }
            function Zs(n, t) {
                var e = n - Es,
                    r = t - Cs,
                    i = Da(e * e + r * r)
                ;(js += (i * (Es + n)) / 2),
                    (Ds += (i * (Cs + t)) / 2),
                    (qs += i),
                    (Ls += (i = Cs * n - Es * t) * (Es + n)),
                    (Us += i * (Cs + t)),
                    (Bs += 3 * i),
                    Fs((Es = n), (Cs = t))
            }
            var Qs = Ys
            function Js(n) {
                this._context = n
            }
            Js.prototype = {
                _radius: 4.5,
                pointRadius: function(n) {
                    return (this._radius = n), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._context.closePath(), (this._point = NaN)
                },
                point: function(n, t) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(n, t), (this._point = 1)
                            break
                        case 1:
                            this._context.lineTo(n, t)
                            break
                        default:
                            this._context.moveTo(n + this._radius, t), this._context.arc(n, t, this._radius, 0, Ma)
                    }
                },
                result: Ya,
            }
            var Ks,
                nl,
                tl,
                el,
                rl,
                il = ga(),
                ul = {
                    point: Ya,
                    lineStart: function() {
                        ul.point = ol
                    },
                    lineEnd: function() {
                        Ks && al(nl, tl), (ul.point = Ya)
                    },
                    polygonStart: function() {
                        Ks = !0
                    },
                    polygonEnd: function() {
                        Ks = null
                    },
                    result: function() {
                        var n = +il
                        return il.reset(), n
                    },
                }
            function ol(n, t) {
                ;(ul.point = al), (nl = el = n), (tl = rl = t)
            }
            function al(n, t) {
                ;(el -= n), (rl -= t), il.add(Da(el * el + rl * rl)), (el = n), (rl = t)
            }
            var cl = ul
            function fl() {
                this._string = []
            }
            function sl(n) {
                return (
                    'm0,' + n + 'a' + n + ',' + n + ' 0 1,1 0,' + -2 * n + 'a' + n + ',' + n + ' 0 1,1 0,' + 2 * n + 'z'
                )
            }
            fl.prototype = {
                _radius: 4.5,
                _circle: sl(4.5),
                pointRadius: function(n) {
                    return (n = +n) !== this._radius && ((this._radius = n), (this._circle = null)), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._string.push('Z'), (this._point = NaN)
                },
                point: function(n, t) {
                    switch (this._point) {
                        case 0:
                            this._string.push('M', n, ',', t), (this._point = 1)
                            break
                        case 1:
                            this._string.push('L', n, ',', t)
                            break
                        default:
                            null == this._circle && (this._circle = sl(this._radius)),
                                this._string.push('M', n, ',', t, this._circle)
                    }
                },
                result: function() {
                    if (this._string.length) {
                        var n = this._string.join('')
                        return (this._string = []), n
                    }
                    return null
                },
            }
            var ll = function(n, t) {
                    var e,
                        r,
                        i = 4.5
                    function u(n) {
                        return (
                            n && ('function' == typeof i && r.pointRadius(+i.apply(this, arguments)), Ja(n, e(r))),
                            r.result()
                        )
                    }
                    return (
                        (u.area = function(n) {
                            return Ja(n, e(ws)), ws.result()
                        }),
                        (u.measure = function(n) {
                            return Ja(n, e(cl)), cl.result()
                        }),
                        (u.bounds = function(n) {
                            return Ja(n, e(Os)), Os.result()
                        }),
                        (u.centroid = function(n) {
                            return Ja(n, e(Qs)), Qs.result()
                        }),
                        (u.projection = function(t) {
                            return arguments.length ? ((e = null == t ? ((n = null), ps) : (n = t).stream), u) : n
                        }),
                        (u.context = function(n) {
                            return arguments.length
                                ? ((r = null == n ? ((t = null), new fl()) : new Js((t = n))),
                                  'function' != typeof i && r.pointRadius(i),
                                  u)
                                : t
                        }),
                        (u.pointRadius = function(n) {
                            return arguments.length
                                ? ((i = 'function' == typeof n ? n : (r.pointRadius(+n), +n)), u)
                                : i
                        }),
                        u.projection(n).context(t)
                    )
                },
                hl = function(n) {
                    return { stream: dl(n) }
                }
            function dl(n) {
                return function(t) {
                    var e = new pl()
                    for (var r in n) e[r] = n[r]
                    return (e.stream = t), e
                }
            }
            function pl() {}
            function vl(n, t, e) {
                var r = n.clipExtent && n.clipExtent()
                return (
                    n.scale(150).translate([0, 0]),
                    null != r && n.clipExtent(null),
                    Ja(e, n.stream(Os)),
                    t(Os.result()),
                    null != r && n.clipExtent(r),
                    n
                )
            }
            function gl(n, t, e) {
                return vl(
                    n,
                    function(e) {
                        var r = t[1][0] - t[0][0],
                            i = t[1][1] - t[0][1],
                            u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                            o = +t[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
                            a = +t[0][1] + (i - u * (e[1][1] + e[0][1])) / 2
                        n.scale(150 * u).translate([o, a])
                    },
                    e
                )
            }
            function yl(n, t, e) {
                return gl(n, [[0, 0], t], e)
            }
            function bl(n, t, e) {
                return vl(
                    n,
                    function(e) {
                        var r = +t,
                            i = r / (e[1][0] - e[0][0]),
                            u = (r - i * (e[1][0] + e[0][0])) / 2,
                            o = -i * e[0][1]
                        n.scale(150 * i).translate([u, o])
                    },
                    e
                )
            }
            function _l(n, t, e) {
                return vl(
                    n,
                    function(e) {
                        var r = +t,
                            i = r / (e[1][1] - e[0][1]),
                            u = -i * e[0][0],
                            o = (r - i * (e[1][1] + e[0][1])) / 2
                        n.scale(150 * i).translate([u, o])
                    },
                    e
                )
            }
            pl.prototype = {
                constructor: pl,
                point: function(n, t) {
                    this.stream.point(n, t)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                },
            }
            var ml = Ea(30 * Aa),
                xl = function(n, t) {
                    return +t
                        ? (function(n, t) {
                              function e(r, i, u, o, a, c, f, s, l, h, d, p, v, g) {
                                  var y = f - r,
                                      b = s - i,
                                      _ = y * y + b * b
                                  if (_ > 4 * t && v--) {
                                      var m = o + h,
                                          x = a + d,
                                          w = c + p,
                                          M = Da(m * m + x * x + w * w),
                                          N = Ua((w /= M)),
                                          A = Ta(Ta(w) - 1) < 1e-6 || Ta(u - l) < 1e-6 ? (u + l) / 2 : Sa(x, m),
                                          T = n(A, N),
                                          k = T[0],
                                          S = T[1],
                                          E = k - r,
                                          C = S - i,
                                          O = b * E - y * C
                                      ;((O * O) / _ > t ||
                                          Ta((y * E + b * C) / _ - 0.5) > 0.3 ||
                                          o * h + a * d + c * p < ml) &&
                                          (e(r, i, u, o, a, c, k, S, A, (m /= M), (x /= M), w, v, g),
                                          g.point(k, S),
                                          e(k, S, A, m, x, w, f, s, l, h, d, p, v, g))
                                  }
                              }
                              return function(t) {
                                  var r,
                                      i,
                                      u,
                                      o,
                                      a,
                                      c,
                                      f,
                                      s,
                                      l,
                                      h,
                                      d,
                                      p,
                                      v = {
                                          point: g,
                                          lineStart: y,
                                          lineEnd: _,
                                          polygonStart: function() {
                                              t.polygonStart(), (v.lineStart = m)
                                          },
                                          polygonEnd: function() {
                                              t.polygonEnd(), (v.lineStart = y)
                                          },
                                      }
                                  function g(e, r) {
                                      ;(e = n(e, r)), t.point(e[0], e[1])
                                  }
                                  function y() {
                                      ;(s = NaN), (v.point = b), t.lineStart()
                                  }
                                  function b(r, i) {
                                      var u = cc([r, i]),
                                          o = n(r, i)
                                      e(
                                          s,
                                          l,
                                          f,
                                          h,
                                          d,
                                          p,
                                          (s = o[0]),
                                          (l = o[1]),
                                          (f = r),
                                          (h = u[0]),
                                          (d = u[1]),
                                          (p = u[2]),
                                          16,
                                          t
                                      ),
                                          t.point(s, l)
                                  }
                                  function _() {
                                      ;(v.point = g), t.lineEnd()
                                  }
                                  function m() {
                                      y(), (v.point = x), (v.lineEnd = w)
                                  }
                                  function x(n, t) {
                                      b((r = n), t), (i = s), (u = l), (o = h), (a = d), (c = p), (v.point = b)
                                  }
                                  function w() {
                                      e(s, l, f, h, d, p, i, u, r, o, a, c, 16, t), (v.lineEnd = _), _()
                                  }
                                  return v
                              }
                          })(n, t)
                        : (function(n) {
                              return dl({
                                  point: function(t, e) {
                                      ;(t = n(t, e)), this.stream.point(t[0], t[1])
                                  },
                              })
                          })(n)
                }
            var wl = dl({
                point: function(n, t) {
                    this.stream.point(n * Aa, t * Aa)
                },
            })
            function Ml(n, t, e, r, i) {
                function u(u, o) {
                    return [t + n * (u *= r), e - n * (o *= i)]
                }
                return (
                    (u.invert = function(u, o) {
                        return [((u - t) / n) * r, ((e - o) / n) * i]
                    }),
                    u
                )
            }
            function Nl(n, t, e, r, i, u) {
                var o = Ea(u),
                    a = Ra(u),
                    c = o * n,
                    f = a * n,
                    s = o / n,
                    l = a / n,
                    h = (a * e - o * t) / n,
                    d = (a * t + o * e) / n
                function p(n, u) {
                    return [c * (n *= r) - f * (u *= i) + t, e - f * n - c * u]
                }
                return (
                    (p.invert = function(n, t) {
                        return [r * (s * n - l * t + h), i * (d - l * n - s * t)]
                    }),
                    p
                )
            }
            function Al(n) {
                return Tl(function() {
                    return n
                })()
            }
            function Tl(n) {
                var t,
                    e,
                    r,
                    i,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l = 150,
                    h = 480,
                    d = 250,
                    p = 0,
                    v = 0,
                    g = 0,
                    y = 0,
                    b = 0,
                    _ = 0,
                    m = 1,
                    x = 1,
                    w = null,
                    M = Rf,
                    N = null,
                    A = ps,
                    T = 0.5
                function k(n) {
                    return c(n[0] * Aa, n[1] * Aa)
                }
                function S(n) {
                    return (n = c.invert(n[0], n[1])) && [n[0] * Na, n[1] * Na]
                }
                function E() {
                    var n = Nl(l, 0, 0, m, x, _).apply(null, t(p, v)),
                        r = (_ ? Nl : Ml)(l, h - n[0], d - n[1], m, x, _)
                    return (e = vf(g, y, b)), (a = df(t, r)), (c = df(e, a)), (o = xl(a, T)), C()
                }
                function C() {
                    return (f = s = null), k
                }
                return (
                    (k.stream = function(n) {
                        return f && s === n
                            ? f
                            : (f = wl(
                                  (function(n) {
                                      return dl({
                                          point: function(t, e) {
                                              var r = n(t, e)
                                              return this.stream.point(r[0], r[1])
                                          },
                                      })
                                  })(e)(M(o(A((s = n)))))
                              ))
                    }),
                    (k.preclip = function(n) {
                        return arguments.length ? ((M = n), (w = void 0), C()) : M
                    }),
                    (k.postclip = function(n) {
                        return arguments.length ? ((A = n), (N = r = i = u = null), C()) : A
                    }),
                    (k.clipAngle = function(n) {
                        return arguments.length ? ((M = +n ? jf((w = n * Aa)) : ((w = null), Rf)), C()) : w * Na
                    }),
                    (k.clipExtent = function(n) {
                        return arguments.length
                            ? ((A =
                                  null == n
                                      ? ((N = r = i = u = null), ps)
                                      : Df((N = +n[0][0]), (r = +n[0][1]), (i = +n[1][0]), (u = +n[1][1]))),
                              C())
                            : null == N
                            ? null
                            : [
                                  [N, r],
                                  [i, u],
                              ]
                    }),
                    (k.scale = function(n) {
                        return arguments.length ? ((l = +n), E()) : l
                    }),
                    (k.translate = function(n) {
                        return arguments.length ? ((h = +n[0]), (d = +n[1]), E()) : [h, d]
                    }),
                    (k.center = function(n) {
                        return arguments.length
                            ? ((p = (n[0] % 360) * Aa), (v = (n[1] % 360) * Aa), E())
                            : [p * Na, v * Na]
                    }),
                    (k.rotate = function(n) {
                        return arguments.length
                            ? ((g = (n[0] % 360) * Aa),
                              (y = (n[1] % 360) * Aa),
                              (b = n.length > 2 ? (n[2] % 360) * Aa : 0),
                              E())
                            : [g * Na, y * Na, b * Na]
                    }),
                    (k.angle = function(n) {
                        return arguments.length ? ((_ = (n % 360) * Aa), E()) : _ * Na
                    }),
                    (k.reflectX = function(n) {
                        return arguments.length ? ((m = n ? -1 : 1), E()) : m < 0
                    }),
                    (k.reflectY = function(n) {
                        return arguments.length ? ((x = n ? -1 : 1), E()) : x < 0
                    }),
                    (k.precision = function(n) {
                        return arguments.length ? ((o = xl(a, (T = n * n))), C()) : Da(T)
                    }),
                    (k.fitExtent = function(n, t) {
                        return gl(k, n, t)
                    }),
                    (k.fitSize = function(n, t) {
                        return yl(k, n, t)
                    }),
                    (k.fitWidth = function(n, t) {
                        return bl(k, n, t)
                    }),
                    (k.fitHeight = function(n, t) {
                        return _l(k, n, t)
                    }),
                    function() {
                        return (t = n.apply(this, arguments)), (k.invert = t.invert && S), E()
                    }
                )
            }
            function kl(n) {
                var t = 0,
                    e = ma / 3,
                    r = Tl(n),
                    i = r(t, e)
                return (
                    (i.parallels = function(n) {
                        return arguments.length ? r((t = n[0] * Aa), (e = n[1] * Aa)) : [t * Na, e * Na]
                    }),
                    i
                )
            }
            function Sl(n, t) {
                var e = Ra(n),
                    r = (e + Ra(t)) / 2
                if (Ta(r) < 1e-6)
                    return (function(n) {
                        var t = Ea(n)
                        function e(n, e) {
                            return [n * t, Ra(e) / t]
                        }
                        return (
                            (e.invert = function(n, e) {
                                return [n / t, Ua(e * t)]
                            }),
                            e
                        )
                    })(n)
                var i = 1 + e * (2 * r - e),
                    u = Da(i) / r
                function o(n, t) {
                    var e = Da(i - 2 * r * Ra(t)) / r
                    return [e * Ra((n *= r)), u - e * Ea(n)]
                }
                return (
                    (o.invert = function(n, t) {
                        var e = u - t,
                            o = Sa(n, Ta(e)) * ja(e)
                        return (
                            e * r < 0 && (o -= ma * ja(n) * ja(e)), [o / r, Ua((i - (n * n + e * e) * r * r) / (2 * r))]
                        )
                    }),
                    o
                )
            }
            var El = function() {
                    return kl(Sl)
                        .scale(155.424)
                        .center([0, 33.6442])
                },
                Cl = function() {
                    return El()
                        .parallels([29.5, 45.5])
                        .scale(1070)
                        .translate([480, 250])
                        .rotate([96, 0])
                        .center([-0.6, 38.7])
                }
            var Ol = function() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    u,
                    o = Cl(),
                    a = El()
                        .rotate([154, 0])
                        .center([-2, 58.5])
                        .parallels([55, 65]),
                    c = El()
                        .rotate([157, 0])
                        .center([-3, 19.9])
                        .parallels([8, 18]),
                    f = {
                        point: function(n, t) {
                            u = [n, t]
                        },
                    }
                function s(n) {
                    var t = n[0],
                        o = n[1]
                    return (u = null), e.point(t, o), u || (r.point(t, o), u) || (i.point(t, o), u)
                }
                function l() {
                    return (n = t = null), s
                }
                return (
                    (s.invert = function(n) {
                        var t = o.scale(),
                            e = o.translate(),
                            r = (n[0] - e[0]) / t,
                            i = (n[1] - e[1]) / t
                        return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
                            ? a
                            : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                            ? c
                            : o
                        ).invert(n)
                    }),
                    (s.stream = function(e) {
                        return n && t === e
                            ? n
                            : ((r = [o.stream((t = e)), a.stream(e), c.stream(e)]),
                              (i = r.length),
                              (n = {
                                  point: function(n, t) {
                                      for (var e = -1; ++e < i; ) r[e].point(n, t)
                                  },
                                  sphere: function() {
                                      for (var n = -1; ++n < i; ) r[n].sphere()
                                  },
                                  lineStart: function() {
                                      for (var n = -1; ++n < i; ) r[n].lineStart()
                                  },
                                  lineEnd: function() {
                                      for (var n = -1; ++n < i; ) r[n].lineEnd()
                                  },
                                  polygonStart: function() {
                                      for (var n = -1; ++n < i; ) r[n].polygonStart()
                                  },
                                  polygonEnd: function() {
                                      for (var n = -1; ++n < i; ) r[n].polygonEnd()
                                  },
                              }))
                        var r, i
                    }),
                    (s.precision = function(n) {
                        return arguments.length ? (o.precision(n), a.precision(n), c.precision(n), l()) : o.precision()
                    }),
                    (s.scale = function(n) {
                        return arguments.length
                            ? (o.scale(n), a.scale(0.35 * n), c.scale(n), s.translate(o.translate()))
                            : o.scale()
                    }),
                    (s.translate = function(n) {
                        if (!arguments.length) return o.translate()
                        var t = o.scale(),
                            u = +n[0],
                            s = +n[1]
                        return (
                            (e = o
                                .translate(n)
                                .clipExtent([
                                    [u - 0.455 * t, s - 0.238 * t],
                                    [u + 0.455 * t, s + 0.238 * t],
                                ])
                                .stream(f)),
                            (r = a
                                .translate([u - 0.307 * t, s + 0.201 * t])
                                .clipExtent([
                                    [u - 0.425 * t + 1e-6, s + 0.12 * t + 1e-6],
                                    [u - 0.214 * t - 1e-6, s + 0.234 * t - 1e-6],
                                ])
                                .stream(f)),
                            (i = c
                                .translate([u - 0.205 * t, s + 0.212 * t])
                                .clipExtent([
                                    [u - 0.214 * t + 1e-6, s + 0.166 * t + 1e-6],
                                    [u - 0.115 * t - 1e-6, s + 0.234 * t - 1e-6],
                                ])
                                .stream(f)),
                            l()
                        )
                    }),
                    (s.fitExtent = function(n, t) {
                        return gl(s, n, t)
                    }),
                    (s.fitSize = function(n, t) {
                        return yl(s, n, t)
                    }),
                    (s.fitWidth = function(n, t) {
                        return bl(s, n, t)
                    }),
                    (s.fitHeight = function(n, t) {
                        return _l(s, n, t)
                    }),
                    s.scale(1070)
                )
            }
            function zl(n) {
                return function(t, e) {
                    var r = Ea(t),
                        i = Ea(e),
                        u = n(r * i)
                    return [u * i * Ra(t), u * Ra(e)]
                }
            }
            function Pl(n) {
                return function(t, e) {
                    var r = Da(t * t + e * e),
                        i = n(r),
                        u = Ra(i),
                        o = Ea(i)
                    return [Sa(t * u, r * o), Ua(r && (e * u) / r)]
                }
            }
            var Rl = zl(function(n) {
                return Da(2 / (1 + n))
            })
            Rl.invert = Pl(function(n) {
                return 2 * Ua(n / 2)
            })
            var jl = function() {
                    return Al(Rl)
                        .scale(124.75)
                        .clipAngle(179.999)
                },
                Dl = zl(function(n) {
                    return (n = La(n)) && n / Ra(n)
                })
            Dl.invert = Pl(function(n) {
                return n
            })
            var ql = function() {
                return Al(Dl)
                    .scale(79.4188)
                    .clipAngle(179.999)
            }
            function Ll(n, t) {
                return [n, za(qa((xa + t) / 2))]
            }
            Ll.invert = function(n, t) {
                return [n, 2 * ka(Oa(t)) - xa]
            }
            var Ul = function() {
                return Bl(Ll).scale(961 / Ma)
            }
            function Bl(n) {
                var t,
                    e,
                    r,
                    i = Al(n),
                    u = i.center,
                    o = i.scale,
                    a = i.translate,
                    c = i.clipExtent,
                    f = null
                function s() {
                    var u = ma * o(),
                        a = i(_f(i.rotate()).invert([0, 0]))
                    return c(
                        null == f
                            ? [
                                  [a[0] - u, a[1] - u],
                                  [a[0] + u, a[1] + u],
                              ]
                            : n === Ll
                            ? [
                                  [Math.max(a[0] - u, f), t],
                                  [Math.min(a[0] + u, e), r],
                              ]
                            : [
                                  [f, Math.max(a[1] - u, t)],
                                  [e, Math.min(a[1] + u, r)],
                              ]
                    )
                }
                return (
                    (i.scale = function(n) {
                        return arguments.length ? (o(n), s()) : o()
                    }),
                    (i.translate = function(n) {
                        return arguments.length ? (a(n), s()) : a()
                    }),
                    (i.center = function(n) {
                        return arguments.length ? (u(n), s()) : u()
                    }),
                    (i.clipExtent = function(n) {
                        return arguments.length
                            ? (null == n
                                  ? (f = t = e = r = null)
                                  : ((f = +n[0][0]), (t = +n[0][1]), (e = +n[1][0]), (r = +n[1][1])),
                              s())
                            : null == f
                            ? null
                            : [
                                  [f, t],
                                  [e, r],
                              ]
                    }),
                    s()
                )
            }
            function Yl(n) {
                return qa((xa + n) / 2)
            }
            function Fl(n, t) {
                var e = Ea(n),
                    r = n === t ? Ra(n) : za(e / Ea(t)) / za(Yl(t) / Yl(n)),
                    i = (e * Pa(Yl(n), r)) / r
                if (!r) return Ll
                function u(n, t) {
                    i > 0 ? t < 1e-6 - xa && (t = 1e-6 - xa) : t > xa - 1e-6 && (t = xa - 1e-6)
                    var e = i / Pa(Yl(t), r)
                    return [e * Ra(r * n), i - e * Ea(r * n)]
                }
                return (
                    (u.invert = function(n, t) {
                        var e = i - t,
                            u = ja(r) * Da(n * n + e * e),
                            o = Sa(n, Ta(e)) * ja(e)
                        return e * r < 0 && (o -= ma * ja(n) * ja(e)), [o / r, 2 * ka(Pa(i / u, 1 / r)) - xa]
                    }),
                    u
                )
            }
            var Il = function() {
                return kl(Fl)
                    .scale(109.5)
                    .parallels([30, 30])
            }
            function Hl(n, t) {
                return [n, t]
            }
            Hl.invert = Hl
            var Xl = function() {
                return Al(Hl).scale(152.63)
            }
            function Vl(n, t) {
                var e = Ea(n),
                    r = n === t ? Ra(n) : (e - Ea(t)) / (t - n),
                    i = e / r + n
                if (Ta(r) < 1e-6) return Hl
                function u(n, t) {
                    var e = i - t,
                        u = r * n
                    return [e * Ra(u), i - e * Ea(u)]
                }
                return (
                    (u.invert = function(n, t) {
                        var e = i - t,
                            u = Sa(n, Ta(e)) * ja(e)
                        return e * r < 0 && (u -= ma * ja(n) * ja(e)), [u / r, i - ja(r) * Da(n * n + e * e)]
                    }),
                    u
                )
            }
            var Gl = function() {
                    return kl(Vl)
                        .scale(131.154)
                        .center([0, 13.9389])
                },
                $l = 1.340264,
                Wl = -0.081106,
                Zl = 893e-6,
                Ql = 0.003796,
                Jl = Da(3) / 2
            function Kl(n, t) {
                var e = Ua(Jl * Ra(t)),
                    r = e * e,
                    i = r * r * r
                return [
                    (n * Ea(e)) / (Jl * ($l + 3 * Wl * r + i * (7 * Zl + 9 * Ql * r))),
                    e * ($l + Wl * r + i * (Zl + Ql * r)),
                ]
            }
            Kl.invert = function(n, t) {
                for (
                    var e, r = t, i = r * r, u = i * i * i, o = 0;
                    o < 12 &&
                    ((u =
                        (i =
                            (r -= e =
                                (r * ($l + Wl * i + u * (Zl + Ql * i)) - t) /
                                ($l + 3 * Wl * i + u * (7 * Zl + 9 * Ql * i))) * r) *
                        i *
                        i),
                    !(Ta(e) < 1e-12));
                    ++o
                );
                return [(Jl * n * ($l + 3 * Wl * i + u * (7 * Zl + 9 * Ql * i))) / Ea(r), Ua(Ra(r) / Jl)]
            }
            var nh = function() {
                return Al(Kl).scale(177.158)
            }
            function th(n, t) {
                var e = Ea(t),
                    r = Ea(n) * e
                return [(e * Ra(n)) / r, Ra(t) / r]
            }
            th.invert = Pl(ka)
            var eh = function() {
                    return Al(th)
                        .scale(144.049)
                        .clipAngle(60)
                },
                rh = function() {
                    var n,
                        t,
                        e,
                        r,
                        i,
                        u,
                        o,
                        a = 1,
                        c = 0,
                        f = 0,
                        s = 1,
                        l = 1,
                        h = 0,
                        d = null,
                        p = 1,
                        v = 1,
                        g = dl({
                            point: function(n, t) {
                                var e = _([n, t])
                                this.stream.point(e[0], e[1])
                            },
                        }),
                        y = ps
                    function b() {
                        return (p = a * s), (v = a * l), (u = o = null), _
                    }
                    function _(e) {
                        var r = e[0] * p,
                            i = e[1] * v
                        if (h) {
                            var u = i * n - r * t
                            ;(r = r * n + i * t), (i = u)
                        }
                        return [r + c, i + f]
                    }
                    return (
                        (_.invert = function(e) {
                            var r = e[0] - c,
                                i = e[1] - f
                            if (h) {
                                var u = i * n + r * t
                                ;(r = r * n - i * t), (i = u)
                            }
                            return [r / p, i / v]
                        }),
                        (_.stream = function(n) {
                            return u && o === n ? u : (u = g(y((o = n))))
                        }),
                        (_.postclip = function(n) {
                            return arguments.length ? ((y = n), (d = e = r = i = null), b()) : y
                        }),
                        (_.clipExtent = function(n) {
                            return arguments.length
                                ? ((y =
                                      null == n
                                          ? ((d = e = r = i = null), ps)
                                          : Df((d = +n[0][0]), (e = +n[0][1]), (r = +n[1][0]), (i = +n[1][1]))),
                                  b())
                                : null == d
                                ? null
                                : [
                                      [d, e],
                                      [r, i],
                                  ]
                        }),
                        (_.scale = function(n) {
                            return arguments.length ? ((a = +n), b()) : a
                        }),
                        (_.translate = function(n) {
                            return arguments.length ? ((c = +n[0]), (f = +n[1]), b()) : [c, f]
                        }),
                        (_.angle = function(e) {
                            return arguments.length ? ((t = Ra((h = (e % 360) * Aa))), (n = Ea(h)), b()) : h * Na
                        }),
                        (_.reflectX = function(n) {
                            return arguments.length ? ((s = n ? -1 : 1), b()) : s < 0
                        }),
                        (_.reflectY = function(n) {
                            return arguments.length ? ((l = n ? -1 : 1), b()) : l < 0
                        }),
                        (_.fitExtent = function(n, t) {
                            return gl(_, n, t)
                        }),
                        (_.fitSize = function(n, t) {
                            return yl(_, n, t)
                        }),
                        (_.fitWidth = function(n, t) {
                            return bl(_, n, t)
                        }),
                        (_.fitHeight = function(n, t) {
                            return _l(_, n, t)
                        }),
                        _
                    )
                }
            function ih(n, t) {
                var e = t * t,
                    r = e * e
                return [
                    n * (0.8707 - 0.131979 * e + r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
                    t * (1.007226 + e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
                ]
            }
            ih.invert = function(n, t) {
                var e,
                    r = t,
                    i = 25
                do {
                    var u = r * r,
                        o = u * u
                    r -= e =
                        (r * (1.007226 + u * (0.015085 + o * (0.028874 * u - 0.044475 - 0.005916 * o))) - t) /
                        (1.007226 + u * (0.045255 + o * (0.259866 * u - 0.311325 - 0.005916 * 11 * o)))
                } while (Ta(e) > 1e-6 && --i > 0)
                return [
                    n / (0.8707 + (u = r * r) * (u * (u * u * u * (0.003971 - 0.001529 * u) - 0.013791) - 0.131979)),
                    r,
                ]
            }
            var uh = function() {
                return Al(ih).scale(175.295)
            }
            function oh(n, t) {
                return [Ea(t) * Ra(n), Ra(t)]
            }
            oh.invert = Pl(Ua)
            var ah = function() {
                return Al(oh)
                    .scale(249.5)
                    .clipAngle(90.000001)
            }
            function ch(n, t) {
                var e = Ea(t),
                    r = 1 + Ea(n) * e
                return [(e * Ra(n)) / r, Ra(t) / r]
            }
            ch.invert = Pl(function(n) {
                return 2 * ka(n)
            })
            var fh = function() {
                return Al(ch)
                    .scale(250)
                    .clipAngle(142)
            }
            function sh(n, t) {
                return [za(qa((xa + t) / 2)), -n]
            }
            sh.invert = function(n, t) {
                return [-t, 2 * ka(Oa(n)) - xa]
            }
            var lh = function() {
                var n = Bl(sh),
                    t = n.center,
                    e = n.rotate
                return (
                    (n.center = function(n) {
                        return arguments.length ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]
                    }),
                    (n.rotate = function(n) {
                        return arguments.length
                            ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
                            : [(n = e())[0], n[1], n[2] - 90]
                    }),
                    e([0, 0, 90]).scale(159.155)
                )
            }
            function hh(n, t) {
                return n.parent === t.parent ? 1 : 2
            }
            function dh(n, t) {
                return n + t.x
            }
            function ph(n, t) {
                return Math.max(n, t.y)
            }
            var vh = function() {
                var n = hh,
                    t = 1,
                    e = 1,
                    r = !1
                function i(i) {
                    var u,
                        o = 0
                    i.eachAfter(function(t) {
                        var e = t.children
                        e
                            ? ((t.x = (function(n) {
                                  return n.reduce(dh, 0) / n.length
                              })(e)),
                              (t.y = (function(n) {
                                  return 1 + n.reduce(ph, 0)
                              })(e)))
                            : ((t.x = u ? (o += n(t, u)) : 0), (t.y = 0), (u = t))
                    })
                    var a = (function(n) {
                            for (var t; (t = n.children); ) n = t[0]
                            return n
                        })(i),
                        c = (function(n) {
                            for (var t; (t = n.children); ) n = t[t.length - 1]
                            return n
                        })(i),
                        f = a.x - n(a, c) / 2,
                        s = c.x + n(c, a) / 2
                    return i.eachAfter(
                        r
                            ? function(n) {
                                  ;(n.x = (n.x - i.x) * t), (n.y = (i.y - n.y) * e)
                              }
                            : function(n) {
                                  ;(n.x = ((n.x - f) / (s - f)) * t), (n.y = (1 - (i.y ? n.y / i.y : 1)) * e)
                              }
                    )
                }
                return (
                    (i.separation = function(t) {
                        return arguments.length ? ((n = t), i) : n
                    }),
                    (i.size = function(n) {
                        return arguments.length ? ((r = !1), (t = +n[0]), (e = +n[1]), i) : r ? null : [t, e]
                    }),
                    (i.nodeSize = function(n) {
                        return arguments.length ? ((r = !0), (t = +n[0]), (e = +n[1]), i) : r ? [t, e] : null
                    }),
                    i
                )
            }
            function gh(n) {
                var t = 0,
                    e = n.children,
                    r = e && e.length
                if (r) for (; --r >= 0; ) t += e[r].value
                else t = 1
                n.value = t
            }
            function yh(n, t) {
                var e,
                    r,
                    i,
                    u,
                    o,
                    a = new xh(n),
                    c = +n.value && (a.value = n.value),
                    f = [a]
                for (null == t && (t = bh); (e = f.pop()); )
                    if ((c && (e.value = +e.data.value), (i = t(e.data)) && (o = i.length)))
                        for (e.children = new Array(o), u = o - 1; u >= 0; --u)
                            f.push((r = e.children[u] = new xh(i[u]))), (r.parent = e), (r.depth = e.depth + 1)
                return a.eachBefore(mh)
            }
            function bh(n) {
                return n.children
            }
            function _h(n) {
                n.data = n.data.data
            }
            function mh(n) {
                var t = 0
                do {
                    n.height = t
                } while ((n = n.parent) && n.height < ++t)
            }
            function xh(n) {
                ;(this.data = n), (this.depth = this.height = 0), (this.parent = null)
            }
            xh.prototype = yh.prototype = {
                constructor: xh,
                count: function() {
                    return this.eachAfter(gh)
                },
                each: function(n) {
                    var t,
                        e,
                        r,
                        i,
                        u = this,
                        o = [u]
                    do {
                        for (t = o.reverse(), o = []; (u = t.pop()); )
                            if ((n(u), (e = u.children))) for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
                    } while (o.length)
                    return this
                },
                eachAfter: function(n) {
                    for (var t, e, r, i = this, u = [i], o = []; (i = u.pop()); )
                        if ((o.push(i), (t = i.children))) for (e = 0, r = t.length; e < r; ++e) u.push(t[e])
                    for (; (i = o.pop()); ) n(i)
                    return this
                },
                eachBefore: function(n) {
                    for (var t, e, r = this, i = [r]; (r = i.pop()); )
                        if ((n(r), (t = r.children))) for (e = t.length - 1; e >= 0; --e) i.push(t[e])
                    return this
                },
                sum: function(n) {
                    return this.eachAfter(function(t) {
                        for (var e = +n(t.data) || 0, r = t.children, i = r && r.length; --i >= 0; ) e += r[i].value
                        t.value = e
                    })
                },
                sort: function(n) {
                    return this.eachBefore(function(t) {
                        t.children && t.children.sort(n)
                    })
                },
                path: function(n) {
                    for (
                        var t = this,
                            e = (function(n, t) {
                                if (n === t) return n
                                var e = n.ancestors(),
                                    r = t.ancestors(),
                                    i = null
                                ;(n = e.pop()), (t = r.pop())
                                for (; n === t; ) (i = n), (n = e.pop()), (t = r.pop())
                                return i
                            })(t, n),
                            r = [t];
                        t !== e;

                    )
                        (t = t.parent), r.push(t)
                    for (var i = r.length; n !== e; ) r.splice(i, 0, n), (n = n.parent)
                    return r
                },
                ancestors: function() {
                    for (var n = this, t = [n]; (n = n.parent); ) t.push(n)
                    return t
                },
                descendants: function() {
                    var n = []
                    return (
                        this.each(function(t) {
                            n.push(t)
                        }),
                        n
                    )
                },
                leaves: function() {
                    var n = []
                    return (
                        this.eachBefore(function(t) {
                            t.children || n.push(t)
                        }),
                        n
                    )
                },
                links: function() {
                    var n = this,
                        t = []
                    return (
                        n.each(function(e) {
                            e !== n && t.push({ source: e.parent, target: e })
                        }),
                        t
                    )
                },
                copy: function() {
                    return yh(this).eachBefore(_h)
                },
            }
            var wh = Array.prototype.slice
            var Mh = function(n) {
                for (
                    var t,
                        e,
                        r = 0,
                        i = (n = (function(n) {
                            for (var t, e, r = n.length; r; )
                                (e = (Math.random() * r--) | 0), (t = n[r]), (n[r] = n[e]), (n[e] = t)
                            return n
                        })(wh.call(n))).length,
                        u = [];
                    r < i;

                )
                    (t = n[r]), e && Th(e, t) ? ++r : ((e = Sh((u = Nh(u, t)))), (r = 0))
                return e
            }
            function Nh(n, t) {
                var e, r
                if (kh(t, n)) return [t]
                for (e = 0; e < n.length; ++e) if (Ah(t, n[e]) && kh(Eh(n[e], t), n)) return [n[e], t]
                for (e = 0; e < n.length - 1; ++e)
                    for (r = e + 1; r < n.length; ++r)
                        if (
                            Ah(Eh(n[e], n[r]), t) &&
                            Ah(Eh(n[e], t), n[r]) &&
                            Ah(Eh(n[r], t), n[e]) &&
                            kh(Ch(n[e], n[r], t), n)
                        )
                            return [n[e], n[r], t]
                throw new Error()
            }
            function Ah(n, t) {
                var e = n.r - t.r,
                    r = t.x - n.x,
                    i = t.y - n.y
                return e < 0 || e * e < r * r + i * i
            }
            function Th(n, t) {
                var e = n.r - t.r + 1e-6,
                    r = t.x - n.x,
                    i = t.y - n.y
                return e > 0 && e * e > r * r + i * i
            }
            function kh(n, t) {
                for (var e = 0; e < t.length; ++e) if (!Th(n, t[e])) return !1
                return !0
            }
            function Sh(n) {
                switch (n.length) {
                    case 1:
                        return { x: (t = n[0]).x, y: t.y, r: t.r }
                    case 2:
                        return Eh(n[0], n[1])
                    case 3:
                        return Ch(n[0], n[1], n[2])
                }
                var t
            }
            function Eh(n, t) {
                var e = n.x,
                    r = n.y,
                    i = n.r,
                    u = t.x,
                    o = t.y,
                    a = t.r,
                    c = u - e,
                    f = o - r,
                    s = a - i,
                    l = Math.sqrt(c * c + f * f)
                return { x: (e + u + (c / l) * s) / 2, y: (r + o + (f / l) * s) / 2, r: (l + i + a) / 2 }
            }
            function Ch(n, t, e) {
                var r = n.x,
                    i = n.y,
                    u = n.r,
                    o = t.x,
                    a = t.y,
                    c = t.r,
                    f = e.x,
                    s = e.y,
                    l = e.r,
                    h = r - o,
                    d = r - f,
                    p = i - a,
                    v = i - s,
                    g = c - u,
                    y = l - u,
                    b = r * r + i * i - u * u,
                    _ = b - o * o - a * a + c * c,
                    m = b - f * f - s * s + l * l,
                    x = d * p - h * v,
                    w = (p * m - v * _) / (2 * x) - r,
                    M = (v * g - p * y) / x,
                    N = (d * _ - h * m) / (2 * x) - i,
                    A = (h * y - d * g) / x,
                    T = M * M + A * A - 1,
                    k = 2 * (u + w * M + N * A),
                    S = w * w + N * N - u * u,
                    E = -(T ? (k + Math.sqrt(k * k - 4 * T * S)) / (2 * T) : S / k)
                return { x: r + w + M * E, y: i + N + A * E, r: E }
            }
            function Oh(n, t, e) {
                var r,
                    i,
                    u,
                    o,
                    a = n.x - t.x,
                    c = n.y - t.y,
                    f = a * a + c * c
                f
                    ? ((i = t.r + e.r),
                      (i *= i),
                      (o = n.r + e.r),
                      i > (o *= o)
                          ? ((r = (f + o - i) / (2 * f)),
                            (u = Math.sqrt(Math.max(0, o / f - r * r))),
                            (e.x = n.x - r * a - u * c),
                            (e.y = n.y - r * c + u * a))
                          : ((r = (f + i - o) / (2 * f)),
                            (u = Math.sqrt(Math.max(0, i / f - r * r))),
                            (e.x = t.x + r * a - u * c),
                            (e.y = t.y + r * c + u * a)))
                    : ((e.x = t.x + e.r), (e.y = t.y))
            }
            function zh(n, t) {
                var e = n.r + t.r - 1e-6,
                    r = t.x - n.x,
                    i = t.y - n.y
                return e > 0 && e * e > r * r + i * i
            }
            function Ph(n) {
                var t = n._,
                    e = n.next._,
                    r = t.r + e.r,
                    i = (t.x * e.r + e.x * t.r) / r,
                    u = (t.y * e.r + e.y * t.r) / r
                return i * i + u * u
            }
            function Rh(n) {
                ;(this._ = n), (this.next = null), (this.previous = null)
            }
            function jh(n) {
                if (!(i = n.length)) return 0
                var t, e, r, i, u, o, a, c, f, s, l
                if ((((t = n[0]).x = 0), (t.y = 0), !(i > 1))) return t.r
                if (((e = n[1]), (t.x = -e.r), (e.x = t.r), (e.y = 0), !(i > 2))) return t.r + e.r
                Oh(e, t, (r = n[2])),
                    (t = new Rh(t)),
                    (e = new Rh(e)),
                    (r = new Rh(r)),
                    (t.next = r.previous = e),
                    (e.next = t.previous = r),
                    (r.next = e.previous = t)
                n: for (a = 3; a < i; ++a) {
                    Oh(t._, e._, (r = n[a])), (r = new Rh(r)), (c = e.next), (f = t.previous), (s = e._.r), (l = t._.r)
                    do {
                        if (s <= l) {
                            if (zh(c._, r._)) {
                                ;(e = c), (t.next = e), (e.previous = t), --a
                                continue n
                            }
                            ;(s += c._.r), (c = c.next)
                        } else {
                            if (zh(f._, r._)) {
                                ;((t = f).next = e), (e.previous = t), --a
                                continue n
                            }
                            ;(l += f._.r), (f = f.previous)
                        }
                    } while (c !== f.next)
                    for (r.previous = t, r.next = e, t.next = e.previous = e = r, u = Ph(t); (r = r.next) !== e; )
                        (o = Ph(r)) < u && ((t = r), (u = o))
                    e = t.next
                }
                for (t = [e._], r = e; (r = r.next) !== e; ) t.push(r._)
                for (r = Mh(t), a = 0; a < i; ++a) ((t = n[a]).x -= r.x), (t.y -= r.y)
                return r.r
            }
            var Dh = function(n) {
                return jh(n), n
            }
            function qh(n) {
                return null == n ? null : Lh(n)
            }
            function Lh(n) {
                if ('function' != typeof n) throw new Error()
                return n
            }
            function Uh() {
                return 0
            }
            var Bh = function(n) {
                return function() {
                    return n
                }
            }
            function Yh(n) {
                return Math.sqrt(n.value)
            }
            var Fh = function() {
                var n = null,
                    t = 1,
                    e = 1,
                    r = Uh
                function i(i) {
                    return (
                        (i.x = t / 2),
                        (i.y = e / 2),
                        n
                            ? i
                                  .eachBefore(Ih(n))
                                  .eachAfter(Hh(r, 0.5))
                                  .eachBefore(Xh(1))
                            : i
                                  .eachBefore(Ih(Yh))
                                  .eachAfter(Hh(Uh, 1))
                                  .eachAfter(Hh(r, i.r / Math.min(t, e)))
                                  .eachBefore(Xh(Math.min(t, e) / (2 * i.r))),
                        i
                    )
                }
                return (
                    (i.radius = function(t) {
                        return arguments.length ? ((n = qh(t)), i) : n
                    }),
                    (i.size = function(n) {
                        return arguments.length ? ((t = +n[0]), (e = +n[1]), i) : [t, e]
                    }),
                    (i.padding = function(n) {
                        return arguments.length ? ((r = 'function' == typeof n ? n : Bh(+n)), i) : r
                    }),
                    i
                )
            }
            function Ih(n) {
                return function(t) {
                    t.children || (t.r = Math.max(0, +n(t) || 0))
                }
            }
            function Hh(n, t) {
                return function(e) {
                    if ((r = e.children)) {
                        var r,
                            i,
                            u,
                            o = r.length,
                            a = n(e) * t || 0
                        if (a) for (i = 0; i < o; ++i) r[i].r += a
                        if (((u = jh(r)), a)) for (i = 0; i < o; ++i) r[i].r -= a
                        e.r = u + a
                    }
                }
            }
            function Xh(n) {
                return function(t) {
                    var e = t.parent
                    ;(t.r *= n), e && ((t.x = e.x + n * t.x), (t.y = e.y + n * t.y))
                }
            }
            var Vh = function(n) {
                    ;(n.x0 = Math.round(n.x0)),
                        (n.y0 = Math.round(n.y0)),
                        (n.x1 = Math.round(n.x1)),
                        (n.y1 = Math.round(n.y1))
                },
                Gh = function(n, t, e, r, i) {
                    for (var u, o = n.children, a = -1, c = o.length, f = n.value && (r - t) / n.value; ++a < c; )
                        ((u = o[a]).y0 = e), (u.y1 = i), (u.x0 = t), (u.x1 = t += u.value * f)
                },
                $h = function() {
                    var n = 1,
                        t = 1,
                        e = 0,
                        r = !1
                    function i(i) {
                        var u = i.height + 1
                        return (
                            (i.x0 = i.y0 = e),
                            (i.x1 = n),
                            (i.y1 = t / u),
                            i.eachBefore(
                                (function(n, t) {
                                    return function(r) {
                                        r.children &&
                                            Gh(r, r.x0, (n * (r.depth + 1)) / t, r.x1, (n * (r.depth + 2)) / t)
                                        var i = r.x0,
                                            u = r.y0,
                                            o = r.x1 - e,
                                            a = r.y1 - e
                                        o < i && (i = o = (i + o) / 2),
                                            a < u && (u = a = (u + a) / 2),
                                            (r.x0 = i),
                                            (r.y0 = u),
                                            (r.x1 = o),
                                            (r.y1 = a)
                                    }
                                })(t, u)
                            ),
                            r && i.eachBefore(Vh),
                            i
                        )
                    }
                    return (
                        (i.round = function(n) {
                            return arguments.length ? ((r = !!n), i) : r
                        }),
                        (i.size = function(e) {
                            return arguments.length ? ((n = +e[0]), (t = +e[1]), i) : [n, t]
                        }),
                        (i.padding = function(n) {
                            return arguments.length ? ((e = +n), i) : e
                        }),
                        i
                    )
                },
                Wh = { depth: -1 },
                Zh = {}
            function Qh(n) {
                return n.id
            }
            function Jh(n) {
                return n.parentId
            }
            var Kh = function() {
                var n = Qh,
                    t = Jh
                function e(e) {
                    var r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s = e.length,
                        l = new Array(s),
                        h = {}
                    for (i = 0; i < s; ++i)
                        (r = e[i]),
                            (a = l[i] = new xh(r)),
                            null != (c = n(r, i, e)) && (c += '') && (h[(f = '$' + (a.id = c))] = f in h ? Zh : a)
                    for (i = 0; i < s; ++i)
                        if (((a = l[i]), null != (c = t(e[i], i, e)) && (c += ''))) {
                            if (!(o = h['$' + c])) throw new Error('missing: ' + c)
                            if (o === Zh) throw new Error('ambiguous: ' + c)
                            o.children ? o.children.push(a) : (o.children = [a]), (a.parent = o)
                        } else {
                            if (u) throw new Error('multiple roots')
                            u = a
                        }
                    if (!u) throw new Error('no root')
                    if (
                        ((u.parent = Wh),
                        u
                            .eachBefore(function(n) {
                                ;(n.depth = n.parent.depth + 1), --s
                            })
                            .eachBefore(mh),
                        (u.parent = null),
                        s > 0)
                    )
                        throw new Error('cycle')
                    return u
                }
                return (
                    (e.id = function(t) {
                        return arguments.length ? ((n = Lh(t)), e) : n
                    }),
                    (e.parentId = function(n) {
                        return arguments.length ? ((t = Lh(n)), e) : t
                    }),
                    e
                )
            }
            function nd(n, t) {
                return n.parent === t.parent ? 1 : 2
            }
            function td(n) {
                var t = n.children
                return t ? t[0] : n.t
            }
            function ed(n) {
                var t = n.children
                return t ? t[t.length - 1] : n.t
            }
            function rd(n, t, e) {
                var r = e / (t.i - n.i)
                ;(t.c -= r), (t.s += e), (n.c += r), (t.z += e), (t.m += e)
            }
            function id(n, t, e) {
                return n.a.parent === t.parent ? n.a : e
            }
            function ud(n, t) {
                ;(this._ = n),
                    (this.parent = null),
                    (this.children = null),
                    (this.A = null),
                    (this.a = this),
                    (this.z = 0),
                    (this.m = 0),
                    (this.c = 0),
                    (this.s = 0),
                    (this.t = null),
                    (this.i = t)
            }
            ud.prototype = Object.create(xh.prototype)
            var od = function() {
                    var n = nd,
                        t = 1,
                        e = 1,
                        r = null
                    function i(i) {
                        var c = (function(n) {
                            for (var t, e, r, i, u, o = new ud(n, 0), a = [o]; (t = a.pop()); )
                                if ((r = t._.children))
                                    for (t.children = new Array((u = r.length)), i = u - 1; i >= 0; --i)
                                        a.push((e = t.children[i] = new ud(r[i], i))), (e.parent = t)
                            return ((o.parent = new ud(null, 0)).children = [o]), o
                        })(i)
                        if ((c.eachAfter(u), (c.parent.m = -c.z), c.eachBefore(o), r)) i.eachBefore(a)
                        else {
                            var f = i,
                                s = i,
                                l = i
                            i.eachBefore(function(n) {
                                n.x < f.x && (f = n), n.x > s.x && (s = n), n.depth > l.depth && (l = n)
                            })
                            var h = f === s ? 1 : n(f, s) / 2,
                                d = h - f.x,
                                p = t / (s.x + h + d),
                                v = e / (l.depth || 1)
                            i.eachBefore(function(n) {
                                ;(n.x = (n.x + d) * p), (n.y = n.depth * v)
                            })
                        }
                        return i
                    }
                    function u(t) {
                        var e = t.children,
                            r = t.parent.children,
                            i = t.i ? r[t.i - 1] : null
                        if (e) {
                            !(function(n) {
                                for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0; )
                                    ((t = i[u]).z += e), (t.m += e), (e += t.s + (r += t.c))
                            })(t)
                            var u = (e[0].z + e[e.length - 1].z) / 2
                            i ? ((t.z = i.z + n(t._, i._)), (t.m = t.z - u)) : (t.z = u)
                        } else i && (t.z = i.z + n(t._, i._))
                        t.parent.A = (function(t, e, r) {
                            if (e) {
                                for (
                                    var i,
                                        u = t,
                                        o = t,
                                        a = e,
                                        c = u.parent.children[0],
                                        f = u.m,
                                        s = o.m,
                                        l = a.m,
                                        h = c.m;
                                    (a = ed(a)), (u = td(u)), a && u;

                                )
                                    (c = td(c)),
                                        ((o = ed(o)).a = t),
                                        (i = a.z + l - u.z - f + n(a._, u._)) > 0 &&
                                            (rd(id(a, t, r), t, i), (f += i), (s += i)),
                                        (l += a.m),
                                        (f += u.m),
                                        (h += c.m),
                                        (s += o.m)
                                a && !ed(o) && ((o.t = a), (o.m += l - s)),
                                    u && !td(c) && ((c.t = u), (c.m += f - h), (r = t))
                            }
                            return r
                        })(t, i, t.parent.A || r[0])
                    }
                    function o(n) {
                        ;(n._.x = n.z + n.parent.m), (n.m += n.parent.m)
                    }
                    function a(n) {
                        ;(n.x *= t), (n.y = n.depth * e)
                    }
                    return (
                        (i.separation = function(t) {
                            return arguments.length ? ((n = t), i) : n
                        }),
                        (i.size = function(n) {
                            return arguments.length ? ((r = !1), (t = +n[0]), (e = +n[1]), i) : r ? null : [t, e]
                        }),
                        (i.nodeSize = function(n) {
                            return arguments.length ? ((r = !0), (t = +n[0]), (e = +n[1]), i) : r ? [t, e] : null
                        }),
                        i
                    )
                },
                ad = function(n, t, e, r, i) {
                    for (var u, o = n.children, a = -1, c = o.length, f = n.value && (i - e) / n.value; ++a < c; )
                        ((u = o[a]).x0 = t), (u.x1 = r), (u.y0 = e), (u.y1 = e += u.value * f)
                },
                cd = (1 + Math.sqrt(5)) / 2
            function fd(n, t, e, r, i, u) {
                for (
                    var o,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        g,
                        y = [],
                        b = t.children,
                        _ = 0,
                        m = 0,
                        x = b.length,
                        w = t.value;
                    _ < x;

                ) {
                    ;(c = i - e), (f = u - r)
                    do {
                        s = b[m++].value
                    } while (!s && m < x)
                    for (
                        l = h = s, g = s * s * (v = Math.max(f / c, c / f) / (w * n)), p = Math.max(h / g, g / l);
                        m < x;
                        ++m
                    ) {
                        if (
                            ((s += a = b[m].value),
                            a < l && (l = a),
                            a > h && (h = a),
                            (g = s * s * v),
                            (d = Math.max(h / g, g / l)) > p)
                        ) {
                            s -= a
                            break
                        }
                        p = d
                    }
                    y.push((o = { value: s, dice: c < f, children: b.slice(_, m) })),
                        o.dice
                            ? Gh(o, e, r, i, w ? (r += (f * s) / w) : u)
                            : ad(o, e, r, w ? (e += (c * s) / w) : i, u),
                        (w -= s),
                        (_ = m)
                }
                return y
            }
            var sd = (function n(t) {
                    function e(n, e, r, i, u) {
                        fd(t, n, e, r, i, u)
                    }
                    return (
                        (e.ratio = function(t) {
                            return n((t = +t) > 1 ? t : 1)
                        }),
                        e
                    )
                })(cd),
                ld = function() {
                    var n = sd,
                        t = !1,
                        e = 1,
                        r = 1,
                        i = [0],
                        u = Uh,
                        o = Uh,
                        a = Uh,
                        c = Uh,
                        f = Uh
                    function s(n) {
                        return (
                            (n.x0 = n.y0 = 0),
                            (n.x1 = e),
                            (n.y1 = r),
                            n.eachBefore(l),
                            (i = [0]),
                            t && n.eachBefore(Vh),
                            n
                        )
                    }
                    function l(t) {
                        var e = i[t.depth],
                            r = t.x0 + e,
                            s = t.y0 + e,
                            l = t.x1 - e,
                            h = t.y1 - e
                        l < r && (r = l = (r + l) / 2),
                            h < s && (s = h = (s + h) / 2),
                            (t.x0 = r),
                            (t.y0 = s),
                            (t.x1 = l),
                            (t.y1 = h),
                            t.children &&
                                ((e = i[t.depth + 1] = u(t) / 2),
                                (r += f(t) - e),
                                (s += o(t) - e),
                                (l -= a(t) - e) < r && (r = l = (r + l) / 2),
                                (h -= c(t) - e) < s && (s = h = (s + h) / 2),
                                n(t, r, s, l, h))
                    }
                    return (
                        (s.round = function(n) {
                            return arguments.length ? ((t = !!n), s) : t
                        }),
                        (s.size = function(n) {
                            return arguments.length ? ((e = +n[0]), (r = +n[1]), s) : [e, r]
                        }),
                        (s.tile = function(t) {
                            return arguments.length ? ((n = Lh(t)), s) : n
                        }),
                        (s.padding = function(n) {
                            return arguments.length ? s.paddingInner(n).paddingOuter(n) : s.paddingInner()
                        }),
                        (s.paddingInner = function(n) {
                            return arguments.length ? ((u = 'function' == typeof n ? n : Bh(+n)), s) : u
                        }),
                        (s.paddingOuter = function(n) {
                            return arguments.length
                                ? s
                                      .paddingTop(n)
                                      .paddingRight(n)
                                      .paddingBottom(n)
                                      .paddingLeft(n)
                                : s.paddingTop()
                        }),
                        (s.paddingTop = function(n) {
                            return arguments.length ? ((o = 'function' == typeof n ? n : Bh(+n)), s) : o
                        }),
                        (s.paddingRight = function(n) {
                            return arguments.length ? ((a = 'function' == typeof n ? n : Bh(+n)), s) : a
                        }),
                        (s.paddingBottom = function(n) {
                            return arguments.length ? ((c = 'function' == typeof n ? n : Bh(+n)), s) : c
                        }),
                        (s.paddingLeft = function(n) {
                            return arguments.length ? ((f = 'function' == typeof n ? n : Bh(+n)), s) : f
                        }),
                        s
                    )
                },
                hd = function(n, t, e, r, i) {
                    var u,
                        o,
                        a = n.children,
                        c = a.length,
                        f = new Array(c + 1)
                    for (f[0] = o = u = 0; u < c; ++u) f[u + 1] = o += a[u].value
                    !(function n(t, e, r, i, u, o, c) {
                        if (t >= e - 1) {
                            var s = a[t]
                            return (s.x0 = i), (s.y0 = u), (s.x1 = o), void (s.y1 = c)
                        }
                        var l = f[t],
                            h = r / 2 + l,
                            d = t + 1,
                            p = e - 1
                        for (; d < p; ) {
                            var v = (d + p) >>> 1
                            f[v] < h ? (d = v + 1) : (p = v)
                        }
                        h - f[d - 1] < f[d] - h && t + 1 < d && --d
                        var g = f[d] - l,
                            y = r - g
                        if (o - i > c - u) {
                            var b = (i * y + o * g) / r
                            n(t, d, g, i, u, b, c), n(d, e, y, b, u, o, c)
                        } else {
                            var _ = (u * y + c * g) / r
                            n(t, d, g, i, u, o, _), n(d, e, y, i, _, o, c)
                        }
                    })(0, c, n.value, t, e, r, i)
                },
                dd = function(n, t, e, r, i) {
                    ;(1 & n.depth ? ad : Gh)(n, t, e, r, i)
                },
                pd = (function n(t) {
                    function e(n, e, r, i, u) {
                        if ((o = n._squarify) && o.ratio === t)
                            for (var o, a, c, f, s, l = -1, h = o.length, d = n.value; ++l < h; ) {
                                for (c = (a = o[l]).children, f = a.value = 0, s = c.length; f < s; ++f)
                                    a.value += c[f].value
                                a.dice
                                    ? Gh(a, e, r, i, (r += ((u - r) * a.value) / d))
                                    : ad(a, e, r, (e += ((i - e) * a.value) / d), u),
                                    (d -= a.value)
                            }
                        else (n._squarify = o = fd(t, n, e, r, i, u)), (o.ratio = t)
                    }
                    return (
                        (e.ratio = function(t) {
                            return n((t = +t) > 1 ? t : 1)
                        }),
                        e
                    )
                })(cd),
                vd = function(n) {
                    var t = n.length
                    return function(e) {
                        return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))]
                    }
                },
                gd = function(n, t) {
                    var e = wt(+n, +t)
                    return function(n) {
                        var t = e(n)
                        return t - 360 * Math.floor(t / 360)
                    }
                },
                yd = function(n, t) {
                    return (
                        (n = +n),
                        (t = +t),
                        function(e) {
                            return Math.round(n * (1 - e) + t * e)
                        }
                    )
                },
                bd = Math.SQRT2
            function _d(n) {
                return ((n = Math.exp(n)) + 1 / n) / 2
            }
            var md = function(n, t) {
                var e,
                    r,
                    i = n[0],
                    u = n[1],
                    o = n[2],
                    a = t[0],
                    c = t[1],
                    f = t[2],
                    s = a - i,
                    l = c - u,
                    h = s * s + l * l
                if (h < 1e-12)
                    (r = Math.log(f / o) / bd),
                        (e = function(n) {
                            return [i + n * s, u + n * l, o * Math.exp(bd * n * r)]
                        })
                else {
                    var d = Math.sqrt(h),
                        p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
                        v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
                        g = Math.log(Math.sqrt(p * p + 1) - p),
                        y = Math.log(Math.sqrt(v * v + 1) - v)
                    ;(r = (y - g) / bd),
                        (e = function(n) {
                            var t,
                                e = n * r,
                                a = _d(g),
                                c =
                                    (o / (2 * d)) *
                                    (a * ((t = bd * e + g), ((t = Math.exp(2 * t)) - 1) / (t + 1)) -
                                        (function(n) {
                                            return ((n = Math.exp(n)) - 1 / n) / 2
                                        })(g))
                            return [i + c * s, u + c * l, (o * a) / _d(bd * e + g)]
                        })
                }
                return (e.duration = 1e3 * r), e
            }
            function xd(n) {
                return function(t, e) {
                    var r = n((t = pt(t)).h, (e = pt(e)).h),
                        i = Nt(t.s, e.s),
                        u = Nt(t.l, e.l),
                        o = Nt(t.opacity, e.opacity)
                    return function(n) {
                        return (t.h = r(n)), (t.s = i(n)), (t.l = u(n)), (t.opacity = o(n)), t + ''
                    }
                }
            }
            var wd = xd(wt),
                Md = xd(Nt)
            function Nd(n, t) {
                var e = Nt((n = wi(n)).l, (t = wi(t)).l),
                    r = Nt(n.a, t.a),
                    i = Nt(n.b, t.b),
                    u = Nt(n.opacity, t.opacity)
                return function(t) {
                    return (n.l = e(t)), (n.a = r(t)), (n.b = i(t)), (n.opacity = u(t)), n + ''
                }
            }
            function Ad(n) {
                return function(t, e) {
                    var r = n((t = Ci(t)).h, (e = Ci(e)).h),
                        i = Nt(t.c, e.c),
                        u = Nt(t.l, e.l),
                        o = Nt(t.opacity, e.opacity)
                    return function(n) {
                        return (t.h = r(n)), (t.c = i(n)), (t.l = u(n)), (t.opacity = o(n)), t + ''
                    }
                }
            }
            var Td = Ad(wt),
                kd = Ad(Nt)
            function Sd(n) {
                return (function t(e) {
                    function r(t, r) {
                        var i = n((t = Ui(t)).h, (r = Ui(r)).h),
                            u = Nt(t.s, r.s),
                            o = Nt(t.l, r.l),
                            a = Nt(t.opacity, r.opacity)
                        return function(n) {
                            return (t.h = i(n)), (t.s = u(n)), (t.l = o(Math.pow(n, e))), (t.opacity = a(n)), t + ''
                        }
                    }
                    return (e = +e), (r.gamma = t), r
                })(1)
            }
            var Ed = Sd(wt),
                Cd = Sd(Nt)
            function Od(n, t) {
                for (var e = 0, r = t.length - 1, i = t[0], u = new Array(r < 0 ? 0 : r); e < r; )
                    u[e] = n(i, (i = t[++e]))
                return function(n) {
                    var t = Math.max(0, Math.min(r - 1, Math.floor((n *= r))))
                    return u[t](n - t)
                }
            }
            var zd = function(n, t) {
                    for (var e = new Array(t), r = 0; r < t; ++r) e[r] = n(r / (t - 1))
                    return e
                },
                Pd = e(340),
                Rd = function(n) {
                    for (var t, e = -1, r = n.length, i = n[r - 1], u = 0; ++e < r; )
                        (t = i), (i = n[e]), (u += t[1] * i[0] - t[0] * i[1])
                    return u / 2
                },
                jd = function(n) {
                    for (var t, e, r = -1, i = n.length, u = 0, o = 0, a = n[i - 1], c = 0; ++r < i; )
                        (t = a),
                            (a = n[r]),
                            (c += e = t[0] * a[1] - a[0] * t[1]),
                            (u += (t[0] + a[0]) * e),
                            (o += (t[1] + a[1]) * e)
                    return [u / (c *= 3), o / c]
                }
            function Dd(n, t) {
                return n[0] - t[0] || n[1] - t[1]
            }
            function qd(n) {
                for (var t, e, r, i = n.length, u = [0, 1], o = 2, a = 2; a < i; ++a) {
                    for (
                        ;
                        o > 1 &&
                        ((t = n[u[o - 2]]),
                        (e = n[u[o - 1]]),
                        (r = n[a]),
                        (e[0] - t[0]) * (r[1] - t[1]) - (e[1] - t[1]) * (r[0] - t[0]) <= 0);

                    )
                        --o
                    u[o++] = a
                }
                return u.slice(0, o)
            }
            var Ld = function(n) {
                    if ((e = n.length) < 3) return null
                    var t,
                        e,
                        r = new Array(e),
                        i = new Array(e)
                    for (t = 0; t < e; ++t) r[t] = [+n[t][0], +n[t][1], t]
                    for (r.sort(Dd), t = 0; t < e; ++t) i[t] = [r[t][0], -r[t][1]]
                    var u = qd(r),
                        o = qd(i),
                        a = o[0] === u[0],
                        c = o[o.length - 1] === u[u.length - 1],
                        f = []
                    for (t = u.length - 1; t >= 0; --t) f.push(n[r[u[t]][2]])
                    for (t = +a; t < o.length - c; ++t) f.push(n[r[o[t]][2]])
                    return f
                },
                Ud = function(n, t) {
                    for (
                        var e, r, i = n.length, u = n[i - 1], o = t[0], a = t[1], c = u[0], f = u[1], s = !1, l = 0;
                        l < i;
                        ++l
                    )
                        (e = (u = n[l])[0]),
                            (r = u[1]) > a != f > a && o < ((c - e) * (a - r)) / (f - r) + e && (s = !s),
                            (c = e),
                            (f = r)
                    return s
                },
                Bd = function(n) {
                    for (var t, e, r = -1, i = n.length, u = n[i - 1], o = u[0], a = u[1], c = 0; ++r < i; )
                        (t = o), (e = a), (t -= o = (u = n[r])[0]), (e -= a = u[1]), (c += Math.sqrt(t * t + e * e))
                    return c
                },
                Yd = function() {
                    return Math.random()
                },
                Fd = (function n(t) {
                    function e(n, e) {
                        return (
                            (n = null == n ? 0 : +n),
                            (e = null == e ? 1 : +e),
                            1 === arguments.length ? ((e = n), (n = 0)) : (e -= n),
                            function() {
                                return t() * e + n
                            }
                        )
                    }
                    return (e.source = n), e
                })(Yd),
                Id = (function n(t) {
                    function e(n, e) {
                        var r, i
                        return (
                            (n = null == n ? 0 : +n),
                            (e = null == e ? 1 : +e),
                            function() {
                                var u
                                if (null != r) (u = r), (r = null)
                                else
                                    do {
                                        ;(r = 2 * t() - 1), (u = 2 * t() - 1), (i = r * r + u * u)
                                    } while (!i || i > 1)
                                return n + e * u * Math.sqrt((-2 * Math.log(i)) / i)
                            }
                        )
                    }
                    return (e.source = n), e
                })(Yd),
                Hd = (function n(t) {
                    function e() {
                        var n = Id.source(t).apply(this, arguments)
                        return function() {
                            return Math.exp(n())
                        }
                    }
                    return (e.source = n), e
                })(Yd),
                Xd = (function n(t) {
                    function e(n) {
                        return function() {
                            for (var e = 0, r = 0; r < n; ++r) e += t()
                            return e
                        }
                    }
                    return (e.source = n), e
                })(Yd),
                Vd = (function n(t) {
                    function e(n) {
                        var e = Xd.source(t)(n)
                        return function() {
                            return e() / n
                        }
                    }
                    return (e.source = n), e
                })(Yd),
                Gd = (function n(t) {
                    function e(n) {
                        return function() {
                            return -Math.log(1 - t()) / n
                        }
                    }
                    return (e.source = n), e
                })(Yd)
            function $d(n, t) {
                switch (arguments.length) {
                    case 0:
                        break
                    case 1:
                        this.range(n)
                        break
                    default:
                        this.range(t).domain(n)
                }
                return this
            }
            function Wd(n, t) {
                switch (arguments.length) {
                    case 0:
                        break
                    case 1:
                        this.interpolator(n)
                        break
                    default:
                        this.interpolator(t).domain(n)
                }
                return this
            }
            var Zd = Array.prototype,
                Qd = Zd.map,
                Jd = Zd.slice,
                Kd = { name: 'implicit' }
            function np() {
                var n = ui(),
                    t = [],
                    e = [],
                    r = Kd
                function i(i) {
                    var u = i + '',
                        o = n.get(u)
                    if (!o) {
                        if (r !== Kd) return r
                        n.set(u, (o = t.push(i)))
                    }
                    return e[(o - 1) % e.length]
                }
                return (
                    (i.domain = function(e) {
                        if (!arguments.length) return t.slice()
                        ;(t = []), (n = ui())
                        for (var r, u, o = -1, a = e.length; ++o < a; )
                            n.has((u = (r = e[o]) + '')) || n.set(u, t.push(r))
                        return i
                    }),
                    (i.range = function(n) {
                        return arguments.length ? ((e = Jd.call(n)), i) : e.slice()
                    }),
                    (i.unknown = function(n) {
                        return arguments.length ? ((r = n), i) : r
                    }),
                    (i.copy = function() {
                        return np(t, e).unknown(r)
                    }),
                    $d.apply(i, arguments),
                    i
                )
            }
            function tp() {
                var n,
                    t,
                    e = np().unknown(void 0),
                    r = e.domain,
                    u = e.range,
                    o = [0, 1],
                    a = !1,
                    c = 0,
                    f = 0,
                    s = 0.5
                function l() {
                    var e = r().length,
                        l = o[1] < o[0],
                        h = o[l - 0],
                        d = o[1 - l]
                    ;(n = (d - h) / Math.max(1, e - c + 2 * f)),
                        a && (n = Math.floor(n)),
                        (h += (d - h - n * (e - c)) * s),
                        (t = n * (1 - c)),
                        a && ((h = Math.round(h)), (t = Math.round(t)))
                    var p = Object(i.s)(e).map(function(t) {
                        return h + n * t
                    })
                    return u(l ? p.reverse() : p)
                }
                return (
                    delete e.unknown,
                    (e.domain = function(n) {
                        return arguments.length ? (r(n), l()) : r()
                    }),
                    (e.range = function(n) {
                        return arguments.length ? ((o = [+n[0], +n[1]]), l()) : o.slice()
                    }),
                    (e.rangeRound = function(n) {
                        return (o = [+n[0], +n[1]]), (a = !0), l()
                    }),
                    (e.bandwidth = function() {
                        return t
                    }),
                    (e.step = function() {
                        return n
                    }),
                    (e.round = function(n) {
                        return arguments.length ? ((a = !!n), l()) : a
                    }),
                    (e.padding = function(n) {
                        return arguments.length ? ((c = Math.min(1, (f = +n))), l()) : c
                    }),
                    (e.paddingInner = function(n) {
                        return arguments.length ? ((c = Math.min(1, n)), l()) : c
                    }),
                    (e.paddingOuter = function(n) {
                        return arguments.length ? ((f = +n), l()) : f
                    }),
                    (e.align = function(n) {
                        return arguments.length ? ((s = Math.max(0, Math.min(1, n))), l()) : s
                    }),
                    (e.copy = function() {
                        return tp(r(), o)
                            .round(a)
                            .paddingInner(c)
                            .paddingOuter(f)
                            .align(s)
                    }),
                    $d.apply(l(), arguments)
                )
            }
            function ep(n) {
                var t = n.copy
                return (
                    (n.padding = n.paddingOuter),
                    delete n.paddingInner,
                    delete n.paddingOuter,
                    (n.copy = function() {
                        return ep(t())
                    }),
                    n
                )
            }
            function rp() {
                return ep(tp.apply(null, arguments).paddingInner(1))
            }
            var ip = function(n) {
                    return +n
                },
                up = [0, 1]
            function op(n) {
                return n
            }
            function ap(n, t) {
                return (t -= n = +n)
                    ? function(e) {
                          return (e - n) / t
                      }
                    : ((e = isNaN(t) ? NaN : 0.5),
                      function() {
                          return e
                      })
                var e
            }
            function cp(n) {
                var t,
                    e = n[0],
                    r = n[n.length - 1]
                return (
                    e > r && ((t = e), (e = r), (r = t)),
                    function(n) {
                        return Math.max(e, Math.min(r, n))
                    }
                )
            }
            function fp(n, t, e) {
                var r = n[0],
                    i = n[1],
                    u = t[0],
                    o = t[1]
                return (
                    i < r ? ((r = ap(i, r)), (u = e(o, u))) : ((r = ap(r, i)), (u = e(u, o))),
                    function(n) {
                        return u(r(n))
                    }
                )
            }
            function sp(n, t, e) {
                var r = Math.min(n.length, t.length) - 1,
                    u = new Array(r),
                    o = new Array(r),
                    a = -1
                for (n[r] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse())); ++a < r; )
                    (u[a] = ap(n[a], n[a + 1])), (o[a] = e(t[a], t[a + 1]))
                return function(t) {
                    var e = Object(i.b)(n, t, 1, r) - 1
                    return o[e](u[e](t))
                }
            }
            function lp(n, t) {
                return t
                    .domain(n.domain())
                    .range(n.range())
                    .interpolate(n.interpolate())
                    .clamp(n.clamp())
                    .unknown(n.unknown())
            }
            function hp() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    u,
                    o = up,
                    a = up,
                    c = Yt,
                    f = op
                function s() {
                    return (r = Math.min(o.length, a.length) > 2 ? sp : fp), (i = u = null), l
                }
                function l(t) {
                    return isNaN((t = +t)) ? e : (i || (i = r(o.map(n), a, c)))(n(f(t)))
                }
                return (
                    (l.invert = function(e) {
                        return f(t((u || (u = r(a, o.map(n), Rt)))(e)))
                    }),
                    (l.domain = function(n) {
                        return arguments.length ? ((o = Qd.call(n, ip)), f === op || (f = cp(o)), s()) : o.slice()
                    }),
                    (l.range = function(n) {
                        return arguments.length ? ((a = Jd.call(n)), s()) : a.slice()
                    }),
                    (l.rangeRound = function(n) {
                        return (a = Jd.call(n)), (c = yd), s()
                    }),
                    (l.clamp = function(n) {
                        return arguments.length ? ((f = n ? cp(o) : op), l) : f !== op
                    }),
                    (l.interpolate = function(n) {
                        return arguments.length ? ((c = n), s()) : c
                    }),
                    (l.unknown = function(n) {
                        return arguments.length ? ((e = n), l) : e
                    }),
                    function(e, r) {
                        return (n = e), (t = r), s()
                    }
                )
            }
            function dp(n, t) {
                return hp()(n, t)
            }
            var pp = function(n, t, e, r) {
                var u,
                    o = Object(i.A)(n, t, e)
                switch ((r = na(null == r ? ',f' : r)).type) {
                    case 's':
                        var a = Math.max(Math.abs(n), Math.abs(t))
                        return null != r.precision || isNaN((u = pa(o, a))) || (r.precision = u), ua(r, a)
                    case '':
                    case 'e':
                    case 'g':
                    case 'p':
                    case 'r':
                        null != r.precision ||
                            isNaN((u = va(o, Math.max(Math.abs(n), Math.abs(t))))) ||
                            (r.precision = u - ('e' === r.type))
                        break
                    case 'f':
                    case '%':
                        null != r.precision || isNaN((u = da(o))) || (r.precision = u - 2 * ('%' === r.type))
                }
                return ia(r)
            }
            function vp(n) {
                var t = n.domain
                return (
                    (n.ticks = function(n) {
                        var e = t()
                        return Object(i.B)(e[0], e[e.length - 1], null == n ? 10 : n)
                    }),
                    (n.tickFormat = function(n, e) {
                        var r = t()
                        return pp(r[0], r[r.length - 1], null == n ? 10 : n, e)
                    }),
                    (n.nice = function(e) {
                        null == e && (e = 10)
                        var r,
                            u = t(),
                            o = 0,
                            a = u.length - 1,
                            c = u[o],
                            f = u[a]
                        return (
                            f < c && ((r = c), (c = f), (f = r), (r = o), (o = a), (a = r)),
                            (r = Object(i.z)(c, f, e)) > 0
                                ? ((c = Math.floor(c / r) * r), (f = Math.ceil(f / r) * r), (r = Object(i.z)(c, f, e)))
                                : r < 0 &&
                                  ((c = Math.ceil(c * r) / r), (f = Math.floor(f * r) / r), (r = Object(i.z)(c, f, e))),
                            r > 0
                                ? ((u[o] = Math.floor(c / r) * r), (u[a] = Math.ceil(f / r) * r), t(u))
                                : r < 0 && ((u[o] = Math.ceil(c * r) / r), (u[a] = Math.floor(f * r) / r), t(u)),
                            n
                        )
                    }),
                    n
                )
            }
            function gp() {
                var n = dp(op, op)
                return (
                    (n.copy = function() {
                        return lp(n, gp())
                    }),
                    $d.apply(n, arguments),
                    vp(n)
                )
            }
            function yp(n) {
                var t
                function e(n) {
                    return isNaN((n = +n)) ? t : n
                }
                return (
                    (e.invert = e),
                    (e.domain = e.range = function(t) {
                        return arguments.length ? ((n = Qd.call(t, ip)), e) : n.slice()
                    }),
                    (e.unknown = function(n) {
                        return arguments.length ? ((t = n), e) : t
                    }),
                    (e.copy = function() {
                        return yp(n).unknown(t)
                    }),
                    (n = arguments.length ? Qd.call(n, ip) : [0, 1]),
                    vp(e)
                )
            }
            var bp = function(n, t) {
                var e,
                    r = 0,
                    i = (n = n.slice()).length - 1,
                    u = n[r],
                    o = n[i]
                return (
                    o < u && ((e = r), (r = i), (i = e), (e = u), (u = o), (o = e)),
                    (n[r] = t.floor(u)),
                    (n[i] = t.ceil(o)),
                    n
                )
            }
            function _p(n) {
                return Math.log(n)
            }
            function mp(n) {
                return Math.exp(n)
            }
            function xp(n) {
                return -Math.log(-n)
            }
            function wp(n) {
                return -Math.exp(-n)
            }
            function Mp(n) {
                return isFinite(n) ? +('1e' + n) : n < 0 ? 0 : n
            }
            function Np(n) {
                return function(t) {
                    return -n(-t)
                }
            }
            function Ap(n) {
                var t,
                    e,
                    r = n(_p, mp),
                    u = r.domain,
                    o = 10
                function a() {
                    return (
                        (t = (function(n) {
                            return n === Math.E
                                ? Math.log
                                : (10 === n && Math.log10) ||
                                      (2 === n && Math.log2) ||
                                      ((n = Math.log(n)),
                                      function(t) {
                                          return Math.log(t) / n
                                      })
                        })(o)),
                        (e = (function(n) {
                            return 10 === n
                                ? Mp
                                : n === Math.E
                                ? Math.exp
                                : function(t) {
                                      return Math.pow(n, t)
                                  }
                        })(o)),
                        u()[0] < 0 ? ((t = Np(t)), (e = Np(e)), n(xp, wp)) : n(_p, mp),
                        r
                    )
                }
                return (
                    (r.base = function(n) {
                        return arguments.length ? ((o = +n), a()) : o
                    }),
                    (r.domain = function(n) {
                        return arguments.length ? (u(n), a()) : u()
                    }),
                    (r.ticks = function(n) {
                        var r,
                            a = u(),
                            c = a[0],
                            f = a[a.length - 1]
                        ;(r = f < c) && ((d = c), (c = f), (f = d))
                        var s,
                            l,
                            h,
                            d = t(c),
                            p = t(f),
                            v = null == n ? 10 : +n,
                            g = []
                        if (!(o % 1) && p - d < v) {
                            if (((d = Math.round(d) - 1), (p = Math.round(p) + 1), c > 0)) {
                                for (; d < p; ++d)
                                    for (l = 1, s = e(d); l < o; ++l)
                                        if (!((h = s * l) < c)) {
                                            if (h > f) break
                                            g.push(h)
                                        }
                            } else
                                for (; d < p; ++d)
                                    for (l = o - 1, s = e(d); l >= 1; --l)
                                        if (!((h = s * l) < c)) {
                                            if (h > f) break
                                            g.push(h)
                                        }
                        } else g = Object(i.B)(d, p, Math.min(p - d, v)).map(e)
                        return r ? g.reverse() : g
                    }),
                    (r.tickFormat = function(n, i) {
                        if (
                            (null == i && (i = 10 === o ? '.0e' : ','),
                            'function' != typeof i && (i = ia(i)),
                            n === 1 / 0)
                        )
                            return i
                        null == n && (n = 10)
                        var u = Math.max(1, (o * n) / r.ticks().length)
                        return function(n) {
                            var r = n / e(Math.round(t(n)))
                            return r * o < o - 0.5 && (r *= o), r <= u ? i(n) : ''
                        }
                    }),
                    (r.nice = function() {
                        return u(
                            bp(u(), {
                                floor: function(n) {
                                    return e(Math.floor(t(n)))
                                },
                                ceil: function(n) {
                                    return e(Math.ceil(t(n)))
                                },
                            })
                        )
                    }),
                    r
                )
            }
            function Tp() {
                var n = Ap(hp()).domain([1, 10])
                return (
                    (n.copy = function() {
                        return lp(n, Tp()).base(n.base())
                    }),
                    $d.apply(n, arguments),
                    n
                )
            }
            function kp(n) {
                return function(t) {
                    return Math.sign(t) * Math.log1p(Math.abs(t / n))
                }
            }
            function Sp(n) {
                return function(t) {
                    return Math.sign(t) * Math.expm1(Math.abs(t)) * n
                }
            }
            function Ep(n) {
                var t = 1,
                    e = n(kp(t), Sp(t))
                return (
                    (e.constant = function(e) {
                        return arguments.length ? n(kp((t = +e)), Sp(t)) : t
                    }),
                    vp(e)
                )
            }
            function Cp() {
                var n = Ep(hp())
                return (
                    (n.copy = function() {
                        return lp(n, Cp()).constant(n.constant())
                    }),
                    $d.apply(n, arguments)
                )
            }
            function Op(n) {
                return function(t) {
                    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
                }
            }
            function zp(n) {
                return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n)
            }
            function Pp(n) {
                return n < 0 ? -n * n : n * n
            }
            function Rp(n) {
                var t = n(op, op),
                    e = 1
                function r() {
                    return 1 === e ? n(op, op) : 0.5 === e ? n(zp, Pp) : n(Op(e), Op(1 / e))
                }
                return (
                    (t.exponent = function(n) {
                        return arguments.length ? ((e = +n), r()) : e
                    }),
                    vp(t)
                )
            }
            function jp() {
                var n = Rp(hp())
                return (
                    (n.copy = function() {
                        return lp(n, jp()).exponent(n.exponent())
                    }),
                    $d.apply(n, arguments),
                    n
                )
            }
            function Dp() {
                return jp.apply(null, arguments).exponent(0.5)
            }
            function qp() {
                var n,
                    t = [],
                    e = [],
                    r = []
                function u() {
                    var n = 0,
                        u = Math.max(1, e.length)
                    for (r = new Array(u - 1); ++n < u; ) r[n - 1] = Object(i.r)(t, n / u)
                    return o
                }
                function o(t) {
                    return isNaN((t = +t)) ? n : e[Object(i.b)(r, t)]
                }
                return (
                    (o.invertExtent = function(n) {
                        var i = e.indexOf(n)
                        return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : t[0], i < r.length ? r[i] : t[t.length - 1]]
                    }),
                    (o.domain = function(n) {
                        if (!arguments.length) return t.slice()
                        t = []
                        for (var e, r = 0, o = n.length; r < o; ++r) null == (e = n[r]) || isNaN((e = +e)) || t.push(e)
                        return t.sort(i.a), u()
                    }),
                    (o.range = function(n) {
                        return arguments.length ? ((e = Jd.call(n)), u()) : e.slice()
                    }),
                    (o.unknown = function(t) {
                        return arguments.length ? ((n = t), o) : n
                    }),
                    (o.quantiles = function() {
                        return r.slice()
                    }),
                    (o.copy = function() {
                        return qp()
                            .domain(t)
                            .range(e)
                            .unknown(n)
                    }),
                    $d.apply(o, arguments)
                )
            }
            function Lp() {
                var n,
                    t = 0,
                    e = 1,
                    r = 1,
                    u = [0.5],
                    o = [0, 1]
                function a(t) {
                    return t <= t ? o[Object(i.b)(u, t, 0, r)] : n
                }
                function c() {
                    var n = -1
                    for (u = new Array(r); ++n < r; ) u[n] = ((n + 1) * e - (n - r) * t) / (r + 1)
                    return a
                }
                return (
                    (a.domain = function(n) {
                        return arguments.length ? ((t = +n[0]), (e = +n[1]), c()) : [t, e]
                    }),
                    (a.range = function(n) {
                        return arguments.length ? ((r = (o = Jd.call(n)).length - 1), c()) : o.slice()
                    }),
                    (a.invertExtent = function(n) {
                        var i = o.indexOf(n)
                        return i < 0 ? [NaN, NaN] : i < 1 ? [t, u[0]] : i >= r ? [u[r - 1], e] : [u[i - 1], u[i]]
                    }),
                    (a.unknown = function(t) {
                        return arguments.length ? ((n = t), a) : a
                    }),
                    (a.thresholds = function() {
                        return u.slice()
                    }),
                    (a.copy = function() {
                        return Lp()
                            .domain([t, e])
                            .range(o)
                            .unknown(n)
                    }),
                    $d.apply(vp(a), arguments)
                )
            }
            function Up() {
                var n,
                    t = [0.5],
                    e = [0, 1],
                    r = 1
                function u(u) {
                    return u <= u ? e[Object(i.b)(t, u, 0, r)] : n
                }
                return (
                    (u.domain = function(n) {
                        return arguments.length
                            ? ((t = Jd.call(n)), (r = Math.min(t.length, e.length - 1)), u)
                            : t.slice()
                    }),
                    (u.range = function(n) {
                        return arguments.length
                            ? ((e = Jd.call(n)), (r = Math.min(t.length, e.length - 1)), u)
                            : e.slice()
                    }),
                    (u.invertExtent = function(n) {
                        var r = e.indexOf(n)
                        return [t[r - 1], t[r]]
                    }),
                    (u.unknown = function(t) {
                        return arguments.length ? ((n = t), u) : n
                    }),
                    (u.copy = function() {
                        return Up()
                            .domain(t)
                            .range(e)
                            .unknown(n)
                    }),
                    $d.apply(u, arguments)
                )
            }
            var Bp = new Date(),
                Yp = new Date()
            function Fp(n, t, e, r) {
                function i(t) {
                    return n((t = 0 === arguments.length ? new Date() : new Date(+t))), t
                }
                return (
                    (i.floor = function(t) {
                        return n((t = new Date(+t))), t
                    }),
                    (i.ceil = function(e) {
                        return n((e = new Date(e - 1))), t(e, 1), n(e), e
                    }),
                    (i.round = function(n) {
                        var t = i(n),
                            e = i.ceil(n)
                        return n - t < e - n ? t : e
                    }),
                    (i.offset = function(n, e) {
                        return t((n = new Date(+n)), null == e ? 1 : Math.floor(e)), n
                    }),
                    (i.range = function(e, r, u) {
                        var o,
                            a = []
                        if (((e = i.ceil(e)), (u = null == u ? 1 : Math.floor(u)), !(e < r && u > 0))) return a
                        do {
                            a.push((o = new Date(+e))), t(e, u), n(e)
                        } while (o < e && e < r)
                        return a
                    }),
                    (i.filter = function(e) {
                        return Fp(
                            function(t) {
                                if (t >= t) for (; n(t), !e(t); ) t.setTime(t - 1)
                            },
                            function(n, r) {
                                if (n >= n)
                                    if (r < 0) for (; ++r <= 0; ) for (; t(n, -1), !e(n); );
                                    else for (; --r >= 0; ) for (; t(n, 1), !e(n); );
                            }
                        )
                    }),
                    e &&
                        ((i.count = function(t, r) {
                            return Bp.setTime(+t), Yp.setTime(+r), n(Bp), n(Yp), Math.floor(e(Bp, Yp))
                        }),
                        (i.every = function(n) {
                            return (
                                (n = Math.floor(n)),
                                isFinite(n) && n > 0
                                    ? n > 1
                                        ? i.filter(
                                              r
                                                  ? function(t) {
                                                        return r(t) % n == 0
                                                    }
                                                  : function(t) {
                                                        return i.count(0, t) % n == 0
                                                    }
                                          )
                                        : i
                                    : null
                            )
                        })),
                    i
                )
            }
            var Ip = Fp(
                function(n) {
                    n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                },
                function(n, t) {
                    n.setFullYear(n.getFullYear() + t)
                },
                function(n, t) {
                    return t.getFullYear() - n.getFullYear()
                },
                function(n) {
                    return n.getFullYear()
                }
            )
            Ip.every = function(n) {
                return isFinite((n = Math.floor(n))) && n > 0
                    ? Fp(
                          function(t) {
                              t.setFullYear(Math.floor(t.getFullYear() / n) * n),
                                  t.setMonth(0, 1),
                                  t.setHours(0, 0, 0, 0)
                          },
                          function(t, e) {
                              t.setFullYear(t.getFullYear() + e * n)
                          }
                      )
                    : null
            }
            var Hp = Ip,
                Xp = Ip.range,
                Vp = Fp(
                    function(n) {
                        n.setDate(1), n.setHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setMonth(n.getMonth() + t)
                    },
                    function(n, t) {
                        return t.getMonth() - n.getMonth() + 12 * (t.getFullYear() - n.getFullYear())
                    },
                    function(n) {
                        return n.getMonth()
                    }
                ),
                Gp = Vp,
                $p = Vp.range
            function Wp(n) {
                return Fp(
                    function(t) {
                        t.setDate(t.getDate() - ((t.getDay() + 7 - n) % 7)), t.setHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setDate(n.getDate() + 7 * t)
                    },
                    function(n, t) {
                        return (t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 6048e5
                    }
                )
            }
            var Zp = Wp(0),
                Qp = Wp(1),
                Jp = Wp(2),
                Kp = Wp(3),
                nv = Wp(4),
                tv = Wp(5),
                ev = Wp(6),
                rv = Zp.range,
                iv = Qp.range,
                uv = Jp.range,
                ov = Kp.range,
                av = nv.range,
                cv = tv.range,
                fv = ev.range,
                sv = Fp(
                    function(n) {
                        n.setHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setDate(n.getDate() + t)
                    },
                    function(n, t) {
                        return (t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5
                    },
                    function(n) {
                        return n.getDate() - 1
                    }
                ),
                lv = sv,
                hv = sv.range,
                dv = Fp(
                    function(n) {
                        n.setTime(n - n.getMilliseconds() - 1e3 * n.getSeconds() - 6e4 * n.getMinutes())
                    },
                    function(n, t) {
                        n.setTime(+n + 36e5 * t)
                    },
                    function(n, t) {
                        return (t - n) / 36e5
                    },
                    function(n) {
                        return n.getHours()
                    }
                ),
                pv = dv,
                vv = dv.range,
                gv = Fp(
                    function(n) {
                        n.setTime(n - n.getMilliseconds() - 1e3 * n.getSeconds())
                    },
                    function(n, t) {
                        n.setTime(+n + 6e4 * t)
                    },
                    function(n, t) {
                        return (t - n) / 6e4
                    },
                    function(n) {
                        return n.getMinutes()
                    }
                ),
                yv = gv,
                bv = gv.range,
                _v = Fp(
                    function(n) {
                        n.setTime(n - n.getMilliseconds())
                    },
                    function(n, t) {
                        n.setTime(+n + 1e3 * t)
                    },
                    function(n, t) {
                        return (t - n) / 1e3
                    },
                    function(n) {
                        return n.getUTCSeconds()
                    }
                ),
                mv = _v,
                xv = _v.range,
                wv = Fp(
                    function() {},
                    function(n, t) {
                        n.setTime(+n + t)
                    },
                    function(n, t) {
                        return t - n
                    }
                )
            wv.every = function(n) {
                return (
                    (n = Math.floor(n)),
                    isFinite(n) && n > 0
                        ? n > 1
                            ? Fp(
                                  function(t) {
                                      t.setTime(Math.floor(t / n) * n)
                                  },
                                  function(t, e) {
                                      t.setTime(+t + e * n)
                                  },
                                  function(t, e) {
                                      return (e - t) / n
                                  }
                              )
                            : wv
                        : null
                )
            }
            var Mv = wv,
                Nv = wv.range
            function Av(n) {
                return Fp(
                    function(t) {
                        t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - n) % 7)), t.setUTCHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setUTCDate(n.getUTCDate() + 7 * t)
                    },
                    function(n, t) {
                        return (t - n) / 6048e5
                    }
                )
            }
            var Tv = Av(0),
                kv = Av(1),
                Sv = Av(2),
                Ev = Av(3),
                Cv = Av(4),
                Ov = Av(5),
                zv = Av(6),
                Pv = Tv.range,
                Rv = kv.range,
                jv = Sv.range,
                Dv = Ev.range,
                qv = Cv.range,
                Lv = Ov.range,
                Uv = zv.range,
                Bv = Fp(
                    function(n) {
                        n.setUTCHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setUTCDate(n.getUTCDate() + t)
                    },
                    function(n, t) {
                        return (t - n) / 864e5
                    },
                    function(n) {
                        return n.getUTCDate() - 1
                    }
                ),
                Yv = Bv,
                Fv = Bv.range,
                Iv = Fp(
                    function(n) {
                        n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setUTCFullYear(n.getUTCFullYear() + t)
                    },
                    function(n, t) {
                        return t.getUTCFullYear() - n.getUTCFullYear()
                    },
                    function(n) {
                        return n.getUTCFullYear()
                    }
                )
            Iv.every = function(n) {
                return isFinite((n = Math.floor(n))) && n > 0
                    ? Fp(
                          function(t) {
                              t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n),
                                  t.setUTCMonth(0, 1),
                                  t.setUTCHours(0, 0, 0, 0)
                          },
                          function(t, e) {
                              t.setUTCFullYear(t.getUTCFullYear() + e * n)
                          }
                      )
                    : null
            }
            var Hv = Iv,
                Xv = Iv.range
            function Vv(n) {
                if (0 <= n.y && n.y < 100) {
                    var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L)
                    return t.setFullYear(n.y), t
                }
                return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L)
            }
            function Gv(n) {
                if (0 <= n.y && n.y < 100) {
                    var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L))
                    return t.setUTCFullYear(n.y), t
                }
                return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L))
            }
            function $v(n, t, e) {
                return { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 }
            }
            function Wv(n) {
                var t = n.dateTime,
                    e = n.date,
                    r = n.time,
                    i = n.periods,
                    u = n.days,
                    o = n.shortDays,
                    a = n.months,
                    c = n.shortMonths,
                    f = ag(i),
                    s = cg(i),
                    l = ag(u),
                    h = cg(u),
                    d = ag(o),
                    p = cg(o),
                    v = ag(a),
                    g = cg(a),
                    y = ag(c),
                    b = cg(c),
                    _ = {
                        a: function(n) {
                            return o[n.getDay()]
                        },
                        A: function(n) {
                            return u[n.getDay()]
                        },
                        b: function(n) {
                            return c[n.getMonth()]
                        },
                        B: function(n) {
                            return a[n.getMonth()]
                        },
                        c: null,
                        d: Eg,
                        e: Eg,
                        f: Rg,
                        H: Cg,
                        I: Og,
                        j: zg,
                        L: Pg,
                        m: jg,
                        M: Dg,
                        p: function(n) {
                            return i[+(n.getHours() >= 12)]
                        },
                        q: function(n) {
                            return 1 + ~~(n.getMonth() / 3)
                        },
                        Q: sy,
                        s: ly,
                        S: qg,
                        u: Lg,
                        U: Ug,
                        V: Bg,
                        w: Yg,
                        W: Fg,
                        x: null,
                        X: null,
                        y: Ig,
                        Y: Hg,
                        Z: Xg,
                        '%': fy,
                    },
                    m = {
                        a: function(n) {
                            return o[n.getUTCDay()]
                        },
                        A: function(n) {
                            return u[n.getUTCDay()]
                        },
                        b: function(n) {
                            return c[n.getUTCMonth()]
                        },
                        B: function(n) {
                            return a[n.getUTCMonth()]
                        },
                        c: null,
                        d: Vg,
                        e: Vg,
                        f: Qg,
                        H: Gg,
                        I: $g,
                        j: Wg,
                        L: Zg,
                        m: Jg,
                        M: Kg,
                        p: function(n) {
                            return i[+(n.getUTCHours() >= 12)]
                        },
                        q: function(n) {
                            return 1 + ~~(n.getUTCMonth() / 3)
                        },
                        Q: sy,
                        s: ly,
                        S: ny,
                        u: ty,
                        U: ey,
                        V: ry,
                        w: iy,
                        W: uy,
                        x: null,
                        X: null,
                        y: oy,
                        Y: ay,
                        Z: cy,
                        '%': fy,
                    },
                    x = {
                        a: function(n, t, e) {
                            var r = d.exec(t.slice(e))
                            return r ? ((n.w = p[r[0].toLowerCase()]), e + r[0].length) : -1
                        },
                        A: function(n, t, e) {
                            var r = l.exec(t.slice(e))
                            return r ? ((n.w = h[r[0].toLowerCase()]), e + r[0].length) : -1
                        },
                        b: function(n, t, e) {
                            var r = y.exec(t.slice(e))
                            return r ? ((n.m = b[r[0].toLowerCase()]), e + r[0].length) : -1
                        },
                        B: function(n, t, e) {
                            var r = v.exec(t.slice(e))
                            return r ? ((n.m = g[r[0].toLowerCase()]), e + r[0].length) : -1
                        },
                        c: function(n, e, r) {
                            return N(n, t, e, r)
                        },
                        d: _g,
                        e: _g,
                        f: Ag,
                        H: xg,
                        I: xg,
                        j: mg,
                        L: Ng,
                        m: bg,
                        M: wg,
                        p: function(n, t, e) {
                            var r = f.exec(t.slice(e))
                            return r ? ((n.p = s[r[0].toLowerCase()]), e + r[0].length) : -1
                        },
                        q: yg,
                        Q: kg,
                        s: Sg,
                        S: Mg,
                        u: sg,
                        U: lg,
                        V: hg,
                        w: fg,
                        W: dg,
                        x: function(n, t, r) {
                            return N(n, e, t, r)
                        },
                        X: function(n, t, e) {
                            return N(n, r, t, e)
                        },
                        y: vg,
                        Y: pg,
                        Z: gg,
                        '%': Tg,
                    }
                function w(n, t) {
                    return function(e) {
                        var r,
                            i,
                            u,
                            o = [],
                            a = -1,
                            c = 0,
                            f = n.length
                        for (e instanceof Date || (e = new Date(+e)); ++a < f; )
                            37 === n.charCodeAt(a) &&
                                (o.push(n.slice(c, a)),
                                null != (i = tg[(r = n.charAt(++a))])
                                    ? (r = n.charAt(++a))
                                    : (i = 'e' === r ? ' ' : '0'),
                                (u = t[r]) && (r = u(e, i)),
                                o.push(r),
                                (c = a + 1))
                        return o.push(n.slice(c, a)), o.join('')
                    }
                }
                function M(n, t) {
                    return function(e) {
                        var r,
                            i,
                            u = $v(1900, void 0, 1)
                        if (N(u, n, (e += ''), 0) != e.length) return null
                        if ('Q' in u) return new Date(u.Q)
                        if ('s' in u) return new Date(1e3 * u.s + ('L' in u ? u.L : 0))
                        if (
                            (t && !('Z' in u) && (u.Z = 0),
                            'p' in u && (u.H = (u.H % 12) + 12 * u.p),
                            void 0 === u.m && (u.m = 'q' in u ? u.q : 0),
                            'V' in u)
                        ) {
                            if (u.V < 1 || u.V > 53) return null
                            'w' in u || (u.w = 1),
                                'Z' in u
                                    ? ((i = (r = Gv($v(u.y, 0, 1))).getUTCDay()),
                                      (r = i > 4 || 0 === i ? kv.ceil(r) : kv(r)),
                                      (r = Yv.offset(r, 7 * (u.V - 1))),
                                      (u.y = r.getUTCFullYear()),
                                      (u.m = r.getUTCMonth()),
                                      (u.d = r.getUTCDate() + ((u.w + 6) % 7)))
                                    : ((i = (r = Vv($v(u.y, 0, 1))).getDay()),
                                      (r = i > 4 || 0 === i ? Qp.ceil(r) : Qp(r)),
                                      (r = lv.offset(r, 7 * (u.V - 1))),
                                      (u.y = r.getFullYear()),
                                      (u.m = r.getMonth()),
                                      (u.d = r.getDate() + ((u.w + 6) % 7)))
                        } else
                            ('W' in u || 'U' in u) &&
                                ('w' in u || (u.w = 'u' in u ? u.u % 7 : 'W' in u ? 1 : 0),
                                (i = 'Z' in u ? Gv($v(u.y, 0, 1)).getUTCDay() : Vv($v(u.y, 0, 1)).getDay()),
                                (u.m = 0),
                                (u.d =
                                    'W' in u
                                        ? ((u.w + 6) % 7) + 7 * u.W - ((i + 5) % 7)
                                        : u.w + 7 * u.U - ((i + 6) % 7)))
                        return 'Z' in u ? ((u.H += (u.Z / 100) | 0), (u.M += u.Z % 100), Gv(u)) : Vv(u)
                    }
                }
                function N(n, t, e, r) {
                    for (var i, u, o = 0, a = t.length, c = e.length; o < a; ) {
                        if (r >= c) return -1
                        if (37 === (i = t.charCodeAt(o++))) {
                            if (((i = t.charAt(o++)), !(u = x[i in tg ? t.charAt(o++) : i]) || (r = u(n, e, r)) < 0))
                                return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return (
                    (_.x = w(e, _)),
                    (_.X = w(r, _)),
                    (_.c = w(t, _)),
                    (m.x = w(e, m)),
                    (m.X = w(r, m)),
                    (m.c = w(t, m)),
                    {
                        format: function(n) {
                            var t = w((n += ''), _)
                            return (
                                (t.toString = function() {
                                    return n
                                }),
                                t
                            )
                        },
                        parse: function(n) {
                            var t = M((n += ''), !1)
                            return (
                                (t.toString = function() {
                                    return n
                                }),
                                t
                            )
                        },
                        utcFormat: function(n) {
                            var t = w((n += ''), m)
                            return (
                                (t.toString = function() {
                                    return n
                                }),
                                t
                            )
                        },
                        utcParse: function(n) {
                            var t = M((n += ''), !0)
                            return (
                                (t.toString = function() {
                                    return n
                                }),
                                t
                            )
                        },
                    }
                )
            }
            var Zv,
                Qv,
                Jv,
                Kv,
                ng,
                tg = { '-': '', _: ' ', 0: '0' },
                eg = /^\s*\d+/,
                rg = /^%/,
                ig = /[\\^$*+?|[\]().{}]/g
            function ug(n, t, e) {
                var r = n < 0 ? '-' : '',
                    i = (r ? -n : n) + '',
                    u = i.length
                return r + (u < e ? new Array(e - u + 1).join(t) + i : i)
            }
            function og(n) {
                return n.replace(ig, '\\$&')
            }
            function ag(n) {
                return new RegExp('^(?:' + n.map(og).join('|') + ')', 'i')
            }
            function cg(n) {
                for (var t = {}, e = -1, r = n.length; ++e < r; ) t[n[e].toLowerCase()] = e
                return t
            }
            function fg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 1))
                return r ? ((n.w = +r[0]), e + r[0].length) : -1
            }
            function sg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 1))
                return r ? ((n.u = +r[0]), e + r[0].length) : -1
            }
            function lg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.U = +r[0]), e + r[0].length) : -1
            }
            function hg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.V = +r[0]), e + r[0].length) : -1
            }
            function dg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.W = +r[0]), e + r[0].length) : -1
            }
            function pg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 4))
                return r ? ((n.y = +r[0]), e + r[0].length) : -1
            }
            function vg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1
            }
            function gg(n, t, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6))
                return r ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length) : -1
            }
            function yg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 1))
                return r ? ((n.q = 3 * r[0] - 3), e + r[0].length) : -1
            }
            function bg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.m = r[0] - 1), e + r[0].length) : -1
            }
            function _g(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.d = +r[0]), e + r[0].length) : -1
            }
            function mg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 3))
                return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1
            }
            function xg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.H = +r[0]), e + r[0].length) : -1
            }
            function wg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.M = +r[0]), e + r[0].length) : -1
            }
            function Mg(n, t, e) {
                var r = eg.exec(t.slice(e, e + 2))
                return r ? ((n.S = +r[0]), e + r[0].length) : -1
            }
            function Ng(n, t, e) {
                var r = eg.exec(t.slice(e, e + 3))
                return r ? ((n.L = +r[0]), e + r[0].length) : -1
            }
            function Ag(n, t, e) {
                var r = eg.exec(t.slice(e, e + 6))
                return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1
            }
            function Tg(n, t, e) {
                var r = rg.exec(t.slice(e, e + 1))
                return r ? e + r[0].length : -1
            }
            function kg(n, t, e) {
                var r = eg.exec(t.slice(e))
                return r ? ((n.Q = +r[0]), e + r[0].length) : -1
            }
            function Sg(n, t, e) {
                var r = eg.exec(t.slice(e))
                return r ? ((n.s = +r[0]), e + r[0].length) : -1
            }
            function Eg(n, t) {
                return ug(n.getDate(), t, 2)
            }
            function Cg(n, t) {
                return ug(n.getHours(), t, 2)
            }
            function Og(n, t) {
                return ug(n.getHours() % 12 || 12, t, 2)
            }
            function zg(n, t) {
                return ug(1 + lv.count(Hp(n), n), t, 3)
            }
            function Pg(n, t) {
                return ug(n.getMilliseconds(), t, 3)
            }
            function Rg(n, t) {
                return Pg(n, t) + '000'
            }
            function jg(n, t) {
                return ug(n.getMonth() + 1, t, 2)
            }
            function Dg(n, t) {
                return ug(n.getMinutes(), t, 2)
            }
            function qg(n, t) {
                return ug(n.getSeconds(), t, 2)
            }
            function Lg(n) {
                var t = n.getDay()
                return 0 === t ? 7 : t
            }
            function Ug(n, t) {
                return ug(Zp.count(Hp(n) - 1, n), t, 2)
            }
            function Bg(n, t) {
                var e = n.getDay()
                return (
                    (n = e >= 4 || 0 === e ? nv(n) : nv.ceil(n)), ug(nv.count(Hp(n), n) + (4 === Hp(n).getDay()), t, 2)
                )
            }
            function Yg(n) {
                return n.getDay()
            }
            function Fg(n, t) {
                return ug(Qp.count(Hp(n) - 1, n), t, 2)
            }
            function Ig(n, t) {
                return ug(n.getFullYear() % 100, t, 2)
            }
            function Hg(n, t) {
                return ug(n.getFullYear() % 1e4, t, 4)
            }
            function Xg(n) {
                var t = n.getTimezoneOffset()
                return (t > 0 ? '-' : ((t *= -1), '+')) + ug((t / 60) | 0, '0', 2) + ug(t % 60, '0', 2)
            }
            function Vg(n, t) {
                return ug(n.getUTCDate(), t, 2)
            }
            function Gg(n, t) {
                return ug(n.getUTCHours(), t, 2)
            }
            function $g(n, t) {
                return ug(n.getUTCHours() % 12 || 12, t, 2)
            }
            function Wg(n, t) {
                return ug(1 + Yv.count(Hv(n), n), t, 3)
            }
            function Zg(n, t) {
                return ug(n.getUTCMilliseconds(), t, 3)
            }
            function Qg(n, t) {
                return Zg(n, t) + '000'
            }
            function Jg(n, t) {
                return ug(n.getUTCMonth() + 1, t, 2)
            }
            function Kg(n, t) {
                return ug(n.getUTCMinutes(), t, 2)
            }
            function ny(n, t) {
                return ug(n.getUTCSeconds(), t, 2)
            }
            function ty(n) {
                var t = n.getUTCDay()
                return 0 === t ? 7 : t
            }
            function ey(n, t) {
                return ug(Tv.count(Hv(n) - 1, n), t, 2)
            }
            function ry(n, t) {
                var e = n.getUTCDay()
                return (
                    (n = e >= 4 || 0 === e ? Cv(n) : Cv.ceil(n)),
                    ug(Cv.count(Hv(n), n) + (4 === Hv(n).getUTCDay()), t, 2)
                )
            }
            function iy(n) {
                return n.getUTCDay()
            }
            function uy(n, t) {
                return ug(kv.count(Hv(n) - 1, n), t, 2)
            }
            function oy(n, t) {
                return ug(n.getUTCFullYear() % 100, t, 2)
            }
            function ay(n, t) {
                return ug(n.getUTCFullYear() % 1e4, t, 4)
            }
            function cy() {
                return '+0000'
            }
            function fy() {
                return '%'
            }
            function sy(n) {
                return +n
            }
            function ly(n) {
                return Math.floor(+n / 1e3)
            }
            function hy(n) {
                return (Zv = Wv(n)), (Qv = Zv.format), (Jv = Zv.parse), (Kv = Zv.utcFormat), (ng = Zv.utcParse), Zv
            }
            hy({
                dateTime: '%x, %X',
                date: '%-m/%-d/%Y',
                time: '%-I:%M:%S %p',
                periods: ['AM', 'PM'],
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            })
            function dy(n) {
                return new Date(n)
            }
            function py(n) {
                return n instanceof Date ? +n : +new Date(+n)
            }
            function vy(n, t, e, r, u, o, a, c, f) {
                var s = dp(op, op),
                    l = s.invert,
                    h = s.domain,
                    d = f('.%L'),
                    p = f(':%S'),
                    v = f('%I:%M'),
                    g = f('%I %p'),
                    y = f('%a %d'),
                    b = f('%b %d'),
                    _ = f('%B'),
                    m = f('%Y'),
                    x = [
                        [a, 1, 1e3],
                        [a, 5, 5e3],
                        [a, 15, 15e3],
                        [a, 30, 3e4],
                        [o, 1, 6e4],
                        [o, 5, 3e5],
                        [o, 15, 9e5],
                        [o, 30, 18e5],
                        [u, 1, 36e5],
                        [u, 3, 108e5],
                        [u, 6, 216e5],
                        [u, 12, 432e5],
                        [r, 1, 864e5],
                        [r, 2, 1728e5],
                        [e, 1, 6048e5],
                        [t, 1, 2592e6],
                        [t, 3, 7776e6],
                        [n, 1, 31536e6],
                    ]
                function w(i) {
                    return (a(i) < i
                        ? d
                        : o(i) < i
                        ? p
                        : u(i) < i
                        ? v
                        : r(i) < i
                        ? g
                        : t(i) < i
                        ? e(i) < i
                            ? y
                            : b
                        : n(i) < i
                        ? _
                        : m)(i)
                }
                function M(t, e, r, u) {
                    if ((null == t && (t = 10), 'number' == typeof t)) {
                        var o = Math.abs(r - e) / t,
                            a = Object(i.e)(function(n) {
                                return n[2]
                            }).right(x, o)
                        a === x.length
                            ? ((u = Object(i.A)(e / 31536e6, r / 31536e6, t)), (t = n))
                            : a
                            ? ((u = (a = x[o / x[a - 1][2] < x[a][2] / o ? a - 1 : a])[1]), (t = a[0]))
                            : ((u = Math.max(Object(i.A)(e, r, t), 1)), (t = c))
                    }
                    return null == u ? t : t.every(u)
                }
                return (
                    (s.invert = function(n) {
                        return new Date(l(n))
                    }),
                    (s.domain = function(n) {
                        return arguments.length ? h(Qd.call(n, py)) : h().map(dy)
                    }),
                    (s.ticks = function(n, t) {
                        var e,
                            r = h(),
                            i = r[0],
                            u = r[r.length - 1],
                            o = u < i
                        return (
                            o && ((e = i), (i = u), (u = e)),
                            (e = (e = M(n, i, u, t)) ? e.range(i, u + 1) : []),
                            o ? e.reverse() : e
                        )
                    }),
                    (s.tickFormat = function(n, t) {
                        return null == t ? w : f(t)
                    }),
                    (s.nice = function(n, t) {
                        var e = h()
                        return (n = M(n, e[0], e[e.length - 1], t)) ? h(bp(e, n)) : s
                    }),
                    (s.copy = function() {
                        return lp(s, vy(n, t, e, r, u, o, a, c, f))
                    }),
                    s
                )
            }
            var gy = function() {
                    return $d.apply(
                        vy(Hp, Gp, Zp, lv, pv, yv, mv, Mv, Qv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
                        arguments
                    )
                },
                yy = Fp(
                    function(n) {
                        n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0)
                    },
                    function(n, t) {
                        n.setUTCMonth(n.getUTCMonth() + t)
                    },
                    function(n, t) {
                        return t.getUTCMonth() - n.getUTCMonth() + 12 * (t.getUTCFullYear() - n.getUTCFullYear())
                    },
                    function(n) {
                        return n.getUTCMonth()
                    }
                ),
                by = yy,
                _y = yy.range,
                my = Fp(
                    function(n) {
                        n.setUTCMinutes(0, 0, 0)
                    },
                    function(n, t) {
                        n.setTime(+n + 36e5 * t)
                    },
                    function(n, t) {
                        return (t - n) / 36e5
                    },
                    function(n) {
                        return n.getUTCHours()
                    }
                ),
                xy = my,
                wy = my.range,
                My = Fp(
                    function(n) {
                        n.setUTCSeconds(0, 0)
                    },
                    function(n, t) {
                        n.setTime(+n + 6e4 * t)
                    },
                    function(n, t) {
                        return (t - n) / 6e4
                    },
                    function(n) {
                        return n.getUTCMinutes()
                    }
                ),
                Ny = My,
                Ay = My.range,
                Ty = function() {
                    return $d.apply(
                        vy(Hv, by, Tv, Yv, xy, Ny, mv, Mv, Kv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
                        arguments
                    )
                }
            function ky() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    u = 0,
                    o = 1,
                    a = op,
                    c = !1
                function f(t) {
                    return isNaN((t = +t))
                        ? i
                        : a(0 === e ? 0.5 : ((t = (r(t) - n) * e), c ? Math.max(0, Math.min(1, t)) : t))
                }
                return (
                    (f.domain = function(i) {
                        return arguments.length
                            ? ((n = r((u = +i[0]))), (t = r((o = +i[1]))), (e = n === t ? 0 : 1 / (t - n)), f)
                            : [u, o]
                    }),
                    (f.clamp = function(n) {
                        return arguments.length ? ((c = !!n), f) : c
                    }),
                    (f.interpolator = function(n) {
                        return arguments.length ? ((a = n), f) : a
                    }),
                    (f.unknown = function(n) {
                        return arguments.length ? ((i = n), f) : i
                    }),
                    function(i) {
                        return (r = i), (n = i(u)), (t = i(o)), (e = n === t ? 0 : 1 / (t - n)), f
                    }
                )
            }
            function Sy(n, t) {
                return t
                    .domain(n.domain())
                    .interpolator(n.interpolator())
                    .clamp(n.clamp())
                    .unknown(n.unknown())
            }
            function Ey() {
                var n = vp(ky()(op))
                return (
                    (n.copy = function() {
                        return Sy(n, Ey())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function Cy() {
                var n = Ap(ky()).domain([1, 10])
                return (
                    (n.copy = function() {
                        return Sy(n, Cy()).base(n.base())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function Oy() {
                var n = Ep(ky())
                return (
                    (n.copy = function() {
                        return Sy(n, Oy()).constant(n.constant())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function zy() {
                var n = Rp(ky())
                return (
                    (n.copy = function() {
                        return Sy(n, zy()).exponent(n.exponent())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function Py() {
                return zy.apply(null, arguments).exponent(0.5)
            }
            function Ry() {
                var n = [],
                    t = op
                function e(e) {
                    if (!isNaN((e = +e))) return t((Object(i.b)(n, e) - 1) / (n.length - 1))
                }
                return (
                    (e.domain = function(t) {
                        if (!arguments.length) return n.slice()
                        n = []
                        for (var r, u = 0, o = t.length; u < o; ++u) null == (r = t[u]) || isNaN((r = +r)) || n.push(r)
                        return n.sort(i.a), e
                    }),
                    (e.interpolator = function(n) {
                        return arguments.length ? ((t = n), e) : t
                    }),
                    (e.copy = function() {
                        return Ry(t).domain(n)
                    }),
                    Wd.apply(e, arguments)
                )
            }
            function jy() {
                var n,
                    t,
                    e,
                    r,
                    i,
                    u,
                    o,
                    a = 0,
                    c = 0.5,
                    f = 1,
                    s = op,
                    l = !1
                function h(n) {
                    return isNaN((n = +n))
                        ? o
                        : ((n = 0.5 + ((n = +u(n)) - t) * (n < t ? r : i)), s(l ? Math.max(0, Math.min(1, n)) : n))
                }
                return (
                    (h.domain = function(o) {
                        return arguments.length
                            ? ((n = u((a = +o[0]))),
                              (t = u((c = +o[1]))),
                              (e = u((f = +o[2]))),
                              (r = n === t ? 0 : 0.5 / (t - n)),
                              (i = t === e ? 0 : 0.5 / (e - t)),
                              h)
                            : [a, c, f]
                    }),
                    (h.clamp = function(n) {
                        return arguments.length ? ((l = !!n), h) : l
                    }),
                    (h.interpolator = function(n) {
                        return arguments.length ? ((s = n), h) : s
                    }),
                    (h.unknown = function(n) {
                        return arguments.length ? ((o = n), h) : o
                    }),
                    function(o) {
                        return (
                            (u = o),
                            (n = o(a)),
                            (t = o(c)),
                            (e = o(f)),
                            (r = n === t ? 0 : 0.5 / (t - n)),
                            (i = t === e ? 0 : 0.5 / (e - t)),
                            h
                        )
                    }
                )
            }
            function Dy() {
                var n = vp(jy()(op))
                return (
                    (n.copy = function() {
                        return Sy(n, Dy())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function qy() {
                var n = Ap(jy()).domain([0.1, 1, 10])
                return (
                    (n.copy = function() {
                        return Sy(n, qy()).base(n.base())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function Ly() {
                var n = Ep(jy())
                return (
                    (n.copy = function() {
                        return Sy(n, Ly()).constant(n.constant())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function Uy() {
                var n = Rp(jy())
                return (
                    (n.copy = function() {
                        return Sy(n, Uy()).exponent(n.exponent())
                    }),
                    Wd.apply(n, arguments)
                )
            }
            function By() {
                return Uy.apply(null, arguments).exponent(0.5)
            }
            var Yy = function(n) {
                    for (var t = (n.length / 6) | 0, e = new Array(t), r = 0; r < t; )
                        e[r] = '#' + n.slice(6 * r, 6 * ++r)
                    return e
                },
                Fy = Yy('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
                Iy = Yy('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
                Hy = Yy('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
                Xy = Yy('a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'),
                Vy = Yy('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
                Gy = Yy('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
                $y = Yy('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
                Wy = Yy('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
                Zy = Yy('8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'),
                Qy = Yy('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab'),
                Jy = function(n) {
                    return kt(n[n.length - 1])
                },
                Ky = new Array(3)
                    .concat(
                        'd8b365f5f5f55ab4ac',
                        'a6611adfc27d80cdc1018571',
                        'a6611adfc27df5f5f580cdc1018571',
                        '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
                        '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
                        '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
                        '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
                        '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
                        '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
                    )
                    .map(Yy),
                nb = Jy(Ky),
                tb = new Array(3)
                    .concat(
                        'af8dc3f7f7f77fbf7b',
                        '7b3294c2a5cfa6dba0008837',
                        '7b3294c2a5cff7f7f7a6dba0008837',
                        '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
                        '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
                        '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
                        '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
                        '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
                        '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
                    )
                    .map(Yy),
                eb = Jy(tb),
                rb = new Array(3)
                    .concat(
                        'e9a3c9f7f7f7a1d76a',
                        'd01c8bf1b6dab8e1864dac26',
                        'd01c8bf1b6daf7f7f7b8e1864dac26',
                        'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
                        'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
                        'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
                        'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
                        '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
                        '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
                    )
                    .map(Yy),
                ib = Jy(rb),
                ub = new Array(3)
                    .concat(
                        '998ec3f7f7f7f1a340',
                        '5e3c99b2abd2fdb863e66101',
                        '5e3c99b2abd2f7f7f7fdb863e66101',
                        '542788998ec3d8daebfee0b6f1a340b35806',
                        '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
                        '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
                        '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
                        '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
                        '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
                    )
                    .map(Yy),
                ob = Jy(ub),
                ab = new Array(3)
                    .concat(
                        'ef8a62f7f7f767a9cf',
                        'ca0020f4a58292c5de0571b0',
                        'ca0020f4a582f7f7f792c5de0571b0',
                        'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
                        'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
                        'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
                        'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
                        '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
                        '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
                    )
                    .map(Yy),
                cb = Jy(ab),
                fb = new Array(3)
                    .concat(
                        'ef8a62ffffff999999',
                        'ca0020f4a582bababa404040',
                        'ca0020f4a582ffffffbababa404040',
                        'b2182bef8a62fddbc7e0e0e09999994d4d4d',
                        'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
                        'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
                        'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
                        '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
                        '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
                    )
                    .map(Yy),
                sb = Jy(fb),
                lb = new Array(3)
                    .concat(
                        'fc8d59ffffbf91bfdb',
                        'd7191cfdae61abd9e92c7bb6',
                        'd7191cfdae61ffffbfabd9e92c7bb6',
                        'd73027fc8d59fee090e0f3f891bfdb4575b4',
                        'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
                        'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
                        'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
                        'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
                        'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
                    )
                    .map(Yy),
                hb = Jy(lb),
                db = new Array(3)
                    .concat(
                        'fc8d59ffffbf91cf60',
                        'd7191cfdae61a6d96a1a9641',
                        'd7191cfdae61ffffbfa6d96a1a9641',
                        'd73027fc8d59fee08bd9ef8b91cf601a9850',
                        'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
                        'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
                        'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
                        'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
                        'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
                    )
                    .map(Yy),
                pb = Jy(db),
                vb = new Array(3)
                    .concat(
                        'fc8d59ffffbf99d594',
                        'd7191cfdae61abdda42b83ba',
                        'd7191cfdae61ffffbfabdda42b83ba',
                        'd53e4ffc8d59fee08be6f59899d5943288bd',
                        'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
                        'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
                        'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
                        '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
                        '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
                    )
                    .map(Yy),
                gb = Jy(vb),
                yb = new Array(3)
                    .concat(
                        'e5f5f999d8c92ca25f',
                        'edf8fbb2e2e266c2a4238b45',
                        'edf8fbb2e2e266c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
                    )
                    .map(Yy),
                bb = Jy(yb),
                _b = new Array(3)
                    .concat(
                        'e0ecf49ebcda8856a7',
                        'edf8fbb3cde38c96c688419d',
                        'edf8fbb3cde38c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
                    )
                    .map(Yy),
                mb = Jy(_b),
                xb = new Array(3)
                    .concat(
                        'e0f3dba8ddb543a2ca',
                        'f0f9e8bae4bc7bccc42b8cbe',
                        'f0f9e8bae4bc7bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
                    )
                    .map(Yy),
                wb = Jy(xb),
                Mb = new Array(3)
                    .concat(
                        'fee8c8fdbb84e34a33',
                        'fef0d9fdcc8afc8d59d7301f',
                        'fef0d9fdcc8afc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
                    )
                    .map(Yy),
                Nb = Jy(Mb),
                Ab = new Array(3)
                    .concat(
                        'ece2f0a6bddb1c9099',
                        'f6eff7bdc9e167a9cf02818a',
                        'f6eff7bdc9e167a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
                    )
                    .map(Yy),
                Tb = Jy(Ab),
                kb = new Array(3)
                    .concat(
                        'ece7f2a6bddb2b8cbe',
                        'f1eef6bdc9e174a9cf0570b0',
                        'f1eef6bdc9e174a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
                    )
                    .map(Yy),
                Sb = Jy(kb),
                Eb = new Array(3)
                    .concat(
                        'e7e1efc994c7dd1c77',
                        'f1eef6d7b5d8df65b0ce1256',
                        'f1eef6d7b5d8df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
                    )
                    .map(Yy),
                Cb = Jy(Eb),
                Ob = new Array(3)
                    .concat(
                        'fde0ddfa9fb5c51b8a',
                        'feebe2fbb4b9f768a1ae017e',
                        'feebe2fbb4b9f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
                    )
                    .map(Yy),
                zb = Jy(Ob),
                Pb = new Array(3)
                    .concat(
                        'edf8b17fcdbb2c7fb8',
                        'ffffcca1dab441b6c4225ea8',
                        'ffffcca1dab441b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
                    )
                    .map(Yy),
                Rb = Jy(Pb),
                jb = new Array(3)
                    .concat(
                        'f7fcb9addd8e31a354',
                        'ffffccc2e69978c679238443',
                        'ffffccc2e69978c67931a354006837',
                        'ffffccd9f0a3addd8e78c67931a354006837',
                        'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
                    )
                    .map(Yy),
                Db = Jy(jb),
                qb = new Array(3)
                    .concat(
                        'fff7bcfec44fd95f0e',
                        'ffffd4fed98efe9929cc4c02',
                        'ffffd4fed98efe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
                    )
                    .map(Yy),
                Lb = Jy(qb),
                Ub = new Array(3)
                    .concat(
                        'ffeda0feb24cf03b20',
                        'ffffb2fecc5cfd8d3ce31a1c',
                        'ffffb2fecc5cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
                    )
                    .map(Yy),
                Bb = Jy(Ub),
                Yb = new Array(3)
                    .concat(
                        'deebf79ecae13182bd',
                        'eff3ffbdd7e76baed62171b5',
                        'eff3ffbdd7e76baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
                    )
                    .map(Yy),
                Fb = Jy(Yb),
                Ib = new Array(3)
                    .concat(
                        'e5f5e0a1d99b31a354',
                        'edf8e9bae4b374c476238b45',
                        'edf8e9bae4b374c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
                    )
                    .map(Yy),
                Hb = Jy(Ib),
                Xb = new Array(3)
                    .concat(
                        'f0f0f0bdbdbd636363',
                        'f7f7f7cccccc969696525252',
                        'f7f7f7cccccc969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
                    )
                    .map(Yy),
                Vb = Jy(Xb),
                Gb = new Array(3)
                    .concat(
                        'efedf5bcbddc756bb1',
                        'f2f0f7cbc9e29e9ac86a51a3',
                        'f2f0f7cbc9e29e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
                    )
                    .map(Yy),
                $b = Jy(Gb),
                Wb = new Array(3)
                    .concat(
                        'fee0d2fc9272de2d26',
                        'fee5d9fcae91fb6a4acb181d',
                        'fee5d9fcae91fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
                    )
                    .map(Yy),
                Zb = Jy(Wb),
                Qb = new Array(3)
                    .concat(
                        'fee6cefdae6be6550d',
                        'feeddefdbe85fd8d3cd94701',
                        'feeddefdbe85fd8d3ce6550da63603',
                        'feeddefdd0a2fdae6bfd8d3ce6550da63603',
                        'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
                        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
                        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
                    )
                    .map(Yy),
                Jb = Jy(Qb),
                Kb = function(n) {
                    return (
                        (n = Math.max(0, Math.min(1, n))),
                        'rgb(' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        -4.54 - n * (35.34 - n * (2381.73 - n * (6402.7 - n * (7024.72 - 2710.57 * n))))
                                    )
                                )
                            ) +
                            ', ' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        32.49 + n * (170.73 + n * (52.82 - n * (131.46 - n * (176.58 - 67.37 * n))))
                                    )
                                )
                            ) +
                            ', ' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        81.24 +
                                            n * (442.36 - n * (2482.43 - n * (6167.24 - n * (6614.94 - 2475.67 * n))))
                                    )
                                )
                            ) +
                            ')'
                    )
                },
                n_ = Cd(Ui(300, 0.5, 0), Ui(-240, 0.5, 1)),
                t_ = Cd(Ui(-100, 0.75, 0.35), Ui(80, 1.5, 0.8)),
                e_ = Cd(Ui(260, 0.75, 0.35), Ui(80, 1.5, 0.8)),
                r_ = Ui(),
                i_ = function(n) {
                    ;(n < 0 || n > 1) && (n -= Math.floor(n))
                    var t = Math.abs(n - 0.5)
                    return (r_.h = 360 * n - 100), (r_.s = 1.5 - 1.5 * t), (r_.l = 0.8 - 0.9 * t), r_ + ''
                },
                u_ = at(),
                o_ = Math.PI / 3,
                a_ = (2 * Math.PI) / 3,
                c_ = function(n) {
                    var t
                    return (
                        (n = (0.5 - n) * Math.PI),
                        (u_.r = 255 * (t = Math.sin(n)) * t),
                        (u_.g = 255 * (t = Math.sin(n + o_)) * t),
                        (u_.b = 255 * (t = Math.sin(n + a_)) * t),
                        u_ + ''
                    )
                },
                f_ = function(n) {
                    return (
                        (n = Math.max(0, Math.min(1, n))),
                        'rgb(' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        34.61 +
                                            n *
                                                (1172.33 -
                                                    n * (10793.56 - n * (33300.12 - n * (38394.49 - 14825.05 * n))))
                                    )
                                )
                            ) +
                            ', ' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        23.31 +
                                            n * (557.33 + n * (1225.33 - n * (3574.96 - n * (1073.77 + 707.56 * n))))
                                    )
                                )
                            ) +
                            ', ' +
                            Math.max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        27.2 +
                                            n * (3211.1 - n * (15327.97 - n * (27814 - n * (22569.18 - 6838.66 * n))))
                                    )
                                )
                            ) +
                            ')'
                    )
                }
            function s_(n) {
                var t = n.length
                return function(e) {
                    return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))]
                }
            }
            var l_ = s_(
                    Yy(
                        '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
                    )
                ),
                h_ = s_(
                    Yy(
                        '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
                    )
                ),
                d_ = s_(
                    Yy(
                        '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
                    )
                ),
                p_ = s_(
                    Yy(
                        '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
                    )
                ),
                v_ = function(n) {
                    return Dn(gn(n).call(document.documentElement))
                },
                g_ = 0
            function y_() {
                return new b_()
            }
            function b_() {
                this._ = '@' + (++g_).toString(36)
            }
            b_.prototype = y_.prototype = {
                constructor: b_,
                get: function(n) {
                    for (var t = this._; !(t in n); ) if (!(n = n.parentNode)) return
                    return n[t]
                },
                set: function(n, t) {
                    return (n[this._] = t)
                },
                remove: function(n) {
                    return this._ in n && delete n[this._]
                },
                toString: function() {
                    return this._
                },
            }
            var __ = function(n) {
                    return 'string' == typeof n
                        ? new Pn([document.querySelectorAll(n)], [document.documentElement])
                        : new Pn([null == n ? [] : n], zn)
                },
                m_ = function(n, t) {
                    null == t && (t = Ft().touches)
                    for (var e = 0, r = t ? t.length : 0, i = new Array(r); e < r; ++e) i[e] = It(n, t[e])
                    return i
                },
                x_ = e(500)
            var w_ = Date.prototype.toISOString
                ? function(n) {
                      return n.toISOString()
                  }
                : Kv('%Y-%m-%dT%H:%M:%S.%LZ')
            var M_ = +new Date('2000-01-01T00:00:00.000Z')
                    ? function(n) {
                          var t = new Date(n)
                          return isNaN(t) ? null : t
                      }
                    : ng('%Y-%m-%dT%H:%M:%S.%LZ'),
                N_ = function(n, t, e) {
                    var r = new ee(),
                        i = t
                    return null == t
                        ? (r.restart(n, t, e), r)
                        : ((t = +t),
                          (e = null == e ? ne() : +e),
                          r.restart(
                              function u(o) {
                                  ;(o += i), r.restart(u, (i += t), e), n(o)
                              },
                              t,
                              e
                          ),
                          r)
                },
                A_ = function(n) {
                    return function() {
                        return n
                    }
                }
            function T_(n) {
                return n[0]
            }
            function k_(n) {
                return n[1]
            }
            function S_() {
                this._ = null
            }
            function E_(n) {
                n.U = n.C = n.L = n.R = n.P = n.N = null
            }
            function C_(n, t) {
                var e = t,
                    r = t.R,
                    i = e.U
                i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
                    (r.U = i),
                    (e.U = r),
                    (e.R = r.L),
                    e.R && (e.R.U = e),
                    (r.L = e)
            }
            function O_(n, t) {
                var e = t,
                    r = t.L,
                    i = e.U
                i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
                    (r.U = i),
                    (e.U = r),
                    (e.L = r.R),
                    e.L && (e.L.U = e),
                    (r.R = e)
            }
            function z_(n) {
                for (; n.L; ) n = n.L
                return n
            }
            S_.prototype = {
                constructor: S_,
                insert: function(n, t) {
                    var e, r, i
                    if (n) {
                        if (((t.P = n), (t.N = n.N), n.N && (n.N.P = t), (n.N = t), n.R)) {
                            for (n = n.R; n.L; ) n = n.L
                            n.L = t
                        } else n.R = t
                        e = n
                    } else
                        this._
                            ? ((n = z_(this._)), (t.P = null), (t.N = n), (n.P = n.L = t), (e = n))
                            : ((t.P = t.N = null), (this._ = t), (e = null))
                    for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; )
                        e === (r = e.U).L
                            ? (i = r.R) && i.C
                                ? ((e.C = i.C = !1), (r.C = !0), (n = r))
                                : (n === e.R && (C_(this, e), (e = (n = e).U)), (e.C = !1), (r.C = !0), O_(this, r))
                            : (i = r.L) && i.C
                            ? ((e.C = i.C = !1), (r.C = !0), (n = r))
                            : (n === e.L && (O_(this, e), (e = (n = e).U)), (e.C = !1), (r.C = !0), C_(this, r)),
                            (e = n.U)
                    this._.C = !1
                },
                remove: function(n) {
                    n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), (n.N = n.P = null)
                    var t,
                        e,
                        r,
                        i = n.U,
                        u = n.L,
                        o = n.R
                    if (
                        ((e = u ? (o ? z_(o) : u) : o),
                        i ? (i.L === n ? (i.L = e) : (i.R = e)) : (this._ = e),
                        u && o
                            ? ((r = e.C),
                              (e.C = n.C),
                              (e.L = u),
                              (u.U = e),
                              e !== o
                                  ? ((i = e.U), (e.U = n.U), (n = e.R), (i.L = n), (e.R = o), (o.U = e))
                                  : ((e.U = i), (i = e), (n = e.R)))
                            : ((r = n.C), (n = e)),
                        n && (n.U = i),
                        !r)
                    )
                        if (n && n.C) n.C = !1
                        else {
                            do {
                                if (n === this._) break
                                if (n === i.L) {
                                    if (
                                        ((t = i.R).C && ((t.C = !1), (i.C = !0), C_(this, i), (t = i.R)),
                                        (t.L && t.L.C) || (t.R && t.R.C))
                                    ) {
                                        ;(t.R && t.R.C) || ((t.L.C = !1), (t.C = !0), O_(this, t), (t = i.R)),
                                            (t.C = i.C),
                                            (i.C = t.R.C = !1),
                                            C_(this, i),
                                            (n = this._)
                                        break
                                    }
                                } else if (
                                    ((t = i.L).C && ((t.C = !1), (i.C = !0), O_(this, i), (t = i.L)),
                                    (t.L && t.L.C) || (t.R && t.R.C))
                                ) {
                                    ;(t.L && t.L.C) || ((t.R.C = !1), (t.C = !0), C_(this, t), (t = i.L)),
                                        (t.C = i.C),
                                        (i.C = t.L.C = !1),
                                        O_(this, i),
                                        (n = this._)
                                    break
                                }
                                ;(t.C = !0), (n = i), (i = i.U)
                            } while (!n.C)
                            n && (n.C = !1)
                        }
                },
            }
            var P_ = S_
            function R_(n, t, e, r) {
                var i = [null, null],
                    u = im.push(i) - 1
                return (
                    (i.left = n),
                    (i.right = t),
                    e && D_(i, n, t, e),
                    r && D_(i, t, n, r),
                    em[n.index].halfedges.push(u),
                    em[t.index].halfedges.push(u),
                    i
                )
            }
            function j_(n, t, e) {
                var r = [t, e]
                return (r.left = n), r
            }
            function D_(n, t, e, r) {
                n[0] || n[1] ? (n.left === e ? (n[1] = r) : (n[0] = r)) : ((n[0] = r), (n.left = t), (n.right = e))
            }
            function q_(n, t, e, r, i) {
                var u,
                    o = n[0],
                    a = n[1],
                    c = o[0],
                    f = o[1],
                    s = 0,
                    l = 1,
                    h = a[0] - c,
                    d = a[1] - f
                if (((u = t - c), h || !(u > 0))) {
                    if (((u /= h), h < 0)) {
                        if (u < s) return
                        u < l && (l = u)
                    } else if (h > 0) {
                        if (u > l) return
                        u > s && (s = u)
                    }
                    if (((u = r - c), h || !(u < 0))) {
                        if (((u /= h), h < 0)) {
                            if (u > l) return
                            u > s && (s = u)
                        } else if (h > 0) {
                            if (u < s) return
                            u < l && (l = u)
                        }
                        if (((u = e - f), d || !(u > 0))) {
                            if (((u /= d), d < 0)) {
                                if (u < s) return
                                u < l && (l = u)
                            } else if (d > 0) {
                                if (u > l) return
                                u > s && (s = u)
                            }
                            if (((u = i - f), d || !(u < 0))) {
                                if (((u /= d), d < 0)) {
                                    if (u > l) return
                                    u > s && (s = u)
                                } else if (d > 0) {
                                    if (u < s) return
                                    u < l && (l = u)
                                }
                                return (
                                    !(s > 0 || l < 1) ||
                                    (s > 0 && (n[0] = [c + s * h, f + s * d]),
                                    l < 1 && (n[1] = [c + l * h, f + l * d]),
                                    !0)
                                )
                            }
                        }
                    }
                }
            }
            function L_(n, t, e, r, i) {
                var u = n[1]
                if (u) return !0
                var o,
                    a,
                    c = n[0],
                    f = n.left,
                    s = n.right,
                    l = f[0],
                    h = f[1],
                    d = s[0],
                    p = s[1],
                    v = (l + d) / 2,
                    g = (h + p) / 2
                if (p === h) {
                    if (v < t || v >= r) return
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [v, e]
                        u = [v, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [v, i]
                        u = [v, e]
                    }
                } else if (((a = g - (o = (l - d) / (p - h)) * v), o < -1 || o > 1))
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [(e - a) / o, e]
                        u = [(i - a) / o, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [(i - a) / o, i]
                        u = [(e - a) / o, e]
                    }
                else if (h < p) {
                    if (c) {
                        if (c[0] >= r) return
                    } else c = [t, o * t + a]
                    u = [r, o * r + a]
                } else {
                    if (c) {
                        if (c[0] < t) return
                    } else c = [r, o * r + a]
                    u = [t, o * t + a]
                }
                return (n[0] = c), (n[1] = u), !0
            }
            function U_(n, t) {
                var e = n.site,
                    r = t.left,
                    i = t.right
                return (
                    e === i && ((i = r), (r = e)),
                    i
                        ? Math.atan2(i[1] - r[1], i[0] - r[0])
                        : (e === r ? ((r = t[1]), (i = t[0])) : ((r = t[0]), (i = t[1])),
                          Math.atan2(r[0] - i[0], i[1] - r[1]))
                )
            }
            function B_(n, t) {
                return t[+(t.left !== n.site)]
            }
            function Y_(n, t) {
                return t[+(t.left === n.site)]
            }
            var F_,
                I_ = []
            function H_() {
                E_(this), (this.x = this.y = this.arc = this.site = this.cy = null)
            }
            function X_(n) {
                var t = n.P,
                    e = n.N
                if (t && e) {
                    var r = t.site,
                        i = n.site,
                        u = e.site
                    if (r !== u) {
                        var o = i[0],
                            a = i[1],
                            c = r[0] - o,
                            f = r[1] - a,
                            s = u[0] - o,
                            l = u[1] - a,
                            h = 2 * (c * l - f * s)
                        if (!(h >= -om)) {
                            var d = c * c + f * f,
                                p = s * s + l * l,
                                v = (l * d - f * p) / h,
                                g = (c * p - s * d) / h,
                                y = I_.pop() || new H_()
                            ;(y.arc = n),
                                (y.site = i),
                                (y.x = v + o),
                                (y.y = (y.cy = g + a) + Math.sqrt(v * v + g * g)),
                                (n.circle = y)
                            for (var b = null, _ = rm._; _; )
                                if (y.y < _.y || (y.y === _.y && y.x <= _.x)) {
                                    if (!_.L) {
                                        b = _.P
                                        break
                                    }
                                    _ = _.L
                                } else {
                                    if (!_.R) {
                                        b = _
                                        break
                                    }
                                    _ = _.R
                                }
                            rm.insert(b, y), b || (F_ = y)
                        }
                    }
                }
            }
            function V_(n) {
                var t = n.circle
                t && (t.P || (F_ = t.N), rm.remove(t), I_.push(t), E_(t), (n.circle = null))
            }
            var G_ = []
            function $_() {
                E_(this), (this.edge = this.site = this.circle = null)
            }
            function W_(n) {
                var t = G_.pop() || new $_()
                return (t.site = n), t
            }
            function Z_(n) {
                V_(n), tm.remove(n), G_.push(n), E_(n)
            }
            function Q_(n) {
                var t = n.circle,
                    e = t.x,
                    r = t.cy,
                    i = [e, r],
                    u = n.P,
                    o = n.N,
                    a = [n]
                Z_(n)
                for (var c = u; c.circle && Math.abs(e - c.circle.x) < um && Math.abs(r - c.circle.cy) < um; )
                    (u = c.P), a.unshift(c), Z_(c), (c = u)
                a.unshift(c), V_(c)
                for (var f = o; f.circle && Math.abs(e - f.circle.x) < um && Math.abs(r - f.circle.cy) < um; )
                    (o = f.N), a.push(f), Z_(f), (f = o)
                a.push(f), V_(f)
                var s,
                    l = a.length
                for (s = 1; s < l; ++s) (f = a[s]), (c = a[s - 1]), D_(f.edge, c.site, f.site, i)
                ;(c = a[0]), ((f = a[l - 1]).edge = R_(c.site, f.site, null, i)), X_(c), X_(f)
            }
            function J_(n) {
                for (var t, e, r, i, u = n[0], o = n[1], a = tm._; a; )
                    if ((r = K_(a, o) - u) > um) a = a.L
                    else {
                        if (!((i = u - nm(a, o)) > um)) {
                            r > -um ? ((t = a.P), (e = a)) : i > -um ? ((t = a), (e = a.N)) : (t = e = a)
                            break
                        }
                        if (!a.R) {
                            t = a
                            break
                        }
                        a = a.R
                    }
                !(function(n) {
                    em[n.index] = { site: n, halfedges: [] }
                })(n)
                var c = W_(n)
                if ((tm.insert(t, c), t || e)) {
                    if (t === e)
                        return (
                            V_(t),
                            (e = W_(t.site)),
                            tm.insert(c, e),
                            (c.edge = e.edge = R_(t.site, c.site)),
                            X_(t),
                            void X_(e)
                        )
                    if (e) {
                        V_(t), V_(e)
                        var f = t.site,
                            s = f[0],
                            l = f[1],
                            h = n[0] - s,
                            d = n[1] - l,
                            p = e.site,
                            v = p[0] - s,
                            g = p[1] - l,
                            y = 2 * (h * g - d * v),
                            b = h * h + d * d,
                            _ = v * v + g * g,
                            m = [(g * b - d * _) / y + s, (h * _ - v * b) / y + l]
                        D_(e.edge, f, p, m), (c.edge = R_(f, n, null, m)), (e.edge = R_(n, p, null, m)), X_(t), X_(e)
                    } else c.edge = R_(t.site, c.site)
                }
            }
            function K_(n, t) {
                var e = n.site,
                    r = e[0],
                    i = e[1],
                    u = i - t
                if (!u) return r
                var o = n.P
                if (!o) return -1 / 0
                var a = (e = o.site)[0],
                    c = e[1],
                    f = c - t
                if (!f) return a
                var s = a - r,
                    l = 1 / u - 1 / f,
                    h = s / f
                return l
                    ? (-h + Math.sqrt(h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - u / 2))) / l + r
                    : (r + a) / 2
            }
            function nm(n, t) {
                var e = n.N
                if (e) return K_(e, t)
                var r = n.site
                return r[1] === t ? r[0] : 1 / 0
            }
            var tm,
                em,
                rm,
                im,
                um = 1e-6,
                om = 1e-12
            function am(n, t) {
                return t[1] - n[1] || t[0] - n[0]
            }
            function cm(n, t) {
                var e,
                    r,
                    i,
                    u = n.sort(am).pop()
                for (im = [], em = new Array(n.length), tm = new P_(), rm = new P_(); ; )
                    if (((i = F_), u && (!i || u[1] < i.y || (u[1] === i.y && u[0] < i.x))))
                        (u[0] === e && u[1] === r) || (J_(u), (e = u[0]), (r = u[1])), (u = n.pop())
                    else {
                        if (!i) break
                        Q_(i.arc)
                    }
                if (
                    ((function() {
                        for (var n, t, e, r, i = 0, u = em.length; i < u; ++i)
                            if ((n = em[i]) && (r = (t = n.halfedges).length)) {
                                var o = new Array(r),
                                    a = new Array(r)
                                for (e = 0; e < r; ++e) (o[e] = e), (a[e] = U_(n, im[t[e]]))
                                for (
                                    o.sort(function(n, t) {
                                        return a[t] - a[n]
                                    }),
                                        e = 0;
                                    e < r;
                                    ++e
                                )
                                    a[e] = t[o[e]]
                                for (e = 0; e < r; ++e) t[e] = a[e]
                            }
                    })(),
                    t)
                ) {
                    var o = +t[0][0],
                        a = +t[0][1],
                        c = +t[1][0],
                        f = +t[1][1]
                    !(function(n, t, e, r) {
                        for (var i, u = im.length; u--; )
                            (L_((i = im[u]), n, t, e, r) &&
                                q_(i, n, t, e, r) &&
                                (Math.abs(i[0][0] - i[1][0]) > um || Math.abs(i[0][1] - i[1][1]) > um)) ||
                                delete im[u]
                    })(o, a, c, f),
                        (function(n, t, e, r) {
                            var i,
                                u,
                                o,
                                a,
                                c,
                                f,
                                s,
                                l,
                                h,
                                d,
                                p,
                                v,
                                g = em.length,
                                y = !0
                            for (i = 0; i < g; ++i)
                                if ((u = em[i])) {
                                    for (o = u.site, a = (c = u.halfedges).length; a--; ) im[c[a]] || c.splice(a, 1)
                                    for (a = 0, f = c.length; a < f; )
                                        (p = (d = Y_(u, im[c[a]]))[0]),
                                            (v = d[1]),
                                            (l = (s = B_(u, im[c[++a % f]]))[0]),
                                            (h = s[1]),
                                            (Math.abs(p - l) > um || Math.abs(v - h) > um) &&
                                                (c.splice(
                                                    a,
                                                    0,
                                                    im.push(
                                                        j_(
                                                            o,
                                                            d,
                                                            Math.abs(p - n) < um && r - v > um
                                                                ? [n, Math.abs(l - n) < um ? h : r]
                                                                : Math.abs(v - r) < um && e - p > um
                                                                ? [Math.abs(h - r) < um ? l : e, r]
                                                                : Math.abs(p - e) < um && v - t > um
                                                                ? [e, Math.abs(l - e) < um ? h : t]
                                                                : Math.abs(v - t) < um && p - n > um
                                                                ? [Math.abs(h - t) < um ? l : n, t]
                                                                : null
                                                        )
                                                    ) - 1
                                                ),
                                                ++f)
                                    f && (y = !1)
                                }
                            if (y) {
                                var b,
                                    _,
                                    m,
                                    x = 1 / 0
                                for (i = 0, y = null; i < g; ++i)
                                    (u = em[i]) &&
                                        (m = (b = (o = u.site)[0] - n) * b + (_ = o[1] - t) * _) < x &&
                                        ((x = m), (y = u))
                                if (y) {
                                    var w = [n, t],
                                        M = [n, r],
                                        N = [e, r],
                                        A = [e, t]
                                    y.halfedges.push(
                                        im.push(j_((o = y.site), w, M)) - 1,
                                        im.push(j_(o, M, N)) - 1,
                                        im.push(j_(o, N, A)) - 1,
                                        im.push(j_(o, A, w)) - 1
                                    )
                                }
                            }
                            for (i = 0; i < g; ++i) (u = em[i]) && (u.halfedges.length || delete em[i])
                        })(o, a, c, f)
                }
                ;(this.edges = im), (this.cells = em), (tm = rm = im = em = null)
            }
            cm.prototype = {
                constructor: cm,
                polygons: function() {
                    var n = this.edges
                    return this.cells.map(function(t) {
                        var e = t.halfedges.map(function(e) {
                            return B_(t, n[e])
                        })
                        return (e.data = t.site.data), e
                    })
                },
                triangles: function() {
                    var n = [],
                        t = this.edges
                    return (
                        this.cells.forEach(function(e, r) {
                            if ((u = (i = e.halfedges).length))
                                for (
                                    var i,
                                        u,
                                        o,
                                        a,
                                        c,
                                        f,
                                        s = e.site,
                                        l = -1,
                                        h = t[i[u - 1]],
                                        d = h.left === s ? h.right : h.left;
                                    ++l < u;

                                )
                                    (o = d),
                                        (d = (h = t[i[l]]).left === s ? h.right : h.left),
                                        o &&
                                            d &&
                                            r < o.index &&
                                            r < d.index &&
                                            ((c = o),
                                            (f = d),
                                            ((a = s)[0] - f[0]) * (c[1] - a[1]) - (a[0] - c[0]) * (f[1] - a[1]) < 0) &&
                                            n.push([s.data, o.data, d.data])
                        }),
                        n
                    )
                },
                links: function() {
                    return this.edges
                        .filter(function(n) {
                            return n.right
                        })
                        .map(function(n) {
                            return { source: n.left.data, target: n.right.data }
                        })
                },
                find: function(n, t, e) {
                    for (var r, i, u = this, o = u._found || 0, a = u.cells.length; !(i = u.cells[o]); )
                        if (++o >= a) return null
                    var c = n - i.site[0],
                        f = t - i.site[1],
                        s = c * c + f * f
                    do {
                        ;(i = u.cells[(r = o)]),
                            (o = null),
                            i.halfedges.forEach(function(e) {
                                var r = u.edges[e],
                                    a = r.left
                                if ((a !== i.site && a) || (a = r.right)) {
                                    var c = n - a[0],
                                        f = t - a[1],
                                        l = c * c + f * f
                                    l < s && ((s = l), (o = a.index))
                                }
                            })
                    } while (null !== o)
                    return (u._found = r), null == e || s <= e * e ? i.site : null
                },
            }
            var fm = function() {
                    var n = T_,
                        t = k_,
                        e = null
                    function r(r) {
                        return new cm(
                            r.map(function(e, i) {
                                var u = [Math.round(n(e, i, r) / um) * um, Math.round(t(e, i, r) / um) * um]
                                return (u.index = i), (u.data = e), u
                            }),
                            e
                        )
                    }
                    return (
                        (r.polygons = function(n) {
                            return r(n).polygons()
                        }),
                        (r.links = function(n) {
                            return r(n).links()
                        }),
                        (r.triangles = function(n) {
                            return r(n).triangles()
                        }),
                        (r.x = function(t) {
                            return arguments.length ? ((n = 'function' == typeof t ? t : A_(+t)), r) : n
                        }),
                        (r.y = function(n) {
                            return arguments.length ? ((t = 'function' == typeof n ? n : A_(+n)), r) : t
                        }),
                        (r.extent = function(n) {
                            return arguments.length
                                ? ((e =
                                      null == n
                                          ? null
                                          : [
                                                [+n[0][0], +n[0][1]],
                                                [+n[1][0], +n[1][1]],
                                            ]),
                                  r)
                                : e && [
                                      [e[0][0], e[0][1]],
                                      [e[1][0], e[1][1]],
                                  ]
                        }),
                        (r.size = function(n) {
                            return arguments.length
                                ? ((e =
                                      null == n
                                          ? null
                                          : [
                                                [0, 0],
                                                [+n[0], +n[1]],
                                            ]),
                                  r)
                                : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
                        }),
                        r
                    )
                },
                sm = function(n) {
                    return function() {
                        return n
                    }
                }
            function lm(n, t, e) {
                ;(this.target = n), (this.type = t), (this.transform = e)
            }
            function hm(n, t, e) {
                ;(this.k = n), (this.x = t), (this.y = e)
            }
            hm.prototype = {
                constructor: hm,
                scale: function(n) {
                    return 1 === n ? this : new hm(this.k * n, this.x, this.y)
                },
                translate: function(n, t) {
                    return (0 === n) & (0 === t) ? this : new hm(this.k, this.x + this.k * n, this.y + this.k * t)
                },
                apply: function(n) {
                    return [n[0] * this.k + this.x, n[1] * this.k + this.y]
                },
                applyX: function(n) {
                    return n * this.k + this.x
                },
                applyY: function(n) {
                    return n * this.k + this.y
                },
                invert: function(n) {
                    return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k]
                },
                invertX: function(n) {
                    return (n - this.x) / this.k
                },
                invertY: function(n) {
                    return (n - this.y) / this.k
                },
                rescaleX: function(n) {
                    return n.copy().domain(
                        n
                            .range()
                            .map(this.invertX, this)
                            .map(n.invert, n)
                    )
                },
                rescaleY: function(n) {
                    return n.copy().domain(
                        n
                            .range()
                            .map(this.invertY, this)
                            .map(n.invert, n)
                    )
                },
                toString: function() {
                    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
                },
            }
            var dm = new hm(1, 0, 0)
            function pm(n) {
                for (; !n.__zoom; ) if (!(n = n.parentNode)) return dm
                return n.__zoom
            }
            function vm() {
                wn.stopImmediatePropagation()
            }
            pm.prototype = hm.prototype
            var gm = function() {
                wn.preventDefault(), wn.stopImmediatePropagation()
            }
            function ym() {
                return !wn.ctrlKey && !wn.button
            }
            function bm() {
                var n = this
                return n instanceof SVGElement
                    ? (n = n.ownerSVGElement || n).hasAttribute('viewBox')
                        ? [
                              [(n = n.viewBox.baseVal).x, n.y],
                              [n.x + n.width, n.y + n.height],
                          ]
                        : [
                              [0, 0],
                              [n.width.baseVal.value, n.height.baseVal.value],
                          ]
                    : [
                          [0, 0],
                          [n.clientWidth, n.clientHeight],
                      ]
            }
            function _m() {
                return this.__zoom || dm
            }
            function mm() {
                return -wn.deltaY * (1 === wn.deltaMode ? 0.05 : wn.deltaMode ? 1 : 0.002)
            }
            function xm() {
                return navigator.maxTouchPoints || 'ontouchstart' in this
            }
            function wm(n, t, e) {
                var r = n.invertX(t[0][0]) - e[0][0],
                    i = n.invertX(t[1][0]) - e[1][0],
                    u = n.invertY(t[0][1]) - e[0][1],
                    o = n.invertY(t[1][1]) - e[1][1]
                return n.translate(
                    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
                    o > u ? (u + o) / 2 : Math.min(0, u) || Math.max(0, o)
                )
            }
            var Mm = function() {
                var n,
                    t,
                    e = ym,
                    r = bm,
                    i = wm,
                    u = mm,
                    o = xm,
                    a = [0, 1 / 0],
                    c = [
                        [-1 / 0, -1 / 0],
                        [1 / 0, 1 / 0],
                    ],
                    f = 250,
                    s = md,
                    l = M('start', 'zoom', 'end'),
                    h = 0
                function d(n) {
                    n.property('__zoom', _m)
                        .on('wheel.zoom', m)
                        .on('mousedown.zoom', x)
                        .on('dblclick.zoom', w)
                        .filter(o)
                        .on('touchstart.zoom', N)
                        .on('touchmove.zoom', A)
                        .on('touchend.zoom touchcancel.zoom', T)
                        .style('touch-action', 'none')
                        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                }
                function p(n, t) {
                    return (t = Math.max(a[0], Math.min(a[1], t))) === n.k ? n : new hm(t, n.x, n.y)
                }
                function v(n, t, e) {
                    var r = t[0] - e[0] * n.k,
                        i = t[1] - e[1] * n.k
                    return r === n.x && i === n.y ? n : new hm(n.k, r, i)
                }
                function g(n) {
                    return [(+n[0][0] + +n[1][0]) / 2, (+n[0][1] + +n[1][1]) / 2]
                }
                function y(n, t, e) {
                    n.on('start.zoom', function() {
                        b(this, arguments).start()
                    })
                        .on('interrupt.zoom end.zoom', function() {
                            b(this, arguments).end()
                        })
                        .tween('zoom', function() {
                            var n = this,
                                i = arguments,
                                u = b(n, i),
                                o = r.apply(n, i),
                                a = null == e ? g(o) : 'function' == typeof e ? e.apply(n, i) : e,
                                c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                                f = n.__zoom,
                                l = 'function' == typeof t ? t.apply(n, i) : t,
                                h = s(f.invert(a).concat(c / f.k), l.invert(a).concat(c / l.k))
                            return function(n) {
                                if (1 === n) n = l
                                else {
                                    var t = h(n),
                                        e = c / t[2]
                                    n = new hm(e, a[0] - t[0] * e, a[1] - t[1] * e)
                                }
                                u.zoom(null, n)
                            }
                        })
                }
                function b(n, t, e) {
                    return (!e && n.__zooming) || new _(n, t)
                }
                function _(n, t) {
                    ;(this.that = n), (this.args = t), (this.active = 0), (this.extent = r.apply(n, t)), (this.taps = 0)
                }
                function m() {
                    if (e.apply(this, arguments)) {
                        var n = b(this, arguments),
                            t = this.__zoom,
                            r = Math.max(a[0], Math.min(a[1], t.k * Math.pow(2, u.apply(this, arguments)))),
                            o = Xt(this)
                        if (n.wheel)
                            (n.mouse[0][0] === o[0] && n.mouse[0][1] === o[1]) ||
                                (n.mouse[1] = t.invert((n.mouse[0] = o))),
                                clearTimeout(n.wheel)
                        else {
                            if (t.k === r) return
                            ;(n.mouse = [o, t.invert(o)]), _e(this), n.start()
                        }
                        gm(),
                            (n.wheel = setTimeout(f, 150)),
                            n.zoom('mouse', i(v(p(t, r), n.mouse[0], n.mouse[1]), n.extent, c))
                    }
                    function f() {
                        ;(n.wheel = null), n.end()
                    }
                }
                function x() {
                    if (!t && e.apply(this, arguments)) {
                        var n = b(this, arguments, !0),
                            r = Dn(wn.view)
                                .on('mousemove.zoom', f, !0)
                                .on('mouseup.zoom', s, !0),
                            u = Xt(this),
                            o = wn.clientX,
                            a = wn.clientY
                        Un(wn.view), vm(), (n.mouse = [u, this.__zoom.invert(u)]), _e(this), n.start()
                    }
                    function f() {
                        if ((gm(), !n.moved)) {
                            var t = wn.clientX - o,
                                e = wn.clientY - a
                            n.moved = t * t + e * e > h
                        }
                        n.zoom('mouse', i(v(n.that.__zoom, (n.mouse[0] = Xt(n.that)), n.mouse[1]), n.extent, c))
                    }
                    function s() {
                        r.on('mousemove.zoom mouseup.zoom', null), Bn(wn.view, n.moved), gm(), n.end()
                    }
                }
                function w() {
                    if (e.apply(this, arguments)) {
                        var n = this.__zoom,
                            t = Xt(this),
                            u = n.invert(t),
                            o = n.k * (wn.shiftKey ? 0.5 : 2),
                            a = i(v(p(n, o), t, u), r.apply(this, arguments), c)
                        gm(),
                            f > 0
                                ? Dn(this)
                                      .transition()
                                      .duration(f)
                                      .call(y, a, t)
                                : Dn(this).call(d.transform, a)
                    }
                }
                function N() {
                    if (e.apply(this, arguments)) {
                        var t,
                            r,
                            i,
                            u,
                            o = wn.touches,
                            a = o.length,
                            c = b(this, arguments, wn.changedTouches.length === a)
                        for (vm(), r = 0; r < a; ++r)
                            (i = o[r]),
                                (u = [(u = Ht(this, o, i.identifier)), this.__zoom.invert(u), i.identifier]),
                                c.touch0
                                    ? c.touch1 || c.touch0[2] === u[2] || ((c.touch1 = u), (c.taps = 0))
                                    : ((c.touch0 = u), (t = !0), (c.taps = 1 + !!n))
                        n && (n = clearTimeout(n)),
                            t &&
                                (c.taps < 2 &&
                                    (n = setTimeout(function() {
                                        n = null
                                    }, 500)),
                                _e(this),
                                c.start())
                    }
                }
                function A() {
                    if (this.__zooming) {
                        var t,
                            e,
                            r,
                            u,
                            o = b(this, arguments),
                            a = wn.changedTouches,
                            f = a.length
                        for (gm(), n && (n = clearTimeout(n)), o.taps = 0, t = 0; t < f; ++t)
                            (e = a[t]),
                                (r = Ht(this, a, e.identifier)),
                                o.touch0 && o.touch0[2] === e.identifier
                                    ? (o.touch0[0] = r)
                                    : o.touch1 && o.touch1[2] === e.identifier && (o.touch1[0] = r)
                        if (((e = o.that.__zoom), o.touch1)) {
                            var s = o.touch0[0],
                                l = o.touch0[1],
                                h = o.touch1[0],
                                d = o.touch1[1],
                                g = (g = h[0] - s[0]) * g + (g = h[1] - s[1]) * g,
                                y = (y = d[0] - l[0]) * y + (y = d[1] - l[1]) * y
                            ;(e = p(e, Math.sqrt(g / y))),
                                (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                                (u = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2])
                        } else {
                            if (!o.touch0) return
                            ;(r = o.touch0[0]), (u = o.touch0[1])
                        }
                        o.zoom('touch', i(v(e, r, u), o.extent, c))
                    }
                }
                function T() {
                    if (this.__zooming) {
                        var n,
                            e,
                            r = b(this, arguments),
                            i = wn.changedTouches,
                            u = i.length
                        for (
                            vm(),
                                t && clearTimeout(t),
                                t = setTimeout(function() {
                                    t = null
                                }, 500),
                                n = 0;
                            n < u;
                            ++n
                        )
                            (e = i[n]),
                                r.touch0 && r.touch0[2] === e.identifier
                                    ? delete r.touch0
                                    : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1
                        if ((r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1), r.touch0))
                            r.touch0[1] = this.__zoom.invert(r.touch0[0])
                        else if ((r.end(), 2 === r.taps)) {
                            var o = Dn(this).on('dblclick.zoom')
                            o && o.apply(this, arguments)
                        }
                    }
                }
                return (
                    (d.transform = function(n, t, e) {
                        var r = n.selection ? n.selection() : n
                        r.property('__zoom', _m),
                            n !== r
                                ? y(n, t, e)
                                : r.interrupt().each(function() {
                                      b(this, arguments)
                                          .start()
                                          .zoom(null, 'function' == typeof t ? t.apply(this, arguments) : t)
                                          .end()
                                  })
                    }),
                    (d.scaleBy = function(n, t, e) {
                        d.scaleTo(
                            n,
                            function() {
                                var n = this.__zoom.k,
                                    e = 'function' == typeof t ? t.apply(this, arguments) : t
                                return n * e
                            },
                            e
                        )
                    }),
                    (d.scaleTo = function(n, t, e) {
                        d.transform(
                            n,
                            function() {
                                var n = r.apply(this, arguments),
                                    u = this.__zoom,
                                    o = null == e ? g(n) : 'function' == typeof e ? e.apply(this, arguments) : e,
                                    a = u.invert(o),
                                    f = 'function' == typeof t ? t.apply(this, arguments) : t
                                return i(v(p(u, f), o, a), n, c)
                            },
                            e
                        )
                    }),
                    (d.translateBy = function(n, t, e) {
                        d.transform(n, function() {
                            return i(
                                this.__zoom.translate(
                                    'function' == typeof t ? t.apply(this, arguments) : t,
                                    'function' == typeof e ? e.apply(this, arguments) : e
                                ),
                                r.apply(this, arguments),
                                c
                            )
                        })
                    }),
                    (d.translateTo = function(n, t, e, u) {
                        d.transform(
                            n,
                            function() {
                                var n = r.apply(this, arguments),
                                    o = this.__zoom,
                                    a = null == u ? g(n) : 'function' == typeof u ? u.apply(this, arguments) : u
                                return i(
                                    dm
                                        .translate(a[0], a[1])
                                        .scale(o.k)
                                        .translate(
                                            'function' == typeof t ? -t.apply(this, arguments) : -t,
                                            'function' == typeof e ? -e.apply(this, arguments) : -e
                                        ),
                                    n,
                                    c
                                )
                            },
                            u
                        )
                    }),
                    (_.prototype = {
                        start: function() {
                            return 1 == ++this.active && ((this.that.__zooming = this), this.emit('start')), this
                        },
                        zoom: function(n, t) {
                            return (
                                this.mouse && 'mouse' !== n && (this.mouse[1] = t.invert(this.mouse[0])),
                                this.touch0 && 'touch' !== n && (this.touch0[1] = t.invert(this.touch0[0])),
                                this.touch1 && 'touch' !== n && (this.touch1[1] = t.invert(this.touch1[0])),
                                (this.that.__zoom = t),
                                this.emit('zoom'),
                                this
                            )
                        },
                        end: function() {
                            return 0 == --this.active && (delete this.that.__zooming, this.emit('end')), this
                        },
                        emit: function(n) {
                            Sn(new lm(d, n, this.that.__zoom), l.apply, l, [n, this.that, this.args])
                        },
                    }),
                    (d.wheelDelta = function(n) {
                        return arguments.length ? ((u = 'function' == typeof n ? n : sm(+n)), d) : u
                    }),
                    (d.filter = function(n) {
                        return arguments.length ? ((e = 'function' == typeof n ? n : sm(!!n)), d) : e
                    }),
                    (d.touchable = function(n) {
                        return arguments.length ? ((o = 'function' == typeof n ? n : sm(!!n)), d) : o
                    }),
                    (d.extent = function(n) {
                        return arguments.length
                            ? ((r =
                                  'function' == typeof n
                                      ? n
                                      : sm([
                                            [+n[0][0], +n[0][1]],
                                            [+n[1][0], +n[1][1]],
                                        ])),
                              d)
                            : r
                    }),
                    (d.scaleExtent = function(n) {
                        return arguments.length ? ((a[0] = +n[0]), (a[1] = +n[1]), d) : [a[0], a[1]]
                    }),
                    (d.translateExtent = function(n) {
                        return arguments.length
                            ? ((c[0][0] = +n[0][0]),
                              (c[1][0] = +n[1][0]),
                              (c[0][1] = +n[0][1]),
                              (c[1][1] = +n[1][1]),
                              d)
                            : [
                                  [c[0][0], c[0][1]],
                                  [c[1][0], c[1][1]],
                              ]
                    }),
                    (d.constrain = function(n) {
                        return arguments.length ? ((i = n), d) : i
                    }),
                    (d.duration = function(n) {
                        return arguments.length ? ((f = +n), d) : f
                    }),
                    (d.interpolate = function(n) {
                        return arguments.length ? ((s = n), d) : s
                    }),
                    (d.on = function() {
                        var n = l.on.apply(l, arguments)
                        return n === l ? d : n
                    }),
                    (d.clickDistance = function(n) {
                        return arguments.length ? ((h = (n = +n) * n), d) : Math.sqrt(h)
                    }),
                    d
                )
            }
        },
    },
])
//# sourceMappingURL=23.js.map
