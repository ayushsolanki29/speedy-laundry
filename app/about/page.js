'use client';

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { 
  Leaf, 
  Clock, 
  Truck, 
  Shield, 
  Users, 
  Award, 
  Sparkles,
  Heart,
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";

// Animated counter component
const Counter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 24, suffix: "hr", label: "Fast Turnaround" },
  { value: 100, suffix: "%", label: "Eco-Friendly" },
];

const values = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
  },
  {
    icon: Clock,
    title: "24-48hr Service",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=400&fit=crop"
  },
];

const features = [
  { icon: Users, label: "Expert Team" },
  { icon: Shield, label: "Trusted Service" },
  { icon: Award, label: "Premium Care" },
  { icon: Heart, label: "Customer Love" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero - Full Screen Visual */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=1920&h=1080&fit=crop"
              alt="Premium laundry service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
          </div>
          
          <div className="container relative z-10">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/90 text-sm font-medium">High Wycombe &amp; Surrounding Areas</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
                Laundry
                <br />
                <span className="text-primary">Reimagined</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Premium care for your clothes. Eco-friendly practices. Delivered to your door.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book Now
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary py-8">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TrustedPartners />

        {/* Visual Values Grid */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                What Makes Us <span className="text-primary">Different</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                >
                  <Image 
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - Minimal Text, Maximum Impact */}
        <section className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&h=600&fit=crop" 
                    alt="Our team at work"
                    width={800}
                    height={600}
                    className="rounded-3xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">Family</div>
                        <div className="text-muted-foreground">Owned Business</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                  Built on Trust,
                  <br />
                  <span className="text-primary">Driven by Care</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  What started as a small family dream has grown into High Wycombe&apos;s most trusted laundry service. Every garment tells a story – and we treat yours with the care it deserves.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                      <span className="font-semibold text-foreground">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Promise Section - Enhanced with CTABanner Inspiration */}
        <section className="relative py-32 lg:py-48 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1469504512102-900f29606341?w=1920&h=1080&fit=crop"
              alt="Fresh laundry"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/85" />
          </div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side: Promise Statement */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-8xl text-white/10 font-serif mb-6 leading-none">&quot;</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  Your satisfaction isn&apos;t just our goal –
                  <br />
                  <span className="text-accent">it&apos;s our promise</span>
                </h2>
                <p className="text-xl text-white/80 font-script mb-8">
                  – The Speedy Laundry Team
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-block"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-accent text-header font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
                  >
                    Schedule Pickup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side: Guarantee Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:pb-4"
              >
                {/* Stars Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-accent rounded-full" />
                  ))}
                </div>
                
                {/* Guarantee Text */}
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-xl mb-8">
                  Every order is backed by our industry-leading satisfaction guarantee. 
                  If you&apos;re not completely thrilled with the cleaning of your clothes, 
                  we will re-clean them — 
                  <span className="text-white font-medium"> free of charge.</span>
                </p>

                {/* Trust Points */}
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "100% Satisfaction Guarantee" },
                    { icon: Truck, text: "Free Redelivery if Needed" },
                    { icon: Heart, text: "Care for Every Garment" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-white/90 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Visual */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Simple as <span className="text-primary">1, 2, 3</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { step: "01", title: "We Collect", desc: "Schedule a pickup" },
                { step: "02", title: "We Clean", desc: "Expert care & eco-friendly" },
                { step: "03", title: "We Deliver", desc: "Fresh to your door" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center group"
                >
                  <div className="relative inline-block mb-6">
                    <div className="text-8xl md:text-9xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-foreground">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready for <span className="text-primary">Fresh</span> Clothes?
              </h2>
              <p className="text-xl text-white/70 mb-10">
                Join thousands of happy customers across High Wycombe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-10 py-5 rounded-full hover:bg-white/20 transition-all text-lg"
                >
                  View Services
                </Link>
              </div>
              <p className="mt-10 text-2xl font-script text-primary">
                Making Laundry Day a Breeze!
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
