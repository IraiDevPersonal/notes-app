import { ScrollArea } from "../ui/scroll-area";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ScrollArea className="flex-1 h-dvh">{children}</ScrollArea>
    </SidebarProvider>
  );
}
