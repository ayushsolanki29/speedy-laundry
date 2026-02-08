'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Truck,
  Clock,
  Leaf,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero - Clean & Minimal */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/assets/our services/ChatGPT Image Feb 6, 2026, 09_58_10 AM.png"
              alt="Premium laundry service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
          </div>

          <div className="container px-6 relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                Our Services<span className="text-primary">.</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl">
                Premium laundry care tailored to your specific needs, delivered right to your doorstep.
              </p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-8 lg:gap-16 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Truck, text: "Free Pickup & Delivery" },
                { icon: Clock, text: "24-48hr Turnaround" },
                { icon: Leaf, text: "Eco-Friendly Processing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm lg:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="pb-24 lg:pb-32 pt-8">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link href={`/services/${service.id}`} className="block">
                    <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-6 border border-border shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Floating Badge on Image */}
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-1">
                          {service.title}
                        </h2>
                        <p className="text-white/80 font-medium tracking-wide uppercase text-xs">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* View Button */}
                      <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <ArrowRight size={24} className="text-white" />
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col gap-4">
                    <p className="text-muted-foreground text-lg leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.items.slice(0, 4).map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border"
                        >
                          {item}
                        </span>
                      ))}
                      {service.items.length > 4 && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                          +{service.items.length - 4} More
                        </span>
                      )}
                    </div>
                    
                    {/* CTA Button inside card */}
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 w-full"
                    >
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-16">
              <button
                onClick={() => window.location.href = '/services'}
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-12 py-5 rounded-full hover:bg-muted hover:scale-105 transition-all border-2 border-primary shadow-lg text-lg"
              >
                View All Services
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>


        {/* Process Steps - Clean */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {[
                { num: "01", title: "Book", desc: "Schedule online" },
                { num: "02", title: "Collect", desc: "Free pickup" },
                { num: "03", title: "Clean", desc: "Expert care" },
                { num: "04", title: "Deliver", desc: "To your door" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    100% Satisfaction Guarantee
                  </h3>
                  <p className="text-white/70">Not happy? We&apos;ll re-clean it free</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="container">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Ready for Fresh Clothes?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of happy customers in High Wycombe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-10 py-4 rounded-full hover:brightness-110 transition-all text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-full hover:bg-background transition-all text-lg border border-border"
                >
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
