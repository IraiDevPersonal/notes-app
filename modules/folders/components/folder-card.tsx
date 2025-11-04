import { Folder } from "lucide-react";

export function FolderCard() {
  return (
    <div className="bg-card rounded-2xl p-4 flex items-center gap-x-4 hover:bg-accent transition-colors w-full">
      <Folder />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">Carpeta 1</h3>
        <p className="text-muted-foreground italic text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          dolores nobis quidem inventore ipsam voluptatem amet reprehenderit
          incidunt odit, at esse sint accusamus libero accusantium voluptates
          obcaecati. At, ex veritatis.
        </p>
      </div>
    </div>
  );
}
