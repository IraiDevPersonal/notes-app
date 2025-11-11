import { FoldersLayout } from "../components/folders-layout";

export default function MySpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FoldersLayout>{children}</FoldersLayout>;
}
