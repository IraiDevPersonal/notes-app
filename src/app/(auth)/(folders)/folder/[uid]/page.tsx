import { Metadata } from "next";
import { FolderHeader } from "@/app/(auth)/(folders)/components/folder-header";
import { FolderResourceContent } from "@/app/(auth)/(folders)/components/folder-resource-content";

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
