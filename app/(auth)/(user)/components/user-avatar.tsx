import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avatar";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}
