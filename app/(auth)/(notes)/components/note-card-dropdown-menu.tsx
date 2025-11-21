"use client";

import { randomUUID } from "@/app/lib/utils";
import { ResourceCardDropdownMenu } from "../../(resources)/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "../../(resources)/types";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
};

export function NoteCardDropdownMenu({ ref }: Props) {
  return (
    <ResourceCardDropdownMenu
      resource={{ id: randomUUID(), title: "Nota 1" }}
      type="note"
      ref={ref}
    />
  );
}
