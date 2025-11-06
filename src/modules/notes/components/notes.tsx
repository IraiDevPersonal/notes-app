import { ResourceAccordionItem } from "@/modules/common/components/resource-accordion-item";
import { NoteCard } from "./note-card";

export function Notes() {
  return (
    <ResourceAccordionItem id="notes">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </ResourceAccordionItem>
  );
}
