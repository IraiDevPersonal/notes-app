"use client";

import { Button } from "@/app/ui/button";
import { Modal } from "@/app/ui/dialog";
import { Folder, Tree } from "@/app/ui/file-tree";
import { ScrollArea } from "@/app/ui/scroll-area";
import { FolderSymlink } from "lucide-react";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  isFolder?: boolean;
  resourceTitle: string;
};

export function MoveResourceModal({
  children,
  isFolder,
  resourceTitle,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    setSelectedFolder(null);
  };

  return (
    <Modal
      open={open}
      trigger={children}
      onOpenChange={handleOpenChange}
      description={`Seleccione el destino al que desea mover la ${
        isFolder ? "carpeta" : "nota"
      } ${resourceTitle}`}
      title={isFolder ? "Mover Carpeta" : "Mover Nota"}
      classNames={{
        body: "space-y-4",
      }}
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
