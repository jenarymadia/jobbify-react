import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/Components/nav-favorites"
import { NavMain } from "@/Components/nav-main"
import { NavSecondary } from "@/Components/nav-secondary"
import { NavWorkspaces } from "@/Components/nav-workspaces"
import { TeamSwitcher } from "@/Components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/Components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "Jobbify",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: "📊",
    },
    {
      title: "Clients",
      url: "dashboard",
      icon: "🤵",
    },
    {
      title: "Leads",
      url: "dashboard",
      icon: "📝",
      isActive: true,
    },
    {
      title: "Jobs",
      url: "dashboard",
      icon: "🛠️",
      badge: "10",
    },
    {
      title: "Quotes",
      url: "quotes.index",
      icon: "🧾",
      badge: "10",
    },
    {
      title: "Invoices",
      url: "dashboard",
      icon: "💸",
      badge: "10",
    },

    
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  )
}
