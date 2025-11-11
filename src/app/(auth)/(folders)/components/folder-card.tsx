"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SharedUsersCountBadge } from "@/app/(auth)/(user)/components/shared-users-count-badge";
import { Folder } from "lucide-react";
import { FolderCardDropdownMenu } from "./folder-card-dropdown-menu";
import { OwnerUserBadge } from "@/app/(auth)/(user)/components/owner-user-badge";
import { ResourceDatetimesBadge } from "@/app/(auth)/(common)/components/resource-datetimes-badge";
import { ViewMode } from "@/app/(auth)/(common)/types/view-mode";
import { ResourceCommentsCountBadge } from "@/app/(auth)/(common)/components/resource-comments-count-badge";
import { useResourceCardDropdownMenuRefHandler } from "@/app/(auth)/(common)/hooks/use-resource-card-dropdwon-menu-ref-handler";

type Props = {
  viewMode?: ViewMode;
};

export function FolderCard({ viewMode = "list" }: Props) {
  return viewMode === "list" ? <FolderListItem /> : <FolderGridItem />;
}

function FolderListItem() {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card
      className="flex-row justify-between items-center"
      onContextMenu={onContextMenu}
    >
      <CardContent>
        <div className="flex items-center gap-x-2">
          <Folder size={20} />
          <CardTitle className="flex-1">Carpeta 1</CardTitle>
        </div>
        <div className="flex items-center gap-x-0.5 mt-1.5">
          <OwnerUserBadge
            fullName="Usuario User"
            userName="usuario"
            email="usuario@email.com"
          />
          <SharedUsersCountBadge />
          <ResourceDatetimesBadge />
          <ResourceCommentsCountBadge />
        </div>
      </CardContent>
      <CardAction className="self-center pe-4">
        <FolderCardDropdownMenu ref={ref} />
      </CardAction>
    </Card>
  );
}

function FolderGridItem() {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card onContextMenu={onContextMenu}>
      <CardHeader className="mb-2">
        <div className="flex justify-center">
          <Folder size={110} strokeWidth={0.5} />
        </div>
        <CardTitle className="text-center">Carpeta 1</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-x-0.5 w-full">
        <OwnerUserBadge
          fullName="Usuario User"
          userName="usuario"
          email="usuario@email.com"
        />
        <SharedUsersCountBadge />
        <ResourceDatetimesBadge />
        <ResourceCommentsCountBadge />
        <CardAction className="self-center ml-auto">
          <FolderCardDropdownMenu ref={ref} />
        </CardAction>
      </CardContent>
    </Card>
  );
}
