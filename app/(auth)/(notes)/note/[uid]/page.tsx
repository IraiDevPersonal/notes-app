import { NoteComments } from "../../components/note-comments";
import { NoteContent } from "../../components/note-content";
import { NoteHeader } from "../../components/note-header";

export default function NotePage() {
  return (
    <>
      <NoteHeader />
      <NoteContent />
      <NoteComments />
    </>
  );
}
