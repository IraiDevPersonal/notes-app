"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  EllipsisVertical,
  FolderSymlink,
  Share2,
  Star,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  resourceId: string;
};

export function ResourceCardDropdownMenu({ resourceId }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const pathname = usePathname();
  const href = `${pathname}/${resourceId}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link href={href}>
            <ArrowRight />
            Ir
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={isFavorite}
          onCheckedChange={setIsFavorite}
          icon={<Star />}
        >
          {isFavorite ? "Quitar favorito" : "Agregar favorito"}
        </DropdownMenuCheckboxItem>
        <DropdownMenuItem asChild>
          <Link href={`${href}?open-modal=true`}>
            <FolderSymlink />
            Mover
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`${href}?open-modal=true`}>
            <Share2 />
            Compartir
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
