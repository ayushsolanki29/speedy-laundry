'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop", alt: "Neatly folded laundry" },
  { url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=800&fit=crop", alt: "Dry cleaning" },
  { url: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&h=800&fit=crop", alt: "Fresh clothes" },
  { url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=800&fit=crop", alt: "Laundry service" },
  { url: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&h=800&fit=crop", alt: "Ironing service" },
  { url: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=800&fit=crop", alt: "Clean textiles" },
  { url: "https://images.unsplash.com/photo-1469504512102-900f29606341?w=600&h=800&fit=crop", alt: "Fresh laundry" },
  { url: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=800&fit=crop", alt: "Folded clothes" },
];

const ImageGrid = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to horizontal movement (x)
  // Row 1 slides right, Row 2 slides left as you scroll down
  const xRow1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // Split images for two horizontal rows
  const row1 = images.slice(0, 4);
  const row2 = images.slice(4, 8);

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden relative">
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves Left on Scroll */}
        <div className="flex">
          <motion.div 
            style={{ x: xRow1 }}
            className="flex gap-4 whitespace-nowrap px-4"
          >
            {row1.map((image, idx) => (
              <div 
                key={idx} 
                className="relative w-[450px] aspect-video overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right on Scroll */}
        <div className="flex">
          <motion.div 
            style={{ x: xRow2 }}
            className="flex gap-4 whitespace-nowrap px-4"
          >
            {row2.map((image, idx) => (
              <div 
                key={idx} 
                className="relative w-[450px] aspect-video overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
