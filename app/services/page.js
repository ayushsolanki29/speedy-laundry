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

const services = [
  {
    id: "iron",
    title: "Iron Only",
    subtitle: "Wrinkle-free perfection",
    image: "/assets/service-iron.jpg",
    items: ["Shirts", "Trousers", "Dresses", "Blouses", "Skirts", "Uniforms"]
  },
  {
    id: "wash-iron",
    title: "Wash + Iron",
    subtitle: "Fresh, clean & pressed",
    image: "/assets/service-wash.jpg",
    items: ["Everyday wear", "Work clothes", "Bedding", "Towels", "Sportswear"]
  },
  {
    id: "wash-dry-fold",
    title: "Wash, Dry & Fold",
    subtitle: "Complete laundry care",
    image: "/assets/service-fold.jpg",
    items: ["Family laundry", "Bulk items", "Gym clothes", "Kids clothes", "Linens"]
  },
];

const dryCleaningCategories = [
  { name: "Formal", items: ["Suits", "Blazers", "Tuxedos", "Dress Shirts", "Evening Gowns"] },
  { name: "Bridal", items: ["Wedding Dresses", "Veils", "Bridesmaid Dresses", "Accessories"] },
  { name: "Luxury", items: ["Silk", "Cashmere", "Wool", "Velvet", "Lace", "Satin"] },
  { name: "Outerwear", items: ["Coats", "Leather", "Suede", "Fur", "Down Jackets"] },
  { name: "Home", items: ["Curtains", "Duvets", "Pillows", "Blankets", "Table Linens"] },
  { name: "Specialty", items: ["Vintage", "Designer", "Costumes", "Embroidered"] },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Clean & Minimal */}
        <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 bg-background">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                Premium laundry care, delivered to your door
              </p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-12 pt-12 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Truck, text: "Free Pickup & Delivery" },
                { icon: Clock, text: "24-48hr Turnaround" },
                { icon: Leaf, text: "Eco-Friendly" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-1">
                        {service.title}
                      </h2>
                      <p className="text-white/80">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, i) => (
                      <span 
                        key={i}
                        className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dry Cleaning - Featured Section */}
        <section className="py-24 lg:py-32 bg-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image 
                    src="/assets/service-dryclean.jpg"
                    alt="Dry Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-display font-bold">50+</div>
                  <div className="text-white/80 text-sm">Item Types</div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
                  Premium Care
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Dry Cleaning
                </h2>
                <p className="text-white/70 text-lg mb-10">
                  Expert care for your finest garments and delicate fabrics
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {dryCleaningCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {category.name}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {category.items.join(" · ")}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                href="/"
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
                  href="/#contact"
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
