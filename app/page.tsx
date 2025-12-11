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
        <div className="flex w-full justify-between">
          <Input placeholder="Agregar Nota" defaultValue="hola mundo" />
          <SidebarTrigger />
        </div>
        <Button>
          <Plus />
          Agregar Nota
        </Button>
      </main>
    </SidebarProvider>
  );
}
