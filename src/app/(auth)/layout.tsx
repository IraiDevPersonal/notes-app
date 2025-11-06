import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 p-4">
        <AppHeader />
        <main className="p-4 flex flex-col space-y-4 w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
