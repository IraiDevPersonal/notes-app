import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ResourceViewModeProvider } from "@/modules/common/context/resource-view-mode.context";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 p-4">
        <ResourceViewModeProvider>
          <AppHeader />
          <main className="p-4 flex flex-col space-y-4 w-full">{children}</main>
        </ResourceViewModeProvider>
      </div>
    </SidebarProvider>
  );
}
