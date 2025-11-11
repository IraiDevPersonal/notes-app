import { Metadata } from "next";
import { FoldersLayout } from "../components/folders-layout";

export const metadata: Metadata = {
  title: "Compartidos",
};

export default function SharedPage() {
  return <FoldersLayout>Shared</FoldersLayout>;
}
