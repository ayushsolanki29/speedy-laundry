'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTABanner = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and scale effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-primary overflow-hidden text-primary-foreground"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow text */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground/70 font-medium tracking-[0.2em] uppercase mb-6 text-sm"
          >
            Schedule Today
          </motion.p>

          {/* Main heading with staggered animation */}
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]"
            >
              Free Collection
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h2 
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-script text-accent"
            >
              & Delivery
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 text-xl mb-10 max-w-lg mx-auto font-light"
          >
            In High Wycombe and surrounding areas.
            <span className="block mt-1 font-medium">24-48 hour turnaround guaranteed.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-accent text-accent-foreground font-bold px-10 py-5 rounded-full hover:brightness-105 transition-all shadow-2xl text-lg"
            >
              Schedule your first pickup
            </motion.a>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Satisfaction guaranteed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
