"use client";

import { ResourceCardDropdownMenu } from "@/modules/common/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "@/modules/common/types";

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
