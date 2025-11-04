import { ResourceAccordionItem } from "@/components/resource-accordion-item";
import { Accordion } from "@/components/ui/accordion";
import { FolderCard } from "@/modules/folders/components/folder-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis notas",
};

export default function MyNotesPage() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <ResourceAccordionItem title="Carpetas" id="folders">
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </ResourceAccordionItem>

      <ResourceAccordionItem title="Notas" id="notes">
        notas
      </ResourceAccordionItem>
    </Accordion>
  );
}
