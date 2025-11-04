"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ROUTE_TITLES } from "@/lib/routes/titles";

function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center gap-x-4">
      <h1 className="text-2xl font-semibold">{ROUTE_TITLES[pathname]}</h1>
      <Button>
        <span>Agregar</span>
        <Plus />
      </Button>
    </header>
  );
}

export { AppHeader };
