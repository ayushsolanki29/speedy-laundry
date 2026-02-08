'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Partner 1", src: "/assets/partners/images.jpg", width: 220, height: 100 },
  { name: "WetCare Specialist", src: "/assets/partners/images.png", width: 220, height: 100 },
  { name: "Miele Approved", src: "/assets/partners/miele-professional-approved-partner.jpg", width: 220, height: 100 },
  { name: "National Laundry Group", src: "/assets/partners/nlg-logo-300x107.png", width: 220, height: 100 },
];

const TrustedPartners = () => {
  return (
    <section className="py-10 border-y border-border/40 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {partners.map((partner, index) => (
            <div key={index} className="relative h-20 w-40 md:h-28 md:w-56">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
