"use client";

import { Button } from "@/app/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFormActions,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" title="Editar">
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Nota</DialogTitle>
          <DialogDescription>Introduce los datos de la nota.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <NoteForm />
        </DialogBody>
        <DialogFormActions
          formId={NOTE_FORM_ID}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
