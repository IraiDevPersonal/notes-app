"use client";

import { Button } from "@/app/ui/button";
import { Modal } from "@/app/ui/dialog";
import { Folder, Tree } from "@/app/ui/file-tree";
import { ScrollArea } from "@/app/ui/scroll-area";
import { FolderSymlink } from "lucide-react";
import { useState } from "react";
import { ResourceModel, ResourceType } from "../types/resource";

type Props = {
  onCloseEffect?: (open: false) => void;
  children?: React.ReactNode;
  resource: ResourceModel;
  type?: ResourceType;
};

export function MoveResourceModal({
  onCloseEffect,
  type = "note",
  resource,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    setSelectedFolder(null);
    setOpen(open);
    if (!open) {
      onCloseEffect?.(false);
    }
  };

  const isFolder = type === "folder";
  const description = `Seleccione el destino al que desea mover la ${
    isFolder ? "carpeta" : "nota"
  }: "${resource.title}"`;

  return (
    <Modal
      title={isFolder ? "Mover Carpeta" : "Mover Nota"}
      classNames={{ body: "space-y-4" }}
      onOpenChange={handleOpenChange}
      description={description}
      trigger={children}
      open={open}
      confirmButton={
        <Button>
          <FolderSymlink />
          Mover
        </Button>
      }
    >
      <ScrollArea className="max-h-96">
        <Tree indicator>
          <Folder
            value="/"
            element="/"
            isSelect={selectedFolder === "/"}
            onSelectValue={setSelectedFolder}
          >
            <Folder
              value="carpeta-1"
              element="carpeta 1"
              isSelect={selectedFolder === "carpeta-1"}
              onSelectValue={setSelectedFolder}
            >
              <Folder
                value="carpeta-1.2"
                element="carpeta 1.2"
                isSelect={selectedFolder === "carpeta-1.2"}
                onSelectValue={setSelectedFolder}
              >
                <Folder
                  value="carpeta-1.2.1"
                  element="carpeta 1.2.1"
                  isSelect={selectedFolder === "carpeta-1.2.1"}
                  onSelectValue={setSelectedFolder}
                />
              </Folder>
              <Folder
                value="carpeta-1.3"
                element="carpeta 1.3"
                isSelect={selectedFolder === "carpeta-1.3"}
                onSelectValue={setSelectedFolder}
              />
              <Folder
                value="carpeta-1.4"
                element="carpeta 1.4"
                isSelect={selectedFolder === "carpeta-1.4"}
                onSelectValue={setSelectedFolder}
              />
            </Folder>
          </Folder>
        </Tree>
      </ScrollArea>
      <p className="text-sm">
        <span className="text-muted-foreground">Mover a carpeta:</span>{" "}
        {selectedFolder ?? "sin selección"}
      </p>
    </Modal>
  );
}
