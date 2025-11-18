"use client";

import { ResourceCardDropdownMenu } from "../../(resources)/components/resource-card-dropdown-menu";
import { ResourceCardDropdownMenuRefObject } from "../../(resources)/types";
import { v4 } from "uuid";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
};

export function FolderCardDropdownMenu({ ref }: Props) {
  return <ResourceCardDropdownMenu resourceId={v4()} type="folder" ref={ref} />;
}
