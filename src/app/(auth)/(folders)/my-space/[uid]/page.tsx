import { ResourceDatetimesBadge } from "@/app/(auth)/(common)/components/resource-datetimes-badge";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { ResourceViewModeSelector } from "@/app/(auth)/(common)/components/resource-view-mode-selector";
import { ResourceViewModeProvider } from "@/app/(auth)/(common)/context/resource-view-mode.context";
import { OwnerUserBadge } from "@/app/(auth)/(user)/components/owner-user-badge";
import { SharedUsersCountBadge } from "@/app/(auth)/(user)/components/shared-users-count-badge";
import { Button } from "@/components/ui/button";
import { Edit2, Folder } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpeta",
};

export default function FolderPage() {
  return (
    <>
      <header className="p-4 rounded-2xl bg-card border space-y-4">
        <div className="flex items-center gap-4">
          <figure className="flex items-center justify-center p-4 rounded-full bg-accent">
            <Folder size={50} />
          </figure>
          <h1 className="text-3xl font-bold">Nombre de la carpeta</h1>
          <Button variant="ghost" className="ml-auto self-start">
            <Edit2 />
            <span>Editar</span>
          </Button>
        </div>
        <div className="flex items-center gap-x-0.5 *:[&>small]:text-xs *:[&>svg]:size-4">
          <OwnerUserBadge
            fullName="Usuario User"
            userName="usuario"
            email="usuario@email.com"
          />
          <SharedUsersCountBadge />
          <ResourceDatetimesBadge />
        </div>
        <div>
          <p className="text-muted-foreground whitespace-pre-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui
            accusantium asperiores! Mollitia iusto, animi libero soluta commodi
            perferendis asperiores obcaecati in eum odio necessitatibus fuga
            eveniet facere pariatur tenetur? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nam qui accusantium asperiores!
            Mollitia iusto, animi libero soluta commodi perferendis asperiores
            obcaecati in eum odio necessitatibus fuga eveniet facere pariatur
            tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nam qui accusantium asperiores! Mollitia iusto, animi libero soluta
            commodi perferendis asperiores obcaecati in eum odio necessitatibus
            fuga eveniet facere pariatur tenetur? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nam qui accusantium asperiores!
            Mollitia iusto, animi libero soluta commodi perferendis asperiores
            obcaecati in eum odio necessitatibus fuga eveniet facere pariatur
            tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nam qui accusantium asperiores! Mollitia iusto, animi libero soluta
            commodi perferendis asperiores obcaecati in eum odio necessitatibus
            fuga eveniet facere pariatur tenetur?
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="secondary">Comentarios (10)</Button>
        </div>
      </header>
      <ResourceViewModeProvider defaultViewMode="list">
        <div className="p-4 rounded-2xl border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recursos</h2>
            <ResourceViewModeSelector />
          </div>
          <div className="space-y-4">
            <ResourceView />
          </div>
        </div>
      </ResourceViewModeProvider>
    </>
  );
}
