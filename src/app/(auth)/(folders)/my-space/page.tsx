import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis notas",
};

export default function MyNotesPage() {
  return <ResourceView />;
}
