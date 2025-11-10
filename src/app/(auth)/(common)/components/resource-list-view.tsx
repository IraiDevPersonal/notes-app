import { Accordion } from "@/components/ui/accordion";
import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";
import { ResourceAccordionItem } from "./resource-accordion-item";

export function ResourceListView() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <ResourceAccordionItem value="folders">
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </ResourceAccordionItem>

      <ResourceAccordionItem value="notes">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </ResourceAccordionItem>
    </Accordion>
  );
}
