"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQItem({ item }) {
  return (
    <AccordionItem
      value={String(item.id)}
      className="rounded-2xl border px-6 transition-all hover:border-primary/30"
    >
      <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
        {item.question}
      </AccordionTrigger>

      <AccordionContent className="pb-6 text-base leading-7 text-muted-foreground">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
}