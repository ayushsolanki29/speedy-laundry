'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const partners = [
  { name: "Partner 1", src: "/assets/partners/images.jpg", width: 220, height: 100 },
  { name: "WetCare Specialist", src: "/assets/partners/images.png", width: 220, height: 100 },
  { name: "Miele Approved", src: "/assets/partners/miele-professional-approved-partner.jpg", width: 220, height: 100 },
  { name: "National Laundry Group", src: "/assets/partners/nlg-logo-300x107.png", width: 220, height: 100 },
];

const TrustedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality - 2.0 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-10 border-y border-border/40 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
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

          {/* Mobile View (Auto Slider - One image at a time with animation) */}
          <div className="sm:hidden relative overflow-hidden">
            <div className="relative h-32 w-full mx-auto max-w-xs">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : (index > currentIndex ? 100 : -100)
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple dots indicator (no animation on dot movement) */}
            <div className="flex justify-center items-center mt-4 space-x-2">
              {partners.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;