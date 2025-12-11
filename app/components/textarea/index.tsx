import { VariantProps } from "class-variance-authority";
import { inputVariant } from "../input/variant";
import { cn } from "@/lib/utils";

type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "disabled"
> &
  VariantProps<typeof inputVariant>;

export function Textarea({
  className,
  fullWidth,
  disabled,
  success,
  error,
  ...props
}: TextareaProps) {
  return (
    <textarea
      disabled={disabled || undefined}
      className={inputVariant({
        className: cn("min-h-32 resize-none", className),
        success: error ? false : success,
        normal: !error && !success,
        fullWidth,
        disabled,
        error,
      })}
      {...props}
    ></textarea>
  );
}
