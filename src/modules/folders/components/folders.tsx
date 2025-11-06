import { ResourceAccordionItem } from "@/modules/common/components/resource-accordion-item";
import { FolderCard } from "./folder-card";

export function Folders() {
  return (
    <ResourceAccordionItem id="folders">
      <FolderCard />
      <FolderCard />
      <FolderCard />
    </ResourceAccordionItem>
  );
}
