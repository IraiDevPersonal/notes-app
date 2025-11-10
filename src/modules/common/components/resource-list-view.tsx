import { Accordion } from "@/components/ui/accordion";
import { FolderCard } from "@/modules/folders/components/folder-card";
import { NoteCard } from "@/modules/notes/components/note-card";
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
