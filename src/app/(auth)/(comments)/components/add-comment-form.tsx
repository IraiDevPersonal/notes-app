import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function AddCommentForm() {
  return (
    <form>
      <InputGroup>
        <InputGroupTextarea placeholder="Contenido del comentario..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="sm" className="ml-auto" variant="secondary">
            Agregar
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
