import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CreatePortalProps = {
  children: React.ReactNode;
  containerEl?: HTMLElement | null;
};

export function CreatePortal({ children, containerEl }: CreatePortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, containerEl ?? document.body);
}
