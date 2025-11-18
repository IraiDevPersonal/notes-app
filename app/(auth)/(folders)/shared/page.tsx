import { Metadata } from "next";
import { ResourceView } from "../../(resources)/components/resource-view";

export const metadata: Metadata = {
  title: "Compartidos",
};

export default function SharedPage() {
  return <ResourceView />;
}
