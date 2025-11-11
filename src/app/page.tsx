import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 grid place-content-center h-dvh space-y-4">
      <h1 className="text-6xl font-bold">Notes App</h1>
      <p className="text-neutral-400 text-center">Organiza tus notas</p>
      <Button asChild>
        <Link href={ROUTES.MY_SPACE}>Ir a mi espacio</Link>
      </Button>
    </main>
  );
}
