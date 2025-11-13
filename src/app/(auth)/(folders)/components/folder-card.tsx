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
import { FavoriteResourceBadge } from "../../(common)/components/favorite-resource-badge";
import { cn } from "@/lib/utils";

type Props = {
  viewMode?: ViewMode;
  isFavorite?: boolean;
};

export function FolderCard({ viewMode = "list", isFavorite }: Props) {
  return viewMode === "list" ? (
    <FolderListItem isFavorite={isFavorite} />
  ) : (
    <FolderGridItem isFavorite={isFavorite} />
  );
}

function FolderListItem({ isFavorite }: Omit<Props, "viewMode">) {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card
      className={cn(
        "flex-row justify-between items-center",
        isFavorite && "border-favorite/50"
      )}
      onContextMenu={onContextMenu}
    >
      <CardContent>
        <div className="flex items-center gap-x-2">
          <Folder
            size={20}
            className={cn(
              "text-muted-foreground",
              isFavorite && "text-favorite"
            )}
          />
          <CardTitle className={"flex-1"}>Carpeta 1</CardTitle>
        </div>
        <div className="flex items-center gap-x-0.5 mt-1.5">
          <OwnerUserBadge
            fullName="Usuario User"
            userName="usuario"
            email="usuario@email.com"
          />
          <ResourceDatetimesBadge />
          <SharedUsersCountBadge />
          <ResourceCommentsCountBadge />
          {isFavorite && <FavoriteResourceBadge />}
        </div>
      </CardContent>
      <CardAction className="self-center pe-4">
        <FolderCardDropdownMenu ref={ref} />
      </CardAction>
    </Card>
  );
}

function FolderGridItem({ isFavorite }: Omit<Props, "viewMode">) {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card
      onContextMenu={onContextMenu}
      className={cn(isFavorite && "border-favorite/50")}
    >
      <CardHeader className="mb-2">
        <div className="flex justify-center">
          <Folder
            size={110}
            strokeWidth={0.5}
            className={cn(
              "text-muted-foreground",
              isFavorite && "text-favorite"
            )}
          />
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
        {isFavorite && <FavoriteResourceBadge />}
        <CardAction className="self-center ml-auto">
          <FolderCardDropdownMenu ref={ref} />
        </CardAction>
      </CardContent>
    </Card>
  );
}
