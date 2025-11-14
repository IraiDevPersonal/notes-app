"use client";

import { CommentList } from "@/app/(auth)/(comments)/components/comment-list";
import { ResourceSearch } from "@/app/(auth)/(common)/components/resource-search";
import { NoteCommentFormModal } from "./note-comment-form-modal";
import { useState } from "react";

export function NoteComments() {
  const [comment, setComment] = useState("");
  return (
    <div className="space-y-4 *:space-y-4">
      <header>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Comentarios (10)</h3>
          <NoteCommentFormModal
            key={comment}
            resetForm={() => setComment("")}
            comment={{ description: comment }}
          />
        </div>
        <ResourceSearch className="mx-auto" />
      </header>
      <div className="pl-4 lg:pl-8 pb-4 lg:pb-8 border-l">
        <CommentList onEdit={() => setComment("hola hola")} />
      </div>
    </div>
  );
}
