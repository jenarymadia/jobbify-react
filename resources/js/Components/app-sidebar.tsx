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
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

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
      url: "clients.index",
      icon: "🤵",
    },
    {
      title: "Leads",
      url: "leads.index",
      icon: "📝",
      isActive: true,
    },
    {
      title: "Jobs",
      url: "jobs.index",
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
      url: "invoices.index",
      icon: "💸",
      badge: "10",
    },
    {
      title: "Staffs",
      url: "staffs.index",
      icon: "👨‍💼",
      badge: "10",
    },
    {
      title: "Services",
      url: "services.index",
      icon: "🤝🏼",
      badge: "10",
    },
    {
      title: "Schedule",
      url: "schedule.index",
      icon: "📅",
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
      <SidebarContent>

      </SidebarContent>
      <SidebarFooter>
          <div className="p-1">
            <Card className="shadow-none">
              <form>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-sm">
                      <h3 className="text-base font-semibold leading-6 text-black-900">
                          Free Trial 
                      </h3>
                  </CardTitle>
                  <CardDescription>
                    <p>Get better experience and boost your workflow.</p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2.5 p-4">
                  <Button
                    className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
                    size="sm"
                  >
                    Upgrade now
                  </Button>
                </CardContent>
              </form>
            </Card>
          </div>
        </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
