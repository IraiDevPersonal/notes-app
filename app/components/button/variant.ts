"use client";

import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "font-medium flex gap-2 items-center justify-center transition-colors duration-300 overflow-hidden min-w-fit relative",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
      },
      size: {
        default: "text-base px-3 h-9 [&>svg]:size-4 rounded-xl",
        sm: "text-xs px-2 h-8 [&>svg]:size-4 rounded-lg",
        lg: "text-lg px-4 h-12 [&>svg]:size-6 rounded-2xl",
        icon: "text-base h-9 w-9 min-w-9 [&>svg]:size-4 rounded-xl",
        "icon-sm": "text-base h-8 w-8 min-w-8 [&>svg]:size-4 rounded-lg",
        "icon-lg": "text-lg h-12 w-12 min-w-12 [&>svg]:size-6 rounded-2xl",
      },
      fullRounded: {
        true: "rounded-full",
        false: null,
      },
      fullWidth: {
        true: "w-full",
        false: null,
      },
      disabled: {
        false: null,
        true: "bg-muted text-muted-foreground",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: false,
        class: "hover:bg-primary-500",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullRounded: false,
      fullWidth: false,
      disabled: false,
    },
  }
);
