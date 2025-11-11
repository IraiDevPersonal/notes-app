"use client";

import { ROUTE_TITLES } from "@/lib/routes/titles";
import { usePathname } from "next/navigation";

export function FoldersTitle() {
  const pathname = usePathname();
  return <h1 className="text-2xl font-semibold">{ROUTE_TITLES[pathname]}</h1>;
}
