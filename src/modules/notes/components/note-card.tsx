import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResourceCommentsCountBadge } from "@/modules/common/components/resource-comments-count-badge";
import { ResourceDatetimesBadge } from "@/modules/common/components/resource-datetimes-badge";
import { useResourceCardDropdownMenuRefHandler } from "@/modules/common/hooks/use-resource-card-dropdwon-menu-ref-handler";
import { OwnerUserBadge } from "@/modules/user/components/owner-user-badge";
import { SharedUsersCountBadge } from "@/modules/user/components/shared-users-count-badge";
import { NoteCardDropdownMenu } from "./note-card-dropdown-menu";

export function NoteCard() {
  const { ref, onContextMenu } = useResourceCardDropdownMenuRefHandler();
  return (
    <Card className="h-full" onContextMenu={onContextMenu}>
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
          <SharedUsersCountBadge />
          <ResourceDatetimesBadge />
          <ResourceCommentsCountBadge />
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
