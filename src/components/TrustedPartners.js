'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const TrustedPartners = () => {
  return (
    <section className="py-16 border-y border-border/40 bg-background">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-20 md:w-40 md:h-24"
            >
              <Image
                src={`/assets/logo-${index}.jpg`}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
