import { R as React } from "./react.mjs";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function FiUsers(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, "child": [] }, { "tag": "circle", "attr": { "cx": "9", "cy": "7", "r": "4" }, "child": [] }, { "tag": "path", "attr": { "d": "M23 21v-2a4 4 0 0 0-3-3.87" }, "child": [] }, { "tag": "path", "attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" }, "child": [] }] })(props);
}
function FiUser(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, "child": [] }, { "tag": "circle", "attr": { "cx": "12", "cy": "7", "r": "4" }, "child": [] }] })(props);
}
function FiUserCheck(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, "child": [] }, { "tag": "circle", "attr": { "cx": "8.5", "cy": "7", "r": "4" }, "child": [] }, { "tag": "polyline", "attr": { "points": "17 11 19 13 23 9" }, "child": [] }] })(props);
}
function FiTruck(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "1", "y": "3", "width": "15", "height": "13" }, "child": [] }, { "tag": "polygon", "attr": { "points": "16 8 20 8 23 11 23 16 16 16 16 8" }, "child": [] }, { "tag": "circle", "attr": { "cx": "5.5", "cy": "18.5", "r": "2.5" }, "child": [] }, { "tag": "circle", "attr": { "cx": "18.5", "cy": "18.5", "r": "2.5" }, "child": [] }] })(props);
}
function FiTrendingUp(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "23 6 13.5 15.5 8.5 10.5 1 18" }, "child": [] }, { "tag": "polyline", "attr": { "points": "17 6 23 6 23 12" }, "child": [] }] })(props);
}
function FiSun(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "5" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "1", "x2": "12", "y2": "3" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "21", "x2": "12", "y2": "23" }, "child": [] }, { "tag": "line", "attr": { "x1": "4.22", "y1": "4.22", "x2": "5.64", "y2": "5.64" }, "child": [] }, { "tag": "line", "attr": { "x1": "18.36", "y1": "18.36", "x2": "19.78", "y2": "19.78" }, "child": [] }, { "tag": "line", "attr": { "x1": "1", "y1": "12", "x2": "3", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "21", "y1": "12", "x2": "23", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "4.22", "y1": "19.78", "x2": "5.64", "y2": "18.36" }, "child": [] }, { "tag": "line", "attr": { "x1": "18.36", "y1": "5.64", "x2": "19.78", "y2": "4.22" }, "child": [] }] })(props);
}
function FiShield(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }, "child": [] }] })(props);
}
function FiSettings(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "3" }, "child": [] }, { "tag": "path", "attr": { "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }, "child": [] }] })(props);
}
function FiPackage(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "16.5", "y1": "9.4", "x2": "7.5", "y2": "4.21" }, "child": [] }, { "tag": "path", "attr": { "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, "child": [] }, { "tag": "polyline", "attr": { "points": "3.27 6.96 12 12.01 20.73 6.96" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "22.08", "x2": "12", "y2": "12" }, "child": [] }] })(props);
}
function FiMoon(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, "child": [] }] })(props);
}
function FiMapPin(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }, "child": [] }, { "tag": "circle", "attr": { "cx": "12", "cy": "10", "r": "3" }, "child": [] }] })(props);
}
function FiMail(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }, "child": [] }, { "tag": "polyline", "attr": { "points": "22,6 12,13 2,6" }, "child": [] }] })(props);
}
function FiLogOut(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, "child": [] }, { "tag": "polyline", "attr": { "points": "16 17 21 12 16 7" }, "child": [] }, { "tag": "line", "attr": { "x1": "21", "y1": "12", "x2": "9", "y2": "12" }, "child": [] }] })(props);
}
function FiLock(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "3", "y": "11", "width": "18", "height": "11", "rx": "2", "ry": "2" }, "child": [] }, { "tag": "path", "attr": { "d": "M7 11V7a5 5 0 0 1 10 0v4" }, "child": [] }] })(props);
}
function FiGrid(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "3", "y": "3", "width": "7", "height": "7" }, "child": [] }, { "tag": "rect", "attr": { "x": "14", "y": "3", "width": "7", "height": "7" }, "child": [] }, { "tag": "rect", "attr": { "x": "14", "y": "14", "width": "7", "height": "7" }, "child": [] }, { "tag": "rect", "attr": { "x": "3", "y": "14", "width": "7", "height": "7" }, "child": [] }] })(props);
}
function FiDollarSign(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "12", "y1": "1", "x2": "12", "y2": "23" }, "child": [] }, { "tag": "path", "attr": { "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }, "child": [] }] })(props);
}
function FiCreditCard(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "1", "y": "4", "width": "22", "height": "16", "rx": "2", "ry": "2" }, "child": [] }, { "tag": "line", "attr": { "x1": "1", "y1": "10", "x2": "23", "y2": "10" }, "child": [] }] })(props);
}
function FiClock(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" }, "child": [] }, { "tag": "polyline", "attr": { "points": "12 6 12 12 16 14" }, "child": [] }] })(props);
}
function FiCheckCircle(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14" }, "child": [] }, { "tag": "polyline", "attr": { "points": "22 4 12 14.01 9 11.01" }, "child": [] }] })(props);
}
function FiBell(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }, "child": [] }, { "tag": "path", "attr": { "d": "M13.73 21a2 2 0 0 1-3.46 0" }, "child": [] }] })(props);
}
function FiBarChart2(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "18", "y1": "20", "x2": "18", "y2": "10" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "20", "x2": "12", "y2": "4" }, "child": [] }, { "tag": "line", "attr": { "x1": "6", "y1": "20", "x2": "6", "y2": "14" }, "child": [] }] })(props);
}
function FiArrowRight(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "5", "y1": "12", "x2": "19", "y2": "12" }, "child": [] }, { "tag": "polyline", "attr": { "points": "12 5 19 12 12 19" }, "child": [] }] })(props);
}
export {
  FiTruck as F,
  FiUser as a,
  FiMail as b,
  FiLock as c,
  FiArrowRight as d,
  FiBell as e,
  FiSun as f,
  FiMoon as g,
  FiLogOut as h,
  FiGrid as i,
  FiPackage as j,
  FiUserCheck as k,
  FiUsers as l,
  FiMapPin as m,
  FiCreditCard as n,
  FiBarChart2 as o,
  FiShield as p,
  FiSettings as q,
  FiCheckCircle as r,
  FiClock as s,
  FiDollarSign as t,
  FiTrendingUp as u
};
