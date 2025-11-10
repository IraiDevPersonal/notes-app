"use client";

import React, { createContext, use, useCallback, useState } from "react";
import { ViewMode } from "../types/view-mode";

type ContextProps = {
  viewMode: ViewMode;
  onViewModeChange: (viewMode: ViewMode) => void;
};

const ResourceViewModeContext = createContext<ContextProps | undefined>(
  undefined
);

export function ResourceViewModeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const onViewModeChange = useCallback(
    (viewMode: ViewMode) => {
      setViewMode(viewMode);
    },
    [setViewMode]
  );
  return (
    <ResourceViewModeContext value={{ viewMode, onViewModeChange }}>
      {children}
    </ResourceViewModeContext>
  );
}

export const useResourceViewMode = () => {
  const context = use(ResourceViewModeContext);
  if (!context) {
    throw new Error(
      "useResourceViewMode must be used within a ResourceViewModeProvider"
    );
  }
  return context;
};
