"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import React, { use, useEffect, useState } from "react";

type SidebarContextProps = {
  setOpen: (open?: boolean) => void;
  open: boolean;
};

const SidebarContext = React.createContext<SidebarContextProps | undefined>(
  undefined
);

type SidebarProviderProps = {
  children: React.ReactNode;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  useMediaQuery("(max-width: 48rem)", () => setOpen(false));

  const handleToggleOpenState = (open?: boolean) => {
    setOpen((prevValue) => open ?? !prevValue);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <SidebarContext
      value={{
        setOpen: handleToggleOpenState,
        open,
      }}
    >
      {children}
    </SidebarContext>
  );
}

export const useSidebar = () => {
  const context = use(SidebarContext);

  if (!context) {
    throw new Error("Solo puede usarse useSidebar dentro de su provider");
  }

  return context;
};
