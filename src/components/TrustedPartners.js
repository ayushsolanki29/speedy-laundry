'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "images.jpg", width: 200, height: 80 },
  { name: "WetCare Specialist", width: 180, height: 80 },
  { name: "Miele Approved", width: 200, height: 80 },
  { name: "National Laundry Group", width: 220, height: 80 },
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
            <div key={index} className="relative h-16 w-40 md:w-48">
               {/* Placeholder until real logos are added */}
               <div className="absolute inset-0 bg-muted/50 rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/30">
                 <span className="text-xs text-muted-foreground font-medium text-center px-2">
                   {partner.name}
                 </span>
               </div>
               
                 {/* Uncomment when logos are ready: */}
                 <Image
                   src={`/assets/partners/${partner.name.toLowerCase().replace(/ /g, '-')}`}
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
