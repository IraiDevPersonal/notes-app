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
      <header className="p-4 lg:p-8 space-y-4 lg:space-y-8 w-full">
        <div className="flex justify-between items-center gap-x-4">
          <FoldersTitle />
          <ResourceViewModeSelector />
        </div>
        <ResourceSearch className="mx-auto" />
      </header>
      <main className="flex flex-col space-y-4 lg:space-y-8 w-full p-4 lg:p-8 pt-0!">
        {children}
      </main>
    </ResourceViewModeProvider>
  );
}
