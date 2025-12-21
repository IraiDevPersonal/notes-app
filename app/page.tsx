import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { NavLink } from "@/components/navlink";
import { Select } from "@/components/select";
import { Sidebar } from "@/components/sidebar";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";
import { Test } from "./components/test";
import { Label } from "./components/label";
import { HelperText } from "./components/helper-text";
import { Chip } from "./components/chip";

export default function Home() {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Header>
          <span>Notes App</span>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.MenuTitle>Menu</Sidebar.MenuTitle>
          <nav>
            <Sidebar.Menu>
              {Array.from({ length: 4 }).map((_, index) => (
                <Sidebar.MenuItem key={index}>
                  {(cls) => (
                    <NavLink
                      href={`/${index === 0 ? "" : index + 1}`}
                      classNames={cls}
                    >
                      Item {index + 1}
                    </NavLink>
                  )}
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </nav>
        </Sidebar.Content>
        <Sidebar.Footer>
          <span>Notes App</span>
        </Sidebar.Footer>
      </Sidebar>
      <main className="p-20 h-dvh space-y-4 w-full">
        <h1>Notes App</h1>
        <Chip size="sm" variant="outline">
          <Plus />
          Outline
        </Chip>
        <Chip>
          <Plus />
          Default
        </Chip>
        <Chip size="lg" variant="success">
          <Plus />
          Success
        </Chip>
        <Chip size="lg" variant="danger">
          <Plus />
          Danger
        </Chip>
        <Test />
        <div>
          <Label htmlFor="textarea">Textarea</Label>
          <Textarea disabled fullWidth placeholder="Agregar Nota" />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label htmlFor="input">Input</Label>
          <Input
            id="input"
            fullWidth
            placeholder="Agregar Nota"
            defaultValue="hola mundo"
          />
          <HelperText>Helper Text</HelperText>
        </div>
        <div className="flex flex-col gap-y-1">
          <Label htmlFor="input" error>
            Input
          </Label>
          <Input
            error
            id="input"
            fullWidth
            placeholder="Agregar Nota"
            defaultValue="hola mundo"
          />
          <HelperText error>Helper Text</HelperText>
        </div>
        <Input
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
          success
        />
        <div className="flex gap-2">
          <Input
            fullWidth
            placeholder="Agregar Nota"
            defaultValue="hola mundo"
            disabled
          />
          <Select
            fullWidth
            options={[
              { label: "Opcion 1", value: "1" },
              { label: "Opcion 2", value: "2" },
              { label: "Opcion 3", value: "3" },
            ]}
          />
        </div>
        <Sidebar.Trigger />
        <Button fullWidth>
          <Plus />
          Agregar Nota
        </Button>
        <Button variant={"danger"} fullWidth>
          <Plus />
          Agregar Nota
        </Button>
        <Button variant={"secondary"} fullWidth>
          <Plus />
          Agregar Nota
        </Button>
        <Button variant={"text"} fullWidth>
          <Plus />
          Agregar Nota
        </Button>
        <Button disabled variant={"text"} fullWidth>
          <Plus />
          Agregar Nota
        </Button>
      </main>
    </Sidebar.Provider>
  );
}
