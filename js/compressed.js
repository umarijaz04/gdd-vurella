/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  function g(e) {
    return null != e && e === e.window;
  }
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    v = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    m = {},
    x = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    c = { type: !0, src: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i = (t = t || E).createElement("script");
    if (((i.text = e), n)) for (r in c) n[r] && (i[r] = n[r]);
    t.head.appendChild(i).parentNode.removeChild(i);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var k = function (e, t) {
      return new k.fn.init(e, t);
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !x(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: "3.3.1",
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || x(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((o = i
                        ? ((i = !1), n && Array.isArray(n) ? n : [])
                        : n && k.isPlainObject(n)
                        ? n
                        : {}),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== o.call(e) ||
          ((t = r(e)) &&
            ("function" !=
              typeof (n = y.call(t, "constructor") && t.constructor) ||
              a.call(n) !== l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        b(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(f, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) != a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return v.apply([], a);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    function f(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n
        ? t
        : r < 0
        ? String.fromCharCode(65536 + r)
        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function i() {
      T();
    }
    var e,
      d,
      b,
      o,
      a,
      h,
      p,
      g,
      w,
      u,
      l,
      T,
      C,
      s,
      E,
      v,
      c,
      y,
      m,
      k = "sizzle" + +new Date(),
      x = n.document,
      S = 0,
      r = 0,
      D = ae(),
      N = ae(),
      A = ae(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      q = {}.hasOwnProperty,
      t = [],
      L = t.pop,
      H = t.push,
      O = t.push,
      P = t.slice,
      M = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      I = "[\\x20\\t\\r\\n\\f]",
      W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      $ =
        "\\[" +
        I +
        "*(" +
        W +
        ")(?:" +
        I +
        "*([*^$|!~]?=)" +
        I +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        W +
        "))|)" +
        I +
        "*\\]",
      B =
        ":(" +
        W +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        $ +
        ")*)|.*)\\)|)",
      F = new RegExp(I + "+", "g"),
      _ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
      z = new RegExp("^" + I + "*," + I + "*"),
      X = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
      U = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
      V = new RegExp(B),
      G = new RegExp("^" + W + "$"),
      Y = {
        ID: new RegExp("^#(" + W + ")"),
        CLASS: new RegExp("^\\.(" + W + ")"),
        TAG: new RegExp("^(" + W + "|[*])"),
        ATTR: new RegExp("^" + $),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            I +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            I +
            "*(?:([+-]|)" +
            I +
            "*(\\d+)|))" +
            I +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            I +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            I +
            "*((?:-\\d)?\\d*)" +
            I +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ie = ve(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((t = P.call(x.childNodes)), x.childNodes),
        t[x.childNodes.length].nodeType;
    } catch (n) {
      O = {
        apply: t.length
          ? function (e, t) {
              H.apply(e, P.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : x) !== C && T(t), (t = t || C), E)
      ) {
        if (11 !== p && (u = Z.exec(e)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && m(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return O.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(n, t.getElementsByClassName(i)), n;
          }
        if (d.qsa && !A[e + " "] && (!v || !v.test(e))) {
          if (1 !== p) (f = t), (c = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(ne, re))
                : t.setAttribute("id", (s = k)),
                o = (l = h(e)).length;
              o--;

            )
              l[o] = "#" + s + " " + ge(l[o]);
            (c = l.join(",")), (f = (ee.test(e) && de(t.parentNode)) || t);
          }
          if (c)
            try {
              return O.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              s === k && t.removeAttribute("id");
            }
        }
      }
      return g(e.replace(_, "$1"), t, n, r);
    }
    function ae() {
      var n = [];
      function r(e, t) {
        return (
          n.push(e + " ") > b.cacheLength && delete r[n.shift()],
          (r[e + " "] = t)
        );
      }
      return r;
    }
    function se(e) {
      return (e[k] = !0), e;
    }
    function ue(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ie(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function pe(a) {
      return se(function (o) {
        return (
          (o = +o),
          se(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function de(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = oe.support = {}),
    (a = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (T = oe.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : x;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((s = (C = r).documentElement),
            (E = !a(C)),
            x !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", i, !1)
                : n.attachEvent && n.attachEvent("onunload", i)),
            (d.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ue(function (e) {
              return (
                (s.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, f);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, f);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (c = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ue(function (e) {
                (s.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + I + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + I + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + I + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (s.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (y =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              ue(function (e) {
                (d.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  c.push("!=", B);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (c = c.length && new RegExp(c.join("|"))),
            (t = K.test(s.compareDocumentPosition)),
            (m =
              t || K.test(s.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === x && m(x, e))
                        ? -1
                        : t === C || (t.ownerDocument === x && m(x, t))
                        ? 1
                        : u
                        ? M(u, e) - M(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? M(u, e) - M(u, t)
                      : 0;
                  if (i === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === x
                    ? -1
                    : s[r] === x
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        (t = t.replace(U, "='$1']")),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!c || !c.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = y.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, C, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), m(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(ne, re);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((b = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, f)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, f)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, f).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = D[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                D(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y != m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      for (; l; ) {
                        for (a = e; (a = a[l]); )
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      for (
                        d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                            r[1]) && r[2],
                          a = s && c.childNodes[s];
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                      )
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      for (
                        ;
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                        ((x
                          ? a.nodeName.toLowerCase() !== f
                          : 1 !== a.nodeType) ||
                          !++d ||
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a !== e));

                      );
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, t) {
                      for (var n, r = a(e, o), i = r.length; i--; )
                        e[(n = M(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: se(function (e) {
            var r = [],
              i = [],
              s = p(e.replace(_, "$1"));
            return s[k]
              ? se(function (e, t, n, r) {
                  for (var i, o = s(e, null, r, []), a = e.length; a--; )
                    (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: se(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: se(function (t) {
            return (
              (t = t.replace(te, f)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: se(function (n) {
            return (
              G.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(te, f).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === s;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: fe(!1),
          disabled: fe(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: pe(function () {
            return [0];
          }),
          last: pe(function (e, t) {
            return [t - 1];
          }),
          eq: pe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: pe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: pe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = (function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      b.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      })(e);
    function he() {}
    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function ve(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function ye(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function me(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function xe(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = xe(v)),
        y && !y[k] && (y = xe(y, e)),
        se(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : me(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v))
            for (i = me(p, u), v(i, [], n, r), o = i.length; o--; )
              (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          if (e) {
            if (y || d) {
              if (y) {
                for (i = [], o = p.length; o--; )
                  (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              for (o = p.length; o--; )
                (a = p[o]) &&
                  -1 < (i = y ? M(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = me(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : O.apply(t, p);
        })
      );
    }
    function be(v, y) {
      function e(e, t, n, r, i) {
        var o,
          a,
          s,
          u = 0,
          l = "0",
          c = e && [],
          f = [],
          p = w,
          d = e || (x && b.find.TAG("*", i)),
          h = (S += null == p ? 1 : Math.random() || 0.1),
          g = d.length;
        for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
          if (x && o) {
            for (
              a = 0, t || o.ownerDocument === C || (T(o), (n = !E));
              (s = v[a++]);

            )
              if (s(o, t || C, n)) {
                r.push(o);
                break;
              }
            i && (S = h);
          }
          m && ((o = !s && o) && u--, e && c.push(o));
        }
        if (((u += l), m && l !== u)) {
          for (a = 0; (s = y[a++]); ) s(c, f, t, n);
          if (e) {
            if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = L.call(r));
            f = me(f);
          }
          O.apply(r, f),
            i && !e && 0 < f.length && 1 < u + y.length && oe.uniqueSort(r);
        }
        return i && ((S = h), (w = p)), c;
      }
      var m = 0 < y.length,
        x = 0 < v.length;
      return m ? se(e) : e;
    }
    return (
      (he.prototype = b.filters = b.pseudos),
      (b.setFilters = new he()),
      (h = oe.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = N[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (o in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = X.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(_, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = Y[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? oe.error(e) : N(e, s).slice(0);
        }),
      (p = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = A[e + " "];
          if (!o) {
            for (n = (t = t || h(e)).length; n--; )
              (o = (function e(t) {
                for (
                  var i,
                    n,
                    r,
                    o = t.length,
                    a = b.relative[t[0].type],
                    s = a || b.relative[" "],
                    u = a ? 1 : 0,
                    l = ve(
                      function (e) {
                        return e === i;
                      },
                      s,
                      !0
                    ),
                    c = ve(
                      function (e) {
                        return -1 < M(i, e);
                      },
                      s,
                      !0
                    ),
                    f = [
                      function (e, t, n) {
                        var r =
                          (!a && (n || t !== w)) ||
                          ((i = t).nodeType ? l : c)(e, t, n);
                        return (i = null), r;
                      },
                    ];
                  u < o;
                  u++
                )
                  if ((n = b.relative[t[u].type])) f = [ve(ye(f), n)];
                  else {
                    if (
                      (n = b.filter[t[u].type].apply(null, t[u].matches))[k]
                    ) {
                      for (r = ++u; r < o && !b.relative[t[r].type]; r++);
                      return xe(
                        1 < u && ye(f),
                        1 < u &&
                          ge(
                            t
                              .slice(0, u - 1)
                              .concat({
                                value: " " === t[u - 2].type ? "*" : "",
                              })
                          ).replace(_, "$1"),
                        n,
                        u < r && e(t.slice(u, r)),
                        r < o && e((t = t.slice(r))),
                        r < o && ge(t)
                      );
                    }
                    f.push(n);
                  }
                return ye(f);
              })(t[n]))[k]
                ? r.push(o)
                : i.push(o);
            (o = A(e, be(i, r))).selector = e;
          }
          return o;
        }),
      (g = oe.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, f), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = Y.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !b.relative[(s = a.type)]);

            )
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, f),
                  (ee.test(o[0].type) && de(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && ge(o))))
                  return O.apply(n, r), n;
                break;
              }
          }
          return (
            (l || p(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && de(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(j).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(C);
  (k.find = d),
    (k.expr = d.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = d.uniqueSort),
    (k.text = d.getText),
    (k.isXMLDoc = d.isXML),
    (k.contains = d.contains),
    (k.escapeSelector = d.escape);
  function h(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function T(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var S = k.expr.match.needsContext;
  function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function A(e, n, r) {
    return x(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(A(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(A(this, e || [], !0));
      },
      is: function (e) {
        return !!A(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : x(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(k)
        : k.makeArray(e, this);
    if (
      !(r =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : q.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof k ? t[0] : t),
        k.merge(
          this,
          k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
        ),
        N.test(r[1]) && k.isPlainObject(t))
      )
        for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = k.fn),
    (j = k(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!S.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return D(e, "iframe")
            ? e.contentDocument
            : (D(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (H[r] || k.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && x((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && x((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    function i() {
      for (s = s || r.once, a = o = !0; l.length; c = -1)
        for (t = l.shift(); ++c < u.length; )
          !1 === u[c].apply(t[0], t[1]) &&
            r.stopOnFalse &&
            ((c = u.length), (t = !1));
      r.memory || (t = !1), (o = !1), s && (u = t ? [] : "");
    }
    var o,
      t,
      a,
      s,
      u = [],
      l = [],
      c = -1,
      f = {
        add: function () {
          return (
            u &&
              (t && !o && ((c = u.length - 1), l.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  x(t)
                    ? (r.unique && f.has(t)) || u.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !o && i()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              for (var n; -1 < (n = k.inArray(t, u, n)); )
                u.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, u) : 0 < u.length;
        },
        empty: function () {
          return (u = u && []), this;
        },
        disable: function () {
          return (s = l = []), (u = t = ""), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (s = l = []), t || o || (u = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              o || i()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = x(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && x(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        x(t)
                          ? s
                            ? t.call(e, l(u, o, M, s), l(u, o, R, s))
                            : (u++,
                              t.call(
                                e,
                                l(u, o, M, s),
                                l(u, o, R, s),
                                l(u, o, M, o.notifyWith)
                              ))
                          : (a !== M && ((n = void 0), (r = [e])),
                            (s || o.resolveWith)(n, r));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== R && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, x(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, x(t) ? t : M)),
                    o[2][3].add(l(0, e, x(n) ? n : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (i[t] = this),
              (o[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(i, o);
          };
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = k.Deferred();
        if (
          n <= 1 &&
          (I(e, a.done(t(r)).resolve, a.reject, !n),
          "pending" === a.state() || x(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) I(o[r], t(r), a.reject);
        return a.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var $ = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      $.then(e).catch(function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          $.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = $.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var F = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) F(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        x(r) || (a = !0),
        l &&
          (t = a
            ? (t.call(e, r), null)
            : ((l = t),
              function (e, t, n) {
                return l.call(k(e), n);
              })),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function U(e) {
    return e.replace(_, "ms-").replace(z, X);
  }
  function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function G() {
    this.expando = k.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[U(t)] = n;
        else for (r in t) i[U(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][U(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(U)
              : (t = U(t)) in r
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !k.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : F(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e) {
                    if (void 0 !== (t = Q.get(o, n))) return t;
                    if (void 0 !== (t = Z(o, n))) return t;
                  } else
                    this.each(function () {
                      Q.set(this, n, e);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf("data-") &&
              ((r = U(r.slice(5))), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(a, [a]);
        }
        var r,
          i = 1,
          o = k.Deferred(),
          a = this,
          s = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (r = Y.get(a[s], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  function ee(e, t, n, r) {
    var i,
      o,
      a = {};
    for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
    for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
    return i;
  }
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          k.contains(e.ownerDocument, e) &&
          "none" === k.css(e, "display"))
      );
    };
  function oe(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c = (k.cssNumber[t] || ("px" !== l && +u)) && ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ae = {};
  function se(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ie(r) &&
              (l[c] =
                ((u = s = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ae[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ae[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return se(this, !0);
    },
    hide: function () {
      return se(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ie(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var ue = /^(?:checkbox|radio)$/i,
    le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ce = /^$|^module$|\/(?:java|ecma)script/i,
    fe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function pe(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && D(e, t)) ? k.merge([e], n) : n;
  }
  function de(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (fe.optgroup = fe.option),
    (fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead),
    (fe.th = fe.td);
  var he,
    ge,
    ve = /<|&#?\w+;/;
  function ye(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (ve.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (le.exec(o) || ["", ""])[1].toLowerCase(),
              u = fe[s] || fe._default,
              a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = k.contains(o.ownerDocument, o)),
        (a = pe(f.appendChild(o), "script")),
        l && de(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) ce.test(o.type || "") && n.push(o);
    return f;
  }
  (he = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (ge = E.createElement("input")).setAttribute("type", "radio"),
    ge.setAttribute("checked", "checked"),
    ge.setAttribute("name", "t"),
    he.appendChild(ge),
    (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (he.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue);
  var me = E.documentElement,
    xe = /^key/,
    be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;
  function Te() {
    return !0;
  }
  function Ce() {
    return !1;
  }
  function Ee() {
    try {
      return E.activeElement;
    } catch (e) {}
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ce;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && k.find.matchesSelector(me, i),
            n.guid || (n.guid = k.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (e) {
                  return void 0 !== k && k.event.triggered !== e.type
                    ? k.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            l = (e = (e || "").match(P) || [""]).length;
          l--;

        )
          (d = g = (s = we.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(P) || [""]).length; l--; )
          if (
            ((d = g = (s = we.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = k.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Y.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          a = k.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: x(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Ee() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Ee() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && D(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return D(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Te
              : Ce),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Ce,
      isPropagationStopped: Ce,
      isImmediatePropagationStopped: Ce,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Te),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Te),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Te),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
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
        char: !0,
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
        which: function (e) {
          var t = e.button;
          return null == e.which && xe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && be.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Ce),
            this.each(function () {
              k.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var Se =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    De = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (D(e, "table") &&
        D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function qe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function He(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Y.hasData(e) &&
        ((o = Y.access(e)), (a = Y.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      Q.hasData(e) && ((s = Q.access(e)), (u = k.extend({}, s)), Q.set(t, u));
    }
  }
  function Oe(n, r, i, o) {
    r = v.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = x(d);
    if (h || (1 < f && "string" == typeof d && !m.checkClone && Ne.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Oe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = ye(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(pe(e, "script"), qe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, pe(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Le), c = 0; c < s; c++)
          (u = a[c]),
            ce.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl && k._evalUrl(u.src)
                : b(u.textContent.replace(Ae, ""), l, u));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(pe(r)),
        r.parentNode &&
          (n && k.contains(r.ownerDocument, r) && de(pe(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(Se, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = k.contains(e.ownerDocument, e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = pe(c), r = 0, i = (o = pe(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            (l = void 0),
            "input" === (l = u.nodeName.toLowerCase()) && ue.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || pe(e), a = a || pe(c), r = 0, i = o.length; r < i; r++)
            He(o[r], a[r]);
        else He(e, c);
      return (
        0 < (a = pe(c, "script")).length && de(a, !f && pe(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return F(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = je(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(pe(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return F(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !De.test(e) &&
              !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(pe(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Oe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(pe(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me,
    Re,
    Ie,
    We,
    $e,
    Be,
    Fe,
    _e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    ze = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Xe = new RegExp(re.join("|"), "i");
  function Ue() {
    var e;
    Fe &&
      ((Be.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
      (Fe.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
      me.appendChild(Be).appendChild(Fe),
      (e = C.getComputedStyle(Fe)),
      (Me = "1%" !== e.top),
      ($e = 12 === Ve(e.marginLeft)),
      (Fe.style.right = "60%"),
      (We = 36 === Ve(e.right)),
      (Re = 36 === Ve(e.width)),
      (Fe.style.position = "absolute"),
      (Ie = 36 === Fe.offsetWidth || "absolute"),
      me.removeChild(Be),
      (Fe = null));
  }
  function Ve(e) {
    return Math.round(parseFloat(e));
  }
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || ze(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          k.contains(e.ownerDocument, e) ||
          (a = k.style(e, t)),
        !m.pixelBoxStyles() &&
          _e.test(a) &&
          Xe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (Be = E.createElement("div")),
    (Fe = E.createElement("div")).style &&
      ((Fe.style.backgroundClip = "content-box"),
      (Fe.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === Fe.style.backgroundClip),
      k.extend(m, {
        boxSizingReliable: function () {
          return Ue(), Re;
        },
        pixelBoxStyles: function () {
          return Ue(), We;
        },
        pixelPosition: function () {
          return Ue(), Me;
        },
        reliableMarginLeft: function () {
          return Ue(), $e;
        },
        scrollboxSize: function () {
          return Ue(), Ie;
        },
      }));
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Je = /^--/,
    Ke = { position: "absolute", visibility: "hidden", display: "block" },
    Ze = { letterSpacing: "0", fontWeight: "400" },
    et = ["Webkit", "Moz", "ms"],
    tt = E.createElement("div").style;
  function nt(e) {
    return (
      k.cssProps[e] ||
      (k.cssProps[e] =
        (function (e) {
          if (e in tt) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; )
            if ((e = et[n] + t) in tt) return e;
        })(e) || e)
    );
  }
  function rt(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function ot(e, t, n) {
    var r = ze(e),
      i = Ge(e, t, r),
      o = "border-box" === k.css(e, "boxSizing", !1, r),
      a = o;
    if (_e.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (m.boxSizingReliable() || i === e.style[t])),
      ("auto" !== i &&
        (parseFloat(i) || "inline" !== k.css(e, "display", !1, r))) ||
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        it(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = U(t),
          u = Je.test(t),
          l = e.style;
        if (
          (u || (t = nt(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = oe(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            m.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = U(t);
      return (
        Je.test(t) || (t = nt(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in Ze && (i = Ze[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, s) {
      k.cssHooks[s] = {
        get: function (e, t, n) {
          if (t)
            return !Qe.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, s, n)
              : ee(e, Ke, function () {
                  return ot(e, s, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = ze(e),
            o = "border-box" === k.css(e, "boxSizing", !1, i),
            a = n && it(e, s, n, o, i);
          return (
            o &&
              m.scrollboxSize() === i.position &&
              (a -= Math.ceil(
                e["offset" + s[0].toUpperCase() + s.slice(1)] -
                  parseFloat(i[s]) -
                  it(e, s, "border", !1, i) -
                  0.5
              )),
            a &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[s] = t), (t = k.css(e, s))),
            rt(0, t, a)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ee(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = rt);
    }),
    k.fn.extend({
      css: function (e, t) {
        return F(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = ze(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    ((k.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }),
    (at.prototype.init.prototype = at.prototype),
    (at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (at.propHooks.scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = at.prototype.init),
    (k.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(dt)
        : C.setTimeout(dt, k.fx.interval),
      k.fx.tick());
  }
  function ht() {
    return (
      C.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = U(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          x(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, vt, l),
      x(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return oe(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, i = (e = x(e) ? ((t = e), ["*"]) : e.match(P)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ie(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (se([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  se([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && se([e], !0),
              p.done(function () {
                for (r in (g || se([e]), Y.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (x(e) && e),
              duration: e,
              easing: (n && t) || (t && !x(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          x(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ie)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function i() {
          var e = yt(this, k.extend({}, t), a);
          (o || Y.get(this, "finish")) && e.stop(!0);
        }
        var o = k.isEmptyObject(t),
          a = k.speed(e, n, r);
        return (
          (i.finish = i),
          o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        );
      },
      stop: function (i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (st = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (k.fx.stop = function () {
      ut = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (lt = E.createElement("input")),
    (ct = E.createElement("select").appendChild(E.createElement("option"))),
    (lt.type = "checkbox"),
    (m.checkOn = "" !== lt.value),
    (m.optSelected = ct.selected),
    ((lt = E.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (m.radioValue = "t" === lt.value);
  var mt,
    xt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return F(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : !(i && "get" in i && null !== (r = i.get(e, t))) &&
                  null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || k.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(P) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Et(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return F(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (x(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, Ct(this)));
          });
        if ((e = Et(t)).length)
          for (; (n = this[u++]); )
            if (((i = Ct(n)), (r = 1 === n.nodeType && " " + Tt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = Tt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (x(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, Ct(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = Et(t)).length)
          for (; (n = this[u++]); )
            if (((i = Ct(n)), (r = 1 === n.nodeType && " " + Tt(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                for (; -1 < r.indexOf(" " + o + " "); )
                  r = r.replace(" " + o + " ", " ");
              i !== (s = Tt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" == o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : x(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, Ct(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a)
                for (t = 0, n = k(this), r = Et(i); (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && "boolean" != o) ||
                  ((e = Ct(this)) && Y.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== i && Y.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, r = " " + e + " "; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (" " + Tt(Ct(t)) + " ").indexOf(r))
            return !0;
        return !1;
      },
    });
  var kt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = x(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(kt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : Tt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                !n.disabled &&
                (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = k.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        m.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (m.focusin = "onfocusin" in C);
  function St(e) {
    e.stopPropagation();
  }
  var Dt = /^(?:focusinfocus|focusoutblur)$/;
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = [n || E],
        p = y.call(e, "type") ? e.type : e,
        d = y.call(e, "namespace") ? e.namespace.split(".") : [],
        h = (c = o = n = n || E);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !Dt.test(p + k.event.triggered) &&
        (-1 < p.indexOf(".") && ((p = (d = p.split(".")).shift()), d.sort()),
        (s = p.indexOf(":") < 0 && "on" + p),
        ((e = e[k.expando]
          ? e
          : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = d.join(".")),
        (e.rnamespace = e.namespace
          ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : k.makeArray(t, [e])),
        (l = k.event.special[p] || {}),
        r || !l.trigger || !1 !== l.trigger.apply(n, t))
      ) {
        if (!r && !l.noBubble && !g(n)) {
          for (
            a = l.delegateType || p, Dt.test(a + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            f.push(h), (o = h);
          o === (n.ownerDocument || E) &&
            f.push(o.defaultView || o.parentWindow || C);
        }
        for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
          (c = h),
            (e.type = 1 < i ? a : l.bindType || p),
            (u = (Y.get(h, "events") || {})[e.type] && Y.get(h, "handle")) &&
              u.apply(h, t),
            (u = s && h[s]) &&
              u.apply &&
              V(h) &&
              ((e.result = u.apply(h, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(f.pop(), t)) ||
            !V(n) ||
            (s &&
              x(n[p]) &&
              !g(n) &&
              ((o = n[s]) && (n[s] = null),
              (k.event.triggered = p),
              e.isPropagationStopped() && c.addEventListener(p, St),
              n[p](),
              e.isPropagationStopped() && c.removeEventListener(p, St),
              (k.event.triggered = void 0),
              o && (n[s] = o))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    m.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        }
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Nt = C.location,
    At = Date.now(),
    jt = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  (k.param = function (e, t) {
    function n(e, t) {
      var n = x(t) ? t() : t;
      i[i.length] =
        encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    }
    var r,
      i = [];
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, i, o) {
          var t;
          if (Array.isArray(e))
            k.each(e, function (e, t) {
              i || qt.test(r)
                ? o(r, t)
                : n(
                    r +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    i,
                    o
                  );
            });
          else if (i || "object" !== w(e)) o(r, e);
          else for (t in e) n(r + "[" + t + "]", e[t], i, o);
        })(r, e[r], t, n);
    return i.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !ue.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Pt = /%20/g,
    Mt = /#.*$/,
    Rt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Wt = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    Ft = {},
    _t = "*/".concat("*"),
    zt = E.createElement("a");
  function Xt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (x(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Ut(t, i, o, a) {
    var s = {},
      u = t === Ft;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Vt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (zt.href = Nt.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Nt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Nt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": _t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Vt(Vt(e, k.ajaxSettings), t) : Vt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Xt(Bt),
      ajaxTransport: Xt(Ft),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = It.exec(p)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Nt.href) + "").replace(
            $t,
            Nt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                zt.protocol + "//" + zt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          Ut(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Wt.test(v.type)),
        (f = v.url.replace(Mt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Pt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (jt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Rt, "$1")),
              (o = (jt.test(f) ? "&" : "?") + "_=" + At++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Ut(Ft, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a = a || i;
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          x(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (x(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return x(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = x(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Gt = { 0: 200, 1223: 204 },
    Yt = k.ajaxSettings.xhr();
  (m.cors = !!Yt && "withCredentials" in Yt),
    (m.ajax = Yt = !!Yt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (m.cors || (Yt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Gt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Qt,
    Jt = [],
    Kt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Jt.pop() || k.expando + "_" + At++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Kt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Kt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(r)),
              o && x(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((Qt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Qt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = ye([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        x(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          (i =
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          x(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === k.css(e, "position");

          )
            e = e.offsetParent;
          return e || me;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return F(
            this,
            function (e, t, n) {
              var r;
              return (
                g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n
                  ? r
                    ? r[i]
                    : e[t]
                  : void (r
                      ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                      : (e[t] = n))
              );
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = Ye(m.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return F(
              this,
              function (e, t, n) {
                var r;
                return g(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), x(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = D),
    (k.isFunction = x),
    (k.isWindow = g),
    (k.camelCase = U),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Zt = C.jQuery,
    en = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = en), e && C.jQuery === k && (C.jQuery = Zt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});
/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e((t.bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function c(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  e = e && e.hasOwnProperty("default") ? e.default : e;
  var o,
    n,
    l,
    d =
      ((n = "transitionend"),
      (l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return 0 < o(document).find(e).length ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = o(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          o(t).trigger(n);
        },
        supportsTransitionEnd: function () {
          return Boolean(n);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i],
                r = e[i],
                s =
                  r && l.isElement(r)
                    ? "element"
                    : ((a = r),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(o).test(s))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    o +
                    '".'
                );
            }
          var a;
        },
      }),
      ((o = e).fn.emulateTransitionEnd = r),
      (o.event.special[l.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function (t) {
          if (o(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        },
      }),
      l);
  function r(t) {
    var e = this,
      n = !1;
    return (
      o(this).one(l.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  for (
    var a,
      h,
      f,
      u,
      p,
      g,
      m,
      _,
      v,
      y,
      E,
      b,
      w,
      C,
      T,
      D,
      I,
      S,
      A,
      O,
      N,
      k,
      x,
      P,
      L,
      j,
      H,
      F,
      M,
      W,
      R,
      U,
      B,
      K,
      Q,
      Y,
      V,
      q,
      z,
      G,
      J,
      Z,
      X,
      $,
      tt,
      et,
      nt,
      it,
      ot,
      rt,
      st,
      at,
      lt,
      ct,
      ht,
      ft,
      ut,
      dt,
      pt,
      gt,
      mt,
      _t,
      vt,
      yt,
      Et,
      bt,
      wt,
      Ct,
      Tt,
      Dt,
      It,
      St =
        ((h = "alert"),
        (u = "." + (f = "bs.alert")),
        (p = (a = e).fn[h]),
        (g = {
          CLOSE: "close" + u,
          CLOSED: "closed" + u,
          CLICK_DATA_API: "click" + u + ".data-api",
        }),
        (m = "alert"),
        (_ = "fade"),
        (v = "show"),
        (y = (function () {
          function i(t) {
            this._element = t;
          }
          var t = i.prototype;
          return (
            (t.close = function (t) {
              var e = this._element;
              t && (e = this._getRootElement(t)),
                this._triggerCloseEvent(e).isDefaultPrevented() ||
                  this._removeElement(e);
            }),
            (t.dispose = function () {
              a.removeData(this._element, f), (this._element = null);
            }),
            (t._getRootElement = function (t) {
              var e = d.getSelectorFromElement(t),
                n = !1;
              return e && (n = a(e)[0]), (n = n || a(t).closest("." + m)[0]);
            }),
            (t._triggerCloseEvent = function (t) {
              var e = a.Event(g.CLOSE);
              return a(t).trigger(e), e;
            }),
            (t._removeElement = function (e) {
              var t,
                n = this;
              a(e).removeClass(v),
                a(e).hasClass(_)
                  ? ((t = d.getTransitionDurationFromElement(e)),
                    a(e)
                      .one(d.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t);
                      })
                      .emulateTransitionEnd(t))
                  : this._destroyElement(e);
            }),
            (t._destroyElement = function (t) {
              a(t).detach().trigger(g.CLOSED).remove();
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var t = a(this),
                  e = t.data(f);
                e || ((e = new i(this)), t.data(f, e)),
                  "close" === n && e[n](this);
              });
            }),
            (i._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
            ]),
            i
          );
        })()),
        a(document).on(
          g.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          y._handleDismiss(new y())
        ),
        (a.fn[h] = y._jQueryInterface),
        (a.fn[h].Constructor = y),
        (a.fn[h].noConflict = function () {
          return (a.fn[h] = p), y._jQueryInterface;
        }),
        y),
      At =
        ((b = "button"),
        (C = "." + (w = "bs.button")),
        (T = ".data-api"),
        (D = (E = e).fn[b]),
        (I = "active"),
        (S = "btn"),
        (O = '[data-toggle^="button"]'),
        (N = '[data-toggle="buttons"]'),
        (k = "input"),
        (x = ".active"),
        (P = ".btn"),
        (L = {
          CLICK_DATA_API: "click" + C + T,
          FOCUS_BLUR_DATA_API: (A = "focus") + C + T + " blur" + C + T,
        }),
        (j = (function () {
          function n(t) {
            this._element = t;
          }
          var t = n.prototype;
          return (
            (t.toggle = function () {
              var t = !0,
                e = !0,
                n = E(this._element).closest(N)[0];
              if (n) {
                var i,
                  o = E(this._element).find(k)[0];
                if (o) {
                  if (
                    ("radio" === o.type &&
                      (o.checked && E(this._element).hasClass(I)
                        ? (t = !1)
                        : (i = E(n).find(x)[0]) && E(i).removeClass(I)),
                    t)
                  ) {
                    if (
                      o.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      o.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (o.checked = !E(this._element).hasClass(I)),
                      E(o).trigger("change");
                  }
                  o.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !E(this._element).hasClass(I)
                ),
                t && E(this._element).toggleClass(I);
            }),
            (t.dispose = function () {
              E.removeData(this._element, w), (this._element = null);
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                var t = E(this).data(w);
                t || ((t = new n(this)), E(this).data(w, t)),
                  "toggle" === e && t[e]();
              });
            }),
            s(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
            ]),
            n
          );
        })()),
        E(document)
          .on(L.CLICK_DATA_API, O, function (t) {
            t.preventDefault();
            var e = t.target;
            E(e).hasClass(S) || (e = E(e).closest(P)),
              j._jQueryInterface.call(E(e), "toggle");
          })
          .on(L.FOCUS_BLUR_DATA_API, O, function (t) {
            var e = E(t.target).closest(P)[0];
            E(e).toggleClass(A, /^focus(in)?$/.test(t.type));
          }),
        (E.fn[b] = j._jQueryInterface),
        (E.fn[b].Constructor = j),
        (E.fn[b].noConflict = function () {
          return (E.fn[b] = D), j._jQueryInterface;
        }),
        j),
      Ot =
        ((F = "carousel"),
        (W = "." + (M = "bs.carousel")),
        (R = ".data-api"),
        (U = (H = e).fn[F]),
        (B = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        }),
        (K = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        }),
        (Q = "next"),
        (Y = "prev"),
        (V = "left"),
        (q = "right"),
        (z = {
          SLIDE: "slide" + W,
          SLID: "slid" + W,
          KEYDOWN: "keydown" + W,
          MOUSEENTER: "mouseenter" + W,
          MOUSELEAVE: "mouseleave" + W,
          TOUCHEND: "touchend" + W,
          LOAD_DATA_API: "load" + W + R,
          CLICK_DATA_API: "click" + W + R,
        }),
        (G = "carousel"),
        (J = "active"),
        (Z = "slide"),
        (X = "carousel-item-right"),
        ($ = "carousel-item-left"),
        (tt = "carousel-item-next"),
        (et = "carousel-item-prev"),
        (nt = ".active"),
        (it = ".active.carousel-item"),
        (ot = ".carousel-item"),
        (rt = ".carousel-item-next, .carousel-item-prev"),
        (st = ".carousel-indicators"),
        (at = "[data-slide], [data-slide-to]"),
        (lt = '[data-ride="carousel"]'),
        (ct = (function () {
          function r(t, e) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(e)),
              (this._element = H(t)[0]),
              (this._indicatorsElement = H(this._element).find(st)[0]),
              this._addEventListeners();
          }
          var t = r.prototype;
          return (
            (t.next = function () {
              this._isSliding || this._slide(Q);
            }),
            (t.nextWhenVisible = function () {
              !document.hidden &&
                H(this._element).is(":visible") &&
                "hidden" !== H(this._element).css("visibility") &&
                this.next();
            }),
            (t.prev = function () {
              this._isSliding || this._slide(Y);
            }),
            (t.pause = function (t) {
              t || (this._isPaused = !0),
                H(this._element).find(rt)[0] &&
                  (d.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (t.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (t.to = function (t) {
              var e = this;
              this._activeElement = H(this._element).find(it)[0];
              var n = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                  H(this._element).one(z.SLID, function () {
                    return e.to(t);
                  });
                else {
                  if (n === t) return this.pause(), void this.cycle();
                  var i = n < t ? Q : Y;
                  this._slide(i, this._items[t]);
                }
            }),
            (t.dispose = function () {
              H(this._element).off(W),
                H.removeData(this._element, M),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (t._getConfig = function (t) {
              return (t = c({}, B, t)), d.typeCheckConfig(F, t, K), t;
            }),
            (t._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                H(this._element).on(z.KEYDOWN, function (t) {
                  return e._keydown(t);
                }),
                "hover" === this._config.pause &&
                  (H(this._element)
                    .on(z.MOUSEENTER, function (t) {
                      return e.pause(t);
                    })
                    .on(z.MOUSELEAVE, function (t) {
                      return e.cycle(t);
                    }),
                  ("ontouchstart" in document.documentElement) &&
                    H(this._element).on(z.TOUCHEND, function () {
                      e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval));
                    }));
            }),
            (t._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                }
            }),
            (t._getItemIndex = function (t) {
              return (
                (this._items = H.makeArray(H(t).parent().find(ot))),
                this._items.indexOf(t)
              );
            }),
            (t._getItemByDirection = function (t, e) {
              var n = t === Q,
                i = t === Y,
                o = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
                return e;
              var s = (o + (t === Y ? -1 : 1)) % this._items.length;
              return -1 == s
                ? this._items[this._items.length - 1]
                : this._items[s];
            }),
            (t._triggerSlideEvent = function (t, e) {
              var n = this._getItemIndex(t),
                i = this._getItemIndex(H(this._element).find(it)[0]),
                o = H.Event(z.SLIDE, {
                  relatedTarget: t,
                  direction: e,
                  from: i,
                  to: n,
                });
              return H(this._element).trigger(o), o;
            }),
            (t._setActiveIndicatorElement = function (t) {
              var e;
              this._indicatorsElement &&
                (H(this._indicatorsElement).find(nt).removeClass(J),
                (e = this._indicatorsElement.children[this._getItemIndex(t)]) &&
                  H(e).addClass(J));
            }),
            (t._slide = function (t, e) {
              var n,
                i,
                o,
                r,
                s = this,
                a = H(this._element).find(it)[0],
                l = this._getItemIndex(a),
                c = e || (a && this._getItemByDirection(t, a)),
                h = this._getItemIndex(c),
                f = Boolean(this._interval),
                u = t === Q ? ((n = $), (i = tt), V) : ((n = X), (i = et), q);
              c && H(c).hasClass(J)
                ? (this._isSliding = !1)
                : this._triggerSlideEvent(c, u).isDefaultPrevented() ||
                  (a &&
                    c &&
                    ((this._isSliding = !0),
                    f && this.pause(),
                    this._setActiveIndicatorElement(c),
                    (o = H.Event(z.SLID, {
                      relatedTarget: c,
                      direction: u,
                      from: l,
                      to: h,
                    })),
                    H(this._element).hasClass(Z)
                      ? (H(c).addClass(i),
                        d.reflow(c),
                        H(a).addClass(n),
                        H(c).addClass(n),
                        (r = d.getTransitionDurationFromElement(a)),
                        H(a)
                          .one(d.TRANSITION_END, function () {
                            H(c)
                              .removeClass(n + " " + i)
                              .addClass(J),
                              H(a).removeClass(J + " " + i + " " + n),
                              (s._isSliding = !1),
                              setTimeout(function () {
                                return H(s._element).trigger(o);
                              }, 0);
                          })
                          .emulateTransitionEnd(r))
                      : (H(a).removeClass(J),
                        H(c).addClass(J),
                        (this._isSliding = !1),
                        H(this._element).trigger(o)),
                    f && this.cycle()));
            }),
            (r._jQueryInterface = function (i) {
              return this.each(function () {
                var t = H(this).data(M),
                  e = c({}, B, H(this).data());
                "object" == typeof i && (e = c({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (
                  (t || ((t = new r(this, e)), H(this).data(M, t)),
                  "number" == typeof i)
                )
                  t.to(i);
                else if ("string" == typeof n) {
                  if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                  t[n]();
                } else e.interval && (t.pause(), t.cycle());
              });
            }),
            (r._dataApiClickHandler = function (t) {
              var e,
                n,
                i,
                o = d.getSelectorFromElement(this);
              !o ||
                ((e = H(o)[0]) &&
                  H(e).hasClass(G) &&
                  ((n = c({}, H(e).data(), H(this).data())),
                  (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
                  r._jQueryInterface.call(H(e), n),
                  i && H(e).data(M).to(i),
                  t.preventDefault()));
            }),
            s(r, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return B;
                },
              },
            ]),
            r
          );
        })()),
        H(document).on(z.CLICK_DATA_API, at, ct._dataApiClickHandler),
        H(window).on(z.LOAD_DATA_API, function () {
          H(lt).each(function () {
            var t = H(this);
            ct._jQueryInterface.call(t, t.data());
          });
        }),
        (H.fn[F] = ct._jQueryInterface),
        (H.fn[F].Constructor = ct),
        (H.fn[F].noConflict = function () {
          return (H.fn[F] = U), ct._jQueryInterface;
        }),
        ct),
      Nt =
        ((ft = "collapse"),
        (dt = "." + (ut = "bs.collapse")),
        (pt = (ht = e).fn[ft]),
        (gt = { toggle: !0, parent: "" }),
        (mt = { toggle: "boolean", parent: "(string|element)" }),
        (_t = {
          SHOW: "show" + dt,
          SHOWN: "shown" + dt,
          HIDE: "hide" + dt,
          HIDDEN: "hidden" + dt,
          CLICK_DATA_API: "click" + dt + ".data-api",
        }),
        (vt = "show"),
        (yt = "collapse"),
        (Et = "collapsing"),
        (bt = "collapsed"),
        (wt = "width"),
        (Ct = "height"),
        (Tt = ".show, .collapsing"),
        (Dt = '[data-toggle="collapse"]'),
        (It = (function () {
          function a(t, e) {
            (this._isTransitioning = !1),
              (this._element = t),
              (this._config = this._getConfig(e)),
              (this._triggerArray = ht.makeArray(
                ht(
                  '[data-toggle="collapse"][href="#' +
                    t.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    t.id +
                    '"]'
                )
              ));
            for (var n = ht(Dt), i = 0; i < n.length; i++) {
              var o = n[i],
                r = d.getSelectorFromElement(o);
              null !== r &&
                0 < ht(r).filter(t).length &&
                ((this._selector = r), this._triggerArray.push(o));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var t = a.prototype;
          return (
            (t.toggle = function () {
              ht(this._element).hasClass(vt) ? this.hide() : this.show();
            }),
            (t.show = function () {
              var t,
                e,
                n,
                i,
                o,
                r,
                s = this;
              this._isTransitioning ||
                ht(this._element).hasClass(vt) ||
                (this._parent &&
                  0 ===
                    (t = ht.makeArray(
                      ht(this._parent)
                        .find(Tt)
                        .filter('[data-parent="' + this._config.parent + '"]')
                    )).length &&
                  (t = null),
                (t &&
                  (e = ht(t).not(this._selector).data(ut)) &&
                  e._isTransitioning) ||
                  ((n = ht.Event(_t.SHOW)),
                  ht(this._element).trigger(n),
                  n.isDefaultPrevented() ||
                    (t &&
                      (a._jQueryInterface.call(
                        ht(t).not(this._selector),
                        "hide"
                      ),
                      e || ht(t).data(ut, null)),
                    (i = this._getDimension()),
                    ht(this._element).removeClass(yt).addClass(Et),
                    (this._element.style[i] = 0) < this._triggerArray.length &&
                      ht(this._triggerArray)
                        .removeClass(bt)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0),
                    (o = "scroll" + (i[0].toUpperCase() + i.slice(1))),
                    (r = d.getTransitionDurationFromElement(this._element)),
                    ht(this._element)
                      .one(d.TRANSITION_END, function () {
                        ht(s._element)
                          .removeClass(Et)
                          .addClass(yt)
                          .addClass(vt),
                          (s._element.style[i] = ""),
                          s.setTransitioning(!1),
                          ht(s._element).trigger(_t.SHOWN);
                      })
                      .emulateTransitionEnd(r),
                    (this._element.style[i] = this._element[o] + "px"))));
            }),
            (t.hide = function () {
              var t = this;
              if (!this._isTransitioning && ht(this._element).hasClass(vt)) {
                var e = ht.Event(_t.HIDE);
                if ((ht(this._element).trigger(e), !e.isDefaultPrevented())) {
                  var n = this._getDimension();
                  if (
                    ((this._element.style[n] =
                      this._element.getBoundingClientRect()[n] + "px"),
                    d.reflow(this._element),
                    ht(this._element)
                      .addClass(Et)
                      .removeClass(yt)
                      .removeClass(vt),
                    0 < this._triggerArray.length)
                  )
                    for (var i = 0; i < this._triggerArray.length; i++) {
                      var o = this._triggerArray[i],
                        r = d.getSelectorFromElement(o);
                      null !== r &&
                        (ht(r).hasClass(vt) ||
                          ht(o).addClass(bt).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0);
                  this._element.style[n] = "";
                  var s = d.getTransitionDurationFromElement(this._element);
                  ht(this._element)
                    .one(d.TRANSITION_END, function () {
                      t.setTransitioning(!1),
                        ht(t._element)
                          .removeClass(Et)
                          .addClass(yt)
                          .trigger(_t.HIDDEN);
                    })
                    .emulateTransitionEnd(s);
                }
              }
            }),
            (t.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (t.dispose = function () {
              ht.removeData(this._element, ut),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (t._getConfig = function (t) {
              return (
                ((t = c({}, gt, t)).toggle = Boolean(t.toggle)),
                d.typeCheckConfig(ft, t, mt),
                t
              );
            }),
            (t._getDimension = function () {
              return ht(this._element).hasClass(wt) ? wt : Ct;
            }),
            (t._getParent = function () {
              var n = this,
                t = null;
              d.isElement(this._config.parent)
                ? ((t = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (t = this._config.parent[0]))
                : (t = ht(this._config.parent)[0]);
              var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]';
              return (
                ht(t)
                  .find(e)
                  .each(function (t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [
                      e,
                    ]);
                  }),
                t
              );
            }),
            (t._addAriaAndCollapsedClass = function (t, e) {
              var n;
              t &&
                ((n = ht(t).hasClass(vt)),
                0 < e.length &&
                  ht(e).toggleClass(bt, !n).attr("aria-expanded", n));
            }),
            (a._getTargetFromElement = function (t) {
              var e = d.getSelectorFromElement(t);
              return e ? ht(e)[0] : null;
            }),
            (a._jQueryInterface = function (i) {
              return this.each(function () {
                var t = ht(this),
                  e = t.data(ut),
                  n = c({}, gt, t.data(), "object" == typeof i && i ? i : {});
                if (
                  (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                  e || ((e = new a(this, n)), t.data(ut, e)),
                  "string" == typeof i)
                ) {
                  if (void 0 === e[i])
                    throw new TypeError('No method named "' + i + '"');
                  e[i]();
                }
              });
            }),
            s(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return gt;
                },
              },
            ]),
            a
          );
        })()),
        ht(document).on(_t.CLICK_DATA_API, Dt, function (t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var n = ht(this),
            e = d.getSelectorFromElement(this);
          ht(e).each(function () {
            var t = ht(this),
              e = t.data(ut) ? "toggle" : n.data();
            It._jQueryInterface.call(t, e);
          });
        }),
        (ht.fn[ft] = It._jQueryInterface),
        (ht.fn[ft].Constructor = It),
        (ht.fn[ft].noConflict = function () {
          return (ht.fn[ft] = pt), It._jQueryInterface;
        }),
        It),
      kt = "undefined" != typeof window && "undefined" != typeof document,
      xt = ["Edge", "Trident", "Firefox"],
      Pt = 0,
      Lt = 0;
    Lt < xt.length;
    Lt += 1
  )
    if (kt && 0 <= navigator.userAgent.indexOf(xt[Lt])) {
      Pt = 1;
      break;
    }
  var jt =
    kt && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, Pt));
          };
        };
  function Ht(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function Ft(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function Mt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function Wt(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = Ft(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : Wt(Mt(t));
  }
  var Rt = kt && !(!window.MSInputMethodContext || !document.documentMode),
    Ut = kt && /MSIE 10/.test(navigator.userAgent);
  function Bt(t) {
    return 11 === t ? Rt : (10 !== t && Rt) || Ut;
  }
  function Kt(t) {
    if (!t) return document.documentElement;
    for (
      var e = Bt(10) ? document.body : null, n = t.offsetParent;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === Ft(n, "position")
        ? Kt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Qt(t) {
    return null !== t.parentNode ? Qt(t.parentNode) : t;
  }
  function Yt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && Kt(s.firstElementChild) !== s)
        ? Kt(l)
        : l;
    var c = Qt(t);
    return c.host ? Yt(c.host, e) : Yt(t, Qt(e).host);
  }
  function Vt(t, e) {
    var n =
        "top" === (1 < arguments.length && void 0 !== e ? e : "top")
          ? "scrollTop"
          : "scrollLeft",
      i = t.nodeName;
    if ("BODY" !== i && "HTML" !== i) return t[n];
    var o = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || o)[n];
  }
  function qt(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" == n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function zt(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Bt(10)
        ? n["offset" + t] +
            i["margin" + ("Height" === t ? "Top" : "Left")] +
            i["margin" + ("Height" === t ? "Bottom" : "Right")]
        : 0
    );
  }
  function Gt() {
    var t = document.body,
      e = document.documentElement,
      n = Bt(10) && getComputedStyle(e);
    return { height: zt("Height", t, e, n), width: zt("Width", t, e, n) };
  }
  var Jt = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Zt = function (t, e, n) {
      return e && Xt(t.prototype, e), n && Xt(t, n), t;
    };
  function Xt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function $t(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var te =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    };
  function ee(t) {
    return te({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function ne(t) {
    var e,
      n,
      i = {};
    try {
      Bt(10)
        ? ((i = t.getBoundingClientRect()),
          (e = Vt(t, "top")),
          (n = Vt(t, "left")),
          (i.top += e),
          (i.left += n),
          (i.bottom += e),
          (i.right += n))
        : (i = t.getBoundingClientRect());
    } catch (t) {}
    var o,
      r = {
        left: i.left,
        top: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top,
      },
      s = "HTML" === t.nodeName ? Gt() : {},
      a = s.width || t.clientWidth || r.right - r.left,
      l = s.height || t.clientHeight || r.bottom - r.top,
      c = t.offsetWidth - a,
      h = t.offsetHeight - l;
    return (
      (c || h) &&
        ((c -= qt((o = Ft(t)), "x")),
        (h -= qt(o, "y")),
        (r.width -= c),
        (r.height -= h)),
      ee(r)
    );
  }
  function ie(t, e, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = Bt(10),
      r = "HTML" === e.nodeName,
      s = ne(t),
      a = ne(e),
      l = Wt(t),
      c = Ft(e),
      h = parseFloat(c.borderTopWidth, 10),
      f = parseFloat(c.borderLeftWidth, 10);
    i &&
      "HTML" === e.nodeName &&
      ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var u,
      d,
      p = ee({
        top: s.top - a.top - h,
        left: s.left - a.left - f,
        width: s.width,
        height: s.height,
      });
    return (
      (p.marginTop = 0),
      (p.marginLeft = 0),
      !o &&
        r &&
        ((u = parseFloat(c.marginTop, 10)),
        (d = parseFloat(c.marginLeft, 10)),
        (p.top -= h - u),
        (p.bottom -= h - u),
        (p.left -= f - d),
        (p.right -= f - d),
        (p.marginTop = u),
        (p.marginLeft = d)),
      (o && !i ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
        (p = (function (t, e, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = Vt(e, "top"),
            r = Vt(e, "left"),
            s = i ? -1 : 1;
          return (
            (t.top += o * s),
            (t.bottom += o * s),
            (t.left += r * s),
            (t.right += r * s),
            t
          );
        })(p, e)),
      p
    );
  }
  function oe(t) {
    if (!t || !t.parentElement || Bt()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === Ft(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function re(t, e, n, i, o) {
    var r,
      s,
      a,
      l,
      c,
      h = 4 < arguments.length && void 0 !== o && o,
      f = { top: 0, left: 0 },
      u = h ? oe(t) : Yt(t, e);
    return (
      "viewport" === i
        ? (f = (function (t, e) {
            var n = 1 < arguments.length && void 0 !== e && e,
              i = t.ownerDocument.documentElement,
              o = ie(t, i),
              r = Math.max(i.clientWidth, window.innerWidth || 0),
              s = Math.max(i.clientHeight, window.innerHeight || 0),
              a = n ? 0 : Vt(i),
              l = n ? 0 : Vt(i, "left");
            return ee({
              top: a - o.top + o.marginTop,
              left: l - o.left + o.marginLeft,
              width: r,
              height: s,
            });
          })(u, h))
        : ((r = void 0),
          "scrollParent" === i
            ? "BODY" === (r = Wt(Mt(e))).nodeName &&
              (r = t.ownerDocument.documentElement)
            : (r = "window" === i ? t.ownerDocument.documentElement : i),
          (s = ie(r, u, h)),
          "HTML" !== r.nodeName ||
          (function t(e) {
            var n = e.nodeName;
            return (
              "BODY" !== n &&
              "HTML" !== n &&
              ("fixed" === Ft(e, "position") || t(Mt(e)))
            );
          })(u)
            ? (f = s)
            : ((l = (a = Gt()).height),
              (c = a.width),
              (f.top += s.top - s.marginTop),
              (f.bottom = l + s.top),
              (f.left += s.left - s.marginLeft),
              (f.right = c + s.left))),
      (f.left += n),
      (f.top += n),
      (f.right -= n),
      (f.bottom -= n),
      f
    );
  }
  function se(t, e, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = re(i, n, s, o),
      l = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      c = Object.keys(l)
        .map(function (t) {
          return te({ key: t }, l[t], { area: (e = l[t]).width * e.height });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      h = c.filter(function (t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      f = 0 < h.length ? h[0].key : c[0].key,
      u = t.split("-")[1];
    return f + (u ? "-" + u : "");
  }
  function ae(t, e, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return ie(n, o ? oe(e) : Yt(e, n), o);
  }
  function le(t) {
    var e = getComputedStyle(t),
      n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function ce(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function he(t, e, n) {
    n = n.split("-")[0];
    var i = le(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[ce(a)]),
      o
    );
  }
  function fe(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ue(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = fe(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", e)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var e = t.function || t.fn;
        t.enabled &&
          Ht(e) &&
          ((n.offsets.popper = ee(n.offsets.popper)),
          (n.offsets.reference = ee(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function de(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function pe(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function ge(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function me(t, e, n, i) {
    (n.updateBound = i),
      ge(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = Wt(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(Wt(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function _e() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        ge(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function ve(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function ye(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
        ve(i[t]) &&
        (e = "px"),
        (n.style[t] = i[t] + e);
    });
  }
  function Ee(t, e, n) {
    var i,
      o,
      r = fe(t, function (t) {
        return t.name === e;
      }),
      s =
        !!r &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < r.order;
        });
    return (
      s ||
        ((i = "`" + e + "`"),
        (o = "`" + n + "`"),
        console.warn(
          o +
            " modifier is required by " +
            i +
            " modifier in order to work, be sure to include it before " +
            i +
            "!"
        )),
      s
    );
  }
  var be = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    we = be.slice(3);
  function Ce(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      i = we.indexOf(t),
      o = we.slice(i + 1).concat(we.slice(0, i));
    return n ? o.reverse() : o;
  }
  var Te = "flip",
    De = "clockwise",
    Ie = "counterclockwise";
  function Se(t, o, r, e) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(e),
      n = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      i = n.indexOf(
        fe(n, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/;
    return (
      (-1 !== i
        ? [
            n.slice(0, i).concat([n[i].split(l)[0]]),
            [n[i].split(l)[1]].concat(n.slice(i + 1)),
          ]
        : [n]
      )
        .map(function (t, e) {
          var n = (1 === e ? !a : a) ? "height" : "width",
            i = !1;
          return t
            .reduce(function (t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                ? ((t[t.length - 1] = e), (i = !0), t)
                : i
                ? ((t[t.length - 1] += e), (i = !1), t)
                : t.concat(e);
            }, [])
            .map(function (t) {
              return (function (t, e, n, i) {
                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  r = +o[1],
                  s = o[2];
                if (!r) return t;
                if (0 !== s.indexOf("%"))
                  return "vh" !== s && "vw" !== s
                    ? r
                    : (("vh" === s
                        ? Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                          )
                        : Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                          )) /
                        100) *
                        r;
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (ee(a)[e] / 100) * r;
              })(t, n, o, r);
            });
        })
        .forEach(function (n, i) {
          n.forEach(function (t, e) {
            ve(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
          });
        }),
      s
    );
  }
  var Ae = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e,
              n,
              i,
              o,
              r,
              s,
              a,
              l = t.placement,
              c = l.split("-")[0],
              h = l.split("-")[1];
            return (
              h &&
                ((n = (e = t.offsets).reference),
                (i = e.popper),
                (s = (o = -1 !== ["bottom", "top"].indexOf(c))
                  ? "width"
                  : "height"),
                (a = {
                  start: $t({}, (r = o ? "left" : "top"), n[r]),
                  end: $t({}, r, n[r] + n[s] - i[s]),
                }),
                (t.offsets.popper = te({}, i, a[h]))),
              t
            );
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0,
              l = ve(+n) ? [+n, 0] : Se(n, r, s, a);
            return (
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, i) {
            var e = i.boundariesElement || Kt(t.instance.popper);
            t.instance.reference === e && (e = Kt(e));
            var n = pe("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = re(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = t.offsets.popper,
              f = {
                primary: function (t) {
                  var e = h[t];
                  return (
                    h[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(h[t], l[t])),
                    $t({}, t, e)
                  );
                },
                secondary: function (t) {
                  var e = "right" === t ? "left" : "top",
                    n = h[e];
                  return (
                    h[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[e],
                        l[t] - ("right" === t ? h.width : h.height)
                      )),
                    $t({}, e, n)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                h = te({}, h, f[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Ee(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              f = h.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = le(i)[c];
            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
              (t.offsets.popper = ee(t.offsets.popper));
            var g = a[f] + a[c] / 2 - p / 2,
              m = Ft(t.instance.popper),
              _ = parseFloat(m["margin" + h], 10),
              v = parseFloat(m["border" + h + "Width"], 10),
              y = g - t.offsets.popper[f] - _ - v,
              y = Math.max(Math.min(s[c] - p, y), 0);
            return (
              (t.arrowElement = i),
              (t.offsets.arrow =
                ($t((n = {}), f, Math.round(y)), $t(n, u, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (p, g) {
            if (de(p.instance.modifiers, "inner")) return p;
            if (p.flipped && p.placement === p.originalPlacement) return p;
            var m = re(
                p.instance.popper,
                p.instance.reference,
                g.padding,
                g.boundariesElement,
                p.positionFixed
              ),
              _ = p.placement.split("-")[0],
              v = ce(_),
              y = p.placement.split("-")[1] || "",
              E = [];
            switch (g.behavior) {
              case Te:
                E = [_, v];
                break;
              case De:
                E = Ce(_);
                break;
              case Ie:
                E = Ce(_, !0);
                break;
              default:
                E = g.behavior;
            }
            return (
              E.forEach(function (t, e) {
                if (_ !== t || E.length === e + 1) return p;
                (_ = p.placement.split("-")[0]), (v = ce(_));
                var n,
                  i = p.offsets.popper,
                  o = p.offsets.reference,
                  r = Math.floor,
                  s =
                    ("left" === _ && r(i.right) > r(o.left)) ||
                    ("right" === _ && r(i.left) < r(o.right)) ||
                    ("top" === _ && r(i.bottom) > r(o.top)) ||
                    ("bottom" === _ && r(i.top) < r(o.bottom)),
                  a = r(i.left) < r(m.left),
                  l = r(i.right) > r(m.right),
                  c = r(i.top) < r(m.top),
                  h = r(i.bottom) > r(m.bottom),
                  f =
                    ("left" === _ && a) ||
                    ("right" === _ && l) ||
                    ("top" === _ && c) ||
                    ("bottom" === _ && h),
                  u = -1 !== ["top", "bottom"].indexOf(_),
                  d =
                    !!g.flipVariations &&
                    ((u && "start" === y && a) ||
                      (u && "end" === y && l) ||
                      (!u && "start" === y && c) ||
                      (!u && "end" === y && h));
                (s || f || d) &&
                  ((p.flipped = !0),
                  (s || f) && (_ = E[e + 1]),
                  d &&
                    (y =
                      "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                  (p.placement = _ + (y ? "-" + y : "")),
                  (p.offsets.popper = te(
                    {},
                    p.offsets.popper,
                    he(p.instance.popper, p.offsets.reference, p.placement)
                  )),
                  (p = ue(p.instance.modifiers, p, "flip")));
              }),
              p
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = ce(e)),
              (t.offsets.popper = ee(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Ee(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = fe(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = fe(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              a,
              l = void 0 !== r ? r : e.gpuAcceleration,
              c = ne(Kt(t.instance.popper)),
              h = { position: o.position },
              f = {
                left: Math.floor(o.left),
                top: Math.round(o.top),
                bottom: Math.round(o.bottom),
                right: Math.floor(o.right),
              },
              u = "bottom" === n ? "top" : "bottom",
              d = "right" === i ? "left" : "right",
              p = pe("transform"),
              g = void 0,
              m = void 0,
              m = "bottom" == u ? -c.height + f.bottom : f.top,
              g = "right" == d ? -c.width + f.right : f.left;
            l && p
              ? ((h[p] = "translate3d(" + g + "px, " + m + "px, 0)"),
                (h[u] = 0),
                (h[d] = 0),
                (h.willChange = "transform"))
              : ((s = "bottom" == u ? -1 : 1),
                (a = "right" == d ? -1 : 1),
                (h[u] = m * s),
                (h[d] = g * a),
                (h.willChange = u + ", " + d));
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = te({}, _, t.attributes)),
              (t.styles = te({}, h, t.styles)),
              (t.arrowStyles = te({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              ye(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                ye(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ae(o, e, t, n.positionFixed),
              s = se(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              ye(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Oe =
      (Zt(Ne, [
        {
          key: "update",
          value: function () {
            return function () {
              var t;
              this.state.isDestroyed ||
                (((t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {},
                }).offsets.reference = ae(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                (t.placement = se(
                  this.options.placement,
                  t.offsets.reference,
                  this.popper,
                  this.reference,
                  this.options.modifiers.flip.boundariesElement,
                  this.options.modifiers.flip.padding
                )),
                (t.originalPlacement = t.placement),
                (t.positionFixed = this.options.positionFixed),
                (t.offsets.popper = he(
                  this.popper,
                  t.offsets.reference,
                  t.placement
                )),
                (t.offsets.popper.position = this.options.positionFixed
                  ? "fixed"
                  : "absolute"),
                (t = ue(this.modifiers, t)),
                this.state.isCreated
                  ? this.options.onUpdate(t)
                  : ((this.state.isCreated = !0), this.options.onCreate(t)));
            }.call(this);
          },
        },
        {
          key: "destroy",
          value: function () {
            return function () {
              return (
                (this.state.isDestroyed = !0),
                de(this.modifiers, "applyStyle") &&
                  (this.popper.removeAttribute("x-placement"),
                  (this.popper.style.position = ""),
                  (this.popper.style.top = ""),
                  (this.popper.style.left = ""),
                  (this.popper.style.right = ""),
                  (this.popper.style.bottom = ""),
                  (this.popper.style.willChange = ""),
                  (this.popper.style[pe("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          },
        },
        {
          key: "enableEventListeners",
          value: function () {
            return function () {
              this.state.eventsEnabled ||
                (this.state = me(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          },
        },
        {
          key: "disableEventListeners",
          value: function () {
            return _e.call(this);
          },
        },
      ]),
      Ne);
  function Ne(t, e) {
    var n = this,
      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    Jt(this, Ne),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }),
      (this.update = jt(this.update.bind(this))),
      (this.options = te({}, Ne.Defaults, i)),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = t && t.jquery ? t[0] : t),
      (this.popper = e && e.jquery ? e[0] : e),
      (this.options.modifiers = {}),
      Object.keys(te({}, Ne.Defaults.modifiers, i.modifiers)).forEach(function (
        t
      ) {
        n.options.modifiers[t] = te(
          {},
          Ne.Defaults.modifiers[t] || {},
          i.modifiers ? i.modifiers[t] : {}
        );
      }),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function (t) {
          return te({ name: t }, n.options.modifiers[t]);
        })
        .sort(function (t, e) {
          return t.order - e.order;
        })),
      this.modifiers.forEach(function (t) {
        t.enabled &&
          Ht(t.onLoad) &&
          t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (Oe.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Oe.placements = be),
    (Oe.Defaults = Ae);
  var ke,
    xe,
    Pe,
    Le,
    je,
    He,
    Fe,
    Me,
    We,
    Re,
    Ue,
    Be,
    Ke,
    Qe,
    Ye,
    Ve,
    qe,
    ze,
    Ge,
    Je,
    Ze,
    Xe,
    $e,
    tn,
    en,
    nn,
    on,
    rn,
    sn,
    an,
    ln,
    cn,
    hn,
    fn,
    un,
    dn,
    pn,
    gn,
    mn,
    _n,
    vn,
    yn,
    En,
    bn,
    wn,
    Cn,
    Tn,
    Dn,
    In,
    Sn,
    An,
    On,
    Nn,
    kn,
    xn,
    Pn,
    Ln,
    jn,
    Hn,
    Fn,
    Mn,
    Wn,
    Rn,
    Un,
    Bn,
    Kn,
    Qn,
    Yn,
    Vn,
    qn,
    zn,
    Gn,
    Jn,
    Zn,
    Xn,
    $n,
    ti,
    ei,
    ni,
    ii,
    oi,
    ri,
    si,
    ai,
    li,
    ci,
    hi,
    fi,
    ui,
    di,
    pi,
    gi,
    mi,
    _i,
    vi,
    yi,
    Ei,
    bi,
    wi,
    Ci,
    Ti,
    Di,
    Ii,
    Si,
    Ai,
    Oi,
    Ni,
    ki,
    xi,
    Pi,
    Li,
    ji,
    Hi,
    Fi,
    Mi,
    Wi,
    Ri,
    Ui,
    Bi,
    Ki,
    Qi,
    Yi,
    Vi,
    qi,
    zi,
    Gi,
    Ji =
      ((xe = "dropdown"),
      (Le = "." + (Pe = "bs.dropdown")),
      (je = ".data-api"),
      (He = (ke = e).fn[xe]),
      (Fe = new RegExp("38|40|27")),
      (Me = {
        HIDE: "hide" + Le,
        HIDDEN: "hidden" + Le,
        SHOW: "show" + Le,
        SHOWN: "shown" + Le,
        CLICK: "click" + Le,
        CLICK_DATA_API: "click" + Le + je,
        KEYDOWN_DATA_API: "keydown" + Le + je,
        KEYUP_DATA_API: "keyup" + Le + je,
      }),
      (We = "disabled"),
      (Re = "show"),
      (Ue = "dropup"),
      (Be = "dropright"),
      (Ke = "dropleft"),
      (Qe = "dropdown-menu-right"),
      (Ye = "position-static"),
      (Ve = '[data-toggle="dropdown"]'),
      (qe = ".dropdown form"),
      (ze = ".dropdown-menu"),
      (Ge = ".navbar-nav"),
      (Je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Ze = "top-start"),
      (Xe = "top-end"),
      ($e = "bottom-start"),
      (tn = "bottom-end"),
      (en = "right-start"),
      (nn = "left-start"),
      (on = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (rn = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (sn = (function () {
        function l(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = l.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !ke(this._element).hasClass(We)) {
              var t = l._getParentFromElement(this._element),
                e = ke(this._menu).hasClass(Re);
              if ((l._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = ke.Event(Me.SHOW, n);
                if ((ke(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === Oe)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var o = this._element;
                    "parent" === this._config.reference
                      ? (o = t)
                      : d.isElement(this._config.reference) &&
                        ((o = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (o = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        ke(t).addClass(Ye),
                      (this._popper = new Oe(
                        o,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === ke(t).closest(Ge).length &&
                    ke(document.body).children().on("mouseover", null, ke.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    ke(this._menu).toggleClass(Re),
                    ke(t).toggleClass(Re).trigger(ke.Event(Me.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function () {
            ke.removeData(this._element, Pe),
              ke(this._element).off(Le),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            ke(this._element).on(Me.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = c(
                {},
                this.constructor.Default,
                ke(this._element).data(),
                t
              )),
              d.typeCheckConfig(xe, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            var t;
            return (
              this._menu ||
                ((t = l._getParentFromElement(this._element)),
                (this._menu = ke(t).find(ze)[0])),
              this._menu
            );
          }),
          (t._getPlacement = function () {
            var t = ke(this._element).parent(),
              e = $e;
            return (
              t.hasClass(Ue)
                ? ((e = Ze), ke(this._menu).hasClass(Qe) && (e = Xe))
                : t.hasClass(Be)
                ? (e = en)
                : t.hasClass(Ke)
                ? (e = nn)
                : ke(this._menu).hasClass(Qe) && (e = tn),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < ke(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = c(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (l._jQueryInterface = function (e) {
            return this.each(function () {
              var t = ke(this).data(Pe);
              if (
                (t ||
                  ((t = new l(this, "object" == typeof e ? e : null)),
                  ke(this).data(Pe, t)),
                "string" == typeof e)
              ) {
                if (void 0 === t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (l._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (var e = ke.makeArray(ke(Ve)), n = 0; n < e.length; n++) {
                var i,
                  o,
                  r = l._getParentFromElement(e[n]),
                  s = ke(e[n]).data(Pe),
                  a = { relatedTarget: e[n] };
                s &&
                  ((i = s._menu),
                  ke(r).hasClass(Re) &&
                    ((t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      ke.contains(r, t.target)) ||
                      ((o = ke.Event(Me.HIDE, a)),
                      ke(r).trigger(o),
                      o.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          ke(document.body)
                            .children()
                            .off("mouseover", null, ke.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        ke(i).removeClass(Re),
                        ke(r)
                          .removeClass(Re)
                          .trigger(ke.Event(Me.HIDDEN, a))))));
              }
          }),
          (l._getParentFromElement = function (t) {
            var e,
              n = d.getSelectorFromElement(t);
            return n && (e = ke(n)[0]), e || t.parentNode;
          }),
          (l._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        ke(t.target).closest(ze).length))
                  )
                : Fe.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !ke(this).hasClass(We))
            ) {
              var e,
                n = l._getParentFromElement(this),
                i = ke(n).hasClass(Re);
              if (
                (!i && (27 !== t.which || 32 !== t.which)) ||
                (i && (27 === t.which || 32 === t.which))
              )
                return (
                  27 === t.which &&
                    ((e = ke(n).find(Ve)[0]), ke(e).trigger("focus")),
                  void ke(this).trigger("click")
                );
              var o,
                r = ke(n).find(Je).get();
              0 !== r.length &&
                ((o = r.indexOf(t.target)),
                38 === t.which && 0 < o && o--,
                40 === t.which && o < r.length - 1 && o++,
                o < 0 && (o = 0),
                r[o].focus());
            }
          }),
          s(l, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return on;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return rn;
              },
            },
          ]),
          l
        );
      })()),
      ke(document)
        .on(Me.KEYDOWN_DATA_API, Ve, sn._dataApiKeydownHandler)
        .on(Me.KEYDOWN_DATA_API, ze, sn._dataApiKeydownHandler)
        .on(Me.CLICK_DATA_API + " " + Me.KEYUP_DATA_API, sn._clearMenus)
        .on(Me.CLICK_DATA_API, Ve, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            sn._jQueryInterface.call(ke(this), "toggle");
        })
        .on(Me.CLICK_DATA_API, qe, function (t) {
          t.stopPropagation();
        }),
      (ke.fn[xe] = sn._jQueryInterface),
      (ke.fn[xe].Constructor = sn),
      (ke.fn[xe].noConflict = function () {
        return (ke.fn[xe] = He), sn._jQueryInterface;
      }),
      sn),
    Zi =
      ((ln = "modal"),
      (hn = "." + (cn = "bs.modal")),
      (fn = (an = e).fn[ln]),
      (un = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (dn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (pn = {
        HIDE: "hide" + hn,
        HIDDEN: "hidden" + hn,
        SHOW: "show" + hn,
        SHOWN: "shown" + hn,
        FOCUSIN: "focusin" + hn,
        RESIZE: "resize" + hn,
        CLICK_DISMISS: "click.dismiss" + hn,
        KEYDOWN_DISMISS: "keydown.dismiss" + hn,
        MOUSEUP_DISMISS: "mouseup.dismiss" + hn,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + hn,
        CLICK_DATA_API: "click" + hn + ".data-api",
      }),
      (gn = "modal-scrollbar-measure"),
      (mn = "modal-backdrop"),
      (_n = "modal-open"),
      (vn = "fade"),
      (yn = "show"),
      (En = ".modal-dialog"),
      (bn = '[data-toggle="modal"]'),
      (wn = '[data-dismiss="modal"]'),
      (Cn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (Tn = ".sticky-top"),
      (Dn = ".navbar-toggler"),
      (In = (function () {
        function o(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = an(t).find(En)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = o.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e,
              n = this;
            this._isTransitioning ||
              this._isShown ||
              (an(this._element).hasClass(vn) && (this._isTransitioning = !0),
              (e = an.Event(pn.SHOW, { relatedTarget: t })),
              an(this._element).trigger(e),
              this._isShown ||
                e.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                an(document.body).addClass(_n),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                an(this._element).on(pn.CLICK_DISMISS, wn, function (t) {
                  return n.hide(t);
                }),
                an(this._dialog).on(pn.MOUSEDOWN_DISMISS, function () {
                  an(n._element).one(pn.MOUSEUP_DISMISS, function (t) {
                    an(t.target).is(n._element) &&
                      (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                })));
          }),
          (t.hide = function (t) {
            var e,
              n,
              i,
              o = this;
            t && t.preventDefault(),
              !this._isTransitioning &&
                this._isShown &&
                ((e = an.Event(pn.HIDE)),
                an(this._element).trigger(e),
                this._isShown &&
                  !e.isDefaultPrevented() &&
                  ((this._isShown = !1),
                  (n = an(this._element).hasClass(vn)) &&
                    (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  an(document).off(pn.FOCUSIN),
                  an(this._element).removeClass(yn),
                  an(this._element).off(pn.CLICK_DISMISS),
                  an(this._dialog).off(pn.MOUSEDOWN_DISMISS),
                  n
                    ? ((i = d.getTransitionDurationFromElement(this._element)),
                      an(this._element)
                        .one(d.TRANSITION_END, function (t) {
                          return o._hideModal(t);
                        })
                        .emulateTransitionEnd(i))
                    : this._hideModal()));
          }),
          (t.dispose = function () {
            an.removeData(this._element, cn),
              an(window, document, this._element, this._backdrop).off(hn),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = c({}, un, t)), d.typeCheckConfig(ln, t, dn), t;
          }),
          (t._showElement = function (t) {
            var e = this,
              n = an(this._element).hasClass(vn);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && d.reflow(this._element),
              an(this._element).addClass(yn),
              this._config.focus && this._enforceFocus();
            function i() {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                an(e._element).trigger(r);
            }
            var o,
              r = an.Event(pn.SHOWN, { relatedTarget: t });
            n
              ? ((o = d.getTransitionDurationFromElement(this._element)),
                an(this._dialog)
                  .one(d.TRANSITION_END, i)
                  .emulateTransitionEnd(o))
              : i();
          }),
          (t._enforceFocus = function () {
            var e = this;
            an(document)
              .off(pn.FOCUSIN)
              .on(pn.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === an(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? an(this._element).on(pn.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || an(this._element).off(pn.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? an(window).on(pn.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : an(window).off(pn.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                an(document.body).removeClass(_n),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  an(t._element).trigger(pn.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (an(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e,
              n,
              i = this,
              o = an(this._element).hasClass(vn) ? vn : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = mn),
                o && an(this._backdrop).addClass(o),
                an(this._backdrop).appendTo(document.body),
                an(this._element).on(pn.CLICK_DISMISS, function (t) {
                  i._ignoreBackdropClick
                    ? (i._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === i._config.backdrop
                        ? i._element.focus()
                        : i.hide());
                }),
                o && d.reflow(this._backdrop),
                an(this._backdrop).addClass(yn),
                !t)
              )
                return;
              if (!o) return void t();
              var r = d.getTransitionDurationFromElement(this._backdrop);
              an(this._backdrop)
                .one(d.TRANSITION_END, t)
                .emulateTransitionEnd(r);
            } else {
              !this._isShown && this._backdrop
                ? (an(this._backdrop).removeClass(yn),
                  (e = function () {
                    i._removeBackdrop(), t && t();
                  }),
                  an(this._element).hasClass(vn)
                    ? ((n = d.getTransitionDurationFromElement(this._backdrop)),
                      an(this._backdrop)
                        .one(d.TRANSITION_END, e)
                        .emulateTransitionEnd(n))
                    : e())
                : t && t();
            }
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var t,
              e,
              o = this;
            this._isBodyOverflowing &&
              (an(Cn).each(function (t, e) {
                var n = an(e)[0].style.paddingRight,
                  i = an(e).css("padding-right");
                an(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + o._scrollbarWidth + "px"
                  );
              }),
              an(Tn).each(function (t, e) {
                var n = an(e)[0].style.marginRight,
                  i = an(e).css("margin-right");
                an(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              }),
              an(Dn).each(function (t, e) {
                var n = an(e)[0].style.marginRight,
                  i = an(e).css("margin-right");
                an(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) + o._scrollbarWidth + "px"
                  );
              }),
              (t = document.body.style.paddingRight),
              (e = an(document.body).css("padding-right")),
              an(document.body)
                .data("padding-right", t)
                .css(
                  "padding-right",
                  parseFloat(e) + this._scrollbarWidth + "px"
                ));
          }),
          (t._resetScrollbar = function () {
            an(Cn).each(function (t, e) {
              var n = an(e).data("padding-right");
              void 0 !== n &&
                an(e).css("padding-right", n).removeData("padding-right");
            }),
              an(Tn + ", " + Dn).each(function (t, e) {
                var n = an(e).data("margin-right");
                void 0 !== n &&
                  an(e).css("margin-right", n).removeData("margin-right");
              });
            var t = an(document.body).data("padding-right");
            void 0 !== t &&
              an(document.body)
                .css("padding-right", t)
                .removeData("padding-right");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = gn), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (o._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = an(this).data(cn),
                e = c(
                  {},
                  un,
                  an(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new o(this, e)), an(this).data(cn, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return un;
              },
            },
          ]),
          o
        );
      })()),
      an(document).on(pn.CLICK_DATA_API, bn, function (t) {
        var e,
          n = this,
          i = d.getSelectorFromElement(this);
        i && (e = an(i)[0]);
        var o = an(e).data(cn)
          ? "toggle"
          : c({}, an(e).data(), an(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = an(e).one(pn.SHOW, function (t) {
          t.isDefaultPrevented() ||
            r.one(pn.HIDDEN, function () {
              an(n).is(":visible") && n.focus();
            });
        });
        In._jQueryInterface.call(an(e), o, this);
      }),
      (an.fn[ln] = In._jQueryInterface),
      (an.fn[ln].Constructor = In),
      (an.fn[ln].noConflict = function () {
        return (an.fn[ln] = fn), In._jQueryInterface;
      }),
      In),
    Xi =
      ((An = "tooltip"),
      (Nn = "." + (On = "bs.tooltip")),
      (kn = (Sn = e).fn[An]),
      (xn = "bs-tooltip"),
      (Pn = new RegExp("(^|\\s)" + xn + "\\S+", "g")),
      (Hn = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(jn = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Ln = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (Mn = "out"),
      (Wn = {
        HIDE: "hide" + Nn,
        HIDDEN: "hidden" + Nn,
        SHOW: (Fn = "show") + Nn,
        SHOWN: "shown" + Nn,
        INSERTED: "inserted" + Nn,
        CLICK: "click" + Nn,
        FOCUSIN: "focusin" + Nn,
        FOCUSOUT: "focusout" + Nn,
        MOUSEENTER: "mouseenter" + Nn,
        MOUSELEAVE: "mouseleave" + Nn,
      }),
      (Rn = "fade"),
      (Un = "show"),
      (Bn = ".tooltip-inner"),
      (Kn = ".arrow"),
      (Qn = "hover"),
      (Yn = "focus"),
      (Vn = "click"),
      (qn = "manual"),
      (zn = (function () {
        function i(t, e) {
          if (void 0 === Oe)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = Sn(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  Sn(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (Sn(this.getTipElement()).hasClass(Un))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              Sn.removeData(this.element, this.constructor.DATA_KEY),
              Sn(this.element).off(this.constructor.EVENT_KEY),
              Sn(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && Sn(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === Sn(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = Sn.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              Sn(this.element).trigger(t);
              var n = Sn.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                o = d.getUID(this.constructor.NAME);
              i.setAttribute("id", o),
                this.element.setAttribute("aria-describedby", o),
                this.setContent(),
                this.config.animation && Sn(i).addClass(Rn);
              var r =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(r);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : Sn(this.config.container);
              Sn(i).data(this.constructor.DATA_KEY, this),
                Sn.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || Sn(i).appendTo(a),
                Sn(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new Oe(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: Kn },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t);
                  },
                })),
                Sn(i).addClass(Un),
                "ontouchstart" in document.documentElement &&
                  Sn(document.body).children().on("mouseover", null, Sn.noop);
              var l,
                c = function () {
                  e.config.animation && e._fixTransition();
                  var t = e._hoverState;
                  (e._hoverState = null),
                    Sn(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Mn && e._leave(null, e);
                };
              Sn(this.tip).hasClass(Rn)
                ? ((l = d.getTransitionDurationFromElement(this.tip)),
                  Sn(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(l))
                : c();
            }
          }),
          (t.hide = function (t) {
            function e() {
              i._hoverState !== Fn &&
                o.parentNode &&
                o.parentNode.removeChild(o),
                i._cleanTipClass(),
                i.element.removeAttribute("aria-describedby"),
                Sn(i.element).trigger(i.constructor.Event.HIDDEN),
                null !== i._popper && i._popper.destroy(),
                t && t();
            }
            var n,
              i = this,
              o = this.getTipElement(),
              r = Sn.Event(this.constructor.Event.HIDE);
            Sn(this.element).trigger(r),
              r.isDefaultPrevented() ||
                (Sn(o).removeClass(Un),
                "ontouchstart" in document.documentElement &&
                  Sn(document.body).children().off("mouseover", null, Sn.noop),
                (this._activeTrigger[Vn] = !1),
                (this._activeTrigger[Yn] = !1),
                (this._activeTrigger[Qn] = !1),
                Sn(this.tip).hasClass(Rn)
                  ? ((n = d.getTransitionDurationFromElement(o)),
                    Sn(o).one(d.TRANSITION_END, e).emulateTransitionEnd(n))
                  : e(),
                (this._hoverState = ""));
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            Sn(this.getTipElement()).addClass(xn + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || Sn(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function () {
            var t = Sn(this.getTipElement());
            this.setElementContent(t.find(Bn), this.getTitle()),
              t.removeClass(Rn + " " + Un);
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? Sn(e).parent().is(t) || t.empty().append(e)
                : t.text(Sn(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function () {
            return (
              this.element.getAttribute("data-original-title") ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title)
            );
          }),
          (t._getAttachment = function (t) {
            return jn[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              var e, n;
              "click" === t
                ? Sn(i.element).on(
                    i.constructor.Event.CLICK,
                    i.config.selector,
                    function (t) {
                      return i.toggle(t);
                    }
                  )
                : t !== qn &&
                  ((e =
                    t === Qn
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN),
                  (n =
                    t === Qn
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT),
                  Sn(i.element)
                    .on(e, i.config.selector, function (t) {
                      return i._enter(t);
                    })
                    .on(n, i.config.selector, function (t) {
                      return i._leave(t);
                    })),
                Sn(i.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return i.hide();
                  });
            }),
              this.config.selector
                ? (this.config = c({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Sn(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Sn(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Yn : Qn] = !0),
              Sn(e.getTipElement()).hasClass(Un) || e._hoverState === Fn
                ? (e._hoverState = Fn)
                : (clearTimeout(e._timeout),
                  (e._hoverState = Fn),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === Fn && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Sn(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Sn(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Yn : Qn] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = Mn),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Mn && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = c(
                  {},
                  this.constructor.Default,
                  Sn(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              d.typeCheckConfig(An, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = Sn(this.getTipElement()),
              e = t.attr("class").match(Pn);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (Sn(t).removeClass(Rn),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = Sn(this).data(On),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Sn(this).data(On, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Hn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return An;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return On;
              },
            },
            {
              key: "Event",
              get: function () {
                return Wn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Nn;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ln;
              },
            },
          ]),
          i
        );
      })()),
      (Sn.fn[An] = zn._jQueryInterface),
      (Sn.fn[An].Constructor = zn),
      (Sn.fn[An].noConflict = function () {
        return (Sn.fn[An] = kn), zn._jQueryInterface;
      }),
      zn),
    $i =
      ((Jn = "popover"),
      (Xn = "." + (Zn = "bs.popover")),
      ($n = (Gn = e).fn[Jn]),
      (ti = "bs-popover"),
      (ei = new RegExp("(^|\\s)" + ti + "\\S+", "g")),
      (ni = c({}, Xi.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (ii = c({}, Xi.DefaultType, { content: "(string|element|function)" })),
      (oi = "fade"),
      (si = ".popover-header"),
      (ai = ".popover-body"),
      (li = {
        HIDE: "hide" + Xn,
        HIDDEN: "hidden" + Xn,
        SHOW: (ri = "show") + Xn,
        SHOWN: "shown" + Xn,
        INSERTED: "inserted" + Xn,
        CLICK: "click" + Xn,
        FOCUSIN: "focusin" + Xn,
        FOCUSOUT: "focusout" + Xn,
        MOUSEENTER: "mouseenter" + Xn,
        MOUSELEAVE: "mouseleave" + Xn,
      }),
      (ci = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var o = i.prototype;
        return (
          (o.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (o.addAttachmentClass = function (t) {
            Gn(this.getTipElement()).addClass(ti + "-" + t);
          }),
          (o.getTipElement = function () {
            return (
              (this.tip = this.tip || Gn(this.config.template)[0]), this.tip
            );
          }),
          (o.setContent = function () {
            var t = Gn(this.getTipElement());
            this.setElementContent(t.find(si), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(ai), e),
              t.removeClass(oi + " " + ri);
          }),
          (o._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (o._cleanTipClass = function () {
            var t = Gn(this.getTipElement()),
              e = t.attr("class").match(ei);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = Gn(this).data(Zn),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Gn(this).data(Zn, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ni;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Jn;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Zn;
              },
            },
            {
              key: "Event",
              get: function () {
                return li;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Xn;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ii;
              },
            },
          ]),
          i
        );
      })(Xi)),
      (Gn.fn[Jn] = ci._jQueryInterface),
      (Gn.fn[Jn].Constructor = ci),
      (Gn.fn[Jn].noConflict = function () {
        return (Gn.fn[Jn] = $n), ci._jQueryInterface;
      }),
      ci),
    to =
      ((fi = "scrollspy"),
      (di = "." + (ui = "bs.scrollspy")),
      (pi = (hi = e).fn[fi]),
      (gi = { offset: 10, method: "auto", target: "" }),
      (mi = { offset: "number", method: "string", target: "(string|element)" }),
      (_i = {
        ACTIVATE: "activate" + di,
        SCROLL: "scroll" + di,
        LOAD_DATA_API: "load" + di + ".data-api",
      }),
      (vi = "dropdown-item"),
      (yi = "active"),
      (Ei = '[data-spy="scroll"]'),
      (bi = ".active"),
      (wi = ".nav, .list-group"),
      (Ci = ".nav-link"),
      (Ti = ".nav-item"),
      (Di = ".list-group-item"),
      (Ii = ".dropdown"),
      (Si = ".dropdown-item"),
      (Ai = ".dropdown-toggle"),
      (Oi = "offset"),
      (Ni = "position"),
      (ki = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " a," +
              this._config.target +
              " " +
              Ci +
              "," +
              this._config.target +
              " " +
              Di +
              "," +
              this._config.target +
              " " +
              Si),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            hi(this._scrollElement).on(_i.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? Oi : Ni,
              o = "auto" === this._config.method ? t : this._config.method,
              r = o === Ni ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              hi
                .makeArray(hi(this._selector))
                .map(function (t) {
                  var e,
                    n = d.getSelectorFromElement(t);
                  if ((n && (e = hi(n)[0]), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [hi(e)[o]().top + r, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            hi.removeData(this._element, ui),
              hi(this._scrollElement).off(di),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            var e;
            return (
              "string" !=
                typeof (t = c({}, gi, "object" == typeof t && t ? t : {}))
                  .target &&
                ((e = hi(t.target).attr("id")) ||
                  ((e = d.getUID(fi)), hi(t.target).attr("id", e)),
                (t.target = "#" + e)),
              d.typeCheckConfig(fi, t, mi),
              t
            );
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; ) {
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = (t = this._selector.split(",")).map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              n = hi(t.join(","));
            n.hasClass(vi)
              ? (n.closest(Ii).find(Ai).addClass(yi), n.addClass(yi))
              : (n.addClass(yi),
                n.parent().is("li") && n.parent().addClass(yi),
                n
                  .parents(wi)
                  .prev(Ci + ", " + Di)
                  .addClass(yi),
                n.parents(wi).prev(Ti).children(Ci).addClass(yi)),
              hi(this._scrollElement).trigger(_i.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (t._clear = function () {
            hi(this._selector)
              .filter(bi)
              .removeClass(yi)
              .parent()
              .removeClass(yi);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = hi(this).data(ui);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  hi(this).data(ui, t)),
                "string" == typeof e)
              ) {
                if (void 0 === t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return gi;
              },
            },
          ]),
          n
        );
      })()),
      hi(window).on(_i.LOAD_DATA_API, function () {
        for (var t = hi.makeArray(hi(Ei)), e = t.length; e--; ) {
          var n = hi(t[e]);
          ki._jQueryInterface.call(n, n.data());
        }
      }),
      (hi.fn[fi] = ki._jQueryInterface),
      (hi.fn[fi].Constructor = ki),
      (hi.fn[fi].noConflict = function () {
        return (hi.fn[fi] = pi), ki._jQueryInterface;
      }),
      ki),
    eo =
      ((Li = "." + (Pi = "bs.tab")),
      (ji = (xi = e).fn.tab),
      (Hi = {
        HIDE: "hide" + Li,
        HIDDEN: "hidden" + Li,
        SHOW: "show" + Li,
        SHOWN: "shown" + Li,
        CLICK_DATA_API: "click" + Li + ".data-api",
      }),
      (Fi = "dropdown-menu"),
      (Mi = "active"),
      (Wi = "disabled"),
      (Ri = "fade"),
      (Ui = "show"),
      (Bi = ".dropdown"),
      (Ki = ".nav, .list-group"),
      (Qi = ".active"),
      (Yi = "> li > .active"),
      (Vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (qi = ".dropdown-toggle"),
      (zi = "> .dropdown-menu .active"),
      (Gi = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var t,
              e,
              n,
              i,
              o,
              r,
              s,
              a,
              l = this;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              xi(this._element).hasClass(Mi)) ||
              xi(this._element).hasClass(Wi) ||
              ((e = xi(this._element).closest(Ki)[0]),
              (n = d.getSelectorFromElement(this._element)),
              e &&
                ((i = "UL" === e.nodeName ? Yi : Qi),
                (o = (o = xi.makeArray(xi(e).find(i)))[o.length - 1])),
              (r = xi.Event(Hi.HIDE, { relatedTarget: this._element })),
              (s = xi.Event(Hi.SHOW, { relatedTarget: o })),
              o && xi(o).trigger(r),
              xi(this._element).trigger(s),
              s.isDefaultPrevented() ||
                r.isDefaultPrevented() ||
                (n && (t = xi(n)[0]),
                this._activate(this._element, e),
                (a = function () {
                  var t = xi.Event(Hi.HIDDEN, { relatedTarget: l._element }),
                    e = xi.Event(Hi.SHOWN, { relatedTarget: o });
                  xi(o).trigger(t), xi(l._element).trigger(e);
                }),
                t ? this._activate(t, t.parentNode, a) : a()));
          }),
          (t.dispose = function () {
            xi.removeData(this._element, Pi), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            function i() {
              return r._transitionComplete(t, a, n);
            }
            var o,
              r = this,
              s = "UL" === e.nodeName ? xi(e).find(Yi) : xi(e).children(Qi),
              a = s[0],
              l = n && a && xi(a).hasClass(Ri);
            a && l
              ? ((o = d.getTransitionDurationFromElement(a)),
                xi(a).one(d.TRANSITION_END, i).emulateTransitionEnd(o))
              : i();
          }),
          (t._transitionComplete = function (t, e, n) {
            var i, o;
            e &&
              (xi(e).removeClass(Ui + " " + Mi),
              (i = xi(e.parentNode).find(zi)[0]) && xi(i).removeClass(Mi),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1)),
              xi(t).addClass(Mi),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              d.reflow(t),
              xi(t).addClass(Ui),
              t.parentNode &&
                xi(t.parentNode).hasClass(Fi) &&
                ((o = xi(t).closest(Bi)[0]) && xi(o).find(qi).addClass(Mi),
                t.setAttribute("aria-expanded", !0)),
              n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = xi(this),
                e = t.data(Pi);
              if (
                (e || ((e = new i(this)), t.data(Pi, e)), "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          i
        );
      })()),
      xi(document).on(Hi.CLICK_DATA_API, Vi, function (t) {
        t.preventDefault(), Gi._jQueryInterface.call(xi(this), "show");
      }),
      (xi.fn.tab = Gi._jQueryInterface),
      (xi.fn.tab.Constructor = Gi),
      (xi.fn.tab.noConflict = function () {
        return (xi.fn.tab = ji), Gi._jQueryInterface;
      }),
      Gi);
  !(function (t) {
    if (void 0 === t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = d),
    (t.Alert = St),
    (t.Button = At),
    (t.Carousel = Ot),
    (t.Collapse = Nt),
    (t.Dropdown = Ji),
    (t.Modal = Zi),
    (t.Popover = $i),
    (t.Scrollspy = to),
    (t.Tab = eo),
    (t.Tooltip = Xi),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!(function (h) {
  "use strict";
  var r = function (t, i) {
    (this.options = h.extend({}, r.DEFAULTS, i)),
      (this.$target = h(this.options.target)
        .on("scroll.bs.affix.data-api", h.proxy(this.checkPosition, this))
        .on(
          "click.bs.affix.data-api",
          h.proxy(this.checkPositionWithEventLoop, this)
        )),
      (this.$element = h(t)),
      (this.affixed = null),
      (this.unpin = null),
      (this.pinnedOffset = null),
      this.checkPosition();
  };
  function e(o) {
    return this.each(function () {
      var t = h(this),
        i = t.data("bs.affix"),
        e = "object" == typeof o && o;
      i || t.data("bs.affix", (i = new r(this, e))),
        "string" == typeof o && i[o]();
    });
  }
  (r.VERSION = "3.3.7"),
    (r.RESET = "affix affix-top affix-bottom"),
    (r.DEFAULTS = { offset: 0, target: window }),
    (r.prototype.getState = function (t, i, e, o) {
      var f = this.$target.scrollTop(),
        n = this.$element.offset(),
        s = this.$target.height();
      if (null != e && "top" == this.affixed) return f < e && "top";
      if ("bottom" == this.affixed)
        return null != e
          ? !(f + this.unpin <= n.top) && "bottom"
          : !(f + s <= t - o) && "bottom";
      var a = null == this.affixed,
        h = a ? f : n.top;
      return null != e && f <= e
        ? "top"
        : null != o && t - o <= h + (a ? s : i) && "bottom";
    }),
    (r.prototype.getPinnedOffset = function () {
      if (this.pinnedOffset) return this.pinnedOffset;
      this.$element.removeClass(r.RESET).addClass("affix");
      var t = this.$target.scrollTop(),
        i = this.$element.offset();
      return (this.pinnedOffset = i.top - t);
    }),
    (r.prototype.checkPositionWithEventLoop = function () {
      setTimeout(h.proxy(this.checkPosition, this), 1);
    }),
    (r.prototype.checkPosition = function () {
      if (this.$element.is(":visible")) {
        var t = this.$element.height(),
          i = this.options.offset,
          e = i.top,
          o = i.bottom,
          f = Math.max(h(document).height(), h(document.body).height());
        "object" != typeof i && (o = e = i),
          "function" == typeof e && (e = i.top(this.$element)),
          "function" == typeof o && (o = i.bottom(this.$element));
        var n = this.getState(f, t, e, o);
        if (this.affixed != n) {
          null != this.unpin && this.$element.css("top", "");
          var s = "affix" + (n ? "-" + n : ""),
            a = h.Event(s + ".bs.affix");
          if ((this.$element.trigger(a), a.isDefaultPrevented())) return;
          (this.affixed = n),
            (this.unpin = "bottom" == n ? this.getPinnedOffset() : null),
            this.$element
              .removeClass(r.RESET)
              .addClass(s)
              .trigger(s.replace("affix", "affixed") + ".bs.affix");
        }
        "bottom" == n && this.$element.offset({ top: f - t - o });
      }
    });
  var t = h.fn.affix;
  (h.fn.affix = e),
    (h.fn.affix.Constructor = r),
    (h.fn.affix.noConflict = function () {
      return (h.fn.affix = t), this;
    }),
    h(window).on("load", function () {
      h('[data-spy="affix"]').each(function () {
        var t = h(this),
          i = t.data();
        (i.offset = i.offset || {}),
          null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          null != i.offsetTop && (i.offset.top = i.offsetTop),
          e.call(t, i);
      });
    });
})(jQuery);
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!(function (f) {
  var o = [],
    a = !1,
    p = !1,
    s = { interval: 250, force_process: !1 },
    u = f(window),
    c = [];
  function l() {
    p = !1;
    for (var e, r = 0, t = o.length; r < t; r++) {
      var i,
        n =
          ((e = o[r]),
          f(e).filter(function () {
            return f(this).is(":appeared");
          }));
      n.trigger("appear", [n]),
        c[r] && (i = c[r].not(n)).trigger("disappear", [i]),
        (c[r] = n);
    }
  }
  (f.expr[":"].appeared = function (e) {
    var r = f(e);
    if (!r.is(":visible")) return !1;
    var t = u.scrollLeft(),
      i = u.scrollTop(),
      n = r.offset(),
      o = n.left,
      a = n.top;
    return (
      a + r.height() >= i &&
      a - (r.data("appear-top-offset") || 0) <= i + u.height() &&
      o + r.width() >= t &&
      o - (r.data("appear-left-offset") || 0) <= t + u.width()
    );
  }),
    f.fn.extend({
      appear: function (e) {
        var r,
          t,
          i = f.extend({}, s, e || {}),
          n = this.selector || this;
        return (
          a ||
            ((r = function () {
              p || ((p = !0), setTimeout(l, i.interval));
            }),
            f(window).scroll(r).resize(r),
            (a = !0)),
          i.force_process && setTimeout(l, i.interval),
          (t = n),
          o.push(t),
          c.push(),
          f(n)
        );
      },
    }),
    f.extend({
      force_appear: function () {
        return !!a && (l(), !0);
      },
    });
})("undefined" != typeof module ? require("jquery") : jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? e(require("jquery"))
    : e(jQuery);
})(function (x) {
  var i = /\+/g;
  function l(e) {
    return k.raw ? e : encodeURIComponent(e);
  }
  function v(e, n) {
    var o = k.raw
      ? e
      : (function (e) {
          0 === e.indexOf('"') &&
            (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
          try {
            return (
              (e = decodeURIComponent(e.replace(i, " "))),
              k.json ? JSON.parse(e) : e
            );
          } catch (e) {}
        })(e);
    return x.isFunction(n) ? n(o) : o;
  }
  var k = (x.cookie = function (e, n, o) {
    var i, r, t;
    if (1 < arguments.length && !x.isFunction(n))
      return (
        "number" == typeof (o = x.extend({}, k.defaults, o)).expires &&
          ((i = o.expires),
          (r = o.expires = new Date()).setTime(+r + 864e5 * i)),
        (document.cookie = [
          l(e),
          "=",
          ((t = n), l(k.json ? JSON.stringify(t) : String(t))),
          o.expires ? "; expires=" + o.expires.toUTCString() : "",
          o.path ? "; path=" + o.path : "",
          o.domain ? "; domain=" + o.domain : "",
          o.secure ? "; secure" : "",
        ].join(""))
      );
    for (
      var c,
        u = e ? void 0 : {},
        a = document.cookie ? document.cookie.split("; ") : [],
        d = 0,
        p = a.length;
      d < p;
      d++
    ) {
      var s = a[d].split("="),
        f = ((c = s.shift()), k.raw ? c : decodeURIComponent(c)),
        m = s.join("=");
      if (e && e === f) {
        u = v(m, n);
        break;
      }
      e || void 0 === (m = v(m)) || (u[f] = m);
    }
    return u;
  });
  (k.defaults = {}),
    (x.removeCookie = function (e, n) {
      return (
        void 0 !== x.cookie(e) &&
        (x.cookie(e, "", x.extend({}, n, { expires: -1 })), !x.cookie(e))
      );
    });
});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, t, e, u, a) {
      return jQuery.easing[jQuery.easing.def](n, t, e, u, a);
    },
    easeInQuad: function (n, t, e, u, a) {
      return u * (t /= a) * t + e;
    },
    easeOutQuad: function (n, t, e, u, a) {
      return -u * (t /= a) * (t - 2) + e;
    },
    easeInOutQuad: function (n, t, e, u, a) {
      return (t /= a / 2) < 1
        ? (u / 2) * t * t + e
        : (-u / 2) * (--t * (t - 2) - 1) + e;
    },
    easeInCubic: function (n, t, e, u, a) {
      return u * (t /= a) * t * t + e;
    },
    easeOutCubic: function (n, t, e, u, a) {
      return u * ((t = t / a - 1) * t * t + 1) + e;
    },
    easeInOutCubic: function (n, t, e, u, a) {
      return (t /= a / 2) < 1
        ? (u / 2) * t * t * t + e
        : (u / 2) * ((t -= 2) * t * t + 2) + e;
    },
    easeInQuart: function (n, t, e, u, a) {
      return u * (t /= a) * t * t * t + e;
    },
    easeOutQuart: function (n, t, e, u, a) {
      return -u * ((t = t / a - 1) * t * t * t - 1) + e;
    },
    easeInOutQuart: function (n, t, e, u, a) {
      return (t /= a / 2) < 1
        ? (u / 2) * t * t * t * t + e
        : (-u / 2) * ((t -= 2) * t * t * t - 2) + e;
    },
    easeInQuint: function (n, t, e, u, a) {
      return u * (t /= a) * t * t * t * t + e;
    },
    easeOutQuint: function (n, t, e, u, a) {
      return u * ((t = t / a - 1) * t * t * t * t + 1) + e;
    },
    easeInOutQuint: function (n, t, e, u, a) {
      return (t /= a / 2) < 1
        ? (u / 2) * t * t * t * t * t + e
        : (u / 2) * ((t -= 2) * t * t * t * t + 2) + e;
    },
    easeInSine: function (n, t, e, u, a) {
      return -u * Math.cos((t / a) * (Math.PI / 2)) + u + e;
    },
    easeOutSine: function (n, t, e, u, a) {
      return u * Math.sin((t / a) * (Math.PI / 2)) + e;
    },
    easeInOutSine: function (n, t, e, u, a) {
      return (-u / 2) * (Math.cos((Math.PI * t) / a) - 1) + e;
    },
    easeInExpo: function (n, t, e, u, a) {
      return 0 == t ? e : u * Math.pow(2, 10 * (t / a - 1)) + e;
    },
    easeOutExpo: function (n, t, e, u, a) {
      return t == a ? e + u : u * (1 - Math.pow(2, (-10 * t) / a)) + e;
    },
    easeInOutExpo: function (n, t, e, u, a) {
      return 0 == t
        ? e
        : t == a
        ? e + u
        : (t /= a / 2) < 1
        ? (u / 2) * Math.pow(2, 10 * (t - 1)) + e
        : (u / 2) * (2 - Math.pow(2, -10 * --t)) + e;
    },
    easeInCirc: function (n, t, e, u, a) {
      return -u * (Math.sqrt(1 - (t /= a) * t) - 1) + e;
    },
    easeOutCirc: function (n, t, e, u, a) {
      return u * Math.sqrt(1 - (t = t / a - 1) * t) + e;
    },
    easeInOutCirc: function (n, t, e, u, a) {
      return (t /= a / 2) < 1
        ? (-u / 2) * (Math.sqrt(1 - t * t) - 1) + e
        : (u / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
    },
    easeInElastic: function (n, t, e, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      return 0 == t
        ? e
        : 1 == (t /= a)
        ? e + u
        : ((i = i || 0.3 * a),
          (r =
            s < Math.abs(u)
              ? ((s = u), i / 4)
              : (i / (2 * Math.PI)) * Math.asin(u / s)),
          -(
            s *
            Math.pow(2, 10 * --t) *
            Math.sin(((t * a - r) * (2 * Math.PI)) / i)
          ) + e);
    },
    easeOutElastic: function (n, t, e, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      return 0 == t
        ? e
        : 1 == (t /= a)
        ? e + u
        : ((i = i || 0.3 * a),
          (r =
            s < Math.abs(u)
              ? ((s = u), i / 4)
              : (i / (2 * Math.PI)) * Math.asin(u / s)),
          s *
            Math.pow(2, -10 * t) *
            Math.sin(((t * a - r) * (2 * Math.PI)) / i) +
            u +
            e);
    },
    easeInOutElastic: function (n, t, e, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      return 0 == t
        ? e
        : 2 == (t /= a / 2)
        ? e + u
        : ((i = i || a * (0.3 * 1.5)),
          (r =
            s < Math.abs(u)
              ? ((s = u), i / 4)
              : (i / (2 * Math.PI)) * Math.asin(u / s)),
          t < 1
            ? s *
                Math.pow(2, 10 * --t) *
                Math.sin(((t * a - r) * (2 * Math.PI)) / i) *
                -0.5 +
              e
            : s *
                Math.pow(2, -10 * --t) *
                Math.sin(((t * a - r) * (2 * Math.PI)) / i) *
                0.5 +
              u +
              e);
    },
    easeInBack: function (n, t, e, u, a, r) {
      return (
        null == r && (r = 1.70158), u * (t /= a) * t * ((r + 1) * t - r) + e
      );
    },
    easeOutBack: function (n, t, e, u, a, r) {
      return (
        null == r && (r = 1.70158),
        u * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + e
      );
    },
    easeInOutBack: function (n, t, e, u, a, r) {
      return (
        null == r && (r = 1.70158),
        (t /= a / 2) < 1
          ? (u / 2) * (t * t * ((1 + (r *= 1.525)) * t - r)) + e
          : (u / 2) * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
      );
    },
    easeInBounce: function (n, t, e, u, a) {
      return u - jQuery.easing.easeOutBounce(n, a - t, 0, u, a) + e;
    },
    easeOutBounce: function (n, t, e, u, a) {
      return (t /= a) < 1 / 2.75
        ? u * (7.5625 * t * t) + e
        : t < 2 / 2.75
        ? u * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
        : t < 2.5 / 2.75
        ? u * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
        : u * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
    },
    easeInOutBounce: function (n, t, e, u, a) {
      return t < a / 2
        ? 0.5 * jQuery.easing.easeInBounce(n, 2 * t, 0, u, a) + e
        : 0.5 * jQuery.easing.easeOutBounce(n, 2 * t - a, 0, u, a) +
            0.5 * u +
            e;
    },
  });
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : jQuery && !jQuery.fn.hoverIntent && e(jQuery);
})(function (a) {
  "use strict";
  function s(e) {
    (o = e.pageX), (u = e.pageY);
  }
  var o,
    u,
    r = { interval: 100, sensitivity: 6, timeout: 0 },
    f = 0,
    d = function (e, t, n, i) {
      if (
        Math.sqrt((n.pX - o) * (n.pX - o) + (n.pY - u) * (n.pY - u)) <
        i.sensitivity
      )
        return (
          t.off(n.event, s),
          delete n.timeoutId,
          (n.isActive = !0),
          (e.pageX = o),
          (e.pageY = u),
          delete n.pX,
          delete n.pY,
          i.over.apply(t[0], [e])
        );
      (n.pX = o),
        (n.pY = u),
        (n.timeoutId = setTimeout(function () {
          d(e, t, n, i);
        }, i.interval));
    };
  a.fn.hoverIntent = function (e, t, n) {
    var i = f++,
      v = a.extend({}, r);
    a.isPlainObject(e)
      ? ((v = a.extend(v, e)), a.isFunction(v.out) || (v.out = v.over))
      : (v = a.isFunction(t)
          ? a.extend(v, { over: e, out: t, selector: n })
          : a.extend(v, { over: e, out: e, selector: t }));
    function o(e) {
      var o = a.extend({}, e),
        u = a(this),
        t = u.data("hoverIntent");
      t || u.data("hoverIntent", (t = {}));
      var r = t[i];
      r || (t[i] = r = { id: i }),
        r.timeoutId && (r.timeoutId = clearTimeout(r.timeoutId));
      var n = (r.event = "mousemove.hoverIntent.hoverIntent" + i);
      if ("mouseenter" === e.type) {
        if (r.isActive) return;
        (r.pX = o.pageX),
          (r.pY = o.pageY),
          u.off(n, s).on(n, s),
          (r.timeoutId = setTimeout(function () {
            d(o, u, r, v);
          }, v.interval));
      } else {
        if (!r.isActive) return;
        u.off(n, s),
          (r.timeoutId = setTimeout(function () {
            var e, t, n, i;
            (e = o),
              (t = u),
              (n = r),
              (i = v.out),
              delete t.data("hoverIntent")[n.id],
              i.apply(t[0], [e]);
          }, v.timeout));
      }
    }
    return this.on(
      { "mouseenter.hoverIntent": o, "mouseleave.hoverIntent": o },
      v.selector
    );
  };
});
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
!(function (i, e) {
  "use strict";
  var s,
    o,
    r,
    n,
    t,
    a,
    h,
    l,
    p,
    u =
      ((r = "sf-breadcrumb"),
      (n = "sf-js-enabled"),
      (t = "sf-with-ul"),
      (a = "sf-arrows"),
      (o = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
        navigator.userAgent
      )) && i("html").css("cursor", "pointer").on("click", i.noop),
      (h = o),
      (l =
        "behavior" in (s = document.documentElement.style) &&
        "fill" in s &&
        /iemobile/i.test(navigator.userAgent)),
      (p = !!e.PointerEvent),
      {
        hide: function (e) {
          if (this.length) {
            var s = m(this);
            if (!s) return this;
            var o = !0 === s.retainPath ? s.$path : "",
              t = this.find("li." + s.hoverClass)
                .add(this)
                .not(o)
                .removeClass(s.hoverClass)
                .children(s.popUpSelector),
              n = s.speedOut;
            if (
              (e && (t.show(), (n = 0)),
              (s.retainPath = !1) === s.onBeforeHide.call(t))
            )
              return this;
            t.stop(!0, !0).animate(s.animationOut, n, function () {
              var e = i(this);
              s.onHide.call(e);
            });
          }
          return this;
        },
        show: function () {
          var e = m(this);
          if (!e) return this;
          var s = this.addClass(e.hoverClass).children(e.popUpSelector);
          return (
            !1 === e.onBeforeShow.call(s) ||
              s.stop(!0, !0).animate(e.animation, e.speed, function () {
                e.onShow.call(s);
              }),
            this
          );
        },
        destroy: function () {
          return this.each(function () {
            var e,
              s = i(this),
              o = s.data("sfOptions");
            if (!o) return !1;
            (e = s.find(o.popUpSelector).parent("li")),
              clearTimeout(o.sfTimer),
              f(s, o),
              c(e),
              d(s),
              s.off(".superfish").off(".hoverIntent"),
              e.children(o.popUpSelector).attr("style", function (e, s) {
                return s.replace(/display[^;]+;?/g, "");
              }),
              o.$path.removeClass(o.hoverClass + " " + r).addClass(o.pathClass),
              s.find("." + o.hoverClass).removeClass(o.hoverClass),
              o.onDestroy.call(s),
              s.removeData("sfOptions");
          });
        },
        init: function (n) {
          return this.each(function () {
            var e = i(this);
            if (e.data("sfOptions")) return !1;
            var s,
              o = i.extend({}, i.fn.superfish.defaults, n),
              t = e.find(o.popUpSelector).parent("li");
            (o.$path =
              ((s = o),
              e
                .find("li." + s.pathClass)
                .slice(0, s.pathLevels)
                .addClass(s.hoverClass + " " + r)
                .filter(function () {
                  return i(this).children(s.popUpSelector).hide().show().length;
                })
                .removeClass(s.pathClass))),
              e.data("sfOptions", o),
              f(e, o, !0),
              c(t, !0),
              d(e),
              (function (e, s) {
                var o = "li:has(" + s.popUpSelector + ")";
                i.fn.hoverIntent && !s.disableHI
                  ? e.hoverIntent(y, w, o)
                  : e
                      .on("mouseenter.superfish", o, y)
                      .on("mouseleave.superfish", o, w);
                var t = p ? "pointerdown.superfish" : "MSPointerDown.superfish";
                h || (t += " touchend.superfish"),
                  l && (t += " mousedown.superfish"),
                  e
                    .on("focusin.superfish", "li", y)
                    .on("focusout.superfish", "li", w)
                    .on(t, "a", s, g);
              })(e, o),
              t.not("." + r).superfish("hide", !0),
              o.onInit.call(this);
          });
        },
      });
  function f(e, s, o) {
    var t = n;
    s.cssArrows && (t += " " + a), e[o ? "addClass" : "removeClass"](t);
  }
  function c(e, s) {
    var o = s ? "addClass" : "removeClass";
    e.children("a")[o](t);
  }
  function d(e) {
    var s = e.css("ms-touch-action"),
      o = e.css("touch-action");
    (o = "pan-y" === (o = o || s) ? "auto" : "pan-y"),
      e.css({ "ms-touch-action": o, "touch-action": o });
  }
  function v(e) {
    return e.closest("." + n);
  }
  function m(e) {
    return v(e).data("sfOptions");
  }
  function y() {
    var e = i(this),
      s = m(e);
    clearTimeout(s.sfTimer),
      e.siblings().superfish("hide").end().superfish("show");
  }
  function C(e) {
    (e.retainPath = -1 < i.inArray(this[0], e.$path)),
      this.superfish("hide"),
      this.parents("." + e.hoverClass).length ||
        (e.onIdle.call(v(this)), e.$path.length && i.proxy(y, e.$path)());
  }
  function w() {
    var e = i(this),
      s = m(e);
    h
      ? i.proxy(C, e, s)()
      : (clearTimeout(s.sfTimer),
        (s.sfTimer = setTimeout(i.proxy(C, e, s), s.delay)));
  }
  function g(e) {
    var s = i(this),
      o = m(s),
      t = s.siblings(e.data.popUpSelector);
    if (!1 === o.onHandleTouch.call(t)) return this;
    0 < t.length &&
      t.is(":hidden") &&
      (s.one("click.superfish", !1),
      "MSPointerDown" === e.type || "pointerdown" === e.type
        ? s.trigger("focus")
        : i.proxy(y, s.parent("li"))());
  }
  (i.fn.superfish = function (e, s) {
    return u[e]
      ? u[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof e && e
      ? i.error("Method " + e + " does not exist on jQuery.fn.superfish")
      : u.init.apply(this, arguments);
  }),
    (i.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: i.noop,
      onBeforeShow: i.noop,
      onShow: i.noop,
      onBeforeHide: i.noop,
      onHide: i.noop,
      onIdle: i.noop,
      onDestroy: i.noop,
      onHandleTouch: i.noop,
    });
})(jQuery, window);
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */
!(function (a) {
  "use strict";
  var i = function (t, e) {
    (this.$element = a(t)), (this.options = a.extend({}, i.defaults, e));
  };
  (i.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: "none",
    use_percentage: !0,
    percent_format: function (t) {
      return t + "%";
    },
    amount_format: function (t, e) {
      return t + " / " + e;
    },
    update: a.noop,
    done: a.noop,
    fail: a.noop,
  }),
    (i.prototype.transition = function () {
      var r,
        t,
        o = this.$element,
        h = o.parent(),
        d = this.$back_text,
        p = this.$front_text,
        f = this.options,
        c = parseInt(o.attr("data-transitiongoal")),
        u = parseInt(o.attr("aria-valuemin")) || 0,
        l = parseInt(o.attr("aria-valuemax")) || 100,
        g = h.hasClass("vertical"),
        _ =
          f.update && "function" == typeof f.update
            ? f.update
            : i.defaults.update,
        x = f.done && "function" == typeof f.done ? f.done : i.defaults.done,
        e = f.fail && "function" == typeof f.fail ? f.fail : i.defaults.fail;
      isNaN(c)
        ? e("data-transitiongoal not set")
        : ((r = Math.round((100 * (c - u)) / (l - u))),
          "center" !== f.display_text ||
            d ||
            p ||
            ((this.$back_text = d =
              a("<span>").addClass("progressbar-back-text").prependTo(h)),
            (this.$front_text = p =
              a("<span>").addClass("progressbar-front-text").prependTo(o)),
            g
              ? ((t = h.css("height")),
                d.css({ height: t, "line-height": t }),
                p.css({ height: t, "line-height": t }),
                a(window).resize(function () {
                  (t = h.css("height")),
                    d.css({ height: t, "line-height": t }),
                    p.css({ height: t, "line-height": t });
                }))
              : ((t = h.css("width")),
                p.css({ width: t }),
                a(window).resize(function () {
                  (t = h.css("width")), p.css({ width: t });
                }))),
          setTimeout(function () {
            var t, e, n, s, a;
            g ? o.css("height", r + "%") : o.css("width", r + "%");
            var i = setInterval(function () {
              (s = g
                ? ((n = o.height()), h.height())
                : ((n = o.width()), h.width())),
                (t = Math.round((100 * n) / s)),
                (e = Math.round(u + (n / s) * (l - u))),
                r <= t && ((t = r), (e = c), x(o), clearInterval(i)),
                "none" !== f.display_text &&
                  ((a = f.use_percentage
                    ? f.percent_format(t)
                    : f.amount_format(e, l, u)),
                  "fill" === f.display_text
                    ? o.text(a)
                    : "center" === f.display_text && (d.text(a), p.text(a))),
                o.attr("aria-valuenow", e),
                _(t, o);
            }, f.refresh_speed);
          }, f.transition_delay));
    });
  var t = a.fn.progressbar;
  (a.fn.progressbar = function (s) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.progressbar"),
        n = "object" == typeof s && s;
      e && n && a.extend(e.options, n),
        e || t.data("bs.progressbar", (e = new i(this, n))),
        e.transition();
    });
  }),
    (a.fn.progressbar.Constructor = i),
    (a.fn.progressbar.noConflict = function () {
      return (a.fn.progressbar = t), this;
    });
})(window.jQuery);
/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!(function () {
  "use strict";
  var p = !1;
  (window.JQClass = function () {}),
    (JQClass.classes = {}),
    (JQClass.extend = function t(e) {
      function i() {
        !p && this._init && this._init.apply(this, arguments);
      }
      var n = this.prototype;
      p = !0;
      var s = new this();
      for (var o in ((p = !1), e))
        if ("function" == typeof e[o] && "function" == typeof n[o])
          s[o] = (function (i, s) {
            return function () {
              var t = this._super;
              this._super = function (t) {
                return n[i].apply(this, t || []);
              };
              var e = s.apply(this, arguments);
              return (this._super = t), e;
            };
          })(o, e[o]);
        else if (
          "object" == typeof e[o] &&
          "object" == typeof n[o] &&
          "defaultOptions" === o
        ) {
          var a,
            r = n[o],
            l = e[o],
            _ = {};
          for (a in r) _[a] = r[a];
          for (a in l) _[a] = l[a];
          s[o] = _;
        } else s[o] = e[o];
      return (((i.prototype = s).constructor = i).extend = t), i;
    });
})(),
  /*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
  (function ($) {
    "use strict";
    function camelCase(t) {
      return t.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      deepMerge: !0,
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {}
        );
        var o = camelCase(this.name);
        ($[o] = this),
          ($.fn[o] = function (e) {
            var i = Array.prototype.slice.call(arguments, 1),
              s = this,
              n = this;
            return (
              this.each(function () {
                if ("string" == typeof e) {
                  if ("_" === e[0] || !$[o][e]) throw "Unknown method: " + e;
                  var t = $[o][e].apply($[o], [this].concat(i));
                  if (t !== s && void 0 !== t) return (n = t), !1;
                } else $[o]._attach(this, e);
              }),
              n
            );
          });
      },
      setDefaults: function (t) {
        $.extend(this.defaultOptions, t || {});
      },
      _attach: function (t, e) {
        var i;
        (t = $(t)).hasClass(this._getMarker()) ||
          (t.addClass(this._getMarker()),
          (e = $.extend(
            this.deepMerge,
            {},
            this.defaultOptions,
            this._getMetadata(t),
            e || {}
          )),
          (i = $.extend(
            { name: this.name, elem: t, options: e },
            this._instSettings(t, e)
          )),
          t.data(this.name, i),
          this._postAttach(t, i),
          this.option(t, e));
      },
      _instSettings: function (t, e) {
        return {};
      },
      _postAttach: function (t, e) {},
      _getMetadata: function (elem) {
        try {
          var data = elem.data(this.name.toLowerCase()) || "",
            data = data
              .replace(/(\\?)'/g, function (t, e) {
                return e ? "'" : '"';
              })
              .replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
                var s = data.substring(0, i).match(/"/g);
                return s && s.length % 2 != 0 ? e + ":" : '"' + e + '":';
              })
              .replace(/\\:/g, ":"),
            value;
          for (var key in ((data = $.parseJSON("{" + data + "}")), data)) {
            data.hasOwnProperty(key) &&
              ((value = data[key]),
              "string" == typeof value &&
                value.match(/^new Date\(([-0-9,\s]*)\)$/) &&
                (data[key] = eval(value)));
          }
          return data;
        } catch (t) {
          return {};
        }
      },
      _getInst: function (t) {
        return $(t).data(this.name) || {};
      },
      option: function (t, e, i) {
        var s = (t = $(t)).data(this.name),
          n = e || {};
        return !e || ("string" == typeof e && void 0 === i)
          ? (n = (s || {}).options) && e
            ? n[e]
            : n
          : void (
              t.hasClass(this._getMarker()) &&
              ("string" == typeof e && ((n = {})[e] = i),
              this._optionsChanged(t, s, n),
              $.extend(s.options, n))
            );
      },
      _optionsChanged: function (t, e, i) {},
      destroy: function (t) {
        (t = $(t)).hasClass(this._getMarker()) &&
          (this._preDestroy(t, this._getInst(t)),
          t.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (t, e) {
          "object" == typeof t && ((e = t), (t = "JQPlugin")),
            (t = camelCase(t));
          var i = camelCase(e.name);
          (JQClass.classes[i] = JQClass.classes[t].extend(e)),
            new JQClass.classes[i]();
        },
      });
  })(jQuery),
  (function (m) {
    "use strict";
    var t = "countdown";
    m.JQPlugin.createPlugin({
      name: t,
      defaultOptions: {
        until: null,
        since: null,
        timezone: null,
        serverSync: null,
        format: "dHMS",
        layout: "",
        compact: !1,
        padZeroes: !1,
        significant: 0,
        description: "",
        expiryUrl: "",
        expiryText: "",
        alwaysExpire: !1,
        onExpiry: null,
        onTick: null,
        tickInterval: 1,
      },
      regionalOptions: {
        "": {
          labels: [
            "Years",
            "Months",
            "Weeks",
            "Days",
            "Hours",
            "Minutes",
            "Seconds",
          ],
          labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
          compactLabels: ["y", "m", "w", "d"],
          whichLabels: null,
          digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          timeSeparator: ":",
          isRTL: !1,
        },
      },
      _rtlClass: t + "-rtl",
      _sectionClass: t + "-section",
      _amountClass: t + "-amount",
      _periodClass: t + "-period",
      _rowClass: t + "-row",
      _holdingClass: t + "-holding",
      _showClass: t + "-show",
      _descrClass: t + "-descr",
      _timerElems: [],
      _init: function () {
        var s = this;
        this._super(), (this._serverSyncs = []);
        var n =
            "function" == typeof Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                },
          o = window.performance && "function" == typeof window.performance.now,
          a =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            null,
          r = 0;
        !a || m.noRequestAnimationFrame
          ? ((m.noRequestAnimationFrame = null),
            (m.countdown._timer = setInterval(function () {
              s._updateElems();
            }, 1e3)))
          : ((r =
              window.animationStartTime ||
              window.webkitAnimationStartTime ||
              window.mozAnimationStartTime ||
              window.oAnimationStartTime ||
              window.msAnimationStartTime ||
              n()),
            a(function t(e) {
              var i =
                e < 1e12
                  ? o
                    ? window.performance.now() +
                      window.performance.timing.navigationStart
                    : n()
                  : e || n();
              1e3 <= i - r && (s._updateElems(), (r = i)), a(t);
            }));
      },
      UTCDate: function (t, e, i, s, n, o, a, r) {
        "object" == typeof e &&
          e instanceof Date &&
          ((r = e.getMilliseconds()),
          (a = e.getSeconds()),
          (o = e.getMinutes()),
          (n = e.getHours()),
          (s = e.getDate()),
          (i = e.getMonth()),
          (e = e.getFullYear()));
        var l = new Date();
        return (
          l.setUTCFullYear(e),
          l.setUTCDate(1),
          l.setUTCMonth(i || 0),
          l.setUTCDate(s || 1),
          l.setUTCHours(n || 0),
          l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)),
          l.setUTCSeconds(a || 0),
          l.setUTCMilliseconds(r || 0),
          l
        );
      },
      periodsToSeconds: function (t) {
        return (
          31557600 * t[0] +
          2629800 * t[1] +
          604800 * t[2] +
          86400 * t[3] +
          3600 * t[4] +
          60 * t[5] +
          t[6]
        );
      },
      resync: function () {
        var n = this;
        m("." + this._getMarker()).each(function () {
          var t = m.data(this, n.name);
          if (t.options.serverSync) {
            for (var e, i = null, s = 0; s < n._serverSyncs.length; s++)
              if (n._serverSyncs[s][0] === t.options.serverSync) {
                i = n._serverSyncs[s];
                break;
              }
            n._eqNull(i[2]) &&
              ((e = m.isFunction(t.options.serverSync)
                ? t.options.serverSync.apply(this, [])
                : null),
              (i[2] = (e ? new Date().getTime() - e.getTime() : 0) - i[1])),
              t._since &&
                t._since.setMilliseconds(t._since.getMilliseconds() + i[2]),
              t._until.setMilliseconds(t._until.getMilliseconds() + i[2]);
          }
        });
        for (var t = 0; t < n._serverSyncs.length; t++)
          n._eqNull(n._serverSyncs[t][2]) ||
            ((n._serverSyncs[t][1] += n._serverSyncs[t][2]),
            delete n._serverSyncs[t][2]);
      },
      _instSettings: function (t, e) {
        return { _periods: [0, 0, 0, 0, 0, 0, 0] };
      },
      _addElem: function (t) {
        this._hasElem(t) || this._timerElems.push(t);
      },
      _hasElem: function (t) {
        return -1 < m.inArray(t, this._timerElems);
      },
      _removeElem: function (e) {
        this._timerElems = m.map(this._timerElems, function (t) {
          return t === e ? null : t;
        });
      },
      _updateElems: function () {
        for (var t = this._timerElems.length - 1; 0 <= t; t--)
          this._updateCountdown(this._timerElems[t]);
      },
      _optionsChanged: function (t, e, i) {
        i.layout &&
          (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
          this._resetExtraLabels(e.options, i);
        var s = e.options.timezone !== i.timezone;
        m.extend(e.options, i),
          this._adjustSettings(
            t,
            e,
            !this._eqNull(i.until) || !this._eqNull(i.since) || s
          );
        var n = new Date();
        ((e._since && e._since < n) || (e._until && e._until > n)) &&
          this._addElem(t[0]),
          this._updateCountdown(t, e);
      },
      _updateCountdown: function (t, e) {
        var i, s;
        (t = t.jquery ? t : m(t)),
          (e = e || this._getInst(t)) &&
            (t
              .html(this._generateHTML(e))
              .toggleClass(this._rtlClass, e.options.isRTL),
            "pause" !== e._hold &&
              m.isFunction(e.options.onTick) &&
              ((i =
                "lap" !== e._hold
                  ? e._periods
                  : this._calculatePeriods(
                      e,
                      e._show,
                      e.options.significant,
                      new Date()
                    )),
              (1 !== e.options.tickInterval &&
                this.periodsToSeconds(i) % e.options.tickInterval != 0) ||
                e.options.onTick.apply(t[0], [i])),
            "pause" !== e._hold &&
            (e._since
              ? e._now.getTime() < e._since.getTime()
              : e._now.getTime() >= e._until.getTime()) &&
            !e._expiring
              ? ((e._expiring = !0),
                (this._hasElem(t[0]) || e.options.alwaysExpire) &&
                  (this._removeElem(t[0]),
                  m.isFunction(e.options.onExpiry) &&
                    e.options.onExpiry.apply(t[0], []),
                  e.options.expiryText &&
                    ((s = e.options.layout),
                    (e.options.layout = e.options.expiryText),
                    this._updateCountdown(t[0], e),
                    (e.options.layout = s)),
                  e.options.expiryUrl &&
                    (window.location = e.options.expiryUrl)),
                (e._expiring = !1))
              : "pause" === e._hold && this._removeElem(t[0]));
      },
      _resetExtraLabels: function (t, e) {
        var i = null;
        for (i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
        for (i in t)
          i.match(/[Ll]abels[02-9]|compactLabels1/) &&
            void 0 === e[i] &&
            (t[i] = null);
      },
      _eqNull: function (t) {
        return null == t;
      },
      _adjustSettings: function (t, e, i) {
        for (var s = null, n = 0; n < this._serverSyncs.length; n++)
          if (this._serverSyncs[n][0] === e.options.serverSync) {
            s = this._serverSyncs[n][1];
            break;
          }
        var o,
          a = null,
          r = null;
        this._eqNull(s)
          ? ((o = m.isFunction(e.options.serverSync)
              ? e.options.serverSync.apply(t[0], [])
              : null),
            (a = new Date()),
            (r = o ? a.getTime() - o.getTime() : 0),
            this._serverSyncs.push([e.options.serverSync, r]))
          : ((a = new Date()), (r = e.options.serverSync ? s : 0));
        var l = e.options.timezone,
          l = this._eqNull(l) ? -a.getTimezoneOffset() : l;
        (i || (!i && this._eqNull(e._until) && this._eqNull(e._since))) &&
          ((e._since = e.options.since),
          this._eqNull(e._since) ||
            ((e._since = this.UTCDate(l, this._determineTime(e._since, null))),
            e._since &&
              r &&
              e._since.setMilliseconds(e._since.getMilliseconds() + r)),
          (e._until = this.UTCDate(l, this._determineTime(e.options.until, a))),
          r && e._until.setMilliseconds(e._until.getMilliseconds() + r)),
          (e._show = this._determineShow(e));
      },
      _preDestroy: function (t, e) {
        this._removeElem(t[0]), t.empty();
      },
      pause: function (t) {
        this._hold(t, "pause");
      },
      lap: function (t) {
        this._hold(t, "lap");
      },
      resume: function (t) {
        this._hold(t, null);
      },
      toggle: function (t) {
        this[(m.data(t, this.name) || {})._hold ? "resume" : "pause"](t);
      },
      toggleLap: function (t) {
        this[(m.data(t, this.name) || {})._hold ? "resume" : "lap"](t);
      },
      _hold: function (t, e) {
        var i,
          s = m.data(t, this.name);
        s &&
          ("pause" !== s._hold ||
            e ||
            ((s._periods = s._savePeriods),
            (i = s._since ? "-" : "+"),
            (s[s._since ? "_since" : "_until"] = this._determineTime(
              i +
                s._periods[0] +
                "y" +
                i +
                s._periods[1] +
                "o" +
                i +
                s._periods[2] +
                "w" +
                i +
                s._periods[3] +
                "d" +
                i +
                s._periods[4] +
                "h" +
                i +
                s._periods[5] +
                "m" +
                i +
                s._periods[6] +
                "s"
            )),
            this._addElem(t)),
          (s._hold = e),
          (s._savePeriods = "pause" === e ? s._periods : null),
          m.data(t, this.name, s),
          this._updateCountdown(t, s));
      },
      getTimes: function (t) {
        var e = m.data(t, this.name);
        return e
          ? "pause" === e._hold
            ? e._savePeriods
            : e._hold
            ? this._calculatePeriods(
                e,
                e._show,
                e.options.significant,
                new Date()
              )
            : e._periods
          : null;
      },
      _determineTime: function (t, e) {
        var i,
          s,
          p = this,
          n = this._eqNull(t)
            ? e
            : "string" == typeof t
            ? (function (t) {
                t = t.toLowerCase();
                for (
                  var e = new Date(),
                    i = e.getFullYear(),
                    s = e.getMonth(),
                    n = e.getDate(),
                    o = e.getHours(),
                    a = e.getMinutes(),
                    r = e.getSeconds(),
                    l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
                    _ = l.exec(t);
                  _;

                ) {
                  switch (_[2] || "s") {
                    case "s":
                      r += parseInt(_[1], 10);
                      break;
                    case "m":
                      a += parseInt(_[1], 10);
                      break;
                    case "h":
                      o += parseInt(_[1], 10);
                      break;
                    case "d":
                      n += parseInt(_[1], 10);
                      break;
                    case "w":
                      n += 7 * parseInt(_[1], 10);
                      break;
                    case "o":
                      (s += parseInt(_[1], 10)),
                        (n = Math.min(n, p._getDaysInMonth(i, s)));
                      break;
                    case "y":
                      (i += parseInt(_[1], 10)),
                        (n = Math.min(n, p._getDaysInMonth(i, s)));
                  }
                  _ = l.exec(t);
                }
                return new Date(i, s, n, o, a, r, 0);
              })(t)
            : "number" == typeof t
            ? ((i = t), (s = new Date()).setTime(s.getTime() + 1e3 * i), s)
            : t;
        return n && n.setMilliseconds(0), n;
      },
      _getDaysInMonth: function (t, e) {
        return 32 - new Date(t, e, 32).getDate();
      },
      _normalLabels: function (t) {
        return t;
      },
      _generateHTML: function (i) {
        var s = this;
        i._periods = i._hold
          ? i._periods
          : this._calculatePeriods(
              i,
              i._show,
              i.options.significant,
              new Date()
            );
        for (
          var t = !1,
            e = 0,
            n = i.options.significant,
            o = m.extend({}, i._show),
            a = null,
            a = 0;
          a <= 6;
          a++
        )
          (t = t || ("?" === i._show[a] && 0 < i._periods[a])),
            (o[a] = "?" !== i._show[a] || t ? i._show[a] : null),
            (e += o[a] ? 1 : 0),
            (n -= 0 < i._periods[a] ? 1 : 0);
        var r = [!1, !1, !1, !1, !1, !1, !1];
        for (a = 6; 0 <= a; a--)
          i._show[a] && (i._periods[a] ? (r[a] = !0) : ((r[a] = 0 < n), n--));
        function l(t) {
          var e = i.options["compactLabels" + c(i._periods[t])];
          return o[t]
            ? s._translateDigits(i, i._periods[t]) + (e ? e[t] : p[t]) + " "
            : "";
        }
        function _(t) {
          var e = i.options["labels" + c(i._periods[t])];
          return (!i.options.significant && o[t]) ||
            (i.options.significant && r[t])
            ? '<span class="' +
                s._sectionClass +
                '"><span class="' +
                s._amountClass +
                '">' +
                s._minDigits(i, i._periods[t], u) +
                '</span><span class="' +
                s._periodClass +
                '">' +
                (e ? e[t] : p[t]) +
                "</span></span>"
            : "";
        }
        var p = i.options.compact ? i.options.compactLabels : i.options.labels,
          c = i.options.whichLabels || this._normalLabels,
          u = i.options.padZeroes ? 2 : 1;
        return i.options.layout
          ? this._buildLayout(
              i,
              o,
              i.options.layout,
              i.options.compact,
              i.options.significant,
              r
            )
          : (i.options.compact
              ? '<span class="' +
                this._rowClass +
                " " +
                this._amountClass +
                (i._hold ? " " + this._holdingClass : "") +
                '">' +
                l(0) +
                l(1) +
                l(2) +
                l(3) +
                (o[4] ? this._minDigits(i, i._periods[4], 2) : "") +
                (o[5]
                  ? (o[4] ? i.options.timeSeparator : "") +
                    this._minDigits(i, i._periods[5], 2)
                  : "") +
                (o[6]
                  ? (o[4] || o[5] ? i.options.timeSeparator : "") +
                    this._minDigits(i, i._periods[6], 2)
                  : "")
              : '<span class="' +
                this._rowClass +
                " " +
                this._showClass +
                (i.options.significant || e) +
                (i._hold ? " " + this._holdingClass : "") +
                '">' +
                _(0) +
                _(1) +
                _(2) +
                _(3) +
                _(4) +
                _(5) +
                _(6)) +
              "</span>" +
              (i.options.description
                ? '<span class="' +
                  this._rowClass +
                  " " +
                  this._descrClass +
                  '">' +
                  i.options.description +
                  "</span>"
                : "");
      },
      _buildLayout: function (i, t, e, s, n, o) {
        for (
          var a = i.options[s ? "compactLabels" : "labels"],
            r = i.options.whichLabels || this._normalLabels,
            l = function (t) {
              return (i.options[
                (s ? "compactLabels" : "labels") + r(i._periods[t])
              ] || a)[t];
            },
            _ = function (t, e) {
              return i.options.digits[Math.floor(t / e) % 10];
            },
            p = {
              desc: i.options.description,
              sep: i.options.timeSeparator,
              yl: l(0),
              yn: this._minDigits(i, i._periods[0], 1),
              ynn: this._minDigits(i, i._periods[0], 2),
              ynnn: this._minDigits(i, i._periods[0], 3),
              y1: _(i._periods[0], 1),
              y10: _(i._periods[0], 10),
              y100: _(i._periods[0], 100),
              y1000: _(i._periods[0], 1e3),
              ol: l(1),
              on: this._minDigits(i, i._periods[1], 1),
              onn: this._minDigits(i, i._periods[1], 2),
              onnn: this._minDigits(i, i._periods[1], 3),
              o1: _(i._periods[1], 1),
              o10: _(i._periods[1], 10),
              o100: _(i._periods[1], 100),
              o1000: _(i._periods[1], 1e3),
              wl: l(2),
              wn: this._minDigits(i, i._periods[2], 1),
              wnn: this._minDigits(i, i._periods[2], 2),
              wnnn: this._minDigits(i, i._periods[2], 3),
              w1: _(i._periods[2], 1),
              w10: _(i._periods[2], 10),
              w100: _(i._periods[2], 100),
              w1000: _(i._periods[2], 1e3),
              dl: l(3),
              dn: this._minDigits(i, i._periods[3], 1),
              dnn: this._minDigits(i, i._periods[3], 2),
              dnnn: this._minDigits(i, i._periods[3], 3),
              d1: _(i._periods[3], 1),
              d10: _(i._periods[3], 10),
              d100: _(i._periods[3], 100),
              d1000: _(i._periods[3], 1e3),
              hl: l(4),
              hn: this._minDigits(i, i._periods[4], 1),
              hnn: this._minDigits(i, i._periods[4], 2),
              hnnn: this._minDigits(i, i._periods[4], 3),
              h1: _(i._periods[4], 1),
              h10: _(i._periods[4], 10),
              h100: _(i._periods[4], 100),
              h1000: _(i._periods[4], 1e3),
              ml: l(5),
              mn: this._minDigits(i, i._periods[5], 1),
              mnn: this._minDigits(i, i._periods[5], 2),
              mnnn: this._minDigits(i, i._periods[5], 3),
              m1: _(i._periods[5], 1),
              m10: _(i._periods[5], 10),
              m100: _(i._periods[5], 100),
              m1000: _(i._periods[5], 1e3),
              sl: l(6),
              sn: this._minDigits(i, i._periods[6], 1),
              snn: this._minDigits(i, i._periods[6], 2),
              snnn: this._minDigits(i, i._periods[6], 3),
              s1: _(i._periods[6], 1),
              s10: _(i._periods[6], 10),
              s100: _(i._periods[6], 100),
              s1000: _(i._periods[6], 1e3),
            },
            c = e,
            u = 0;
          u <= 6;
          u++
        )
          var h = "yowdhms".charAt(u),
            d = new RegExp("\\{" + h + "<\\}([\\s\\S]*)\\{" + h + ">\\}", "g"),
            c = c.replace(d, (!n && t[u]) || (n && o[u]) ? "$1" : "");
        return (
          m.each(p, function (t, e) {
            var i = new RegExp("\\{" + t + "\\}", "g");
            c = c.replace(i, e);
          }),
          c
        );
      },
      _minDigits: function (t, e, i) {
        return (e = "" + e).length >= i
          ? this._translateDigits(t, e)
          : ((e = "0000000000" + e),
            this._translateDigits(t, e.substr(e.length - i)));
      },
      _translateDigits: function (e, t) {
        return ("" + t).replace(/[0-9]/g, function (t) {
          return e.options.digits[t];
        });
      },
      _determineShow: function (t) {
        var e = t.options.format,
          i = [];
        return (
          (i[0] = e.match("y") ? "?" : e.match("Y") ? "!" : null),
          (i[1] = e.match("o") ? "?" : e.match("O") ? "!" : null),
          (i[2] = e.match("w") ? "?" : e.match("W") ? "!" : null),
          (i[3] = e.match("d") ? "?" : e.match("D") ? "!" : null),
          (i[4] = e.match("h") ? "?" : e.match("H") ? "!" : null),
          (i[5] = e.match("m") ? "?" : e.match("M") ? "!" : null),
          (i[6] = e.match("s") ? "?" : e.match("S") ? "!" : null),
          i
        );
      },
      _calculatePeriods: function (t, i, e, s) {
        (t._now = s), t._now.setMilliseconds(0);
        var n = new Date(t._now.getTime());
        t._since
          ? s.getTime() < t._since.getTime()
            ? (t._now = s = n)
            : (s = t._since)
          : (n.setTime(t._until.getTime()),
            s.getTime() > t._until.getTime() && (t._now = s = n));
        var o,
          a,
          r,
          l,
          _,
          p,
          c,
          u = [0, 0, 0, 0, 0, 0, 0];
        (i[0] || i[1]) &&
          ((o = this._getDaysInMonth(s.getFullYear(), s.getMonth())),
          (a = this._getDaysInMonth(n.getFullYear(), n.getMonth())),
          (r =
            n.getDate() === s.getDate() ||
            (n.getDate() >= Math.min(o, a) && s.getDate() >= Math.min(o, a))),
          (l = function (t) {
            return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds();
          }),
          (_ = Math.max(
            0,
            12 * (n.getFullYear() - s.getFullYear()) +
              n.getMonth() -
              s.getMonth() +
              ((n.getDate() < s.getDate() && !r) || (r && l(n) < l(s)) ? -1 : 0)
          )),
          (u[0] = i[0] ? Math.floor(_ / 12) : 0),
          (u[1] = i[1] ? _ - 12 * u[0] : 0),
          (p = (s = new Date(s.getTime())).getDate() === o),
          (c = this._getDaysInMonth(
            s.getFullYear() + u[0],
            s.getMonth() + u[1]
          )),
          s.getDate() > c && s.setDate(c),
          s.setFullYear(s.getFullYear() + u[0]),
          s.setMonth(s.getMonth() + u[1]),
          p && s.setDate(c));
        function h(t, e) {
          (u[t] = i[t] ? Math.floor(d / e) : 0), (d -= u[t] * e);
        }
        var d = Math.floor((n.getTime() - s.getTime()) / 1e3),
          m = null;
        if (
          (h(2, 604800),
          h(3, 86400),
          h(4, 3600),
          h(5, 60),
          h(6, 1),
          0 < d && !t._since)
        )
          for (
            var g = [1, 12, 4.3482, 7, 24, 60, 60], f = 6, w = 1, m = 6;
            0 <= m;
            m--
          )
            i[m] &&
              (u[f] >= w && ((u[f] = 0), (d = 1)),
              0 < d && (u[m]++, (d = 0), (f = m), (w = 1))),
              (w *= g[m]);
        if (e) for (m = 0; m <= 6; m++) e && u[m] ? e-- : e || (u[m] = 0);
        return u;
      },
    });
  })(jQuery);
!(function (s) {
  (s.fn.countTo = function (c) {
    return (
      (c = c || {}),
      s(this).each(function () {
        var a = s.extend(
            {},
            s.fn.countTo.defaults,
            {
              from: s(this).data("from"),
              to: s(this).data("to"),
              speed: s(this).data("speed"),
              refreshInterval: s(this).data("refresh-interval"),
              decimals: s(this).data("decimals"),
            },
            c
          ),
          t = Math.ceil(a.speed / a.refreshInterval),
          e = (a.to - a.from) / t,
          n = this,
          o = s(this),
          r = 0,
          l = a.from,
          f = o.data("countTo") || {};
        function i(t) {
          var e = a.formatter.call(n, t, a);
          o.text(e);
        }
        o.data("countTo", f),
          f.interval && clearInterval(f.interval),
          (f.interval = setInterval(function () {
            r++,
              i((l += e)),
              "function" == typeof a.onUpdate && a.onUpdate.call(n, l);
            t <= r &&
              (o.removeData("countTo"),
              clearInterval(f.interval),
              (l = a.to),
              "function" == typeof a.onComplete && a.onComplete.call(n, l));
          }, a.refreshInterval)),
          i(l);
      })
    );
  }),
    (s.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1e3,
      refreshInterval: 100,
      decimals: 0,
      formatter: function (t, e) {
        return t.toFixed(e.decimals);
      },
      onUpdate: null,
      onComplete: null,
    });
})(jQuery);
!(function (e, t) {
  "object" == typeof exports
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t(e.jQuery);
})(this, function (n) {
  function o(e, o) {
    var n,
      t = document.createElement("canvas");
    e.appendChild(t),
      "undefined" != typeof G_vmlCanvasManager &&
        G_vmlCanvasManager.initElement(t);
    var i = t.getContext("2d");
    t.width = t.height = o.size;
    var a = 1;
    1 < window.devicePixelRatio &&
      ((a = window.devicePixelRatio),
      (t.style.width = t.style.height = [o.size, "px"].join("")),
      (t.width = t.height = o.size * a),
      i.scale(a, a)),
      i.translate(o.size / 2, o.size / 2),
      i.rotate((o.rotate / 180 - 0.5) * Math.PI);
    var r = (o.size - o.lineWidth) / 2;
    function s(e, t, n) {
      var a = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
      i.beginPath(),
        i.arc(0, 0, r, 0, 2 * Math.PI * n, a),
        (i.strokeStyle = e),
        (i.lineWidth = t),
        i.stroke();
    }
    function d() {
      o.scaleColor &&
        (function () {
          var e, t;
          (i.lineWidth = 1), (i.fillStyle = o.scaleColor), i.save();
          for (var n = 24; 0 < n; --n)
            (e =
              n % 6 == 0
                ? ((t = o.scaleLength), 0)
                : ((t = 0.6 * o.scaleLength), o.scaleLength - t)),
              i.fillRect(-o.size / 2 + e, 0, t, 1),
              i.rotate(Math.PI / 12);
          i.restore();
        })(),
        o.trackColor && s(o.trackColor, o.lineWidth, 1);
    }
    o.scaleColor && o.scaleLength && (r -= o.scaleLength + 2),
      (Date.now =
        Date.now ||
        function () {
          return +new Date();
        });
    var h =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      };
    (this.getCanvas = function () {
      return t;
    }),
      (this.getCtx = function () {
        return i;
      }),
      (this.clear = function () {
        i.clearRect(o.size / -2, o.size / -2, o.size, o.size);
      }),
      (this.draw = function (e) {
        var t;
        o.scaleColor || o.trackColor
          ? i.getImageData && i.putImageData
            ? n
              ? i.putImageData(n, 0, 0)
              : (d(), (n = i.getImageData(0, 0, o.size * a, o.size * a)))
            : (this.clear(), d())
          : this.clear(),
          (i.lineCap = o.lineCap),
          (t = "function" == typeof o.barColor ? o.barColor(e) : o.barColor),
          s(t, o.lineWidth, e / 100);
      }.bind(this)),
      (this.animate = function (n, a) {
        var i = Date.now();
        o.onStart(n, a);
        var r = function () {
          var e = Math.min(Date.now() - i, o.animate.duration),
            t = o.easing(this, e, n, a - n, o.animate.duration);
          this.draw(t),
            o.onStep(n, a, t),
            e >= o.animate.duration ? o.onStop(n, a) : h(r);
        }.bind(this);
        h(r);
      }.bind(this));
  }
  function a(t, n) {
    var a = {
      barColor: "#ef1e25",
      trackColor: "#f9f9f9",
      scaleColor: "#dfe0e0",
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 3,
      size: 110,
      rotate: 0,
      animate: { duration: 1e3, enabled: !0 },
      easing: function (e, t, n, a, i) {
        return (t /= i / 2) < 1
          ? (a / 2) * t * t + n
          : (-a / 2) * (--t * (t - 2) - 1) + n;
      },
      onStart: function () {},
      onStep: function () {},
      onStop: function () {},
    };
    if (void 0 !== o) a.renderer = o;
    else {
      if ("undefined" == typeof SVGRenderer)
        throw new Error("Please load either the SVG- or the CanvasRenderer");
      a.renderer = SVGRenderer;
    }
    var i = {},
      r = 0,
      e = function () {
        for (var e in ((this.el = t), (this.options = i), a))
          a.hasOwnProperty(e) &&
            ((i[e] = n && void 0 !== n[e] ? n[e] : a[e]),
            "function" == typeof i[e] && (i[e] = i[e].bind(this)));
        (i.easing =
          "string" == typeof i.easing &&
          "undefined" != typeof jQuery &&
          jQuery.isFunction(jQuery.easing[i.easing])
            ? jQuery.easing[i.easing]
            : a.easing),
          "number" == typeof i.animate &&
            (i.animate = { duration: i.animate, enabled: !0 }),
          "boolean" != typeof i.animate ||
            i.animate ||
            (i.animate = { duration: 1e3, enabled: i.animate }),
          (this.renderer = new i.renderer(t, i)),
          this.renderer.draw(r),
          t.dataset && t.dataset.percent
            ? this.update(parseFloat(t.dataset.percent))
            : t.getAttribute &&
              t.getAttribute("data-percent") &&
              this.update(parseFloat(t.getAttribute("data-percent")));
      }.bind(this);
    (this.update = function (e) {
      return (
        (e = parseFloat(e)),
        i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e),
        (r = e),
        this
      );
    }.bind(this)),
      (this.disableAnimation = function () {
        return (i.animate.enabled = !1), this;
      }),
      (this.enableAnimation = function () {
        return (i.animate.enabled = !0), this;
      }),
      e();
  }
  n.fn.easyPieChart = function (t) {
    return this.each(function () {
      var e;
      n.data(this, "easyPieChart") ||
        ((e = n.extend({}, t, n(this).data())),
        n.data(this, "easyPieChart", new a(this, e)));
    });
  };
});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.11
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!(function (l, e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("undefined" != typeof exports ? require("jquery") : l.jQuery);
})(this, function (b) {
  "use strict";
  function s(l) {
    return x.webkit && !l
      ? { height: 0, width: 0 }
      : (x.data.outer ||
          ((e = {
            border: "none",
            "box-sizing": "content-box",
            height: "200px",
            margin: "0",
            padding: "0",
            width: "200px",
          }),
          (x.data.inner = b("<div>").css(b.extend({}, e))),
          (x.data.outer = b("<div>")
            .css(
              b.extend(
                {
                  left: "-1000px",
                  overflow: "scroll",
                  position: "absolute",
                  top: "-1000px",
                },
                e
              )
            )
            .append(x.data.inner)
            .appendTo("body"))),
        x.data.outer.scrollLeft(1e3).scrollTop(1e3),
        {
          height: Math.ceil(
            x.data.outer.offset().top - x.data.inner.offset().top || 0
          ),
          width: Math.ceil(
            x.data.outer.offset().left - x.data.inner.offset().left || 0
          ),
        });
    var e;
  }
  function g(l) {
    var e = l.originalEvent;
    return !((e.axis && e.axis === e.HORIZONTAL_AXIS) || e.wheelDeltaX);
  }
  var x = {
    data: { index: 0, name: "scrollbar" },
    firefox: /firefox/i.test(navigator.userAgent),
    macosx: /mac/i.test(navigator.platform),
    msedge: /edge\/\d+/i.test(navigator.userAgent),
    msie: /(msie|trident)/i.test(navigator.userAgent),
    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent
    ),
    overlay: null,
    scroll: null,
    scrolls: [],
    webkit:
      /webkit/i.test(navigator.userAgent) &&
      !/edge\/\d+/i.test(navigator.userAgent),
  };
  x.scrolls.add = function (l) {
    this.remove(l).push(l);
  };
  function l(l) {
    var e;
    x.scroll ||
      ((x.overlay = !((e = s(!0)).height || e.width)),
      (x.scroll = s()),
      c(),
      b(window).resize(function () {
        var l,
          e = !1;
        x.scroll &&
          (x.scroll.height || x.scroll.width) &&
          (((l = s()).height === x.scroll.height &&
            l.width === x.scroll.width) ||
            ((x.scroll = l), (e = !0))),
          c(e);
      })),
      (this.container = l),
      (this.namespace = ".scrollbar_" + x.data.index++),
      (this.options = b.extend({}, o, window.jQueryScrollbarOptions || {})),
      (this.scrollTo = null),
      (this.scrollx = {}),
      (this.scrolly = {}),
      l.data(x.data.name, this),
      x.scrolls.add(this);
  }
  var o = {
    autoScrollSize: !0,
    autoUpdate: !0,
    debug: !(x.scrolls.remove = function (l) {
      for (; 0 <= b.inArray(l, this); ) this.splice(b.inArray(l, this), 1);
      return this;
    }),
    disableBodyScroll: !1,
    duration: 200,
    ignoreMobile: !1,
    ignoreOverlay: !1,
    isRtl: !1,
    scrollStep: 30,
    showArrows: !1,
    stepScrolling: !0,
    scrollx: null,
    scrolly: null,
    onDestroy: null,
    onFallback: null,
    onInit: null,
    onScroll: null,
    onUpdate: null,
  };
  l.prototype = {
    destroy: function () {
      var l, e;
      this.wrapper &&
        (this.container.removeData(x.data.name),
        x.scrolls.remove(this),
        (l = this.container.scrollLeft()),
        (e = this.container.scrollTop()),
        this.container
          .insertBefore(this.wrapper)
          .css({ height: "", margin: "", "max-height": "" })
          .removeClass(
            "scroll-content scroll-scrollx_visible scroll-scrolly_visible"
          )
          .off(this.namespace)
          .scrollLeft(l)
          .scrollTop(e),
        this.scrollx.scroll
          .removeClass("scroll-scrollx_visible")
          .find("div")
          .addBack()
          .off(this.namespace),
        this.scrolly.scroll
          .removeClass("scroll-scrolly_visible")
          .find("div")
          .addBack()
          .off(this.namespace),
        this.wrapper.remove(),
        b(document).add("body").off(this.namespace),
        b.isFunction(this.options.onDestroy) &&
          this.options.onDestroy.apply(this, [this.container]));
    },
    init: function (l) {
      var e,
        u = this,
        p = this.container,
        r = this.containerWrapper || p,
        f = this.namespace,
        v = b.extend(this.options, l || {}),
        m = { x: this.scrollx, y: this.scrolly },
        s = this.wrapper,
        o = {},
        t = { scrollLeft: p.scrollLeft(), scrollTop: p.scrollTop() };
      if (
        (x.mobile && v.ignoreMobile) ||
        (x.overlay && v.ignoreOverlay) ||
        (x.macosx && !x.webkit)
      )
        return b.isFunction(v.onFallback) && v.onFallback.apply(this, [p]), !1;
      s
        ? (((o = {
            height: "auto",
            "margin-bottom": -1 * x.scroll.height + "px",
            "max-height": "",
          })[v.isRtl ? "margin-left" : "margin-right"] =
            -1 * x.scroll.width + "px"),
          r.css(o))
        : ((this.wrapper = s =
            b("<div>")
              .addClass("scroll-wrapper")
              .addClass(p.attr("class"))
              .css(
                "position",
                "absolute" === p.css("position") ? "absolute" : "relative"
              )
              .insertBefore(p)
              .append(p)),
          v.isRtl && s.addClass("scroll--rtl"),
          p.is("textarea") &&
            ((this.containerWrapper = r = b("<div>").insertBefore(p).append(p)),
            s.addClass("scroll-textarea")),
          ((o = {
            height: "auto",
            "margin-bottom": -1 * x.scroll.height + "px",
            "max-height": "",
          })[v.isRtl ? "margin-left" : "margin-right"] =
            -1 * x.scroll.width + "px"),
          r.addClass("scroll-content").css(o),
          p.on("scroll" + f, function (l) {
            var e = p.scrollLeft(),
              s = p.scrollTop();
            if (v.isRtl)
              switch (!0) {
                case x.firefox:
                  e = Math.abs(e);
                case x.msedge || x.msie:
                  e = p[0].scrollWidth - p[0].clientWidth - e;
              }
            b.isFunction(v.onScroll) &&
              v.onScroll.call(
                u,
                {
                  maxScroll: m.y.maxScrollOffset,
                  scroll: s,
                  size: m.y.size,
                  visible: m.y.visible,
                },
                {
                  maxScroll: m.x.maxScrollOffset,
                  scroll: e,
                  size: m.x.size,
                  visible: m.x.visible,
                }
              ),
              m.x.isVisible && m.x.scroll.bar.css("left", e * m.x.kx + "px"),
              m.y.isVisible && m.y.scroll.bar.css("top", s * m.y.kx + "px");
          }),
          s.on("scroll" + f, function () {
            s.scrollTop(0).scrollLeft(0);
          }),
          v.disableBodyScroll &&
            ((e = function (l) {
              g(l)
                ? m.y.isVisible && m.y.mousewheel(l)
                : m.x.isVisible && m.x.mousewheel(l);
            }),
            s.on("MozMousePixelScroll" + f, e),
            s.on("mousewheel" + f, e),
            x.mobile &&
              s.on("touchstart" + f, function (l) {
                var e =
                    (l.originalEvent.touches && l.originalEvent.touches[0]) ||
                    l,
                  s = e.pageX,
                  o = e.pageY,
                  r = p.scrollLeft(),
                  t = p.scrollTop();
                b(document).on("touchmove" + f, function (l) {
                  var e =
                    (l.originalEvent.targetTouches &&
                      l.originalEvent.targetTouches[0]) ||
                    l;
                  p.scrollLeft(r + s - e.pageX),
                    p.scrollTop(t + o - e.pageY),
                    l.preventDefault();
                }),
                  b(document).on("touchend" + f, function () {
                    b(document).off(f);
                  });
              })),
          b.isFunction(v.onInit) && v.onInit.apply(this, [p])),
        b.each(m, function (r, t) {
          function i() {
            var l = p[c]();
            p[c](l + d),
              1 == a && h <= l + d && (l = p[c]()),
              -1 == a && l + d <= h && (l = p[c]()),
              p[c]() == l && n && n();
          }
          var n = null,
            a = 1,
            c = "x" === r ? "scrollLeft" : "scrollTop",
            d = v.scrollStep,
            h = 0;
          t.scroll ||
            ((t.scroll = u._getScroll(v["scroll" + r]).addClass("scroll-" + r)),
            v.showArrows && t.scroll.addClass("scroll-element_arrows_visible"),
            (t.mousewheel = function (l) {
              if (!t.isVisible || ("x" === r && g(l))) return !0;
              if ("y" === r && !g(l)) return m.x.mousewheel(l), !0;
              var e = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
                s = t.size - t.visible - t.offset;
              return (
                e ||
                  ("x" === r && l.originalEvent.deltaX
                    ? (e = 40 * l.originalEvent.deltaX)
                    : "y" === r &&
                      l.originalEvent.deltaY &&
                      (e = 40 * l.originalEvent.deltaY)),
                ((0 < e && h < s) || (e < 0 && 0 < h)) &&
                  ((h += e) < 0 && (h = 0),
                  s < h && (h = s),
                  (u.scrollTo = u.scrollTo || {}),
                  (u.scrollTo[c] = h),
                  setTimeout(function () {
                    u.scrollTo &&
                      (p.stop().animate(u.scrollTo, 240, "linear", function () {
                        h = p[c]();
                      }),
                      (u.scrollTo = null));
                  }, 1)),
                l.preventDefault(),
                !1
              );
            }),
            t.scroll
              .on("MozMousePixelScroll" + f, t.mousewheel)
              .on("mousewheel" + f, t.mousewheel)
              .on("mouseenter" + f, function () {
                h = p[c]();
              }),
            t.scroll
              .find(".scroll-arrow, .scroll-element_track")
              .on("mousedown" + f, function (l) {
                if (1 != l.which) return !0;
                a = 1;
                var e = {
                    eventOffset: l["x" === r ? "pageX" : "pageY"],
                    maxScrollValue: t.size - t.visible - t.offset,
                    scrollbarOffset:
                      t.scroll.bar.offset()["x" === r ? "left" : "top"],
                    scrollbarSize:
                      t.scroll.bar["x" === r ? "outerWidth" : "outerHeight"](),
                  },
                  s = 0,
                  o = 0;
                if (b(this).hasClass("scroll-arrow")) {
                  if (
                    ((a = b(this).hasClass("scroll-arrow_more") ? 1 : -1),
                    (d = v.scrollStep * a),
                    (h = 0 < a ? e.maxScrollValue : 0),
                    v.isRtl)
                  )
                    switch (!0) {
                      case x.firefox:
                        h = 0 < a ? 0 : -1 * e.maxScrollValue;
                        break;
                      case x.msie || x.msedge:
                    }
                } else (a = e.scrollbarOffset + e.scrollbarSize < e.eventOffset ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0), "x" === r && v.isRtl && (x.msie || x.msedge) && (a *= -1), (d = Math.round(0.75 * t.visible) * a), (h = e.eventOffset - e.scrollbarOffset - (v.stepScrolling ? (1 == a ? e.scrollbarSize : 0) : Math.round(e.scrollbarSize / 2))), (h = p[c]() + h / t.kx);
                return (
                  (u.scrollTo = u.scrollTo || {}),
                  (u.scrollTo[c] = v.stepScrolling ? p[c]() + d : h),
                  v.stepScrolling &&
                    ((n = function () {
                      (h = p[c]()),
                        clearInterval(o),
                        clearTimeout(s),
                        (o = s = 0);
                    }),
                    (s = setTimeout(function () {
                      o = setInterval(i, 40);
                    }, v.duration + 100))),
                  setTimeout(function () {
                    u.scrollTo &&
                      (p.animate(u.scrollTo, v.duration), (u.scrollTo = null));
                  }, 1),
                  u._handleMouseDown(n, l)
                );
              }),
            t.scroll.bar.on("mousedown" + f, function (l) {
              if (1 != l.which) return !0;
              var s = l["x" === r ? "pageX" : "pageY"],
                o = p[c]();
              return (
                t.scroll.addClass("scroll-draggable"),
                b(document).on("mousemove" + f, function (l) {
                  var e = parseInt(
                    (l["x" === r ? "pageX" : "pageY"] - s) / t.kx,
                    10
                  );
                  "x" === r && v.isRtl && (x.msie || x.msedge) && (e *= -1),
                    p[c](o + e);
                }),
                u._handleMouseDown(function () {
                  t.scroll.removeClass("scroll-draggable"), (h = p[c]());
                }, l)
              );
            }));
        }),
        b.each(m, function (l, e) {
          var s = "scroll-scroll" + l + "_visible",
            o = "x" == l ? m.y : m.x;
          e.scroll.removeClass(s), o.scroll.removeClass(s), r.removeClass(s);
        }),
        b.each(m, function (l, e) {
          b.extend(
            e,
            "x" == l
              ? {
                  offset: parseInt(p.css("left"), 10) || 0,
                  size: p.prop("scrollWidth"),
                  visible: s.width(),
                }
              : {
                  offset: parseInt(p.css("top"), 10) || 0,
                  size: p.prop("scrollHeight"),
                  visible: s.height(),
                }
          );
        }),
        this._updateScroll("x", this.scrollx),
        this._updateScroll("y", this.scrolly),
        b.isFunction(v.onUpdate) && v.onUpdate.apply(this, [p]),
        b.each(m, function (l, e) {
          var s = "x" === l ? "left" : "top",
            o = "x" === l ? "outerWidth" : "outerHeight",
            r = "x" === l ? "width" : "height",
            t = parseInt(p.css(s), 10) || 0,
            i = e.size,
            n = e.visible + t,
            a = e.scroll.size[o]() + (parseInt(e.scroll.size.css(s), 10) || 0);
          v.autoScrollSize &&
            ((e.scrollbarSize = parseInt((a * n) / i, 10)),
            e.scroll.bar.css(r, e.scrollbarSize + "px")),
            (e.scrollbarSize = e.scroll.bar[o]()),
            (e.kx = (a - e.scrollbarSize) / (i - n) || 1),
            (e.maxScrollOffset = i - n);
        }),
        p.scrollLeft(t.scrollLeft).scrollTop(t.scrollTop).trigger("scroll");
    },
    _getScroll: function (l) {
      var e = {
        advanced: [
          '<div class="scroll-element">',
          '<div class="scroll-element_corner"></div>',
          '<div class="scroll-arrow scroll-arrow_less"></div>',
          '<div class="scroll-arrow scroll-arrow_more"></div>',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_inner-wrapper">',
          '<div class="scroll-element_inner scroll-element_track">',
          '<div class="scroll-element_inner-bottom"></div>',
          "</div>",
          "</div>",
          '<div class="scroll-bar">',
          '<div class="scroll-bar_body">',
          '<div class="scroll-bar_body-inner"></div>',
          "</div>",
          '<div class="scroll-bar_bottom"></div>',
          '<div class="scroll-bar_center"></div>',
          "</div>",
          "</div>",
          "</div>",
        ].join(""),
        simple: [
          '<div class="scroll-element">',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_track"></div>',
          '<div class="scroll-bar"></div>',
          "</div>",
          "</div>",
        ].join(""),
      };
      return (
        e[l] && (l = e[l]),
        (l =
          "string" == typeof (l = l || e.simple)
            ? b(l).appendTo(this.wrapper)
            : b(l)),
        b.extend(l, {
          bar: l.find(".scroll-bar"),
          size: l.find(".scroll-element_size"),
          track: l.find(".scroll-element_track"),
        }),
        l
      );
    },
    _handleMouseDown: function (l, e) {
      var s = this.namespace;
      return (
        b(document).on("blur" + s, function () {
          b(document).add("body").off(s), l && l();
        }),
        b(document).on("dragstart" + s, function (l) {
          return l.preventDefault(), !1;
        }),
        b(document).on("mouseup" + s, function () {
          b(document).add("body").off(s), l && l();
        }),
        b("body").on("selectstart" + s, function (l) {
          return l.preventDefault(), !1;
        }),
        e && e.preventDefault(),
        !1
      );
    },
    _updateScroll: function (l, e) {
      var s = this.container,
        o = this.containerWrapper || s,
        r = "scroll-scroll" + l + "_visible",
        t = "x" === l ? this.scrolly : this.scrollx,
        i = parseInt(this.container.css("x" === l ? "left" : "top"), 10) || 0,
        n = this.wrapper,
        a = e.size,
        c = e.visible + i;
      (e.isVisible = 1 < a - c),
        e.isVisible
          ? (e.scroll.addClass(r), t.scroll.addClass(r), o.addClass(r))
          : (e.scroll.removeClass(r),
            t.scroll.removeClass(r),
            o.removeClass(r)),
        "y" === l &&
          (s.is("textarea") || a < c
            ? o.css({
                height: c + x.scroll.height + "px",
                "max-height": "none",
              })
            : o.css({ "max-height": c + x.scroll.height + "px" })),
        (e.size == s.prop("scrollWidth") &&
          t.size == s.prop("scrollHeight") &&
          e.visible == n.width() &&
          t.visible == n.height() &&
          e.offset == (parseInt(s.css("left"), 10) || 0) &&
          t.offset == (parseInt(s.css("top"), 10) || 0)) ||
          (b.extend(this.scrollx, {
            offset: parseInt(s.css("left"), 10) || 0,
            size: s.prop("scrollWidth"),
            visible: n.width(),
          }),
          b.extend(this.scrolly, {
            offset: parseInt(s.css("top"), 10) || 0,
            size: this.container.prop("scrollHeight"),
            visible: n.height(),
          }),
          this._updateScroll("x" === l ? "y" : "x", t));
    },
  };
  var r = l;
  (b.fn.scrollbar = function (s, o) {
    return (
      "string" != typeof s && ((o = s), (s = "init")),
      void 0 === o && (o = []),
      b.isArray(o) || (o = [o]),
      this.not("body, .scroll-wrapper").each(function () {
        var l = b(this),
          e = l.data(x.data.name);
        (!e && "init" !== s) || ((e = e || new r(l))[s] && e[s].apply(e, o));
      }),
      this
    );
  }),
    (b.fn.scrollbar.options = o);
  var a,
    t,
    c =
      ((a = 0),
      function (l) {
        for (var e, s, o, r, t, i, n = 0; n < x.scrolls.length; n++)
          (e = (o = x.scrolls[n]).container),
            (s = o.options),
            (r = o.wrapper),
            (t = o.scrollx),
            (i = o.scrolly),
            (l ||
              (s.autoUpdate &&
                r &&
                r.is(":visible") &&
                (e.prop("scrollWidth") != t.size ||
                  e.prop("scrollHeight") != i.size ||
                  r.width() != t.visible ||
                  r.height() != i.visible))) &&
              (o.init(),
              s.debug &&
                (window.console &&
                  console.log(
                    {
                      scrollHeight:
                        e.prop("scrollHeight") + ":" + o.scrolly.size,
                      scrollWidth: e.prop("scrollWidth") + ":" + o.scrollx.size,
                      visibleHeight: r.height() + ":" + o.scrolly.visible,
                      visibleWidth: r.width() + ":" + o.scrollx.visible,
                    },
                    !0
                  ),
                0));
        clearTimeout(a), (a = setTimeout(c, 300));
      });
  window.angular &&
    (t = window.angular)
      .module("jQueryScrollbar", [])
      .provider("jQueryScrollbar", function () {
        var e = o;
        return {
          setOptions: function (l) {
            t.extend(e, l);
          },
          $get: function () {
            return { options: t.copy(e) };
          },
        };
      })
      .directive("jqueryScrollbar", [
        "jQueryScrollbar",
        "$parse",
        function (r, t) {
          return {
            restrict: "AC",
            link: function (l, e, s) {
              var o = t(s.jqueryScrollbar)(l);
              e.scrollbar(o || r.options).on("$destroy", function () {
                e.scrollbar("destroy");
              });
            },
          };
        },
      ]);
});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (s) {
  function n(e, t, o) {
    var n,
      i,
      l,
      a = t.hash.slice(1),
      r = document.getElementById(a) || document.getElementsByName(a)[0];
    r &&
      (e && e.preventDefault(),
      (n = s(o.target)),
      (o.lock && n.is(":animated")) ||
        (o.onBefore && !1 === o.onBefore(e, r, n)) ||
        (o.stop && n.stop(!0),
        o.hash &&
          ((i = r.id === a ? "id" : "name"),
          (l = s("<a> </a>")
            .attr(i, a)
            .css({
              position: "absolute",
              top: s(window).scrollTop(),
              left: s(window).scrollLeft(),
            })),
          (r[i] = ""),
          s("body").prepend(l),
          (location.hash = t.hash),
          l.remove(),
          (r[i] = a)),
        n.scrollTo(r, o).trigger("notify.serialScroll", [r])));
  }
  var e = location.href.replace(/#.*/, ""),
    i = (s.localScroll = function (e) {
      s("body").localScroll(e);
    });
  return (
    (i.defaults = {
      duration: 1e3,
      axis: "y",
      event: "click",
      stop: !0,
      target: window,
      autoscroll: !0,
    }),
    (s.fn.localScroll = function (t) {
      function o() {
        return (
          !!this.href &&
          !!this.hash &&
          this.href.replace(this.hash, "") === e &&
          (!t.filter || s(this).is(t.filter))
        );
      }
      return (
        (t = s.extend({}, i.defaults, t)).autoscroll &&
          t.hash &&
          location.hash &&
          (t.target && window.scrollTo(0, 0), n(0, location, t)),
        t.lazy
          ? this.on(t.event, "a,area", function (e) {
              o.call(this) && n(e, this, t);
            })
          : this.find("a,area")
              .filter(o)
              .bind(t.event, function (e) {
                // n(e, this, t);
              })
              .end()
              .end()
      );
    }),
    (i.hash = function () {}),
    i
  );
});
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "undefined" != typeof module && module.exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (s) {
  "use strict";
  function v(e) {
    return (
      !e.nodeName ||
      -1 !==
        s.inArray(e.nodeName.toLowerCase(), [
          "iframe",
          "#document",
          "html",
          "body",
        ])
    );
  }
  function t(e) {
    return s.isFunction(e) || s.isPlainObject(e) ? e : { top: e, left: e };
  }
  var w = (s.scrollTo = function (e, t, o) {
    return s(window).scrollTo(e, t, o);
  });
  return (
    (w.defaults = { axis: "xy", duration: 0, limit: !0 }),
    (s.fn.scrollTo = function (e, o, h) {
      "object" == typeof o && ((h = o), (o = 0)),
        "function" == typeof h && (h = { onAfter: h }),
        "max" === e && (e = 9e9),
        (h = s.extend({}, w.defaults, h)),
        (o = o || h.duration);
      var x = h.queue && 1 < h.axis.length;
      return (
        x && (o /= 2),
        (h.offset = t(h.offset)),
        (h.over = t(h.over)),
        this.each(function () {
          function a(e) {
            var t = s.extend({}, h, {
              queue: !0,
              duration: o,
              complete:
                e &&
                function () {
                  e.call(c, d, h);
                },
            });
            l.animate(m, t);
          }
          if (null !== e) {
            var u,
              f = v(this),
              c = f ? this.contentWindow || window : this,
              l = s(c),
              d = e,
              m = {};
            switch (typeof d) {
              case "number":
              case "string":
                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                  d = t(d);
                  break;
                }
                d = f ? s(d) : s(d, c);
              case "object":
                if (0 === d.length) return;
                (d.is || d.style) && (u = (d = s(d)).offset());
            }
            var p = (s.isFunction(h.offset) && h.offset(c, d)) || h.offset;
            s.each(h.axis.split(""), function (e, t) {
              var o = "x" === t ? "Left" : "Top",
                n = o.toLowerCase(),
                r = "scroll" + o,
                i = l[r](),
                s = w.max(c, t);
              u
                ? ((m[r] = u[n] + (f ? 0 : i - l.offset()[n])),
                  h.margin &&
                    ((m[r] -= parseInt(d.css("margin" + o), 10) || 0),
                    (m[r] -= parseInt(d.css("border" + o + "Width"), 10) || 0)),
                  (m[r] += p[n] || 0),
                  h.over[n] &&
                    (m[r] += d["x" === t ? "width" : "height"]() * h.over[n]))
                : ((o = d[n]),
                  (m[r] =
                    o.slice && "%" === o.slice(-1)
                      ? (parseFloat(o) / 100) * s
                      : o)),
                h.limit &&
                  /^\d+$/.test(m[r]) &&
                  (m[r] = m[r] <= 0 ? 0 : Math.min(m[r], s)),
                !e &&
                  1 < h.axis.length &&
                  (i === m[r] ? (m = {}) : x && (a(h.onAfterFirst), (m = {})));
            }),
              a(h.onAfter);
          }
        })
      );
    }),
    (w.max = function (e, t) {
      var o = "scroll" + (n = "x" === t ? "Width" : "Height");
      if (!v(e)) return e[o] - s(e)[n.toLowerCase()]();
      var n = "client" + n,
        r = (i = e.ownerDocument || e.document).documentElement,
        i = i.body;
      return Math.max(r[o], i[o]) - Math.min(r[n], i[n]);
    }),
    (s.Tween.propHooks.scrollLeft = s.Tween.propHooks.scrollTop =
      {
        get: function (e) {
          return s(e.elem)[e.prop]();
        },
        set: function (e) {
          var t = this.get(e);
          if (e.options.interrupt && e._last && e._last !== t)
            return s(e.elem).stop();
          var o = Math.round(e.now);
          t !== o && (s(e.elem)[e.prop](o), (e._last = this.get(e)));
        },
      }),
    w
  );
});
!(function (i) {
  i.fn.UItoTop = function (o) {
    var n = i.extend(
        {
          text: "To Top",
          min: 200,
          inDelay: 600,
          outDelay: 400,
          containerID: "toTop",
          containerHoverID: "toTopHover",
          scrollSpeed: 1200,
          easingType: "linear",
        },
        o
      ),
      e = "#" + n.containerID,
      t = "#" + n.containerHoverID;
    i("body").append(
      '<a href="#" id="' + n.containerID + '">' + n.text + "</a>"
    ),
      i(e)
        .hide()
        .on("click.UItoTop", function () {
          return (
            i("html, body").animate(
              { scrollTop: 0 },
              n.scrollSpeed,
              n.easingType
            ),
            i("#" + n.containerHoverID, this)
              .stop()
              .animate({ opacity: 0 }, n.inDelay, n.easingType),
            !1
          );
        })
        .prepend('<span id="' + n.containerHoverID + '"></span>')
        .hover(
          function () {
            i(t, this).stop().animate({ opacity: 1 }, 600, "linear");
          },
          function () {
            i(t, this).stop().animate({ opacity: 0 }, 700, "linear");
          }
        ),
      i(window).scroll(function () {
        var o = i(window).scrollTop();
        void 0 === document.body.style.maxHeight &&
          i(e).css({ position: "absolute", top: o + i(window).height() - 50 }),
          o > n.min ? i(e).fadeIn(n.inDelay) : i(e).fadeOut(n.Outdelay);
      });
  };
})(jQuery);
!(function (l) {
  var c = l(window),
    f = c.height();
  c.resize(function () {
    f = c.height();
  }),
    (l.fn.parallax = function (i, e, n) {
      var r,
        u,
        h = l(this);
      function t() {
        var o = c.scrollTop();
        h.each(function () {
          var n = l(this),
            t = n.offset().top;
          t + r(n) < o ||
            o + f < t ||
            h.css(
              "backgroundPosition",
              i + " " + Math.round((u - o) * e) + "px"
            );
        });
      }
      h.each(function () {
        u = h.offset().top;
      }),
        (r = n
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        (arguments.length < 1 || null === i) && (i = "50%"),
        (arguments.length < 2 || null === e) && (e = 0.1),
        (arguments.length < 3 || null === n) && (n = !0),
        c.bind("scroll", t).resize(t),
        t();
    });
})(jQuery);
/*!
 * Isotope PACKAGED v3.0.3
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(h, n, d) {
    (d = d || e || t.jQuery) &&
      (n.prototype.option ||
        (n.prototype.option = function (t) {
          d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t));
        }),
      (d.fn[h] = function (t) {
        if ("string" != typeof t)
          return (
            (o = t),
            this.each(function (t, e) {
              var i = d.data(e, h);
              i
                ? (i.option(o), i._init())
                : ((i = new n(e, o)), d.data(e, h, i));
            }),
            this
          );
        var e,
          s,
          r,
          a,
          u,
          o,
          i = l.call(arguments, 1);
        return (
          (r = i),
          (u = "$()." + h + '("' + (s = t) + '")'),
          (e = this).each(function (t, e) {
            var i,
              o,
              n = d.data(e, h);
            n
              ? (i = n[s]) && "_" != s.charAt(0)
                ? ((o = i.apply(n, r)), (a = void 0 === a ? o : a))
                : m(u + " is not a valid method")
              : m(h + " not initialized. Cannot call methods, i.e. " + u);
          }),
          void 0 !== a ? a : e
        );
      }),
      o(d));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var l = Array.prototype.slice,
    n = t.console,
    m =
      void 0 === n
        ? function () {}
        : function (t) {
            n.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return -1 == o.indexOf(e) && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return -1 != o && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = 0,
            n = i[o];
          e = e || [];
          for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
            var r = s && s[n];
            r && (this.off(t, n), delete s[n]),
              n.apply(this, e),
              (n = i[(o += r ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function I(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function z(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          i(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function S(t) {
      if (
        (L ||
          ((L = !0),
          ((g = document.createElement("div")).style.width = "200px"),
          (g.style.padding = "1px 2px 3px 4px"),
          (g.style.borderStyle = "solid"),
          (g.style.borderWidth = "1px 2px 3px 4px"),
          (g.style.boxSizing = "border-box"),
          (v = document.body || document.documentElement).appendChild(g),
          (_ = z(g)),
          (S.isBoxSizeOuter = x = 200 == I(_.width)),
          v.removeChild(g)),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = z(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < E;
              e++
            ) {
              t[b[e]] = 0;
            }
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var o = (i.isBorderBox = "border-box" == e.boxSizing), n = 0;
          n < E;
          n++
        ) {
          var s = b[n],
            r = e[s],
            a = parseFloat(r);
          i[s] = isNaN(a) ? 0 : a;
        }
        var u = i.paddingLeft + i.paddingRight,
          h = i.paddingTop + i.paddingBottom,
          d = i.marginLeft + i.marginRight,
          l = i.marginTop + i.marginBottom,
          m = i.borderLeftWidth + i.borderRightWidth,
          c = i.borderTopWidth + i.borderBottomWidth,
          f = o && x,
          p = I(e.width);
        !1 !== p && (i.width = p + (f ? 0 : u + m));
        var y = I(e.height);
        return (
          !1 !== y && (i.height = y + (f ? 0 : h + c)),
          (i.innerWidth = i.width - (u + m)),
          (i.innerHeight = i.height - (h + c)),
          (i.outerWidth = i.width + d),
          (i.outerHeight = i.height + l),
          i
        );
      }
      var g, v, _;
    }
    var x,
      i =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      b = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      E = b.length,
      L = !1;
    return S;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i] + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (h, s) {
    var d = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function (t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e;
        },
        removeFrom: function (t, e) {
          var i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        },
        getParent: function (t, e) {
          for (; t != document.body; )
            if (((t = t.parentNode), s(t, e))) return t;
        },
        getQueryElement: function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function (t, o) {
          t = d.makeArray(t);
          var n = [];
          return (
            t.forEach(function (t) {
              if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                s(t, o) && n.push(t);
                for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++)
                  n.push(e[i]);
              }
            }),
            n
          );
        },
        debounceMethod: function (t, e, o) {
          var n = t.prototype[e],
            s = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments,
              i = this;
            this[s] = setTimeout(function () {
              n.apply(i, e), delete i[s];
            }, o || 100);
          };
        },
        docReady: function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e
            ? setTimeout(t)
            : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        },
      },
      l = h.console;
    return (
      (d.htmlInit = function (a, u) {
        d.docReady(function () {
          var t = d.toDashed(u),
            n = "data-" + t,
            e = document.querySelectorAll("[" + n + "]"),
            i = document.querySelectorAll(".js-" + t),
            o = d.makeArray(e).concat(d.makeArray(i)),
            s = n + "-options",
            r = h.jQuery;
          o.forEach(function (e) {
            var t,
              i = e.getAttribute(n) || e.getAttribute(s);
            try {
              t = i && JSON.parse(i);
            } catch (t) {
              return void (
                l &&
                l.error("Error parsing " + n + " on " + e.className + ": " + t)
              );
            }
            var o = new a(e, t);
            r && r.data(e, u, o);
          });
        });
      }),
      d
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var o = document.documentElement.style,
      n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
      s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[n],
      a = {
        transform: s,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay",
      },
      u = (i.prototype = Object.create(t.prototype));
    (u.constructor = i),
      (u._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.getSize = function () {
        this.size = e(this.element);
      }),
      (u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[a[i] || i] = t[i];
        }
      }),
      (u.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * s.width
              : parseInt(o, 10),
          a =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * s.height
              : parseInt(n, 10),
          r = isNaN(r) ? 0 : r,
          a = isNaN(a) ? 0 : a;
        (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (u.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (u._transitionTo = function (t, e) {
        this.getPosition();
        var i,
          o,
          n,
          s = this.position.x,
          r = this.position.y,
          a = parseInt(t, 10),
          u = parseInt(e, 10),
          h = a === this.position.x && u === this.position.y;
        this.setPosition(t, e),
          !h || this.isTransitioning
            ? ((i = t - s),
              (o = e - r),
              ((n = {}).transform = this.getTranslate(i, o)),
              this.transition({
                to: n,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              }))
            : this.layoutPosition();
      }),
      (u.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (u.moveTo = u._transitionTo),
      (u.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (u._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (u.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          t.from && (this.css(t.from), this.element.offsetHeight),
            this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var h =
      "opacity," +
      s.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (u.enableTransition = function () {
      var t;
      this.isTransitioning ||
        ((t =
          "number" == typeof (t = this.layout.options.transitionDuration)
            ? t + "ms"
            : t),
        this.css({
          transitionProperty: h,
          transitionDuration: t,
          transitionDelay: this.staggerDelay || 0,
        }),
        this.element.addEventListener(r, this, !1));
    }),
      (u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (u.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var d = { "-webkit-transform": "transform" };
    (u.ontransitionend = function (t) {
      var e, i;
      t.target === this.element &&
        ((e = this._transn),
        (i = d[t.propertyName] || t.propertyName),
        delete e.ingProperties[i],
        (function (t) {
          for (var e in t) return;
          return 1;
        })(e.ingProperties) && this.disableTransition(),
        i in e.clean &&
          ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
        i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
        this.emitEvent("transitionEnd", [this]));
    }),
      (u.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(r, this, !1),
          (this.isTransitioning = !1);
      }),
      (u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var l = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (u.removeTransitionStyles = function () {
        this.css(l);
      }),
      (u.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (u.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (u.remove = function () {
        return n && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (u.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (u.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (u.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      i
    );
  }),
  (function (n, s) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (t, e, i, o) {
            return s(n, t, e, i, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (n.Outlayer = s(
          n,
          n.EvEmitter,
          n.getSize,
          n.fizzyUIUtils,
          n.Outlayer.Item
        ));
  })(window, function (t, e, n, s, o) {
    "use strict";
    function r(t, e) {
      var i,
        o = s.getQueryElement(t);
      o
        ? ((this.element = o),
          h && (this.$element = h(this.element)),
          (this.options = s.extend({}, this.constructor.defaults)),
          this.option(e),
          (i = ++d),
          (this.element.outlayerGUID = i),
          (l[i] = this)._create(),
          this._getOption("initLayout") && this.layout())
        : u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (o || t)
          );
    }
    function a(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e);
    }
    function i() {}
    var u = t.console,
      h = t.jQuery,
      d = 0,
      l = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var m = r.prototype;
    s.extend(m, e.prototype),
      (m.option = function (t) {
        s.extend(this.options, t);
      }),
      (m._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (m._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          s.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (m.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (m._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = new i(e[n], this);
          o.push(s);
        }
        return o;
      }),
      (m._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector);
      }),
      (m.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (m.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (m._init = m.layout),
      (m._resetLayout = function () {
        this.getSize();
      }),
      (m.getSize = function () {
        this.size = n(this.element);
      }),
      (m._getMeasurement = function (t, e) {
        var i,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (i = this.element.querySelector(o))
              : o instanceof HTMLElement && (i = o),
            (this[t] = i ? n(i)[e] : o))
          : (this[t] = 0);
      }),
      (m.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (m._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (m._layoutItems = function (t, i) {
        var o;
        this._emitCompleteOnItems("layout", t),
          t &&
            t.length &&
            ((o = []),
            t.forEach(function (t) {
              var e = this._getItemLayoutPosition(t);
              (e.item = t), (e.isInstant = i || t.isLayoutInstant), o.push(e);
            }, this),
            this._processLayoutQueue(o));
      }),
      (m._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (m._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (m.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
              return i.length ? parseFloat(i) * (c[o] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (m._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (m._postLayout = function () {
        this.resizeContainer();
      }),
      (m.resizeContainer = function () {
        var t;
        !this._getOption("resizeContainer") ||
          ((t = this._getContainerSize()) &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1)));
      }),
      (m._getContainerSize = i),
      (m._setContainerMeasure = function (t, e) {
        var i;
        void 0 !== t &&
          ((i = this.size).isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
          (t = Math.max(t, 0)),
          (this.element.style[e ? "width" : "height"] = t + "px"));
      }),
      (m._emitCompleteOnItems = function (e, t) {
        function i() {
          s.dispatchEvent(e + "Complete", null, [t]);
        }
        function o() {
          ++n == r && i();
        }
        var n,
          s = this,
          r = t.length;
        t && r
          ? ((n = 0),
            t.forEach(function (t) {
              t.once(e, o);
            }))
          : i();
      }),
      (m.dispatchEvent = function (t, e, i) {
        var o,
          n = e ? [e].concat(i) : i;
        this.emitEvent(t, n),
          h &&
            ((this.$element = this.$element || h(this.element)),
            e
              ? (((o = h.Event(e)).type = t), this.$element.trigger(o, i))
              : this.$element.trigger(t, i));
      }),
      (m.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (m.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (m.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (m.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (m._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            s.makeArray(t)
          );
      }),
      (m._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (m._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (m._manageStamp = i),
      (m._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          i = this._boundingRect,
          o = n(t);
        return {
          left: e.left - i.left - o.marginLeft,
          top: e.top - i.top - o.marginTop,
          right: i.right - e.right - o.marginRight,
          bottom: i.bottom - e.bottom - o.marginBottom,
        };
      }),
      (m.handleEvent = s.handleEvent),
      (m.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (m.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (m.onresize = function () {
        this.resize();
      }),
      s.debounceMethod(r, "onresize", 100),
      (m.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (m.needsResizeLayout = function () {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (m.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (m.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (m.prepended = function (t) {
        var e,
          i = this._itemize(t);
        i.length &&
          ((e = this.items.slice(0)),
          (this.items = i.concat(e)),
          this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(i, !0),
          this.reveal(i),
          this.layoutItems(e));
      }),
      (m.reveal = function (t) {
        var i;
        this._emitCompleteOnItems("reveal", t),
          t &&
            t.length &&
            ((i = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * i), t.reveal();
            }));
      }),
      (m.hide = function (t) {
        var i;
        this._emitCompleteOnItems("hide", t),
          t &&
            t.length &&
            ((i = this.updateStagger()),
            t.forEach(function (t, e) {
              t.stagger(e * i), t.hide();
            }));
      }),
      (m.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (m.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (m.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (m.getItems = function (t) {
        t = s.makeArray(t);
        var i = [];
        return (
          t.forEach(function (t) {
            var e = this.getItem(t);
            e && i.push(e);
          }, this),
          i
        );
      }),
      (m.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), s.removeFrom(this.items, t);
            }, this);
      }),
      (m.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && l[e];
      }),
      (r.create = function (t, e) {
        var i = a(r);
        return (
          (i.defaults = s.extend({}, r.defaults)),
          s.extend(i.defaults, e),
          (i.compatOptions = s.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = a(o)),
          s.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var c = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (e, i) {
    "use strict";
    function o(t) {
      (this.isotope = t) &&
        ((this.options = t.options[this.namespace]),
        (this.element = t.element),
        (this.items = t.filteredItems),
        (this.size = t.size));
    }
    var n = o.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        n[t] = function () {
          return i.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return (
          this.isotope.size &&
          t &&
          t.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i,
          o = t + e,
          n = "outer" + e;
        this._getMeasurement(o, n),
          this[o] ||
            ((i = this.getFirstItemSize()),
            (this[o] = (i && i[n]) || this.isotope.size["inner" + e]));
      }),
      (n.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (o.modes = {}),
      (o.create = function (t, e) {
        function i() {
          o.apply(this, arguments);
        }
        return (
          ((i.prototype = Object.create(n)).constructor = i),
          e && (i.options = e),
          (o.modes[(i.prototype.namespace = t)] = i)
        );
      }),
      o
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, h) {
    var e = t.create("masonry");
    return (
      (e.compatOptions.fitWidth = "isFitWidth"),
      (e.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (e.prototype.measureColumns = function () {
        var t, e;
        this.getContainerWidth(),
          this.columnWidth ||
            ((e = (t = this.items[0]) && t.element),
            (this.columnWidth = (e && h(e).outerWidth) || this.containerWidth));
        var i = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          n = o / i,
          s = i - (o % i),
          n = Math[s && s < 1 ? "round" : "floor"](n);
        this.cols = Math.max(n, 1);
      }),
      (e.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          e = h(t);
        this.containerWidth = e && e.innerWidth;
      }),
      (e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        for (
          var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](
              t.size.outerWidth / this.columnWidth
            ),
            i = Math.min(i, this.cols),
            o = this._getColGroup(i),
            n = Math.min.apply(Math, o),
            s = o.indexOf(n),
            r = { x: this.columnWidth * s, y: n },
            a = n + t.size.outerHeight,
            u = this.cols + 1 - o.length,
            h = 0;
          h < u;
          h++
        )
          this.colYs[s + h] = a;
        return r;
      }),
      (e.prototype._getColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
          var n = this.colYs.slice(o, o + t);
          e[o] = Math.max.apply(Math, n);
        }
        return e;
      }),
      (e.prototype._manageStamp = function (t) {
        var e = h(t),
          i = this._getElementOffset(t),
          o = this._getOption("originLeft") ? i.left : i.right,
          n = o + e.outerWidth,
          s = Math.floor(o / this.columnWidth),
          s = Math.max(0, s),
          r = Math.floor(n / this.columnWidth);
        (r -= n % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
        for (
          var a =
              (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight,
            u = s;
          u <= r;
          u++
        )
          this.colYs[u] = Math.max(a, this.colYs[u]);
      }),
      (e.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (e.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (e.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (r, a) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (t, e, i, o, n, s) {
            return a(r, t, 0, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          r,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope/js/item"),
          require("isotope/js/layout-mode"),
          require("isotope/js/layout-modes/masonry"),
          require("isotope/js/layout-modes/fit-rows"),
          require("isotope/js/layout-modes/vertical")
        ))
      : (r.Isotope = a(
          r,
          r.Outlayer,
          r.getSize,
          r.matchesSelector,
          r.fizzyUIUtils,
          r.Isotope.Item,
          r.Isotope.LayoutMode
        ));
  })(window, function (t, i, e, o, s, n, r) {
    var a = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = i.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = n), (d.LayoutMode = r);
    var u = d.prototype;
    (u._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      i.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      r.modes))
        this._initLayoutMode(t);
    }),
      (u.reloadItems = function () {
        (this.itemGUID = 0), i.prototype.reloadItems.call(this);
      }),
      (u._itemize = function () {
        for (
          var t = i.prototype._itemize.apply(this, arguments), e = 0;
          e < t.length;
          e++
        ) {
          t[e].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (u._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? s.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (u.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (u._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (u.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (u._init = u.arrange),
      (u._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (u._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e);
      }),
      (u._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (u._filter = function (t) {
        for (
          var e = (e = this.options.filter) || "*",
            i = [],
            o = [],
            n = [],
            s = this._getFilterTest(e),
            r = 0;
          r < t.length;
          r++
        ) {
          var a,
            u = t[r];
          u.isIgnored ||
            ((a = s(u)) && i.push(u),
            a && u.isHidden ? o.push(u) : a || u.isHidden || n.push(u));
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (u._getFilterTest = function (e) {
        return a && this.options.isJQueryFiltering
          ? function (t) {
              return a(t.element).is(e);
            }
          : "function" == typeof e
          ? function (t) {
              return e(t.element);
            }
          : function (t) {
              return o(t.element, e);
            };
      }),
      (u.updateSortData = function (t) {
        var e = t ? ((t = s.makeArray(t)), this.getItems(t)) : this.items;
        this._getSorters(), this._updateItemsSortData(e);
      }),
      (u._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = l(i);
        }
      }),
      (u._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var l = function (t) {
      if ("string" != typeof t) return t;
      var e,
        i,
        o = h(t).split(" "),
        n = o[0],
        s = n.match(/^\[(.+)\]$/),
        r = s && s[1],
        a =
          ((i = n),
          (e = r)
            ? function (t) {
                return t.getAttribute(e);
              }
            : function (t) {
                var e = t.querySelector(i);
                return e && e.textContent;
              }),
        u = d.sortDataParsers[o[1]];
      return u
        ? function (t) {
            return t && u(a(t));
          }
        : function (t) {
            return t && a(t);
          };
    };
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (u._sort = function () {
        var t, e, r, a;
        this.options.sortBy &&
          ((t = s.makeArray(this.options.sortBy)),
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory)),
          (r = this.sortHistory),
          (a = this.options.sortAscending),
          (e = function (t, e) {
            for (var i = 0; i < r.length; i++) {
              var o = r[i],
                n = t.sortData[o],
                s = e.sortData[o];
              if (s < n || n < s)
                return (
                  (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
                );
            }
            return 0;
          }),
          this.filteredItems.sort(e));
      }),
      (u._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (u._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (u._resetLayout = function () {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (u._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (u._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (u._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (u.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (u.appended = function (t) {
        var e,
          i = this.addItems(t);
        i.length &&
          ((e = this._filterRevealAdded(i)),
          (this.filteredItems = this.filteredItems.concat(e)));
      }),
      (u.prepended = function (t) {
        var e,
          i = this._itemize(t);
        i.length &&
          (this._resetLayout(),
          this._manageStamps(),
          (e = this._filterRevealAdded(i)),
          this.layoutItems(this.filteredItems),
          (this.filteredItems = e.concat(this.filteredItems)),
          (this.items = i.concat(this.items)));
      }),
      (u._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (u.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          for (var i, o = e.length, n = 0; n < o; n++)
            (i = e[n]), this.element.appendChild(i.element);
          var s = this._filter(e).matches;
          for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
          for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
          this.reveal(s);
        }
      });
    var m = u.remove;
    return (
      (u.remove = function (t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        m.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var n = e[o];
          s.removeFrom(this.filteredItems, n);
        }
      }),
      (u.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (u._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (u.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */ !(function (b) {
  var a = !0;
  (b.flexslider = function (p, e) {
    var m = b(p);
    m.vars = b.extend({}, b.flexslider.defaults, e);
    var t,
      d = m.vars.namespace,
      f =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      u =
        ("ontouchstart" in window ||
          f ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        m.vars.touch,
      o = "click touchend MSPointerUp keyup",
      l = "",
      g = "vertical" === m.vars.direction,
      h = m.vars.reverse,
      S = 0 < m.vars.itemWidth,
      x = "fade" === m.vars.animation,
      v = "" !== m.vars.asNavFor,
      y = {};
    b.data(p, "flexslider", m),
      (y = {
        init: function () {
          (m.animating = !1),
            (m.currentSlide = parseInt(
              m.vars.startAt ? m.vars.startAt : 0,
              10
            )),
            isNaN(m.currentSlide) && (m.currentSlide = 0),
            (m.animatingTo = m.currentSlide),
            (m.atEnd = 0 === m.currentSlide || m.currentSlide === m.last),
            (m.containerSelector = m.vars.selector.substr(
              0,
              m.vars.selector.search(" ")
            )),
            (m.slides = b(m.vars.selector, m)),
            (m.container = b(m.containerSelector, m)),
            (m.count = m.slides.length),
            (m.syncExists = 0 < b(m.vars.sync).length),
            "slide" === m.vars.animation && (m.vars.animation = "swing"),
            (m.prop = g ? "top" : "marginLeft"),
            (m.args = {}),
            (m.manualPause = !1),
            (m.stopped = !1),
            (m.started = !1),
            (m.startTimeout = null),
            (m.transitions =
              !m.vars.video &&
              !x &&
              m.vars.useCSS &&
              (function () {
                var e = document.createElement("div"),
                  t = [
                    "perspectiveProperty",
                    "WebkitPerspective",
                    "MozPerspective",
                    "OPerspective",
                    "msPerspective",
                  ];
                for (var a in t)
                  if (void 0 !== e.style[t[a]])
                    return (
                      (m.pfx = t[a].replace("Perspective", "").toLowerCase()),
                      (m.prop = "-" + m.pfx + "-transform"),
                      !0
                    );
                return !1;
              })()),
            (m.ensureAnimationEnd = "") !== m.vars.controlsContainer &&
              (m.controlsContainer =
                0 < b(m.vars.controlsContainer).length &&
                b(m.vars.controlsContainer)),
            "" !== m.vars.manualControls &&
              (m.manualControls =
                0 < b(m.vars.manualControls).length &&
                b(m.vars.manualControls)),
            "" !== m.vars.customDirectionNav &&
              (m.customDirectionNav =
                2 === b(m.vars.customDirectionNav).length &&
                b(m.vars.customDirectionNav)),
            m.vars.randomize &&
              (m.slides.sort(function () {
                return Math.round(Math.random()) - 0.5;
              }),
              m.container.empty().append(m.slides)),
            m.doMath(),
            m.setup("init"),
            m.vars.controlNav && y.controlNav.setup(),
            m.vars.directionNav && y.directionNav.setup(),
            m.vars.keyboard &&
              (1 === b(m.containerSelector).length ||
                m.vars.multipleKeyboard) &&
              b(document).bind("keyup", function (e) {
                var t,
                  a = e.keyCode;
                m.animating ||
                  (39 !== a && 37 !== a) ||
                  ((t =
                    39 === a
                      ? m.getTarget("next")
                      : 37 === a && m.getTarget("prev")),
                  m.flexAnimate(t, m.vars.pauseOnAction));
              }),
            m.vars.mousewheel &&
              m.bind("mousewheel", function (e, t, a, n) {
                e.preventDefault();
                var i = t < 0 ? m.getTarget("next") : m.getTarget("prev");
                m.flexAnimate(i, m.vars.pauseOnAction);
              }),
            m.vars.pausePlay && y.pausePlay.setup(),
            m.vars.slideshow &&
              m.vars.pauseInvisible &&
              y.pauseInvisible.init(),
            m.vars.slideshow &&
              (m.vars.pauseOnHover &&
                m.hover(
                  function () {
                    m.manualPlay || m.manualPause || m.pause();
                  },
                  function () {
                    m.manualPause || m.manualPlay || m.stopped || m.play();
                  }
                ),
              (m.vars.pauseInvisible && y.pauseInvisible.isHidden()) ||
                (0 < m.vars.initDelay
                  ? (m.startTimeout = setTimeout(m.play, m.vars.initDelay))
                  : m.play())),
            v && y.asNav.setup(),
            u && m.vars.touch && y.touch(),
            (!x || (x && m.vars.smoothHeight)) &&
              b(window).bind("resize orientationchange focus", y.resize),
            m.find("img").attr("draggable", "false"),
            setTimeout(function () {
              m.vars.start(m);
            }, 200);
        },
        asNav: {
          setup: function () {
            (m.asNav = !0),
              (m.animatingTo = Math.floor(m.currentSlide / m.move)),
              (m.currentItem = m.currentSlide),
              m.slides
                .removeClass(d + "active-slide")
                .eq(m.currentItem)
                .addClass(d + "active-slide"),
              f
                ? (p._slider = m).slides.each(function () {
                    var e = this;
                    (e._gesture = new MSGesture()),
                      (e._gesture.target = e).addEventListener(
                        "MSPointerDown",
                        function (e) {
                          e.preventDefault(),
                            e.currentTarget._gesture &&
                              e.currentTarget._gesture.addPointer(e.pointerId);
                        },
                        !1
                      ),
                      e.addEventListener("MSGestureTap", function (e) {
                        e.preventDefault();
                        var t = b(this),
                          a = t.index();
                        b(m.vars.asNavFor).data("flexslider").animating ||
                          t.hasClass("active") ||
                          ((m.direction = m.currentItem < a ? "next" : "prev"),
                          m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0));
                      });
                  })
                : m.slides.on(o, function (e) {
                    e.preventDefault();
                    var t = b(this),
                      a = t.index();
                    t.offset().left - b(m).scrollLeft() <= 0 &&
                    t.hasClass(d + "active-slide")
                      ? m.flexAnimate(m.getTarget("prev"), !0)
                      : b(m.vars.asNavFor).data("flexslider").animating ||
                        t.hasClass(d + "active-slide") ||
                        ((m.direction = m.currentItem < a ? "next" : "prev"),
                        m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0));
                  });
          },
        },
        controlNav: {
          setup: function () {
            m.manualControls
              ? y.controlNav.setupManual()
              : y.controlNav.setupPaging();
          },
          setupPaging: function () {
            var e,
              t =
                "thumbnails" === m.vars.controlNav
                  ? "control-thumbs"
                  : "control-paging",
              a = 1;
            if (
              ((m.controlNavScaffold = b(
                '<ol class="' + d + "control-nav " + d + t + '"></ol>'
              )),
              1 < m.pagingCount)
            )
              for (var n = 0; n < m.pagingCount; n++) {
                void 0 === (e = m.slides.eq(n)).attr("data-thumb-alt") &&
                  e.attr("data-thumb-alt", "");
                var i,
                  s =
                    "" !== e.attr("data-thumb-alt")
                      ? (s = ' alt="' + e.attr("data-thumb-alt") + '"')
                      : "",
                  r =
                    "thumbnails" === m.vars.controlNav
                      ? '<img src="' + e.attr("data-thumb") + '"' + s + "/>"
                      : '<a href="#">' + a + "</a>";
                "thumbnails" === m.vars.controlNav &&
                  !0 === m.vars.thumbCaptions &&
                  "" !== (i = e.attr("data-thumbcaption")) &&
                  void 0 !== i &&
                  (r += '<span class="' + d + 'caption">' + i + "</span>"),
                  m.controlNavScaffold.append("<li>" + r + "</li>"),
                  a++;
              }
            m.controlsContainer
              ? b(m.controlsContainer).append(m.controlNavScaffold)
              : m.append(m.controlNavScaffold),
              y.controlNav.set(),
              y.controlNav.active(),
              m.controlNavScaffold.delegate("a, img", o, function (e) {
                var t, a;
                e.preventDefault(),
                  ("" !== l && l !== e.type) ||
                    ((t = b(this)),
                    (a = m.controlNav.index(t)),
                    t.hasClass(d + "active") ||
                      ((m.direction = a > m.currentSlide ? "next" : "prev"),
                      m.flexAnimate(a, m.vars.pauseOnAction))),
                  "" === l && (l = e.type),
                  y.setToClearWatchedEvent();
              });
          },
          setupManual: function () {
            (m.controlNav = m.manualControls),
              y.controlNav.active(),
              m.controlNav.bind(o, function (e) {
                var t, a;
                e.preventDefault(),
                  ("" !== l && l !== e.type) ||
                    ((t = b(this)),
                    (a = m.controlNav.index(t)),
                    t.hasClass(d + "active") ||
                      (a > m.currentSlide
                        ? (m.direction = "next")
                        : (m.direction = "prev"),
                      m.flexAnimate(a, m.vars.pauseOnAction))),
                  "" === l && (l = e.type),
                  y.setToClearWatchedEvent();
              });
          },
          set: function () {
            var e = "thumbnails" === m.vars.controlNav ? "img" : "a";
            m.controlNav = b(
              "." + d + "control-nav li " + e,
              m.controlsContainer ? m.controlsContainer : m
            );
          },
          active: function () {
            m.controlNav
              .removeClass(d + "active")
              .eq(m.animatingTo)
              .addClass(d + "active");
          },
          update: function (e, t) {
            1 < m.pagingCount && "add" === e
              ? m.controlNavScaffold.append(
                  b('<li><a href="#">' + m.count + "</a></li>")
                )
              : 1 === m.pagingCount
              ? m.controlNavScaffold.find("li").remove()
              : m.controlNav.eq(t).closest("li").remove(),
              y.controlNav.set(),
              1 < m.pagingCount && m.pagingCount !== m.controlNav.length
                ? m.update(t, e)
                : y.controlNav.active();
          },
        },
        directionNav: {
          setup: function () {
            var e = b(
              '<ul class="' +
                d +
                'direction-nav"><li class="' +
                d +
                'nav-prev"><a class="' +
                d +
                'prev" href="#">' +
                m.vars.prevText +
                '</a></li><li class="' +
                d +
                'nav-next"><a class="' +
                d +
                'next" href="#">' +
                m.vars.nextText +
                "</a></li></ul>"
            );
            m.customDirectionNav
              ? (m.directionNav = m.customDirectionNav)
              : m.controlsContainer
              ? (b(m.controlsContainer).append(e),
                (m.directionNav = b(
                  "." + d + "direction-nav li a",
                  m.controlsContainer
                )))
              : (m.append(e),
                (m.directionNav = b("." + d + "direction-nav li a", m))),
              y.directionNav.update(),
              m.directionNav.bind(o, function (e) {
                var t;
                e.preventDefault(),
                  ("" !== l && l !== e.type) ||
                    ((t = b(this).hasClass(d + "next")
                      ? m.getTarget("next")
                      : m.getTarget("prev")),
                    m.flexAnimate(t, m.vars.pauseOnAction)),
                  "" === l && (l = e.type),
                  y.setToClearWatchedEvent();
              });
          },
          update: function () {
            var e = d + "disabled";
            1 === m.pagingCount
              ? m.directionNav.addClass(e).attr("tabindex", "-1")
              : m.vars.animationLoop
              ? m.directionNav.removeClass(e).removeAttr("tabindex")
              : 0 === m.animatingTo
              ? m.directionNav
                  .removeClass(e)
                  .filter("." + d + "prev")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : m.animatingTo === m.last
              ? m.directionNav
                  .removeClass(e)
                  .filter("." + d + "next")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : m.directionNav.removeClass(e).removeAttr("tabindex");
          },
        },
        pausePlay: {
          setup: function () {
            var e = b('<div class="' + d + 'pauseplay"><a href="#"></a></div>');
            m.controlsContainer
              ? (m.controlsContainer.append(e),
                (m.pausePlay = b("." + d + "pauseplay a", m.controlsContainer)))
              : (m.append(e), (m.pausePlay = b("." + d + "pauseplay a", m))),
              y.pausePlay.update(m.vars.slideshow ? d + "pause" : d + "play"),
              m.pausePlay.bind(o, function (e) {
                e.preventDefault(),
                  ("" !== l && l !== e.type) ||
                    (b(this).hasClass(d + "pause")
                      ? ((m.manualPause = !0), (m.manualPlay = !1), m.pause())
                      : ((m.manualPause = !1), (m.manualPlay = !0), m.play())),
                  "" === l && (l = e.type),
                  y.setToClearWatchedEvent();
              });
          },
          update: function (e) {
            "play" === e
              ? m.pausePlay
                  .removeClass(d + "pause")
                  .addClass(d + "play")
                  .html(m.vars.playText)
              : m.pausePlay
                  .removeClass(d + "play")
                  .addClass(d + "pause")
                  .html(m.vars.pauseText);
          },
        },
        touch: function () {
          var i,
            s,
            r,
            o,
            l,
            c,
            e,
            n,
            d,
            u = !1,
            t = 0,
            a = 0,
            v = 0;
          f
            ? ((p.style.msTouchAction = "none"),
              (p._gesture = new MSGesture()),
              (p._gesture.target = p).addEventListener(
                "MSPointerDown",
                function (e) {
                  e.stopPropagation(),
                    m.animating
                      ? e.preventDefault()
                      : (m.pause(),
                        p._gesture.addPointer(e.pointerId),
                        (v = 0),
                        (o = g ? m.h : m.w),
                        (c = Number(new Date())),
                        (r =
                          S && h && m.animatingTo === m.last
                            ? 0
                            : S && h
                            ? m.limit -
                              (m.itemW + m.vars.itemMargin) *
                                m.move *
                                m.animatingTo
                            : S && m.currentSlide === m.last
                            ? m.limit
                            : S
                            ? (m.itemW + m.vars.itemMargin) *
                              m.move *
                              m.currentSlide
                            : h
                            ? (m.last - m.currentSlide + m.cloneOffset) * o
                            : (m.currentSlide + m.cloneOffset) * o));
                },
                !1
              ),
              (p._slider = m),
              p.addEventListener(
                "MSGestureChange",
                function (e) {
                  e.stopPropagation();
                  var t = e.target._slider;
                  if (t) {
                    var a = -e.translationX,
                      n = -e.translationY;
                    return (
                      (l = v += g ? n : a),
                      (u = g
                        ? Math.abs(v) < Math.abs(-a)
                        : Math.abs(v) < Math.abs(-n)),
                      e.detail === e.MSGESTURE_FLAG_INERTIA
                        ? void setImmediate(function () {
                            p._gesture.stop();
                          })
                        : void (
                            (!u || 500 < Number(new Date()) - c) &&
                            (e.preventDefault(),
                            !x &&
                              t.transitions &&
                              (t.vars.animationLoop ||
                                (l =
                                  v /
                                  ((0 === t.currentSlide && v < 0) ||
                                  (t.currentSlide === t.last && 0 < v)
                                    ? Math.abs(v) / o + 2
                                    : 1)),
                              t.setProps(r + l, "setTouch")))
                          )
                    );
                  }
                },
                !1
              ),
              p.addEventListener(
                "MSGestureEnd",
                function (e) {
                  e.stopPropagation();
                  var t,
                    a,
                    n = e.target._slider;
                  n &&
                    (n.animatingTo !== n.currentSlide ||
                      u ||
                      null === l ||
                      ((a =
                        0 < (t = h ? -l : l)
                          ? n.getTarget("next")
                          : n.getTarget("prev")),
                      n.canAdvance(a) &&
                      ((Number(new Date()) - c < 550 && 50 < Math.abs(t)) ||
                        Math.abs(t) > o / 2)
                        ? n.flexAnimate(a, n.vars.pauseOnAction)
                        : x ||
                          n.flexAnimate(
                            n.currentSlide,
                            n.vars.pauseOnAction,
                            !0
                          )),
                    (r = l = s = i = null),
                    (v = 0));
                },
                !1
              ))
            : ((e = function (e) {
                m.animating
                  ? e.preventDefault()
                  : (!window.navigator.msPointerEnabled &&
                      1 !== e.touches.length) ||
                    (m.pause(),
                    (o = g ? m.h : m.w),
                    (c = Number(new Date())),
                    (t = e.touches[0].pageX),
                    (a = e.touches[0].pageY),
                    (r =
                      S && h && m.animatingTo === m.last
                        ? 0
                        : S && h
                        ? m.limit -
                          (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                        : S && m.currentSlide === m.last
                        ? m.limit
                        : S
                        ? (m.itemW + m.vars.itemMargin) *
                          m.move *
                          m.currentSlide
                        : h
                        ? (m.last - m.currentSlide + m.cloneOffset) * o
                        : (m.currentSlide + m.cloneOffset) * o),
                    (i = g ? a : t),
                    (s = g ? t : a),
                    p.addEventListener("touchmove", n, !1),
                    p.addEventListener("touchend", d, !1));
              }),
              (n = function (e) {
                (t = e.touches[0].pageX),
                  (a = e.touches[0].pageY),
                  (l = g ? i - a : i - t);
                (!(u = g
                  ? Math.abs(l) < Math.abs(t - s)
                  : Math.abs(l) < Math.abs(a - s)) ||
                  500 < Number(new Date()) - c) &&
                  (e.preventDefault(),
                  !x &&
                    m.transitions &&
                    (m.vars.animationLoop ||
                      (l /=
                        (0 === m.currentSlide && l < 0) ||
                        (m.currentSlide === m.last && 0 < l)
                          ? Math.abs(l) / o + 2
                          : 1),
                    m.setProps(r + l, "setTouch")));
              }),
              (d = function (e) {
                var t, a;
                p.removeEventListener("touchmove", n, !1),
                  m.animatingTo !== m.currentSlide ||
                    u ||
                    null === l ||
                    ((a =
                      0 < (t = h ? -l : l)
                        ? m.getTarget("next")
                        : m.getTarget("prev")),
                    m.canAdvance(a) &&
                    ((Number(new Date()) - c < 550 && 50 < Math.abs(t)) ||
                      Math.abs(t) > o / 2)
                      ? m.flexAnimate(a, m.vars.pauseOnAction)
                      : x ||
                        m.flexAnimate(
                          m.currentSlide,
                          m.vars.pauseOnAction,
                          !0
                        )),
                  p.removeEventListener("touchend", d, !1),
                  (r = l = s = i = null);
              }),
              p.addEventListener("touchstart", e, !1));
        },
        resize: function () {
          !m.animating &&
            m.is(":visible") &&
            (S || m.doMath(),
            x
              ? y.smoothHeight()
              : S
              ? (m.slides.width(m.computedW),
                m.update(m.pagingCount),
                m.setProps())
              : g
              ? (m.viewport.height(m.h), m.setProps(m.h, "setTotal"))
              : (m.vars.smoothHeight && y.smoothHeight(),
                m.newSlides.width(m.computedW),
                m.setProps(m.computedW, "setTotal")));
        },
        smoothHeight: function (e) {
          var t;
          (g && !x) ||
            ((t = x ? m : m.viewport),
            e
              ? t.animate(
                  { height: m.slides.eq(m.animatingTo).innerHeight() },
                  e
                )
              : t.innerHeight(m.slides.eq(m.animatingTo).innerHeight()));
        },
        sync: function (e) {
          var t = b(m.vars.sync).data("flexslider"),
            a = m.animatingTo;
          switch (e) {
            case "animate":
              t.flexAnimate(a, m.vars.pauseOnAction, !1, !0);
              break;
            case "play":
              t.playing || t.asNav || t.play();
              break;
            case "pause":
              t.pause();
          }
        },
        uniqueID: function (e) {
          return (
            e
              .filter("[id]")
              .add(e.find("[id]"))
              .each(function () {
                var e = b(this);
                e.attr("id", e.attr("id") + "_clone");
              }),
            e
          );
        },
        pauseInvisible: {
          visProp: null,
          init: function () {
            var e,
              t = y.pauseInvisible.getHiddenProp();
            t &&
              ((e = t.replace(/[H|h]idden/, "") + "visibilitychange"),
              document.addEventListener(e, function () {
                y.pauseInvisible.isHidden()
                  ? m.startTimeout
                    ? clearTimeout(m.startTimeout)
                    : m.pause()
                  : !m.started && 0 < m.vars.initDelay
                  ? setTimeout(m.play, m.vars.initDelay)
                  : m.play();
              }));
          },
          isHidden: function () {
            var e = y.pauseInvisible.getHiddenProp();
            return !!e && document[e];
          },
          getHiddenProp: function () {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
              if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null;
          },
        },
        setToClearWatchedEvent: function () {
          clearTimeout(t),
            (t = setTimeout(function () {
              l = "";
            }, 3e3));
        },
      }),
      (m.flexAnimate = function (e, t, a, n, i) {
        if (
          (m.vars.animationLoop ||
            e === m.currentSlide ||
            (m.direction = e > m.currentSlide ? "next" : "prev"),
          v &&
            1 === m.pagingCount &&
            (m.direction = m.currentItem < e ? "next" : "prev"),
          !m.animating && (m.canAdvance(e, i) || a) && m.is(":visible"))
        ) {
          if (v && n) {
            var s = b(m.vars.asNavFor).data("flexslider");
            if (
              ((m.atEnd = 0 === e || e === m.count - 1),
              s.flexAnimate(e, !0, !1, !0, i),
              (m.direction = m.currentItem < e ? "next" : "prev"),
              (s.direction = m.direction),
              Math.ceil((e + 1) / m.visible) - 1 === m.currentSlide || 0 === e)
            )
              return (
                (m.currentItem = e),
                m.slides
                  .removeClass(d + "active-slide")
                  .eq(e)
                  .addClass(d + "active-slide"),
                !1
              );
            (m.currentItem = e),
              m.slides
                .removeClass(d + "active-slide")
                .eq(e)
                .addClass(d + "active-slide"),
              (e = Math.floor(e / m.visible));
          }
          var r, o, l, c;
          (m.animating = !0),
            (m.animatingTo = e),
            t && m.pause(),
            m.vars.before(m),
            m.syncExists && !i && y.sync("animate"),
            m.vars.controlNav && y.controlNav.active(),
            S ||
              m.slides
                .removeClass(d + "active-slide")
                .eq(e)
                .addClass(d + "active-slide"),
            (m.atEnd = 0 === e || e === m.last),
            m.vars.directionNav && y.directionNav.update(),
            e === m.last && (m.vars.end(m), m.vars.animationLoop || m.pause()),
            x
              ? u
                ? (m.slides.eq(m.currentSlide).css({ opacity: 0, zIndex: 1 }),
                  m.slides.eq(e).css({ opacity: 1, zIndex: 2 }),
                  m.wrapup(r))
                : (m.slides
                    .eq(m.currentSlide)
                    .css({ zIndex: 1 })
                    .animate(
                      { opacity: 0 },
                      m.vars.animationSpeed,
                      m.vars.easing
                    ),
                  m.slides
                    .eq(e)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      m.vars.animationSpeed,
                      m.vars.easing,
                      m.wrapup
                    ))
              : ((r = g ? m.slides.filter(":first").height() : m.computedW),
                (c = S
                  ? ((o = m.vars.itemMargin),
                    (l = (m.itemW + o) * m.move * m.animatingTo) > m.limit &&
                    1 !== m.visible
                      ? m.limit
                      : l)
                  : 0 === m.currentSlide &&
                    e === m.count - 1 &&
                    m.vars.animationLoop &&
                    "next" !== m.direction
                  ? h
                    ? (m.count + m.cloneOffset) * r
                    : 0
                  : m.currentSlide === m.last &&
                    0 === e &&
                    m.vars.animationLoop &&
                    "prev" !== m.direction
                  ? h
                    ? 0
                    : (m.count + 1) * r
                  : h
                  ? (m.count - 1 - e + m.cloneOffset) * r
                  : (e + m.cloneOffset) * r),
                m.setProps(c, "", m.vars.animationSpeed),
                m.transitions
                  ? ((m.vars.animationLoop && m.atEnd) ||
                      ((m.animating = !1), (m.currentSlide = m.animatingTo)),
                    m.container.unbind("webkitTransitionEnd transitionend"),
                    m.container.bind(
                      "webkitTransitionEnd transitionend",
                      function () {
                        clearTimeout(m.ensureAnimationEnd), m.wrapup(r);
                      }
                    ),
                    clearTimeout(m.ensureAnimationEnd),
                    (m.ensureAnimationEnd = setTimeout(function () {
                      m.wrapup(r);
                    }, m.vars.animationSpeed + 100)))
                  : m.container.animate(
                      m.args,
                      m.vars.animationSpeed,
                      m.vars.easing,
                      function () {
                        m.wrapup(r);
                      }
                    )),
            m.vars.smoothHeight && y.smoothHeight(m.vars.animationSpeed);
        }
      }),
      (m.wrapup = function (e) {
        x ||
          S ||
          (0 === m.currentSlide &&
          m.animatingTo === m.last &&
          m.vars.animationLoop
            ? m.setProps(e, "jumpEnd")
            : m.currentSlide === m.last &&
              0 === m.animatingTo &&
              m.vars.animationLoop &&
              m.setProps(e, "jumpStart")),
          (m.animating = !1),
          (m.currentSlide = m.animatingTo),
          m.vars.after(m);
      }),
      (m.animateSlides = function () {
        !m.animating && a && m.flexAnimate(m.getTarget("next"));
      }),
      (m.pause = function () {
        clearInterval(m.animatedSlides),
          (m.animatedSlides = null),
          (m.playing = !1),
          m.vars.pausePlay && y.pausePlay.update("play"),
          m.syncExists && y.sync("pause");
      }),
      (m.play = function () {
        m.playing && clearInterval(m.animatedSlides),
          (m.animatedSlides =
            m.animatedSlides ||
            setInterval(m.animateSlides, m.vars.slideshowSpeed)),
          (m.started = m.playing = !0),
          m.vars.pausePlay && y.pausePlay.update("pause"),
          m.syncExists && y.sync("play");
      }),
      (m.stop = function () {
        m.pause(), (m.stopped = !0);
      }),
      (m.canAdvance = function (e, t) {
        var a = v ? m.pagingCount - 1 : m.last;
        return (
          !!t ||
          (v &&
            m.currentItem === m.count - 1 &&
            0 === e &&
            "prev" === m.direction) ||
          ((!v ||
            0 !== m.currentItem ||
            e !== m.pagingCount - 1 ||
            "next" === m.direction) &&
            (e !== m.currentSlide || v) &&
            (!!m.vars.animationLoop ||
              ((!m.atEnd ||
                0 !== m.currentSlide ||
                e !== a ||
                "next" === m.direction) &&
                (!m.atEnd ||
                  m.currentSlide !== a ||
                  0 !== e ||
                  "next" !== m.direction))))
        );
      }),
      (m.getTarget = function (e) {
        return "next" === (m.direction = e)
          ? m.currentSlide === m.last
            ? 0
            : m.currentSlide + 1
          : 0 === m.currentSlide
          ? m.last
          : m.currentSlide - 1;
      }),
      (m.setProps = function (e, t, a) {
        var n,
          i =
            ((n = e || (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo),
            -1 *
              (function () {
                if (S)
                  return "setTouch" === t
                    ? e
                    : h && m.animatingTo === m.last
                    ? 0
                    : h
                    ? m.limit -
                      (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                    : m.animatingTo === m.last
                    ? m.limit
                    : n;
                switch (t) {
                  case "setTotal":
                    return h
                      ? (m.count - 1 - m.currentSlide + m.cloneOffset) * e
                      : (m.currentSlide + m.cloneOffset) * e;
                  case "setTouch":
                    return e;
                  case "jumpEnd":
                    return h ? e : m.count * e;
                  case "jumpStart":
                    return h ? m.count * e : e;
                  default:
                    return e;
                }
              })() +
              "px");
        m.transitions &&
          ((i = g
            ? "translate3d(0," + i + ",0)"
            : "translate3d(" + i + ",0,0)"),
          (a = void 0 !== a ? a / 1e3 + "s" : "0s"),
          m.container.css("-" + m.pfx + "-transition-duration", a),
          m.container.css("transition-duration", a)),
          (m.args[m.prop] = i),
          (!m.transitions && void 0 !== a) || m.container.css(m.args),
          m.container.css("transform", i);
      }),
      (m.setup = function (e) {
        var t, a;
        x
          ? (m.slides.css({
              width: "100%",
              float: "left",
              marginRight: "-100%",
              position: "relative",
            }),
            "init" === e &&
              (u
                ? m.slides
                    .css({
                      opacity: 0,
                      display: "block",
                      webkitTransition:
                        "opacity " + m.vars.animationSpeed / 1e3 + "s ease",
                      zIndex: 1,
                    })
                    .eq(m.currentSlide)
                    .css({ opacity: 1, zIndex: 2 })
                : 0 == m.vars.fadeFirstSlide
                ? m.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(m.currentSlide)
                    .css({ zIndex: 2 })
                    .css({ opacity: 1 })
                : m.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(m.currentSlide)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      m.vars.animationSpeed,
                      m.vars.easing
                    )),
            m.vars.smoothHeight && y.smoothHeight())
          : ("init" === e &&
              ((m.viewport = b('<div class="' + d + 'viewport"></div>')
                .css({ overflow: "hidden", position: "relative" })
                .appendTo(m)
                .append(m.container)),
              (m.cloneCount = 0),
              (m.cloneOffset = 0),
              h &&
                ((a = b.makeArray(m.slides).reverse()),
                (m.slides = b(a)),
                m.container.empty().append(m.slides))),
            m.vars.animationLoop &&
              !S &&
              ((m.cloneCount = 2),
              (m.cloneOffset = 1),
              "init" !== e && m.container.find(".clone").remove(),
              m.container
                .append(
                  y
                    .uniqueID(m.slides.first().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )
                .prepend(
                  y
                    .uniqueID(m.slides.last().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )),
            (m.newSlides = b(m.vars.selector, m)),
            (t = h
              ? m.count - 1 - m.currentSlide + m.cloneOffset
              : m.currentSlide + m.cloneOffset),
            g && !S
              ? (m.container
                  .height(200 * (m.count + m.cloneCount) + "%")
                  .css("position", "absolute")
                  .width("100%"),
                setTimeout(
                  function () {
                    m.newSlides.css({ display: "block" }),
                      m.doMath(),
                      m.viewport.height(m.h),
                      m.setProps(t * m.h, "init");
                  },
                  "init" === e ? 100 : 0
                ))
              : (m.container.width(200 * (m.count + m.cloneCount) + "%"),
                m.setProps(t * m.computedW, "init"),
                setTimeout(
                  function () {
                    m.doMath(),
                      m.newSlides.css({
                        width: m.computedW,
                        marginRight: m.computedM,
                        float: "left",
                        display: "block",
                      }),
                      m.vars.smoothHeight && y.smoothHeight();
                  },
                  "init" === e ? 100 : 0
                ))),
          S ||
            m.slides
              .removeClass(d + "active-slide")
              .eq(m.currentSlide)
              .addClass(d + "active-slide"),
          m.vars.init(m);
      }),
      (m.doMath = function () {
        var e = m.slides.first(),
          t = m.vars.itemMargin,
          a = m.vars.minItems,
          n = m.vars.maxItems;
        (m.w = void 0 === m.viewport ? m.width() : m.viewport.width()),
          (m.h = e.height()),
          (m.boxPadding = e.outerWidth() - e.width()),
          S
            ? ((m.itemT = m.vars.itemWidth + t),
              (m.itemM = t),
              (m.minW = a ? a * m.itemT : m.w),
              (m.maxW = n ? n * m.itemT - t : m.w),
              (m.itemW =
                m.minW > m.w
                  ? (m.w - t * (a - 1)) / a
                  : m.maxW < m.w
                  ? (m.w - t * (n - 1)) / n
                  : m.vars.itemWidth > m.w
                  ? m.w
                  : m.vars.itemWidth),
              (m.visible = Math.floor(m.w / m.itemW)),
              (m.move =
                0 < m.vars.move && m.vars.move < m.visible
                  ? m.vars.move
                  : m.visible),
              (m.pagingCount = Math.ceil((m.count - m.visible) / m.move + 1)),
              (m.last = m.pagingCount - 1),
              (m.limit =
                1 === m.pagingCount
                  ? 0
                  : m.vars.itemWidth > m.w
                  ? m.itemW * (m.count - 1) + t * (m.count - 1)
                  : (m.itemW + t) * m.count - m.w - t))
            : ((m.itemW = m.w),
              (m.itemM = t),
              (m.pagingCount = m.count),
              (m.last = m.count - 1)),
          (m.computedW = m.itemW - m.boxPadding),
          (m.computedM = m.itemM);
      }),
      (m.update = function (e, t) {
        m.doMath(),
          S ||
            (e < m.currentSlide
              ? (m.currentSlide += 1)
              : e <= m.currentSlide && 0 !== e && --m.currentSlide,
            (m.animatingTo = m.currentSlide)),
          m.vars.controlNav &&
            !m.manualControls &&
            (("add" === t && !S) || m.pagingCount > m.controlNav.length
              ? y.controlNav.update("add")
              : (("remove" === t && !S) ||
                  m.pagingCount < m.controlNav.length) &&
                (S &&
                  m.currentSlide > m.last &&
                  (--m.currentSlide, --m.animatingTo),
                y.controlNav.update("remove", m.last))),
          m.vars.directionNav && y.directionNav.update();
      }),
      (m.addSlide = function (e, t) {
        var a = b(e);
        (m.count += 1),
          (m.last = m.count - 1),
          g && h
            ? void 0 !== t
              ? m.slides.eq(m.count - t).after(a)
              : m.container.prepend(a)
            : void 0 !== t
            ? m.slides.eq(t).before(a)
            : m.container.append(a),
          m.update(t, "add"),
          (m.slides = b(m.vars.selector + ":not(.clone)", m)),
          m.setup(),
          m.vars.added(m);
      }),
      (m.removeSlide = function (e) {
        var t = isNaN(e) ? m.slides.index(b(e)) : e;
        --m.count,
          (m.last = m.count - 1),
          isNaN(e)
            ? b(e, m.slides).remove()
            : g && h
            ? m.slides.eq(m.last).remove()
            : m.slides.eq(e).remove(),
          m.doMath(),
          m.update(t, "remove"),
          (m.slides = b(m.vars.selector + ":not(.clone)", m)),
          m.setup(),
          m.vars.removed(m);
      }),
      y.init();
  }),
    b(window)
      .blur(function (e) {
        a = !1;
      })
      .focus(function (e) {
        a = !0;
      }),
    (b.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      fadeFirstSlide: !0,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      customDirectionNav: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {},
      init: function () {},
    }),
    (b.fn.flexslider = function (n) {
      if ((void 0 === n && (n = {}), "object" == typeof n))
        return this.each(function () {
          var e = b(this),
            t = n.selector ? n.selector : ".slides > li",
            a = e.find(t);
          (1 === a.length && !1 === n.allowOneSlide) || 0 === a.length
            ? (a.fadeIn(400), n.start && n.start(e))
            : void 0 === e.data("flexslider") && new b.flexslider(this, n);
        });
      var e = b(this).data("flexslider");
      switch (n) {
        case "play":
          e.play();
          break;
        case "pause":
          e.pause();
          break;
        case "stop":
          e.stop();
          break;
        case "next":
          e.flexAnimate(e.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          e.flexAnimate(e.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof n && e.flexAnimate(n, !0);
      }
    });
})(jQuery);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (h, i, n, o) {
  function l(t, e) {
    (this.settings = null),
      (this.options = h.extend({}, l.Defaults, e)),
      (this.$element = h(t)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      h.each(
        ["onResize", "onThrottledResize"],
        h.proxy(function (t, e) {
          this._handlers[e] = h.proxy(this[e], this);
        }, this)
      ),
      h.each(
        l.Plugins,
        h.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
        }, this)
      ),
      h.each(
        l.Workers,
        h.proxy(function (t, e) {
          this._pipe.push({ filter: e.filter, run: h.proxy(e.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (l.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: i,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (l.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (l.Type = { Event: "event", State: "state" }),
    (l.Plugins = {}),
    (l.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
              width: "auto",
              "margin-left": s ? e : "",
              "margin-right": s ? "" : e,
            };
          i || this.$stage.children().css(n), (t.css = n);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            o = [];
          for (t.items = { merge: !1, width: e }; s--; )
            (i = this._mergers[s]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = 1 < i || t.items.merge),
              (o[s] = n ? e * i : this._items[s].width());
          this._widths = o;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var t = [],
            e = this._items,
            i = this.settings,
            s = Math.max(2 * i.items, 4),
            n = 2 * Math.ceil(e.length / 2),
            o = i.loop && e.length ? (i.rewind ? s : Math.max(s, n)) : 0,
            r = "",
            a = "";
          for (o /= 2; o--; )
            t.push(this.normalize(t.length / 2, !0)),
              (r += e[t[t.length - 1]][0].outerHTML),
              t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
              (a = e[t[t.length - 1]][0].outerHTML + a);
          (this._clones = t),
            h(r).addClass("cloned").appendTo(this.$stage),
            h(a).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var t,
              e,
              i = this.settings.rtl ? 1 : -1,
              s = this._clones.length + this._items.length,
              n = -1,
              o = [];
            ++n < s;

          )
            (t = o[n - 1] || 0),
              (e = this._widths[this.relative(n)] + this.settings.margin),
              o.push(t + e * i);
          this._coordinates = o;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              "padding-left": t || "",
              "padding-right": t || "",
            };
          this.$stage.css(i);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
          if (i && t.items.merge)
            for (; e--; )
              (t.css.width = this._widths[this.relative(e)]),
                s.eq(e).css(t.css);
          else i && ((t.css.width = t.items.width), s.css(t.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          (t.current = t.current ? this.$stage.children().index(t.current) : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          for (
            var t,
              e,
              i = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              n = this.coordinates(this.current()) + s,
              o = n + this.width() * i,
              r = [],
              a = 0,
              h = this._coordinates.length;
            a < h;
            a++
          )
            (t = this._coordinates[a - 1] || 0),
              (e = Math.abs(this._coordinates[a]) + s * i),
              ((this.op(t, "<=", n) && this.op(t, ">", o)) ||
                (this.op(e, "<", n) && this.op(e, ">", o))) &&
                r.push(a);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + r.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (l.prototype.initialize = function () {
      var t, e, i;
      this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth &&
          !this.is("pre-loading") &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : o),
          (i = this.$element.children(e).width()),
          t.length && i <= 0 && this.preloadAutoWidthImages(t)),
        this.$element.addClass(this.options.loadingClass),
        (this.$stage = h(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (l.prototype.setup = function () {
      var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        s = null;
      t
        ? (h.each(t, function (t) {
            t <= e && i < t && (i = Number(t));
          }),
          "function" ==
            typeof (s = h.extend({}, this.options, t[i])).stagePadding &&
            (s.stagePadding = s.stagePadding()),
          delete s.responsive,
          s.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + i
                )
            ))
        : (s = h.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: s } }),
        (this._breakpoint = i),
        (this.settings = s),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (l.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (l.prototype.prepare = function (t) {
      var e = this.trigger("prepare", { content: t });
      return (
        e.data ||
          (e.data = h("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(t)),
        this.trigger("prepared", { content: e.data }),
        e.data
      );
    }),
    (l.prototype.update = function () {
      for (
        var t = 0,
          e = this._pipe.length,
          i = h.proxy(function (t) {
            return this[t];
          }, this._invalidated),
          s = {};
        t < e;

      )
        (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) &&
          this._pipe[t].run(s),
          t++;
      (this._invalidated = {}), this.is("valid") || this.enter("valid");
    }),
    (l.prototype.width = function (t) {
      switch ((t = t || l.Width.Default)) {
        case l.Width.Inner:
        case l.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (l.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (l.prototype.onThrottledResize = function () {
      i.clearTimeout(this.resizeTimer),
        (this.resizeTimer = i.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (l.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(":visible") &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (l.prototype.registerEventHandlers = function () {
      h.support.transition &&
        this.$stage.on(
          h.support.transition.end + ".owl.core",
          h.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            h.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            h.proxy(this.onDragEnd, this)
          ));
    }),
    (l.prototype.onDragStart = function (t) {
      var e = null;
      3 !== t.which &&
        ((e = h.support.transform
          ? {
              x: (e = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(","))[16 === e.length ? 12 : 4],
              y: e[16 === e.length ? 13 : 5],
            }
          : ((e = this.$stage.position()),
            {
              x: this.settings.rtl
                ? e.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : e.left,
              y: e.top,
            })),
        this.is("animating") &&
          (h.support.transform ? this.animate(e.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === t.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = h(t.target)),
        (this._drag.stage.start = e),
        (this._drag.stage.current = e),
        (this._drag.pointer = this.pointer(t)),
        h(n).on(
          "mouseup.owl.core touchend.owl.core",
          h.proxy(this.onDragEnd, this)
        ),
        h(n).one(
          "mousemove.owl.core touchmove.owl.core",
          h.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on(
              "mousemove.owl.core touchmove.owl.core",
              h.proxy(this.onDragMove, this)
            ),
              (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) ||
                (t.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (l.prototype.onDragMove = function (t) {
      var e,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
      this.is("dragging") &&
        (t.preventDefault(),
        this.settings.loop
          ? ((i = this.coordinates(this.minimum())),
            (s = this.coordinates(this.maximum() + 1) - i),
            (o.x = ((((o.x - i) % s) + s) % s) + i))
          : ((i = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (s = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (e = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
            (o.x = Math.max(Math.min(o.x, i + e), s + e))),
        (this._drag.stage.current = o),
        this.animate(o.x));
    }),
    (l.prototype.onDragEnd = function (t) {
      var e = this.difference(this._drag.pointer, this.pointer(t)),
        i = this._drag.stage.current,
        s = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
      h(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = s),
          (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (l.prototype.closest = function (i, s) {
      var n = -1,
        o = this.width(),
        r = this.coordinates();
      return (
        this.settings.freeDrag ||
          h.each(
            r,
            h.proxy(function (t, e) {
              return (
                "left" === s && e - 30 < i && i < e + 30
                  ? (n = t)
                  : "right" === s && e - o - 30 < i && i < e - o + 30
                  ? (n = t + 1)
                  : this.op(i, "<", e) &&
                    this.op(i, ">", r[t + 1] || e - o) &&
                    (n = "left" === s ? t + 1 : t),
                -1 === n
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(i, ">", r[this.minimum()])
            ? (n = i = this.minimum())
            : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
        n
      );
    }),
    (l.prototype.animate = function (t) {
      var e = 0 < this.speed();
      this.is("animating") && this.onTransitionEnd(),
        e && (this.enter("animating"), this.trigger("translate")),
        h.support.transform3d && h.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + t + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : e
          ? this.$stage.animate(
              { left: t + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              h.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: t + "px" });
    }),
    (l.prototype.is = function (t) {
      return this._states.current[t] && 0 < this._states.current[t];
    }),
    (l.prototype.current = function (t) {
      return t === o
        ? this._current
        : 0 === this._items.length
        ? o
        : ((t = this.normalize(t)),
          this._current !== t &&
            ((e = this.trigger("change", {
              property: { name: "position", value: t },
            })).data !== o && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            })),
          this._current);
      var e;
    }),
    (l.prototype.invalidate = function (t) {
      return (
        "string" === h.type(t) &&
          ((this._invalidated[t] = !0),
          this.is("valid") && this.leave("valid")),
        h.map(this._invalidated, function (t, e) {
          return e;
        })
      );
    }),
    (l.prototype.reset = function (t) {
      (t = this.normalize(t)) !== o &&
        ((this._speed = 0),
        (this._current = t),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]));
    }),
    (l.prototype.normalize = function (t, e) {
      var i = this._items.length,
        s = e ? 0 : this._clones.length;
      return (
        !this.isNumeric(t) || i < 1
          ? (t = o)
          : (t < 0 || i + s <= t) &&
            (t = ((((t - s / 2) % i) + i) % i) + s / 2),
        t
      );
    }),
    (l.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0);
    }),
    (l.prototype.maximum = function (t) {
      var e,
        i,
        s,
        n = this.settings,
        o = this._coordinates.length;
      if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
      else if (n.autoWidth || n.merge) {
        for (
          e = this._items.length,
            i = this._items[--e].width(),
            s = this.$element.width();
          e-- && !(s < (i += this._items[e].width() + this.settings.margin));

        );
        o = e + 1;
      } else
        o = n.center ? this._items.length - 1 : this._items.length - n.items;
      return t && (o -= this._clones.length / 2), Math.max(o, 0);
    }),
    (l.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2;
    }),
    (l.prototype.items = function (t) {
      return t === o
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t]);
    }),
    (l.prototype.mergers = function (t) {
      return t === o
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t]);
    }),
    (l.prototype.clones = function (i) {
      function s(t) {
        return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2;
      }
      var e = this._clones.length / 2,
        n = e + this._items.length;
      return i === o
        ? h.map(this._clones, function (t, e) {
            return s(e);
          })
        : h.map(this._clones, function (t, e) {
            return t === i ? s(e) : null;
          });
    }),
    (l.prototype.speed = function (t) {
      return t !== o && (this._speed = t), this._speed;
    }),
    (l.prototype.coordinates = function (t) {
      var e,
        i = 1,
        s = t - 1;
      return t === o
        ? h.map(
            this._coordinates,
            h.proxy(function (t, e) {
              return this.coordinates(e);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((i = -1), (s = t + 1)),
              (e = this._coordinates[t]),
              (e += ((this.width() - e + (this._coordinates[s] || 0)) / 2) * i))
            : (e = this._coordinates[s] || 0),
          (e = Math.ceil(e)));
    }),
    (l.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed);
    }),
    (l.prototype.to = function (t, e) {
      var i,
        s = this.current(),
        n = t - this.relative(s),
        o = (0 < n) - (n < 0),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
          (i = (((((t = s + n) - a) % r) + r) % r) + a) !== t &&
            i - n <= h &&
            0 < i - n &&
            ((s = i - n), (t = i), this.reset(s)))
        : (t = this.settings.rewind
            ? ((t % (h += 1)) + h) % h
            : Math.max(a, Math.min(h, t))),
        this.speed(this.duration(s, t, e)),
        this.current(t),
        this.$element.is(":visible") && this.update();
    }),
    (l.prototype.next = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) + 1, t);
    }),
    (l.prototype.prev = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) - 1, t);
    }),
    (l.prototype.onTransitionEnd = function (t) {
      if (
        t !== o &&
        (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (l.prototype.viewport = function () {
      var t;
      return (
        this.options.responsiveBaseElement !== i
          ? (t = h(this.options.responsiveBaseElement).width())
          : i.innerWidth
          ? (t = i.innerWidth)
          : n.documentElement && n.documentElement.clientWidth
          ? (t = n.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        t
      );
    }),
    (l.prototype.replace = function (t) {
      this.$stage.empty(),
        (this._items = []),
        (t = t && (t instanceof jQuery ? t : h(t))),
        this.settings.nestedItemSelector &&
          (t = t.find("." + this.settings.nestedItemSelector)),
        t
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            h.proxy(function (t, e) {
              (e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  +e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (l.prototype.add = function (t, e) {
      var i = this.relative(this._current);
      (e = e === o ? this._items.length : this.normalize(e, !0)),
        (t = t instanceof jQuery ? t : h(t)),
        this.trigger("add", { content: t, position: e }),
        (t = this.prepare(t)),
        0 === this._items.length || e === this._items.length
          ? (0 === this._items.length && this.$stage.append(t),
            0 !== this._items.length && this._items[e - 1].after(t),
            this._items.push(t),
            this._mergers.push(
              +t
                .find("[data-merge]")
                .addBack("[data-merge]")
                .attr("data-merge") || 1
            ))
          : (this._items[e].before(t),
            this._items.splice(e, 0, t),
            this._mergers.splice(
              e,
              0,
              +t
                .find("[data-merge]")
                .addBack("[data-merge]")
                .attr("data-merge") || 1
            )),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate("items"),
        this.trigger("added", { content: t, position: e });
    }),
    (l.prototype.remove = function (t) {
      (t = this.normalize(t, !0)) !== o &&
        (this.trigger("remove", { content: this._items[t], position: t }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: t }));
    }),
    (l.prototype.preloadAutoWidthImages = function (t) {
      t.each(
        h.proxy(function (t, e) {
          this.enter("pre-loading"),
            (e = h(e)),
            h(new Image())
              .one(
                "load",
                h.proxy(function (t) {
                  e.attr("src", t.target.src),
                    e.css("opacity", 1),
                    this.leave("pre-loading"),
                    this.is("pre-loading") ||
                      this.is("initializing") ||
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (l.prototype.destroy = function () {
      for (var t in (this.$element.off(".owl.core"),
      this.$stage.off(".owl.core"),
      h(n).off(".owl.core"),
      !1 !== this.settings.responsive &&
        (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
      this._plugins))
        this._plugins[t].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (l.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? i < t : t < i;
        case ">":
          return s ? t < i : i < t;
        case ">=":
          return s ? t <= i : i <= t;
        case "<=":
          return s ? i <= t : t <= i;
      }
    }),
    (l.prototype.on = function (t, e, i, s) {
      t.addEventListener
        ? t.addEventListener(e, i, s)
        : t.attachEvent && t.attachEvent("on" + e, i);
    }),
    (l.prototype.off = function (t, e, i, s) {
      t.removeEventListener
        ? t.removeEventListener(e, i, s)
        : t.detachEvent && t.detachEvent("on" + e, i);
    }),
    (l.prototype.trigger = function (t, e, i, s, n) {
      var o = { item: { count: this._items.length, index: this.current() } },
        r = h.camelCase(
          h
            .grep(["on", t, i], function (t) {
              return t;
            })
            .join("-")
            .toLowerCase()
        ),
        a = h.Event(
          [t, "owl", i || "carousel"].join(".").toLowerCase(),
          h.extend({ relatedTarget: this }, o, e)
        );
      return (
        this._supress[t] ||
          (h.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a);
          }),
          this.register({ type: l.Type.Event, name: t }),
          this.$element.trigger(a),
          this.settings &&
            "function" == typeof this.settings[r] &&
            this.settings[r].call(this, a)),
        a
      );
    }),
    (l.prototype.enter = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e] === o && (this._states.current[e] = 0),
            this._states.current[e]++;
        }, this)
      );
    }),
    (l.prototype.leave = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e]--;
        }, this)
      );
    }),
    (l.prototype.register = function (i) {
      var e;
      i.type === l.Type.Event
        ? (h.event.special[i.name] || (h.event.special[i.name] = {}),
          h.event.special[i.name].owl ||
            ((e = h.event.special[i.name]._default),
            (h.event.special[i.name]._default = function (t) {
              return !e ||
                !e.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && -1 < t.namespace.indexOf("owl")
                : e.apply(this, arguments);
            }),
            (h.event.special[i.name].owl = !0)))
        : i.type === l.Type.State &&
          (this._states.tags[i.name]
            ? (this._states.tags[i.name] = this._states.tags[i.name].concat(
                i.tags
              ))
            : (this._states.tags[i.name] = i.tags),
          (this._states.tags[i.name] = h.grep(
            this._states.tags[i.name],
            h.proxy(function (t, e) {
              return h.inArray(t, this._states.tags[i.name]) === e;
            }, this)
          )));
    }),
    (l.prototype.suppress = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          this._supress[e] = !0;
        }, this)
      );
    }),
    (l.prototype.release = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          delete this._supress[e];
        }, this)
      );
    }),
    (l.prototype.pointer = function (t) {
      var e = { x: null, y: null };
      return (
        (t =
          (t = t.originalEvent || t || i.event).touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t).pageX
          ? ((e.x = t.pageX), (e.y = t.pageY))
          : ((e.x = t.clientX), (e.y = t.clientY)),
        e
      );
    }),
    (l.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t));
    }),
    (l.prototype.difference = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }),
    (h.fn.owlCarousel = function (e) {
      var s = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var t = h(this),
          i = t.data("owl.carousel");
        i ||
          ((i = new l(this, "object" == typeof e && e)),
          t.data("owl.carousel", i),
          h.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (t, e) {
              i.register({ type: l.Type.Event, name: e }),
                i.$element.on(
                  e + ".owl.carousel.core",
                  h.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([e]),
                      i[e].apply(this, [].slice.call(arguments, 1)),
                      this.release([e]));
                  }, i)
                );
            }
          )),
          "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s);
      });
    }),
    (h.fn.owlCarousel.Constructor = l);
})(window.Zepto || window.jQuery, window, document),
  (function (e, i) {
    var s = function (t) {
      (this._core = t),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": e.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = e.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (s.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = i.setInterval(
            e.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (s.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (i.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, o) {
    var e = function (t) {
      (this._core = t),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (t) {
              if (
                t.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((t.property && "position" == t.property.name) ||
                  "initialized" == t.type)
              )
                for (
                  var e = this._core.settings,
                    i = (e.center && Math.ceil(e.items / 2)) || e.items,
                    s = (e.center && -1 * i) || 0,
                    n =
                      (t.property && void 0 !== t.property.value
                        ? t.property.value
                        : this._core.current()) + s,
                    o = this._core.clones().length,
                    r = a.proxy(function (t, e) {
                      this.load(e);
                    }, this);
                  s++ < i;

                )
                  this.load(o / 2 + this._core.relative(n)),
                    o && a.each(this._core.clones(this._core.relative(n)), r),
                    n++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
          i = e && e.find(".owl-lazy");
        !i ||
          -1 < a.inArray(e.get(0), this._loaded) ||
          (i.each(
            a.proxy(function (t, e) {
              var i,
                s = a(e),
                n =
                  (1 < o.devicePixelRatio && s.attr("data-src-retina")) ||
                  s.attr("data-src");
              this._core.trigger("load", { element: s, url: n }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: n },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", n)
                  : (((i = new Image()).onload = a.proxy(function () {
                      s.css({
                        "background-image": 'url("' + n + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: n },
                          "lazy"
                        );
                    }, this)),
                    (i.src = n));
            }, this)
          ),
          this._loaded.push(e.get(0)));
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (o) {
    var e = function (t) {
      (this._core = t),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = o.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var t,
          e = this._core._current,
          i = e + this._core.settings.items,
          s = this._core.$stage.children().toArray().slice(e, i),
          n = [];
        o.each(s, function (t, e) {
          n.push(o(e).height());
        }),
          (t = Math.max.apply(null, n)),
          this._core.$stage
            .parent()
            .height(t)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (c, e) {
    var i = function (t) {
      (this._core = t),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": c.proxy(function (t) {
            var e;
            !t.namespace ||
              ((e = c(t.content).find(".owl-video")).length &&
                (e.css("display", "none"), this.fetch(e, c(t.content))));
          }, this),
        }),
        (this._core.options = c.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          c.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (i.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          -1 <
          (s = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu")
        )
          i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
          if (!(-1 < s[3].indexOf("vzaar")))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (s = s[6]),
          (this._videos[r] = { type: i, id: s, width: n, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (i.prototype.thumbnail = function (e, t) {
        function i(t) {
          (s = l.lazyLoad
            ? '<div class="owl-video-tn ' + h + '" ' + a + '="' + t + '"></div>'
            : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
              t +
              ')"></div>'),
            e.after(s),
            e.after('<div class="owl-video-play-icon"></div>');
        }
        var s,
          n,
          o =
            t.width && t.height
              ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"'
              : "",
          r = e.find("img"),
          a = "src",
          h = "",
          l = this._core.settings;
        if (
          (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"),
          this._core.settings.lazyLoad && ((a = "data-src"), (h = "owl-lazy")),
          r.length)
        )
          return i(r.attr(a)), r.remove(), !1;
        "youtube" === t.type
          ? ((n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), i(n))
          : "vimeo" === t.type
          ? c.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t[0].thumbnail_large), i(n);
              },
            })
          : "vzaar" === t.type &&
            c.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t.framegrab_url), i(n);
              },
            });
      }),
      (i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (i.prototype.play = function (t) {
        var e,
          i = c(t.target).closest("." + this._core.settings.itemClass),
          s = this._videos[i.attr("data-video")],
          n = s.width || "100%",
          o = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          "youtube" === s.type
            ? (e =
                '<iframe width="' +
                n +
                '" height="' +
                o +
                '" src="//www.youtube.com/embed/' +
                s.id +
                "?autoplay=1&rel=0&v=" +
                s.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === s.type
            ? (e =
                '<iframe src="//player.vimeo.com/video/' +
                s.id +
                '?autoplay=1" width="' +
                n +
                '" height="' +
                o +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === s.type &&
              (e =
                '<iframe frameborder="0"height="' +
                o +
                '"width="' +
                n +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                s.id +
                '/player?autoplay=true"></iframe>'),
          c('<div class="owl-video-frame">' + e + "</div>").insertAfter(
            i.find(".owl-video")
          ),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (i.prototype.isInFullScreen = function () {
        var t =
          e.fullscreenElement ||
          e.mozFullScreenElement ||
          e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame");
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (c.fn.owlCarousel.Constructor.Plugins.Video = i);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (r) {
    var e = function (t) {
      (this.core = t),
        (this.core.options = r.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = void 0),
        (this.next = void 0),
        (this.handlers = {
          "change.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            r.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        var t, e, i, s, n, o;
        1 === this.core.settings.items &&
          r.support.animation &&
          r.support.transition &&
          (this.core.speed(0),
          (e = r.proxy(this.clear, this)),
          (i = this.core.$stage.children().eq(this.previous)),
          (s = this.core.$stage.children().eq(this.next)),
          (n = this.core.settings.animateIn),
          (o = this.core.settings.animateOut),
          this.core.current() !== this.previous &&
            (o &&
              ((t =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(r.support.animation.end, e)
                .css({ left: t + "px" })
                .addClass("animated owl-animated-out")
                .addClass(o)),
            n &&
              s
                .one(r.support.animation.end, e)
                .addClass("animated owl-animated-in")
                .addClass(n)));
      }),
      (e.prototype.clear = function (t) {
        r(t.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (r.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (i, s, n) {
    var e = function (t) {
      (this._core = t),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": i.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": i.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": i.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": i.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": i.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = i.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (t, e) {
        return (
          this._timeout && s.clearTimeout(this._timeout),
          s.setTimeout(
            i.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                n.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            t || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (s.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (i.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (o) {
    "use strict";
    var e = function (t) {
      (this._core = t),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  o(t.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = o.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var t,
          i = this._core.settings;
        for (t in ((this._controls.$relative = (
          i.navContainer
            ? o(i.navContainer)
            : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = o("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = o("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            o("<div>")
              .addClass(i.dotClass)
              .append(o("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? o(i.dotsContainer)
            : o("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "div",
          o.proxy(function (t) {
            var e = o(t.target).parent().is(this._controls.$absolute)
              ? o(t.target).index()
              : o(t.target).parent().index();
            t.preventDefault(), this.to(e, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[t] = o.proxy(this[t], this);
      }),
      (e.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (e.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          s = i + this._core.items().length,
          n = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0; t < s; t++) {
            if (r <= e || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(n, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(n, t - i) === n)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (e.prototype.draw = function () {
        var t,
          e = this._core.settings,
          i = this._core.items().length <= e.items,
          s = this._core.relative(this._core.current()),
          n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i),
          e.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !n && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !n && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !e.dots || i),
          e.dots &&
            ((t =
              this._pages.length - this._controls.$absolute.children().length),
            e.dotsData && 0 != t
              ? this._controls.$absolute.html(this._templates.join(""))
              : 0 < t
              ? this._controls.$absolute.append(
                  new Array(1 + t).join(this._templates[0])
                )
              : t < 0 && this._controls.$absolute.children().slice(t).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(o.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
          index: o.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            e &&
            (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items),
        };
      }),
      (e.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o
          .grep(
            this._pages,
            o.proxy(function (t, e) {
              return t.start <= i && t.end >= i;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (t) {
        var e,
          i,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((e = o.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              t ? ++e : --e,
              (e = this._pages[((e % i) + i) % i].start))
            : ((e = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              t ? (e += s.slideBy) : (e -= s.slideBy)),
          e
        );
      }),
      (e.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
      }),
      (e.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
      }),
      (e.prototype.to = function (t, e, i) {
        var s;
        !i && this._pages.length
          ? ((s = this._pages.length),
            o.proxy(this._overrides.to, this._core)(
              this._pages[((t % s) + s) % s].start,
              e
            ))
          : o.proxy(this._overrides.to, this._core)(t, e);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (s, n) {
    "use strict";
    var e = function (t) {
      (this._core = t),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (t) {
            t.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              s(n).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": s.proxy(function (t) {
            if (t.namespace) {
              var e = s(t.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!e) return;
              this._hashes[e] = t.content;
            }
          }, this),
          "changed.owl.carousel": s.proxy(function (t) {
            if (t.namespace && "position" === t.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = s
                  .map(this._hashes, function (t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!e || n.location.hash.slice(1) === e) return;
              n.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = s.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        s(n).on(
          "hashchange.owl.navigation",
          s.proxy(function (t) {
            var e = n.location.hash.substring(1),
              i = this._core.$stage.children(),
              s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in (s(n).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (n, o) {
    function e(t, i) {
      var s = !1,
        e = t.charAt(0).toUpperCase() + t.slice(1);
      return (
        n.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
          if (r[e] !== o) return (s = !i || e), !1;
        }),
        s
      );
    }
    function t(t) {
      return e(t, !0);
    }
    var r = n("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      s = function () {
        return !!e("transform");
      },
      h = function () {
        return !!e("perspective");
      },
      l = function () {
        return !!e("animation");
      };
    !(function () {
      return !!e("transition");
    })() ||
      ((n.support.transition = new String(t("transition"))),
      (n.support.transition.end = i.transition.end[n.support.transition])),
      l() &&
        ((n.support.animation = new String(t("animation"))),
        (n.support.animation.end = i.animation.end[n.support.animation])),
      s() &&
        ((n.support.transform = new String(t("transform"))),
        (n.support.transform3d = h()));
  })(window.Zepto || window.jQuery, (window, void document));
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipe = t());
})(this, function () {
  "use strict";
  return function (m, i, e, t) {
    var f = {
      features: null,
      bind: function (e, t, n, i) {
        var o = (i ? "remove" : "add") + "EventListener";
        t = t.split(" ");
        for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1);
      },
      isArray: function (e) {
        return e instanceof Array;
      },
      createEl: function (e, t) {
        var n = document.createElement(t || "div");
        return e && (n.className = e), n;
      },
      getScrollY: function () {
        var e = window.pageYOffset;
        return void 0 !== e ? e : document.documentElement.scrollTop;
      },
      unbind: function (e, t, n) {
        f.bind(e, t, n, !0);
      },
      removeClass: function (e, t) {
        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className
          .replace(n, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      },
      addClass: function (e, t) {
        f.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
      },
      hasClass: function (e, t) {
        return (
          e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
        );
      },
      getChildByClass: function (e, t) {
        for (var n = e.firstChild; n; ) {
          if (f.hasClass(n, t)) return n;
          n = n.nextSibling;
        }
      },
      arraySearch: function (e, t, n) {
        for (var i = e.length; i--; ) if (e[i][n] === t) return i;
        return -1;
      },
      extend: function (e, t, n) {
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            if (n && e.hasOwnProperty(i)) continue;
            e[i] = t[i];
          }
      },
      easing: {
        sine: {
          out: function (e) {
            return Math.sin(e * (Math.PI / 2));
          },
          inOut: function (e) {
            return -(Math.cos(Math.PI * e) - 1) / 2;
          },
        },
        cubic: {
          out: function (e) {
            return --e * e * e + 1;
          },
        },
      },
      detectFeatures: function () {
        if (f.features) return f.features;
        var e,
          t,
          n,
          i,
          o = f.createEl().style,
          a = "",
          r = {};
        (r.oldIE = document.all && !document.addEventListener),
          (r.touch = "ontouchstart" in window),
          window.requestAnimationFrame &&
            ((r.raf = window.requestAnimationFrame),
            (r.caf = window.cancelAnimationFrame)),
          (r.pointerEvent =
            navigator.pointerEnabled || navigator.msPointerEnabled),
          r.pointerEvent ||
            ((e = navigator.userAgent),
            !/iP(hone|od)/.test(navigator.platform) ||
              ((t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
                0 < t.length &&
                1 <= (t = parseInt(t[1], 10)) &&
                t < 8 &&
                (r.isOldIOSPhone = !0)),
            (i = (n = e.match(/Android\s([0-9\.]*)/)) ? n[1] : 0),
            1 <= (i = parseFloat(i)) &&
              (i < 4.4 && (r.isOldAndroid = !0), (r.androidVersion = i)),
            (r.isMobileOpera = /opera mini|opera mobi/i.test(e)));
        for (
          var l,
            s,
            u,
            c = ["transform", "perspective", "animationName"],
            d = ["", "webkit", "Moz", "ms", "O"],
            p = 0;
          p < 4;
          p++
        ) {
          a = d[p];
          for (var m = 0; m < 3; m++)
            (l = c[m]),
              (s = a + (a ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
              !r[l] && s in o && (r[l] = s);
          a &&
            !r.raf &&
            ((a = a.toLowerCase()),
            (r.raf = window[a + "RequestAnimationFrame"]),
            r.raf &&
              (r.caf =
                window[a + "CancelAnimationFrame"] ||
                window[a + "CancelRequestAnimationFrame"]));
        }
        return (
          r.raf ||
            ((u = 0),
            (r.raf = function (e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - u)),
                i = window.setTimeout(function () {
                  e(t + n);
                }, n);
              return (u = t + n), i;
            }),
            (r.caf = function (e) {
              clearTimeout(e);
            })),
          (r.svg =
            !!document.createElementNS &&
            !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect),
          (f.features = r)
        );
      },
    };
    f.detectFeatures(),
      f.features.oldIE &&
        (f.bind = function (e, t, n, i) {
          t = t.split(" ");
          for (
            var o,
              a = (i ? "detach" : "attach") + "Event",
              r = function () {
                n.handleEvent.call(n);
              },
              l = 0;
            l < t.length;
            l++
          )
            if ((o = t[l]))
              if ("object" == typeof n && n.handleEvent) {
                if (i) {
                  if (!n["oldIE" + o]) return !1;
                } else n["oldIE" + o] = r;
                e[a]("on" + o, n["oldIE" + o]);
              } else e[a]("on" + o, n);
        });
    var h = this,
      y = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (e) {
          return "A" === e.tagName;
        },
        getDoubleTapZoom: function (e, t) {
          return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit",
      };
    f.extend(y, t);
    function n() {
      return { x: 0, y: 0 };
    }
    function o(e, t) {
      f.extend(h, t.publicMethods), je.push(e);
    }
    function s(e) {
      var t = Vt();
      return t - 1 < e ? e - t : e < 0 ? t + e : e;
    }
    function a(e, t) {
      return et[e] || (et[e] = []), et[e].push(t);
    }
    function x(e) {
      var t = et[e];
      if (t) {
        var n = Array.prototype.slice.call(arguments);
        n.shift();
        for (var i = 0; i < t.length; i++) t[i].apply(h, n);
      }
    }
    function v() {
      return new Date().getTime();
    }
    function g(e) {
      (Ne = e), (h.bg.style.opacity = e * y.bgOpacity);
    }
    function r(e, t, n, i, o) {
      (!Qe || (o && o !== h.currItem)) &&
        (i /= o ? o.fitRatio : h.currItem.fitRatio),
        (e[le] = j + t + "px, " + n + "px" + J + " scale(" + i + ")");
    }
    function c(e, t) {
      var n, i;
      !y.loop &&
        t &&
        ((n = W + (Ke.x * Xe - e) / Ke.x),
        (i = Math.round(e - bt.x)),
        ((n < 0 && 0 < i) || (n >= Vt() - 1 && i < 0)) &&
          (e = bt.x + i * y.mainScrollEndFriction)),
        (bt.x = e),
        it(e, B);
    }
    function w(e, t) {
      var n = It[e] - Ve[e];
      return We[e] + Ye[e] + n - (t / $) * n;
    }
    function b(e, t) {
      (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
    }
    function I(e) {
      (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
    }
    function d(e, t) {
      var n = Jt(h.currItem, Ge, e);
      return t && (Ze = n), n;
    }
    function C(e) {
      return (e = e || h.currItem).initialZoomLevel;
    }
    function D(e) {
      return 0 < (e = e || h.currItem).w ? y.maxSpreadZoom : 1;
    }
    function p(e, t, n, i) {
      return i === h.currItem.initialZoomLevel
        ? ((n[e] = h.currItem.initialPosition[e]), !0)
        : ((n[e] = w(e, i)),
          n[e] > t.min[e]
            ? ((n[e] = t.min[e]), !0)
            : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
    }
    function l(e) {
      var t = "";
      y.escKey && 27 === e.keyCode
        ? (t = "close")
        : y.arrowKeys &&
          (37 === e.keyCode ? (t = "prev") : 39 === e.keyCode && (t = "next")),
        t &&
          (e.ctrlKey ||
            e.altKey ||
            e.shiftKey ||
            e.metaKey ||
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            h[t]()));
    }
    function u(e) {
      e && (Se || Me || Fe || Ie) && (e.preventDefault(), e.stopPropagation());
    }
    function T() {
      h.setScrollOffset(0, f.getScrollY());
    }
    function M(e) {
      rt[e] && (rt[e].raf && de(rt[e].raf), lt--, delete rt[e]);
    }
    function S(e) {
      rt[e] && M(e), rt[e] || (lt++, (rt[e] = {}));
    }
    function A() {
      for (var e in rt) rt.hasOwnProperty(e) && M(e);
    }
    function E(e, t, n, i, o, a, r) {
      var l,
        s = v();
      S(e);
      var u = function () {
        if (rt[e]) {
          if (((l = v() - s), i <= l)) return M(e), a(n), void (r && r());
          a((n - t) * o(l / i) + t), (rt[e].raf = ce(u));
        }
      };
      u();
    }
    function O(e, t) {
      return (
        (xt.x = Math.abs(e.x - t.x)),
        (xt.y = Math.abs(e.y - t.y)),
        Math.sqrt(xt.x * xt.x + xt.y * xt.y)
      );
    }
    function k(e, t) {
      return (
        (St.prevent = !Mt(e.target, y.isClickableElement)),
        x("preventDragEvent", e, t, St),
        St.prevent
      );
    }
    function R(e, t) {
      return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
    }
    function Z(e, t, n) {
      (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
    }
    function P() {
      var e = Be.y - h.currItem.initialPosition.y;
      return 1 - Math.abs(e / (Ge.y / 2));
    }
    function F(e) {
      for (; 0 < Ot.length; ) Ot.pop();
      return (
        se
          ? ((He = 0),
            ft.forEach(function (e) {
              0 === He ? (Ot[0] = e) : 1 === He && (Ot[1] = e), He++;
            }))
          : -1 < e.type.indexOf("touch")
          ? e.touches &&
            0 < e.touches.length &&
            ((Ot[0] = R(e.touches[0], At)),
            1 < e.touches.length && (Ot[1] = R(e.touches[1], Et)))
          : ((At.x = e.pageX), (At.y = e.pageY), (At.id = ""), (Ot[0] = At)),
        Ot
      );
    }
    function L(e, t) {
      var n,
        i,
        o,
        a = Be[e] + t[e],
        r = 0 < t[e],
        l = bt.x + t.x,
        s = bt.x - ht.x,
        u = a > Ze.min[e] || a < Ze.max[e] ? y.panEndFriction : 1,
        a = Be[e] + t[e] * u;
      if (
        (y.allowPanToNext || q === h.currItem.initialZoomLevel) &&
        (Pe
          ? "h" !== Le ||
            "x" !== e ||
            Me ||
            (r
              ? (a > Ze.min[e] &&
                  ((u = y.panEndFriction), Ze.min[e], (n = Ze.min[e] - We[e])),
                (n <= 0 || s < 0) && 1 < Vt()
                  ? ((o = l), s < 0 && l > ht.x && (o = ht.x))
                  : Ze.min.x !== Ze.max.x && (i = a))
              : (a < Ze.max[e] &&
                  ((u = y.panEndFriction), Ze.max[e], (n = We[e] - Ze.max[e])),
                (n <= 0 || 0 < s) && 1 < Vt()
                  ? ((o = l), 0 < s && l < ht.x && (o = ht.x))
                  : Ze.min.x !== Ze.max.x && (i = a)))
          : (o = l),
        "x" === e)
      )
        return (
          void 0 !== o && (c(o, !0), (Ee = o !== ht.x)),
          Ze.min.x !== Ze.max.x &&
            (void 0 !== i ? (Be.x = i) : Ee || (Be.x += t.x * u)),
          void 0 !== o
        );
      Fe || Ee || (q > h.currItem.fitRatio && (Be[e] += t[e] * u));
    }
    function z(e) {
      var t, n, i;
      ("mousedown" === e.type && 0 < e.button) ||
        (Gt
          ? e.preventDefault()
          : (Ce && "mousedown" === e.type) ||
            (k(e, !0) && e.preventDefault(),
            x("pointerDown"),
            se &&
              ((t = f.arraySearch(ft, e.pointerId, "id")) < 0 &&
                (t = ft.length),
              (ft[t] = { x: e.pageX, y: e.pageY, id: e.pointerId })),
            (i = (n = F(e)).length),
            (Oe = null),
            A(),
            (De && 1 !== i) ||
              ((De = ze = !0),
              f.bind(window, X, h),
              (be = Ue = _e = Ie = Ee = Se = Te = Me = !1),
              (Le = null),
              x("firstTouchStart", n),
              b(We, Be),
              (Ye.x = Ye.y = 0),
              b(pt, n[0]),
              b(mt, pt),
              (ht.x = Ke.x * Xe),
              (yt = [{ x: pt.x, y: pt.y }]),
              (ge = ve = v()),
              d(q, !0),
              Dt(),
              Tt()),
            !ke &&
              1 < i &&
              !Fe &&
              !Ee &&
              (($ = q),
              (ke = Te = !(Me = !1)),
              (Ye.y = Ye.x = 0),
              b(We, Be),
              b(ut, n[0]),
              b(ct, n[1]),
              Z(ut, ct, Ct),
              (It.x = Math.abs(Ct.x) - Be.x),
              (It.y = Math.abs(Ct.y) - Be.y),
              (Re = O(ut, ct)))));
    }
    function _(e) {
      var t, n, i, o;
      e.preventDefault(),
        !se ||
          (-1 < (t = f.arraySearch(ft, e.pointerId, "id")) &&
            (((n = ft[t]).x = e.pageX), (n.y = e.pageY))),
        De &&
          ((i = F(e)),
          Le || Se || ke
            ? (Oe = i)
            : bt.x !== Ke.x * Xe
            ? (Le = "h")
            : ((o = Math.abs(i[0].x - pt.x) - Math.abs(i[0].y - pt.y)),
              10 <= Math.abs(o) && ((Le = 0 < o ? "h" : "v"), (Oe = i))));
    }
    function N(e) {
      if (ye.isOldAndroid) {
        if (Ce && "mouseup" === e.type) return;
        -1 < e.type.indexOf("touch") &&
          (clearTimeout(Ce),
          (Ce = setTimeout(function () {
            Ce = 0;
          }, 600)));
      }
      var t, n;
      x("pointerUp"),
        k(e, !1) && e.preventDefault(),
        !se ||
          (-1 < (t = f.arraySearch(ft, e.pointerId, "id")) &&
            ((n = ft.splice(t, 1)[0]),
            navigator.pointerEnabled
              ? (n.type = e.pointerType || "mouse")
              : ((n.type = { 4: "mouse", 2: "touch", 3: "pen" }[e.pointerType]),
                n.type || (n.type = e.pointerType || "mouse"))));
      var i,
        o = F(e),
        a = o.length;
      if (("mouseup" === e.type && (a = 0), 2 === a)) return !(Oe = null);
      1 === a && b(mt, o[0]),
        0 !== a ||
          Le ||
          Fe ||
          (n ||
            ("mouseup" === e.type
              ? (n = { x: e.pageX, y: e.pageY, type: "mouse" })
              : e.changedTouches &&
                e.changedTouches[0] &&
                (n = {
                  x: e.changedTouches[0].pageX,
                  y: e.changedTouches[0].pageY,
                  type: "touch",
                })),
          x("touchRelease", e, n));
      var r,
        l,
        s = -1;
      if (
        (0 === a &&
          ((De = !1),
          f.unbind(window, X, h),
          Dt(),
          ke ? (s = 0) : -1 !== wt && (s = v() - wt)),
        (wt = 1 === a ? v() : -1),
        (i = -1 !== s && s < 150 ? "zoom" : "swipe"),
        ke &&
          a < 2 &&
          ((ke = !1), 1 === a && (i = "zoomPointerUp"), x("zoomGestureEnded")),
        (Oe = null),
        Se || Me || Fe || Ie)
      )
        if ((A(), (we = we || Rt()).calculateSwipeSpeed("x"), Ie)) {
          P() < y.verticalDragRange
            ? h.close()
            : ((r = Be.y),
              (l = Ne),
              E("verticalDrag", 0, 1, 300, f.easing.cubic.out, function (e) {
                (Be.y = (h.currItem.initialPosition.y - r) * e + r),
                  g((1 - l) * e + l),
                  tt();
              }),
              x("onVerticalDrag", 1));
        } else {
          if ((Ee || Fe) && 0 === a) {
            if (Pt(i, we)) return;
            i = "zoomPointerUp";
          }
          Fe ||
            ("swipe" === i ? !Ee && q > h.currItem.fitRatio && Zt(we) : Lt());
        }
    }
    var U,
      H,
      Y,
      W,
      B,
      G,
      X,
      V,
      K,
      q,
      $,
      j,
      J,
      Q,
      ee,
      te,
      ne,
      ie,
      oe,
      ae,
      re,
      le,
      se,
      ue,
      ce,
      de,
      pe,
      me,
      fe,
      he,
      ye,
      xe,
      ve,
      ge,
      we,
      be,
      Ie,
      Ce,
      De,
      Te,
      Me,
      Se,
      Ae,
      Ee,
      Oe,
      ke,
      Re,
      Ze,
      Pe,
      Fe,
      Le,
      ze,
      _e,
      Ne,
      Ue,
      He,
      Ye = n(),
      We = n(),
      Be = n(),
      Ge = {},
      Xe = 0,
      Ve = {},
      Ke = n(),
      qe = 0,
      $e = !0,
      je = [],
      Je = {},
      Qe = !1,
      et = {},
      tt = function (e) {
        Pe &&
          (e &&
            (q > h.currItem.fitRatio
              ? Qe || (Qt(h.currItem, !1, !0), (Qe = !0))
              : Qe && (Qt(h.currItem), (Qe = !1))),
          r(Pe, Be.x, Be.y, q));
      },
      nt = function (e) {
        e.container &&
          r(
            e.container.style,
            e.initialPosition.x,
            e.initialPosition.y,
            e.initialZoomLevel,
            e
          );
      },
      it = function (e, t) {
        t[le] = j + e + "px, 0px" + J;
      },
      ot = null,
      at = function () {
        ot &&
          (f.unbind(document, "mousemove", at),
          f.addClass(m, "pswp--has_mouse"),
          (y.mouseUsed = !0),
          x("mouseUsed")),
          (ot = setTimeout(function () {
            ot = null;
          }, 100));
      },
      rt = {},
      lt = 0,
      st = {
        shout: x,
        listen: a,
        viewportSize: Ge,
        options: y,
        isMainScrollAnimating: function () {
          return Fe;
        },
        getZoomLevel: function () {
          return q;
        },
        getCurrentIndex: function () {
          return W;
        },
        isDragging: function () {
          return De;
        },
        isZooming: function () {
          return ke;
        },
        setScrollOffset: function (e, t) {
          (Ve.x = e), (he = Ve.y = t), x("updateScrollOffset", Ve);
        },
        applyZoomPan: function (e, t, n, i) {
          (Be.x = t), (Be.y = n), (q = e), tt(i);
        },
        init: function () {
          if (!U && !H) {
            var e;
            (h.framework = f),
              (h.template = m),
              (h.bg = f.getChildByClass(m, "pswp__bg")),
              (pe = m.className),
              (U = !0),
              (ye = f.detectFeatures()),
              (ce = ye.raf),
              (de = ye.caf),
              (le = ye.transform),
              (fe = ye.oldIE),
              (h.scrollWrap = f.getChildByClass(m, "pswp__scroll-wrap")),
              (h.container = f.getChildByClass(
                h.scrollWrap,
                "pswp__container"
              )),
              (B = h.container.style),
              (h.itemHolders = te =
                [
                  { el: h.container.children[0], wrap: 0, index: -1 },
                  { el: h.container.children[1], wrap: 0, index: -1 },
                  { el: h.container.children[2], wrap: 0, index: -1 },
                ]),
              (te[0].el.style.display = te[2].el.style.display = "none"),
              (function () {
                if (le) {
                  var e = ye.perspective && !ue;
                  return (
                    (j = "translate" + (e ? "3d(" : "(")),
                    (J = ye.perspective ? ", 0px)" : ")")
                  );
                }
                (le = "left"),
                  f.addClass(m, "pswp--ie"),
                  (it = function (e, t) {
                    t.left = e + "px";
                  }),
                  (nt = function (e) {
                    var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                      n = e.container.style,
                      i = t * e.w,
                      o = t * e.h;
                    (n.width = i + "px"),
                      (n.height = o + "px"),
                      (n.left = e.initialPosition.x + "px"),
                      (n.top = e.initialPosition.y + "px");
                  }),
                  (tt = function () {
                    var e, t, n, i, o;
                    Pe &&
                      ((e = Pe),
                      (i =
                        (n = 1 < (t = h.currItem).fitRatio ? 1 : t.fitRatio) *
                        t.w),
                      (o = n * t.h),
                      (e.width = i + "px"),
                      (e.height = o + "px"),
                      (e.left = Be.x + "px"),
                      (e.top = Be.y + "px"));
                  });
              })(),
              (K = {
                resize: h.updateSize,
                orientationchange: function () {
                  clearTimeout(xe),
                    (xe = setTimeout(function () {
                      Ge.x !== h.scrollWrap.clientWidth && h.updateSize();
                    }, 500));
                },
                scroll: T,
                keydown: l,
                click: u,
              });
            var t = ye.isOldIOSPhone || ye.isOldAndroid || ye.isMobileOpera;
            for (
              (ye.animationName && ye.transform && !t) ||
                (y.showAnimationDuration = y.hideAnimationDuration = 0),
                e = 0;
              e < je.length;
              e++
            )
              h["init" + je[e]]();
            i && (h.ui = new i(h, f)).init(),
              x("firstUpdate"),
              (W = W || y.index || 0),
              (isNaN(W) || W < 0 || W >= Vt()) && (W = 0),
              (h.currItem = Xt(W)),
              (ye.isOldIOSPhone || ye.isOldAndroid) && ($e = !1),
              m.setAttribute("aria-hidden", "false"),
              y.modal &&
                ($e
                  ? (m.style.position = "fixed")
                  : ((m.style.position = "absolute"),
                    (m.style.top = f.getScrollY() + "px"))),
              void 0 === he && (x("initialLayout"), (he = me = f.getScrollY()));
            var n = "pswp--open ";
            for (
              y.mainClass && (n += y.mainClass + " "),
                y.showHideOpacity && (n += "pswp--animate_opacity "),
                n += ue ? "pswp--touch" : "pswp--notouch",
                n += ye.animationName ? " pswp--css_animation" : "",
                n += ye.svg ? " pswp--svg" : "",
                f.addClass(m, n),
                h.updateSize(),
                G = -1,
                qe = null,
                e = 0;
              e < 3;
              e++
            )
              it((e + G) * Ke.x, te[e].el.style);
            fe || f.bind(h.scrollWrap, V, h),
              a("initialZoomInEnd", function () {
                h.setContent(te[0], W - 1),
                  h.setContent(te[2], W + 1),
                  (te[0].el.style.display = te[2].el.style.display = "block"),
                  y.focus && m.focus(),
                  f.bind(document, "keydown", h),
                  ye.transform && f.bind(h.scrollWrap, "click", h),
                  y.mouseUsed || f.bind(document, "mousemove", at),
                  f.bind(window, "resize scroll orientationchange", h),
                  x("bindEvents");
              }),
              h.setContent(te[1], W),
              h.updateCurrItem(),
              x("afterInit"),
              $e ||
                (Q = setInterval(function () {
                  lt ||
                    De ||
                    ke ||
                    q !== h.currItem.initialZoomLevel ||
                    h.updateSize();
                }, 1e3)),
              f.addClass(m, "pswp--visible");
          }
        },
        close: function () {
          U &&
            ((H = !(U = !1)),
            x("close"),
            f.unbind(window, "resize scroll orientationchange", h),
            f.unbind(window, "scroll", K.scroll),
            f.unbind(document, "keydown", h),
            f.unbind(document, "mousemove", at),
            ye.transform && f.unbind(h.scrollWrap, "click", h),
            De && f.unbind(window, X, h),
            clearTimeout(xe),
            x("unbindEvents"),
            Kt(h.currItem, null, !0, h.destroy));
        },
        destroy: function () {
          x("destroy"),
            Yt && clearTimeout(Yt),
            m.setAttribute("aria-hidden", "true"),
            (m.className = pe),
            Q && clearInterval(Q),
            f.unbind(h.scrollWrap, V, h),
            f.unbind(window, "scroll", h),
            Dt(),
            A(),
            (et = null);
        },
        panTo: function (e, t, n) {
          n ||
            (e > Ze.min.x ? (e = Ze.min.x) : e < Ze.max.x && (e = Ze.max.x),
            t > Ze.min.y ? (t = Ze.min.y) : t < Ze.max.y && (t = Ze.max.y)),
            (Be.x = e),
            (Be.y = t),
            tt();
        },
        handleEvent: function (e) {
          (e = e || window.event), K[e.type] && K[e.type](e);
        },
        goTo: function (e) {
          var t = (e = s(e)) - W;
          (qe = t),
            (W = e),
            (h.currItem = Xt(W)),
            (Xe -= t),
            c(Ke.x * Xe),
            A(),
            (Fe = !1),
            h.updateCurrItem();
        },
        next: function () {
          h.goTo(W + 1);
        },
        prev: function () {
          h.goTo(W - 1);
        },
        updateCurrZoomItem: function (e) {
          var t;
          e && x("beforeChange", 0),
            (Pe = te[1].el.children.length
              ? ((t = te[1].el.children[0]),
                f.hasClass(t, "pswp__zoom-wrap") ? t.style : null)
              : null),
            (Ze = h.currItem.bounds),
            ($ = q = h.currItem.initialZoomLevel),
            (Be.x = Ze.center.x),
            (Be.y = Ze.center.y),
            e && x("afterChange");
        },
        invalidateCurrItems: function () {
          ee = !0;
          for (var e = 0; e < 3; e++)
            te[e].item && (te[e].item.needsUpdate = !0);
        },
        updateCurrItem: function (e) {
          if (0 !== qe) {
            var t,
              n = Math.abs(qe);
            if (!(e && n < 2)) {
              (h.currItem = Xt(W)),
                (Qe = !1),
                x("beforeChange", qe),
                3 <= n && ((G += qe + (0 < qe ? -3 : 3)), (n = 3));
              for (var i, o = 0; o < n; o++)
                0 < qe
                  ? ((t = te.shift()),
                    (te[2] = t),
                    it((++G + 2) * Ke.x, t.el.style),
                    h.setContent(t, W - n + o + 1 + 1))
                  : ((t = te.pop()),
                    te.unshift(t),
                    it(--G * Ke.x, t.el.style),
                    h.setContent(t, W + n - o - 1 - 1));
              !Pe ||
                1 !== Math.abs(qe) ||
                ((i = Xt(ne)).initialZoomLevel !== q &&
                  (Jt(i, Ge), Qt(i), nt(i))),
                (qe = 0),
                h.updateCurrZoomItem(),
                (ne = W),
                x("afterChange");
            }
          }
        },
        updateSize: function (e) {
          if (!$e && y.modal) {
            var t = f.getScrollY();
            if (
              (he !== t && ((m.style.top = t + "px"), (he = t)),
              !e && Je.x === window.innerWidth && Je.y === window.innerHeight)
            )
              return;
            (Je.x = window.innerWidth),
              (Je.y = window.innerHeight),
              (m.style.height = Je.y + "px");
          }
          if (
            ((Ge.x = h.scrollWrap.clientWidth),
            (Ge.y = h.scrollWrap.clientHeight),
            T(),
            (Ke.x = Ge.x + Math.round(Ge.x * y.spacing)),
            (Ke.y = Ge.y),
            c(Ke.x * Xe),
            x("beforeResize"),
            void 0 !== G)
          ) {
            for (var n, i, o, a = 0; a < 3; a++)
              (n = te[a]),
                it((a + G) * Ke.x, n.el.style),
                (o = W + a - 1),
                y.loop && 2 < Vt() && (o = s(o)),
                (i = Xt(o)) && (ee || i.needsUpdate || !i.bounds)
                  ? (h.cleanSlide(i),
                    h.setContent(n, o),
                    1 === a && ((h.currItem = i), h.updateCurrZoomItem(!0)),
                    (i.needsUpdate = !1))
                  : -1 === n.index && 0 <= o && h.setContent(n, o),
                i && i.container && (Jt(i, Ge), Qt(i), nt(i));
            ee = !1;
          }
          ($ = q = h.currItem.initialZoomLevel),
            (Ze = h.currItem.bounds) &&
              ((Be.x = Ze.center.x), (Be.y = Ze.center.y), tt(!0)),
            x("resize");
        },
        zoomTo: function (t, e, n, i, o) {
          e &&
            (($ = q),
            (It.x = Math.abs(e.x) - Be.x),
            (It.y = Math.abs(e.y) - Be.y),
            b(We, Be));
          var a = d(t, !1),
            r = {};
          p("x", a, r, t), p("y", a, r, t);
          var l = q,
            s = Be.x,
            u = Be.y;
          I(r);
          function c(e) {
            1 === e
              ? ((q = t), (Be.x = r.x), (Be.y = r.y))
              : ((q = (t - l) * e + l),
                (Be.x = (r.x - s) * e + s),
                (Be.y = (r.y - u) * e + u)),
              o && o(e),
              tt(1 === e);
          }
          n ? E("customZoomTo", 0, 1, n, i || f.easing.sine.inOut, c) : c(1);
        },
      },
      ut = {},
      ct = {},
      dt = {},
      pt = {},
      mt = {},
      ft = [],
      ht = {},
      yt = [],
      xt = {},
      vt = 0,
      gt = n(),
      wt = 0,
      bt = n(),
      It = n(),
      Ct = n(),
      Dt = function () {
        Ae && (de(Ae), (Ae = null));
      },
      Tt = function () {
        De && ((Ae = ce(Tt)), kt());
      },
      Mt = function (e, t) {
        return (
          !(!e || e === document) &&
          !(
            e.getAttribute("class") &&
            -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")
          ) &&
          (t(e) ? e : Mt(e.parentNode, t))
        );
      },
      St = {},
      At = {},
      Et = {},
      Ot = [],
      kt = function () {
        if (Oe) {
          var e,
            t,
            n,
            i,
            o,
            a,
            r = Oe.length;
          if (0 !== r)
            if (
              (b(ut, Oe[0]),
              (dt.x = ut.x - pt.x),
              (dt.y = ut.y - pt.y),
              ke && 1 < r)
            ) {
              if (
                ((pt.x = ut.x),
                (pt.y = ut.y),
                !dt.x &&
                  !dt.y &&
                  ((o = Oe[1]), (a = ct), o.x === a.x && o.y === a.y))
              )
                return;
              b(ct, Oe[1]), Me || ((Me = !0), x("zoomGestureStarted"));
              var l = O(ut, ct),
                s = Ft(l);
              s >
                h.currItem.initialZoomLevel +
                  h.currItem.initialZoomLevel / 15 && (Ue = !0);
              var u,
                c = 1,
                d = C(),
                p = D();
              s < d
                ? y.pinchToClose && !Ue && $ <= h.currItem.initialZoomLevel
                  ? (g((u = 1 - (d - s) / (d / 1.2))),
                    x("onPinchClose", u),
                    (_e = !0))
                  : (1 < (c = (d - s) / d) && (c = 1), (s = d - c * (d / 3)))
                : p < s &&
                  (1 < (c = (s - p) / (6 * d)) && (c = 1), (s = p + c * d)),
                c < 0 && (c = 0),
                Z(ut, ct, gt),
                (Ye.x += gt.x - Ct.x),
                (Ye.y += gt.y - Ct.y),
                b(Ct, gt),
                (Be.x = w("x", s)),
                (Be.y = w("y", s)),
                (be = q < s),
                (q = s),
                tt();
            } else {
              if (!Le) return;
              if (
                (ze &&
                  ((ze = !1),
                  10 <= Math.abs(dt.x) && (dt.x -= Oe[0].x - mt.x),
                  10 <= Math.abs(dt.y) && (dt.y -= Oe[0].y - mt.y)),
                (pt.x = ut.x),
                (pt.y = ut.y),
                0 === dt.x && 0 === dt.y)
              )
                return;
              if (
                "v" === Le &&
                y.closeOnVerticalDrag &&
                "fit" === y.scaleMode &&
                q === h.currItem.initialZoomLevel
              ) {
                (Ye.y += dt.y), (Be.y += dt.y);
                var m = P();
                return (Ie = !0), x("onVerticalDrag", m), g(m), void tt();
              }
              (e = v()),
                (t = ut.x),
                (n = ut.y),
                50 < e - ge &&
                  (((i = 2 < yt.length ? yt.shift() : {}).x = t),
                  (i.y = n),
                  yt.push(i),
                  (ge = e)),
                (Se = !0),
                (Ze = h.currItem.bounds),
                L("x", dt) || (L("y", dt), I(Be), tt());
            }
        }
      },
      Rt = function () {
        var t,
          n,
          i = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (e) {
              (n =
                1 < yt.length
                  ? ((t = v() - ge + 50), yt[yt.length - 2][e])
                  : ((t = v() - ve), mt[e])),
                (i.lastFlickOffset[e] = pt[e] - n),
                (i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e])),
                20 < i.lastFlickDist[e]
                  ? (i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t)
                  : (i.lastFlickSpeed[e] = 0),
                Math.abs(i.lastFlickSpeed[e]) < 0.1 &&
                  (i.lastFlickSpeed[e] = 0),
                (i.slowDownRatio[e] = 0.95),
                (i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e]),
                (i.speedDecelerationRatio[e] = 1);
            },
            calculateOverBoundsAnimOffset: function (t, e) {
              i.backAnimStarted[t] ||
                (Be[t] > Ze.min[t]
                  ? (i.backAnimDestination[t] = Ze.min[t])
                  : Be[t] < Ze.max[t] && (i.backAnimDestination[t] = Ze.max[t]),
                void 0 !== i.backAnimDestination[t] &&
                  ((i.slowDownRatio[t] = 0.7),
                  (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                  i.speedDecelerationRatioAbs[t] < 0.05 &&
                    ((i.lastFlickSpeed[t] = 0),
                    (i.backAnimStarted[t] = !0),
                    E(
                      "bounceZoomPan" + t,
                      Be[t],
                      i.backAnimDestination[t],
                      e || 300,
                      f.easing.sine.out,
                      function (e) {
                        (Be[t] = e), tt();
                      }
                    ))));
            },
            calculateAnimOffset: function (e) {
              i.backAnimStarted[e] ||
                ((i.speedDecelerationRatio[e] =
                  i.speedDecelerationRatio[e] *
                  (i.slowDownRatio[e] +
                    i.slowDownRatioReverse[e] -
                    (i.slowDownRatioReverse[e] * i.timeDiff) / 10)),
                (i.speedDecelerationRatioAbs[e] = Math.abs(
                  i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]
                )),
                (i.distanceOffset[e] =
                  i.lastFlickSpeed[e] *
                  i.speedDecelerationRatio[e] *
                  i.timeDiff),
                (Be[e] += i.distanceOffset[e]));
            },
            panAnimLoop: function () {
              if (
                rt.zoomPan &&
                ((rt.zoomPan.raf = ce(i.panAnimLoop)),
                (i.now = v()),
                (i.timeDiff = i.now - i.lastNow),
                (i.lastNow = i.now),
                i.calculateAnimOffset("x"),
                i.calculateAnimOffset("y"),
                tt(),
                i.calculateOverBoundsAnimOffset("x"),
                i.calculateOverBoundsAnimOffset("y"),
                i.speedDecelerationRatioAbs.x < 0.05 &&
                  i.speedDecelerationRatioAbs.y < 0.05)
              )
                return (
                  (Be.x = Math.round(Be.x)),
                  (Be.y = Math.round(Be.y)),
                  tt(),
                  void M("zoomPan")
                );
            },
          };
        return i;
      },
      Zt = function (e) {
        if (
          (e.calculateSwipeSpeed("y"),
          (Ze = h.currItem.bounds),
          (e.backAnimDestination = {}),
          (e.backAnimStarted = {}),
          Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(e.lastFlickSpeed.y) <= 0.05)
        )
          return (
            (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0),
            e.calculateOverBoundsAnimOffset("x"),
            e.calculateOverBoundsAnimOffset("y"),
            !0
          );
        S("zoomPan"), (e.lastNow = v()), e.panAnimLoop();
      },
      Pt = function (e, t) {
        var n, i, o, a, r;
        Fe || (vt = W),
          "swipe" === e &&
            ((o = pt.x - mt.x),
            (a = t.lastFlickDist.x < 10),
            30 < o && (a || 20 < t.lastFlickOffset.x)
              ? (i = -1)
              : o < -30 && (a || t.lastFlickOffset.x < -20) && (i = 1)),
          i &&
            ((W += i) < 0
              ? ((W = y.loop ? Vt() - 1 : 0), (r = !0))
              : W >= Vt() && ((W = y.loop ? 0 : Vt() - 1), (r = !0)),
            (r && !y.loop) || ((qe += i), (Xe -= i), (n = !0)));
        var l = Ke.x * Xe,
          s = Math.abs(l - bt.x),
          u =
            n || l > bt.x == 0 < t.lastFlickSpeed.x
              ? ((u =
                  0 < Math.abs(t.lastFlickSpeed.x)
                    ? s / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (u = Math.min(u, 400)),
                Math.max(u, 250))
              : 333;
        return (
          vt === W && (n = !1),
          (Fe = !0),
          x("mainScrollAnimStart"),
          E("mainScroll", bt.x, l, u, f.easing.cubic.out, c, function () {
            A(),
              (Fe = !1),
              (vt = -1),
              (!n && vt === W) || h.updateCurrItem(),
              x("mainScrollAnimComplete");
          }),
          n && h.updateCurrItem(!0),
          n
        );
      },
      Ft = function (e) {
        return (1 / Re) * e * $;
      },
      Lt = function () {
        var e = q,
          t = C(),
          n = D();
        q < t ? (e = t) : n < q && (e = n);
        var i,
          o = Ne;
        return (
          _e && !be && !Ue && q < t
            ? h.close()
            : (_e &&
                (i = function (e) {
                  g((1 - o) * e + o);
                }),
              h.zoomTo(e, 0, 200, f.easing.cubic.out, i)),
          !0
        );
      };
    o("Gestures", {
      publicMethods: {
        initGestures: function () {
          function e(e, t, n, i, o) {
            (ie = e + t), (oe = e + n), (ae = e + i), (re = o ? e + o : "");
          }
          (se = ye.pointerEvent) && ye.touch && (ye.touch = !1),
            se
              ? navigator.pointerEnabled
                ? e("pointer", "down", "move", "up", "cancel")
                : e("MSPointer", "Down", "Move", "Up", "Cancel")
              : ye.touch
              ? (e("touch", "start", "move", "end", "cancel"), (ue = !0))
              : e("mouse", "down", "move", "up"),
            (X = oe + " " + ae + " " + re),
            (V = ie),
            se &&
              !ue &&
              (ue =
                1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints),
            (h.likelyTouchDevice = ue),
            (K[ie] = z),
            (K[oe] = _),
            (K[ae] = N),
            re && (K[re] = K[ae]),
            ye.touch &&
              ((V += " mousedown"),
              (X += " mousemove mouseup"),
              (K.mousedown = K[ie]),
              (K.mousemove = K[oe]),
              (K.mouseup = K[ae])),
            ue || (y.allowPanToNext = !1);
        },
      },
    });
    function zt() {
      return {
        center: { x: 0, y: 0 },
        max: { x: 0, y: 0 },
        min: { x: 0, y: 0 },
      };
    }
    function _t(e, t, n, i, o, a) {
      t.loadError ||
        (i &&
          ((t.imageAppended = !0),
          Qt(t, i, t === h.currItem && Qe),
          n.appendChild(i),
          a &&
            setTimeout(function () {
              t &&
                t.loaded &&
                t.placeholder &&
                ((t.placeholder.style.display = "none"),
                (t.placeholder = null));
            }, 500)));
    }
    function Nt(e) {
      function t() {
        (e.loading = !1),
          (e.loaded = !0),
          e.loadComplete ? e.loadComplete(e) : (e.img = null),
          (n.onload = n.onerror = null),
          (n = null);
      }
      (e.loading = !0), (e.loaded = !1);
      var n = (e.img = f.createEl("pswp__img", "img"));
      return (
        (n.onload = t),
        (n.onerror = function () {
          (e.loadError = !0), t();
        }),
        (n.src = e.src),
        n
      );
    }
    function Ut(e, t) {
      return (
        e.src &&
        e.loadError &&
        e.container &&
        (t && (e.container.innerHTML = ""),
        (e.container.innerHTML = y.errorMsg.replace("%url%", e.src)),
        1)
      );
    }
    function Ht() {
      if ($t.length) {
        for (var e, t = 0; t < $t.length; t++)
          (e = $t[t]).holder.index === e.index &&
            _t(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
        $t = [];
      }
    }
    var Yt,
      Wt,
      Bt,
      Gt,
      Xt,
      Vt,
      Kt = function (r, e, l, t) {
        var s;
        Yt && clearTimeout(Yt),
          (Bt = Gt = !0),
          r.initialLayout
            ? ((s = r.initialLayout), (r.initialLayout = null))
            : (s = y.getThumbBoundsFn && y.getThumbBoundsFn(W));
        function u() {
          M("initialZoom"),
            l
              ? (h.template.removeAttribute("style"),
                h.bg.removeAttribute("style"))
              : (g(1),
                e && (e.style.display = "block"),
                f.addClass(m, "pswp--animated-in"),
                x("initialZoom" + (l ? "OutEnd" : "InEnd"))),
            t && t(),
            (Gt = !1);
        }
        var c = l ? y.hideAnimationDuration : y.showAnimationDuration;
        if (!c || !s || void 0 === s.x)
          return (
            x("initialZoom" + (l ? "Out" : "In")),
            (q = r.initialZoomLevel),
            b(Be, r.initialPosition),
            tt(),
            (m.style.opacity = l ? 0 : 1),
            g(1),
            void (c
              ? setTimeout(function () {
                  u();
                }, c)
              : u())
          );
        var d, p;
        (d = Y),
          (p = !h.currItem.src || h.currItem.loadError || y.showHideOpacity),
          r.miniImg && (r.miniImg.style.webkitBackfaceVisibility = "hidden"),
          l ||
            ((q = s.w / r.w),
            (Be.x = s.x),
            (Be.y = s.y - me),
            (h[p ? "template" : "bg"].style.opacity = 0.001),
            tt()),
          S("initialZoom"),
          l && !d && f.removeClass(m, "pswp--animated-in"),
          p &&
            (l
              ? f[(d ? "remove" : "add") + "Class"](m, "pswp--animate_opacity")
              : setTimeout(function () {
                  f.addClass(m, "pswp--animate_opacity");
                }, 30)),
          (Yt = setTimeout(
            function () {
              var t, n, i, o, a, e;
              x("initialZoom" + (l ? "Out" : "In")),
                l
                  ? ((t = s.w / r.w),
                    (n = Be.x),
                    (i = Be.y),
                    (o = q),
                    (a = Ne),
                    (e = function (e) {
                      1 === e
                        ? ((q = t), (Be.x = s.x), (Be.y = s.y - he))
                        : ((q = (t - o) * e + o),
                          (Be.x = (s.x - n) * e + n),
                          (Be.y = (s.y - he - i) * e + i)),
                        tt(),
                        p ? (m.style.opacity = 1 - e) : g(a - e * a);
                    }),
                    d
                      ? E("initialZoom", 0, 1, c, f.easing.cubic.out, e, u)
                      : (e(1), (Yt = setTimeout(u, c + 20))))
                  : ((q = r.initialZoomLevel),
                    b(Be, r.initialPosition),
                    tt(),
                    g(1),
                    p ? (m.style.opacity = 1) : g(1),
                    (Yt = setTimeout(u, c + 20)));
            },
            l ? 25 : 90
          ));
      },
      qt = {},
      $t = [],
      jt = {
        index: 0,
        errorMsg:
          '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Wt.length;
        },
      },
      Jt = function (e, t, n) {
        if (!e.src || e.loadError)
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = zt()),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        var i,
          o,
          a,
          r,
          l,
          s,
          u,
          c = !n;
        return (
          c &&
            (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
            x("parseVerticalMargin", e)),
          (qt.x = t.x),
          (qt.y = t.y - e.vGap.top - e.vGap.bottom),
          c &&
            ((i = qt.x / e.w),
            (o = qt.y / e.h),
            (e.fitRatio = i < o ? i : o),
            "orig" === (a = y.scaleMode)
              ? (n = 1)
              : "fit" === a && (n = e.fitRatio),
            1 < n && (n = 1),
            (e.initialZoomLevel = n),
            e.bounds || (e.bounds = zt())),
          n
            ? ((l = (r = e).w * n),
              (s = e.h * n),
              ((u = r.bounds).center.x = Math.round((qt.x - l) / 2)),
              (u.center.y = Math.round((qt.y - s) / 2) + r.vGap.top),
              (u.max.x = l > qt.x ? Math.round(qt.x - l) : u.center.x),
              (u.max.y =
                s > qt.y ? Math.round(qt.y - s) + r.vGap.top : u.center.y),
              (u.min.x = l > qt.x ? 0 : u.center.x),
              (u.min.y = s > qt.y ? r.vGap.top : u.center.y),
              c &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds)
            : void 0
        );
      },
      Qt = function (e, t, n) {
        var i, o;
        e.src &&
          ((t = t || e.container.lastChild),
          (i = n ? e.w : Math.round(e.w * e.fitRatio)),
          (o = n ? e.h : Math.round(e.h * e.fitRatio)),
          e.placeholder &&
            !e.loaded &&
            ((e.placeholder.style.width = i + "px"),
            (e.placeholder.style.height = o + "px")),
          (t.style.width = i + "px"),
          (t.style.height = o + "px"));
      };
    o("Controller", {
      publicMethods: {
        lazyLoadItem: function (e) {
          e = s(e);
          var t = Xt(e);
          t &&
            ((!t.loaded && !t.loading) || ee) &&
            (x("gettingData", e, t), t.src && Nt(t));
        },
        initController: function () {
          f.extend(y, jt, !0),
            (h.items = Wt = e),
            (Xt = h.getItemAt),
            (Vt = y.getNumItemsFn),
            y.loop,
            Vt() < 3 && (y.loop = !1),
            a("beforeChange", function (e) {
              for (
                var t = y.preload,
                  n = null === e || 0 <= e,
                  i = Math.min(t[0], Vt()),
                  o = Math.min(t[1], Vt()),
                  a = 1;
                a <= (n ? o : i);
                a++
              )
                h.lazyLoadItem(W + a);
              for (a = 1; a <= (n ? i : o); a++) h.lazyLoadItem(W - a);
            }),
            a("initialLayout", function () {
              h.currItem.initialLayout =
                y.getThumbBoundsFn && y.getThumbBoundsFn(W);
            }),
            a("mainScrollAnimComplete", Ht),
            a("initialZoomInEnd", Ht),
            a("destroy", function () {
              for (var e, t = 0; t < Wt.length; t++)
                (e = Wt[t]).container && (e.container = null),
                  e.placeholder && (e.placeholder = null),
                  e.img && (e.img = null),
                  e.preloader && (e.preloader = null),
                  e.loadError && (e.loaded = e.loadError = !1);
              $t = null;
            });
        },
        getItemAt: function (e) {
          return 0 <= e && void 0 !== Wt[e] && Wt[e];
        },
        allowProgressiveImg: function () {
          return (
            y.forceProgressiveLoading ||
            !ue ||
            y.mouseUsed ||
            1200 < screen.width
          );
        },
        setContent: function (t, n) {
          y.loop && (n = s(n));
          var e = h.getItemAt(t.index);
          e && (e.container = null);
          var i,
            o,
            a,
            r,
            l = h.getItemAt(n);
          l
            ? (x("gettingData", n, l),
              (t.index = n),
              (o = (t.item = l).container = f.createEl("pswp__zoom-wrap")),
              !l.src &&
                l.html &&
                (l.html.tagName
                  ? o.appendChild(l.html)
                  : (o.innerHTML = l.html)),
              Ut(l),
              Jt(l, Ge),
              !l.src || l.loadError || l.loaded
                ? l.src &&
                  !l.loadError &&
                  (((i = f.createEl("pswp__img", "img")).style.opacity = 1),
                  (i.src = l.src),
                  Qt(l, i),
                  _t(0, l, o, i))
                : ((l.loadComplete = function (e) {
                    if (U) {
                      if (t && t.index === n) {
                        if (Ut(e, !0))
                          return (
                            (e.loadComplete = e.img = null),
                            Jt(e, Ge),
                            nt(e),
                            void (t.index === W && h.updateCurrZoomItem())
                          );
                        e.imageAppended
                          ? !Gt &&
                            e.placeholder &&
                            ((e.placeholder.style.display = "none"),
                            (e.placeholder = null))
                          : ye.transform && (Fe || Gt)
                          ? $t.push({
                              item: e,
                              baseDiv: o,
                              img: e.img,
                              index: n,
                              holder: t,
                              clearPlaceholder: !0,
                            })
                          : _t(0, e, o, e.img, 0, !0);
                      }
                      (e.loadComplete = null),
                        (e.img = null),
                        x("imageLoadComplete", n, e);
                    }
                  }),
                  f.features.transform &&
                    ((a = "pswp__img pswp__img--placeholder"),
                    (a += l.msrc ? "" : " pswp__img--placeholder--blank"),
                    (r = f.createEl(a, l.msrc ? "img" : "")),
                    l.msrc && (r.src = l.msrc),
                    Qt(l, r),
                    o.appendChild(r),
                    (l.placeholder = r)),
                  l.loading || Nt(l),
                  h.allowProgressiveImg() &&
                    (!Bt && ye.transform
                      ? $t.push({
                          item: l,
                          baseDiv: o,
                          img: l.img,
                          index: n,
                          holder: t,
                        })
                      : _t(0, l, o, l.img, 0, !0))),
              Bt || n !== W ? nt(l) : ((Pe = o.style), Kt(l, i || l.img)),
              (t.el.innerHTML = ""),
              t.el.appendChild(o))
            : (t.el.innerHTML = "");
        },
        cleanSlide: function (e) {
          e.img && (e.img.onload = e.img.onerror = null),
            (e.loaded = e.loading = e.img = e.imageAppended = !1);
        },
      },
    });
    function en(e, t, n) {
      var i = document.createEvent("CustomEvent"),
        o = {
          origEvent: e,
          target: e.target,
          releasePoint: t,
          pointerType: n || "touch",
        };
      i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i);
    }
    var tn,
      nn,
      on = {};
    o("Tap", {
      publicMethods: {
        initTap: function () {
          a("firstTouchStart", h.onTapStart),
            a("touchRelease", h.onTapRelease),
            a("destroy", function () {
              (on = {}), (tn = null);
            });
        },
        onTapStart: function (e) {
          1 < e.length && (clearTimeout(tn), (tn = null));
        },
        onTapRelease: function (e, t) {
          var n, i;
          if (t && !Se && !Te && !lt) {
            var o = t;
            if (
              tn &&
              (clearTimeout(tn),
              (tn = null),
              (n = o),
              (i = on),
              Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)
            )
              return void x("doubleTap", o);
            if ("mouse" === t.type) return void en(e, t, "mouse");
            if (
              "BUTTON" === e.target.tagName.toUpperCase() ||
              f.hasClass(e.target, "pswp__single-tap")
            )
              return void en(e, t);
            b(on, o),
              (tn = setTimeout(function () {
                en(e, t), (tn = null);
              }, 300));
          }
        },
      },
    }),
      o("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function () {
            fe ||
              (ue
                ? a("mouseUsed", function () {
                    h.setupDesktopZoom();
                  })
                : h.setupDesktopZoom(!0));
          },
          setupDesktopZoom: function (e) {
            nn = {};
            var t = "wheel mousewheel DOMMouseScroll";
            a("bindEvents", function () {
              f.bind(m, t, h.handleMouseWheel);
            }),
              a("unbindEvents", function () {
                nn && f.unbind(m, t, h.handleMouseWheel);
              }),
              (h.mouseZoomedIn = !1);
            function n() {
              h.mouseZoomedIn &&
                (f.removeClass(m, "pswp--zoomed-in"), (h.mouseZoomedIn = !1)),
                q < 1
                  ? f.addClass(m, "pswp--zoom-allowed")
                  : f.removeClass(m, "pswp--zoom-allowed"),
                o();
            }
            var i,
              o = function () {
                i && (f.removeClass(m, "pswp--dragging"), (i = !1));
              };
            a("resize", n),
              a("afterChange", n),
              a("pointerDown", function () {
                h.mouseZoomedIn && ((i = !0), f.addClass(m, "pswp--dragging"));
              }),
              a("pointerUp", o),
              e || n();
          },
          handleMouseWheel: function (e) {
            if (q <= h.currItem.fitRatio)
              return (
                y.modal &&
                  (!y.closeOnScroll || lt || De
                    ? e.preventDefault()
                    : le && 2 < Math.abs(e.deltaY) && ((Y = !0), h.close())),
                !0
              );
            if ((e.stopPropagation(), (nn.x = 0), "deltaX" in e))
              1 === e.deltaMode
                ? ((nn.x = 18 * e.deltaX), (nn.y = 18 * e.deltaY))
                : ((nn.x = e.deltaX), (nn.y = e.deltaY));
            else if ("wheelDelta" in e)
              e.wheelDeltaX && (nn.x = -0.16 * e.wheelDeltaX),
                e.wheelDeltaY
                  ? (nn.y = -0.16 * e.wheelDeltaY)
                  : (nn.y = -0.16 * e.wheelDelta);
            else {
              if (!("detail" in e)) return;
              nn.y = e.detail;
            }
            d(q, !0);
            var t = Be.x - nn.x,
              n = Be.y - nn.y;
            (y.modal ||
              (t <= Ze.min.x &&
                t >= Ze.max.x &&
                n <= Ze.min.y &&
                n >= Ze.max.y)) &&
              e.preventDefault(),
              h.panTo(t, n);
          },
          toggleDesktopZoom: function (e) {
            e = e || { x: Ge.x / 2 + Ve.x, y: Ge.y / 2 + Ve.y };
            var t = y.getDoubleTapZoom(!0, h.currItem),
              n = q === t;
            (h.mouseZoomedIn = !n),
              h.zoomTo(n ? h.currItem.initialZoomLevel : t, e, 333),
              f[(n ? "remove" : "add") + "Class"](m, "pswp--zoomed-in");
          },
        },
      });
    function an() {
      return vn.hash.substring(1);
    }
    function rn() {
      sn && clearTimeout(sn), cn && clearTimeout(cn);
    }
    function ln() {
      var e = an(),
        t = {};
      if (e.length < 5) return t;
      var n,
        i = e.split("&");
      for (a = 0; a < i.length; a++) {
        i[a] && ((n = i[a].split("=")).length < 2 || (t[n[0]] = n[1]));
      }
      if (y.galleryPIDs) {
        for (var o = t.pid, a = (t.pid = 0); a < Wt.length; a++)
          if (Wt[a].pid === o) {
            t.pid = a;
            break;
          }
      } else t.pid = parseInt(t.pid, 10) - 1;
      return t.pid < 0 && (t.pid = 0), t;
    }
    var sn,
      un,
      cn,
      dn,
      pn,
      mn,
      fn,
      hn,
      yn,
      xn,
      vn,
      gn,
      wn = { history: !0, galleryUID: 1 },
      bn = function () {
        var e, t, n, i;
        cn && clearTimeout(cn),
          lt || De
            ? (cn = setTimeout(bn, 500))
            : (dn ? clearTimeout(un) : (dn = !0),
              (e = W + 1),
              (t = Xt(W)).hasOwnProperty("pid") && (e = t.pid),
              (n = fn + "&gid=" + y.galleryUID + "&pid=" + e),
              hn || (-1 === vn.hash.indexOf(n) && (xn = !0)),
              (i = vn.href.split("#")[0] + "#" + n),
              gn
                ? "#" + n !== window.location.hash &&
                  history[hn ? "replaceState" : "pushState"](
                    "",
                    document.title,
                    i
                  )
                : hn
                ? vn.replace(i)
                : (vn.hash = n),
              (hn = !0),
              (un = setTimeout(function () {
                dn = !1;
              }, 60)));
      };
    o("History", {
      publicMethods: {
        initHistory: function () {
          var e, t;
          f.extend(y, wn, !0),
            y.history &&
              ((vn = window.location),
              (hn = yn = xn = !1),
              (fn = an()),
              (gn = "pushState" in history),
              -1 < fn.indexOf("gid=") &&
                (fn = (fn = fn.split("&gid=")[0]).split("?gid=")[0]),
              a("afterChange", h.updateURL),
              a("unbindEvents", function () {
                f.unbind(window, "hashchange", h.onHashChange);
              }),
              (e = function () {
                (mn = !0),
                  yn ||
                    (xn
                      ? history.back()
                      : fn
                      ? (vn.hash = fn)
                      : gn
                      ? history.pushState(
                          "",
                          document.title,
                          vn.pathname + vn.search
                        )
                      : (vn.hash = "")),
                  rn();
              }),
              a("unbindEvents", function () {
                Y && e();
              }),
              a("destroy", function () {
                mn || e();
              }),
              a("firstUpdate", function () {
                W = ln().pid;
              }),
              -1 < (t = fn.indexOf("pid=")) &&
                "&" === (fn = fn.substring(0, t)).slice(-1) &&
                (fn = fn.slice(0, -1)),
              setTimeout(function () {
                U && f.bind(window, "hashchange", h.onHashChange);
              }, 40));
        },
        onHashChange: function () {
          if (an() === fn) return (yn = !0), void h.close();
          dn || ((pn = !0), h.goTo(ln().pid), (pn = !1));
        },
        updateURL: function () {
          rn(), pn || (hn ? (sn = setTimeout(bn, 800)) : bn());
        },
      },
    }),
      f.extend(h, st);
  };
});
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipeUI_Default = t());
})(this, function () {
  "use strict";
  return function (l, s) {
    function e(e) {
      if (S) return !0;
      (e = e || window.event), x.timeToIdle && x.mouseUsed && !_ && A();
      for (
        var t,
          n,
          o,
          l = (e.target || e.srcElement).getAttribute("class") || "",
          r = 0;
        r < U.length;
        r++
      )
        (t = U[r]).onTap &&
          -1 < l.indexOf("pswp__" + t.name) &&
          (t.onTap(), (n = !0));
      n &&
        (e.stopPropagation && e.stopPropagation(),
        (S = !0),
        (o = s.features.isOldAndroid ? 600 : 30),
        setTimeout(function () {
          S = !1;
        }, o));
    }
    function n(e, t, n) {
      s[(n ? "add" : "remove") + "Class"](e, "pswp__" + t);
    }
    function o() {
      var e = 1 === x.getNumItemsFn();
      e !== F && (n(m, "ui--one-slide", e), (F = e));
    }
    function t() {
      n(v, "share-modal--hidden", y);
    }
    function r() {
      return (
        (y = !y)
          ? (s.removeClass(v, "pswp__share-modal--fade-in"),
            setTimeout(function () {
              y && t();
            }, 300))
          : (t(),
            setTimeout(function () {
              y || s.addClass(v, "pswp__share-modal--fade-in");
            }, 30)),
        y || M(),
        0
      );
    }
    function i(e) {
      var t = (e = e || window.event).target || e.srcElement;
      return (
        l.shout("shareLinkClick", e, t),
        !(
          !t.href ||
          (!t.hasAttribute("download") &&
            (window.open(
              t.href,
              "pswp_share",
              "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                (window.screen ? Math.round(screen.width / 2 - 275) : 100)
            ),
            y || r(),
            1))
        )
      );
    }
    function a(e) {
      for (var t = 0; t < x.closeElClasses.length; t++)
        if (s.hasClass(e, "pswp__" + x.closeElClasses[t])) return !0;
    }
    function u(e) {
      var t = (e = e || window.event).relatedTarget || e.toElement;
      (t && "HTML" !== t.nodeName) ||
        (clearTimeout(K),
        (K = setTimeout(function () {
          L.setIdle(!0);
        }, x.timeToIdleOutside)));
    }
    function c(e) {
      var t,
        n,
        o = e.vGap;
      !l.likelyTouchDevice || x.mouseUsed || screen.width > x.fitControlsWidth
        ? ((t = x.barsSize),
          x.captionEl && "auto" === t.bottom
            ? (h ||
                ((h = s.createEl(
                  "pswp__caption pswp__caption--fake"
                )).appendChild(s.createEl("pswp__caption__center")),
                m.insertBefore(h, f),
                s.addClass(m, "pswp__ui--fit")),
              x.addCaptionHTMLFn(e, h, !0)
                ? ((n = h.clientHeight), (o.bottom = parseInt(n, 10) || 44))
                : (o.bottom = t.top))
            : (o.bottom = "auto" === t.bottom ? 0 : t.bottom),
          (o.top = t.top))
        : (o.top = o.bottom = 0);
    }
    function p() {
      function e(e) {
        if (e)
          for (var t = e.length, n = 0; n < t; n++) {
            (l = e[n]), (r = l.className);
            for (var o = 0; o < U.length; o++)
              (i = U[o]),
                -1 < r.indexOf("pswp__" + i.name) &&
                  (x[i.option]
                    ? (s.removeClass(l, "pswp__element--disabled"),
                      i.onInit && i.onInit(l))
                    : s.addClass(l, "pswp__element--disabled"));
          }
      }
      var l, r, i;
      e(m.children);
      var t = s.getChildByClass(m, "pswp__top-bar");
      t && e(t.children);
    }
    var d,
      m,
      f,
      h,
      w,
      g,
      v,
      b,
      _,
      C,
      T,
      I,
      E,
      F,
      x,
      S,
      k,
      K,
      L = this,
      O = !1,
      R = !0,
      y = !0,
      z = {
        barsSize: { top: 44, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (e, t) {
          return e.title
            ? ((t.children[0].innerHTML = e.title), !0)
            : ((t.children[0].innerHTML = ""), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
          },
          {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
          },
          {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
          },
          {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0,
          },
        ],
        getImageURLForShare: function () {
          return l.currItem.src || "";
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return l.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200,
      },
      M = function () {
        for (var e, t, n, o, l = "", r = 0; r < x.shareButtons.length; r++)
          (e = x.shareButtons[r]),
            (t = x.getImageURLForShare(e)),
            (n = x.getPageURLForShare(e)),
            (o = x.getTextForShare(e)),
            (l +=
              '<a href="' +
              e.url
                .replace("{{url}}", encodeURIComponent(n))
                .replace("{{image_url}}", encodeURIComponent(t))
                .replace("{{raw_image_url}}", t)
                .replace("{{text}}", encodeURIComponent(o)) +
              '" target="_blank" class="pswp__share--' +
              e.id +
              '"' +
              (e.download ? "download" : "") +
              ">" +
              e.label +
              "</a>"),
            x.parseShareButtonOut && (l = x.parseShareButtonOut(e, l));
        (v.children[0].innerHTML = l), (v.children[0].onclick = i);
      },
      D = 0,
      A = function () {
        clearTimeout(K), (D = 0), _ && L.setIdle(!1);
      },
      P = function (e) {
        I !== e && (n(T, "preloader--active", !e), (I = e));
      },
      U = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function (e) {
            f = e;
          },
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function (e) {
            v = e;
          },
          onTap: function () {
            r();
          },
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function (e) {
            g = e;
          },
          onTap: function () {
            r();
          },
        },
        { name: "button--zoom", option: "zoomEl", onTap: l.toggleDesktopZoom },
        {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            w = e;
          },
        },
        { name: "button--close", option: "closeEl", onTap: l.close },
        { name: "button--arrow--left", option: "arrowEl", onTap: l.prev },
        { name: "button--arrow--right", option: "arrowEl", onTap: l.next },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            d.isFullscreen() ? d.exit() : d.enter();
          },
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (e) {
            T = e;
          },
        },
      ];
    (L.init = function () {
      var t;
      s.extend(l.options, z, !0),
        (x = l.options),
        (m = s.getChildByClass(l.scrollWrap, "pswp__ui")),
        (C = l.listen)("onVerticalDrag", function (e) {
          R && e < 0.95
            ? L.hideControls()
            : !R && 0.95 <= e && L.showControls();
        }),
        C("onPinchClose", function (e) {
          R && e < 0.9
            ? (L.hideControls(), (t = !0))
            : t && !R && 0.9 < e && L.showControls();
        }),
        C("zoomGestureEnded", function () {
          (t = !1) && !R && L.showControls();
        }),
        C("beforeChange", L.update),
        C("doubleTap", function (e) {
          var t = l.currItem.initialZoomLevel;
          l.getZoomLevel() !== t
            ? l.zoomTo(t, e, 333)
            : l.zoomTo(x.getDoubleTapZoom(!1, l.currItem), e, 333);
        }),
        C("preventDragEvent", function (e, t, n) {
          var o = e.target || e.srcElement;
          o &&
            o.getAttribute("class") &&
            -1 < e.type.indexOf("mouse") &&
            (0 < o.getAttribute("class").indexOf("__caption") ||
              /(SMALL|STRONG|EM)/i.test(o.tagName)) &&
            (n.prevent = !1);
        }),
        C("bindEvents", function () {
          s.bind(m, "pswpTap click", e),
            s.bind(l.scrollWrap, "pswpTap", L.onGlobalTap),
            l.likelyTouchDevice ||
              s.bind(l.scrollWrap, "mouseover", L.onMouseOver);
        }),
        C("unbindEvents", function () {
          y || r(),
            k && clearInterval(k),
            s.unbind(document, "mouseout", u),
            s.unbind(document, "mousemove", A),
            s.unbind(m, "pswpTap click", e),
            s.unbind(l.scrollWrap, "pswpTap", L.onGlobalTap),
            s.unbind(l.scrollWrap, "mouseover", L.onMouseOver),
            d &&
              (s.unbind(document, d.eventK, L.updateFullscreen),
              d.isFullscreen() && ((x.hideAnimationDuration = 0), d.exit()),
              (d = null));
        }),
        C("destroy", function () {
          x.captionEl &&
            (h && m.removeChild(h), s.removeClass(f, "pswp__caption--empty")),
            v && (v.children[0].onclick = null),
            s.removeClass(m, "pswp__ui--over-close"),
            s.addClass(m, "pswp__ui--hidden"),
            L.setIdle(!1);
        }),
        x.showAnimationDuration || s.removeClass(m, "pswp__ui--hidden"),
        C("initialZoomIn", function () {
          x.showAnimationDuration && s.removeClass(m, "pswp__ui--hidden");
        }),
        C("initialZoomOut", function () {
          s.addClass(m, "pswp__ui--hidden");
        }),
        C("parseVerticalMargin", c),
        p(),
        x.shareEl && g && v && (y = !0),
        o(),
        x.timeToIdle &&
          C("mouseUsed", function () {
            s.bind(document, "mousemove", A),
              s.bind(document, "mouseout", u),
              (k = setInterval(function () {
                2 === ++D && L.setIdle(!0);
              }, x.timeToIdle / 2));
          }),
        x.fullscreenEl &&
          !s.features.isOldAndroid &&
          ((d = d || L.getFullscreenAPI())
            ? (s.bind(document, d.eventK, L.updateFullscreen),
              L.updateFullscreen(),
              s.addClass(l.template, "pswp--supports-fs"))
            : s.removeClass(l.template, "pswp--supports-fs")),
        x.preloaderEl &&
          (P(!0),
          C("beforeChange", function () {
            clearTimeout(E),
              (E = setTimeout(function () {
                l.currItem && l.currItem.loading
                  ? (l.allowProgressiveImg() &&
                      (!l.currItem.img || l.currItem.img.naturalWidth)) ||
                    P(!1)
                  : P(!0);
              }, x.loadingIndicatorDelay));
          }),
          C("imageLoadComplete", function (e, t) {
            l.currItem === t && P(!0);
          }));
    }),
      (L.setIdle = function (e) {
        n(m, "ui--idle", (_ = e));
      }),
      (L.update = function () {
        (O =
          !(!R || !l.currItem) &&
          (L.updateIndexIndicator(),
          x.captionEl &&
            (x.addCaptionHTMLFn(l.currItem, f),
            n(f, "caption--empty", !l.currItem.title)),
          !0)),
          y || r(),
          o();
      }),
      (L.updateFullscreen = function (e) {
        e &&
          setTimeout(function () {
            l.setScrollOffset(0, s.getScrollY());
          }, 50),
          s[(d.isFullscreen() ? "add" : "remove") + "Class"](
            l.template,
            "pswp--fs"
          );
      }),
      (L.updateIndexIndicator = function () {
        x.counterEl &&
          (w.innerHTML =
            l.getCurrentIndex() + 1 + x.indexIndicatorSep + x.getNumItemsFn());
      }),
      (L.onGlobalTap = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        if (!S)
          if (e.detail && "mouse" === e.detail.pointerType) {
            if (a(t)) return void l.close();
            s.hasClass(t, "pswp__img") &&
              (1 === l.getZoomLevel() && l.getZoomLevel() <= l.currItem.fitRatio
                ? x.clickToCloseNonZoomable && l.close()
                : l.toggleDesktopZoom(e.detail.releasePoint));
          } else if (
            (x.tapToToggleControls && (R ? L.hideControls() : L.showControls()),
            x.tapToClose && (s.hasClass(t, "pswp__img") || a(t)))
          )
            return void l.close();
      }),
      (L.onMouseOver = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        n(m, "ui--over-close", a(t));
      }),
      (L.hideControls = function () {
        s.addClass(m, "pswp__ui--hidden"), (R = !1);
      }),
      (L.showControls = function () {
        (R = !0), O || L.update(), s.removeClass(m, "pswp__ui--hidden");
      }),
      (L.supportsFullscreen = function () {
        var e = document;
        return !!(
          e.exitFullscreen ||
          e.mozCancelFullScreen ||
          e.webkitExitFullscreen ||
          e.msExitFullscreen
        );
      }),
      (L.getFullscreenAPI = function () {
        var e,
          t = document.documentElement,
          n = "fullscreenchange";
        return (
          t.requestFullscreen
            ? (e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n,
              })
            : t.mozRequestFullScreen
            ? (e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n,
              })
            : t.webkitRequestFullscreen
            ? (e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n,
              })
            : t.msRequestFullscreen &&
              (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange",
              }),
          e &&
            ((e.enter = function () {
              return (
                (b = x.closeOnScroll),
                (x.closeOnScroll = !1),
                "webkitRequestFullscreen" !== this.enterK
                  ? l.template[this.enterK]()
                  : void l.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              );
            }),
            (e.exit = function () {
              return (x.closeOnScroll = b), document[this.exitK]();
            }),
            (e.isFullscreen = function () {
              return document[this.elementK];
            })),
          e
        );
      });
  };
});
/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
!(function (c) {
  c.fn.jflickrfeed = function (p, i) {
    var e =
        (p = c.extend(
          !0,
          {
            flickrbase: "http://api.flickr.com/services/feeds/",
            feedapi: "photos_public.gne",
            limit: 20,
            qstrings: { lang: "en-us", format: "json", jsoncallback: "?" },
            cleanDescription: !0,
            useTemplate: !0,
            itemTemplate: "",
            itemCallback: function () {},
          },
          p
        )).flickrbase +
        p.feedapi +
        "?",
      a = !0;
    for (var t in p.qstrings)
      a || (e += "&"), (e += t + "=" + p.qstrings[t]), (a = !1);
    return c(this).each(function () {
      var r = c(this),
        l = this;
      c.getJSON(e, function (e) {
        c.each(e.items, function (e, i) {
          if (e < p.limit) {
            var a, t;
            if (
              (p.cleanDescription &&
                ((a = /<p>(.*?)<\/p>/g),
                (t = i.description),
                a.test(t) &&
                  ((i.description = t.match(a)[2]),
                  null != i.description &&
                    (i.description = i.description
                      .replace("<p>", "")
                      .replace("</p>", "")))),
              (i.image_s = i.media.m.replace("_m", "_s")),
              (i.image_t = i.media.m.replace("_m", "_t")),
              (i.image_m = i.media.m.replace("_m", "_m")),
              (i.image = i.media.m.replace("_m", "")),
              (i.image_b = i.media.m.replace("_m", "_b")),
              delete i.media,
              p.useTemplate)
            ) {
              var c = p.itemTemplate;
              for (var n in i)
                var m = new RegExp("{{" + n + "}}", "g"),
                  c = c.replace(m, i[n]);
              r.append(c);
            }
            p.itemCallback.call(l, i);
          }
        }),
          c.isFunction(i) && i.call(l, e);
      });
    });
  };
})(jQuery);
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (c) {
  c.fn.tweet = function (e) {
    var o = c.extend(
        {
          modpath: "/twitter/",
          username: null,
          list_id: null,
          list: null,
          favorites: !1,
          query: null,
          avatar_size: null,
          count: 3,
          fetch: null,
          page: 1,
          retweets: !0,
          intro_text: null,
          outro_text: null,
          join_text: null,
          auto_join_text_default: "i said,",
          auto_join_text_ed: "i",
          auto_join_text_ing: "i am",
          auto_join_text_reply: "i replied to",
          auto_join_text_url: "i was looking at",
          loading_text: null,
          refresh_interval: null,
          twitter_url: "twitter.com",
          twitter_api_url: "api.twitter.com",
          twitter_search_url: "api.twitter.com",
          template: "{avatar}{time}{join}{text}",
          comparator: function (e, t) {
            return t.tweet_time - e.tweet_time;
          },
          filter: function (e) {
            return !0;
          },
        },
        e
      ),
      s =
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    function _(e, t) {
      if ("string" != typeof e) return e(t);
      var r = e;
      for (var a in t)
        var n = t[a],
          r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n);
      return r;
    }
    function t(t, r) {
      return function () {
        var e = [];
        return (
          this.each(function () {
            e.push(this.replace(t, r));
          }),
          c(e)
        );
      };
    }
    function u(e) {
      return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;");
    }
    function l(e) {
      var t,
        r,
        a,
        i,
        n = {};
      return (
        (n.item = e),
        (n.source = e.source),
        (n.name = e.from_user_name || e.user.name),
        (n.screen_name = e.from_user || e.user.screen_name),
        (n.avatar_size = o.avatar_size),
        (n.avatar_url = (function e(t, r) {
          return r
            ? "user" in t
              ? t.user.profile_image_url_https
              : e(t, !1).replace(
                  /^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,
                  "https://s3.amazonaws.com/twitter_production/"
                )
            : t.profile_image_url || t.user.profile_image_url;
        })(e, "https:" === document.location.protocol)),
        (n.retweet = void 0 !== e.retweeted_status),
        (n.tweet_time =
          ((t = e.created_at),
          Date.parse(
            t.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3")
          ))),
        (n.join_text =
          "auto" == o.join_text
            ? (r = e.text).match(/^(@([A-Za-z0-9-_]+)) .*/i)
              ? o.auto_join_text_reply
              : r.match(s)
              ? o.auto_join_text_url
              : r.match(/^((\w+ed)|just) .*/im)
              ? o.auto_join_text_ed
              : r.match(/^(\w*ing) .*/i)
              ? o.auto_join_text_ing
              : o.auto_join_text_default
            : o.join_text),
        (n.tweet_id = e.id_str),
        (n.twitter_base = "http://" + o.twitter_url + "/"),
        (n.user_url = n.twitter_base + n.screen_name),
        (n.tweet_url = n.user_url + "/status/" + n.tweet_id),
        (n.reply_url =
          n.twitter_base + "intent/tweet?in_reply_to=" + n.tweet_id),
        (n.retweet_url =
          n.twitter_base + "intent/retweet?tweet_id=" + n.tweet_id),
        (n.favorite_url =
          n.twitter_base + "intent/favorite?tweet_id=" + n.tweet_id),
        (n.retweeted_screen_name =
          n.retweet && e.retweeted_status.user.screen_name),
        (n.tweet_relative_time = (function (e, t) {
          var r = 1 < arguments.length ? t : new Date(),
            a = parseInt((r.getTime() - e) / 1e3, 10);
          return a < 1
            ? "just now"
            : a < 60
            ? a + " seconds ago"
            : a < 120
            ? "about a minute ago"
            : a < 2700
            ? "about " + parseInt(a / 60, 10).toString() + " minutes ago"
            : a < 7200
            ? "about an hour ago"
            : a < 86400
            ? "about " + parseInt(a / 3600, 10).toString() + " hours ago"
            : a < 172800
            ? "about a day ago"
            : "about " + parseInt(a / 86400, 10).toString() + " days ago";
        })(n.tweet_time)),
        (n.entities = e.entities
          ? (e.entities.urls || []).concat(e.entities.media || [])
          : []),
        (n.tweet_raw_text = n.retweet
          ? "RT @" + n.retweeted_screen_name + " " + e.retweeted_status.text
          : e.text),
        (n.tweet_text = c([
          ((a = n.tweet_raw_text),
          (i = n.entities),
          a.replace(s, function (e) {
            for (
              var t = /^[a-z]+:/i.test(e) ? e : "http://" + e, r = e, a = 0;
              a < i.length;
              ++a
            ) {
              var n = i[a];
              if (n.url == t && n.expanded_url) {
                (t = n.expanded_url), (r = n.display_url);
                break;
              }
            }
            return '<a href="' + u(t) + '">' + u(r) + "</a>";
          })),
        ])
          .linkUser()
          .linkHash()[0]),
        (n.tweet_text_fancy = c([n.tweet_text]).makeHeart()[0]),
        (n.user = _(
          '<a class="tweet_user" href="{user_url}">{screen_name}</a>',
          n
        )),
        (n.join = o.join_text
          ? _(' <span class="tweet_join">{join_text}</span> ', n)
          : " "),
        (n.avatar = n.avatar_size
          ? _(
              '<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',
              n
            )
          : ""),
        (n.time = _(
          '<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',
          n
        )),
        (n.text = _('<span class="tweet_text">{tweet_text_fancy}</span>', n)),
        (n.reply_action = _(
          '<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',
          n
        )),
        (n.retweet_action = _(
          '<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',
          n
        )),
        (n.favorite_action = _(
          '<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',
          n
        )),
        n
      );
    }
    return (
      c.extend({ tweet: { t: _ } }),
      c.fn.extend({
        linkUser: t(
          /(^|[\W])@(\w+)/gi,
          '$1<span class="at">@</span><a href="http://' +
            o.twitter_url +
            '/$2">$2</a>'
        ),
        linkHash: t(
          /(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
          ' <a href="https://twitter.com/search?q=%23$1' +
            (o.username && 1 == o.username.length && !o.list
              ? "&from=" + o.username.join("%2BOR%2B")
              : "") +
            '" class="tweet_hashtag">#$1</a>'
        ),
        makeHeart: t(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>"),
      }),
      this.each(function (e, n) {
        var i = c('<ul class="tweet_list">'),
          s = '<p class="tweet_intro">' + o.intro_text + "</p>",
          u = '<p class="tweet_outro">' + o.outro_text + "</p>",
          t = c('<p class="loading">' + o.loading_text + "</p>");
        o.username &&
          "string" == typeof o.username &&
          (o.username = [o.username]),
          c(n)
            .unbind("tweet:load")
            .bind("tweet:load", function () {
              o.loading_text && c(n).empty().append(t),
                c.ajax({
                  dataType: "json",
                  type: "post",
                  async: !0,
                  url: o.modpath || "/twitter/",
                  data: {
                    request: (function () {
                      o.modpath;
                      var e = null === o.fetch ? o.count : o.fetch,
                        t = { include_entities: 1 };
                      if (o.list)
                        return {
                          host: o.twitter_api_url,
                          url: "/1.1/lists/statuses.json",
                          parameters: c.extend({}, t, {
                            list_id: o.list_id,
                            slug: o.list,
                            owner_screen_name: o.username,
                            page: o.page,
                            count: e,
                            include_rts: o.retweets ? 1 : 0,
                          }),
                        };
                      if (o.favorites)
                        return {
                          host: o.twitter_api_url,
                          url: "/1.1/favorites/list.json",
                          parameters: c.extend({}, t, {
                            list_id: o.list_id,
                            screen_name: o.username,
                            page: o.page,
                            count: e,
                          }),
                        };
                      if (null === o.query && 1 === o.username.length)
                        return {
                          host: o.twitter_api_url,
                          url: "/1.1/statuses/user_timeline.json",
                          parameters: c.extend({}, t, {
                            screen_name: o.username,
                            page: o.page,
                            count: e,
                            include_rts: o.retweets ? 1 : 0,
                          }),
                        };
                      var r = o.query || "from:" + o.username.join(" OR from:");
                      return {
                        host: o.twitter_search_url,
                        url: "/1.1/search/tweets.json",
                        parameters: c.extend({}, t, { q: r, count: e }),
                      };
                    })(),
                  },
                  success: function (e, t) {
                    e.message && console.log(e.message);
                    var r = e.response;
                    c(n).empty().append(i),
                      o.intro_text && i.before(s),
                      i.empty(),
                      (resp =
                        void 0 !== r.statuses
                          ? r.statuses
                          : void 0 !== r.results
                          ? r.results
                          : r);
                    var a = c.map(resp, l),
                      a = c
                        .grep(a, o.filter)
                        .sort(o.comparator)
                        .slice(0, o.count);
                    i
                      .append(
                        c
                          .map(a, function (e) {
                            return "<li>" + _(o.template, e) + "</li>";
                          })
                          .join("")
                      )
                      .children("li:first")
                      .addClass("tweet_first")
                      .end()
                      .children("li:odd")
                      .addClass("tweet_even")
                      .end()
                      .children("li:even")
                      .addClass("tweet_odd"),
                      o.outro_text && i.after(u),
                      c(n)
                        .trigger("loaded")
                        .trigger(a ? "empty" : "full"),
                      o.refresh_interval &&
                        window.setTimeout(function () {
                          c(n).trigger("tweet:load");
                        }, 1e3 * o.refresh_interval);
                  },
                });
            })
            .trigger("tweet:load");
      })
    );
  };
});
/**
 * jquery.hoverdir.js v1.1.2
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (s) {
  "use strict";
  function o(t, e) {
    (this.$el = s(t)),
      (this.options = s.extend(!0, {}, this.defaults, e)),
      (this.isVisible = !1),
      (this.$hoverElem = this.$el.find(this.options.hoverElem)),
      (this.transitionProp =
        "all " + this.options.speed + "ms " + this.options.easing),
      (this.support = this._supportsTransitions()),
      this._loadEvents();
  }
  (o.prototype = {
    defaults: {
      speed: 300,
      easing: "ease",
      hoverDelay: 0,
      inverse: !1,
      hoverElem: "div",
    },
    constructor: o,
    _supportsTransitions: function () {
      if ("undefined" != typeof Modernizr) return Modernizr.csstransitions;
      var t = (document.body || document.documentElement).style;
      if ("string" == typeof t.transition) return !0;
      for (
        var e = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"],
          i = "transition".charAt(0).toUpperCase() + "transition".substr(1),
          s = 0;
        s < e.length;
        s++
      )
        if ("string" == typeof t[e[s] + i]) return !0;
      return !1;
    },
    _loadEvents: function () {
      this.$el.on(
        "mouseenter.hoverdir mouseleave.hoverdir",
        s.proxy(function (t) {
          (this.direction = this._getDir({ x: t.pageX, y: t.pageY })),
            "mouseenter" === t.type ? this._showHover() : this._hideHover();
        }, this)
      );
    },
    _showHover: function () {
      var t = this._getStyle(this.direction);
      this.support && this.$hoverElem.css("transition", ""),
        this.$hoverElem.hide().css(t.from),
        clearTimeout(this.tmhover),
        (this.tmhover = setTimeout(
          s.proxy(function () {
            this.$hoverElem.show(
              0,
              s.proxy(function () {
                this.support &&
                  this.$hoverElem.css("transition", this.transitionProp),
                  this._applyAnimation(t.to);
              }, this)
            );
          }, this),
          this.options.hoverDelay
        )),
        (this.isVisible = !0);
    },
    _hideHover: function () {
      var t = this._getStyle(this.direction);
      this.support && this.$hoverElem.css("transition", this.transitionProp),
        clearTimeout(this.tmhover),
        this._applyAnimation(t.from),
        (this.isVisible = !1);
    },
    _getDir: function (t) {
      var e = this.$el.width(),
        i = this.$el.height(),
        s = (t.x - this.$el.offset().left - e / 2) * (i < e ? i / e : 1),
        o = (t.y - this.$el.offset().top - i / 2) * (e < i ? e / i : 1);
      return (
        Math.round((Math.atan2(o, s) * (180 / Math.PI) + 180) / 90 + 3) % 4
      );
    },
    _getStyle: function (t) {
      var e,
        i,
        s = { left: "0", top: "-100%" },
        o = { left: "0", top: "100%" },
        n = { left: "-100%", top: "0" },
        r = { left: "100%", top: "0" },
        h = { top: "0" },
        a = { left: "0" };
      switch (t) {
        case 0:
        case "top":
          (e = this.options.inverse ? o : s), (i = h);
          break;
        case 1:
        case "right":
          (e = this.options.inverse ? n : r), (i = a);
          break;
        case 2:
        case "bottom":
          (e = this.options.inverse ? s : o), (i = h);
          break;
        case 3:
        case "left":
          (e = this.options.inverse ? r : n), (i = a);
      }
      return { from: e, to: i };
    },
    _applyAnimation: function (t) {
      (s.fn.applyStyle = this.support ? s.fn.css : s.fn.animate),
        this.$hoverElem
          .stop()
          .applyStyle(t, s.extend(!0, [], { duration: this.options.speed }));
    },
    show: function (t) {
      this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"),
        this.isVisible || ((this.direction = t || "top"), this._showHover());
    },
    hide: function (t) {
      this.rebuild(),
        this.isVisible && ((this.direction = t || "bottom"), this._hideHover());
    },
    setOptions: function (t) {
      this.options = s.extend(!0, {}, this.defaults, this.options, t);
    },
    destroy: function () {
      this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"),
        this.$el.data("hoverdir", null);
    },
    rebuild: function (t) {
      "object" == typeof t && this.setOptions(t), this._loadEvents();
    },
  }),
    (s.fn.hoverdir = function (e, i) {
      return this.each(function () {
        var t = s(this).data("hoverdir");
        t ||
          ((t = new o(this, "object" == typeof e && e)),
          s(this).data("hoverdir", t)),
          "string" == typeof e &&
            (t[e](i), "destroy" === e && s(this).data("hoverdir", !1));
      });
    }),
    (s.fn.hoverdir.Constructor = o);
});
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
    return t + t + a + a + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
var pJS = function (e, t) {
  var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var y = this.pJS;
  t && Object.deepExtend(y, t),
    (y.tmp.obj = {
      size_value: y.particles.size.value,
      size_anim_speed: y.particles.size.anim.speed,
      move_speed: y.particles.move.speed,
      line_linked_distance: y.particles.line_linked.distance,
      line_linked_width: y.particles.line_linked.width,
      mode_grab_distance: y.interactivity.modes.grab.distance,
      mode_bubble_distance: y.interactivity.modes.bubble.distance,
      mode_bubble_size: y.interactivity.modes.bubble.size,
      mode_repulse_distance: y.interactivity.modes.repulse.distance,
    }),
    (y.fn.retinaInit = function () {
      y.retina_detect && 1 < window.devicePixelRatio
        ? ((y.canvas.pxratio = window.devicePixelRatio), (y.tmp.retina = !0))
        : ((y.canvas.pxratio = 1), (y.tmp.retina = !1)),
        (y.canvas.w = y.canvas.el.offsetWidth * y.canvas.pxratio),
        (y.canvas.h = y.canvas.el.offsetHeight * y.canvas.pxratio),
        (y.particles.size.value = y.tmp.obj.size_value * y.canvas.pxratio),
        (y.particles.size.anim.speed =
          y.tmp.obj.size_anim_speed * y.canvas.pxratio),
        (y.particles.move.speed = y.tmp.obj.move_speed * y.canvas.pxratio),
        (y.particles.line_linked.distance =
          y.tmp.obj.line_linked_distance * y.canvas.pxratio),
        (y.interactivity.modes.grab.distance =
          y.tmp.obj.mode_grab_distance * y.canvas.pxratio),
        (y.interactivity.modes.bubble.distance =
          y.tmp.obj.mode_bubble_distance * y.canvas.pxratio),
        (y.particles.line_linked.width =
          y.tmp.obj.line_linked_width * y.canvas.pxratio),
        (y.interactivity.modes.bubble.size =
          y.tmp.obj.mode_bubble_size * y.canvas.pxratio),
        (y.interactivity.modes.repulse.distance =
          y.tmp.obj.mode_repulse_distance * y.canvas.pxratio);
    }),
    (y.fn.canvasInit = function () {
      y.canvas.ctx = y.canvas.el.getContext("2d");
    }),
    (y.fn.canvasSize = function () {
      (y.canvas.el.width = y.canvas.w),
        (y.canvas.el.height = y.canvas.h),
        y &&
          y.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (y.canvas.w = y.canvas.el.offsetWidth),
              (y.canvas.h = y.canvas.el.offsetHeight),
              y.tmp.retina &&
                ((y.canvas.w *= y.canvas.pxratio),
                (y.canvas.h *= y.canvas.pxratio)),
              (y.canvas.el.width = y.canvas.w),
              (y.canvas.el.height = y.canvas.h),
              y.particles.move.enable ||
                (y.fn.particlesEmpty(),
                y.fn.particlesCreate(),
                y.fn.particlesDraw(),
                y.fn.vendors.densityAutoParticles()),
              y.fn.vendors.densityAutoParticles();
          });
    }),
    (y.fn.canvasPaint = function () {
      y.canvas.ctx.fillRect(0, 0, y.canvas.w, y.canvas.h);
    }),
    (y.fn.canvasClear = function () {
      y.canvas.ctx.clearRect(0, 0, y.canvas.w, y.canvas.h);
    }),
    (y.fn.particle = function (e, t, a) {
      var i;
      (this.radius =
        (y.particles.size.random ? Math.random() : 1) * y.particles.size.value),
        y.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = y.particles.size.anim.speed / 100),
          y.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = a ? a.x : Math.random() * y.canvas.w),
        (this.y = a ? a.y : Math.random() * y.canvas.h),
        this.x > y.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > y.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        y.particles.move.bounce && y.fn.vendors.checkOverlap(this, a),
        (this.color = {}),
        "object" == typeof e.value
          ? e.value instanceof Array
            ? ((i =
                e.value[
                  Math.floor(Math.random() * y.particles.color.value.length)
                ]),
              (this.color.rgb = hexToRgb(i)))
            : (null != e.value.r &&
                null != e.value.g &&
                null != e.value.b &&
                (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
              null != e.value.h &&
                null != e.value.s &&
                null != e.value.l &&
                (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l }))
          : "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value))),
        (this.opacity =
          (y.particles.opacity.random ? Math.random() : 1) *
          y.particles.opacity.value),
        y.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = y.particles.opacity.anim.speed / 100),
          y.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (y.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      y.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          y.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var s,
        r,
        c = y.particles.shape.type;
      "object" == typeof c
        ? c instanceof Array &&
          ((s = c[Math.floor(Math.random() * c.length)]), (this.shape = s))
        : (this.shape = c),
        "image" == this.shape &&
          ((r = y.particles.shape),
          (this.img = {
            src: r.image.src,
            ratio: r.image.width / r.image.height,
          }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == y.tmp.img_type &&
            null != y.tmp.source_svg &&
            (y.fn.vendors.createSvgImg(this),
            y.tmp.pushing && (this.img.loaded = !1)));
    }),
    (y.fn.particle.prototype.draw = function () {
      var e,
        t,
        a,
        i,
        n = this;
      switch (
        ((e = null != n.radius_bubble ? n.radius_bubble : n.radius),
        (t = null != n.opacity_bubble ? n.opacity_bubble : n.opacity),
        (a = n.color.rgb
          ? "rgba(" +
            n.color.rgb.r +
            "," +
            n.color.rgb.g +
            "," +
            n.color.rgb.b +
            "," +
            t +
            ")"
          : "hsla(" +
            n.color.hsl.h +
            "," +
            n.color.hsl.s +
            "%," +
            n.color.hsl.l +
            "%," +
            t +
            ")"),
        (y.canvas.ctx.fillStyle = a),
        y.canvas.ctx.beginPath(),
        n.shape)
      ) {
        case "circle":
          y.canvas.ctx.arc(n.x, n.y, e, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          y.canvas.ctx.rect(n.x - e, n.y - e, 2 * e, 2 * e);
          break;
        case "triangle":
          y.fn.vendors.drawShape(
            y.canvas.ctx,
            n.x - e,
            n.y + e / 1.66,
            2 * e,
            3,
            2
          );
          break;
        case "polygon":
          y.fn.vendors.drawShape(
            y.canvas.ctx,
            n.x - e / (y.particles.shape.polygon.nb_sides / 3.5),
            n.y - e / 0.76,
            (2.66 * e) / (y.particles.shape.polygon.nb_sides / 3),
            y.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          y.fn.vendors.drawShape(
            y.canvas.ctx,
            n.x - (2 * e) / (y.particles.shape.polygon.nb_sides / 4),
            n.y - e / 1.52,
            (2 * e * 2.66) / (y.particles.shape.polygon.nb_sides / 3),
            y.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          (i = "svg" == y.tmp.img_type ? n.img.obj : y.tmp.img_obj) &&
            y.canvas.ctx.drawImage(
              i,
              n.x - e,
              n.y - e,
              2 * e,
              (2 * e) / n.img.ratio
            );
      }
      y.canvas.ctx.closePath(),
        0 < y.particles.shape.stroke.width &&
          ((y.canvas.ctx.strokeStyle = y.particles.shape.stroke.color),
          (y.canvas.ctx.lineWidth = y.particles.shape.stroke.width),
          y.canvas.ctx.stroke()),
        y.canvas.ctx.fill();
    }),
    (y.fn.particlesCreate = function () {
      for (var e = 0; e < y.particles.number.value; e++)
        y.particles.array.push(
          new y.fn.particle(y.particles.color, y.particles.opacity.value)
        );
    }),
    (y.fn.particlesUpdate = function () {
      for (var e = 0; e < y.particles.array.length; e++) {
        var t,
          a,
          i = y.particles.array[e];
        switch (
          (y.particles.move.enable &&
            ((t = y.particles.move.speed / 2),
            (i.x += i.vx * t),
            (i.y += i.vy * t)),
          y.particles.opacity.anim.enable &&
            (1 == i.opacity_status
              ? (i.opacity >= y.particles.opacity.value &&
                  (i.opacity_status = !1),
                (i.opacity += i.vo))
              : (i.opacity <= y.particles.opacity.anim.opacity_min &&
                  (i.opacity_status = !0),
                (i.opacity -= i.vo)),
            i.opacity < 0 && (i.opacity = 0)),
          y.particles.size.anim.enable &&
            (1 == i.size_status
              ? (i.radius >= y.particles.size.value && (i.size_status = !1),
                (i.radius += i.vs))
              : (i.radius <= y.particles.size.anim.size_min &&
                  (i.size_status = !0),
                (i.radius -= i.vs)),
            i.radius < 0 && (i.radius = 0)),
          (a =
            "bounce" == y.particles.move.out_mode
              ? {
                  x_left: i.radius,
                  x_right: y.canvas.w,
                  y_top: i.radius,
                  y_bottom: y.canvas.h,
                }
              : {
                  x_left: -i.radius,
                  x_right: y.canvas.w + i.radius,
                  y_top: -i.radius,
                  y_bottom: y.canvas.h + i.radius,
                }),
          i.x - i.radius > y.canvas.w
            ? ((i.x = a.x_left), (i.y = Math.random() * y.canvas.h))
            : i.x + i.radius < 0 &&
              ((i.x = a.x_right), (i.y = Math.random() * y.canvas.h)),
          i.y - i.radius > y.canvas.h
            ? ((i.y = a.y_top), (i.x = Math.random() * y.canvas.w))
            : i.y + i.radius < 0 &&
              ((i.y = a.y_bottom), (i.x = Math.random() * y.canvas.w)),
          y.particles.move.out_mode)
        ) {
          case "bounce":
            (i.x + i.radius > y.canvas.w || i.x - i.radius < 0) &&
              (i.vx = -i.vx),
              (i.y + i.radius > y.canvas.h || i.y - i.radius < 0) &&
                (i.vy = -i.vy);
        }
        if (
          (isInArray("grab", y.interactivity.events.onhover.mode) &&
            y.fn.modes.grabParticle(i),
          (isInArray("bubble", y.interactivity.events.onhover.mode) ||
            isInArray("bubble", y.interactivity.events.onclick.mode)) &&
            y.fn.modes.bubbleParticle(i),
          (isInArray("repulse", y.interactivity.events.onhover.mode) ||
            isInArray("repulse", y.interactivity.events.onclick.mode)) &&
            y.fn.modes.repulseParticle(i),
          y.particles.line_linked.enable || y.particles.move.attract.enable)
        )
          for (var n = e + 1; n < y.particles.array.length; n++) {
            var s = y.particles.array[n];
            y.particles.line_linked.enable && y.fn.interact.linkParticles(i, s),
              y.particles.move.attract.enable &&
                y.fn.interact.attractParticles(i, s),
              y.particles.move.bounce && y.fn.interact.bounceParticles(i, s);
          }
      }
    }),
    (y.fn.particlesDraw = function () {
      y.canvas.ctx.clearRect(0, 0, y.canvas.w, y.canvas.h),
        y.fn.particlesUpdate();
      for (var e = 0; e < y.particles.array.length; e++) {
        y.particles.array[e].draw();
      }
    }),
    (y.fn.particlesEmpty = function () {
      y.particles.array = [];
    }),
    (y.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(y.fn.checkAnimFrame),
        cancelRequestAnimFrame(y.fn.drawAnimFrame),
        (y.tmp.source_svg = void 0),
        (y.tmp.img_obj = void 0),
        (y.tmp.count_svg = 0),
        y.fn.particlesEmpty(),
        y.fn.canvasClear(),
        y.fn.vendors.start();
    }),
    (y.fn.interact.linkParticles = function (e, t) {
      var a,
        i,
        n = e.x - t.x,
        s = e.y - t.y,
        r = Math.sqrt(n * n + s * s);
      r <= y.particles.line_linked.distance &&
        0 <
          (a =
            y.particles.line_linked.opacity -
            r /
              (1 / y.particles.line_linked.opacity) /
              y.particles.line_linked.distance) &&
        ((i = y.particles.line_linked.color_rgb_line),
        (y.canvas.ctx.strokeStyle =
          "rgba(" + i.r + "," + i.g + "," + i.b + "," + a + ")"),
        (y.canvas.ctx.lineWidth = y.particles.line_linked.width),
        y.canvas.ctx.beginPath(),
        y.canvas.ctx.moveTo(e.x, e.y),
        y.canvas.ctx.lineTo(t.x, t.y),
        y.canvas.ctx.stroke(),
        y.canvas.ctx.closePath());
    }),
    (y.fn.interact.attractParticles = function (e, t) {
      var a,
        i,
        n = e.x - t.x,
        s = e.y - t.y;
      Math.sqrt(n * n + s * s) <= y.particles.line_linked.distance &&
        ((a = n / (1e3 * y.particles.move.attract.rotateX)),
        (i = s / (1e3 * y.particles.move.attract.rotateY)),
        (e.vx -= a),
        (e.vy -= i),
        (t.vx += a),
        (t.vy += i));
    }),
    (y.fn.interact.bounceParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (y.fn.modes.pushParticles = function (e, t) {
      y.tmp.pushing = !0;
      for (var a = 0; a < e; a++)
        y.particles.array.push(
          new y.fn.particle(y.particles.color, y.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * y.canvas.w,
            y: t ? t.pos_y : Math.random() * y.canvas.h,
          })
        ),
          a == e - 1 &&
            (y.particles.move.enable || y.fn.particlesDraw(),
            (y.tmp.pushing = !1));
    }),
    (y.fn.modes.removeParticles = function (e) {
      y.particles.array.splice(0, e),
        y.particles.move.enable || y.fn.particlesDraw();
    }),
    (y.fn.modes.bubbleParticle = function (r) {
      function e() {
        (r.opacity_bubble = r.opacity), (r.radius_bubble = r.radius);
      }
      function t(e, t, a, i, n) {
        var s;
        e != t &&
          (y.tmp.bubble_duration_end
            ? null != a &&
              ((s =
                e +
                (e -
                  (i - (v * (i - e)) / y.interactivity.modes.bubble.duration))),
              "size" == n && (r.radius_bubble = s),
              "opacity" == n && (r.opacity_bubble = s))
            : l <= y.interactivity.modes.bubble.distance
            ? (null != a ? a : i) != e &&
              ((s = i - (v * (i - e)) / y.interactivity.modes.bubble.duration),
              "size" == n && (r.radius_bubble = s),
              "opacity" == n && (r.opacity_bubble = s))
            : ("size" == n && (r.radius_bubble = void 0),
              "opacity" == n && (r.opacity_bubble = void 0)));
      }
      var a, i, n, s, c, o, l, v;
      y.interactivity.events.onhover.enable &&
      isInArray("bubble", y.interactivity.events.onhover.mode)
        ? ((c = r.x - y.interactivity.mouse.pos_x),
          (o = r.y - y.interactivity.mouse.pos_y),
          (a =
            1 -
            (l = Math.sqrt(c * c + o * o)) /
              y.interactivity.modes.bubble.distance),
          l <= y.interactivity.modes.bubble.distance
            ? 0 <= a &&
              "mousemove" == y.interactivity.status &&
              (y.interactivity.modes.bubble.size != y.particles.size.value &&
                (y.interactivity.modes.bubble.size > y.particles.size.value
                  ? 0 <=
                      (n = r.radius + y.interactivity.modes.bubble.size * a) &&
                    (r.radius_bubble = n)
                  : ((i = r.radius - y.interactivity.modes.bubble.size),
                    (n = r.radius - i * a),
                    (r.radius_bubble = 0 < n ? n : 0))),
              y.interactivity.modes.bubble.opacity !=
                y.particles.opacity.value &&
                (y.interactivity.modes.bubble.opacity >
                y.particles.opacity.value
                  ? (s = y.interactivity.modes.bubble.opacity * a) >
                      r.opacity &&
                    s <= y.interactivity.modes.bubble.opacity &&
                    (r.opacity_bubble = s)
                  : (s =
                      r.opacity -
                      (y.particles.opacity.value -
                        y.interactivity.modes.bubble.opacity) *
                        a) < r.opacity &&
                    s >= y.interactivity.modes.bubble.opacity &&
                    (r.opacity_bubble = s)))
            : e(),
          "mouseleave" == y.interactivity.status && e())
        : y.interactivity.events.onclick.enable &&
          isInArray("bubble", y.interactivity.events.onclick.mode) &&
          (y.tmp.bubble_clicking &&
            ((c = r.x - y.interactivity.mouse.click_pos_x),
            (o = r.y - y.interactivity.mouse.click_pos_y),
            (l = Math.sqrt(c * c + o * o)),
            (v =
              (new Date().getTime() - y.interactivity.mouse.click_time) / 1e3) >
              y.interactivity.modes.bubble.duration &&
              (y.tmp.bubble_duration_end = !0),
            v > 2 * y.interactivity.modes.bubble.duration &&
              ((y.tmp.bubble_clicking = !1), (y.tmp.bubble_duration_end = !1))),
          y.tmp.bubble_clicking &&
            (t(
              y.interactivity.modes.bubble.size,
              y.particles.size.value,
              r.radius_bubble,
              r.radius,
              "size"
            ),
            t(
              y.interactivity.modes.bubble.opacity,
              y.particles.opacity.value,
              r.opacity_bubble,
              r.opacity,
              "opacity"
            )));
    }),
    (y.fn.modes.repulseParticle = function (e) {
      var t, a, i, n, s, r, c, o, l, v, p, d, m, u, b;
      y.interactivity.events.onhover.enable &&
      isInArray("repulse", y.interactivity.events.onhover.mode) &&
      "mousemove" == y.interactivity.status
        ? ((t = e.x - y.interactivity.mouse.pos_x),
          (a = e.y - y.interactivity.mouse.pos_y),
          (n = t / (i = Math.sqrt(t * t + a * a))),
          (s = a / i),
          (r = clamp(
            (1 / (o = y.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(i / o, 2) + 1) *
              o *
              100,
            0,
            50
          )),
          (c = { x: e.x + n * r, y: e.y + s * r }),
          "bounce" == y.particles.move.out_mode
            ? (0 < c.x - e.radius && c.x + e.radius < y.canvas.w && (e.x = c.x),
              0 < c.y - e.radius && c.y + e.radius < y.canvas.h && (e.y = c.y))
            : ((e.x = c.x), (e.y = c.y)))
        : y.interactivity.events.onclick.enable &&
          isInArray("repulse", y.interactivity.events.onclick.mode) &&
          (y.tmp.repulse_finish ||
            (y.tmp.repulse_count++,
            y.tmp.repulse_count == y.particles.array.length &&
              (y.tmp.repulse_finish = !0)),
          y.tmp.repulse_clicking
            ? ((o = Math.pow(y.interactivity.modes.repulse.distance / 6, 3)),
              (l = y.interactivity.mouse.click_pos_x - e.x),
              (v = y.interactivity.mouse.click_pos_y - e.y),
              (d = (-o / (p = l * l + v * v)) * 1),
              p <= o &&
                ((b = Math.atan2(v, l)),
                (e.vx = d * Math.cos(b)),
                (e.vy = d * Math.sin(b)),
                "bounce" == y.particles.move.out_mode &&
                  ((m = e.x + e.vx),
                  (u = e.y + e.vy),
                  (m + e.radius > y.canvas.w || m - e.radius < 0) &&
                    (e.vx = -e.vx),
                  (u + e.radius > y.canvas.h || u - e.radius < 0) &&
                    (e.vy = -e.vy))))
            : 0 == y.tmp.repulse_clicking &&
              ((e.vx = e.vx_i), (e.vy = e.vy_i)));
    }),
    (y.fn.modes.grabParticle = function (e) {
      var t, a, i, n, s;
      y.interactivity.events.onhover.enable &&
        "mousemove" == y.interactivity.status &&
        ((t = e.x - y.interactivity.mouse.pos_x),
        (a = e.y - y.interactivity.mouse.pos_y),
        (i = Math.sqrt(t * t + a * a)) <= y.interactivity.modes.grab.distance &&
          0 <
            (n =
              y.interactivity.modes.grab.line_linked.opacity -
              i /
                (1 / y.interactivity.modes.grab.line_linked.opacity) /
                y.interactivity.modes.grab.distance) &&
          ((s = y.particles.line_linked.color_rgb_line),
          (y.canvas.ctx.strokeStyle =
            "rgba(" + s.r + "," + s.g + "," + s.b + "," + n + ")"),
          (y.canvas.ctx.lineWidth = y.particles.line_linked.width),
          y.canvas.ctx.beginPath(),
          y.canvas.ctx.moveTo(e.x, e.y),
          y.canvas.ctx.lineTo(
            y.interactivity.mouse.pos_x,
            y.interactivity.mouse.pos_y
          ),
          y.canvas.ctx.stroke(),
          y.canvas.ctx.closePath()));
    }),
    (y.fn.vendors.eventsListeners = function () {
      "window" == y.interactivity.detect_on
        ? (y.interactivity.el = window)
        : (y.interactivity.el = y.canvas.el),
        (y.interactivity.events.onhover.enable ||
          y.interactivity.events.onclick.enable) &&
          (y.interactivity.el.addEventListener("mousemove", function (e) {
            var t, a;
            (a =
              y.interactivity.el == window
                ? ((t = e.clientX), e.clientY)
                : ((t = e.offsetX || e.clientX), e.offsetY || e.clientY)),
              (y.interactivity.mouse.pos_x = t),
              (y.interactivity.mouse.pos_y = a),
              y.tmp.retina &&
                ((y.interactivity.mouse.pos_x *= y.canvas.pxratio),
                (y.interactivity.mouse.pos_y *= y.canvas.pxratio)),
              (y.interactivity.status = "mousemove");
          }),
          y.interactivity.el.addEventListener("mouseleave", function (e) {
            (y.interactivity.mouse.pos_x = null),
              (y.interactivity.mouse.pos_y = null),
              (y.interactivity.status = "mouseleave");
          })),
        y.interactivity.events.onclick.enable &&
          y.interactivity.el.addEventListener("click", function () {
            if (
              ((y.interactivity.mouse.click_pos_x =
                y.interactivity.mouse.pos_x),
              (y.interactivity.mouse.click_pos_y = y.interactivity.mouse.pos_y),
              (y.interactivity.mouse.click_time = new Date().getTime()),
              y.interactivity.events.onclick.enable)
            )
              switch (y.interactivity.events.onclick.mode) {
                case "push":
                  y.particles.move.enable ||
                  1 == y.interactivity.modes.push.particles_nb
                    ? y.fn.modes.pushParticles(
                        y.interactivity.modes.push.particles_nb,
                        y.interactivity.mouse
                      )
                    : 1 < y.interactivity.modes.push.particles_nb &&
                      y.fn.modes.pushParticles(
                        y.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  y.fn.modes.removeParticles(
                    y.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  y.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (y.tmp.repulse_clicking = !0),
                    (y.tmp.repulse_count = 0),
                    (y.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      y.tmp.repulse_clicking = !1;
                    }, 1e3 * y.interactivity.modes.repulse.duration);
              }
          });
    }),
    (y.fn.vendors.densityAutoParticles = function () {
      var e, t, a;
      y.particles.number.density.enable &&
        ((e = (y.canvas.el.width * y.canvas.el.height) / 1e3),
        y.tmp.retina && (e /= 2 * y.canvas.pxratio),
        (t =
          (e * y.particles.number.value) /
          y.particles.number.density.value_area),
        (a = y.particles.array.length - t) < 0
          ? y.fn.modes.pushParticles(Math.abs(a))
          : y.fn.modes.removeParticles(a));
    }),
    (y.fn.vendors.checkOverlap = function (e, t) {
      for (var a = 0; a < y.particles.array.length; a++) {
        var i = y.particles.array[a],
          n = e.x - i.x,
          s = e.y - i.y;
        Math.sqrt(n * n + s * s) <= e.radius + i.radius &&
          ((e.x = t ? t.x : Math.random() * y.canvas.w),
          (e.y = t ? t.y : Math.random() * y.canvas.h),
          y.fn.vendors.checkOverlap(e));
      }
    }),
    (y.fn.vendors.createSvgImg = function (n) {
      var e = y.tmp.source_svg.replace(
          /#([0-9A-F]{3,6})/gi,
          function (e, t, a, i) {
            return n.color.rgb
              ? "rgba(" +
                  n.color.rgb.r +
                  "," +
                  n.color.rgb.g +
                  "," +
                  n.color.rgb.b +
                  "," +
                  n.opacity +
                  ")"
              : "hsla(" +
                  n.color.hsl.h +
                  "," +
                  n.color.hsl.s +
                  "%," +
                  n.color.hsl.l +
                  "%," +
                  n.opacity +
                  ")";
          }
        ),
        t = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
        a = window.URL || window.webkitURL || window,
        i = a.createObjectURL(t),
        s = new Image();
      s.addEventListener("load", function () {
        (n.img.obj = s),
          (n.img.loaded = !0),
          a.revokeObjectURL(i),
          y.tmp.count_svg++;
      }),
        (s.src = i);
    }),
    (y.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(y.fn.drawAnimFrame), a.remove(), (pJSDom = null);
    }),
    (y.fn.vendors.drawShape = function (e, t, a, i, n, s) {
      var r = n * s,
        c = n / s,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
      for (var v = 0; v < r; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (y.fn.vendors.exportImg = function () {
      window.open(y.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (y.fn.vendors.loadImg = function (e) {
      var t, a;
      (y.tmp.img_error = void 0),
        "" != y.particles.shape.image.src
          ? "svg" == e
            ? ((t = new XMLHttpRequest()).open(
                "GET",
                y.particles.shape.image.src
              ),
              (t.onreadystatechange = function (e) {
                4 == t.readyState &&
                  (200 == t.status
                    ? ((y.tmp.source_svg = e.currentTarget.response),
                      y.fn.vendors.checkBeforeDraw())
                    : (console.log("Error pJS - Image not found"),
                      (y.tmp.img_error = !0)));
              }),
              t.send())
            : ((a = new Image()).addEventListener("load", function () {
                (y.tmp.img_obj = a), y.fn.vendors.checkBeforeDraw();
              }),
              (a.src = y.particles.shape.image.src))
          : (console.log("Error pJS - No image.src"), (y.tmp.img_error = !0));
    }),
    (y.fn.vendors.draw = function () {
      "image" == y.particles.shape.type
        ? "svg" == y.tmp.img_type
          ? y.tmp.count_svg >= y.particles.number.value
            ? (y.fn.particlesDraw(),
              y.particles.move.enable
                ? (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw))
                : cancelRequestAnimFrame(y.fn.drawAnimFrame))
            : y.tmp.img_error ||
              (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw))
          : null != y.tmp.img_obj
          ? (y.fn.particlesDraw(),
            y.particles.move.enable
              ? (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw))
              : cancelRequestAnimFrame(y.fn.drawAnimFrame))
          : y.tmp.img_error ||
            (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw))
        : (y.fn.particlesDraw(),
          y.particles.move.enable
            ? (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw))
            : cancelRequestAnimFrame(y.fn.drawAnimFrame));
    }),
    (y.fn.vendors.checkBeforeDraw = function () {
      "image" == y.particles.shape.type
        ? "svg" == y.tmp.img_type && null == y.tmp.source_svg
          ? (y.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(y.tmp.checkAnimFrame),
            y.tmp.img_error || (y.fn.vendors.init(), y.fn.vendors.draw()))
        : (y.fn.vendors.init(), y.fn.vendors.draw());
    }),
    (y.fn.vendors.init = function () {
      y.fn.retinaInit(),
        y.fn.canvasInit(),
        y.fn.canvasSize(),
        y.fn.canvasPaint(),
        y.fn.particlesCreate(),
        y.fn.vendors.densityAutoParticles(),
        (y.particles.line_linked.color_rgb_line = hexToRgb(
          y.particles.line_linked.color
        ));
    }),
    (y.fn.vendors.start = function () {
      isInArray("image", y.particles.shape.type)
        ? ((y.tmp.img_type = y.particles.shape.image.src.substr(
            y.particles.shape.image.src.length - 3
          )),
          y.fn.vendors.loadImg(y.tmp.img_type))
        : y.fn.vendors.checkBeforeDraw();
    }),
    y.fn.vendors.eventsListeners(),
    y.fn.vendors.start();
};
(Object.deepExtend = function (e, t) {
  for (var a in t)
    t[a] && t[a].constructor && t[a].constructor === Object
      ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
      : (e[a] = t[a]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      (e = e || "particles-js");
    var a = document.getElementById(e),
      i = "particles-js-canvas-el",
      n = a.getElementsByClassName(i);
    if (n.length) for (; 0 < n.length; ) a.removeChild(n[0]);
    var s = document.createElement("canvas");
    (s.className = i),
      (s.style.width = "100%"),
      (s.style.height = "100%"),
      null != document.getElementById(e).appendChild(s) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (a, e, i) {
    var n = new XMLHttpRequest();
    n.open("GET", e),
      (n.onreadystatechange = function (e) {
        var t;
        4 == n.readyState &&
          (200 == n.status
            ? ((t = JSON.parse(e.currentTarget.response)),
              window.particlesJS(a, t),
              i && i())
            : (console.log("Error pJS - XMLHttpRequest status: " + n.status),
              console.log("Error pJS - File config not found")));
      }),
      n.send();
  });
$("#particles-js").length &&
  particlesJS("particles-js", {
    particles: {
      number: { value: 50, density: { enable: !0, value_area: 500 } },
      color: { value: "#ffffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: {
        value: 0.5,
        random: !1,
        anim: { enable: !1, speed: 1, opacity_min: 0.3, sync: !1 },
      },
      size: {
        value: 3,
        random: !0,
        anim: { enable: !1, speed: 40, size_min: 0.3, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 200,
        color: "#ffffff",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "right",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "repulse" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 240, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: !0,
  });
