import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Sidebar } from "@/components/sidebar";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";
import { NavLink } from "./components/navlink";

export default function Home() {
  return (
    <Sidebar.Provider>
      <Sidebar>
        <Sidebar.Header>
          <span>Notes App</span>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.MenuTitle>Menu</Sidebar.MenuTitle>
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
        </Sidebar.Content>
        <Sidebar.Footer>
          <span>Notes App</span>
        </Sidebar.Footer>
      </Sidebar>
      <main className="p-20 h-dvh space-y-4 w-full">
        <h1>Notes App</h1>
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
        <Input
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
          disabled
        />
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
