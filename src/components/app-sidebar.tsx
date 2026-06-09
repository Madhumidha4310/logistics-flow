import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid, FiPackage, FiTruck, FiUsers, FiUser, FiMapPin,
  FiCreditCard, FiBarChart2, FiBell, FiSettings, FiShield, FiUserCheck,
} from "react-icons/fi";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/lib/auth-context";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: FiGrid },
  { title: "Bookings", url: "/dashboard", icon: FiPackage },
  { title: "Vehicles", url: "/dashboard", icon: FiTruck },
  { title: "Drivers", url: "/dashboard", icon: FiUserCheck },
  { title: "Customers", url: "/dashboard", icon: FiUsers },
  { title: "Tracking", url: "/dashboard", icon: FiMapPin },
];

const opsItems = [
  { title: "Payments", url: "/dashboard", icon: FiCreditCard },
  { title: "Reports", url: "/dashboard", icon: FiBarChart2 },
  { title: "Notifications", url: "/dashboard", icon: FiBell },
];

const adminItems = [
  { title: "Admin Panel", url: "/dashboard", icon: FiShield },
  { title: "Settings", url: "/dashboard", icon: FiSettings },
  { title: "Profile", url: "/dashboard", icon: FiUser },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { user } = useAuth();
  const path = usePathname() ?? "/";
  const isActive = (url: string) => path === url;

  const renderGroup = (label: string, items: typeof mainItems) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-[10px] tracking-widest">{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={isActive(item.url)}>
                <a href={item.url} className="flex items-center gap-3">
                  <item.icon className="size-4 shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border/50">
        <Link href="/dashboard" className="flex items-center gap-2 px-2 py-2">
          <div className="size-8 rounded-lg bg-gradient-accent grid place-items-center text-white shrink-0">
            <FiTruck className="size-4" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="font-display font-semibold text-sm truncate">Transport</p>
              <p className="text-[11px] text-sidebar-foreground/60 truncate">Agencies Platform</p>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {renderGroup("Operations", mainItems)}
        {renderGroup("Business", opsItems)}
        {renderGroup("Account", adminItems)}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/50">
        <div className="flex items-center gap-2 px-2 py-2 min-w-0">
          <div className="size-8 rounded-full bg-gradient-accent grid place-items-center text-white text-xs shrink-0">
            {user?.email?.[0]?.toUpperCase() ?? "U"}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{user?.email}</p>
              <p className="text-[11px] text-sidebar-foreground/60 truncate">Signed in</p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
