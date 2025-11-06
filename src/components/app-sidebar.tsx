import { Share2, Star, Trash, UserLock } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "./ui/nav-link";
import { ROUTES } from "@/lib/routes";
import { ROUTE_TITLES } from "@/lib/routes/titles";

const routes = [
  {
    href: ROUTES.MY_NOTES,
    label: ROUTE_TITLES[ROUTES.MY_NOTES],
    icon: UserLock,
  },
  {
    href: ROUTES.SHARED_NOTES,
    label: ROUTE_TITLES[ROUTES.SHARED_NOTES],
    icon: Share2,
  },
  {
    href: ROUTES.FAVORITE_NOTES,
    label: ROUTE_TITLES[ROUTES.FAVORITE_NOTES],
    icon: Star,
  },
  {
    href: ROUTES.TRASH,
    label: ROUTE_TITLES[ROUTES.TRASH],
    icon: Trash,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="text-3xl font-bold italic">NotesApp</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild>
                    <NavLink href={route.href}>
                      <route.icon />
                      <span>{route.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
