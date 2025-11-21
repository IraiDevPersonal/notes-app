"use client";

import { Button } from "@/app/ui/button";
import { DeleteDialog } from "@/app/ui/delete-dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu";
import {
  ArrowRight,
  EllipsisVertical,
  FolderSymlink,
  Share2,
  Star,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { useImperativeHandle, useState } from "react";
import { ResourceCardDropdownMenuRefObject } from "../types";
import { ResourceModel, ResourceType } from "../types/resource";
import { MoveResourceModal } from "./move-resource-modal";
import { ShareResourceModal } from "./share-resource-modal";

type Props = {
  ref?: React.RefObject<ResourceCardDropdownMenuRefObject>;
  resource: ResourceModel;
  type: ResourceType;
};

export function ResourceCardDropdownMenu({ resource, ref, type }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    onContextMenu: () => {
      setOpen(true);
    },
  }));

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon-sm">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link href={`/${type}/${resource.id}`}>
            <ArrowRight />
            Ir
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>

        <DropdownMenuCheckboxItem
          className="data-[state=checked]:[&_svg]:fill-favorite data-[state=checked]:text-favorite"
          onCheckedChange={setIsFavorite}
          checked={isFavorite}
          icon={<Star />}
        >
          {isFavorite ? "Quitar favorito" : "Agregar favorito"}
        </DropdownMenuCheckboxItem>

        <MoveResourceModal
          resource={resource}
          onCloseEffect={setOpen}
          type={type}
        >
          <DropdownMenuItem preventDefaultOnSelect>
            <FolderSymlink />
            Mover
          </DropdownMenuItem>
        </MoveResourceModal>

        <ShareResourceModal
          resource={resource}
          onCloseEffect={setOpen}
          type={type}
        >
          <DropdownMenuItem preventDefaultOnSelect>
            <Share2 />
            Compartir
          </DropdownMenuItem>
        </ShareResourceModal>

        <DeleteDialog onCloseEffect={setOpen}>
          <DropdownMenuItem preventDefaultOnSelect variant="destructive">
            <Trash />
            Eliminar
          </DropdownMenuItem>
        </DeleteDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
