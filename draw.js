_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || [])
    .push([
        [18], {
            "1ccW": function(e, t) {
                function n() {
                    return e.exports = n = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, n.apply(this, arguments)
                }
                e.exports = n
            },
            "24z6": function(e, t, n) {
                "use strict";
                var r = n("zoAU"),
                    o = n("AroE");
                t.__esModule = !0, t.initScriptLoader = function(e) {
                    e.forEach(x)
                }, t.default = void 0;
                o(n("1ccW"));
                var i = o(n("98FW")),
                    s = n("q1tI"),
                    a = n("FYa8"),
                    c = n("DqTX"),
                    l = n("0G5g"),
                    d = new Map,
                    u = new Set,
                    p = ["onLoad", "dangerouslySetInnerHTML", "children", "onError", "strategy"],
                    f = function(e) {
                        var t = e.src,
                            n = e.id,
                            o = e.onLoad,
                            i = void 0 === o ? function() {} : o,
                            s = e.dangerouslySetInnerHTML,
                            a = e.children,
                            l = void 0 === a ? "" : a,
                            f = e.onError,
                            x = n || t;
                        if (d.has(t)) u.has(x) || (u.add(x), d.get(t)
                            .then(i, f));
                        else {
                            var b = document.createElement("script"),
                                h = new Promise((function(e, t) {
                                    b.addEventListener("load", (function() {
                                        e(), i && i.call(this)
                                    })), b.addEventListener("error", (function() {
                                        t(), f && f()
                                    }))
                                }));
                            t && (d.set(t, h), u.add(x)), s ? b.innerHTML = s.__html || "" : l ? b.textContent = "string" === typeof l ? l : Array.isArray(l) ? l.join("") : "" : t && (b.src = t);
                            for (var m = 0, g = Object.entries(e); m < g.length; m++) {
                                var j = r(g[m], 2),
                                    v = j[0],
                                    y = j[1];
                                if (void 0 !== y && !p.includes(v)) {
                                    var w = c.DOMAttributeNames[v] || v.toLowerCase();
                                    b.setAttribute(w, y)
                                }
                            }
                            document.body.appendChild(b)
                        }
                    };

                function x(e) {
                    var t = e.strategy,
                        n = void 0 === t ? "afterInteractive" : t;
                    "afterInteractive" === n ? f(e) : "lazyOnload" === n && window.addEventListener("load", (function() {
                        (0, l.requestIdleCallback)((function() {
                            return f(e)
                        }))
                    }))
                }
                var b = function(e) {
                    e.src, e.onLoad;
                    var t = e.strategy,
                        n = void 0 === t ? "afterInteractive" : t,
                        r = (e.onError, (0, i.default)(e, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]), (0, s.useContext)(a.HeadManagerContext));
                    return r.updateScripts, r.scripts, (0, s.useEffect)((function() {
                        "afterInteractive" === n ? f(e) : "lazyOnload" === n && function(e) {
                            "complete" === document.readyState ? (0, l.requestIdleCallback)((function() {
                                return f(e)
                            })) : window.addEventListener("load", (function() {
                                (0, l.requestIdleCallback)((function() {
                                    return f(e)
                                }))
                            }))
                        }(e)
                    }), [e, n]), null
                };
                t.default = b
            },
            "48fX": function(e, t, n) {
                var r = n("qhzo");
                e.exports = function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && r(e, t)
                }
            },
            "5fIB": function(e, t, n) {
                var r = n("7eYB");
                e.exports = function(e) {
                    if (Array.isArray(e)) return r(e)
                }
            },
            "8cZr": function(e, t, n) {
                e.exports = n("VDXt")
            },
            "98FW": function(e, t) {
                e.exports = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }
            },
            AXZJ: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.htmlEscapeJsonString = function(e) {
                    return e.replace(o, (e => r[e]))
                };
                const r = {
                        "&": "\\u0026",
                        ">": "\\u003e",
                        "<": "\\u003c",
                        "
": "\\u2028",
                        "
": "\\u2029"
                    },
                    o = /[&><\u2028\u2029]/g
            },
            CPM0: function(e, t, n) {
                var r = n("98FW");
                e.exports = function(e, t) {
                    if (null == e) return {};
                    var n, o, i = r(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }
            },
            DTay: function(e, t, n) {
                e.exports = n("nWF0")
            },
            DqTX: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function() {
                    var e = null;
                    return {
                        mountedInstances: new Set,
                        updateHead: function(t) {
                            var n = e = Promise.resolve()
                                .then((function() {
                                    if (n === e) {
                                        e = null;
                                        var r = {};
                                        t.forEach((function(e) {
                                            "link" === e.type && e.props["data-optimized-fonts"] && !document.querySelector('style[data-href="'.concat(e.props["data-href"], '"]')) && (e.props.href = e.props["data-href"], e.props["data-href"] = void 0);
                                            var t = r[e.type] || [];
                                            t.push(e), r[e.type] = t
                                        }));
                                        var i = r.title ? r.title[0] : null,
                                            s = "";
                                        if (i) {
                                            var a = i.props.children;
                                            s = "string" === typeof a ? a : Array.isArray(a) ? a.join("") : ""
                                        }
                                        s !== document.title && (document.title = s), ["meta", "base", "link", "style", "script"].forEach((function(e) {
                                            ! function(e, t) {
                                                var n = document.getElementsByTagName("head")[0],
                                                    r = n.querySelector("meta[name=next-head-count]");
                                                0;
                                                for (var i = Number(r.content), s = [], a = 0, c = r.previousElementSibling; a < i; a++, c = c.previousElementSibling) c.tagName.toLowerCase() === e && s.push(c);
                                                var l = t.map(o)
                                                    .filter((function(e) {
                                                        for (var t = 0, n = s.length; t < n; t++) {
                                                            if (s[t].isEqualNode(e)) return s.splice(t, 1), !1
                                                        }
                                                        return !0
                                                    }));
                                                s.forEach((function(e) {
                                                        return e.parentNode.removeChild(e)
                                                    })), l.forEach((function(e) {
                                                        return n.insertBefore(e, r)
                                                    })), r.content = (i - s.length + l.length)
                                                    .toString()
                                            }(e, r[e] || [])
                                        }))
                                    }
                                }))
                        }
                    }
                }, t.DOMAttributeNames = void 0;
                var r = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                };

                function o(e) {
                    var t = e.type,
                        n = e.props,
                        o = document.createElement(t);
                    for (var i in n)
                        if (n.hasOwnProperty(i) && "children" !== i && "dangerouslySetInnerHTML" !== i && void 0 !== n[i]) {
                            var s = r[i] || i.toLowerCase();
                            "script" !== t || "async" !== s && "defer" !== s && "noModule" !== s ? o.setAttribute(s, n[i]) : o[s] = !!n[i]
                        } var a = n.children,
                        c = n.dangerouslySetInnerHTML;
                    return c ? o.innerHTML = c.__html || "" : a && (o.textContent = "string" === typeof a ? a : Array.isArray(a) ? a.join("") : ""), o
                }
                t.DOMAttributeNames = r
            },
            FYa8: function(e, t, n) {
                "use strict";
                var r;
                t.__esModule = !0, t.HeadManagerContext = void 0;
                var o = ((r = n("q1tI")) && r.__esModule ? r : {
                        default: r
                    })
                    .default.createContext({});
                t.HeadManagerContext = o
            },
            HF4s: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "__N_SSG", (function() {
                    return Q
                }));
                var r = n("nKUr"),
                    o = n("cpVT"),
                    i = n("jT3O"),
                    s = n("z7pX"),
                    a = n("MX0m"),
                    c = n.n(a),
                    l = n("CBA4"),
                    d = n("q1tI"),
                    u = n.n(d),
                    p = n("20a2"),
                    f = n("TSYQ"),
                    x = n.n(f),
                    b = n("Ya7B"),
                    h = n("YSmr"),
                    m = n("kOrG"),
                    g = n("dhJC"),
                    j = n("o1E3"),
                    v = n("QW0y");
                var y = Object(b.c)((function(e) {
                        var t = Object(d.useRef)(),
                            n = Object(d.useRef)();

                        function o(r, o) {
                            var i = Object(j.d)(o, n.current, e.scale / e.density),
                                a = e.thickness * e.density;
                            r.clearRect(0, 0, e.width * e.density, e.height * e.density), r.fillStyle = "#FFF", r.strokeStyle = "#FFF", r.lineWidth = 2 * e.density, r.beginPath(), r.arc.apply(r, Object(s.a)(i)
                                .concat([a / 2 + 1, 0, 2 * Math.PI])), t.current ? r.fill() : r.stroke(), r.beginPath(), r.moveTo(i[0], i[1] - a / 2 - 2.5 * e.density), r.lineTo(i[0], i[1] - a / 2 - 10.5 * e.density), r.stroke(), r.beginPath(), r.moveTo(i[0], i[1] + a / 2 + 2.5 * e.density), r.lineTo(i[0], i[1] + a / 2 + 10.5 * e.density), r.stroke(), r.beginPath(), r.moveTo(i[0] - a / 2 - 2.5 * e.density, i[1]), r.lineTo(i[0] - a / 2 - 10.5 * e.density, i[1]), r.stroke(), r.beginPath(), r.moveTo(i[0] + a / 2 + 2.5 * e.density, i[1]), r.lineTo(i[0] + a / 2 + 10.5 * e.density, i[1]), r.stroke(), r.strokeStyle = "#000", r.lineWidth = 1 * e.density, r.beginPath(), r.arc.apply(r, Object(s.a)(i)
                                .concat([a / 2, 0, 2 * Math.PI])), r.stroke(), r.beginPath(), r.moveTo(i[0], i[1] - a / 2 - 3 * e.density), r.lineTo(i[0], i[1] - a / 2 - 10 * e.density), r.stroke(), r.beginPath(), r.moveTo(i[0], i[1] + a / 2 + 3 * e.density), r.lineTo(i[0], i[1] + a / 2 + 10 * e.density), r.stroke(), r.beginPath(), r.moveTo(i[0] - a / 2 - 3 * e.density, i[1]), r.lineTo(i[0] - a / 2 - 10 * e.density, i[1]), r.stroke(), r.beginPath(), r.moveTo(i[0] + a / 2 + 3 * e.density, i[1]), r.lineTo(i[0] + a / 2 + 10 * e.density, i[1]), r.stroke()
                        }
                        return Object(d.useEffect)((function() {
                            t.current = !1;
                            var r = n.current.getContext("2d"),
                                i = window.PointerEvent;

                            function s(e) {
                                t.current = !0, o(r, e)
                            }

                            function a(e) {
                                t.current = !1, o(r, e)
                            }

                            function c(e) {
                                o(r, e)
                            }
                            return i ? document.addEventListener("pointermove", c, !1) : (document.addEventListener("mousemove", c, !1), document.addEventListener("touchmove", c, !1)), e.hidden && (n.current.addEventListener("mousedown", s, !1), n.current.addEventListener("touchstart", s, !1), document.addEventListener("mouseup", a, !1), document.addEventListener("mousecancel", a, !1), document.addEventListener("touchend", a, !1), document.addEventListener("touchcancel", a, !1)),
                                function() {
                                    i ? document.removeEventListener("pointermove", c, !1) : (document.removeEventListener("mousemove", c, !1), document.removeEventListener("touchmove", c, !1)), e.hidden && (document.removeEventListener("mouseup", a, !1), document.removeEventListener("mousecancel", a, !1), document.removeEventListener("touchend", a, !1), document.removeEventListener("touchcancel", a, !1))
                                }
                        }), [e.thickness, e.scale]), Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)("canvas", {
                                ref: n,
                                width: e.width * e.density,
                                height: e.height * e.density,
                                className: c.a.dynamic([
                                    ["2366607727", [e.width, e.height]]
                                ])
                            }), Object(r.jsx)(c.a, {
                                id: "2366607727",
                                dynamic: [e.width, e.height],
                                children: ["canvas.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;cursor:none;width:".concat(e.width, "px;height:")
                                    .concat(e.height, "px;touch-action:none;}")
                                ]
                            })]
                        })
                    }), (function(e) {
                        return {
                            scale: e.scale
                        }
                    })),
                    w = n("xvhg"),
                    k = n("H+61"),
                    _ = n("UlJF");

                function E(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function O(e, t) {
                    return (O = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function S(e) {
                    return (S = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function T(e, t) {
                    return !t || "object" !== S(t) && "function" !== typeof t ? E(e) : t
                }

                function C(e) {
                    return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function I(e) {
                    var t = function() {
                        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = C(e);
                        if (t) {
                            var o = C(this)
                                .constructor;
                            n = Reflect.construct(r, arguments, o)
                        } else n = r.apply(this, arguments);
                        return T(this, n)
                    }
                }
                var L = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && O(e, t)
                    }(n, e);
                    var t = I(n);

                    function n(e) {
                        var r;
                        return Object(k.a)(this, n), r = t.call(this, e), Object(o.a)(E(r), "_unblock", (function(e) {
                            r._blocked = !1;
                            var t = Object(j.d)(e, r._ref.current, r.props.scale / r._zoom),
                                n = Object(w.a)(t, 2),
                                o = n[0],
                                i = n[1];
                            r.props.mobile && (o -= h.g), r._coord = {
                                x: o * r.props.density,
                                y: i * r.props.density,
                                new: !0
                            }, [h.dc, h.ec, h.ic, h.lc, h.mc].includes(r.props.tool) && r._pathsGeo.push({
                                nivel: 6,
                                tool: r.props.tool
                            })
                        })), Object(o.a)(E(r), "_block", (function(e) {
                            if (r._blocked = !0, r._pathsGeo.length) {
                                var t = r._pathsGeo.length - 1;
                                r._pathsGeo[t].pos ? 6 == r._pathsGeo[t].nivel && (r._pathsGeo[t].nivel = 5) : r._pathsGeo.splice(t, 1)
                            }
                        })), Object(o.a)(E(r), "_move", (function(e) {
                            if (r._active && !r._blocked) {
                                var t = Object(j.d)(e, r._ref.current, r.props.scale / r._zoom),
                                    n = Object(w.a)(t, 2),
                                    o = n[0],
                                    i = n[1];
                                r.props.mobile && (o -= h.g), o *= r.props.density, i *= r.props.density, r._coord && ([h.kc, h.fc].includes(r.props.tool) ? (r._paths.push({
                                    pos: [r._coord.x, r._coord.y, o, i],
                                    nivel: 5,
                                    new: r._coord.new
                                }), r._coord = {
                                    x: o,
                                    y: i
                                }) : r._pathsGeo.length > 0 && [h.dc, h.ec, h.ic, h.lc, h.mc].includes(r.props.tool) && (r._pathsGeo[r._pathsGeo.length - 1].pos = [r._coord.x, r._coord.y, o, i]))
                            }
                        })), Object(o.a)(E(r), "_animate", (function() {
                            if (r._active) {
                                var e, t, n, o, i = Date.now(),
                                    s = -1;
                                r._ctx.clearRect(0, 0, r.props.width * r.props.density, r.props.height * r.props.density), r._ctx.lineWidth = r.props.thickness * r.props.density;
                                for (var a = 0; a < r._paths.length; a++) {
                                    if (s != (n = r._paths[a])
                                        .nivel || n.new) {
                                        if (-1 != s && (r._ctx.lineTo(t.pos[2], t.pos[3]), r._ctx.stroke()), n.new) {
                                            s = -1;
                                            continue
                                        }
                                        r._ctx.beginPath(), r._ctx.moveTo(n.pos[0], n.pos[1]), o = r._opacities - 500 * (5 - n.nivel)
                                    }
                                    if (t = n, e = i - o, 4 == (o = Math.ceil((2500 - e) / 2500 * 1e3) + "")
                                        .length) r._ctx.strokeStyle = "rgb(".concat(r._color, ")");
                                    else {
                                        for (var c = 0; c < 3 - o.length; c++) o = "0" + o;
                                        r._ctx.strokeStyle = "rgba(".concat(r._color + ",." + o, ")")
                                    }
                                    r._ctx.quadraticCurveTo(t.pos[0], t.pos[1], t.pos[0] + (t.pos[2] - t.pos[0]) / 2, t.pos[1] + (t.pos[3] - t.pos[1]) / 2), s = t.nivel
                                } - 1 != s && (r._ctx.lineTo(t.pos[2], t.pos[3]), r._ctx.stroke());
                                for (var l = 0; l < r._pathsGeo.length; l++)
                                    if ((n = r._pathsGeo[l])
                                        .pos) {
                                        if (6 == n.nivel) r._ctx.strokeStyle = "rgb(".concat(r._color, ")");
                                        else if (e = i - (o = r._opacities - 500 * (5 - n.nivel)), 4 == (o = Math.ceil((2500 - e) / 2500 * 1e3) + "")
                                            .length) r._ctx.strokeStyle = "rgb(".concat(r._color, ")");
                                        else {
                                            for (var d = 0; d < 3 - o.length; d++) o = "0" + o;
                                            r._ctx.strokeStyle = "rgba(".concat(r._color + ",." + o, ")")
                                        }
                                        switch (r._ctx.fillStyle = r._ctx.strokeStyle, n.tool) {
                                            case h.ic:
                                                r._ctx.beginPath(), r._ctx.moveTo(n.pos[0], n.pos[1]), r._ctx.lineTo(n.pos[2], n.pos[3]), r._ctx.stroke();
                                                break;
                                            case h.mc:
                                                r._ctx.beginPath(), r._ctx.rect(n.pos[0], n.pos[1], n.pos[2] - n.pos[0], n.pos[3] - n.pos[1]), r._ctx.stroke();
                                                break;
                                            case h.lc:
                                                r._ctx.beginPath(), r._ctx.rect(n.pos[0], n.pos[1], n.pos[2] - n.pos[0], n.pos[3] - n.pos[1]), r._ctx.fill();
                                                break;
                                            case h.ec:
                                                var u = (n.pos[2] - n.pos[0]) / 2,
                                                    p = (n.pos[3] - n.pos[1]) / 2,
                                                    f = Math.round(n.pos[0] + u),
                                                    x = Math.round(n.pos[1] + p),
                                                    b = (Math.sqrt(2) - 1) / 3 * 4;
                                                r._ctx.beginPath(), r._ctx.moveTo(f, x - p), r._ctx.bezierCurveTo(f + b * u, x - p, f + u, x - b * p, f + u, x), r._ctx.bezierCurveTo(f + u, x + b * p, f + b * u, x + p, f, x + p), r._ctx.bezierCurveTo(f - b * u, x + p, f - u, x + b * p, f - u, x), r._ctx.bezierCurveTo(f - u, x - b * p, f - b * u, x - p, f, x - p), r._ctx.stroke();
                                                break;
                                            case h.dc:
                                                var m = (n.pos[2] - n.pos[0]) / 2,
                                                    g = (n.pos[3] - n.pos[1]) / 2,
                                                    j = Math.round(n.pos[0] + m),
                                                    v = Math.round(n.pos[1] + g),
                                                    y = (Math.sqrt(2) - 1) / 3 * 4;
                                                r._ctx.beginPath(), r._ctx.moveTo(j, v - g), r._ctx.bezierCurveTo(j + y * m, v - g, j + m, v - y * g, j + m, v), r._ctx.bezierCurveTo(j + m, v + y * g, j + y * m, v + g, j, v + g), r._ctx.bezierCurveTo(j - y * m, v + g, j - m, v + y * g, j - m, v), r._ctx.bezierCurveTo(j - m, v - y * g, j - y * m, v - g, j, v - g), r._ctx.fill()
                                        }
                                    } window.requestAnimationFrame(r._animate)
                            }
                        })), r._ctx = null, r._paths = [], r._pathsGeo = [], r._coord = null, r._opacities = Date.now(), r._ref = u.a.createRef(), r._timer = !1, r._active = !1, r._color = "50,50,50", r._blocked = !0, r._widthChange = 0, r._zoom = 1, r
                    }
                    return Object(_.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.start(), this.props.mobile && (this._zoom = h.d / this._ref.current.offsetHeight, this._widthChange = (h.e / this._zoom + h.g - window.innerWidth) / 2), document.addEventListener("mousedown", this._unblock, !1), document.addEventListener("mouseup", this._block, !1), document.addEventListener("mousecancel", this._block, !1), document.addEventListener("touchstart", this._unblock, !1), document.addEventListener("touchend", this._block, !1), document.addEventListener("touchcancel", this._block, !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.stop(), document.removeEventListener("mousedown", this._unblock, !1), document.removeEventListener("mouseup", this._block, !1), document.removeEventListener("mousecancel", this._block, !1), document.removeEventListener("touchstart", this._unblock, !1), document.removeEventListener("touchend", this._block, !1), document.removeEventListener("touchcancel", this._block, !1)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var e = this;
                            if (!this._active) {
                                var t = this._ref.current;
                                this._paths = [], this._coord = null, this._opacities = Date.now(), this._ctx = t.getContext("2d"), this._ctx.strokeStyle = "rgb(".concat(this._color, ")"), this._ctx.lineCap = "round", this._ctx.lineJoin = "round", window.requestAnimationFrame(this._animate), document.addEventListener("mousemove", this._move, !0), document.addEventListener("touchmove", this._move, !0), this._timer = setInterval((function() {
                                    for (var t, n = 0; n < e._paths.length; n++)(t = e._paths[n])
                                        .nivel--, 0 === t.nivel && e._paths.splice(n--, 1);
                                    for (var r = 0; r < e._pathsGeo.length; r++) 6 != (t = e._pathsGeo[r])
                                        .nivel && (t.nivel--, 0 === t.nivel && e._pathsGeo.splice(r--, 1));
                                    e._opacities = Date.now()
                                }), 500), this._active = !0
                            }
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._active && (this._active = !1, document.removeEventListener("mousemove", this._move, !0), document.removeEventListener("touchmove", this._move, !0), this._timer && clearInterval(this._timer))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)("canvas", {
                                    ref: this._ref,
                                    width: this.props.width * this.props.density,
                                    height: this.props.height * this.props.density,
                                    className: c.a.dynamic([
                                        ["3798211712", [this.props.width, this.props.height]]
                                    ])
                                }), Object(r.jsx)(c.a, {
                                    id: "3798211712",
                                    dynamic: [this.props.width, this.props.height],
                                    children: ["canvas.__jsx-style-dynamic-selector{position:absolute;cursor:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:".concat(this.props.width, "px;height:")
                                        .concat(this.props.height, "px;}")
                                    ]
                                })]
                            })
                        }
                    }]), n
                }(u.a.Component);
                var F = Object(b.c)(L, (function(e) {
                    return {
                        scale: e.scale,
                        mobile: e.mobile
                    }
                }));
                var P = Object(b.c)((function(e) {
                        var t = e.canvasRef,
                            n = e.canvasBgRef,
                            o = e.emit,
                            i = e.tool,
                            a = e.color,
                            l = e.thickness,
                            u = e.opacity,
                            p = Object(g.a)(e, ["canvasRef", "canvasBgRef", "emit", "tool", "color", "thickness", "opacity"]),
                            f = Object(d.useRef)(p.background),
                            x = Object(d.useRef)(),
                            b = Object(d.useRef)(),
                            m = Object(d.useRef)(),
                            w = Object(d.useRef)(),
                            k = Object(d.useRef)(1),
                            _ = Object(d.useRef)(!1),
                            E = Object(d.useRef)(p.lastDraw),
                            O = Object(d.useState)([]),
                            S = O[0],
                            T = O[1];

                        function C() {
                            var e = w.current,
                                t = h.d / x.current.offsetHeight,
                                n = (h.e / t - window.innerWidth) / 2 + h.g;
                            e.style.width = "".concat(window.innerWidth * t * .2, "px"), e.style.marginLeft = "".concat(n * t * .2 * p.move, "px")
                        }
                        Object(d.useEffect)((function() {
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        _.current = {
                                            passive: !1
                                        }
                                    }
                                });
                                window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                            } catch (t) {}
                            x.current.addEventListener("contextmenu", (function(e) {
                                e.preventDefault()
                            }), !1)
                        }), []), Object(d.useEffect)((function() {
                            if (p.data.length) {
                                var e = p.data[p.data.length - 1][1] + 1;
                                e > k.current && (k.current = e)
                            }
                        }), [p.data]), Object(d.useEffect)((function() {
                            if (p.mobile) {
                                var e = h.d / x.current.offsetHeight,
                                    t = (h.e / e - window.innerWidth) / 2 + h.g;
                                x.current.style.transform = "translateX(".concat(t * -p.move, "px)"), p.preview && C()
                            } else 0 == p.move && (x.current.style.transform = "")
                        }), [p.move]), Object(d.useEffect)((function() {
                            if (p.preview && p.mobile) {
                                var e = m.current,
                                    r = e.getContext("2d");
                                r.fillStyle = "#FFF", r.fillRect(0, 0, e.width, e.height), f.current && !p.hidden && r.drawImage(n.current, 0, 0), p.disabled || !E.current || p.hideLast || p.hidden || (r.globalAlpha = .3, r.drawImage(b.current, 0, 0), r.globalAlpha = 1), r.drawImage(t.current, 0, 0), C()
                            }
                        }), [p.preview, p.mobile]), Object(d.useEffect)((function() {
                            ;
                            window.setData = p.setData;
                            if (!p.disabled) {
                                var e, r = [],
                                    c = x.current;
                                c.addEventListener("mousedown", v, !1), c.addEventListener("touchstart", v, _.current);
                                var d = 1,
                                    m = 0;
                                p.mobile && (d = h.d / c.offsetHeight, m = (h.e / d - window.innerWidth) / 2);
                                var g = p.scale / d;
                                return function() {
                                    e && clearInterval(e), c.removeEventListener("mousedown", v, !1), c.removeEventListener("touchstart", v, _.current)
                                }
                            }

                            function v(d) {
                                if (!(r.length || "isTrusted" in d && !d.isTrusted))
                                    if (d.preventDefault(), e && clearInterval(e), i == h.gc) {
                                        var x = j.c.apply(void 0, [t.current.getContext("2d")].concat(Object(s.a)(Object(j.d)(d, c, g / h.f, m))));
                                        0 == x.opacity && E.current && !p.hideLast && (x = j.c.apply(void 0, [b.current.getContext("2d")].concat(Object(s.a)(Object(j.d)(d, c, g / h.f, m))))), 0 == x.opacity && f.current && (x = j.c.apply(void 0, [n.current.getContext("2d")].concat(Object(s.a)(Object(j.d)(d, c, g / h.f, m))))), 0 == x.opacity && (x.color = "#FFFFFF", x.opacity = 1), p.onStart(x)
                                    } else {
                                        if (i == h.hc) {
                                            var v;
                                            if (f.current) {
                                                var O = document.createElement("canvas");
                                                O.width = t.current.width, O.height = t.current.height, (v = O.getContext("2d"))
                                                    .drawImage(n.current, 0, 0), v.drawImage(t.current, 0, 0)
                                            } else v = t.current.getContext("2d");
                                            var S = [i, k.current++, [a, u]].concat(Object(s.a)(j.b.apply(void 0, [v].concat(Object(s.a)(Object(j.d)(d, c, g / h.f, m)), [a, h.e * h.f, h.d * h.f]))
                                                .map((function(e) {
                                                    return Math.round(e / h.f)
                                                }))));
                                            o(h.h, S), p.setData((function(e) {
                                                return [].concat(Object(s.a)(e), [S])
                                            }))
                                        } else {
                                            var C;
                                            switch (i) {
                                                case h.fc:
                                                    C = 2 * l;
                                                    break;
                                                case h.jc:
                                                    C = null;
                                                    break;
                                                default:
                                                    C = [a, l, u]
                                            }
                                            r = [i, k.current++, C, Object(j.d)(d, c, g, m)], [h.fc, h.kc, h.jc].includes(i) && (o(h.h, r), e = setInterval((function() {
                                                o(h.j, r)
                                            }), 1e3)), document.addEventListener("mousemove", y, !1), document.addEventListener("touchmove", y, _.current), document.addEventListener("mouseup", w, !1), document.addEventListener("mousecancel", w, !1), document.addEventListener("touchend", w, !1), document.addEventListener("touchcancel", w, !1), T([r])
                                        }
                                        p.onStart()
                                    }
                            }

                            function y(e) {
                                if (r.length && (!("isTrusted" in e) || e.isTrusted)) {
                                    e.preventDefault(), e.stopPropagation();
                                    var t = Object(j.d)(e, c, g, m);
                                    [h.fc, h.kc, h.jc].includes(i) ? r.push(t) : r[4] = t, T([r])
                                }
                            }

                            function w() {
                                r.length && (e && clearInterval(e), o([h.fc, h.kc, h.jc].includes(i) ? h.j : h.h, r), document.removeEventListener("mousemove", y, !1), document.removeEventListener("touchmove", y, _.current), document.removeEventListener("mouseup", w, !1), document.removeEventListener("mousecancel", w, !1), document.removeEventListener("touchend", w, !1), document.removeEventListener("touchcancel", w, !1), p.setData((function(e) {
                                    return [].concat(Object(s.a)(e), [r])
                                })), T([]), r = [])
                            }
                        }), [p.scale, a, l, u, p.data, i, p.hideLast, p.disabled, p.mobile]);
                        var I = p.disabled || i == h.jc;
                        return Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)("div", {
                                ref: x,
                                className: c.a.dynamic([
                                    ["3446129566", [h.g, h.g, .2 * h.e, .2 * h.d]]
                                ]) + " drawingContainer",
                                children: [f.current && !p.hidden && Object(r.jsx)(v.a, {
                                    ref: n,
                                    data: f.current,
                                    width: h.e,
                                    height: h.d,
                                    density: h.f,
                                    background: !0
                                }), !p.disabled && E.current && !p.hideLast && !p.hidden && Object(r.jsx)(v.a, {
                                    ref: b,
                                    data: E.current,
                                    width: h.e,
                                    height: h.d,
                                    density: h.f,
                                    opacity: .25,
                                    eraserAlpha: !0,
                                    notes: I
                                }), Object(r.jsx)(v.a, {
                                    ref: t,
                                    data: p.data,
                                    width: h.e,
                                    height: h.d,
                                    density: h.f,
                                    hidden: p.hidden,
                                    eraserAlpha: !0,
                                    notes: I,
                                    cache: !p.animate
                                }), !p.hidden && Object(r.jsx)(v.a, {
                                    data: S,
                                    width: h.e,
                                    height: h.d,
                                    density: h.f,
                                    notes: !0
                                }), p.hidden && Object(r.jsx)(F, {
                                    width: h.e,
                                    height: h.d,
                                    density: h.f,
                                    tool: i,
                                    thickness: l
                                }), !p.disabled && !p.mobile && Object(r.jsx)(y, {
                                    width: h.e,
                                    height: h.d,
                                    thickness: [h.hc, h.lc, h.dc, h.gc, h.jc].includes(i) ? 2 : i != h.fc ? l : 2 * l,
                                    density: h.f,
                                    hidden: p.hidden
                                })]
                            }), p.preview && Object(r.jsxs)("div", {
                                className: c.a.dynamic([
                                    ["3446129566", [h.g, h.g, .2 * h.e, .2 * h.d]]
                                ]) + " preview",
                                children: [Object(r.jsx)("canvas", {
                                    ref: m,
                                    width: h.e * h.f,
                                    height: h.d * h.f,
                                    className: c.a.dynamic([
                                        ["3446129566", [h.g, h.g, .2 * h.e, .2 * h.d]]
                                    ])
                                }), Object(r.jsx)("div", {
                                    ref: w,
                                    className: c.a.dynamic([
                                        ["3446129566", [h.g, h.g, .2 * h.e, .2 * h.d]]
                                    ])
                                })]
                            }), Object(r.jsx)(c.a, {
                                id: "3446129566",
                                dynamic: [h.g, h.g, .2 * h.e, .2 * h.d],
                                children: [".drawingContainer.__jsx-style-dynamic-selector{position:relative;}", ".preview.__jsx-style-dynamic-selector{display:none;}", "@media (max-width:640px){.drawingContainer.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.drawingContainer.__jsx-style-dynamic-selector canvas{height:100% !important;width:auto;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);border-left:".concat(h.g, "px solid #301a6b;border-right:")
                                    .concat(h.g, "px solid #301a6b;}.preview.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:absolute;top:10px;right:10px;border:1px solid #000;width:")
                                    .concat(.2 * h.e, "px;height:")
                                    .concat(.2 * h.d, "px;overflow:hidden;}.preview.__jsx-style-dynamic-selector>canvas.__jsx-style-dynamic-selector{width:100%;height:100%;}.preview.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:100%;width:50px;border:1px solid #6e46d5;box-sizing:border-box;box-shadow:0 0 0 1px rgba(255,255,255,.6);}}")
                                ]
                            })]
                        })
                    }), (function(e) {
                        return {
                            lastDraw: e.data.lastDraw,
                            background: e.data.background,
                            mobile: e.mobile,
                            scale: e.scale,
                            hidden: e.data.configs.visible == h.zc,
                            animate: e.data.configs.animate == h.b
                        }
                    })),
                    A = [
                        [h.kc, "pen", 0],
                        [h.fc, "ers", 0],
                        [h.mc, "reb", 0],
                        [h.ec, "ellb", 0],
                        [h.lc, "rec", 1],
                        [h.dc, "ell", 1],
                        [h.ic, "lin", 0],
                        [h.hc, "fil", 1],
                        [h.gc, "dropper", 2],
                        [h.jc, "note", 2]
                    ];
                var R = function(e) {
                        return Object(r.jsxs)("div", {
                            className: "jsx-2643802174 " + (x()("tools", {
                                disabled: e.disabled,
                                submenu: e.submenu,
                                fillblock: !1
                            }) || ""),
                            children: [Object(r.jsxs)("div", {
                                className: "jsx-2643802174",
                                children: [A.map((function(t) {
                                    var n = Object(w.a)(t, 3),
                                        o = n[0],
                                        i = n[1],
                                        s = n[2];
                                    return (0 == s || !e.fillBlock && 1 == s || e.fillBlock && 2 == s) && Object(r.jsx)("div", {
                                        onClick: function() {
                                            return e.onChange(o)
                                        },
                                        className: "jsx-2643802174 " + (x()("tool", i, {
                                            sel: o == e.value
                                        }) || "")
                                    }, o)
                                })), e.fillBlock && Object(r.jsx)("div", {
                                    onClick: function() {
                                        return e.onHide()
                                    },
                                    className: "jsx-2643802174 " + (x()("tool hide", {
                                        hideon: e.hide
                                    }) || "")
                                }), Object(r.jsx)("div", {
                                    onClick: function() {
                                        return e.onUndo()
                                    },
                                    className: "jsx-2643802174 tool undo"
                                }), Object(r.jsx)("div", {
                                    onClick: function() {
                                        return e.onRedo()
                                    },
                                    className: "jsx-2643802174 tool redo"
                                })]
                            }), Object(r.jsx)(c.a, {
                                id: "1966985517",
                                children: [".tools.jsx-2643802174{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".tools.jsx-2643802174>div.jsx-2643802174{padding:8px;width:106px;height:298px;border-radius:9px;border:2px rgba(255,142,175,.0) solid;background-color:rgba(94,25,51,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".tools.fillblock.jsx-2643802174>div.jsx-2643802174{height:238px;}", ".tool.jsx-2643802174{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;cursor:pointer;width:46px;height:50px;border:2px rgba(255,142,175,0.6) solid;border-radius:5px;margin:0 0 7px;}", ".tool.jsx-2643802174:hover{border-color:rgba(255,142,175,1);}", ".tool.jsx-2643802174:hover.jsx-2643802174:after{color:rgba(255,142,175,1);}", ".tool.jsx-2643802174:hover.jsx-2643802174:before{background-color:rgba(216,216,216,.15);}", ".tool.jsx-2643802174:before{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}", ".tool.block.jsx-2643802174{opacity:.5;}", ".tool.sel.jsx-2643802174,.tool.jsx-2643802174:active{border-color:#FFF;}", ".sel.jsx-2643802174:before,.sel.jsx-2643802174:hover.jsx-2643802174:before,.tool.jsx-2643802174:active.jsx-2643802174:before{background-color:rgba(216,216,216,.5);}", ".tool.sel.jsx-2643802174:after,.tool.sel.jsx-2643802174:hover.jsx-2643802174:after,.tool.jsx-2643802174:active.jsx-2643802174:after{color:#FFF;}", ".tool.jsx-2643802174:after{position:absolute;font-family:ico;font-size:25px;color:rgba(255,142,175,0.6);}", ".undo.jsx-2643802174,.redo.jsx-2643802174{margin:0;}", ".pen.jsx-2643802174:after{font-size:29px;content:'\\e905';}", ".ers.jsx-2643802174:after{font-size:30px;content:'\\e903';}", ".lin.jsx-2643802174:after{font-size:30px;content:'\\e902';}", ".reb.jsx-2643802174:after{content:'\\e90a';}", ".ellb.jsx-2643802174:after{content:'\\e90c';}", ".rec.jsx-2643802174:after{content:'\\e909';}", ".ell.jsx-2643802174:after{content:'\\e90b';}", ".fil.jsx-2643802174:after{font-size:29px;content:'\\e904';}", ".dropper.jsx-2643802174:after{font-size:31px;content:'\\e925';}", ".note.jsx-2643802174:after{content:'\\e92c';font-size:33px;}", ".hide.jsx-2643802174:after{content:'\\e92b';font-size:31px;}", ".hideon.jsx-2643802174:after{content:'\\e92a';}", ".undo.jsx-2643802174:after{content:'\\e901';}", ".redo.jsx-2643802174:after{content:'\\e900';}", ".disabled.jsx-2643802174>div.jsx-2643802174{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-2643802174 .tool.jsx-2643802174,.disabled.jsx-2643802174 .tool.jsx-2643802174:hover{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", ".disabled.jsx-2643802174 .tool.jsx-2643802174:after,.disabled.jsx-2643802174 .tool.jsx-2643802174:hover.jsx-2643802174:after{color:rgba(255,142,175,.3);}", ".disabled.jsx-2643802174 .tool.sel.jsx-2643802174:before,.disabled.jsx-2643802174 .tool.jsx-2643802174:active.jsx-2643802174:before,.disabled.jsx-2643802174 .tool.jsx-2643802174:hover.jsx-2643802174:before{display:none;}", "@media (max-width:640px){.tools.jsx-2643802174{position:absolute;bottom:108px;left:0;display:none;}.tools.submenu.jsx-2643802174{display:inherit;}.tools.jsx-2643802174>div.jsx-2643802174{padding:5px;width:96px;height:254px;border-width:0;background:transparent;}.tool.jsx-2643802174{width:42px;height:44px;border:2px #9C81CB solid;border-radius:4px;margin:0 0 3px;}.tool.jsx-2643802174:before{margin:1px;background-color:rgba(255,255,255,.75);}.tool.jsx-2643802174:after{color:#9C81CB;}.tool.jsx-2643802174:hover{border-color:#9C81CB;}.tool.jsx-2643802174:hover.jsx-2643802174:after{color:#FFF;}.tool.jsx-2643802174:hover.jsx-2643802174:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-2643802174,.tool.jsx-2643802174:active{border-color:#9C81CB;}.sel.jsx-2643802174:before,.sel.jsx-2643802174:hover.jsx-2643802174:before,.tool.jsx-2643802174:active.jsx-2643802174:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-2643802174:after,.tool.sel.jsx-2643802174:hover.jsx-2643802174:after,.tool.jsx-2643802174:active.jsx-2643802174:after{color:#FFF;}}"]
                            }), Object(r.jsx)(c.a, {
                                id: "3185328314",
                                children: ["@media (max-width:640px){.ar .tools{left:initial;right:0;}}"]
                            })]
                        })
                    },
                    N = (n("8cZr"), ["#000000", "#666666", "#0050CD", "#FFFFFF", "#AAAAAA", "#26C9FF", "#017420", "#990000", "#964112", "#11B03C", "#FF0013", "#FF7829", "#B0701C", "#99004E", "#CB5A57", "#FFC126", "#FF008F", "#FEAFA8", "#5A0089", "#7B1DFC"]);
                var M = function(e) {
                        var t = e.value,
                            n = e.marks,
                            o = e.disabled,
                            i = e.onChange;
                        return Object(r.jsxs)("div", {
                            className: "jsx-565188398 " + (x()("colors", {
                                disabled: o
                            }) || ""),
                            children: [Object(r.jsxs)("div", {
                                className: "jsx-565188398",
                                children: [Object(r.jsx)("section", {
                                    className: "jsx-565188398 marks",
                                    children: n.slice(0, 6)
                                        .map((function(e) {
                                            return Object(r.jsx)("div", {
                                                style: {
                                                    backgroundColor: e
                                                },
                                                onClick: o ? null : function() {
                                                    return i(e)
                                                },
                                                className: "jsx-565188398 " + (x()("color", {
                                                    sel: e == t,
                                                    mark: n.includes(e)
                                                }) || "")
                                            }, e)
                                        }))
                                }), n.length > 0 && Object(r.jsx)("hr", {
                                    className: "jsx-565188398"
                                }), Object(r.jsx)("section", {
                                    className: "jsx-565188398 colorslist",
                                    children: N.map((function(e) {
                                        return Object(r.jsx)("div", {
                                            style: {
                                                backgroundColor: e
                                            },
                                            onClick: o ? null : function() {
                                                return i(e)
                                            },
                                            className: "jsx-565188398 " + (x()("color", {
                                                sel: e == t,
                                                mark: n.includes(e)
                                            }) || "")
                                        }, e)
                                    }))
                                }), Object(r.jsx)("input", {
                                    disabled: o,
                                    type: "color",
                                    value: o ? "#AF3B4E" : t,
                                    onChange: function(e) {
                                        return i(e.target.value)
                                    },
                                    className: "jsx-565188398"
                                })]
                            }), Object(r.jsx)(c.a, {
                                id: "828843369",
                                children: [".colors.jsx-565188398{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".colors.jsx-565188398>div.jsx-565188398{padding:10px 0px 10px 8px;width:114px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".marks.jsx-565188398,.colorslist.jsx-565188398{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".color.jsx-565188398{border:2px solid #4F163A;width:28px;height:29px;border-radius:4px;cursor:pointer;margin:0 5px 7px 0;}", ".color.jsx-565188398:nth-of-type(19),.color.jsx-565188398:nth-of-type(20){display:none;}", "input.jsx-565188398{border:2px solid #4F163A;border-radius:5px;width:102px;height:52px;padding:0;-webkit-appearance:none;cursor:pointer;background:none;box-sizing:content-box;}", 'input[type="color"].jsx-565188398::-webkit-color-swatch-wrapper{padding:0;border-radius:4px;}', 'input[type="color"].jsx-565188398::-webkit-color-swatch{border:none;border-radius:4px;}', ".disabled.jsx-565188398>div.jsx-565188398{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-565188398 .color.jsx-565188398{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", "input.jsx-565188398:disabled{cursor:initial;border-color:rgba(255,142,175,.3);}", "hr.jsx-565188398{width:104px;border:none;border-top:2px solid rgba(255,142,175,.6);margin-bottom:7px;}", "@media (max-width:640px){input.jsx-565188398{display:none;}.colors.jsx-565188398{overflow:scroll;margin:0 5px;width:124px;height:52px;border-radius:4px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.disabled.jsx-565188398{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}.disabled.jsx-565188398>div.jsx-565188398{background-color:transparent;border-color:transparent;}.colors.jsx-565188398>div.jsx-565188398{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:auto;background-color:transparent;padding:0;border-radius:0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.marks.jsx-565188398{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,auto);height:48px;}.colorslist.jsx-565188398{min-width:242px;width:242px;}.color.jsx-565188398{border:1px solid #4F163A;width:18px;height:18px;border-radius:2px;margin:2px;}.color.jsx-565188398:nth-of-type(19),.color.jsx-565188398:nth-of-type(20){display:block;}.color.jsx-565188398:nth-of-type(1){-webkit-order:1;-ms-flex-order:1;order:1;}.color.jsx-565188398:nth-of-type(2){-webkit-order:2;-ms-flex-order:2;order:2;}.color.jsx-565188398:nth-of-type(3){-webkit-order:3;-ms-flex-order:3;order:3;}.color.jsx-565188398:nth-of-type(7){-webkit-order:4;-ms-flex-order:4;order:4;}.color.jsx-565188398:nth-of-type(8){-webkit-order:5;-ms-flex-order:5;order:5;}.color.jsx-565188398:nth-of-type(9){-webkit-order:6;-ms-flex-order:6;order:6;}.color.jsx-565188398:nth-of-type(13){-webkit-order:7;-ms-flex-order:7;order:7;}.color.jsx-565188398:nth-of-type(14){-webkit-order:8;-ms-flex-order:8;order:8;}.color.jsx-565188398:nth-of-type(15){-webkit-order:9;-ms-flex-order:9;order:9;}.color.jsx-565188398:nth-of-type(19){-webkit-order:10;-ms-flex-order:10;order:10;}.color.jsx-565188398:nth-of-type(4){-webkit-order:11;-ms-flex-order:11;order:11;}.color.jsx-565188398:nth-of-type(5){-webkit-order:12;-ms-flex-order:12;order:12;}.color.jsx-565188398:nth-of-type(6){-webkit-order:13;-ms-flex-order:13;order:13;}.color.jsx-565188398:nth-of-type(10){-webkit-order:14;-ms-flex-order:14;order:14;}.color.jsx-565188398:nth-of-type(11){-webkit-order:15;-ms-flex-order:15;order:15;}.color.jsx-565188398:nth-of-type(12){-webkit-order:16;-ms-flex-order:16;order:16;}.color.jsx-565188398:nth-of-type(16){-webkit-order:17;-ms-flex-order:17;order:17;}.color.jsx-565188398:nth-of-type(17){-webkit-order:18;-ms-flex-order:18;order:18;}.color.jsx-565188398:nth-of-type(18){-webkit-order:19;-ms-flex-order:19;order:19;}.color.jsx-565188398:nth-of-type(20){-webkit-order:20;-ms-flex-order:20;order:20;}.sel.jsx-565188398{box-shadow:0 0 0 1px rgba(255,255,255,.6);}.disabled.jsx-565188398>div.jsx-565188398 .sel.jsx-565188398{box-shadow:none;}hr.jsx-565188398{width:2px;height:40px;background-color:rgba(255,142,175,.6);border:none;margin:0 5px;}}"]
                            }), Object(r.jsx)(c.a, {
                                id: "3640890862",
                                children: [".ar .colors>div{-webkit-box-pack:end !important;-webkit-justify-content:flex-end !important;-ms-flex-pack:end !important;justify-content:flex-end !important;}", ".ar .colorslist{-webkit-box-pack:end !important;-webkit-justify-content:flex-end !important;-ms-flex-pack:end !important;justify-content:flex-end !important;}"]
                            })]
                        })
                    },
                    D = [2, 6, 10, 14, 18];
                var B = function(e) {
                        return Object(r.jsxs)("div", {
                            className: "jsx-340028725 " + (x()("options", {
                                disabled: e.disabled,
                                submenu: e.submenu
                            }) || ""),
                            children: [Object(r.jsx)("div", {
                                className: "jsx-340028725",
                                children: D.map((function(t) {
                                    return Object(r.jsx)("div", {
                                        onClick: e.disabled ? null : function() {
                                            return e.onChangeThickness(t)
                                        },
                                        className: "jsx-340028725 " + (x()("thickness", {
                                            sel: e.thickness == t
                                        }) || "")
                                    }, t)
                                }))
                            }), Object(r.jsxs)("div", {
                                className: "jsx-340028725 bxopacity",
                                children: [Object(r.jsx)("span", {
                                    className: "jsx-340028725"
                                }), Object(r.jsx)("input", {
                                    disabled: e.disabled,
                                    type: "range",
                                    value: e.opacity,
                                    min: "0.1",
                                    max: "1",
                                    step: "0.1",
                                    onChange: function(t) {
                                        return e.onChangeOpacity(t.target.value)
                                    },
                                    className: "jsx-340028725"
                                }), Object(r.jsx)("span", {
                                    className: "jsx-340028725"
                                })]
                            }), Object(r.jsx)(c.a, {
                                id: "2464861888",
                                children: [".options.jsx-340028725{width:560px;height:54px;padding:3px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".options.jsx-340028725>div.jsx-340028725{padding:0 15px;-webkit-flex:1;-ms-flex:1;flex:1;border:2px rgba(255,142,175,.6) solid;border-radius:9px;margin:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".thickness.jsx-340028725{cursor:pointer;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px rgba(255,142,175,0.6) solid;width:28px;height:28px;border-radius:100%;}", ".thickness.jsx-340028725:hover{border-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.15);}", ".thickness.jsx-340028725:before{position:absolute;content:'';background-color:rgba(255,142,175,0.6);border-radius:100%;}", ".thickness.jsx-340028725:after{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;border-radius:50%;}", ".thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#FFF;}", ".thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#FFF;}", ".thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.5);}", ".thickness.jsx-340028725:nth-child(1):before{width:2px;height:2px;}", ".thickness.jsx-340028725:nth-child(2):before{width:6px;height:6px;}", ".thickness.jsx-340028725:nth-child(3):before{width:10px;height:10px;}", ".thickness.jsx-340028725:nth-child(4):before{width:14px;height:14px;}", ".thickness.jsx-340028725:nth-child(5):before{width:18px;height:18px;}", ".bxopacity.jsx-340028725 span.jsx-340028725{width:18px;height:18px;border:2px #FFF solid;border-radius:50%;}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:rgba(255,255,255,.34);}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:#FFF;}", "input[type=range].jsx-340028725{background:none;-webkit-appearance:none;width:170px;}", "input[type=range].jsx-340028725:focus{outline:none;}", "input[type=range].jsx-340028725::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-runnable-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-webkit-slider-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;-webkit-appearance:none;margin-top:-8px;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-webkit-slider-runnable-track{background:#4F163A;}", "input[type=range].jsx-340028725::-moz-range-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-moz-range-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-moz-range-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-thumb{display:none;}", "input[type=range].jsx-340028725::-ms-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;background:transparent;border-color:transparent;color:transparent;}", "input[type=range].jsx-340028725::-ms-fill-lower{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-fill-lower{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-ms-fill-upper{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725::-ms-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-ms-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-lower{background:#4F163A;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-upper{background:#4F163A;}", ".disabled.jsx-340028725{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725>div.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725:hover{cursor:initial;border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .thickness.sel.jsx-340028725:after,.disabled.jsx-340028725 .thickness.sel.jsx-340028725:hover.jsx-340028725:after,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:after{display:none;}", ".disabled.jsx-340028725 .thickness.jsx-340028725:before,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725{border-color:rgba(255,142,175,0);background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,0);}", "@media (max-width:640px){.options.jsx-340028725{width:90px;height:197px;border-radius:0;border-width:0;background:transparent;display:none;}.options.submenu.jsx-340028725{display:inherit;}.options.jsx-340028725>div.jsx-340028725{background-color:rgba(255,255,255,.75);padding:5px;border-color:#9C81CB;border-radius:5px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100% - 10px);margin:0 4px;}.thickness.jsx-340028725{border-color:#9C81CB;width:26px;height:26px;}.thickness.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover{border-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#9C81CB;}.thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.bxopacity.jsx-340028725{width:30px;}.bxopacity.jsx-340028725 span.jsx-340028725{border-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:transparent;}input[type=range].jsx-340028725{width:120px;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}input[type=range].jsx-340028725::-webkit-slider-runnable-track{background:#9C81CB;}input[type=range].jsx-340028725::-webkit-slider-thumb{border:2px #9C81CB solid;background:#FFF;}input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#9C81CB;}}"]
                            }), Object(r.jsx)(c.a, {
                                id: "4060568284",
                                children: ["@media (max-width:640px){.ar .options .bxopacity span:nth-of-type(1){background-color:transparent;}.ar .options .bxopacity span:nth-of-type(2){background-color:#9C81CB;}}"]
                            })]
                        })
                    },
                    z = n("cXB8"),
                    H = n("6VPp"),
                    U = n("umcP"),
                    X = n("WZCv");
                var G = function(e) {
                    return Object(r.jsxs)("div", {
                        className: "jsx-1332607644 toolsmobile",
                        children: [Object(r.jsx)("button", {
                            onClick: function() {
                                return e.onChange(h.Xb)
                            },
                            disabled: e.disabled,
                            className: "jsx-1332607644 " + ("tool " + ["pen", "ers", "lin", "reb", "ellb", "rec", "ell", "fil", "dropper", "note"][e.value - 1] || !1)
                        }), Object(r.jsx)("button", {
                            onClick: function() {
                                return e.onChange(h.Wb)
                            },
                            disabled: e.disabled,
                            className: "jsx-1332607644 opacity"
                        }), e.children, Object(r.jsx)(c.a, {
                            id: "2931951776",
                            children: [".toolsmobile.jsx-1332607644{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "button.jsx-1332607644{margin:0 0 0 5px;width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;color:#481D92;}", "button.jsx-1332607644:active{-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", "button.jsx-1332607644:disabled{opacity:.47;cursor:none;}", "button.jsx-1332607644:nth-of-type(1){margin:0;}", ".toolsmobile.jsx-1332607644>.small{width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;padding:0;}", ".toolsmobile.jsx-1332607644>.small:active{margin:0;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", ".toolsmobile.jsx-1332607644>.small strong{display:none;}", ".toolsmobile.jsx-1332607644>.small .pencil{width:27px;height:28px;background-image:url(/images/edit_m.svg);}", ".toolsmobile.jsx-1332607644>.small .ready{width:27px;height:22px;background-image:url(/images/check_m.svg);}", ".opacity.jsx-1332607644:before{content:'\\e913';font-family:ico;font-size:30px;}", ".tool.jsx-1332607644:after{font-family:ico;font-size:25px;}", ".pen.jsx-1332607644:after{font-size:29px;content:'\\e905';}", ".ers.jsx-1332607644:after{font-size:30px;content:'\\e903';}", ".lin.jsx-1332607644:after{font-size:30px;content:'\\e902';}", ".reb.jsx-1332607644:after{content:'\\e90a';}", ".ellb.jsx-1332607644:after{content:'\\e90c';}", ".rec.jsx-1332607644:after{content:'\\e909';}", ".ell.jsx-1332607644:after{content:'\\e90b';}", ".fil.jsx-1332607644:after{font-size:29px;content:'\\e904';}", ".dropper.jsx-1332607644:after{font-size:34px;content:'\\e925';}", ".note.jsx-1332607644:after{content:'\\e92c';font-size:35px;}"]
                        }), Object(r.jsx)(c.a, {
                            id: "3760199605",
                            children: [".ar .toolsmobile button{margin:0;}", ".ar .toolsmobile button:nth-of-type(2){margin-right:5px;}"]
                        })]
                    })
                };

                function W() {
                    var e = Object(i.a)(["drawtxt4"]);
                    return W = function() {
                        return e
                    }, e
                }

                function V() {
                    var e = Object(i.a)(["drawtxt3"]);
                    return V = function() {
                        return e
                    }, e
                }

                function q() {
                    var e = Object(i.a)(["drawtxt2"]);
                    return q = function() {
                        return e
                    }, e
                }

                function Y() {
                    var e = Object(i.a)(["drawtxt1"]);
                    return Y = function() {
                        return e
                    }, e
                }

                function J() {
                    var e = Object(i.a)(["drawtxt6"]);
                    return J = function() {
                        return e
                    }, e
                }

                function K() {
                    var e = Object(i.a)(["drawtxt5"]);
                    return K = function() {
                        return e
                    }, e
                }

                function Z() {
                    var e = Object(i.a)(["drawtxt1"]);
                    return Z = function() {
                        return e
                    }, e
                }
                var Q = !0;
                t.default = Object(b.c)((function(e) {
                    var t = Object(l.e)(),
                        n = Object(p.useRouter)(),
                        i = Object(d.useRef)(e.turnNum),
                        a = Object(d.useRef)(e.previous),
                        u = Object(d.useRef)(e.lastDraw),
                        f = Object(d.useRef)(e.drawingTools),
                        b = Object(d.useState)(!1),
                        g = b[0],
                        j = b[1],
                        v = Object(d.useState)(e.draw),
                        y = v[0],
                        w = v[1],
                        k = Object(d.useState)(1),
                        _ = k[0],
                        E = k[1],
                        O = Object(d.useState)(e.drawingTools ? e.drawingTools.base.color : "#000000"),
                        S = O[0],
                        T = O[1],
                        C = Object(d.useState)(1),
                        I = C[0],
                        L = C[1],
                        F = Object(d.useState)(e.drawingTools ? e.drawingTools.base.thickness : 6),
                        A = F[0],
                        N = F[1],
                        D = Object(d.useState)(e.mirror),
                        Q = D[0],
                        $ = D[1],
                        ee = Object(d.useState)(h.Vb),
                        te = ee[0],
                        ne = ee[1],
                        re = Object(d.useState)(0),
                        oe = re[0],
                        ie = re[1],
                        se = Object(d.useState)(!1),
                        ae = se[0],
                        ce = se[1],
                        le = Object(d.useRef)([]),
                        de = Object(d.useRef)([]),
                        ue = Object(d.useRef)(),
                        pe = Object(d.useRef)(),
                        fe = Object(d.useRef)();

                    function xe(e) {
                        T(e), ne(h.Vb)
                    }

                    function be() {
                        if (!Q) {
                            var e = y.slice()
                                .reverse(),
                                t = _ != h.jc ? e.findIndex((function(e) {
                                    return e[0] != h.jc
                                })) : e.findIndex((function(e) {
                                    return e[0] == h.jc
                                }));
                            if (-1 != t) {
                                var n = _ != h.jc ? le : de,
                                    r = y.slice(),
                                    o = r.splice(r.length - t - 1, 1)[0];
                                n.current.push(o), w(r), je(h.i, o[1])
                            }
                            ne(h.Vb)
                        }
                    }

                    function he() {
                        var e = _ != h.jc ? le : de;
                        if (!Q && e.current.length) {
                            var t = e.current.pop();
                            w((function(e) {
                                return [].concat(Object(s.a)(e), [t])
                            })), ne(h.Vb), je(h.h, t)
                        }
                    }

                    function me(e) {
                        Q || (E(e), ne(h.Vb))
                    }

                    function ge(e) {
                        $(e), ne(h.Vb)
                    }

                    function je(t, n) {
                        i.current == e.turnNum && e.emit(h.fb, {
                            t: i.current,
                            d: t,
                            v: n
                        })
                    }
                    Object(d.useEffect)((function() {
                        document.body.style.backgroundImage = "linear-gradient(215deg, rgba(153,16,80,1) 0%, rgba(231,77,78,1) 85%)", e.socket ? (n.prefetch("/write"), n.prefetch("/memory"), n.prefetch("/book"), e.previous && e.previous.type == h.xc || m.a.play("yourTurn", !1, .7)) : n.replace("/")
                    }), []), Object(d.useEffect)((function() {
                        if (0 != oe && ie(0), e.mobile) {
                            var t = 0,
                                n = 0,
                                r = 0,
                                o = -window.innerWidth / 2 + 92,
                                i = window.innerWidth / 2 - 92,
                                s = 0,
                                a = !1,
                                c = function(n) {
                                    n.preventDefault(), t = n.touches ? n.touches[0].clientX : n.clientX, document.addEventListener("mousemove", l, !1), document.addEventListener("touchmove", l, !1), document.addEventListener("mouseup", d, !1), document.addEventListener("mousecancel", d, !1), document.addEventListener("touchend", d, !1), document.addEventListener("touchcancel", d, !1), e.hidden || ce(!0), ne(h.Vb), a = !1
                                },
                                l = function(e) {
                                    e.stopPropagation(), n = e.touches ? e.touches[0].clientX : e.clientX, (a || Math.abs(n - t) > 10) && (a = !0, (s = r + (n - t)) < o ? s = o : s > i && (s = i), fe.current.style.transform = "translateX(".concat(s, "px)"), ie(s / i))
                                },
                                d = function e() {
                                    r = s, document.removeEventListener("mousemove", l, !1), document.removeEventListener("touchmove", l, !1), document.removeEventListener("mouseup", e, !1), document.removeEventListener("mousecancel", e, !1), document.removeEventListener("touchend", e, !1), document.removeEventListener("touchcancel", e, !1), ce(!1)
                                };
                            fe.current.addEventListener("mousedown", c, !1), fe.current.addEventListener("touchstart", c, !1)
                        }
                    }), [e.mobile]), Object(d.useEffect)((function() {
                        e.turnNum == i.current && w(e.draw)
                    }), [e.draw]), Object(d.useEffect)((function() {
                        var e = function(e) {
                            if (e && e.keyCode) switch (e.keyCode) {
                                case 66:
                                    me(h.kc);
                                    break;
                                case 69:
                                    me(h.fc);
                                    break;
                                case 90:
                                    (e.ctrlKey || e.metaKey) && (e.shiftKey ? he() : be())
                            }
                        };
                        return document.addEventListener("keydown", e, !1),
                            function() {
                                document.removeEventListener("keydown", e, !1)
                            }
                    }), [Q, y, _]);
                    var ve = a.current && a.current.type == h.yc,
                        ye = t(Z());
                    return ye = e.bgMode && 0 == i.current ? e.complementMode ? t(J()) : t(K()) : !e.animate || ve ? ve || e.onlyDraw || e.bgMode ? t(Y()) : t(q()) : 0 == i.current && !e.bgMode || 1 == i.current && e.bgMode ? t(V()) : t(W()), Object(r.jsxs)("div", {
                        className: "jsx-2849961842 draw",
                        children: [Object(r.jsx)(z.a, {
                            color: e.mobile ? "#481D92" : "#C02F4E"
                        }), Object(r.jsx)(H.a, {
                            value: h.ac
                        }), !e.mobile && Object(r.jsx)(M, {
                            disabled: Q,
                            onChange: xe,
                            value: S,
                            marks: f.current ? f.current.colorList : []
                        }), Object(r.jsxs)("div", {
                            className: "jsx-2849961842 center",
                            children: [Object(r.jsx)(X.a, {
                                draw: !ve,
                                subtitle: ye,
                                title: ve ? a.current.data : "",
                                dark: e.hidden,
                                mirror: e.mirror,
                                watermark: !g && (e.hidden || !u.current),
                                canvasRef: ue,
                                canvasBgRef: pe,
                                children: Object(r.jsx)(P, {
                                    canvasRef: ue,
                                    canvasBgRef: pe,
                                    data: y,
                                    setData: w,
                                    color: S,
                                    thickness: A,
                                    opacity: I,
                                    tool: _,
                                    hideLast: g,
                                    disabled: Q,
                                    move: oe,
                                    preview: ae,
                                    emit: je,
                                    onStart: function(e) {
                                        ne(h.Vb), _ != h.gc ? _ != h.jc ? le.current.splice(0) : de.current.splice(0) : (xe(e.color), L(e.opacity))
                                    }
                                })
                            }), Object(r.jsxs)("div", {
                                className: "jsx-2849961842 bottom",
                                children: [Object(r.jsx)(B, {
                                    disabled: Q,
                                    onChangeThickness: function(e) {
                                        N(e), ne(h.Vb)
                                    },
                                    onChangeOpacity: function(e) {
                                        return L(e)
                                    },
                                    thickness: A,
                                    opacity: I,
                                    submenu: te == h.Wb,
                                    marks: f.current ? f.current.thicknessList : []
                                }), !e.mobile && Object(r.jsx)(U.a, {
                                    disabled: e.mirror || !y.length,
                                    onChange: ge
                                })]
                            })]
                        }), e.mobile && Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)("div", {
                                className: "jsx-2849961842 " + (x()("drawingScroll", {
                                    preview: ae
                                }) || ""),
                                children: Object(r.jsx)("div", {
                                    ref: fe,
                                    style: {
                                        left: "50%"
                                    },
                                    className: "jsx-2849961842"
                                })
                            }), Object(r.jsxs)(G, {
                                disabled: Q,
                                value: _,
                                onChange: function(e) {
                                    Q || ne((function(t) {
                                        return t == e ? h.Vb : e
                                    }))
                                },
                                children: [Object(r.jsx)(M, Object(o.a)({
                                    disabled: Q,
                                    marks: f.current ? f.current.colorList : [],
                                    onChange: xe,
                                    value: S
                                }, "marks", f.current ? f.current.colorList : [])), Object(r.jsx)(U.a, {
                                    disabled: e.mirror || !y.length,
                                    onChange: ge
                                })]
                            })]
                        }), Object(r.jsx)(R, {
                            disabled: Q,
                            onChange: me,
                            value: _,
                            onUndo: be,
                            onRedo: he,
                            onHide: function() {
                                Q || (j((function(e) {
                                    return !e
                                })), ne(h.Vb))
                            },
                            hide: g,
                            submenu: te == h.Xb,
                            fillBlock: e.animate && (!e.bgMode || 0 != i.current)
                        }), Object(r.jsx)(c.a, {
                            id: "104288241",
                            children: [".draw.jsx-2849961842{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".center.jsx-2849961842{padding:35px 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".bottom.jsx-2849961842{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "@media (max-width:640px){.draw.jsx-2849961842{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.center.jsx-2849961842{-webkit-flex:1;-ms-flex:1;flex:1;padding:0;}.draw.jsx-2849961842>.step,.draw.jsx-2849961842>.time{top:10px;}.draw.jsx-2849961842 .center.jsx-2849961842>.book{border-radius:0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;width:auto;height:auto;-webkit-flex:1;-ms-flex:1;flex:1;box-shadow:none;}.draw.jsx-2849961842 .center.jsx-2849961842>.book:before{display:none;}.draw.jsx-2849961842 .center.jsx-2849961842>.book .header{height:65px;}.draw.jsx-2849961842 .center.jsx-2849961842>.book .header h3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;padding:0 68px;}.draw.jsx-2849961842 .center.jsx-2849961842>.book .core{margin:0 0 5px;border-radius:0;box-shadow:none;}.bottom.jsx-2849961842{position:absolute;left:0;bottom:116px;height:auto;width:auto;}.drawingScroll.jsx-2849961842{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:rgba(94,25,51,.5);height:23px;}.drawingScroll.jsx-2849961842>div.jsx-2849961842{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;border-radius:4px;width:180px;height:16px;margin-left:-90px;margin-top:3px;}.drawingScroll.preview.jsx-2849961842>div.jsx-2849961842{background-color:#CBB6E9;}.drawingScroll.jsx-2849961842>div.jsx-2849961842:before{content:'';width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #481D92;margin:0 2px;}.drawingScroll.jsx-2849961842>div.jsx-2849961842:after{content:'';width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #481D92;margin:0 2px;}}"]
                        }), Object(r.jsx)(c.a, {
                            id: "273907530",
                            children: [".ar .draw .book .core{direction:initial;}", "@media (max-width:640px){.ar .draw .bottom{left:initial;right:0px;}}"]
                        })]
                    })
                }), (function(e) {
                    return {
                        socket: e.socket,
                        previous: e.data.previous,
                        lastDraw: e.data.lastDraw,
                        background: e.data.background,
                        drawingTools: e.data.drawingTools,
                        emit: e.emit,
                        mobile: e.mobile,
                        scale: e.scale,
                        hidden: e.data.configs.visible == h.zc,
                        animate: e.data.configs.animate == h.b,
                        onlyDraw: [h.z, h.t, h.C].includes(e.data.configs.first),
                        bgMode: [h.u, h.w].includes(e.data.configs.first),
                        complementMode: e.data.configs.mode == h.L,
                        turnNum: e.data.turnNum,
                        draw: e.data.draw,
                        setData: e.setData,
                        mirror: e.data.mirror
                    }
                }))
            },
            PRL6: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.isBlockedPage = function(e) {
                    return r.BLOCKED_PAGES.includes(e)
                }, t.cleanAmpPath = function(e) {
                    e.match(/\?amp=(y|yes|true|1)/) && (e = e.replace(/\?amp=(y|yes|true|1)&?/, "?"));
                    e.match(/&amp=(y|yes|true|1)/) && (e = e.replace(/&amp=(y|yes|true|1)/, ""));
                    return e = e.replace(/\?$/, "")
                };
                var r = n("w7wo")
            },
            T0f4: function(e, t) {
                function n(t) {
                    return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, n(t)
                }
                e.exports = n
            },
            VDXt: function(e, t, n) {
                "use strict";
                var r = n("oI91"),
                    o = n("vJKn"),
                    i = n("qVT1"),
                    s = n("/GRZ"),
                    a = n("i2R6"),
                    c = n("48fX"),
                    l = n("tCBg"),
                    d = n("T0f4"),
                    u = n("CPM0"),
                    p = n("mPvQ");

                function f(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t)
                                .enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function x(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? f(Object(n), !0)
                            .forEach((function(t) {
                                r(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n))
                            .forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                    }
                    return e
                }

                function b(e) {
                    var t = function() {
                        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = d(e);
                        if (t) {
                            var o = d(this)
                                .constructor;
                            n = Reflect.construct(r, arguments, o)
                        } else n = r.apply(this, arguments);
                        return l(this, n)
                    }
                }
                t.__esModule = !0, t.Html = A, t.Main = N, t.NextScript = t.Head = t.default = void 0;
                var h = S(n("17x9")),
                    m = function(e) {
                        if (e && e.__esModule) return e;
                        if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                            default: e
                        };
                        var t = O();
                        if (t && t.has(e)) return t.get(e);
                        var n = {},
                            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if (Object.prototype.hasOwnProperty.call(e, o)) {
                                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                            } n.default = e, t && t.set(e, n);
                        return n
                    }(n("q1tI")),
                    g = S(n("DTay")),
                    j = n("w7wo"),
                    v = n("nRxi"),
                    y = n("g/15");
                t.DocumentContext = y.DocumentContext, t.DocumentInitialProps = y.DocumentInitialProps, t.DocumentProps = y.DocumentProps;
                var w = n("teXF"),
                    k = n("PRL6"),
                    _ = n("AXZJ"),
                    E = S(n("24z6"));

                function O() {
                    if ("function" !== typeof WeakMap) return null;
                    var e = new WeakMap;
                    return O = function() {
                        return e
                    }, e
                }

                function S(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function T(e, t, n) {
                    var r = (0, w.getPageFiles)(e, "/_app"),
                        o = n ? [] : (0, w.getPageFiles)(e, t);
                    return {
                        sharedFiles: r,
                        pageFiles: o,
                        allFiles: p(new Set([].concat(p(r), p(o))))
                    }
                }

                function C(e, t) {
                    var n = e.assetPrefix,
                        r = e.buildManifest,
                        o = e.devOnlyCacheBusterQueryString,
                        i = e.disableOptimizedLoading;
                    return r.polyfillFiles.filter((function(e) {
                            return e.endsWith(".js") && !e.endsWith(".module.js")
                        }))
                        .map((function(e) {
                            return m.default.createElement("script", {
                                key: e,
                                defer: !i,
                                nonce: t.nonce,
                                crossOrigin: t.crossOrigin || void 0,
                                noModule: !0,
                                src: "".concat(n, "/_next/")
                                    .concat(e)
                                    .concat(o)
                            })
                        }))
                }

                function I(e, t) {
                    var n = e.scriptLoader,
                        r = e.disableOptimizedLoading;
                    return (n.beforeInteractive || [])
                        .map((function(e) {
                            e.strategy;
                            var n = u(e, ["strategy"]);
                            return m.default.createElement("script", Object.assign({}, n, {
                                defer: !r,
                                nonce: t.nonce,
                                crossOrigin: t.crossOrigin || void 0
                            }))
                        }))
                }

                function L(e, t, n) {
                    var r = e.dynamicImports,
                        o = e.assetPrefix,
                        i = e.isDevelopment,
                        s = e.devOnlyCacheBusterQueryString,
                        a = e.disableOptimizedLoading;
                    return r.map((function(e) {
                        return !e.endsWith(".js") || n.allFiles.includes(e) ? null : m.default.createElement("script", {
                            async: !i && a,
                            defer: !a,
                            key: e,
                            src: "".concat(o, "/_next/")
                                .concat(encodeURI(e))
                                .concat(s),
                            nonce: t.nonce,
                            crossOrigin: t.crossOrigin || void 0
                        })
                    }))
                }

                function F(e, t, n) {
                    var r, o = e.assetPrefix,
                        i = e.buildManifest,
                        s = e.isDevelopment,
                        a = e.devOnlyCacheBusterQueryString,
                        c = e.disableOptimizedLoading,
                        l = n.allFiles.filter((function(e) {
                            return e.endsWith(".js")
                        })),
                        d = null == (r = i.lowPriorityFiles) ? void 0 : r.filter((function(e) {
                            return e.endsWith(".js")
                        }));
                    return [].concat(p(l), p(d))
                        .map((function(e) {
                            return m.default.createElement("script", {
                                key: e,
                                src: "".concat(o, "/_next/")
                                    .concat(encodeURI(e))
                                    .concat(a),
                                nonce: t.nonce,
                                async: !s && c,
                                defer: !c,
                                crossOrigin: t.crossOrigin || void 0
                            })
                        }))
                }
                var P = function(e) {
                    c(n, e);
                    var t = b(n);

                    function n() {
                        return s(this, n), t.apply(this, arguments)
                    }
                    return a(n, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement(A, null, m.default.createElement(R, null), m.default.createElement("body", null, m.default.createElement(N, null), m.default.createElement(M, null)))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            var e = i(o.mark((function e(t) {
                                var n, r, i, s, a;
                                return o.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = function(e) {
                                                return function(t) {
                                                    return m.default.createElement(e, t)
                                                }
                                            }, e.next = 3, t.renderPage({
                                                enhanceApp: n
                                            });
                                        case 3:
                                            return r = e.sent, i = r.html, s = r.head, a = p((0, g.default)()), e.abrupt("return", {
                                                html: i,
                                                head: s,
                                                styles: a
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "renderDocument",
                        value: function(e, t) {
                            return m.default.createElement(v.DocumentContext.Provider, {
                                value: t
                            }, m.default.createElement(e, t))
                        }
                    }]), n
                }(m.Component);

                function A(e) {
                    var t = (0, m.useContext)(v.DocumentContext),
                        n = t.inAmpMode,
                        r = t.docComponentsRendered,
                        o = t.locale;
                    return r.Html = !0, m.default.createElement("html", Object.assign({}, e, {
                        lang: e.lang || o || void 0,
                        amp: n ? "" : void 0,
                        "data-ampdevmode": void 0
                    }))
                }
                t.default = P;
                var R = function(e) {
                    c(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        s(this, n);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(o)))
                            .context = void 0, e
                    }
                    return a(n, [{
                        key: "getCssLinks",
                        value: function(e) {
                            var t = this,
                                n = this.context,
                                r = n.assetPrefix,
                                o = n.devOnlyCacheBusterQueryString,
                                i = n.dynamicImports,
                                s = e.allFiles.filter((function(e) {
                                    return e.endsWith(".css")
                                })),
                                a = new Set(e.sharedFiles),
                                c = new Set([]),
                                l = Array.from(new Set(i.filter((function(e) {
                                    return e.endsWith(".css")
                                }))));
                            if (l.length) {
                                var d = new Set(s);
                                l = l.filter((function(e) {
                                    return !(d.has(e) || a.has(e))
                                })), c = new Set(l), s.push.apply(s, p(l))
                            }
                            var u = [];
                            return s.forEach((function(e) {
                                    var n = a.has(e);
                                    u.push(m.default.createElement("link", {
                                        key: "".concat(e, "-preload"),
                                        nonce: t.props.nonce,
                                        rel: "preload",
                                        href: "".concat(r, "/_next/")
                                            .concat(encodeURI(e))
                                            .concat(o),
                                        as: "style",
                                        crossOrigin: t.props.crossOrigin || void 0
                                    }));
                                    var i = c.has(e);
                                    u.push(m.default.createElement("link", {
                                        key: e,
                                        nonce: t.props.nonce,
                                        rel: "stylesheet",
                                        href: "".concat(r, "/_next/")
                                            .concat(encodeURI(e))
                                            .concat(o),
                                        crossOrigin: t.props.crossOrigin || void 0,
                                        "data-n-g": i ? void 0 : n ? "" : void 0,
                                        "data-n-p": i || n ? void 0 : ""
                                    }))
                                })), 0 === (u = this.makeStylesheetInert(u))
                                .length ? null : u
                        }
                    }, {
                        key: "getPreloadDynamicChunks",
                        value: function() {
                            var e = this,
                                t = this.context,
                                n = t.dynamicImports,
                                r = t.assetPrefix,
                                o = t.devOnlyCacheBusterQueryString;
                            return n.map((function(t) {
                                    return t.endsWith(".js") ? m.default.createElement("link", {
                                        rel: "preload",
                                        key: t,
                                        href: "".concat(r, "/_next/")
                                            .concat(encodeURI(t))
                                            .concat(o),
                                        as: "script",
                                        nonce: e.props.nonce,
                                        crossOrigin: e.props.crossOrigin || void 0
                                    }) : null
                                }))
                                .filter(Boolean)
                        }
                    }, {
                        key: "getPreloadMainLinks",
                        value: function(e) {
                            var t = this,
                                n = this.context,
                                r = n.assetPrefix,
                                o = n.devOnlyCacheBusterQueryString,
                                i = n.scriptLoader,
                                s = e.allFiles.filter((function(e) {
                                    return e.endsWith(".js")
                                }));
                            return [].concat(p((i.beforeInteractive || [])
                                .map((function(e) {
                                    return m.default.createElement("link", {
                                        key: e.src,
                                        nonce: t.props.nonce,
                                        rel: "preload",
                                        href: e.src,
                                        as: "script",
                                        crossOrigin: t.props.crossOrigin || void 0
                                    })
                                }))), p(s.map((function(e) {
                                return m.default.createElement("link", {
                                    key: e,
                                    nonce: t.props.nonce,
                                    rel: "preload",
                                    href: "".concat(r, "/_next/")
                                        .concat(encodeURI(e))
                                        .concat(o),
                                    as: "script",
                                    crossOrigin: t.props.crossOrigin || void 0
                                })
                            }))))
                        }
                    }, {
                        key: "getDynamicChunks",
                        value: function(e) {
                            return L(this.context, this.props, e)
                        }
                    }, {
                        key: "getPreNextScripts",
                        value: function() {
                            return I(this.context, this.props)
                        }
                    }, {
                        key: "getScripts",
                        value: function(e) {
                            return F(this.context, this.props, e)
                        }
                    }, {
                        key: "getPolyfillScripts",
                        value: function() {
                            return C(this.context, this.props)
                        }
                    }, {
                        key: "handleDocumentScriptLoaderItems",
                        value: function(e) {
                            var t = this.context.scriptLoader,
                                n = [],
                                r = [];
                            return m.default.Children.forEach(e, (function(e) {
                                if (e.type === E.default) {
                                    if ("beforeInteractive" === e.props.strategy) return void(t.beforeInteractive = (t.beforeInteractive || [])
                                        .concat([x({}, e.props)]));
                                    if (["lazyOnload", "afterInteractive"].includes(e.props.strategy)) return void n.push(e.props)
                                }
                                r.push(e)
                            })), this.context.__NEXT_DATA__.scriptLoader = n, r
                        }
                    }, {
                        key: "makeStylesheetInert",
                        value: function(e) {
                            var t = this;
                            return m.default.Children.map(e, (function(e) {
                                if ("link" === e.type && e.props.href && j.OPTIMIZED_FONT_PROVIDERS.some((function(t) {
                                        return e.props.href.startsWith(t)
                                    }))) {
                                    var n = x({}, e.props || {});
                                    return n["data-href"] = n.href, n.href = void 0, m.default.cloneElement(e, n)
                                }
                                return e.props && e.props.children && (e.props.children = t.makeStylesheetInert(e.props.children)), e
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this.context,
                                r = n.styles,
                                o = n.ampPath,
                                i = n.inAmpMode,
                                s = n.hybridAmp,
                                a = n.canonicalBase,
                                c = n.__NEXT_DATA__,
                                l = n.dangerousAsPath,
                                d = n.headTags,
                                u = n.unstable_runtimeJS,
                                f = n.unstable_JsPreload,
                                x = n.disableOptimizedLoading,
                                b = !1 === u,
                                h = !1 === f || !x;
                            this.context.docComponentsRendered.Head = !0;
                            var g = this.context.head,
                                j = [],
                                v = [];
                            g && (g.forEach((function(e) {
                                e && "link" === e.type && "preload" === e.props.rel && "style" === e.props.as ? j.push(e) : e && v.push(e)
                            })), g = j.concat(v));
                            var y = m.default.Children.toArray(this.props.children)
                                .filter(Boolean);
                            i || (y = this.makeStylesheetInert(y));
                            var w = !1,
                                _ = !1;
                            g = m.default.Children.map(g || [], (function(e) {
                                if (!e) return e;
                                var t = e.type,
                                    n = e.props;
                                if (i) {
                                    var r = "";
                                    if ("meta" === t && "viewport" === n.name ? r = 'name="viewport"' : "link" === t && "canonical" === n.rel ? _ = !0 : "script" === t && (n.src && n.src.indexOf("ampproject") < -1 || n.dangerouslySetInnerHTML && (!n.type || "text/javascript" === n.type)) && (r = "<script", Object.keys(n)
                                            .forEach((function(e) {
                                                r += " ".concat(e, '="')
                                                    .concat(n[e], '"')
                                            })), r += "/>"), r) return console.warn('Found conflicting amp tag "'.concat(e.type, '" with conflicting prop ')
                                        .concat(r, " in ")
                                        .concat(c.page, ". https://nextjs.org/docs/messages/conflicting-amp-tag")), null
                                } else "link" === t && "amphtml" === n.rel && (w = !0);
                                return e
                            }));
                            var E = Array.isArray(r) ? r : [];
                            if (i && r && r.props && Array.isArray(r.props.children)) {
                                var O = function(e) {
                                    var t, n;
                                    return null == e || null == (t = e.props) || null == (n = t.dangerouslySetInnerHTML) ? void 0 : n.__html
                                };
                                r.props.children.forEach((function(e) {
                                    Array.isArray(e) ? e.forEach((function(e) {
                                        return O(e) && E.push(e)
                                    })) : O(e) && E.push(e)
                                }))
                            }
                            var S = T(this.context.buildManifest, this.context.__NEXT_DATA__.page, i);
                            return m.default.createElement("head", this.props, this.context.isDevelopment && m.default.createElement(m.default.Fragment, null, m.default.createElement("style", {
                                    "data-next-hide-fouc": !0,
                                    "data-ampdevmode": i ? "true" : void 0,
                                    dangerouslySetInnerHTML: {
                                        __html: "body{display:none}"
                                    }
                                }), m.default.createElement("noscript", {
                                    "data-next-hide-fouc": !0,
                                    "data-ampdevmode": i ? "true" : void 0
                                }, m.default.createElement("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: "body{display:block}"
                                    }
                                }))), y, g, m.default.createElement("meta", {
                                    name: "next-head-count",
                                    content: m.default.Children.count(g || [])
                                        .toString()
                                }), i && m.default.createElement(m.default.Fragment, null, m.default.createElement("meta", {
                                    name: "viewport",
                                    content: "width=device-width,minimum-scale=1,initial-scale=1"
                                }), !_ && m.default.createElement("link", {
                                    rel: "canonical",
                                    href: a + (0, k.cleanAmpPath)(l)
                                }), m.default.createElement("link", {
                                    rel: "preload",
                                    as: "script",
                                    href: "https://cdn.ampproject.org/v0.js"
                                }), r && m.default.createElement("style", {
                                    "amp-custom": "",
                                    dangerouslySetInnerHTML: {
                                        __html: E.map((function(e) {
                                                return e.props.dangerouslySetInnerHTML.__html
                                            }))
                                            .join("")
                                            .replace(/\/\*# sourceMappingURL=.*\*\//g, "")
                                            .replace(/\/\*@ sourceURL=.*?\*\//g, "")
                                    }
                                }), m.default.createElement("style", {
                                    "amp-boilerplate": "",
                                    dangerouslySetInnerHTML: {
                                        __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
                                    }
                                }), m.default.createElement("noscript", null, m.default.createElement("style", {
                                    "amp-boilerplate": "",
                                    dangerouslySetInnerHTML: {
                                        __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
                                    }
                                })), m.default.createElement("script", {
                                    async: !0,
                                    src: "https://cdn.ampproject.org/v0.js"
                                })), !i && m.default.createElement(m.default.Fragment, null, !w && s && m.default.createElement("link", {
                                    rel: "amphtml",
                                    href: a + D(o, l)
                                }), this.getCssLinks(S), m.default.createElement("noscript", {
                                    "data-n-css": null != (t = this.props.nonce) ? t : ""
                                }), !b && !h && this.getPreloadDynamicChunks(), !b && !h && this.getPreloadMainLinks(S), !x && !b && this.getPolyfillScripts(), !x && !b && this.getPreNextScripts(), !x && !b && this.getDynamicChunks(S), !x && !b && this.getScripts(S), !1, !1, this.context.isDevelopment && m.default.createElement("noscript", {
                                    id: "__next_css__DO_NOT_USE__"
                                }), r || null), (e = m.default)
                                .createElement.apply(e, [m.default.Fragment, {}].concat(p(d || []))))
                        }
                    }]), n
                }(m.Component);

                function N() {
                    var e = (0, m.useContext)(v.DocumentContext),
                        t = e.inAmpMode,
                        n = e.html;
                    return e.docComponentsRendered.Main = !0, t ? m.default.createElement(m.default.Fragment, null, j.AMP_RENDER_TARGET) : m.default.createElement("div", {
                        id: "__next",
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })
                }
                t.Head = R, R.contextType = v.DocumentContext, R.propTypes = {
                    nonce: h.default.string,
                    crossOrigin: h.default.string
                };
                var M = function(e) {
                    c(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        s(this, n);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(o)))
                            .context = void 0, e
                    }
                    return a(n, [{
                        key: "getDynamicChunks",
                        value: function(e) {
                            return L(this.context, this.props, e)
                        }
                    }, {
                        key: "getPreNextScripts",
                        value: function() {
                            return I(this.context, this.props)
                        }
                    }, {
                        key: "getScripts",
                        value: function(e) {
                            return F(this.context, this.props, e)
                        }
                    }, {
                        key: "getPolyfillScripts",
                        value: function() {
                            return C(this.context, this.props)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.context,
                                r = t.assetPrefix,
                                o = t.inAmpMode,
                                i = t.buildManifest,
                                s = t.unstable_runtimeJS,
                                a = t.docComponentsRendered,
                                c = t.devOnlyCacheBusterQueryString,
                                l = t.disableOptimizedLoading,
                                d = !1 === s;
                            if (a.NextScript = !0, o) return null;
                            var u = T(this.context.buildManifest, this.context.__NEXT_DATA__.page, o);
                            return m.default.createElement(m.default.Fragment, null, !d && i.devFiles ? i.devFiles.map((function(t) {
                                return m.default.createElement("script", {
                                    key: t,
                                    src: "".concat(r, "/_next/")
                                        .concat(encodeURI(t))
                                        .concat(c),
                                    nonce: e.props.nonce,
                                    crossOrigin: e.props.crossOrigin || void 0
                                })
                            })) : null, d ? null : m.default.createElement("script", {
                                id: "__NEXT_DATA__",
                                type: "application/json",
                                nonce: this.props.nonce,
                                crossOrigin: this.props.crossOrigin || void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n.getInlineScriptSource(this.context)
                                }
                            }), l && !d && this.getPolyfillScripts(), l && !d && this.getPreNextScripts(), l && !d && this.getDynamicChunks(u), l && !d && this.getScripts(u))
                        }
                    }], [{
                        key: "getInlineScriptSource",
                        value: function(e) {
                            var t = e.__NEXT_DATA__;
                            try {
                                var n = JSON.stringify(t);
                                return (0, _.htmlEscapeJsonString)(n)
                            } catch (r) {
                                if (r.message.indexOf("circular structure")) throw new Error('Circular structure in "getInitialProps" result of page "'.concat(t.page, '". https://nextjs.org/docs/messages/circular-structure'));
                                throw r
                            }
                        }
                    }]), n
                }(m.Component);

                function D(e, t) {
                    return e || "".concat(t)
                        .concat(t.includes("?") ? "&" : "?", "amp=1")
                }
                t.NextScript = M, M.contextType = v.DocumentContext, M.propTypes = {
                    nonce: h.default.string,
                    crossOrigin: h.default.string
                }, M.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();'
            },
            dhJC: function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }
                n.d(t, "a", (function() {
                    return r
                }))
            },
            kG2m: function(e, t) {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
            },
            mPvQ: function(e, t, n) {
                var r = n("5fIB"),
                    o = n("rlHP"),
                    i = n("KckH"),
                    s = n("kG2m");
                e.exports = function(e) {
                    return r(e) || o(e) || i(e) || s()
                }
            },
            nRxi: function(e, t, n) {
                "use strict";
                var r;
                t.__esModule = !0, t.DocumentContext = void 0;
                var o = ((r = n("q1tI")) && r.__esModule ? r : {
                        default: r
                    })
                    .default.createContext(null);
                t.DocumentContext = o
            },
            nWF0: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    void 0 === e && (e = {});
                    return (0, i.flush)()
                        .map((function(t) {
                            var n = t[0],
                                r = t[1];
                            return o.default.createElement("style", {
                                id: "__" + n,
                                key: "__" + n,
                                nonce: e.nonce ? e.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })
                        }))
                }, t.flushToHTML = function(e) {
                    void 0 === e && (e = {});
                    return (0, i.flush)()
                        .reduce((function(t, n) {
                            var r = n[0],
                                o = n[1];
                            return t += '<style id="__' + r + '"' + (e.nonce ? ' nonce="' + e.nonce + '"' : "") + ">" + o + "</style>"
                        }), "")
                };
                var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                        default: r
                    },
                    i = n("3niX")
            },
            o1E3: function(e, t, n) {
                "use strict";
                n.d(t, "d", (function() {
                    return l
                })), n.d(t, "c", (function() {
                    return d
                })), n.d(t, "a", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return p
                }));
                var r = n("z7pX"),
                    o = n("xvhg"),
                    i = n("xEHj"),
                    s = n("YSmr");

                function a(e, t) {
                    var n;
                    if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" === typeof e) return c(e, t);
                                var n = Object.prototype.toString.call(e)
                                    .slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                            }(e)) || t && e && "number" === typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, s = !0,
                        a = !1;
                    return {
                        s: function() {
                            n = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = n.next();
                            return s = e.done, e
                        },
                        e: function(e) {
                            a = !0, i = e
                        },
                        f: function() {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function l(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = t.getBoundingClientRect(),
                        i = e.touches ? [e.touches[0].clientX, e.touches[0].clientY] : [e.clientX, e.clientY];
                    return [Math.round((i[0] - o.left + r) / n), Math.round((i[1] - o.top) / n)]
                }

                function d(e, t, n) {
                    for (var r = e.getImageData(t, n, 1, 1)
                            .data, o = r[3] / 255, i = r[0], s = r[1], a = (r[2] + 256 * s + 65536 * i)
                            .toString(16)
                            .toUpperCase(); a.length < 6;) a = "0" + a;
                    return {
                        color: "#" + a,
                        opacity: o
                    }
                }

                function u(e) {
                    var t, n = {
                            base: {
                                color: "#000000",
                                thickness: 6
                            }
                        },
                        r = [],
                        c = [],
                        l = a(e);
                    try {
                        for (l.s(); !(t = l.n())
                            .done;) {
                            var d = Object(i.a)(t.value),
                                u = d[0],
                                p = (d[1], d.slice(2));
                            u != s.hc && u != s.fc && u != s.jc && function() {
                                var e = Object(o.a)(p[0], 2),
                                    t = e[0],
                                    n = e[1],
                                    i = r.find((function(e) {
                                        return e[0] == t
                                    }));
                                i ? i[1] += p.length : r.push([t, p.length]);
                                var s = c.find((function(e) {
                                    return e[0] == n
                                }));
                                s ? s[1] += p.length : c.push([n, p.length])
                            }()
                        }
                    } catch (f) {
                        l.e(f)
                    } finally {
                        l.f()
                    }
                    return r.length && c.length && (r.sort((function(e, t) {
                        return t[1] - e[1]
                    })), c.sort((function(e, t) {
                        return t[1] - e[1]
                    })), n.base = {
                        color: r[0][0],
                        thickness: c[0][0]
                    }), n.colorList = r.map((function(e) {
                        return e[0]
                    })), n.thicknessList = c.map((function(e) {
                        return e[0]
                    })), n
                }

                function p(e, t, n, o, i, s) {
                    var a = function(e, t, n) {
                            var r = t,
                                o = n;
                            if (u(t, n, e)) {
                                for (; u(r + 1, o, e);) r++;
                                var i = r;
                                do {
                                    for (r = t - 1, o++; u(r + 1, o, e) && r + 1 <= i;) r++
                                } while (r == i);
                                return {
                                    x: t,
                                    y: n,
                                    w: i - t,
                                    h: --o - n
                                }
                            }
                            return {
                                w: -1,
                                h: -1
                            }
                        },
                        c = function(e, t, n) {
                            var r = t,
                                o = n;
                            if (u(t, n, e)) {
                                for (; u(r - 1, o, e);) r--;
                                var i = r;
                                do {
                                    for (r = t + 1, o--; u(r - 1, o, e) && r - 1 >= i;) r--
                                } while (r == i);
                                return {
                                    x: i,
                                    y: ++o,
                                    w: t - i,
                                    h: n - o
                                }
                            }
                            return {
                                w: -1,
                                h: -1
                            }
                        },
                        l = function(e, t, n) {
                            var r = t,
                                o = n;
                            if (u(t, n, e)) {
                                for (; u(r, o + 1, e);) o++;
                                var i = o;
                                do {
                                    for (o = n - 1, r--; u(r, o + 1, e) && o + 1 <= i;) o++
                                } while (o == i);
                                return {
                                    x: ++r,
                                    y: n,
                                    w: t - r,
                                    h: i - n
                                }
                            }
                            return {
                                w: -1,
                                h: -1
                            }
                        },
                        d = function(e, t, n) {
                            var r = t,
                                o = n;
                            if (u(t, n, e)) {
                                for (; u(r, o - 1, e);) o--;
                                var i = o;
                                do {
                                    for (o = n + 1, r++; u(r, o - 1, e) && o - 1 >= i;) o--
                                } while (o == i);
                                return {
                                    x: t,
                                    y: i,
                                    w: --r - t,
                                    h: n - i
                                }
                            }
                            return {
                                w: -1,
                                h: -1
                            }
                        },
                        u = function(e, t, n) {
                            if (f[e][t]) return !1;
                            var r = 4 * (e + t * i),
                                o = g.slice(r, r + 4),
                                s = Math.abs(n[0] - o[0]),
                                a = Math.abs(n[1] - o[1]),
                                c = Math.abs(n[2] - o[2]),
                                l = Math.abs(n[3] - o[3]);
                            return s < 20 && a < 20 && c < 20 && l < 20 || 0 == o[3] && 255 == n[0] && 255 == n[1] && 255 == n[2] || 0 == n[3] && 255 == o[0] && 255 == o[1] && 255 == o[2]
                        },
                        p = function(e) {
                            for (var t = e[0], n = e[1], r = t + e[2], o = n + e[3], i = t; i < r; i++)
                                for (var s = n; s < o; s++) f[i][s] = !0;
                            return e
                        };
                    t = Math.round(t), n = Math.round(n);
                    var f, x = parseInt(o.replace("#", "0x")),
                        b = x % 256,
                        h = (x = Math.floor(x / 256)) % 256,
                        m = x = Math.floor(x / 256);
                    ! function() {
                        f = [];
                        for (var e = -1; e <= i; e++) f[e] = [];
                        f[-1] = [], f[i] = [];
                        for (var t = -1; t <= s; t++) f[-1][t] = 1, f[i][t] = 1;
                        for (var n = 0; n < i; n++) f[n][-1] = 1, f[n][s] = 1
                    }();
                    for (var g = e.getImageData(0, 0, i, s)
                            .data, j = 4 * (t + n * i), v = [g[j], g[j + 1], g[j + 2], g[j + 3]], y = [], w = 0; w <= i; w++) y[w] = [];
                    if (u(t, n, [m, h, b, 255])) return [];
                    for (; u(t - 1, n, v);) t--;
                    for (; u(t, n - 1, v);) n--;
                    var k, _, E = a(v, t, n),
                        O = {
                            x: t,
                            y: n,
                            w: E.w,
                            h: E.h,
                            ref: 0,
                            andada: 0
                        },
                        S = E.w,
                        T = p([E.x, E.y, E.w + 1, E.h + 1]);
                    do {
                        for (k = 0, 2 == O.ref && (k += O.andada); k <= O.h;) - 1 != (_ = (E = d(v, O.x + O.w + 1, O.y + O.h - k))
                            .h) ? (y[_].push({
                            x: E.x,
                            y: E.y,
                            w: E.w,
                            h: E.h,
                            ref: 1,
                            andada: O.h + 1 - k
                        }), T.push.apply(T, Object(r.a)(p([E.x, E.y, E.w + 1, E.h + 1]))), _ > S && (S = _), k += _) : k++;
                        for (k = 0, 1 == O.ref && (k += O.andada); k <= O.h;) - 1 != (_ = (E = l(v, O.x - 1, O.y + k))
                            .h) ? (y[_].push({
                            x: E.x,
                            y: E.y,
                            w: E.w,
                            h: E.h,
                            ref: 2,
                            andada: O.h + 1 - k
                        }), T.push.apply(T, Object(r.a)(p([E.x, E.y, E.w + 1, E.h + 1]))), _ > S && (S = _), k += _) : k++;
                        for (k = 0, 4 == O.ref && (k += O.andada); k <= O.w;) - 1 != (_ = (E = a(v, O.x + k, O.y + O.h + 1))
                            .w) ? (y[_].push({
                            x: E.x,
                            y: E.y,
                            w: E.w,
                            h: E.h,
                            ref: 3,
                            andada: O.w + 1 - k
                        }), T.push.apply(T, Object(r.a)(p([E.x, E.y, E.w + 1, E.h + 1]))), _ > S && (S = _), k += _) : k++;
                        for (k = 0, 3 == O.ref && (k += O.andada); k <= O.w;) - 1 != (_ = (E = c(v, O.x + O.w - k, O.y - 1))
                            .w) ? (y[_].push({
                            x: E.x,
                            y: E.y,
                            w: E.w,
                            h: E.h,
                            ref: 4,
                            andada: O.w + 1 - k
                        }), T.push.apply(T, Object(r.a)(p([E.x, E.y, E.w + 1, E.h + 1]))), _ > S && (S = _), k += _) : k++;
                        for (O = y[S].pop(); null == O && S > 0;) O = y[--S].pop()
                    } while (null != O);
                    return T
                }
            },
            oI91: function(e, t) {
                e.exports = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            },
            qXWd: function(e, t) {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
            },
            rlHP: function(e, t) {
                e.exports = function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }
            },
            s8YG: function(e, t, n) {
                (window.__NEXT_P = window.__NEXT_P || [])
                .push(["/draw", function() {
                    return n("HF4s")
                }])
            },
            tCBg: function(e, t, n) {
                var r = n("C+bE"),
                    o = n("qXWd");
                e.exports = function(e, t) {
                    return !t || "object" !== r(t) && "function" !== typeof t ? o(e) : t
                }
            },
            teXF: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.getPageFiles = function(e, t) {
                    const n = (0, r.denormalizePagePath)((0, r.normalizePagePath)(t));
                    let o = e.pages[n];
                    if (!o) return console.warn(`Could not find files for ${n} in .next/build-manifest.json`), [];
                    return o
                };
                var r = n("w0zM")
            },
            umcP: function(e, t, n) {
                "use strict";
                var r = n("nKUr"),
                    o = n("jT3O"),
                    i = n("CBA4"),
                    s = n("q1tI"),
                    a = n("Ya7B"),
                    c = n("YSmr"),
                    l = n("4qaV"),
                    d = n("atwx");

                function u() {
                    var e = Object(o.a)(["edit"]);
                    return u = function() {
                        return e
                    }, e
                }

                function p() {
                    var e = Object(o.a)(["ready"]);
                    return p = function() {
                        return e
                    }, e
                }
                t.a = Object(a.c)((function(e) {
                    var t = e.disabled,
                        n = e.onChange,
                        o = e.emit,
                        a = Object(i.e)(),
                        f = Object(s.useState)(!1),
                        x = f[0],
                        b = f[1];
                    return Object(r.jsx)(l.a, {
                        type: "small",
                        disabled: t && !x,
                        selected: x,
                        onClick: function() {
                            b((function(e) {
                                var t = !e;
                                return o(c.ob, t), n && n(t), t
                            }))
                        },
                        children: x ? Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(d.a, {
                                icon: "pencil"
                            }), Object(r.jsx)("strong", {
                                children: a(u())
                            })]
                        }) : Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(d.a, {
                                icon: "ready"
                            }), Object(r.jsx)("strong", {
                                children: a(p())
                            })]
                        })
                    })
                }), (function(e) {
                    return {
                        emit: e.emit
                    }
                }))
            },
            w0zM: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.normalizePagePath = function(e) {
                    "/" === e ? e = "/index" : /^\/index(\/|$)/.test(e) && (e = `/index${e}`);
                    e.startsWith("/") || (e = `/${e}`);
                    const t = r.posix.normalize(e);
                    if (e !== t) throw new Error(`Requested and resolved page mismatch: ${e} ${t}`);
                    return e
                }, t.denormalizePagePath = t.normalizePathSep = void 0;
                var r = n("tpqs"),
                    o = n("wkBG");
                t.normalizePathSep = o.normalizePathSep, t.denormalizePagePath = o.denormalizePagePath
            },
            w7wo: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.STATIC_STATUS_PAGES = t.OPTIMIZED_FONT_PROVIDERS = t.SERVER_PROPS_ID = t.STATIC_PROPS_ID = t.PERMANENT_REDIRECT_STATUS = t.TEMPORARY_REDIRECT_STATUS = t.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = t.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = t.CLIENT_STATIC_FILES_RUNTIME_AMP = t.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = t.CLIENT_STATIC_FILES_RUNTIME_MAIN = t.STRING_LITERAL_DROP_BUNDLE = t.AMP_RENDER_TARGET = t.CLIENT_STATIC_FILES_RUNTIME = t.CLIENT_STATIC_FILES_PATH = t.CLIENT_PUBLIC_FILES_PATH = t.BLOCKED_PAGES = t.BUILD_ID_FILE = t.CONFIG_FILE = t.SERVERLESS_DIRECTORY = t.SERVER_DIRECTORY = t.FONT_MANIFEST = t.REACT_LOADABLE_MANIFEST = t.DEV_CLIENT_PAGES_MANIFEST = t.SERVER_FILES_MANIFEST = t.IMAGES_MANIFEST = t.ROUTES_MANIFEST = t.PRERENDER_MANIFEST = t.EXPORT_DETAIL = t.EXPORT_MARKER = t.BUILD_MANIFEST = t.PAGES_MANIFEST = t.PHASE_DEVELOPMENT_SERVER = t.PHASE_PRODUCTION_SERVER = t.PHASE_PRODUCTION_BUILD = t.PHASE_EXPORT = void 0;
                t.PHASE_EXPORT = "phase-export";
                t.PHASE_PRODUCTION_BUILD = "phase-production-build";
                t.PHASE_PRODUCTION_SERVER = "phase-production-server";
                t.PHASE_DEVELOPMENT_SERVER = "phase-development-server";
                t.PAGES_MANIFEST = "pages-manifest.json";
                t.BUILD_MANIFEST = "build-manifest.json";
                t.EXPORT_MARKER = "export-marker.json";
                t.EXPORT_DETAIL = "export-detail.json";
                t.PRERENDER_MANIFEST = "prerender-manifest.json";
                t.ROUTES_MANIFEST = "routes-manifest.json";
                t.IMAGES_MANIFEST = "images-manifest.json";
                t.SERVER_FILES_MANIFEST = "required-server-files.json";
                t.DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
                t.REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
                t.FONT_MANIFEST = "font-manifest.json";
                t.SERVER_DIRECTORY = "server";
                t.SERVERLESS_DIRECTORY = "serverless";
                t.CONFIG_FILE = "next.config.js";
                t.BUILD_ID_FILE = "BUILD_ID";
                t.BLOCKED_PAGES = ["/_document", "/_app"];
                t.CLIENT_PUBLIC_FILES_PATH = "public";
                t.CLIENT_STATIC_FILES_PATH = "static";
                t.CLIENT_STATIC_FILES_RUNTIME = "runtime";
                t.AMP_RENDER_TARGET = "__NEXT_AMP_RENDER_TARGET__";
                t.STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
                t.CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
                t.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
                t.CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
                t.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
                t.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
                t.TEMPORARY_REDIRECT_STATUS = 307;
                t.PERMANENT_REDIRECT_STATUS = 308;
                t.STATIC_PROPS_ID = "__N_SSG";
                t.SERVER_PROPS_ID = "__N_SSP";
                t.OPTIMIZED_FONT_PROVIDERS = ["https://fonts.googleapis.com/css", "https://use.typekit.net/"];
                t.STATIC_STATUS_PAGES = ["/500"]
            }
        },
        [
            ["s8YG", 0, 1, 2, 4, 3, 8, 9]
        ]
    ]);
