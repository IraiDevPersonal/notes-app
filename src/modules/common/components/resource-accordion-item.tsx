import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  id: "folders" | "notes";
  children: React.ReactNode;
};

const TITLES = {
  folders: "Carpetas",
  notes: "Notas",
};

export function ResourceAccordionItem({ id, children }: Props) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-muted-foreground hover:no-underline hover:text-foreground font-normal hover:[&_svg]:text-foreground [&_svg]:transition-colors">
        {TITLES[id]}
      </AccordionTrigger>
      <AccordionContent className="space-y-2">{children}</AccordionContent>
    </AccordionItem>
  );
}
