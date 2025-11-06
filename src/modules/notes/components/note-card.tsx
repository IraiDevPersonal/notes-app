import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NoteCardDropdownMenu } from "./note-card-drpdown-menu";
import { OwnerUserBadge } from "@/modules/user/components/owner-user-badge";
import { SharedUsersCount } from "@/modules/user/components/shared-users-count";
import { ResourceDatetimes } from "@/modules/common/components/resource-datetimes";
import { ResourceCommentsCount } from "@/modules/common/components/resource-comments-count";

export function NoteCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div>
          <CardTitle>Nota 1</CardTitle>
          <div className="flex items-center gap-x-0.5 mt-2">
            <OwnerUserBadge
              fullName="Usuario User"
              userName="usuario"
              email="usuario@email.com"
            />
            <SharedUsersCount />
            <ResourceDatetimes />
            <ResourceCommentsCount />
          </div>
        </div>
        <CardAction>
          <NoteCardDropdownMenu />
        </CardAction>
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
