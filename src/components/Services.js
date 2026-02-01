'use client';

import { motion } from "framer-motion";
import { Sparkles, UserRound, Layers, Bed, Maximize2, Snowflake, Waves, Feather, Shirt, Utensils } from "lucide-react";

const serviceIron = "/assets/service-iron.jpg";
const serviceWash = "/assets/service-wash.jpg";
const serviceFold = "/assets/service-fold.jpg";
const serviceDryclean = "/assets/service-dryclean.jpg";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L8 12v8c0 11.5 6.8 22.3 16 26 9.2-3.7 16-14.5 16-26v-8L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Iron Only",
    description: "Professional steam pressing for wrinkle-free perfection",
    image: serviceIron,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M18 24c0-3.3 2.7-6 6-6s6 2.7 6 6M15 30c2-3 5.3-5 9-5s7 2 9 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Wash + Iron",
    description: "Complete wash and iron – fresh, clean, perfectly pressed",
    image: serviceWash,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M8 22h32M16 14V8M32 14V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 28h8M18 32h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Wash + Dry + Fold",
    description: "Full service laundry, neatly folded and ready to wear",
    image: serviceFold,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="36" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M24 32v8M20 36h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Dry Cleaning",
    description: "Expert care for suits, dresses, and delicate fabrics",
    image: serviceDryclean,
  },
];

const additionalItems = [
  { name: "Wedding Dresses", icon: Sparkles },
  { name: "Suits & Blazers", icon: UserRound },
  { name: "Leather & Suede", icon: Layers },
  { name: "Duvets & Pillows", icon: Bed },
  { name: "Curtains & Drapes", icon: Maximize2 },
  { name: "Fur Coats", icon: Snowflake },
  { name: "Knitwear & Woolens", icon: Waves },
  { name: "Silk & Delicates", icon: Feather },
  { name: "Uniforms", icon: Shirt },
  { name: "Table Linens", icon: Utensils },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="font-script text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional laundry care for all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 h-80"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional items we clean - Infinite Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden"
        >
          <div className="bg-card rounded-[2.5rem] py-16 border border-border relative overflow-hidden group">
            <h3 className="text-center text-3xl font-display font-bold mb-12">
              We Also <span className="font-script text-primary">Clean</span>
            </h3>
            
            {/* Gradient Fades for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-6 whitespace-nowrap px-6"
                animate={{ 
                  x: ["0%", "-50%"]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {/* Double items for perfectly seamless loop */}
                {[...additionalItems, ...additionalItems].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-secondary/30 backdrop-blur-sm hover:bg-primary transition-all duration-300 px-8 py-5 rounded-2xl border border-border group/item"
                  >
                    <div className="text-primary group-hover/item:text-white transition-colors">
                      <item.icon size={26} strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-medium text-foreground group-hover/item:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
