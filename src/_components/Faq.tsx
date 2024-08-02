/* eslint-disable react/no-unescaped-entities */

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Section from "./Section";

export function Faq() {
  return (
    <Section className="bg-gray-100 py-11">
      <h2 className="text-left uppercase text-[2rem] font-caption text-primary font-bold mb-2">
        Questions frequemment posées
      </h2>
      <p className="text-left uppercase text-[16px] font-roboto text-muted-foreground font-bold mb-2">
        Trouvez les réponses aux questions les plus courantes sur notre école.
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full font-roboto text-gray-700"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}
