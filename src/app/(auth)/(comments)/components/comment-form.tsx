import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

type Props = {
  onSubmit: () => void;
  defaultValues?: {
    description: string;
  };
};

export function CommentForm({ onSubmit, defaultValues }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputGroupTextarea
          autoFocus={!!defaultValues?.description}
          placeholder="Contenido del comentario..."
          defaultValue={defaultValues?.description}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="sm" className="ml-auto" variant="secondary">
            {defaultValues?.description ? "Editar" : "Agregar"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
