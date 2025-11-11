import { FoldersLayout } from "../components/folders-layout";

export default function FavoritesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FoldersLayout>{children}</FoldersLayout>;
}
