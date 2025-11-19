import { Checkbox } from "@/app/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/app/ui/field";
import { Form } from "@/app/ui/form";
import { Input } from "@/app/ui/input";
import { Textarea } from "@/app/ui/textarea";
import { NOTE_FORM_ID } from "../lib/constants";

export function NoteForm() {
  return (
    <Form id={NOTE_FORM_ID} className="w-full space-y-2">
      <Field>
        <FieldLabel>Título</FieldLabel>
        <Input autoFocus placeholder="Título de nota..." />
        {/* <FieldError>error error</FieldError> */}
      </Field>
      <Field>
        <FieldLabel>Contenido</FieldLabel>
        <Textarea
          className="resize-none min-h-28"
          placeholder="Contenido de la nota..."
        />
        {/* <FieldError>error error</FieldError> */}
      </Field>
      <FieldLabel htmlFor="private-flag">
        <Field orientation="horizontal">
          <Checkbox id="private-flag" />
          <FieldContent>
            <FieldTitle>Privada</FieldTitle>
            <FieldDescription>
              Al marcar una nota como privada, no puede ser compartida con otros
              usuarios.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </Form>
  );
}
