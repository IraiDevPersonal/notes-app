import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type Props = {
  className?: string;
};

export function ResourceSearch({ className }: Props) {
  return (
    <InputGroup className={cn("xl:max-w-3xl w-full py-6", className)}>
      <InputGroupInput placeholder="Buscar..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 resultados</InputGroupAddon>
    </InputGroup>
  );
}
