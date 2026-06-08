import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { j as FiPackage, F as FiTruck, k as FiUserCheck, t as FiDollarSign, u as FiTrendingUp, m as FiMapPin } from "../_libs/react-icons.mjs";
import { u as useAuth } from "./router-DgeizMII.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { R as ResponsiveContainer, L as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Line, B as BarChart, b as Bar } from "../_libs/recharts.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const stats = [{
  label: "Total Bookings",
  value: "1,284",
  change: "+12.4%",
  icon: FiPackage,
  tone: "from-sky-500 to-cyan-400"
}, {
  label: "Active Deliveries",
  value: "67",
  change: "+4.1%",
  icon: FiTruck,
  tone: "from-indigo-500 to-blue-400"
}, {
  label: "Drivers Available",
  value: "42",
  change: "-2",
  icon: FiUserCheck,
  tone: "from-emerald-500 to-teal-400"
}, {
  label: "Monthly Revenue",
  value: "$184.2k",
  change: "+18.7%",
  icon: FiDollarSign,
  tone: "from-amber-500 to-orange-400"
}];
const revenue = [{
  m: "Jan",
  v: 42
}, {
  m: "Feb",
  v: 58
}, {
  m: "Mar",
  v: 71
}, {
  m: "Apr",
  v: 64
}, {
  m: "May",
  v: 89
}, {
  m: "Jun",
  v: 102
}, {
  m: "Jul",
  v: 124
}, {
  m: "Aug",
  v: 138
}, {
  m: "Sep",
  v: 152
}, {
  m: "Oct",
  v: 168
}, {
  m: "Nov",
  v: 184
}, {
  m: "Dec",
  v: 198
}];
const bookings = [{
  d: "Mon",
  v: 24
}, {
  d: "Tue",
  v: 31
}, {
  d: "Wed",
  v: 28
}, {
  d: "Thu",
  v: 42
}, {
  d: "Fri",
  v: 38
}, {
  d: "Sat",
  v: 22
}, {
  d: "Sun",
  v: 18
}];
const activities = [{
  id: "TX-9123",
  text: "Booking dispatched",
  time: "2m ago",
  route: "Karachi → Lahore"
}, {
  id: "TX-9118",
  text: "Delivery completed",
  time: "14m ago",
  route: "Multan → Faisalabad"
}, {
  id: "DR-204",
  text: "Driver verified",
  time: "1h ago",
  route: "Ahmed Khan"
}, {
  id: "VH-058",
  text: "Vehicle maintenance logged",
  time: "2h ago",
  route: "Volvo FH16"
}, {
  id: "TX-9099",
  text: "Payment received",
  time: "3h ago",
  route: "$2,840"
}];
function Dashboard() {
  const {
    user
  } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: [
        "Welcome back",
        user?.email ? `, ${user.email.split("@")[0]}` : "",
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Here's what's happening across your fleet today." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.06
    }, className: "glass rounded-2xl p-5 shadow-soft hover:shadow-glow transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-xl bg-gradient-to-br ${s.tone} grid place-items-center text-white`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-emerald-600 dark:text-emerald-400", children: s.change })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold mt-1", children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2
      }, className: "lg:col-span-2 glass rounded-2xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "$1.42M this year" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center text-xs text-emerald-600 dark:text-emerald-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FiTrendingUp, { className: "mr-1" }),
            " +24% YoY"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: revenue, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.42 0.10 220)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.78 0.10 195)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "oklch(0.6 0.02 230 / 0.15)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "m", stroke: "currentColor", opacity: 0.5, fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "currentColor", opacity: 0.5, fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            color: "var(--foreground)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "v", stroke: "url(#g1)", strokeWidth: 3, dot: false })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.25
      }, className: "glass rounded-2xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Bookings this week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "203" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: bookings, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "d", stroke: "currentColor", opacity: 0.5, fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            color: "var(--foreground)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "v", fill: "oklch(0.62 0.12 205)", radius: [8, 8, 0, 0] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3
      }, className: "lg:col-span-2 glass rounded-2xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-4", children: "Recent activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: activities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-secondary grid place-items-center text-secondary-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiPackage, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate", children: a.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground truncate", children: [
                a.id,
                " · ",
                a.route
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: a.time })
        ] }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.35
      }, className: "glass rounded-2xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-4", children: "Live tracking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
          id: "TX-9123",
          route: "Karachi → Lahore",
          pct: 72
        }, {
          id: "TX-9087",
          route: "Multan → Islamabad",
          pct: 41
        }, {
          id: "TX-9051",
          route: "Quetta → Hyderabad",
          pct: 8
        }, {
          id: "TX-9044",
          route: "Sialkot → Karachi",
          pct: 92
        }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiMapPin, { className: "text-accent" }),
              " ",
              r.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: r.route })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            width: 0
          }, animate: {
            width: `${r.pct}%`
          }, transition: {
            duration: 1
          }, className: "h-full bg-gradient-accent" }) })
        ] }, r.id)) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
