"use client";

import { Button, ButtonProps } from "../button";
import { useDropdown } from "./dropdown-provider";

type DropdownTriggerProps = {
  children: React.ReactNode;
} & Pick<ButtonProps, "onClick" | "variant" | "size">;

export function DropdownTrigger({ onClick, ...props }: DropdownTriggerProps) {
  const { setOpen, triggerRef } = useDropdown();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen();
    onClick?.(e);
  };
  return <Button ref={triggerRef} onClick={handleClick} {...props} />;
}
