import { useTextareaAutofocus } from "@/app/hooks/use-textarea-autofocus";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/app/ui/input-group";
import { Edit2, Plus } from "lucide-react";
import { useState } from "react";
import { OwnerUserBadge } from "../../(user)/components/owner-user-badge";

type Props = {
  onCancel?: () => void;
  onSubmit: () => void;
  defaultValues?: {
    description: string;
  };
};

export function CommentForm({ onCancel, onSubmit, defaultValues }: Props) {
  const [description, setDescription] = useState(defaultValues?.description);
  const ref = useTextareaAutofocus({ value: defaultValues?.description });

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        {defaultValues?.description && (
          <InputGroupAddon align="block-start">
            <InputGroupText>
              Autor
              <OwnerUserBadge
                email="user@user.com"
                fullName="User User"
                userName="user"
              />
            </InputGroupText>
          </InputGroupAddon>
        )}

        <InputGroupTextarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Contenido del comentario..."
          value={description}
          ref={ref}
        />
        <InputGroupAddon align="block-end" className="justify-end">
          {defaultValues?.description && onCancel && (
            <InputGroupButton onClick={onCancel} variant="secondary" size="sm">
              Cancelar
            </InputGroupButton>
          )}

          <InputGroupButton disabled={!description} variant="default" size="sm">
            {defaultValues?.description ? <Edit2 /> : <Plus />}
            {defaultValues?.description ? "Editar" : "Agregar"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
