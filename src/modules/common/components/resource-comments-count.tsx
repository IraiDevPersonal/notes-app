import { Badge } from "@/components/ui/badge";
import { MessageSquareQuote } from "lucide-react";

export function ResourceCommentsCount() {
  return (
    <Badge variant="accent">
      <MessageSquareQuote />
      <small>0</small>
    </Badge>
  );
}
