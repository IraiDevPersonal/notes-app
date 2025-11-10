import { AppHeader } from "@/components/app-header";
import { ResourceViewModeProvider } from "@/modules/common/context/resource-view-mode.context";

export default function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResourceViewModeProvider>
      <AppHeader />
      <main className="p-4 flex flex-col space-y-4 w-full">{children}</main>
    </ResourceViewModeProvider>
  );
}
