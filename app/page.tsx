import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { NavLink } from "@/components/navlink";
import { Select } from "@/components/select";
import { Sidebar } from "@/components/sidebar";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";
import { Dropdown } from "./components/dropdown";

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
        <Dropdown.Provider>
          <Dropdown>
            <Dropdown.Trigger>
              <Plus />
              Agregar Nota
            </Dropdown.Trigger>
            <Dropdown.Content placement="bottom-start" />
          </Dropdown>
        </Dropdown.Provider>
        <Textarea disabled fullWidth placeholder="Agregar Nota" />
        <Input fullWidth placeholder="Agregar Nota" defaultValue="hola mundo" />
        <Input
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
          error
        />
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
