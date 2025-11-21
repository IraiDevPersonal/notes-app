"use client";

import { randomUUID } from "@/app/lib/utils";
import { ResourceCardDropdownMenu } from "../../(resources)/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "../../(resources)/types";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
};

export function FolderCardDropdownMenu({ ref }: Props) {
  return (
    <ResourceCardDropdownMenu
      resource={{ id: randomUUID(), title: "Carpeta 1" }}
      type="folder"
      ref={ref}
    />
  );
}
