import { FolderSymlink, Share2, Star, Trash } from "lucide-react";
import { ResourceDatetimesBadge } from "../../(resources)/components/resource-datetimes-badge";
import { OwnerUserBadge } from "../../(user)/components/owner-user-badge";
import { SharedUsersCountBadge } from "../../(user)/components/shared-users-count-badge";
import { BackButton } from "../../../ui/back-button";
import { Button } from "../../../ui/button";
import { EditNoteModal } from "./edit-note-modal";

export function NoteHeader() {
  return (
    <header className="space-y-4 lg:space-y-8">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-3xl font-bold">Titulo de la nota</h1>
        <NoteActions />
      </div>

      <div className="flex items-center gap-x-0.5 *:[&>small]:text-xs *:[&>svg]:size-4">
        <OwnerUserBadge
          fullName="Usuario User"
          userName="usuario"
          email="usuario@email.com"
        />
        <ResourceDatetimesBadge />
        <SharedUsersCountBadge />
      </div>
    </header>
  );
}

function NoteActions() {
  return (
    <div className="ml-auto self-start flex items-center flex-wrap justify-end gap-x-1">
      <EditNoteModal />
      <Button size="icon" variant="ghost" title="Mover">
        <FolderSymlink />
      </Button>
      <Button size="icon" variant="ghost" title="Compartir">
        <Share2 />
      </Button>
      <Button size="icon" variant="ghost" title="Marcar como favorito">
        <Star />
      </Button>
      <Button size="icon" variant="ghost" title="Eliminar">
        <Trash />
      </Button>
    </div>
  );
}
