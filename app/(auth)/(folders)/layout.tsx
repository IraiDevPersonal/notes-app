import { CreateResourceFab } from "../(resources)/components/create-resource-fab";

export default function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <CreateResourceFab />
    </>
  );
}
