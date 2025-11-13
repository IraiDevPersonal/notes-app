import { Metadata } from "next";
import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";

export const metadata: Metadata = {
  title: "Compartidos",
};

export default function SharedPage() {
  return <ResourceView />;
}
