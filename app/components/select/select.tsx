import React from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { inputVariant } from "../input";
import { Option } from "./option";
import "./select.css";

type SelectOption = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

type SelectProps = {
  children?: ((option: SelectOption) => React.ReactNode) | React.ReactNode;
  options?: Array<SelectOption>;
} & Omit<React.ComponentProps<"select">, "disabled" | "children"> &
  VariantProps<typeof inputVariant>;

export function Select({
  options = [],
  fullWidth,
  className,
  disabled,
  children,
  success,
  error,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={cn(
        inputVariant({
          success: error ? false : success,
          fullWidth,
          disabled,
          error,
        }),
        "h-9 relative p-2 text-sm flex items-center",
        className
      )}
      disabled={disabled || undefined}
    >
      {children ? (
        <SelectContent options={options}>{children}</SelectContent>
      ) : (
        <>
          <Option value="">Sin selección</Option>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.icon}
              {option.label}
            </Option>
          ))}
        </>
      )}
    </select>
  );
}

function SelectContent({
  children,
  options,
}: {
  children: SelectProps["children"];
  options: Array<SelectOption>;
}) {
  return typeof children === "function"
    ? options.map((option) => (
        <React.Fragment key={option.value}>{children(option)}</React.Fragment>
      ))
    : children;
}

{
  /* <button>
    <selectedcontent className="flex justify-start items-center gap-2 [&>svg]:size-4 w-full"></selectedcontent>
  </button> */
}
