"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, Package, Settings, Truck, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export default function Sidebar() {
  const pathname = usePathname()

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Products",
      href: "/products",
      icon: <Box className="h-5 w-5" />,
    },
    {
      title: "Inventory",
      href: "/inventory",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Suppliers",
      href: "/suppliers",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Users",
      href: "/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-white">
      <div className="flex flex-col gap-1 p-4">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 py-2.5 px-3 text-sm font-medium",
                pathname === item.href && "bg-secondary text-primary font-medium",
              )}
            >
              {item.icon}
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </aside>
  )
}

