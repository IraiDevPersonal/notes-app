"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <aside
      data-open={open}
      className={cn(
        "xs:min-w-72 xs:w-72 w-full h-dvh p-8 bg-background-foreground fixed md:relative top-0 left-0 z-20 transition-transform duration-300 data-[open=false]:-translate-x-full data-[open=true]:translate-x-0 md:translate-x-0"
      )}
    >
      <Button
        data-open={open}
        size={"icon"}
        className="absolute! top-8 -right-4.5 md:hidden hover:data-[open=false]:translate-x-3 transition-transform duration-300 data-[open=true]:[&>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-300"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight />
      </Button>
      <div className="flex flex-col h-full gap-y-8">{children}</div>
    </aside>
  );
}
