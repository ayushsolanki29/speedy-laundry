'use client';

import { motion } from "framer-motion";
import { Calendar, Package, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Schedule Pickup",
    description: "Book online or call us. Choose your preferred date and time.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "We Collect",
    description: "Our driver picks up your laundry right from your doorstep.",
    icon: Package,
  },
  {
    number: "03",
    title: "Expert Cleaning",
    description: "Your clothes are professionally cleaned with care.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "We Deliver",
    description: "Fresh, clean clothes delivered back within 24-48 hours.",
    icon: Truck,
  },
];

const HowItWorksNew = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4 border border-primary/10">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-header">
            How It <span className="font-script text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light">
            We&apos;ve streamlined our process to save you time. Professional laundry services in four simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-px bg-slate-100 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 group"
              >
                {/* Icon Container */}
                <div className="relative mb-8 text-center">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-display font-black text-slate-50 z-0 select-none">
                    {step.number}
                  </span>
                  <div className="relative w-24 h-24 mx-auto bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200/50 group-hover:border-primary/20 group-hover:shadow-primary/5 transition-all duration-300 z-10">
                    <div className="absolute inset-2 bg-primary/5 rounded-2xl" />
                    <step.icon className="w-10 h-10 text-primary relative z-20" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold mb-3 text-header group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop (between items) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[100px] -right-4 translate-x-1/2 z-20">
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-full border border-slate-100">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 text-xl"
            >
              <Calendar className="w-6 h-6" />
              Schedule Your Pickup
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksNew;
