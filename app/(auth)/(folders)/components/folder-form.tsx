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
import { FOLDER_FORM_ID } from "../lib/constants";

export function FolderForm() {
  return (
    <Form id={FOLDER_FORM_ID} className="w-full space-y-2">
      <Field>
        <FieldLabel>Nombre</FieldLabel>
        <Input autoFocus placeholder="Nombre de carpeta..." />
        {/* <FieldError>error error</FieldError> */}
      </Field>
      <Field>
        <FieldLabel>Descripción</FieldLabel>
        <Textarea
          className="resize-none min-h-28"
          placeholder="Descripción de la carpeta..."
        />
        {/* <FieldError>error error</FieldError> */}
      </Field>
      <FieldLabel htmlFor="private-flag">
        <Field orientation="horizontal">
          <Checkbox id="private-flag" />
          <FieldContent>
            <FieldTitle>Privada</FieldTitle>
            <FieldDescription>
              Al marcar una carpeta como privada, no puede ser compartida con
              otros usuarios.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </Form>
  );
}
