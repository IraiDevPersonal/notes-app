import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CommentList } from "@/app/(auth)/(comments)/components/comment-list";

export function NoteComments() {
  return (
    <div className="space-y-4 *:space-y-4">
      <header>
        <div className="flex items-center justify-between">
          <h3 className="text-2xp font-semibold">Comentarios (10)</h3>
          <Button size="icon" variant="secondary">
            <Plus />
          </Button>
        </div>
        <ResourceSearch className="mx-auto" />
      </header>
      <div>
        <CommentList />
      </div>
    </div>
  );
}
