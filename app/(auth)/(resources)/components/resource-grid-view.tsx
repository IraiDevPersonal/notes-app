import { FolderCard } from "../../(folders)/components/folder-card";
import { NoteCard } from "../../(notes)/components/note-card";
import { For } from "../../../ui/for";
import { arrayFromLength } from "../../../lib/utils";

export function ResourceGridView() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-3">
        <For items={arrayFromLength(30)}>
          {(_, idx) => (
            <FolderCard viewMode="grid" isFavorite={idx % 2 === 0} />
          )}
        </For>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-3">
        <For items={arrayFromLength(20)}>
          {(_, idx) => <NoteCard isFavorite={idx % 2 === 0} />}
        </For>
      </div>
    </>
  );
}
