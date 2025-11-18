"use client";

import { NoteForm } from "@/app/(auth)/(notes)/components/note-form";
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
import { FilePlus } from "lucide-react";
import { useState } from "react";
import { NOTE_FORM_ID } from "../lib/constants";

export function CreateNoteModal() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="fab" size="lg" className="w-max">
          <FilePlus />
          Crear Nota
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear Nota</DialogTitle>
          <DialogDescription>
            Introduce el título y el contenido de la nota.
          </DialogDescription>
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
