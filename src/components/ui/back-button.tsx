"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="[&_svg]:size-5!"
      variant="secondary"
      size="icon-lg"
    >
      <ArrowLeft />
    </Button>
  );
}
