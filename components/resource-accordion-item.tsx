import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function ResourceAccordionItem({ title, id, children }: Props) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-muted-foreground hover:no-underline hover:text-foreground font-normal hover:[&_svg]:text-foreground [&_svg]:transition-colors">
        {title}
      </AccordionTrigger>
      <AccordionContent className="space-y-2">{children}</AccordionContent>
    </AccordionItem>
  );
}
