import { useRef } from "react";
import { ResourceCardDropdownMenuRefObject } from "../types";

export function useResourceCardDropdownMenuRefHandler() {
  const ref = useRef<ResourceCardDropdownMenuRefObject>(null);

  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    ref.current?.onContextMenu();
  };

  return {
    ref,
    onContextMenu,
  };
}
