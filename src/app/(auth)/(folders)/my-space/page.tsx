import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { Metadata } from "next";
import { FoldersLayout } from "../components/folders-layout";

export const metadata: Metadata = {
  title: "Mis espacio",
};

export default function MySpacePage() {
  return (
    <FoldersLayout>
      <ResourceView />
    </FoldersLayout>
  );
}
