import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";
import { cn } from "../../../lib/utils";

type Props = {
  className?: string;
  value: "folders" | "notes";
  children: React.ReactNode;
};

const TITLES = {
  folders: "Carpetas",
  notes: "Notas",
};

export function ResourceAccordionItem({ value, children, className }: Props) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-muted-foreground hover:no-underline hover:text-foreground font-normal hover:[&_svg]:text-foreground [&_svg]:transition-colors">
        {TITLES[value]}
      </AccordionTrigger>
      <AccordionContent className={cn("space-y-2", className)}>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
