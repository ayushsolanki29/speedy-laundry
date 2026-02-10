'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  // Interleaved New and Old Images to separate similar styles
  { url: "/assets/img-grid/IMG_9081.jpg", alt: "Laundry service" },
  { url: "/assets/img-grid/20208 - Vodafone - WashCo - B-roll Cutdown.00_28_15_02.Still002.jpg", alt: "Professional cleaning" },
  { url: "/assets/img-grid/IMG_9083.jpg", alt: "Freshly folded" },
  { url: "/assets/img-grid/259949512_4615477651842803_5580518647924254211_n.jpg", alt: "Quality care" },
  { url: "/assets/img-grid/IMG_9085.jpg", alt: "Steam ironing" },
  { url: "/assets/img-grid/Firefly 20240607092950.png", alt: "Dry cleaning" },

  { url: "/assets/img-grid/IMG_9084.jpg", alt: "Pickup and delivery" },
  { url: "/assets/img-grid/20208 - Vodafone - WashCo - B-roll Cutdown.00_35_37_23.Still007.jpg", alt: "Expert laundry care" },
  { url: "/assets/img-grid/IMG_9086.jpg", alt: "Premium cleaning" },
  { url: "/assets/img-grid/219863733_6257125504103_5292601337594092513_n.jpg", alt: "Professional folding" },
  { url: "/assets/img-grid/IMG_9087.jpg", alt: "Fabric care" },
  { url: "/assets/img-grid/IMG_9082.jpg", alt: "Ironing service" },
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
  const row1 = images.slice(0, 6);
  const row2 = images.slice(6, 12);

  return (
    <section ref={containerRef} className="py-10 md:py-20 bg-background overflow-hidden relative">
      <div className="flex flex-col gap-4 md:gap-4">
        {/* Row 1: Moves Left on Scroll - Touch scrollable on mobile */}
        <div className="flex overflow-x-auto md:overflow-hidden scrollbar-hide touch-auto">
          <motion.div
            style={{ x: xRow1 }}
            className="flex gap-4 whitespace-nowrap px-4 md:px-4"
          >
            {row1.map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] aspect-video overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
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

        {/* Row 2: Moves Right on Scroll - Touch scrollable on mobile */}
        <div className="flex overflow-x-auto md:overflow-hidden scrollbar-hide touch-auto">
          <motion.div
            style={{ x: xRow2 }}
            className="flex gap-4 whitespace-nowrap px-4 md:px-4"
          >
            {row2.map((image, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] aspect-video overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
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

      {/* Add custom styles for scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ImageGrid;