'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Clock, Truck, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import TrustedPartners from "./TrustedPartners";

const heroVideo = "/assets/hero-video.mp4";
const heroVideo2 = "/assets/hero-video-2.mp4";

const services = [
  "Ironing",
  "Dry Cleaning",
  "Wash & Fold",
  "Wedding Dresses",
  "Suits & Blazers",
  "Laundry",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/img-grid/IMG_9083.jpg"
            className="w-full h-full object-cover"
            aria-label="Background video showing professional laundry services"
            title="Speedy Laundry Service Video"
          >
            <source src={heroVideo2} type="video/mp4" />
            <track kind="captions" srcLang="en" label="No captions provided" src={null} />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/10"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Serving High Wycombe & Surrounding Areas</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1]">
                We&apos;ll Handle Your
              </h1>

              {/* Animated service text - Clean slide animation */}
              <div className="h-20 sm:h-24 md:h-28 mt-2 sm:mt-3 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="block font-script text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg"
                  >
                    {services[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-xl font-light"
            >
              Professional cleaning with <span className="text-primary font-bold">free pickup & delivery</span>. Fast 24-48 hour turnaround guaranteed.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              {[
                { icon: Truck, text: "Free Pickup & Delivery" },
                { icon: Clock, text: "24-48 Hour Turnaround" },
                { icon: Leaf, text: "Eco-Friendly" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10 cursor-default"
                >
                  <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-white text-xs sm:text-sm whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-xl text-base sm:text-lg group w-full sm:w-auto"
              >
                Schedule Pickup
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:01494445291"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all border border-white/20 w-full sm:w-auto"
              >
                Call 01494 445291
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-4 sm:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-1 bg-white rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1c-4.3 0-8.01 2.47-9.82 6.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-star fill-star" />
                    ))}
                  </div>
                  <div className="text-white">
                    <span className="font-bold">4.9/5</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <TrustedPartners />
    </>
  );
};

export default Hero;