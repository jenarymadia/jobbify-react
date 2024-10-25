"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"
import { Link, usePage } from "@inertiajs/react"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: string
    isActive?: boolean
  }[]
}) {

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={route().current(item.url)}>
            <Link href={route(item.url)}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
