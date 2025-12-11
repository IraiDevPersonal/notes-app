import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="p-20 h-dvh space-y-4 max-w-2xl">
      <h1>Notes App</h1>
      <Textarea disabled fullWidth placeholder="Agregar Nota" />
      <div className="flex gap-2">
        <Input placeholder="Agregar Nota" defaultValue="hola mundo" />
        <Button disabled>
          <Plus />
          Agregar Nota
        </Button>
      </div>
    </main>
  );
}
