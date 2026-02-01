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

  // Different parallax offsets for each column
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const columns = [
    { images: [images[0], images[4]], y: y1 },
    { images: [images[1], images[5]], y: y2 },
    { images: [images[2], images[6]], y: y3 },
    { images: [images[3], images[7]], y: y4 },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {columns.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              style={{ y: column.y }}
              className="flex flex-col gap-4 md:gap-6"
            >
              {column.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (colIndex * 2 + imgIndex) * 0.05 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-white/10 group"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
