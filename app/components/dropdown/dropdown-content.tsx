"use client";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useRef } from "react";
import { CreatePortal } from "../create-portal";
import { useDropdown } from "./dropdown-provider";
import {
  DropdownPlacement,
  useDropdownContent,
} from "./hooks/use-dropdown-content";
import { getTransformOrigin } from "./lib/utils";

export function DropdownContent({
  placement = "right-end",
}: {
  placement?: DropdownPlacement;
}) {
  const { open, setOpen, containerRef, triggerRef } = useDropdown();
  const { position } = useDropdownContent(containerRef, open, placement);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(
    [dropdownRef, containerRef, triggerRef],
    () => setOpen(false),
    !open
  );

  return (
    <CreatePortal>
      <div
        ref={dropdownRef}
        data-open={open}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: getTransformOrigin(placement),
        }}
        className="my-1 z-30 data-[open=true]:block data-[open=false]:hidden min-w-36 w-max transition-discrete transition-all data-[open=true]:scale-100 scale-95 data-[open=true]:opacity-100 opacity-0 bg-background rounded border border-border p-1"
      >
        <ul className="*:px-3 *:py-1.5 *:hover:bg-foreground/8 *:transition-colors rounded-sm overflow-hidden cursor-pointer">
          {/* TODO: Crear componente DropdownItem */}
          <li onClick={() => setOpen(false)}>item 1</li>
          <li onClick={() => setOpen(false)}>item 2</li>
          <li onClick={() => setOpen(false)}>item 3</li>
        </ul>
      </div>
    </CreatePortal>
  );
}
