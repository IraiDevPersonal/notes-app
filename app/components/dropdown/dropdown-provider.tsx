"use client";

import React, { use, useState } from "react";

type DropdownContextProps = {
  open: boolean;
  setOpen: (open?: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const DropdownContext = React.createContext<DropdownContextProps | undefined>(
  undefined
);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const handleOpenChange = (open?: boolean) => {
    setOpen((prev) => (open === undefined ? !prev : open));
  };

  return (
    <DropdownContext
      value={{ open, setOpen: handleOpenChange, containerRef, triggerRef }}
    >
      {children}
    </DropdownContext>
  );
}

export const useDropdown = () => {
  const context = use(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
};
