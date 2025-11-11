import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";
import { ResourceViewModeSelector } from "../../(common)/components/resource-view-mode-selector";
import { FoldersTitle } from "./folders-title";

export function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResourceViewModeProvider>
      <header className="flex justify-between items-center gap-x-4">
        <FoldersTitle />
        <ResourceViewModeSelector />
      </header>
      <div className="flex flex-col space-y-4 w-full">{children}</div>
    </ResourceViewModeProvider>
  );
}
