import { ResourceSearch } from "@/app/(auth)/(resources)/components/resource-search";
import { ResourceView } from "@/app/(auth)/(resources)/components/resource-view";
import { ResourceViewModeSelector } from "@/app/(auth)/(resources)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "@/app/(auth)/(resources)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="space-y-8">
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Recursos</h3>
          <ResourceViewModeSelector />
        </div>
        <ResourceSearch className="mx-auto" />
        <div>
          <ResourceView />
        </div>
      </ResourceViewModeProvider>
    </div>
  );
}
