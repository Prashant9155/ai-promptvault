"use client";

import {
  Accordion,
} from "@/components/ui/accordion";

import FAQItem from "./FAQItem";
import { faq } from "./faq.data";

export default function FAQAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto mt-16 max-w-4xl space-y-4"
    >
      {faq.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
        />
      ))}
    </Accordion>
  );
}