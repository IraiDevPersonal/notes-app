import { Star } from "lucide-react";
import { Toggle } from "./toggle";

export function FavoriteToggle() {
  return (
    <Toggle
      aria-label="Toggle favorite"
      size="sm"
      variant="ghost"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-favorite data-[state=on]:*:[svg]:stroke-favorite"
    >
      <Star />
    </Toggle>
  );
}
