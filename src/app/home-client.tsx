"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMoon, FiSun, FiTruck, FiMapPin, FiBarChart2, FiShield, FiClock, FiPackage, FiCheckCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";

const features = [
  { title: "Fleet Management", desc: "Track every vehicle, maintenance log, and assignment in real time.", icon: FiTruck },
  { title: "Live Tracking", desc: "Pinpoint shipments on the map and share ETAs with customers automatically.", icon: FiMapPin },
  { title: "Smart Bookings", desc: "Create, dispatch, and invoice shipments in seconds with built-in workflows.", icon: FiPackage },
  { title: "Analytics", desc: "Revenue, utilization, and driver KPIs in clean, interactive dashboards.", icon: FiBarChart2 },
  { title: "Role-Based Access", desc: "Super Admin, Admin, Manager and Customer roles with granular permissions.", icon: FiShield },
  { title: "24/7 Operations", desc: "Push notifications and SLA alerts keep your team ahead of every delivery.", icon: FiClock },
];

const stats = [
  { value: "12M+", label: "Shipments tracked" },
  { value: "98.4%", label: "On-time delivery" },
  { value: "320+", label: "Agencies onboard" },
  { value: "<60s", label: "Booking to dispatch" },
];

export default function HomeClient() {
  const { user } = useAuth();
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
              <FiTruck className="text-white" />
            </div>
            <span className="font-display font-semibold tracking-tight text-lg">Transport Agencies</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#stats" className="hover:text-foreground transition">Platform</a>
            <a href="#cta" className="hover:text-foreground transition">Get Started</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </Button>
            {user ? (
              <Button asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild className="hidden sm:inline-flex">
                  <a href="/login">Sign in</a>
                </Button>
                <Button asChild className="bg-gradient-accent text-white hover:opacity-95">
                  <a href="/signup">Start free <FiArrowRight className="ml-1" /></a>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="pt-32">
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 bg-gradient-hero opacity-95 -z-10" />
          <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,oklch(0.78_0.10_195/.25),transparent_70%)]" />
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center text-white">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/80 border-white/15">
                <span className="size-1.5 rounded-full bg-[oklch(0.78_0.10_195)] animate-pulse" />
                New · Live tracking 2.0 is here
              </span>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
                The command center for <span className="text-gradient">modern transport agencies</span>
              </h1>
              <p className="mt-6 text-lg text-white/75 max-w-xl">
                Bookings, fleet, drivers, payments and live shipment tracking — unified in one
                enterprise-grade platform built for speed and scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-[oklch(0.24_0.07_240)] hover:bg-white/90 shadow-glow">
                  <a href="/signup">Get started free <FiArrowRight className="ml-2" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                  <a href="/login">Sign in</a>
                </Button>
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-white/75">
                {[
                  "No credit card required",
                  "Setup in under 5 minutes",
                  "Role-based access control",
                  "Live shipment ETAs",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <FiCheckCircle className="text-[oklch(0.78_0.10_195)]" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
              <div className="glass rounded-3xl p-6 shadow-glow animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">Live Operations</p>
                    <p className="font-display text-xl font-semibold">Fleet overview</p>
                  </div>
                  <span className="text-xs rounded-full bg-emerald-400/20 text-emerald-300 px-2 py-1 border border-emerald-400/30">All systems normal</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { k: "Active", v: "184", c: "text-emerald-300" },
                    { k: "In transit", v: "67", c: "text-sky-300" },
                    { k: "Idle", v: "12", c: "text-amber-300" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="text-xs text-white/60">{s.k}</p>
                      <p className={`font-display text-2xl font-semibold ${s.c}`}>{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { id: "TX-9123", route: "Karachi → Lahore", status: "On time", pct: 72 },
                    { id: "TX-9087", route: "Multan → Islamabad", status: "Delayed", pct: 41 },
                    { id: "TX-9051", route: "Quetta → Hyderabad", status: "Loading", pct: 8 },
                  ].map((r) => (
                    <div key={r.id} className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{r.id}</span>
                        <span className="text-white/60">{r.route}</span>
                        <span className="text-xs">{r.status}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${r.pct}%` }}
                          transition={{ duration: 1.2, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-[oklch(0.62_0.12_205)] to-[oklch(0.78_0.10_195)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="stats" className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center shadow-soft"
              >
                <p className="font-display text-4xl font-semibold text-gradient">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent uppercase tracking-widest">Platform</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
                Everything you need to run a modern transport agency
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                From the first booking to the final invoice — built for operators who care about speed, clarity, and control.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="glass rounded-3xl p-6 shadow-soft hover:shadow-glow transition"
                >
                  <div className="size-11 rounded-3xl bg-secondary/10 text-secondary-foreground grid place-items-center mb-5">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-24 bg-background/70">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Launch faster</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Built for fleet operators who need control, speed, and visibility.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Start with enterprise-ready logistics, dispatch, reporting, and secure user roles — all in one powerful dashboard.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-gradient-accent text-white hover:opacity-95">
                <a href="/signup">Create an account</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-input text-foreground hover:bg-accent/10">
                <a href="/login">View demo login</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
