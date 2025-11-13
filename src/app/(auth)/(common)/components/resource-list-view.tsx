import { Accordion } from "@/components/ui/accordion";
import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";
import { ResourceAccordionItem } from "./resource-accordion-item";
import { For } from "@/components/for";
import { arrayFromLength } from "@/lib/utils";

export function ResourceListView() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <ResourceAccordionItem value="folders">
        <For items={arrayFromLength(10)}>{() => <FolderCard />}</For>
      </ResourceAccordionItem>

      <ResourceAccordionItem value="notes">
        <For items={arrayFromLength(13)}>{() => <NoteCard />}</For>
      </ResourceAccordionItem>
    </Accordion>
  );
}
