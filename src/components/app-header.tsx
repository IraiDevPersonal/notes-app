"use client";

import { ROUTE_TITLES } from "@/lib/routes/titles";
import { ResourceViewModeSelector } from "@/modules/common/components/resource-view-mode-selector";
import { usePathname } from "next/navigation";

function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center gap-x-4">
      <h1 className="text-2xl font-semibold">{ROUTE_TITLES[pathname]}</h1>
      <ResourceViewModeSelector />
    </header>
  );
}

export { AppHeader };
