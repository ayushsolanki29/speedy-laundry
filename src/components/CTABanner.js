'use client';

import { motion } from "framer-motion";
import { Star, Calendar, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 bg-[#1a1c1e] text-white overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          {/* Left Side: BRAND GUARANTEE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1] mb-12">
              The Speedy<br />
              Guarantee<span className="text-primary">.</span>
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all text-lg"
              >
                Schedule Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: DETAILS & STARS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pb-2"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#ffae00] text-[#ffae00]" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-xl">
              Every order is backed by our industry-leading guarantee. 
              If you&apos;re not satisfied with the cleaning of your clothes, 
              we will re-clean them — 
              <span className="text-white font-medium"> free of charge.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
