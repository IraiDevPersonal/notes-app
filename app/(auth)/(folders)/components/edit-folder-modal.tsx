"use client";

import { FolderForm } from "@/app/(auth)/(folders)/components/folder-form";
import { Button } from "@/app/ui/button";
import { DialogFormActions, Modal } from "@/app/ui/dialog";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { FOLDER_FORM_ID } from "../lib/constants";

export function EditFolderModal() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Modal
      open={open}
      title="Editar Carpeta"
      onOpenChange={handleOpenChange}
      description="Introduce los datos de la carpeta."
      trigger={
        <Button variant="ghost" size="icon" title="Editar">
          <Edit2 />
        </Button>
      }
      footer={
        <DialogFormActions
          formId={FOLDER_FORM_ID}
          onCancel={() => setOpen(false)}
        />
      }
    >
      <FolderForm />
    </Modal>
  );
}
