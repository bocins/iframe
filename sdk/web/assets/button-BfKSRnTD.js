function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function e(e) {
    for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(o), !0).forEach((function (t) {
            n(e, t, o[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
        }))
    }
    return e
}

function n(t, e, n) {
    return (e = u(e)) in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function r() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    r = function () {
        return e
    };
    var t, e = {}, n = Object.prototype, o = n.hasOwnProperty, i = Object.defineProperty || function (t, e, n) {
            t[e] = n.value
        }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator",
        c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";

    function h(t, e, n) {
        return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
    }

    try {
        h({}, "")
    } catch (t) {
        h = function (t, e, n) {
            return t[e] = n
        }
    }

    function f(t, e, n, r) {
        var o = e && e.prototype instanceof m ? e : m, a = Object.create(o.prototype), s = new N(r || []);
        return i(a, "_invoke", {value: j(t, n, s)}), a
    }

    function d(t, e, n) {
        try {
            return {type: "normal", arg: t.call(e, n)}
        } catch (t) {
            return {type: "throw", arg: t}
        }
    }

    e.wrap = f;
    var p = "suspendedStart", v = "suspendedYield", b = "executing", g = "completed", y = {};

    function m() {
    }

    function w() {
    }

    function x() {
    }

    var _ = {};
    h(_, s, (function () {
        return this
    }));
    var k = Object.getPrototypeOf, O = k && k(k(D([])));
    O && O !== n && o.call(O, s) && (_ = O);
    var L = x.prototype = m.prototype = Object.create(_);

    function E(t) {
        ["next", "throw", "return"].forEach((function (e) {
            h(t, e, (function (t) {
                return this._invoke(e, t)
            }))
        }))
    }

    function S(t, e) {
        function n(r, i, a, s) {
            var c = d(t[r], t, i);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == l(h) && o.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                    n("next", t, a, s)
                }), (function (t) {
                    n("throw", t, a, s)
                })) : e.resolve(h).then((function (t) {
                    u.value = t, a(u)
                }), (function (t) {
                    return n("throw", t, a, s)
                }))
            }
            s(c.arg)
        }

        var r;
        i(this, "_invoke", {
            value: function (t, o) {
                function i() {
                    return new e((function (e, r) {
                        n(t, o, e, r)
                    }))
                }

                return r = r ? r.then(i, i) : i()
            }
        })
    }

    function j(e, n, r) {
        var o = p;
        return function (i, a) {
            if (o === b) throw Error("Generator is already running");
            if (o === g) {
                if ("throw" === i) throw a;
                return {value: t, done: !0}
            }
            for (r.method = i, r.arg = a; ;) {
                var s = r.delegate;
                if (s) {
                    var c = P(s, r);
                    if (c) {
                        if (c === y) continue;
                        return c
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                    if (o === p) throw o = g, r.arg;
                    r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = b;
                var u = d(e, n, r);
                if ("normal" === u.type) {
                    if (o = r.done ? g : v, u.arg === y) continue;
                    return {value: u.arg, done: r.done}
                }
                "throw" === u.type && (o = g, r.method = "throw", r.arg = u.arg)
            }
        }
    }

    function P(e, n) {
        var r = n.method, o = e.iterator[r];
        if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, P(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
        var i = d(o, e.iterator, n.arg);
        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
    }

    function I(t) {
        var e = {tryLoc: t[0]};
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function A(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
    }

    function N(t) {
        this.tryEntries = [{tryLoc: "root"}], t.forEach(I, this), this.reset(!0)
    }

    function D(e) {
        if (e || "" === e) {
            var n = e[s];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1, i = function n() {
                    for (; ++r < e.length;) if (o.call(e, r)) return n.value = e[r], n.done = !1, n;
                    return n.value = t, n.done = !0, n
                };
                return i.next = i
            }
        }
        throw new TypeError(l(e) + " is not iterable")
    }

    return w.prototype = x, i(L, "constructor", {value: x, configurable: !0}), i(x, "constructor", {
        value: w,
        configurable: !0
    }), w.displayName = h(x, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
    }, e.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, h(t, u, "GeneratorFunction")), t.prototype = Object.create(L), t
    }, e.awrap = function (t) {
        return {__await: t}
    }, E(S.prototype), h(S.prototype, c, (function () {
        return this
    })), e.AsyncIterator = S, e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new S(f(t, n, r, o), i);
        return e.isGeneratorFunction(n) ? a : a.next().then((function (t) {
            return t.done ? t.value : a.next()
        }))
    }, E(L), h(L, u, "Generator"), h(L, s, (function () {
        return this
    })), h(L, "toString", (function () {
        return "[object Generator]"
    })), e.keys = function (t) {
        var e = Object(t), n = [];
        for (var r in e) n.push(r);
        return n.reverse(), function t() {
            for (; n.length;) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t
            }
            return t.done = !0, t
        }
    }, e.values = D, N.prototype = {
        constructor: N, reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e) for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
        }, stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
        }, dispatchException: function (e) {
            if (this.done) throw e;
            var n = this;

            function r(r, o) {
                return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i], s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                    var c = o.call(a, "catchLoc"), u = o.call(a, "finallyLoc");
                    if (c && u) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    } else if (c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    }
                }
            }
        }, abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var i = r;
                    break
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
        }, complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
        }, finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), y
            }
        }, catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var o = r.arg;
                        A(n)
                    }
                    return o
                }
            }
            throw Error("illegal catch attempt")
        }, delegateYield: function (e, n, r) {
            return this.delegate = {
                iterator: D(e),
                resultName: n,
                nextLoc: r
            }, "next" === this.method && (this.arg = t), y
        }
    }, e
}

function o(t, e, n, r, o, i, a) {
    try {
        var s = t[i](a), c = s.value
    } catch (t) {
        return void n(t)
    }
    s.done ? e(c) : Promise.resolve(c).then(r, o)
}

function i(t) {
    return function () {
        var e = this, n = arguments;
        return new Promise((function (r, i) {
            var a = t.apply(e, n);

            function s(t) {
                o(a, r, i, s, c, "next", t)
            }

            function c(t) {
                o(a, r, i, s, c, "throw", t)
            }

            s(void 0)
        }))
    }
}

function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function s(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
    }
}

function c(t, e, n) {
    return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
}

function u(t) {
    var e = function (t, e) {
        if ("object" != l(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == l(e) ? e : e + ""
}

function l(t) {
    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, l(t)
}

var h = Object.defineProperty, f = function (t, e, n) {
    return function (t, e, n) {
        e in t ? h(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n
    }(t, "symbol" != l(e) ? e + "" : e, n), n
};
import "./modulepreload-polyfill-ByAUN7Qf.js";
import {s as d} from "./common-DAxaZZgR.js";

var p, v = {
        default: "Войти по Сбер ID",
        resume: "Продолжить со Сбер ID",
        login: "Сбер ID",
        fill: "Заполнить со Сбер ID",
        register: "Зарегистрироваться по Сбер ID",
        start: "Начать со Сбер ID"
    }, b = {default: "Войти как {{userName}}", resume: "Продолжить как {{userName}}", login: "Войти как {{userName}}"},
    g = ((p = g || {}).lg = "lg", p.md = "md", p.sm = "sm", p.xl = "xl", p.xs = "xs", p.xxl = "xxl", p), y = {
        info: {color: "#0c5460", background: "#d1ecf1", border: "#bee5eb"},
        success: {color: "#155724", background: "#d4edda", border: "#c3e6cb"},
        error: {color: "#721c24", background: "#f8d7da", border: "#f5c6cb"}
    }, m = function () {
        function t() {
            a(this, t), t.instance = this
        }

        return c(t, null, [{
            key: "getInstance", value: function () {
                return t.instance
            }
        }, {
            key: "setEnable", value: function (e) {
                t.enable = e
            }
        }, {
            key: "log", value: function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
                if (t.enable) {
                    var r = new Date,
                        o = "[".concat(r.getHours(), ":").concat(r.getMinutes(), ":").concat(r.getSeconds().toString().padStart(2, "0"), ":").concat(r.getMilliseconds(), "] %c[").concat(n, "]%c "),
                        i = "color: ".concat(y[n].color, ";background-color: ").concat(y[n].background, ";border: 1px solid ").concat(y[n].border);
                    console.info.apply(null, [o, i, ""].concat(e))
                }
            }
        }])
    }();
f(m, "instance", new m), f(m, "enable", !1);
var w = function () {
        var t = i(r().mark((function t() {
            return r().wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (t.t0 = !document.hasStorageAccess, t.t0) {
                            t.next = 5;
                            break
                        }
                        return t.next = 4, document.hasStorageAccess();
                    case 4:
                        t.t0 = t.sent;
                    case 5:
                        if (!t.t0) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return", !0);
                    case 7:
                        return t.prev = 7, t.next = 10, navigator.permissions.query({name: "storage-access"});
                    case 10:
                        if (t.t1 = t.sent.state, "granted" !== t.t1) {
                            t.next = 15;
                            break
                        }
                        return t.next = 14, document.requestStorageAccess();
                    case 14:
                        return t.abrupt("return", !0);
                    case 15:
                        t.next = 20;
                        break;
                    case 17:
                        return t.prev = 17, t.t2 = t.catch(7), t.abrupt("return", !0);
                    case 20:
                        return t.abrupt("return", !1);
                    case 21:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[7, 17]])
        })));
        return function () {
            return t.apply(this, arguments)
        }
    }(), x = function () {
        var t = i(r().mark((function t() {
            return r().wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, w();
                    case 2:
                        if (t.sent) {
                            t.next = 25;
                            break
                        }
                        return t.prev = 3, t.next = 6, navigator.permissions.query({name: "storage-access"});
                    case 6:
                        if (t.t0 = t.sent.state, "prompt" !== t.t0) {
                            t.next = 19;
                            break
                        }
                        return t.prev = 8, t.next = 11, document.requestStorageAccess();
                    case 11:
                        return t.abrupt("return", "allow");
                    case 14:
                        return t.prev = 14, t.t1 = t.catch(8), t.abrupt("return", "deny");
                    case 17:
                        t.next = 20;
                        break;
                    case 19:
                        return t.abrupt("return", null);
                    case 20:
                        t.next = 25;
                        break;
                    case 22:
                        return t.prev = 22, t.t2 = t.catch(3), t.abrupt("return", null);
                    case 25:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[3, 22], [8, 14]])
        })));
        return function () {
            return t.apply(this, arguments)
        }
    }(), _ = "_sbid_button_cvumv_16", k = "_sbid_button__text_cvumv_126", O = "_sbid_button__logo_cvumv_138",
    L = "_sbid_button__loader_cvumv_151", E = "_sbid_button__loaderIcon_cvumv_162", S = "_sbid_button__hide_cvumv_175",
    j = "_sbid_button__change_user_cvumv_179", P = function () {
        return c((function t() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a(this, t), f(this, "button"), f(this, "text"), f(this, "user"), f(this, "loading"), f(this, "show"), f(this, "showIcon"), f(this, "disabled"), f(this, "size"), f(this, "theme"), f(this, "changeUser"), f(this, "requestStorageAccess"), f(this, "setOnClickListeners", (function () {
                var t = document.querySelector(".".concat(j));
                null == t || t.addEventListener("click", (function (t) {
                    t.preventDefault(), t.stopPropagation(), e.onButtonChangeUserClick()
                }))
            })), this.text = {
                personal: v.default,
                main: b.default
            }, this.loading = !1, this.show = !0, this.disabled = !1, this.showIcon = !0, this.changeUser = !1, this.requestStorageAccess = !1, this.theme = "default", this.size = g.lg, this.button = document.createElement("div"), this.button.classList.add(_), this.button.onclick = this.onButtonClick.bind(this), this.setProperties(n), this.sendMessageToParent("sberId_button_init_success")
        }), [{
            key: "getButtonElement", value: function () {
                return this.button
            }
        }, {
            key: "setProperties", value: function (t) {
                var e, n, r, o, i, a, s, c, u, l;
                this.loading = null !== (e = null == t ? void 0 : t.loading) && void 0 !== e ? e : this.loading, this.show = null !== (n = null == t ? void 0 : t.show) && void 0 !== n ? n : this.show, this.disabled = null !== (r = null == t ? void 0 : t.disabled) && void 0 !== r ? r : this.disabled, this.user = Object.prototype.hasOwnProperty.call(t, "user") ? t.user : this.user, this.text.main = (null == (u = null == t ? void 0 : t.text) ? void 0 : u.main) && v[t.text.main] || this.text.main, this.text.personal = (null == (l = null == t ? void 0 : t.text) ? void 0 : l.personal) && b[t.text.personal] || this.text.personal, this.showIcon = null !== (o = null == t ? void 0 : t.showIcon) && void 0 !== o ? o : this.showIcon, this.theme = null !== (i = null == t ? void 0 : t.theme) && void 0 !== i ? i : this.theme, this.size = null !== (a = null == t ? void 0 : t.size) && void 0 !== a ? a : this.size, this.changeUser = null !== (s = null == t ? void 0 : t.changeUser) && void 0 !== s ? s : this.changeUser, this.requestStorageAccess = null !== (c = null == t ? void 0 : t.requestStorageAccess) && void 0 !== c ? c : this.requestStorageAccess, this.render()
            }
        }, {
            key: "onButtonClick", value: (t = i(r().mark((function t() {
                var n;
                return r().wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (this.loading || this.disabled) {
                                t.next = 9;
                                break
                            }
                            if (!this.requestStorageAccess) {
                                t.next = 8;
                                break
                            }
                            return t.next = 4, x();
                        case 4:
                            n = t.sent, this.sendMessageToParent("sberId_button_click", e({}, n ? {storageAccess: n} : {})), t.next = 9;
                            break;
                        case 8:
                            this.sendMessageToParent("sberId_button_click");
                        case 9:
                        case"end":
                            return t.stop()
                    }
                }), t, this)
            }))), function () {
                return t.apply(this, arguments)
            })
        }, {
            key: "onButtonChangeUserClick", value: function () {
                this.loading || this.disabled || this.sendMessageToParent("sberId_button_change_user_click")
            }
        }, {
            key: "sendMessageToParent", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.parent.postMessage(JSON.stringify({type: t, value: e}), "*")
            }
        }, {
            key: "render", value: function () {
                this.show ? this.button.classList.remove(S) : this.button.classList.add(S), this.button.setAttribute("data-loading", String(this.loading)), this.button.setAttribute("data-disabled", String(this.disabled)), this.button.setAttribute("data-theme", String(this.theme)), this.button.setAttribute("data-size", String(this.size));
                var t = this.user ? this.text.personal.replace("{{userName}}", this.getUserName()) : this.text.main,
                    e = this.showIcon ? "<span class='".concat(O, "'>\n            ").concat(d, "\n         </span>") : "",
                    n = this.user && this.changeUser ? "<span class='".concat(j, '\'>\n            <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <circle cx="2" cy="2" r="2" fill="white"/>\n              <circle cx="2" cy="9" r="2" fill="white"/>\n              <circle cx="2" cy="16" r="2" fill="white"/>\n            </svg>\n        </span>') : "";
                this.button.innerHTML = "\n       ".concat(e, "\n       <span class='").concat(k, "'>").concat(t, "</span>\n       ").concat(n, "\n       <span class='").concat(L, " ").concat(this.loading ? "" : S, "'>\n          <span class='").concat(E, "'></span>\n       </span>"), this.setOnClickListeners()
            }
        }, {
            key: "getUserName", value: function () {
                var t, e;
                return "".concat((null == (t = this.user) ? void 0 : t.firstname) || "", " ").concat((null == (e = this.user) ? void 0 : e.surname) || "")
            }
        }]);
        var t
    }();
document.addEventListener("DOMContentLoaded", (function () {
    window.SberIdButton = new I
}));
var I = function () {
    return c((function t() {
        a(this, t), f(this, "button");
        var e = document.getElementById("root");
        this.button = new P, null == e || e.append(this.button.getButtonElement()), window.addEventListener("message", this.listener.bind(this))
    }), [{
        key: "listener", value: function (t) {
            if (document.referrer.includes(t.origin)) try {
                var e = JSON.parse(t.data), n = e.type, r = e.value;
                if ("sberId_button_set_props" === n) this.button.setProperties(r); else console.error("Отображение кнопки Сбер ID, не существующий messageEvent type")
            } catch (t) {
                console.error({error: t})
            }
        }
    }])
}();
