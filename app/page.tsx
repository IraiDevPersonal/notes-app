import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar>cositas</Sidebar>
      <main className="p-20 h-dvh space-y-4 w-full">
        <h1>Notes App</h1>
        <Textarea disabled fullWidth placeholder="Agregar Nota" />
        <div className="flex gap-2">
          <Input placeholder="Agregar Nota" defaultValue="hola mundo" />
          <Button>
            <Plus />
            Agregar Nota
          </Button>
        </div>
      </main>
    </>
  );
}
