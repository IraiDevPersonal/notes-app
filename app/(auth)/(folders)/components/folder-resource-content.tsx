import { ResourceSearch } from "../../(resources)/components/resource-search";
import { ResourceView } from "../../(resources)/components/resource-view";
import { ResourceViewModeSelector } from "../../(resources)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "../../(resources)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="space-y-8">
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Recursos</h3>
          <ResourceViewModeSelector />
        </div>
        <ResourceSearch className="mx-auto" />
        <div className="space-y-4 ps-8 pb-4 border-l">
          <ResourceView />
        </div>
      </ResourceViewModeProvider>
    </div>
  );
}
