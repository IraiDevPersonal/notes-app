import { DropdownPlacement } from "./type";

export const DROPDOWN_CONTENT_GAP = 4;

export function getTransformOrigin(placement: DropdownPlacement): string {
  const transformMap: Record<DropdownPlacement, string> = {
    bottom: "translate(-50%, 0)",
    "bottom-start": "translate(0, 0)",
    "bottom-end": "translate(-100%, 0)",

    top: "translate(-50%, -100%)",
    "top-start": "translate(0, -100%)",
    "top-end": "translate(-100%, -100%)",

    right: "translate(0, -50%)",
    "right-start": "translate(0, 0)",
    "right-end": "translate(0, -100%)",

    left: "translate(-100%, -50%)",
    "left-start": "translate(-100%, 0)",
    "left-end": "translate(-100%, -100%)",
  };

  return transformMap[placement];
}
