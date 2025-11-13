import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";
import { For } from "@/components/for";
import { arrayFromLength } from "@/lib/utils";

export function ResourceGridView() {
  return (
    <>
      <GridWrapper>
        <For items={arrayFromLength(30)}>
          {() => <FolderCard viewMode="grid" />}
        </For>
      </GridWrapper>

      <GridWrapper>
        <For items={arrayFromLength(20)}>{() => <NoteCard />}</For>
      </GridWrapper>
    </>
  );
}

function GridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-3">
      {children}
    </div>
  );
}
