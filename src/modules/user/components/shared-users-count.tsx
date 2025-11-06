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
        <Badge className="px-1 py-0.5" variant="secondary">
          <Users size={12} />
          <small className="italic text-muted-foreground">+10</small>
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-64 italic font-medium [&_span]:text-muted-foreground [&_span]:not-italic [&_span]:font-normal">
        <p>
          <span>Compartido con:</span> juan@domain.com, pedro@domain.com,
          maria@domain.com, jose@domain.com, otros...
        </p>
        <p>
          <span>Total compartidos:</span> 100
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
