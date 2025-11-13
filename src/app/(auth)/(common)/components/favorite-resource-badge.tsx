import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "lucide-react";

export function FavoriteResourceBadge() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="secondary">
          <Star className="text-primary fill-primary" />
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>Marcado como favorito</p>
      </TooltipContent>
    </Tooltip>
  );
}
