import { FolderPageHeader } from "@/app/(auth)/(folders)/components/folder-page-header";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";

export default function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResourceViewModeProvider>
      <FolderPageHeader />
      <main className="p-4 flex flex-col space-y-4 w-full">{children}</main>
    </ResourceViewModeProvider>
  );
}
