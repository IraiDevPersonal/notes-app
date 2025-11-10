export default function FoldersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-1 p-4 space-y-4">{children}</main>;
}
