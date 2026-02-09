'use client';

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    name: "Henna M.",
    avatar: "https://i.pravatar.cc/150?u=henna",
    text: "I've used Speedy Laundry for every specialized item and I am OBSESSED. It's so convenient, whatever detergent they use smells amazing, and all of the delivery people have been so friendly. Highly recommend!",
    bgColor: "bg-[#2A5C72]", // Dark Slate Blue
    textColor: "text-white"
  },
  {
    name: "Brandon G.",
    avatar: "https://i.pravatar.cc/150?u=brandon",
    text: "Speedy Laundry is the most reliable and convenient wash and fold delivery service. Clothes always come back perfectly clean. I also trust them with my dry cleaning, even my nicest things.",
    bgColor: "bg-[#AEE1E1]", // Light Cyan/Blue
    textColor: "text-slate-800"
  },
  {
    name: "Isabelle S.",
    avatar: "https://i.pravatar.cc/150?u=isabelle",
    text: "This is the only laundry and dry cleaning service I'll ever use. Such a professional and VIP experience plus the pick up and delivery were both so quick. Love this service!",
    bgColor: "bg-[#F7C978]", // Soft Gold
    textColor: "text-slate-800"
  },
  {
    name: "Dylan A.",
    avatar: "https://i.pravatar.cc/150?u=dylan",
    text: "I'm all about Speedy Laundry. I actually have laundry in building now, but can't kick how easy they make it. Great service - don't know why people still do their own laundry.",
    bgColor: "bg-[#F2A71B]", // Brand Accent Gold
    textColor: "text-white"
  }
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const autoSlideRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto slide every 2 seconds on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 2000); // 2 seconds
    
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    // Reset auto slide timer when user manually navigates
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 2000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    // Reset auto slide timer when user manually navigates
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 2000);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset auto slide timer when user manually navigates
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 2000);
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-4 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What our customers <span className="font-script text-primary">have to say</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-star fill-star" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium text-sm sm:text-base">4.9/5 from 300+ Google Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Infinite Scroll Marquee */}
      <div className="hidden md:block relative">
        {/* Gradient Fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <motion.div 
            className="flex gap-6 whitespace-nowrap px-6 py-4"
            animate={{ 
              x: ["0%", "-50%"]
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the array for seamless looping */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className={`${review.bgColor} ${review.textColor} w-[400px] rounded-[2.5rem] p-8 flex flex-col min-h-[450px] shadow-xl relative overflow-hidden shrink-0 whitespace-normal`}
              >
                {/* Google Logo Icon */}
                <div className="mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-grow">
                  <p className="text-xl font-medium leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-black/5">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  />
                  <span className="font-bold text-lg">{review.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: Slider with auto slide */}
      <div className="md:hidden relative px-4">
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
              >
                <div
                  className={`${review.bgColor} ${review.textColor} rounded-[2rem] p-6 flex flex-col min-h-[380px] shadow-xl relative overflow-hidden whitespace-normal`}
                >
                  {/* Google Logo Icon */}
                  <div className="mb-6">
                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow">
                    <p className="text-base font-medium leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/5">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                    />
                    <span className="font-bold text-base">{review.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slider Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
         
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          
          
        </div>
      </div>

      {/* CTA Section */}
      <div className="container px-4 md:px-4 mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Your Review <span className="font-script text-primary">Matters to Us</span>
            </h3>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              We take pride in every clean. Share your experience with Speedy Laundry and help others discover premium laundry care.
            </p>
            <a 
              href="https://google.com" // Mock link to Google Reviews
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg"
            >
              Add Your Review
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              </svg>
            </a>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-12 md:-bottom-24 -right-12 md:-right-24 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-12 md:-top-24 -left-12 md:-left-24 w-32 h-32 md:w-64 md:h-64 bg-secondary/50 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;