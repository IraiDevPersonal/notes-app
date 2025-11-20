import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { useState } from "react";
import { CommentForm } from "../../(comments)/components/comment-form";
import { Plus } from "lucide-react";

type Props = {
  comment?: {
    description: string;
  };
  resetForm: () => void;
};

export function NoteCommentFormModal({ comment, resetForm }: Props) {
  const [open, setOpen] = useState(!!comment?.description);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>
            {comment?.description ? "Editar" : "Agregar"} Comentario
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="max-h-[calc(100vh-24rem)] overflow-y-auto p-1">
          <CommentForm onSubmit={() => {}} defaultValues={comment} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
