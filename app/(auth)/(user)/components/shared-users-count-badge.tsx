import { Badge } from "../../../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../ui/tooltip";
import { Users } from "lucide-react";

export function SharedUsersCountBadge() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="secondary">
          <Users size={12} />
          <small className="italic text-muted-foreground">+10</small>
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-64 font-medium [&_small]:text-muted-foreground [&_small]:italic [&_small]:font-normal">
        <p>
          <small>Compartido con:</small> <br /> juan@domain.com,
          pedro@domain.com, maria@domain.com, jose@domain.com, otros...
        </p>
        <p>
          <small>Total compartidos:</small> <br /> 100
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
