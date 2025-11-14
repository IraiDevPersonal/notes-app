"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Save } from "lucide-react";

export function NoteContent() {
  return (
    <div className="max-w-dvw xs:max-w-[calc(100dvw-18rem)] lg:max-w-[calc(100dvw-20rem)]">
      <InputGroup>
        <InputGroupTextarea
          placeholder="Contenido de la nota..."
          className="min-h-36"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="secondary">
            <Save />
            Guardar
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
