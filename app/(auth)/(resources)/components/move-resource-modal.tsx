import { Button } from "@/app/ui/button";
import { Modal } from "@/app/ui/dialog";
import { ScrollArea } from "@/app/ui/scroll-area";
import { FolderSymlink } from "lucide-react";

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
  return (
    <Modal
      trigger={children}
      description={`Mover ${resourceTitle}`}
      title={isFolder ? "Mover Carpeta" : "Mover Nota"}
      confirmButton={
        <Button>
          <FolderSymlink />
          Mover
        </Button>
      }
    >
      <ScrollArea>
        <ul className="space-y-1 max-h-96"></ul>
      </ScrollArea>
    </Modal>
  );
}
