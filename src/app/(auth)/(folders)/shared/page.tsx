import { Metadata } from "next";
import { FolderPageLayout } from "../components/folder-page-layout";

export const metadata: Metadata = {
  title: "Compartidos",
};

export default function SharedPage() {
  return <FolderPageLayout>Shared</FolderPageLayout>;
}
