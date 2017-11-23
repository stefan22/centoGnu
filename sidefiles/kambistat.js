//site code

! function (e) {
   function r(t) {
      if (a[t]) return a[t].exports;
      var n = a[t] = {
         i: t,
         l: !1,
         exports: {}
      };
      return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
   }
   var t = window._kbcWidgetAPIWebpackJsonp;
   window._kbcWidgetAPIWebpackJsonp = function (r, a, i) {
      for (var o, c, l = 0, s = []; l < r.length; l++) c = r[l], n[c] && s.push(n[c][0]), n[c] = 0;
      for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
      for (t && t(r, a, i); s.length;) s.shift()()
   };
   var a = {},
      n = {
         1: 0
      };
   r.e = function (e) {
      function t() {
         c.onerror = c.onload = null, clearTimeout(l);
         var r = n[e];
         0 !== r && (r && r[1](new Error("Loading chunk " + e + " failed.")), n[e] = void 0)
      }
      var a = n[e];
      if (0 === a) return new Promise(function (e) {
         e()
      });
      if (a) return a[2];
      var i = new Promise(function (r, t) {
         a = n[e] = [r, t]
      });
      a[2] = i;
      var o = document.getElementsByTagName("head")[0],
         c = document.createElement("script");
      c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, c.crossOrigin = "anonymous", r.nc && c.setAttribute("nonce", r.nc), c.src = r.p + "kambi-" + ({
         0: "widget-api-libs"
      }[e] || e) + ".js";
      var l = setTimeout(t, 12e4);
      return c.onerror = c.onload = t, o.appendChild(c), i
   }, r.m = e, r.c = a, r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, {
         configurable: !1,
         enumerable: !0,
         get: a
      })
   }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
         return e.default
      } : function () {
         return e
      };
      return r.d(t, "a", t), t
   }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r)
   }, r.p = "", r.oe = function (e) {
      throw console.error(e), e
   }, r(r.s = "alNXn8")
}({
   "065qcb": function (e, r, t) {
      var a = t("bbn9vh"),
         n = t("ghDJeQ"),
         i = t("VS+j3R"),
         o = Object.defineProperty;
      r.f = t("PwyUBH") ? Object.defineProperty : function (e, r, t) {
         if (a(e), r = i(r, !0), a(t), n) try {
            return o(e, r, t)
         } catch (e) {}
         if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
         return "value" in t && (e[r] = t.value), e
      }
   },
   "0HhpGu": function (e, r, t) {
      var a = t("kI7WmF"),
         n = t("IF0G2c"),
         i = t("8/NosS"),
         o = t("teGIYu"),
         c = function (e, r, t) {
            var l, s, d, u = e & c.F,
               m = e & c.G,
               p = e & c.S,
               f = e & c.P,
               g = e & c.B,
               v = e & c.W,
               h = m ? n : n[r] || (n[r] = {}),
               x = h.prototype,
               _ = m ? a : p ? a[r] : (a[r] || {}).prototype;
            m && (t = r);
            for (l in t)(s = !u && _ && void 0 !== _[l]) && l in h || (d = s ? _[l] : t[l], h[l] = m && "function" != typeof _[l] ? t[l] : g && s ? i(d, a) : v && _[l] == d ? function (e) {
               var r = function (r, t, a) {
                  if (this instanceof e) {
                     switch (arguments.length) {
                        case 0:
                           return new e;
                        case 1:
                           return new e(r);
                        case 2:
                           return new e(r, t)
                     }
                     return new e(r, t, a)
                  }
                  return e.apply(this, arguments)
               };
               return r.prototype = e.prototype, r
            }(d) : f && "function" == typeof d ? i(Function.call, d) : d, f && ((h.virtual || (h.virtual = {}))[l] = d, e & c.R && x && !x[l] && o(x, l, d)))
         };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
   },
   "134IoL": function (e, r, t) {
      var a = t("dzmDmj"),
         n = t("kI7WmF").document,
         i = a(n) && a(n.createElement);
      e.exports = function (e) {
         return i ? n.createElement(e) : {}
      }
   },
   "1SS4Np": function (e, r, t) {
      e.exports = {
         default: t("9ED0Ke"),
         __esModule: !0
      }
   },
   "2kzGMj": function (e, r, t) {
      var a = t("3kx587"),
         n = Math.min;
      e.exports = function (e) {
         return e > 0 ? n(a(e), 9007199254740991) : 0
      }
   },
   "3L0B9n": function (e, r, t) {
      var a = t("qf5Xnl"),
         n = t("hTV7wk");
      e.exports = Object.keys || function (e) {
         return a(e, n)
      }
   },
   "3kx587": function (e, r) {
      var t = Math.ceil,
         a = Math.floor;
      e.exports = function (e) {
         return isNaN(e = +e) ? 0 : (e > 0 ? a : t)(e)
      }
   },
   "5XHaiS": function (e, r, t) {
      "use strict";
      var a = t("rkdX8s"),
         n = t.n(a),
         i = t("afBDbo"),
         o = t.n(i),
         c = t("TVqAdL"),
         l = t.n(c),
         s = t("OgT6V/"),
         d = function () {
            function e() {
               n.a(this, e), this.userAgent = s.a.navigator.userAgent, this.ua = s.a.navigator.userAgent
            }
            return o.a(e, [{
               key: "userAgent",
               set: function (e) {
                  this._userAgent = e
               },
               get: function () {
                  return this._userAgent
               }
            }, {
               key: "ua",
               set: function (e) {
                  this._ua = l.a.parse(e)
               },
               get: function () {
                  return this._ua
               }
            }]), o.a(e, [{
               key: "parse",
               value: function (e) {
                  this.userAgent = e, this.ua = e
               }
            }, {
               key: "isWidgetIframe",
               value: function () {
                  return s.a.self !== s.a.parent && !document.getElementById("KambiBC") && void 0 === s.a._kbc
               }
            }]), e
         }();
      r.a = new d
   },
   "8/NosS": function (e, r, t) {
      var a = t("wmH6Ju");
      e.exports = function (e, r, t) {
         if (a(e), void 0 === r) return e;
         switch (t) {
            case 1:
               return function (t) {
                  return e.call(r, t)
               };
            case 2:
               return function (t, a) {
                  return e.call(r, t, a)
               };
            case 3:
               return function (t, a, n) {
                  return e.call(r, t, a, n)
               }
         }
         return function () {
            return e.apply(r, arguments)
         }
      }
   },
   "9ED0Ke": function (e, r, t) {
      t("GF4rqC");
      var a = t("IF0G2c").Object;
      e.exports = function (e, r, t) {
         return a.defineProperty(e, r, t)
      }
   },
   AGn3C2: function (e, r, t) {
      "use strict";
      r.__esModule = !0;
      var a = t("Bx2qO8"),
         n = function (e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }(a);
      r.default = n.default || function (e) {
         for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
         }
         return e
      }
   },
   AbJSf2: function (e, r, t) {
      "use strict";
      r.__esModule = !0;
      var a = t("1SS4Np"),
         n = function (e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }(a);
      r.default = function (e, r, t) {
         return r in e ? (0, n.default)(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
         }) : e[r] = t, e
      }
   },
   AfzwQx: function (e, r, t) {
      "use strict";
      var a = t("AGn3C2"),
         n = t.n(a),
         i = t("rkdX8s"),
         o = t.n(i),
         c = t("afBDbo"),
         l = t.n(c),
         s = t("DRj9G+"),
         d = t("5XHaiS"),
         u = t("KkGxv+"),
         m = t("lZjehL"),
         p = t("stHoZ3"),
         f = "1.0.0.32",
         g = new s.a,
         v = function () {
            function e() {
               o.a(this, e), this.callbacks = [], this.libsCallbacks = [], this.loadedLibs = void 0, this.isRunningFromWidgetIframe = d.a.isWidgetIframe(), this.onReceiveMessage = this.onReceiveMessage.bind(this), this.onRemoveMessageListener = this.onRemoveMessageListener.bind(this), this.getApi = this.getApi.bind(this), this.requestSetup = this.requestSetup.bind(this), this.requestOddsAsFractional = this.requestOddsAsFractional.bind(this), this.requestOddsAsAmerican = this.requestOddsAsAmerican.bind(this), this.requestLibs = this.requestLibs.bind(this), this.postMessage = this.postMessage.bind(this), this.request = this.request.bind(this), this.set = this.set.bind(this), this.navigateClient = this.navigateClient.bind(this), this.remove = this.remove.bind(this), window.addEventListener("message", this.onReceiveMessage), document.addEventListener("_kbc-removeEventListeners", this.onRemoveMessageListener);
               var r = p.f + "." + p.b.IFRAME_READY;
               this.postMessage(r, {
                  version: f
               })
            }
            return l.a(e, [{
               key: "getApi",
               value: function () {
                  return n.a({
                     navigate: this.navigate,
                     navigateClient: this.navigateClient,
                     remove: this.remove,
                     set: this.set,
                     request: this.request,
                     ua: d.a.ua,
                     createFilterUrl: this.createFilterUrl,
                     requestSetup: this.requestSetup,
                     requestOddsAsFractional: this.requestOddsAsFractional,
                     requestOddsAsAmerican: this.requestOddsAsAmerican,
                     requestLibs: this.requestLibs,
                     createUrl: this.createUrl,
                     VERSION: f,
                     BETSLIP_OUTCOMES_ARGS: {
                        UPDATE_REPLACE: "replace",
                        UPDATE_APPEND: "append",
                        TYPE_SINGLE: "single",
                        TYPE_COMBINATION: "combination",
                        TYPE_SYSTEM: "system",
                        TYPE_PATENT: "patent",
                        TYPE_TRIXIE: "trixie",
                        TYPE_YANKEE: "yankee",
                        TYPE_CANADIAN: "canadian",
                        TYPE_HEINZ: "heinz",
                        TYPE_SUPERHEINZ: "superheinz"
                     },
                     PLACE_BET_STATE_VALUE: n.a({}, p.h),
                     BET_TYPE: n.a({}, p.c),
                     BETSLIP_STAKE_UPDATED_TYPES: n.a({}, p.i),
                     EVENT_INFO_TYPES: n.a({}, p.e),
                     EVENT_INFO_CONTEXT: n.a({}, p.d)
                  }, p.b)
               }
            }, {
               key: "set",
               value: function (e, r) {
                  var t = p.f + "." + p.a.SET + e;
                  return this.postMessage(t, {
                     value: r
                  })
               }
            }, {
               key: "request",
               value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                     t = p.f + "." + p.a.REQUEST + e;
                  return this.postMessage(t, {
                     value: r
                  })
               }
            }, {
               key: "requestSetup",
               value: function (e) {
                  var r = this.callbacks.length;
                  this.callbacks[r] = e;
                  var t = p.f + "." + p.a.REQUEST + p.b.WIDGET_SETUP;
                  return this.postMessage(t, {
                     callbackIndex: r
                  })
               }
            }, {
               key: "requestOddsAsFractional",
               value: function (e, r) {
                  var t = this.callbacks.length;
                  this.callbacks[t] = r;
                  var a = p.f + "." + p.a.REQUEST + p.b.ODDS_FRACTIONAL;
                  return this.postMessage(a, {
                     odds: e,
                     callbackIndex: t
                  })
               }
            }, {
               key: "requestOddsAsAmerican",
               value: function (e, r) {
                  var t = this.callbacks.length;
                  this.callbacks[t] = r;
                  var a = p.f + "." + p.a.REQUEST + p.b.ODDS_AMERICAN;
                  return this.postMessage(a, {
                     odds: e,
                     callbackIndex: t
                  })
               }
            }, {
               key: "createLibsCallbackWrapper",
               value: function (e) {
                  var r = this;
                  return function (a) {
                     return r.loadedLibs ? e(r.loadedLibs) : (r.libsCallbacks.push(e), t.p = a.url, t.e(0).then(function (e) {
                        var a = t("eeO1y8"),
                           n = t("hKJsg7"),
                           i = t("ACagcY");
                        r.loadedLibs = {
                           jquery: a,
                           lodash: n,
                           backbone: i
                        }, r.libsCallbacks.forEach(function (e) {
                           return e(r.loadedLibs)
                        })
                     }.bind(null, t)).catch(t.oe))
                  }
               }
            }, {
               key: "requestLibs",
               value: function (e, r) {
                  var t = this.callbacks.length;
                  this.callbacks[t] = this.createLibsCallbackWrapper(r);
                  var a = p.f + "." + p.a.REQUEST + p.b.LIBS;
                  return this.postMessage(a, {
                     libsVersion: e,
                     callbackIndex: t
                  })
               }
            }, {
               key: "createFilterUrl",
               value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  return m.a(u.a(e), r)
               }
            }, {
               key: "createUrl",
               value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  return m.a(e, r)
               }
            }, {
               key: "navigate",
               value: function (e) {
                  var r = window.top,
                     t = void 0,
                     a = void 0;
                  try {
                     t = r.location.href.split("#")[0], a = e.split("#")[0]
                  } catch (e) {}
                  if (r.location.href = e, t === a) return r.location.reload()
               }
            }, {
               key: "navigateClient",
               value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                     t = p.f + "." + p.b.NAVIGATE;
                  return this.postMessage(t, {
                     hash: e,
                     name: r
                  })
               }
            }, {
               key: "remove",
               value: function () {
                  var e = p.f + "." + p.b.REMOVE;
                  return this.postMessage(e)
               }
            }, {
               key: "onReceiveMessage",
               value: function (e) {
                  var r = g.receiveMessage(e);
                  if (r) {
                     var t = r.messageData,
                        a = t.data,
                        n = void 0 === a ? {} : a,
                        i = t.type,
                        o = this._mapEventTypeName(i);
                     if (o) {
                        var c = n.callbackIndex;
                        if (delete n.callbackIndex, "number" == typeof c) {
                           var l = this.callbacks[c];
                           if (l) return delete this.callbacks[c], l(n.data, this.getApi())
                        } else {
                           n.type = o;
                           var s = window.KambiWidget ? window.KambiWidget.receiveResponse : void 0;
                           s && s(n, this.getApi())
                        }
                     }
                  }
               }
            }, {
               key: "onRemoveMessageListener",
               value: function () {
                  window.removeEventListener("message", this.onReceiveMessage, !1), document.removeEventListener("_kbc-removeEventListeners", this.onRemoveMessageListener, !1)
               }
            }, {
               key: "postMessage",
               value: function (e, r) {
                  this.isRunningFromWidgetIframe ? g.postMessageToParentWindow(e, r) : g.postMessage(window.self, {
                     type: e,
                     data: r
                  })
               }
            }, {
               key: "_isValidMethod",
               value: function (e) {
                  if (!e) return !1;
                  for (var r in p.b)
                     if (p.b.hasOwnProperty(r) && p.b[r] === e) return !0;
                  return !1
               }
            }, {
               key: "_mapEventTypeName",
               value: function (e) {
                  if (e) {
                     var r = void 0,
                        t = e.match(new RegExp("^" + p.g + "." + p.a.GET + "(.*)Response$"));
                     return t && t[1] && (r = t[1]), this._isValidMethod(r) ? r : void 0
                  }
               }
            }]), e
         }();
      r.a = v
   },
   Bx2qO8: function (e, r, t) {
      e.exports = {
         default: t("y9PQt+"),
         __esModule: !0
      }
   },
   CQVC6O: function (e, r, t) {
      "use strict";
      var a = {
         URL_FILTER_ID: "url-filter-id",
         GROUP_PAGE_FILTER_ID: "filter",
         attribute: {
            IN_PLAY: "in-play",
            STARTING_SOON: "starting-soon",
            UPCOMING_LIVE: "upcoming-live",
            STREAMING: "streaming",
            MATCHES: "matches",
            COMPETITIONS: "competitions"
         },
         type: {
            SPORT: "SPORT",
            REGION: "REGION",
            LEAGUE: "LEAGUE",
            PARTICIPANT: "PARTICIPANT",
            ATTRIBUTE: "ATTRIBUTE"
         },
         ALL: "all",
         BaseUrl: {
            ALL: "all",
            FILTER: "filter",
            DRILL_DOWN: "drill-down"
         }
      };
      r.a = a
   },
   "DRj9G+": function (e, r, t) {
      "use strict";
      var a = t("rkdX8s"),
         n = t.n(a),
         i = t("afBDbo"),
         o = t.n(i),
         c = function () {
            function e() {
               n.a(this, e), this.parentDocumentOrigin = this.getOrigin(document.referrer), this.selfDocumentOrigin = document.location.protocol + "//" + document.location.host
            }
            return o.a(e, [{
               key: "getOrigin",
               value: function (e) {
                  if (0 !== e.indexOf("http")) return this.selfDocumentOrigin;
                  var r = document.createElement("a");
                  r.href = e;
                  var t = r.protocol,
                     a = r.hostname,
                     n = parseInt(r.port, 10);
                  return n = isNaN(n) || 80 === n || 443 === n ? "" : ":" + n, t + "//" + a + n
               }
            }, {
               key: "postMessage",
               value: function (e, r, t) {
                  t = t || this.selfDocumentOrigin;
                  try {
                     e.postMessage(r, t)
                  } catch (e) {}
               }
            }, {
               key: "postMessageToParentWindow",
               value: function (e, r) {
                  var t = {
                     type: e,
                     data: r
                  };
                  try {
                     this.postMessage(window.parent, t, this.parentDocumentOrigin)
                  } catch (e) {}
               }
            }, {
               key: "receiveMessage",
               value: function (e) {
                  if (e = this.normalizeEvent(e), this.validateMessageEvent(e)) return {
                     messageData: e.data,
                     messageSource: e.source,
                     messageOrigin: e.origin
                  }
               }
            }, {
               key: "validateMessageEvent",
               value: function (e) {
                  return e.origin === this.parentDocumentOrigin && e.source === window.parent || e.origin === this.selfDocumentOrigin && e.source === window.self
               }
            }, {
               key: "normalizeEvent",
               value: function (e) {
                  return {
                     source: e.source,
                     origin: e.origin,
                     data: e.data
                  }
               }
            }]), e
         }();
      r.a = c
   },
   EGHxlf: function (e, r, t) {
      var a = t("QG+Fey"),
         n = t("2kzGMj"),
         i = t("Hmfchn");
      e.exports = function (e) {
         return function (r, t, o) {
            var c, l = a(r),
               s = n(l.length),
               d = i(o, s);
            if (e && t != t) {
               for (; s > d;)
                  if ((c = l[d++]) != c) return !0
            } else
               for (; s > d; d++)
                  if ((e || d in l) && l[d] === t) return e || d || 0;
            return !e && -1
         }
      }
   },
   GF4rqC: function (e, r, t) {
      var a = t("0HhpGu");
      a(a.S + a.F * !t("PwyUBH"), "Object", {
         defineProperty: t("065qcb").f
      })
   },
   Hmfchn: function (e, r, t) {
      var a = t("3kx587"),
         n = Math.max,
         i = Math.min;
      e.exports = function (e, r) {
         return e = a(e), e < 0 ? n(e + r, 0) : i(e, r)
      }
   },
   HzzBXs: function (e, r) {
      var t = {}.toString;
      e.exports = function (e) {
         return t.call(e).slice(8, -1)
      }
   },
   I77SXc: function (e, r, t) {
      var a = t("kuwsas");
      e.exports = function (e) {
         return Object(a(e))
      }
   },
   IF0G2c: function (e, r) {
      var t = e.exports = {
         version: "2.4.0"
      };
      "number" == typeof __e && (__e = t)
   },
   IlgB8t: function (e, r) {
      e.exports = function (e, r) {
         return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: r
         }
      }
   },
   JkT0W6: function (e, r, t) {
      var a = t("HzzBXs");
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
         return "String" == a(e) ? e.split("") : Object(e)
      }
   },
   "KkGxv+": function (e, r, t) {
      "use strict";

      function a(e) {
         return m[e.split("/").length - 2]
      }

      function n(e) {
         return e.map(function (e) {
            return e.toJSON ? e.toJSON() : e
         })
      }

      function i(e, r, t, a) {
         t.includes(r) || t.push(r), a[e] = t.length - 1
      }

      function o() {
         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = "",
            t = e.map(function (e) {
               return e.termKey
            });
         for (var a in d.a.attribute)
            if (d.a.attribute.hasOwnProperty(a)) {
               var n = d.a.attribute[a];
               t.includes(n) && (r += n + ",")
            }
         return r.slice(0, -1)
      }

      function c(e, r, t) {
         for (var a = [], n = e < r, i = t ? n ? r + 1 : r - 1 : r, o = e; n ? o < i : o > i; n ? o++ : o--) a.push(o);
         return a
      }

      function l(e) {
         var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "filter";
         e.models && (e = n(e.models)), e = n(e instanceof Array ? e : [e]);
         var t = e.filter(function (e) {
            return e.type === d.a.type.ATTRIBUTE
         });
         e = e.filter(function (e) {
            return m.includes(e.type)
         });
         var a = {
               0: [],
               1: [],
               2: [],
               3: []
            },
            l = !0,
            s = !1,
            p = void 0;
         try {
            for (var f, g = e[Symbol.iterator](); !(l = (f = g.next()).done); l = !0) {
               var v = f.value,
                  h = v.id.split("/");
               h.shift();
               for (var x = {}, _ = 0; _ < h.length; _++) {
                  var b = h[_];
                  _ = parseInt(_, 10);
                  var y = a[_];
                  if (0 === _) i(_, b, y, x);
                  else {
                     for (var S in x)
                        if (x.hasOwnProperty(S)) {
                           var A = x[S],
                              w = !0,
                              E = !1,
                              T = void 0;
                           try {
                              for (var O, k = c(0, A, !0)[Symbol.iterator](); !(w = (O = k.next()).done); w = !0) {
                                 var M = O.value,
                                    P = M === A ? [] : d.a.ALL;
                                 null !== y[M] && void 0 !== y[M] || y.push(P)
                              }
                           } catch (e) {
                              E = !0, T = e
                           } finally {
                              try {
                                 !w && k.return && k.return()
                              } finally {
                                 if (E) throw T
                              }
                           }
                           y = y[A]
                        }
                     i(_, b, y, x)
                  }
               }
            }
         } catch (e) {
            s = !0, p = e
         } finally {
            try {
               !l && g.return && g.return()
            } finally {
               if (s) throw p
            }
         }
         var I = o(t),
            B = u.a(r),
            N = 0;
         for (var L in a)
            if (a.hasOwnProperty(L)) {
               var C = a[L];
               C.length > 0 ? (B += "/" + JSON.stringify(C).slice(1, -1), N++) : I.length > 0 && (B += "/" + d.a.ALL)
            }
         return B = B.split('"').join(""), c(0, N, !0).forEach(function () {
            B = B.replace(/\[([^,\]]*)\]/g, "$1")
         }), B = B.replace(/(,all)+(\/|\]|$)/g, "$2"), I.length > 0 && (B += "/" + I), B.match("filter$") && (B += "/" + d.a.ALL), B
      }

      function s(e, r) {
         var t = [],
            n = !0,
            i = !1,
            o = void 0;
         try {
            for (var c, s = e[Symbol.iterator](); !(n = (c = s.next()).done); n = !0) {
               var u = c.value;
               if (u) {
                  var m = u.replace(/\/+$/, "");
                  0 === m.indexOf("/") ? t.push({
                     id: m,
                     type: a(m)
                  }) : t.push({
                     termKey: m,
                     type: d.a.type.ATTRIBUTE
                  })
               }
            }
         } catch (e) {
            i = !0, o = e
         } finally {
            try {
               !n && s.return && s.return()
            } finally {
               if (i) throw o
            }
         }
         return l(t, r)
      }
      t.d(r, "a", function () {
         return s
      });
      var d = t("CQVC6O"),
         u = t("lZjehL"),
         m = [d.a.type.SPORT, d.a.type.REGION, d.a.type.LEAGUE, d.a.type.PARTICIPANT]
   },
   LAmrcJ: function (e, r) {
      e.exports = function (e) {
         try {
            return !!e()
         } catch (e) {
            return !0
         }
      }
   },
   O4dioj: function (e, r, t) {
      var a = t("0HhpGu");
      a(a.S + a.F, "Object", {
         assign: t("eIgW/M")
      })
   },
   "OgT6V/": function (e, r, t) {
      "use strict";
      r.a = window
   },
   POYyWg: function (e, r, t) {
      var a;
      void 0 !== (a = function () {
         "use strict";

         function e(e) {
            var r;
            for (r = 0; r < e.length; r += 1) e[r](d)
         }

         function r() {
            var r = u;
            s && r.length && (u = [], e(r))
         }

         function t() {
            s || (s = !0, c && clearInterval(c), r())
         }

         function a() {
            document.removeEventListener("DOMContentLoaded", t, !1), window.removeEventListener("load", t, !1), document.removeEventListener("_kbc-removeEventListeners", a, !1)
         }

         function n(e) {
            return s ? e(d) : u.push(e), n
         }
         var i, o, c, l = "undefined" != typeof window && window.document,
            s = !l,
            d = l ? document : null,
            u = [];
         if (l) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1), document.addEventListener("_kbc-removeEventListeners", a, !1);
            else if (window.attachEvent) {
               window.attachEvent("onload", t), o = document.createElement("div");
               try {
                  i = null === window.frameElement
               } catch (e) {}
               o.doScroll && i && window.external && (c = setInterval(function () {
                  try {
                     o.doScroll(), t()
                  } catch (e) {}
               }, 30))
            }
            "complete" === document.readyState && t()
         }
         return n.version = "2.0.1", n.load = function (e, r, t, a) {
            a.isBuild ? t(null) : n(t)
         }, n
      }.call(r, t, r, e)) && (e.exports = a)
   },
   PwyUBH: function (e, r, t) {
      e.exports = !t("LAmrcJ")(function () {
         return 7 != Object.defineProperty({}, "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   "QG+Fey": function (e, r, t) {
      var a = t("JkT0W6"),
         n = t("kuwsas");
      e.exports = function (e) {
         return a(n(e))
      }
   },
   TVqAdL: function (e, r) {
      ! function (r, t) {
         Array.prototype.map || (Array.prototype.map = function (e, r) {
            var t, a, n;
            if (null == this) throw new TypeError(" this is null or not defined");
            var i = Object(this),
               o = i.length >>> 0;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            for (r && (t = r), a = new Array(o), n = 0; n < o;) {
               var c, l;
               n in i && (c = i[n], l = e.call(t, c, n, i), a[n] = l), n++
            }
            return a
         });
         var a = function () {
            var e = function () {},
               r = {
                  browser_parsers: [{
                     regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
                     family_replacement: "Wii",
                     manufacturer: "Nintendo"
                  }, {
                     regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                     family_replacement: "Camino",
                     other: !0
                  }, {
                     regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                     family_replacement: "Pale Moon (Firefox Variant)",
                     other: !0
                  }, {
                     regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                     family_replacement: "Firefox Mobile"
                  }, {
                     regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
                     family_replacment: "Firefox Mobile"
                  }, {
                     regex: "(Fennec)/(\\d+)\\.(\\d+)",
                     family_replacement: "Firefox Mobile"
                  }, {
                     regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
                     family_replacement: "Firefox Mobile"
                  }, {
                     regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
                     family_replacement: "Firefox ($1)"
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                     family_replacement: "Firefox Alpha"
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                     family_replacement: "Firefox Beta"
                  }, {
                     regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                     family_replacement: "Firefox Alpha"
                  }, {
                     regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                     family_replacement: "Firefox Beta"
                  }, {
                     regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
                     family_replacement: "Firefox ($1)"
                  }, {
                     regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "MicroB",
                     tablet: !0
                  }, {
                     regex: "(FxiOS)/(\\d+)\\.(\\d+)",
                     family_replacement: "Firefox for iOS"
                  }, {
                     regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
                  }, {
                     regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
                     family_replacement: "Flock",
                     other: !0
                  }, {
                     regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Rockmelt",
                     other: !0
                  }, {
                     regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Netscape"
                  }, {
                     regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
                     family_replacement: "Netscape"
                  }, {
                     regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Netscape"
                  }, {
                     regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
                     family_replacement: "My Internet Browser",
                     other: !0
                  }, {
                     regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     family_replacement: "Opera Tablet",
                     tablet: !0
                  }, {
                     regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
                     family_replacement: "Opera Mobile"
                  }, {
                     regex: "Opera Mobi",
                     family_replacement: "Opera Mobile"
                  }, {
                     regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
                     family_replacement: "Opera Mini"
                  }, {
                     regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
                     family_replacement: "Opera Mini"
                  }, {
                     regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     family_replacement: "Opera"
                  }, {
                     regex: "(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     family_replacement: "Opera"
                  }, {
                     regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
                     family_replacement: "webOS"
                  }, {
                     regex: "(webOS)/(\\d+)\\.(\\d+)",
                     family_replacement: "webOS"
                  }, {
                     regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
                     family_replacement: "webOS TouchPad"
                  }, {
                     regex: "(luakit)",
                     family_replacement: "LuaKit",
                     other: !0
                  }, {
                     regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
                     family_replacement: "Lightning",
                     other: !0
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
                     family_replacement: "Swiftfox",
                     other: !0
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
                     family_replacement: "Swiftfox",
                     other: !0
                  }, {
                     regex: "rekonq",
                     family_replacement: "Rekonq",
                     other: !0
                  }, {
                     regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                     family_replacement: "Conkeror",
                     other: !0
                  }, {
                     regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Konqueror",
                     other: !0
                  }, {
                     regex: "(WeTab)-Browser",
                     family_replacement: "WeTab",
                     other: !0
                  }, {
                     regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Comodo Dragon",
                     other: !0
                  }, {
                     regex: "(YottaaMonitor)",
                     family_replacement: "Yottaa Monitor",
                     other: !0
                  }, {
                     regex: "(Kindle)/(\\d+)\\.(\\d+)",
                     family_replacement: "Kindle"
                  }, {
                     regex: "(Symphony) (\\d+).(\\d+)",
                     family_replacement: "Symphony",
                     other: !0
                  }, {
                     regex: "Minimo",
                     family_replacement: "Minimo",
                     other: !0
                  }, {
                     regex: "Windows Phone.*(Edge)/(\\d+)\\.(\\d+)",
                     family_replacement: "Edge Mobile"
                  }, {
                     regex: "(Edge)/(\\d+)\\.(\\d+)",
                     family_replacement: "Edge"
                  }, {
                     regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Chrome Mobile"
                  }, {
                     regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Chrome Mobile iOS"
                  }, {
                     regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
                     family_replacement: "Chrome Mobile"
                  }, {
                     regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Chrome Frame"
                  }, {
                     regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "UC Browser",
                     other: !0
                  }, {
                     regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
                     family_replacement: "Tizen Browser",
                     other: !0
                  }, {
                     regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
                     family_replacement: "Epiphany",
                     other: !0
                  }, {
                     regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
                     family_replacement: "Sogou Explorer",
                     other: !0
                  }, {
                     regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
                     family_replacement: "PingdomBot",
                     other: !0
                  }, {
                     regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
                     family_replacement: "FacebookBot"
                  }, {
                     regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
                     family_replacement: "TwitterBot"
                  }, {
                     regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
                     family_replacement: "IE Mobile"
                  }, {
                     regex: "(MSIE) (\\d+)\\.(\\d+).*WPDesktop",
                     family_replacement: "IE Mobile"
                  }, {
                     regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
                     family_replacement: "IE Large Screen"
                  }, {
                     regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"
                  }, {
                     regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"
                  }, {
                     regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
                  }, {
                     regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"
                  }, {
                     regex: "(Android) Donut",
                     v2_replacement: "2",
                     v1_replacement: "1"
                  }, {
                     regex: "(Android) Eclair",
                     v2_replacement: "1",
                     v1_replacement: "2"
                  }, {
                     regex: "(Android) Froyo",
                     v2_replacement: "2",
                     v1_replacement: "2"
                  }, {
                     regex: "(Android) Gingerbread",
                     v2_replacement: "3",
                     v1_replacement: "2"
                  }, {
                     regex: "(Android) Honeycomb",
                     v1_replacement: "3"
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
                  }, {
                     regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
                  }, {
                     regex: "(Obigo)InternetBrowser",
                     other: !0
                  }, {
                     regex: "(Obigo)\\-Browser",
                     other: !0
                  }, {
                     regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
                     other: !0
                  }, {
                     regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
                     family_replacement: "Maxthon",
                     other: !0
                  }, {
                     regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
                     v1_replacement: "0",
                     other: !0
                  }, {
                     regex: "(PLAYSTATION) (\\d+)",
                     family_replacement: "PlayStation",
                     manufacturer: "Sony"
                  }, {
                     regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
                     manufacturer: "Sony"
                  }, {
                     regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(POLARIS)/(\\d+)\\.(\\d+)",
                     family_replacement: "Polaris",
                     other: !0
                  }, {
                     regex: "(Embider)/(\\d+)\\.(\\d+)",
                     family_replacement: "Polaris",
                     other: !0
                  }, {
                     regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Bon Echo",
                     other: !0
                  }, {
                     regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPod)",
                     family_replacement: "Mobile Safari",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     manufacturer: "Apple"
                  }, {
                     regex: "iPhone.*(iPhone OS) (\\d+)",
                     family_replacement: "Mobile Safari (in-app)",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     tablet: !0,
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
                     family_replacement: "Mobile Safari",
                     tablet: !0,
                     manufacturer: "Apple"
                  }, {
                     regex: "iPad.*(CPU OS) (\\d+)",
                     family_replacement: "Mobile Safari (in-app)",
                     tablet: !0,
                     manufacturer: "Apple"
                  }, {
                     regex: "(AvantGo) (\\d+).(\\d+)",
                     other: !0
                  }, {
                     regex: "(Avant)",
                     v1_replacement: "1",
                     other: !0
                  }, {
                     regex: "^(Nokia)",
                     family_replacement: "Nokia Services (WAP) Browser",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
                     family_replacement: "NokiaBrowser",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(Series60)/5\\.0",
                     v2_replacement: "0",
                     v1_replacement: "7",
                     family_replacement: "NokiaBrowser",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(Series60)/(\\d+)\\.(\\d+)",
                     family_replacement: "Nokia OSS Browser",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Nokia Series 40 Ovi Browser",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(Nokia)[EN]?(\\d+)",
                     manufacturer: "Nokia"
                  }, {
                     regex: "(BB10);",
                     family_replacement: "Blackberry WebKit",
                     manufacturer: "RIM"
                  }, {
                     regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Blackberry WebKit",
                     tablet: !0,
                     manufacturer: "Nokia"
                  }, {
                     regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                     family_replacement: "Blackberry WebKit",
                     manufacturer: "RIM"
                  }, {
                     regex: "(Black[bB]erry)\\s?(\\d+)",
                     family_replacement: "Blackberry",
                     manufacturer: "RIM"
                  }, {
                     regex: "(OmniWeb)/v(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(Blazer)/(\\d+)\\.(\\d+)",
                     family_replacement: "Palm Blazer",
                     manufacturer: "Palm"
                  }, {
                     regex: "(Pre)/(\\d+)\\.(\\d+)",
                     family_replacement: "Palm Pre",
                     manufacturer: "Palm"
                  }, {
                     regex: "(Links) \\((\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                     other: !0,
                     tablet: !0
                  }, {
                     regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
                     family_replacement: "WebKit Nightly"
                  }, {
                     regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
                     family_replacement: "Safari"
                  }, {
                     regex: "(Safari)/\\d+"
                  }, {
                     regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(OLPC)/Update()\\.(\\d+)",
                     v1_replacement: "0",
                     other: !0
                  }, {
                     regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(Teleca)",
                     family_replacement: "Teleca Browser",
                     other: !0
                  }, {
                     regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
                     family_replacement: "IE"
                  }, {
                     regex: "(MSIE) (\\d+)\\.(\\d+)",
                     family_replacement: "IE"
                  }],
                  os_parsers: [{
                     regex: "(Windows Phone 8\\.1)",
                     os_replacement: "Windows Phone 8.1"
                  }, {
                     regex: "(Windows Phone 10\\.)",
                     os_replacement: "Windows 10 Mobile"
                  }, {
                     regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
                  }, {
                     regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
                  }, {
                     regex: "(Android) Donut",
                     os_v2_replacement: "2",
                     os_v1_replacement: "1"
                  }, {
                     regex: "(Android) Eclair",
                     os_v2_replacement: "1",
                     os_v1_replacement: "2"
                  }, {
                     regex: "(Android) Froyo",
                     os_v2_replacement: "2",
                     os_v1_replacement: "2"
                  }, {
                     regex: "(Android) Gingerbread",
                     os_v2_replacement: "3",
                     os_v1_replacement: "2"
                  }, {
                     regex: "(Android) Honeycomb",
                     os_v1_replacement: "3"
                  }, {
                     regex: "(Silk-Accelerated=[a-z]{4,5})",
                     os_replacement: "Android"
                  }, {
                     regex: "(Windows Phone 6\\.5)"
                  }, {
                     regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
                     os_replacement: "Windows XP"
                  }, {
                     regex: "(XBLWP7)",
                     os_replacement: "Windows Phone OS"
                  }, {
                     regex: "(Windows NT 6\\.1)",
                     os_replacement: "Windows 7"
                  }, {
                     regex: "(Windows NT 6\\.0)",
                     os_replacement: "Windows Vista"
                  }, {
                     regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"
                  }, {
                     regex: "(Windows NT 6\\.2).*WPDesktop",
                     os_replacement: "Windows Phone 8"
                  }, {
                     regex: "(Windows NT 6\\.4|Windows NT 10\\.0)",
                     os_replacement: "Windows 10"
                  }, {
                     regex: "(Windows NT 6\\.2)",
                     os_replacement: "Windows 8"
                  }, {
                     regex: "(Windows Phone 8)",
                     os_replacement: "Windows Phone 8"
                  }, {
                     regex: "(Windows NT 5\\.0)",
                     os_replacement: "Windows 2000"
                  }, {
                     regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"
                  }, {
                     regex: "(Windows ?Mobile)",
                     os_replacement: "Windows Mobile"
                  }, {
                     regex: "(WinNT4.0)",
                     os_replacement: "Windows NT 4.0"
                  }, {
                     regex: "(Win98)",
                     os_replacement: "Windows 98"
                  }, {
                     regex: "(Tizen)/(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
                     manufacturer: "Apple"
                  }, {
                     regex: "(?:PPC|Intel) (Mac OS X)",
                     manufacturer: "Apple"
                  }, {
                     regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
                     os_replacement: "iOS",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone|iPad|iPod); Opera",
                     os_replacement: "iOS",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPad); Opera",
                     tablet: !0,
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
                     os_replacement: "iOS",
                     manufacturer: "Apple"
                  }, {
                     regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     os_replacement: "Chrome OS"
                  }, {
                     regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     other: !0
                  }, {
                     regex: "(Linux Mint)(?:/(\\d+))?",
                     other: !0
                  }, {
                     regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     other: !0
                  }, {
                     regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
                     os_replacement: "Symbian OS"
                  }, {
                     regex: "(Symbian/3).+NokiaBrowser/7\\.3",
                     os_replacement: "Symbian^3 Anna"
                  }, {
                     regex: "(Symbian/3).+NokiaBrowser/7\\.4",
                     os_replacement: "Symbian^3 Belle"
                  }, {
                     regex: "(Symbian/3)",
                     os_replacement: "Symbian^3"
                  }, {
                     regex: "(Series 60|SymbOS|S60)",
                     os_replacement: "Symbian OS"
                  }, {
                     regex: "(MeeGo)",
                     other: !0
                  }, {
                     regex: "Symbian [Oo][Ss]",
                     os_replacement: "Symbian OS"
                  }, {
                     regex: "(BB10);.+Version/(\\d+).(\\d+).(\\d+)",
                     os_replacement: "BlackBerry OS",
                     manufacturer: "RIM"
                  }, {
                     regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     os_replacement: "BlackBerry OS",
                     manufacturer: "RIM"
                  }, {
                     regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     os_replacement: "BlackBerry OS",
                     manufacturer: "RIM"
                  }, {
                     regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
                     os_replacement: "BlackBerry Tablet OS",
                     tablet: !0,
                     manufacturer: "RIM"
                  }, {
                     regex: "(Play[Bb]ook)",
                     os_replacement: "BlackBerry Tablet OS",
                     tablet: !0,
                     manufacturer: "RIM"
                  }, {
                     regex: "(Black[Bb]erry)",
                     os_replacement: "Blackberry OS",
                     manufacturer: "RIM"
                  }, {
                     regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                     os_replacement: "webOS"
                  }, {
                     regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
                     other: !0
                  }, {
                     regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
                  }, {
                     regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"
                  }, {
                     regex: "(Linux|BSD)",
                     other: !0
                  }],
                  mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS", "Windows 10 Mobile"],
                  device_parsers: [{
                     regex: "HTC ([A-Z][a-z0-9]+) Build",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC_Touch_([A-Za-z0-9]+)",
                     device_replacement: "HTC Touch ($1)",
                     manufacturer: "HTC"
                  }, {
                     regex: "USCCHTC(\\d+)",
                     device_replacement: "HTC $1 (US Cellular)",
                     manufacturer: "HTC"
                  }, {
                     regex: "Sprint APA(9292)",
                     device_replacement: "HTC $1 (Sprint)",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC ([A-Za-z0-9]+ [A-Z])",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC-([A-Za-z0-9]+)",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC_([A-Za-z0-9]+)",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "HTC ([A-Za-z0-9]+)",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "(ADR[A-Za-z0-9]+)",
                     device_replacement: "HTC $1",
                     manufacturer: "HTC"
                  }, {
                     regex: "(HTC)",
                     manufacturer: "HTC"
                  }, {
                     regex: "SonyEricsson([A-Za-z0-9]+)/",
                     device_replacement: "Ericsson $1",
                     other: !0,
                     manufacturer: "Sony"
                  }, {
                     regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"
                  }, {
                     regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
                  }, {
                     regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
                  }, {
                     regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
                  }, {
                     regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
                  }, {
                     regex: "NokiaN([0-9]+)",
                     device_replacement: "Nokia N$1",
                     manufacturer: "Nokia"
                  }, {
                     regex: "Nokia([A-Za-z0-9\\v-]+)",
                     device_replacement: "Nokia $1",
                     manufacturer: "Nokia"
                  }, {
                     regex: "NOKIA ([A-Za-z0-9\\-]+)",
                     device_replacement: "Nokia $1",
                     manufacturer: "Nokia"
                  }, {
                     regex: "Nokia ([A-Za-z0-9\\-]+)",
                     device_replacement: "Nokia $1",
                     manufacturer: "Nokia"
                  }, {
                     regex: "Lumia ([A-Za-z0-9\\-]+)",
                     device_replacement: "Lumia $1",
                     manufacturer: "Nokia"
                  }, {
                     regex: "Symbian",
                     device_replacement: "Nokia",
                     manufacturer: "Nokia"
                  }, {
                     regex: "BB10; ([A-Za-z0-9- ]+)\\)",
                     device_replacement: "BlackBerry $1",
                     manufacturer: "RIM"
                  }, {
                     regex: "(PlayBook).+RIM Tablet OS",
                     device_replacement: "Blackberry Playbook",
                     tablet: !0,
                     manufacturer: "RIM"
                  }, {
                     regex: "(Black[Bb]erry [0-9]+);",
                     manufacturer: "RIM"
                  }, {
                     regex: "Black[Bb]erry([0-9]+)",
                     device_replacement: "BlackBerry $1",
                     manufacturer: "RIM"
                  }, {
                     regex: "(Pre)/(\\d+)\\.(\\d+)",
                     device_replacement: "Palm Pre",
                     manufacturer: "Palm"
                  }, {
                     regex: "(Pixi)/(\\d+)\\.(\\d+)",
                     device_replacement: "Palm Pixi",
                     manufacturer: "Palm"
                  }, {
                     regex: "(Touchpad)/(\\d+)\\.(\\d+)",
                     device_replacement: "HP Touchpad",
                     manufacturer: "HP"
                  }, {
                     regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
                     device_replacement: "HP iPAQ $1",
                     manufacturer: "HP"
                  }, {
                     regex: "Palm([A-Za-z0-9]+)",
                     device_replacement: "Palm $1",
                     manufacturer: "Palm"
                  }, {
                     regex: "Treo([A-Za-z0-9]+)",
                     device_replacement: "Palm Treo $1",
                     manufacturer: "Palm"
                  }, {
                     regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
                     device_replacement: "HP Veer",
                     manufacturer: "HP"
                  }, {
                     regex: "(Kindle Fire)",
                     manufacturer: "Amazon"
                  }, {
                     regex: "(Kindle)",
                     manufacturer: "Amazon"
                  }, {
                     regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                     device_replacement: "Kindle Fire",
                     tablet: !0,
                     manufacturer: "Amazon"
                  }, {
                     regex: "(iPad) Simulator;",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPad);",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPod);",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone) Simulator;",
                     manufacturer: "Apple"
                  }, {
                     regex: "(iPhone);",
                     manufacturer: "Apple"
                  }, {
                     regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
                     device_replacement: "Nexus $1"
                  }, {
                     regex: "acer_([A-Za-z0-9]+)_",
                     device_replacement: "Acer $1",
                     manufacturer: "Acer"
                  }, {
                     regex: "acer_([A-Za-z0-9]+)_",
                     device_replacement: "Acer $1",
                     manufacturer: "Acer"
                  }, {
                     regex: "Amoi\\-([A-Za-z0-9]+)",
                     device_replacement: "Amoi $1",
                     other: !0,
                     manufacturer: "Amoi"
                  }, {
                     regex: "AMOI\\-([A-Za-z0-9]+)",
                     device_replacement: "Amoi $1",
                     other: !0,
                     manufacturer: "Amoi"
                  }, {
                     regex: "Asus\\-([A-Za-z0-9]+)",
                     device_replacement: "Asus $1",
                     manufacturer: "Asus"
                  }, {
                     regex: "ASUS\\-([A-Za-z0-9]+)",
                     device_replacement: "Asus $1",
                     manufacturer: "Asus"
                  }, {
                     regex: "BIRD\\-([A-Za-z0-9]+)",
                     device_replacement: "Bird $1",
                     other: !0
                  }, {
                     regex: "BIRD\\.([A-Za-z0-9]+)",
                     device_replacement: "Bird $1",
                     other: !0
                  }, {
                     regex: "BIRD ([A-Za-z0-9]+)",
                     device_replacement: "Bird $1",
                     other: !0
                  }, {
                     regex: "Dell ([A-Za-z0-9]+)",
                     device_replacement: "Dell $1",
                     manufacturer: "Dell"
                  }, {
                     regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
                     device_replacement: "DoCoMo $1",
                     other: !0
                  }, {
                     regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
                     device_replacement: "DoCoMo $1",
                     other: !0
                  }, {
                     regex: "([A-Za-z0-9]+)\\;FOMA",
                     device_replacement: "DoCoMo $1",
                     other: !0
                  }, {
                     regex: "vodafone([A-Za-z0-9]+)",
                     device_replacement: "Huawei Vodafone $1",
                     other: !0
                  }, {
                     regex: "i\\-mate ([A-Za-z0-9]+)",
                     device_replacement: "i-mate $1",
                     other: !0
                  }, {
                     regex: "Kyocera\\-([A-Za-z0-9]+)",
                     device_replacement: "Kyocera $1",
                     other: !0
                  }, {
                     regex: "KWC\\-([A-Za-z0-9]+)",
                     device_replacement: "Kyocera $1",
                     other: !0
                  }, {
                     regex: "Lenovo\\-([A-Za-z0-9]+)",
                     device_replacement: "Lenovo $1",
                     manufacturer: "Lenovo"
                  }, {
                     regex: "Lenovo\\_([A-Za-z0-9]+)",
                     device_replacement: "Lenovo $1",
                     manufacturer: "Levovo"
                  }, {
                     regex: "LG/([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LG-LG([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LGE-LG([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LGE VX([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LG ([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LGE LG\\-AX([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LG\\-([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LGE\\-([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "LG([A-Za-z0-9]+)",
                     device_replacement: "LG $1",
                     manufacturer: "LG"
                  }, {
                     regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
                     device_replacement: "Microsoft $1"
                  }, {
                     regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
                     device_replacement: "Microsoft $1"
                  }, {
                     regex: "(Motorola)\\-([A-Za-z0-9]+)",
                     manufacturer: "Motorola"
                  }, {
                     regex: "MOTO\\-([A-Za-z0-9]+)",
                     device_replacement: "Motorola $1",
                     manufacturer: "Motorola"
                  }, {
                     regex: "MOT\\-([A-Za-z0-9]+)",
                     device_replacement: "Motorola $1",
                     manufacturer: "Motorola"
                  }, {
                     regex: "Philips([A-Za-z0-9]+)",
                     device_replacement: "Philips $1",
                     manufacturer: "Philips"
                  }, {
                     regex: "Philips ([A-Za-z0-9]+)",
                     device_replacement: "Philips $1",
                     manufacturer: "Philips"
                  }, {
                     regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
                     device_replacement: "Samsung $1",
                     manufacturer: "Samsung"
                  }, {
                     regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
                     device_replacement: "Samsung $1",
                     manufacturer: "Samsung"
                  }, {
                     regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
                     device_replacement: "Softbank $1",
                     other: !0
                  }, {
                     regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
                     device_replacement: "Softbank $1",
                     other: !0
                  }, {
                     regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
                     device_replacement: "Generic Smartphone"
                  }, {
                     regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
                     device_replacement: "Generic Feature Phone"
                  }, {
                     regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
                     device_replacement: "Generic Feature Phone"
                  }, {
                     regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
                     device_replacement: "Generic Feature Phone"
                  }, {
                     regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
                     device_replacement: "Generic Feature Phone"
                  }, {
                     regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
                     device_replacement: "Spider"
                  }],
                  mobile_browser_families: ["Mobile Safari (in-app)", "Edge Mobile", "Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Blackberry WebKit", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser", "Firefox for iOS"]
               };
            e.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"], e.types = ["browser", "os", "device"], e.regexes = r || function () {
               var r = {};
               return e.parsers.map(function (e) {
                  r[e] = []
               }), r
            }(), e.families = function () {
               var r = {};
               return e.types.map(function (e) {
                  r[e] = []
               }), r
            }();
            var t = Array.prototype,
               a = (Object.prototype, Function.prototype, t.forEach),
               n = (t.indexOf, function (e, r) {
                  for (var t = {}, a = 0; a < r.length && !(t = r[a](e)); a++);
                  return t
               }),
               i = function (e, r) {
                  o(e, function (e) {
                     o(r, function (r) {
                        delete e[r]
                     })
                  })
               },
               o = function (e, r, t) {
                  if (null != e)
                     if (a && e.forEach === a) e.forEach(r, t);
                     else if (e.length === +e.length)
                     for (var n = 0, i = e.length; n < i; n++) r.call(t, e[n], n, e);
                  else
                     for (var o in e) _.has(e, o) && r.call(t, e[o], o, e)
               },
               c = function (e) {
                  return !(!e || void 0 === e || null == e)
               },
               l = function (e) {
                  var r = "";
                  return e = e || {}, c(e) && c(e.major) && (r += e.major, c(e.minor) && (r += "." + e.minor, c(e.patch) && (r += "." + e.patch))), r
               },
               s = function (e) {
                  e = e || {};
                  var r = l(e);
                  return r && (r = " " + r), e && c(e.family) ? e.family + r : ""
               };
            return e.parse = function (r) {
               var t = function (r) {
                     return e.regexes[r + "_parsers"].map(function (e) {
                        function t(r) {
                           var t = r.match(a);
                           if (!t) return null;
                           var o = {};
                           return o.family = (n ? n.replace("$1", t[1]) : t[1]) || "other", o.major = parseInt(i ? i : t[2]) || null, o.minor = t[3] ? parseInt(t[3]) : null, o.patch = t[4] ? parseInt(t[4]) : null, o.tablet = e.tablet, o.man = e.manufacturer || null, o
                        }
                        var a = new RegExp(e.regex),
                           n = e[("browser" === r ? "family" : r) + "_replacement"],
                           i = e.major_version_replacement;
                        return t
                     })
                  },
                  a = function () {},
                  o = t("browser"),
                  d = t("os"),
                  u = t("device"),
                  m = new a;
               m.source = r, m.browser = n(r, o), c(m.browser) ? (m.browser.name = s(m.browser), m.browser.version = l(m.browser)) : m.browser = {}, m.os = n(r, d), c(m.os) ? (m.os.name = s(m.os), m.os.version = l(m.os)) : m.os = {}, m.device = n(r, u), c(m.device) ? (m.device.name = s(m.device), m.device.version = l(m.device)) : m.device = {
                  tablet: !1,
                  family: "Other"
               };
               var p = {};
               e.regexes.mobile_browser_families.map(function (e) {
                  p[e] = !0
               }), e.regexes.mobile_os_families.map(function (e) {
                  p[e] = !0
               });
               return "Spider" === m.browser.family ? m.device.type = "Spider" : m.browser.tablet || m.os.tablet || m.device.tablet ? m.device.type = "Tablet" : p.hasOwnProperty(m.browser.family) ? m.device.type = "Mobile" : m.device.type = "Desktop", m.device.manufacturer = m.browser.man || m.os.man || m.device.man || null, i([m.browser, m.os, m.device], ["tablet", "man"]), m
            }, e
         }();
         e.exports = a
      }(window)
   },
   "VS+j3R": function (e, r, t) {
      var a = t("dzmDmj");
      e.exports = function (e, r) {
         if (!a(e)) return e;
         var t, n;
         if (r && "function" == typeof (t = e.toString) && !a(n = t.call(e))) return n;
         if ("function" == typeof (t = e.valueOf) && !a(n = t.call(e))) return n;
         if (!r && "function" == typeof (t = e.toString) && !a(n = t.call(e))) return n;
         throw TypeError("Can't convert object to primitive value")
      }
   },
   "W/x9hO": function (e, r, t) {
      var a = t("kI7WmF"),
         n = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
      e.exports = function (e) {
         return n[e] || (n[e] = {})
      }
   },
   afBDbo: function (e, r, t) {
      "use strict";
      r.__esModule = !0;
      var a = t("1SS4Np"),
         n = function (e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }(a);
      r.default = function () {
         function e(e, r) {
            for (var t = 0; t < r.length; t++) {
               var a = r[t];
               a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, n.default)(e, a.key, a)
            }
         }
         return function (r, t, a) {
            return t && e(r.prototype, t), a && e(r, a), r
         }
      }()
   },
   alNXn8: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", {
         value: !0
      });
      var a = t("AfzwQx"),
         n = t("POYyWg"),
         i = t.n(n);
      ! function (e) {
         function r() {
            if (e && e.KambiWidget && e.KambiWidget.apiReady) {
               var n = new a.a;
               e.KambiWidget.apiReady(n.getApi())
            } else ++t < 10 && e.setTimeout(r, 200)
         }
         e.KambiWidget = e.KambiWidget || {};
         var t = 0;
         i.a(r)
      }(window)
   },
   bbn9vh: function (e, r, t) {
      var a = t("dzmDmj");
      e.exports = function (e) {
         if (!a(e)) throw TypeError(e + " is not an object!");
         return e
      }
   },
   dzmDmj: function (e, r) {
      e.exports = function (e) {
         return "object" == typeof e ? null !== e : "function" == typeof e
      }
   },
   "eIgW/M": function (e, r, t) {
      "use strict";
      var a = t("3L0B9n"),
         n = t("isF4Ld"),
         i = t("gyMSiy"),
         o = t("I77SXc"),
         c = t("JkT0W6"),
         l = Object.assign;
      e.exports = !l || t("LAmrcJ")(function () {
         var e = {},
            r = {},
            t = Symbol(),
            a = "abcdefghijklmnopqrst";
         return e[t] = 7, a.split("").forEach(function (e) {
            r[e] = e
         }), 7 != l({}, e)[t] || Object.keys(l({}, r)).join("") != a
      }) ? function (e, r) {
         for (var t = o(e), l = arguments.length, s = 1, d = n.f, u = i.f; l > s;)
            for (var m, p = c(arguments[s++]), f = d ? a(p).concat(d(p)) : a(p), g = f.length, v = 0; g > v;) u.call(p, m = f[v++]) && (t[m] = p[m]);
         return t
      } : l
   },
   ghDJeQ: function (e, r, t) {
      e.exports = !t("PwyUBH") && !t("LAmrcJ")(function () {
         return 7 != Object.defineProperty(t("134IoL")("div"), "a", {
            get: function () {
               return 7
            }
         }).a
      })
   },
   gyMSiy: function (e, r) {
      r.f = {}.propertyIsEnumerable
   },
   hTV7wk: function (e, r) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
   },
   isF4Ld: function (e, r) {
      r.f = Object.getOwnPropertySymbols
   },
   "j+JNRM": function (e, r) {
      var t = {}.hasOwnProperty;
      e.exports = function (e, r) {
         return t.call(e, r)
      }
   },
   kI7WmF: function (e, r) {
      var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = t)
   },
   kuwsas: function (e, r) {
      e.exports = function (e) {
         if (void 0 == e) throw TypeError("Can't call method on  " + e);
         return e
      }
   },
   lU5T6d: function (e, r, t) {
      var a = t("W/x9hO")("keys"),
         n = t("rTofNt");
      e.exports = function (e) {
         return a[e] || (a[e] = n(e))
      }
   },
   lZjehL: function (e, r, t) {
      "use strict";
      t.d(r, "a", function () {
         return i
      });
      var a = function (e) {
            return e ? e + "/" : ""
         },
         n = function (e, r) {
            var t = a(r);
            return e.indexOf("#") > -1 && (e = e.split("#")[1]), 0 === e.indexOf("/") && (e = e.slice(1)), t && e.indexOf(t) > -1 && (e = e.split(t)[1]), e
         },
         i = function (e, r) {
            return "#" + a(r) + n(e)
         }
   },
   qf5Xnl: function (e, r, t) {
      var a = t("j+JNRM"),
         n = t("QG+Fey"),
         i = t("EGHxlf")(!1),
         o = t("lU5T6d")("IE_PROTO");
      e.exports = function (e, r) {
         var t, c = n(e),
            l = 0,
            s = [];
         for (t in c) t != o && a(c, t) && s.push(t);
         for (; r.length > l;) a(c, t = r[l++]) && (~i(s, t) || s.push(t));
         return s
      }
   },
   rTofNt: function (e, r) {
      var t = 0,
         a = Math.random();
      e.exports = function (e) {
         return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + a).toString(36))
      }
   },
   rkdX8s: function (e, r, t) {
      "use strict";
      r.__esModule = !0, r.default = function (e, r) {
         if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
      }
   },
   sCFwl2: function (e, r, t) {
      "use strict";
      t.d(r, "a", function () {
         return c
      });
      var a, n = t("AbJSf2"),
         i = t.n(n),
         o = {
            MATCH: "ET_MATCH",
            COMPETITION: "ET_COMPETITION"
         },
         c = {
            LIVE: "LIVE",
            PRE_MATCH: "PRE-MATCH"
         },
         l = {
            TENNIS: "TENNIS",
            VOLLEYBALL: "VOLLEYBALL",
            TABLE_TENNIS: "TABLE_TENNIS",
            BADMINTON: "BADMINTON"
         };
      l.TENNIS, l.VOLLEYBALL, l.TABLE_TENNIS, l.BADMINTON, a = {}, i.a(a, o.MATCH, "match"), i.a(a, o.COMPETITION, "competition")
   },
   stHoZ3: function (e, r, t) {
      "use strict";
      t.d(r, "f", function () {
         return n
      }), t.d(r, "g", function () {
         return i
      }), t.d(r, "b", function () {
         return o
      }), t.d(r, "a", function () {
         return d
      }), t.d(r, "c", function () {
         return u
      }), t.d(r, "h", function () {
         return c
      }), t.d(r, "i", function () {
         return l
      }), t.d(r, "e", function () {
         return s
      });
      var a = t("sCFwl2");
      t.d(r, "d", function () {
         return a.a
      });
      var n = "widget.from",
         i = "widget.to",
         o = {
            IFRAME_READY: "iframeReady",
            REMOVE: "remove",
            NAVIGATE: "navigate",
            BETSLIP_OUTCOMES_REMOVE: "BetslipOutcomesRemove",
            BETSLIP_OUTCOMES: "BetslipOutcomes",
            BETSLIP_MAXIMIZED: "BetslipMaximize",
            BETSLIP_MAXIMIZED_CHANGE: "BetslipMaximizedChange",
            BETSLIP_STAKE_UPDATED: "BetslipStakeUpdated",
            BETSLIP_UPDATE_STAKE: "BetslipUpdateStake",
            EVENT_INFO: "EventInfo",
            EVENT_INFO_UNSUBSCRIBE: "EventInfoUnSubscribe",
            PLACE_BET: "BetslipPlaceBet",
            CLIENT_ODDS_FORMAT: "ClientOddsFormat",
            PLACE_BET_STATE: "PlaceBetState",
            PAGE_INFO: "PageInfo",
            USER_LOGGED_IN: "UserLoggedIn",
            CLIENT_CONFIG: "ClientConfig",
            VERSIONS: "Versions",
            ODDS_FRACTIONAL: "OddsAsFractional",
            ODDS_AMERICAN: "OddsAsAmerican",
            LIBS: "Libs",
            WIDGET_ARGS: "Args",
            WIDGET_HEIGHT: "Height",
            WIDGET_ENABLE_TRANSITION: "EnableTransition",
            WIDGET_DISABLE_TRANSITION: "DisableTransition",
            WIDGET_SETUP: "Setup",
            LOGIN: "Login",
            LOGOUT: "Logout",
            CLIENT_HIDE: "ClientHide",
            CLIENT_SHOW: "ClientShow"
         },
         c = {
            PLACING: "placing",
            SUCCEEDED: "succeeded",
            FAILED: "failed"
         },
         l = {
            STAKE_UPDATE_TYPE_SINGLE: "Single",
            STAKE_UPDATE_TYPE_COMBINATION: "Combination",
            STAKE_UPDATE_TYPE_SYSTEM: "System"
         },
         s = {
            BASIC: "BASIC",
            BET_OFFERS: "BET_OFFERS",
            SCORE: "SCORE"
         },
         d = {
            SET: "set",
            REQUEST: "request",
            GET: "get"
         },
         u = {
            SINGLE: "RCT_SINGLE",
            COMBINATION: "RCT_COMBINATION",
            SYSTEM: "RCT_SYSTEM"
         }
   },
   teGIYu: function (e, r, t) {
      var a = t("065qcb"),
         n = t("IlgB8t");
      e.exports = t("PwyUBH") ? function (e, r, t) {
         return a.f(e, r, n(1, t))
      } : function (e, r, t) {
         return e[r] = t, e
      }
   },
   wmH6Ju: function (e, r) {
      e.exports = function (e) {
         if ("function" != typeof e) throw TypeError(e + " is not a function!");
         return e
      }
   },
   "y9PQt+": function (e, r, t) {
      t("O4dioj"), e.exports = t("IF0G2c").Object.assign
   }
});