"use client";

import { ResourceCardDropdownMenu } from "@/app/(auth)/(common)/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "@/app/(auth)/(common)/types";

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
