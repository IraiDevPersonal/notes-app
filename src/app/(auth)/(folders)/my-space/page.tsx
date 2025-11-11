import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis espacio",
};

export default function MySpacePage() {
  return <ResourceView />;
}
