"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid, List } from "lucide-react";
import { useResourceViewMode } from "../context/resource-view-mode.context";

type Props = {
  className?: string;
};

export function ResourceViewModeSelector({ className }: Props) {
  const { viewMode, onViewModeChange } = useResourceViewMode();
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      value={viewMode}
      onValueChange={onViewModeChange}
      className={className}
    >
      <ToggleGroupItem value="list" aria-label="List view">
        <List />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <Grid />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
