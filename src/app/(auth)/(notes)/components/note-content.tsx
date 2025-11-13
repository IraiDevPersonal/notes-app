"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Save } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export function NoteContent() {
  return (
    <div className="max-w-dvw xs:max-w-[calc(100dvw-18rem)] lg:max-w-[calc(100dvw-20rem)]">
      <InputGroup>
        <TextareaAutosize
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-36 w-full resize-none rounded-md bg-transparent p-4 text-base text-inherit transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Contenido de la nota..."
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
