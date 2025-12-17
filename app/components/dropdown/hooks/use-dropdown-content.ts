import { useCallback, useEffect, useState } from "react";

const GAP = 4;

export type DropdownPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type DropdownPosition = {
  top: number;
  left: number;
  width: number;
};

export function useDropdownContent(
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
        top = rect.bottom + scrollY + GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "bottom-start":
        top = rect.bottom + scrollY + GAP;
        left = rect.left + scrollX;
        break;
      case "bottom-end":
        top = rect.bottom + scrollY + GAP;
        left = rect.right + scrollX;
        break;

      // TOP
      case "top":
        top = rect.top + scrollY - GAP;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case "top-start":
        top = rect.top + scrollY - GAP;
        left = rect.left + scrollX;
        break;
      case "top-end":
        top = rect.top + scrollY - GAP;
        left = rect.right + scrollX;
        break;

      // RIGHT
      case "right":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + GAP;
        break;
      case "right-start":
        top = rect.top + scrollY;
        left = rect.right + scrollX + GAP;
        break;
      case "right-end":
        top = rect.bottom + scrollY;
        left = rect.right + scrollX + GAP;
        break;

      // LEFT
      case "left":
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - GAP;
        break;
      case "left-start":
        top = rect.top + scrollY;
        left = rect.left + scrollX - GAP;
        break;
      case "left-end":
        top = rect.bottom + scrollY;
        left = rect.left + scrollX - GAP;
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
