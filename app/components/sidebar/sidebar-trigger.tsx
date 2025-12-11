"use client";

import { PanelRightClose, X } from "lucide-react";
import { Button } from "../button";
import { useSidebar } from "./";

type SidebarTriggerProps = {
  asClose?: boolean;
};

export function SidebarTrigger({ asClose = false }: SidebarTriggerProps) {
  const { open, setOpen } = useSidebar();

  return (
    <Button
      size={"icon"}
      data-open={open}
      data-as-close={asClose}
      className="md:hidden not-[data-as-close=true]:data-[open=true]:[&>svg]:-rotate-180 [&>svg]:transition-transform [&>svg]:duration-300"
      onClick={() => setOpen(asClose ? false : undefined)}
    >
      {asClose ? <X /> : <PanelRightClose />}
    </Button>
  );
}
