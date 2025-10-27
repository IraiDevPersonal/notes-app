import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 grid place-content-center h-dvh space-y-4">
      <h1 className="text-6xl font-bold">Notes App</h1>
      <p className="text-neutral-400 text-center">Organiza tus notas</p>
      <Button asChild>
        <Link href="/dashboard">Ir a mi espacio</Link>
      </Button>
    </main>
  );
}
