"use client";

import {
  BookMinus,
  BookOpen,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ClipboardCheck,
  FileText,
  Info,
  LayoutDashboardIcon,
  LayoutGrid,
  LogOut,
  Notebook,
  Phone,
  Quote,
  Settings,
  UserCog,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    { icon: LayoutGrid, title: "Dashboard", url: "#dashboard" },
    { icon: Phone, title: "Felicity Activity", url: "#felicity-activity" },
    { icon: BriefcaseBusiness, title: "Task", url: "#task" },
    { icon: Calendar, title: "Calendar", url: "#calendar" },
    { icon: UserCog, title: "CRM", url: "#crm", items: [{ title: "Contacts", url: "#contacts" }] },
    { icon: Notebook, title: "Compliance", url: "#compliance" },
    {
      icon: BookMinus,
      title: "Knowledge",
      url: "#knowledge",
      items: [{ title: "Articles", url: "#articles" }],
    },
    { icon: Quote, title: "Preset Quotes", url: "/dashboard/" },
    { icon: Building2, title: "Properties", url: "#properties" },
    { icon: UserRound, title: "Contacts", url: "#contacts" },
    { icon: UsersRound, title: "Team", url: "#team" },
  ],
  navFooter: [
    { icon: Settings, title: "Setting", url: "#setting" },
    { icon: Info, title: "Info", url: "#info" },
    { icon: LogOut, title: "Log Out", url: "#logout" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <img
                  src="https://framerusercontent.com/images/aZJsQR2bshwnApvuz1Zz5DyFqI.png"
                  alt="Logo"
                  width={128}
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavMain items={data.navFooter} />
      </SidebarFooter>
    </Sidebar>
  );
}
