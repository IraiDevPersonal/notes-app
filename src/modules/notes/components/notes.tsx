import { ResourceAccordionItem } from "@/modules/common/components/resource-accordion-item";
import { NoteCard } from "./note-card";

export function Notes() {
  return (
    <ResourceAccordionItem value="notes" className="grid grid-cols-2 gap-x-2">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </ResourceAccordionItem>
  );
}
