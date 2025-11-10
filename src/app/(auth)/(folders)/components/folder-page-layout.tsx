import { FolderPageHeader } from "@/app/(auth)/(folders)/components/folder-page-header";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";

export function FolderPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResourceViewModeProvider>
      <FolderPageHeader />
      <div className="flex flex-col space-y-4 w-full">{children}</div>
    </ResourceViewModeProvider>
  );
}
