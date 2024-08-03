(function () {
    "use strict";
    try {
        if (typeof document < "u") {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("._sberId_button_change_user_wrap_13z8u_1{position:relative}._sberId_button_change_user_13z8u_1{display:block;position:absolute;z-index:1;background:#fff;box-shadow:0 12px 24px #2d495826;font-size:15px;line-height:27px;white-space:nowrap;padding:15px 30px;font-weight:700;color:#000014;cursor:pointer;right:0}._sberId_button_change_user_13z8u_1:hover{background:#ededed}._sbid_button_not_me_error_1278t_1{border-radius:16px;background:#444550;z-index:10000;position:fixed;display:flex;left:50%;right:auto;transform:translate(-50%);-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;bottom:20px;box-shadow:0 12px 24px #2d495826}._sbid_button_not_me_error_wrap_1278t_18{padding:16px;display:flex;align-items:center;transform:none}._sbid_button_not_me_error_content_1278t_25{display:flex;align-items:center;width:460px;color:#fff;font-size:16px;font-weight:500;line-height:20px;text-align:left}._sbid_button_not_me_error_text_1278t_36{display:flex;margin-left:12px}._sbid_button_not_me_error_button_1278t_41{padding:12px 18px;height:40px;font-size:14px;font-weight:600;line-height:16px;text-align:center;border-radius:12px;background:#ffffff1f;color:#24b23e;border:none;cursor:pointer}@media (max-width: 767px){._sbid_button_not_me_error_1278t_1{transform:none;bottom:20px;left:16px;right:16px}._sbid_button_not_me_error_wrap_1278t_18{flex-direction:column;width:100%}._sbid_button_not_me_error_content_1278t_25{width:100%;margin-bottom:18px}._sbid_button_not_me_error_button_1278t_41{width:100%}}._sberId_certificate_banner_13ctf_1{display:flex;position:absolute;top:0;left:0;width:100%;height:100%}:root{--sbid-banner-possition-top: none;--sbid-banner-possition-left: none;--sbid-banner-possition-right: none;--sbid-banner-possition-bottom: none}@media (min-width: 768px){._sberId_notification_14d4q_8[data-position=bottom-right]{--sbid-banner-possition-top: none;--sbid-banner-possition-left: none;--sbid-banner-possition-right: 30px;--sbid-banner-possition-bottom: 30px}._sberId_notification_14d4q_8[data-position=bottom-left]{--sbid-banner-possition-top: none;--sbid-banner-possition-left: 30px;--sbid-banner-possition-right: none;--sbid-banner-possition-bottom: 30px}._sberId_notification_14d4q_8[data-position=top-left]{--sbid-banner-possition-top: 30px;--sbid-banner-possition-left: 30px;--sbid-banner-possition-right: none;--sbid-banner-possition-bottom: none}._sberId_notification_14d4q_8[data-position=top-right]{--sbid-banner-possition-top: 30px;--sbid-banner-possition-left: none;--sbid-banner-possition-right: 30px;--sbid-banner-possition-bottom: none}}._sberId_notification_14d4q_8{position:fixed;z-index:9999;width:400px;display:flex;border-radius:24px;top:var(--sbid-banner-possition-top);left:var(--sbid-banner-possition-left);right:var(--sbid-banner-possition-right);bottom:var(--sbid-banner-possition-bottom)}._sberId_notification_14d4q_8[data-hide=true]{display:none}._sberId_notification_iframe_14d4q_53{width:100%;height:100%;border-radius:24px}@media (max-width: 767px){._sberId_notification_14d4q_8{display:flex;width:100%;transform:translateY(100%);transition:transform 1s ease;left:0;right:0;bottom:0}._sberId_notification_iframe_14d4q_53{border-radius:24px 24px 0 0}._sberId_notification_14d4q_8[data-hide=true]{display:flex;transform:translateY(100%)}._sberId_notification_14d4q_8[data-hide=false]{display:flex;transform:translateY(0)}}")), document.head.appendChild(t)
        }
    } catch (i) {
        console.error("vite-plugin-css-injected-by-js", i)
    }
})();

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _regeneratorRuntime() {
    "use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    _regeneratorRuntime = function () {
        return t
    };
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function (e, t, n) {
            e[t] = n.value
        }, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";

    function u(e, t, n) {
        return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
    }

    try {
        u({}, "")
    } catch (e) {
        u = function (e, t, n) {
            return e[t] = n
        }
    }

    function l(e, t, n, r) {
        var o = t && t.prototype instanceof m ? t : m, a = Object.create(o.prototype), s = new T(r || []);
        return i(a, "_invoke", {value: x(e, n, s)}), a
    }

    function h(e, t, n) {
        try {
            return {type: "normal", arg: e.call(t, n)}
        } catch (e) {
            return {type: "throw", arg: e}
        }
    }

    t.wrap = l;
    var f = "suspendedStart", d = "suspendedYield", p = "executing", v = "completed", b = {};

    function m() {
    }

    function g() {
    }

    function y() {
    }

    var w = {};
    u(w, a, (function () {
        return this
    }));
    var _ = Object.getPrototypeOf, k = _ && _(_(P([])));
    k && k !== n && r.call(k, a) && (w = k);
    var S = y.prototype = m.prototype = Object.create(w);

    function I(e) {
        ["next", "throw", "return"].forEach((function (t) {
            u(e, t, (function (e) {
                return this._invoke(t, e)
            }))
        }))
    }

    function C(e, t) {
        function n(i, o, a, s) {
            var c = h(e[i], e, o);
            if ("throw" !== c.type) {
                var u = c.arg, l = u.value;
                return l && "object" == _typeof(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function (e) {
                    n("next", e, a, s)
                }), (function (e) {
                    n("throw", e, a, s)
                })) : t.resolve(l).then((function (e) {
                    u.value = e, a(u)
                }), (function (e) {
                    return n("throw", e, a, s)
                }))
            }
            s(c.arg)
        }

        var o;
        i(this, "_invoke", {
            value: function (e, r) {
                function i() {
                    return new t((function (t, i) {
                        n(e, r, t, i)
                    }))
                }

                return o = o ? o.then(i, i) : i()
            }
        })
    }

    function x(t, n, r) {
        var i = f;
        return function (o, a) {
            if (i === p) throw Error("Generator is already running");
            if (i === v) {
                if ("throw" === o) throw a;
                return {value: e, done: !0}
            }
            for (r.method = o, r.arg = a; ;) {
                var s = r.delegate;
                if (s) {
                    var c = U(s, r);
                    if (c) {
                        if (c === b) continue;
                        return c
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                    if (i === f) throw i = v, r.arg;
                    r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = p;
                var u = h(t, n, r);
                if ("normal" === u.type) {
                    if (i = r.done ? v : d, u.arg === b) continue;
                    return {value: u.arg, done: r.done}
                }
                "throw" === u.type && (i = v, r.method = "throw", r.arg = u.arg)
            }
        }
    }

    function U(t, n) {
        var r = n.method, i = t.iterator[r];
        if (i === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, U(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
        var o = h(i, t.iterator, n.arg);
        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, b;
        var a = o.arg;
        return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, b) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
    }

    function E(e) {
        var t = {tryLoc: e[0]};
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function L(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function T(e) {
        this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
    }

    function P(t) {
        if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var i = -1, o = function n() {
                    for (; ++i < t.length;) if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
                    return n.value = e, n.done = !0, n
                };
                return o.next = o
            }
        }
        throw new TypeError(_typeof(t) + " is not iterable")
    }

    return g.prototype = y, i(S, "constructor", {value: y, configurable: !0}), i(y, "constructor", {
        value: g,
        configurable: !0
    }), g.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
    }, t.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, c, "GeneratorFunction")), e.prototype = Object.create(S), e
    }, t.awrap = function (e) {
        return {__await: e}
    }, I(C.prototype), u(C.prototype, s, (function () {
        return this
    })), t.AsyncIterator = C, t.async = function (e, n, r, i, o) {
        void 0 === o && (o = Promise);
        var a = new C(l(e, n, r, i), o);
        return t.isGeneratorFunction(n) ? a : a.next().then((function (e) {
            return e.done ? e.value : a.next()
        }))
    }, I(S), u(S, c, "Generator"), u(S, a, (function () {
        return this
    })), u(S, "toString", (function () {
        return "[object Generator]"
    })), t.keys = function (e) {
        var t = Object(e), n = [];
        for (var r in t) n.push(r);
        return n.reverse(), function e() {
            for (; n.length;) {
                var r = n.pop();
                if (r in t) return e.value = r, e.done = !1, e
            }
            return e.done = !0, e
        }
    }, t.values = P, T.prototype = {
        constructor: T, reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
        }, stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        }, dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;

            function i(r, i) {
                return s.type = "throw", s.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
            }

            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o], s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"), u = r.call(a, "finallyLoc");
                    if (c && u) {
                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                    } else if (c) {
                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                    }
                }
            }
        }, abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var o = i;
                    break
                }
            }
            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
            var a = o ? o.completion : {};
            return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(a)
        }, complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
        }, finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), b
            }
        }, catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var i = r.arg;
                        L(n)
                    }
                    return i
                }
            }
            throw Error("illegal catch attempt")
        }, delegateYield: function (t, n, r) {
            return this.delegate = {
                iterator: P(t),
                resultName: n,
                nextLoc: r
            }, "next" === this.method && (this.arg = e), b
        }
    }, t
}

function asyncGeneratorStep(e, t, n, r, i, o, a) {
    try {
        var s = e[o](a), c = s.value
    } catch (e) {
        return void n(e)
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i)
}

function _asyncToGenerator(e) {
    return function () {
        var t = this, n = arguments;
        return new Promise((function (r, i) {
            var o = e.apply(t, n);

            function a(e) {
                asyncGeneratorStep(o, r, i, a, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(o, r, i, a, s, "throw", e)
            }

            a(void 0)
        }))
    }
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach((function (t) {
            _defineProperty(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function _defineProperty(e, t, n) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _iterableToArrayLimit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var r, i, o, a, s = [], c = !0, u = !1;
        try {
            if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                c = !1
            } else for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
        } catch (e) {
            u = !0, i = e
        } finally {
            try {
                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
                if (u) throw i
            }
        }
        return s
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _toPropertyKey(r.key), r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
}

function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == _typeof(t) ? t : t + ""
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != _typeof(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}

!function (e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && ("undefined" == typeof module ? "undefined" : _typeof(module)) < "u" ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : e || self).createSberidSDK = {})
}(this, (function (e) {
    "use strict";
    var t, n, r, i, o, a, s, c, u, l, h, f, d, p, v, b, m, g, y, w, _, k, S, I, C, x, U, E, L, T, P, A, O, W, j, N, D,
        z, R, M, B, G, K, F, q, J, H, V, Y, X, Z, $, Q, ee, te, ne, re, ie, oe, ae, se, ce, ue, le, he, fe, de, pe, ve,
        be, me, ge, ye, we, _e, ke, Se, Ie, Ce, xe, Ue, Ee, Le, Te, Pe, Ae, Oe, We, je, Ne, De, ze, Re, Me, Be, Ge, Ke,
        Fe, qe, Je, He, Ve, Ye, Xe, Ze, $e, Qe, et, tt, nt, rt = Object.defineProperty, it = function (e, t, n) {
            return function (e, t, n) {
                t in e ? rt(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n
            }(e, "symbol" != _typeof(t) ? t + "" : t, n), n
        }, ot = function (e, t, n) {
            if (!t.has(e)) throw TypeError("Cannot " + n)
        }, at = function (e, t, n) {
            return ot(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        }, st = function (e, t, n) {
            if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        }, ct = function (e, t, n, r) {
            return ot(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        }, ut = function (e, t, n) {
            return ot(e, t, "access private method"), n
        }, lt = "https://id.sber.ru", ht = "https://oauth.sber.ru/",
        ft = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"], dt = "sberId_root_element", pt = {
            invalid_request: "В запросе отсутствуют обязательные атрибуты",
            unauthorized_client: "АС - источник запроса не зарегистрирована или заблокирована в банке либо значение атрибута client_id не соответствует формату",
            unsupported_response_type: "Значение атрибута response_type не равно «code»",
            invalid_scope: "Значение атрибута scope не содержит параметр openid в начальной позиции либо запрошенный scope содержит значения, недоступные для АС - источника запроса",
            access_denied: "Клиент отказался от передачи согласий",
            invalid_state: "Значение атрибута state не соответствует изначальному",
            window_closed: "Клиент закрыл окно авторизации через Сбер ID"
        }, vt = new Uint8Array(16);

    function bt() {
        if (!nt && !(nt = ("undefined" == typeof crypto ? "undefined" : _typeof(crypto)) < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return nt(vt)
    }

    for (var mt = [], gt = 0; gt < 256; ++gt) mt.push((gt + 256).toString(16).slice(1));
    var yt = {randomUUID: ("undefined" == typeof crypto ? "undefined" : _typeof(crypto)) < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)};

    function wt(e, t, n) {
        if (yt.randomUUID && !t && !e) return yt.randomUUID();
        var r = (e = e || {}).random || (e.rng || bt)();
        return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return mt[e[t + 0]] + mt[e[t + 1]] + mt[e[t + 2]] + mt[e[t + 3]] + "-" + mt[e[t + 4]] + mt[e[t + 5]] + "-" + mt[e[t + 6]] + mt[e[t + 7]] + "-" + mt[e[t + 8]] + mt[e[t + 9]] + "-" + mt[e[t + 10]] + mt[e[t + 11]] + mt[e[t + 12]] + mt[e[t + 13]] + mt[e[t + 14]] + mt[e[t + 15]]
        }(r)
    }

    var _t = {
        info: {color: "#0c5460", background: "#d1ecf1", border: "#bee5eb"},
        success: {color: "#155724", background: "#d4edda", border: "#c3e6cb"},
        warn: {color: "#a58000", background: "#fff8d8", border: "#fff8d8"},
        error: {color: "#721c24", background: "#f8d7da", border: "#f5c6cb"}
    }, kt = function () {
        function e() {
            _classCallCheck(this, e)
        }

        return _createClass(e, null, [{
            key: "setEnable", value: function (t) {
                e.enable = t
            }
        }, {
            key: "log", value: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
                if (e.enable) {
                    var r = new Date,
                        i = "[".concat(r.getHours(), ":").concat(r.getMinutes(), ":").concat(r.getSeconds().toString().padStart(2, "0"), ":").concat(r.getMilliseconds(), "] %c[").concat(n, "]%c "),
                        o = "color: ".concat(_t[n].color, ";background-color: ").concat(_t[n].background, ";border: 1px solid ").concat(_t[n].border);
                    console.info.apply(null, [i, o, ""].concat(t))
                }
            }
        }, {
            key: "info", value: function (t) {
                e.log(t, "info")
            }
        }, {
            key: "error", value: function (t) {
                e.log(t, "error")
            }
        }, {
            key: "success", value: function (t) {
                e.log(t, "success")
            }
        }, {
            key: "warn", value: function (t) {
                e.log(t, "warn")
            }
        }])
    }();
    it(kt, "enable", !1);
    var St, It, Ct = kt, xt = function () {
        return new URL(window.location.href).searchParams
    }, Ut = function (e, t) {
        var n;
        return Object.entries(t).forEach((function (t) {
            var n = _slicedToArray(t, 2), r = n[0], i = n[1];
            try {
                e.searchParams.set(r, decodeURIComponent(i))
            } catch (t) {
                Ct.error(["Ошибка декодирования oidc параметра", t]), e.searchParams.set(r, "")
            }
        })), null != (n = e.searchParams.get("scope")) && n.includes("+") && e.searchParams.set("scope", e.searchParams.get("scope").replaceAll("+", " ")), e
    }, Et = function (e) {
        var t = [7200, 86400, 604800, 2419200], n = e || 0;
        return e >= t.length && (n = t.length - 1), t[n]
    }, Lt = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i], Tt = function (e) {
        var t = e.src, n = e.name, r = void 0 === n ? "sberid-iframe" : n, i = document.createElement("iframe");
        return i.setAttribute("src", t), i.setAttribute("frameborder", "0"), i.setAttribute("name", r), i.setAttribute("id", r), i.referrerPolicy = "origin", i.width = "0", i.height = "0", i.style.display = "none", i.style.position = "absolute", i.style.left = "-9999px", i
    }, Pt = function (e, t) {
        var n = new URL("".concat(e).concat("/oidc/authorizelow"));
        return Ut(n, t).toString()
    }, At = function (e) {
        return e.COOKIE_AUTOUPDATE = "cookie2autoupdate", e.AGRESSIVE_LOGIN = "aggressivelogin", e.FAST_LOGIN = "fastlogin", e.NONE = "none", e
    }(At || {}), Ot = function () {
        return _createClass((function e(t) {
            var n = t.baseUrl, r = t.oidc, i = t.timeout, o = t.machineClick, a = void 0 === o ? At.FAST_LOGIN : o;
            _classCallCheck(this, e), it(this, "iframeSrc"), it(this, "baseUrl"), it(this, "timeout"), this.baseUrl = n, this.timeout = i, this.iframeSrc = Pt(this.baseUrl, _objectSpread(_objectSpread({}, r), {}, {
                logUid: fr.logUid,
                prompt: "none",
                machineClick: a
            }))
        }), [{
            key: "createIframe", value: function () {
                return Ct.info("Run create iframe src: ".concat(this.iframeSrc)), Tt({
                    src: this.iframeSrc,
                    name: "sberid-iframe-auth"
                })
            }
        }, {
            key: "authorization", value: (e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                var t = this;
                return _regeneratorRuntime().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function (e, n) {
                                var r = setTimeout((function () {
                                    o(), Ct.error(["Прерывание получения данных по таймауту", t.timeout]), n({
                                        success: !1,
                                        error: {type: "timeout", description: "Прерывание получения данных по таймауту"}
                                    })
                                }), t.timeout), i = t.createIframe(), o = function () {
                                    i.remove(), window.removeEventListener("message", a), clearTimeout(r)
                                }, a = function (r) {
                                    if (r.origin === t.baseUrl) {
                                        var i = JSON.parse(r.data);
                                        "success" === i.type ? (e(i.data), o(), Ct.success(["Данные для авторизации: ", i.data])) : "error" === i.type && (n(i.data), o(), Ct.error(["Ошибка получения данных для авторизации:  ", i.data]))
                                    }
                                };
                                window.addEventListener("message", a), document.body.append(i), i.onload = function () {
                                    var e;
                                    Ct.info("Запрос на получение данных для авторизации"), null == (e = i.contentWindow) || e.postMessage(JSON.stringify({type: "fetch data"}), "*")
                                }
                            })));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            }))), function () {
                return e.apply(this, arguments)
            })
        }]);
        var e
    }(), Wt = {
        enable: !1, mode: "default", timeout: 3e3, onErrorAutoMode: function () {
        }, onErrorDefaultMode: function () {
            return !0
        }
    }, jt = "sberId_userInfo", Nt = function (e) {
        var t, n = new CustomEvent(jt, {detail: e});
        null == (t = document.getElementById(dt)) || t.dispatchEvent(n)
    }, Dt = function (e) {
        var t;
        null == (t = document.getElementById(dt)) || t.addEventListener(jt, (function (t) {
            e(t.detail)
        }))
    }, zt = "sberId_disable", Rt = function (e) {
        var t, n = new CustomEvent(zt, {detail: e});
        null == (t = document.getElementById(dt)) || t.dispatchEvent(n)
    }, Mt = {
        getRandomValues: function (e) {
            for (var t = new Uint8Array(_toConsumableArray(e)), n = 0; n < t.length; n += 1) t[n] = Math.floor(256 * Math.random());
            return t
        }
    }, Bt = window.crypto || window.msCrypto || Mt, Gt = function (e) {
        var t = Number(e);
        return (t ^ Number(Bt.getRandomValues(new Uint8Array(1))[0]) & 15 >> t / 4).toString(16)
    }, Kt = "_sa", Ft = "_sas", qt = function () {
        return Math.floor((new Date).getTime() / 1e3)
    }, Jt = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
            r = ["".concat(e, "=").concat(t || ""), "samesite=strict", "path=/"];
        if ("production" === process.env.NODE_ENV && (r.push("domain=.".concat(function () {
            var e = window.location.hostname.split(".");
            return e.length >= 2 ? e.slice(-2).join(".") : window.location.hostname
        }())), r.push("secure")), n) {
            var i = new Date;
            i.setTime(i.getTime() + 864e5 * n), r.push("expires=".concat(i.toUTCString()))
        }
        document.cookie = r.join(";")
    }, Ht = function (e) {
        var t = new RegExp("(^|[^;]+)\\s*".concat(e, "\\s*=\\s*([^;]+)")).exec(document.cookie);
        return t ? t[2] : void 0
    }, Vt = function () {
        var e = Ht(Kt);
        if (!e) {
            var t = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, Gt),
                n = "".concat("SA").concat("1", ".").concat(t, ".").concat(String(qt()));
            return Jt(Kt, n), n
        }
        return e
    };
    try {
        Vt()
    } catch (gt) {
        It = gt
    }
    var Yt = "", Xt = function () {
        return Yt ? "".concat(Ft, "_").concat(Yt) : Ft
    }, Zt = function () {
        return Ht(Kt)
    }, $t = function () {
        return Ht(Xt())
    }, Qt = function (e) {
        return e < 10 ? "0".concat(e) : e
    }, en = function () {
        var e = new Date, t = new Date(e.valueOf() - 6e4 * e.getTimezoneOffset()),
            n = _slicedToArray(t.toISOString().split("Z"), 1)[0];
        return "".concat(n).concat(function (e) {
            return "".concat(e < 0 ? "+" : "-").concat(Qt(Math.abs(e / 60)), ":").concat(Qt(Math.abs(e % 60)))
        }(t.getTimezoneOffset()))
    }, tn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255;
        return e.length > t ? e.substring(0, t) : e
    }, nn = [], rn = {url: "", buffer: 10, credentials: !1}, on = {}, an = {}, sn = function (e) {
        Object.assign(rn, e)
    }, cn = function (e) {
        Object.assign(on, e)
    }, un = function (e) {
        Object.assign(an, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, e), {}, {
            clientBlock: tn(e.clientBlock, 64),
            hashUserLoginId: tn(e.hashUserLoginId),
            appVersion: tn(e.appVersion, 16)
        }, e.adId && {adId: tn(e.adId)}), e.appId && {appId: tn(e.appId)}), e.subId && {subId: tn(e.subId)}), e.sapId && {sapId: tn(e.sapId)}), e.partnerId && {partnerId: tn(e.partnerId)}))
    }, ln = function (e) {
        nn.push(e)
    }, hn = function () {
        return rn
    }, fn = function (e) {
        nn.splice.apply(nn, [0, 0].concat(_toConsumableArray(e)))
    }, dn = function () {
        return nn.length
    }, pn = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
        }, r = new XMLHttpRequest;
        r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json;charset=utf-8"), hn().credentials && (r.withCredentials = !0), r.send(JSON.stringify(t)), r.onreadystatechange = function () {
            4 === r.readyState && r.status >= 400 && n()
        }
    }, vn = function () {
        return window.navigator.onLine
    }, bn = {
        bluetooth: "BLUETOOTH",
        cellular: "CELLULAR",
        ethernet: "ETHERNET",
        wifi: "WIFI",
        mixed: "UNKNOWN",
        none: "UNKNOWN",
        wimax: "UNKNOWN",
        other: "UNKNOWN",
        unknown: "UNKNOWN"
    }, mn = function () {
        var e, t;
        return bn[null === (e = window.navigator) || void 0 === e || null === (t = e.connection) || void 0 === t ? void 0 : t.type] || "UNKNOWN"
    }, gn = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
            var t, n, r;
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, null === (t = window.navigator) || void 0 === t ? void 0 : t.getBattery();
                    case 3:
                        if (e.t0 = e.sent, e.t0) {
                            e.next = 6;
                            break
                        }
                        e.t0 = {};
                    case 6:
                        return n = e.t0, r = n.level, e.abrupt("return", "number" == typeof r ? String(100 * r) : void 0);
                    case 11:
                        return e.prev = 11, e.t1 = e.catch(0), e.abrupt("return");
                    case 14:
                    case"end":
                        return e.stop()
                }
            }), e, null, [[0, 11]])
        })));
        return function () {
            return e.apply(this, arguments)
        }
    }(), yn = function (e) {
        if (null != e) {
            var t = e.filter((function (e) {
                return "string" == typeof e.value
            })).slice(0, 128);
            return t.length ? t.map((function (e) {
                var t = e.key, n = e.value;
                return {key: tn(t), value: tn(n)}
            })) : void 0
        }
    }, wn = function () {
        return {
            meta: _objectSpread(_objectSpread({}, on), {}, {
                platform: "WEB",
                screenSize: "".concat(window.screen.width, "x").concat(window.screen.height),
                browser: window.navigator.userAgent,
                systemLanguage: window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage,
                timeStamp: en()
            }),
            profile: _objectSpread(_objectSpread({}, an), {}, {
                applicationLanguage: tn(document.documentElement.lang, 16),
                deviceId: Zt(),
                sessionId: $t()
            }),
            data: nn.splice(0, Math.min(nn.length, rn.buffer))
        }
    }, _n = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t, n) {
            var r, i, o, a;
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.t0 = ln, e.t1 = tn(t.eventCategory), e.t2 = tn(t.eventAction, 1024), e.t3 = n, e.t4 = tn(t.value), e.t5 = yn(t.properties), e.next = 8, gn();
                    case 8:
                        if (e.t6 = e.sent, e.t7 = mn(), e.t8 = en(), e.t9 = {
                            eventCategory: e.t1,
                            eventAction: e.t2,
                            eventType: e.t3,
                            value: e.t4,
                            properties: e.t5,
                            batteryLevel: e.t6,
                            connectionType: e.t7,
                            timeStamp: e.t8
                        }, (0, e.t0)(e.t9), r = hn(), i = r.url, o = r.buffer, !i || !vn()) {
                            e.next = 20;
                            break
                        }
                        a = _regeneratorRuntime().mark((function e() {
                            var t;
                            return _regeneratorRuntime().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        t = wn(), pn(i, t, (function () {
                                            fn(t.data)
                                        }));
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        }));
                    case 16:
                        if (!(dn() >= o)) {
                            e.next = 20;
                            break
                        }
                        return e.delegateYield(a(), "t10", 18);
                    case 18:
                        e.next = 16;
                        break;
                    case 20:
                    case"end":
                        return e.stop()
                }
            }), e)
        })));
        return function (t, n) {
            return e.apply(this, arguments)
        }
    }();
    document.addEventListener("visibilitychange", (function () {
        var e = hn().url;
        if ("hidden" === document.visibilityState && e && vn()) for (; dn();) {
            var t = wn();
            fetch(e, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: hn().credentials ? "include" : "same-origin",
                keepalive: !0,
                body: JSON.stringify(t)
            })
        }
    }));
    var kn = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, _n(t, "business");
                    case 2:
                    case"end":
                        return e.stop()
                }
            }), e)
        })));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), Sn = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, _n(t, "technical");
                    case 2:
                    case"end":
                        return e.stop()
                }
            }), e)
        })));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), In = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, _n(t, "sensitive");
                    case 2:
                    case"end":
                        return e.stop()
                }
            }), e)
        })));
        return function (t) {
            return e.apply(this, arguments)
        }
    }();
    window.clickstream || (window.clickstream = {
        setSessionCookie: function () {
            Yt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            var e = Xt();
            try {
                var t = window.sessionStorage.getItem(e);
                if (t) Jt(e, t, 1); else {
                    var n = "".concat(Vt(), ".").concat(String(qt()));
                    Jt(e, n, 1), window.sessionStorage.setItem(e, n)
                }
            } catch (t) {
                St = t
            }
        }, getSessionCookie: $t, getSessionCookieError: function () {
            return St
        }, getDeviceCookie: Zt, getDeviceCookieError: function () {
            return It
        }, setConfig: sn, setMeta: cn, setProfile: un, sendEvent: kn, sendSensitiveEvent: In, sendTechEvent: Sn
    });
    var Cn = function (e) {
            var t = e.logUid, n = e.clientId, r = e.url, i = e.apiKey;
            window ? (sn({url: r, buffer: 1, credentials: !1}), cn({apiKey: i}), un({
                clientBlock: n,
                hashUserLoginId: t
            })) : Ct.error(["Невозможно инициализировать clickstream"])
        }, xn = function (e) {
            ("undefined" == typeof window ? "undefined" : _typeof(window)) > "u" || function (e) {
                var t = e.eventCategory, n = void 0 === t ? "Login" : t, r = e.eventAction, i = e.eventType, o = e.value,
                    a = e.extendedProperties, s = xt(), c = "js_".concat("1.2.0"), u = window.location, l = u.hostname,
                    h = u.origin, f = l;
                f = f.toUpperCase();
                try {
                    var d = [{key: "merchUrl", value: h}, {key: "partner_name", value: f}, {
                        key: "sdkVersion",
                        value: c
                    }, {key: "channel", value: "browser"}, {key: "eventType", value: i}];
                    a && Object.entries(a).forEach((function (e) {
                        return d.push({key: e[0], value: e[1]})
                    })), ft.forEach((function (e) {
                        s.has(e) && d.push({key: e, value: s.get(e)})
                    })), kn({eventCategory: n, eventAction: r, value: o || "", properties: d}).then((function () {
                        Ct.info(["Успешная отправка события (".concat(n, ", ").concat(r, ", ").concat(i, ") в clickstream")])
                    })).catch((function (e) {
                        Ct.error(["Ошибка при отправке события (".concat(n, ", ").concat(r, ", ").concat(i, ") в clickstream"), e])
                    }))
                } catch (d) {
                    Ct.error(["Ошибка при отправке события (".concat(n, ", ").concat(r, ", ").concat(i, ") в clickstream"), d])
                }
            }(e)
        }, Un = function () {
            return xn({
                eventAction: "sberid_Login_Show_Personalization",
                eventType: "show",
                extendedProperties: {personalization: "true"}
            })
        }, En = function (e) {
            var t = e.personalization, n = e.machineClick;
            return xn({
                eventAction: "sberid_Login_Button_Click",
                eventType: "click",
                extendedProperties: {personalization: String(t), "machine click": n}
            })
        }, Ln = {logo: !0, size: "lg", mainText: "default", personalText: "default", theme: "default", changeUser: !0},
        Tn = {lg: "48px", md: "40px", sm: "32px", xl: "56px", xs: "28px", xxl: "64px"}, Pn = "sberId_userReset",
        An = function () {
            var e, t = new CustomEvent(Pn, {});
            null == (e = document.getElementById(dt)) || e.dispatchEvent(t)
        }, On = "_sberId_button_change_user_wrap_13z8u_1", Wn = "_sberId_button_change_user_13z8u_1", jn = function () {
            return _createClass((function e(t) {
                var n = t.baseUrl, r = t.container, i = t.personalization, o = t.buttonProps, a = t.onButtonClick,
                    s = t.requestStorageAccess;
                _classCallCheck(this, e), it(this, "iframeSrc"), it(this, "baseUrl"), it(this, "onButtonClick"), it(this, "buttonElement"), it(this, "wrapperElement"), it(this, "changeUserButton"), it(this, "iframe"), it(this, "personalization"), it(this, "buttonProps"), it(this, "isPersonalization", !1), it(this, "isInit", !1), it(this, "userInfo", null), it(this, "listener"), it(this, "requestStorageAccess"), this.baseUrl = n, this.iframeSrc = "".concat(n).concat("/sdk/web/button.html"), this.personalization = i, this.requestStorageAccess = s, this.buttonElement = null, this.wrapperElement = null, this.iframe = null, this.listener = null, this.changeUserButton = null, this.buttonProps = o, this.onButtonClick = a, this.create(r), Dt(this.setUserInfo.bind(this)), function (e) {
                    var t;
                    null == (t = document.getElementById(dt)) || t.addEventListener(zt, (function (t) {
                        e(t.detail)
                    }))
                }(this.setDisabled.bind(this))
            }), [{
                key: "setUserInfo", value: function (e) {
                    this.iframe && (e ? (Ct.info(["Отображение данных о клиенте на кнопке: ", e]), Un(), this.isPersonalization = !0, this.userInfo = e) : Ct.info(["Нет данных о клиенте, отображение кнопки по умолчанию "]), this.isInit ? (Ct.info(["Инициализирован iframe кнопки, данные о пользователе отправлены в кнопку"]), this.sendUserInfoToIframe(e)) : Ct.info(["Не инициализирован iframe кнопки, данные о пользователе не отправлены"]))
                }
            }, {
                key: "sendUserInfoToIframe", value: function (e) {
                    Un(), this.sendProps({user: e, loading: !1})
                }
            }, {
                key: "setDisabled", value: function (e) {
                    this.iframe && (e ? Ct.info(["Button заблокирована"]) : Ct.info(["Button разблокирована"]), this.sendProps({
                        loading: !1,
                        disabled: e
                    }))
                }
            }, {
                key: "getInitButtonProps", value: function () {
                    return {
                        show: !0,
                        loading: this.personalization,
                        text: {main: this.buttonProps.mainText, personal: this.buttonProps.personalText},
                        showIcon: this.buttonProps.logo,
                        theme: this.buttonProps.theme,
                        size: this.buttonProps.size,
                        changeUser: this.buttonProps.changeUser,
                        requestStorageAccess: this.requestStorageAccess
                    }
                }
            }, {
                key: "createIframe", value: function () {
                    var e;
                    Ct.info("Создание iframe кнопки: ".concat(this.iframeSrc));
                    var t = "sberid-iframe-button", n = document.createElement("iframe");
                    this.wrapperElement = document.createElement("div"), this.wrapperElement.setAttribute("style", "height: ".concat(Tn[this.buttonProps.size], "; width:100%")), n.setAttribute("src", this.iframeSrc), n.setAttribute("frameborder", "0"), n.setAttribute("name", t), n.setAttribute("id", t), n.setAttribute("style", "height: ".concat(Tn[this.buttonProps.size], "; width:100%")), n.referrerPolicy = "origin", this.wrapperElement.append(n), null == (e = this.buttonElement) || e.append(this.wrapperElement), this.iframe = n, this.runButtonListener()
                }
            }, {
                key: "sendProps", value: function (e) {
                    var t, n;
                    null == (n = null == (t = this.iframe) ? void 0 : t.contentWindow) || n.postMessage(JSON.stringify({
                        type: "sberId_button_set_props",
                        value: e
                    }), "*")
                }
            }, {
                key: "destroy", value: function () {
                    var e;
                    null == (e = this.wrapperElement) || e.remove(), this.listener && window.removeEventListener("message", this.listener)
                }
            }, {
                key: "runButtonListener", value: function () {
                    var e = this, t = setTimeout((function () {
                        Ct.error("Iframe Button ошибка загрузки"), e.destroy()
                    }), 10000000);
                    this.listener = function (n) {
                        var r;
                        if (n.origin === e.baseUrl) {
                            var i = JSON.parse(n.data);
                            Ct.info(["eventData", i]), "sberId_button_click" === i.type && (null != (r = i.value) && r.storageAccess && function (e) {
                                xn({
                                    eventAction: "sberid_Login_Button_Request_Storage_API",
                                    eventType: "click",
                                    value: e ? "allow" : "deny"
                                })
                            }(i.value.storageAccess), e.onButtonClick()), "sberId_button_change_user_click" === i.type && e.showChangeUserButton(), "sberId_button_init_success" === i.type && (clearTimeout(t), Ct.info([" Button InitButtonProps ", e.getInitButtonProps()]), e.sendProps(e.getInitButtonProps()), Ct.info("Iframe Button успешно создан "), xn({
                                eventAction: "sberid_Login_Show",
                                eventType: "show",
                                extendedProperties: {personalization: "false"}
                            }), e.isInit = !0, Ct.info(["this.isPersonalization", e.isPersonalization, "this.userInfo", e.userInfo]), e.isPersonalization && e.userInfo && (Ct.info(["Данные о пользователе уже есть, отправляем их сразу после инициализации"]), e.sendUserInfoToIframe(e.userInfo)))
                        }
                    }, window.addEventListener("message", this.listener)
                }
            }, {
                key: "create", value: function (e) {
                    this.buttonElement = "string" == typeof e ? document.querySelector(e) : e, this.buttonElement ? this.createIframe() : Ct.error(["Не удалось найти контейнер для кнопки на странице", e])
                }
            }, {
                key: "showChangeUserButton", value: function () {
                    if (this.changeUserButton && this.changeUserButton.remove(), this.buttonElement) {
                        var e = document.createElement("div");
                        e.classList.add(On);
                        var t = document.createElement("div");
                        t.innerHTML = "Сменить пользователя", t.classList.add(Wn), t.onclick = function () {
                            e.remove(), An(), xn({
                                eventAction: "sberid_Login_Button_Click",
                                eventType: "click",
                                value: "Сменить пользователя",
                                extendedProperties: {personalization: !0}
                            })
                        }, e.append(t), this.buttonElement.append(e), function (e, t) {
                            var n = function (n) {
                                e.contains(n.target) || (t(), r())
                            }, r = function () {
                                document.removeEventListener("click", n)
                            };
                            document.addEventListener("click", n)
                        }(t, (function () {
                            return e.remove()
                        })), this.changeUserButton = e
                    }
                }
            }])
        }(), Nn = "_sbid_button_not_me_error_1278t_1", Dn = "_sbid_button_not_me_error_wrap_1278t_18",
        zn = "_sbid_button_not_me_error_content_1278t_25", Rn = "_sbid_button_not_me_error_text_1278t_36",
        Mn = "_sbid_button_not_me_error_button_1278t_41", Bn = function () {
            return _createClass((function e(t) {
                var n = t.baseUrl, r = t.oidc, i = t.onPersonalizationStatus;
                _classCallCheck(this, e), it(this, "iframeSrc"), it(this, "baseUrl"), it(this, "userInfo"), it(this, "clientId"), it(this, "onPersonalizationStatus"), this.baseUrl = n, this.clientId = r.client_id, this.iframeSrc = Pt(n, _objectSpread(_objectSpread({}, r), {}, {logUid: fr.logUid})), this.onPersonalizationStatus = i, function (e) {
                    var t;
                    null == (t = document.getElementById(dt)) || t.addEventListener(Pn, (function () {
                        e()
                    }))
                }(this.resetUser.bind(this))
            }), [{
                key: "init", value: (n = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                    var t;
                    return _regeneratorRuntime().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, this.getUser();
                            case 3:
                                (t = e.sent) ? (Ct.success(["Информация о клиенте:", t]), this.userInfo = t) : Ct.error(["Нет данных о клиенте"]), e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0), Ct.error(["Ошибка получения данных о клиенте"]);
                            case 10:
                                return e.prev = 10, Nt(this.userInfo), this.onPersonalizationStatus && this.onPersonalizationStatus(!!this.userInfo), e.finish(10);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[0, 7, 10, 13]])
                }))), function () {
                    return n.apply(this, arguments)
                })
            }, {
                key: "createIframe", value: function () {
                    return Tt({src: this.iframeSrc, name: "sberid-iframe-user"})
                }
            }, {
                key: "getUser", value: (t = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                    var t = this;
                    return _regeneratorRuntime().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function (e, n) {
                                    var r = setTimeout((function () {
                                        o(), Ct.error(["Информация о клиенте: прерывание получения данных по таймауту"]), n(void 0)
                                    }), 1500), i = t.createIframe(), o = function () {
                                        i.remove(), window.removeEventListener("message", a), clearTimeout(r)
                                    }, a = t.listener(e, n, o);
                                    window.addEventListener("message", a), document.body.append(i), i.onload = function () {
                                        var e;
                                        Ct.info("Запрос на получение данных о клиенте"), null == (e = i.contentWindow) || e.postMessage(JSON.stringify({type: "fetch user"}), "*")
                                    }
                                })));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), function () {
                    return t.apply(this, arguments)
                })
            }, {
                key: "listener", value: function (e, t, n) {
                    var r = this;
                    return function (i) {
                        if (i.origin === r.baseUrl) {
                            var o = JSON.parse(i.data);
                            "success user" === o.type ? (e(o.data), n()) : "error user" === o.type && (t(void 0), n(), Ct.error(["Ошибка получения данных о клиенте: ", o.data]))
                        }
                    }
                }
            }, {
                key: "resetUser", value: (e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                    var t, n;
                    return _regeneratorRuntime().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = new AbortController, n = "".concat(this.baseUrl).concat("/CSAFront/api/changeuser", "?client_id=").concat(this.clientId), setTimeout((function () {
                                    return t.abort()
                                }), 1500), e.next = 4, fetch(n, {
                                    method: "GET",
                                    credentials: "include",
                                    headers: {"Process-ID": fr.logUid, "x-subject": this.clientId},
                                    signal: t.signal
                                });
                            case 4:
                                if (!e.sent.ok) {
                                    e.next = 8;
                                    break
                                }
                                e.t0 = (Nt(void 0), !0), e.next = 9;
                                break;
                            case 8:
                                e.t0 = (this.showErrorResetUser(), !1);
                            case 9:
                                return e.abrupt("return", e.t0);
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return e.apply(this, arguments)
                })
            }, {
                key: "showErrorResetUser", value: function () {
                    var e, t = document.createElement("div");
                    t.className = Nn, t.innerHTML = '<div class="'.concat(Dn, '">\n        <div class="').concat(zn, '">\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">\n            <defs>\n            <clipPath id="clip204_5640">\n            <rect width="24" height="24" fill="white"/>\n            </clipPath>\n            </defs>\n            <g clip-path="url(#clip204_5640)">\n            <path d="M22.0001 12C22.0001 6.47705 17.5221 2 12.0001 2C6.47815 2 2.00012 6.47705 2.00012 12C2.00012 17.5229 6.47815 22 12.0001 22C17.5221 22 22.0001 17.5229 22.0001 12ZM8.00006 17.0005C7.74408 17.0005 7.48804 16.9026 7.29309 16.7075C6.90204 16.3164 6.90204 15.6846 7.29309 15.2935L10.5859 12.0002L7.29309 8.70752C6.90204 8.31641 6.90204 7.68359 7.29309 7.29248C7.68408 6.90259 8.31604 6.90259 8.70703 7.29248L12.0001 10.5859L15.2931 7.29248C15.6841 6.90259 16.316 6.90259 16.707 7.29248C17.0981 7.68359 17.0981 8.31641 16.707 8.70752L13.4142 12.0002L16.707 15.2935C17.0981 15.6846 17.0981 16.3164 16.707 16.7075C16.5121 16.9026 16.256 17.0005 16.0001 17.0005C15.7441 17.0005 15.488 16.9026 15.2931 16.7075L12.0001 13.4146L8.70703 16.7075C8.51208 16.9026 8.25604 17.0005 8.00006 17.0005Z" clip-rule="evenodd" fill-rule="evenodd" fill="#FA6D20" fill-opacity="1.000000"/>\n            </g>\n          </svg>\n          <div class="').concat(Rn, '">Не получилось забыть это имя</div>\n        </div>\n        <button class="').concat(Mn, '">Понятно</button>\n        </div>'), null == (e = document.getElementById(dt)) || e.append(t);
                    var n = document.querySelector(".".concat(Mn));
                    null == n || n.addEventListener("click", (function () {
                        t.remove()
                    }))
                }
            }]);
            var e, t, n
        }(), Gn = "_sberId_certificate_banner_13ctf_1", Kn = function () {
            return _createClass((function e(c) {
                var l = c.baseUrl, f = c.theme;
                _classCallCheck(this, e), st(this, s), st(this, u), st(this, h), st(this, d), st(this, v), st(this, m), st(this, t, void 0), it(this, "closed"), st(this, n, void 0), st(this, r, void 0), st(this, i, void 0), st(this, o, void 0), st(this, a, void 0), Ct.info("Инициализация Certificate Banner"), ct(this, n, l), ct(this, r, null), ct(this, o, null != f ? f : "white"), ct(this, a, ""), this.closed = !1, ct(this, i, document.createElement("div")), ct(this, t, "".concat(l).concat("/sdk/web/certificate-banner.html"))
            }), [{
                key: "show", value: function () {
                    ut(this, u, l).call(this)
                }
            }, {
                key: "hide", value: function () {
                    at(this, i) && (at(this, i).remove(), this.closed = !0, ct(this, i, null))
                }
            }, {
                key: "copyToBuffer", value: function () {
                    var e = this;
                    if (!navigator.clipboard) return "error";
                    navigator.clipboard.writeText(at(this, t)).then((function () {
                        return "success"
                    }), (function () {
                        return "error"
                    })).then((function (t) {
                        ct(e, a, t), ut(e, m, g).call(e, ut(e, s, c).call(e))
                    }))
                }
            }, {
                key: "createMobileLink", value: function (e) {
                    var n = e.osName, r = e.scheme, i = e.packageApp, o = e.url, a = "", s = at(this, t) || "about:blank";
                    a = "ios" === n && r ? r + s : "android" === n ? "intent://".concat(s.replace(/https?:\/\//, ""), "#Intent;scheme=https;package=").concat(i, ";end") : o, this.openInNewTab(a)
                }
            }, {
                key: "openInNewTab", value: function (e) {
                    Object.assign(document.createElement("a"), {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: e
                    }).click()
                }
            }])
        }();
    t = new WeakMap, n = new WeakMap, r = new WeakMap, i = new WeakMap, o = new WeakMap, a = new WeakMap, s = new WeakSet, c = function () {
        return {theme: at(this, o), link: at(this, t), statusCopied: at(this, a)}
    }, u = new WeakSet, l = function () {
        var e;
        null == (e = at(this, i)) || e.classList.add(Gn);
        var t = document.getElementsByTagName("body")[0];
        at(this, i) && t.appendChild(at(this, i)), this.closed = !1, ut(this, h, f).call(this)
    }, h = new WeakSet, f = function () {
        var e, n = this;
        Ct.info("Создание iframe Certificate Banner: ".concat(at(this, t)));
        var o = "sberid-iframe-certificate-banner", a = document.createElement("iframe");
        a.setAttribute("src", at(this, t)), a.setAttribute("frameborder", "0"), a.setAttribute("allow", "clipboard-write"), a.setAttribute("name", o), a.setAttribute("id", o), a.style.width = "100%", a.style.height = "100%", a.style.zIndex = "9999", a.referrerPolicy = "origin", null == (e = at(this, i)) || e.append(a), a.onload = function () {
            Ct.info("Iframe Certificate Banner успешно создан "), ct(n, r, a), ut(n, m, g).call(n, ut(n, s, c).call(n)), ut(n, v, b).bind(n)()
        }, a.onerror = function () {
            Ct.error("Iframe Certificate Banner ошибка загрузки"), a.remove()
        }
    }, d = new WeakSet, p = function () {
        this.hide()
    }, v = new WeakSet, b = function () {
        var e = this;
        window.addEventListener("message", (function (t) {
            if (t.origin === at(e, n)) {
                var r = JSON.parse(t.data), i = r.type, o = r.value;
                switch (i) {
                    case"sberId_certificate-banner_close_click":
                        Ct.info("Закрыли баннер"), e.hide();
                        break;
                    case"sberId_certificate-banner_certificate_download_click":
                        Ct.info("Загрузка сертификатов"), e.openInNewTab(o);
                        break;
                    case"sberId_certificate-banner_copy_link_click":
                        Ct.info("Скопирована ссылка"), e.copyToBuffer();
                        break;
                    case"sberId_certificate-banner_browser_ya_click":
                        Ct.info("Открыть Яндекс"), e.openInNewTab(o);
                        break;
                    case"sberId_certificate-banner_browser_ya_click_mobile":
                        Ct.info("Открыть Яндекс с мобильного устройства"), e.createMobileLink(o);
                        break;
                    case"sberId_certificate-banner_browser_atom_click":
                        Ct.info("Открыть Атом"), e.openInNewTab(o);
                        break;
                    case"sberId_certificate-banner_browser_atom_click_mobile":
                        Ct.info("Открыть Атом с мобильного устройства"), e.createMobileLink(o);
                        break;
                    case"sberId_certificate-banner_outside_click":
                        Ct.info("Клик вне баннера, закрытие баннера"), ut(e, d, p).call(e);
                        break;
                    default:
                        Ct.info("Неверный тип сообщения")
                }
            }
        }))
    }, m = new WeakSet, g = function (e) {
        var t, n;
        null == (n = null == (t = at(this, r)) ? void 0 : t.contentWindow) || n.postMessage(JSON.stringify({
            type: "sberId_certificate-banner_set_props",
            value: e
        }), "*")
    };
    var Fn = _createClass((function e() {
        var t = this;
        _classCallCheck(this, e), it(this, "cache", {}), it(this, "set", (function (e, n) {
            t.cache[e] = {data: n}
        })), it(this, "get", (function (e) {
            var n = t.cache[e];
            return new Promise(n ? function (e) {
                e(n.data)
            } : function (e) {
                e(void 0)
            })
        })), it(this, "remove", (function (e) {
            delete t.cache[e]
        })), it(this, "clear", (function () {
            t.cache = {}
        })), it(this, "all", (function () {
            return Object.keys(t.cache)
        })), e.instance = this
    }));
    it(Fn, "instance");
    var qn = Fn, Jn = function () {
        return _createClass((function e(t) {
            _classCallCheck(this, e), it(this, "cache", new qn), it(this, "checkUrl"), it(this, "cacheKey", "hasCertificate"), this.checkUrl = t
        }), [{
            key: "timeout", value: function (e, t) {
                return new Promise((function (n, r) {
                    setTimeout((function () {
                        r(Error)
                    }), e), t.then(n, r)
                }))
            }
        }, {
            key: "onCheck", value: (e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                var t;
                return _regeneratorRuntime().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (this.checkUrl) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 2:
                            return e.next = 4, this.cache.get(this.cacheKey);
                        case 4:
                            if (!e.sent) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", !0);
                        case 6:
                            return e.prev = 6, e.next = 9, this.timeout(1e4, fetch(this.checkUrl, {
                                method: "GET",
                                mode: "no-cors"
                            }).then((function () {
                                return {success: !0}
                            })).catch((function () {
                                return {success: !1}
                            })));
                        case 9:
                            return t = e.sent, e.abrupt("return", (t.success && this.cache.set(this.cacheKey, !0), t.success));
                        case 13:
                            return e.prev = 13, e.t0 = e.catch(6), e.abrupt("return", !1);
                        case 16:
                        case"end":
                            return e.stop()
                    }
                }), e, this, [[6, 13]])
            }))), function () {
                return e.apply(this, arguments)
            })
        }]);
        var e
    }(), Hn = function () {
        return _createClass((function e(t) {
            var n = t.utmProxyDisabled, r = t.baseUrl, i = t.oidc, o = t.logUid, a = t.deeplink;
            _classCallCheck(this, e), it(this, "proxyParams", ["authApp", "app_redirect_uri"]), it(this, "url", ""), it(this, "deeplink"), Ct.info(["Link начало создания"]);
            var s = function () {
                var e;
                try {
                    return Lt.some((function (e) {
                        var t;
                        return null == (t = null == navigator ? void 0 : navigator.userAgent) ? void 0 : t.match(e)
                    })) || _typeof(null == (e = null == window ? void 0 : window.screen) ? void 0 : e.orientation) < "u"
                } catch (e) {
                    return !1
                }
            }();
            if (n || (this.proxyParams = [].concat(_toConsumableArray(this.proxyParams), ft)), a && s && this.checkDeeplink(a)) {
                Ct.info(["Link генерация Deeplink"]);
                var c = xt(), u = decodeURIComponent(c.get("sberIDRedirect") || ""), l = this.createUrl(u, i, o);
                Ct.info(["Link создан Deeplink", l]), this.deeplink = l, "auto" === a.mode && (window.location.href = l, Ct.info(["Link авто-переход по ссылке Deeplink", l]))
            }
            this.url = this.createUrl(r, i, o), Ct.info(["Link создана", this.url])
        }), [{
            key: "goTo", value: function () {
                this.url ? (window.location.href = this.url, Ct.info(["Link переход по ссылке", this.url])) : Ct.error("Link переход не возможен отсутствует ссылка")
            }
        }, {
            key: "getLink", value: function () {
                return Ct.info(["Link получение ссылки", this.url]), this.url
            }
        }, {
            key: "getDeeplink", value: function () {
                return Ct.info(["Link получение ссылки Deeplink", this.deeplink]), this.deeplink
            }
        }, {
            key: "createUrl", value: function (e, t, n) {
                Ct.info(["Link создание ссылки"]);
                var r = new URL("".concat(e).concat("/CSAFront/oidc/authorize.do")), i = xt(), o = {};
                return this.proxyParams.forEach((function (e) {
                    i.has(e) && (o[e] = i.get(e))
                })), Ut(r, _objectSpread(_objectSpread(_objectSpread({}, t), o), {}, {
                    channel: "browser",
                    isCloud: "true",
                    logUid: n
                })).toString()
            }
        }, {
            key: "checkDeeplink", value: function (e) {
                var t, n, r = xt(), i = decodeURIComponent(r.get("sberIDRedirect") || ""),
                    o = (null == (t = null == e ? void 0 : e.allowSberIDRedirects) ? void 0 : t.includes(i)) || 0 === (null == (n = null == e ? void 0 : e.allowSberIDRedirects) ? void 0 : n.length);
                return !!(null != e && e.enabled && i && o)
            }
        }])
    }(), Vn = function (e) {
        return e.topRight = "top-right", e.bottomRight = "bottom-right", e.topLeft = "top-left", e.bottomLeft = "bottom-left", e
    }(Vn || {}), Yn = {
        autoCloseDelay: 90,
        autoClose: !1,
        enable: !1,
        position: Vn.bottomRight,
        theme: "white",
        serviceName: "сервис",
        textType: "default",
        textOfferExtension: "",
        onNotificationBannerClose: function () {
        },
        onNotificationBannerOpen: function () {
        }
    }, Xn = "sbid_notification_banner_close_count", Zn = "data-position", $n = "data-hide", Qn = function (e) {
        return e ? "pers_banner" : "banner"
    }, er = function (e) {
        var t = e.bannerText, n = e.bannerTheme, r = e.isPersonalization;
        xn({
            eventCategory: "Login",
            eventAction: "oidc-cloud_Auth_Banner screen",
            eventType: "Show",
            extendedProperties: {banner_text: t, banner_theme: n, source_type: Qn(r)}
        })
    }, tr = function () {
        return _createClass((function e() {
            _classCallCheck(this, e)
        }), null, [{
            key: "get", value: function (e) {
                var t = document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), "=([^;]*)")));
                return t ? decodeURIComponent(t[1]) : void 0
            }
        }, {
            key: "set", value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.expires;
                if ("number" == typeof r && r) {
                    var i = new Date;
                    i.setTime(i.getTime() + 1e3 * r), r = n.expires = i
                }
                r instanceof Date && (n.expires = r.toUTCString()), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                var o = "".concat(e, "=").concat(t);
                for (var a in n) n[a] && (o += "; ".concat(a), !0 !== n[a] && (o += "=".concat(n[a].split(";")[0])));
                document.cookie = o
            }
        }, {
            key: "delete", value: function (e) {
                this.set(e, "", {expires: -1})
            }
        }])
    }(), nr = "_sberId_notification_14d4q_8", rr = "_sberId_notification_iframe_14d4q_53", ir = function () {
        return _createClass((function e(t) {
            var n = t.onButtonClick, r = t.baseUrl, i = t.position, o = t.personalization, a = t.theme, s = t.textType,
                c = t.serviceName, u = t.textOfferExtension;
            _classCallCheck(this, e), st(this, O), st(this, j), st(this, D), st(this, R), st(this, B), st(this, K), st(this, q), st(this, H), st(this, y, void 0), st(this, w, void 0), st(this, _, void 0), st(this, k, void 0), st(this, S, void 0), st(this, I, void 0), st(this, C, void 0), st(this, x, void 0), st(this, U, !1), st(this, E, void 0), st(this, L, void 0), st(this, T, void 0), st(this, P, void 0), st(this, A, void 0), Ct.info(["Инициализация Notification", {
                baseUrl: r,
                position: i,
                personalization: o,
                theme: a,
                textType: s,
                serviceName: c
            }]), ct(this, _, r), ct(this, C, !!tr.get(Xn)), ct(this, x, o), ct(this, I, i), ct(this, k, null), ct(this, A, null), ct(this, L, null != c ? c : null), ct(this, E, a), ct(this, P, s), ct(this, T, u || ""), ct(this, S, null), ct(this, y, "".concat(r).concat("/sdk/web/notification.html")), ct(this, w, n), at(this, C) || ut(this, B, G).call(this)
        }), [{
            key: "hide", value: function () {
                var e;
                Ct.info("Notification скрытие"), ct(this, C, !0), null == (e = at(this, S)) || e.setAttribute($n, String(at(this, C)))
            }
        }, {
            key: "show", value: function () {
                var e = this;
                at(this, S) || ut(this, B, G).call(this), at(this, C) && (Ct.info("Notification показ"), ct(this, C, !1), setTimeout((function () {
                    var t;
                    null == (t = at(e, S)) || t.setAttribute($n, String(at(e, C)))
                }), 50))
            }
        }, {
            key: "getIsHide", value: function () {
                return at(this, C)
            }
        }, {
            key: "setPosition", value: function (e) {
                var t;
                null == (t = at(this, S)) || t.setAttribute(Zn, e)
            }
        }, {
            key: "getPosition", value: function () {
                var e;
                return null == (e = at(this, S)) ? void 0 : e.getAttribute(Zn)
            }
        }, {
            key: "setTheme", value: function (e) {
                ct(this, E, e), ut(this, D, z).call(this, {theme: at(this, E)})
            }
        }, {
            key: "getTheme", value: function () {
                return at(this, E)
            }
        }, {
            key: "destroy", value: function () {
                var e;
                null == (e = at(this, S)) || e.remove(), at(this, A) && window.removeEventListener("message", at(this, A))
            }
        }])
    }();
    y = new WeakMap, w = new WeakMap, _ = new WeakMap, k = new WeakMap, S = new WeakMap, I = new WeakMap, C = new WeakMap, x = new WeakMap, U = new WeakMap, E = new WeakMap, L = new WeakMap, T = new WeakMap, P = new WeakMap, A = new WeakMap, O = new WeakSet, W = function () {
        return {
            loading: at(this, x),
            theme: at(this, E),
            serviceName: at(this, L),
            text: at(this, P),
            textOfferExtension: at(this, T)
        }
    }, j = new WeakSet, N = function () {
        var e = this;
        ct(this, A, (function (t) {
            if (t.origin === at(e, _)) {
                var n = JSON.parse(t.data);
                "sberId_notification_iframe_height" === n.type && at(e, k) && (at(e, k).style.height = n.value.height), "sberId_notification_button_click" === n.type && (function (e) {
                    var t = e.bannerText, n = e.bannerTheme, r = e.isPersonalization;
                    xn({
                        eventCategory: "Login",
                        eventAction: "oidc-cloud_Auth_Banner screen",
                        eventType: "Click",
                        value: r ? "Продолжить" : "Войти по Сбер ID",
                        extendedProperties: {banner_text: t, banner_theme: n, source_type: Qn(r)}
                    })
                }({
                    bannerTheme: at(e, E),
                    isPersonalization: at(e, U),
                    bannerText: at(e, P)
                }), at(e, w).call(e)), "sberId_notification_close_click" === n.type && (function (e) {
                    var t = e.bannerText, n = e.bannerTheme, r = e.isPersonalization;
                    xn({
                        eventCategory: "Login",
                        eventAction: "oidc-cloud_Auth_Banner screen",
                        eventType: "Click",
                        value: "Закрытие",
                        extendedProperties: {banner_text: t, banner_theme: n, source_type: Qn(r)}
                    })
                }({
                    bannerTheme: at(e, E),
                    isPersonalization: at(e, U),
                    bannerText: at(e, P)
                }), ut(e, q, J).call(e)), "sberId_notification_button_not_me_click" === n.type && (function (e) {
                    var t = e.bannerText, n = e.bannerTheme, r = e.isPersonalization;
                    xn({
                        eventCategory: "Login",
                        eventAction: "oidc-cloud_Auth_Banner screen",
                        eventType: "Click",
                        value: "Это не Я",
                        extendedProperties: {banner_text: t, banner_theme: n, source_type: Qn(r)}
                    })
                }({bannerTheme: at(e, E), isPersonalization: at(e, U), bannerText: at(e, P)}), An())
            }
        })), window.addEventListener("message", at(this, A))
    }, D = new WeakSet, z = function (e) {
        var t, n;
        null == (n = null == (t = at(this, k)) ? void 0 : t.contentWindow) || n.postMessage(JSON.stringify({
            type: "sberId_notification_set_props",
            value: e
        }), "*")
    }, R = new WeakSet, M = function () {
        var e, t = this;
        Ct.info("Создание iframe Notification: ".concat(at(this, y)));
        var n = "sberid-iframe-notification", r = document.createElement("iframe");
        r.setAttribute("src", at(this, y)), r.setAttribute("frameborder", "0"), r.setAttribute("name", n), r.setAttribute("id", n), r.referrerPolicy = "origin", r.classList.add(rr), null == (e = at(this, S)) || e.append(r), r.onload = function () {
            Ct.info("Iframe Notification успешно создан"), ct(t, k, r), ut(t, D, z).call(t, ut(t, O, W).call(t)), ut(t, j, N).bind(t)()
        }, r.onerror = function () {
            Ct.error("Iframe Notification ошибка загрузки"), r.remove()
        }
    }, B = new WeakSet, G = function () {
        var e = this;
        at(this, x) ? Dt(ut(this, K, F).bind(this)) : er({
            bannerTheme: at(this, E),
            isPersonalization: !1,
            bannerText: at(this, P)
        }), ct(this, S, document.createElement("div")), at(this, S).setAttribute("data-position", at(this, I)), at(this, S).classList.add(nr);
        var t = document.getElementById(dt);
        null == t || t.appendChild(at(this, S)), ut(this, R, M).call(this), setTimeout((function () {
            var t;
            null == (t = at(e, S)) || t.setAttribute($n, "false")
        }), 50)
    }, K = new WeakSet, F = function (e) {
        at(this, k) && (e ? (Ct.info(["Отображение данных о клиенте Notification: ", e]), ct(this, U, !0)) : Ct.info(["Нет данных о клиенте, отображение Notification по умолчанию "]), er({
            bannerTheme: at(this, E),
            isPersonalization: !!e,
            bannerText: at(this, P)
        }), ut(this, D, z).call(this, {user: e, loading: !1}))
    }, q = new WeakSet, J = function () {
        this.hide();
        var e = +tr.get(Xn) || 0, t = new Date;
        tr.set("sbid_notification_banner_closed", "1", {
            path: "/",
            expires: ut(this, H, V).call(this, e)
        }), tr.set(Xn, "".concat(e + 1), {path: "/", expires: new Date(t.getFullYear() + 1, t.getMonth(), t.getDate())})
    }, H = new WeakSet, V = function (e) {
        var t = [7200, 86400, 604800, 2419200], n = e || 0;
        return e >= t.length && (n = t.length - 1), t[n]
    };
    var or = function () {
        return _createClass((function e() {
            _classCallCheck(this, e)
        }), null, [{
            key: "checkIsAllow", value: function (e, t) {
                return !t.includes(e)
            }
        }])
    }(), ar = {
        metric: {
            enabled: !0,
            url: "https://ext.clickstream.sberbank.ru/metrics/inner-partners/sber-id",
            apiKey: "5b63c7457b46f2e2c0c81062da0efbd628c62940db7590f9e97aecac87a43f05"
        },
        blackList: {clientIds: []},
        certificates: {checkUrl: ht, enabled: !1},
        functionality: {buttonLoadTimeout: 7e3, notificationLoadTimeout: 7e3}
    }, sr = function () {
        return _createClass((function e(t) {
            var n = t.baseUrl, r = t.clientId;
            _classCallCheck(this, e), st(this, $), st(this, ee), st(this, ne), st(this, Y, void 0), st(this, X, void 0), st(this, Z, void 0), Ct.info("Configure инициализация"), ct(this, Y, null), ct(this, X, n), ct(this, Z, r)
        }), [{
            key: "getConfigurationFromServer",
            value: (t = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                return _regeneratorRuntime().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ut(this, ee, te).call(this);
                        case 2:
                            return e.abrupt("return", at(this, Y) || ar);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function () {
                return t.apply(this, arguments)
            })
        }, {
            key: "getConfiguration", value: (e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                var n;
                return _regeneratorRuntime().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, this.getConfigurationFromServer();
                        case 2:
                            return n = e.sent, e.abrupt("return", (ut(this, $, Q).call(this, t), ut(this, ne, re).call(this, t, n)));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            }))), function (t) {
                return e.apply(this, arguments)
            })
        }]);
        var e, t
    }();
    Y = new WeakMap, X = new WeakMap, Z = new WeakMap, $ = new WeakSet, Q = function (e) {
        var t;
        null != (t = e.fastLogin) && t.enable && !e.onSuccessCallback && console.error("SberIdSDK: Не корректная конфигурация, отсутствует обязательная callback функция onSuccessCallback, при использовании механизма FastLogin")
    }, ee = new WeakSet, te = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
            var t, n, r, i;
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (!at(this, Y)) {
                            e.next = 3;
                            break
                        }
                        return Ct.info("Configure конфигурация уже загружена, настройки взяты из памяти"), e.abrupt("return");
                    case 3:
                        return e.prev = 3, e.next = 6, fetch("".concat(at(this, X)).concat("/sdk/web/config.json"), {credentials: "omit"});
                    case 6:
                        return i = e.sent, e.t0 = ct, e.t1 = this, e.t2 = Y, e.next = 12, i.json();
                    case 12:
                        e.t3 = e.sent, (0, e.t0)(e.t1, e.t2, e.t3), window.configSberIdSDK = _objectSpread(_objectSpread({}, window.configSberIdSDK), {}, {
                            metric: null == (t = at(this, Y)) ? void 0 : t.metric,
                            functionality: null !== (r = null == (n = at(this, Y)) ? void 0 : n.functionality) && void 0 !== r ? r : ar.functionality
                        }), Ct.success("Configure конфигурация успешно загрузилась"), e.next = 21;
                        break;
                    case 18:
                        e.prev = 18, e.t4 = e.catch(3), ct(this, Y, ar), window.configSberIdSDK = _objectSpread(_objectSpread({}, window.configSberIdSDK), {}, {
                            metric: ar.metric,
                            functionality: ar.functionality
                        }), Ct.error(["Configure не удалось загрузить конфигурацию", e.t4]);
                    case 21:
                    case"end":
                        return e.stop()
                }
            }), e, this, [[3, 18]])
        })));
        return function () {
            return e.apply(this, arguments)
        }
    }(), ne = new WeakSet, re = function (e, t) {
        var n, r;
        return _objectSpread(_objectSpread({}, t), {}, {
            personalization: {enabled: !!e.personalization},
            fastLogin: {enabled: !(null == (n = e.fastLogin) || !n.enable)},
            notification: {enabled: !(null == (r = e.notification) || !r.enable)}
        })
    };
    var cr = {width: 875, height: 745, top: 0, left: 0}, ur = function () {
        return _createClass((function e(t) {
            var n = t.onErrorCallback, r = t.onSuccessCallback;
            _classCallCheck(this, e), st(this, se), st(this, ue), st(this, he), st(this, ie, void 0), st(this, oe, void 0), st(this, ae, void 0), ct(this, ie, null), ct(this, oe, n), ct(this, ae, r)
        }), [{
            key: "createDialog", value: function (e) {
                var t = this, n = cr, r = _typeof(window.screenX) < "u" ? window.screenX : window.screenLeft,
                    i = _typeof(window.screenY) < "u" ? window.screenY : window.screenTop;
                if (n.left = parseInt("".concat(r + (window.innerWidth - n.width) / 2), 10), n.top = parseInt("".concat(i + (window.innerHeight - n.height) / 2), 10), ct(this, ie, window.open(e, "_blank", Object.keys(n).map((function (e) {
                    return "".concat(e, "=").concat(n[e])
                })).join(","))), at(this, ie)) {
                    var o = ut(this, ue, le).call(this);
                    window.onbeforeunload = function () {
                        var e;
                        null == (e = at(t, ie)) || e.close()
                    };
                    var a = setInterval((function () {
                        var e;
                        null != (e = at(t, ie)) && e.closed && (clearInterval(a), o(), ut(t, he, fe).call(t))
                    }), 100)
                }
            }
        }])
    }();
    ie = new WeakMap, oe = new WeakMap, ae = new WeakMap, se = new WeakSet, ce = function (e) {
        var t;
        if ("react-devtools-content-script" !== e.data.source && "string" == typeof e.data) try {
            var n = JSON.parse(e.data);
            n && ("success" === n.status || "error" === n.status) && ("success" === n.status && (Ct.success(["OpenInWindow успешный вход", n]), at(this, ae).call(this, n)), "error" === n.status && (Ct.error(["OpenInWindow ошибка входа", n]), at(this, oe).call(this, n)), null == (t = at(this, ie)) || t.close(), ct(this, ie, null))
        } catch (n) {
            Ct.error(["Ошибка при обработке postMessage", n])
        }
    }, ue = new WeakSet, le = function () {
        var e = ut(this, se, ce).bind(this);
        return window.addEventListener("message", e), Ct.info(["OpenInWindow добавляем обработчики при открытии окна."]), function () {
            return Ct.info(["OpenInWindow удаляем обработчики открытого окна."]), window.removeEventListener("message", e)
        }
    }, he = new WeakSet, fe = function () {
        ct(this, ie, null), Ct.info("OpenInWindow закрытие окна авторизации"), at(this, oe).call(this, {
            code: "error",
            error: "window_closed",
            description: pt.window_closed
        })
    };
    var lr = function (e) {
        return e.fastLogin = "fast login", e.aggressiveLogin = "aggressive login", e.autoUpdateCookie = "auto update cookie", e.none = "none", e
    }(lr || {}), hr = function () {
        function e(t) {
            var n;
            _classCallCheck(this, e), st(this, Se), st(this, Ce), st(this, Ue), st(this, Le), st(this, Pe), st(this, Oe), st(this, je), st(this, De), st(this, Re), st(this, Be), st(this, Ke), st(this, qe), st(this, He), st(this, de, void 0), st(this, pe, void 0), st(this, ve, void 0), st(this, be, void 0), st(this, me, void 0), st(this, ge, void 0), st(this, ye, void 0), st(this, we, void 0), st(this, _e, void 0), st(this, ke, void 0), ct(this, ke, _objectSpread({}, t)), Ct.setEnable(!!t.debug), ct(this, _e, at(this, ke).onButtonClick), null == (n = document.getElementById(dt)) || n.remove()
        }

        return _createClass(e, [{
            key: "init", value: (n = _asyncToGenerator(_regeneratorRuntime().mark((function t() {
                var n, r, i, o, a, s, c = this;
                return _regeneratorRuntime().wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return n = at(this, ke), r = n.baseUrl, i = void 0 === r ? lt : r, o = n.oidc, t.next = 6, new sr({
                                baseUrl: i,
                                clientId: o.client_id
                            }).getConfiguration(at(this, ke));
                        case 6:
                            if (a = t.sent, Ct.info(["Конфигурация", a]), Ct.info(["Конфигурация партнера", at(this, ke)]), (s = document.createElement("div")).setAttribute("id", dt), document.body.append(s), Cn({
                                logUid: e.logUid,
                                clientId: at(this, ke).oidc.client_id,
                                url: a.metric.url,
                                apiKey: a.metric.url
                            }), xn({
                                eventAction: "sberid_Login_Initialization",
                                eventType: "show"
                            }), !ut(this, Se, Ie).call(this, o.client_id, a.blackList.clientIds)) {
                                t.next = 27;
                                break
                            }
                            if (ut(this, Ce, xe).call(this, {
                                baseUrl: i,
                                oidc: o,
                                utmProxyDisabled: at(this, ke).utmProxyDisabled
                            }), a.personalization.enabled && ut(this, Le, Te).call(this, {
                                baseUrl: i,
                                oidc: o,
                                personalization: a.personalization.enabled,
                                onPersonalizationStatus: at(this, ke).onPersonalizationStatus
                            }), a.fastLogin.enabled && ut(this, Ue, Ee).call(this, {
                                oidc: o,
                                baseUrl: i,
                                fastLogin: at(this, ke).fastLogin,
                                onSuccessCallback: at(this, ke).onSuccessCallback
                            }), t.t0 = a.certificates.enabled, !t.t0) {
                                t.next = 22;
                                break
                            }
                            return t.next = 17, new Jn(a.certificates.checkUrl || ht).onCheck();
                        case 17:
                            if (!t.sent) {
                                t.next = 21;
                                break
                            }
                            Ct.info("Сертификаты найдены"), t.next = 22;
                            break;
                        case 21:
                            Ct.info("Сертификаты не найдены"), ut(this, Oe, We).call(this, {baseUrl: i});
                        case 22:
                            at(this, ke).container && (Ct.info(["checkStorageAccess", at(this, ke).checkStorageAccess]), ut(this, Pe, Ae).call(this, {
                                baseUrl: i,
                                container: at(this, ke).container,
                                buttonProps: at(this, ke).buttonProps,
                                personalization: a.personalization.enabled,
                                requestStorageAccess: at(this, ke).checkStorageAccess
                            })), a.notification.enabled ? ut(this, je, Ne).call(this, {
                                baseUrl: i,
                                notification: at(this, ke).notification,
                                personalization: at(this, ke).personalization
                            }) : Ct.warn(["Баннер функционал отключен"]), "popup" === at(this, ke).display && ut(this, De, ze).call(this, {
                                onErrorCallback: at(this, ke).onErrorCallback,
                                onSuccessCallback: at(this, ke).onSuccessCallback
                            }), t.next = 28;
                            break;
                        case 27:
                            throw xn({
                                eventAction: "sberid_Login_Show",
                                eventType: "error",
                                value: "partner not found",
                                extendedProperties: {personalization: "false"}
                            }), new Error("SberId: текущий client_id заблокирован");
                        case 28:
                            return t.abrupt("return", {
                                notification: at(this, ye), getLink: function () {
                                    var e;
                                    return null == (e = at(c, be)) ? void 0 : e.getLink()
                                }, getDeeplink: function () {
                                    var e;
                                    return null == (e = at(c, be)) ? void 0 : e.getDeeplink()
                                }, enable: function () {
                                    return ut(c, qe, Je).call(c)
                                }, disable: function () {
                                    return ut(c, Ke, Fe).call(c)
                                }, destroy: function () {
                                    return c.destroy()
                                }
                            });
                        case 29:
                        case"end":
                            return t.stop()
                    }
                }), t, this)
            }))), function () {
                return n.apply(this, arguments)
            })
        }, {
            key: "destroy", value: function () {
                var e, t;
                null == (e = at(this, ve)) || e.destroy(), null == (t = at(this, ye)) || t.destroy()
            }
        }], [{
            key: "getVersion", value: function () {
                return "1.2.0"
            }
        }, {
            key: "sendOtherAuth", value: (t = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                var n, r, i, o, a, s, c, u;
                return _regeneratorRuntime().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.baseUrl, r = t.authService, i = t.client_id, o = t.successAuth, a = void 0 === o ? null : o, s = t.isUserNew, c = void 0 === s ? null : s, u = ar.metric, !window.configSberIdSDK.metric) {
                                e.next = 6;
                                break
                            }
                            u = window.configSberIdSDK.metric, e.next = 9;
                            break;
                        case 6:
                            return e.next = 8, new sr({baseUrl: n || lt, clientId: i}).getConfigurationFromServer();
                        case 8:
                            u = e.sent.metric;
                        case 9:
                            Cn({logUid: "", clientId: i, apiKey: u.apiKey, url: u.url}), xn({
                                eventCategory: "",
                                eventAction: "",
                                eventType: "Other Authorization",
                                extendedProperties: {
                                    clientID: i,
                                    authService: r,
                                    successAuth: a,
                                    chanel: "Web",
                                    isUserNew: c
                                }
                            });
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            }))), function (e) {
                return t.apply(this, arguments)
            })
        }, {
            key: "pauseAutoLogin", value: function (e) {
                var t = Number(tr.get("sbid_exit_auto_login_count")) || 0, n = new Date;
                tr.set("sbid_exited_from_auto_login", "1", {
                    domain: e,
                    path: "/",
                    expires: Et(t)
                }), tr.set("sbid_exit_auto_login_count", "".concat(t + 1), {
                    domain: e,
                    path: "/",
                    expires: new Date(n.getFullYear() + 1, n.getMonth(), n.getDate())
                })
            }
        }]);
        var t, n
    }();
    de = new WeakMap, pe = new WeakMap, ve = new WeakMap, be = new WeakMap, me = new WeakMap, ge = new WeakMap, ye = new WeakMap, we = new WeakMap, _e = new WeakMap, ke = new WeakMap, Se = new WeakSet, Ie = function (e, t) {
        return or.checkIsAllow(e, t)
    }, Ce = new WeakSet, xe = function (e) {
        var t = e.baseUrl, n = e.oidc, r = e.utmProxyDisabled;
        ct(this, be, new Hn({
            baseUrl: t,
            oidc: n,
            utmProxyDisabled: !!r,
            logUid: hr.logUid,
            deeplink: at(this, ke).deeplink || null
        }))
    }, Ue = new WeakSet, Ee = function (e) {
        var t, n, r = e.oidc, i = e.baseUrl, o = e.fastLogin, a = e.onSuccessCallback,
            s = _objectSpread(_objectSpread({}, Wt), o),
            c = !!parseInt(null !== (t = tr.get("sbid_exited_from_auto_login")) && void 0 !== t ? t : "0", 10);
        if ("auto" !== s.mode || c) if ("default" === s.mode || c) {
            var u = new Ot({oidc: r, baseUrl: i, machineClick: At.FAST_LOGIN, timeout: s.timeout});
            ct(this, de, u), ct(this, pe, (function () {
                return u.authorization().then((function (e) {
                    return e.success ? (Ct.success(["Успешный fastLogin", e.data]), null == a || a(e.data), Promise.resolve(!0)) : (Ct.error(["Не удалось войти через fastLogin", e.data]), s.onErrorDefaultMode() ? Promise.resolve(!1) : Promise.resolve(!0))
                })).catch((function (e) {
                    return Ct.error(["Не удалось войти через fastLogin", e]), s.onErrorDefaultMode() ? Promise.resolve(!1) : Promise.resolve(!0)
                }))
            }))
        } else console.error("SberIdSDK: Не корректная конфигурация, значение fastLogin.mode должно быть auto или default"); else ct(this, de, new Ot({
            oidc: r,
            baseUrl: i,
            machineClick: At.AGRESSIVE_LOGIN,
            timeout: s.timeout
        })), En({
            personalization: !(null == (n = at(this, ve)) || !n.isPersonalization),
            machineClick: lr.aggressiveLogin
        }), at(this, de).authorization().then((function (e) {
            e.success ? (Ct.success(["Успешный авто вход", e.data]), null == a || a(e.data)) : (Ct.error(["Ошибка авто входа", e.data]), null == s || s.onErrorAutoMode())
        })).catch((function (e) {
            Ct.error(["Ошибка авто входа", e]), null == s || s.onErrorAutoMode()
        }))
    }, Le = new WeakSet, Te = function (e) {
        var t = e.baseUrl, n = e.oidc, r = e.onPersonalizationStatus;
        ct(this, we, new Bn({baseUrl: t, oidc: n, onPersonalizationStatus: r})), at(this, we).init()
    }, Pe = new WeakSet, Ae = function (e) {
        var t = e.container, n = e.baseUrl, r = e.personalization, i = e.buttonProps, o = e.requestStorageAccess;
        ct(this, ve, new jn({
            container: t,
            baseUrl: n,
            personalization: !!r,
            buttonProps: _objectSpread(_objectSpread({}, Ln), Object.entries(i || {}).reduce((function (e, t) {
                var n = _slicedToArray(t, 2), r = n[0], i = n[1];
                return void 0 === i || (e[r] = i), e
            }), {})),
            onButtonClick: ut(this, Re, Me).bind(this),
            requestStorageAccess: !!o
        }))
    }, Oe = new WeakSet, We = function (e) {
        var t = e.baseUrl;
        ct(this, me, new Kn({baseUrl: t}))
    }, je = new WeakSet, Ne = function (e) {
        var t = e.baseUrl, n = e.notification, r = e.personalization, i = _objectSpread(_objectSpread({}, Yn), n);
        ct(this, ye, new ir({
            baseUrl: t,
            onButtonClick: ut(this, Re, Me).bind(this),
            position: i.position,
            personalization: !!r,
            theme: i.theme,
            textType: i.textType,
            serviceName: i.serviceName,
            textOfferExtension: i.textOfferExtension
        }))
    }, De = new WeakSet, ze = function (e) {
        var t = e.onErrorCallback, n = void 0 === t ? function () {
        } : t, r = e.onSuccessCallback;
        ct(this, ge, new ur({
            onErrorCallback: n, onSuccessCallback: void 0 === r ? function () {
            } : r
        }))
    }, Re = new WeakSet, Me = function () {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
            var t, n, r;
            return _regeneratorRuntime().wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (Ct.info("Выполнение функции onButtonClick"), Ct.info("Наличие onButtonClick: ".concat(!!at(this, _e))), Ct.info("Наличие fastLoginOnClick: ".concat(!!at(this, pe))), !at(this, me) || at(this, me).closed) {
                            e.next = 7;
                            break
                        }
                        at(this, me).show(), e.next = 18;
                        break;
                    case 7:
                        if (null == (t = at(this, _e)) || t.call(this), !at(this, pe)) {
                            e.next = 17;
                            break
                        }
                        return En({
                            personalization: !(null == (n = at(this, ve)) || !n.isPersonalization),
                            machineClick: lr.fastLogin
                        }), e.next = 12, at(this, pe).call(this);
                    case 12:
                        if (e.t0 = e.sent, e.t0) {
                            e.next = 15;
                            break
                        }
                        ut(this, Be, Ge).call(this);
                    case 15:
                        e.next = 18;
                        break;
                    case 17:
                        En({
                            personalization: !(null == (r = at(this, ve)) || !r.isPersonalization),
                            machineClick: lr.none
                        }), ut(this, Be, Ge).call(this);
                    case 18:
                    case"end":
                        return e.stop()
                }
            }), e, this)
        })));
        return function () {
            return e.apply(this, arguments)
        }
    }(), Be = new WeakSet, Ge = function () {
        var e, t;
        at(this, ge) && null != (e = at(this, be)) && e.getLink() ? at(this, ge).createDialog(at(this, be).getLink()) : null == (t = at(this, be)) || t.goTo()
    }, Ke = new WeakSet, Fe = function () {
        Rt(!0)
    }, qe = new WeakSet, Je = function () {
        Rt(!1)
    }, He = new WeakSet, it(hr, "logUid", wt().replace(/-/g, ""));
    var fr = hr, dr = "sbid_last_upd", pr = function (e) {
        return e.success = "success", e.fail = "fail", e.exist = "exist", e
    }(pr || {}), vr = _createClass((function e(t) {
        var n = t.oidc, r = t.baseUrl, i = t.onUpdateCookie, o = t.debug;
        _classCallCheck(this, e), st(this, Ve), st(this, Xe), st(this, $e), st(this, et), Ct.setEnable(!!o), Ct.info("AutoUpdateCookie инициализация"), ut(this, et, tt).call(this, {
            oidc: n,
            baseUrl: r,
            onUpdateCookie: i || function () {
            }
        })
    }));
    Ve = new WeakSet, Ye = function () {
        var e = Number(localStorage.getItem(dr)) + 6048e5;
        try {
            return e < Date.now()
        } catch (e) {
            return Ct.error(["AutoUpdateCookie ошибка получения даты обновления куки", e]), !0
        }
    }, Xe = new WeakSet, Ze = function () {
        try {
            localStorage.setItem(dr, Date.now().toString())
        } catch (e) {
            Ct.error(["AutoUpdateCookie ошибка сохранения даты обновления куки", e])
        }
    }, $e = new WeakSet, Qe = function () {
        try {
            localStorage.removeItem(dr)
        } catch (e) {
            Ct.error(["AutoUpdateCookie ошибка удаления даты обновления куки", e])
        }
    }, et = new WeakSet, tt = function (e) {
        var t = this, n = e.oidc, r = e.baseUrl, i = e.onUpdateCookie;
        ut(this, Ve, Ye).call(this) ? (Ct.info("AutoUpdateCookie запуск процесса подогрева куки"), En({
            personalization: !1,
            machineClick: lr.autoUpdateCookie
        }), new Ot({
            baseUrl: r,
            oidc: n,
            machineClick: At.COOKIE_AUTOUPDATE,
            timeout: Wt.timeout
        }).authorization().then((function (e) {
            e.success ? (ut(t, Xe, Ze).call(t), i(pr.success), Ct.success(["AutoUpdateCookie кука успешно подогрета", e.data])) : (ut(t, $e, Qe).call(t), i(pr.fail), Ct.error(["AutoUpdateCookie не удалось подогреть куку", e.data]))
        }))) : (i(pr.exist), Ct.info("AutoUpdateCookie не требуется подогревать куку, стоит актуальная кука"))
    };
    window.SberidSDK = fr, window.SberidAutoUpdateCookie = vr, e.AutoUpdateCookie = vr, e.SberIdSDK = fr, e.successWindowListener = function () {
        var e = Object.fromEntries(xt().entries());
        if (window.opener && (e.code || e.error)) {
            var t = _objectSpread({status: "success"}, e);
            t.error && (t.status = "error", t.description = "string" == typeof t.code ? pt[t.code] || "Что-то пошло не так" : "");
            try {
                window.opener.postMessage(JSON.stringify(Object.assign(t, e)), window.opener.location.href)
            } catch (e) {
                Ct.error(["Ошибка при отправке сообщения из окна авторизации по Сбер ID", e])
            }
        } else Ct.error(["SberIdSDK: проверьте что станица открыта в модальном окне и наличие параметров code или error"])
    }, Object.defineProperty(e, Symbol.toStringTag, {value: "Module"})
}));
