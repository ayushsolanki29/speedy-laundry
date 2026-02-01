"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WashingMachine, Shirt } from "lucide-react";

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [bubbleProps, setBubbleProps] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate stable random properties only on the client
    const props = [...Array(8)].map((_, i) => ({
      width: Math.random() * 15 + 5,
      height: Math.random() * 15 + 5,
      x: Math.random() * 500 - 250,
      animateX: (Math.random() * 500 - 250) + (Math.sin(i * 10) * 30),
      duration: Math.random() * 3 + 3,
      delay: i * 0.5
    }));
    setBubbleProps(props);

    // Simulate initial loading time or wait for window load
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          >
            <div className="relative flex items-center justify-center">
              {/* Main Machine Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="p-8 rounded-[2rem] bg-blue-50/50 dark:bg-[#0095da]/10 backdrop-blur-md border border-blue-100 dark:border-[#0095da]/20 shadow-2xl shadow-[#0095da]/10">
                  <motion.div
                    animate={{ 
                      rotate: [0, 4, -4, 4, 0],
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <WashingMachine size={84} className="text-[#0095da]" />
                  </motion.div>
                </div>

                {/* Rotating Drum effect inside machine */}
                <motion.div
                  className="absolute top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 border-2 border-[#0095da]/40 rounded-full border-t-[#0095da]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                  <Shirt size={28} className="text-[#0095da]/60" />
                </div>
              </motion.div>
            </div>

            {/* Logo and Progress */}
            <div className="mt-12 text-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <img 
                  src="/assets/logo.svg" 
                  alt="Speedy Laundry Logo" 
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
              
              <div className="mt-8 w-56 h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0095da]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-4 text-[#0095da] dark:text-blue-400 text-sm font-medium tracking-wide uppercase"
              >
                Preparing Your Service...
              </motion.p>
            </div>

            {/* Subtle Bubble Decorations - Client Side Only to avoid Hydration Mismatch */}
            {isMounted && bubbleProps.map((bubble, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#0095da]/10 backdrop-blur-[2px]"
                initial={{ 
                  width: bubble.width,
                  height: bubble.height,
                  x: bubble.x,
                  y: 500,
                  opacity: 0 
                }}
                animate={{ 
                  y: -500,
                  opacity: [0, 0.6, 0],
                  x: bubble.animateX
                }}
                transition={{ 
                  duration: bubble.duration,
                  repeat: Infinity,
                  delay: bubble.delay,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={isLoading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
};

export default Preloader;
