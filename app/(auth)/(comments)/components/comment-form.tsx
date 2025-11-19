import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/app/ui/input-group";
import { useEffect, useRef, useState } from "react";

type Props = {
  onSubmit: () => void;
  defaultValues?: {
    description: string;
  };
};

export function CommentForm({ onSubmit, defaultValues }: Props) {
  const [description, setDescription] = useState(defaultValues?.description);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current && defaultValues?.description) {
      ref.current.focus();
      const length = defaultValues.description.length;
      ref.current.setSelectionRange(length, length);
    }
  }, [defaultValues?.description]);

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputGroupTextarea
          ref={ref}
          value={description}
          placeholder="Contenido del comentario..."
          onChange={(e) => setDescription(e.target.value)}
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
