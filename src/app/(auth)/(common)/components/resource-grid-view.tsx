import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";

export function ResourceGridView() {
  return (
    <>
      <GridWrapper>
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
        <FolderCard viewMode="grid" />
      </GridWrapper>

      <GridWrapper>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </GridWrapper>
    </>
  );
}

function GridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-2">
      {children}
    </div>
  );
}
