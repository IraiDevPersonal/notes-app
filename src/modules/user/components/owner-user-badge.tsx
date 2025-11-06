import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

type Props = {
  fullName: string;
  userName: string;
  email: string;
};

export function OwnerUserBadge({ fullName, userName, email }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="default">
          <small>@{userName}</small>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">
          <small className="italic font-normal text-muted-foreground">
            Propietario:
          </small>{" "}
          <br />
          {fullName}
          <br />({email})
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
