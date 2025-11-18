import { Metadata } from "next";
import { FolderHeader } from "../../components/folder-header";
import { FolderResourceContent } from "../../components/folder-resource-content";

export const metadata: Metadata = {
  title: "Carpeta",
};

export default function FolderPage() {
  return (
    <>
      <FolderHeader />
      <FolderResourceContent />
    </>
  );
}
