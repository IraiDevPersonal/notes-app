export default function NoteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="p-4 lg:p-8 space-y-4 lg:space-y-8 w-full max-w-3xl mx-auto">
      {children}
    </main>
  );
}
