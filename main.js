/*! For license information please see main.22c73255.chunk.js.LICENSE.txt */
function initPlayStage() {
  localStorage.setItem("game_x_stage", "on");
}

function initPlay() {
  localStorage.setItem("escape_x", "700.05");
  localStorage.setItem("escape_x_index", "0");
  localStorage.setItem("game_x", "on");
  localStorage.setItem("game_x_coeff", "small");
}

function endPlay() {
  localStorage.setItem("escape_x", "700.05");
  localStorage.setItem("game_x", "off");
  localStorage.setItem("game_x_stage", "off");
}

function playX() {
  let play = localStorage.getItem("game_x");
  let useCoeff = localStorage.getItem("game_x_coeff");
  if (play == "on") {
    let coeff_large = [720.0, 700.0, 500.0, 200.0, 100.0, 20.0, 10.0];

    // let coeff_small = [
    //   1000.01, 600.01, 600.01, 500.01, 400.01, 300.01, 200.01, 100.01, 7.07,
    //   6.06, 5.45, 5.05, 4.44, 3.41, 3.15, 2.51, 2.2, 1.91, 1.8, 1.7, 1.6, 1.51,
    //   1.4, 1.3, 1.2, 1.1,
    // ];
    // let coeff_small = [
    //   1000.01, 600.01, 600.01, 500.01, 200.01, 7.07, 6.46, 6.06, 5.95, 5.45,
    //   5.05, 4.44, 4.0, 3.83, 3.41, 3.15, 2.91, 2.51, 2.2, 2.0, 1.91, 1.8, 1.7,
    //   1.6, 1.51, 1.4, 1.3, 1.2, 1.1,
    // ];

    // let coeff_small = [
    //   1000.01, 900.01, 800.01, 700.01, 600.01, 500.0, 400.01, 300.01, 200.01,
    //   150.00, 100.01, 50.01, 25.01, 15.01, 9.0, 7.97, 7.57, 7.07, 6.96, 6.46, 6.06,
    //   5.95, 5.45, 5.05, 4.9, 4.44, 4.0, 3.83, 3.41, 3.15, 2.91, 2.51, 2.2, 2.0,
    //   1.91, 1.8, 1.7, 1.6, 1.51, 1.4, 1.3, 1.2, 1.1,
    // ];
    // let coeff_small = [
    //   1000.01, 900.01, 800.01, 700.01, 600.01, 500.0, 400.01, 300.01, 200.01,
    //   150.0, 100.01, 50.01, 25.01, 15.01, 9.0, 7.97, 7.07, 6.46, 6.06, 5.45,
    //   5.05, 4.44, 4.0, 3.83, 3.41, 3.15, 2.91, 2.51, 2.2, 2.0, 1.91, 1.8, 1.7,
    //   1.6, 1.51, 1.4, 1.3, 1.2, 1.1,
    // ];

    let coeff_small = [
      1000.01, 700.01, 600.01, 500.0, 400.01, 300.01, 200.01,
      2.51, 2.20, 2.00, 1.91, 1.81, 1.71,
      1.61, 1.51, 1.41, 1.30, 1.20, 1.10,1.05, 1.02, 1.01
    ];

    let index = parseInt(localStorage.getItem("escape_x_index")) || 1;

    let escapeValue = coeff_small[index + 1];
    if (useCoeff == "small") {
      escapeValue = coeff_small[index + 1];
    } else {
      escapeValue = coeff_large[index + 1];
    }
    localStorage.setItem("escape_x", escapeValue);
    localStorage.setItem("escape_x_index", index + 1);
    console.log(index, escapeValue);
  }
}

function testP() {
  console.log("logged here");
}

(this["webpackJsonpcrash-react"] = this["webpackJsonpcrash-react"] || []).push([
  [0],
  {
    1: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return u;
      }),
        a.d(t, "i", function () {
          return m;
        }),
        a.d(t, "b", function () {
          return d;
        }),
        a.d(t, "f", function () {
          return h;
        }),
        a.d(t, "g", function () {
          return p;
        }),
        a.d(t, "a", function () {
          return f;
        }),
        a.d(t, "d", function () {
          return b;
        }),
        a.d(t, "l", function () {
          return g;
        }),
        a.d(t, "o", function () {
          return y;
        }),
        a.d(t, "q", function () {
          return v;
        }),
        a.d(t, "w", function () {
          return E;
        }),
        a.d(t, "r", function () {
          return _;
        }),
        a.d(t, "t", function () {
          return w;
        }),
        a.d(t, "u", function () {
          return k;
        }),
        a.d(t, "s", function () {
          return O;
        }),
        a.d(t, "v", function () {
          return N;
        }),
        a.d(t, "p", function () {
          return x;
        }),
        a.d(t, "z", function () {
          return j;
        }),
        a.d(t, "n", function () {
          return C;
        }),
        a.d(t, "e", function () {
          return S;
        }),
        a.d(t, "h", function () {
          return A;
        }),
        a.d(t, "A", function () {
          return M;
        }),
        a.d(t, "y", function () {
          return T;
        }),
        a.d(t, "x", function () {
          return P;
        }),
        a.d(t, "j", function () {
          return D;
        }),
        a.d(t, "m", function () {
          return I;
        }),
        a.d(t, "k", function () {
          return R;
        });
      var n = a(114),
        r = (a(191), a(141)),
        s = a.n(r),
        i = a(34),
        o = a(192),
        l = a.n(o),
        c = a(237)("67e96fa3366dd8fcf8afdeafec8bcace"),
        u = !1,
        m = s.a,
        d = "",
        h = u ? "http://127.0.0.1:3000" : "https://mo2bet.com",
        p = "wss://backend.mo2bet.com",
        f = "https://backend.mo2bet.com",
        b = new l.a(),
        g = u
          ? "http://127.0.0.1:3000/assets/images/avatar.svg"
          : f + "/uploads/avatar.png";
      function y(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t.toFixed(2);
      }
      var v = parseFloat(i.get("uid"));
      function E(e) {
        if ("" === e) return !0;
        if (!isNaN(e) && /^[-]?\d+|\d+.$/.test(e)) return !0;
        return !1;
      }
      function _(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(e).toLowerCase()
        );
      }
      function w(e) {
        return /^(?:\+?[1-9]{3}|0)?1(\d{8})$/.test(e);
      }
      function k(e) {
        return /^(?:\+?[1-9]{3}|0)?7(\d{8})$/.test(e);
      }
      function O() {
        return (
          (document.documentElement.clientWidth || document.body.clientWidth) <
          768
        );
      }
      function N() {
        return (
          (document.documentElement.clientWidth || document.body.clientWidth) <
          1100
        );
      }
      function x(e) {
        return null !== document.querySelector(e)
          ? document.querySelector(e)
          : document.getElementById("helper");
      }
      function j(e) {
        var t = new Date(s.a.toNumber(e)),
          a = t.getSeconds(),
          n = t.getHours(),
          r = t.getMinutes();
        return (
          (n = n < 10 ? "0" + n : "" + n),
          (r = r < 10 ? "0" + r : "" + r),
          (r = a < 10 ? "0" + a : "" + a),
          t.getUTCFullYear() +
            "-" +
            (t.getUTCMonth() + 1) +
            "-" +
            t.getUTCDate() +
            " - " +
            n +
            ":" +
            r +
            ":" +
            a
        );
      }
      function C(e) {
        if (void 0 === e) return e;
        if (null === e) return e;
        var t = (e = e.toString()).replace("T", " "),
          a = (t = (t = t.replace("Z", "")).substr(0, e.length)).substr(
            t.length - 4
          );
        return t.replace(a, "");
      }
      var S = Object.create(null),
        A = Object.create(null),
        M = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        };
      function T(e, t, a) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e)
          return n.store.addNotification({
            message: e,
            type: r ? "danger" : "info",
            insert: "top",
            container: r ? "top-center" : "bottom-left",
            animationIn: ["animated", "pulse"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 6e3, onScreen: !0 },
          });
      }
      function P(e) {
        for (
          var t = "0123456789abcdefghiklmnopqrstuvwxyz".split(""),
            a = "",
            n = 0;
          n < e;
          n++
        )
          a += t[Math.floor(Math.random() * t.length)];
        return a;
      }
      function D() {
        return !0;
      }
      function I(e) {
        return c.encrypt(e);
      }
      function R(e) {
        return c.decrypt(e);
      }
    },
    10: function (e, t, a) {
      "use strict";
      var n = a(193),
        r = a.n(n),
        s = a(1),
        i = s.g,
        o = r.a.connect(i, {
          withCredentials: !1,
          extraHeaders: { "my-custom-header": "abcd" },
        });
      o.on("connect", function () {
        s.d.emit("connect");
      }),
        o.on("disconnect", function () {
          s.d.emit("disconnect");
          s.d.emit("waiting_crash", { time: 0 }),
            Object(s.y)(
              "Connection Lost, Trying to connect...",
              "danger",
              "top-center"
            );
        }),
        (t.a = o);
    },
    161: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(30),
        C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(5),
        C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(6),
        C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(8),
        C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(7),
        react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__
        ),
        safe_eval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(316),
        safe_eval__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          safe_eval__WEBPACK_IMPORTED_MODULE_6__
        ),
        _Socket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10),
        _Constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9),
        _Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1),
        _Storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3),
        MakeFields = (function (e) {
          Object(
            C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a
          )(a, e);
          var t = Object(
            C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a
          )(a);
          function a(e) {
            var n;
            return (
              Object(
                C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a
              )(this, a),
              ((n = t.call(this, e)).setChange = function (e) {
                var t = e.target.name,
                  a = e.target.value;
                "amount" === t &&
                  parseFloat(a) <= 0 &&
                  (a = Object(_Helper__WEBPACK_IMPORTED_MODULE_9__.o)(1e-7)),
                  n.setState(
                    Object(
                      C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a
                    )({}, t, a)
                  );
              }),
              (n.state = {
                amount: Object(_Helper__WEBPACK_IMPORTED_MODULE_9__.o)(1e-7),
                payout: (2).toFixed(2),
              }),
              n
            );
          }
          return (
            Object(
              C_Users_HP_Dev_motopasi_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a
            )(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.script,
                    t = _Helper__WEBPACK_IMPORTED_MODULE_9__.i.words(
                      e,
                      /engine.input/gi
                    );
                  if (0 === t.length) return null;
                  for (var a = [], n = 0; n < t.length; n++) {
                    var r;
                    r =
                      0 === n
                        ? "amount"
                        : 1 === n
                        ? "payout"
                        : "field_".concat(n);
                    var s =
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        "div",
                        { className: "col-6 mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                          "input",
                          {
                            className: "form-control",
                            placeholder:
                              _Helper__WEBPACK_IMPORTED_MODULE_9__.i.upperCase(
                                r
                              ),
                            id: "_" + r,
                            type: "text",
                            name: r,
                            value: this.state[r],
                            onChange: this.setChange,
                          }
                        )
                      );
                    a.push(s);
                  }
                  return a;
                },
              },
            ]),
            a
          );
        })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
      function AutoEngine() {
        (this.ws = _Socket__WEBPACK_IMPORTED_MODULE_7__.a),
          (this.token = null),
          (this.coin = null),
          (this.script = null),
          (this.gameStatus = null),
          (this.event = _Helper__WEBPACK_IMPORTED_MODULE_9__.d),
          (this.playing = !1);
      }
      (AutoEngine.prototype.idle = function () {
        var e = this;
        e.ws.on(
          _Constant__WEBPACK_IMPORTED_MODULE_8__.a.WAITING_CRASH,
          function () {
            (e.gameStatus = "waiting"), e.event.emit("waiting");
          }
        ),
          e.ws.on(
            _Constant__WEBPACK_IMPORTED_MODULE_8__.a.STARTED_CRASH,
            function () {
              (e.gameStatus = "started"), e.event.emit("started");
            }
          ),
          e.ws.on(
            _Constant__WEBPACK_IMPORTED_MODULE_8__.a.BUSTED_CRASH,
            function () {
              (e.gameStatus = "busted"), e.event.emit("busted"), endPlay();
            }
          );
      }),
        (AutoEngine.prototype.saveScripts = function (e) {
          e = _Helper__WEBPACK_IMPORTED_MODULE_9__.i.flattenDeep(e);
          var t = JSON.stringify(e);
          _Storage__WEBPACK_IMPORTED_MODULE_10__.a.setKey("scripts", t);
        }),
        (AutoEngine.prototype.getScripts = function () {
          var e = _Storage__WEBPACK_IMPORTED_MODULE_10__.a.getKey("scripts");
          return null === e
            ? null
            : _Helper__WEBPACK_IMPORTED_MODULE_9__.i.isString(e)
            ? _Helper__WEBPACK_IMPORTED_MODULE_9__.i.isEmpty(e)
              ? null
              : JSON.parse(e)
            : null;
        }),
        (AutoEngine.prototype.setUpinput = function (e) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            MakeFields,
            { name: e.name, script: e.content }
          );
        }),
        (AutoEngine.prototype.input = function (e) {
          if (((e = "_".concat(e)), null !== document.getElementById(e)))
            return document.getElementById(e).value;
        }),
        (AutoEngine.prototype.on = function (e, t) {
          return this.event.on(e, t);
        }),
        (AutoEngine.prototype.start = function () {
          var self = this;
          self.playing = !0;
          var script = _Helper__WEBPACK_IMPORTED_MODULE_9__.i.toString(
            self.script
          );
          (script = "let self = this;" + script),
            (script = _Helper__WEBPACK_IMPORTED_MODULE_9__.i.replace(
              script,
              /engine/gi,
              "self"
            ));
          try {
            eval(script);
          } catch (e) {
            console.log(e);
          }
        }),
        (AutoEngine.prototype.stop = function () {
          this.playing = !1;
        }),
        (AutoEngine.prototype.bet = function (e, t) {
          "waiting" === this.gameStatus &&
            this.playing &&
            ((e = parseFloat(e)),
            (t = parseFloat(100 * t).toFixed(2)),
            isNaN(e) ||
              (console.log(
                "bet",
                Object(_Helper__WEBPACK_IMPORTED_MODULE_9__.o)(e)
              ),
              console.log("payout", t),
              this.ws.emit(
                _Constant__WEBPACK_IMPORTED_MODULE_8__.a.PLAY_CRASH,
                Object(_Helper__WEBPACK_IMPORTED_MODULE_9__.m)({
                  token: this.token,
                  amount: Object(_Helper__WEBPACK_IMPORTED_MODULE_9__.o)(e),
                  payout: t,
                  coin: this.coin,
                })
              )));
        }),
        (__webpack_exports__.a = new AutoEngine());
    },
    217: function (e, t, a) {
      e.exports = a(342);
    },
    3: function (e, t, a) {
      "use strict";
      var n = a(5),
        r = a(6),
        s = (function () {
          function e() {
            Object(n.a)(this, e), (this.ls = window.localStorage);
          }
          return (
            Object(r.a)(e, [
              {
                key: "setKey",
                value: function (e, t) {
                  return this.ls.setItem(e, t), !0;
                },
              },
              {
                key: "getKey",
                value: function (e) {
                  var t = this.ls.getItem(e);
                  try {
                    return t;
                  } catch (a) {
                    return null;
                  }
                },
              },
              {
                key: "removeKey",
                value: function (e) {
                  this.ls.removeItem(e);
                },
              },
            ]),
            e
          );
        })();
      t.a = new s();
    },
    301: function (e, t) {},
    334: function (e, t, a) {},
    335: function (e, t, a) {},
    336: function (e, t, a) {},
    339: function (e, t, a) {},
    340: function (e, t, a) {},
    341: function (e, t, a) {},
    342: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(24),
        i = a.n(s);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var o = a(22),
        l = a(5),
        c = a(6),
        u = a(8),
        m = a(7),
        d = a(21),
        h = a(73),
        p = a.n(h),
        f = a(35),
        b = a(19),
        g = a(31),
        y = a(71),
        v = a(382),
        E = a(196),
        _ = a(396),
        w = a(114),
        k = a.n(w),
        O = a(91),
        N = a(395),
        x = a(386),
        j = a(41),
        C = Object(j.a)(),
        S = a(15),
        A = a(34),
        M = a(389),
        T = a(3),
        P = a(1),
        D = a(42),
        I = a(87),
        R = a(84),
        W = a.n(R),
        F = a(379),
        B = a(65),
        L = a(380),
        U = a(391),
        K = a(381),
        H = a(377),
        z = a(387),
        G = a(30),
        Y = [
          {
            id: 1,
            name: "KES",
            preffix: "kes",
            image: "kes.png",
            network: "btc",
            min: "0.00008000",
            active: !0,
          },
        ],
        q = a(10),
        X = a(9);
      r.a.createElement;
      function V(e) {
        var t = e.data,
          a = t.amount,
          n = t.status,
          s = t.date,
          i = t.txtid,
          o = t.coin;
        return r.a.createElement(
          "tr",
          null,
          r.a.createElement("td", null, Object(P.n)(s)),
          r.a.createElement(
            "td",
            null,
            Object(P.o)(a) + " " + P.i.upperCase(o)
          ),
          r.a.createElement("td", null, n),
          r.a.createElement(
            "td",
            null,
            r.a.createElement("input", {
              className: "form-control",
              readOnly: !0,
              value: i,
            })
          )
        );
      }
      r.a.Component;
      var Z = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.getCreditAndCoins = function (e) {
                if (n._isMounted) {
                  var t = e.credit,
                    a = e.bonus;
                  n.setState({ credits: t, loading: !1 }),
                    n.setState({ bonus: a, loading: !1 });
                }
              }),
              (n.stkResponse = function (e) {
                n._isMounted &&
                  (200 === e.status
                    ? (n.setState({
                        status: e.status.responseDescription,
                        submitted: !1,
                        cls: "alert-success",
                      }),
                      Object(P.A)(25e3).then(function () {
                        q.a.emit(
                          X.a.CREDIT,
                          Object(P.m)({
                            token: n.state.token,
                            coin: n.state.currentCoin,
                          })
                        ),
                          n.setState({ disabled: !1, status: !1 });
                      }))
                    : n.setState({
                        disabled: !1,
                        status: e.status.responseDescription,
                        submitted: !1,
                        cls: "alert-danger",
                      }));
              }),
              (n.closeStatus = function () {
                n.setState({ status: !1 });
              }),
              (n.handleChange = function (e) {
                var t = e.target,
                  a = t.value,
                  r = t.name;
                n.setState(Object(G.a)({}, r, a));
              }),
              (n.state = {
                token: T.a.getKey("token"),
                currentCoin: "KES",
                loading: !0,
                credits: {},
                status: !1,
                disabled: !1,
                submitted: !1,
                userid: T.a.getKey("uid"),
                phone: T.a.getKey("email"),
                amount: "",
                cls: "bg-secondary",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.emit(
                      X.a.CREDIT,
                      Object(P.m)({
                        token: this.state.token,
                        coin: this.state.currentCoin,
                      })
                    ),
                    q.a.on(X.a.CREDIT, function (t) {
                      return e.getCreditAndCoins(Object(P.k)(t));
                    }),
                    q.a.on(X.a.STK_DEPOSIT, function (t) {
                      return e.stkResponse(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  var t = this;
                  e.preventDefault(),
                    this.setState({
                      submitted: !0,
                      disabled: !0,
                      status: "please wait..",
                      cls: "bg-secondary",
                    });
                  var a = this.state,
                    n = a.phone,
                    r = a.amount,
                    s = a.token;
                  n && r
                    ? r < 50
                      ? this.setState({
                          status: "minimum top up amount is 50.00 KSH",
                          disabled: !1,
                          cls: "alert-warning",
                        })
                      : r > 3e3
                      ? this.setState({
                          status: "Maximum top up amount is 3000 KSH",
                          disabled: !1,
                          cls: "alert-warning",
                        })
                      : (this.setState({
                          status:
                            "please wait, initiating STK push to " + n + "..",
                          cls: "bg-secondary",
                        }),
                        q.a.emit(
                          X.a.STK_DEPOSIT,
                          Object(P.m)({ msisdn: n, amount: r, token: s })
                        ),
                        Object(P.A)(2500).then(function () {
                          t.setState({ disabled: !1, status: !1 });
                        }))
                    : this.setState({ status: !1, disabled: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.userid,
                    n = t.submitted,
                    s = t.phone,
                    i = t.amount,
                    o = t.disabled,
                    l = t.status,
                    c = t.cls;
                  return (
                    Object(P.s)(),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "animated" },
                        this.state.loading
                          ? r.a.createElement(
                              "div",
                              { className: "ycenter text-center" },
                              r.a.createElement("div", {
                                className: "spinner-border text-info",
                                role: "status",
                              })
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                { className: "m-auto min-form" },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "lrow text-center text-white p-1 ycenter",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "border-right" },
                                    r.a.createElement(
                                      "span",
                                      { className: "font-15" },
                                      "Balance"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-center mt-1 font-17" },
                                    r.a.createElement(
                                      "span",
                                      null,
                                      this.state.currentCoin,
                                      " "
                                    ),
                                    r.a.createElement(
                                      "span",
                                      { className: "text-yellow" },
                                      this.state.credits.kes
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "px-3" },
                                  r.a.createElement(
                                    "form",
                                    {
                                      className:
                                        "form-horizontal auth-form my-4",
                                      onSubmit: function (t) {
                                        e.submitForm(t);
                                      },
                                    },
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group mb-3" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text bgin",
                                            },
                                            "Phone"
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "text",
                                          name: "phone",
                                          className: "form-control",
                                          value: s,
                                          autoComplete: "off",
                                          placeholder: "2547XXXXXXXX",
                                          onChange: this.handleChange,
                                        }),
                                        n &&
                                          !s &&
                                          r.a.createElement(
                                            "div",
                                            { className: "help-block" },
                                            "Phone Number is Required"
                                          )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group mb-3" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text bgin",
                                            },
                                            "Amount"
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "number",
                                          name: "amount",
                                          className: "form-control",
                                          value: i,
                                          autoComplete: "off",
                                          placeholder: "Amount to Top up (KSH)",
                                          onChange: this.handleChange,
                                        }),
                                        n &&
                                          !i &&
                                          r.a.createElement(
                                            "div",
                                            { className: "help-block" },
                                            "Amount to top up is required"
                                          )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "text-center" },
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-primary btn-block font-weight-bold no-shadow",
                                          disabled: o,
                                        },
                                        r.a.createElement("i", {
                                          className:
                                            "fas fa-arrow-down mr-1 float-left font-18",
                                        }),
                                        " Make Deposit"
                                      )
                                    ),
                                    l &&
                                      r.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "alert text-white mt-2 mb-0 flex " +
                                            c,
                                        },
                                        r.a.createElement(
                                          "span",
                                          { className: "flex-1" },
                                          l
                                        ),
                                        r.a.createElement(
                                          "button",
                                          {
                                            type: "button",
                                            className: "close font-18",
                                            onClick: this.closeStatus,
                                          },
                                          r.a.createElement("i", {
                                            className: "mdi mdi-close",
                                          })
                                        )
                                      )
                                  )
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "px-3" },
                                r.a.createElement(
                                  "div",
                                  { style: { color: "#FFF" } },
                                  "Referral Link:"
                                ),
                                r.a.createElement("input", {
                                  type: "text",
                                  onChange: this.handleChange,
                                  value: P.f + "/aff/" + a,
                                  className: "form-control",
                                  style: { background: "#333333!important" },
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "alert bg-cs d-none" },
                                r.a.createElement(
                                  "p",
                                  { className: "mb-1 font-12" },
                                  r.a.createElement(
                                    "span",
                                    { className: "text-yellow" },
                                    "PAYBILL OPTION: "
                                  )
                                ),
                                r.a.createElement(
                                  "p",
                                  { className: "mb-0 font-12" },
                                  "1. Go to Mpesa menu and Select Lipa na M-PESA, then select Pay Bill option"
                                ),
                                r.a.createElement(
                                  "p",
                                  { className: "mb-0 font-12" },
                                  "2. Enter business number as ",
                                  r.a.createElement("span", {
                                    className: "text-yellow",
                                  })
                                ),
                                r.a.createElement(
                                  "p",
                                  { className: "mb-0 font-12" },
                                  "3. Enter the account number as ",
                                  r.a.createElement(
                                    "span",
                                    { className: "text-yellow" },
                                    "Your Phone Number"
                                  )
                                ),
                                r.a.createElement(
                                  "p",
                                  { className: "mb-0 font-12" },
                                  "4. Enter the amount you want to deposit"
                                ),
                                r.a.createElement(
                                  "p",
                                  { className: "mb-0 font-12" },
                                  "5. Enter your Mpesa pin and Confirm the request"
                                )
                              )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        J = r.a.createElement,
        $ =
          (r.a.Component,
          (function (e) {
            Object(u.a)(a, e);
            var t = Object(m.a)(a);
            function a() {
              return Object(l.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(c.a)(a, [
                {
                  key: "createMarkup",
                  value: function (e) {
                    return { __html: e };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.data,
                      t = (e.id, e.amount),
                      a = e.wallet,
                      n = e.status,
                      s = e.date,
                      i = e.coin;
                    (t = Object(P.o)(t)),
                      (n = r.a.createElement("div", {
                        dangerouslySetInnerHTML: this.createMarkup(n),
                      }));
                    var o = J("td", {}, Object(P.n)(s)),
                      l = J("td", {}, a),
                      c = J("td", {}, t + " " + P.i.upperCase(i)),
                      u = J("td", { className: "text-warning" }, n);
                    return J("tr", {}, [o, l, c, u]);
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        Q = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.getCreditAndCoins = function (e) {
                if (n._isMounted) {
                  var t = e.credit;
                  n.setState({ credits: t, loading: !1 });
                }
              }),
              (n.closeStatus = function () {
                n.setState({ status: !1 });
              }),
              (n.handleChange = function (e) {
                var t = e.target,
                  a = t.value,
                  r = t.name;
                n.setState(Object(G.a)({}, r, a));
              }),
              (n.state = {
                token: T.a.getKey("token"),
                currentCoin: "KSH",
                loading: !0,
                credits: {},
                status: !1,
                disabled: !1,
                submitted: !1,
                phone: T.a.getKey("email") || "",
                amount: "",
                cls: "bg-secondary",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.emit(
                      X.a.CREDIT,
                      Object(P.m)({
                        token: this.state.token,
                        coin: this.state.currentCoin,
                      })
                    ),
                    q.a.on(X.a.CREDIT, function (t) {
                      return e.getCreditAndCoins(Object(P.k)(t));
                    }),
                    q.a.on(X.a.SUBMIT_NEW_WITHDRAWL, function (t) {
                      return e.addWithdrawal(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "addWithdrawal",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (0 === e.code
                      ? (this.setState({
                          status: e.response,
                          submitted: !1,
                          cls: "alert-success",
                        }),
                        Object(P.A)(15e3).then(function () {
                          q.a.emit(
                            X.a.CREDIT,
                            Object(P.m)({
                              token: t.state.token,
                              coin: t.state.currentCoin,
                            })
                          ),
                            t.setState({ disabled: !1, status: !1 });
                        }))
                      : this.setState({
                          disabled: !1,
                          status: e.response,
                          submitted: !1,
                          cls: "alert-danger",
                        }));
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  var t = this;
                  e.preventDefault(),
                    this.setState({
                      submitted: !0,
                      disabled: !0,
                      status: "please wait..",
                      cls: "bg-secondary",
                    });
                  var a = this.state,
                    n = a.phone,
                    r = a.amount,
                    s = a.token;
                  console.log(this.state.credits.kes),
                    n && r
                      ? parseInt(r) < 100
                        ? this.setState({
                            status: "minimum Withdrawal amount is 100.00 KSH",
                            disabled: !1,
                            cls: "alert-warning",
                          })
                        : (parseInt(r) < 1e3 &&
                            parseInt(r) + 16 > this.state.credits.kes) ||
                          (parseInt(r) > 999 &&
                            parseInt(r) + 23 > this.state.credits.kes)
                        ? this.setState({
                            status: "Insufficient funds",
                            disabled: !1,
                            cls: "alert-warning",
                          })
                        : (this.setState({
                            status: "please wait, withdrawal to " + n + "..",
                            cls: "bg-secondary",
                          }),
                          q.a.emit(
                            X.a.SUBMIT_NEW_WITHDRAWL,
                            Object(P.m)({ token: s, amount: r, msisdn: n })
                          ),
                          Object(P.A)(2500).then(function () {
                            t.setState({ disabled: !1, status: !1 });
                          }))
                      : this.setState({ status: !1, disabled: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.submitted,
                    n = t.phone,
                    s = t.amount,
                    i = t.disabled,
                    o = t.status,
                    l = t.cls;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "animated" },
                      this.state.loading
                        ? r.a.createElement(
                            "div",
                            { className: "ycenter text-center" },
                            r.a.createElement("div", {
                              className: "spinner-border text-info",
                              role: "status",
                            })
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              { className: "m-auto min-form" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "lrow text-center text-white p-1 ycenter",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "border-right" },
                                  r.a.createElement(
                                    "span",
                                    { className: "font-15" },
                                    "Balance"
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "text-center mt-1 font-17" },
                                  r.a.createElement(
                                    "span",
                                    null,
                                    this.state.currentCoin,
                                    " "
                                  ),
                                  r.a.createElement(
                                    "span",
                                    { className: "text-yellow" },
                                    this.state.credits.kes
                                  )
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "px-3" },
                                r.a.createElement(
                                  "form",
                                  {
                                    className: "form-horizontal auth-form my-4",
                                    onSubmit: function (t) {
                                      e.submitForm(t);
                                    },
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group mb-3" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className: "input-group-text bgin",
                                          },
                                          "Phone"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        name: "phone",
                                        className: "form-control",
                                        value: n,
                                        autoComplete: "off",
                                        placeholder: "2547XXXXXXXX",
                                        onChange: this.handleChange,
                                      }),
                                      a &&
                                        !n &&
                                        r.a.createElement(
                                          "div",
                                          { className: "help-block" },
                                          "Phone Number is Required"
                                        )
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group mb-3" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className: "input-group-text bgin",
                                          },
                                          "Amount"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "number",
                                        name: "amount",
                                        className: "form-control",
                                        value: s,
                                        autoComplete: "off",
                                        placeholder: "Amount to Withdraw (KSH)",
                                        onChange: this.handleChange,
                                      }),
                                      a &&
                                        !s &&
                                        r.a.createElement(
                                          "div",
                                          { className: "help-block" },
                                          "Amount to Withdraw is required"
                                        )
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-center" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        className:
                                          "btn btn-primary btn-block font-weight-bold no-shadow",
                                        disabled: i,
                                      },
                                      r.a.createElement("i", {
                                        className:
                                          "fas fa-arrow-up mr-1 float-left font-18",
                                      }),
                                      " Make Withdrawal"
                                    )
                                  ),
                                  o &&
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "alert text-white mt-3 mb-0 flex " +
                                          l,
                                      },
                                      r.a.createElement(
                                        "span",
                                        { className: "flex-1" },
                                        o
                                      ),
                                      r.a.createElement(
                                        "button",
                                        {
                                          type: "button",
                                          className: "close font-18",
                                          onClick: this.closeStatus,
                                        },
                                        r.a.createElement("i", {
                                          className: "mdi mdi-close",
                                        })
                                      )
                                    )
                                )
                              )
                            )
                          )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        ee = a(74),
        te = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).getDetail = function (e) {
                e.preventDefault(),
                  void 0 !== n.props.clicked && n.props.clicked(),
                  P.d.emit("single_game_modal_close"),
                  P.d.emit("force_modal_user"),
                  q.a.emit(
                    X.a.USER_INFO,
                    Object(P.m)({
                      name: n.props.username,
                      coin: n.state.coin,
                      game: "all",
                      first: !0,
                    })
                  );
              }),
              (n.makeStars = function (e) {
                for (
                  var t = 5 - parseFloat(e), a = [], n = [], s = [], i = 0;
                  i < t;
                  i++
                )
                  a.push(r.a.createElement("i", { className: "mdi mdi-star" }));
                for (i = 0; i < e; i++)
                  n.push(
                    r.a.createElement("i", {
                      className: "mdi mdi-star",
                      style: { color: "rgba(248,133,49,1)" },
                    })
                  );
                return s.push(n, a), s;
              }),
              (n.state = { coin: "kes" }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.username,
                    n = t.isWinner,
                    s = t.cssClass,
                    i = t.queue,
                    o = t.menu,
                    l = t.avatar,
                    c = t.chat,
                    u = t.level;
                  !0 === n && (s = "text-success");
                  var m = r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      b.b,
                      {
                        to: "/user/" + a,
                        onClick: function (t) {
                          return e.getDetail(t);
                        },
                        className: s,
                      },
                      a
                    )
                  );
                  if (o)
                    m = r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        b.b,
                        {
                          to: "/user/" + a,
                          onClick: function (t) {
                            return e.getDetail(t);
                          },
                          className: "text-muted ng",
                        },
                        r.a.createElement("p", { className: "p-0 m-0" })
                      )
                    );
                  else if (i) {
                    (void 0 !== l && !1 !== l && "" !== l && null !== l) || P.l;
                    m = r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        b.b,
                        {
                          to: "/user/" + a,
                          onClick: function (t) {
                            return e.getDetail(t);
                          },
                          className: s,
                        },
                        a
                      )
                    );
                  } else
                    l &&
                      (m = r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          b.b,
                          {
                            to: "/user/" + a,
                            onClick: function (t) {
                              return e.getDetail(t);
                            },
                            className: s,
                          },
                          r.a.createElement(
                            "ul",
                            { className: "ml-2 mt-0 d-flex" },
                            r.a.createElement("span", null, a),
                            r.a.createElement(
                              "b",
                              { className: "user-level" },
                              this.makeStars(u)
                            )
                          )
                        )
                      )),
                      c &&
                        null === l &&
                        (m = r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            b.b,
                            {
                              to: "/user/" + a,
                              onClick: function (t) {
                                return e.getDetail(t);
                              },
                              className: s,
                            },
                            r.a.createElement(
                              "ul",
                              { className: "ml-1 mt-0 d-flex" },
                              r.a.createElement("span", null, a),
                              r.a.createElement(
                                "b",
                                { className: "user-level" },
                                this.makeStars(u)
                              )
                            )
                          )
                        ));
                  return m;
                },
              },
            ]),
            a
          );
        })(n.Component),
        ae = Object(d.b)(function (e) {
          return { coin: e.items.coin };
        }, {})(te),
        ne = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.makeHistory = function (e) {
                if (n._isMounted) {
                  if ("undefined" === typeof e.history) return;
                  n.setState({ loading: !1 }),
                    e.history.forEach(function (e, t) {
                      var a = r.a.createElement(re, {
                        key: t,
                        result: e.result,
                        hash: e.hash,
                        self: !0,
                        id: e.gid,
                        game: e.game,
                        created: e.created,
                        coin: e.coin,
                        username: e.username,
                        amount: Object(P.o)(e.amount),
                        profit: e.profit ? Object(P.o)(e.profit) : "0.00000000",
                      });
                      n.setState(function (e) {
                        return { history: [a].concat(Object(o.a)(e.history)) };
                      });
                    });
                }
              }),
              (n.nextPage = function () {
                n._isMounted && n.setState({ next: !0 });
              }),
              (n.state = {
                token: T.a.getKey("token"),
                loading: !0,
                next: !1,
                history: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    (function () {
                      if (null !== document.getElementById("list")) {
                        new ee.a("#list", {
                          wheelSpeed: 1,
                          suppressScrollX: !0,
                          wheelPropagation: !0,
                          minScrollbarLength: 2,
                        }).update();
                      }
                    })(),
                    Object(P.A)(500).then(function () {
                      q.a.emit(
                        X.a.MY_HISTORY,
                        Object(P.m)({ token: e.state.token })
                      );
                    }),
                    q.a.on(X.a.MY_HISTORY, function (t) {
                      return e.makeHistory(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.loading,
                    a = e.history,
                    n = e.next,
                    s = a.length / 2;
                  return (
                    n || (a = a.slice(s)),
                    a.length > 1 && (a.length = 10),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        t &&
                          r.a.createElement(
                            "div",
                            { className: "text-center my-3" },
                            r.a.createElement("div", {
                              className: "spinner-border text-info",
                              role: "status",
                            })
                          ),
                        !t &&
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              {
                                className: "user-history",
                                id: "list",
                                style: { height: 400 },
                              },
                              r.a.createElement(
                                "div",
                                { className: "table-responsive mt-2" },
                                r.a.createElement(
                                  "table",
                                  { className: "table table-hover font-13" },
                                  r.a.createElement(
                                    "thead",
                                    null,
                                    r.a.createElement(
                                      "tr",
                                      null,
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "Game"
                                      ),
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "BET ID"
                                      ),
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "Amount"
                                      ),
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "Profit"
                                      ),
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "Date/Time"
                                      ),
                                      r.a.createElement(
                                        "th",
                                        { scope: "col" },
                                        "HASH"
                                      )
                                    )
                                  ),
                                  a.length > 0 && a
                                ),
                                0 === a.length &&
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "alert bg-soft-dark mt-2 w-100 font-13 text-center",
                                    },
                                    "Your history list is empty"
                                  ),
                                a.length > 0 &&
                                  r.a.createElement(
                                    "div",
                                    {
                                      onClick: this.nextPage,
                                      className: "text-center font-13 cpt mb-2",
                                    },
                                    r.a.createElement("i", {
                                      className:
                                        "mdi mdi-arrow-right-bold-circle",
                                    }),
                                    " Next Page"
                                  )
                              )
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        re = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
              ((r = t.call(this, e)).gameDetail = function () {
                P.d.emit("single_game_modal", { data: r.props });
              }),
              (r.myRef = Object(n.createRef)()),
              r
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "copy",
                value: function () {
                  var e = this.myRef.current.getAttribute("data-tip"),
                    t = r.a.createElement("input", { id: "id" + e, value: e });
                  i.a.render(t, document.getElementById("helper"));
                  var a = document.getElementById("id" + e);
                  null !== a &&
                    Object(P.A)(1e3).then(function () {
                      a.select(),
                        a.setSelectionRange(0, 99999),
                        document.execCommand("copy"),
                        Object(P.y)("Hash Copied !", "info", "bottom-center");
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.username,
                    s = a.amount,
                    i = a.profit,
                    o = a.coin,
                    l = a.created,
                    c = a.hash,
                    u = a.id,
                    m = a.self,
                    d = a.game,
                    h = !1;
                  0 !== P.i.toNumber(i) && (h = !0);
                  try {
                    e = c.substr(0, 10) + "...";
                  } catch (p) {}
                  return r.a.createElement(
                    "tr",
                    { className: "cpt" },
                    r.a.createElement("td", { onClick: this.gameDetail }, d),
                    r.a.createElement("td", { onClick: this.gameDetail }, u),
                    !m &&
                      r.a.createElement(
                        "td",
                        null,
                        r.a.createElement(ae, { username: n, isWinner: h })
                      ),
                    r.a.createElement(
                      "td",
                      {
                        onClick: this.gameDetail,
                        className:
                          !0 === h ? "text-success-2 num-style" : "num-style",
                      },
                      r.a.createElement("img", {
                        src: "/assets/images/kes.png",
                        className: "mini-coin-2 hidden-sm",
                        alt: o,
                      }),
                      s,
                      " ",
                      P.i.upperCase(o)
                    ),
                    r.a.createElement(
                      "td",
                      {
                        onClick: this.gameDetail,
                        className:
                          !0 === h ? "text-success-2 num-style" : "num-style",
                      },
                      r.a.createElement("img", {
                        src: "/assets/images/kes.png",
                        className: "mini-coin-2 hidden-sm",
                        alt: o,
                      }),
                      i,
                      " ",
                      P.i.upperCase(o)
                    ),
                    r.a.createElement(
                      "td",
                      { onClick: this.gameDetail },
                      Object(P.n)(l)
                    ),
                    m &&
                      r.a.createElement(
                        "td",
                        { onClick: this.gameDetail },
                        r.a.createElement(f.a, null),
                        r.a.createElement(
                          "span",
                          {
                            ref: this.myRef,
                            onClick: function (e) {
                              return t.copy(c);
                            },
                            "data-tip": c,
                          },
                          e
                        )
                      )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      var se = ne,
        ie = ["children", "value", "index"];
      function oe(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          s = Object(I.a)(e, ie);
        return r.a.createElement(
          "div",
          Object.assign(
            {
              role: "tabpanel",
              hidden: a !== n,
              id: "full-width-tabpanel-".concat(n),
              "aria-labelledby": "full-width-tab-".concat(n),
            },
            s
          ),
          a === n &&
            r.a.createElement(z.a, { p: 1 }, r.a.createElement(H.a, null, t))
        );
      }
      function le(e) {
        return {
          id: "full-width-tab-".concat(e),
          "aria-controls": "full-width-tabpanel-".concat(e),
        };
      }
      var ce = Object(F.a)(function (e) {
        return { root: { width: "100%" } };
      });
      var ue = function () {
          var e = ce(),
            t = Object(B.a)(),
            a = r.a.useState(0),
            n = Object(D.a)(a, 2),
            s = n[0],
            i = n[1];
          return r.a.createElement(
            "div",
            { className: e.root },
            r.a.createElement(
              L.a,
              {
                position: "static",
                color: "transparent",
                backgroun: "transparent",
              },
              r.a.createElement(
                U.a,
                {
                  value: s,
                  onChange: function (e, t) {
                    i(t);
                  },
                  indicatorColor: "primary",
                  textColor: "white",
                  variant: "primary",
                  "aria-label": "full width tabs",
                  centered: !0,
                },
                r.a.createElement(
                  K.a,
                  Object.assign({ label: "Deposit" }, le(0))
                ),
                r.a.createElement(
                  K.a,
                  Object.assign({ label: "Withdrawal" }, le(1))
                ),
                r.a.createElement(
                  K.a,
                  Object.assign({ label: "History" }, le(2))
                )
              )
            ),
            r.a.createElement(
              W.a,
              {
                axis: "rtl" === t.direction ? "x-reverse" : "x",
                index: s,
                onChangeIndex: function (e) {
                  i(e);
                },
              },
              r.a.createElement(
                oe,
                { value: s, index: 0, dir: t.direction },
                r.a.createElement(Z, null)
              ),
              r.a.createElement(
                oe,
                { value: s, index: 1, dir: t.direction },
                r.a.createElement(Q, null)
              ),
              r.a.createElement(
                oe,
                { value: s, index: 2, dir: t.direction },
                r.a.createElement(se, null)
              )
            )
          );
        },
        me = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { show: !1 }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  P.d.on("other_coins", function () {
                    e.setState({ show: !1 });
                  }),
                    P.d.on("update_payment", function () {
                      e.setState({ show: !1 });
                    });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({ show: !1, effect: "zoomOut" });
                },
              },
              {
                key: "handleShow",
                value: function () {
                  if (null === T.a.getKey("token"))
                    return Object(P.y)(
                      "Please Login to use this option.",
                      "warning",
                      "top-right"
                    );
                  this.setState({ show: !0, effect: "pulse" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.menu;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    e
                      ? r.a.createElement(
                          M.a.Toggle,
                          {
                            onClick: this.handleShow,
                            split: !0,
                            variant:
                              "user mt-2-5 py-1 mr-3 btn-wallet no-shadow",
                            id: "dropdown-notification-user",
                          },
                          r.a.createElement("i", {
                            className:
                              "dripicons-wallet text-drop mr-1 font-13",
                          }),
                          " Wallet"
                        )
                      : r.a.createElement(
                          "span",
                          {
                            onClick: this.handleShow,
                            className: "btn btn-success btn-sm btn-deposit",
                          },
                          "Deposit"
                        ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        backdrop: "static",
                        centered: !0,
                        scrollable: !1,
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "wallet-md-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        null,
                        "Wallet",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "p-0 wallet-modal", closeButton: !0 },
                        r.a.createElement(ue, null)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        de = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.handleCheckBox = function (e) {
                n.setState({ checkbox: !0, loadingPrivacy: !0 }),
                  Object(P.A)(1200).then(function () {
                    return (
                      n.setState({ loadingPrivacy: !1, checkbox: !1 }),
                      Object(P.y)(
                        "This feature can't be active in your account !",
                        "info",
                        "top-center"
                      )
                    );
                  });
              }),
              (n.state = {
                firstUserName: T.a.getKey("name"),
                firstEmail:
                  "false" !== T.a.getKey("email") ? T.a.getKey("email") : "",
                token: T.a.getKey("token"),
                email:
                  "false" !== T.a.getKey("email") ? T.a.getKey("email") : "",
                username: T.a.getKey("name"),
                loadingEmail: !1,
                loadingUsername: !1,
                loadingPrivacy: !1,
                loading2Fa: !1,
                checkbox: !1,
                checkbox2: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.on(X.a.EDIT_ACCOUNT, function (t) {
                      return e.updateProfile(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "updateProfile",
                value: function (e) {
                  if (this._isMounted) {
                    if (
                      (this.setState({ loadingUsername: !1, loadingEmail: !1 }),
                      !e.status)
                    )
                      return Object(P.y)(e.error, "success", "top-center");
                    T.a.setKey("name", this.state.username),
                      T.a.setKey("email", this.state.email),
                      Object(P.y)(
                        "Your Account Setting was Updated !",
                        "success",
                        "top-center"
                      ),
                      window.location.reload();
                  }
                },
              },
              {
                key: "save",
                value: function (e) {
                  if (this._isMounted) {
                    var t = this.state,
                      a = t.token,
                      n = t.email,
                      r = t.username,
                      s = t.firstUserName,
                      i = t.firstEmail;
                    if ("email" === e) {
                      if (n === i)
                        return Object(P.y)(
                          "Please Enter New Email Address !",
                          "info",
                          "top-center"
                        );
                      if (!n)
                        return void document
                          .getElementById("email")
                          .classList.add("border-danger");
                      if ("" === n.trim())
                        return void document
                          .getElementById("email")
                          .classList.add("border-danger");
                      if (!Object(P.r)(n))
                        return void document
                          .getElementById("email")
                          .classList.add("border-danger");
                      this.setState({ loadingEmail: !0 }),
                        Object(P.A)(100).then(function () {
                          q.a.emit(
                            X.a.EDIT_ACCOUNT,
                            Object(P.m)({ token: a, email: n })
                          );
                        });
                    }
                    if ("username" === e) {
                      if (r === s)
                        return Object(P.y)(
                          "Please Enter New Username !",
                          "info",
                          "top-center"
                        );
                      if (!r)
                        return void document
                          .getElementById("username")
                          .classList.add("border-danger");
                      if ("" === r.trim())
                        return void document
                          .getElementById("username")
                          .classList.add("border-danger");
                      this.setState({ loadingUsername: !0 }),
                        Object(P.A)(500).then(function () {
                          q.a.emit(
                            X.a.EDIT_ACCOUNT,
                            Object(P.m)({ token: a, username: r })
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(f.a, null),
                    r.a.createElement(
                      v.a,
                      null,
                      r.a.createElement(
                        E.a,
                        { sm: 6 },
                        r.a.createElement(
                          "label",
                          { htmlFor: "email" },
                          "Phone No"
                        ),
                        r.a.createElement(
                          "div",
                          { className: "input-group" },
                          r.a.createElement("input", {
                            type: "email",
                            id: "email",
                            autoComplete: "off",
                            className: "form-control",
                            placeholder: "Enter New Phone",
                            value: this.state.email,
                            required: !0,
                            onChange: function (t) {
                              return e.setState({ email: t.target.value });
                            },
                          }),
                          r.a.createElement(
                            "div",
                            { className: "input-group-append" },
                            r.a.createElement(
                              "button",
                              {
                                onClick: function (t) {
                                  return e.save("email");
                                },
                                type: "button",
                                className:
                                  "btn btn-secondary no-shadow btn-clipboard",
                                "data-tip": "Save",
                              },
                              this.state.loadingEmail
                                ? r.a.createElement("div", {
                                    className:
                                      "spinner-border spinner-border-sm",
                                    role: "status",
                                  })
                                : r.a.createElement("i", {
                                    className: "mdi mdi-content-save-settings",
                                  })
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        E.a,
                        { sm: 6 },
                        r.a.createElement(
                          "label",
                          { htmlFor: "username" },
                          "Username"
                        ),
                        r.a.createElement(
                          "div",
                          { className: "input-group" },
                          r.a.createElement("input", {
                            type: "username",
                            id: "username",
                            autoComplete: "off",
                            className: "form-control",
                            value: this.state.username,
                            required: !0,
                            onChange: function (t) {
                              return e.setState({ username: t.target.value });
                            },
                          }),
                          r.a.createElement(
                            "div",
                            { className: "input-group-append" },
                            r.a.createElement(
                              "button",
                              {
                                onClick: function (t) {
                                  return e.save("username");
                                },
                                type: "button",
                                className:
                                  "btn btn-secondary no-shadow btn-clipboard",
                                "data-tip": "Save",
                              },
                              this.state.loadingUsername
                                ? r.a.createElement("div", {
                                    className:
                                      "spinner-border spinner-border-sm",
                                    role: "status",
                                  })
                                : r.a.createElement("i", {
                                    className: "mdi mdi-content-save-settings",
                                  })
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        he = a(195),
        pe = a(197),
        fe = a.n(pe),
        be = P.l,
        ge = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.instance = null),
              (n.chooseAvatar = function () {
                n._isMounted && Object(P.p)("#avatar-button-file").click();
              }),
              (n.state = {
                disabled: !1,
                avatar:
                  "null" !== T.a.getKey("avatar") ? T.a.getKey("avatar") : be,
              }),
              (n.responseStatus = n.responseStatus.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    (this.instance = new fe.a(q.a)),
                    this.instance.addEventListener("start", function (e) {
                      e.file.meta.token = T.a.getKey("token");
                    }),
                    this.instance.listenOnInput(
                      Object(P.p)("#avatar-button-file")
                    ),
                    q.a.on(X.a.SAVE_AVATAR, function (t) {
                      return e.responseStatus(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    this.instance.removeEventListener(
                      "start",
                      this.instance.prompt,
                      !1
                    ),
                    this.instance.destroy(),
                    (this.instance = null);
                },
              },
              {
                key: "responseStatus",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.status,
                      a = e.file;
                    if (!0 === t) {
                      var n = P.a + "/uploads/" + a;
                      T.a.setKey("avatar", n), this.setState({ avatar: n });
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.avatar;
                  return (
                    (null !== t && t) || (t = "/assets/images/avatar.png"),
                    r.a.createElement(
                      "div",
                      { className: "avatar-upload my-4 text-center" },
                      r.a.createElement("img", {
                        src: t,
                        className: "thumb-lg bg-dark rounded-circle",
                        alt: "Avatar",
                      }),
                      r.a.createElement("br", null),
                      r.a.createElement(
                        he.a,
                        {
                          size: "sm",
                          onClick: function (t) {
                            return e.chooseAvatar(t);
                          },
                          variant: "- bg-cs2",
                          className: "mt-2 btn-sm no-shadow",
                        },
                        r.a.createElement("i", {
                          className: "fas fa-upload mr-1",
                        }),
                        "Upload Avatar"
                      ),
                      r.a.createElement("input", {
                        accept: "image/*",
                        id: "avatar-button-file",
                        type: "file",
                        className: "d-none",
                        onChange: this.upload,
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        ye = a(388),
        ve = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.back = function () {
                n.props.clicked();
              }),
              (n.state = {
                loading: !0,
                disabled: !1,
                password: "",
                _password: "",
              }),
              (n.saveUserSetting = n.saveUserSetting.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.on(X.a.EDIT_PASSWORD, function (t) {
                      return e.updateProfile(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  Object(P.A)(500).then(function () {
                    e.setState({ loading: !1 });
                  });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "saveUserSetting",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    Object(P.A)(750).then(function () {
                      q.a.emit(
                        X.a.EDIT_PASSWORD,
                        Object(P.m)({
                          token: T.a.getKey("token"),
                          password: t.state.password,
                        })
                      );
                    });
                },
              },
              {
                key: "updateProfile",
                value: function (e) {
                  if (this._isMounted)
                    return (
                      this.setState({ disabled: !1 }),
                      e.status
                        ? Object(P.y)(
                            "Your Account Password was Updated ",
                            "success",
                            "top-center"
                          )
                        : Object(P.y)(e.error, "error", "top-center")
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.loading
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "div",
                            {
                              className: "text-center",
                              style: { minHeight: 150 },
                            },
                            r.a.createElement("div", {
                              class:
                                "spinner-border text-info my-2 user-loader",
                              role: "status",
                            })
                          )
                        )
                      : r.a.createElement(
                          ye.a,
                          {
                            onSubmit: function (t) {
                              t.preventDefault(),
                                e.state.password
                                  ? e.state._password
                                    ? (e.state.password !== e.state._password &&
                                        Object(P.y)(
                                          "Passwords is different!",
                                          "error",
                                          "top-center"
                                        ),
                                      e.state.password === e.state._password &&
                                        (e.setState({ disabled: !0 }),
                                        e.saveUserSetting(t)))
                                    : document
                                        .getElementById("_password")
                                        .classList.add("border-danger")
                                  : document
                                      .getElementById("password")
                                      .classList.add("border-danger");
                            },
                          },
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              E.a,
                              { sm: 6 },
                              r.a.createElement(
                                "label",
                                { className: "mt-1", htmlFor: "password" },
                                "New Password"
                              ),
                              r.a.createElement("input", {
                                type: "password",
                                id: "password",
                                autoComplete: "off",
                                className: "form-control",
                                value: this.state.password,
                                required: !0,
                                onChange: function (t) {
                                  return e.setState({
                                    password: t.target.value,
                                  });
                                },
                              })
                            ),
                            r.a.createElement(
                              E.a,
                              { sm: 6 },
                              r.a.createElement(
                                "label",
                                { className: "mt-1", htmlFor: "_password" },
                                "Confirm Password"
                              ),
                              r.a.createElement("input", {
                                type: "password",
                                id: "_password",
                                autoComplete: "off",
                                className: "form-control",
                                value: this.state._password,
                                required: !0,
                                onChange: function (t) {
                                  return e.setState({
                                    _password: t.target.value,
                                  });
                                },
                              })
                            ),
                            r.a.createElement(
                              E.a,
                              { sm: 12, className: "mt-4 text-center" },
                              r.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-sm btn-purple no-shadow",
                                  disabled: this.state.disabled,
                                },
                                r.a.createElement("i", {
                                  className:
                                    "mdi mdi-content-save-outline align-middle mr-1",
                                }),
                                "Save New Password",
                                this.state.disabled &&
                                  r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement("div", {
                                      className:
                                        "ml-2 spinner-border spinner-border-sm",
                                    })
                                  )
                              ),
                              r.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-xs bg-cs btn-back",
                                  onClick: this.back,
                                },
                                "Back"
                              )
                            )
                          )
                        )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ee = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).changePage = function (e) {
                n.setState({ general: !n.state.general });
              }),
              (n.state = { show: !1, general: !0 }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "handleClose",
                value: function () {
                  var e = this;
                  this.setState({ show: !1, effect: "delayAn zoomOut" }),
                    Object(P.A)(500).then(function () {
                      e.setState({ general: !0 });
                    });
                },
              },
              {
                key: "handleShow",
                value: function () {
                  if (null === T.a.getKey("token"))
                    return Object(P.y)(
                      "Please Login !",
                      "warning",
                      "top-center"
                    );
                  this.setState({ show: !0, effect: "delayAn pulse" });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "span",
                      { onClick: this.handleShow, className: "dropdown-item" },
                      r.a.createElement("i", {
                        className: "dripicons-gear text-muted mr-2 text-drop",
                      }),
                      "Profile"
                    ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        centered: !0,
                        backdrop: "static",
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "setting-lg-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        { className: "Header" },
                        "Setting ",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        null,
                        this.state.general &&
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              E.a,
                              { sm: 12, md: 12 },
                              r.a.createElement(ge, null)
                            ),
                            r.a.createElement(
                              E.a,
                              { sm: 12, md: 12, className: "mt-2" },
                              r.a.createElement(de, null)
                            ),
                            r.a.createElement(
                              E.a,
                              { sm: 12, md: 12, className: "text-center mt-3" },
                              r.a.createElement(
                                "button",
                                {
                                  className: "btn bg-cs no-shadow btn-sm",
                                  onClick: this.changePage,
                                },
                                r.a.createElement("i", {
                                  className: "mdi mdi-key align-middle",
                                }),
                                " Change Password"
                              )
                            )
                          ),
                        !this.state.general &&
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              E.a,
                              { sm: 12, md: 12 },
                              r.a.createElement(ve, {
                                clicked: this.changePage,
                              })
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        _e = a(398),
        we = a(43),
        ke = a.n(we),
        Oe = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.state = {
                friends:
                  null !== T.a.getKey("friends") ? T.a.getKey("friends") : null,
                token: T.a.getKey("token"),
                button: "Add",
                loading: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.setUpFriends(),
                    q.a.on(X.a.ADD_FRIEND, function (t) {
                      return e.updateFriends(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "setUpFriends",
                value: function () {
                  var e = this;
                  this._isMounted &&
                    Object(P.A)(500).then(function () {
                      null !== e.state.friends &&
                        P.i
                          .split(e.state.friends, ",")
                          .includes(e.props.name) &&
                        e.setState({ button: "Remove" });
                    });
                },
              },
              {
                key: "updateFriends",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    Object(P.A)(350).then(function () {
                      e.status
                        ? t.setState({ button: "Remove" })
                        : t.setState({ button: "Add" }),
                        T.a.setKey("friends", e.data),
                        t.setState({ friends: e.data }),
                        t.setState({ loading: !1 }),
                        Object(P.y)(
                          "Friend list updated",
                          "success",
                          "top-center"
                        ),
                        t.setUpFriends(),
                        P.d.emit("pm_update");
                    });
                },
              },
              {
                key: "setFriend",
                value: function (e) {
                  if (this._isMounted) {
                    if (null === e) return;
                    if (null === this.state.token)
                      return Object(P.y)(
                        "Please Login to Use this Option",
                        "info",
                        "top-center"
                      );
                    this.setState({ loading: !0 }),
                      q.a.emit(
                        X.a.ADD_FRIEND,
                        Object(P.m)({ token: this.state.token, name: e })
                      );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (T.a.getKey("name") === this.props.name) return null;
                  if (null === this.props.name || !this.props.name) return null;
                  if ("SystemBot" === this.props.name) return null;
                  var t = this.props,
                    a = t.pv,
                    n = t.onModal,
                    s = t.onChat;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(f.a, null),
                    !0 === n
                      ? r.a.createElement(
                          "button",
                          {
                            className:
                              "btn btn-cs-6 btn-xs shadow-none text-white rounded font-12 px-3 text-uppercase",
                            onClick: function () {
                              return e.setFriend(e.props.name);
                            },
                            disabled: this.state.loading,
                          },
                          this.state.loading
                            ? r.a.createElement("div", {
                                class:
                                  "spinner-grow spinner-grow-sm align-middle mr-1",
                              })
                            : r.a.createElement("i", {
                                className:
                                  "mdi mdi-account-plus font-17 align-middle mr-1",
                              }),
                          this.state.button
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          !0 === s
                            ? r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                  "div",
                                  { className: "list-inline-item ml-2" },
                                  r.a.createElement(
                                    "span",
                                    {
                                      className: "cpt",
                                      "data-tip": this.state.button,
                                      onClick: function () {
                                        return e.setFriend(e.props.name);
                                      },
                                    },
                                    r.a.createElement("i", {
                                      className:
                                        "mdi mdi-account-plus font-18 align-middle",
                                    })
                                  )
                                )
                              )
                            : r.a.createElement(
                                r.a.Fragment,
                                null,
                                !0 !== a
                                  ? r.a.createElement(
                                      "div",
                                      { className: "list-inline-item ml-2" },
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-cs btn-xs shadow-none",
                                          onClick: function () {
                                            return e.setFriend(e.props.name);
                                          },
                                        },
                                        r.a.createElement("i", {
                                          className:
                                            "mdi mdi-account-plus font-14",
                                        }),
                                        " ",
                                        this.state.button
                                      )
                                    )
                                  : r.a.createElement(
                                      "button",
                                      {
                                        className:
                                          "btn btn-soft-danger btn-xs m-1",
                                        "data-tip": this.state.button,
                                        onClick: function () {
                                          return e.setFriend(e.props.name);
                                        },
                                      },
                                      r.a.createElement("i", {
                                        className:
                                          "mdi mdi-account-alert font-20",
                                      })
                                    )
                              )
                        )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ne = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.getFriends = function (e) {
                if (n._isMounted)
                  return (
                    n.setState({ friends: e }),
                    T.a.setKey("friends", e),
                    n.refreshFriend()
                  );
              }),
              (n.refreshFriend = function () {
                n._isMounted &&
                  (n.setState({ refresh: !0, loadingUsers: !0 }),
                  Object(P.A)(1e3).then(function () {
                    n.makeList(), n.setState({ refresh: !1 });
                  }));
              }),
              (n.handleChange = function (e) {
                var t = e.target,
                  a = t.value,
                  r = t.name;
                n.setState(Object(G.a)({}, r, a));
              }),
              (n.submit = function (e) {
                if (n._isMounted) {
                  if ((e.preventDefault(), "" === n.state.myMessage.trim()))
                    return;
                  q.a.emit(
                    X.a.ADD_MESSAGES,
                    Object(P.m)({
                      token: n.state.token,
                      to: n.props.target,
                      message: n.state.myMessage,
                    })
                  ),
                    n.setState({ myMessage: "" });
                }
              }),
              (n.state = {
                show: !1,
                showButton: !1,
                loadingUsers: !0,
                refresh: !1,
                users: [],
                message: [],
                myMessage: "",
                uid: P.q,
                friends:
                  null !== T.a.getKey("friends") ? T.a.getKey("friends") : null,
                token: T.a.getKey("token"),
              }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.on(X.a.MY_FRIENDS, function (t) {
                      return e.getFriends(Object(P.k)(t));
                    }),
                    q.a.on(X.a.MESSAGES, function (t) {
                      return e.getMessages(Object(P.k)(t));
                    }),
                    q.a.on(X.a.ADD_MESSAGES, function (t) {
                      return e.addMessage(Object(P.k)(t));
                    }),
                    q.a.on(X.a.ADD_FRIEND, function () {
                      return e.refreshFriend();
                    }),
                    P.d.on("pm_update", function () {
                      return e.getFriendList();
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.target &&
                    "" !== e.target &&
                    this.setState({ showButton: !0 });
                },
              },
              {
                key: "getFriendList",
                value: function () {
                  this._isMounted &&
                    (this.setState({ message: [] }),
                    q.a.emit(
                      X.a.MY_FRIENDS,
                      Object(P.m)({ token: this.state.token })
                    ));
                },
              },
              {
                key: "getMessages",
                value: function (e) {
                  var t = this;
                  if (this._isMounted) {
                    if (
                      (this.setState({ message: [] }),
                      void 0 === e.message ||
                        "undefined" === e.message ||
                        0 === e.message.length)
                    )
                      return;
                    P.i.reverse(e.message).forEach(function (e, a) {
                      t.setState(function (t) {
                        return {
                          message: [
                            r.a.createElement(je, { message: e }),
                          ].concat(Object(o.a)(t.message)),
                        };
                      });
                    });
                  }
                },
              },
              {
                key: "addMessage",
                value: function (e) {
                  if (this._isMounted) {
                    var t = parseFloat(this.state.uid);
                    if (parseFloat(e.uid) === t || parseFloat(e.target) === t) {
                      var a = this.state.message.concat([
                        r.a.createElement(je, { message: e }),
                      ]);
                      this.setState({ message: a });
                    }
                  }
                },
              },
              {
                key: "makeList",
                value: function () {
                  if (this._isMounted) {
                    var e = this;
                    if (
                      (this.setState({ users: [] }),
                      null !== this.state.friends)
                    )
                      P.i.split(e.state.friends, ",").forEach(function (t, a) {
                        P.i.isEmpty(t) ||
                          e.setState(function (a) {
                            return {
                              users: [
                                r.a.createElement(xe, {
                                  redux: e.props,
                                  token: e.state.token,
                                  name: t,
                                }),
                              ].concat(Object(o.a)(a.users)),
                            };
                          });
                      });
                    this.setState({ loadingUsers: !1 });
                  }
                },
              },
              {
                key: "handleShow",
                value: function () {
                  if (null === T.a.getKey("token"))
                    return ke.a.fire({
                      title: "Error",
                      text: "Please Login to use this Option",
                      type: "error",
                    });
                  this.getFriendList(),
                    this.setState({ show: !0, effect: "zoomIn" });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({
                    show: !1,
                    loadingUsers: !0,
                    effect: "zoomOut",
                    users: [],
                    message: [],
                    showButton: !1,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.t,
                    n = t.desktop;
                  return r.a.createElement(
                    "li",
                    null,
                    r.a.createElement(
                      "span",
                      { className: "_user-message" },
                      r.a.createElement(
                        "div",
                        { className: "" },
                        r.a.createElement(f.a, null),
                        n
                          ? r.a.createElement(
                              "span",
                              { className: "p-1", onClick: this.handleShow },
                              r.a.createElement("i", {
                                className:
                                  "mdi mdi-comment-text-multiple text-drop mr-1",
                              }),
                              " Messages"
                            )
                          : r.a.createElement(
                              "button",
                              {
                                className:
                                  "btn btn-transparent tbtn py-1 mt-2-5",
                                onClick: this.handleShow,
                                "data-tip": "Private Messages",
                              },
                              r.a.createElement("i", {
                                className: "mdi mdi-wechat mt-0",
                              })
                            ),
                        r.a.createElement(
                          y.a,
                          {
                            size: "md",
                            centered: !0,
                            backdrop: "static",
                            id: "pv-md-modal",
                            show: this.state.show,
                            onHide: this.handleClose,
                            "aria-labelledby": "pv-md-modal",
                            className: "animated " + this.state.effect,
                          },
                          r.a.createElement(
                            y.a.Header,
                            null,
                            a("private_messages"),
                            r.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "close",
                                onClick: this.handleClose,
                              },
                              r.a.createElement("i", {
                                className: "mdi mdi-close",
                              })
                            )
                          ),
                          r.a.createElement(
                            y.a.Body,
                            { className: "pt-0" },
                            r.a.createElement(
                              "div",
                              {
                                className: "chat-box-center",
                                id: "privateMessage",
                              },
                              r.a.createElement(
                                v.a,
                                null,
                                r.a.createElement(
                                  E.a,
                                  {
                                    sm: 6,
                                    md: 3,
                                    className:
                                      0 === this.state.users.length
                                        ? "ycenter border-right pl-0 chat-box-left"
                                        : "border-right pl-0 chat-box-left",
                                  },
                                  r.a.createElement(
                                    _e.a,
                                    { as: "ul" },
                                    this.state.loadingUsers
                                      ? r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          r.a.createElement(
                                            "div",
                                            { className: "text-center" },
                                            r.a.createElement("div", {
                                              class:
                                                "spinner-border text-info my-5",
                                              role: "status",
                                            })
                                          )
                                        )
                                      : r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          0 !== this.state.users.length
                                            ? this.state.users
                                            : r.a.createElement(
                                                "div",
                                                null,
                                                a("no_friends")
                                              )
                                        )
                                  )
                                ),
                                r.a.createElement(
                                  E.a,
                                  { sm: 6, md: 9, className: "chat-box-right" },
                                  this.state.showButton &&
                                    r.a.createElement(
                                      "div",
                                      { className: "text-right border-bottom" },
                                      !this.state.refresh &&
                                        r.a.createElement(Oe, {
                                          t: a,
                                          name: this.props.target,
                                          pv: !0,
                                        })
                                    ),
                                  r.a.createElement(
                                    "div",
                                    { className: "media-body reverse gm" },
                                    this.state.message,
                                    this.state.showButton
                                      ? r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          this.state.message.length < 1 &&
                                            r.a.createElement(
                                              "div",
                                              { className: "alert rounded-0" },
                                              " ",
                                              a("there_is_no_any_messages")
                                            )
                                        )
                                      : r.a.createElement(
                                          "div",
                                          { className: "alert rounded-0" },
                                          " ",
                                          a(
                                            "please_select_a_friend_to_start_chat"
                                          )
                                        )
                                  ),
                                  r.a.createElement("hr", null),
                                  this.state.showButton &&
                                    r.a.createElement(
                                      "div",
                                      { className: "w-100" },
                                      r.a.createElement(
                                        "form",
                                        {
                                          onSubmit: function (t) {
                                            return e.submit(t);
                                          },
                                        },
                                        r.a.createElement(
                                          "div",
                                          { className: "form-group mb-0" },
                                          r.a.createElement(
                                            "div",
                                            { className: "input-group" },
                                            r.a.createElement("textarea", {
                                              onChange: this.handleChange,
                                              autoComplete: "off",
                                              name: "myMessage",
                                              className: "form-control",
                                              value: this.state.myMessage,
                                            }),
                                            r.a.createElement(
                                              "span",
                                              {
                                                className: "input-group-append",
                                              },
                                              r.a.createElement(
                                                "button",
                                                {
                                                  className:
                                                    "btn btn-outline-light",
                                                  type: "submit",
                                                },
                                                r.a.createElement("i", {
                                                  className:
                                                    "mdi mdi-send align-middle",
                                                })
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        xe = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { active: "" }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.redux.targetUser(null);
                },
              },
              {
                key: "selectUser",
                value: function (e, t) {
                  this.props.redux.targetUser(t),
                    q.a.emit(X.a.MESSAGES, Object(P.m)({ token: e, name: t })),
                    this.setState({ active: "active" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.name,
                    n = t.token;
                  return r.a.createElement(
                    _e.a.Item,
                    {
                      as: "li",
                      onClick: function (t) {
                        return e.selectUser(n, a);
                      },
                      id: "d" + n,
                      className: "cpt hv " + this.state.active,
                    },
                    r.a.createElement("i", {
                      className: "mdi mdi-dots-vertical-circle mx-1",
                    }),
                    a
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        je = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { name: T.a.getKey("name") }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.message,
                    t = e.message,
                    a = e.time,
                    n = e.date,
                    s = e.from_name,
                    i = (e.to_name, "right"),
                    o = "rgb(42 43 47)",
                    l = s;
                  return (
                    (a = Object(P.n)(a)),
                    s === this.state.name &&
                      ((i = "left"), (o = "rgb(42 43 47)")),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "pv", style: { textAlign: i } },
                        r.a.createElement(
                          "div",
                          { className: "chat-msg", style: { background: o } },
                          r.a.createElement("h5", null, l),
                          r.a.createElement(
                            "p",
                            { className: "font-light text-white" },
                            t
                          ),
                          r.a.createElement("span", null, n, " - ", a)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ce = Object(d.b)(
          function (e) {
            return { target: e.items.target };
          },
          {
            targetUser: function (e) {
              return function (t) {
                t({ type: "TARGET_USER", payload: e });
              };
            },
          }
        )(Ne),
        Se = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "ask",
                value: function () {
                  ke.a
                    .fire({
                      title: "Are you sure to logout?",
                      text: "",
                      icon: "warning",
                      showCancelButton: !0,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes!",
                    })
                    .then(function (e) {
                      e.value &&
                        (q.a.emit(
                          X.a.LOGOUT_USER,
                          Object(P.m)({ token: T.a.getKey("token") })
                        ),
                        localStorage.clear(),
                        A.remove("session"),
                        A.remove("auth"),
                        A.remove("uid"),
                        window.location.replace("./"));
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "button",
                      { onClick: this.ask, className: "dropdown-item" },
                      r.a.createElement("i", {
                        className:
                          "dripicons-exit text-muted ml-1 mr-2 text-drop",
                      }),
                      "Logout"
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ae = Object(g.g)(Se),
        Me = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                level: 1,
                name: T.a.getKey("name"),
                avatar:
                  "false" !== T.a.getKey("avatar") ? T.a.getKey("avatar") : P.l,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    "li",
                    { className: "user-dropdown" },
                    r.a.createElement(
                      M.a,
                      { left: "true" },
                      r.a.createElement(
                        M.a.Toggle,
                        {
                          split: !0,
                          variant: "b btn-xs",
                          id: "dropdown-split-user",
                        },
                        r.a.createElement("img", {
                          src: "/assets/images/avatar.svg",
                          alt: "profile-user",
                          className: "thumb-sm rounded-circle show-mobile ",
                        }),
                        r.a.createElement(
                          "span",
                          { className: "ml-1 nav-user-name hidden-sm" },
                          r.a.createElement("span", null, this.state.name),
                          r.a.createElement("span", { className: "caret" })
                        )
                      ),
                      r.a.createElement(
                        M.a.Menu,
                        { className: "droper user-dropdown-detail" },
                        r.a.createElement(Te, {
                          level: this.state.level,
                          name: this.state.name,
                          avatar: this.state.avatar,
                          t: e,
                        }),
                        r.a.createElement("div", {
                          className: "dropdown-divider",
                        }),
                        r.a.createElement(
                          "div",
                          { className: "user-links" },
                          r.a.createElement(
                            M.a.Item,
                            { as: "button", className: "animated fadeIn" },
                            r.a.createElement(me, { t: e })
                          ),
                          r.a.createElement(
                            M.a.Item,
                            { as: "button", className: "animated fadeIn" },
                            r.a.createElement(Ce, { desktop: !0, t: e })
                          ),
                          r.a.createElement(
                            M.a.Item,
                            { as: "button", className: "animated fadeIn" },
                            r.a.createElement(Ee, { t: e })
                          ),
                          r.a.createElement(
                            M.a.Item,
                            { as: "button", className: "animated fadeIn" },
                            r.a.createElement(Ae, { t: e })
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Te = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
              s[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(s))).makeStars = function (
                e
              ) {
                for (
                  var t = 5 - parseFloat(e), a = [], n = [], s = [], i = 0;
                  i < t;
                  i++
                )
                  a.push(
                    r.a.createElement("i", {
                      className: "mdi mdi-star font-15",
                    })
                  );
                for (i = 0; i < e; i++)
                  n.push(
                    r.a.createElement("i", {
                      className: "mdi mdi-star text-success font-20",
                    })
                  );
                return s.push(n, a), s;
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.name,
                    a = e.level,
                    n = e.avatar,
                    s = e.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "user-bar" },
                      r.a.createElement(ae, {
                        t: s,
                        username: t,
                        menu: !0,
                        avatar: n,
                      }),
                      r.a.createElement("span", { className: "text-white" }, t),
                      r.a.createElement("br", null),
                      r.a.createElement("span", null, this.makeStars(a))
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Pe = Me,
        De = function () {
          return function (e) {
            e({
              type: "COIN",
              payload: null !== T.a.getKey("coin") ? T.a.getKey("coin") : "KES",
            });
          };
        },
        Ie = function (e) {
          return function (t) {
            t({ type: "COIN", payload: e });
          };
        },
        Re = function (e) {
          return function (t) {
            t({ type: "CURRENT_CREDIT", payload: e });
          };
        },
        We = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                show: !1,
                token: T.a.getKey("token"),
                coin: "kes",
                activeClientCoins: T.a.getKey("active_coins")
                  ? T.a.getKey("active_coins")
                  : null,
                selectedCoin: "kes",
                credits: {},
                coins: [],
                different: [],
                credit: !1,
              }),
              (n.wrapperRef = r.a.createRef()),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  T.a.setKey("coin", "kes"),
                    setInterval(function () {
                      console.log("ping balance 1"),
                        q.a.emit(
                          X.a.CREDIT,
                          Object(P.m)({
                            token: T.a.getKey("token"),
                            coin: "kes",
                          })
                        );
                    }, 5e3),
                    this.props.gameCoin(),
                    null !== this.state.token &&
                      q.a.emit(
                        X.a.CREDIT,
                        Object(P.m)({
                          token: this.state.token,
                          coin: this.state.coin,
                        })
                      ),
                    q.a.on(X.a.CREDIT, function (t) {
                      return e.getCredit(Object(P.k)(t));
                    }),
                    q.a.on(X.a.UPDATE_CREDIT, function (t) {
                      return e.updateCredit(Object(P.k)(t));
                    });
                },
              },
              {
                key: "getCredit",
                value: function (e) {
                  var t = e.credit,
                    a = e.bonus;
                  this.setState({ credits: t }), this.setState({ bonus: a });
                  var n = P.i.lowerCase(this.props.coin),
                    r = Object(P.o)(this.state.credits[n]);
                  this.setState({ credit: r }),
                    T.a.setKey("credit", r),
                    T.a.setKey("bonus", a),
                    this.props.setCredit(r);
                },
              },
              {
                key: "updateCredit",
                value: function (e) {
                  var t,
                    a,
                    n = e.value,
                    r = (e.coin, e.bonus);
                  P.i.toNumber(n) > P.i.toNumber(this.state.credit)
                    ? ((t = P.i.toNumber(n) - P.i.toNumber(this.state.credit)),
                      (a = { amount: t, color: "text-success" }))
                    : ((t = P.i.toNumber(this.state.credit) - P.i.toNumber(n)),
                      (a = { amount: t, color: "text-danger" })),
                    "0.00000000" !== Object(P.o)(t).toString() &&
                      this.setState(function (e) {
                        return {
                          different: [a].concat(Object(o.a)(e.different)),
                        };
                      }),
                    (n = Object(P.o)(n)),
                    this.setState({ credit: n }),
                    T.a.setKey("credit", n),
                    this.setState({ bonus: r }),
                    T.a.setKey("bonus", r),
                    this.props.setCredit(n);
                },
              },
              {
                key: "addDiff",
                value: function (e, t) {
                  var a = this,
                    n = "id_" + Math.floor(1e3 * Math.random() + 1);
                  return (
                    Object(P.A)(2e3).then(function () {
                      try {
                        document.getElementById(n).classList.remove("frd"),
                          document
                            .getElementById(n)
                            .classList.add("fadeOutDown");
                      } catch (e) {}
                      a.state.different.splice(t, 1);
                    }),
                    r.a.createElement(
                      "li",
                      {
                        key: t,
                        id: n,
                        className:
                          "list-inline w-100 text-right animated frd " +
                          e.color,
                      },
                      " ",
                      "text-danger" === e.color ? "-" : "+",
                      Object(P.o)(e.amount, this.state.coin)
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.credit,
                    n = t.different,
                    s = t.coin,
                    i = (t.coins, t.show, t.bonus);
                  a = Object(P.o)(a, s);
                  var o = n.map(function (t, a) {
                    return e.addDiff(t, a);
                  });
                  this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "crypto-balance", ref: this.wrapperRef },
                      r.a.createElement(
                        "ul",
                        { id: "cup2", className: "mt-2 mr-1" },
                        o
                      ),
                      r.a.createElement(
                        "div",
                        { className: "btc-balance" },
                        r.a.createElement(
                          "div",
                          {
                            className: "clist mt-0 text-right float-right cpd",
                          },
                          r.a.createElement(
                            "div",
                            {
                              variant: "block",
                              className: "p-2 mt-0",
                              id: "dropdown-split-coins",
                            },
                            r.a.createElement(
                              "h5",
                              { className: "m-0 text-left" },
                              r.a.createElement(
                                "span",
                                { className: "text-white" },
                                P.i.upperCase(s),
                                a,
                                " BONUS: ",
                                i
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Fe = Object(d.b)(
          function (e) {
            return { coin: e.items.coin };
          },
          { setCoin: Ie, gameCoin: De, setCredit: Re }
        )(We),
        Be = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                token: T.a.getKey("token"),
                coin: T.a.getKey("coin") ? T.a.getKey("coin") : "BTC",
                credits: {},
                coins: [],
                different: [],
                credit: !1,
              }),
              (n.selectCoin = n.selectCoin.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.gameCoin(),
                    setInterval(function () {
                      playX();
                      let e = localStorage.getItem("escape_x") || "2.1";
                      let xp = localStorage.getItem("game_x");
                      let floatE = parseFloat(e);
                      if (xp === "on" && !isNaN(floatE) && floatE !== 0) {
                        q.a.emit(
                          X.a.FINISH_CRASH,
                          Object(P.m)({
                            token: T.a.getKey("token"),
                            token2: floatE.toFixed(2),
                          })
                        );
                      } else {
                        //endPlay();
                        console.log("abrupt play end... invalid", e);
                      }
                    }, 100),
                    setInterval(function () {
                      console.log("ping balance 2"),
                        q.a.emit(
                          X.a.CREDIT,
                          Object(P.m)({
                            token: T.a.getKey("token"),
                            coin: "kes",
                          })
                        );
                    }, 5e3),
                    null !== this.state.token &&
                      q.a.emit(
                        X.a.CREDIT,
                        Object(P.m)({
                          token: this.state.token,
                          coin: this.state.coin,
                        })
                      ),
                    q.a.on(X.a.CREDIT, function (t) {
                      return e.getCredit(Object(P.k)(t));
                    }),
                    q.a.on(X.a.UPDATE_CREDIT, function (t) {
                      return e.updateCredit(Object(P.k)(t));
                    });
                },
              },
              {
                key: "getCredit",
                value: function (e) {
                  var t = e.credit,
                    a = e.bonus;
                  this.setState({ credits: t });
                  var n = P.i.lowerCase(this.props.coin),
                    r = Object(P.o)(this.state.credits[n]);
                  this.setState({ credit: r }),
                    T.a.setKey("credit", r),
                    this.setState({ bonus: a }),
                    T.a.setKey("bonus", a),
                    this.props.setCredit(r),
                    this.updateAllCoins();
                },
              },
              {
                key: "updateCredit",
                value: function (e) {
                  var t,
                    a,
                    n = e.value,
                    r = e.coin,
                    s = e.bonus;
                  P.i.toNumber(n) > P.i.toNumber(this.state.credit)
                    ? ((t = P.i.toNumber(n) - P.i.toNumber(this.state.credit)),
                      (a = { amount: t, color: "text-success" }))
                    : ((t = P.i.toNumber(this.state.credit) - P.i.toNumber(n)),
                      (a = { amount: t, color: "text-danger" })),
                    "0.00000000" !== Object(P.o)(t).toString() &&
                      this.setState(function (e) {
                        return {
                          different: [a].concat(Object(o.a)(e.different)),
                        };
                      }),
                    this.setState({ credit: Object(P.o)(n) }),
                    T.a.setKey("credit", n),
                    this.updateCoin(P.i.lowerCase(r), n),
                    this.setState({ bonus: s }),
                    T.a.setKey("bonus", s),
                    this.props.setCredit(Object(P.o)(n));
                },
              },
              {
                key: "updateCoin",
                value: function (e, t) {
                  var a = this;
                  this.setState({ coins: [] }),
                    Y.forEach(function (n, s) {
                      if (P.i.lowerCase(n.preffix) === e) {
                        var i = r.a.createElement(
                          M.a.Item,
                          {
                            onClick: function (t) {
                              return a.selectCoin(P.i.upperCase(e));
                            },
                            key: P.i.toString(s),
                            className: "animated slideInDown num-style",
                          },
                          r.a.createElement("img", {
                            src: "/assets/images/" + n.image,
                            alt: "coin",
                            className: "mini-coin-2",
                          }),
                          n.preffix,
                          ": ",
                          Object(P.o)(t)
                        );
                        a.setState(function (e) {
                          return { coins: [i].concat(Object(o.a)(e.coins)) };
                        });
                      } else {
                        var l = Object(P.o)(
                            a.state.credits[P.i.lowerCase(n.preffix)]
                          ),
                          c = r.a.createElement(
                            M.a.Item,
                            {
                              onClick: function (e) {
                                return a.selectCoin(n.preffix);
                              },
                              key: P.i.toString(s),
                              className: "animated slideInDown num-style",
                            },
                            r.a.createElement("img", {
                              src: "/assets/images/" + n.image,
                              alt: "coin",
                              className: "mini-coin-2",
                            }),
                            n.preffix,
                            ": ",
                            l
                          );
                        a.setState(function (e) {
                          return { coins: [c].concat(Object(o.a)(e.coins)) };
                        });
                      }
                    });
                },
              },
              {
                key: "updateAllCoins",
                value: function () {
                  var e = this;
                  this.setState({ coins: [] }),
                    Y.forEach(function (t, a) {
                      var n = Object(P.o)(
                          e.state.credits[P.i.lowerCase(t.preffix)]
                        ),
                        s = r.a.createElement(
                          M.a.Item,
                          {
                            onClick: function (a) {
                              return e.selectCoin(t.preffix);
                            },
                            key: P.i.toString(a),
                            className: "animated slideInDown num-style",
                          },
                          r.a.createElement("img", {
                            src: "/assets/images/" + t.image,
                            alt: "coin",
                            className: "mini-coin-2",
                          }),
                          t.preffix,
                          ": ",
                          n
                        );
                      e.setState(function (e) {
                        return { coins: [s].concat(Object(o.a)(e.coins)) };
                      });
                    });
                },
              },
              {
                key: "selectCoin",
                value: function (e) {
                  if (T.a.getKey("coin") !== e) {
                    T.a.setKey("coin", e);
                    var t = this.state.credits[P.i.lowerCase(e)];
                    this.setState({ coin: e, credit: t }),
                      this.props.setCoin(e),
                      this.props.setCredit(t);
                  }
                },
              },
              {
                key: "addDiff",
                value: function (e, t) {
                  var a = this,
                    n = "id_" + Math.floor(1e3 * Math.random() + 1);
                  return (
                    Object(P.A)(2e3).then(function () {
                      a.state.different.splice(t, 1);
                      try {
                        document.getElementById(n).classList.remove("frd"),
                          document
                            .getElementById(n)
                            .classList.add("fadeOutDown");
                      } catch (e) {}
                    }),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "li",
                        {
                          id: n,
                          className:
                            "list-inline w-100 text-right animated frd " +
                            e.color,
                        },
                        " ",
                        "text-danger" === e.color ? "-" : "+",
                        Object(P.o)(e.amount, this.state.coin)
                      )
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.credit,
                    n = t.different,
                    s = t.coin,
                    i = (t.coins, t.bonus);
                  a = Object(P.o)(a, s);
                  var o = n.map(function (t, a) {
                    return e.addDiff(t, a);
                  });
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "li",
                      { className: "" },
                      r.a.createElement(
                        "div",
                        { className: "crypto-balance" },
                        r.a.createElement(
                          "span",
                          { id: "cup", className: "mt-2 mr-1" },
                          o
                        ),
                        r.a.createElement(
                          "div",
                          { className: "btc-balance" },
                          r.a.createElement(
                            M.a,
                            { className: "clist mt-0" },
                            r.a.createElement(
                              M.a.Toggle,
                              {
                                split: !0,
                                variant: "block",
                                className: "p-2 pr-0 mt-0",
                                id: "dropdown-split-coins",
                              },
                              r.a.createElement(
                                "h5",
                                { className: "m-0" },
                                " ",
                                r.a.createElement(
                                  "span",
                                  { className: "text-white" },
                                  "KES",
                                  a,
                                  " BONUS: ",
                                  i
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Le = Object(d.b)(
          function (e) {
            return { coin: e.items.coin };
          },
          { setCoin: Ie, gameCoin: De, setCredit: Re }
        )(Be),
        Ue =
          (r.a.Component,
          (function (e) {
            Object(u.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              return Object(l.a)(this, a), t.call(this, e);
            }
            return (
              Object(c.a)(a, [
                {
                  key: "render",
                  value: function () {
                    this.props.t;
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "" },
                        r.a.createElement(
                          b.b,
                          { to: "/", className: "logo" },
                          r.a.createElement(
                            "span",
                            null,
                            r.a.createElement("img", {
                              src: "/assets/images/logo.png?v=2",
                              className: "logo-sm",
                              alt: "Logo",
                            })
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.Component)),
        Ke = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            return Object(l.a)(this, a), t.call(this, e);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "" },
                      r.a.createElement(
                        b.b,
                        { to: "/", className: "logo" },
                        r.a.createElement(
                          "span",
                          null,
                          r.a.createElement("img", {
                            src: "/favicon.png?v=2",
                            className: "logo-sm",
                            alt: "Logo",
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        He = a(160),
        ze = a.n(He),
        Ge = ze.a.Element,
        Ye = ze.a.scroller,
        qe = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).bubble = "none"),
              (n.bubbleMsg = 0),
              (n._isMounted = !1),
              (n.setLoader = function () {
                if (n._isMounted) {
                  var e = r.a.createElement(
                    "div",
                    { className: "ycenter" },
                    r.a.createElement("div", {
                      className: "spinner-border text-info",
                      role: "status",
                    })
                  );
                  n.setState({ loader: e });
                }
              }),
              (n.hideBubble = function () {
                n._isMounted &&
                  (Ye.scrollTo("chatBarElement", {
                    delay: 3,
                    smooth: !0,
                    containerId: "messages",
                    offset: 2 * Object(P.p)("#sc").scrollHeight,
                  }),
                  Object(P.p)(".chat-bubble").classList.add("hidden"),
                  (n.bubbleMsg = 0));
              }),
              (n.state = {
                alertSpam: !1,
                messages: [],
                loader: [],
                clientCountry: T.a.getKey("country")
                  ? T.a.getKey("country")
                  : "GLOBAL",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.setLoader(),
                    Object(P.A)(2500).then(function () {
                      var t = e.state.clientCountry;
                      q.a.emit(X.a.CHATS, t);
                    }),
                    q.a.on(X.a.CHATS, function (t) {
                      return e.getChats(t);
                    }),
                    q.a.on(X.a.ADD_CHAT, function (t) {
                      return e.getNewChats(t);
                    }),
                    P.d.on("scrolldone", function () {
                      return e.updateScroll();
                    }),
                    this.updateScroll();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  var a = this;
                  this._isMounted &&
                    (e.country &&
                      (this.setState({
                        clientCountry: e.country,
                        messages: [],
                      }),
                      this.setLoader(),
                      Object(P.A)(500).then(function () {
                        var t = e.country;
                        "spam" === P.i.lowerCase(t)
                          ? (a.setState({ alertSpam: !0 }),
                            P.d.emit("open_socket"))
                          : (a.setState({ alertSpam: !1 }),
                            P.d.emit("close_socket")),
                          q.a.emit(X.a.CHATS, t);
                      })),
                    this.updateScroll());
                },
              },
              {
                key: "componentWillUpdate",
                value: function (e, t, a) {
                  if (this._isMounted) {
                    var n = Object(P.p)("#messages"),
                      r = n.clientHeight,
                      s = n.scrollHeight,
                      i = n.scrollTop;
                    this.scrollBottom = s - i - r;
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t, a) {
                  if (
                    this._isMounted &&
                    (this.updateScroll(), this.state.messages.length >= 150)
                  ) {
                    var n = P.i.slice(
                      this.state.messages,
                      this.state.messages.length - 1,
                      this.state.messages.length
                    );
                    this.setState({ messages: n }),
                      (this.state.messages.length = 150);
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  this._isMounted &&
                    (this.scrollBottom <= 150
                      ? (Ye.scrollTo("chatBarElement", {
                          delay: 3,
                          smooth: !0,
                          containerId: "messages",
                          offset: 2 * Object(P.p)("#sc").scrollHeight,
                        }),
                        Object(P.p)(".chat-bubble").classList.add("hidden"),
                        (this.bubbleMsg = 0))
                      : ((this.bubbleMsg += 1),
                        0 !== this.bubbleMsg &&
                          Object(P.p)(".chat-bubble").classList.remove(
                            "hidden"
                          )));
                },
              },
              {
                key: "getChats",
                value: function (e) {
                  var t,
                    a = this;
                  this._isMounted &&
                    (this.setState({ messages: [], loader: [] }),
                    ((t = e),
                    P.i.sortBy(t, function (e) {
                      return e.sorter ? -e.sorter : null;
                    })).forEach(function (e, t) {
                      a.setState(function (n) {
                        return {
                          messages: [
                            r.a.createElement(Xe, {
                              t: a.props.t,
                              key: t,
                              keych: t,
                              message: e,
                              redux: a.props,
                            }),
                          ].concat(Object(o.a)(n.messages)),
                        };
                      });
                    }));
                },
              },
              {
                key: "getNewChats",
                value: function (e) {
                  if (this._isMounted) {
                    var t = this.props.country,
                      a = t || this.state.clientCountry;
                    if (P.i.upperCase(e.country) === P.i.upperCase(a)) {
                      var n = this.state.messages.concat([
                        r.a.createElement(Xe, {
                          t: this.props.t,
                          key: this.state.messages.length + 1,
                          message: e,
                          redux: this.props,
                        }),
                      ]);
                      this.setState({ messages: n });
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    Ge,
                    { name: "chatBarElement" },
                    r.a.createElement(
                      "ul",
                      { className: "nav d-block chats", id: "sc" },
                      r.a.createElement(
                        "div",
                        { onClick: this.hideBubble, className: "chat-bubble" },
                        this.bubbleMsg
                      ),
                      this.state.loader,
                      this.state.messages
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Xe = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).isSharing = function (e) {
                if (P.i.isString(e)) {
                  var t = e.substr(0, 5);
                  return '{"gam' === t || '{"uid' === t;
                }
                return !0;
              }),
              (n.makeStars = function (e) {
                for (
                  var t = 5 - parseFloat(e), a = [], n = [], s = [], i = 0;
                  i < t;
                  i++
                )
                  a.push(r.a.createElement("i", { className: "mdi mdi-star" }));
                for (i = 0; i < e; i++)
                  n.push(
                    r.a.createElement("i", {
                      className: "mdi mdi-star text-success",
                    })
                  );
                return s.push(n, a), s;
              }),
              (n.hiddenAlert = function () {
                return Object(P.y)(
                  "All users in the spam room are hidden!",
                  "warning",
                  "bottom-center"
                );
              }),
              (n.state = { name: T.a.getKey("name") }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "callUser",
                value: function (e) {
                  P.d.emit("call_user", "@" + e + " ");
                },
              },
              {
                key: "createMarkup",
                value: function (e) {
                  return { __html: e };
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.t,
                    s = a.keych,
                    i = this.props.message,
                    o = i.name,
                    l = i.message,
                    c = i.avatar,
                    u = i.time,
                    m = (i.level, i.twitch),
                    d = o,
                    h = !1,
                    p = "";
                  if (
                    ((c = "false" !== c ? P.l : c),
                    "SystemBot" === d && (e = { background: "#673ab7" }),
                    this.state.name === d && (h = !0),
                    this.isSharing(l))
                  ) {
                    (e = { width: "100%" }),
                      P.i.isString(l) && (l = JSON.parse(l));
                    var f = !1,
                      b = parseFloat(l.profit);
                    (0 !== b && 0 !== b) || (f = !0),
                      (l = r.a.createElement(
                        "div",
                        { className: "share-result" },
                        f
                          ? r.a.createElement(
                              "h4",
                              {
                                className: "text-danger text-center mt-0 mb-3",
                              },
                              n("lost")
                            )
                          : r.a.createElement(
                              "h4",
                              {
                                className:
                                  "text-warning text-center mt-0 mb-3 trmg",
                              },
                              r.a.createElement("img", {
                                src: "/assets/images/contest.png",
                                class: "img-fluid",
                                style: { width: 40 },
                              }),
                              " ",
                              r.a.createElement("br", null),
                              " ",
                              n("winner")
                            ),
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            { md: "6", sm: "6" },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "text-success bg-soft-info rounded py-2",
                              },
                              l.result,
                              "x ",
                              r.a.createElement("br", null),
                              " ",
                              n("result")
                            )
                          ),
                          r.a.createElement(
                            E.a,
                            { md: "6", sm: "6" },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "text-white bg-soft-info rounded py-2",
                              },
                              r.a.createElement("img", {
                                className: "mini-coin-8 mr-1",
                                src:
                                  "/assets/images/" +
                                  P.i.lowerCase(l.coin) +
                                  ".png",
                              }),
                              l.profit,
                              " ",
                              r.a.createElement("br", null),
                              " ",
                              n("profit")
                            )
                          ),
                          r.a.createElement(
                            E.a,
                            { md: "12", sm: "12" },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "bg-soft-info text-white rounded mt-3 py-2",
                              },
                              "ID: ",
                              l.gid
                            )
                          )
                        )
                      ));
                  } else {
                    var g = new RegExp(
                      "@" + this.state.name + "(?:$|[^a-z0-9_-])",
                      "i"
                    );
                    this.state.name !== d && g.test(l) && (p += "highlight-on");
                    var y = new RegExp(
                      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
                    );
                    if (l.match(y)) {
                      var _ = n("link_is_hidden");
                      l = r.a.createElement("div", {
                        dangerouslySetInnerHTML: this.createMarkup(
                          '<span className="text-danger">[ '.concat(
                            _,
                            " ]</span>"
                          )
                        ),
                      });
                    }
                    var w = P.i.words(l, /@([a-zA-Z0-9]+)/gi);
                    if (!m && 0 !== w.length)
                      for (
                        var k = function (e) {
                            var t = w[e],
                              a = r.a.createElement(
                                "span",
                                { key: e, className: "text-warning" },
                                " @",
                                r.a.createElement(ae, {
                                  key: e,
                                  username: P.i.replace(t, "@", ""),
                                  cssClass: "text-warning",
                                })
                              );
                            try {
                              l = l.split(" ").map(function (e) {
                                return e === t ? a : " " + e;
                              });
                            } catch (n) {}
                          },
                          O = 0;
                        O < w.length;
                        O++
                      )
                        k(O);
                  }
                  return r.a.createElement(
                    "li",
                    {
                      key: P.i.toString(s),
                      className: "nav-item chat-part animated XfadeIn " + p,
                    },
                    r.a.createElement(ae, {
                      t: n,
                      cssClass: "user-avatar ml-1",
                      username: d,
                      chat: !0,
                    }),
                    !h &&
                      !m &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "div",
                          { className: "chat-option float-right" },
                          r.a.createElement(
                            "span",
                            {
                              className: "font-15",
                              onClick: function () {
                                return t.callUser(d);
                              },
                            },
                            r.a.createElement(
                              "span",
                              { className: "list-inline-item mt-2 font-20" },
                              "@"
                            )
                          )
                        )
                      ),
                    r.a.createElement(
                      "span",
                      { className: "msg font-light", style: e },
                      l
                    ),
                    r.a.createElement("span", { className: "chat-date" }, u)
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      var Ve = Object(d.b)(
          function (e) {
            return { country: e.items.country };
          },
          {
            setName: function (e) {
              return function (t) {
                t({ type: "CHAT_NAME", payload: e });
              };
            },
          }
        )(qe),
        Ze = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                var t = e.target,
                  a = t.value,
                  r = t.name;
                n.setState(Object(G.a)({}, r, a));
              }),
              (n.submit = function (e) {
                if ((e.preventDefault(), "" !== n.state.message.trim())) {
                  var t = n.state.country;
                  q.a.emit(X.a.ADD_CHAT, {
                    token: n.state.token,
                    message: n.state.message,
                    country: t,
                  }),
                    n.setState({ message: "" }),
                    P.d.emit("scrolldone");
                }
              }),
              (n.handleSubmit = function (e) {
                13 === (e.which || e.keyCode) && n.submit(e);
              }),
              (n.state = {
                message: "",
                token: T.a.getKey("token"),
                country: T.a.getKey("country")
                  ? T.a.getKey("country")
                  : "GLOBAL",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  P.d.on("call_user", function (t) {
                    e.setState({ message: t });
                  });
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.country && this.setState({ country: e.country });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "chat-inputt" },
                      r.a.createElement(
                        "form",
                        {
                          onKeyPress: function (t) {
                            return e.handleSubmit(t);
                          },
                        },
                        r.a.createElement(
                          "div",
                          { className: "form-group mb-0" },
                          r.a.createElement(
                            "div",
                            { className: "input-group" },
                            null !== this.state.token
                              ? r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement("textarea", {
                                    style: {
                                      background: "#fff",
                                      color: "#000",
                                      fontSize: 12,
                                    },
                                    onChange: this.handleChange,
                                    autoComplete: "off",
                                    name: "message",
                                    className: "form-control chat-form",
                                    placeholder: "Message...",
                                    value: this.state.message,
                                  })
                                )
                              : r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement("textarea", {
                                    style: {
                                      background: "#2f3138",
                                      color: "#000",
                                      fontSize: 12,
                                    },
                                    disabled: !0,
                                    autoComplete: "off",
                                    className: "form-control chat-form",
                                    placeholder: t("message"),
                                    value: t("please_login_to_use_chat"),
                                  })
                                ),
                            r.a.createElement(
                              "span",
                              { className: "input-group-append" },
                              r.a.createElement(
                                "button",
                                {
                                  className: "btn btn-send-chat",
                                  type: "submit",
                                  onClick: function (t) {
                                    return e.submit(t);
                                  },
                                },
                                r.a.createElement("i", {
                                  className: "mdi mdi-send align-middle",
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Je = Object(d.b)(function (e) {
          return { name: e.items.name, country: e.items.country };
        }, {})(Ze),
        $e = [
          { name: "SPAM", code: "BR" },
          { name: "GLOBAL", code: "GLOBAL" },
        ],
        Qe = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                clientCountry: T.a.getKey("country")
                  ? T.a.getKey("country")
                  : "GLOBAL",
                countries: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  $e.forEach(function (t, a) {
                    e.setState(function (n) {
                      return {
                        countries: [
                          r.a.createElement(et, {
                            key: a,
                            country: t,
                            redux: e.props,
                          }),
                        ].concat(Object(o.a)(n.countries)),
                      };
                    });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.country,
                    t = e || this.state.clientCountry;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "li",
                      { className: "float-left" },
                      r.a.createElement(
                        M.a,
                        { className: "" },
                        r.a.createElement(
                          M.a.Toggle,
                          {
                            variant: "button",
                            className: "btn nohv btn-soft-light btn-xs p-0",
                          },
                          r.a.createElement(
                            "span",
                            { className: "font-12 mt-3 d-inline-block" },
                            t
                          ),
                          r.a.createElement("img", {
                            src: "/assets/images/flags/" + t + ".svg",
                            className: "ml-2 rounded",
                            height: "18",
                            alt: "",
                          }),
                          r.a.createElement("span", { className: "caret" })
                        ),
                        r.a.createElement(
                          M.a.Menu,
                          { className: "dopdown-menu-right" },
                          this.state.countries
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        et = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "selectCountry",
                value: function (e) {
                  (e = P.i.toUpper(e)),
                    T.a.setKey("country", e),
                    this.props.redux.setCountry(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.key,
                    a = this.props.country.name;
                  return r.a.createElement(
                    M.a.Item,
                    {
                      key: P.i.toString(t),
                      onClick: function (t) {
                        return e.selectCountry(a);
                      },
                      className: "animated fadeIn",
                    },
                    r.a.createElement(
                      "span",
                      { className: "d-block ml-2" },
                      r.a.createElement("img", {
                        src: "/assets/images/flags/" + a + ".svg",
                        className: "mr-1",
                        height: "12",
                        alt: "Room",
                      }),
                      a
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      Object(d.b)(
        function (e) {
          return { country: e.items.country };
        },
        {
          setCountry: function (e) {
            return function (t) {
              t({ type: "CHAT_COUNTRY", payload: e });
            };
          },
        }
      )(Qe);
      var tt = (function (e) {
        Object(u.a)(a, e);
        var t = Object(m.a)(a);
        function a(e) {
          var n;
          return (
            Object(l.a)(this, a),
            ((n = t.call(this, e))._isMounted = !1),
            (n.selectCoin = function (e, t) {
              e.preventDefault(), n.setState({ currentCoin: t });
            }),
            (n.handleShow = function () {
              if (n._isMounted) {
                if (null === T.a.getKey("token"))
                  return Object(P.y)(n.props.t("t0"), "warning", "top-center");
                n.setState({ show: !0, effect: "zoomIn" }),
                  Object(P.A)(500).then(function () {
                    n.setState({ loader: !1 });
                  });
              }
            }),
            (n.handleClose = function () {
              n._isMounted &&
                n.setState({ show: !1, effect: "zoomOut", loader: !0 });
            }),
            (n.handleInputChange = function (e) {
              if (n._isMounted) {
                var t = e.target,
                  a = t.value,
                  r = t.name;
                if ("amount" === r) {
                  if (P.i.toNumber(a) < 5e-7)
                    return void n.setState({ amount: "0.00000050" });
                  if (a >= 999999999) return;
                  if (a.length > 10) return;
                  if (!Object(P.w)(a)) return;
                }
                if ("players" === r) {
                  if (a > 4) return;
                  if (a < 2) return;
                }
                n.setState(Object(G.a)({}, r, a));
              }
            }),
            (n.submit = function (e) {
              if (n._isMounted) {
                e.preventDefault(), n.setState({ loading: !0, disabled: !0 });
                var t = n.state.clientCountry;
                "spam" === P.i.lowerCase(t) && (t = "brazil"),
                  Object(P.A)(500).then(function () {
                    q.a.emit(X.a.RAIN, {
                      amount: n.state.amount,
                      coin: "btc",
                      players: parseInt(n.state.players),
                      room: t,
                    });
                  });
              }
            }),
            (n.state = {
              loader: !0,
              loading: !1,
              show: !1,
              disabled: !1,
              coins: [],
              players: 2,
              amount: Object(P.o)(5e-7),
              coin: "btc",
              clientCountry: T.a.getKey("country")
                ? T.a.getKey("country")
                : "GLOBAL",
              currentCoin: "BTC",
            }),
            n
          );
        }
        return (
          Object(c.a)(a, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (this._isMounted = !0),
                  this._isMounted &&
                    q.a.on(X.a.RAIN, function (t) {
                      return e.rain(t);
                    });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._isMounted = !1;
              },
            },
            {
              key: "rain",
              value: function (e) {
                if (this._isMounted) {
                  var t = e.message;
                  this.setState({ loading: !1, disabled: !1 }),
                    Object(P.y)(t, "info", "top-center"),
                    q.a.emit(X.a.CREDIT);
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.t;
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "li",
                    { className: "float-right" },
                    r.a.createElement(
                      "button",
                      {
                        className: "btn btn-soft-light btn-xs grayh",
                        onClick: this.handleShow,
                      },
                      r.a.createElement(
                        "svg",
                        {
                          className: "svg-rain",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                        },
                        r.a.createElement("path", {
                          d: "M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z",
                        }),
                        r.a.createElement("path", {
                          d: "M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z",
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    y.a,
                    {
                      size: "md",
                      backdrop: "static",
                      centered: !0,
                      show: this.state.show,
                      onHide: this.handleClose,
                      "aria-labelledby": "rain-md-modal",
                      className: "animated " + this.state.effect,
                    },
                    r.a.createElement(
                      y.a.Header,
                      null,
                      t("rain"),
                      " ",
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close p-2",
                          onClick: this.handleClose,
                        },
                        r.a.createElement("i", { className: "mdi mdi-close" })
                      )
                    ),
                    r.a.createElement(
                      y.a.Body,
                      { className: "rain" },
                      this.state.loader
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              { className: "text-center" },
                              r.a.createElement("div", {
                                className: "spinner-grow text-white my-3",
                                role: "status",
                              })
                            )
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "form",
                              {
                                onSubmit: function (t) {
                                  return e.submit(t);
                                },
                              },
                              r.a.createElement(
                                v.a,
                                null,
                                r.a.createElement(
                                  E.a,
                                  { sm: 12, md: 4, xl: 4 },
                                  r.a.createElement(
                                    "label",
                                    { htmlFor: "coin" },
                                    "Coin"
                                  ),
                                  r.a.createElement(
                                    M.a,
                                    { bottom: "true" },
                                    r.a.createElement(
                                      M.a.Toggle,
                                      {
                                        split: !0,
                                        variant:
                                          "x mt-1 text-white btn-block cpd",
                                        id: "dropdown-split-coins",
                                      },
                                      r.a.createElement(
                                        "span",
                                        { stle: { fontSize: 17 } },
                                        r.a.createElement("img", {
                                          src: "/assets/images/btc.png",
                                          className:
                                            "img-fluid mini-coin-12 mr-2",
                                          alt: "Coin",
                                        }),
                                        this.state.currentCoin
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  E.a,
                                  { sm: 12, md: 5, xl: 5 },
                                  r.a.createElement(
                                    "label",
                                    { htmlFor: "amount" },
                                    t("amount")
                                  ),
                                  r.a.createElement("input", {
                                    type: "text",
                                    name: "amount",
                                    className: "form-control",
                                    onChange: this.handleInputChange,
                                    value: this.state.amount,
                                  })
                                ),
                                r.a.createElement(
                                  E.a,
                                  { sm: 12, md: 3, xl: 3 },
                                  r.a.createElement(
                                    "label",
                                    { htmlFor: "players" },
                                    "#",
                                    t("players_num")
                                  ),
                                  r.a.createElement("input", {
                                    required: !0,
                                    type: "number",
                                    min: 2,
                                    max: 4,
                                    name: "players",
                                    className: "form-control",
                                    onChange: this.handleInputChange,
                                    value: this.state.players,
                                  })
                                ),
                                r.a.createElement(
                                  E.a,
                                  { sm: 12, md: 12, xl: 12 },
                                  r.a.createElement(
                                    "button",
                                    {
                                      disabled: this.state.disabled,
                                      type: "submit",
                                      className:
                                        "btn btn-block btn-purple mt-2 no-shadow",
                                    },
                                    this.state.loading
                                      ? r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          r.a.createElement("div", {
                                            className:
                                              "spinner-border spinner-border-sm mr-1",
                                            role: "status",
                                          })
                                        )
                                      : r.a.createElement("i", {
                                          className: "mdi mdi-parachute mr-1",
                                        }),
                                    t("send_rain")
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              "p",
                              { className: "mt-2 text-white text-center mb-0" },
                              t("t1"),
                              r.a.createElement("br", null),
                              t("t2")
                            )
                          )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(r.a.Component);
      Object(d.b)(function (e) {
        return { country: e.items.country };
      }, {})(tt);
      var at = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleResize = function () {
                var e = document.querySelector("#page-content"),
                  t =
                    document.documentElement.clientWidth ||
                    document.body.clientWidth,
                  a =
                    document.documentElement.clientHeight ||
                    document.body.clientHeight;
                if (null !== e) {
                  var r = 250,
                    s =
                      (document.querySelector(".left-sidenav"),
                      document.querySelectorAll(".game-image"));
                  n.state.show
                    ? s.forEach(function (e, t) {
                        null !== e && (e.style.height = "120px");
                      })
                    : ((r -= 170),
                      Object(P.s)() ||
                        s.forEach(function (e, t) {
                          null !== e && (e.style.height = "160px");
                        }));
                  var i = !0 === n.state.show ? t - (330 + r) : t;
                  (e.style.width = i + "px"), i < 960 && P.d.emit("hide_games");
                }
                Object(P.s)()
                  ? n.setState({ height: a - 180 })
                  : n.setState({ height: a - 170 });
              }),
              (n.setSide = function () {
                n.setState({ show: !n.state.show }),
                  Object(P.A)(1).then(function () {});
              }),
              (n.state = { show: !0 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  (Object(P.s)() || Object(P.v)()) &&
                    this.setState({ show: !0 }),
                    window.addEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(nt, { t: e, height: this.state.height })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        nt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleResize = function () {
                Object(P.s)()
                  ? n.setState({ width: "100%" })
                  : n.setState({ width: "330px" });
              }),
              (n.state = { width: "100%" }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  !(function () {
                    if (null !== document.getElementById("messages")) {
                      new ee.a("#messages", {
                        wheelSpeed: 1,
                        suppressScrollX: !0,
                        wheelPropagation: !0,
                        minScrollbarLength: 2,
                      }).update();
                    }
                  })(),
                    window.addEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "custom-navy ", style: { width: "100%" } },
                      r.a.createElement(
                        "div",
                        { className: "menu-body slimscroll" },
                        r.a.createElement(
                          "div",
                          { className: "main-icon-menu-pane active p-2" },
                          r.a.createElement(
                            "div",
                            { className: "title-box d-none" },
                            r.a.createElement("h6", { className: "menu-title" })
                          ),
                          r.a.createElement(
                            "div",
                            { id: "messages", style: { height: "auto" } },
                            r.a.createElement(Ve, { t: e })
                          ),
                          r.a.createElement(Je, { t: e })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      var rt = at,
        st = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.tipUpdate = function (e) {
                if (n._isMounted) {
                  var t = n.state,
                    a = t.token,
                    r = t.uid,
                    s = e.coin,
                    i = e.senderName,
                    o = e.amount,
                    l = e.target;
                  if (parseInt(l) === parseInt(r)) {
                    var c =
                      "You Received " +
                      Object(P.o)(o, s) +
                      " " +
                      s +
                      " by " +
                      i;
                    Object(P.y)(c, "success", "top-right");
                  }
                  Object(P.A)(1500).then(function () {
                    null !== a &&
                      q.a.emit(X.a.CREDIT, Object(P.m)({ token: a, coin: s }));
                  });
                }
              }),
              (n.paymentUpdate = function (e) {
                if (n._isMounted) {
                  var t = n.state,
                    a = t.token,
                    r = t.uid;
                  null !== r &&
                    parseFloat(e.uid) === parseFloat(r) &&
                    (Object(P.y)(e.message, "success", "top-right"),
                    P.d.emit("update_payment")),
                    Object(P.A)(1e3).then(function () {
                      null !== a &&
                        q.a.emit(
                          X.a.CREDIT,
                          Object(P.m)({ token: a, coin: e.coin })
                        );
                    });
                }
              }),
              (n.messageUpdate = function (e) {
                if (n._isMounted) {
                  var t = parseFloat(n.state.uid);
                  (parseFloat(e.uid) !== t && parseFloat(e.target) !== t) ||
                    (e.from_name !== n.state.name &&
                      Object(P.y)(
                        "You Have a unread message from " + e.from_name,
                        "info",
                        "top-right"
                      ));
                }
              }),
              (n.state = {
                name: T.a.getKey("name") ? T.a.getKey("name") : null,
                token: T.a.getKey("token") ? T.a.getKey("token") : null,
                uid: P.q,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.on(X.a.SEND_TIP, function (t) {
                      return e.tipUpdate(Object(P.k)(t));
                    }),
                    q.a.on(X.a.UPDATE_PAYMENT_STATUS, function (t) {
                      return e.paymentUpdate(Object(P.k)(t));
                    }),
                    q.a.on(X.a.ADD_MESSAGES, function (t) {
                      return e.messageUpdate(Object(P.k)(t));
                    }),
                    q.a.on("admin_notify", function (t) {
                      return e.adminNotify(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "adminNotify",
                value: function (e) {
                  this._isMounted &&
                    Object(P.y)(e.mesage, "danger", "top-center");
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        it = a(16),
        ot = a(20),
        lt = a(390),
        ct =
          (r.a.Component,
          Object(F.a)({
            list: { width: 250 },
            fullList: { width: "auto" },
            drawer: { color: "#C67512", background: "rgb(29 44 49 / 91%)" },
            logo: {
              margin: 0,
              padding: "10px 12px 0",
              background: "rgb(29 44 49 / 91%)",
              borderBottom: "1px solid #555",
            },
            links: {
              marginTop: 5,
              padding: "10px 12px",
              display: "block",
              background: "rgb(29 44 49 / 91%)",
            },
          }));
      function ut(e) {
        var t = ct(),
          a = r.a.useState({ left: !1 }),
          n = Object(D.a)(a, 2),
          s = n[0],
          i = n[1],
          o = function (e, t) {
            return function (a) {
              ("keydown" !== a.type ||
                ("Tab" !== a.key && "Shift" !== a.key)) &&
                i(Object(it.a)(Object(it.a)({}, s), {}, Object(G.a)({}, e, t)));
            };
          },
          l = e.t;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            r.a.Fragment,
            { key: "left" },
            r.a.createElement(
              "li",
              { className: "nav-link ml-3", onClick: o("left", !0) },
              r.a.createElement("i", {
                className: "mdi mdi-menu text-white font-20",
              })
            ),
            r.a.createElement(
              lt.a,
              { anchor: "left", open: s.left, onClose: o("left", !1) },
              r.a.createElement(
                "ul",
                { className: Object(ot.a)(t.logo) },
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    b.b,
                    { to: "/", className: "logo" },
                    r.a.createElement(
                      "span",
                      null,
                      r.a.createElement("img", {
                        src: "/assets/images/logo.png",
                        alt: "logo-small",
                        className: "logo-50",
                      }),
                      r.a.createElement(
                        "b",
                        { className: "text-white font-20 d-inline-block" },
                        l("PesaTimes")
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "d-block" },
                  r.a.createElement(
                    b.b,
                    { to: "/leaderboard", className: Object(ot.a)(t.links) },
                    r.a.createElement("span", null, l("leaderboard"))
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "d-block" },
                  r.a.createElement(
                    b.b,
                    { to: "/affiliate", className: Object(ot.a)(t.links) },
                    r.a.createElement("span", null, l("affiliate"))
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "d-block" },
                  r.a.createElement(
                    b.b,
                    { to: "/support", className: Object(ot.a)(t.links) },
                    r.a.createElement("span", null, l("support"))
                  )
                )
              )
            )
          )
        );
      }
      var mt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                loading: !0,
                notifications: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.emit(X.a.NOTIFICATION),
                    q.a.on(X.a.NOTIFICATION, function (t) {
                      return e.getNotification(Object(P.k)(t));
                    });
                },
              },
              {
                key: "getNotification",
                value: function (e) {
                  var t = this;
                  Object(P.A)(1e3).then(function () {
                    t.setState({ loading: !1 });
                  }),
                    e.forEach(function (e, a) {
                      t.setState(function (n) {
                        return {
                          notifications: [
                            r.a.createElement(dt, {
                              t: t.props.t,
                              key: a,
                              title: e.title,
                              content: e.content,
                              date: e.date,
                            }),
                          ].concat(Object(o.a)(n.notifications)),
                        };
                      });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.loading
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "b",
                            { className: "mt-1 d-block text-center" },
                            r.a.createElement("div", {
                              className: "spinner-grow text-pink",
                              role: "status",
                            })
                          )
                        )
                      : this.state.notifications
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        dt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(r))).send = function (t) {
                P.d.emit("show_notify", e.props);
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.title,
                    a = e.date;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "button",
                      {
                        onClick: this.send,
                        className: "dropdown-item notify-item mb-2",
                      },
                      r.a.createElement(
                        "div",
                        { className: "notify-icon bg-success" },
                        r.a.createElement("i", { className: "mdi mdi-dice-6" })
                      ),
                      r.a.createElement(
                        "p",
                        { className: "notify-details" },
                        t,
                        r.a.createElement(
                          "small",
                          { className: "text-muted" },
                          Object(P.n)(a)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        ht = mt,
        pt =
          (r.a.Component,
          Object(F.a)({ list: { width: 330, fontFamily: "Titillium Web" } }));
      function ft() {
        var e = pt(),
          t = r.a.useState({ right: !1 }),
          a = Object(D.a)(t, 2),
          n = a[0],
          s = a[1],
          i = function (e, t) {
            return function (a) {
              ("keydown" !== a.type ||
                ("Tab" !== a.key && "Shift" !== a.key)) &&
                s(Object(it.a)(Object(it.a)({}, n), {}, Object(G.a)({}, e, t)));
            };
          };
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            r.a.Fragment,
            { key: "right" },
            r.a.createElement(
              "button",
              {
                className:
                  "dropdown-toggle dropdown-toggle-split btn btn-user mt-2 py-1-5 notif-btn",
                onClick: i("right", !0),
              },
              r.a.createElement("i", { className: "dripicons-bell noti-icon" })
            ),
            r.a.createElement(
              lt.a,
              { anchor: "right", open: n.right, onClose: i("right", !1) },
              (function (t) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "h6",
                    { className: "dropdown-item-text px-2 nttitle" },
                    "Notifications"
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: Object(ot.a)(e.list, { anchor: t }),
                      role: "presentation",
                      onClick: i(t, !1),
                    },
                    r.a.createElement(
                      "div",
                      { className: "notification-list" },
                      r.a.createElement(ht, null)
                    )
                  )
                );
              })("right")
            )
          )
        );
      }
      var bt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).collapse = function () {
                n.setState({ show: !n.state.show }),
                  P.d.emit("toggle_sidebar", n.state.show);
              }),
              (n.desktop = function () {
                var e = n.props.t;
                return r.a.createElement(
                  "div",
                  {
                    className: "d-flex justify-content-between logged-in-user",
                    id: "topbar2",
                  },
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-left" },
                    r.a.createElement(Ue, { brand: P.b }),
                    r.a.createElement(me, { t: e }),
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "tel:0700000064", className: "phone-header" },
                      r.a.createElement(
                        "span",
                        null,
                        r.a.createElement("i", {
                          className: "mdi mdi-phone mr-2 ",
                        }),
                        "0700 000 064"
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-right" },
                    r.a.createElement(Fe, { t: e }),
                    " ",
                    r.a.createElement(Pe, { t: e })
                  )
                );
              }),
              (n.mobile = function () {
                var e = n.props.t;
                return r.a.createElement(
                  "div",
                  {
                    className: "d-flex justify-content-between",
                    id: "topbar2",
                  },
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-left" },
                    r.a.createElement(Ke, { brand: P.b }),
                    " ",
                    r.a.createElement(me, { t: e }),
                    "  ",
                    r.a.createElement(
                      "a",
                      {
                        href: "tel:0700000064",
                        className: "phone-header-mobile",
                      },
                      r.a.createElement(
                        "span",
                        null,
                        r.a.createElement("i", { className: "mdi mdi-phone" })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "d-flex justify-content-right" },
                    r.a.createElement(Le, { t: e }),
                    r.a.createElement(st, { t: e }),
                    r.a.createElement(Pe, { t: e })
                  )
                );
              }),
              (n.state = { header: null, show: !0 }),
              (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.handleResize(),
                    window.addEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  Object(P.s)()
                    ? this.setState({ header: this.mobile() })
                    : this.setState({ header: this.desktop() });
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.header;
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        gt = a(198),
        yt =
          (a(343),
          (function (e) {
            Object(u.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).loginUser = function (e) {
                  n.setState({ loginPage: !n.state.loginPage });
                }),
                (n.resetPass = function (e) {
                  var t = e,
                    a = n.props.t;
                  return (
                    console.log("some " + e),
                    n.setState({ disabled: !1 }),
                    t.status
                      ? (n.loginUser(),
                        Object(P.y)(
                          a("password successfully reset proceed to Login"),
                          "success",
                          "top-center"
                        ))
                      : Object(P.y)(
                          a("An error occured"),
                          "warning",
                          "top-center"
                        )
                  );
                }),
                (n.back = function () {
                  n.props.clicked();
                }),
                (n.state = {
                  show: !1,
                  loading: !0,
                  disabled: !1,
                  loginPage: !1,
                  email: "",
                  r_code: "",
                  password: "",
                }),
                (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
                (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentWillMount",
                  value: function () {
                    var e = this;
                    Object(P.A)(500).then(function () {
                      e.setState({ loading: !1 });
                    });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    q.a.on(X.a.RESET_PASSWORD, function (t) {
                      return e.resetPass(Object(P.k)(t));
                    });
                  },
                },
                {
                  key: "handleShow",
                  value: function (e) {
                    this.props.clicked(), this.setState({ show: !0 });
                  },
                },
                {
                  key: "handleClose",
                  value: function () {
                    this.setState({ show: !1 });
                  },
                },
                {
                  key: "submitForm",
                  value: function (e) {
                    var t = this;
                    e.preventDefault();
                    var a = this.props.t;
                    if (
                      !Object(P.t)(this.state.email) &&
                      !Object(P.u)(this.state.email)
                    )
                      return Object(P.y)(
                        a("please enter valid mobile number"),
                        "warning",
                        "top-center"
                      );
                    this.setState({ disabled: !0 }),
                      Object(P.A)(700).then(function () {
                        q.a.emit(
                          X.a.RESET_PASSWORD,
                          Object(P.m)({ email: t.state.email })
                        );
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      a = t.justModal,
                      n = t.t;
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      this.state.loading && !a
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              { className: "text-center" },
                              r.a.createElement("div", {
                                class:
                                  "spinner-border text-info my-3 user-loader",
                                role: "status",
                              })
                            )
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              { class: "px-3" },
                              r.a.createElement(
                                "div",
                                { className: "text-center auth-logo-text" },
                                r.a.createElement(
                                  "p",
                                  { className: "mt-2 text-white" },
                                  "Use Code Sent to Your Mobile Number to Reset Password"
                                )
                              ),
                              r.a.createElement(
                                "form",
                                {
                                  className: "my-4",
                                  onSubmit: function (t) {
                                    return e.submitForm(t);
                                  },
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "form-group text-center" },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          { className: "input-group-text bgp" },
                                          "Phone No"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        name: "email",
                                        placeholder: "O7XX",
                                        autoComplete: "off",
                                        style: { height: 40 },
                                        onChange: function (t) {
                                          return e.setState({
                                            email: t.target.value,
                                          });
                                        },
                                      })
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "form-group text-center" },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          { className: "input-group-text bgp" },
                                          "Reset Code"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        name: "r_code",
                                        placeholder: "XXXX",
                                        autoComplete: "off",
                                        style: { height: 40 },
                                        onChange: function (t) {
                                          return e.setState({
                                            r_code: t.target.value,
                                          });
                                        },
                                      })
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "form-group text-center" },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          { className: "input-group-text bgp" },
                                          "Password"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "password",
                                        className: "form-control",
                                        name: "password",
                                        placeholder: "",
                                        autoComplete: "off",
                                        style: { height: 40 },
                                        onChange: function (t) {
                                          return e.setState({
                                            password: t.target.value,
                                          });
                                        },
                                      })
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "form-group mt-2 text-center" },
                                  r.a.createElement(
                                    "button",
                                    {
                                      type: "submit",
                                      className:
                                        "btn reset-btn no-shadow btn-block",
                                      disabled: this.state.disabled,
                                    },
                                    r.a.createElement("i", {
                                      className: "mdi mdi-email",
                                    }),
                                    " Reset Password"
                                  )
                                )
                              )
                            )
                          ),
                      this.state.loginPage &&
                        r.a.createElement(wt, { t: n, justModal: "true" })
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        vt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).resetPass = function (e) {
                n.setState({ resetPage: !n.state.resetPage }),
                  n.setState({ showed: !n.state.showed });
              }),
              (n.resetPassword = function (e) {
                var t = e,
                  a = n.props.t;
                return (
                  n.setState({ disabled: !1 }),
                  t.status
                    ? Object(P.y)(
                        a("your reset code send to mobile_number"),
                        "success",
                        "top-center"
                      )
                    : Object(P.y)(
                        a("this_email_is_not_registred_on_our_system"),
                        "warning",
                        "top-center"
                      )
                );
              }),
              (n.back = function () {
                n.props.clicked();
              }),
              (n.state = {
                show: !1,
                loading: !0,
                resetPage: !1,
                disabled: !1,
                showed: !0,
                email: "",
              }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  Object(P.A)(500).then(function () {
                    e.setState({ loading: !1 });
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.RESET_CODE, function (t) {
                    return e.resetPassword(Object(P.k)(t));
                  });
                },
              },
              {
                key: "handleShow",
                value: function (e) {
                  this.props.clicked(), this.setState({ show: !0 });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({ show: !1 });
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  var t = this;
                  e.preventDefault();
                  var a = this.props.t;
                  if (
                    !Object(P.t)(this.state.email) &&
                    !Object(P.u)(this.state.email)
                  )
                    return Object(P.y)(
                      a("please enter valid mobile number"),
                      "warning",
                      "top-center"
                    );
                  this.setState({ disabled: !0 }),
                    Object(P.A)(700).then(function () {
                      q.a.emit(
                        X.a.RESET_PASSWORD,
                        Object(P.m)({ email: t.state.email })
                      );
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.loading && !this.state.resetPage
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "div",
                            { className: "text-center" },
                            r.a.createElement("div", {
                              class:
                                "spinner-border text-info my-3 user-loader",
                              role: "status",
                            })
                          )
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "div",
                            {
                              class: "px-3",
                              style: this.state.showed
                                ? { display: "block" }
                                : { display: "none" },
                            },
                            r.a.createElement(
                              "div",
                              { className: "text-center auth-logo-text" },
                              r.a.createElement(
                                "p",
                                { className: "mt-2 text-white" },
                                "Enter Your Phone Number to Reset Password"
                              )
                            ),
                            r.a.createElement(
                              "form",
                              {
                                className: "my-4",
                                onSubmit: function (t) {
                                  return e.submitForm(t);
                                },
                              },
                              r.a.createElement(
                                "div",
                                { className: "form-group text-center" },
                                r.a.createElement(
                                  "div",
                                  { className: "form-group" },
                                  r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group-append" },
                                      r.a.createElement(
                                        "span",
                                        { className: "input-group-text bgp" },
                                        "Phone No"
                                      )
                                    ),
                                    r.a.createElement("input", {
                                      type: "text",
                                      className: "form-control",
                                      name: "email",
                                      placeholder: "O7XX",
                                      autoComplete: "off",
                                      style: { height: 40 },
                                      onChange: function (t) {
                                        return e.setState({
                                          email: t.target.value,
                                        });
                                      },
                                    })
                                  )
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group mt-2 text-center" },
                                r.a.createElement(
                                  "button",
                                  {
                                    type: "submit",
                                    className:
                                      "btn reset-btn no-shadow btn-block",
                                    disabled: this.state.disabled,
                                  },
                                  r.a.createElement("i", {
                                    className: "mdi mdi-email",
                                  }),
                                  " Reset"
                                ),
                                r.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className:
                                      "btn btn-sm -2 btn-outline-light btn-block",
                                    onClick: this.back,
                                  },
                                  r.a.createElement("i", {
                                    className: "mdi mdi-refresh",
                                  }),
                                  " Back"
                                )
                              )
                            )
                          )
                        ),
                    this.state.resetPage &&
                      r.a.createElement(yt, { t: t, clicked: this.resetPass })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      function Et() {
        Et = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          s = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function o(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          o({}, "");
        } catch (x) {
          o = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function l(e, t, a, n) {
          var r = t && t.prototype instanceof m ? t : m,
            s = Object.create(r.prototype),
            i = new k(n || []);
          return (
            (s._invoke = (function (e, t, a) {
              var n = "suspendedStart";
              return function (r, s) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw s;
                  return N();
                }
                for (a.method = r, a.arg = s; ; ) {
                  var i = a.delegate;
                  if (i) {
                    var o = E(i, a);
                    if (o) {
                      if (o === u) continue;
                      return o;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  n = "executing";
                  var l = c(e, t, a);
                  if ("normal" === l.type) {
                    if (
                      ((n = a.done ? "completed" : "suspendedYield"),
                      l.arg === u)
                    )
                      continue;
                    return { value: l.arg, done: a.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (a.method = "throw"), (a.arg = l.arg));
                }
              };
            })(e, a, i)),
            s
          );
        }
        function c(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (x) {
            return { type: "throw", arg: x };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function d() {}
        function h() {}
        var p = {};
        o(p, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          b = f && f(f(O([])));
        b && b !== t && a.call(b, r) && (p = b);
        var g = (h.prototype = m.prototype = Object.create(p));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            o(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function (r, s) {
            function i() {
              return new t(function (n, i) {
                !(function n(r, s, i, o) {
                  var l = c(e[r], e, s);
                  if ("throw" !== l.type) {
                    var u = l.arg,
                      m = u.value;
                    return m && "object" == typeof m && a.call(m, "__await")
                      ? t.resolve(m.__await).then(
                          function (e) {
                            n("next", e, i, o);
                          },
                          function (e) {
                            n("throw", e, i, o);
                          }
                        )
                      : t.resolve(m).then(
                          function (e) {
                            (u.value = e), i(u);
                          },
                          function (e) {
                            return n("throw", e, i, o);
                          }
                        );
                  }
                  o(l.arg);
                })(r, s, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(e, t) {
          var a = e.iterator[t.method];
          if (void 0 === a) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                E(e, t),
                "throw" === t.method)
              )
                return u;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return u;
          }
          var n = c(a, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), u
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function k(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                s = function t() {
                  for (; ++n < e.length; )
                    if (a.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          o(g, "constructor", h),
          o(h, "constructor", d),
          (d.displayName = o(h, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), o(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(v.prototype),
          o(v.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function (t, a, n, r, s) {
            void 0 === s && (s = Promise);
            var i = new v(l(t, a, n, r), s);
            return e.isGeneratorFunction(a)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          o(g, i, "Generator"),
          o(g, r, function () {
            return this;
          }),
          o(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var a in e) t.push(a);
            return (
              t.reverse(),
              function a() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (a.value = n), (a.done = !1), a;
                }
                return (a.done = !0), a;
              }
            );
          }),
          (e.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(a, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = a),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var s = this.tryEntries[r],
                  i = s.completion;
                if ("root" === s.tryLoc) return n("end");
                if (s.tryLoc <= this.prev) {
                  var o = a.call(s, "catchLoc"),
                    l = a.call(s, "finallyLoc");
                  if (o && l) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                  } else if (o) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var s = r;
                  break;
                }
              }
              s &&
                ("break" === e || "continue" === e) &&
                s.tryLoc <= t &&
                t <= s.finallyLoc &&
                (s = null);
              var i = s ? s.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                s
                  ? ((this.method = "next"), (this.next = s.finallyLoc), u)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), w(a), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var n = a.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    w(a);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var _t = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
              ((r = t.call(this, e)).setLogin = function (e) {
                !0 === e.status
                  ? (console.log(
                      "Login data [ ".concat(JSON.stringify(e), " ]")
                    ),
                    r.setState({
                      status: "Successfully Login, Please Wait...",
                    }),
                    A.remove("session"),
                    A.set("session", e.token, { expires: 14 }),
                    T.a.setKey("token", e.token),
                    T.a.setKey("user_token", Object(P.x)(50)),
                    T.a.setKey("jwt_token", Object(P.x)(50)),
                    T.a.setKey("secret_user", Object(P.x)(44)),
                    T.a.setKey("secret_realtime", Object(P.x)(50)),
                    T.a.setKey("security_key", Object(P.x)(10)),
                    T.a.setKey("token_key", Object(P.x)(64)),
                    T.a.setKey("secret_token", Object(P.x)(64)),
                    T.a.setKey("name", e.name),
                    T.a.setKey("uid", e.uid),
                    T.a.setKey("avatar", e.avatar),
                    T.a.setKey("email", e.email.toString()),
                    T.a.setKey("credit", e.credit),
                    T.a.setKey("bonus", e.bonus),
                    T.a.setKey("room", e.room),
                    T.a.setKey("friends", e.friends),
                    q.a.emit(
                      X.a.ONLINE,
                      Object(P.m)({
                        jwt_token: T.a.getKey("jwt_token"),
                        user_token: T.a.getKey("user_token"),
                        security_key: T.a.getKey("security_key"),
                        secret_user: T.a.getKey("secret_user"),
                        secret_realtime: T.a.getKey("secret_realtime"),
                        client_system: T.a.getKey("client_system"),
                        token_key: T.a.getKey("token_key"),
                        secret_token: T.a.getKey("secret_token"),
                        token: e.token,
                      })
                    ),
                    r.props.history.push("/"),
                    Object(P.A)(1e3).then(function () {
                      window.location.reload();
                    }))
                  : r.setState({
                      status: e.status,
                      submitted: !1,
                      disabled: !1,
                    });
              }),
              (r.handleSubmit = (function () {
                var e = Object(gt.a)(
                  Et().mark(function e(t) {
                    var a, n, s;
                    return Et().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              r.setState({
                                submitted: !0,
                                disabled: !0,
                                status: r.props.t("please_wait"),
                              }),
                              (a = r.state),
                              (n = a.username),
                              (s = a.password),
                              n && s)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              r.setState({ disabled: !1, status: !1 }),
                              e.abrupt("return")
                            );
                          case 6:
                            Object(P.A)(1e3).then(function () {
                              q.a.emit(
                                X.a.LOGIN_USER,
                                Object(P.m)({ username: n, password: s })
                              );
                            });
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.forgetPass = function (e) {
                r.setState({ forgetPage: !r.state.forgetPage });
              }),
              (r.resetPass = function (e) {
                r.setState({ resetPage: !r.state.forgetPage });
              }),
              (r.recaptchaChange = function (e) {
                r.setState({ recaptcha: e });
              }),
              (r.state = {
                show: !1,
                forgetPage: !1,
                resetPage: !1,
                username: "",
                password: "",
                recaptcha: !1,
                status: !1,
                submitted: !1,
                disabled: !1,
                effect: "zoomIn",
              }),
              (r.handleShow = r.handleShow.bind(Object(S.a)(r))),
              (r.handleClose = r.handleClose.bind(Object(S.a)(r))),
              (r.handleSubmit = r.handleSubmit.bind(Object(S.a)(r))),
              (r.recaptchaRef = Object(n.createRef)()),
              r
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.LOGIN_USER, function (t) {
                    return e.setLogin(Object(P.k)(t));
                  }),
                    this.props.justModal && this.setState({ show: !0 });
                },
              },
              {
                key: "handleShow",
                value: function (e) {
                  this.setState({ show: !0, effect: "zoomIn" });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({
                    show: !1,
                    effect: "zoomOut",
                    disabled: !1,
                    status: !1,
                    submitted: !1,
                  }),
                    P.d.emit("showAuthModal", !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.justModal,
                    n = t.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    !a &&
                      r.a.createElement(
                        "button",
                        {
                          className: "login-btn",
                          onClick: function (t) {
                            return e.handleShow(t);
                          },
                        },
                        n("login")
                      ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        centered: !0,
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "login-md-modal",
                        className: "modalAuth animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        null,
                        n("login"),
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "auth-modal p-0" },
                        r.a.createElement(
                          "div",
                          { className: "m-auto" },
                          !this.state.forgetPage &&
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "div",
                                { className: "px-3" },
                                r.a.createElement(
                                  "div",
                                  { className: "text-center" },
                                  r.a.createElement("img", {
                                    src: "/assets/images/logo.png",
                                    className: "img-fluid auth-logo",
                                    alt: "",
                                  })
                                ),
                                r.a.createElement(
                                  "form",
                                  {
                                    className: "form-horizontal auth-form my-4",
                                    onSubmit: function (t) {
                                      e.handleSubmit(t);
                                    },
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group mb-3" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          { className: "input-group-text bgp" },
                                          n("Phone No")
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: this.state.username,
                                        autoComplete: "off",
                                        onChange: function (t) {
                                          return e.setState({
                                            username: t.target.value,
                                          });
                                        },
                                        style: { height: 40 },
                                      }),
                                      this.state.submitted &&
                                        !this.state.username &&
                                        r.a.createElement(
                                          "div",
                                          { className: "help-block" },
                                          n("Mobile No is required")
                                        )
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group mb-3" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          { className: "input-group-text bgp" },
                                          n("Password ")
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "password",
                                        className: "form-control",
                                        value: this.state.password,
                                        autoComplete: "off",
                                        onChange: function (t) {
                                          return e.setState({
                                            password: t.target.value,
                                          });
                                        },
                                        style: { height: 40 },
                                      }),
                                      this.state.submitted &&
                                        !this.state.password &&
                                        r.a.createElement(
                                          "div",
                                          { className: "help-block" },
                                          n("password_is_required")
                                        )
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-center" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        className:
                                          "btn login-btn btn-block font-weight-bold no-shadow ",
                                        disabled: this.state.disabled,
                                      },
                                      r.a.createElement("i", {
                                        className:
                                          "mdi mdi-login mr-1 float-left font-18",
                                      }),
                                      " LOGIN"
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  v.a,
                                  { className: "text-center mb-4" },
                                  r.a.createElement(
                                    E.a,
                                    { md: "6", className: "my-1" },
                                    r.a.createElement(
                                      "a",
                                      {
                                        href: "#",
                                        onClick: this.forgetPass,
                                        className:
                                          "btn btn-block btn-info shadow-none",
                                      },
                                      r.a.createElement("i", {
                                        className: "mdi mdi-information mr-1",
                                      }),
                                      " ",
                                      n("rest_password")
                                    )
                                  )
                                ),
                                this.state.status &&
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "alert bg-secondary text-white",
                                    },
                                    this.state.status
                                  )
                              )
                            ),
                          this.state.forgetPage &&
                            r.a.createElement(vt, {
                              t: n,
                              clicked: this.forgetPass,
                            })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        wt = Object(g.g)(_t),
        kt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).setRegister = function (e) {
                var t = e;
                !0 === t.status
                  ? (n.setState({
                      status: "Successfully Registered. Please Wait...",
                      submitted: !1,
                    }),
                    Object(P.A)(1e3).then(function () {
                      q.a.emit(
                        X.a.LOGIN_USER,
                        Object(P.m)({
                          username: n.state.username,
                          password: n.state.password,
                        })
                      );
                    }))
                  : n.setState({
                      disabled: !1,
                      status: t.status,
                      submitted: !1,
                    });
              }),
              (n.ruler = function (e) {
                n.setState({ rule: !0 });
              }),
              (n.reg = function (e) {
                n.setState({ rule: !1 });
              }),
              (n.checkRule = function (e) {
                n.setState({ ruleChecked: !n.state.ruleChecked });
              }),
              (n.state = {
                rule: !1,
                show: !!n.props.show && n.props.show,
                username: "",
                email: "",
                phone: "",
                aff: T.a.getKey("aff") ? T.a.getKey("aff") : null,
                password: "",
                reg: !0,
                status: !1,
                disabled: !1,
                submitted: !1,
                ruleChecked: !1,
              }),
              (n.switchMethod = n.switchMethod.bind(Object(S.a)(n))),
              (n.submitForm = n.submitForm.bind(Object(S.a)(n))),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.REGISTER_USER, function (t) {
                    return e.setRegister(Object(P.k)(t));
                  });
                },
              },
              {
                key: "handleShow",
                value: function (e) {
                  this.setState({ show: !0, effect: "zoomIn" });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({ show: !1, effect: "zoomOut", submitted: !1 });
                },
              },
              {
                key: "switchMethod",
                value: function (e) {
                  var t = e.target,
                    a = "checkbox" === t.type ? t.checked : t.value;
                  this.setState({ reg: a });
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  e.preventDefault();
                  var t = this.props.t;
                  this.setState({
                    submitted: !0,
                    disabled: !0,
                    status: t("please_wait"),
                  });
                  var a = this.state,
                    n = a.username,
                    r = a.phone,
                    s = a.password,
                    i = a.reg,
                    o = a.ruleChecked;
                  if (n && s && r)
                    if (n.length < 3)
                      this.setState({
                        status: t("please_enter_username_more_than_3_words"),
                        disabled: !1,
                      });
                    else {
                      if (i && !Object(P.t)(r) && !Object(P.u)(r))
                        return (
                          this.setState({ status: !1, disabled: !1 }),
                          Object(P.y)(
                            t("please_enter_valid_mobile_number"),
                            "warning",
                            "top-center"
                          )
                        );
                      if (o) {
                        this.setState({ phone: r, password: s });
                        var l = 0,
                          c = window.location.pathname.replace("/aff/", "");
                        Number(c) > 0 &&
                          (T.a.setKey("aff", c),
                          console.log("Tk is " + c),
                          (l = c)),
                          q.a.emit(
                            X.a.REGISTER_USER,
                            Object(P.m)({
                              username: n,
                              password: s,
                              country: "kenya",
                              email: r,
                              method: i,
                              aff: l,
                            })
                          );
                      } else
                        this.setState({
                          status: "Make Sure About Rule Checkbox",
                          disabled: !1,
                        });
                    }
                  else this.setState({ status: !1, disabled: !1 });
                },
              },
              {
                key: "copyAddress",
                value: function (e) {
                  var t = Object(P.p)("#" + e);
                  t.select(),
                    t.setSelectionRange(0, 99999),
                    document.execCommand("copy");
                  var a = this.props.t;
                  return Object(P.y)(
                    a("password_copied"),
                    "success",
                    "bottom-left"
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.submitted,
                    n = t.phone,
                    s = t.username,
                    i = t.password,
                    o = t.disabled,
                    l = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    !this.props.show &&
                      r.a.createElement(
                        "button",
                        {
                          className: "register-btn",
                          onClick: function (t) {
                            return e.handleShow(t);
                          },
                        },
                        "  ",
                        l("register")
                      ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        centered: !0,
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "register-md-modal",
                        className: "modalAuth animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        null,
                        this.state.rule
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "a",
                                { onClick: this.reg, className: "cpt hvw" },
                                r.a.createElement("i", {
                                  className:
                                    "fa fa-chevron-left fonts-18 aligdsn-top mr-3 mt-1",
                                })
                              ),
                              l("user_agreement")
                            )
                          : r.a.createElement(r.a.Fragment, null, "Register"),
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      this.state.rule
                        ? r.a.createElement(
                            y.a.Body,
                            {
                              className:
                                "modal-reader animated " +
                                this.state.ruleEffect,
                            },
                            r.a.createElement(
                              "p",
                              {
                                className:
                                  "text-white font-light text-shadow-none font-12",
                              },
                              "1. General",
                              r.a.createElement("br", null),
                              "1.1. These User Agreement apply to the usage of games accessible through www.pesatimes.co.ke.",
                              r.a.createElement("br", null),
                              "1.2. These User Agreement come into force as soon as you complete the registration process, which includes checking the box accepting these User Agreement and successfully creating an account. By using any part of the Website following account creation, you agree to these User Agreement.",
                              r.a.createElement("br", null),
                              "1.3. You must read these User Agreement carefully in their entirety before creating an account. If you do not agree with any provision of these User Agreement, you must not create an account or continue to use the Website.",
                              r.a.createElement("br", null),
                              "1.4. We are entitled to make amendments to these User Agreement at any time and without advanced notice. If we make such amendments, we may take appropriate steps to bring such changes to your attention (such as by email or placing a notice on a prominent position on the Website, together with the amended User Agreement) but it shall be your sole responsibility to check for any amendments, updates and/or modifications. Your continued use of our site services and Website after any such amendment to the User Agreement will be deemed as your acceptance and agreement to be bound by such amendments, updates and/or modifications.",
                              r.a.createElement("br", null),
                              "1.5. These User Agreement may be published in several languages for informational purposes and ease of access by players. The English version is the only legal basis of the relationship between you and us and in the case of any discrepancy with respect to a translation of any kind, the English version of these User Agreement shall prevail.",
                              r.a.createElement("br", null),
                              "2.2. Binding Declarations",
                              r.a.createElement("br", null),
                              "2.1. By agreeing to be bound by these User Agreement, you also agree to be bound by the our site Rules and Privacy Policy that are hereby incorporated by reference into these User Agreement. In the event of any inconsistency, these User Agreement will prevail. You hereby represent and warrant that:",
                              r.a.createElement("br", null),
                              "2.2. You are over (a) 18 or (b) such other legal age or age of majority as determined by any laws which are applicable to you, whichever age is greater;",
                              r.a.createElement("br", null),
                              "2.3. You have full capacity to enter into a legally binding agreement with us and you are not restricted by any form of limited legal capacity;",
                              r.a.createElement("br", null),
                              "2.4. All information that you provide to us during the term of validity of this agreement is true, complete, correct, and that you shall immediately notify us of any change of such information;",
                              r.a.createElement("br", null),
                              "2.5. You are solely responsible for reporting and accounting for any taxes applicable to you under relevant laws for any winnings that you receive from us;",
                              r.a.createElement("br", null),
                              "2.6. You understand that by using our services you take the risk of losing money deposited into your Member Account and accept that you are fully and solely responsible for any such loss;",
                              r.a.createElement("br", null),
                              "2.7. You are permitted in the jurisdiction in which you are located to use online casino services;",
                              r.a.createElement("br", null),
                              "2.8. In relation to deposits and Withdraws of funds into and from your Member Account, you shall only use Ethereum that are valid and lawfully belong to you;",
                              r.a.createElement("br", null),
                              "2.9. You understand that the value of Ethereum can change dramatically depending on the market value;",
                              r.a.createElement("br", null),
                              "2.10. The computer software, the computer graphics, the Websites and the user interface that we make available to you is owned by our site or its associates and is protected by copyright laws. You may only use the software for your own personal, recreational uses in accordance with all rules, User Agreement we have established and in accordance with all applicable laws, rules and regulations;",
                              r.a.createElement("br", null),
                              "2.11. You understand that Ethereum is not considered a legal currency or tender and as such on the Website they are treated as virtual funds with no intrinsic value.",
                              r.a.createElement("br", null),
                              "2.12. You affirm that you are not an officer, director, employee, consultant or agent of our site or working for any company related to our site, or a relative or spouse of any of the foregoing;",
                              r.a.createElement("br", null),
                              "2.13. You are not diagnosed or classified as a compulsive or problem gambler. We are not accountable if such problem gambling arises whilst using our services, but will endeavour to inform of relevant assistance available. We reserve the right to implement cool off periods if we believe such actions will be of benefit.",
                              r.a.createElement("br", null),
                              "2.14. You accept and acknowledge that we reserve the right to detect and prevent the use of prohibited techniques, including but not limited to fraudulent transaction detection, automated registration and signup, gameplay and screen capture techniques. These steps may include, but are not limited to, examination of Players device properties, detection of geo-location and IP masking, transactions and blockchain analysis;",
                              r.a.createElement("br", null),
                              "2.15. You accept our right to terminate and/or change any games or events being offered on the Website, and to refuse and/or limit bets.",
                              r.a.createElement("br", null),
                              "2.16. You accept that we have the right to ban/block multiple accounts and freely control the assets in such accounts.",
                              r.a.createElement("br", null),
                              "3. RESTRICTED TERRITORIES 3.1. Blacklisted Territories: China,Netherlands, Dutch Caribbean Islands, Curacao, France, United States and/or any other restricted by law country or state. Note that it is strictly forbidden to play on our site games in blacklisted countries mentioned above.your personal data for the purpose of executing their duties and providing you with the best possible assistance and service. You hereby consent to such disclosures.",
                              r.a.createElement("br", null),
                              "4. General Betting Rules",
                              r.a.createElement("br", null),
                              "4.1. A bet can only be placed by a registered account holder.",
                              r.a.createElement("br", null),
                              "4.2. A bet can only be placed over the internet.",
                              r.a.createElement("br", null),
                              "4.3. You can only place a bet if you have sufficient Ethereum in your account with our site.",
                              r.a.createElement("br", null),
                              "4.4. The bet, once concluded, will be governed by the version of the User Agreement valid and available on the Website at the time of the bet being accepted.",
                              r.a.createElement("br", null),
                              "4.5. Any payout of a winning bet is credited to your account, consisting of the stake multiplied by the odds at which the bet was placed.",
                              r.a.createElement("br", null),
                              "4.6. our site reserves the right to adjust a bet payout credited to a our site account if it is determined by our site in its sole discretion that such a payout has been credited due to an error.",
                              r.a.createElement("br", null),
                              "4.7. A bet, which has been placed and accepted, cannot be amended, withdrawn or cancelled by you.",
                              r.a.createElement("br", null),
                              "4.8. The list of all the bets, their status and details are available to you on the Website.",
                              r.a.createElement("br", null),
                              "4.9. When you place a bet you acknowledge that you have read and understood in full all of these User Agreement regarding the bet as stated on the Website.",
                              r.a.createElement("br", null),
                              "4.10. our site manages your account, calculates the available funds, the pending funds, the betting funds as well as the amount of winnings. Unless proven otherwise, these amounts are considered as final and are deemed to be accurate.",
                              r.a.createElement("br", null),
                              "4.11. You are fully responsible for the bets placed.",
                              r.a.createElement("br", null),
                              "4.12. Winnings will be paid into your account after the final result is confirmed.",
                              r.a.createElement("br", null),
                              "5. Bonuses and Promotions",
                              r.a.createElement("br", null),
                              "5.1. our site reserves the right to cancel any promotion, bonus or bonus program (including, but not limited to top-up rewards, invite friends to reward bonuses and loyalty programs) with immediate effect if we believe the bonus has been set up incorrectly or is being abused, and if said bonus has been paid out, we reserve the right to decline any Withdraw request and to deduct such amount from your account. Whether or not a bonus is deemed to be set up incorrectly or abused shall be determined solely by our site.",
                              r.a.createElement("br", null),
                              "5.2. If you use a Deposit Bonus, no Withdraw of your original deposit will be accepted before you have reached the requirements stipulated under the User Agreement of the Deposit Bonus.",
                              r.a.createElement("br", null),
                              "5.3. Where any term of the offer or promotion is breached or there is any evidence of a series of bets placed by a customer or group of customers, which due to a deposit bonus, enhanced payments, free bets, risk free bets or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, our site reserves the right to reclaim the bonus element of such offers and in their absolute discretion either settle bets at the correct odds, void the free bet bonus and risk free bets or void any bet funded by the deposit bonus. In addition, our site reserves the right to levy an administration charge on the customer up to the value of the deposit bonus, free bet bonus, risk free bet or additional payment to cover administrative costs. We further reserve the right to ask any customer to provide sufficient documentation for us to be satisfied in our absolute discretion as to the customer's identity prior to us crediting any bonus, free bet, risk free bet or offer to their account.",
                              r.a.createElement("br", null),
                              "5.4. All our site offers are intended for recreational players and our site may in its sole discretion limit the eligibility of customers to participate in all or part of any promotion.",
                              r.a.createElement("br", null),
                              "5.5. our site reserves the right to amend, cancel, reclaim or refuse any promotion at its own discretion.",
                              r.a.createElement("br", null),
                              "5.6. Bonuses can only be received once per person/account, family, household, address, e-mail address, IP addresses and environments where computers are shared (university, fraternity, school, public library, workplace, etc.). The Operator reserves the right to close your account and confiscate any existing funds if evidence of abuse/fraud is found.",
                              r.a.createElement("br", null),
                              "5.7. You acknowledge and understand that separate User Agreement exist with respect to promotions, bonuses and special offers, and are in addition to these User Agreement. These User Agreement are set forth in the respective content page on this website, or have been made available to you personally, as the case may be. In the event of a conflict between the provisions of such promotions, bonuses and special offers, and the provisions of these User Agreement, the provisions of such promotions, bonuses and special offers will prevail.",
                              r.a.createElement("br", null),
                              "5.8. We may insist that you bet a certain amount of your own deposit before you can bet with any free/bonus funds we credit to your account.",
                              r.a.createElement("br", null),
                              "5.9. You accept that certain promotions may be subject to Withdraw restrictions and/or requirements which need to be met before funds credited under the promotion can be withdrawn. Such terms shall be duly published and made available as part of the promotion. If you opt to make a Withdraw before the applicable wagering requirements are fulfilled, we will deduct the whole bonus amount as well as any winnings connected with the use of the bonus amounts before approving any Withdraw.",
                              r.a.createElement("br", null),
                              "6. Live Chat",
                              r.a.createElement("br", null),
                              "6.1. As part of your use of the Website we may provide you with a live chat facility, which is moderated by us and subject to controls. We reserve the right to review the chat and to keep a record of all statements made on the facility. Your use of the chat facility should be for recreational and socialising purposes.",
                              r.a.createElement("br", null),
                              "6.2. We have the right to remove the chat room functionality or immediately terminate your Member Account and refund your account balance if you:",
                              r.a.createElement("br", null),
                              "(a) make any statements that are sexually explicit or grossly offensive, including expressions of bigotry, racism, hatred or profanity;",
                              r.a.createElement("br", null),
                              "(b) make statements that are abusive, defamatory or harassing or insulting;",
                              r.a.createElement("br", null),
                              "(c) use the chat facility to advertise, promote or otherwise relate to any other online entities;",
                              r.a.createElement("br", null),
                              "(d) make statements about our site, or any other Internet site(s) connected to the Website that are untrue and/or malicious and/or damaging to our site;",
                              r.a.createElement("br", null),
                              "(e) user the chat facility to collude, engage in unlawful conduct or encourage conduct we deem seriously inappropriate. Any suspicious chats will be reported to the competent authority.",
                              r.a.createElement("br", null),
                              "6.3. Live Chat is used as a form of communication between us and you and should not be copied or shared with any forums or third parties.",
                              r.a.createElement("br", null),
                              "7. Limitation of Liability",
                              r.a.createElement("br", null),
                              "7.1. You enter the Website and participate in the Games at your own risk. The Websites and the Games are provided without any warranty whatsoever, whether expressed or implied.",
                              r.a.createElement("br", null),
                              "7.2. Without prejudice to the generality of the preceding provision, we, our directors, employees, partners, service providers",
                              r.a.createElement("br", null),
                              "7.3. Do not warrant that the software, Games and the Websites are fit for their purpose;",
                              r.a.createElement("br", null),
                              "7.4. Do not warrant that the software, Games and the Websites are free from errors;",
                              r.a.createElement("br", null),
                              "7.5. Do not warrant that the software, Games and the Websites will be accessible without interruptions",
                              r.a.createElement("br", null),
                              "7.6. Shall not be liable for any loss, costs, expenses or damages, whether direct, indirect, special, consequential, incidental or otherwise, arising in relation to your use of the Websites or your participation in the Games.",
                              r.a.createElement("br", null),
                              "7.7. You understand and acknowledge that, if there is a malfunction in a Game or its interoperability, any bets made during such a malfunction shall be void. Funds obtained from a malfunctioning Game shall be considered void, as well as any subsequent game rounds with said funds, regardless of what Games are played using such funds.",
                              r.a.createElement("br", null),
                              "7.8. You hereby agree to fully indemnify and hold harmless us, our directors, employees, partners, and service providers for any cost, expense, loss, damages, claims and liabilities howsoever caused that may arise in relation to your use of the Website or participation in the Games.",
                              r.a.createElement("br", null),
                              "7.9. To the extent permitted by law, our maximum liability arising out of or in connection with your use of the Websites, regardless of the cause of actions (whether in contract, tort, breach of warranty or otherwise), will not exceed \u20ac100.",
                              r.a.createElement("br", null),
                              "8. Breaches, Penalties and Termination",
                              r.a.createElement("br", null),
                              "8.1. If you breach any provision of these User Agreement or we have a reasonable ground to suspect that you have breached them, we reserve the right to not open, to suspend, or to close your Member Account, or withhold payment of your winnings and apply such funds to any damages due by you.",
                              r.a.createElement("br", null)
                            )
                          )
                        : r.a.createElement(
                            y.a.Body,
                            {
                              className:
                                "rev auth-modal p-0 animated " +
                                this.state.regEffect,
                            },
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(
                                  "div",
                                  { className: "px-3" },
                                  r.a.createElement(
                                    "div",
                                    { className: "text-center" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/logo.png",
                                      className: "img-fluid auth-logo",
                                      alt: "",
                                    })
                                  ),
                                  r.a.createElement(
                                    "form",
                                    {
                                      className:
                                        "form-horizontal auth-form my-4",
                                      onSubmit: function (t) {
                                        e.submitForm(t);
                                      },
                                    },
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group mb-2" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text bgin",
                                            },
                                            l("Phone No")
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "text",
                                          className: "form-control",
                                          value: n,
                                          autoComplete: "off",
                                          onChange: function (t) {
                                            return e.setState({
                                              phone: t.target.value,
                                            });
                                          },
                                          placeholder: "07XX",
                                          style: { height: 40 },
                                        }),
                                        a &&
                                          !n &&
                                          r.a.createElement(
                                            "div",
                                            { className: "help-block" },
                                            l("mobile_is_required")
                                          )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group mb-2" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text bgin",
                                            },
                                            l("Username")
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "text",
                                          className: "form-control",
                                          value: s,
                                          autoComplete: "off",
                                          onChange: function (t) {
                                            return e.setState({
                                              username: t.target.value,
                                            });
                                          },
                                          style: { height: 40 },
                                        }),
                                        a &&
                                          !s &&
                                          r.a.createElement(
                                            "div",
                                            { className: "help-block" },
                                            l("username_is_required")
                                          )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group mt-2" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text bgin",
                                            },
                                            l("Password")
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "password",
                                          id: "password",
                                          className: "form-control text-white",
                                          value: i,
                                          autoComplete: "off",
                                          onChange: function (t) {
                                            return e.setState({
                                              password: t.target.value,
                                            });
                                          },
                                          style: { height: 40 },
                                        }),
                                        a &&
                                          !i &&
                                          r.a.createElement(
                                            "div",
                                            { className: "help-block" },
                                            l("password_is_required")
                                          )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      {
                                        className: "form-group mt-2 ml-2 mb-2",
                                      },
                                      r.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "checkbox checkbox-purple form-check-inline font-11 mx-0",
                                        },
                                        r.a.createElement("input", {
                                          type: "checkbox",
                                          id: "inlineCheckbox1",
                                          value: "rule",
                                          checkbox: this.state.ruleChecked,
                                          onClick: this.checkRule,
                                        }),
                                        r.a.createElement(
                                          "label",
                                          {
                                            className: "font-11 text-",
                                            for: "inlineCheckbox1",
                                          },
                                          "I  agree with the Terms of Service and confirm that I am above 18 years."
                                        )
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "text-center" },
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn login-btn btn-block font-weight-bold no-shadow",
                                          disabled: o,
                                        },
                                        r.a.createElement("i", {
                                          className:
                                            "mdi mdi-login mr-1 float-left font-18",
                                        }),
                                        " ",
                                        l("register")
                                      )
                                    ),
                                    this.state.status &&
                                      r.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "alert bg-secondary text-white mt-2",
                                        },
                                        this.state.status
                                      )
                                  )
                                )
                              )
                            )
                          )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ot = Object(g.g)(kt),
        Nt = !0,
        xt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(r))).collapse = function () {
                (Nt = !Nt), P.d.emit("toggle_sidebar", Nt);
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    "div",
                    {
                      className: "d-flex justify-content-between",
                      id: "topbar2",
                    },
                    r.a.createElement(Ue, { brand: P.b }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(wt, { t: e }),
                      r.a.createElement(Ot, { t: e })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        jt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "span",
                      { className: "btn-social-icon" },
                      r.a.createElement(f.a, null),
                      r.a.createElement(
                        "a",
                        {
                          href: e("facebook"),
                          target: "_blank",
                          "data-tip": "FaceBook Page",
                        },
                        r.a.createElement("i", {
                          className: "mdi mdi-facebook-box font-25",
                          style: { color: "rgb(93 120 127)" },
                        })
                      ),
                      r.a.createElement(
                        "a",
                        {
                          href: e("twitter"),
                          target: "_blank",
                          "data-tip": "Twitter News",
                        },
                        r.a.createElement("i", {
                          className: "mdi mdi-twitter-box font-25",
                          style: { color: "rgb(93 120 127)" },
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ct = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).showPrivacy = function (e) {
                e.preventDefault(), n.setState({ show: !0, effect: "pulse" });
              }),
              (n.closePrivacy = function () {
                n.setState({ show: !1, effect: "zoomOut" });
              }),
              (n.state = { show: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  P.d.on("show_privacy", function () {
                    e.setState({ show: !0, effect: "pulse" });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      b.b,
                      {
                        className: "nav-link-x",
                        to: "#",
                        onClick: this.showPrivacy,
                      },
                      r.a.createElement(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                        },
                        r.a.createElement("path", {
                          d: "M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z",
                        })
                      ),
                      r.a.createElement(
                        "span",
                        { className: "cpt menu-name" },
                        "Privacy Policy"
                      )
                    ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "lg",
                        centered: !0,
                        backdrop: "static",
                        show: this.state.show,
                        onHide: this.closePrivacy,
                        "aria-labelledby": "general-lg-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        { className: "font-light" },
                        "Privacy Policy",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.closePrivacy,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "modal-reader" },
                        r.a.createElement(
                          "p",
                          { className: "text-white font-light mb-2 font-14" },
                          "You hereby acknowledge and accept that if we deem necessary, we are able to collect and otherwise use your personal data in order to allow you access and use of the Websites and in order to allow you to participate in the Games.",
                          r.a.createElement("br", null),
                          "We hereby acknowledge that in collecting your personal details as stated in the previous provision, we are bound by the Data Protection Act. We will protect your personal information and respect your privacy in accordance with best business practices and applicable laws.",
                          r.a.createElement("br", null),
                          "We will use your personal data to allow you to participate in the Games and to carry out operations relevant to your participation in the Games. We may also use your personal data to inform you of changes, new services and promotions that we think you may find interesting. If you do not wish to receive such direct marketing correspondences, you may opt out of the service.",
                          r.a.createElement("br", null),
                          "Your personal data will not be disclosed to third parties, unless it is required by law. As our site business partners or suppliers or service providers may be responsible for certain parts of the overall functioning or operation of the Website, personal data may be disclosed to them. The employees of our site have access to your personal data for the purpose of executing their duties and providing you with the best possible assistance and service. You hereby consent to such disclosures.",
                          r.a.createElement("br", null),
                          "We shall keep all information provided as personal data. You have the right to access personal data held by us about you. No data shall be destroyed unless required by law, or unless the information held is no longer required to be kept for the purpose of the relationship.",
                          r.a.createElement("br", null),
                          "In order to make your visit to the Websites more user-friendly, to keep track of visits to the Websites and to improve the service, we collect a small piece of information sent from your browser, called a cookie. You can, if you wish, turn off the collection of cookies. You must note, however, that turning off cookies may severely restrict or completely hinder your use of the Websites.",
                          r.a.createElement("br", null),
                          r.a.createElement(
                            "h4",
                            { className: "mt-3 pt-3 text-yellow" },
                            "Cookies Policy"
                          ),
                          r.a.createElement("br", null),
                          "1.What are cookies?",
                          r.a.createElement("br", null),
                          "A cookie is a piece of information in the form of a very small text file that is placed on an internet user's computer. It is generated by a web page server (which is basically the computer that operates the website) and can be used by that server whenever the user visits the site. A cookie can be thought of as an internet user's identification card, which tells a website when the user has returned. Cookies can't harm your computer and we don't store any personally identifiable information about you on any of our cookies.",
                          r.a.createElement("br", null),
                          "2.Why do we use cookies on our site?",
                          r.a.createElement("br", null),
                          "our site uses two types of cookies: cookies set by us and cookies set by third parties (i.e. other websites or services). our site cookies enable us to keep you signed in to your account throughout your visit and to tailor the information displayed on the site to your preferences.",
                          r.a.createElement("br", null),
                          "3.What cookies do we use on our site?",
                          r.a.createElement("br", null),
                          "Below is a list of the main cookies set by our site, and what each is used for:",
                          r.a.createElement("br", null),
                          "_fp - stores browser's fingerprint. Lifetime: forever.",
                          r.a.createElement("br", null),
                          "_t - stores timestamp when user firstly visited site in current browsing session. Needed for unique visits statistic. Lifetime: browsing session.",
                          r.a.createElement("br", null),
                          "_r - stores http referrer for current browsing session. Needed in order to external track traffic sources. Lifetime: browsing session.",
                          r.a.createElement("br", null),
                          "_c - stores identifier of affiliate campaign. Needed for affiliate statistic. Lifetime: forever.",
                          r.a.createElement("br", null),
                          "Cookies set by third parties for wildcard domain: *.our site",
                          r.a.createElement("br", null),
                          "Google analytics: _ga, _gat, _gid",
                          r.a.createElement("br", null),
                          "Zendesk\uff1a__ zlcmid",
                          r.a.createElement("br", null),
                          "Cloudflare\uff1a__ cfuid",
                          r.a.createElement("br", null),
                          "Please keep in mind that some browsers (i.e. chrome on mac) keep background processes running even if no tabs opened due to this session cookies may left set between sessions.",
                          r.a.createElement("br", null),
                          "There are also cookies set by third party scripts to their domains.",
                          r.a.createElement("br", null),
                          "4.How can I manage my cookies on our site?",
                          r.a.createElement("br", null),
                          "If you wish to stop accepting cookies, you can do so through the Privacy Settings option in your browser.",
                          r.a.createElement("br", null),
                          "5.Personal Data Protection Policy",
                          r.a.createElement("br", null),
                          "our site\u2019s mission is to keep your Data safe and for this matter we protect your data in various ways. We provide our customers with high security standards, such as encryption of data in motion over public networks, encryption of data in database, auditing standards, Distributed Denial of Service mitigations, and a Live Chat available on-site.",
                          r.a.createElement("br", null),
                          "6.Server Protection Policy",
                          r.a.createElement("br", null),
                          "All servers have full encryption;",
                          r.a.createElement("br", null),
                          "All backups have encryption;",
                          r.a.createElement("br", null),
                          "Firewalls, VPN Access;",
                          r.a.createElement("br", null),
                          "Access to servers allowed only over VPN;",
                          r.a.createElement("br", null),
                          "All http/s services work over Cloudflare;",
                          r.a.createElement("br", null),
                          "Connections to nodes over VPN;",
                          r.a.createElement("br", null),
                          "SSH port forwarding tunnels;",
                          r.a.createElement("br", null),
                          "Services allowed only over VPN;",
                          r.a.createElement("br", null),
                          "Server have firewall and allowed only SSH port;",
                          r.a.createElement("br", null),
                          "Alerts on critical services.",
                          r.a.createElement("br", null),
                          "Data Breach Notification",
                          r.a.createElement("br", null),
                          "When our site will be made aware of personal data breaches we will notify relevant users in accordance with GDPR timeframes.",
                          r.a.createElement("br", null),
                          "7.Data International Transfer",
                          r.a.createElement("br", null),
                          "We only disclose personal data to third parties where it is necessary to provide the high-quality service or in order to respond lawful requests from authorities.",
                          r.a.createElement("br", null),
                          "We share the following data to third party systems:",
                          r.a.createElement("br", null),
                          "Zendesk Inc. \u2013 username and e-mail information is transferred if user sends a message to live-chat or sends an e-mail to support mailbox."
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        St = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).showUserAgg = function (e) {
                e.preventDefault(), n.setState({ show: !0, effect: "pulse" });
              }),
              (n.closeAgg = function () {
                n.setState({ show: !1, effect: "zoomOut" });
              }),
              (n.state = { show: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  P.d.on("show_agreement", function () {
                    e.setState({ show: !0, effect: "pulse" });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      b.b,
                      {
                        className: "nav-link-x",
                        to: "#",
                        onClick: this.showUserAgg,
                      },
                      r.a.createElement(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                        },
                        r.a.createElement("path", {
                          d: "M428 269c-21.5 0-40.6 13.1-48.4 33h-41.2L307 221.3c-2.7-8.2-10.3-13.7-19-13.7h-.4c-8.8.2-16.4 6-18.8 14.5l-33.6 135.4-55.5-291.8C178 55.6 169.6 48 160 48c-9.5 0-16.9 6.2-19.4 16.2L90.3 302H32v40h74c9.2 0 17.2-6.2 19.4-15.2l30.7-160.6 54.1 282.1c1.5 8.8 8.9 15.1 18.6 15.7h1.2c9.3 0 16.9-5.3 19.2-13.5l40.2-162.9 15.5 40.7c2.7 8.2 10.3 13.7 19 13.7h56.4c8.3 19 27.1 31 47.6 31 13.9 0 26.9-5.6 36.8-15.8 9.8-10.1 15.2-23.3 15.2-37.2.1-28.6-22.7-51-51.9-51z",
                        })
                      ),
                      r.a.createElement(
                        "span",
                        { className: "cpt menu-name" },
                        "User Agreement"
                      )
                    ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "lg",
                        centered: !0,
                        backdrop: "static",
                        show: this.state.show,
                        onHide: this.closeAgg,
                        "aria-labelledby": "general-lg-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        { className: "font-light" },
                        "User Agreement",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.closeAgg,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "modal-reader" },
                        r.a.createElement(
                          "p",
                          { className: "text-white font-light font-14" },
                          "1. General",
                          r.a.createElement("br", null),
                          "1.1. These User Agreement apply to the usage of games accessible through www.pesatimes.co.ke.",
                          r.a.createElement("br", null),
                          "1.2. These User Agreement come into force as soon as you complete the registration process, which includes checking the box accepting these User Agreement and successfully creating an account. By using any part of the Website following account creation, you agree to these User Agreement.",
                          r.a.createElement("br", null),
                          "1.3. You must read these User Agreement carefully in their entirety before creating an account. If you do not agree with any provision of these User Agreement, you must not create an account or continue to use the Website.",
                          r.a.createElement("br", null),
                          "1.4. We are entitled to make amendments to these User Agreement at any time and without advanced notice. If we make such amendments, we may take appropriate steps to bring such changes to your attention (such as by email or placing a notice on a prominent position on the Website, together with the amended User Agreement) but it shall be your sole responsibility to check for any amendments, updates and/or modifications. Your continued use of our site services and Website after any such amendment to the User Agreement will be deemed as your acceptance and agreement to be bound by such amendments, updates and/or modifications.",
                          r.a.createElement("br", null),
                          "1.5. These User Agreement may be published in several languages for informational purposes and ease of access by players. The English version is the only legal basis of the relationship between you and us and in the case of any discrepancy with respect to a translation of any kind, the English version of these User Agreement shall prevail.",
                          r.a.createElement("br", null),
                          "2.2. Binding Declarations",
                          r.a.createElement("br", null),
                          "2.1. By agreeing to be bound by these User Agreement, you also agree to be bound by the our site Rules and Privacy Policy that are hereby incorporated by reference into these User Agreement. In the event of any inconsistency, these User Agreement will prevail. You hereby represent and warrant that:",
                          r.a.createElement("br", null),
                          "2.2. You are over (a) 18 or (b) such other legal age or age of majority as determined by any laws which are applicable to you, whichever age is greater;",
                          r.a.createElement("br", null),
                          "2.3. You have full capacity to enter into a legally binding agreement with us and you are not restricted by any form of limited legal capacity;",
                          r.a.createElement("br", null),
                          "2.4. All information that you provide to us during the term of validity of this agreement is true, complete, correct, and that you shall immediately notify us of any change of such information;",
                          r.a.createElement("br", null),
                          "2.5. You are solely responsible for reporting and accounting for any taxes applicable to you under relevant laws for any winnings that you receive from us;",
                          r.a.createElement("br", null),
                          "2.6. You understand that by using our services you take the risk of losing money deposited into your Member Account and accept that you are fully and solely responsible for any such loss;",
                          r.a.createElement("br", null),
                          "2.7. You are permitted in the jurisdiction in which you are located to use online casino services;",
                          r.a.createElement("br", null),
                          "2.8. In relation to deposits and Withdraws of funds into and from your Member Account, you shall only use Ethereum that are valid and lawfully belong to you;",
                          r.a.createElement("br", null),
                          "2.9. You understand that the value of Ethereum can change dramatically depending on the market value;",
                          r.a.createElement("br", null),
                          "2.10. The computer software, the computer graphics, the Websites and the user interface that we make available to you is owned by our site or its associates and is protected by copyright laws. You may only use the software for your own personal, recreational uses in accordance with all rules, User Agreement we have established and in accordance with all applicable laws, rules and regulations;",
                          r.a.createElement("br", null),
                          "2.11. You understand that Ethereum is not considered a legal currency or tender and as such on the Website they are treated as virtual funds with no intrinsic value.",
                          r.a.createElement("br", null),
                          "2.12. You affirm that you are not an officer, director, employee, consultant or agent of our site or working for any company related to our site, or a relative or spouse of any of the foregoing;",
                          r.a.createElement("br", null),
                          "2.13. You are not diagnosed or classified as a compulsive or problem gambler. We are not accountable if such problem gambling arises whilst using our services, but will endeavour to inform of relevant assistance available. We reserve the right to implement cool off periods if we believe such actions will be of benefit.",
                          r.a.createElement("br", null),
                          "2.14. You accept and acknowledge that we reserve the right to detect and prevent the use of prohibited techniques, including but not limited to fraudulent transaction detection, automated registration and signup, gameplay and screen capture techniques. These steps may include, but are not limited to, examination of Players device properties, detection of geo-location and IP masking, transactions and blockchain analysis;",
                          r.a.createElement("br", null),
                          "2.15. You accept our right to terminate and/or change any games or events being offered on the Website, and to refuse and/or limit bets.",
                          r.a.createElement("br", null),
                          "2.16. You accept that we have the right to ban/block multiple accounts and freely control the assets in such accounts.",
                          r.a.createElement("br", null),
                          "3. RESTRICTED TERRITORIES 3.1. Blacklisted Territories: China,Netherlands, Dutch Caribbean Islands, Curacao, France, United States and/or any other restricted by law country or state. Note that it is strictly forbidden to play on our site games in blacklisted countries mentioned above.your personal data for the purpose of executing their duties and providing you with the best possible assistance and service. You hereby consent to such disclosures.",
                          r.a.createElement("br", null),
                          "4. General Betting Rules",
                          r.a.createElement("br", null),
                          "4.1. A bet can only be placed by a registered account holder.",
                          r.a.createElement("br", null),
                          "4.2. A bet can only be placed over the internet.",
                          r.a.createElement("br", null),
                          "4.3. You can only place a bet if you have sufficient Ethereum in your account with our site.",
                          r.a.createElement("br", null),
                          "4.4. The bet, once concluded, will be governed by the version of the User Agreement valid and available on the Website at the time of the bet being accepted.",
                          r.a.createElement("br", null),
                          "4.5. Any payout of a winning bet is credited to your account, consisting of the stake multiplied by the odds at which the bet was placed.",
                          r.a.createElement("br", null),
                          "4.6. our site reserves the right to adjust a bet payout credited to a our site account if it is determined by our site in its sole discretion that such a payout has been credited due to an error.",
                          r.a.createElement("br", null),
                          "4.7. A bet, which has been placed and accepted, cannot be amended, withdrawn or cancelled by you.",
                          r.a.createElement("br", null),
                          "4.8. The list of all the bets, their status and details are available to you on the Website.",
                          r.a.createElement("br", null),
                          "4.9. When you place a bet you acknowledge that you have read and understood in full all of these User Agreement regarding the bet as stated on the Website.",
                          r.a.createElement("br", null),
                          "4.10. our site manages your account, calculates the available funds, the pending funds, the betting funds as well as the amount of winnings. Unless proven otherwise, these amounts are considered as final and are deemed to be accurate.",
                          r.a.createElement("br", null),
                          "4.11. You are fully responsible for the bets placed.",
                          r.a.createElement("br", null),
                          "4.12. Winnings will be paid into your account after the final result is confirmed.",
                          r.a.createElement("br", null),
                          "5. Bonuses and Promotions",
                          r.a.createElement("br", null),
                          "5.1. our site reserves the right to cancel any promotion, bonus or bonus program (including, but not limited to top-up rewards, invite friends to reward bonuses and loyalty programs) with immediate effect if we believe the bonus has been set up incorrectly or is being abused, and if said bonus has been paid out, we reserve the right to decline any Withdraw request and to deduct such amount from your account. Whether or not a bonus is deemed to be set up incorrectly or abused shall be determined solely by our site.",
                          r.a.createElement("br", null),
                          "5.2. If you use a Deposit Bonus, no Withdraw of your original deposit will be accepted before you have reached the requirements stipulated under the User Agreement of the Deposit Bonus.",
                          r.a.createElement("br", null),
                          "5.3. Where any term of the offer or promotion is breached or there is any evidence of a series of bets placed by a customer or group of customers, which due to a deposit bonus, enhanced payments, free bets, risk free bets or any other promotional offer results in guaranteed customer profits irrespective of the outcome, whether individually or as part of a group, our site reserves the right to reclaim the bonus element of such offers and in their absolute discretion either settle bets at the correct odds, void the free bet bonus and risk free bets or void any bet funded by the deposit bonus. In addition, our site reserves the right to levy an administration charge on the customer up to the value of the deposit bonus, free bet bonus, risk free bet or additional payment to cover administrative costs. We further reserve the right to ask any customer to provide sufficient documentation for us to be satisfied in our absolute discretion as to the customer's identity prior to us crediting any bonus, free bet, risk free bet or offer to their account.",
                          r.a.createElement("br", null),
                          "5.4. All our site offers are intended for recreational players and our site may in its sole discretion limit the eligibility of customers to participate in all or part of any promotion.",
                          r.a.createElement("br", null),
                          "5.5. our site reserves the right to amend, cancel, reclaim or refuse any promotion at its own discretion.",
                          r.a.createElement("br", null),
                          "5.6. Bonuses can only be received once per person/account, family, household, address, e-mail address, IP addresses and environments where computers are shared (university, fraternity, school, public library, workplace, etc.). The Operator reserves the right to close your account and confiscate any existing funds if evidence of abuse/fraud is found.",
                          r.a.createElement("br", null),
                          "5.7. You acknowledge and understand that separate User Agreement exist with respect to promotions, bonuses and special offers, and are in addition to these User Agreement. These User Agreement are set forth in the respective content page on this website, or have been made available to you personally, as the case may be. In the event of a conflict between the provisions of such promotions, bonuses and special offers, and the provisions of these User Agreement, the provisions of such promotions, bonuses and special offers will prevail.",
                          r.a.createElement("br", null),
                          "5.8. We may insist that you bet a certain amount of your own deposit before you can bet with any free/bonus funds we credit to your account.",
                          r.a.createElement("br", null),
                          "5.9. You accept that certain promotions may be subject to Withdraw restrictions and/or requirements which need to be met before funds credited under the promotion can be withdrawn. Such terms shall be duly published and made available as part of the promotion. If you opt to make a Withdraw before the applicable wagering requirements are fulfilled, we will deduct the whole bonus amount as well as any winnings connected with the use of the bonus amounts before approving any Withdraw.",
                          r.a.createElement("br", null),
                          "6. Live Chat",
                          r.a.createElement("br", null),
                          "6.1. As part of your use of the Website we may provide you with a live chat facility, which is moderated by us and subject to controls. We reserve the right to review the chat and to keep a record of all statements made on the facility. Your use of the chat facility should be for recreational and socialising purposes.",
                          r.a.createElement("br", null),
                          "6.2. We have the right to remove the chat room functionality or immediately terminate your Member Account and refund your account balance if you:",
                          r.a.createElement("br", null),
                          "(a) make any statements that are sexually explicit or grossly offensive, including expressions of bigotry, racism, hatred or profanity;",
                          r.a.createElement("br", null),
                          "(b) make statements that are abusive, defamatory or harassing or insulting;",
                          r.a.createElement("br", null),
                          "(c) use the chat facility to advertise, promote or otherwise relate to any other online entities;",
                          r.a.createElement("br", null),
                          "(d) make statements about our site, or any other Internet site(s) connected to the Website that are untrue and/or malicious and/or damaging to our site;",
                          r.a.createElement("br", null),
                          "(e) user the chat facility to collude, engage in unlawful conduct or encourage conduct we deem seriously inappropriate. Any suspicious chats will be reported to the competent authority.",
                          r.a.createElement("br", null),
                          "6.3. Live Chat is used as a form of communication between us and you and should not be copied or shared with any forums or third parties.",
                          r.a.createElement("br", null),
                          "7. Limitation of Liability",
                          r.a.createElement("br", null),
                          "7.1. You enter the Website and participate in the Games at your own risk. The Websites and the Games are provided without any warranty whatsoever, whether expressed or implied.",
                          r.a.createElement("br", null),
                          "7.2. Without prejudice to the generality of the preceding provision, we, our directors, employees, partners, service providers",
                          r.a.createElement("br", null),
                          "7.3. Do not warrant that the software, Games and the Websites are fit for their purpose;",
                          r.a.createElement("br", null),
                          "7.4. Do not warrant that the software, Games and the Websites are free from errors;",
                          r.a.createElement("br", null),
                          "7.5. Do not warrant that the software, Games and the Websites will be accessible without interruptions",
                          r.a.createElement("br", null),
                          "7.6. Shall not be liable for any loss, costs, expenses or damages, whether direct, indirect, special, consequential, incidental or otherwise, arising in relation to your use of the Websites or your participation in the Games.",
                          r.a.createElement("br", null),
                          "7.7. You understand and acknowledge that, if there is a malfunction in a Game or its interoperability, any bets made during such a malfunction shall be void. Funds obtained from a malfunctioning Game shall be considered void, as well as any subsequent game rounds with said funds, regardless of what Games are played using such funds.",
                          r.a.createElement("br", null),
                          "7.8. You hereby agree to fully indemnify and hold harmless us, our directors, employees, partners, and service providers for any cost, expense, loss, damages, claims and liabilities howsoever caused that may arise in relation to your use of the Website or participation in the Games.",
                          r.a.createElement("br", null),
                          "7.9. To the extent permitted by law, our maximum liability arising out of or in connection with your use of the Websites, regardless of the cause of actions (whether in contract, tort, breach of warranty or otherwise), will not exceed \u20ac100.",
                          r.a.createElement("br", null),
                          "8. Breaches, Penalties and Termination",
                          r.a.createElement("br", null),
                          "8.1. If you breach any provision of these User Agreement or we have a reasonable ground to suspect that you have breached them, we reserve the right to not open, to suspend, or to close your Member Account, or withhold payment of your winnings and apply such funds to any damages due by you.",
                          r.a.createElement("br", null)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        At = a(95),
        Mt = a.n(At);
      r.a.Component;
      function Tt(e, t) {
        if (64 !== e.length)
          return Object(P.y)(
            t("please_input_valid_game_hash"),
            "danger",
            "top-center"
          );
        var a = (function (e) {
          var t = Mt()(e).toString(),
            a = parseInt(t.slice(0, 13), 16),
            n = Math.pow(2, 52);
          return (Math.floor((98 * n) / (n - a)) / 100).toFixed(2);
        })(e);
        return {
          color: a > 1.99 ? "soft-success" : "soft-danger",
          crash: a,
          hash_dice: (function (e) {
            var t = Mt()(e).toString(),
              a = parseInt(t.slice(0, 13), 16),
              n = Math.pow(2, 52),
              r = Math.floor((98 * n) / (n - a));
            return (r = (r / 100).toFixed(2)), (r = (r *= 8880).toFixed(0));
          })(e),
          roulette: (function (e) {
            e = e.substring(0, 10);
            var t = parseInt(e, 16) % 100;
            1 <= t && t < 30
              ? "green"
              : 30 <= t && t < 530
              ? "red"
              : 530 <= t && t < 1e3 && "black";
            return t;
          })(e),
          heads: (function (e) {
            for (
              var t, a = parseInt(e.substr(0, 10), 16), n = 2, r = 0;
              r < 10;
              r++
            )
              (t = a.toString()[r]),
                1 === parseInt(t) ? (n = 1) : 2 === parseInt(t) && (n = 2);
            return n;
          })(e),
          mine: (function (e) {
            for (var t = [], a = 0; a < 3; a++) {
              var n = parseInt(parseInt(e.substr(a, 5), 16) / 1e4);
              (n /= 4),
                (n = parseInt(n)),
                (n = Math.max(n, 1)),
                -1 === t.indexOf(n) ? t.push(n) : t.push(n + a);
            }
            return t;
          })(e),
        };
      }
      var Pt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).active = function (e) {
                n.setState({
                  activeHome: !1,
                  activeLive: !1,
                  activeAff: !1,
                  activeSupport: !1,
                  activeGames: !1,
                  leaderboard: !1,
                }),
                  n.setState(Object(G.a)({}, e, !0));
              }),
              (n.state = { show: !1, home: !1, activeHome: !0 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  new ee.a("#lss", {
                    wheelSpeed: 1,
                    suppressScrollX: !0,
                    wheelPropagation: !0,
                    minScrollbarLength: 2,
                  }).update();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.t,
                    n = t.type,
                    s = (this.state.home, this.state),
                    i =
                      (s.activeSupport,
                      s.activeAff,
                      s.activeLive,
                      s.activeHome),
                    o = (s.activeGames, s.leaderboard);
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    "min" === n && r.a.createElement(f.a, null),
                    r.a.createElement(
                      "div",
                      {
                        id: "lss",
                        className: "menu-body",
                        onMouseLeave: function () {
                          return e.setState({ show: !1 });
                        },
                      },
                      r.a.createElement(
                        "div",
                        { className: "menu-pane" },
                        r.a.createElement(
                          "ul",
                          { className: "nav" },
                          r.a.createElement(
                            "li",
                            {
                              className: i ? "active nav-item" : "nav-item",
                              "data-tip": "min" === n ? "Crash" : "",
                            },
                            r.a.createElement(
                              b.b,
                              {
                                onClick: function () {
                                  return e.active("activeHome");
                                },
                                className: "nav-link-x",
                                to: "/",
                              },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "avatar-box thumb-xs align-self-center mr-2",
                                },
                                r.a.createElement(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                  },
                                  r.a.createElement("path", {
                                    d: "M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z",
                                  }),
                                  r.a.createElement("path", {
                                    d: "M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z",
                                  })
                                )
                              ),
                              r.a.createElement(
                                "span",
                                { className: "menu-name" },
                                "Game"
                              )
                            )
                          ),
                          r.a.createElement(
                            "li",
                            {
                              className: o ? "active nav-item" : "nav-item",
                              "data-tip": "min" === n ? "Leaderboard" : "",
                            },
                            r.a.createElement(
                              b.b,
                              {
                                onClick: function () {
                                  return e.active("leaderboard");
                                },
                                className: "nav-link-x",
                                to: "/leaderboard",
                              },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "avatar-box thumb-xs align-self-center mr-2",
                                },
                                r.a.createElement(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                  },
                                  r.a.createElement("path", {
                                    d: "M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z",
                                  })
                                )
                              ),
                              r.a.createElement(
                                "span",
                                { className: "menu-name" },
                                "Leaderboard"
                              )
                            )
                          ),
                          r.a.createElement(
                            "li",
                            {
                              className: "nav-item",
                              "data-tip":
                                "min" === n ? a("privacy_policy") : "",
                            },
                            r.a.createElement(Ct, { t: a })
                          ),
                          r.a.createElement(
                            "li",
                            {
                              className: "nav-item",
                              "data-tip":
                                "min" === n ? a("user_agreement") : "",
                            },
                            r.a.createElement(St, { t: a })
                          ),
                          "min" !== n &&
                            r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement("hr", {
                                className: "side-border mx-0",
                              }),
                              r.a.createElement(
                                "li",
                                { className: "nav-item" },
                                r.a.createElement(jt, { t: a })
                              )
                            )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Dt =
          (r.a.Component,
          r.a.Component,
          function (e, t) {
            return function (a) {
              a({ type: "GET_WALLET", payload: { show: e, uid: t } });
            };
          }),
        It = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                show: !0,
                uid: A.get("uid") ? A.get("uid") : null,
              }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  P.d.on("other_coins", function () {
                    e.setState({ show: !1, effect: "zoomOut" }),
                      e.props.setWallet(!1);
                  });
                },
              },
              {
                key: "componentWillMount",
                value: function () {
                  this.props.uid === this.state.uid &&
                    Object(P.y)(
                      "Please First Make a Deposit",
                      "info",
                      "top-right"
                    );
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({ show: !1, effect: "zoomOut" }),
                    this.props.setWallet(!1);
                },
              },
              {
                key: "handleShow",
                value: function () {
                  if (null === T.a.getKey("token"))
                    return ke.a.fire({
                      title: "Error",
                      text: "Please Login to use this Option.",
                      type: "error",
                    });
                  this.setState({ show: !0, effect: "pulse" });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        centered: !0,
                        show: this.state.show,
                        backdrop: "static",
                        onHide: this.handleClose,
                        "aria-labelledby": "wallet-md-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        null,
                        "Wallet",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "p-0 wallet-modal", closeButton: !0 },
                        r.a.createElement(ue, null)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Rt = Object(d.b)(null, { setWallet: Dt })(It);
      r.a.Component, r.a.Component;
      function Wt() {
        var e = this;
        (e.ws = q.a),
          (e.game = "crash"),
          (e.trigger = P.d),
          (e.init = !1),
          (e.token = null),
          (e.formData = []),
          (e.amount = null),
          (e.payout = null),
          (e.targetUser = null),
          (e.gameStatus = null),
          (e.coin = "btc"),
          (e.playerStatus = null),
          (e.history = []),
          (e.isPlaying = !1),
          (e.isHolding = !1),
          (e.time = null),
          (e.md5 = null),
          (e.amount = null),
          (e.force = null),
          e.ws.on(X.a.STATUS_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.gameStatus = t.status),
              e.history.push(t.crashes),
              (e.time = t.time),
              (t.md5 = void 0 !== t.md5 ? t.md5 : null),
              (t.force = t.force),
              (t.amount = t.amount),
              e.trigger.emit("game_status", t);
          }),
          e.ws.on(X.a.HISTORY_CRASH, function (t) {
            (t = Object(P.k)(t)), e.trigger.emit(X.a.HISTORY_CRASH, t);
          }),
          e.ws.on(X.a.PLAYERS_CRASH, function (t) {
            (t = Object(P.k)(t)), e.trigger.emit("game_players", t);
          }),
          e.ws.on(X.a.PLAY_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.isPlaying = !0),
              e.trigger.emit("play_crash", t);
          }),
          e.ws.on(X.a.FINISH_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.isPlaying = !1),
              e.trigger.emit("finish_crash", t);
          }),
          e.ws.on(X.a.BUSTED_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.isPlaying = !1),
              (e.gameStatus = "busted"),
              endPlay(),
              e.history.unshift(t),
              (e.time = t.time),
              (t.md5 = void 0 !== t.md5 ? t.md5 : null),
              (t.force = t.force),
              (t.amount = t.amount),
              e.trigger.emit("busted_crash", t),
              e.trigger.emit("busted_crash_history", t);
          }),
          e.ws.on(X.a.STARTED_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.gameStatus = "started"),
              (e.time = t.time),
              (t.md5 = void 0 !== t.md5 ? t.md5 : null),
              (t.force = t.force),
              (t.amount = t.amount);
            let xp = localStorage.getItem("game_x_stage");
            console.log(xp, "init play 1");
            if (xp == "on") {
              initPlay();
              console.log(xp, "init play 2");
            }
            e.trigger.emit("started_crash", t);
          }),
          e.ws.on(X.a.WAITING_CRASH, function (t) {
            (t = Object(P.k)(t)),
              (e.gameStatus = "waiting"),
              (e.time = t.time),
              (t.md5 = void 0 !== t.md5 ? t.md5 : null),
              (t.force = t.force),
              (t.amount = t.amount),
              e.trigger.emit("waiting_crash", t);
          }),
          e.ws.on(X.a.ERROR_CRASH, function (t) {
            (t = Object(P.k)(t)), e.trigger.emit("error_crash", t);
          });
      }
      (Wt.prototype.play = function () {
        this.amount < 1 && (this.amount = Object(P.o)(10)),
          console.log(this.odd + "payout" + this.payout),
          this.ws.emit(
            X.a.PLAY_CRASH,
            Object(P.m)({
              token: this.token,
              amount: this.amount,
              payout: this.payout,
              odd: this.odd,
              coin: "kes",
            })
          );
      }),
        (Wt.prototype.finish = function (e) {
          e = localStorage.getItem("escape_x") || "2.1";
          this.ws.emit(
            X.a.FINISH_CRASH,
            Object(P.m)({ token: this.token, token2: parseFloat(e).toFixed(2) })
          ),
            console.log(Object(P.x)(25) + parseFloat(e).toFixed(2));
        }),
        (Wt.prototype.getStatus = function () {
          this.ws.emit(X.a.STATUS_CRASH);
        }),
        (Wt.prototype.getPlayers = function () {
          this.ws.emit(X.a.PLAYERS_CRASH);
        }),
        (Wt.prototype.getHistory = function () {
          this.ws.emit(X.a.HISTORY_CRASH);
        });
      var Ft = new Wt(),
        Bt = "Titillium Web",
        Lt = null,
        Ut = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.initCanvas = function (e) {
                n._isMounted && n.state.gameCanvas.init(e, n.state.canvasWidth);
              }),
              (n.state = {
                engine: Ft,
                gameCanvas: new Ht(),
                canvasWidth: 950,
                canvasHeight: 470,
                connecting: !0,
                hash: null,
                status: "",
                timer: "",
                rate: "",
              }),
              (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this._isMounted = !0;
                  var t = this.state.engine;
                  this.handleResize(),
                    this.setState({ width: window.innerWidth }),
                    window.addEventListener("resize", this.handleResize);
                  var a = this.state.canvasHeight;
                  Object(P.s)() && (a = 400),
                    Object(P.A)(500).then(function () {
                      e.initCanvas(a);
                    }),
                    t.trigger.on("finish_crash", function (t) {
                      return e.finish(t);
                    }),
                    t.trigger.on("waiting_crash", function (t) {
                      return e.waiting(t);
                    }),
                    t.trigger.on("started_crash", function (t) {
                      return e.started(t);
                    }),
                    t.trigger.on("busted_crash", function (t) {
                      return e.busted(t);
                    }),
                    t.trigger.on("game_status", function (t) {
                      return e.status(t);
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.profit &&
                    this.state.gameCanvas.setAddons(e.profit, e.im_in_game);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.setState({ width: window.innerWidth });
                  var e = 70;
                  Object(P.s)() && (e = 100), (Lt = e), T.a.setKey("cFont", e);
                },
              },
              {
                key: "finish",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.name;
                    this.state.gameCanvas.setFinisher(t);
                  }
                },
              },
              {
                key: "waiting",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time;
                    this.setState({ status: "waiting" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setWaiting(t);
                  }
                },
              },
              {
                key: "started",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time,
                      a = e.md5;
                    this.setState({ status: "started" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setPlaying(t, a);
                  }
                },
              },
              {
                key: "busted",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.force,
                      r = (t / 100).toFixed(2);
                    this.state.gameCanvas.setAddons(
                      this.props.profit,
                      this.props.im_in_game
                    ),
                      this.state.gameCanvas.setBusted(r, a, n),
                      this.setState({
                        status: "busted",
                        timer: a,
                        rate: r,
                        force: n,
                      });
                  }
                },
              },
              {
                key: "status",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.md5,
                      r = e.status;
                    switch (
                      (this.setState({ status: r, timer: a, connecting: !1 }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      r)
                    ) {
                      case "started":
                        this.state.gameCanvas.setPlaying(a, n);
                        break;
                      case "waiting":
                        this.state.gameCanvas.setWaiting(a);
                        break;
                      case "busted":
                        var s = (t / 100).toFixed(2);
                        this.state.gameCanvas.setBusted(s, a);
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { display: "unset" };
                  return (
                    this.state.connecting && (e = { display: "none" }),
                    r.a.createElement(
                      _.a,
                      { className: "no-shadow mb-0 p-1 game-wrapper-card" },
                      r.a.createElement(
                        _.a.Body,
                        {
                          className:
                            "bg-body game-aria text-center no-shadow pt-2 static-snow p-0",
                          id: "canvasPart",
                        },
                        r.a.createElement(
                          "div",
                          { className: "game-holder" },
                          this.state.connecting &&
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "h3",
                                {
                                  className: "font-35 my-5 d-block mb-5",
                                  style: { color: "#C67512" },
                                },
                                "CONNECTING"
                              ),
                              r.a.createElement(
                                "b",
                                { className: "mt-1 d-block mt-2 mb-5" },
                                r.a.createElement("div", {
                                  className: "spinner-grow my-5",
                                  style: { color: "#C67512" },
                                  role: "status",
                                })
                              )
                            ),
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              _.a,
                              { className: "mb-1 bg-transparent" },
                              r.a.createElement(
                                _.a.Body,
                                { className: "p-0" },
                                r.a.createElement("canvas", {
                                  id: "graph",
                                  style: e,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function Kt(e) {
        return null == e ? e : (0.5 + e) | 0;
      }
      function Ht() {
        var e = this,
          t = 0;
        (e.nextround_text = "Next round in {time}s"),
          (e.busted_title = "CRASHED @"),
          (e.edge_text = null),
          (e.winner_text = null),
          (e.im_in_game = null),
          (e.maximum_text = ""),
          (e.current_hash = ""),
          (e.game_status = 0),
          (e.start_time = 0),
          (e.started_time = 0),
          (e.time_passed = 0),
          (e.current_amount = 0),
          (e.busted_amount = 0),
          (e.cashin_amount = 0),
          (e.warning_text = null),
          (e.busted_text = null),
          (e.time_part = null),
          (e.amount_part = null),
          (e.graph_part = null),
          (e.canvas_size = null),
          (e.canvasWidth = !1),
          (e.canvasHeight = !1),
          (e.cashOuter = []),
          (e.coors = null),
          (e.setFinisher = function (t) {
            e.cashOuter.push(t);
          }),
          (e.setWaiting = function (t) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 1),
              (e.start_time = new Date().getTime() + t),
              (e.time_passed = 0),
              (e.started_time = 0),
              (e.cashOuter = []),
              (e.current_hash = "");
          }),
          (e.setAddons = function (t, a) {
            (e.winner_text = t), (e.im_in_game = a);
          }),
          (e.setPlaying = function (t, a) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 2),
              (e.started_time = new Date().getTime() - t),
              (e.time_passed = t),
              (e.current_hash = "");
          }),
          (e.setBusted = function (t, a, n) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 3),
              (e.busted_amount = t),
              (e.started_time = new Date().getTime() - a),
              (e.time_passed = a),
              (e.current_hash = "");
          }),
          (e.init = function (t, a) {
            (e.canvas = Object(P.p)("#graph")),
              (e.context = e.canvas.getContext("2d")),
              (e.canvas_size = t),
              e.resize(t, a),
              (e.rtimer = !0),
              window.requestAnimationFrame(e.render);
          }),
          (e.resize = function (t, a) {
            null != t && (e.canvas_size = t),
              (e.canvas.width = 1 * a),
              (e.canvas.height = 1 * t),
              (e.canvas.style.width = a + "px"),
              (e.canvas.style.maxWidth = "100%"),
              (e.canvas.style.maxHeight = "100%"),
              (e.canvasWidth = a),
              (e.canvasHeight = t),
              (e.coors = null);
          }),
          (e.render = function () {
            if (!e.rtimer) return !1;
            e.context.clearRect(0, 0, e.canvasWidth, e.canvasHeight),
              e.draw(e.context),
              window.requestAnimationFrame(e.render);
          }),
          (e.draw = function (t) {
            if (null == e.coors) {
              e.coors = { width: e.canvasWidth, height: e.canvasHeight };
              var a = e.canvasHeight - 35;
              e.coors.origin = { x: Kt(0.12 * a), y: Kt(a - 0.07) };
              var n = Kt(0.09 * a),
                r = Kt(0.08 * a),
                s = Kt(a - 0.07);
              (e.coors.info = {
                x: Kt((e.coors.width + r) / 2),
                y: Kt(0.48 * e.coors.height),
                font: n,
                by: Kt(0.36 * e.coors.height),
                bh: Kt(1.7 * n),
              }),
                (e.coors.busted = {
                  x: Kt((e.coors.width + r) / 2),
                  y1: Kt(0.51 * e.coors.height),
                  y2: Kt(0.65 * e.coors.height),
                  font: Kt(0.15 * a),
                });
              var i = Kt(0.05 * a),
                o = Kt(1.6 * r),
                l = Kt(0.6 * r - i),
                c = Kt(l + 1.5 * i),
                u = Kt(c + 1.5 * i),
                m = Kt(u + 1.5 * i);
              e.coors.profit = { x: o, y1: l, y2: c, y3: u, y4: m, font: i };
              var d = Kt(e.canvasWidth + 60 + r),
                h = Kt(s),
                p = Kt(0.055 * a),
                f = Kt(r - -0.5 * p),
                b = Kt(s + 1 * p),
                g = Kt(0.3 * p),
                y = Kt(s - 0.2 * p),
                v = Kt(r + 1.1 * p);
              e.coors.axis = {
                x: d,
                y: h,
                font: p,
                tx: f,
                th: g,
                ty: b,
                lx: v,
                ly: y,
              };
              var E = Kt(0.2 * a),
                _ = Kt((e.coors.width + r) / 2),
                w = Kt(0.56 * e.coors.height);
              e.coors.amount = { x: _, y: w, font: E };
            }
            e.drawAxis(t),
              e.drawMaximum(t),
              e.drawAxisLabels(t),
              1 === e.game_status
                ? e.drawWaiting(t)
                : 2 === e.game_status
                ? (e.drawGraph(t), e.drawAmount(t))
                : 3 === e.game_status && e.drawBusted(t);
          }),
          (e.drawAxis = function (t) {
            (t.lineWidth = 1),
              (t.strokeStyle = "#000"),
              t.beginPath(),
              t.moveTo(e.coors.origin.x, 0),
              t.lineTo(e.coors.origin.x, e.coors.origin.y),
              t.lineTo(e.coors.width, e.coors.origin.y),
              t.stroke(),
              t.closePath();
          }),
          (e.drawMaximum = function (t) {
            (t.fillStyle = "#b0b3c1"),
              (t.textAlign = "left"),
              null != e.maximum_text &&
                ((t.font = e.coors.profit.font + "px " + Bt + " , " + Bt),
                t.fillText(
                  e.maximum_text,
                  e.coors.profit.x,
                  e.coors.profit.y1
                )),
              null != e.winner_text &&
                ((t.fillStyle = "#69ca5e"),
                (t.font = e.coors.profit.font + "px " + Bt + " , " + Bt),
                t.fillText(e.winner_text, e.coors.profit.x, e.coors.profit.y2)),
              null != e.current_hash &&
                ((t.fillStyle = "#FFF"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(Bt, '"')),
                t.fillText(
                  e.current_hash,
                  e.coors.profit.x,
                  e.coors.profit.y3
                )),
              null != e.edge_text &&
                ((t.fillStyle = "#000"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(Bt, '"')),
                t.fillText(e.edge_text, e.coors.profit.x, e.coors.profit.y4));
          }),
          (e.drawAxisLabels = function (a) {
            2 === e.game_status &&
              null === e.warning_text &&
              (e.time_passed = new Date().getTime() - e.started_time),
              (a.strokeStyle = "#000"),
              (a.fillStyle = "#000"),
              (a.textAlign = "center"),
              (a.font = "small-caps 16px " + Bt);
            var n = e.time_passed < 1e4 ? 10 : Kt(e.time_passed / 1e3);
            if (
              (null == e.time_part && (e.time_part = 2),
              n > 20 && n > 7 * e.time_part)
            )
              for (
                2 === e.time_part && (e.time_part = 10);
                !(n < 3 * e.time_part);

              )
                e.time_part += 10;
            for (a.beginPath(), t = 0; t < Math.ceil(n / e.time_part); t++) {
              var r = e.time_part * t * 1e3,
                s =
                  e.coors.origin.x +
                  (e.coors.axis.x * r) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed);
              a.fillText(e.time_part * t, s, e.coors.axis.ty),
                t > 0 &&
                  (a.moveTo(s, e.coors.origin.y), a.lineTo(s, e.coors.axis.ly));
            }
            a.stroke(),
              a.closePath(),
              (a.textAlign = "right"),
              (e.current_amount = Math.pow(
                Math.E,
                6e-5 * e.time_passed
              ).toFixed(2));
            var i = Kt(100 * e.current_amount) - 100,
              o = i < 100 ? 100 : i;
            if (
              (null == e.amount_part && (e.amount_part = 20),
              o > 150 && o > 6 * e.amount_part)
            )
              for (e.amount_part = 100; !(o <= 6 * e.amount_part); )
                e.amount_part *= 2;
            for (a.beginPath(), t = 0; t < Math.ceil(o / e.amount_part); t++)
              if (0 !== t) {
                var l =
                    e.coors.origin.y -
                    (e.coors.axis.y * e.amount_part * t) / (i < 100 ? 100 : i),
                  c = (e.amount_part * t + 100) / 100 + "x";
                a.fillText(c, e.coors.axis.tx, l + e.coors.axis.th),
                  a.moveTo(e.coors.origin.x, l),
                  a.lineTo(e.coors.axis.lx, l);
              }
            a.stroke(), a.closePath();
          }),
          (e.drawGraph = function (a) {
            var n = a.createLinearGradient(0, 0, e.canvasWidth, 0);
            for (
              n.addColorStop("0", "#C67512"),
                n.addColorStop("0.8", "rgba(248,133,49,1)"),
                n.addColorStop("1.0", "#2CB34A"),
                a.strokeStyle = e.im_in_game ? "#2CB34A" : "000",
                a.lineWidth = 4,
                a.beginPath(),
                a.moveTo(e.coors.origin.x, e.coors.origin.y),
                null == e.graph_part && (e.graph_part = 100),
                e.time_passed > 100 * e.graph_part && (e.graph_part *= 2),
                t = 0;
              t < e.time_passed;
              t += e.graph_part
            ) {
              P.e.current_amount = e.current_amount;
              var r =
                  e.coors.origin.x +
                  (e.coors.axis.x * t) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed),
                s =
                  e.coors.origin.y -
                  (e.coors.axis.y *
                    (Kt(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                    (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
              a.lineTo(r, s);
            }
            var i =
                e.coors.origin.x +
                (e.coors.axis.x * t) /
                  (e.time_passed < 1e4 ? 1e4 : e.time_passed),
              o =
                e.coors.origin.y -
                (e.coors.axis.y *
                  (Kt(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                  (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
            i > 950 && (i = 950),
              o < 30 && (o = 30),
              0 !== e.cashOuter.length &&
                e.cashOuter.forEach(function (t, n) {
                  (a.fillStyle = "#FFF"), a.fillText(t, i, o + 20 * n);
                  var r = setTimeout(function () {
                    e.cashOuter.splice(n, 1), clearTimeout(r);
                  }, 700);
                }),
              a.stroke(),
              a.closePath();
          }),
          (e.drawAmount = function (t) {
            (e.canvas.style.fontWeight = 700),
              (e.canvas.style.textShadow = 0),
              (t.fontWeight = 700);
            var a = Math.pow(Math.E, 6e-5 * e.time_passed).toFixed(2);
            (t.fillStyle = e.im_in_game ? "#2CB34A" : "#000"),
              (t.textAlign = "center");
            var n = null !== Lt ? Lt : T.a.getKey("cFont");
            (t.font = "normal normal 700 ".concat(n, 'px/1 "').concat(Bt, '"')),
              t.fillText(a + "x", e.coors.amount.x, e.coors.amount.y);
          }),
          (e.drawBusted = function (t) {
            null == e.busted_text &&
              (e.busted_text = {
                line1: e.busted_title + " " + e.busted_amount + "x",
              }),
              (t.fillStyle = "#EE373F"),
              (t.textAlign = "center");
            var a = e.coors.busted.font;
            (t.font = "normal normal 700 ".concat(a, 'px/1 "').concat(Bt, '"')),
              t.fillText(
                e.busted_text.line1,
                e.coors.busted.x,
                e.coors.busted.y1
              );
          }),
          (e.drawWaiting = function (t) {
            var a = (e.start_time - new Date().getTime()) / 1e3;
            (a = a <= 0 ? "0.0" : a.toFixed(1)),
              (t.fillStyle = "#339AF0"),
              (t.textAlign = "center");
            var n = e.coors.info.font;
            (t.font = "normal normal 700 ".concat(n, 'px/1 "').concat(Bt, '"')),
              t.fillText(
                e.nextround_text.replace("{time}", a),
                e.coors.info.x,
                e.coors.info.y
              );
          });
      }
      var zt = Object(d.b)(function (e) {
          return { profit: e.items.profit, im_in_game: e.items.im_in_game };
        }, {})(Ut),
        Gt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).getDetail = function (e, t) {
                e.preventDefault(),
                  void 0 !== n.props.clicked && n.props.clicked(),
                  P.d.emit("force_modal_game"),
                  q.a.emit(X.a.GAME_DETAILS, Object(P.m)({ id: t }));
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.game_id,
                    n = t.title,
                    s = t.font;
                  return (
                    (s = s || 14),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        b.b,
                        {
                          to: "/game/" + a,
                          onClick: function (t) {
                            return e.getDetail(t, a);
                          },
                          className: "text-white font-" + s,
                        },
                        n,
                        "x"
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Yt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                games: [],
                name: T.a.getKey("name"),
                token: T.a.getKey("token"),
                game: n.props.game,
                gameRow: [],
                engine: Ft,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.state.engine;
                  t.trigger.on("busted_crash", function (t) {
                    return e.busted(t);
                  }),
                    t.trigger.on("game_status", function (t) {
                      return e.gameSync(t);
                    });
                },
              },
              {
                key: "busted",
                value: function (e) {
                  var t = (e.amount / 100).toFixed(2),
                    a = t >= 1.9 ? "bet-success" : "bet-danger";
                  Object(P.s)(),
                    7 === this.state.gameRow.length &&
                      this.state.gameRow.shift();
                  var n = this.state.gameRow.concat([
                    r.a.createElement(
                      "li",
                      { className: a, key: e.game_id },
                      r.a.createElement(Gt, {
                        color: a,
                        title: t,
                        game_id: e.game_id,
                        font: 13,
                      })
                    ),
                  ]);
                  this.setState({ gameRow: n });
                },
              },
              {
                key: "gameSync",
                value: function (e) {
                  var t = this;
                  void 0 !== e.crashes &&
                    0 !== e.crashes.length &&
                    P.i.reverse(e.crashes).forEach(function (e, a) {
                      if (a < 10) {
                        var n = (e.amount / 100).toFixed(2),
                          s = n >= 1.9 ? "bet-success" : "bet-danger",
                          i = r.a.createElement(
                            "li",
                            { className: s, key: a },
                            r.a.createElement(Gt, {
                              key: a,
                              color: s,
                              title: n,
                              game_id: e.game_id,
                              font: 13,
                            })
                          );
                        t.setState(function (e) {
                          return {
                            gameRow: [i].concat(Object(o.a)(e.gameRow)),
                          };
                        });
                      }
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    Object(P.s)(),
                    this.state.gameRow.length >= 7 &&
                      (this.state.gameRow.length = 7),
                    r.a.createElement(
                      "div",
                      { className: "nav font-14 font-weight-bold mybets" },
                      r.a.createElement("ul", null, this.state.gameRow)
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        qt = "Titillium Web",
        Xt = null,
        Vt = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.initCanvas = function (e) {
                n._isMounted && n.state.gameCanvas.init(e, n.state.canvasWidth);
              }),
              (n.state = {
                engine: Ft,
                gameCanvas: new Jt(),
                canvasWidth: 950,
                canvasHeight: 450,
                connecting: !0,
                hash: null,
                status: "",
                timer: "",
                rate: "",
              }),
              (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this._isMounted = !0;
                  var t = this.state.engine;
                  this.handleResize(),
                    this.setState({ width: window.innerWidth }),
                    window.addEventListener("resize", this.handleResize);
                  var a = this.state.canvasHeight;
                  Object(P.s)() && (a = 450),
                    Object(P.A)(500).then(function () {
                      e.initCanvas(a);
                    }),
                    t.trigger.on("finish_crash", function (t) {
                      return e.finish(t);
                    }),
                    t.trigger.on("waiting_crash", function (t) {
                      return e.waiting(t);
                    }),
                    t.trigger.on("started_crash", function (t) {
                      return e.started(t);
                    }),
                    t.trigger.on("busted_crash", function (t) {
                      return e.busted(t);
                    }),
                    t.trigger.on("game_status", function (t) {
                      return e.status(t);
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.profit &&
                    this.state.gameCanvas.setAddons(e.profit, e.im_in_game);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.setState({ width: window.innerWidth });
                  var e = 70;
                  Object(P.s)() && (e = 100), (Xt = e), T.a.setKey("cFont", e);
                },
              },
              {
                key: "finish",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.name;
                    this.state.gameCanvas.setFinisher(t);
                  }
                },
              },
              {
                key: "waiting",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time;
                    this.setState({ status: "waiting" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setWaiting(t);
                  }
                },
              },
              {
                key: "started",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time,
                      a = e.md5;
                    this.setState({ status: "started" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setPlaying(t, a);
                  }
                },
              },
              {
                key: "busted",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.force,
                      r = (t / 100).toFixed(2);
                    this.state.gameCanvas.setAddons(
                      this.props.profit,
                      this.props.im_in_game
                    ),
                      this.state.gameCanvas.setBusted(r, a, n),
                      this.setState({
                        status: "busted",
                        timer: a,
                        rate: r,
                        force: n,
                      });
                  }
                },
              },
              {
                key: "status",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.md5,
                      r = e.status;
                    switch (
                      (this.setState({ status: r, timer: a, connecting: !1 }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      r)
                    ) {
                      case "started":
                        this.state.gameCanvas.setPlaying(a, n);
                        break;
                      case "waiting":
                        this.state.gameCanvas.setWaiting(a);
                        break;
                      case "busted":
                        var s = (t / 100).toFixed(2);
                        this.state.gameCanvas.setBusted(s, a);
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { display: "unset" };
                  return (
                    this.state.connecting && (e = { display: "none" }),
                    r.a.createElement(
                      _.a,
                      { className: " mb-1 p-1 game-wrapper-card" },
                      r.a.createElement(
                        _.a.Body,
                        {
                          className:
                            "bg-body game-aria text-center no-shadow pt-2 static-snow p-0",
                          id: "canvasPart",
                        },
                        r.a.createElement(
                          "div",
                          { className: "game-holder" },
                          this.state.connecting &&
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "h3",
                                {
                                  className: "font-35 my-5 d-block mb-5",
                                  style: { color: "#C67512" },
                                },
                                "CONNECTING"
                              ),
                              r.a.createElement(
                                "b",
                                { className: "mt-1 d-block mt-2 mb-5" },
                                r.a.createElement("div", {
                                  className: "spinner-grow my-5",
                                  style: { color: "#C67512" },
                                  role: "status",
                                })
                              )
                            ),
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              _.a,
                              { className: "mb-1 bg-transparent" },
                              r.a.createElement(
                                _.a.Body,
                                { className: "p-0" },
                                r.a.createElement("canvas", {
                                  id: "graph2",
                                  style: e,
                                }),
                                r.a.createElement(Yt, {
                                  game: "crash",
                                  t: this.props.t,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function Zt(e) {
        return null == e ? e : (0.5 + e) | 0;
      }
      function Jt() {
        var e = this,
          t = 0;
        (e.nextround_text = "Next round in {time}s"),
          (e.busted_title = "CRASHED"),
          (e.edge_text = null),
          (e.winner_text = null),
          (e.im_in_game = null),
          (e.maximum_text = ""),
          (e.current_hash = ""),
          (e.game_status = 0),
          (e.start_time = 0),
          (e.started_time = 0),
          (e.time_passed = 0),
          (e.current_amount = 0),
          (e.busted_amount = 0),
          (e.cashin_amount = 0),
          (e.warning_text = null),
          (e.busted_text = null),
          (e.time_part = null),
          (e.amount_part = null),
          (e.graph_part = null),
          (e.canvas_size = null),
          (e.canvasWidth = !1),
          (e.canvasHeight = !1),
          (e.cashOuter = []),
          (e.coors = null),
          (e.setFinisher = function (t) {
            e.cashOuter.push(t);
          }),
          (e.setWaiting = function (t) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 1),
              (e.start_time = new Date().getTime() + t),
              (e.time_passed = 0),
              (e.started_time = 0),
              (e.cashOuter = []),
              (e.current_hash = "");
          }),
          (e.setAddons = function (t, a) {
            (e.winner_text = t), (e.im_in_game = a);
          }),
          (e.setPlaying = function (t, a) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 2),
              (e.started_time = new Date().getTime() - t),
              (e.time_passed = t),
              (e.current_hash = "");
          }),
          (e.setBusted = function (t, a, n) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 3),
              (e.busted_amount = t),
              (e.started_time = new Date().getTime() - a),
              (e.time_passed = a),
              (e.current_hash = "");
          }),
          (e.init = function (t, a) {
            (e.canvas = Object(P.p)("#graph2")),
              (e.context = e.canvas.getContext("2d")),
              (e.canvas_size = t),
              e.resize(t, a),
              (e.rtimer = !0),
              window.requestAnimationFrame(e.render);
          }),
          (e.resize = function (t, a) {
            null != t && (e.canvas_size = t),
              (e.canvas.width = 1 * a),
              (e.canvas.height = 1 * t),
              (e.canvas.style.width = a + "px"),
              (e.canvas.style.maxWidth = "95%"),
              (e.canvas.style.maxHeight = "100%"),
              (e.canvasWidth = a),
              (e.canvasHeight = t),
              (e.coors = null);
          }),
          (e.render = function () {
            if (!e.rtimer) return !1;
            e.context.clearRect(0, 0, e.canvasWidth, e.canvasHeight),
              e.draw(e.context),
              window.requestAnimationFrame(e.render);
          }),
          (e.draw = function (t) {
            if (null == e.coors) {
              e.coors = { width: e.canvasWidth, height: e.canvasHeight };
              var a = e.canvasHeight - 35;
              e.coors.origin = { x: Zt(0.12 * a), y: Zt(a - 0.07) };
              var n = Zt(0.09 * a),
                r = Zt(0.08 * a),
                s = Zt(a - 0.07);
              (e.coors.info = {
                x: Zt((e.coors.width + r) / 2),
                y: Zt(0.48 * e.coors.height),
                font: n,
                by: Zt(0.36 * e.coors.height),
                bh: Zt(1.7 * n),
              }),
                (e.coors.busted = {
                  x: Zt((e.coors.width + r) / 2),
                  y1: Zt(0.51 * e.coors.height),
                  y2: Zt(0.65 * e.coors.height),
                  font: Zt(0.25 * a),
                });
              var i = Zt(0.05 * a),
                o = Zt(1.6 * r),
                l = Zt(0.6 * r - i),
                c = Zt(l + 1.5 * i),
                u = Zt(c + 1.5 * i),
                m = Zt(u + 1.5 * i);
              e.coors.profit = { x: o, y1: l, y2: c, y3: u, y4: m, font: i };
              var d = Zt(e.canvasWidth + 60 + r),
                h = Zt(s),
                p = Zt(0.055 * a),
                f = Zt(r - -0.5 * p),
                b = Zt(s + 1 * p),
                g = Zt(0.3 * p),
                y = Zt(s - 0.2 * p),
                v = Zt(r + 1.1 * p);
              e.coors.axis = {
                x: d,
                y: h,
                font: p,
                tx: f,
                th: g,
                ty: b,
                lx: v,
                ly: y,
              };
              var E = Zt(0.2 * a),
                _ = Zt((e.coors.width + r) / 2),
                w = Zt(0.56 * e.coors.height);
              e.coors.amount = { x: _, y: w, font: E };
            }
            e.drawAxis(t),
              e.drawMaximum(t),
              e.drawAxisLabels(t),
              1 === e.game_status
                ? e.drawWaiting(t)
                : 2 === e.game_status
                ? (e.drawGraph(t), e.drawAmount(t))
                : 3 === e.game_status && e.drawBusted(t);
          }),
          (e.drawAxis = function (t) {
            (t.lineWidth = 1),
              (t.strokeStyle = "#000"),
              t.beginPath(),
              t.moveTo(e.coors.origin.x, 0),
              t.lineTo(e.coors.origin.x, e.coors.origin.y),
              t.lineTo(e.coors.width, e.coors.origin.y),
              t.stroke(),
              t.closePath();
          }),
          (e.drawMaximum = function (t) {
            (t.fillStyle = "#b0b3c1"),
              (t.textAlign = "left"),
              null != e.maximum_text &&
                ((t.font = e.coors.profit.font + "px " + qt + " , " + qt),
                t.fillText(
                  e.maximum_text,
                  e.coors.profit.x,
                  e.coors.profit.y1
                )),
              null != e.winner_text &&
                ((t.fillStyle = "#69ca5e"),
                (t.font = e.coors.profit.font + "px " + qt + " , " + qt),
                t.fillText(e.winner_text, e.coors.profit.x, e.coors.profit.y2)),
              null != e.current_hash &&
                ((t.fillStyle = "#FFF"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(qt, '"')),
                t.fillText(
                  e.current_hash,
                  e.coors.profit.x,
                  e.coors.profit.y3
                )),
              null != e.edge_text &&
                ((t.fillStyle = "#000"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(qt, '"')),
                t.fillText(e.edge_text, e.coors.profit.x, e.coors.profit.y4));
          }),
          (e.drawAxisLabels = function (a) {
            2 === e.game_status &&
              null === e.warning_text &&
              (e.time_passed = new Date().getTime() - e.started_time),
              (a.strokeStyle = "#000"),
              (a.fillStyle = "#000"),
              (a.textAlign = "center"),
              (a.font = "small-caps 16px " + qt);
            var n = e.time_passed < 1e4 ? 10 : Zt(e.time_passed / 1e3);
            if (
              (null == e.time_part && (e.time_part = 2),
              n > 20 && n > 7 * e.time_part)
            )
              for (
                2 === e.time_part && (e.time_part = 10);
                !(n < 3 * e.time_part);

              )
                e.time_part += 10;
            for (a.beginPath(), t = 0; t < Math.ceil(n / e.time_part); t++) {
              var r = e.time_part * t * 1e3,
                s =
                  e.coors.origin.x +
                  (e.coors.axis.x * r) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed);
              a.fillText(e.time_part * t, s, e.coors.axis.ty),
                t > 0 &&
                  (a.moveTo(s, e.coors.origin.y), a.lineTo(s, e.coors.axis.ly));
            }
            a.stroke(),
              a.closePath(),
              (a.textAlign = "right"),
              (e.current_amount = Math.pow(
                Math.E,
                6e-5 * e.time_passed
              ).toFixed(2));
            var i = Zt(100 * e.current_amount) - 100,
              o = i < 100 ? 100 : i;
            if (
              (null == e.amount_part && (e.amount_part = 20),
              o > 150 && o > 6 * e.amount_part)
            )
              for (e.amount_part = 100; !(o <= 6 * e.amount_part); )
                e.amount_part *= 2;
            for (a.beginPath(), t = 0; t < Math.ceil(o / e.amount_part); t++)
              if (0 !== t) {
                var l =
                    e.coors.origin.y -
                    (e.coors.axis.y * e.amount_part * t) / (i < 100 ? 100 : i),
                  c = (e.amount_part * t + 100) / 100 + "x";
                a.fillText(c, e.coors.axis.tx, l + e.coors.axis.th),
                  a.moveTo(e.coors.origin.x, l),
                  a.lineTo(e.coors.axis.lx, l);
              }
            a.stroke(), a.closePath();
          }),
          (e.drawGraph = function (a) {
            var n = a.createLinearGradient(0, 0, e.canvasWidth, 0);
            for (
              n.addColorStop("0", "#C67512"),
                n.addColorStop("0.8", "rgba(248,133,49,1)"),
                n.addColorStop("1.0", "#2CB34A"),
                a.strokeStyle = e.im_in_game ? "#2CB34A" : "fff",
                a.lineWidth = 4,
                a.beginPath(),
                a.moveTo(e.coors.origin.x, e.coors.origin.y),
                null == e.graph_part && (e.graph_part = 100),
                e.time_passed > 100 * e.graph_part && (e.graph_part *= 2),
                t = 0;
              t < e.time_passed;
              t += e.graph_part
            ) {
              P.e.current_amount = e.current_amount;
              var r =
                  e.coors.origin.x +
                  (e.coors.axis.x * t) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed),
                s =
                  e.coors.origin.y -
                  (e.coors.axis.y *
                    (Zt(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                    (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
              a.lineTo(r, s);
            }
            var i =
                e.coors.origin.x +
                (e.coors.axis.x * t) /
                  (e.time_passed < 1e4 ? 1e4 : e.time_passed),
              o =
                e.coors.origin.y -
                (e.coors.axis.y *
                  (Zt(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                  (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
            i > 950 && (i = 950),
              o < 30 && (o = 30),
              0 !== e.cashOuter.length &&
                e.cashOuter.forEach(function (t, n) {
                  (a.fillStyle = "#FFF"), a.fillText(t, i, o + 20 * n);
                  var r = setTimeout(function () {
                    e.cashOuter.splice(n, 1), clearTimeout(r);
                  }, 700);
                }),
              a.stroke(),
              a.closePath();
          }),
          (e.drawAmount = function (t) {
            (e.canvas.style.fontWeight = 700),
              (e.canvas.style.textShadow = 0),
              (t.fontWeight = 700);
            var a = Math.pow(Math.E, 6e-5 * e.time_passed).toFixed(2);
            (t.fillStyle = e.im_in_game ? "#2CB34A" : "#000"),
              (t.textAlign = "center");
            var n = null !== Xt ? Xt : T.a.getKey("cFont");
            (t.font = "normal normal 700 ".concat(n, 'px/1 "').concat(qt, '"')),
              t.fillText(a + "x", e.coors.amount.x, e.coors.amount.y);
          }),
          (e.drawBusted = function (t) {
            null == e.busted_text &&
              (e.busted_text = {
                line1: e.busted_title + " " + e.busted_amount + "x",
              }),
              (t.fillStyle = "#EE373F"),
              (t.textAlign = "center");
            var a = e.coors.busted.font;
            (t.font = "normal normal 700 ".concat(a, 'px/1 "').concat(qt, '"')),
              t.fillText(
                e.busted_text.line1,
                e.coors.busted.x,
                e.coors.busted.y1
              );
          }),
          (e.drawWaiting = function (t) {
            var a = (e.start_time - new Date().getTime()) / 1e3;
            (a = a <= 0 ? "0.0" : a.toFixed(1)),
              (t.fillStyle = "#339AF0"),
              (t.textAlign = "center");
            var n = e.coors.info.font;
            (t.font = "normal normal 700 ".concat(n, 'px/1 "').concat(qt, '"')),
              t.fillText(
                e.nextround_text.replace("{time}", a),
                e.coors.info.x,
                e.coors.info.y
              );
          });
      }
      var $t = Object(d.b)(function (e) {
          return { profit: e.items.profit, im_in_game: e.items.im_in_game };
        }, {})(Vt),
        Qt = a(393),
        ea = a(384);
      a(399), a(394);
      var ta = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.handleAuto = function (e) {
                if (n._isMounted) {
                  var t = e.amount,
                    a = e.payout;
                  if (!a) return alert("payout is empty.");
                  if (!t) return alert("amount is empty.");
                  n.setState({ amount: t, payout: a }),
                    "started" === n.state.gameStatus
                      ? n.holdBet()
                      : "waiting" === n.state.gameStatus && n.setBet();
                }
              }),
              (n.setDefaultButton = function () {
                n._isMounted &&
                  (clearInterval(n.state.buttonProgress),
                  n.setState({
                    added: !1,
                    holding: !1,
                    inputDisabled: !1,
                    buttonType: "btn-bet",
                    buttonText: "PLACE BET",
                  }));
              }),
              (n.setWaitingButton = function () {
                n._isMounted &&
                  n.setState({
                    added: !0,
                    inputDisabled: !0,
                    buttonType:
                      "btn-bet-success-crash text-white btn-p no-shadow",
                    buttonText: "Please Wait...",
                  });
              }),
              (n.setOutButton = function () {
                n._isMounted &&
                  n.setState({
                    inputDisabled: !1,
                    buttonType: "btn-bet-success",
                    buttonText: "CANCEL (Next Round)",
                  });
              }),
              (n.setMax = function (e) {
                e.preventDefault();
                var t = n.props.credit;
                null !== t && (n.setState({ amount: t }), T.a.setKey("lam", t));
              }),
              (n.setMin = function (e) {
                e.preventDefault(),
                  n.setState({ amount: "10.00" }),
                  T.a.setKey("lam", "10.00");
              }),
              (n.multi = function (e) {
                var t = 2 * n.state.amount;
                n.setState({ amount: Object(P.o)(t) }),
                  T.a.setKey("lam", Object(P.o)(t));
              }),
              (n.devide = function (e) {
                var t = n.state.amount / 2;
                (t = Math.max(t, 1e-7)),
                  n.setState({ amount: Object(P.o)(t) }),
                  T.a.setKey("lam", Object(P.o)(t));
              }),
              (n.state = {
                engine: null,
                buttonText: "PLACE BET",
                buttonType: "btn-bet",
                inputDisabled: !1,
                buttonProgress: null,
                gameStatus: null,
                clicked: !1,
                added: !1,
                holding: !1,
                payout: "3",
                amount: "10.00",
                token: T.a.getKey("token") ? T.a.getKey("token") : null,
                hotkey: T.a.getKey("hotkey") ? T.a.getKey("hotkey") : "OFF",
              }),
              (n.handleInputChange = n.handleInputChange.bind(Object(S.a)(n))),
              (n.handleBet = n.handleBet.bind(Object(S.a)(n))),
              (n.setBet = n.setBet.bind(Object(S.a)(n))),
              (n.wrapperRef = r.a.createRef()),
              (n.handleClickOutside = n.handleClickOutside.bind(
                Object(S.a)(n)
              )),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (this._isMounted) {
                    var t = Ft;
                    this.setState({ engine: t }),
                      this.props.gameCoin(),
                      window.addEventListener(
                        "keypress",
                        this.handleHotKey.bind(this)
                      ),
                      document.addEventListener(
                        "mousedown",
                        this.handleClickOutside
                      ),
                      t.trigger.on("game_status", function (t) {
                        return e.checkStatus(t);
                      }),
                      t.trigger.on("waiting_crash", function () {
                        return e.checkWaitingGame();
                      }),
                      t.trigger.on("busted_crash", function () {
                        return e.checkBustedGame();
                      }),
                      t.trigger.on("started_crash", function () {
                        return e.checkStartedGame();
                      }),
                      t.trigger.on("play_crash", function (t) {
                        return e.handlePlay(t);
                      }),
                      t.trigger.on("finish_crash", function (t) {
                        return e.handleFinish(t);
                      }),
                      t.trigger.on("error_crash", function (t) {
                        return e.handleError(t);
                      }),
                      t.trigger.on("stop_playing", function () {
                        return e.stopManual();
                      });
                  }
                },
              },
              {
                key: "componentWillMount",
                value: function () {
                  this._isMounted = !0;
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    window.removeEventListener(
                      "keypress",
                      this.handleHotKey.bind(this)
                    ),
                    document.removeEventListener(
                      "mousedown",
                      this.handleClickOutside
                    );
                },
              },
              {
                key: "handleClickOutside",
                value: function (e) {
                  if (
                    this.wrapperRef &&
                    !this.wrapperRef.current.contains(e.target)
                  ) {
                    var t = parseFloat(this.state.payout);
                    t < 1.01 && (t = 1.01),
                      t > 1e6 && (t = 1e6),
                      this.setState({ payout: parseFloat(t).toFixed(2) });
                    var a = this.wrapperRef.current.value;
                    "" === a && this.setState({ amount: 1e-7 }),
                      parseFloat(a) < 1e-7 &&
                        this.setState({ amount: Object(P.o)(1e-7) }),
                      parseFloat(a) <= 0
                        ? this.setState({ amount: Object(P.o)(1e-7) })
                        : ("NaN" === a && (a = 1e-7),
                          this.setState({ amount: Object(P.o)(a) }));
                  }
                },
              },
              {
                key: "handleInputChange",
                value: function (e) {
                  var t = e.target,
                    a = t.value,
                    n = t.name;
                  ("amount" !== n || Object(P.w)(a)) &&
                    (("payout" === n && a >= 999999) ||
                      ("amount" === n && T.a.setKey("lam", a),
                      this.setState(Object(G.a)({}, n, a))));
                },
              },
              {
                key: "stopManual",
                value: function () {
                  this.setState({
                    started: !1,
                    buttonText: "BET",
                    inputDisabled: !1,
                  });
                },
              },
              {
                key: "checkStatus",
                value: function (e) {
                  if (this._isMounted)
                    switch (e.status) {
                      case "waiting":
                        this.checkWaitingGame();
                        break;
                      case "started":
                        this.checkStartedGame();
                        break;
                      case "busted":
                        this.checkBustedGame();
                    }
                },
              },
              {
                key: "handleError",
                value: function (e) {
                  this._isMounted &&
                    (this.props.setMeToGame(!1),
                    this.setState({
                      holding: !1,
                      added: !1,
                      inputDisabled: !1,
                    }),
                    clearInterval(this.state.buttonProgress),
                    this.setDefaultButton(),
                    P.i.isUndefined(e.code) ||
                      ("credit" === e.code && this.props.setWallet(!0, e.uid)),
                    this.setState({ clicked: !1 }),
                    Object(P.y)(e.message, "info", "top-center"));
                },
              },
              {
                key: "setBet",
                value: function () {
                  if (this._isMounted) {
                    this.setState({ clicked: !0 });
                    var e = this.state,
                      t = e.engine,
                      a = e.amount,
                      n = "1000.00", //e.payout,
                      r = e.token;
                    (t.coin = "kes"),
                      (t.token = r),
                      (t.amount = a),
                      (t.payout = parseInt(100 * n)),
                      t.play(),
                      initPlayStage(),
                      console.log(t.payout);
                  }
                },
              },
              {
                key: "cashOut",
                value: function () {
                  this._isMounted &&
                    this.state.engine.finish(P.e.current_amount);
                },
              },
              {
                key: "handlePlay",
                value: function (e) {
                  this._isMounted &&
                    e.token === this.state.token &&
                    this.props.setMeToGame(!0);
                },
              },
              {
                key: "handleFinish",
                value: function (e) {
                  this._isMounted &&
                    e.token === this.state.token &&
                    (clearInterval(this.state.buttonProgress),
                    this.props.setWinnerText(
                      "   You Cashed Out at " + e.current / 100
                    ),
                    endPlay(),
                    this.props.setMeToGame(!1),
                    this.setDefaultButton());
                },
              },
              {
                key: "checkWaitingGame",
                value: function () {
                  this._isMounted &&
                    (this.props.setWinnerText(""),
                    this.setState({ gameStatus: "waiting" }),
                    this.state.holding &&
                      (this.setState({ holding: !1 }), this.placeBet()));
                },
              },
              {
                key: "checkStartedGame",
                value: function () {
                  if (this._isMounted) {
                    var e = this.props.im_in_game,
                      t = this.state.engine.amount;
                    if (
                      (this.setState({ gameStatus: "started" }),
                      !0 === e || this.state.clicked)
                    ) {
                      this.setState({
                        inputDisabled: !1,
                        buttonType: "btn-bet-success-crash",
                        clicked: !1,
                      });
                      var a = this;
                      this.state.buttonProgress = setInterval(
                        function () {
                          var e = t * (P.e.current_amount - 1);
                          a.setState({
                            buttonText: "CashOut " + Object(P.o)(e) + " KES",
                          }),
                            parseFloat(P.e.current_amount) >=
                              parseFloat(this.state.payout) && this.cashOut();
                        }.bind(this),
                        50
                      );
                    }
                  }
                },
              },
              {
                key: "checkBustedGame",
                value: function () {
                  if (this._isMounted) {
                    this.setState({ gameStatus: "busted", clicked: !1 });
                    var e = this.props.im_in_game;
                    this.state.holding ||
                      (this.props.setMeToGame(!1),
                      clearInterval(this.state.buttonProgress),
                      this.setDefaultButton()),
                      e &&
                        (this.props.setMeToGame(!1),
                        clearInterval(this.state.buttonProgress),
                        this.setDefaultButton());
                  }
                },
              },
              {
                key: "isCorrectBet",
                value: function () {
                  var e = this.state,
                    t = e.amount,
                    a = e.payout;
                  return (
                    !!Object(P.w)(t) && !(100 * a < 100) && 100 * a !== 100
                  );
                },
              },
              {
                key: "placeBet",
                value: function () {
                  this._isMounted &&
                    ((this.state.engine.isHolding = !1),
                    this.setWaitingButton(),
                    this.setBet());
                },
              },
              {
                key: "holdBet",
                value: function () {
                  this._isMounted &&
                    ((this.state.engine.isHolding = !0),
                    this.setState({ holding: !0 }),
                    this.setOutButton());
                },
              },
              {
                key: "handleBet",
                value: function (e) {
                  if (this._isMounted) {
                    e.preventDefault();
                    var t = this.state,
                      a = (t.amount, t.payout),
                      n = t.holding,
                      r = t.gameStatus,
                      s = t.token,
                      i = this.props.im_in_game;
                    if (!s) return P.d.emit("showAuthModal", !0);
                    if (!this.isCorrectBet()) return !1;
                    switch (
                      (this.setState({ payout: (1 * a).toFixed(2) }), r)
                    ) {
                      case "waiting":
                        this.placeBet();
                        break;
                      case "busted":
                        n ? this.setDefaultButton() : this.holdBet();
                        break;
                      case "started":
                        i
                          ? this.cashOut()
                          : n
                          ? this.setDefaultButton()
                          : this.holdBet();
                    }
                  }
                },
              },
              {
                key: "hotkeyChange",
                value: function () {
                  this._isMounted &&
                    ("OFF" === this.state.hotkey
                      ? ((P.h.denied_hotkey = !1),
                        T.a.setKey("hotkey", "ON"),
                        this.setState({ hotkey: "ON" }))
                      : (T.a.setKey("hotkey", "OFF"),
                        this.setState({ hotkey: "OFF" })));
                },
              },
              {
                key: "handleHotKey",
                value: function (e) {
                  if (
                    this._isMounted &&
                    (P.h.denied_hotkey &&
                      ((P.h.denied_hotkey = !1),
                      T.a.setKey("hotkey", "OFF"),
                      this.setState({ hotkey: "OFF" })),
                    "ON" === T.a.getKey("hotkey"))
                  ) {
                    var t = e.which || e.keyCode;
                    if ((98 === t && this.handleBet(e), 102 === t)) {
                      var a = parseFloat(2 * this.state.payout),
                        n = Math.max(1, a);
                      this.setState({ payout: n.toFixed(2) });
                    }
                    if (101 === t) {
                      (a = parseFloat(this.state.payout / 2)),
                        (n = Math.max(1, a));
                      this.setState({ payout: n.toFixed(2) });
                    }
                    this.handleInputChange(e);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.amount,
                    n = t.inputDisabled,
                    s = t.payout,
                    i = t.buttonType,
                    o = t.buttonText,
                    l = (t.hotkey, this.props);
                  l.mobile, l.coin;
                  return (
                    "NaN" === a && (a = 10),
                    r.a.createElement(
                      "div",
                      {
                        onKeyPress: function (t) {
                          return e.handleHotKey(t);
                        },
                      },
                      r.a.createElement(
                        "form",
                        {
                          className: "w-100 mt-1",
                          onSubmit: function (t) {
                            e.handleBet(t);
                          },
                        },
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            { xl: 12, md: 12, sm: 12, xs: 6 },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "form-group mb-1 bet-input payout py-1",
                              },
                              r.a.createElement("div", null, "STAKE"),
                              r.a.createElement(
                                "div",
                                { className: "input-group" },
                                r.a.createElement("input", {
                                  ref: this.wrapperRef,
                                  disabled: n,
                                  type: "text",
                                  className: "form-control text-left",
                                  id: "amount",
                                  name: "amount",
                                  placeholder: "...",
                                  value: a,
                                  autoComplete: "off",
                                  onKeyUp: this.handleInputChange,
                                  onChange: this.handleInputChange,
                                })
                              )
                            )
                          ),
                          r.a.createElement(
                            E.a,
                            { xl: 12, md: 12, sm: 12, xs: 6 },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "form-group mb-1 bet-input payout mb-2 py-1",
                              },
                              r.a.createElement("div", null, "AUTO CASHOUT"),
                              r.a.createElement(
                                "div",
                                { className: "input-group" },
                                r.a.createElement("input", {
                                  disabled: n,
                                  type: "number",
                                  className: "form-control text-left",
                                  id: "payout",
                                  name: "payout",
                                  min: "1.01",
                                  max: "99999",
                                  step: "0.01",
                                  placeholder: "..",
                                  value: s,
                                  autoComplete: "off",
                                  onKeyUp: this.handleInputChange,
                                  onChange: this.handleInputChange,
                                })
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            {
                              xl: 12,
                              md: 12,
                              sm: 12,
                              className: "m-auto text-center",
                            },
                            r.a.createElement(
                              "h6",
                              { className: "text-uppercase" },
                              "POSSIBLE WINNINGS  ",
                              r.a.createElement(
                                "span",
                                { className: "ml-4 text-success" },
                                "KES ",
                                Object(P.o)(a * s)
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            { md: 12, sm: 12, className: "m-auto text-center" },
                            r.a.createElement(
                              "div",
                              { className: "form-group rev mt-0 mb-2" },
                              r.a.createElement(
                                he.a,
                                {
                                  variant: "btn btn-block " + i,
                                  disabled: n,
                                  type: "submit",
                                },
                                o
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        aa =
          (r.a.Component,
          Object(d.b)(
            function (e) {
              return {
                coin: e.items.coin,
                im_in_game: e.items.im_in_game,
                credit: e.items.credit,
              };
            },
            {
              gameCoin: De,
              setWinnerText: function (e) {
                return function (t) {
                  t({ type: "CRASH_WINNER_TEXT", payload: e });
                };
              },
              setMeToGame: function (e) {
                return function (t) {
                  t({ type: "CRASH_IM_IN_GAME", payload: e });
                };
              },
              setWallet: Dt,
            }
          )(ta)),
        na = (a(315), r.a.Component, a(161)),
        ra = (function () {
          function e() {
            Object(l.a)(this, e), (this.scripts = []);
          }
          return (
            Object(c.a)(e, [
              {
                key: "get",
                value: function () {
                  return this.scripts;
                },
              },
              {
                key: "add",
                value: function (e) {
                  this.scripts.push(e),
                    (this.scripts = P.i.flattenDeep(this.scripts));
                },
              },
              {
                key: "edit",
                value: function (e) {
                  var t = P.i.findIndex(this.scripts, function (t) {
                    return t.name == e.name;
                  });
                  t > -1 && (this.scripts[t].content = e.content);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = P.i.findIndex(this.scripts, function (t) {
                    return t.name == e;
                  });
                  t > -1 && this.scripts.splice(t, 1);
                },
              },
            ]),
            e
          );
        })(),
        sa = r.a.createElement;
      function ia() {
        return [
          {
            name: "Repeator",
            content:
              "\nvar amount = engine.input('amount');\nvar payout = engine.input('payout');\n\nengine.on('waiting', onWaiting);\nengine.on('started', onStarted);\nengine.on('busted', onBusted);\n\nfunction onWaiting(){\n    // Event when game is waiting for players bet\n    engine.bet(amount, payout)\n}\n\nfunction onBusted(){\n    // Event when game was busted\n}\n\nfunction onStarted(){\n    // Event when game was started\n}\n\n",
          },
        ];
      }
      var oa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).checkPlaying = function () {
                if (n.state.active) {
                  var e = n.state.amount,
                    t = n.state.payout;
                  P.d.emit("auto_bet", { amount: e, payout: t });
                }
              }),
              (n.state = {
                engine: Ft,
                autoEngine: na.a,
                scriptor: new ra(),
                userScripts: n.parseScripts(n.scripts()),
                script: { repeator: n.parseScripts(ia()) },
                showScriptPage: !1,
                scriptData: !1,
                disabled: !1,
                show: !1,
                active: !1,
                scriptName: "",
                scriptContent: "",
                amount: null,
                payout: null,
              }),
              (n.openScript = n.openScript.bind(Object(S.a)(n))),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.engine,
                    n = t.scriptor;
                  a.trigger.on("waiting_crash", function () {
                    return e.checkPlaying();
                  });
                  var r = this.scripts();
                  null !== r && n.add(r);
                },
              },
              {
                key: "scripts",
                value: function () {
                  return na.a.getScripts();
                },
              },
              {
                key: "handleShow",
                value: function () {
                  var e = this.state.scriptData;
                  this.setState({
                    show: !0,
                    effect: "zoomIn",
                    scriptName: e.name,
                    scriptContent: e.content,
                  });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({
                    show: !1,
                    effect: "zoomOut",
                    scriptName: "",
                    scriptContent: "",
                    content: "",
                  });
                },
              },
              {
                key: "openScript",
                value: function (e) {
                  this.setState({ showScriptPage: !0, scriptData: e });
                },
              },
              {
                key: "parseScripts",
                value: function (e) {
                  var t = this,
                    a = [];
                  if (null !== e)
                    return (
                      e.forEach(function (e, n) {
                        var r = sa(
                          "button",
                          {
                            key: n,
                            onClick: function () {
                              t.openScript({
                                name: e.name,
                                content: e.content,
                              });
                            },
                            className: "btn btn-block btn-sm bg-cs2 mt-2",
                          },
                          e.name
                        );
                        a[n] = sa(
                          "div",
                          { className: "col-lg-4 col-md-6 col-4", key: n },
                          r
                        );
                      }),
                      a
                    );
                },
              },
              {
                key: "setUpUI",
                value: function (e) {
                  var t = this,
                    a = !1,
                    n = "Run";
                  this.state.disabled &&
                    ((a = sa("div", {
                      className: "spinner-border spinner-border-sm mr-1",
                      role: "status",
                    })),
                    (n = "Stop"));
                  var r = sa(
                      "BUTTON",
                      {
                        className: "btn btn-sm bg-cs2 btn-block mt-2 mr-2",
                        id: "submitButton",
                        type: "submit",
                      },
                      [a, n]
                    ),
                    s = sa(
                      "BUTTON",
                      {
                        className: "btn btn-sm bg-cs btn-block mt-2 ml-2",
                        type: "button",
                        disabled: this.state.disabled,
                        onClick: function () {
                          return t.setState({ showScriptPage: !1 });
                        },
                      },
                      ["Back"]
                    ),
                    i = sa("div", { className: "col-md-5 m-auto d-flex" }, [
                      r,
                      s,
                    ]),
                    o = sa(
                      "div",
                      { className: "row" },
                      this.state.autoEngine.setUpinput(e)
                    );
                  return sa(
                    "form",
                    {
                      className: "col-md-10 mt-2 mx-auto",
                      id: "scriptFormed",
                      onSubmit: function (e) {
                        t.runScript(e);
                      },
                    },
                    [o, i]
                  );
                },
              },
              {
                key: "runScript",
                value: function (e) {
                  e.preventDefault();
                  var t = !1,
                    a = !1,
                    n = 0;
                  for (n in e.target)
                    if (
                      null !== e.target[n] &&
                      e.target[n].hasOwnProperty("value")
                    ) {
                      var r = e.target[n].name,
                        s = e.target[n].value;
                      "amount" === r && (t = s), "payout" === r && (a = s);
                    }
                  this.state.disabled
                    ? this.setState({ disabled: !1, active: !1 })
                    : (this.setState({
                        disabled: !0,
                        active: !0,
                        amount: t,
                        payout: a,
                      }),
                      P.d.emit("auto_bet", { amount: t, payout: a }));
                },
              },
              {
                key: "syncScripts",
                value: function () {
                  var e = this,
                    t = this.state.scriptor.get();
                  this.state.autoEngine.saveScripts(t),
                    Object(P.A)(1e3).then(function () {
                      e.setState({ userScripts: e.parseScripts(t) });
                    });
                },
              },
              {
                key: "addScript",
                value: function (e) {
                  "" !== this.state.scriptName &&
                    "" !== this.state.scriptContent &&
                    (this.state.scriptor.add(e),
                    this.setState({ show: !1 }),
                    this.syncScripts());
                },
              },
              {
                key: "editScript",
                value: function (e) {
                  "" !== this.state.scriptName &&
                    "" !== this.state.scriptContent &&
                    (this.state.scriptor.edit(e),
                    this.syncScripts(),
                    this.openScript({ name: e.name, content: e.content }),
                    Object(P.y)("Saved !", null, null));
                },
              },
              {
                key: "deleteScript",
                value: function (e) {
                  var t = this;
                  ke.a
                    .fire({
                      title: "Are you sure to delete this script?",
                      text: "",
                      icon: "warning",
                      showCancelButton: !0,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes!",
                    })
                    .then(function (a) {
                      a.value &&
                        (t.state.scriptor.delete(e.name),
                        t.syncScripts(),
                        t.setState({ showScriptPage: !1 }));
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.showScriptPage,
                    n = t.scriptData;
                  return a
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          v.a,
                          { className: "ovh" },
                          this.setUpUI(n)
                        ),
                        r.a.createElement(
                          v.a,
                          { className: "ovh" },
                          r.a.createElement(
                            E.a,
                            { md: "6" },
                            r.a.createElement(
                              y.a,
                              {
                                size: "md",
                                backdrop: "static",
                                centered: !0,
                                show: this.state.show,
                                onHide: this.handleClose,
                                className: "animated " + this.state.effect,
                              },
                              r.a.createElement(
                                y.a.Header,
                                null,
                                "Edit Script",
                                r.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className: "close p-2",
                                    onClick: this.handleClose,
                                  },
                                  r.a.createElement("i", {
                                    className: "mdi mdi-close",
                                  })
                                )
                              ),
                              r.a.createElement(
                                y.a.Body,
                                null,
                                r.a.createElement(
                                  ye.a,
                                  {
                                    onSubmit: function (t) {
                                      t.preventDefault(),
                                        e.editScript({
                                          name: e.state.scriptName,
                                          content: e.state.scriptContent,
                                        });
                                    },
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group " },
                                    r.a.createElement(
                                      "label",
                                      null,
                                      "Script Name"
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement("input", {
                                        type: "text",
                                        readOnly: !0,
                                        disabled: !0,
                                        className: "form-control",
                                        value: this.state.scriptName,
                                        onChange: function (t) {
                                          return e.setState({
                                            scriptName: t.target.value,
                                          });
                                        },
                                      }),
                                      r.a.createElement("span", {
                                        className: "input-group-append",
                                      })
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group " },
                                    r.a.createElement(
                                      "label",
                                      null,
                                      "Script Codes"
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement("textarea", {
                                        rows: "8",
                                        resizeable: !0,
                                        resize: !0,
                                        spellCheck: !0,
                                        className: "form-control",
                                        value: this.state.scriptContent,
                                        onChange: function (t) {
                                          return e.setState({
                                            scriptContent: t.target.value,
                                          });
                                        },
                                      }),
                                      r.a.createElement("span", {
                                        className: "input-group-append",
                                      })
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    {
                                      className: "form-group text-center mb-0",
                                    },
                                    "Repeator" === n.name
                                      ? r.a.createElement(
                                          he.a,
                                          {
                                            disabled: !0,
                                            variant: "purple",
                                            size: "sm",
                                            block: !0,
                                          },
                                          r.a.createElement("i", {
                                            className:
                                              "mdi mdi-account-details",
                                          }),
                                          " Save"
                                        )
                                      : r.a.createElement(
                                          he.a,
                                          {
                                            type: "submit",
                                            variant: "purple",
                                            size: "sm",
                                            block: !0,
                                          },
                                          r.a.createElement("i", {
                                            className:
                                              "mdi mdi-content-save-all mr-1",
                                          }),
                                          "Save"
                                        )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          v.a,
                          { className: "scripts ovh mt-4" },
                          !a &&
                            r.a.createElement(
                              r.a.Fragment,
                              null,
                              this.state.script.repeator,
                              this.state.userScripts
                            )
                        ),
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            { md: "6" },
                            r.a.createElement(
                              y.a,
                              {
                                size: "md",
                                backdrop: "static",
                                centered: !0,
                                show: this.state.show,
                                onHide: this.handleClose,
                                className: "animated " + this.state.effect,
                              },
                              r.a.createElement(
                                y.a.Header,
                                null,
                                "Add Script",
                                r.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className: "close p-2",
                                    onClick: this.handleClose,
                                  },
                                  r.a.createElement("i", {
                                    className: "mdi mdi-close",
                                  })
                                )
                              ),
                              r.a.createElement(
                                y.a.Body,
                                null,
                                r.a.createElement(
                                  ye.a,
                                  {
                                    onSubmit: function (t) {
                                      t.preventDefault(),
                                        e.addScript({
                                          name: e.state.scriptName,
                                          content: e.state.scriptContent,
                                        });
                                    },
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group " },
                                    r.a.createElement(
                                      "label",
                                      null,
                                      "Script Name"
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: this.state.name,
                                        onChange: function (t) {
                                          return e.setState({
                                            scriptName: t.target.value,
                                          });
                                        },
                                      }),
                                      r.a.createElement("span", {
                                        className: "input-group-append",
                                      })
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group " },
                                    r.a.createElement(
                                      "label",
                                      null,
                                      "Script Codes"
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement("textarea", {
                                        rows: "5",
                                        resizeable: !0,
                                        resize: !0,
                                        spellCheck: !0,
                                        className: "form-control",
                                        value: this.state.name,
                                        onChange: function (t) {
                                          return e.setState({
                                            scriptContent: t.target.value,
                                          });
                                        },
                                      }),
                                      r.a.createElement("span", {
                                        className: "input-group-append",
                                      })
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    {
                                      className: "form-group text-center mb-0",
                                    },
                                    r.a.createElement(
                                      he.a,
                                      {
                                        type: "submit",
                                        variant: "purple",
                                        size: "sm",
                                        block: !0,
                                      },
                                      r.a.createElement("i", {
                                        className:
                                          "mdi mdi-content-save-all mr-1",
                                      }),
                                      "Save Script"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                },
              },
            ]),
            a
          );
        })(n.Component),
        la = a(383),
        ca =
          (n.Component,
          (function (e) {
            Object(u.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).state = { bet: "manual" }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    Object(P.s)() &&
                      this.setState({ padding: "p-1", margin: "mt-1" });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = (e.padding, e.margin),
                      a = this.props,
                      n = a.token,
                      s = a.isLogged,
                      i = a.mobile;
                    return r.a.createElement(
                      Qt.a,
                      {
                        defaultActiveKey: "manual",
                        transition: !1,
                        id: "crash-tabs",
                        className: "tcr ml-1  mb-2 " + t,
                      },
                      r.a.createElement(
                        ea.a,
                        {
                          eventKey: "manual",
                          title: "Manual",
                          tabClassName: "btn bg-cs2 btn-xs",
                        },
                        r.a.createElement(aa, {
                          token: n,
                          mobile: i,
                          isLogged: s,
                        })
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.Component)),
        ua = a(385),
        ma = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { gameRow: [], show: !1 }),
              (n.handleShow = n.handleShow.bind(Object(S.a)(n))),
              (n.handleClose = n.handleClose.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "handleShow",
                value: function () {
                  this.setState({ show: !0, effect: "zoomIn" });
                },
              },
              {
                key: "handleClose",
                value: function () {
                  this.setState({ show: !1, effect: "zoomOut" });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(da, {
                    tab: !0,
                    clicked: this.handleClose,
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        da = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                players: [],
                game_id: "",
                numbers: "",
                hash: "",
                md5: "",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "onChange",
                value: function (e, t, a, n, r, s) {
                  this.setState({
                    md5: n,
                    hash: a,
                    numbers: s,
                    game_id: r,
                    players: t,
                    color: s >= 1.9 ? "success" : "danger",
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.players,
                    a = e.hash,
                    n = e.md5,
                    s = e.game_id,
                    i = e.busted;
                  return r.a.createElement(ha, {
                    tab: this.props.tab,
                    clicked: this.props.clicked.bind(this),
                    onChange: this.onChange.bind(this, t, a, n, s, i),
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        ha = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.numPages = function () {
                return Math.ceil(n.state.postsLength / n.state.perPage);
              }),
              (n.prevPage = function (e) {
                e.preventDefault();
                var t = n.state.current_page;
                if (t > 1) {
                  var a = t - 1;
                  n.setState({ current_page: a }), n.changePage(a);
                }
              }),
              (n.nextPage = function (e) {
                e.preventDefault();
                var t = n.state.current_page;
                if (t < n.numPages()) {
                  var a = t + 1;
                  n.setState({ current_page: a }), n.changePage(a);
                }
              }),
              (n.changePage = function (e) {
                if (
                  (e < 1 && (e = 1),
                  e > n.numPages() && (e = n.numPages()),
                  0 !== n.state.posts.length)
                ) {
                  n.setState({ historyRow: [] });
                  for (
                    var t = (e - 1) * n.state.perPage;
                    t < e * n.state.perPage;
                    t++
                  ) {
                    var a = n.state.posts[t];
                    P.i.isUndefined(a) ||
                      (function () {
                        var e = r.a.createElement(pa, {
                          key: P.i.toString(a.gid),
                          tab: !0,
                          clicked: n.props.clicked,
                          array: a,
                        });
                        n.setState(function (t) {
                          return {
                            historyRow: [e].concat(Object(o.a)(t.historyRow)),
                          };
                        });
                      })();
                  }
                  n.setState({ page: e }),
                    1 == e
                      ? n.setState({ pdisabled: !0 })
                      : n.setState({ pdisabled: !1 }),
                    e == n.numPages()
                      ? n.setState({ ndisabled: !0 })
                      : n.setState({ ndisabled: !1 });
                }
              }),
              (n.state = {
                engine: Ft,
                loading: !0,
                padding: "p-3",
                token:
                  null !== T.a.getKey("token") ? T.a.getKey("token") : null,
                historyRow: [],
                players: [],
                posts: [],
                postsLength: 0,
                current_page: 1,
                page: 1,
                perPage: 10,
                ndisabled: !1,
                pdisabled: !1,
              }),
              (n.prevRef = r.a.createRef()),
              (n.nextRef = r.a.createRef()),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this._isMounted = !0;
                  var t = this.state.engine;
                  t.getHistory(),
                    t.trigger.on(X.a.HISTORY_CRASH, function (t) {
                      return e.gameSync(t);
                    }),
                    Object(P.s)() && this.setState({ padding: "p-1" });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "gameSync",
                value: function (e) {
                  var t = this;
                  if (this._isMounted) {
                    Object(P.A)(1e3).then(function () {
                      t.setState({ loading: !1 });
                    });
                    var a = e.history;
                    (a = P.i.xor(a)),
                      this.setState({ posts: a }),
                      this.setState({ postsLength: a.length }),
                      this.changePage(1);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.loading
                      ? r.a.createElement(
                          "div",
                          { className: "text-center" },
                          r.a.createElement("div", {
                            className: "spinner-grow text-white my-3",
                            role: "status",
                          })
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            v.a,
                            { className: "px-4 py-2 mt-0 bg-lightbl" },
                            r.a.createElement(
                              E.a,
                              { xs: "4", className: "text-" },
                              "Game ID"
                            ),
                            r.a.createElement(
                              E.a,
                              { xs: "4", className: "text-" },
                              "Result"
                            ),
                            r.a.createElement(
                              E.a,
                              { xs: "4", className: "text-center" },
                              "Hash"
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: this.state.padding },
                            this.state.historyRow,
                            r.a.createElement(
                              "ul",
                              { className: "pagination oncenter" },
                              r.a.createElement(
                                "li",
                                { className: "page-item" },
                                r.a.createElement(
                                  "button",
                                  {
                                    className: "btn bg-cs2 mr-1 btn-xs",
                                    role: "button",
                                    disabled: this.state.pdisabled,
                                    onClick: this.prevPage,
                                  },
                                  "Prev"
                                )
                              ),
                              r.a.createElement(
                                "li",
                                { className: "page-item" },
                                r.a.createElement(
                                  "button",
                                  {
                                    className: "btn bg-cs2 btn-xs",
                                    role: "button",
                                    disabled: this.state.ndisabled,
                                    onClick: this.nextPage,
                                  },
                                  "Next"
                                )
                              )
                            ),
                            r.a.createElement(
                              "span",
                              { className: "font-12" },
                              "Page: ",
                              r.a.createElement("span", null, this.state.page)
                            )
                          )
                        )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        pa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "verifyHash",
                value: function (e) {
                  P.d.emit("game_verify", e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.clicked,
                    n = (t.tab, this.props.array),
                    s = n.gid,
                    i = n.busted,
                    o = n.hash,
                    l =
                      (i = P.i.toNumber(i).toFixed(2)) >= 1.9
                        ? "success"
                        : "danger";
                  return r.a.createElement(
                    v.a,
                    { className: "mt-1 pt-0" },
                    r.a.createElement(
                      E.a,
                      { xs: "4", className: "mt-2 text-left" },
                      r.a.createElement(Gt, {
                        clicked: a,
                        game_id: s,
                        title: s,
                        color: l,
                      })
                    ),
                    r.a.createElement(
                      E.a,
                      { xs: "4", className: "mt-2 text-left {{color}}" },
                      r.a.createElement(Gt, {
                        clicked: a,
                        game_id: s,
                        title: i + "x",
                        color: l,
                      })
                    ),
                    r.a.createElement(
                      E.a,
                      {
                        xs: "4",
                        className: "mt-1 cpt",
                        onClick: function () {
                          e.verifyHash(o);
                        },
                      },
                      r.a.createElement("input", {
                        type: "text",
                        className:
                          "form-control font-10 text-center h-100 no-radius cpt",
                        value: o.substr(0, 60) + "...",
                        readOnly: !0,
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        fa = ma,
        ba = ["children", "value", "index"];
      function ga(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          s = Object(I.a)(e, ba);
        return r.a.createElement(
          "div",
          Object.assign(
            {
              role: "tabpanel",
              hidden: a !== n,
              id: "full-width-tabpanel-".concat(n),
              "aria-labelledby": "full-width-tab-".concat(n),
            },
            s
          ),
          a === n &&
            r.a.createElement(
              z.a,
              { p: 0 },
              r.a.createElement(H.a, { component: "span" }, t)
            )
        );
      }
      function ya(e) {
        return {
          id: "full-width-tab-".concat(e),
          "aria-controls": "full-width-tabpanel-".concat(e),
        };
      }
      var va = Object(F.a)(function (e) {
        return { root: { width: "100%" }, tab: { overflowX: "hidden" } };
      });
      r.a.Component;
      var Ea = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                players: [],
                winners: [],
                failed: [],
                isWinner: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "onChange",
                value: function (e, t, a) {
                  this.setState({ players: t, isWinner: a });
                },
              },
              {
                key: "onWinner",
                value: function (e, t) {
                  this.setState({ winners: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.players,
                    a = e.winners;
                  return r.a.createElement(_a, {
                    engine: this.props.engine,
                    onChange: this.onChange.bind(this, t),
                    onWinner: this.onWinner.bind(this, a),
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        _a = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.state = { playersObject: [], winnersObject: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (((this._isMounted = !0), this._isMounted)) {
                    var t = this.props.engine;
                    t.trigger.on("finish_crash", function (t) {
                      return e.syncFinishPlayer(t);
                    }),
                      t.trigger.on("play_crash", function (t) {
                        return e.syncPlayPlayer(t);
                      }),
                      t.trigger.on("busted_crash", function (t) {
                        return e.busted(t);
                      }),
                      t.trigger.on("waiting_crash", function (t) {
                        return e.isWaiting(t);
                      }),
                      t.trigger.on("game_status", function (t) {
                        return e.gameSync(t);
                      }),
                      t.trigger.on("game_players", function (t) {
                        return e.gameSync(t);
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "syncPlayPlayer",
                value: function (e) {
                  if (this._isMounted) {
                    var t = this.state.playersObject.concat(e);
                    this.setState({ playersObject: t }),
                      this.props.onChange(this.state.playersObject);
                  }
                },
              },
              {
                key: "syncFinishPlayer",
                value: function (e) {
                  if (this._isMounted) {
                    var t = P.i.findIndex(
                      this.state.playersObject,
                      function (t) {
                        return t.uid === e.uid;
                      }
                    );
                    this.state.playersObject.splice(t, 1);
                    var a = this.state.winnersObject.concat(e);
                    this.setState({ winnersObject: a }),
                      this.props.onWinner(this.state.winnersObject);
                  }
                },
              },
              {
                key: "gameSync",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (ja(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject),
                    Ca(e.winners).forEach(function (e, a) {
                      t.state.winnersObject.push(e);
                    }),
                    this.props.onWinner(this.state.winnersObject, !0));
                },
              },
              {
                key: "busted",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (this.setState({ playersObject: [], winnersObject: [] }),
                    this.state.playersObject.shift(),
                    this.state.winnersObject.shift(),
                    ja(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject),
                    Ca(e.winners).forEach(function (e, a) {
                      t.state.winnersObject.push(e);
                    }),
                    this.props.onWinner(this.state.winnersObject, !0));
                },
              },
              {
                key: "isWaiting",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (this.setState({ playersObject: [], winnersObject: [] }),
                    ja(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject));
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(ka, {
                    engine: this.props.engine,
                    players: this.state.playersObject,
                    winners: this.state.winnersObject,
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        wa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(P.s)() && this.setState({ font: "font-10" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [],
                    a = [],
                    n = [];
                  return (
                    this.props.players.length > 0 &&
                      this.props.players.forEach(function (a, s) {
                        n.includes(a.name) ||
                          (n.push(a.name),
                          "crash" === a.session &&
                            t.push(
                              r.a.createElement(Oa, {
                                engine: e.props.engine,
                                currentPlayer: a,
                                key: s,
                                isWinner: !1,
                                isFailed: !1,
                              })
                            ));
                      }),
                    this.props.winners.length > 0 &&
                      this.props.winners.forEach(function (t, s) {
                        n.includes(t.name) ||
                          (n.push(t.name),
                          "crash" === t.session &&
                            a.push(
                              r.a.createElement(Oa, {
                                engine: e.props.engine,
                                currentPlayer: t,
                                key: s,
                                isWinner: !0,
                                isFailed: !1,
                              })
                            ));
                      }),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "table-responsive last-bets cq num-style mb-0",
                        },
                        r.a.createElement(
                          ua.a,
                          { className: "game-table mb-0 " + this.state.font },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("th", null, "PLAYING"),
                              r.a.createElement("th", null, "CASHOUT (x)"),
                              r.a.createElement(
                                "th",
                                { className: "text-left" },
                                "STAKE"
                              ),
                              r.a.createElement(
                                "th",
                                { className: "text-left" },
                                "PROFIT"
                              )
                            )
                          ),
                          r.a.createElement("tbody", null, t, a)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        ka = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = ja(this.props.players),
                    t = Ca(this.props.winners);
                  return (
                    (e.length = Math.min(e.length, 50)),
                    (t.length = Math.min(t.length, 50)),
                    r.a.createElement(wa, {
                      engine: this.props.engine,
                      players: e,
                      winners: t,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Oa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  if (
                    void 0 === this.props.currentPlayer.uid ||
                    void 0 === this.props.currentPlayer.name
                  )
                    return null;
                  var e =
                      this.props.currentPlayer.won &&
                      this.props.currentPlayer.current <=
                        100 * P.e.current_amount
                        ? Object(P.o)(this.props.currentPlayer.won)
                        : "-",
                    t = "",
                    a = "white text-warning",
                    n = "-",
                    s = this.props.currentPlayer.amount;
                  return (
                    this.props.currentPlayer.token === T.a.getKey("token") &&
                      (t = "bg-soft-warning"),
                    "busted" === this.props.engine.gameStatus &&
                      "-" === e &&
                      (a = "text-danger"),
                    "-" !== e &&
                      ((a = "text-success"),
                      (n =
                        (this.props.currentPlayer.current / 100).toFixed(2) +
                        "x")),
                    r.a.createElement(
                      "tr",
                      {
                        key: this.props.currentPlayer.uid,
                        className: a + " " + t + " q-crash text-center",
                      },
                      r.a.createElement(
                        "td",
                        { className: "text-left" },
                        r.a.createElement(ae, {
                          username: this.props.currentPlayer.name,
                          queue: !0,
                          isWinner: e,
                        })
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left", size: "20" },
                        " ",
                        n
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left num-style" },
                        Object(P.o)(s),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "hidden-sm" },
                          "KES"
                        )
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left num-style" },
                        e,
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "hidden-sm" },
                          "KES"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Na = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                loading: !0,
                players: [],
                game: "crash",
                token: T.a.getKey("token"),
                name: T.a.getKey("name"),
                gameCode: p()("crash"),
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.emit(
                    X.a.MY_BETS,
                    Object(P.m)({
                      token: this.state.token,
                      game: this.state.game,
                    })
                  ),
                    q.a.on(X.a.MY_BETS, function (t) {
                      return e.makeList(Object(P.k)(t));
                    }),
                    q.a.on(X.a.ADD_BET, function (t) {
                      return e.addList(Object(P.k)(t));
                    });
                },
              },
              {
                key: "addList",
                value: function (e) {
                  if (e.name === this.state.name) {
                    var t = r.a.createElement(xa, { forMy: !0, player: e });
                    this.setState(function (e) {
                      return { players: [t].concat(Object(o.a)(e.players)) };
                    });
                  }
                },
              },
              {
                key: "makeList",
                value: function (e) {
                  var t = this;
                  "undefined" !== typeof e.history &&
                    (this.setState({ loading: !1 }),
                    e.history.forEach(function (e, a) {
                      var n = r.a.createElement(xa, {
                        key: a,
                        forMy: !0,
                        player: e,
                      });
                      t.setState(function (e) {
                        return { players: [n].concat(Object(o.a)(e.players)) };
                      });
                    }));
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    0 !== this.state.players.length &&
                      (this.state.players.length = 10),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "table-responsive last-bets num-style mb-0",
                        },
                        this.state.loading
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                { className: "text-center" },
                                r.a.createElement("div", {
                                  className: "spinner-grow text-white my-3",
                                  role: "status",
                                })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                ua.a,
                                { className: "mb-0" },
                                r.a.createElement(
                                  "thead",
                                  null,
                                  r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement("th", null, "ID"),
                                    r.a.createElement("th", null, "Amount"),
                                    r.a.createElement("th", null, "Profit"),
                                    r.a.createElement("th", null, "Date/Time")
                                  )
                                ),
                                r.a.createElement(
                                  "tbody",
                                  null,
                                  this.state.players
                                )
                              ),
                              0 === this.state.players.length &&
                                r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "alert text-uppercase bg-cs mt-2 font-13 text-white text-center",
                                    },
                                    "Not Played Yet"
                                  )
                                )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        xa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(r))).gameDetail =
                function () {
                  P.d.emit("single_game_modal", { data: e.props.player });
                }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.player,
                    t = e.name,
                    a = e.amount,
                    n = e.profit,
                    s = e.coin,
                    i = e.created,
                    o = e.gid,
                    l = e.direct,
                    c = e.forMy,
                    u = !1,
                    m = Object(P.n)(i);
                  return (
                    l && (m = Object(P.z)(i)),
                    0 !== P.i.toNumber(n) && (u = !0),
                    r.a.createElement(
                      "tr",
                      { className: "q-crash cpt" },
                      r.a.createElement("td", { onClick: this.gameDetail }, o),
                      !1 === c &&
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(ae, { username: t, isWinner: u })
                        ),
                      r.a.createElement(
                        "td",
                        {
                          onClick: this.gameDetail,
                          className:
                            !0 === u ? "text-success-2 num-style" : "num-style",
                        },
                        r.a.createElement("img", {
                          src: "/assets/images/kes.png",
                          className: "mini-coin-2 hidden-sm",
                          alt: s,
                        }),
                        Object(P.o)(a),
                        " KES"
                      ),
                      r.a.createElement(
                        "td",
                        {
                          onClick: this.gameDetail,
                          className:
                            !0 === u ? "text-success-2 num-style" : "num-style",
                        },
                        r.a.createElement("img", {
                          src: "/assets/images/kes.png",
                          className: "mini-coin-2 hidden-sm",
                          alt: s,
                        }),
                        Object(P.o)(n),
                        " KES"
                      ),
                      r.a.createElement("td", { onClick: this.gameDetail }, m)
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function ja(e) {
        return P.i.sortBy(e, function (e) {
          return e.amount ? -e.amount : null;
        });
      }
      function Ca(e) {
        return P.i.sortBy(e, function (e) {
          return e.current ? -e.current : null;
        });
      }
      var Sa = function (e) {
          var t = va(),
            a = Object(B.a)(),
            n = r.a.useState(0),
            s = Object(D.a)(n, 2),
            i = s[0],
            o = s[1],
            l = e.game,
            c = T.a.getKey("token"),
            u = Ft;
          return r.a.createElement(
            "div",
            { className: t.root },
            r.a.createElement(
              L.a,
              { position: "static", color: "transparent" },
              r.a.createElement(
                U.a,
                {
                  value: i,
                  onChange: function (e, t) {
                    o(t);
                  },
                  indicatorColor: "primary",
                  variant: "fullWidth",
                  "aria-label": "full width tabs",
                  centered: !0,
                },
                r.a.createElement(
                  K.a,
                  Object.assign(
                    {
                      onClick: function () {
                        Object(P.A)(500).then(function () {
                          u.getPlayers();
                        });
                      },
                      label: "Players",
                    },
                    ya(0)
                  )
                ),
                r.a.createElement(
                  K.a,
                  Object.assign({ label: "My Bets" }, ya(1))
                ),
                r.a.createElement(
                  K.a,
                  Object.assign({ label: "History" }, ya(2))
                ),
                r.a.createElement(K.a, Object.assign({ label: "Chat" }, ya(3)))
              )
            ),
            r.a.createElement(
              W.a,
              {
                axis: "rtl" === a.direction ? "x-reverse" : "x",
                index: i,
                onChangeIndex: function (e) {
                  o(e);
                },
              },
              r.a.createElement(
                ga,
                { value: i, index: 0, dir: a.direction },
                r.a.createElement(Ea, { engine: u, t: e.t, game: l })
              ),
              r.a.createElement(
                ga,
                { value: i, index: 1, dir: a.direction },
                null !== c &&
                  r.a.createElement(Na, { engine: u, t: e.t, game: l }),
                null === c &&
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "alert bg-soft-purple mt-2 font-13 text-white text-center",
                    },
                    "You must be logged to see your stats"
                  )
              ),
              r.a.createElement(
                ga,
                { className: t.tab, value: i, index: 2, dir: a.direction },
                r.a.createElement(fa, { tab: !0, engine: u, t: e.t, game: l })
              ),
              r.a.createElement(
                ga,
                { className: t.tab, value: i, index: 3, dir: a.direction },
                r.a.createElement(rt, { t: e.t, location: e.location })
              )
            )
          );
        },
        Aa = ["children", "value", "index"];
      function Ma(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          s = Object(I.a)(e, Aa);
        return r.a.createElement(
          "div",
          Object.assign(
            {
              role: "tabpanel",
              hidden: a !== n,
              id: "full-width-tabpanel-".concat(n),
              "aria-labelledby": "full-width-tab-".concat(n),
            },
            s
          ),
          a === n &&
            r.a.createElement(
              z.a,
              { p: 0 },
              r.a.createElement(H.a, { component: "span" }, t)
            )
        );
      }
      var Ta = Object(F.a)(function (e) {
        return { root: { width: "100%" }, tab: { overflowX: "hidden" } };
      });
      r.a.Component;
      var Pa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                players: [],
                winners: [],
                failed: [],
                isWinner: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "onChange",
                value: function (e, t, a) {
                  this.setState({ players: t, isWinner: a });
                },
              },
              {
                key: "onWinner",
                value: function (e, t) {
                  this.setState({ winners: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.players,
                    a = e.winners;
                  return r.a.createElement(Da, {
                    engine: this.props.engine,
                    onChange: this.onChange.bind(this, t),
                    onWinner: this.onWinner.bind(this, a),
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Da = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.state = { playersObject: [], winnersObject: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (((this._isMounted = !0), this._isMounted)) {
                    var t = this.props.engine;
                    t.trigger.on("finish_crash", function (t) {
                      return e.syncFinishPlayer(t);
                    }),
                      t.trigger.on("play_crash", function (t) {
                        return e.syncPlayPlayer(t);
                      }),
                      t.trigger.on("busted_crash", function (t) {
                        return e.busted(t);
                      }),
                      t.trigger.on("waiting_crash", function (t) {
                        return e.isWaiting(t);
                      }),
                      t.trigger.on("game_status", function (t) {
                        return e.gameSync(t);
                      }),
                      t.trigger.on("game_players", function (t) {
                        return e.gameSync(t);
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "syncPlayPlayer",
                value: function (e) {
                  if (this._isMounted) {
                    var t = this.state.playersObject.concat(e);
                    this.setState({ playersObject: t }),
                      this.props.onChange(this.state.playersObject);
                  }
                },
              },
              {
                key: "syncFinishPlayer",
                value: function (e) {
                  if (this._isMounted) {
                    var t = P.i.findIndex(
                      this.state.playersObject,
                      function (t) {
                        return t.uid === e.uid;
                      }
                    );
                    this.state.playersObject.splice(t, 1);
                    var a = this.state.winnersObject.concat(e);
                    this.setState({ winnersObject: a }),
                      this.props.onWinner(this.state.winnersObject);
                  }
                },
              },
              {
                key: "gameSync",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (La(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject),
                    Ua(e.winners).forEach(function (e, a) {
                      t.state.winnersObject.push(e);
                    }),
                    this.props.onWinner(this.state.winnersObject, !0));
                },
              },
              {
                key: "busted",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (this.setState({ playersObject: [], winnersObject: [] }),
                    this.state.playersObject.shift(),
                    this.state.winnersObject.shift(),
                    La(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject),
                    Ua(e.winners).forEach(function (e, a) {
                      t.state.winnersObject.push(e);
                    }),
                    this.props.onWinner(this.state.winnersObject, !0));
                },
              },
              {
                key: "isWaiting",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    (this.setState({ playersObject: [], winnersObject: [] }),
                    La(e.players).forEach(function (e, a) {
                      t.state.playersObject.push(e);
                    }),
                    this.props.onChange(this.state.playersObject));
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(Ra, {
                    engine: this.props.engine,
                    players: this.state.playersObject,
                    winners: this.state.winnersObject,
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ia = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(P.s)() && this.setState({ font: "font-10" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [],
                    a = [],
                    n = [];
                  return (
                    this.props.players.length > 0 &&
                      this.props.players.forEach(function (a, s) {
                        n.includes(a.name) ||
                          (n.push(a.name),
                          "crash" === a.session &&
                            t.push(
                              r.a.createElement(Wa, {
                                engine: e.props.engine,
                                currentPlayer: a,
                                key: s,
                                isWinner: !1,
                                isFailed: !1,
                              })
                            ));
                      }),
                    this.props.winners.length > 0 &&
                      this.props.winners.forEach(function (t, s) {
                        n.includes(t.name) ||
                          (n.push(t.name),
                          "crash" === t.session &&
                            a.push(
                              r.a.createElement(Wa, {
                                engine: e.props.engine,
                                currentPlayer: t,
                                key: s,
                                isWinner: !0,
                                isFailed: !1,
                              })
                            ));
                      }),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "table-responsive last-bets cq num-style mb-0",
                        },
                        r.a.createElement(
                          ua.a,
                          { className: "game-table mb-0 " + this.state.font },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("th", null, "PLAYING"),
                              r.a.createElement("th", null, "CASHOUT (x)"),
                              r.a.createElement(
                                "th",
                                { className: "text-left" },
                                "STAKE"
                              ),
                              r.a.createElement(
                                "th",
                                { className: "text-left" },
                                "PROFIT"
                              )
                            )
                          ),
                          r.a.createElement("tbody", null, t, a)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ra = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = La(this.props.players),
                    t = Ua(this.props.winners);
                  return (
                    (e.length = Math.min(e.length, 50)),
                    (t.length = Math.min(t.length, 50)),
                    r.a.createElement(Ia, {
                      engine: this.props.engine,
                      players: e,
                      winners: t,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Wa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  if (
                    void 0 === this.props.currentPlayer.uid ||
                    void 0 === this.props.currentPlayer.name
                  )
                    return null;
                  var e =
                      this.props.currentPlayer.won &&
                      this.props.currentPlayer.current <=
                        100 * P.e.current_amount
                        ? Object(P.o)(this.props.currentPlayer.won)
                        : "-",
                    t = "",
                    a = "white text-warning",
                    n = "-",
                    s = this.props.currentPlayer.amount;
                  return (
                    this.props.currentPlayer.token === T.a.getKey("token") &&
                      (t = "bg-soft-warning"),
                    "busted" === this.props.engine.gameStatus &&
                      "-" === e &&
                      (a = "text-danger"),
                    "-" !== e &&
                      ((a = "text-success"),
                      (n =
                        (this.props.currentPlayer.current / 100).toFixed(2) +
                        "x")),
                    r.a.createElement(
                      "tr",
                      {
                        key: this.props.currentPlayer.uid,
                        className: a + " " + t + " q-crash text-center",
                      },
                      r.a.createElement(
                        "td",
                        { className: "text-left" },
                        r.a.createElement(ae, {
                          username: this.props.currentPlayer.name,
                          queue: !0,
                          isWinner: e,
                        })
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left", size: "20" },
                        " ",
                        n
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left num-style" },
                        Object(P.o)(s),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "hidden-sm" },
                          "KES"
                        )
                      ),
                      r.a.createElement(
                        "td",
                        { className: "text-left num-style" },
                        e,
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "hidden-sm" },
                          "KES"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Fa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                loading: !0,
                players: [],
                game: "crash",
                token: T.a.getKey("token"),
                name: T.a.getKey("name"),
                gameCode: p()("crash"),
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.emit(
                    X.a.MY_BETS,
                    Object(P.m)({
                      token: this.state.token,
                      game: this.state.game,
                    })
                  ),
                    q.a.on(X.a.MY_BETS, function (t) {
                      return e.makeList(Object(P.k)(t));
                    }),
                    q.a.on(X.a.ADD_BET, function (t) {
                      return e.addList(Object(P.k)(t));
                    });
                },
              },
              {
                key: "addList",
                value: function (e) {
                  if (e.name === this.state.name) {
                    var t = r.a.createElement(Ba, { forMy: !0, player: e });
                    this.setState(function (e) {
                      return { players: [t].concat(Object(o.a)(e.players)) };
                    });
                  }
                },
              },
              {
                key: "makeList",
                value: function (e) {
                  var t = this;
                  "undefined" !== typeof e.history &&
                    (this.setState({ loading: !1 }),
                    e.history.forEach(function (e, a) {
                      var n = r.a.createElement(Ba, {
                        key: a,
                        forMy: !0,
                        player: e,
                      });
                      t.setState(function (e) {
                        return { players: [n].concat(Object(o.a)(e.players)) };
                      });
                    }));
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    0 !== this.state.players.length &&
                      (this.state.players.length = 10),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "table-responsive last-bets num-style mb-0",
                        },
                        this.state.loading
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                { className: "text-center" },
                                r.a.createElement("div", {
                                  className: "spinner-grow text-white my-3",
                                  role: "status",
                                })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                ua.a,
                                { className: "mb-0" },
                                r.a.createElement(
                                  "thead",
                                  null,
                                  r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement("th", null, "ID"),
                                    r.a.createElement("th", null, "Amount"),
                                    r.a.createElement("th", null, "Profit"),
                                    r.a.createElement("th", null, "Date/Time")
                                  )
                                ),
                                r.a.createElement(
                                  "tbody",
                                  null,
                                  this.state.players
                                )
                              ),
                              0 === this.state.players.length &&
                                r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "alert text-uppercase bg-cs mt-2 font-13 text-white text-center",
                                    },
                                    "Not Played Yet"
                                  )
                                )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ba = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
              r[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(r))).gameDetail =
                function () {
                  P.d.emit("single_game_modal", { data: e.props.player });
                }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.player,
                    t = e.name,
                    a = e.amount,
                    n = e.profit,
                    s = e.coin,
                    i = e.created,
                    o = e.gid,
                    l = e.direct,
                    c = e.forMy,
                    u = !1,
                    m = Object(P.n)(i);
                  return (
                    l && (m = Object(P.z)(i)),
                    0 !== P.i.toNumber(n) && (u = !0),
                    r.a.createElement(
                      "tr",
                      { className: "q-crash cpt" },
                      r.a.createElement("td", { onClick: this.gameDetail }, o),
                      !1 === c &&
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(ae, { username: t, isWinner: u })
                        ),
                      r.a.createElement(
                        "td",
                        {
                          onClick: this.gameDetail,
                          className:
                            !0 === u ? "text-success-2 num-style" : "num-style",
                        },
                        r.a.createElement("img", {
                          src: "/assets/images/kes.png",
                          className: "mini-coin-2 hidden-sm",
                          alt: s,
                        }),
                        Object(P.o)(a),
                        " KES"
                      ),
                      r.a.createElement(
                        "td",
                        {
                          onClick: this.gameDetail,
                          className:
                            !0 === u ? "text-success-2 num-style" : "num-style",
                        },
                        r.a.createElement("img", {
                          src: "/assets/images/kes.png",
                          className: "mini-coin-2 hidden-sm",
                          alt: s,
                        }),
                        Object(P.o)(n),
                        " KES"
                      ),
                      r.a.createElement("td", { onClick: this.gameDetail }, m)
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function La(e) {
        return P.i.sortBy(e, function (e) {
          return e.amount ? -e.amount : null;
        });
      }
      function Ua(e) {
        return P.i.sortBy(e, function (e) {
          return e.current ? -e.current : null;
        });
      }
      var Ka = function (e) {
          var t = Ta(),
            a = Object(B.a)(),
            n = r.a.useState(0),
            s = Object(D.a)(n, 2),
            i = s[0],
            o = s[1],
            l = e.game,
            c = T.a.getKey("token"),
            u = Ft;
          return r.a.createElement(
            "div",
            { className: t.root },
            r.a.createElement(L.a, {
              position: "static",
              color: "transparent",
            }),
            r.a.createElement(
              W.a,
              {
                axis: "rtl" === a.direction ? "x-reverse" : "x",
                index: i,
                onChangeIndex: function (e) {
                  o(e);
                },
              },
              r.a.createElement(
                Ma,
                { value: i, index: 0, dir: a.direction },
                r.a.createElement(Pa, { engine: u, t: e.t, game: l })
              ),
              r.a.createElement(
                Ma,
                { value: i, index: 1, dir: a.direction },
                null !== c &&
                  r.a.createElement(Fa, { engine: u, t: e.t, game: l }),
                null === c &&
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "alert bg-soft-purple mt-2 font-13 text-white text-center",
                    },
                    "You must be logged to see your stats"
                  )
              ),
              r.a.createElement(
                Ma,
                { className: t.tab, value: i, index: 2, dir: a.direction },
                r.a.createElement(fa, { tab: !0, engine: u, t: e.t, game: l })
              ),
              r.a.createElement(
                Ma,
                { className: t.tab, value: i, index: 3, dir: a.direction },
                r.a.createElement(rt, { t: e.t, location: e.location })
              )
            )
          );
        },
        Ha = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._Mounted = !1),
              (n.activeAuth = function (e) {
                n.setState({ auth: e });
              }),
              (n.loginUser = function (e) {
                Object(P.A)(500).then(function () {
                  !0 === e.status
                    ? (n.setState({
                        header: r.a.createElement(bt, {
                          t: n.props.t,
                          location: n.props.location,
                        }),
                      }),
                      A.set("uid", e.id, { expires: 14 }),
                      A.set("auth", !0, { expires: 14 }))
                    : Object(P.A)(7e3).then(function () {
                        localStorage.clear();
                      });
                });
              }),
              (n.state = {
                mobile: !1,
                isLogged: !1,
                token: !1,
                header: r.a.createElement(xt, {
                  t: n.props.t,
                  location: n.props.location,
                }),
                auth: !1,
              }),
              (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  Object(P.A)(500).then(function () {
                    e._Mounted = !0;
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.ONLINE, function (t) {
                    return e.loginUser(Object(P.k)(t));
                  }),
                    P.d.on("showAuthModal", function (t) {
                      return e.activeAuth(t);
                    });
                  var t = A.get("auth");
                  null !== T.a.getKey("token") &&
                    t &&
                    q.a.emit(
                      X.a.ONLINE,
                      Object(P.m)({
                        jwt_token: T.a.getKey("jwt_token"),
                        user_token: T.a.getKey("user_token"),
                        security_key: T.a.getKey("security_key"),
                        secret_user: T.a.getKey("secret_user"),
                        secret_realtime: T.a.getKey("secret_realtime"),
                        client_system: T.a.getKey("client_system"),
                        token_key: T.a.getKey("token_key"),
                        secret_token: T.a.getKey("secret_token"),
                        token: T.a.getKey("token"),
                      })
                    ),
                    Object(P.A)(600).then(function () {
                      e.handleResize();
                    }),
                    window.addEventListener("resize", this.handleResize),
                    T.a.getKey("token") &&
                      this.setState({
                        isLogged: !0,
                        token: T.a.getKey("token"),
                      }),
                    Object(P.A)(500).then(function () {
                      Ft.getStatus();
                    });
                },
              },
              {
                key: "getWidth",
                value: function () {
                  return (
                    document.documentElement.clientWidth ||
                    document.body.clientWidth
                  );
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.getWidth() < 1540
                    ? (this.setState({ col: "col-xl-12" }),
                      P.d.emit("hide_games"))
                    : (this.setState({ col: "col-xl-9" }),
                      P.d.emit("show_min_games")),
                    Object(P.s)()
                      ? this.setState({ mobile: !0 })
                      : this.setState({ mobile: !1 }),
                    Object(P.s)() &&
                      this.setState({ padding: "p-0", ovh: "ovh" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.state,
                    a = t.header,
                    n = t.auth,
                    s = (t.mobile, this.props.content, this.props.game);
                  try {
                    e = this.props.get_wallet.show;
                  } catch (l) {}
                  var i = Ft,
                    o = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "page-wrapper" },
                      r.a.createElement(
                        "div",
                        {
                          className: "page-content container py-1 px-1",
                          id: "page-content",
                        },
                        a,
                        r.a.createElement(
                          "div",
                          { className: "m-0 p-0 show-mobile" },
                          r.a.createElement($t, { mobile: this.state.mobile })
                        ),
                        e &&
                          r.a.createElement(Rt, {
                            t: o,
                            uid: this.props.get_wallet.uid,
                          }),
                        !0 === n &&
                          r.a.createElement(wt, { t: o, justModal: "true" }),
                        r.a.createElement(
                          "div",
                          { className: " row m-0 p-0 mb-1" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "col-md-8 pl-1 pr-1  no-padding-on-mobile",
                            },
                            r.a.createElement(
                              "div",
                              { className: " row m-0 p-0 mb-2" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-md-7 m-0 p-0 hide-mobile pr-1",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "content-section  h-100" },
                                  r.a.createElement(zt, {
                                    mobile: this.state.mobile,
                                  }),
                                  r.a.createElement(Yt, {
                                    game: "crash",
                                    t: this.props.t,
                                  })
                                )
                              ),
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-md-5 m-0 py-0 pr-0 pl-1 gamer",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "content-section p-2" },
                                  r.a.createElement(ca, {
                                    mobile: this.state.mobile,
                                    token: this.state.token,
                                    isLogged: this.state.isLogged,
                                  })
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "banner-wrap mb-2 " },
                              r.a.createElement(
                                "div",
                                {
                                  id: "carouselExampleControls",
                                  className: "carousel slide",
                                  "data-ride": "carousel",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "carousel-inner" },
                                  r.a.createElement(
                                    "div",
                                    { className: "carousel-item active" },
                                    r.a.createElement("img", {
                                      className: "d-block w-100",
                                      src: "/assets/images/banners/banner1.png",
                                    })
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "carousel-item" },
                                    r.a.createElement("img", {
                                      className: "d-block w-100",
                                      src: "/assets/images/banners/banner2.png",
                                    })
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "carousel-item" },
                                    r.a.createElement("img", {
                                      className: "d-block w-100",
                                      src: "/assets/images/banners/banner3.png",
                                    })
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "carousel-item" },
                                    r.a.createElement("img", {
                                      className: "d-block w-100",
                                      src: "/assets/images/banners/banner4.png",
                                    })
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "carousel-item" },
                                    r.a.createElement("img", {
                                      className: "d-block w-100",
                                      src: "/assets/images/banners/banner5.png",
                                    })
                                  )
                                ),
                                r.a.createElement(
                                  "a",
                                  {
                                    className: "carousel-control-prev",
                                    href: "#carouselExampleControls",
                                    role: "button",
                                    "data-slide": "prev",
                                  },
                                  r.a.createElement("span", {
                                    className: "carousel-control-prev-icon",
                                    "aria-hidden": "true",
                                  }),
                                  r.a.createElement(
                                    "span",
                                    { className: "sr-only" },
                                    "Previous"
                                  )
                                ),
                                r.a.createElement(
                                  "a",
                                  {
                                    className: "carousel-control-next",
                                    href: "#carouselExampleControls",
                                    role: "button",
                                    "data-slide": "next",
                                  },
                                  r.a.createElement("span", {
                                    className: "carousel-control-next-icon",
                                    "aria-hidden": "true",
                                  }),
                                  r.a.createElement(
                                    "span",
                                    { className: "sr-only" },
                                    "Next"
                                  )
                                )
                              )
                            ),
                            r.a.createElement(Sa, {
                              t: this.props.t,
                              className: "d-sm-none",
                            })
                          ),
                          r.a.createElement(
                            "div",
                            {
                              className: "col-lg-4 col-md-4 col-sm-0 pl-1 pr-1",
                            },
                            r.a.createElement(Ka, {
                              engine: i,
                              t: this.props.t,
                              game: s,
                            })
                          )
                        ),
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "row footer-card m-0 p-0 mt-1 text-lightt justify-content-center",
                          },
                          r.a.createElement(
                            "div",
                            { className: "col-md-8 mb-2" },
                            r.a.createElement(
                              "div",
                              { className: " " },
                              "Must be 18+ to register or play. Please gamble responsibly. Licensed and authorised by BCLB under license No. 0000619"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        za = Object(d.b)(function (e) {
          return { get_wallet: e.items.get_wallet };
        }, null)(Ha),
        Ga = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "body",
                      { className: "py-5 ovh" },
                      r.a.createElement(
                        "div",
                        { className: "py-3 text-center" },
                        r.a.createElement(
                          "div",
                          { className: "container d-flex flex-column" },
                          r.a.createElement(
                            "div",
                            { className: "row my-auto" },
                            r.a.createElement(
                              "div",
                              { className: "col-md-12 text-white" },
                              r.a.createElement("img", {
                                src: "/assets/images/illustrations/404.svg",
                                className: "img-fluid",
                                alt: "",
                              }),
                              r.a.createElement(
                                "h2",
                                { className: "mb-4 py-5" },
                                "[ Page Not Found or You are not allowed to view this page ]"
                              ),
                              r.a.createElement(
                                b.b,
                                {
                                  to: "/",
                                  className:
                                    "btn btn-soft-danger btn-lg font-17 mt-4",
                                },
                                r.a.createElement("i", {
                                  className: "mdi mdi-play",
                                }),
                                " Go Back to Home"
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ya = a(61),
        qa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            return Object(l.a)(this, a), t.call(this, e);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Ya.a,
                      null,
                      r.a.createElement(
                        "title",
                        null,
                        "Support - Original Crash Game"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        style: {
                          background: "url(/assets/images/mountain.png)",
                          backgroundSize: "cover",
                        },
                        className: "p-4 wheel-content",
                      },
                      r.a.createElement(
                        "div",
                        { className: "m-auto text-center" },
                        r.a.createElement(
                          "h2",
                          { className: "text-center mb-4" },
                          "Support"
                        ),
                        r.a.createElement(
                          "a",
                          {
                            href: e("support_skype"),
                            className: "text-secondary",
                            target: "_blank",
                          },
                          r.a.createElement("img", {
                            className: "img-fluid hvs",
                            src: "/assets/images/skype.png",
                            width: "150px",
                          })
                        ),
                        r.a.createElement(
                          "p",
                          { className: "text-center text-white mt-4" },
                          "You can stay in touch with us via Skype at 24/7"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Xa = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleShow = function () {
                n.setState({ show: !0, effect: "zoomIn" });
              }),
              (n.handleClose = function () {
                n.setState({ show: !1, effect: "zoomOut" });
              }),
              (n.state = { show: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "button",
                      {
                        onClick: this.handleShow,
                        className:
                          "btn btn-white btn-sm text-dark font-weight-bold",
                      },
                      r.a.createElement("i", {
                        className:
                          "mdi mdi-alert-circle-outline align-middle font-14 mr-1",
                      }),
                      "Affiliate Terms"
                    ),
                    r.a.createElement(
                      y.a,
                      {
                        size: "lg",
                        backdrop: "static",
                        centered: !0,
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "affiliate-lg-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        { className: "font-light" },
                        "Affiliate Terms",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "modal-reader" },
                        r.a.createElement(
                          "p",
                          { className: "text-white font-light mb-2 font-14" },
                          "The website is supported by the ",
                          P.b,
                          " prediction platform. Platform games include crash, dice and so on.",
                          r.a.createElement("br", null),
                          "By completing the ",
                          P.b,
                          ' Affiliate Program (the "Affiliate Program") application and clicking "I agree to the Terms and Conditions (the \u201cTerms\u201d)\u201d within the registration form, you (hereinafter the "Affiliate") hereby agree to abide by all the terms and conditions set out in this Agreement. The commission structure of the "commission rules" is also an integral part of this agreement. ',
                          P.b,
                          " reserves the right to amend, alter, delete or extend any provisions of this Agreement, at any time and at its sole discretion, without giving any advance notice to the Affiliate subject to the Terms set out in this Agreement. You hereby agree to:",
                          r.a.createElement("br", null),
                          "1. Participate in the Affiliate Program",
                          r.a.createElement("br", null),
                          "2. Use of the ",
                          P.b,
                          " affiliate website and/or ",
                          P.b,
                          " marketing tools (as hereafter defined).",
                          r.a.createElement("br", null),
                          "3. The condition that the acceptance of any affiliate commissions from ",
                          P.b,
                          " confirms your irrevocable acceptance of this Agreement and any modifications thereto.",
                          r.a.createElement("br", null),
                          "Therefore you shall be obliged to continuously comply with the Terms of this Agreement as well as to comply with the General Terms and Conditions and Privacy Policy of the website ",
                          P.b,
                          ", as well as with any other rules and/or guidelines brought forward from time to time. An Agreement between the Company and the Affiliate comes into effect on the date the affiliate application is approved.",
                          r.a.createElement("br", null),
                          "1. Purpose",
                          r.a.createElement("br", null),
                          '1.1. The Affiliate maintains and operates one or more websites on the Internet (hereinafter collectively referred to as "the Website"), and/or refers potential customers through other channels.',
                          r.a.createElement("br", null),
                          "1.2. This Agreement governs the terms and conditions which are related to the promotion of the website ",
                          P.b,
                          ' by the Affiliate, hereinafter referred to as "',
                          P.b,
                          '", whereby the Affiliate will be paid a commission as defined in this Agreement depending on the traffic sent to ',
                          P.b,
                          " and the terms of this Agreement.",
                          r.a.createElement("br", null),
                          "1.3. The definition of the term Net Gaming Revenue can be found within Article 20 of this Agreement. In case of an introduction of another product, or group of products in the future, ",
                          P.b,
                          " reserves the right to use an individual definition of the term Net Gaming Revenue for each product.",
                          r.a.createElement("br", null),
                          "2. Acceptance of an Affiliate",
                          r.a.createElement("br", null),
                          "2.1. The Company reserves the right to refuse any registration in its sole and absolute discretion.",
                          r.a.createElement("br", null),
                          "3. Qualifying Conditions",
                          r.a.createElement("br", null),
                          "3.1. The Affiliate hereby warrants that he/she:",
                          r.a.createElement("br", null),
                          "a) Is of legal age in the applicable jurisdiction in order to agree to and to enter into an Agreement.",
                          r.a.createElement("br", null),
                          "b) Is competent and duly authorized to enter into binding Agreements.",
                          r.a.createElement("br", null),
                          "c) Is the proprietor of all rights, licences and permits to market, promote and advertise ",
                          P.b,
                          " in accordance with the provisions of this Agreement.",
                          r.a.createElement("br", null),
                          "d) Will comply with all applicable rules, laws and regulations in correlation with the promotion of ",
                          P.b,
                          ".",
                          r.a.createElement("br", null),
                          "e) Fully understands and accepts the Terms of the Agreement.",
                          r.a.createElement("br", null),
                          "4. Responsibilities and Obligations of the Company",
                          r.a.createElement("br", null),
                          "4.1. The Company shall provide the Affiliate with all required information and marketing material for the implementation of the tracking link.",
                          r.a.createElement("br", null),
                          "4.2. The Company shall administrate the turnover generated via the tracking links, record the revenue and the total amount of commission earned via the link, provide the Affiliate with commission statistics, and handle all customer services related to the business. A unique tracking identification code will be assigned to all referred customers.",
                          r.a.createElement("br", null),
                          "4.3. The Company shall pay the Affiliate the amount due depending on the traffic generated subject to the Terms of this Agreement.",
                          r.a.createElement("br", null),
                          "5. Responsibilities and Obligations of the Affiliate",
                          r.a.createElement("br", null),
                          "5.1. The Affiliate hereby warrants:",
                          r.a.createElement("br", null),
                          "a) To use its best efforts to actively and effectively advertise, market and promote ",
                          P.b,
                          " as widely as possible in order to maximize the benefit to the parties and to abide by the guidelines of the Company as they may be brought forward from time to time and/or as being published online.",
                          r.a.createElement("br", null),
                          "b) To market and refer potential players to ",
                          P.b,
                          " at its own cost and expense. The Affiliate will be solely responsible for the distribution, content and manners of its marketing activities. All of the Affiliate's marketing activities must be professional, proper and lawful under applicable laws and must be in accordance with this Agreement.",
                          r.a.createElement("br", null),
                          "c) To use only the tracking link provided within the scope of the affiliate program, otherwise no guarantee whatsoever can be given for proper registration and sales accounting. Also, not to change or modify in any way any link or marketing material without prior written authorization from the Company.",
                          r.a.createElement("br", null),
                          "d) To be responsible for the development, operation and maintenance of its website as well as for all material appearing on its website.",
                          r.a.createElement("br", null),
                          "5.2. The Affiliate hereby warrants:",
                          r.a.createElement("br", null),
                          "a) That it will not perform any act which is libelous, discriminatory, obscene, unlawful or otherwise unsuitable or which contains sexually explicit, pornographic, obscene or graphically violent materials.",
                          r.a.createElement("br", null),
                          "b) That it will not actively target any person who is under the legal age for gambling.",
                          r.a.createElement("br", null),
                          "c) That it will not actively target any jurisdiction where gambling and the promotion thereof is illegal.",
                          r.a.createElement("br", null),
                          "d) That it will not generate traffic to ",
                          P.b,
                          " by illegal or fraudulent activity, particularly but not limited to:",
                          r.a.createElement("br", null),
                          "I. Sending spam.",
                          r.a.createElement("br", null),
                          "II. Incorrect metatags.",
                          r.a.createElement("br", null),
                          "]III. Registering as a player or making deposits directly or indirectly to any player account through his/her tracker(s) for their own personal use and/or the use of its relatives, friends, employees or other third parties, or in any other way attempt to artificially increase the commission payable or to otherwise defraud the Company. Violation of this provision shall be deemed to be fraud.",
                          r.a.createElement("br", null),
                          "e) That it will not present its website in such a way that it might evoke any risk of confusion with ",
                          P.b,
                          " and/or the Company and or convey the impression that the website of the contracting party is partly or fully originated with ",
                          P.b,
                          " and/or the Company.",
                          r.a.createElement("br", null),
                          "f) Without prejudice to the marketing material as may be forwarded by the Company and/or made available online through the website http://",
                          P.b,
                          "/ the affiliate may not use ",
                          P.b,
                          " or other terms, trademarks and other intellectual property rights that are vested in the Company unless the Company consents to such use in writing.",
                          r.a.createElement("br", null),
                          "6. Payment",
                          r.a.createElement("br", null),
                          "6.1. The Company agrees to pay the Affiliate a commission based on the Game bet amount generated from new customers referred by the Affiliate\u2019s website and/or other channel. New customers are those customers of the Company who do not yet have a gaming account and who access the Website via the tracking link and who properly register and make bitcoin transfers at least equivalent to the minimum deposit into their ",
                          P.b,
                          " betting account. The commission shall be deemed to be inclusive of value added tax or any other tax if applicable.",
                          r.a.createElement("br", null),
                          '6.2. The commission shall be a percentage of the Game bet amount in accordance with what is set out in the commission structures for the particular product. The calculation is product specific and it is set out in every product-specific commission structure. (see "commission rules" for details)',
                          r.a.createElement("br", null),
                          "6.3. Users can withdraw commissions from the agent system at any time. The commissions will be withdrawn into the platform wallet. Users can also withdraw the platform wallet to any address at any time. (you can check the Commission extraction in the agent system and view transaction records in the platform wallet).",
                          r.a.createElement("br", null),
                          "6.4. The commissions will be collected in digital currency and will only be received on the platform wallet.When applying for Withdraw, you must submit the correct wallet address on the \u201cWithdraw\u201d page.If there is an error in calculating the commission, the company has the right to amend the amount at any time and immediately settle the underpaid difference to the agent or recover the overpaid balance from the agent.",
                          r.a.createElement("br", null),
                          "6.5. Agent Withdraw commission by the Affiliate shall be deemed to be full and the final settlement of the balance due for the period indicated.",
                          r.a.createElement("br", null),
                          "6.6. If the Affiliate disagrees with the balance due as reported, it shall within a period of seven (7) days send an email to the Company to admin@",
                          P.b,
                          " and indicate the reasons for the dispute. Or contact customer service through Telegram .Failure to send an email Or contact customer service through Telegram within the prescribed time limit shall be deemed to be considered as an irrevocable acknowledgment of the balance due for the period indicated.",
                          r.a.createElement("br", null),
                          "6.7. May delay the Withdraw request through the agent for up to sixty (60) days, while it investigates and verifies that the relevant transactions comply with the provisions of the Terms.",
                          r.a.createElement("br", null),
                          "6.8. No payment shall be due when the traffic generated is illegal or contravenes any provision of these Terms.",
                          r.a.createElement("br", null),
                          "6.9. The Affiliate agrees to return all commissions received based on fraudulent or falsified transactions, plus all costs for legal causes or actions that may be brought against the Affiliate to the fullest extent of the law.",
                          r.a.createElement("br", null),
                          "6.10. For the sake of clarity the parties specifically agree that upon termination of this Agreement by either party, In addition to the previous unsettled Commissions, the Commissions of the agent will no longer be settled.",
                          r.a.createElement("br", null),
                          "6.11. The Affiliate shall be exclusively responsible for the payment of any and all taxes, levies, fees, charges and any other money payable or due both locally and abroad (if any) to any tax authority, department or other competent entity by the Affiliate as a result of the commission generated under this Agreement. The Company shall in no manner whatsoever be held liable for any amounts unpaid but found to be due by the Affiliate and the Affiliate hereby indemnifies the Company in that regard.",
                          r.a.createElement("br", null),
                          "7. Termination",
                          r.a.createElement("br", null),
                          "7.1. This Agreement may be terminated by either party by giving a thirty (30) day written notification to the other party. Written notification may be given by email.",
                          r.a.createElement("br", null),
                          "7.2. The contracting parties hereby agree that upon termination of this Agreement:",
                          r.a.createElement("br", null),
                          "a) The Affiliate must remove all references to ",
                          P.b,
                          " from the Affiliate's websites and/or other marketing channels and communications, irrespective of whether the communications are commercial or non-commercial.",
                          r.a.createElement("br", null),
                          "b) All rights and licenses granted to the Affiliate under this Agreement shall immediately terminate and all rights shall revert to the respective licensors, and the Affiliate will cease the use of any trademarks, service marks, logos and other designations vested in the Company.",
                          r.a.createElement("br", null),
                          "c) The Affiliate will be entitled only to those earned and unpaid commissions as of the effective date of termination;however provided, the Company may withhold the Affiliate's final payment for a reasonable time to ensure that the correct amount is paid. The Affiliate will not be eligible to earn or receive commissions after this termination date.",
                          r.a.createElement("br", null),
                          "d) If this Agreement is terminated by the Company on the basis of the Affiliate's breach, the Company shall be entitled to withhold the Affiliate\u2019s earned but unpaid commissions as of the termination date as collateral for any claim arising from such a breach. It is further specified that termination by the Company due to a breach by the Affiliate of any of the clauses in this Agreement shall not require a notice period and such termination shall have immediate effect upon simple notification by the Company to the Affiliate.",
                          r.a.createElement("br", null),
                          "e) The Affiliate must return to the Company any and all confidential information (and all copies and derivations thereof) in the Affiliate's possession, custody and control.",
                          r.a.createElement("br", null),
                          "f) The Affiliate will release the Company from all obligations and liabilities occurring or arising after the date of such a termination, except with respect to those obligations that by their nature are designed to survive termination. Termination will not relieve the Affiliate from any liability arising from any breach of this Agreement, which occurred prior to termination and/or to any liability arising from any breach of confidential information even if the breach arises at any time following the termination of this Agreement. The Affiliate\u2019s obligation of confidentiality towards the Company shall survive the termination of this Agreement.",
                          r.a.createElement("br", null),
                          '7.3. Automatic termination by us if your account is inactive. If your Affiliate Account is inactive, your Agreement and participation in the Affiliate Network will automatically terminate. In this Section, "Inactive" means where you have not registered new Real Money Players for one hundred and eighty (180) days or more;. Where automatic termination occurs, we will notify you that your Fees will be frozen. If we do not receive any response from you within one hundred and eighty (180) days, any funds remaining within your Affiliate Account will revert to us.',
                          r.a.createElement("br", null),
                          "8. Warranties",
                          r.a.createElement("br", null),
                          '8.1. The Affiliate expressly acknowledges and agrees that the use of the Internet is at its own risk and that this affiliate program is provided "as is" and "as available" without any warranties or conditions whatsoever, even if expressed or implied. No guarantee is made that it will make access to its website possible at any particular time or any particular location.',
                          r.a.createElement("br", null),
                          "8.2. The Company shall in no event be liable to the Affiliate or anyone else for any inaccuracy, error or omission in, or loss, injury or damage caused in whole or in part by failures, delays or interruptions of the ",
                          P.b,
                          " website or the affiliate program.",
                          r.a.createElement("br", null),
                          "9. Indemnification",
                          r.a.createElement("br", null),
                          "9.1. The Affiliate agrees to defend, indemnify and hold the Company and its affiliates, successors, officers, employees, agents, directors, shareholders and attorneys, free and harmless from and against any and all claims and liabilities, including reasonable attorneys' and experts' fees, related to or arising from:",
                          r.a.createElement("br", null),
                          "a) Any breach of the Affiliate's representations, warranties or covenants under this Agreement.",
                          r.a.createElement("br", null),
                          "b) The Affiliate's use (or misuse) of the marketing materials.",
                          r.a.createElement("br", null),
                          "c) All conduct and activities occurring under the Affiliate's user ID and password.",
                          r.a.createElement("br", null),
                          "d) Any defamatory, libelous or illegal material contained within the Affiliate\u2019s website or as part of the Affiliate's information and data.",
                          r.a.createElement("br", null),
                          "e) Any claim or contention that the Affiliate\u2019s website or the Affiliate's information and data infringes any third party's patent, copyright, trademark, or other intellectual property rights or violates any third party's rights of privacy or publicity.",
                          r.a.createElement("br", null),
                          "f) Third party access or use of the Affiliate\u2019s website or to the Affiliate's information and data.",
                          r.a.createElement("br", null),
                          "g) Any claim related to the Affiliate website.",
                          r.a.createElement("br", null),
                          "h) Any violation of this Agreement.",
                          r.a.createElement("br", null),
                          "9.2. The Company reserves the right to participate, at its own expense in the defense of any matter.",
                          r.a.createElement("br", null),
                          "10. Company Rights",
                          r.a.createElement("br", null),
                          "10.1. In order to comply with company or ",
                          P.b,
                          " policies, and to protect the company or ",
                          P.b,
                          "'s interests, the company or ",
                          P.b,
                          " can reject any player or close the player account.",
                          r.a.createElement("br", null),
                          "10.2. The Company may refuse any applicant and/or may close any Affiliate\u2019s account if it is necessary to comply with the Company's policy and/or protect the interest of the Company. If the Affiliate is in breach of this Agreement or the Company\u2019s Terms or other rules, policies and guidelines of the Company, the Company may besides closing the Affiliate\u2019s account take any other steps in law to protect its interests.",
                          r.a.createElement("br", null),
                          "11. Commission structure",
                          r.a.createElement("br", null),
                          '11.1. The commission settled to the agent is a percentage of the game betting amount.The exact commission structure is part of this agreement. For details, see the "commission rules" clause.In this case, the Commission is withdrawn to the player\'s platform wallet (digital currency), but not directly to other addresses.',
                          r.a.createElement("br", null),
                          "12. Assignment",
                          r.a.createElement("br", null),
                          "12.1. The Affiliate may not assign this Agreement, by operation of law or otherwise, without obtaining the prior written consent of the Company. In the event that the affiliate acquires or otherwise obtains control of another affiliate of ",
                          P.b,
                          ", then accounts will coexist on individual terms.",
                          r.a.createElement("br", null),
                          "12.2. The Company may assign this Agreement, by operation of the law or otherwise, at any time without obtaining the prior consent of the Affiliate.",
                          r.a.createElement("br", null),
                          "13. Non-Waiver",
                          r.a.createElement("br", null),
                          "13.1. The Company's failure to enforce the Affiliate's adherence to the Terms outlined in this Agreement shall not constitute a waiver of the right of the Company to enforce said terms at any time.",
                          r.a.createElement("br", null),
                          "14. Force Majeure",
                          r.a.createElement("br", null),
                          "14.1. Neither party shall be liable to the other for any delay or failure to perform its obligations under this Agreement if such delay or failure arises from a cause beyond the reasonable control of and is not the fault of such party, including but not limited to labour disputes, strikes, industrial disturbances, acts of God, acts of terrorism, floods, lightning, utility or communications failures, earthquakes or other casualty. If a force majeure event occurs, the non-performing party is excused from whatever performance is prevented by the force majeure event to the extent prevented. Provided that, if the force majeure event subsists for a period exceeding thirty (30) days then either party may terminate the Agreement without notice.",
                          r.a.createElement("br", null),
                          "15. Relationship of the Parties",
                          r.a.createElement("br", null),
                          "15.1. Nothing contained in this Agreement, nor any action taken by any party to this Agreement, shall be deemed to constitute either party (or any of such party's employees, agents, or representatives) an employee, or legal representative of the other party, nor to create any partnership, joint venture, association, or syndication among or between the parties, nor to confer on either party any express or implied right, power or authority to enter into any Agreement or commitment on behalf of (nor to impose any obligation upon) the other party.",
                          r.a.createElement("br", null),
                          "16. Severability/Waiver",
                          r.a.createElement("br", null),
                          "16.1. Whenever possible, each provision of this Agreement shall be interpreted in such a manner as to be effective and valid under applicable law but, if any provision of this Agreement is held to be invalid, illegal or unenforceable in any respect, such provision will be ineffective only to the extent of such invalidity, or unenforceability, without invalidating the remainder of this Agreement. No waiver will be implied from conduct or failure to enforce any rights and must be in writing to be effective.",
                          r.a.createElement("br", null),
                          "17. Confidentiality",
                          r.a.createElement("br", null),
                          "17.1. All information, including but not limited to business and financial, lists of customers and buyers, as well as price and sales information and any information relating to products, records, operations, business plans, processes, product information, business know-how or logic, trade secrets, market opportunities and personal data of the Company shall be treated confidentially. Such information must not be used for own commercial or other purposes or divulged to any person or third party neither directly nor indirectly unless prior explicit and written consent has been provided by the Company. This provision shall survive the termination of this Agreement.",
                          r.a.createElement("br", null),
                          "17.2. The Affiliate obliges himself/herself not to use the confidential information for any purpose other than the performance of its obligations under this Agreement.",
                          r.a.createElement("br", null),
                          "18. Changes to this Agreement",
                          r.a.createElement("br", null),
                          "18.1. The Company reserves the right to amend, alter, delete or add to any of the provisions of this Agreement, at any time and at its sole discretion, without giving any advance notice to the Affiliate subject to the Terms set out in this Agreement. Any such changes will be published on ",
                          P.b,
                          ".",
                          r.a.createElement("br", null),
                          "18.2. In case of any discrepancy between the meanings of any translated versions of this Agreement, the English language version shall prevail.",
                          r.a.createElement("br", null),
                          "19. Trademarks",
                          r.a.createElement("br", null),
                          "19.1. Nothing contained in this Agreement will grant either party any right, title or interest in the trademarks, trade names, service marks or other intellectual property rights [hereinafter referred to simply as \u2018Marks\u2019] of the other party. At no time during or after the term will either party attempt or challenge or assist or allow others to challenge or to register or to attempt to register the Marks of the other party or of any company within the group of companies of the other party. Provided also that neither of the parties will register nor attempt to register any Mark which is basically similar to and/or confusingly similar to any Mark which belongs to the other party or to any company contained within the other party\u2019s group of companies.",
                          r.a.createElement("br", null)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Va = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).makeList = function (e) {
                n.setState({ loading: !1, list: e });
              }),
              (n.state = { loading: !0, list: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  Object(P.A)(1700).then(function () {
                    e.setState({ loading: !1 });
                  }),
                    q.a.emit(
                      X.a.MY_AFF,
                      Object(P.m)({ token: T.a.getKey("token") })
                    ),
                    q.a.on(X.a.MY_AFF, function (t) {
                      return e.makeList(t);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.list.map(function (e, t) {
                    return r.a.createElement(Za, { key: t, row: e });
                  });
                  return r.a.createElement(
                    "div",
                    { className: "table-responsive" },
                    this.state.loading
                      ? r.a.createElement(
                          "div",
                          { className: "text-center" },
                          r.a.createElement("div", {
                            class: "spinner-border text-info my-3",
                            role: "status",
                          })
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          0 === e.length
                            ? r.a.createElement(
                                r.a.Fragment,
                                null,
                                "You have not introduced anyone yet"
                              )
                            : r.a.createElement(
                                ua.a,
                                { className: "mb-2" },
                                r.a.createElement(
                                  "thead",
                                  null,
                                  r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement("th", null, "#"),
                                    r.a.createElement("th", null, "Username"),
                                    r.a.createElement("th", null, "Earned"),
                                    r.a.createElement("th", null, "Date")
                                  )
                                ),
                                r.a.createElement("tbody", null, e)
                              )
                        )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Za = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "tr",
                    null,
                    r.a.createElement("td", null, "1"),
                    r.a.createElement("td", null, "2"),
                    r.a.createElement("td", null, "3"),
                    r.a.createElement("td", null, "4")
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ja = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                token: T.a.getKey("token") ? T.a.getKey("token") : null,
                logged: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  null !== this.state.token && this.setState({ logged: !0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.logged;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Ya.a,
                      null,
                      r.a.createElement(
                        "title",
                        null,
                        "Affiliate - Original Crash Game"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        style: {
                          background:
                            "rgb(108 108 229) url(/assets/images/mountain.png)",
                          backgroundSize: "cover",
                        },
                        className: "p-4 wheel-content",
                      },
                      r.a.createElement(Xa, null),
                      r.a.createElement(
                        "h2",
                        {
                          className:
                            "text-center text-upper text-warning font-weight-bold",
                        },
                        "Affiliate"
                      ),
                      r.a.createElement(
                        "p",
                        { className: "text-center text-upper text-white" },
                        "Invite your friends to get free coins."
                      ),
                      r.a.createElement(
                        v.a,
                        null,
                        r.a.createElement(
                          E.a,
                          { sm: 12, xl: 5, md: 5, className: "m-auto" },
                          r.a.createElement(
                            _.a,
                            null,
                            r.a.createElement(
                              _.a.Body,
                              {
                                className: "rounded text-center",
                                style: { background: "rgb(108 108 229)" },
                              },
                              r.a.createElement(
                                "label",
                                { className: "text-white text-upper" },
                                "Your Link"
                              ),
                              e
                                ? r.a.createElement("input", {
                                    type: "text",
                                    value: P.f + "/aff/" + this.state.token,
                                    className: "form-control",
                                    style: { background: "#47478e" },
                                  })
                                : r.a.createElement("input", {
                                    type: "text",
                                    value: "Please login to see your link.",
                                    className: "form-control",
                                    style: { background: "#47478e" },
                                  })
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      v.a,
                      null,
                      r.a.createElement(
                        E.a,
                        { sm: 12, xl: 12, md: 12, className: "mx-auto mt-3" },
                        r.a.createElement(
                          _.a,
                          null,
                          r.a.createElement(
                            _.a.Body,
                            null,
                            e
                              ? r.a.createElement(Va, null)
                              : r.a.createElement(
                                  "div",
                                  { className: "text-center" },
                                  "[ Login to see your stats ]"
                                )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        $a = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { token: T.a.getKey("token") }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  if (null === this.state.token) {
                    if (this.props.params) {
                      var e = this.props.params.pathname.replace("/aff/", "");
                      e &&
                        (T.a.setKey("aff", e),
                        this.props.history.push("/register"),
                        console.log(e));
                    }
                  } else this.props.history.push("/");
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(r.a.Fragment, null);
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Qa = a(392),
        en = a(201),
        tn = a.n(en),
        an = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = {
                page: 1,
                lastPage: !1,
                loading: !1,
                result: !1,
                coins: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.setState({
                    name: this.props.name,
                    token: this.props.token,
                  }),
                    q.a.on(X.a.USER_CHART, function (t) {
                      return e.getChart(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  var a = this;
                  e.chart_coin &&
                    Object(P.A)(700).then(function () {
                      a.renderChart(a.props);
                    });
                },
              },
              {
                key: "getChart",
                value: function (e) {
                  var t = this,
                    a = e.data;
                  if (null !== document.querySelector("#userChart")) {
                    if (P.i.isUndefined(a))
                      return (document.querySelector("#userChart").innerText =
                        "[ There is no data ]");
                    document.querySelector("#userChart").innerText = "";
                  }
                  0 === a.length
                    ? this.setState({ result: !1 })
                    : this.setState({ result: !0 });
                  var n = [],
                    r = [],
                    s = [],
                    i = [],
                    o = [];
                  return a
                    ? "undefined" === a || a.length < 1 || 0 === a.length
                      ? null
                      : P.i.isArray(a)
                      ? (a.forEach(function (e, a) {
                          e < 1
                            ? t.setState({ lastPage: !0 })
                            : t.setState({ lastPage: !1 }),
                            s.push(null != e.amount ? e.amount : 0),
                            r.push(null != e.gid ? e.gid : 0),
                            i.push(
                              null != e.profit ? P.i.toNumber(e.profit) : 0
                            ),
                            o.push(e.created ? e.created : 0),
                            n.push(e.coin);
                        }),
                        this.renderChart({
                          full: a,
                          ids: r,
                          coin: n,
                          dates: o,
                          bets: s,
                          profit: i,
                        }),
                        void this.setState({ loading: !1 }))
                      : null
                    : null;
                },
              },
              {
                key: "showGame",
                value: function (e, t) {
                  e.forEach(function (e, a) {
                    parseFloat(e.gid) === parseFloat(t) &&
                      P.d.emit("single_game_modal", { data: e });
                  });
                },
              },
              {
                key: "renderChart",
                value: function (e) {
                  var t = e.ids,
                    a = e.dates,
                    n = e.bets,
                    r = e.profit,
                    s = (e.game, e.coin),
                    i = e.full,
                    o = this;
                  P.d.emit("user_chart_modal"),
                    Object(P.A)(100).then(function () {
                      if (null !== document.querySelector("#loadUserChart")) {
                        if (
                          ((document.querySelector("#loadUserChart").innerHTML =
                            ""),
                          null === document.querySelector("#loadUserChart"))
                        )
                          return;
                        return tn.a.chart("loadUserChart", {
                          chart: {
                            backgroundColor: "transparent",
                            type: "spline",
                            scrollablePlotArea: {
                              minWidth: 200,
                              scrollPositionX: 0,
                            },
                          },
                          title: { text: "" },
                          xAxis: { categories: t, allowDecimals: !1 },
                          yAxis: { title: !1 },
                          tooltip: {
                            shared: !1,
                            useHTML: !0,
                            headerFormat: "<small>{series.key}</small>",
                            formatter: function () {
                              var e =
                                0 === r[this.point.x]
                                  ? "text-danger"
                                  : "text-success";
                              return (
                                "Bet: <b>" +
                                Object(P.o)(n[this.point.x]) +
                                " " +
                                P.i.upperCase(s[this.point.x]) +
                                "</b>  <br/>  Profit: <b class='" +
                                e +
                                "'>" +
                                Object(P.o)(r[this.point.x]) +
                                "  " +
                                P.i.upperCase(s[this.point.x]) +
                                "</b> <br/> Date: <b>" +
                                Object(P.n)(a[this.point.x]) +
                                "</b> <br/> ID: <b>" +
                                t[this.point.x] +
                                "</b>"
                              );
                            },
                            borderColor: "#CCC",
                          },
                          plotOptions: {
                            series: {
                              label: { connectorAllowed: !1 },
                              cursor: "pointer",
                              point: {
                                events: {
                                  click: function (e) {
                                    o.showGame(i, this.category);
                                  },
                                },
                              },
                              marker: { enabled: !1 },
                            },
                          },
                          series: [{ data: r }],
                          credits: { enabled: !1 },
                          legend: { enabled: !1 },
                          responsive: {
                            rules: [
                              {
                                condition: { maxWidth: 200 },
                                chartOptions: {
                                  legend: {
                                    layout: "horizontal",
                                    align: "center",
                                    verticalAlign: "bottom",
                                  },
                                },
                              },
                            ],
                          },
                        });
                      }
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.result,
                    this.state.result &&
                      r.a.createElement(
                        "p",
                        { className: "text-center text-warning" },
                        "Click on each point to see game info"
                      )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        nn = Object(d.b)(function (e) {
          return { chart_coin: e.items.chart_coin };
        }, {})(an),
        rn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).back = function (e) {
                n.setState({ openedChart: !1 });
              }),
              (n.showChart = function (e) {
                n.setState({ showChart: !n.state.showChart }),
                  n.getChart("crash");
              }),
              (n.handleShowTip = function () {
                if (null === T.a.getKey("token"))
                  return Object(P.y)(
                    "Please Login to use this Option",
                    "warning",
                    "top-center"
                  );
                P.d.emit("force_modal_tip");
              }),
              (n.toggleMedalView = function () {
                n.setState({ medalView: !n.state.medalView });
              }),
              (n.state = {
                loader: !0,
                showChart: !1,
                openedChart: !1,
                changeCoinLoader: !1,
                medalView: !1,
                coins: [],
                currentCoin: "btc",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  Y.forEach(function (t, a) {
                    var n = r.a.createElement(
                      M.a.Item,
                      {
                        key: a,
                        onClick: function (a) {
                          return e.selectCoin(t.preffix);
                        },
                        className: "animated slideInUp",
                      },
                      r.a.createElement(
                        "span",
                        { key: a, className: "dropdown-item" },
                        r.a.createElement("img", {
                          src: "/assets/images/" + t.image,
                          alt: "coin",
                          className: "mini-coin-8",
                        }),
                        t.preffix
                      )
                    );
                    e.setState(function (e) {
                      return { coins: [n].concat(Object(o.a)(e.coins)) };
                    });
                  });
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  var a = this;
                  Object(P.A)(100).then(function () {
                    if ("no" === e.haveData) a.setState({ loader: !0 });
                    else {
                      var t = e,
                        n = t.data,
                        s = r.a.createElement(nn, {
                          token: t.token,
                          name: t.name,
                        }),
                        i = sn(n.created),
                        o = n.profit < 0 ? "text-danger" : "text-success",
                        l = n.coin,
                        c = n.level,
                        u = t.name,
                        m = n.high_profit,
                        d = n.low_profit;
                      a.setState({
                        changeCoinLoader: !1,
                        since: i,
                        lowProfit: d,
                        highProfit: m,
                        name: u,
                        coin: l,
                        currentCoin: l,
                        level: c,
                        color: o,
                        chart: s,
                        avatar: n.avatar,
                        profit: n.profit,
                        date: n.created,
                        played: n.played,
                        wined: n.wined,
                        medal: n.medal,
                        _token: t.token,
                      }),
                        Object(P.A)(200).then(function () {
                          (P.i.isEmpty(u) && P.i.isUndefined(u)) ||
                            a.setState({ loader: !1 });
                        });
                    }
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if ("no" === this.props.haveData)
                    this.setState({ loader: !0 });
                  else {
                    var t = this.props,
                      a = t.data,
                      n = r.a.createElement(nn, {
                        token: t.token,
                        name: t.name,
                      }),
                      s = sn(a.created),
                      i = a.profit < 0 ? "text-danger" : "text-success",
                      o = a.coin,
                      l = a.level,
                      c = t.name,
                      u = a.high_profit,
                      m = a.low_profit;
                    this.setState({
                      since: s,
                      lowProfit: m,
                      highProfit: u,
                      currentCoin: o,
                      name: c,
                      coin: o,
                      level: l,
                      color: i,
                      chart: n,
                      avatar: a.avatar,
                      profit: a.profit,
                      date: a.created,
                      played: a.played,
                      wined: a.wined,
                      medal: a.medal,
                      _token: t.token,
                    }),
                      Object(P.A)(200).then(function () {
                        (P.i.isEmpty(c) && P.i.isUndefined(c)) ||
                          e.setState({ loader: !1 });
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.setChartCoin(this.state.currentCoin);
                },
              },
              {
                key: "selectCoin",
                value: function (e) {
                  this.props.setChartCoin(e),
                    this.setState({ currentCoin: e, changeCoinLoader: !0 }),
                    q.a.emit(
                      X.a.USER_INFO,
                      Object(P.m)({ name: this.props.name, coin: e, page: 1 })
                    );
                },
              },
              {
                key: "getChart",
                value: function (e) {
                  Object(P.A)(100).then(function () {
                    null !== document.querySelector("#userChart") &&
                      (document.querySelector("#userChart").innerText =
                        "[ Please Wait... ]");
                  }),
                    q.a.emit(
                      X.a.USER_CHART,
                      Object(P.m)({
                        name: this.props.name,
                        coin: this.state.currentCoin,
                        game: e,
                      })
                    ),
                    this.setState({ openedChart: !0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = (e.currentCoin, e.lowProfit),
                    a = e.highProfit,
                    n = e.name,
                    s = (e.coin, e.color),
                    i = e.chart,
                    o = e.since,
                    l = (e.avatar, e.profit),
                    c = e.date,
                    u = e._token,
                    m = e.level,
                    d = e.played,
                    h = e.wined,
                    p = e.medal;
                  P.i.isUndefined(c) || (c = c.substr(0, 10));
                  return (
                    (d = d || null),
                    (h = h || 0),
                    (p = parseInt(p)),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      this.state.loader
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              {
                                className: "text-center",
                                style: { minHeight: 500 },
                              },
                              r.a.createElement("div", {
                                class:
                                  "spinner-border text-info my-5 user-loader",
                                role: "status",
                              })
                            )
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            this.state.medalView
                              ? r.a.createElement(
                                  "div",
                                  { className: "animated fadeIn medals-view" },
                                  r.a.createElement(
                                    "div",
                                    { class: "media mb-2" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/badges/badge-2.svg",
                                      height: "60",
                                      class: "mr-3",
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body align-self-center" },
                                      r.a.createElement(
                                        "div",
                                        { class: "mb-2" },
                                        r.a.createElement(
                                          "span",
                                          { class: "badge badge-purple px-3" },
                                          "Deposit"
                                        )
                                      ),
                                      "Required Minimum 100 USD Deposit"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { class: "media mb-2" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/badges/badge-3.svg",
                                      height: "60",
                                      class: "mr-3",
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body align-self-center" },
                                      r.a.createElement(
                                        "div",
                                        { class: "mb-2" },
                                        r.a.createElement(
                                          "span",
                                          { class: "badge badge-purple px-3" },
                                          "Deposit"
                                        )
                                      ),
                                      "Required Minimum 500 USD Deposit"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { class: "media mb-2" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/badges/badge-7.svg",
                                      height: "45",
                                      class: "mr-3",
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body align-self-center" },
                                      r.a.createElement(
                                        "div",
                                        { class: "mb-2" },
                                        r.a.createElement(
                                          "span",
                                          { class: "badge badge-purple px-3" },
                                          "Deposit"
                                        )
                                      ),
                                      "Required Minimum 2000 USD Deposit"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { class: "media mb-2" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/badges/badge-6.svg",
                                      height: "60",
                                      class: "mr-3",
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body align-self-center" },
                                      r.a.createElement(
                                        "div",
                                        { class: "mb-2" },
                                        r.a.createElement(
                                          "span",
                                          { class: "badge badge-purple px-3" },
                                          "Rain"
                                        )
                                      ),
                                      "Required 10 Times Rain"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { class: "media my-2" },
                                    r.a.createElement("img", {
                                      src: "/assets/images/badges/badge-8.svg",
                                      height: "60",
                                      class: "mr-3",
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body align-self-center" },
                                      r.a.createElement(
                                        "div",
                                        { class: "mb-2" },
                                        r.a.createElement(
                                          "span",
                                          { class: "badge badge-purple px-3" },
                                          "Profit"
                                        )
                                      ),
                                      "Required 2500 USD Profit"
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "text-center" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        onClick: this.toggleMedalView,
                                        className:
                                          "btn btn-sm btn-cs-6 text-white my-1",
                                      },
                                      "Back"
                                    )
                                  )
                                )
                              : r.a.createElement(
                                  "div",
                                  { className: "animated fadeIn" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className: "user-detail text-center mb-1",
                                    },
                                    r.a.createElement("span", {
                                      className: "hatA",
                                    }),
                                    r.a.createElement("br", null),
                                    r.a.createElement(
                                      "h4",
                                      {
                                        className:
                                          "mb-0 text-white uname text-uppercase",
                                      },
                                      n
                                    ),
                                    (function (e) {
                                      for (
                                        var t = 5 - parseFloat(e),
                                          a = [],
                                          n = [],
                                          s = [],
                                          i = 0;
                                        i < t;
                                        i++
                                      )
                                        a.push(
                                          r.a.createElement("i", {
                                            className:
                                              "mdi mdi-star font-25 text-purple",
                                          })
                                        );
                                      for (i = 0; i < e; i++)
                                        n.push(
                                          r.a.createElement("i", {
                                            className:
                                              "mdi mdi-star font-30 text-success",
                                          })
                                        );
                                      return s.push(n, a), s;
                                    })(m),
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "button-items text-center mt-1",
                                      },
                                      r.a.createElement(Oe, {
                                        onModal: !0,
                                        name: n,
                                        id: u,
                                      }),
                                      this.props.name !== T.a.getKey("name") &&
                                        r.a.createElement(
                                          "button",
                                          {
                                            onClick: this.handleShowTip,
                                            className:
                                              "btn btn-cs-6 btn-xs shadow-none text-white rounded font-12 px-3 text-uppercase",
                                          },
                                          r.a.createElement("i", {
                                            className:
                                              "mdi mdi-bank-transfer font-17 align-middle",
                                          }),
                                          " Tip"
                                        )
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "details-parent" },
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        r.a.createElement(
                                          _.a,
                                          { className: "mb-1 brd15" },
                                          r.a.createElement(
                                            _.a.Body,
                                            { className: "p-1" },
                                            "Joined ",
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                              "span",
                                              { className: "num-style" },
                                              " ",
                                              c,
                                              " ",
                                              r.a.createElement(
                                                "span",
                                                {
                                                  className:
                                                    "font-11 text-grey ",
                                                },
                                                "(",
                                                o,
                                                ")"
                                              )
                                            )
                                          )
                                        )
                                      ),
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        r.a.createElement(
                                          _.a,
                                          { className: "mb-1 brd15" },
                                          r.a.createElement(
                                            _.a.Body,
                                            { className: "p-1" },
                                            "Total Profit",
                                            r.a.createElement("br", null),
                                            this.state.changeCoinLoader
                                              ? r.a.createElement(
                                                  "div",
                                                  { className: "text-center" },
                                                  r.a.createElement("div", {
                                                    class:
                                                      "spinner-border spinner-border-sm",
                                                    role: "status",
                                                  })
                                                )
                                              : r.a.createElement(
                                                  r.a.Fragment,
                                                  null,
                                                  r.a.createElement("img", {
                                                    className: "mini-coin-9",
                                                    src: "/assets/images/kes.png",
                                                  }),
                                                  r.a.createElement(
                                                    "b",
                                                    {
                                                      className:
                                                        "num-style " + s,
                                                    },
                                                    Object(P.o)(l),
                                                    " KES"
                                                  )
                                                )
                                          )
                                        )
                                      ),
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        r.a.createElement(
                                          _.a,
                                          { className: "mb-1 brd15" },
                                          r.a.createElement(
                                            _.a.Body,
                                            { className: "p-1" },
                                            "Profit All Time High ",
                                            r.a.createElement("br", null),
                                            this.state.changeCoinLoader
                                              ? r.a.createElement(
                                                  "div",
                                                  { className: "text-center" },
                                                  r.a.createElement("div", {
                                                    class:
                                                      "spinner-border spinner-border-sm",
                                                    role: "status",
                                                  })
                                                )
                                              : r.a.createElement(
                                                  r.a.Fragment,
                                                  null,
                                                  r.a.createElement("img", {
                                                    className: "mini-coin-9",
                                                    src: "/assets/images/kes.png",
                                                  }),
                                                  r.a.createElement(
                                                    "b",
                                                    {
                                                      className:
                                                        "num-style text-success",
                                                    },
                                                    Object(P.o)(a),
                                                    " KES"
                                                  )
                                                )
                                          )
                                        )
                                      ),
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        r.a.createElement(
                                          _.a,
                                          { className: "mb-1 brd15" },
                                          r.a.createElement(
                                            _.a.Body,
                                            { className: "p-1" },
                                            "Profit All Time Low ",
                                            r.a.createElement("br", null),
                                            this.state.changeCoinLoader
                                              ? r.a.createElement(
                                                  "div",
                                                  { className: "text-center" },
                                                  r.a.createElement("div", {
                                                    class:
                                                      "spinner-border spinner-border-sm",
                                                    role: "status",
                                                  })
                                                )
                                              : r.a.createElement(
                                                  r.a.Fragment,
                                                  null,
                                                  r.a.createElement("img", {
                                                    className: "mini-coin-9",
                                                    src: "/assets/images/kes.png",
                                                  }),
                                                  r.a.createElement(
                                                    "b",
                                                    {
                                                      className:
                                                        "num-style text-danger",
                                                    },
                                                    Object(P.o)(t),
                                                    " KES"
                                                  )
                                                )
                                          )
                                        )
                                      )
                                    ),
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        null !== d &&
                                          r.a.createElement(
                                            r.a.Fragment,
                                            null,
                                            r.a.createElement(
                                              _.a,
                                              { className: "mb-1 brd15" },
                                              r.a.createElement(
                                                _.a.Body,
                                                { className: "p-1" },
                                                "Total Wins",
                                                r.a.createElement("br", null),
                                                r.a.createElement(
                                                  "span",
                                                  { className: "font-15" },
                                                  h
                                                )
                                              )
                                            )
                                          )
                                      ),
                                      r.a.createElement(
                                        E.a,
                                        {
                                          lg: "6",
                                          md: "6",
                                          className: "col-6",
                                        },
                                        null !== d &&
                                          r.a.createElement(
                                            r.a.Fragment,
                                            null,
                                            r.a.createElement(
                                              _.a,
                                              { className: "mb-1 brd15" },
                                              r.a.createElement(
                                                _.a.Body,
                                                { className: "p-1" },
                                                "Total Bets",
                                                r.a.createElement("br", null),
                                                r.a.createElement(
                                                  "span",
                                                  { className: "font-15" },
                                                  d
                                                )
                                              )
                                            )
                                          )
                                      )
                                    )
                                  ),
                                  r.a.createElement(
                                    v.a,
                                    null,
                                    r.a.createElement(
                                      E.a,
                                      { sm: 12 },
                                      this.state.loader
                                        ? r.a.createElement(
                                            r.a.Fragment,
                                            null,
                                            r.a.createElement(
                                              "div",
                                              { className: "text-center" },
                                              r.a.createElement("div", {
                                                class:
                                                  "spinner-border text-info my-3",
                                                role: "status",
                                              })
                                            )
                                          )
                                        : r.a.createElement(
                                            r.a.Fragment,
                                            null,
                                            r.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "animated slideI8nDown my-1",
                                              },
                                              r.a.createElement(
                                                "ul",
                                                {
                                                  className:
                                                    "list-inline ico-socials text-center mb-0",
                                                },
                                                this.state.loader
                                                  ? r.a.createElement(
                                                      r.a.Fragment,
                                                      null,
                                                      r.a.createElement(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-center",
                                                        },
                                                        r.a.createElement(
                                                          "div",
                                                          {
                                                            class:
                                                              "spinner-border text-info my-3",
                                                            role: "status",
                                                          }
                                                        )
                                                      )
                                                    )
                                                  : r.a.createElement(
                                                      r.a.Fragment,
                                                      null,
                                                      this.state.openedChart
                                                        ? r.a.createElement(
                                                            r.a.Fragment,
                                                            null,
                                                            r.a.createElement(
                                                              "div",
                                                              {
                                                                id: "userChart",
                                                              }
                                                            ),
                                                            r.a.createElement(
                                                              "div",
                                                              {
                                                                id: "loadUserChart",
                                                              }
                                                            ),
                                                            i,
                                                            r.a.createElement(
                                                              "button",
                                                              {
                                                                onClick:
                                                                  this.back,
                                                                className:
                                                                  "btn btn-xs btn-outline-light mb-1 mt-2",
                                                              },
                                                              "Back"
                                                            )
                                                          )
                                                        : r.a.createElement(
                                                            Qa.a,
                                                            null,
                                                            r.a.createElement(
                                                              Qa.a.Toggle,
                                                              {
                                                                as: he.a,
                                                                variant:
                                                                  "button",
                                                                className:
                                                                  "btn btn-cs-6 btn-block mb-2 brd15",
                                                                eventKey: "0",
                                                                onClick:
                                                                  this
                                                                    .showChart,
                                                              },
                                                              "SHOW GAMES CHART",
                                                              r.a.createElement(
                                                                "span",
                                                                {
                                                                  className:
                                                                    this.state
                                                                      .showChart
                                                                      ? "tran caret"
                                                                      : "caret",
                                                                }
                                                              )
                                                            )
                                                          )
                                                    )
                                              )
                                            )
                                          )
                                    )
                                  )
                                )
                          )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function sn(e, t) {
        if (void 0 !== e) {
          t = t || {
            postfixes: { "<": " ago", ">": " from now" },
            1e3: { singular: "a few moments", plural: "a few moments" },
            6e4: { singular: "about a minute", plural: "# minutes" },
            36e5: { singular: "about an hour", plural: "# hours" },
            864e5: { singular: "a day", plural: "# days" },
            3154e7: { singular: "a year", plural: "# years" },
          };
          var a = [1e3, 6e4, 36e5, 864e5, 3154e7],
            n = Date.parse(e.replace(/\-00:?00$/, ""));
          if (n && Date.now) {
            for (
              var r = n - Date.now(),
                s = Math.abs(r),
                i = t.postfixes[r < 0 ? "<" : ">"],
                o = a[0],
                l = 1;
              l < a.length;
              l++
            )
              s > a[l] && (o = a[l]);
            var c = Math.round(s / o);
            return t[o][c > 1 ? "plural" : "singular"].replace("#", c) + i;
          }
        }
      }
      var on = Object(d.b)(
          function (e) {
            return { coin: e.items.coin };
          },
          {
            setChartCoin: function (e) {
              return function (t) {
                t({ type: "CHART_COIN", payload: e });
              };
            },
          }
        )(rn),
        ln = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.state = { data: [], user: null, loading: !0, forUser: null }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    q.a.on(X.a.USER_INFO, function (t) {
                      return e.userInfo(Object(P.k)(t));
                    }),
                    this.setState({ user: null, data: [], loading: !0 });
                  var t = this.props.params.pathname;
                  (t = t.replace("/user/", "")),
                    this.getUserInfo(t),
                    Object(P.A)(500).then(function () {
                      e.setState({ user: t, forUser: t });
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    this.setState({ user: null, loading: !0, data: [] });
                },
              },
              {
                key: "userInfo",
                value: function (e) {
                  if (this._isMounted) {
                    if ((this.setState({ forUser: e.name }), !1 === e.status))
                      return (
                        this.setState({ user: null, loading: !0, data: [] }),
                        ke.a.fire("User Not Found !")
                      );
                    this.state.user === this.state.forUser &&
                      this.setState({ data: e, loading: !1 });
                  }
                },
              },
              {
                key: "getUserInfo",
                value: function (e) {
                  q.a.emit(
                    X.a.USER_INFO,
                    Object(P.m)({ name: e, coin: this.props.coin, game: "all" })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.username, e.isWinner);
                  e.chart_coin, e.cssClass;
                  return (
                    "kes",
                    !0 === t && "text-success",
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        Ya.a,
                        null,
                        r.a.createElement("title", null, "User Profile")
                      ),
                      r.a.createElement(
                        v.a,
                        null,
                        r.a.createElement(
                          E.a,
                          { xl: 7, md: 10, sm: 12, className: "m-auto" },
                          r.a.createElement(
                            _.a,
                            { className: "user-modal-bg" },
                            r.a.createElement(
                              _.a.Header,
                              {
                                style: { background: "#2f3138", border: 0 },
                                closeButton: !0,
                              },
                              r.a.createElement(
                                _.a.Title,
                                null,
                                "User Information"
                              )
                            ),
                            !this.state.loading &&
                              this.state.data &&
                              r.a.createElement(
                                _.a.Body,
                                null,
                                this._isMounted &&
                                  this.state.data.name &&
                                  r.a.createElement(
                                    "div",
                                    { className: "container-fluid" },
                                    r.a.createElement(on, {
                                      t: this.props.t,
                                      changeCoinLoader: !1,
                                      token: this.state.data.id,
                                      name: this.state.data.name,
                                      coin: "kes",
                                      data: this.state.data,
                                    })
                                  ),
                                !this.state.data.name &&
                                  r.a.createElement(
                                    "h2",
                                    { className: "text-center" },
                                    "User Not Found"
                                  )
                              ),
                            this.state.loading &&
                              r.a.createElement(
                                y.a.Body,
                                null,
                                r.a.createElement(
                                  "div",
                                  { className: "text-center" },
                                  r.a.createElement("div", {
                                    className: "spinner-border text-info",
                                    role: "status",
                                  })
                                )
                              )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        cn = Object(d.b)(function (e) {
          return { chart_coin: e.items.chart_coin };
        }, {})(ln),
        un = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.state = { gid: null, show: !1, loading: !0, playerRow: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.setState({
                      gid: this.props.game_id,
                      loading: !0,
                      playerRow: [],
                      show: this.props.show,
                    }),
                    q.a.on(X.a.GAME_DETAILS, function (t) {
                      return e.gameInfo(Object(P.k)(t));
                    });
                  var t = this.props.params.pathname;
                  (t = t.replace("/game/", "")), this.getGameInfo(t);
                },
              },
              {
                key: "getGameInfo",
                value: function (e) {
                  q.a.emit(X.a.GAME_DETAILS, Object(P.m)({ id: e }));
                },
              },
              {
                key: "gameInfo",
                value: function (e) {
                  var t,
                    a = this;
                  if (
                    this._isMounted &&
                    (this.setState({ loading: !1 }), null !== e.data)
                  ) {
                    var n = e.info;
                    this.setState({
                      busted: n.bust,
                      sha256: n.hash,
                      hash: n.md5,
                      date: n.date,
                    });
                    var s =
                      ((t = e.data),
                      P.i.sortBy(t, function (e) {
                        var t = null != e.profit ? e.profit : null;
                        return 0 === t ? null : t;
                      }));
                    (s = P.i.xor(s)),
                      P.i.reverse(s).forEach(function (e, t) {
                        var n = r.a.createElement(mn, { array: e, key: t });
                        a.setState(function (e) {
                          return {
                            playerRow: [n].concat(Object(o.a)(e.playerRow)),
                          };
                        });
                      });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.busted,
                    a = e.date,
                    n = e.sha256,
                    s = e.hash,
                    i = e.playerRow,
                    o = e.loading,
                    l = t >= 1.9 ? "success" : "danger";
                  return (
                    void 0 !== t &&
                      t.length > 5 &&
                      ((t = P.i.replace(t, "{", "")),
                      (t = P.i.replace(t, "}", "")),
                      (t = P.i.split(t, ",")),
                      (t = P.i.split(t, '"')),
                      (t = P.i.toArray(t))),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        _.a,
                        null,
                        r.a.createElement(_.a.Header, null, "Game Stats"),
                        this._isMounted &&
                          i &&
                          r.a.createElement(
                            _.a.Body,
                            null,
                            t &&
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                  v.a,
                                  {
                                    className:
                                      "text-darker pt-0 mb-1 user-detail",
                                  },
                                  r.a.createElement(
                                    E.a,
                                    { md: 6, sm: 12 },
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "review-box text-center align-item-center pb-0",
                                      },
                                      r.a.createElement(
                                        "h1",
                                        { className: "my-0 py-0 text-" + l },
                                        t,
                                        " ",
                                        r.a.createElement(
                                          "span",
                                          { className: "font-20" },
                                          "x"
                                        ),
                                        " "
                                      ),
                                      r.a.createElement(
                                        "h5",
                                        { className: "mt-1 pt-0 text-" + l },
                                        "Busted"
                                      ),
                                      r.a.createElement(
                                        "h5",
                                        { className: "text-darker" },
                                        new Date(1e3 * a).toLocaleString()
                                      )
                                    )
                                  ),
                                  r.a.createElement(
                                    E.a,
                                    { md: 6, sm: 12, className: "text-center" },
                                    r.a.createElement(
                                      "div",
                                      { className: "form-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text h-40",
                                            },
                                            "SHA256"
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "text",
                                          className:
                                            "form-control no-radius pointer mb-3",
                                          value: P.i.toString(n),
                                          readOnly: !0,
                                        })
                                      ),
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        r.a.createElement(
                                          "div",
                                          { className: "input-group-append" },
                                          r.a.createElement(
                                            "span",
                                            {
                                              className:
                                                "input-group-text h-40",
                                            },
                                            "HASH"
                                          )
                                        ),
                                        r.a.createElement("input", {
                                          type: "text",
                                          className:
                                            "form-control no-radius pointer",
                                          value: P.i.toString(s),
                                          readOnly: !0,
                                        })
                                      )
                                    )
                                  )
                                )
                              ),
                            r.a.createElement("hr", {
                              className: "user-border",
                            }),
                            r.a.createElement(
                              "h4",
                              { className: "my-4 font-20" },
                              "Players List"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "table-responsive game-stats" },
                              r.a.createElement(
                                "table",
                                {
                                  className:
                                    "table table-striped table-bordered table-condensed table-hover",
                                },
                                r.a.createElement(
                                  "thead",
                                  { className: "table-header" },
                                  r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement("th", null, "PLAYER"),
                                    r.a.createElement("th", null, "BET"),
                                    r.a.createElement("th", null, "PROFIT")
                                  )
                                ),
                                r.a.createElement("tbody", null, i)
                              )
                            )
                          ),
                        o &&
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              "div",
                              { className: "text-center pb-3" },
                              r.a.createElement("div", {
                                className: "spinner-border text-danger",
                                role: "status",
                              })
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        mn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.array,
                    a = e.key,
                    n = "text-success",
                    s = null != t.profit ? t.profit : 0;
                  0 === s && ((s = "-" + t.amount), (n = "text-danger"));
                  var i = P.i.upperCase(t.coin);
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "tr",
                      { className: n, key: a },
                      r.a.createElement(
                        "td",
                        null,
                        r.a.createElement(ae, {
                          username: t.username,
                          isWinner: n,
                        })
                      ),
                      r.a.createElement(
                        "td",
                        null,
                        r.a.createElement("img", {
                          src: "/assets/images/" + i + ".png",
                          className: "mini-coin-2",
                          alt: i,
                        }),
                        Object(P.o)(t.amount),
                        " ",
                        i
                      ),
                      r.a.createElement(
                        "td",
                        null,
                        r.a.createElement("img", {
                          src: "/assets/images/" + i + ".png",
                          className: "mini-coin-2",
                          alt: i,
                        }),
                        Object(P.o)(s),
                        " ",
                        i
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      var dn = un,
        hn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).makeList = function (e) {
                Object(P.A)(500).then(function () {
                  n.setState({ loading: !1, players: e });
                });
              }),
              (n.state = { loading: !0, players: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.emit(X.a.TOP_WINNERS),
                    q.a.on(X.a.TOP_WINNERS, function (t) {
                      return e.makeList(t);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.t,
                    t = this.state.players.map(function (e, t) {
                      return r.a.createElement(pn, {
                        key: t,
                        medal: t + 1,
                        player: e,
                      });
                    });
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      Ya.a,
                      null,
                      r.a.createElement(
                        "title",
                        null,
                        "Leaderboard - Original Crash Game"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className: "table-responsive last-bets num-style mb-0",
                      },
                      this.state.loading
                        ? r.a.createElement(
                            "div",
                            { className: "text-center" },
                            r.a.createElement("div", {
                              class: "spinner-grow text-white my-3",
                              role: "status",
                            })
                          )
                        : r.a.createElement(
                            ua.a,
                            { className: "mb-2" },
                            r.a.createElement(
                              "thead",
                              null,
                              r.a.createElement(
                                "tr",
                                null,
                                r.a.createElement("th", null, "#"),
                                r.a.createElement("th", null, e("username")),
                                r.a.createElement("th", null, e("Bet Amount")),
                                r.a.createElement("th", null, e("prize")),
                                r.a.createElement("th", null, e("medal"))
                              )
                            ),
                            r.a.createElement("tbody", null, t)
                          )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        pn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            return Object(l.a)(this, a), t.call(this, e);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.player,
                    a = e.medal,
                    n = a;
                  console.log(t), 10 === a && (a = 1);
                  var s = t.name,
                    i = (t.avatar, Object(P.o)(t.profit_high.btc)),
                    o = Object(P.o)(t.profit_high.btc / 2);
                  return r.a.createElement(
                    "tr",
                    { className: "q-crash2" },
                    r.a.createElement("td", null, n),
                    r.a.createElement(
                      "td",
                      null,
                      r.a.createElement(ae, { username: s, isWinner: !1 })
                    ),
                    r.a.createElement(
                      "td",
                      { className: "num-style text-white" },
                      r.a.createElement("img", {
                        src: "/assets/images/kes.png",
                        className: "mini-coin-2 hidden-sm",
                        alt: "btc",
                      }),
                      i,
                      " ",
                      P.i.upperCase("btc")
                    ),
                    r.a.createElement(
                      "td",
                      { className: "num-style text-success" },
                      r.a.createElement("img", {
                        src: "/assets/images/kes.png",
                        className: "mini-coin-2 hidden-sm",
                        alt: "btc",
                      }),
                      o,
                      " ",
                      P.i.upperCase("btc")
                    ),
                    r.a.createElement(
                      "td",
                      null,
                      r.a.createElement("img", {
                        className: "rounded-circle thumb-xs ffi",
                        src: "/assets/images/badges/badge-" + a + ".svg",
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        fn = hn,
        bn = a(202),
        gn = a.n(bn),
        yn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.setBankRoll = function (e) {
                n.setState({ amount: e });
              }),
              (n.help = function (e) {
                n.setState({ show: !0, effect: "zoomIn" });
              }),
              (n.close = function () {
                n.setState({ show: !1, effect: "zoomOut" });
              }),
              (n.state = {
                show: !1,
                amount: 0,
                coin: T.a.getKey("coin") ? T.a.getKey("coin") : "Bixea",
                game: n.props.game,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.props.gameCoin(),
                    Object(P.A)(500).then(function () {
                      q.a.emit(
                        X.a.BANKROLL,
                        Object(P.m)({ game: e.state.game, coin: e.state.coin })
                      );
                    }),
                    q.a.on(X.a.BANKROLL, function (t) {
                      return e.setBankRoll(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  Object(P.o)(this.state.amount);
                  var e = this.props;
                  e.coin, e.style, e.style2;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        centered: !0,
                        backdrop: "static",
                        show: this.state.show,
                        onHide: this.close,
                        "aria-labelledby": "bankroll-lg-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        { className: "Header" },
                        "BankRoll",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.close,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        null,
                        r.a.createElement(
                          "p",
                          { className: "font-15 text-white" },
                          "Bankroll is the pool of money that the bankroller uses to pay out winners of the game."
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        vn = Object(d.b)(
          function (e) {
            return { coin: e.items.coin };
          },
          { gameCoin: De }
        )(yn),
        En = "Proxima Nova",
        _n = null,
        wn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.initCanvas = function (e) {
                n._isMounted && n.state.gameCanvas.init(e, n.state.canvasWidth);
              }),
              (n.state = {
                engine: Ft,
                gameCanvas: new Nn(),
                canvasWidth: 950,
                canvasHeight: 450,
                connecting: !0,
                hash: null,
                status: "",
                timer: "",
                rate: "",
              }),
              (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this._isMounted = !0;
                  var t = this.state.engine;
                  this.handleResize(),
                    this.setState({ width: window.innerWidth }),
                    window.addEventListener("resize", this.handleResize);
                  var a = this.state.canvasHeight;
                  Object(P.s)() && (a = 450),
                    Object(P.A)(500).then(function () {
                      e.initCanvas(a);
                    }),
                    t.trigger.on("finish_crash", function (t) {
                      return e.finish(t);
                    }),
                    t.trigger.on("waiting_crash", function (t) {
                      return e.waiting(t);
                    }),
                    t.trigger.on("started_crash", function (t) {
                      return e.started(t);
                    }),
                    t.trigger.on("busted_crash", function (t) {
                      return e.busted(t);
                    }),
                    t.trigger.on("game_status", function (t) {
                      return e.status(t);
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    window.removeEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.profit &&
                    this.state.gameCanvas.setAddons(e.profit, e.im_in_game);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.setState({ width: window.innerWidth });
                  var e = 70;
                  Object(P.s)() && (e = 100), (_n = e), T.a.setKey("cFont", e);
                },
              },
              {
                key: "finish",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.name;
                    this.state.gameCanvas.setFinisher(t);
                  }
                },
              },
              {
                key: "waiting",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time;
                    this.setState({ status: "waiting" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setWaiting(t);
                  }
                },
              },
              {
                key: "started",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.time,
                      a = e.md5;
                    this.setState({ status: "started" }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      this.state.gameCanvas.setPlaying(t, a);
                  }
                },
              },
              {
                key: "busted",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.force,
                      r = (t / 100).toFixed(2);
                    this.state.gameCanvas.setAddons(
                      this.props.profit,
                      this.props.im_in_game
                    ),
                      this.state.gameCanvas.setBusted(r, a, n),
                      this.setState({
                        status: "busted",
                        timer: a,
                        rate: r,
                        force: n,
                      });
                  }
                },
              },
              {
                key: "status",
                value: function (e) {
                  if (this._isMounted) {
                    var t = e.amount,
                      a = e.time,
                      n = e.md5,
                      r = e.status;
                    switch (
                      (this.setState({ status: r, timer: a, connecting: !1 }),
                      this.state.gameCanvas.setAddons(
                        this.props.profit,
                        this.props.im_in_game
                      ),
                      r)
                    ) {
                      case "started":
                        this.state.gameCanvas.setPlaying(a, n);
                        break;
                      case "waiting":
                        this.state.gameCanvas.setWaiting(a);
                        break;
                      case "busted":
                        var s = (t / 100).toFixed(2);
                        this.state.gameCanvas.setBusted(s, a);
                    }
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { display: "unset" };
                  return (
                    this.state.connecting && (e = { display: "none" }),
                    r.a.createElement(
                      _.a,
                      { className: "no-shadow mb-1" },
                      r.a.createElement(
                        _.a.Body,
                        {
                          className:
                            "bg-body game-aria text-center no-shadow pb-3 static-snow",
                          id: "canvasPart",
                        },
                        r.a.createElement(
                          "div",
                          { className: "game-holder" },
                          this.state.connecting &&
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(
                                "h3",
                                {
                                  className: " font-35 mt-2 d-block mb-5",
                                  style: { color: "rgba(242,110,16,1)" },
                                },
                                "CONNECTING"
                              ),
                              r.a.createElement(
                                "b",
                                { className: " mt-1 d-block mt-2 mb-5" },
                                r.a.createElement("div", {
                                  className: "spinner-border",
                                  style: { color: "rgba(242,110,16,1)" },
                                  role: "status",
                                })
                              )
                            ),
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              _.a,
                              { className: "mb-1 bg-transparent" },
                              r.a.createElement(
                                _.a.Body,
                                { className: "p-0" },
                                r.a.createElement(kn, null),
                                r.a.createElement("canvas", {
                                  id: "graph",
                                  style: e,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        kn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).state = { engine: Ft, gameRow: [] }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.state.engine;
                  t.trigger.on("busted_crash", function (t) {
                    return e.busted(t);
                  }),
                    t.trigger.on("game_status", function (t) {
                      return e.gameSync(t);
                    });
                },
              },
              {
                key: "busted",
                value: function (e) {
                  var t = (e.amount / 100).toFixed(2),
                    a = t >= 1.9 ? "success" : "danger";
                  6 === this.state.gameRow.length && this.state.gameRow.shift();
                  var n = this.state.gameRow.concat([
                    r.a.createElement(
                      E.a,
                      { md: 1, className: "animated slideInRight text-" + a },
                      r.a.createElement("i", {
                        className: "mdi mdi-circle font-13 d-block text-" + a,
                      }),
                      r.a.createElement(Gt, {
                        color: a,
                        title: t,
                        game_id: e.game_id,
                        font: 13,
                      })
                    ),
                  ]);
                  this.setState({ gameRow: n });
                },
              },
              {
                key: "gameSync",
                value: function (e) {
                  var t = this;
                  void 0 !== e.crashes &&
                    0 !== e.crashes.length &&
                    P.i.reverse(e.crashes).forEach(function (e, a) {
                      if (a < 6) {
                        var n = (e.amount / 100).toFixed(2),
                          s = n >= 1.9 ? "success" : "danger",
                          i = r.a.createElement(
                            E.a,
                            { md: 1, className: "text-" + s },
                            r.a.createElement("i", {
                              className:
                                "mdi mdi-circle font-13 d-block text-" + s,
                            }),
                            r.a.createElement(Gt, {
                              color: s,
                              title: n,
                              game_id: e.game_id,
                              font: 13,
                            })
                          );
                        t.setState(function (e) {
                          return {
                            gameRow: [i].concat(Object(o.a)(e.gameRow)),
                          };
                        });
                      }
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    (this.state.gameRow.length = 6),
                    r.a.createElement(
                      _.a,
                      { className: "mb-0 crash-last d-none" },
                      r.a.createElement(
                        _.a.Body,
                        { className: "p-1" },
                        r.a.createElement(
                          v.a,
                          null,
                          r.a.createElement(
                            E.a,
                            { md: 4 },
                            r.a.createElement(vn, {
                              game: "crash",
                              style: { marginTop: 7 },
                            })
                          ),
                          this.state.gameRow
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      function On(e) {
        return null == e ? e : (0.5 + e) | 0;
      }
      function Nn() {
        var e = this,
          t = 0;
        (e.nextround_text = "Next round in {time}s"),
          (e.busted_title = "Busted"),
          (e.edge_text = null),
          (e.winner_text = null),
          (e.im_in_game = null),
          (e.maximum_text = ""),
          (e.current_hash = ""),
          (e.game_status = 0),
          (e.start_time = 0),
          (e.started_time = 0),
          (e.time_passed = 0),
          (e.current_amount = 0),
          (e.busted_amount = 0),
          (e.cashin_amount = 0),
          (e.warning_text = null),
          (e.busted_text = null),
          (e.time_part = null),
          (e.amount_part = null),
          (e.graph_part = null),
          (e.canvas_size = null),
          (e.canvasWidth = !1),
          (e.canvasHeight = !1),
          (e.cashOuter = null),
          (e.coors = null),
          (e.setFinisher = function (t) {
            e.cashOuter = t;
          }),
          (e.setWaiting = function (t) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 1),
              (e.start_time = new Date().getTime() + t),
              (e.time_passed = 0),
              (e.started_time = 0),
              (e.current_hash = "");
          }),
          (e.setAddons = function (t, a) {
            (e.winner_text = t), (e.im_in_game = a);
          }),
          (e.setPlaying = function (t, a) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 2),
              (e.started_time = new Date().getTime() - t),
              (e.time_passed = t),
              (e.current_hash = "");
          }),
          (e.setBusted = function (t, a, n) {
            (e.warning_text =
              e.time_part =
              e.amount_part =
              e.graph_part =
              e.busted_text =
                null),
              (e.game_status = 3),
              (e.busted_amount = t),
              (e.started_time = new Date().getTime() - a),
              (e.time_passed = a),
              (e.current_hash = "");
          }),
          (e.init = function (t, a) {
            (e.canvas = Object(P.p)("#graph")),
              (e.context = e.canvas.getContext("2d")),
              (e.canvas_size = t),
              e.resize(t, a),
              (e.rtimer = !0),
              window.requestAnimationFrame(e.render);
          }),
          (e.resize = function (t, a) {
            null != t && (e.canvas_size = t),
              (e.canvas.width = 1 * a),
              (e.canvas.height = 1 * t),
              (e.canvas.style.width = a + "px"),
              (e.canvas.style.maxWidth = "100%"),
              (e.canvas.style.maxHeight = "100%"),
              (e.canvasWidth = a),
              (e.canvasHeight = t),
              (e.coors = null);
          }),
          (e.render = function () {
            if (!e.rtimer) return !1;
            e.context.clearRect(0, 0, e.canvasWidth, e.canvasHeight),
              e.draw(e.context),
              window.requestAnimationFrame(e.render);
          }),
          (e.draw = function (t) {
            if (null == e.coors) {
              e.coors = { width: e.canvasWidth, height: e.canvasHeight };
              var a = e.canvasHeight - 15;
              e.coors.origin = { x: On(0.08 * a), y: On(a - 0.07) };
              var n = On(0.09 * a),
                r = On(0.08 * a),
                s = On(a - 0.07);
              (e.coors.info = {
                x: On((e.coors.width + r) / 2),
                y: On(0.48 * e.coors.height),
                font: n,
                by: On(0.36 * e.coors.height),
                bh: On(1.7 * n),
              }),
                (e.coors.busted = {
                  x: On((e.coors.width + r) / 2),
                  y1: On(0.51 * e.coors.height),
                  y2: On(0.65 * e.coors.height),
                  font: On(0.25 * a),
                });
              var i = On(0.05 * a),
                o = On(1.6 * r),
                l = On(0.6 * r - i),
                c = On(l + 1.5 * i),
                u = On(c + 1.5 * i),
                m = On(u + 1.5 * i);
              e.coors.profit = { x: o, y1: l, y2: c, y3: u, y4: m, font: i };
              var d = On(e.canvasWidth + 60 + r),
                h = On(s),
                p = On(0.044 * a),
                f = On(r - 0.5 * p),
                b = On(s + 1.5 * p),
                g = On(0.3 * p),
                y = On(s - 0.5 * p),
                v = On(r + 0.5 * p);
              e.coors.axis = {
                x: d,
                y: h,
                font: p,
                tx: f,
                th: g,
                ty: b,
                lx: v,
                ly: y,
              };
              var E = On(0.2 * a),
                _ = On((e.coors.width + r) / 2),
                w = On(0.56 * e.coors.height);
              e.coors.amount = { x: _, y: w, font: E };
            }
            e.drawAxis(t),
              e.drawMaximum(t),
              e.drawAxisLabels(t),
              1 === e.game_status
                ? e.drawWaiting(t)
                : 2 === e.game_status
                ? (e.drawGraph(t), e.drawAmount(t))
                : 3 === e.game_status && e.drawBusted(t);
          }),
          (e.drawAxis = function (t) {
            (t.lineWidth = 2),
              (t.strokeStyle = "#C67512"),
              t.beginPath(),
              t.moveTo(e.coors.origin.x, 0),
              t.lineTo(e.coors.origin.x, e.coors.origin.y),
              t.lineTo(e.coors.width, e.coors.origin.y),
              t.stroke(),
              t.closePath();
          }),
          (e.drawMaximum = function (t) {
            (t.fillStyle = "#b0b3c1"),
              (t.textAlign = "left"),
              null != e.maximum_text &&
                ((t.font = e.coors.profit.font + "px " + En + " , " + En),
                t.fillText(
                  e.maximum_text,
                  e.coors.profit.x,
                  e.coors.profit.y1
                )),
              null != e.winner_text &&
                ((t.fillStyle = "#69ca5e"),
                (t.font = e.coors.profit.font + "px " + En + " , " + En),
                t.fillText(e.winner_text, e.coors.profit.x, e.coors.profit.y2)),
              null != e.current_hash &&
                ((t.fillStyle = "#FFF"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(En, '"')),
                t.fillText(
                  e.current_hash,
                  e.coors.profit.x,
                  e.coors.profit.y3
                )),
              null != e.edge_text &&
                ((t.fillStyle = "#FFF"),
                (t.font = "lighter normal 300 "
                  .concat(e.coors.profit.font, 'px/1 "')
                  .concat(En, '"')),
                t.fillText(e.edge_text, e.coors.profit.x, e.coors.profit.y4));
          }),
          (e.drawAxisLabels = function (a) {
            2 === e.game_status &&
              null === e.warning_text &&
              (e.time_passed = new Date().getTime() - e.started_time),
              (a.strokeStyle = "#FFF"),
              (a.fillStyle = "#FFF"),
              (a.textAlign = "center"),
              (a.font = "small-caps ".concat(e.coors.axis.font, "px ") + En);
            var n = e.time_passed < 1e4 ? 10 : On(e.time_passed / 1e3);
            if (
              (null == e.time_part && (e.time_part = 2),
              n > 20 && n > 7 * e.time_part)
            )
              for (
                2 === e.time_part && (e.time_part = 10);
                !(n < 3 * e.time_part);

              )
                e.time_part += 10;
            for (a.beginPath(), t = 0; t < Math.ceil(n / e.time_part); t++) {
              var r = e.time_part * t * 1e3,
                s =
                  e.coors.origin.x +
                  (e.coors.axis.x * r) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed);
              a.fillText(e.time_part * t, s, e.coors.axis.ty),
                t > 0 &&
                  (a.moveTo(s, e.coors.origin.y), a.lineTo(s, e.coors.axis.ly));
            }
            a.stroke(),
              a.closePath(),
              (a.textAlign = "right"),
              (e.current_amount = Math.pow(
                Math.E,
                6e-5 * e.time_passed
              ).toFixed(2));
            var i = On(100 * e.current_amount) - 100,
              o = i < 100 ? 100 : i;
            if (
              (null == e.amount_part && (e.amount_part = 20),
              o > 150 && o > 6 * e.amount_part)
            )
              for (e.amount_part = 100; !(o <= 6 * e.amount_part); )
                e.amount_part *= 2;
            for (a.beginPath(), t = 0; t < Math.ceil(o / e.amount_part); t++)
              if (0 !== t) {
                var l =
                    e.coors.origin.y -
                    (e.coors.axis.y * e.amount_part * t) / (i < 100 ? 100 : i),
                  c = (e.amount_part * t + 100) / 100 + "x";
                a.fillText(c, e.coors.axis.tx, l + e.coors.axis.th),
                  a.moveTo(e.coors.origin.x, l),
                  a.lineTo(e.coors.axis.lx, l);
              }
            a.stroke(), a.closePath();
          }),
          (e.drawGraph = function (a) {
            for (
              a.strokeStyle = e.im_in_game ? "#1ecab8" : "#C67512",
                a.lineWidth = 4,
                a.beginPath(),
                a.moveTo(e.coors.origin.x, e.coors.origin.y),
                null == e.graph_part && (e.graph_part = 100),
                e.time_passed > 100 * e.graph_part && (e.graph_part *= 2),
                t = 0;
              t < e.time_passed;
              t += e.graph_part
            ) {
              P.e.current_amount = e.current_amount;
              var n =
                  e.coors.origin.x +
                  (e.coors.axis.x * t) /
                    (e.time_passed < 1e4 ? 1e4 : e.time_passed),
                r =
                  e.coors.origin.y -
                  (e.coors.axis.y *
                    (On(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                    (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
              a.lineTo(n, r);
            }
            var s =
                e.coors.origin.x +
                (e.coors.axis.x * t) /
                  (e.time_passed < 1e4 ? 1e4 : e.time_passed),
              i =
                e.coors.origin.y -
                (e.coors.axis.y *
                  (On(100 * Math.pow(Math.E, 6e-5 * t)) - 100)) /
                  (e.current_amount < 2 ? 100 : 100 * e.current_amount - 100);
            s > 950 && (s = 950),
              i < 30 && (i = 30),
              null !== e.cashOuter &&
                ((a.fillStyle = "yellow"),
                a.fillText(e.cashOuter, s, i),
                Object(P.A)(700).then(function () {
                  e.cashOuter = null;
                })),
              a.stroke(),
              a.closePath();
          }),
          (e.drawAmount = function (t) {
            (e.canvas.style.fontWeight = 700), (e.canvas.style.textShadow = 0);
            var a = Math.pow(Math.E, 6e-5 * e.time_passed).toFixed(2);
            (t.fillStyle = e.im_in_game ? "#1ecab8" : "rgba(248,133,49,1)"),
              (t.textAlign = "center");
            var n = null !== _n ? _n : T.a.getKey("cFont");
            (t.font = "normal normal normal "
              .concat(n, 'px/1 "')
              .concat(En, '"')),
              t.fillText(a + "x", e.coors.amount.x, e.coors.amount.y);
          }),
          (e.drawBusted = function (t) {
            null == e.busted_text &&
              (e.busted_text = {
                line1: e.busted_title + " " + e.busted_amount + "x",
              }),
              (t.fillStyle = "rgba(242,110,16,1)"),
              (t.textAlign = "center"),
              (t.font = e.coors.busted.font + "px " + En + " , " + En),
              t.fillText(
                e.busted_text.line1,
                e.coors.busted.x,
                e.coors.busted.y1
              );
          }),
          (e.drawWaiting = function (t) {
            var a = (e.start_time - new Date().getTime()) / 1e3;
            (a = a <= 0 ? "0.0" : a.toFixed(1)),
              (t.fillStyle = "#C67512"),
              (t.textAlign = "center"),
              (t.font = e.coors.info.font + "px " + En + " , " + En),
              t.fillText(
                e.nextround_text.replace("{time}", a),
                e.coors.info.x,
                e.coors.info.y
              );
          });
      }
      var xn = Object(d.b)(function (e) {
          return { profit: e.items.profit, im_in_game: e.items.im_in_game };
        }, {})(wn),
        jn =
          (n.Component,
          (function (e) {
            Object(u.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e))._Mounted = !1),
                (n.state = {
                  height: null,
                  mobile: !1,
                  isLogged: !1,
                  token: !1,
                  padding: "p-1",
                }),
                (n.handleResize = n.handleResize.bind(Object(S.a)(n))),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    Object(P.A)(600).then(function () {
                      e.handleResize();
                    }),
                      window.addEventListener("resize", this.handleResize),
                      T.a.getKey("token") &&
                        this.setState({
                          isLogged: !0,
                          token: T.a.getKey("token"),
                        }),
                      Object(P.A)(500).then(function () {
                        Ft.getStatus();
                      });
                  },
                },
                {
                  key: "componentWillMount",
                  value: function () {
                    var e = this;
                    Object(P.A)(500).then(function () {
                      e._Mounted = !0;
                    });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    window.removeEventListener("resize", this.handleResize),
                      (this._Mounted = !1);
                  },
                },
                {
                  key: "handleResize",
                  value: function () {
                    this.getWidth() < 1540
                      ? (this.setState({ col: "col-xl-12" }),
                        P.d.emit("hide_games"))
                      : (this.setState({ col: "col-xl-9" }),
                        P.d.emit("show_min_games")),
                      Object(P.s)()
                        ? this.setState({ mobile: !0 })
                        : this.setState({ mobile: !1 }),
                      Object(P.s)() &&
                        this.setState({ padding: "p-0", ovh: "ovh" });
                  },
                },
                {
                  key: "getWidth",
                  value: function () {
                    return (
                      document.documentElement.clientWidth ||
                      document.body.clientWidth
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.col,
                      a = e.padding,
                      n = e.mobile,
                      s = e.ovh;
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        gn.a,
                        {
                          transitionAppear: !0,
                          transitionAppearTimeout: 250,
                          transitionEnterTimeout: 200,
                          transitionLeaveTimeout: 200,
                          transitionName: "SlideIn",
                        },
                        this._Mounted
                          ? r.a.createElement(
                              v.a,
                              { className: "animated fadeIn " + s },
                              r.a.createElement(
                                E.a,
                                { sm: 12, className: "m-auto " + t + " " + a },
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-1 animated zoomIn" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: "p-1 card-body" },
                                    r.a.createElement(Yt, {
                                      game: "crash",
                                      t: this.props.t,
                                    })
                                  )
                                ),
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-2" },
                                  r.a.createElement(
                                    _.a.Body,
                                    {
                                      className: "p-1 animated zoomIn",
                                      id: "roll-panel",
                                    },
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        E.a,
                                        { sm: 12, md: 12, className: "m-auto" },
                                        n
                                          ? r.a.createElement(xn, {
                                              mobile: this.state.mobile,
                                            })
                                          : r.a.createElement(zt, {
                                              mobile: this.state.mobile,
                                            })
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-2" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: a },
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        E.a,
                                        { sm: 12, md: 12, className: "m-auto" },
                                        r.a.createElement(ca, {
                                          mobile: this.state.mobile,
                                          token: this.state.token,
                                          isLogged: this.state.isLogged,
                                        })
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-5" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: "p-1" },
                                    r.a.createElement(
                                      v.a,
                                      null,
                                      r.a.createElement(
                                        E.a,
                                        {
                                          sm: 12,
                                          md: 12,
                                          className: "m-auto px-1",
                                        },
                                        r.a.createElement(Sa, {
                                          t: this.props.t,
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          : r.a.createElement(
                              "div",
                              { className: "game-loader text-center" },
                              r.a.createElement("div", {
                                class: "spinner-grow text-info my-3",
                                role: "status",
                              })
                            )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.Component));
      var Cn = function (e) {
          var t = Object(g.f)(),
            a = t.state && t.state.background,
            n = e.t;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              g.c,
              { history: e.history, location: a || t },
              r.a.createElement(g.a, {
                exact: !0,
                path: "/",
                children: r.a.createElement(za, {
                  t: n,
                  location: t,
                  content: r.a.createElement(jn, { t: n }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/leaderboard",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(fn, { t: n }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/support",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(qa, { t: n }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/affiliate",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(Ja, { t: n, history: e.history }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/aff",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement($a, {
                    params: t,
                    history: e.history,
                    t: n,
                  }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/setting",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(Ee, { t: n }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/user/:id",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(cn, { t: n, params: t }),
                }),
              }),
              r.a.createElement(g.a, {
                path: "/game/:id",
                children: r.a.createElement(za, {
                  t: n,
                  content: r.a.createElement(dn, { t: n, params: t }),
                }),
              }),
              r.a.createElement(g.a, { path: "*" }, r.a.createElement(Ga, null))
            )
          );
        },
        Sn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.handleInputChange = function (e) {
                var t = e.target.value;
                n.setState({ coin: t });
              }),
              (n.handleChangeAmount = function (e) {
                var t = e.target.value;
                Object(P.w)(t) && n.setState({ amount: t });
              }),
              (n.back = function () {
                P.d.emit("force_modal_tip_close"), n.setState({ loading: !0 });
              }),
              (n.state = {
                loading: !0,
                amount: Object(P.o)(1e-7),
                coin: "btc",
                list: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    Object(P.A)(500).then(function () {
                      e.setState({ loading: !1 });
                    }),
                    this.props.gameCoin(),
                    q.a.on(X.a.SEND_TIP, function (t) {
                      return e.sendTip(Object(P.k)(t));
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  var t = this;
                  if (this._isMounted) {
                    if ((e.preventDefault(), "" === this.state.amount.trim()))
                      return;
                    this.setState({ amount: Object(P.o)(this.state.amount) }),
                      ke.a
                        .fire({
                          title: "Are you sure to send tip to this user?",
                          text: "",
                          icon: "warning",
                          showCancelButton: !0,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes!",
                        })
                        .then(function (e) {
                          e.value &&
                            Object(P.A)(400).then(function () {
                              q.a.emit(
                                X.a.SEND_TIP,
                                Object(P.m)({
                                  token: T.a.getKey("token"),
                                  target: t.props.name,
                                  amount: t.state.amount,
                                  coin: t.state.coin,
                                })
                              );
                            });
                        });
                  }
                },
              },
              {
                key: "sendTip",
                value: function (e) {
                  var t = this;
                  this._isMounted &&
                    e.senderName === T.a.getKey("name") &&
                    Object(P.A)(1e3).then(function () {
                      return e.status
                        ? (q.a.emit(
                            X.a.CREDIT,
                            Object(P.m)({
                              token: T.a.getKey("token"),
                              coin: t.props.coin,
                            })
                          ),
                          Object(P.y)(e.msg, "success", "top-center"))
                        : Object(P.y)(e.msg, "warning", "top-center");
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return T.a.getKey("name") === this.props.name
                    ? null
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        this.state.loading
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                {
                                  className: "text-center",
                                  style: { minHeight: 500 },
                                },
                                r.a.createElement("div", {
                                  class:
                                    "spinner-border text-info my-2 user-loader",
                                  role: "status",
                                })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "form",
                                {
                                  onSubmit: function (t) {
                                    return e.submitForm(t);
                                  },
                                },
                                r.a.createElement(
                                  "label",
                                  { className: "text-center mt-3" },
                                  "Enter amount you want to send to user"
                                ),
                                r.a.createElement("input", {
                                  type: "text",
                                  name: "amount",
                                  className: "form-control mb-3",
                                  onChange: this.handleChangeAmount,
                                  value: this.state.amount,
                                }),
                                r.a.createElement(
                                  v.a,
                                  { className: "mb-3" },
                                  r.a.createElement(
                                    E.a,
                                    { md: 6, className: "col-6" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        type: "submit",
                                        className: "btn btn-s-2 btn-block",
                                      },
                                      r.a.createElement("i", {
                                        className: "mdi mdi-send align-middle",
                                      }),
                                      " Send Tip"
                                    )
                                  ),
                                  r.a.createElement(
                                    E.a,
                                    { md: 6, className: "col-6" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn bg-cs2 btn-block",
                                        onClick: this.back,
                                      },
                                      r.a.createElement("i", {
                                        className:
                                          "mdi mdi-refresh align-middle",
                                      }),
                                      " Back"
                                    )
                                  )
                                )
                              )
                            )
                      );
                },
              },
            ]),
            a
          );
        })(n.Component),
        An = Object(d.b)(
          function (e) {
            return { coin: e.items.coin };
          },
          { gameCoin: De }
        )(Sn);
      O.a.init({ interpolation: { escapeValue: !1 } });
      var Mn = P.c ? 300 : 4300,
        Tn = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(r.a.Fragment, null)
          );
        };
      function Pn() {
        var e = Object(N.a)().t;
        return r.a.createElement(Dn, { t: e });
      }
      var Dn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.security = function () {
                console.log(
                  '%cStop! This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or do a "hack", it is a scam and will give them access to your account',
                  "color:#FFF; background:red; font-family:system-ui; font-size:20px; font-weight:bold"
                ),
                  Object(P.j)();
              }),
              (n.state = {
                loading: !0,
                welcome: !!T.a.getKey("welcome"),
                effect: "d-none",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.security(),
                    Object(P.A)(700).then(function () {
                      e.setState({ effect: "zoomIn" });
                    }),
                    Object(P.A)(Mn).then(function () {
                      e.setState({ loading: !1 });
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.t;
                  return r.a.createElement(
                    b.a,
                    null,
                    r.a.createElement(
                      x.a,
                      { i18n: O.a },
                      this.state.loading &&
                        r.a.createElement(
                          "div",
                          { className: "loading" },
                          r.a.createElement(
                            "div",
                            { className: "loading-text" },
                            r.a.createElement("img", {
                              className:
                                "img-fluid animated " + this.state.effect,
                              src: "/assets/images/logo.png",
                            }),
                            r.a.createElement("br", null),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "L"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "O"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "A"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "D"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "I"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "N"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "loading-text-words" },
                              "G"
                            )
                          )
                        ),
                      r.a.createElement(
                        g.b,
                        { history: C },
                        this._isMounted &&
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(k.a, null),
                            r.a.createElement(Rn, { t: e }),
                            r.a.createElement(Wn, { t: e }),
                            r.a.createElement(In, { t: e, props: this.props })
                          ),
                        r.a.createElement(Cn, { t: e, history: C })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        In = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e))._isMounted = !1),
              (n.handleClose = function () {
                n.setState({
                  detail: !0,
                  tip: !1,
                  show: !1,
                  loading: !0,
                  effect: "zoomOut",
                });
              }),
              (n.validate = function () {
                var e = n.state.details.hash;
                P.d.emit("game_verify", e);
              }),
              (n.state = {
                show: !1,
                effect: null,
                details: [],
                clientName: T.a.getKey("name"),
                token: T.a.getKey("token"),
                country: T.a.getKey("country")
                  ? T.a.getKey("country")
                  : "Global",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    P.d.on("single_game_modal", function (t) {
                      e.setState({
                        details: t.data,
                        show: !0,
                        effect: "pulse",
                      });
                    }),
                    P.d.on("single_game_modal_close", function (t) {
                      e.handleClose();
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.details,
                    t = e.name,
                    a = e.amount,
                    n = e.game,
                    s = e.profit,
                    i = (e.coin, e.created),
                    o = (e.hash, e.gid),
                    l = e.id,
                    c = (e.result, e.slot, e.direct),
                    u = e.force,
                    m = e.cashout,
                    d = !1,
                    h = !1,
                    p = Object(P.n)(i);
                  c && (p = Object(P.z)(i)),
                    u && (p = "a few minutes ago"),
                    (0 !== (s = parseFloat(s)) && 0 !== s) || (d = !0);
                  P.i.isUndefined(m) || (h = m / 100);
                  var b = this.props.t;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._isMounted &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          y.a,
                          {
                            size: "md",
                            backdrop: "static",
                            centered: !0,
                            show: this.state.show,
                            onHide: this.handleClose,
                            "aria-labelledby": "game-modal",
                            className: "animated " + this.state.effect,
                          },
                          r.a.createElement(
                            y.a.Header,
                            null,
                            b("game_details"),
                            r.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "close p-2",
                                onClick: this.handleClose,
                              },
                              r.a.createElement("i", {
                                className: "mdi mdi-close",
                              })
                            )
                          ),
                          r.a.createElement(
                            y.a.Body,
                            {
                              className: d
                                ? "user-modal-bg p-1"
                                : "user-modal-bg p-1 winImageX",
                            },
                            r.a.createElement(f.a, null),
                            r.a.createElement(
                              "h4",
                              { className: "text-center text-white mt-0" },
                              r.a.createElement(ae, { username: t })
                            ),
                            r.a.createElement(
                              v.a,
                              { className: "text-center game-modal" },
                              r.a.createElement(
                                E.a,
                                {
                                  md: 6,
                                  className: "col-6 text-success font-12",
                                },
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-1 brd15 text-white" },
                                  r.a.createElement(
                                    _.a.Body,
                                    {
                                      className: "p-1 text-uppercase",
                                      style: { color: "rgba(248,133,49,1)" },
                                    },
                                    r.a.createElement("i", {
                                      className:
                                        "mdi mdi-marker-check text-white",
                                      "data-tip": "Verified",
                                    }),
                                    " ",
                                    b("betting_id"),
                                    " ",
                                    r.a.createElement("br", null),
                                    " ",
                                    void 0 === o && o && "" === o ? l : o
                                  )
                                )
                              ),
                              r.a.createElement(
                                E.a,
                                {
                                  md: 6,
                                  className: "col-6 text-white font-12",
                                },
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-1 brd15 text-white" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: "p-1 text-uppercase" },
                                    r.a.createElement("i", {
                                      className: "mdi mdi-clock",
                                    }),
                                    " Time / Date ",
                                    r.a.createElement("br", null),
                                    " ",
                                    p
                                  )
                                )
                              ),
                              r.a.createElement(
                                E.a,
                                { md: 6, className: "col-6" },
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-1 brd15 text-white" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: "p-1 text-uppercase" },
                                    r.a.createElement("i", {
                                      className:
                                        "mdi mdi-coin align-middle mr-1",
                                    }),
                                    "BET ",
                                    b("amount"),
                                    " ",
                                    r.a.createElement("br", null),
                                    r.a.createElement("img", {
                                      className: "mini-coin-9",
                                      src: "/assets/images/kes.png",
                                    }),
                                    r.a.createElement(
                                      "b",
                                      { className: "num-style" },
                                      " ",
                                      Object(P.o)(a),
                                      " KES"
                                    )
                                  )
                                )
                              ),
                              r.a.createElement(
                                E.a,
                                { md: 6, className: "col-6" },
                                r.a.createElement(
                                  _.a,
                                  { className: "mb-1 brd15 text-white" },
                                  r.a.createElement(
                                    _.a.Body,
                                    { className: "p-1 text-uppercase" },
                                    r.a.createElement("i", {
                                      className:
                                        "mdi mdi-coins align-middle mr-1",
                                    }),
                                    b("profit"),
                                    " ",
                                    r.a.createElement("br", null),
                                    r.a.createElement("img", {
                                      className: "mini-coin-9",
                                      src: "/assets/images/kes.png",
                                    }),
                                    r.a.createElement(
                                      "b",
                                      {
                                        className: d
                                          ? "num-style text-danger"
                                          : "num-style text-success",
                                      },
                                      Object(P.o)(s),
                                      " KES"
                                    )
                                  )
                                )
                              ),
                              !1 !== h &&
                                null !== h &&
                                r.a.createElement(
                                  E.a,
                                  { md: 12, className: "col-12" },
                                  r.a.createElement(
                                    _.a,
                                    { className: "mb-1 brd15" },
                                    r.a.createElement(
                                      _.a.Body,
                                      {
                                        className:
                                          "p-1 text-white text-uppercase",
                                      },
                                      r.a.createElement("img", {
                                        src:
                                          "/assets/images/icons/" + n + ".png",
                                        className: "img-fluid w-15 single-game",
                                        "data-tip": n,
                                        alt: n,
                                      }),
                                      "crash" === n ? "Cashout" : "Result",
                                      r.a.createElement("br", null),
                                      r.a.createElement(
                                        "div",
                                        { className: "mt-3 font-15" },
                                        h,
                                        "x"
                                      )
                                    )
                                  )
                                )
                            )
                          )
                        )
                      )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Rn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).getCreditAndCoins = function (e) {
                if (n._isMounted) {
                  var t = e.credit,
                    a = e.bonus;
                  n.setState({ credits: t, loading: !1 }),
                    n.setState({ bonus: a, loading: !1 });
                }
              }),
              (n.handleClose = function () {
                n.setState({
                  detail: !0,
                  tip: !1,
                  notFound: !1,
                  show: !1,
                  effect: "zoomOut",
                });
              }),
              (n.getUserInfo = function (e) {
                e.status
                  ? n.setState({ haveData: "ok", data: e })
                  : n.setState({ notFound: !0 });
              }),
              (n.state = {
                show: !1,
                detail: !0,
                tip: !1,
                notFound: !1,
                data: [],
                coin: null !== T.a.getKey("coin") ? T.a.getKey("coin") : "kes",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.modal && this.setState({ show: !1 });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.USER_INFO, function (t) {
                    return e.getUserInfo(Object(P.k)(t));
                  }),
                    q.a.on(X.a.CREDIT, function (t) {
                      return e.getCreditAndCoins(Object(P.k)(t));
                    }),
                    P.d.on("force_modal_user", function () {
                      e.setState({
                        show: !0,
                        effect: "zoomIn",
                        haveData: "no",
                        data: [],
                      });
                    }),
                    P.d.on("force_modal_tip", function () {
                      e.setState({ tip: !0, detail: !1 });
                    }),
                    P.d.on("force_modal_tip_close", function () {
                      e.setState({ tip: !1, detail: !0 });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.chart_coin;
                  e.t;
                  return (
                    (t = t || this.state.coin),
                    r.a.createElement(
                      y.a,
                      {
                        size: "md",
                        backdrop: "static",
                        centered: !0,
                        show: this.state.show,
                        onHide: this.handleClose,
                        "aria-labelledby": "user-modal",
                        className: "animated " + this.state.effect,
                      },
                      r.a.createElement(
                        y.a.Header,
                        null,
                        "User Information",
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            className: "close p-2",
                            onClick: this.handleClose,
                          },
                          r.a.createElement("i", { className: "mdi mdi-close" })
                        )
                      ),
                      r.a.createElement(
                        y.a.Body,
                        { className: "user-modal-bg p-1" },
                        this.state.notFound
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                {
                                  className: "text-center text-yellow",
                                  style: { minHeight: 500 },
                                },
                                "User Not Found"
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              this.state.detail
                                ? r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          !0 === this.state.tip
                                            ? "container-fluid mduser animated fadeOut"
                                            : "container-fluid mduser",
                                      },
                                      r.a.createElement(on, {
                                        haveData: this.state.haveData,
                                        token: this.state.data.id,
                                        name: this.state.data.name,
                                        coin: t,
                                        data: this.state.data,
                                      })
                                    )
                                  )
                                : r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    !0 === this.state.tip &&
                                      r.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "container-fluid animated fadeIn",
                                        },
                                        r.a.createElement(An, {
                                          name: this.state.data.name,
                                        })
                                      )
                                  )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Wn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleClose = function () {
                n.setState({ show: !1, loading: !0, effect: "zoomOut" });
              }),
              (n.state = {
                show: !1,
                loading: !0,
                gid: null,
                playerRow: [],
                numbers: [],
                busted: null,
                date: null,
                sha256: null,
                hash: null,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentWillReceiveProps",
                value: function (e, t) {
                  e.modal && this.setState({ show: !1 });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  q.a.on(X.a.GAME_DETAILS, function (t) {
                    return e.gameInfo(Object(P.k)(t));
                  }),
                    P.d.on("force_modal_game", function () {
                      e.setState({
                        haveData: "no",
                        playerRow: [],
                        busted: null,
                        date: null,
                        sha256: null,
                        hash: null,
                        gid: null,
                        loading: !0,
                        show: !0,
                        effect: "pulse",
                      });
                    });
                },
              },
              {
                key: "gameInfo",
                value: function (e) {
                  var t = this;
                  if (e.info) {
                    this.setState({
                      loading: !1,
                      playerRow: [],
                      haveData: "ok",
                    });
                    var a,
                      n = e.info;
                    (a =
                      null !== n.busted &&
                      void 0 !== n.busted &&
                      "undefined" !== n.busted &&
                      "" !== n.busted
                        ? n.busted
                        : n.numbers),
                      this.setState({
                        busted: a,
                        sha256: p()(n.hash),
                        hash: n.hash,
                        date: n.date,
                        gid: n.gid,
                      });
                    var s,
                      i =
                        ((s = e.data),
                        P.i.sortBy(s, function (e) {
                          return e.profit ? -e.profit : null;
                        }));
                    (i = P.i.xor(i)),
                      P.i.reverse(i).forEach(function (e, a) {
                        var n = r.a.createElement(Fn, {
                          clicked: t.handleClose,
                          array: e,
                          key: a,
                        });
                        t.setState(function (e) {
                          return {
                            playerRow: [n].concat(Object(o.a)(e.playerRow)),
                          };
                        });
                      });
                  } else
                    this.setState({ show: !1, loading: !0, effect: "zoomOut" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.t,
                    t = this.state,
                    a = t.busted,
                    n = t.date,
                    s = t.sha256,
                    i = t.hash,
                    o = t.playerRow,
                    l = t.gid,
                    c = t.loading,
                    u = a >= 1.9 ? "success" : "danger";
                  return r.a.createElement(
                    y.a,
                    {
                      size: "md",
                      centered: !0,
                      backdrop: "static",
                      show: this.state.show,
                      onHide: this.handleClose,
                      "aria-labelledby": "game-md-modal",
                      className: "animated " + this.state.effect,
                    },
                    r.a.createElement(
                      y.a.Header,
                      { className: "Header" },
                      e("game_stats"),
                      " ",
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close p-2",
                          onClick: this.handleClose,
                        },
                        r.a.createElement("i", { className: "mdi mdi-close" })
                      )
                    ),
                    o &&
                      r.a.createElement(
                        y.a.Body,
                        null,
                        c
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                {
                                  className: "text-center",
                                  style: { minHeight: 200 },
                                },
                                r.a.createElement("div", {
                                  class: "text-info my-1 user-loader",
                                  role: "status",
                                })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                v.a,
                                {
                                  className:
                                    "text-darker pt-0 mb-1 user-detail",
                                },
                                r.a.createElement(
                                  E.a,
                                  { md: 12, sm: 12 },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "review-box text-center align-item-center p-0",
                                    },
                                    r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                        "h1",
                                        { className: "my-0 py-0 text-" + u },
                                        a,
                                        r.a.createElement(
                                          "span",
                                          { className: "font-" },
                                          "x"
                                        )
                                      ),
                                      r.a.createElement(
                                        "h5",
                                        { className: "mt-1 pt-0 text-" + u },
                                        e("busted")
                                      )
                                    ),
                                    r.a.createElement(
                                      v.a,
                                      { className: "my-3" },
                                      r.a.createElement(
                                        E.a,
                                        {
                                          md: 6,
                                          sm: 6,
                                          className: "",
                                          style: { color: "#C67512" },
                                        },
                                        e("betting_id"),
                                        ": ",
                                        l
                                      ),
                                      r.a.createElement(
                                        E.a,
                                        {
                                          md: 6,
                                          sm: 6,
                                          className: "text-white",
                                        },
                                        e("date"),
                                        ": ",
                                        Object(P.n)(n)
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  E.a,
                                  { md: 12, sm: 12, className: "text-center" },
                                  r.a.createElement(
                                    "div",
                                    { className: "form-group" },
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "input-group-text h-40 bg-cs44",
                                          },
                                          "HASH"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        className:
                                          "form-control no-radius pointer mb-2",
                                        value: P.i.toString(i),
                                        readOnly: !0,
                                      })
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "input-group" },
                                      r.a.createElement(
                                        "div",
                                        { className: "input-group-append" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "input-group-text h-40 bg-cs44",
                                          },
                                          "MD5"
                                        )
                                      ),
                                      r.a.createElement("input", {
                                        type: "text",
                                        className:
                                          "form-control no-radius pointer",
                                        value: P.i.toString(s),
                                        readOnly: !0,
                                      })
                                    )
                                  )
                                )
                              )
                            ),
                        c
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "div",
                                {
                                  className: "text-center",
                                  style: { minHeight: 200 },
                                },
                                r.a.createElement("div", {
                                  class:
                                    "spinner-border text-info my-2 user-loader",
                                  role: "status",
                                })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "h4",
                                {
                                  className: "mb-3 mt-0",
                                  style: { color: "#C67512" },
                                },
                                "Players List"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "table-responsive game-stats" },
                                r.a.createElement(
                                  "table",
                                  { className: "table" },
                                  r.a.createElement(
                                    "thead",
                                    { className: "table-header" },
                                    r.a.createElement(
                                      "tr",
                                      null,
                                      r.a.createElement(
                                        "th",
                                        null,
                                        e("player")
                                      ),
                                      r.a.createElement("th", null, e("bet")),
                                      r.a.createElement("th", null, e("profit"))
                                    )
                                  ),
                                  r.a.createElement("tbody", null, o)
                                ),
                                0 === o.length &&
                                  r.a.createElement(
                                    "p",
                                    { className: "text-center text-muted" },
                                    e("no_one_playing_on_this_round")
                                  )
                              )
                            )
                      )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Fn = (function (e) {
          Object(u.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return Object(l.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.array,
                    a = e.key,
                    n = e.clicked,
                    s = "text-success",
                    i = P.i.toNumber(t.profit),
                    o = P.i.upperCase(t.coin);
                  return (
                    (0 !== i && 0 !== i && "0.00000000" !== i) ||
                      ((i = "-" + t.amount), (s = "text-warning")),
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "tr",
                        { className: s, key: a },
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(ae, {
                            clicked: n,
                            username: t.name,
                            isWinner: s,
                          })
                        ),
                        r.a.createElement(
                          "td",
                          { className: "num-style" },
                          r.a.createElement("img", {
                            src: "/assets/images/" + o + ".png",
                            className: "mini-coin-8",
                            alt: o,
                          }),
                          Object(P.o)(t.amount),
                          " ",
                          o
                        ),
                        r.a.createElement(
                          "td",
                          { className: "num-style" },
                          r.a.createElement("img", {
                            src: "/assets/images/" + o + ".png",
                            className: "mini-coin-8",
                            alt: o,
                          }),
                          Object(P.o)(i),
                          " ",
                          o
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component);
      var Bn = Object(d.b)(function (e) {
          return { coin: e.items.coin, chart_coin: e.items.chart_coin };
        }, {})(function () {
          return r.a.createElement(
            n.Suspense,
            { fallback: r.a.createElement(Tn, null) },
            r.a.createElement(Pn, null)
          );
        }),
        Ln = a(92),
        Un = a(206),
        Kn = { items: {} };
      var Hn = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Kn,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "wheel":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { items: t.payload }
              );
            case "COIN":
              return Object(it.a)(Object(it.a)({}, e), {}, { coin: t.payload });
            case "PLAY":
              return Object(it.a)(Object(it.a)({}, e), {}, { play: t.payload });
            case "SET_TARGET":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { starget: t.payload }
              );
            case "ROWS":
              return Object(it.a)(Object(it.a)({}, e), {}, { rows: t.payload });
            case "RISK":
              return Object(it.a)(Object(it.a)({}, e), {}, { risk: t.payload });
            case "CHART_COIN":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { chart_coin: t.payload }
              );
            case "CHAT_NAME":
              return Object(it.a)(Object(it.a)({}, e), {}, { name: t.payload });
            case "CHAT_COUNTRY":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { country: t.payload }
              );
            case "CHAT_GIF":
              return Object(it.a)(Object(it.a)({}, e), {}, { gif: t.payload });
            case "TARGET_USER":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { target: t.payload }
              );
            case "HIDE_BET":
              return Object(it.a)(Object(it.a)({}, e), {}, { bet: t.payload });
            case "SET_CLASSIC_DICE_RESULT":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { classic_dice_result: t.payload }
              );
            case "CRASH_WINNER_TEXT":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { profit: t.payload }
              );
            case "CRASH_IM_IN_GAME":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { im_in_game: t.payload }
              );
            case "NUMBERS_OF_LANDS":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { lands: t.payload }
              );
            case "SET_MODAL":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { modal: t.payload }
              );
            case "SET_PLAY_WHEEL":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { play_wheel: t.payload }
              );
            case "SET_BET":
              return Object(it.a)(Object(it.a)({}, e), {}, { bets: t.payload });
            case "FORCE_MODAL":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { force_modal: t.payload }
              );
            case "SIDEBAR_DISPLAY":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { sidebar_display: t.payload }
              );
            case "SET_BOMB_WIRE":
              return Object(it.a)(Object(it.a)({}, e), {}, { wire: t.payload });
            case "CURRENT_CREDIT":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { credit: t.payload }
              );
            case "GET_WALLET":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { get_wallet: t.payload }
              );
            case "GET_AUTH":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { get_auth: t.payload }
              );
            case "CLASSIC_DICE_SET_RANGE":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { classic_dice_payout: t.payload }
              );
            case "CLASSIC_DICE_SET_CHANCE":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { classic_dice_chance: t.payload }
              );
            case "CLASSIC_DICE_SET_TYPE":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { classic_dice_type: t.payload }
              );
            case "ROULETTE_NUMBER":
              return Object(it.a)(
                Object(it.a)({}, e),
                {},
                { selected_number: t.payload }
              );
            default:
              return e;
          }
        },
        zn = Object(Ln.b)({ items: Hn }),
        Gn = [Un.a],
        Yn = Object(Ln.d)(zn, {}, Object(Ln.c)(Ln.a.apply(void 0, Gn))),
        qn =
          (a(334),
          a(335),
          a(336),
          a(337),
          a(338),
          a(339),
          a(340),
          a(341),
          a(207)),
        Xn = a(79);
      O.a
        .use(qn.a)
        .use(Xn.e)
        .init({
          fallbackLng: "en",
          debug: !0,
          interpolation: { escapeValue: !1 },
        });
      O.a;
      i.a.render(
        r.a.createElement(d.a, { store: Yn }, r.a.createElement(Bn, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    9: function (e, t, a) {
      "use strict";
      t.a = {
        RPS: "651cb023e8a7c22b217106f3175522d3dk4v6",
        RPS_DISSCONECT: "7c3116ff7b0ec29ef8b0e56c71a080b3dk4v6",
        ROOM: "fef2576d57dbde017a3a8e7df699ef6ddk4v6",
        CREDIT: "660cb6fe7737d7b70e7a07b706b93f70dk4v6",
        MY_BETS: "fd2a0537bcdae1736f552707b3bd3156dk4v6",
        MY_HISTORY: "fd2a0537bcdae1736f552707b3bd3157dk4v6",
        BANKROLL: "0c30c5a602062107a5d356d0eb1ebb8edk4v6",
        LAST_BETS_BY_GAME: "b87a2e8036f0617125ffb69dd5673d7bdk4v6",
        LAST_BETS: "62f8c260fbce6de8e5ed19767977cc1edk4v6",
        TOP_WINNERS: "b7cafd57089c07ade71b7776085660a0dk4v6",
        GET_ADDRESS: "396bbdcf7c16c3f3795d932b698ef78fdk4v6",
        CREDIT_COIN: "e70b7663b91b67a7f7e027c00f5a30e2dk4v6",
        USER_INFO: "18566cda79f670c2098360799275aa31dk4v6",
        USER_CHART: "1cf37d076d187195c2d7d5e3678dfe0bdk4v6",
        GAME_DETAILS: "657cdcaf1b9072c7d708bb3766bd3915dk4v6",
        NOTIFICATION: "f37bd2f66651e7d76f6d38770f2bc5dddk4v6",
        UPDATE_PAYMENT_STATUS: "23723ece8c3db7267fcaa661ec6a7f72dk4v6",
        DEPOSIT_HISTORY: "cccff8ec16dfd682555f7ef1566c7757dk4v6",
        MESSAGES: "de70938879b75d3db63bba721c93e018dk4v6",
        ADD_MESSAGES: "292d72d37f7e189059f7f998737de9bbdk4v6",
        SUBMIT_NEW_WITHDRAWL: "7c0b37955cf21c7f2f3773c1268edc08dk4v6",
        ADD_CHAT: "1e6ccf0ddced017179b173e5cc78beeadk4v6",
        CHATS: "7a7fe97bbc5ff21a561b79986db975c5dk4v6",
        ADD_FRIEND: "265ea6ce905188a0751e8f0273d30bb7dk4v6",
        SEND_TIP: "573a867973fa586555cab080e7d837addk4v6",
        EDIT_ACCOUNT: "ca6e08ddde39ee9f965270b7d8175d17dk4v6",
        EDIT_PASSWORD: "ed7feda03376fd39087183552f093e6adk4v6",
        WALLET_HISTORY: "c23c59dd3258d3a53d7132652f8bf98adk4v6",
        MY_FRIENDS: "1e73d7d857e371f00a56105a7a38a576dk4v6",
        SAVE_ACCOUNT: "70a765ca577e8cc77d3e27f70e56b237dk4v6",
        SAVE_ACCOUNT_PASSWORD: "bd3d5bf93eb508dc9282a1077a16a773dk4v6",
        SAVE_AVATAR: "d0779dab750dc765ddcf06b190ad82bfdk4v6",
        ONLINE: "7f76165777d11ee5836777d85df2cdabdk4v6",
        GET_UID: "002b67aa7d872615cc6ef9ffa78c766ddk4v6",
        AUTH: "fa53b91ccc1b78668d5af58e1ed3a785dk4v6",
        ADMIN_ADD_CHAT: "b638e57f1f2bb7979c9a7796d6be671ddk4v6",
        UPDATE_CREDIT: "80d8b773e76b21777faaccfbd3c2a687dk4v6",
        ADD_BET: "86751663a7022702d9630a115515da7bdk4v6",
        SUPPORT_EMAIL: "92beb160c15977c905cb7b72138e26c0dk4v6",
        LOGIN_USER: "faf9ba208ad90e7313b6ffafde53b801dk4v6",
        LOGIN_USER_GOOGLE: "383f7bf0257c3ef6cab20278dd1579bedk4v6",
        REGISTER_USER: "0a2637735ee07dd5f0e5eba7b9ca1ce7dk4v6",
        RESET_PASSWORD: "62a0b91a9b98a7ec19f27e72c13de207dk4v6",
        RESET_CODE: "62a0b91a9b98a7ec19f27e72c13gx890dk4v6",
        LOGOUT_USER: "1f7009c5312bab76e660578ecbe08350dk4v6",
        CREDIT_ERROR: "1fdf15e7dcba3211ebe22e5fdbcec79fdk4v6",
        RAIN: "23678db5efde9ab76bce8c23a6d91b50dk4v6",
        MY_AFF: "158674db5efde9ab76bce8c23a6d91b50dk4v6",
        HISTORY_CRASH: "dcaa9fd1f23aaf0c23f570becf35b72fdk4v6",
        STATUS_CRASH: "dcaa9fd7f23aaf0c29f570becf35b76fdk4v6",
        PLAYERS_CRASH: "0fd0a8ecb587292055e1c775d6c39a7edk4v6",
        PLAY_CRASH: "05131bff83db9a797b5e9793cfa3bcf6dk4v6",
        FINISH_CRASH: "97c73db9a306213ac2b5c3bdecd20e75dk4v6",
        WAITING_CRASH: "be91b2a797f2961c59b2780d2cd72e12dk4v6",
        STARTED_CRASH: "e112267b9590259c29b9301fa39c1f3ddk4v6",
        BUSTED_CRASH: "a8f6d02877d198b08b7c7f2a1af69d06dk4v6",
        ERROR_CRASH: "d9fe15b677f93abbe07076807291e9c6dk4v6",
        STK_DEPOSIT: "660cb6fe7737d7b70e7a07ty90xci65rdk4v6",
      };
    },
  },
  [[217, 1, 2]],
]);
//# sourceMappingURL=main.22c73255.chunk.js.map
