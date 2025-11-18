import { Badge } from "../../../ui/badge";
import { MessageSquareQuote } from "lucide-react";

export function ResourceCommentsCountBadge() {
  return (
    <Badge variant="accent">
      <MessageSquareQuote />
      <small className="text-muted-foreground italic">0</small>
    </Badge>
  );
}
