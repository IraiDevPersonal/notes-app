import { FieldGroup } from "./field";

type Props = React.ComponentProps<"form">;

export function Form({ children, ...props }: Props) {
  return (
    <form {...props}>
      <FieldGroup>{children}</FieldGroup>
    </form>
  );
}
