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

type Props = {
  children: React.ReactNode;
  isFolder?: boolean;
  resourceTitle: string;
};

export function ShareResourceModal({
  children,
  resourceTitle,
  isFolder,
}: Props) {
  const description = `Compartir (${resourceTitle}) con otros usuarios.`;

  return (
    <Modal
      trigger={children}
      description={description}
      title={isFolder ? "Compartir Carpeta" : "Compartir Nota"}
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
