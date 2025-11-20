"use client";

import { Button } from "@/app/ui/button";
import { DialogFormActions, Modal } from "@/app/ui/dialog";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { NOTE_FORM_ID } from "../lib/constants";
import { NoteForm } from "./note-form";

export function EditNoteModal() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Modal
      open={open}
      title="Editar Nota"
      onOpenChange={handleOpenChange}
      description="Edita los datos de la nota."
      trigger={
        <Button variant="ghost" size="icon" title="Editar">
          <Edit2 />
        </Button>
      }
      footer={
        <DialogFormActions
          formId={NOTE_FORM_ID}
          onCancel={() => setOpen(false)}
        />
      }
    >
      <NoteForm hideContentField />
    </Modal>
  );
}
