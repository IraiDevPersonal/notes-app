"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

function NavLink(
  props: LinkProps & { className?: string; children: React.ReactNode }
) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "font-semibold",
        pathname === props.href && "bg-primary! text-primary-foreground!",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}

export { NavLink };
