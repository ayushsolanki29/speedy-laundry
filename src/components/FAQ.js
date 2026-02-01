'use client';

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve High Wycombe and surrounding areas including Beaconsfield, Marlow, Amersham, and nearby locations. Free pickup & delivery for all these areas."
  },
  {
    question: "How long does it take?",
    answer: "Our standard turnaround time is 24-48 hours. For urgent requests, please contact us directly and we'll do our best to accommodate your needs."
  },
  {
    question: "How do I schedule a pickup?",
    answer: "You can schedule a pickup by filling out our contact form, calling us at 01494 445291, or emailing info@speedylaundry.co.uk."
  },
  {
    question: "What items do you clean?",
    answer: "We clean everything from everyday laundry (Wash/Iron/Fold) to specialized items like suits, wedding dresses, curtains, and duvets."
  },
  {
    question: "Is delivery really free?",
    answer: "Yes! Pickup and delivery are completely free within our service areas, with no hidden charges or minimum requirements."
  },
  {
    question: "Is there a satisfaction guarantee?",
    answer: "Absolutely! If you're not 100% happy with our work, let us know within 24 hours and we'll re-clean the item free of charge."
  }
];

const FAQ = () => {
  const [isMounted, setIsMounted] = (require("react").useState)(false);

  (require("react").useEffect)(() => {
    setIsMounted(true);
  }, []);

  // Split FAQs into two columns (3 each)
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs mb-4">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="font-script text-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto min-h-[400px]">
          {isMounted ? (
            <>
              {/* Left Column */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-4">
                  {leftColumn.map((faq, index) => (
                    <AccordionItem 
                      key={index}
                      value={`item-left-${index}`}
                      className="bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-bold hover:no-underline py-5 text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-4">
                  {rightColumn.map((faq, index) => (
                    <AccordionItem 
                      key={index}
                      value={`item-right-${index}`}
                      className="bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-bold hover:no-underline py-5 text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </>
          ) : (
            <div className="col-span-2 flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-10 bg-background/50 rounded-[3rem] border border-border/50 max-w-4xl mx-auto"
        >
          <p className="text-muted-foreground text-lg mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:01494445291"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
            >
              Call 01494 445291
            </a>
            <a
              href="mailto:info@speedylaundry.co.uk"
              className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-bold px-8 py-4 rounded-full border border-border hover:border-primary/30 transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
