"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "./";

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { open } = useSidebar();

  return (
    <aside
      data-open={open}
      className={cn(
        "xs:min-w-72 xs:w-72 w-full h-dvh p-8 bg-box fixed md:relative top-0 left-0 z-30 transition-transform duration-300 -translate-x-full data-[open=true]:translate-x-0 md:translate-x-0"
      )}
    >
      <div className="flex flex-col h-full gap-y-8">{children}</div>
    </aside>
  );
}
