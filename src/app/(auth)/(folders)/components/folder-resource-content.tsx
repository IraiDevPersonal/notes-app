import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="space-y-8">
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between">
          <ResourceSearch />
          <ResourceViewModeSelector />
        </div>
        <div className="space-y-4 px-8 pb-4 border-x">
          <ResourceView />
        </div>
      </ResourceViewModeProvider>
    </div>
  );
}
