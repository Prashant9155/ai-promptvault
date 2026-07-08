import FAQAccordion from "./FAQAccordion";
import FAQHeader from "./FAQHeader";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6">
        <FAQHeader />

        <FAQAccordion />
      </div>
    </section>
  );
}