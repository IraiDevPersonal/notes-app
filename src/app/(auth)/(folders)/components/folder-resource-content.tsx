import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";

export function FolderResourceContent() {
  return (
    <div className="space-y-8">
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="flex items-center justify-between flex-wrap xl:flex-nowrap gap-4">
          <h3 className="text-2xl font-semibold order-1">Recursos</h3>
          <ResourceSearch className="order-3 xl:order-2" />
          <ResourceViewModeSelector className="order-2 xl:order-3" />
        </div>
        <div className="space-y-4 ps-8 pb-4 border-l">
          <ResourceView />
        </div>
      </ResourceViewModeProvider>
    </div>
  );
}
