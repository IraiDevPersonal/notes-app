import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

type Props = {
  onSubmit: () => void;
  defaultValues?: {
    comment: string;
  };
};

export function CommentForm({ onSubmit, defaultValues }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputGroupTextarea
          autoFocus={!!defaultValues?.comment}
          placeholder="Contenido del comentario..."
          defaultValue={defaultValues?.comment}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="sm" className="ml-auto" variant="secondary">
            {defaultValues?.comment ? "Editar" : "Agregar"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
