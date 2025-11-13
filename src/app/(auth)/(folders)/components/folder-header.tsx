import { ResourceDatetimesBadge } from "@/app/(auth)/(common)/components/resource-datetimes-badge";
import { OwnerUserBadge } from "@/app/(auth)/(user)/components/owner-user-badge";
import { SharedUsersCountBadge } from "@/app/(auth)/(user)/components/shared-users-count-badge";
import { BackButton } from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import {
  Edit2,
  Folder,
  FolderSymlink,
  Share2,
  Star,
  Trash,
} from "lucide-react";
import { CommentsModal } from "@/app/(auth)/(comments)/components/comments-modal";

export function FolderHeader() {
  return (
    <header className="space-y-4 lg:space-y-8">
      <div className="flex items-center gap-4">
        <BackButton />
        <figure className="flex items-center justify-center p-4 rounded-full bg-accent">
          <Folder size={50} />
        </figure>
        <h1 className="text-3xl font-bold">Nombre de la carpeta</h1>
        <FolderActions />
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

      <FolderDescription />

      <div className="flex items-center justify-center gap-2">
        <CommentsModal />
      </div>
    </header>
  );
}

function FolderDescription() {
  return (
    <div>
      <h3 className="italic">Descripción:</h3>
      <p className="text-muted-foreground whitespace-pre-wrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui
        accusantium asperiores! Mollitia iusto, animi libero soluta commodi
        perferendis asperiores obcaecati in eum odio necessitatibus fuga eveniet
        facere pariatur tenetur? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Nam qui accusantium asperiores! Mollitia iusto, animi
        libero soluta commodi perferendis asperiores obcaecati in eum odio
        necessitatibus fuga eveniet facere pariatur tenetur? Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Nam qui accusantium asperiores!
        Mollitia iusto, animi libero soluta commodi perferendis asperiores
        obcaecati in eum odio necessitatibus fuga eveniet facere pariatur
        tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
        qui accusantium asperiores! Mollitia iusto, animi libero soluta commodi
        perferendis asperiores obcaecati in eum odio necessitatibus fuga eveniet
        facere pariatur tenetur? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Nam qui accusantium asperiores! Mollitia iusto, animi
        libero soluta commodi perferendis asperiores obcaecati in eum odio
        necessitatibus fuga eveniet facere pariatur tenetur?
      </p>
    </div>
  );
}

function FolderActions() {
  return (
    <div className="ml-auto self-start flex items-center flex-wrap justify-end gap-x-1">
      <Button variant="ghost">
        <Edit2 />
        Editar
      </Button>
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
