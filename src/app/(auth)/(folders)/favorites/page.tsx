import { Metadata } from "next";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default function FavoritesPage() {
  return <ResourceView />;
}
