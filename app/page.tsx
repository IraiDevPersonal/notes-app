import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/sidebar";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>cositas</Sidebar>
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
        <SidebarTrigger />
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
        <Button disabled variant={"secondary"} fullWidth>
          <Plus />
          Agregar Nota
        </Button>
      </main>
    </SidebarProvider>
  );
}
