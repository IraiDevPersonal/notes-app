import { Metadata } from "next";
import { FoldersLayout } from "../components/folders-layout";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default function FavoritesPage() {
  return <FoldersLayout>Favorites</FoldersLayout>;
}
