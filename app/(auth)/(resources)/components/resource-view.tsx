"use client";

import { useResourceViewMode } from "../context/resource-view-mode.context";
import { ResourceGridView } from "./resource-grid-view";
import { ResourceListView } from "./resource-list-view";

export function ResourceView() {
  const { viewMode } = useResourceViewMode();

  return viewMode === "grid" ? <ResourceGridView /> : <ResourceListView />;
}
