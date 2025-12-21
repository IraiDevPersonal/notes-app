"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { Modal } from "./modal";
import { Checkbox } from "./checkbox";

export function Test() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <Checkbox />

      <Modal>
        <Modal.Overlay />
        <Modal.Trigger>Abrir Modal.</Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Titutlo Modal.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Description>Contenido del modal.</Modal.Description>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Cancelar</Modal.Close>
            <Button>Guardar</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger>
          <Plus />
          Dropdown 1
        </Dropdown.Trigger>
        <Dropdown.Content placement="bottom-start">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger>
          <Plus />
          Dropdown 2
        </Dropdown.Trigger>
        <Dropdown.Content placement="left">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
