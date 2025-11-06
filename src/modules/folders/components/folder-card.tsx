import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import { SharedUsersCount } from "@/modules/user/components/shared-users-count";
import { Folder } from "lucide-react";
import { FolderCardDropdownMenu } from "./folder-card-dropdown-menu";

export function FolderCard() {
  return (
    <Card className="flex-row justify-between items-center">
      <CardContent>
        <div className="flex items-center gap-x-2">
          <Folder size={20} />
          <CardTitle className="flex-1">Carpeta 1</CardTitle>
        </div>
        <div className="flex items-center gap-x-0.5 mt-1">
          <SharedUsersCount />
          <small className="text-[0.65rem] italic text-muted-foreground">
            10-10-2025
          </small>
        </div>
      </CardContent>
      <CardAction className="self-center pe-4">
        <FolderCardDropdownMenu />
      </CardAction>
    </Card>
  );
}
