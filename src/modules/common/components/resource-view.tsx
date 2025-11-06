import { Accordion } from "@/components/ui/accordion";
import { Folders } from "@/modules/folders/components/folders";
import { Notes } from "@/modules/notes/components/notes";

export function ResourceView() {
  return (
    <Accordion type="multiple" defaultValue={["folders", "notes"]}>
      <Folders />
      <Notes />
    </Accordion>
  );
}
