"use client";

import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { ResourceSearch } from "../../(resources)/components/resource-search";
import { CommentForm } from "./comment-form";
import { CommentList } from "./comment-list";
import { useState } from "react";

export function CommentsModal() {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    setComment("");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="secondary">Comentarios (10)</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle>Comentarios</DialogTitle>
          <DialogDescription></DialogDescription>
          <ResourceSearch className="xl:max-w-full" />
        </DialogHeader>
        <div className="h-[calc(100vh-24rem)] overflow-y-auto">
          <CommentList onEdit={() => setComment("hola")} />
        </div>
        <DialogFooter className="sm:flex-col gap-y-2">
          <CommentForm
            key={comment}
            onSubmit={() => {}}
            defaultValues={{ description: comment }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
