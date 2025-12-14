import { cn } from "@/lib/utils";
import { SidebarTrigger } from "./sidebar-trigger";

type SidebarHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return (
    <header
      aria-label="Sidebar Header"
      className={cn("flex gap-x-2 justify-between", className)}
    >
      {children}
      <SidebarTrigger asClose variant="secondary" className="-mr-3" />
    </header>
  );
}
