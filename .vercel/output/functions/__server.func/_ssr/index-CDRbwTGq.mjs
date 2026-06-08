import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as FiArrowRight, r as FiCheckCircle, F as FiTruck, m as FiMapPin, j as FiPackage, o as FiBarChart2, p as FiShield, s as FiClock, f as FiSun, g as FiMoon } from "../_libs/react-icons.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { u as useAuth, a as useTheme } from "./router-DgeizMII.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
const features = [{
  icon: FiTruck,
  title: "Fleet Management",
  desc: "Track every vehicle, maintenance log, and assignment in real time."
}, {
  icon: FiMapPin,
  title: "Live Tracking",
  desc: "Pinpoint shipments on the map and share ETAs with customers automatically."
}, {
  icon: FiPackage,
  title: "Smart Bookings",
  desc: "Create, dispatch, and invoice shipments in seconds with built-in workflows."
}, {
  icon: FiBarChart2,
  title: "Analytics",
  desc: "Revenue, utilization, and driver KPIs in clean, interactive dashboards."
}, {
  icon: FiShield,
  title: "Role-Based Access",
  desc: "Super Admin, Admin, Manager and Customer roles with granular permissions."
}, {
  icon: FiClock,
  title: "24/7 Operations",
  desc: "Push notifications and SLA alerts keep your team ahead of every delivery."
}];
const stats = [{
  value: "12M+",
  label: "Shipments tracked"
}, {
  value: "98.4%",
  label: "On-time delivery"
}, {
  value: "320+",
  label: "Agencies onboard"
}, {
  value: "<60s",
  label: "Booking to dispatch"
}];
function Nav() {
  const {
    user
  } = useAuth();
  const {
    theme,
    toggle
  } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-gradient-accent grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiTruck, { className: "text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-lg", children: "Transport Agencies" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground transition", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stats", className: "hover:text-foreground transition", children: "Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "hover:text-foreground transition", children: "Get Started" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": "Toggle theme", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiSun, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(FiMoon, {}) }),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: "Dashboard" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", asChild: true, className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", children: [
          "Start free ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "ml-1" })
        ] }) })
      ] })
    ] })
  ] }) });
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-32 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-95 -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,oklch(0.78_0.10_195/.25),transparent_70%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/80 border-white/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[oklch(0.78_0.10_195)] animate-pulse" }),
            "New · Live tracking 2.0 is here"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight", children: [
            "The command center for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "modern transport agencies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/75 max-w-xl", children: "Bookings, fleet, drivers, payments and live shipment tracking — unified in one enterprise-grade platform built for speed and scale." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-[oklch(0.24_0.07_240)] hover:bg-white/90 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", children: [
              "Get started free ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "ml-2" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-white/30 text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-3 text-sm text-white/75", children: ["No credit card required", "Setup in under 5 minutes", "Role-based access control", "Live shipment ETAs"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FiCheckCircle, { className: "text-[oklch(0.78_0.10_195)]" }),
            " ",
            t
          ] }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.8,
          delay: 0.15
        }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-glow animate-float", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/60", children: "Live Operations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: "Fleet overview" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs rounded-full bg-emerald-400/20 text-emerald-300 px-2 py-1 border border-emerald-400/30", children: "All systems normal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [{
            k: "Active",
            v: "184",
            c: "text-emerald-300"
          }, {
            k: "In transit",
            v: "67",
            c: "text-sky-300"
          }, {
            k: "Idle",
            v: "12",
            c: "text-amber-300"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/5 border border-white/10 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60", children: s.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-2xl font-semibold ${s.c}`, children: s.v })
          ] }, s.k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: [{
            id: "TX-9123",
            route: "Karachi → Lahore",
            status: "On time",
            pct: 72
          }, {
            id: "TX-9087",
            route: "Multan → Islamabad",
            status: "Delayed",
            pct: 41
          }, {
            id: "TX-9051",
            route: "Quetta → Hyderabad",
            status: "Loading",
            pct: 8
          }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: r.route }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: r.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              width: 0
            }, animate: {
              width: `${r.pct}%`
            }, transition: {
              duration: 1.2,
              delay: 0.4
            }, className: "h-full bg-gradient-to-r from-[oklch(0.62_0.12_205)] to-[oklch(0.78_0.10_195)]" }) })
          ] }, r.id)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stats", className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "glass rounded-2xl p-6 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-semibold text-gradient", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-accent uppercase tracking-widest", children: "Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight", children: "Everything you need to run a modern transport agency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "From the first booking to the final invoice — built for operators who care about speed, clarity, and control." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.06
      }, className: "group glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-accent grid place-items-center text-white shadow-glow group-hover:scale-105 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-hero shadow-glow p-12 md:p-16 text-white text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,oklch(0.78_0.10_195/.25),transparent_70%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative font-display text-4xl md:text-5xl font-semibold tracking-tight", children: "Ready to move smarter?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-4 text-white/75 max-w-xl mx-auto", children: "Start free today. Onboard your fleet in minutes, and unlock real-time visibility across every booking." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-[oklch(0.24_0.07_240)] hover:bg-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", children: [
          "Create free account ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "ml-2" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-white/30 text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-lg bg-gradient-accent grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiTruck, { className: "text-white text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: "Transport Agencies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Transport Agencies. All rights reserved."
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
