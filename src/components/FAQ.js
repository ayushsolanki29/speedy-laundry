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
    answer: "We serve High Wycombe and surrounding areas including Beaconsfield, Marlow, Amersham, and nearby locations. If you're unsure whether we cover your area, please contact us and we'll be happy to help."
  },
  {
    question: "How long does it take to get my clothes back?",
    answer: "Our standard turnaround time is 24-48 hours. For urgent requests, please contact us directly and we'll do our best to accommodate your needs."
  },
  {
    question: "How do I schedule a pickup?",
    answer: "You can schedule a pickup by filling out the contact form on our website, calling us at 01494 445291, or emailing info@speedylaundry.co.uk. We'll arrange a convenient time for collection."
  },
  {
    question: "What items do you clean?",
    answer: "We clean a wide range of items including everyday clothing, shirts, suits, dresses, wedding dresses, curtains, duvets, pillows, leather & suede items, and more. Check our Services section for a full list."
  },
  {
    question: "Is pickup and delivery really free?",
    answer: "Yes! We offer completely free pickup and delivery within our service areas. There are no hidden charges or minimum order requirements."
  },
  {
    question: "How do you handle delicate items?",
    answer: "Delicate items receive special care. We assess each garment individually and use appropriate cleaning methods. For particularly precious items like wedding dresses, we provide specialized cleaning and packaging."
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you're not happy with the results, please let us know within 24 hours of delivery and we'll re-clean the item free of charge."
  },
  {
    question: "Do you offer commercial laundry services?",
    answer: "Yes, we provide commercial laundry services for hotels, guest houses, restaurants, and other businesses. Contact us for a customized quote based on your requirements."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="font-script text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01494445291"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all"
            >
              Call 01494 445291
            </a>
            <a
              href="mailto:info@speedylaundry.co.uk"
              className="inline-flex items-center gap-2 bg-card text-foreground font-semibold px-6 py-3 rounded-full border border-border hover:border-primary/30 transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
