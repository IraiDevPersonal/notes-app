import { Accordion } from "../../../ui/accordion";
import { FolderCard } from "../../(folders)/components/folder-card";
import { NoteCard } from "../../(notes)/components/note-card";
import { ResourceAccordionItem } from "./resource-accordion-item";
import { For } from "../../../ui/for";
import { arrayFromLength } from "../../../lib/utils";

export function ResourceListView() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <ResourceAccordionItem value="folders">
        <For items={arrayFromLength(10)}>
          {(_, idx) => <FolderCard isFavorite={idx % 2 === 0} />}
        </For>
      </ResourceAccordionItem>

      <ResourceAccordionItem value="notes">
        <For items={arrayFromLength(13)}>
          {(_, idx) => <NoteCard isFavorite={idx % 2 === 0} />}
        </For>
      </ResourceAccordionItem>
    </Accordion>
  );
}
