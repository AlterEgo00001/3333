var tns = function() {
    function e() {
        for (var e, t, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (e = arguments[a]))
                for (t in e) n = e[t], i !== n && void 0 !== n && (i[t] = n);
        return i
    }

    function t(e) {
        return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e
    }

    function n(e, t, n) {
        return n && localStorage.setItem(e, t), t
    }

    function i() {
        var e = window.tnsId;
        return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId
    }

    function a() {
        var e = document,
            t = e.body;
        return t || (t = e.createElement("body"), t.fake = !0), t
    }

    function r(e) {
        var t = "";
        return e.fake && (t = P.style.overflow, e.style.background = "", e.style.overflow = P.style.overflow = "hidden", P.appendChild(e)), t
    }

    function o(e, t) {
        e.fake && (e.remove(), P.style.overflow = t, P.offsetHeight)
    }

    function s(e) {
        var t = document.createElement("style");
        return e && t.setAttribute("media", e), document.querySelector("head").appendChild(t), t.sheet ? t.sheet : t.styleSheet
    }

    function l(e, t, n, i) {
        "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : e.addRule(t, n, i)
    }

    function c(e) {
        return ("insertRule" in e ? e.cssRules : e.rules).length
    }

    function u(e, t) {
        return Math.atan2(e, t) * (180 / Math.PI)
    }

    function d(e, t) {
        var n = !1,
            i = Math.abs(90 - Math.abs(e));
        return i >= 90 - t ? n = "horizontal" : i <= t && (n = "vertical"), n
    }

    function f(e, t) {
        return e.className.indexOf(t) >= 0
    }

    function v(e, t) {
        f(e, t) || (e.className += " " + t)
    }

    function h(e, t) {
        f(e, t) && (e.className = e.className.replace(t, ""))
    }

    function p(e, t) {
        return e.hasAttribute(t)
    }

    function m(e, t) {
        return e.getAttribute(t)
    }

    function y(e) {
        return void 0 !== e.item
    }

    function g(e, t) {
        if (e = y(e) || e instanceof Array ? e : [e], "[object Object]" === Object.prototype.toString.call(t))
            for (var n = e.length; n--;)
                for (var i in t) e[n].setAttribute(i, t[i])
    }

    function b(e, t) {
        e = y(e) || e instanceof Array ? e : [e], t = t instanceof Array ? t : [t];
        for (var n = t.length, i = e.length; i--;)
            for (var a = n; a--;) e[i].removeAttribute(t[a])
    }

    function x(e) {
        p(e, "hidden") || g(e, {
            hidden: ""
        })
    }

    function T(e) {
        p(e, "hidden") && b(e, "hidden")
    }

    function E(e) {
        return e.offsetWidth > 0 && e.offsetHeight > 0
    }

    function C(e) {
        return "boolean" == typeof e.complete ? e.complete : "number" == typeof e.naturalWidth ? 0 !== e.naturalWidth : void 0
    }

    function w(e) {
        for (var t = document.createElement("fakeelement"), n = (e.length, 0); n < e.length; n++) {
            var i = e[n];
            if (void 0 !== t.style[i]) return i
        }
        return !1
    }

    function N(e, t) {
        var n = !1;
        return /^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"), n
    }

    function D(e, t) {
        for (var n in t) {
            var i = ("touchstart" === n || "touchmove" === n) && I;
            e.addEventListener(n, t[n], i)
        }
    }

    function O(e, t) {
        for (var n in t) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && I;
            e.removeEventListener(n, t[n], i)
        }
    }

    function k() {
        return {
            topics: {},
            on: function(e, t) {
                this.topics[e] = this.topics[e] || [], this.topics[e].push(t)
            },
            off: function(e, t) {
                if (this.topics[e])
                    for (var n = 0; n < this.topics[e].length; n++)
                        if (this.topics[e][n] === t) {
                            this.topics[e].splice(n, 1);
                            break
                        }
            },
            emit: function(e, t) {
                this.topics[e] && this.topics[e].forEach(function(e) {
                    e(t)
                })
            }
        }
    }

    function A(e, t, n, i, a, r, o) {
        function s() {
            r -= l, u += d, e.style[t] = n + u + c + i, r > 0 ? setTimeout(s, l) : o()
        }
        var l = Math.min(r, 10),
            c = a.indexOf("%") >= 0 ? "%" : "px",
            a = a.replace(c, ""),
            u = Number(e.style[t].replace(n, "").replace(i, "").replace(c, "")),
            d = (a - u) / r * l;
        setTimeout(s, l)
    }
    Object.keys || (Object.keys = function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }),
        function() {
            "use strict";
            "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            })
        }();
    var P = document.documentElement,
        W = !1;
    try {
        var M = Object.defineProperty({}, "passive", {
            get: function() {
                W = !0
            }
        });
        window.addEventListener("test", null, M)
    } catch (e) {}
    var I = !!W && {
            passive: !0
        },
        S = navigator.userAgent,
        H = !0,
        L = {};
    try {
        L = localStorage, L.tnsApp ? L.tnsApp !== S && (L.tnsApp = S, ["tC", "tSP", "tMQ", "tTf", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
            L.removeItem(e)
        })) : L.tnsApp = S
    } catch (e) {
        H = !1
    }
    var z = document,
        B = window,
        R = {
            ENTER: 13,
            SPACE: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        },
        j = t(L.tC) || n("tC", function() {
            var e = document,
                t = a(),
                n = r(t),
                i = e.createElement("div"),
                s = !1;
            t.appendChild(i);
            try {
                for (var l, c = ["calc(10px)", "-moz-calc(10px)", "-webkit-calc(10px)"], u = 0; u < 3; u++)
                    if (l = c[u], i.style.width = l, 10 === i.offsetWidth) {
                        s = l.replace("(10px)", "");
                        break
                    }
            } catch (e) {}
            return t.fake ? o(t, n) : i.remove(), s
        }(), H),
        q = t(L.tSP) || n("tSP", function() {
            var e, t, n = document,
                i = a(),
                s = r(i),
                l = n.createElement("div"),
                c = n.createElement("div");
            return l.style.cssText = "width: 10px", c.style.cssText = "float: left; width: 5.5px; height: 10px;", e = c.cloneNode(!0), l.appendChild(c), l.appendChild(e), i.appendChild(l), t = c.offsetTop !== e.offsetTop, i.fake ? o(i, s) : l.remove(), t
        }(), H),
        G = t(L.tMQ) || n("tMQ", function() {
            var e, t = document,
                n = a(),
                i = r(n),
                s = t.createElement("div"),
                l = t.createElement("style"),
                c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
            return l.type = "text/css", s.className = "tns-mq-test", n.appendChild(l), n.appendChild(s), l.styleSheet ? l.styleSheet.cssText = c : l.appendChild(t.createTextNode(c)), e = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, n.fake ? o(n, i) : s.remove(), "absolute" === e
        }(), H),
        F = t(L.tTf) || n("tTf", w(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"]), H),
        U = t(L.tTDu) || n("tTDu", w(["transitionDuration", "WebkitTransitionDuration", "MozTransitionDuration", "OTransitionDuration"]), H),
        X = t(L.tTDe) || n("tTDe", w(["transitionDelay", "WebkitTransitionDelay", "MozTransitionDelay", "OTransitionDelay"]), H),
        V = t(L.tADu) || n("tADu", w(["animationDuration", "WebkitAnimationDuration", "MozAnimationDuration", "OAnimationDuration"]), H),
        Y = t(L.tADe) || n("tADe", w(["animationDelay", "WebkitAnimationDelay", "MozAnimationDelay", "OAnimationDelay"]), H),
        K = t(L.tTE) || n("tTE", N(U, "Transition"), H),
        Q = t(L.tAE) || n("tAE", N(V, "Animation"), H);
    return G || (q = !1),
        function(t) {
            function n() {
                return B.innerWidth || z.documentElement.clientWidth || z.body.clientWidth
            }

            function a(e) {
                var n = t[e];
                return !n && dt && ut.indexOf(e) >= 0 && dt.forEach(function(t) {
                    ct[t][e] && (n = !0)
                }), n
            }

            function r(e, n) {
                n = n ? n : vt;
                var i, a = {
                    slideBy: "page",
                    edgePadding: !1,
                    autoHeight: !0
                };
                if (!Qe && e in a) i = a[e];
                else if ("items" === e && r("fixedWidth")) i = Math.floor(lt / (r("fixedWidth") + r("gutter")));
                else if ("autoHeight" === e && "outer" === xt) i = !0;
                else if (i = t[e], dt && ut.indexOf(e) >= 0)
                    for (var o = 0, s = dt.length; o < s; o++) {
                        var l = dt[o];
                        if (!(n >= l)) break;
                        e in ct[l] && (i = ct[l][e])
                    }
                return "slideBy" === e && "page" === i && (i = r("items")), i
            }

            function o(e) {
                return j ? j + "(" + 100 * e + "% / " + It + ")" : 100 * e / It + "%"
            }

            function y(e, t, n) {
                var i = "";
                if (e) {
                    var a = e;
                    t && (a += t), i = n ? "margin: 0px " + (lt % (n + t) + t) / 2 + "px" : tt ? "margin: 0 " + e + "px 0 " + a + "px;" : "padding: " + a + "px 0 " + e + "px 0;"
                } else if (t && !n) {
                    var r = "-" + t + "px",
                        o = tt ? r + " 0 0" : "0 " + r + " 0";
                    i = "margin: 0 " + o + ";"
                }
                return i
            }

            function w(e, t, n) {
                return e ? (e + t) * It + "px" : j ? j + "(" + 100 * It + "% / " + n + ")" : 100 * It / n + "%"
            }

            function N(e, t, n) {
                var i = "";
                if (tt) {
                    if (i = "width:", e) i += e + t + "px";
                    else {
                        var a = Qe ? It : n;
                        i += j ? j + "(100% / " + a + ")" : 100 / a + "%"
                    }
                    i += $t + ";"
                }
                return i
            }

            function P(e) {
                var t = "";
                if (e !== !1) {
                    t = (tt ? "padding-" : "margin-") + (tt ? "right" : "bottom") + ": " + e + "px;"
                }
                return t
            }

            function W(e) {
                e = e || B.event, clearTimeout(mt), mt = setTimeout(function() {
                    var t = n();
                    vt !== t && (vt = t, M(), "outer" === xt && Xt.emit("outerResized", Fe(e)))
                }, 100)
            }

            function M() {
                var e = ft,
                    t = Rt,
                    n = gt,
                    i = Zt;
                if (lt = nt.clientWidth, et = it.clientWidth, dt && I(), e !== ft || Ct) {
                    var a = wt,
                        o = kt,
                        s = Ct,
                        u = Et,
                        d = Tt,
                        f = Qt;
                    if (gt = r("items"), bt = r("slideBy"), Qt = r("disable"), Zt = !!Qt || !!Jt && st <= gt, gt !== n && (Gt = It - gt, Jn()), Qt !== f && L(Qt), Zt !== i && (Zt && (Rt = Qe ? Mt : 0), S()), e !== ft && (Nt = r("speed"), Et = r("edgePadding"), Tt = r("gutter"), Ct = r("fixedWidth"), Qt || Ct === s || de(), (kt = r("autoHeight")) !== o && (kt || (it.style.height = ""))), wt = !Zt && r("arrowKeys"), wt !== a && (wt ? D(z, an) : O(z, an)), sn) {
                        var v = yn,
                            h = gn;
                        yn = !Zt && r("controls"), gn = r("controlsText"), yn !== v && (yn ? T(bn) : x(bn)), gn !== h && (vn.innerHTML = gn[0], hn.innerHTML = gn[1])
                    }
                    if (ln) {
                        var p = Tn;
                        Tn = !Zt && r("nav"), Tn !== p && (Tn ? (T(En), Ge()) : x(En))
                    }
                    if (un) {
                        var m = Un;
                        Un = !Zt && r("touch"), Un !== m && Qe && (Un ? D(at, rn) : O(at, rn))
                    }
                    if (dn) {
                        var g = Kn;
                        Kn = !Zt && r("mouseDrag"), Kn !== g && Qe && (Kn ? D(at, on) : O(at, on))
                    }
                    if (cn) {
                        var b = In,
                            E = zn,
                            C = Rn,
                            k = Ln;
                        if (Zt ? In = zn = Rn = !1 : (In = r("autoplay"), In ? (zn = r("autoplayHoverPause"), Rn = r("autoplayResetOnVisibility")) : zn = Rn = !1), Ln = r("autoplayText"), Sn = r("autoplayTimeout"), In !== b && (In ? (Bn && T(Bn), Pn || Ce()) : (Bn && x(Bn), Pn && we())), zn !== E && (zn ? D(at, tn) : O(at, tn)), Rn !== C && (Rn ? D(z, nn) : O(z, nn)), Bn && Ln !== k) {
                            var A = In ? 1 : 0,
                                W = Bn.innerHTML,
                                M = W.length - k[A].length;
                            W.substring(M) === k[A] && (Bn.innerHTML = W.substring(0, M) + Ln[A])
                        }
                    }
                    if (!G) {
                        if (Zt || Et === u && Tt === d || (it.style.cssText = y(Et, Tt, Ct)), Qe && tt && (Ct !== s || Tt !== d || gt !== n) && (at.style.width = w(Ct, Tt, gt)), tt && (gt !== n || Tt !== d || Ct != s)) {
                            var B = N(Ct, Tt, gt) + P(Tt);
                            At.removeRule(c(At) - 1), l(At, "#" + Kt + " > .tns-item", B, c(At))
                        }
                        Ct || Rt !== t || ve(0)
                    }
                    Rt !== t && (Xt.emit("indexChanged", Fe()), ve(0), jt = Rt), gt !== n && (_(), Z(), navigator.msMaxTouchPoints && ne())
                }
                tt || Qt || (te(), je(), de()), H(!0), Z()
            }

            function I() {
                ft = 0, dt.forEach(function(e, t) {
                    vt >= e && (ft = t + 1)
                })
            }

            function S() {
                var e = "tns-transparent",
                    t = "0px" === it.style.margin;
                if (Zt) {
                    if (!t && (Et && (it.style.margin = "0px"), Mt))
                        for (var n = Mt; n--;) v(ot[n], e), v(ot[It - n - 1], e)
                } else if (t && (Et && !Ct && G && (it.style.margin = ""), Mt))
                    for (var n = Mt; n--;) h(ot[n], e), h(ot[It - n - 1], e)
            }

            function H(e) {
                Ct && Et && (Zt || lt <= Ct + Tt ? "0px" !== it.style.margin && (it.style.margin = "0px") : e && (it.style.cssText = y(Et, Tt, Ct)))
            }

            function L(e) {
                var t = ot.length;
                if (e) {
                    if (At.disabled = !0, at.className = at.className.replace(Yt.substring(1), ""), at.style = "", Ot)
                        for (var n = Mt; n--;) Qe && x(ot[n]), x(ot[t - n - 1]);
                    if (tt && Qe || (it.style = ""), !Qe)
                        for (var i = Rt; i < Rt + st; i++) {
                            var a = ot[i];
                            a.style = "", h(a, Je), h(a, _e)
                        }
                } else {
                    if (At.disabled = !1, at.className += Yt, tt || te(), de(), Ot)
                        for (var n = Mt; n--;) Qe && T(ot[n]), T(ot[t - n - 1]);
                    if (!Qe)
                        for (var i = Rt; i < Rt + st; i++) {
                            var a = ot[i],
                                r = i < Rt + gt ? Je : _e;
                            a.style.left = 100 * (i - Rt) / gt + "%", v(a, r)
                        }
                }
            }

            function J() {
                if (Pt && !Qt) {
                    var e = Rt,
                        t = Rt + gt;
                    for (Et && (e -= 1, t += 1); e < t; e++)[].forEach.call(ot[e].querySelectorAll(".tns-lazy-img"), function(e) {
                        var t = {};
                        t[K] = function(e) {
                            e.stopPropagation()
                        }, D(e, t), f(e, "loaded") || (e.src = m(e, "data-src"), v(e, "loaded"))
                    })
                }
            }

            function Z() {
                if (kt && !Qt) {
                    for (var e = [], t = Rt; t < Rt + gt; t++)[].forEach.call(ot[t].querySelectorAll("img"), function(t) {
                        e.push(t)
                    });
                    0 === e.length ? ee() : $(e)
                }
            }

            function $(e) {
                e.forEach(function(t, n) {
                    C(t) && e.splice(n, 1)
                }), 0 === e.length ? ee() : setTimeout(function() {
                    $(e)
                }, 16)
            }

            function _() {
                J(), ie(), le(), Ge(), ae()
            }

            function ee() {
                for (var e, t = [], n = Rt; n < Rt + gt; n++) t.push(ot[n].offsetHeight);
                e = Math.max.apply(null, t), it.style.height !== e && (U && ce(Nt), it.style.height = e + "px")
            }

            function te() {
                pt = [0];
                for (var e, t = ot[0].getBoundingClientRect().top, n = 1; n < It; n++) e = ot[n].getBoundingClientRect().top, pt.push(e - t)
            }

            function ne() {
                nt.style.msScrollSnapPointsX = "snapInterval(0%, " + 100 / gt + "%)"
            }

            function ie() {
                for (var e = It; e--;) {
                    var t = ot[e];
                    e >= Rt && e < Rt + gt ? p(t, "tabindex") && (g(t, {
                        "aria-hidden": "false"
                    }), b(t, ["tabindex"]), v(t, fn)) : (p(t, "tabindex") || g(t, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }), f(t, fn) && h(t, fn))
                }
            }

            function ae() {
                if (Tn && (Dn = Nn !== -1 ? Nn : Rt % st, Nn = -1, Dn !== On)) {
                    var e = xn[On],
                        t = xn[Dn];
                    g(e, {
                        tabindex: "-1",
                        "aria-selected": "false"
                    }), g(t, {
                        tabindex: "0",
                        "aria-selected": "true"
                    }), h(e, kn), v(t, kn)
                }
            }

            function re(e) {
                return "button" === e.nodeName.toLowerCase()
            }

            function oe(e) {
                return "true" === e.getAttribute("aria-disabled")
            }

            function se(e, t, n) {
                e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString())
            }

            function le() {
                if (yn && !Ot) {
                    var e = pn ? vn.disabled : oe(vn),
                        t = mn ? hn.disabled : oe(hn),
                        n = Rt === qt,
                        i = !Dt && Rt === Gt;
                    n && !e && se(pn, vn, !0), !n && e && se(pn, vn, !1), i && !t && se(mn, hn, !0), !i && t && se(mn, hn, !1)
                }
            }

            function ce(e, t) {
                e = e ? e / 1e3 + "s" : "", t = t || at, t.style[U] = e, Qe || (t.style[V] = e), tt || (it.style[U] = e)
            }

            function ue() {
                var e;
                if (tt)
                    if (Ct) e = -(Ct + Tt) * Rt + "px";
                    else {
                        var t = F ? It : gt;
                        e = 100 * -Rt / t + "%"
                    }
                else e = -pt[Rt] + "px";
                return e
            }

            function de(e) {
                e || (e = ue()), at.style[Lt] = zt + e + Bt
            }

            function fe(e, t, n, i) {
                for (var a = e, r = e + gt; a < r; a++) {
                    var o = ot[a];
                    i || (o.style.left = 100 * (a - Rt) / gt + "%"), U && ce(Nt, o), $e && X && (o.style[X] = o.style[Y] = $e * (a - e) / 1e3 + "s"), h(o, t), v(o, n), i && Wt.push(o)
                }
            }

            function ve(e, t) {
                isNaN(e) && (e = Nt), Pn && !E(at) && (e = 0), U && ce(e), Zn(e, t)
            }

            function he(e, t) {
                Ht && Jn(), (Rt !== jt || t) && (Xt.emit("indexChanged", Fe()), Xt.emit("transitionStart", Fe()), Pn && e && ["click", "keydown"].indexOf(e.type) >= 0 && we(), Ft = !0, ve())
            }

            function pe(e) {
                return e.toLowerCase().replace(/-/g, "")
            }

            function me(e) {
                if (Qe || Ft) {
                    if (Xt.emit("transitionEnd", Fe(e)), !Qe && Wt.length > 0)
                        for (var t = 0; t < gt; t++) {
                            var n = Wt[t];
                            n.style.left = "", U && ce(0, n), $e && X && (n.style[X] = n.style[Y] = ""), h(n, Ze), v(n, _e)
                        }
                    if (!e || !Qe && e.target.parentNode === at || e.target === at && pe(e.propertyName) === pe(Lt)) {
                        if (!Ht) {
                            var i = Rt;
                            Jn(), Rt !== i && (Xt.emit("indexChanged", Fe()), U && ce(0), de())
                        }
                        Z(), "inner" === xt && Xt.emit("innerLoaded", Fe()), Ft = !1, On = Dn, jt = Rt
                    }
                }
            }

            function ye(e, t) {
                if (!Zt)
                    if ("prev" === e) ge(t, -1);
                    else if ("next" === e) ge(t, 1);
                else if (!Ft) {
                    var n = Rt % st,
                        i = 0;
                    if (n < 0 && (n += st), "first" === e) i = -n;
                    else if ("last" === e) i = st - gt - n;
                    else if ("number" != typeof e && (e = parseInt(e)), !isNaN(e)) {
                        var a = e % st;
                        a < 0 && (a += st), i = a - n
                    }
                    Rt += i, Rt % st != jt % st && he(t)
                }
            }

            function ge(e, t) {
                if (!Ft) {
                    var n;
                    if (!t) {
                        e = e || B.event;
                        for (var i = e.target || e.srcElement; i !== bn && [vn, hn].indexOf(i) < 0;) i = i.parentNode;
                        var a = [vn, hn].indexOf(i);
                        a >= 0 && (n = !0, t = 0 === a ? -1 : 1)
                    }
                    if (t === -1) Rt -= bt;
                    else if (1 === t) {
                        if (Dt && Rt === Gt) return void ye(0, e);
                        Rt += bt
                    }
                    he(n || e && "keydown" === e.type ? e : null)
                }
            }

            function be(e) {
                if (!Ft) {
                    e = e || B.event;
                    for (var t, n = e.target || e.srcElement; n !== En && !p(n, "data-nav");) n = n.parentNode;
                    p(n, "data-nav") && (t = Nn = [].indexOf.call(xn, n), ye(t, e))
                }
            }

            function xe() {
                An = setInterval(function() {
                    ge(null, Hn)
                }, Sn), Pn = !0
            }

            function Te() {
                clearInterval(An), Pn = !1
            }

            function Ee(e, t) {
                g(Bn, {
                    "data-action": e
                }), Bn.innerHTML = jn[0] + e + jn[1] + t
            }

            function Ce() {
                xe(), Bn && Ee("stop", Ln[1])
            }

            function we() {
                Te(), Bn && Ee("start", Ln[0])
            }

            function Ne() {
                Pn ? we() : Ce()
            }

            function De() {
                z.hidden ? Pn && (Te(), Mn = !0) : Mn && (xe(), Mn = !1)
            }

            function Oe() {
                Pn && (Te(), Wn = !0)
            }

            function ke() {
                Wn && (xe(), Wn = !1)
            }

            function Ae(e) {
                switch (e = e || B.event, e.keyCode) {
                    case R.LEFT:
                        ge(e, -1);
                        break;
                    case R.RIGHT:
                        ge(e, 1)
                }
            }

            function Pe(e) {
                switch (e = e || B.event, e.keyCode) {
                    case R.LEFT:
                    case R.UP:
                    case R.PAGEUP:
                        vn.disabled || ge(e, -1);
                        break;
                    case R.RIGHT:
                    case R.DOWN:
                    case R.PAGEDOWN:
                        hn.disabled || ge(e, 1);
                        break;
                    case R.HOME:
                        ye(0, e);
                        break;
                    case R.END:
                        ye(st - 1, e)
                }
            }

            function We(e) {
                e.focus()
            }

            function Me(e) {
                function n(e) {
                    return t.navContainer ? e : Cn[e]
                }
                var i = z.activeElement;
                if (p(i, "data-nav")) {
                    e = e || B.event;
                    var a = e.keyCode,
                        r = [].indexOf.call(xn, i),
                        o = Cn.length,
                        s = Cn.indexOf(r);
                    switch (t.navContainer && (o = st, s = r), a) {
                        case R.LEFT:
                        case R.PAGEUP:
                            s > 0 && We(xn[n(s - 1)]);
                            break;
                        case R.UP:
                        case R.HOME:
                            s > 0 && We(xn[n(0)]);
                            break;
                        case R.RIGHT:
                        case R.PAGEDOWN:
                            s < o - 1 && We(xn[n(s + 1)]);
                            break;
                        case R.DOWN:
                        case R.END:
                            s < o - 1 && We(xn[n(o - 1)]);
                            break;
                        case R.ENTER:
                        case R.SPACE:
                            Nn = r, ye(r, e)
                    }
                }
            }

            function Ie() {
                ve(0, at.scrollLeft()), jt = Rt
            }

            function Se(e) {
                return e.target || e.srcElement
            }

            function He(e) {
                return e.type.indexOf("touch") >= 0
            }

            function Le(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function ze(e) {
                if (Yn = 0, yt = !1, Xn = Vn = null, !Ft) {
                    e = e || B.event;
                    var t;
                    He(e) ? (t = e.changedTouches[0], Xt.emit("touchStart", Fe(e))) : (t = e, Le(e), Xt.emit("dragStart", Fe(e))), Xn = parseInt(t.clientX), Vn = parseInt(t.clientY), qn = parseFloat(at.style[Lt].replace(zt, "").replace(Bt, ""))
                }
            }

            function Be(e) {
                if (!Ft && null !== Xn) {
                    e = e || B.event;
                    var n;
                    if (He(e) ? n = e.changedTouches[0] : (n = e, Le(e)), Gn = parseInt(n.clientX) - Xn, Fn = parseInt(n.clientY) - Vn, 0 === Yn && (Yn = d(u(Fn, Gn), 15) === t.axis), Yn) {
                        He(e) ? Xt.emit("touchMove", Fe(e)) : (Qn || (Qn = !0), Xt.emit("dragMove", Fe(e))), yt || (yt = !0);
                        var i = qn;
                        if (tt)
                            if (Ct) i += Gn, i += "px";
                            else {
                                var a = F ? Gn * gt * 100 / (et * It) : 100 * Gn / et;
                                i += a, i += "%"
                            }
                        else i += Fn, i += "px";
                        F && ce(0), at.style[Lt] = zt + i + Bt
                    }
                }
            }

            function Re(e) {
                if (!Ft && yt) {
                    e = e || B.event;
                    var t;
                    He(e) ? (t = e.changedTouches[0], Xt.emit("touchEnd", Fe(e))) : (t = e, Xt.emit("dragEnd", Fe(e))), Gn = parseInt(t.clientX) - Xn, Fn = parseInt(t.clientY) - Vn;
                    var n = Boolean(tt ? Gn : Fn);
                    if (Yn = 0, yt = !1, Xn = Vn = null, tt) {
                        var i = -Gn * gt / et;
                        i = Gn > 0 ? Math.floor(i) : Math.ceil(i), Rt += i
                    } else {
                        var a = -(qn + Fn);
                        if (a <= 0) Rt = qt;
                        else if (a >= pt[pt.length - 1]) Rt = Gt;
                        else {
                            var r = 0;
                            do {
                                r++, Rt = Fn < 0 ? r + 1 : r
                            } while (r < It && a >= pt[r + 1])
                        }
                    }
                    if (he(e, n), Qn) {
                        Qn = !1;
                        var o = Se(e);
                        D(o, {
                            click: function e(t) {
                                Le(t), O(o, {
                                    click: e
                                })
                            }
                        })
                    }
                }
            }

            function je() {
                it.style.height = pt[Rt + gt] - pt[Rt] + "px"
            }

            function qe() {
                Cn = [];
                for (var e = Rt % st % gt; e < st;) !Ot && e + gt > st && (e = st - gt), Cn.push(e), e += gt;
                (Ot && Cn.length * gt < st || !Ot && Cn[0] > 0) && Cn.unshift(0)
            }

            function Ge() {
                Tn && !t.navContainer && (qe(), Cn !== wn && ([].forEach.call(xn, function(e, t) {
                    Cn.indexOf(t) < 0 ? x(e) : T(e)
                }), wn = Cn))
            }

            function Fe(e) {
                return {
                    container: at,
                    slideItems: ot,
                    navContainer: En,
                    navItems: xn,
                    controlsContainer: bn,
                    hasControls: sn,
                    prevButton: vn,
                    nextButton: hn,
                    items: gt,
                    slideBy: bt,
                    cloneCount: Mt,
                    slideCount: st,
                    slideCountNew: It,
                    index: Rt,
                    indexCached: jt,
                    navCurrentIndex: Dn,
                    navCurrentIndexCached: On,
                    visibleNavIndexes: Cn,
                    visibleNavIndexesCached: wn,
                    event: e || {}
                }
            }
            t = e({
                container: z.querySelector(".slider"),
                mode: "carousel",
                axis: "horizontal",
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: !1,
                slideBy: 1,
                controls: !0,
                controlsText: ["prev", "next"],
                controlsContainer: !1,
                nav: !0,
                navContainer: !1,
                arrowKeys: !1,
                speed: 300,
                autoplay: !1,
                autoplayTimeout: 5e3,
                autoplayDirection: "forward",
                autoplayText: ["start", "stop"],
                autoplayHoverPause: !1,
                autoplayButton: !1,
                autoplayButtonOutput: !0,
                autoplayResetOnVisibility: !0,
                loop: !0,
                rewind: !1,
                autoHeight: !1,
                responsive: !1,
                lazyload: !1,
                touch: !0,
                mouseDrag: !1,
                nested: !1,
                freezable: !0,
                onInit: !1
            }, t || {}), ["container", "controlsContainer", "navContainer", "autoplayButton"].forEach(function(e) {
                "string" == typeof t[e] && (t[e] = z.querySelector(t[e]))
            });
            var Ue = B.console && "function" == typeof B.console.warn;
            if (!t.container || !t.container.nodeName) return void(Ue && console.warn("Can't find container element."));
            if (t.container.children.length < 2) return void(Ue && console.warn("Slides less than 2."));
            if (t.responsive) {
                var Xe = {},
                    Ve = t.responsive;
                for (var Ye in Ve) {
                    var Ke = Ve[Ye];
                    Xe[Ye] = "number" == typeof Ke ? {
                        items: Ke
                    } : Ke
                }
                t.responsive = Xe, Xe = null, 0 in t.responsive && (t = e(t, t.responsive[0]), delete t.responsive[0])
            }
            var Qe = "carousel" === t.mode;
            if (!Qe) {
                t.axis = "horizontal", t.rewind = !1, t.loop = !0, t.edgePadding = !1;
                var Je = "tns-fadeIn",
                    Ze = "tns-fadeOut",
                    $e = !1,
                    _e = t.animateNormal || "tns-normal";
                K && Q && (Je = t.animateIn || Je, Ze = t.animateOut || Ze, $e = t.animateDelay || $e)
            }
            var et, tt = "horizontal" === t.axis,
                nt = z.createElement("div"),
                it = z.createElement("div"),
                at = t.container,
                rt = at.parentNode,
                ot = at.children,
                st = ot.length,
                lt = rt.clientWidth,
                ct = t.responsive,
                ut = [],
                dt = !1,
                ft = 0,
                vt = n();
            if (ct) {
                dt = Object.keys(ct).map(function(e) {
                    return parseInt(e)
                }).sort(function(e, t) {
                    return e - t
                }), dt.forEach(function(e) {
                    ut = ut.concat(Object.keys(ct[e]))
                });
                var ht = [];
                ut.forEach(function(e) {
                    ht.indexOf(e) < 0 && ht.push(e)
                }), ut = ht, I()
            }
            var pt, mt, yt, gt = r("items"),
                bt = "page" === r("slideBy") ? gt : r("slideBy"),
                xt = t.nested,
                Tt = r("gutter"),
                Et = r("edgePadding"),
                Ct = r("fixedWidth"),
                wt = r("arrowKeys"),
                Nt = r("speed"),
                Dt = t.rewind,
                Ot = !Dt && t.loop,
                kt = r("autoHeight"),
                At = s(),
                Pt = t.lazyload,
                Wt = [],
                Mt = Ot ? 2 * st : 0,
                It = Qe ? st + 2 * Mt : st + Mt,
                St = !(!Ct || Ot || Et),
                Ht = !Qe || !Ot,
                Lt = tt ? "left" : "top",
                zt = "",
                Bt = "",
                Rt = Qe ? Mt : 0,
                jt = Rt,
                qt = 0,
                Gt = It - gt,
                Ft = !1,
                Ut = t.onInit,
                Xt = new k,
                Vt = at.id,
                Yt = " tns-slider tns-" + t.mode,
                Kt = at.id || i(),
                Qt = r("disable"),
                Jt = t.freezable,
                Zt = !!Qt || !!Jt && st <= gt,
                $t = "inner" === xt ? " !important" : "",
                _t = {
                    click: ge,
                    keydown: Pe
                },
                en = {
                    click: be,
                    keydown: Me
                },
                tn = {
                    mouseover: Oe,
                    mouseout: ke
                },
                nn = {
                    visibilitychange: De
                },
                an = {
                    keydown: Ae
                },
                rn = {
                    touchstart: ze,
                    touchmove: Be,
                    touchend: Re,
                    touchcancel: Re
                },
                on = {
                    mousedown: ze,
                    mousemove: Be,
                    mouseup: Re,
                    mouseleave: Re
                },
                sn = a("controls"),
                ln = a("nav"),
                cn = a("autoplay"),
                un = a("touch"),
                dn = a("mouseDrag"),
                fn = "tns-slide-active";
            if (sn) var vn, hn, pn, mn, yn = r("controls"),
                gn = r("controlsText"),
                bn = t.controlsContainer;
            if (ln) var xn, Tn = r("nav"),
                En = t.navContainer,
                Cn = [],
                wn = Cn,
                Nn = -1,
                Dn = 0,
                On = 0,
                kn = "tns-nav-active";
            if (cn) var An, Pn, Wn, Mn, In = r("autoplay"),
                Sn = r("autoplayTimeout"),
                Hn = "forward" === t.autoplayDirection ? 1 : -1,
                Ln = r("autoplayText"),
                zn = r("autoplayHoverPause"),
                Bn = t.autoplayButton,
                Rn = r("autoplayResetOnVisibility"),
                jn = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (un) var qn, Gn, Fn, Un = r("touch"),
                Xn = null,
                Vn = null,
                Yn = 0;
            if (dn) var Kn = r("mouseDrag"),
                Qn = !1;
            Zt && (yn = Tn = Un = Kn = wt = In = zn = Rn = !1), F && (Lt = F, zt = "translate", zt += tt ? "X(" : "Y(", Bt = ")"),
                function() {
                    nt.appendChild(it), rt.insertBefore(nt, at), it.appendChild(at), et = it.clientWidth;
                    var e = "tns-outer",
                        n = "tns-inner",
                        i = a("gutter");
                    if (Qe ? tt && (a("edgePadding") || i && !t.fixedWidth) ? e += " tns-ovh" : n += " tns-ovh" : i && (e += " tns-ovh"), nt.className = e, it.className = n, it.id = Kt + "-iw", kt && (it.className += " tns-ah", it.style[U] = Nt / 1e3 + "s"), "" === at.id && (at.id = Kt), Yt += q ? " tns-subpixel" : " tns-no-subpixel", Yt += j ? " tns-calc" : " tns-no-calc", Qe && (Yt += " tns-" + t.axis), at.className += Yt, Qe && K) {
                        var s = {};
                        s[K] = me, D(at, s)
                    }
                    e = n = null;
                    for (var u = 0; u < st; u++) {
                        var d = ot[u];
                        d.id || (d.id = Kt + "-item" + u), v(d, "tns-item"), !Qe && _e && v(d, _e), g(d, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        })
                    }
                    if (Ot || Et) {
                        for (var f = z.createDocumentFragment(), p = z.createDocumentFragment(), m = Mt; m--;) {
                            var T = m % st,
                                E = ot[T].cloneNode(!0);
                            if (b(E, "id"), p.insertBefore(E, p.firstChild), Qe) {
                                var C = ot[st - 1 - T].cloneNode(!0);
                                b(C, "id"), f.appendChild(C)
                            }
                        }
                        at.insertBefore(f, at.firstChild), at.appendChild(p), ot = at.children
                    }
                    for (var O = Rt; O < Rt + Math.min(st, gt); O++) {
                        var d = ot[O];
                        g(d, {
                            "aria-hidden": "false"
                        }), b(d, ["tabindex"]), v(d, fn), Qe || (d.style.left = 100 * (O - Rt) / gt + "%", v(d, Je), h(d, _e))
                    }
                    if (Qe && tt && (q ? (l(At, "#" + Kt + " > .tns-item", "font-size:" + B.getComputedStyle(ot[0]).fontSize + ";", c(At)), l(At, "#" + Kt, "font-size:0;", c(At))) : [].forEach.call(ot, function(e, t) {
                            e.style.marginLeft = o(t)
                        })), G) {
                        var k = y(t.edgePadding, t.gutter, t.fixedWidth);
                        l(At, "#" + Kt + "-iw", k, c(At)), Qe && tt && (k = "width:" + w(t.fixedWidth, t.gutter, t.items), l(At, "#" + Kt, k, c(At))), (tt || t.gutter) && (k = N(t.fixedWidth, t.gutter, t.items) + P(t.gutter), l(At, "#" + Kt + " > .tns-item", k, c(At)))
                    } else if (it.style.cssText = y(Et, Tt, Ct), Qe && tt && (at.style.width = w(Ct, Tt, gt)), tt || Tt) {
                        var k = N(Ct, Tt, gt) + P(Tt);
                        l(At, "#" + Kt + " > .tns-item", k, c(At))
                    }
                    if (tt || Qt || (te(), je()), ct && G && dt.forEach(function(e) {
                            var t = ct[e],
                                n = "",
                                i = "",
                                o = "",
                                s = "",
                                l = r("items", e),
                                c = r("fixedWidth", e),
                                u = r("edgePadding", e),
                                d = r("gutter", e);
                            ("edgePadding" in t || "gutter" in t) && (i = "#" + Kt + "-iw{" + y(u, d, c) + "}"), Qe && tt && ("fixedWidth" in t || "gutter" in t || "items" in t) && (o = "#" + Kt + "{width:" + w(c, d, l) + "}"), ("fixedWidth" in t || a("fixedWidth") && "gutter" in t || !Qe && "items" in t) && (s += N(c, d, l)), "gutter" in t && (s += P(d)), s.length > 0 && (s = "#" + Kt + " > .tns-item{" + s + "}"), n = i + o + s, n.length > 0 && At.insertRule("@media (min-width: " + e / 16 + "em) {" + n + "}", At.cssRules.length)
                        }), Qe && !Qt && de(), navigator.msMaxTouchPoints && (v(nt, "ms-touch"), D(nt, {
                            scroll: Ie
                        }), ne()), ln) {
                        var A = Qe ? Mt : 0;
                        if (En) g(En, {
                            "aria-label": "Carousel Pagination"
                        }), xn = En.children, [].forEach.call(xn, function(e, t) {
                            g(e, {
                                "data-nav": t,
                                tabindex: "-1",
                                "aria-selected": "false",
                                "aria-controls": ot[A + t].id
                            })
                        });
                        else {
                            for (var I = "", O = 0; O < st; O++) I += '<button data-nav="' + O + '" tabindex="-1" aria-selected="false" aria-controls="' + ot[A + O].id + '" hidden type="button"></button>';
                            I = '<div class="tns-nav" aria-label="Carousel Pagination">' + I + "</div>", nt.insertAdjacentHTML("afterbegin", I), En = nt.querySelector(".tns-nav"), xn = En.children, Ge()
                        }
                        if (U) {
                            var R = U.substring(0, U.length - 18).toLowerCase(),
                                k = "transition: all " + Nt / 1e3 + "s";
                            R && (k = "-" + R + "-" + k), l(At, "[aria-controls^=" + Kt + "-item]", k, c(At))
                        }
                        g(xn[0], {
                            tabindex: "0",
                            "aria-selected": "true"
                        }), v(xn[0], kn), D(En, en), Tn || x(En)
                    }
                    if (cn) {
                        var F = In ? "stop" : "start";
                        Bn ? g(Bn, {
                            "data-action": F
                        }) : t.autoplayButtonOutput && (it.insertAdjacentHTML("beforebegin", '<button data-action="' + F + '" type="button">' + jn[0] + F + jn[1] + Ln[0] + "</button>"), Bn = nt.querySelector("[data-action]")), Bn && D(Bn, {
                            click: Ne
                        }), In ? (Ce(), zn && D(at, tn), Rn && D(at, nn)) : Bn && x(Bn)
                    }
                    sn && (bn ? (vn = bn.children[0], hn = bn.children[1], g(bn, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    }), g(vn, {
                        "data-controls": "prev"
                    }), g(hn, {
                        "data-controls": "next"
                    }), g(bn.children, {
                        "aria-controls": Kt,
                        tabindex: "-1"
                    })) : (nt.insertAdjacentHTML(), bn = nt.querySelector(".tns-controls"), vn = bn.children[0], hn = bn.children[1]), pn = re(vn), mn = re(hn), Ot || se(pn, vn, !0), D(bn, _t), yn || x(bn)), Un && D(at, rn), Kn && D(at, on), wt && D(z, an), "inner" === xt ? Xt.on("outerResized", function() {
                        M(), Xt.emit("innerLoaded", Fe())
                    }) : (D(B, {
                        resize: W
                    }), "outer" === xt && Xt.on("innerLoaded", Z)), J(), Z(), S(), H(), Xt.on("indexChanged", _), "function" == typeof Ut && Ut(Fe()), "inner" === xt && Xt.emit("innerLoaded", Fe()), Qt && L(!0)
                }();
            var Jn = function() {
                    return Ot ? function() {
                        var e = qt + bt,
                            t = Gt - bt;
                        if (Et) e += 1, t -= 1;
                        else if (Ct) {
                            var n = Tt ? Tt : 0;
                            lt % (Ct + n) > n && (t -= 1)
                        }
                        if (Rt > t)
                            for (; Rt >= e + st;) Rt -= st;
                        else if (Rt < e)
                            for (; Rt <= t - st;) Rt += st
                    } : function() {
                        Rt = Math.max(qt, Math.min(Gt, Rt))
                    }
                }(),
                Zn = function() {
                    return Qe ? function(e, t) {
                        t || (t = ue()), St && Rt === Gt && (t = -((Ct + Tt) * It - et) + "px"), U || !e ? (de(t), e && E(at) || me()) : A(at, Lt, zt, Bt, t, Nt, me), tt || je()
                    } : function(e) {
                        Wt = [];
                        var t = {};
                        t[K] = t[Q] = me, O(ot[jt], t), D(ot[Rt], t), fe(jt, Je, Ze, !0), fe(Rt, _e, Je), K && Q && e || me()
                    }
                }();
            return {
                getInfo: Fe,
                events: Xt,
                goTo: ye,
                destroy: function() {
                    if (At.disabled = !0, Ot)
                        for (var e = Mt; e--;) Qe && ot[0].remove(), ot[ot.length - 1].remove();
                    var n = ["tns-item", fn];
                    Qe || (n = n.concat("tns-normal", Je));
                    for (var i = st; i--;) {
                        var a = ot[i];
                        a.id.indexOf(Kt + "-item") >= 0 && (a.id = ""), n.forEach(function(e) {
                            h(a, e)
                        })
                    }
                    if (b(ot, ["style", "aria-hidden", "tabindex"]), ot = Kt = st = It = Mt = null, yn && (O(bn, _t), t.controlsContainer && (b(bn, ["aria-label", "tabindex"]), b(bn.children, ["aria-controls", "aria-disabled", "tabindex"])), bn = vn = hn = null), Tn && (O(En, en), t.navContainer && (b(En, ["aria-label"]), b(xn, ["aria-selected", "aria-controls", "tabindex"])), En = xn = null), In && (clearInterval(An), Bn && O(Bn, {
                            click: Ne
                        }), O(at, tn), O(at, nn), t.autoplayButton && b(Bn, ["data-action"])), at.id = Vt || "", at.className = at.className.replace(Yt, ""), at.style = "", Qe && K) {
                        var r = {};
                        r[K] = me, O(at, r)
                    }
                    O(at, rn), O(at, on), rt.insertBefore(at, nt), nt.remove(), nt = it = at = null, O(z, an), O(B, {
                        resize: W
                    })
                }
            }
        }
}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
