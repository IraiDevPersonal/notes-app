"use client";

import { arrayFromLength } from "@/app/lib/utils";
import { Button } from "@/app/ui/button";
import { Modal } from "@/app/ui/dialog";
import { Field } from "@/app/ui/field";
import { For } from "@/app/ui/for";
import { Form } from "@/app/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/app/ui/input-group";
import { Label } from "@/app/ui/label";
import { Plus, Share2 } from "lucide-react";
import { UserAvatar } from "@/app/(auth)/(user)/components/user-avatar";
import { ScrollArea } from "@/app/ui/scroll-area";
import { Checkbox } from "@/app/ui/checkbox";
import { ResourceModel, ResourceType } from "../types/resource";
import { useState } from "react";

type Props = {
  onCloseEffect?: (open: false) => void;
  children: React.ReactNode;
  resource: ResourceModel;
  type?: ResourceType;
};

export function ShareResourceModal({
  onCloseEffect,
  type = "note",
  resource,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      onCloseEffect?.(false);
    }
  };

  const isFolder = type === "folder";
  const description = `Compartir: "${resource.title}" con otros usuarios.`;

  return (
    <Modal
      title={isFolder ? "Compartir Carpeta" : "Compartir Nota"}
      onOpenChange={handleOpenChange}
      description={description}
      trigger={children}
      open={open}
      confirmButton={
        <Button>
          <Share2 />
          Compartir
        </Button>
      }
    >
      <Form className="p-0.5 mb-4">
        <Field>
          <Label htmlFor="email" className="text-foreground">
            Correo
          </Label>
          <InputGroup>
            <InputGroupInput id="email" placeholder="user@email.com" />
            <InputGroupAddon align="inline-end">
              <Button size="icon-sm" variant="outline" className="ml-auto">
                <Plus />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </Form>
      <ScrollArea>
        <ul className="space-y-1 max-h-96">
          <For items={arrayFromLength(21)}>
            {() => (
              <li>
                <div className="flex items-center gap-4">
                  <Checkbox />
                  <div className="shrink-0">
                    <UserAvatar />
                  </div>
                  <div className="grow">
                    <p className="font-medium">shadcn</p>
                    <p className="text-sm text-muted-foreground">
                      shadcn@github.com
                    </p>
                  </div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </ScrollArea>
    </Modal>
  );
}
