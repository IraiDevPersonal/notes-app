import { FoldersLayout } from "../components/folders-layout";

export default function SharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FoldersLayout>{children}</FoldersLayout>;
}
