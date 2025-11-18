import { FolderCard } from "@/app/(auth)/(folders)/components/folder-card";
import { NoteCard } from "@/app/(auth)/(notes)/components/note-card";
import { For } from "@/app/ui/for";
import { arrayFromLength } from "@/app/lib/utils";

export function ResourceGridView() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-3">
        <For items={arrayFromLength(4)}>
          {(_, idx) => (
            <FolderCard viewMode="grid" isFavorite={idx % 2 === 0} />
          )}
        </For>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-3">
        <For items={arrayFromLength(6)}>
          {(_, idx) => <NoteCard isFavorite={idx % 2 === 0} />}
        </For>
      </div>
    </>
  );
}
