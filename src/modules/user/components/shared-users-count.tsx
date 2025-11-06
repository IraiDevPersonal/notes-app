import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Users } from "lucide-react";

export function SharedUsersCount() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge className="px-1 py-0.5" variant="accent">
          <Users size={12} />
          <small className="italic text-muted-foreground">+10</small>
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-56 text-muted-foreground [&_strong]:text-accent-foreground [&_strong]:not-italic italic">
        <p>
          <strong>Compartido con:</strong> juan@domain.com, pedro@domain.com,
          maria@domain.com, jose@domain.com, otros...
        </p>
        <p>
          <strong>Total compartidos:</strong> 100
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
