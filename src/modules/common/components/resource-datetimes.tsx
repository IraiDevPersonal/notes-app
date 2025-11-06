import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar } from "lucide-react";

export function ResourceDatetimes() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="accent">
          <Calendar />
          <small className="text-[0.65rem] italic text-muted-foreground">
            10-10-2025
          </small>
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="font-medium [&_small]:font-normal [&_small]:italic [&_small]:text-muted-foreground">
        <p>
          <small>Creación:</small> <br /> 10-10-2025
        </p>
        <p>
          <small>Ultima modificación:</small> <br /> 10-10-2025
        </p>
        <p>
          <small>Modificado por:</small> <br /> Usuario User
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
