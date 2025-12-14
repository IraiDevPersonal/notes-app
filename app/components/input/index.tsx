import { VariantProps } from "class-variance-authority";
import { inputVariant } from "./variant";
import { cn } from "@/lib/utils";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled"
> &
  VariantProps<typeof inputVariant>;

export function Input({
  fullWidth,
  disabled,
  className,
  success,
  error,
  ...props
}: InputProps) {
  return (
    <input
      type="text"
      disabled={disabled || undefined}
      className={cn(
        inputVariant({
          success: error ? false : success,
          fullWidth,
          disabled,
          error,
        }),
        "h-9",
        className
      )}
      {...props}
    />
  );
}
