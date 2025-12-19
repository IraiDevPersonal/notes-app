"use client";

import { Plus } from "lucide-react";
import { Dropdown } from "./dropdown";
import { useState } from "react";

export function Test() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col items-center gap-2">
      <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger>
          <Plus />
          Agregar Nota
        </Dropdown.Trigger>
        <Dropdown.Content placement="bottom-start">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
