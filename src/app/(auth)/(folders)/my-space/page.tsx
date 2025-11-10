import { ResourceView } from "@/app/(auth)/(common)/components/resource-view";
import { Metadata } from "next";
import { FolderPageLayout } from "../components/folder-page-layout";

export const metadata: Metadata = {
  title: "Mis espacio",
};

export default function MySpacePage() {
  return (
    <FolderPageLayout>
      <ResourceView />
    </FolderPageLayout>
  );
}
