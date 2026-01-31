'use client';

import { motion } from "framer-motion";
import { Calendar, Package, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Schedule Pickup",
    description: "Book online or call us. Choose your preferred date and time.",
    icon: Calendar,
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "We Collect",
    description: "Our driver picks up your laundry right from your doorstep.",
    icon: Package,
    color: "from-cyan-400 to-teal-400",
  },
  {
    number: "03",
    title: "Expert Cleaning",
    description: "Your clothes are professionally cleaned with care.",
    icon: Sparkles,
    color: "from-teal-400 to-emerald-400",
  },
  {
    number: "04",
    title: "We Deliver",
    description: "Fresh, clean clothes delivered back within 24-48 hours.",
    icon: Truck,
    color: "from-emerald-400 to-green-400",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Simple Process</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How It <span className="font-script text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Four simple steps to fresh, clean clothes
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 rounded-full" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Animated Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-8 z-10`}
                >
                  {/* Pulse animation ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <step.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Step number */}
                <div className="text-center">
                  <span className="text-6xl font-display font-bold text-muted/20">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold -mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <step.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    STEP {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Pickup
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
