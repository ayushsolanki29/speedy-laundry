'use client';

import { motion } from "framer-motion";
import { BookOpen, Search, TrendingUp } from "lucide-react";

const BlogHero = () => {
  const serviceImages = [
    "/assets/service-wash.jpg",
    "/assets/service-dryclean.jpg",
    "/assets/service-iron.jpg",
    "/assets/service-fold.jpg"
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 md:pt-32 bg-gradient-to-br from-header via-header/95 to-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat" />
      </div>

      {/* Service Images - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden md:block">
        {serviceImages.map((image, index) => (
          <div
            key={index}
            className="absolute opacity-5"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
              transform: `translate(-50%, -50%) rotate(${index * 15}deg)`
            }}
          >
            <img
              src={image}
              alt={`Service ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-accent/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-white/90 text-xs md:text-sm font-medium">Expert Laundry Tips & Insights</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.2] md:leading-[1.1] mb-6"
          >
            Your Ultimate Guide to
            <span className="block text-primary mt-2">Perfect Laundry</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto font-light px-4 md:px-0"
          >
            Discover professional laundry tips, stain removal secrets, and fabric care advice from industry experts.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            {[
              { icon: BookOpen, text: "Expert Tips" },
              { icon: Search, text: "Stain Solutions" },
              { icon: TrendingUp, text: "Fabric Care" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 cursor-default"
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-white text-xs md:text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto px-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for laundry tips..."
                className="w-full px-5 md:px-6 py-3.5 md:py-4 pl-12 md:pl-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-sm md:text-base"
              />
              <Search className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
