import { ResourceView } from "../../(common)/components/resource-view";
import { ResourceViewModeSelector } from "../../(common)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "../../(common)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="p-4 rounded-2xl border">
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between mb-4">
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
