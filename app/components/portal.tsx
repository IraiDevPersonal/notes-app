import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  containerEl?: HTMLElement | null;
  present?: boolean;
} & React.ComponentPropsWithRef<"div">;

export function Portal({
  children,
  containerEl,
  present,
  onTransitionEnd,
  ...props
}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (present) {
      setMounted(true);
    }
  }, [present]);

  if (!mounted) return null;

  return createPortal(
    <div
      {...props}
      onTransitionEnd={(e) => {
        if (!present) {
          setMounted(false);
        }
        onTransitionEnd?.(e);
      }}
    >
      {children}
    </div>,
    containerEl ?? document.body
  );
}
