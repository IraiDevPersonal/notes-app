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
        <Badge variant="default" className="px-1 py-0.5">
          @{userName}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p className="italic font-medium">
          <span className="not-italic font-normal text-muted-foreground">
            Propietario:
          </span>{" "}
          <br />
          {fullName}
          <br />({email})
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
