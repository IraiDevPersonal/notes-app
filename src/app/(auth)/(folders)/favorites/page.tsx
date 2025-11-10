import { Metadata } from "next";
import { FolderPageLayout } from "../components/folder-page-layout";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default function FavoritesPage() {
  return <FolderPageLayout>Favorites</FolderPageLayout>;
}
