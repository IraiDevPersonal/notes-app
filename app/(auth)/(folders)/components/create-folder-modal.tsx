"use client";

import { FolderForm } from "@/app/(auth)/(folders)/components/folder-form";
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
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { FOLDER_FORM_ID } from "../lib/constants";

export function CreateFolderModal() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="fab" size="lg" className="w-max">
          <FolderPlus />
          Crear Carpeta
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear Carpeta</DialogTitle>
          <DialogDescription>
            Introduce el nombre de la carpeta.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <FolderForm />
        </DialogBody>
        <DialogFormActions
          formId={FOLDER_FORM_ID}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
