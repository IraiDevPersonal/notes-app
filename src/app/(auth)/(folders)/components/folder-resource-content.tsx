import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="p-4 rounded-2xl border space-y-4">
      <ResourceSearch />
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recursos</h2>
          <ResourceViewModeSelector />
        </div>
        <div className="space-y-4">
          <ResourceView />
        </div>
      </ResourceViewModeProvider>
    </div>
  );
}
