import { Accordion } from "@/app/ui/accordion";
import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";
import { ResourceAccordionItem } from "./resource-accordion-item";
import { For } from "@/app/ui/for";
import { arrayFromLength } from "@/app/lib/utils";

export function ResourceListView() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <ResourceAccordionItem value="folders">
        <For items={arrayFromLength(5)}>
          {(_, idx) => <FolderCard isFavorite={idx % 2 === 0} />}
        </For>
      </ResourceAccordionItem>

      <ResourceAccordionItem value="notes">
        <For items={arrayFromLength(3)}>
          {(_, idx) => <NoteCard isFavorite={idx % 2 === 0} />}
        </For>
      </ResourceAccordionItem>
    </Accordion>
  );
}
