/* eslint-disable react/no-unescaped-entities */
// import Section from "./Section";

// export default function Faq() {
//   return (
//     <Section>
//       <h1>Questions le plus frequemment</h1>
//       <h3>Trouvez les réponses aux questions les plus courantes sur notre école.</h3>
//       <div></div>
//     </Section>
//   )
// }
"use client";
// import React, { useState } from "react";

// interface FAQ {
//   question: string;
//   answer: string;
// }

// const FAQs: FAQ[] = [
//   {
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, you can return the item for a full refund, no questions asked.",
//   },
//   {
//     question: "How long does shipping take?",
//     answer:
//       "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
//   },
//   {
//     question: "Do you offer international shipping?",
//     answer:
//       "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary based on the destination.",
//   },
//   {
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
//   },
// ];

// const Faq: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//           <h2 className="text-3xl font-bold mb-2">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-purple-100">
//             Find answers to the most common questions about our service.
//           </p>
//         </div>
//         <div className="divide-y divide-gray-200">
//           {FAQs.map((faq, index) => (
//             <div
//               key={index}
//               className={`faq-item p-6 cursor-pointer ${
//                 activeIndex === index ? "active" : ""
//               }`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {faq.question}
//                 </h3>
//                 <span className="faq-icon text-purple-600 text-2xl">
//                   {activeIndex === index ? "-" : "+"}
//                 </span>
//               </div>
//               {activeIndex === index && (
//                 <div className="faq-answer mt-2 text-gray-600">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Section from "./Section";

export function Faq() {
  return (
    <Section>
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
