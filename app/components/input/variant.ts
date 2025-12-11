import { cva } from "class-variance-authority";

export const inputVariant = cva(
  "p-3 rounded-xl outline-none text-base transition-all duration-300 bg-input/20 placeholder:transition-colors placeholder:duration-300 not-disabled:hover:bg-input/30 focus:bg-input/20 placeholder:text-muted-foreground/70 disabled:text-muted-foreground placeholder:italic not-disabled:hover:placeholder:text-muted-foreground placeholder:font-light",
  {
    variants: {
      normal: {
        false: null,
        true: "focus:ring-2 focus:ring-primary text-foreground",
      },
      error: {
        false: null,
        true: "not-disabled:ring-2 ring-danger text-danger",
      },
      success: {
        false: null,
        true: "not-disabled:ring-2 ring-success text-success",
      },
      fullWidth: {
        false: null,
        true: "w-full",
      },
      disabled: {
        false: null,
        true: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      fullWidth: false,
      success: false,
      normal: true,
      error: false,
    },
  }
);
