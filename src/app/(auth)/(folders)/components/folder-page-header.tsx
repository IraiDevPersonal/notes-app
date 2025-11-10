"use client";

import { ROUTE_TITLES } from "@/lib/routes/titles";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { usePathname } from "next/navigation";

export function FolderPageHeader() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center gap-x-4">
      <h1 className="text-2xl font-semibold">{ROUTE_TITLES[pathname]}</h1>
      <ResourceViewModeSelector />
    </header>
  );
}
