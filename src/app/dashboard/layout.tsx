"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import { FiMoon, FiSun, FiLogOut, FiBell } from "react-icons/fi";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="size-10 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 h-14 flex items-center gap-3 border-b border-border bg-background/80 backdrop-blur px-4">
            <SidebarTrigger />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <FiBell />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Theme">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={async () => {
                await signOut();
                router.replace("/");
              }}
              aria-label="Sign out"
            >
              <FiLogOut />
            </Button>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
