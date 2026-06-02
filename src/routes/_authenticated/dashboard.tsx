import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FiPackage, FiTruck, FiUserCheck, FiDollarSign, FiTrendingUp, FiMapPin,
} from "react-icons/fi";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid,
} from "recharts";
import { useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Transport Agencies" }] }),
  component: Dashboard,
});

const stats = [
  { label: "Total Bookings", value: "1,284", change: "+12.4%", icon: FiPackage, tone: "from-sky-500 to-cyan-400" },
  { label: "Active Deliveries", value: "67", change: "+4.1%", icon: FiTruck, tone: "from-indigo-500 to-blue-400" },
  { label: "Drivers Available", value: "42", change: "-2", icon: FiUserCheck, tone: "from-emerald-500 to-teal-400" },
  { label: "Monthly Revenue", value: "$184.2k", change: "+18.7%", icon: FiDollarSign, tone: "from-amber-500 to-orange-400" },
];

const revenue = [
  { m: "Jan", v: 42 }, { m: "Feb", v: 58 }, { m: "Mar", v: 71 }, { m: "Apr", v: 64 },
  { m: "May", v: 89 }, { m: "Jun", v: 102 }, { m: "Jul", v: 124 }, { m: "Aug", v: 138 },
  { m: "Sep", v: 152 }, { m: "Oct", v: 168 }, { m: "Nov", v: 184 }, { m: "Dec", v: 198 },
];

const bookings = [
  { d: "Mon", v: 24 }, { d: "Tue", v: 31 }, { d: "Wed", v: 28 },
  { d: "Thu", v: 42 }, { d: "Fri", v: 38 }, { d: "Sat", v: 22 }, { d: "Sun", v: 18 },
];

const activities = [
  { id: "TX-9123", text: "Booking dispatched", time: "2m ago", route: "Karachi → Lahore" },
  { id: "TX-9118", text: "Delivery completed", time: "14m ago", route: "Multan → Faisalabad" },
  { id: "DR-204", text: "Driver verified", time: "1h ago", route: "Ahmed Khan" },
  { id: "VH-058", text: "Vehicle maintenance logged", time: "2h ago", route: "Volvo FH16" },
  { id: "TX-9099", text: "Payment received", time: "3h ago", route: "$2,840" },
];

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""} 👋
        </h1>
        <p className="text-muted-foreground mt-1">Here's what's happening across your fleet today.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-5 shadow-soft hover:shadow-glow transition"
          >
            <div className="flex items-center justify-between">
              <div className={`size-10 rounded-xl bg-gradient-to-br ${s.tone} grid place-items-center text-white`}>
                <s.icon />
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{s.change}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
            <p className="font-display text-3xl font-semibold mt-1">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Revenue</p>
              <h3 className="font-display text-xl font-semibold">$1.42M this year</h3>
            </div>
            <span className="flex items-center text-xs text-emerald-600 dark:text-emerald-400">
              <FiTrendingUp className="mr-1" /> +24% YoY
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenue}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.42 0.10 220)" />
                    <stop offset="100%" stopColor="oklch(0.78 0.10 195)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.6 0.02 230 / 0.15)" />
                <XAxis dataKey="m" stroke="currentColor" opacity={0.5} fontSize={12} />
                <YAxis stroke="currentColor" opacity={0.5} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 12, color: "var(--foreground)",
                  }}
                />
                <Line type="monotone" dataKey="v" stroke="url(#g1)" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6 shadow-soft"
        >
          <p className="text-sm text-muted-foreground">Bookings this week</p>
          <h3 className="font-display text-xl font-semibold">203</h3>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookings}>
                <XAxis dataKey="d" stroke="currentColor" opacity={0.5} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 12, color: "var(--foreground)",
                  }}
                />
                <Bar dataKey="v" fill="oklch(0.62 0.12 205)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-display text-lg font-semibold mb-4">Recent activity</h3>
          <ul className="divide-y divide-border">
            {activities.map((a) => (
              <li key={a.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-9 rounded-lg bg-secondary grid place-items-center text-secondary-foreground shrink-0">
                    <FiPackage />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{a.text}</p>
                    <p className="text-sm text-muted-foreground truncate">{a.id} · {a.route}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{a.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="glass rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-display text-lg font-semibold mb-4">Live tracking</h3>
          <div className="space-y-3">
            {[
              { id: "TX-9123", route: "Karachi → Lahore", pct: 72 },
              { id: "TX-9087", route: "Multan → Islamabad", pct: 41 },
              { id: "TX-9051", route: "Quetta → Hyderabad", pct: 8 },
              { id: "TX-9044", route: "Sialkot → Karachi", pct: 92 },
            ].map((r) => (
              <div key={r.id} className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium flex items-center gap-1.5"><FiMapPin className="text-accent" /> {r.id}</span>
                  <span className="text-muted-foreground text-xs">{r.route}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: `${r.pct}%` }} transition={{ duration: 1 }}
                    className="h-full bg-gradient-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
