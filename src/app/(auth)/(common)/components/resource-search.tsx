import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export function ResourceSearch() {
  return (
    <InputGroup className="xl:max-w-3xl py-6">
      <InputGroupInput placeholder="Buscar..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 resultados</InputGroupAddon>
    </InputGroup>
  );
}
