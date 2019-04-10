!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        t = t || Z;
        var n = t.createElement("script");
        n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
    }
    function r(e) {
        var t = !!e && "length"in e && e.length
            , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Te.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return ie.call(t, e) > -1 !== n && 1 === e.nodeType
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function a(e) {
        var t = {};
        return pe.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function s(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function l(e, t, n) {
        var r;
        try {
            e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    function c() {
        Z.removeEventListener("DOMContentLoaded", c),
            e.removeEventListener("load", c),
            pe.ready()
    }
    function f() {
        this.expando = pe.expando + f.uid++
    }
    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Pe, "-$&").toLowerCase(),
                    n = e.getAttribute(r),
                "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? JSON.parse(n) : n)
                } catch (i) {}
                Fe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function d(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return pe.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (pe.cssNumber[t] ? "" : "px"), c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
                n = n || [],
                c = +u || 1;
            do
                o = o || ".5",
                    c /= o,
                    pe.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    function h(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Be[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)),
            i = pe.css(t, "display"),
            t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
            Be[r] = i,
            i)
    }
    function g(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            r = e[o],
            r.style && (n = r.style.display,
                t ? ("none" === n && (i[o] = He.get(r, "display") || null,
                i[o] || (r.style.display = "")),
                "" === r.style.display && We(r) && (i[o] = h(r))) : "none" !== n && (i[o] = "none",
                    He.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function m(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
    }
    function v(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }
    function y(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if (o = e[d],
                o || 0 === o)
                if ("object" === pe.type(o))
                    pe.merge(p, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                             s = (ze.exec(o) || ["", ""])[1].toLowerCase(),
                             u = Ue[s] || Ue._default,
                             a.innerHTML = u[1] + pe.htmlPrefilter(o) + u[2],
                             c = u[0]; c--; )
                        a = a.lastChild;
                    pe.merge(p, a.childNodes),
                        a = f.firstChild,
                        a.textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
                 d = 0; o = p[d++]; )
            if (r && pe.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = pe.contains(o.ownerDocument, o),
                    a = m(f.appendChild(o), "script"),
                l && v(a),
                    n)
                for (c = 0; o = a[c++]; )
                    Xe.test(o.type || "") && n.push(o);
        return f
    }
    function x() {
        return !0
    }
    function b() {
        return !1
    }
    function w() {
        try {
            return Z.activeElement
        } catch (e) {}
    }
    function T(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
                n = void 0);
            for (s in t)
                T(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            i === !1)
            i = b;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            i = function(e) {
                return pe().off(e),
                    a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = pe.guid++)),
            e.each(function() {
                pe.event.add(this, t, i, r, n)
            })
    }
    function C(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function E(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function S(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.access(e),
                    a = He.set(t, o),
                    l = o.events)) {
                delete a.handle,
                    a.events = {};
                for (i in l)
                    for (n = 0,
                             r = l[i].length; n < r; n++)
                        pe.event.add(t, i, l[i][n])
            }
            Fe.hasData(e) && (s = Fe.access(e),
                u = pe.extend({}, s),
                Fe.set(t, u))
        }
    }
    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function D(e, t, r, i) {
        t = ne.apply([], t);
        var o, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = pe.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !ce.checkClone && et.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())),
                    D(o, t, r, i)
            });
        if (p && (o = y(t, e[0].ownerDocument, !1, e, i),
                a = o.firstChild,
            1 === o.childNodes.length && (o = a),
            a || i)) {
            for (s = pe.map(m(o, "script"), k),
                     u = s.length; f < p; f++)
                l = o,
                f !== d && (l = pe.clone(l, !0, !0),
                u && pe.merge(s, m(l, "script"))),
                    r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                         pe.map(s, E),
                         f = 0; f < u; f++)
                    l = s[f],
                    Xe.test(l.type || "") && !He.access(l, "globalEval") && pe.contains(c, l) && (l.src ? pe._evalUrl && pe._evalUrl(l.src) : n(l.textContent.replace(nt, ""), c))
        }
        return e
    }
    function j(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pe.cleanData(m(r)),
            r.parentNode && (n && pe.contains(r.ownerDocument, r) && v(m(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    function A(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ot(e),
        n && (a = n.getPropertyValue(t) || n[t],
        "" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)),
        !ce.pixelMarginRight() && it.test(a) && rt.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function q(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function L(e) {
        if (e in ct)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; )
            if (e = lt[n] + t,
                e in ct)
                return e
    }
    function H(e, t, n) {
        var r = Me.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function F(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += pe.css(e, n + Ie[o], !0, i)),
                r ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, i)),
                "margin" !== n && (a -= pe.css(e, "border" + Ie[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Ie[o], !0, i),
                "padding" !== n && (a += pe.css(e, "border" + Ie[o] + "Width", !0, i)));
        return a
    }
    function O(e, t, n) {
        var r, i = !0, o = ot(e), a = "border-box" === pe.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
            r <= 0 || null == r) {
            if (r = A(e, t, o),
                (r < 0 || null == r) && (r = e.style[t]),
                    it.test(r))
                return r;
            i = a && (ce.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function P(e, t, n, r, i) {
        return new P.prototype.init(e,t,n,r,i)
    }
    function R() {
        pt && (e.requestAnimationFrame(R),
            pe.fx.tick())
    }
    function M() {
        return e.setTimeout(function() {
            ft = void 0
        }),
            ft = pe.now()
    }
    function I(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = Ie[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function W(e, t, n) {
        for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function $(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, m = e.nodeType && We(e), v = He.get(e, "fxshow");
        n.queue || (a = pe._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
        ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    pe.queue(e, "fx").length || a.empty.fire()
                })
            }));
        for (r in t)
            if (i = t[r],
                    dt.test(i)) {
                if (delete t[r],
                        o = o || "toggle" === i,
                    i === (m ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r])
                        continue;
                    m = !0
                }
                d[r] = v && v[r] || pe.style(e, r)
            }
        if (u = !pe.isEmptyObject(t),
            u || !pe.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                l = v && v.display,
            null == l && (l = He.get(e, "display")),
                c = pe.css(e, "display"),
            "none" === c && (l ? c = l : (g([e], !0),
                l = e.style.display || l,
                c = pe.css(e, "display"),
                g([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === pe.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                })),
                u = !1;
            for (r in d)
                u || (v ? "hidden"in v && (m = v.hidden) : v = He.access(e, "fxshow", {
                    display: l
                }),
                o && (v.hidden = !m),
                m && g([e], !0),
                    p.done(function() {
                        m || g([e]),
                            He.remove(e, "fxshow");
                        for (r in d)
                            pe.style(e, r, d[r])
                    })),
                    u = W(m ? v[r] : 0, r, p),
                r in v || (v[r] = u.start,
                m && (u.end = u.start,
                    u.start = 0))
        }
    }
    function B(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pe.camelCase(n),
                    i = t[r],
                    o = e[n],
                pe.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                    a = pe.cssHooks[r],
                a && "expand"in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function _(e, t, n) {
        var r, i, o = 0, a = _.prefilters.length, s = pe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = ft || M(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
                o < 1 && u ? n : (s.resolveWith(e, [l]),
                    !1)
        }, l = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ft || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
            },
            stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
            }
        }), c = l.props;
        for (B(c, l.opts.specialEasing); o < a; o++)
            if (r = _.prefilters[o].call(l, e, c, l.opts))
                return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)),
                    r;
        return pe.map(c, W, l),
        pe.isFunction(l.opts.start) && l.opts.start.call(e, l),
            pe.fx.timer(pe.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function X(e, t, n, r) {
        var i;
        if (pe.isArray(t))
            pe.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : X(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== pe.type(t))
            r(e, t);
        else
            for (i in t)
                X(e + "[" + i + "]", t[i], n, r)
    }
    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(De) || [];
            if (pe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function V(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
                pe.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                }),
                u
        }
        var o = {}
            , a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function G(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && pe.extend(!0, e, r),
            e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
                n[o]
    }
    function Q(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = o,
                    o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o],
                            !a)
                        for (i in l)
                            if (s = i.split(" "),
                                s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0],
                                    c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function J(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var K = []
        , Z = e.document
        , ee = Object.getPrototypeOf
        , te = K.slice
        , ne = K.concat
        , re = K.push
        , ie = K.indexOf
        , oe = {}
        , ae = oe.toString
        , se = oe.hasOwnProperty
        , ue = se.toString
        , le = ue.call(Object)
        , ce = {}
        , fe = "3.0.0"
        , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
        , de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , he = /^-ms-/
        , ge = /-([a-z])/g
        , me = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : te.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: K.sort,
        splice: K.splice
    },
        pe.extend = pe.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                 "object" == typeof a || pe.isFunction(a) || (a = {}),
                 s === u && (a = this,
                     s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                            r = e[t],
                        a !== r && (l && r && (pe.isPlainObject(r) || (i = pe.isArray(r))) ? (i ? (i = !1,
                            o = n && pe.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {},
                            a[t] = pe.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        pe.extend({
            expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = pe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ae.call(e)) && (!(t = ee(e)) || (n = se.call(t, "constructor") && t.constructor,
                "function" == typeof n && ue.call(n) === le))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ae.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(he, "ms-").replace(ge, me)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++)
                        ;
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(de, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ie.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                    r = !t(e[o], o),
                    r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, a = 0, s = [];
                if (r(e))
                    for (i = e.length; a < i; a++)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                else
                    for (a in e)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                return ne.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t],
                        t = e,
                        e = n),
                        pe.isFunction(e))
                    return r = te.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(te.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || pe.guid++,
                        i
            },
            now: Date.now,
            support: ce
        }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = K[Symbol.iterator]),
        pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            oe["[object " + t + "]"] = t.toLowerCase()
        });
    var ve = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, c, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== H && L(t),
                    t = t || H,
                    O)) {
                if (11 !== h && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (T.qsa && !U[e + " "] && (!P || !P.test(e))) {
                    if (1 !== h)
                        p = t,
                            c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = W),
                                 l = S(e),
                                 o = l.length; o--; )
                            l[o] = "#" + s + " " + d(l[o]);
                        c = l.join(","),
                            p = ye.test(e) && f(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return K.apply(n, p.querySelectorAll(c)),
                                n
                        } catch (g) {} finally {
                            s === W && t.removeAttribute("id")
                        }
                }
            }
            return D(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[W] = !0,
                e
        }
        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                C.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                return "label"in t && t.disabled === e || "form"in t && t.disabled === e || "form"in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label"in t || !ke(t)) !== e)
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function p() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
                , i = t.next
                , o = i || r
                , a = n && "parentNode" === o
                , s = _++;
            return t.first ? function(t, n, i) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            return e(t, n, i)
                }
                : function(t, n, u) {
                    var l, c, f, p = [B, s];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || a) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                if (f = t[W] || (t[W] = {}),
                                        c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                                    i && i === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === B && l[1] === s)
                                        return p[2] = l[2];
                                    if (c[o] = p,
                                            p[2] = e(t, n, u))
                                        return !0
                                }
                }
        }
        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[W] && (i = y(i)),
            o && !o[W] && (o = y(o, a)),
                r(function(r, a, s, u) {
                    var l, c, f, p = [], d = [], h = a.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? g : v(g, p, e, s, u), x = n ? o || (r ? e : h || i) ? [] : a : y;
                    if (n && n(y, x, s, u),
                            i)
                        for (l = v(x, d),
                                 i(l, [], s, u),
                                 c = l.length; c--; )
                            (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                         c = x.length; c--; )
                                    (f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--; )
                                (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else
                        x = v(x === a ? x.splice(h, x.length) : x),
                            o ? o(null, a, x, u) : K.apply(a, x)
                })
        }
        function x(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), l = h(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                    i
            }
            ]; s < i; s++)
                if (n = C.relative[e[s].type])
                    c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches),
                            n[W]) {
                        for (r = ++s; r < i && !C.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && x(e.slice(s, r)), r < i && x(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return g(c)
        }
        function b(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function(r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], m = [], y = j, x = r || o && C.find.TAG("*", l), b = B += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (j = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                             a || c.ownerDocument === H || (L(c),
                                 s = !O); p = e[f++]; )
                            if (p(c, a || H, s)) {
                                u.push(c);
                                break
                            }
                        l && (B = b)
                    }
                    i && ((c = !p && c) && d--,
                    r && g.push(c))
                }
                if (d += h,
                    i && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, m, a, s);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || m[h] || (m[h] = Q.call(u));
                        m = v(m)
                    }
                    K.apply(u, m),
                    l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (B = b,
                    j = y),
                    g
            };
            return i ? r(a) : a
        }
        var w, T, C, k, E, S, N, D, j, A, q, L, H, F, O, P, R, M, I, W = "sizzle" + 1 * new Date, $ = e.document, B = 0, _ = 0, z = n(), X = n(), U = n(), V = function(e, t) {
            return e === t && (q = !0),
                0
        }, G = {}.hasOwnProperty, Y = [], Q = Y.pop, J = Y.push, K = Y.push, Z = Y.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(oe), pe = new RegExp("^" + re + "$"), de = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), be = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, Te = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Ce = function() {
            L()
        }, ke = h(function(e) {
            return e.disabled === !0
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            K.apply(Y = Z.call($.childNodes), $.childNodes),
                Y[$.childNodes.length].nodeType
        } catch (Ee) {
            K = {
                apply: Y.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
            }
        }
        T = t.support = {},
            E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            L = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : $;
                return r !== H && 9 === r.nodeType && r.documentElement ? (H = r,
                    F = H.documentElement,
                    O = !E(H),
                $ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                    T.attributes = i(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    T.getElementsByTagName = i(function(e) {
                        return e.appendChild(H.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    T.getElementsByClassName = me.test(H.getElementsByClassName),
                    T.getById = i(function(e) {
                        return F.appendChild(e).id = W,
                        !H.getElementsByName || !H.getElementsByName(W).length
                    }),
                    T.getById ? (C.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && O) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                            ,
                            C.filter.ID = function(e) {
                                var t = e.replace(xe, be);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                    ) : (delete C.find.ID,
                            C.filter.ID = function(e) {
                                var t = e.replace(xe, be);
                                return function(e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                    ),
                    C.find.TAG = T.getElementsByTagName ? function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    C.find.CLASS = T.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && O)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    R = [],
                    P = [],
                (T.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
                    F.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="),
                    e.querySelectorAll(":checked").length || P.push(":checked"),
                    e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
                }),
                    i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = H.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                            F.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            P.push(",.*:")
                    })),
                (T.matchesSelector = me.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
                    T.disconnectedMatch = M.call(e, "*"),
                        M.call(e, "[s!='']:x"),
                        R.push("!=", oe)
                }),
                    P = P.length && new RegExp(P.join("|")),
                    R = R.length && new RegExp(R.join("|")),
                    t = me.test(F.compareDocumentPosition),
                    I = t || me.test(F.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                                , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    V = t ? function(e, t) {
                            if (e === t)
                                return q = !0,
                                    0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === $ && I($, e) ? -1 : t === H || t.ownerDocument === $ && I($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return q = !0,
                                    0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                            if (!i || !o)
                                return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                            if (i === o)
                                return a(e, t);
                            for (n = e; n = n.parentNode; )
                                s.unshift(n);
                            for (n = t; n = n.parentNode; )
                                u.unshift(n);
                            for (; s[r] === u[r]; )
                                r++;
                            return r ? a(s[r], u[r]) : s[r] === $ ? -1 : u[r] === $ ? 1 : 0
                        }
                    ,
                    H) : H
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== H && L(e),
                        n = n.replace(ce, "='$1']"),
                    T.matchesSelector && O && !U[n + " "] && (!R || !R.test(n)) && (!P || !P.test(n)))
                    try {
                        var r = M.call(e, n);
                        if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (i) {}
                return t(n, H, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && L(e),
                    I(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== H && L(e);
                var n = C.attrHandle[t.toLowerCase()]
                    , r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== r ? r : T.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(we, Te)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (q = !T.detectDuplicates,
                        A = !T.sortStable && e.slice(0),
                        e.sort(V),
                        q) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return A = null,
                    e
            }
            ,
            k = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += k(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += k(t);
                return n
            }
            ,
            C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, be),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, be).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , a = "last" !== e.slice(-4)
                            , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                                if (m) {
                                    if (o) {
                                        for (; g; ) {
                                            for (p = t; p = p[g]; )
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild],
                                        a && y) {
                                        for (p = m,
                                                 f = p[W] || (p[W] = {}),
                                                 c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                                 l = c[e] || [],
                                                 d = l[0] === B && l[1],
                                                 x = d && l[2],
                                                 p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [B, d, x];
                                                break
                                            }
                                    } else if (y && (p = t,
                                            f = p[W] || (p[W] = {}),
                                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                            l = c[e] || [],
                                            d = l[0] === B && l[1],
                                            x = d),
                                        x === !1)
                                        for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[W] || (p[W] = {}),
                                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                            c[e] = [B, x]),
                                        p !== t)); )
                                            ;
                                    return x -= i,
                                    x === r || x % r === 0 && x / r >= 0
                                }
                            }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; )
                                        r = ee(e, i[a]),
                                            e[r] = !(t[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                            , n = []
                            , i = N(e.replace(se, "$1"));
                        return i[W] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(xe, be),
                            function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(xe, be).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === F
                    },
                    focus: function(e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: l(!1),
                    disabled: l(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            C.pseudos.nth = C.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            C.pseudos[w] = u(w);
        return p.prototype = C.filters = C.pseudos,
            C.setFilters = new p,
            S = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = X[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e,
                         u = [],
                         l = C.preFilter; s; ) {
                    r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        r = !1,
                    (i = le.exec(s)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }),
                        s = s.slice(r.length));
                    for (a in C.filter)
                        !(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : X(e, u).slice(0)
            }
            ,
            N = t.compile = function(e, t) {
                var n, r = [], i = [], o = U[e + " "];
                if (!o) {
                    for (t || (t = S(e)),
                             n = t.length; n--; )
                        o = x(t[n]),
                            o[W] ? r.push(o) : i.push(o);
                    o = U(e, b(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            D = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && S(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (o = c[0] = c[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && O && C.relative[o[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(xe, be), t) || [])[0],
                                !t)
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !C.relative[s = a.type]); )
                        if ((u = C.find[s]) && (r = u(a.matches[0].replace(xe, be), ye.test(o[0].type) && f(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                    e = r.length && d(o),
                                    !e)
                                return K.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || N(e, c))(r, t, !O, n, !t || ye.test(e) && f(t.parentNode) || t),
                    n
            }
            ,
            T.sortStable = W.split("").sort(V).join("") === W,
            T.detectDuplicates = !!q,
            L(),
            T.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
            }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        T.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            t
    }(e);
    pe.find = ve,
        pe.expr = ve.selectors,
        pe.expr[":"] = pe.expr.pseudos,
        pe.uniqueSort = pe.unique = ve.uniqueSort,
        pe.text = ve.getText,
        pe.isXMLDoc = ve.isXML,
        pe.contains = ve.contains,
        pe.escapeSelector = ve.escape;
    var ye = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && pe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , be = pe.expr.match.needsContext
        , we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        , Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        pe.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(pe(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (pe.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                         t = 0; t < r; t++)
                    pe.find(e, i[t], n);
                return r > 1 ? pe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && be.test(e) ? pe(e) : e || [], !1).length
            }
        });
    var Ce, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ee = pe.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || Ce,
                "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e),
                    !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pe ? t[0] : t,
                            pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                        we.test(r[1]) && pe.isPlainObject(t))
                        for (r in t)
                            pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = Z.getElementById(r[2]),
                i && (this[0] = i,
                    this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
        }
    ;
    Ee.prototype = pe.fn,
        Ce = pe(Z);
    var Se = /^(?:parents|prev(?:Until|All))/
        , Ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (pe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && pe(e);
            if (!be.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.call(pe(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        pe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ye(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ye(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return ye(e, "nextSibling")
            },
            prevAll: function(e) {
                return ye(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ye(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ye(e, "previousSibling", n)
            },
            siblings: function(e) {
                return xe((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return xe(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || pe.merge([], e.childNodes)
            }
        }, function(e, t) {
            pe.fn[e] = function(n, r) {
                var i = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = pe.filter(r, i)),
                this.length > 1 && (Ne[e] || pe.uniqueSort(i),
                Se.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var De = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : pe.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function() {
            for (i = e.once,
                     r = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < o.length; )
                    o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length,
                        n = !1);
            e.memory || (n = !1),
                t = !1,
            i && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                    s.push(n)),
                    function r(t) {
                        pe.each(t, function(t, n) {
                            pe.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== pe.type(n) && r(n)
                        })
                    }(arguments),
                n && !t && l()),
                    this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= u && u--
                }),
                    this
            },
            has: function(e) {
                return e ? pe.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                    this
            },
            disable: function() {
                return i = s = [],
                    o = n = "",
                    this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = s = [],
                n || t || (o = n = ""),
                    this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                t || l()),
                    this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
        ,
        pe.extend({
            Deferred: function(t) {
                var n = [["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2], ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]]
                    , r = "pending"
                    , i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                            this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return pe.Deferred(function(t) {
                            pe.each(n, function(n, r) {
                                var i = pe.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var l = this
                                    , c = arguments
                                    , f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if (e = r.apply(l, c),
                                                e === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                pe.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++,
                                                    f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0,
                                                    c = [e]),
                                                    (i || n.resolveWith)(l, c))
                                        }
                                    }
                                    , p = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, p.stackTrace),
                                            t + 1 >= a && (r !== u && (l = void 0,
                                                c = [e]),
                                                n.rejectWith(l, c))
                                        }
                                    }
                                ;
                                t ? p() : (pe.Deferred.getStackHook && (p.stackTrace = pe.Deferred.getStackHook()),
                                    e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return pe.Deferred(function(e) {
                            n[0][3].add(o(0, e, pe.isFunction(i) ? i : s, e.notifyWith)),
                                n[1][3].add(o(0, e, pe.isFunction(t) ? t : s)),
                                n[2][3].add(o(0, e, pe.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, i) : i
                    }
                }
                    , o = {};
                return pe.each(n, function(e, t) {
                    var a = t[2]
                        , s = t[5];
                    i[t[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    }, n[3 - e][2].disable, n[0][2].lock),
                        a.add(t[3].fire),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                        }
                        ,
                        o[t[0] + "With"] = a.fireWith
                }),
                    i.promise(o),
                t && t.call(o, o),
                    o
            },
            when: function(e) {
                var t = arguments.length
                    , n = t
                    , r = Array(n)
                    , i = te.call(arguments)
                    , o = pe.Deferred()
                    , a = function(e) {
                    return function(n) {
                        r[e] = this,
                            i[e] = arguments.length > 1 ? te.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject),
                    "pending" === o.state() || pe.isFunction(i[n] && i[n].then)))
                    return o.then();
                for (; n--; )
                    l(i[n], a(n), o.reject);
                return o.promise()
            }
        });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ;
    var Ae = pe.Deferred();
    pe.fn.ready = function(e) {
        return Ae.then(e),
            this
    }
        ,
        pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
                e !== !0 && --pe.readyWait > 0 || Ae.resolveWith(Z, [pe]))
            }
        }),
        pe.ready.then = Ae.then,
        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(pe.ready) : (Z.addEventListener("DOMContentLoaded", c),
            e.addEventListener("load", c));
    var qe = function(e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === pe.type(n)) {
            i = !0;
            for (s in n)
                qe(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
            pe.isFunction(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(pe(e), n)
                    }
            )),
                t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , Le = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1,
        f.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[pe.camelCase(t)] = n;
                else
                    for (r in t)
                        i[pe.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t),
                            t = t in r ? [t] : t.match(De) || []),
                            n = t.length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || pe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !pe.isEmptyObject(t)
            }
        };
    var He = new f
        , Fe = new f
        , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Pe = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Fe.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        removeData: function(e, t) {
            Fe.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }),
        pe.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Fe.get(o),
                        1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && (r = a[n].name,
                            0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)),
                                p(o, r, i[r])));
                        He.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Fe.set(this, e)
                }) : qe(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Fe.get(o, e),
                            void 0 !== n)
                            return n;
                        if (n = p(o, e),
                            void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            Fe.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Fe.remove(this, e)
                })
            }
        }),
        pe.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = He.get(e, t),
                    n && (!r || pe.isArray(n) ? r = He.access(e, t, pe.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = pe._queueHooks(e, t)
                    , a = function() {
                    pe.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return He.get(e, n) || He.access(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        He.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = pe.queue(this, e, t);
                        pe._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; a--; )
                    n = He.get(o[a], e + "queueHooks"),
                    n && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Me = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$","i")
        , Ie = ["Top", "Right", "Bottom", "Left"]
        , We = function(e, t) {
        return e = t || e,
        "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
    }
        , $e = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
        , Be = {};
    pe.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                We(this) ? pe(this).show() : pe(this).hide()
            })
        }
    });
    var _e = /^(?:checkbox|radio)$/i
        , ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , Xe = /^$|\/(?:java|ecma)script/i
        , Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ue.optgroup = Ue.option,
        Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead,
        Ue.th = Ue.td;
    var Ve = /<|&#?\w+;/;
    !function() {
        var e = Z.createDocumentFragment()
            , t = e.appendChild(Z.createElement("div"))
            , n = Z.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ge = Z.documentElement
        , Ye = /^key/
        , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = He.get(e);
            if (m)
                for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                     i && pe.find.matchesSelector(Ge, i),
                     n.guid || (n.guid = pe.guid++),
                     (u = m.events) || (u = m.events = {}),
                     (a = m.handle) || (a = m.handle = function(t) {
                             return "undefined" != typeof pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                         }
                     ),
                         t = (t || "").match(De) || [""],
                         l = t.length; l--; )
                    s = Je.exec(t[l]) || [],
                        d = g = s[1],
                        h = (s[2] || "").split(".").sort(),
                    d && (f = pe.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = pe.event.special[d] || {},
                        c = pe.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && pe.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                    (p = u[d]) || (p = u[d] = [],
                        p.delegateCount = 0,
                    f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        pe.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = He.hasData(e) && He.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(De) || [""],
                         l = t.length; l--; )
                    if (s = Je.exec(t[l]) || [],
                            d = g = s[1],
                            h = (s[2] || "").split(".").sort(),
                            d) {
                        for (f = pe.event.special[d] || {},
                                 d = (r ? f.delegateType : f.bindType) || d,
                                 p = u[d] || [],
                                 s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, d, m.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            pe.event.remove(e, d + t[l], n, r, !0);
                pe.isEmptyObject(u) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = pe.event.fix(e), u = new Array(arguments.length), l = (He.get(this, "events") || {})[s.type] || [], c = pe.event.special[s.type] || {};
            for (u[0] = s,
                     t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = pe.event.handlers.call(this, s, l),
                         t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                            r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u),
                        void 0 !== r && (s.result = r) === !1 && (s.preventDefault(),
                            s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                                 n = 0; n < s; n++)
                            o = t[n],
                                i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
                a
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus)
                        return this.focus(),
                            !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && pe.nodeName(this, "input"))
                        return this.click(),
                            !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        pe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        pe.Event = function(e, t) {
            return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : b,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
            t && pe.extend(this, t),
                this.timeStamp = e && e.timeStamp || pe.now(),
                void (this[pe.expando] = !0)) : new pe.Event(e,t)
        }
        ,
        pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = x,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = x,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = x,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        pe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, pe.event.addProp),
        pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || pe.contains(r, i)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
        pe.fn.extend({
            on: function(e, t, n, r) {
                return T(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return T(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                n === !1 && (n = b),
                    this.each(function() {
                        pe.event.remove(this, e, n, t)
                    })
            }
        });
    var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , Ze = /<script|<style|<link/i
        , et = /checked\s*(?:[^=]|=\s*.checked.)/i
        , tt = /^true\/(.*)/
        , nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = pe.contains(e.ownerDocument, e);
            if (!(ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (a = m(s),
                         o = m(e),
                         r = 0,
                         i = o.length; r < i; r++)
                    N(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || m(e),
                             a = a || m(s),
                             r = 0,
                             i = o.length; r < i; r++)
                        S(o[r], a[r]);
                else
                    S(e, s);
            return a = m(s, "script"),
            a.length > 0 && v(a, !u && m(e, "script")),
                s
        },
        cleanData: function(e) {
            for (var t, n, r, i = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Le(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, t.handle);
                        n[He.expando] = void 0
                    }
                    n[Fe.expando] && (n[Fe.expando] = void 0)
                }
        }
    }),
        pe.fn.extend({
            detach: function(e) {
                return j(this, e, !0)
            },
            remove: function(e) {
                return j(this, e)
            },
            text: function(e) {
                return qe(this, function(e) {
                    return void 0 === e ? pe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return D(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return D(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (pe.cleanData(m(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return pe.clone(this, e, t)
                    })
            },
            html: function(e) {
                return qe(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ze.test(e) && !Ue[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (pe.cleanData(m(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return D(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(m(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pe.fn[e] = function(e) {
                for (var n, r = [], i = pe(e), o = i.length - 1, a = 0; a <= o; a++)
                    n = a === o ? this : this.clone(!0),
                        pe(i[a])[t](n),
                        re.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var rt = /^margin/
        , it = new RegExp("^(" + Re + ")(?!px)[a-z%]+$","i")
        , ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
            n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    Ge.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                    o = "2px" === t.marginLeft,
                    r = "4px" === t.width,
                    s.style.marginRight = "50%",
                    i = "4px" === t.marginRight,
                    Ge.removeChild(a),
                    s = null
            }
        }
        var n, r, i, o, a = Z.createElement("div"), s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            ce.clearCloneStyle = "content-box" === s.style.backgroundClip,
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            a.appendChild(s),
            pe.extend(ce, {
                pixelPosition: function() {
                    return t(),
                        n
                },
                boxSizingReliable: function() {
                    return t(),
                        r
                },
                pixelMarginRight: function() {
                    return t(),
                        i
                },
                reliableMarginLeft: function() {
                    return t(),
                        o
                }
            }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/
        , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , lt = ["Webkit", "Moz", "ms"]
        , ct = Z.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t), u = e.style;
                return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s),
                    a = pe.cssHooks[t] || pe.cssHooks[s],
                    void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                    "string" === o && (i = Me.exec(n)) && i[1] && (n = d(e, t, i),
                        o = "number"),
                    null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")),
                    ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)),
                        void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s),
                a = pe.cssHooks[t] || pe.cssHooks[s],
            a && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = A(e, t, r)),
            "normal" === i && t in ut && (i = ut[t]),
                "" === n || n ? (o = parseFloat(i),
                    n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
        pe.each(["height", "width"], function(e, t) {
            pe.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? O(e, t, r) : $e(e, st, function() {
                            return O(e, t, r)
                        })
                },
                set: function(e, n, r) {
                    var i, o = r && ot(e), a = r && F(e, t, r, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                    return a && (i = Me.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                        n = pe.css(e, t)),
                        H(e, n, a)
                }
            }
        }),
        pe.cssHooks.marginLeft = q(ce.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            rt.test(e) || (pe.cssHooks[e + t].set = H)
        }),
        pe.fn.extend({
            css: function(e, t) {
                return qe(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (pe.isArray(t)) {
                        for (r = ot(e),
                                 i = t.length; a < i; a++)
                            o[t[a]] = pe.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        pe.Tween = P,
        P.prototype = {
            constructor: P,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || pe.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = P.propHooks[this.prop];
                return e && e.get ? e.get(this) : P.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = P.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : P.propHooks._default.set(this),
                    this
            }
        },
        P.prototype.init.prototype = P.prototype,
        P.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        pe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        pe.fx = P.prototype.init,
        pe.fx.step = {};
    var ft, pt, dt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    pe.Animation = pe.extend(_, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Me.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(De);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    _.tweeners[n] = _.tweeners[n] || [],
                    _.tweeners[n].unshift(t)
        },
        prefilters: [$],
        prefilter: function(e, t) {
            t ? _.prefilters.unshift(e) : _.prefilters.push(e)
        }
    }),
        pe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return pe.fx.off || Z.hidden ? r.duration = 0 : r.duration = "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default,
            null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    pe.isFunction(r.old) && r.old.call(this),
                    r.queue && pe.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        pe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(We).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = pe.isEmptyObject(e)
                    , o = pe.speed(t, n, r)
                    , a = function() {
                    var t = _(this, pe.extend({}, e), o);
                    (i || He.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , i = null != e && e + "queueHooks"
                            , o = pe.timers
                            , a = He.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && ht.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        !t && n || pe.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = He.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                                 pe.queue(this, e, []),
                             i && i.stop && i.stop.call(this, !0),
                                 t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
            }
        }),
        pe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        pe.timers = [],
        pe.fx.tick = function() {
            var e, t = 0, n = pe.timers;
            for (ft = pe.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || pe.fx.stop(),
                ft = void 0
        }
        ,
        pe.fx.timer = function(e) {
            pe.timers.push(e),
                e() ? pe.fx.start() : pe.timers.pop()
        }
        ,
        pe.fx.interval = 13,
        pe.fx.start = function() {
            pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(pe.fx.tick, pe.fx.interval))
        }
        ,
        pe.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt),
                pt = null
        }
        ,
        pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var e = Z.createElement("input")
                , t = Z.createElement("select")
                , n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox",
                ce.checkOn = "" !== e.value,
                ce.optSelected = n.selected,
                e = Z.createElement("input"),
                e.value = "t",
                e.type = "radio",
                ce.radioValue = "t" === e.value
        }();
    var gt, mt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return qe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
        pe.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (i = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? gt : void 0)),
                        void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t),
                            null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(De);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        gt = {
            set: function(e, t, n) {
                return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = mt[t] || pe.find.attr;
            mt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = mt[a],
                    mt[a] = i,
                    i = null != n(e, t, r) ? a : null,
                    mt[a] = o),
                    i
            }
        });
    var vt = /^(?:input|select|textarea|button)$/i
        , yt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return qe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e]
            })
        }
    }),
        pe.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                        i = pe.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
    ce.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pe.propFix[this.toLowerCase()] = this
        });
    var xt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++]; )
                    if (i = z(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++]; )
                    if (i = z(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(xt, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = pe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                             i = pe(this),
                             o = e.match(De) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = z(this),
                    t && He.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + z(n) + " ").replace(xt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g
        , wt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = pe.isFunction(e),
                        this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e,
                                null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                if (i)
                    return t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                            "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }),
        pe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(wt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (n = r[u],
                                (n.selected || u === i) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(),
                                        o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--; )
                            r = i[a],
                            (r.selected = pe.inArray(pe.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        pe.each(["radio", "checkbox"], function() {
            pe.valHooks[this] = {
                set: function(e, t) {
                    if (pe.isArray(t))
                        return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            },
            ce.checkOn || (pe.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || Z], d = se.call(t, "type") ? t.type : t, h = se.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || Z,
                3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + pe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
                    d = h.shift(),
                    h.sort()),
                    l = d.indexOf(":") < 0 && "on" + d,
                    t = t[pe.expando] ? t : new pe.Event(d,"object" == typeof t && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = h.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                t.target || (t.target = r),
                    n = null == n ? [t] : pe.makeArray(n, [t]),
                    f = pe.event.special[d] || {},
                i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !pe.isWindow(r)) {
                    for (u = f.delegateType || d,
                         Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                            s = a;
                    s === (r.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                        c = (He.get(a, "events") || {})[t.type] && He.get(a, "handle"),
                    c && c.apply(a, n),
                        c = l && a[l],
                    c && c.apply && Le(a) && (t.result = c.apply(a, n),
                    t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Le(r) || l && pe.isFunction(r[d]) && !pe.isWindow(r) && (s = r[l],
                s && (r[l] = null),
                    pe.event.triggered = d,
                    r[d](),
                    pe.event.triggered = void 0,
                s && (r[l] = s)),
                    t.result
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t)
        }
    }),
        pe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return pe.event.trigger(e, t, n, !0)
            }
        }),
        pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            pe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        pe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        ce.focusin = "onfocusin"in e,
    ce.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                    , i = He.access(r, t);
                i || r.addEventListener(e, n, !0),
                    He.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                    , i = He.access(r, t) - 1;
                i ? He.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    He.remove(r, t))
            }
        }
    });
    var Ct = e.location
        , kt = pe.now()
        , Et = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
            n
    }
    ;
    var St = /\[\]$/
        , Nt = /\r?\n/g
        , Dt = /^(?:submit|button|image|reset|file)$/i
        , jt = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = pe.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                X(n, e[n], t, i);
        return r.join("&")
    }
        ,
        pe.fn.extend({
            serialize: function() {
                return pe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !_e.test(e))
                }).map(function(e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        });
    var At = /%20/g
        , qt = /#.*$/
        , Lt = /([?&])_=[^&]*/
        , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Ot = /^(?:GET|HEAD)$/
        , Pt = /^\/\//
        , Rt = {}
        , Mt = {}
        , It = "*/".concat("*")
        , Wt = Z.createElement("a");
    Wt.href = Ct.href,
        pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Ft.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? G(G(e, pe.ajaxSettings), t) : G(pe.ajaxSettings, e)
            },
            ajaxPrefilter: U(Rt),
            ajaxTransport: U(Mt),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var l, p, d, b, w, T = n;
                    c || (c = !0,
                    u && e.clearTimeout(u),
                        i = void 0,
                        a = s || "",
                        C.readyState = t > 0 ? 4 : 0,
                        l = t >= 200 && t < 300 || 304 === t,
                    r && (b = Y(h, C, r)),
                        b = Q(h, b, C, l),
                        l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"),
                        w && (pe.lastModified[o] = w),
                            w = C.getResponseHeader("etag"),
                        w && (pe.etag[o] = w)),
                            204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                                p = b.data,
                                d = b.error,
                                l = !d)) : (d = T,
                        !t && T || (T = "error",
                        t < 0 && (t = 0))),
                        C.status = t,
                        C.statusText = (n || T) + "",
                        l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]),
                        C.statusCode(x),
                        x = void 0,
                    f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
                        y.fireWith(g, [C, T]),
                    f && (m.trigger("ajaxComplete", [C, h]),
                    --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t,
                    t = void 0),
                    n = n || {};
                var i, o, a, s, u, l, c, f, p, d, h = pe.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? pe(g) : pe.event, v = pe.Deferred(), y = pe.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ht.exec(a); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                            b[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t),
                            r(0, t),
                            this
                    }
                };
                if (v.promise(C),
                        h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"),
                        h.type = n.method || n.type || h.method || h.type,
                        h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""],
                    null == h.crossDomain) {
                    l = Z.createElement("a");
                    try {
                        l.href = h.url,
                            l.href = l.href,
                            h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                    } catch (k) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)),
                        V(Rt, h, n, C),
                        c)
                    return C;
                f = pe.event && h.global,
                f && 0 === pe.active++ && pe.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Ot.test(h.type),
                    o = h.url.replace(qt, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length),
                    h.data && (o += (Et.test(o) ? "&" : "?") + h.data,
                        delete h.data),
                    h.cache === !1 && (o = o.replace(Lt, ""),
                        d = (Et.test(o) ? "&" : "?") + "_=" + kt++ + d),
                        h.url = o + d),
                h.ifModified && (pe.lastModified[o] && C.setRequestHeader("If-Modified-Since", pe.lastModified[o]),
                pe.etag[o] && C.setRequestHeader("If-None-Match", pe.etag[o])),
                (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                    C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers)
                    C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c))
                    return C.abort();
                if (T = "abort",
                        y.add(h.complete),
                        C.done(h.success),
                        C.fail(h.error),
                        i = V(Mt, h, n, C)) {
                    if (C.readyState = 1,
                        f && m.trigger("ajaxSend", [C, h]),
                            c)
                        return C;
                    h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1,
                            i.send(b, r)
                    } catch (k) {
                        if (c)
                            throw k;
                        r(-1, k)
                    }
                } else
                    r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pe.get(e, void 0, t, "script")
            }
        }),
        pe.each(["get", "post"], function(e, t) {
            pe[t] = function(e, n, r, i) {
                return pe.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    pe.ajax(pe.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, pe.isPlainObject(e) && e))
            }
        }),
        pe._evalUrl = function(e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        pe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (pe.isFunction(e) && (e = e.call(this[0])),
                    t = pe(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pe(this)
                        , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pe.isFunction(e);
                return this.each(function(n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    pe(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        pe.expr.pseudos.hidden = function(e) {
            return !pe.expr.pseudos.visible(e)
        }
        ,
        pe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        pe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
        , Bt = pe.ajaxSettings.xhr();
    ce.cors = !!Bt && "withCredentials"in Bt,
        ce.ajax = Bt = !!Bt,
        pe.ajaxTransport(function(t) {
            var n, r;
            if (ce.cors || Bt && !t.crossDomain)
                return {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                            for (a in t.xhrFields)
                                s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                        t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i)
                            s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                            }
                        }
                            ,
                            s.onload = n(),
                            r = s.onerror = n("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && e.setTimeout(function() {
                                    n && r()
                                })
                            }
                            ,
                            n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (u) {
                            if (n)
                                throw u
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }),
        pe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pe.globalEval(e),
                        e
                }
            }
        }),
        pe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        pe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = pe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            Z.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var _t = []
        , zt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _t.pop() || pe.expando + "_" + kt++;
            return this[e] = !0,
                e
        }
    }),
        pe.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(zt, "$1" + i) : t.jsonp !== !1 && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    t.converters["script json"] = function() {
                        return a || pe.error(i + " was not called"),
                            a[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = e[i],
                    e[i] = function() {
                        a = arguments
                    }
                    ,
                    r.always(function() {
                        void 0 === o ? pe(e).removeProp(i) : e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                            _t.push(i)),
                        a && pe.isFunction(o) && o(a[0]),
                            a = o = void 0
                    }),
                    "script"
        }),
        ce.createHTMLDocument = function() {
            var e = Z.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        pe.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
                t = !1);
            var r, i, o;
            return t || (ce.createHTMLDocument ? (t = Z.implementation.createHTMLDocument(""),
                r = t.createElement("base"),
                r.href = Z.location.href,
                t.head.appendChild(r)) : t = Z),
                i = we.exec(e),
                o = !n && [],
                i ? [t.createElement(i[1])] : (i = y([e], t, o),
                o && o.length && pe(o).remove(),
                    pe.merge([], i.childNodes))
        }
        ,
        pe.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = pe.trim(e.slice(s)),
                e = e.slice(0, s)),
                pe.isFunction(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && pe.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                    a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
                this
        }
        ,
        pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        pe.expr.pseudos.animated = function(e) {
            return pe.grep(pe.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        pe.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l, c = pe.css(e, "position"), f = pe(e), p = {};
                "static" === c && (e.style.position = "relative"),
                    s = f.offset(),
                    o = pe.css(e, "top"),
                    u = pe.css(e, "left"),
                    l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                    l ? (r = f.position(),
                        a = r.top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
                null != t.top && (p.top = t.top - s.top + a),
                null != t.left && (p.left = t.left - s.left + i),
                    "using"in t ? t.using.call(e, p) : f.css(p)
            }
        },
        pe.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        pe.offset.setOffset(this, e, t)
                    });
                var t, n, r, i, o = this[0];
                if (o)
                    return o.getClientRects().length ? (r = o.getBoundingClientRect(),
                        r.width || r.height ? (i = o.ownerDocument,
                            n = J(i),
                            t = i.documentElement,
                            {
                                top: r.top + n.pageYOffset - t.clientTop,
                                left: r.left + n.pageXOffset - t.clientLeft
                            }) : r) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    pe.nodeName(e[0], "html") || (r = e.offset()),
                        r = {
                            top: r.top + pe.css(e[0], "borderTopWidth", !0),
                            left: r.left + pe.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: t.top - r.top - pe.css(n, "marginTop", !0),
                            left: t.left - r.left - pe.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === pe.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Ge
                })
            }
        }),
        pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            pe.fn[e] = function(r) {
                return qe(this, function(e, r, i) {
                    var o = J(e);
                    return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }),
        pe.each(["top", "left"], function(e, t) {
            pe.cssHooks[t] = q(ce.pixelPosition, function(e, n) {
                if (n)
                    return n = A(e, t),
                        it.test(n) ? pe(e).position()[t] + "px" : n
            })
        }),
        pe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                pe.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                        , s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return qe(this, function(t, n, i) {
                        var o;
                        return pe.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? pe.css(t, n, s) : pe.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }),
        pe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        pe.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var Xt = e.jQuery
        , Ut = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = Ut),
        t && e.jQuery === pe && (e.jQuery = Xt),
            pe
    }
        ,
    t || (e.jQuery = e.$ = pe),
        pe
});
!function(e, i, o) {
    "undefined" != typeof module && module.exports ? module.exports = o() : "function" == typeof define && define.amd ? define(i, o) : e[i] = o()
}(this, "bowser", function() {
    function e(e) {
        function i(i) {
            var o = e.match(i);
            return o && o.length > 1 && o[1] || ""
        }
        function o(i) {
            var o = e.match(i);
            return o && o.length > 1 && o[2] || ""
        }
        var s, r = i(/(ipod|iphone|ipad)/i).toLowerCase(), n = /like android/i.test(e), a = !n && /android/i.test(e), d = /nexus\s*[0-6]\s*/i.test(e), m = !d && /nexus\s*[0-9]+/i.test(e), v = /CrOS/.test(e), p = /silk/i.test(e), l = /sailfish/i.test(e), f = /tizen/i.test(e), c = /(web|hpw)os/i.test(e), u = /windows phone/i.test(e), h = (/SamsungBrowser/i.test(e),
        !u && /windows/i.test(e)), b = !r && !p && /macintosh/i.test(e), w = !a && !l && !f && !c && /linux/i.test(e), g = i(/edge\/(\d+(\.\d+)?)/i), k = i(/version\/(\d+(\.\d+)?)/i), y = /tablet/i.test(e), x = !y && /[^-]mobi/i.test(e), S = /xbox/i.test(e);
        /opera/i.test(e) ? s = {
            name: "Opera",
            opera: t,
            version: k || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        } : /opr|opios/i.test(e) ? s = {
            name: "Opera",
            opera: t,
            version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || k
        } : /SamsungBrowser/i.test(e) ? s = {
            name: "Samsung Internet for Android",
            samsungBrowser: t,
            version: k || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /coast/i.test(e) ? s = {
            name: "Opera Coast",
            coast: t,
            version: k || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        } : /yabrowser/i.test(e) ? s = {
            name: "Yandex Browser",
            yandexbrowser: t,
            version: k || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /ucbrowser/i.test(e) ? s = {
            name: "UC Browser",
            ucbrowser: t,
            version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        } : /mxios/i.test(e) ? s = {
            name: "Maxthon",
            maxthon: t,
            version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        } : /epiphany/i.test(e) ? s = {
            name: "Epiphany",
            epiphany: t,
            version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        } : /puffin/i.test(e) ? s = {
            name: "Puffin",
            puffin: t,
            version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        } : /sleipnir/i.test(e) ? s = {
            name: "Sleipnir",
            sleipnir: t,
            version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        } : /k-meleon/i.test(e) ? s = {
            name: "K-Meleon",
            kMeleon: t,
            version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        } : u ? (s = {
            name: "Windows Phone",
            windowsphone: t
        },
            g ? (s.msedge = t,
                s.version = g) : (s.msie = t,
                s.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? s = {
            name: "Internet Explorer",
            msie: t,
            version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : v ? s = {
            name: "Chrome",
            chromeos: t,
            chromeBook: t,
            chrome: t,
            version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /chrome.+? edge/i.test(e) ? s = {
            name: "Microsoft Edge",
            msedge: t,
            version: g
        } : /vivaldi/i.test(e) ? s = {
            name: "Vivaldi",
            vivaldi: t,
            version: i(/vivaldi\/(\d+(\.\d+)?)/i) || k
        } : l ? s = {
            name: "Sailfish",
            sailfish: t,
            version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(e) ? s = {
            name: "SeaMonkey",
            seamonkey: t,
            version: i(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel|fxios/i.test(e) ? (s = {
            name: "Firefox",
            firefox: t,
            version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        },
        /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (s.firefoxos = t)) : p ? s = {
            name: "Amazon Silk",
            silk: t,
            version: i(/silk\/(\d+(\.\d+)?)/i)
        } : /phantom/i.test(e) ? s = {
            name: "PhantomJS",
            phantom: t,
            version: i(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /slimerjs/i.test(e) ? s = {
            name: "SlimerJS",
            slimer: t,
            version: i(/slimerjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? s = {
            name: "BlackBerry",
            blackberry: t,
            version: k || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : c ? (s = {
            name: "WebOS",
            webos: t,
            version: k || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        },
        /touchpad\//i.test(e) && (s.touchpad = t)) : /bada/i.test(e) ? s = {
            name: "Bada",
            bada: t,
            version: i(/dolfin\/(\d+(\.\d+)?)/i)
        } : f ? s = {
            name: "Tizen",
            tizen: t,
            version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || k
        } : /qupzilla/i.test(e) ? s = {
            name: "QupZilla",
            qupzilla: t,
            version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || k
        } : /chromium/i.test(e) ? s = {
            name: "Chromium",
            chromium: t,
            version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || k
        } : /chrome|crios|crmo/i.test(e) ? s = {
            name: "Chrome",
            chrome: t,
            version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : a ? s = {
            name: "Android",
            version: k
        } : /safari|applewebkit/i.test(e) ? (s = {
            name: "Safari",
            safari: t
        },
        k && (s.version = k)) : r ? (s = {
            name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
        },
        k && (s.version = k)) : s = /googlebot/i.test(e) ? {
            name: "Googlebot",
            googlebot: t,
            version: i(/googlebot\/(\d+(\.\d+))/i) || k
        } : {
            name: i(/^(.*)\/(.*) /),
            version: o(/^(.*)\/(.*) /)
        },
            !s.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (s.name = s.name || "Blink",
                s.blink = t) : (s.name = s.name || "Webkit",
                s.webkit = t),
            !s.version && k && (s.version = k)) : !s.opera && /gecko\//i.test(e) && (s.name = s.name || "Gecko",
                s.gecko = t,
                s.version = s.version || i(/gecko\/(\d+(\.\d+)?)/i)),
            s.windowsphone || s.msedge || !a && !s.silk ? s.windowsphone || s.msedge || !r ? b ? s.mac = t : S ? s.xbox = t : h ? s.windows = t : w && (s.linux = t) : (s[r] = t,
                s.ios = t) : s.android = t;
        var B = "";
        s.windowsphone ? B = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r ? (B = i(/os (\d+([_\s]\d+)*) like mac os x/i),
            B = B.replace(/[_\s]/g, ".")) : a ? B = i(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? B = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? B = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? B = i(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (B = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
        B && (s.osversion = B);
        var z = B.split(".")[0];
        return y || m || "ipad" == r || a && (3 == z || z >= 4 && !x) || s.silk ? s.tablet = t : (x || "iphone" == r || "ipod" == r || a || d || s.blackberry || s.webos || s.bada) && (s.mobile = t),
            s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = t : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = t : s.x = t,
            s
    }
    function i(e) {
        return e.split(".").length
    }
    function o(e, i) {
        var o, s = [];
        if (Array.prototype.map)
            return Array.prototype.map.call(e, i);
        for (o = 0; o < e.length; o++)
            s.push(i(e[o]));
        return s
    }
    function s(e) {
        for (var s = Math.max(i(e[0]), i(e[1])), r = o(e, function(e) {
            var r = s - i(e);
            return e += new Array(r + 1).join(".0"),
                o(e.split("."), function(e) {
                    return new Array(20 - e.length).join("0") + e
                }).reverse()
        }); --s >= 0; ) {
            if (r[0][s] > r[1][s])
                return 1;
            if (r[0][s] !== r[1][s])
                return -1;
            if (0 === s)
                return 0
        }
    }
    function r(i, o, r) {
        var n = a;
        "string" == typeof o && (r = o,
            o = void 0),
        void 0 === o && (o = !1),
        r && (n = e(r));
        var t = "" + n.version;
        for (var d in i)
            if (i.hasOwnProperty(d) && n[d]) {
                if ("string" != typeof i[d])
                    throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(i));
                return s([t, i[d]]) < 0
            }
        return o
    }
    function n(e, i, o) {
        return !r(e, i, o)
    }
    var t = !0
        , a = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
    return a.test = function(e) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if ("string" == typeof o && o in a)
                return !0
        }
        return !1
    }
        ,
        a.isUnsupportedBrowser = r,
        a.compareVersions = s,
        a.check = n,
        a._detect = e,
        a
});
(function() {
        function n(n) {
            function t(t, r, e, u, i, o) {
                for (; i >= 0 && o > i; i += n) {
                    var a = u ? u[i] : i;
                    e = r(e, t[a], a, t)
                }
                return e
            }
            return function(r, e, u, i) {
                e = b(e, i, 4);
                var o = !k(r) && m.keys(r)
                    , a = (o || r).length
                    , c = n > 0 ? 0 : a - 1;
                return arguments.length < 3 && (u = r[o ? o[c] : c],
                    c += n),
                    t(r, e, u, o, c, a)
            }
        }
        function t(n) {
            return function(t, r, e) {
                r = x(r, e);
                for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                    if (r(t[i], i, t))
                        return i;
                return -1
            }
        }
        function r(n, t, r) {
            return function(e, u, i) {
                var o = 0
                    , a = O(e);
                if ("number" == typeof i)
                    n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
                else if (r && i && a)
                    return i = r(e, u),
                        e[i] === u ? i : -1;
                if (u !== u)
                    return i = t(l.call(e, o, a), m.isNaN),
                        i >= 0 ? i + o : -1;
                for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                    if (e[i] === u)
                        return i;
                return -1
            }
        }
        function e(n, t) {
            var r = I.length
                , e = n.constructor
                , u = m.isFunction(e) && e.prototype || a
                , i = "constructor";
            for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; )
                i = I[r],
                i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
        }
        var u = this
            , i = u._
            , o = Array.prototype
            , a = Object.prototype
            , c = Function.prototype
            , f = o.push
            , l = o.slice
            , s = a.toString
            , p = a.hasOwnProperty
            , h = Array.isArray
            , v = Object.keys
            , y = c.bind
            , d = Object.create
            , g = function() {}
            , m = function(n) {
            return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m),
            exports._ = m) : u._ = m,
            m.VERSION = "1.8.3";
        var b = function(n, t, r) {
            if (void 0 === t)
                return n;
            switch (null == r ? 3 : r) {
                case 1:
                    return function(r) {
                        return n.call(t, r)
                    }
                        ;
                case 2:
                    return function(r, e) {
                        return n.call(t, r, e)
                    }
                        ;
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u)
                    }
                        ;
                case 4:
                    return function(r, e, u, i) {
                        return n.call(t, r, e, u, i)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        }
            , x = function(n, t, r) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
        };
        m.iteratee = function(n, t) {
            return x(n, t, 1 / 0)
        }
        ;
        var _ = function(n, t) {
            return function(r) {
                var e = arguments.length;
                if (2 > e || null == r)
                    return r;
                for (var u = 1; e > u; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                        var f = o[c];
                        t && void 0 !== r[f] || (r[f] = i[f])
                    }
                return r
            }
        }
            , j = function(n) {
            if (!m.isObject(n))
                return {};
            if (d)
                return d(n);
            g.prototype = n;
            var t = new g;
            return g.prototype = null,
                t
        }
            , w = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        }
            , A = Math.pow(2, 53) - 1
            , O = w("length")
            , k = function(n) {
            var t = O(n);
            return "number" == typeof t && t >= 0 && A >= t
        };
        m.each = m.forEach = function(n, t, r) {
            t = b(t, r);
            var e, u;
            if (k(n))
                for (e = 0,
                         u = n.length; u > e; e++)
                    t(n[e], e, n);
            else {
                var i = m.keys(n);
                for (e = 0,
                         u = i.length; u > e; e++)
                    t(n[i[e]], i[e], n)
            }
            return n
        }
            ,
            m.map = m.collect = function(n, t, r) {
                t = x(t, r);
                for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
                    var a = e ? e[o] : o;
                    i[o] = t(n[a], a, n)
                }
                return i
            }
            ,
            m.reduce = m.foldl = m.inject = n(1),
            m.reduceRight = m.foldr = n(-1),
            m.find = m.detect = function(n, t, r) {
                var e;
                return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r),
                    void 0 !== e && e !== -1 ? n[e] : void 0
            }
            ,
            m.filter = m.select = function(n, t, r) {
                var e = [];
                return t = x(t, r),
                    m.each(n, function(n, r, u) {
                        t(n, r, u) && e.push(n)
                    }),
                    e
            }
            ,
            m.reject = function(n, t, r) {
                return m.filter(n, m.negate(x(t)), r)
            }
            ,
            m.every = m.all = function(n, t, r) {
                t = x(t, r);
                for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                    var o = e ? e[i] : i;
                    if (!t(n[o], o, n))
                        return !1
                }
                return !0
            }
            ,
            m.some = m.any = function(n, t, r) {
                t = x(t, r);
                for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                    var o = e ? e[i] : i;
                    if (t(n[o], o, n))
                        return !0
                }
                return !1
            }
            ,
            m.contains = m.includes = m.include = function(n, t, r, e) {
                return k(n) || (n = m.values(n)),
                ("number" != typeof r || e) && (r = 0),
                m.indexOf(n, t, r) >= 0
            }
            ,
            m.invoke = function(n, t) {
                var r = l.call(arguments, 2)
                    , e = m.isFunction(t);
                return m.map(n, function(n) {
                    var u = e ? t : n[t];
                    return null == u ? u : u.apply(n, r)
                })
            }
            ,
            m.pluck = function(n, t) {
                return m.map(n, m.property(t))
            }
            ,
            m.where = function(n, t) {
                return m.filter(n, m.matcher(t))
            }
            ,
            m.findWhere = function(n, t) {
                return m.find(n, m.matcher(t))
            }
            ,
            m.max = function(n, t, r) {
                var e, u, i = -1 / 0, o = -1 / 0;
                if (null == t && null != n) {
                    n = k(n) ? n : m.values(n);
                    for (var a = 0, c = n.length; c > a; a++)
                        e = n[a],
                        e > i && (i = e)
                } else
                    t = x(t, r),
                        m.each(n, function(n, r, e) {
                            u = t(n, r, e),
                            (u > o || u === -1 / 0 && i === -1 / 0) && (i = n,
                                o = u)
                        });
                return i
            }
            ,
            m.min = function(n, t, r) {
                var e, u, i = 1 / 0, o = 1 / 0;
                if (null == t && null != n) {
                    n = k(n) ? n : m.values(n);
                    for (var a = 0, c = n.length; c > a; a++)
                        e = n[a],
                        i > e && (i = e)
                } else
                    t = x(t, r),
                        m.each(n, function(n, r, e) {
                            u = t(n, r, e),
                            (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n,
                                o = u)
                        });
                return i
            }
            ,
            m.shuffle = function(n) {
                for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
                    t = m.random(0, i),
                    t !== i && (u[i] = u[t]),
                        u[t] = r[i];
                return u
            }
            ,
            m.sample = function(n, t, r) {
                return null == t || r ? (k(n) || (n = m.values(n)),
                    n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
            }
            ,
            m.sortBy = function(n, t, r) {
                return t = x(t, r),
                    m.pluck(m.map(n, function(n, r, e) {
                        return {
                            value: n,
                            index: r,
                            criteria: t(n, r, e)
                        }
                    }).sort(function(n, t) {
                        var r = n.criteria
                            , e = t.criteria;
                        if (r !== e) {
                            if (r > e || void 0 === r)
                                return 1;
                            if (e > r || void 0 === e)
                                return -1
                        }
                        return n.index - t.index
                    }), "value")
            }
        ;
        var F = function(n) {
            return function(t, r, e) {
                var u = {};
                return r = x(r, e),
                    m.each(t, function(e, i) {
                        var o = r(e, i, t);
                        n(u, e, o)
                    }),
                    u
            }
        };
        m.groupBy = F(function(n, t, r) {
            m.has(n, r) ? n[r].push(t) : n[r] = [t]
        }),
            m.indexBy = F(function(n, t, r) {
                n[r] = t
            }),
            m.countBy = F(function(n, t, r) {
                m.has(n, r) ? n[r]++ : n[r] = 1
            }),
            m.toArray = function(n) {
                return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
            }
            ,
            m.size = function(n) {
                return null == n ? 0 : k(n) ? n.length : m.keys(n).length
            }
            ,
            m.partition = function(n, t, r) {
                t = x(t, r);
                var e = []
                    , u = [];
                return m.each(n, function(n, r, i) {
                    (t(n, r, i) ? e : u).push(n)
                }),
                    [e, u]
            }
            ,
            m.first = m.head = m.take = function(n, t, r) {
                return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
            }
            ,
            m.initial = function(n, t, r) {
                return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
            }
            ,
            m.last = function(n, t, r) {
                return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
            }
            ,
            m.rest = m.tail = m.drop = function(n, t, r) {
                return l.call(n, null == t || r ? 1 : t)
            }
            ,
            m.compact = function(n) {
                return m.filter(n, m.identity)
            }
        ;
        var S = function(n, t, r, e) {
            for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
                var c = n[o];
                if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                    t || (c = S(c, t, r));
                    var f = 0
                        , l = c.length;
                    for (u.length += l; l > f; )
                        u[i++] = c[f++]
                } else
                    r || (u[i++] = c)
            }
            return u
        };
        m.flatten = function(n, t) {
            return S(n, t, !1)
        }
            ,
            m.without = function(n) {
                return m.difference(n, l.call(arguments, 1))
            }
            ,
            m.uniq = m.unique = function(n, t, r, e) {
                m.isBoolean(t) || (e = r,
                    r = t,
                    t = !1),
                null != r && (r = x(r, e));
                for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
                    var c = n[o]
                        , f = r ? r(c, o, n) : c;
                    t ? (o && i === f || u.push(c),
                        i = f) : r ? m.contains(i, f) || (i.push(f),
                        u.push(c)) : m.contains(u, c) || u.push(c)
                }
                return u
            }
            ,
            m.union = function() {
                return m.uniq(S(arguments, !0, !0))
            }
            ,
            m.intersection = function(n) {
                for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
                    var i = n[e];
                    if (!m.contains(t, i)) {
                        for (var o = 1; r > o && m.contains(arguments[o], i); o++)
                            ;
                        o === r && t.push(i)
                    }
                }
                return t
            }
            ,
            m.difference = function(n) {
                var t = S(arguments, !0, !0, 1);
                return m.filter(n, function(n) {
                    return !m.contains(t, n)
                })
            }
            ,
            m.zip = function() {
                return m.unzip(arguments)
            }
            ,
            m.unzip = function(n) {
                for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)
                    r[e] = m.pluck(n, e);
                return r
            }
            ,
            m.object = function(n, t) {
                for (var r = {}, e = 0, u = O(n); u > e; e++)
                    t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
                return r
            }
            ,
            m.findIndex = t(1),
            m.findLastIndex = t(-1),
            m.sortedIndex = function(n, t, r, e) {
                r = x(r, e, 1);
                for (var u = r(t), i = 0, o = O(n); o > i; ) {
                    var a = Math.floor((i + o) / 2);
                    r(n[a]) < u ? i = a + 1 : o = a
                }
                return i
            }
            ,
            m.indexOf = r(1, m.findIndex, m.sortedIndex),
            m.lastIndexOf = r(-1, m.findLastIndex),
            m.range = function(n, t, r) {
                null == t && (t = n || 0,
                    n = 0),
                    r = r || 1;
                for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++,
                    n += r)
                    u[i] = n;
                return u
            }
        ;
        var E = function(n, t, r, e, u) {
            if (!(e instanceof t))
                return n.apply(r, u);
            var i = j(n.prototype)
                , o = n.apply(i, u);
            return m.isObject(o) ? o : i
        };
        m.bind = function(n, t) {
            if (y && n.bind === y)
                return y.apply(n, l.call(arguments, 1));
            if (!m.isFunction(n))
                throw new TypeError("Bind must be called on a function");
            var r = l.call(arguments, 2)
                , e = function() {
                return E(n, e, t, this, r.concat(l.call(arguments)))
            };
            return e
        }
            ,
            m.partial = function(n) {
                var t = l.call(arguments, 1)
                    , r = function() {
                    for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)
                        i[o] = t[o] === m ? arguments[e++] : t[o];
                    for (; e < arguments.length; )
                        i.push(arguments[e++]);
                    return E(n, r, this, this, i)
                };
                return r
            }
            ,
            m.bindAll = function(n) {
                var t, r, e = arguments.length;
                if (1 >= e)
                    throw new Error("bindAll must be passed function names");
                for (t = 1; e > t; t++)
                    r = arguments[t],
                        n[r] = m.bind(n[r], n);
                return n
            }
            ,
            m.memoize = function(n, t) {
                var r = function(e) {
                    var u = r.cache
                        , i = "" + (t ? t.apply(this, arguments) : e);
                    return m.has(u, i) || (u[i] = n.apply(this, arguments)),
                        u[i]
                };
                return r.cache = {},
                    r
            }
            ,
            m.delay = function(n, t) {
                var r = l.call(arguments, 2);
                return setTimeout(function() {
                    return n.apply(null, r)
                }, t)
            }
            ,
            m.defer = m.partial(m.delay, m, 1),
            m.throttle = function(n, t, r) {
                var e, u, i, o = null, a = 0;
                r || (r = {});
                var c = function() {
                    a = r.leading === !1 ? 0 : m.now(),
                        o = null,
                        i = n.apply(e, u),
                    o || (e = u = null)
                };
                return function() {
                    var f = m.now();
                    a || r.leading !== !1 || (a = f);
                    var l = t - (f - a);
                    return e = this,
                        u = arguments,
                        0 >= l || l > t ? (o && (clearTimeout(o),
                            o = null),
                            a = f,
                            i = n.apply(e, u),
                        o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)),
                        i
                }
            }
            ,
            m.debounce = function(n, t, r) {
                var e, u, i, o, a, c = function() {
                    var f = m.now() - o;
                    t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null,
                    r || (a = n.apply(i, u),
                    e || (i = u = null)))
                };
                return function() {
                    i = this,
                        u = arguments,
                        o = m.now();
                    var f = r && !e;
                    return e || (e = setTimeout(c, t)),
                    f && (a = n.apply(i, u),
                        i = u = null),
                        a
                }
            }
            ,
            m.wrap = function(n, t) {
                return m.partial(t, n)
            }
            ,
            m.negate = function(n) {
                return function() {
                    return !n.apply(this, arguments)
                }
            }
            ,
            m.compose = function() {
                var n = arguments
                    , t = n.length - 1;
                return function() {
                    for (var r = t, e = n[t].apply(this, arguments); r--; )
                        e = n[r].call(this, e);
                    return e
                }
            }
            ,
            m.after = function(n, t) {
                return function() {
                    return --n < 1 ? t.apply(this, arguments) : void 0
                }
            }
            ,
            m.before = function(n, t) {
                var r;
                return function() {
                    return --n > 0 && (r = t.apply(this, arguments)),
                    1 >= n && (t = null),
                        r
                }
            }
            ,
            m.once = m.partial(m.before, 2);
        var M = !{
            toString: null
        }.propertyIsEnumerable("toString")
            , I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        m.keys = function(n) {
            if (!m.isObject(n))
                return [];
            if (v)
                return v(n);
            var t = [];
            for (var r in n)
                m.has(n, r) && t.push(r);
            return M && e(n, t),
                t
        }
            ,
            m.allKeys = function(n) {
                if (!m.isObject(n))
                    return [];
                var t = [];
                for (var r in n)
                    t.push(r);
                return M && e(n, t),
                    t
            }
            ,
            m.values = function(n) {
                for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
                    e[u] = n[t[u]];
                return e
            }
            ,
            m.mapObject = function(n, t, r) {
                t = x(t, r);
                for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)
                    e = u[a],
                        o[e] = t(n[e], e, n);
                return o
            }
            ,
            m.pairs = function(n) {
                for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
                    e[u] = [t[u], n[t[u]]];
                return e
            }
            ,
            m.invert = function(n) {
                for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)
                    t[n[r[e]]] = r[e];
                return t
            }
            ,
            m.functions = m.methods = function(n) {
                var t = [];
                for (var r in n)
                    m.isFunction(n[r]) && t.push(r);
                return t.sort()
            }
            ,
            m.extend = _(m.allKeys),
            m.extendOwn = m.assign = _(m.keys),
            m.findKey = function(n, t, r) {
                t = x(t, r);
                for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
                    if (e = u[i],
                            t(n[e], e, n))
                        return e
            }
            ,
            m.pick = function(n, t, r) {
                var e, u, i = {}, o = n;
                if (null == o)
                    return i;
                m.isFunction(t) ? (u = m.allKeys(o),
                    e = b(t, r)) : (u = S(arguments, !1, !1, 1),
                    e = function(n, t, r) {
                        return t in r
                    }
                    ,
                    o = Object(o));
                for (var a = 0, c = u.length; c > a; a++) {
                    var f = u[a]
                        , l = o[f];
                    e(l, f, o) && (i[f] = l)
                }
                return i
            }
            ,
            m.omit = function(n, t, r) {
                if (m.isFunction(t))
                    t = m.negate(t);
                else {
                    var e = m.map(S(arguments, !1, !1, 1), String);
                    t = function(n, t) {
                        return !m.contains(e, t)
                    }
                }
                return m.pick(n, t, r)
            }
            ,
            m.defaults = _(m.allKeys, !0),
            m.create = function(n, t) {
                var r = j(n);
                return t && m.extendOwn(r, t),
                    r
            }
            ,
            m.clone = function(n) {
                return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
            }
            ,
            m.tap = function(n, t) {
                return t(n),
                    n
            }
            ,
            m.isMatch = function(n, t) {
                var r = m.keys(t)
                    , e = r.length;
                if (null == n)
                    return !e;
                for (var u = Object(n), i = 0; e > i; i++) {
                    var o = r[i];
                    if (t[o] !== u[o] || !(o in u))
                        return !1
                }
                return !0
            }
        ;
        var N = function(n, t, r, e) {
            if (n === t)
                return 0 !== n || 1 / n === 1 / t;
            if (null == n || null == t)
                return n === t;
            n instanceof m && (n = n._wrapped),
            t instanceof m && (t = t._wrapped);
            var u = s.call(n);
            if (u !== s.call(t))
                return !1;
            switch (u) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + n == "" + t;
                case "[object Number]":
                    return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +n === +t
            }
            var i = "[object Array]" === u;
            if (!i) {
                if ("object" != typeof n || "object" != typeof t)
                    return !1;
                var o = n.constructor
                    , a = t.constructor;
                if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor"in n && "constructor"in t)
                    return !1
            }
            r = r || [],
                e = e || [];
            for (var c = r.length; c--; )
                if (r[c] === n)
                    return e[c] === t;
            if (r.push(n),
                    e.push(t),
                    i) {
                if (c = n.length,
                    c !== t.length)
                    return !1;
                for (; c--; )
                    if (!N(n[c], t[c], r, e))
                        return !1
            } else {
                var f, l = m.keys(n);
                if (c = l.length,
                    m.keys(t).length !== c)
                    return !1;
                for (; c--; )
                    if (f = l[c],
                        !m.has(t, f) || !N(n[f], t[f], r, e))
                        return !1
            }
            return r.pop(),
                e.pop(),
                !0
        };
        m.isEqual = function(n, t) {
            return N(n, t)
        }
            ,
            m.isEmpty = function(n) {
                return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
            }
            ,
            m.isElement = function(n) {
                return !(!n || 1 !== n.nodeType)
            }
            ,
            m.isArray = h || function(n) {
                return "[object Array]" === s.call(n)
            }
            ,
            m.isObject = function(n) {
                var t = typeof n;
                return "function" === t || "object" === t && !!n
            }
            ,
            m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
                m["is" + n] = function(t) {
                    return s.call(t) === "[object " + n + "]"
                }
            }),
        m.isArguments(arguments) || (m.isArguments = function(n) {
                return m.has(n, "callee")
            }
        ),
        "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
                return "function" == typeof n || !1
            }
        ),
            m.isFinite = function(n) {
                return isFinite(n) && !isNaN(parseFloat(n))
            }
            ,
            m.isNaN = function(n) {
                return m.isNumber(n) && n !== +n
            }
            ,
            m.isBoolean = function(n) {
                return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
            }
            ,
            m.isNull = function(n) {
                return null === n
            }
            ,
            m.isUndefined = function(n) {
                return void 0 === n
            }
            ,
            m.has = function(n, t) {
                return null != n && p.call(n, t)
            }
            ,
            m.noConflict = function() {
                return u._ = i,
                    this
            }
            ,
            m.identity = function(n) {
                return n
            }
            ,
            m.constant = function(n) {
                return function() {
                    return n
                }
            }
            ,
            m.noop = function() {}
            ,
            m.property = w,
            m.propertyOf = function(n) {
                return null == n ? function() {}
                    : function(t) {
                        return n[t]
                    }
            }
            ,
            m.matcher = m.matches = function(n) {
                return n = m.extendOwn({}, n),
                    function(t) {
                        return m.isMatch(t, n)
                    }
            }
            ,
            m.times = function(n, t, r) {
                var e = Array(Math.max(0, n));
                t = b(t, r, 1);
                for (var u = 0; n > u; u++)
                    e[u] = t(u);
                return e
            }
            ,
            m.random = function(n, t) {
                return null == t && (t = n,
                    n = 0),
                n + Math.floor(Math.random() * (t - n + 1))
            }
            ,
            m.now = Date.now || function() {
                return (new Date).getTime()
            }
        ;
        var B = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
            , T = m.invert(B)
            , R = function(n) {
            var t = function(t) {
                return n[t]
            }
                , r = "(?:" + m.keys(n).join("|") + ")"
                , e = RegExp(r)
                , u = RegExp(r, "g");
            return function(n) {
                return n = null == n ? "" : "" + n,
                    e.test(n) ? n.replace(u, t) : n
            }
        };
        m.escape = R(B),
            m.unescape = R(T),
            m.result = function(n, t, r) {
                var e = null == n ? void 0 : n[t];
                return void 0 === e && (e = r),
                    m.isFunction(e) ? e.call(n) : e
            }
        ;
        var q = 0;
        m.uniqueId = function(n) {
            var t = ++q + "";
            return n ? n + t : t
        }
            ,
            m.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var K = /(.)^/
            , z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
            , D = /\\|'|\r|\n|\u2028|\u2029/g
            , L = function(n) {
            return "\\" + z[n]
        };
        m.template = function(n, t, r) {
            !t && r && (t = r),
                t = m.defaults({}, t, m.templateSettings);
            var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g")
                , u = 0
                , i = "__p+='";
            n.replace(e, function(t, r, e, o, a) {
                return i += n.slice(u, a).replace(D, L),
                    u = a + t.length,
                    r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"),
                    t
            }),
                i += "';\n",
            t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
                i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj","_",i)
            } catch (a) {
                throw a.source = i,
                    a
            }
            var c = function(n) {
                return o.call(this, n, m)
            }
                , f = t.variable || "obj";
            return c.source = "function(" + f + "){\n" + i + "}",
                c
        }
            ,
            m.chain = function(n) {
                var t = m(n);
                return t._chain = !0,
                    t
            }
        ;
        var P = function(n, t) {
            return n._chain ? m(t).chain() : t
        };
        m.mixin = function(n) {
            m.each(m.functions(n), function(t) {
                var r = m[t] = n[t];
                m.prototype[t] = function() {
                    var n = [this._wrapped];
                    return f.apply(n, arguments),
                        P(this, r.apply(m, n))
                }
            })
        }
            ,
            m.mixin(m),
            m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
                var t = o[n];
                m.prototype[n] = function() {
                    var r = this._wrapped;
                    return t.apply(r, arguments),
                    "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
                        P(this, r)
                }
            }),
            m.each(["concat", "join", "slice"], function(n) {
                var t = o[n];
                m.prototype[n] = function() {
                    return P(this, t.apply(this._wrapped, arguments))
                }
            }),
            m.prototype.value = function() {
                return this._wrapped
            }
            ,
            m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
            m.prototype.toString = function() {
                return "" + this._wrapped
            }
            ,
        "function" == typeof define && define.amd && define("underscore", [], function() {
            return m
        })
    }
).call(this);
!function(e) {
    "use strict";
    function t(t, r) {
        if (r = r || {},
            r.worker && S.WORKERS_SUPPORTED) {
            var n = f();
            return n.userStep = r.step,
                n.userChunk = r.chunk,
                n.userComplete = r.complete,
                n.userError = r.error,
                r.step = m(r.step),
                r.chunk = m(r.chunk),
                r.complete = m(r.complete),
                r.error = m(r.error),
                delete r.worker,
                void n.postMessage({
                    input: t,
                    config: r,
                    workerId: n.id
                })
        }
        var o = null;
        return "string" == typeof t ? o = r.download ? new i(r) : new a(r) : (e.File && t instanceof File || t instanceof Object) && (o = new s(r)),
            o.stream(t)
    }
    function r(e, t) {
        function r() {
            "object" == typeof t && ("string" == typeof t.delimiter && 1 == t.delimiter.length && -1 == S.BAD_DELIMITERS.indexOf(t.delimiter) && (u = t.delimiter),
            ("boolean" == typeof t.quotes || t.quotes instanceof Array) && (o = t.quotes),
            "string" == typeof t.newline && (h = t.newline))
        }
        function n(e) {
            if ("object" != typeof e)
                return [];
            var t = [];
            for (var r in e)
                t.push(r);
            return t
        }
        function i(e, t) {
            var r = "";
            "string" == typeof e && (e = JSON.parse(e)),
            "string" == typeof t && (t = JSON.parse(t));
            var n = e instanceof Array && e.length > 0
                , i = !(t[0]instanceof Array);
            if (n) {
                for (var a = 0; a < e.length; a++)
                    a > 0 && (r += u),
                        r += s(e[a], a);
                t.length > 0 && (r += h)
            }
            for (var o = 0; o < t.length; o++) {
                for (var f = n ? e.length : t[o].length, c = 0; f > c; c++) {
                    c > 0 && (r += u);
                    var d = n && i ? e[c] : c;
                    r += s(t[o][d], c)
                }
                o < t.length - 1 && (r += h)
            }
            return r
        }
        function s(e, t) {
            if ("undefined" == typeof e || null === e)
                return "";
            e = e.toString().replace(/"/g, '""');
            var r = "boolean" == typeof o && o || o instanceof Array && o[t] || a(e, S.BAD_DELIMITERS) || e.indexOf(u) > -1 || " " == e.charAt(0) || " " == e.charAt(e.length - 1);
            return r ? '"' + e + '"' : e
        }
        function a(e, t) {
            for (var r = 0; r < t.length; r++)
                if (e.indexOf(t[r]) > -1)
                    return !0;
            return !1
        }
        var o = !1
            , u = ","
            , h = "\r\n";
        if (r(),
            "string" == typeof e && (e = JSON.parse(e)),
            e instanceof Array) {
            if (!e.length || e[0]instanceof Array)
                return i(null, e);
            if ("object" == typeof e[0])
                return i(n(e[0]), e)
        } else if ("object" == typeof e)
            return "string" == typeof e.data && (e.data = JSON.parse(e.data)),
            e.data instanceof Array && (e.fields || (e.fields = e.data[0]instanceof Array ? e.fields : n(e.data[0])),
            e.data[0]instanceof Array || "object" == typeof e.data[0] || (e.data = [e.data])),
                i(e.fields || [], e.data || []);
        throw "exception: Unable to serialize unrecognized input"
    }
    function n(t) {
        function r(e) {
            var t = _(e);
            t.chunkSize = parseInt(t.chunkSize),
            e.step || e.chunk || (t.chunkSize = null),
                this._handle = new o(t),
                this._handle.streamer = this,
                this._config = t
        }
        this._handle = null,
            this._paused = !1,
            this._finished = !1,
            this._input = null,
            this._baseIndex = 0,
            this._partialLine = "",
            this._rowCount = 0,
            this._start = 0,
            this._nextChunk = null,
            this.isFirstChunk = !0,
            this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            },
            r.call(this, t),
            this.parseChunk = function(t) {
                if (this.isFirstChunk && m(this._config.beforeFirstChunk)) {
                    var r = this._config.beforeFirstChunk(t);
                    void 0 !== r && (t = r)
                }
                this.isFirstChunk = !1;
                var n = this._partialLine + t;
                this._partialLine = "";
                var i = this._handle.parse(n, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var s = i.meta.cursor;
                    this._finished || (this._partialLine = n.substring(s - this._baseIndex),
                        this._baseIndex = s),
                    i && i.data && (this._rowCount += i.data.length);
                    var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (y)
                        e.postMessage({
                            results: i,
                            workerId: S.WORKER_ID,
                            finished: a
                        });
                    else if (m(this._config.chunk)) {
                        if (this._config.chunk(i, this._handle),
                                this._paused)
                            return;
                        i = void 0,
                            this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(i.data),
                        this._completeResults.errors = this._completeResults.errors.concat(i.errors),
                        this._completeResults.meta = i.meta),
                    !a || !m(this._config.complete) || i && i.meta.aborted || this._config.complete(this._completeResults),
                    a || i && i.meta.paused || this._nextChunk(),
                        i
                }
            }
            ,
            this._sendError = function(t) {
                m(this._config.error) ? this._config.error(t) : y && this._config.error && e.postMessage({
                    workerId: S.WORKER_ID,
                    error: t,
                    finished: !1
                })
            }
    }
    function i(e) {
        function t(e) {
            var t = e.getResponseHeader("Content-Range");
            return parseInt(t.substr(t.lastIndexOf("/") + 1))
        }
        e = e || {},
        e.chunkSize || (e.chunkSize = S.RemoteChunkSize),
            n.call(this, e);
        var r;
        this._nextChunk = k ? function() {
                this._readChunk(),
                    this._chunkLoaded()
            }
            : function() {
                this._readChunk()
            }
            ,
            this.stream = function(e) {
                this._input = e,
                    this._nextChunk()
            }
            ,
            this._readChunk = function() {
                if (this._finished)
                    return void this._chunkLoaded();
                if (r = new XMLHttpRequest,
                    k || (r.onload = g(this._chunkLoaded, this),
                        r.onerror = g(this._chunkError, this)),
                        r.open("GET", this._input, !k),
                        this._config.chunkSize) {
                    var e = this._start + this._config.chunkSize - 1;
                    r.setRequestHeader("Range", "bytes=" + this._start + "-" + e),
                        r.setRequestHeader("If-None-Match", "webkit-no-cache")
                }
                try {
                    r.send()
                } catch (t) {
                    this._chunkError(t.message)
                }
                k && 0 == r.status ? this._chunkError() : this._start += this._config.chunkSize
            }
            ,
            this._chunkLoaded = function() {
                if (4 == r.readyState) {
                    if (r.status < 200 || r.status >= 400)
                        return void this._chunkError();
                    this._finished = !this._config.chunkSize || this._start > t(r),
                        this.parseChunk(r.responseText)
                }
            }
            ,
            this._chunkError = function(e) {
                var t = r.statusText || e;
                this._sendError(t)
            }
    }
    function s(e) {
        e = e || {},
        e.chunkSize || (e.chunkSize = S.LocalChunkSize),
            n.call(this, e);
        var t, r, i = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e,
                r = e.slice || e.webkitSlice || e.mozSlice,
                i ? (t = new FileReader,
                    t.onload = g(this._chunkLoaded, this),
                    t.onerror = g(this._chunkError, this)) : t = new FileReaderSync,
                this._nextChunk()
        }
            ,
            this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }
            ,
            this._readChunk = function() {
                var e = this._input;
                if (this._config.chunkSize) {
                    var n = Math.min(this._start + this._config.chunkSize, this._input.size);
                    e = r.call(e, this._start, n)
                }
                var s = t.readAsText(e, this._config.encoding);
                i || this._chunkLoaded({
                    target: {
                        result: s
                    }
                })
            }
            ,
            this._chunkLoaded = function(e) {
                this._start += this._config.chunkSize,
                    this._finished = !this._config.chunkSize || this._start >= this._input.size,
                    this.parseChunk(e.target.result)
            }
            ,
            this._chunkError = function() {
                this._sendError(t.error)
            }
    }
    function a(e) {
        e = e || {},
            n.call(this, e);
        var t, r;
        this.stream = function(e) {
            return t = e,
                r = e,
                this._nextChunk()
        }
            ,
            this._nextChunk = function() {
                if (!this._finished) {
                    var e = this._config.chunkSize
                        , t = e ? r.substr(0, e) : r;
                    return r = e ? r.substr(e) : "",
                        this._finished = !r,
                        this.parseChunk(t)
                }
            }
    }
    function o(e) {
        function t() {
            if (b && d && (h("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + S.DefaultDelimiter + "'"),
                    d = !1),
                    e.skipEmptyLines)
                for (var t = 0; t < b.data.length; t++)
                    1 == b.data[t].length && "" == b.data[t][0] && b.data.splice(t--, 1);
            return r() && n(),
                i()
        }
        function r() {
            return e.header && 0 == y.length
        }
        function n() {
            if (b) {
                for (var e = 0; r() && e < b.data.length; e++)
                    for (var t = 0; t < b.data[e].length; t++)
                        y.push(b.data[e][t]);
                b.data.splice(0, 1)
            }
        }
        function i() {
            if (!b || !e.header && !e.dynamicTyping)
                return b;
            for (var t = 0; t < b.data.length; t++) {
                for (var r = {}, n = 0; n < b.data[t].length; n++) {
                    if (e.dynamicTyping) {
                        var i = b.data[t][n];
                        b.data[t][n] = "true" == i || "TRUE" == i || "false" != i && "FALSE" != i && o(i)
                    }
                    e.header && (n >= y.length ? (r.__parsed_extra || (r.__parsed_extra = []),
                        r.__parsed_extra.push(b.data[t][n])) : r[y[n]] = b.data[t][n])
                }
                e.header && (b.data[t] = r,
                    n > y.length ? h("FieldMismatch", "TooManyFields", "Too many fields: expected " + y.length + " fields but parsed " + n, t) : n < y.length && h("FieldMismatch", "TooFewFields", "Too few fields: expected " + y.length + " fields but parsed " + n, t))
            }
            return e.header && b.meta && (b.meta.fields = y),
                b
        }
        function s(t) {
            for (var r, n, i, s = [",", "\t", "|", ";", S.RECORD_SEP, S.UNIT_SEP], a = 0; a < s.length; a++) {
                var o = s[a]
                    , h = 0
                    , f = 0;
                i = void 0;
                for (var c = new u({
                    delimiter: o,
                    preview: 10
                }).parse(t), d = 0; d < c.data.length; d++) {
                    var l = c.data[d].length;
                    f += l,
                        "undefined" != typeof i ? l > 1 && (h += Math.abs(l - i),
                            i = l) : i = l
                }
                c.data.length > 0 && (f /= c.data.length),
                ("undefined" == typeof n || n > h) && f > 1.99 && (n = h,
                    r = o)
            }
            return e.delimiter = r,
                {
                    successful: !!r,
                    bestDelimiter: r
                }
        }
        function a(e) {
            e = e.substr(0, 1048576);
            var t = e.split("\r");
            if (1 == t.length)
                return "\n";
            for (var r = 0, n = 0; n < t.length; n++)
                "\n" == t[n][0] && r++;
            return r >= t.length / 2 ? "\r\n" : "\r"
        }
        function o(e) {
            var t = l.test(e);
            return t ? parseFloat(e) : e
        }
        function h(e, t, r, n) {
            b.errors.push({
                type: e,
                code: t,
                message: r,
                row: n
            })
        }
        var f, c, d, l = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, p = this, g = 0, v = !1, k = !1, y = [], b = {
            data: [],
            errors: [],
            meta: {}
        };
        if (m(e.step)) {
            var R = e.step;
            e.step = function(n) {
                if (b = n,
                        r())
                    t();
                else {
                    if (t(),
                        0 == b.data.length)
                        return;
                    g += n.data.length,
                        e.preview && g > e.preview ? c.abort() : R(b, p)
                }
            }
        }
        this.parse = function(r, n, i) {
            if (e.newline || (e.newline = a(r)),
                    d = !1,
                    !e.delimiter) {
                var o = s(r);
                o.successful ? e.delimiter = o.bestDelimiter : (d = !0,
                    e.delimiter = S.DefaultDelimiter),
                    b.meta.delimiter = e.delimiter
            }
            var h = _(e);
            return e.preview && e.header && h.preview++,
                f = r,
                c = new u(h),
                b = c.parse(f, n, i),
                t(),
                v ? {
                    meta: {
                        paused: !0
                    }
                } : b || {
                    meta: {
                        paused: !1
                    }
                }
        }
            ,
            this.paused = function() {
                return v
            }
            ,
            this.pause = function() {
                v = !0,
                    c.abort(),
                    f = f.substr(c.getCharIndex())
            }
            ,
            this.resume = function() {
                v = !1,
                    p.streamer.parseChunk(f)
            }
            ,
            this.aborted = function() {
                return k
            }
            ,
            this.abort = function() {
                k = !0,
                    c.abort(),
                    b.meta.aborted = !0,
                m(e.complete) && e.complete(b),
                    f = ""
            }
    }
    function u(e) {
        e = e || {};
        var t = e.delimiter
            , r = e.newline
            , n = e.comments
            , i = e.step
            , s = e.preview
            , a = e.fastMode;
        if (("string" != typeof t || S.BAD_DELIMITERS.indexOf(t) > -1) && (t = ","),
            n === t)
            throw "Comment character same as delimiter";
        n === !0 ? n = "#" : ("string" != typeof n || S.BAD_DELIMITERS.indexOf(n) > -1) && (n = !1),
        "\n" != r && "\r" != r && "\r\n" != r && (r = "\n");
        var o = 0
            , u = !1;
        this.parse = function(e, h, f) {
            function c(e) {
                b.push(e),
                    S = o
            }
            function d(t) {
                return f ? p() : ("undefined" == typeof t && (t = e.substr(o)),
                    w.push(t),
                    o = g,
                    c(w),
                y && _(),
                    p())
            }
            function l(t) {
                o = t,
                    c(w),
                    w = [],
                    O = e.indexOf(r, o)
            }
            function p(e) {
                return {
                    data: b,
                    errors: R,
                    meta: {
                        delimiter: t,
                        linebreak: r,
                        aborted: u,
                        truncated: !!e,
                        cursor: S + (h || 0)
                    }
                }
            }
            function _() {
                i(p()),
                    b = [],
                    R = []
            }
            if ("string" != typeof e)
                throw "Input must be a string";
            var g = e.length
                , m = t.length
                , v = r.length
                , k = n.length
                , y = "function" == typeof i;
            o = 0;
            var b = []
                , R = []
                , w = []
                , S = 0;
            if (!e)
                return p();
            if (a || a !== !1 && -1 === e.indexOf('"')) {
                for (var C = e.split(r), E = 0; E < C.length; E++) {
                    var w = C[E];
                    if (o += w.length,
                        E !== C.length - 1)
                        o += r.length;
                    else if (f)
                        return p();
                    if (!n || w.substr(0, k) != n) {
                        if (y) {
                            if (b = [],
                                    c(w.split(t)),
                                    _(),
                                    u)
                                return p()
                        } else
                            c(w.split(t));
                        if (s && E >= s)
                            return b = b.slice(0, s),
                                p(!0)
                    }
                }
                return p()
            }
            for (var x = e.indexOf(t, o), O = e.indexOf(r, o); ; )
                if ('"' != e[o])
                    if (n && 0 === w.length && e.substr(o, k) === n) {
                        if (-1 == O)
                            return p();
                        o = O + v,
                            O = e.indexOf(r, o),
                            x = e.indexOf(t, o)
                    } else if (-1 !== x && (O > x || -1 === O))
                        w.push(e.substring(o, x)),
                            o = x + m,
                            x = e.indexOf(t, o);
                    else {
                        if (-1 === O)
                            break;
                        if (w.push(e.substring(o, O)),
                                l(O + v),
                            y && (_(),
                                u))
                            return p();
                        if (s && b.length >= s)
                            return p(!0)
                    }
                else {
                    var I = o;
                    for (o++; ; ) {
                        var I = e.indexOf('"', I + 1);
                        if (-1 === I)
                            return f || R.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: b.length,
                                index: o
                            }),
                                d();
                        if (I === g - 1) {
                            var D = e.substring(o, I).replace(/""/g, '"');
                            return d(D)
                        }
                        if ('"' != e[I + 1]) {
                            if (e[I + 1] == t) {
                                w.push(e.substring(o, I).replace(/""/g, '"')),
                                    o = I + 1 + m,
                                    x = e.indexOf(t, o),
                                    O = e.indexOf(r, o);
                                break
                            }
                            if (e.substr(I + 1, v) === r) {
                                if (w.push(e.substring(o, I).replace(/""/g, '"')),
                                        l(I + 1 + v),
                                        x = e.indexOf(t, o),
                                    y && (_(),
                                        u))
                                    return p();
                                if (s && b.length >= s)
                                    return p(!0);
                                break
                            }
                        } else
                            I++
                    }
                }
            return d()
        }
            ,
            this.abort = function() {
                u = !0
            }
            ,
            this.getCharIndex = function() {
                return o
            }
    }
    function h() {
        var e = document.getElementsByTagName("script");
        return e.length ? e[e.length - 1].src : ""
    }
    function f() {
        if (!S.WORKERS_SUPPORTED)
            return !1;
        if (!b && null === S.SCRIPT_PATH)
            throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
        var t = S.SCRIPT_PATH || v;
        t += (-1 !== t.indexOf("?") ? "&" : "?") + "papaworker";
        var r = new e.Worker(t);
        return r.onmessage = c,
            r.id = w++,
            R[r.id] = r,
            r
    }
    function c(e) {
        var t = e.data
            , r = R[t.workerId]
            , n = !1;
        if (t.error)
            r.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var i = function() {
                n = !0,
                    d(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    })
            }
                , s = {
                abort: i,
                pause: l,
                resume: l
            };
            if (m(r.userStep)) {
                for (var a = 0; a < t.results.data.length && (r.userStep({
                    data: [t.results.data[a]],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, s),
                    !n); a++)
                    ;
                delete t.results
            } else
                m(r.userChunk) && (r.userChunk(t.results, s, t.file),
                    delete t.results)
        }
        t.finished && !n && d(t.workerId, t.results)
    }
    function d(e, t) {
        var r = R[e];
        m(r.userComplete) && r.userComplete(t),
            r.terminate(),
            delete R[e]
    }
    function l() {
        throw "Not implemented."
    }
    function p(t) {
        var r = t.data;
        if ("undefined" == typeof S.WORKER_ID && r && (S.WORKER_ID = r.workerId),
            "string" == typeof r.input)
            e.postMessage({
                workerId: S.WORKER_ID,
                results: S.parse(r.input, r.config),
                finished: !0
            });
        else if (e.File && r.input instanceof File || r.input instanceof Object) {
            var n = S.parse(r.input, r.config);
            n && e.postMessage({
                workerId: S.WORKER_ID,
                results: n,
                finished: !0
            })
        }
    }
    function _(e) {
        if ("object" != typeof e)
            return e;
        var t = e instanceof Array ? [] : {};
        for (var r in e)
            t[r] = _(e[r]);
        return t
    }
    function g(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }
    function m(e) {
        return "function" == typeof e
    }
    var v, k = !e.document && !!e.postMessage, y = k && /(\?|&)papaworker(=|&|$)/.test(e.location.search), b = !1, R = {}, w = 0, S = {};
    if (S.parse = t,
            S.unparse = r,
            S.RECORD_SEP = String.fromCharCode(30),
            S.UNIT_SEP = String.fromCharCode(31),
            S.BYTE_ORDER_MARK = "\ufeff",
            S.BAD_DELIMITERS = ["\r", "\n", '"', S.BYTE_ORDER_MARK],
            S.WORKERS_SUPPORTED = !k && !!e.Worker,
            S.SCRIPT_PATH = null,
            S.LocalChunkSize = 10485760,
            S.RemoteChunkSize = 5242880,
            S.DefaultDelimiter = ",",
            S.Parser = u,
            S.ParserHandle = o,
            S.NetworkStreamer = i,
            S.FileStreamer = s,
            S.StringStreamer = a,
            "undefined" != typeof module && module.exports ? module.exports = S : m(e.define) && e.define.amd ? define(function() {
                return S
            }) : e.Papa = S,
            e.jQuery) {
        var C = e.jQuery;
        C.fn.parse = function(t) {
            function r() {
                if (0 == a.length)
                    return void (m(t.complete) && t.complete());
                var e = a[0];
                if (m(t.before)) {
                    var r = t.before(e.file, e.inputElem);
                    if ("object" == typeof r) {
                        if ("abort" == r.action)
                            return void n("AbortError", e.file, e.inputElem, r.reason);
                        if ("skip" == r.action)
                            return void i();
                        "object" == typeof r.config && (e.instanceConfig = C.extend(e.instanceConfig, r.config))
                    } else if ("skip" == r)
                        return void i()
                }
                var s = e.instanceConfig.complete;
                e.instanceConfig.complete = function(t) {
                    m(s) && s(t, e.file, e.inputElem),
                        i()
                }
                    ,
                    S.parse(e.file, e.instanceConfig)
            }
            function n(e, r, n, i) {
                m(t.error) && t.error({
                    name: e
                }, r, n, i)
            }
            function i() {
                a.splice(0, 1),
                    r()
            }
            var s = t.config || {}
                , a = [];
            return this.each(function() {
                var t = "INPUT" == C(this).prop("tagName").toUpperCase() && "file" == C(this).attr("type").toLowerCase() && e.FileReader;
                if (!t || !this.files || 0 == this.files.length)
                    return !0;
                for (var r = 0; r < this.files.length; r++)
                    a.push({
                        file: this.files[r],
                        inputElem: this,
                        instanceConfig: C.extend({}, s)
                    })
            }),
                r(),
                this
        }
    }
    y ? e.onmessage = p : S.WORKERS_SUPPORTED && (v = h(),
        document.body ? document.addEventListener("DOMContentLoaded", function() {
            b = !0
        }, !0) : b = !0),
        i.prototype = Object.create(n.prototype),
        i.prototype.constructor = i,
        s.prototype = Object.create(n.prototype),
        s.prototype.constructor = s,
        a.prototype = Object.create(a.prototype),
        a.prototype.constructor = a
}("undefined" != typeof window ? window : this);
!function() {
    "use strict";
    var e = function() {
        this.init()
    };
    e.prototype = {
        init: function() {
            var e = this || n;
            return e._codecs = {},
                e._howls = [],
                e._muted = !1,
                e._volume = 1,
                e._canPlayEvent = "canplaythrough",
                e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null,
                e.masterGain = null,
                e.noAudio = !1,
                e.usingWebAudio = !0,
                e.autoSuspend = !0,
                e.ctx = null,
                e.mobileAutoEnable = !0,
                e._setup(),
                e
        },
        volume: function(e) {
            var t = this || n;
            if (e = parseFloat(e),
                t.ctx || _(),
                "undefined" != typeof e && e >= 0 && e <= 1) {
                if (t._volume = e,
                        t._muted)
                    return t;
                t.usingWebAudio && (t.masterGain.gain.value = e);
                for (var o = 0; o < t._howls.length; o++)
                    if (!t._howls[o]._webAudio)
                        for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                            var i = t._howls[o]._soundById(r[a]);
                            i && i._node && (i._node.volume = i._volume * e)
                        }
                return t
            }
            return t._volume
        },
        mute: function(e) {
            var t = this || n;
            t.ctx || _(),
                t._muted = e,
            t.usingWebAudio && (t.masterGain.gain.value = e ? 0 : t._volume);
            for (var o = 0; o < t._howls.length; o++)
                if (!t._howls[o]._webAudio)
                    for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                        var i = t._howls[o]._soundById(r[a]);
                        i && i._node && (i._node.muted = !!e || i._muted)
                    }
            return t
        },
        unload: function() {
            for (var e = this || n, t = e._howls.length - 1; t >= 0; t--)
                e._howls[t].unload();
            return e.usingWebAudio && e.ctx && "undefined" != typeof e.ctx.close && (e.ctx.close(),
                e.ctx = null,
                _()),
                e
        },
        codecs: function(e) {
            return (this || n)._codecs[e.replace(/^x-/, "")]
        },
        _setup: function() {
            var e = this || t;
            if (e.state = e.ctx ? e.ctx.state || "running" : "running",
                    e._autoSuspend(),
                    !e.usingWebAudio)
                if ("undefined" != typeof Audio)
                    try {
                        var n = new Audio;
                        "undefined" == typeof n.oncanplaythrough && (e._canPlayEvent = "canplay")
                    } catch (t) {
                        e.noAudio = !0
                    }
                else
                    e.noAudio = !0;
            try {
                var n = new Audio;
                n.muted && (e.noAudio = !0)
            } catch (e) {}
            return e.noAudio || e._setupCodecs(),
                e
        },
        _setupCodecs: function() {
            var e = this || t
                , n = null;
            try {
                n = "undefined" != typeof Audio ? new Audio : null
            } catch (t) {
                return e
            }
            if (!n || "function" != typeof n.canPlayType)
                return e;
            var o = n.canPlayType("audio/mpeg;").replace(/^no$/, "")
                , r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g)
                , a = r && parseInt(r[0].split("/")[1], 10) < 33;
            return e._codecs = {
                mp3: !(a || !o && !n.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!o,
                opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
            },
                e
        },
        _enableMobileAudio: function() {
            var e = this || n
                , t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent)
                , o = !!("ontouchend"in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
            if (!e._mobileEnabled && e.ctx && (t || o)) {
                e._mobileEnabled = !1,
                e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0,
                    e.unload()),
                    e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                var r = function() {
                    var n = e.ctx.createBufferSource();
                    n.buffer = e._scratchBuffer,
                        n.connect(e.ctx.destination),
                        "undefined" == typeof n.start ? n.noteOn(0) : n.start(0),
                        n.onended = function() {
                            n.disconnect(0),
                                e._mobileEnabled = !0,
                                e.mobileAutoEnable = !1,
                                document.removeEventListener("touchend", r, !0)
                        }
                };
                return document.addEventListener("touchend", r, !0),
                    e
            }
        },
        _autoSuspend: function() {
            var e = this;
            if (e.autoSuspend && e.ctx && "undefined" != typeof e.ctx.suspend && n.usingWebAudio) {
                for (var t = 0; t < e._howls.length; t++)
                    if (e._howls[t]._webAudio)
                        for (var o = 0; o < e._howls[t]._sounds.length; o++)
                            if (!e._howls[t]._sounds[o]._paused)
                                return e;
                return e._suspendTimer && clearTimeout(e._suspendTimer),
                    e._suspendTimer = setTimeout(function() {
                        e.autoSuspend && (e._suspendTimer = null,
                            e.state = "suspending",
                            e.ctx.suspend().then(function() {
                                e.state = "suspended",
                                e._resumeAfterSuspend && (delete e._resumeAfterSuspend,
                                    e._autoResume())
                            }))
                    }, 3e4),
                    e
            }
        },
        _autoResume: function() {
            var e = this;
            if (e.ctx && "undefined" != typeof e.ctx.resume && n.usingWebAudio)
                return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer),
                    e._suspendTimer = null) : "suspended" === e.state ? (e.state = "resuming",
                    e.ctx.resume().then(function() {
                        e.state = "running";
                        for (var n = 0; n < e._howls.length; n++)
                            e._howls[n]._emit("resume")
                    }),
                e._suspendTimer && (clearTimeout(e._suspendTimer),
                    e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                    e
        }
    };
    var n = new e
        , t = function(e) {
        var n = this;
        return e.src && 0 !== e.src.length ? void n.init(e) : void console.error("An array of source files must be passed with any new Howl.")
    };
    t.prototype = {
        init: function(e) {
            var t = this;
            return n.ctx || _(),
                t._autoplay = e.autoplay || !1,
                t._format = "string" != typeof e.format ? e.format : [e.format],
                t._html5 = e.html5 || !1,
                t._muted = e.mute || !1,
                t._loop = e.loop || !1,
                t._pool = e.pool || 5,
                t._preload = "boolean" != typeof e.preload || e.preload,
                t._rate = e.rate || 1,
                t._sprite = e.sprite || {},
                t._src = "string" != typeof e.src ? e.src : [e.src],
                t._volume = void 0 !== e.volume ? e.volume : 1,
                t._duration = 0,
                t._state = "unloaded",
                t._sounds = [],
                t._endTimers = {},
                t._queue = [],
                t._onend = e.onend ? [{
                    fn: e.onend
                }] : [],
                t._onfade = e.onfade ? [{
                    fn: e.onfade
                }] : [],
                t._onload = e.onload ? [{
                    fn: e.onload
                }] : [],
                t._onloaderror = e.onloaderror ? [{
                    fn: e.onloaderror
                }] : [],
                t._onpause = e.onpause ? [{
                    fn: e.onpause
                }] : [],
                t._onplay = e.onplay ? [{
                    fn: e.onplay
                }] : [],
                t._onstop = e.onstop ? [{
                    fn: e.onstop
                }] : [],
                t._onmute = e.onmute ? [{
                    fn: e.onmute
                }] : [],
                t._onvolume = e.onvolume ? [{
                    fn: e.onvolume
                }] : [],
                t._onrate = e.onrate ? [{
                    fn: e.onrate
                }] : [],
                t._onseek = e.onseek ? [{
                    fn: e.onseek
                }] : [],
                t._onresume = [],
                t._webAudio = n.usingWebAudio && !t._html5,
            "undefined" != typeof n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(),
                n._howls.push(t),
            t._autoplay && t._queue.push({
                event: "play",
                action: function() {
                    t.play()
                }
            }),
            t._preload && t.load(),
                t
        },
        load: function() {
            var e = this
                , t = null;
            if (n.noAudio)
                return void e._emit("loaderror", null, "No audio support.");
            "string" == typeof e._src && (e._src = [e._src]);
            for (var r = 0; r < e._src.length; r++) {
                var i, u;
                if (e._format && e._format[r])
                    i = e._format[r];
                else {
                    if (u = e._src[r],
                        "string" != typeof u) {
                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    i = /^data:audio\/([^;,]+);/i.exec(u),
                    i || (i = /\.([^.]+)$/.exec(u.split("?", 1)[0])),
                    i && (i = i[1].toLowerCase())
                }
                if (n.codecs(i)) {
                    t = e._src[r];
                    break
                }
            }
            return t ? (e._src = t,
                e._state = "loading",
            "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0,
                e._webAudio = !1),
                new o(e),
            e._webAudio && a(e),
                e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
        },
        play: function(e, t) {
            var o = this
                , r = null;
            if ("number" == typeof e)
                r = e,
                    e = null;
            else {
                if ("string" == typeof e && "loaded" === o._state && !o._sprite[e])
                    return null;
                if ("undefined" == typeof e) {
                    e = "__default";
                    for (var a = 0, i = 0; i < o._sounds.length; i++)
                        o._sounds[i]._paused && !o._sounds[i]._ended && (a++,
                            r = o._sounds[i]._id);
                    1 === a ? e = null : r = null
                }
            }
            var u = r ? o._soundById(r) : o._inactiveSound();
            if (!u)
                return null;
            if (r && !e && (e = u._sprite || "__default"),
                "loaded" !== o._state && !o._sprite[e])
                return o._queue.push({
                    event: "play",
                    action: function() {
                        o.play(o._soundById(u._id) ? u._id : void 0)
                    }
                }),
                    u._id;
            if (r && !u._paused)
                return t || setTimeout(function() {
                    o._emit("play", u._id)
                }, 0),
                    u._id;
            o._webAudio && n._autoResume();
            var d = Math.max(0, u._seek > 0 ? u._seek : o._sprite[e][0] / 1e3)
                , _ = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - d)
                , s = 1e3 * _ / Math.abs(u._rate);
            u._paused = !1,
                u._ended = !1,
                u._sprite = e,
                u._seek = d,
                u._start = o._sprite[e][0] / 1e3,
                u._stop = (o._sprite[e][0] + o._sprite[e][1]) / 1e3,
                u._loop = !(!u._loop && !o._sprite[e][2]);
            var l = u._node;
            if (o._webAudio) {
                var f = function() {
                    o._refreshBuffer(u);
                    var e = u._muted || o._muted ? 0 : u._volume;
                    l.gain.setValueAtTime(e, n.ctx.currentTime),
                        u._playStart = n.ctx.currentTime,
                        "undefined" == typeof l.bufferSource.start ? u._loop ? l.bufferSource.noteGrainOn(0, d, 86400) : l.bufferSource.noteGrainOn(0, d, _) : u._loop ? l.bufferSource.start(0, d, 86400) : l.bufferSource.start(0, d, _),
                    s !== 1 / 0 && (o._endTimers[u._id] = setTimeout(o._ended.bind(o, u), s)),
                    t || setTimeout(function() {
                        o._emit("play", u._id)
                    }, 0)
                }
                    , c = "running" === n.state;
                "loaded" === o._state && c ? f() : (o.once(c ? "load" : "resume", f, c ? u._id : null),
                    o._clearTimer(u._id))
            } else {
                var p = function() {
                    l.currentTime = d,
                        l.muted = u._muted || o._muted || n._muted || l.muted,
                        l.volume = u._volume * n.volume(),
                        l.playbackRate = u._rate,
                        setTimeout(function() {
                            l.play(),
                            s !== 1 / 0 && (o._endTimers[u._id] = setTimeout(o._ended.bind(o, u), s)),
                            t || o._emit("play", u._id)
                        }, 0)
                }
                    , m = "loaded" === o._state && (window && window.ejecta || !l.readyState && n._navigator.isCocoonJS);
                if (4 === l.readyState || m)
                    p();
                else {
                    var v = function() {
                        p(),
                            l.removeEventListener(n._canPlayEvent, v, !1)
                    };
                    l.addEventListener(n._canPlayEvent, v, !1),
                        o._clearTimer(u._id)
                }
            }
            return u._id
        },
        pause: function(e) {
            var n = this;
            if ("loaded" !== n._state)
                return n._queue.push({
                    event: "pause",
                    action: function() {
                        n.pause(e)
                    }
                }),
                    n;
            for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                n._clearTimer(t[o]);
                var r = n._soundById(t[o]);
                if (r && !r._paused && (r._seek = n.seek(t[o]),
                        r._rateSeek = 0,
                        r._paused = !0,
                        n._stopFade(t[o]),
                        r._node))
                    if (n._webAudio) {
                        if (!r._node.bufferSource)
                            return n;
                        "undefined" == typeof r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                            n._cleanBuffer(r._node)
                    } else
                        isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || n._emit("pause", r ? r._id : null)
            }
            return n
        },
        stop: function(e, n) {
            var t = this;
            if ("loaded" !== t._state)
                return t._queue.push({
                    event: "stop",
                    action: function() {
                        t.stop(e)
                    }
                }),
                    t;
            for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
                t._clearTimer(o[r]);
                var a = t._soundById(o[r]);
                if (a && (a._seek = a._start || 0,
                        a._rateSeek = 0,
                        a._paused = !0,
                        a._ended = !0,
                        t._stopFade(o[r]),
                        a._node))
                    if (t._webAudio) {
                        if (!a._node.bufferSource)
                            return n || t._emit("stop", a._id),
                                t;
                        "undefined" == typeof a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0),
                            t._cleanBuffer(a._node)
                    } else
                        isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0,
                            a._node.pause());
                a && !n && t._emit("stop", a._id)
            }
            return t
        },
        mute: function(e, t) {
            var o = this;
            if ("loaded" !== o._state)
                return o._queue.push({
                    event: "mute",
                    action: function() {
                        o.mute(e, t)
                    }
                }),
                    o;
            if ("undefined" == typeof t) {
                if ("boolean" != typeof e)
                    return o._muted;
                o._muted = e
            }
            for (var r = o._getSoundIds(t), a = 0; a < r.length; a++) {
                var i = o._soundById(r[a]);
                i && (i._muted = e,
                    o._webAudio && i._node ? i._node.gain.setValueAtTime(e ? 0 : i._volume, n.ctx.currentTime) : i._node && (i._node.muted = !!n._muted || e),
                    o._emit("mute", i._id))
            }
            return o
        },
        volume: function() {
            var e, t, o = this, r = arguments;
            if (0 === r.length)
                return o._volume;
            if (1 === r.length || 2 === r.length && "undefined" == typeof r[1]) {
                var a = o._getSoundIds()
                    , i = a.indexOf(r[0]);
                i >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
            } else
                r.length >= 2 && (e = parseFloat(r[0]),
                    t = parseInt(r[1], 10));
            var u;
            if (!("undefined" != typeof e && e >= 0 && e <= 1))
                return u = t ? o._soundById(t) : o._sounds[0],
                    u ? u._volume : 0;
            if ("loaded" !== o._state)
                return o._queue.push({
                    event: "volume",
                    action: function() {
                        o.volume.apply(o, r)
                    }
                }),
                    o;
            "undefined" == typeof t && (o._volume = e),
                t = o._getSoundIds(t);
            for (var d = 0; d < t.length; d++)
                u = o._soundById(t[d]),
                u && (u._volume = e,
                r[2] || o._stopFade(t[d]),
                    o._webAudio && u._node && !u._muted ? u._node.gain.setValueAtTime(e, n.ctx.currentTime) : u._node && !u._muted && (u._node.volume = e * n.volume()),
                    o._emit("volume", u._id));
            return o
        },
        fade: function(e, t, o, r) {
            var a = this
                , i = Math.abs(e - t)
                , u = e > t ? "out" : "in"
                , d = i / .01
                , _ = d > 0 ? o / d : o;
            if (_ < 4 && (d = Math.ceil(d / (4 / _)),
                    _ = 4),
                "loaded" !== a._state)
                return a._queue.push({
                    event: "fade",
                    action: function() {
                        a.fade(e, t, o, r)
                    }
                }),
                    a;
            a.volume(e, r);
            for (var s = a._getSoundIds(r), l = 0; l < s.length; l++) {
                var f = a._soundById(s[l]);
                if (f) {
                    if (r || a._stopFade(s[l]),
                        a._webAudio && !f._muted) {
                        var c = n.ctx.currentTime
                            , p = c + o / 1e3;
                        f._volume = e,
                            f._node.gain.setValueAtTime(e, c),
                            f._node.gain.linearRampToValueAtTime(t, p)
                    }
                    var m = e;
                    f._interval = setInterval(function(e, n) {
                        d > 0 && (m += "in" === u ? .01 : -.01),
                            m = Math.max(0, m),
                            m = Math.min(1, m),
                            m = Math.round(100 * m) / 100,
                            a._webAudio ? ("undefined" == typeof r && (a._volume = m),
                                n._volume = m) : a.volume(m, e, !0),
                        m === t && (clearInterval(n._interval),
                            n._interval = null,
                            a.volume(m, e),
                            a._emit("fade", e))
                    }
                        .bind(a, s[l], f), _)
                }
            }
            return a
        },
        _stopFade: function(e) {
            var t = this
                , o = t._soundById(e);
            return o && o._interval && (t._webAudio && o._node.gain.cancelScheduledValues(n.ctx.currentTime),
                clearInterval(o._interval),
                o._interval = null,
                t._emit("fade", e)),
                t
        },
        loop: function() {
            var e, n, t, o = this, r = arguments;
            if (0 === r.length)
                return o._loop;
            if (1 === r.length) {
                if ("boolean" != typeof r[0])
                    return t = o._soundById(parseInt(r[0], 10)),
                    !!t && t._loop;
                e = r[0],
                    o._loop = e
            } else
                2 === r.length && (e = r[0],
                    n = parseInt(r[1], 10));
            for (var a = o._getSoundIds(n), i = 0; i < a.length; i++)
                t = o._soundById(a[i]),
                t && (t._loop = e,
                o._webAudio && t._node && t._node.bufferSource && (t._node.bufferSource.loop = e,
                e && (t._node.bufferSource.loopStart = t._start || 0,
                    t._node.bufferSource.loopEnd = t._stop)));
            return o
        },
        rate: function() {
            var e, t, o = this, r = arguments;
            if (0 === r.length)
                t = o._sounds[0]._id;
            else if (1 === r.length) {
                var a = o._getSoundIds()
                    , i = a.indexOf(r[0]);
                i >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
            } else
                2 === r.length && (e = parseFloat(r[0]),
                    t = parseInt(r[1], 10));
            var u;
            if ("number" != typeof e)
                return u = o._soundById(t),
                    u ? u._rate : o._rate;
            if ("loaded" !== o._state)
                return o._queue.push({
                    event: "rate",
                    action: function() {
                        o.rate.apply(o, r)
                    }
                }),
                    o;
            "undefined" == typeof t && (o._rate = e),
                t = o._getSoundIds(t);
            for (var d = 0; d < t.length; d++)
                if (u = o._soundById(t[d])) {
                    u._rateSeek = o.seek(t[d]),
                        u._playStart = o._webAudio ? n.ctx.currentTime : u._playStart,
                        u._rate = e,
                        o._webAudio && u._node && u._node.bufferSource ? u._node.bufferSource.playbackRate.value = e : u._node && (u._node.playbackRate = e);
                    var _ = o.seek(t[d])
                        , s = (o._sprite[u._sprite][0] + o._sprite[u._sprite][1]) / 1e3 - _
                        , l = 1e3 * s / Math.abs(u._rate);
                    !o._endTimers[t[d]] && u._paused || (o._clearTimer(t[d]),
                        o._endTimers[t[d]] = setTimeout(o._ended.bind(o, u), l)),
                        o._emit("rate", u._id)
                }
            return o
        },
        seek: function() {
            var e, t, o = this, r = arguments;
            if (0 === r.length)
                t = o._sounds[0]._id;
            else if (1 === r.length) {
                var a = o._getSoundIds()
                    , i = a.indexOf(r[0]);
                i >= 0 ? t = parseInt(r[0], 10) : (t = o._sounds[0]._id,
                    e = parseFloat(r[0]))
            } else
                2 === r.length && (e = parseFloat(r[0]),
                    t = parseInt(r[1], 10));
            if ("undefined" == typeof t)
                return o;
            if ("loaded" !== o._state)
                return o._queue.push({
                    event: "seek",
                    action: function() {
                        o.seek.apply(o, r)
                    }
                }),
                    o;
            var u = o._soundById(t);
            if (u) {
                if (!("number" == typeof e && e >= 0)) {
                    if (o._webAudio) {
                        var d = o.playing(t) ? n.ctx.currentTime - u._playStart : 0
                            , _ = u._rateSeek ? u._rateSeek - u._seek : 0;
                        return u._seek + (_ + d * Math.abs(u._rate))
                    }
                    return u._node.currentTime
                }
                var s = o.playing(t);
                s && o.pause(t, !0),
                    u._seek = e,
                    u._ended = !1,
                    o._clearTimer(t),
                s && o.play(t, !0),
                !o._webAudio && u._node && (u._node.currentTime = e),
                    o._emit("seek", t)
            }
            return o
        },
        playing: function(e) {
            var n = this;
            if ("number" == typeof e) {
                var t = n._soundById(e);
                return !!t && !t._paused
            }
            for (var o = 0; o < n._sounds.length; o++)
                if (!n._sounds[o]._paused)
                    return !0;
            return !1
        },
        duration: function(e) {
            var n = this
                , t = n._duration
                , o = n._soundById(e);
            return o && (t = n._sprite[o._sprite][1] / 1e3),
                t
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var e = this, t = e._sounds, o = 0; o < t.length; o++) {
                t[o]._paused || (e.stop(t[o]._id),
                    e._emit("end", t[o]._id)),
                e._webAudio || (t[o]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",
                    t[o]._node.removeEventListener("error", t[o]._errorFn, !1),
                    t[o]._node.removeEventListener(n._canPlayEvent, t[o]._loadFn, !1)),
                    delete t[o]._node,
                    e._clearTimer(t[o]._id);
                var a = n._howls.indexOf(e);
                a >= 0 && n._howls.splice(a, 1)
            }
            var i = !0;
            for (o = 0; o < n._howls.length; o++)
                if (n._howls[o]._src === e._src) {
                    i = !1;
                    break
                }
            return r && i && delete r[e._src],
                n.noAudio = !1,
                e._state = "unloaded",
                e._sounds = [],
                e = null,
                null
        },
        on: function(e, n, t, o) {
            var r = this
                , a = r["_on" + e];
            return "function" == typeof n && a.push(o ? {
                id: t,
                fn: n,
                once: o
            } : {
                id: t,
                fn: n
            }),
                r
        },
        off: function(e, n, t) {
            var o = this
                , r = o["_on" + e]
                , a = 0;
            if (n) {
                for (a = 0; a < r.length; a++)
                    if (n === r[a].fn && t === r[a].id) {
                        r.splice(a, 1);
                        break
                    }
            } else if (e)
                o["_on" + e] = [];
            else {
                var i = Object.keys(o);
                for (a = 0; a < i.length; a++)
                    0 === i[a].indexOf("_on") && Array.isArray(o[i[a]]) && (o[i[a]] = [])
            }
            return o
        },
        once: function(e, n, t) {
            var o = this;
            return o.on(e, n, t, 1),
                o
        },
        _emit: function(e, n, t) {
            for (var o = this, r = o["_on" + e], a = r.length - 1; a >= 0; a--)
                r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function(e) {
                    e.call(this, n, t)
                }
                    .bind(o, r[a].fn), 0),
                r[a].once && o.off(e, r[a].fn, r[a].id));
            return o
        },
        _loadQueue: function() {
            var e = this;
            if (e._queue.length > 0) {
                var n = e._queue[0];
                e.once(n.event, function() {
                    e._queue.shift(),
                        e._loadQueue()
                }),
                    n.action()
            }
            return e
        },
        _ended: function(e) {
            var t = this
                , o = e._sprite
                , r = !(!e._loop && !t._sprite[o][2]);
            if (t._emit("end", e._id),
                !t._webAudio && r && t.stop(e._id, !0).play(e._id),
                t._webAudio && r) {
                t._emit("play", e._id),
                    e._seek = e._start || 0,
                    e._rateSeek = 0,
                    e._playStart = n.ctx.currentTime;
                var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a)
            }
            return t._webAudio && !r && (e._paused = !0,
                e._ended = !0,
                e._seek = e._start || 0,
                e._rateSeek = 0,
                t._clearTimer(e._id),
                t._cleanBuffer(e._node),
                n._autoSuspend()),
            t._webAudio || r || t.stop(e._id),
                t
        },
        _clearTimer: function(e) {
            var n = this;
            return n._endTimers[e] && (clearTimeout(n._endTimers[e]),
                delete n._endTimers[e]),
                n
        },
        _soundById: function(e) {
            for (var n = this, t = 0; t < n._sounds.length; t++)
                if (e === n._sounds[t]._id)
                    return n._sounds[t];
            return null
        },
        _inactiveSound: function() {
            var e = this;
            e._drain();
            for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended)
                    return e._sounds[n].reset();
            return new o(e)
        },
        _drain: function() {
            var e = this
                , n = e._pool
                , t = 0
                , o = 0;
            if (!(e._sounds.length < n)) {
                for (o = 0; o < e._sounds.length; o++)
                    e._sounds[o]._ended && t++;
                for (o = e._sounds.length - 1; o >= 0; o--) {
                    if (t <= n)
                        return;
                    e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0),
                        e._sounds.splice(o, 1),
                        t--)
                }
            }
        },
        _getSoundIds: function(e) {
            var n = this;
            if ("undefined" == typeof e) {
                for (var t = [], o = 0; o < n._sounds.length; o++)
                    t.push(n._sounds[o]._id);
                return t
            }
            return [e]
        },
        _refreshBuffer: function(e) {
            var t = this;
            return e._node.bufferSource = n.ctx.createBufferSource(),
                e._node.bufferSource.buffer = r[t._src],
                e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                e._node.bufferSource.loop = e._loop,
            e._loop && (e._node.bufferSource.loopStart = e._start || 0,
                e._node.bufferSource.loopEnd = e._stop),
                e._node.bufferSource.playbackRate.value = e._rate,
                t
        },
        _cleanBuffer: function(e) {
            var n = this;
            if (n._scratchBuffer) {
                e.bufferSource.onended = null,
                    e.bufferSource.disconnect(0);
                try {
                    e.bufferSource.buffer = n._scratchBuffer
                } catch (e) {}
            }
            return e.bufferSource = null,
                n
        }
    };
    var o = function(e) {
        this._parent = e,
            this.init()
    };
    o.prototype = {
        init: function() {
            var e = this
                , n = e._parent;
            return e._muted = n._muted,
                e._loop = n._loop,
                e._volume = n._volume,
                e._muted = n._muted,
                e._rate = n._rate,
                e._seek = 0,
                e._paused = !0,
                e._ended = !0,
                e._sprite = "__default",
                e._id = Math.round(Date.now() * Math.random()),
                n._sounds.push(e),
                e.create(),
                e
        },
        create: function() {
            var e = this
                , t = e._parent
                , o = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return t._webAudio ? (e._node = "undefined" == typeof n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(),
                e._node.gain.setValueAtTime(o, n.ctx.currentTime),
                e._node.paused = !0,
                e._node.connect(n.masterGain)) : (e._node = new Audio,
                e._errorFn = e._errorListener.bind(e),
                e._node.addEventListener("error", e._errorFn, !1),
                e._loadFn = e._loadListener.bind(e),
                e._node.addEventListener(n._canPlayEvent, e._loadFn, !1),
                e._node.src = t._src,
                e._node.preload = "auto",
                e._node.volume = o * n.volume(),
                e._node.load()),
                e
        },
        reset: function() {
            var e = this
                , n = e._parent;
            return e._muted = n._muted,
                e._loop = n._loop,
                e._volume = n._volume,
                e._muted = n._muted,
                e._rate = n._rate,
                e._seek = 0,
                e._rateSeek = 0,
                e._paused = !0,
                e._ended = !0,
                e._sprite = "__default",
                e._id = Math.round(Date.now() * Math.random()),
                e
        },
        _errorListener: function() {
            var e = this;
            e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
                e._node.removeEventListener("error", e._errorListener, !1)
        },
        _loadListener: function() {
            var e = this
                , t = e._parent;
            t._duration = Math.ceil(10 * e._node.duration) / 10,
            0 === Object.keys(t._sprite).length && (t._sprite = {
                __default: [0, 1e3 * t._duration]
            }),
            "loaded" !== t._state && (t._state = "loaded",
                t._emit("load"),
                t._loadQueue()),
                e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1)
        }
    };
    var r = {}
        , a = function(e) {
        var n = e._src;
        if (r[n])
            return e._duration = r[n].duration,
                void d(e);
        if (/^data:[^;]+;base64,/.test(n)) {
            for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), a = 0; a < t.length; ++a)
                o[a] = t.charCodeAt(a);
            u(o.buffer, e)
        } else {
            var _ = new XMLHttpRequest;
            _.open("GET", n, !0),
                _.responseType = "arraybuffer",
                _.onload = function() {
                    var n = (_.status + "")[0];
                    return "0" !== n && "2" !== n && "3" !== n ? void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".") : void u(_.response, e)
                }
                ,
                _.onerror = function() {
                    e._webAudio && (e._html5 = !0,
                        e._webAudio = !1,
                        e._sounds = [],
                        delete r[n],
                        e.load())
                }
                ,
                i(_)
        }
    }
        , i = function(e) {
        try {
            e.send()
        } catch (n) {
            e.onerror()
        }
    }
        , u = function(e, t) {
        n.ctx.decodeAudioData(e, function(e) {
            e && t._sounds.length > 0 && (r[t._src] = e,
                d(t, e))
        }, function() {
            t._emit("loaderror", null, "Decoding audio data failed.")
        })
    }
        , d = function(e, n) {
        n && !e._duration && (e._duration = n.duration),
        0 === Object.keys(e._sprite).length && (e._sprite = {
            __default: [0, 1e3 * e._duration]
        }),
        "loaded" !== e._state && (e._state = "loaded",
            e._emit("load"),
            e._loadQueue())
    }
        , _ = function() {
        try {
            "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
        } catch (e) {
            n.usingWebAudio = !1
        }
        var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform)
            , t = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
            , o = t ? parseInt(t[1], 10) : null;
        if (e && o && o < 9) {
            var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
            (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1)
        }
        n.usingWebAudio && (n.masterGain = "undefined" == typeof n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(),
            n.masterGain.gain.value = 1,
            n.masterGain.connect(n.ctx.destination)),
            n._setup()
    };
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: n,
            Howl: t
        }
    }),
    "undefined" != typeof exports && (exports.Howler = n,
        exports.Howl = t),
        "undefined" != typeof window ? (window.HowlerGlobal = e,
            window.Howler = n,
            window.Howl = t,
            window.Sound = o) : "undefined" != typeof global && (global.HowlerGlobal = e,
            global.Howler = n,
            global.Howl = t,
            global.Sound = o)
}(),
    !function() {
        "use strict";
        HowlerGlobal.prototype._pos = [0, 0, 0],
            HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
            HowlerGlobal.prototype.stereo = function(e) {
                var n = this;
                if (!n.ctx || !n.ctx.listener)
                    return n;
                for (var t = n._howls.length - 1; t >= 0; t--)
                    n._howls[t].stereo(e);
                return n
            }
            ,
            HowlerGlobal.prototype.pos = function(e, n, t) {
                var o = this;
                return o.ctx && o.ctx.listener ? (n = "number" != typeof n ? o._pos[1] : n,
                    t = "number" != typeof t ? o._pos[2] : t,
                    "number" != typeof e ? o._pos : (o._pos = [e, n, t],
                        o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]),
                        o)) : o
            }
            ,
            HowlerGlobal.prototype.orientation = function(e, n, t, o, r, a) {
                var i = this;
                if (!i.ctx || !i.ctx.listener)
                    return i;
                var u = i._orientation;
                return n = "number" != typeof n ? u[1] : n,
                    t = "number" != typeof t ? u[2] : t,
                    o = "number" != typeof o ? u[3] : o,
                    r = "number" != typeof r ? u[4] : r,
                    a = "number" != typeof a ? u[5] : a,
                    "number" != typeof e ? u : (i._orientation = [e, n, t, o, r, a],
                        i.ctx.listener.setOrientation(e, n, t, o, r, a),
                        i)
            }
            ,
            Howl.prototype.init = function(e) {
                return function(n) {
                    var t = this;
                    return t._orientation = n.orientation || [1, 0, 0],
                        t._stereo = n.stereo || null,
                        t._pos = n.pos || null,
                        t._pannerAttr = {
                            coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : 360,
                            coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : 360,
                            coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : 0,
                            distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : "inverse",
                            maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : 1e4,
                            panningModel: "undefined" != typeof n.panningModel ? n.panningModel : "HRTF",
                            refDistance: "undefined" != typeof n.refDistance ? n.refDistance : 1,
                            rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : 1
                        },
                        t._onstereo = n.onstereo ? [{
                            fn: n.onstereo
                        }] : [],
                        t._onpos = n.onpos ? [{
                            fn: n.onpos
                        }] : [],
                        t._onorientation = n.onorientation ? [{
                            fn: n.onorientation
                        }] : [],
                        e.call(this, n)
                }
            }(Howl.prototype.init),
            Howl.prototype.stereo = function(n, t) {
                var o = this;
                if (!o._webAudio)
                    return o;
                if ("loaded" !== o._state)
                    return o._queue.push({
                        event: "stereo",
                        action: function() {
                            o.stereo(n, t)
                        }
                    }),
                        o;
                var r = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                if ("undefined" == typeof t) {
                    if ("number" != typeof n)
                        return o._stereo;
                    o._stereo = n,
                        o._pos = [n, 0, 0]
                }
                for (var a = o._getSoundIds(t), i = 0; i < a.length; i++) {
                    var u = o._soundById(a[i]);
                    if (u) {
                        if ("number" != typeof n)
                            return u._stereo;
                        u._stereo = n,
                            u._pos = [n, 0, 0],
                        u._node && (u._pannerAttr.panningModel = "equalpower",
                        u._panner && u._panner.pan || e(u, r),
                            "spatial" === r ? u._panner.setPosition(n, 0, 0) : u._panner.pan.value = n),
                            o._emit("stereo", u._id)
                    }
                }
                return o
            }
            ,
            Howl.prototype.pos = function(n, t, o, r) {
                var a = this;
                if (!a._webAudio)
                    return a;
                if ("loaded" !== a._state)
                    return a._queue.push({
                        event: "pos",
                        action: function() {
                            a.pos(n, t, o, r)
                        }
                    }),
                        a;
                if (t = "number" != typeof t ? 0 : t,
                        o = "number" != typeof o ? -.5 : o,
                    "undefined" == typeof r) {
                    if ("number" != typeof n)
                        return a._pos;
                    a._pos = [n, t, o]
                }
                for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                    var d = a._soundById(i[u]);
                    if (d) {
                        if ("number" != typeof n)
                            return d._pos;
                        d._pos = [n, t, o],
                        d._node && (d._panner && !d._panner.pan || e(d, "spatial"),
                            d._panner.setPosition(n, t, o)),
                            a._emit("pos", d._id)
                    }
                }
                return a
            }
            ,
            Howl.prototype.orientation = function(n, t, o, r) {
                var a = this;
                if (!a._webAudio)
                    return a;
                if ("loaded" !== a._state)
                    return a._queue.push({
                        event: "orientation",
                        action: function() {
                            a.orientation(n, t, o, r)
                        }
                    }),
                        a;
                if (t = "number" != typeof t ? a._orientation[1] : t,
                        o = "number" != typeof o ? a._orientation[2] : o,
                    "undefined" == typeof r) {
                    if ("number" != typeof n)
                        return a._orientation;
                    a._orientation = [n, t, o]
                }
                for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
                    var d = a._soundById(i[u]);
                    if (d) {
                        if ("number" != typeof n)
                            return d._orientation;
                        d._orientation = [n, t, o],
                        d._node && (d._panner || (d._pos || (d._pos = a._pos || [0, 0, -.5]),
                            e(d, "spatial")),
                            d._panner.setOrientation(n, t, o)),
                            a._emit("orientation", d._id)
                    }
                }
                return a
            }
            ,
            Howl.prototype.pannerAttr = function() {
                var n, t, o, r = this, a = arguments;
                if (!r._webAudio)
                    return r;
                if (0 === a.length)
                    return r._pannerAttr;
                if (1 === a.length) {
                    if ("object" != typeof a[0])
                        return o = r._soundById(parseInt(a[0], 10)),
                            o ? o._pannerAttr : r._pannerAttr;
                    n = a[0],
                    "undefined" == typeof t && (r._pannerAttr = {
                        coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : r._coneInnerAngle,
                        coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : r._coneOuterAngle,
                        coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : r._coneOuterGain,
                        distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : r._distanceModel,
                        maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : r._maxDistance,
                        panningModel: "undefined" != typeof n.panningModel ? n.panningModel : r._panningModel,
                        refDistance: "undefined" != typeof n.refDistance ? n.refDistance : r._refDistance,
                        rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : r._rolloffFactor
                    })
                } else
                    2 === a.length && (n = a[0],
                        t = parseInt(a[1], 10));
                for (var i = r._getSoundIds(t), u = 0; u < i.length; u++)
                    if (o = r._soundById(i[u])) {
                        var d = o._pannerAttr;
                        d = {
                            coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : d.coneInnerAngle,
                            coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : d.coneOuterAngle,
                            coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : d.coneOuterGain,
                            distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : d.distanceModel,
                            maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : d.maxDistance,
                            panningModel: "undefined" != typeof n.panningModel ? n.panningModel : d.panningModel,
                            refDistance: "undefined" != typeof n.refDistance ? n.refDistance : d.refDistance,
                            rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : d.rolloffFactor
                        };
                        var _ = o._panner;
                        _ ? (_.coneInnerAngle = d.coneInnerAngle,
                            _.coneOuterAngle = d.coneOuterAngle,
                            _.coneOuterGain = d.coneOuterGain,
                            _.distanceModel = d.distanceModel,
                            _.maxDistance = d.maxDistance,
                            _.panningModel = d.panningModel,
                            _.refDistance = d.refDistance,
                            _.rolloffFactor = d.rolloffFactor) : (o._pos || (o._pos = r._pos || [0, 0, -.5]),
                            e(o, "spatial"))
                    }
                return r
            }
            ,
            Sound.prototype.init = function(e) {
                return function() {
                    var n = this
                        , t = n._parent;
                    n._orientation = t._orientation,
                        n._stereo = t._stereo,
                        n._pos = t._pos,
                        n._pannerAttr = t._pannerAttr,
                        e.call(this),
                        n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
                }
            }(Sound.prototype.init),
            Sound.prototype.reset = function(e) {
                return function() {
                    var n = this
                        , t = n._parent;
                    return n._orientation = t._orientation,
                        n._pos = t._pos,
                        n._pannerAttr = t._pannerAttr,
                        e.call(this)
                }
            }(Sound.prototype.reset);
        var e = function(e, n) {
            n = n || "spatial",
                "spatial" === n ? (e._panner = Howler.ctx.createPanner(),
                    e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle,
                    e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle,
                    e._panner.coneOuterGain = e._pannerAttr.coneOuterGain,
                    e._panner.distanceModel = e._pannerAttr.distanceModel,
                    e._panner.maxDistance = e._pannerAttr.maxDistance,
                    e._panner.panningModel = e._pannerAttr.panningModel,
                    e._panner.refDistance = e._pannerAttr.refDistance,
                    e._panner.rolloffFactor = e._pannerAttr.rolloffFactor,
                    e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                    e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(),
                    e._panner.pan.value = e._stereo),
                e._panner.connect(e._node),
            e._paused || e._parent.pause(e._id, !0).play(e._id)
        }
    }();
!function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.d3 = t.d3 || {})
}(this, function(t) {
    "use strict";
    function i(t) {
        if (!(t >= 1))
            throw new Error;
        this._size = t,
            this._call = this._error = null,
            this._tasks = [],
            this._data = [],
            this._waiting = this._active = this._ended = this._start = 0
    }
    function n(t) {
        if (!t._start)
            try {
                r(t)
            } catch (i) {
                if (t._tasks[t._ended + t._active - 1])
                    a(t, i);
                else if (!t._data)
                    throw i
            }
    }
    function r(t) {
        for (; t._start = t._waiting && t._active < t._size; ) {
            var i = t._ended + t._active
                , n = t._tasks[i]
                , r = n.length - 1
                , a = n[r];
            n[r] = e(t, i),
                --t._waiting,
                ++t._active,
                n = a.apply(null, n),
            t._tasks[i] && (t._tasks[i] = n || c)
        }
    }
    function e(t, i) {
        return function(r, e) {
            t._tasks[i] && (--t._active,
                ++t._ended,
                t._tasks[i] = null,
            null == t._error && (null != r ? a(t, r) : (t._data[i] = e,
                t._waiting ? n(t) : s(t))))
        }
    }
    function a(t, i) {
        var n, r = t._tasks.length;
        for (t._error = i,
                 t._data = void 0,
                 t._waiting = NaN; --r >= 0; )
            if ((n = t._tasks[r]) && (t._tasks[r] = null,
                    n.abort))
                try {
                    n.abort()
                } catch (i) {}
        t._active = NaN,
            s(t)
    }
    function s(t) {
        if (!t._active && t._call) {
            var i = t._data;
            t._data = void 0,
                t._call(t._error, i)
        }
    }
    function o(t) {
        return new i(arguments.length ? +t : 1 / 0)
    }
    var _ = [].slice
        , c = {};
    i.prototype = o.prototype = {
        constructor: i,
        defer: function(t) {
            if ("function" != typeof t || this._call)
                throw new Error;
            if (null != this._error)
                return this;
            var i = _.call(arguments, 1);
            return i.push(t),
                ++this._waiting,
                this._tasks.push(i),
                n(this),
                this
        },
        abort: function() {
            return null == this._error && a(this, new Error("abort")),
                this
        },
        await: function(t) {
            if ("function" != typeof t || this._call)
                throw new Error;
            return this._call = function(i, n) {
                t.apply(null, [i].concat(n))
            }
                ,
                s(this),
                this
        },
        awaitAll: function(t) {
            if ("function" != typeof t || this._call)
                throw new Error;
            return this._call = t,
                s(this),
                this
        }
    },
        t.queue = o,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.d3 = n.d3 || {})
}(this, function(n) {
    "use strict";
    function t() {}
    function e(n, e) {
        var r = new t;
        if (n instanceof t)
            n.each(function(n, t) {
                r.set(t, n)
            });
        else if (Array.isArray(n)) {
            var i, u = -1, o = n.length;
            if (null == e)
                for (; ++u < o; )
                    r.set(u, n[u]);
            else
                for (; ++u < o; )
                    r.set(e(i = n[u], u, n), i)
        } else if (n)
            for (var s in n)
                r.set(s, n[s]);
        return r
    }
    function r() {
        function n(t, i, u, o) {
            if (i >= a.length)
                return null != f ? f(t) : null != r ? t.sort(r) : t;
            for (var s, c, h, l = -1, v = t.length, p = a[i++], y = e(), d = u(); ++l < v; )
                (h = y.get(s = p(c = t[l]) + "")) ? h.push(c) : y.set(s, [c]);
            return y.each(function(t, e) {
                o(d, e, n(t, i, u, o))
            }),
                d
        }
        function t(n, e) {
            if (++e > a.length)
                return n;
            var r, i = h[e - 1];
            return null != f && e >= a.length ? r = n.entries() : (r = [],
                n.each(function(n, i) {
                    r.push({
                        key: i,
                        values: t(n, e)
                    })
                })),
                null != i ? r.sort(function(n, t) {
                    return i(n.key, t.key)
                }) : r
        }
        var r, f, c, a = [], h = [];
        return c = {
            object: function(t) {
                return n(t, 0, i, u)
            },
            map: function(t) {
                return n(t, 0, o, s)
            },
            entries: function(e) {
                return t(n(e, 0, o, s), 0)
            },
            key: function(n) {
                return a.push(n),
                    c
            },
            sortKeys: function(n) {
                return h[a.length - 1] = n,
                    c
            },
            sortValues: function(n) {
                return r = n,
                    c
            },
            rollup: function(n) {
                return f = n,
                    c
            }
        }
    }
    function i() {
        return {}
    }
    function u(n, t, e) {
        n[t] = e
    }
    function o() {
        return e()
    }
    function s(n, t, e) {
        n.set(t, e)
    }
    function f() {}
    function c(n, t) {
        var e = new f;
        if (n instanceof f)
            n.each(function(n) {
                e.add(n)
            });
        else if (n) {
            var r = -1
                , i = n.length;
            if (null == t)
                for (; ++r < i; )
                    e.add(n[r]);
            else
                for (; ++r < i; )
                    e.add(t(n[r], r, n))
        }
        return e
    }
    function a(n) {
        var t = [];
        for (var e in n)
            t.push(e);
        return t
    }
    function h(n) {
        var t = [];
        for (var e in n)
            t.push(n[e]);
        return t
    }
    function l(n) {
        var t = [];
        for (var e in n)
            t.push({
                key: e,
                value: n[e]
            });
        return t
    }
    var v = "$";
    t.prototype = e.prototype = {
        constructor: t,
        has: function(n) {
            return v + n in this
        },
        get: function(n) {
            return this[v + n]
        },
        set: function(n, t) {
            return this[v + n] = t,
                this
        },
        remove: function(n) {
            var t = v + n;
            return t in this && delete this[t]
        },
        clear: function() {
            for (var n in this)
                n[0] === v && delete this[n]
        },
        keys: function() {
            var n = [];
            for (var t in this)
                t[0] === v && n.push(t.slice(1));
            return n
        },
        values: function() {
            var n = [];
            for (var t in this)
                t[0] === v && n.push(this[t]);
            return n
        },
        entries: function() {
            var n = [];
            for (var t in this)
                t[0] === v && n.push({
                    key: t.slice(1),
                    value: this[t]
                });
            return n
        },
        size: function() {
            var n = 0;
            for (var t in this)
                t[0] === v && ++n;
            return n
        },
        empty: function() {
            for (var n in this)
                if (n[0] === v)
                    return !1;
            return !0
        },
        each: function(n) {
            for (var t in this)
                t[0] === v && n(this[t], t.slice(1), this)
        }
    };
    var p = e.prototype;
    f.prototype = c.prototype = {
        constructor: f,
        has: p.has,
        add: function(n) {
            return n += "",
                this[v + n] = n,
                this
        },
        remove: p.remove,
        clear: p.clear,
        values: p.keys,
        size: p.size,
        empty: p.empty,
        each: p.each
    },
        n.nest = r,
        n.set = c,
        n.map = e,
        n.keys = a,
        n.values = h,
        n.entries = l,
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
});
!function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(n.d3 = n.d3 || {})
}(this, function(n) {
    "use strict";
    function e() {
        for (var n, e = 0, r = arguments.length, o = {}; r > e; ++e) {
            if (!(n = arguments[e] + "") || n in o)
                throw new Error("illegal type: " + n);
            o[n] = []
        }
        return new t(o)
    }
    function t(n) {
        this._ = n
    }
    function r(n, e) {
        return n.trim().split(/^|\s+/).map(function(n) {
            var t = ""
                , r = n.indexOf(".");
            if (r >= 0 && (t = n.slice(r + 1),
                    n = n.slice(0, r)),
                n && !e.hasOwnProperty(n))
                throw new Error("unknown type: " + n);
            return {
                type: n,
                name: t
            }
        })
    }
    function o(n, e) {
        for (var t, r = 0, o = n.length; o > r; ++r)
            if ((t = n[r]).name === e)
                return t.value
    }
    function i(n, e, t) {
        for (var r = 0, o = n.length; o > r; ++r)
            if (n[r].name === e) {
                n[r] = f,
                    n = n.slice(0, r).concat(n.slice(r + 1));
                break
            }
        return null != t && n.push({
            name: e,
            value: t
        }),
            n
    }
    var f = {
        value: function() {}
    };
    t.prototype = e.prototype = {
        constructor: t,
        on: function(n, e) {
            var t, f = this._, l = r(n + "", f), u = -1, a = l.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e)
                    throw new Error("invalid callback: " + e);
                for (; ++u < a; )
                    if (t = (n = l[u]).type)
                        f[t] = i(f[t], n.name, e);
                    else if (null == e)
                        for (t in f)
                            f[t] = i(f[t], n.name, null);
                return this
            }
            for (; ++u < a; )
                if ((t = (n = l[u]).type) && (t = o(f[t], n.name)))
                    return t
        },
        copy: function() {
            var n = {}
                , e = this._;
            for (var r in e)
                n[r] = e[r].slice();
            return new t(n)
        },
        call: function(n, e) {
            if ((t = arguments.length - 2) > 0)
                for (var t, r, o = new Array(t), i = 0; t > i; ++i)
                    o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(n))
                throw new Error("unknown type: " + n);
            for (r = this._[n],
                     i = 0,
                     t = r.length; t > i; ++i)
                r[i].value.apply(e, o)
        },
        apply: function(n, e, t) {
            if (!this._.hasOwnProperty(n))
                throw new Error("unknown type: " + n);
            for (var r = this._[n], o = 0, i = r.length; i > o; ++o)
                r[o].value.apply(e, t)
        }
    },
        n.dispatch = e,
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
});
!function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports, require("d3-collection"), require("d3-dispatch"), require("d3-dsv")) : "function" == typeof define && define.amd ? define(["exports", "d3-collection", "d3-dispatch", "d3-dsv"], n) : n(e.d3 = e.d3 || {}, e.d3, e.d3, e.d3)
}(this, function(e, n, t, r) {
    "use strict";
    function o(e, r) {
        function o(e) {
            var n, t = d.status;
            if (!t && l(d) || t >= 200 && t < 300 || 304 === t) {
                if (c)
                    try {
                        n = c.call(i, d)
                    } catch (e) {
                        return void f.call("error", i, e)
                    }
                else
                    n = d;
                f.call("load", i, n)
            } else
                f.call("error", i, e)
        }
        var i, s, c, a, f = t.dispatch("beforesend", "progress", "load", "error"), p = n.map(), d = new XMLHttpRequest, h = null, m = null, v = 0;
        if ("undefined" == typeof XDomainRequest || "withCredentials"in d || !/^(http(s)?:)?\/\//.test(e) || (d = new XDomainRequest),
                "onload"in d ? d.onload = d.onerror = d.ontimeout = o : d.onreadystatechange = function(e) {
                    d.readyState > 3 && o(e)
                }
                ,
                d.onprogress = function(e) {
                    f.call("progress", i, e)
                }
                ,
                i = {
                    header: function(e, n) {
                        return e = (e + "").toLowerCase(),
                            arguments.length < 2 ? p.get(e) : (null == n ? p.remove(e) : p.set(e, n + ""),
                                i)
                    },
                    mimeType: function(e) {
                        return arguments.length ? (s = null == e ? null : e + "",
                            i) : s
                    },
                    responseType: function(e) {
                        return arguments.length ? (a = e,
                            i) : a
                    },
                    timeout: function(e) {
                        return arguments.length ? (v = +e,
                            i) : v
                    },
                    user: function(e) {
                        return arguments.length < 1 ? h : (h = null == e ? null : e + "",
                            i)
                    },
                    password: function(e) {
                        return arguments.length < 1 ? m : (m = null == e ? null : e + "",
                            i)
                    },
                    response: function(e) {
                        return c = e,
                            i
                    },
                    get: function(e, n) {
                        return i.send("GET", e, n)
                    },
                    post: function(e, n) {
                        return i.send("POST", e, n)
                    },
                    send: function(n, t, r) {
                        return d.open(n, e, !0, h, m),
                        null == s || p.has("accept") || p.set("accept", s + ",*/*"),
                        d.setRequestHeader && p.each(function(e, n) {
                            d.setRequestHeader(n, e)
                        }),
                        null != s && d.overrideMimeType && d.overrideMimeType(s),
                        null != a && (d.responseType = a),
                        v > 0 && (d.timeout = v),
                        null == r && "function" == typeof t && (r = t,
                            t = null),
                        null != r && 1 === r.length && (r = u(r)),
                        null != r && i.on("error", r).on("load", function(e) {
                            r(null, e)
                        }),
                            f.call("beforesend", i, d),
                            d.send(null == t ? null : t),
                            i
                    },
                    abort: function() {
                        return d.abort(),
                            i
                    },
                    on: function() {
                        var e = f.on.apply(f, arguments);
                        return e === f ? i : e
                    }
                },
            null != r) {
            if ("function" != typeof r)
                throw new Error("invalid callback: " + r);
            return i.get(r)
        }
        return i
    }
    function u(e) {
        return function(n, t) {
            e(null == n ? t : null)
        }
    }
    function l(e) {
        var n = e.responseType;
        return n && "text" !== n ? e.response : e.responseText
    }
    function i(e, n) {
        return function(t, r) {
            var u = o(t).mimeType(e).response(n);
            if (null != r) {
                if ("function" != typeof r)
                    throw new Error("invalid callback: " + r);
                return u.get(r)
            }
            return u
        }
    }
    function s(e, n) {
        return function(t, r, u) {
            arguments.length < 3 && (u = r,
                r = null);
            var l = o(t).mimeType(e);
            return l.row = function(e) {
                return arguments.length ? l.response(c(n, r = e)) : r
            }
                ,
                l.row(r),
                u ? l.get(u) : l
        }
    }
    function c(e, n) {
        return function(t) {
            return e(t.responseText, n)
        }
    }
    var a = i("text/html", function(e) {
        return document.createRange().createContextualFragment(e.responseText)
    })
        , f = i("application/json", function(e) {
        return JSON.parse(e.responseText)
    })
        , p = i("text/plain", function(e) {
        return e.responseText
    })
        , d = i("application/xml", function(e) {
        var n = e.responseXML;
        if (!n)
            throw new Error("parse error");
        return n
    })
        , h = s("text/csv", r.csvParse)
        , m = s("text/tab-separated-values", r.tsvParse);
    e.request = o,
        e.html = a,
        e.json = f,
        e.text = p,
        e.xml = d,
        e.csv = h,
        e.tsv = m,
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
});
var UTILS = function(e, t) {
    var n = {};
    return n.getPointsFromDataByMonth = function(e, n) {
        n = n || DATA.eqData;
        var r = t.sortedIndex(n, {
            date: e
        }, function(e) {
            return e.date.getTime()
        });
        if (r !== -1) {
            var a = r
                , o = new Date(e.getTime());
            for (o.setMonth(e.getMonth() + 1); a < n.length && n[a].date < o; )
                a++;
            return n.slice(r, a)
        }
    }
        ,
        n.getEruptionsByEndMonth = function(e) {
            return t.filter(DATA.vLocations, function(n) {
                var r = t.find(n.eruptions, function(t) {
                    return t.endDate.getMonth() == e.getMonth() && t.endDate.getFullYear() == e.getFullYear()
                });
                return r
            })
        }
        ,
        n.getSo2FieldPointsByMonth = function(e) {
            return t.filter(DATA.so2FieldPoints, function(t) {
                return t.date.getMonth() == e.getMonth() && t.date.getFullYear() == e.getFullYear()
            })
        }
        ,
        n.getPointsBetweenMonths = function(e, t, n) {
            n = n || DATA.eqData;
            for (var r = 0; r < n.length && n[r].date <= e; )
                r++;
            if (r != n.length) {
                for (var a = r; a < n.length && n[a].date <= t; )
                    a++;
                if (0 != a)
                    return n.slice(r, a)
            }
        }
        ,
        n.getEruptionStatusByMonth = function(e) {
            return t.partition(DATA.vLocations, function(n) {
                var r = t.find(n.eruptions, function(t) {
                    return t.roundedStartDate <= e && t.endDate >= e
                });
                return n.currentEruption = r,
                    r
            })
        }
        ,
        n.findPointInCollectionById = function(e, t) {
            for (var n = e.length, r = 0; r < n; ++r) {
                var a = e.get(r);
                if (a.id === t)
                    return a
            }
            return -1
        }
        ,
        n.roundToNearestDay = function(e) {
            var t = new Date(e.getTime());
            return t.setHours(0, 0, 0, 0),
                t
        }
        ,
        n.getMonthName = function(e, t) {
            var n;
            switch (e) {
                case 0:
                    n = "Jan";
                    break;
                case 1:
                    n = "Feb";
                    break;
                case 2:
                    n = "Mar";
                    break;
                case 3:
                    n = "Apr";
                    break;
                case 4:
                    n = "May";
                    break;
                case 5:
                    n = "Jun";
                    break;
                case 6:
                    n = "Jul";
                    break;
                case 7:
                    n = "Aug";
                    break;
                case 8:
                    n = "Sep";
                    break;
                case 9:
                    n = "Oct";
                    break;
                case 10:
                    n = "Nov";
                    break;
                case 11:
                    n = "Dec";
                    break;
                default:
                    n = "Jan"
            }
            return t ? n.toUpperCase() : n
        }
        ,
        n.dateObjectToMonthYear = function(e) {
            return UTILS.getMonthName(e.getMonth()) + " " + e.getFullYear()
        }
        ,
        n.dateObjectToSo2NotificationDate = function(e) {
            return UTILS.getMonthName(e.getMonth()) + " " + e.getDate() + ", " + e.getFullYear()
        }
        ,
        n.dateObjectToSo2DisplayDate = function(e) {
            var t = e.getDate();
            return t < 10 && (t = "0" + t.toString()),
            UTILS.getMonthName(e.getMonth(), !0) + " " + t + " " + e.getFullYear()
        }
        ,
        n.gup = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = "[\\?&]" + e + "=([^&#]*)"
                , n = new RegExp(t)
                , r = n.exec(window.location.href);
            return null == r ? "" : r[1]
        }
        ,
        n.timelinePxToDate = function(t) {
            var n = t / e(".timeline--future-rail").width();
            n > 1 && (n = 1),
            n < 0 && (n = 0);
            var r = DATA.last.getFullYear() + DATA.last.getMonth() / 11
                , a = n * (r - DATA.first.getFullYear()) + DATA.first.getFullYear()
                , o = Math.floor(a)
                , i = Math.floor(12 * (a - o));
            return new Date(o,i)
        }
        ,
        n.dateToTimelinePx = function(t) {
            var n = t.getFullYear()
                , r = t.getMonth()
                , a = n + r / 11;
            a = Math.round(1e3 * a) / 1e3;
            var o = DATA.last.getFullYear() + DATA.last.getMonth() / 11
                , i = (a - DATA.first.getFullYear()) / (o - DATA.first.getFullYear());
            return i * e(".timeline--future-rail").width()
        }
        ,
        n.drawTriangle = function(e, t) {
            var n = e * (Math.sqrt(3) / 2)
                , r = [n / 2, n / 2]
                , a = document.createElement("canvas");
            a.width = n + 3,
                a.height = n;
            var o = a.getContext("2d");
            return o.fillStyle = t,
                o.beginPath(),
                o.moveTo(r[0] + 1, .15 * n),
                o.lineTo(r[0] - e / 2 + 1, n),
                o.lineTo(r[0] + e / 2 + 1, n),
                o.lineTo(r[0] + 1, .15 * n),
                o.fill(),
                a
        }
        ,
        n.Timer = function(e, t) {
            var n, r, a = t;
            this.pause = function() {
                window.clearTimeout(n),
                    a -= new Date - r
            }
                ,
                this.resume = function() {
                    r = new Date,
                        window.clearTimeout(n),
                        n = window.setTimeout(e, a)
                }
                ,
                this.resume()
        }
        ,
        n.fixHover = function(e) {
            var t = e.parentNode
                , n = e.nextSibling;
            t.removeChild(e),
                setTimeout(function() {
                    t.insertBefore(e, n)
                }, 0)
        }
        ,
        n
}($, _);
var DATA = {
    eqData: [],
    eqLocations: {},
    eruptionData: [],
    vLocations: {},
    emissions: [],
    dataDays: [],
    so2FieldPoints: []
};
$(".u-hidden").hide();
var GLOBALS = function(e, a, o) {
    var s = "https://api.si.axismaps.io"
        , r = {
        eq: {
            json: s + "/earthquakes/download/geojson/",
            csv: s + "/earthquakes/download/csv/"
        },
        vol: {
            json: "http://webservices.volcano.si.edu/geoserver/GVP-VOTW/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=GVP-VOTW:E3WebApp_Eruptions1960&outputFormat=application%2Fjson",
            csv: "http://webservices.volcano.si.edu/geoserver/GVP-VOTW/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=GVP-VOTW:E3WebApp_Eruptions1960&outputFormat=csv"
        },
        em: {
            json: "http://webservices.volcano.si.edu/geoserver/GVP-VOTW/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=GVP-VOTW:E3WebApp_Emissions&outputFormat=application%2Fjson",
            csv: "http://webservices.volcano.si.edu/geoserver/GVP-VOTW/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=GVP-VOTW:E3WebApp_Emissions&outputFormat=csv"
        }
    }
        , i = {
        animationDuration: 3e3,
        totalFrames: 100,
        finalOpacity: .2
    };
    i.frameSpeed = i.animationDuration / i.totalFrames,
        i.opacityStagger = (1 - i.finalOpacity) / i.totalFrames;
    var t = 5.5
        , n = {
        daysPerFrame: 1,
        frame: 0,
        interval: null,
        speed: {
            slow: 400,
            normal: 100,
            fast: 25,
            setting: 100
        },
        startDate: new Date(1960,0)
    }
        , m = {
        eq: new Cesium.Color.fromCssColorString("#99e7ff"),
        v: new Cesium.Color.fromCssColorString("#ff5100"),
        em: new Cesium.Color.fromCssColorString("#d4ff00")
    }
        , l = {
        eq: [0, 0, 0, 0, 0, 4, 8, 11, 15, 19],
        v: [o.drawTriangle(6, "#ff5100"), o.drawTriangle(10, "#ff5100"), o.drawTriangle(13, "#ff5100"), o.drawTriangle(16, "#ff5100"), o.drawTriangle(19, "#ff5100"), o.drawTriangle(23, "#ff5100"), o.drawTriangle(28, "#ff5100")],
        so2: [{
            size: 10,
            mag: 10
        }, {
            size: 25,
            mag: 30
        }, {
            size: 40,
            mag: 100
        }, {
            size: 55,
            mag: 1e3
        }, {
            size: 70,
            mag: 3e3
        }, {
            size: 85,
            mag: 6e3
        }, {
            size: 100,
            mag: 1 / 0
        }],
        vHighlight: o.drawTriangle(25, "#ffffff")
    }
        , u = {
        eq: {
            start: .01,
            end: .05
        },
        v: {
            start: .01,
            end: .4
        },
        em: {
            start: 0,
            end: .01
        },
        so2Field: {
            high: 50
        }
    }
        , c = {
        eq: 24,
        v: 8,
        em: 8,
        sound: 1e3
    }
        , w = {
        min: 35e5,
        max: 6e7
    }
        , p = {
        v: {
            0: new Howl({
                src: ["audio/volcano/VEI_0.mp3"]
            }),
            1: new Howl({
                src: ["audio/volcano/VEI_1.mp3"]
            }),
            2: new Howl({
                src: ["audio/volcano/VEI_2.mp3"]
            }),
            3: new Howl({
                src: ["audio/volcano/VEI_3.mp3"]
            }),
            4: new Howl({
                src: ["audio/volcano/VEI_4.mp3"]
            }),
            5: new Howl({
                src: ["audio/volcano/VEI_5.mp3"]
            }),
            6: new Howl({
                src: ["audio/volcano/VEI_7.mp3"]
            }),
            7: new Howl({
                src: ["audio/volcano/VEI_7.mp3"]
            }),
            8: new Howl({
                src: ["audio/volcano/VEI_7.mp3"]
            })
        },
        eq: {
            5: new Howl({
                src: ["audio/earthquake/mag_5.mp3"]
            }),
            6: new Howl({
                src: ["audio/earthquake/mag_6.mp3"]
            }),
            7: new Howl({
                src: ["audio/earthquake/mag_7.mp3"]
            }),
            8: new Howl({
                src: ["audio/earthquake/mag_8.mp3"]
            }),
            9: new Howl({
                src: ["audio/earthquake/mag_9.mp3"]
            })
        }
    };
    return globals = {
        animation: i,
        audio: p,
        colors: m,
        downloadLinks: r,
        time: n,
        opacities: u,
        fades: c,
        icons: l,
        sURL: s,
        smallEQCutoff: t,
        zooms: w
    }
}($, _, UTILS);
var DATAFUNCTIONS = function(t, a, e, n) {
    var s = {};
    return s.getData = function() {
        d3.queue().defer(d3.json, n.sURL + "/earthquakes/events/").defer(d3.json, n.sURL + "/earthquakes/locations/").defer(d3.json, n.sURL + "/volcanoes/events/eruptions/").defer(d3.json, n.sURL + "/volcanoes/locations/").defer(d3.json, n.sURL + "/volcanoes/events/emissions/").await(function(e, o, r, i, u, A) {
            o.forEach(s.addEqPointToData),
                DATA.eqData = a.sortBy(DATA.eqData, function(t) {
                    return t.date.getTime()
                }),
                DATA.first = DATA.eqData[0].date,
                DATA.last = DATA.eqData[DATA.eqData.length - 1].date,
                DATA.eqLocations = a.indexBy(r, 2),
                u.forEach(s.createVLocation),
                i = a.sortBy(i, 1),
                i.forEach(s.addVPointToData),
                A.forEach(s.addEmissionPointToData),
                DATA.emissions = a.sortBy(DATA.emissions, function(t) {
                    return t.date.getTime()
                }),
                DATA.legend = {
                    eqMin: a.min(DATA.eqData, function(t) {
                        return t.mag
                    }),
                    eqMax: a.max(DATA.eqData, function(t) {
                        return t.mag
                    }),
                    volMin: a.min(DATA.vLocations, function(t) {
                        var e = a.min(t.eruptions, function(t) {
                            return t.size
                        });
                        return e.mag
                    }),
                    volMax: a.max(DATA.vLocations, function(t) {
                        var e = a.max(t.eruptions, function(t) {
                            return t.mag
                        });
                        return e.mag
                    })
                },
                DATA.legend.volMin = a.min(DATA.legend.volMin.eruptions, function(t) {
                    return t.mag
                }),
                DATA.legend.volMax = a.max(DATA.legend.volMax.eruptions, function(t) {
                    return t.mag
                }),
                DATA.legend.maxEQPixelSizePossible = Math.pow(DATA.legend.eqMax.mag, 1.5) - 10 + 24,
                DATA.legend.maxEmPixelSizePossible = n.icons.so2[n.icons.so2.length - 1].size,
                t(document).trigger("/dataLoaded")
        })
    }
        ,
        s.addEqPointToData = function(t) {
            var a = Math.floor(parseFloat(t[2]))
                , e = n.icons.eq[a]
                , s = t[1].toString()
                , o = new Date(parseInt(s.substr(0, 4)),parseInt(s.substr(4, 2)) - 1,parseInt(s.substr(6, 2)));
            DATA.eqData.push({
                size: e,
                location: t[0],
                id: t[3],
                date: o,
                mag: parseFloat(t[2])
            })
        }
        ,
        s.createVLocation = function(t) {
            DATA.vLocations[t[2]] = {
                id: t[2],
                lat: t[1],
                lon: t[0],
                first: new Date(3e3,1),
                last: new Date(1900,1)
            }
        }
        ,
        s.addVPointToData = function(t) {
            var a = DATA.vLocations["v" + t[0]];
            if (a) {
                a.eruptions || (a.eruptions = []);
                var e = t[1].toString()
                    , n = new Date(parseInt(e.substr(0, 4)),parseInt(e.substr(4, 2)) - 1,parseInt(e.substr(6, 2)))
                    , s = new Date(n.valueOf());
                s.setDate(1),
                    e = t[2].toString();
                var o = new Date(parseInt(e.substr(0, 4)),parseInt(e.substr(4, 2)) - 1,parseInt(e.substr(6, 2)));
                n < a.first && (a.first = n),
                o > a.last && (a.last = o),
                    a.eruptions.push({
                        size: parseFloat(t[3]),
                        location: t[0],
                        id: t[4],
                        startDate: n,
                        endDate: o,
                        roundedStartDate: s,
                        mag: parseFloat(t[3])
                    })
            }
        }
        ,
        s.addEmissionPointToData = function(t) {
            var e = Math.sqrt(parseFloat(t[2]))
                , s = (Math.round(100 * e) / 100,
                parseFloat(t[2]))
                , o = a.find(n.icons.so2, function(t) {
                return s < t.mag
            })
                , r = t[1].toString()
                , i = new Date(parseInt(r.substr(0, 4)),parseInt(r.substr(4, 2)) - 1,parseInt(r.substr(6, 2)));
            DATA.emissions.push({
                animation: t[4],
                size: o.size,
                location: t[0],
                id: t[3],
                date: i,
                mag: s
            })
        }
        ,
        s
}($, _, UTILS, GLOBALS);
var UI = function(e, t, o, i, n) {
    function a(t) {
        e(document).trigger("/showAll", [t]),
            t ? (e(document).trigger("/playPause", ["pause"]),
                e(".showAll").html('<i class="icon icon-video"></i><span>View Map Animation</span>'),
                e(".timeline--current-date, .timeline--current-marker, .speed, .sound").css("visibility", "hidden"),
                e(".timeline--past-rail").width(e(".timeline--future-rail").width()),
                e(".timeline--probe").css("visibility", "hidden"),
                e(document).trigger("/so2/NotificationRemove")) : (e(".showAll").html('<i class="icon icon-camera"></i><span>All Events</span>'),
                e(".timeline--current-date, .timeline--current-marker, .speed, .sound").css("visibility", "visible"),
                e(".timeline--probe").css("visibility", "visible"))
    }
    function s() {
        n.icons.eq.forEach(function(t, o) {
            if (0 !== t) {
                var i = e("<div>").addClass("legend--item").insertBefore(e(".legend--eq-note"));
                e("<div>").addClass("eq-swatch").height(t).width(t).appendTo(i),
                    e("<span>").text(o).appendTo(i)
            }
        }),
            n.icons.v.forEach(function(t, o) {
                var i = e("<div>").addClass("legend--item").appendTo(e(".legend--details--vol"));
                i.append(t),
                    e("<span>").text(o).appendTo(i)
            }),
            n.icons.so2.forEach(function(t, o) {
                var i = e("<div>").addClass("legend--item u-hidden").appendTo(e(".legend--details--so2"));
                e("<div>").addClass("so2-swatch").height(t.size).width(t.size).appendTo(i);
                var a = o === n.icons.so2.length - 1 ? ">= " + n.icons.so2[n.icons.so2.length - 2].mag + " kt" : "< " + t.mag + " kt";
                e("<span>").text(a).appendTo(i)
            })
    }
    function l() {
        e("<div>").addClass("eq-swatch").height(10).width(10).appendTo(e(".about--eq-swatch")),
            e(".about--vol-swatch").append(o.drawTriangle(10.5, "#ff5100")),
            e("<div>").addClass("so2-swatch").height(10).width(10).appendTo(e(".about--so2-swatch"))
    }
    function r() {
        e(".about").css("visibility", "hidden").show();
        var t = e(window).height()
            , o = e(window).width();
        o <= 1150 ? e(".about--faq").css({
            left: 10,
            top: 10
        }) : e(".about--faq").css({
            left: e(".zoomBtns").offset().left,
            top: e(".zoomBtns").offset().top
        }),
            e(".about--legend").css({
                left: e(".legend--eq-toggle").offset().left,
                top: e(".zoomBtns").offset().top
            }),
            e(".about--points").css({
                bottom: e(".map").height() / 2 + e(".controls").outerHeight() + 10,
                left: e(".map").width() / 2 - e(".about--points").width() / 2
            }),
            e(".about--so2").css({
                left: e(".map").width() / 2 - e(".about--points").width() / 2,
                top: e(".map").height() / 2 + e(".topbar").outerHeight() + 10
            }),
            e(".about--play").css({
                bottom: e(".controls").outerHeight() + 10,
                left: 10
            }),
            e(".about--timeline").css({
                bottom: e(".controls").outerHeight() + 10,
                left: e(".timeline").offset().left + e(".timeline").width() / 2 - e(".about--timeline").width() / 2
            }),
            e(".about--view-all").css({
                bottom: e(".controls").outerHeight() + 10,
                right: 10
            });
        var i = e(".about--view-all").offset().top + e(".about--view-all").outerHeight();
        e(".about--ll-view-all").css({
            height: e(".controls").offset().top - i,
            left: e(".showAll").offset().left + e(".showAll").outerWidth() / 2,
            top: i
        }),
            e(".about--speed").css({
                bottom: t - e(".about--view-all").offset().top + 20,
                left: e(".speed").offset().left + e(".speed").width() / 2 - e(".about--speed").width() / 2
            });
        var n = e(".about--speed").offset().top + e(".about--speed").outerHeight();
        e(".about--ll-speed").css({
            height: e(".controls").offset().top - n,
            left: e(".speed").offset().left + e(".speed").outerWidth() / 2,
            top: n
        }),
            e(".about--sound").css({
                bottom: t - e(".about--speed").offset().top + 20,
                left: e(".sound").offset().left + e(".sound").width() / 2 - e(".about--sound").width() / 2
            });
        var a = e(".about--sound").offset().top + e(".about--sound").outerHeight();
        e(".about--ll-sound").css({
            height: e(".controls").offset().top - a,
            left: e(".sound").offset().left + e(".sound").outerWidth() / 2,
            top: a
        }),
            e(".about").css("visibility", "visible").hide()
    }
    function d(t, i) {
        var n = i.pt
            , a = i.data;
        t.on("click", function() {
            e(document).trigger("/playSo2", [n, a]),
                e(document).trigger("/so2/NotificationRemove")
        }).on("mouseenter", function() {
            e(document).trigger("/so2/Highlight", [n, !0])
        }).on("mouseleave", function() {
            e(document).trigger("/so2/Highlight", [n, !1])
        }),
            e("<p>").addClass("notification--name").text(a.name).appendTo(t),
            e("<p>").addClass("notification--date").text(o.dateObjectToSo2NotificationDate(n.date)).appendTo(t),
            e("<p>").addClass("notification--size").text(n.mag + " Kilotons").appendTo(t),
            e("<p>").addClass("notification--cta").text("Click to view SO2 cloud").appendTo(t)
    }
    function c() {
        e(".timeline--tick, .timeline--date").remove(),
        (DATA.first || DATA.last) && (e(".timeline--start-date").text(DATA.first.getFullYear()),
            e(".timeline--end-date").text(DATA.last.getFullYear()),
            e(".timeline--past-rail, .timeline--current-marker").css({
                left: e(".timeline--future-rail").position().left,
                top: e(".timeline--future-rail").position().top
            }),
            e(".timeline--tick").css("top", e(".timeline--future-rail").position().top + 3))
    }
    function u() {
        e("body").on("mouseup mouseleave touchend", function() {
            p()
        }),
            e("body").on("mousemove touchmove", function(t) {
                t.stopPropagation(),
                    e(".timeline--probe").hide();
                var i = t.pageX - e(".timeline").offset().left
                    , n = o.timelinePxToDate(i);
                e(document).trigger("/jumpTo", [n])
            })
    }
    function p() {
        e("body").off("mousemove mouseup mouseleave touchmove touchend")
    }
    function h() {
        q = !0
    }
    function g() {
        e(this).addClass("dragging"),
            e(document).on("/mapMove", h)
    }
    function m() {
        e(this).removeClass("dragging"),
            e(document).off("/mapMove", h),
        q || v(),
            q = !1
    }
    function f(t) {
        e(document).on("/mapMove", h)
    }
    function b(t) {
        if (e(document).off("/mapMove", h),
                !q) {
            var o = t.originalEvent.changedTouches[0]
                , i = {
                endPosition: {
                    x: o.pageX,
                    y: o.pageY - e(".topbar").outerHeight()
                }
            };
            e(document).trigger("/probeByLocation", [i])
        }
        q = !1
    }
    function v() {
        if (e(".probe").is(":visible")) {
            var t = e(".probe--hidden-link").attr("href");
            "#" !== t && window.open(t)
        }
    }
    function w(t) {
        var o = !1;
        return (t.y < 0 || t.y >= e(".map").outerHeight()) && (o = !0),
        e(".download").is(":visible") && (o = !0),
        e(".about").is(":visible") && (o = !0),
            bbox = e(".zoomBtns")[0].getBoundingClientRect(),
        t.x <= bbox.right && t.x >= bbox.left && t.y >= bbox.top - 100 && t.y <= bbox.bottom - 100 && (o = !0),
            bbox = e(".notifications-panel")[0].getBoundingClientRect(),
        t.x <= bbox.right && t.x >= bbox.left && t.y >= bbox.top - 100 && t.y <= bbox.bottom - 100 && (o = !0),
            o
    }
    function y(t) {
        return ("eq" !== t || !e(".legend--eq-toggle").hasClass("selected")) && (("vol" !== t || !e(".legend--vol-toggle").hasClass("selected")) && ("so2" !== t || !e(".legend--so2-toggle").hasClass("selected")))
    }
    function k() {
        var e = t.reduce(n.audio.v, function(e, t, o) {
            var i = !1;
            return t.playing() && t.seek() > .5 && (i = !0),
                e ? e : i
        }, !1)
            , o = t.reduce(n.audio.eq, function(e, t, o) {
            var i = !1;
            return t.playing() && t.seek() > .5 && (i = !0),
                e ? e : i
        }, !1);
        return e || o
    }
    function x() {
        e(".sound").click(),
            setTimeout(function() {
                e(".sound").addClass("flash")
            }, 1e3)
    }
    var T, C, A = {}, D = [];
    e(document).ready(function() {
        e(document).on("keypress", function(t) {
            32 === t.keyCode && e(".play").click()
        })
    }),
        e(document).on("/dataLoaded", function() {
            A.resize(),
                s(),
                l(),
                x(),
                setTimeout(function() {
                    e(document).trigger("/playPause", ["play"])
                }, 2e3)
        }),
        A.resize = function() {
            c(),
                e(".speed--choices").css("left", e(".speed").offset().left),
                r()
        }
        ,
        e(window).on("resize", A.resize),
        e(".legend--eq-toggle, .legend--vol-toggle, .legend--so2-toggle").on("mouseenter", function() {
            e(this).hasClass("selected") && (e(".js-legend-item").hide(),
                e(".legend--details, .legend--details--" + e(this).attr("data-toggle")).show(),
            e(".sound i:visible").hasClass("icon-volume-up") && (e(this).hasClass("legend--eq-toggle") ? n.audio.eq[9].play() : e(this).hasClass("legend--vol-toggle") && n.audio.v[8].play()))
        }).on("mouseleave", function() {
            e(".legend--details, .js-legend-item").hide(),
                e(".legend--details--default").show()
        }).on("click", function() {
            e(this).toggleClass("selected"),
                e(document).trigger("/toggleLayer", [e(this).attr("data-toggle")]),
            0 === e(".legend--buttons .btn.selected").length && (e(".legend--buttons .btn").addClass("selected"),
                e(document).trigger("/toggleLayer", ["eq"]),
                e(document).trigger("/toggleLayer", ["vol"]),
                e(document).trigger("/toggleLayer", ["so2"]))
        }).on("touchstart", function(t) {
            function i() {
                e(a).trigger("click"),
                    clearTimeout(s),
                    e(a).off("touchend", i),
                    o.fixHover(a)
            }
            function n() {
                e(".legend--details, .js-legend-item").hide(),
                    e(".legend--details--default").show(),
                    e(a).off("touchend", n)
            }
            t.preventDefault();
            var a = this;
            e(a).on("touchend", i);
            var s = setTimeout(function() {
                e(".js-legend-item").hide(),
                    e(".legend--details, .legend--details--" + e(a).attr("data-toggle")).show(),
                    e(a).off("touchend", i),
                    e(a).on("touchend", n)
            }, 500)
        }),
        e(".aboutBtn").on("click", function() {
            e(document).trigger("/disableProbe", !0),
                e(document).trigger("/playPause", "pause"),
                e(".about").show()
        }),
        e(".about--close").on("click", function() {
            e(document).trigger("/disableProbe", !1),
                e(document).trigger("/playPause", "play"),
                e(".about").hide()
        }),
        e(".about--faq").on("click", function() {
            window.open("http://volcano.si.edu/e3/")
        }),
        e(".toggleView").on("click", function() {
            e(document).trigger("/toggleView", [e(this).attr("data-toggle")]),
                "3d" === e(this).attr("data-toggle") ? e(this).attr("data-toggle", "2d") : e(this).attr("data-toggle", "3d"),
                e(this).find("p").toggle()
        }),
        e(".downloadDataBtn").on("click", function() {
            e(document).trigger("/disableProbe", !0),
                e(".download").show()
        }),
        e(".download .icon-cancel").on("click", function() {
            e(document).trigger("/disableProbe", !1),
                e(".download").hide()
        }),
        e(".download--choice-line select").on("change", function() {
            "select" !== e(this).val() ? e(this).next().show() : e(this).next().hide()
        }),
        e(".download--btn").on("click", function(t) {
            if (e(this).hasClass("download--btn--eq"))
                var o = "eq";
            else
                o = e(this).hasClass("download--btn--vol") ? "vol" : "em";
            var i = e(this).prev().find("option:selected").val();
            e(this).attr("href", n.downloadLinks[o][i])
        }),
        e(".zoomIn").on("click", function() {
            e(document).trigger("/zoom", [100])
        }),
        e(".zoomOut").on("click", function() {
            e(document).trigger("/zoom", [-100])
        }),
        e(".play").on("click", function() {
            var t = e(".play i:visible").hasClass("icon-play-1") ? "play" : "pause";
            e(document).trigger("/playPause", [t])
        }),
        e(".showAll").on("click", function() {
            var t = !e(this).hasClass("selected");
            a(t),
                e(this).toggleClass("selected")
        }),
        e(".sound").on("click", function() {
            e(".sound i:visible").hasClass("icon-volume-up") ? (t.each(n.audio.v, function(e) {
                e.mute(!0)
            }),
                t.each(n.audio.eq, function(e) {
                    e.mute(!0)
                })) : (t.each(n.audio.v, function(e) {
                e.mute(!1)
            }),
                t.each(n.audio.eq, function(e) {
                    e.mute(!1)
                })),
                e(".sound i").toggle()
        }),
        e(".speed").on("click", function() {
            e(".speed--choices").is(":visible") ? e(".speed--choices").slideUp() : e(".speed--choices").slideDown()
        }),
        e(document).on("/speed/slow", function() {
            e('.speed--choice[data-speed="fast"]').addClass("disabled")
        }),
        e(".speed--choice").on("click", function(t) {
            t.stopPropagation(),
                e(".showAll.selected").removeClass("selected"),
                e(document).trigger("/playPause", ["pause"]),
                e(document).trigger("/changeSpeed", [e(this).attr("data-speed")]),
                e(document).trigger("/playPause", ["play"])
        }),
        e(document).on("/changeSpeed", function(t, o) {
            e(".speed--choice.selected").removeClass("selected"),
                e(".speed--choice[data-speed=" + o + "]").addClass("selected"),
                e(".speed--choices").slideUp()
        }),
        e(document).on("/playPause", function(t, o) {
            e(".showAll").hasClass("selected") && (a(!1),
                e(".showAll").removeClass("selected")),
                o ? "play" === o ? (e(".play .icon-pause-1").show(),
                    e(".play .icon-play-1").hide()) : "pause" === o && (e(".play .icon-pause-1").hide(),
                    e(".play .icon-play-1").show()) : e(".play i").toggle()
        }),
        e(document).on("/so2/Notification", function(t, i, n) {
            if (!(e("#e" + i.location).length > 0)) {
                var a = Math.round((e(window).width() - 120) / 180);
                e(".notification").length > a && e(".notification").first().remove();
                var s = e("<div>").addClass("notification").attr("id", "e" + i.location).appendTo(e(".notifications-panel"));
                e.getJSON(GLOBALS.sURL + "/volcanoes/events/emissions/" + i.id, function(t) {
                    var a = {
                        pt: i,
                        data: t,
                        timer: new o.Timer(function() {
                                e(document).trigger("/so2/NotificationRemove", [a])
                            }
                            ,5e3)
                    };
                    n && a.timer.pause(),
                        D.push(a),
                        d(s, a)
                })
            }
        }),
        e(document).on("/so2/NotificationRemove", function(t, o) {
            void 0 === o ? (e(".notification").remove(),
                D = []) : (e("#e" + o.pt.location).remove(),
                D.splice(D.indexOf(o), 1))
        }),
        e(document).on("/so2/NotificationPause", function() {
            t.each(D, function(e) {
                e.timer.pause()
            })
        }),
        e(document).on("/so2/NotificationResume", function() {
            t.each(D, function(e) {
                e.timer.resume()
            })
        }),
        e(document).on("/jumpTo", function() {
            e(".notification").remove()
        }),
        e(document).on("/playSo2", function(t, i, n) {
            e(document).trigger("/playPause", ["pause"]),
                e(".play, .timeline, .controls--right, .controls--so2, .controls--so2-bar--empty").toggle(),
                e(".legend--buttons .btn").addClass("disabled"),
                e(".legend--mouseover-text").html('Return to <span class="u-underline">full map</span> to view map features'),
                e(".controls--so2-volcano-name").text(n.name);
            var a = o.dateObjectToSo2DisplayDate(i.date);
            e(".controls--so2-date").text(a),
                e(".controls--so2-close-btn").one("click", function() {
                    e(".play, .timeline, .controls--right, .controls--so2, .controls--so2-bar--empty").toggle(),
                        e(".legend--buttons .btn").removeClass("disabled").addClass("selected"),
                        e(".legend--mouseover-text").html("Mouse over feature button for legend, click to show / hide:"),
                        e(document).trigger("/endSo2")
                })
        }),
        e(document).on("/so2/AnimationFrame", function(t, i, n, a) {
            var s = new Date(parseInt(i.slice(0, 4)),parseInt(i.slice(4, 6)) - 1,parseInt(i.slice(6)));
            s = o.dateObjectToSo2DisplayDate(s),
                e(".controls--so2-date").text(s);
            var l = (n + 1) / (a + 1);
            e(".controls--so2-bar--full").width(l * e(".controls--so2-bar--empty").width())
        }),
        e(".timeline").on("mousemove", function(t) {
            if (DATA && DATA.last) {
                var i = t.pageX - e(this).offset().left
                    , n = e(".timeline--current-marker").css("margin-left").slice(0, -2)
                    , a = e(".timeline--current-marker").position().left + parseInt(n)
                    , s = a + e(".timeline--current-marker").outerWidth();
                if (i < 0 || i > e(this).width() || i > a && i < s)
                    e(".timeline--probe").hide();
                else {
                    var l = o.timelinePxToDate(i);
                    e(".timeline--probe-text").text(o.getMonthName(l.getMonth(), !0) + " " + l.getFullYear()),
                        e(".timeline--probe").css("left", i).show()
                }
            }
        }).on("mouseleave", function() {
            e(".timeline--probe").hide()
        }).on("click touchstart", function(t) {
            if (t.preventDefault(),
                DATA && DATA.last) {
                if (t.pageX)
                    var i = t.pageX;
                else {
                    if (!t.originalEvent.changedTouches[0])
                        return;
                    i = t.originalEvent.changedTouches[0].pageX
                }
                var n = i - e(this).offset().left - e(".timeline--future-rail").position().left
                    , a = o.timelinePxToDate(n);
                e(document).trigger("/jumpTo", [a])
            }
        }),
        e(".timeline--current-marker").on("mousedown touchstart", function(e) {
            e.stopPropagation(),
                u()
        }),
        e(document).on("/animationTick", function(t, i) {
            var n = o.dateToTimelinePx(i)
                , a = new Date(1978,0,1);
            i.getTime() >= a.getTime() ? (e(".legend--details--so2").children().show(),
                e(".legend--details--so2-na").hide()) : (e(".legend--details--so2").children().hide(),
                e(".legend--details--so2-na").show()),
                e(".timeline--current-marker").css("left", e(".timeline--future-rail").position().left + n),
                e(".timeline--past-rail").width(n),
                e(".timeline--current-date").html(o.getMonthName(i.getMonth(), !0) + " " + i.getFullYear()).css({
                    "margin-left": n - e(".timeline--current-date").outerWidth() / 2
                })
        }),
        e(".probe").on("mouseover", function(t) {
            e(document).trigger("/mapMove")
        }),
        e(document).on("/mapMove", function() {
            e(".probe").hide(),
                C = void 0,
                e(".map").removeClass("pointer"),
                e(".probe--hidden-link").attr("href", "#"),
            T && 4 != T.readyState && T.abort()
        }),
        e(document).on("/updateProbe", function(t, i, a) {
            function s() {
                e(".probe-eq--loc").show().text(u.place),
                    e(".probe--link").show(),
                    e(".probe--hidden-link").attr("href", u.link)
            }
            function l() {
                e(".probe-vol--image").show().attr("src", u.image).on("load", d),
                    e(".probe-vol--name").show().text(u.name),
                    e(".probe-vol--type").show().text(u.type),
                    e(".probe-vol--elev").show().text(u.elevation + " m"),
                    e(".probe-vol--country").show().text(u.place),
                    e(".probe--link").show(),
                    e(".probe--hidden-link").attr("href", u.link)
            }
            function r() {
                e(".probe-so2--image").show().attr("src", u.image).on("load", d),
                    e(".probe-so2--name").show().text(u.name),
                    e(".probe-so2--type").show().text(u.type),
                    e(".probe-so2--elev").show().text(u.elevation + " m"),
                    e(".probe-so2--country").show().text(u.place),
                    e(".probe--link").show(),
                    e(".probe--hidden-link").attr("href", u.link)
            }
            function d() {
                if (u) {
                    var t = e(".probe").outerHeight() + e(".probe--tip").outerHeight() / 2
                        , o = e(".probe").outerWidth() / 2
                        , i = 20
                        , n = a.x
                        , s = -o;
                    n < o ? s = s + o - n + i : n > window.innerWidth - o && (s = s - (o - window.innerWidth + n) - i),
                        e(".probe--tip").css({
                            left: Math.abs(s)
                        });
                    var l = a.y;
                    if (l <= t + e(".topbar").outerHeight()) {
                        var r = e(".probe--tip").outerHeight();
                        e(".probe--tip").addClass("toparrow").css("margin-top", -r)
                    } else
                        r = -t,
                            e(".probe--tip").removeClass("toparrow").css("margin-top", "-10px");
                    e(".probe").show().css({
                        left: n,
                        top: l + e(".topbar").outerHeight(),
                        "margin-left": s,
                        "margin-top": r
                    }),
                        e(".probe--tip").show(),
                        e(document).trigger("/showProbe")
                } else
                    e(".probe").hide()
            }
            if (!w(a) && !y(i.point.type) && (e(".map").addClass("pointer"),
                C !== i.id)) {
                C = i.id;
                var c = e(".sound i:visible").hasClass("icon-volume-up");
                if (e(".probe, .js-probe-type, .probe--tip").hide(),
                        e(".probe--hidden-link").attr("href", "#"),
                    "eq" === i.point.type) {
                    e(".probe-eq").show();
                    var u = i;
                    c && !k() && (probeSound = n.audio.eq[parseInt(u.mag)].play()),
                        e(".probe-eq--date").text(u.date.toDateString()),
                        e(".probe-eq--mag").text(u.mag),
                        u.place ? (s(),
                            d()) : (T && 4 != T.readyState && T.abort(),
                            e(".probe--link").hide(),
                            e(".probe-eq--loc").hide(),
                            T = e.getJSON(GLOBALS.sURL + "/earthquakes/events/" + u.id, function(e) {
                                u.place = e.location,
                                    u.link = e.link,
                                    s(),
                                    d()
                            }))
                } else if ("vol" === i.point.type) {
                    e(".probe-vol").show();
                    var u = i.currentEruption ? i.currentEruption : i.eruptions[0];
                    c && !k() && (probeSound = n.audio.v[u.mag].play()),
                        e(".probe-vol--vei").show().text(u.mag),
                        u.startDate.getTime() !== u.endDate.getTime() ? (e(".probe-vol--start, .probe-vol--end").parent().show(),
                            e(".probe-vol--date").parent().hide(),
                            e(".probe-vol--start").show().text(o.dateObjectToMonthYear(u.startDate)),
                            e(".probe-vol--end").show().text(o.dateObjectToMonthYear(u.endDate))) : (e(".probe-vol--start, .probe-vol--end").parent().hide(),
                            e(".probe-vol--date").parent().show(),
                            e(".probe-vol--date").show().text(o.dateObjectToMonthYear(u.startDate))),
                        u.name ? (l(),
                            d()) : (T && 4 != T.readyState && T.abort(),
                            e(".probe-vol--image, .probe-vol--name, .probe-vol--type, .probe-vol--elev, .probe-vol--country, .probe--link").hide(),
                            T = e.getJSON(GLOBALS.sURL + "/volcanoes/events/eruptions/" + u.id, function(e) {
                                u.image = e.image,
                                    u.name = e.name,
                                    u.type = e.type,
                                    u.elevation = e.elevation,
                                    u.place = e.place,
                                    u.link = e.link,
                                    l(),
                                    d()
                            }))
                } else if ("so2" === i.point.type) {
                    var p = DATA.vLocations["v" + i.location]
                        , u = p;
                    e(".probe-so2").show(),
                        u.name ? (r(),
                            d()) : (T && 4 != T.readyState && T.abort(),
                            e(".probe-so2--image, .probe-so2--name, .probe-so2--type, .probe-so2--elev, .probe-so2--country, .probe--link").hide(),
                            T = e.getJSON(GLOBALS.sURL + "/volcanoes/events/eruptions/" + p.eruptions[0].id, function(e) {
                                u.image = e.image,
                                    u.name = e.name,
                                    u.type = e.type,
                                    u.elevation = e.elevation,
                                    u.place = e.place,
                                    u.link = e.link,
                                    r(),
                                    d()
                            }))
                }
            }
        });
    var q = !1;
    if (Cesium.FeatureDetection.supportsPointerEvents()) {
        var S = document.getElementById("map");
        S.addEventListener("pointerdown", g),
            S.addEventListener("pointerup", m)
    } else
        e(".map").on({
            mousedown: g,
            mouseup: m,
            touchstart: f,
            touchend: b
        }),
            e(".probe").on("touchstart touchend mouseup mousedown", function(e) {
                e.stopPropagation(),
                    e.preventDefault()
            }),
            e(".probe").on("touchstart", function(t) {
                t.target == e(".probe .icon-cancel")[0] ? e(".probe").hide() : v()
            });
    return A
}($, _, UTILS, DATAFUNCTIONS, GLOBALS);
!function(e, t, i, o, n) {
    function a(e, t) {
        var i = B.positionCartographic;
        i.height <= n.zooms.min && e >= 0 || i.height >= n.zooms.max && e <= 0 || (e = i.height - 15e3 * e,
            e = Math.round(Math.max(Math.min(e, n.zooms.max), n.zooms.min)),
            t ? B.flyTo({
                destination: Cesium.Cartesian3.fromRadians(i.longitude, i.latitude, e),
                duration: .5
            }) : B.setView({
                destination: Cesium.Cartesian3.fromRadians(i.longitude, i.latitude, e)
            }))
    }
    function r(t) {
        if (!isStop) {
            var i = viewer.camera.pickEllipsoid(t.endPosition, viewer.scene.globe.ellipsoid);
            if (i) {
                var o = s(i);
                if (o) {
                    W && o.id === W.id || (W && ("eq" === W.point.type ? (W.point.pixelSize = W.point.pixelSize / 2,
                        W.point.color = W.color) : "so2" === W.point.type ? W.point.color = W.color : (W.point.image = n.icons.v[W.point.imageSize],
                        W.point.color = Cesium.Color.WHITE.withAlpha(W.point.opacity))),
                        W = o,
                        "eq" === W.point.type ? (W.point.pixelSize = 2 * W.point.pixelSize,
                            W.point.color = Cesium.Color.WHITE) : "so2" === W.point.type ? W.point.color = Cesium.Color.WHITE.withAlpha(.5) : (W.point.image = n.icons.vHighlight,
                            W.point.color = Cesium.Color.WHITE.withAlpha(1)));
                    var a = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, o.point.position, new Cesium.Cartesian2);
                    e(document).trigger("/updateProbe", [W, a])
                } else
                    e(document).trigger("/mapMove"),
                    M && (M = !1,
                        p())
            } else
                e(document).trigger("/mapMove"),
                M && (M = !1,
                    p())
        }
    }
    function s(e) {
        function i(e) {
            if (e.point && !("eq" === e.point.type && e.mag < n.smallEQCutoff || "so2" !== e.point.type && .01 === e.point.opacity)) {
                if ("eq" === e.point.type)
                    var t = DATA.eqLocations[e.location];
                else
                    t = "so2" === e.point.type ? [DATA.vLocations["v" + e.location].lon, DATA.vLocations["v" + e.location].lat] : [e.lon, e.lat];
                var i = t ? Math.sqrt((t[0] - a[0]) * (t[0] - a[0]) + (t[1] - a[1]) * (t[1] - a[1])) : 999;
                e.probeDistance = i;
                var o = (i - .3) / 1.7;
                o <= r && s.push(e)
            }
        }
        var o = new Cesium.Cartographic.fromCartesian(e)
            , a = [180 * o.longitude / Math.PI, 180 * o.latitude / Math.PI]
            , r = Math.round((B.positionCartographic.height - n.zooms.min) / (n.zooms.max - n.zooms.min) * 100) / 100;
        r = Math.max(0, Math.min(1, r));
        var s = [];
        t.each(DATA.eqData, i),
            t.each(DATA.emissions, i),
            t.each(DATA.vLocations, i);
        var c;
        if (s && 0 !== s.length) {
            if (1 === s.length)
                c = s[0];
            else {
                var p = t.max(s, function(e) {
                    return e.probeDistance
                }).probeDistance
                    , m = t.chain(s).sortBy(function(e) {
                    var t = 1 - e.probeDistance / p
                        , i = e.point.opacity;
                    if ("eq" === e.point.type)
                        var o = e.point.pixelSize / DATA.legend.maxEQPixelSizePossible;
                    else
                        o = "vol" === e.point.type ? e.point.imageSize / 25 : e.point.pixelSize / DATA.legend.maxEmPixelSizePossible;
                    o = Math.max(0, Math.min(1, o));
                    var n = "eq" === e.point.type ? .5 : "so2" === e.point.type ? .8 : 1
                        , a = 1 - r
                        , s = new function() {
                            this.d = .6 * a,
                                this.o = .5 * (1 - this.d),
                                this.t = .8 * (1 - this.o - this.d),
                                this.s = .2 * (1 - this.o - this.d)
                        }
                    ;
                    return t * s.d + i * s.o + n * s.t + o * s.s
                }).reverse().value();
                c = m[0]
            }
            if (c)
                return "eq" === c.point.type ? t.find(DATA.eqData, function(e) {
                    return e.id === c.id
                }) : "vol" === c.point.type ? DATA.vLocations[c.id] : "so2" === c.point.type ? t.find(DATA.emissions, function(e) {
                    return e.id === c.id
                }) : void 0
        }
    }
    function c() {
        t.each(DATA.eqData, function(e) {
            f(e)
        }),
            t.each(DATA.vLocations, g),
            t.each(DATA.emissions, v)
    }
    function p() {
        var t = new Date(n.time.startDate.getTime());
        t.setMonth(n.time.startDate.getMonth() + n.time.frame),
        t.getTime() >= DATA.last.getTime() && (t = new Date(n.time.startDate.getTime()),
            n.time.frame = 0),
            S = !0,
            n.time.interval = setInterval(u, n.time.speed.setting),
            e(document).trigger("/so2/NotificationResume")
    }
    function m() {
        S = !1,
            clearInterval(n.time.interval),
            e(document).trigger("/so2/NotificationPause")
    }
    function l(o) {
        var a = o.getFullYear() - n.time.startDate.getFullYear()
            , r = o.getMonth() - n.time.startDate.getMonth() + 1;
        n.time.frame = 12 * a + r;
        var s = i.getPointsBetweenMonths(o, DATA.eqData[DATA.eqData.length - 1].date);
        t.each(s, function(e) {
            e.point && e.point.opacity && (e.point.opacity = n.opacities.eq.start,
                e.point.color = e.point.color.withAlpha(n.opacities.eq.start))
        });
        var c = i.getPointsBetweenMonths(n.time.startDate, o);
        t.each(c, function(e) {
            e.point && e.point.opacity != n.opacities.eq.end && (e.point.opacity = n.opacities.eq.end,
                e.point.color = e.point.color.withAlpha(n.opacities.eq.end))
        });
        var p = o.getTime();
        t.each(DATA.emissions, function(e) {
            e.point && (e.date.getTime() < p ? (e.point.opacity = .01,
                e.point.color = e.point.color.withAlpha(.01)) : (e.point.opacity = 0,
                e.point.color = e.point.color.withAlpha(0)))
        }),
            e(document).trigger("/so2/NotificationRemove"),
            u(!0)
    }
    function u(o) {
        var a;
        if (b.eq)
            for (var r = n.fades.eq; r >= 0; r--)
                if (!j || 0 == r || r == n.fades.eq) {
                    a = new Date(n.time.startDate.getTime()),
                        a.setMonth(n.time.startDate.getMonth() + n.time.frame - r);
                    var s = i.getPointsFromDataByMonth(a);
                    if (s && (s.forEach(function(e) {
                            e.point && (G && e.mag < 7 && 0 != r && r != n.fades.eq || (0 == r && e.mag >= 8 && d(e),
                                e.point.color = GLOBALS.colors.eq.withAlpha(1 - r * (1 - n.opacities.eq.end) / n.fades.eq),
                                e.color = GLOBALS.colors.eq.withAlpha(1 - r * (1 - n.opacities.eq.end) / n.fades.eq),
                                e.point.opacity = 1 - r * (1 - n.opacities.eq.end) / n.fades.eq))
                        }),
                        0 == r)) {
                        var c = t.sortBy(s, function(e) {
                            return e.mag
                        }).reverse()
                            , p = c[0];
                        if (p && p.mag >= 7) {
                            n.audio.eq[parseInt(p.mag)].volume(Math.sqrt(p.mag / 10)).play()
                        }
                    }
                }
        if (b.so2)
            for (r = n.fades.em; r >= 0; r--) {
                a = new Date(n.time.startDate.getTime()),
                    a.setMonth(n.time.startDate.getMonth() + n.time.frame - r);
                var s = i.getPointsFromDataByMonth(a, DATA.emissions);
                s && s.forEach(function(t) {
                    t.point && (t.point.color = GLOBALS.colors.em.withAlpha(1 - r * (1 - n.opacities.em.end) / n.fades.em),
                        t.color = GLOBALS.colors.em.withAlpha(1 - r * (1 - n.opacities.em.end) / n.fades.em),
                        t.point.opacity = 1 - r * (1 - n.opacities.em.end) / n.fades.em,
                    t.animation && e(document).trigger("/so2/Notification", [t, !S]))
                })
            }
        if (b.vol) {
            a = new Date(n.time.startDate.getTime()),
                a.setMonth(n.time.startDate.getMonth() + n.time.frame);
            var m = i.getEruptionStatusByMonth(a)
                , s = m[0];
            if (s.length) {
                s.forEach(function(e) {
                    e.point && 1 != e.point.opacity && (e.point.imageSize = Math.max(e.currentEruption.size, e.point.imageSize),
                    e.point.image != n.icons.v[e.point.imageSize] && (e.point.image = n.icons.v[e.point.imageSize]),
                    e.currentEruption.roundedStartDate.getFullYear() == a.getFullYear() && e.currentEruption.roundedStartDate.getMonth() == a.getMonth() && e.currentEruption.mag >= 4 && h(e),
                        e.point.color = Cesium.Color.WHITE.withAlpha(1),
                        e.color = Cesium.Color.WHITE.withAlpha(1),
                        e.point.opacity = 1)
                });
                var c = t.sortBy(s, function(e) {
                    return e.currentEruption.mag
                }).reverse()
                    , p = t.find(c, function(e) {
                    var t = new Date(e.currentEruption.startDate.valueOf());
                    return t.getDate() > 1 && t.setMonth(t.getMonth() + 1),
                    t >= a
                });
                if (p && p.currentEruption.mag >= 0) {
                    n.audio.v[p.currentEruption.mag].volume(Math.sqrt(p.currentEruption.mag / 10)).play()
                }
            }
            for (s = m[1],
                 s.length && s.forEach(function(e) {
                     e.point && (e.first < a && e.point.opacity != n.opacities.v.end ? (e.point.color = Cesium.Color.WHITE.withAlpha(n.opacities.v.end),
                         e.color = Cesium.Color.WHITE.withAlpha(n.opacities.v.end),
                         e.point.opacity = n.opacities.v.end) : e.first > a && e.point.opacity != n.opacities.v.start && (e.point.opacity = n.opacities.v.start,
                         e.point.color = Cesium.Color.WHITE.withAlpha(n.opacities.v.start),
                         e.color = Cesium.Color.WHITE.withAlpha(n.opacities.v.start)))
                 }),
                     r = n.fades.v; r > 0; r--) {
                a = new Date(n.time.startDate.getTime()),
                    a.setMonth(n.time.startDate.getMonth() + n.time.frame - r);
                var s = i.getEruptionsByEndMonth(a);
                s && s.forEach(function(e) {
                    e.point && (e.point.color = Cesium.Color.WHITE.withAlpha(1 - r * (1 - n.opacities.v.end) / n.fades.v),
                        e.point.opacity = 1 - r * (1 - n.opacities.v.end) / n.fades.v)
                })
            }
        }
        a = new Date(n.time.startDate.getTime()),
            a.setMonth(n.time.startDate.getMonth() + n.time.frame),
            e(document).trigger("/animationTick", [a]),
        o || n.time.frame++,
        a.getTime() >= DATA.last.getTime() && (G = !1,
            j = !1,
            l(DATA.first))
    }
    function d(e) {
        var t = 0
            , i = setInterval(function() {
            e.point.pixelSize = e.size + n.fades.eq - t,
                t++,
            t == n.fades.eq && clearInterval(i)
        }, n.time.speed.setting)
    }
    function h(e) {
        var t = 1;
        e.point.scale = 2;
        var i = setInterval(function() {
            e.point.scale = 2 - t / n.fades.v,
                t++,
            t > n.fades.v && clearInterval(i)
        }, n.time.speed.setting)
    }
    function f(e, t) {
        if (t || !(e.mag < n.smallEQCutoff)) {
            var i = DATA.eqLocations[e.location];
            i && (t ? x.add({
                position: Cesium.Cartesian3.fromDegrees(i[0], i[1]),
                color: GLOBALS.colors.eq.withAlpha(n.opacities.eq.start),
                pixelSize: e.size,
                id: e.id
            }) : (e.point = pointsPrimitiveCollection.add({
                position: Cesium.Cartesian3.fromDegrees(i[0], i[1]),
                color: GLOBALS.colors.eq.withAlpha(n.opacities.eq.start),
                pixelSize: e.size,
                id: e.id
            }),
                e.point.opacity = n.opacities.eq.start,
                e.point.type = "eq",
                e.point.mag = e.mag,
                e.color = GLOBALS.colors.eq.withAlpha(n.opacities.eq.start)))
        }
    }
    function g(e) {
        e.point = billboardCollection.add({
            imageId: "volcano point",
            image: n.icons.v[0],
            position: Cesium.Cartesian3.fromDegrees(e.lon, e.lat),
            color: Cesium.Color.WHITE.withAlpha(n.opacities.v.start),
            id: e.id
        }),
            e.point.type = "vol",
            e.point.imageSize = 0
    }
    function v(e) {
        var t = DATA.vLocations["v" + e.location];
        t && (e.point = R.add({
            position: Cesium.Cartesian3.fromDegrees(t.lon, t.lat),
            color: n.colors.em.withAlpha(n.opacities.em.start),
            pixelSize: e.size,
            id: e.id
        }),
            e.point.opacity = n.opacities.em.start,
            e.point.type = "so2",
            e.color = n.colors.em.withAlpha(n.opacities.em.start))
    }
    function A() {
        x = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection),
            t.each(DATA.eqData, function(e) {
                e.mag < n.smallEQCutoff && f(e, !0)
            })
    }
    function C() {
        viewer.scene.primitives.remove(x)
    }
    function w(e) {
        if ("number" == typeof e)
            var i = e
                , o = e
                , n = e;
        else
            i = e[0],
                o = e[1],
                n = e[2];
        pointsPrimitiveCollection._pointPrimitives.forEach(function(e) {
            e.opacity = i,
                e.color = e.color.withAlpha(i)
        }),
        x && x._pointPrimitives.forEach(function(e) {
            e.opacity = i,
                e.color = e.color.withAlpha(i)
        }),
            billboardCollection._billboards.forEach(function(e) {
                e.opacity = o,
                    e.color = e.color.withAlpha(o)
            }),
            R._pointPrimitives.forEach(function(e) {
                e.opacity = 0,
                    e.color = e.color.withAlpha(0)
            }),
            t.chain(DATA.emissions).unique(function(e) {
                return e.location
            }).each(function(e) {
                e.point.opacity = n,
                    e.point.color = e.point.color.withAlpha(n)
            }),
            O._pointPrimitives.forEach(function(e) {
                e.opacity = i,
                    e.color = e.color.withAlpha(i)
            })
    }
    function D(e) {
        b.eq = e,
            b.vol = e,
            b.so2 = e,
            pointsPrimitiveCollection._pointPrimitives.forEach(function(t) {
                t.show = e
            }),
            billboardCollection._billboards.forEach(function(t) {
                t.show = e
            }),
            R._pointPrimitives.forEach(function(t) {
                t.show = e
            }),
            O._pointPrimitives.forEach(function(t) {
                t.show = e
            })
    }
    function y(e) {
        var i = t.find(billboardCollection._billboards, function(t) {
            return t.id === e
        });
        i.show = !0,
            i.color = i.color.withAlpha(1)
    }
    function T(e) {
        var t = DATA.vLocations["v" + e.location];
        B.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(t.lon, t.lat, 42e6),
            duration: .5
        })
    }
    function E(t, i) {
        function o(i) {
            F.removeAll();
            var s = [];
            i.forEach(function(e) {
                var t = .2 + .8 * Math.min(Math.sqrt(e[0] / n.opacities.so2Field.high), 1)
                    , i = .5;
                s.push(new Cesium.GeometryInstance({
                    geometry: new Cesium.RectangleGeometry({
                        rectangle: Cesium.Rectangle.fromDegrees(e[1] - i, e[2] - i, e[1] + i, e[2] + i)
                    }),
                    attributes: {
                        color: Cesium.ColorGeometryInstanceAttribute.fromColor(GLOBALS.colors.em.withAlpha(t))
                    }
                }))
            }),
                F.add(new Cesium.Primitive({
                    geometryInstances: s,
                    appearance: new Cesium.PerInstanceColorAppearance({
                        flat: !0
                    })
                })),
                e(document).trigger("/so2/AnimationFrame", [a[r], r, a.length - 1]),
                r++,
            r == a.length && (r = 0),
                H = setTimeout(function() {
                    o(t[a[r]])
                }, 500)
        }
        isStop = !0,
            y("v" + i.location),
            T(i);
        var a = Object.keys(t)
            , r = 0;
        o(t[a[r]])
    }
    function q() {
        isStop = !1,
            clearTimeout(H),
            F.removeAll();
        var e = new Date(n.time.startDate.getTime());
        e.setMonth(n.time.startDate.getMonth() + n.time.frame),
            D(!0),
            l(e)
    }
    var S = !1
        , M = !1
        , L = !1
        , isStop = !1
        , b = {
        eq: !0,
        vol: !0,
        so2: !0
    }
        , imageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: "https://api.mapbox.com/styles/v1/smithsonianmag/ciqe26esp0002c9npjwau0oza/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21pdGhzb25pYW5tYWciLCJhIjoiY2lwZmp6bXAyMDA1anN4bmRqbWFlZzRvZCJ9.80Dk5-6TTVloz7tOUpjreQ"
    })
        , viewer = new Cesium.Viewer("map",{
        animation: !1,
        baseLayerPicker: !1,
        geocoder: !1,
        homeButton: !1,
        infoBox: !1,
        imageryProvider: imageryProvider,
        mapProjection: new Cesium.WebMercatorProjection,
        navigationHelpButton: !1,
        sceneModePicker: !1,
        timeline: !1,
        sceneMode: Cesium.SceneMode.SCENE2D,
        creditContainer: "credits",
        contextOptions: {
            webgl: {
                alpha: !0
            }
        }
    });
    viewer.scene.skyBox.destroy(),
        viewer.scene.skyBox = void 0,
        viewer.scene.sun.destroy(),
        viewer.scene.sun = void 0,
        viewer.scene.backgroundColor = Cesium.Color.BLACK.clone();
    var B = viewer.camera;
    B.setView({
        destination: Cesium.Cartesian3.fromDegrees(179, 20, n.zooms.max)
    });
    var x, W, H, pointsPrimitiveCollection = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection), billboardCollection = viewer.scene.primitives.add(new Cesium.BillboardCollection), R = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection), O = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection), F = viewer.scene.primitives.add(new Cesium.PrimitiveCollection), G = !1, j = !1, N = new Cesium.FrameRateMonitor({
        scene: viewer.scene,
        minimumFrameRateAfterWarmup: 15
    });
    N.lowFrameRate.addEventListener(function(t, i) {
        G = !0,
            e(document).trigger("/speed/slow"),
        "fast" === n.time.speed.setting && e(document).trigger("/changeSpeed", ["normal"])
    });
    var V = new Cesium.FrameRateMonitor({
        scene: viewer.scene,
        minimumFrameRateAfterWarmup: 10
    });
    V.lowFrameRate.addEventListener(function(t, i) {
        j = !0,
            e(document).trigger("/speed/slow"),
        "fast" === n.time.speed.setting && e(document).trigger("/changeSpeed", ["normal"])
    }),
        pointsPrimitiveCollection._rs = Cesium.RenderState.fromCache({
            depthTest: {
                enabled: !0
            },
            depthMask: !1,
            blending: Cesium.BlendingState.ALPHA_BLEND
        }),
        billboardCollection._rs = Cesium.RenderState.fromCache({
            depthTest: {
                enabled: !0
            },
            depthMask: !1,
            blending: Cesium.BlendingState.ALPHA_BLEND
        }),
        R._rs = Cesium.RenderState.fromCache({
            depthTest: {
                enabled: !0
            },
            depthMask: !1,
            blending: Cesium.BlendingState.ALPHA_BLEND
        }),
        O._rs = Cesium.RenderState.fromCache({
            depthTest: {
                enabled: !0
            },
            depthMask: !1,
            blending: Cesium.BlendingState.ALPHA_BLEND
        }),
        e(document).on("/toggleView", function(e, t) {
            "2d" === t ? viewer.scene.morphTo2D() : "3d" === t && viewer.scene.morphTo3D()
        }),
        e(document).on("/toggleLayer", function(e, i) {
            "eq" == i && (b.eq = !b.eq,
                DATA.eqData.forEach(function(e) {
                    e.point && (e.point.show = !e.point.show)
                }),
            x && x._pointPrimitives.forEach(function(e) {
                e.show = !e.show
            })),
            "vol" == i && (b.vol = !b.vol,
                t.each(DATA.vLocations, function(e) {
                    e.point && (e.point.show = !e.point.show)
                })),
            "so2" == i && (b.so2 = !b.so2,
                DATA.emissions.forEach(function(e) {
                    e.point && (e.point.show = !e.point.show)
                }))
        }),
        e(document).on("/disableProbe", function(e, t) {
            isStop = !!t
        }),
        e(document).on("/zoom", function(e, t) {
            a(4 * t, !0)
        }),
        viewer.scene.screenSpaceCameraController.enableZoom = !1;
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
    handler.setInputAction(function(e) {
        a(e)
    }, Cesium.ScreenSpaceEventType.WHEEL),
        handler.setInputAction(function(e) {
            var t = e.distance.endPosition.y - e.distance.startPosition.y;
            t *= 20,
                a(t)
        }, Cesium.ScreenSpaceEventType.PINCH_MOVE),
        handler.setInputAction(function(e) {
            r(e)
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE),
        e(document).on("/probeByLocation", function(e, t) {
            r(t)
        }),
        e(document).on("/so2/Highlight", function(e, t, i) {
            i ? (t.point.pixelSize = 1.5 * t.size,
                t.point.color = Cesium.Color.WHITE,
            S && (L = !0,
                m())) : (t.point.pixelSize = t.size,
                t.point.color = n.colors.em,
            L && (L = !1,
                p()))
        }),
        viewer.scene.camera.moveStart.addEventListener(function() {
            e(document).trigger("/mapMove")
        }),
        e(document).on("/mapMove", function() {
            W && ("eq" === W.point.type ? (W.point.pixelSize = W.size,
                W.point.color = W.color) : "so2" === W.point.type ? W.point.color = W.color : (W.point.image = n.icons.v[W.point.imageSize],
                W.point.color = Cesium.Color.WHITE.withAlpha(W.point.opacity)),
                W = null)
        }),
        e(document).on("/dataLoaded", function() {
            c()
        }),
        e(document).on("/jumpTo", function(e, t) {
            l(t)
        }),
        e(document).on("/playPause", function(e, t) {
            "play" === t ? p() : m()
        }),
        e(document).on("/changeSpeed", function(e, t) {
            n.time.speed.setting = n.time.speed[t]
        }),
        e(document).on("/showAll", function(e, t) {
            if (m(),
                    t)
                isStop = !0,
                b.eq && A(),
                    w([.4, .8, .2]);
            else {
                isStop = !1,
                b.eq && C();
                var i = new Date(n.time.startDate.getTime());
                i.setMonth(n.time.startDate.getMonth() + n.time.frame),
                    l(i)
            }
        }),
        e(document).on("/showProbe", function(e, t) {
            S && (M = !0,
                m())
        }),
        e(document).on("/playSo2", function(t, i) {
            m(),
                d3.queue().defer(d3.json, n.sURL + "/volcanoes/events/so2/" + i.animation).defer(d3.request, "lib/Cesium/Workers/createGeometry.js").defer(d3.request, "lib/Cesium/Workers/createRectangleGeometry.js").defer(d3.request, "lib/Cesium/Workers/cesiumWorkerBootstrapper.js").defer(d3.request, "lib/Cesium/Workers/combineGeometry.js").await(function(t, o) {
                    t || (e(document).trigger("/mapMove"),
                        D(!1),
                        E(o, i))
                })
        }),
        e(document).on("/endSo2", function() {
            q()
        })
}($, _, UTILS, DATAFUNCTIONS, GLOBALS);
!function(t, a, o, n) {
    o.getData();
    var r;
    try {
        r = window.parent.location.href
    } catch (c) {
        r = window.location.href
    }
    t(".download--cite").html(r).attr("href", r)
}($, _, DATAFUNCTIONS, UTILS);
