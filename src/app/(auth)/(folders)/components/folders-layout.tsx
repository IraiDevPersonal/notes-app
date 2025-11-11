import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { FoldersTitle } from "./folders-title";
import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";

export function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResourceViewModeProvider>
      <header className="space-y-2 w-full">
        <ResourceSearch />
        <div className="flex justify-between items-center gap-x-4 py-4">
          <FoldersTitle />
          <ResourceViewModeSelector />
        </div>
      </header>
      <div className="flex flex-col space-y-4 w-full">{children}</div>
    </ResourceViewModeProvider>
  );
}
