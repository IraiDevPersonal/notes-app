"use client";

import { Button } from "@/app/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
import { ResourceSearch } from "@/app/(auth)/(resources)/components/resource-search";
import { CommentForm } from "./comment-form";
import { CommentList } from "./comment-list";
import { useState } from "react";

export function CommentsModal() {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setComment("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="secondary">Comentarios (10)</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Comentarios</DialogTitle>
          <DialogDescription></DialogDescription>
          <ResourceSearch className="xl:max-w-full" />
        </DialogHeader>
        <DialogBody className="max-h-[50dvh]">
          <CommentList onEdit={() => setComment("hola")} />
        </DialogBody>
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
