"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { CreatePortal } from "../create-portal";
import { useDropdownContext } from "./dropdown-context";
import { getTransformOrigin, DROPDOWN_CONTENT_GAP } from "./utils";
import { DropdownPlacement, DropdownPosition } from "./type";

type DropdownContentProps = {
  placement?: DropdownPlacement;
  children: React.ReactNode;
};

export function DropdownContent({
  placement = "right-end",
  children,
}: DropdownContentProps) {
  const {
    open,
    onOpenChange: setOpen,
    containerRef,
    triggerRef,
  } = useDropdownContext();
  const { position } = useDropdown(containerRef, open, placement);
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
        className="my-1 z-30 data-[open=true]:block data-[open=false]:hidden min-w-36 w-max transition-discrete transition-all data-[open=true]:scale-100 scale-95 data-[open=true]:opacity-100 opacity-0 bg-box rounded border border-border p-1"
      >
        <ul className="rounded-sm overflow-hidden">{children}</ul>
      </div>
    </CreatePortal>
  );
}

function useDropdown(
  containerRef: React.RefObject<HTMLDivElement | null>,
  open: boolean,
  placement?: DropdownPlacement
) {
  const [position, setPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
  });

  const calculatePosition = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    switch (placement) {
      // BOTTOM
      case "bottom":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "bottom-start":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX;
        break;
      case "bottom-end":
        top = rect.bottom + scrollY + DROPDOWN_CONTENT_GAP;
        left = rect.right + scrollX;
        break;

      // TOP
      case "top":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "top-start":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.left + scrollX;
        break;
      case "top-end":
        top = rect.top + scrollY - DROPDOWN_CONTENT_GAP;
        left = rect.right + scrollX;
        break;

      // RIGHT
      case "right":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;
      case "right-start":
        top = rect.top + scrollY;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;
      case "right-end":
        top = rect.bottom + scrollY;
        left = rect.right + scrollX + DROPDOWN_CONTENT_GAP;
        break;

      // LEFT
      case "left":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
      case "left-start":
        top = rect.top + scrollY;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
      case "left-end":
        top = rect.bottom + scrollY;
        left = rect.left + scrollX - DROPDOWN_CONTENT_GAP;
        break;
    }

    setPosition({
      top,
      left,
      width: rect.width,
    });
  }, [containerRef, placement]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculatePosition();
  }, [calculatePosition]);

  useEffect(() => {
    if (!open || !containerRef.current) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculatePosition();

    window.addEventListener("scroll", calculatePosition);
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [open, containerRef, calculatePosition]);

  return { position };
}
