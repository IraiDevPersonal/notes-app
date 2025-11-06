import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NoteCardDropdownMenu } from "./note-card-drpdown-menu";

export function NoteCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nota 1</CardTitle>
        <CardAction>
          <NoteCardDropdownMenu />
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illo inventore odio. Praesentium non accusantium aut, omnis sint,
          voluptas ratione debitis dolore explicabo consequuntur aperiam a
          rerum, amet ipsam tempora!
        </CardDescription>
      </CardContent>
    </Card>
  );
}
