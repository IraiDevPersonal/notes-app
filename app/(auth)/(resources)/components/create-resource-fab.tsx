import { Button } from "@/app/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/ui/popover";
import { Plus } from "lucide-react";
import { CreateFolderModal } from "@/app/(auth)/(folders)/components/create-folder-modal";
import { CreateNoteModal } from "@/app/(auth)/(notes)/components/create-note-modal";

export function CreateResourceFab() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 z-50 data-[state=open]:scale-90"
          variant="fab"
          size="fab"
        >
          <Plus className="size-6" strokeWidth={2} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-transparent flex flex-col items-end space-y-2 w-max border-0">
        <CreateFolderModal />
        <CreateNoteModal />
      </PopoverContent>
    </Popover>
  );
}
