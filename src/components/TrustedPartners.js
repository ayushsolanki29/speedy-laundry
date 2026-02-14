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
    <section className="py-8 sm:py-10 border-y border-border/40 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="transition-all duration-500"
        >
          {/* Desktop View (Grid) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="relative h-24 w-48 sm:h-20 sm:w-40 md:h-28 md:w-56">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 160px, 224px"
                />
              </div>
            ))}
          </div>

          {/* Mobile View (All images in one row) */}
          <div className="sm:hidden flex items-center justify-center gap-2 px-2 py-4">
            {partners.map((partner, index) => (
              <div key={index} className="relative h-10 w-20 flex-shrink-0">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;