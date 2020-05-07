;(window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
        217: function(t, e) {
            t.exports = function(t) {
                return (
                    t.webpackPolyfill ||
                        ((t.deprecate = function() {}),
                        (t.paths = []),
                        t.children || (t.children = []),
                        Object.defineProperty(t, 'loaded', {
                            enumerable: !0,
                            get: function() {
                                return t.l
                            },
                        }),
                        Object.defineProperty(t, 'id', {
                            enumerable: !0,
                            get: function() {
                                return t.i
                            },
                        }),
                        (t.webpackPolyfill = 1)),
                    t
                )
            }
        },
        311: function(t, e, n) {
            var r = n(346),
                i = n(347),
                a = n(133),
                o = n(348)
            t.exports = function(t) {
                return r(t) || i(t) || a(t) || o()
            }
        },
        346: function(t, e, n) {
            var r = n(134)
            t.exports = function(t) {
                if (Array.isArray(t)) return r(t)
            }
        },
        347: function(t, e) {
            t.exports = function(t) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }
        },
        348: function(t, e) {
            t.exports = function() {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            }
        },
        395: function(t, e, n) {
            t.exports = n(503).default
        },
        397: function(t, e, n) {
            /*!
             * Chart.js v2.9.3
             * https://www.chartjs.org
             * (c) 2019 Chart.js Contributors
             * Released under the MIT License
             */
            t.exports = (function(t) {
                'use strict'
                t = t && t.hasOwnProperty('default') ? t.default : t
                var e = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    },
                    n = (function(t, e) {
                        return t((e = { exports: {} }), e.exports), e.exports
                    })(function(t) {
                        var n = {}
                        for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r)
                        var i = (t.exports = {
                            rgb: { channels: 3, labels: 'rgb' },
                            hsl: { channels: 3, labels: 'hsl' },
                            hsv: { channels: 3, labels: 'hsv' },
                            hwb: { channels: 3, labels: 'hwb' },
                            cmyk: { channels: 4, labels: 'cmyk' },
                            xyz: { channels: 3, labels: 'xyz' },
                            lab: { channels: 3, labels: 'lab' },
                            lch: { channels: 3, labels: 'lch' },
                            hex: { channels: 1, labels: ['hex'] },
                            keyword: { channels: 1, labels: ['keyword'] },
                            ansi16: { channels: 1, labels: ['ansi16'] },
                            ansi256: { channels: 1, labels: ['ansi256'] },
                            hcg: { channels: 3, labels: ['h', 'c', 'g'] },
                            apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
                            gray: { channels: 1, labels: ['gray'] },
                        })
                        for (var a in i)
                            if (i.hasOwnProperty(a)) {
                                if (!('channels' in i[a])) throw new Error('missing channels property: ' + a)
                                if (!('labels' in i[a])) throw new Error('missing channel labels property: ' + a)
                                if (i[a].labels.length !== i[a].channels)
                                    throw new Error('channel and label counts mismatch: ' + a)
                                var o = i[a].channels,
                                    s = i[a].labels
                                delete i[a].channels,
                                    delete i[a].labels,
                                    Object.defineProperty(i[a], 'channels', { value: o }),
                                    Object.defineProperty(i[a], 'labels', { value: s })
                            }
                        ;(i.rgb.hsl = function(t) {
                            var e,
                                n,
                                r = t[0] / 255,
                                i = t[1] / 255,
                                a = t[2] / 255,
                                o = Math.min(r, i, a),
                                s = Math.max(r, i, a),
                                l = s - o
                            return (
                                s === o
                                    ? (e = 0)
                                    : r === s
                                    ? (e = (i - a) / l)
                                    : i === s
                                    ? (e = 2 + (a - r) / l)
                                    : a === s && (e = 4 + (r - i) / l),
                                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                                (n = (o + s) / 2),
                                [e, 100 * (s === o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
                            )
                        }),
                            (i.rgb.hsv = function(t) {
                                var e,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o = t[0] / 255,
                                    s = t[1] / 255,
                                    l = t[2] / 255,
                                    u = Math.max(o, s, l),
                                    c = u - Math.min(o, s, l),
                                    h = function(t) {
                                        return (u - t) / 6 / c + 0.5
                                    }
                                return (
                                    0 === c
                                        ? (i = a = 0)
                                        : ((a = c / u),
                                          (e = h(o)),
                                          (n = h(s)),
                                          (r = h(l)),
                                          o === u
                                              ? (i = r - n)
                                              : s === u
                                              ? (i = 1 / 3 + e - r)
                                              : l === u && (i = 2 / 3 + n - e),
                                          i < 0 ? (i += 1) : i > 1 && (i -= 1)),
                                    [360 * i, 100 * a, 100 * u]
                                )
                            }),
                            (i.rgb.hwb = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2]
                                return [
                                    i.rgb.hsl(t)[0],
                                    (1 / 255) * Math.min(e, Math.min(n, r)) * 100,
                                    100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
                                ]
                            }),
                            (i.rgb.cmyk = function(t) {
                                var e,
                                    n = t[0] / 255,
                                    r = t[1] / 255,
                                    i = t[2] / 255
                                return [
                                    100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0),
                                    100 * ((1 - r - e) / (1 - e) || 0),
                                    100 * ((1 - i - e) / (1 - e) || 0),
                                    100 * e,
                                ]
                            }),
                            (i.rgb.keyword = function(t) {
                                var r = n[t]
                                if (r) return r
                                var i,
                                    a,
                                    o,
                                    s = 1 / 0
                                for (var l in e)
                                    if (e.hasOwnProperty(l)) {
                                        var u = e[l],
                                            c =
                                                ((a = t),
                                                (o = u),
                                                Math.pow(a[0] - o[0], 2) +
                                                    Math.pow(a[1] - o[1], 2) +
                                                    Math.pow(a[2] - o[2], 2))
                                        c < s && ((s = c), (i = l))
                                    }
                                return i
                            }),
                            (i.keyword.rgb = function(t) {
                                return e[t]
                            }),
                            (i.rgb.xyz = function(t) {
                                var e = t[0] / 255,
                                    n = t[1] / 255,
                                    r = t[2] / 255
                                return [
                                    100 *
                                        (0.4124 * (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
                                            0.3576 *
                                                (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) +
                                            0.1805 *
                                                (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92)),
                                    100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
                                    100 * (0.0193 * e + 0.1192 * n + 0.9505 * r),
                                ]
                            }),
                            (i.rgb.lab = function(t) {
                                var e = i.rgb.xyz(t),
                                    n = e[0],
                                    r = e[1],
                                    a = e[2]
                                return (
                                    (r /= 100),
                                    (a /= 108.883),
                                    (n = (n /= 95.047) > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
                                    [
                                        116 * (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16,
                                        500 * (n - r),
                                        200 * (r - (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116)),
                                    ]
                                )
                            }),
                            (i.hsl.rgb = function(t) {
                                var e,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o = t[0] / 360,
                                    s = t[1] / 100,
                                    l = t[2] / 100
                                if (0 === s) return [(a = 255 * l), a, a]
                                ;(e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)), (i = [0, 0, 0])
                                for (var u = 0; u < 3; u++)
                                    (r = o + (1 / 3) * -(u - 1)) < 0 && r++,
                                        r > 1 && r--,
                                        (a =
                                            6 * r < 1
                                                ? e + 6 * (n - e) * r
                                                : 2 * r < 1
                                                ? n
                                                : 3 * r < 2
                                                ? e + (n - e) * (2 / 3 - r) * 6
                                                : e),
                                        (i[u] = 255 * a)
                                return i
                            }),
                            (i.hsl.hsv = function(t) {
                                var e = t[0],
                                    n = t[1] / 100,
                                    r = t[2] / 100,
                                    i = n,
                                    a = Math.max(r, 0.01)
                                return (
                                    (n *= (r *= 2) <= 1 ? r : 2 - r),
                                    (i *= a <= 1 ? a : 2 - a),
                                    [e, 100 * (0 === r ? (2 * i) / (a + i) : (2 * n) / (r + n)), ((r + n) / 2) * 100]
                                )
                            }),
                            (i.hsv.rgb = function(t) {
                                var e = t[0] / 60,
                                    n = t[1] / 100,
                                    r = t[2] / 100,
                                    i = Math.floor(e) % 6,
                                    a = e - Math.floor(e),
                                    o = 255 * r * (1 - n),
                                    s = 255 * r * (1 - n * a),
                                    l = 255 * r * (1 - n * (1 - a))
                                switch (((r *= 255), i)) {
                                    case 0:
                                        return [r, l, o]
                                    case 1:
                                        return [s, r, o]
                                    case 2:
                                        return [o, r, l]
                                    case 3:
                                        return [o, s, r]
                                    case 4:
                                        return [l, o, r]
                                    case 5:
                                        return [r, o, s]
                                }
                            }),
                            (i.hsv.hsl = function(t) {
                                var e,
                                    n,
                                    r,
                                    i = t[0],
                                    a = t[1] / 100,
                                    o = t[2] / 100,
                                    s = Math.max(o, 0.01)
                                return (
                                    (r = (2 - a) * o),
                                    (n = a * s),
                                    [i, 100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
                                )
                            }),
                            (i.hwb.rgb = function(t) {
                                var e,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l = t[0] / 360,
                                    u = t[1] / 100,
                                    c = t[2] / 100,
                                    h = u + c
                                switch (
                                    (h > 1 && ((u /= h), (c /= h)),
                                    (r = 6 * l - (e = Math.floor(6 * l))),
                                    0 != (1 & e) && (r = 1 - r),
                                    (i = u + r * ((n = 1 - c) - u)),
                                    e)
                                ) {
                                    default:
                                    case 6:
                                    case 0:
                                        ;(a = n), (o = i), (s = u)
                                        break
                                    case 1:
                                        ;(a = i), (o = n), (s = u)
                                        break
                                    case 2:
                                        ;(a = u), (o = n), (s = i)
                                        break
                                    case 3:
                                        ;(a = u), (o = i), (s = n)
                                        break
                                    case 4:
                                        ;(a = i), (o = u), (s = n)
                                        break
                                    case 5:
                                        ;(a = n), (o = u), (s = i)
                                }
                                return [255 * a, 255 * o, 255 * s]
                            }),
                            (i.cmyk.rgb = function(t) {
                                var e = t[0] / 100,
                                    n = t[1] / 100,
                                    r = t[2] / 100,
                                    i = t[3] / 100
                                return [
                                    255 * (1 - Math.min(1, e * (1 - i) + i)),
                                    255 * (1 - Math.min(1, n * (1 - i) + i)),
                                    255 * (1 - Math.min(1, r * (1 - i) + i)),
                                ]
                            }),
                            (i.xyz.rgb = function(t) {
                                var e,
                                    n,
                                    r,
                                    i = t[0] / 100,
                                    a = t[1] / 100,
                                    o = t[2] / 100
                                return (
                                    (n = -0.9689 * i + 1.8758 * a + 0.0415 * o),
                                    (r = 0.0557 * i + -0.204 * a + 1.057 * o),
                                    (e =
                                        (e = 3.2406 * i + -1.5372 * a + -0.4986 * o) > 0.0031308
                                            ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                                            : 12.92 * e),
                                    (n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
                                    (r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
                                    [
                                        255 * (e = Math.min(Math.max(0, e), 1)),
                                        255 * (n = Math.min(Math.max(0, n), 1)),
                                        255 * (r = Math.min(Math.max(0, r), 1)),
                                    ]
                                )
                            }),
                            (i.xyz.lab = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2]
                                return (
                                    (n /= 100),
                                    (r /= 108.883),
                                    (e = (e /= 95.047) > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
                                    [
                                        116 * (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16,
                                        500 * (e - n),
                                        200 * (n - (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
                                    ]
                                )
                            }),
                            (i.lab.xyz = function(t) {
                                var e,
                                    n,
                                    r,
                                    i = t[0]
                                ;(e = t[1] / 500 + (n = (i + 16) / 116)), (r = n - t[2] / 200)
                                var a = Math.pow(n, 3),
                                    o = Math.pow(e, 3),
                                    s = Math.pow(r, 3)
                                return (
                                    (n = a > 0.008856 ? a : (n - 16 / 116) / 7.787),
                                    (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
                                    (r = s > 0.008856 ? s : (r - 16 / 116) / 7.787),
                                    [(e *= 95.047), (n *= 100), (r *= 108.883)]
                                )
                            }),
                            (i.lab.lch = function(t) {
                                var e,
                                    n = t[0],
                                    r = t[1],
                                    i = t[2]
                                return (
                                    (e = (360 * Math.atan2(i, r)) / 2 / Math.PI) < 0 && (e += 360),
                                    [n, Math.sqrt(r * r + i * i), e]
                                )
                            }),
                            (i.lch.lab = function(t) {
                                var e,
                                    n = t[0],
                                    r = t[1]
                                return (e = (t[2] / 360) * 2 * Math.PI), [n, r * Math.cos(e), r * Math.sin(e)]
                            }),
                            (i.rgb.ansi16 = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2],
                                    a = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2]
                                if (0 === (a = Math.round(a / 50))) return 30
                                var o =
                                    30 + ((Math.round(r / 255) << 2) | (Math.round(n / 255) << 1) | Math.round(e / 255))
                                return 2 === a && (o += 60), o
                            }),
                            (i.hsv.ansi16 = function(t) {
                                return i.rgb.ansi16(i.hsv.rgb(t), t[2])
                            }),
                            (i.rgb.ansi256 = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2]
                                return e === n && n === r
                                    ? e < 8
                                        ? 16
                                        : e > 248
                                        ? 231
                                        : Math.round(((e - 8) / 247) * 24) + 232
                                    : 16 +
                                          36 * Math.round((e / 255) * 5) +
                                          6 * Math.round((n / 255) * 5) +
                                          Math.round((r / 255) * 5)
                            }),
                            (i.ansi16.rgb = function(t) {
                                var e = t % 10
                                if (0 === e || 7 === e) return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e]
                                var n = 0.5 * (1 + ~~(t > 50))
                                return [(1 & e) * n * 255, ((e >> 1) & 1) * n * 255, ((e >> 2) & 1) * n * 255]
                            }),
                            (i.ansi256.rgb = function(t) {
                                if (t >= 232) {
                                    var e = 10 * (t - 232) + 8
                                    return [e, e, e]
                                }
                                var n
                                return (
                                    (t -= 16),
                                    [
                                        (Math.floor(t / 36) / 5) * 255,
                                        (Math.floor((n = t % 36) / 6) / 5) * 255,
                                        ((n % 6) / 5) * 255,
                                    ]
                                )
                            }),
                            (i.rgb.hex = function(t) {
                                var e = (
                                    ((255 & Math.round(t[0])) << 16) +
                                    ((255 & Math.round(t[1])) << 8) +
                                    (255 & Math.round(t[2]))
                                )
                                    .toString(16)
                                    .toUpperCase()
                                return '000000'.substring(e.length) + e
                            }),
                            (i.hex.rgb = function(t) {
                                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
                                if (!e) return [0, 0, 0]
                                var n = e[0]
                                3 === e[0].length &&
                                    (n = n
                                        .split('')
                                        .map(function(t) {
                                            return t + t
                                        })
                                        .join(''))
                                var r = parseInt(n, 16)
                                return [(r >> 16) & 255, (r >> 8) & 255, 255 & r]
                            }),
                            (i.rgb.hcg = function(t) {
                                var e,
                                    n = t[0] / 255,
                                    r = t[1] / 255,
                                    i = t[2] / 255,
                                    a = Math.max(Math.max(n, r), i),
                                    o = Math.min(Math.min(n, r), i),
                                    s = a - o
                                return (
                                    (e =
                                        s <= 0
                                            ? 0
                                            : a === n
                                            ? ((r - i) / s) % 6
                                            : a === r
                                            ? 2 + (i - n) / s
                                            : 4 + (n - r) / s + 4),
                                    (e /= 6),
                                    [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                                )
                            }),
                            (i.hsl.hcg = function(t) {
                                var e = t[1] / 100,
                                    n = t[2] / 100,
                                    r = 1,
                                    i = 0
                                return (
                                    (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (i = (n - 0.5 * r) / (1 - r)),
                                    [t[0], 100 * r, 100 * i]
                                )
                            }),
                            (i.hsv.hcg = function(t) {
                                var e = t[1] / 100,
                                    n = t[2] / 100,
                                    r = e * n,
                                    i = 0
                                return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
                            }),
                            (i.hcg.rgb = function(t) {
                                var e = t[0] / 360,
                                    n = t[1] / 100,
                                    r = t[2] / 100
                                if (0 === n) return [255 * r, 255 * r, 255 * r]
                                var i,
                                    a = [0, 0, 0],
                                    o = (e % 1) * 6,
                                    s = o % 1,
                                    l = 1 - s
                                switch (Math.floor(o)) {
                                    case 0:
                                        ;(a[0] = 1), (a[1] = s), (a[2] = 0)
                                        break
                                    case 1:
                                        ;(a[0] = l), (a[1] = 1), (a[2] = 0)
                                        break
                                    case 2:
                                        ;(a[0] = 0), (a[1] = 1), (a[2] = s)
                                        break
                                    case 3:
                                        ;(a[0] = 0), (a[1] = l), (a[2] = 1)
                                        break
                                    case 4:
                                        ;(a[0] = s), (a[1] = 0), (a[2] = 1)
                                        break
                                    default:
                                        ;(a[0] = 1), (a[1] = 0), (a[2] = l)
                                }
                                return (
                                    (i = (1 - n) * r),
                                    [255 * (n * a[0] + i), 255 * (n * a[1] + i), 255 * (n * a[2] + i)]
                                )
                            }),
                            (i.hcg.hsv = function(t) {
                                var e = t[1] / 100,
                                    n = e + (t[2] / 100) * (1 - e),
                                    r = 0
                                return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
                            }),
                            (i.hcg.hsl = function(t) {
                                var e = t[1] / 100,
                                    n = (t[2] / 100) * (1 - e) + 0.5 * e,
                                    r = 0
                                return (
                                    n > 0 && n < 0.5 ? (r = e / (2 * n)) : n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
                                    [t[0], 100 * r, 100 * n]
                                )
                            }),
                            (i.hcg.hwb = function(t) {
                                var e = t[1] / 100,
                                    n = e + (t[2] / 100) * (1 - e)
                                return [t[0], 100 * (n - e), 100 * (1 - n)]
                            }),
                            (i.hwb.hcg = function(t) {
                                var e = t[1] / 100,
                                    n = 1 - t[2] / 100,
                                    r = n - e,
                                    i = 0
                                return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
                            }),
                            (i.apple.rgb = function(t) {
                                return [(t[0] / 65535) * 255, (t[1] / 65535) * 255, (t[2] / 65535) * 255]
                            }),
                            (i.rgb.apple = function(t) {
                                return [(t[0] / 255) * 65535, (t[1] / 255) * 65535, (t[2] / 255) * 65535]
                            }),
                            (i.gray.rgb = function(t) {
                                return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255]
                            }),
                            (i.gray.hsl = i.gray.hsv = function(t) {
                                return [0, 0, t[0]]
                            }),
                            (i.gray.hwb = function(t) {
                                return [0, 100, t[0]]
                            }),
                            (i.gray.cmyk = function(t) {
                                return [0, 0, 0, t[0]]
                            }),
                            (i.gray.lab = function(t) {
                                return [t[0], 0, 0]
                            }),
                            (i.gray.hex = function(t) {
                                var e = 255 & Math.round((t[0] / 100) * 255),
                                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase()
                                return '000000'.substring(n.length) + n
                            }),
                            (i.rgb.gray = function(t) {
                                return [((t[0] + t[1] + t[2]) / 3 / 255) * 100]
                            })
                    })
                function r(t) {
                    var e = (function() {
                            for (var t = {}, e = Object.keys(n), r = e.length, i = 0; i < r; i++)
                                t[e[i]] = { distance: -1, parent: null }
                            return t
                        })(),
                        r = [t]
                    for (e[t].distance = 0; r.length; )
                        for (var i = r.pop(), a = Object.keys(n[i]), o = a.length, s = 0; s < o; s++) {
                            var l = a[s],
                                u = e[l]
                            ;-1 === u.distance && ((u.distance = e[i].distance + 1), (u.parent = i), r.unshift(l))
                        }
                    return e
                }
                function i(t, e) {
                    return function(n) {
                        return e(t(n))
                    }
                }
                function a(t, e) {
                    for (var r = [e[t].parent, t], a = n[e[t].parent][t], o = e[t].parent; e[o].parent; )
                        r.unshift(e[o].parent), (a = i(n[e[o].parent][o], a)), (o = e[o].parent)
                    return (a.conversion = r), a
                }
                n.rgb,
                    n.hsl,
                    n.hsv,
                    n.hwb,
                    n.cmyk,
                    n.xyz,
                    n.lab,
                    n.lch,
                    n.hex,
                    n.keyword,
                    n.ansi16,
                    n.ansi256,
                    n.hcg,
                    n.apple,
                    n.gray
                var o = {}
                Object.keys(n).forEach(function(t) {
                    ;(o[t] = {}),
                        Object.defineProperty(o[t], 'channels', { value: n[t].channels }),
                        Object.defineProperty(o[t], 'labels', { value: n[t].labels })
                    var e = (function(t) {
                        for (var e = r(t), n = {}, i = Object.keys(e), o = i.length, s = 0; s < o; s++) {
                            var l = i[s]
                            null !== e[l].parent && (n[l] = a(l, e))
                        }
                        return n
                    })(t)
                    Object.keys(e).forEach(function(n) {
                        var r = e[n]
                        ;(o[t][n] = (function(t) {
                            var e = function(e) {
                                if (null == e) return e
                                arguments.length > 1 && (e = Array.prototype.slice.call(arguments))
                                var n = t(e)
                                if ('object' == typeof n)
                                    for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i])
                                return n
                            }
                            return 'conversion' in t && (e.conversion = t.conversion), e
                        })(r)),
                            (o[t][n].raw = (function(t) {
                                var e = function(e) {
                                    return null == e
                                        ? e
                                        : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                                }
                                return 'conversion' in t && (e.conversion = t.conversion), e
                            })(r))
                    })
                })
                var s = o,
                    l = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    },
                    u = {
                        getRgba: c,
                        getHsla: h,
                        getRgb: function(t) {
                            var e = c(t)
                            return e && e.slice(0, 3)
                        },
                        getHsl: function(t) {
                            var e = h(t)
                            return e && e.slice(0, 3)
                        },
                        getHwb: d,
                        getAlpha: function(t) {
                            var e = c(t)
                            return e || (e = h(t)) || (e = d(t)) ? e[3] : void 0
                        },
                        hexString: function(t, e) {
                            return (
                                (e = void 0 !== e && 3 === t.length ? e : t[3]),
                                '#' + m(t[0]) + m(t[1]) + m(t[2]) + (e >= 0 && e < 1 ? m(Math.round(255 * e)) : '')
                            )
                        },
                        rgbString: function(t, e) {
                            return e < 1 || (t[3] && t[3] < 1)
                                ? f(t, e)
                                : 'rgb(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')'
                        },
                        rgbaString: f,
                        percentString: function(t, e) {
                            if (e < 1 || (t[3] && t[3] < 1)) return g(t, e)
                            var n = Math.round((t[0] / 255) * 100),
                                r = Math.round((t[1] / 255) * 100),
                                i = Math.round((t[2] / 255) * 100)
                            return 'rgb(' + n + '%, ' + r + '%, ' + i + '%)'
                        },
                        percentaString: g,
                        hslString: function(t, e) {
                            return e < 1 || (t[3] && t[3] < 1)
                                ? p(t, e)
                                : 'hsl(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%)'
                        },
                        hslaString: p,
                        hwbString: function(t, e) {
                            return (
                                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                                'hwb(' +
                                    t[0] +
                                    ', ' +
                                    t[1] +
                                    '%, ' +
                                    t[2] +
                                    '%' +
                                    (void 0 !== e && 1 !== e ? ', ' + e : '') +
                                    ')'
                            )
                        },
                        keyword: function(t) {
                            return b[t.slice(0, 3)]
                        },
                    }
                function c(t) {
                    if (t) {
                        var e = [0, 0, 0],
                            n = 1,
                            r = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                            i = ''
                        if (r) {
                            i = (r = r[1])[3]
                            for (var a = 0; a < e.length; a++) e[a] = parseInt(r[a] + r[a], 16)
                            i && (n = Math.round((parseInt(i + i, 16) / 255) * 100) / 100)
                        } else if ((r = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
                            for (i = r[2], r = r[1], a = 0; a < e.length; a++)
                                e[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16)
                            i && (n = Math.round((parseInt(i, 16) / 255) * 100) / 100)
                        } else if (
                            (r = t.match(
                                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                            ))
                        ) {
                            for (a = 0; a < e.length; a++) e[a] = parseInt(r[a + 1])
                            n = parseFloat(r[4])
                        } else if (
                            (r = t.match(
                                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                            ))
                        ) {
                            for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(r[a + 1]))
                            n = parseFloat(r[4])
                        } else if ((r = t.match(/(\w+)/))) {
                            if ('transparent' == r[1]) return [0, 0, 0, 0]
                            if (!(e = l[r[1]])) return
                        }
                        for (a = 0; a < e.length; a++) e[a] = v(e[a], 0, 255)
                        return (n = n || 0 == n ? v(n, 0, 1) : 1), (e[3] = n), e
                    }
                }
                function h(t) {
                    if (t) {
                        var e = t.match(
                            /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                        )
                        if (e) {
                            var n = parseFloat(e[4])
                            return [
                                v(parseInt(e[1]), 0, 360),
                                v(parseFloat(e[2]), 0, 100),
                                v(parseFloat(e[3]), 0, 100),
                                v(isNaN(n) ? 1 : n, 0, 1),
                            ]
                        }
                    }
                }
                function d(t) {
                    if (t) {
                        var e = t.match(
                            /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                        )
                        if (e) {
                            var n = parseFloat(e[4])
                            return [
                                v(parseInt(e[1]), 0, 360),
                                v(parseFloat(e[2]), 0, 100),
                                v(parseFloat(e[3]), 0, 100),
                                v(isNaN(n) ? 1 : n, 0, 1),
                            ]
                        }
                    }
                }
                function f(t, e) {
                    return (
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                        'rgba(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + e + ')'
                    )
                }
                function g(t, e) {
                    return (
                        'rgba(' +
                        Math.round((t[0] / 255) * 100) +
                        '%, ' +
                        Math.round((t[1] / 255) * 100) +
                        '%, ' +
                        Math.round((t[2] / 255) * 100) +
                        '%, ' +
                        (e || t[3] || 1) +
                        ')'
                    )
                }
                function p(t, e) {
                    return (
                        void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                        'hsla(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%, ' + e + ')'
                    )
                }
                function v(t, e, n) {
                    return Math.min(Math.max(e, t), n)
                }
                function m(t) {
                    var e = t.toString(16).toUpperCase()
                    return e.length < 2 ? '0' + e : e
                }
                var b = {}
                for (var y in l) b[l[y]] = y
                var x = function(t) {
                    return t instanceof x
                        ? t
                        : this instanceof x
                        ? ((this.valid = !1),
                          (this.values = {
                              rgb: [0, 0, 0],
                              hsl: [0, 0, 0],
                              hsv: [0, 0, 0],
                              hwb: [0, 0, 0],
                              cmyk: [0, 0, 0, 0],
                              alpha: 1,
                          }),
                          void ('string' == typeof t
                              ? (e = u.getRgba(t))
                                  ? this.setValues('rgb', e)
                                  : (e = u.getHsla(t))
                                  ? this.setValues('hsl', e)
                                  : (e = u.getHwb(t)) && this.setValues('hwb', e)
                              : 'object' == typeof t &&
                                (void 0 !== (e = t).r || void 0 !== e.red
                                    ? this.setValues('rgb', e)
                                    : void 0 !== e.l || void 0 !== e.lightness
                                    ? this.setValues('hsl', e)
                                    : void 0 !== e.v || void 0 !== e.value
                                    ? this.setValues('hsv', e)
                                    : void 0 !== e.w || void 0 !== e.whiteness
                                    ? this.setValues('hwb', e)
                                    : (void 0 === e.c && void 0 === e.cyan) || this.setValues('cmyk', e))))
                        : new x(t)
                    var e
                }
                ;(x.prototype = {
                    isValid: function() {
                        return this.valid
                    },
                    rgb: function() {
                        return this.setSpace('rgb', arguments)
                    },
                    hsl: function() {
                        return this.setSpace('hsl', arguments)
                    },
                    hsv: function() {
                        return this.setSpace('hsv', arguments)
                    },
                    hwb: function() {
                        return this.setSpace('hwb', arguments)
                    },
                    cmyk: function() {
                        return this.setSpace('cmyk', arguments)
                    },
                    rgbArray: function() {
                        return this.values.rgb
                    },
                    hslArray: function() {
                        return this.values.hsl
                    },
                    hsvArray: function() {
                        return this.values.hsv
                    },
                    hwbArray: function() {
                        var t = this.values
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    },
                    cmykArray: function() {
                        return this.values.cmyk
                    },
                    rgbaArray: function() {
                        var t = this.values
                        return t.rgb.concat([t.alpha])
                    },
                    hslaArray: function() {
                        var t = this.values
                        return t.hsl.concat([t.alpha])
                    },
                    alpha: function(t) {
                        return void 0 === t ? this.values.alpha : (this.setValues('alpha', t), this)
                    },
                    red: function(t) {
                        return this.setChannel('rgb', 0, t)
                    },
                    green: function(t) {
                        return this.setChannel('rgb', 1, t)
                    },
                    blue: function(t) {
                        return this.setChannel('rgb', 2, t)
                    },
                    hue: function(t) {
                        return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel('hsl', 0, t)
                    },
                    saturation: function(t) {
                        return this.setChannel('hsl', 1, t)
                    },
                    lightness: function(t) {
                        return this.setChannel('hsl', 2, t)
                    },
                    saturationv: function(t) {
                        return this.setChannel('hsv', 1, t)
                    },
                    whiteness: function(t) {
                        return this.setChannel('hwb', 1, t)
                    },
                    blackness: function(t) {
                        return this.setChannel('hwb', 2, t)
                    },
                    value: function(t) {
                        return this.setChannel('hsv', 2, t)
                    },
                    cyan: function(t) {
                        return this.setChannel('cmyk', 0, t)
                    },
                    magenta: function(t) {
                        return this.setChannel('cmyk', 1, t)
                    },
                    yellow: function(t) {
                        return this.setChannel('cmyk', 2, t)
                    },
                    black: function(t) {
                        return this.setChannel('cmyk', 3, t)
                    },
                    hexString: function() {
                        return u.hexString(this.values.rgb)
                    },
                    rgbString: function() {
                        return u.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function() {
                        return u.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function() {
                        return u.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function() {
                        return u.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function() {
                        return u.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function() {
                        return u.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function() {
                        return u.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function() {
                        var t = this.values.rgb
                        return (t[0] << 16) | (t[1] << 8) | t[2]
                    },
                    luminosity: function() {
                        for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                            var r = t[n] / 255
                            e[n] = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
                        }
                        return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]
                    },
                    contrast: function(t) {
                        var e = this.luminosity(),
                            n = t.luminosity()
                        return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05)
                    },
                    level: function(t) {
                        var e = this.contrast(t)
                        return e >= 7.1 ? 'AAA' : e >= 4.5 ? 'AA' : ''
                    },
                    dark: function() {
                        var t = this.values.rgb
                        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                    },
                    light: function() {
                        return !this.dark()
                    },
                    negate: function() {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e]
                        return this.setValues('rgb', t), this
                    },
                    lighten: function(t) {
                        var e = this.values.hsl
                        return (e[2] += e[2] * t), this.setValues('hsl', e), this
                    },
                    darken: function(t) {
                        var e = this.values.hsl
                        return (e[2] -= e[2] * t), this.setValues('hsl', e), this
                    },
                    saturate: function(t) {
                        var e = this.values.hsl
                        return (e[1] += e[1] * t), this.setValues('hsl', e), this
                    },
                    desaturate: function(t) {
                        var e = this.values.hsl
                        return (e[1] -= e[1] * t), this.setValues('hsl', e), this
                    },
                    whiten: function(t) {
                        var e = this.values.hwb
                        return (e[1] += e[1] * t), this.setValues('hwb', e), this
                    },
                    blacken: function(t) {
                        var e = this.values.hwb
                        return (e[2] += e[2] * t), this.setValues('hwb', e), this
                    },
                    greyscale: function() {
                        var t = this.values.rgb,
                            e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]
                        return this.setValues('rgb', [e, e, e]), this
                    },
                    clearer: function(t) {
                        var e = this.values.alpha
                        return this.setValues('alpha', e - e * t), this
                    },
                    opaquer: function(t) {
                        var e = this.values.alpha
                        return this.setValues('alpha', e + e * t), this
                    },
                    rotate: function(t) {
                        var e = this.values.hsl,
                            n = (e[0] + t) % 360
                        return (e[0] = n < 0 ? 360 + n : n), this.setValues('hsl', e), this
                    },
                    mix: function(t, e) {
                        var n = t,
                            r = void 0 === e ? 0.5 : e,
                            i = 2 * r - 1,
                            a = this.alpha() - n.alpha(),
                            o = ((i * a == -1 ? i : (i + a) / (1 + i * a)) + 1) / 2,
                            s = 1 - o
                        return this.rgb(
                            o * this.red() + s * n.red(),
                            o * this.green() + s * n.green(),
                            o * this.blue() + s * n.blue()
                        ).alpha(this.alpha() * r + n.alpha() * (1 - r))
                    },
                    toJSON: function() {
                        return this.rgb()
                    },
                    clone: function() {
                        var t,
                            e,
                            n = new x(),
                            r = this.values,
                            i = n.values
                        for (var a in r)
                            r.hasOwnProperty(a) &&
                                ((t = r[a]),
                                '[object Array]' === (e = {}.toString.call(t))
                                    ? (i[a] = t.slice(0))
                                    : '[object Number]' === e
                                    ? (i[a] = t)
                                    : console.error('unexpected color value:', t))
                        return n
                    },
                }),
                    (x.prototype.spaces = {
                        rgb: ['red', 'green', 'blue'],
                        hsl: ['hue', 'saturation', 'lightness'],
                        hsv: ['hue', 'saturation', 'value'],
                        hwb: ['hue', 'whiteness', 'blackness'],
                        cmyk: ['cyan', 'magenta', 'yellow', 'black'],
                    }),
                    (x.prototype.maxes = {
                        rgb: [255, 255, 255],
                        hsl: [360, 100, 100],
                        hsv: [360, 100, 100],
                        hwb: [360, 100, 100],
                        cmyk: [100, 100, 100, 100],
                    }),
                    (x.prototype.getValues = function(t) {
                        for (var e = this.values, n = {}, r = 0; r < t.length; r++) n[t.charAt(r)] = e[t][r]
                        return 1 !== e.alpha && (n.a = e.alpha), n
                    }),
                    (x.prototype.setValues = function(t, e) {
                        var n,
                            r,
                            i = this.values,
                            a = this.spaces,
                            o = this.maxes,
                            l = 1
                        if (((this.valid = !0), 'alpha' === t)) l = e
                        else if (e.length) (i[t] = e.slice(0, t.length)), (l = e[t.length])
                        else if (void 0 !== e[t.charAt(0)]) {
                            for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)]
                            l = e.a
                        } else if (void 0 !== e[a[t][0]]) {
                            var u = a[t]
                            for (n = 0; n < t.length; n++) i[t][n] = e[u[n]]
                            l = e.alpha
                        }
                        if (((i.alpha = Math.max(0, Math.min(1, void 0 === l ? i.alpha : l))), 'alpha' === t)) return !1
                        for (n = 0; n < t.length; n++)
                            (r = Math.max(0, Math.min(o[t][n], i[t][n]))), (i[t][n] = Math.round(r))
                        for (var c in a) c !== t && (i[c] = s[t][c](i[t]))
                        return !0
                    }),
                    (x.prototype.setSpace = function(t, e) {
                        var n = e[0]
                        return void 0 === n
                            ? this.getValues(t)
                            : ('number' == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
                    }),
                    (x.prototype.setChannel = function(t, e, n) {
                        var r = this.values[t]
                        return void 0 === n ? r[e] : (n === r[e] || ((r[e] = n), this.setValues(t, r)), this)
                    }),
                    'undefined' != typeof window && (window.Color = x)
                var _,
                    w = x,
                    k = {
                        noop: function() {},
                        uid:
                            ((_ = 0),
                            function() {
                                return _++
                            }),
                        isNullOrUndef: function(t) {
                            return null == t
                        },
                        isArray: function(t) {
                            if (Array.isArray && Array.isArray(t)) return !0
                            var e = Object.prototype.toString.call(t)
                            return '[object' === e.substr(0, 7) && 'Array]' === e.substr(-6)
                        },
                        isObject: function(t) {
                            return null !== t && '[object Object]' === Object.prototype.toString.call(t)
                        },
                        isFinite: function(t) {
                            return ('number' == typeof t || t instanceof Number) && isFinite(t)
                        },
                        valueOrDefault: function(t, e) {
                            return void 0 === t ? e : t
                        },
                        valueAtIndexOrDefault: function(t, e, n) {
                            return k.valueOrDefault(k.isArray(t) ? t[e] : t, n)
                        },
                        callback: function(t, e, n) {
                            if (t && 'function' == typeof t.call) return t.apply(n, e)
                        },
                        each: function(t, e, n, r) {
                            var i, a, o
                            if (k.isArray(t))
                                if (((a = t.length), r)) for (i = a - 1; i >= 0; i--) e.call(n, t[i], i)
                                else for (i = 0; i < a; i++) e.call(n, t[i], i)
                            else if (k.isObject(t))
                                for (a = (o = Object.keys(t)).length, i = 0; i < a; i++) e.call(n, t[o[i]], o[i])
                        },
                        arrayEquals: function(t, e) {
                            var n, r, i, a
                            if (!t || !e || t.length !== e.length) return !1
                            for (n = 0, r = t.length; n < r; ++n)
                                if (((i = t[n]), (a = e[n]), i instanceof Array && a instanceof Array)) {
                                    if (!k.arrayEquals(i, a)) return !1
                                } else if (i !== a) return !1
                            return !0
                        },
                        clone: function(t) {
                            if (k.isArray(t)) return t.map(k.clone)
                            if (k.isObject(t)) {
                                for (var e = {}, n = Object.keys(t), r = n.length, i = 0; i < r; ++i)
                                    e[n[i]] = k.clone(t[n[i]])
                                return e
                            }
                            return t
                        },
                        _merger: function(t, e, n, r) {
                            var i = e[t],
                                a = n[t]
                            k.isObject(i) && k.isObject(a) ? k.merge(i, a, r) : (e[t] = k.clone(a))
                        },
                        _mergerIf: function(t, e, n) {
                            var r = e[t],
                                i = n[t]
                            k.isObject(r) && k.isObject(i)
                                ? k.mergeIf(r, i)
                                : e.hasOwnProperty(t) || (e[t] = k.clone(i))
                        },
                        merge: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l = k.isArray(e) ? e : [e],
                                u = l.length
                            if (!k.isObject(t)) return t
                            for (r = (n = n || {}).merger || k._merger, i = 0; i < u; ++i)
                                if (((e = l[i]), k.isObject(e)))
                                    for (s = 0, o = (a = Object.keys(e)).length; s < o; ++s) r(a[s], t, e, n)
                            return t
                        },
                        mergeIf: function(t, e) {
                            return k.merge(t, e, { merger: k._mergerIf })
                        },
                        extend:
                            Object.assign ||
                            function(t) {
                                return k.merge(t, [].slice.call(arguments, 1), {
                                    merger: function(t, e, n) {
                                        e[t] = n[t]
                                    },
                                })
                            },
                        inherits: function(t) {
                            var e = this,
                                n =
                                    t && t.hasOwnProperty('constructor')
                                        ? t.constructor
                                        : function() {
                                              return e.apply(this, arguments)
                                          },
                                r = function() {
                                    this.constructor = n
                                }
                            return (
                                (r.prototype = e.prototype),
                                (n.prototype = new r()),
                                (n.extend = k.inherits),
                                t && k.extend(n.prototype, t),
                                (n.__super__ = e.prototype),
                                n
                            )
                        },
                        _deprecated: function(t, e, n, r) {
                            void 0 !== e &&
                                console.warn(t + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
                        },
                    },
                    M = k
                ;(k.callCallback = k.callback),
                    (k.indexOf = function(t, e, n) {
                        return Array.prototype.indexOf.call(t, e, n)
                    }),
                    (k.getValueOrDefault = k.valueOrDefault),
                    (k.getValueAtIndexOrDefault = k.valueAtIndexOrDefault)
                var S = {
                        linear: function(t) {
                            return t
                        },
                        easeInQuad: function(t) {
                            return t * t
                        },
                        easeOutQuad: function(t) {
                            return -t * (t - 2)
                        },
                        easeInOutQuad: function(t) {
                            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
                        },
                        easeInCubic: function(t) {
                            return t * t * t
                        },
                        easeOutCubic: function(t) {
                            return (t -= 1) * t * t + 1
                        },
                        easeInOutCubic: function(t) {
                            return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
                        },
                        easeInQuart: function(t) {
                            return t * t * t * t
                        },
                        easeOutQuart: function(t) {
                            return -((t -= 1) * t * t * t - 1)
                        },
                        easeInOutQuart: function(t) {
                            return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                        },
                        easeInQuint: function(t) {
                            return t * t * t * t * t
                        },
                        easeOutQuint: function(t) {
                            return (t -= 1) * t * t * t * t + 1
                        },
                        easeInOutQuint: function(t) {
                            return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)
                        },
                        easeInSine: function(t) {
                            return 1 - Math.cos(t * (Math.PI / 2))
                        },
                        easeOutSine: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        easeInOutSine: function(t) {
                            return -0.5 * (Math.cos(Math.PI * t) - 1)
                        },
                        easeInExpo: function(t) {
                            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                        },
                        easeOutExpo: function(t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        easeInOutExpo: function(t) {
                            return 0 === t
                                ? 0
                                : 1 === t
                                ? 1
                                : (t /= 0.5) < 1
                                ? 0.5 * Math.pow(2, 10 * (t - 1))
                                : 0.5 * (2 - Math.pow(2, -10 * --t))
                        },
                        easeInCirc: function(t) {
                            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                        },
                        easeOutCirc: function(t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        },
                        easeInOutCirc: function(t) {
                            return (t /= 0.5) < 1
                                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        },
                        easeInElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1
                            return 0 === t
                                ? 0
                                : 1 === t
                                ? 1
                                : (n || (n = 0.3),
                                  r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                                  -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n))
                        },
                        easeOutElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1
                            return 0 === t
                                ? 0
                                : 1 === t
                                ? 1
                                : (n || (n = 0.3),
                                  r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                                  r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1)
                        },
                        easeInOutElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1
                            return 0 === t
                                ? 0
                                : 2 == (t /= 0.5)
                                ? 1
                                : (n || (n = 0.45),
                                  r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                                  t < 1
                                      ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5
                                      : r *
                                            Math.pow(2, -10 * (t -= 1)) *
                                            Math.sin(((t - e) * (2 * Math.PI)) / n) *
                                            0.5 +
                                        1)
                        },
                        easeInBack: function(t) {
                            var e = 1.70158
                            return t * t * ((e + 1) * t - e)
                        },
                        easeOutBack: function(t) {
                            var e = 1.70158
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        },
                        easeInOutBack: function(t) {
                            var e = 1.70158
                            return (t /= 0.5) < 1
                                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                        },
                        easeInBounce: function(t) {
                            return 1 - S.easeOutBounce(1 - t)
                        },
                        easeOutBounce: function(t) {
                            return t < 1 / 2.75
                                ? 7.5625 * t * t
                                : t < 2 / 2.75
                                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                                : t < 2.5 / 2.75
                                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                        },
                        easeInOutBounce: function(t) {
                            return t < 0.5 ? 0.5 * S.easeInBounce(2 * t) : 0.5 * S.easeOutBounce(2 * t - 1) + 0.5
                        },
                    },
                    C = { effects: S }
                M.easingEffects = S
                var A = Math.PI,
                    P = A / 180,
                    D = 2 * A,
                    I = A / 2,
                    T = A / 4,
                    L = (2 * A) / 3,
                    F = {
                        clear: function(t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        },
                        roundedRect: function(t, e, n, r, i, a) {
                            if (a) {
                                var o = Math.min(a, i / 2, r / 2),
                                    s = e + o,
                                    l = n + o,
                                    u = e + r - o,
                                    c = n + i - o
                                t.moveTo(e, l),
                                    s < u && l < c
                                        ? (t.arc(s, l, o, -A, -I),
                                          t.arc(u, l, o, -I, 0),
                                          t.arc(u, c, o, 0, I),
                                          t.arc(s, c, o, I, A))
                                        : s < u
                                        ? (t.moveTo(s, n), t.arc(u, l, o, -I, I), t.arc(s, l, o, I, A + I))
                                        : l < c
                                        ? (t.arc(s, l, o, -A, 0), t.arc(s, c, o, 0, A))
                                        : t.arc(s, l, o, -A, A),
                                    t.closePath(),
                                    t.moveTo(e, n)
                            } else t.rect(e, n, r, i)
                        },
                        drawPoint: function(t, e, n, r, i, a) {
                            var o,
                                s,
                                l,
                                u,
                                c,
                                h = (a || 0) * P
                            if (
                                e &&
                                'object' == typeof e &&
                                ('[object HTMLImageElement]' === (o = e.toString()) ||
                                    '[object HTMLCanvasElement]' === o)
                            )
                                return (
                                    t.save(),
                                    t.translate(r, i),
                                    t.rotate(h),
                                    t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                                    void t.restore()
                                )
                            if (!(isNaN(n) || n <= 0)) {
                                switch ((t.beginPath(), e)) {
                                    default:
                                        t.arc(r, i, n, 0, D), t.closePath()
                                        break
                                    case 'triangle':
                                        t.moveTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                                            (h += L),
                                            t.lineTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                                            (h += L),
                                            t.lineTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                                            t.closePath()
                                        break
                                    case 'rectRounded':
                                        ;(u = n - (c = 0.516 * n)),
                                            (s = Math.cos(h + T) * u),
                                            (l = Math.sin(h + T) * u),
                                            t.arc(r - s, i - l, c, h - A, h - I),
                                            t.arc(r + l, i - s, c, h - I, h),
                                            t.arc(r + s, i + l, c, h, h + I),
                                            t.arc(r - l, i + s, c, h + I, h + A),
                                            t.closePath()
                                        break
                                    case 'rect':
                                        if (!a) {
                                            ;(u = Math.SQRT1_2 * n), t.rect(r - u, i - u, 2 * u, 2 * u)
                                            break
                                        }
                                        h += T
                                    case 'rectRot':
                                        ;(s = Math.cos(h) * n),
                                            (l = Math.sin(h) * n),
                                            t.moveTo(r - s, i - l),
                                            t.lineTo(r + l, i - s),
                                            t.lineTo(r + s, i + l),
                                            t.lineTo(r - l, i + s),
                                            t.closePath()
                                        break
                                    case 'crossRot':
                                        h += T
                                    case 'cross':
                                        ;(s = Math.cos(h) * n),
                                            (l = Math.sin(h) * n),
                                            t.moveTo(r - s, i - l),
                                            t.lineTo(r + s, i + l),
                                            t.moveTo(r + l, i - s),
                                            t.lineTo(r - l, i + s)
                                        break
                                    case 'star':
                                        ;(s = Math.cos(h) * n),
                                            (l = Math.sin(h) * n),
                                            t.moveTo(r - s, i - l),
                                            t.lineTo(r + s, i + l),
                                            t.moveTo(r + l, i - s),
                                            t.lineTo(r - l, i + s),
                                            (h += T),
                                            (s = Math.cos(h) * n),
                                            (l = Math.sin(h) * n),
                                            t.moveTo(r - s, i - l),
                                            t.lineTo(r + s, i + l),
                                            t.moveTo(r + l, i - s),
                                            t.lineTo(r - l, i + s)
                                        break
                                    case 'line':
                                        ;(s = Math.cos(h) * n),
                                            (l = Math.sin(h) * n),
                                            t.moveTo(r - s, i - l),
                                            t.lineTo(r + s, i + l)
                                        break
                                    case 'dash':
                                        t.moveTo(r, i), t.lineTo(r + Math.cos(h) * n, i + Math.sin(h) * n)
                                }
                                t.fill(), t.stroke()
                            }
                        },
                        _isPointInArea: function(t, e) {
                            return (
                                t.x > e.left - 1e-6 &&
                                t.x < e.right + 1e-6 &&
                                t.y > e.top - 1e-6 &&
                                t.y < e.bottom + 1e-6
                            )
                        },
                        clipArea: function(t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        },
                        unclipArea: function(t) {
                            t.restore()
                        },
                        lineTo: function(t, e, n, r) {
                            var i = n.steppedLine
                            if (i) {
                                if ('middle' === i) {
                                    var a = (e.x + n.x) / 2
                                    t.lineTo(a, r ? n.y : e.y), t.lineTo(a, r ? e.y : n.y)
                                } else
                                    ('after' === i && !r) || ('after' !== i && r)
                                        ? t.lineTo(e.x, n.y)
                                        : t.lineTo(n.x, e.y)
                                t.lineTo(n.x, n.y)
                            } else
                                n.tension
                                    ? t.bezierCurveTo(
                                          r ? e.controlPointPreviousX : e.controlPointNextX,
                                          r ? e.controlPointPreviousY : e.controlPointNextY,
                                          r ? n.controlPointNextX : n.controlPointPreviousX,
                                          r ? n.controlPointNextY : n.controlPointPreviousY,
                                          n.x,
                                          n.y
                                      )
                                    : t.lineTo(n.x, n.y)
                        },
                    },
                    O = F
                ;(M.clear = F.clear),
                    (M.drawRoundedRectangle = function(t) {
                        t.beginPath(), F.roundedRect.apply(F, arguments)
                    })
                var z = {
                    _set: function(t, e) {
                        return M.merge(this[t] || (this[t] = {}), e)
                    },
                }
                z._set('global', {
                    defaultColor: 'rgba(0,0,0,0.1)',
                    defaultFontColor: '#666',
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: 'normal',
                    defaultLineHeight: 1.2,
                    showLines: !0,
                })
                var R = z,
                    E = M.valueOrDefault,
                    N = {
                        toLineHeight: function(t, e) {
                            var n = ('' + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/)
                            if (!n || 'normal' === n[1]) return 1.2 * e
                            switch (((t = +n[2]), n[3])) {
                                case 'px':
                                    return t
                                case '%':
                                    t /= 100
                            }
                            return e * t
                        },
                        toPadding: function(t) {
                            var e, n, r, i
                            return (
                                M.isObject(t)
                                    ? ((e = +t.top || 0), (n = +t.right || 0), (r = +t.bottom || 0), (i = +t.left || 0))
                                    : (e = n = r = i = +t || 0),
                                { top: e, right: n, bottom: r, left: i, height: e + r, width: i + n }
                            )
                        },
                        _parseFont: function(t) {
                            var e = R.global,
                                n = E(t.fontSize, e.defaultFontSize),
                                r = {
                                    family: E(t.fontFamily, e.defaultFontFamily),
                                    lineHeight: M.options.toLineHeight(E(t.lineHeight, e.defaultLineHeight), n),
                                    size: n,
                                    style: E(t.fontStyle, e.defaultFontStyle),
                                    weight: null,
                                    string: '',
                                }
                            return (
                                (r.string = (function(t) {
                                    return !t || M.isNullOrUndef(t.size) || M.isNullOrUndef(t.family)
                                        ? null
                                        : (t.style ? t.style + ' ' : '') +
                                              (t.weight ? t.weight + ' ' : '') +
                                              t.size +
                                              'px ' +
                                              t.family
                                })(r)),
                                r
                            )
                        },
                        resolve: function(t, e, n, r) {
                            var i,
                                a,
                                o,
                                s = !0
                            for (i = 0, a = t.length; i < a; ++i)
                                if (
                                    void 0 !== (o = t[i]) &&
                                    (void 0 !== e && 'function' == typeof o && ((o = o(e)), (s = !1)),
                                    void 0 !== n && M.isArray(o) && ((o = o[n]), (s = !1)),
                                    void 0 !== o)
                                )
                                    return r && !s && (r.cacheable = !1), o
                        },
                    },
                    B = {
                        _factorize: function(t) {
                            var e,
                                n = [],
                                r = Math.sqrt(t)
                            for (e = 1; e < r; e++) t % e == 0 && (n.push(e), n.push(t / e))
                            return (
                                r === (0 | r) && n.push(r),
                                n
                                    .sort(function(t, e) {
                                        return t - e
                                    })
                                    .pop(),
                                n
                            )
                        },
                        log10:
                            Math.log10 ||
                            function(t) {
                                var e = Math.log(t) * Math.LOG10E,
                                    n = Math.round(e)
                                return t === Math.pow(10, n) ? n : e
                            },
                    },
                    W = B
                M.log10 = B.log10
                var j = M,
                    V = C,
                    H = O,
                    q = N,
                    U = W,
                    $ = {
                        getRtlAdapter: function(t, e, n) {
                            return t
                                ? (function(t, e) {
                                      return {
                                          x: function(n) {
                                              return t + t + e - n
                                          },
                                          setWidth: function(t) {
                                              e = t
                                          },
                                          textAlign: function(t) {
                                              return 'center' === t ? t : 'right' === t ? 'left' : 'right'
                                          },
                                          xPlus: function(t, e) {
                                              return t - e
                                          },
                                          leftForLtr: function(t, e) {
                                              return t - e
                                          },
                                      }
                                  })(e, n)
                                : {
                                      x: function(t) {
                                          return t
                                      },
                                      setWidth: function(t) {},
                                      textAlign: function(t) {
                                          return t
                                      },
                                      xPlus: function(t, e) {
                                          return t + e
                                      },
                                      leftForLtr: function(t, e) {
                                          return t
                                      },
                                  }
                        },
                        overrideTextDirection: function(t, e) {
                            var n, r
                            ;('ltr' !== e && 'rtl' !== e) ||
                                ((r = [
                                    (n = t.canvas.style).getPropertyValue('direction'),
                                    n.getPropertyPriority('direction'),
                                ]),
                                n.setProperty('direction', e, 'important'),
                                (t.prevTextDirection = r))
                        },
                        restoreTextDirection: function(t) {
                            var e = t.prevTextDirection
                            void 0 !== e &&
                                (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]))
                        },
                    }
                ;(j.easing = V), (j.canvas = H), (j.options = q), (j.math = U), (j.rtl = $)
                var Y = function(t) {
                    j.extend(this, t), this.initialize.apply(this, arguments)
                }
                j.extend(Y.prototype, {
                    _type: void 0,
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this
                        return t._view || (t._view = j.extend({}, t._model)), (t._start = {}), t
                    },
                    transition: function(t) {
                        var e = this,
                            n = e._model,
                            r = e._start,
                            i = e._view
                        return n && 1 !== t
                            ? (i || (i = e._view = {}),
                              r || (r = e._start = {}),
                              (function(t, e, n, r) {
                                  var i,
                                      a,
                                      o,
                                      s,
                                      l,
                                      u,
                                      c,
                                      h,
                                      d,
                                      f = Object.keys(n)
                                  for (i = 0, a = f.length; i < a; ++i)
                                      if (
                                          ((u = n[(o = f[i])]),
                                          e.hasOwnProperty(o) || (e[o] = u),
                                          (s = e[o]) !== u && '_' !== o[0])
                                      ) {
                                          if ((t.hasOwnProperty(o) || (t[o] = s), (c = typeof u) == typeof (l = t[o])))
                                              if ('string' === c) {
                                                  if ((h = w(l)).valid && (d = w(u)).valid) {
                                                      e[o] = d.mix(h, r).rgbString()
                                                      continue
                                                  }
                                              } else if (j.isFinite(l) && j.isFinite(u)) {
                                                  e[o] = l + (u - l) * r
                                                  continue
                                              }
                                          e[o] = u
                                      }
                              })(r, i, n, t),
                              e)
                            : ((e._view = j.extend({}, n)), (e._start = null), e)
                    },
                    tooltipPosition: function() {
                        return { x: this._model.x, y: this._model.y }
                    },
                    hasValue: function() {
                        return j.isNumber(this._model.x) && j.isNumber(this._model.y)
                    },
                }),
                    (Y.extend = j.inherits)
                var G = Y,
                    K = G.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: '',
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null,
                    }),
                    Z = K
                Object.defineProperty(K.prototype, 'animationObject', {
                    get: function() {
                        return this
                    },
                }),
                    Object.defineProperty(K.prototype, 'chartInstance', {
                        get: function() {
                            return this.chart
                        },
                        set: function(t) {
                            this.chart = t
                        },
                    }),
                    R._set('global', {
                        animation: { duration: 1e3, easing: 'easeOutQuart', onProgress: j.noop, onComplete: j.noop },
                    })
                var X = {
                        animations: [],
                        request: null,
                        addAnimation: function(t, e, n, r) {
                            var i,
                                a,
                                o = this.animations
                            for (
                                e.chart = t,
                                    e.startTime = Date.now(),
                                    e.duration = n,
                                    r || (t.animating = !0),
                                    i = 0,
                                    a = o.length;
                                i < a;
                                ++i
                            )
                                if (o[i].chart === t) return void (o[i] = e)
                            o.push(e), 1 === o.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var e = j.findIndex(this.animations, function(e) {
                                return e.chart === t
                            })
                            ;-1 !== e && (this.animations.splice(e, 1), (t.animating = !1))
                        },
                        requestAnimationFrame: function() {
                            var t = this
                            null === t.request &&
                                (t.request = j.requestAnimFrame.call(window, function() {
                                    ;(t.request = null), t.startDigest()
                                }))
                        },
                        startDigest: function() {
                            this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
                        },
                        advance: function() {
                            for (var t, e, n, r, i = this.animations, a = 0; a < i.length; )
                                (e = (t = i[a]).chart),
                                    (n = t.numSteps),
                                    (r = Math.floor(((Date.now() - t.startTime) / t.duration) * n) + 1),
                                    (t.currentStep = Math.min(r, n)),
                                    j.callback(t.render, [e, t], e),
                                    j.callback(t.onAnimationProgress, [t], e),
                                    t.currentStep >= n
                                        ? (j.callback(t.onAnimationComplete, [t], e),
                                          (e.animating = !1),
                                          i.splice(a, 1))
                                        : ++a
                        },
                    },
                    J = j.options.resolve,
                    Q = ['push', 'pop', 'shift', 'splice', 'unshift']
                function tt(t, e) {
                    var n = t._chartjs
                    if (n) {
                        var r = n.listeners,
                            i = r.indexOf(e)
                        ;-1 !== i && r.splice(i, 1),
                            r.length > 0 ||
                                (Q.forEach(function(e) {
                                    delete t[e]
                                }),
                                delete t._chartjs)
                    }
                }
                var et = function(t, e) {
                    this.initialize(t, e)
                }
                j.extend(et.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    _datasetElementOptions: [
                        'backgroundColor',
                        'borderCapStyle',
                        'borderColor',
                        'borderDash',
                        'borderDashOffset',
                        'borderJoinStyle',
                        'borderWidth',
                    ],
                    _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
                    initialize: function(t, e) {
                        var n = this
                        ;(n.chart = t), (n.index = e), n.linkScales(), n.addElements(), (n._type = n.getMeta().type)
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this.getMeta(),
                            e = this.chart,
                            n = e.scales,
                            r = this.getDataset(),
                            i = e.options.scales
                        ;(null !== t.xAxisID && t.xAxisID in n && !r.xAxisID) ||
                            (t.xAxisID = r.xAxisID || i.xAxes[0].id),
                            (null !== t.yAxisID && t.yAxisID in n && !r.yAxisID) ||
                                (t.yAxisID = r.yAxisID || i.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    _getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    _getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    _getValueScale: function() {
                        return this.getScaleForId(this._getValueScaleId())
                    },
                    _getIndexScale: function() {
                        return this.getScaleForId(this._getIndexScaleId())
                    },
                    reset: function() {
                        this._update(!0)
                    },
                    destroy: function() {
                        this._data && tt(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this.datasetElementType
                        return t && new t({ _chart: this.chart, _datasetIndex: this.index })
                    },
                    createMetaData: function(t) {
                        var e = this.dataElementType
                        return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t })
                    },
                    addElements: function() {
                        var t,
                            e,
                            n = this.getMeta(),
                            r = this.getDataset().data || [],
                            i = n.data
                        for (t = 0, e = r.length; t < e; ++t) i[t] = i[t] || this.createMetaData(t)
                        n.dataset = n.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t)
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t,
                            e,
                            n = this,
                            r = n.getDataset(),
                            i = r.data || (r.data = [])
                        n._data !== i &&
                            (n._data && tt(n._data, n),
                            i &&
                                Object.isExtensible(i) &&
                                ((e = n),
                                (t = i)._chartjs
                                    ? t._chartjs.listeners.push(e)
                                    : (Object.defineProperty(t, '_chartjs', {
                                          configurable: !0,
                                          enumerable: !1,
                                          value: { listeners: [e] },
                                      }),
                                      Q.forEach(function(e) {
                                          var n = 'onData' + e.charAt(0).toUpperCase() + e.slice(1),
                                              r = t[e]
                                          Object.defineProperty(t, e, {
                                              configurable: !0,
                                              enumerable: !1,
                                              value: function() {
                                                  var e = Array.prototype.slice.call(arguments),
                                                      i = r.apply(this, e)
                                                  return (
                                                      j.each(t._chartjs.listeners, function(t) {
                                                          'function' == typeof t[n] && t[n].apply(t, e)
                                                      }),
                                                      i
                                                  )
                                              },
                                          })
                                      }))),
                            (n._data = i)),
                            n.resyncElements()
                    },
                    _configure: function() {
                        this._config = j.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                            merger: function(t, e, n) {
                                '_meta' !== t && 'data' !== t && j._merger(t, e, n)
                            },
                        })
                    },
                    _update: function(t) {
                        this._configure(), (this._cachedDataOpts = null), this.update(t)
                    },
                    update: j.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), n = e.data || [], r = n.length, i = 0; i < r; ++i)
                            n[i].transition(t)
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            n = e.length,
                            r = 0
                        for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw()
                    },
                    getStyle: function(t) {
                        var e,
                            n = this.getMeta(),
                            r = n.dataset
                        return (
                            this._configure(),
                            r && void 0 === t
                                ? (e = this._resolveDatasetElementOptions(r || {}))
                                : ((t = t || 0), (e = this._resolveDataElementOptions(n.data[t] || {}, t))),
                            (!1 !== e.fill && null !== e.fill) || (e.backgroundColor = e.borderColor),
                            e
                        )
                    },
                    _resolveDatasetElementOptions: function(t, e) {
                        var n,
                            r,
                            i,
                            a,
                            o = this,
                            s = o.chart,
                            l = o._config,
                            u = t.custom || {},
                            c = s.options.elements[o.datasetElementType.prototype._type] || {},
                            h = o._datasetElementOptions,
                            d = {},
                            f = { chart: s, dataset: o.getDataset(), datasetIndex: o.index, hover: e }
                        for (n = 0, r = h.length; n < r; ++n)
                            (i = h[n]),
                                (a = e ? 'hover' + i.charAt(0).toUpperCase() + i.slice(1) : i),
                                (d[i] = J([u[a], l[a], c[a]], f))
                        return d
                    },
                    _resolveDataElementOptions: function(t, e) {
                        var n = this,
                            r = t && t.custom,
                            i = n._cachedDataOpts
                        if (i && !r) return i
                        var a,
                            o,
                            s,
                            l,
                            u = n.chart,
                            c = n._config,
                            h = u.options.elements[n.dataElementType.prototype._type] || {},
                            d = n._dataElementOptions,
                            f = {},
                            g = { chart: u, dataIndex: e, dataset: n.getDataset(), datasetIndex: n.index },
                            p = { cacheable: !r }
                        if (((r = r || {}), j.isArray(d)))
                            for (o = 0, s = d.length; o < s; ++o) f[(l = d[o])] = J([r[l], c[l], h[l]], g, e, p)
                        else
                            for (o = 0, s = (a = Object.keys(d)).length; o < s; ++o)
                                f[(l = a[o])] = J([r[l], c[d[l]], c[l], h[l]], g, e, p)
                        return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
                    },
                    removeHoverStyle: function(t) {
                        j.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            r = t.custom || {},
                            i = t._model,
                            a = j.getHoverColor
                        ;(t.$previousStyle = {
                            backgroundColor: i.backgroundColor,
                            borderColor: i.borderColor,
                            borderWidth: i.borderWidth,
                        }),
                            (i.backgroundColor = J(
                                [r.hoverBackgroundColor, e.hoverBackgroundColor, a(i.backgroundColor)],
                                void 0,
                                n
                            )),
                            (i.borderColor = J([r.hoverBorderColor, e.hoverBorderColor, a(i.borderColor)], void 0, n)),
                            (i.borderWidth = J([r.hoverBorderWidth, e.hoverBorderWidth, i.borderWidth], void 0, n))
                    },
                    _removeDatasetHoverStyle: function() {
                        var t = this.getMeta().dataset
                        t && this.removeHoverStyle(t)
                    },
                    _setDatasetHoverStyle: function() {
                        var t,
                            e,
                            n,
                            r,
                            i,
                            a,
                            o = this.getMeta().dataset,
                            s = {}
                        if (o) {
                            for (
                                a = o._model,
                                    i = this._resolveDatasetElementOptions(o, !0),
                                    t = 0,
                                    e = (r = Object.keys(i)).length;
                                t < e;
                                ++t
                            )
                                (s[(n = r[t])] = a[n]), (a[n] = i[n])
                            o.$previousStyle = s
                        }
                    },
                    resyncElements: function() {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            n = t.data.length,
                            r = e.length
                        r < n ? t.data.splice(r, n - r) : r > n && this.insertElements(n, r - n)
                    },
                    insertElements: function(t, e) {
                        for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                    },
                    onDataPush: function() {
                        var t = arguments.length
                        this.insertElements(this.getDataset().data.length - t, t)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    },
                }),
                    (et.extend = j.inherits)
                var nt = et,
                    rt = 2 * Math.PI
                function it(t, e) {
                    var n = e.startAngle,
                        r = e.endAngle,
                        i = e.pixelMargin,
                        a = i / e.outerRadius,
                        o = e.x,
                        s = e.y
                    t.beginPath(),
                        t.arc(o, s, e.outerRadius, n - a, r + a),
                        e.innerRadius > i
                            ? ((a = i / e.innerRadius), t.arc(o, s, e.innerRadius - i, r + a, n - a, !0))
                            : t.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2),
                        t.closePath(),
                        t.clip()
                }
                function at(t, e, n) {
                    var r = 'inner' === e.borderAlign
                    r
                        ? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = 'round'))
                        : ((t.lineWidth = e.borderWidth), (t.lineJoin = 'bevel')),
                        n.fullCircles &&
                            (function(t, e, n, r) {
                                var i,
                                    a = n.endAngle
                                for (
                                    r &&
                                        ((n.endAngle = n.startAngle + rt),
                                        it(t, n),
                                        (n.endAngle = a),
                                        n.endAngle === n.startAngle &&
                                            n.fullCircles &&
                                            ((n.endAngle += rt), n.fullCircles--)),
                                        t.beginPath(),
                                        t.arc(n.x, n.y, n.innerRadius, n.startAngle + rt, n.startAngle, !0),
                                        i = 0;
                                    i < n.fullCircles;
                                    ++i
                                )
                                    t.stroke()
                                for (
                                    t.beginPath(),
                                        t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + rt),
                                        i = 0;
                                    i < n.fullCircles;
                                    ++i
                                )
                                    t.stroke()
                            })(t, e, n, r),
                        r && it(t, n),
                        t.beginPath(),
                        t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
                        t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
                        t.closePath(),
                        t.stroke()
                }
                R._set('global', {
                    elements: {
                        arc: {
                            backgroundColor: R.global.defaultColor,
                            borderColor: '#fff',
                            borderWidth: 2,
                            borderAlign: 'center',
                        },
                    },
                })
                var ot = G.extend({
                        _type: 'arc',
                        inLabelRange: function(t) {
                            var e = this._view
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, e) {
                            var n = this._view
                            if (n) {
                                for (
                                    var r = j.getAngleFromPoint(n, { x: t, y: e }),
                                        i = r.angle,
                                        a = r.distance,
                                        o = n.startAngle,
                                        s = n.endAngle;
                                    s < o;

                                )
                                    s += rt
                                for (; i > s; ) i -= rt
                                for (; i < o; ) i += rt
                                var l = i >= o && i <= s,
                                    u = a >= n.innerRadius && a <= n.outerRadius
                                return l && u
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                n = (t.innerRadius + t.outerRadius) / 2
                            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n }
                        },
                        getArea: function() {
                            var t = this._view
                            return (
                                Math.PI *
                                ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                                (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                            )
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius
                            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n }
                        },
                        draw: function() {
                            var t,
                                e = this._chart.ctx,
                                n = this._view,
                                r = 'inner' === n.borderAlign ? 0.33 : 0,
                                i = {
                                    x: n.x,
                                    y: n.y,
                                    innerRadius: n.innerRadius,
                                    outerRadius: Math.max(n.outerRadius - r, 0),
                                    pixelMargin: r,
                                    startAngle: n.startAngle,
                                    endAngle: n.endAngle,
                                    fullCircles: Math.floor(n.circumference / rt),
                                }
                            if (
                                (e.save(),
                                (e.fillStyle = n.backgroundColor),
                                (e.strokeStyle = n.borderColor),
                                i.fullCircles)
                            ) {
                                for (
                                    i.endAngle = i.startAngle + rt,
                                        e.beginPath(),
                                        e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                                        e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                                        e.closePath(),
                                        t = 0;
                                    t < i.fullCircles;
                                    ++t
                                )
                                    e.fill()
                                i.endAngle = i.startAngle + (n.circumference % rt)
                            }
                            e.beginPath(),
                                e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                                e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                                e.closePath(),
                                e.fill(),
                                n.borderWidth && at(e, n, i),
                                e.restore()
                        },
                    }),
                    st = j.valueOrDefault,
                    lt = R.global.defaultColor
                R._set('global', {
                    elements: {
                        line: {
                            tension: 0.4,
                            backgroundColor: lt,
                            borderWidth: 3,
                            borderColor: lt,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: 'miter',
                            capBezierPoints: !0,
                            fill: !0,
                        },
                    },
                })
                var ut = G.extend({
                        _type: 'line',
                        draw: function() {
                            var t,
                                e,
                                n,
                                r = this,
                                i = r._view,
                                a = r._chart.ctx,
                                o = i.spanGaps,
                                s = r._children.slice(),
                                l = R.global,
                                u = l.elements.line,
                                c = -1,
                                h = r._loop
                            if (s.length) {
                                if (r._loop) {
                                    for (t = 0; t < s.length; ++t)
                                        if (((e = j.previousItem(s, t)), !s[t]._view.skip && e._view.skip)) {
                                            ;(s = s.slice(t).concat(s.slice(0, t))), (h = o)
                                            break
                                        }
                                    h && s.push(s[0])
                                }
                                for (
                                    a.save(),
                                        a.lineCap = i.borderCapStyle || u.borderCapStyle,
                                        a.setLineDash && a.setLineDash(i.borderDash || u.borderDash),
                                        a.lineDashOffset = st(i.borderDashOffset, u.borderDashOffset),
                                        a.lineJoin = i.borderJoinStyle || u.borderJoinStyle,
                                        a.lineWidth = st(i.borderWidth, u.borderWidth),
                                        a.strokeStyle = i.borderColor || l.defaultColor,
                                        a.beginPath(),
                                        (n = s[0]._view).skip || (a.moveTo(n.x, n.y), (c = 0)),
                                        t = 1;
                                    t < s.length;
                                    ++t
                                )
                                    (n = s[t]._view),
                                        (e = -1 === c ? j.previousItem(s, t) : s[c]),
                                        n.skip ||
                                            ((c !== t - 1 && !o) || -1 === c
                                                ? a.moveTo(n.x, n.y)
                                                : j.canvas.lineTo(a, e._view, n),
                                            (c = t))
                                h && a.closePath(), a.stroke(), a.restore()
                            }
                        },
                    }),
                    ct = j.valueOrDefault,
                    ht = R.global.defaultColor
                function dt(t) {
                    var e = this._view
                    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                }
                R._set('global', {
                    elements: {
                        point: {
                            radius: 3,
                            pointStyle: 'circle',
                            backgroundColor: ht,
                            borderColor: ht,
                            borderWidth: 1,
                            hitRadius: 1,
                            hoverRadius: 4,
                            hoverBorderWidth: 1,
                        },
                    },
                })
                var ft = G.extend({
                        _type: 'point',
                        inRange: function(t, e) {
                            var n = this._view
                            return (
                                !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                            )
                        },
                        inLabelRange: dt,
                        inXRange: dt,
                        inYRange: function(t) {
                            var e = this._view
                            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                        },
                        getCenterPoint: function() {
                            var t = this._view
                            return { x: t.x, y: t.y }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view
                            return { x: t.x, y: t.y, padding: t.radius + t.borderWidth }
                        },
                        draw: function(t) {
                            var e = this._view,
                                n = this._chart.ctx,
                                r = e.pointStyle,
                                i = e.rotation,
                                a = e.radius,
                                o = e.x,
                                s = e.y,
                                l = R.global,
                                u = l.defaultColor
                            e.skip ||
                                ((void 0 === t || j.canvas._isPointInArea(e, t)) &&
                                    ((n.strokeStyle = e.borderColor || u),
                                    (n.lineWidth = ct(e.borderWidth, l.elements.point.borderWidth)),
                                    (n.fillStyle = e.backgroundColor || u),
                                    j.canvas.drawPoint(n, r, a, o, s, i)))
                        },
                    }),
                    gt = R.global.defaultColor
                function pt(t) {
                    return t && void 0 !== t.width
                }
                function vt(t) {
                    var e, n, r, i, a
                    return (
                        pt(t)
                            ? ((a = t.width / 2),
                              (e = t.x - a),
                              (n = t.x + a),
                              (r = Math.min(t.y, t.base)),
                              (i = Math.max(t.y, t.base)))
                            : ((a = t.height / 2),
                              (e = Math.min(t.x, t.base)),
                              (n = Math.max(t.x, t.base)),
                              (r = t.y - a),
                              (i = t.y + a)),
                        { left: e, top: r, right: n, bottom: i }
                    )
                }
                function mt(t, e, n) {
                    return t === e ? n : t === n ? e : t
                }
                function bt(t, e, n) {
                    var r,
                        i,
                        a,
                        o,
                        s = t.borderWidth,
                        l = (function(t) {
                            var e = t.borderSkipped,
                                n = {}
                            return e
                                ? (t.horizontal
                                      ? t.base > t.x && (e = mt(e, 'left', 'right'))
                                      : t.base < t.y && (e = mt(e, 'bottom', 'top')),
                                  (n[e] = !0),
                                  n)
                                : n
                        })(t)
                    return (
                        j.isObject(s)
                            ? ((r = +s.top || 0), (i = +s.right || 0), (a = +s.bottom || 0), (o = +s.left || 0))
                            : (r = i = a = o = +s || 0),
                        {
                            t: l.top || r < 0 ? 0 : r > n ? n : r,
                            r: l.right || i < 0 ? 0 : i > e ? e : i,
                            b: l.bottom || a < 0 ? 0 : a > n ? n : a,
                            l: l.left || o < 0 ? 0 : o > e ? e : o,
                        }
                    )
                }
                function yt(t, e, n) {
                    var r = null === e,
                        i = null === n,
                        a = !(!t || (r && i)) && vt(t)
                    return a && (r || (e >= a.left && e <= a.right)) && (i || (n >= a.top && n <= a.bottom))
                }
                R._set('global', {
                    elements: {
                        rectangle: { backgroundColor: gt, borderColor: gt, borderSkipped: 'bottom', borderWidth: 0 },
                    },
                })
                var xt = G.extend({
                        _type: 'rectangle',
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                n = (function(t) {
                                    var e = vt(t),
                                        n = e.right - e.left,
                                        r = e.bottom - e.top,
                                        i = bt(t, n / 2, r / 2)
                                    return {
                                        outer: { x: e.left, y: e.top, w: n, h: r },
                                        inner: { x: e.left + i.l, y: e.top + i.t, w: n - i.l - i.r, h: r - i.t - i.b },
                                    }
                                })(e),
                                r = n.outer,
                                i = n.inner
                            ;(t.fillStyle = e.backgroundColor),
                                t.fillRect(r.x, r.y, r.w, r.h),
                                (r.w === i.w && r.h === i.h) ||
                                    (t.save(),
                                    t.beginPath(),
                                    t.rect(r.x, r.y, r.w, r.h),
                                    t.clip(),
                                    (t.fillStyle = e.borderColor),
                                    t.rect(i.x, i.y, i.w, i.h),
                                    t.fill('evenodd'),
                                    t.restore())
                        },
                        height: function() {
                            var t = this._view
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            return yt(this._view, t, e)
                        },
                        inLabelRange: function(t, e) {
                            var n = this._view
                            return pt(n) ? yt(n, t, null) : yt(n, null, e)
                        },
                        inXRange: function(t) {
                            return yt(this._view, t, null)
                        },
                        inYRange: function(t) {
                            return yt(this._view, null, t)
                        },
                        getCenterPoint: function() {
                            var t,
                                e,
                                n = this._view
                            return (
                                pt(n) ? ((t = n.x), (e = (n.y + n.base) / 2)) : ((t = (n.x + n.base) / 2), (e = n.y)),
                                { x: t, y: e }
                            )
                        },
                        getArea: function() {
                            var t = this._view
                            return pt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view
                            return { x: t.x, y: t.y }
                        },
                    }),
                    _t = {},
                    wt = ot,
                    kt = ut,
                    Mt = ft,
                    St = xt
                ;(_t.Arc = wt), (_t.Line = kt), (_t.Point = Mt), (_t.Rectangle = St)
                var Ct = j._deprecated,
                    At = j.valueOrDefault
                function Pt(t, e, n) {
                    var r,
                        i,
                        a = n.barThickness,
                        o = e.stackCount,
                        s = e.pixels[t],
                        l = j.isNullOrUndef(a)
                            ? (function(t, e) {
                                  var n,
                                      r,
                                      i,
                                      a,
                                      o = t._length
                                  for (i = 1, a = e.length; i < a; ++i) o = Math.min(o, Math.abs(e[i] - e[i - 1]))
                                  for (i = 0, a = t.getTicks().length; i < a; ++i)
                                      (r = t.getPixelForTick(i)),
                                          (o = i > 0 ? Math.min(o, Math.abs(r - n)) : o),
                                          (n = r)
                                  return o
                              })(e.scale, e.pixels)
                            : -1
                    return (
                        j.isNullOrUndef(a)
                            ? ((r = l * n.categoryPercentage), (i = n.barPercentage))
                            : ((r = a * o), (i = 1)),
                        { chunk: r / o, ratio: i, start: s - r / 2 }
                    )
                }
                R._set('bar', {
                    hover: { mode: 'label' },
                    scales: {
                        xAxes: [{ type: 'category', offset: !0, gridLines: { offsetGridLines: !0 } }],
                        yAxes: [{ type: 'linear' }],
                    },
                }),
                    R._set('global', { datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } } })
                var Dt = nt.extend({
                        dataElementType: _t.Rectangle,
                        _dataElementOptions: [
                            'backgroundColor',
                            'borderColor',
                            'borderSkipped',
                            'borderWidth',
                            'barPercentage',
                            'barThickness',
                            'categoryPercentage',
                            'maxBarThickness',
                            'minBarLength',
                        ],
                        initialize: function() {
                            var t,
                                e,
                                n = this
                            nt.prototype.initialize.apply(n, arguments),
                                ((t = n.getMeta()).stack = n.getDataset().stack),
                                (t.bar = !0),
                                (e = n._getIndexScale().options),
                                Ct(
                                    'bar chart',
                                    e.barPercentage,
                                    'scales.[x/y]Axes.barPercentage',
                                    'dataset.barPercentage'
                                ),
                                Ct(
                                    'bar chart',
                                    e.barThickness,
                                    'scales.[x/y]Axes.barThickness',
                                    'dataset.barThickness'
                                ),
                                Ct(
                                    'bar chart',
                                    e.categoryPercentage,
                                    'scales.[x/y]Axes.categoryPercentage',
                                    'dataset.categoryPercentage'
                                ),
                                Ct(
                                    'bar chart',
                                    n._getValueScale().options.minBarLength,
                                    'scales.[x/y]Axes.minBarLength',
                                    'dataset.minBarLength'
                                ),
                                Ct(
                                    'bar chart',
                                    e.maxBarThickness,
                                    'scales.[x/y]Axes.maxBarThickness',
                                    'dataset.maxBarThickness'
                                )
                        },
                        update: function(t) {
                            var e,
                                n,
                                r = this.getMeta().data
                            for (this._ruler = this.getRuler(), e = 0, n = r.length; e < n; ++e)
                                this.updateElement(r[e], e, t)
                        },
                        updateElement: function(t, e, n) {
                            var r = this,
                                i = r.getMeta(),
                                a = r.getDataset(),
                                o = r._resolveDataElementOptions(t, e)
                            ;(t._xScale = r.getScaleForId(i.xAxisID)),
                                (t._yScale = r.getScaleForId(i.yAxisID)),
                                (t._datasetIndex = r.index),
                                (t._index = e),
                                (t._model = {
                                    backgroundColor: o.backgroundColor,
                                    borderColor: o.borderColor,
                                    borderSkipped: o.borderSkipped,
                                    borderWidth: o.borderWidth,
                                    datasetLabel: a.label,
                                    label: r.chart.data.labels[e],
                                }),
                                j.isArray(a.data[e]) && (t._model.borderSkipped = null),
                                r._updateElementGeometry(t, e, n, o),
                                t.pivot()
                        },
                        _updateElementGeometry: function(t, e, n, r) {
                            var i = this,
                                a = t._model,
                                o = i._getValueScale(),
                                s = o.getBasePixel(),
                                l = o.isHorizontal(),
                                u = i._ruler || i.getRuler(),
                                c = i.calculateBarValuePixels(i.index, e, r),
                                h = i.calculateBarIndexPixels(i.index, e, u, r)
                            ;(a.horizontal = l),
                                (a.base = n ? s : c.base),
                                (a.x = l ? (n ? s : c.head) : h.center),
                                (a.y = l ? h.center : n ? s : c.head),
                                (a.height = l ? h.size : void 0),
                                (a.width = l ? void 0 : h.size)
                        },
                        _getStacks: function(t) {
                            var e,
                                n,
                                r = this._getIndexScale(),
                                i = r._getMatchingVisibleMetas(this._type),
                                a = r.options.stacked,
                                o = i.length,
                                s = []
                            for (
                                e = 0;
                                e < o &&
                                ((n = i[e]),
                                (!1 === a || -1 === s.indexOf(n.stack) || (void 0 === a && void 0 === n.stack)) &&
                                    s.push(n.stack),
                                n.index !== t);
                                ++e
                            );
                            return s
                        },
                        getStackCount: function() {
                            return this._getStacks().length
                        },
                        getStackIndex: function(t, e) {
                            var n = this._getStacks(t),
                                r = void 0 !== e ? n.indexOf(e) : -1
                            return -1 === r ? n.length - 1 : r
                        },
                        getRuler: function() {
                            var t,
                                e,
                                n = this._getIndexScale(),
                                r = []
                            for (t = 0, e = this.getMeta().data.length; t < e; ++t)
                                r.push(n.getPixelForValue(null, t, this.index))
                            return {
                                pixels: r,
                                start: n._startPixel,
                                end: n._endPixel,
                                stackCount: this.getStackCount(),
                                scale: n,
                            }
                        },
                        calculateBarValuePixels: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u,
                                c = this.chart,
                                h = this._getValueScale(),
                                d = h.isHorizontal(),
                                f = c.data.datasets,
                                g = h._getMatchingVisibleMetas(this._type),
                                p = h._parseValue(f[t].data[e]),
                                v = n.minBarLength,
                                m = h.options.stacked,
                                b = this.getMeta().stack,
                                y = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                                x =
                                    void 0 === p.start
                                        ? p.end
                                        : p.max >= 0 && p.min >= 0
                                        ? p.max - p.min
                                        : p.min - p.max,
                                _ = g.length
                            if (m || (void 0 === m && void 0 !== b))
                                for (r = 0; r < _ && (i = g[r]).index !== t; ++r)
                                    i.stack === b &&
                                        ((a =
                                            void 0 === (u = h._parseValue(f[i.index].data[e])).start
                                                ? u.end
                                                : u.min >= 0 && u.max >= 0
                                                ? u.max
                                                : u.min),
                                        ((p.min < 0 && a < 0) || (p.max >= 0 && a > 0)) && (y += a))
                            return (
                                (o = h.getPixelForValue(y)),
                                (l = (s = h.getPixelForValue(y + x)) - o),
                                void 0 !== v &&
                                    Math.abs(l) < v &&
                                    ((l = v), (s = (x >= 0 && !d) || (x < 0 && d) ? o - v : o + v)),
                                { size: l, base: o, head: s, center: s + l / 2 }
                            )
                        },
                        calculateBarIndexPixels: function(t, e, n, r) {
                            var i =
                                    'flex' === r.barThickness
                                        ? (function(t, e, n) {
                                              var r,
                                                  i = e.pixels,
                                                  a = i[t],
                                                  o = t > 0 ? i[t - 1] : null,
                                                  s = t < i.length - 1 ? i[t + 1] : null,
                                                  l = n.categoryPercentage
                                              return (
                                                  null === o && (o = a - (null === s ? e.end - e.start : s - a)),
                                                  null === s && (s = a + a - o),
                                                  (r = a - ((a - Math.min(o, s)) / 2) * l),
                                                  {
                                                      chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                                                      ratio: n.barPercentage,
                                                      start: r,
                                                  }
                                              )
                                          })(e, n, r)
                                        : Pt(e, n, r),
                                a = this.getStackIndex(t, this.getMeta().stack),
                                o = i.start + i.chunk * a + i.chunk / 2,
                                s = Math.min(At(r.maxBarThickness, 1 / 0), i.chunk * i.ratio)
                            return { base: o - s / 2, head: o + s / 2, center: o, size: s }
                        },
                        draw: function() {
                            var t = this.chart,
                                e = this._getValueScale(),
                                n = this.getMeta().data,
                                r = this.getDataset(),
                                i = n.length,
                                a = 0
                            for (j.canvas.clipArea(t.ctx, t.chartArea); a < i; ++a) {
                                var o = e._parseValue(r.data[a])
                                isNaN(o.min) || isNaN(o.max) || n[a].draw()
                            }
                            j.canvas.unclipArea(t.ctx)
                        },
                        _resolveDataElementOptions: function() {
                            var t = this,
                                e = j.extend({}, nt.prototype._resolveDataElementOptions.apply(t, arguments)),
                                n = t._getIndexScale().options,
                                r = t._getValueScale().options
                            return (
                                (e.barPercentage = At(n.barPercentage, e.barPercentage)),
                                (e.barThickness = At(n.barThickness, e.barThickness)),
                                (e.categoryPercentage = At(n.categoryPercentage, e.categoryPercentage)),
                                (e.maxBarThickness = At(n.maxBarThickness, e.maxBarThickness)),
                                (e.minBarLength = At(r.minBarLength, e.minBarLength)),
                                e
                            )
                        },
                    }),
                    It = j.valueOrDefault,
                    Tt = j.options.resolve
                R._set('bubble', {
                    hover: { mode: 'single' },
                    scales: {
                        xAxes: [{ type: 'linear', position: 'bottom', id: 'x-axis-0' }],
                        yAxes: [{ type: 'linear', position: 'left', id: 'y-axis-0' }],
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ''
                            },
                            label: function(t, e) {
                                var n = e.datasets[t.datasetIndex].label || '',
                                    r = e.datasets[t.datasetIndex].data[t.index]
                                return n + ': (' + t.xLabel + ', ' + t.yLabel + ', ' + r.r + ')'
                            },
                        },
                    },
                })
                var Lt = nt.extend({
                        dataElementType: _t.Point,
                        _dataElementOptions: [
                            'backgroundColor',
                            'borderColor',
                            'borderWidth',
                            'hoverBackgroundColor',
                            'hoverBorderColor',
                            'hoverBorderWidth',
                            'hoverRadius',
                            'hitRadius',
                            'pointStyle',
                            'rotation',
                        ],
                        update: function(t) {
                            var e = this,
                                n = e.getMeta().data
                            j.each(n, function(n, r) {
                                e.updateElement(n, r, t)
                            })
                        },
                        updateElement: function(t, e, n) {
                            var r = this,
                                i = r.getMeta(),
                                a = t.custom || {},
                                o = r.getScaleForId(i.xAxisID),
                                s = r.getScaleForId(i.yAxisID),
                                l = r._resolveDataElementOptions(t, e),
                                u = r.getDataset().data[e],
                                c = r.index,
                                h = n
                                    ? o.getPixelForDecimal(0.5)
                                    : o.getPixelForValue('object' == typeof u ? u : NaN, e, c),
                                d = n ? s.getBasePixel() : s.getPixelForValue(u, e, c)
                            ;(t._xScale = o),
                                (t._yScale = s),
                                (t._options = l),
                                (t._datasetIndex = c),
                                (t._index = e),
                                (t._model = {
                                    backgroundColor: l.backgroundColor,
                                    borderColor: l.borderColor,
                                    borderWidth: l.borderWidth,
                                    hitRadius: l.hitRadius,
                                    pointStyle: l.pointStyle,
                                    rotation: l.rotation,
                                    radius: n ? 0 : l.radius,
                                    skip: a.skip || isNaN(h) || isNaN(d),
                                    x: h,
                                    y: d,
                                }),
                                t.pivot()
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                n = t._options,
                                r = j.getHoverColor
                            ;(t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius,
                            }),
                                (e.backgroundColor = It(n.hoverBackgroundColor, r(n.backgroundColor))),
                                (e.borderColor = It(n.hoverBorderColor, r(n.borderColor))),
                                (e.borderWidth = It(n.hoverBorderWidth, n.borderWidth)),
                                (e.radius = n.radius + n.hoverRadius)
                        },
                        _resolveDataElementOptions: function(t, e) {
                            var n = this,
                                r = n.chart,
                                i = n.getDataset(),
                                a = t.custom || {},
                                o = i.data[e] || {},
                                s = nt.prototype._resolveDataElementOptions.apply(n, arguments),
                                l = { chart: r, dataIndex: e, dataset: i, datasetIndex: n.index }
                            return (
                                n._cachedDataOpts === s && (s = j.extend({}, s)),
                                (s.radius = Tt(
                                    [a.radius, o.r, n._config.radius, r.options.elements.point.radius],
                                    l,
                                    e
                                )),
                                s
                            )
                        },
                    }),
                    Ft = j.valueOrDefault,
                    Ot = Math.PI,
                    zt = 2 * Ot,
                    Rt = Ot / 2
                R._set('doughnut', {
                    animation: { animateRotate: !0, animateScale: !1 },
                    hover: { mode: 'single' },
                    legendCallback: function(t) {
                        var e,
                            n,
                            r,
                            i = document.createElement('ul'),
                            a = t.data,
                            o = a.datasets,
                            s = a.labels
                        if ((i.setAttribute('class', t.id + '-legend'), o.length))
                            for (e = 0, n = o[0].data.length; e < n; ++e)
                                ((r = i.appendChild(document.createElement('li'))).appendChild(
                                    document.createElement('span')
                                ).style.backgroundColor = o[0].backgroundColor[e]),
                                    s[e] && r.appendChild(document.createTextNode(s[e]))
                        return i.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data
                                return e.labels.length && e.datasets.length
                                    ? e.labels.map(function(n, r) {
                                          var i = t.getDatasetMeta(0),
                                              a = i.controller.getStyle(r)
                                          return {
                                              text: n,
                                              fillStyle: a.backgroundColor,
                                              strokeStyle: a.borderColor,
                                              lineWidth: a.borderWidth,
                                              hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                                              index: r,
                                          }
                                      })
                                    : []
                            },
                        },
                        onClick: function(t, e) {
                            var n,
                                r,
                                i,
                                a = e.index,
                                o = this.chart
                            for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                                (i = o.getDatasetMeta(n)).data[a] && (i.data[a].hidden = !i.data[a].hidden)
                            o.update()
                        },
                    },
                    cutoutPercentage: 50,
                    rotation: -Rt,
                    circumference: zt,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ''
                            },
                            label: function(t, e) {
                                var n = e.labels[t.index],
                                    r = ': ' + e.datasets[t.datasetIndex].data[t.index]
                                return j.isArray(n) ? ((n = n.slice())[0] += r) : (n += r), n
                            },
                        },
                    },
                })
                var Et = nt.extend({
                    dataElementType: _t.Arc,
                    linkScales: j.noop,
                    _dataElementOptions: [
                        'backgroundColor',
                        'borderColor',
                        'borderWidth',
                        'borderAlign',
                        'hoverBackgroundColor',
                        'hoverBorderColor',
                        'hoverBorderWidth',
                    ],
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e
                        return e
                    },
                    update: function(t) {
                        var e,
                            n,
                            r,
                            i,
                            a = this,
                            o = a.chart,
                            s = o.chartArea,
                            l = o.options,
                            u = 1,
                            c = 1,
                            h = 0,
                            d = 0,
                            f = a.getMeta(),
                            g = f.data,
                            p = l.cutoutPercentage / 100 || 0,
                            v = l.circumference,
                            m = a._getRingWeight(a.index)
                        if (v < zt) {
                            var b = l.rotation % zt,
                                y = (b += b >= Ot ? -zt : b < -Ot ? zt : 0) + v,
                                x = Math.cos(b),
                                _ = Math.sin(b),
                                w = Math.cos(y),
                                k = Math.sin(y),
                                M = (b <= 0 && y >= 0) || y >= zt,
                                S = (b <= Rt && y >= Rt) || y >= zt + Rt,
                                C = (b <= -Rt && y >= -Rt) || y >= Ot + Rt,
                                A = b === -Ot || y >= Ot ? -1 : Math.min(x, x * p, w, w * p),
                                P = C ? -1 : Math.min(_, _ * p, k, k * p),
                                D = M ? 1 : Math.max(x, x * p, w, w * p),
                                I = S ? 1 : Math.max(_, _ * p, k, k * p)
                            ;(u = (D - A) / 2), (c = (I - P) / 2), (h = -(D + A) / 2), (d = -(I + P) / 2)
                        }
                        for (r = 0, i = g.length; r < i; ++r) g[r]._options = a._resolveDataElementOptions(g[r], r)
                        for (
                            o.borderWidth = a.getMaxBorderWidth(),
                                e = (s.right - s.left - o.borderWidth) / u,
                                n = (s.bottom - s.top - o.borderWidth) / c,
                                o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
                                o.innerRadius = Math.max(o.outerRadius * p, 0),
                                o.radiusLength =
                                    (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1),
                                o.offsetX = h * o.outerRadius,
                                o.offsetY = d * o.outerRadius,
                                f.total = a.calculateTotal(),
                                a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index),
                                a.innerRadius = Math.max(a.outerRadius - o.radiusLength * m, 0),
                                r = 0,
                                i = g.length;
                            r < i;
                            ++r
                        )
                            a.updateElement(g[r], r, t)
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            i = r.chart,
                            a = i.chartArea,
                            o = i.options,
                            s = o.animation,
                            l = (a.left + a.right) / 2,
                            u = (a.top + a.bottom) / 2,
                            c = o.rotation,
                            h = o.rotation,
                            d = r.getDataset(),
                            f =
                                (n && s.animateRotate) || t.hidden
                                    ? 0
                                    : r.calculateCircumference(d.data[e]) * (o.circumference / zt),
                            g = n && s.animateScale ? 0 : r.innerRadius,
                            p = n && s.animateScale ? 0 : r.outerRadius,
                            v = t._options || {}
                        j.extend(t, {
                            _datasetIndex: r.index,
                            _index: e,
                            _model: {
                                backgroundColor: v.backgroundColor,
                                borderColor: v.borderColor,
                                borderWidth: v.borderWidth,
                                borderAlign: v.borderAlign,
                                x: l + i.offsetX,
                                y: u + i.offsetY,
                                startAngle: c,
                                endAngle: h,
                                circumference: f,
                                outerRadius: p,
                                innerRadius: g,
                                label: j.valueAtIndexOrDefault(d.label, e, i.data.labels[e]),
                            },
                        })
                        var m = t._model
                        ;(n && s.animateRotate) ||
                            ((m.startAngle = 0 === e ? o.rotation : r.getMeta().data[e - 1]._model.endAngle),
                            (m.endAngle = m.startAngle + m.circumference)),
                            t.pivot()
                    },
                    calculateTotal: function() {
                        var t,
                            e = this.getDataset(),
                            n = this.getMeta(),
                            r = 0
                        return (
                            j.each(n.data, function(n, i) {
                                ;(t = e.data[i]), isNaN(t) || n.hidden || (r += Math.abs(t))
                            }),
                            r
                        )
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total
                        return e > 0 && !isNaN(t) ? zt * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        var e,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s,
                            l,
                            u = 0,
                            c = this.chart
                        if (!t)
                            for (e = 0, n = c.data.datasets.length; e < n; ++e)
                                if (c.isDatasetVisible(e)) {
                                    ;(t = (r = c.getDatasetMeta(e)).data), e !== this.index && (a = r.controller)
                                    break
                                }
                        if (!t) return 0
                        for (e = 0, n = t.length; e < n; ++e)
                            (i = t[e]),
                                a ? (a._configure(), (o = a._resolveDataElementOptions(i, e))) : (o = i._options),
                                'inner' !== o.borderAlign &&
                                    ((s = o.borderWidth), (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u))
                        return u
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = j.getHoverColor
                        ;(t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                        }),
                            (e.backgroundColor = Ft(n.hoverBackgroundColor, r(n.backgroundColor))),
                            (e.borderColor = Ft(n.hoverBorderColor, r(n.borderColor))),
                            (e.borderWidth = Ft(n.hoverBorderWidth, n.borderWidth))
                    },
                    _getRingWeightOffset: function(t) {
                        for (var e = 0, n = 0; n < t; ++n)
                            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n))
                        return e
                    },
                    _getRingWeight: function(t) {
                        return Math.max(Ft(this.chart.data.datasets[t].weight, 1), 0)
                    },
                    _getVisibleDatasetWeightTotal: function() {
                        return this._getRingWeightOffset(this.chart.data.datasets.length)
                    },
                })
                R._set('horizontalBar', {
                    hover: { mode: 'index', axis: 'y' },
                    scales: {
                        xAxes: [{ type: 'linear', position: 'bottom' }],
                        yAxes: [{ type: 'category', position: 'left', offset: !0, gridLines: { offsetGridLines: !0 } }],
                    },
                    elements: { rectangle: { borderSkipped: 'left' } },
                    tooltips: { mode: 'index', axis: 'y' },
                }),
                    R._set('global', { datasets: { horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 } } })
                var Nt = Dt.extend({
                        _getValueScaleId: function() {
                            return this.getMeta().xAxisID
                        },
                        _getIndexScaleId: function() {
                            return this.getMeta().yAxisID
                        },
                    }),
                    Bt = j.valueOrDefault,
                    Wt = j.options.resolve,
                    jt = j.canvas._isPointInArea
                function Vt(t, e) {
                    var n = (t && t.options.ticks) || {},
                        r = n.reverse,
                        i = void 0 === n.min ? e : 0,
                        a = void 0 === n.max ? e : 0
                    return { start: r ? a : i, end: r ? i : a }
                }
                function Ht(t, e, n) {
                    var r = n / 2,
                        i = Vt(t, r),
                        a = Vt(e, r)
                    return { top: a.end, right: i.end, bottom: a.start, left: i.start }
                }
                function qt(t) {
                    var e, n, r, i
                    return (
                        j.isObject(t)
                            ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
                            : (e = n = r = i = t),
                        { top: e, right: n, bottom: r, left: i }
                    )
                }
                R._set('line', {
                    showLines: !0,
                    spanGaps: !1,
                    hover: { mode: 'label' },
                    scales: {
                        xAxes: [{ type: 'category', id: 'x-axis-0' }],
                        yAxes: [{ type: 'linear', id: 'y-axis-0' }],
                    },
                })
                var Ut = nt.extend({
                        datasetElementType: _t.Line,
                        dataElementType: _t.Point,
                        _datasetElementOptions: [
                            'backgroundColor',
                            'borderCapStyle',
                            'borderColor',
                            'borderDash',
                            'borderDashOffset',
                            'borderJoinStyle',
                            'borderWidth',
                            'cubicInterpolationMode',
                            'fill',
                        ],
                        _dataElementOptions: {
                            backgroundColor: 'pointBackgroundColor',
                            borderColor: 'pointBorderColor',
                            borderWidth: 'pointBorderWidth',
                            hitRadius: 'pointHitRadius',
                            hoverBackgroundColor: 'pointHoverBackgroundColor',
                            hoverBorderColor: 'pointHoverBorderColor',
                            hoverBorderWidth: 'pointHoverBorderWidth',
                            hoverRadius: 'pointHoverRadius',
                            pointStyle: 'pointStyle',
                            radius: 'pointRadius',
                            rotation: 'pointRotation',
                        },
                        update: function(t) {
                            var e,
                                n,
                                r = this,
                                i = r.getMeta(),
                                a = i.dataset,
                                o = i.data || [],
                                s = r.chart.options,
                                l = r._config,
                                u = (r._showLine = Bt(l.showLine, s.showLines))
                            for (
                                r._xScale = r.getScaleForId(i.xAxisID),
                                    r._yScale = r.getScaleForId(i.yAxisID),
                                    u &&
                                        (void 0 !== l.tension &&
                                            void 0 === l.lineTension &&
                                            (l.lineTension = l.tension),
                                        (a._scale = r._yScale),
                                        (a._datasetIndex = r.index),
                                        (a._children = o),
                                        (a._model = r._resolveDatasetElementOptions(a)),
                                        a.pivot()),
                                    e = 0,
                                    n = o.length;
                                e < n;
                                ++e
                            )
                                r.updateElement(o[e], e, t)
                            for (
                                u && 0 !== a._model.tension && r.updateBezierControlPoints(), e = 0, n = o.length;
                                e < n;
                                ++e
                            )
                                o[e].pivot()
                        },
                        updateElement: function(t, e, n) {
                            var r,
                                i,
                                a = this,
                                o = a.getMeta(),
                                s = t.custom || {},
                                l = a.getDataset(),
                                u = a.index,
                                c = l.data[e],
                                h = a._xScale,
                                d = a._yScale,
                                f = o.dataset._model,
                                g = a._resolveDataElementOptions(t, e)
                            ;(r = h.getPixelForValue('object' == typeof c ? c : NaN, e, u)),
                                (i = n ? d.getBasePixel() : a.calculatePointY(c, e, u)),
                                (t._xScale = h),
                                (t._yScale = d),
                                (t._options = g),
                                (t._datasetIndex = u),
                                (t._index = e),
                                (t._model = {
                                    x: r,
                                    y: i,
                                    skip: s.skip || isNaN(r) || isNaN(i),
                                    radius: g.radius,
                                    pointStyle: g.pointStyle,
                                    rotation: g.rotation,
                                    backgroundColor: g.backgroundColor,
                                    borderColor: g.borderColor,
                                    borderWidth: g.borderWidth,
                                    tension: Bt(s.tension, f ? f.tension : 0),
                                    steppedLine: !!f && f.steppedLine,
                                    hitRadius: g.hitRadius,
                                })
                        },
                        _resolveDatasetElementOptions: function(t) {
                            var e = this,
                                n = e._config,
                                r = t.custom || {},
                                i = e.chart.options,
                                a = i.elements.line,
                                o = nt.prototype._resolveDatasetElementOptions.apply(e, arguments)
                            return (
                                (o.spanGaps = Bt(n.spanGaps, i.spanGaps)),
                                (o.tension = Bt(n.lineTension, a.tension)),
                                (o.steppedLine = Wt([r.steppedLine, n.steppedLine, a.stepped])),
                                (o.clip = qt(Bt(n.clip, Ht(e._xScale, e._yScale, o.borderWidth)))),
                                o
                            )
                        },
                        calculatePointY: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u,
                                c = this.chart,
                                h = this._yScale,
                                d = 0,
                                f = 0
                            if (h.options.stacked) {
                                for (
                                    s = +h.getRightValue(t), u = (l = c._getSortedVisibleDatasetMetas()).length, r = 0;
                                    r < u && (a = l[r]).index !== n;
                                    ++r
                                )
                                    (i = c.data.datasets[a.index]),
                                        'line' === a.type &&
                                            a.yAxisID === h.id &&
                                            ((o = +h.getRightValue(i.data[e])) < 0 ? (f += o || 0) : (d += o || 0))
                                return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(d + s)
                            }
                            return h.getPixelForValue(t)
                        },
                        updateBezierControlPoints: function() {
                            var t,
                                e,
                                n,
                                r,
                                i = this.chart,
                                a = this.getMeta(),
                                o = a.dataset._model,
                                s = i.chartArea,
                                l = a.data || []
                            function u(t, e, n) {
                                return Math.max(Math.min(t, n), e)
                            }
                            if (
                                (o.spanGaps &&
                                    (l = l.filter(function(t) {
                                        return !t._model.skip
                                    })),
                                'monotone' === o.cubicInterpolationMode)
                            )
                                j.splineCurveMonotone(l)
                            else
                                for (t = 0, e = l.length; t < e; ++t)
                                    (n = l[t]._model),
                                        (r = j.splineCurve(
                                            j.previousItem(l, t)._model,
                                            n,
                                            j.nextItem(l, t)._model,
                                            o.tension
                                        )),
                                        (n.controlPointPreviousX = r.previous.x),
                                        (n.controlPointPreviousY = r.previous.y),
                                        (n.controlPointNextX = r.next.x),
                                        (n.controlPointNextY = r.next.y)
                            if (i.options.elements.line.capBezierPoints)
                                for (t = 0, e = l.length; t < e; ++t)
                                    (n = l[t]._model),
                                        jt(n, s) &&
                                            (t > 0 &&
                                                jt(l[t - 1]._model, s) &&
                                                ((n.controlPointPreviousX = u(
                                                    n.controlPointPreviousX,
                                                    s.left,
                                                    s.right
                                                )),
                                                (n.controlPointPreviousY = u(
                                                    n.controlPointPreviousY,
                                                    s.top,
                                                    s.bottom
                                                ))),
                                            t < l.length - 1 &&
                                                jt(l[t + 1]._model, s) &&
                                                ((n.controlPointNextX = u(n.controlPointNextX, s.left, s.right)),
                                                (n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom))))
                        },
                        draw: function() {
                            var t,
                                e = this.chart,
                                n = this.getMeta(),
                                r = n.data || [],
                                i = e.chartArea,
                                a = e.canvas,
                                o = 0,
                                s = r.length
                            for (
                                this._showLine &&
                                ((t = n.dataset._model.clip),
                                j.canvas.clipArea(e.ctx, {
                                    left: !1 === t.left ? 0 : i.left - t.left,
                                    right: !1 === t.right ? a.width : i.right + t.right,
                                    top: !1 === t.top ? 0 : i.top - t.top,
                                    bottom: !1 === t.bottom ? a.height : i.bottom + t.bottom,
                                }),
                                n.dataset.draw(),
                                j.canvas.unclipArea(e.ctx));
                                o < s;
                                ++o
                            )
                                r[o].draw(i)
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                n = t._options,
                                r = j.getHoverColor
                            ;(t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius,
                            }),
                                (e.backgroundColor = Bt(n.hoverBackgroundColor, r(n.backgroundColor))),
                                (e.borderColor = Bt(n.hoverBorderColor, r(n.borderColor))),
                                (e.borderWidth = Bt(n.hoverBorderWidth, n.borderWidth)),
                                (e.radius = Bt(n.hoverRadius, n.radius))
                        },
                    }),
                    $t = j.options.resolve
                R._set('polarArea', {
                    scale: {
                        type: 'radialLinear',
                        angleLines: { display: !1 },
                        gridLines: { circular: !0 },
                        pointLabels: { display: !1 },
                        ticks: { beginAtZero: !0 },
                    },
                    animation: { animateRotate: !0, animateScale: !0 },
                    startAngle: -0.5 * Math.PI,
                    legendCallback: function(t) {
                        var e,
                            n,
                            r,
                            i = document.createElement('ul'),
                            a = t.data,
                            o = a.datasets,
                            s = a.labels
                        if ((i.setAttribute('class', t.id + '-legend'), o.length))
                            for (e = 0, n = o[0].data.length; e < n; ++e)
                                ((r = i.appendChild(document.createElement('li'))).appendChild(
                                    document.createElement('span')
                                ).style.backgroundColor = o[0].backgroundColor[e]),
                                    s[e] && r.appendChild(document.createTextNode(s[e]))
                        return i.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data
                                return e.labels.length && e.datasets.length
                                    ? e.labels.map(function(n, r) {
                                          var i = t.getDatasetMeta(0),
                                              a = i.controller.getStyle(r)
                                          return {
                                              text: n,
                                              fillStyle: a.backgroundColor,
                                              strokeStyle: a.borderColor,
                                              lineWidth: a.borderWidth,
                                              hidden: isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                                              index: r,
                                          }
                                      })
                                    : []
                            },
                        },
                        onClick: function(t, e) {
                            var n,
                                r,
                                i,
                                a = e.index,
                                o = this.chart
                            for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                                (i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden
                            o.update()
                        },
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ''
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ': ' + t.yLabel
                            },
                        },
                    },
                })
                var Yt = nt.extend({
                    dataElementType: _t.Arc,
                    linkScales: j.noop,
                    _dataElementOptions: [
                        'backgroundColor',
                        'borderColor',
                        'borderWidth',
                        'borderAlign',
                        'hoverBackgroundColor',
                        'hoverBorderColor',
                        'hoverBorderWidth',
                    ],
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e,
                            n,
                            r,
                            i = this,
                            a = i.getDataset(),
                            o = i.getMeta(),
                            s = i.chart.options.startAngle || 0,
                            l = (i._starts = []),
                            u = (i._angles = []),
                            c = o.data
                        for (
                            i._updateRadius(), o.count = i.countVisibleElements(), e = 0, n = a.data.length;
                            e < n;
                            e++
                        )
                            (l[e] = s), (r = i._computeAngle(e)), (u[e] = r), (s += r)
                        for (e = 0, n = c.length; e < n; ++e)
                            (c[e]._options = i._resolveDataElementOptions(c[e], e)), i.updateElement(c[e], e, t)
                    },
                    _updateRadius: function() {
                        var t = this,
                            e = t.chart,
                            n = e.chartArea,
                            r = e.options,
                            i = Math.min(n.right - n.left, n.bottom - n.top)
                        ;(e.outerRadius = Math.max(i / 2, 0)),
                            (e.innerRadius = Math.max(
                                r.cutoutPercentage ? (e.outerRadius / 100) * r.cutoutPercentage : 1,
                                0
                            )),
                            (e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
                            (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
                            (t.innerRadius = t.outerRadius - e.radiusLength)
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            i = r.chart,
                            a = r.getDataset(),
                            o = i.options,
                            s = o.animation,
                            l = i.scale,
                            u = i.data.labels,
                            c = l.xCenter,
                            h = l.yCenter,
                            d = o.startAngle,
                            f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
                            g = r._starts[e],
                            p = g + (t.hidden ? 0 : r._angles[e]),
                            v = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
                            m = t._options || {}
                        j.extend(t, {
                            _datasetIndex: r.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                backgroundColor: m.backgroundColor,
                                borderColor: m.borderColor,
                                borderWidth: m.borderWidth,
                                borderAlign: m.borderAlign,
                                x: c,
                                y: h,
                                innerRadius: 0,
                                outerRadius: n ? v : f,
                                startAngle: n && s.animateRotate ? d : g,
                                endAngle: n && s.animateRotate ? d : p,
                                label: j.valueAtIndexOrDefault(u, e, u[e]),
                            },
                        }),
                            t.pivot()
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            n = 0
                        return (
                            j.each(e.data, function(e, r) {
                                isNaN(t.data[r]) || e.hidden || n++
                            }),
                            n
                        )
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = j.getHoverColor,
                            i = j.valueOrDefault
                        ;(t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                        }),
                            (e.backgroundColor = i(n.hoverBackgroundColor, r(n.backgroundColor))),
                            (e.borderColor = i(n.hoverBorderColor, r(n.borderColor))),
                            (e.borderWidth = i(n.hoverBorderWidth, n.borderWidth))
                    },
                    _computeAngle: function(t) {
                        var e = this,
                            n = this.getMeta().count,
                            r = e.getDataset(),
                            i = e.getMeta()
                        if (isNaN(r.data[t]) || i.data[t].hidden) return 0
                        var a = { chart: e.chart, dataIndex: t, dataset: r, datasetIndex: e.index }
                        return $t([e.chart.options.elements.arc.angle, (2 * Math.PI) / n], a, t)
                    },
                })
                R._set('pie', j.clone(R.doughnut)), R._set('pie', { cutoutPercentage: 0 })
                var Gt = Et,
                    Kt = j.valueOrDefault
                R._set('radar', {
                    spanGaps: !1,
                    scale: { type: 'radialLinear' },
                    elements: { line: { fill: 'start', tension: 0 } },
                })
                var Zt = nt.extend({
                    datasetElementType: _t.Line,
                    dataElementType: _t.Point,
                    linkScales: j.noop,
                    _datasetElementOptions: [
                        'backgroundColor',
                        'borderWidth',
                        'borderColor',
                        'borderCapStyle',
                        'borderDash',
                        'borderDashOffset',
                        'borderJoinStyle',
                        'fill',
                    ],
                    _dataElementOptions: {
                        backgroundColor: 'pointBackgroundColor',
                        borderColor: 'pointBorderColor',
                        borderWidth: 'pointBorderWidth',
                        hitRadius: 'pointHitRadius',
                        hoverBackgroundColor: 'pointHoverBackgroundColor',
                        hoverBorderColor: 'pointHoverBorderColor',
                        hoverBorderWidth: 'pointHoverBorderWidth',
                        hoverRadius: 'pointHoverRadius',
                        pointStyle: 'pointStyle',
                        radius: 'pointRadius',
                        rotation: 'pointRotation',
                    },
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e,
                            n,
                            r = this,
                            i = r.getMeta(),
                            a = i.dataset,
                            o = i.data || [],
                            s = r.chart.scale,
                            l = r._config
                        for (
                            void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                                a._scale = s,
                                a._datasetIndex = r.index,
                                a._children = o,
                                a._loop = !0,
                                a._model = r._resolveDatasetElementOptions(a),
                                a.pivot(),
                                e = 0,
                                n = o.length;
                            e < n;
                            ++e
                        )
                            r.updateElement(o[e], e, t)
                        for (r.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            i = t.custom || {},
                            a = r.getDataset(),
                            o = r.chart.scale,
                            s = o.getPointPositionForValue(e, a.data[e]),
                            l = r._resolveDataElementOptions(t, e),
                            u = r.getMeta().dataset._model,
                            c = n ? o.xCenter : s.x,
                            h = n ? o.yCenter : s.y
                        ;(t._scale = o),
                            (t._options = l),
                            (t._datasetIndex = r.index),
                            (t._index = e),
                            (t._model = {
                                x: c,
                                y: h,
                                skip: i.skip || isNaN(c) || isNaN(h),
                                radius: l.radius,
                                pointStyle: l.pointStyle,
                                rotation: l.rotation,
                                backgroundColor: l.backgroundColor,
                                borderColor: l.borderColor,
                                borderWidth: l.borderWidth,
                                tension: Kt(i.tension, u ? u.tension : 0),
                                hitRadius: l.hitRadius,
                            })
                    },
                    _resolveDatasetElementOptions: function() {
                        var t = this,
                            e = t._config,
                            n = t.chart.options,
                            r = nt.prototype._resolveDatasetElementOptions.apply(t, arguments)
                        return (
                            (r.spanGaps = Kt(e.spanGaps, n.spanGaps)),
                            (r.tension = Kt(e.lineTension, n.elements.line.tension)),
                            r
                        )
                    },
                    updateBezierControlPoints: function() {
                        var t,
                            e,
                            n,
                            r,
                            i = this.getMeta(),
                            a = this.chart.chartArea,
                            o = i.data || []
                        function s(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        for (
                            i.dataset._model.spanGaps &&
                                (o = o.filter(function(t) {
                                    return !t._model.skip
                                })),
                                t = 0,
                                e = o.length;
                            t < e;
                            ++t
                        )
                            (n = o[t]._model),
                                (r = j.splineCurve(
                                    j.previousItem(o, t, !0)._model,
                                    n,
                                    j.nextItem(o, t, !0)._model,
                                    n.tension
                                )),
                                (n.controlPointPreviousX = s(r.previous.x, a.left, a.right)),
                                (n.controlPointPreviousY = s(r.previous.y, a.top, a.bottom)),
                                (n.controlPointNextX = s(r.next.x, a.left, a.right)),
                                (n.controlPointNextY = s(r.next.y, a.top, a.bottom))
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = j.getHoverColor
                        ;(t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius,
                        }),
                            (e.backgroundColor = Kt(n.hoverBackgroundColor, r(n.backgroundColor))),
                            (e.borderColor = Kt(n.hoverBorderColor, r(n.borderColor))),
                            (e.borderWidth = Kt(n.hoverBorderWidth, n.borderWidth)),
                            (e.radius = Kt(n.hoverRadius, n.radius))
                    },
                })
                R._set('scatter', {
                    hover: { mode: 'single' },
                    scales: {
                        xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'bottom' }],
                        yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left' }],
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ''
                            },
                            label: function(t) {
                                return '(' + t.xLabel + ', ' + t.yLabel + ')'
                            },
                        },
                    },
                }),
                    R._set('global', { datasets: { scatter: { showLine: !1 } } })
                var Xt = {
                    bar: Dt,
                    bubble: Lt,
                    doughnut: Et,
                    horizontalBar: Nt,
                    line: Ut,
                    polarArea: Yt,
                    pie: Gt,
                    radar: Zt,
                    scatter: Ut,
                }
                function Jt(t, e) {
                    return t.native ? { x: t.x, y: t.y } : j.getRelativePosition(t, e)
                }
                function Qt(t, e) {
                    var n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        l = t._getSortedVisibleDatasetMetas()
                    for (r = 0, a = l.length; r < a; ++r)
                        for (i = 0, o = (n = l[r].data).length; i < o; ++i) (s = n[i])._view.skip || e(s)
                }
                function te(t, e) {
                    var n = []
                    return (
                        Qt(t, function(t) {
                            t.inRange(e.x, e.y) && n.push(t)
                        }),
                        n
                    )
                }
                function ee(t, e, n, r) {
                    var i = Number.POSITIVE_INFINITY,
                        a = []
                    return (
                        Qt(t, function(t) {
                            if (!n || t.inRange(e.x, e.y)) {
                                var o = t.getCenterPoint(),
                                    s = r(e, o)
                                s < i ? ((a = [t]), (i = s)) : s === i && a.push(t)
                            }
                        }),
                        a
                    )
                }
                function ne(t) {
                    var e = -1 !== t.indexOf('x'),
                        n = -1 !== t.indexOf('y')
                    return function(t, r) {
                        var i = e ? Math.abs(t.x - r.x) : 0,
                            a = n ? Math.abs(t.y - r.y) : 0
                        return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
                    }
                }
                function re(t, e, n) {
                    var r = Jt(e, t)
                    n.axis = n.axis || 'x'
                    var i = ne(n.axis),
                        a = n.intersect ? te(t, r) : ee(t, r, !1, i),
                        o = []
                    return a.length
                        ? (t._getSortedVisibleDatasetMetas().forEach(function(t) {
                              var e = t.data[a[0]._index]
                              e && !e._view.skip && o.push(e)
                          }),
                          o)
                        : []
                }
                var ie = {
                        modes: {
                            single: function(t, e) {
                                var n = Jt(e, t),
                                    r = []
                                return (
                                    Qt(t, function(t) {
                                        if (t.inRange(n.x, n.y)) return r.push(t), r
                                    }),
                                    r.slice(0, 1)
                                )
                            },
                            label: re,
                            index: re,
                            dataset: function(t, e, n) {
                                var r = Jt(e, t)
                                n.axis = n.axis || 'xy'
                                var i = ne(n.axis),
                                    a = n.intersect ? te(t, r) : ee(t, r, !1, i)
                                return a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data), a
                            },
                            'x-axis': function(t, e) {
                                return re(t, e, { intersect: !1 })
                            },
                            point: function(t, e) {
                                return te(t, Jt(e, t))
                            },
                            nearest: function(t, e, n) {
                                var r = Jt(e, t)
                                n.axis = n.axis || 'xy'
                                var i = ne(n.axis)
                                return ee(t, r, n.intersect, i)
                            },
                            x: function(t, e, n) {
                                var r = Jt(e, t),
                                    i = [],
                                    a = !1
                                return (
                                    Qt(t, function(t) {
                                        t.inXRange(r.x) && i.push(t), t.inRange(r.x, r.y) && (a = !0)
                                    }),
                                    n.intersect && !a && (i = []),
                                    i
                                )
                            },
                            y: function(t, e, n) {
                                var r = Jt(e, t),
                                    i = [],
                                    a = !1
                                return (
                                    Qt(t, function(t) {
                                        t.inYRange(r.y) && i.push(t), t.inRange(r.x, r.y) && (a = !0)
                                    }),
                                    n.intersect && !a && (i = []),
                                    i
                                )
                            },
                        },
                    },
                    ae = j.extend
                function oe(t, e) {
                    return j.where(t, function(t) {
                        return t.pos === e
                    })
                }
                function se(t, e) {
                    return t.sort(function(t, n) {
                        var r = e ? n : t,
                            i = e ? t : n
                        return r.weight === i.weight ? r.index - i.index : r.weight - i.weight
                    })
                }
                function le(t, e, n, r) {
                    return Math.max(t[n], e[n]) + Math.max(t[r], e[r])
                }
                function ue(t, e, n) {
                    var r,
                        i,
                        a = n.box,
                        o = t.maxPadding
                    if (
                        (n.size && (t[n.pos] -= n.size),
                        (n.size = n.horizontal ? a.height : a.width),
                        (t[n.pos] += n.size),
                        a.getPadding)
                    ) {
                        var s = a.getPadding()
                        ;(o.top = Math.max(o.top, s.top)),
                            (o.left = Math.max(o.left, s.left)),
                            (o.bottom = Math.max(o.bottom, s.bottom)),
                            (o.right = Math.max(o.right, s.right))
                    }
                    if (
                        ((r = e.outerWidth - le(o, t, 'left', 'right')),
                        (i = e.outerHeight - le(o, t, 'top', 'bottom')),
                        r !== t.w || i !== t.h)
                    )
                        return (t.w = r), (t.h = i), n.horizontal ? r !== t.w : i !== t.h
                }
                function ce(t, e) {
                    var n = e.maxPadding
                    function r(t) {
                        var r = { left: 0, top: 0, right: 0, bottom: 0 }
                        return (
                            t.forEach(function(t) {
                                r[t] = Math.max(e[t], n[t])
                            }),
                            r
                        )
                    }
                    return r(t ? ['left', 'right'] : ['top', 'bottom'])
                }
                function he(t, e, n) {
                    var r,
                        i,
                        a,
                        o,
                        s,
                        l,
                        u = []
                    for (r = 0, i = t.length; r < i; ++r)
                        (o = (a = t[r]).box).update(a.width || e.w, a.height || e.h, ce(a.horizontal, e)),
                            ue(e, n, a) && ((l = !0), u.length && (s = !0)),
                            o.fullWidth || u.push(a)
                    return (s && he(u, e, n)) || l
                }
                function de(t, e, n) {
                    var r,
                        i,
                        a,
                        o,
                        s = n.padding,
                        l = e.x,
                        u = e.y
                    for (r = 0, i = t.length; r < i; ++r)
                        (o = (a = t[r]).box),
                            a.horizontal
                                ? ((o.left = o.fullWidth ? s.left : e.left),
                                  (o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w),
                                  (o.top = u),
                                  (o.bottom = u + o.height),
                                  (o.width = o.right - o.left),
                                  (u = o.bottom))
                                : ((o.left = l),
                                  (o.right = l + o.width),
                                  (o.top = e.top),
                                  (o.bottom = e.top + e.h),
                                  (o.height = o.bottom - o.top),
                                  (l = o.right))
                    ;(e.x = l), (e.y = u)
                }
                R._set('global', { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } })
                var fe,
                    ge = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []),
                                (e.fullWidth = e.fullWidth || !1),
                                (e.position = e.position || 'top'),
                                (e.weight = e.weight || 0),
                                (e._layers =
                                    e._layers ||
                                    function() {
                                        return [
                                            {
                                                z: 0,
                                                draw: function() {
                                                    e.draw.apply(e, arguments)
                                                },
                                            },
                                        ]
                                    }),
                                t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var n = t.boxes ? t.boxes.indexOf(e) : -1
                            ;-1 !== n && t.boxes.splice(n, 1)
                        },
                        configure: function(t, e, n) {
                            for (var r, i = ['fullWidth', 'position', 'weight'], a = i.length, o = 0; o < a; ++o)
                                (r = i[o]), n.hasOwnProperty(r) && (e[r] = n[r])
                        },
                        update: function(t, e, n) {
                            if (t) {
                                var r = t.options.layout || {},
                                    i = j.options.toPadding(r.padding),
                                    a = e - i.width,
                                    o = n - i.height,
                                    s = (function(t) {
                                        var e = (function(t) {
                                                var e,
                                                    n,
                                                    r,
                                                    i = []
                                                for (e = 0, n = (t || []).length; e < n; ++e)
                                                    (r = t[e]),
                                                        i.push({
                                                            index: e,
                                                            box: r,
                                                            pos: r.position,
                                                            horizontal: r.isHorizontal(),
                                                            weight: r.weight,
                                                        })
                                                return i
                                            })(t),
                                            n = se(oe(e, 'left'), !0),
                                            r = se(oe(e, 'right')),
                                            i = se(oe(e, 'top'), !0),
                                            a = se(oe(e, 'bottom'))
                                        return {
                                            leftAndTop: n.concat(i),
                                            rightAndBottom: r.concat(a),
                                            chartArea: oe(e, 'chartArea'),
                                            vertical: n.concat(r),
                                            horizontal: i.concat(a),
                                        }
                                    })(t.boxes),
                                    l = s.vertical,
                                    u = s.horizontal,
                                    c = Object.freeze({
                                        outerWidth: e,
                                        outerHeight: n,
                                        padding: i,
                                        availableWidth: a,
                                        vBoxMaxWidth: a / 2 / l.length,
                                        hBoxMaxHeight: o / 2,
                                    }),
                                    h = ae({ maxPadding: ae({}, i), w: a, h: o, x: i.left, y: i.top }, i)
                                !(function(t, e) {
                                    var n, r, i
                                    for (n = 0, r = t.length; n < r; ++n)
                                        ((i = t[n]).width = i.horizontal
                                            ? i.box.fullWidth && e.availableWidth
                                            : e.vBoxMaxWidth),
                                            (i.height = i.horizontal && e.hBoxMaxHeight)
                                })(l.concat(u), c),
                                    he(l, h, c),
                                    he(u, h, c) && he(l, h, c),
                                    (function(t) {
                                        var e = t.maxPadding
                                        function n(n) {
                                            var r = Math.max(e[n] - t[n], 0)
                                            return (t[n] += r), r
                                        }
                                        ;(t.y += n('top')), (t.x += n('left')), n('right'), n('bottom')
                                    })(h),
                                    de(s.leftAndTop, h, c),
                                    (h.x += h.w),
                                    (h.y += h.h),
                                    de(s.rightAndBottom, h, c),
                                    (t.chartArea = {
                                        left: h.left,
                                        top: h.top,
                                        right: h.left + h.w,
                                        bottom: h.top + h.h,
                                    }),
                                    j.each(s.chartArea, function(e) {
                                        var n = e.box
                                        ae(n, t.chartArea), n.update(h.w, h.h)
                                    })
                            }
                        },
                    },
                    pe =
                        ((fe = Object.freeze({
                            __proto__: null,
                            default:
                                '/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n',
                        })) &&
                            fe.default) ||
                        fe,
                    ve = ['animationstart', 'webkitAnimationStart'],
                    me = {
                        touchstart: 'mousedown',
                        touchmove: 'mousemove',
                        touchend: 'mouseup',
                        pointerenter: 'mouseenter',
                        pointerdown: 'mousedown',
                        pointermove: 'mousemove',
                        pointerup: 'mouseup',
                        pointerleave: 'mouseout',
                        pointerout: 'mouseout',
                    }
                function be(t, e) {
                    var n = j.getStyle(t, e),
                        r = n && n.match(/^(\d+)(\.\d+)?px$/)
                    return r ? Number(r[1]) : void 0
                }
                var ye = !!(function() {
                    var t = !1
                    try {
                        var e = Object.defineProperty({}, 'passive', {
                            get: function() {
                                t = !0
                            },
                        })
                        window.addEventListener('e', null, e)
                    } catch (t) {}
                    return t
                })() && { passive: !0 }
                function xe(t, e, n) {
                    t.addEventListener(e, n, ye)
                }
                function _e(t, e, n) {
                    t.removeEventListener(e, n, ye)
                }
                function we(t, e, n, r, i) {
                    return {
                        type: t,
                        chart: e,
                        native: i || null,
                        x: void 0 !== n ? n : null,
                        y: void 0 !== r ? r : null,
                    }
                }
                function ke(t) {
                    var e = document.createElement('div')
                    return (e.className = t || ''), e
                }
                function Me(t, e, n) {
                    var r,
                        i,
                        a,
                        o,
                        s = t.$chartjs || (t.$chartjs = {}),
                        l = (s.resizer = (function(t) {
                            var e = ke('chartjs-size-monitor'),
                                n = ke('chartjs-size-monitor-expand'),
                                r = ke('chartjs-size-monitor-shrink')
                            n.appendChild(ke()),
                                r.appendChild(ke()),
                                e.appendChild(n),
                                e.appendChild(r),
                                (e._reset = function() {
                                    ;(n.scrollLeft = 1e6),
                                        (n.scrollTop = 1e6),
                                        (r.scrollLeft = 1e6),
                                        (r.scrollTop = 1e6)
                                })
                            var i = function() {
                                e._reset(), t()
                            }
                            return xe(n, 'scroll', i.bind(n, 'expand')), xe(r, 'scroll', i.bind(r, 'shrink')), e
                        })(
                            ((r = function() {
                                if (s.resizer) {
                                    var r = n.options.maintainAspectRatio && t.parentNode,
                                        i = r ? r.clientWidth : 0
                                    e(we('resize', n)), r && r.clientWidth < i && n.canvas && e(we('resize', n))
                                }
                            }),
                            (a = !1),
                            (o = []),
                            function() {
                                ;(o = Array.prototype.slice.call(arguments)),
                                    (i = i || this),
                                    a ||
                                        ((a = !0),
                                        j.requestAnimFrame.call(window, function() {
                                            ;(a = !1), r.apply(i, o)
                                        }))
                            })
                        ))
                    !(function(t, e) {
                        var n = t.$chartjs || (t.$chartjs = {}),
                            r = (n.renderProxy = function(t) {
                                'chartjs-render-animation' === t.animationName && e()
                            })
                        j.each(ve, function(e) {
                            xe(t, e, r)
                        }),
                            (n.reflow = !!t.offsetParent),
                            t.classList.add('chartjs-render-monitor')
                    })(t, function() {
                        if (s.resizer) {
                            var e = t.parentNode
                            e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                        }
                    })
                }
                function Se(t) {
                    var e = t.$chartjs || {},
                        n = e.resizer
                    delete e.resizer,
                        (function(t) {
                            var e = t.$chartjs || {},
                                n = e.renderProxy
                            n &&
                                (j.each(ve, function(e) {
                                    _e(t, e, n)
                                }),
                                delete e.renderProxy),
                                t.classList.remove('chartjs-render-monitor')
                        })(t),
                        n && n.parentNode && n.parentNode.removeChild(n)
                }
                var Ce = {
                    disableCSSInjection: !1,
                    _enabled: 'undefined' != typeof window && 'undefined' != typeof document,
                    _ensureLoaded: function(t) {
                        if (!this.disableCSSInjection) {
                            var e = t.getRootNode ? t.getRootNode() : document
                            !(function(t, e) {
                                var n = t.$chartjs || (t.$chartjs = {})
                                if (!n.containsStyles) {
                                    ;(n.containsStyles = !0), (e = '/* Chart.js */\n' + e)
                                    var r = document.createElement('style')
                                    r.setAttribute('type', 'text/css'),
                                        r.appendChild(document.createTextNode(e)),
                                        t.appendChild(r)
                                }
                            })(e.host ? e : document.head, pe)
                        }
                    },
                    acquireContext: function(t, e) {
                        'string' == typeof t ? (t = document.getElementById(t)) : t.length && (t = t[0]),
                            t && t.canvas && (t = t.canvas)
                        var n = t && t.getContext && t.getContext('2d')
                        return n && n.canvas === t
                            ? (this._ensureLoaded(t),
                              (function(t, e) {
                                  var n = t.style,
                                      r = t.getAttribute('height'),
                                      i = t.getAttribute('width')
                                  if (
                                      ((t.$chartjs = {
                                          initial: {
                                              height: r,
                                              width: i,
                                              style: { display: n.display, height: n.height, width: n.width },
                                          },
                                      }),
                                      (n.display = n.display || 'block'),
                                      null === i || '' === i)
                                  ) {
                                      var a = be(t, 'width')
                                      void 0 !== a && (t.width = a)
                                  }
                                  if (null === r || '' === r)
                                      if ('' === t.style.height) t.height = t.width / (e.options.aspectRatio || 2)
                                      else {
                                          var o = be(t, 'height')
                                          void 0 !== a && (t.height = o)
                                      }
                              })(t, e),
                              n)
                            : null
                    },
                    releaseContext: function(t) {
                        var e = t.canvas
                        if (e.$chartjs) {
                            var n = e.$chartjs.initial
                            ;['height', 'width'].forEach(function(t) {
                                var r = n[t]
                                j.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                            }),
                                j.each(n.style || {}, function(t, n) {
                                    e.style[n] = t
                                }),
                                (e.width = e.width),
                                delete e.$chartjs
                        }
                    },
                    addEventListener: function(t, e, n) {
                        var r = t.canvas
                        if ('resize' !== e) {
                            var i = n.$chartjs || (n.$chartjs = {})
                            xe(
                                r,
                                e,
                                ((i.proxies || (i.proxies = {}))[t.id + '_' + e] = function(e) {
                                    n(
                                        (function(t, e) {
                                            var n = me[t.type] || t.type,
                                                r = j.getRelativePosition(t, e)
                                            return we(n, e, r.x, r.y, t)
                                        })(e, t)
                                    )
                                })
                            )
                        } else Me(r, n, t)
                    },
                    removeEventListener: function(t, e, n) {
                        var r = t.canvas
                        if ('resize' !== e) {
                            var i = ((n.$chartjs || {}).proxies || {})[t.id + '_' + e]
                            i && _e(r, e, i)
                        } else Se(r)
                    },
                }
                ;(j.addEvent = xe), (j.removeEvent = _e)
                var Ae = Ce._enabled
                        ? Ce
                        : {
                              acquireContext: function(t) {
                                  return t && t.canvas && (t = t.canvas), (t && t.getContext('2d')) || null
                              },
                          },
                    Pe = j.extend(
                        {
                            initialize: function() {},
                            acquireContext: function() {},
                            releaseContext: function() {},
                            addEventListener: function() {},
                            removeEventListener: function() {},
                        },
                        Ae
                    )
                R._set('global', { plugins: {} })
                var De = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins
                            ;[].concat(t).forEach(function(t) {
                                ;-1 === e.indexOf(t) && e.push(t)
                            }),
                                this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins
                            ;[].concat(t).forEach(function(t) {
                                var n = e.indexOf(t)
                                ;-1 !== n && e.splice(n, 1)
                            }),
                                this._cacheId++
                        },
                        clear: function() {
                            ;(this._plugins = []), this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l = this.descriptors(t),
                                u = l.length
                            for (r = 0; r < u; ++r)
                                if (
                                    'function' == typeof (s = (a = (i = l[r]).plugin)[e]) &&
                                    ((o = [t].concat(n || [])).push(i.options), !1 === s.apply(a, o))
                                )
                                    return !1
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t.$plugins || (t.$plugins = {})
                            if (e.id === this._cacheId) return e.descriptors
                            var n = [],
                                r = [],
                                i = (t && t.config) || {},
                                a = (i.options && i.options.plugins) || {}
                            return (
                                this._plugins.concat(i.plugins || []).forEach(function(t) {
                                    if (-1 === n.indexOf(t)) {
                                        var e = t.id,
                                            i = a[e]
                                        !1 !== i &&
                                            (!0 === i && (i = j.clone(R.global.plugins[e])),
                                            n.push(t),
                                            r.push({ plugin: t, options: i || {} }))
                                    }
                                }),
                                (e.descriptors = r),
                                (e.id = this._cacheId),
                                r
                            )
                        },
                        _invalidate: function(t) {
                            delete t.$plugins
                        },
                    },
                    Ie = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, e, n) {
                            ;(this.constructors[t] = e), (this.defaults[t] = j.clone(n))
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(t) {
                            return this.defaults.hasOwnProperty(t) ? j.merge({}, [R.scale, this.defaults[t]]) : {}
                        },
                        updateScaleDefaults: function(t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = j.extend(this.defaults[t], e))
                        },
                        addScalesToLayout: function(t) {
                            j.each(t.scales, function(e) {
                                ;(e.fullWidth = e.options.fullWidth),
                                    (e.position = e.options.position),
                                    (e.weight = e.options.weight),
                                    ge.addBox(t, e)
                            })
                        },
                    },
                    Te = j.valueOrDefault,
                    Le = j.rtl.getRtlAdapter
                R._set('global', {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: 'nearest',
                        position: 'average',
                        intersect: !0,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleFontStyle: 'bold',
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: '#fff',
                        titleAlign: 'left',
                        bodySpacing: 2,
                        bodyFontColor: '#fff',
                        bodyAlign: 'left',
                        footerFontStyle: 'bold',
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: '#fff',
                        footerAlign: 'left',
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: '#fff',
                        displayColors: !0,
                        borderColor: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: j.noop,
                            title: function(t, e) {
                                var n = '',
                                    r = e.labels,
                                    i = r ? r.length : 0
                                if (t.length > 0) {
                                    var a = t[0]
                                    a.label
                                        ? (n = a.label)
                                        : a.xLabel
                                        ? (n = a.xLabel)
                                        : i > 0 && a.index < i && (n = r[a.index])
                                }
                                return n
                            },
                            afterTitle: j.noop,
                            beforeBody: j.noop,
                            beforeLabel: j.noop,
                            label: function(t, e) {
                                var n = e.datasets[t.datasetIndex].label || ''
                                return n && (n += ': '), j.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value), n
                            },
                            labelColor: function(t, e) {
                                var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view
                                return { borderColor: n.borderColor, backgroundColor: n.backgroundColor }
                            },
                            labelTextColor: function() {
                                return this._options.bodyFontColor
                            },
                            afterLabel: j.noop,
                            afterBody: j.noop,
                            beforeFooter: j.noop,
                            footer: j.noop,
                            afterFooter: j.noop,
                        },
                    },
                })
                var Fe = {
                    average: function(t) {
                        if (!t.length) return !1
                        var e,
                            n,
                            r = 0,
                            i = 0,
                            a = 0
                        for (e = 0, n = t.length; e < n; ++e) {
                            var o = t[e]
                            if (o && o.hasValue()) {
                                var s = o.tooltipPosition()
                                ;(r += s.x), (i += s.y), ++a
                            }
                        }
                        return { x: r / a, y: i / a }
                    },
                    nearest: function(t, e) {
                        var n,
                            r,
                            i,
                            a = e.x,
                            o = e.y,
                            s = Number.POSITIVE_INFINITY
                        for (n = 0, r = t.length; n < r; ++n) {
                            var l = t[n]
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(),
                                    c = j.distanceBetweenPoints(e, u)
                                c < s && ((s = c), (i = l))
                            }
                        }
                        if (i) {
                            var h = i.tooltipPosition()
                            ;(a = h.x), (o = h.y)
                        }
                        return { x: a, y: o }
                    },
                }
                function Oe(t, e) {
                    return e && (j.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }
                function ze(t) {
                    return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1 ? t.split('\n') : t
                }
                function Re(t) {
                    var e = R.global
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        rtl: t.rtl,
                        textDirection: t.textDirection,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: Te(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: Te(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: Te(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: Te(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: Te(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: Te(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: Te(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: Te(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: Te(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth,
                    }
                }
                function Ee(t, e) {
                    return 'center' === e
                        ? t.x + t.width / 2
                        : 'right' === e
                        ? t.x + t.width - t.xPadding
                        : t.x + t.xPadding
                }
                function Ne(t) {
                    return Oe([], ze(t))
                }
                var Be = G.extend({
                        initialize: function() {
                            ;(this._model = Re(this._options)), (this._lastActive = [])
                        },
                        getTitle: function() {
                            var t = this,
                                e = t._options,
                                n = e.callbacks,
                                r = n.beforeTitle.apply(t, arguments),
                                i = n.title.apply(t, arguments),
                                a = n.afterTitle.apply(t, arguments),
                                o = []
                            return (o = Oe(o, ze(r))), (o = Oe(o, ze(i))), (o = Oe(o, ze(a)))
                        },
                        getBeforeBody: function() {
                            return Ne(this._options.callbacks.beforeBody.apply(this, arguments))
                        },
                        getBody: function(t, e) {
                            var n = this,
                                r = n._options.callbacks,
                                i = []
                            return (
                                j.each(t, function(t) {
                                    var a = { before: [], lines: [], after: [] }
                                    Oe(a.before, ze(r.beforeLabel.call(n, t, e))),
                                        Oe(a.lines, r.label.call(n, t, e)),
                                        Oe(a.after, ze(r.afterLabel.call(n, t, e))),
                                        i.push(a)
                                }),
                                i
                            )
                        },
                        getAfterBody: function() {
                            return Ne(this._options.callbacks.afterBody.apply(this, arguments))
                        },
                        getFooter: function() {
                            var t = this,
                                e = t._options.callbacks,
                                n = e.beforeFooter.apply(t, arguments),
                                r = e.footer.apply(t, arguments),
                                i = e.afterFooter.apply(t, arguments),
                                a = []
                            return (a = Oe(a, ze(n))), (a = Oe(a, ze(r))), (a = Oe(a, ze(i)))
                        },
                        update: function(t) {
                            var e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u,
                                c,
                                h = this,
                                d = h._options,
                                f = h._model,
                                g = (h._model = Re(d)),
                                p = h._active,
                                v = h._data,
                                m = { xAlign: f.xAlign, yAlign: f.yAlign },
                                b = { x: f.x, y: f.y },
                                y = { width: f.width, height: f.height },
                                x = { x: f.caretX, y: f.caretY }
                            if (p.length) {
                                g.opacity = 1
                                var _ = [],
                                    w = []
                                x = Fe[d.position].call(h, p, h._eventPosition)
                                var k = []
                                for (e = 0, n = p.length; e < n; ++e)
                                    k.push(
                                        ((r = p[e]),
                                        (i = void 0),
                                        (a = void 0),
                                        (o = void 0),
                                        (s = void 0),
                                        (l = void 0),
                                        (u = void 0),
                                        (c = void 0),
                                        (i = r._xScale),
                                        (a = r._yScale || r._scale),
                                        (o = r._index),
                                        (s = r._datasetIndex),
                                        (l = r._chart.getDatasetMeta(s).controller),
                                        (u = l._getIndexScale()),
                                        (c = l._getValueScale()),
                                        {
                                            xLabel: i ? i.getLabelForIndex(o, s) : '',
                                            yLabel: a ? a.getLabelForIndex(o, s) : '',
                                            label: u ? '' + u.getLabelForIndex(o, s) : '',
                                            value: c ? '' + c.getLabelForIndex(o, s) : '',
                                            index: o,
                                            datasetIndex: s,
                                            x: r._model.x,
                                            y: r._model.y,
                                        })
                                    )
                                d.filter &&
                                    (k = k.filter(function(t) {
                                        return d.filter(t, v)
                                    })),
                                    d.itemSort &&
                                        (k = k.sort(function(t, e) {
                                            return d.itemSort(t, e, v)
                                        })),
                                    j.each(k, function(t) {
                                        _.push(d.callbacks.labelColor.call(h, t, h._chart)),
                                            w.push(d.callbacks.labelTextColor.call(h, t, h._chart))
                                    }),
                                    (g.title = h.getTitle(k, v)),
                                    (g.beforeBody = h.getBeforeBody(k, v)),
                                    (g.body = h.getBody(k, v)),
                                    (g.afterBody = h.getAfterBody(k, v)),
                                    (g.footer = h.getFooter(k, v)),
                                    (g.x = x.x),
                                    (g.y = x.y),
                                    (g.caretPadding = d.caretPadding),
                                    (g.labelColors = _),
                                    (g.labelTextColors = w),
                                    (g.dataPoints = k),
                                    (y = (function(t, e) {
                                        var n = t._chart.ctx,
                                            r = 2 * e.yPadding,
                                            i = 0,
                                            a = e.body,
                                            o = a.reduce(function(t, e) {
                                                return t + e.before.length + e.lines.length + e.after.length
                                            }, 0)
                                        o += e.beforeBody.length + e.afterBody.length
                                        var s = e.title.length,
                                            l = e.footer.length,
                                            u = e.titleFontSize,
                                            c = e.bodyFontSize,
                                            h = e.footerFontSize
                                        ;(r += s * u),
                                            (r += s ? (s - 1) * e.titleSpacing : 0),
                                            (r += s ? e.titleMarginBottom : 0),
                                            (r += o * c),
                                            (r += o ? (o - 1) * e.bodySpacing : 0),
                                            (r += l ? e.footerMarginTop : 0),
                                            (r += l * h),
                                            (r += l ? (l - 1) * e.footerSpacing : 0)
                                        var d = 0,
                                            f = function(t) {
                                                i = Math.max(i, n.measureText(t).width + d)
                                            }
                                        return (
                                            (n.font = j.fontString(u, e._titleFontStyle, e._titleFontFamily)),
                                            j.each(e.title, f),
                                            (n.font = j.fontString(c, e._bodyFontStyle, e._bodyFontFamily)),
                                            j.each(e.beforeBody.concat(e.afterBody), f),
                                            (d = e.displayColors ? c + 2 : 0),
                                            j.each(a, function(t) {
                                                j.each(t.before, f), j.each(t.lines, f), j.each(t.after, f)
                                            }),
                                            (d = 0),
                                            (n.font = j.fontString(h, e._footerFontStyle, e._footerFontFamily)),
                                            j.each(e.footer, f),
                                            { width: (i += 2 * e.xPadding), height: r }
                                        )
                                    })(this, g)),
                                    (b = (function(t, e, n, r) {
                                        var i = t.x,
                                            a = t.y,
                                            o = t.caretSize,
                                            s = t.caretPadding,
                                            l = t.cornerRadius,
                                            u = n.xAlign,
                                            c = n.yAlign,
                                            h = o + s,
                                            d = l + s
                                        return (
                                            'right' === u
                                                ? (i -= e.width)
                                                : 'center' === u &&
                                                  ((i -= e.width / 2) + e.width > r.width && (i = r.width - e.width),
                                                  i < 0 && (i = 0)),
                                            'top' === c
                                                ? (a += h)
                                                : (a -= 'bottom' === c ? e.height + h : e.height / 2),
                                            'center' === c
                                                ? 'left' === u
                                                    ? (i += h)
                                                    : 'right' === u && (i -= h)
                                                : 'left' === u
                                                ? (i -= d)
                                                : 'right' === u && (i += d),
                                            { x: i, y: a }
                                        )
                                    })(
                                        g,
                                        y,
                                        (m = (function(t, e) {
                                            var n,
                                                r,
                                                i,
                                                a,
                                                o,
                                                s = t._model,
                                                l = t._chart,
                                                u = t._chart.chartArea,
                                                c = 'center',
                                                h = 'center'
                                            s.y < e.height ? (h = 'top') : s.y > l.height - e.height && (h = 'bottom')
                                            var d = (u.left + u.right) / 2,
                                                f = (u.top + u.bottom) / 2
                                            'center' === h
                                                ? ((n = function(t) {
                                                      return t <= d
                                                  }),
                                                  (r = function(t) {
                                                      return t > d
                                                  }))
                                                : ((n = function(t) {
                                                      return t <= e.width / 2
                                                  }),
                                                  (r = function(t) {
                                                      return t >= l.width - e.width / 2
                                                  })),
                                                (i = function(t) {
                                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                                }),
                                                (a = function(t) {
                                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                                }),
                                                (o = function(t) {
                                                    return t <= f ? 'top' : 'bottom'
                                                }),
                                                n(s.x)
                                                    ? ((c = 'left'), i(s.x) && ((c = 'center'), (h = o(s.y))))
                                                    : r(s.x) &&
                                                      ((c = 'right'), a(s.x) && ((c = 'center'), (h = o(s.y))))
                                            var g = t._options
                                            return { xAlign: g.xAlign ? g.xAlign : c, yAlign: g.yAlign ? g.yAlign : h }
                                        })(this, y)),
                                        h._chart
                                    ))
                            } else g.opacity = 0
                            return (
                                (g.xAlign = m.xAlign),
                                (g.yAlign = m.yAlign),
                                (g.x = b.x),
                                (g.y = b.y),
                                (g.width = y.width),
                                (g.height = y.height),
                                (g.caretX = x.x),
                                (g.caretY = x.y),
                                (h._model = g),
                                t && d.custom && d.custom.call(h, g),
                                h
                            )
                        },
                        drawCaret: function(t, e) {
                            var n = this._chart.ctx,
                                r = this._view,
                                i = this.getCaretPosition(t, e, r)
                            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
                        },
                        getCaretPosition: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u = n.caretSize,
                                c = n.cornerRadius,
                                h = n.xAlign,
                                d = n.yAlign,
                                f = t.x,
                                g = t.y,
                                p = e.width,
                                v = e.height
                            if ('center' === d)
                                (s = g + v / 2),
                                    'left' === h
                                        ? ((i = (r = f) - u), (a = r), (o = s + u), (l = s - u))
                                        : ((i = (r = f + p) + u), (a = r), (o = s - u), (l = s + u))
                            else if (
                                ('left' === h
                                    ? ((r = (i = f + c + u) - u), (a = i + u))
                                    : 'right' === h
                                    ? ((r = (i = f + p - c - u) - u), (a = i + u))
                                    : ((r = (i = n.caretX) - u), (a = i + u)),
                                'top' === d)
                            )
                                (s = (o = g) - u), (l = o)
                            else {
                                ;(s = (o = g + v) + u), (l = o)
                                var m = a
                                ;(a = r), (r = m)
                            }
                            return { x1: r, x2: i, x3: a, y1: o, y2: s, y3: l }
                        },
                        drawTitle: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o = e.title,
                                s = o.length
                            if (s) {
                                var l = Le(e.rtl, e.x, e.width)
                                for (
                                    t.x = Ee(e, e._titleAlign),
                                        n.textAlign = l.textAlign(e._titleAlign),
                                        n.textBaseline = 'middle',
                                        r = e.titleFontSize,
                                        i = e.titleSpacing,
                                        n.fillStyle = e.titleFontColor,
                                        n.font = j.fontString(r, e._titleFontStyle, e._titleFontFamily),
                                        a = 0;
                                    a < s;
                                    ++a
                                )
                                    n.fillText(o[a], l.x(t.x), t.y + r / 2),
                                        (t.y += r + i),
                                        a + 1 === s && (t.y += e.titleMarginBottom - i)
                            }
                        },
                        drawBody: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u,
                                c,
                                h = e.bodyFontSize,
                                d = e.bodySpacing,
                                f = e._bodyAlign,
                                g = e.body,
                                p = e.displayColors,
                                v = 0,
                                m = p ? Ee(e, 'left') : 0,
                                b = Le(e.rtl, e.x, e.width),
                                y = function(e) {
                                    n.fillText(e, b.x(t.x + v), t.y + h / 2), (t.y += h + d)
                                },
                                x = b.textAlign(f)
                            for (
                                n.textAlign = f,
                                    n.textBaseline = 'middle',
                                    n.font = j.fontString(h, e._bodyFontStyle, e._bodyFontFamily),
                                    t.x = Ee(e, x),
                                    n.fillStyle = e.bodyFontColor,
                                    j.each(e.beforeBody, y),
                                    v = p && 'right' !== x ? ('center' === f ? h / 2 + 1 : h + 2) : 0,
                                    s = 0,
                                    u = g.length;
                                s < u;
                                ++s
                            ) {
                                for (
                                    r = g[s],
                                        i = e.labelTextColors[s],
                                        a = e.labelColors[s],
                                        n.fillStyle = i,
                                        j.each(r.before, y),
                                        l = 0,
                                        c = (o = r.lines).length;
                                    l < c;
                                    ++l
                                ) {
                                    if (p) {
                                        var _ = b.x(m)
                                        ;(n.fillStyle = e.legendColorBackground),
                                            n.fillRect(b.leftForLtr(_, h), t.y, h, h),
                                            (n.lineWidth = 1),
                                            (n.strokeStyle = a.borderColor),
                                            n.strokeRect(b.leftForLtr(_, h), t.y, h, h),
                                            (n.fillStyle = a.backgroundColor),
                                            n.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2),
                                            (n.fillStyle = i)
                                    }
                                    y(o[l])
                                }
                                j.each(r.after, y)
                            }
                            ;(v = 0), j.each(e.afterBody, y), (t.y -= d)
                        },
                        drawFooter: function(t, e, n) {
                            var r,
                                i,
                                a = e.footer,
                                o = a.length
                            if (o) {
                                var s = Le(e.rtl, e.x, e.width)
                                for (
                                    t.x = Ee(e, e._footerAlign),
                                        t.y += e.footerMarginTop,
                                        n.textAlign = s.textAlign(e._footerAlign),
                                        n.textBaseline = 'middle',
                                        r = e.footerFontSize,
                                        n.fillStyle = e.footerFontColor,
                                        n.font = j.fontString(r, e._footerFontStyle, e._footerFontFamily),
                                        i = 0;
                                    i < o;
                                    ++i
                                )
                                    n.fillText(a[i], s.x(t.x), t.y + r / 2), (t.y += r + e.footerSpacing)
                            }
                        },
                        drawBackground: function(t, e, n, r) {
                            ;(n.fillStyle = e.backgroundColor),
                                (n.strokeStyle = e.borderColor),
                                (n.lineWidth = e.borderWidth)
                            var i = e.xAlign,
                                a = e.yAlign,
                                o = t.x,
                                s = t.y,
                                l = r.width,
                                u = r.height,
                                c = e.cornerRadius
                            n.beginPath(),
                                n.moveTo(o + c, s),
                                'top' === a && this.drawCaret(t, r),
                                n.lineTo(o + l - c, s),
                                n.quadraticCurveTo(o + l, s, o + l, s + c),
                                'center' === a && 'right' === i && this.drawCaret(t, r),
                                n.lineTo(o + l, s + u - c),
                                n.quadraticCurveTo(o + l, s + u, o + l - c, s + u),
                                'bottom' === a && this.drawCaret(t, r),
                                n.lineTo(o + c, s + u),
                                n.quadraticCurveTo(o, s + u, o, s + u - c),
                                'center' === a && 'left' === i && this.drawCaret(t, r),
                                n.lineTo(o, s + c),
                                n.quadraticCurveTo(o, s, o + c, s),
                                n.closePath(),
                                n.fill(),
                                e.borderWidth > 0 && n.stroke()
                        },
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view
                            if (0 !== e.opacity) {
                                var n = { width: e.width, height: e.height },
                                    r = { x: e.x, y: e.y },
                                    i = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                                    a =
                                        e.title.length ||
                                        e.beforeBody.length ||
                                        e.body.length ||
                                        e.afterBody.length ||
                                        e.footer.length
                                this._options.enabled &&
                                    a &&
                                    (t.save(),
                                    (t.globalAlpha = i),
                                    this.drawBackground(r, e, t, n),
                                    (r.y += e.yPadding),
                                    j.rtl.overrideTextDirection(t, e.textDirection),
                                    this.drawTitle(r, e, t),
                                    this.drawBody(r, e, t),
                                    this.drawFooter(r, e, t),
                                    j.rtl.restoreTextDirection(t, e.textDirection),
                                    t.restore())
                            }
                        },
                        handleEvent: function(t) {
                            var e,
                                n = this,
                                r = n._options
                            return (
                                (n._lastActive = n._lastActive || []),
                                'mouseout' === t.type
                                    ? (n._active = [])
                                    : ((n._active = n._chart.getElementsAtEventForMode(t, r.mode, r)),
                                      r.reverse && n._active.reverse()),
                                (e = !j.arrayEquals(n._active, n._lastActive)) &&
                                    ((n._lastActive = n._active),
                                    (r.enabled || r.custom) &&
                                        ((n._eventPosition = { x: t.x, y: t.y }), n.update(!0), n.pivot())),
                                e
                            )
                        },
                    }),
                    We = Fe,
                    je = Be
                je.positioners = We
                var Ve = j.valueOrDefault
                function He() {
                    return j.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, n, r) {
                            if ('xAxes' === t || 'yAxes' === t) {
                                var i,
                                    a,
                                    o,
                                    s = n[t].length
                                for (e[t] || (e[t] = []), i = 0; i < s; ++i)
                                    (o = n[t][i]),
                                        (a = Ve(o.type, 'xAxes' === t ? 'category' : 'linear')),
                                        i >= e[t].length && e[t].push({}),
                                        !e[t][i].type || (o.type && o.type !== e[t][i].type)
                                            ? j.merge(e[t][i], [Ie.getScaleDefaults(a), o])
                                            : j.merge(e[t][i], o)
                            } else j._merger(t, e, n, r)
                        },
                    })
                }
                function qe() {
                    return j.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, n, r) {
                            var i = e[t] || {},
                                a = n[t]
                            'scales' === t
                                ? (e[t] = He(i, a))
                                : 'scale' === t
                                ? (e[t] = j.merge(i, [Ie.getScaleDefaults(a.type), a]))
                                : j._merger(t, e, n, r)
                        },
                    })
                }
                function Ue(t) {
                    var e = t.options
                    j.each(t.scales, function(e) {
                        ge.removeBox(t, e)
                    }),
                        (e = qe(R.global, R[t.config.type], e)),
                        (t.options = t.config.options = e),
                        t.ensureScalesHaveIDs(),
                        t.buildOrUpdateScales(),
                        (t.tooltip._options = e.tooltips),
                        t.tooltip.initialize()
                }
                function $e(t, e, n) {
                    var r,
                        i = function(t) {
                            return t.id === r
                        }
                    do {
                        r = e + n++
                    } while (j.findIndex(t, i) >= 0)
                    return r
                }
                function Ye(t) {
                    return 'top' === t || 'bottom' === t
                }
                function Ge(t, e) {
                    return function(n, r) {
                        return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t]
                    }
                }
                R._set('global', {
                    elements: {},
                    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                    hover: { onHover: null, mode: 'nearest', intersect: !0, animationDuration: 400 },
                    onClick: null,
                    maintainAspectRatio: !0,
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                })
                var Ke = function(t, e) {
                    return this.construct(t, e), this
                }
                j.extend(Ke.prototype, {
                    construct: function(t, e) {
                        var n = this
                        e = (function(t) {
                            var e = ((t = t || {}).data = t.data || {})
                            return (
                                (e.datasets = e.datasets || []),
                                (e.labels = e.labels || []),
                                (t.options = qe(R.global, R[t.type], t.options || {})),
                                t
                            )
                        })(e)
                        var r = Pe.acquireContext(t, e),
                            i = r && r.canvas,
                            a = i && i.height,
                            o = i && i.width
                        ;(n.id = j.uid()),
                            (n.ctx = r),
                            (n.canvas = i),
                            (n.config = e),
                            (n.width = o),
                            (n.height = a),
                            (n.aspectRatio = a ? o / a : null),
                            (n.options = e.options),
                            (n._bufferedRender = !1),
                            (n._layers = []),
                            (n.chart = n),
                            (n.controller = n),
                            (Ke.instances[n.id] = n),
                            Object.defineProperty(n, 'data', {
                                get: function() {
                                    return n.config.data
                                },
                                set: function(t) {
                                    n.config.data = t
                                },
                            }),
                            r && i
                                ? (n.initialize(), n.update())
                                : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this
                        return (
                            De.notify(t, 'beforeInit'),
                            j.retinaScale(t, t.options.devicePixelRatio),
                            t.bindEvents(),
                            t.options.responsive && t.resize(!0),
                            t.initToolTip(),
                            De.notify(t, 'afterInit'),
                            t
                        )
                    },
                    clear: function() {
                        return j.canvas.clear(this), this
                    },
                    stop: function() {
                        return X.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            n = e.options,
                            r = e.canvas,
                            i = (n.maintainAspectRatio && e.aspectRatio) || null,
                            a = Math.max(0, Math.floor(j.getMaximumWidth(r))),
                            o = Math.max(0, Math.floor(i ? a / i : j.getMaximumHeight(r)))
                        if (
                            (e.width !== a || e.height !== o) &&
                            ((r.width = e.width = a),
                            (r.height = e.height = o),
                            (r.style.width = a + 'px'),
                            (r.style.height = o + 'px'),
                            j.retinaScale(e, n.devicePixelRatio),
                            !t)
                        ) {
                            var s = { width: a, height: o }
                            De.notify(e, 'resize', [s]),
                                n.onResize && n.onResize(e, s),
                                e.stop(),
                                e.update({ duration: n.responsiveAnimationDuration })
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            n = t.scale
                        j.each(e.xAxes, function(t, n) {
                            t.id || (t.id = $e(e.xAxes, 'x-axis-', n))
                        }),
                            j.each(e.yAxes, function(t, n) {
                                t.id || (t.id = $e(e.yAxes, 'y-axis-', n))
                            }),
                            n && (n.id = n.id || 'scale')
                    },
                    buildOrUpdateScales: function() {
                        var t = this,
                            e = t.options,
                            n = t.scales || {},
                            r = [],
                            i = Object.keys(n).reduce(function(t, e) {
                                return (t[e] = !1), t
                            }, {})
                        e.scales &&
                            (r = r.concat(
                                (e.scales.xAxes || []).map(function(t) {
                                    return { options: t, dtype: 'category', dposition: 'bottom' }
                                }),
                                (e.scales.yAxes || []).map(function(t) {
                                    return { options: t, dtype: 'linear', dposition: 'left' }
                                })
                            )),
                            e.scale &&
                                r.push({
                                    options: e.scale,
                                    dtype: 'radialLinear',
                                    isDefault: !0,
                                    dposition: 'chartArea',
                                }),
                            j.each(r, function(e) {
                                var r = e.options,
                                    a = r.id,
                                    o = Ve(r.type, e.dtype)
                                Ye(r.position) !== Ye(e.dposition) && (r.position = e.dposition), (i[a] = !0)
                                var s = null
                                if (a in n && n[a].type === o) ((s = n[a]).options = r), (s.ctx = t.ctx), (s.chart = t)
                                else {
                                    var l = Ie.getScaleConstructor(o)
                                    if (!l) return
                                    ;(s = new l({ id: a, type: o, options: r, ctx: t.ctx, chart: t })), (n[s.id] = s)
                                }
                                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
                            }),
                            j.each(i, function(t, e) {
                                t || delete n[e]
                            }),
                            (t.scales = n),
                            Ie.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var t,
                            e,
                            n = this,
                            r = [],
                            i = n.data.datasets
                        for (t = 0, e = i.length; t < e; t++) {
                            var a = i[t],
                                o = n.getDatasetMeta(t),
                                s = a.type || n.config.type
                            if (
                                (o.type && o.type !== s && (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
                                (o.type = s),
                                (o.order = a.order || 0),
                                (o.index = t),
                                o.controller)
                            )
                                o.controller.updateIndex(t), o.controller.linkScales()
                            else {
                                var l = Xt[o.type]
                                if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.')
                                ;(o.controller = new l(n, t)), r.push(o.controller)
                            }
                        }
                        return r
                    },
                    resetElements: function() {
                        var t = this
                        j.each(
                            t.data.datasets,
                            function(e, n) {
                                t.getDatasetMeta(n).controller.reset()
                            },
                            t
                        )
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var e,
                            n,
                            r = this
                        if (
                            ((t && 'object' == typeof t) || (t = { duration: t, lazy: arguments[1] }),
                            Ue(r),
                            De._invalidate(r),
                            !1 !== De.notify(r, 'beforeUpdate'))
                        ) {
                            r.tooltip._data = r.data
                            var i = r.buildOrUpdateControllers()
                            for (e = 0, n = r.data.datasets.length; e < n; e++)
                                r.getDatasetMeta(e).controller.buildOrUpdateElements()
                            r.updateLayout(),
                                r.options.animation &&
                                    r.options.animation.duration &&
                                    j.each(i, function(t) {
                                        t.reset()
                                    }),
                                r.updateDatasets(),
                                r.tooltip.initialize(),
                                (r.lastActive = []),
                                De.notify(r, 'afterUpdate'),
                                r._layers.sort(Ge('z', '_idx')),
                                r._bufferedRender
                                    ? (r._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy })
                                    : r.render(t)
                        }
                    },
                    updateLayout: function() {
                        var t = this
                        !1 !== De.notify(t, 'beforeLayout') &&
                            (ge.update(this, this.width, this.height),
                            (t._layers = []),
                            j.each(
                                t.boxes,
                                function(e) {
                                    e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
                                },
                                t
                            ),
                            t._layers.forEach(function(t, e) {
                                t._idx = e
                            }),
                            De.notify(t, 'afterScaleUpdate'),
                            De.notify(t, 'afterLayout'))
                    },
                    updateDatasets: function() {
                        if (!1 !== De.notify(this, 'beforeDatasetsUpdate')) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t)
                            De.notify(this, 'afterDatasetsUpdate')
                        }
                    },
                    updateDataset: function(t) {
                        var e = this.getDatasetMeta(t),
                            n = { meta: e, index: t }
                        !1 !== De.notify(this, 'beforeDatasetUpdate', [n]) &&
                            (e.controller._update(), De.notify(this, 'afterDatasetUpdate', [n]))
                    },
                    render: function(t) {
                        var e = this
                        ;(t && 'object' == typeof t) || (t = { duration: t, lazy: arguments[1] })
                        var n = e.options.animation,
                            r = Ve(t.duration, n && n.duration),
                            i = t.lazy
                        if (!1 !== De.notify(e, 'beforeRender')) {
                            var a = function(t) {
                                De.notify(e, 'afterRender'), j.callback(n && n.onComplete, [t], e)
                            }
                            if (n && r) {
                                var o = new Z({
                                    numSteps: r / 16.66,
                                    easing: t.easing || n.easing,
                                    render: function(t, e) {
                                        var n = j.easing.effects[e.easing],
                                            r = e.currentStep,
                                            i = r / e.numSteps
                                        t.draw(n(i), i, r)
                                    },
                                    onAnimationProgress: n.onProgress,
                                    onAnimationComplete: a,
                                })
                                X.addAnimation(e, o, r, i)
                            } else e.draw(), a(new Z({ numSteps: 0, chart: e }))
                            return e
                        }
                    },
                    draw: function(t) {
                        var e,
                            n,
                            r = this
                        if (
                            (r.clear(),
                            j.isNullOrUndef(t) && (t = 1),
                            r.transition(t),
                            !(r.width <= 0 || r.height <= 0) && !1 !== De.notify(r, 'beforeDraw', [t]))
                        ) {
                            for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(r.chartArea)
                            for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea)
                            r._drawTooltip(t), De.notify(r, 'afterDraw', [t])
                        }
                    },
                    transition: function(t) {
                        for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
                            this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t)
                        this.tooltip.transition(t)
                    },
                    _getSortedDatasetMetas: function(t) {
                        var e,
                            n,
                            r = []
                        for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
                            (t && !this.isDatasetVisible(e)) || r.push(this.getDatasetMeta(e))
                        return r.sort(Ge('order', 'index')), r
                    },
                    _getSortedVisibleDatasetMetas: function() {
                        return this._getSortedDatasetMetas(!0)
                    },
                    drawDatasets: function(t) {
                        var e, n
                        if (!1 !== De.notify(this, 'beforeDatasetsDraw', [t])) {
                            for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n)
                                this.drawDataset(e[n], t)
                            De.notify(this, 'afterDatasetsDraw', [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var n = { meta: t, index: t.index, easingValue: e }
                        !1 !== De.notify(this, 'beforeDatasetDraw', [n]) &&
                            (t.controller.draw(e), De.notify(this, 'afterDatasetDraw', [n]))
                    },
                    _drawTooltip: function(t) {
                        var e = this.tooltip,
                            n = { tooltip: e, easingValue: t }
                        !1 !== De.notify(this, 'beforeTooltipDraw', [n]) &&
                            (e.draw(), De.notify(this, 'afterTooltipDraw', [n]))
                    },
                    getElementAtEvent: function(t) {
                        return ie.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return ie.modes.label(this, t, { intersect: !0 })
                    },
                    getElementsAtXAxis: function(t) {
                        return ie.modes['x-axis'](this, t, { intersect: !0 })
                    },
                    getElementsAtEventForMode: function(t, e, n) {
                        var r = ie.modes[e]
                        return 'function' == typeof r ? r(this, t, n) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return ie.modes.dataset(this, t, { intersect: !0 })
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t]
                        e._meta || (e._meta = {})
                        var n = e._meta[this.id]
                        return (
                            n ||
                                (n = e._meta[this.id] = {
                                    type: null,
                                    data: [],
                                    dataset: null,
                                    controller: null,
                                    hidden: null,
                                    xAxisID: null,
                                    yAxisID: null,
                                    order: e.order || 0,
                                    index: t,
                                }),
                            n
                        )
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
                            this.isDatasetVisible(e) && t++
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t)
                        return 'boolean' == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            n = this.data.datasets[t],
                            r = n._meta && n._meta[e]
                        r && (r.controller.destroy(), delete n._meta[e])
                    },
                    destroy: function() {
                        var t,
                            e,
                            n = this,
                            r = n.canvas
                        for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t)
                        r &&
                            (n.unbindEvents(),
                            j.canvas.clear(n),
                            Pe.releaseContext(n.ctx),
                            (n.canvas = null),
                            (n.ctx = null)),
                            De.notify(n, 'destroy'),
                            delete Ke.instances[n.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this
                        t.tooltip = new je(
                            { _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips },
                            t
                        )
                    },
                    bindEvents: function() {
                        var t = this,
                            e = (t._listeners = {}),
                            n = function() {
                                t.eventHandler.apply(t, arguments)
                            }
                        j.each(t.options.events, function(r) {
                            Pe.addEventListener(t, r, n), (e[r] = n)
                        }),
                            t.options.responsive &&
                                ((n = function() {
                                    t.resize()
                                }),
                                Pe.addEventListener(t, 'resize', n),
                                (e.resize = n))
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners
                        e &&
                            (delete t._listeners,
                            j.each(e, function(e, n) {
                                Pe.removeEventListener(t, n, e)
                            }))
                    },
                    updateHoverStyle: function(t, e, n) {
                        var r,
                            i,
                            a,
                            o = n ? 'set' : 'remove'
                        for (i = 0, a = t.length; i < a; ++i)
                            (r = t[i]) && this.getDatasetMeta(r._datasetIndex).controller[o + 'HoverStyle'](r)
                        'dataset' === e &&
                            this.getDatasetMeta(t[0]._datasetIndex).controller['_' + o + 'DatasetHoverStyle']()
                    },
                    eventHandler: function(t) {
                        var e = this,
                            n = e.tooltip
                        if (!1 !== De.notify(e, 'beforeEvent', [t])) {
                            ;(e._bufferedRender = !0), (e._bufferedRequest = null)
                            var r = e.handleEvent(t)
                            n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
                                De.notify(e, 'afterEvent', [t])
                            var i = e._bufferedRequest
                            return (
                                i
                                    ? e.render(i)
                                    : r &&
                                      !e.animating &&
                                      (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })),
                                (e._bufferedRender = !1),
                                (e._bufferedRequest = null),
                                e
                            )
                        }
                    },
                    handleEvent: function(t) {
                        var e,
                            n = this,
                            r = n.options || {},
                            i = r.hover
                        return (
                            (n.lastActive = n.lastActive || []),
                            'mouseout' === t.type
                                ? (n.active = [])
                                : (n.active = n.getElementsAtEventForMode(t, i.mode, i)),
                            j.callback(r.onHover || r.hover.onHover, [t.native, n.active], n),
                            ('mouseup' !== t.type && 'click' !== t.type) ||
                                (r.onClick && r.onClick.call(n, t.native, n.active)),
                            n.lastActive.length && n.updateHoverStyle(n.lastActive, i.mode, !1),
                            n.active.length && i.mode && n.updateHoverStyle(n.active, i.mode, !0),
                            (e = !j.arrayEquals(n.active, n.lastActive)),
                            (n.lastActive = n.active),
                            e
                        )
                    },
                }),
                    (Ke.instances = {})
                var Ze = Ke
                function Xe() {
                    throw new Error(
                        'This method is not implemented: either no adapter can be found or an incomplete integration was provided.'
                    )
                }
                function Je(t) {
                    this.options = t || {}
                }
                ;(Ke.Controller = Ke),
                    (Ke.types = {}),
                    (j.configMerge = qe),
                    (j.scaleMerge = He),
                    j.extend(Je.prototype, {
                        formats: Xe,
                        parse: Xe,
                        format: Xe,
                        add: Xe,
                        diff: Xe,
                        startOf: Xe,
                        endOf: Xe,
                        _create: function(t) {
                            return t
                        },
                    }),
                    (Je.override = function(t) {
                        j.extend(Je.prototype, t)
                    })
                var Qe = { _date: Je },
                    tn = {
                        formatters: {
                            values: function(t) {
                                return j.isArray(t) ? t : '' + t
                            },
                            linear: function(t, e, n) {
                                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0]
                                Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t))
                                var i = j.log10(Math.abs(r)),
                                    a = ''
                                if (0 !== t)
                                    if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                        var o = j.log10(Math.abs(t)),
                                            s = Math.floor(o) - Math.floor(i)
                                        ;(s = Math.max(Math.min(s, 20), 0)), (a = t.toExponential(s))
                                    } else {
                                        var l = -1 * Math.floor(i)
                                        ;(l = Math.max(Math.min(l, 20), 0)), (a = t.toFixed(l))
                                    }
                                else a = '0'
                                return a
                            },
                            logarithmic: function(t, e, n) {
                                var r = t / Math.pow(10, Math.floor(j.log10(t)))
                                return 0 === t
                                    ? '0'
                                    : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1
                                    ? t.toExponential()
                                    : ''
                            },
                        },
                    },
                    en = j.isArray,
                    nn = j.isNullOrUndef,
                    rn = j.valueOrDefault,
                    an = j.valueAtIndexOrDefault
                function on(t, e, n) {
                    var r,
                        i = t.getTicks().length,
                        a = Math.min(e, i - 1),
                        o = t.getPixelForTick(a),
                        s = t._startPixel,
                        l = t._endPixel
                    if (
                        !(
                            n &&
                            ((r =
                                1 === i
                                    ? Math.max(o - s, l - o)
                                    : 0 === e
                                    ? (t.getPixelForTick(1) - o) / 2
                                    : (o - t.getPixelForTick(a - 1)) / 2),
                            (o += a < e ? r : -r) < s - 1e-6 || o > l + 1e-6)
                        )
                    )
                        return o
                }
                function sn(t, e, n, r) {
                    var i,
                        a,
                        o,
                        s,
                        l,
                        u,
                        c,
                        h,
                        d,
                        f,
                        g,
                        p,
                        v,
                        m = n.length,
                        b = [],
                        y = [],
                        x = []
                    for (i = 0; i < m; ++i) {
                        if (
                            ((s = n[i].label),
                            (l = n[i].major ? e.major : e.minor),
                            (t.font = u = l.string),
                            (c = r[u] = r[u] || { data: {}, gc: [] }),
                            (h = l.lineHeight),
                            (d = f = 0),
                            nn(s) || en(s))
                        ) {
                            if (en(s))
                                for (a = 0, o = s.length; a < o; ++a)
                                    (g = s[a]), nn(g) || en(g) || ((d = j.measureText(t, c.data, c.gc, d, g)), (f += h))
                        } else (d = j.measureText(t, c.data, c.gc, d, s)), (f = h)
                        b.push(d), y.push(f), x.push(h / 2)
                    }
                    function _(t) {
                        return { width: b[t] || 0, height: y[t] || 0, offset: x[t] || 0 }
                    }
                    return (
                        (function(t, e) {
                            j.each(t, function(t) {
                                var n,
                                    r = t.gc,
                                    i = r.length / 2
                                if (i > e) {
                                    for (n = 0; n < i; ++n) delete t.data[r[n]]
                                    r.splice(0, i)
                                }
                            })
                        })(r, m),
                        (p = b.indexOf(Math.max.apply(null, b))),
                        (v = y.indexOf(Math.max.apply(null, y))),
                        { first: _(0), last: _(m - 1), widest: _(p), highest: _(v) }
                    )
                }
                function ln(t) {
                    return t.drawTicks ? t.tickMarkLength : 0
                }
                function un(t) {
                    var e, n
                    return t.display
                        ? ((e = j.options._parseFont(t)), (n = j.options.toPadding(t.padding)), e.lineHeight + n.height)
                        : 0
                }
                function cn(t, e) {
                    return j.extend(
                        j.options._parseFont({
                            fontFamily: rn(e.fontFamily, t.fontFamily),
                            fontSize: rn(e.fontSize, t.fontSize),
                            fontStyle: rn(e.fontStyle, t.fontStyle),
                            lineHeight: rn(e.lineHeight, t.lineHeight),
                        }),
                        { color: j.options.resolve([e.fontColor, t.fontColor, R.global.defaultFontColor]) }
                    )
                }
                function hn(t) {
                    var e = cn(t, t.minor)
                    return { minor: e, major: t.major.enabled ? cn(t, t.major) : e }
                }
                function dn(t) {
                    var e,
                        n,
                        r,
                        i = []
                    for (n = 0, r = t.length; n < r; ++n) void 0 !== (e = t[n])._index && i.push(e)
                    return i
                }
                function fn(t, e, n, r) {
                    var i,
                        a,
                        o,
                        s,
                        l = rn(n, 0),
                        u = Math.min(rn(r, t.length), t.length),
                        c = 0
                    for (e = Math.ceil(e), r && (e = (i = r - n) / Math.floor(i / e)), s = l; s < 0; )
                        c++, (s = Math.round(l + c * e))
                    for (a = Math.max(l, 0); a < u; a++)
                        (o = t[a]), a === s ? ((o._index = a), c++, (s = Math.round(l + c * e))) : delete o.label
                }
                R._set('scale', {
                    display: !0,
                    position: 'left',
                    offset: !1,
                    gridLines: {
                        display: !0,
                        color: 'rgba(0,0,0,0.1)',
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: 'rgba(0,0,0,0.25)',
                        zeroLineBorderDash: [],
                        zeroLineBorderDashOffset: 0,
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0,
                    },
                    scaleLabel: { display: !1, labelString: '', padding: { top: 4, bottom: 4 } },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 0,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: tn.formatters.values,
                        minor: {},
                        major: {},
                    },
                })
                var gn = G.extend({
                    zeroLineIndex: 0,
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0,
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    _getLabels: function() {
                        var t = this.chart.data
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                    },
                    mergeTicksOptions: function() {},
                    beforeUpdate: function() {
                        j.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, n) {
                        var r,
                            i,
                            a,
                            o,
                            s,
                            l = this,
                            u = l.options.ticks,
                            c = u.sampleSize
                        if (
                            (l.beforeUpdate(),
                            (l.maxWidth = t),
                            (l.maxHeight = e),
                            (l.margins = j.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
                            (l._ticks = null),
                            (l.ticks = null),
                            (l._labelSizes = null),
                            (l._maxLabelLines = 0),
                            (l.longestLabelWidth = 0),
                            (l.longestTextCache = l.longestTextCache || {}),
                            (l._gridLineItems = null),
                            (l._labelItems = null),
                            l.beforeSetDimensions(),
                            l.setDimensions(),
                            l.afterSetDimensions(),
                            l.beforeDataLimits(),
                            l.determineDataLimits(),
                            l.afterDataLimits(),
                            l.beforeBuildTicks(),
                            (o = l.buildTicks() || []),
                            (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
                        )
                            for (o = [], r = 0, i = l.ticks.length; r < i; ++r) o.push({ value: l.ticks[r], major: !1 })
                        return (
                            (l._ticks = o),
                            (s = c < o.length),
                            (a = l._convertTicksToLabels(
                                s
                                    ? (function(t, e) {
                                          for (var n = [], r = t.length / e, i = 0, a = t.length; i < a; i += r)
                                              n.push(t[Math.floor(i)])
                                          return n
                                      })(o, c)
                                    : o
                            )),
                            l._configure(),
                            l.beforeCalculateTickRotation(),
                            l.calculateTickRotation(),
                            l.afterCalculateTickRotation(),
                            l.beforeFit(),
                            l.fit(),
                            l.afterFit(),
                            (l._ticksToDraw = u.display && (u.autoSkip || 'auto' === u.source) ? l._autoSkip(o) : o),
                            s && (a = l._convertTicksToLabels(l._ticksToDraw)),
                            (l.ticks = a),
                            l.afterUpdate(),
                            l.minSize
                        )
                    },
                    _configure: function() {
                        var t,
                            e,
                            n = this,
                            r = n.options.ticks.reverse
                        n.isHorizontal() ? ((t = n.left), (e = n.right)) : ((t = n.top), (e = n.bottom), (r = !r)),
                            (n._startPixel = t),
                            (n._endPixel = e),
                            (n._reversePixels = r),
                            (n._length = e - t)
                    },
                    afterUpdate: function() {
                        j.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        j.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this
                        t.isHorizontal()
                            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                            (t.paddingLeft = 0),
                            (t.paddingTop = 0),
                            (t.paddingRight = 0),
                            (t.paddingBottom = 0)
                    },
                    afterSetDimensions: function() {
                        j.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        j.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: j.noop,
                    afterDataLimits: function() {
                        j.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        j.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: j.noop,
                    afterBuildTicks: function(t) {
                        var e = this
                        return en(t) && t.length
                            ? j.callback(e.options.afterBuildTicks, [e, t])
                            : ((e.ticks = j.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks), t)
                    },
                    beforeTickToLabelConversion: function() {
                        j.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this.options.ticks
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        j.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        j.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t,
                            e,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s = this,
                            l = s.options,
                            u = l.ticks,
                            c = s.getTicks().length,
                            h = u.minRotation || 0,
                            d = u.maxRotation,
                            f = h
                        !s._isVisible() || !u.display || h >= d || c <= 1 || !s.isHorizontal()
                            ? (s.labelRotation = h)
                            : ((e = (t = s._getLabelSizes()).widest.width),
                              (n = t.highest.height - t.highest.offset),
                              (r = Math.min(s.maxWidth, s.chart.width - e)),
                              e + 6 > (i = l.offset ? s.maxWidth / c : r / (c - 1)) &&
                                  ((i = r / (c - (l.offset ? 0.5 : 1))),
                                  (a = s.maxHeight - ln(l.gridLines) - u.padding - un(l.scaleLabel)),
                                  (o = Math.sqrt(e * e + n * n)),
                                  (f = j.toDegrees(
                                      Math.min(
                                          Math.asin(Math.min((t.highest.height + 6) / i, 1)),
                                          Math.asin(Math.min(a / o, 1)) - Math.asin(n / o)
                                      )
                                  )),
                                  (f = Math.max(h, Math.min(d, f)))),
                              (s.labelRotation = f))
                    },
                    afterCalculateTickRotation: function() {
                        j.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        j.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            e = (t.minSize = { width: 0, height: 0 }),
                            n = t.chart,
                            r = t.options,
                            i = r.ticks,
                            a = r.scaleLabel,
                            o = r.gridLines,
                            s = t._isVisible(),
                            l = 'bottom' === r.position,
                            u = t.isHorizontal()
                        if (
                            (u ? (e.width = t.maxWidth) : s && (e.width = ln(o) + un(a)),
                            u ? s && (e.height = ln(o) + un(a)) : (e.height = t.maxHeight),
                            i.display && s)
                        ) {
                            var c = hn(i),
                                h = t._getLabelSizes(),
                                d = h.first,
                                f = h.last,
                                g = h.widest,
                                p = h.highest,
                                v = 0.4 * c.minor.lineHeight,
                                m = i.padding
                            if (u) {
                                var b = 0 !== t.labelRotation,
                                    y = j.toRadians(t.labelRotation),
                                    x = Math.cos(y),
                                    _ = Math.sin(y),
                                    w = _ * g.width + x * (p.height - (b ? p.offset : 0)) + (b ? 0 : v)
                                e.height = Math.min(t.maxHeight, e.height + w + m)
                                var k,
                                    M,
                                    S = t.getPixelForTick(0) - t.left,
                                    C = t.right - t.getPixelForTick(t.getTicks().length - 1)
                                b
                                    ? ((k = l ? x * d.width + _ * d.offset : _ * (d.height - d.offset)),
                                      (M = l ? _ * (f.height - f.offset) : x * f.width + _ * f.offset))
                                    : ((k = d.width / 2), (M = f.width / 2)),
                                    (t.paddingLeft = Math.max(((k - S) * t.width) / (t.width - S), 0) + 3),
                                    (t.paddingRight = Math.max(((M - C) * t.width) / (t.width - C), 0) + 3)
                            } else {
                                var A = i.mirror ? 0 : g.width + m + v
                                ;(e.width = Math.min(t.maxWidth, e.width + A)),
                                    (t.paddingTop = d.height / 2),
                                    (t.paddingBottom = f.height / 2)
                            }
                        }
                        t.handleMargins(),
                            u
                                ? ((t.width = t._length = n.width - t.margins.left - t.margins.right),
                                  (t.height = e.height))
                                : ((t.width = e.width),
                                  (t.height = t._length = n.height - t.margins.top - t.margins.bottom))
                    },
                    handleMargins: function() {
                        var t = this
                        t.margins &&
                            ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
                            (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
                            (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
                            (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)))
                    },
                    afterFit: function() {
                        j.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        var t = this.options.position
                        return 'top' === t || 'bottom' === t
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (nn(t)) return NaN
                        if (('number' == typeof t || t instanceof Number) && !isFinite(t)) return NaN
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y)
                        return t
                    },
                    _convertTicksToLabels: function(t) {
                        var e,
                            n,
                            r,
                            i = this
                        for (
                            i.ticks = t.map(function(t) {
                                return t.value
                            }),
                                i.beforeTickToLabelConversion(),
                                e = i.convertTicksToLabels(t) || i.ticks,
                                i.afterTickToLabelConversion(),
                                n = 0,
                                r = t.length;
                            n < r;
                            ++n
                        )
                            t[n].label = e[n]
                        return e
                    },
                    _getLabelSizes: function() {
                        var t = this,
                            e = t._labelSizes
                        return (
                            e ||
                                ((t._labelSizes = e = sn(t.ctx, hn(t.options.ticks), t.getTicks(), t.longestTextCache)),
                                (t.longestLabelWidth = e.widest.width)),
                            e
                        )
                    },
                    _parseValue: function(t) {
                        var e, n, r, i
                        return (
                            en(t)
                                ? ((e = +this.getRightValue(t[0])),
                                  (n = +this.getRightValue(t[1])),
                                  (r = Math.min(e, n)),
                                  (i = Math.max(e, n)))
                                : ((e = void 0), (n = t = +this.getRightValue(t)), (r = t), (i = t)),
                            { min: r, max: i, start: e, end: n }
                        )
                    },
                    _getScaleLabel: function(t) {
                        var e = this._parseValue(t)
                        return void 0 !== e.start ? '[' + e.start + ', ' + e.end + ']' : +this.getRightValue(t)
                    },
                    getLabelForIndex: j.noop,
                    getPixelForValue: j.noop,
                    getValueForPixel: j.noop,
                    getPixelForTick: function(t) {
                        var e = this.options.offset,
                            n = this._ticks.length,
                            r = 1 / Math.max(n - (e ? 0 : 1), 1)
                        return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * r + (e ? r / 2 : 0))
                    },
                    getPixelForDecimal: function(t) {
                        return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
                    },
                    getDecimalForPixel: function(t) {
                        var e = (t - this._startPixel) / this._length
                        return this._reversePixels ? 1 - e : e
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this.min,
                            e = this.max
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    },
                    _autoSkip: function(t) {
                        var e,
                            n,
                            r,
                            i,
                            a = this.options.ticks,
                            o = this._length,
                            s = a.maxTicksLimit || o / this._tickSize() + 1,
                            l = a.major.enabled
                                ? (function(t) {
                                      var e,
                                          n,
                                          r = []
                                      for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e)
                                      return r
                                  })(t)
                                : [],
                            u = l.length,
                            c = l[0],
                            h = l[u - 1]
                        if (u > s)
                            return (
                                (function(t, e, n) {
                                    var r,
                                        i,
                                        a = 0,
                                        o = e[0]
                                    for (n = Math.ceil(n), r = 0; r < t.length; r++)
                                        (i = t[r]), r === o ? ((i._index = r), (o = e[++a * n])) : delete i.label
                                })(t, l, u / s),
                                dn(t)
                            )
                        if (
                            ((r = (function(t, e, n, r) {
                                var i,
                                    a,
                                    o,
                                    s,
                                    l = (function(t) {
                                        var e,
                                            n,
                                            r = t.length
                                        if (r < 2) return !1
                                        for (n = t[0], e = 1; e < r; ++e) if (t[e] - t[e - 1] !== n) return !1
                                        return n
                                    })(t),
                                    u = (e.length - 1) / r
                                if (!l) return Math.max(u, 1)
                                for (o = 0, s = (i = j.math._factorize(l)).length - 1; o < s; o++)
                                    if ((a = i[o]) > u) return a
                                return Math.max(u, 1)
                            })(l, t, 0, s)),
                            u > 0)
                        ) {
                            for (e = 0, n = u - 1; e < n; e++) fn(t, r, l[e], l[e + 1])
                            return (
                                (i = u > 1 ? (h - c) / (u - 1) : null),
                                fn(t, r, j.isNullOrUndef(i) ? 0 : c - i, c),
                                fn(t, r, h, j.isNullOrUndef(i) ? t.length : h + i),
                                dn(t)
                            )
                        }
                        return fn(t, r), dn(t)
                    },
                    _tickSize: function() {
                        var t = this.options.ticks,
                            e = j.toRadians(this.labelRotation),
                            n = Math.abs(Math.cos(e)),
                            r = Math.abs(Math.sin(e)),
                            i = this._getLabelSizes(),
                            a = t.autoSkipPadding || 0,
                            o = i ? i.widest.width + a : 0,
                            s = i ? i.highest.height + a : 0
                        return this.isHorizontal() ? (s * n > o * r ? o / n : s / r) : s * r < o * n ? s / n : o / r
                    },
                    _isVisible: function() {
                        var t,
                            e,
                            n,
                            r = this.chart,
                            i = this.options.display
                        if ('auto' !== i) return !!i
                        for (t = 0, e = r.data.datasets.length; t < e; ++t)
                            if (
                                r.isDatasetVisible(t) &&
                                ((n = r.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)
                            )
                                return !0
                        return !1
                    },
                    _computeGridLineItems: function(t) {
                        var e,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s,
                            l,
                            u,
                            c,
                            h,
                            d,
                            f,
                            g,
                            p,
                            v,
                            m,
                            b = this,
                            y = b.chart,
                            x = b.options,
                            _ = x.gridLines,
                            w = x.position,
                            k = _.offsetGridLines,
                            M = b.isHorizontal(),
                            S = b._ticksToDraw,
                            C = S.length + (k ? 1 : 0),
                            A = ln(_),
                            P = [],
                            D = _.drawBorder ? an(_.lineWidth, 0, 0) : 0,
                            I = D / 2,
                            T = j._alignPixel,
                            L = function(t) {
                                return T(y, t, D)
                            }
                        for (
                            'top' === w
                                ? ((e = L(b.bottom)),
                                  (s = b.bottom - A),
                                  (u = e - I),
                                  (h = L(t.top) + I),
                                  (f = t.bottom))
                                : 'bottom' === w
                                ? ((e = L(b.top)), (h = t.top), (f = L(t.bottom) - I), (s = e + I), (u = b.top + A))
                                : 'left' === w
                                ? ((e = L(b.right)), (o = b.right - A), (l = e - I), (c = L(t.left) + I), (d = t.right))
                                : ((e = L(b.left)), (c = t.left), (d = L(t.right) - I), (o = e + I), (l = b.left + A)),
                                n = 0;
                            n < C;
                            ++n
                        )
                            (r = S[n] || {}),
                                (nn(r.label) && n < S.length) ||
                                    (n === b.zeroLineIndex && x.offset === k
                                        ? ((g = _.zeroLineWidth),
                                          (p = _.zeroLineColor),
                                          (v = _.zeroLineBorderDash || []),
                                          (m = _.zeroLineBorderDashOffset || 0))
                                        : ((g = an(_.lineWidth, n, 1)),
                                          (p = an(_.color, n, 'rgba(0,0,0,0.1)')),
                                          (v = _.borderDash || []),
                                          (m = _.borderDashOffset || 0)),
                                    void 0 !== (i = on(b, r._index || n, k)) &&
                                        ((a = T(y, i, g)),
                                        M ? (o = l = c = d = a) : (s = u = h = f = a),
                                        P.push({
                                            tx1: o,
                                            ty1: s,
                                            tx2: l,
                                            ty2: u,
                                            x1: c,
                                            y1: h,
                                            x2: d,
                                            y2: f,
                                            width: g,
                                            color: p,
                                            borderDash: v,
                                            borderDashOffset: m,
                                        })))
                        return (P.ticksLength = C), (P.borderValue = e), P
                    },
                    _computeLabelItems: function() {
                        var t,
                            e,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s,
                            l,
                            u,
                            c,
                            h,
                            d = this,
                            f = d.options,
                            g = f.ticks,
                            p = f.position,
                            v = g.mirror,
                            m = d.isHorizontal(),
                            b = d._ticksToDraw,
                            y = hn(g),
                            x = g.padding,
                            _ = ln(f.gridLines),
                            w = -j.toRadians(d.labelRotation),
                            k = []
                        for (
                            'top' === p
                                ? ((a = d.bottom - _ - x), (o = w ? 'left' : 'center'))
                                : 'bottom' === p
                                ? ((a = d.top + _ + x), (o = w ? 'right' : 'center'))
                                : 'left' === p
                                ? ((i = d.right - (v ? 0 : _) - x), (o = v ? 'left' : 'right'))
                                : ((i = d.left + (v ? 0 : _) + x), (o = v ? 'right' : 'left')),
                                t = 0,
                                e = b.length;
                            t < e;
                            ++t
                        )
                            (r = (n = b[t]).label),
                                nn(r) ||
                                    ((s = d.getPixelForTick(n._index || t) + g.labelOffset),
                                    (u = (l = n.major ? y.major : y.minor).lineHeight),
                                    (c = en(r) ? r.length : 1),
                                    m
                                        ? ((i = s), (h = 'top' === p ? ((w ? 1 : 0.5) - c) * u : (w ? 0 : 0.5) * u))
                                        : ((a = s), (h = ((1 - c) * u) / 2)),
                                    k.push({ x: i, y: a, rotation: w, label: r, font: l, textOffset: h, textAlign: o }))
                        return k
                    },
                    _drawGrid: function(t) {
                        var e = this,
                            n = e.options.gridLines
                        if (n.display) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l = e.ctx,
                                u = e.chart,
                                c = j._alignPixel,
                                h = n.drawBorder ? an(n.lineWidth, 0, 0) : 0,
                                d = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t))
                            for (a = 0, o = d.length; a < o; ++a)
                                (r = (s = d[a]).width),
                                    (i = s.color),
                                    r &&
                                        i &&
                                        (l.save(),
                                        (l.lineWidth = r),
                                        (l.strokeStyle = i),
                                        l.setLineDash &&
                                            (l.setLineDash(s.borderDash), (l.lineDashOffset = s.borderDashOffset)),
                                        l.beginPath(),
                                        n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                                        n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                                        l.stroke(),
                                        l.restore())
                            if (h) {
                                var f,
                                    g,
                                    p,
                                    v,
                                    m = h,
                                    b = an(n.lineWidth, d.ticksLength - 1, 1),
                                    y = d.borderValue
                                e.isHorizontal()
                                    ? ((f = c(u, e.left, m) - m / 2), (g = c(u, e.right, b) + b / 2), (p = v = y))
                                    : ((p = c(u, e.top, m) - m / 2), (v = c(u, e.bottom, b) + b / 2), (f = g = y)),
                                    (l.lineWidth = h),
                                    (l.strokeStyle = an(n.color, 0)),
                                    l.beginPath(),
                                    l.moveTo(f, p),
                                    l.lineTo(g, v),
                                    l.stroke()
                            }
                        }
                    },
                    _drawLabels: function() {
                        var t = this
                        if (t.options.ticks.display) {
                            var e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u = t.ctx,
                                c = t._labelItems || (t._labelItems = t._computeLabelItems())
                            for (e = 0, r = c.length; e < r; ++e) {
                                if (
                                    ((o = (a = c[e]).font),
                                    u.save(),
                                    u.translate(a.x, a.y),
                                    u.rotate(a.rotation),
                                    (u.font = o.string),
                                    (u.fillStyle = o.color),
                                    (u.textBaseline = 'middle'),
                                    (u.textAlign = a.textAlign),
                                    (s = a.label),
                                    (l = a.textOffset),
                                    en(s))
                                )
                                    for (n = 0, i = s.length; n < i; ++n)
                                        u.fillText('' + s[n], 0, l), (l += o.lineHeight)
                                else u.fillText(s, 0, l)
                                u.restore()
                            }
                        }
                    },
                    _drawTitle: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options,
                            r = n.scaleLabel
                        if (r.display) {
                            var i,
                                a,
                                o = rn(r.fontColor, R.global.defaultFontColor),
                                s = j.options._parseFont(r),
                                l = j.options.toPadding(r.padding),
                                u = s.lineHeight / 2,
                                c = n.position,
                                h = 0
                            if (t.isHorizontal())
                                (i = t.left + t.width / 2),
                                    (a = 'bottom' === c ? t.bottom - u - l.bottom : t.top + u + l.top)
                            else {
                                var d = 'left' === c
                                ;(i = d ? t.left + u + l.top : t.right - u - l.top),
                                    (a = t.top + t.height / 2),
                                    (h = d ? -0.5 * Math.PI : 0.5 * Math.PI)
                            }
                            e.save(),
                                e.translate(i, a),
                                e.rotate(h),
                                (e.textAlign = 'center'),
                                (e.textBaseline = 'middle'),
                                (e.fillStyle = o),
                                (e.font = s.string),
                                e.fillText(r.labelString, 0, 0),
                                e.restore()
                        }
                    },
                    draw: function(t) {
                        this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
                    },
                    _layers: function() {
                        var t = this,
                            e = t.options,
                            n = (e.ticks && e.ticks.z) || 0,
                            r = (e.gridLines && e.gridLines.z) || 0
                        return t._isVisible() && n !== r && t.draw === t._draw
                            ? [
                                  {
                                      z: r,
                                      draw: function() {
                                          t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                                      },
                                  },
                                  {
                                      z: n,
                                      draw: function() {
                                          t._drawLabels.apply(t, arguments)
                                      },
                                  },
                              ]
                            : [
                                  {
                                      z: n,
                                      draw: function() {
                                          t.draw.apply(t, arguments)
                                      },
                                  },
                              ]
                    },
                    _getMatchingVisibleMetas: function(t) {
                        var e = this,
                            n = e.isHorizontal()
                        return e.chart._getSortedVisibleDatasetMetas().filter(function(r) {
                            return (!t || r.type === t) && (n ? r.xAxisID === e.id : r.yAxisID === e.id)
                        })
                    },
                })
                gn.prototype._draw = gn.prototype.draw
                var pn = gn,
                    vn = j.isNullOrUndef,
                    mn = pn.extend({
                        determineDataLimits: function() {
                            var t,
                                e = this,
                                n = e._getLabels(),
                                r = e.options.ticks,
                                i = r.min,
                                a = r.max,
                                o = 0,
                                s = n.length - 1
                            void 0 !== i && (t = n.indexOf(i)) >= 0 && (o = t),
                                void 0 !== a && (t = n.indexOf(a)) >= 0 && (s = t),
                                (e.minIndex = o),
                                (e.maxIndex = s),
                                (e.min = n[o]),
                                (e.max = n[s])
                        },
                        buildTicks: function() {
                            var t = this._getLabels(),
                                e = this.minIndex,
                                n = this.maxIndex
                            this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this.chart
                            return n.getDatasetMeta(e).controller._getValueScaleId() === this.id
                                ? this.getRightValue(n.data.datasets[e].data[t])
                                : this._getLabels()[t]
                        },
                        _configure: function() {
                            var t = this,
                                e = t.options.offset,
                                n = t.ticks
                            pn.prototype._configure.call(t),
                                t.isHorizontal() || (t._reversePixels = !t._reversePixels),
                                n &&
                                    ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                                    (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)))
                        },
                        getPixelForValue: function(t, e, n) {
                            var r,
                                i,
                                a,
                                o = this
                            return (
                                vn(e) || vn(n) || (t = o.chart.data.datasets[n].data[e]),
                                vn(t) || (r = o.isHorizontal() ? t.x : t.y),
                                (void 0 !== r || (void 0 !== t && isNaN(e))) &&
                                    ((i = o._getLabels()),
                                    (t = j.valueOrDefault(r, t)),
                                    (e = -1 !== (a = i.indexOf(t)) ? a : e),
                                    isNaN(e) && (e = t)),
                                o.getPixelForDecimal((e - o._startValue) / o._valueRange)
                            )
                        },
                        getPixelForTick: function(t) {
                            var e = this.ticks
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                        },
                        getValueForPixel: function(t) {
                            var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                            return Math.min(Math.max(e, 0), this.ticks.length - 1)
                        },
                        getBasePixel: function() {
                            return this.bottom
                        },
                    }),
                    bn = { position: 'bottom' }
                mn._defaults = bn
                var yn = j.noop,
                    xn = j.isNullOrUndef,
                    _n = pn.extend({
                        getRightValue: function(t) {
                            return 'string' == typeof t ? +t : pn.prototype.getRightValue.call(this, t)
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks
                            if (e.beginAtZero) {
                                var n = j.sign(t.min),
                                    r = j.sign(t.max)
                                n < 0 && r < 0 ? (t.max = 0) : n > 0 && r > 0 && (t.min = 0)
                            }
                            var i = void 0 !== e.min || void 0 !== e.suggestedMin,
                                a = void 0 !== e.max || void 0 !== e.suggestedMax
                            void 0 !== e.min
                                ? (t.min = e.min)
                                : void 0 !== e.suggestedMin &&
                                  (null === t.min
                                      ? (t.min = e.suggestedMin)
                                      : (t.min = Math.min(t.min, e.suggestedMin))),
                                void 0 !== e.max
                                    ? (t.max = e.max)
                                    : void 0 !== e.suggestedMax &&
                                      (null === t.max
                                          ? (t.max = e.suggestedMax)
                                          : (t.max = Math.max(t.max, e.suggestedMax))),
                                i !== a && t.min >= t.max && (i ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                                t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                        },
                        getTickLimit: function() {
                            var t,
                                e = this.options.ticks,
                                n = e.stepSize,
                                r = e.maxTicksLimit
                            return (
                                n
                                    ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
                                    : ((t = this._computeTickLimit()), (r = r || 11)),
                                r && (t = Math.min(r, t)),
                                t
                            )
                        },
                        _computeTickLimit: function() {
                            return Number.POSITIVE_INFINITY
                        },
                        handleDirectionalChanges: yn,
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = t.getTickLimit(),
                                r = {
                                    maxTicks: (n = Math.max(2, n)),
                                    min: e.min,
                                    max: e.max,
                                    precision: e.precision,
                                    stepSize: j.valueOrDefault(e.fixedStepSize, e.stepSize),
                                },
                                i = (t.ticks = (function(t, e) {
                                    var n,
                                        r,
                                        i,
                                        a,
                                        o = [],
                                        s = t.stepSize,
                                        l = s || 1,
                                        u = t.maxTicks - 1,
                                        c = t.min,
                                        h = t.max,
                                        d = t.precision,
                                        f = e.min,
                                        g = e.max,
                                        p = j.niceNum((g - f) / u / l) * l
                                    if (p < 1e-14 && xn(c) && xn(h)) return [f, g]
                                    ;(a = Math.ceil(g / p) - Math.floor(f / p)) > u &&
                                        (p = j.niceNum((a * p) / u / l) * l),
                                        s || xn(d)
                                            ? (n = Math.pow(10, j._decimalPlaces(p)))
                                            : ((n = Math.pow(10, d)), (p = Math.ceil(p * n) / n)),
                                        (r = Math.floor(f / p) * p),
                                        (i = Math.ceil(g / p) * p),
                                        s &&
                                            (!xn(c) && j.almostWhole(c / p, p / 1e3) && (r = c),
                                            !xn(h) && j.almostWhole(h / p, p / 1e3) && (i = h)),
                                        (a = (i - r) / p),
                                        (a = j.almostEquals(a, Math.round(a), p / 1e3) ? Math.round(a) : Math.ceil(a)),
                                        (r = Math.round(r * n) / n),
                                        (i = Math.round(i * n) / n),
                                        o.push(xn(c) ? r : c)
                                    for (var v = 1; v < a; ++v) o.push(Math.round((r + v * p) * n) / n)
                                    return o.push(xn(h) ? i : h), o
                                })(r, t))
                            t.handleDirectionalChanges(),
                                (t.max = j.max(i)),
                                (t.min = j.min(i)),
                                e.reverse
                                    ? (i.reverse(), (t.start = t.max), (t.end = t.min))
                                    : ((t.start = t.min), (t.end = t.max))
                        },
                        convertTicksToLabels: function() {
                            var t = this
                            ;(t.ticksAsNumbers = t.ticks.slice()),
                                (t.zeroLineIndex = t.ticks.indexOf(0)),
                                pn.prototype.convertTicksToLabels.call(t)
                        },
                        _configure: function() {
                            var t,
                                e = this,
                                n = e.getTicks(),
                                r = e.min,
                                i = e.max
                            pn.prototype._configure.call(e),
                                e.options.offset &&
                                    n.length &&
                                    ((r -= t = (i - r) / Math.max(n.length - 1, 1) / 2), (i += t)),
                                (e._startValue = r),
                                (e._endValue = i),
                                (e._valueRange = i - r)
                        },
                    }),
                    wn = { position: 'left', ticks: { callback: tn.formatters.linear } }
                function kn(t, e, n, r) {
                    var i,
                        a,
                        o = t.options,
                        s = (function(t, e, n) {
                            var r = [n.type, void 0 === e && void 0 === n.stack ? n.index : '', n.stack].join('.')
                            return void 0 === t[r] && (t[r] = { pos: [], neg: [] }), t[r]
                        })(e, o.stacked, n),
                        l = s.pos,
                        u = s.neg,
                        c = r.length
                    for (i = 0; i < c; ++i)
                        (a = t._parseValue(r[i])),
                            isNaN(a.min) ||
                                isNaN(a.max) ||
                                n.data[i].hidden ||
                                ((l[i] = l[i] || 0),
                                (u[i] = u[i] || 0),
                                o.relativePoints
                                    ? (l[i] = 100)
                                    : a.min < 0 || a.max < 0
                                    ? (u[i] += a.min)
                                    : (l[i] += a.max))
                }
                function Mn(t, e, n) {
                    var r,
                        i,
                        a = n.length
                    for (r = 0; r < a; ++r)
                        (i = t._parseValue(n[r])),
                            isNaN(i.min) ||
                                isNaN(i.max) ||
                                e.data[r].hidden ||
                                ((t.min = Math.min(t.min, i.min)), (t.max = Math.max(t.max, i.max)))
                }
                var Sn = _n.extend({
                        determineDataLimits: function() {
                            var t,
                                e,
                                n,
                                r,
                                i = this,
                                a = i.options,
                                o = i.chart.data.datasets,
                                s = i._getMatchingVisibleMetas(),
                                l = a.stacked,
                                u = {},
                                c = s.length
                            if (((i.min = Number.POSITIVE_INFINITY), (i.max = Number.NEGATIVE_INFINITY), void 0 === l))
                                for (t = 0; !l && t < c; ++t) l = void 0 !== (e = s[t]).stack
                            for (t = 0; t < c; ++t) (n = o[(e = s[t]).index].data), l ? kn(i, u, e, n) : Mn(i, e, n)
                            j.each(u, function(t) {
                                ;(r = t.pos.concat(t.neg)),
                                    (i.min = Math.min(i.min, j.min(r))),
                                    (i.max = Math.max(i.max, j.max(r)))
                            }),
                                (i.min = j.isFinite(i.min) && !isNaN(i.min) ? i.min : 0),
                                (i.max = j.isFinite(i.max) && !isNaN(i.max) ? i.max : 1),
                                i.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() {
                            var t
                            return this.isHorizontal()
                                ? Math.ceil(this.width / 40)
                                : ((t = j.options._parseFont(this.options.ticks)),
                                  Math.ceil(this.height / t.lineHeight))
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            return this.getPixelForDecimal(
                                (+this.getRightValue(t) - this._startValue) / this._valueRange
                            )
                        },
                        getValueForPixel: function(t) {
                            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                        },
                        getPixelForTick: function(t) {
                            var e = this.ticksAsNumbers
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                        },
                    }),
                    Cn = wn
                Sn._defaults = Cn
                var An = j.valueOrDefault,
                    Pn = j.math.log10,
                    Dn = { position: 'left', ticks: { callback: tn.formatters.logarithmic } }
                function In(t, e) {
                    return j.isFinite(t) && t >= 0 ? t : e
                }
                var Tn = pn.extend({
                        determineDataLimits: function() {
                            var t,
                                e,
                                n,
                                r,
                                i,
                                a,
                                o = this,
                                s = o.options,
                                l = o.chart,
                                u = l.data.datasets,
                                c = o.isHorizontal()
                            function h(t) {
                                return c ? t.xAxisID === o.id : t.yAxisID === o.id
                            }
                            ;(o.min = Number.POSITIVE_INFINITY),
                                (o.max = Number.NEGATIVE_INFINITY),
                                (o.minNotZero = Number.POSITIVE_INFINITY)
                            var d = s.stacked
                            if (void 0 === d)
                                for (t = 0; t < u.length; t++)
                                    if (
                                        ((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack)
                                    ) {
                                        d = !0
                                        break
                                    }
                            if (s.stacked || d) {
                                var f = {}
                                for (t = 0; t < u.length; t++) {
                                    var g = [
                                        (e = l.getDatasetMeta(t)).type,
                                        void 0 === s.stacked && void 0 === e.stack ? t : '',
                                        e.stack,
                                    ].join('.')
                                    if (l.isDatasetVisible(t) && h(e))
                                        for (
                                            void 0 === f[g] && (f[g] = []), i = 0, a = (r = u[t].data).length;
                                            i < a;
                                            i++
                                        ) {
                                            var p = f[g]
                                            ;(n = o._parseValue(r[i])),
                                                isNaN(n.min) ||
                                                    isNaN(n.max) ||
                                                    e.data[i].hidden ||
                                                    n.min < 0 ||
                                                    n.max < 0 ||
                                                    ((p[i] = p[i] || 0), (p[i] += n.max))
                                        }
                                }
                                j.each(f, function(t) {
                                    if (t.length > 0) {
                                        var e = j.min(t),
                                            n = j.max(t)
                                        ;(o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n))
                                    }
                                })
                            } else
                                for (t = 0; t < u.length; t++)
                                    if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && h(e)))
                                        for (i = 0, a = (r = u[t].data).length; i < a; i++)
                                            (n = o._parseValue(r[i])),
                                                isNaN(n.min) ||
                                                    isNaN(n.max) ||
                                                    e.data[i].hidden ||
                                                    n.min < 0 ||
                                                    n.max < 0 ||
                                                    ((o.min = Math.min(n.min, o.min)),
                                                    (o.max = Math.max(n.max, o.max)),
                                                    0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)))
                            ;(o.min = j.isFinite(o.min) ? o.min : null),
                                (o.max = j.isFinite(o.max) ? o.max : null),
                                (o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null),
                                this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks
                            ;(t.min = In(e.min, t.min)),
                                (t.max = In(e.max, t.max)),
                                t.min === t.max &&
                                    (0 !== t.min && null !== t.min
                                        ? ((t.min = Math.pow(10, Math.floor(Pn(t.min)) - 1)),
                                          (t.max = Math.pow(10, Math.floor(Pn(t.max)) + 1)))
                                        : ((t.min = 1), (t.max = 10))),
                                null === t.min && (t.min = Math.pow(10, Math.floor(Pn(t.max)) - 1)),
                                null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Pn(t.min)) + 1) : 10),
                                null === t.minNotZero &&
                                    (t.min > 0
                                        ? (t.minNotZero = t.min)
                                        : t.max < 1
                                        ? (t.minNotZero = Math.pow(10, Math.floor(Pn(t.max))))
                                        : (t.minNotZero = 1))
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = !t.isHorizontal(),
                                r = { min: In(e.min), max: In(e.max) },
                                i = (t.ticks = (function(t, e) {
                                    var n,
                                        r,
                                        i = [],
                                        a = An(t.min, Math.pow(10, Math.floor(Pn(e.min)))),
                                        o = Math.floor(Pn(e.max)),
                                        s = Math.ceil(e.max / Math.pow(10, o))
                                    0 === a
                                        ? ((n = Math.floor(Pn(e.minNotZero))),
                                          (r = Math.floor(e.minNotZero / Math.pow(10, n))),
                                          i.push(a),
                                          (a = r * Math.pow(10, n)))
                                        : ((n = Math.floor(Pn(a))), (r = Math.floor(a / Math.pow(10, n))))
                                    var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1
                                    do {
                                        i.push(a),
                                            10 == ++r && ((r = 1), (l = ++n >= 0 ? 1 : l)),
                                            (a = Math.round(r * Math.pow(10, n) * l) / l)
                                    } while (n < o || (n === o && r < s))
                                    var u = An(t.max, a)
                                    return i.push(u), i
                                })(r, t))
                            ;(t.max = j.max(i)),
                                (t.min = j.min(i)),
                                e.reverse
                                    ? ((n = !n), (t.start = t.max), (t.end = t.min))
                                    : ((t.start = t.min), (t.end = t.max)),
                                n && i.reverse()
                        },
                        convertTicksToLabels: function() {
                            ;(this.tickValues = this.ticks.slice()), pn.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            var e = this.tickValues
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                        },
                        _getFirstTickValue: function(t) {
                            var e = Math.floor(Pn(t))
                            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                        },
                        _configure: function() {
                            var t = this,
                                e = t.min,
                                n = 0
                            pn.prototype._configure.call(t),
                                0 === e &&
                                    ((e = t._getFirstTickValue(t.minNotZero)),
                                    (n = An(t.options.ticks.fontSize, R.global.defaultFontSize) / t._length)),
                                (t._startValue = Pn(e)),
                                (t._valueOffset = n),
                                (t._valueRange = (Pn(t.max) - Pn(e)) / (1 - n))
                        },
                        getPixelForValue: function(t) {
                            var e = this,
                                n = 0
                            return (
                                (t = +e.getRightValue(t)) > e.min &&
                                    t > 0 &&
                                    (n = (Pn(t) - e._startValue) / e._valueRange + e._valueOffset),
                                e.getPixelForDecimal(n)
                            )
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.getDecimalForPixel(t)
                            return 0 === n && 0 === e.min
                                ? 0
                                : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
                        },
                    }),
                    Ln = Dn
                Tn._defaults = Ln
                var Fn = j.valueOrDefault,
                    On = j.valueAtIndexOrDefault,
                    zn = j.options.resolve,
                    Rn = {
                        display: !0,
                        animate: !0,
                        position: 'chartArea',
                        angleLines: {
                            display: !0,
                            color: 'rgba(0,0,0,0.1)',
                            lineWidth: 1,
                            borderDash: [],
                            borderDashOffset: 0,
                        },
                        gridLines: { circular: !1 },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: 'rgba(255,255,255,0.75)',
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: tn.formatters.linear,
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            },
                        },
                    }
                function En(t) {
                    var e = t.ticks
                    return e.display && t.display
                        ? Fn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY
                        : 0
                }
                function Nn(t, e, n, r, i) {
                    return t === r || t === i
                        ? { start: e - n / 2, end: e + n / 2 }
                        : t < r || t > i
                        ? { start: e - n, end: e }
                        : { start: e, end: e + n }
                }
                function Bn(t) {
                    return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right'
                }
                function Wn(t, e, n, r) {
                    var i,
                        a,
                        o = n.y + r / 2
                    if (j.isArray(e)) for (i = 0, a = e.length; i < a; ++i) t.fillText(e[i], n.x, o), (o += r)
                    else t.fillText(e, n.x, o)
                }
                function jn(t, e, n) {
                    90 === t || 270 === t ? (n.y -= e.h / 2) : (t > 270 || t < 90) && (n.y -= e.h)
                }
                function Vn(t) {
                    return j.isNumber(t) ? t : 0
                }
                var Hn = _n.extend({
                        setDimensions: function() {
                            var t = this
                            ;(t.width = t.maxWidth),
                                (t.height = t.maxHeight),
                                (t.paddingTop = En(t.options) / 2),
                                (t.xCenter = Math.floor(t.width / 2)),
                                (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                                (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2)
                        },
                        determineDataLimits: function() {
                            var t = this,
                                e = t.chart,
                                n = Number.POSITIVE_INFINITY,
                                r = Number.NEGATIVE_INFINITY
                            j.each(e.data.datasets, function(i, a) {
                                if (e.isDatasetVisible(a)) {
                                    var o = e.getDatasetMeta(a)
                                    j.each(i.data, function(e, i) {
                                        var a = +t.getRightValue(e)
                                        isNaN(a) || o.data[i].hidden || ((n = Math.min(a, n)), (r = Math.max(a, r)))
                                    })
                                }
                            }),
                                (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                                (t.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
                                t.handleTickRangeOptions()
                        },
                        _computeTickLimit: function() {
                            return Math.ceil(this.drawingArea / En(this.options))
                        },
                        convertTicksToLabels: function() {
                            var t = this
                            _n.prototype.convertTicksToLabels.call(t),
                                (t.pointLabels = t.chart.data.labels.map(function() {
                                    var e = j.callback(t.options.pointLabels.callback, arguments, t)
                                    return e || 0 === e ? e : ''
                                }))
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t = this.options
                            t.display && t.pointLabels.display
                                ? (function(t) {
                                      var e,
                                          n,
                                          r,
                                          i = j.options._parseFont(t.options.pointLabels),
                                          a = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                                          o = {}
                                      ;(t.ctx.font = i.string), (t._pointLabelSizes = [])
                                      var s,
                                          l,
                                          u,
                                          c = t.chart.data.labels.length
                                      for (e = 0; e < c; e++) {
                                          ;(r = t.getPointPosition(e, t.drawingArea + 5)),
                                              (s = t.ctx),
                                              (l = i.lineHeight),
                                              (u = t.pointLabels[e]),
                                              (n = j.isArray(u)
                                                  ? { w: j.longestText(s, s.font, u), h: u.length * l }
                                                  : { w: s.measureText(u).width, h: l }),
                                              (t._pointLabelSizes[e] = n)
                                          var h = t.getIndexAngle(e),
                                              d = j.toDegrees(h) % 360,
                                              f = Nn(d, r.x, n.w, 0, 180),
                                              g = Nn(d, r.y, n.h, 90, 270)
                                          f.start < a.l && ((a.l = f.start), (o.l = h)),
                                              f.end > a.r && ((a.r = f.end), (o.r = h)),
                                              g.start < a.t && ((a.t = g.start), (o.t = h)),
                                              g.end > a.b && ((a.b = g.end), (o.b = h))
                                      }
                                      t.setReductions(t.drawingArea, a, o)
                                  })(this)
                                : this.setCenterPoint(0, 0, 0, 0)
                        },
                        setReductions: function(t, e, n) {
                            var r = this,
                                i = e.l / Math.sin(n.l),
                                a = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                                o = -e.t / Math.cos(n.t),
                                s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b)
                            ;(i = Vn(i)),
                                (a = Vn(a)),
                                (o = Vn(o)),
                                (s = Vn(s)),
                                (r.drawingArea = Math.min(Math.floor(t - (i + a) / 2), Math.floor(t - (o + s) / 2))),
                                r.setCenterPoint(i, a, o, s)
                        },
                        setCenterPoint: function(t, e, n, r) {
                            var i = this,
                                a = i.width - e - i.drawingArea,
                                o = t + i.drawingArea,
                                s = n + i.drawingArea,
                                l = i.height - i.paddingTop - r - i.drawingArea
                            ;(i.xCenter = Math.floor((o + a) / 2 + i.left)),
                                (i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop))
                        },
                        getIndexAngle: function(t) {
                            var e = this.chart,
                                n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360
                            return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this
                            if (j.isNullOrUndef(t)) return NaN
                            var n = e.drawingArea / (e.max - e.min)
                            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                        },
                        getPointPosition: function(t, e) {
                            var n = this.getIndexAngle(t) - Math.PI / 2
                            return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function(t) {
                            var e = this.min,
                                n = this.max
                            return this.getPointPositionForValue(
                                t || 0,
                                this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
                            )
                        },
                        _drawGrid: function() {
                            var t,
                                e,
                                n,
                                r = this,
                                i = r.ctx,
                                a = r.options,
                                o = a.gridLines,
                                s = a.angleLines,
                                l = Fn(s.lineWidth, o.lineWidth),
                                u = Fn(s.color, o.color)
                            if (
                                (a.pointLabels.display &&
                                    (function(t) {
                                        var e = t.ctx,
                                            n = t.options,
                                            r = n.pointLabels,
                                            i = En(n),
                                            a = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                            o = j.options._parseFont(r)
                                        e.save(), (e.font = o.string), (e.textBaseline = 'middle')
                                        for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                                            var l = 0 === s ? i / 2 : 0,
                                                u = t.getPointPosition(s, a + l + 5),
                                                c = On(r.fontColor, s, R.global.defaultFontColor)
                                            e.fillStyle = c
                                            var h = t.getIndexAngle(s),
                                                d = j.toDegrees(h)
                                            ;(e.textAlign = Bn(d)),
                                                jn(d, t._pointLabelSizes[s], u),
                                                Wn(e, t.pointLabels[s], u, o.lineHeight)
                                        }
                                        e.restore()
                                    })(r),
                                o.display &&
                                    j.each(r.ticks, function(t, n) {
                                        0 !== n &&
                                            ((e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n])),
                                            (function(t, e, n, r) {
                                                var i,
                                                    a = t.ctx,
                                                    o = e.circular,
                                                    s = t.chart.data.labels.length,
                                                    l = On(e.color, r - 1),
                                                    u = On(e.lineWidth, r - 1)
                                                if ((o || s) && l && u) {
                                                    if (
                                                        (a.save(),
                                                        (a.strokeStyle = l),
                                                        (a.lineWidth = u),
                                                        a.setLineDash &&
                                                            (a.setLineDash(e.borderDash || []),
                                                            (a.lineDashOffset = e.borderDashOffset || 0)),
                                                        a.beginPath(),
                                                        o)
                                                    )
                                                        a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI)
                                                    else {
                                                        ;(i = t.getPointPosition(0, n)), a.moveTo(i.x, i.y)
                                                        for (var c = 1; c < s; c++)
                                                            (i = t.getPointPosition(c, n)), a.lineTo(i.x, i.y)
                                                    }
                                                    a.closePath(), a.stroke(), a.restore()
                                                }
                                            })(r, o, e, n))
                                    }),
                                s.display && l && u)
                            ) {
                                for (
                                    i.save(),
                                        i.lineWidth = l,
                                        i.strokeStyle = u,
                                        i.setLineDash &&
                                            (i.setLineDash(zn([s.borderDash, o.borderDash, []])),
                                            (i.lineDashOffset = zn([s.borderDashOffset, o.borderDashOffset, 0]))),
                                        t = r.chart.data.labels.length - 1;
                                    t >= 0;
                                    t--
                                )
                                    (e = r.getDistanceFromCenterForValue(a.ticks.reverse ? r.min : r.max)),
                                        (n = r.getPointPosition(t, e)),
                                        i.beginPath(),
                                        i.moveTo(r.xCenter, r.yCenter),
                                        i.lineTo(n.x, n.y),
                                        i.stroke()
                                i.restore()
                            }
                        },
                        _drawLabels: function() {
                            var t = this,
                                e = t.ctx,
                                n = t.options.ticks
                            if (n.display) {
                                var r,
                                    i,
                                    a = t.getIndexAngle(0),
                                    o = j.options._parseFont(n),
                                    s = Fn(n.fontColor, R.global.defaultFontColor)
                                e.save(),
                                    (e.font = o.string),
                                    e.translate(t.xCenter, t.yCenter),
                                    e.rotate(a),
                                    (e.textAlign = 'center'),
                                    (e.textBaseline = 'middle'),
                                    j.each(t.ticks, function(a, l) {
                                        ;(0 !== l || n.reverse) &&
                                            ((r = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l])),
                                            n.showLabelBackdrop &&
                                                ((i = e.measureText(a).width),
                                                (e.fillStyle = n.backdropColor),
                                                e.fillRect(
                                                    -i / 2 - n.backdropPaddingX,
                                                    -r - o.size / 2 - n.backdropPaddingY,
                                                    i + 2 * n.backdropPaddingX,
                                                    o.size + 2 * n.backdropPaddingY
                                                )),
                                            (e.fillStyle = s),
                                            e.fillText(a, 0, -r))
                                    }),
                                    e.restore()
                            }
                        },
                        _drawTitle: j.noop,
                    }),
                    qn = Rn
                Hn._defaults = qn
                var Un = j._deprecated,
                    $n = j.options.resolve,
                    Yn = j.valueOrDefault,
                    Gn = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    Kn = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    Zn = {
                        millisecond: { common: !0, size: 1, steps: 1e3 },
                        second: { common: !0, size: 1e3, steps: 60 },
                        minute: { common: !0, size: 6e4, steps: 60 },
                        hour: { common: !0, size: 36e5, steps: 24 },
                        day: { common: !0, size: 864e5, steps: 30 },
                        week: { common: !1, size: 6048e5, steps: 4 },
                        month: { common: !0, size: 2628e6, steps: 12 },
                        quarter: { common: !1, size: 7884e6, steps: 4 },
                        year: { common: !0, size: 3154e7 },
                    },
                    Xn = Object.keys(Zn)
                function Jn(t, e) {
                    return t - e
                }
                function Qn(t) {
                    return j.valueOrDefault(t.time.min, t.ticks.min)
                }
                function tr(t) {
                    return j.valueOrDefault(t.time.max, t.ticks.max)
                }
                function er(t, e, n, r) {
                    var i = (function(t, e, n) {
                            for (var r, i, a, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
                                if (((i = t[(r = (o + s) >> 1) - 1] || null), (a = t[r]), !i))
                                    return { lo: null, hi: a }
                                if (a[e] < n) o = r + 1
                                else {
                                    if (!(i[e] > n)) return { lo: i, hi: a }
                                    s = r - 1
                                }
                            }
                            return { lo: a, hi: null }
                        })(t, e, n),
                        a = i.lo ? (i.hi ? i.lo : t[t.length - 2]) : t[0],
                        o = i.lo ? (i.hi ? i.hi : t[t.length - 1]) : t[1],
                        s = o[e] - a[e],
                        l = s ? (n - a[e]) / s : 0,
                        u = (o[r] - a[r]) * l
                    return a[r] + u
                }
                function nr(t, e) {
                    var n = t._adapter,
                        r = t.options.time,
                        i = r.parser,
                        a = i || r.format,
                        o = e
                    return (
                        'function' == typeof i && (o = i(o)),
                        j.isFinite(o) || (o = 'string' == typeof a ? n.parse(o, a) : n.parse(o)),
                        null !== o
                            ? +o
                            : (i || 'function' != typeof a || ((o = a(e)), j.isFinite(o) || (o = n.parse(o))), o)
                    )
                }
                function rr(t, e) {
                    if (j.isNullOrUndef(e)) return null
                    var n = t.options.time,
                        r = nr(t, t.getRightValue(e))
                    return null === r || (n.round && (r = +t._adapter.startOf(r, n.round))), r
                }
                function ir(t, e, n, r) {
                    var i,
                        a,
                        o,
                        s = Xn.length
                    for (i = Xn.indexOf(t); i < s - 1; ++i)
                        if (
                            ((o = (a = Zn[Xn[i]]).steps ? a.steps : Kn),
                            a.common && Math.ceil((n - e) / (o * a.size)) <= r)
                        )
                            return Xn[i]
                    return Xn[s - 1]
                }
                function ar(t, e, n) {
                    var r,
                        i,
                        a = [],
                        o = {},
                        s = e.length
                    for (r = 0; r < s; ++r) (o[(i = e[r])] = r), a.push({ value: i, major: !1 })
                    return 0 !== s && n
                        ? (function(t, e, n, r) {
                              var i,
                                  a,
                                  o = t._adapter,
                                  s = +o.startOf(e[0].value, r),
                                  l = e[e.length - 1].value
                              for (i = s; i <= l; i = +o.add(i, 1, r)) (a = n[i]) >= 0 && (e[a].major = !0)
                              return e
                          })(t, a, o, n)
                        : a
                }
                var or = pn.extend({
                        initialize: function() {
                            this.mergeTicksOptions(), pn.prototype.initialize.call(this)
                        },
                        update: function() {
                            var t = this,
                                e = t.options,
                                n = e.time || (e.time = {}),
                                r = (t._adapter = new Qe._date(e.adapters.date))
                            return (
                                Un('time scale', n.format, 'time.format', 'time.parser'),
                                Un('time scale', n.min, 'time.min', 'ticks.min'),
                                Un('time scale', n.max, 'time.max', 'ticks.max'),
                                j.mergeIf(n.displayFormats, r.formats()),
                                pn.prototype.update.apply(t, arguments)
                            )
                        },
                        getRightValue: function(t) {
                            return t && void 0 !== t.t && (t = t.t), pn.prototype.getRightValue.call(this, t)
                        },
                        determineDataLimits: function() {
                            var t,
                                e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s = this,
                                l = s.chart,
                                u = s._adapter,
                                c = s.options,
                                h = c.time.unit || 'day',
                                d = Kn,
                                f = Gn,
                                g = [],
                                p = [],
                                v = [],
                                m = s._getLabels()
                            for (t = 0, n = m.length; t < n; ++t) v.push(rr(s, m[t]))
                            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                                if (l.isDatasetVisible(t))
                                    if (((i = l.data.datasets[t].data), j.isObject(i[0])))
                                        for (p[t] = [], e = 0, r = i.length; e < r; ++e)
                                            (a = rr(s, i[e])), g.push(a), (p[t][e] = a)
                                    else (p[t] = v.slice(0)), o || ((g = g.concat(v)), (o = !0))
                                else p[t] = []
                            v.length && ((d = Math.min(d, v[0])), (f = Math.max(f, v[v.length - 1]))),
                                g.length &&
                                    ((g =
                                        n > 1
                                            ? (function(t) {
                                                  var e,
                                                      n,
                                                      r,
                                                      i = {},
                                                      a = []
                                                  for (e = 0, n = t.length; e < n; ++e)
                                                      i[(r = t[e])] || ((i[r] = !0), a.push(r))
                                                  return a
                                              })(g).sort(Jn)
                                            : g.sort(Jn)),
                                    (d = Math.min(d, g[0])),
                                    (f = Math.max(f, g[g.length - 1]))),
                                (d = rr(s, Qn(c)) || d),
                                (f = rr(s, tr(c)) || f),
                                (d = d === Kn ? +u.startOf(Date.now(), h) : d),
                                (f = f === Gn ? +u.endOf(Date.now(), h) + 1 : f),
                                (s.min = Math.min(d, f)),
                                (s.max = Math.max(d + 1, f)),
                                (s._table = []),
                                (s._timestamps = { data: g, datasets: p, labels: v })
                        },
                        buildTicks: function() {
                            var t,
                                e,
                                n,
                                r = this,
                                i = r.min,
                                a = r.max,
                                o = r.options,
                                s = o.ticks,
                                l = o.time,
                                u = r._timestamps,
                                c = [],
                                h = r.getLabelCapacity(i),
                                d = s.source,
                                f = o.distribution
                            for (
                                u =
                                    'data' === d || ('auto' === d && 'series' === f)
                                        ? u.data
                                        : 'labels' === d
                                        ? u.labels
                                        : (function(t, e, n, r) {
                                              var i,
                                                  a = t._adapter,
                                                  o = t.options,
                                                  s = o.time,
                                                  l = s.unit || ir(s.minUnit, e, n, r),
                                                  u = $n([s.stepSize, s.unitStepSize, 1]),
                                                  c = 'week' === l && s.isoWeekday,
                                                  h = e,
                                                  d = []
                                              if (
                                                  (c && (h = +a.startOf(h, 'isoWeek', c)),
                                                  (h = +a.startOf(h, c ? 'day' : l)),
                                                  a.diff(n, e, l) > 1e5 * u)
                                              )
                                                  throw e +
                                                      ' and ' +
                                                      n +
                                                      ' are too far apart with stepSize of ' +
                                                      u +
                                                      ' ' +
                                                      l
                                              for (i = h; i < n; i = +a.add(i, u, l)) d.push(i)
                                              return (i !== n && 'ticks' !== o.bounds) || d.push(i), d
                                          })(r, i, a, h),
                                    'ticks' === o.bounds && u.length && ((i = u[0]), (a = u[u.length - 1])),
                                    i = rr(r, Qn(o)) || i,
                                    a = rr(r, tr(o)) || a,
                                    t = 0,
                                    e = u.length;
                                t < e;
                                ++t
                            )
                                (n = u[t]) >= i && n <= a && c.push(n)
                            return (
                                (r.min = i),
                                (r.max = a),
                                (r._unit =
                                    l.unit ||
                                    (s.autoSkip
                                        ? ir(l.minUnit, r.min, r.max, h)
                                        : (function(t, e, n, r, i) {
                                              var a, o
                                              for (a = Xn.length - 1; a >= Xn.indexOf(n); a--)
                                                  if (((o = Xn[a]), Zn[o].common && t._adapter.diff(i, r, o) >= e - 1))
                                                      return o
                                              return Xn[n ? Xn.indexOf(n) : 0]
                                          })(r, c.length, l.minUnit, r.min, r.max))),
                                (r._majorUnit =
                                    s.major.enabled && 'year' !== r._unit
                                        ? (function(t) {
                                              for (var e = Xn.indexOf(t) + 1, n = Xn.length; e < n; ++e)
                                                  if (Zn[Xn[e]].common) return Xn[e]
                                          })(r._unit)
                                        : void 0),
                                (r._table = (function(t, e, n, r) {
                                    if ('linear' === r || !t.length)
                                        return [
                                            { time: e, pos: 0 },
                                            { time: n, pos: 1 },
                                        ]
                                    var i,
                                        a,
                                        o,
                                        s,
                                        l,
                                        u = [],
                                        c = [e]
                                    for (i = 0, a = t.length; i < a; ++i) (s = t[i]) > e && s < n && c.push(s)
                                    for (c.push(n), i = 0, a = c.length; i < a; ++i)
                                        (l = c[i + 1]),
                                            (o = c[i - 1]),
                                            (s = c[i]),
                                            (void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s) ||
                                                u.push({ time: s, pos: i / (a - 1) })
                                    return u
                                })(r._timestamps.data, i, a, f)),
                                (r._offsets = (function(t, e, n, r, i) {
                                    var a,
                                        o,
                                        s = 0,
                                        l = 0
                                    return (
                                        i.offset &&
                                            e.length &&
                                            ((a = er(t, 'time', e[0], 'pos')),
                                            (s = 1 === e.length ? 1 - a : (er(t, 'time', e[1], 'pos') - a) / 2),
                                            (o = er(t, 'time', e[e.length - 1], 'pos')),
                                            (l = 1 === e.length ? o : (o - er(t, 'time', e[e.length - 2], 'pos')) / 2)),
                                        { start: s, end: l, factor: 1 / (s + 1 + l) }
                                    )
                                })(r._table, c, 0, 0, o)),
                                s.reverse && c.reverse(),
                                ar(r, c, r._majorUnit)
                            )
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this,
                                r = n._adapter,
                                i = n.chart.data,
                                a = n.options.time,
                                o = i.labels && t < i.labels.length ? i.labels[t] : '',
                                s = i.datasets[e].data[t]
                            return (
                                j.isObject(s) && (o = n.getRightValue(s)),
                                a.tooltipFormat
                                    ? r.format(nr(n, o), a.tooltipFormat)
                                    : 'string' == typeof o
                                    ? o
                                    : r.format(nr(n, o), a.displayFormats.datetime)
                            )
                        },
                        tickFormatFunction: function(t, e, n, r) {
                            var i = this._adapter,
                                a = this.options,
                                o = a.time.displayFormats,
                                s = o[this._unit],
                                l = this._majorUnit,
                                u = o[l],
                                c = n[e],
                                h = a.ticks,
                                d = l && u && c && c.major,
                                f = i.format(t, r || (d ? u : s)),
                                g = d ? h.major : h.minor,
                                p = $n([g.callback, g.userCallback, h.callback, h.userCallback])
                            return p ? p(f, e, n) : f
                        },
                        convertTicksToLabels: function(t) {
                            var e,
                                n,
                                r = []
                            for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(t[e].value, e, t))
                            return r
                        },
                        getPixelForOffset: function(t) {
                            var e = this._offsets,
                                n = er(this._table, 'time', t, 'pos')
                            return this.getPixelForDecimal((e.start + n) * e.factor)
                        },
                        getPixelForValue: function(t, e, n) {
                            var r = null
                            if (
                                (void 0 !== e && void 0 !== n && (r = this._timestamps.datasets[n][e]),
                                null === r && (r = rr(this, t)),
                                null !== r)
                            )
                                return this.getPixelForOffset(r)
                        },
                        getPixelForTick: function(t) {
                            var e = this.getTicks()
                            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        },
                        getValueForPixel: function(t) {
                            var e = this._offsets,
                                n = this.getDecimalForPixel(t) / e.factor - e.end,
                                r = er(this._table, 'pos', n, 'time')
                            return this._adapter._create(r)
                        },
                        _getLabelSize: function(t) {
                            var e = this.options.ticks,
                                n = this.ctx.measureText(t).width,
                                r = j.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                                i = Math.cos(r),
                                a = Math.sin(r),
                                o = Yn(e.fontSize, R.global.defaultFontSize)
                            return { w: n * i + o * a, h: n * a + o * i }
                        },
                        getLabelWidth: function(t) {
                            return this._getLabelSize(t).w
                        },
                        getLabelCapacity: function(t) {
                            var e = this,
                                n = e.options.time,
                                r = n.displayFormats,
                                i = r[n.unit] || r.millisecond,
                                a = e.tickFormatFunction(t, 0, ar(e, [t], e._majorUnit), i),
                                o = e._getLabelSize(a),
                                s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h)
                            return e.options.offset && s--, s > 0 ? s : 1
                        },
                    }),
                    sr = {
                        position: 'bottom',
                        distribution: 'linear',
                        bounds: 'data',
                        adapters: {},
                        time: {
                            parser: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: 'millisecond',
                            displayFormats: {},
                        },
                        ticks: { autoSkip: !1, source: 'auto', major: { enabled: !1 } },
                    }
                or._defaults = sr
                var lr = { category: mn, linear: Sn, logarithmic: Tn, radialLinear: Hn, time: or },
                    ur = {
                        datetime: 'MMM D, YYYY, h:mm:ss a',
                        millisecond: 'h:mm:ss.SSS a',
                        second: 'h:mm:ss a',
                        minute: 'h:mm a',
                        hour: 'hA',
                        day: 'MMM D',
                        week: 'll',
                        month: 'MMM YYYY',
                        quarter: '[Q]Q - YYYY',
                        year: 'YYYY',
                    }
                Qe._date.override(
                    'function' == typeof t
                        ? {
                              _id: 'moment',
                              formats: function() {
                                  return ur
                              },
                              parse: function(e, n) {
                                  return (
                                      'string' == typeof e && 'string' == typeof n
                                          ? (e = t(e, n))
                                          : e instanceof t || (e = t(e)),
                                      e.isValid() ? e.valueOf() : null
                                  )
                              },
                              format: function(e, n) {
                                  return t(e).format(n)
                              },
                              add: function(e, n, r) {
                                  return t(e)
                                      .add(n, r)
                                      .valueOf()
                              },
                              diff: function(e, n, r) {
                                  return t(e).diff(t(n), r)
                              },
                              startOf: function(e, n, r) {
                                  return (
                                      (e = t(e)), 'isoWeek' === n ? e.isoWeekday(r).valueOf() : e.startOf(n).valueOf()
                                  )
                              },
                              endOf: function(e, n) {
                                  return t(e)
                                      .endOf(n)
                                      .valueOf()
                              },
                              _create: function(e) {
                                  return t(e)
                              },
                          }
                        : {}
                ),
                    R._set('global', { plugins: { filler: { propagate: !0 } } })
                var cr = {
                    dataset: function(t) {
                        var e = t.fill,
                            n = t.chart,
                            r = n.getDatasetMeta(e),
                            i = (r && n.isDatasetVisible(e) && r.dataset._children) || [],
                            a = i.length || 0
                        return a
                            ? function(t, e) {
                                  return (e < a && i[e]._view) || null
                              }
                            : null
                    },
                    boundary: function(t) {
                        var e = t.boundary,
                            n = e ? e.x : null,
                            r = e ? e.y : null
                        return j.isArray(e)
                            ? function(t, n) {
                                  return e[n]
                              }
                            : function(t) {
                                  return { x: null === n ? t.x : n, y: null === r ? t.y : r }
                              }
                    },
                }
                function hr(t, e, n) {
                    var r,
                        i = t._model || {},
                        a = i.fill
                    if ((void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a)) return !1
                    if (!0 === a) return 'origin'
                    if (((r = parseFloat(a, 10)), isFinite(r) && Math.floor(r) === r))
                        return ('-' !== a[0] && '+' !== a[0]) || (r = e + r), !(r === e || r < 0 || r >= n) && r
                    switch (a) {
                        case 'bottom':
                            return 'start'
                        case 'top':
                            return 'end'
                        case 'zero':
                            return 'origin'
                        case 'origin':
                        case 'start':
                        case 'end':
                            return a
                        default:
                            return !1
                    }
                }
                function dr(t) {
                    return (t.el._scale || {}).getPointPositionForValue
                        ? (function(t) {
                              var e,
                                  n,
                                  r,
                                  i,
                                  a,
                                  o = t.el._scale,
                                  s = o.options,
                                  l = o.chart.data.labels.length,
                                  u = t.fill,
                                  c = []
                              if (!l) return null
                              for (
                                  e = s.ticks.reverse ? o.max : o.min,
                                      n = s.ticks.reverse ? o.min : o.max,
                                      r = o.getPointPositionForValue(0, e),
                                      i = 0;
                                  i < l;
                                  ++i
                              )
                                  (a =
                                      'start' === u || 'end' === u
                                          ? o.getPointPositionForValue(i, 'start' === u ? e : n)
                                          : o.getBasePosition(i)),
                                      s.gridLines.circular &&
                                          ((a.cx = r.x), (a.cy = r.y), (a.angle = o.getIndexAngle(i) - Math.PI / 2)),
                                      c.push(a)
                              return c
                          })(t)
                        : (function(t) {
                              var e,
                                  n = t.el._model || {},
                                  r = t.el._scale || {},
                                  i = t.fill,
                                  a = null
                              if (isFinite(i)) return null
                              if (
                                  ('start' === i
                                      ? (a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
                                      : 'end' === i
                                      ? (a = void 0 === n.scaleTop ? r.top : n.scaleTop)
                                      : void 0 !== n.scaleZero
                                      ? (a = n.scaleZero)
                                      : r.getBasePixel && (a = r.getBasePixel()),
                                  null != a)
                              ) {
                                  if (void 0 !== a.x && void 0 !== a.y) return a
                                  if (j.isFinite(a)) return { x: (e = r.isHorizontal()) ? a : null, y: e ? null : a }
                              }
                              return null
                          })(t)
                }
                function fr(t, e, n) {
                    var r,
                        i = t[e].fill,
                        a = [e]
                    if (!n) return i
                    for (; !1 !== i && -1 === a.indexOf(i); ) {
                        if (!isFinite(i)) return i
                        if (!(r = t[i])) return !1
                        if (r.visible) return i
                        a.push(i), (i = r.fill)
                    }
                    return !1
                }
                function gr(t) {
                    var e = t.fill,
                        n = 'dataset'
                    return !1 === e ? null : (isFinite(e) || (n = 'boundary'), cr[n](t))
                }
                function pr(t) {
                    return t && !t.skip
                }
                function vr(t, e, n, r, i) {
                    var a, o, s, l
                    if (r && i) {
                        for (t.moveTo(e[0].x, e[0].y), a = 1; a < r; ++a) j.canvas.lineTo(t, e[a - 1], e[a])
                        if (void 0 === n[0].angle)
                            for (t.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a)
                                j.canvas.lineTo(t, n[a], n[a - 1], !0)
                        else
                            for (
                                o = n[0].cx,
                                    s = n[0].cy,
                                    l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)),
                                    a = i - 1;
                                a > 0;
                                --a
                            )
                                t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0)
                    }
                }
                function mr(t, e, n, r, i, a) {
                    var o,
                        s,
                        l,
                        u,
                        c,
                        h,
                        d,
                        f,
                        g = e.length,
                        p = r.spanGaps,
                        v = [],
                        m = [],
                        b = 0,
                        y = 0
                    for (t.beginPath(), o = 0, s = g; o < s; ++o)
                        (c = n((u = e[(l = o % g)]._view), l, r)),
                            (h = pr(u)),
                            (d = pr(c)),
                            a && void 0 === f && h && (s = g + (f = o + 1)),
                            h && d
                                ? ((b = v.push(u)), (y = m.push(c)))
                                : b &&
                                  y &&
                                  (p
                                      ? (h && v.push(u), d && m.push(c))
                                      : (vr(t, v, m, b, y), (b = y = 0), (v = []), (m = [])))
                    vr(t, v, m, b, y), t.closePath(), (t.fillStyle = i), t.fill()
                }
                var br = {
                        id: 'filler',
                        afterDatasetsUpdate: function(t, e) {
                            var n,
                                r,
                                i,
                                a,
                                o = (t.data.datasets || []).length,
                                s = e.propagate,
                                l = []
                            for (r = 0; r < o; ++r)
                                (a = null),
                                    (i = (n = t.getDatasetMeta(r)).dataset) &&
                                        i._model &&
                                        i instanceof _t.Line &&
                                        (a = { visible: t.isDatasetVisible(r), fill: hr(i, r, o), chart: t, el: i }),
                                    (n.$filler = a),
                                    l.push(a)
                            for (r = 0; r < o; ++r)
                                (a = l[r]) && ((a.fill = fr(l, r, s)), (a.boundary = dr(a)), (a.mapper = gr(a)))
                        },
                        beforeDatasetsDraw: function(t) {
                            var e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l = t._getSortedVisibleDatasetMetas(),
                                u = t.ctx
                            for (n = l.length - 1; n >= 0; --n)
                                (e = l[n].$filler) &&
                                    e.visible &&
                                    ((i = (r = e.el)._view),
                                    (a = r._children || []),
                                    (o = e.mapper),
                                    (s = i.backgroundColor || R.global.defaultColor),
                                    o &&
                                        s &&
                                        a.length &&
                                        (j.canvas.clipArea(u, t.chartArea),
                                        mr(u, a, o, i, s, r._loop),
                                        j.canvas.unclipArea(u)))
                        },
                    },
                    yr = j.rtl.getRtlAdapter,
                    xr = j.noop,
                    _r = j.valueOrDefault
                function wr(t, e) {
                    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
                }
                R._set('global', {
                    legend: {
                        display: !0,
                        position: 'top',
                        align: 'center',
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function(t, e) {
                            var n = e.datasetIndex,
                                r = this.chart,
                                i = r.getDatasetMeta(n)
                            ;(i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null), r.update()
                        },
                        onHover: null,
                        onLeave: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function(t) {
                                var e = t.data.datasets,
                                    n = t.options.legend || {},
                                    r = n.labels && n.labels.usePointStyle
                                return t._getSortedDatasetMetas().map(function(n) {
                                    var i = n.controller.getStyle(r ? 0 : void 0)
                                    return {
                                        text: e[n.index].label,
                                        fillStyle: i.backgroundColor,
                                        hidden: !t.isDatasetVisible(n.index),
                                        lineCap: i.borderCapStyle,
                                        lineDash: i.borderDash,
                                        lineDashOffset: i.borderDashOffset,
                                        lineJoin: i.borderJoinStyle,
                                        lineWidth: i.borderWidth,
                                        strokeStyle: i.borderColor,
                                        pointStyle: i.pointStyle,
                                        rotation: i.rotation,
                                        datasetIndex: n.index,
                                    }
                                }, this)
                            },
                        },
                    },
                    legendCallback: function(t) {
                        var e,
                            n,
                            r,
                            i = document.createElement('ul'),
                            a = t.data.datasets
                        for (i.setAttribute('class', t.id + '-legend'), e = 0, n = a.length; e < n; e++)
                            ((r = i.appendChild(document.createElement('li'))).appendChild(
                                document.createElement('span')
                            ).style.backgroundColor = a[e].backgroundColor),
                                a[e].label && r.appendChild(document.createTextNode(a[e].label))
                        return i.outerHTML
                    },
                })
                var kr = G.extend({
                    initialize: function(t) {
                        j.extend(this, t),
                            (this.legendHitBoxes = []),
                            (this._hoveredItem = null),
                            (this.doughnutMode = !1)
                    },
                    beforeUpdate: xr,
                    update: function(t, e, n) {
                        var r = this
                        return (
                            r.beforeUpdate(),
                            (r.maxWidth = t),
                            (r.maxHeight = e),
                            (r.margins = n),
                            r.beforeSetDimensions(),
                            r.setDimensions(),
                            r.afterSetDimensions(),
                            r.beforeBuildLabels(),
                            r.buildLabels(),
                            r.afterBuildLabels(),
                            r.beforeFit(),
                            r.fit(),
                            r.afterFit(),
                            r.afterUpdate(),
                            r.minSize
                        )
                    },
                    afterUpdate: xr,
                    beforeSetDimensions: xr,
                    setDimensions: function() {
                        var t = this
                        t.isHorizontal()
                            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                            (t.paddingLeft = 0),
                            (t.paddingTop = 0),
                            (t.paddingRight = 0),
                            (t.paddingBottom = 0),
                            (t.minSize = { width: 0, height: 0 })
                    },
                    afterSetDimensions: xr,
                    beforeBuildLabels: xr,
                    buildLabels: function() {
                        var t = this,
                            e = t.options.labels || {},
                            n = j.callback(e.generateLabels, [t.chart], t) || []
                        e.filter &&
                            (n = n.filter(function(n) {
                                return e.filter(n, t.chart.data)
                            })),
                            t.options.reverse && n.reverse(),
                            (t.legendItems = n)
                    },
                    afterBuildLabels: xr,
                    beforeFit: xr,
                    fit: function() {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            r = e.display,
                            i = t.ctx,
                            a = j.options._parseFont(n),
                            o = a.size,
                            s = (t.legendHitBoxes = []),
                            l = t.minSize,
                            u = t.isHorizontal()
                        if (
                            (u
                                ? ((l.width = t.maxWidth), (l.height = r ? 10 : 0))
                                : ((l.width = r ? 10 : 0), (l.height = t.maxHeight)),
                            r)
                        ) {
                            if (((i.font = a.string), u)) {
                                var c = (t.lineWidths = [0]),
                                    h = 0
                                ;(i.textAlign = 'left'),
                                    (i.textBaseline = 'middle'),
                                    j.each(t.legendItems, function(t, e) {
                                        var r = wr(n, o) + o / 2 + i.measureText(t.text).width
                                        ;(0 === e || c[c.length - 1] + r + 2 * n.padding > l.width) &&
                                            ((h += o + n.padding), (c[c.length - (e > 0 ? 0 : 1)] = 0)),
                                            (s[e] = { left: 0, top: 0, width: r, height: o }),
                                            (c[c.length - 1] += r + n.padding)
                                    }),
                                    (l.height += h)
                            } else {
                                var d = n.padding,
                                    f = (t.columnWidths = []),
                                    g = (t.columnHeights = []),
                                    p = n.padding,
                                    v = 0,
                                    m = 0
                                j.each(t.legendItems, function(t, e) {
                                    var r = wr(n, o) + o / 2 + i.measureText(t.text).width
                                    e > 0 &&
                                        m + o + 2 * d > l.height &&
                                        ((p += v + n.padding), f.push(v), g.push(m), (v = 0), (m = 0)),
                                        (v = Math.max(v, r)),
                                        (m += o + d),
                                        (s[e] = { left: 0, top: 0, width: r, height: o })
                                }),
                                    (p += v),
                                    f.push(v),
                                    g.push(m),
                                    (l.width += p)
                            }
                            ;(t.width = l.width), (t.height = l.height)
                        } else t.width = l.width = t.height = l.height = 0
                    },
                    afterFit: xr,
                    isHorizontal: function() {
                        return 'top' === this.options.position || 'bottom' === this.options.position
                    },
                    draw: function() {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            r = R.global,
                            i = r.defaultColor,
                            a = r.elements.line,
                            o = t.height,
                            s = t.columnHeights,
                            l = t.width,
                            u = t.lineWidths
                        if (e.display) {
                            var c,
                                h = yr(e.rtl, t.left, t.minSize.width),
                                d = t.ctx,
                                f = _r(n.fontColor, r.defaultFontColor),
                                g = j.options._parseFont(n),
                                p = g.size
                            ;(d.textAlign = h.textAlign('left')),
                                (d.textBaseline = 'middle'),
                                (d.lineWidth = 0.5),
                                (d.strokeStyle = f),
                                (d.fillStyle = f),
                                (d.font = g.string)
                            var v = wr(n, p),
                                m = t.legendHitBoxes,
                                b = function(t, r) {
                                    switch (e.align) {
                                        case 'start':
                                            return n.padding
                                        case 'end':
                                            return t - r
                                        default:
                                            return (t - r + n.padding) / 2
                                    }
                                },
                                y = t.isHorizontal()
                            ;(c = y
                                ? { x: t.left + b(l, u[0]), y: t.top + n.padding, line: 0 }
                                : { x: t.left + n.padding, y: t.top + b(o, s[0]), line: 0 }),
                                j.rtl.overrideTextDirection(t.ctx, e.textDirection)
                            var x = p + n.padding
                            j.each(t.legendItems, function(e, r) {
                                var f = d.measureText(e.text).width,
                                    g = v + p / 2 + f,
                                    _ = c.x,
                                    w = c.y
                                h.setWidth(t.minSize.width),
                                    y
                                        ? r > 0 &&
                                          _ + g + n.padding > t.left + t.minSize.width &&
                                          ((w = c.y += x), c.line++, (_ = c.x = t.left + b(l, u[c.line])))
                                        : r > 0 &&
                                          w + x > t.top + t.minSize.height &&
                                          ((_ = c.x = _ + t.columnWidths[c.line] + n.padding),
                                          c.line++,
                                          (w = c.y = t.top + b(o, s[c.line])))
                                var k = h.x(_)
                                !(function(t, e, r) {
                                    if (!(isNaN(v) || v <= 0)) {
                                        d.save()
                                        var o = _r(r.lineWidth, a.borderWidth)
                                        if (
                                            ((d.fillStyle = _r(r.fillStyle, i)),
                                            (d.lineCap = _r(r.lineCap, a.borderCapStyle)),
                                            (d.lineDashOffset = _r(r.lineDashOffset, a.borderDashOffset)),
                                            (d.lineJoin = _r(r.lineJoin, a.borderJoinStyle)),
                                            (d.lineWidth = o),
                                            (d.strokeStyle = _r(r.strokeStyle, i)),
                                            d.setLineDash && d.setLineDash(_r(r.lineDash, a.borderDash)),
                                            n && n.usePointStyle)
                                        ) {
                                            var s = (v * Math.SQRT2) / 2,
                                                l = h.xPlus(t, v / 2),
                                                u = e + p / 2
                                            j.canvas.drawPoint(d, r.pointStyle, s, l, u, r.rotation)
                                        } else
                                            d.fillRect(h.leftForLtr(t, v), e, v, p),
                                                0 !== o && d.strokeRect(h.leftForLtr(t, v), e, v, p)
                                        d.restore()
                                    }
                                })(k, w, e),
                                    (m[r].left = h.leftForLtr(k, m[r].width)),
                                    (m[r].top = w),
                                    (function(t, e, n, r) {
                                        var i = p / 2,
                                            a = h.xPlus(t, v + i),
                                            o = e + i
                                        d.fillText(n.text, a, o),
                                            n.hidden &&
                                                (d.beginPath(),
                                                (d.lineWidth = 2),
                                                d.moveTo(a, o),
                                                d.lineTo(h.xPlus(a, r), o),
                                                d.stroke())
                                    })(k, w, e, f),
                                    y ? (c.x += g + n.padding) : (c.y += x)
                            }),
                                j.rtl.restoreTextDirection(t.ctx, e.textDirection)
                        }
                    },
                    _getLegendItemAt: function(t, e) {
                        var n,
                            r,
                            i,
                            a = this
                        if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
                            for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
                                if (
                                    t >= (r = i[n]).left &&
                                    t <= r.left + r.width &&
                                    e >= r.top &&
                                    e <= r.top + r.height
                                )
                                    return a.legendItems[n]
                        return null
                    },
                    handleEvent: function(t) {
                        var e,
                            n = this,
                            r = n.options,
                            i = 'mouseup' === t.type ? 'click' : t.type
                        if ('mousemove' === i) {
                            if (!r.onHover && !r.onLeave) return
                        } else {
                            if ('click' !== i) return
                            if (!r.onClick) return
                        }
                        ;(e = n._getLegendItemAt(t.x, t.y)),
                            'click' === i
                                ? e && r.onClick && r.onClick.call(n, t.native, e)
                                : (r.onLeave &&
                                      e !== n._hoveredItem &&
                                      (n._hoveredItem && r.onLeave.call(n, t.native, n._hoveredItem),
                                      (n._hoveredItem = e)),
                                  r.onHover && e && r.onHover.call(n, t.native, e))
                    },
                })
                function Mr(t, e) {
                    var n = new kr({ ctx: t.ctx, options: e, chart: t })
                    ge.configure(t, n, e), ge.addBox(t, n), (t.legend = n)
                }
                var Sr = {
                        id: 'legend',
                        _element: kr,
                        beforeInit: function(t) {
                            var e = t.options.legend
                            e && Mr(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.legend,
                                n = t.legend
                            e
                                ? (j.mergeIf(e, R.global.legend),
                                  n ? (ge.configure(t, n, e), (n.options = e)) : Mr(t, e))
                                : n && (ge.removeBox(t, n), delete t.legend)
                        },
                        afterEvent: function(t, e) {
                            var n = t.legend
                            n && n.handleEvent(e)
                        },
                    },
                    Cr = j.noop
                R._set('global', {
                    title: {
                        display: !1,
                        fontStyle: 'bold',
                        fullWidth: !0,
                        padding: 10,
                        position: 'top',
                        text: '',
                        weight: 2e3,
                    },
                })
                var Ar = G.extend({
                    initialize: function(t) {
                        j.extend(this, t), (this.legendHitBoxes = [])
                    },
                    beforeUpdate: Cr,
                    update: function(t, e, n) {
                        var r = this
                        return (
                            r.beforeUpdate(),
                            (r.maxWidth = t),
                            (r.maxHeight = e),
                            (r.margins = n),
                            r.beforeSetDimensions(),
                            r.setDimensions(),
                            r.afterSetDimensions(),
                            r.beforeBuildLabels(),
                            r.buildLabels(),
                            r.afterBuildLabels(),
                            r.beforeFit(),
                            r.fit(),
                            r.afterFit(),
                            r.afterUpdate(),
                            r.minSize
                        )
                    },
                    afterUpdate: Cr,
                    beforeSetDimensions: Cr,
                    setDimensions: function() {
                        var t = this
                        t.isHorizontal()
                            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
                            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                            (t.paddingLeft = 0),
                            (t.paddingTop = 0),
                            (t.paddingRight = 0),
                            (t.paddingBottom = 0),
                            (t.minSize = { width: 0, height: 0 })
                    },
                    afterSetDimensions: Cr,
                    beforeBuildLabels: Cr,
                    buildLabels: Cr,
                    afterBuildLabels: Cr,
                    beforeFit: Cr,
                    fit: function() {
                        var t,
                            e = this,
                            n = e.options,
                            r = (e.minSize = {}),
                            i = e.isHorizontal()
                        n.display
                            ? ((t =
                                  (j.isArray(n.text) ? n.text.length : 1) * j.options._parseFont(n).lineHeight +
                                  2 * n.padding),
                              (e.width = r.width = i ? e.maxWidth : t),
                              (e.height = r.height = i ? t : e.maxHeight))
                            : (e.width = r.width = e.height = r.height = 0)
                    },
                    afterFit: Cr,
                    isHorizontal: function() {
                        var t = this.options.position
                        return 'top' === t || 'bottom' === t
                    },
                    draw: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options
                        if (n.display) {
                            var r,
                                i,
                                a,
                                o = j.options._parseFont(n),
                                s = o.lineHeight,
                                l = s / 2 + n.padding,
                                u = 0,
                                c = t.top,
                                h = t.left,
                                d = t.bottom,
                                f = t.right
                            ;(e.fillStyle = j.valueOrDefault(n.fontColor, R.global.defaultFontColor)),
                                (e.font = o.string),
                                t.isHorizontal()
                                    ? ((i = h + (f - h) / 2), (a = c + l), (r = f - h))
                                    : ((i = 'left' === n.position ? h + l : f - l),
                                      (a = c + (d - c) / 2),
                                      (r = d - c),
                                      (u = Math.PI * ('left' === n.position ? -0.5 : 0.5))),
                                e.save(),
                                e.translate(i, a),
                                e.rotate(u),
                                (e.textAlign = 'center'),
                                (e.textBaseline = 'middle')
                            var g = n.text
                            if (j.isArray(g))
                                for (var p = 0, v = 0; v < g.length; ++v) e.fillText(g[v], 0, p, r), (p += s)
                            else e.fillText(g, 0, 0, r)
                            e.restore()
                        }
                    },
                })
                function Pr(t, e) {
                    var n = new Ar({ ctx: t.ctx, options: e, chart: t })
                    ge.configure(t, n, e), ge.addBox(t, n), (t.titleBlock = n)
                }
                var Dr = {},
                    Ir = br,
                    Tr = Sr,
                    Lr = {
                        id: 'title',
                        _element: Ar,
                        beforeInit: function(t) {
                            var e = t.options.title
                            e && Pr(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.title,
                                n = t.titleBlock
                            e
                                ? (j.mergeIf(e, R.global.title),
                                  n ? (ge.configure(t, n, e), (n.options = e)) : Pr(t, e))
                                : n && (ge.removeBox(t, n), delete t.titleBlock)
                        },
                    }
                for (var Fr in ((Dr.filler = Ir),
                (Dr.legend = Tr),
                (Dr.title = Lr),
                (Ze.helpers = j),
                (function() {
                    function t(t, e, n) {
                        var r
                        return (
                            'string' == typeof t
                                ? ((r = parseInt(t, 10)), -1 !== t.indexOf('%') && (r = (r / 100) * e.parentNode[n]))
                                : (r = t),
                            r
                        )
                    }
                    function e(t) {
                        return null != t && 'none' !== t
                    }
                    function n(n, r, i) {
                        var a = document.defaultView,
                            o = j._getParentNode(n),
                            s = a.getComputedStyle(n)[r],
                            l = a.getComputedStyle(o)[r],
                            u = e(s),
                            c = e(l),
                            h = Number.POSITIVE_INFINITY
                        return u || c ? Math.min(u ? t(s, n, i) : h, c ? t(l, o, i) : h) : 'none'
                    }
                    ;(j.where = function(t, e) {
                        if (j.isArray(t) && Array.prototype.filter) return t.filter(e)
                        var n = []
                        return (
                            j.each(t, function(t) {
                                e(t) && n.push(t)
                            }),
                            n
                        )
                    }),
                        (j.findIndex = Array.prototype.findIndex
                            ? function(t, e, n) {
                                  return t.findIndex(e, n)
                              }
                            : function(t, e, n) {
                                  n = void 0 === n ? t : n
                                  for (var r = 0, i = t.length; r < i; ++r) if (e.call(n, t[r], r, t)) return r
                                  return -1
                              }),
                        (j.findNextWhere = function(t, e, n) {
                            j.isNullOrUndef(n) && (n = -1)
                            for (var r = n + 1; r < t.length; r++) {
                                var i = t[r]
                                if (e(i)) return i
                            }
                        }),
                        (j.findPreviousWhere = function(t, e, n) {
                            j.isNullOrUndef(n) && (n = t.length)
                            for (var r = n - 1; r >= 0; r--) {
                                var i = t[r]
                                if (e(i)) return i
                            }
                        }),
                        (j.isNumber = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        }),
                        (j.almostEquals = function(t, e, n) {
                            return Math.abs(t - e) < n
                        }),
                        (j.almostWhole = function(t, e) {
                            var n = Math.round(t)
                            return n - e <= t && n + e >= t
                        }),
                        (j.max = function(t) {
                            return t.reduce(function(t, e) {
                                return isNaN(e) ? t : Math.max(t, e)
                            }, Number.NEGATIVE_INFINITY)
                        }),
                        (j.min = function(t) {
                            return t.reduce(function(t, e) {
                                return isNaN(e) ? t : Math.min(t, e)
                            }, Number.POSITIVE_INFINITY)
                        }),
                        (j.sign = Math.sign
                            ? function(t) {
                                  return Math.sign(t)
                              }
                            : function(t) {
                                  return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                              }),
                        (j.toRadians = function(t) {
                            return t * (Math.PI / 180)
                        }),
                        (j.toDegrees = function(t) {
                            return t * (180 / Math.PI)
                        }),
                        (j._decimalPlaces = function(t) {
                            if (j.isFinite(t)) {
                                for (var e = 1, n = 0; Math.round(t * e) / e !== t; ) (e *= 10), n++
                                return n
                            }
                        }),
                        (j.getAngleFromPoint = function(t, e) {
                            var n = e.x - t.x,
                                r = e.y - t.y,
                                i = Math.sqrt(n * n + r * r),
                                a = Math.atan2(r, n)
                            return a < -0.5 * Math.PI && (a += 2 * Math.PI), { angle: a, distance: i }
                        }),
                        (j.distanceBetweenPoints = function(t, e) {
                            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                        }),
                        (j.aliasPixel = function(t) {
                            return t % 2 == 0 ? 0 : 0.5
                        }),
                        (j._alignPixel = function(t, e, n) {
                            var r = t.currentDevicePixelRatio,
                                i = n / 2
                            return Math.round((e - i) * r) / r + i
                        }),
                        (j.splineCurve = function(t, e, n, r) {
                            var i = t.skip ? e : t,
                                a = e,
                                o = n.skip ? e : n,
                                s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
                                l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                                u = s / (s + l),
                                c = l / (s + l),
                                h = r * (u = isNaN(u) ? 0 : u),
                                d = r * (c = isNaN(c) ? 0 : c)
                            return {
                                previous: { x: a.x - h * (o.x - i.x), y: a.y - h * (o.y - i.y) },
                                next: { x: a.x + d * (o.x - i.x), y: a.y + d * (o.y - i.y) },
                            }
                        }),
                        (j.EPSILON = Number.EPSILON || 1e-14),
                        (j.splineCurveMonotone = function(t) {
                            var e,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                u,
                                c = (t || []).map(function(t) {
                                    return { model: t._model, deltaK: 0, mK: 0 }
                                }),
                                h = c.length
                            for (e = 0; e < h; ++e)
                                if (!(r = c[e]).model.skip) {
                                    if (
                                        ((n = e > 0 ? c[e - 1] : null),
                                        (i = e < h - 1 ? c[e + 1] : null) && !i.model.skip)
                                    ) {
                                        var d = i.model.x - r.model.x
                                        r.deltaK = 0 !== d ? (i.model.y - r.model.y) / d : 0
                                    }
                                    !n || n.model.skip
                                        ? (r.mK = r.deltaK)
                                        : !i || i.model.skip
                                        ? (r.mK = n.deltaK)
                                        : this.sign(n.deltaK) !== this.sign(r.deltaK)
                                        ? (r.mK = 0)
                                        : (r.mK = (n.deltaK + r.deltaK) / 2)
                                }
                            for (e = 0; e < h - 1; ++e)
                                (r = c[e]),
                                    (i = c[e + 1]),
                                    r.model.skip ||
                                        i.model.skip ||
                                        (j.almostEquals(r.deltaK, 0, this.EPSILON)
                                            ? (r.mK = i.mK = 0)
                                            : ((a = r.mK / r.deltaK),
                                              (o = i.mK / r.deltaK),
                                              (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 ||
                                                  ((s = 3 / Math.sqrt(l)),
                                                  (r.mK = a * s * r.deltaK),
                                                  (i.mK = o * s * r.deltaK))))
                            for (e = 0; e < h; ++e)
                                (r = c[e]).model.skip ||
                                    ((n = e > 0 ? c[e - 1] : null),
                                    (i = e < h - 1 ? c[e + 1] : null),
                                    n &&
                                        !n.model.skip &&
                                        ((u = (r.model.x - n.model.x) / 3),
                                        (r.model.controlPointPreviousX = r.model.x - u),
                                        (r.model.controlPointPreviousY = r.model.y - u * r.mK)),
                                    i &&
                                        !i.model.skip &&
                                        ((u = (i.model.x - r.model.x) / 3),
                                        (r.model.controlPointNextX = r.model.x + u),
                                        (r.model.controlPointNextY = r.model.y + u * r.mK)))
                        }),
                        (j.nextItem = function(t, e, n) {
                            return n
                                ? e >= t.length - 1
                                    ? t[0]
                                    : t[e + 1]
                                : e >= t.length - 1
                                ? t[t.length - 1]
                                : t[e + 1]
                        }),
                        (j.previousItem = function(t, e, n) {
                            return n ? (e <= 0 ? t[t.length - 1] : t[e - 1]) : e <= 0 ? t[0] : t[e - 1]
                        }),
                        (j.niceNum = function(t, e) {
                            var n = Math.floor(j.log10(t)),
                                r = t / Math.pow(10, n)
                            return (
                                (e
                                    ? r < 1.5
                                        ? 1
                                        : r < 3
                                        ? 2
                                        : r < 7
                                        ? 5
                                        : 10
                                    : r <= 1
                                    ? 1
                                    : r <= 2
                                    ? 2
                                    : r <= 5
                                    ? 5
                                    : 10) * Math.pow(10, n)
                            )
                        }),
                        (j.requestAnimFrame =
                            'undefined' == typeof window
                                ? function(t) {
                                      t()
                                  }
                                : window.requestAnimationFrame ||
                                  window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  function(t) {
                                      return window.setTimeout(t, 1e3 / 60)
                                  }),
                        (j.getRelativePosition = function(t, e) {
                            var n,
                                r,
                                i = t.originalEvent || t,
                                a = t.target || t.srcElement,
                                o = a.getBoundingClientRect(),
                                s = i.touches
                            s && s.length > 0
                                ? ((n = s[0].clientX), (r = s[0].clientY))
                                : ((n = i.clientX), (r = i.clientY))
                            var l = parseFloat(j.getStyle(a, 'padding-left')),
                                u = parseFloat(j.getStyle(a, 'padding-top')),
                                c = parseFloat(j.getStyle(a, 'padding-right')),
                                h = parseFloat(j.getStyle(a, 'padding-bottom')),
                                d = o.right - o.left - l - c,
                                f = o.bottom - o.top - u - h
                            return {
                                x: (n = Math.round((((n - o.left - l) / d) * a.width) / e.currentDevicePixelRatio)),
                                y: (r = Math.round((((r - o.top - u) / f) * a.height) / e.currentDevicePixelRatio)),
                            }
                        }),
                        (j.getConstraintWidth = function(t) {
                            return n(t, 'max-width', 'clientWidth')
                        }),
                        (j.getConstraintHeight = function(t) {
                            return n(t, 'max-height', 'clientHeight')
                        }),
                        (j._calculatePadding = function(t, e, n) {
                            return (e = j.getStyle(t, e)).indexOf('%') > -1
                                ? (n * parseInt(e, 10)) / 100
                                : parseInt(e, 10)
                        }),
                        (j._getParentNode = function(t) {
                            var e = t.parentNode
                            return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
                        }),
                        (j.getMaximumWidth = function(t) {
                            var e = j._getParentNode(t)
                            if (!e) return t.clientWidth
                            var n = e.clientWidth,
                                r =
                                    n -
                                    j._calculatePadding(e, 'padding-left', n) -
                                    j._calculatePadding(e, 'padding-right', n),
                                i = j.getConstraintWidth(t)
                            return isNaN(i) ? r : Math.min(r, i)
                        }),
                        (j.getMaximumHeight = function(t) {
                            var e = j._getParentNode(t)
                            if (!e) return t.clientHeight
                            var n = e.clientHeight,
                                r =
                                    n -
                                    j._calculatePadding(e, 'padding-top', n) -
                                    j._calculatePadding(e, 'padding-bottom', n),
                                i = j.getConstraintHeight(t)
                            return isNaN(i) ? r : Math.min(r, i)
                        }),
                        (j.getStyle = function(t, e) {
                            return t.currentStyle
                                ? t.currentStyle[e]
                                : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                        }),
                        (j.retinaScale = function(t, e) {
                            var n = (t.currentDevicePixelRatio =
                                e || ('undefined' != typeof window && window.devicePixelRatio) || 1)
                            if (1 !== n) {
                                var r = t.canvas,
                                    i = t.height,
                                    a = t.width
                                ;(r.height = i * n),
                                    (r.width = a * n),
                                    t.ctx.scale(n, n),
                                    r.style.height ||
                                        r.style.width ||
                                        ((r.style.height = i + 'px'), (r.style.width = a + 'px'))
                            }
                        }),
                        (j.fontString = function(t, e, n) {
                            return e + ' ' + t + 'px ' + n
                        }),
                        (j.longestText = function(t, e, n, r) {
                            var i = ((r = r || {}).data = r.data || {}),
                                a = (r.garbageCollect = r.garbageCollect || [])
                            r.font !== e && ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = e)), (t.font = e)
                            var o,
                                s,
                                l,
                                u,
                                c,
                                h = 0,
                                d = n.length
                            for (o = 0; o < d; o++)
                                if (null != (u = n[o]) && !0 !== j.isArray(u)) h = j.measureText(t, i, a, h, u)
                                else if (j.isArray(u))
                                    for (s = 0, l = u.length; s < l; s++)
                                        null == (c = u[s]) || j.isArray(c) || (h = j.measureText(t, i, a, h, c))
                            var f = a.length / 2
                            if (f > n.length) {
                                for (o = 0; o < f; o++) delete i[a[o]]
                                a.splice(0, f)
                            }
                            return h
                        }),
                        (j.measureText = function(t, e, n, r, i) {
                            var a = e[i]
                            return a || ((a = e[i] = t.measureText(i).width), n.push(i)), a > r && (r = a), r
                        }),
                        (j.numberOfLabelLines = function(t) {
                            var e = 1
                            return (
                                j.each(t, function(t) {
                                    j.isArray(t) && t.length > e && (e = t.length)
                                }),
                                e
                            )
                        }),
                        (j.color = w
                            ? function(t) {
                                  return t instanceof CanvasGradient && (t = R.global.defaultColor), w(t)
                              }
                            : function(t) {
                                  return console.error('Color.js not found!'), t
                              }),
                        (j.getHoverColor = function(t) {
                            return t instanceof CanvasPattern || t instanceof CanvasGradient
                                ? t
                                : j
                                      .color(t)
                                      .saturate(0.5)
                                      .darken(0.1)
                                      .rgbString()
                        })
                })(),
                (Ze._adapters = Qe),
                (Ze.Animation = Z),
                (Ze.animationService = X),
                (Ze.controllers = Xt),
                (Ze.DatasetController = nt),
                (Ze.defaults = R),
                (Ze.Element = G),
                (Ze.elements = _t),
                (Ze.Interaction = ie),
                (Ze.layouts = ge),
                (Ze.platform = Pe),
                (Ze.plugins = De),
                (Ze.Scale = pn),
                (Ze.scaleService = Ie),
                (Ze.Ticks = tn),
                (Ze.Tooltip = je),
                Ze.helpers.each(lr, function(t, e) {
                    Ze.scaleService.registerScaleType(e, t, t._defaults)
                }),
                Dr))
                    Dr.hasOwnProperty(Fr) && Ze.plugins.register(Dr[Fr])
                Ze.platform.initialize()
                var Or = Ze
                return (
                    'undefined' != typeof window && (window.Chart = Ze),
                    (Ze.Chart = Ze),
                    (Ze.Legend = Dr.legend._element),
                    (Ze.Title = Dr.title._element),
                    (Ze.pluginService = Ze.plugins),
                    (Ze.PluginBase = Ze.Element.extend({})),
                    (Ze.canvasHelpers = Ze.helpers.canvas),
                    (Ze.layoutService = Ze.layouts),
                    (Ze.LinearScaleBase = _n),
                    Ze.helpers.each(['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'], function(
                        t
                    ) {
                        Ze[t] = function(e, n) {
                            return new Ze(
                                e,
                                Ze.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) })
                            )
                        }
                    }),
                    Or
                )
            })(
                (function() {
                    try {
                        return n(318)
                    } catch (t) {}
                })()
            )
        },
        401: function(t, e, n) {
            ;(function(t, r) {
                var i
                /**
                 * @license
                 * Lodash <https://lodash.com/>
                 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
                 * Released under MIT license <https://lodash.com/license>
                 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                 */ ;(function() {
                    var a = 'Expected a function',
                        o = '__lodash_placeholder__',
                        s = [
                            ['ary', 128],
                            ['bind', 1],
                            ['bindKey', 2],
                            ['curry', 8],
                            ['curryRight', 16],
                            ['flip', 512],
                            ['partial', 32],
                            ['partialRight', 64],
                            ['rearg', 256],
                        ],
                        l = '[object Arguments]',
                        u = '[object Array]',
                        c = '[object Boolean]',
                        h = '[object Date]',
                        d = '[object Error]',
                        f = '[object Function]',
                        g = '[object GeneratorFunction]',
                        p = '[object Map]',
                        v = '[object Number]',
                        m = '[object Object]',
                        b = '[object RegExp]',
                        y = '[object Set]',
                        x = '[object String]',
                        _ = '[object Symbol]',
                        w = '[object WeakMap]',
                        k = '[object ArrayBuffer]',
                        M = '[object DataView]',
                        S = '[object Float32Array]',
                        C = '[object Float64Array]',
                        A = '[object Int8Array]',
                        P = '[object Int16Array]',
                        D = '[object Int32Array]',
                        I = '[object Uint8Array]',
                        T = '[object Uint16Array]',
                        L = '[object Uint32Array]',
                        F = /\b__p \+= '';/g,
                        O = /\b(__p \+=) '' \+/g,
                        z = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        R = /&(?:amp|lt|gt|quot|#39);/g,
                        E = /[&<>"']/g,
                        N = RegExp(R.source),
                        B = RegExp(E.source),
                        W = /<%-([\s\S]+?)%>/g,
                        j = /<%([\s\S]+?)%>/g,
                        V = /<%=([\s\S]+?)%>/g,
                        H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        q = /^\w*$/,
                        U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        $ = /[\\^$.*+?()[\]{}|]/g,
                        Y = RegExp($.source),
                        G = /^\s+|\s+$/g,
                        K = /^\s+/,
                        Z = /\s+$/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        J = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        Q = /,? & /,
                        tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        et = /\\(\\)?/g,
                        nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        rt = /\w*$/,
                        it = /^[-+]0x[0-9a-f]+$/i,
                        at = /^0b[01]+$/i,
                        ot = /^\[object .+?Constructor\]$/,
                        st = /^0o[0-7]+$/i,
                        lt = /^(?:0|[1-9]\d*)$/,
                        ut = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ct = /($^)/,
                        ht = /['\n\r\u2028\u2029\\]/g,
                        dt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
                        ft =
                            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                        gt = '[\\ud800-\\udfff]',
                        pt = '[' + ft + ']',
                        vt = '[' + dt + ']',
                        mt = '\\d+',
                        bt = '[\\u2700-\\u27bf]',
                        yt = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
                        xt =
                            '[^\\ud800-\\udfff' +
                            ft +
                            mt +
                            '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
                        _t = '\\ud83c[\\udffb-\\udfff]',
                        wt = '[^\\ud800-\\udfff]',
                        kt = '(?:\\ud83c[\\udde6-\\uddff]){2}',
                        Mt = '[\\ud800-\\udbff][\\udc00-\\udfff]',
                        St = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
                        Ct = '(?:' + yt + '|' + xt + ')',
                        At = '(?:' + St + '|' + xt + ')',
                        Pt = '(?:' + vt + '|' + _t + ')' + '?',
                        Dt =
                            '[\\ufe0e\\ufe0f]?' +
                            Pt +
                            ('(?:\\u200d(?:' + [wt, kt, Mt].join('|') + ')[\\ufe0e\\ufe0f]?' + Pt + ')*'),
                        It = '(?:' + [bt, kt, Mt].join('|') + ')' + Dt,
                        Tt = '(?:' + [wt + vt + '?', vt, kt, Mt, gt].join('|') + ')',
                        Lt = RegExp("['’]", 'g'),
                        Ft = RegExp(vt, 'g'),
                        Ot = RegExp(_t + '(?=' + _t + ')|' + Tt + Dt, 'g'),
                        zt = RegExp(
                            [
                                St + '?' + yt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [pt, St, '$'].join('|') + ')',
                                At + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [pt, St + Ct, '$'].join('|') + ')',
                                St + '?' + Ct + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                                St + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                                '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                                '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                                mt,
                                It,
                            ].join('|'),
                            'g'
                        ),
                        Rt = RegExp('[\\u200d\\ud800-\\udfff' + dt + '\\ufe0e\\ufe0f]'),
                        Et = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        Nt = [
                            'Array',
                            'Buffer',
                            'DataView',
                            'Date',
                            'Error',
                            'Float32Array',
                            'Float64Array',
                            'Function',
                            'Int8Array',
                            'Int16Array',
                            'Int32Array',
                            'Map',
                            'Math',
                            'Object',
                            'Promise',
                            'RegExp',
                            'Set',
                            'String',
                            'Symbol',
                            'TypeError',
                            'Uint8Array',
                            'Uint8ClampedArray',
                            'Uint16Array',
                            'Uint32Array',
                            'WeakMap',
                            '_',
                            'clearTimeout',
                            'isFinite',
                            'parseInt',
                            'setTimeout',
                        ],
                        Bt = -1,
                        Wt = {}
                    ;(Wt[S] = Wt[C] = Wt[A] = Wt[P] = Wt[D] = Wt[I] = Wt['[object Uint8ClampedArray]'] = Wt[T] = Wt[
                        L
                    ] = !0),
                        (Wt[l] = Wt[u] = Wt[k] = Wt[c] = Wt[M] = Wt[h] = Wt[d] = Wt[f] = Wt[p] = Wt[v] = Wt[m] = Wt[
                            b
                        ] = Wt[y] = Wt[x] = Wt[w] = !1)
                    var jt = {}
                    ;(jt[l] = jt[u] = jt[k] = jt[M] = jt[c] = jt[h] = jt[S] = jt[C] = jt[A] = jt[P] = jt[D] = jt[
                        p
                    ] = jt[v] = jt[m] = jt[b] = jt[y] = jt[x] = jt[_] = jt[I] = jt['[object Uint8ClampedArray]'] = jt[
                        T
                    ] = jt[L] = !0),
                        (jt[d] = jt[f] = jt[w] = !1)
                    var Vt = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
                        Ht = parseFloat,
                        qt = parseInt,
                        Ut = 'object' == typeof t && t && t.Object === Object && t,
                        $t = 'object' == typeof self && self && self.Object === Object && self,
                        Yt = Ut || $t || Function('return this')(),
                        Gt = e && !e.nodeType && e,
                        Kt = Gt && 'object' == typeof r && r && !r.nodeType && r,
                        Zt = Kt && Kt.exports === Gt,
                        Xt = Zt && Ut.process,
                        Jt = (function() {
                            try {
                                var t = Kt && Kt.require && Kt.require('util').types
                                return t || (Xt && Xt.binding && Xt.binding('util'))
                            } catch (t) {}
                        })(),
                        Qt = Jt && Jt.isArrayBuffer,
                        te = Jt && Jt.isDate,
                        ee = Jt && Jt.isMap,
                        ne = Jt && Jt.isRegExp,
                        re = Jt && Jt.isSet,
                        ie = Jt && Jt.isTypedArray
                    function ae(t, e, n) {
                        switch (n.length) {
                            case 0:
                                return t.call(e)
                            case 1:
                                return t.call(e, n[0])
                            case 2:
                                return t.call(e, n[0], n[1])
                            case 3:
                                return t.call(e, n[0], n[1], n[2])
                        }
                        return t.apply(e, n)
                    }
                    function oe(t, e, n, r) {
                        for (var i = -1, a = null == t ? 0 : t.length; ++i < a; ) {
                            var o = t[i]
                            e(r, o, n(o), t)
                        }
                        return r
                    }
                    function se(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
                        return t
                    }
                    function le(t, e) {
                        for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); );
                        return t
                    }
                    function ue(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (!e(t[n], n, t)) return !1
                        return !0
                    }
                    function ce(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length, i = 0, a = []; ++n < r; ) {
                            var o = t[n]
                            e(o, n, t) && (a[i++] = o)
                        }
                        return a
                    }
                    function he(t, e) {
                        return !!(null == t ? 0 : t.length) && _e(t, e, 0) > -1
                    }
                    function de(t, e, n) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; ) if (n(e, t[r])) return !0
                        return !1
                    }
                    function fe(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t)
                        return i
                    }
                    function ge(t, e) {
                        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n]
                        return t
                    }
                    function pe(t, e, n, r) {
                        var i = -1,
                            a = null == t ? 0 : t.length
                        for (r && a && (n = t[++i]); ++i < a; ) n = e(n, t[i], i, t)
                        return n
                    }
                    function ve(t, e, n, r) {
                        var i = null == t ? 0 : t.length
                        for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t)
                        return n
                    }
                    function me(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0
                        return !1
                    }
                    var be = Se('length')
                    function ye(t, e, n) {
                        var r
                        return (
                            n(t, function(t, n, i) {
                                if (e(t, n, i)) return (r = n), !1
                            }),
                            r
                        )
                    }
                    function xe(t, e, n, r) {
                        for (var i = t.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i; ) if (e(t[a], a, t)) return a
                        return -1
                    }
                    function _e(t, e, n) {
                        return e == e
                            ? (function(t, e, n) {
                                  var r = n - 1,
                                      i = t.length
                                  for (; ++r < i; ) if (t[r] === e) return r
                                  return -1
                              })(t, e, n)
                            : xe(t, ke, n)
                    }
                    function we(t, e, n, r) {
                        for (var i = n - 1, a = t.length; ++i < a; ) if (r(t[i], e)) return i
                        return -1
                    }
                    function ke(t) {
                        return t != t
                    }
                    function Me(t, e) {
                        var n = null == t ? 0 : t.length
                        return n ? Pe(t, e) / n : NaN
                    }
                    function Se(t) {
                        return function(e) {
                            return null == e ? void 0 : e[t]
                        }
                    }
                    function Ce(t) {
                        return function(e) {
                            return null == t ? void 0 : t[e]
                        }
                    }
                    function Ae(t, e, n, r, i) {
                        return (
                            i(t, function(t, i, a) {
                                n = r ? ((r = !1), t) : e(n, t, i, a)
                            }),
                            n
                        )
                    }
                    function Pe(t, e) {
                        for (var n, r = -1, i = t.length; ++r < i; ) {
                            var a = e(t[r])
                            void 0 !== a && (n = void 0 === n ? a : n + a)
                        }
                        return n
                    }
                    function De(t, e) {
                        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
                        return r
                    }
                    function Ie(t) {
                        return function(e) {
                            return t(e)
                        }
                    }
                    function Te(t, e) {
                        return fe(e, function(e) {
                            return t[e]
                        })
                    }
                    function Le(t, e) {
                        return t.has(e)
                    }
                    function Fe(t, e) {
                        for (var n = -1, r = t.length; ++n < r && _e(e, t[n], 0) > -1; );
                        return n
                    }
                    function Oe(t, e) {
                        for (var n = t.length; n-- && _e(e, t[n], 0) > -1; );
                        return n
                    }
                    function ze(t, e) {
                        for (var n = t.length, r = 0; n--; ) t[n] === e && ++r
                        return r
                    }
                    var Re = Ce({
                            À: 'A',
                            Á: 'A',
                            Â: 'A',
                            Ã: 'A',
                            Ä: 'A',
                            Å: 'A',
                            à: 'a',
                            á: 'a',
                            â: 'a',
                            ã: 'a',
                            ä: 'a',
                            å: 'a',
                            Ç: 'C',
                            ç: 'c',
                            Ð: 'D',
                            ð: 'd',
                            È: 'E',
                            É: 'E',
                            Ê: 'E',
                            Ë: 'E',
                            è: 'e',
                            é: 'e',
                            ê: 'e',
                            ë: 'e',
                            Ì: 'I',
                            Í: 'I',
                            Î: 'I',
                            Ï: 'I',
                            ì: 'i',
                            í: 'i',
                            î: 'i',
                            ï: 'i',
                            Ñ: 'N',
                            ñ: 'n',
                            Ò: 'O',
                            Ó: 'O',
                            Ô: 'O',
                            Õ: 'O',
                            Ö: 'O',
                            Ø: 'O',
                            ò: 'o',
                            ó: 'o',
                            ô: 'o',
                            õ: 'o',
                            ö: 'o',
                            ø: 'o',
                            Ù: 'U',
                            Ú: 'U',
                            Û: 'U',
                            Ü: 'U',
                            ù: 'u',
                            ú: 'u',
                            û: 'u',
                            ü: 'u',
                            Ý: 'Y',
                            ý: 'y',
                            ÿ: 'y',
                            Æ: 'Ae',
                            æ: 'ae',
                            Þ: 'Th',
                            þ: 'th',
                            ß: 'ss',
                            Ā: 'A',
                            Ă: 'A',
                            Ą: 'A',
                            ā: 'a',
                            ă: 'a',
                            ą: 'a',
                            Ć: 'C',
                            Ĉ: 'C',
                            Ċ: 'C',
                            Č: 'C',
                            ć: 'c',
                            ĉ: 'c',
                            ċ: 'c',
                            č: 'c',
                            Ď: 'D',
                            Đ: 'D',
                            ď: 'd',
                            đ: 'd',
                            Ē: 'E',
                            Ĕ: 'E',
                            Ė: 'E',
                            Ę: 'E',
                            Ě: 'E',
                            ē: 'e',
                            ĕ: 'e',
                            ė: 'e',
                            ę: 'e',
                            ě: 'e',
                            Ĝ: 'G',
                            Ğ: 'G',
                            Ġ: 'G',
                            Ģ: 'G',
                            ĝ: 'g',
                            ğ: 'g',
                            ġ: 'g',
                            ģ: 'g',
                            Ĥ: 'H',
                            Ħ: 'H',
                            ĥ: 'h',
                            ħ: 'h',
                            Ĩ: 'I',
                            Ī: 'I',
                            Ĭ: 'I',
                            Į: 'I',
                            İ: 'I',
                            ĩ: 'i',
                            ī: 'i',
                            ĭ: 'i',
                            į: 'i',
                            ı: 'i',
                            Ĵ: 'J',
                            ĵ: 'j',
                            Ķ: 'K',
                            ķ: 'k',
                            ĸ: 'k',
                            Ĺ: 'L',
                            Ļ: 'L',
                            Ľ: 'L',
                            Ŀ: 'L',
                            Ł: 'L',
                            ĺ: 'l',
                            ļ: 'l',
                            ľ: 'l',
                            ŀ: 'l',
                            ł: 'l',
                            Ń: 'N',
                            Ņ: 'N',
                            Ň: 'N',
                            Ŋ: 'N',
                            ń: 'n',
                            ņ: 'n',
                            ň: 'n',
                            ŋ: 'n',
                            Ō: 'O',
                            Ŏ: 'O',
                            Ő: 'O',
                            ō: 'o',
                            ŏ: 'o',
                            ő: 'o',
                            Ŕ: 'R',
                            Ŗ: 'R',
                            Ř: 'R',
                            ŕ: 'r',
                            ŗ: 'r',
                            ř: 'r',
                            Ś: 'S',
                            Ŝ: 'S',
                            Ş: 'S',
                            Š: 'S',
                            ś: 's',
                            ŝ: 's',
                            ş: 's',
                            š: 's',
                            Ţ: 'T',
                            Ť: 'T',
                            Ŧ: 'T',
                            ţ: 't',
                            ť: 't',
                            ŧ: 't',
                            Ũ: 'U',
                            Ū: 'U',
                            Ŭ: 'U',
                            Ů: 'U',
                            Ű: 'U',
                            Ų: 'U',
                            ũ: 'u',
                            ū: 'u',
                            ŭ: 'u',
                            ů: 'u',
                            ű: 'u',
                            ų: 'u',
                            Ŵ: 'W',
                            ŵ: 'w',
                            Ŷ: 'Y',
                            ŷ: 'y',
                            Ÿ: 'Y',
                            Ź: 'Z',
                            Ż: 'Z',
                            Ž: 'Z',
                            ź: 'z',
                            ż: 'z',
                            ž: 'z',
                            Ĳ: 'IJ',
                            ĳ: 'ij',
                            Œ: 'Oe',
                            œ: 'oe',
                            ŉ: "'n",
                            ſ: 's',
                        }),
                        Ee = Ce({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })
                    function Ne(t) {
                        return '\\' + Vt[t]
                    }
                    function Be(t) {
                        return Rt.test(t)
                    }
                    function We(t) {
                        var e = -1,
                            n = Array(t.size)
                        return (
                            t.forEach(function(t, r) {
                                n[++e] = [r, t]
                            }),
                            n
                        )
                    }
                    function je(t, e) {
                        return function(n) {
                            return t(e(n))
                        }
                    }
                    function Ve(t, e) {
                        for (var n = -1, r = t.length, i = 0, a = []; ++n < r; ) {
                            var s = t[n]
                            ;(s !== e && s !== o) || ((t[n] = o), (a[i++] = n))
                        }
                        return a
                    }
                    function He(t) {
                        var e = -1,
                            n = Array(t.size)
                        return (
                            t.forEach(function(t) {
                                n[++e] = t
                            }),
                            n
                        )
                    }
                    function qe(t) {
                        var e = -1,
                            n = Array(t.size)
                        return (
                            t.forEach(function(t) {
                                n[++e] = [t, t]
                            }),
                            n
                        )
                    }
                    function Ue(t) {
                        return Be(t)
                            ? (function(t) {
                                  var e = (Ot.lastIndex = 0)
                                  for (; Ot.test(t); ) ++e
                                  return e
                              })(t)
                            : be(t)
                    }
                    function $e(t) {
                        return Be(t)
                            ? (function(t) {
                                  return t.match(Ot) || []
                              })(t)
                            : (function(t) {
                                  return t.split('')
                              })(t)
                    }
                    var Ye = Ce({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" })
                    var Ge = (function t(e) {
                        var n,
                            r = (e = null == e ? Yt : Ge.defaults(Yt.Object(), e, Ge.pick(Yt, Nt))).Array,
                            i = e.Date,
                            dt = e.Error,
                            ft = e.Function,
                            gt = e.Math,
                            pt = e.Object,
                            vt = e.RegExp,
                            mt = e.String,
                            bt = e.TypeError,
                            yt = r.prototype,
                            xt = ft.prototype,
                            _t = pt.prototype,
                            wt = e['__core-js_shared__'],
                            kt = xt.toString,
                            Mt = _t.hasOwnProperty,
                            St = 0,
                            Ct = (n = /[^.]+$/.exec((wt && wt.keys && wt.keys.IE_PROTO) || ''))
                                ? 'Symbol(src)_1.' + n
                                : '',
                            At = _t.toString,
                            Pt = kt.call(pt),
                            Dt = Yt._,
                            It = vt(
                                '^' +
                                    kt
                                        .call(Mt)
                                        .replace($, '\\$&')
                                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                                    '$'
                            ),
                            Tt = Zt ? e.Buffer : void 0,
                            Ot = e.Symbol,
                            Rt = e.Uint8Array,
                            Vt = Tt ? Tt.allocUnsafe : void 0,
                            Ut = je(pt.getPrototypeOf, pt),
                            $t = pt.create,
                            Gt = _t.propertyIsEnumerable,
                            Kt = yt.splice,
                            Xt = Ot ? Ot.isConcatSpreadable : void 0,
                            Jt = Ot ? Ot.iterator : void 0,
                            be = Ot ? Ot.toStringTag : void 0,
                            Ce = (function() {
                                try {
                                    var t = Qi(pt, 'defineProperty')
                                    return t({}, '', {}), t
                                } catch (t) {}
                            })(),
                            Ke = e.clearTimeout !== Yt.clearTimeout && e.clearTimeout,
                            Ze = i && i.now !== Yt.Date.now && i.now,
                            Xe = e.setTimeout !== Yt.setTimeout && e.setTimeout,
                            Je = gt.ceil,
                            Qe = gt.floor,
                            tn = pt.getOwnPropertySymbols,
                            en = Tt ? Tt.isBuffer : void 0,
                            nn = e.isFinite,
                            rn = yt.join,
                            an = je(pt.keys, pt),
                            on = gt.max,
                            sn = gt.min,
                            ln = i.now,
                            un = e.parseInt,
                            cn = gt.random,
                            hn = yt.reverse,
                            dn = Qi(e, 'DataView'),
                            fn = Qi(e, 'Map'),
                            gn = Qi(e, 'Promise'),
                            pn = Qi(e, 'Set'),
                            vn = Qi(e, 'WeakMap'),
                            mn = Qi(pt, 'create'),
                            bn = vn && new vn(),
                            yn = {},
                            xn = Ca(dn),
                            _n = Ca(fn),
                            wn = Ca(gn),
                            kn = Ca(pn),
                            Mn = Ca(vn),
                            Sn = Ot ? Ot.prototype : void 0,
                            Cn = Sn ? Sn.valueOf : void 0,
                            An = Sn ? Sn.toString : void 0
                        function Pn(t) {
                            if (qo(t) && !Fo(t) && !(t instanceof Ln)) {
                                if (t instanceof Tn) return t
                                if (Mt.call(t, '__wrapped__')) return Aa(t)
                            }
                            return new Tn(t)
                        }
                        var Dn = (function() {
                            function t() {}
                            return function(e) {
                                if (!Ho(e)) return {}
                                if ($t) return $t(e)
                                t.prototype = e
                                var n = new t()
                                return (t.prototype = void 0), n
                            }
                        })()
                        function In() {}
                        function Tn(t, e) {
                            ;(this.__wrapped__ = t),
                                (this.__actions__ = []),
                                (this.__chain__ = !!e),
                                (this.__index__ = 0),
                                (this.__values__ = void 0)
                        }
                        function Ln(t) {
                            ;(this.__wrapped__ = t),
                                (this.__actions__ = []),
                                (this.__dir__ = 1),
                                (this.__filtered__ = !1),
                                (this.__iteratees__ = []),
                                (this.__takeCount__ = 4294967295),
                                (this.__views__ = [])
                        }
                        function Fn(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length
                            for (this.clear(); ++e < n; ) {
                                var r = t[e]
                                this.set(r[0], r[1])
                            }
                        }
                        function On(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length
                            for (this.clear(); ++e < n; ) {
                                var r = t[e]
                                this.set(r[0], r[1])
                            }
                        }
                        function zn(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length
                            for (this.clear(); ++e < n; ) {
                                var r = t[e]
                                this.set(r[0], r[1])
                            }
                        }
                        function Rn(t) {
                            var e = -1,
                                n = null == t ? 0 : t.length
                            for (this.__data__ = new zn(); ++e < n; ) this.add(t[e])
                        }
                        function En(t) {
                            var e = (this.__data__ = new On(t))
                            this.size = e.size
                        }
                        function Nn(t, e) {
                            var n = Fo(t),
                                r = !n && Lo(t),
                                i = !n && !r && Eo(t),
                                a = !n && !r && !i && Jo(t),
                                o = n || r || i || a,
                                s = o ? De(t.length, mt) : [],
                                l = s.length
                            for (var u in t)
                                (!e && !Mt.call(t, u)) ||
                                    (o &&
                                        ('length' == u ||
                                            (i && ('offset' == u || 'parent' == u)) ||
                                            (a && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                                            oa(u, l))) ||
                                    s.push(u)
                            return s
                        }
                        function Bn(t) {
                            var e = t.length
                            return e ? t[Rr(0, e - 1)] : void 0
                        }
                        function Wn(t, e) {
                            return ka(mi(t), Kn(e, 0, t.length))
                        }
                        function jn(t) {
                            return ka(mi(t))
                        }
                        function Vn(t, e, n) {
                            ;((void 0 !== n && !Do(t[e], n)) || (void 0 === n && !(e in t))) && Yn(t, e, n)
                        }
                        function Hn(t, e, n) {
                            var r = t[e]
                            ;(Mt.call(t, e) && Do(r, n) && (void 0 !== n || e in t)) || Yn(t, e, n)
                        }
                        function qn(t, e) {
                            for (var n = t.length; n--; ) if (Do(t[n][0], e)) return n
                            return -1
                        }
                        function Un(t, e, n, r) {
                            return (
                                tr(t, function(t, i, a) {
                                    e(r, t, n(t), a)
                                }),
                                r
                            )
                        }
                        function $n(t, e) {
                            return t && bi(e, xs(e), t)
                        }
                        function Yn(t, e, n) {
                            '__proto__' == e && Ce
                                ? Ce(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
                                : (t[e] = n)
                        }
                        function Gn(t, e) {
                            for (var n = -1, i = e.length, a = r(i), o = null == t; ++n < i; )
                                a[n] = o ? void 0 : ps(t, e[n])
                            return a
                        }
                        function Kn(t, e, n) {
                            return (
                                t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)),
                                t
                            )
                        }
                        function Zn(t, e, n, r, i, a) {
                            var o,
                                s = 1 & e,
                                u = 2 & e,
                                d = 4 & e
                            if ((n && (o = i ? n(t, r, i, a) : n(t)), void 0 !== o)) return o
                            if (!Ho(t)) return t
                            var w = Fo(t)
                            if (w) {
                                if (
                                    ((o = (function(t) {
                                        var e = t.length,
                                            n = new t.constructor(e)
                                        e &&
                                            'string' == typeof t[0] &&
                                            Mt.call(t, 'index') &&
                                            ((n.index = t.index), (n.input = t.input))
                                        return n
                                    })(t)),
                                    !s)
                                )
                                    return mi(t, o)
                            } else {
                                var F = na(t),
                                    O = F == f || F == g
                                if (Eo(t)) return hi(t, s)
                                if (F == m || F == l || (O && !i)) {
                                    if (((o = u || O ? {} : ia(t)), !s))
                                        return u
                                            ? (function(t, e) {
                                                  return bi(t, ea(t), e)
                                              })(
                                                  t,
                                                  (function(t, e) {
                                                      return t && bi(e, _s(e), t)
                                                  })(o, t)
                                              )
                                            : (function(t, e) {
                                                  return bi(t, ta(t), e)
                                              })(t, $n(o, t))
                                } else {
                                    if (!jt[F]) return i ? t : {}
                                    o = (function(t, e, n) {
                                        var r = t.constructor
                                        switch (e) {
                                            case k:
                                                return di(t)
                                            case c:
                                            case h:
                                                return new r(+t)
                                            case M:
                                                return (function(t, e) {
                                                    var n = e ? di(t.buffer) : t.buffer
                                                    return new t.constructor(n, t.byteOffset, t.byteLength)
                                                })(t, n)
                                            case S:
                                            case C:
                                            case A:
                                            case P:
                                            case D:
                                            case I:
                                            case '[object Uint8ClampedArray]':
                                            case T:
                                            case L:
                                                return fi(t, n)
                                            case p:
                                                return new r()
                                            case v:
                                            case x:
                                                return new r(t)
                                            case b:
                                                return (function(t) {
                                                    var e = new t.constructor(t.source, rt.exec(t))
                                                    return (e.lastIndex = t.lastIndex), e
                                                })(t)
                                            case y:
                                                return new r()
                                            case _:
                                                return (i = t), Cn ? pt(Cn.call(i)) : {}
                                        }
                                        var i
                                    })(t, F, s)
                                }
                            }
                            a || (a = new En())
                            var z = a.get(t)
                            if (z) return z
                            a.set(t, o),
                                Ko(t)
                                    ? t.forEach(function(r) {
                                          o.add(Zn(r, e, n, r, t, a))
                                      })
                                    : Uo(t) &&
                                      t.forEach(function(r, i) {
                                          o.set(i, Zn(r, e, n, i, t, a))
                                      })
                            var R = w ? void 0 : (d ? (u ? $i : Ui) : u ? _s : xs)(t)
                            return (
                                se(R || t, function(r, i) {
                                    R && (r = t[(i = r)]), Hn(o, i, Zn(r, e, n, i, t, a))
                                }),
                                o
                            )
                        }
                        function Xn(t, e, n) {
                            var r = n.length
                            if (null == t) return !r
                            for (t = pt(t); r--; ) {
                                var i = n[r],
                                    a = e[i],
                                    o = t[i]
                                if ((void 0 === o && !(i in t)) || !a(o)) return !1
                            }
                            return !0
                        }
                        function Jn(t, e, n) {
                            if ('function' != typeof t) throw new bt(a)
                            return ya(function() {
                                t.apply(void 0, n)
                            }, e)
                        }
                        function Qn(t, e, n, r) {
                            var i = -1,
                                a = he,
                                o = !0,
                                s = t.length,
                                l = [],
                                u = e.length
                            if (!s) return l
                            n && (e = fe(e, Ie(n))),
                                r ? ((a = de), (o = !1)) : e.length >= 200 && ((a = Le), (o = !1), (e = new Rn(e)))
                            t: for (; ++i < s; ) {
                                var c = t[i],
                                    h = null == n ? c : n(c)
                                if (((c = r || 0 !== c ? c : 0), o && h == h)) {
                                    for (var d = u; d--; ) if (e[d] === h) continue t
                                    l.push(c)
                                } else a(e, h, r) || l.push(c)
                            }
                            return l
                        }
                        ;(Pn.templateSettings = {
                            escape: W,
                            evaluate: j,
                            interpolate: V,
                            variable: '',
                            imports: { _: Pn },
                        }),
                            (Pn.prototype = In.prototype),
                            (Pn.prototype.constructor = Pn),
                            (Tn.prototype = Dn(In.prototype)),
                            (Tn.prototype.constructor = Tn),
                            (Ln.prototype = Dn(In.prototype)),
                            (Ln.prototype.constructor = Ln),
                            (Fn.prototype.clear = function() {
                                ;(this.__data__ = mn ? mn(null) : {}), (this.size = 0)
                            }),
                            (Fn.prototype.delete = function(t) {
                                var e = this.has(t) && delete this.__data__[t]
                                return (this.size -= e ? 1 : 0), e
                            }),
                            (Fn.prototype.get = function(t) {
                                var e = this.__data__
                                if (mn) {
                                    var n = e[t]
                                    return '__lodash_hash_undefined__' === n ? void 0 : n
                                }
                                return Mt.call(e, t) ? e[t] : void 0
                            }),
                            (Fn.prototype.has = function(t) {
                                var e = this.__data__
                                return mn ? void 0 !== e[t] : Mt.call(e, t)
                            }),
                            (Fn.prototype.set = function(t, e) {
                                var n = this.__data__
                                return (
                                    (this.size += this.has(t) ? 0 : 1),
                                    (n[t] = mn && void 0 === e ? '__lodash_hash_undefined__' : e),
                                    this
                                )
                            }),
                            (On.prototype.clear = function() {
                                ;(this.__data__ = []), (this.size = 0)
                            }),
                            (On.prototype.delete = function(t) {
                                var e = this.__data__,
                                    n = qn(e, t)
                                return !(n < 0) && (n == e.length - 1 ? e.pop() : Kt.call(e, n, 1), --this.size, !0)
                            }),
                            (On.prototype.get = function(t) {
                                var e = this.__data__,
                                    n = qn(e, t)
                                return n < 0 ? void 0 : e[n][1]
                            }),
                            (On.prototype.has = function(t) {
                                return qn(this.__data__, t) > -1
                            }),
                            (On.prototype.set = function(t, e) {
                                var n = this.__data__,
                                    r = qn(n, t)
                                return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                            }),
                            (zn.prototype.clear = function() {
                                ;(this.size = 0),
                                    (this.__data__ = { hash: new Fn(), map: new (fn || On)(), string: new Fn() })
                            }),
                            (zn.prototype.delete = function(t) {
                                var e = Xi(this, t).delete(t)
                                return (this.size -= e ? 1 : 0), e
                            }),
                            (zn.prototype.get = function(t) {
                                return Xi(this, t).get(t)
                            }),
                            (zn.prototype.has = function(t) {
                                return Xi(this, t).has(t)
                            }),
                            (zn.prototype.set = function(t, e) {
                                var n = Xi(this, t),
                                    r = n.size
                                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
                            }),
                            (Rn.prototype.add = Rn.prototype.push = function(t) {
                                return this.__data__.set(t, '__lodash_hash_undefined__'), this
                            }),
                            (Rn.prototype.has = function(t) {
                                return this.__data__.has(t)
                            }),
                            (En.prototype.clear = function() {
                                ;(this.__data__ = new On()), (this.size = 0)
                            }),
                            (En.prototype.delete = function(t) {
                                var e = this.__data__,
                                    n = e.delete(t)
                                return (this.size = e.size), n
                            }),
                            (En.prototype.get = function(t) {
                                return this.__data__.get(t)
                            }),
                            (En.prototype.has = function(t) {
                                return this.__data__.has(t)
                            }),
                            (En.prototype.set = function(t, e) {
                                var n = this.__data__
                                if (n instanceof On) {
                                    var r = n.__data__
                                    if (!fn || r.length < 199) return r.push([t, e]), (this.size = ++n.size), this
                                    n = this.__data__ = new zn(r)
                                }
                                return n.set(t, e), (this.size = n.size), this
                            })
                        var tr = _i(lr),
                            er = _i(ur, !0)
                        function nr(t, e) {
                            var n = !0
                            return (
                                tr(t, function(t, r, i) {
                                    return (n = !!e(t, r, i))
                                }),
                                n
                            )
                        }
                        function rr(t, e, n) {
                            for (var r = -1, i = t.length; ++r < i; ) {
                                var a = t[r],
                                    o = e(a)
                                if (null != o && (void 0 === s ? o == o && !Xo(o) : n(o, s)))
                                    var s = o,
                                        l = a
                            }
                            return l
                        }
                        function ir(t, e) {
                            var n = []
                            return (
                                tr(t, function(t, r, i) {
                                    e(t, r, i) && n.push(t)
                                }),
                                n
                            )
                        }
                        function ar(t, e, n, r, i) {
                            var a = -1,
                                o = t.length
                            for (n || (n = aa), i || (i = []); ++a < o; ) {
                                var s = t[a]
                                e > 0 && n(s) ? (e > 1 ? ar(s, e - 1, n, r, i) : ge(i, s)) : r || (i[i.length] = s)
                            }
                            return i
                        }
                        var or = wi(),
                            sr = wi(!0)
                        function lr(t, e) {
                            return t && or(t, e, xs)
                        }
                        function ur(t, e) {
                            return t && sr(t, e, xs)
                        }
                        function cr(t, e) {
                            return ce(e, function(e) {
                                return Wo(t[e])
                            })
                        }
                        function hr(t, e) {
                            for (var n = 0, r = (e = si(e, t)).length; null != t && n < r; ) t = t[Sa(e[n++])]
                            return n && n == r ? t : void 0
                        }
                        function dr(t, e, n) {
                            var r = e(t)
                            return Fo(t) ? r : ge(r, n(t))
                        }
                        function fr(t) {
                            return null == t
                                ? void 0 === t
                                    ? '[object Undefined]'
                                    : '[object Null]'
                                : be && be in pt(t)
                                ? (function(t) {
                                      var e = Mt.call(t, be),
                                          n = t[be]
                                      try {
                                          t[be] = void 0
                                          var r = !0
                                      } catch (t) {}
                                      var i = At.call(t)
                                      r && (e ? (t[be] = n) : delete t[be])
                                      return i
                                  })(t)
                                : (function(t) {
                                      return At.call(t)
                                  })(t)
                        }
                        function gr(t, e) {
                            return t > e
                        }
                        function pr(t, e) {
                            return null != t && Mt.call(t, e)
                        }
                        function vr(t, e) {
                            return null != t && e in pt(t)
                        }
                        function mr(t, e, n) {
                            for (
                                var i = n ? de : he, a = t[0].length, o = t.length, s = o, l = r(o), u = 1 / 0, c = [];
                                s--;

                            ) {
                                var h = t[s]
                                s && e && (h = fe(h, Ie(e))),
                                    (u = sn(h.length, u)),
                                    (l[s] = !n && (e || (a >= 120 && h.length >= 120)) ? new Rn(s && h) : void 0)
                            }
                            h = t[0]
                            var d = -1,
                                f = l[0]
                            t: for (; ++d < a && c.length < u; ) {
                                var g = h[d],
                                    p = e ? e(g) : g
                                if (((g = n || 0 !== g ? g : 0), !(f ? Le(f, p) : i(c, p, n)))) {
                                    for (s = o; --s; ) {
                                        var v = l[s]
                                        if (!(v ? Le(v, p) : i(t[s], p, n))) continue t
                                    }
                                    f && f.push(p), c.push(g)
                                }
                            }
                            return c
                        }
                        function br(t, e, n) {
                            var r = null == (t = pa(t, (e = si(e, t)))) ? t : t[Sa(Na(e))]
                            return null == r ? void 0 : ae(r, t, n)
                        }
                        function yr(t) {
                            return qo(t) && fr(t) == l
                        }
                        function xr(t, e, n, r, i) {
                            return (
                                t === e ||
                                (null == t || null == e || (!qo(t) && !qo(e))
                                    ? t != t && e != e
                                    : (function(t, e, n, r, i, a) {
                                          var o = Fo(t),
                                              s = Fo(e),
                                              f = o ? u : na(t),
                                              g = s ? u : na(e),
                                              w = (f = f == l ? m : f) == m,
                                              S = (g = g == l ? m : g) == m,
                                              C = f == g
                                          if (C && Eo(t)) {
                                              if (!Eo(e)) return !1
                                              ;(o = !0), (w = !1)
                                          }
                                          if (C && !w)
                                              return (
                                                  a || (a = new En()),
                                                  o || Jo(t)
                                                      ? Hi(t, e, n, r, i, a)
                                                      : (function(t, e, n, r, i, a, o) {
                                                            switch (n) {
                                                                case M:
                                                                    if (
                                                                        t.byteLength != e.byteLength ||
                                                                        t.byteOffset != e.byteOffset
                                                                    )
                                                                        return !1
                                                                    ;(t = t.buffer), (e = e.buffer)
                                                                case k:
                                                                    return !(
                                                                        t.byteLength != e.byteLength ||
                                                                        !a(new Rt(t), new Rt(e))
                                                                    )
                                                                case c:
                                                                case h:
                                                                case v:
                                                                    return Do(+t, +e)
                                                                case d:
                                                                    return t.name == e.name && t.message == e.message
                                                                case b:
                                                                case x:
                                                                    return t == e + ''
                                                                case p:
                                                                    var s = We
                                                                case y:
                                                                    var l = 1 & r
                                                                    if ((s || (s = He), t.size != e.size && !l))
                                                                        return !1
                                                                    var u = o.get(t)
                                                                    if (u) return u == e
                                                                    ;(r |= 2), o.set(t, e)
                                                                    var f = Hi(s(t), s(e), r, i, a, o)
                                                                    return o.delete(t), f
                                                                case _:
                                                                    if (Cn) return Cn.call(t) == Cn.call(e)
                                                            }
                                                            return !1
                                                        })(t, e, f, n, r, i, a)
                                              )
                                          if (!(1 & n)) {
                                              var A = w && Mt.call(t, '__wrapped__'),
                                                  P = S && Mt.call(e, '__wrapped__')
                                              if (A || P) {
                                                  var D = A ? t.value() : t,
                                                      I = P ? e.value() : e
                                                  return a || (a = new En()), i(D, I, n, r, a)
                                              }
                                          }
                                          if (!C) return !1
                                          return (
                                              a || (a = new En()),
                                              (function(t, e, n, r, i, a) {
                                                  var o = 1 & n,
                                                      s = Ui(t),
                                                      l = s.length,
                                                      u = Ui(e).length
                                                  if (l != u && !o) return !1
                                                  var c = l
                                                  for (; c--; ) {
                                                      var h = s[c]
                                                      if (!(o ? h in e : Mt.call(e, h))) return !1
                                                  }
                                                  var d = a.get(t)
                                                  if (d && a.get(e)) return d == e
                                                  var f = !0
                                                  a.set(t, e), a.set(e, t)
                                                  var g = o
                                                  for (; ++c < l; ) {
                                                      h = s[c]
                                                      var p = t[h],
                                                          v = e[h]
                                                      if (r) var m = o ? r(v, p, h, e, t, a) : r(p, v, h, t, e, a)
                                                      if (!(void 0 === m ? p === v || i(p, v, n, r, a) : m)) {
                                                          f = !1
                                                          break
                                                      }
                                                      g || (g = 'constructor' == h)
                                                  }
                                                  if (f && !g) {
                                                      var b = t.constructor,
                                                          y = e.constructor
                                                      b == y ||
                                                          !('constructor' in t) ||
                                                          !('constructor' in e) ||
                                                          ('function' == typeof b &&
                                                              b instanceof b &&
                                                              'function' == typeof y &&
                                                              y instanceof y) ||
                                                          (f = !1)
                                                  }
                                                  return a.delete(t), a.delete(e), f
                                              })(t, e, n, r, i, a)
                                          )
                                      })(t, e, n, r, xr, i))
                            )
                        }
                        function _r(t, e, n, r) {
                            var i = n.length,
                                a = i,
                                o = !r
                            if (null == t) return !a
                            for (t = pt(t); i--; ) {
                                var s = n[i]
                                if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
                            }
                            for (; ++i < a; ) {
                                var l = (s = n[i])[0],
                                    u = t[l],
                                    c = s[1]
                                if (o && s[2]) {
                                    if (void 0 === u && !(l in t)) return !1
                                } else {
                                    var h = new En()
                                    if (r) var d = r(u, c, l, t, e, h)
                                    if (!(void 0 === d ? xr(c, u, 3, r, h) : d)) return !1
                                }
                            }
                            return !0
                        }
                        function wr(t) {
                            return !(!Ho(t) || ((e = t), Ct && Ct in e)) && (Wo(t) ? It : ot).test(Ca(t))
                            var e
                        }
                        function kr(t) {
                            return 'function' == typeof t
                                ? t
                                : null == t
                                ? $s
                                : 'object' == typeof t
                                ? Fo(t)
                                    ? Dr(t[0], t[1])
                                    : Pr(t)
                                : el(t)
                        }
                        function Mr(t) {
                            if (!ha(t)) return an(t)
                            var e = []
                            for (var n in pt(t)) Mt.call(t, n) && 'constructor' != n && e.push(n)
                            return e
                        }
                        function Sr(t) {
                            if (!Ho(t))
                                return (function(t) {
                                    var e = []
                                    if (null != t) for (var n in pt(t)) e.push(n)
                                    return e
                                })(t)
                            var e = ha(t),
                                n = []
                            for (var r in t) ('constructor' != r || (!e && Mt.call(t, r))) && n.push(r)
                            return n
                        }
                        function Cr(t, e) {
                            return t < e
                        }
                        function Ar(t, e) {
                            var n = -1,
                                i = zo(t) ? r(t.length) : []
                            return (
                                tr(t, function(t, r, a) {
                                    i[++n] = e(t, r, a)
                                }),
                                i
                            )
                        }
                        function Pr(t) {
                            var e = Ji(t)
                            return 1 == e.length && e[0][2]
                                ? fa(e[0][0], e[0][1])
                                : function(n) {
                                      return n === t || _r(n, t, e)
                                  }
                        }
                        function Dr(t, e) {
                            return la(t) && da(e)
                                ? fa(Sa(t), e)
                                : function(n) {
                                      var r = ps(n, t)
                                      return void 0 === r && r === e ? vs(n, t) : xr(e, r, 3)
                                  }
                        }
                        function Ir(t, e, n, r, i) {
                            t !== e &&
                                or(
                                    e,
                                    function(a, o) {
                                        if ((i || (i = new En()), Ho(a)))
                                            !(function(t, e, n, r, i, a, o) {
                                                var s = ma(t, n),
                                                    l = ma(e, n),
                                                    u = o.get(l)
                                                if (u) return void Vn(t, n, u)
                                                var c = a ? a(s, l, n + '', t, e, o) : void 0,
                                                    h = void 0 === c
                                                if (h) {
                                                    var d = Fo(l),
                                                        f = !d && Eo(l),
                                                        g = !d && !f && Jo(l)
                                                    ;(c = l),
                                                        d || f || g
                                                            ? Fo(s)
                                                                ? (c = s)
                                                                : Ro(s)
                                                                ? (c = mi(s))
                                                                : f
                                                                ? ((h = !1), (c = hi(l, !0)))
                                                                : g
                                                                ? ((h = !1), (c = fi(l, !0)))
                                                                : (c = [])
                                                            : Yo(l) || Lo(l)
                                                            ? ((c = s),
                                                              Lo(s) ? (c = os(s)) : (Ho(s) && !Wo(s)) || (c = ia(l)))
                                                            : (h = !1)
                                                }
                                                h && (o.set(l, c), i(c, l, r, a, o), o.delete(l))
                                                Vn(t, n, c)
                                            })(t, e, o, n, Ir, r, i)
                                        else {
                                            var s = r ? r(ma(t, o), a, o + '', t, e, i) : void 0
                                            void 0 === s && (s = a), Vn(t, o, s)
                                        }
                                    },
                                    _s
                                )
                        }
                        function Tr(t, e) {
                            var n = t.length
                            if (n) return oa((e += e < 0 ? n : 0), n) ? t[e] : void 0
                        }
                        function Lr(t, e, n) {
                            var r = -1
                            return (
                                (e = fe(e.length ? e : [$s], Ie(Zi()))),
                                (function(t, e) {
                                    var n = t.length
                                    for (t.sort(e); n--; ) t[n] = t[n].value
                                    return t
                                })(
                                    Ar(t, function(t, n, i) {
                                        return {
                                            criteria: fe(e, function(e) {
                                                return e(t)
                                            }),
                                            index: ++r,
                                            value: t,
                                        }
                                    }),
                                    function(t, e) {
                                        return (function(t, e, n) {
                                            var r = -1,
                                                i = t.criteria,
                                                a = e.criteria,
                                                o = i.length,
                                                s = n.length
                                            for (; ++r < o; ) {
                                                var l = gi(i[r], a[r])
                                                if (l) {
                                                    if (r >= s) return l
                                                    var u = n[r]
                                                    return l * ('desc' == u ? -1 : 1)
                                                }
                                            }
                                            return t.index - e.index
                                        })(t, e, n)
                                    }
                                )
                            )
                        }
                        function Fr(t, e, n) {
                            for (var r = -1, i = e.length, a = {}; ++r < i; ) {
                                var o = e[r],
                                    s = hr(t, o)
                                n(s, o) && jr(a, si(o, t), s)
                            }
                            return a
                        }
                        function Or(t, e, n, r) {
                            var i = r ? we : _e,
                                a = -1,
                                o = e.length,
                                s = t
                            for (t === e && (e = mi(e)), n && (s = fe(t, Ie(n))); ++a < o; )
                                for (var l = 0, u = e[a], c = n ? n(u) : u; (l = i(s, c, l, r)) > -1; )
                                    s !== t && Kt.call(s, l, 1), Kt.call(t, l, 1)
                            return t
                        }
                        function zr(t, e) {
                            for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                                var i = e[n]
                                if (n == r || i !== a) {
                                    var a = i
                                    oa(i) ? Kt.call(t, i, 1) : Qr(t, i)
                                }
                            }
                            return t
                        }
                        function Rr(t, e) {
                            return t + Qe(cn() * (e - t + 1))
                        }
                        function Er(t, e) {
                            var n = ''
                            if (!t || e < 1 || e > 9007199254740991) return n
                            do {
                                e % 2 && (n += t), (e = Qe(e / 2)) && (t += t)
                            } while (e)
                            return n
                        }
                        function Nr(t, e) {
                            return xa(ga(t, e, $s), t + '')
                        }
                        function Br(t) {
                            return Bn(Ds(t))
                        }
                        function Wr(t, e) {
                            var n = Ds(t)
                            return ka(n, Kn(e, 0, n.length))
                        }
                        function jr(t, e, n, r) {
                            if (!Ho(t)) return t
                            for (var i = -1, a = (e = si(e, t)).length, o = a - 1, s = t; null != s && ++i < a; ) {
                                var l = Sa(e[i]),
                                    u = n
                                if (i != o) {
                                    var c = s[l]
                                    void 0 === (u = r ? r(c, l, s) : void 0) && (u = Ho(c) ? c : oa(e[i + 1]) ? [] : {})
                                }
                                Hn(s, l, u), (s = s[l])
                            }
                            return t
                        }
                        var Vr = bn
                                ? function(t, e) {
                                      return bn.set(t, e), t
                                  }
                                : $s,
                            Hr = Ce
                                ? function(t, e) {
                                      return Ce(t, 'toString', {
                                          configurable: !0,
                                          enumerable: !1,
                                          value: Hs(e),
                                          writable: !0,
                                      })
                                  }
                                : $s
                        function qr(t) {
                            return ka(Ds(t))
                        }
                        function Ur(t, e, n) {
                            var i = -1,
                                a = t.length
                            e < 0 && (e = -e > a ? 0 : a + e),
                                (n = n > a ? a : n) < 0 && (n += a),
                                (a = e > n ? 0 : (n - e) >>> 0),
                                (e >>>= 0)
                            for (var o = r(a); ++i < a; ) o[i] = t[i + e]
                            return o
                        }
                        function $r(t, e) {
                            var n
                            return (
                                tr(t, function(t, r, i) {
                                    return !(n = e(t, r, i))
                                }),
                                !!n
                            )
                        }
                        function Yr(t, e, n) {
                            var r = 0,
                                i = null == t ? r : t.length
                            if ('number' == typeof e && e == e && i <= 2147483647) {
                                for (; r < i; ) {
                                    var a = (r + i) >>> 1,
                                        o = t[a]
                                    null !== o && !Xo(o) && (n ? o <= e : o < e) ? (r = a + 1) : (i = a)
                                }
                                return i
                            }
                            return Gr(t, e, $s, n)
                        }
                        function Gr(t, e, n, r) {
                            e = n(e)
                            for (
                                var i = 0,
                                    a = null == t ? 0 : t.length,
                                    o = e != e,
                                    s = null === e,
                                    l = Xo(e),
                                    u = void 0 === e;
                                i < a;

                            ) {
                                var c = Qe((i + a) / 2),
                                    h = n(t[c]),
                                    d = void 0 !== h,
                                    f = null === h,
                                    g = h == h,
                                    p = Xo(h)
                                if (o) var v = r || g
                                else
                                    v = u
                                        ? g && (r || d)
                                        : s
                                        ? g && d && (r || !f)
                                        : l
                                        ? g && d && !f && (r || !p)
                                        : !f && !p && (r ? h <= e : h < e)
                                v ? (i = c + 1) : (a = c)
                            }
                            return sn(a, 4294967294)
                        }
                        function Kr(t, e) {
                            for (var n = -1, r = t.length, i = 0, a = []; ++n < r; ) {
                                var o = t[n],
                                    s = e ? e(o) : o
                                if (!n || !Do(s, l)) {
                                    var l = s
                                    a[i++] = 0 === o ? 0 : o
                                }
                            }
                            return a
                        }
                        function Zr(t) {
                            return 'number' == typeof t ? t : Xo(t) ? NaN : +t
                        }
                        function Xr(t) {
                            if ('string' == typeof t) return t
                            if (Fo(t)) return fe(t, Xr) + ''
                            if (Xo(t)) return An ? An.call(t) : ''
                            var e = t + ''
                            return '0' == e && 1 / t == -1 / 0 ? '-0' : e
                        }
                        function Jr(t, e, n) {
                            var r = -1,
                                i = he,
                                a = t.length,
                                o = !0,
                                s = [],
                                l = s
                            if (n) (o = !1), (i = de)
                            else if (a >= 200) {
                                var u = e ? null : Ei(t)
                                if (u) return He(u)
                                ;(o = !1), (i = Le), (l = new Rn())
                            } else l = e ? [] : s
                            t: for (; ++r < a; ) {
                                var c = t[r],
                                    h = e ? e(c) : c
                                if (((c = n || 0 !== c ? c : 0), o && h == h)) {
                                    for (var d = l.length; d--; ) if (l[d] === h) continue t
                                    e && l.push(h), s.push(c)
                                } else i(l, h, n) || (l !== s && l.push(h), s.push(c))
                            }
                            return s
                        }
                        function Qr(t, e) {
                            return null == (t = pa(t, (e = si(e, t)))) || delete t[Sa(Na(e))]
                        }
                        function ti(t, e, n, r) {
                            return jr(t, e, n(hr(t, e)), r)
                        }
                        function ei(t, e, n, r) {
                            for (var i = t.length, a = r ? i : -1; (r ? a-- : ++a < i) && e(t[a], a, t); );
                            return n ? Ur(t, r ? 0 : a, r ? a + 1 : i) : Ur(t, r ? a + 1 : 0, r ? i : a)
                        }
                        function ni(t, e) {
                            var n = t
                            return (
                                n instanceof Ln && (n = n.value()),
                                pe(
                                    e,
                                    function(t, e) {
                                        return e.func.apply(e.thisArg, ge([t], e.args))
                                    },
                                    n
                                )
                            )
                        }
                        function ri(t, e, n) {
                            var i = t.length
                            if (i < 2) return i ? Jr(t[0]) : []
                            for (var a = -1, o = r(i); ++a < i; )
                                for (var s = t[a], l = -1; ++l < i; ) l != a && (o[a] = Qn(o[a] || s, t[l], e, n))
                            return Jr(ar(o, 1), e, n)
                        }
                        function ii(t, e, n) {
                            for (var r = -1, i = t.length, a = e.length, o = {}; ++r < i; ) {
                                var s = r < a ? e[r] : void 0
                                n(o, t[r], s)
                            }
                            return o
                        }
                        function ai(t) {
                            return Ro(t) ? t : []
                        }
                        function oi(t) {
                            return 'function' == typeof t ? t : $s
                        }
                        function si(t, e) {
                            return Fo(t) ? t : la(t, e) ? [t] : Ma(ss(t))
                        }
                        var li = Nr
                        function ui(t, e, n) {
                            var r = t.length
                            return (n = void 0 === n ? r : n), !e && n >= r ? t : Ur(t, e, n)
                        }
                        var ci =
                            Ke ||
                            function(t) {
                                return Yt.clearTimeout(t)
                            }
                        function hi(t, e) {
                            if (e) return t.slice()
                            var n = t.length,
                                r = Vt ? Vt(n) : new t.constructor(n)
                            return t.copy(r), r
                        }
                        function di(t) {
                            var e = new t.constructor(t.byteLength)
                            return new Rt(e).set(new Rt(t)), e
                        }
                        function fi(t, e) {
                            var n = e ? di(t.buffer) : t.buffer
                            return new t.constructor(n, t.byteOffset, t.length)
                        }
                        function gi(t, e) {
                            if (t !== e) {
                                var n = void 0 !== t,
                                    r = null === t,
                                    i = t == t,
                                    a = Xo(t),
                                    o = void 0 !== e,
                                    s = null === e,
                                    l = e == e,
                                    u = Xo(e)
                                if (
                                    (!s && !u && !a && t > e) ||
                                    (a && o && l && !s && !u) ||
                                    (r && o && l) ||
                                    (!n && l) ||
                                    !i
                                )
                                    return 1
                                if (
                                    (!r && !a && !u && t < e) ||
                                    (u && n && i && !r && !a) ||
                                    (s && n && i) ||
                                    (!o && i) ||
                                    !l
                                )
                                    return -1
                            }
                            return 0
                        }
                        function pi(t, e, n, i) {
                            for (
                                var a = -1,
                                    o = t.length,
                                    s = n.length,
                                    l = -1,
                                    u = e.length,
                                    c = on(o - s, 0),
                                    h = r(u + c),
                                    d = !i;
                                ++l < u;

                            )
                                h[l] = e[l]
                            for (; ++a < s; ) (d || a < o) && (h[n[a]] = t[a])
                            for (; c--; ) h[l++] = t[a++]
                            return h
                        }
                        function vi(t, e, n, i) {
                            for (
                                var a = -1,
                                    o = t.length,
                                    s = -1,
                                    l = n.length,
                                    u = -1,
                                    c = e.length,
                                    h = on(o - l, 0),
                                    d = r(h + c),
                                    f = !i;
                                ++a < h;

                            )
                                d[a] = t[a]
                            for (var g = a; ++u < c; ) d[g + u] = e[u]
                            for (; ++s < l; ) (f || a < o) && (d[g + n[s]] = t[a++])
                            return d
                        }
                        function mi(t, e) {
                            var n = -1,
                                i = t.length
                            for (e || (e = r(i)); ++n < i; ) e[n] = t[n]
                            return e
                        }
                        function bi(t, e, n, r) {
                            var i = !n
                            n || (n = {})
                            for (var a = -1, o = e.length; ++a < o; ) {
                                var s = e[a],
                                    l = r ? r(n[s], t[s], s, n, t) : void 0
                                void 0 === l && (l = t[s]), i ? Yn(n, s, l) : Hn(n, s, l)
                            }
                            return n
                        }
                        function yi(t, e) {
                            return function(n, r) {
                                var i = Fo(n) ? oe : Un,
                                    a = e ? e() : {}
                                return i(n, t, Zi(r, 2), a)
                            }
                        }
                        function xi(t) {
                            return Nr(function(e, n) {
                                var r = -1,
                                    i = n.length,
                                    a = i > 1 ? n[i - 1] : void 0,
                                    o = i > 2 ? n[2] : void 0
                                for (
                                    a = t.length > 3 && 'function' == typeof a ? (i--, a) : void 0,
                                        o && sa(n[0], n[1], o) && ((a = i < 3 ? void 0 : a), (i = 1)),
                                        e = pt(e);
                                    ++r < i;

                                ) {
                                    var s = n[r]
                                    s && t(e, s, r, a)
                                }
                                return e
                            })
                        }
                        function _i(t, e) {
                            return function(n, r) {
                                if (null == n) return n
                                if (!zo(n)) return t(n, r)
                                for (
                                    var i = n.length, a = e ? i : -1, o = pt(n);
                                    (e ? a-- : ++a < i) && !1 !== r(o[a], a, o);

                                );
                                return n
                            }
                        }
                        function wi(t) {
                            return function(e, n, r) {
                                for (var i = -1, a = pt(e), o = r(e), s = o.length; s--; ) {
                                    var l = o[t ? s : ++i]
                                    if (!1 === n(a[l], l, a)) break
                                }
                                return e
                            }
                        }
                        function ki(t) {
                            return function(e) {
                                var n = Be((e = ss(e))) ? $e(e) : void 0,
                                    r = n ? n[0] : e.charAt(0),
                                    i = n ? ui(n, 1).join('') : e.slice(1)
                                return r[t]() + i
                            }
                        }
                        function Mi(t) {
                            return function(e) {
                                return pe(Ws(Ls(e).replace(Lt, '')), t, '')
                            }
                        }
                        function Si(t) {
                            return function() {
                                var e = arguments
                                switch (e.length) {
                                    case 0:
                                        return new t()
                                    case 1:
                                        return new t(e[0])
                                    case 2:
                                        return new t(e[0], e[1])
                                    case 3:
                                        return new t(e[0], e[1], e[2])
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3])
                                    case 5:
                                        return new t(e[0], e[1], e[2], e[3], e[4])
                                    case 6:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5])
                                    case 7:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                }
                                var n = Dn(t.prototype),
                                    r = t.apply(n, e)
                                return Ho(r) ? r : n
                            }
                        }
                        function Ci(t) {
                            return function(e, n, r) {
                                var i = pt(e)
                                if (!zo(e)) {
                                    var a = Zi(n, 3)
                                    ;(e = xs(e)),
                                        (n = function(t) {
                                            return a(i[t], t, i)
                                        })
                                }
                                var o = t(e, n, r)
                                return o > -1 ? i[a ? e[o] : o] : void 0
                            }
                        }
                        function Ai(t) {
                            return qi(function(e) {
                                var n = e.length,
                                    r = n,
                                    i = Tn.prototype.thru
                                for (t && e.reverse(); r--; ) {
                                    var o = e[r]
                                    if ('function' != typeof o) throw new bt(a)
                                    if (i && !s && 'wrapper' == Gi(o)) var s = new Tn([], !0)
                                }
                                for (r = s ? r : n; ++r < n; ) {
                                    var l = Gi((o = e[r])),
                                        u = 'wrapper' == l ? Yi(o) : void 0
                                    s =
                                        u && ua(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9]
                                            ? s[Gi(u[0])].apply(s, u[3])
                                            : 1 == o.length && ua(o)
                                            ? s[l]()
                                            : s.thru(o)
                                }
                                return function() {
                                    var t = arguments,
                                        r = t[0]
                                    if (s && 1 == t.length && Fo(r)) return s.plant(r).value()
                                    for (var i = 0, a = n ? e[i].apply(this, t) : r; ++i < n; ) a = e[i].call(this, a)
                                    return a
                                }
                            })
                        }
                        function Pi(t, e, n, i, a, o, s, l, u, c) {
                            var h = 128 & e,
                                d = 1 & e,
                                f = 2 & e,
                                g = 24 & e,
                                p = 512 & e,
                                v = f ? void 0 : Si(t)
                            return function m() {
                                for (var b = arguments.length, y = r(b), x = b; x--; ) y[x] = arguments[x]
                                if (g)
                                    var _ = Ki(m),
                                        w = ze(y, _)
                                if ((i && (y = pi(y, i, a, g)), o && (y = vi(y, o, s, g)), (b -= w), g && b < c)) {
                                    var k = Ve(y, _)
                                    return zi(t, e, Pi, m.placeholder, n, y, k, l, u, c - b)
                                }
                                var M = d ? n : this,
                                    S = f ? M[t] : t
                                return (
                                    (b = y.length),
                                    l ? (y = va(y, l)) : p && b > 1 && y.reverse(),
                                    h && u < b && (y.length = u),
                                    this && this !== Yt && this instanceof m && (S = v || Si(S)),
                                    S.apply(M, y)
                                )
                            }
                        }
                        function Di(t, e) {
                            return function(n, r) {
                                return (function(t, e, n, r) {
                                    return (
                                        lr(t, function(t, i, a) {
                                            e(r, n(t), i, a)
                                        }),
                                        r
                                    )
                                })(n, t, e(r), {})
                            }
                        }
                        function Ii(t, e) {
                            return function(n, r) {
                                var i
                                if (void 0 === n && void 0 === r) return e
                                if ((void 0 !== n && (i = n), void 0 !== r)) {
                                    if (void 0 === i) return r
                                    'string' == typeof n || 'string' == typeof r
                                        ? ((n = Xr(n)), (r = Xr(r)))
                                        : ((n = Zr(n)), (r = Zr(r))),
                                        (i = t(n, r))
                                }
                                return i
                            }
                        }
                        function Ti(t) {
                            return qi(function(e) {
                                return (
                                    (e = fe(e, Ie(Zi()))),
                                    Nr(function(n) {
                                        var r = this
                                        return t(e, function(t) {
                                            return ae(t, r, n)
                                        })
                                    })
                                )
                            })
                        }
                        function Li(t, e) {
                            var n = (e = void 0 === e ? ' ' : Xr(e)).length
                            if (n < 2) return n ? Er(e, t) : e
                            var r = Er(e, Je(t / Ue(e)))
                            return Be(e) ? ui($e(r), 0, t).join('') : r.slice(0, t)
                        }
                        function Fi(t) {
                            return function(e, n, i) {
                                return (
                                    i && 'number' != typeof i && sa(e, n, i) && (n = i = void 0),
                                    (e = ns(e)),
                                    void 0 === n ? ((n = e), (e = 0)) : (n = ns(n)),
                                    (function(t, e, n, i) {
                                        for (var a = -1, o = on(Je((e - t) / (n || 1)), 0), s = r(o); o--; )
                                            (s[i ? o : ++a] = t), (t += n)
                                        return s
                                    })(e, n, (i = void 0 === i ? (e < n ? 1 : -1) : ns(i)), t)
                                )
                            }
                        }
                        function Oi(t) {
                            return function(e, n) {
                                return (
                                    ('string' == typeof e && 'string' == typeof n) || ((e = as(e)), (n = as(n))),
                                    t(e, n)
                                )
                            }
                        }
                        function zi(t, e, n, r, i, a, o, s, l, u) {
                            var c = 8 & e
                            ;(e |= c ? 32 : 64), 4 & (e &= ~(c ? 64 : 32)) || (e &= -4)
                            var h = [t, e, i, c ? a : void 0, c ? o : void 0, c ? void 0 : a, c ? void 0 : o, s, l, u],
                                d = n.apply(void 0, h)
                            return ua(t) && ba(d, h), (d.placeholder = r), _a(d, t, e)
                        }
                        function Ri(t) {
                            var e = gt[t]
                            return function(t, n) {
                                if (((t = as(t)), (n = null == n ? 0 : sn(rs(n), 292)) && nn(t))) {
                                    var r = (ss(t) + 'e').split('e')
                                    return +(
                                        (r = (ss(e(r[0] + 'e' + (+r[1] + n))) + 'e').split('e'))[0] +
                                        'e' +
                                        (+r[1] - n)
                                    )
                                }
                                return e(t)
                            }
                        }
                        var Ei =
                            pn && 1 / He(new pn([, -0]))[1] == 1 / 0
                                ? function(t) {
                                      return new pn(t)
                                  }
                                : Xs
                        function Ni(t) {
                            return function(e) {
                                var n = na(e)
                                return n == p
                                    ? We(e)
                                    : n == y
                                    ? qe(e)
                                    : (function(t, e) {
                                          return fe(e, function(e) {
                                              return [e, t[e]]
                                          })
                                      })(e, t(e))
                            }
                        }
                        function Bi(t, e, n, i, s, l, u, c) {
                            var h = 2 & e
                            if (!h && 'function' != typeof t) throw new bt(a)
                            var d = i ? i.length : 0
                            if (
                                (d || ((e &= -97), (i = s = void 0)),
                                (u = void 0 === u ? u : on(rs(u), 0)),
                                (c = void 0 === c ? c : rs(c)),
                                (d -= s ? s.length : 0),
                                64 & e)
                            ) {
                                var f = i,
                                    g = s
                                i = s = void 0
                            }
                            var p = h ? void 0 : Yi(t),
                                v = [t, e, n, i, s, f, g, l, u, c]
                            if (
                                (p &&
                                    (function(t, e) {
                                        var n = t[1],
                                            r = e[1],
                                            i = n | r,
                                            a = i < 131,
                                            s =
                                                (128 == r && 8 == n) ||
                                                (128 == r && 256 == n && t[7].length <= e[8]) ||
                                                (384 == r && e[7].length <= e[8] && 8 == n)
                                        if (!a && !s) return t
                                        1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4))
                                        var l = e[3]
                                        if (l) {
                                            var u = t[3]
                                            ;(t[3] = u ? pi(u, l, e[4]) : l), (t[4] = u ? Ve(t[3], o) : e[4])
                                        }
                                        ;(l = e[5]) &&
                                            ((u = t[5]),
                                            (t[5] = u ? vi(u, l, e[6]) : l),
                                            (t[6] = u ? Ve(t[5], o) : e[6]))
                                        ;(l = e[7]) && (t[7] = l)
                                        128 & r && (t[8] = null == t[8] ? e[8] : sn(t[8], e[8]))
                                        null == t[9] && (t[9] = e[9])
                                        ;(t[0] = e[0]), (t[1] = i)
                                    })(v, p),
                                (t = v[0]),
                                (e = v[1]),
                                (n = v[2]),
                                (i = v[3]),
                                (s = v[4]),
                                !(c = v[9] = void 0 === v[9] ? (h ? 0 : t.length) : on(v[9] - d, 0)) &&
                                    24 & e &&
                                    (e &= -25),
                                e && 1 != e)
                            )
                                m =
                                    8 == e || 16 == e
                                        ? (function(t, e, n) {
                                              var i = Si(t)
                                              return function a() {
                                                  for (var o = arguments.length, s = r(o), l = o, u = Ki(a); l--; )
                                                      s[l] = arguments[l]
                                                  var c = o < 3 && s[0] !== u && s[o - 1] !== u ? [] : Ve(s, u)
                                                  if ((o -= c.length) < n)
                                                      return zi(
                                                          t,
                                                          e,
                                                          Pi,
                                                          a.placeholder,
                                                          void 0,
                                                          s,
                                                          c,
                                                          void 0,
                                                          void 0,
                                                          n - o
                                                      )
                                                  var h = this && this !== Yt && this instanceof a ? i : t
                                                  return ae(h, this, s)
                                              }
                                          })(t, e, c)
                                        : (32 != e && 33 != e) || s.length
                                        ? Pi.apply(void 0, v)
                                        : (function(t, e, n, i) {
                                              var a = 1 & e,
                                                  o = Si(t)
                                              return function e() {
                                                  for (
                                                      var s = -1,
                                                          l = arguments.length,
                                                          u = -1,
                                                          c = i.length,
                                                          h = r(c + l),
                                                          d = this && this !== Yt && this instanceof e ? o : t;
                                                      ++u < c;

                                                  )
                                                      h[u] = i[u]
                                                  for (; l--; ) h[u++] = arguments[++s]
                                                  return ae(d, a ? n : this, h)
                                              }
                                          })(t, e, n, i)
                            else
                                var m = (function(t, e, n) {
                                    var r = 1 & e,
                                        i = Si(t)
                                    return function e() {
                                        var a = this && this !== Yt && this instanceof e ? i : t
                                        return a.apply(r ? n : this, arguments)
                                    }
                                })(t, e, n)
                            return _a((p ? Vr : ba)(m, v), t, e)
                        }
                        function Wi(t, e, n, r) {
                            return void 0 === t || (Do(t, _t[n]) && !Mt.call(r, n)) ? e : t
                        }
                        function ji(t, e, n, r, i, a) {
                            return Ho(t) && Ho(e) && (a.set(e, t), Ir(t, e, void 0, ji, a), a.delete(e)), t
                        }
                        function Vi(t) {
                            return Yo(t) ? void 0 : t
                        }
                        function Hi(t, e, n, r, i, a) {
                            var o = 1 & n,
                                s = t.length,
                                l = e.length
                            if (s != l && !(o && l > s)) return !1
                            var u = a.get(t)
                            if (u && a.get(e)) return u == e
                            var c = -1,
                                h = !0,
                                d = 2 & n ? new Rn() : void 0
                            for (a.set(t, e), a.set(e, t); ++c < s; ) {
                                var f = t[c],
                                    g = e[c]
                                if (r) var p = o ? r(g, f, c, e, t, a) : r(f, g, c, t, e, a)
                                if (void 0 !== p) {
                                    if (p) continue
                                    h = !1
                                    break
                                }
                                if (d) {
                                    if (
                                        !me(e, function(t, e) {
                                            if (!Le(d, e) && (f === t || i(f, t, n, r, a))) return d.push(e)
                                        })
                                    ) {
                                        h = !1
                                        break
                                    }
                                } else if (f !== g && !i(f, g, n, r, a)) {
                                    h = !1
                                    break
                                }
                            }
                            return a.delete(t), a.delete(e), h
                        }
                        function qi(t) {
                            return xa(ga(t, void 0, Fa), t + '')
                        }
                        function Ui(t) {
                            return dr(t, xs, ta)
                        }
                        function $i(t) {
                            return dr(t, _s, ea)
                        }
                        var Yi = bn
                            ? function(t) {
                                  return bn.get(t)
                              }
                            : Xs
                        function Gi(t) {
                            for (var e = t.name + '', n = yn[e], r = Mt.call(yn, e) ? n.length : 0; r--; ) {
                                var i = n[r],
                                    a = i.func
                                if (null == a || a == t) return i.name
                            }
                            return e
                        }
                        function Ki(t) {
                            return (Mt.call(Pn, 'placeholder') ? Pn : t).placeholder
                        }
                        function Zi() {
                            var t = Pn.iteratee || Ys
                            return (t = t === Ys ? kr : t), arguments.length ? t(arguments[0], arguments[1]) : t
                        }
                        function Xi(t, e) {
                            var n,
                                r,
                                i = t.__data__
                            return ('string' == (r = typeof (n = e)) || 'number' == r || 'symbol' == r || 'boolean' == r
                              ? '__proto__' !== n
                              : null === n)
                                ? i['string' == typeof e ? 'string' : 'hash']
                                : i.map
                        }
                        function Ji(t) {
                            for (var e = xs(t), n = e.length; n--; ) {
                                var r = e[n],
                                    i = t[r]
                                e[n] = [r, i, da(i)]
                            }
                            return e
                        }
                        function Qi(t, e) {
                            var n = (function(t, e) {
                                return null == t ? void 0 : t[e]
                            })(t, e)
                            return wr(n) ? n : void 0
                        }
                        var ta = tn
                                ? function(t) {
                                      return null == t
                                          ? []
                                          : ((t = pt(t)),
                                            ce(tn(t), function(e) {
                                                return Gt.call(t, e)
                                            }))
                                  }
                                : il,
                            ea = tn
                                ? function(t) {
                                      for (var e = []; t; ) ge(e, ta(t)), (t = Ut(t))
                                      return e
                                  }
                                : il,
                            na = fr
                        function ra(t, e, n) {
                            for (var r = -1, i = (e = si(e, t)).length, a = !1; ++r < i; ) {
                                var o = Sa(e[r])
                                if (!(a = null != t && n(t, o))) break
                                t = t[o]
                            }
                            return a || ++r != i
                                ? a
                                : !!(i = null == t ? 0 : t.length) && Vo(i) && oa(o, i) && (Fo(t) || Lo(t))
                        }
                        function ia(t) {
                            return 'function' != typeof t.constructor || ha(t) ? {} : Dn(Ut(t))
                        }
                        function aa(t) {
                            return Fo(t) || Lo(t) || !!(Xt && t && t[Xt])
                        }
                        function oa(t, e) {
                            var n = typeof t
                            return (
                                !!(e = null == e ? 9007199254740991 : e) &&
                                ('number' == n || ('symbol' != n && lt.test(t))) &&
                                t > -1 &&
                                t % 1 == 0 &&
                                t < e
                            )
                        }
                        function sa(t, e, n) {
                            if (!Ho(n)) return !1
                            var r = typeof e
                            return !!('number' == r ? zo(n) && oa(e, n.length) : 'string' == r && e in n) && Do(n[e], t)
                        }
                        function la(t, e) {
                            if (Fo(t)) return !1
                            var n = typeof t
                            return (
                                !('number' != n && 'symbol' != n && 'boolean' != n && null != t && !Xo(t)) ||
                                q.test(t) || !H.test(t) || (null != e && t in pt(e))
                            )
                        }
                        function ua(t) {
                            var e = Gi(t),
                                n = Pn[e]
                            if ('function' != typeof n || !(e in Ln.prototype)) return !1
                            if (t === n) return !0
                            var r = Yi(n)
                            return !!r && t === r[0]
                        }
                        ;((dn && na(new dn(new ArrayBuffer(1))) != M) ||
                            (fn && na(new fn()) != p) ||
                            (gn && '[object Promise]' != na(gn.resolve())) ||
                            (pn && na(new pn()) != y) ||
                            (vn && na(new vn()) != w)) &&
                            (na = function(t) {
                                var e = fr(t),
                                    n = e == m ? t.constructor : void 0,
                                    r = n ? Ca(n) : ''
                                if (r)
                                    switch (r) {
                                        case xn:
                                            return M
                                        case _n:
                                            return p
                                        case wn:
                                            return '[object Promise]'
                                        case kn:
                                            return y
                                        case Mn:
                                            return w
                                    }
                                return e
                            })
                        var ca = wt ? Wo : al
                        function ha(t) {
                            var e = t && t.constructor
                            return t === (('function' == typeof e && e.prototype) || _t)
                        }
                        function da(t) {
                            return t == t && !Ho(t)
                        }
                        function fa(t, e) {
                            return function(n) {
                                return null != n && n[t] === e && (void 0 !== e || t in pt(n))
                            }
                        }
                        function ga(t, e, n) {
                            return (
                                (e = on(void 0 === e ? t.length - 1 : e, 0)),
                                function() {
                                    for (var i = arguments, a = -1, o = on(i.length - e, 0), s = r(o); ++a < o; )
                                        s[a] = i[e + a]
                                    a = -1
                                    for (var l = r(e + 1); ++a < e; ) l[a] = i[a]
                                    return (l[e] = n(s)), ae(t, this, l)
                                }
                            )
                        }
                        function pa(t, e) {
                            return e.length < 2 ? t : hr(t, Ur(e, 0, -1))
                        }
                        function va(t, e) {
                            for (var n = t.length, r = sn(e.length, n), i = mi(t); r--; ) {
                                var a = e[r]
                                t[r] = oa(a, n) ? i[a] : void 0
                            }
                            return t
                        }
                        function ma(t, e) {
                            if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e) return t[e]
                        }
                        var ba = wa(Vr),
                            ya =
                                Xe ||
                                function(t, e) {
                                    return Yt.setTimeout(t, e)
                                },
                            xa = wa(Hr)
                        function _a(t, e, n) {
                            var r = e + ''
                            return xa(
                                t,
                                (function(t, e) {
                                    var n = e.length
                                    if (!n) return t
                                    var r = n - 1
                                    return (
                                        (e[r] = (n > 1 ? '& ' : '') + e[r]),
                                        (e = e.join(n > 2 ? ', ' : ' ')),
                                        t.replace(X, '{\n/* [wrapped with ' + e + '] */\n')
                                    )
                                })(
                                    r,
                                    (function(t, e) {
                                        return (
                                            se(s, function(n) {
                                                var r = '_.' + n[0]
                                                e & n[1] && !he(t, r) && t.push(r)
                                            }),
                                            t.sort()
                                        )
                                    })(
                                        (function(t) {
                                            var e = t.match(J)
                                            return e ? e[1].split(Q) : []
                                        })(r),
                                        n
                                    )
                                )
                            )
                        }
                        function wa(t) {
                            var e = 0,
                                n = 0
                            return function() {
                                var r = ln(),
                                    i = 16 - (r - n)
                                if (((n = r), i > 0)) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0
                                return t.apply(void 0, arguments)
                            }
                        }
                        function ka(t, e) {
                            var n = -1,
                                r = t.length,
                                i = r - 1
                            for (e = void 0 === e ? r : e; ++n < e; ) {
                                var a = Rr(n, i),
                                    o = t[a]
                                ;(t[a] = t[n]), (t[n] = o)
                            }
                            return (t.length = e), t
                        }
                        var Ma = (function(t) {
                            var e = ko(t, function(t) {
                                    return 500 === n.size && n.clear(), t
                                }),
                                n = e.cache
                            return e
                        })(function(t) {
                            var e = []
                            return (
                                46 === t.charCodeAt(0) && e.push(''),
                                t.replace(U, function(t, n, r, i) {
                                    e.push(r ? i.replace(et, '$1') : n || t)
                                }),
                                e
                            )
                        })
                        function Sa(t) {
                            if ('string' == typeof t || Xo(t)) return t
                            var e = t + ''
                            return '0' == e && 1 / t == -1 / 0 ? '-0' : e
                        }
                        function Ca(t) {
                            if (null != t) {
                                try {
                                    return kt.call(t)
                                } catch (t) {}
                                try {
                                    return t + ''
                                } catch (t) {}
                            }
                            return ''
                        }
                        function Aa(t) {
                            if (t instanceof Ln) return t.clone()
                            var e = new Tn(t.__wrapped__, t.__chain__)
                            return (
                                (e.__actions__ = mi(t.__actions__)),
                                (e.__index__ = t.__index__),
                                (e.__values__ = t.__values__),
                                e
                            )
                        }
                        var Pa = Nr(function(t, e) {
                                return Ro(t) ? Qn(t, ar(e, 1, Ro, !0)) : []
                            }),
                            Da = Nr(function(t, e) {
                                var n = Na(e)
                                return Ro(n) && (n = void 0), Ro(t) ? Qn(t, ar(e, 1, Ro, !0), Zi(n, 2)) : []
                            }),
                            Ia = Nr(function(t, e) {
                                var n = Na(e)
                                return Ro(n) && (n = void 0), Ro(t) ? Qn(t, ar(e, 1, Ro, !0), void 0, n) : []
                            })
                        function Ta(t, e, n) {
                            var r = null == t ? 0 : t.length
                            if (!r) return -1
                            var i = null == n ? 0 : rs(n)
                            return i < 0 && (i = on(r + i, 0)), xe(t, Zi(e, 3), i)
                        }
                        function La(t, e, n) {
                            var r = null == t ? 0 : t.length
                            if (!r) return -1
                            var i = r - 1
                            return (
                                void 0 !== n && ((i = rs(n)), (i = n < 0 ? on(r + i, 0) : sn(i, r - 1))),
                                xe(t, Zi(e, 3), i, !0)
                            )
                        }
                        function Fa(t) {
                            return (null == t ? 0 : t.length) ? ar(t, 1) : []
                        }
                        function Oa(t) {
                            return t && t.length ? t[0] : void 0
                        }
                        var za = Nr(function(t) {
                                var e = fe(t, ai)
                                return e.length && e[0] === t[0] ? mr(e) : []
                            }),
                            Ra = Nr(function(t) {
                                var e = Na(t),
                                    n = fe(t, ai)
                                return (
                                    e === Na(n) ? (e = void 0) : n.pop(),
                                    n.length && n[0] === t[0] ? mr(n, Zi(e, 2)) : []
                                )
                            }),
                            Ea = Nr(function(t) {
                                var e = Na(t),
                                    n = fe(t, ai)
                                return (
                                    (e = 'function' == typeof e ? e : void 0) && n.pop(),
                                    n.length && n[0] === t[0] ? mr(n, void 0, e) : []
                                )
                            })
                        function Na(t) {
                            var e = null == t ? 0 : t.length
                            return e ? t[e - 1] : void 0
                        }
                        var Ba = Nr(Wa)
                        function Wa(t, e) {
                            return t && t.length && e && e.length ? Or(t, e) : t
                        }
                        var ja = qi(function(t, e) {
                            var n = null == t ? 0 : t.length,
                                r = Gn(t, e)
                            return (
                                zr(
                                    t,
                                    fe(e, function(t) {
                                        return oa(t, n) ? +t : t
                                    }).sort(gi)
                                ),
                                r
                            )
                        })
                        function Va(t) {
                            return null == t ? t : hn.call(t)
                        }
                        var Ha = Nr(function(t) {
                                return Jr(ar(t, 1, Ro, !0))
                            }),
                            qa = Nr(function(t) {
                                var e = Na(t)
                                return Ro(e) && (e = void 0), Jr(ar(t, 1, Ro, !0), Zi(e, 2))
                            }),
                            Ua = Nr(function(t) {
                                var e = Na(t)
                                return (e = 'function' == typeof e ? e : void 0), Jr(ar(t, 1, Ro, !0), void 0, e)
                            })
                        function $a(t) {
                            if (!t || !t.length) return []
                            var e = 0
                            return (
                                (t = ce(t, function(t) {
                                    if (Ro(t)) return (e = on(t.length, e)), !0
                                })),
                                De(e, function(e) {
                                    return fe(t, Se(e))
                                })
                            )
                        }
                        function Ya(t, e) {
                            if (!t || !t.length) return []
                            var n = $a(t)
                            return null == e
                                ? n
                                : fe(n, function(t) {
                                      return ae(e, void 0, t)
                                  })
                        }
                        var Ga = Nr(function(t, e) {
                                return Ro(t) ? Qn(t, e) : []
                            }),
                            Ka = Nr(function(t) {
                                return ri(ce(t, Ro))
                            }),
                            Za = Nr(function(t) {
                                var e = Na(t)
                                return Ro(e) && (e = void 0), ri(ce(t, Ro), Zi(e, 2))
                            }),
                            Xa = Nr(function(t) {
                                var e = Na(t)
                                return (e = 'function' == typeof e ? e : void 0), ri(ce(t, Ro), void 0, e)
                            }),
                            Ja = Nr($a)
                        var Qa = Nr(function(t) {
                            var e = t.length,
                                n = e > 1 ? t[e - 1] : void 0
                            return (n = 'function' == typeof n ? (t.pop(), n) : void 0), Ya(t, n)
                        })
                        function to(t) {
                            var e = Pn(t)
                            return (e.__chain__ = !0), e
                        }
                        function eo(t, e) {
                            return e(t)
                        }
                        var no = qi(function(t) {
                            var e = t.length,
                                n = e ? t[0] : 0,
                                r = this.__wrapped__,
                                i = function(e) {
                                    return Gn(e, t)
                                }
                            return !(e > 1 || this.__actions__.length) && r instanceof Ln && oa(n)
                                ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                                      func: eo,
                                      args: [i],
                                      thisArg: void 0,
                                  }),
                                  new Tn(r, this.__chain__).thru(function(t) {
                                      return e && !t.length && t.push(void 0), t
                                  }))
                                : this.thru(i)
                        })
                        var ro = yi(function(t, e, n) {
                            Mt.call(t, n) ? ++t[n] : Yn(t, n, 1)
                        })
                        var io = Ci(Ta),
                            ao = Ci(La)
                        function oo(t, e) {
                            return (Fo(t) ? se : tr)(t, Zi(e, 3))
                        }
                        function so(t, e) {
                            return (Fo(t) ? le : er)(t, Zi(e, 3))
                        }
                        var lo = yi(function(t, e, n) {
                            Mt.call(t, n) ? t[n].push(e) : Yn(t, n, [e])
                        })
                        var uo = Nr(function(t, e, n) {
                                var i = -1,
                                    a = 'function' == typeof e,
                                    o = zo(t) ? r(t.length) : []
                                return (
                                    tr(t, function(t) {
                                        o[++i] = a ? ae(e, t, n) : br(t, e, n)
                                    }),
                                    o
                                )
                            }),
                            co = yi(function(t, e, n) {
                                Yn(t, n, e)
                            })
                        function ho(t, e) {
                            return (Fo(t) ? fe : Ar)(t, Zi(e, 3))
                        }
                        var fo = yi(
                            function(t, e, n) {
                                t[n ? 0 : 1].push(e)
                            },
                            function() {
                                return [[], []]
                            }
                        )
                        var go = Nr(function(t, e) {
                                if (null == t) return []
                                var n = e.length
                                return (
                                    n > 1 && sa(t, e[0], e[1])
                                        ? (e = [])
                                        : n > 2 && sa(e[0], e[1], e[2]) && (e = [e[0]]),
                                    Lr(t, ar(e, 1), [])
                                )
                            }),
                            po =
                                Ze ||
                                function() {
                                    return Yt.Date.now()
                                }
                        function vo(t, e, n) {
                            return (
                                (e = n ? void 0 : e),
                                Bi(t, 128, void 0, void 0, void 0, void 0, (e = t && null == e ? t.length : e))
                            )
                        }
                        function mo(t, e) {
                            var n
                            if ('function' != typeof e) throw new bt(a)
                            return (
                                (t = rs(t)),
                                function() {
                                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
                                }
                            )
                        }
                        var bo = Nr(function(t, e, n) {
                                var r = 1
                                if (n.length) {
                                    var i = Ve(n, Ki(bo))
                                    r |= 32
                                }
                                return Bi(t, r, e, n, i)
                            }),
                            yo = Nr(function(t, e, n) {
                                var r = 3
                                if (n.length) {
                                    var i = Ve(n, Ki(yo))
                                    r |= 32
                                }
                                return Bi(e, r, t, n, i)
                            })
                        function xo(t, e, n) {
                            var r,
                                i,
                                o,
                                s,
                                l,
                                u,
                                c = 0,
                                h = !1,
                                d = !1,
                                f = !0
                            if ('function' != typeof t) throw new bt(a)
                            function g(e) {
                                var n = r,
                                    a = i
                                return (r = i = void 0), (c = e), (s = t.apply(a, n))
                            }
                            function p(t) {
                                return (c = t), (l = ya(m, e)), h ? g(t) : s
                            }
                            function v(t) {
                                var n = t - u
                                return void 0 === u || n >= e || n < 0 || (d && t - c >= o)
                            }
                            function m() {
                                var t = po()
                                if (v(t)) return b(t)
                                l = ya(
                                    m,
                                    (function(t) {
                                        var n = e - (t - u)
                                        return d ? sn(n, o - (t - c)) : n
                                    })(t)
                                )
                            }
                            function b(t) {
                                return (l = void 0), f && r ? g(t) : ((r = i = void 0), s)
                            }
                            function y() {
                                var t = po(),
                                    n = v(t)
                                if (((r = arguments), (i = this), (u = t), n)) {
                                    if (void 0 === l) return p(u)
                                    if (d) return ci(l), (l = ya(m, e)), g(u)
                                }
                                return void 0 === l && (l = ya(m, e)), s
                            }
                            return (
                                (e = as(e) || 0),
                                Ho(n) &&
                                    ((h = !!n.leading),
                                    (o = (d = 'maxWait' in n) ? on(as(n.maxWait) || 0, e) : o),
                                    (f = 'trailing' in n ? !!n.trailing : f)),
                                (y.cancel = function() {
                                    void 0 !== l && ci(l), (c = 0), (r = u = i = l = void 0)
                                }),
                                (y.flush = function() {
                                    return void 0 === l ? s : b(po())
                                }),
                                y
                            )
                        }
                        var _o = Nr(function(t, e) {
                                return Jn(t, 1, e)
                            }),
                            wo = Nr(function(t, e, n) {
                                return Jn(t, as(e) || 0, n)
                            })
                        function ko(t, e) {
                            if ('function' != typeof t || (null != e && 'function' != typeof e)) throw new bt(a)
                            var n = function() {
                                var r = arguments,
                                    i = e ? e.apply(this, r) : r[0],
                                    a = n.cache
                                if (a.has(i)) return a.get(i)
                                var o = t.apply(this, r)
                                return (n.cache = a.set(i, o) || a), o
                            }
                            return (n.cache = new (ko.Cache || zn)()), n
                        }
                        function Mo(t) {
                            if ('function' != typeof t) throw new bt(a)
                            return function() {
                                var e = arguments
                                switch (e.length) {
                                    case 0:
                                        return !t.call(this)
                                    case 1:
                                        return !t.call(this, e[0])
                                    case 2:
                                        return !t.call(this, e[0], e[1])
                                    case 3:
                                        return !t.call(this, e[0], e[1], e[2])
                                }
                                return !t.apply(this, e)
                            }
                        }
                        ko.Cache = zn
                        var So = li(function(t, e) {
                                var n = (e = 1 == e.length && Fo(e[0]) ? fe(e[0], Ie(Zi())) : fe(ar(e, 1), Ie(Zi())))
                                    .length
                                return Nr(function(r) {
                                    for (var i = -1, a = sn(r.length, n); ++i < a; ) r[i] = e[i].call(this, r[i])
                                    return ae(t, this, r)
                                })
                            }),
                            Co = Nr(function(t, e) {
                                return Bi(t, 32, void 0, e, Ve(e, Ki(Co)))
                            }),
                            Ao = Nr(function(t, e) {
                                return Bi(t, 64, void 0, e, Ve(e, Ki(Ao)))
                            }),
                            Po = qi(function(t, e) {
                                return Bi(t, 256, void 0, void 0, void 0, e)
                            })
                        function Do(t, e) {
                            return t === e || (t != t && e != e)
                        }
                        var Io = Oi(gr),
                            To = Oi(function(t, e) {
                                return t >= e
                            }),
                            Lo = yr(
                                (function() {
                                    return arguments
                                })()
                            )
                                ? yr
                                : function(t) {
                                      return qo(t) && Mt.call(t, 'callee') && !Gt.call(t, 'callee')
                                  },
                            Fo = r.isArray,
                            Oo = Qt
                                ? Ie(Qt)
                                : function(t) {
                                      return qo(t) && fr(t) == k
                                  }
                        function zo(t) {
                            return null != t && Vo(t.length) && !Wo(t)
                        }
                        function Ro(t) {
                            return qo(t) && zo(t)
                        }
                        var Eo = en || al,
                            No = te
                                ? Ie(te)
                                : function(t) {
                                      return qo(t) && fr(t) == h
                                  }
                        function Bo(t) {
                            if (!qo(t)) return !1
                            var e = fr(t)
                            return (
                                e == d ||
                                '[object DOMException]' == e ||
                                ('string' == typeof t.message && 'string' == typeof t.name && !Yo(t))
                            )
                        }
                        function Wo(t) {
                            if (!Ho(t)) return !1
                            var e = fr(t)
                            return e == f || e == g || '[object AsyncFunction]' == e || '[object Proxy]' == e
                        }
                        function jo(t) {
                            return 'number' == typeof t && t == rs(t)
                        }
                        function Vo(t) {
                            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                        }
                        function Ho(t) {
                            var e = typeof t
                            return null != t && ('object' == e || 'function' == e)
                        }
                        function qo(t) {
                            return null != t && 'object' == typeof t
                        }
                        var Uo = ee
                            ? Ie(ee)
                            : function(t) {
                                  return qo(t) && na(t) == p
                              }
                        function $o(t) {
                            return 'number' == typeof t || (qo(t) && fr(t) == v)
                        }
                        function Yo(t) {
                            if (!qo(t) || fr(t) != m) return !1
                            var e = Ut(t)
                            if (null === e) return !0
                            var n = Mt.call(e, 'constructor') && e.constructor
                            return 'function' == typeof n && n instanceof n && kt.call(n) == Pt
                        }
                        var Go = ne
                            ? Ie(ne)
                            : function(t) {
                                  return qo(t) && fr(t) == b
                              }
                        var Ko = re
                            ? Ie(re)
                            : function(t) {
                                  return qo(t) && na(t) == y
                              }
                        function Zo(t) {
                            return 'string' == typeof t || (!Fo(t) && qo(t) && fr(t) == x)
                        }
                        function Xo(t) {
                            return 'symbol' == typeof t || (qo(t) && fr(t) == _)
                        }
                        var Jo = ie
                            ? Ie(ie)
                            : function(t) {
                                  return qo(t) && Vo(t.length) && !!Wt[fr(t)]
                              }
                        var Qo = Oi(Cr),
                            ts = Oi(function(t, e) {
                                return t <= e
                            })
                        function es(t) {
                            if (!t) return []
                            if (zo(t)) return Zo(t) ? $e(t) : mi(t)
                            if (Jt && t[Jt])
                                return (function(t) {
                                    for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
                                    return n
                                })(t[Jt]())
                            var e = na(t)
                            return (e == p ? We : e == y ? He : Ds)(t)
                        }
                        function ns(t) {
                            return t
                                ? (t = as(t)) === 1 / 0 || t === -1 / 0
                                    ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                                    : t == t
                                    ? t
                                    : 0
                                : 0 === t
                                ? t
                                : 0
                        }
                        function rs(t) {
                            var e = ns(t),
                                n = e % 1
                            return e == e ? (n ? e - n : e) : 0
                        }
                        function is(t) {
                            return t ? Kn(rs(t), 0, 4294967295) : 0
                        }
                        function as(t) {
                            if ('number' == typeof t) return t
                            if (Xo(t)) return NaN
                            if (Ho(t)) {
                                var e = 'function' == typeof t.valueOf ? t.valueOf() : t
                                t = Ho(e) ? e + '' : e
                            }
                            if ('string' != typeof t) return 0 === t ? t : +t
                            t = t.replace(G, '')
                            var n = at.test(t)
                            return n || st.test(t) ? qt(t.slice(2), n ? 2 : 8) : it.test(t) ? NaN : +t
                        }
                        function os(t) {
                            return bi(t, _s(t))
                        }
                        function ss(t) {
                            return null == t ? '' : Xr(t)
                        }
                        var ls = xi(function(t, e) {
                                if (ha(e) || zo(e)) bi(e, xs(e), t)
                                else for (var n in e) Mt.call(e, n) && Hn(t, n, e[n])
                            }),
                            us = xi(function(t, e) {
                                bi(e, _s(e), t)
                            }),
                            cs = xi(function(t, e, n, r) {
                                bi(e, _s(e), t, r)
                            }),
                            hs = xi(function(t, e, n, r) {
                                bi(e, xs(e), t, r)
                            }),
                            ds = qi(Gn)
                        var fs = Nr(function(t, e) {
                                t = pt(t)
                                var n = -1,
                                    r = e.length,
                                    i = r > 2 ? e[2] : void 0
                                for (i && sa(e[0], e[1], i) && (r = 1); ++n < r; )
                                    for (var a = e[n], o = _s(a), s = -1, l = o.length; ++s < l; ) {
                                        var u = o[s],
                                            c = t[u]
                                        ;(void 0 === c || (Do(c, _t[u]) && !Mt.call(t, u))) && (t[u] = a[u])
                                    }
                                return t
                            }),
                            gs = Nr(function(t) {
                                return t.push(void 0, ji), ae(ks, void 0, t)
                            })
                        function ps(t, e, n) {
                            var r = null == t ? void 0 : hr(t, e)
                            return void 0 === r ? n : r
                        }
                        function vs(t, e) {
                            return null != t && ra(t, e, vr)
                        }
                        var ms = Di(function(t, e, n) {
                                null != e && 'function' != typeof e.toString && (e = At.call(e)), (t[e] = n)
                            }, Hs($s)),
                            bs = Di(function(t, e, n) {
                                null != e && 'function' != typeof e.toString && (e = At.call(e)),
                                    Mt.call(t, e) ? t[e].push(n) : (t[e] = [n])
                            }, Zi),
                            ys = Nr(br)
                        function xs(t) {
                            return zo(t) ? Nn(t) : Mr(t)
                        }
                        function _s(t) {
                            return zo(t) ? Nn(t, !0) : Sr(t)
                        }
                        var ws = xi(function(t, e, n) {
                                Ir(t, e, n)
                            }),
                            ks = xi(function(t, e, n, r) {
                                Ir(t, e, n, r)
                            }),
                            Ms = qi(function(t, e) {
                                var n = {}
                                if (null == t) return n
                                var r = !1
                                ;(e = fe(e, function(e) {
                                    return (e = si(e, t)), r || (r = e.length > 1), e
                                })),
                                    bi(t, $i(t), n),
                                    r && (n = Zn(n, 7, Vi))
                                for (var i = e.length; i--; ) Qr(n, e[i])
                                return n
                            })
                        var Ss = qi(function(t, e) {
                            return null == t
                                ? {}
                                : (function(t, e) {
                                      return Fr(t, e, function(e, n) {
                                          return vs(t, n)
                                      })
                                  })(t, e)
                        })
                        function Cs(t, e) {
                            if (null == t) return {}
                            var n = fe($i(t), function(t) {
                                return [t]
                            })
                            return (
                                (e = Zi(e)),
                                Fr(t, n, function(t, n) {
                                    return e(t, n[0])
                                })
                            )
                        }
                        var As = Ni(xs),
                            Ps = Ni(_s)
                        function Ds(t) {
                            return null == t ? [] : Te(t, xs(t))
                        }
                        var Is = Mi(function(t, e, n) {
                            return (e = e.toLowerCase()), t + (n ? Ts(e) : e)
                        })
                        function Ts(t) {
                            return Bs(ss(t).toLowerCase())
                        }
                        function Ls(t) {
                            return (t = ss(t)) && t.replace(ut, Re).replace(Ft, '')
                        }
                        var Fs = Mi(function(t, e, n) {
                                return t + (n ? '-' : '') + e.toLowerCase()
                            }),
                            Os = Mi(function(t, e, n) {
                                return t + (n ? ' ' : '') + e.toLowerCase()
                            }),
                            zs = ki('toLowerCase')
                        var Rs = Mi(function(t, e, n) {
                            return t + (n ? '_' : '') + e.toLowerCase()
                        })
                        var Es = Mi(function(t, e, n) {
                            return t + (n ? ' ' : '') + Bs(e)
                        })
                        var Ns = Mi(function(t, e, n) {
                                return t + (n ? ' ' : '') + e.toUpperCase()
                            }),
                            Bs = ki('toUpperCase')
                        function Ws(t, e, n) {
                            return (
                                (t = ss(t)),
                                void 0 === (e = n ? void 0 : e)
                                    ? (function(t) {
                                          return Et.test(t)
                                      })(t)
                                        ? (function(t) {
                                              return t.match(zt) || []
                                          })(t)
                                        : (function(t) {
                                              return t.match(tt) || []
                                          })(t)
                                    : t.match(e) || []
                            )
                        }
                        var js = Nr(function(t, e) {
                                try {
                                    return ae(t, void 0, e)
                                } catch (t) {
                                    return Bo(t) ? t : new dt(t)
                                }
                            }),
                            Vs = qi(function(t, e) {
                                return (
                                    se(e, function(e) {
                                        ;(e = Sa(e)), Yn(t, e, bo(t[e], t))
                                    }),
                                    t
                                )
                            })
                        function Hs(t) {
                            return function() {
                                return t
                            }
                        }
                        var qs = Ai(),
                            Us = Ai(!0)
                        function $s(t) {
                            return t
                        }
                        function Ys(t) {
                            return kr('function' == typeof t ? t : Zn(t, 1))
                        }
                        var Gs = Nr(function(t, e) {
                                return function(n) {
                                    return br(n, t, e)
                                }
                            }),
                            Ks = Nr(function(t, e) {
                                return function(n) {
                                    return br(t, n, e)
                                }
                            })
                        function Zs(t, e, n) {
                            var r = xs(e),
                                i = cr(e, r)
                            null != n ||
                                (Ho(e) && (i.length || !r.length)) ||
                                ((n = e), (e = t), (t = this), (i = cr(e, xs(e))))
                            var a = !(Ho(n) && 'chain' in n && !n.chain),
                                o = Wo(t)
                            return (
                                se(i, function(n) {
                                    var r = e[n]
                                    ;(t[n] = r),
                                        o &&
                                            (t.prototype[n] = function() {
                                                var e = this.__chain__
                                                if (a || e) {
                                                    var n = t(this.__wrapped__),
                                                        i = (n.__actions__ = mi(this.__actions__))
                                                    return (
                                                        i.push({ func: r, args: arguments, thisArg: t }),
                                                        (n.__chain__ = e),
                                                        n
                                                    )
                                                }
                                                return r.apply(t, ge([this.value()], arguments))
                                            })
                                }),
                                t
                            )
                        }
                        function Xs() {}
                        var Js = Ti(fe),
                            Qs = Ti(ue),
                            tl = Ti(me)
                        function el(t) {
                            return la(t)
                                ? Se(Sa(t))
                                : (function(t) {
                                      return function(e) {
                                          return hr(e, t)
                                      }
                                  })(t)
                        }
                        var nl = Fi(),
                            rl = Fi(!0)
                        function il() {
                            return []
                        }
                        function al() {
                            return !1
                        }
                        var ol = Ii(function(t, e) {
                                return t + e
                            }, 0),
                            sl = Ri('ceil'),
                            ll = Ii(function(t, e) {
                                return t / e
                            }, 1),
                            ul = Ri('floor')
                        var cl,
                            hl = Ii(function(t, e) {
                                return t * e
                            }, 1),
                            dl = Ri('round'),
                            fl = Ii(function(t, e) {
                                return t - e
                            }, 0)
                        return (
                            (Pn.after = function(t, e) {
                                if ('function' != typeof e) throw new bt(a)
                                return (
                                    (t = rs(t)),
                                    function() {
                                        if (--t < 1) return e.apply(this, arguments)
                                    }
                                )
                            }),
                            (Pn.ary = vo),
                            (Pn.assign = ls),
                            (Pn.assignIn = us),
                            (Pn.assignInWith = cs),
                            (Pn.assignWith = hs),
                            (Pn.at = ds),
                            (Pn.before = mo),
                            (Pn.bind = bo),
                            (Pn.bindAll = Vs),
                            (Pn.bindKey = yo),
                            (Pn.castArray = function() {
                                if (!arguments.length) return []
                                var t = arguments[0]
                                return Fo(t) ? t : [t]
                            }),
                            (Pn.chain = to),
                            (Pn.chunk = function(t, e, n) {
                                e = (n ? sa(t, e, n) : void 0 === e) ? 1 : on(rs(e), 0)
                                var i = null == t ? 0 : t.length
                                if (!i || e < 1) return []
                                for (var a = 0, o = 0, s = r(Je(i / e)); a < i; ) s[o++] = Ur(t, a, (a += e))
                                return s
                            }),
                            (Pn.compact = function(t) {
                                for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n; ) {
                                    var a = t[e]
                                    a && (i[r++] = a)
                                }
                                return i
                            }),
                            (Pn.concat = function() {
                                var t = arguments.length
                                if (!t) return []
                                for (var e = r(t - 1), n = arguments[0], i = t; i--; ) e[i - 1] = arguments[i]
                                return ge(Fo(n) ? mi(n) : [n], ar(e, 1))
                            }),
                            (Pn.cond = function(t) {
                                var e = null == t ? 0 : t.length,
                                    n = Zi()
                                return (
                                    (t = e
                                        ? fe(t, function(t) {
                                              if ('function' != typeof t[1]) throw new bt(a)
                                              return [n(t[0]), t[1]]
                                          })
                                        : []),
                                    Nr(function(n) {
                                        for (var r = -1; ++r < e; ) {
                                            var i = t[r]
                                            if (ae(i[0], this, n)) return ae(i[1], this, n)
                                        }
                                    })
                                )
                            }),
                            (Pn.conforms = function(t) {
                                return (function(t) {
                                    var e = xs(t)
                                    return function(n) {
                                        return Xn(n, t, e)
                                    }
                                })(Zn(t, 1))
                            }),
                            (Pn.constant = Hs),
                            (Pn.countBy = ro),
                            (Pn.create = function(t, e) {
                                var n = Dn(t)
                                return null == e ? n : $n(n, e)
                            }),
                            (Pn.curry = function t(e, n, r) {
                                var i = Bi(e, 8, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n))
                                return (i.placeholder = t.placeholder), i
                            }),
                            (Pn.curryRight = function t(e, n, r) {
                                var i = Bi(e, 16, void 0, void 0, void 0, void 0, void 0, (n = r ? void 0 : n))
                                return (i.placeholder = t.placeholder), i
                            }),
                            (Pn.debounce = xo),
                            (Pn.defaults = fs),
                            (Pn.defaultsDeep = gs),
                            (Pn.defer = _o),
                            (Pn.delay = wo),
                            (Pn.difference = Pa),
                            (Pn.differenceBy = Da),
                            (Pn.differenceWith = Ia),
                            (Pn.drop = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                return r ? Ur(t, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e, r) : []
                            }),
                            (Pn.dropRight = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                return r ? Ur(t, 0, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e) : []
                            }),
                            (Pn.dropRightWhile = function(t, e) {
                                return t && t.length ? ei(t, Zi(e, 3), !0, !0) : []
                            }),
                            (Pn.dropWhile = function(t, e) {
                                return t && t.length ? ei(t, Zi(e, 3), !0) : []
                            }),
                            (Pn.fill = function(t, e, n, r) {
                                var i = null == t ? 0 : t.length
                                return i
                                    ? (n && 'number' != typeof n && sa(t, e, n) && ((n = 0), (r = i)),
                                      (function(t, e, n, r) {
                                          var i = t.length
                                          for (
                                              (n = rs(n)) < 0 && (n = -n > i ? 0 : i + n),
                                                  (r = void 0 === r || r > i ? i : rs(r)) < 0 && (r += i),
                                                  r = n > r ? 0 : is(r);
                                              n < r;

                                          )
                                              t[n++] = e
                                          return t
                                      })(t, e, n, r))
                                    : []
                            }),
                            (Pn.filter = function(t, e) {
                                return (Fo(t) ? ce : ir)(t, Zi(e, 3))
                            }),
                            (Pn.flatMap = function(t, e) {
                                return ar(ho(t, e), 1)
                            }),
                            (Pn.flatMapDeep = function(t, e) {
                                return ar(ho(t, e), 1 / 0)
                            }),
                            (Pn.flatMapDepth = function(t, e, n) {
                                return (n = void 0 === n ? 1 : rs(n)), ar(ho(t, e), n)
                            }),
                            (Pn.flatten = Fa),
                            (Pn.flattenDeep = function(t) {
                                return (null == t ? 0 : t.length) ? ar(t, 1 / 0) : []
                            }),
                            (Pn.flattenDepth = function(t, e) {
                                return (null == t ? 0 : t.length) ? ar(t, (e = void 0 === e ? 1 : rs(e))) : []
                            }),
                            (Pn.flip = function(t) {
                                return Bi(t, 512)
                            }),
                            (Pn.flow = qs),
                            (Pn.flowRight = Us),
                            (Pn.fromPairs = function(t) {
                                for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
                                    var i = t[e]
                                    r[i[0]] = i[1]
                                }
                                return r
                            }),
                            (Pn.functions = function(t) {
                                return null == t ? [] : cr(t, xs(t))
                            }),
                            (Pn.functionsIn = function(t) {
                                return null == t ? [] : cr(t, _s(t))
                            }),
                            (Pn.groupBy = lo),
                            (Pn.initial = function(t) {
                                return (null == t ? 0 : t.length) ? Ur(t, 0, -1) : []
                            }),
                            (Pn.intersection = za),
                            (Pn.intersectionBy = Ra),
                            (Pn.intersectionWith = Ea),
                            (Pn.invert = ms),
                            (Pn.invertBy = bs),
                            (Pn.invokeMap = uo),
                            (Pn.iteratee = Ys),
                            (Pn.keyBy = co),
                            (Pn.keys = xs),
                            (Pn.keysIn = _s),
                            (Pn.map = ho),
                            (Pn.mapKeys = function(t, e) {
                                var n = {}
                                return (
                                    (e = Zi(e, 3)),
                                    lr(t, function(t, r, i) {
                                        Yn(n, e(t, r, i), t)
                                    }),
                                    n
                                )
                            }),
                            (Pn.mapValues = function(t, e) {
                                var n = {}
                                return (
                                    (e = Zi(e, 3)),
                                    lr(t, function(t, r, i) {
                                        Yn(n, r, e(t, r, i))
                                    }),
                                    n
                                )
                            }),
                            (Pn.matches = function(t) {
                                return Pr(Zn(t, 1))
                            }),
                            (Pn.matchesProperty = function(t, e) {
                                return Dr(t, Zn(e, 1))
                            }),
                            (Pn.memoize = ko),
                            (Pn.merge = ws),
                            (Pn.mergeWith = ks),
                            (Pn.method = Gs),
                            (Pn.methodOf = Ks),
                            (Pn.mixin = Zs),
                            (Pn.negate = Mo),
                            (Pn.nthArg = function(t) {
                                return (
                                    (t = rs(t)),
                                    Nr(function(e) {
                                        return Tr(e, t)
                                    })
                                )
                            }),
                            (Pn.omit = Ms),
                            (Pn.omitBy = function(t, e) {
                                return Cs(t, Mo(Zi(e)))
                            }),
                            (Pn.once = function(t) {
                                return mo(2, t)
                            }),
                            (Pn.orderBy = function(t, e, n, r) {
                                return null == t
                                    ? []
                                    : (Fo(e) || (e = null == e ? [] : [e]),
                                      Fo((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
                                      Lr(t, e, n))
                            }),
                            (Pn.over = Js),
                            (Pn.overArgs = So),
                            (Pn.overEvery = Qs),
                            (Pn.overSome = tl),
                            (Pn.partial = Co),
                            (Pn.partialRight = Ao),
                            (Pn.partition = fo),
                            (Pn.pick = Ss),
                            (Pn.pickBy = Cs),
                            (Pn.property = el),
                            (Pn.propertyOf = function(t) {
                                return function(e) {
                                    return null == t ? void 0 : hr(t, e)
                                }
                            }),
                            (Pn.pull = Ba),
                            (Pn.pullAll = Wa),
                            (Pn.pullAllBy = function(t, e, n) {
                                return t && t.length && e && e.length ? Or(t, e, Zi(n, 2)) : t
                            }),
                            (Pn.pullAllWith = function(t, e, n) {
                                return t && t.length && e && e.length ? Or(t, e, void 0, n) : t
                            }),
                            (Pn.pullAt = ja),
                            (Pn.range = nl),
                            (Pn.rangeRight = rl),
                            (Pn.rearg = Po),
                            (Pn.reject = function(t, e) {
                                return (Fo(t) ? ce : ir)(t, Mo(Zi(e, 3)))
                            }),
                            (Pn.remove = function(t, e) {
                                var n = []
                                if (!t || !t.length) return n
                                var r = -1,
                                    i = [],
                                    a = t.length
                                for (e = Zi(e, 3); ++r < a; ) {
                                    var o = t[r]
                                    e(o, r, t) && (n.push(o), i.push(r))
                                }
                                return zr(t, i), n
                            }),
                            (Pn.rest = function(t, e) {
                                if ('function' != typeof t) throw new bt(a)
                                return Nr(t, (e = void 0 === e ? e : rs(e)))
                            }),
                            (Pn.reverse = Va),
                            (Pn.sampleSize = function(t, e, n) {
                                return (e = (n ? sa(t, e, n) : void 0 === e) ? 1 : rs(e)), (Fo(t) ? Wn : Wr)(t, e)
                            }),
                            (Pn.set = function(t, e, n) {
                                return null == t ? t : jr(t, e, n)
                            }),
                            (Pn.setWith = function(t, e, n, r) {
                                return (r = 'function' == typeof r ? r : void 0), null == t ? t : jr(t, e, n, r)
                            }),
                            (Pn.shuffle = function(t) {
                                return (Fo(t) ? jn : qr)(t)
                            }),
                            (Pn.slice = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                return r
                                    ? (n && 'number' != typeof n && sa(t, e, n)
                                          ? ((e = 0), (n = r))
                                          : ((e = null == e ? 0 : rs(e)), (n = void 0 === n ? r : rs(n))),
                                      Ur(t, e, n))
                                    : []
                            }),
                            (Pn.sortBy = go),
                            (Pn.sortedUniq = function(t) {
                                return t && t.length ? Kr(t) : []
                            }),
                            (Pn.sortedUniqBy = function(t, e) {
                                return t && t.length ? Kr(t, Zi(e, 2)) : []
                            }),
                            (Pn.split = function(t, e, n) {
                                return (
                                    n && 'number' != typeof n && sa(t, e, n) && (e = n = void 0),
                                    (n = void 0 === n ? 4294967295 : n >>> 0)
                                        ? (t = ss(t)) &&
                                          ('string' == typeof e || (null != e && !Go(e))) &&
                                          !(e = Xr(e)) &&
                                          Be(t)
                                            ? ui($e(t), 0, n)
                                            : t.split(e, n)
                                        : []
                                )
                            }),
                            (Pn.spread = function(t, e) {
                                if ('function' != typeof t) throw new bt(a)
                                return (
                                    (e = null == e ? 0 : on(rs(e), 0)),
                                    Nr(function(n) {
                                        var r = n[e],
                                            i = ui(n, 0, e)
                                        return r && ge(i, r), ae(t, this, i)
                                    })
                                )
                            }),
                            (Pn.tail = function(t) {
                                var e = null == t ? 0 : t.length
                                return e ? Ur(t, 1, e) : []
                            }),
                            (Pn.take = function(t, e, n) {
                                return t && t.length ? Ur(t, 0, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e) : []
                            }),
                            (Pn.takeRight = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                return r ? Ur(t, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e, r) : []
                            }),
                            (Pn.takeRightWhile = function(t, e) {
                                return t && t.length ? ei(t, Zi(e, 3), !1, !0) : []
                            }),
                            (Pn.takeWhile = function(t, e) {
                                return t && t.length ? ei(t, Zi(e, 3)) : []
                            }),
                            (Pn.tap = function(t, e) {
                                return e(t), t
                            }),
                            (Pn.throttle = function(t, e, n) {
                                var r = !0,
                                    i = !0
                                if ('function' != typeof t) throw new bt(a)
                                return (
                                    Ho(n) &&
                                        ((r = 'leading' in n ? !!n.leading : r),
                                        (i = 'trailing' in n ? !!n.trailing : i)),
                                    xo(t, e, { leading: r, maxWait: e, trailing: i })
                                )
                            }),
                            (Pn.thru = eo),
                            (Pn.toArray = es),
                            (Pn.toPairs = As),
                            (Pn.toPairsIn = Ps),
                            (Pn.toPath = function(t) {
                                return Fo(t) ? fe(t, Sa) : Xo(t) ? [t] : mi(Ma(ss(t)))
                            }),
                            (Pn.toPlainObject = os),
                            (Pn.transform = function(t, e, n) {
                                var r = Fo(t),
                                    i = r || Eo(t) || Jo(t)
                                if (((e = Zi(e, 4)), null == n)) {
                                    var a = t && t.constructor
                                    n = i ? (r ? new a() : []) : Ho(t) && Wo(a) ? Dn(Ut(t)) : {}
                                }
                                return (
                                    (i ? se : lr)(t, function(t, r, i) {
                                        return e(n, t, r, i)
                                    }),
                                    n
                                )
                            }),
                            (Pn.unary = function(t) {
                                return vo(t, 1)
                            }),
                            (Pn.union = Ha),
                            (Pn.unionBy = qa),
                            (Pn.unionWith = Ua),
                            (Pn.uniq = function(t) {
                                return t && t.length ? Jr(t) : []
                            }),
                            (Pn.uniqBy = function(t, e) {
                                return t && t.length ? Jr(t, Zi(e, 2)) : []
                            }),
                            (Pn.uniqWith = function(t, e) {
                                return (e = 'function' == typeof e ? e : void 0), t && t.length ? Jr(t, void 0, e) : []
                            }),
                            (Pn.unset = function(t, e) {
                                return null == t || Qr(t, e)
                            }),
                            (Pn.unzip = $a),
                            (Pn.unzipWith = Ya),
                            (Pn.update = function(t, e, n) {
                                return null == t ? t : ti(t, e, oi(n))
                            }),
                            (Pn.updateWith = function(t, e, n, r) {
                                return (r = 'function' == typeof r ? r : void 0), null == t ? t : ti(t, e, oi(n), r)
                            }),
                            (Pn.values = Ds),
                            (Pn.valuesIn = function(t) {
                                return null == t ? [] : Te(t, _s(t))
                            }),
                            (Pn.without = Ga),
                            (Pn.words = Ws),
                            (Pn.wrap = function(t, e) {
                                return Co(oi(e), t)
                            }),
                            (Pn.xor = Ka),
                            (Pn.xorBy = Za),
                            (Pn.xorWith = Xa),
                            (Pn.zip = Ja),
                            (Pn.zipObject = function(t, e) {
                                return ii(t || [], e || [], Hn)
                            }),
                            (Pn.zipObjectDeep = function(t, e) {
                                return ii(t || [], e || [], jr)
                            }),
                            (Pn.zipWith = Qa),
                            (Pn.entries = As),
                            (Pn.entriesIn = Ps),
                            (Pn.extend = us),
                            (Pn.extendWith = cs),
                            Zs(Pn, Pn),
                            (Pn.add = ol),
                            (Pn.attempt = js),
                            (Pn.camelCase = Is),
                            (Pn.capitalize = Ts),
                            (Pn.ceil = sl),
                            (Pn.clamp = function(t, e, n) {
                                return (
                                    void 0 === n && ((n = e), (e = void 0)),
                                    void 0 !== n && (n = (n = as(n)) == n ? n : 0),
                                    void 0 !== e && (e = (e = as(e)) == e ? e : 0),
                                    Kn(as(t), e, n)
                                )
                            }),
                            (Pn.clone = function(t) {
                                return Zn(t, 4)
                            }),
                            (Pn.cloneDeep = function(t) {
                                return Zn(t, 5)
                            }),
                            (Pn.cloneDeepWith = function(t, e) {
                                return Zn(t, 5, (e = 'function' == typeof e ? e : void 0))
                            }),
                            (Pn.cloneWith = function(t, e) {
                                return Zn(t, 4, (e = 'function' == typeof e ? e : void 0))
                            }),
                            (Pn.conformsTo = function(t, e) {
                                return null == e || Xn(t, e, xs(e))
                            }),
                            (Pn.deburr = Ls),
                            (Pn.defaultTo = function(t, e) {
                                return null == t || t != t ? e : t
                            }),
                            (Pn.divide = ll),
                            (Pn.endsWith = function(t, e, n) {
                                ;(t = ss(t)), (e = Xr(e))
                                var r = t.length,
                                    i = (n = void 0 === n ? r : Kn(rs(n), 0, r))
                                return (n -= e.length) >= 0 && t.slice(n, i) == e
                            }),
                            (Pn.eq = Do),
                            (Pn.escape = function(t) {
                                return (t = ss(t)) && B.test(t) ? t.replace(E, Ee) : t
                            }),
                            (Pn.escapeRegExp = function(t) {
                                return (t = ss(t)) && Y.test(t) ? t.replace($, '\\$&') : t
                            }),
                            (Pn.every = function(t, e, n) {
                                var r = Fo(t) ? ue : nr
                                return n && sa(t, e, n) && (e = void 0), r(t, Zi(e, 3))
                            }),
                            (Pn.find = io),
                            (Pn.findIndex = Ta),
                            (Pn.findKey = function(t, e) {
                                return ye(t, Zi(e, 3), lr)
                            }),
                            (Pn.findLast = ao),
                            (Pn.findLastIndex = La),
                            (Pn.findLastKey = function(t, e) {
                                return ye(t, Zi(e, 3), ur)
                            }),
                            (Pn.floor = ul),
                            (Pn.forEach = oo),
                            (Pn.forEachRight = so),
                            (Pn.forIn = function(t, e) {
                                return null == t ? t : or(t, Zi(e, 3), _s)
                            }),
                            (Pn.forInRight = function(t, e) {
                                return null == t ? t : sr(t, Zi(e, 3), _s)
                            }),
                            (Pn.forOwn = function(t, e) {
                                return t && lr(t, Zi(e, 3))
                            }),
                            (Pn.forOwnRight = function(t, e) {
                                return t && ur(t, Zi(e, 3))
                            }),
                            (Pn.get = ps),
                            (Pn.gt = Io),
                            (Pn.gte = To),
                            (Pn.has = function(t, e) {
                                return null != t && ra(t, e, pr)
                            }),
                            (Pn.hasIn = vs),
                            (Pn.head = Oa),
                            (Pn.identity = $s),
                            (Pn.includes = function(t, e, n, r) {
                                ;(t = zo(t) ? t : Ds(t)), (n = n && !r ? rs(n) : 0)
                                var i = t.length
                                return (
                                    n < 0 && (n = on(i + n, 0)),
                                    Zo(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && _e(t, e, n) > -1
                                )
                            }),
                            (Pn.indexOf = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                if (!r) return -1
                                var i = null == n ? 0 : rs(n)
                                return i < 0 && (i = on(r + i, 0)), _e(t, e, i)
                            }),
                            (Pn.inRange = function(t, e, n) {
                                return (
                                    (e = ns(e)),
                                    void 0 === n ? ((n = e), (e = 0)) : (n = ns(n)),
                                    (function(t, e, n) {
                                        return t >= sn(e, n) && t < on(e, n)
                                    })((t = as(t)), e, n)
                                )
                            }),
                            (Pn.invoke = ys),
                            (Pn.isArguments = Lo),
                            (Pn.isArray = Fo),
                            (Pn.isArrayBuffer = Oo),
                            (Pn.isArrayLike = zo),
                            (Pn.isArrayLikeObject = Ro),
                            (Pn.isBoolean = function(t) {
                                return !0 === t || !1 === t || (qo(t) && fr(t) == c)
                            }),
                            (Pn.isBuffer = Eo),
                            (Pn.isDate = No),
                            (Pn.isElement = function(t) {
                                return qo(t) && 1 === t.nodeType && !Yo(t)
                            }),
                            (Pn.isEmpty = function(t) {
                                if (null == t) return !0
                                if (
                                    zo(t) &&
                                    (Fo(t) ||
                                        'string' == typeof t ||
                                        'function' == typeof t.splice ||
                                        Eo(t) ||
                                        Jo(t) ||
                                        Lo(t))
                                )
                                    return !t.length
                                var e = na(t)
                                if (e == p || e == y) return !t.size
                                if (ha(t)) return !Mr(t).length
                                for (var n in t) if (Mt.call(t, n)) return !1
                                return !0
                            }),
                            (Pn.isEqual = function(t, e) {
                                return xr(t, e)
                            }),
                            (Pn.isEqualWith = function(t, e, n) {
                                var r = (n = 'function' == typeof n ? n : void 0) ? n(t, e) : void 0
                                return void 0 === r ? xr(t, e, void 0, n) : !!r
                            }),
                            (Pn.isError = Bo),
                            (Pn.isFinite = function(t) {
                                return 'number' == typeof t && nn(t)
                            }),
                            (Pn.isFunction = Wo),
                            (Pn.isInteger = jo),
                            (Pn.isLength = Vo),
                            (Pn.isMap = Uo),
                            (Pn.isMatch = function(t, e) {
                                return t === e || _r(t, e, Ji(e))
                            }),
                            (Pn.isMatchWith = function(t, e, n) {
                                return (n = 'function' == typeof n ? n : void 0), _r(t, e, Ji(e), n)
                            }),
                            (Pn.isNaN = function(t) {
                                return $o(t) && t != +t
                            }),
                            (Pn.isNative = function(t) {
                                if (ca(t))
                                    throw new dt('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.')
                                return wr(t)
                            }),
                            (Pn.isNil = function(t) {
                                return null == t
                            }),
                            (Pn.isNull = function(t) {
                                return null === t
                            }),
                            (Pn.isNumber = $o),
                            (Pn.isObject = Ho),
                            (Pn.isObjectLike = qo),
                            (Pn.isPlainObject = Yo),
                            (Pn.isRegExp = Go),
                            (Pn.isSafeInteger = function(t) {
                                return jo(t) && t >= -9007199254740991 && t <= 9007199254740991
                            }),
                            (Pn.isSet = Ko),
                            (Pn.isString = Zo),
                            (Pn.isSymbol = Xo),
                            (Pn.isTypedArray = Jo),
                            (Pn.isUndefined = function(t) {
                                return void 0 === t
                            }),
                            (Pn.isWeakMap = function(t) {
                                return qo(t) && na(t) == w
                            }),
                            (Pn.isWeakSet = function(t) {
                                return qo(t) && '[object WeakSet]' == fr(t)
                            }),
                            (Pn.join = function(t, e) {
                                return null == t ? '' : rn.call(t, e)
                            }),
                            (Pn.kebabCase = Fs),
                            (Pn.last = Na),
                            (Pn.lastIndexOf = function(t, e, n) {
                                var r = null == t ? 0 : t.length
                                if (!r) return -1
                                var i = r
                                return (
                                    void 0 !== n && (i = (i = rs(n)) < 0 ? on(r + i, 0) : sn(i, r - 1)),
                                    e == e
                                        ? (function(t, e, n) {
                                              for (var r = n + 1; r--; ) if (t[r] === e) return r
                                              return r
                                          })(t, e, i)
                                        : xe(t, ke, i, !0)
                                )
                            }),
                            (Pn.lowerCase = Os),
                            (Pn.lowerFirst = zs),
                            (Pn.lt = Qo),
                            (Pn.lte = ts),
                            (Pn.max = function(t) {
                                return t && t.length ? rr(t, $s, gr) : void 0
                            }),
                            (Pn.maxBy = function(t, e) {
                                return t && t.length ? rr(t, Zi(e, 2), gr) : void 0
                            }),
                            (Pn.mean = function(t) {
                                return Me(t, $s)
                            }),
                            (Pn.meanBy = function(t, e) {
                                return Me(t, Zi(e, 2))
                            }),
                            (Pn.min = function(t) {
                                return t && t.length ? rr(t, $s, Cr) : void 0
                            }),
                            (Pn.minBy = function(t, e) {
                                return t && t.length ? rr(t, Zi(e, 2), Cr) : void 0
                            }),
                            (Pn.stubArray = il),
                            (Pn.stubFalse = al),
                            (Pn.stubObject = function() {
                                return {}
                            }),
                            (Pn.stubString = function() {
                                return ''
                            }),
                            (Pn.stubTrue = function() {
                                return !0
                            }),
                            (Pn.multiply = hl),
                            (Pn.nth = function(t, e) {
                                return t && t.length ? Tr(t, rs(e)) : void 0
                            }),
                            (Pn.noConflict = function() {
                                return Yt._ === this && (Yt._ = Dt), this
                            }),
                            (Pn.noop = Xs),
                            (Pn.now = po),
                            (Pn.pad = function(t, e, n) {
                                t = ss(t)
                                var r = (e = rs(e)) ? Ue(t) : 0
                                if (!e || r >= e) return t
                                var i = (e - r) / 2
                                return Li(Qe(i), n) + t + Li(Je(i), n)
                            }),
                            (Pn.padEnd = function(t, e, n) {
                                t = ss(t)
                                var r = (e = rs(e)) ? Ue(t) : 0
                                return e && r < e ? t + Li(e - r, n) : t
                            }),
                            (Pn.padStart = function(t, e, n) {
                                t = ss(t)
                                var r = (e = rs(e)) ? Ue(t) : 0
                                return e && r < e ? Li(e - r, n) + t : t
                            }),
                            (Pn.parseInt = function(t, e, n) {
                                return n || null == e ? (e = 0) : e && (e = +e), un(ss(t).replace(K, ''), e || 0)
                            }),
                            (Pn.random = function(t, e, n) {
                                if (
                                    (n && 'boolean' != typeof n && sa(t, e, n) && (e = n = void 0),
                                    void 0 === n &&
                                        ('boolean' == typeof e
                                            ? ((n = e), (e = void 0))
                                            : 'boolean' == typeof t && ((n = t), (t = void 0))),
                                    void 0 === t && void 0 === e
                                        ? ((t = 0), (e = 1))
                                        : ((t = ns(t)), void 0 === e ? ((e = t), (t = 0)) : (e = ns(e))),
                                    t > e)
                                ) {
                                    var r = t
                                    ;(t = e), (e = r)
                                }
                                if (n || t % 1 || e % 1) {
                                    var i = cn()
                                    return sn(t + i * (e - t + Ht('1e-' + ((i + '').length - 1))), e)
                                }
                                return Rr(t, e)
                            }),
                            (Pn.reduce = function(t, e, n) {
                                var r = Fo(t) ? pe : Ae,
                                    i = arguments.length < 3
                                return r(t, Zi(e, 4), n, i, tr)
                            }),
                            (Pn.reduceRight = function(t, e, n) {
                                var r = Fo(t) ? ve : Ae,
                                    i = arguments.length < 3
                                return r(t, Zi(e, 4), n, i, er)
                            }),
                            (Pn.repeat = function(t, e, n) {
                                return (e = (n ? sa(t, e, n) : void 0 === e) ? 1 : rs(e)), Er(ss(t), e)
                            }),
                            (Pn.replace = function() {
                                var t = arguments,
                                    e = ss(t[0])
                                return t.length < 3 ? e : e.replace(t[1], t[2])
                            }),
                            (Pn.result = function(t, e, n) {
                                var r = -1,
                                    i = (e = si(e, t)).length
                                for (i || ((i = 1), (t = void 0)); ++r < i; ) {
                                    var a = null == t ? void 0 : t[Sa(e[r])]
                                    void 0 === a && ((r = i), (a = n)), (t = Wo(a) ? a.call(t) : a)
                                }
                                return t
                            }),
                            (Pn.round = dl),
                            (Pn.runInContext = t),
                            (Pn.sample = function(t) {
                                return (Fo(t) ? Bn : Br)(t)
                            }),
                            (Pn.size = function(t) {
                                if (null == t) return 0
                                if (zo(t)) return Zo(t) ? Ue(t) : t.length
                                var e = na(t)
                                return e == p || e == y ? t.size : Mr(t).length
                            }),
                            (Pn.snakeCase = Rs),
                            (Pn.some = function(t, e, n) {
                                var r = Fo(t) ? me : $r
                                return n && sa(t, e, n) && (e = void 0), r(t, Zi(e, 3))
                            }),
                            (Pn.sortedIndex = function(t, e) {
                                return Yr(t, e)
                            }),
                            (Pn.sortedIndexBy = function(t, e, n) {
                                return Gr(t, e, Zi(n, 2))
                            }),
                            (Pn.sortedIndexOf = function(t, e) {
                                var n = null == t ? 0 : t.length
                                if (n) {
                                    var r = Yr(t, e)
                                    if (r < n && Do(t[r], e)) return r
                                }
                                return -1
                            }),
                            (Pn.sortedLastIndex = function(t, e) {
                                return Yr(t, e, !0)
                            }),
                            (Pn.sortedLastIndexBy = function(t, e, n) {
                                return Gr(t, e, Zi(n, 2), !0)
                            }),
                            (Pn.sortedLastIndexOf = function(t, e) {
                                if (null == t ? 0 : t.length) {
                                    var n = Yr(t, e, !0) - 1
                                    if (Do(t[n], e)) return n
                                }
                                return -1
                            }),
                            (Pn.startCase = Es),
                            (Pn.startsWith = function(t, e, n) {
                                return (
                                    (t = ss(t)),
                                    (n = null == n ? 0 : Kn(rs(n), 0, t.length)),
                                    (e = Xr(e)),
                                    t.slice(n, n + e.length) == e
                                )
                            }),
                            (Pn.subtract = fl),
                            (Pn.sum = function(t) {
                                return t && t.length ? Pe(t, $s) : 0
                            }),
                            (Pn.sumBy = function(t, e) {
                                return t && t.length ? Pe(t, Zi(e, 2)) : 0
                            }),
                            (Pn.template = function(t, e, n) {
                                var r = Pn.templateSettings
                                n && sa(t, e, n) && (e = void 0), (t = ss(t)), (e = cs({}, e, r, Wi))
                                var i,
                                    a,
                                    o = cs({}, e.imports, r.imports, Wi),
                                    s = xs(o),
                                    l = Te(o, s),
                                    u = 0,
                                    c = e.interpolate || ct,
                                    h = "__p += '",
                                    d = vt(
                                        (e.escape || ct).source +
                                            '|' +
                                            c.source +
                                            '|' +
                                            (c === V ? nt : ct).source +
                                            '|' +
                                            (e.evaluate || ct).source +
                                            '|$',
                                        'g'
                                    ),
                                    f =
                                        '//# sourceURL=' +
                                        (Mt.call(e, 'sourceURL')
                                            ? (e.sourceURL + '').replace(/[\r\n]/g, ' ')
                                            : 'lodash.templateSources[' + ++Bt + ']') +
                                        '\n'
                                t.replace(d, function(e, n, r, o, s, l) {
                                    return (
                                        r || (r = o),
                                        (h += t.slice(u, l).replace(ht, Ne)),
                                        n && ((i = !0), (h += "' +\n__e(" + n + ") +\n'")),
                                        s && ((a = !0), (h += "';\n" + s + ";\n__p += '")),
                                        r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                                        (u = l + e.length),
                                        e
                                    )
                                }),
                                    (h += "';\n")
                                var g = Mt.call(e, 'variable') && e.variable
                                g || (h = 'with (obj) {\n' + h + '\n}\n'),
                                    (h = (a ? h.replace(F, '') : h).replace(O, '$1').replace(z, '$1;')),
                                    (h =
                                        'function(' +
                                        (g || 'obj') +
                                        ') {\n' +
                                        (g ? '' : 'obj || (obj = {});\n') +
                                        "var __t, __p = ''" +
                                        (i ? ', __e = _.escape' : '') +
                                        (a
                                            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                                            : ';\n') +
                                        h +
                                        'return __p\n}')
                                var p = js(function() {
                                    return ft(s, f + 'return ' + h).apply(void 0, l)
                                })
                                if (((p.source = h), Bo(p))) throw p
                                return p
                            }),
                            (Pn.times = function(t, e) {
                                if ((t = rs(t)) < 1 || t > 9007199254740991) return []
                                var n = 4294967295,
                                    r = sn(t, 4294967295)
                                t -= 4294967295
                                for (var i = De(r, (e = Zi(e))); ++n < t; ) e(n)
                                return i
                            }),
                            (Pn.toFinite = ns),
                            (Pn.toInteger = rs),
                            (Pn.toLength = is),
                            (Pn.toLower = function(t) {
                                return ss(t).toLowerCase()
                            }),
                            (Pn.toNumber = as),
                            (Pn.toSafeInteger = function(t) {
                                return t ? Kn(rs(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                            }),
                            (Pn.toString = ss),
                            (Pn.toUpper = function(t) {
                                return ss(t).toUpperCase()
                            }),
                            (Pn.trim = function(t, e, n) {
                                if ((t = ss(t)) && (n || void 0 === e)) return t.replace(G, '')
                                if (!t || !(e = Xr(e))) return t
                                var r = $e(t),
                                    i = $e(e)
                                return ui(r, Fe(r, i), Oe(r, i) + 1).join('')
                            }),
                            (Pn.trimEnd = function(t, e, n) {
                                if ((t = ss(t)) && (n || void 0 === e)) return t.replace(Z, '')
                                if (!t || !(e = Xr(e))) return t
                                var r = $e(t)
                                return ui(r, 0, Oe(r, $e(e)) + 1).join('')
                            }),
                            (Pn.trimStart = function(t, e, n) {
                                if ((t = ss(t)) && (n || void 0 === e)) return t.replace(K, '')
                                if (!t || !(e = Xr(e))) return t
                                var r = $e(t)
                                return ui(r, Fe(r, $e(e))).join('')
                            }),
                            (Pn.truncate = function(t, e) {
                                var n = 30,
                                    r = '...'
                                if (Ho(e)) {
                                    var i = 'separator' in e ? e.separator : i
                                    ;(n = 'length' in e ? rs(e.length) : n), (r = 'omission' in e ? Xr(e.omission) : r)
                                }
                                var a = (t = ss(t)).length
                                if (Be(t)) {
                                    var o = $e(t)
                                    a = o.length
                                }
                                if (n >= a) return t
                                var s = n - Ue(r)
                                if (s < 1) return r
                                var l = o ? ui(o, 0, s).join('') : t.slice(0, s)
                                if (void 0 === i) return l + r
                                if ((o && (s += l.length - s), Go(i))) {
                                    if (t.slice(s).search(i)) {
                                        var u,
                                            c = l
                                        for (
                                            i.global || (i = vt(i.source, ss(rt.exec(i)) + 'g')), i.lastIndex = 0;
                                            (u = i.exec(c));

                                        )
                                            var h = u.index
                                        l = l.slice(0, void 0 === h ? s : h)
                                    }
                                } else if (t.indexOf(Xr(i), s) != s) {
                                    var d = l.lastIndexOf(i)
                                    d > -1 && (l = l.slice(0, d))
                                }
                                return l + r
                            }),
                            (Pn.unescape = function(t) {
                                return (t = ss(t)) && N.test(t) ? t.replace(R, Ye) : t
                            }),
                            (Pn.uniqueId = function(t) {
                                var e = ++St
                                return ss(t) + e
                            }),
                            (Pn.upperCase = Ns),
                            (Pn.upperFirst = Bs),
                            (Pn.each = oo),
                            (Pn.eachRight = so),
                            (Pn.first = Oa),
                            Zs(
                                Pn,
                                ((cl = {}),
                                lr(Pn, function(t, e) {
                                    Mt.call(Pn.prototype, e) || (cl[e] = t)
                                }),
                                cl),
                                { chain: !1 }
                            ),
                            (Pn.VERSION = '4.17.15'),
                            se(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(t) {
                                Pn[t].placeholder = Pn
                            }),
                            se(['drop', 'take'], function(t, e) {
                                ;(Ln.prototype[t] = function(n) {
                                    n = void 0 === n ? 1 : on(rs(n), 0)
                                    var r = this.__filtered__ && !e ? new Ln(this) : this.clone()
                                    return (
                                        r.__filtered__
                                            ? (r.__takeCount__ = sn(n, r.__takeCount__))
                                            : r.__views__.push({
                                                  size: sn(n, 4294967295),
                                                  type: t + (r.__dir__ < 0 ? 'Right' : ''),
                                              }),
                                        r
                                    )
                                }),
                                    (Ln.prototype[t + 'Right'] = function(e) {
                                        return this.reverse()
                                            [t](e)
                                            .reverse()
                                    })
                            }),
                            se(['filter', 'map', 'takeWhile'], function(t, e) {
                                var n = e + 1,
                                    r = 1 == n || 3 == n
                                Ln.prototype[t] = function(t) {
                                    var e = this.clone()
                                    return (
                                        e.__iteratees__.push({ iteratee: Zi(t, 3), type: n }),
                                        (e.__filtered__ = e.__filtered__ || r),
                                        e
                                    )
                                }
                            }),
                            se(['head', 'last'], function(t, e) {
                                var n = 'take' + (e ? 'Right' : '')
                                Ln.prototype[t] = function() {
                                    return this[n](1).value()[0]
                                }
                            }),
                            se(['initial', 'tail'], function(t, e) {
                                var n = 'drop' + (e ? '' : 'Right')
                                Ln.prototype[t] = function() {
                                    return this.__filtered__ ? new Ln(this) : this[n](1)
                                }
                            }),
                            (Ln.prototype.compact = function() {
                                return this.filter($s)
                            }),
                            (Ln.prototype.find = function(t) {
                                return this.filter(t).head()
                            }),
                            (Ln.prototype.findLast = function(t) {
                                return this.reverse().find(t)
                            }),
                            (Ln.prototype.invokeMap = Nr(function(t, e) {
                                return 'function' == typeof t
                                    ? new Ln(this)
                                    : this.map(function(n) {
                                          return br(n, t, e)
                                      })
                            })),
                            (Ln.prototype.reject = function(t) {
                                return this.filter(Mo(Zi(t)))
                            }),
                            (Ln.prototype.slice = function(t, e) {
                                t = rs(t)
                                var n = this
                                return n.__filtered__ && (t > 0 || e < 0)
                                    ? new Ln(n)
                                    : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                                      void 0 !== e && (n = (e = rs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                                      n)
                            }),
                            (Ln.prototype.takeRightWhile = function(t) {
                                return this.reverse()
                                    .takeWhile(t)
                                    .reverse()
                            }),
                            (Ln.prototype.toArray = function() {
                                return this.take(4294967295)
                            }),
                            lr(Ln.prototype, function(t, e) {
                                var n = /^(?:filter|find|map|reject)|While$/.test(e),
                                    r = /^(?:head|last)$/.test(e),
                                    i = Pn[r ? 'take' + ('last' == e ? 'Right' : '') : e],
                                    a = r || /^find/.test(e)
                                i &&
                                    (Pn.prototype[e] = function() {
                                        var e = this.__wrapped__,
                                            o = r ? [1] : arguments,
                                            s = e instanceof Ln,
                                            l = o[0],
                                            u = s || Fo(e),
                                            c = function(t) {
                                                var e = i.apply(Pn, ge([t], o))
                                                return r && h ? e[0] : e
                                            }
                                        u && n && 'function' == typeof l && 1 != l.length && (s = u = !1)
                                        var h = this.__chain__,
                                            d = !!this.__actions__.length,
                                            f = a && !h,
                                            g = s && !d
                                        if (!a && u) {
                                            e = g ? e : new Ln(this)
                                            var p = t.apply(e, o)
                                            return (
                                                p.__actions__.push({ func: eo, args: [c], thisArg: void 0 }),
                                                new Tn(p, h)
                                            )
                                        }
                                        return f && g
                                            ? t.apply(this, o)
                                            : ((p = this.thru(c)), f ? (r ? p.value()[0] : p.value()) : p)
                                    })
                            }),
                            se(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(t) {
                                var e = yt[t],
                                    n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                                    r = /^(?:pop|shift)$/.test(t)
                                Pn.prototype[t] = function() {
                                    var t = arguments
                                    if (r && !this.__chain__) {
                                        var i = this.value()
                                        return e.apply(Fo(i) ? i : [], t)
                                    }
                                    return this[n](function(n) {
                                        return e.apply(Fo(n) ? n : [], t)
                                    })
                                }
                            }),
                            lr(Ln.prototype, function(t, e) {
                                var n = Pn[e]
                                if (n) {
                                    var r = n.name + ''
                                    Mt.call(yn, r) || (yn[r] = []), yn[r].push({ name: e, func: n })
                                }
                            }),
                            (yn[Pi(void 0, 2).name] = [{ name: 'wrapper', func: void 0 }]),
                            (Ln.prototype.clone = function() {
                                var t = new Ln(this.__wrapped__)
                                return (
                                    (t.__actions__ = mi(this.__actions__)),
                                    (t.__dir__ = this.__dir__),
                                    (t.__filtered__ = this.__filtered__),
                                    (t.__iteratees__ = mi(this.__iteratees__)),
                                    (t.__takeCount__ = this.__takeCount__),
                                    (t.__views__ = mi(this.__views__)),
                                    t
                                )
                            }),
                            (Ln.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var t = new Ln(this)
                                    ;(t.__dir__ = -1), (t.__filtered__ = !0)
                                } else (t = this.clone()).__dir__ *= -1
                                return t
                            }),
                            (Ln.prototype.value = function() {
                                var t = this.__wrapped__.value(),
                                    e = this.__dir__,
                                    n = Fo(t),
                                    r = e < 0,
                                    i = n ? t.length : 0,
                                    a = (function(t, e, n) {
                                        var r = -1,
                                            i = n.length
                                        for (; ++r < i; ) {
                                            var a = n[r],
                                                o = a.size
                                            switch (a.type) {
                                                case 'drop':
                                                    t += o
                                                    break
                                                case 'dropRight':
                                                    e -= o
                                                    break
                                                case 'take':
                                                    e = sn(e, t + o)
                                                    break
                                                case 'takeRight':
                                                    t = on(t, e - o)
                                            }
                                        }
                                        return { start: t, end: e }
                                    })(0, i, this.__views__),
                                    o = a.start,
                                    s = a.end,
                                    l = s - o,
                                    u = r ? s : o - 1,
                                    c = this.__iteratees__,
                                    h = c.length,
                                    d = 0,
                                    f = sn(l, this.__takeCount__)
                                if (!n || (!r && i == l && f == l)) return ni(t, this.__actions__)
                                var g = []
                                t: for (; l-- && d < f; ) {
                                    for (var p = -1, v = t[(u += e)]; ++p < h; ) {
                                        var m = c[p],
                                            b = m.iteratee,
                                            y = m.type,
                                            x = b(v)
                                        if (2 == y) v = x
                                        else if (!x) {
                                            if (1 == y) continue t
                                            break t
                                        }
                                    }
                                    g[d++] = v
                                }
                                return g
                            }),
                            (Pn.prototype.at = no),
                            (Pn.prototype.chain = function() {
                                return to(this)
                            }),
                            (Pn.prototype.commit = function() {
                                return new Tn(this.value(), this.__chain__)
                            }),
                            (Pn.prototype.next = function() {
                                void 0 === this.__values__ && (this.__values__ = es(this.value()))
                                var t = this.__index__ >= this.__values__.length
                                return { done: t, value: t ? void 0 : this.__values__[this.__index__++] }
                            }),
                            (Pn.prototype.plant = function(t) {
                                for (var e, n = this; n instanceof In; ) {
                                    var r = Aa(n)
                                    ;(r.__index__ = 0), (r.__values__ = void 0), e ? (i.__wrapped__ = r) : (e = r)
                                    var i = r
                                    n = n.__wrapped__
                                }
                                return (i.__wrapped__ = t), e
                            }),
                            (Pn.prototype.reverse = function() {
                                var t = this.__wrapped__
                                if (t instanceof Ln) {
                                    var e = t
                                    return (
                                        this.__actions__.length && (e = new Ln(this)),
                                        (e = e.reverse()).__actions__.push({ func: eo, args: [Va], thisArg: void 0 }),
                                        new Tn(e, this.__chain__)
                                    )
                                }
                                return this.thru(Va)
                            }),
                            (Pn.prototype.toJSON = Pn.prototype.valueOf = Pn.prototype.value = function() {
                                return ni(this.__wrapped__, this.__actions__)
                            }),
                            (Pn.prototype.first = Pn.prototype.head),
                            Jt &&
                                (Pn.prototype[Jt] = function() {
                                    return this
                                }),
                            Pn
                        )
                    })()
                    ;(Yt._ = Ge),
                        void 0 ===
                            (i = function() {
                                return Ge
                            }.call(e, n, e, r)) || (r.exports = i)
                }.call(this))
            }.call(this, n(34), n(217)(t)))
        },
        503: function(t, e, n) {
            'use strict'
            n.r(e)
            const r = t => Math.round(10 * t) / 10,
                i = t =>
                    Number(t)
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                a = (t, e, n, i) => ` C${r((n + t) / 2)},${e} ${r((n + t) / 2)},${i} ${n},${i}`,
                o = (t, e, n, i) => ` C${t},${r((i + e) / 2)} ${n},${r((i + e) / 2)} ${n},${i}`,
                s = (t, e, n, r) => {
                    let i = `M${e[0]},${n[0]}`
                    for (let t = 0; t < e.length - 1; t++) i += a(e[t], n[t], e[t + 1], n[t + 1])
                    i += ` L${[...e].pop()},${[...r].pop()}`
                    for (let t = e.length - 1; t > 0; t--) i += a(e[t], r[t], e[t - 1], r[t - 1])
                    return (i += ' Z'), i
                },
                l = (t, e, n, r) => {
                    let i = `M${e[0]},${r[0]}`
                    for (let t = 0; t < e.length - 1; t++) i += o(e[t], r[t], e[t + 1], r[t + 1])
                    i += ` L${[...n].pop()},${[...r].pop()}`
                    for (let t = e.length - 1; t > 0; t--) i += o(n[t], r[t], n[t - 1], r[t - 1])
                    return (i += ' Z'), i
                },
                u = (t, e) => {
                    'object' == typeof e &&
                        Object.keys(e).forEach(n => {
                            t.setAttribute(n, e[n])
                        })
                },
                c = (t, ...e) => {
                    e.forEach(e => {
                        t.removeAttribute(e)
                    })
                },
                h = (t, e, n) => {
                    const r = document.createElementNS('http://www.w3.org/2000/svg', t)
                    return 'object' == typeof n && u(r, n), void 0 !== e && e.appendChild(r), r
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
                f = t => {
                    const e = [...d],
                        n = []
                    for (let r = 0; r < t; r++) {
                        const t = Math.abs(Math.round(Math.random() * (e.length - 1)))
                        n.push(e[t]), e.splice(t, 1)
                    }
                    return n
                }
            var g = t =>
                Math.random()
                    .toString(36)
                    .replace('0.', t || '')
            class p {
                constructor(t) {
                    ;(this.containerSelector = t.container),
                        (this.gradientDirection =
                            t.gradientDirection && 'vertical' === t.gradientDirection ? 'vertical' : 'horizontal'),
                        (this.direction = t.direction && 'vertical' === t.direction ? 'vertical' : 'horizontal'),
                        (this.labels = p.getLabels(t)),
                        (this.subLabels = p.getSubLabels(t)),
                        (this.values = p.getValues(t)),
                        (this.percentages = this.createPercentages()),
                        (this.colors = t.data.colors || f(this.is2d() ? this.getSubDataSize() : 2)),
                        (this.displayPercent = t.displayPercent || !1),
                        (this.data = t.data),
                        (this.height = t.height),
                        (this.width = t.width),
                        (this.subLabelValue = t.subLabelValue || 'percent')
                }
                getMainAxisPoints() {
                    const t = this.getDataSize(),
                        e = [],
                        n = this.isVertical() ? this.getHeight() : this.getWidth()
                    for (let i = 0; i <= t; i++) e.push(r((n * i) / t))
                    return e
                }
                getCrossAxisPoints() {
                    const t = [],
                        e = this.getFullDimension(),
                        n = e / 2
                    if (this.is2d()) {
                        const i = this.getValues2d(),
                            a = Math.max(...i)
                        i.push([...i].pop()), t.push(i.map(t => r(((a - t) / a) * n)))
                        const o = this.getPercentages2d(),
                            s = t[0]
                        for (let n = 1; n < this.getSubDataSize(); n++) {
                            const i = t[n - 1],
                                a = []
                            for (let t = 0; t < this.getDataSize(); t++)
                                a.push(r(i[t] + (e - 2 * s[t]) * (o[t][n - 1] / 100)))
                            a.push([...a].pop()), t.push(a)
                        }
                        t.push(s.map(t => e - t))
                    } else {
                        const i = Math.max(...this.values),
                            a = [...this.values].concat([...this.values].pop())
                        t.push(a.map(t => r(((i - t) / i) * n))), t.push(t[0].map(t => e - t))
                    }
                    return t
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
                static getSubLabels(t) {
                    if (!t.data) throw new Error('Data is missing')
                    const { data: e } = t
                    return void 0 === e.subLabels ? [] : e.subLabels
                }
                static getLabels(t) {
                    if (!t.data) throw new Error('Data is missing')
                    const { data: e } = t
                    return void 0 === e.labels ? [] : e.labels
                }
                addLabels() {
                    const t = document.createElement('div')
                    t.setAttribute('class', 'svg-funnel-js__labels'),
                        this.percentages.forEach((e, n) => {
                            const r = document.createElement('div')
                            r.setAttribute('class', 'svg-funnel-js__label label-' + (n + 1))
                            const a = document.createElement('div')
                            a.setAttribute('class', 'label__title'), (a.textContent = this.labels[n] || '')
                            const o = document.createElement('div')
                            o.setAttribute('class', 'label__value')
                            const s = this.is2d() ? this.getValues2d()[n] : this.values[n]
                            o.textContent = i(s)
                            const l = document.createElement('div')
                            if (
                                (l.setAttribute('class', 'label__percentage'),
                                (l.textContent = e.toString() + '%'),
                                r.appendChild(o),
                                r.appendChild(a),
                                this.displayPercent && r.appendChild(l),
                                this.is2d())
                            ) {
                                const t = document.createElement('div')
                                t.setAttribute('class', 'label__segment-percentages')
                                let e = '<ul class="segment-percentage__list">'
                                const a = this.getPercentages2d()
                                this.subLabels.forEach((t, r) => {
                                    const o = 'percent' === this.subLabelValue ? a[n][r] + '%' : i(this.values[n][r])
                                    e += `<li>${this.subLabels[r]}:\n    <span class="percentage__list-label">${o}</span>\n </li>`
                                }),
                                    (e += '</ul>'),
                                    (t.innerHTML = e),
                                    r.appendChild(t)
                            }
                            t.appendChild(r)
                        }),
                        this.container.appendChild(t)
                }
                addSubLabels() {
                    if (this.subLabels) {
                        const t = document.createElement('div')
                        t.setAttribute('class', 'svg-funnel-js__subLabels')
                        let e = ''
                        this.subLabels.forEach((t, n) => {
                            e += `<div class="svg-funnel-js__subLabel svg-funnel-js__subLabel-${n +
                                1}">\n    <div class="svg-funnel-js__subLabel--color"\n        style="${((
                                t,
                                e = 'horizontal'
                            ) =>
                                'string' == typeof t
                                    ? 'background-color: ' + t
                                    : 1 === t.length
                                    ? 'background-color: ' + t[0]
                                    : `background-image: linear-gradient(${
                                          'horizontal' === e ? 'to right, ' : ''
                                      }${t.join(', ')})`)(
                                this.colors[n],
                                this.gradientDirection
                            )}"></div>\n    <div class="svg-funnel-js__subLabel--title">${t}</div>\n</div>`
                        }),
                            (t.innerHTML = e),
                            this.container.appendChild(t)
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
                setValues(t) {
                    return (this.values = t), this
                }
                setDirection(t) {
                    return (this.direction = t), this
                }
                setHeight(t) {
                    return (this.height = t), this
                }
                setWidth(t) {
                    return (this.width = t), this
                }
                static getValues(t) {
                    if (!t.data) return []
                    const { data: e } = t
                    return 'object' == typeof e ? e.values : []
                }
                getValues2d() {
                    const t = []
                    return (
                        this.values.forEach(e => {
                            t.push(e.reduce((t, e) => t + e, 0))
                        }),
                        t
                    )
                }
                getPercentages2d() {
                    const t = []
                    return (
                        this.values.forEach(e => {
                            const n = e.reduce((t, e) => t + e, 0)
                            t.push(e.map(t => (0 === n ? 0 : r((100 * t) / n))))
                        }),
                        t
                    )
                }
                createPercentages() {
                    let t = []
                    t = this.is2d() ? this.getValues2d() : [...this.values]
                    const e = Math.max(...t)
                    return t.map(t => (0 === t ? 0 : r((100 * t) / e)))
                }
                applyGradient(t, e, n, r) {
                    const i = null === t.querySelector('defs') ? h('defs', t) : t.querySelector('defs'),
                        a = g(`funnelGradient-${r}-`),
                        o = h('linearGradient', i, { id: a })
                    'vertical' === this.gradientDirection && u(o, { x1: '0', x2: '0', y1: '0', y2: '1' })
                    const s = n.length
                    for (let t = 0; t < s; t++)
                        h('stop', o, { 'stop-color': n[t], offset: Math.round((100 * t) / (s - 1)) + '%' })
                    u(e, { fill: `url("#${a}")`, stroke: `url("#${a}")` })
                }
                makeSVG() {
                    const t = h('svg', this.graphContainer, { width: this.getWidth(), height: this.getHeight() }),
                        e = this.getCrossAxisPoints().length - 1
                    for (let n = 0; n < e; n++) {
                        const e = h('path', t),
                            r = this.is2d() ? this.colors[n] : this.colors,
                            i = 'string' == typeof r || 1 === r.length ? 'solid' : 'gradient'
                        'solid' === i
                            ? u(e, { fill: r, stroke: r })
                            : 'gradient' === i && this.applyGradient(t, e, r, n + 1),
                            t.appendChild(e)
                    }
                    this.graphContainer.appendChild(t)
                }
                getSVG() {
                    const t = this.container.querySelector('svg')
                    if (!t) throw new Error('No SVG found inside of the container')
                    return t
                }
                getWidth() {
                    return this.width || this.graphContainer.clientWidth
                }
                getHeight() {
                    return this.height || this.graphContainer.clientHeight
                }
                getPathDefinitions() {
                    const t = this.getCrossAxisPoints().length - 1,
                        e = []
                    for (let n = 0; n < t; n++)
                        if (this.isVertical()) {
                            const t = this.getCrossAxisPoints()[n],
                                r = this.getCrossAxisPoints()[n + 1],
                                i = this.getMainAxisPoints(),
                                a = l(0, t, r, i)
                            e.push(a)
                        } else {
                            const t = this.getMainAxisPoints(),
                                r = this.getCrossAxisPoints()[n],
                                i = this.getCrossAxisPoints()[n + 1],
                                a = s(0, t, r, i)
                            e.push(a)
                        }
                    return e
                }
                getPathMedian(t) {
                    if (this.isVertical()) {
                        const e = this.getCrossAxisPoints()[t],
                            n = this.getCrossAxisPoints()[t + 1],
                            r = this.getMainAxisPoints(),
                            i = [],
                            a = []
                        return (
                            e.forEach((t, e) => {
                                const r = (t + n[e]) / 2
                                i.push(r - 1), a.push(r + 1)
                            }),
                            l(0, i, a, r)
                        )
                    }
                    const e = this.getMainAxisPoints(),
                        n = this.getCrossAxisPoints()[t],
                        r = this.getCrossAxisPoints()[t + 1],
                        i = [],
                        a = []
                    return (
                        n.forEach((t, e) => {
                            const n = (t + r[e]) / 2
                            i.push(n - 1), a.push(n + 1)
                        }),
                        s(0, e, i, a)
                    )
                }
                drawPaths() {
                    const t = this.getSVG().querySelectorAll('path')
                    this.getPathDefinitions().forEach((e, n) => {
                        t[n].setAttribute('d', e)
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
                    const t = this.getSVG(),
                        e = this.getHeight(),
                        n = this.getWidth()
                    return u(t, { height: e, width: n }), this.drawPaths(), !0
                }
                makeHorizontal() {
                    if ('horizontal' === this.direction) return !0
                    ;(this.direction = 'horizontal'), this.container.classList.remove('svg-funnel-js--vertical')
                    const t = this.getSVG(),
                        e = this.getHeight(),
                        n = this.getWidth()
                    return u(t, { height: e, width: n }), this.drawPaths(), !0
                }
                toggleDirection() {
                    'horizontal' === this.direction ? this.makeVertical() : this.makeHorizontal()
                }
                gradientMakeVertical() {
                    if ('vertical' === this.gradientDirection) return !0
                    this.gradientDirection = 'vertical'
                    const t = this.graphContainer.querySelectorAll('linearGradient')
                    for (let e = 0; e < t.length; e++) u(t[e], { x1: '0', x2: '0', y1: '0', y2: '1' })
                    return !0
                }
                gradientMakeHorizontal() {
                    if ('horizontal' === this.gradientDirection) return !0
                    this.gradientDirection = 'horizontal'
                    const t = this.graphContainer.querySelectorAll('linearGradient')
                    for (let e = 0; e < t.length; e++) c(t[e], 'x1', 'x2', 'y1', 'y2')
                    return !0
                }
                gradientToggleDirection() {
                    'horizontal' === this.gradientDirection
                        ? this.gradientMakeVertical()
                        : this.gradientMakeHorizontal()
                }
                updateWidth(t) {
                    this.width = t
                    const e = this.getSVG(),
                        n = this.getWidth()
                    return u(e, { width: n }), this.drawPaths(), !0
                }
                updateHeight(t) {
                    this.height = t
                    const e = this.getSVG(),
                        n = this.getHeight()
                    return u(e, { height: n }), this.drawPaths(), !0
                }
                updateData(t) {
                    const e = this.container.querySelector('.svg-funnel-js__labels'),
                        n = this.container.querySelector('.svg-funnel-js__subLabels')
                    e && e.remove(),
                        n && n.remove(),
                        (this.labels = []),
                        (this.colors = f(this.is2d() ? this.getSubDataSize() : 2)),
                        (this.values = []),
                        (this.percentages = []),
                        void 0 !== t.labels && (this.labels = p.getLabels({ data: t })),
                        void 0 !== t.colors && (this.colors = t.colors || f(this.is2d() ? this.getSubDataSize() : 2)),
                        void 0 !== t.values &&
                            (Object.prototype.toString.call(t.values[0]) !==
                            Object.prototype.toString.call(this.values[0])
                                ? (this.container.querySelector('svg').remove(),
                                  (this.values = p.getValues({ data: t })),
                                  this.makeSVG())
                                : (this.values = p.getValues({ data: t })),
                            this.drawPaths()),
                        (this.percentages = this.createPercentages()),
                        this.addLabels(),
                        void 0 !== t.subLabels && ((this.subLabels = p.getSubLabels({ data: t })), this.addSubLabels())
                }
                update(t) {
                    void 0 !== t.displayPercent &&
                        this.displayPercent !== t.displayPercent &&
                        (!0 === this.displayPercent
                            ? this.container.querySelectorAll('.label__percentage').forEach(t => {
                                  t.remove()
                              })
                            : this.container.querySelectorAll('.svg-funnel-js__label').forEach((t, e) => {
                                  const n = this.percentages[e],
                                      r = document.createElement('div')
                                  r.setAttribute('class', 'label__percentage'),
                                      100 !== n && ((r.textContent = n.toString() + '%'), t.appendChild(r))
                              })),
                        void 0 !== t.height && this.updateHeight(t.height),
                        void 0 !== t.width && this.updateWidth(t.width),
                        void 0 !== t.gradientDirection &&
                            ('vertical' === t.gradientDirection
                                ? this.gradientMakeVertical()
                                : 'horizontal' === t.gradientDirection && this.gradientMakeHorizontal()),
                        void 0 !== t.direction &&
                            ('vertical' === t.direction
                                ? this.makeVertical()
                                : 'horizontal' === t.direction && this.makeHorizontal()),
                        void 0 !== t.data && this.updateData(t.data)
                }
            }
            e.default = p
        },
    },
])
//# sourceMappingURL=vendors~dashboard.js.map
