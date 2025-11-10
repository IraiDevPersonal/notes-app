"use client";

import { ResourceCardDropdownMenu } from "@/modules/common/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "@/modules/common/types";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
};

export function NoteCardDropdownMenu({ ref }: Props) {
  return (
    <ResourceCardDropdownMenu
      resourceId="asdasdasd-asdasdasdas-asdasdasd-123123"
      type="note"
      ref={ref}
    />
  );
}
