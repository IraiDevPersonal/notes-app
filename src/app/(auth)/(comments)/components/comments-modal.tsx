"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResourceSearch } from "../../(common)/components/resource-search";
import { AddCommentForm } from "./add-comment-form";
import { CommentList } from "./comment-list";

export function CommentsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Comentarios (10)</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle>Comentarios</DialogTitle>
          <DialogDescription></DialogDescription>
          <ResourceSearch />
        </DialogHeader>
        <div className="h-[calc(100vh-20rem)] overflow-y-auto">
          <CommentList />
        </div>
        <DialogFooter className="sm:flex-col gap-y-2">
          <AddCommentForm />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
