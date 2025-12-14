import { Plus } from "lucide-react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuTitle,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/sidebar";
import { Textarea } from "@/components/textarea";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <span>Notes App</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenuTitle>Menu</SidebarMenuTitle>
          {Array.from({ length: 100 }).map((_, index) => (
            <p key={index} className="text-justify">
              {`Notes App Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, culpa temporibus veritatis dignissimos officiis officia ratione, exercitationem aut illo reiciendis optio tempora atque voluptas magnam quidem dolor sapiente aspernatur ipsam.`}
            </p>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <span>Notes App</span>
        </SidebarFooter>
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
