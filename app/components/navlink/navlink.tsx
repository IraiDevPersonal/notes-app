"use client";

import { useIsRoute } from "@/hooks/use-is-route";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  classNames?: Partial<{
    root: string;
    active: string;
  }>;
  exact?: boolean;
};

export function NavLink({
  classNames,
  exact = false,
  href,
  ...props
}: NavLinkProps) {
  const isActive = useIsRoute({ href: href.toString(), exact });

  return (
    <Link
      className={cn(classNames?.root, isActive && classNames?.active)}
      href={href}
      {...props}
    />
  );
}

// prefetchMode?: boolean | "visible" | "hover";
// const [prefetch, setPrefetch] = useState(() =>
//   prefetchMode === "visible"
//     ? null
//     : prefetchMode === "hover" || prefetchMode === undefined
//     ? false
//     : prefetchMode
// );
// onMouseEnter={() => prefetchMode === "hover" && setPrefetch(true)}
// prefetch={prefetch}
