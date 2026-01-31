'use client';

import { motion } from "framer-motion";

const images = [
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", alt: "Neatly folded laundry" },
  { url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop", alt: "Dry cleaning" },
  { url: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&h=400&fit=crop", alt: "Fresh clothes" },
  { url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=400&fit=crop", alt: "Laundry service" },
  { url: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&h=400&fit=crop", alt: "Ironing service" },
  { url: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop", alt: "Clean textiles" },
  { url: "https://images.unsplash.com/photo-1469504512102-900f29606341?w=600&h=400&fit=crop", alt: "Fresh laundry" },
  { url: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop", alt: "Folded clothes" },
];

const ImageGrid = () => {
  return (
    <section className="py-4 bg-background overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
