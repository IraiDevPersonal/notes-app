"use client";

import { ResourceCardDropdownMenu } from "@/app/(auth)/(common)/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "@/app/(auth)/(common)/types";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
};

export function FolderCardDropdownMenu({ ref }: Props) {
  return (
    <ResourceCardDropdownMenu
      resourceId="asdasdasd-asdasd-asdasd-123123123"
      type="folder"
      ref={ref}
    />
  );
}
