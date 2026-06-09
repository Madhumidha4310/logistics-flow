"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiTruck, FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export const metadata = {
  title: "Create account — Transport Agencies",
};

export default function SignupPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { full_name: fullName },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data.user?.id) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({ id: data.user.id, full_name: fullName });

      if (profileError) {
        console.error("Failed to create profile:", profileError.message);
      }
    }

    if (data.session) {
      toast.success("Account created successfully. Redirecting to dashboard...");
      router.push("/dashboard");
      return;
    }

    toast.success("Account created! Check your email to verify and then sign in.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 md:p-12 order-2 lg:order-1">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="size-9 rounded-xl bg-gradient-accent grid place-items-center text-white"><FiTruck /></div>
            <span className="font-display font-semibold">Transport Agencies</span>
          </Link>

          <h1 className="font-display text-3xl font-semibold tracking-tight">Create your account</h1>
          <p className="mt-2 text-muted-foreground">Start managing your fleet in under 5 minutes.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Cooper"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  minLength={6}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-gradient-accent text-white hover:opacity-95">
              {loading ? "Creating account..." : <>Create account <FiArrowRight className="ml-2" /></>}
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            Already have an account? <Link href="/login" className="text-accent font-medium hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>

      <div className="relative hidden lg:flex bg-gradient-hero text-white p-12 flex-col justify-between overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 [background:radial-gradient(50%_60%_at_80%_30%,oklch(0.78_0.10_195/.3),transparent_70%)]" />
        <Link href="/" className="relative flex items-center gap-2 justify-end">
          <span className="font-display font-semibold">Transport Agencies</span>
          <div className="size-9 rounded-xl bg-white/10 grid place-items-center"><FiTruck /></div>
        </Link>
        <div className="relative">
          <h2 className="font-display text-4xl font-semibold leading-tight">
            Move freight with <span className="text-gradient">precision and confidence</span>.
          </h2>
          <ul className="mt-6 space-y-3 text-white/75 text-sm">
            <li>• Free during beta — no credit card required</li>
            <li>• Unlimited drivers and vehicles</li>
            <li>• Real-time tracking and customer portal</li>
            <li>• Role-based access for your whole team</li>
          </ul>
        </div>
        <p className="relative text-sm text-white/50">© {new Date().getFullYear()} Transport Agencies</p>
      </div>
    </div>
  );
}
