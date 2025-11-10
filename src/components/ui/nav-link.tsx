"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
};

function NavLink({ exact = false, ...props }: Props) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === props.href
    : pathname.includes(props.href.toString());

  return (
    <Link
      {...props}
      className={cn(
        "font-semibold",
        isActive && "bg-primary! text-primary-foreground!",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}

export { NavLink };
