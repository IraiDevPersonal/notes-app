import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import { ResourceCommentsCountBadge } from "../../(resources)/components/resource-comments-count-badge";
import { ResourceDatetimesBadge } from "../../(resources)/components/resource-datetimes-badge";
import { useResourceCardDropdownMenuRefHandler } from "../../(resources)/hooks/use-resource-card-dropdwon-menu-ref-handler";
import { OwnerUserBadge } from "../../(user)/components/owner-user-badge";
import { SharedUsersCountBadge } from "../../(user)/components/shared-users-count-badge";
import { NoteCardDropdownMenu } from "./note-card-dropdown-menu";
import { FavoriteResourceBadge } from "../../(resources)/components/favorite-resource-badge";
import { cn } from "../../../lib/utils";

type Props = {
  isFavorite?: boolean;
};

export function NoteCard({ isFavorite }: Props) {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card
      className={cn("h-full", isFavorite && "border-favorite/50")}
      onContextMenu={onContextMenu}
    >
      <CardHeader className="flex flex-col gap-y-0">
        <div className="flex items-start justify-between w-full">
          <CardTitle>Nota 1</CardTitle>
          <CardAction>
            <NoteCardDropdownMenu ref={ref} />
          </CardAction>
        </div>
        <div className="flex items-center gap-x-0.5">
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
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illo inventore odio. Praesentium non accusantium aut, omnis sint,
          voluptas ratione debitis dolore explicabo consequuntur aperiam a
          rerum, amet ipsam tempora!
        </CardDescription>
      </CardContent>
    </Card>
  );
}
