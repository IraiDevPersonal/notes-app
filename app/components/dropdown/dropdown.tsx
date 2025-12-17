"use client";

import { useDropdown } from "./dropdown-provider";

type DropdownProps = {
  children: React.ReactNode;
};

export function Dropdown({ children }: DropdownProps) {
  const { containerRef } = useDropdown();

  return (
    <div className="relative w-max" ref={containerRef}>
      {children}
    </div>
  );
}
