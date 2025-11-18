"use client";

import { For } from "../../../ui/for";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { OwnerUserBadge } from "../../(user)/components/owner-user-badge";
import { Button } from "../../../ui/button";
import { Edit2 } from "lucide-react";
import { arrayFromLength } from "../../../lib/utils";

type Props = {
  onEdit: () => void;
};

export function CommentList({ onEdit }: Props) {
  return (
    <ul className="space-y-2">
      <For items={arrayFromLength(12)}>
        {(_, idx) => (
          <li className="bg-card border rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <OwnerUserBadge
                fullName="John Doe"
                userName="johndoe"
                email="johndoe@example.com"
              />
              <Button
                size="icon"
                variant="ghost"
                className="ml-auto"
                onClick={onEdit}
              >
                <Edit2 />
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              comentario {idx} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Molestias laboriosam ducimus consectetur, omnis
              tenetur incidunt ab ut? Odio itaque asperiores voluptatibus eos
              impedit, esse voluptatum recusandae amet aut suscipit quis!
            </p>
          </li>
        )}
      </For>
    </ul>
  );
}
